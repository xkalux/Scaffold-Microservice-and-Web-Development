import { migrate } from "drizzle-orm/bun-sqlite/migrator";
import { db, sqlite } from "./client";

try {
  migrate(db, { migrationsFolder: "./drizzle" });
  console.log("Database migrations applied.");
} finally {
  sqlite.close();
}
