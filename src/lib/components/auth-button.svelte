<script lang="ts">
  import { GithubIcon, LogOutIcon } from "@lucide/svelte";
  import { useAuthStore } from "$lib/stores/auth.svelte";

  const authStore = useAuthStore();
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
{#if authStore.user && !authStore.loading}
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn m-1">
      {#if authStore.user.image}
        <div class="avatar">
          <div class="w-8 rounded-full">
            <img src={authStore.user.image} alt={authStore.user.name} />
          </div>
        </div>
      {/if}
      {authStore.user.name}
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
      <li>
        <a href="/sign-out">
          <LogOutIcon size="24" />
          Sign Out
        </a>
      </li>
    </ul>
  </div>
{:else}
  <button onclick={authStore.signIn} class="btn btn-accent" disabled={authStore.loading}>
    Sign In with Github
    {#if authStore.loading}
      <span class="loading loading-spinner loading-md"></span>
    {:else}
      <GithubIcon size="24" />
    {/if}
  </button>
{/if}
