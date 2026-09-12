# SEO and AI-visibility research — 11–12 Sep 2026

Three background investigations run on 2026-09-11 for the question "what can we implement on our site for search SEO and for AI assistants recommending our products/clinics?". Recovered from the session log on 2026-09-12; the ranked plan derived from them is in the memory note `seo-ai-visibility-plan` (the launch follow-ups in TODO.md predate it).

Spot-checks done 2026-09-12 against primary sources:
- Google's AI-optimization guide (updated 2026-07-10): a site "must be included in Search generative AI features in Search Console" to be eligible for AI Overviews / AI Mode; llms.txt and other AI text files are ignored; no special schema is needed.
- Google Search Central changelog: FAQ rich results stopped 2026-05-07, documentation removed 2026-06-15.
- Wix "About SEO Support" / "Manage SEO for Main Pages" (headless Astro): injection happens at the edge on main pages (no `wix-seo-tag` code exists in `@wix/astro` 2.68.0), there is no opt-out, the documented model is dashboard-owned title/description/canonical/social; routes reach the dashboard through the page registry after a release; `wix({ robots: false })` is the documented way to serve your own robots.txt.
- Wix Help Center "Understanding your site's llms.txt file": editable under SEO & GEO → Tools and settings → Go to llms.txt → More Actions → Edit file; editing freezes automatic updates; "Reset to Default" restores them.


---

# Part A — Audit of what deage.eu emits today (codebase + live site)

## 1. Head/meta

**`src/layouts/BaseLayout.astro`** (57 lines) — the only layout; every page uses it.
- `src/layouts/BaseLayout.astro:29` `<html lang={locale}>` → always `lang="en"`
- `:31` `<meta charset="utf-8">`; `:32` `<meta name="viewport" content="width=device-width, initial-scale=1">`
- `:33` `<link rel="icon" type="image/svg+xml" href="/favicon.svg">` — **no such file in `public/`** (live returns 200; Wix supplies one)
- `:34-35` `<link rel="preconnect" href="https://fonts.googleapis.com">`, `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
- `:36-39` render-blocking Google Fonts `<link rel="stylesheet">`: `family=Archivo:wght@400;500;600&family=Cormorant+Garamond:wght@500;600&family=IBM+Plex+Mono&family=IBM+Plex+Sans:wght@400;500;600&display=swap`. No self-hosting, no `@font-face` in `src/styles/global.css` (fonts referenced only as `--font-display: "Archivo"` etc., `global.css:29`).
- `:20-26` `orgJsonLd` — the **only** global JSON-LD:
  - `'@context': 'https://schema.org'`, `'@type': 'Organization'`, `name: 'DeAging Europe'`, `url` (= `Astro.site`, emitted with trailing slash `https://www.deage.eu/`), `description: 'Evidence-based anti-aging information and products for Europe.'`
  - **No `logo`, no `sameAs`, no `contactPoint`, no `address`, no `founder`, no `@id`.**
- `:47` merge: `jsonLd={[orgJsonLd, ...(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [])]}` — page-level `jsonLd` prop is appended after Organization; each object becomes its own `<script>` (not a `@graph`).

**`src/components/SEO.astro`** (48 lines):
- `:23` `<title>{title}</title>` — no pattern applied in the component; each page hardcodes its own full string (guides: `"<Topic> — <qualifier> | DeAging Europe"`; product: `d.seoTitle ?? \`${d.title} by ${d.brand} | DeAging Europe\`` at `products/[slug].astro:63`)
- `:24` `<meta name="description">`; `:25` `<link rel="canonical" href={canonical}>` built from `new URL(localePath(locale, path), site)` (`:18`)
- `:27-30` hreflang: loops `LOCALES` (which is `['en']` only, `src/i18n/ui.ts:1`) → emits exactly two tags, `hreflang="en"` and `hreflang="x-default"`, **both pointing at the same URL**
- `:32-37` `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:locale`. `og:locale` = `HREFLANG[locale].replace('-','_')` → literal `"en"` (not `en_GB`/`en_US`). No `og:site_name`, no `og:image:width/height/alt`.
- `:39-42` `twitter:card` = `summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`. No `twitter:site`/`twitter:creator`.
- `:44` `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">` — emitted on **every** page including 404.
- `:19` og image fallback: `/og-default.png` — **file does not exist** (live 404).
- **No `theme-color`, no `<link rel="manifest">`, no `apple-touch-icon`, no `<meta name="author">`, no `article:published_time`/`article:modified_time`, no font `preload`, no `dns-prefetch` beyond the two preconnects.**

## 2. Per-page structured data

Full grep of `src/pages/**` + `src/components/**` for `jsonLd` / `application/ld+json` / `@type`:

| Emitter | Type | Fields |
|---|---|---|
| `src/layouts/BaseLayout.astro:20-26` | `Organization` | `name`, `url`, `description` |
| `src/pages/products/[slug].astro:52-60` | `Product` | `name`, `brand:{@type:Brand,name}`, `description` (= `tagline`), `image[]` (absolutised gallery), `offers` |
| `src/pages/products/[slug].astro:35-48` | `AggregateOffer` (4 variants) or `Offer` fallback | `priceCurrency`, `lowPrice`, `highPrice`, `offerCount`, `availability: 'https://schema.org/InStock'`, `url` |

That is the complete inventory. **No other page in `src/pages/` passes a `jsonLd` prop** — all 38 guide pages, `index.astro`, `contact.astro` and `404.astro` emit Organization only.

Absent everywhere: `Article`, `MedicalWebPage`, `FAQPage`, `AggregateRating`, `Review`, `BreadcrumbList`, `WebSite`/`SearchAction`, `HowTo`, `ItemList`, `VideoObject`, `ImageObject`, `Person`, `WebPage`, `@graph`, `@id`.

**Product frontmatter — structured fields available vs. reaching JSON-LD** (`src/content/products/en/collagen-max-pro.md`, 237 lines; schema `src/content.config.ts:28-133`):

| Frontmatter field | Present in MD | In JSON-LD |
|---|---|---|
| `title`, `brand` | yes (`:2`, `:5`) | yes → `name`, `brand.name` |
| `tagline` | `:24` | yes → `description` |
| `image` + `gallery[5]` (`src`,`alt`,`fit`) | `:7-23` | yes → `image[]` (alt text dropped) |
| `price: "66.47"`, `currency: EUR`, `servings: 30` | `:28-30` | price only via `Offer` fallback; **not used** because variants exist |
| `variants[4]` (name, short, flavour, source, pack, servings, price, url) | `:38-70` | only min/max/count → `AggregateOffer`; **no per-variant `Offer`, no `hasVariant`/`ProductModel`** |
| `subscription {price, note}` | `:34-36` | **no** |
| `buyUrl`, `shopName` | `:32-33` | `buyUrl` → `offers.url` |
| `badges[7]` | `:37` | **no** |
| `actives[4]` (name, brand, supplier, country, perServing, role, finding, evidence, guideId) | `:71-114` | **no** |
| `facts` (servingSize, servingsPerPack, rows[6], footnotes[2]) | `:115-134` | **no** (no `NutritionInformation`) |
| `caveats[5]` | `:135-145` | **no** |
| `studies[4]` (title, journal, year, summary, url, evidence, tag) — 2 PubMed, 2 DOI links | `:146-178` | **no** (no `citation`/`ScholarlyArticle`) |
| `howTo` (steps[3], timeline[4], video{src,poster,alt}) | `:179-197` | **no** `HowTo`, no `VideoObject` |
| `quotes[4]` (name, body, source "verified buyer, aeterna.bg") + `quotesNote` | `:198-212` | **no** `Review`/`AggregateRating` |
| `faq[7]` (q/a) | `:213-234` | **no** `FAQPage` |
| `seoTitle`, `seoDescription` | `:235-237` | used for `<title>`/description |
| GTIN / SKU / MPN / EAN | **absent from schema entirely** | — |
| `priceValidUntil`, `shippingDetails`, `hasMerchantReturnPolicy`, `itemCondition`, `seller` | absent | — |
| `availability` | hardcoded `InStock` (`:43`, `:47`) — not a frontmatter field | — |

## 3. Routes

42 `.astro` files in `src/pages`; 41 fixed routes + 1 dynamic family. `output: 'server'` — everything rendered on demand.

- **Utility (4):** `/` (`index.astro`), `/contact` (`contact.astro`), `/404` (`404.astro`), `/products/[slug]` (dynamic, 1 entry → `/products/collagen-max-pro`)
- **Guides (38)**, exactly matching the `src/data/guides.ts` registry (38 entries, kinds: 4 `foundation`, 7 `clinic`, 2 `lifestyle`, 3 `decade`, 23 `problem` — verified 1:1 with no orphans either way): `aging-hands, anti-aging-30s, anti-aging-40s, anti-aging-50s, ceramides, chemical-peels, collagen, collagen-loss, crows-feet, dark-spots, decolletage, double-chin, dry-skin, dull-skin, eye-bags, facial-redness, facial-volume-loss, fillers, forehead-lines, hair-loss, hooded-eyes, jowls, laser-ipl, lip-lines, longevity-clinics, marionette-lines, microneedling, nasolabial-folds, neck, red-light-therapy, regenerative-aesthetics, sagging-skin, sauna, sun-damage, supplements, thin-lips, upper-arms, wrinkles`

