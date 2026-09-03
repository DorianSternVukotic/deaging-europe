/**
 * Anti-aging supplements guide — single source of truth.
 *
 * Consumed by /supplements. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank". Evidence tiers follow the house rubric (see evidence.ts);
 * be honest downward — animal-only or negative human data is `limited`.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea =
  | 'muscle'
  | 'heart'
  | 'brain'
  | 'skin'
  | 'gut'
  | 'sleep'
  | 'longevity'
  | 'metabolic'
  | 'general';

export type SectionCategory = 'concept' | 'evaluate' | 'core' | 'longevity' | 'skin' | 'overhyped' | 'safety' | 'faq';

export interface Section {
  id: string;
  category: SectionCategory;
  title: string;
  tldr: string;
  evidence?: Evidence;
  focus?: FocusArea;
  bodyHtml: string;
  /** Optional small note under the summary (e.g. "Top pick: …" drives the comparison cards). */
  note?: string;
}

export interface SectionGroup {
  id: string;
  title: string;
  intro: string;
  sections: Section[];
}

export const keyTakeaways: string[] = [
  'The best-evidenced "anti-aging stack" is boring: enough protein, creatine with resistance training, 25–30 g of fiber, and correcting a documented vitamin D deficiency.',
  'No NAD+ booster, senolytic, or longevity blend has improved a human aging outcome in a published clinical trial — biomarkers move, lifespans have not.',
  'Several famous molecules have already failed or collapsed in humans: resveratrol, spermidine (its one good trial was null), taurine (its aging-biomarker premise fell apart in 2025), and multivitamins for lifespan.',
  'Beauty-from-within supplements — collagen peptides, astaxanthin, oral hyaluronic acid — have real but modest trial support; they assist sunscreen and retinoids, never replace them.',
  'Buy single ingredients with third-party testing (NSF, Informed Sport, USP) at trial-validated doses; skip proprietary blends, "detox" products, and anything sold for injection.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-supplements-can-do',
    category: 'concept',
    title: 'What supplements can — and cannot — do',
    tldr: 'They fix deficiencies and nudge specific systems. Nothing in a capsule rivals training, sleep, diet, or sunscreen.',
    bodyHtml: `
      <p>Every supplement on this page competes with a brutal benchmark: the interventions we already know slow age-related decline. Resistance training, cardiorespiratory fitness, adequate protein, not smoking, and daily sunscreen each have evidence no pill approaches. Supplements earn a place in two situations: <strong>correcting a measured shortfall</strong> (vitamin D, magnesium, protein, fiber) or <strong>adding a specific, trial-tested effect</strong> (creatine for muscle, collagen peptides for skin).</p>
      <p>The rest of the market — NAD+ boosters, senolytics, longevity blends — is running ahead of its evidence. Some of it is genuinely promising and worth watching. None of it has yet improved a human aging <em>outcome</em> (function, disease, lifespan) in a published randomized trial. This guide grades each option by what human data actually show, not by mechanism or mouse results.</p>
      <p>A useful rule: the more a product promises (energy + skin + brain + immunity + longevity), the less any single claim is likely to survive scrutiny.</p>
    `,
  },
  {
    id: 'how-we-grade',
    category: 'concept',
    title: 'How we grade the evidence',
    tldr: 'Strong = repeated human trials with consistent outcomes. Limited = anecdote, animal data, or negative trials.',
    bodyHtml: `
      <p>Each supplement below carries one of four tiers, based on <em>human</em> evidence only:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Strong</strong> — multiple randomized controlled trials or meta-analyses with consistent, meaningful outcomes.</li>
        <li><strong>Moderate</strong> — consistent human trials, but small, short, single-context, or industry-funded.</li>
        <li><strong>Emerging</strong> — one or two small human trials, or reliable biomarker changes without outcome data yet.</li>
        <li><strong>Limited</strong> — anecdote, animal-only data, marketing, or predominantly negative human trials.</li>
      </ul>
      <p>Two honesty rules we apply throughout: spectacular mouse data cannot lift a tier (mice are not small humans — resveratrol taught the field that lesson), and a failed or null trial counts <em>against</em> a molecule even when its mechanism is beautiful.</p>
    `,
  },
];

