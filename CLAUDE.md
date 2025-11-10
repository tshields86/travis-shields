# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Travis Shields (Director of Engineering at Vimeo) built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Deployed via AWS Amplify.

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
- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4 (PostCSS plugin-based)
- **Animations**: Framer Motion
- **Theme Management**: next-themes (class-based dark mode)
- **Forms**: React Hook Form + Zod validation
- **Fonts**: Geist Sans & Geist Mono (via next/font)
- **Deployment**: AWS Amplify (configured in `amplify.yml`)

### Project Structure
```
app/
  layout.tsx          # Root layout with ThemeProvider, fonts, metadata
  page.tsx            # Home page (renders Hero, About, Skills, Contact)
  globals.css         # Global styles + Tailwind v4 dark mode config
components/
  ThemeProvider.tsx   # next-themes wrapper
  ThemeToggle.tsx     # Dark/light mode toggle button
  Header.tsx          # Fixed header with navigation
  Hero.tsx            # Landing section
  About.tsx           # Professional story + key achievements
  Skills.tsx          # Categorized technical skills
  Contact.tsx         # Contact form + contact info cards
  Footer.tsx          # Copyright footer
```

### Key Architectural Patterns

**Module Aliases**: TypeScript path mapping uses `@/*` for root-level imports (configured in `tsconfig.json`).

**Client Components**: All components use `'use client'` directive due to interactivity requirements (Framer Motion animations, theme toggle, form handling).

**Animation Strategy**: Framer Motion's `useInView` hook triggers animations when sections scroll into viewport (`once: true, margin: '-100px'`).

**Theme System**:
- Uses `next-themes` with `attribute="class"` mode
- Tailwind CSS v4 requires `@custom-variant dark (&:where(.dark, .dark *));` in `globals.css` for class-based dark mode
- Theme persists in localStorage
- Components use `dark:` variant for styling (e.g., `dark:bg-gray-950`)

**Form Handling**: Contact form uses React Hook Form with Zod schema validation, opens email client with pre-filled message on submit.

**Smooth Scrolling**: Header navigation links use `#` anchors; smooth scroll enabled via `scroll-behavior: smooth` in `globals.css`.

## Styling Conventions

### Tailwind CSS v4 Specifics
- Import: `@import "tailwindcss";` in `globals.css`
- Dark mode requires custom variant declaration (see Theme System above)
- PostCSS config uses `@tailwindcss/postcss` plugin
- No `tailwind.config.js` needed (CSS-first configuration)

### Color Palette
- Primary: Blue (blue-600/blue-400 for dark mode)
- Backgrounds: white/gray-50 (light), gray-950/gray-900 (dark)
- Text: gray-900 (light), gray-100 (dark)
- Borders: gray-200 (light), gray-700/gray-800 (dark)

### Component Patterns
- Section spacing: `py-24 px-6`
- Max width container: `max-w-6xl` or `max-w-4xl` with `mx-auto`
- Card styling: rounded borders with hover states for interactive elements
- Responsive grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## Deployment

AWS Amplify configuration (`amplify.yml`):
- Pre-build: Installs Node v24.11.0 via nvm, installs pnpm globally
- Build: `pnpm run build`
- Artifacts: `.next` directory with caching for `.next/cache` and `node_modules`
- Automatic deploys from GitHub repository

## Node Version Management

**Critical**: This project requires Node.js v24.11.0 exactly.
- Enforced via `package.json` engines field
- `.nvmrc` file contains version number
- AWS Amplify uses nvm in build process
- Always run `nvm use` before development commands
