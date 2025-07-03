<script lang="ts">
  import AuthButton from "../auth-button.svelte";
  import ThemeToggle from "./theme-toggle.svelte";
</script>

<div class="navbar bg-primary text-primary-content">
  <div class="navbar-start">
    <a href="/" class="btn btn-ghost text-xl">
      Travel Log
    </a>
  </div>
  <div class="navbar-end">
    <ThemeToggle />
    <AuthButton />
  </div>
</div>
