<script>
  import '../app.css';
  import { env } from '$env/dynamic/public';

  let { children } = $props();
</script>

<svelte:head>
  {#if env.PUBLIC_GA4_MEASUREMENT_ID}
    <script async src="https://www.googletagmanager.com/gtag/js?id={env.PUBLIC_GA4_MEASUREMENT_ID}"></script>
    {@html `<script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${env.PUBLIC_GA4_MEASUREMENT_ID}');
    </script>`}
  {/if}
</svelte:head>

<a href="#main" class="skip-link">Skip to main content</a>

{@render children()}

<style>
  .skip-link {
    position: absolute;
    top: -100%;
    left: var(--spacing-md);
    background: var(--color-accent);
    color: var(--color-charcoal);
    padding: 0.75rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 0 0 4px 4px;
    z-index: 1000;
    transition: top var(--transition-fast);
  }

  .skip-link:focus {
    top: 0;
    outline: none;
  }
</style>
