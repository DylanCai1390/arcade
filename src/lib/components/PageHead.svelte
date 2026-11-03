<script>
  import { SITE_NAME, SITE_URL } from '#lib/site.js';

  let { title = '', description, path = '' } = $props();

  const fullTitle = $derived(title ? `${title} · ${SITE_NAME}` : SITE_NAME);
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={SITE_URL + path} />
  <meta property="og:image" content={`${SITE_URL}social-card.png`} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Wenjun Cai’s Arcade: a pixel-art portrait beside the site title" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