const evaluate: Section[] = [
  {
    id: 'third-party-testing',
    category: 'evaluate',
    title: 'How to evaluate any supplement before buying',
    tldr: 'Look for batch-level third-party testing — NSF, Informed Sport, USP — and trial-matched doses on the label.',
    bodyHtml: `
      <p>Supplements are regulated as foods, not medicines — nobody checks a product does what it claims before it reaches you. Three certification programs do independent verification:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong><a href="https://www.nsfsport.com/" rel="noopener nofollow" target="_blank">NSF Certified for Sport</a></strong> — every batch tested for ~280 banned substances, label accuracy, and contaminants; the only program recognized by USADA.</li>
        <li><strong>Informed Sport / Informed Choice</strong> — UK-based (LGC) batch testing; the most relevant sports certification in Europe.</li>
        <li><strong><a href="https://www.opss.org/article/why-third-party-certification-important-dietary-supplements" rel="noopener nofollow" target="_blank">USP Verified</a></strong> — verifies identity, strength, purity, and manufacturing quality (not banned substances).</li>
      </ul>
      <p>In the EU, any ingredient without significant pre-1997 food history needs <strong>novel-food authorization</strong> (Regulation 2015/2283) — which is why nicotinamide riboside is legal here and NMN is not. "Anti-aging", "senolytic", and "NAD+ booster" are not EFSA-authorized health claims; a seller using them is already outside the rules.</p>
      <p>Then check the dose: a product citing a trial should contain the trial's dose. A "longevity blend" with 50 mg of resveratrol cites studies that used 1,000+ mg — of a molecule that failed anyway.</p>
    `,
  },
  {
    id: 'red-flags',
    category: 'evaluate',
    title: 'Red flags that end the conversation',
    tldr: 'Proprietary blends, mouse citations, injectable "research chemicals", cure-all breadth, no certificate of analysis.',
    bodyHtml: `
      <p>Any one of these is a reason to close the tab:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>"Proprietary blend"</strong> without per-ingredient doses — structurally designed to hide underdosing.</li>
        <li><strong>Mouse studies cited as if human</strong> — check whether the linked paper says "mice", "C. elegans", or "in vitro".</li>
        <li><strong>Peptides or "research chemicals" sold for injection</strong> (epithalon, BPC-157, GH secretagogues) — unregulated, unproven, and with documented purity problems from grey-market vendors.</li>
        <li><strong>Cure-all breadth</strong> — energy, skin, brain, immunity, and longevity from one capsule.</li>
        <li><strong>No batch testing or certificate of analysis</strong>, or claims of being "FDA approved" (supplements never are).</li>
        <li><strong>Subscription-trap pricing</strong> and countdown timers — evidence-confident brands don't need urgency theater.</li>
      </ul>
    `,
  },
];

