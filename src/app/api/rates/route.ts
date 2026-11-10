import { getRates, latestUpdate } from "@/lib/rates";

export const dynamic = "force-dynamic";

/** Public read-only endpoint with today's rates. */
export async function GET() {
  const rates = await getRates();
  return Response.json(
    { rates, updatedAt: latestUpdate(rates) },
    { headers: { "Cache-Control": "no-store" } },
  );
}
