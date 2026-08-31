# TODO

Status as of 2026-08-31 — the site is live at https://www.deage.eu (Wix-managed headless hosting; see README → Deployment).

## Launch follow-ups (deployment & SEO)

- [ ] Wix dashboard → **SEO & GEO → Robots.txt Editor**: add `Sitemap: https://www.deage.eu/sitemap-index.xml`. Wix serves its own `robots.txt` (ours in `public/` is ignored) and its default points at a Wix `/sitemap.xml` that only lists fixed routes (and currently 404s).
- [ ] Decide what to do about Wix's injected duplicate SEO tags (`wix-seo-tag="true"`: a second `<title>` such as "Home | deage.eu", canonical, OG and Twitter tags appended after ours on every page — platform behaviour, no opt-out, EGP has the same). Options: per-page titles in the dashboard's SEO Settings (fixed routes only), a client-side strip of `[wix-seo-tag]` nodes, or accept it (ours come first; canonicals match).
- [ ] Submit `https://www.deage.eu/sitemap-index.xml` to Google Search Console and Bing Webmaster Tools; verify hreflang under International Targeting.
- [ ] The Wix site is owned by the partner's account (this account is a collaborator). Confirm that stays sufficient for `npm run release`; `npx wix dev` currently exits with `FailedToGetGitHubOnboardingStatus` for this account (use `npm run dev`).
- [ ] `npm audit` reports findings in the `@wix/cli` dev-only dependency tree — re-check after Wix CLI updates.
- [ ] When another dynamic route family is added, extend `dynamicPages()` in `astro.config.mjs` so it reaches the sitemap.

## Content — demo-grade material that is now public (audit 2026-08-20)

- [ ] `products/*/collagen-max-pro.md`: the doctor ("Dr Sofia Petrova"), the three studies (journal + year only, no DOIs) and the testimonials (Unsplash avatars) are placeholders — replace with real, verifiable ones or remove. **The product JSON-LD emits `aggregateRating`/`review` from the fake testimonials — remove until they are real.**
- [ ] Replace `buyUrl` / `?ref=deagingeurope` with real affiliate tracking links.
- [ ] `/collagen`: cite the uncited sections (topicals 0/13, clinical 0/11, FAQ 0/7); replace the boilerplate "References" section with the actual sources; check two dubious entries ("Sue Devitt Triple C" as a growth-factor serum, "Dr. Barbara Sturm Ceramide Complex"); the hard-coded "Updated <date>"; the sticky "Book a call" `href="#"`.
- [ ] Fill the 32 `MediaPlaceholder` slots on `/collagen` with real images/video.
- [ ] Translations: only `bg` has a product page; `de/fr/it/es` homepages show "Translations coming soon".
- [ ] Nav "Science" links to `#science`, which doesn't exist on the homepage.

## Assets

- [ ] `public/favicon.svg` (referenced in the layout, missing).
- [ ] `public/og-default.png` 1200×630 (referenced by `SEO.astro`, missing).
- [ ] Replace the Unsplash / Wix-hosted product image with self-hosted assets in `public/`.

## Next

- [ ] Next evidence guide (problem template, e.g. `/jowls`) via the `new-guide-page` skill.
