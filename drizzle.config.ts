/* eslint-disable node/no-process-env */
import { defineConfig } from "drizzle-kit";

if (!process.env.TURSO_DATABASE_URL)
  throw new Error("DATABASE_URL is not set");

export default defineConfig({
  out: "./src/lib/db/migrations",
  schema: "./src/lib/db/schema/index.ts",
  casing: "snake_case",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
});
