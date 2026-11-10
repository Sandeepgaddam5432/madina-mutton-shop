import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { dailyRates } from "./schema";
import { seedRates } from "./seed-data";

/**
 * Usage: npx tsx src/db/seed.ts
 * Upserts the initial rates (existing items are reset to the seed values).
 */
async function main() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required");
  }

  const pool = new Pool({ connectionString: databaseUrl });
  const db = drizzle(pool);

  for (const rate of seedRates) {
    await db
      .insert(dailyRates)
      .values(rate)
      .onConflictDoUpdate({
        target: dailyRates.itemName,
        set: {
          retailPrice: rate.retailPrice,
          wholesalePrice: rate.wholesalePrice,
          unit: rate.unit,
          isAvailable: rate.isAvailable,
          updatedAt: new Date(),
        },
      });
  }

  console.log(`Seeded ${seedRates.length} daily rates.`);
  await pool.end();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
