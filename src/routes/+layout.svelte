<script lang="ts">
  import Navbar from "$lib/components/app/navbar.svelte";

  import "../app.css";

  const { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
  <Navbar />
  <main>
    {@render children()}
  </main>
</div>
