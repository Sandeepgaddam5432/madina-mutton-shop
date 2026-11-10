import { sql } from "drizzle-orm";
import {
  boolean,
  check,
  date,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * Live daily prices. Updated by the shop through /api/rates/update
 * (or the mobile friendly /admin/rates dashboard).
 */
export const dailyRates = pgTable("daily_rates", {
  id: serial("id").primaryKey(),
  itemName: varchar("item_name", { length: 120 }).notNull().unique(),
  retailPrice: integer("retail_price").notNull(),
  wholesalePrice: integer("wholesale_price").notNull(),
  unit: varchar("unit", { length: 40 }).notNull().default("per kg"),
  isAvailable: boolean("is_available").notNull().default(true),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

/**
 * Doorstep live cutting requests (functions, weddings, bulk buyers - 15kg+).
 */
export const serviceBookings = pgTable(
  "service_bookings",
  {
    id: serial("id").primaryKey(),
    customerName: varchar("customer_name", { length: 120 }).notNull(),
    phoneNumber: varchar("phone_number", { length: 20 }).notNull(),
    eventDate: date("event_date", { mode: "string" }).notNull(),
    location: text("location").notNull(),
    estimatedKg: integer("estimated_kg").notNull(),
    status: varchar("status", { length: 20 }).notNull().default("pending"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    check("estimated_kg_min_15", sql`${table.estimatedKg} >= 15`),
    check("booking_status_valid", sql`${table.status} in ('pending', 'confirmed')`),
  ],
);

export type DailyRateRow = typeof dailyRates.$inferSelect;
export type NewDailyRate = typeof dailyRates.$inferInsert;
export type ServiceBookingRow = typeof serviceBookings.$inferSelect;
export type NewServiceBooking = typeof serviceBookings.$inferInsert;
