/**
 * Sauna guide — single source of truth.
 *
 * Consumed by /sauna. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Core editorial rule for this guide: the famous Finnish mortality data are
 * OBSERVATIONAL — no sauna claim on a hard outcome may exceed `moderate`.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'heart' | 'brain' | 'lungs' | 'mood' | 'skin' | 'muscle' | 'myth' | 'general';

export type SectionCategory = 'concept' | 'context' | 'benefit' | 'variant' | 'safety' | 'faq';

export interface Section {
  id: string;
  category: SectionCategory;
  title: string;
  tldr: string;
  evidence?: Evidence;
  focus?: FocusArea;
  bodyHtml: string;
  note?: string;
  /** For rows where it helps: typical protocol / access cost. */
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
  'In the Finnish cohorts, 4–7 saunas a week tracked with roughly half the cardiovascular and all-cause mortality of once-a-week bathing — impressive, dose-responsive, and still observational.',
  'The genuine trial evidence is smaller but real: single sessions lower blood pressure and arterial stiffness, and an 8-week RCT found sauna after exercise added fitness and blood-pressure gains over exercise alone.',
  'Sessions longer than ~19 minutes and frequencies of 4+ per week are where the Finnish data concentrate — duration and consistency matter more than heroic temperatures.',
  'Every mortality, dementia, and stroke figure comes from traditional Finnish sauna. Infrared cabins and sauna blankets borrow that halo with almost no outcome evidence of their own.',
  '"Detox" and weight loss are debunked: sweat removes a physiologically negligible trace of pollutants, and the kilo you lose is water. The real risk is alcohol — about half of sauna deaths involve it.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-a-session-does',
    category: 'concept',
    title: 'What a sauna session actually does to your body',
    tldr: 'Heart rate climbs to brisk-walk levels, vessels dilate, plasma volume expands, heat-shock proteins switch on.',
    bodyHtml: `
      <p>Sit in 80–100&nbsp;°C air and your body treats it as cardiovascular work: heart rate rises to roughly moderate-exercise levels, skin blood flow surges, and you lose about half a litre of sweat in a typical session (physiology reviewed in <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5941775/" rel="noopener nofollow" target="_blank">Hussain &amp; Cohen's systematic review</a>). Repeated heat exposure expands plasma volume and induces <strong>heat-shock proteins</strong> — cellular chaperones that help refold damaged proteins.</p>
      <p>This "exercise-mimic" framing is physiologic fact, not proven equivalence: a 2025 trial found post-exercise sauna did <em>not</em> improve heart-rate variability, so the mimicry has limits. Think of sauna as a gentle cardiovascular stressor with a relaxation payload — an addition to training, never a substitute.</p>
    `,
  },
  {
    id: 'evidence-problem',
    category: 'concept',
    title: 'The honest caveat: one famous cohort does the heavy lifting',
    tldr: 'Most sauna longevity claims trace to one observational Finnish study. Adjusted, dose-responsive — and still not a trial.',
    bodyHtml: `
      <p>Nearly every headline sauna statistic comes from the <strong>Kuopio Ischaemic Heart Disease (KIHD) cohort</strong>: middle-aged Finns recruited in the 1980s, sauna habits self-reported once, then followed in national registries for ~20 years. The researchers adjusted for fitness, blood pressure, smoking, alcohol, and socioeconomics — and the associations survived, with a clean dose-response.</p>
      <p>But observational data cannot exclude <em>reverse causation</em>: frail or ill people sauna less, which inflates the apparent benefit — a critique <a href="https://jamanetwork.com/journals/jamainternalmedicine/article-abstract/2448449" rel="noopener nofollow" target="_blank">published alongside the original paper</a>. No randomized trial anywhere has tested sauna against death, dementia, or stroke — the RCTs cover blood pressure, vessels, and fitness.</p>
      <p>That is why this guide caps every hard-outcome claim at <strong>moderate</strong>, however spectacular the hazard ratios look. Sauna earns its place as a low-risk pleasure with a coherent evidence story — not as proven medicine.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'how-to-sauna',
    category: 'context',
    title: 'The evidence-anchored protocol',
    tldr: '80–100°C Finnish sauna, build to 15–20+ minutes, 2–7 times a week, water before and after, never with alcohol.',
    bodyHtml: `
      <p>Reverse-engineering the Finnish data and the trials gives a simple protocol:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Type:</strong> traditional Finnish sauna (80–100&nbsp;°C, dry with steam bursts) is what every cohort measured.</li>
        <li><strong>Duration:</strong> the cardiac benefit concentrated in sessions <strong>over ~19 minutes</strong> (sudden-cardiac-death hazard ratio 0.48 vs &lt;11-minute sessions). Start at 5–10 minutes and build.</li>
        <li><strong>Frequency:</strong> risk fell stepwise from 1 to 2–3 to <strong>4–7 sessions/week</strong> in <a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2130724" rel="noopener nofollow" target="_blank">every KIHD analysis</a> — consistency beats intensity.</li>
        <li><strong>Hydration:</strong> expect ~0.5&nbsp;kg of sweat; drink water before and after, rise slowly (blood-pressure medicines and diuretics amplify dizziness).</li>
        <li><strong>Cooling:</strong> a shower or rest between rounds is traditional; the cold-plunge add-on has its own (weaker) evidence — see the variants chart.</li>
      </ul>
      <p><strong>Cost:</strong> public saunas and spa access run ~€5–30 per visit across most of Europe; many gyms include one — the rare longevity habit that's already in your membership.</p>
    `,
  },
  {
    id: 'who-is-it-for',
    category: 'context',
    title: 'Who benefits most — and who should check first',
    tldr: 'Stable, treated hearts tolerate sauna well. Unstable angina, recent heart attack, and severe aortic stenosis do not.',
    bodyHtml: `
      <p>The Finnish population data include plenty of people with treated cardiovascular disease, and clinical reviews (<a href="https://www.amjmed.com/article/S0002-9343(00)00671-9/abstract" rel="noopener nofollow" target="_blank">Hannuksela &amp; Ellahham</a>, <a href="https://www.mayoclinicproceedings.org/article/s0025-6196(18)30275-1/fulltext" rel="noopener nofollow" target="_blank">Mayo Clinic Proceedings</a>) consider stable, medicated heart disease compatible with sensible sauna use.</p>
      <p>Clear the habit with a cardiologist first if any of these apply: <strong>unstable angina, a recent heart attack, severe symptomatic aortic stenosis, decompensated heart failure, or uncontrolled arrhythmia</strong>. Skip sessions entirely during fever or acute infection, and shorten them if you're frail, very new to heat, or on multiple blood-pressure medicines.</p>
      <p>Healthy children tolerate short, milder sessions with supervision — sauna is a family institution in Finland — and the women-inclusive cohort analyses show the same benefit pattern in both sexes.</p>
    `,
  },
];

const benefits: Section[] = [
  {
    id: 'benefit-cvd',
    category: 'benefit',
    title: 'Cardiovascular & all-cause mortality',
    tldr: 'In 2,315 men over 20 years: 4–7 saunas/week meant ~50% lower fatal heart disease and 40% lower all-cause mortality. Observational.',
    evidence: 'moderate',
    focus: 'heart',
    sessions: '4–7×/week, >19 min',
    bodyHtml: `
      <p>The anchor study — <a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2130724" rel="noopener nofollow" target="_blank">Laukkanen 2015, JAMA Internal Medicine</a> — followed 2,315 Finnish men for a median 20.7 years. Versus once-a-week bathers, men at 4–7 sessions/week had adjusted hazard ratios of <strong>0.37 for sudden cardiac death, 0.50 for fatal cardiovascular disease, and 0.60 for all-cause mortality</strong>, with 2–3×/week intermediate — a textbook dose-response. Sessions over 19 minutes outperformed short ones for cardiac endpoints.</p>
      <p>Women were added in a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6262976/" rel="noopener nofollow" target="_blank">2018 analysis</a> (1,688 adults, 51% female): fatal cardiovascular events at 4–7×/week carried a hazard ratio of 0.23 — the same pattern, smaller numbers.</p>
      <p class="text-ink/60 text-sm italic">Caveat: adjusted or not, this is one observational cohort with self-reported habits and plausible reverse causation. There is no mortality RCT, so "moderate" is the ceiling.</p>
    `,
  },
  {
    id: 'benefit-bp',
    category: 'benefit',
    title: 'Blood pressure & arterial stiffness',
    tldr: 'A single session measurably drops blood pressure and arterial stiffness; cohorts show ~half the incident hypertension at 4–7×/week.',
    evidence: 'moderate',
    focus: 'heart',
    sessions: '2–7×/week',
    bodyHtml: `
      <p>Here the experiments back the cohorts. In 102 adults with cardiovascular risk factors, one 30-minute session at 73&nbsp;°C dropped mean blood pressure from <a href="https://www.nature.com/articles/s41371-017-0008-z" rel="noopener nofollow" target="_blank">137/82 to 130/75 mmHg</a> and cut pulse-wave velocity (arterial stiffness) meaningfully. Observationally, men at 4–7 saunas/week developed <a href="https://pubmed.ncbi.nlm.nih.gov/28633297/" rel="noopener nofollow" target="_blank">47% less incident hypertension</a> over 25 years.</p>
      <p>The acute effect is transient — like exercise, the benefit lives in repetition. Anyone on antihypertensives should stand up slowly afterward; the vasodilation stacks.</p>
    `,
  },
  {
    id: 'benefit-exercise',
    category: 'benefit',
    title: 'Sauna after exercise (the best RCT in the field)',
    tldr: 'An 8-week RCT: 15 minutes of post-workout sauna added fitness (+2.7 ml/kg/min VO2max) and −8 mmHg blood pressure over exercise alone.',
    evidence: 'moderate',
    focus: 'heart',
    sessions: '15 min post-workout',
    bodyHtml: `
      <p>The strongest interventional card sauna holds: a <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9394774/" rel="noopener nofollow" target="_blank">2022 multi-arm randomized trial</a> in 47 sedentary adults with cardiovascular risk factors. Eight weeks of exercise plus a 15-minute post-session sauna beat exercise alone on cardiorespiratory fitness (+2.7 ml/kg/min), systolic blood pressure (−8.0 mmHg), and total cholesterol.</p>
      <p>One small, single-site trial — but a genuine RCT with meaningful effect sizes, and the easiest protocol to copy: train, then sit in the heat for 15 minutes.</p>
    `,
  },
  {
    id: 'benefit-stroke',
    category: 'benefit',
    title: 'Stroke risk',
    tldr: 'In 1,628 men and women over ~15 years, 4–7 saunas/week tracked with ~60% lower stroke risk. Observational.',
    evidence: 'moderate',
    focus: 'brain',
    bodyHtml: `
      <p>A <a href="https://www.neurology.org/doi/10.1212/WNL.0000000000005606" rel="noopener nofollow" target="_blank">2018 Neurology analysis</a> of 1,628 Finnish adults (both sexes) found a fully adjusted stroke hazard ratio of <strong>0.38</strong> at 4–7 sessions/week versus one. Mechanistically plausible via the blood-pressure effects above — and, as with everything KIHD, still an association rather than a trial result.</p>
    `,
  },
  {
    id: 'benefit-dementia',
    category: 'benefit',
    title: 'Dementia & Alzheimer\'s',
    tldr: 'One cohort: 4–7 saunas/week meant ~65% lower dementia risk — wide confidence intervals, high reverse-causation risk, no trials.',
    evidence: 'emerging',
    focus: 'brain',
    bodyHtml: `
      <p>The most quoted and least secure sauna claim. In the same 2,315 men, frequent bathing tracked with hazard ratios of <a href="https://academic.oup.com/ageing/article/46/2/245/2654230" rel="noopener nofollow" target="_blank">0.34 for dementia and 0.35 for Alzheimer's</a> over 20 years. The problems: few cases in the top-frequency group (wide intervals), men only, and dementia's long prodrome means early cognitive decline could reduce sauna-going years before diagnosis — reverse causation in its purest form.</p>
      <p>No cognition trial of any kind exists. File under "hopeful signal", not "brain protection".</p>
    `,
  },
  {
    id: 'benefit-respiratory',
    category: 'benefit',
    title: 'Colds, pneumonia & respiratory disease',
    tldr: 'Cohorts show 30–40% less pneumonia at high frequency; one tiny 1990 RCT halved cold episodes. Never replicated.',
    evidence: 'emerging',
    focus: 'lungs',
    bodyHtml: `
      <p>KIHD men at ≥4 sessions/week had <a href="https://pubmed.ncbi.nlm.nih.gov/28905164/" rel="noopener nofollow" target="_blank">41% less respiratory disease</a> and ~37% less pneumonia over 25 years. The lone randomized test is from 1990: <a href="https://pubmed.ncbi.nlm.nih.gov/2248758/" rel="noopener nofollow" target="_blank">50 volunteers</a>, six months of regular sauna, and roughly half the cold episodes of controls in the final months — with no effect once a cold had started. Tiny, unblinded, never repeated. Pleasant insurance; far from settled.</p>
    `,
  },
  {
    id: 'benefit-mood',
    category: 'benefit',
    title: 'Depression, mood & relaxation',
    tldr: 'One tiny sham-controlled hyperthermia RCT helped depression for weeks; the newest trial found sham worked just as well.',
    evidence: 'emerging',
    focus: 'mood',
    bodyHtml: `
      <p>Whole-body heat as an antidepressant has real, if wobbly, science. In a <a href="https://pubmed.ncbi.nlm.nih.gov/27172277/" rel="noopener nofollow" target="_blank">2016 JAMA Psychiatry RCT</a> (34 adults with major depression), a single heat session cut depression scores by ~6.5 points versus sham, persisting six weeks. But the newest randomized comparison — heat + therapy versus <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12553885/" rel="noopener nofollow" target="_blank">sham heat + therapy</a> — found both arms improved dramatically, with no separation. The sham may itself be a treatment; warmth, ritual, and rest are hard to placebo.</p>
      <p>As for everyday relaxation and sleep: the survey evidence says people feel better, and mechanism papers invoke endorphins and "forced mindfulness". Enjoy it; just don't prescribe it to yourself in place of actual mental-health care.</p>
    `,
  },
  {
    id: 'benefit-recovery',
    category: 'benefit',
    title: 'Muscle recovery, performance & heat acclimation',
    tldr: 'Small athlete trials show plasma-volume expansion and better heat-adapted performance. Niche, promising, sub-30-person studies.',
    evidence: 'emerging',
    focus: 'muscle',
    bodyHtml: `
      <p>Post-exercise sauna reliably expands plasma volume and accelerates heat acclimation — useful if you race in summer. Trials in runners (e.g. <a href="https://pubmed.ncbi.nlm.nih.gov/33211153/" rel="noopener nofollow" target="_blank">3 weeks of post-run sauna</a>) improved heat-adapted performance markers, and a 2025 systematic review calls the field promising but small and heterogeneous. These are N&lt;30 athletic studies — real physiology, niche payoff.</p>
    `,
  },
  {
    id: 'benefit-skin',
    category: 'benefit',
    title: 'Skin effects',
    tldr: 'One small study: regular sauna-goers had better barrier function and hydration. No trials on wrinkles or visible aging.',
    evidence: 'limited',
    focus: 'skin',
    bodyHtml: `
      <p>The entire dermatologic literature is essentially one controlled (non-randomized) study of <a href="https://pubmed.ncbi.nlm.nih.gov/18525205/" rel="noopener nofollow" target="_blank">41 volunteers</a>: regular sauna users showed a more stable skin barrier, better stratum-corneum hydration, and faster recovery after challenges. Nothing on wrinkles or visible aging — and heat can flare rosacea and melasma. If your interest is skin aging specifically, the money is better spent elsewhere on this site.</p>
    `,
  },
  {
    id: 'myth-growth-hormone',
    category: 'benefit',
    title: 'The growth-hormone claim',
    tldr: 'The famous "16-fold GH increase" came from two 1-hour sessions daily for a week in 1986 — the spike faded by day 3, and no muscle outcome was ever measured.',
    evidence: 'limited',
    focus: 'myth',
    bodyHtml: `
      <p>Podcast favourite, evidentiary orphan. The source is a <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1748-1716.1986.tb08000.x" rel="noopener nofollow" target="_blank">1986 study of 17 volunteers</a> doing two one-hour 80&nbsp;°C sessions per day for a week: growth hormone spiked, adaptation blunted the spike within days, and nobody measured muscle, strength, or body composition — then or since. Transient hormone blips are not gains. Enjoy the sauna; keep lifting.</p>
    `,
  },
  {
    id: 'myth-detox',
    category: 'benefit',
    title: 'The "detox" claim',
    tldr: 'Debunked: measured pollutant excretion in sweat is ~0.02–0.04% of daily intake. Your liver and kidneys do the detoxing.',
    evidence: 'limited',
    focus: 'myth',
    bodyHtml: `
      <p>Sweat is more than 99% water and electrolytes. When researchers actually measured persistent organic pollutants and heavy metals in sweat, excretion amounted to <a href="https://www.nationalgeographic.com/premium/article/sweating-toxins-myth-detox-facts-saunas-pollutants-science" rel="noopener nofollow" target="_blank">roughly 0.02–0.04% of daily dietary intake</a> even at two litres of sweating per day, and a controlled study of metals found <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8998800/" rel="noopener nofollow" target="_blank">no meaningful contribution to body burden</a>. There is no toxin for which sweating is a relevant exit route — that is what your liver and kidneys are for.</p>
    `,
  },
  {
    id: 'myth-weight-loss',
    category: 'benefit',
    title: 'The weight-loss claim',
    tldr: 'Debunked: the kilo on the scale is water, regained on rehydration. The only fat-relevant RCT effects came from the exercise arm.',
    evidence: 'limited',
    focus: 'myth',
    bodyHtml: `
      <p>A session drops 0.3–1&nbsp;kg of scale weight — sweat, restored by the next glass of water. Heart rate rises but your muscles do no work, so calorie burn stays modest, and in the sauna+exercise RCT the body-composition changes came from the exercise, not the heat. No trial shows sauna-induced fat loss. It's a spa, not a deficit.</p>
    `,
  },
];

const variants: Section[] = [
  {
    id: 'variant-finnish',
    category: 'variant',
    title: 'Traditional Finnish sauna (80–100°C)',
    tldr: 'The only type with outcome data — every mortality, stroke, and dementia figure was measured here.',
    evidence: 'moderate',
    focus: 'general',
    sessions: '2–7×/week',
    cost: '€5–30/visit',
    bodyHtml: `
      <p>Dry heat at 80–100&nbsp;°C with humidity bursts from water on the stones (löyly). This is the exposure behind the entire Finnish evidence base — cohorts, blood-pressure experiments, the exercise RCT. If you want to stand on the published data, this is the version you copy: hot, short-to-moderate, frequent.</p>
      <p>Home Finnish cabins run roughly €3,000–10,000+ installed; public saunas, gyms, and spas deliver the same exposure for €5–30 a visit.</p>
    `,
  },
  {
    id: 'variant-infrared',
    category: 'variant',
    title: 'Infrared cabins (45–60°C)',
    tldr: 'Gentler and pleasant — but the longevity claims are borrowed. Their own evidence is a heart-failure protocol that missed its primary endpoint.',
    evidence: 'limited',
    focus: 'general',
    sessions: '15–30 min',
    cost: '€1,500–6,000 (home)',
    bodyHtml: `
      <p>Infrared cabins heat you radiantly at 45–60&nbsp;°C — a milder cardiovascular load that many people find easier. The marketing then borrows the Finnish cohort halo, which no infrared study has earned.</p>
      <p>Infrared's own clinical literature is <strong>Waon therapy</strong>: a supervised Japanese protocol (60&nbsp;°C, daily) in heart-failure patients. Its definitive randomized trial <a href="https://www.jstage.jst.go.jp/article/circj/80/4/80_CJ-16-0051/_article" rel="noopener nofollow" target="_blank">missed its primary endpoint</a> (BNP), improving only symptoms and walk distance — modest, safe, and utterly unlike a consumer wellness cabin claim.</p>
      <p>Verdict: a comfortable way to sweat with plausible relaxation value; grade the longevity promises as extrapolation.</p>
    `,
  },
  {
    id: 'variant-steam',
    category: 'variant',
    title: 'Steam rooms (~45°C, 100% humidity)',
    tldr: 'Different physiology (sweat cannot evaporate), and essentially no outcome research of its own.',
    evidence: 'limited',
    focus: 'general',
    sessions: '10–20 min',
    cost: 'Usually gym-included',
    bodyHtml: `
      <p>At ~100% humidity sweat cannot evaporate, so the thermal experience differs enough that the main sauna systematic review <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5941775/" rel="noopener nofollow" target="_blank">excluded steam bathing outright</a>. Pleasant for airways-feel and relaxation; no cohort or trial base of its own. Treat it as a spa experience, not a longevity input.</p>
    `,
  },
  {
    id: 'variant-blanket',
    category: 'variant',
    title: 'Sauna blankets',
    tldr: 'Zero product-specific studies — every claim is extrapolated from research at different temperatures and body coverage.',
    evidence: 'limited',
    focus: 'general',
    sessions: '30–45 min',
    cost: '€100–600',
    bodyHtml: `
      <p>A literature search for sauna-blanket outcomes returns <strong>nothing</strong> — all marketing claims extrapolate from Finnish-sauna or Waon research conducted at different temperatures, humidity, and body coverage (your head stays out, changing thermoregulation). They raise skin temperature and make you sweat on the sofa; whether that reproduces any studied exposure is unknown. Buy one for cosiness, not for the KIHD hazard ratios.</p>
    `,
  },
  {
    id: 'variant-cold',
    category: 'variant',
    title: 'Cold-plunge contrast',
    tldr: 'Separate—and weaker—evidence: short-lived stress/wellbeing effects; regular post-training plunges can blunt muscle gains.',
    evidence: 'emerging',
    focus: 'muscle',
    sessions: '1–3 min post-sauna',
    cost: '€0 (cold shower)',
    bodyHtml: `
      <p>The Nordic ritual of alternating heat and cold stands on tradition plus early science. A <a href="https://pubmed.ncbi.nlm.nih.gov/39879231/" rel="noopener nofollow" target="_blank">2025 meta-analysis of cold-water immersion</a> found time-limited effects on stress and some wellbeing measures. Two useful cautions: the cardiovascular jolt of sudden cold is real (ease in if you're older or hypertensive), and routine post-strength-training immersion <a href="https://pubmed.ncbi.nlm.nih.gov/33146851/" rel="noopener nofollow" target="_blank">measurably blunts strength and muscle gains</a> — separate hard training days from serious cold.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety',
    category: 'safety',
    title: 'Safety: alcohol, hearts, and heat',
    tldr: 'The sauna kills almost exclusively via alcohol. Unstable heart disease is the medical no; hydration and common sense cover the rest.',
    bodyHtml: `
      <p><strong>Alcohol is the actual danger.</strong> In Finnish forensic series, about <a href="https://pubmed.ncbi.nlm.nih.gov/18471223/" rel="noopener nofollow" target="_blank">half of all sauna deaths involved alcohol</a> — impaired people pass out in the heat, and unconscious exposure causes fatal hyperthermia and burns within 20–60 minutes. Never sauna drunk, and never let an impaired person bathe alone.</p>
      <p><strong>Cardiac rules:</strong> avoid with unstable angina, recent heart attack, severe symptomatic aortic stenosis, decompensated heart failure, or uncontrolled arrhythmia; stable treated disease generally tolerates sauna well (ask your cardiologist). Antihypertensives and diuretics amplify post-sauna dizziness — hydrate and rise slowly.</p>
      <p><strong>Fever or acute illness:</strong> skip it — you're already thermally loaded.</p>
    `,
  },
  {
    id: 'safety-fertility-pregnancy',
    category: 'safety',
    title: 'Fertility, pregnancy & trying to conceive',
    tldr: 'Sauna reversibly suppresses sperm for months. Uncomplicated pregnancy tolerates short, moderate sessions — Finnish practice agrees.',
    bodyHtml: `
      <p><strong>Men trying to conceive:</strong> in a small experimental study, two 15-minute sessions a week for three months <a href="https://pubmed.ncbi.nlm.nih.gov/23411620/" rel="noopener nofollow" target="_blank">significantly reduced sperm count and motility</a>, still depressed at three months post and fully recovered by six. Pause or minimize sauna during the attempt window.</p>
      <p><strong>Pregnancy:</strong> the teratogenic concern is core temperature ≥39&nbsp;°C in the first trimester. A <a href="https://pubmed.ncbi.nlm.nih.gov/29496695/" rel="noopener nofollow" target="_blank">systematic review of heat exposures</a> found brief, moderate sessions kept core temperature below that line, and sauna is customary in uncomplicated Finnish pregnancies. Keep sessions short (&lt;15–20 min) and comfortable, exit at any discomfort, and abstain in complicated pregnancies or when your obstetrician says so.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-frequency',
    category: 'faq',
    title: 'How often should I sauna for the health effects?',
    tldr: 'The Finnish data bottom out at 4–7 sessions a week; 2–3 is where the signal starts.',
    bodyHtml: `
      <p>Risk fell stepwise with frequency in every cohort analysis — 2–3 sessions/week clearly beat one, and 4–7 looked best, with sessions over ~19 minutes carrying the cardiac signal. Treat it as a habit worth building rather than a prescription: the data are observational, and the right dose is also the one you enjoy enough to repeat.</p>
    `,
  },
  {
    id: 'faq-women',
    category: 'faq',
    title: 'Does the evidence apply to women?',
    tldr: 'Yes — the analyses that included women show the same pattern.',
    bodyHtml: `
      <p>The famous 2015 cohort was men-only, but the 2018 extension (51% women) found the same dose-response — fatal cardiovascular events at 4–7 sessions/week carried a hazard ratio of 0.23, and the stroke analysis included both sexes. Same caveat as everywhere in this guide: observational.</p>
    `,
  },
  {
    id: 'faq-infrared',
    category: 'faq',
    title: 'Is infrared as good as a real sauna?',
    tldr: 'Unknown — every longevity number comes from Finnish sauna; infrared\'s own trial missed its endpoint.',
    bodyHtml: `
      <p>Nobody has tested infrared cabins against the outcomes that made sauna famous. Infrared's clinical literature is Waon therapy in heart-failure patients, whose randomized trial missed its primary endpoint while helping symptoms. Infrared is pleasant and gentler; claiming Finnish-cohort benefits for it is marketing.</p>
    `,
  },
  {
    id: 'faq-detox-faq',
    category: 'faq',
    title: 'Does sauna detox my body?',
    tldr: 'No — measured sweat excretion of pollutants is physiologically negligible.',
    bodyHtml: `
      <p>Direct measurements put pollutant excretion via sweat at ~0.02–0.04% of daily intake — your liver and kidneys handle the real work, sauna or not. Sweating feels cleansing; biochemically it's water and salt.</p>
    `,
  },
  {
    id: 'faq-weight',
    category: 'faq',
    title: 'Will I lose weight?',
    tldr: 'Only water — it returns with your next drink.',
    bodyHtml: `
      <p>The post-sauna scale drop is sweat, restored on rehydration. Calorie burn is modest, and in the only relevant RCT the fat-loss effects came from the exercise arm, not the sauna. For body composition, the sauna is the reward after training, not the training.</p>
    `,
  },
  {
    id: 'faq-heart',
    category: 'faq',
    title: 'Is it safe with a heart condition?',
    tldr: 'Usually yes if stable and treated — never with unstable disease.',
    bodyHtml: `
      <p>Clinical reviews consider stable, medicated cardiovascular disease compatible with sensible sauna use — the Finnish data are full of such bathers. The hard stops are unstable angina, recent myocardial infarction, severe aortic stenosis, and decompensated heart failure. When in doubt, it's a one-question cardiology visit.</p>
    `,
  },
  {
    id: 'faq-conceive',
    category: 'faq',
    title: 'We\'re trying for a baby — should either of us skip the sauna?',
    tldr: 'Him: yes, pause it. Her: short and comfortable is fine in an uncomplicated pregnancy.',
    bodyHtml: `
      <p>Sauna measurably (and reversibly) suppresses sperm count and motility for months — pause during the attempt window and allow up to six months for full recovery. In uncomplicated pregnancy, brief moderate sessions kept core temperature under the risk threshold in reviewed studies and are customary in Finland; keep it short, comfortable, and cleared by your obstetrician.</p>
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
    intro: 'What heat does to you, and where the famous numbers come from.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Doing it right',
    intro: 'The evidence-anchored protocol, and who should check with a doctor first.',
    sections: context,
  },
  {
    id: 'benefits',
    title: 'The claims, graded',
    intro: 'Twelve sauna claims ranked by evidence — including the three famous myths.',
    sections: benefits,
  },
  {
    id: 'variants',
    title: 'Which sauna?',
    intro: 'Finnish, infrared, steam, blankets, and the cold plunge — graded by their own evidence, not each other\'s.',
    sections: variants,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'Alcohol, hearts, fertility, and pregnancy.',
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
  heart: 'Heart',
  brain: 'Brain',
  lungs: 'Lungs',
  mood: 'Mood',
  skin: 'Skin',
  muscle: 'Muscle',
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
