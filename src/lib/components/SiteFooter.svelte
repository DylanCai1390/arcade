<script>
  import Icon from './Icon.svelte';
  import { socialLinks } from '#lib/site.js';
</script>

<footer class="site-footer">
  <div class="container footer-layout">
    <p>&copy; 2026 Wenjun Cai</p>
    <ul class="social-list" aria-label="Find me online">
      {#each socialLinks as link (link.href)}
        <li>
          <a class="social-link" href={link.href}>
            <span class="social-icon"><Icon name={link.icon} /></span>
            <span class="visually-hidden">{link.label}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</footer>

<style>
  .site-footer {
    margin-top: var(--space-8);
    padding-block: var(--space-6);
    background-color: var(--color-surface);
    border-top: var(--border-width) solid var(--color-border);
    color: var(--color-text-muted);
    font-size: var(--text-sm);
  }

  .footer-layout {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
  }

  .footer-layout p {
    margin: 0;
  }

  .social-list {
    display: flex;
    gap: var(--space-2);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .social-list li + li {
    margin-top: 0;
  }

  .social-link {
    display: grid;
    place-items: center;
    width: var(--tap-target);
    height: var(--tap-target);
    color: var(--color-text);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius);
    transition:
      color var(--duration-fast) var(--ease-out),
      border-color var(--duration-fast) var(--ease-out),
      transform var(--duration-fast) var(--ease-out);
  }

  .social-link:hover {
    color: var(--color-accent);
    border-color: var(--color-accent);
    transform: translateY(-2px);
  }

  .social-icon {
    display: block;
    width: 1.25rem;
    height: 1.25rem;
  }
</style>