const core: Section[] = [
  {
    id: 'creatine',
    category: 'core',
    title: 'Creatine monohydrate',
    tldr: 'The best-evidenced supplement in this guide: with resistance training it adds measurable muscle and strength in older adults.',
    evidence: 'strong',
    focus: 'muscle',
    note: 'Top pick: Thorne Creatine (NSF Certified for Sport)',
    bodyHtml: `
      <p>Creatine is the rare supplement with decades of consistent human data. Meta-analyses show that creatine plus resistance training produces greater gains in lean mass and strength than <a href="https://link.springer.com/article/10.1186/s11556-025-00392-9" rel="noopener nofollow" target="_blank">training alone, including in older adults</a> — exactly the population losing 1–2% of muscle per year. Muscle is the closest thing aging research has to a retirement account: grip strength and lean mass predict mortality better than most blood tests.</p>
      <p><strong>Brain effects are earlier-stage:</strong> small trials suggest modest cognitive benefits under stress (sleep deprivation, vegetarian diets), but the aging-brain data remain preliminary — a bonus, not the reason to take it.</p>
      <p><strong>How to take it:</strong> 3–5 g/day of plain creatine monohydrate, every day, no loading phase needed. Expect ~1 kg of intracellular water weight in the first weeks — that is muscle hydration, not fat.</p>
      <p><strong>Safety:</strong> among the most studied supplements in existence; benign in healthy people. Reports of kidney harm at normal doses have not held up, but discuss it with a clinician if you have kidney disease.</p>
    `,
  },
  {
    id: 'protein',
    category: 'core',
    title: 'Protein (and where whey fits)',
    tldr: 'Most adults over 50 under-eat protein. Hitting ~1.2 g/kg/day preserves the muscle that predicts how you age.',
    evidence: 'strong',
    focus: 'muscle',
    bodyHtml: `
      <p>Total protein intake is the foundation the rest of this page stands on. A <a href="https://onlinelibrary.wiley.com/doi/10.1002/jcsm.12922" rel="noopener nofollow" target="_blank">meta-analysis of trials in older adults</a> supports protein supplementation combined with resistance training for lean mass and strength. European intake surveys consistently find adults over 50 clustering near the old minimum (0.8 g/kg) — set for avoiding deficiency, not for aging well.</p>
      <p><strong>Target:</strong> ~1.2–1.6 g/kg of body weight per day for adults focused on tissue maintenance, spread across meals of 25–40 g. Whey is the best-supported supplement form because of its leucine content; food-first works equally well if you actually hit the numbers.</p>
      <p><strong>Collagen peptides are a special case</strong> — a lower-quality protein for muscle, but with their own skin/joint evidence. They get <a href="/collagen">a full guide of their own</a>.</p>
    `,
  },
  {
    id: 'fiber',
    category: 'core',
    title: 'Fiber (psyllium) & fermented foods',
    tldr: 'Fiber has better human mortality data than any capsule in this guide: 15–30% lower all-cause mortality at 25–29 g/day.',
    evidence: 'strong',
    focus: 'gut',
    bodyHtml: `
      <p>It is almost embarrassing that the best "longevity supplement" is fiber. The landmark <a href="https://www.thelancet.com/article/S0140-6736(18)31809-9/fulltext" rel="noopener nofollow" target="_blank">Lancet series</a> (185 prospective studies and 58 trials, ~135 million person-years) found 15–30% lower all-cause and cardiovascular mortality at the highest fiber intakes, with the best risk reduction at 25–29 g/day and a dose-response beyond. Psyllium is the pragmatic supplement form when food falls short, and modestly lowers LDL cholesterol as a bonus.</p>
      <p><strong>Fermented foods</strong> are earlier-stage but interesting: in a <a href="https://pubmed.ncbi.nlm.nih.gov/34256014/" rel="noopener nofollow" target="_blank">Stanford RCT</a>, six daily servings increased microbiome diversity and lowered 19 inflammatory proteins over 10 weeks — a tiny trial (n=36), but cheap, safe, and food-first.</p>
      <p><strong>How to take it:</strong> count your food fiber first; add 5–10 g of psyllium daily with plenty of water if you're short. Ramp up slowly to spare your gut the surprise.</p>
    `,
  },
  {
    id: 'vitamin-d',
    category: 'core',
    title: 'Vitamin D — correct deficiency, skip "optimization"',
    tldr: 'Valuable if you are actually deficient (common in Northern Europe). Supplementing sufficient people showed no benefit in the big trials.',
    evidence: 'moderate',
    focus: 'general',
    bodyHtml: `
      <p>Vitamin D illustrates the difference between fixing a deficiency and chasing a number. In trials that did <em>not</em> select for deficiency, supplementation failed its endpoints — the 25,000-person VITAL trial found no reduction in cardiovascular events or cancer incidence, and its <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2202106" rel="noopener nofollow" target="_blank">fracture analysis in NEJM</a> was flatly null. Correcting genuine deficiency, by contrast, remains standard medicine — and deficiency is common at European latitudes, especially October to April.</p>
      <p><strong>How to take it:</strong> test first (a 25-OH-D blood test), then 800–2,000 IU/day of D3 if you're low. Retest once after 3–4 months.</p>
      <p><strong>Avoid megadoses:</strong> annual or monthly boluses have <a href="https://jamanetwork.com/journals/jama/fullarticle/185854" rel="noopener nofollow" target="_blank">increased falls in trials</a>, and chronic intakes above ~4,000 IU/day raise hypercalcemia risk. More is not better; sufficient is better.</p>
    `,
  },
  {
    id: 'omega-3',
    category: 'core',
    title: 'Omega-3 / fish oil',
    tldr: 'Modest cardiovascular support at ~1 g/day. High doses are prescription territory and carry a real atrial-fibrillation signal.',
    evidence: 'moderate',
    focus: 'heart',
    bodyHtml: `
      <p>The omega-3 story is genuinely mixed. High-dose purified EPA cut cardiovascular events 25% in REDUCE-IT, while the similar STRENGTH trial with a different formulation found nothing — leaving even cardiologists arguing about mineral-oil placebos. At ordinary supplement doses (~1 g/day EPA+DHA), effects on triglycerides are real and effects on events are modest.</p>
      <p><strong>The honest downside:</strong> meta-analyses of the large trials show a <a href="https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.121.055654" rel="noopener nofollow" target="_blank">dose-dependent increase in atrial fibrillation</a>, mainly above 1 g/day. Claims about "biological aging" and telomeres rest on soft endpoints and should not drive a purchase.</p>
      <p><strong>How to take it:</strong> 1 g/day combined EPA+DHA — or simply eat oily fish twice a week. Buy fresh (check TOTOX/freshness where published); rancid fish oil is worse than none. A history of AF is a reason to talk to your doctor first.</p>
    `,
  },
  {
    id: 'magnesium',
    category: 'core',
    title: 'Magnesium',
    tldr: 'Common intake shortfalls and a plausible sleep effect — but the sleep trials are few, small, and low-quality.',
    evidence: 'emerging',
    focus: 'sleep',
    note: 'Top pick: Pure Encapsulations Magnesium Glycinate',
    bodyHtml: `
      <p>A meaningful share of European adults eats below the recommended magnesium intake, and status is hard to measure (serum misses tissue stores) — so supplementation is a reasonable, cheap hedge. The famous sleep benefit is thinner than its reputation: a <a href="https://link.springer.com/article/10.1186/s12906-021-03297-z" rel="noopener nofollow" target="_blank">meta-analysis in older adults</a> found just three small trials showing sleep-onset ~17 minutes faster, with the evidence rated low-to-very-low quality. Newer positive trials of glycinate and threonate forms are sponsor-run.</p>
      <p><strong>How to take it:</strong> 200–400 mg elemental magnesium in the evening; glycinate or citrate are better tolerated than oxide. Threonate is expensive with the least outcome data.</p>
      <p><strong>Safety:</strong> loose stools at higher doses; caution with kidney impairment; separate from some antibiotics and bisphosphonates by a few hours.</p>
    `,
  },
  {
    id: 'coq10',
    category: 'core',
    title: 'CoQ10',
    tldr: 'Real trial benefits — but in heart failure, as an add-on to treatment. General anti-aging and skin claims are unsupported.',
    evidence: 'moderate',
    focus: 'heart',
    bodyHtml: `
      <p>CoQ10 has one context with genuinely impressive data: chronic heart failure. In the <a href="https://www.jacc.org/doi/10.1016/j.jchf.2014.06.008" rel="noopener nofollow" target="_blank">Q-SYMBIO randomized trial</a> (420 patients, 2 years), 300 mg/day roughly halved major adverse cardiac events, and a <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5525208/" rel="noopener nofollow" target="_blank">meta-analysis of 14 trials</a> found lower mortality (RR 0.69). That is "discuss with your cardiologist" evidence, not a reason for healthy people to supplement.</p>
      <p><strong>Statin muscle aches:</strong> evidence is genuinely mixed — some meta-analyses find modest relief, others none. A 100–200 mg/day trial for a few weeks is cheap and low-risk if statin aches bother you; keep expectations low.</p>
      <p><strong>Skin and "cellular energy" claims:</strong> no convincing outcome trials, including for the mitochondria-targeted analog MitoQ. Take with fat for absorption; mild caution with warfarin.</p>
    `,
  },
  {
    id: 'multivitamins',
    category: 'core',
    title: 'Multivitamins — memory maybe, lifespan no',
    tldr: 'A large trial platform found slower cognitive aging in older adults. 390,000 followed for 20+ years found zero mortality benefit.',
    evidence: 'moderate',
    focus: 'brain',
    bodyHtml: `
      <p>Both halves of this are worth knowing. Within the COSMOS trial platform, three cognition substudies plus a meta-analysis across &gt;5,000 participants found a daily multivitamin <a href="https://news.massgeneralbrigham.org/en/multivitamins-improve-memory-and-slow-cognitive-aging" rel="noopener nofollow" target="_blank">slowed global cognitive aging</a> by the equivalent of about two years over 2–3 years of use — a replicated, if modest, effect in adults 60+.</p>
      <p>Against the longevity claim: an NIH analysis of three prospective cohorts — <a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2820369" rel="noopener nofollow" target="_blank">390,124 healthy adults followed over 20 years</a> — found no reduction in all-cause, cancer, or cardiovascular mortality from daily multivitamin use. It is inexpensive insurance for older adults with narrowing diets, not a longevity drug.</p>
      <p class="text-ink/60 text-sm italic">Caveat: the cognition finding comes from one trial platform testing one product (Centrum Silver, donated by its manufacturer). Consistent within itself; not yet replicated elsewhere.</p>
    `,
  },
];

