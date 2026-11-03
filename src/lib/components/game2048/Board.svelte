<script>
  import { scale } from 'svelte/transition';
  import { prefersReducedMotion } from 'svelte/motion';

  let { tiles, board } = $props();

  const label = $derived(
    board
      .map((row, r) => `Row ${r + 1}: ${row.map((value) => value || 'empty').join(', ')}`)
      .join('. '),
  );
  const duration = $derived(prefersReducedMotion.current ? 0 : 150);

  function tileColor(value) {
    return value > 2048 ? 'var(--tile-super)' : `var(--tile-${value})`;
  }
</script>

<div class="board" role="img" aria-label={`2048 board. ${label}.`}>
  {#each Array(16) as _, index (index)}
    <span class="slot"></span>
  {/each}
  {#each tiles as tile (tile.id)}
    <div
      class="tile"
      class:dark={tile.value >= 1024}
      class:long={tile.value >= 1024}
      style:--row={tile.row}
      style:--col={tile.col}
      style:--tile-color={tileColor(tile.value)}
      in:scale={{ duration, start: 0.4 }}
    >
      {#key tile.value}
        <span in:scale={{ duration, start: 0.7 }}>{tile.value}</span>
      {/key}
    </div>
  {/each}
</div>

<style>
  .board {
    --cell: calc((var(--board-size) - 5 * var(--board-gap)) / 4);
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--board-gap);
    width: var(--board-size);
    aspect-ratio: 1;
    padding: var(--board-gap);
    background-color: var(--color-border);
    border-radius: var(--radius);
  }

  .slot {
    background-color: var(--color-surface-raised);
    border-radius: var(--radius);
  }

  .tile {
    position: absolute;
    top: calc(var(--board-gap) + var(--row) * (var(--cell) + var(--board-gap)));
    left: calc(var(--board-gap) + var(--col) * (var(--cell) + var(--board-gap)));
    display: grid;
    place-items: center;
    width: var(--cell);
    height: var(--cell);
    background-color: var(--tile-color);
    border-radius: var(--radius);
    color: var(--tile-text-dark);
    font-size: calc(var(--cell) * 0.4);
    font-weight: 700;
    line-height: 1;
    transition:
      top 100ms var(--ease-out),
      left 100ms var(--ease-out);
  }

  .tile.dark {
    color: var(--tile-text-light);
    box-shadow: inset 0 0 0 2px var(--color-accent);
  }

  .tile.long {
    font-size: calc(var(--cell) * 0.3);
  }
</style>
