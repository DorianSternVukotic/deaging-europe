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

Set the canonical site URL before building. It's used for canonical tags, hreflang links, sitemap, and robots.txt:

```bash
export SITE_URL="https://deagingeurope.com"
npm run build
```

If `SITE_URL` is unset, the build falls back to `https://deagingeurope.example` (placeholder — do not deploy with this).

After picking a real domain, also update the `Sitemap:` line in `public/robots.txt`.

## Deployment

The build output (`dist/`) is plain static HTML/CSS/JS. Any static host works.

### Vercel (recommended — fastest path)

1. Push the repo to GitHub.
2. Import it at <https://vercel.com/new>. Vercel auto-detects Astro (build: `npm run build`, output: `dist`).
3. Project → Settings → Environment Variables → add `SITE_URL=https://your-domain.com`.
4. Project → Domains → add your domain and follow the DNS instructions.
5. Redeploy after adding `SITE_URL` so the sitemap and canonical tags pick it up.

### Netlify

1. Push to GitHub, then "Add new site → Import from Git" at <https://app.netlify.com>.
2. Build command: `npm run build`. Publish directory: `dist`.
3. Site settings → Environment variables → add `SITE_URL`.
4. Add custom domain under Domain management.

Or via CLI:

```bash
npm install -g netlify-cli
SITE_URL=https://your-domain.com npm run build
netlify deploy --prod --dir=dist
```

### Cloudflare Pages

Good fit for European audiences (edge in EU regions, free tier covers this site).

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Build command: `npm run build`. Output directory: `dist`.
3. Environment variables → add `SITE_URL`.
4. Custom domains → add and complete DNS.

### GitHub Pages

Add `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
        env:
          SITE_URL: https://YOUR-USER.github.io/deagingeurope
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages, url: ${{ steps.deployment.outputs.page_url }} }
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

Then enable Pages: repo Settings → Pages → Source: GitHub Actions.

If serving from a project subpath (not a custom domain), also set `base: '/deagingeurope'` in `astro.config.mjs`.

### Any static host (S3/CloudFront, nginx, Caddy)

```bash
SITE_URL=https://your-domain.com npm run build
rsync -av --delete dist/ user@server:/var/www/deagingeurope/
```

For nginx, ensure pretty URLs work:

```nginx
location / {
  try_files $uri $uri/index.html =404;
}
```

## Post-deploy checklist

- [ ] `SITE_URL` is set to the real domain in production env
- [ ] `public/robots.txt` `Sitemap:` line updated to the real domain
- [ ] Submit `https://your-domain.com/sitemap-index.xml` to Google Search Console + Bing Webmaster Tools
- [ ] Verify hreflang in Search Console → International Targeting
- [ ] Replace affiliate URLs in `src/content/products/*/*.md` (`buyUrl` field) with real tracking links
- [ ] Replace placeholder Unsplash images with self-hosted assets in `public/`
- [ ] Add `public/og-default.png` (1200×630) for default social previews
- [ ] Add a real `public/favicon.svg`
