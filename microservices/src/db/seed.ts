import { eq } from "drizzle-orm";
import { db, sqlite } from "./client";
import { products } from "./schema";

try {
  const existing = db
    .select({ id: products.id })
    .from(products)
    .where(eq(products.id, "demo-product-001"))
    .get();

  if (!existing) {
    db.insert(products)
      .values({
        id: "demo-product-001",
        sku: "DEMO-001",
        name: "Sample notebook",
        priceCents: 12900,
        createdAt: new Date(),
      })
      .run();
  }

  console.log("Seed data is ready.");
} finally {
  sqlite.close();
}
