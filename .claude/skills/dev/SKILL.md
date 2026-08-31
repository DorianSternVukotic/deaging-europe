---
name: dev
description: Run, verify and screenshot this Astro site (DeAging Europe). Use when asked to run/start the dev server, check a page in the browser, screenshot a change, or verify the build.
---

# Dev server & visual checks for this repo

## Start the dev server

- Use port **4322** — `:4321` is usually taken by the sibling EGPLondon repo (`../deagingeuropeegp`), which is a different project.
- Requires `.env.local` (run `npx wix env pull` once; needs `npx wix login`) — `@wix/astro` throws `WIX_CLIENT_ID not found` without it.
- Start in the background and wait for it (`npm run dev` = `astro dev`; the Wix hosting adapter is only attached in production builds, and `wix dev` tends to exit after startup for collaborator accounts):

```bash
nohup npx astro dev --port 4322 > "$SCRATCHPAD/astro-dev.log" 2>&1 &
for i in $(seq 1 30); do sleep 1; curl -s -o /dev/null http://127.0.0.1:4322/ && break; done
```

- If 4322 is busy Astro silently moves to 4323 — read the log for the actual `Local` URL. Before trusting an already-running server, confirm it's this repo: `readlink /proc/<pid>/cwd`.
- Stop it by killing the *child* node process too — `ss -ltnp | grep :4322` lists the pid that actually holds the port.

## Verify

- Build check: `npm run build` (= `wix build`, ≈10 s; SSR bundle in `dist/` with `_worker.js`). Run it after deleting pages or touching shared components. `npx astro check` for types.
- Deploy: `npm run release` publishes `dist/` to https://www.deage.eu (seconds). Verify live with `curl -s -o /dev/null -w "%{http_code}" https://www.deage.eu/<path>`.
- Route check: `curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:4322/<path>`.

## Screenshot

Use the global `playwright-cli` skill; the site has `scroll-behavior: smooth`, so scroll with `behavior:'instant'` before capturing:

```bash
playwright-cli open http://127.0.0.1:4322/<path>
playwright-cli resize 1440 900            # or 390 844 for mobile
playwright-cli eval "document.getElementById('<id>').scrollIntoView({behavior:'instant'})"
playwright-cli screenshot --filename=<name>.png
playwright-cli close
```

Read the PNG before sending it to the user — check layout, not just that the file exists.

## Key routes

- `/` home · `/collagen` the collagen guide (`/collagen-5` redirects to it) · `/products/collagen-max-pro` · `/{bg,de,fr,it,es}` localized homepages (+ `/bg/products/*`) · `/404` (any unknown slug/locale renders it with a 404 status). `/jowls` and `/problems/*` were removed 2026-08-20.
