import { goto } from "$app/navigation";
import { createAuthClient } from "better-auth/svelte";
import { fromStore } from "svelte/store";

const authClient = createAuthClient();

export function useAuthStore() {
  const session = fromStore(authClient.useSession());

  const user = $derived(session.current.data?.user);
  const loading = $derived(session.current.isPending);

  async function signIn() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
  }

  async function signOut() {
    await authClient.signOut();
    goto("/");
  }

  return {
    get loading() {
      return loading;
    },
    get user() {
      return user;
    },
    signIn,
    signOut,
  };
}
