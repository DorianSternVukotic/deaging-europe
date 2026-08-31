import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import wix from '@wix/astro';
import wixPages from '@wix/astro-pages';
import wixHostingAdapter from '@wix/astro-wix-hosting-adapter';

// Production canonical origin (Wix-managed headless site on the custom domain).
// Override with SITE_URL for previews. Drives canonical/hreflang/sitemap.
const site = process.env.SITE_URL ?? 'https://www.deage.eu';
const isBuild = process.env.NODE_ENV === 'production';

// Mirrors src/i18n/ui.ts (config files can't import project TS).
const DEFAULT_LOCALE = 'en';
const LOCALES = ['en', 'bg', 'de', 'fr', 'it', 'es'];
const localePath = (locale, path = '') =>
  locale === DEFAULT_LOCALE ? `/${path}` : `/${locale}${path ? `/${path}` : ''}`;

// Pages are rendered on demand (see `output` below), so @astrojs/sitemap only
// discovers the fixed routes (/, /collagen). Enumerate the dynamic ones —
// localized homepages and every product page — from the content directory.
function dynamicPages() {
  const urls = LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((l) => new URL(localePath(l), site).href);
  const root = 'src/content/products';
  for (const dir of readdirSync(root, { withFileTypes: true }).filter((d) => d.isDirectory())) {
    for (const file of readdirSync(join(root, dir.name)).filter((f) => f.endsWith('.md'))) {
      const fm = readFileSync(join(root, dir.name, file), 'utf8');
      const slug = fm.match(/^slug:\s*['"]?([^'"\n]+?)['"]?\s*$/m)?.[1] ?? file.replace(/\.md$/, '');
      const locale = fm.match(/^locale:\s*['"]?([a-z]{2})['"]?\s*$/m)?.[1] ?? dir.name;
      urls.push(new URL(localePath(locale, `products/${slug}`), site).href);
    }
  }
  return urls;
}

export default defineConfig({
  site,
  trailingSlash: 'never',
  // The collagen guide is /collagen (formerly /collagen-5; earlier drafts removed).
  redirects: { '/collagen-5': '/collagen' },

  // Hosting: Wix-managed headless (`wix release`). Wix's static file host serves
  // exact paths only — no directory-index or extensionless resolution — so a
  // fully static build can't serve /collagen or /bg. Instead the Wix worker
  // renders every route on demand; pages resolve content from Astro.params at
  // request time. Nothing in the site calls the Wix SDK — the integration is
  // purely the hosting contract (auth middleware, page manifest, adapter).
  output: 'server',
  // Production builds only: the adapter bundles Cloudflare's `workerd` for local
  // dev, which needs a newer glibc than some dev machines have. `astro dev` /
  // `wix dev` run plain Node SSR without it (same pattern as the EGP repo).
  ...(isBuild && { adapter: wixHostingAdapter() }),
  security: { checkOrigin: false },
  image: { domains: ['static.wixstatic.com'] },

  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      customPages: dynamicPages(),
      filter: (page) => !/\/404$/.test(page),
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: {
          en: 'en-US',
          bg: 'bg-BG',
          de: 'de-DE',
          fr: 'fr-FR',
          it: 'it-IT',
          es: 'es-ES',
        },
      },
    }),
    react(),
    wix(),
    wixPages(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
