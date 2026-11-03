<script>
  let { across = null, down = null } = $props();
</script>

<div class="current-clue" aria-hidden="true">
  {#if across && down}
    <p><span class="label">{across.number} Across</span> {across.text}</p>
    <p><span class="label">{down.number} Down</span> {down.text}</p>
  {:else}
    <p class="hint">Select a square to see its clues.</p>
  {/if}
</div>

<style>
  .current-clue {
    position: sticky;
    top: calc(var(--header-height) + var(--space-2));
    z-index: 5;
    width: 0;
    min-width: 100%;
    min-height: 8rem;
    margin-bottom: var(--space-4);
    padding: var(--space-3) var(--space-4);
    background-color: var(--color-surface);
    border: var(--border-width) solid var(--color-border);
    border-left: var(--space-1) solid var(--color-accent);
    border-radius: var(--radius);
    font-size: var(--text-sm);
    line-height: 1.4;
  }

  p {
    margin: 0;
  }

  p + p {
    margin-top: var(--space-2);
  }

  .hint {
    color: var(--color-text-muted);
  }

  .label {
    color: var(--color-accent);
    font-weight: 700;
    white-space: nowrap;
  }
</style>
