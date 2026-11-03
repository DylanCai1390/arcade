<script>
  let { score, best } = $props();
</script>

<dl class="scores">
  <div class="score">
    <dt>Score</dt>
    <dd>{score}</dd>
  </div>
  <div class="score">
    <dt>Best</dt>
    <dd>{best}</dd>
  </div>
</dl>

<style>
  .scores {
    display: flex;
    gap: var(--space-3);
    margin: 0;
  }

  .score {
    min-width: 5.5rem;
    padding: var(--space-2) var(--space-3);
    background-color: var(--color-surface);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius);
    text-align: center;
  }

  dt {
    color: var(--color-text-muted);
    font-family: var(--font-display);
    font-size: var(--text-xs);
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  dd {
    margin: 0;
    font-size: var(--text-lg);
    font-weight: 700;
  }
</style>
