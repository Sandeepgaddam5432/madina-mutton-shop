import { asc } from "drizzle-orm";
import { db } from "@/db";
import { dailyRates } from "@/db/schema";
import { seedRates } from "@/db/seed-data";

export type Rate = {
  id: number;
  itemName: string;
  retailPrice: number;
  wholesalePrice: number;
  unit: string;
  isAvailable: boolean;
  updatedAt: string;
};

function fallbackRates(): Rate[] {
  const now = new Date().toISOString();
  return seedRates.map((rate, index) => ({ id: -(index + 1), ...rate, updatedAt: now }));
}

/**
 * Returns today's rates. On first run (empty table) the initial rates are seeded.
 * If the database is temporarily unreachable the seed values are shown instead,
 * so the public pages never crash.
 */
export async function getRates(): Promise<Rate[]> {
  try {
    let rows = await db.select().from(dailyRates).orderBy(asc(dailyRates.id));

    if (rows.length === 0) {
      await db.insert(dailyRates).values(seedRates).onConflictDoNothing();
      rows = await db.select().from(dailyRates).orderBy(asc(dailyRates.id));
    }

    return rows.map((row) => ({
      id: row.id,
      itemName: row.itemName,
      retailPrice: row.retailPrice,
      wholesalePrice: row.wholesalePrice,
      unit: row.unit,
      isAvailable: row.isAvailable,
      updatedAt: row.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error("getRates failed, using fallback rates", error);
    return fallbackRates();
  }
}

export function latestUpdate(rates: Rate[]): string | null {
  if (rates.length === 0) return null;
  return rates.reduce((latest, rate) => (rate.updatedAt > latest ? rate.updatedAt : latest), rates[0].updatedAt);
}
