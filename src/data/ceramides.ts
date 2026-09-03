/**
 * Ceramides guide — single source of truth.
 *
 * Consumed by /ceramides. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Editorial spine: barrier lipids graded by trial evidence across every form —
 * topical (physiological and pseudo-ceramides), oral phytoceramides, boosters —
 * with the skin-vs-blood ceramide distinction made explicit.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'hydration' | 'eczema' | 'aging' | 'tolerance' | 'hair' | 'heart' | 'general';

export type SectionCategory = 'concept' | 'context' | 'topical' | 'oral' | 'booster' | 'safety' | 'faq';

export interface Section {
  id: string;
  category: SectionCategory;
  title: string;
  tldr: string;
  evidence?: Evidence;
  focus?: FocusArea;
  bodyHtml: string;
  /** "Top pick: …" notes drive the product comparison cards. */
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
  'Ceramides are roughly half the lipid "mortar" of your skin barrier, and they fall with age, winter, and eczema — restoring them measurably improves hydration and water loss within weeks.',
  'The evidence does not follow the price tag: synthetic pseudo-ceramides in drugstore lines (Curél-type) have the best randomized-trial record; prestige "skin-identical" creams rest mostly on open-label pilots.',
  'For aged skin the best-supported use is tolerance and maintenance — buffering retinoids and acne treatments — not wrinkle reduction, where no vehicle-controlled trial shows ceramides beat a plain moisturizer.',
  'Oral phytoceramides pool to a small, real improvement in hydration and water loss across seven RCTs — sponsor-run, instrument-measured, and possibly driven by the accompanying plant lipids rather than the ceramide.',
  'The "ceramide test" your cardiologist mentions measures a different molecule in a different place: short-chain liver ceramides in blood predict heart risk; skin ceramides never enter the bloodstream.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-are-ceramides',
    category: 'concept',
    title: 'What ceramides are — and the ratio that matters',
    tldr: 'Waxy lipids that, with cholesterol and fatty acids, form the mortar between skin cells. Ratio and structure decide whether the wall holds water.',
    bodyHtml: `
      <p>Your outermost skin layer is bricks and mortar: flattened dead cells set in sheets of lipid. Ceramides are about half of that mortar by weight, alongside cholesterol and free fatty acids in a roughly equimolar mix. There are a dozen-plus ceramide subclasses; on labels you'll meet <strong>NP</strong> ("ceramide 3"), <strong>AP</strong> ("6-II"), and <strong>EOP</strong> ("ceramide 1"), the very-long acylceramide that aged and atopic skin lacks most.</p>
      <p>Two structural facts drive everything in this guide. First, the lipids only work when stacked in ordered lamellar sheets — which is why <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5801391/" rel="noopener nofollow" target="_blank">ex vivo studies</a> show applied ceramides tightening lipid packing in damaged skin, and why a ceramide floating in a watery gel may never leave the surface. Second, the <em>ratio</em> matters: applying ceramides alone can slow barrier recovery; the physiological mix with cholesterol and fatty acids speeds it — and in older skin, cholesterol-dominant blends did best in the classic barrier-recovery work. A cream listing named ceramides plus cholesterol and a fatty acid is mimicking biology; a "ceramide complex" after the preservative is mimicking marketing.</p>
    `,
  },
  {
    id: 'why-they-decline',
    category: 'concept',
    title: 'Why your ceramides fall — age, winter, eczema',
    tldr: 'Ceramide synthesis slows with age, dips every winter, and is impaired in atopic skin — the barrier leaks, and leaking skin inflames.',
    bodyHtml: `
      <p>Skin ceramide levels decline with age and drop seasonally in winter — one reason "my skin changes in November" is physiology, not imagination. Atopic dermatitis skin has both fewer ceramides and the wrong ones (shorter chains, less EOP), which is why the barrier leaks even between flares. UV and harsh surfactants add insult.</p>
      <p>The consequence is measurable as <strong>transepidermal water loss (TEWL)</strong>: a leaky barrier loses water, dries, and lets irritants in — triggering low-grade inflammation that dermatologists increasingly link to visible aging ("inflammaging"). That chain — fewer ceramides → higher TEWL → irritation → inflammation — is the mechanistic case for every product below. What each product must then prove is that it closes the gap better than any decent moisturizer, and that bar turns out to be harder to clear than the biology suggests.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'reading-the-label',
    category: 'context',
    title: 'Reading a ceramide label (cream or capsule)',
    tldr: 'Named subclasses + cholesterol + fatty acid, a lamellar delivery, and — for capsules — milligrams of glucosylceramide, not extract weight.',
    bodyHtml: `
      <p><strong>Creams:</strong></p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Named ceramides</strong> (NP, AP, EOP, NS, AS) beat an unnamed "ceramide complex"; EOP is the one aged skin is shortest on.</li>
        <li><strong>Pseudo-ceramides</strong> — "cetyl-PG hydroxyethyl palmitamide" (Kao/Curél) or "hydroxypropyl bispalmitamide MEA" (NeoPharm/Zeroid/Atopalm) — are synthetic mimics with the <em>best</em> trial record. Don't discount them.</li>
        <li><strong>Companions:</strong> cholesterol and a fatty acid or phytosphingosine alongside — ceramides alone are the wrong ratio.</li>
        <li><strong>Delivery:</strong> "MVE", "multi-lamellar emulsion", or liposomal claims are credible signals that the lipid can reach the lamellae.</li>
      </ul>
      <p><strong>Capsules:</strong> the label number to find is <em>milligrams of glucosylceramide</em>. "30 mg Ceramosides" delivers ~1.7 mg glucosylceramide plus ~11 mg of a wheat galactolipid (DGDG); "350 mg Lipowheat" is the classic trial dose; "40 mg Oryza Ceramide" is ~1.2 mg. Trials that worked used 0.4–30 mg of ceramide a day — more is not evidenced.</p>
    `,
  },
  {
    id: 'routine-and-prices',
    category: 'context',
    title: 'Where they fit in a routine, timelines, and what they cost',
    tldr: 'After retinoids, richer in winter, paired with niacinamide; hydration improves in days, texture at 4–8 weeks. Drugstore lines carry the best data.',
    bodyHtml: `
      <p><strong>Placement:</strong> apply the ceramide cream over (or sandwiched around) your retinoid — the split-face data on fewer dropouts from irritation sit exactly there. Switch to a richer lamellar cream with cholesterol and fatty acids when the weather turns. Niacinamide 2–5% and lactic acid 5–12% pair logically as boosters of your own ceramide output; urea 5–10% for body dryness. Post-procedure, a bland ceramide cream is sensible once the skin has re-epithelialised.</p>
      <p><strong>Timelines from the trials:</strong> topical hydration and TEWL improve within 24 hours and keep improving over 2–4 weeks; expert-graded texture changes appeared at 4–8 weeks. Oral: TEWL changes at 4 weeks in some trials, significance often only at 12 — give capsules 8–12 weeks with a fat-containing meal before judging.</p>
      <p><strong>Prices (indicative, Europe):</strong> CeraVe-class tubs €15–25; Curél facial cream €20–30; mid-tier (Dr Jart+, Zeroid/Atopalm, Elizabeth Arden capsules) €30–80; SkinCeuticals Triple Lipid Restore ~€130–160 for 48 ml; a month or two of phytoceramide capsules €20–45. The evidence gradient runs opposite to the price gradient.</p>
    `,
  },
];

const topical: Section[] = [
  {
    id: 'topical-dry-skin',
    category: 'topical',
    title: 'Topical ceramides for dry skin & barrier repair',
    tldr: 'Consistent trials show better hydration and lower water loss — and applied ceramides do integrate into the barrier, formulation permitting.',
    evidence: 'moderate',
    focus: 'hydration',
    note: 'Top pick: CeraVe Moisturising Cream (MVE delivery, ceramides NP/AP/EOP + cholesterol)',
    sessions: 'Daily, ongoing',
    cost: '€15–30',
    bodyHtml: `
      <p>This is the core claim and it holds: ceramide-containing moisturizers raise corneometry (hydration) and lower TEWL in dry skin across multiple randomized and split-body trials, with effects visible within a day and building over weeks. Mechanistically they are more than an occlusive film — <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5801391/" rel="noopener nofollow" target="_blank">ex vivo human skin work</a> shows applied ceramides tightening lipid packing in compromised barrier, and Kao reports daily use <a href="https://www.cosmeticsandtoiletries.com/research/literature-data/news/21843581/kao-finds-daily-skin-care-shifts-atopic-to-healthy-ceramide-profile" rel="noopener nofollow" target="_blank">shifting an atopic ceramide profile toward a healthy one</a>.</p>
      <p>Why "moderate" rather than "strong": nearly every trial is manufacturer-run, and the honest comparison — ceramide cream versus an equally rich <em>non</em>-ceramide cream — shows a smaller gap than the marketing implies. Formulation is the swing factor: lamellar/MVE vehicles with cholesterol and fatty acids are the ones with data.</p>
    `,
  },
  {
    id: 'topical-pseudo',
    category: 'topical',
    title: 'Pseudo-ceramides (Curél, Zeroid/Atopalm class)',
    tldr: 'Synthetic mimics with the best-controlled human trials of any topical ceramide — including an RCT recovering the molecule from inside the skin.',
    evidence: 'moderate',
    focus: 'hydration',
    note: 'Top pick: Curél Intensive Moisture Cream (Kao pseudo-ceramide + eucalyptus)',
    sessions: 'Daily, ongoing',
    cost: '€20–35',
    bodyHtml: `
      <p>Counter-intuitive but true: the cheaper synthetic mimics — Kao's cetyl-PG hydroxyethyl palmitamide (Curél) and NeoPharm's multi-lamellar pseudo-ceramide emulsions (Zeroid, Atopalm) — carry the largest randomized-trial base in the category. Kao's 2025 RCT is the clearest demonstration that an applied pseudo-ceramide is measurable <em>inside</em> the stratum-corneum lipid after four weeks, with the amount absorbed tracking barrier improvement; NeoPharm's emulsions have a 2024 RCT as a steroid adjunct in eczema.</p>
      <p>Stable, inexpensive, and evidenced — if you buy one ceramide cream on data alone, this class is the rational choice. The catch is only aesthetic: they are unglamorous.</p>
    `,
  },
  {
    id: 'topical-eczema',
    category: 'topical',
    title: 'Eczema maintenance & steroid-sparing',
    tldr: 'Meta-analysis: ceramide emollients modestly beat other moisturizers on eczema scores and cut steroid use — but the pooled water-loss effect was null.',
    evidence: 'moderate',
    focus: 'eczema',
    sessions: 'Twice daily',
    cost: '€15–40',
    bodyHtml: `
      <p>Ceramide-dominant emollients are the rational maintenance cream for atopic skin, and several RCTs support them as adjuncts that reduce flare frequency and steroid need. Kept honest by the numbers: a <a href="https://pubmed.ncbi.nlm.nih.gov/37151263/" rel="noopener nofollow" target="_blank">2023 meta-analysis of five trials</a> found a statistically significant but clinically tiny SCORAD advantage over non-ceramide moisturizers (−0.98 on a 0–103 scale) and <strong>no significant difference in TEWL</strong> (high heterogeneity). Prescription ceramide-dominant creams (EpiCeram in the US) exist for the same purpose.</p>
      <p>Verdict: excellent daily maintenance, a good way to use less steroid — not a replacement for flare treatment, and not dramatically better than any well-made rich emollient.</p>
    `,
  },
  {
    id: 'topical-retinoid-buffer',
    category: 'topical',
    title: 'Buffering retinoid, acne & rosacea treatments',
    tldr: 'The best aging-relevant use: split-face RCTs show ceramide moisturizers cut the redness, scaling, and dropouts that tretinoin and acne drugs cause.',
    evidence: 'moderate',
    focus: 'tolerance',
    sessions: 'With each retinoid dose',
    cost: '€15–40',
    bodyHtml: `
      <p>For an anti-aging routine, this is where ceramides earn their place. A randomized, investigator-blinded split-face study found a moisturizer containing a ceramide precursor <a href="https://pubmed.ncbi.nlm.nih.gov/23135655/" rel="noopener nofollow" target="_blank">improved tolerability of 0.05% tretinoin</a>; ceramide cleanser-plus-moisturizer regimens <a href="https://pubmed.ncbi.nlm.nih.gov/37276158/" rel="noopener nofollow" target="_blank">reduced dryness, redness, and scaling during acne treatment</a>; a <a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.16212" rel="noopener nofollow" target="_blank">2024 double-blinded split-face RCT</a> tested a ceramide-niacinamide moisturizer alongside anti-acne actives; and a 102-person rosacea study found less burning with azelaic acid when a ceramide moisturizer was added.</p>
      <p>The open question is how much is "ceramide" versus "any good moisturizer" — but since the practical advice is identical (use one, every time), it hardly matters. Retinoids are the engine of your routine; ceramides are what keep you in the car.</p>
    `,
  },
  {
    id: 'topical-antiaging',
    category: 'topical',
    title: 'Ceramide creams for wrinkles & aged skin',
    tldr: 'Hydration softens fine lines within hours; the one 8-week study in 55–75-year-olds had no vehicle control. No trial shows ceramides beat a plain moisturizer on wrinkles.',
    evidence: 'emerging',
    focus: 'aging',
    note: 'Top pick: SkinCeuticals Triple Lipid Restore 2:4:2 (cholesterol-dominant physiological ratio)',
    sessions: 'Daily',
    cost: '€130–160 (prestige)',
    bodyHtml: `
      <p>The flagship anti-aging ceramide product, SkinCeuticals' 2:4:2, has the best rationale in the category — a cholesterol-dominant ratio derived from the barrier-recovery science in older skin — and modest proof: an <a href="https://jddonline.com/articles/pilot-evaluation-of-a-novel-topical-formulation-containing-high-level-cholesterol-dominant-physiolog-S1545961616P1513X" rel="noopener nofollow" target="_blank">8-week open-label pilot</a> in subjects aged 55–75 with blinded grading of nine facial attributes, TEWL and hydration improvements, and lipidomics showing more ceramides and cholesterol in the skin. Funded by L'Oréal, no vehicle control. The retailer's "66% smoother" figures come from that uncontrolled study; Elizabeth Arden's capsule studies are brand-reported and unpublished.</p>
      <p>What no trial shows: that adding ceramides to a moisturizer reduces wrinkles more than the moisturizer alone. Any humectant smooths dehydration lines within hours. Buy a ceramide cream for barrier and tolerance; buy retinoids, sunscreen, and in-office resurfacing for wrinkles.</p>
    `,
  },
  {
    id: 'topical-steroid-replace',
    category: 'topical',
    title: 'Ceramide cream instead of a topical steroid',
    tldr: 'In the only head-to-head RCT (121 children), the steroid worked faster; the ceramide cream only caught up by day 28. Maintenance, not flare treatment.',
    evidence: 'limited',
    focus: 'eczema',
    bodyHtml: `
      <p>A recurring hope — "can I skip the steroid?" — with one direct test: a 121-child randomized trial of a prescription ceramide-dominant cream against fluticasone found the steroid cleared flares faster, with the ceramide cream catching up only at four weeks. Ceramide emollients are the right thing to use <em>between</em> flares and reduce how much steroid you need over time; during a flare, the steroid (or the modern non-steroid alternatives) does the job. The pooled evidence above shows why: the ceramide-specific advantage over other moisturizers is real but small.</p>
    `,
  },
  {
    id: 'topical-post-procedure',
    category: 'topical',
    title: 'Post-laser / post-peel recovery',
    tldr: 'Sensible as a bland barrier cream once re-epithelialised — but only small open-label manufacturer studies exist.',
    evidence: 'limited',
    focus: 'tolerance',
    bodyHtml: `
      <p>Ceramide creams are widely recommended after resurfacing, peels, and microneedling, and the logic is sound: a freshly wounded barrier needs lipids, and these formulas are typically fragrance-light and bland. The trial base, though, is open-label manufacturer work — no controlled study shows faster healing than petrolatum or any other bland emollient. Use one if you like it; don't pay a premium for the "post-procedure" label. (Timing and what to avoid after each procedure lives in our <a href="/laser-ipl">laser</a>, <a href="/chemical-peels">peel</a>, and <a href="/microneedling">microneedling</a> guides.)</p>
    `,
  },
];

const oral: Section[] = [
  {
    id: 'oral-hydration',
    category: 'oral',
    title: 'Oral phytoceramides for dry skin (wheat-derived)',
    tldr: 'Seven RCTs pool to a small real gain in hydration and lower water loss — sponsor-run, instrument-measured, often not significant on the face.',
    evidence: 'moderate',
    focus: 'hydration',
    note: 'Top pick: a Ceramosides- or Lipowheat-based capsule — check the mg of glucosylceramide',
    sessions: '12 weeks to judge',
    cost: '€20–45/month',
    bodyHtml: `
      <p>Wheat-derived "phytoceramides" (Lipowheat, Ceramosides, Ceratiq) are the category leaders. A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9201759/" rel="noopener nofollow" target="_blank">systematic review and meta-analysis</a> of seven RCTs (426 participants, 6–20 weeks, 0.4–30 mg ceramide/day) found a small-to-moderate hydration effect (SMD +0.40) and lower TEWL (SMD −0.29). The classic <a href="https://pubmed.ncbi.nlm.nih.gov/20646083/" rel="noopener nofollow" target="_blank">Lipowheat trial</a> (51 women, 350 mg/day, 12 weeks) improved arm and leg hydration versus placebo — but <strong>not the face</strong>, and dermatologist-scored dryness didn't differ.</p>
      <p>Two honest footnotes: every trial is manufacturer-linked, and wheat "ceramide" products are mostly galactolipids (DGDG) with a sliver of glucosylceramide — the active may not be the ceramide at all. Regulatory: Seppic's wheat lipids hold a US <a href="https://www.fda.gov/media/139256/download" rel="noopener nofollow" target="_blank">FDA GRAS notice</a>; no EFSA-authorised health claim exists, so "hydration from within" on EU packaging is an unauthorised claim.</p>
    `,
  },
  {
    id: 'oral-alt-sources',
    category: 'oral',
    title: 'Rice, konjac & other wheat-free sources',
    tldr: 'Small placebo-controlled trials (rice n=44; konjac; wine lees) show TEWL improvements — and hint the sterols and galactolipids may be doing the work.',
    evidence: 'emerging',
    focus: 'hydration',
    note: 'Top pick: an Oryza Ceramide (rice) capsule — the wheat-free option with an RCT',
    sessions: '12 weeks',
    cost: '€20–40/month',
    bodyHtml: `
      <p>For anyone avoiding wheat, rice and konjac extracts have their own (small) trials. <a href="https://www.researchgate.net/publication/354265558_Oryza_CeramideR_a_rice-derived_extract_consisting_of_glucosylceramides_and_b-sitosterol_glucoside_improves_facial_skin_dehydration_in_Japanese_subjects" rel="noopener nofollow" target="_blank">Oryza Ceramide</a> (44 women, 40 mg/day, 12 weeks, double-blind) lowered cheek TEWL at weeks 4 and 12 — though its β-sitosterol glucoside raises skin ceramides on its own in <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7939263/" rel="noopener nofollow" target="_blank">reconstructed epidermis</a>, so the credit is shared. Konjac glucosylceramide reduced surfactant-induced TEWL in a <a href="https://www.jstage.jst.go.jp/article/jhs/54/5/54_5_559/_article" rel="noopener nofollow" target="_blank">100-person double-blind study</a>; a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11243426/" rel="noopener nofollow" target="_blank">2024 wine-lees ceramide RCT</a> (29 completers) improved TEWL at week 12 but not hydration, itch, or quality of life.</p>
      <p>Same pattern as wheat: measurable instrument changes, sponsor authorship, small samples. Reasonable to try for body dryness; expect nothing visible on the face.</p>
    `,
  },
  {
    id: 'oral-wrinkles',
    category: 'oral',
    title: 'Oral ceramides for wrinkles',
    tldr: 'One 60-person Seppic study and a milk-ceramide RCT report wrinkle-parameter changes — not pooled, not independently replicated.',
    evidence: 'emerging',
    focus: 'aging',
    sessions: '8–12 weeks',
    cost: '€20–45/month',
    bodyHtml: `
      <p>Wrinkle claims for capsules rest on thin ground: Seppic's <a href="https://www.researchgate.net/publication/319969297_Improving_Skin_Hydration_and_Age-related_Symptoms_by_Oral_Administration_of_Wheat_Glucosylceramides_and_Digalactosyl_Diglycerides_A_Human_Clinical_Study" rel="noopener nofollow" target="_blank">60-volunteer study</a> (60 days, 30 mg Ceramosides) reported reduced wrinkle parameters alongside hydration; a <a href="https://www.sciencedirect.com/science/article/pii/S1756464624000100" rel="noopener nofollow" target="_blank">12-week milk-ceramide RCT</a> measured elasticity and eye wrinkles; a <a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.16130" rel="noopener nofollow" target="_blank">2024 Seppic trial</a> in women with mild-to-moderate aging exists. No wrinkle endpoint has been pooled, and no independent replication exists. If hydration rises, fine dehydration lines soften — that is the honest ceiling.</p>
    `,
  },
  {
    id: 'oral-eczema',
    category: 'oral',
    title: 'Oral ceramides for eczema',
    tldr: 'One two-week study of 50 children from 2006, never replicated at scale.',
    evidence: 'limited',
    focus: 'eczema',
    bodyHtml: `
      <p>The only clinical-population trial is striking and lonely: <a href="https://pubmed.ncbi.nlm.nih.gov/16918640/" rel="noopener nofollow" target="_blank">Kimata 2006</a> gave 25 children with moderate atopic dermatitis 1.8 mg/day of konjac ceramide for two weeks and reported lower eczema scores, prick-test reactivity, and dust-mite IgE versus 25 controls. Big immunological claims from a tiny dose over 14 days, two decades ago, with no replication — a hypothesis, not a treatment. Keep the emollients and the dermatologist.</p>
    `,
  },
  {
    id: 'oral-plasma',
    category: 'oral',
    title: 'Do skin-ceramide capsules affect "bad" blood ceramides?',
    tldr: 'Unknown — no trial measured it. Gut hydrolysis, efflux, and milligram doses against hundreds of dietary milligrams make an effect implausible, not proven absent.',
    evidence: 'limited',
    focus: 'heart',
    bodyHtml: `
      <p>Because plasma ceramides are now a heart-risk biomarker (see the safety section), a fair question is whether swallowing ceramides raises them. Nobody has checked — no supplement trial measured blood ceramides. Biology argues against a meaningful effect: plant glucosylceramides are not absorbed intact but <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2882739/" rel="noopener nofollow" target="_blank">hydrolysed to sphingoid bases</a>, which are <a href="https://pubmed.ncbi.nlm.nih.gov/28367925/" rel="noopener nofollow" target="_blank">actively pumped back into the gut</a> and largely burned as fatty acids; and supplement doses (1–30 mg) are trivial against the <a href="https://downloads.regulations.gov/FDA-2005-S-0518-0062/content.pdf" rel="noopener nofollow" target="_blank">~300–400 mg of sphingolipids</a> a European eats daily in dairy, eggs, and soy. Implausible — and untested. Neither "heart-safe" nor "heart-risky" claims have data.</p>
    `,
  },
];

const boosters: Section[] = [
  {
    id: 'booster-niacinamide',
    category: 'booster',
    title: 'Niacinamide — the best-evidenced ceramide booster',
    tldr: 'Raises your own ceramide synthesis several-fold in keratinocytes and increases skin ceramides while lowering water loss in humans — with a large wider RCT base.',
    evidence: 'moderate',
    focus: 'hydration',
    note: 'Top pick: any well-formulated 4–5% niacinamide serum, morning and night',
    sessions: 'Daily',
    cost: '€10–60',
    bodyHtml: `
      <p>Rather than importing ceramides, niacinamide makes your skin build more. Tanno's <a href="https://pubmed.ncbi.nlm.nih.gov/10971324/" rel="noopener nofollow" target="_blank">British Journal of Dermatology study</a> found nicotinamide raised ceramide synthesis 4–5-fold in cultured keratinocytes via the rate-limiting enzyme, and topical use increased stratum-corneum ceramides and free fatty acids while lowering TEWL in dry skin; a <a href="https://www.nature.com/articles/s41598-025-88899-0" rel="noopener nofollow" target="_blank">2025 study</a> extends the hydration and structure data. Niacinamide's broader trial record — barrier, pigmentation, fine lines — is larger than that of ceramides themselves, at a fraction of prestige-cream prices. The logical pairing: niacinamide serum under a ceramide cream.</p>
    `,
  },
  {
    id: 'booster-omega',
    category: 'booster',
    title: 'Oral omega-3 / omega-6 oils for the barrier',
    tldr: 'Small double-blind trials: flaxseed and borage oil lowered TEWL, roughness, and scaling over 12 weeks.',
    evidence: 'moderate',
    focus: 'hydration',
    sessions: '12 weeks',
    cost: '€10–25/month',
    bodyHtml: `
      <p>The oral route with the most consistent barrier data is not ceramides but essential fatty acids. In a <a href="https://pubmed.ncbi.nlm.nih.gov/21088453/" rel="noopener nofollow" target="_blank">12-week double-blind trial</a>, flaxseed oil reduced skin sensitivity, TEWL, roughness, and scaling while raising hydration; <a href="https://www.cambridge.org/core/journals/british-journal-of-nutrition/article/intervention-with-flaxseed-and-borage-oil-supplements-modulates-skin-condition-in-women/BBCCBB4F29A6E5DCA6C7B9513C7AFA37" rel="noopener nofollow" target="_blank">flaxseed and borage oil</a> both improved roughness and scaling in the British Journal of Nutrition; krill-oil pilots point the same way. Trials of 13 women per arm, so "moderate" for consistency rather than size — and cheap enough that a 12-week experiment costs less than one prestige cream.</p>
    `,
  },
  {
    id: 'booster-urea',
    category: 'booster',
    title: 'Urea (5–10%)',
    tldr: 'Among the best-documented emollient actives for dry body skin; its ceramide-synthesis claim is a bonus, not the reason to use it.',
    evidence: 'moderate',
    focus: 'hydration',
    sessions: 'Daily (body)',
    cost: '€8–20',
    bodyHtml: `
      <p>Urea is a humectant and keratolytic with decades of clinical documentation for xerosis — Cochrane-level support as an emollient active. It is also reported to up-regulate barrier-lipid gene expression, which is why it appears on "ceramide booster" lists; the clinical case, though, was already made by hydration and scaling outcomes long before that mechanism was described. Rough shins, heels, and winter arms: 5–10% urea cream is the evidence-cheap answer.</p>
    `,
  },
  {
    id: 'booster-lactic',
    category: 'booster',
    title: 'Lactic acid',
    tldr: 'One classic study: L-lactic acid raised skin ceramides ~38% and improved barrier resistance. Industry-origin, rarely replicated.',
    evidence: 'emerging',
    focus: 'hydration',
    sessions: '2–3×/week',
    cost: '€10–30',
    bodyHtml: `
      <p>Beyond exfoliation, lactic acid has a specific ceramide story: Rawlings' <a href="https://pubmed.ncbi.nlm.nih.gov/8818186/" rel="noopener nofollow" target="_blank">1996 study</a> found the L-isomer raised keratinocyte ceramide production ~300% in vitro and stratum-corneum ceramides +38% in vivo, with better resistance to dryness — the D-isomer did nothing, so the form matters. A single Unilever-origin study, seldom replicated: a plausible bonus from an exfoliant you might use anyway, not a reason to start one.</p>
    `,
  },
  {
    id: 'booster-eucalyptus',
    category: 'booster',
    title: 'Eucalyptus extract (Kao)',
    tldr: 'Increases ceramide synthesis in keratinocytes; in humans it is always co-formulated with a pseudo-ceramide, so its own contribution is untested.',
    evidence: 'emerging',
    focus: 'hydration',
    bodyHtml: `
      <p>Kao's eucalyptus-leaf extract (macrocarpal A) raised ceramide, glucosylceramide, and sphingomyelin synthesis <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1468-2494.2011.00675.x" rel="noopener nofollow" target="_blank">dose-dependently in keratinocytes</a> — and appears in every Curél trial alongside the pseudo-ceramide, which means the clinical credit can't be separated. Mechanistic support, no solo human data: a fine ingredient to see on the label, not one to chase.</p>
    `,
  },
  {
    id: 'hair-ceramides',
    category: 'booster',
    title: 'Ceramides in shampoos & conditioners',
    tldr: 'Supplier tress tests show smoother cuticles and less breakage; no human hair trial, and rinse-off is the least plausible delivery.',
    evidence: 'limited',
    focus: 'hair',
    bodyHtml: `
      <p>Hair cuticle lipids do contain ceramides, and ceramide-2 analogues in conditioners improve combability and break-strength in <a href="https://www.cosmeticsandtoiletries.com/research/literature-data/article/21837070/restoring-hair-and-scalp-health-ceramide2-analog-for-conditioning-and-barrier-benefits" rel="noopener nofollow" target="_blank">ingredient-supplier tress studies</a>. A lab-synthesised ceramide <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7992683/" rel="noopener nofollow" target="_blank">stimulated dermal-papilla cells in culture</a> — no human hair-growth trial followed. The one clinical scalp study is Kao's <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5896640/" rel="noopener nofollow" target="_blank">leave-on pseudo-ceramide lotion for dry scalp</a>. Verdict: pleasant conditioning chemistry; "repairs hair" is a tress-test claim, and shampoo is the wrong vehicle for it.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety',
    category: 'safety',
    title: 'Safety: creams, capsules, allergens, pregnancy',
    tldr: 'Topical: about as safe as skincare gets. Oral: no adverse-event signal short-term; wheat products are wheat allergens; no pregnancy data.',
    bodyHtml: `
      <p><strong>Topical.</strong> Ceramides are skin-identical or close analogues used at ~0.5–10% with a clean <a href="https://www.sciencedirect.com/science/article/abs/pii/S027869151530020X" rel="noopener nofollow" target="_blank">safety assessment</a>; sensitisation is rare (a single case report to a synthetic ceramide), and reactions to "ceramide creams" are almost always to fragrance or preservatives. A skin-identical ceramide complex was even trialled <em>in</em> contact-dermatitis patients.</p>
      <p><strong>Oral.</strong> Across the meta-analysed trials, no product-related adverse events; the wine-lees RCT found no biochemical or haematological signal over 12 weeks. The specific cautions: wheat-derived products (Lipowheat, Ceramosides, Ceratiq) are <strong>wheat allergens regardless of gluten content</strong> — out for wheat allergy, and for coeliac disease trust only a batch gluten certificate; milk-ceramide products are a dairy allergen; every trial excluded pregnant and breastfeeding women, so there is no safety data; no drug interactions are reported; and trials ran 2–20 weeks, so long-term safety rests on dietary exposure rather than product data.</p>
    `,
  },
  {
    id: 'blood-vs-skin',
    category: 'safety',
    title: 'Skin ceramides vs blood ceramides — the heart-test confusion',
    tldr: 'A plasma "ceramide score" is a validated cardiovascular biomarker. Same word, different molecule, different compartment — nothing to do with your moisturizer.',
    bodyHtml: `
      <p>If a cardiologist has mentioned ceramides, they meant the <a href="https://www.mayocliniclabs.com/test-catalog/overview/606777" rel="noopener nofollow" target="_blank">plasma ceramide test</a>: specific short-chain ceramides (C16, C18, C24:1) made mainly by the liver under metabolic stress, carried on LDL/VLDL, and combined into a 0–12 CERT score that predicts heart attack and death within five years independently of LDL and CRP — validated in <a href="https://www.ahajournals.org/doi/10.1161/ATVBAHA.120.315530" rel="noopener nofollow" target="_blank">community cohorts</a> and reviewed <a href="https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2020.570628/full" rel="noopener nofollow" target="_blank">extensively</a>. Those ceramides fall with diet, exercise, statins, and PCSK9 inhibitors; direct ceramide-lowering drugs are <a href="https://www.frontiersin.org/journals/cardiovascular-medicine/articles/10.3389/fcvm.2025.1656113/full" rel="noopener nofollow" target="_blank">preclinical</a>.</p>
      <p>Skin ceramides are structural, very-long-chain lipids locked into the barrier's lamellae; they never circulate. So: a high CERT score is a reason to see a cardiologist, not to change your face cream — and a ceramide cream is no reason to worry about your heart. Whether <em>capsules</em> touch plasma ceramides is simply unmeasured (see the oral section).</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-get-in',
    category: 'faq',
    title: 'Do ceramide creams put ceramides back in, or just sit on top?',
    tldr: 'Both — depending on the formula. Lamellar vehicles with cholesterol get in; watery gels mostly don\'t.',
    bodyHtml: `
      <p>Ex vivo skin studies show applied ceramides tightening lipid packing in damaged barrier, and a 2025 RCT recovered a pseudo-ceramide from inside the stratum corneum after four weeks, with absorption tracking improvement. A ceramide in a thin lotion without cholesterol, fatty acids, and a lamellar structure probably stays on the surface. The label tells you which one you bought.</p>
    `,
  },
  {
    id: 'faq-real-vs-pseudo',
    category: 'faq',
    title: '"Real" ceramides or synthetic pseudo-ceramides?',
    tldr: 'The pseudo-ceramides have the better trial record; "real" ones have the better rationale.',
    bodyHtml: `
      <p>Counter-intuitively, Kao's and NeoPharm's synthetic mimics carry the larger, better-controlled human trial base. Physiological ceramides (NP/AP/EOP, ideally cholesterol-dominant for skin over 55) have the stronger biological argument but mostly open-label data. On evidence alone, a drugstore pseudo-ceramide cream is the rational buy; on rationale, a physiological-ratio cream is the thoughtful splurge.</p>
    `,
  },
  {
    id: 'faq-wrinkles',
    category: 'faq',
    title: 'Will a ceramide cream reduce my wrinkles?',
    tldr: 'It hydrates within days — which softens fine lines. Beyond that, unproven.',
    bodyHtml: `
      <p>Hydration and water loss improve quickly, softening dehydration lines; the one 8-week study in 55–75-year-olds showing smoother, firmer-graded skin had no vehicle control. No trial shows ceramides beat a good plain moisturizer on wrinkles. Use them for barrier and retinoid tolerance; leave wrinkle work to retinoids, sunscreen, and resurfacing.</p>
    `,
  },
  {
    id: 'faq-capsules',
    category: 'faq',
    title: 'Do phytoceramide capsules work?',
    tldr: 'Measurably, a little — on body hydration, in sponsor trials. Not visibly on the face.',
    bodyHtml: `
      <p>Seven RCTs pool to a small hydration gain and a small TEWL reduction over 6–20 weeks. The classic trial found no facial effect, wrinkle data are one or two sponsor studies, and the active may be the accompanying plant lipids. Reasonable 12-week experiment for dry body skin at €20–45 a month; keep expectations instrumental, not cosmetic.</p>
    `,
  },
  {
    id: 'faq-eczema',
    category: 'faq',
    title: 'I have eczema — can a ceramide cream replace my steroid?',
    tldr: 'No. Maintenance yes, flare treatment no.',
    bodyHtml: `
      <p>In the only head-to-head RCT, the steroid cleared flares faster and the ceramide cream only caught up at four weeks. Ceramide emollients are excellent between flares and reduce steroid use over time; their pooled advantage over other rich moisturizers is small. Keep both tools and the dermatologist.</p>
    `,
  },
  {
    id: 'faq-heart',
    category: 'faq',
    title: 'My cardiologist mentioned a "ceramide test" — same thing?',
    tldr: 'No — different molecules, different compartment. Your cream is irrelevant to it.',
    bodyHtml: `
      <p>The CERT/Mayo test measures short-chain signalling ceramides made by the liver and carried in lipoproteins — a validated heart-risk marker. Skin ceramides are structural very-long-chain lipids that never enter the blood. Whether oral phytoceramides shift blood ceramides has never been measured; at milligram doses against hundreds of dietary milligrams, an effect is implausible but untested.</p>
    `,
  },
  {
    id: 'faq-gluten',
    category: 'faq',
    title: 'Are wheat-ceramide capsules safe if I avoid gluten or wheat?',
    tldr: 'Wheat allergy: no. Coeliac: only with a batch gluten certificate — or choose rice/konjac.',
    bodyHtml: `
      <p>Lipowheat, Ceramosides, and Ceratiq are wheat-derived, so they are out for wheat allergy whatever the gluten content. For coeliac disease, "gluten-free processing" claims aren't enough — rely on a batch test certificate or pick a rice or konjac product (milk-derived ones are a dairy allergen). No oral ceramide has pregnancy data.</p>
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
    intro: 'What ceramides are, the ratio that matters, and why yours decline.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Buying and using them well',
    intro: 'Label literacy, routine placement, timelines, and the price-evidence mismatch.',
    sections: context,
  },
  {
    id: 'topical',
    title: 'Topical ceramides',
    intro: 'Creams and serums, graded by what randomized trials actually show.',
    sections: topical,
  },
  {
    id: 'oral',
    title: 'Oral ceramides',
    intro: 'Phytoceramide capsules — wheat, rice, konjac — and the blood-ceramide question.',
    sections: oral,
  },
  {
    id: 'boosters',
    title: 'Boosters & other forms',
    intro: 'Ingredients that raise your own ceramide output, plus the hair-care claims.',
    sections: boosters,
  },
  {
    id: 'safety',
    title: 'Safety & the heart-test confusion',
    intro: 'Allergens, pregnancy, and why skin ceramides are not blood ceramides.',
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
  hydration: 'Hydration',
  eczema: 'Eczema',
  aging: 'Aging',
  tolerance: 'Tolerance',
  hair: 'Hair',
  heart: 'Heart',
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
