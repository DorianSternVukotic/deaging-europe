# TODO

Status as of 2026-08-31 — the site is live at https://www.deage.eu (Wix-managed headless hosting; see README → Deployment).

## Launch follow-ups (deployment & SEO)

Research and the ranked plan (2026-09-11/12): `docs/seo-research-2026-09-11.md`. Done in code on 2026-09-12: Organization/WebSite/Article schema with real dates from `src/data/guides.ts`, sitemap `lastmod`, a noindex 404, `og-default.png` + icons + logo, the commercial-relationship line, and `src/middleware.ts` removing Wix's duplicate SEO tags.

- [ ] Wix dashboard → **SEO & GEO → Robots.txt Editor**: paste `public/robots.txt`. Its `Sitemap:` line points at `/sitemap-index.xml`; Wix's default points at `/sitemap.xml`, which 404s, and `wix({ robots: false })` does not help (tested on a preview).
- [ ] Google Search Console: verify `deage.eu`, switch on "include in Search generative AI features" (required for AI Overviews / AI Mode since June 2026), submit `https://www.deage.eu/sitemap-index.xml`, add the site under Preferred Sources, watch the generative-AI performance report. Bing Webmaster Tools: verify, submit the sitemap, enable IndexNow.
- [ ] Wix dashboard → SEO & GEO → Tools and settings → llms.txt → Edit file: list the guides and the product page (Google ignores the file; ten minutes, no more).
- [ ] Bylines and a named medical reviewer on every guide, plus `/about` and `/methodology` (the four evidence tiers explained) — the YMYL gap. Blocked on the partner naming the doctor in the hero photo (name, credentials, a bio to link). Then switch the Article `author` from the Organization to a `Person` and add `reviewedBy`.
- [ ] Guides for AI extraction: a direct answer with the headline statistic in the top third, the strongest rows open by default, question-form H2s.
- [ ] Self-host the 29 Pexels hotlinks on `/collagen` as WebP with `width`/`height`; per-guide `og:image` once the guides have photography (they fall back to `og-default.png`).
- [ ] An honest, dated "best collagen supplements 2026" comparison page (listicles take most AI product citations; self-promotional lists were demoted in Dec 2025).
- [ ] Partner, Aeterna: Google Merchant Center via Wix's Google channel; the Wix agentic-commerce toggles (Stripe ACP); a US-shipping offer is the gate to the ChatGPT/Perplexity/Copilot product feeds. Partner, EGP (the other repo): Google Business Profile, Fresha online booking, Yelp UK, Bing Places.
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
