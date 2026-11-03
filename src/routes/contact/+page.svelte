<script>
  import PageHead from '#lib/components/PageHead.svelte';
  import Icon from '#lib/components/Icon.svelte';
</script>

<PageHead
  title="Contact"
  description="How to reach Wenjun Cai: email, GitHub, and LinkedIn."
  path="contact/"
/>

<div class="container">
  <header class="page-intro">
    <p class="eyebrow">Player 2 has entered</p>
    <h1>Contact</h1>
    <p class="lead">I’m open to full-time software engineering roles starting in 2027. Email is the fastest way to reach me.</p>
  </header>

  <section class="section" aria-labelledby="channels-heading">
    <h2 id="channels-heading">Ways to reach me</h2>
    <ul class="contact-list plain-list">
      <li class="contact-card">
        <span class="contact-icon"><Icon name="mail" /></span>
        <h3>Email</h3>
        <p>Best for interviews, roles, and anything time-sensitive.</p>
        <a class="contact-link" href="mailto:iamdylan1265@gmail.com">iamdylan1265@gmail.com</a>
      </li>
      <li class="contact-card">
        <span class="contact-icon"><Icon name="linkedin" /></span>
        <h3>LinkedIn</h3>
        <p>My work history, and the best place to connect professionally.</p>
        <a class="contact-link" href="https://www.linkedin.com/in/dylan-cai-285469389">LinkedIn profile</a>
      </li>
      <li class="contact-card">
        <span class="contact-icon"><Icon name="github" /></span>
        <h3>GitHub</h3>
        <p>Source code for this arcade and my other projects.</p>
        <a class="contact-link" href="https://github.com/DylanCai1390">GitHub profile</a>
      </li>
    </ul>
  </section>
</div>

<style>
  .contact-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
    gap: var(--space-5);
  }

  .contact-card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    padding: var(--space-5);
    background-color: var(--color-surface);
    border: var(--border-width) solid var(--color-border);
    border-radius: var(--radius);
    transition:
      border-color var(--duration-fast) var(--ease-out),
      box-shadow var(--duration-fast) var(--ease-out),
      transform var(--duration-fast) var(--ease-out);
  }

  .contact-card h3,
  .contact-card p {
    margin: 0;
  }

  .contact-card p {
    color: var(--color-text-muted);
  }

  .contact-icon {
    display: block;
    width: 2rem;
    height: 2rem;
    margin-bottom: var(--space-2);
    color: var(--color-accent);
  }

  .contact-link {
    display: flex;
    align-items: center;
    min-height: var(--tap-target);
    margin-top: auto;
    font-weight: 700;
    overflow-wrap: anywhere;
  }

  .contact-link::after {
    content: "";
    position: absolute;
    inset: 0;
  }

  .contact-card:hover {
    border-color: var(--color-accent);
    box-shadow: var(--pixel-offset) var(--pixel-offset) 0 var(--color-accent);
    transform: translate(-2px, -2px);
  }

  .contact-link:focus-visible {
    outline: none;
  }

  .contact-card:has(.contact-link:focus-visible) {
    border-color: var(--color-accent);
    outline: 3px solid var(--color-accent);
    outline-offset: 3px;
  }
</style>
