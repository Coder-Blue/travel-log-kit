<script lang="ts">
  import { GithubIcon } from "@lucide/svelte";

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
    <button class="btn btn-accent">
      Sign In with Github
      <GithubIcon size="24" />
    </button>
  </div>
</div>
