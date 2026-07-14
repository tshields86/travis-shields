# Portfolio Redesign — Rebuild Spec

> Brief for rebuilding travis-shields.com in the approved "Studio Poster" visual direction.
> Written for a fresh Claude Code session. Read this top to bottom before writing code.

## 1. Goal

The current site (Next.js 15 / React 19 / Tailwind v3, deployed on AWS Amplify) is functional but visually generic ("vibe-coded"). **The content is good; the UI/UX is what we're changing.** Rebuild the site's presentation in the approved design direction while preserving (and lightly re-organizing) the existing content.

**Do not redesign the content or information architecture from scratch** — it's already been decided and validated through several rounds. Match the reference mock.

**This is a migration, not a hack-through.** Treat it as production work: leave the codebase in a *better* state than you found it — clean, consistent, and free of dead code and tech debt. Take the time to do it properly (see §12). Quality of the result matters more than speed.

## 2. The single source of truth: the mock

`mocks/studio-poster-mock.html` is a **pixel-level, self-contained HTML/CSS reference** of the approved design. It is the spec for layout, spacing, type, color, and interaction. Open it in a browser (or `python3 -m http.server` inside `mocks/` and view it) and match it.

The mock is **light only — and that's the final look.** The site is single-theme; the existing light/dark switcher is being removed (see §7). Match the mock exactly. Everything else — structure, tokens, spacing, motifs — comes from the mock.

Other reference material:
- `docs/resume.md` — Travis's full resume (source of all professional content, dates, metrics).
- Current components in `components/` — reuse their structure and copy where possible; the redesign is mostly a re-skin plus two new pieces (marquee, About narrative) and an accordion.

## 3. Design direction — "Studio Poster"

Bold, editorial poster aesthetic. Oversized display type, hard 2px black borders, a warm paper background, one saturated accent (cobalt) plus a warm secondary (coral). Confident and distinctive, not templated. Restraint everywhere except the hero name and the metric marquee.

### Design tokens (light mode)

| Token | Value | Use |
|-------|-------|-----|
| `--bone` | `#F3F0E9` | page background |
| `--ink` | `#141210` | text, borders |
| `--cobalt` | `#1F35E0` | primary accent, featured card, links, highlights |
| `--coral` / `--peach` | `#FF6B4A` | secondary accent (buttons on dark, focus on dark) |
| `--line` | `#DAD5C8` | subtle dividers |
| text-muted | `#5a544a` | muted labels/blurbs (AA-safe on bone) |
| body text | `#3a352d` | paragraph copy |
| tag border | `#b6ad9c` | pill outlines |

### Typography
- **Display:** Bricolage Grotesque (600/700/800) — hero name, section headings, card titles, big numbers.
- **Body:** Inter (400/500/600).
- **Mono/labels:** Spline Sans Mono (400/500) — eyebrows, meta, tags, section numbers, footer.
- Hero name: `clamp(74px, 19vw, 236px)`, uppercase, `letter-spacing:-.04em`, `line-height:.82`.
- Section headings: `clamp(30px, 5vw, 58px)`, weight 800, uppercase, `letter-spacing:-.03em`.
- In the current repo fonts are Geist Sans/Mono via `next/font`. **Swap them** for the three above (use `next/font/google`: `Bricolage_Grotesque`, `Inter`, `Spline_Sans_Mono`), wire up CSS variables in `app/layout.tsx`, and update `tailwind.config.ts` + `CLAUDE.md`'s font notes.

