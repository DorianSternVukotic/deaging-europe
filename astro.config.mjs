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

// The site is English-only (locales were removed 2026-09-03); src/i18n keeps
// the `t()`/`localePath()` plumbing so a locale can be added back later.

// Pages are rendered on demand (see `output` below), so @astrojs/sitemap only
// discovers the fixed routes (/, /collagen, /contact, the guides). Enumerate
// the dynamic ones, every product page, from the content directory.
function dynamicPages() {
  const urls = [];
  const root = 'src/content/products';
  for (const dir of readdirSync(root, { withFileTypes: true }).filter((d) => d.isDirectory())) {
    for (const file of readdirSync(join(root, dir.name)).filter((f) => f.endsWith('.md'))) {
      const fm = readFileSync(join(root, dir.name, file), 'utf8');
      const slug = fm.match(/^slug:\s*['"]?([^'"\n]+?)['"]?\s*$/m)?.[1] ?? file.replace(/\.md$/, '');
      urls.push(new URL(`/products/${slug}`, site).href);
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
  // fully static build can't serve /collagen. Instead the Wix worker
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

  integrations: [
    sitemap({
      customPages: dynamicPages(),
      filter: (page) => !/\/404$/.test(page),
    }),
    react(),
    wix(),
    wixPages(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