**E-E-A-T pages:**
- **No `/about`** (live: 404). No editorial-policy, methodology, `/authors`, `/team`, `/privacy`, `/terms`, `/imprint`, `/disclaimer`, `/legal`, `/affiliate-disclosure` route.
- `/contact` exists (`src/pages/contact.astro`) — a `mailto:dorian.sternvukotic@gmail.com` link + a B2B pitch. **No form.**
- **No author byline, no medical-reviewer byline anywhere.** `src/i18n/ui.ts:27` defines a `'product.doctor.title': 'Reviewed by'` string, but no component consumes it. The homepage copy says "Curated by clinicians" / "reviewed by clinicians" (`ui.ts:23`, `index.astro:48`) with no named person.
- Disclaimers: `Footer.astro:20` site-wide ("not medical advice"), per-guide italic paragraph (e.g. `collagen.astro:414-418`), affiliate line `products/[slug].astro:90-92`.

**"Updated" dates:** hardcoded literal text inside each page's hero `<p class="meta">`, **not** from any data field (`grep` for `export const updated` / `updated:` in `src/data/*.ts` returns nothing). 38 of 39 guide pages carry one, e.g. `collagen.astro:174` `Updated 10 May 2026`, `sauna.astro:82` `Updated 3 Sep 2026`, `thin-lips.astro:168` `Updated 8 Sep 2026`. Values span 3 Sep–8 Sep 2026 except collagen (10 May 2026). Rendered as **visible text only**; no `<time datetime>`, no `dateModified`, no `datePublished`, no `article:modified_time`. `/supplements`... all 38 use the same pattern; `index.astro`, `contact.astro`, `404.astro`, product page have none.

## 4. Content structure signals

`src/pages/collagen.astro` (509 lines) + `src/data/collagen.ts`, cross-checked against the live HTML (210,358 bytes):

- **Headings:** exactly one `<h1>` (`collagen.astro:166` "Collagen, end‑to‑end."). Live count: 1× h1, 12× h2, 30× h3. h2s are section/group titles ("If you read nothing else", "Collagen — what the evidence says", "Benefits", "Boost it: diet & supplements", "Boost it: topicals & at-home devices", "Boost it: clinical treatments", "Our picks", "Side effects & safety", "Frequently asked questions", "Build your collagen routine", "Topical products by evidence", "References & further reading"). h3s live inside `<summary>` (`ExpandableDrawer.astro:27`, `EvidenceRow.astro:77`) — i.e. every drawer title is an h3. No h4+.
- **Evidence sections are `<details>`:** `EvidenceRow.astro:63` and `ExpandableDrawer.astro:24`. **53 `<details>` in the live HTML; all bodies are server-rendered into the DOM** (verified: "most abundant structural protein" and "triple helix" both present in raw HTML). Only `supplement-collagen` is `open` by default (`collagen.astro:125`). Bodies use `set:html` (`EvidenceRow.astro:87`, `ExpandableDrawer.astro:37`).
- **Citations:** inline `<a>` inside `bodyHtml`, all with `rel="noopener nofollow" target="_blank"`. In `collagen.ts`: 31 external links total — 3 `pubmed.ncbi.nlm.nih.gov`, 15 `pmc.ncbi.nlm.nih.gov`, 10 `www.ncbi.nlm.nih.gov`, **0 `doi.org`**. Live page: 19 `ncbi.nlm.nih.gov` occurrences. Sitewide across `src/data/`: **1,121 PubMed links, 10 DOI links**. No numbered reference list — the `#references` section (`collagen.astro:405-412`) is a prose paragraph naming source types, with zero links.
- **FAQ markup:** `<details>` drawers only (`collagen.astro:337-347`, group id `faq`), with a bottom-line answer in the always-visible `short` slot (`faqAnswer` map, `:102-110`). **No `FAQPage` JSON-LD, no `itemscope`/microdata.**
- **Tables:** none on the guides — `grep -c '<table'` in `src/data/*.ts` = 0; sitewide only 2 `<table>` (`ProductVariants.astro:26`, `InfoSection.astro:49`). "Comparison tables" are card grids (`collagen.astro:390-401` `.tiles`).
- **TL;DR / key takeaways:** `keyTakeaways` exists in `collagen.ts:86-92` (5 items) but **`collagen.astro` does not import or render it** — the top block is instead 5 `ExpandableDrawer`s with one-line `drawerShort` strings (`:116-122`, rendered `:197-199`). `sauna.astro:94-101` *does* render `keyTakeaways` as an `<ol>`.
- **Internal links:** `collagen.ts` references `PRODUCT_PATH` (`/products/collagen-max-pro`) 22 times; cross-guide `<a href="/...">` links are 0 in `collagen.ts` but heavy elsewhere (`collagen-loss.ts` 37, `sagging-skin.ts` 24, `aging-hands.ts` 23, `wrinkles.ts` 21, `decolletage.ts` 19…). Homepage links to all 37 non-collagen guides (`index.astro:162-171`).
- **Breadcrumbs:** `grep -i breadcrumb src/` → **zero hits**. No visual breadcrumb, no `BreadcrumbList`.
- **Images on `/collagen`:** hero `:177-184` has `src`, `srcset` (600w/1200w), `sizes`, `alt`, `fetchpriority="high"` — **no `width`/`height`/`loading`**. Video-poster fallback `:215-222` has `loading="lazy"`, no dims. Section figures `EvidenceRow.astro:102` `loading="lazy"`, no dims. **No `width`/`height` attribute on any `<img>` in the repo** (grep for `width=` on img returns only SVG icons).
- **Alt text:** descriptive sentences throughout (`collagen.astro:56` "A doctor in a white coat holding a tub of Aeterna COLLAGEN MAX PRO"; `:67-68` Pexels alts). Product gallery thumbs use `alt=""` with `aria-label` on the wrapping button (`ProductHero.astro:78`, `:75`).
- **External image hotlinks:** `images.pexels.com` appears in exactly 2 files — `src/pages/collagen.astro:48-49` and `src/data/collagen.ts:70-73`. **29 pexels hotlinks in the live `/collagen` HTML.** Also `static.wixstatic.com` hotlinks (`collagen.astro:50-51`, `collagen.ts:63-64`). Local images only under `public/images/aeterna/` (10 JPGs, 27 KB–161 KB) — used by `/collagen` hero + video poster, `index.astro`, and the product gallery.
- `src/pages/sauna.astro`: identical skeleton (h1 `:74`, 12+ h2, EvidenceRow/ExpandableDrawer `<details>`, `#references` prose `:286-293`, routine builder `:230-263`). **All its media are `MediaPlaceholder` components — no real `<img>` at all.** Only `collagen.astro` and `index.astro` contain literal `<img>` tags among the pages; the other 37 guides use `MediaPlaceholder`.
- `sauna.ts` citations: 28 external links — 11 pubmed, 6 pmc, 2 ncbi, 0 doi.

## 5. Sitemap / robots / crawl

`astro.config.mjs`:
- `:13` `const site = process.env.SITE_URL ?? 'https://www.deage.eu'`
- `:37` `trailingSlash: 'never'`
- `:39` `redirects: { '/collagen-5': '/collagen' }`
- `:47` `output: 'server'`; `:51` `wixHostingAdapter()` only when `NODE_ENV === 'production'`
- `:52` `security: { checkOrigin: false }`; `:53` `image: { domains: ['static.wixstatic.com'] }`
- `:56-59` `sitemap({ customPages: dynamicPages(), filter: (page) => !/\/404$/.test(page) })`
- `:22-33` `dynamicPages()` reads `src/content/products/**/*.md`, regex-extracts `slug:` from raw frontmatter, returns `/products/<slug>` absolute URLs. Currently yields 1 URL.
- `:60-62` integrations `react()`, `wix()`, `wixPages()`

`public/robots.txt` (18 lines): `User-agent: *` / `Allow: /`, then explicit `Allow: /` blocks for `GPTBot`, `ClaudeBot`, `anthropic-ai`, `PerplexityBot`, `Google-Extended`, `CCBot`, then `Sitemap: https://www.deage.eu/sitemap-index.xml`. Copied verbatim to `dist/robots.txt`. **Not served in production** — CLAUDE.md:42 and :50 state this; confirmed live in §6.

