/**
 * Skin boosters guide — single source of truth (in-clinic layout).
 *
 * Consumed by /skin-boosters. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: a skin booster is hyaluronic acid (plain, lightly
 * cross-linked, hybrid, or mixed with glycerol, amino acids or vitamins)
 * placed in the dermis for hydration and "skin quality" rather than volume.
 * The instruments agree that hydration, firmness and radiance rise for a
 * few months; the blinded, saline-controlled trials show that some of the
 * dermal-thickness change is the needle, not the gel; and no booster has
 * more than one randomised controlled trial of its own. So the class caps
 * at moderate, the best-trialled products earn it, the "bioremodelling"
 * claim does not, and the shelf products with no trial are graded as
 * such. Regulatory status is as of September 2026; prices are indicative
 * Western/Central European and UK private rates, not quotes.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea =
  | 'face'
  | 'body'
  | 'eyes'
  | 'combo'
  | 'crosslinked'
  | 'uncrosslinked'
  | 'hybrid'
  | 'cocktail'
  | 'dna'
  | 'general';

export type SectionCategory = 'concept' | 'context' | 'use' | 'product' | 'safety' | 'faq';

export interface Section {
  id: string;
  category: SectionCategory;
  title: string;
  tldr: string;
  evidence?: Evidence;
  focus?: FocusArea;
  bodyHtml: string;
  note?: string;
  /** Rows: typical course, what to expect and price, for the expanded card. */
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
  'A skin booster is hyaluronic acid injected into the dermis in droplets rather than as a filler bolus: plain and non-cross-linked (mesotherapy), lightly cross-linked (Restylane Skinboosters, Juvéderm Volite / Skinvive, Belotero Revive), hybrid (Profhilo), or mixed with amino acids, vitamins or glycerol. It hydrates and firms the skin surface for a few months. It does not add volume, lift, or remove a fold.',
  'The best evidence is one randomised, evaluator-blind trial per product at most. Volite / Skinvive: 58% of cheeks smoother at one month against 4.5% untreated, holding six months. An amino-acid HA booster: 97.6% improved against 4% untreated in 439 people, with hydration and elasticity holding three months. Hands: HA beat saline on hydration, elasticity and roughness with improvement sustained a year.',
  'The saline-controlled trials are the honest ones. Plain HA microinjections beat saline on elasticity and blinded-panel radiance in 55 women — but dermal thickness rose on the saline side too. Profhilo\'s triple-blind split-face trial found dermal thickness "did not exceed the placebo effect" and 54.5% of participants dissatisfied. Restylane-type microdroplets showed nothing over saline in a 14-patient cheek trial. Hydration and glow are real; "remodelling" is mostly the needle.',
  'Expect the effect to peak at one to three months and fade by six: Volite\'s smoothness responder rate fell from 96% at month one to 35% at month six while hydration held to month nine; Belotero Revive\'s firmness held to 24 weeks and hydration to 36; Profhilo\'s hydration "up to 6 months". Two or three sessions a month apart, then a top-up every six months, at €250–600 a session. A package of five is a sales structure.',
  'Safety is the class\'s real strength: bumps for a day, bruising for a week, 371 adverse events across a projected 1.09 million Profhilo patients, and hyaluronidase to dissolve anything that persists. The red flags are the claims, not the gel — "collagen remodelling", "a biostimulator without downtime", and a cocktail whose contents nobody will name.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-a-booster-is',
    category: 'concept',
    title: 'What a skin booster is — and what "skin quality" means',
    tldr: 'Hyaluronic acid that binds water, placed in the dermis as many small droplets so that it hydrates and plumps the skin itself rather than the space under it. Products differ in cross-linking (none, light, hybrid), additives (glycerol, amino acids, vitamins, DNA fragments) and how long they last. "Skin quality" has a consensus definition: tone evenness, surface evenness, firmness and glow — the four things a booster claims to improve.',
    bodyHtml: `
      <p>Hyaluronic acid is the water-binding sugar of the dermis, and a filler is a cross-linked, cohesive version of it that holds shape. A booster is the opposite design: low or no cross-linking, low viscosity, spread as microdroplets through the skin with a needle, cannula or multi-needle stamp, so that it hydrates the dermis from within and, the makers argue, nudges fibroblasts. The review that named the category describes cross-linked HA substituting for "fragmented collagen in restoring extracellular matrix required for normal activity of fibroblasts", notes that "serial monthly treatments are required", and records that Restylane Skinboosters were registered in Europe "as agents specific for the improvement of skin quality" (<a href="https://pubmed.ncbi.nlm.nih.gov/26441098/" rel="noopener nofollow" target="_blank">Landau 2015</a>). A 2024 review of the whole booster shelf catalogues its "varied classifications" — HA of different chain lengths, HA with glycerol, amino acids, vitamins, peptides, polynucleotides — and their claimed benefits of hydration, elasticity and wrinkle reduction (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10938033/" rel="noopener nofollow" target="_blank">Yi 2024</a>).</p>
      <p>The target was defined by a global consensus in 2021: good skin quality is "healthy, youthful in appearance, undamaged skin", describable in every ethnicity by four "emergent perceptual categories" — skin tone evenness, skin surface evenness, skin firmness and skin glow — which can arise from deep layers as much as the surface, so that "topical approaches may not be sufficient" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8214518/" rel="noopener nofollow" target="_blank">Goldie 2021</a>); a 2025 algorithm maps treatments to each category (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12374567/" rel="noopener nofollow" target="_blank">Kerscher 2025</a>). Boosters sit in the firmness and glow columns. Volume belongs to the <a href="/fillers">filler guide</a>, collagen stimulation to the <a href="/regenerative-aesthetics">biostimulator guide</a>, and the surface itself to <a href="/retinoids">retinoids</a> and <a href="/laser-ipl">lasers</a>.</p>
    `,
  },
  {
    id: 'what-trials-measure',
    category: 'concept',
    title: 'What the trials measure — instruments, blinded photographs, and the needle problem',
    tldr: 'Corneometers for hydration, cutometers for firmness, ultrasound for dermal density, 3D cameras for pores, and blinded panels for radiance. The instruments move reliably. The catch is the control: in the saline-controlled trials, dermal thickness rose on the placebo side too, because a hundred needle punctures are themselves a treatment. Only a handful of booster trials have a sham arm, and those are the ones to read first.',
    bodyHtml: `
      <p>The measurements are real and mostly small. In the largest randomised booster trial, a cheek-smoothness scale and a fine-lines scale graded by blinded evaluators separated treatment from no treatment cleanly (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10292578/" rel="noopener nofollow" target="_blank">Alexiades 2023</a>); in a 60-person randomised trial against saline, a corneometer found hydration higher on HA while a cutometer found no difference in elasticity (<a href="https://pubmed.ncbi.nlm.nih.gov/32621657/" rel="noopener nofollow" target="_blank">Choi 2020</a>). The problem is what saline does. In 55 women randomised to plain HA in one cheek and saline in the other, HA improved elasticity and blinded-panel radiance more than saline — and dermal thickness rose on both sides at one month, "+3.4%" with HA and "+2.5%" with saline (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3778226/" rel="noopener nofollow" target="_blank">Baspeyras 2013</a>). In the triple-blind Profhilo trial, ultrasound "indicated an increase in dermal thickness for both Profhilo (p = 0.016) and placebo (p < 0.001)" (<a href="https://pubmed.ncbi.nlm.nih.gov/41731228/" rel="noopener nofollow" target="_blank">Zanella 2026</a>). In a 14-patient double-blinded cheek trial of stabilised HA microdroplets against saline there were "no statistically significant improvements in wrinkling or elastosis" on either side (<a href="https://pubmed.ncbi.nlm.nih.gov/29381544/" rel="noopener nofollow" target="_blank">Jones 2018</a>).</p>
      <p>The systematic review of injectable HA for skin quality found 13 studies, all positive on hydration, firmness, brightness, texture and elasticity, HA alone outperforming HA-plus-cocktail, and "large randomized controlled trials are required" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10082573/" rel="noopener nofollow" target="_blank">Ghatge 2023</a>). Read every booster claim with three questions: what was the control, who funded it, and did the effect outlast the six-month follow-up. The rows below answer those for each product.</p>
    `,
  },
  {
    id: 'can-and-cant',
    category: 'concept',
    title: 'What a booster can and cannot do — and the timeline',
    tldr: 'Better-hydrated, smoother, more even-toned skin with a glow, measurable within two to four weeks, peaking at one to three months and fading by six; slightly smaller pores; softer fine crepe on cheeks, hands and neck. Not a fold, a jowl, a hollow, a deep line, a lift or a lasting change: Volite\'s smoothness response fell from 96% at month one to 35% at month six.',
    bodyHtml: `
      <p>The decay curve is the honest description. Volite's prospective study found a skin-roughness responder rate of 96.2% at month 1, 76.3% at month 4 and 34.9% at month 6, recovering to 87.1% after a repeat treatment, with hydration significantly improved through month 9 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6817835/" rel="noopener nofollow" target="_blank">Niforos 2019</a>); Belotero Revive raised elasticity at weeks 9–12, firmness to week 24 and tone, radiance and hydration to week 36 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6698156/" rel="noopener nofollow" target="_blank">Hertz-Kleptow 2019</a>); the amino-acid HA booster's hydration and elasticity gains were "sustained for up to 3 months" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13300611/" rel="noopener nofollow" target="_blank">Yang 2026</a>); hybrid complexes hydrate "up to 6 months" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12844948/" rel="noopener nofollow" target="_blank">Tintor 2025</a>). Hands are the exception, holding twelve to fifteen months in two randomised trials (Part 01).</p>
      <p>What it does not do: a booster spread thinly through the dermis cannot restore the volume a cheek has lost, cannot hold a nasolabial fold, and cannot lift skin that has slid — the <a href="/facial-volume-loss">volume loss</a>, <a href="/nasolabial-folds">nasolabial folds</a> and <a href="/sagging-skin">sagging skin</a> guides grade what does. In the Korean Restylane Vital series, doctors scored roughness, elasticity and brightness as improved significantly more than moisture or fine wrinkles (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4439586/" rel="noopener nofollow" target="_blank">Lee 2015</a>): the change is the finish of the skin, not its architecture. Two sessions in, photographed in the same light, most people see it; at six months, most people are booking the next one.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'rules-and-access',
    category: 'context',
    title: 'The rules: CE-marked devices, one US approval, and what the label promises',
    tldr: 'Every injectable booster in Europe is a CE-marked medical device, a route requiring safety and performance data rather than the efficacy trials a medicine needs; Restylane Skinboosters were registered specifically "for the improvement of skin quality". Skinvive (Volite) became the first booster approved in the US in 2023, on the randomised trial in Part 01. Profhilo, Belotero Revive, NCTF and the polynucleotides are CE only. Any prescriber or, in most countries, any trained clinician can inject them.',
    bodyHtml: `
      <p>The regulatory route sets the evidence bar low: a device's CE mark rests on safety and performance, which is why open-label, manufacturer-run studies dominate the literature and why one randomised trial per product is the ceiling. Restylane Skinboosters hold a European registration "as agents specific for the improvement of skin quality" (<a href="https://pubmed.ncbi.nlm.nih.gov/26441098/" rel="noopener nofollow" target="_blank">Landau 2015</a>); the expert consensus on the same product describes a course of three initial sessions followed by maintenance at four-to-six-month intervals (<a href="https://pubmed.ncbi.nlm.nih.gov/29320592/" rel="noopener nofollow" target="_blank">Belmontesi 2018</a>). VYC-12L — Juvéderm Volite in Europe, Skinvive by Juvéderm in the US — was approved by the FDA in 2023 for cheek skin smoothness on the strength of the 202-person randomised trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10292578/" rel="noopener nofollow" target="_blank">Alexiades 2023</a>), the first product of the class to clear that bar. Profhilo's hybrid complexes, Belotero Revive's HA-glycerol, Fillmed's NCTF 135HA and the salmon-DNA polynucleotides are CE-marked and not FDA-approved.</p>
      <p>Who may inject varies by country: doctors, dentists and prescribing nurses everywhere, with several EU states restricting aesthetic injection to physicians and the UK still allowing non-medical injectors for devices, which is where the risk concentrates (Safety). Whatever the country, the box is the document: product name, CE mark, lot number, expiry, recorded in your notes. A "vitamin cocktail" mixed in the clinic is not a CE-marked device and has no trial.</p>
    `,
  },
  {
    id: 'prices-protocols',
    category: 'context',
    title: 'Prices and the trial-based protocols',
    tldr: 'Restylane Skinboosters: three sessions two to four weeks apart, then every six months, €250–400 each. Profhilo: two sessions a month apart, repeated at six months, €300–500 each. Volite / Skinvive: one session, repeat at six to nine months, €350–600. Belotero Revive: three sessions a month apart, €250–450. NCTF 135HA: three sessions two to three weeks apart, €150–350. Plain HA mesotherapy: three monthly sessions, €120–250. Polynucleotides: three sessions, €300–600.',
    bodyHtml: `
      <p>The protocols are what the trials used, and the trials are the reason to refuse a longer package. Volite's pivotal study was a single treatment with an optional touch-up at month one, judged over six months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10292578/" rel="noopener nofollow" target="_blank">Alexiades 2023</a>); the Belotero Revive and Skinboosters studies used three sessions at monthly intervals (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9907673/" rel="noopener nofollow" target="_blank">Kleine-Börger 2022</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/26910661/" rel="noopener nofollow" target="_blank">Roh 2016</a>); the amino-acid booster trial gave three monthly injections (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13300611/" rel="noopener nofollow" target="_blank">Yang 2026</a>); NCTF's trial used three sessions two to three weeks apart (<a href="https://pubmed.ncbi.nlm.nih.gov/37577796/" rel="noopener nofollow" target="_blank">Fanian 2023</a>); Profhilo's triple-blind trial used two sessions 30 days apart (<a href="https://pubmed.ncbi.nlm.nih.gov/41731228/" rel="noopener nofollow" target="_blank">Zanella 2026</a>). The Skinboosters consensus adds maintenance every four to six months (<a href="https://pubmed.ncbi.nlm.nih.gov/29320592/" rel="noopener nofollow" target="_blank">Belmontesi 2018</a>).</p>
      <p>Price by the year, not the session: a Skinboosters course plus one top-up is roughly €1,000–1,600 for a year of hydrated skin; a Profhilo year about €1,200–2,000; a Volite year €700–1,200. Compare that with a tube of prescription tretinoin and a good sunscreen, which the <a href="/retinoids">retinoids guide</a> puts at under €100 a year for a larger and more durable change in the same four categories of skin quality. A booster is the thing you add on top, not instead.</p>
    `,
  },
  {
    id: 'vetting',
    category: 'context',
    title: 'Vetting the injector: depth, technique, the box, and the claims',
    tldr: 'Boosters are forgiving of the product and unforgiving of depth: too superficial leaves blebs and visible papules, too deep wastes it. Ask for a medical register number, the box with CE mark and lot number, and which technique — serial puncture, cannula or a multi-needle stamp. A cannula halved pain scores and bruising in a comparison of the three. Walk away from "collagen remodelling" promises, five-session packages, and a cocktail with no product name.',
    bodyHtml: `
      <p>Three techniques deliver the same gel: serial puncture with a fine needle, a blunt cannula fanned through the mid-dermis, or a multi-needle stamp or "mesogun". A comparative series found all three produced "comparable improvements in skin elasticity, firmness, and hydration", with pain significantly lower by cannula (2.2 versus 4.6 and 4.5 out of 10) and less bruising (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12793817/" rel="noopener nofollow" target="_blank">Booysen 2026</a>); the stamp injector carried the randomised split-face trial of stabilised HA in Korea (<a href="https://pubmed.ncbi.nlm.nih.gov/26910661/" rel="noopener nofollow" target="_blank">Roh 2016</a>). Depth is the skill: the expert guidance on Volite calls "maintaining the correct injection depth" essential (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12287879/" rel="noopener nofollow" target="_blank">Humphrey 2025</a>), and the persistent nodules on record came from placement in the thin skin of the neck (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12418908/" rel="noopener nofollow" target="_blank">AlBargawi 2025</a>).</p>
      <p>The checklist: a clinician on a medical register; the box opened in front of you with the lot number recorded; a straight answer on which product, how many millilitres, and which plane; single-use needles or cannulas; and a two-week review. The claims to hear as warnings: "stimulates your own collagen" (the saline-controlled trials say the needle does that too), "a biostimulator with no downtime" (that is the <a href="/regenerative-aesthetics">other guide</a>, and it has downtime), and "our own vitamin cocktail" (no CE mark, no trial, no lot number).</p>
    `,
  },
];

const uses: Section[] = [
  {
    id: 'use-hydration-glow',
    category: 'use',
    title: 'Hydration, radiance and surface texture on the face',
    tldr: 'The core claim, and the best-supported: Volite 58% cheek-smoothness responders against 4.5% untreated at one month, holding six; an amino-acid HA booster 97.6% against 4% in 439 people; hydration higher than saline in a 60-person trial; blinded-panel radiance better than saline in 55 women. Against that, the 14-patient double-blinded cheek trial found nothing over saline. Real, modest, months long — moderate.',
    evidence: 'moderate',
    focus: 'face',
    sessions: '1–3 sessions; judge at 1–3 months; repeat at 6',
    downtime: 'Bumps for a day; bruising up to a week',
    cost: '€250–600 per session',
    bodyHtml: `
      <p>The randomised trials point the same way and differ in their controls. VYC-12L against no treatment in 202 participants (median age 58): cheek-smoothness responders 57.9% versus 4.5% and fine-lines responders 58.3% versus 5.4% at month 1, "consistent throughout the 6-month follow-up", with six treatment-related adverse events (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10292578/" rel="noopener nofollow" target="_blank">Alexiades 2023</a>). An HA booster with glycine, proline, leucine and lysine against no treatment in 439 completers: a 97.56% Global Aesthetic Improvement rate at one month versus 3.95%, hydration and elasticity improved to three months, adverse events in 1.67% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13300611/" rel="noopener nofollow" target="_blank">Yang 2026</a>). HA against saline by multi-needle injector in 60 people: hydration significantly greater, elasticity no different (<a href="https://pubmed.ncbi.nlm.nih.gov/32621657/" rel="noopener nofollow" target="_blank">Choi 2020</a>). Plain HA against saline, cheek to cheek, in 55 women: elasticity improved on the HA side only, blinded radiance better at three months, 51% judging their skin improved (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3778226/" rel="noopener nofollow" target="_blank">Baspeyras 2013</a>). Split-face stabilised HA by stamp in a randomised Korean trial: corneometer hydration higher from week 2 to 12, elasticity improved, melanin and redness unchanged (<a href="https://pubmed.ncbi.nlm.nih.gov/26910661/" rel="noopener nofollow" target="_blank">Roh 2016</a>).</p>
      <p>Then the negative: 14 patients, transparent HA microdroplets in one cheek and saline in the other, double-blinded — no significant improvement in wrinkling or elastosis on either side and no difference between them (<a href="https://pubmed.ncbi.nlm.nih.gov/29381544/" rel="noopener nofollow" target="_blank">Jones 2018</a>). The reconciliation is in the endpoints: boosters move hydration, smoothness and radiance, which that trial did not measure, and do little for wrinkles and elastosis, which it did. Moderate: consistent instrument gains in small manufacturer trials, one good untreated-control trial, one small sham-controlled negative.</p>
    `,
  },
  {
    id: 'use-fine-lines',
    category: 'use',
    title: 'Fine lines and crepe on the cheeks, around the eyes and mouth',
    tldr: 'Fine-line responders 58% versus 5% untreated in the Volite trial; NCTF reduced superficial wrinkles in three areas against a cream in 146 people; a low-cross-linked HA cut periorbital and perioral wrinkle scores from about 3.1 to 1.8–2.0 over 24 weeks in an open-label study; the amino-acid HA meta-analysis pooled a 2.15-point wrinkle-scale change across 11 studies. Fine lines soften; etched lines and folds do not.',
    evidence: 'moderate',
    focus: 'face',
    sessions: '2–3 sessions; judge at 3 months',
    downtime: 'Bumps and bruising, more visible around the mouth',
    cost: '€250–600 per session',
    bodyHtml: `
      <p>Fine lines are creases in a dehydrated, thinned dermis, which is exactly what a booster plumps. The Volite trial's fine-lines scale separated treatment from control at 58.3% versus 5.4% responders (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10292578/" rel="noopener nofollow" target="_blank">Alexiades 2023</a>), and objective digital analysis found texture improved 25.9% at 45 days and 30.7% at six months (<a href="https://pubmed.ncbi.nlm.nih.gov/30893167/" rel="noopener nofollow" target="_blank">Cavallini 2019</a>). The NCTF 135HA trial randomised 146 subjects to the booster or a routine anti-aging cream and found superficial wrinkles "significantly reduced" in all three areas at days 75 and 120 with better radiance (<a href="https://pubmed.ncbi.nlm.nih.gov/37577796/" rel="noopener nofollow" target="_blank">Fanian 2023</a>). In thin, dynamic skin, an open-label study of a low-cross-linked HA reduced periorbital wrinkle scores from 3.06 to 1.79 and perioral from 3.18 to 2.01 by week 24, with dermal thickness and echogenicity up on ultrasound (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13558540/" rel="noopener nofollow" target="_blank">Yi 2026</a>). The meta-analysis of amino-acid-enriched HA pooled 11 studies: a 2.15-point reduction on the Wrinkle Severity Rating Scale and 0.42 mm more dermal thickness (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12926521/" rel="noopener nofollow" target="_blank">Mosteirin 2026</a>).</p>
      <p>The limits: the Profhilo perioral trial saw visual improvement in wrinkles and pores yet dermal thickness no better than saline, with most participants dissatisfied (<a href="https://pubmed.ncbi.nlm.nih.gov/41731228/" rel="noopener nofollow" target="_blank">Zanella 2026</a>), and the amino-acid meta-analysis pooled mostly uncontrolled studies. A booster softens crepe; it does not remove the etched lip lines or crow's feet that the <a href="/lip-lines">lip lines</a> and <a href="/crows-feet">crow's feet</a> guides grade with toxin and resurfacing. Moderate.</p>
    `,
  },
  {
    id: 'use-hands',
    category: 'use',
    title: 'Hands',
    tldr: 'The most durable booster result and the only one with a saline-controlled twelve-month study: stabilised HA beat saline on hydration, elasticity, roughness and waviness at three months with improvement sustained to a year; a 100-person randomised trial found 87–96% of hands still improved at 15 months. Crepe, dryness and fine wrinkling respond; veins and tendons need volume.',
    evidence: 'moderate',
    focus: 'body',
    sessions: '2–3 sessions; repeat at 12 months',
    downtime: 'Swelling and bruising for a week',
    cost: '€300–600 per session, both hands',
    bodyHtml: `
      <p>The back of the hand is thin, dry, sun-damaged skin over little fat — a booster's ideal canvas, and the site where the class was tested most honestly. In an evaluator-blind, placebo-controlled study, microinjections of stabilised HA gel were compared with saline: hydration and elasticity were significantly better with HA at three months, maximum roughness and waviness were significantly improved versus saline, and improvements "were sustained to M12" (<a href="https://pubmed.ncbi.nlm.nih.gov/25738851/" rel="noopener nofollow" target="_blank">Gubanova 2015</a>). A randomised study in 100 Chinese subjects found clinically relevant differences on the hand grading scale favouring HA gel and 87–96% of treated hands still improved at 15 months by evaluator and subject (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7318129/" rel="noopener nofollow" target="_blank">Wu 2020</a>). The earlier open-label face-hand-décolletage study rated over 80% of hands improved throughout (<a href="https://pubmed.ncbi.nlm.nih.gov/24002145/" rel="noopener nofollow" target="_blank">Streker 2013</a>), and the HA-versus-saline ultrasound study measured dermal density +18% against 0% at ten months in responders (<a href="https://pubmed.ncbi.nlm.nih.gov/25539986/" rel="noopener nofollow" target="_blank">Tedeschi 2015</a>).</p>
      <p>Why hands last longer than faces is not settled — less movement, less turnover, a thinner target — but the practical rule is that a booster fixes the skin of the hand, while the bony, veiny look is volume and belongs to calcium hydroxylapatite or a firmer HA in the <a href="/aging-hands">hands guide</a>. Moderate on two randomised trials, one against saline, both manufacturer-run.</p>
    `,
  },
  {
    id: 'use-combinations',
    category: 'use',
    title: 'Combined with botulinum toxin, filler and energy devices',
    tldr: 'Three randomised trials say the combination beats the toxin alone: a full-face trial in which toxin plus filler plus a skin-boosting HA outscored toxin or filler alone; a split-face trial in which premixed toxin and NCTF cut wrinkle scores by 2.33 against 1.34 for toxin alone with hydration rising only on the combination side; a split-face trial in which toxin plus Skinvive gave lower crow\'s-feet severity at three and six months. Expert guidance allows same-day non-ablative devices.',
    evidence: 'moderate',
    focus: 'combo',
    sessions: 'Booster added to the toxin or device plan; same day or 2 weeks apart',
    downtime: 'The device\'s plus the injection\'s',
    cost: '€250–600 on top of the other treatment',
    bodyHtml: `
      <p>The booster's best-documented role may be as the third ingredient. A randomised study of repeated full-face treatment found abobotulinumtoxinA plus HA filler plus Restylane skin-boosting HA "associated with better aesthetic outcome and higher levels of satisfaction than treatment with ABO or HA filler alone", with satisfaction rising at each round (<a href="https://pubmed.ncbi.nlm.nih.gov/31334927/" rel="noopener nofollow" target="_blank">Hedén 2019</a>). A 2026 split-face randomised trial premixed botulinum toxin with NCTF 135HA on one side against toxin alone on the other: wrinkle-scale reduction 2.33 versus 1.34, hydration "increased significantly only on the combination side", larger gains in firmness, tone and radiance, and pinpoint bruising in 78.8% (<a href="https://pubmed.ncbi.nlm.nih.gov/41129279/" rel="noopener nofollow" target="_blank">Alzayadneh 2026</a>). Around the eyes, a double-blind split-face trial found onabotulinumtoxinA plus VYC-12 gave lower canthal-wrinkle severity than toxin alone at three and six months, with higher satisfaction (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12355333/" rel="noopener nofollow" target="_blank">Neves 2025</a>).</p>
      <p>With energy devices the evidence is expert consensus and small series: the VYC-12L guidance permits same-day treatment with non-ablative devices if fields and asepsis are managed and depth is right (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12287879/" rel="noopener nofollow" target="_blank">Humphrey 2025</a>), and an 18-patient Asian series combining the two improved FACE-Q scores at every visit (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12509472/" rel="noopener nofollow" target="_blank">Oku 2025</a>). Moderate for the toxin combinations, on three manufacturer-adjacent randomised trials; the <a href="/botox">Botox guide</a> and the <a href="/laser-ipl">laser guide</a> grade the partners.</p>
    `,
  },
  {
    id: 'use-pores',
    category: 'use',
    title: 'Enlarged pores',
    tldr: 'A split-face randomised trial of two Belotero formulations cut pore volume through week 32, the glycerol version 24% more than the plain one; the Korean CPM-HA20G study logged smaller pore area, count and depth at weeks 12 and 24; the Profhilo trial saw pores visually improved. Every comparison is product against product or against baseline — nobody has randomised a pore against saline.',
    evidence: 'emerging',
    focus: 'face',
    sessions: '3 sessions a month apart',
    downtime: 'A day of bumps',
    cost: '€250–450 per session',
    bodyHtml: `
      <p>Pores widen as the dermis around them loses support, so hydrating and firming that dermis plausibly tightens them. The trial: 29 participants randomised to CPM-HA20G on one side and CPM-HA20 on the other, three monthly injections, 3D pore analysis — both sides reduced mean pore volume from baseline through week 32, the glycerol-containing side 24.2% more, with hydration improved on both and satisfaction equal (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12042064/" rel="noopener nofollow" target="_blank">Rutnumnoi 2025</a>). The Korean real-world study of the same product recorded improvements in average pore volume, area, density, count and maximum depth at weeks 12 and 24 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11755000/" rel="noopener nofollow" target="_blank">Park 2025</a>); the Profhilo triple-blind trial's stereophotogrammetry showed "visual improvements in wrinkles and pores" (<a href="https://pubmed.ncbi.nlm.nih.gov/41731228/" rel="noopener nofollow" target="_blank">Zanella 2026</a>).</p>
      <p>Emerging because the designs cannot separate the gel from the needling and the time: a product-versus-product split face proves one formulation beats another, not that either beats nothing. For pores the better-evidenced tools remain <a href="/retinoids">retinoids</a> and the resurfacing in the <a href="/dull-skin">dull skin guide</a>; a booster is a reasonable adjunct in someone already having one.</p>
    `,
  },
  {
    id: 'use-neck-chest',
    category: 'use',
    title: 'Neck and décolletage',
    tldr: 'Open-label only. Restylane\'s three-area study found the décolletage improved at every visit except the last, at week 36; a laser-plus-HA neck study showed histological change; a Profhilo neck survey of Asian patients moved a laxity scale from 3.1 to 2.1; an HA filler for horizontal neck lines peaked at one month and held to six. The neck is also where the persistent nodules were reported. Emerging.',
    evidence: 'emerging',
    focus: 'body',
    sessions: '2–3 sessions',
    downtime: 'Bumps visible for longer on the neck; bruising',
    cost: '€300–500 per session',
    bodyHtml: `
      <p>Thin, mobile, sun-exposed skin makes the neck and chest natural booster territory and awkward trial territory. The Restylane study that treated face, hand and décolletage with a micropuncture device judged overall skin quality improved in over 80% of subjects, with significant improvement on the treated side "at all visits, with the exception of the décolletage at week 36" (<a href="https://pubmed.ncbi.nlm.nih.gov/24002145/" rel="noopener nofollow" target="_blank">Streker 2013</a>). A neck protocol combining a non-ablative fractional laser with stabilised HA documented histological and clinical change (<a href="https://pubmed.ncbi.nlm.nih.gov/21699363/" rel="noopener nofollow" target="_blank">Ribé 2011</a>). Profhilo's real-world neck survey in Malaysia, Singapore and Indonesia found a neck-laxity scale falling from 3.08 to 2.12 with low-to-moderate pain (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12316115/" rel="noopener nofollow" target="_blank">Bee Lan 2025</a>). For the horizontal lines themselves, a 30-person open-label study of an HA filler found peak benefit at one month and sustained improvement to six (<a href="https://pubmed.ncbi.nlm.nih.gov/36575878/" rel="noopener nofollow" target="_blank">Rongthong 2023</a>); the non-facial review summarises the same thin evidence across neck, chest and hands (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11743251/" rel="noopener nofollow" target="_blank">El Hawa 2025</a>).</p>
      <p>Emerging: no randomised trial, and the neck is where technique fails visibly — persistent nodules along the necklines that needed hyaluronidase (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12418908/" rel="noopener nofollow" target="_blank">AlBargawi 2025</a>) and a delayed inflammatory reaction three weeks after neck-line filling (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9849916/" rel="noopener nofollow" target="_blank">Li 2023</a>). The <a href="/neck">neck guide</a> and <a href="/decolletage">décolletage guide</a> grade the alternatives, and the biostimulator guide's diluted calcium hydroxylapatite has the one randomised chest trial.</p>
    `,
  },
  {
    id: 'use-eyes-mouth',
    category: 'use',
    title: 'Under the eyes and around the mouth',
    tldr: 'Thin, dynamic skin where fillers are risky and boosters are popular: an open-label low-cross-linked HA cut periorbital and perioral wrinkle scores by about 1.2 points at 24 weeks; the Profhilo perioral trial found visual wrinkle improvement but dermal thickness equal to saline and most participants dissatisfied; toxin plus Skinvive beat toxin alone at the crow\'s feet. No booster has beaten placebo under the eye.',
    evidence: 'emerging',
    focus: 'eyes',
    sessions: '2–3 sessions',
    downtime: 'Bruising likely; blebs visible for days in thin skin',
    cost: '€250–500 per session',
    bodyHtml: `
      <p>The under-eye and the perioral skin are where a booster's low viscosity is an advantage over a filler and where its results are hardest to show. The most detailed open-label data come from a low-cross-linked, high-water-affinity HA: periorbital wrinkle scores 3.06 to 1.79 and perioral 3.18 to 2.01 by week 24, global improvement in 82–86%, with elasticity, hydration and ultrasound dermal thickness all up (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13558540/" rel="noopener nofollow" target="_blank">Yi 2026</a>). The controlled data are less kind: in the perioral triple-blind trial, Profhilo "reduced wrinkles and pore size; however, its impact on dermal thickness did not exceed the placebo effect", 36.4% regretted the decision and 54.5% were dissatisfied with the outcome (<a href="https://pubmed.ncbi.nlm.nih.gov/41731228/" rel="noopener nofollow" target="_blank">Zanella 2026</a>). At the crow's feet, the combination of toxin and VYC-12 outperformed toxin alone (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12355333/" rel="noopener nofollow" target="_blank">Neves 2025</a>). The periorbital real-world registry that reports 70% improvement and twelve-month effect is of a tear-trough filler, not a booster (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12423213/" rel="noopener nofollow" target="_blank">Bhojani-Lynch 2025</a>).</p>
      <p>Sort the problem before the product: a hollow is a filler question (<a href="/fillers#use-tear-trough">tear trough</a>), pigment is a pigment question (<a href="/dark-circles">dark circles</a>), and thin, crepey, dry lid skin is the one thing a booster addresses — modestly, for months, with bruising. The polynucleotide alternative is graded in the <a href="/regenerative-aesthetics">biostimulator guide</a>. Emerging.</p>
    `,
  },
  {
    id: 'use-body',
    category: 'use',
    title: 'Arms, abdomen and knees ("body boosters")',
    tldr: 'Profhilo Body\'s inner-arm study: a laxity scale significantly lower at three months and maintained at twelve in 32 people, with at least half reporting moderate improvement in firmness and smoothness, and bruising in nearly all; a biopsy study of post-weight-loss arms found more and better-organised elastin on the treated side. Single-arm and manufacturer-run. Emerging.',
    evidence: 'emerging',
    focus: 'body',
    sessions: '2 sessions a month apart, repeated at 6 months',
    downtime: 'Bruising in most; bumps for days',
    cost: '€400–700 per session per area',
    bodyHtml: `
      <p>The body versions are larger volumes of the same hybrid complexes placed at fixed points on the inner arm, abdomen or knee. The twelve-month single-arm study enrolled 34 participants, 32 of whom completed seven injections: the photographic inner-arm laxity score fell significantly by month 3 and stayed down through month 12, at least 50% reported moderate improvement in firmness, smoothness, brightness and hydration, and "slight ecchymosis occurred in 36 participants" — more bruises than participants, because it counts events (<a href="https://pubmed.ncbi.nlm.nih.gov/41457907/" rel="noopener nofollow" target="_blank">Sparavigna 2025</a>). A histopathological study of post-obese arm skin found treated areas with more elastin fibres in a more regular architecture and activated fibroblasts against the untreated contralateral arm (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11181863/" rel="noopener nofollow" target="_blank">Margara 2024</a>). Restylane's upper-arm study is the early precedent (<a href="https://pubmed.ncbi.nlm.nih.gov/19207331/" rel="noopener nofollow" target="_blank">Distante 2009</a>).</p>
      <p>Emerging: no control arm in the clinical study, manufacturer authors, and an effect measured on a laxity photograph scale rather than on the loose skin a patient sees in a sleeveless top. The <a href="/upper-arms">upper arms guide</a> and <a href="/cellulite">cellulite guide</a> put it beside the energy devices, hyperdiluted calcium hydroxylapatite and surgery.</p>
    `,
  },
  {
    id: 'use-acne-scars',
    category: 'use',
    title: 'Acne scars',
    tldr: 'A split-face randomised trial added Profhilo to subcision on one side: satisfaction was higher on that side, but scar reduction (29.7 versus 22.3) and ultrasound depth were not significantly different and global improvement was identical. A case series pairs a retinoid with Restylane Skinboosters. Boosters hydrate the skin over a scar; they do not release it. Limited.',
    evidence: 'limited',
    focus: 'face',
    note: 'Best for: nothing on its own — an adjunct at most',
    sessions: '—',
    downtime: '—',
    cost: '—',
    bodyHtml: `
      <p>Atrophic scars are tethered dermis, and the treatments that work cut, lift or resurface them (<a href="/microneedling">microneedling</a>, <a href="/laser-ipl">lasers</a>). The one randomised test of a booster here split the face: subcision alone against subcision plus Profhilo. Patient-satisfaction scores were significantly higher on the Profhilo side, but "no significant difference was seen in total acne scar reduction" (29.74 versus 22.27), sonographic depth reduction was equal, and mean global improvement was four on both sides (<a href="https://pubmed.ncbi.nlm.nih.gov/38429946/" rel="noopener nofollow" target="_blank">Dastgheib 2024</a>). A case series describes sequential trifarotene and injectable NASHA gel with "high clinical improvement" on photographs, without a comparator (<a href="https://pubmed.ncbi.nlm.nih.gov/37133474/" rel="noopener nofollow" target="_blank">Belmontesi 2023</a>).</p>
      <p>Limited: the controlled evidence is a null result on the objective endpoints, dressed by a satisfaction score. Where PRP has a meta-analysis for scars with microneedling (<a href="/regenerative-aesthetics">biostimulator guide</a>), an HA booster has a hydrated surface. Spend the money on the subcision.</p>
    `,
  },
];

const products: Section[] = [
  {
    id: 'prod-volite',
    category: 'product',
    title: 'Juvéderm Volite / Skinvive (VYC-12, VYC-12L)',
    tldr: 'The only booster with a randomised, evaluator-blind, untreated-controlled trial: 202 participants, 58% cheek-smoothness and fine-lines responders against 4.5–5.4%, sustained six months — the basis of its 2023 US approval. Single-arm data show the decay: 96% responders at month one, 35% at month six, hydration to month nine, and 91% satisfied at month one. Lightly cross-linked Vycross HA; one session, repeated at six to nine months.',
    evidence: 'moderate',
    focus: 'crosslinked',
    note: 'Top pick: the booster with the trial — one session, judged at three months, repeated at six to nine',
    sessions: '1 session; optional touch-up at 1 month; repeat at 6–9 months',
    downtime: '94% back to normal activities in one day',
    cost: '€350–600',
    bodyHtml: `
      <p>VYC-12 is a low-concentration, lightly cross-linked HA from the Vycross family, injected as intradermal microdroplets across the cheeks; VYC-12L adds lidocaine. Its evidence is the strongest in the category and still amounts to one randomised trial: 131 treated versus 71 untreated, 86% women, median age 58, responder rates of 57.9% on the cheek-smoothness scale and 58.3% on the fine-lines scale at month 1 against 4.5% and 5.4%, "consistent throughout the 6-month follow-up", six treatment-related adverse events and no discontinuations (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10292578/" rel="noopener nofollow" target="_blank">Alexiades 2023</a>). The prospective single-arm study provides the curve — roughness responders 96.2% at month 1, 76.3% at month 4, 34.9% at month 6, 87.1% after repeat, hydration improved through month 9 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6817835/" rel="noopener nofollow" target="_blank">Niforos 2019</a>) — and the patient-reported one the satisfaction: 90.8% at month 1, 76.4% at month 9, 94% back to normal activities the next day (<a href="https://pubmed.ncbi.nlm.nih.gov/31621189/" rel="noopener nofollow" target="_blank">Ogilvie 2020</a>). Digital texture analysis found 25.9% improvement at 45 days and 30.7% at six months (<a href="https://pubmed.ncbi.nlm.nih.gov/30893167/" rel="noopener nofollow" target="_blank">Cavallini 2019</a>); explant work found collagen density, fibrillin-1, aquaporin-3 and glycosaminoglycans up against a hydrating comparator (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7253252/" rel="noopener nofollow" target="_blank">Nakab 2020</a>). Two retrospective safety analyses cover 1,577 and 2,126 treatments (<a href="https://pubmed.ncbi.nlm.nih.gov/34923524/" rel="noopener nofollow" target="_blank">Zarbafian 2022</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/36342258/" rel="noopener nofollow" target="_blank">delayed events</a>).</p>
      <p>Moderate rather than strong: one manufacturer-run randomised trial against no treatment, not a sham, and a six-month effect. It is nonetheless the product to choose if you want the booster whose result was measured by people who could not see which arm you were in. The <a href="/fillers#booster-volite">filler guide</a> carries the same row.</p>
    `,
  },
  {
    id: 'prod-skinboosters',
    category: 'product',
    title: 'Restylane Skinboosters (Vital, Vital Light) — stabilised HA microdroplets',
    tldr: 'The original, registered in Europe for skin quality: micropuncture studies since 2008 showing better elasticity and roughness, a split-face randomised trial with higher hydration from week 2 to 12, the saline-controlled hand study sustained to a year, the 15-month hand trial, and a consensus protocol of three sessions then six-monthly upkeep. Also the product family behind the 14-patient sham-controlled cheek trial that found nothing. Moderate.',
    evidence: 'moderate',
    focus: 'crosslinked',
    note: 'Top pick: the hands, where its saline-controlled data are best',
    sessions: '3 sessions 2–4 weeks apart; then every 4–6 months',
    downtime: 'Papules for a day; bruising',
    cost: '€250–400 per session',
    bodyHtml: `
      <p>NASHA — non-animal stabilised hyaluronic acid — in a small-particle, low-cross-linked form, placed in the mid-dermis by micropuncture. The Hamburg studies established the pattern: significant improvement in elasticity and surface roughness with "extremely positive" feedback (<a href="https://pubmed.ncbi.nlm.nih.gov/18384619/" rel="noopener nofollow" target="_blank">Kerscher 2008</a>) and increased firmness and viscoelastic recovery on a cutometer (<a href="https://pubmed.ncbi.nlm.nih.gov/19730872/" rel="noopener nofollow" target="_blank">Reuther 2010</a>). The randomised evidence: a split-face trial by stamp-type injector with corneometer hydration higher on the treated side at weeks 2 through 12 and elasticity improved, melanin and redness unchanged (<a href="https://pubmed.ncbi.nlm.nih.gov/26910661/" rel="noopener nofollow" target="_blank">Roh 2016</a>); the evaluator-blind hand study against saline, sustained to month 12 (<a href="https://pubmed.ncbi.nlm.nih.gov/25738851/" rel="noopener nofollow" target="_blank">Gubanova 2015</a>); the 100-subject randomised hand trial with 87–96% still improved at 15 months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7318129/" rel="noopener nofollow" target="_blank">Wu 2020</a>); a multicentre randomised comparison of two versus three initial sessions in which 75–84% were judged improved at three months with measurably increased hydration (<a href="https://clinicaltrials.gov/study/NCT02403986" rel="noopener nofollow" target="_blank">NCT02403986</a>). Real-world use in Korea: 77% satisfied, 66% reporting an effect beyond four months, roughness and brightness the strongest changes (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4439586/" rel="noopener nofollow" target="_blank">Lee 2015</a>).</p>
      <p>And the counterweight: the double-blinded, sham-controlled, split-face cheek trial of transparent HA microdroplets, 14 patients, one treatment, no significant improvement over saline in wrinkling or elastosis (<a href="https://pubmed.ncbi.nlm.nih.gov/29381544/" rel="noopener nofollow" target="_blank">Jones 2018</a>). The consensus protocol is three sessions then maintenance every four to six months, with "progressive enhancement of skin texture" reported to twelve months (<a href="https://pubmed.ncbi.nlm.nih.gov/29320592/" rel="noopener nofollow" target="_blank">Belmontesi 2018</a>). Moderate: the longest record, the best body data, and the one clean negative.</p>
    `,
  },
  {
    id: 'prod-belotero-revive',
    category: 'product',
    title: 'Belotero Revive (CPM-HA20G) — HA with glycerol',
    tldr: 'Cohesive polydensified HA with 17.5 mg/ml glycerol for extra water-binding: 36-week open-label data with firmness to week 24 and hydration, tone and radiance to week 36; a randomised study with firmness up after one and three treatments; a split-face randomised trial cutting pore volume 24% more than the glycerol-free version; and a split-face comparison against Profhilo finding no difference between them. Moderate.',
    evidence: 'moderate',
    focus: 'crosslinked',
    note: 'Top pick: for dry, dull skin with visible pores, and for anyone comparing it with Profhilo — the split-face trial found them equal',
    sessions: '3 sessions a month apart; repeat at 6–9 months',
    downtime: 'Bumps for hours; bruising',
    cost: '€250–450 per session',
    bodyHtml: `
      <p>Belotero Revive is a low-viscosity cohesive polydensified matrix HA with glycerol, marketed for "early intervention". The pivotal open-label study found gross elasticity increased at weeks 9 and 12, firmness to week 24, skin tone, radiance and hydration to week 36, roughness reduced to week 28 and redness to week 36, with a good safety profile (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6698156/" rel="noopener nofollow" target="_blank">Hertz-Kleptow 2019</a>). A randomised study of biophysical properties found firmness significantly improved after one (p = 0.028) and three (p = 0.003) treatments, with skin fatigue and density improving in the multiple-treatment group (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9907673/" rel="noopener nofollow" target="_blank">Kleine-Börger 2022</a>). The Korean study documented improvements across glow, firmness, surface evenness, tone evenness and transepidermal water loss at weeks 12 and 24 with a 100% improvement rating at week 12 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11755000/" rel="noopener nofollow" target="_blank">Park 2025</a>). The split-face randomised pore trial is in Part 01 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12042064/" rel="noopener nofollow" target="_blank">Rutnumnoi 2025</a>).</p>
      <p>The most useful study is the comparison: HCC (Profhilo) on one side and CPM-HA20G on the other in healthy women — both improved surface hydration, elasticity, water loss and melanin from baseline, with "no significant differences between the tested products in the observed skin characteristics over time" (<a href="https://pubmed.ncbi.nlm.nih.gov/35699361/" rel="noopener nofollow" target="_blank">de Wit 2022</a>). Delivery by cannula, needle or stamp gave comparable results with less pain by cannula (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12793817/" rel="noopener nofollow" target="_blank">Booysen 2026</a>). Moderate, on consistent small studies with two randomised designs and no saline arm.</p>
    `,
  },
  {
    id: 'prod-plain-ha',
    category: 'product',
    title: 'Non-cross-linked HA mesotherapy (Teosyal Redensity I, Viscoderm, Glytone, generic HA)',
    tldr: 'The cheapest rung and, oddly, the best-controlled: plain HA microinjections against saline in 55 women improved elasticity and blinded-panel radiance more than saline over three months; HA against saline in the hands raised dermal density 24% versus 6% at four weeks and 18% versus 0% at ten months. Shortest-lived, most sessions, fewest surprises. Moderate.',
    evidence: 'moderate',
    focus: 'uncrosslinked',
    note: 'Top pick: the best value in the category — three monthly sessions of plain HA with a saline-controlled trial behind it',
    sessions: '3 monthly sessions; repeat every 4–6 months',
    downtime: 'Papules for a day',
    cost: '€120–250 per session',
    bodyHtml: `
      <p>Un-cross-linked HA lasts days in the skin, so its effect has to be biological — water drawn in, fibroblasts nudged — rather than a resident gel. The evidence is small and unusually well designed. Fifty-five women received non-cross-linked HA with mannitol (14 mg/g) in one cheek and saline in the other, three monthly sessions, blinded: skin stiffness fell only on the HA side at one and three months, dermal thickness rose on both sides at one month and only on the HA side at three, and a blinded panel scored complexion radiance better on the HA side at three months (p = 0.012) (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3778226/" rel="noopener nofollow" target="_blank">Baspeyras 2013</a>). In the hands, HA against saline by ultrasound: dermal density +24% versus +6% at four weeks and +18% versus 0% at ten months in responders (<a href="https://pubmed.ncbi.nlm.nih.gov/25539986/" rel="noopener nofollow" target="_blank">Tedeschi 2015</a>). An open-label post-marketing study of a non-cross-linked gel raised skin capacitance from 23.1 to 33.2 units with no adverse events (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12431166/" rel="noopener nofollow" target="_blank">Chahine 2025</a>); a two-product protocol combining a filler with a Viscoderm booster improved hydration and water loss over the filler alone (<a href="https://pubmed.ncbi.nlm.nih.gov/24962508/" rel="noopener nofollow" target="_blank">Iannitti 2016</a>); a retrospective controlled ultrasound study of a cannula-delivered HA hydrogel reported a 92.7% rise in skin density against no change in controls (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12114969/" rel="noopener nofollow" target="_blank">Majewska 2025</a>).</p>
      <p>Moderate: the saline-controlled designs are the best in the class, the studies are small, and the effect needs repeating every few months. If a clinic's "skin booster" is plain HA at a plain price, the evidence does not say you are getting less than the branded gel — it says the branded gel lasts a little longer.</p>
    `,
  },
  {
    id: 'prod-amino-acid',
    category: 'product',
    title: 'Amino-acid-enriched HA (Sunekos, Jalupro, and the Chinese composite boosters)',
    tldr: 'HA fragments with glycine, proline, leucine and lysine: a 2026 meta-analysis of 11 studies pooled a 2.15-point wrinkle-scale improvement and 0.42 mm of dermal thickness; the 456-person randomised trial of a composite booster found 97.6% improved against 4% untreated with hydration and elasticity holding three months; a histology study found new type III collagen but no ultrasound thickness change. Mostly uncontrolled, one large trial, brand names unsearchable in PubMed. Moderate.',
    evidence: 'moderate',
    focus: 'cocktail',
    note: 'Top pick: none by brand — the trial product was a composite solution, not a named European brand',
    sessions: '3–4 sessions 1–3 weeks apart',
    downtime: 'Bumps and bruising',
    cost: '€200–400 per session',
    bodyHtml: `
      <p>The premise is that amino acids are collagen's raw material and HA fragments the signal; the products (Sunekos, Jalupro and several Asian composites) mix them for intradermal injection. The systematic review and meta-analysis found 11 studies: wrinkle severity reduced by 2.15 points, global aesthetic improvement up 3.13 at three months, dermal thickness up 0.42 mm, cell viability improved in vitro, and an adverse-event risk ratio of 5.20 with a confidence interval from 0.53 to 50.77 — that is, unknown (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12926521/" rel="noopener nofollow" target="_blank">Mosteirin 2026</a>). The single large trial is Chinese: 456 enrolled, 439 completed, randomised 2:1 to three monthly injections of a sodium hyaluronate solution with glycine, proline, leucine and lysine or no treatment; 97.56% versus 3.95% improved at one month, hydration and elasticity better to three months, adverse events in 1.67% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13300611/" rel="noopener nofollow" target="_blank">Yang 2026</a>). A histological study of HA fragments with amino acids found more fibroblast activity, type III collagen and vessels on biopsy, and "no statistical difference in skin thickness" on ultrasound (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11333785/" rel="noopener nofollow" target="_blank">Scarano 2024</a>); an HA-amino-acid-vitamin complex raised hydration and viscoelasticity 11–12% and density 23% at 42 days "without causing changes in skin wrinkles" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11274003/" rel="noopener nofollow" target="_blank">Siquier-Dameto 2024</a>).</p>
      <p>Moderate on the meta-analysis and the one large untreated-control trial; the European brand names return no controlled trials under their own names in PubMed, so a clinic offering Sunekos or Jalupro is offering the class's evidence, not the product's. The systematic review of HA skin quality found HA alone outperformed cocktails (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10082573/" rel="noopener nofollow" target="_blank">Ghatge 2023</a>) — the amino acids may be doing less than the marketing says.</p>
    `,
  },
  {
    id: 'prod-profhilo',
    category: 'product',
    title: 'Profhilo (hybrid cooperative complexes) — "bioremodelling"',
    tldr: 'The most marketed booster in Europe: high- and low-molecular-weight HA heat-bonded without cross-linkers, five injection points a side, two sessions. Laboratory data show collagen and elastin genes switched on; open-label and manufacturer studies show reduced wrinkle severity, laxity and hydration to six months; a split-face trial found it equal to Belotero Revive; and the only triple-blind, saline-controlled trial found dermal thickness no better than placebo, with 54.5% dissatisfied. The safest injectable on record. Emerging.',
    evidence: 'emerging',
    focus: 'hybrid',
    note: 'Best for: someone who wants the two-session protocol and accepts hydration rather than remodelling — and who reads the placebo trial first',
    sessions: '2 sessions a month apart; repeat at 6 months',
    downtime: 'Five bumps a side for a few hours; bruising in about half',
    cost: '€300–500 per session',
    bodyHtml: `
      <p>Profhilo's hybrid cooperative complexes are stable to hyaluronidase digestion and, in fibroblast and 3D skin models, raised expression of collagens I, III, IV and VII and elastin above either HA fraction alone (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5056743/" rel="noopener nofollow" target="_blank">Stellavato 2016</a>). The clinical literature is reviewed by its own scientists as showing "a reduction in wrinkle severity, improvement in skin roughness profile and reduction of skin laxity with pronounced improvement in superficial skin hydration lasting up to 6 months" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12844948/" rel="noopener nofollow" target="_blank">Tintor 2025</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13038071/" rel="noopener nofollow" target="_blank">Sparavigna 2026</a>). The independent comparison found it equal to Belotero Revive on every measured property (<a href="https://pubmed.ncbi.nlm.nih.gov/35699361/" rel="noopener nofollow" target="_blank">de Wit 2022</a>). The trial that matters is the randomised, triple-blind, split-face study of twelve women aged 45–65: two sessions of 1 ml a side around the mouth against saline; at 60 days stereophotogrammetry showed visual improvement in wrinkles and pores, ultrasound showed dermal thickness increased with Profhilo (p = 0.016) and with placebo (p < 0.001), 36.4% expressed dissatisfaction with the decision and 54.5% with the outcome, and the authors concluded that "its impact on dermal thickness did not exceed the placebo effect" (<a href="https://pubmed.ncbi.nlm.nih.gov/41731228/" rel="noopener nofollow" target="_blank">Zanella 2026</a>).</p>
      <p>Emerging: the "bioremodelling" claim rests on the laboratory and the open-label studies, and the one blinded test of it was negative on its objective endpoint; the hydration effect is real and equal to a cheaper product. What is beyond argument is safety — 371 adverse events across a projected 1,091,956 patients, 0.034%, mostly swelling and redness (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12257262/" rel="noopener nofollow" target="_blank">Salti 2025</a>), twelve reports in the first three years (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7327616/" rel="noopener nofollow" target="_blank">Cassuto 2020</a>). The fat-compartment version, Profhilo Structura, has a pilot study and a review, and is a filler question (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10801275/" rel="noopener nofollow" target="_blank">Sparavigna 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/39028477/" rel="noopener nofollow" target="_blank">Forte 2024</a>).</p>
    `,
  },
  {
    id: 'prod-nctf',
    category: 'product',
    title: 'NCTF 135HA (Fillmed) — the mesotherapy cocktail',
    tldr: 'Non-cross-linked HA with vitamins, amino acids, minerals and nucleotides — the classic French "mesotherapy" cocktail. One manufacturer-funded randomised trial in 146 people beat a routine anti-aging cream on superficial wrinkles and radiance at days 75 and 120; a 2026 split-face trial premixed it with botulinum toxin and beat toxin alone. The control was a cream, so the needling is inside the effect. Emerging.',
    evidence: 'emerging',
    focus: 'cocktail',
    note: 'Best for: the toxin-plus-booster combination, where its randomised data are best',
    sessions: '3 sessions 2–3 weeks apart',
    downtime: 'Papules and pinpoint bruising for 1–2 days',
    cost: '€150–350 per session',
    bodyHtml: `
      <p>NCTF 135HA carries 5 mg/ml of non-cross-linked HA and a list of some fifty vitamins, amino acids, minerals, coenzymes and nucleic acids. Its randomised trial allocated 146 subjects 107:38 to three sessions of NCTF or a routine anti-aging cream: at days 75 and 120 NCTF "significantly reduced wrinkles in all three areas and improved facial radiance scores compared with the control", hydration rose within a week of the last injection, self-esteem scores improved, and adverse events were mild and injection-related — "funded by Laboratories FILLMED" (<a href="https://pubmed.ncbi.nlm.nih.gov/37577796/" rel="noopener nofollow" target="_blank">Fanian 2023</a>). The 2026 split-face trial of premixed toxin and NCTF against toxin alone is in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/41129279/" rel="noopener nofollow" target="_blank">Alzayadneh 2026</a>).</p>
      <p>Emerging rather than moderate because a cream is not a sham: a hundred microinjections of anything would be expected to beat a moisturiser on a wrinkle scale at day 75, and the systematic review of the category found HA alone outperforming HA cocktails (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10082573/" rel="noopener nofollow" target="_blank">Ghatge 2023</a>). Pleasant, plausible, cheap per session, and unproven beyond "injecting hydrating things hydrates".</p>
    `,
  },
  {
    id: 'prod-polynucleotides',
    category: 'product',
    title: 'Polynucleotide "boosters" (Rejuran, Plinest, Nucleofill)',
    tldr: 'Salmon-DNA fragments sold and injected like a booster and graded in full in the biostimulator guide: nine small studies of 219 patients, a phase 3 trial that equalled a hyaluronic-acid filler on crow\'s feet rather than beating it, a split-face periocular trial equal to HA on the visual scales, and no placebo-controlled trial. Emerging.',
    evidence: 'emerging',
    focus: 'dna',
    note: 'Best for: someone who wants a non-HA booster for thin, crepey skin and has read the biostimulator guide\'s row',
    sessions: '3 sessions 2–4 weeks apart',
    downtime: 'Bumps and bruising for 1–3 days',
    cost: '€300–600 per session',
    bodyHtml: `
      <p>Polynucleotides sit on the booster menu and in the biostimulator literature at once. The systematic review found nine studies of low-to-moderate quality in 219 patients with promising wrinkle, texture and elasticity results and "limited consensus regarding their optimal use" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845969/" rel="noopener nofollow" target="_blank">Lampridou 2025</a>); the phase 3 trial that launched Rejuran found no statistically significant difference from an HA filler on crow's feet (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4248006/" rel="noopener nofollow" target="_blank">Pak 2014</a>); the periocular split-face trial found no difference from HA on the visual scales, with better instrument scores for elasticity, hydration, roughness and pores (<a href="https://pubmed.ncbi.nlm.nih.gov/32248707/" rel="noopener nofollow" target="_blank">Lee 2022</a>); the Italian consensus sets out protocols by area (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7984045/" rel="noopener nofollow" target="_blank">Cavallini 2021</a>).</p>
      <p>Emerging, for the reasons the <a href="/regenerative-aesthetics">biostimulator guide</a> gives at length: equal to HA in the trials that compared them, never tested against saline, and sold on the device route. As a booster it is a reasonable choice for someone who reacts to HA products or wants an alternative; it is not an upgrade.</p>
    `,
  },
  {
    id: 'prod-untrialled',
    category: 'product',
    title: 'The rest of the shelf: Neauvia Hydro Deluxe, clinic cocktails, PRP and exosome "boosters"',
    tldr: 'Products sold as boosters with no controlled trial of their own under the name: HA-and-calcium-hydroxyapatite "hydro" gels, clinics\' own vitamin mixes, PRP dripped in as a booster, and exosome serums. Some borrow the class\'s evidence, some borrow another class\'s, some have none. Ask for the trial; if there is none, you are the trial.',
    evidence: 'limited',
    focus: 'general',
    note: 'Best for: nothing you cannot get from a product with a study',
    sessions: '—',
    downtime: '—',
    cost: '€150–600 per session, for an unknown',
    bodyHtml: `
      <p>A search of PubMed titles for Neauvia's HA-and-calcium-hydroxyapatite booster returns no clinical trial under the product name; the studies that exist for that manufacturer concern its cross-linked fillers, including a reassuring one in patients with Hashimoto's disease (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10297656/" rel="noopener nofollow" target="_blank">Kubik 2023</a>). Clinic-mixed "vitamin cocktails" have no CE mark, no lot number and no trial. PRP applied as a facial booster borrows the evidence of the <a href="/regenerative-aesthetics">biostimulator guide</a>, where it is moderate for skin thickness and weak for wrinkles; exosome serums are graded limited there for the reasons the FDA's safety notice gives. The newest entrant, an injectable particulated acellular dermal matrix, has one randomised split-face trial and no European track record (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12985180/" rel="noopener nofollow" target="_blank">Lee 2026</a>).</p>
      <p>Limited on evidence, not necessarily on effect: an unstudied HA gel probably hydrates like the studied ones. But the price of a booster is paid for a product, and the products with trials cost the same. Insist on one.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-expect',
    category: 'safety',
    title: 'What to expect: bumps, bruises and a day of looking worse',
    tldr: 'Small raised papules at every injection point for a few hours (longer on the neck and around the eyes), pinpoint bruising in most people — 78.8% in one trial — and swelling or redness for a day or two. Ninety-four percent of Volite patients were back to normal activities the next day. A cannula roughly halves the pain and bruising of serial puncture.',
    bodyHtml: `
      <p>Every trial reports the same profile. In the premixed toxin-and-NCTF trial, adverse events were "mild and transient (pinpoint bruising 78.8%, tightness 11.5%, swelling/erythema 13.5%)" (<a href="https://pubmed.ncbi.nlm.nih.gov/41129279/" rel="noopener nofollow" target="_blank">Alzayadneh 2026</a>); in the 439-person amino-acid trial, adverse events occurred in 1.67% and none were serious (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13300611/" rel="noopener nofollow" target="_blank">Yang 2026</a>); Volite's patient-reported study found "at least 94% of subjects returned to normal daily social activities one day after treatment" (<a href="https://pubmed.ncbi.nlm.nih.gov/31621189/" rel="noopener nofollow" target="_blank">Ogilvie 2020</a>); Profhilo's mild events "usually resolved within 72 hours" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13038071/" rel="noopener nofollow" target="_blank">Sparavigna 2026</a>). Technique changes the experience more than the product: cannula delivery scored 2.2 out of 10 for pain against 4.6 for serial puncture, with less bruising (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12793817/" rel="noopener nofollow" target="_blank">Booysen 2026</a>).</p>
      <p>Plan it for a Friday, skip aspirin, fish oil and alcohol the day before if your doctor agrees, and expect the neck and lower eyelid to show blebs for longer than the cheek. Make-up the next day, exercise and heat after 24 hours, and no facials or massage on the treated area for a week.</p>
    `,
  },
  {
    id: 'safety-nodules-reactions',
    category: 'safety',
    title: 'Persistent nodules, delayed reactions, and the reversibility that makes boosters safe',
    tldr: 'Rare, and mostly technique: persistent nodules along neck lines after HA filling that resolved with hyaluronidase; a delayed inflammatory reaction three weeks after neck-line filling that settled in two weeks; twelve adverse-event reports in Profhilo\'s first three years and 0.034% across a projected million patients since. Because it is hyaluronic acid, almost anything that persists can be dissolved.',
    bodyHtml: `
      <p>The class safety record is the best of any injectable. Post-marketing surveillance of Profhilo logged 371 adverse events in a projected 1,091,956 exposed patients — 0.034%, "most commonly edema, erythema, and discomfort" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12257262/" rel="noopener nofollow" target="_blank">Salti 2025</a>), and its first three years produced twelve reports, none serious, attributed to hypersensitivity or "inappropriate injection techniques" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7327616/" rel="noopener nofollow" target="_blank">Cassuto 2020</a>). The problems on record are technique in thin skin: persistent nodules on the necklines after HA filler, reduced within a week by hyaluronidase at 300 IU/ml (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12418908/" rel="noopener nofollow" target="_blank">AlBargawi 2025</a>), and a delayed inflammatory reaction with erythema three weeks after neck-line filling that subsided with watchful waiting (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9849916/" rel="noopener nofollow" target="_blank">Li 2023</a>). Two retrospective analyses of 1,577 and 2,126 Volite treatments examined its combination use and delayed events (<a href="https://pubmed.ncbi.nlm.nih.gov/34923524/" rel="noopener nofollow" target="_blank">Zarbafian 2022</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/36342258/" rel="noopener nofollow" target="_blank">Zarbafian 2022, delayed events</a>).</p>
      <p>The reversibility is the point: a bleb that has not settled in two weeks, a lump, or a bluish tint from too-superficial placement can be dissolved with hyaluronidase, which is why the injector must know exactly which HA was used and why a clinic without hyaluronidase on site should not be injecting it. Delayed swelling weeks or months later — sometimes after a viral illness or a vaccine — is recognised with HA products generally; it is uncommon, usually self-limiting, and something to tell a doctor about rather than a spa.</p>
    `,
  },
  {
    id: 'safety-vascular-infection',
    category: 'safety',
    title: 'Vascular and infection risk: low, not zero, and entirely about the hands holding the needle',
    tldr: 'Microdroplets in the mid-dermis rarely enter an artery, but every HA injection near the nose, glabella, temple or tear trough carries the risk that the filler guide sets out in numbers, and the treatment is the same: hyaluronidase within the hour. Infection risk is about sterility — the HIV cluster in this industry came from a spa reusing equipment, not from the gel.',
    bodyHtml: `
      <p>A booster is placed superficially and in small volumes, which keeps intravascular injection rare, but "rare" is the same word the filler literature uses, and the <a href="/fillers#safety-vascular">filler guide</a> gives the numbers and the danger zones. The expert guidance on Volite calls "rigorously upheld" aseptic technique and correct depth essential, particularly when a device is used the same day (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12287879/" rel="noopener nofollow" target="_blank">Humphrey 2025</a>). The 100-plus punctures of a full-face session are 100-plus breaches of the barrier: single-use needles, cannulas and stamps, skin disinfected, no make-up in, and a clinic — not a salon — is the whole of the infection story, and the <a href="/regenerative-aesthetics">biostimulator guide</a> tells the cautionary one about the spa that transmitted HIV with reused equipment.</p>
      <p>Warning signs in the hours after: pain out of proportion, blanching, a dusky or net-like patch, or blurred vision — an emergency, not a review appointment. Warning signs in the days after: spreading redness, heat, pus, fever — an infection, treated with antibiotics and, if needed, drainage. Both are vanishingly rare with a competent injector and the reason to have one.</p>
    `,
  },
  {
    id: 'safety-who-not',
    category: 'safety',
    title: 'Who should choose something else',
    tldr: 'Anyone expecting volume, lift or a lasting change; anyone with active acne, infection or inflammation in the area; pregnancy and breastfeeding (no data); people prone to keloids or with a history of filler reactions; and anyone whose real problem is pigment, sun damage or a fold — for whom a retinoid, a laser or a filler is the cheaper answer. Autoimmune disease is a caution to discuss, not a bar.',
    bodyHtml: `
      <p>Boosters are contraindicated in the ways all HA injectables are: active skin infection or inflammation at the site, known hypersensitivity to HA or lidocaine, pregnancy and breastfeeding for want of data, and a tendency to hypertrophic scarring. Autoimmune disease is the question patients ask most; the evidence is thin and reassuring — a PEG-cross-linked HA filler produced no change in thyroid antibodies and reduced inflammatory infiltrate in patients with Hashimoto's disease (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10297656/" rel="noopener nofollow" target="_blank">Kubik 2023</a>) — and the manufacturers' post-marketing data do not single it out. Discuss it; do not let it be used as a reason to sell you an "immune-safe" alternative with no trial.</p>
      <p>The commoner mismatch is expectation. If the concern is brown patches, the answer is in the <a href="/dark-spots">dark spots guide</a>; if it is a nasolabial fold, the <a href="/fillers">filler guide</a>; if it is laxity, the <a href="/sagging-skin">sagging skin guide</a>; if it is texture in someone who has never used a retinoid, the <a href="/retinoids">retinoids guide</a> will do more for less. A booster is for the person who already does those things and wants the finish — and who accepts that the finish lasts a season.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-which',
    category: 'faq',
    title: 'Profhilo, Skinboosters or Volite — which one?',
    tldr: 'Volite if you want the one with the randomised trial and a single session; Skinboosters or plain HA if you want the saline-controlled data and the hands; Profhilo if you want two sessions and accept that its blinded trial was negative on remodelling. Belotero Revive equalled Profhilo head to head.',
    bodyHtml: `
      <p>The differences in the trials are smaller than the differences in the marketing. Volite has the untreated-control trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10292578/" rel="noopener nofollow" target="_blank">Alexiades 2023</a>); stabilised HA has the saline-controlled hand study (<a href="https://pubmed.ncbi.nlm.nih.gov/25738851/" rel="noopener nofollow" target="_blank">Gubanova 2015</a>); Profhilo and Belotero Revive were indistinguishable on a split face (<a href="https://pubmed.ncbi.nlm.nih.gov/35699361/" rel="noopener nofollow" target="_blank">de Wit 2022</a>). Choose by protocol, price and the injector's familiarity with the product.</p>
    `,
  },
  {
    id: 'faq-how-long',
    category: 'faq',
    title: 'How long does it last?',
    tldr: 'Peak at one to three months, most of it gone by six on the face; nine months for hydration; twelve to fifteen months on the hands.',
    bodyHtml: `
      <p>Volite's responder rate ran 96% at month one, 76% at month four and 35% at month six, hydration to nine (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6817835/" rel="noopener nofollow" target="_blank">Niforos 2019</a>); Belotero Revive's hydration and radiance held to week 36 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6698156/" rel="noopener nofollow" target="_blank">Hertz-Kleptow 2019</a>); the hand trials held twelve to fifteen months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7318129/" rel="noopener nofollow" target="_blank">Wu 2020</a>). Plan two treatment rounds a year on the face, one on the hands.</p>
    `,
  },
  {
    id: 'faq-sessions',
    category: 'faq',
    title: 'How many sessions?',
    tldr: 'One for Volite; two for Profhilo; three for Skinboosters, Belotero Revive, NCTF and plain HA. Then a top-up every six months. Five is a package, not a protocol.',
    bodyHtml: `
      <p>Each figure is the trial protocol in the prices drawer, and the Skinboosters consensus adds maintenance at four-to-six-month intervals (<a href="https://pubmed.ncbi.nlm.nih.gov/29320592/" rel="noopener nofollow" target="_blank">Belmontesi 2018</a>). The randomised study of two versus three initial Skinboosters sessions found both regimens effective (<a href="https://clinicaltrials.gov/study/NCT02403986" rel="noopener nofollow" target="_blank">NCT02403986</a>); nobody has shown that a fourth or fifth adds anything.</p>
    `,
  },
  {
    id: 'faq-collagen',
    category: 'faq',
    title: 'Does it really build collagen?',
    tldr: 'In the laboratory, yes. In the blinded trials, the dermis thickened on the saline side too. Hydration is proven; remodelling is not.',
    bodyHtml: `
      <p>Explants and cell cultures show collagen and elastin genes responding to HA (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7253252/" rel="noopener nofollow" target="_blank">Nakab 2020</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5056743/" rel="noopener nofollow" target="_blank">Stellavato 2016</a>). In people, dermal thickness rose with saline as well as HA at one month (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3778226/" rel="noopener nofollow" target="_blank">Baspeyras 2013</a>) and Profhilo's "did not exceed the placebo effect" (<a href="https://pubmed.ncbi.nlm.nih.gov/41731228/" rel="noopener nofollow" target="_blank">Zanella 2026</a>). For collagen with trial evidence, read the <a href="/regenerative-aesthetics">biostimulator guide</a> and the <a href="/retinoids">retinoids guide</a>.</p>
    `,
  },
  {
    id: 'faq-age',
    category: 'faq',
    title: 'From what age?',
    tldr: 'Whenever dryness, dullness or fine crepe bother you and the basics are in place — usually late thirties onward. It is not prevention; there is no trial of that.',
    bodyHtml: `
      <p>The Belotero Revive study positioned its product as "a perfect early intervention approach in patients that do not need volumizing treatment" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6698156/" rel="noopener nofollow" target="_blank">Hertz-Kleptow 2019</a>); the Volite trial's median age was 58 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10292578/" rel="noopener nofollow" target="_blank">Alexiades 2023</a>). Nobody has followed twenty-somethings for a decade. Sunscreen and a retinoid are the prevention; a booster is a finish.</p>
    `,
  },
  {
    id: 'faq-botox',
    category: 'faq',
    title: 'Can I have it with Botox or filler on the same day?',
    tldr: 'Yes — three randomised trials found toxin plus a booster beat toxin alone, and one premixed them in the same syringe.',
    bodyHtml: `
      <p>Toxin plus filler plus a skin-boosting HA outperformed either alone in a repeated full-face study (<a href="https://pubmed.ncbi.nlm.nih.gov/31334927/" rel="noopener nofollow" target="_blank">Hedén 2019</a>); premixed toxin and NCTF beat toxin alone on a split face (<a href="https://pubmed.ncbi.nlm.nih.gov/41129279/" rel="noopener nofollow" target="_blank">Alzayadneh 2026</a>); toxin plus VYC-12 beat toxin alone at the crow's feet (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12355333/" rel="noopener nofollow" target="_blank">Neves 2025</a>). Expert guidance allows same-day non-ablative devices with careful sequencing (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12287879/" rel="noopener nofollow" target="_blank">Humphrey 2025</a>).</p>
    `,
  },
  {
    id: 'faq-under-eye',
    category: 'faq',
    title: 'Will it fix my under-eyes?',
    tldr: 'Crepe and dryness, modestly and briefly; hollows and pigment, no. Nothing under the eye has beaten placebo.',
    bodyHtml: `
      <p>The open-label periorbital data are encouraging (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13558540/" rel="noopener nofollow" target="_blank">Yi 2026</a>) and the placebo-controlled perioral data are sobering (<a href="https://pubmed.ncbi.nlm.nih.gov/41731228/" rel="noopener nofollow" target="_blank">Zanella 2026</a>). Sort hollow from pigment from crepe with the <a href="/dark-circles">dark circles guide</a> before paying for any of them.</p>
    `,
  },
  {
    id: 'faq-cost',
    category: 'faq',
    title: 'What does it cost per year?',
    tldr: 'About €700–2,000 a year for the face depending on the product, €600–1,200 for the hands — for a result that must be renewed every six months.',
    bodyHtml: `
      <p>Indicative European private prices: Volite €350–600 twice a year; a Skinboosters course of three at €250–400 plus a top-up; Profhilo two sessions at €300–500 twice a year; plain HA mesotherapy €120–250 a session for the best-controlled and shortest-lived result. Compare with the retinoid-and-sunscreen budget in the <a href="/retinoids">retinoids guide</a>, and buy the booster as the extra, not the base.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What a skin booster is — and what the trials measure',
    intro: '',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you book: the rules, the prices and the injector',
    intro: '',
    sections: context,
  },
  {
    id: 'uses',
    title: 'What boosters can do — every use graded',
    intro: 'Graded on the trials for each use, whichever product ran them. Hydration, radiance and the hands carry the evidence; pores, the neck, the eyes and the body carry the open-label studies.',
    sections: uses,
  },
  {
    id: 'products',
    title: 'The boosters, one by one — each graded on its own trials',
    intro: 'From the product with a randomised, evaluator-blind trial to the shelf products with none. A booster is graded on what it has shown, not on what the class claims.',
    sections: products,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The safest injectable class there is — and still an injectable: bumps and bruises for everyone, nodules and reactions for a few, and the vascular and hygiene rules that apply to every needle.',
    sections: safety,
  },
  {
    id: 'faq',
    title: 'Frequently asked questions',
    intro: 'Quick answers to what people actually ask.',
    sections: faq,
  },
];

export const focusLabels: Record<FocusArea, string> = {
  face: 'Face',
  body: 'Body & hands',
  eyes: 'Eyes & mouth',
  combo: 'Combination',
  crosslinked: 'Lightly cross-linked HA',
  uncrosslinked: 'Non-cross-linked HA',
  hybrid: 'Hybrid HA',
  cocktail: 'HA cocktail',
  dna: 'Polynucleotides',
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
