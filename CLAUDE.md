# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git Conventions

- Do NOT add a `Co-Authored-By: Claude` line or any Claude Code signature to commit messages.

## Project Overview

Personal portfolio website for Travis Shields (engineering leader, most recently Director of Engineering at Vimeo) built with Next.js 15, React 19, TypeScript, and Tailwind CSS v3. Single light theme in the "Studio Poster" visual direction. Deployed via AWS Amplify.

The approved design reference lives in `mocks/studio-poster-mock.html` (pixel source of truth); the rebuild brief is `docs/redesign-spec.md` and the content reference is `docs/resume.md`. These are intentional references — keep them.

## Development Commands

### Prerequisites
- Node.js v24.11.0 (enforced via `.nvmrc` and `package.json` engines)
- pnpm >=10.0.0 (preferred package manager)
- Use `nvm use` to ensure correct Node version

### Core Commands
```bash
# Development server (runs on http://localhost:3000)
pnpm run dev

# Production build
pnpm run build

# Start production server
pnpm run start

# Lint code
pnpm run lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router (static export — `output: 'export'`)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v3 + design tokens as CSS variables (single light theme)
- **Animations**: Framer Motion (scroll reveals only)
- **Fonts**: Bricolage Grotesque (display), Inter (body), Spline Sans Mono (mono/labels) via `next/font/google`
- **Deployment**: AWS Amplify (configured in `amplify.yml`)

### Project Structure
```
app/
  layout.tsx          # Root layout: fonts, metadata, Header + Footer
  page.tsx            # Home page (Hero, Marquee, About, Skills, Projects, Contact)
  globals.css         # Design tokens (CSS vars) + the "Studio Poster" style system
components/
  Header.tsx          # Sticky blurred wordmark + mono nav
  Hero.tsx            # Meta bar, giant display name, role subline, CTAs
  Marquee.tsx         # Full-bleed cobalt metric band
  About.tsx           # Display narrative + 3 paragraphs + 3-up stat row
  Skills.tsx          # 3x2 capability grid; details/summary accordion on mobile
  Projects.tsx        # Professional Work (03) + Side Projects (04) cards
  Contact.tsx         # Full-bleed dark "Say Hello" CTA
  Footer.tsx          # Full-bleed footer with copyright + links
  ui/                 # Reusable typed primitives:
    Icon.tsx          #   inline SVG icon set (external, github, appStore, mail, linkedin)
    IconLink.tsx      #   icon-only link with aria-label + >=44px tap target
    SectionHeading.tsx#   mono number + uppercase h2 + rule
    Pill.tsx          #   tech tag (Pill) + PillList
    Reveal.tsx        #   scroll-into-view fade/rise, respects prefers-reduced-motion
lib/
  content.ts          # Typed content data (skills, work, side projects, metrics, stats, social)
```

### Key Architectural Patterns

**Module Aliases**: TypeScript path mapping uses `@/*` for root-level imports (configured in `tsconfig.json`).

**Server vs Client Components**: Components are server components by default. Only `Skills` (media-query-driven accordion) and `Reveal` (Framer Motion) use `'use client'`.

**Content as Data**: Skills, professional work, side projects, metrics and stats are typed data structures in `lib/content.ts`, rendered by thin components — no copy-paste of markup. No `any`.

**Animation Strategy**: `Reveal` wraps section content and uses Framer Motion's `useInView` (`once: true, margin: '-100px'`); it renders statically under `prefers-reduced-motion`. The marquee is a CSS animation, also disabled under reduced motion.

**Smooth Scrolling**: Header navigation links use `#` anchors; smooth scroll enabled via `scroll-behavior: smooth` in `globals.css`.

**Accessibility**: Exactly one `<h1>` (hero name); logical `<h2>`/`<h3>` order; visible `:focus-visible` rings (cobalt, coral on dark/featured surfaces); keyboard-operable native `<details>` accordion; no horizontal scroll at any width.

## Styling Conventions

### Design tokens & the style system
- Tailwind directives + all design tokens live in `globals.css`. Tokens are CSS variables on `:root` (single light theme, no `.dark` overrides).
- The "Studio Poster" component classes (`.wrap`, `.shead`, `.cap`, `.pcard`, `.card`, `.band`, etc.) are defined in `globals.css` and route every color through a token — no magic hex in components.
- `tailwind.config.ts` maps tokens to Tailwind color/font names (`bone`, `ink`, `cobalt`, `peach`, `line`, `muted`, `paragraph`; `font-display`, `font-body`, `font-mono`). No `darkMode`.
- PostCSS config uses `tailwindcss` and `autoprefixer` plugins.

### Color palette (tokens)
- `--bone #F3F0E9` page background · `--ink #141210` text/borders · `--cobalt #1F35E0` primary accent/links/featured
- `--peach #FF6B4A` secondary accent + focus ring on dark surfaces · `--line #DAD5C8` dividers
- `--muted #5A544A` labels/blurbs · `--paragraph #3A352D` body copy · `--tag-border #B6AD9C` pill outlines

### Motifs
- 2px solid ink borders; zero border-radius on structural elements.
- Section headings: mono number (`01`…) + big uppercase title + 2px bottom rule (`SectionHeading`).
- Full-bleed elements (marquee, dark contact, footer rule) span the viewport; content stays inside a centered `.wrap` (`max-width:1200px`, `28px` side padding). Put `.wrap` on an inner wrapper, never on the full-bleed element.
- Card hover: `translate(-3px,-3px)` + `5px 5px 0 var(--cobalt)` offset shadow.
- Section vertical rhythm: 64px top/bottom (`.section`).

## Deployment

AWS Amplify configuration (`amplify.yml`):
- Pre-build: Installs Node v24.11.0 via nvm, installs pnpm globally
- Build: `pnpm run build` (Next.js static export)
- Artifacts: `out/` directory, with caching for `.next/cache` and `node_modules`
- Automatic deploys from GitHub repository

## Node Version Management

**Critical**: This project requires Node.js v24.11.0 exactly.
- Enforced via `package.json` engines field
- `.nvmrc` file contains version number
- AWS Amplify uses nvm in build process
- Always run `nvm use` before development commands
