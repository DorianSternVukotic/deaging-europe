/**
 * Longevity-clinics guide — single source of truth.
 *
 * Consumed by /longevity-clinics. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank". The value test applied to every service: does it change
 * decisions or outcomes? Overdiagnosis harms count as negative evidence.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'heart' | 'bones' | 'fitness' | 'cancer' | 'metabolic' | 'hormones' | 'theater' | 'general';

export type SectionCategory = 'concept' | 'context' | 'core' | 'frontier' | 'menu' | 'safety' | 'faq';

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
  'The genuinely valuable parts of a longevity clinic — ApoB and once-in-a-lifetime Lp(a) testing, blood pressure, DEXA at the right age, fitness testing, structured lifestyle coaching — cost hundreds through normal medicine, not tens of thousands.',
  'One test is guideline-backed and widely missed: European consensus says every adult should have Lp(a) measured once in their life. About one in five people carries a risk standard panels never see.',
  'Fitness is the closest thing to a longevity vital sign — in 122,000 patients, low cardiorespiratory fitness rivalled smoking as a mortality risk, with no upper limit to the benefit of being fitter.',
  'The glamour products fail the value test: full-body MRIs find something in ~95% of healthy people (91% of it irrelevant), consumer epigenetic-age tests are noisier than the "years reversed" they report, and no wellness IV drip has an adequately powered trial behind it.',
  'The highest-evidence service on any clinic menu is the least glamorous: DPP-style lifestyle coaching cut diabetes incidence by 58% in a landmark RCT — beating a drug.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'the-landscape',
    category: 'concept',
    title: 'What a "longevity clinic" actually is',
    tldr: 'Anything from a £299 scan startup to a CHF 50,000 residential program — the label covers wildly different products.',
    bodyHtml: `
      <p>The longevity-clinic market spans three decades of price in one label. At the entry end, scan-first startups like Neko Health sell a <a href="https://www.nekohealth.com/se/en/press/neko-health-launches-in-london" rel="noopener nofollow" target="_blank">£299 full-body assessment</a> with a six-figure waiting list. The middle is diagnostics memberships — London's HOOKE from ~£7,900, Berlin's YEARS tiers at €1,900–16,900, US anchors like Fountain Life around $20,000/year. At the top, residential programs: Clinique La Prairie's flagship weeks run CHF 31,800–50,000+.</p>
      <p>Under every brand, the same menu recurs: big blood panels, imaging, fitness testing, wearables, a "personalized plan", and an optional layer of drips and hormones. This guide grades the <em>menu items</em>, because that is what you are actually buying — the brand is upholstery.</p>
    `,
  },
  {
    id: 'value-test',
    category: 'concept',
    title: 'The value test we apply to every service',
    tldr: 'Does it change a decision that changes an outcome? Overdiagnosis and false alarms count as harm, not as "more data".',
    bodyHtml: `
      <p>A medical test earns its money in exactly one way: by changing a decision that changes an outcome. A cholesterol panel can trigger a statin that prevents a heart attack — value. A full-body scan that finds a probably-nothing nodule and triggers six months of follow-up imaging and anxiety — negative value dressed as vigilance.</p>
      <p>So each service below is graded on decision-and-outcome evidence, and <strong>overdiagnosis counts against it</strong>: false positives, incidentalomas, and noise-driven "biological age" numbers are costs, not features. "More data" is only better when the data are reliable enough to act on — a bar most of the exotic menu does not clear.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'rational-package',
    category: 'context',
    title: 'The rational package (≈€500–1,500/year, no membership)',
    tldr: 'A GP or private internist can assemble everything guideline-backed on a clinic menu for a fraction of the fee.',
    bodyHtml: `
      <p>What an evidence-first "longevity program" actually contains:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Bloods:</strong> standard lipids + <strong>ApoB</strong>, <strong>Lp(a) once ever</strong>, HbA1c, kidney/liver/thyroid — then annual-ish repeats of the treatable ones.</li>
        <li><strong>Blood pressure</strong> — measured properly, treated boringly.</li>
        <li><strong>Imaging at the right moments:</strong> a CAC scan once around 45–60 if the statin decision is genuinely uncertain; DEXA bone density for women at 65, or earlier post-menopause with risk factors.</li>
        <li><strong>Fitness vital signs:</strong> a VO2max estimate (test or watch) and grip strength — then training that moves them.</li>
        <li><strong>The national cancer screens you may be behind on</strong> — mammography, cervical, colorectal: the screening with actual mortality evidence.</li>
        <li><strong>A menopause consultation with an actual specialist</strong> when symptoms arrive.</li>
        <li><strong>Structured lifestyle coaching</strong> if weight or glucose are drifting — DPP-derived programs exist at consumer prices.</li>
      </ul>
      <p>Everything above that line in a clinic brochure is either research-grade or theater. What memberships legitimately add is convenience, aggregation, and accountability — worth something, just not always five figures.</p>
    `,
  },
  {
    id: 'red-flags',
    category: 'context',
    title: 'Red flags, and the questions that expose them',
    tldr: 'House supplement lines, IV-heavy menus, biological-age marketing, hormone "optimization" of normal labs.',
    bodyHtml: `
      <p><strong>Walk-away signals:</strong> the clinic sells its own supplement line; the menu is IV-drip-heavy; marketing leads with biological-age reversal or telomere scores; "hormone optimization" targets for normal labs; stem-cell or exosome infusions (often via offshore partners); full-body MRI framed as essential; results delivered by salespeople; unchangeable markers (Lp(a), genetics) re-billed annually.</p>
      <p><strong>Questions worth asking before joining:</strong></p>
      <ul class="list-disc pl-5 space-y-2">
        <li>Which of your tests are supported by ESC/USPSTF/NICE-level guidance, and which are experimental?</li>
        <li>What is your false-positive and incidentaloma rate, and who pays for the downstream workup?</li>
        <li>Will a physician who can actually prescribe (statins, antihypertensives, menopause HT) review my results — and do you prescribe them?</li>
        <li>Can I buy diagnostics à la carte without the supplement and drip layer?</li>
        <li>What outcome, other than my dashboard, improves after a year — and can you show a member cohort's numbers?</li>
      </ul>
      <p>A good clinic answers these cheerfully. A sales funnel changes the subject.</p>
    `,
  },
];

const core: Section[] = [
  {
    id: 'svc-bloods',
    category: 'core',
    title: 'The blood-panel core (ApoB, Lp(a), HbA1c)',
    tldr: 'Guideline-backed and cheap: ApoB counts the particles that cause heart disease; Lp(a) once per lifetime; HbA1c for glucose.',
    evidence: 'strong',
    focus: 'heart',
    cost: '€100–300/year',
    bodyHtml: `
      <p>The defensible heart of every longevity panel is small and inexpensive. <strong>Lp(a)</strong> is the star: the <a href="https://academic.oup.com/eurheartj/article/43/39/3925/6670882" rel="noopener nofollow" target="_blank">European Atherosclerosis Society consensus</a> recommends every adult be measured <em>at least once in their lifetime</em> — it is genetically fixed, missed by standard panels, and elevated in ~1 in 5 people, where it changes how aggressively everything else gets managed.</p>
      <p><strong>ApoB</strong> directly counts atherogenic particles and is accepted by <a href="https://www.escardio.org/communities/councils/cardiology-practice/education/cardiopractice/what-is-new-in-the-2025-focused-update-of-the-2019-esc-eas-guidelines-for-the-m/" rel="noopener nofollow" target="_blank">ESC/EAS guidance</a> as an alternative (often superior) to LDL-C — particularly with high triglycerides or metabolic syndrome. <strong>HbA1c</strong> is standard prediabetes screening. hs-CRP adds a little in borderline statin decisions; the surrounding 100-marker panel adds mostly invoices.</p>
      <p><strong>Cadence:</strong> full baseline once, Lp(a) once ever, then annual or biennial repeats of the treatable markers — not quarterly mega-draws.</p>
    `,
  },
  {
    id: 'svc-dexa',
    category: 'core',
    title: 'DEXA bone-density screening',
    tldr: 'USPSTF Grade B: all women 65+, and younger postmenopausal women at risk. Silent disease, treatable, undertested.',
    evidence: 'strong',
    focus: 'bones',
    cost: '€50–150',
    bodyHtml: `
      <p>For this site's audience, bone density is one of the highest-yield tests on any menu. The <a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening" rel="noopener nofollow" target="_blank">2025 USPSTF recommendation</a> (Grade B) is unambiguous: screen all women 65+, and postmenopausal women under 65 with risk factors. Osteoporosis is silent until the first fracture, treatable, and chronically underdiagnosed. Radiation is trivial, the scan takes minutes.</p>
      <p>The body-composition add-on from the same machine (visceral fat, lean mass) is interesting for tracking training — but formally its clinical utility is still <em>uncertain</em>; grade it a bonus, not a screen.</p>
    `,
  },
  {
    id: 'svc-cac',
    category: 'core',
    title: 'CT coronary calcium score',
    tldr: 'Guideline-endorsed tie-breaker for the statin decision at intermediate risk — once, around 45–60. Not a universal screen.',
    evidence: 'strong',
    focus: 'heart',
    cost: '€100–300, once',
    bodyHtml: `
      <p>A low-dose CT that counts calcified coronary plaque. Its legitimate role is precise: when the statin decision is genuinely uncertain at borderline-to-intermediate risk, <a href="https://www.jacc.org/doi/10.1016/j.jcmg.2022.06.018" rel="noopener nofollow" target="_blank">ACC/AHA guidance</a> endorses CAC as the tie-breaker — a score of 0 can justify deferring, 100+ favours treating. That describes a very common 50-something decision, which is why it earns "strong" despite the honest caveat that <a href="https://www.tctmd.com/news/uspstf-insufficient-evidence-support-cac-score-hscrp-or-abi-risk-assessment" rel="noopener nofollow" target="_blank">no completed RCT shows scanning itself saves lives</a>.</p>
      <p>Who it doesn't help: low-risk thirty-somethings (a guaranteed zero and false reassurance — early plaque isn't calcified yet) and high-risk patients (treat regardless). One scan; "progression tracking" is not a thing worth buying — statins can raise the score while lowering risk.</p>
    `,
  },
  {
    id: 'svc-vo2max',
    category: 'core',
    title: 'VO2max / fitness testing',
    tldr: 'The strongest mortality association in preventive medicine, and fully actionable through training — though no trial tests the testing.',
    evidence: 'moderate',
    focus: 'fitness',
    cost: '€150–400 (CPET)',
    bodyHtml: `
      <p>In <a href="https://pubmed.ncbi.nlm.nih.gov/30646252/" rel="noopener nofollow" target="_blank">122,007 patients</a>, cardiorespiratory fitness was inversely associated with mortality <em>with no upper limit</em> — being unfit carried risk comparable to smoking or diabetes. The American Heart Association argues fitness should be a <a href="https://pubmed.ncbi.nlm.nih.gov/27881567/" rel="noopener nofollow" target="_blank">clinical vital sign</a>.</p>
      <p>Unlike most longevity metrics, this one sits on a modifiable causal pathway with a known intervention: structured endurance and interval training reliably raises VO2max, and a retest verifies it. A lab CPET adds training zones and diagnostic detail; a watch estimate captures much of the signal free. Baseline, train 6–12 months, retest.</p>
    `,
  },
  {
    id: 'svc-grip',
    category: 'core',
    title: 'Grip strength & functional testing',
    tldr: 'A €30 dynamometer out-predicted blood pressure for mortality in 140,000 people. Marker of robustness — train the whole body.',
    evidence: 'moderate',
    focus: 'fitness',
    cost: '~€0–30',
    bodyHtml: `
      <p>In the <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(14)62000-6/abstract" rel="noopener nofollow" target="_blank">PURE study</a> (~140,000 adults, 17 countries), every 5&nbsp;kg less grip strength meant 16% higher all-cause mortality — a better death predictor than systolic blood pressure. Chair-stands, gait speed, and balance carry similar signals, and all of it screens for the sarcopenia that accelerates around menopause.</p>
      <p>The honest framing: grip is a <em>window</em>, not a target — training your forearms doesn't fool mortality. Progressive resistance training of the whole body is the intervention; the dynamometer is just the scoreboard. If a clinic charges hundreds for "functional assessment", the price is the problem, not the test.</p>
    `,
  },
  {
    id: 'svc-coaching',
    category: 'core',
    title: 'The plan & coaching layer',
    tldr: 'Quietly the best-evidenced thing clinics sell: DPP-style coaching cut diabetes incidence 58% in an RCT — beating metformin.',
    evidence: 'strong',
    focus: 'metabolic',
    cost: '€300–1,500/year',
    bodyHtml: `
      <p>The unglamorous engine. In the <a href="https://pubmed.ncbi.nlm.nih.gov/11832527/" rel="noopener nofollow" target="_blank">Diabetes Prevention Program RCT</a>, structured lifestyle coaching (weight, activity, 16-session curriculum) cut type-2 diabetes incidence by <strong>58%</strong> versus placebo — metformin managed 31% — with benefits persisting for two decades of follow-up.</p>
      <p>The nuance that keeps claims honest: once disease is established, intensive lifestyle change stopped preventing cardiovascular events in the Look&nbsp;AHEAD trial — coaching moves risk factors reliably and prevents disease best <em>upstream</em>. What predicts a good clinic here: physician-led interpretation, a protocolized curriculum, exercise prescription with progression, and willingness to also prescribe the boring proven drugs. Ironically, DPP-derived programs exist at consumer prices far below memberships.</p>
    `,
  },
  {
    id: 'svc-menopause',
    category: 'core',
    title: 'Menopause care, done properly',
    tldr: 'The one hormone service with guideline backing: HT is the most effective symptom treatment and protects bone near menopause onset.',
    evidence: 'strong',
    focus: 'hormones',
    cost: 'Consultation €100–300',
    bodyHtml: `
      <p>Inside the hormone menu hides one genuinely guideline-based service. The <a href="https://journals.lww.com/menopausejournal/fulltext/2022/07000/the_2022_hormone_therapy_position_statement_of_the.4.aspx" rel="noopener nofollow" target="_blank">Menopause Society position statement</a>: hormone therapy is the most effective treatment for vasomotor symptoms and genitourinary syndrome and prevents bone loss, with benefits generally outweighing risks for women <strong>under 60 or within 10 years of menopause onset</strong> without contraindications.</p>
      <p>What it is not: a longevity drug — the same guidance explicitly declines to endorse HT for chronic-disease prevention. A clinic that evaluates symptomatic perimenopausal women properly is delivering real medicine; one selling compounded "bioidentical pellet optimization" against invented target levels is not.</p>
    `,
  },
];

const frontier: Section[] = [
  {
    id: 'svc-galleri',
    category: 'frontier',
    title: 'Multi-cancer blood tests (Galleri)',
    tldr: 'The most serious new screen — its 142,000-person RCT missed the primary endpoint but cut stage-IV diagnoses. Mortality data pending.',
    evidence: 'emerging',
    focus: 'cancer',
    cost: '~€900–1,000/draw',
    bodyHtml: `
      <p>Galleri looks for tumour DNA fragments across ~50 cancers in one blood draw. It is the rare longevity product with a real randomized trial: <a href="https://www.qmul.ac.uk/news/latest-news/2026/medicine-and-dentistry/fmd/first-results-from-nhs-galleri-trial-presented-at-international-conference-.html" rel="noopener nofollow" target="_blank">NHS-Galleri</a> (142,000+ adults, three annual rounds) <strong>missed its primary endpoint</strong> (no overall late-stage reduction) while showing &gt;20% fewer stage-IV cancers in later rounds, 25% fewer cancers found via emergency presentation, and a positive-predictive value just over 50%.</p>
      <p>Translation for a would-be buyer: a "positive" is a coin flip for cancer (far better than most screens); a "negative" must never defer mammography, colonoscopy, or cervical screening. Mortality results are pending and the NHS is reviewing rather than rolling out. Rational stance: watch closely; don't anchor a prevention plan on it yet.</p>
    `,
  },
  {
    id: 'svc-cgm',
    category: 'frontier',
    title: 'CGM for non-diabetics',
    tldr: 'Modest short-term glycaemic effects as a feedback tool; nobody has shown healthy wearers end up healthier.',
    evidence: 'emerging',
    focus: 'metabolic',
    cost: '€60–120/month',
    bodyHtml: `
      <p>Continuous glucose monitors are genuinely useful in diabetes. In healthy people, systematic reviews land on "unclear": <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11668089/" rel="noopener nofollow" target="_blank">modest glycaemic effects as a behaviour-change tool</a>, mechanisms uncertain, and <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12612783/" rel="noopener nofollow" target="_blank">no evidence of durable behaviour change or outcomes</a> in non-diabetics. Meanwhile normal post-meal spikes get pathologized and sensor error is proportionally largest exactly in the normal range.</p>
      <p>Defensible uses: prediabetes, a history of gestational diabetes, or a clinician-interpreted 2–4-week experiment. As a standing subscription for the metabolically healthy, it's a data product, not medicine.</p>
    `,
  },
  {
    id: 'svc-bodycomp',
    category: 'frontier',
    title: 'DEXA body composition & visceral fat',
    tldr: 'Correlates well with metabolic risk and tracks training — but its clinical utility as a screen is formally uncertain.',
    evidence: 'emerging',
    focus: 'metabolic',
    cost: '€50–150',
    bodyHtml: `
      <p>The same scanner that measures bone can quantify visceral fat and lean mass — genuinely useful for tracking resistance training and muscle preservation (not least in the GLP-1 era), and visceral fat tracks cardiometabolic risk in cohorts. Formal reviews still class the <em>clinical utility</em> of the adiposity metrics as uncertain, and a tape measure plus scale captures most of the decision value free. A worthwhile add-on when you're scanning anyway; not a reason to scan.</p>
    `,
  },
  {
    id: 'svc-epigenetic',
    category: 'frontier',
    title: 'Epigenetic "biological age" tests',
    tldr: 'Valid research tools at cohort level; individual results wobble by years between runs of the same sample. The noise is the business model.',
    evidence: 'limited',
    focus: 'theater',
    cost: '€200–400/test',
    bodyHtml: `
      <p>Methylation clocks (GrimAge, DunedinPACE and their consumer wrappers) genuinely predict morbidity and mortality <em>across cohorts</em>. The product problem is individual-level reliability: technical noise makes major clocks deviate <a href="https://www.aging-us.com/article/205046/text" rel="noopener nofollow" target="_blank">3–9 years between replicates of the same blood sample</a>, and a 2025 multi-study analysis found most clocks only moderately reliable — with short-term stress alone shifting scores.</p>
      <p>So the "you got 2.3 years younger on our program" retest sits comfortably inside measurement error, and no trial shows clock-guided decisions improve anything. Research endpoint: promising. Consumer product: the noise is the business model.</p>
    `,
  },
  {
    id: 'svc-fullbody-mri',
    category: 'frontier',
    title: 'Full-body MRI screening (Prenuvo-style)',
    tldr: '~95% of healthy adults show "something"; 91% of findings are irrelevant; radiology societies recommend against it.',
    evidence: 'limited',
    focus: 'cancer',
    cost: '€1,500–2,500',
    bodyHtml: `
      <p>The sector's flagship product, and its best example of unproven medicine at scale. The <a href="https://www.acr.org/News-and-Publications/Media-Center/2023/ACR-Statement-on-Screening-Total-Body-MRI" rel="noopener nofollow" target="_blank">American College of Radiology's position</a>: no documented evidence that whole-body screening is effective in prolonging life in asymptomatic people, with explicit concern about cascades of non-specific findings. The numbers behind it: across 12 studies, <a href="https://www.fredhutch.org/en/news/center-news/2025/08/pricey-whole-body-mris-dont-add-up.html" rel="noopener nofollow" target="_blank">95% of asymptomatic adults had at least one abnormal finding, 91% irrelevant</a>; cancer yield ~1–2% with no shown survival benefit — and the whole-body protocol has missed breast cancers that mammography catches.</p>
      <p>No radiation is a genuine plus, and rare high-risk genetic syndromes (e.g. Li-Fraumeni) are the legitimate exception. For everyone else: €2,000 for a lottery ticket whose usual payout is follow-up imaging and a bad month.</p>
    `,
  },
  {
    id: 'svc-cimt',
    category: 'frontier',
    title: 'Carotid intima-media thickness (CIMT)',
    tldr: 'Formally removed from guidelines (Class III: No Benefit) — a 45,828-person meta-analysis showed it adds ~nothing to risk models.',
    evidence: 'limited',
    focus: 'theater',
    bodyHtml: `
      <p>The cautionary tale clinics hope you won't look up. After a <a href="https://www.jacc.org/doi/10.1016/j.jcmg.2013.11.014" rel="noopener nofollow" target="_blank">meta-analysis of 45,828 people</a> showed adding CIMT to standard risk models improved reclassification by well under 1%, the ACC/AHA guideline rated routine CIMT <strong>Class III: No Benefit</strong> — the explicit "don't do this" category. (Carotid <em>plaque</em> on ultrasound retains some standing as a risk modifier; millimetre-tracking "vascular age" reports are the discredited version.) A clinic still leading with CIMT is running a 2005 playbook.</p>
    `,
  },
  {
    id: 'svc-telomere',
    category: 'frontier',
    title: 'Telomere length testing',
    tldr: 'Assays vary ~20% run to run, individual variability swamps the signal — dismissed outside rare-disease genetics.',
    evidence: 'limited',
    focus: 'theater',
    bodyHtml: `
      <p>Consumer telomere tests answer differently on different days — the qPCR assays vary by around <a href="https://www.sciencenews.org/article/home-telomere-testing-not-reliable-marker-aging-researcher-says" rel="noopener nofollow" target="_blank">20% between runs</a> — and telomere length varies so much between healthy same-age people that it fails standard biomarker-of-aging criteria. Real telomere biology matters in rare telomere syndromes, diagnosed by specialists with clinical-grade assays. No consumer decision improves with this number.</p>
    `,
  },
  {
    id: 'svc-microbiome',
    category: 'frontier',
    title: 'Consumer microbiome testing',
    tldr: 'Identical samples get different answers from different providers; consensus statements find no proven clinical value.',
    evidence: 'limited',
    focus: 'theater',
    bodyHtml: `
      <p>When researchers sent identical stool samples to multiple consumer services, <a href="https://www.nature.com/articles/s42003-025-09301-3" rel="noopener nofollow" target="_blank">between-provider variability rivalled the biological difference between two people</a>. An international consensus statement is blunt: these tests are sold <a href="https://pubmed.ncbi.nlm.nih.gov/39647502/" rel="noopener nofollow" target="_blank">without proven value in clinical practice</a>; "dysbiosis" has no agreed definition, and the report funnels into probiotic sales. The evidence-based gut advice — fibre, plants, fermented foods — requires no €300 report.</p>
    `,
  },
];

const menu: Section[] = [
  {
    id: 'svc-drips',
    category: 'menu',
    title: 'IV drips (NAD+, vitamins, glutathione)',
    tldr: 'No adequately powered trial supports any wellness IV; NAD+ infusions commonly cause nausea and cramping. Expensive urine.',
    evidence: 'limited',
    focus: 'theater',
    cost: '€150–1,200/drip',
    bodyHtml: `
      <p>The drip menu is where clinic economics meet evidence vacuum. A <a href="https://pubmed.ncbi.nlm.nih.gov/37971292/" rel="noopener nofollow" target="_blank">systematic review of NAD interventions</a> found small studies at critical risk of bias and no adequately powered trial of IV NAD+ for any wellness indication — while tolerability pilots log nausea, cramping, and chest pressure during infusion. Vitamin cocktails bypass a gut that wasn't the problem; glutathione "brightening" drips have no outcome evidence and real safety warnings elsewhere.</p>
      <p>What IVs reliably deliver: infection and phlebitis risk, fluid load, and invoices. Nutrients belong in food and, where genuinely deficient, in tablets.</p>
    `,
  },
  {
    id: 'svc-hormone-opt',
    category: 'menu',
    title: 'Hormone "optimization" (TRT, DHEA, peptides)',
    tldr: 'Treating normal levels has no outcome evidence and known harms; TRAVERSE showed more AF, clots, and fractures on testosterone.',
    evidence: 'limited',
    focus: 'hormones',
    bodyHtml: `
      <p>Distinct from legitimate menopause care and genuine hypogonadism treatment, "optimization" means pushing normal labs to youthful targets. For testosterone, the <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2215025" rel="noopener nofollow" target="_blank">TRAVERSE trial</a> (5,246 men) established cardiovascular non-inferiority in actual hypogonadism — alongside <em>more</em> atrial fibrillation, venous clots, and fractures; post-trial European guidance confines therapy to documented deficiency and urges lifestyle-first for obesity-related low T. DHEA trials in normal aging show no consistent benefit.</p>
      <p><strong>Peptides</strong> (BPC-157, sermorelin/CJC-1295 and friends) are the grey zone's grey zone: <a href="https://www.usada.org/spirit-of-sport/bpc-157-peptide-prohibited/" rel="noopener nofollow" target="_blank">no human efficacy trials</a>, banned from pharmacy compounding over safety-data gaps, circulating semi-legally — and raising GH/IGF-1 in healthy adults is, if anything, a theoretical longevity <em>negative</em>.</p>
    `,
  },
  {
    id: 'svc-hbot',
    category: 'menu',
    title: 'Hyperbaric oxygen for "anti-aging"',
    tldr: 'Rests on one 35-person non-randomized telomere study whose lead author sells the protocol. Real medicine — for other indications.',
    evidence: 'limited',
    focus: 'theater',
    cost: '€150–400/session ×60',
    bodyHtml: `
      <p>The anti-aging HBOT pitch rests on a single <a href="https://www.aging-us.com/article/202188/text" rel="noopener nofollow" target="_blank">35-person, non-randomized Israeli study</a> reporting longer blood-cell telomeres after 60 sessions — no placebo, surrogate endpoints, measured with assays known for noise, and a lead researcher with equity in the clinic chain selling the protocol at five figures. Hyperbaric oxygen is genuine medicine for decompression sickness and selected wounds; as a longevity product it is a pressure chamber for money.</p>
    `,
  },
  {
    id: 'svc-hard-no',
    category: 'menu',
    title: 'The hard-no list: ozone, cryo chambers, young blood, stem-cell IVs',
    tldr: 'Regulators have said it plainly: no medical use (ozone), no proven benefit (young plasma), documented catastrophic harms (stem-cell IVs).',
    evidence: 'limited',
    focus: 'theater',
    bodyHtml: `
      <p>Four menu items where the record is closed:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Ozone therapy</strong> — US federal regulation states ozone is <a href="https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-801/subpart-H/section-801.415" rel="noopener nofollow" target="_blank">"a toxic gas with no known useful medical application"</a>.</li>
        <li><strong>Whole-body cryotherapy chambers</strong> — no device cleared for any medical claim; risks include frostbite and asphyxiation. Brief soreness relief is the ceiling.</li>
        <li><strong>"Young blood" plasma</strong> — the FDA warns of <a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/important-information-about-young-donor-plasma-infusions-profit" rel="noopener nofollow" target="_blank">no proven clinical benefit</a> and real infusion risks; the flagship seller shut down after the warning.</li>
        <li><strong>Stem-cell IVs abroad</strong> — FDA alerts document infections, tumours, and blindness from unapproved products; hundreds of adverse events including deaths are catalogued. The sector's hardest red flag.</li>
      </ul>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety',
    category: 'safety',
    title: 'Overdiagnosis — the harm nobody itemizes',
    tldr: 'False positives and incidentalomas cost money, procedures, and months of fear — and the scan menu produces them at scale.',
    bodyHtml: `
      <p>Screening healthy people has a mathematical property brochures omit: when true disease is rare, most "findings" are false alarms. A full-body MRI "abnormality" rate of ~95% with 91% irrelevance means the <em>typical</em> outcome of a scan is a finding, and the typical finding means follow-up imaging, sometimes biopsies, and weeks of fear — occasionally with real complications from the workup itself.</p>
      <p>This is why guideline bodies are conservative: the national cancer screens (mammography, cervical, colorectal) earned their place through mortality trials that netted out the false-alarm harms. The longevity-menu extras haven't. A rational buyer treats every non-guideline test as having two prices — the invoice, and the expected cost of what it finds by accident.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-worth-it',
    category: 'faq',
    title: 'Are longevity clinics worth the money?',
    tldr: 'Mostly no at list price — the evidence-backed core costs hundreds via normal medicine.',
    bodyHtml: `
      <p>The components with real evidence — the blood core, blood pressure, CAC in borderline cases, DEXA at the right age, fitness testing, coaching, menopause care — are assemblable for €500–1,500/year through a good GP or internist. Memberships legitimately add convenience, aggregation, and accountability; the exotic layer adds invoices. If those service benefits are worth the premium to you, buy them with open eyes — à la carte, minus the drips.</p>
    `,
  },
  {
    id: 'faq-underused',
    category: 'faq',
    title: 'What single test is most underused?',
    tldr: 'Lp(a), once in your life.',
    bodyHtml: `
      <p>European consensus explicitly recommends every adult be measured once. Roughly one in five people carries elevated Lp(a) that standard panels never see, and the result durably changes how aggressively everything else — LDL, blood pressure, lifestyle — should be managed. It costs about as much as lunch.</p>
    `,
  },
  {
    id: 'faq-mri',
    category: 'faq',
    title: 'Should I get a full-body MRI "just to be safe"?',
    tldr: 'Radiology societies say no — the usual outcome is an irrelevant finding plus a cascade.',
    bodyHtml: `
      <p>The ACR advises against whole-body screening in asymptomatic people: ~95% of scans show something, ~91% of findings are irrelevant, cancer yield is 1–2% with no proven survival benefit — and "just to be safe" routinely converts into months of follow-up. Put the money toward the screens with mortality evidence you may actually be behind on.</p>
    `,
  },
  {
    id: 'faq-bioage',
    category: 'faq',
    title: 'My clinic says I got 3 years "biologically younger". Real?',
    tldr: 'Probably not measurable — the clocks wobble more than that between runs.',
    bodyHtml: `
      <p>Leading epigenetic clocks can differ by 3–9 years between duplicate runs of the same blood sample, and week-to-week biology (stress, illness) shifts scores further. Group averages in research mean something; your individual before-and-after usually doesn't. Judge the program by blood pressure, ApoB, fitness, and strength instead — those numbers are real.</p>
    `,
  },
  {
    id: 'faq-galleri-faq',
    category: 'faq',
    title: 'Is the Galleri cancer blood test ready for routine use?',
    tldr: 'Not yet — impressive RCT signals, missed primary endpoint, mortality data pending.',
    bodyHtml: `
      <p>The NHS trial missed its primary endpoint while cutting stage-IV diagnoses by over 20% — genuinely promising, genuinely unfinished. Reasonable for informed early adopters who keep every standard screen; not a replacement for anything, and a negative result must never postpone your mammogram or colonoscopy.</p>
    `,
  },
  {
    id: 'faq-three-things',
    category: 'faq',
    title: 'If I do only three things from a clinic menu, which?',
    tldr: 'Know your numbers, build fitness and strength, take bones and menopause seriously.',
    bodyHtml: `
      <p>One: measure and treat ApoB, Lp(a) (once), blood pressure, and HbA1c. Two: build cardiorespiratory fitness and strength — the mortality gradients rival smoking, and they're trainable. Three: for women, treat bone density and menopause care as first-class medicine at the guideline ages. All three are cheap; none needs a membership.</p>
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
    intro: 'What the market sells, and the one test every service must pass.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Buying it right',
    intro: 'The rational package, the red flags, and the questions that expose them.',
    sections: context,
  },
  {
    id: 'core',
    title: 'The services that change decisions',
    intro: 'Guideline-backed testing and the unglamorous coaching layer that actually has RCT wins.',
    sections: core,
  },
  {
    id: 'frontier',
    title: 'The frontier: promising to premature',
    intro: 'New screens and biomarkers — a few worth watching, several already dismissed.',
    sections: frontier,
  },
  {
    id: 'menu',
    title: 'Drips, hormones & chambers',
    intro: 'The high-margin layer, graded without mercy.',
    sections: menu,
  },
  {
    id: 'safety',
    title: 'The hidden cost',
    intro: 'Overdiagnosis, quantified.',
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
  bones: 'Bones',
  fitness: 'Fitness',
  cancer: 'Cancer screening',
  metabolic: 'Metabolic',
  hormones: 'Hormones',
  theater: 'Theater check',
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
