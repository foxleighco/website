<section id="about" class="about" aria-labelledby="about-heading">
  <div class="container">
    <div class="section__header">
      <p class="section__label">About</p>
      <h2 id="about-heading">Who we are</h2>
    </div>
    <div class="about__content">
      <p>
        Foxleigh & Co serves as the parent entity for a focused collection of creative and technology ventures. Our role is one of stewardship: providing structure, stability, and long-term support to the projects under our care.
      </p>
      <p>
        We take a measured approach to growth, prioritising sustainable development over rapid expansion. Each venture operates with independence whilst benefiting from shared resources and a commitment to quality that defines everything we do.
      </p>
    </div>
  </div>
</section>

<style>
  .about {
    background-color: var(--color-primary);
    position: relative;
  }

  .about::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, var(--color-border-hover) 50%, transparent 100%);
  }

  .section__header {
    margin-bottom: var(--spacing-lg);
  }

  .section__label {
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--color-accent);
    margin-bottom: var(--spacing-sm);
  }

  .about__content {
    max-width: 680px;
  }

  .about__content p {
    color: rgba(252, 252, 251, 0.8);
  }
</style>
