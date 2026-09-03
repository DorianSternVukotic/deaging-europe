/**
 * Crepey neck / neck lines guide — single source of truth (problem template).
 *
 * Consumed by /neck. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Editorial spine: the neck has FOUR different problems (texture, horizontal
 * lines, platysmal bands, laxity/fat) that need four different tools — most
 * disappointment comes from buying a device for a surgical neck or a cream for
 * a muscle problem. Neck-specific evidence is thinner than face evidence; tiers
 * borrowed from face data say so.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'texture' | 'lines' | 'bands' | 'laxity' | 'fat' | 'pigment' | 'general';

export type SectionCategory = 'concept' | 'context' | 'home' | 'injectable' | 'device' | 'surgery' | 'safety' | 'faq';

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
  'The neck ages differently because it is built differently: thinner skin, far fewer oil glands and hair follicles (so it heals slowly and scars easily), a sheet muscle that bands with age, and a lifetime of sun on the "V".',
  'Diagnose before you buy. Crepey texture, horizontal "necklace" lines, vertical platysmal bands, and loose skin or under-chin fat are four different problems with four different evidence-backed fixes.',
  'The strong-evidence tools are specific: botulinum toxin for bands (two phase-3 trials, 4× the placebo response), deoxycholic acid for under-chin fat (~1,000 patients in pivotal trials, permanent), and daily SPF plus a retinoid for texture.',
  'Energy devices — Ultherapy, RF microneedling, Sofwave, Thermage — deliver subtle, temporary tightening at best, and the neck is the classic site of scarring after ablative lasers. Nothing non-surgical shrinks a pinchable fold of skin.',
  'When you can pinch a fold that does not spring back, the honest answer is a neck lift: 8–12 years of result, ~2% hematoma and ~1% nerve-injury rates in pooled data from 2,106 patients — and no device series comes close.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'why-neck-ages-differently',
    category: 'concept',
    title: 'Why the neck ages faster than the face',
    tldr: 'Thin dermis, few sebaceous glands and follicles, a thin sheet muscle that bands, and decades of UV on the "V" — plus flexion and sleep creases.',
    bodyHtml: `
      <p>Neck skin is a different organ from facial skin in every way that matters for aging and for treatment. The dermis is thinner; there are far fewer sebaceous glands and hair follicles — the structures that both keep skin supple and supply the cells that re-epithelialise a wound, which is why the neck heals slowly and <a href="https://pubmed.ncbi.nlm.nih.gov/19291746/" rel="noopener nofollow" target="_blank">scars after treatments the face shrugs off</a>. Underneath lies the platysma, a thin sheet muscle running from chest to jaw that separates into vertical cords ("bands") as it thins with age, and drags the jawline down as it contracts.</p>
      <p>Add exposure: the front of the neck and the V of the chest collect decades of unprotected sun (most people stop sunscreen at the jaw), producing the red-brown mottling dermatologists call poikiloderma of Civatte. The much-discussed "tech neck" — horizontal creasing from looking down at phones — is plausible and popular; the published support is thin, and the same lines were described as "necklace lines" long before smartphones. Side- and stomach-sleeping creases are similarly documented mostly as association, not trial evidence.</p>
    `,
  },
  {
    id: 'four-problems',
    category: 'concept',
    title: 'The four neck problems (and the pinch test)',
    tldr: 'Crepey texture, horizontal lines, vertical platysmal bands, laxity/under-chin fat — most people over 50 have two or three. Each needs a different tool.',
    bodyHtml: `
      <p>Most disappointment in neck treatment comes from mismatching the tool to the problem. Sort yours first:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Crepey texture and mottled colour</strong> — photoaging of thin skin: fine crinkling, dryness, red-brown patches. Tools: SPF, retinoids, IPL for the colour, fractional lasers and light needling for texture.</li>
        <li><strong>Horizontal "necklace" lines</strong> — creases from flexion and skin folding. Tools: soft hyaluronic-acid filler threaded along the line; resurfacing softens but rarely erases.</li>
        <li><strong>Vertical platysmal bands</strong> — cords that stand out when you grimace or say "eee". Tool: botulinum toxin, or surgery when bands are thick and present at rest.</li>
        <li><strong>Laxity and submental fullness</strong> — the "turkey neck" and double chin: loose skin, fat above or below the muscle, a blunted angle. Tools: fat-dissolving injections or cryolipolysis if the skin will retract; energy devices for mild laxity; a neck lift for true skin excess.</li>
      </ul>
      <p><strong>The pinch test:</strong> pinch the skin under the jaw. If it springs back within a second, devices and injectables have a job to do. If a fold stays — a redundant curtain that doesn't retract — no device or injection in this guide shrinks it by the centimetres required; that is a surgical neck, and money spent on devices first is money spent twice.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'sequencing',
    category: 'context',
    title: 'Sequencing that follows the evidence',
    tldr: 'SPF + retinoid as the base; IPL for mottling; toxin for bands; HA for lines; energy devices for mild laxity; fat treatment only if skin retracts; surgeon before devices for excess skin.',
    bodyHtml: `
      <p>A rational order, from cheapest and best-evidenced upward:</p>
      <ol class="list-decimal pl-5 space-y-2">
        <li><strong>Daily SPF to the neck and chest, retinoid at night</strong> — the base for everything, and the only prevention with real data.</li>
        <li><strong>Red-brown mottling:</strong> IPL/BBL × 3, then yearly maintenance — the best-evidenced energy treatment on the neck.</li>
        <li><strong>Bands:</strong> botulinum toxin every 3–4 months.</li>
        <li><strong>Horizontal lines:</strong> HA skin booster or soft filler, 1–2 sessions, re-treat around 12 months.</li>
        <li><strong>Mild–moderate laxity with little fat:</strong> a microfocused-ultrasound or RF-microneedling course — judged at 6 months, expectations set to "subtle".</li>
        <li><strong>Fat under the chin:</strong> deoxycholic acid or cryolipolysis — only when the skin will retract.</li>
        <li><strong>Excess skin:</strong> a surgical consultation <em>before</em> spending on devices.</li>
      </ol>
      <p><strong>Combining:</strong> toxin plus HA in one visit is routine; do energy devices before filler (or wait 2–4 weeks after); IPL comes before fractional laser in the same course. <strong>Expectation numbers worth printing:</strong> toxin ≈ 4× the placebo response, 3–4 months; HA lines ≈ 1.4 grades, half re-treat within a year; Ultherapy ≈ visible lift in 2 of 3, subtle, 12–18 months; deoxycholic acid ≈ two-thirds achieve a visible grade change, ~40% fat reduction on MRI, permanent; IPL for poikiloderma &gt;75–80% clearance after three sessions; neck lift 8–12 years. Nothing except surgery and fat destruction is permanent — budget for annual maintenance of whatever works.</p>
    `,
  },
  {
    id: 'candidacy-prices',
    category: 'context',
    title: 'Device or surgery? Candidacy, and what things cost',
    tldr: 'Skin that retracts, mild bands, a small fat pad → injectables/devices (€250–4,700). A redundant fold, thick static bands, fullness under the muscle → surgery (€7,000–18,000).',
    bodyHtml: `
      <p><strong>Device / injectable candidate:</strong> skin that retracts on the pinch test, bands visible mainly on animation, a modest submental fat pad, BMI under ~30 (the microfocused-ultrasound data show obesity predicts poor response).</p>
      <p><strong>Surgical candidate:</strong> a pinchable fold that stays, thick bands present at rest, fullness that sits <em>under</em> the platysma or comes from low-hanging glands, an obtuse angle between chin and neck. A neck lift resets the cervicomental angle by re-suspending and plicating the muscle, removing fat above and below it, and excising skin through facelift-type incisions — no device series shows that scale of change.</p>
      <p><strong>Indicative prices (UK-sourced, EUR converted — verify locally):</strong> toxin for bands €250–450 per session · HA filler/skin booster for lines €400–800 · hyperdilute biostimulator €600–1,000 per session · deoxycholic acid €900–1,200 per session · cryolipolysis €700–1,000 per cycle · IPL €300–600 per session · non-ablative fractional laser €450–950 · RF microneedling €700–1,400 per session · Thermage €1,800–4,000 · Ultherapy neck zone €400–950, full €3,000–4,700 · Renuvion €4,700–8,000 · threads €1,800–3,500 · submental liposuction €3,000–6,000 · <a href="https://www.marcpacifico.co.uk/blog/neck-lift-cost-in-the-uk-2025-what-you-can-expect-to-pay/" rel="noopener nofollow" target="_blank">neck lift €7,000–18,000</a> (more with a facelift; Switzerland and France higher, Spain and Belgium lower).</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-spf',
    category: 'home',
    title: 'Daily sunscreen on neck and chest',
    tldr: 'The only prevention with trial evidence — borrowed from the face, where daily SPF measurably slowed visible aging. Most people stop at the jaw.',
    evidence: 'strong',
    focus: 'texture',
    sessions: 'Daily, forever',
    cost: '€15–40/month',
    bodyHtml: `
      <p>The neck's crepiness and red-brown mottling are overwhelmingly photoaging, and the one randomized trial of daily sunscreen against visible skin aging (in adults under 55) found daily users showed no detectable aging increase over 4.5 years — evidence generated on faces and forearms, but the biology of the neck's V is identical. The practical failure is habit: sunscreen applications stop at the jawline. Extend every morning's SPF 30–50 down to the chest, and reapply on days the neckline is out. Every treatment below is undone without it — IPL results in particular recur with sun.</p>
    `,
  },
  {
    id: 'home-retinoid',
    category: 'home',
    title: 'Retinoids on the neck',
    tldr: 'Face RCTs support retinoids for texture and pigment; there is no neck trial, and the neck tolerates them less well — start low, buffer, be patient.',
    evidence: 'moderate',
    focus: 'texture',
    sessions: '2–3 nights/wk → nightly',
    cost: '€20–90/month',
    bodyHtml: `
      <p>Tretinoin and retinol have decades of vehicle-controlled facial trials behind them for fine wrinkling and pigment; those results are the reason to use them on the neck, because no neck-specific trial exists — this tier is borrowed. The practical difference is tolerance: thinner skin with fewer oil glands stings and flakes more. Start with 0.025% tretinoin or a retinaldehyde/retinol product two or three nights a week, buffer over moisturizer, and expect 4–6 months before texture changes. A ceramide-type moisturizer (see our <a href="/ceramides">ceramides guide</a>) is the tolerance tool; SPF is non-negotiable.</p>
    `,
  },
  {
    id: 'home-neck-creams',
    category: 'home',
    title: 'Dedicated "neck creams"',
    tldr: 'As moisturizers they soften crepiness within hours — which is what brand studies measure. No neck cream has a vehicle-controlled, peer-reviewed trial.',
    evidence: 'limited',
    focus: 'texture',
    sessions: 'Daily',
    cost: '€80–140',
    bodyHtml: `
      <p>Revision Nectifirm, SkinMedica Neck Correct, StriVectin and their peers sell on brand-run "clinical" results that are, on inspection, hydration effects: any good moisturizer plumps crepey skin for hours, and instrument readings improve accordingly. None has a vehicle-controlled trial published in a peer-reviewed journal, and none contains anything a retinoid-plus-SPF routine lacks except a premium. If you enjoy one as your neck moisturizer, fine — but the €100 is better spent on tretinoin and sunscreen, and the evidence gradient here is steep.</p>
    `,
  },
  {
    id: 'home-led',
    category: 'home',
    title: 'At-home LED neck devices',
    tldr: 'One sham-controlled 70-person RCT: dermatologists rated 77% improved vs 9% on sham after 12 weeks — but users themselves could not tell the difference.',
    evidence: 'emerging',
    focus: 'texture',
    sessions: '9 min/day, 12 wks',
    cost: '€180–470',
    bodyHtml: `
      <p>A rare genuine trial of a home device: a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11743241/" rel="noopener nofollow" target="_blank">multicenter, randomized, double-blind sham-controlled study</a> of a Korean LED neck collar (9 minutes a day for 12 weeks, 70 participants). Blinded dermatologists rated 77% of the active group improved versus 9% on sham; the device also came with thyroid ultrasound monitoring that found no changes. The honest caveat is in the same paper: participants' own ratings did not separate active from sham — the improvement is real to a trained eye and instruments, subtle to the owner. Modest texture benefit; nothing for bands, fat, or laxity. (Dose and device honesty matter — see our <a href="/red-light-therapy">red-light guide</a>.)</p>
    `,
  },
  {
    id: 'home-rf-microcurrent',
    category: 'home',
    title: 'Home RF and microcurrent devices',
    tldr: 'Small manufacturer studies of home RF report mild tightening; microcurrent effects are transient. Not laxity treatments.',
    evidence: 'limited',
    focus: 'laxity',
    sessions: 'Several ×/wk',
    cost: '€150–500',
    bodyHtml: `
      <p>Home radiofrequency wands (TriPollar-class) have <a href="https://www.researchgate.net/publication/50393607_Home-use_TriPollar_RF_device_for_facial_skin_tightening_Clinical_study_results" rel="noopener nofollow" target="_blank">manufacturer-run studies</a> reporting mild facial tightening; a systematic review of home beauty devices finds few controlled trials of any class. Microcurrent produces a transient "toned" look with no durable structural data. On the neck specifically there is essentially nothing published. Pleasant rituals; not answers to a loose neck.</p>
    `,
  },
  {
    id: 'home-pads-pillows',
    category: 'home',
    title: 'Silicone neck pads and "anti-wrinkle" pillows',
    tldr: 'Sleep creases are real, and overnight silicone hydrates the fold temporarily — no durable evidence for either product.',
    evidence: 'limited',
    focus: 'lines',
    sessions: 'Nightly',
    cost: '€20–150',
    bodyHtml: `
      <p>Side- and stomach-sleeping do compress the neck and cheek into folds, and a plastic-surgery society press release makes much of it — but no trial shows a pillow prevents lines. Silicone patches work by occlusion: the skin under them is hydrated and plumped on removal, an effect that fades over the day. Harmless, cheap, temporary. Back-sleeping is free.</p>
    `,
  },
];

const injectables: Section[] = [
  {
    id: 'inj-toxin',
    category: 'injectable',
    title: 'Botulinum toxin for platysmal bands ("Nefertiti lift")',
    tldr: 'Two phase-3 trials (900+ patients) and a 2024 FDA approval: four times the placebo response at two weeks. Bands only — not skin, not fat.',
    evidence: 'strong',
    focus: 'bands',
    sessions: 'Every 3–4 months',
    downtime: 'None',
    cost: '€250–450',
    bodyHtml: `
      <p>The one neck treatment with pivotal randomized data. Botulinum toxin relaxes the platysma cords, softening the vertical bands that stand out on animation and easing the muscle's downward pull on the jawline — the "Nefertiti lift". Two phase-3 placebo-controlled trials underpinned the <a href="https://news.abbvie.com/2024-10-18-BOTOX-R-Cosmetic-onabotulinumtoxinA-Receives-FDA-Approval-for-Moderate-to-Severe-Vertical-Bands-Connecting-the-Jaw-and-Neck-Platysma-Bands" rel="noopener nofollow" target="_blank">2024 FDA approval for platysma bands</a>, with roughly four times the placebo responder rate at two weeks and no excess of dysphagia, voice change, or neck weakness at label doses (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12855634/" rel="noopener nofollow" target="_blank">pooled analysis</a>). Duration 3–4 months.</p>
      <p>What it does not do: tighten loose skin or reduce fat. Risks scale with dose and depth — high doses (&gt;50–75 U) or injection near the strap muscles can cause swallowing or voice problems; injectors with neck anatomy training only.</p>
    `,
  },
  {
    id: 'inj-deoxycholic',
    category: 'injectable',
    title: 'Deoxycholic acid (Kybella / Belkyra) for under-chin fat',
    tldr: 'Two ~500-patient pivotal RCTs: about two-thirds achieve a visible reduction, ~40% fat loss on MRI, permanent. Expect a swollen "bullfrog" fortnight.',
    evidence: 'strong',
    focus: 'fat',
    sessions: '2–4, monthly',
    downtime: '1–2 wks swelling',
    cost: '€900–1,200/session',
    bodyHtml: `
      <p>A synthetic bile acid injected into submental fat dissolves the fat cells permanently. The <a href="https://www.sciencedirect.com/science/article/pii/S0190962216301293" rel="noopener nofollow" target="_blank">pivotal phase-3 program</a> (two trials of ~500 patients each) showed roughly two-thirds of treated patients achieving at least a one-grade improvement on clinician and patient scales, with MRI-measured fat volume down ~40%. It is <a href="https://www.ema.europa.eu/en/documents/psusa/deoxycholic-acid-list-nationally-authorised-medicinal-products-psusa00010525202104_en.pdf" rel="noopener nofollow" target="_blank">nationally authorised across the EU</a> and the UK (prescription-only; supply varies by country).</p>
      <p>Costs beyond the invoice: dramatic swelling for up to two weeks, numbness for longer, and <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/jocd.13619" rel="noopener nofollow" target="_blank">temporary marginal mandibular nerve weakness</a> (an asymmetric smile) in ~4%; skin ulceration if injected too superficially. The decisive candidacy rule: only where skin will retract — dissolving fat under a loose curtain leaves a looser curtain.</p>
    `,
  },
  {
    id: 'inj-ha-lines',
    category: 'injectable',
    title: 'HA filler / skin boosters for horizontal lines',
    tldr: 'Eleven studies including one RCT: soft HA threaded along the crease improves lines ~1.4 grades; about half re-treat within a year.',
    evidence: 'moderate',
    focus: 'lines',
    sessions: '1–2, then ~yearly',
    downtime: '1–3 days',
    cost: '€400–800',
    bodyHtml: `
      <p>Horizontal neck lines are creases, and the best-supported fix is filling the crease: dilute or soft hyaluronic-acid gel placed intradermally along the line (Restylane Skinboosters/Vital, Volite-class products, or low-G′ fillers). A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12813632/" rel="noopener nofollow" target="_blank">systematic review</a> pooled eleven studies — one randomized — reporting roughly 1.4 grades of improvement on line scales, with about half of patients retreating within 12 months; a <a href="https://journals.lww.com/prsgo/fulltext/2019/08000/treatment_of_horizontal_neck_wrinkles_with.4.aspx" rel="noopener nofollow" target="_blank">prospective series</a> describes the technique. Superficial nodules and blue-grey Tyndall discoloration are the practical complications of thin neck skin — small volumes, correct plane, hyaluronidase on hand (see our <a href="/fillers">filler guide</a>).</p>
    `,
  },
  {
    id: 'inj-caha',
    category: 'injectable',
    title: 'Hyperdilute calcium hydroxylapatite (Radiesse) for crepiness/laxity',
    tldr: 'Open-label series and consensus reports show improved neck skin quality; no controlled trial.',
    evidence: 'emerging',
    focus: 'laxity',
    sessions: '2–3, 4–6 wks apart',
    downtime: '1–3 days',
    cost: '€600–1,000/session',
    bodyHtml: `
      <p>Diluting CaHA 1:2 to 1:6 and fanning it under crepey neck skin is now a common "biostimulation" protocol; <a href="https://pubmed.ncbi.nlm.nih.gov/34363289/" rel="noopener nofollow" target="_blank">consensus papers</a> and <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10226485/" rel="noopener nofollow" target="_blank">open-label series</a> report improved laxity and texture scores over 12–18 months, and face biopsies show CaHA does build new collagen. What's missing on the neck is any comparison against sham or against hydration alone. Plausible, popular, unproven — and irreversible, unlike HA.</p>
    `,
  },
  {
    id: 'inj-plla',
    category: 'injectable',
    title: 'Poly-L-lactic acid (Sculptra) for neck laxity',
    tldr: 'Extrapolated from face data; neck-specific evidence is case series, with nodule risk in thin skin.',
    evidence: 'limited',
    focus: 'laxity',
    sessions: '2–3',
    downtime: '1–3 days',
    cost: '€600–1,000/session',
    bodyHtml: `
      <p>PLLA has a randomized pivotal trial for nasolabial folds and a reputation for global "skin quality"; on the neck the published record is <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11299635/" rel="noopener nofollow" target="_blank">small series</a> and expert technique papers, with the neck's thin skin raising nodule risk if dilution or massage is imperfect. A registered trial exists; until it reports, this stays a face-derived extrapolation with more downside than the CaHA protocol above.</p>
    `,
  },
  {
    id: 'inj-profhilo',
    category: 'injectable',
    title: 'Profhilo for the neck',
    tldr: 'Open-label sponsor studies show hydration gains; the only blinded sham-controlled trial (face) failed to beat saline. Bruising in ~half.',
    evidence: 'limited',
    focus: 'texture',
    sessions: '2, a month apart',
    downtime: '1–2 days',
    cost: '€300–500/session',
    bodyHtml: `
      <p>The "bioremodelling" injectable is marketed hard for crepey necks on the strength of open-label, manufacturer-linked studies reporting laxity and hydration improvements — with bruising in around half of patients. The one <a href="https://link.springer.com/article/10.1007/s00266-026-05634-4" rel="noopener nofollow" target="_blank">randomized, triple-blind, saline-controlled trial</a> (face) found dermal thickness rose on <em>both</em> the Profhilo and the placebo side. Expect a hydration glow with a strong placebo component; expect no lift.</p>
    `,
  },
  {
    id: 'inj-polynucleotides',
    category: 'injectable',
    title: 'Polynucleotides for the neck',
    tldr: 'The current boom — small industry-adjacent face trials, no neck-specific controlled data.',
    evidence: 'limited',
    focus: 'texture',
    sessions: '2–3',
    downtime: '1–3 days bumps',
    cost: '€350–1,000/session',
    bodyHtml: `
      <p>Salmon-DNA "skin boosters" ride a European trend with a thin file: a handful of small, mostly Korean face trials with industry ties, and nothing controlled on the neck. CE-marked as devices (a low evidence bar), not approved as medicines. Full grading lives in our <a href="/regenerative-aesthetics">regenerative-aesthetics guide</a>; for the neck specifically, the tier is borrowed and downgraded.</p>
    `,
  },
];

const devices: Section[] = [
  {
    id: 'dev-ipl',
    category: 'device',
    title: 'IPL / BBL for red-brown mottling (poikiloderma of Civatte)',
    tldr: 'The best-evidenced energy treatment on the neck: >75–80% clearance of redness and pigment after ~3 sessions across 300+ patients over 20 years.',
    evidence: 'moderate',
    focus: 'pigment',
    sessions: '3, then yearly',
    downtime: 'Hours; mild purpura',
    cost: '€300–600/session',
    bodyHtml: `
      <p>The mottled red-brown V is vascular plus pigment, and IPL hits both. Weiss treated <a href="https://pubmed.ncbi.nlm.nih.gov/10971554/" rel="noopener nofollow" target="_blank">135 patients</a> with 1–5 sessions and saw over 75% clearance with ~5% minor side effects; Rusciani's <a href="https://pubmed.ncbi.nlm.nih.gov/18177401/" rel="noopener nofollow" target="_blank">seven-year, 175-patient series</a> reported over 80% clearance of both components after three sessions; histology after IPL shows <a href="https://pubmed.ncbi.nlm.nih.gov/22540888/" rel="noopener nofollow" target="_blank">reorganised elastic fibres and homogenised melanin</a>. Pulsed-dye laser is the alternative for predominantly red cases. Limits: lighter skin types only (pigment is the target), "striping" between passes with careless technique, and recurrence with sun — hence maintenance every year or two plus SPF.</p>
    `,
  },
  {
    id: 'dev-ultherapy',
    category: 'device',
    title: 'Microfocused ultrasound (Ultherapy)',
    tldr: 'The only device with a regulatory neck-lift clearance; ~2 in 3 show measurable lift on photographs — subtle, no sham-controlled trial, painful, 12–18 months.',
    evidence: 'moderate',
    focus: 'laxity',
    sessions: '1, repeat 12–18 mo',
    downtime: 'None–mild swelling',
    cost: '€400–950 zone / €3,000–4,700 full',
    bodyHtml: `
      <p>MFU-V heats the deep fascia in precise points under real-time imaging, and its FDA "lift" clearance for the neck and submental area rests on blinded-photograph studies in which roughly two-thirds of patients showed measurable improvement — mostly rated "mild", with BMI over 30 predicting poor response. Registered trials continue (<a href="https://clinicaltrials.gov/study/NCT02736825" rel="noopener nofollow" target="_blank">e.g.</a>), and Ultherapy Prime added <a href="https://www.americanmedspa.org/news/ultherapy-prime-gains-fda-clearance-to-treat-abdomen-arms-becomes-only-solution-with-real-time-imaging-for-face-neck-decollete-and-body/" rel="noopener nofollow" target="_blank">newer clearances</a>. No sham-controlled trial exists; it hurts; and it cannot help a neck with true skin excess. The right buyer: mild-to-moderate laxity, good elasticity, realistic expectations, one session every year or so.</p>
    `,
  },
  {
    id: 'dev-nafl',
    category: 'device',
    title: 'Non-ablative fractional lasers (1550/1927 nm, Moxi, Clear + Brilliant)',
    tldr: 'The lasers dermatologists actually use on the neck: crepiness and mottled pigment improve over 3–5 sessions without ablation. Face data, small neck series.',
    evidence: 'moderate',
    focus: 'texture',
    sessions: '3–5',
    downtime: '3–7 days redness',
    cost: '€450–950/session',
    bodyHtml: `
      <p>Non-ablative fractional lasers heat microcolumns of dermis under an intact surface, which is exactly what fragile neck skin needs. The 1927 nm thulium laser has <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10025463/" rel="noopener nofollow" target="_blank">prospective photoaging data</a> for pigment and elasticity, and a <a href="https://www.researchgate.net/publication/378105888_Neck_and_chest_rejuvenation_with_fractional_1440_and_1927-nm_low-powered_diode_laser" rel="noopener nofollow" target="_blank">neck-and-chest series</a> with low-powered 1440/1927 nm diodes reports safe improvement of non-facial photodamage. Expect better crepiness and colour, little effect on deep lines or laxity; lower densities and test spots in darker skin. The tier is borrowed from the face — the neck evidence is uncontrolled series.</p>
    `,
  },
  {
    id: 'dev-cryolipolysis',
    category: 'device',
    title: 'Cryolipolysis (CoolSculpting CoolMini) for under-chin fat',
    tldr: 'Pivotal study plus meta-analysis: ~20% fat-layer reduction per cycle, no sham control; rare paradoxical fat growth has needed surgery.',
    evidence: 'moderate',
    focus: 'fat',
    sessions: '1–2 cycles',
    downtime: 'Numbness for weeks',
    cost: '€700–1,000/cycle',
    bodyHtml: `
      <p>Freezing submental fat with a small vacuum applicator reduces the fat layer by roughly 20% per cycle in the <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/lsm.22440" rel="noopener nofollow" target="_blank">pivotal study</a> (60 subjects; most had two treatments), with high satisfaction and no serious device events; a <a href="https://pubmed.ncbi.nlm.nih.gov/40473257/" rel="noopener nofollow" target="_blank">2025 meta-analysis</a> pools the submental data. Less dramatic than deoxycholic acid, less swelling too. Weeks of numbness and occasional transient smile weakness are expected; the rare complication to know is <a href="https://academic.oup.com/asjopenforum/article/doi/10.1093/asjof/ojaf008/7994283" rel="noopener nofollow" target="_blank">paradoxical adipose hyperplasia</a> — fat that grows instead of shrinking — documented under the chin and corrected surgically.</p>
    `,
  },
  {
    id: 'dev-rf-microneedling',
    category: 'device',
    title: 'RF microneedling (Morpheus8 class)',
    tldr: 'Retrospective series show improved laxity scores; deep settings can hollow a thin neck — clinicians increasingly cap depth at 2–3 mm.',
    evidence: 'emerging',
    focus: 'laxity',
    sessions: '3, 4–6 wks apart',
    downtime: '3–5 days',
    cost: '€700–1,400/session',
    bodyHtml: `
      <p>Insulated needles deliver radiofrequency heat into the dermis; on the neck the published support is <a href="https://pubmed.ncbi.nlm.nih.gov/32983756/" rel="noopener nofollow" target="_blank">retrospective series</a> reporting improved laxity grades and high satisfaction, and a registered histology study. The neck-specific caution is fat: at 3–4 mm the energy reaches subcutaneous fat, and on a thin neck that can hollow the submental area or leave a "ropey" look — the same fat-loss signal regulators have logged on faces. Conservative depth, experienced hands, grid-mark and pigment risk in darker skin. Full context in our <a href="/microneedling">microneedling guide</a>.</p>
    `,
  },
  {
    id: 'dev-thermage',
    category: 'device',
    title: 'Monopolar RF (Thermage, ThermiTight)',
    tldr: 'Prospective uncontrolled series for submental laxity; modest, temporary, expensive per session.',
    evidence: 'emerging',
    focus: 'laxity',
    sessions: '1, repeat 12–24 mo',
    downtime: 'None',
    cost: '€1,800–4,000',
    bodyHtml: `
      <p>Bulk dermal heating without needles has a <a href="https://www.academia.edu/144031103/Temperature_Controlled_Monopolar_Radiofrequency_in_the_Treatment_of_Submental_Skin_Laxity_A_Prospective_Study" rel="noopener nofollow" target="_blank">prospective submental study</a> and decades of open-label face series — no controlled neck trial. Results are modest, build over months, and fade within one to two years; the one-session convenience is its selling point, the per-session price its weakness. Contraindicated with pacemakers/defibrillators.</p>
    `,
  },
  {
    id: 'dev-sofwave',
    category: 'device',
    title: 'Sofwave (synchronous ultrasound)',
    tldr: 'FDA-cleared for neck lift on small blinded-photo studies; comfortable, subtle, short track record.',
    evidence: 'emerging',
    focus: 'laxity',
    sessions: '1–2',
    downtime: 'None',
    cost: '€2,000–3,500',
    bodyHtml: `
      <p>A newer ultrasound platform heating the mid-dermis in parallel lines rather than deep points — less painful than Ultherapy, with <a href="https://clinicaltrials.gov/study/NCT04146584" rel="noopener nofollow" target="_blank">registered studies</a> behind its neck-lift clearance and a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12374570/" rel="noopener nofollow" target="_blank">published series</a>. Blinded-photo improvement in most patients, subtle in magnitude, and too few years of data to know durability. A reasonable "gentle Ultherapy" for mild laxity; not a substitute for surgery.</p>
    `,
  },
  {
    id: 'dev-renuvion',
    category: 'device',
    title: 'Subdermal helium plasma (Renuvion / J-Plasma)',
    tldr: 'One industry-funded single-arm trial (65 patients): blinded reviewers identified the treated photo 82% of the time; it is a minimally invasive procedure with an FDA safety history.',
    evidence: 'emerging',
    focus: 'laxity',
    sessions: '1 procedure',
    downtime: '1–3 wks, compression',
    cost: '€4,700–8,000',
    bodyHtml: `
      <p>Renuvion is not a walk-in device: through small incisions under local anaesthesia, a helium-plasma probe contracts the tissue under the skin. The <a href="https://academic.oup.com/asj/article/43/10/1174/7072381" rel="noopener nofollow" target="_blank">FDA-IDE trial</a> (65 patients, single-arm, evaluator-blinded, sponsor-funded) had blinded reviewers correctly identify the post-treatment photo 82.5% of the time at six months, with 92% oedema, 86% sensory change, 55% bruising, 6% temporary motor-nerve weakness and 5% hematoma. The FDA issued a <a href="https://www.fda.gov/medical-devices/safety-communications/update-use-renuvionj-plasma-device-certain-aesthetic-procedures-fda-safety-communication" rel="noopener nofollow" target="_blank">safety communication</a> against off-label use before neck clearance arrived; the dermal handpiece is limited to skin types I–III. Real contraction, real procedure, one trial.</p>
    `,
  },
  {
    id: 'dev-fractional-ablative',
    category: 'device',
    title: 'Fractional ablative CO₂ / erbium on the neck',
    tldr: 'Small series show texture gains — and the neck is the classic site of hypertrophic scarring after ablative resurfacing. Conservative settings, expert hands, or not at all.',
    evidence: 'limited',
    focus: 'texture',
    sessions: '1–2',
    downtime: '7–10 days',
    cost: '€600–1,500',
    bodyHtml: `
      <p>What works on the face can scar the neck. Fife, Fitzpatrick and Zachary documented <a href="https://pubmed.ncbi.nlm.nih.gov/19291746/" rel="noopener nofollow" target="_blank">hypertrophic scarring after fractional CO₂ on the neck</a>, attributing it to the neck's scarce pilosebaceous units and poor vascularity combined with high energy and overlap; <a href="https://pubmed.ncbi.nlm.nih.gov/27115980/" rel="noopener nofollow" target="_blank">severe cases</a> followed. Full-field ablative resurfacing of the neck is essentially abandoned; conservative low-density fractional treatment by experienced operators, with meticulous wound care and no keloid history, is the remaining niche — persistent focal redness is the early warning, treated with pulsed-dye laser and steroid. The non-ablative class above is the safer route to the same texture goals.</p>
    `,
  },
  {
    id: 'dev-threads',
    category: 'device',
    title: 'PDO / PLLA thread lifts for the neck',
    tldr: 'Meta-analysis: swelling in 34%, bruising 26%, plus dimpling, extrusion and nerve injury; thin neck skin shows threads, and results fade in 12–18 months.',
    evidence: 'limited',
    focus: 'laxity',
    sessions: '1',
    downtime: '5–7 days',
    cost: '€1,800–3,500',
    bodyHtml: `
      <p>Absorbable threads suit the neck poorly: the skin is thin (threads show and dimple), the lift vector is vertical against gravity with no bony anchor, and results typically fade within 12–18 months. A <a href="https://www.frontiersin.org/journals/surgery/articles/10.3389/fsurg.2026.1769458/full" rel="noopener nofollow" target="_blank">2026 meta-analysis of thread-lift complications</a> finds swelling in a third and bruising in a quarter of patients, with dimpling, visible or extruded threads, infection, granuloma, migration and nerve or parotid injury reported. Uncontrolled efficacy, controlled complication data — the wrong ratio for a €3,000 procedure.</p>
    `,
  },
];

const surgery: Section[] = [
  {
    id: 'surg-neck-lift',
    category: 'surgery',
    title: 'Neck lift / platysmaplasty',
    tldr: 'The only fix for true skin excess and thick bands: 8–12 years of result; pooled data on 2,106 patients show 1.4% band recurrence, 1.8% hematoma, 0.9% nerve injury.',
    evidence: 'strong',
    focus: 'laxity',
    note: 'Observational strength — decades of consistent outcome series; randomized trials against devices are not feasible.',
    sessions: '1 (8–12 yrs)',
    downtime: '2 wks social; 4–6 wks swelling',
    cost: '€7,000–18,000',
    bodyHtml: `
      <p>A neck lift re-suspends and plicates the platysma (corset platysmaplasty), removes fat above and below the muscle, addresses low-hanging glands where needed, and excises redundant skin through incisions behind the ears and under the chin — resetting the angle between chin and neck in a way no device series approaches. A <a href="https://pubmed.ncbi.nlm.nih.gov/39406360/" rel="noopener nofollow" target="_blank">2024 systematic review pooling 12 studies and 2,106 patients</a> reports platysma-band recurrence of 1.4%, hematoma 1.8%, nerve damage 0.9% and sialoma 0.3%; a 2026 review of revision surgery finds under-correction and recurrence the usual reasons to return. Durability is usually quoted at 8–12 years.</p>
      <p>Recovery: general anaesthesia or deep sedation, two weeks of social downtime, weeks of swelling, months of neck numbness. Prices in the UK run <a href="https://www.cadoganclinic.com/cosmetic-surgery/facial-surgery/neck-lift-cost" rel="noopener nofollow" target="_blank">£8,000–18,000+</a> (more with a facelift); continental Europe roughly €7,000–18,000. Choose a board-certified plastic or facial-plastic surgeon with a neck-specific portfolio.</p>
    `,
  },
  {
    id: 'surg-liposuction',
    category: 'surgery',
    title: 'Submental liposuction',
    tldr: 'Permanent removal of isolated under-chin fat in people with good skin elasticity — quick, local anaesthesia, wrong choice when the skin won\'t retract.',
    evidence: 'moderate',
    focus: 'fat',
    sessions: '1 (permanent)',
    downtime: '3–7 days + compression',
    cost: '€3,000–6,000',
    bodyHtml: `
      <p>For a double chin that is fat rather than skin — typically younger patients (under ~45) with elasticity that passes the pinch test — submental liposuction removes the pad permanently in a single local-anaesthetic procedure, at a cost comparable to two or three rounds of deoxycholic acid without the fortnight of swelling per round. Its long clinical history stands in for trials. The failure mode is patient selection: suction fat from under a lax curtain and the curtain hangs lower. Laser-assisted lipolysis adds heat with only body-series evidence behind it.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety',
    category: 'safety',
    title: 'Neck-specific safety',
    tldr: 'Scarring after ablative energy, pigment in darker skin, the thyroid zone, toxin dosing, fat-dissolver nerve injury, filler vessels, cryo fat growth.',
    bodyHtml: `
      <p>The neck punishes aggression. The specific hazards:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Scarring:</strong> fewer adnexal structures and poorer blood supply mean hypertrophic scarring after ablative lasers is <a href="https://pubmed.ncbi.nlm.nih.gov/19291746/" rel="noopener nofollow" target="_blank">well documented</a>; deep RF microneedling and subdermal plasma carry burn and induration risk; Renuvion's dermal handpiece is restricted to skin types I–III.</li>
        <li><strong>Darker skin:</strong> pigment-targeting IPL and pulsed-dye laser are unsuitable for Fitzpatrick IV–VI; fractional lasers need lower density and test spots. Reassuringly, the LED and thulium-laser evidence is largely from type III–IV cohorts.</li>
        <li><strong>Thyroid:</strong> no society guidance exists; manufacturer protocols exclude the thyroid cartilage and gland region from ultrasound and RF fields, and the home-LED trial monitored the gland by ultrasound and found no change. Practical rule: no energy delivery over the midline lower neck; declare thyroid nodules or disease at consultation.</li>
        <li><strong>Toxin:</strong> label doses (26–36 U) showed no excess swallowing or voice problems in the trials; those risks become real at &gt;50–75 U, with deep injection near the strap muscles, or in anyone with pre-existing dysphagia or neuromuscular disease.</li>
        <li><strong>Deoxycholic acid:</strong> ~4% temporary marginal mandibular nerve weakness (asymmetric smile), dysphagia, and skin ulceration if placed too superficially — treat only inside the marked submental zone, never near the jaw border.</li>
        <li><strong>Filler:</strong> superficial veins, perforating arteries and lymphatics make intravascular injection and lymphatic swelling possible; superficial nodules and Tyndall shine are the common complications. Low-G′ products, small volumes, intradermal plane, hyaluronidase available.</li>
        <li><strong>Cryolipolysis:</strong> paradoxical adipose hyperplasia is documented under the chin and needed a neck lift to correct.</li>
        <li><strong>Threads:</strong> one in three swell, one in four bruise; dimpling, extrusion, migration, and nerve or parotid injury are reported.</li>
        <li><strong>Surgery:</strong> hematoma ~1.8%, nerve injury ~0.9%, sialoma 0.3%, rare skin necrosis in pooled data.</li>
      </ul>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-cream',
    category: 'faq',
    title: 'Does a neck cream actually work?',
    tldr: 'As a moisturizer, yes — for hours. No neck cream has a vehicle-controlled trial.',
    bodyHtml: `
      <p>Hydration visibly softens crepiness within hours, and that is what brand studies measure. Nothing in a €100 neck cream outperforms a retinoid plus daily SPF on the evidence, and no neck cream has a peer-reviewed, vehicle-controlled trial. Use one if you like it; don't expect structure to change.</p>
    `,
  },
  {
    id: 'faq-tretinoin',
    category: 'faq',
    title: 'Can I use tretinoin on my neck?',
    tldr: 'Yes — start low, buffer, and give it 4–6 months.',
    bodyHtml: `
      <p>The neck tolerates retinoids less well than the face: begin with 0.025% tretinoin or a retinaldehyde/retinol product two or three nights a week, apply over moisturizer, and judge texture at 4–6 months. The supporting trials are facial — there is no neck-specific RCT — so the tier is borrowed, but the biology is the same.</p>
    `,
  },
  {
    id: 'faq-botox',
    category: 'faq',
    title: 'Will Botox fix my "turkey neck"?',
    tldr: 'It fixes the vertical bands — not loose skin or fat.',
    bodyHtml: `
      <p>Toxin relaxes the platysma cords that stand out when you grimace and softens the downward pull on the jawline; two phase-3 trials with over 900 patients showed four times the placebo response at two weeks, lasting 3–4 months. It does nothing for a loose skin fold or a fat pad — those need the fat treatments, the devices, or a surgeon.</p>
    `,
  },
  {
    id: 'faq-lines',
    category: 'faq',
    title: 'What removes horizontal neck lines?',
    tldr: 'Soft HA filler threaded along the crease — ~1.4 grades better, half re-treat within a year.',
    bodyHtml: `
      <p>The best-supported option is dilute hyaluronic-acid filler or a "skin booster" placed intradermally along the line (eleven studies, one randomized). Lasers and retinoids soften lines but rarely erase them; surgery does not remove them at all. Expect to repeat around the one-year mark.</p>
    `,
  },
  {
    id: 'faq-ultherapy',
    category: 'faq',
    title: 'Is Ultherapy worth it for the neck?',
    tldr: 'For mild laxity with realistic expectations — subtle lift in ~2 of 3, 12–18 months.',
    bodyHtml: `
      <p>It is the only device with a regulatory neck-lift clearance, and around two-thirds of patients show measurable improvement on blinded photographs — mostly graded "mild". No sham-controlled trial exists, it hurts, obesity predicts poor response, and it cannot help true skin excess. Worth it for early laxity if "subtle and temporary" is acceptable.</p>
    `,
  },
  {
    id: 'faq-kybella',
    category: 'faq',
    title: 'Is Kybella/Belkyra available in Europe, and what are the risks?',
    tldr: 'Yes, prescription-only; two-thirds see a visible reduction, permanent, with a swollen fortnight and ~4% temporary smile asymmetry.',
    bodyHtml: `
      <p>Deoxycholic acid is nationally authorised across the EU and UK, though supply varies by country. Two ~500-patient pivotal trials show about two-thirds achieving a visible grade change and ~40% fat reduction on MRI — and the fat does not come back. Expect a dramatically swollen "bullfrog" neck for up to two weeks, numbness for longer, and a ~4% chance of temporary smile asymmetry. Only for skin that will retract.</p>
    `,
  },
  {
    id: 'faq-neck-lift',
    category: 'faq',
    title: 'When is a neck lift the only answer?',
    tldr: 'When the pinch test fails: a fold that stays, thick bands at rest, fullness under the muscle.',
    bodyHtml: `
      <p>No injectable or device shrinks skin by centimetres. When you can pinch a fold that doesn't spring back, when bands are thick and present at rest, or when fullness sits under the platysma, a neck lift resets the angle for roughly a decade — with ~2% hematoma and ~1% nerve-injury rates in pooled data from 2,106 patients. See a surgeon before spending on devices, not after.</p>
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
    intro: 'Why the neck ages differently, and the four problems hiding under one complaint.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you book',
    intro: 'The evidence-following sequence, candidacy for devices vs surgery, and prices.',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home',
    intro: 'The prevention base with real data — and the neck-cream tier that doesn\'t have any.',
    sections: home,
  },
  {
    id: 'injectables',
    title: 'Injectables',
    intro: 'Toxin for bands and fat-dissolvers have pivotal trials; the "skin quality" injectables mostly don\'t.',
    sections: injectables,
  },
  {
    id: 'devices',
    title: 'Energy devices',
    intro: 'From the well-supported (IPL for mottling) to the scar-prone (ablative lasers) — graded for the neck specifically.',
    sections: devices,
  },
  {
    id: 'surgery',
    title: 'Surgery',
    intro: 'What a neck lift fixes that nothing else can.',
    sections: surgery,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The neck punishes aggression — the specific hazards, listed.',
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
  texture: 'Texture',
  lines: 'Lines',
  bands: 'Bands',
  laxity: 'Laxity',
  fat: 'Fat',
  pigment: 'Pigment',
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
