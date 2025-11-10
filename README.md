# Travis Shields

Personal portfolio website for Travis Shields, Director of Engineering at Vimeo.

**Live Site:** [travis-shields.com](https://www.travis-shields.com/)

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Theme:** next-themes (dark/light mode)
- **Forms:** React Hook Form + Zod validation
- **Fonts:** Geist Sans & Geist Mono
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
  layout.tsx          # Root layout with theme provider
  page.tsx            # Home page
  globals.css         # Global styles + Tailwind config
components/
  Hero.tsx            # Landing section
  About.tsx           # Professional background
  Skills.tsx          # Technical skills
  Contact.tsx         # Contact form
  Header.tsx          # Navigation header
  Footer.tsx          # Footer
  ThemeProvider.tsx   # Theme context
  ThemeToggle.tsx     # Dark/light mode toggle
```

## Deployment

This site is automatically deployed via AWS Amplify on push to the `master` branch. The deployment configuration is defined in `amplify.yml`.

## License

© 2025 Travis Shields. All rights reserved.
