# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

DeAging Europe — an evidence-first anti-aging content site (Astro 5, static output, Tailwind 4, multi-locale). Editorial stance that every page must hold: present the clinical evidence authoritatively *and* convert (to a guide, product or booking); evidence strength is the primary visual signal; never upsell; audience is affluent, mostly women, cosmetic concerns first.

**Current state (Aug 2026):** the collagen guide (`/collagen`) is the one real page; the site is being expanded outward from it. Earlier stragglers — the `problems` content collection, the `/jowls` problem guide, the retinol product, the EGP clinic template, five earlier collagen drafts — were deliberately removed and live only in git history. Don't resurrect them unless asked.

**EGP Aesthetics is NOT in this repo.** It's a separate project (`../deagingeuropeegp`, remote `EGPLondon`). Don't add clinic/EGP pages here.

## Commands

```bash
npm run dev -- --port 4322   # :4321 is usually taken by the sibling EGPLondon repo
npm run build                # static site → dist/ (~2 s, ~10 pages)
npm run preview              # serve dist/
npx astro check              # type-check .astro/.ts (the only "test" — there is no test or lint setup)
SITE_URL=https://real.domain npm run build   # canonical/hreflang/sitemap base; falls back to deagingeurope.example
```

After deleting pages or touching shared components, run both `astro check` and `astro build`. The `dev` project skill (`.claude/skills/dev`) covers running/screenshotting; `new-guide-page` covers adding a guide; `frontend-design` is Anthropic's design guidance.

## Architecture

Two page families that share one layout but are built differently:

**1. Content-collection pages** — today only `products`: Markdown in `src/content/products/<locale>/<slug>.md`, zod schema in `src/content.config.ts`. Rendered by `src/pages/products/[slug].astro` for English and `src/pages/[lang]/products/[slug].astro` for other locales — the two files are near-duplicates by design (same for `index.astro` vs `[lang]/index.astro`). When you change one, mirror the other unless the change is English-only. `getStaticPaths` builds English from `locale === DEFAULT_LOCALE` entries and the `[lang]` version from every non-default entry, so a locale only gets a page if a Markdown file exists for it (currently `en` + `bg`; `de/fr/it/es` homepages show "Translations coming soon").

**2. Hand-built evidence guides** — `src/pages/collagen.astro` (the supplement template) backed by a typed data module (`src/data/collagen.ts`) that is the single source of truth: `SectionGroup[] → Section{ id, category, title, tldr, evidence, focus, bodyHtml, note… }`. The page sorts sections by evidence tier and renders them with `EvidenceRow` (bar/pips strength indicator) and `ExpandableDrawer` (`<details>`-based, content stays in the DOM for SEO/search). Guides are English-only (`DEFAULT_LOCALE`). Shared evidence vocabulary (the `Evidence` type, `EVIDENCE_TIERS`, `evidenceColor`, `evidenceLabels`, `countByTier`, `readingMinutesFor`) lives in `src/data/evidence.ts`; a guide module re-exports the type and wraps the helpers for its own sections (`collagen.ts` → `evidenceCounts()`, `readingMinutes()`), which the homepage spotlight (`index.astro`) reads for its evidence ledger — keep derived numbers in data modules, not in pages. Per-page presentation overrides (`groupOrder`, `groupTitle`, `groupIntro`, `drawerShort`, `faqAnswer`) live in the page frontmatter, not in the data. The problem-template conventions (for a future `/jowls`-style guide) are documented in the `new-guide-page` skill.

**Layout & SEO** — every page uses `src/layouts/BaseLayout.astro` (`title`, `description`, `locale`, `path`, `type`, `jsonLd`). `path` (route without leading slash, e.g. `"collagen"`) drives hreflang links in `SEO.astro` and the language switcher in `Header.astro` — pass it on every page. `BaseLayout` always injects Organization JSON-LD; pass page-level schema via `jsonLd`.

**i18n** — `src/i18n/ui.ts` holds `LOCALES`, `DEFAULT_LOCALE`, and the `ui` string dictionary; `t(locale, key)` falls back to English then to the key itself; `localePath(locale, path)` produces `/path` for English and `/<lang>/path` otherwise (`prefixDefaultLocale: false` in `astro.config.mjs`). Nav labels come from `ui`; guide links are hard-coded English.

**Brand tokens** — `src/styles/global.css`: `--color-bone/ink/sage/rose/gold`, `--font-display` (Cormorant Garamond) and `--font-sans` (Inter), loaded from Google Fonts in `BaseLayout`. Evidence-tier colours are the saturated `evidenceColor` set in `src/data/evidence.ts`, not the brand tones. `html { scroll-behavior: smooth }` is global — scroll with `behavior: 'instant'` when scripting screenshots.

**Routing notes** — `trailingSlash: 'never'`; `redirects` in `astro.config.mjs` (`/collagen-5 → /collagen`); sitemap is generated by `@astrojs/sitemap` with locale mapping — no manual step. `public/robots.txt` has a hard-coded `Sitemap:` line that must be updated with the real domain (see README).


## Gotchas

- `MediaPlaceholder` slots are intentional placeholders for images/video that don't exist yet — keep them; humans fill media later.
- Much product/guide content is still demo-grade (fictional doctor/testimonials on the product page, uncited treatment sections, stock images) — see the `content-status-audit` memory before treating anything as verified.
- Tailwind 4 via `@tailwindcss/vite` — no `tailwind.config`; theme lives in `global.css` `@theme`.
- `EvidenceRow` has two indicator variants (`bar`, `pips`) marked experimental; `collagen.astro` uses `bar`.
