<div align="center">
  <img src="static/foxleigh-and-co-logo-large.png" alt="Foxleigh & Co" width="200" />

  <h1>Foxleigh & Co</h1>

  <p>
    <strong>Corporate website for Foxleigh & Co, a UK holding company for media and software ventures.</strong>
  </p>

  <p>
    <a href="https://kit.svelte.dev">
      <img src="https://img.shields.io/badge/SvelteKit-2.0-FF3E00?style=flat-square&logo=svelte&logoColor=white" alt="SvelteKit" />
    </a>
    <a href="https://www.typescriptlang.org">
      <img src="https://img.shields.io/badge/Svelte-5-FF3E00?style=flat-square&logo=svelte&logoColor=white" alt="Svelte 5" />
    </a>
    <a href="https://vercel.com">
      <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
    </a>
    <a href="https://postmarkapp.com">
      <img src="https://img.shields.io/badge/Postmark-Email-FFCC00?style=flat-square&logo=mail.ru&logoColor=black" alt="Postmark" />
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/License-Private-red?style=flat-square" alt="License" />
    <img src="https://img.shields.io/badge/PRs-Not%20Accepted-red?style=flat-square" alt="PRs" />
    <img src="https://img.shields.io/badge/Made%20in-UK-blue?style=flat-square" alt="Made in UK" />
  </p>
</div>

---

## About

A single-page static website serving as a trust surface for people verifying the legitimacy of Foxleigh & Co. Built with SvelteKit 2 and Svelte 5, deployed on Vercel.

This is not a marketing site. It exists for investors, partners, and financiers who see the company name on invoices, contracts, or bank transfers and want to verify it is legitimate.

## Features

- **Dark mode design** with carefully selected brand colours
- **Fully responsive** layout for mobile, tablet, and desktop
- **Contact form** with anti-spam protection (honeypot + time-based validation)
- **Parallax effect** on hero background (respects `prefers-reduced-motion`)
- **Accessible** — WCAG 2.1 AA compliant with skip links, ARIA labels, and focus states
- **Server-side form handling** via Postmark

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [SvelteKit](https://kit.svelte.dev) | Framework |
| [Svelte 5](https://svelte.dev) | UI Components |
| [Vite](https://vitejs.dev) | Build tool |
| [Vercel](https://vercel.com) | Hosting & serverless functions |
| [Postmark](https://postmarkapp.com) | Transactional email |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/foxleigh81/foxleighco-website.git
cd foxleighco-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
npm run preview
```

## Environment Variables

Create a `.env` file or configure these in your Vercel dashboard:

| Variable | Description |
|----------|-------------|
| `POSTMARK_API_TOKEN` | Your Postmark server API token |
| `POSTMARK_FROM_EMAIL` | Verified sender email address |
| `POSTMARK_TO_EMAIL` | Recipient for contact form submissions |

## Project Structure

```
├── src/
│   ├── app.css                 # Global styles
│   ├── app.html                # HTML template
│   ├── lib/
│   │   └── components/
│   │       ├── Header.svelte   # Navigation header
│   │       ├── Hero.svelte     # Hero section with parallax
│   │       ├── About.svelte    # About section
│   │       ├── Ventures.svelte # Portfolio cards
│   │       ├── Contact.svelte  # Contact form
│   │       └── Footer.svelte   # Footer with social links
│   └── routes/
│       ├── +layout.svelte      # Root layout
│       ├── +page.svelte        # Home page
│       └── +page.server.js     # Form action handler
├── static/                     # Static assets (images, favicons)
├── svelte.config.js
├── vite.config.js
└── package.json
```

## Deployment

The site is configured for Vercel deployment with `@sveltejs/adapter-vercel`.

```bash
# Deploy to Vercel
vercel
```

## Brand Guidelines

| Element | Value |
|---------|-------|
| Primary | `#243037` |
| Accent | `#f86b1c` |
| Charcoal | `#1a1e22` |
| White | `#fcfcfb` |
| Heading Font | Noto Serif |
| Body Font | Inter |

---

<div align="center">
  <p>
    <strong>Foxleigh & Co</strong><br />
    Est. 2025 · Based in the United Kingdom
  </p>
  <p>
    <a href="https://www.linkedin.com/company/foxleigh-and-co">LinkedIn</a>
  </p>
</div>
