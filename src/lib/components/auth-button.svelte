<script lang="ts">
  import { GithubIcon } from "@lucide/svelte";
  import { useAuthStore } from "$lib/stores/auth.svelte";

  const authStore = useAuthStore();
</script>

<button onclick={authStore.signIn} class="btn btn-accent" disabled={authStore.loading}>
  Sign In with Github
  {#if authStore.loading}
    <span class="loading loading-spinner loading-md"></span>
  {:else}
    <GithubIcon size="24" />
  {/if}
</button>
