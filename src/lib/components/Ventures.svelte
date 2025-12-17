<script>
  const ventures = [
    {
      name: "Foxy's Lab",
      description: 'A YouTube channel and media brand covering smart homes, self-hosting, privacy, and practical engineering.',
      link: 'https://www.youtube.com/@foxyslab',
      linkText: 'Visit channel',
      status: null
    },
    {
      name: "Foxy's Tale",
      description: 'A secondary channel and long-form writing platform for behind-the-scenes and reflective content.',
      link: null,
      linkText: 'Coming soon',
      status: 'forthcoming'
    },
    {
      name: 'Streamline Studios',
      description: 'A software product focused on content planning and workflow tools for creators.',
      link: null,
      linkText: 'Coming soon',
      status: 'development'
    }
  ];
</script>

<section id="ventures" class="ventures" aria-labelledby="ventures-heading">
  <div class="container">
    <div class="section__header">
      <p class="section__label">Ventures</p>
      <h2 id="ventures-heading">Our portfolio</h2>
    </div>
    <div class="ventures__grid">
      {#each ventures as venture}
        <article class="venture-card">
          <div class="venture-card__header">
            <h3 class="venture-card__title">{venture.name}</h3>
            {#if venture.status === 'forthcoming'}
              <span class="venture-card__status venture-card__status--forthcoming">Forthcoming</span>
            {:else if venture.status === 'development'}
              <span class="venture-card__status venture-card__status--development">In Development</span>
            {/if}
          </div>
          <p class="venture-card__description">{venture.description}</p>
          {#if venture.link}
            <a href={venture.link} class="venture-card__link" target="_blank" rel="noopener">
              {venture.linkText}
              <span class="venture-card__link-arrow" aria-hidden="true">&rarr;</span>
            </a>
          {:else}
            <span class="venture-card__link--disabled">{venture.linkText}</span>
          {/if}
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .ventures {
    position: relative;
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

  .ventures__grid {
    display: grid;
    gap: var(--spacing-md);
  }

  @media (min-width: 640px) {
    .ventures__grid {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-lg);
    }
  }

  @media (min-width: 960px) {
    .ventures__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .venture-card {
    background-color: var(--color-card-bg);
    border: 1px solid var(--color-border);
    border-radius: 6px;
    padding: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition:
      border-color var(--transition-smooth),
      background-color var(--transition-smooth),
      box-shadow var(--transition-smooth),
      transform var(--transition-smooth);
  }

  .venture-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--color-accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-smooth);
  }

  .venture-card:hover {
    border-color: var(--color-border-hover);
    background-color: var(--color-card-bg-hover);
    box-shadow: var(--shadow-md);
    transform: translateY(-4px);
  }

  .venture-card:hover::before {
    transform: scaleX(1);
  }

  @media (min-width: 768px) {
    .venture-card {
      padding: var(--spacing-xl);
    }
  }

  .venture-card__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-sm);
  }

  .venture-card__title {
    font-size: 1.25rem;
  }

  .venture-card__status {
    font-size: 0.625rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0.3rem 0.6rem;
    border-radius: 3px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .venture-card__status--forthcoming {
    background-color: var(--color-accent-subtle);
    color: var(--color-accent);
  }

  .venture-card__status--development {
    background-color: rgba(252, 252, 251, 0.08);
    color: var(--color-muted);
  }

  .venture-card__description {
    font-size: 0.9375rem;
    color: var(--color-muted);
    flex-grow: 1;
    margin-bottom: var(--spacing-md);
    line-height: 1.7;
  }

  .venture-card__link {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-white);
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .venture-card__link:hover {
    color: var(--color-accent);
  }

  .venture-card__link-arrow {
    transition: transform var(--transition-fast);
  }

  .venture-card__link:hover .venture-card__link-arrow {
    transform: translateX(4px);
  }

  .venture-card__link--disabled {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-muted);
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    cursor: default;
    opacity: 0.7;
  }
</style>