`dist/` (built):
- `dist/_routes.json`: `{"version":1,"include":["/*"],"exclude":["/_astro/*","/robots.txt","/video/*","/images/*","/collagen-5"]}`
- `dist/_redirects`: `/collagen-5    /collagen    301`
- `dist/sitemap-index.xml` → one entry `sitemap-0.xml`
- `dist/sitemap-0.xml`: **41 `<loc>` entries**, plain `<loc>` only — no `<lastmod>`, no `<changefreq>`, no `<priority>`, and **no `xhtml:link` hreflang alternates** despite the declared namespaces (CLAUDE.md:42 says "with hreflang alternates"; there are none, since there is one locale). `/404` correctly excluded.
- `dist/_wix/app-manifest.json`, `dist/_worker.js`
- **No `public/llms.txt`, no `public/llms-full.txt`, no `public/humans.txt`, no `public/.well-known/`, no `public/site.webmanifest`, no `public/favicon.svg`, no `public/og-default.png`, no `public/ads.txt`.**

## 6. Live site check (via `curl` — full response headers available, so headers are reported verbatim)

**`https://www.deage.eu/robots.txt` → 200**, `content-type: text/plain`, `cache-control: public,max-age=0,must-revalidate`, `server: cloudflare`. Body is **Wix's auto-generated file, not ours**:
```
User-agent: *
Allow: /
Disallow: *?lightbox=
# Optimization for Google Ads Bot
User-agent: AdsBot-Google-Mobile
User-agent: AdsBot-Google
Disallow: /_partials*
Disallow: /pro-gallery-webapp/v1/galleries/*
# Block PetalBot
User-agent: PetalBot
Disallow: /
# Crawl delay for overly enthusiastic bots
User-agent: dotbot
Crawl-delay: 10
User-agent: AhrefsBot
Crawl-delay: 10

Sitemap: https://www.deage.eu/sitemap.xml

# Auto generated, go to SEO Tools > Robots.txt Editor to change this
```
The advertised `Sitemap: .../sitemap.xml` **returns 404**. Our AI-crawler allow-list is not present. `/sitemap-index.xml` is not referenced anywhere in the served robots.txt.

**`https://www.deage.eu/sitemap-index.xml` → 200**, `content-type: application/xml`, `cache-control: public,max-age=3600,immutable`. Body = our Astro sitemap index → `https://www.deage.eu/sitemap-0.xml`.

**`https://www.deage.eu/sitemap-0.xml` → 200**, `application/xml`, 2,559 bytes — identical to `dist/sitemap-0.xml` (41 URLs, `<loc>` only).

**`https://www.deage.eu/collagen` → 200.** Response headers (no `set-cookie`/`x-seen-by` shown): `content-type: text/html`, `x-powered-by: Express`, `x-wix-bi-request-type: web`, `x-wix-request-id`, `access-control-allow-origin: *`, `age: 0`, `x-cache-status: MISS`, `server: cloudflare`, `x-content-type-options: nosniff`, `x-cache: MISS`, `vary: Accept-Encoding`, `strict-transport-security: max-age=31556952`, `cf-cache-status: DYNAMIC`, `alt-svc`. **No `cache-control` header at all. No `x-robots-tag`. No `link: <...>; rel="canonical"`.**

`<head>` as served, in order:
1. Our tags: `charset`, `viewport`, `icon`, 2× `preconnect`, Google-Fonts stylesheet, `<title>Collagen — the complete guide | DeAging Europe</title>`, `description`, `canonical https://www.deage.eu/collagen`, `hreflang="en"` + `hreflang="x-default"` (same URL), `og:title/description/type=article/url/image/locale=en`, `twitter:card/title/description/image`, `robots index, follow, max-snippet:-1, max-image-preview:large`, one `application/ld+json` with the `Organization` object, `<link rel="stylesheet" href="/_astro/astro-pages.CJgdF48V.css">`, inline `<style>`, `<script type="module" src="/_astro/page.BsxoRH0i.js">`.
2. **Wix-injected scripts:** `window.commonConfig`, `window.essentials` (`timeZone: Europe/Sofia`), `window.wixEmbedsAPI` (exposes `getMetaSiteId: 398db007-abb0-43d7-b2f8-ff01c7cabc22`), inline `site-bi-navigation` BI/analytics bundle, `https://static.parastorage.com/services/cookie-consent-policy-client/1.983.0/headlessApp.bundle.min.js` (defer), `https://static.parastorage.com/services/site-consent-policy/1.10.0/site-consent-policy.umd.min.js` (defer).
3. **Wix-appended SEO tags (8 with `wix-seo-tag="true"`), all duplicating/conflicting with ours:**
   - `<title wix-seo-tag="true">Collagen | deage.eu</title>` — a **second `<title>`**
   - `<link wix-seo-tag="true" rel="canonical" href="https://www.deage.eu/collagen">` — duplicate canonical (same value)
   - `<meta wix-seo-tag="true" property="og:title" content="Collagen | deage.eu">`
   - `<meta wix-seo-tag="true" property="og:url" content="https://www.deage.eu/collagen">`
   - `<meta wix-seo-tag="true" property="og:site_name" content="deage.eu">`
   - `<meta wix-seo-tag="true" property="og:type" content="website">` — **contradicts our `og:type=article`**
   - `<meta wix-seo-tag="true" name="twitter:card" content="summary_large_image">`
   - `<meta wix-seo-tag="true" name="twitter:title" content="Collagen | deage.eu">`

**Evidence-section bodies are present in the raw HTML** — 53 `<details>`, 19 `ncbi.nlm.nih.gov` links, 29 `images.pexels.com` URLs, 31 `loading="lazy"`, 1 h1 / 12 h2 / 30 h3, and section prose ("most abundant structural protein", "triple helix") all served server-side. Only 1 `ld+json` block.

**Deployed build is stale relative to the repo:** served fonts are `Cormorant+Garamond` + `Inter` (repo now emits Archivo/Cormorant/IBM Plex ×2), served `og:image` is `/images/aeterna/scoop-close-up-1200.jpg` (repo passes `white-coat-portrait-1200.jpg`), h2 classes are `text-3xl md:text-4xl` (repo `text-[32px] md:text-[44px]`), product JSON-LD `image[]` starts with three `static.wixstatic.com` URLs (repo gallery is fully local), and CSS vars reference `--color-rose` (repo `--color-accent`).

**Other live results:**
- `https://www.deage.eu/llms.txt` → **200**, but it is **Wix's auto-generated file**, not ours (we have none). Content: `# deage.eu`, a single homepage link, and a long "AI Agent Access / MCP" block advertising `https://www.deage.eu/_api/mcp` with tools `GetBusinessDetails`, `SearchInSite`, `SearchSiteApiDocs`, `GenerateVisitorToken`, `CallWixSiteAPI`, `ReadFullDocsArticle`, `ReadFullDocsMethodSchema`. **It does not list a single guide URL.**
- `https://www.deage.eu/.well-known/` → **301** to `/.well-known`; `/.well-known` → **404**
- `https://www.deage.eu/humans.txt` → **404** (serves our styled 404 page, HTTP 404)
- `https://www.deage.eu/about` → **404**
- `https://www.deage.eu/sitemap.xml` → **404**
- `https://www.deage.eu/collagen-5` → **301** → `/collagen` (works)
- `https://www.deage.eu/collagen/` → **301** → `/collagen` (trailing-slash normalisation works)
- `https://www.deage.eu/favicon.svg` → 200 (Wix-served; not in repo)
- `https://www.deage.eu/og-default.png` → **404** — so the fallback `og:image` on the homepage, `/contact`, `/404` and all 37 placeholder guides is a dead URL
- 404 pages serve `<meta name="robots" content="index, follow, ...">` and `<link rel="canonical" href="https://www.deage.eu/">` (canonicalising every 404 to the homepage), because `404.astro` passes no `path` prop.
- Live canonicals spot-checked correct on `/sauna`, `/jowls`, `/wrinkles`, `/supplements`.
- Live `/` head: our tags + Wix `<title wix-seo-tag>Home | deage.eu</title>`, `og:title "Home | deage.eu"`, `og:url https://www.deage.eu` (no slash — differs from our `https://www.deage.eu/`), `og:site_name`, `og:type=website`, `twitter:card`, `twitter:title`.
- Live `/products/collagen-max-pro` head: our tags + **both** JSON-LD blocks (Organization + Product with `AggregateOffer` lowPrice `36.99` / highPrice `71.58` / offerCount 4), then Wix `<title wix-seo-tag>Products | deage.eu</title>`, `og:title "Products | deage.eu"`, `og:type=website` (contradicting our `og:type=product`), `og:site_name`, `twitter:card`, `twitter:title`.

## 7. Header / Footer / nav

`src/components/Header.astro` (65 lines):
- `:16-21` nav items: `#products` (anchor on `/`), `/#guides`, `/collagen` ("Collagen guide"), `/contact`. Wordmark `:25` links to `/`.
- `:27` `<nav aria-label="Primary">`; `:31-36` mobile duplicate inside a `<details><summary>Menu</summary>`.
- **No link to `/about`, legal pages, or any guide other than collagen.** The `nav.products` / `nav.science` / `nav.about` strings exist in `src/i18n/ui.ts:17-20` but `nav.about` and `nav.science` are unused.

