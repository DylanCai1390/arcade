<script>
  import { wordLengthOf } from '#lib/crossword/puzzle.js';

  let { direction, clues, activeNumber = null } = $props();

  const title = $derived(direction === 'across' ? 'Across' : 'Down');
</script>

<section aria-labelledby={`${direction}-heading`}>
  <h3 id={`${direction}-heading`}>{title}</h3>
  <ol class="clue-list">
    {#each clues as clue (clue.number)}
      <li
        class="clue"
        class:active={clue.number === activeNumber}
        id={`clue-${clue.number}-${direction}`}
        value={clue.number}
      >
        {clue.text}
        <span class="clue-length">({wordLengthOf(direction, clue.number)})</span>
      </li>
    {/each}
  </ol>
</section>

<style>
  .clue-list {
    padding-left: var(--space-6);
  }

  .clue {
    padding: var(--space-1) var(--space-2);
    border-left: var(--space-1) solid transparent;
    border-radius: var(--radius);
    transition:
      background-color var(--duration-fast) var(--ease-out),
      border-color var(--duration-fast) var(--ease-out);
  }

  .clue.active {
    background-color: var(--color-surface-raised);
    border-left-color: var(--color-accent);
  }

  .clue::marker {
    color: var(--color-accent);
    font-weight: 700;
  }

  .clue-length {
    color: var(--color-text-muted);
    font-size: var(--text-sm);
    white-space: nowrap;
  }
</style>
