# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

DeAging Europe — an evidence-first anti-aging content site (Astro 5, static output, Tailwind 4, multi-locale). Editorial stance that every page must hold: present the clinical evidence authoritatively *and* convert (to a guide, product or booking); evidence strength is the primary visual signal; never upsell; audience is affluent, mostly women, cosmetic concerns first.

**Current state (Aug 2026):** the collagen guide (`/collagen`) is the one real page; the site is being expanded outward from it. Since 2026-08-31 it is **live at https://www.deage.eu** on Wix-managed headless hosting (see Deployment below). Earlier stragglers — the `problems` content collection, the `/jowls` problem guide, the retinol product, the EGP clinic template, five earlier collagen drafts — were deliberately removed and live only in git history. Don't resurrect them unless asked.

**EGP Aesthetics is NOT in this repo.** It's a separate project (`../deagingeuropeegp`, remote `EGPLondon`). Don't add clinic/EGP pages here.

## Commands

```bash
npx wix env pull             # once per machine: writes .env.local (needs `npx wix login`); build/dev fail without it
npm run dev -- --port 4322   # astro dev (plain Node SSR; needs .env.local); :4321 is usually taken by the sibling EGPLondon repo
npm run build                # = wix build → dist/ (SSR bundle: _worker.js + static assets, ~10 s)
npm run release              # = wix release → publishes dist/ to https://www.deage.eu (seconds)
npx astro check              # type-check .astro/.ts (the only "test" — there is no test or lint setup)
SITE_URL=https://preview.example npm run build   # canonical/hreflang/sitemap base; defaults to https://www.deage.eu
```

After deleting pages or touching shared components, run both `astro check` and `npm run build`. Release only when the build output changed. The `dev` project skill (`.claude/skills/dev`) covers running/screenshotting; `new-guide-page` covers adding a guide; `frontend-design` is Anthropic's design guidance.

## Architecture

Two page families that share one layout but are built differently:

**Rendering model:** `output: 'server'` — every route is rendered on demand by Wix's edge worker (Wix's static host can't resolve nested clean URLs; see Deployment). Consequences: `getStaticPaths` is **not** used (Astro ignores it in server mode); dynamic pages read `Astro.params`, look the entry up at request time and `return new Response(null, { status: 404 })` when it doesn't exist (Astro then renders `src/pages/404.astro`). Content collections still work — the data store is bundled into the worker at build time.

**1. Content-collection pages** — today only `products`: Markdown in `src/content/products/<locale>/<slug>.md`, zod schema in `src/content.config.ts`. Rendered by `src/pages/products/[slug].astro` for English and `src/pages/[lang]/products/[slug].astro` for other locales — the two files are near-duplicates by design (same for `index.astro` vs `[lang]/index.astro`). When you change one, mirror the other unless the change is English-only. English pages filter `locale === DEFAULT_LOCALE`; `[lang]` pages accept only a real non-default locale (`isLocale(lang) && lang !== DEFAULT_LOCALE`) and 404 otherwise, so a locale only gets a product page if a Markdown file exists for it (currently `en` + `bg`; `de/fr/it/es` homepages show "Translations coming soon").

**2. Hand-built evidence guides** — `src/pages/collagen.astro` (the supplement template) backed by a typed data module (`src/data/collagen.ts`) that is the single source of truth: `SectionGroup[] → Section{ id, category, title, tldr, evidence, focus, bodyHtml, note… }`. The page sorts sections by evidence tier and renders them with `EvidenceRow` (bar/pips strength indicator) and `ExpandableDrawer` (`<details>`-based, content stays in the DOM for SEO/search). Guides are English-only (`DEFAULT_LOCALE`). Shared evidence vocabulary (the `Evidence` type, `EVIDENCE_TIERS`, `evidenceColor`, `evidenceLabels`, `countByTier`, `readingMinutesFor`) lives in `src/data/evidence.ts`; a guide module re-exports the type and wraps the helpers for its own sections (`collagen.ts` → `evidenceCounts()`, `readingMinutes()`), which the homepage spotlight (`index.astro`) reads for its evidence ledger — keep derived numbers in data modules, not in pages. Per-page presentation overrides (`groupOrder`, `groupTitle`, `groupIntro`, `drawerShort`, `faqAnswer`) live in the page frontmatter, not in the data. The problem-template conventions (for a future `/jowls`-style guide) are documented in the `new-guide-page` skill.

**Layout & SEO** — every page uses `src/layouts/BaseLayout.astro` (`title`, `description`, `locale`, `path`, `type`, `jsonLd`). `path` (route without leading slash, e.g. `"collagen"`) drives hreflang links in `SEO.astro` and the language switcher in `Header.astro` — pass it on every page. `BaseLayout` always injects Organization JSON-LD; pass page-level schema via `jsonLd`.

**i18n** — `src/i18n/ui.ts` holds `LOCALES`, `DEFAULT_LOCALE`, and the `ui` string dictionary; `t(locale, key)` falls back to English then to the key itself; `localePath(locale, path)` produces `/path` for English and `/<lang>/path` otherwise (`prefixDefaultLocale: false` in `astro.config.mjs`). Nav labels come from `ui`; guide links are hard-coded English.

