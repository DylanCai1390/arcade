<script>
  import { page } from '$app/state';
  import { resolve } from '$app/paths';
  import Icon from './Icon.svelte';
  import { logoPaths } from '#lib/icons.js';
  import { navItems, SITE_NAME } from '#lib/site.js';
</script>

<header class="site-header">
  <nav class="site-nav container" aria-label="Main">
    <a class="site-title" href={resolve('/')}>
      <svg class="logo" viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
        <path class="logo-accent" d={logoPaths.accent} />
        <path class="logo-stick" d={logoPaths.stick} />
        <path class="logo-base" d={logoPaths.base} />
      </svg>
      <span>{SITE_NAME}</span>
    </a>
    <ul class="nav-list">
      {#each navItems as item (item.route)}
        <li>
          <a
            class="nav-link"
            href={resolve(item.route)}
            aria-current={page.route.id === item.route ? 'page' : undefined}
          >
            <span class="nav-icon"><Icon name={item.icon} /></span>
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 20;
    background-color: var(--color-surface);
    border-bottom: var(--border-width) solid var(--color-border);
  }

  .site-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    min-height: var(--header-height);
  }

  .site-title {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    min-height: var(--tap-target);
    color: var(--color-text);
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 600;
    text-decoration: none;
  }

  .site-title:hover {
    color: var(--color-accent);
  }

  .logo {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
  }

  .logo-accent {
    fill: var(--color-accent);
  }

  .logo-stick {
    fill: var(--color-text-muted);
  }

  .logo-base {
    fill: currentColor;
  }

  .nav-list {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
    display: flex;
    margin: 0;
    padding: 0 0 env(safe-area-inset-bottom);
    list-style: none;
    background-color: var(--color-surface);
    border-top: var(--border-width) solid var(--color-border);
  }

  .nav-list li {
    flex: 1;
    min-width: 0;
    margin: 0;
  }

  .nav-link {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-1);
    min-height: var(--tabbar-height);
    padding: var(--space-2) 0;
    color: var(--color-text-muted);
    font-size: var(--text-xs);
    font-weight: 700;
    text-decoration: none;
    transition: color var(--duration-fast) var(--ease-out);
  }

  .nav-link:hover {
    color: var(--color-text);
  }

  .nav-link:focus-visible {
    outline-offset: -3px;
  }

  .nav-link[aria-current='page'] {
    color: var(--color-accent);
  }

  .nav-link[aria-current='page']::after {
    content: '';
    position: absolute;
    top: 0;
    right: 25%;
    left: 25%;
    height: var(--space-1);
    background-color: var(--color-accent);
  }

  .nav-icon {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    transition: transform var(--duration-fast) var(--ease-out);
  }

  .nav-link:hover .nav-icon {
    transform: translateY(-2px);
  }

  @media (min-width: 48rem) {
    .site-title {
      font-size: var(--text-base);
    }

    .nav-list {
      position: static;
      gap: var(--space-1);
      padding: 0;
      background-color: transparent;
      border-top: 0;
    }

    .nav-list li {
      flex: none;
    }

    .nav-link {
      flex-direction: row;
      min-height: var(--tap-target);
      padding: var(--space-2) var(--space-3);
      font-size: var(--text-sm);
    }

    .nav-link[aria-current='page']::after {
      top: auto;
      right: var(--space-3);
      bottom: calc(-1 * var(--space-2));
      left: var(--space-3);
    }

    .nav-icon {
      display: none;
    }
  }
</style>