`src/components/Footer.astro` (40 lines): three columns.
- Col 1 `:15-16`: wordmark + `footer.tagline`
- Col 2 `:19-20`: "Disclaimer" + `footer.disclaimer` ("Information here is educational and not medical advice…")
- Col 3 `:23-26`: `mailto:dorian.sternvukotic@gmail.com`, a link to `/contact` ("List your product in Europe"), copyright `© {year} DeAging Europe`
- **No social links at all** (no X/Twitter, LinkedIn, Instagram, YouTube, Facebook, Wikidata, Crunchbase) — hence nothing `sameAs`-worthy exists to feed the Organization schema. **No privacy/terms/imprint links. No newsletter signup. No contact form** anywhere in the repo (`<form>` appears zero times).

External links to the shop: only from the product page/components — `buyUrl` and 4 `variants[].url` all `https://www.aeterna.bg/product-page/...?ref=deagingeurope`, rendered with `target="_blank" rel="sponsored noopener"` (`ProductHero.astro:64-66`). **No links to EGP anywhere.**

## 8. Performance-relevant

- **Fonts:** Google Fonts `<link rel="stylesheet">` (render-blocking) with the two preconnects; `&display=swap`. Not self-hosted, no `preload`, no local `@font-face`. Live build requests only `Cormorant+Garamond` + `Inter`.
- **Client JS:** `@astrojs/react` is installed and in `integrations` (`astro.config.mjs:60`) but there are **zero `.tsx`/`.jsx` files and zero `client:*` directives** in `src/` — no React islands ship. All interactivity is plain inline `<script>`: `collagen.astro:451-508` (`is:inline`, routine builder + hash-opens-details + chrome measurement), `sauna.astro:331-380` (same pattern, present on all 38 guides), `ExpandableDrawer.astro:50-61`, `ProductStickyBar.astro:47`, `ProductHowTo.astro:75`, `ProductHero.astro:169`. The build still emits a bundled `/_astro/page.BsxoRH0i.js` module.
- **Hero images (`public/images/aeterna/`, 10 files, 808 KB total):** all **JPEG only** — no WebP/AVIF. `white-coat-portrait-600.jpg` 27 KB / `-1200.jpg` 66 KB (the `/collagen` hero, with `srcset`+`sizes`+`fetchpriority="high"`, no `width`/`height`); `video-poster-800.jpg` 50 KB / `-1600.jpg` 149 KB; `scoop-close-up-600/1200` 49/161 KB; `model-tub-and-pouch-1200` 132 KB; `white-raspberry-tub-1200` 62 KB; `pouch-neutral-1200` 54 KB; `how-to-mix-poster` 37 KB. Astro's `<Image>`/`astro:assets` is **not used anywhere**; every image is a raw `<img>`.
- **`<video>`:** two. `collagen.astro:204-213` — `poster`, `preload="none"`, `controls`, `playsinline`, `aria-label`, `<source type="video/mp4">`; currently dead code (`media.video.src` is `''`, `:63`) so a static `<img>` renders instead. `ProductHowTo.astro:41-53` — `src=/video/how-to-mix-720.mp4` (**1.9 MB**), `poster`, `autoplay muted loop playsinline preload="metadata"`, `aria-label`, inside a `<figure>` with `<figcaption>`.
- **Third-party scripts:** **none in our source** — no GA/gtag, no GTM, no Plausible, no Meta pixel, no consent banner of ours. In production Wix injects its own (see §6): `site-bi-navigation` BI bundle, `cookie-consent-policy-client`, `site-consent-policy` from `static.parastorage.com`.
- **`Astro.response`:** `grep -rn "Astro.response" src/` → **zero hits**. No `Cache-Control`, `X-Robots-Tag`, `Link`, or `Vary` header is set by the app anywhere. `products/[slug].astro:22` returns a bare `new Response(null, { status: 404 })`.

## 9. Homepage

`src/pages/index.astro` (175 lines), `<BaseLayout>` at `:46-50` with **no `path`, no `type` (→ defaults to `website`), no `image`, no `jsonLd`** → canonical `https://www.deage.eu/`, `og:image` the dead `/og-default.png`, schema = Organization only.
- `title` (`:47`): `"DeAging Europe | Evidence-based anti-aging information and products"`
- `description` (`:48`): `"The European hub for anti-aging protocols, ingredients and devices that actually work, backed by science and reviewed by clinicians."`
- **Hero** `:51-67`: eyebrow, `<h1>` "Look and live younger, backed by science.", sub-paragraph, two CTAs → `/collagen` and `/products/collagen-max-pro`.
- **Collagen spotlight** `:70-116`: `<section id="collagen">`, one block `<a href="/collagen">` containing `<h2>` "Collagen, end‑to‑end." plus a meta line "~N min full read · skim it in 3 · N sections" (computed from `readingMinutes()` / `allSections()` in `src/data/collagen.ts`).
- **Evidence ledger** `:100-115`: `<div aria-label="Evidence at a glance">`, an `<ul>` of 4 bars (`strong`/`moderate`/`emerging`/`limited`) with live counts from `evidenceCounts()` (`src/data/evidence.ts:29`), widths scaled to the max. Pure CSS bars, no chart JS, **not exposed in any schema**.
- **Product spotlight** `:120-150`: `<a id="products">` to `/products/collagen-max-pro` with `<img src={product.data.image}>` (Wix-hosted, `loading="lazy"`, `alt` = product title, no dims), `<h2>` = product title, tagline, `€66.47 · 30 servings`.
- **Guide list** `:155-173`: `<section id="guides">`, `<h2>` "More guides, still being cited", intro calling them "Readable drafts", then a 2-column `<ul>` of the **37** non-collagen guides from `src/data/guides.ts`, each a plain `<a href="/{path}">` with a kind label. **No `ItemList` schema.**

---

## Notable gaps (factual absences only)

- No `BreadcrumbList` on any page; no visual breadcrumb markup anywhere (`grep -i breadcrumb` → 0 hits).
- No `Article`, `MedicalWebPage`, `FAQPage`, `HowTo`, `ItemList`, `VideoObject`, `WebSite`/`SearchAction`, `WebPage`, `Person`, `Review`, or `AggregateRating` JSON-LD anywhere. Only `Organization` (global) and `Product` + `AggregateOffer` (one page).
- `Organization` schema has no `logo`, `sameAs`, `contactPoint`, `address`, or `@id`.
- No `llms.txt` in the repo (`public/llms.txt` absent); the live 200 at `/llms.txt` is Wix's MCP boilerplate and lists no guide URLs.
- No `humans.txt`, no `.well-known/` (live 404), no `site.webmanifest`, no `ads.txt`.
- No About page (live 404), no editorial-policy, methodology, authors, privacy, terms, imprint, or affiliate-disclosure route.
- No author byline and no named medical reviewer on any page; the `'product.doctor.title': 'Reviewed by'` string in `src/i18n/ui.ts:27` is never rendered.
- No `dateModified`/`datePublished`/`article:modified_time`/`<time datetime>`; "Updated …" is hardcoded literal text in 38 page files, absent on `/`, `/contact`, `/404` and the product page.
- `public/og-default.png` does not exist — the default `og:image`/`twitter:image` on the homepage, `/contact`, `/404` and 37 of 38 guides returns 404 live.
- `public/favicon.svg` does not exist in the repo (Wix serves one at that path).
- `public/robots.txt` is not served; the live Wix robots.txt omits the AI-crawler allow-list and points `Sitemap:` at `/sitemap.xml`, which 404s. Neither `/sitemap-index.xml` nor `/sitemap-0.xml` is referenced from the served robots.txt.
- Sitemap entries carry no `<lastmod>`, `<changefreq>`, `<priority>`, or `xhtml:link` alternates.
- GTIN, SKU, MPN, EAN, `priceValidUntil`, `itemCondition`, `seller`, `shippingDetails`, and `hasMerchantReturnPolicy` are absent from `src/content.config.ts` and therefore from the Product JSON-LD.
- Product `faq` (7 Q&As), `studies` (4, with 2 PubMed + 2 DOI URLs), `howTo` (3 steps + 4 timeline entries + a video), `quotes` (4 buyer reviews), `actives` (4), `facts`, `caveats`, `badges` and `subscription` reach the DOM but reach **no** structured data.
- No `theme-color`, `manifest`, `apple-touch-icon`, `og:site_name` (ours), `og:image:width/height/alt`, `twitter:site`/`twitter:creator`, or `<meta name="author">`.
- `og:locale` is emitted as `"en"`, not a locale code of the form `en_GB`/`en_US`.
- `hreflang="en"` and `hreflang="x-default"` point at the identical URL (single-locale site).
- 404 responses carry `robots: index, follow` and canonicalise to `https://www.deage.eu/` (`404.astro` passes no `path`).
- No social profile URLs anywhere in the site.
- No contact form and no newsletter signup (`<form>` count in `src/` = 0).
- No `Astro.response` header manipulation anywhere; live `/collagen` has no `cache-control` and no `x-robots-tag`.
- No `<table>` in any guide (0 across `src/data/*.ts`); only 2 tables site-wide, both on the product page path.
- No `width`/`height` on any content `<img>`; no WebP/AVIF; `astro:assets`/`<Image>` unused.
- 37 of 38 guides render `MediaPlaceholder` instead of real images; only `/collagen` and `/` contain real `<img>` tags.
- Only 10 DOI links across all 40 data modules (vs 1,121 PubMed links); no numbered reference list on any guide — `#references` is a prose paragraph with zero links.
- Wix appends a second `<title>`, a second `rel="canonical"`, and an `og:type="website"` that contradicts our `og:type="article"`/`"product"` on every page.
- The deployed build predates the current `hybrid` HEAD (different fonts, og:image, CSS tokens and product gallery URLs than the working tree).


