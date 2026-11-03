<script>
  import avatar from '#lib/assets/avatar.svg';

  const stats = [
    { label: 'Player', value: 'Wenjun Cai' },
    { label: 'Class', value: 'Software Engineer' },
    { label: 'Guild', value: 'Northeastern University, MSCS 2027' },
    { label: 'Base', value: 'Seattle, WA' },
  ];
</script>

<figure class="player-card">
  <img
    class="player-avatar"
    src={avatar}
    alt="Pixel-art portrait of Wenjun Cai with curly brown hair and a black T-shirt"
    width="192"
    height="192"
  />
  <figcaption>
    <dl class="player-stats">
      {#each stats as stat (stat.label)}
        <div>
          <dt>{stat.label}</dt>
          <dd>{stat.value}</dd>
        </div>
      {/each}
    </dl>
  </figcaption>
</figure>

<style>
  .player-card {
    justify-self: center;
    width: min(100%, 20rem);
    margin: 0;
    padding: var(--space-5);
    background-color: var(--color-surface);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius);
    box-shadow: calc(2 * var(--pixel-offset)) calc(2 * var(--pixel-offset)) 0 var(--color-accent);
  }

  .player-avatar {
    width: 100%;
    max-width: 12rem;
    margin-inline: auto;
    border: var(--border-width) solid var(--color-border);
    image-rendering: pixelated;
  }

  .player-stats {
    display: grid;
    gap: var(--space-2);
    margin: var(--space-5) 0 0;
    font-size: var(--text-sm);
  }

  .player-stats div {
    display: flex;
    justify-content: space-between;
    gap: var(--space-4);
    padding-bottom: var(--space-1);
    border-bottom: 1px dashed var(--color-border);
  }

  dt {
    color: var(--color-text-muted);
    font-family: var(--font-display);
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  dd {
    margin: 0;
    font-weight: 700;
    text-align: right;
  }
</style>
