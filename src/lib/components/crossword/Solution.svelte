<script>
  import { answer, cells, clues } from '#lib/crossword/puzzle.js';

  const groups = [
    { direction: 'across', title: 'Across answers' },
    { direction: 'down', title: 'Down answers' },
  ];
</script>

<details class="solution">
  <summary>Reveal the solution</summary>
  <div class="solution-body">
    <div class="solution-grid" aria-hidden="true">
      {#each cells as cell (cell.id)}
        {#if cell.block}
          <span class="cell cell--block"></span>
        {:else}
          <span class="cell">
            {#if cell.number}<span class="cell-number">{cell.number}</span>{/if}
            <span class="cell-letter">{cell.letter}</span>
          </span>
        {/if}
      {/each}
    </div>
    <div class="solution-answers">
      {#each groups as group (group.direction)}
        <section aria-labelledby={`answers-${group.direction}-heading`}>
          <h3 id={`answers-${group.direction}-heading`}>{group.title}</h3>
          <ol class="answer-list">
            {#each clues[group.direction] as clue (clue.number)}
              <li value={clue.number}>{answer(group.direction, clue.number)}</li>
            {/each}
          </ol>
        </section>
      {/each}
    </div>
  </div>
</details>

<style>
  .solution {
    max-width: 44rem;
    background-color: var(--color-surface);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius);
  }

  summary {
    min-height: var(--tap-target);
    padding: var(--space-3) var(--space-4);
    color: var(--color-accent);
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 600;
    cursor: pointer;
    transition: background-color var(--duration-fast) var(--ease-out);
  }

  summary:hover {
    background-color: var(--color-surface-raised);
  }

  .solution[open] summary {
    border-bottom: var(--border-width) solid var(--color-border);
  }

  .solution-body {
    display: grid;
    gap: var(--space-5);
    padding: var(--space-5);
  }

  .solution-grid {
    display: grid;
    grid-template-columns: repeat(5, var(--cell-size-small));
    grid-auto-rows: var(--cell-size-small);
    gap: 2px;
    width: max-content;
    padding: 2px;
    background-color: var(--color-border);
  }

  .cell {
    position: relative;
    display: block;
    background-color: var(--color-paper);
  }

  .cell--block {
    background-color: var(--color-bg);
  }

  .cell-number {
    position: absolute;
    top: 2px;
    left: 4px;
    color: var(--color-border);
    font-size: var(--text-xs);
    font-weight: 700;
    line-height: 1;
  }

  .cell-letter {
    display: grid;
    place-items: center;
    height: 100%;
    padding-top: var(--space-1);
    color: var(--color-text-inverse);
    font-size: var(--text-lg);
    font-weight: 700;
  }

  .solution-answers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 9rem), 1fr));
    gap: var(--space-4);
  }

  h3 {
    font-size: var(--text-base);
  }

  .answer-list {
    margin: 0;
    padding-left: var(--space-6);
    font-weight: 700;
    letter-spacing: 0.08em;
  }

  .answer-list li + li {
    margin-top: var(--space-1);
  }

  .answer-list li::marker {
    color: var(--color-accent);
  }

  @media (min-width: 48rem) {
    .solution-body {
      grid-template-columns: auto 1fr;
      align-items: start;
    }
  }
</style>
