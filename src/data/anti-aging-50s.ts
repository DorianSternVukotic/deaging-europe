/**
 * Anti-aging in your 50s — single source of truth (decade guide).
 *
 * Consumed by /anti-aging-50s. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank". Editorial spine: the estrogen cliff runs three processes at
 * once (thinning skin, deflating deep fat, receding bone), so single-tool
 * treatments disappoint; hormone therapy is for symptoms and bone, not skin;
 * and this is the decade where surgery starts to beat repeated devices.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'skin' | 'volume' | 'laxity' | 'pigment' | 'hormones' | 'bone' | 'body' | 'hype' | 'general';

export type SectionCategory = 'concept' | 'context' | 'daily' | 'clinic' | 'surgery' | 'health' | 'safety' | 'faq';

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
  'Menopause (median 51) is a cliff, not a slope: skin collagen falls roughly 30% in the first five postmenopausal years, barrier ceramides shorten, bone loses ~2.5% a year through the transition, and deep facial fat deflates while the skeleton recedes.',
  'Hormone therapy is the most effective treatment for hot flashes and bone loss for women under 60 — and it thickens skin on biopsy — but the one large facial-wrinkle RCT was negative and no guideline prescribes it for skin. Take it for the right reasons, via a menopause specialist, transdermally.',
  'The tretinoin trials enrolled adults into their 70s and a 2-year RCT showed continuing gains: it is never too late. Add barrier repair for postmenopausal dryness and treat lentigines with light, not just creams.',
  'The 50s are the sweet spot for resurfacing and pigment lasers, and the decade where surgery starts to beat repeated devices: blepharoplasty has RCT-level technique data, facelifts reduce apparent age by 5–6 years in AI-rated studies, and thread lifts lose their effect within a year.',
  'The most consequential interventions this decade are not cosmetic: heavy resistance and impact training (LIFTMOR: ~4% better spine density), DEXA and lipid screening at the right moments, and the cancer screens with mortality evidence.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-changes',
    category: 'concept',
    title: 'What actually changes in your 50s',
    tldr: 'The estrogen cliff: ~30% of skin collagen in five years, shorter barrier ceramides, dryness and slower healing; bone loss peaks; fat shifts to the abdomen; hot flashes last a median 7.4 years.',
    bodyHtml: `
      <p>The canonical numbers come from Brincat and Studd's 1980s biopsy series: skin collagen and thickness track <a href="https://obgyn.onlinelibrary.wiley.com/doi/abs/10.1111/j.1471-0528.1987.tb02338.x" rel="noopener nofollow" target="_blank">years since menopause rather than age</a>, with roughly 30% lost in the first five postmenopausal years and ~2% a year after — small, cross-sectional, thigh-skin studies, so the "30%" is an extrapolation to the face, but the direction is unarguable. Estrogen-deficient skin is thinner, drier, less elastic and slower to heal (<a href="https://www.sciencedirect.com/science/article/pii/S2352647519300012" rel="noopener nofollow" target="_blank">IJWD review</a>), and a <a href="https://www.nature.com/articles/s41598-022-26095-0" rel="noopener nofollow" target="_blank">2022 Scientific Reports study</a> found postmenopausal stratum corneum has fewer and shorter ceramides — changes absent in women on HT — which is why the barrier leaks and why barrier repair moves up the list.</p>
      <p>Systemically the transition is the fastest bone loss of a woman's life: SWAN shows spine density falling ~2.5% a year from a year before to two years after the final period, <a href="https://pubmed.ncbi.nlm.nih.gov/21976317/" rel="noopener nofollow" target="_blank">10.6% cumulatively over the decade</a>. Fat gain doubles and lean mass declines from two years before the final period, with fat redistributing to the abdomen; LDL cholesterol <a href="https://www.swanstudy.org/womens-health-info/cardiovascular-risk-and-heart-health-in-women-during-and-after-menopause/" rel="noopener nofollow" target="_blank">rises with menopause independent of age</a>. Hot flashes last a median <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4433164/" rel="noopener nofollow" target="_blank">7.4 years</a>, fragmenting sleep — relevant to skin, mood and the "brain fog" so many report.</p>
    `,
  },
  {
    id: 'three-processes',
    category: 'concept',
    title: 'Why one-tool treatments disappoint after 50',
    tldr: 'Bone recedes, deep fat deflates, and skin thins and loosens — all at once. Filling only one looks overfilled; tightening only one looks hollow.',
    bodyHtml: `
      <p>Three processes run in parallel in this decade. The facial skeleton resorbs at the maxilla and pyriform aperture, the orbital rims and the prejowl mandible (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3404279/" rel="noopener nofollow" target="_blank">Mendelson &amp; Wong</a>) — the platform under the soft tissue shrinks, driving tear-trough hollows, deepening folds, jowls and marionette lines. The deep fat compartments (deep medial cheek, the fat under the eye muscle) atrophy while superficial compartments <a href="https://pubmed.ncbi.nlm.nih.gov/21915077/" rel="noopener nofollow" target="_blank">migrate downward</a>, producing "pseudoptosis" — a heavier-looking fold that is really deflation. And the skin itself thins and loosens.</p>
      <p>The practical consequence: treatments that address only one layer look wrong. Fill a deflated face without addressing laxity and it reads overfilled; tighten skin over a hollow and it reads gaunt; lift skin over receded bone and the result is short-lived. This is also the decade in which the arithmetic tilts: once jowls and neck laxity dominate, non-surgical options buy 6–18 months of partial improvement each, their cumulative cost typically passes a facelift's within 5–7 years, and the satisfaction data favour surgery. Before that point — pigment, texture, upper-face lines, early deflation — devices and injectables are the better value.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'routine-and-budget',
    category: 'context',
    title: 'The rational 50s routine, by budget',
    tldr: 'Foundation ~€400–900/yr; maintenance ~€2,500–6,000 with toxin, IPL and a fractional or PLLA course; structural surgery €8,000–35,000 once, then maintenance.',
    bodyHtml: `
      <p><strong>Foundation (≈€400–900/year):</strong> gentle cleanse; optional vitamin C; ceramide moisturizer; SPF 50 every morning (mineral if reactive). At night, tretinoin 0.025–0.05% — two or three nights a week over moisturizer, nightly by month three — plus a ceramide/niacinamide moisturizer, eye area and neck included. No scrubs or daily acids on thinner postmenopausal skin. Topical minoxidil if thinning. One dermatologist full-skin check a year.</p>
      <p><strong>Maintenance (≈€2,500–6,000/year):</strong> foundation plus toxin two or three times a year, one IPL or non-ablative course for pigment, and either a poly-L-lactic-acid series or a fractional-laser session; DEXA and a lipid panel through your GP or a screening service.</p>
      <p><strong>Structural (one-off €8,000–35,000, then maintenance):</strong> upper ± lower blepharoplasty; a SMAS or deep-plane facelift with neck and fat grafting, ideally combined with perioral resurfacing or a phenol peel under one anaesthetic.</p>
      <p><strong>The body, at every tier:</strong> two supervised heavy resistance sessions a week plus impact work; 150 minutes of easy aerobic exercise; 1.0–1.2 g/kg protein; creatine 5 g/day if training; alcohol as low as tolerable; treating night sweats rather than enduring them. Prices are indicative; UK roughly 0.85× in pounds.</p>
    `,
  },
  {
    id: 'screening-schedule',
    category: 'context',
    title: 'The screening schedule that outranks skincare',
    tldr: 'Mammography 50–69, colorectal FIT 50–74, cervical to 65, DEXA at 65 or earlier with risk, annual lipids with ApoB, Lp(a) once, a yearly skin check.',
    bodyHtml: `
      <p>The <a href="https://www.consilium.europa.eu/en/press/press-releases/2022/12/09/council-updates-its-recommendation-to-screen-for-cancer/" rel="noopener nofollow" target="_blank">2022 EU Council recommendation</a> sets the baseline: mammography for all women 50–69 (suggested 45–74), colorectal screening by quantitative FIT for 50–74 with colonoscopy follow-up, and HPV-based cervical screening every five years to 65. These are the screens with mortality evidence; nothing in a clinic brochure replaces them.</p>
      <p><strong>Bone:</strong> <a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening" rel="noopener nofollow" target="_blank">USPSTF 2025</a> screens all women at 65 and younger postmenopausal women at increased risk (low weight, parental hip fracture, smoking, alcohol, early menopause, steroids) — given SWAN's loss curve, a baseline DEXA around the final period is reasonable with any risk factor. <strong>Cardiometabolic:</strong> an annual lipid panel with ApoB, Lp(a) once, HbA1c, waist and blood pressure; a coronary-calcium score for intermediate risk in the late 50s. <strong>Skin:</strong> melanoma incidence keeps rising after 50 (about +2.8% a year in women per <a href="https://www.aad.org/media/stats-skin-cancer" rel="noopener nofollow" target="_blank">AAD data</a>); population screening evidence is weak, but an annual dermatologist examination is sensible risk-stratified care for a fair-skinned, sun-exposed, cosmetically treated cohort — and any lesion changing after a laser or peel needs review.</p>
    `,
  },
];

const daily: Section[] = [
  {
    id: 'daily-tretinoin',
    category: 'daily',
    title: 'Tretinoin — never too late',
    tldr: 'The photoaging RCTs enrolled adults up to 70+, and a 2-year placebo-controlled trial (204 patients) showed continuing clinical and histological gains. Start low over a ceramide cream.',
    evidence: 'strong',
    focus: 'skin',
    sessions: 'Nightly (build up)',
    cost: '€40–120/year',
    bodyHtml: `
      <p>Kang 2005 ran a 2-year randomized, placebo-controlled trial of 0.05% tretinoin emollient cream in 204 adults with moderate-to-severe photodamage: significant improvement in photoaging scores with increased procollagen on histology after long-term use. Systematic reviews and a <a href="https://dpcj.org/index.php/dpc/article/view/5172" rel="noopener nofollow" target="_blank">meta-analysis of the tretinoin RCTs</a> (participants mostly 40–70) confirm consistent improvement in fine wrinkling, mottled pigment and roughness, with retinoid dermatitis the main cost and the 0.02–0.05% strengths delivering most of the benefit. Retinol products <a href="https://jddonline.com/a-randomized-double-blind-split-face-study-comparing-the-efficacy-and-tolerability-of-three-retinol-based-products-vs-three-tretinoin-based-products-in-subjects-with-moderate-to-severe-facial-photodam/" rel="noopener nofollow" target="_blank">approach tretinoin in split-face comparisons</a> but are less potent per unit.</p>
      <p>Postmenopausal skin is drier and more reactive: 0.025% two or three nights a week over a ceramide moisturizer, building up over months; expect 6–12 months for wrinkle change. Neck and hands included.</p>
    `,
  },
  {
    id: 'daily-spf',
    category: 'daily',
    title: 'Daily broad-spectrum sunscreen',
    tldr: 'The Nambour RCT: daily use slowed visible aging and, on long-term follow-up, reduced skin cancers. After 50 it is skin-cancer prevention first, aging second.',
    evidence: 'strong',
    focus: 'skin',
    sessions: 'Every morning',
    cost: '€80–150/year',
    bodyHtml: `
      <p>Daily sunscreen is the intervention with the clearest evidence for both slower photoaging and fewer keratinocyte cancers and melanomas, principally from the Australian Nambour randomized trial and its long-term follow-up. In the 50s the case strengthens: melanoma incidence keeps rising with age, and every pigment or resurfacing treatment below recurs or complicates without photoprotection. SPF 50, mineral if reactive, reapplied when outdoors.</p>
    `,
  },
  {
    id: 'daily-barrier',
    category: 'daily',
    title: 'Barrier repair: ceramides for postmenopausal dryness',
    tldr: 'Postmenopausal skin has fewer, shorter ceramides (absent in women on HT); pseudo-ceramide creams have RCT data for water loss and barrier profile. Comfort, not wrinkles.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: 'Twice daily',
    cost: '€15–40',
    bodyHtml: `
      <p>The <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9755298/" rel="noopener nofollow" target="_blank">Manchester lipid study</a> makes ceramide moisturizers a rational default: postmenopausal stratum corneum has lower ceramide abundance and shorter chains — a leakier barrier — with serum estradiol tracking ceramide levels. A <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11743341/" rel="noopener nofollow" target="_blank">randomized trial of a pseudo-ceramide cream</a> showed absorption into the stratum corneum with reduced water loss and an improved ceramide profile. Expect comfort, tolerance for your retinoid, and glow — no wrinkle outcomes (full grading in our <a href="/ceramides">ceramides guide</a>).</p>
    `,
  },
  {
    id: 'daily-antioxidants',
    category: 'daily',
    title: 'Vitamin C and niacinamide',
    tldr: 'Small vehicle-controlled trials show modest improvements in fine lines and pigmentation over 8–12 weeks. Supporting cast.',
    evidence: 'moderate',
    focus: 'pigment',
    sessions: 'AM / PM',
    cost: '€100–300/year',
    bodyHtml: `
      <p>Topical L-ascorbic acid (10–20%) and niacinamide (2–5%) each have small vehicle-controlled trials showing modest improvement in fine lines and pigmentation over 8–12 weeks — niacinamide's best trial was run in women aged 40–60. Useful under sunscreen and alongside a retinoid; not pillars. Peptides and growth-factor serums, by contrast, rest mostly on open-label industry studies.</p>
    `,
  },
  {
    id: 'daily-pigment',
    category: 'daily',
    title: 'Sun spots: topical lighteners vs light',
    tldr: 'A 41-trial review of solar lentigines: IPL and picosecond lasers clear 68–93%; topical mequinol/tretinoin 53–80%; hydroquinone is prescription-only in Europe.',
    evidence: 'moderate',
    focus: 'pigment',
    sessions: 'Weeks (topical)',
    cost: '€30–100/month',
    bodyHtml: `
      <p>Lentigines and seborrhoeic keratoses multiply after 50. A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11948172/" rel="noopener nofollow" target="_blank">2025 systematic review of 41 trials</a> (3,234 patients, ages 24–92) ranks the options: IPL 75–90% good-to-excellent clearance, picosecond lasers 68–93%, Q-switched 36–77%, topical mequinol/tretinoin 53–80%, cryotherapy 37–71% with the most side effects, TCA peels 12–46%. Hydroquinone remains the reference lightener for melasma-type pigment but is prescription-only in the EU/UK and weaker than a laser for discrete spots; oral tranexamic acid's evidence is in melasma and carries clotting exclusions. For sun spots, light beats cream.</p>
    `,
  },
  {
    id: 'daily-minoxidil',
    category: 'daily',
    title: 'Minoxidil for postmenopausal hair thinning',
    tldr: 'Topical 5% beat 2% and placebo in an RCT; oral 1 mg matched topical 5% at 24 weeks; adding spironolactone or microneedling improved results.',
    evidence: 'strong',
    focus: 'skin',
    sessions: 'Daily, ongoing',
    cost: '€15–40/month',
    bodyHtml: `
      <p>Female pattern hair loss accelerates after menopause. <a href="https://pubmed.ncbi.nlm.nih.gov/15034503/" rel="noopener nofollow" target="_blank">Lucky 2004</a> found topical 5% minoxidil beat 2% and placebo on hair counts and patient ratings; a <a href="https://www.jaad.org/article/S0190-9622(19)32666-0/fulltext" rel="noopener nofollow" target="_blank">24-week RCT</a> found oral 1 mg comparable to topical 5% with more facial hair (27% vs 4%); and a <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9309533/" rel="noopener nofollow" target="_blank">2022 evaluator-blinded RCT</a> found adding spironolactone or microneedling to minoxidil improved outcomes. The mechanism is androgen-independent, so extrapolation to 50–59 is reasonable; expect thickening rather than restoration, and commit for six months before judging.</p>
    `,
  },
  {
    id: 'daily-estriol',
    category: 'daily',
    title: 'Topical estrogen / estriol on the face',
    tldr: 'One 59-woman open-label study and pilots show firmer, less wrinkled skin; no placebo-controlled facial RCT and no approved product in Europe.',
    evidence: 'emerging',
    focus: 'hormones',
    sessions: 'Daily (compounded Rx)',
    cost: '€40–100/month',
    bodyHtml: `
      <p><a href="https://pubmed.ncbi.nlm.nih.gov/8876303/" rel="noopener nofollow" target="_blank">Schmidt 1996</a> applied estradiol or estriol cream to the face of 59 peri- and postmenopausal women for six months and reported better elasticity, reduced wrinkle depth and pore size, and more type III collagen on biopsy — without a placebo arm. A <a href="https://www.jaadreviews.org/article/S2950-1989(25)00103-5/fulltext" rel="noopener nofollow" target="_blank">2025 JAAD Reviews article</a> concludes the evidence is promising but small, uncontrolled or short, with unresolved questions about systemic absorption and long-term breast and endometrial safety. No estrogen facial cream is approved in the EU or UK; estriol creams are compounded, off-label prescriptions. Interesting, unproven, and a conversation for a menopause specialist rather than a clinic counter.</p>
    `,
  },
  {
    id: 'daily-peptides-gf',
    category: 'daily',
    title: 'Peptides, growth factors and "menopause skincare"',
    tldr: 'Open-label industry studies; no RCT with clinical endpoints. Barrier repair and a retinoid do the work these products advertise.',
    evidence: 'emerging',
    focus: 'hype',
    sessions: 'Daily',
    cost: '€60–300/year',
    bodyHtml: `
      <p>The "menopause skincare" shelf sells peptides, growth factors and botanical "phytoestrogens" on mechanism and open-label data; none has a controlled trial with clinical endpoints in postmenopausal skin. What the shelf gets right is the problem — dryness, thinning, dullness — and what solves it is graded above: barrier lipids, a retinoid, sunscreen, and (if indicated for other reasons) systemic hormone therapy. Pay for the actives with trials.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-resurfacing',
    category: 'clinic',
    title: 'Ablative and fractional laser resurfacing',
    tldr: 'The most effective device for etched lines, texture and lentigines — a 1,093-patient review: bigger gains than non-ablative, with more downtime and PIH risk. This decade\'s sweet spot.',
    evidence: 'strong',
    focus: 'skin',
    sessions: '1–3',
    downtime: '5–14 days + weeks pink',
    cost: '€1,500–3,500/session',
    bodyHtml: `
      <p>Etched static lines, textural photodamage and lentigines dominate after 50, and ablative resurfacing (CO₂ or Er:YAG, fully ablative or fractional) is the most effective device for all three. A <a href="https://pubmed.ncbi.nlm.nih.gov/33084193/" rel="noopener nofollow" target="_blank">systematic review of 1,093 patients</a> found ablative lasers give greater improvement than non-ablative at the cost of more downtime, prolonged redness, more post-inflammatory pigmentation and rare scarring; a <a href="https://onlinelibrary.wiley.com/doi/10.1002/lsm.23850?af=R" rel="noopener nofollow" target="_blank">2025 expert consensus</a> frames fractional CO₂ as effective with manageable downtime when settings match skin type. Downtime: 5–7 days of oozing for fractional CO₂, 10–14 for fully ablative, then weeks of pink. Fitzpatrick IV–VI carry materially higher pigment risk and belong with non-ablative or lower-density settings. Often combined with a facelift under one anaesthetic (our <a href="/laser-ipl">laser guide</a> maps the classes).</p>
    `,
  },
  {
    id: 'clinic-ipl',
    category: 'clinic',
    title: 'IPL and pigment lasers for lentigines and redness',
    tldr: 'IPL clears 75–90% of sun spots with >60% maintained at 6 months; picosecond lasers 68–93%. "Gene-expression rejuvenation" claims rest on one small industry study.',
    evidence: 'strong',
    focus: 'pigment',
    sessions: '1–3 + yearly',
    downtime: 'Hours; flaking ~1 wk',
    cost: '€120–400/session',
    bodyHtml: `
      <p>From the <a href="https://pubmed.ncbi.nlm.nih.gov/40145274/" rel="noopener nofollow" target="_blank">41-trial lentigines review</a>: IPL achieved 75–90% good-to-excellent clearance at one month with more than 60% maintained at six, and low pigment complications in lighter skin; picosecond and Q-switched lasers are the precision tools for discrete spots. It is a colour treatment — the best blinded trial found no wrinkle effect — and claims that repeated BBL keeps skin "genetically younger" rest on a single small industry study. Yearly maintenance because sun makes new spots; lighter skin types only.</p>
    `,
  },
  {
    id: 'clinic-toxin',
    category: 'clinic',
    title: 'Botulinum toxin — still works, upper face first',
    tldr: 'Phase-3 subgroup data: responder rates in patients 65+ only 2.7 points below younger patients. The etched-in component needs resurfacing or filler, not more toxin.',
    evidence: 'strong',
    focus: 'skin',
    sessions: '2–3×/year',
    downtime: 'None',
    cost: '€250–450/area',
    bodyHtml: `
      <p>Toxin keeps working after 50 and after 65: a <a href="https://pubmed.ncbi.nlm.nih.gov/37102990/" rel="noopener nofollow" target="_blank">post-hoc analysis of the prabotulinumtoxinA phase-3 programme</a> found responder rates in patients 65+ only 2.7 percentage points lower than in younger patients — with far more severe baseline lines <em>at rest</em> in the older group (46% vs 19%), which is the etched component toxin cannot erase. The <a href="https://pubmed.ncbi.nlm.nih.gov/36087303/" rel="noopener nofollow" target="_blank">SAKURA trials</a> showed &gt;96% reaching none/mild glabellar severity at week 4 in every age subgroup. In the 50s the upper face stays the high-yield zone; lower-face toxin is adjunctive and technique-sensitive, and over-treating the forehead can drop already-heavy brows.</p>
    `,
  },
  {
    id: 'clinic-filler',
    category: 'clinic',
    title: 'HA fillers — structure, and the persistence caution',
    tldr: 'Effective for deflation in trials that enrolled 35–65-year-olds — but MRI finds filler still present 2–15 years later in every patient imaged. Cumulative dose is the 50s risk.',
    evidence: 'strong',
    focus: 'volume',
    sessions: 'Small volumes, reviewed',
    downtime: '2–5 days',
    cost: '€350–600/ml',
    bodyHtml: `
      <p>Fillers address the deflation described above and their pivotal trials enrolled adults roughly 35–65, so the 50s are inside the evidence. What has changed the calculus is persistence: a <a href="https://journals.lww.com/prsgo/fulltext/2024/07000/hyaluronic_acid_filler_longevity_in_the_mid_face_.36.aspx" rel="noopener nofollow" target="_blank">2024 review of 33 MRI studies</a> found hyaluronic acid still detectable in the midface 2–15 years after injection in every patient imaged, including twelve with no injections for over five years — contradicting the "gone in a year" assumption on which annual top-ups are sold. The consequence is cumulative volume and the recognized overfilled face. Rule: deep structural support in small volumes, imaging or honest assessment before adding, hyaluronidase considered before more filler — and surgery once laxity, not deflation, is the main issue (our <a href="/fillers">filler guide</a> has the full picture).</p>
    `,
  },
  {
    id: 'clinic-plla',
    category: 'clinic',
    title: 'Poly-L-lactic acid (Sculptra)',
    tldr: 'Pivotal RCT (233 patients aged 26–73): greater improvement than collagen from months 3–13, maintained to 25 months. Gradual, suits diffuse deflation, small nodule risk.',
    evidence: 'moderate',
    focus: 'volume',
    sessions: '2–3 sessions',
    downtime: '1–3 days',
    cost: '€500–900/vial',
    bodyHtml: `
      <p>The <a href="https://www.jaad.org/article/S0190-9622(09)00962-1/abstract" rel="noopener nofollow" target="_blank">pivotal trial</a> randomized 233 patients aged 26–73 to PLLA or human collagen for nasolabial folds: PLLA gave significantly greater improvement from months 3 to 13 and maintained correction to 25 months after the last treatment — industry-funded, evaluator-blinded, against an obsolete comparator. Its gradual collagen-building effect suits the diffuse temple, cheek and jawline deflation of the 50s better than stacked HA, at the cost of two or three sessions, a small nodule risk, and irreversibility.</p>
    `,
  },
  {
    id: 'clinic-ultherapy',
    category: 'clinic',
    title: 'Microfocused ultrasound (Ultherapy)',
    tldr: '16 studies, mean ages 35–64: investigator-rated improvement in ~90% at 90–180 days, mostly modest; BMI >30 and advanced laxity predict failure. Not a facelift.',
    evidence: 'moderate',
    focus: 'laxity',
    sessions: '1 every 12–18 mo',
    downtime: 'None–mild',
    cost: '€2,000–4,500',
    bodyHtml: `
      <p>A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9861614/" rel="noopener nofollow" target="_blank">systematic review of 16 studies</a> (mean ages 35–64; Sasaki's series 53.5 and 64.4) found investigator-rated improvement in 92% at day 90 and 87% at day 180, patient-rated in 75% — with adverse events beyond transient swelling in about 2% and pain ~3.8/10; a <a href="https://academic.oup.com/asj/article/45/3/NP86/7900203" rel="noopener nofollow" target="_blank">2025 meta-analysis</a> concurs. Studies excluded excessive laxity and BMI over 30, and lower BMI predicted better outcomes. Honest framing for the 50s: measurable but modest lifting in mild-to-moderate laxity; less predictable in heavier faces or established jowls, where surgery is the evidence-backed answer.</p>
    `,
  },
  {
    id: 'clinic-rf-microneedling',
    category: 'clinic',
    title: 'RF microneedling',
    tldr: 'A 41-study review (15 RCTs): better wrinkle scales and dermal density with rare pigment problems — the darker-skin-safe option; one session ≈ 37% of a facelift\'s laxity effect.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: '3, 4–6 wks apart',
    downtime: '1–5 days',
    cost: '€500–1,200/session',
    bodyHtml: `
      <p>A <a href="https://link.springer.com/article/10.1007/s00266-026-05834-y" rel="noopener nofollow" target="_blank">2026 systematic review</a> (41 studies, 15 RCTs) found RF microneedling improved wrinkle scales, dermal density and submental fullness with mainly transient redness and infrequent, self-limited pigmentation — one reason it is favoured where ablative lasers are risky. The useful anchor: a <a href="https://derma.jmir.org/2026/1/e78385" rel="noopener nofollow" target="_blank">scoping review</a> quantified a single session at roughly 37% of a facelift's laxity improvement. Textural more than lifting; conservative depths over thin-fat zones (our <a href="/microneedling">microneedling guide</a> covers the fat-loss signal).</p>
    `,
  },
  {
    id: 'clinic-peels',
    category: 'clinic',
    title: 'Medium and deep chemical peels',
    tldr: 'Phenol–croton oil peels remain among the most effective single treatments for etched perioral and periorbital lines — with cardiac monitoring, weeks of redness and hypopigmentation risk above skin type III.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: '1 (deep) / 1–3 (medium)',
    downtime: '7 days (medium) / 10–14 + weeks (deep)',
    cost: '€300–800 / €2,000–5,000',
    bodyHtml: `
      <p>Medium-depth TCA handles lentigines and fine lines with a week of peeling. For the deeply etched perioral and periorbital lines of the mid-50s onward, phenol–croton oil in Hetter's graded formulas is <a href="https://pubmed.ncbi.nlm.nih.gov/30550827/" rel="noopener nofollow" target="_blank">among the most effective single interventions</a> available — with the modified formula matching the classic Baker–Gordon peel with fewer side effects in split-face comparison. The costs are surgical-grade: prolonged redness, permanent hypopigmentation risk above skin type III, and arrhythmia from systemic phenol if applied too fast, so monitoring and staged application are mandatory. Superficial peels, by contrast, are a glow strategy, not an aging one (our <a href="/chemical-peels">peel guide</a> grades every depth).</p>
    `,
  },
  {
    id: 'clinic-boosters-pn',
    category: 'clinic',
    title: 'Skin boosters and polynucleotides',
    tldr: 'Nine low-to-moderate-quality studies (219 patients); the one split-face RCT found no difference from HA filler. Hydration, not structure.',
    evidence: 'emerging',
    focus: 'hype',
    sessions: '2–3',
    downtime: '1–3 days',
    cost: '€300–1,000/session',
    bodyHtml: `
      <p>Polynucleotide injectables — the current European fashion — rest on a <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11845969/" rel="noopener nofollow" target="_blank">systematic review of nine studies totalling 219 patients</a>, in which the only split-face RCT (27 subjects) found no difference from hyaluronic-acid filler around the eyes; real-world series report high satisfaction. Non-crosslinked HA "skin boosters" have similar small-trial evidence for hydration and fine lines. Glow, not lift — graded in full in our <a href="/regenerative-aesthetics">regenerative-aesthetics guide</a>.</p>
    `,
  },
  {
    id: 'clinic-threads',
    category: 'clinic',
    title: 'Thread lifts',
    tldr: 'The best independent series: effect gone at 12 months, 34% complication rate — and threads make a later facelift harder. The intervention most likely to disappoint at 50+.',
    evidence: 'limited',
    focus: 'hype',
    sessions: '—',
    cost: '€1,500–3,500',
    bodyHtml: `
      <p><a href="https://pubmed.ncbi.nlm.nih.gov/29474522/" rel="noopener nofollow" target="_blank">Bertossi 2019</a> followed thread-lift patients and found improvement at one month, visible decline by six, no residual effect at twelve, and a 34% complication rate (dimpling, extrusion, bruising, migration) — recommending threads only for patients who cannot have surgery. A <a href="https://link.springer.com/article/10.1007/s00266-025-05091-5" rel="noopener nofollow" target="_blank">2025 paper</a> documents the surgical difficulty of a facelift after prior threads. For the jowls and neck laxity of the 50s, save the money toward surgery or spend it on what toxin, resurfacing and biostimulators do well.</p>
    `,
  },
];

const surgery: Section[] = [
  {
    id: 'surg-blepharoplasty',
    category: 'surgery',
    title: 'Blepharoplasty (upper and lower)',
    tldr: 'The most common facial operation of the decade, with RCT-level technique data and consistently high satisfaction regardless of severity; results last a decade or more.',
    evidence: 'strong',
    focus: 'laxity',
    sessions: '1 (10+ yrs)',
    downtime: '7–10 days',
    cost: '€2,500–9,000',
    bodyHtml: `
      <p>Upper blepharoplasty for excess lid skin has unusually good outcome data: a <a href="https://academic.oup.com/asj/article/45/6/554/8098106" rel="noopener nofollow" target="_blank">2025 meta-analysis of randomized trials</a> compares techniques on dry eye, irritation and satisfaction; a <a href="https://pubmed.ncbi.nlm.nih.gov/37430010/" rel="noopener nofollow" target="_blank">systematic review</a> covers techniques and results; prospective patient-reported studies show <a href="https://pubmed.ncbi.nlm.nih.gov/39037480/" rel="noopener nofollow" target="_blank">high satisfaction regardless of baseline severity</a> and improved quality of life. Skin excision does not "recur" quickly, so results typically last ten years or more — but brow descent can re-hood the lid, so brow position is assessed first. Lower blepharoplasty (fat repositioning rather than removal) treats bags and the tear trough with a higher complication rate (lid retraction, ectropion). Upper €2,500–5,000; upper plus lower €5,000–9,000.</p>
    `,
  },
  {
    id: 'surg-facelift',
    category: 'surgery',
    title: 'Facelift (SMAS / deep plane) and neck lift',
    tldr: 'No RCTs, but large consistent series: satisfaction ~81/100, 5–6 years younger on AI rating, 0.85% temporary nerve weakness, ~1.6% hematoma; durability "8–12 years" is consensus, not measurement.',
    evidence: 'moderate',
    focus: 'laxity',
    sessions: '1 (8–12 yrs)',
    downtime: '2–3 wks + months swelling',
    cost: '€12,000–30,000',
    bodyHtml: `
      <p>Facelift evidence is case series and validated patient-reported outcomes rather than trials — but it is consistent. <a href="https://pubmed.ncbi.nlm.nih.gov/30488241/" rel="noopener nofollow" target="_blank">Prospective multicentre FACE-Q data</a> show high satisfaction with appearance and large gains in social confidence sustained at 12 months; an <a href="https://pubmed.ncbi.nlm.nih.gov/33217756/" rel="noopener nofollow" target="_blank">AI-rated study</a> estimated SMAS techniques reduce apparent age by 5.4–5.9 years versus 3.0 for skin-only lifts, with fat grafting adding ~2 years; a <a href="https://pubmed.ncbi.nlm.nih.gov/30768122/" rel="noopener nofollow" target="_blank">complication meta-analysis</a> puts temporary facial-nerve weakness at 0.85%, permanent injury very rare, and major hematoma ~1.6%. Deep-plane claims of longer durability than SMAS are surgeon-reported, not comparative data; the "8–12 years" figure is consensus.</p>
      <p>Recovery is 2–3 weeks socially with months of residual swelling. Choose a surgeon on specialist registration (plastic, or facial-plastic/oculoplastic), society membership, hospital privileges, and their own hematoma and nerve-injury figures against the pooled rates. Importantly, a 2026 chart review found prior injectables and energy devices did not raise surgical complication rates — earlier maintenance doesn't close the surgical door; threads can.</p>
    `,
  },
  {
    id: 'surg-fat-grafting',
    category: 'surgery',
    title: 'Fat grafting',
    tldr: 'Meta-analysed retention is 47% (range 26–83%) and unpredictable per patient — usually combined with a facelift to restore the deep compartments.',
    evidence: 'moderate',
    focus: 'volume',
    sessions: '1 (with facelift)',
    downtime: '2–3 wks',
    cost: '€3,000–8,000',
    bodyHtml: `
      <p>Your own fat, transferred to the deflated deep compartments, is the surgical answer to the volume half of the problem — with a caveat baked into the biology: pooled facial fat-graft retention is <a href="https://pubmed.ncbi.nlm.nih.gov/31940073/" rel="noopener nofollow" target="_blank">47% in meta-analysis</a> (26–83% across series) and unpredictable for any individual, so slight over-correction and occasional repeat are the norm. Stromal-vascular-fraction enrichment raised retention in some randomized comparisons but is not standard. In the 50s it is usually done with a facelift, where it added ~2 years of apparent age reduction in the AI-rated study.</p>
    `,
  },
  {
    id: 'surg-brow-lift',
    category: 'surgery',
    title: 'Brow lift',
    tldr: 'Endoscopic and temporal lifts correct the lateral brow descent that toxin and blepharoplasty cannot; evidence is case series.',
    evidence: 'moderate',
    focus: 'laxity',
    sessions: '1',
    downtime: '1–2 wks',
    cost: '€4,000–9,000',
    bodyHtml: `
      <p>Heavy lateral brows are a frequent cause of "tired eyes" in the 50s and a frequent reason upper blepharoplasty disappoints: remove skin from a lid under a descended brow and the hooding returns. Endoscopic and temporal brow lifts reposition the brow itself; the evidence is consistent case series rather than trials, and the assessment (brow position first, lid second) matters more than the technique brand.</p>
    `,
  },
];

const health: Section[] = [
  {
    id: 'health-mht',
    category: 'health',
    title: 'Menopausal hormone therapy — for symptoms and bone, under 60',
    tldr: 'The most effective treatment for hot flashes and bone loss; benefits outweigh risks for symptomatic women under 60 or within 10 years of menopause. Skin is not the indication.',
    evidence: 'strong',
    focus: 'hormones',
    sessions: 'Specialist review',
    cost: '€100–300 consult',
    bodyHtml: `
      <p>The <a href="https://journals.lww.com/menopausejournal/fulltext/2022/07000/the_2022_hormone_therapy_position_statement_of_the.4.aspx" rel="noopener nofollow" target="_blank">2022 Menopause Society position statement</a>: hormone therapy is the most effective treatment for vasomotor symptoms and genitourinary syndrome and prevents bone loss and fracture; for symptomatic women under 60 or within 10 years of menopause without contraindications, benefits generally outweigh risks, and starting later carries a less favourable ratio. The <a href="https://pubmed.ncbi.nlm.nih.gov/38691368/" rel="noopener nofollow" target="_blank">2024 JAMA review of the WHI trials</a> reiterates the early-menopause advantage and individualized decisions; in WHI, estrogen-plus-medroxyprogesterone carried a small absolute breast-cancer increase while estrogen alone did not — and modern European regimens are pharmacologically different. Everyone in the 50s is at or near the window's edge; the consultation belongs early in the decade.</p>
    `,
  },
  {
    id: 'health-mht-skin',
    category: 'health',
    title: 'What hormone therapy does for skin',
    tldr: 'Started around menopause it preserves skin thickness and collagen on biopsy (Maheux: ~30% thicker dermis) — but the one large facial-wrinkle RCT was negative. Prevention, not reversal.',
    evidence: 'moderate',
    focus: 'hormones',
    bodyHtml: `
      <p>Sixty postmenopausal nuns randomized to a year of oral estrogen or placebo grew dermis about 30% thicker on thigh biopsy (Maheux 1994, described in <a href="https://www.tandfonline.com/doi/full/10.4161/derm.23872" rel="noopener nofollow" target="_blank">"Estrogens and aging skin"</a>); Brincat's cohorts showed women on replacement did not lose collagen the way untreated women did. The Menopause Society rates skin thickness, elasticity and collagen benefits as Level II evidence when HT is given at menopause. Against that: <a href="https://www.jaad.org/article/S0190-9622(08)00595-1/abstract" rel="noopener nofollow" target="_blank">Phillips 2008</a>, the largest trial to measure the face, found no meaningful wrinkle benefit over placebo, and no guideline recommends HT for skin. The honest reading: it preserves; it does not reverse; take it for the right reasons and count the skin as a bonus.</p>
    `,
  },
  {
    id: 'health-formulation',
    category: 'health',
    title: 'Formulation matters: transdermal estradiol, micronized progesterone',
    tldr: 'Oral — not transdermal — estrogen raises clot risk; micronized progesterone was not linked to breast cancer or clots for ~5 years in the E3N cohort.',
    evidence: 'strong',
    focus: 'hormones',
    bodyHtml: `
      <p>Two formulation choices carry most of the safety difference. Route: the ESTHER and E3N studies found oral, but not transdermal, estrogen <a href="https://www.ahajournals.org/doi/pdf/10.1161/circulationaha.106.642280" rel="noopener nofollow" target="_blank">raised venous thromboembolism risk</a>; a <a href="https://pubmed.ncbi.nlm.nih.gov/21775912/" rel="noopener nofollow" target="_blank">US claims analysis</a> and <a href="https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2013/04/postmenopausal-estrogen-therapy-route-of-administration-and-risk-of-venous-thromboembolism" rel="noopener nofollow" target="_blank">ACOG</a> agree, endorsing transdermal routes for higher-risk women. Progestogen: in E3N (78,353 women), estrogen with micronized progesterone or dydrogesterone was <a href="https://thebms.org.uk/wp-content/uploads/2020/09/HRT_and_breast_cancer_statement_in_response_to_EMA_PRAC_recommendations_10.9.20.pdf" rel="noopener nofollow" target="_blank">not associated with increased breast-cancer risk for up to about five years</a>, and micronized progesterone was not associated with clots. These regulated products are themselves "body-identical" — the distinction that matters is regulated versus compounded.</p>
    `,
  },
  {
    id: 'health-liftmor',
    category: 'health',
    title: 'Heavy resistance and impact training (LIFTMOR)',
    tldr: 'An RCT in postmenopausal women with low bone density: 30 minutes twice a week of heavy lifting and jumping improved spine density ~4 points vs control, with function gains and one minor adverse event.',
    evidence: 'strong',
    focus: 'bone',
    sessions: '2×/wk, 30 min',
    cost: '€300–1,500/year',
    bodyHtml: `
      <p>The trial that overturned "don't lift heavy": <a href="https://pubmed.ncbi.nlm.nih.gov/28975661/" rel="noopener nofollow" target="_blank">LIFTMOR</a> randomized 101 postmenopausal women with low bone mass to eight months of supervised high-intensity resistance and impact training (5×5 at over 85% of max — deadlift, squat, overhead press, plus jumping chin-ups) or a home low-intensity programme. Lumbar-spine density improved about four percentage points relative to control, with better femoral-neck outcomes, stronger back extensors, taller stature and faster timed up-and-go — and a single minor adverse event. A <a href="https://link.springer.com/article/10.1007/s11914-025-00912-7" rel="noopener nofollow" target="_blank">2025 review</a> summarizes the follow-on trials. Creatine at 5 g/day adds small lean-mass and strength gains with training in <a href="https://pubmed.ncbi.nlm.nih.gov/42141930/" rel="noopener nofollow" target="_blank">postmenopausal meta-analysis</a>; it does not raise bone density on its own.</p>
    `,
  },
  {
    id: 'health-dexa',
    category: 'health',
    title: 'DEXA — at 65, or now with any risk factor',
    tldr: 'USPSTF 2025 Grade B; the fastest bone loss of your life is the 1–2 years either side of the final period. Vitamin D beyond deficiency correction: no fracture benefit.',
    evidence: 'strong',
    focus: 'bone',
    cost: '€50–150',
    bodyHtml: `
      <p><a href="https://jamanetwork.com/journals/jama/fullarticle/2829238" rel="noopener nofollow" target="_blank">USPSTF 2025</a> (Grade B): screen all women at 65, and younger postmenopausal women at increased risk — low weight, parental hip fracture, smoking, alcohol, early menopause, glucocorticoids. Given SWAN's curve, a baseline scan around the final period is reasonable with any risk factor. Vitamin D and calcium have no fracture benefit in non-deficient community-dwelling women: correct deficiency, don't megadose. Hormone therapy is the most effective bone-preserving agent in early postmenopause; heavy training (above) is the one with the RCT you can join at a gym.</p>
    `,
  },
  {
    id: 'health-lipids',
    category: 'health',
    title: 'Lipids, Lp(a), ApoB and calcium scoring',
    tldr: 'LDL rises with menopause independent of age; annual lipids with ApoB, Lp(a) once, HbA1c, and a coronary-calcium score for intermediate risk in the late 50s.',
    evidence: 'strong',
    focus: 'body',
    cost: '€100–300/year',
    bodyHtml: `
      <p>SWAN shows LDL cholesterol rising across the transition <a href="https://www.swanstudy.org/womens-health-info/cardiovascular-risk-and-heart-health-in-women-during-and-after-menopause/" rel="noopener nofollow" target="_blank">attributable to menopause rather than age</a>, on top of visceral-fat gain; a <a href="https://www.atherosclerosis-journal.com/article/S0021-9150(25)00111-X/fulltext" rel="noopener nofollow" target="_blank">2025 review</a> covers sex-specific lipid metabolism. The rational panel: full lipids with ApoB annually, Lp(a) once (genetically fixed), HbA1c, waist circumference and blood pressure — and a coronary-artery-calcium score for intermediate risk in the late 50s to settle the statin question. Cardiorespiratory fitness and alcohol reduction carry the strongest mortality associations of anything on this page (our <a href="/longevity-clinics">longevity-clinic guide</a> grades the tests).</p>
    `,
  },
  {
    id: 'health-glp1',
    category: 'health',
    title: 'GLP-1 weight loss and the 50s face',
    tldr: 'Rapid loss of 15–20% of body weight deflates the deep fat compartments and exposes laxity — compounding what menopause already did. Slow the loss; defer filler until stable.',
    evidence: 'moderate',
    focus: 'volume',
    bodyHtml: `
      <p>A <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12232544/" rel="noopener nofollow" target="_blank">systematic review of "Ozempic face"</a> finds the phenomenon real but descriptive: rapid large weight loss deflates the structural deep fat compartments and exposes skin laxity — temples, cheeks and tear troughs most visibly — and in women over 50 it stacks on the baseline losses above. Proposed direct drug effects on fibroblasts are hypotheses. The practical advice is robust: lose slowly, resistance-train and hit protein during loss, and defer any structural filler until weight has been stable for six months.</p>
    `,
  },
  {
    id: 'health-pellets',
    category: 'health',
    title: 'Compounded "bioidentical" hormones and pellets',
    tldr: 'No efficacy or safety trials; supraphysiological levels and endometrial-cancer reports; NASEM, the Endocrine Society, ACOG and The Menopause Society all advise against routine use.',
    evidence: 'limited',
    focus: 'hype',
    bodyHtml: `
      <p>The <a href="https://www.nationalacademies.org/read/25791/chapter/10" rel="noopener nofollow" target="_blank">2020 National Academies report</a> found insufficient evidence of safety or effectiveness to justify compounded bioidentical hormone therapy except for documented allergy or dose needs; the <a href="https://www.endocrine.org/advocacy/position-statements/compounded-bioidentical-hormone-therapy" rel="noopener nofollow" target="_blank">Endocrine Society</a> highlights supraphysiological blood levels and endometrial-cancer reports with pellets; <a href="https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2023/11/compounded-bioidentical-menopausal-hormone-therapy" rel="noopener nofollow" target="_blank">ACOG</a> says compounded therapy should not be prescribed routinely. Regulated transdermal estradiol and micronized progesterone are already body-identical — the marketing distinction is a false one.</p>
    `,
  },
  {
    id: 'health-testosterone',
    category: 'health',
    title: 'Testosterone for "vitality"',
    tldr: 'The global consensus: the only evidence-based indication in women is low sexual desire after menopause — nothing for skin, muscle, bone, mood or cognition.',
    evidence: 'limited',
    focus: 'hype',
    bodyHtml: `
      <p>The <a href="https://academic.oup.com/jcem/article/104/10/4660/5556103" rel="noopener nofollow" target="_blank">2019 Global Consensus Position Statement</a> — endorsed by the International Menopause Society, the Endocrine Society and others — concludes that the only evidence-based indication for testosterone in women is hypoactive sexual desire disorder after menopause, with a moderate effect, at doses keeping levels in the female physiological range. There is no evidence supporting it for skin, body composition, bone, mood or cognition — precisely the menu "vitality" clinics sell it for.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety',
    category: 'safety',
    title: 'Over-treatment risks specific to the 50s',
    tldr: 'The overfilled face, over-resurfacing in darker skin, threads for real laxity, hormone "optimization" clinics, and chasing volume mid-weight-loss.',
    bodyHtml: `
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>The overfilled face.</strong> MRI shows HA persisting for years; repeated "maintenance" syringes stack. Palpate or image before adding, prefer deep supraperiosteal support in small volumes, and consider hyaluronidase before more filler.</li>
        <li><strong>Over-resurfacing in darker skin.</strong> Ablative lasers and phenol peels carry pigmentation and hypopigmentation risk rising with Fitzpatrick type; RF microneedling and non-ablative fractional devices are the safer routes.</li>
        <li><strong>Thread lifts for real laxity.</strong> Effect gone by a year, a 34% complication rate, and a harder facelift afterwards.</li>
        <li><strong>"Hormone optimization" clinics.</strong> Compounded pellets and supraphysiological testosterone sit outside the evidence with documented harms; guideline HT via a menopause specialist is the evidence-based route.</li>
        <li><strong>IV drips, NAD+, exosomes, stem-cell facials.</strong> No controlled evidence for aging outcomes — see our <a href="/supplements">supplements</a> and <a href="/regenerative-aesthetics">regenerative-aesthetics</a> guides.</li>
        <li><strong>Chasing volume during GLP-1 weight loss</strong> before weight stabilizes.</li>
        <li><strong>Repeated non-surgical spending that delays a definitive result</strong> once jowls and neck laxity dominate.</li>
      </ul>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-hrt-reverse',
    category: 'faq',
    title: 'Does HRT reverse skin aging?',
    tldr: 'No — it preserves thickness and collagen if started at menopause; the facial-wrinkle RCT was negative.',
    bodyHtml: `
      <p>Started around menopause, systemic estrogen preserves skin thickness and collagen (Maheux: ~30% thicker dermis on thigh biopsy; Brincat's cohorts), and The Menopause Society rates the skin benefit Level II — but the only large trial measuring facial wrinkles was negative, and no guideline recommends HT for skin. Take it for symptoms or bone if you qualify; regard skin as a bonus.</p>
    `,
  },
  {
    id: 'faq-facelift-or-ultherapy',
    category: 'faq',
    title: 'Facelift or Ultherapy?',
    tldr: 'Established jowls: surgery. Early laxity or no-surgery preference: ultrasound.',
    bodyHtml: `
      <p>Different questions. Microfocused ultrasound improves mild-to-moderate laxity in ~90% on investigator rating, but modestly, best under BMI 30, without repositioning deep tissue. A SMAS or deep-plane facelift reduces apparent age by 5–6 years on AI rating with 0.85% temporary nerve weakness and ~1.6% hematoma. In the 50s with established jowls, surgery is the evidence-backed answer; ultrasound suits early laxity or people who will not have surgery.</p>
    `,
  },
  {
    id: 'faq-tretinoin-55',
    category: 'faq',
    title: 'Is 55 too late for tretinoin?',
    tldr: 'No — the trials enrolled into the 70s and kept improving over two years.',
    bodyHtml: `
      <p>The pivotal trials enrolled patients up to 70-plus, and the 2-year Kang trial (204 patients) showed continuing histological and clinical gains. Start low (0.025%), buffer with a ceramide moisturizer, and expect 6–12 months for wrinkle change.</p>
    `,
  },
  {
    id: 'faq-face-changed',
    category: 'faq',
    title: 'Why did my face change so fast around menopause?',
    tldr: 'Three gradual processes converged: collagen, bone, deep fat — plus broken sleep.',
    bodyHtml: `
      <p>Skin collagen falls fastest in the first postmenopausal years, the facial skeleton resorbs at the orbit, maxilla and prejowl mandible, and deep fat compartments deflate while superficial fat slides down. Add night-sweat-fragmented sleep and, for some, rapid weight loss, and the shift looks sudden even though each process is gradual.</p>
    `,
  },
  {
    id: 'faq-fillers-55',
    category: 'faq',
    title: 'Can I still use fillers at 55?',
    tldr: 'Yes, for deflation — in small structural volumes, knowing they persist for years.',
    bodyHtml: `
      <p>Fillers are effective for deflation and their trials enrolled 35–65-year-olds — but MRI shows hyaluronic acid persisting 2–15 years, so "annual top-ups" accumulate. Aim for deep structural support in small volumes, review honestly before adding, and prefer surgery once laxity rather than deflation is the main issue.</p>
    `,
  },
  {
    id: 'faq-pellets',
    category: 'faq',
    title: 'Are "bioidentical" pellets safer than regular HRT?',
    tldr: 'No — regulated estradiol and progesterone are already body-identical; pellets have no trials and documented harms.',
    bodyHtml: `
      <p>Regulated transdermal estradiol and micronized progesterone are body-identical; compounded pellets have no efficacy or safety trials, produce supraphysiological levels, and have been linked to endometrial-cancer reports. NASEM, the Endocrine Society, ACOG and The Menopause Society all advise against routine use.</p>
    `,
  },
  {
    id: 'faq-dexa-52',
    category: 'faq',
    title: 'Do I need a DEXA scan at 52?',
    tldr: 'With any risk factor, yes — the fastest bone loss of your life is happening now.',
    bodyHtml: `
      <p>USPSTF 2025 supports screening before 65 with risk factors (low weight, parental hip fracture, smoking, alcohol, early menopause, steroids), and SWAN shows the steepest bone loss in the one to two years either side of the final period. Heavy resistance training (LIFTMOR) and, if eligible, hormone therapy are the interventions with trial evidence.</p>
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
    intro: 'What the estrogen cliff actually does, and why single-layer treatments disappoint.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'The plan',
    intro: 'The rational routine by budget, and the screening schedule that outranks all of it.',
    sections: context,
  },
  {
    id: 'daily',
    title: 'Daily care, graded',
    intro: 'Never too late for the retinoid; barrier repair and light for pigment move up the list.',
    sections: daily,
  },
  {
    id: 'clinic',
    title: 'In-office treatments',
    intro: 'The resurfacing decade — and the decade where fillers need a cumulative-dose rule.',
    sections: clinic,
  },
  {
    id: 'surgery',
    title: 'Surgery',
    intro: 'When it beats repeated devices, and what the outcome data actually show.',
    sections: surgery,
  },
  {
    id: 'health',
    title: 'Hormones, bone & the body',
    intro: 'The systemic decisions of the decade — hormone therapy done properly, bone, lipids, and the menu to refuse.',
    sections: health,
  },
  {
    id: 'safety',
    title: 'Over-treatment risks',
    intro: 'What to refuse at 50+.',
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
  volume: 'Volume',
  laxity: 'Laxity',
  pigment: 'Pigment',
  hormones: 'Hormones',
  bone: 'Bone',
  body: 'Body',
  hype: 'Hype check',
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
