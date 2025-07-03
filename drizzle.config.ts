/* eslint-disable node/no-process-env */
import { defineConfig } from "drizzle-kit";

if (!process.env.TURSO_DATABASE_URL)
  throw new Error("You need to set the env for db");

export default defineConfig({
  out: "./src/lib/db/migrations",
  schema: "./src/lib/db/schema/index.ts",
  casing: "snake_case",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.NODE_ENV === "development" ? undefined : process.env.TURSO_AUTH_TOKEN!,
  },
});
