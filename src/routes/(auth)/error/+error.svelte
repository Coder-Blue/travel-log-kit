<script lang="ts">
  import { ArrowLeftIcon } from "@lucide/svelte";
  import { page } from "$app/state";
</script>

<div class="card bg-base-300 container mt-4 min-h-72 text-center mx-auto flex flex-col justify-center items-center gap-4">
  <div role="alert" class="alert alert-error min-w-1/2 text-center">
    <span>Oh no! {page.error!.message}</span>
  </div>
  <a href="/" class="btn btn-primary">
    Home
    <ArrowLeftIcon size="32" />
  </a>
</div>