---

# Part B — Search SEO for a health/product site, 2025–2026

I have what I need; the web-search budget is now exhausted, but the primary sources were all fetched. Here is the report.

# Organic visibility for deage.eu, 2025–2026: what actually moves the needle

Legend: **H/M/L** = plausible impact for this site. "Pre-2025" flags older sources.

## 1. E-E-A-T / YMYL for health content

- **Named author + credentialed medical reviewer on every guide, with real bio pages — H.** Google's helpful-content doc asks "Do bylines lead to further information about the author…?" and says trust is the most important E-E-A-T member, weighted extra for YMYL ([Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), updated 2025-12-10). The Sept-11-2025 [Quality Rater Guidelines](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf) rate a flu article Low because "there is no evidence that the author has medical expertise" and instruct: "Pages on YMYL topics… should receive a Low rating if there is an unsatisfying amount of information about who is responsible for the website or who created the content" (§4.5.1, §2.5.2–2.5.3). Implement: visible "Written by / Medically reviewed by … on <date>", `author` as `Person` with `url`/`sameAs`/`jobTitle` per the [Article author best practices](https://developers.google.com/search/docs/appearance/structured-data/article) (2026-09-08), and a **ProfilePage** per author/reviewer — it is still in Google's [structured-data gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) (2026-06-15).
- **About / editorial policy / sources & methodology / contact pages — H.** QRG §3.x: raters start from the "About us" page and "what others say"; the four-tier evidence scale deserves a public methodology page. Cite primary studies (PubMed/DOI) inline: consistency with "well-established expert consensus is important for medical advice" (QRG §3.2).
- **Practitioner reality after the Dec-2025 and Mar-2026 core updates — H (context).** Lily Ray/Amsive: Healthline −27%, WebMD −19%, Medical News Today −42%, even Mayo/Cleveland Clinic down ([Jan 15 2026](https://www.amsive.com/insights/seo/googles-december-2025-core-update-winners-losers-analysis/)); in March 2026 "Google appears willing to demote even high-E-E-A-T publishers in favor of the underlying authoritative sources they cite" — NIH, WHO, Harvard, GoodRx, CVS gained ([Apr 30 2026](https://www.amsive.com/insights/seo/google-march-2026-core-update-winners-losers-analysis/)). Conflict with Google's line: bylines and reviewer badges alone did not protect these sites. What survives is non-commodity content — Google's own [AI-optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) (2026-07-10) says don't "recycle what others on the internet have already said". For deage.eu that means original grading, dose/route tables, clinician commentary, own before/after data — not a prettier Healthline.
- **Partner-product recommendations: disclose, qualify, don't self-rank — H.** Spam policy "thin affiliation": copying "product descriptions and reviews… from the original merchant without any original content" is spam ([Spam policies](https://developers.google.com/search/docs/essentials/spam-policies)); mark partner/affiliate links `rel="sponsored"` ([Qualify outbound links](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)). QRG explicitly: "reviews" by the manufacturer or paid influencers "are not as trustworthy due to the conflict of interest", and its Lowest-rated example is an article that "appears to be an independent review for a supplement, but is actually written by the producer". SEL (Jan 2026): self-promotional "best-of" listicles lost 30–50% after Dec 2025 ([SEL](https://searchengineland.com/google-cracking-down-self-promotional-best-of-listicles-468227)). Action: a visible "Commercial relationship" disclosure above the first Aeterna link on every page that carries one; keep the collagen guide's verdict independent of the product; rewrite the buyer quotes copied from aeterna.bg (or label them as the manufacturer's testimonials and never mark them up as `Review`).
- **Site reputation abuse — L (not applicable to first-party content).** Note only: from 2026-08-30 Google won't apply *manual* actions in the EEA, but algorithmic "separation" of off-topic sections continues ([SER, Aug 28 2026](https://www.seroundtable.com/google-site-reputation-policy-eea-41968.html)).

## 2. Structured data that still pays

- **Deprecated — remove expectations, markup is harmless:** FAQ rich results ended 2026-05-07 (Search Console report gone June, API August 2026; docs removed 2026-06-15) ([SEJ May 10 2026](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/), [Search Central changelog](https://developers.google.com/search/updates)). HowTo: desktop removal Sept 2023 (pre-2025: [Aug 2023 blog](https://developers.google.com/search/blog/2023/08/howto-faq-changes)); sitelinks search box removed Nov 2024; Practice problems Jan 2026; Course-info/Claim-review/etc. Sept 2025. None appear in the current gallery.
- **Product — M.** Your product page is not purchasable, so it qualifies for **product snippets** only, not merchant listings ([Product intro](https://developers.google.com/search/docs/appearance/structured-data/product), 2025-12-10). Required: `name` + one of `offers`/`aggregateRating`/`review`; `Offer.url` may point off-site — the doc doesn't forbid it ([Product snippet](https://developers.google.com/search/docs/appearance/structured-data/product-snippet), 2026-09-08). Merchant Center free listings must land on the account's claimed domain ("Only link to the domain from your Merchant Center account", [landing-page requirements](https://support.google.com/merchants/answer/4752265)) — so Aeterna runs Merchant Center for aeterna.bg; deage.eu cannot. Organization-level `hasMerchantReturnPolicy`/`hasShippingService` (Nov 2025) only matter for the seller — skip.
- **Reviews/ratings — M, with rules.** Self-serving reviews make `Organization`/`LocalBusiness` pages ineligible; `Product` is fine only if "ratings… sourced directly from users"; new 2026-07-24 rule: no "fake or undisclosed incentivized reviews"; recommended: accept only ratings with comment + author name ([Review snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)). Copied aeterna.bg quotes fail this.
- **Organization + WebSite — M.** `logo` ≥112px, `sameAs`, `foundingDate`, `contactPoint`, `vatID`/`iso6523Code` feed the knowledge panel ([Organization](https://developers.google.com/search/docs/appearance/structured-data/organization)); `WebSite` on the homepage is "most important" for the site name shown in results ([Site names](https://developers.google.com/search/docs/appearance/site-names), 2025-12-10).
- **Article/MedicalWebPage + dates — M.** `datePublished`/`dateModified` must match the visible date; label "Updated"; minimise other dates ([Byline dates](https://developers.google.com/search/docs/appearance/publication-dates)). `MedicalWebPage` yields no Google feature, but schema.org's `reviewedBy`/`lastReviewed` are the right vocabulary for the reviewer line ([schema.org](https://schema.org/MedicalWebPage)) — L, cheap.
- **BreadcrumbList — L/M** (desktop only since Jan 2025). **Image metadata / preferred image — L/M:** `primaryImageOfPage` or `og:image` (added 2026-03-02, [Image SEO](https://developers.google.com/search/docs/appearance/google-images)). **VideoObject — L:** embedded YouTube is fine; non-watch pages lose Key Moments only ([Video](https://developers.google.com/search/docs/appearance/video)). **Speakable — skip:** still beta, US-English news on Assistant ([doc](https://developers.google.com/search/docs/appearance/structured-data/speakable)).

## 3. Content and on-page

- **Google's AI guidance — H.** No special markup, no llms.txt (2026-06-15: "won't negatively or positively impact"), no chunking: "Google systems are able to understand the nuance of multiple topics on a page"; structured data must match visible content; add relevant images/video ([AI features](https://developers.google.com/search/docs/appearance/ai-features), 2025-12-10; [AI-optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). Query fan-out is real — "breaking down your question into subtopics and issuing a multitude of queries" ([Google I/O, May 20 2025](https://blog.google/products/search/google-search-ai-mode-update/)) — which rewards topic clusters (ingredient → mechanism → dose → safety → comparisons) over one mega-page. **Conflict:** practitioner consensus (front-loaded, self-contained passages) is not endorsed by Google; the safe overlap is a clear key-takeaways block per page plus H2/H3 that name the sub-question.
- **Collapsed `<details>` content — M.** Google indexes it ("we do take into account anything that's in the HTML", Mueller, pre-2025: [SEJ, Apr 2020](https://www.searchenginejournal.com/googles-mueller-on-myth-of-hidden-tab-content/358724/)), but the new "read more" deep-link snippet feature requires content "not hidden behind an expandable section" ([Snippet doc, Apr 2026](https://developers.google.com/search/docs/appearance/snippet)). Practitioners still report devaluation ([Fresh Egg 2026](https://www.freshegg.co.uk/blog/how-does-google-treat-hidden-content/)). Keep summaries visible (you do); consider rendering the strongest-evidence rows open by default.
- **FAQ sections — L:** keep only where they answer real questions; no rich result.
- **Freshness — M:** visible "Updated" only with substantive change — Google asks "Are you changing the date of pages to make them seem fresh when the content has not substantially changed?" (helpful-content doc).
- **Titles — M:** unique, site name once, no boilerplate ([Title links](https://developers.google.com/search/docs/appearance/title-link)).
- **Preferred sources — L/M, five minutes:** any domain-level site can add the button; preferred content gets a badge in AI Overviews/AI Mode ([doc](https://developers.google.com/search/docs/appearance/preferred-sources), 2026-09-10). **Measure** with the new Search Console generative-AI report (impressions/clicks/citations, [June 2026](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)).

## 4. Technical

- **Core Web Vitals — L/M.** Thresholds unchanged: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 at p75 ([web.dev INP](https://web.dev/articles/inp), updated 2025-09-02); CWV "are used by our ranking systems" but relevance wins ([Page experience](https://developers.google.com/search/docs/appearance/page-experience)). Secondary blogs claiming a "2026 INP methodology change" are not corroborated by web.dev — treat as noise.
- **Images — M.** Self-host the Pexels hotlinks: cross-domain images are allowed, but ranking history resets when URLs change and you don't control availability or licence; use `src` fallback + `srcset`, WebP/AVIF, descriptive filenames and alt ([Image SEO](https://developers.google.com/search/docs/appearance/google-images)).
- **Fonts — L:** WOFF2, `preconnect`, `font-display`, subset (pre-2025: [web.dev, 2022](https://web.dev/articles/font-best-practices)).
- **Duplicate `<title>`/canonical/og from Wix — M/H (verify).** Mueller: a second title/description is "treated the same as if you just extend the existing" tag (pre-2025, [SEJ 2020](https://www.searchenginejournal.com/google-on-how-it-handles-extra-meta-descriptions-and-title-tags/368600/)) — so "Collagen… | DeAging Europe Home | deage.eu" is what Google sees, inviting rewritten title links. Wix's docs say: remove title/description/canonical/social tags from the layout and own them in the dashboard (see §6).
- **Sitemap — M.** `lastmod` only for "significant" updates, verifiably accurate; `priority`/`changefreq` ignored ([Build a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)). Emit real per-page `lastmod` from the data modules and register `sitemap-index.xml` via Wix's Robots.txt Editor.
- **IndexNow — L/M, cheap:** Bing, Yandex, Naver, Seznam, Yep, Amazon; Google does not participate ([indexnow.org FAQ](https://www.indexnow.org/faq)). Bing added `data-nosnippet` (Oct 2025) and an AI Performance report for Copilot citations ([Bing blog, Feb 10 2026](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)).
- **hreflang — L:** not needed for one language/region ([Localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)); harmless.
- **404/trailing slash — done:** real 404 status is correct (404 and 410 treated alike, soft-404s flagged, [HTTP errors](https://developers.google.com/search/docs/crawling-indexing/http-network-errors)); slash variants are distinct URLs — your 301 policy is right.
- **`X-Robots-Tag` — L:** only for non-HTML; add `max-image-preview:large` ([Robots meta](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)).

## 5. Off-page / entity

- **Google Business Profile for the London clinic — H (for the clinic).** GBP signals 32% and review signals 20% of local-pack weight; recency and velocity matter ([Whitespark 2026](https://whitespark.ca/local-search-ranking-factors/)). Practitioners may hold their own profiles alongside the clinic's ([GBP guidelines](https://support.google.com/business/answer/3038177)); no incentives or gating ([Maps policy](https://support.google.com/contributionpolicy/answer/7400114)). Link deage.eu ↔ clinic site ↔ GBP.
- **Third-party reviews feed AI answers — M.** Seer/Trustpilot (Mar 2026, vendor-funded): brands with active review profiles cited in 75% of AI answers vs 1% ([study](https://www.seerinteractive.com/insights/study-of-800k-ai-responses-how-reviews-shape-brand-presence-in-ai-search)).
- **Knowledge panel / Wikidata — L/M.** Consistent `sameAs` profiles, claim the panel once it appears ([claim doc](https://support.google.com/knowledgepanel/answer/7534902)); Wikidata entries need no notability, secondary sources claim 60–180 days ([Digital Applied](https://www.digitalapplied.com/blog/entity-seo-knowledge-graph-optimization-guide-2026)).
- **Digital PR — M.** Expert quotes via Qwoted/Source of Sources, original data assets; Google warns "inauthentic 'mentions'" don't help (AI guide).
- **YouTube — L/M.** Search Console platform properties now report YouTube/Instagram/TikTok/X performance ([Jul 2026](https://developers.google.com/search/blog/2026/07/platform-properties-social-video-guide)).

## 6. Wix headless / Astro specifics

- Wix middleware injects dashboard-derived title, description, canonical, social, robots and structured data (`wix-seo-tag="true"`) on **main pages**; item pages need `@wix/seo` registration. There is **no documented off-switch** (only `wix({ robots: false })`); the documented model is "let the dashboard own the title, meta description, canonical link, and social tags, and don't set those same tags in your layout" ([About SEO Support](https://dev.wix.com/docs/go-headless/wix-managed-headless/full-integration-astro/feature-guides/seo/about-seo-support.md), [Manage SEO for Main Pages](https://dev.wix.com/docs/go-headless/wix-managed-headless/full-integration-astro/feature-guides/seo/manage-seo-for-main-pages.md)). Two viable paths: (a) set every route's title/description in **SEO & GEO → SEO Settings → Main Pages** to match `SEO.astro` (duplicates become identical, harmless under Mueller's "extension" rule); (b) drop those four tags from `BaseLayout` for fixed routes and register `/products/[slug]` with `@wix/seo`. Dashboard edits are edge-cached and propagate within minutes; `wix release` clears the whole cache.
- Wix serves `/sitemap.xml` (page registry) and `robots.txt`; `_routes.json` excludes `/images`, `/video` from the worker — nothing to change.

## Top 10 for this site

1. Author + medical-reviewer bylines with ProfilePage/Person bios, and an About/editorial-policy/methodology page — the QRG Low-rating trigger you currently fail.
2. Make each guide a primary-ish source: cited PubMed/DOI studies, original grading, own data — the only thing that survived 2025–26 core updates.
3. Commercial-relationship disclosure + `rel="sponsored"` on Aeterna links; rewrite copied buyer quotes; keep verdicts independent of the product.
4. Fix Wix duplicate title/canonical/og via dashboard alignment (or layout removal + `@wix/seo` for products).
5. Visible "Updated" + `dateModified` + real sitemap `lastmod`, only on substantive edits.
6. Product page: product-snippet `Product/Offer` (price, currency, availability, off-site `url`); Aeterna runs Merchant Center on aeterna.bg.
7. Keep evidence summaries visible; open strongest rows by default so key answers qualify for deep links and AI citation.
8. Organization + WebSite JSON-LD (logo, sameAs, contact, founding) and consistent profiles → knowledge panel.
9. Self-host images (AVIF/WebP, srcset, alt), keep CWV green, add `max-image-preview:large`.
10. Clinic GBP with steady, un-incentivised review velocity; cross-link the two sites; add the preferred-sources button; ping IndexNow; watch the Search Console gen-AI report.


---

# Part C — AI-assistant citation and agentic-commerce readiness

All four research threads are complete and cross-checked against the primary sources I fetched myself (OpenAI, Anthropic, Perplexity, Google docs; live deage.eu and aeterna.bg checks). Report follows.

# AI citation & agentic-commerce readiness — deage.eu (research as of 11–12 Sep 2026)

Labels: **[official]** vendor docs · **[observed]** study/press/log data · **[spec]** inference.

## 1. Crawler access

| Token | Role | robots.txt | Source |
|---|---|---|---|
| `OAI-SearchBot/1.4` | ChatGPT search index — "sites opted out… will not be shown in ChatGPT search answers" | yes | [official] developers.openai.com/api/docs/bots (12/2025) |
| `ChatGPT-User/1.0` | user-triggered fetch | "may not apply" | same |
| `GPTBot/1.4` | training only; no effect on search | yes | same |
| `Claude-SearchBot` / `Claude-User` / `ClaudeBot` | search index / user fetch / training; blocking the first two "may reduce visibility" | yes | [official] support.claude.com/en/articles/8896518 |
| `PerplexityBot/1.0` / `Perplexity-User/1.0` | search index (not training) / user fetch ("generally ignores robots.txt") | yes / no | [official] docs.perplexity.ai/guides/bots |
| `Googlebot` | Search **and** AI Overviews/AI Mode | yes | [official] developers.google.com/search/docs/appearance/ai-features (12/2025) |
| `Google-Extended` | Gemini training + Gemini-app grounding only; "does not impact… Google Search" | robots-only token | [official] developers.google.com/search/docs/crawling-indexing/google-common-crawlers |
| `bingbot` | Bing + Copilot grounding; `NOCACHE`/`NOARCHIVE` restrict Copilot use | yes | [official] blogs.bing.com/webmaster/september-2023 |
| `Applebot` / `Applebot-Extended` | Siri/Spotlight / training opt-out only | yes | [official] support.apple.com/119829 |
| `CCBot`, `Amazonbot`, `meta-externalagent`, `MistralAI-Training` | training datasets | yes | [official] vendor pages |
| `Amzn-SearchBot`, `Amzn-User`, `meta-externalfetcher`, `MistralAI-User`, `DuckAssistBot` | search/user fetch | mostly yes | [official] |
| `Bytespider` | ByteDance; no docs, ignores robots | — | [observed] |

New since June 2026: a **Search Console toggle** decides whether a site "appear[s] in and help[s] ground responses in our generative AI Search features"; it "will not be used as a ranking signal" [official] blog.google/products-and-platforms/products/search/new-controls-website-owners/ (06/2026) — and Google's guide now says a site "must be included in Search generative AI features in Search Console" to be eligible [official] developers.google.com/search/docs/fundamentals/ai-optimization-guide (07/2026). Note one paper found sites blocking Google-Extended were cited less even in AIO [observed] arxiv.org/abs/2604.27790 (04/2026) — don't block training bots casually.

**Recommended policy:** keep `User-agent: * Allow: /`; explicitly `Allow: /` for OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, bingbot, Googlebot, Applebot, DuckAssistBot, Amzn-SearchBot; treat GPTBot/ClaudeBot/CCBot/Google-Extended/Applebot-Extended/Amazonbot/meta-externalagent as a separate policy choice (currently allowed; leave allowed). Cloudflare's 2025 default-block only applies to Cloudflare-proxied sites; Wix does not support the Cloudflare proxy [official] support.wix.com/en/article/request-cloudflare-proxy-support.

**Wix:** AI bots are **not** blocked by default; the editor is Dashboard → SEO & GEO → Tools and settings → Robots.txt Editor, and it applies to Wix-managed headless (the live file is Wix's auto-generated one) [official] support.wix.com/en/article/blocking-ai-crawlers-from-your-site (01/2025). **Verified live 12/09/2026:** deage.eu's robots.txt says `Sitemap: https://www.deage.eu/sitemap.xml` → **404**; `/sitemap-index.xml` → 200. Wix's "AI Visibility Overview" (citation tracking in ChatGPT/Gemini/Perplexity/Claude, needs ≥50 visitors/30 days) launched 16 Jul 2025 [official] wix.com/press-room; Wix Analytics has "AI Bot Traffic" SEO reports (unverified for headless projects) [official/spec].

## 2. llms.txt

Spec: Markdown at `/llms.txt` (H1, blockquote summary, H2 link lists); `llms-full.txt` is a Mintlify convention, not spec [official] llmstxt.org. Evidence of use: Mueller (06/2025) "no AI system currently uses llms.txt"; Google's guide (07/2026): "You don't need to create… AI text files… Google Search ignores them" [official]. Ahrefs (06/2026, 137k domains): 28% publish one, **97% received zero requests**; AI retrieval bots ≈1% of the remaining hits [observed] ahrefs.com/blog. SE Ranking (2026, 300k domains): no correlation with citations [observed]. No OpenAI/Anthropic/Perplexity statement that assistants read it.
**Verdict:** not worth real effort. But Wix already auto-serves `https://www.deage.eu/llms.txt` (verified) listing only the homepage and a Wix MCP endpoint — spend ten minutes editing it to list `/collagen` and the product page (harmless, keeps Lighthouse's new unscored check green [official] Lighthouse 13.3, 05/2026).

## 3. What gets cited

**Experiments.** GEO paper (KDD 2024, 10k queries): quotations **+41%**, statistics **+33%**, citing sources **+28%**, fluency +29%, authoritative tone +12%, keyword stuffing **−9%**; gains largest for pages ranked 3–5 [observed] arxiv.org/abs/2311.09735 (11/2023). C-SEO Bench (NeurIPS 2025) tempers this: most content tricks "largely ineffective"; being in the retrieved set matters more [observed] arxiv.org/abs/2506.11097 (06/2025).

**Page features (largest 2026 datasets).**
- Position: 44.2% of cited passages sit in the **first 30%** of the page; "X is…" definitional sentences and question-framed text cited ~2×, and 78.4% of question hits were **headings** (Indig, 1.2M ChatGPT answers) [observed] searchengineland.com (02/2026).
- Format: **63% of citations go to listicles**, 71–86% of them ranked lists (Evertune, ~400M citations) [observed] searchengineland.com (05/2026).
- Length: no correlation (ρ=0.04); median cited AIO page 1,115 words; 53% <1,000 [observed] ahrefs.com (12/2025).
- Freshness: AI cites content 25.7% fresher than organic; ChatGPT median ~2.6 years [observed] ahrefs.com (07/2025); Bing: "Gen AIs value fresh content" [official] Canel, SMX 03/2025.
- Title–prompt similarity 0.60 vs 0.48; natural-language slugs 89.8% vs 81.1% citation rate [observed] ahrefs.com/blog/why-chatgpt-cites-pages (04/2026).
- Health specifically: YouTube is the top AIO health domain (4.4%); 65.6% of health citations come from sites without formal medical review; journals 0.5% [observed] seranking.com (01/2026, 465k German citations).
- Author bios/E-E-A-T, "consensus": no controlled data [spec]; engines converge on answers, not sources (AIO vs AI Mode 86% similar answers, 13.7% URL overlap) [observed] Ahrefs 12/2025.

**Schema.** Google: "no special schema.org structured data" needed [official]; Microsoft: schema "helps [our] LLMs understand your content" [official, on stage] 03/2025. Controlled test (1,885 pages): no citation lift on any engine [observed] ahrefs.com/blog/schema-ai-citations (05/2026); live-fetch tests: ChatGPT/Claude/Perplexity read visible text, not JSON-LD [observed] searchviu.com (10/2025), otterly.ai (03/2026). Keep it for Bing/rich results; don't expect lift.

**`<details>` content.** GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, PerplexityBot render **no JavaScript**; only Googlebot/Applebot do [observed] vercel.com/blog/the-rise-of-the-ai-crawler (12/2024). Google indexes all HTML "that might be visible to users at some point" [official] Mueller 04/2020. No published `<details>` test exists [spec]: server-rendered text nodes inside a closed `<details>` are ordinary HTML and should be extracted — but given the first-30%/heading findings, keep the summary, tier and headline statistic *outside* the drawer.

**Indexes.** ChatGPT now runs its own index ("Labrador": ~75% of results, only 1.5% of URLs overlap Bing top-20; stores a ~200-char snippet anchored on the H1) [observed] searchengineland.com/chatgpt-retrieval-stack (08/2026), peec.ai (09/2026) — Bing is no longer a proxy, but Copilot is Bing-grounded [official] learn.microsoft.com. Perplexity: own index [official]. Gemini/AI Mode: Google index + "query fan-out" [official] blog.google (05/2025); Google: GEO "is still SEO" [official] 07/2026. Claude: Brave Search [observed] 03/2025.

## 4. Product recommendations by agents

**ChatGPT.** Results "are not ads, nor influenced by any OpenAI partnerships"; inputs = "structured metadata from first-party and third-party providers" + web; merchants ranked on "availability, price, quality, and whether they are the maker or primary seller" [official] help.openai.com/articles/11128490. Feed: required `item_id, title, description, url, brand, seller_name, image_url, availability, price`; optional `gtin, mpn, seller_url, marketplace_seller, shipping, return_policy, review_count, star_rating, is_eligible_search, is_eligible_checkout, is_ads_eligible, target_countries`; TSV/CSV/JSONL via SFTP, refresh daily; "standard OpenAI-format upload currently targets the US" [official] developers.openai.com/commerce/specs/feed (09/2026). Feeds are for "approved partners"/merchants; Shopify/Etsy auto-integrated; **no publisher/affiliate path** [official] chatgpt.com/merchants. **Instant Checkout was retired 24 Mar 2026** ("did not offer the level of flexibility…"), ACP kept as the discovery feed layer, checkout on merchant sites or via ChatGPT Apps (Walmart) [official via] digitalcommerce360.com (03/2026). Links carry `utm_source=chatgpt.com`; no affiliate program, no publisher revenue share [observed] pressgazette.co.uk (2026). ChatGPT Ads (product-feed ads since 05/2026) reached **31 European markets incl. Bulgaria, not UK**, self-serve from 31 Aug 2026 [official] openai.com/index/chatgpt-ads-expands-across-europe (08/2026) — but ads "cannot place a brand inside the recommendation itself" [observed] Azoma (08/2026).

**Perplexity.** Merchant Program: free, feed-based, must ship to the US; PayPal "Instant Buy" (11/2025) includes Wix merchants but US users only [official] newsroom.paypal-corp.com. Comet Plus publisher pool ($42.5M, 80/20) is invite-only news brands [observed] digiday (2025/26).

**Google.** AI Mode is live in Bulgaria [official] support.google.com/websearch/answer/16011537; product cards come from the Shopping Graph, which "relies on product data in Google Merchant Center" (free listings count) [official] 05/2025. UCP checkout (announced 11 Jan 2026) is US/CA/AU, select merchants, UK "later", no EU date [official] support.google.com/merchants/answer/16837055; blog.google/…/google-shopping-cart (05/2026).

**Copilot.** Uses "information found on the web and from a merchant's feed"; checkout US/USD only, no commission [official] about.ads.microsoft.com/…/agentic-commerce (01/2026). **Amazon Rufus/Buy for Me:** US, not applicable.

**What a content site can do.** Use **Product snippet** markup (for pages "where people can't directly purchase"), with `Offer.url` → aeterna.bg, plus an editorial `Review` with pros/cons; **not** merchant-listing markup ("pages with links to other sites that sell the product" are ineligible); don't import aeterna.bg quotes as `aggregateRating` [official] developers.google.com/search/docs/appearance/structured-data/product-snippet, review-snippet. This matters because ChatGPT product citations are **41% earned media, 37% retailer, 19% UGC, 3% brand** (Azoma, Q2 2026) [observed]; retailers are only 2–6% of shopping citations across engines while review/editorial and long-tail sites dominate [observed] llmpulse.ai (07/2026). **Verified 12/09/2026: aeterna.bg runs on Wix** (`x-wix-request-id`), so Shopify's agentic storefronts don't apply; Wix's routes are the Stripe Agentic Commerce Suite (ACP → ChatGPT, "eligible merchants… automatically") [official] wix.com/blog/agentic-commerce-on-wix, PayPal Agentic Commerce Services (US-based only) [official] support.wix.com, and Google Merchant Center via Wix's Google channel (works for BG/EU today).

## 5. Clinics / local services

- Google's only named non-web input is "keep… Business Profile information up-to-date" [official] ai-features doc. Agentic booking in AI Mode covers beauty via **Booksy, Fresha, Vagaro** (US, 11/2025; expanding summer 2026) [official] blog.google/…/agentic-plans-booking (11/2025); Fresha listings surface live availability in Search [observed] fresha.com/blog (11/2025). **Fresha launched bookings inside ChatGPT and Claude on 4 Aug 2026** [official] businesswire via morningstar.com — the cheapest agentic path for EGP.
- ChatGPT licenses **Yelp** (07/2026); Yelp appears on 95.8% of ChatGPT business cards, Foursquare 0% [observed] steadydemand.com (08/2026). Perplexity: Yelp (03/2024), Tripadvisor (01/2025), OpenTable [official].
- Yelp gets 3.4× more local AI citations than any rival; AI Mode + Perplexity = 95% of local citations [observed] Foundation/AirOps 28M responses (05/2026). AIOs appear on 68% of local queries but only 15% of local-intent ones [observed] whitespark.ca. Whitespark 2026 factors: "expert curated best-of lists", a dedicated page per service, unstructured mentions, review-site authority [observed] (11/2025). 45% of consumers asked AI for a local recommendation (6% in 2025) [observed] brightlocal.com (02/2026).
- Schema: use the most specific `LocalBusiness` subtype; `MedicalClinic` is valid but has no rich result [official/spec] developers.google.com/…/local-business (09/2026). Bing Places relaunched with Copilot integration (10/2025); Apple Business feeds Siri/Maps [observed].
- Doctify/RealSelf/Treatwell/CQC/Tatler weight: **no data** [spec]. Instagram/TikTok: 0.7%/0.6% of beauty citations; YouTube and Reddit dominate social citations [observed] Tinuiti/Profound (05/2026), higoodie.com (08/2026).

## 6. Entity / brand

- Web mentions correlate with AI visibility at r≈0.66–0.71, **YouTube mentions 0.74**, backlinks 0.22 (75k brands) [observed] ahrefs.com (12/2025, 05/2026). LinkedIn cited in 11% of answers [observed] semrush.com (03/2026). Reddit licensed to Google and OpenAI [official] (2024); Reddit's ChatGPT share fell from ~60% to ~10% after Sep 2025 [observed] semrush.com (11/2025).
- Co-occurrence: 92.7% of recommended brands appeared on the cited pages; a brand keeps its recommendation 75% when present on cited pages vs 13% when absent [observed, small samples] 5wpr.com (08/2026).
- Organization schema `sameAs` etc. serve knowledge panels; nothing official ties it to LLMs [official] 11/2023. Wikidata/Crunchbase: no evidence [spec].
- Bing Webmaster Tools "AI Performance" (citations, grounding queries, Copilot) since 10 Feb 2026, recommends IndexNow [official] blogs.bing.com. GSC "Generative AI performance" (impressions/pages only, AIO+AI Mode combined) global since 31 Aug 2026 [official] blog.google (06/2026).

## 7. Measurement

- Referrers: `chatgpt.com`/`chat.openai.com` + `utm_source=chatgpt.com` [official]; `perplexity.ai`, `copilot.microsoft.com`, `gemini.google.com`, `claude.ai`; AIO/AI Mode arrive as `google.com` (only GSC separates them). GA4 added a native **"AI Assistant"** channel (05/2026; not retroactive, excludes AIO) [official] support.google.com/analytics/answer/9756891; keep a custom group regex (Swydo, 03/2026) above Referral.
- Tools (prompt-sampling share of voice): Otterly $29–489, Profound $99–399, Scrunch $300+, Rankscale $20–385, Goodie $399+, Semrush bundle $165/mo, Ahrefs Brand Radar +$199, Peec ~€89–199; free: Bing AI Performance, GSC report, SE Ranking checker, Athena tier [official pricing pages, 09/2026].
- Publisher analytics: OpenAI offers none beyond UTM; Perplexity's are invite-only [observed].
- **Wix headless logs:** no HTTP access logs — only `monitoring.captureMessage()` live streams, no history [official] dev.wix.com/…/monitor-a-headless-project; Cloudflare proxy unsupported. Bot hits (OAI-SearchBot, PerplexityBot) are only visible if Astro middleware forwards `user-agent`/`referer`/path to an external collector [spec].

## Top 10 actions for deage.eu

1. **[technical]** Fix `robots.txt` via Wix's editor: `Sitemap: https://www.deage.eu/sitemap-index.xml` (current line 404s); add explicit `Allow` blocks for the search/user-fetch bots; leave training bots allowed.
2. **[technical]** Verify deage.eu in Search Console (confirm the generative-AI inclusion toggle is on) and Bing Webmaster Tools; submit the sitemap, enable IndexNow, watch the AI Performance report.
3. **[content]** Restructure every guide for extraction: question-form H2s, a 1–2-sentence direct answer with a headline statistic and citation in the first 30% of the page, visible "Updated <date>", tier + summary kept outside `<details>`, prompt-like titles and slugs.
4. **[content]** Publish a ranked, dated "best collagen supplements 2026" comparison (table, criteria, pros/cons, evidence tiers) — listicles take 63% of citations and earned media 41% of ChatGPT product sources.
5. **[content]** Product page: Product-snippet JSON-LD (`Offer.url` → aeterna.bg, price, availability) + an editorial `Review` with pros/cons; no borrowed `aggregateRating`; visible price/availability text.
6. **[off-site]** Build brand+category co-occurrence: YouTube explainers, Reddit/LinkedIn presence, press and expert quotes that mention "Aeterna COLLAGEN MAX PRO" and "EGP Aesthetics" alongside the category.
7. **[partner-needed]** Aeterna: open Google Merchant Center (BG/EU free listings) via Wix's Google channel; check the Wix dashboard for the Stripe/PayPal agentic-commerce toggles; consider a USD/US-shipping offer (the gate for ChatGPT, Perplexity and Copilot feeds); ChatGPT product-feed ads are open in Bulgaria.
8. **[partner-needed]** EGP: complete Google Business Profile and reviews, list on Fresha with online booking (Google AI Mode, ChatGPT, Claude), Yelp UK, Bing Places, Apple Business; `MedicalClinic` schema with `sameAs`; pitch for "best clinics in London" lists.
9. **[technical]** Measurement: GA4 AI-assistant channel + custom regex; Astro middleware logging UA/referer to an external collector for bot visibility; monthly manual prompt checks before paying for a tracker.
10. **[technical]** Ten-minute wins: edit Wix's auto `llms.txt` to list the guides; add Organization `sameAs` (LinkedIn, YouTube, Wikidata if it exists). Low expected impact — do last.

**Not verified at source:** OpenAI help-centre/merchant form pages (403 — quoted via secondary), Perplexity merchant page (403), affiliate-parameter preservation on any engine, and whether Wix's AI-bot analytics populate for headless projects.