**Brand tokens** — `src/styles/global.css`: `--color-bone/ink/sage/rose/gold`, `--font-display` (Cormorant Garamond) and `--font-sans` (Inter), loaded from Google Fonts in `BaseLayout`. Evidence-tier colours are the saturated `evidenceColor` set in `src/data/evidence.ts`, not the brand tones. `html { scroll-behavior: smooth }` is global — scroll with `behavior: 'instant'` when scripting screenshots.

**Routing notes** — `trailingSlash: 'never'` (Wix's edge also 301s `/x/` → `/x`); `redirects` in `astro.config.mjs` (`/collagen-5 → /collagen`, emitted as a `_redirects` rule). Sitemap: `@astrojs/sitemap` only sees fixed routes in server mode, so `astro.config.mjs` → `dynamicPages()` enumerates the localized homepages and every product page from `src/content/products` and passes them as `customPages` — extend it if you add another dynamic route family; fixed pages (like `/collagen`) need nothing. Output is `/sitemap-index.xml` → `/sitemap-0.xml` with hreflang alternates. `public/robots.txt` is **not served** on Wix (Wix generates its own; edit via the dashboard's Robots.txt Editor).

## Deployment (Wix-managed headless)

- Target: Wix headless site **"deage.eu"** (`siteId 398db007-abb0-43d7-b2f8-ff01c7cabc22`, private app `eaace53d-…` — both in `wix.config.json`; don't edit). Dashboard: https://manage.wix.com/dashboard/398db007-abb0-43d7-b2f8-ff01c7cabc22. The site is owned by the partner's Wix account; this user is a collaborator — `npx wix whoami` should show dorian.sternvukotic@gmail.com. The sibling EGP repo deploys to a *different* Wix site (`08a77ef2-…`); never point this repo's `wix.config.json` at it.
- Flow: `npm run build` → `npm run release`. `wix build` writes `.wix/build-metadata.json` + `dist/` (`_worker.js`, `_routes.json`, `_redirects`, `_wix/app-manifest.json`, static assets); `wix release` uploads and publishes (prints `Site published on deage.eu`).
- `astro.config.mjs` is the `headless link` recipe applied by hand (the CLI's `link`/`init` would provision a *new* site): `output: 'server'`, `wixHostingAdapter()` **gated to production builds** (its local `workerd` emulator needs glibc ≥ 2.32; this dev box has 2.31, so `astro dev` runs plain Node SSR), integrations `react()`, `wix()`, `wixPages()`, `security.checkOrigin: false`. Keep all of those; `@wix/astro` throws at config time if `.env.local` (from `npx wix env pull`) is missing.
- Why not the simpler static `site.outputDirectory` mode: tested 2026-08-31 — Wix's static host serves exact paths only (`/collagen` 404, `/collagen/index.html` 200, extensionless files come back as `application/octet-stream`).
- Wix serves its own `robots.txt` (points at Wix's `/sitemap.xml`, which lists fixed routes only — or 404s); add `Sitemap: https://www.deage.eu/sitemap-index.xml` in the dashboard's Robots.txt Editor.
- **Known platform caveat:** Wix's edge appends its own dashboard-derived SEO tags (`wix-seo-tag="true"`: a second `<title>` like "Home | deage.eu", canonical, og:title/url/site_name/type, twitter:card/title) *after* ours on every page — ours come first and the canonicals match, but titles/og:title are duplicated. It happens outside our bundle (EGP has the same), there is no opt-out in `@wix/astro`, and Wix's docs expect layouts to drop their own title/description/canonical in favour of the dashboard. We keep `SEO.astro` authoritative; if the duplicates matter, options are per-page titles in the dashboard's SEO Settings (fixed routes only) or a client-side cleanup of `[wix-seo-tag]` nodes.
- `wix dev` starts the server but this collaborator account then hits `FailedToGetGitHubOnboardingStatus` and the CLI exits, taking the server with it — hence `dev` = `astro dev`. Install deps with `npm install --ignore-scripts` if `sharp` ever fails to build (it's unused here).

## Gotchas

- `MediaPlaceholder` slots are intentional placeholders for images/video that don't exist yet — keep them; humans fill media later.
- Much product/guide content is still demo-grade (fictional doctor/testimonials on the product page, uncited treatment sections, stock images) — see the `content-status-audit` memory before treating anything as verified.
- Tailwind 4 via `@tailwindcss/vite` — no `tailwind.config`; theme lives in `global.css` `@theme`.
- `EvidenceRow` has two indicator variants (`bar`, `pips`) marked experimental; `collagen.astro` uses `bar`.
- `.env.local` (from `npx wix env pull`) holds `WIX_CLIENT_SECRET` — it is gitignored; never commit or print it. `.wix/` is CLI state, also ignored.
- `npm audit` reports vulnerabilities in the `@wix/cli` dependency tree (dev-only tooling, not shipped to the browser).
