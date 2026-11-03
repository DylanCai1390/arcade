<script>
  import Icon from '../Icon.svelte';

  let { title, level, description, icon, href = null, note = '' } = $props();

  const live = $derived(href !== null);
</script>

<article class="game-card" class:live>
  <span class="game-icon"><Icon name={icon} /></span>
  <p class="badge">Level {level} · {live ? 'Play now' : 'Coming soon'}</p>
  <h3>{title}</h3>
  <p>{description}</p>
  {#if note}
    <p class="note">{note}</p>
  {/if}
  {#if live}
    <a class="button button--primary" {href}>Play <span class="visually-hidden">{title}</span></a>
  {/if}
</article>

<style>
  .game-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-3);
    height: 100%;
    padding: var(--space-5);
    background-color: var(--color-surface);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius);
    transition:
      transform var(--duration-fast) var(--ease-out),
      box-shadow var(--duration-fast) var(--ease-out);
  }

  h3,
  p {
    margin: 0;
  }

  .badge {
    color: var(--color-text-muted);
  }

  .note {
    color: var(--color-accent);
    font-weight: 700;
  }

  .button {
    margin-top: auto;
  }

  .game-icon {
    display: block;
    width: 3rem;
    height: 3rem;
    color: var(--color-text-muted);
  }

  .live {
    border-color: var(--color-accent);
    box-shadow: var(--pixel-offset) var(--pixel-offset) 0 var(--color-accent);
  }

  .live .game-icon,
  .live .badge {
    color: var(--color-accent);
  }

  .live:hover {
    transform: translate(-2px, -2px);
    box-shadow: calc(var(--pixel-offset) + 2px) calc(var(--pixel-offset) + 2px) 0 var(--color-accent);
  }
</style>
