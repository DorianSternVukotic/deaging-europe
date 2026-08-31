---
name: new-guide-page
description: Build a new evidence guide page for DeAging Europe — a supplement/ingredient guide like /collagen or a problem guide like /jowls. Use when asked to add/create a new guide, topic page, supplement guide, problem page, "another page like collagen/jowls", or to turn a concern/ingredient into a full evidence-graded page.
---

# New guide page (supplement or problem template)

Two hand-built guides define the house style: `src/pages/collagen.astro` + `src/data/collagen.ts`
(supplement template) and `src/pages/jowls.astro` + `src/data/jowls.ts` (problem template).
A new guide = **one data module + one page** that copies the nearest sibling and swaps the content.
Read the sibling pair in full before starting; don't redesign the skeleton.

## 1. Pick the template

> **State of the tree (2026-08-20):** only the **supplement template** (`/collagen`, `src/data/collagen.ts`) exists. The problem-template guide (`/jowls`, `src/data/jowls.ts`), the `problems` content collection and its renderers were deliberately removed — the site is being rebuilt outward from the collagen page. The problem-template conventions below are kept as the spec for the *next* problem guide; the reference implementation is in git history: `git log --diff-filter=D --oneline -- src/pages/jowls.astro` then `git show <sha>^:src/pages/jowls.astro` (and `:src/data/jowls.ts`). Don't resurrect the `problems` collection unless asked.

| | Supplement (`/collagen`) | Problem (`/jowls`) |
|---|---|---|
| Subject | one ingredient/intervention, many benefits & ways to get it | one concern, many causes & treatments |
| Section tag | `focus: FocusArea` (skin, joints, bones…) → `focusLabels` | `cause: Cause` (loose-skin, volume-loss…) → `causeLabels` |
| Evidence-chart groups | `benefits`, `boost-diet`, `boost-topical`, `boost-clinical` | `nonsurgical`, `surgical` |
| Drawer (info) groups | `basics`, `loss` (top) · `safety`, `faq` (tail) | `basics`, `causes`, `prevent` (top) · `home`, `faq` (tail) |
| Interactive widget | "Build your routine" (`#routine-builder`, inline JS) | "Match a treatment to your cause" (`#matcher`, `<details>` per cause) |
| Comparison cards | topicals with `note: 'Top pick: …'` → `#compare-topical` | at-home rows with `note: 'Best for: …'` → `#compare-home` |

Not a guide: a short concern with 3–6 ranked solutions belongs in the content collection
(`src/content/problems/<locale>/<slug>.md`, rendered by `src/pages/problems/[slug].astro`, localized,
card on the homepage grid). Use the hand-built template when the topic needs 20+ sections, evidence bars,
drawers and an interactive block — i.e. a flagship, English-only long-read.

## 2. Data module contract — `src/data/<topic>.ts`

Single source of truth; the page only arranges it. Mirror `jowls.ts` (the cleaner of the two). Shape:

```ts
export type Evidence = 'strong' | 'moderate' | 'emerging' | 'limited';
export type SectionCategory = 'concept' | 'cause' | 'prevent' | /* chart cats */ | 'home' | 'safety' | 'faq';
export interface Section {
  id: string;            // kebab-case, globally unique, used as the DOM id + #anchor (e.g. 'tx-ultrasound')
  category: SectionCategory;
  title: string;         // sentence case, the row/drawer heading
  tldr: string;          // ONE plain sentence; shown collapsed, truncated on desktop rows
  evidence?: Evidence;   // REQUIRED for every row in a chart group; omit for concept/cause/prevent/faq
  focus?: FocusArea;     // supplement template — or `cause?: Cause` in the problem template
  bodyHtml: string;      // plain HTML in a template literal; rendered with set:html
  note?: string;         // italic line under the tldr; 'Best for: …' / 'Top pick: …' drive comparison cards
  sessions?: string; downtime?: string; cost?: string; // treatments only → 3-cell <dl> in the expanded row
}
export interface SectionGroup { id: string; title: string; intro: string; sections: Section[] }
export const keyTakeaways: string[];   // exactly 5 lines — "If you read nothing else"
export const groups: SectionGroup[];   // page order; ids are referenced by the page's Set()s
export const allSections = () => groups.flatMap((g) => g.sections);
```

Rules:
- **Evidence tiers** — `strong`: multiple RCTs/meta-analyses; `moderate`: consistent trials, smaller or
  industry-funded; `emerging`: early/mechanistic or few small trials; `limited`: anecdote, marketing, or
  negative evidence. Be honest downward — the tier is the page's primary visual.