const longevity: Section[] = [
  {
    id: 'nad-precursors',
    category: 'longevity',
    title: 'NAD+ precursors (NMN & NR)',
    tldr: 'They reliably raise blood NAD+. No trial has yet shown an anti-aging outcome — and NMN is not legal to sell as food in the EU.',
    evidence: 'emerging',
    focus: 'longevity',
    note: 'Top pick: Tru Niagen (nicotinamide riboside — the EU-legal precursor)',
    bodyHtml: `
      <p>NAD+ declines with age, and both NMN and NR raise blood NAD+ reliably in humans — that much is settled. What hasn't happened is the next step: human trials (250–900 mg/day NMN; 300 mg NR) show scattered, inconsistent wins on insulin sensitivity or walking distance, and a recent meta-analysis found <a href="https://iadns.onlinelibrary.wiley.com/doi/10.1002/fft2.511" rel="noopener nofollow" target="_blank">no overall physical-function benefit</a> in older adults. Biomarker up, outcomes pending.</p>
      <p><strong>Regulatory reality:</strong> in the EU, NMN is an <a href="https://provitabio.com/nmn-regulatory-status/" rel="noopener nofollow" target="_blank">unauthorized novel food</a> — products sold here are grey-market. Nicotinamide riboside (Tru Niagen) went through EFSA assessment and is the legal option at 300 mg/day.</p>
      <p><strong>Safety:</strong> clean in trials to date. One flag worth knowing: NAD+ metabolism feeds rapidly dividing cells, and mouse data raise questions in active cancer — anyone with a cancer history should ask their oncologist first.</p>
    `,
  },
  {
    id: 'urolithin-a',
    category: 'longevity',
    title: 'Urolithin A (Mitopure)',
    tldr: 'Two well-run RCTs show better muscle endurance and mitophagy markers — with primary endpoints missed and all trials maker-funded.',
    evidence: 'moderate',
    focus: 'muscle',
    note: 'Top pick: Timeline Mitopure (the product used in both RCTs)',
    bodyHtml: `
      <p>Urolithin A is a gut metabolite of pomegranate compounds that only ~40% of people produce naturally — the plausible rationale for supplementing it directly. Two randomized trials exist, both decent, both funded by the manufacturer: in <a href="https://pubmed.ncbi.nlm.nih.gov/35584623/" rel="noopener nofollow" target="_blank">middle-aged adults</a>, 4 months at 500–1,000 mg/day missed its primary endpoint (peak power) but produced ~12% leg-strength gains and lower inflammation markers; in <a href="https://pubmed.ncbi.nlm.nih.gov/35050355/" rel="noopener nofollow" target="_blank">older adults</a>, muscle-endurance measures and mitophagy biomarkers improved while the primary endpoints did not.</p>
      <p>The pattern — consistent secondary and biomarker wins, missed primaries — earns a cautious "moderate": likely doing something real to muscle mitochondria, magnitude modest, evidence base entirely industry-run.</p>
      <p><strong>How to take it:</strong> 500–1,000 mg/day; both trials ran 4 months. Safety was clean.</p>
    `,
  },
  {
    id: 'glynac',
    category: 'longevity',
    title: 'Glycine + NAC (GlyNAC)',
    tldr: 'Striking results from one small lab; the one independent trial missed its primary endpoint. Watch, don\'t bet.',
    evidence: 'emerging',
    focus: 'longevity',
    bodyHtml: `
      <p>GlyNAC supplies the precursors of glutathione, the cell's main antioxidant, which declines with age. A Baylor pilot and a <a href="https://pubmed.ncbi.nlm.nih.gov/33783984/" rel="noopener nofollow" target="_blank">16-week RCT</a> (24 older adults) reported an almost implausible breadth of improvements — oxidative stress, mitochondrial function, inflammation, insulin resistance, gait speed, strength, cognition. Tiny samples, one research group, everything-improved pattern: exactly the profile that demands replication.</p>
      <p>The independent test so far: a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9261343/" rel="noopener nofollow" target="_blank">114-person trial</a> failed its primary endpoint — no overall glutathione increase — with only a low-glutathione subgroup responding in post-hoc analysis (though its 14-day duration limits the conclusion).</p>
      <p><strong>If you experiment anyway:</strong> trials used ~100 mg/kg/day of each (roughly 7 g + 7 g). NAC is a drug in most of Europe — check interactions (notably nitroglycerin) with a pharmacist.</p>
    `,
  },
  {
    id: 'senolytics',
    category: 'longevity',
    title: 'Senolytics (dasatinib + quercetin, fisetin)',
    tldr: 'D+Q genuinely clears senescent cells in humans — but no senolytic has improved a clinical outcome, and shop-bought versions aren\'t the trial drugs.',
    evidence: 'emerging',
    focus: 'longevity',
    bodyHtml: `
      <p>Senolytics aim to clear senescent "zombie" cells. Dasatinib + quercetin is the only regimen with demonstrated target engagement in humans — a <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6796530/" rel="noopener nofollow" target="_blank">phase-1 pilot</a> reduced senescent-cell burden within days — and a 20-week phase-2 trial in postmenopausal women moved one bone-formation marker. That's it: <strong>no senolytic has improved a clinical aging outcome in a published RCT.</strong></p>
      <p><strong>Fisetin</strong> is behind, not ahead: despite the hype, the Mayo Clinic frailty trials remain unpublished, and trial doses (~1.4 g for a 70 kg woman) dwarf label doses of shop supplements — which have zero published human efficacy data.</p>
      <p><strong>The safety framing matters:</strong> dasatinib is a chemotherapy drug with real off-target risks, dosed in short pulses under supervision. This category belongs in clinical trials, not shopping baskets. Note also that quercetin inhibits drug-metabolizing enzymes (CYP3A4) — it interacts with common medications.</p>
    `,
  },
  {
    id: 'rapamycin',
    category: 'longevity',
    title: 'Low-dose rapamycin (prescription-only)',
    tldr: 'The strongest animal longevity drug ever tested. In humans: one year of safety data, a missed primary endpoint, exploratory wins.',
    evidence: 'emerging',
    focus: 'longevity',
    bodyHtml: `
      <p>Rapamycin extends lifespan more reliably than any other molecule in mouse programs — which is why physicians quietly prescribe weekly low doses off-label. The human evidence arrived in 2024–25 with <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12074816/" rel="noopener nofollow" target="_blank">PEARL</a>, the largest longevity RCT to date (114 adults, 48 weeks): safe over the year, primary endpoint (visceral fat) unchanged, with women on the higher dose gaining lean mass and reporting less pain.</p>
      <p>That is a defensible "emerging": genuine trial activity, plausible mechanism, no proven benefit yet. Known costs of the molecule: mouth ulcers, lipid elevations, glucose intolerance, immune effects.</p>
      <p><strong>Bottom line:</strong> a prescription medicine under investigation — reasonable to discuss with a physician, ideally inside a study; indefensible to self-source online.</p>
    `,
  },
  {
    id: 'metformin',
    category: 'longevity',
    title: 'Metformin for healthy non-diabetics',
    tldr: 'The flagship observational finding collapsed on re-analysis, the TAME trial never started, and it blunts training adaptations.',
    evidence: 'limited',
    focus: 'longevity',
    bodyHtml: `
      <p>Metformin's longevity case rested on a famous 2014 observation that diabetics on metformin outlived non-diabetics. A <a href="https://pubmed.ncbi.nlm.nih.gov/37131166/" rel="noopener nofollow" target="_blank">2023 re-analysis</a> found the result was an artifact of how patients left the metformin group — over 20 years, metformin-treated diabetics did <em>worse</em> than matched non-diabetics. The purpose-built TAME trial <a href="https://www.afar.org/tame-trial" rel="noopener nofollow" target="_blank">has never started</a> for lack of funding.</p>
      <p>Meanwhile, metformin measurably blunts some of the adaptations to exercise training in older adults — a strange trade for a healthy person whose best longevity tool is training.</p>
      <p><strong>Bottom line:</strong> for people without diabetes or prediabetes, there is no RCT evidence and a weakening observational case. If you have prediabetes, that's a different (and legitimate) conversation with your doctor.</p>
    `,
  },
  {
    id: 'spermidine',
    category: 'longevity',
    title: 'Spermidine',
    tldr: 'The one substantial human trial was null. The supporting evidence is diet-cohort data confounded by healthy eating.',
    evidence: 'limited',
    focus: 'longevity',
    bodyHtml: `
      <p>Spermidine induces autophagy in the lab and tracks with lower mortality in dietary cohorts — higher-spermidine diets meant a ~24% lower mortality hazard in the Bruneck study. But spermidine-rich diets are wholegrain-vegetable-aged-cheese diets: classic healthy-eater confounding.</p>
      <p>The interventional test failed. <a href="https://pubmed.ncbi.nlm.nih.gov/35616942/" rel="noopener nofollow" target="_blank">SmartAge</a> — 100 older adults, 12 months of wheat-germ spermidine at the marketed dose — found <strong>no effect on memory or biomarkers</strong> versus placebo, unwinding the promising 3-month pilot that preceded it.</p>
      <p><strong>Bottom line:</strong> eat the foods (whole grains, mushrooms, aged cheese, natto); skip the capsules until a positive human trial exists.</p>
    `,
  },
  {
    id: 'resveratrol',
    category: 'longevity',
    title: 'Resveratrol',
    tldr: 'The cautionary tale: spectacular mouse mechanism, terrible human bioavailability, a decade of null trials.',
    evidence: 'limited',
    focus: 'longevity',
    bodyHtml: `
      <p>Resveratrol is why this guide insists on human outcomes. The red-wine molecule activated sirtuins in the lab, extended lifespan in some organisms, sold a company to GSK for $720 million — and then failed, repeatedly, in human trials. It is destroyed by first-pass metabolism (bioavailability under 1%), and reviews of the human literature describe effects as inconsistent to absent, with some contexts "ambiguous and sometimes even detrimental". GSK shelved the program.</p>
      <p><strong>Bottom line:</strong> the marketed pills are pharmacologically implausible at their doses. If any sirtuin story survives, it will not be this molecule at this bioavailability.</p>
    `,
  },
  {
    id: 'taurine',
    category: 'longevity',
    title: 'Taurine',
    tldr: 'The 2023 "anti-aging" headline collapsed in 2025 — taurine doesn\'t even decline with age in most humans. Mild blood-pressure effects are real.',
    evidence: 'limited',
    focus: 'longevity',
    bodyHtml: `
      <p>In 2023, a <a href="https://www.science.org/doi/10.1126/science.abn9257" rel="noopener nofollow" target="_blank">Science paper</a> reported taurine declines with age and that supplementing extended mouse lifespan ~10–12% — headlines followed. In 2025, a <a href="https://www.science.org/doi/10.1126/science.adl2116" rel="noopener nofollow" target="_blank">second Science paper</a> using longitudinal data in humans, monkeys, and mice found circulating taurine <em>rises or stays flat</em> with age in most cohorts. The NIH's conclusion: <a href="https://www.nih.gov/news-events/news-releases/nih-researchers-conclude-taurine-unlikely-be-good-aging-biomarker" rel="noopener nofollow" target="_blank">taurine is unlikely to be a useful aging biomarker</a>, and supplementing on that basis is premature.</p>
      <p>What human trials do show is mild cardiometabolic support: meta-analyses report blood pressure ~4.7/2.9 mmHg lower and modestly better lipids at 1–3 g/day. Cheap and safe — just not anti-aging.</p>
    `,
  },
];

