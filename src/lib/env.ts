import * as environment from "$env/dynamic/private";
import { z } from "zod";

export const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  TURSO_DATABASE_URL: z.string(),
  TURSO_AUTH_TOKEN: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

export default EnvSchema.parse(environment);
