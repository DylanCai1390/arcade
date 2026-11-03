<script>
  import { fade } from 'svelte/transition';

  let { over, score, onrestart, oncontinue } = $props();
</script>

<div class="message" transition:fade={{ duration: 200 }}>
  {#if over}
    <h2>Game over</h2>
    <p>Final score: {score}</p>
    <button type="button" class="button button--primary" onclick={onrestart}>Try again</button>
  {:else}
    <h2>You made 2048!</h2>
    <p>Score: {score}</p>
    <div class="button-row">
      <button type="button" class="button button--primary" onclick={oncontinue}>Keep playing</button>
      <button type="button" class="button button--secondary" onclick={onrestart}>New game</button>
    </div>
  {/if}
</div>

<style>
  .message {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    padding: var(--space-4);
    background-color: var(--color-overlay);
    border-radius: var(--radius);
    text-align: center;
  }

  h2 {
    margin: 0;
    color: var(--color-accent);
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 600;
  }

  p {
    margin: 0 0 var(--space-3);
    font-weight: 700;
  }

  .button-row {
    justify-content: center;
  }
</style>
