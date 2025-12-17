<script>
  import { onMount } from 'svelte';

  let scrollY = $state(0);
  let prefersReducedMotion = $state(false);

  onMount(() => {
    // Check for reduced motion preference
    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function handleScroll() {
      scrollY = window.scrollY;
    }

    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  // Parallax offset - moves slower than scroll (0.3 = 30% of scroll speed)
  let parallaxOffset = $derived(prefersReducedMotion ? 0 : scrollY * 0.3);
</script>

<section class="hero">
  <img
    src="/foxleigh-and-co-logo-large.png"
    alt=""
    class="hero__watermark"
    aria-hidden="true"
    loading="lazy"
    style="transform: translateY(calc(-50% + {parallaxOffset}px)) rotate(-45deg)"
  />
  <div class="container">
    <div class="hero__content">
      <h1 class="hero__title">Foxleigh & Co</h1>
      <p class="hero__subtitle">
        A holding company for a small portfolio of media and software ventures.
      </p>
      <span class="hero__accent" aria-hidden="true"></span>
    </div>
  </div>
</section>

<style>
  .hero {
    padding: var(--spacing-2xl) 0;
    min-height: 55vh;
    display: flex;
    align-items: center;
    position: relative;
    background:
      radial-gradient(ellipse 80% 50% at 20% 40%, rgba(36, 48, 55, 0.5) 0%, transparent 50%),
      radial-gradient(ellipse 60% 40% at 80% 60%, rgba(36, 48, 55, 0.3) 0%, transparent 50%),
      var(--color-charcoal);
    overflow: hidden;
  }

  .hero__watermark {
    position: absolute;
    top: 50%;
    right: -5%;
    width: 500px;
    height: 500px;
    object-fit: contain;
    /* transform applied inline for parallax effect */
    opacity: 0.04;
    filter: blur(8px);
    pointer-events: none;
    user-select: none;
    will-change: transform;
  }

  @media (min-width: 768px) {
    .hero {
      padding: calc(var(--spacing-2xl) * 1.5) 0;
      min-height: 60vh;
    }

    .hero__watermark {
      width: 700px;
      height: 700px;
      right: 0;
      opacity: 0.05;
      filter: blur(12px);
    }
  }

  @media (min-width: 1200px) {
    .hero__watermark {
      width: 900px;
      height: 900px;
      right: 5%;
      filter: blur(16px);
    }
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 5%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, var(--color-accent-subtle) 0%, transparent 70%);
    transform: translateY(-50%);
    opacity: 0.4;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    .hero::before {
      width: 500px;
      height: 500px;
      right: 10%;
    }
  }

  .hero__content {
    max-width: 720px;
    position: relative;
    z-index: 1;
  }

  .hero__title {
    margin-bottom: var(--spacing-md);
  }

  .hero__subtitle {
    font-size: clamp(1.125rem, 1rem + 0.5vw, 1.375rem);
    color: var(--color-muted);
    max-width: 560px;
    line-height: 1.8;
  }

  .hero__accent {
    display: block;
    width: 64px;
    height: 2px;
    background: linear-gradient(90deg, var(--color-accent) 0%, rgba(248, 107, 28, 0.2) 100%);
    margin-top: var(--spacing-lg);
    border-radius: 1px;
  }
</style>
