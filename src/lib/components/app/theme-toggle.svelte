<script lang="ts">
  import { MoonIcon, SunIcon } from "@lucide/svelte";

  let isDarkmode = $state<boolean>(false);

  function updateTheme(dark: boolean) {
    const newTheme = dark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    isDarkmode = dark;
  }

  $effect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      updateTheme(savedTheme === "dark");
    }
    else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      updateTheme(prefersDark);
    }
  });

  function handleToggleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    updateTheme(target.checked);
  }
</script>

<label class="swap swap-rotate mx-4">
  <input type="checkbox" onchange={handleToggleChange} checked={isDarkmode} />
  <SunIcon class="swap-on" size="24" />
  <MoonIcon class="swap-off" size="24" />
</label>
