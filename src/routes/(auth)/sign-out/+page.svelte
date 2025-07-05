<script lang="ts">
  import { useAuthStore } from "$lib/stores/auth.svelte";
  import { onMount } from "svelte";

  const authStore = useAuthStore();

  onMount(() => {
    authStore.signOut();
  });
</script>

<div class="card bg-base-300 container mt-4 min-h-72 text-center mx-auto flex flex-col justify-center items-center gap-4">
  <span class="loading loading-spinner loading-xl"></span>
</div>
