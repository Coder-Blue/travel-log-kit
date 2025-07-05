<script lang="ts">
  import type { Icon as IconType } from "@lucide/svelte";

  import { page } from "$app/state";
  import { scale } from "svelte/transition";

  type SidebarButtonProps = {
    showLabel?: boolean;
    label: string;
    url?: string;
    Icon: typeof IconType;
  };

  const { showLabel, label, url, Icon }: SidebarButtonProps = $props();
  const currentPathname = page.url.pathname;
</script>

<div class={`tooltip-right ${!showLabel ? "tooltip" : ""}`} data-tip={showLabel ? undefined : label}>
  <a href={!url ? "/" : url}
     class={`flex gap-2 p-2 hover:bg-base-300 hover:cursor-pointer flex-nowrap ${url === currentPathname ? "bg-base-200" : ""} ${!showLabel ? "justify-center" : "justify-start"}`}>
    <Icon size="24" />
    {#if showLabel}
      <span transition:scale={{ duration: 100 }}>{label}</span>
    {/if}
  </a>
</div>