- `bodyHtml`: `<p>`, `<strong>`, `<em>`, `<ul>/<ol>`, `<h4>` only (styled by `.prose-anti`). Cite inline:
  `<a href="…" rel="noopener nofollow" target="_blank">2023 review of 26 studies</a>`. End a rosy section with
  `<p class="text-ink/60 text-sm italic">Caveat: …</p>` when trials are industry-funded.
- `note` conventions (the page regex-strips the prefix): treatments `'Best for: mild laxity, …'`;
  product/device rows `'Top pick: Brand Product (why)'` or `'Top device: …'` (singular — see §7).
- Group ids are contracts with the page: every `new Set([...])` / `groups.find((g) => g.id === '…')!`
  in the page must name a real group.
- Shared evidence vocabulary lives in `src/data/evidence.ts`: the `Evidence` type, `EVIDENCE_TIERS`, `evidenceLabels`, `evidenceColor`, and the generic `countByTier(sections)` / `readingMinutesFor(sections)`. A guide's data module re-exports the type (`export type { Evidence }`) and wraps the helpers for its own sections (`evidenceCounts()`, `readingMinutes()` in `collagen.ts`) so the page and the homepage can import from one place; `jowls.astro` calls `readingMinutesFor(allSections())` directly. Never redeclare the `Evidence` type or the colour map.

## 3. Page skeleton — `src/pages/<topic>.astro` (copy the sibling, then edit top to bottom)

Frontmatter: imports (`BaseLayout`, `MediaPlaceholder`, `ExpandableDrawer`, `EvidenceRow`, `DEFAULT_LOCALE`,
the data module), `title`/`description`, then the **override maps** — keep them tiny, the data should be right:
- `evidenceRank` + `orderedSections(g)` — chart groups sort by tier; info groups keep source order
  (collagen adds `groupOrder: Record<groupId, sectionId[]>` to hand-order inside a group).
- `groupTitle` / `groupIntro` (`''` hides the intro) — per-page heading overrides, collagen only.
- `drawerShort` — punchier always-visible line for a top drawer (`shortFor(s) = drawerShort[s.id] ?? s.tldr`).
- `faqAnswer: Record<sectionId, string>` — bottom-line answer ("Yes", "8–12 weeks") shown in the collapsed FAQ drawer.
- `topInfoIds` / chart ids / tail ids (`Set`s) and `partNo(g)` for the continuous "Part 0X" numbering.
- Comparison rows: `topicalRows` (collagen: `boost-topical` sections whose note starts with Top…) or
  `homeRows` (jowls: explicit `homeCardIds` list from the `home` group).

Body, in order (all inside `<article class="bg-bone">`; section `id`s are the anchor contract):
1. **Hero** `<header>` — eyebrow (problem template only: `Problem · Jowls`), `<h1 class="font-display …">Topic, end&#8209;to&#8209;end<span class="text-rose">.</span></h1>`, one-sentence sub, meta line `Updated … · ~{readingMinutes} min full read · {allSections().length} sections`, `<MediaPlaceholder kind="image" ratio="4/5" label="…" tone="rose" class="w-full lg:w-72" />`.
2. **`#takeaways`** — eyebrow "The case in five lines", `<h2>If you read nothing else</h2>`, `<ol>` of `keyTakeaways` with rose `font-display` numerals; then `<MediaPlaceholder kind="video" ratio="16/9" label="… · 2 min" tone="sage" />`.
3. **Top info groups** (still on bone) — per group `<section id={g.id}>` h2 + intro + `<ExpandableDrawer id={s.id} title={s.title} short={shortFor(s)} bodyHtml={s.bodyHtml} />`.
4. **White slab** `<section class="bg-white border-y border-ink/5">` — eyebrow "The full breakdown", `<h2>Topic — what the evidence says</h2>`, then `<div id="guide-body">` with one `<section id={g.id} class="group-section …" data-group={g.id}>` per chart group: `Part 0X` eyebrow, h2, intro, optional featured `MediaPlaceholder` pair for the hero group, and
   ```astro
   <div class="card-grid mt-8 divide-y divide-ink/[0.07] border-y border-ink/[0.07]">
     {orderedSections(g).map((s) => (
       <EvidenceRow s={s} variant="bar" tag={s.focus && s.focus !== 'general' ? focusLabels[s.focus] : undefined}
                    mediaTone={g.id === 'boost-clinical' ? 'rose' : 'gold'} />
     ))}
   </div>
   ```
   `EvidenceRow` props: `s` (structural — any object with id/title/tldr/bodyHtml[/evidence/note/sessions/downtime/cost]), `variant="bar"` (house choice; `"pips"` exists), `tag` pre-resolved label, `mediaTone` adds a 4/5 placeholder in the expanded body. Rows without `evidence` render an "info" pill — only use that deliberately.
