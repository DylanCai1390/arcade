<script>
  import PageHead from '#lib/components/PageHead.svelte';
  import Crossword from '#lib/components/crossword/Crossword.svelte';
  import Solution from '#lib/components/crossword/Solution.svelte';
</script>

<PageHead
  title="Mini Crossword"
  description="Play a 5×5 mini crossword with an arcade theme in Wenjun Cai’s Arcade."
  path="game/"
/>

<div class="container">
  <header class="page-intro">
    <p class="eyebrow">Level 1 · Mini Crossword</p>
    <h1>Mini Crossword</h1>
    <p class="lead">
      Ten clues, twenty-three squares. Click or tab into a square, type a letter, and press Tab to
      move on. To change a letter, delete it first.
    </p>
  </header>

  <Crossword />

  <section class="section" aria-labelledby="how-heading">
    <h2 id="how-heading">How to play</h2>
    <ul class="how-list">
      <li>Click or tap a white square, or press <kbd>Tab</kbd> to move into the grid, then type a letter.</li>
      <li>
        To change a letter, press <kbd>Backspace</kbd> first. Squares you reach with <kbd>Tab</kbd>
        select their letter, so you can type straight over it.
      </li>
      <li>
        Press <kbd>Tab</kbd> to go to the next square and <kbd>Shift</kbd> + <kbd>Tab</kbd> to go
        back. The across word you are in lights up, along with both clues for that square.
      </li>
      <li>Turn on <strong>Show mistakes</strong> to mark wrong letters with a red slash as you type.</li>
      <li>Fill every square correctly and the board lights up to tell you the level is clear.</li>
    </ul>
  </section>

  <section class="section" aria-labelledby="solution-heading">
    <h2 id="solution-heading">Stuck?</h2>
    <p>
      The answers are tucked away below. Opening them will not change your board, so you can peek
      at a single word and keep going.
    </p>
    <Solution />
  </section>
</div>

<style>
  .how-list {
    max-width: var(--measure);
  }

  kbd {
    padding: 0 var(--space-1);
    background-color: var(--color-surface-raised);
    border: 1px solid var(--color-border);
    border-bottom-width: 3px;
    border-radius: var(--radius);
    font-family: var(--font-body);
    font-size: var(--text-sm);
  }
</style>
