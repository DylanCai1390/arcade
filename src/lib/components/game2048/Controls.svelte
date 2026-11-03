<script>
  let { onmove } = $props();

  const buttons = [
    { direction: 'up', label: 'Move up', symbol: '↑' },
    { direction: 'left', label: 'Move left', symbol: '←' },
    { direction: 'down', label: 'Move down', symbol: '↓' },
    { direction: 'right', label: 'Move right', symbol: '→' },
  ];
</script>

<div class="controls" role="group" aria-label="Move tiles">
  {#each buttons as button (button.direction)}
    <button
      type="button"
      class="control control--{button.direction}"
      aria-label={button.label}
      onclick={() => onmove(button.direction)}
    >
      <span aria-hidden="true">{button.symbol}</span>
    </button>
  {/each}
</div>

<style>
  .controls {
    display: none;
    grid-template-areas:
      '. up .'
      'left down right';
    grid-template-columns: repeat(3, 4rem);
    gap: var(--space-2);
    justify-content: center;
    margin-top: var(--space-5);
  }

  .control {
    min-height: 4rem;
    background-color: var(--color-surface-raised);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius);
    color: var(--color-accent);
    font-size: var(--text-xl);
    font-weight: 700;
    cursor: pointer;
    touch-action: manipulation;
  }

  .control:active {
    background-color: var(--color-accent);
    color: var(--color-text-inverse);
  }

  .control--up {
    grid-area: up;
  }

  .control--left {
    grid-area: left;
  }

  .control--down {
    grid-area: down;
  }

  .control--right {
    grid-area: right;
  }

  @media (max-width: 47.99rem), (pointer: coarse) {
    .controls {
      display: grid;
    }
  }
</style>
