<script lang="ts">
  import type { Icon as IconType } from "@lucide/svelte";

  import {
    ChevronLeftIcon,
    ChevronRightIcon,
    CirclePlusIcon,
    LogOutIcon,
    MapIcon,
  } from "@lucide/svelte";
  import SidebarButton from "$lib/components/sidebar-button.svelte";
  import { onMount } from "svelte";

  const SidebarItems: { label: string; href?: string; icon: typeof IconType }[] = [
    {
      label: "Locations",
      href: "/dashboard",
      icon: MapIcon,
    },
    {
      label: "Add Location",
      href: "/hello",
      icon: CirclePlusIcon,
    },
  ];

  let isSidebarOpen = $state<boolean>(true);

  onMount(() => {
    isSidebarOpen = localStorage.getItem("isSidebarOpen") === "true";
  });

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
    localStorage.setItem("isSidebarOpen", isSidebarOpen.toString());
  }
</script>

<div class="flex-1 flex">
  <div class={`bg-base-100 transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-16"}`}>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class={`flex hover:cursor-pointer hover:bg-base-200 p-2 ${!isSidebarOpen ? "justify-center" : "justify-end"}`} onclick={toggleSidebar}>
      {#if isSidebarOpen}
        <ChevronLeftIcon size="32" />
      {:else}
        <ChevronRightIcon size="32" />
      {/if}
    </div>
    <div class="flex flex-col">
      {#each SidebarItems as item}
        <SidebarButton showLabel={isSidebarOpen} label={item.label} url={item.href} Icon={item.icon} />
      {/each}
      <div class="divider"></div>
      <SidebarButton showLabel={isSidebarOpen} label="Sign Out" url="/sign-out" Icon={LogOutIcon} />
    </div>
  </div>
  <div class="flex-1"></div>
</div>
