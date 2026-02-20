<script>
  import { enhance } from '$app/forms';

  let formState = $state('idle'); // idle, submitting, success, error
  let errorMessage = $state('');
  let loadTime = $state(Date.now());

  function handleSubmit() {
    return async ({ result, update }) => {
      if (result.type === 'success') {
        formState = 'success';
        await update({ reset: true });
        loadTime = Date.now();
      } else if (result.type === 'failure') {
        formState = 'error';
        errorMessage = result.data?.message || 'Something went wrong. Please try again.';
      }
    };
  }
</script>

<section id="contact" class="contact" aria-labelledby="contact-heading">
  <div class="container">
    <div class="section__header">
      <p class="section__label">Contact</p>
      <h2 id="contact-heading">Get in touch</h2>
    </div>
    <div class="contact__grid">
      <div class="contact__info">
        <a href="mailto:business@foxleigh.co" class="contact__email">
          business@foxleigh.co
        </a>
        <p class="contact__note">
          For commercial, partnership, and administrative enquiries.
        </p>
        <p class="contact__divider">Or use the form</p>
      </div>

      <form
        class="form"
        method="POST"
        action="?/contact"
        use:enhance={() => {
          formState = 'submitting';
          return handleSubmit();
        }}
      >
        <!-- Anti-spam: Honeypot field (hidden from users, bots will fill it) -->
        <div class="form__honeypot" aria-hidden="true">
          <label for="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabindex="-1"
            autocomplete="off"
          />
        </div>

        <!-- Anti-spam: Timestamp (to detect too-fast submissions) -->
        <input type="hidden" name="loadTime" value={loadTime} />

        <div class="form__row form__row--two">
          <div class="form__group">
            <label for="name" class="form__label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form__input"
              placeholder="Your name"
              required
              autocomplete="name"
              disabled={formState === 'submitting'}
            />
          </div>
          <div class="form__group">
            <label for="email" class="form__label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form__input"
              placeholder="you@example.com"
              required
              autocomplete="email"
              disabled={formState === 'submitting'}
            />
          </div>
        </div>

        <div class="form__group">
          <label for="subject" class="form__label">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            class="form__input"
            placeholder="What is this regarding?"
            required
            disabled={formState === 'submitting'}
          />
        </div>

        <div class="form__group">
          <label for="message" class="form__label">Message</label>
          <textarea
            id="message"
            name="message"
            class="form__textarea"
            placeholder="Your message..."
            required
            disabled={formState === 'submitting'}
          ></textarea>
        </div>

        <button
          type="submit"
          class="form__submit"
          disabled={formState === 'submitting'}
        >
          {formState === 'submitting' ? 'Sending...' : 'Send Enquiry'}
        </button>

        {#if formState === 'success'}
          <p class="form__status form__status--success" role="status">
            Thank you. Your message has been sent.
          </p>
        {:else if formState === 'error'}
          <p class="form__status form__status--error" role="alert">
            {errorMessage}
          </p>
        {/if}
      </form>
    </div>
  </div>
</section>

<style>
  .contact {
    background-color: var(--color-primary);
    padding: var(--spacing-2xl) 0 calc(var(--spacing-2xl) * 1.25);
    position: relative;
  }

  .contact::before {
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

  .contact__grid {
    display: grid;
    gap: var(--spacing-xl);
  }

  @media (min-width: 768px) {
    .contact__grid {
      grid-template-columns: 1fr 1.5fr;
      gap: var(--spacing-2xl);
    }
  }

  .contact__info {
    max-width: 400px;
  }

  .contact__email {
    font-family: var(--font-serif);
    font-size: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
    font-style: italic;
    margin-bottom: var(--spacing-sm);
    display: inline-block;
    position: relative;
  }

  .contact__email::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--color-accent);
    transition: width var(--transition-normal);
  }

  .contact__email:hover::after {
    width: 100%;
  }

  .contact__note {
    font-size: 0.9375rem;
    margin-top: var(--spacing-sm);
    color: rgba(252, 252, 251, 0.7);
  }

  .contact__divider {
    font-size: 0.8125rem;
    color: var(--color-muted);
    margin-top: var(--spacing-lg);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  /* Form Styles */
  .form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .form__honeypot {
    position: absolute;
    left: -9999px;
    opacity: 0;
    height: 0;
    width: 0;
    overflow: hidden;
  }

  .form__row {
    display: grid;
    gap: var(--spacing-md);
  }

  @media (min-width: 480px) {
    .form__row--two {
      grid-template-columns: 1fr 1fr;
    }
  }

  .form__group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .form__label {
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--color-white);
  }

  .form__input,
  .form__textarea {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    padding: 0.875rem 1rem;
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    color: var(--color-white);
    transition: border-color var(--transition-fast), background-color var(--transition-fast);
  }

  .form__input::placeholder,
  .form__textarea::placeholder {
    color: var(--color-muted);
    opacity: 0.7;
  }

  .form__input:hover,
  .form__textarea:hover {
    border-color: var(--color-border-hover);
  }

  .form__input:focus,
  .form__textarea:focus {
    outline: none;
    border-color: var(--color-accent);
    background-color: rgba(0, 0, 0, 0.3);
  }

  .form__input:disabled,
  .form__textarea:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .form__textarea {
    min-height: 140px;
    resize: vertical;
  }

  .form__submit {
    align-self: flex-start;
    background-color: var(--color-accent);
    color: var(--color-charcoal);
    border: none;
    border-radius: 4px;
    padding: 0.875rem 2rem;
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color var(--transition-fast), transform var(--transition-fast);
  }

  .form__submit:hover:not(:disabled) {
    background-color: var(--color-accent-hover);
    transform: translateY(-1px);
  }

  .form__submit:focus-visible {
    outline: 2px solid var(--color-white);
    outline-offset: 2px;
  }

  .form__submit:active:not(:disabled) {
    transform: translateY(0);
  }

  .form__submit:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  .form__status {
    font-size: 0.875rem;
    margin-top: var(--spacing-xs);
  }

  .form__status--success {
    color: var(--color-success);
  }

  .form__status--error {
    color: var(--color-error);
  }
</style>