5. **`#picks` "Our picks"** — rendered right after the *last* chart group (`g.id === 'boost-clinical'` / `'surgical'`): 4 inline `{id, kind, title, blurb, tone}` cards linking to `#<section id>`; ids must exist. One daily-care, one supplement/topical, two treatments is the pattern.
6. **Tail (back on bone)** — tail info groups as drawers with `short={faqAnswer[s.id] ?? s.tldr}`.
7. **Interactive block** — `bg-gradient-to-br from-rose/10 via-bone to-sage/5 rounded-2xl` card, eyebrow "Interactive": routine builder (supplement) or cause matcher (problem). Keep it one widget; JS lives in the page's `<script is:inline>`.
8. **Comparison cards** `#compare-topical` / `#compare-home` — white card, 3-col grid of `<a href="#id">` with the `evidencePillClass` pill, title, tldr, and the stripped note line.
9. **`#references`** white card + the italic "Educational content, not medical advice" line.
10. **Sticky clinician CTA** — `bg-ink text-bone` pill, md+ only, `href="#"` placeholder until a booking URL exists.
11. `<style>` (drawer marker reset, `.card[open]`, `.prose-anti` rules, `scroll-margin-top` calc) and `<script is:inline>` (chrome measurement, open `<details>` on hash, widget logic) — copy verbatim.

## 4. Wiring

- `<BaseLayout title={title} description={description} locale={locale} path="<topic>" type="article">` — `path` has no leading slash; it feeds canonical/hreflang and the language switcher.
- Route = filename: `src/pages/<topic>.astro` → `/<topic>`. Sitemap is automatic (`@astrojs/sitemap`).
- Nav: add/adjust the link in `src/components/Header.astro` (guides are hard-coded hrefs, not `localePath`).
- Homepage: the hero CTA row and the flagship card live in `src/pages/index.astro`; the card reads `evidenceCounts()`/`readingMinutes()` from the data module — point it at the new module if the new guide becomes the flagship, otherwise add a secondary CTA only.
- i18n: guides are **English-only** (`const locale = DEFAULT_LOCALE`); do not add `[lang]` variants. Localized pages (`src/pages/[lang]/…`) never link to guides.
- Brand tokens (`src/styles/global.css`): `bone` bg, `ink` text, `rose` accent, `sage` eyebrows, `gold` secondary; `font-display` Cormorant Garamond for h1–h4, Inter body. Evidence colours are the saturated `evidenceColor` map, not the brand tones.

## 5. Editorial rules (see memory: deaging-europe-business)

Authoritative *and* converting: every section states the evidence tier first, then what to do. Sort chart rows by tier, never by price or affiliate. Frame maintenance as biology, never as upselling. High-end, mostly-female, evidence-minded audience — name real products/brands in picks, no "award-winning"/"100%" fluff. 5 takeaways, 1 video slot, 4 picks, 1 interactive block: match the siblings' density. Placeholder media via `MediaPlaceholder` only — never hotlink stock images on guides.

## 6. Verify

1. `npx astro check` (0 errors) and `npx astro build` (page count +1, no orphaned `#anchor` warnings — grep your pick ids and `homeCardIds` against the data module).
2. Run via the `dev` skill (`npx astro dev --port 4322`), open `/<topic>`: every drawer/row expands, hash links open the target `<details>`, widget works, picks scroll to existing rows.
3. Screenshot desktop 1440×900 and mobile 390×844 (hero, a chart group, the widget, comparison cards) and *look* at them.
4. Update `src/pages/index.astro` / `Header.astro` links and rerun the build.

## 7. Known rough edges (don't copy them)

- `src/pages/collagen.astro` topical table strips `/^Top (pick|device):\s*/i` — `'Top picks: …'` (plural, `topical-niacinamide`) is **not** stripped and renders "Top pick: Top picks: …". Use the singular prefix.
- Shared evidence helpers + colours sit in `collagen.ts` and `EvidenceRow` imports from there, so every guide depends on collagen's module; `jowls.astro` still computes reading time locally. A neutral `src/data/evidence.ts` would be the right home — do that refactor only if asked.
- `Evidence` is re-declared in each data module and in `EvidenceRow` (structural match); keep the four literals identical.
- `heroFacts` in `collagen.ts` is exported but not rendered anywhere (optional content; don't treat it as required).
- "Updated <date>" in each hero is hand-typed; the clinician CTA `href="#"` is a placeholder.
- Content-collection `problems` only allow `strong|moderate|emerging` — no `limited` tier there.
