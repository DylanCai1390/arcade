<script>
  import { pixelIcons, brandIcons } from '#lib/icons.js';

  let { name } = $props();

  const brand = $derived(brandIcons[name]);
</script>

{#if brand}
  <svg class="icon" viewBox={brand.viewBox} aria-hidden="true"><path d={brand.d} /></svg>
{:else}
  <svg class="icon" viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
    <path d={pixelIcons[name]} />
  </svg>
{/if}

<style>
  .icon {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
</style>