const skin: Section[] = [
  {
    id: 'collagen-peptides',
    category: 'skin',
    title: 'Collagen peptides',
    tldr: 'The best-evidenced beauty supplement: consistent trial improvements in skin hydration, elasticity, and wrinkles at 1–15 g/day.',
    evidence: 'strong',
    focus: 'skin',
    note: 'Top pick: see the full collagen guide for forms and dosing',
    bodyHtml: `
      <p>Hydrolyzed collagen has the deepest trial base of any oral skin supplement — reviews of dozens of randomized trials show measurable improvements in skin elasticity, hydration, and wrinkle depth over 8–12 weeks, plus joint-stiffness and bone-density effects on longer horizons. The effects are real and moderate; many trials are industry-funded.</p>
      <p>We maintain an entire evidence guide on it — mechanisms, forms, doses, safety, and how it stacks against clinical treatments: <a href="/collagen">the collagen guide</a>.</p>
    `,
  },
  {
    id: 'astaxanthin',
    category: 'skin',
    title: 'Astaxanthin',
    tldr: 'Small consistent trials show better skin moisture and elasticity and mild internal UV protection. Not a sunscreen replacement.',
    evidence: 'emerging',
    focus: 'skin',
    bodyHtml: `
      <p>Astaxanthin is the carotenoid that makes salmon pink, and the best-studied of the "internal photoprotection" supplements. A <a href="https://www.mdpi.com/2072-6643/13/9/2917" rel="noopener nofollow" target="_blank">2021 meta-analysis</a> (11 studies) found improved skin moisture and elasticity and reduced wrinkle measures; a <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6073124/" rel="noopener nofollow" target="_blank">10-week RCT</a> showed a higher UV dose was needed to redden supplemented skin.</p>
      <p>The caveats are structural: trials are small (tens of participants), short (6–16 weeks), largely run in Japan by manufacturers, and measure instrument-level changes — visible-in-the-mirror is not the standard here.</p>
      <p><strong>How to take it:</strong> 4–6 mg/day with a meal containing fat. Benign; at very high carotenoid doses skin can tint slightly orange. It supplements sunscreen — it never substitutes for it.</p>
    `,
  },
  {
    id: 'oral-ha',
    category: 'skin',
    title: 'Oral hyaluronic acid',
    tldr: 'Better than its reputation: a 2025 meta-analysis of 7 RCTs found real hydration and wrinkle improvements. Small, industry-funded trials.',
    evidence: 'emerging',
    focus: 'skin',
    bodyHtml: `
      <p>Oral HA was long dismissed ("it's just digested") — the 2025 literature says otherwise. A <a href="https://pubmed.ncbi.nlm.nih.gov/40911749/" rel="noopener nofollow" target="_blank">meta-analysis of 7 placebo-controlled RCTs</a> (379 participants) found statistically significant improvements in skin hydration, elasticity, and wrinkle depth, and a <a href="https://www.nature.com/articles/s41598-025-32758-5" rel="noopener nofollow" target="_blank">150-person double-blind RCT</a> reported hydration and barrier improvements.</p>
      <p>Strength of evidence is comparable to collagen's early days: small, mostly Asian, heavily manufacturer-funded trials with instrument endpoints. A reasonable add-on for dry, crepey skin at 120–240 mg/day — with expectations calibrated to "measurable", not "transformative".</p>
    `,
  },
];

