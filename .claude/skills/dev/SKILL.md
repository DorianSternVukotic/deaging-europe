---
name: dev
description: Run, verify and screenshot this Astro site (DeAging Europe). Use when asked to run/start the dev server, check a page in the browser, screenshot a change, or verify the build.
---

# Dev server & visual checks for this repo

## Start the dev server

- Use port **4322** — `:4321` is usually taken by the sibling EGPLondon repo (`../deagingeuropeegp`), which is a different project.
- Start in the background and wait for it:

```bash
nohup npx astro dev --port 4322 > "$SCRATCHPAD/astro-dev.log" 2>&1 &
for i in $(seq 1 30); do sleep 1; curl -s -o /dev/null http://127.0.0.1:4322/ && break; done
```

- Before trusting an already-running server, confirm it's this repo: `readlink /proc/<pid>/cwd`.
- Stop it by killing the *child* node process too — `ss -ltnp | grep :4322` lists the pid that actually holds the port.

## Verify

- Build check: `npx astro build` (≈2 s, ~30 pages). Run it after deleting pages or touching shared components.
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

- `/` home · `/collagen` the collagen guide (`/collagen-5` redirects to it) · `/products/collagen-max-pro` · `/{bg,de,fr,it,es}` localized homepages (+ `/bg/products/*`). `/jowls` and `/problems/*` were removed 2026-08-20.
