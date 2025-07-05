<script lang="ts">
  import AuthButton from "$lib/components/auth-button.svelte";
  import { useAuthStore } from "$lib/stores/auth.svelte";

  const authStore = useAuthStore();
</script>

<div class="hero bg-base-300 container mx-auto mt-4">
  <div class="hero-content text-center min-h-96">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Travel Log</h1>
      <p class="py-6">
        Keep track of your travels and adventures with this simple travel log app. Add locations, photos, and notes to create a digital journal of your journeys.
      </p>
      {#if !authStore.user}
        <AuthButton />
      {:else}
        <a href="/dashboard" class="btn btn-primary">
          Start Logging
        </a>
      {/if}
    </div>
  </div>
</div>
