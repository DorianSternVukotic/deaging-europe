/**
 * Red-light therapy (photobiomodulation) guide — single source of truth.
 *
 * Consumed by /red-light-therapy. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank". Editorial rule for this guide: clinic-dose evidence and
 * home-device reality are graded separately — underdosing drops a tier.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'skin' | 'hair' | 'body' | 'brain' | 'eyes' | 'myth' | 'general';

export type SectionCategory = 'concept' | 'context' | 'cosmetic' | 'systemic' | 'safety' | 'faq';

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
  'Red and near-infrared light measurably nudges skin collagen and wrinkle depth in randomized trials — at clinic doses of 2+ sessions a week for 8–15 weeks. The effect is real and modest.',
  'The strongest cosmetic use is hair: sham-controlled trials and meta-analyses of FDA-cleared home laser devices show genuine density gains in pattern hair loss.',
  'Dose decides everything. Positive trials used ~20–60 mW/cm² and 4–18 J/cm² per session; bench tests of consumer devices found chaotic outputs and instructions that can\'t deliver a known dose.',
  'The systemic claims — testosterone, sleep, "energy", fat melting — run on animal data, single tiny studies, or sponsor trials. Grade them marketing until proven otherwise.',
  'Safety at cosmetic doses is reassuring (no oncologic signal in reviews), with two real cautions: protect your eyes around bright panels, and melasma-prone skin should patch-test — visible light is a known pigment trigger.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-is-pbm',
    category: 'concept',
    title: 'What red-light therapy actually is',
    tldr: 'Red (~630–660 nm) and near-infrared (~810–850 nm) light absorbed by mitochondria, nudging cell energy and repair signalling.',
    bodyHtml: `
      <p>Photobiomodulation (PBM) is the use of red and near-infrared light at intensities too low to heat tissue. The textbook mechanism: photons are absorbed by <strong>cytochrome c oxidase</strong> in mitochondria, releasing inhibitory nitric oxide, restoring electron transport, and transiently boosting ATP and repair signalling — laid out in <a href="https://onlinelibrary.wiley.com/doi/10.1111/php.12864" rel="noopener nofollow" target="_blank">Hamblin's mechanism reviews</a>.</p>
      <p>Two honesty notes most marketing skips. First, the mechanism is not settled — Hamblin himself co-authored <a href="https://journals.sagepub.com/doi/10.1089/photob.2021.0119" rel="noopener nofollow" target="_blank">"mechanisms beyond cytochrome c oxidase"</a>, and light-sensitive ion channels are serious rivals. Second, the dose-response is <em>biphasic</em>: stimulation at low doses, inhibition at high ones. More minutes under the panel is not more benefit; hitting the studied window is.</p>
    `,
  },
  {
    id: 'dosing-basics',
    category: 'concept',
    title: 'The dose problem — why many devices do nothing',
    tldr: 'Positive trials delivered ~20–60 mW/cm² and 4–18 J/cm² per session. Bench tests show consumer devices often can\'t deliver a known dose.',
    bodyHtml: `
      <p>Every positive skin trial lives inside a fairly narrow window: irradiance around <strong>20–60 mW/cm²</strong> at the skin, <strong>4–18 J/cm² per session</strong>, roughly 10 minutes, at least twice a week, for 4–12+ weeks (summarized in a <a href="https://www.cureus.com/articles/442028-what-to-look-for-in-red-light-therapy-a-product-guide-backed-by-science" rel="noopener nofollow" target="_blank">peer-reviewed device guide</a>).</p>
      <p>Independent bench testing of five consumer devices found <a href="https://doi.org/10.3390/dj13020076" rel="noopener nofollow" target="_blank">wide scatter in actual wavelength, power, and irradiance</a>, unstable output, and manufacturer instructions inconsistent with delivering any known dose — irradiance collapses with distance from a panel. The knee-osteoarthritis literature makes the stakes concrete: trials at recommended doses produced clinically meaningful pain relief; trials below them produced nothing.</p>
      <p><strong>The buyer's rule:</strong> a device that won't state its measured mW/cm² at a defined distance is a decorative object. With a true ~30 mW/cm² you reach ~18 J/cm² in 10 minutes — inside the window; at half a metre from a weak panel you may deliver 1–2 J/cm² — inside the placebo group.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'clinic-vs-home',
    category: 'context',
    title: 'Clinic panels vs home masks vs helmets',
    tldr: 'Clinic arrays are what most skin trials used; hair helmets are the home devices that were actually trialled; masks vary wildly.',
    bodyHtml: `
      <p>Three device worlds, three evidence levels:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Clinic LED arrays</strong> — the hardware behind the classic skin RCTs (Omnilux-class 633+830 nm panels, GentleWaves): calibrated dose, supervised course, the evidence standard.</li>
        <li><strong>Home hair devices</strong> (laser combs, helmets) — the exception where home hardware was the tested article: sham-controlled RCTs and meta-analyses support them directly.</li>
        <li><strong>Home masks and panels</strong> — FDA "clearances" here are safety paperwork, not efficacy proof; only a minority have published trials on the actual device (LG Pra.L has a split-face trial; several big names state "clinical study not publicly available").</li>
      </ul>
      <p>Prices run roughly €300–500 for credible masks and €500–1,500+ for large panels (indicative). The spec sheet — measured irradiance, wavelengths, trial on the device itself — matters more than the brand ambassador.</p>
    `,
  },
  {
    id: 'expectations',
    category: 'context',
    title: 'Realistic expectations and timelines',
    tldr: 'First measurable changes at 4–6 weeks, judged at 8–15 weeks. Subtle in the mirror; visible on instruments.',
    bodyHtml: `
      <p>Collagen remodelling is slow, and the positive trials reflect it: 10 sessions over 4 weeks was the <em>fastest</em> positive protocol, with most running 8–15 weeks at 2–3 sessions per week before judgment. Expect texture, tone, and fine-line softening on the order of what instruments detect — not what injectables deliver.</p>
      <p>Maintenance schedules ("1–2× a week forever") are extrapolation; no trial has tested them. And in the hierarchy of skin-aging tools on this site, red light slots <em>after</em> sunscreen, retinoids, and in-office resurfacing — a gentle adjunct, never the engine.</p>
    `,
  },
];

const cosmetic: Section[] = [
  {
    id: 'rlt-hair',
    category: 'cosmetic',
    title: 'Pattern hair loss (LLLT combs & helmets)',
    tldr: 'The strongest cosmetic indication: sham-controlled RCTs and meta-analyses show real density gains from home devices.',
    evidence: 'strong',
    focus: 'hair',
    sessions: '3×/wk, 16–26 wks',
    cost: '€200–1,200 (device)',
    bodyHtml: `
      <p>Low-level laser devices for androgenetic alopecia are the rare consumer hardware validated as sold. A <a href="https://pubmed.ncbi.nlm.nih.gov/30706177/" rel="noopener nofollow" target="_blank">meta-analysis of double-blind RCTs</a> found large standardized gains in hair density versus sham, in both sexes, for combs and helmets alike; a <a href="https://pubmed.ncbi.nlm.nih.gov/34980962/" rel="noopener nofollow" target="_blank">meta-analysis restricted to FDA-cleared home devices</a> agrees. Adding LLLT to minoxidil beat minoxidil alone by <a href="https://link.springer.com/article/10.1007/s10103-025-04593-7" rel="noopener nofollow" target="_blank">~6.6 hairs/cm²</a> in a 2025 meta-analysis.</p>
      <p><strong>Protocol from the trials:</strong> ~650 nm devices, 3 sessions a week, 15–25 minutes, judged at 16–26 weeks — and continued indefinitely to hold gains.</p>
      <p class="text-ink/60 text-sm italic">Caveat: many primary trials are manufacturer-funded and glowing helmets blind imperfectly. Expect thickening, not a restored hairline.</p>
    `,
  },
  {
    id: 'rlt-skin-clinic',
    category: 'cosmetic',
    title: 'Skin rejuvenation at clinic doses',
    tldr: 'Multiple RCTs — including sham-controlled split-face designs with biopsies — show modest wrinkle and collagen improvements.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: '2×/wk, 8–15 wks',
    cost: '€40–90/session',
    bodyHtml: `
      <p>The anchor trials: <a href="https://journals.sagepub.com/doi/10.1089/pho.2013.3616" rel="noopener nofollow" target="_blank">Wunsch &amp; Matuschka 2014</a> (136 volunteers, 30 sessions at ~9 J/cm², blinded photo evaluation plus ultrasound-measured collagen density — all improved versus untreated controls) and <a href="https://pubmed.ncbi.nlm.nih.gov/17566756/" rel="noopener nofollow" target="_blank">Lee 2007</a> (76 patients, sham-controlled split-face, biopsy-verified collagen and elastin increases, wrinkle reduction up to 36%). A 137-woman <a href="https://journals.sagepub.com/doi/10.1089/photob.2022.0114" rel="noopener nofollow" target="_blank">2023 periocular trial</a> added ~30% wrinkle-volume reductions after just 10 sessions.</p>
      <p>Consistent direction, objective endpoints — and small samples, short follow-up, frequent industry proximity. "Real and modest at proper doses" is the defensible summary.</p>
    `,
  },
  {
    id: 'rlt-home-masks',
    category: 'cosmetic',
    title: 'Home LED masks, as actually sold',
    tldr: 'Plausibility borrowed from clinic trials; few devices have published studies on themselves, and dosing is chaos.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '3–5×/wk, 10 min',
    cost: '€300–500',
    bodyHtml: `
      <p>Most masks borrow the clinic-trial halo without earning it: FDA clearance attests to safety, several flagship masks list <em>no publicly available clinical study</em>, and <a href="https://doi.org/10.3390/dj13020076" rel="noopener nofollow" target="_blank">bench testing</a> shows real-world outputs scattered far from spec. The exceptions deserve naming: LG's Pra.L has a split-face trial, and a 2024 multicenter randomized trial of a home <em>neck</em> LED device was positive.</p>
      <p>A well-specified mask worn religiously can sit inside the trial dose window — that's why this is "emerging" rather than dismissed. Demand measured irradiance, use it 3–5× a week, and judge at 12 weeks, not 12 days.</p>
    `,
  },
  {
    id: 'rlt-wounds',
    category: 'cosmetic',
    title: 'Wound healing & scars',
    tldr: 'PBM\'s founding use — many small positive trials, but syntheses grade the evidence low and scar data total ~300 patients.',
    evidence: 'emerging',
    focus: 'skin',
    bodyHtml: `
      <p>Light therapy began in wound healing, and cell-level data are deepest here. Human syntheses stay cautious: a scoping review of PBM for burn and surgical scars found only <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13106236/" rel="noopener nofollow" target="_blank">7 clinical studies (297 patients)</a>, and meta-analyses in specific wounds grade the evidence low to very low. Plausible aid to post-procedure recovery (many clinics use LED after lasers and microneedling); unproven as a standalone scar treatment.</p>
    `,
  },
  {
    id: 'rlt-acne',
    category: 'cosmetic',
    title: 'Acne (blue + red light)',
    tldr: 'The rigorous syntheses are unimpressed: no convincing benefit of light monotherapy over standard care.',
    evidence: 'limited',
    focus: 'skin',
    bodyHtml: `
      <p>Mechanistically tidy — blue light targets <em>C.&nbsp;acnes</em>, red calms inflammation — and clinically underwhelming. The <a href="https://pubmed.ncbi.nlm.nih.gov/28338214/" rel="noopener nofollow" target="_blank">Cochrane-based systematic review</a> (71 RCTs, 4,211 participants) found the light-monotherapy evidence weak, and a <a href="https://www.annfammed.org/content/17/6/545" rel="noopener nofollow" target="_blank">blue-light meta-analysis</a> found no significant lesion reduction versus comparators. Retinoids, benzoyl peroxide, and prescription care keep first place; light is an adjunct at best.</p>
    `,
  },
];

const systemic: Section[] = [
  {
    id: 'rlt-joints',
    category: 'systemic',
    title: 'Joint pain (knee osteoarthritis)',
    tldr: '22 placebo-controlled trials with a clean dose-response: meaningful pain relief at recommended doses, nothing below them.',
    evidence: 'moderate',
    focus: 'body',
    sessions: '2–3×/wk courses',
    bodyHtml: `
      <p>The best-quantified PBM indication anywhere: a <a href="https://pubmed.ncbi.nlm.nih.gov/31662383/" rel="noopener nofollow" target="_blank">meta-analysis of 22 randomized placebo-controlled trials</a> in knee osteoarthritis found pain reductions peaking around 32 points on a 100-point scale — but <em>only</em> in trials using the recommended laser doses; low-dose trials matched placebo. No adverse events across the pool.</p>
      <p>Two caveats: several authors are affiliated with the laser-therapy association whose dose guidelines were being tested, and earlier independent reviews were equivocal. For a reader: worth trying via a physiotherapist with proper equipment; not worth expecting from a weak home panel.</p>
    `,
  },
  {
    id: 'rlt-recovery',
    category: 'systemic',
    title: 'Muscle recovery & pre-exercise conditioning',
    tldr: 'Several meta-analyses show less soreness and faster strength recovery — small trials, huge protocol variability.',
    evidence: 'moderate',
    focus: 'body',
    bodyHtml: `
      <p>Applied before or after training, PBM shows consistent short-term effects: a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12286287/" rel="noopener nofollow" target="_blank">2025 meta-analysis</a> found moderate-to-large reductions in delayed-onset soreness and better strength recovery, and pre-exercise application improved performance markers in pooled trials. The fine print: tiny samples, wildly heterogeneous doses, and one research group producing much of the literature. An acute-recovery aid for the committed — not a fitness enhancer.</p>
    `,
  },
  {
    id: 'rlt-vision',
    category: 'systemic',
    title: 'Vision & eye aging (670 nm)',
    tldr: 'A single group\'s small studies show brief morning exposures improving color vision; a clinical device won FDA authorization for dry AMD.',
    evidence: 'emerging',
    focus: 'eyes',
    bodyHtml: `
      <p>Two separate stories. The headline one — <a href="https://www.nature.com/articles/s41598-021-02311-1" rel="noopener nofollow" target="_blank">3 minutes of morning 670 nm light</a> improving color-contrast sensitivity ~20% for a week — comes from one lab's ~20-person studies, without established independent replication. The clinical one: a sham-controlled trial of an in-office multiwavelength system in <strong>dry macular degeneration</strong> earned the first <a href="https://www.healio.com/news/ophthalmology/20241105/fda-grants-de-novo-authorization-to-photobiomodulation-device-for-dry-amd" rel="noopener nofollow" target="_blank">FDA authorization for the disease</a> in 2024 — with a modest absolute benefit, delivered by an ophthalmic device.</p>
      <p>Neither finding means face panels help eyes — see the safety section for why you should shield them instead.</p>
    `,
  },
  {
    id: 'rlt-brain',
    category: 'systemic',
    title: 'Brain & mood (transcranial PBM)',
    tldr: 'Dozens of small pilots trend positive in impaired populations; no adequately powered trial. Consumer helmets outrun the data.',
    evidence: 'emerging',
    focus: 'brain',
    bodyHtml: `
      <p>Shining near-infrared at the head has a genuinely active research field: a <a href="https://link.springer.com/article/10.1007/s10103-025-04484-x" rel="noopener nofollow" target="_blank">2025 meta-analysis</a> found positive effects on cognition in cognitively impaired people and partial effects in healthy ones — flagged as cautious, heterogeneous, and pilot-grade. Whether meaningful light even reaches the cortex through scalp and skull is contested. Interesting science; premature hardware.</p>
    `,
  },
  {
    id: 'rlt-thyroid',
    category: 'systemic',
    title: 'Thyroid (Hashimoto\'s)',
    tldr: 'One small unreplicated trial program reduced thyroxine needs. Do not point panels at your thyroid on that basis.',
    evidence: 'emerging',
    focus: 'body',
    bodyHtml: `
      <p>A single São Paulo group ran a randomized placebo-controlled trial (n=43) of near-infrared light over the thyroid in autoimmune hypothyroidism, reporting <a href="https://onlinelibrary.wiley.com/doi/10.1155/2018/8387530" rel="noopener nofollow" target="_blank">reduced levothyroxine requirements at 6-year follow-up</a>. Single centre, small, unreplicated — and thyroid tissue is not something to self-irradiate experimentally. If you have thyroid disease, keep panels off your neck and this study in the "watch" pile.</p>
    `,
  },
  {
    id: 'rlt-fat',
    category: 'systemic',
    title: 'Fat reduction / "body contouring"',
    tldr: 'Sponsor-run trials with tape-measure endpoints; no independent replication of durable fat loss.',
    evidence: 'limited',
    focus: 'myth',
    bodyHtml: `
      <p>The "laser lipo" panels rest on manufacturer-funded studies measuring waist circumference — a fluid-shift-sensitive endpoint — over weeks, with <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3315881/" rel="noopener nofollow" target="_blank">no imaging-verified, durable fat-mass loss</a> independently replicated. The proposed mechanism (light making fat cells leak lipids) has never been shown to translate into lasting change. FDA clearance here certifies safety, not results. Spend the money on anything else in this guide.</p>
    `,
  },
  {
    id: 'rlt-sleep',
    category: 'systemic',
    title: 'Sleep',
    tldr: 'One 20-athlete study from 2012 plus the fact red light disrupts melatonin less than blue. That\'s the whole file.',
    evidence: 'limited',
    focus: 'myth',
    bodyHtml: `
      <p>The perennially cited evidence is a <a href="https://pubmed.ncbi.nlm.nih.gov/23182016/" rel="noopener nofollow" target="_blank">2012 study of 20 elite basketball players</a> — better sleep scores and melatonin after nightly whole-body red light — never replicated. What does hold: red light suppresses evening melatonin far less than blue, so red-tinted evening lighting is circadian-friendlier. "Red light treats insomnia" remains marketing.</p>
    `,
  },
  {
    id: 'rlt-testosterone',
    category: 'systemic',
    title: 'Testosterone',
    tldr: 'Animal data only — no credible human trial, and some animal work shows harm at higher exposures. Debunk.',
    evidence: 'limited',
    focus: 'myth',
    bodyHtml: `
      <p>The claim chain runs through a 2013 rat study; even device vendors' own literature pages concede human evidence is absent. No robust human RCT of light-to-testicle testosterone enhancement exists, and misdosed exposure showed harm signals in animals. This one can be closed: no.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety',
    category: 'safety',
    title: 'Safety: eyes, melasma, and who should skip it',
    tldr: 'Reassuring overall — no oncologic signal in reviews. Shield eyes near panels; melasma-prone skin should patch-test.',
    bodyHtml: `
      <p>At cosmetic doses PBM is impressively benign — trial pools report essentially no adverse events, and a systematic review found <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10309024/" rel="noopener nofollow" target="_blank">no oncologic safety signal</a>. The genuine cautions:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Eyes.</strong> One consumer mask (Neutrogena's) was withdrawn over theoretical eye-injury risk. Wear supplied shields with masks, never stare into panels, treat invisible near-infrared with extra respect, and get ophthalmology advice if you have retinal disease.</li>
        <li><strong>Melasma & pigment-prone skin.</strong> Visible light is a recognized melasma trigger; risk concentrates in blue/short wavelengths, but patch-test conservatively and stop if darkening appears.</li>
        <li><strong>Photosensitizing medication</strong> (doxycycline, amiodarone, St John's Wort, others) and photosensitive conditions (lupus, porphyria) — standard trial exclusions; treat as contraindications pending medical advice.</li>
        <li><strong>Pregnancy</strong> — no safety dataset exists; "not recommended for lack of data" is the honest phrasing.</li>
        <li><strong>Active or suspected skin cancer</strong> — never irradiate; PBM's pro-repair signalling is exactly what you don't want over a malignancy.</li>
      </ul>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-collagen',
    category: 'faq',
    title: 'Does red light actually rebuild collagen?',
    tldr: 'Measurably yes, at clinic doses — modestly, over 8–15 weeks.',
    bodyHtml: `
      <p>Trials with ultrasound collagen measurement and biopsies show real increases after courses of 2+ sessions a week at proper doses. The change is instrument-real and mirror-subtle — think "skin quality", not "years erased". It will not mimic retinoids, lasers, or injectables.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until I see anything?',
    tldr: '4–6 weeks for first changes; judge at 12 weeks.',
    bodyHtml: `
      <p>The fastest positive trial used 10 sessions across 4 weeks; most ran 8–15 weeks. Collagen remodelling lags the sessions, so the fair test of any device or course is a 12-week before/after photo in identical lighting — not a fortnight of squinting at the mirror.</p>
    `,
  },
  {
    id: 'faq-mask-strength',
    category: 'faq',
    title: 'Is my LED mask strong enough?',
    tldr: 'Only if the maker states measured irradiance — aim for ~20–60 mW/cm² at the skin.',
    bodyHtml: `
      <p>The published window is ~20–60 mW/cm² and 4–18 J/cm² per session. Bench testing found consumer devices scattered all over that map, with instructions that can't deliver a known dose. A brand that publishes measured irradiance at a stated distance is playing the evidence game; one that answers with adjectives is selling glow-in-the-dark plastic.</p>
    `,
  },
  {
    id: 'faq-hair',
    category: 'faq',
    title: 'Can it really regrow hair?',
    tldr: 'Thicken, yes — meta-analyses back the helmets. Restore a hairline, no.',
    bodyHtml: `
      <p>Sham-controlled RCTs and meta-analyses of home laser combs and helmets show significant density gains, and combining with minoxidil beats minoxidil alone. Commit to 3 sessions a week for 4–6 months, keep the minoxidil, and expect thickening rather than resurrection.</p>
    `,
  },
  {
    id: 'faq-eyes',
    category: 'faq',
    title: 'Is it safe for my eyes?',
    tldr: 'Use the shields — one mask was withdrawn over eye risk.',
    bodyHtml: `
      <p>Cosmetic doses are well tolerated, but bright close-range panels and masks deserve respect: wear the supplied eye protection, never stare into emitters, and clear it with an ophthalmologist if you have retinal disease or recent eye surgery. The tiny "670 nm for aging vision" studies used dim, brief, controlled exposures — not a face panel.</p>
    `,
  },
  {
    id: 'faq-energy',
    category: 'faq',
    title: 'Does it boost testosterone, sleep, or "cellular energy"?',
    tldr: 'No, thin, and marketing — respectively.',
    bodyHtml: `
      <p>Testosterone: animal-only, with harm signals at high exposure — no. Sleep: one unreplicated 20-athlete study, plus the true-but-different fact that red evening light disturbs melatonin less than blue. "Cellular energy": mechanism language doing marketing work. The proven lanes are skin (modest), hair (real), and musculoskeletal recovery (modest).</p>
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
    intro: 'What photobiomodulation is, and why dose decides everything.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Devices & expectations',
    intro: 'Clinic arrays, helmets, and masks — and what a realistic result looks like.',
    sections: context,
  },
  {
    id: 'cosmetic',
    title: 'Skin & hair claims',
    intro: 'The cosmetic uses, graded — from trial-backed hair devices to the acne disappointment.',
    sections: cosmetic,
  },
  {
    id: 'systemic',
    title: 'Body & mind claims',
    intro: 'Joints, recovery, vision, brain — and the claims that don\'t survive.',
    sections: systemic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'Reassuring overall, with two real cautions.',
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
  skin: 'Skin',
  hair: 'Hair',
  body: 'Body',
  brain: 'Brain',
  eyes: 'Eyes',
  myth: 'Myth check',
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