const overhyped: Section[] = [
  {
    id: 'blends',
    category: 'overhyped',
    title: 'Proprietary "longevity blends"',
    tldr: 'No blend has outcome trials, and doses hide below even the doses that failed as single ingredients.',
    evidence: 'limited',
    focus: 'general',
    bodyHtml: `
      <p>The commercial center of the longevity market is the multi-ingredient blend: a sprinkle of resveratrol, some NMN, "senolytic botanicals", a proprietary label hiding per-ingredient doses. Three problems compound: no blend has ever been tested in an outcome trial; the listed ingredients usually appear below their (already unsuccessful) trial doses; and the proprietary label makes verification impossible by design.</p>
      <p>If you want to experiment at the frontier, buy the single molecule at the trial dose from a third-party-tested brand. A blend is a portfolio of underdosed bets sold at a premium.</p>
    `,
  },
  {
    id: 'detox',
    category: 'overhyped',
    title: '"Detox" products',
    tldr: 'No defined toxin, no validated endpoint, no trials. Your liver and kidneys already do this job.',
    evidence: 'limited',
    focus: 'general',
    bodyHtml: `
      <p>Detox supplements name no specific toxin, measure no validated endpoint, and have no controlled trials — there is literally nothing to cite, which is the point. The organs that clear metabolic waste (liver, kidneys) are not supplement-responsive filters, and "toxin buildup" as marketed does not correspond to a measurable clinical state.</p>
      <p>The one legitimate nearby idea is reducing <em>intake</em> of harmful exposures: alcohol, smoking, ultra-processed food. That costs nothing.</p>
    `,
  },
  {
    id: 'epithalon',
    category: 'overhyped',
    title: 'Epithalon & injectable "peptide bioregulators"',
    tldr: 'Sold online for injection with essentially no independent human evidence and documented purity problems. Do not buy.',
    evidence: 'limited',
    focus: 'general',
    bodyHtml: `
      <p>Epithalon (a synthetic tetrapeptide) and its "bioregulator" siblings are marketed online as telomerase-activating anti-aging injections. Essentially all supporting data come from the originating Russian research group; no large peer-reviewed double-blind human trials exist. Products ship as "research chemicals" — a label that waives every quality standard — with documented purity and contamination problems from unregulated vendors, plus a theoretical telomerase–cancer concern nobody has resolved.</p>
      <p>For an EU consumer this category is an unambiguous do-not-buy: unproven, unregulated, and injectable.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety',
    category: 'safety',
    title: 'Interactions and safety flags',
    tldr: 'The recurring themes: fish-oil AF risk, vitamin D megadoses, NMN legality, quercetin drug interactions, kidney caution.',
    bodyHtml: `
      <p>Individual sections carry their own cautions; these are the recurring ones worth a second read:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Fish oil</strong> — dose-dependent atrial-fibrillation signal above ~1 g/day; bleeding risk at high doses with anticoagulants.</li>
        <li><strong>Vitamin D</strong> — no monthly/annual megadoses; chronic intake above ~4,000 IU/day risks hypercalcemia.</li>
        <li><strong>NAD+ precursors</strong> — NMN is not authorized as a food in the EU; anyone with an active or recent cancer should involve their oncologist.</li>
        <li><strong>Quercetin</strong> (in "senolytic" products) — inhibits CYP3A4 and P-glycoprotein; interacts with many common medicines.</li>
        <li><strong>NAC</strong> — interactions incl. nitroglycerin; it is a pharmacy medicine in much of Europe.</li>
        <li><strong>Magnesium</strong> — caution in kidney impairment; separate from certain antibiotics.</li>
        <li><strong>Metformin, rapamycin, dasatinib</strong> — prescription drugs with real adverse-effect profiles; never self-source.</li>
        <li><strong>Pregnancy and breastfeeding</strong> — outside prenatal basics, the trials above excluded pregnant women; default to "no" without clinician sign-off.</li>
      </ul>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-best-single',
    category: 'faq',
    title: 'What single supplement has the best anti-aging evidence?',
    tldr: 'Creatine plus resistance training — with protein and fiber right behind it.',
    bodyHtml: `
      <p>Boring but true: creatine (3–5 g/day) attached to resistance training, on a protein-sufficient diet, is the only "stack" with multiple meta-analyses behind it. Fiber at 25–29 g/day has the best mortality data of anything sold in a supplement aisle. Everything more exotic ranks below these on evidence.</p>
    `,
  },
  {
    id: 'faq-nad',
    category: 'faq',
    title: 'Do NAD+ boosters actually reverse aging?',
    tldr: 'No — they raise a biomarker. Outcome trials haven\'t delivered yet.',
    bodyHtml: `
      <p>NMN and NR reliably raise blood NAD+. No trial has shown that this translates into an anti-aging clinical outcome, and a 2025 meta-analysis found no physical-function benefit in older adults. If you want to try anyway, the EU-legal option is nicotinamide riboside at 300 mg/day. Treat it as a hopeful experiment, not a treatment.</p>
    `,
  },
  {
    id: 'faq-test-vitd',
    category: 'faq',
    title: 'Should I test my vitamin D or just take it?',
    tldr: 'Test first. Supplementing sufficient people showed no benefit in trials.',
    bodyHtml: `
      <p>Testing beats guessing: the large trials in people <em>not selected for deficiency</em> — including the NEJM fracture analysis of VITAL — were null, while correcting real deficiency remains standard care. A 25-OH-D test costs little; 800–2,000 IU/day is the safe correction range if you're low.</p>
    `,
  },
  {
    id: 'faq-senolytics-shop',
    category: 'faq',
    title: 'Are shop-bought "senolytics" the same as the ones in trials?',
    tldr: 'No. Trials used a chemotherapy drug in supervised pulses.',
    bodyHtml: `
      <p>The trials pair dasatinib — a chemotherapy agent — with gram-level quercetin in short supervised cycles, and even those haven't shown clinical benefits yet. Shop-bought quercetin or fisetin at label doses has zero published human efficacy data. The name is shared; the intervention is not.</p>
    `,
  },
  {
    id: 'faq-rapamycin-doctor',
    category: 'faq',
    title: 'Is rapamycin or metformin worth asking my doctor about?',
    tldr: 'Asking, yes. Self-sourcing, never.',
    bodyHtml: `
      <p>Both are prescription molecules under investigation, not supplements. Metformin's longevity case weakened badly after re-analysis of its flagship observational study, and its dedicated trial (TAME) has never started. Rapamycin's PEARL trial was safe over 48 weeks but missed its primary endpoint. Reasonable to discuss with a physician — ideally inside a study. Unreasonable to buy online.</p>
    `,
  },
  {
    id: 'faq-beauty',
    category: 'faq',
    title: 'Do beauty supplements like collagen and oral HA really work?',
    tldr: 'Measurably, yes. Dramatically, no.',
    bodyHtml: `
      <p>Better than their reputation, weaker than their marketing: collagen peptides, astaxanthin, and oral hyaluronic acid all have positive randomized trials and meta-analyses on hydration, elasticity, and wrinkle measures — small, short, and mostly industry-funded. Effects are instrument-measurable rather than transformative. Sunscreen and retinoids outrank them all; see <a href="/collagen">the collagen guide</a> for the full picture.</p>
    `,
  },
  {
    id: 'faq-multivitamin',
    category: 'faq',
    title: 'Do multivitamins do anything if I eat well?',
    tldr: 'For lifespan, no. For memory after 60, possibly a little.',
    bodyHtml: `
      <p>For mortality: 390,124 adults followed over 20 years showed no benefit. For cognition: the COSMOS platform found a modest, internally replicated slowing of cognitive aging in adults 60+. Cheap insurance for older adults with narrowing diets — not a longevity intervention.</p>
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
    intro: 'What supplements can realistically contribute, and how we grade them.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Buying without being fooled',
    intro: 'Third-party testing, EU rules, and the red flags that end the conversation.',
    sections: evaluate,
  },
  {
    id: 'core',
    title: 'The foundations',
    intro: 'Supplements with the deepest human evidence — the ones that fix real shortfalls.',
    sections: core,
  },
  {
    id: 'longevity',
    title: 'The longevity frontier',
    intro: 'NAD+ boosters, senolytics, and prescription geroprotectants — graded by human outcomes, not mouse lifespans.',
    sections: longevity,
  },
  {
    id: 'skin',
    title: 'Beauty from within',
    intro: 'Oral skin supplements with actual randomized trials.',
    sections: skin,
  },
  {
    id: 'overhyped',
    title: 'The do-not-buy list',
    intro: 'Categories where the evidence is absent, negative, or the product is outright unregulated.',
    sections: overhyped,
  },
  {
    id: 'safety',
    title: 'Interactions & safety',
    intro: 'When to be cautious.',
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
  muscle: 'Muscle',
  heart: 'Heart',
  brain: 'Brain',
  skin: 'Skin',
  gut: 'Gut',
  sleep: 'Sleep',
  longevity: 'Longevity',
  metabolic: 'Metabolic',
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
