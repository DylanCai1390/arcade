<script>
  import { cells, clues } from '#lib/crossword/puzzle.js';
  import ClueList from './ClueList.svelte';
  import CurrentClue from './CurrentClue.svelte';

  let active = $state(null);

  const acrossClue = $derived(active && clues.across.find((clue) => clue.number === active.across));
  const downClue = $derived(active && clues.down.find((clue) => clue.number === active.down));

  function label(cell) {
    return (
      `Row ${cell.row + 1}, column ${cell.col + 1}. ` +
      `${cell.across} Across, letter ${cell.acrossPosition} of ${cell.acrossLength}. ` +
      `${cell.down} Down, letter ${cell.downPosition} of ${cell.downLength}.`
    );
  }

  function handleFocusOut(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) active = null;
  }
</script>

<div class="puzzle-layout">
  <section class="puzzle-area" aria-labelledby="grid-heading">
    <h2 id="grid-heading" class="visually-hidden">Puzzle grid</h2>
    <form class="puzzle" aria-labelledby="grid-heading">
      <CurrentClue across={acrossClue} down={downClue} />

      <div class="board-frame">
        <div
          class="crossword-grid"
          role="group"
          aria-label="Crossword, 5 rows by 5 columns"
          onfocusout={handleFocusOut}
        >
          {#each cells as cell (cell.id)}
            {#if cell.block}
              <span class="cell cell--block"></span>
            {:else}
              <label class="cell" class:in-word={active && cell.across === active.across}>
                {#if cell.number}
                  <span class="cell-number" aria-hidden="true">{cell.number}</span>
                {/if}
                <input
                  class="cell-input"
                  type="text"
                  maxlength="1"
                  pattern={`[${cell.letter}${cell.letter.toLowerCase()}]`}
                  required
                  placeholder=" "
                  autocomplete="off"
                  autocapitalize="characters"
                  spellcheck="false"
                  enterkeyhint="next"
                  aria-label={label(cell)}
                  aria-describedby={`clue-${cell.across}-across clue-${cell.down}-down`}
                  onfocus={() => (active = cell)}
                />
              </label>
            {/if}
          {/each}
        </div>
      </div>

      <p class="puzzle-status" role="status">
        <span class="status-playing">Fill every square to clear the level.</span>
        <span class="status-clear">Level clear! Every letter is correct.</span>
      </p>

      <div class="puzzle-controls">
        <label class="check-toggle">
          <input class="check-toggle-input" type="checkbox" />
          Show mistakes
        </label>
        <button class="button button--secondary" type="reset">Clear grid</button>
      </div>
    </form>
  </section>

  <section class="clues" aria-labelledby="clues-heading">
    <h2 id="clues-heading">Clues</h2>
    <div class="clue-columns">
      <ClueList direction="across" clues={clues.across} activeNumber={active?.across} />
      <ClueList direction="down" clues={clues.down} activeNumber={active?.down} />
    </div>
  </section>
</div>

<style>
  .puzzle-layout {
    display: grid;
    gap: var(--space-7);
    align-items: start;
  }

  .puzzle-area {
    justify-self: center;
  }

  .board-frame {
    width: max-content;
    margin-inline: auto;
    padding: var(--space-3);
    background-color: var(--color-surface-raised);
    background-image: repeating-linear-gradient(
      0deg,
      var(--color-scanline) 0 2px,
      transparent 2px 4px
    );
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius);
    box-shadow: calc(2 * var(--pixel-offset)) calc(2 * var(--pixel-offset)) 0 var(--color-border);
    transition:
      border-color var(--duration-fast) var(--ease-out),
      box-shadow var(--duration-fast) var(--ease-out);
  }

  .crossword-grid {
    display: grid;
    grid-template-columns: repeat(5, var(--cell-size));
    grid-auto-rows: var(--cell-size);
    gap: 2px;
    padding: 2px;
    background-color: var(--color-border);
  }

  .cell {
    position: relative;
    display: block;
    background-color: var(--color-paper);
    transition: background-color var(--duration-fast) var(--ease-out);
  }

  .cell--block {
    background-color: var(--color-bg);
    background-image: repeating-linear-gradient(
      45deg,
      var(--color-surface-raised) 0 2px,
      transparent 2px 8px
    );
  }

  .cell.in-word {
    background-color: var(--color-accent-soft);
  }

  .cell-number {
    position: absolute;
    top: 2px;
    left: 4px;
    z-index: 1;
    color: var(--color-border);
    font-size: var(--text-xs);
    font-weight: 700;
    line-height: 1;
    pointer-events: none;
  }

  .cell-input {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: var(--space-2) 0 0;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    color: var(--color-text-inverse);
    caret-color: var(--color-text-inverse);
    font-family: var(--font-body);
    font-size: var(--text-xl);
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
  }

  .cell-input:focus-visible {
    background-color: var(--color-accent);
    outline: 3px solid var(--color-text-inverse);
    outline-offset: -6px;
  }

  .puzzle:has(.check-toggle-input:checked)
    .cell:has(.cell-input:not(:placeholder-shown):invalid)
    .cell-input {
    color: var(--color-error);
  }

  .puzzle:has(.check-toggle-input:checked) .cell:has(.cell-input:not(:placeholder-shown):invalid)::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      to top right,
      transparent calc(50% - 1px),
      var(--color-error) calc(50% - 1px) calc(50% + 1px),
      transparent calc(50% + 1px)
    );
    pointer-events: none;
  }

  .puzzle-status {
    margin: var(--space-5) auto var(--space-4);
    font-weight: 700;
    text-align: center;
  }

  .status-clear {
    display: none;
  }

  .puzzle:not(:has(.cell-input:invalid)) .status-playing {
    display: none;
  }

  .puzzle:not(:has(.cell-input:invalid)) .status-clear {
    display: inline;
    color: var(--color-accent);
    font-family: var(--font-display);
    font-size: var(--text-lg);
  }

  .puzzle:not(:has(.cell-input:invalid)) .board-frame {
    border-color: var(--color-accent);
    box-shadow: calc(2 * var(--pixel-offset)) calc(2 * var(--pixel-offset)) 0 var(--color-accent);
  }

  .puzzle-controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: var(--space-4);
  }

  .check-toggle {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    min-height: var(--tap-target);
    padding-inline: var(--space-2);
    font-weight: 700;
    cursor: pointer;
  }

  .check-toggle-input {
    width: 1.25rem;
    height: 1.25rem;
    margin: 0;
    accent-color: var(--color-accent);
    cursor: pointer;
  }

  .clue-columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 13rem), 1fr));
    gap: var(--space-5);
  }

  @media (min-width: 48rem) {
    .puzzle-layout {
      grid-template-columns: auto 1fr;
    }

    .puzzle-area {
      justify-self: start;
    }

    .clue-columns {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 60rem) {
    .clue-columns {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
