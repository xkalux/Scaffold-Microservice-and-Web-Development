import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
  id: text("id").primaryKey(),
  sku: text("sku").notNull().unique(),
  name: text("name").notNull(),
  priceCents: integer("price_cents").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});
