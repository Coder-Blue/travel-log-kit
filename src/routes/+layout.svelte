<script lang="ts">
  import Navbar from "$lib/components/app/navbar.svelte";

  import "../app.css";

  const { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
  <Navbar />
  <main class="flex-1 flex flex-col">
    {@render children()}
  </main>
</div>
