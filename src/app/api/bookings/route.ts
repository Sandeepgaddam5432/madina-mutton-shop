import { db } from "@/db";
import { serviceBookings } from "@/db/schema";
import { istTodayISO } from "@/lib/format";
import { clientIp, hit } from "@/lib/rate-limit";
import { SITE } from "@/lib/site";

export const dynamic = "force-dynamic";

type Payload = {
  customerName?: unknown;
  phoneNumber?: unknown;
  eventDate?: unknown;
  location?: unknown;
  estimatedKg?: unknown;
};

function normalizePhone(raw: string): string | null {
  let digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

function isValidDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

/** POST /api/bookings - stores a doorstep live cutting request (15kg+). */
export async function POST(request: Request) {
  const limiter = hit(`booking:${clientIp(request)}`, 8, 10 * 60 * 1000);
  if (!limiter.allowed) {
    return Response.json(
      { error: "Too many requests. Please call us instead." },
      { status: 429, headers: { "Retry-After": String(limiter.retryAfter) } },
    );
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const errors: Record<string, string> = {};

  const customerName = typeof body.customerName === "string" ? body.customerName.trim() : "";
  if (customerName.length < 2 || customerName.length > 120) errors.customerName = "name";

  const phoneNumber = typeof body.phoneNumber === "string" ? normalizePhone(body.phoneNumber) : null;
  if (!phoneNumber) errors.phoneNumber = "phone";

  const eventDate = typeof body.eventDate === "string" ? body.eventDate : "";
  if (!isValidDate(eventDate) || eventDate < istTodayISO()) errors.eventDate = "date";

  const location = typeof body.location === "string" ? body.location.trim() : "";
  if (location.length < 3 || location.length > 500) errors.location = "location";

  const estimatedKg = typeof body.estimatedKg === "number" ? body.estimatedKg : Number.NaN;
  if (!Number.isInteger(estimatedKg) || estimatedKg < SITE.minDoorstepKg || estimatedKg > 5000) {
    errors.estimatedKg = "kg";
  }

  if (Object.keys(errors).length > 0 || !phoneNumber) {
    return Response.json({ error: "Validation failed.", fields: errors }, { status: 400 });
  }

  try {
    const [created] = await db
      .insert(serviceBookings)
      .values({
        customerName,
        phoneNumber,
        eventDate,
        location,
        estimatedKg,
        status: "pending",
      })
      .returning({ id: serviceBookings.id });

    return Response.json({ ok: true, id: created.id }, { status: 201 });
  } catch (error) {
    console.error("booking insert failed", error);
    return Response.json({ error: "Could not save booking." }, { status: 500 });
  }
}
