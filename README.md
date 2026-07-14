# Travis Shields

Personal portfolio website for Travis Shields — engineering leader, most recently Director of Engineering at Vimeo. Built in the "Studio Poster" visual direction (single light theme).

**Live Site:** [travis-shields.com](https://www.travis-shields.com/)

## Tech Stack

- **Framework:** Next.js 15 with App Router (static export)
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3 + design tokens as CSS variables (single light theme)
- **Animations:** Framer Motion (scroll reveals)
- **Fonts:** Bricolage Grotesque, Inter, Spline Sans Mono (via `next/font/google`)
- **Deployment:** AWS Amplify

## Prerequisites

- **Node.js:** v24.11.0 (enforced via `.nvmrc`)
- **Package Manager:** pnpm >=10.0.0

Use `nvm use` to automatically switch to the correct Node version.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

```bash
# Development server
pnpm run dev

# Production build
pnpm run build

# Start production server
pnpm run start

# Lint code
pnpm run lint
```

## Project Structure

```
app/
  layout.tsx          # Root layout: fonts, metadata, Header + Footer
  page.tsx            # Home page
  globals.css         # Design tokens (CSS vars) + Studio Poster style system
components/
  Header.tsx          # Sticky wordmark + mono nav
  Hero.tsx            # Landing section
  Marquee.tsx         # Full-bleed metric band
  About.tsx           # Narrative + stats
  Skills.tsx          # Capability grid (mobile accordion)
  Projects.tsx        # Professional Work + Side Projects
  Contact.tsx         # Dark "Say Hello" CTA
  Footer.tsx          # Footer
  ui/                 # Reusable primitives (Icon, IconLink, SectionHeading, Pill, Reveal)
lib/
  content.ts          # Typed content data
```

## Deployment

This site is automatically deployed via AWS Amplify on push to the `master` branch. The deployment configuration is defined in `amplify.yml`.

## License

© 2026 Travis Shields. All rights reserved.
