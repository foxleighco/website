<script>
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#ventures', label: 'Ventures' },
    { href: '#contact', label: 'Contact' }
  ];
</script>

<header class="header">
  <div class="container header__inner">
    <a href="/" class="logo" aria-label="Foxleigh & Co - Home">
      <img
        src="/favicon/favicon.svg"
        alt=""
        class="logo__image"
        onerror={(e) => e.currentTarget.style.display = 'none'}
      />
      <span class="logo__text">Foxleigh & Co</span>
    </a>
    <nav class="nav" aria-label="Main navigation">
      {#each navLinks as link}
        <a href={link.href} class="nav__link">{link.label}</a>
      {/each}
    </nav>
  </div>
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: rgba(26, 30, 34, 0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--color-border);
    box-shadow: var(--shadow-header);
  }

  .header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .logo__image {
    height: 36px;
    width: auto;
  }

  .logo__text {
    font-family: var(--font-serif);
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--color-white);
    letter-spacing: -0.01em;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  @media (min-width: 640px) {
    .nav {
      gap: var(--spacing-lg);
    }
  }

  .nav__link {
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--color-muted);
    position: relative;
    padding: 0.25rem 0;
  }

  @media (min-width: 640px) {
    .nav__link {
      font-size: 0.9375rem;
    }
  }

  .nav__link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--color-accent);
    transition: width var(--transition-normal);
  }

  .nav__link:hover {
    color: var(--color-white);
  }

  .nav__link:hover::after {
    width: 100%;
  }
</style>
