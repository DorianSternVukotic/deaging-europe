# DeAging Europe

Evidence-based anti-aging hub. Astro 5, static output, multi-locale, SEO + AI-crawler optimized.

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # static output to ./dist
npm run preview      # serve ./dist locally
```

## Configuration

The canonical origin defaults to the production domain, **`https://www.deage.eu`** (see `astro.config.mjs`). It drives canonical tags, hreflang links, the sitemap and `public/robots.txt`. Override it for previews:

```bash
SITE_URL="https://preview.example" npm run build
```

`npm run build`, `npm run dev` and `npm run release` go through the Wix CLI, which needs the site's environment file. Once per machine:

```bash
npx wix login        # a Wix account that owns or collaborates on the "deage.eu" site
npx wix env pull     # writes .env.local (WIX_CLIENT_ID/SECRET …) — gitignored, never commit it
```

Without `.env.local` the build fails with `WIX_CLIENT_ID not found in loaded environment variables`.

## Deployment

Production is **Wix-managed headless hosting** on the custom domain **https://www.deage.eu** (apex `deage.eu` 301s to `www`). The Wix site is identified by `wix.config.json` (`siteId` `398db007-…`, private app `eaace53d-…`); its dashboard is <https://manage.wix.com/dashboard/398db007-abb0-43d7-b2f8-ff01c7cabc22>.

```bash
npm run release      # = wix release: uploads dist/ and publishes → "Site published on deage.eu"
```

Run `npm run build` first when you want to inspect the bundle; `release` uses whatever is in `dist/`. Releases take seconds and clear Wix's CDN cache. If `release` fails with a transient network error, just run it again (build failures are not transient — fix the code).

### How it's hosted (and why it's not a static upload)

Wix's static file host serves *exact paths only* — no `/collagen` → `/collagen/index.html` directory-index resolution and no extensionless lookup — so a plain `dist/` upload 404s every nested route. Instead the site builds with `output: 'server'` (`@wix/astro` + `@wix/astro-wix-hosting-adapter`) and Wix's edge worker renders each route on demand; `/_astro/*`, the sitemap files and `_redirects` are served as static assets. Pages resolve their content from `Astro.params` at request time and return a 404 `Response` for unknown slugs/locales (rendered by `src/pages/404.astro`). Nothing calls the Wix SDK — the integration is only the hosting contract.

The hosting adapter is attached only when `NODE_ENV=production` (`isBuild` in `astro.config.mjs`): its local emulator (Cloudflare `workerd`) needs glibc ≥ 2.32, so `npm run dev` (= `astro dev`) runs plain Node SSR without it. `npx wix dev` also works for the site owner, but for collaborator accounts the CLI may exit with `FailedToGetGitHubOnboardingStatus` right after starting.

### robots.txt and sitemaps on Wix

- Wix serves its **own** `robots.txt` (auto-generated; `public/robots.txt` is ignored). Edit it in the dashboard under **SEO & GEO → Robots.txt Editor** and add `Sitemap: https://www.deage.eu/sitemap-index.xml` — Wix's default points at its own `/sitemap.xml`, which only lists fixed routes.
- The complete sitemap (all locales + product pages, with hreflang alternates) is **`/sitemap-index.xml` → `/sitemap-0.xml`**, produced by `@astrojs/sitemap`. Dynamic routes are rendered on demand, so `astro.config.mjs` enumerates them (`dynamicPages()`) from `src/content/products` — extend that function if you add another dynamic route family.
- Wix's edge appends its own dashboard-derived SEO tags (`wix-seo-tag="true"` — a second `<title>`, canonical, OG and Twitter tags) after ours on every page. Ours come first and the canonicals match; there is no opt-out. If the duplicate titles matter, set per-page titles in the dashboard's **SEO Settings → Main Pages** (fixed routes only) or strip `[wix-seo-tag]` nodes client-side.

### Hosting elsewhere

The build is a standard Astro server build; to move hosts, swap `wixHostingAdapter()` for that host's adapter (or drop `output: 'server'` and go back to a static build on a host that resolves directory indexes — Vercel, Netlify, Cloudflare Pages and GitHub Pages all do).

## Post-deploy checklist

- [x] Canonical origin is `https://www.deage.eu` (default in `astro.config.mjs`)
- [ ] Wix dashboard → SEO & GEO → Robots.txt Editor: add `Sitemap: https://www.deage.eu/sitemap-index.xml`
- [ ] Submit `https://www.deage.eu/sitemap-index.xml` to Google Search Console + Bing Webmaster Tools
- [ ] Verify hreflang in Search Console → International Targeting
- [ ] Replace affiliate URLs in `src/content/products/*/*.md` (`buyUrl` field) with real tracking links
- [ ] Replace placeholder Unsplash images with self-hosted assets in `public/`
- [ ] Add `public/og-default.png` (1200×630) for default social previews
- [ ] Add a real `public/favicon.svg`
