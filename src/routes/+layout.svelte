<script>
  import '../app.css';

  let { children } = $props();
</script>

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
