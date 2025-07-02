import * as environment from "$env/dynamic/private";
import { z } from "zod";

export const EnvSchema = z.object({
  NODE_ENV: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

export default EnvSchema.parse(environment);
