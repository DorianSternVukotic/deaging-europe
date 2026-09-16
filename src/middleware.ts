/**
 * Project middleware — one job: keep the SEO head single-sourced.
 *
 * Wix-managed hosting adds `@wix/astro`'s html-embeds middleware (registered
 * with `order: 'post'`, i.e. innermost). On every HTML response it fetches the
 * site's "site scripts" from Wix and injects them before `</head>`: the cookie
 * consent and BI bundles, plus the dashboard-derived SEO tags — a second
 * `<title>`, a second canonical, og:title/og:url/og:site_name/og:type,
 * twitter:card/twitter:title and a stub WebSite JSON-LD — each marked
 * `wix-seo-tag="true"`. Those contradict ours (og:type "website" on articles,
 * "Collagen | deage.eu" titles) and there is no opt-out in the integration or
 * the dashboard.
 *
 * Because this middleware is the outer layer, `next()` returns the response
 * *after* Wix's injection, so we can drop every `wix-seo-tag` element and
 * leave everything else Wix injected untouched. SEO.astro stays the single
 * source of truth; the dashboard's per-page SEO settings therefore have no
 * effect on the head. Verified on a preview deployment on 2026-09-12.
 */
import { defineMiddleware } from 'astro:middleware';

const WIX_SEO_TAG = /<(?:title|link|meta)\b[^>]*\bwix-seo-tag="true"[^>]*>(?:[^<]*<\/title>)?\s*/g;
const WIX_SEO_SCRIPT = /<script\b[^>]*\bwix-seo-tag="true"[^>]*>[\s\S]*?<\/script>\s*/g;

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const type = response.headers.get('content-type') ?? '';
  if (!type.startsWith('text/html') || context.url.pathname.startsWith('/_wix')) return response;

  const html = await response.text();
  if (!html.includes('wix-seo-tag')) return new Response(html, response);

  const cleaned = html.replace(WIX_SEO_SCRIPT, '').replace(WIX_SEO_TAG, '');
  const headers = new Headers(response.headers);
  headers.delete('content-length'); // the body changed length; let the runtime recompute
  return new Response(cleaned, { status: response.status, statusText: response.statusText, headers });
});
