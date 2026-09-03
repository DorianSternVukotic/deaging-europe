/**
 * Laser & IPL guide — single source of truth.
 *
 * Consumed by /laser-ipl. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Price bands are indicative private-clinic rates (UK/EU 2025–26) — treatment
 * value should be judged on the evidence tiers, not the price column.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'wrinkles' | 'pigment' | 'redness' | 'texture' | 'dark-skin' | 'home' | 'general';

export type SectionCategory = 'concept' | 'context' | 'resurfacing' | 'light' | 'safety' | 'faq';

export interface Section {
  id: string;
  category: SectionCategory;
  title: string;
  tldr: string;
  evidence?: Evidence;
  focus?: FocusArea;
  bodyHtml: string;
  note?: string;
  sessions?: string;
  downtime?: string;
  cost?: string;
}

export interface SectionGroup {
  id: string;
  title: string;
  intro: string;
  sections: Section[];
}

export const keyTakeaways: string[] = [
  'Only ablative resurfacing (CO₂/erbium, full-field or fractional) has strong evidence for meaningful wrinkle removal that lasts years — at the price of real downtime and real risk.',
  'IPL is a colour treatment: excellent for sun spots, redness, and mottled tone; the best randomized trial found no effect on wrinkles, whatever "photorejuvenation" marketing implies.',
  'Every technology has a downtime-for-results exchange rate — from IPL (hours) through Fraxel-class lasers (days) to full resurfacing (weeks). Decide your downtime budget first.',
  'Skin tone changes the map: melanin-targeted devices (IPL, KTP) burn dark skin, while 1064 nm and non-ablative fractional lasers treat Fitzpatrick IV–VI safely with conservative settings.',
  'Melasma is the trap: lasers can lighten it temporarily, recurrence is the rule, and aggressive "laser toning" has caused permanent confetti-white spots. Sunscreen and topicals stay the backbone.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'how-lasers-work',
    category: 'concept',
    title: 'How lasers and IPL actually work',
    tldr: 'Each wavelength targets one absorber — water, melanin, or blood — heating that target while sparing the rest.',
    bodyHtml: `
      <p>Every device in this guide is a variation on one idea — <em>selective photothermolysis</em>: pick a wavelength and pulse duration absorbed preferentially by one chromophore, so that target heats and is destroyed while surrounding tissue survives. Water is the target for resurfacing lasers (they heat skin itself), melanin for pigment lasers, haemoglobin for vascular lasers. IPL is not a laser at all — a filtered flash-lamp hitting melanin and haemoglobin at once, which is why it treats "colour".</p>
      <p>The second big idea, <a href="https://pubmed.ncbi.nlm.nih.gov/15216537/" rel="noopener nofollow" target="_blank">fractional delivery (2004)</a>, treats only microscopic columns of skin and leaves bridges of intact tissue between them — turning brutal resurfacing into something that heals in days. Most modern "laser facials" are fractional variants at different depths and aggressiveness.</p>
    `,
  },
  {
    id: 'the-ladder',
    category: 'concept',
    title: 'The downtime ladder — deciding how much result you\'re buying',
    tldr: 'Hours (IPL) → days (Fraxel-class) → a week (fractional ablative) → weeks (full resurfacing). Results scale with downtime.',
    bodyHtml: `
      <p>Reading laser menus becomes simple once you see the exchange rate:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Hours of redness:</strong> IPL, vascular lasers, "laser genesis" — colour and glow, no change to established wrinkles.</li>
        <li><strong>1–3 days + a week of flaking:</strong> non-ablative fractional (Fraxel-class) — texture, fine lines, pigment, over 3–6 sessions.</li>
        <li><strong>About a week raw:</strong> fractional ablative CO₂/erbium — significant wrinkle and scar remodelling in 1–3 sessions.</li>
        <li><strong>Two weeks of wound care, months of pink:</strong> full-field ablative — the deepest result available without surgery, lasting years.</li>
      </ul>
      <p>There is no cheat code: every "ablative results with no downtime" claim is selling the middle of the ladder with the top's vocabulary. Decide your downtime budget first, then pick the strongest tool inside it.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'darker-skin',
    category: 'context',
    title: 'Darker skin: the safety map',
    tldr: 'Safe with the right tools (1064 nm, non-ablative fractional, conservative settings); risky-to-contraindicated with IPL/KTP and full ablation.',
    bodyHtml: `
      <p>Melanin-targeted platforms cannot tell tan or constitutive pigment from the lesion they're aimed at — which is why <strong>IPL and 532 nm KTP are generally avoided in Fitzpatrick V–VI</strong> and used cautiously in IV, and why full-field ablative resurfacing (with its ~8% permanent light-spot risk even in fair skin) is off the menu for most darker phototypes.</p>
      <p>The safe lane is real, though: <strong>non-ablative fractional lasers</strong> (1550/1927 nm) produced post-inflammatory hyperpigmentation after only <a href="https://pubmed.ncbi.nlm.nih.gov/23652890/" rel="noopener nofollow" target="_blank">4% of sessions in Fitzpatrick IV–VI</a> — all resolving — with conservative settings and hydroquinone priming, and long-pulsed/picosecond <strong>1064 nm</strong> is the classic dark-skin-safe wavelength. Ask any clinic: "how many patients of my skin type have you treated, and on what settings?" — then ask for a test spot.</p>
    `,
  },
  {
    id: 'prep-aftercare',
    category: 'context',
    title: 'Prep, aftercare & the rules that changed',
    tldr: 'No tan, antivirals for resurfacing, SPF religiously after — and the old 6-month isotretinoin rule is gone for most treatments.',
    bodyHtml: `
      <p><strong>The no-tan rule:</strong> melanin-targeted devices treat only untanned skin — four-plus weeks from real sun or self-tanner, with strict SPF before and after everything.</p>
      <p><strong>Cold-sore cover:</strong> facial resurfacing reactivates herpes in ~7–9% <em>without</em> prophylaxis; antiviral tablets from the day before <a href="https://pubmed.ncbi.nlm.nih.gov/11966791/" rel="noopener nofollow" target="_blank">reduced reactivation to zero</a> in a controlled study. Routine for ablative work; sensible for anyone with a cold-sore history before fractional treatments.</p>
      <p><strong>Isotretinoin:</strong> the old "wait 6 months" rule is obsolete — the <a href="https://pubmed.ncbi.nlm.nih.gov/28498204/" rel="noopener nofollow" target="_blank">ASDS consensus</a> found insufficient evidence to delay vascular lasers, non-ablative and fractional treatments during or shortly after treatment. The wait survives only for full-face fully ablative resurfacing.</p>
      <p><strong>Who fires the laser:</strong> regulation is patchy — parts of the EU restrict Class 4 lasers to physicians; England is only now building a licensing scheme. Practical rule: ablative resurfacing with a dermatologist or equivalent physician; for IPL/vascular/pigment work insist on medical supervision, a named complication pathway, and device transparency.</p>
    `,
  },
];

const resurfacing: Section[] = [
  {
    id: 'laser-full-ablative',
    category: 'resurfacing',
    title: 'Full-field ablative resurfacing (CO₂ / Er:YAG)',
    tldr: 'The deepest wrinkle result available without surgery, lasting years — bought with weeks of recovery and an ~8% light-spot risk.',
    evidence: 'strong',
    focus: 'wrinkles',
    sessions: '1',
    downtime: '2 wks + months pink',
    cost: '€2,500–5,000+',
    bodyHtml: `
      <p>The heavy artillery: the entire outer skin layer is vaporised and the dermis heated, triggering massive collagen remodelling. Three decades of controlled series and a <a href="https://pubmed.ncbi.nlm.nih.gov/28166434/" rel="noopener nofollow" target="_blank">systematic review of split-face trials</a> agree it delivers the largest, most durable wrinkle improvement of any device — with long-term follow-up showing improvement <a href="https://www.sciencedirect.com/science/article/abs/pii/S0190962299704895" rel="noopener nofollow" target="_blank">persisting for years</a>. CO₂ resurfaces deeper; erbium heals faster with less tightening.</p>
      <p>The price is written in the risk column: 1–2 weeks of open wound care, erythema for up to months, and <a href="https://pubmed.ncbi.nlm.nih.gov/9950552/" rel="noopener nofollow" target="_blank">delayed permanent hypopigmentation in ~8%</a> of a large series. For deep perioral lines and severe photoaging in fair skin, nothing non-surgical matches it; for everyone else, the fractional versions below exist precisely to avoid this trade.</p>
    `,
  },
  {
    id: 'laser-fractional-ablative',
    category: 'resurfacing',
    title: 'Fractional ablative (CO₂ / Er:YAG)',
    tldr: 'The workhorse for real wrinkle and scar remodelling — most of full-field\'s effect at a fraction of its downtime.',
    evidence: 'strong',
    focus: 'wrinkles',
    sessions: '1–3',
    downtime: '~5–7 days',
    cost: '€600–2,000/session',
    bodyHtml: `
      <p>The same ablative wavelengths delivered as microcolumns covering 5–40% of the surface, healing from the intact bridges between. Reviews position it as the <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3839025/" rel="noopener nofollow" target="_blank">better efficacy-to-risk ratio</a> for fine-to-moderate photoaging — and it extends to neck, chest, and hands, where full-field is unsafe. It doesn't quite match full-field on the deepest lines, and results build over 3–6 months as collagen matures.</p>
      <p>In darker skin it's possible with conservative density and priming, but carries meaningfully more pigmentation risk than the non-ablative class.</p>
    `,
  },
  {
    id: 'laser-nafl',
    category: 'resurfacing',
    title: 'Non-ablative fractional (Fraxel-class, 1550/1927 nm)',
    tldr: 'Texture, fine lines, and pigment over 3–6 sessions with days of downtime — and the preferred fractional class for darker skin.',
    evidence: 'moderate',
    focus: 'texture',
    sessions: '3–6',
    downtime: '1–3 days + flaking',
    cost: '€500–1,000/session',
    bodyHtml: `
      <p>Heat without vaporisation: microcolumns of coagulated tissue under an intact surface. The 1550 nm wavelength remodels deeper (texture, fine lines, scars); 1927 nm works superficially (pigment, tone, actinic damage). RCTs support periorbital wrinkle improvement — 1550 nm <a href="https://pubmed.ncbi.nlm.nih.gov/38211707/" rel="noopener nofollow" target="_blank">beat focused ultrasound</a> in one randomized trial — and a pooled analysis found small-sample outcomes <a href="https://link.springer.com/article/10.1007/s10103-022-03516-0" rel="noopener nofollow" target="_blank">statistically comparable to ablative</a>, though per-session change is clearly subtler.</p>
      <p>Its quiet superpower is safety in Fitzpatrick IV–VI (see the darker-skin section). Expect 25–50% improvement in texture/fine lines across a series, maintained with an annual top-up.</p>
    `,
  },
  {
    id: 'laser-hybrid',
    category: 'resurfacing',
    title: 'Hybrid fractional (Halo)',
    tldr: 'Ablative + non-ablative in one pass — popular, clever, and supported by a single sponsor-linked trial so far.',
    evidence: 'emerging',
    focus: 'texture',
    sessions: '1–3',
    downtime: '2–5 days',
    cost: '€900–1,800/session',
    bodyHtml: `
      <p>Halo fires a shallow erbium ablative component and a deeper 1470 nm coagulative one simultaneously — chasing "ablative-like results with non-ablative downtime". The published base is one <a href="https://pubmed.ncbi.nlm.nih.gov/30481954/" rel="noopener nofollow" target="_blank">multi-center manufacturer-linked trial</a> (~80% significantly improved, makeup next day) with no independent comparison against fractional CO₂ or Fraxel. Clinically loved; evidence hasn't caught up with popularity — a classic "emerging".</p>
    `,
  },
  {
    id: 'laser-lowenergy',
    category: 'resurfacing',
    title: 'Low-energy fractional (Clear + Brilliant, Moxi)',
    tldr: '"Prejuvenation" lasers — lighter versions of the 1927 nm class, with sparse device-specific published outcomes.',
    evidence: 'emerging',
    focus: 'texture',
    sessions: '4–6, ongoing',
    downtime: '~1 day',
    cost: '€250–400/session',
    bodyHtml: `
      <p>The lunchtime tier: low-energy 1440/1927 nm diodes marketed for glow, early pigment, and "prevention". Their plausibility rides on the full-strength 1927 nm class evidence at lower doses — device-specific peer-reviewed outcomes are thin, with sponsor trials registered rather than published. Think "a lighter Fraxel, more sessions, less result per session": pleasant maintenance, honest expectations.</p>
    `,
  },
  {
    id: 'laser-genesis',
    category: 'resurfacing',
    title: 'Long-pulsed 1064 nm ("laser genesis")',
    tldr: 'No-downtime glow with small, unblinded studies and transient effects — its real niche is being safe in dark skin.',
    evidence: 'limited',
    focus: 'dark-skin',
    sessions: '4–6+, repeated',
    downtime: 'None',
    cost: '€150–350/session',
    bodyHtml: `
      <p>Gentle bulk heating of the dermis with a wavelength melanin barely notices. Small prospective studies report modest wrinkle-grade and laxity improvements after a series of sessions, fading without maintenance — no large or blinded trials exist. Its genuine value: a polish-and-glow option for Fitzpatrick IV–VI, where most other devices carry pigment risk. As a wrinkle treatment, it's a candle next to the fractional class.</p>
    `,
  },
];

const light: Section[] = [
  {
    id: 'ipl-pigment',
    category: 'light',
    title: 'IPL for sun spots, redness & tone',
    tldr: 'The colour eraser: RCT-plus-systematic-review support for lentigines, visible vessels, and mottled tone in 3–6 sessions.',
    evidence: 'strong',
    focus: 'pigment',
    sessions: '3–6 + upkeep',
    downtime: 'Hours; spots flake ~1 wk',
    cost: '€120–400/session',
    bodyHtml: `
      <p>IPL's proven lane is colour. A Danish randomized split-face trial with blinded evaluation found it <a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/407425" rel="noopener nofollow" target="_blank">improved pigmentation, visible vessels, and texture</a>, and a <a href="https://link.springer.com/article/10.1007/s00403-021-02283-2" rel="noopener nofollow" target="_blank">16-study systematic review</a> (637 patients, average ~4 sessions) supports efficacy across lentigines, redness, and global photoaging scores. Treated spots darken and flake within a week; new sun makes new spots, so maintenance 1–2× a year is the norm.</p>
      <p>Skin-tone caveat: melanin is a target — IPL is for lighter phototypes, on untanned skin, with conservative settings toward Fitzpatrick IV and generally not beyond.</p>
    `,
  },
  {
    id: 'ipl-antiaging',
    category: 'light',
    title: 'IPL as "anti-aging" (wrinkles, Forever Young claims)',
    tldr: 'The best RCT found no wrinkle effect, and the "genetically younger skin" story rests on a tiny uncontrolled pilot.',
    evidence: 'limited',
    focus: 'wrinkles',
    bodyHtml: `
      <p>Here the marketing outruns the data. The same blinded RCT that validated IPL for colour found <a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/407425" rel="noopener nofollow" target="_blank">no efficacy on wrinkles</a>. The "Forever Young BBL" narrative — that maintenance sessions keep skin "functionally younger" — extrapolates from a <a href="https://pubmed.ncbi.nlm.nih.gov/22931923/" rel="noopener nofollow" target="_blank">small uncontrolled gene-expression pilot</a> on forearm skin plus retrospective series. Regular IPL keeps tone genuinely fresher; buy it for the colour, not for the collagen story.</p>
    `,
  },
  {
    id: 'vascular-lasers',
    category: 'light',
    title: 'Vascular lasers (pulsed-dye, KTP)',
    tldr: 'The redness specialists: 75–85% telangiectasia clearance in ~3 sessions, meta-analysis-backed for rosacea flushing.',
    evidence: 'strong',
    focus: 'redness',
    sessions: '1–4 + upkeep',
    downtime: 'None–mild (purpura opt.)',
    cost: '€200–500/session',
    bodyHtml: `
      <p>Haemoglobin-targeted lasers photocoagulate visible vessels and diffuse flushing. A <a href="https://pubmed.ncbi.nlm.nih.gov/39240125/" rel="noopener nofollow" target="_blank">2024 meta-analysis</a> found pulsed-dye and IPL comparably effective for rosacea erythema, and a split-face trial cleared <a href="https://pubmed.ncbi.nlm.nih.gov/17430378/" rel="noopener nofollow" target="_blank">85% of discrete vessels with KTP vs 75% with PDL</a> after three sessions. Treated vessels are gone for good; rosacea grows new ones, so expect top-ups every year or two. KTP suits fair skin; PDL stretches cautiously to Fitzpatrick IV.</p>
    `,
  },
  {
    id: 'pigment-lasers',
    category: 'light',
    title: 'Pigment lasers (Q-switched & picosecond) for sun spots',
    tldr: 'The precision tools: 68–93% lentigo clearance in 1–2 sessions across a 41-trial systematic review.',
    evidence: 'strong',
    focus: 'pigment',
    sessions: '1–2 per spot',
    downtime: '~1 wk crusting',
    cost: '€120–350/area',
    bodyHtml: `
      <p>Nanosecond and picosecond pulses shatter melanin photoacoustically — the right tool for discrete sun spots. A <a href="https://pubmed.ncbi.nlm.nih.gov/40145274/" rel="noopener nofollow" target="_blank">2025 systematic review of 41 trials</a> (3,234 patients) reports clearance of 67.9–93% for picosecond and up to 90% for IPL, with lasers causing less post-treatment pigmentation than cryotherapy. Spots crust and flake for about a week. In darker skin, 1064 nm is the safe wavelength; 532/755 nm are the risky ones.</p>
    `,
  },
  {
    id: 'melasma-lasers',
    category: 'light',
    title: 'Lasers for melasma',
    tldr: 'Temporary lightening with recurrence as the rule — and "laser toning" schedules have caused permanent confetti-white spots.',
    evidence: 'emerging',
    focus: 'pigment',
    sessions: 'Adjunct courses',
    downtime: 'Minimal',
    cost: '€300–600/session',
    bodyHtml: `
      <p>Melasma is a chronic, hormonally driven pigment disorder — not a sun spot — and lasers are adjuncts at best. Meta-analysis of picosecond treatment shows <a href="https://pubmed.ncbi.nlm.nih.gov/36897459/" rel="noopener nofollow" target="_blank">real short-term MASI reductions</a> (best at 1064 nm) with recurrence in ~7–13% even within short trial windows — and real-world relapse is widely considered higher. The specific hazard to know: frequent low-fluence "laser toning" has produced <a href="https://jcadonline.com/the-asian-problem-of-frequent-laser-toning-for-melasma/" rel="noopener nofollow" target="_blank">permanent confetti-like hypopigmentation</a>.</p>
      <p>The backbone of melasma care remains strict photoprotection and topicals ± tranexamic acid, with cautious low-energy laser as a supporting act. Distrust any "laser cure".</p>
    `,
  },
  {
    id: 'home-devices',
    category: 'light',
    title: 'At-home laser & IPL devices',
    tldr: 'The home 1440 nm fractional laser has one manufacturer trial (modest periorbital gains); home IPL\'s evidence is for hair removal.',
    evidence: 'emerging',
    focus: 'home',
    sessions: 'Months of use',
    downtime: 'Stinging, mild redness',
    cost: '€250–600 (device)',
    bodyHtml: `
      <p>Two very different products share the drawer. The Tria-class <strong>home fractional laser</strong> (1440 nm) is FDA-cleared for periorbital wrinkles on a manufacturer-run study of 90 users showing modest improvement — real, small, earned by months of daily stinging. <strong>Home IPL</strong> units are hair-removal hardware whose "rejuvenation" modes run at fluences far below clinical photorejuvenation, with essentially no supporting trials — and skin-tone lockouts that exclude darker users by design.</p>
      <p>Think "maintenance toy between clinic visits", and mind your eyes with any of them.</p>
    `,
  },
  {
    id: 'combos',
    category: 'light',
    title: 'Same-session combinations (IPL + fractional)',
    tldr: 'Controlled split-face studies show additive benefit without added downtime — colour first, texture second.',
    evidence: 'moderate',
    focus: 'general',
    sessions: 'Per plan',
    downtime: 'As per strongest part',
    cost: 'Bundled',
    bodyHtml: `
      <p>Stacking a colour pass and a texture pass in one visit is evidence-backed, not just upselling: split-face studies found IPL plus non-ablative fractional <a href="https://pubmed.ncbi.nlm.nih.gov/22574965/" rel="noopener nofollow" target="_blank">synergistic with downtime similar to either alone</a>, and a comparative study found the combination beat either monotherapy. Sequencing logic: vascular/IPL passes first (so the optical targets aren't disturbed), fractional second; big resurfacing procedures stand alone; melasma gets the least aggressive plan first.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety',
    category: 'safety',
    title: 'Complications, honestly ranked',
    tldr: 'Transient redness and PIH are the common ones; scarring and permanent light spots are the rare ones that scale with aggressiveness.',
    bodyHtml: `
      <p>Ranked by how much they should influence your choice:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Post-inflammatory hyperpigmentation (PIH)</strong> — the everyday risk, rising with skin tone, sun exposure, and device aggressiveness; usually months-long, usually reversible; minimized by settings, priming, and SPF discipline.</li>
        <li><strong>Prolonged redness, milia, acne flares</strong> — common after resurfacing; annoying, self-limited.</li>
        <li><strong>Herpes reactivation</strong> — ~7–9% after facial resurfacing without antivirals; near zero with them.</li>
        <li><strong>Permanent hypopigmentation</strong> — the signature late risk of aggressive full-field ablation (~8% in older series) and of repetitive "laser toning" for melasma.</li>
        <li><strong>Scarring and burns</strong> — rare, and overwhelmingly operator-dependent: wrong settings, tanned skin, wrong device for the skin type. This is what the consultation questions in "Before you book" are for.</li>
      </ul>
      <p>Eye safety is absolute: proper shields for every facial treatment, no exceptions around the orbit.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-wrinkles',
    category: 'faq',
    title: 'Which laser actually removes wrinkles?',
    tldr: 'Ablative resurfacing — everything gentler softens rather than removes.',
    bodyHtml: `
      <p>Full-field or fractional CO₂/erbium resurfacing is the only class with strong evidence for major, years-long wrinkle reduction. Non-ablative fractional freshens texture and fine lines over several sessions; IPL improves colour, not lines. Match the tool to the wrinkle depth — and to your downtime budget.</p>
    `,
  },
  {
    id: 'faq-ipl-antiaging',
    category: 'faq',
    title: 'Is IPL "anti-aging" or just spot removal?',
    tldr: 'Colour, texture, glow — yes. Wrinkles — no.',
    bodyHtml: `
      <p>Its proven effects are on sun spots, redness, and overall tone — which reads as "younger" in the mirror. The best randomized trial found no wrinkle change, and the gene-expression "Forever Young" story is a pilot-study extrapolation. Buy IPL for colour; buy resurfacing for lines.</p>
    `,
  },
  {
    id: 'faq-dark-skin',
    category: 'faq',
    title: 'I have olive/brown/black skin — what\'s safe?',
    tldr: '1064 nm and non-ablative fractional with conservative settings; avoid IPL/KTP and full ablation.',
    bodyHtml: `
      <p>Safest: long-pulsed or picosecond 1064 nm, and 1550/1927 nm non-ablative fractional with conservative settings and priming — PIH ran ~4% per session and self-resolved in a careful Fitzpatrick IV–VI series. Risky to avoid: IPL and KTP in V–VI, and full-field ablative beyond type III. Always ask for a test spot and for the provider's experience with your exact skin type.</p>
    `,
  },
  {
    id: 'faq-downtime',
    category: 'faq',
    title: 'How long is the downtime really?',
    tldr: 'Hours (IPL) to two-plus weeks (full resurfacing) — the ladder is the price list.',
    bodyHtml: `
      <p>IPL/vascular: hours of redness, spots flaking a week. Non-ablative fractional: 1–3 swollen pink days plus bronzed flaking. Hybrid: 2–5 days. Fractional ablative: about a week raw, then weeks of pink. Full-field: two weeks of wound care and up to months of erythema. Plan events accordingly — and count the "pink but presentable" phase, not just the raw one.</p>
    `,
  },
  {
    id: 'faq-melasma',
    category: 'faq',
    title: 'Can lasers cure my melasma?',
    tldr: 'No — temporary lightening, frequent relapse, and real risks from overtreatment.',
    bodyHtml: `
      <p>Lasers can lighten melasma temporarily; recurrence is the rule, and aggressive weekly "toning" schedules have caused permanent white spotting. The foundation remains fanatical photoprotection plus topicals ± tranexamic acid, with gentle laser as an adjunct. Any clinic promising a permanent laser cure has told you what you need to know about them.</p>
    `,
  },
  {
    id: 'faq-isotretinoin',
    category: 'faq',
    title: 'I took isotretinoin — must I wait 6 months?',
    tldr: 'Not for most treatments — only full-face ablative resurfacing keeps the wait.',
    bodyHtml: `
      <p>Consensus guidance found insufficient evidence to delay vascular lasers, non-ablative and fractional treatments, or hair removal during or shortly after isotretinoin. The six-month wait survives for full-face fully ablative resurfacing. Discuss timing rather than assuming the old blanket ban.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPED FOR PAGE LAYOUT
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'The basics',
    intro: 'How the machines work, and the downtime ladder that organizes them all.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you book',
    intro: 'Skin-tone safety, prep rules, and the consensus that recently changed.',
    sections: context,
  },
  {
    id: 'resurfacing',
    title: 'Resurfacing lasers',
    intro: 'The wrinkle-and-texture machines, from full ablation to lunchtime fractional.',
    sections: resurfacing,
  },
  {
    id: 'light',
    title: 'Light, colour & pigment',
    intro: 'IPL, vascular and pigment lasers — plus melasma, home devices, and combinations.',
    sections: light,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The complication list, ranked by how much it should matter to you.',
    sections: safety,
  },
  {
    id: 'faq',
    title: 'Frequently asked questions',
    intro: 'Quick answers to what people actually ask.',
    sections: faq,
  },
];

// ---------------------------------------------------------------------------
// FILTER METADATA
// ---------------------------------------------------------------------------

export const focusLabels: Record<FocusArea, string> = {
  wrinkles: 'Wrinkles',
  pigment: 'Pigment',
  redness: 'Redness',
  texture: 'Texture',
  'dark-skin': 'Dark-skin safe',
  home: 'At home',
  general: 'General',
};

export function allSections(): Section[] {
  return groups.flatMap((g) => g.sections);
}

/** Tier counts for this guide — drives evidence ledgers. */
export function evidenceCounts(): Record<Evidence, number> {
  return countByTier(allSections());
}

/** Full-read time of this guide at ~220 wpm. */
export function readingMinutes(): number {
  return readingMinutesFor(allSections());
}
