import { createAuthClient } from "better-auth/svelte";

const authClient = createAuthClient();

export function useAuthStore() {
  let loading = $state<boolean>(false);

  async function signIn() {
    loading = true;
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
    loading = false;
  }

  return {
    get loading() {
      return loading;
    },
    signIn,
  };
}
