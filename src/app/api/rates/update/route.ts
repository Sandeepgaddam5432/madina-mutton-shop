import { createHash, timingSafeEqual } from "node:crypto";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { dailyRates } from "@/db/schema";
import { clientIp, hit } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

type IncomingRate = {
  itemName?: unknown;
  retailPrice?: unknown;
  wholesalePrice?: unknown;
  unit?: unknown;
  isAvailable?: unknown;
};

function digest(value: string): Buffer {
  return createHash("sha256").update(value).digest();
}

function pinMatches(candidate: string, expected: string): boolean {
  return timingSafeEqual(digest(candidate), digest(expected));
}

function readPin(request: Request): string {
  const header = request.headers.get("x-admin-pin");
  if (header) return header.trim();
  const auth = request.headers.get("authorization");
  if (auth?.toLowerCase().startsWith("bearer ")) return auth.slice(7).trim();
  return "";
}

function isPrice(value: unknown): value is number {
  return typeof value === "number" && Number.isInteger(value) && value >= 0 && value <= 10_000_000;
}

/**
 * POST /api/rates/update
 * Headers: x-admin-pin: <ADMIN_PIN>   (or Authorization: Bearer <ADMIN_PIN>)
 * Body: { "rates": [{ "itemName": "Goat Mutton", "retailPrice": 920, "wholesalePrice": 880,
 *                     "unit": "per kg", "isAvailable": true }] }
 * Items are upserted by itemName.
 */
export async function POST(request: Request) {
  const expectedPin = process.env.ADMIN_PIN;
  if (!expectedPin) {
    return Response.json({ error: "ADMIN_PIN is not configured on the server." }, { status: 503 });
  }

  const ip = clientIp(request);
  const limiter = hit(`pin:${ip}`, 15, 15 * 60 * 1000);
  if (!limiter.allowed) {
    return Response.json(
      { error: "Too many attempts. Try again later." },
      { status: 429, headers: { "Retry-After": String(limiter.retryAfter) } },
    );
  }

  if (!pinMatches(readPin(request), expectedPin)) {
    return Response.json({ error: "Invalid PIN." }, { status: 401 });
  }

  let body: { rates?: IncomingRate[] };
  try {
    body = (await request.json()) as { rates?: IncomingRate[] };
  } catch {
    return Response.json({ error: "Body must be valid JSON." }, { status: 400 });
  }

  if (!Array.isArray(body.rates) || body.rates.length === 0 || body.rates.length > 100) {
    return Response.json({ error: "Provide a non-empty 'rates' array (max 100)." }, { status: 400 });
  }

  const cleaned: {
    itemName: string;
    retailPrice: number;
    wholesalePrice: number;
    unit: string;
    isAvailable: boolean;
  }[] = [];

  for (const [index, rate] of body.rates.entries()) {
    const itemName = typeof rate.itemName === "string" ? rate.itemName.trim() : "";
    if (itemName.length < 2 || itemName.length > 120) {
      return Response.json({ error: `rates[${index}].itemName is invalid.` }, { status: 400 });
    }
    if (!isPrice(rate.retailPrice) || !isPrice(rate.wholesalePrice)) {
      return Response.json(
        { error: `rates[${index}] prices must be whole numbers (INR).` },
        { status: 400 },
      );
    }
    const unit = typeof rate.unit === "string" && rate.unit.trim() ? rate.unit.trim().slice(0, 40) : "per kg";
    const isAvailable = typeof rate.isAvailable === "boolean" ? rate.isAvailable : true;
    cleaned.push({
      itemName,
      retailPrice: rate.retailPrice,
      wholesalePrice: rate.wholesalePrice,
      unit,
      isAvailable,
    });
  }

  try {
    const now = new Date();
    for (const rate of cleaned) {
      await db
        .insert(dailyRates)
        .values({ ...rate, updatedAt: now })
        .onConflictDoUpdate({
          target: dailyRates.itemName,
          set: {
            retailPrice: rate.retailPrice,
            wholesalePrice: rate.wholesalePrice,
            unit: rate.unit,
            isAvailable: rate.isAvailable,
            updatedAt: now,
          },
        });
    }
  } catch (error) {
    console.error("rates update failed", error);
    return Response.json({ error: "Could not save rates." }, { status: 500 });
  }

  for (const path of ["/", "/rates", "/products"]) {
    revalidatePath(path);
  }

  return Response.json({ ok: true, updated: cleaned.length });
}
