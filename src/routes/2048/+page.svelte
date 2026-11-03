<script>
  import { onMount } from 'svelte';
  import PageHead from '#lib/components/PageHead.svelte';
  import Board from '#lib/components/game2048/Board.svelte';
  import ScoreBoard from '#lib/components/game2048/ScoreBoard.svelte';
  import Controls from '#lib/components/game2048/Controls.svelte';
  import GameMessage from '#lib/components/game2048/GameMessage.svelte';
  import { game } from '#lib/game2048/game.svelte.js';

  const keyDirections = {
    ArrowUp: 'up',
    ArrowDown: 'down',
    ArrowLeft: 'left',
    ArrowRight: 'right',
  };

  const announcement = $derived.by(() => {
    if (!game.started) return '';
    if (game.over) return `Game over. Final score ${game.score}.`;
    if (game.won && !game.keepPlaying) return `You made 2048! Score ${game.score}.`;
    return `Score ${game.score}`;
  });

  onMount(() => {
    if (!game.started) game.newGame();
  });

  function handleKeydown(event) {
    const direction = keyDirections[event.key];
    if (!direction || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.target instanceof Element && event.target.closest('input, textarea, select')) return;
    event.preventDefault();
    game.play(direction);
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<PageHead
  title="2048"
  description="Play 2048 in Wenjun Cai’s Arcade: slide and merge tiles with the arrow keys until one reaches 2048."
  path="2048/"
/>

<div class="container">
  <header class="page-intro">
    <p class="eyebrow">Level 2 · 2048</p>
    <h1>2048</h1>
    <p class="lead">
      Use the arrow keys to slide every tile. Matching tiles merge into one. Reach 2048 to win.
    </p>
  </header>

  <section class="game" aria-labelledby="game-heading">
    <h2 id="game-heading" class="visually-hidden">Game</h2>
    <div class="toolbar">
      <ScoreBoard score={game.score} best={game.best} />
      <button type="button" class="button button--primary" onclick={() => game.newGame()}>
        New game
      </button>
    </div>

    <div class="board-area">
      <Board tiles={game.tiles} board={game.board} />
      {#if game.paused}
        <GameMessage
          over={game.over}
          score={game.score}
          onrestart={() => game.newGame()}
          oncontinue={() => game.continuePlaying()}
        />
      {/if}
    </div>

    <Controls onmove={(direction) => game.play(direction)} />

    <p class="visually-hidden" aria-live="polite">{announcement}</p>
  </section>

  <section class="section" aria-labelledby="rules-heading">
    <h2 id="rules-heading">How to play</h2>
    <ul class="rules">
      <li>Press an arrow key, or tap the arrow buttons on a phone, to slide every tile as far as it can go.</li>
      <li>Two tiles with the same number merge into one, and their sum is added to your score.</li>
      <li>After every move that changes the board, a new 2 or 4 appears in an empty square.</li>
      <li>Reach 2048 to win, then keep going if you like. The game ends when no move is left.</li>
    </ul>
  </section>
</div>

<style>
  .game {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    width: var(--board-size);
    margin-bottom: var(--space-4);
  }

  .board-area {
    position: relative;
  }

  .rules {
    max-width: var(--measure);
  }
</style>
