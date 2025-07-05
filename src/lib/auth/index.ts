import type { User } from "better-auth";

import { env } from "$env/dynamic/private";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { createAuthMiddleware } from "better-auth/plugins";

import db from "../db";

export type UserWithId = Omit<User, "id"> & {
  id: number;
};

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  hooks: {
    after: createAuthMiddleware(async (ctx) => {
      if (ctx.path === "/get-session") {
        if (!ctx.context.session) {
          return ctx.json({
            session: null,
            user: null,
          });
        }
        return ctx.json(ctx.context.session);
      }
    }),
  },
  advanced: {
    generateId: false,
  },
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_CLIENT_ID as string,
      clientSecret: env.AUTH_GITHUB_CLIENT_SECRET as string,
    },
  },
});
