<script>
  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="container footer__inner">
    <div class="footer__left">
      <p class="footer__text">
        &copy; {currentYear} Foxleigh & Co. All rights reserved.
      </p>
      <p class="footer__text">
        Est. 2025 &middot; Based in the United Kingdom
      </p>
    </div>
    <div class="footer__right">
      <a
        href="https://www.linkedin.com/company/foxleigh-and-co"
        class="footer__link"
        target="_blank"
        rel="noopener"
        aria-label="Foxleigh & Co on LinkedIn"
      >
        <svg class="footer__icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
    </div>
  </div>
</footer>

<style>
  .footer {
    padding: var(--spacing-lg) 0 var(--spacing-xl);
    border-top: 1px solid var(--color-border);
  }

  .footer__inner {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  @media (min-width: 640px) {
    .footer__inner {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .footer__left {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .footer__right {
    display: flex;
    align-items: center;
  }

  .footer__text {
    font-size: 0.8125rem;
    color: var(--color-muted);
  }

  .footer__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    color: var(--color-muted);
    transition: color var(--transition-fast), background-color var(--transition-fast);
  }

  .footer__link:hover {
    color: var(--color-white);
    background-color: var(--color-card-bg-hover);
  }

  .footer__icon {
    flex-shrink: 0;
  }
</style>