### Motifs
- **2px solid ink borders** everywhere (cards, section-heading underlines, meta bar, footer top rule). Zero border-radius on structural elements; pills are the only rounded-ish thing and they're square-ish too here.
- Section headings: a mono number (`01`, `02`…) + big uppercase title + a 2px bottom rule.
- **Full-bleed elements** (marquee band, dark contact section, footer top border) span the full viewport; their **content** stays inside a centered `max-width:1200px` container with `28px` side padding. (Footer bug we already hit: don't put the width-cap class on the full-bleed element — put it on an inner wrapper.)
- Hover on cards: `translate(-3px,-3px)` + `5px 5px 0 var(--cobalt)` offset shadow.
- Section vertical rhythm: `64px` top/bottom padding.

## 4. Page structure (in order)

1. **Header** — sticky, blurred bone background. Left: "Travis Shields" wordmark. Right: mono nav (About · Skills · Work · Projects · Contact); hide About/Projects on mobile.
2. **Hero** — meta bar (an "Open to new roles" cobalt pill + "Director of Engineering" + "New York City", inside a 2px top/bottom ruled row); giant `<h1>` name "TRAVIS / SHIELDS" (Shields in cobalt; the "i" in Travis is an outlined/stroked glyph — keep it); a display sub-line "Teams, platforms & AI-accelerated impact." (coral on the last phrase); a lede paragraph; CTAs (Get in touch / LinkedIn) + social icon links (GitHub, email).
3. **Marquee band** — full-bleed cobalt strip, infinite horizontal scroll of metrics ("50% faster iteration", "140% NPS lift", "$150K cost cut", "30% faster loads", "85% faster reindex"). Bold words in **bone** (not coral — contrast). Respect `prefers-reduced-motion` (stop animation, show each metric once).
4. **About** (`01`) — a large display statement ("I turn underperforming teams and brittle legacy platforms into **high-performing orgs that ship.**" — highlight the last clause in cobalt, `text-wrap:balance`), 3 body paragraphs (from resume/current About), and a 3-up stat row (50% / 10+ / $150K) with vertical dividers and generous gutters.
5. **Skills & Technologies** (`02`) — 6 category cards in a connected 3×2 bordered grid. Each card: title + one-line blurb + a **vertical list** (not pills) of 6 items. **Leadership & Strategy is slot 1 and is the highlighted (cobalt) card.** Order: Leadership & Strategy, Tools & AI, Platform & Architecture, Frontend Technologies, Backend & Data, Experimentation & Analytics. **On mobile (≤560px) the cards become collapsible accordions** (title + blurb visible, tap to expand the list, `+`/`−` indicator). See §6 for the exact item lists.
6. **Professional Work** (`03`) — 4 cards, 2-column grid. Each: a role badge (mono, cobalt outline, one line), the property name (+ external link icon where applicable), a description paragraph (**verbatim from the current site's Projects "professionalWork" data**), and the full tech pills.
7. **Side Projects** (`04`) — 7 cards, 2-column grid, individually boxed with a gap. Each: name + Live/GitHub/App Store icon links + short description + full tech pills. (The 7th card sits alone on the last row — that's fine, leave it.)
8. **Contact** (`05`, "Say Hello") — full-bleed dark (ink) section; heading + lede; coral email button + LinkedIn/GitHub outline button.
9. **Footer** — full-bleed, 2px ink top border spanning the whole viewport; content (copyright + GitHub/LinkedIn/Email links) in a centered `.wrap`, space-between.

## 5. Content rules

- **Framing:** Travis left Vimeo end of April 2026 and is **on the job market**. Never say he's "currently" at Vimeo. Frame Vimeo as **most recent** / past tense. Keep a tasteful **"Open to new roles"** signal (hero pill + footer line). Don't overdo it.
- **Sell the candidate.** Lead with impact and metrics. AI-accelerated engineering is a deliberate emphasis (it's featured in About and is a skills category).
- **Dates** (from resume, safe to show): Vimeo 2023–2026 (Senior Eng Manager → Director), WeWork 2021–2023, Madison Square Garden / MSG.com + Knicks.com 2016–2021. In the mock, Professional Work cards don't print date ranges — match the mock (dates optional; confirm with Travis before adding).
- **Links:** every side project keeps its Live / GitHub / (App Store for Serpent Surge) links. Professional cards link to the live property (vimeo.com, msg.com, nba.com/knicks) where one exists; WeWork has none.
- Professional Work descriptions + pills should match the current `components/Projects.tsx` `professionalWork` array (already the approved copy). Side Projects likewise from the `sideProjects` array (all 7: PollPotato, Serpent Surge, BBQCopilot, Breezlist, git-sense, DStructures.js, Yodafy).

## 6. Skills & Technologies — exact content

All 6 categories, all items (do not drop any). Leadership is slot 1 + featured.

- **Leadership & Strategy** *(featured/cobalt)* — blurb: "Building teams and roadmaps that reliably deliver." — Engineering Leadership, Team Development, Technical Roadmapping, Cross-Functional Collaboration, Agile/Scrum, Mentoring & Coaching
- **Tools & AI** — "Agentic workflows and the tooling built into how the team ships." — Claude Code, GitHub Copilot, AI-Accelerated Development, Docker, GitHub Actions, Datadog
- **Platform & Architecture** — "Modernizing brittle legacy stacks at enterprise scale." — Platform Modernization, Microservices, Micro-Frontends, Design Systems, CI/CD Pipelines, Cloud Infrastructure (AWS, GCP)
- **Frontend Technologies** — "Fast, accessible, componentized interfaces." — Next.js, React, TypeScript, JavaScript, Tailwind CSS, Storybook
- **Backend & Data** — "The services and data behind the product." — Node.js, GraphQL, RESTful APIs, NoSQL/SQL, AWS Lambda, Elasticsearch
- **Experimentation & Analytics** — "Data-driven optimization as the default." — A/B Testing Frameworks, Eppo Platform, Data-Driven Optimization, RUM & Performance Monitoring, Amplitude, Conversion Optimization

## 7. Single light theme — remove theming

**Decision: the site is light-only, matching the mock. Rip out the light/dark switcher entirely.** Do not build a dark variant.

- Remove `next-themes`: drop `<ThemeProvider>` from `app/layout.tsx`, delete `components/ThemeProvider.tsx` and `components/ThemeToggle.tsx`, remove the toggle from `Header`, and uninstall the `next-themes` dependency.
- Remove `darkMode: "class"` from `tailwind.config.ts` and strip all `dark:` variants from components.
- Define the design tokens once (light) as CSS variables in `app/globals.css`. No `.dark` overrides.
- The "Say Hello" contact section and the footer top border are still dark ink by design — that's a section treatment, not a theme. Keep them.
- Update `CLAUDE.md` to drop the theme-system description.

## 8. Accessibility & quality bar (bake these in — they came out of a design/QA review)

- Exactly one `<h1>` (the hero name). Logical heading order (section titles `<h2>`, skill categories `<h3>`).
- Visible `:focus-visible` rings on all interactive elements (cobalt; coral on dark/featured surfaces).
- Skills accordion: native `<details>`/`<summary>` (keyboard-operable). Collapsed on mobile, all-open on larger screens.
- Contrast AA throughout. (Notably: on cobalt, use bone — not coral — for text.)
- Touch targets ≥ ~44px for icon links (pad them).
- `prefers-reduced-motion`: disable the marquee animation and the scroll-reveal motion.
- No horizontal scroll at any width. Hero name clamps down cleanly on mobile.
- Responsive breakpoints roughly: 2-col→1-col for project grids ~640px; skills 3→2→1 col; skills accordion ≤560px.

## 9. Tech constraints (from CLAUDE.md — follow exactly)

- Next.js 15 App Router, React 19, TypeScript, **Tailwind CSS v3** (not v4), Framer Motion. **No `next-themes`** (theming removed — see §7).
- Node **v24.11.0** (`nvm use`), **pnpm ≥10** (preferred). Deployed on AWS Amplify (`amplify.yml`).
- Commands: `pnpm run dev`, `pnpm run build`, `pnpm run lint`.
- Component conventions: `'use client'` where interactivity is needed; `@/*` path alias; Framer Motion `useInView` for scroll reveals (`once:true, margin:'-100px'`).
- **Git: do NOT add a `Co-Authored-By: Claude` line or any Claude signature to commits** (repo rule).
- Reuse existing components where possible: `Hero`, `About`, `Skills`, `Projects` (has professionalWork + sideProjects), `Contact`, `Header`, `Footer`. Add a `Marquee` (metric band). Fold the About narrative + stats into `About`. Rework `Skills` into the accordion grid. **Delete** `ThemeProvider` and `ThemeToggle`.
- Update `app/layout.tsx` (fonts; remove `ThemeProvider`), `app/globals.css` (design tokens as CSS vars, single light theme), and `CLAUDE.md`'s styling/color/font sections to match the new system.

## 10. Suggested build order

1. Set up tokens: fonts in `layout.tsx`, CSS variables in `globals.css` (single light theme), Tailwind theme extensions (colors, fontFamily) in `tailwind.config.ts`. Remove theming (§7).
2. Header + Hero + Marquee (get the top of the page matching the mock first).
3. About, Skills (with mobile accordion), Professional Work, Side Projects, Contact, Footer.
4. Accessibility + responsive pass (§8), then verify with Playwright/screenshots at 390 / 768 / 1440.
5. Update `CLAUDE.md`. Lint (`pnpm run lint`) and build (`pnpm run build`) clean.

## 11. Decisions already made (don't re-litigate)

- Direction: "Studio Poster" (rejected alternatives: a technical "spec sheet", an executive "dossier", plus dark "control room" / cinematic options).
- **Single light theme — the light/dark switcher is removed.** No dark mode.
- Leadership & Strategy is the featured skills card (slot 1).
- Professional Work uses description paragraphs + pills (no bullet lists).
- Yodafy stays as the lone 7th side-project card.
- The outlined "i" in the hero name stays.
- Footer border is full-bleed; content stays centered.
- Verify everything in-browser with screenshots before calling it done.

## 12. Engineering quality bar (non-negotiable)

Leave the codebase cleaner than you found it. This migration should reduce debt, not add it. Do not rush or "thrash to fit the redesign" — take the time to do it right.

- **No dead code.** Delete what the redesign removes — don't just stop referencing it. That includes `ThemeProvider.tsx`, `ThemeToggle.tsx`, unused imports, unused CSS, the old Geist font wiring, and any now-orphaned helpers. Grep for references before and after deleting.
- **Prune dependencies.** Uninstall packages no longer used (`next-themes`, and anything else made obsolete). Keep `package.json` and the lockfile honest and consistent.
- **Don't repeat yourself.** Factor recurring markup into small, typed, reusable primitives (e.g. `SectionHeading`, `Card`, `Pill`/`Tag`, `IconLink`, `Marquee`) rather than copy-pasting. Drive design values from tokens (CSS vars / Tailwind theme), not scattered magic numbers/hex literals.
- **Data, not duplication.** Keep skills/projects/experience as typed data structures rendered by components (as the current `Projects.tsx` already does). Fully typed — no `any`, no implicit `any`, no unchecked casts.
- **Semantic, accessible HTML** per §8 — not a pile of `div`s.
- **Clean bill of health.** `pnpm run lint` and `pnpm run build` pass with **zero** warnings or errors, and no `eslint-disable` added to paper over problems. No console errors/warnings at runtime. No leftover `TODO`/commented-out blocks.
- **Consistency.** Match the file/component conventions already in the repo (naming, structure, `'use client'` usage, `@/*` imports).
- **Commit hygiene.** Small, focused commits with clear messages; working tree clean at the end. (No Claude signature — repo rule.)
- **Keep docs true.** Update `CLAUDE.md` so it describes the codebase as it actually is after the change (fonts, colors, removed theme system, any new components).
- **Leave the reference material in place:** `docs/redesign-spec.md`, `docs/resume.md`, and `mocks/` are intentional references — don't delete them.

If a shortcut would create debt, don't take it — do the clean version.
