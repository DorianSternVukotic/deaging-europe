/**
 * Hyaluronic-acid fillers guide — single source of truth.
 *
 * Consumed by /fillers. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Efficacy tiers and safety commentary are kept separate on purpose: an area
 * can have strong efficacy data and still be the riskiest place to inject.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'volume' | 'lines' | 'contour' | 'skin-quality' | 'off-label' | 'general';

export type SectionCategory = 'concept' | 'context' | 'use' | 'booster' | 'alternative' | 'safety' | 'faq';

export interface Section {
  id: string;
  category: SectionCategory;
  title: string;
  tldr: string;
  evidence?: Evidence;
  focus?: FocusArea;
  bodyHtml: string;
  note?: string;
  /** Treatment rows: typical course / syringes, for the expanded card. */
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
  'HA fillers work by physically filling space — results are immediate, and the pivotal trials behind FDA approvals show effects lasting 6 months (folds, hands) to 2 years (cheeks).',
  'MRI studies have upended the "it dissolves in a year" story: filler was still visible 2–15 years after injection in every imaged patient, often swollen to ~3× the injected volume.',
  'HA is the only filler class with an antidote — hyaluronidase dissolves it — which is the strongest argument for choosing HA over biostimulators for a first treatment.',
  'The serious risks concentrate by location: nose and glabella injections cause most filler blindness, and the tear trough is the delayed-complication champion. Injector skill is the variable you control.',
  'Skin-quality injectables are a tier below: Profhilo\'s only blinded sham-controlled trial failed to beat saline, whatever the marketing says.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-are-fillers',
    category: 'concept',
    title: 'What HA fillers are and how they work',
    tldr: 'Crosslinked hyaluronic-acid gels that physically occupy space the moment they are placed.',
    bodyHtml: `
      <p>Hyaluronic acid is a water-binding sugar molecule your skin already makes. Filler manufacturers ferment it bacterially, then <strong>crosslink</strong> the chains (usually with BDDE) so the gel resists the enzymes that would clear natural HA within days. Different products differ in crosslinking chemistry and firmness — a cheek filler like <a href="https://pubmed.ncbi.nlm.nih.gov/24093664/" rel="noopener nofollow" target="_blank">Juvéderm Voluma</a> is a firm, high-lift gel, while products for lips and fine lines are softer and more flexible.</p>
      <p>Results are immediate because the effect is physical space-filling: the gel occupies volume the moment it is placed. What you see at day 1 includes some swelling; the settled result appears over ~2 weeks.</p>
      <p>This is also why fillers and skin-tightening treatments answer different problems: filler replaces lost <em>volume</em>; it does not tighten loose skin or stimulate meaningful new collagen the way biostimulators and energy devices do.</p>
    `,
  },
  {
    id: 'how-long-they-last',
    category: 'concept',
    title: 'How long filler really lasts — label vs MRI',
    tldr: 'Visible correction fades on the trial timelines (6–24 months). The material itself can persist for many years.',
    bodyHtml: `
      <p>The pivotal trials give honest <em>visible-effect</em> durations: roughly 6–12 months in the nasolabial folds, about a year in lips and chin, up to 2 years in the midface, ~6 months in hands.</p>
      <p>But MRI research has upended the assumption that the filler is <em>gone</em> when the effect fades. A review of <a href="https://journals.lww.com/prsgo/fulltext/2024/07000/hyaluronic_acid_filler_longevity_in_the_mid_face_.36.aspx" rel="noopener nofollow" target="_blank">33 patients with midface MRI</a> found HA filler visible <strong>2 to 15 years after injection in all 33</strong>, and a <a href="https://www.ovid.com/jnls/prsgo/fulltext/10.1097/gox.0000000000007894~longevity-and-volume-expansion-of-hyaluronic-acid-dermal" rel="noopener nofollow" target="_blank">3D-MRI study</a> measured in-situ volumes averaging <strong>2.8× the injected amount</strong> — the gel absorbs water and expands.</p>
      <p>The practical consequence: conservative volumes, and skepticism toward reflexive "top-ups" on a fixed schedule. Old filler is often still there, quietly stacking under each new syringe.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'can-and-cant',
    category: 'context',
    title: 'What fillers can and cannot fix',
    tldr: 'Great for volume loss and contour. Wrong tool for loose skin, heavy sagging, and surface texture.',
    bodyHtml: `
      <p>Facial aging has three mechanically different components, and filler addresses exactly one of them:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Volume loss</strong> (deflating fat pads, receding bone) — filler's home ground: cheeks, temples, chin, jawline, lips, deep folds.</li>
        <li><strong>Skin laxity</strong> (loose, inelastic skin) — filler cannot lift it; adding volume to a lax face can make it heavier. This is energy-device or surgery territory.</li>
        <li><strong>Surface quality</strong> (fine lines, texture, pigment) — retinoids, resurfacing, and lasers outperform any injectable here.</li>
      </ul>
      <p>The best filler outcomes come from treating a genuinely volume-deficient area conservatively — not from chasing every line on the face with gel.</p>
    `,
  },
  {
    id: 'choosing-injector',
    category: 'context',
    title: 'Choosing an injector (and what it costs)',
    tldr: 'A medical injector with hyaluronidase on the shelf, cannula technique in risky zones, and the confidence to say no.',
    bodyHtml: `
      <p>The evidence-anchored checklist:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>A medical professional with prescribing access.</strong> Hyaluronidase — the rescue enzyme for a blocked vessel — is a prescription medicine, and the 84% rescue-success figure assumes it is injected within hours.</li>
        <li><strong>Cannula or meticulous technique in high-risk zones.</strong> A large practitioner survey found vascular occlusion roughly <a href="https://www.harleyacademy.com/aesthetic-medicine-articles/cannula-use-makes-vascular-occlusion-less-likely/" rel="noopener nofollow" target="_blank">6× less likely with cannula</a> than needle per syringe.</li>
        <li><strong>Reputable CE/FDA-cleared brands</strong>, opened in front of you — grey-market product is a real phenomenon.</li>
        <li><strong>Willingness to say no.</strong> The overfilled-face literature names practitioner enthusiasm as a driver.</li>
      </ul>
      <p><strong>Prices:</strong> reputable UK clinics charge roughly <a href="https://www.colaz.co.uk/blog/how-much-do-dermal-fillers-cost-uk/" rel="noopener nofollow" target="_blank">£150–£600 per 1 ml syringe</a> (London toward the top); continental Western Europe clusters around €250–600/ml. Cheeks typically need 2+ syringes, lips one. Suspiciously cheap offers usually mean diluted product or non-medical injectors.</p>
      <p><strong>Regulation reality (2026):</strong> in England anyone can currently legally inject filler — a licensing scheme placing fillers in an "amber" tier under healthcare oversight was <a href="https://commonslibrary.parliament.uk/research-briefings/cbp-10331/" rel="noopener nofollow" target="_blank">confirmed in 2025 but is not yet in force</a>. Much of the EU already restricts injection to physicians or supervised medical staff.</p>
    `,
  },
];

const uses: Section[] = [
  {
    id: 'use-cheeks',
    category: 'use',
    title: 'Cheeks & midface',
    tldr: 'The best-evidenced area: pivotal-trial improvement in 86% at 6 months, still visible in 79% at 2 years.',
    evidence: 'strong',
    focus: 'volume',
    sessions: '1 (2–4 ml)',
    downtime: '2–5 days swelling',
    cost: '€500–1,200',
    bodyHtml: `
      <p>Midface volumization is where modern filler earned its reputation. In the <a href="https://pubmed.ncbi.nlm.nih.gov/24093664/" rel="noopener nofollow" target="_blank">Voluma pivotal RCT</a> (235 treated vs 47 controls), 85.6% improved at least one point on a validated volume-deficit scale at 6 months, and <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4482214/" rel="noopener nofollow" target="_blank">79% still rated themselves improved at 2 years</a> — the longest supported duration of any filler area.</p>
      <p>Restoring the cheek also softens what's below it: nasolabial folds and jowl shadows partially improve when midface support returns, which is why good injectors often start here rather than at the fold itself.</p>
      <p><strong>Typical treatment:</strong> 2–4 ml across both cheeks, occasionally with a touch-up. Bruising and swelling settle within days.</p>
    `,
  },
  {
    id: 'use-lips',
    category: 'use',
    title: 'Lips & lip lines',
    tldr: 'Two large pivotal RCTs; over 60% still responders at 1 year. Expect more swelling than any other area.',
    evidence: 'strong',
    focus: 'volume',
    sessions: '1 (≤1 ml)',
    downtime: '3–7 days swelling',
    cost: '€250–600',
    bodyHtml: `
      <p>Lips have unusually good data because two modern products ran head-to-head pivotal programs: <a href="https://clinicaltrials.gov/study/NCT01998581" rel="noopener nofollow" target="_blank">Volbella</a> (225 adults, responder rate &gt;60% at 12 months) and <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8021234/" rel="noopener nofollow" target="_blank">Restylane Kysse</a> (~280 subjects, 48 weeks, similar fullness with ~20% less product). Perioral "smoker's lines" improved in about two-thirds of patients in the same trials.</p>
      <p><strong>The honest caveat:</strong> pooled safety data show swelling and lumps are significantly more frequent in lips than in the nasolabial folds — plan a social buffer of several days.</p>
      <p><strong>Typical treatment:</strong> up to 1 ml per session (both pivotal trials capped there). Natural results come from respecting lip proportions, not maximizing volume; "filler moustache" migration is largely a repeat-overfill phenomenon.</p>
    `,
  },
  {
    id: 'use-nasolabial',
    category: 'use',
    title: 'Nasolabial folds (smile lines)',
    tldr: 'The FDA proving ground — dozens of RCTs. Works well; often better addressed via the cheek above it.',
    evidence: 'strong',
    focus: 'lines',
    sessions: '1 (0.5–1 ml/side)',
    downtime: '1–3 days',
    cost: '€250–600',
    bodyHtml: `
      <p>Every major filler earned its US approval in the nasolabial fold, so this area has the deepest RCT base in aesthetics — head-to-head trials, <a href="https://link.springer.com/article/10.1007/s00266-024-03889-3" rel="noopener nofollow" target="_blank">a 2024 network meta-analysis</a>, and validated wrinkle scales. All modern HA products beat the old collagen comparators and are broadly interchangeable in trials.</p>
      <p>Two practical notes: deep folds usually reflect midface deflation, so treating the cheek first often halves what the fold needs. And this is among the safer zones — but the nearby facial artery still demands a trained injector.</p>
    `,
  },
  {
    id: 'use-chin',
    category: 'use',
    title: 'Chin projection',
    tldr: 'A dedicated pivotal RCT (Voluma, 2020 FDA approval) with 1-year effect and mild, transient side effects.',
    evidence: 'strong',
    focus: 'contour',
    sessions: '1 (1–3 ml)',
    downtime: '1–3 days',
    cost: '€400–900',
    bodyHtml: `
      <p>Chin augmentation crossed from "off-label habit" to evidence-based in 2020, when Voluma won a dedicated FDA approval on a <a href="https://clinicaltrials.gov/study/NCT02833077" rel="noopener nofollow" target="_blank">221-patient randomized pivotal trial</a> with 1-year follow-up; individual adverse events each ran under 5% and resolved within weeks.</p>
      <p>A modest chin correction changes profile harmony more than most people expect — it's frequently paired with jawline work. Firm, high-lift gels are used here; results typically hold about a year.</p>
    `,
  },
  {
    id: 'use-jawline',
    category: 'use',
    title: 'Jawline definition',
    tldr: 'FDA-approved (Volux, 2022) on one randomized program — newer and less proven than chin or cheeks.',
    evidence: 'moderate',
    focus: 'contour',
    sessions: '1 (2–4 ml)',
    downtime: '2–5 days',
    cost: '€600–1,200',
    bodyHtml: `
      <p>Jawline filler became officially evidence-based in 2022 when <a href="https://news.abbvie.com/2022-08-03-FDA-Approves-JUVEDERM-R-VOLUX-TM-XC-for-Improvement-of-Jawline-Definition" rel="noopener nofollow" target="_blank">Juvéderm Volux</a> was approved for jawline definition on a randomized controlled study. One pivotal program and a shorter track record keep it a notch below chin and cheeks — and it cannot fix genuine jowling from skin laxity, only sharpen the bony line.</p>
      <p>Volume needs are larger here (often 2–4 ml), which makes injector judgment about <em>whether</em> you're a good candidate more valuable than the syringe count.</p>
    `,
  },
  {
    id: 'use-perioral',
    category: 'use',
    title: 'Marionette lines & perioral area',
    tldr: 'Covered by randomized data mostly inside lip/lower-face programs; flexible gels are approved for "laugh lines".',
    evidence: 'moderate',
    focus: 'lines',
    sessions: '1 (1–2 ml)',
    downtime: '1–3 days',
    cost: '€300–700',
    bodyHtml: `
      <p>Marionette lines (mouth-corner to chin) respond to flexible fillers designed for mobile areas — Restylane Refyne/Defyne carry FDA clearance for "laugh lines", and perioral rhytids improved in ~65% of patients in the <a href="https://www.ovid.com/jnls/dermatologicsurgery/fulltext/10.1097/dss.0000000000001035~safety-and-effectiveness-of-vyc-15l-a-hyaluronic-acid-filler" rel="noopener nofollow" target="_blank">Volbella pivotal trial</a>. Dedicated marionette-only RCTs are scarce; most evidence sits inside multi-area lower-face programs.</p>
      <p>Downturned mouth corners often need a combination approach (a little support at the corner, chin stabilization, sometimes botulinum toxin to the depressor muscle) rather than more gel in the line itself.</p>
    `,
  },
  {
    id: 'use-tear-trough',
    category: 'use',
    title: 'Tear troughs (under-eye hollows)',
    tldr: 'High satisfaction in pooled studies — and the highest routine-complication zone. Off-label everywhere; expert-only.',
    evidence: 'moderate',
    focus: 'off-label',
    note: 'Safety-first area: thin skin, Tyndall shine, late swelling — pick the most experienced medical injector you can find.',
    sessions: '1 (0.5–1 ml)',
    downtime: '3–7 days',
    cost: '€400–800',
    bodyHtml: `
      <p>Efficacy first: a <a href="https://pubmed.ncbi.nlm.nih.gov/37684413/" rel="noopener nofollow" target="_blank">2023 meta-analysis</a> pooled tear-trough studies and found 91% overall satisfaction — but from small uncontrolled series. No pivotal RCT exists; the area is off-label for nearly every product.</p>
      <p>Safety is what makes this area special, in the wrong way. A systematic review of <a href="https://pubmed.ncbi.nlm.nih.gov/34666405/" rel="noopener nofollow" target="_blank">delayed tear-trough complications</a> found swelling (42% of delayed cases), nodules (25%), migration and discoloration appearing at a <em>mean of 17 months</em> after injection; the thin eyelid skin also shows the blue-grey <strong>Tyndall effect</strong> when gel sits too superficially, and long-term studies document late puffiness from persistent filler.</p>
      <p><strong>If you do it:</strong> small volumes of a soft, low-swelling gel, by an oculoplastic or highly experienced medical injector — and accept that "no" (or fat repositioning surgery) is sometimes the better answer for deep hollows.</p>
    `,
  },
  {
    id: 'use-hands',
    category: 'use',
    title: 'Backs of the hands',
    tldr: 'One randomized split-hand pivotal (Restylane Lyft): real correction for ~6 months, mild temporary side effects.',
    evidence: 'moderate',
    focus: 'volume',
    sessions: '1 (1–3 ml/hand)',
    downtime: '2–7 days',
    cost: '€400–900',
    bodyHtml: `
      <p>Hands age loudly — veins and tendons surface as the fat pad deflates. Restylane Lyft is FDA-approved for dorsal hands on a <a href="https://www.galderma.com/news/nestle-skin-health-announces-fda-approval-restylane-lyft-hands-first-and-only-hyaluronic-acid" rel="noopener nofollow" target="_blank">randomized, evaluator-blinded split-hand study of 89 patients</a>: clinically meaningful volume correction to 6 months, with predominantly mild, temporary swelling and tenderness (including brief impaired hand function).</p>
      <p>It pairs naturally with IPL or pigment lasers for sun spots — volume fixes the deflation, light fixes the discoloration.</p>
    `,
  },
  {
    id: 'use-nose',
    category: 'use',
    title: 'Non-surgical rhinoplasty ("liquid nose job")',
    tldr: 'Pooled satisfaction is high — and this is the single riskiest filler area for blindness and skin necrosis.',
    evidence: 'moderate',
    focus: 'off-label',
    note: 'Risk-first decision: ~0.27% serious vascular events in pooled data and the top site in the blindness literature.',
    sessions: '1 (0.2–0.6 ml)',
    downtime: '1–3 days',
    cost: '€400–800',
    bodyHtml: `
      <p>A 2024 systematic review pooling <a href="https://pubmed.ncbi.nlm.nih.gov/38862661/" rel="noopener nofollow" target="_blank">9,657 liquid-rhinoplasty patients</a> reported 99.1% satisfaction — camouflaging a hump or lifting a tip with fractions of a millilitre genuinely works. The same pooled analysis is the reason to pause: serious vascular complications — <strong>blindness, skin necrosis, stroke — occurred in 0.27%</strong>, roughly 1 in 370, the worst serious-event profile of any filler area, and the nose is the top site (40.6%) in the world filler-blindness literature.</p>
      <p>The nasal arteries connect directly toward the eye's blood supply, and previously operated noses are riskier still. If you choose it anyway: an expert medical injector, tiny volumes, cannula technique, never soon after a surgical rhinoplasty.</p>
      <p class="text-ink/60 text-sm italic">Caveat: satisfaction data come from uncontrolled case series; there is no pivotal RCT, and the use is off-label.</p>
    `,
  },
  {
    id: 'use-decolletage',
    category: 'use',
    title: 'Neck & décolletage lines',
    tldr: 'Small open-label studies of dilute HA/skin boosters only — a registered RCT has not reported yet.',
    evidence: 'emerging',
    focus: 'skin-quality',
    sessions: '2–3',
    downtime: '1–3 days',
    cost: '€300–600/session',
    bodyHtml: `
      <p>Chest wrinkles respond modestly to dilute HA "skin booster" techniques: a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12620603/" rel="noopener nofollow" target="_blank">2025 open-label study</a> (81 volunteers, 3 sessions) found significant hydration, elasticity, and wrinkle-depth improvements over 6 months with mild transient side effects. A <a href="https://clinicaltrials.gov/study/NCT04488939" rel="noopener nofollow" target="_blank">randomized Skinboosters trial in the décolletage</a> is registered but unreported — until it lands, this stays an "emerging" indication with real but small, uncontrolled support.</p>
    `,
  },
];

const boosters: Section[] = [
  {
    id: 'booster-skinboosters',
    category: 'booster',
    title: 'Skin boosters (Restylane Vital, microdroplet HA)',
    tldr: 'Randomized data show real hydration gains; elasticity changes are occasional. Industry-run, no sham control.',
    evidence: 'moderate',
    focus: 'skin-quality',
    sessions: '2–3, then top-ups',
    downtime: '1–3 days',
    cost: '€250–450/session',
    bodyHtml: `
      <p>Skin boosters are dilute, lightly crosslinked HA injected in microdroplets across the face — hydration from within rather than volume. The best data: a <a href="https://clinicaltrials.gov/study/NCT02403986" rel="noopener nofollow" target="_blank">randomized multicenter study</a> comparing 2 vs 3 initial sessions found 75–84% judged aesthetically improved at 3 months, with measurably increased hydration; elasticity improvements were only "occasional", and the comparison was between dosing schedules, not against no treatment.</p>
      <p>Expect better-hydrated, more radiant skin for some months — not fewer wrinkles. Claims of 15-month duration are marketing-grade.</p>
    `,
  },
  {
    id: 'booster-volite',
    category: 'booster',
    title: 'Juvéderm Volite',
    tldr: 'Prospective but uncontrolled studies: real measured gains that fade substantially by month 6.',
    evidence: 'emerging',
    focus: 'skin-quality',
    sessions: '1, repeat ~6-monthly',
    downtime: '1–3 days',
    cost: '€300–500',
    bodyHtml: `
      <p>Volite (VYC-12) is Allergan's skin-quality injectable. Prospective single-arm studies show a <a href="https://pubmed.ncbi.nlm.nih.gov/31749628/" rel="noopener nofollow" target="_blank">96% skin-roughness responder rate at month 1 that falls to 35% by month 6</a>, with hydration gains persisting somewhat longer. No randomized sham-controlled trial exists.</p>
      <p>Read that decay curve before booking: this is a treatment you repeat twice a year to hold, or accept as a several-month effect.</p>
    `,
  },
  {
    id: 'booster-profhilo',
    category: 'booster',
    title: 'Profhilo ("bioremodelling")',
    tldr: 'The only blinded, saline-controlled trial found no advantage over placebo on its objective endpoint.',
    evidence: 'limited',
    focus: 'skin-quality',
    sessions: '2, a month apart',
    downtime: '1–2 days (bumps)',
    cost: '€300–500/session',
    bodyHtml: `
      <p>Profhilo is the most heavily marketed skin injectable in Europe, and the gap between marketing and evidence is the widest in this guide. Supporting studies are open-label and sponsor-linked — e.g. a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9509274/" rel="noopener nofollow" target="_blank">23-person neck study</a> with manufacturer-employed authors reporting modest laxity-scale gains (and bruising in ~50%).</p>
      <p>The decisive datapoint: the first <a href="https://link.springer.com/article/10.1007/s00266-026-05634-4" rel="noopener nofollow" target="_blank">randomized, triple-blind, saline-controlled split-face trial</a> found dermal thickness increased on <strong>both</strong> the Profhilo and the placebo side — no significant advantage over saline on the objective endpoint, and over half of participants dissatisfied.</p>
      <p>Plenty of people enjoy the post-treatment glow; the honest description is "temporary hydration with a strong placebo component", not "remodelled skin".</p>
    `,
  },
];

const alternatives: Section[] = [
  {
    id: 'alt-biostimulators',
    category: 'alternative',
    title: 'Biostimulators instead (Sculptra, Radiesse)',
    tldr: 'RCTs show comparable-or-longer-lasting fold correction via new collagen — but no antidote if you dislike it.',
    evidence: 'moderate',
    focus: 'volume',
    sessions: '2–3 over months',
    downtime: '1–3 days',
    cost: '€400–700/session',
    bodyHtml: `
      <p>Poly-L-lactic acid (Sculptra) and calcium hydroxylapatite (Radiesse) don't fill so much as provoke: the particles trigger your fibroblasts to build new collagen over months. The evidence is respectable — a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12903950/" rel="noopener nofollow" target="_blank">252-person double-blind RCT</a> found PLLA durable versus HA for folds with effects toward 2 years, and a <a href="https://pubmed.ncbi.nlm.nih.gov/25226004/" rel="noopener nofollow" target="_blank">split-face biopsy study</a> showed CaHA genuinely builds more new collagen and elastin than HA.</p>
      <p>The trade-off is control: results build slowly, depend on your biology, and — decisively — <strong>cannot be dissolved</strong>. HA's hyaluronidase antidote does not work on biostimulators. Reasonable second act; risky first date.</p>
    `,
  },
  {
    id: 'alt-hyaluronidase',
    category: 'alternative',
    title: 'Reversal: hyaluronidase',
    tldr: 'HA\'s unique advantage — an enzyme reliably dissolves it, electively or as an emergency rescue.',
    evidence: 'moderate',
    focus: 'general',
    sessions: '1–3',
    downtime: '1–2 days',
    cost: '€150–400',
    bodyHtml: `
      <p>Hyaluronidase is the reason HA dominates the filler market: mistakes and regrets are correctable. Clinical reviews support reliable elective dissolution (firmly crosslinked gels may need <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11875574/" rel="noopener nofollow" target="_blank">repeat sessions at higher doses</a>), and in vascular occlusion, prompt high-dose pulsed hyaluronidase restored flow in <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12097758/" rel="noopener nofollow" target="_blank">84% of pooled HA cases</a> — with delay beyond ~5 days predicting permanent damage.</p>
      <p>Limits worth knowing: occasional allergy (test dosing in electives), old fibrotic nodules may resist, and for established vision loss the rescue rarely works. But as an exit option no other filler class offers, it is the strongest argument for HA first.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-common',
    category: 'safety',
    title: 'Common side effects — the real rates',
    tldr: 'Swelling ~41%, bruising ~11%, lumps ~9% in pooled trials — and much more frequent outside the smile folds.',
    bodyHtml: `
      <p>A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10226824/" rel="noopener nofollow" target="_blank">meta-analysis of 19 controlled trials</a> gives honest denominators: swelling 40.7%, bruising 10.8%, pain 9.5%, lumps 9.4%, redness 4.5% — nearly all mild and settling within days. Location matters enormously: swelling was 17% in nasolabial folds versus <strong>73%</strong> in other sites (lips, midface, perioral), lumps 3% versus 32%.</p>
      <p>Plan accordingly: no filler in the fortnight before a major event, and expect lips to look "done" for several days before they look natural.</p>
    `,
  },
  {
    id: 'safety-vascular',
    category: 'safety',
    title: 'Vascular occlusion and blindness',
    tldr: 'Rare (~1 per 6,400 needle syringes) but the emergency that defines injector choice. Blindness is rarer still and mostly permanent.',
    bodyHtml: `
      <p>If filler enters an artery it can block blood supply to skin — or, via connections around the nose and brow, to the eye. Best available numbers: about <a href="https://www.harleyacademy.com/aesthetic-medicine-articles/cannula-use-makes-vascular-occlusion-less-likely/" rel="noopener nofollow" target="_blank">1 occlusion per 6,410 needle syringes, and 1 per 40,882 by cannula</a> (a 1.7-million-syringe practitioner survey). Treated promptly with hyaluronidase, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12097758/" rel="noopener nofollow" target="_blank">84% of HA occlusions recover</a>; delays beyond days predict permanent damage.</p>
      <p><strong>Blindness</strong> is the catastrophic version: <a href="https://academic.oup.com/asj/article/44/10/1091/7649223" rel="noopener nofollow" target="_blank">511 published cases worldwide</a>, concentrated in nose (40.6%), forehead (27.7%), and glabella (19.0%) injections. Only 6% fully recovered vision. Against tens of millions of yearly treatments it is very rare — but largely irreversible, which is why high-risk-zone injections belong with experienced medical injectors who keep hyaluronidase within arm's reach.</p>
      <p><strong>Warning signs after any injection:</strong> blanching skin, mottled discoloration, severe pain out of proportion, vision changes — this is an emergency measured in hours, not days.</p>
    `,
  },
  {
    id: 'safety-nodules',
    category: 'safety',
    title: 'Delayed nodules and immune flares',
    tldr: 'In 0.02–4% of patients, tender lumps can appear weeks to months later — sometimes triggered by illness, dental work, or vaccines.',
    bodyHtml: `
      <p>Weeks to months after an uneventful treatment, some patients develop tender swelling or firm nodules at old filler sites. Reported rates for these delayed inflammatory reactions run <a href="https://jcadonline.com/cmac-delayed-onset-nodules/" rel="noopener nofollow" target="_blank">0.02–4.25%</a>. Recognized triggers include flu-like illness, dental procedures, and vaccination — with documented flares after <a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.14312" rel="noopener nofollow" target="_blank">COVID-19 vaccines</a>.</p>
      <p>The good news: most resolve with time, steroids, antibiotics, and/or hyaluronidase. The practical note: tell any clinician who sees a facial swelling that you have filler, even from years ago — it is often still there.</p>
    `,
  },
  {
    id: 'safety-migration-overfill',
    category: 'safety',
    title: 'Migration and the overfilled face',
    tldr: 'Filler can drift (lips especially), and repeated top-ups on persistent product stack into distortion — now a named syndrome.',
    bodyHtml: `
      <p><strong>Migration</strong> — gel drifting from where it was placed — is documented across dozens of reports, most visibly the "filler moustache" above overfilled lips; frequency is unknown, but repeat treatment and mobile areas drive it.</p>
      <p><strong>Facial Overfilled Syndrome</strong> is the compounding version: because filler <a href="https://journals.lww.com/prsgo/fulltext/2024/07000/hyaluronic_acid_filler_longevity_in_the_mid_face_.36.aspx" rel="noopener nofollow" target="_blank">persists for years</a>, routine top-ups stack volume until faces distort — puffed cheeks that rise oddly on smiling, blurred definition, "pillow face". It is now formally described in the literature, with <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13051189/" rel="noopener nofollow" target="_blank">classification and management reviews</a> recommending ultrasound-guided dissolution.</p>
      <p>Prevention is boring and effective: conservative volumes, long intervals, before-photos at every visit, and an injector who tracks cumulative dose rather than selling a subscription.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-sag',
    category: 'faq',
    title: 'Will my skin sag when the filler wears off?',
    tldr: 'No rebound sagging is documented — treated faces return toward baseline, not below it.',
    bodyHtml: `
      <p>In the 2-year Voluma trial, untreated controls simply stayed at baseline while treated faces gradually returned toward (not below) their starting point. MRI studies show the material fades slowly rather than leaving a stretched void. The documented long-term cosmetic risk runs the other way — cumulative overfill.</p>
    `,
  },
  {
    id: 'faq-dissolve',
    category: 'faq',
    title: 'Does filler fully dissolve on its own?',
    tldr: 'Often not for years — the visible effect fades long before the gel is gone.',
    bodyHtml: `
      <p>MRI found filler in all 33 imaged midfaces 2–15 years after injection, at volumes averaging 2.8× the injected amount thanks to water absorption. That's not dangerous in itself, but it argues for restraint with top-ups and for mentioning old filler before any facial imaging, surgery, or new injectable plan.</p>
    `,
  },
  {
    id: 'faq-undo',
    category: 'faq',
    title: 'Can filler be undone if I hate it?',
    tldr: 'Yes — hyaluronidase dissolves HA filler, usually in one or two sessions.',
    bodyHtml: `
      <p>HA is the only filler class with an antidote. Elective dissolution works reliably (firmly crosslinked products may need repeat dosing), with occasional allergy the main caveat. This is precisely why a first filler experience should be HA rather than a biostimulator — you keep the exit.</p>
    `,
  },
  {
    id: 'faq-pregnancy',
    category: 'faq',
    title: 'Can I get filler while pregnant or breastfeeding?',
    tldr: 'No data exists — every trial excluded pregnancy, so clinicians defer treatment.',
    bodyHtml: `
      <p>There is no evidence of harm — because there is no evidence at all: pivotal programs excluded pregnant and breastfeeding women, so manufacturers and injectors uniformly advise waiting. A purely elective procedure with zero safety data is an easy defer.</p>
    `,
  },
  {
    id: 'faq-vaccine',
    category: 'faq',
    title: 'Can a vaccine or infection make old filler flare up?',
    tldr: 'Yes, it\'s documented — delayed swelling can follow illness, dental work, or vaccination.',
    bodyHtml: `
      <p>Delayed inflammatory nodules (0.02–4% of patients overall) can be triggered by immune activation — flu-like illness, dental procedures, and vaccination, including documented COVID-19-vaccine flares. They look alarming and are very treatable: time, steroids, antibiotics, or hyaluronidase. Tell the treating clinician about any filler history.</p>
    `,
  },
  {
    id: 'faq-insurance',
    category: 'faq',
    title: 'Who pays if something goes wrong?',
    tldr: 'Emergencies are covered as medical care; aesthetic fixes are not — and non-medical injectors may carry no insurance.',
    bodyHtml: `
      <p>Across Europe, emergency care for a complication (vascular occlusion, infection) is covered as medical necessity, but dissolving or revising filler for aesthetic dissatisfaction is self-pay. Non-medical injectors may carry no indemnity insurance at all — one driver of the UK's incoming licensing scheme. Ask about complication cover before you book, not after.</p>
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
    intro: 'What HA fillers are, and how long they really last.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you book',
    intro: 'What fillers can fix, and how to choose the person holding the needle.',
    sections: context,
  },
  {
    id: 'uses',
    title: 'Where fillers work, by area',
    intro: 'Every treatment area graded by trial evidence — with typical volumes, downtime, and prices.',
    sections: uses,
  },
  {
    id: 'boosters',
    title: 'Skin-quality injectables',
    intro: 'Skin boosters and "bioremodelling" — hydration products, graded honestly.',
    sections: boosters,
  },
  {
    id: 'alternatives',
    title: 'Alternatives & the exit option',
    intro: 'Biostimulators, and the enzyme that makes HA uniquely forgiving.',
    sections: alternatives,
  },
  {
    id: 'safety',
    title: 'Safety — the full picture',
    intro: 'Common, delayed, and rare-but-serious. Read this section before any consultation.',
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
  volume: 'Volume',
  lines: 'Lines',
  contour: 'Contour',
  'skin-quality': 'Skin quality',
  'off-label': 'Off-label',
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
