<script>
  import { resolve } from '$app/paths';
  import PageHead from '#lib/components/PageHead.svelte';
  import PlayerCard from '#lib/components/home/PlayerCard.svelte';
  import GameCard from '#lib/components/home/GameCard.svelte';
  import { game } from '#lib/game2048/game.svelte.js';

  const bestNote = $derived(game.best > 0 ? `Your best this visit: ${game.best}` : '');
</script>

<PageHead
  description="A growing collection of browser games by Wenjun Cai, a software engineer and computer science master’s student in Seattle."
/>

<section class="hero" aria-labelledby="hero-heading">
  <div class="container hero-layout">
    <div class="hero-copy">
      <p class="eyebrow">Player 1 · Wenjun Cai</p>
      <h1 id="hero-heading">Welcome to the Arcade</h1>
      <p class="lead">
        A small, growing collection of browser games built by a software engineer and computer
        science master’s student in Seattle. Two cabinets are lit up, with more on the way.
      </p>
      <div class="button-row">
        <a class="button button--primary" href={resolve('/2048')}>Play 2048</a>
        <a class="button button--secondary" href={resolve('/game')}>Play the crossword</a>
      </div>
    </div>
    <PlayerCard />
  </div>
</section>

<section class="section" aria-labelledby="games-heading">
  <div class="container">
    <p class="eyebrow">Select a game</p>
    <h2 id="games-heading">Game library</h2>
    <p>
      One new game arrives with each project this semester, and each one adds a new layer to the
      same site: static pages first, then interactivity, a server with saved games, and finally
      real-time multiplayer.
    </p>

    <ul class="game-list plain-list">
      <li>
        <GameCard
          title="Mini Crossword"
          level={1}
          icon="puzzle"
          href={resolve('/game')}
          description="A 5×5 grid with ten clues and an arcade theme. Type, tab, and check your letters as you go."
        />
      </li>
      <li>
        <GameCard
          title="2048"
          level={2}
          icon="tile"
          href={resolve('/2048')}
          note={bestNote}
          description="Slide numbered tiles around a 4×4 board and merge matching pairs until one reaches 2048."
        />
      </li>
      <li>
        <GameCard
          title="Battleship"
          level={3}
          icon="ship"
          description="Hide your fleet, call your shots, and sink every ship before your opponent finds yours."
        />
      </li>
      <li>
        <GameCard
          title="Liar’s Dice"
          level={4}
          icon="dice"
          description="A real-time bluffing game for three or more players. Raise the bid or call the lie."
        />
      </li>
    </ul>
  </div>
</section>

<style>
  .hero {
    padding-block: var(--space-7);
    background-image: repeating-linear-gradient(
      0deg,
      var(--color-scanline) 0 2px,
      transparent 2px 4px
    );
    border-bottom: var(--border-width) solid var(--color-surface-raised);
  }

  .hero-layout {
    display: grid;
    gap: var(--space-7);
    align-items: center;
  }

  .hero-copy .lead {
    margin-bottom: var(--space-6);
  }

  .game-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 13rem), 1fr));
    gap: var(--space-5);
    margin-top: var(--space-6);
  }

  @media (min-width: 48rem) {
    .hero {
      padding-block: var(--space-8);
    }

    .hero-layout {
      grid-template-columns: 3fr 2fr;
    }
  }
</style>
