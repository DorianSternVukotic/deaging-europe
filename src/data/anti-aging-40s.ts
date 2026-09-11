/**
 * Anti-aging in your 40s — single source of truth (decade guide).
 *
 * Consumed by /anti-aging-40s. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank". Editorial spine: the 40s are governed by the menopause
 * transition, not the birthday — deflation, bone, sleep and skin all bend at
 * the final menstrual period, and this is the decade where in-office
 * treatments have their best age-matched evidence (and their overfill risk).
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'skin' | 'volume' | 'laxity' | 'pigment' | 'hormones' | 'body' | 'hype' | 'general';

export type SectionCategory = 'concept' | 'context' | 'daily' | 'clinic' | 'health' | 'safety' | 'faq';

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
  'In the 40s the menopause transition, not the birthday, runs the show: fat gain doubles, lean mass and bone start falling about two years before the final period, and skin collagen loss begins inside the transition — for many women, from the late 40s.',
  'Tretinoin has its best age-matched evidence here: eight vehicle-controlled RCTs enrolling adults 29–76, including two trials of 0.02% cream in 43–70-year-olds. Low dose, every night, for years.',
  'This is the decade where in-office treatments earn their keep — toxin for lines that now stay at rest, small-volume midface filler backed by 2-year data, and Ultherapy whose pivotal studies had mean ages of 44 and 49.',
  'Hormone therapy is the most effective treatment for hot flashes and bone loss for women under 60 — but the one large trial measuring facial wrinkles was negative, and no guideline lists skin as an indication. Take it for symptoms; count skin as a bonus.',
  'The 40s failure modes are cumulative: filler "top-ups" on a product that persists for years, RF microneedling over fat pads that are already deflating, and "hormone optimization" instead of guideline care.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-changes',
    category: 'concept',
    title: 'What actually changes in your 40s',
    tldr: 'Perimenopause begins for most women in the mid-to-late 40s: estrogen swings, fat gain doubles, lean mass and bone start falling, deep fat deflates, and the facial skeleton recedes where fillers go.',
    bodyHtml: `
      <p>The most useful fact about the 40s is that the body keeps time from the <em>final menstrual period</em>, not the birthday. In the SWAN cohort, body composition, bone and symptoms all bend at fixed points relative to that date: about two years before it, the rate of fat gain <a href="https://insight.jci.org/articles/view/124865" rel="noopener nofollow" target="_blank">doubles and lean mass starts to decline</a>, with fat redistributing to the abdomen; bone loss <a href="https://pubmed.ncbi.nlm.nih.gov/21976317/" rel="noopener nofollow" target="_blank">begins about a year before</a> and runs at ~2% a year for three years. With a median final period around 51, that window opens at ~48 — inside this decade. Estrogen fluctuates wildly before it falls, which is why dryness and new acne, hair shedding and broken sleep can arrive together (<a href="https://www.tandfonline.com/doi/full/10.1080/13697137.2022.2050206" rel="noopener nofollow" target="_blank">Climacteric review</a>).</p>
      <p>Structurally, three things happen under the skin. Deep fat pads deflate and superficial fat descends — midface flattening, early jowls, deepening nasolabial folds. The skeleton recedes in predictable places: CT studies show the <a href="https://www.sciencedirect.com/science/article/abs/pii/S1090820X08000824" rel="noopener nofollow" target="_blank">inferolateral orbital rim recedes by middle age</a> (why tear-trough shadows appear before upper-lid changes), the pyriform aperture beside the nose enlarges, and a <a href="https://pubmed.ncbi.nlm.nih.gov/20871486/" rel="noopener nofollow" target="_blank">prejowl notch develops in the mandible</a>. And dermal collagen loss — the famous "30% in the first five postmenopausal years" — begins during the transition, not at 51.</p>
      <p>Also in the file: a quarter of women have detectable pattern hair loss by 49 (the 40s are a second onset peak); poor sleepers score worse on intrinsic-aging scales; and in a 3,267-woman survey, eight or more drinks a week tracked with more upper-face lines and midface volume loss — observational, but on-theme for a decade of disrupted sleep.</p>
    `,
  },
  {
    id: 'the-priorities',
    category: 'concept',
    title: 'The priority order for this decade',
    tldr: 'Retinoid and SPF first; then toxin for resting lines; then a menopause specialist when cycles change; then — only for a deficit you can point to — small-volume filler or a biostimulator.',
    bodyHtml: `
      <ol class="list-decimal pl-5 space-y-2">
        <li><strong>The topical base:</strong> tretinoin at night, SPF every morning, a barrier-repair moisturizer as perimenopausal dryness arrives. Cheapest, best-evidenced, and the foundation every procedure below builds on.</li>
        <li><strong>Toxin for lines that now stay at rest</strong> — treating the muscle before the line etches deeper is the one genuinely "preventive" use with trial-grade backing.</li>
        <li><strong>A menopause consultation when cycles change</strong> or symptoms begin — because the favourable window for hormone therapy (under 60, within 10 years of menopause) is <em>now</em> and closes with time.</li>
        <li><strong>Pigment and texture:</strong> IPL for the lentigines that first show in this decade; a non-ablative fractional course for texture.</li>
        <li><strong>Volume, conservatively:</strong> 1–2 ml of hyaluronic acid at the midface/orbital rim, or a poly-L-lactic-acid series — for a deficit you can see, on imaging-aware intervals, never both in one year.</li>
        <li><strong>Laxity, honestly:</strong> microfocused ultrasound if laxity is early and BMI ≤ 25 — expecting "mild" improvement, which is what the trials show.</li>
        <li><strong>The body:</strong> resistance training two or three times a week and protein around 1.2 g/kg — the interventions with the deepest evidence for what the transition takes.</li>
      </ol>
    `,
  },
];

const context: Section[] = [
  {
    id: 'routine-and-budget',
    category: 'context',
    title: 'The rational 40s routine, by budget',
    tldr: 'Foundation ~€300–900/yr; add toxin and a menopause consultation at ~€1,500–4,000; alternate filler or PLLA with an occasional Ultherapy at ~€5,000–12,000. Sequence, don\'t stack.',
    bodyHtml: `
      <p><strong>Foundation (≈€300–900/year):</strong> cleanser, optional vitamin C, moisturizer and SPF 30–50 every morning; prescription tretinoin 0.02–0.05% nightly (start two or three times a week); a niacinamide or ceramide moisturizer if the barrier is reactive; one full-skin dermatology check a year; Lp(a) once, lipids/ApoB, HbA1c and thyroid annually or biennially; resistance training two or three times a week.</p>
      <p><strong>Core (≈€1,500–4,000/year):</strong> foundation plus botulinum toxin to glabella, forehead and crow's feet two or three times a year; one menopause-specialist consultation when cycles change; a baseline DEXA at the final period or in the late 40s with risk factors; an IPL course if photodamage is the main complaint.</p>
      <p><strong>Comprehensive (≈€5,000–12,000/year):</strong> core plus, in <em>alternate</em> years, either 1–2 ml of HA to the midface and rim or a poly-L-lactic-acid series, plus one microfocused-ultrasound session every 12–24 months if laxity is early. Nothing in this tier has evidence that it stacks — sequence, don't combine.</p>
      <p><strong>Not at any budget:</strong> thread lifts, "liquid facelift" packages, RF microneedling over the malar and periorbital fat, compounded hormone "optimization", IV drips. Prices are indicative Western-European estimates.</p>
    `,
  },
  {
    id: 'what-not-to-do',
    category: 'context',
    title: 'What not to do in your 40s',
    tldr: 'Filler on a calendar, chasing every static line, energy devices over deflating fat, "optimized" hormones, epigenetic-age marketing.',
    bodyHtml: `
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Filler "maintenance" every six months</strong> for a product with 24-month trial data. Hyaluronic acid does not reliably disappear on the label timeline; cumulative volume produces the recognized <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13051189/" rel="noopener nofollow" target="_blank">facial overfilled syndrome</a> — pillow cheeks, sunset eyes, a paradoxically older face — and both patient and injector stop seeing it. Track lifetime midface volume in your own record.</li>
        <li><strong>Chasing every line.</strong> Toxin and filler have RCT evidence for specific zones, not for "a smooth face"; static lines in the 40s respond to retinoids, resurfacing and time.</li>
        <li><strong>RF microneedling over the midface.</strong> The FDA has flagged periorbital and malar fat loss after these devices — in the decade defined by fat-pad deflation, a poor trade.</li>
        <li><strong>"Hormone optimization"</strong> — compounded pellets, testosterone for everything, "optimal" serum targets — has no outcome trials; guideline hormone therapy via a certified menopause specialist does.</li>
        <li><strong>IV drips and biological-age tests</strong> — no controlled outcome evidence; our <a href="/longevity-clinics">longevity-clinic guide</a> has the accounting.</li>
      </ul>
    `,
  },
];

const daily: Section[] = [
  {
    id: 'daily-tretinoin',
    category: 'daily',
    title: 'Tretinoin — the best age-matched evidence you\'ll find',
    tldr: 'Eight vehicle-controlled RCTs (1,361 people, ages 29–76) including two trials of 0.02% cream in 43–70-year-olds: fine and coarse wrinkles both improve. Low dose, nightly, for years.',
    evidence: 'strong',
    focus: 'skin',
    sessions: 'Nightly',
    cost: '€40–120/year',
    bodyHtml: `
      <p>The <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/" rel="noopener nofollow" target="_blank">2025 meta-analysis</a> pools eight RCTs, 16 weeks to 2 years: fine wrinkles improved by a mean 0.41 versus vehicle, coarse wrinkles 0.25, patient self-assessment favoured tretinoin, and irritation was about three times more likely. The age match is unusually good — Weiss 1988 enrolled 35–70, Kang 2005 enrolled 40–76, and two 24-week multicentre trials of <a href="https://pubmed.ncbi.nlm.nih.gov/11534915/" rel="noopener nofollow" target="_blank">0.02% tretinoin cream</a> enrolled adults 43–70. That 0.02% data makes the "low dose, every night, for years" approach defensible; effects are real and modest — texture and fine lines respond, deep static folds do not.</p>
      <p class="text-ink/60 text-sm italic">Caveat: the pivotal trials were manufacturer-funded. Expect 6–8 weeks of irritation; judge at 6 months.</p>
    `,
  },
  {
    id: 'daily-spf',
    category: 'daily',
    title: 'Daily broad-spectrum sunscreen',
    tldr: 'The one RCT of sunscreen against visible aging was done in exactly this age band: 903 adults under 55, 4.5 years, 24% less aging with daily use.',
    evidence: 'strong',
    focus: 'skin',
    sessions: 'Every morning',
    cost: '€80–150/year',
    bodyHtml: `
      <p><a href="https://www.acpjournals.org/doi/10.7326/0003-4819-158-11-201306040-00002" rel="noopener nofollow" target="_blank">Hughes 2013</a> randomized 903 Australian adults under 55 to daily SPF 15+ versus discretionary use for 4.5 years and measured skin aging by blinded microtopography: daily users showed no detectable increase in aging, 24% less than the discretionary group (relative odds 0.76). Publicly funded, and the only RCT of any topical with a photoaging endpoint. In the 40s it also guards the treatments below — every IPL result recurs with sun, and every retinoid raises photosensitivity.</p>
    `,
  },
  {
    id: 'daily-vitamin-c',
    category: 'daily',
    title: 'Topical vitamin C',
    tldr: 'A 6-month double-blind split-side RCT of 5% vitamin C in photoaged women improved clinical, profilometric and ultrastructural measures. Small; formulation-dependent.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: 'Mornings',
    cost: '€100–300/year',
    bodyHtml: `
      <p><a href="https://onlinelibrary.wiley.com/doi/abs/10.1034/j.1600-0625.2003.00008.x" rel="noopener nofollow" target="_blank">Humbert 2003</a> ran a 6-month double-blind, split-side RCT of 5% vitamin C cream versus excipient in women with photoaged skin and found clinical, profilometric and ultrastructural improvement. Consistent small trials, modest effect, and a stability problem — L-ascorbic acid oxidizes, so opaque airless packaging and regular replacement matter. An adjunct under sunscreen, not a pillar.</p>
    `,
  },
  {
    id: 'daily-niacinamide',
    category: 'daily',
    title: 'Niacinamide (5%)',
    tldr: 'A 12-week double-blind split-face RCT in 50 women aged 40–60 — an exact age match — improved fine lines, spots, blotchiness and sallowness. Industry-funded.',
    evidence: 'moderate',
    focus: 'pigment',
    sessions: 'AM or PM',
    cost: '€60–150/year',
    bodyHtml: `
      <p><a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1524-4725.2005.31732" rel="noopener nofollow" target="_blank">Bissett 2005</a> is rare in matching this decade precisely: 50 white women aged 40–60, 5% niacinamide in a moisturizer versus the moisturizer alone, split-face, 12 weeks — significant improvements in fine lines, hyperpigmented spots, red blotchiness and sallowness. Well-run but one manufacturer's programme (Procter &amp; Gamble). Texture and pigment benefits, not structure — and a useful ceramide booster for the dryness that arrives with perimenopause (see our <a href="/ceramides">ceramides guide</a>).</p>
    `,
  },
  {
    id: 'daily-barrier',
    category: 'daily',
    title: 'Barrier repair for perimenopausal dryness (ceramides, HA)',
    tldr: 'Estrogen decline drops barrier lipids; ceramide-type moisturizers have consistent hydration and water-loss data. Structural claims: none.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: 'Daily',
    cost: '€15–40',
    bodyHtml: `
      <p>Falling and fluctuating estrogen reduces barrier lipids while sebaceous activity persists — the reason skin can be dry and breaking out at once. Ceramide- and hyaluronic-acid-based moisturizers have consistent trial data for hydration and transepidermal water loss (graded in full in our <a href="/ceramides">ceramides guide</a>), and they double as the tolerance tool that keeps a nightly retinoid viable. Expect comfort and glow, not fewer wrinkles.</p>
    `,
  },
  {
    id: 'daily-estriol',
    category: 'daily',
    title: 'Topical estrogen / estriol creams',
    tldr: 'One 6-month study of 59 perimenopausal women reported firmer, less wrinkled skin — with no placebo arm. Compounded, off-label, unlicensed in Europe.',
    evidence: 'emerging',
    focus: 'hormones',
    sessions: 'Daily (Rx, compounded)',
    cost: '€40–100/month',
    bodyHtml: `
      <p>The biology is plausible — fibroblasts carry estrogen receptors — and the flagship study is seductive: <a href="https://pubmed.ncbi.nlm.nih.gov/8876303/" rel="noopener nofollow" target="_blank">Schmidt 1996</a> applied 0.01% estradiol or 0.3% estriol cream to 59 perimenopausal women for six months and reported markedly improved elasticity and firmness, reduced wrinkle depth and pore size, and more type III collagen on biopsy. The catch: the two actives were compared with each other, not with placebo, so the headline numbers are uncontrolled. A topical estrogen-receptor agonist has a <a href="https://jddonline.com/articles/a-double-blind-randomized-pilot-study-evaluating-the-safety-and-efficacy-of-topical-mep-in-the-facia-S1545961618P1186X/" rel="noopener nofollow" target="_blank">double-blind pilot</a>. No licensed facial estrogen cream exists in Europe; it is compounded, off-label, and its systemic absorption from the face is poorly characterized. Interesting; not yet a recommendation.</p>
    `,
  },
  {
    id: 'daily-peptides-gf',
    category: 'daily',
    title: 'Peptides and growth-factor serums',
    tldr: 'Copper peptides raise growth-factor secretion in cell culture; no controlled clinical trial with a photoaging endpoint surfaced. Mechanism plus marketing.',
    evidence: 'limited',
    focus: 'hype',
    sessions: 'Daily',
    cost: '€60–300/year',
    bodyHtml: `
      <p>The evidence retrieved for peptides is in vitro — copper tripeptide <a href="https://pubmed.ncbi.nlm.nih.gov/15655171/" rel="noopener nofollow" target="_blank">increased fibroblast growth-factor secretion in culture</a> — and topical growth factors rest on open-label industry work. Neither has an RCT with clinical photoaging endpoints. Pleasant, plausible, and priced as if proven; the money buys more skin in tretinoin and sunscreen.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-toxin',
    category: 'clinic',
    title: 'Botulinum toxin — lines that now stay at rest',
    tldr: 'Meta-analysis of placebo-controlled RCTs: 33× the placebo response rate for glabellar lines, no excess adverse events. Treat the muscle before the line etches.',
    evidence: 'strong',
    focus: 'skin',
    sessions: '2–3×/year',
    downtime: 'None',
    cost: '€250–450/session',
    bodyHtml: `
      <p>Lines that were purely dynamic at 35 begin to etch at rest in the 40s, and treating the muscle now prevents the etched line that toxin alone cannot erase later. The evidence is as deep as cosmetic medicine gets: a <a href="https://pubmed.ncbi.nlm.nih.gov/26313835/" rel="noopener nofollow" target="_blank">meta-analysis of placebo-controlled double-blind RCTs</a> found a pooled investigator-rated response ratio of 33.5 versus placebo for glabellar lines without excess adverse events, and a <a href="https://pubmed.ncbi.nlm.nih.gov/36097079/" rel="noopener nofollow" target="_blank">2022 network meta-analysis</a> confirms every licensed formulation beats placebo. Effects last three to four months, so maintenance is two or three times a year — there is no evidence that dosing more often adds anything, and intervals often lengthen as muscles weaken.</p>
    `,
  },
  {
    id: 'clinic-filler-midface',
    category: 'clinic',
    title: 'HA filler at the midface and orbital rim',
    tldr: 'Pivotal RCT plus 2-year data: 96% responders at week 8, ~half still corrected at 24 months, perceived age −3.3 years. Small volumes; support the rim where bone recedes.',
    evidence: 'strong',
    focus: 'volume',
    sessions: '1 (1–2 ml), review yearly',
    downtime: '2–5 days swelling',
    cost: '€500–1,200',
    bodyHtml: `
      <p>Deflation in the 40s is usually mild-to-moderate, and the midface is where filler has real data: the <a href="https://pubmed.ncbi.nlm.nih.gov/24093664/" rel="noopener nofollow" target="_blank">Voluma pivotal RCT</a> (single-blind, no-treatment control) and its <a href="https://pubmed.ncbi.nlm.nih.gov/23687448/" rel="noopener nofollow" target="_blank">24-month open-label study</a> — 96% responders at week 8, about half maintaining correction at two years without touch-up — with <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4482214/" rel="noopener nofollow" target="_blank">patient-reported</a> perceived age reduction of 3.3 years at month 24. All Allergan-funded; evaluator blinding partial.</p>
      <p>Age-specific technique: 1–2 ml total is typical; the inferolateral orbital rim is precisely where bone recedes first, so support the rim rather than filling the hollow; the tear trough itself is the highest-risk, lowest-tolerance site; temples are increasingly treated on a thin RCT base. And the 24-month data are the argument against six-monthly "top-ups" (see our <a href="/fillers">filler guide</a>).</p>
    `,
  },
  {
    id: 'clinic-plla',
    category: 'clinic',
    title: 'Poly-L-lactic acid (Sculptra)',
    tldr: 'One evaluator-blinded RCT vs collagen: superior at every timepoint through month 13, effect maintained to 25 months. Slow, irreversible, technique-sensitive.',
    evidence: 'moderate',
    focus: 'volume',
    sessions: '2–4 over 3 months',
    downtime: '1–3 days',
    cost: '€500–900/session',
    bodyHtml: `
      <p>PLLA provokes your own collagen rather than filling, which suits the diffuse deflation of the temples and cheeks that starts here. The pivotal <a href="https://www.sciencedirect.com/science/article/abs/pii/S0190962209009621" rel="noopener nofollow" target="_blank">randomized, evaluator-blinded trial</a> (116 vs 117 patients, up to four sessions over nine weeks) beat human collagen on wrinkle scales at every timepoint through month 13, with the effect maintained to 25 months in the surveillance phase. Sponsor-funded, against a now-obsolete comparator, with historical nodule concerns that dilution and technique have tamed. Reasonable as the alternate-year partner to HA — never the same year — and not undoable.</p>
    `,
  },
  {
    id: 'clinic-ultherapy',
    category: 'clinic',
    title: 'Microfocused ultrasound (Ultherapy)',
    tldr: 'The evidence literally sits in the 40s — mean ages 44 and 49 in the key studies. A 1–2 mm brow lift and "mild" improvement in most is the honest promise; BMI >30 predicts failure.',
    evidence: 'moderate',
    focus: 'laxity',
    sessions: '1 every 12–24 mo',
    downtime: 'None–mild swelling',
    cost: '€2,000–4,500',
    bodyHtml: `
      <p>A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9861614/" rel="noopener nofollow" target="_blank">systematic review of 16 studies</a> (~570 patients, &gt;90% female) is the reference: the pivotal Alam 2010 cohort had a mean age of 44 and blinded raters measured a 1.7 mm brow lift; Oni 2014 (mean age 49.2) found 72% improved in lower-face laxity, with BMI over 30 predicting poor response. Across studies, 92% showed "any" investigator-rated improvement at 90 days — but 47% of that was <em>mild</em>. Pain ~3.8/10; serious events ~2%; no data beyond 12 months; mostly device-maker funded. A maintenance tool for early laxity in a lean face, not a facelift alternative.</p>
    `,
  },
  {
    id: 'clinic-ipl',
    category: 'clinic',
    title: 'IPL for the first lentigines and redness',
    tldr: 'A blinded split-face RCT: effective for pigment, vessels and texture, not wrinkles. The 40s are when sun spots first show — this is their tool.',
    evidence: 'moderate',
    focus: 'pigment',
    sessions: '3–5 + yearly',
    downtime: 'Hours; spots flake ~1 wk',
    cost: '€120–400/session',
    bodyHtml: `
      <p>The lentigines and vascular blotchiness that first become visible in the 40s are IPL's home ground: a <a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/407425" rel="noopener nofollow" target="_blank">randomized, blinded split-face trial</a> found it improved pigmentation, telangiectasia and texture — and had no effect on wrinkles; a further <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5779741/" rel="noopener nofollow" target="_blank">split-face comparison</a> agrees. Lighter skin types, untanned, three to five sessions, then yearly maintenance because sun makes new spots. Buy it for colour, not for collagen (our <a href="/laser-ipl">laser guide</a> has the full landscape).</p>
    `,
  },
  {
    id: 'clinic-nafl',
    category: 'clinic',
    title: 'Non-ablative fractional laser for texture',
    tldr: 'Controlled split-face data for scars; photoaging evidence is largely prospective series. Days of downtime, modest gains, safe across skin tones.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: '3–5',
    downtime: '1–3 days + flaking',
    cost: '€450–1,000/session',
    bodyHtml: `
      <p>Fraxel-class 1550/1927 nm lasers heat microcolumns of dermis under an intact surface — the resurfacing class with days rather than weeks of recovery and the best safety record in darker skin. Blinded split-face RCT data exist for scarring; for photoaging the base is largely prospective series showing texture, fine-line and pigment improvement over a course. The right 40s tool when texture and early lines bother you more than volume; not a substitute for the retinoid it complements.</p>
    `,
  },
  {
    id: 'clinic-blepharoplasty',
    category: 'clinic',
    title: 'Upper blepharoplasty — the first surgery people consider',
    tldr: 'Prospective patient-reported studies show consistent, large gains in satisfaction even for mild hooding — extrapolated from cohorts with mean ages 62–68.',
    evidence: 'moderate',
    focus: 'laxity',
    sessions: '1 (10+ yrs)',
    downtime: '7–10 days',
    cost: '€2,500–5,000',
    bodyHtml: `
      <p>Upper-lid hooding is often the first thing a 40-something thinks about surgically, and the outcome data are consistent: prospective studies with validated instruments show <a href="https://pubmed.ncbi.nlm.nih.gov/39037480/" rel="noopener nofollow" target="_blank">high satisfaction regardless of baseline severity</a> and large improvements in appearance-related distress (<a href="https://www.aaojournal.org/article/S0161-6420(25)00448-8/fulltext" rel="noopener nofollow" target="_blank">Ophthalmology 2025</a>). The series enrol ages 40–80 with mean ages in the 60s, so the 40s are an extrapolation. The decision rule: consider it when the hooding is skin excess rather than brow descent — toxin and ultrasound won't remove skin, and filler should never be used to try.</p>
    `,
  },
  {
    id: 'clinic-rf-microneedling',
    category: 'clinic',
    title: 'RF microneedling for midface "tightening"',
    tldr: 'Good for scars and texture — but the FDA has flagged periorbital and malar fat loss after these devices, in exactly the areas already deflating in your 40s.',
    evidence: 'limited',
    focus: 'hype',
    sessions: '—',
    cost: '€500–1,200/session',
    bodyHtml: `
      <p>For acne scars and texture, RF microneedling has respectable split-face data (our <a href="/microneedling">microneedling guide</a> grades it). The problem is the "tightening" pitch over the midface: the FDA has <a href="https://www.dermatologytimes.com/view/fda-alerts-clinicians-to-serious-complications-with-radiofrequency-microneedling-devices" rel="noopener nofollow" target="_blank">alerted clinicians to serious complications</a> including subcutaneous fat loss in the periorbital and malar regions with contour irregularities — not self-reversing, sometimes needing fat grafting. In a decade defined by fat-pad deflation, deep-set RF needles over the cheek are a poor trade. Ask any provider what depth and energy they use over the malar fat pad, and whether they treat the infraorbital area at all.</p>
    `,
  },
  {
    id: 'clinic-threads',
    category: 'clinic',
    title: 'Thread lifts',
    tldr: 'A 160-patient series: 34% early complications and all initial improvement gone at one year. No RCT vs sham or filler.',
    evidence: 'limited',
    focus: 'hype',
    sessions: '—',
    cost: '€1,500–3,500',
    bodyHtml: `
      <p>The independent literature is unkind: a 160-patient PDO series reported an early complication rate of 34% — suture displacement, erythema, infection, dimpling — and <a href="https://academic.oup.com/asj/article-abstract/39/3/248/5320203" rel="noopener nofollow" target="_blank">no residual improvement at one year</a>; a <a href="https://www.frontiersin.org/journals/surgery/articles/10.3389/fsurg.2026.1769458/full" rel="noopener nofollow" target="_blank">2026 meta-analysis</a> pools 2,827 patients' complications. The <a href="https://pubmed.ncbi.nlm.nih.gov/29481392/" rel="noopener nofollow" target="_blank">systematic review</a> is titled "still in the lift?" for a reason. The related "liquid facelift" — six to ten syringes in one sitting — has no trial of the package and a growing overfill literature against it.</p>
    `,
  },
];

const health: Section[] = [
  {
    id: 'health-mht',
    category: 'health',
    title: 'Menopausal hormone therapy — the window is now',
    tldr: 'For women under 60 or within 10 years of menopause, HT is the most effective treatment for hot flashes and prevents bone loss. Everyone in the 40s is inside that window.',
    evidence: 'strong',
    focus: 'hormones',
    sessions: 'Specialist review',
    cost: '€100–300 consult',
    bodyHtml: `
      <p>The <a href="https://journals.lww.com/menopausejournal/fulltext/2022/07000/the_2022_hormone_therapy_position_statement_of_the.4.aspx" rel="noopener nofollow" target="_blank">2022 Menopause Society position statement</a> is unambiguous: hormone therapy remains the most effective treatment for vasomotor symptoms and genitourinary syndrome, prevents bone loss and fracture, and for women <strong>under 60 or within 10 years of menopause onset</strong> without contraindications the benefit–risk ratio is favourable; beyond that window it worsens. Skin is not a listed indication — but everyone reading this decade's guide is inside the favourable window by definition, and it closes with time rather than with age alone.</p>
      <p>Practical trigger: cycle irregularity plus any of hot flashes, night sweats, new insomnia, new acne or hair shedding, low mood or vaginal symptoms — or simply to plan. A society-certified menopause specialist is the safeguard against both under-treatment and "optimization" clinics.</p>
    `,
  },
  {
    id: 'health-mht-skin',
    category: 'health',
    title: 'Hormone therapy for the skin itself',
    tldr: 'Small trials show more collagen and thicker skin; the one adequately powered RCT (485 women, 48 weeks) found no wrinkle benefit over placebo. A bonus, not a reason.',
    evidence: 'emerging',
    focus: 'hormones',
    bodyHtml: `
      <p>Pooled small studies report that HT increases skin elasticity, collagen and thickness (<a href="https://pubmed.ncbi.nlm.nih.gov/38230593/" rel="noopener nofollow" target="_blank">2023 meta-analysis</a>) — but the trials are small, heterogeneous and mostly old, and the largest RCT measuring the face, <a href="https://www.jaad.org/article/S0190-9622(08)00595-1/abstract" rel="noopener nofollow" target="_blank">Phillips 2008</a> (485 postmenopausal women, 48 weeks of low-dose estrogen/progestin), showed no meaningful wrinkle benefit over placebo. Reviews conclude the role is supportive, and <a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.70393" rel="noopener nofollow" target="_blank">no guideline supports HT for skin alone</a>. Take it for symptoms and bone if you qualify; count thicker, better-hydrated skin as a plausible bonus.</p>
    `,
  },
  {
    id: 'health-vaginal-estrogen',
    category: 'health',
    title: 'Local vaginal estrogen',
    tldr: 'Guideline first-line for genitourinary symptoms with minimal systemic absorption — the quality-of-life intervention 40-somethings are rarely offered.',
    evidence: 'strong',
    focus: 'hormones',
    bodyHtml: `
      <p>Not a skin treatment, but on any honest list for this decade: low-dose vaginal estrogen is first-line for genitourinary syndrome of menopause in the same <a href="https://journals.lww.com/menopausejournal/fulltext/2022/07000/the_2022_hormone_therapy_position_statement_of_the.4.aspx" rel="noopener nofollow" target="_blank">position statement</a>, with minimal systemic absorption and few contraindications. Dryness, discomfort and recurrent urinary symptoms are common from the late 40s and widely under-treated.</p>
    `,
  },
  {
    id: 'health-fezolinetant',
    category: 'health',
    title: 'Non-hormonal hot-flash treatment (fezolinetant)',
    tldr: 'Phase-3 RCTs in women 40–65: significant reductions in hot-flash frequency and severity. Better sleep is the skin-relevant dividend.',
    evidence: 'strong',
    focus: 'hormones',
    bodyHtml: `
      <p>For women who can't or won't take hormones, the neurokinin-3 antagonist fezolinetant has a real trial base: <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(23)00085-5/abstract" rel="noopener nofollow" target="_blank">SKYLIGHT 1</a> (527 women aged 40–65 at 97 sites including several European countries; Astellas-funded) showed significant reductions in vasomotor frequency and severity over 12 weeks with a 40-week extension. Skin relevance is indirect but real — hot-flash control is the evidence-based route to unbroken sleep in perimenopause, and sleep loss shows up on intrinsic-aging scales.</p>
    `,
  },
  {
    id: 'health-strength',
    category: 'health',
    title: 'Resistance training — start before the transition',
    tldr: 'Meta-analyses in postmenopausal women show resistance training raises spine and hip bone density; SWAN shows lean mass and bone start falling 1–2 years before the final period.',
    evidence: 'strong',
    focus: 'body',
    sessions: '2–3×/week',
    cost: '€300–1,200/year',
    bodyHtml: `
      <p>A <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9941565/" rel="noopener nofollow" target="_blank">2023 network meta-analysis</a> of 19 RCTs (919 women) found moderate-intensity resistance training improved lumbar-spine and femoral-neck density in postmenopausal women, and aerobic-only training consistently underperforms it for bone. The rationale for starting in the 40s is the SWAN timeline: lean mass and bone begin falling one to two years <em>before</em> the final period. Protein at ~1.2 g/kg/day with training is the guideline floor — the 1.6 g/kg figure is athletic-population extrapolation, and one RCT found higher protein added nothing to lean-mass gains over the RDA.</p>
    `,
  },
  {
    id: 'health-screening',
    category: 'health',
    title: 'Screening that changes decisions: Lp(a), lipids, DEXA by risk',
    tldr: 'Lp(a) once in a lifetime (European consensus); DEXA before 65 only with risk factors or at the final period; cardiovascular risk rises after menopause.',
    evidence: 'strong',
    focus: 'body',
    cost: '€100–300/year',
    bodyHtml: `
      <p>Two guideline-backed tests fit this decade. <a href="https://www.atherosclerosis-journal.com/article/S0021-9150(23)00182-X/fulltext" rel="noopener nofollow" target="_blank">European consensus</a> recommends measuring Lp(a) at least once in every adult (risk rule-in ≥125 nmol/L), and cardiovascular risk climbs after menopause — the 40s are the natural moment. For bone, <a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening" rel="noopener nofollow" target="_blank">USPSTF</a> screens all women at 65 and younger postmenopausal women by fracture-risk score; a baseline DEXA at the final period, or in the late 40s with risk factors (low BMI, early menopause, steroids, parental hip fracture, smoking), is defensible — routine DEXA at 40 is not. Add lipids with ApoB, HbA1c and thyroid, since both diabetes and thyroid disease mimic menopausal symptoms.</p>
    `,
  },
  {
    id: 'health-spironolactone',
    category: 'health',
    title: 'Spironolactone for perimenopausal acne',
    tldr: 'The 410-woman SAFA trial (mean age 29) showed clear benefit — widely used off-label for late-onset hormonal acne, extrapolated to the 40s.',
    evidence: 'moderate',
    focus: 'skin',
    bodyHtml: `
      <p>Dry skin and new breakouts arriving together is classic perimenopause — estrogen falls while androgen effect is relatively unopposed. The <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10599794/" rel="noopener nofollow" target="_blank">SAFA trial</a> (pragmatic, double-blind, NIHR-funded, 410 women, spironolactone 50→100 mg/day for 24 weeks) showed a clear quality-of-life and investigator-rated benefit; the mean age was 29, so the 40s are an extrapolation, though the drug is routinely used off-label for exactly this pattern. Niacinamide plus a ceramide moisturizer handles the dryness half.</p>
    `,
  },
  {
    id: 'health-hair',
    category: 'health',
    title: 'Hair thinning: minoxidil ± spironolactone',
    tldr: 'Oral 1 mg minoxidil matched topical 5% in an RCT; spironolactone adds to it in meta-analysis. Rule out iron, thyroid and telogen effluvium first.',
    evidence: 'moderate',
    focus: 'skin',
    bodyHtml: `
      <p>A quarter of women have detectable pattern hair loss by 49. Bloodwork first (iron, thyroid, a shedding history), then treatment with real trials: low-dose oral minoxidil 1 mg <a href="https://www.jaad.org/article/S0190-9622(19)32666-0/fulltext" rel="noopener nofollow" target="_blank">matched topical 5%</a> for hair density at 24 weeks in an RCT (more hypertrichosis, dose-dependent), and a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10502763/" rel="noopener nofollow" target="_blank">meta-analysis</a> found spironolactone combination therapy improved 66% of women versus 43% on monotherapy. Add microneedling if you want the strongest adjunct data (see our <a href="/microneedling">microneedling guide</a>).</p>
    `,
  },
  {
    id: 'health-creatine',
    category: 'health',
    title: 'Creatine',
    tldr: 'Strength gains with training are real in older women; the largest 2-year RCT was null on bone density but preserved hip geometry. No skin claim.',
    evidence: 'moderate',
    focus: 'body',
    sessions: '3–5 g/day',
    cost: '€5–10/month',
    bodyHtml: `
      <p>Creatine plus resistance training beats training alone for strength in older women, especially over 24-plus weeks. Tempering the bone hopes: the <a href="https://pubmed.ncbi.nlm.nih.gov/37144634/" rel="noopener nofollow" target="_blank">2-year RCT</a> in 237 postmenopausal women found no effect on bone density, though it preserved femoral-neck geometry — a strength surrogate. Perimenopause-specific data are an 8-week pilot with cognitive endpoints. Cheap, safe, useful for strength; not a bone or skin drug.</p>
    `,
  },
  {
    id: 'health-glp1',
    category: 'health',
    title: 'GLP-1 weight loss and the face',
    tldr: 'Imaging: ~7% midface volume lost per 10 kg, mostly superficial fat — it tracks the weight loss, not the drug. Slow the loss, train, wait before filling.',
    evidence: 'emerging',
    focus: 'volume',
    bodyHtml: `
      <p>The only objective data: <a href="https://aao-hnsfjournals.onlinelibrary.wiley.com/doi/abs/10.1002/ohn.1209" rel="noopener nofollow" target="_blank">20 patients imaged before and after GLP-1 therapy</a> (mean loss 11 kg) lost a median 9% of midface volume — superficial fat more than deep — with loss proportional to weight lost. Tiny, retrospective, no non-drug comparator: this is weight loss, not a drug effect. What to do: keep loss to ≤0.5–1 kg a week, resistance-train and hit protein to protect lean mass, wait until weight is stable before any filler or biostimulator, then treat conservatively. Claims that hyperdilute CaHA "prevents" facial volume loss during GLP-1 use rest on early open-label data.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety',
    category: 'safety',
    title: 'Red flags, and when to see a specialist',
    tldr: 'Overfill, fat-loss devices, "optimization" hormones — and the menopause consultation that should happen when cycles change, not when symptoms are unbearable.',
    bodyHtml: `
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Facial overfilled syndrome</strong> — a recognized iatrogenic entity from cumulative filler on a product that persists for years; the fix is imaging-aware restraint and hyaluronidase, not more product.</li>
        <li><strong>Energy-device fat loss</strong> — regulator-flagged after RF microneedling in the periorbital and malar regions; ask about depth and energy over fat pads before consenting.</li>
        <li><strong>Hormone "optimization"</strong> — compounded pellets, testosterone-for-everything and "optimal" targets have no outcome trials; the 2022 position statement covers what HT is for and at what doses. Look for a national- or international-society-certified menopause specialist.</li>
        <li><strong>When to book that consultation:</strong> cycle irregularity plus hot flashes, night sweats, new insomnia, new acne or shedding, low mood, or vaginal symptoms — or simply to plan, because the favourable HT window is now.</li>
        <li><strong>Skin-cancer surveillance</strong> starts to matter: an annual full-skin check, sooner for any changing lesion — particularly one appearing after a laser or peel.</li>
      </ul>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-too-late-retinol',
    category: 'faq',
    title: 'Is it too late to start retinol (or tretinoin) at 45?',
    tldr: 'No — the pivotal trials enrolled 40–76-year-olds.',
    bodyHtml: `
      <p>The tretinoin RCTs enrolled adults 40–76, and the 0.02% cream trials specifically enrolled 43–70-year-olds; pooled effects on fine and coarse wrinkles were significant at 16–48 weeks. Start low, expect irritation for 6–8 weeks, judge at six months.</p>
    `,
  },
  {
    id: 'faq-hrt-skin',
    category: 'faq',
    title: 'Should I start HRT for my skin?',
    tldr: 'Not as the reason — but if you have symptoms, the window is now.',
    bodyHtml: `
      <p>The largest RCT (485 women, 48 weeks) did not show a wrinkle benefit over placebo, and no guideline lists skin as an indication. If you have hot flashes, sleep disruption or bone risk and are under 60 or within 10 years of menopause, HT is the most effective treatment for those — and thicker, better-hydrated skin is a plausible side benefit.</p>
    `,
  },
  {
    id: 'faq-filler-or-ultherapy',
    category: 'faq',
    title: 'Filler or Ultherapy first?',
    tldr: 'Different problems — deflation vs laxity. Not both in one year.',
    bodyHtml: `
      <p>Early laxity with good volume and a BMI ≤ 25: microfocused ultrasound, whose key studies had mean ages of 44 and 49 — expect a 1–2 mm brow lift and "mild" improvement in most. Deflation of the cheeks and orbital rim: a small volume of HA at the midface, where the 2-year RCT data are. Doing both in one year is the road to overfill.</p>
    `,
  },
  {
    id: 'faq-dry-and-acne',
    category: 'faq',
    title: 'Why is my skin suddenly dry and breaking out at the same time?',
    tldr: 'Perimenopause: estrogen falls, androgen effect persists.',
    bodyHtml: `
      <p>Estrogen falls and fluctuates while androgen effect is relatively unopposed, so barrier lipids drop (dryness) and sebaceous activity persists or rises (acne); collagen loss begins during the transition. Niacinamide plus a ceramide moisturizer handles the dryness; spironolactone has RCT evidence for adult female acne (mean age 29, extrapolated).</p>
    `,
  },
  {
    id: 'faq-botox-forever',
    category: 'faq',
    title: 'Botox every 3 months forever?',
    tldr: 'Two or three times a year — intervals often lengthen.',
    bodyHtml: `
      <p>The effect lasts three to four months in the RCTs, so maintenance is two or three times a year, not four; no evidence shows "preventive" dosing more often adds benefit, and long-term repeat data are open-label but reassuring. Many patients find intervals lengthen over years as the muscles weaken.</p>
    `,
  },
  {
    id: 'faq-hair',
    category: 'faq',
    title: 'My hair is thinning — is it hormones?',
    tldr: 'Possibly — 25% of women have pattern hair loss by 49. Bloodwork, then minoxidil.',
    bodyHtml: `
      <p>The 40s are a second onset peak for female pattern hair loss. Rule out iron deficiency, thyroid disease and telogen effluvium with bloodwork, then topical or low-dose oral minoxidil, adding spironolactone if the pattern is androgenic — both with trial support.</p>
    `,
  },
  {
    id: 'faq-dexa',
    category: 'faq',
    title: 'Do I need a DEXA scan at 45?',
    tldr: 'Not routinely — at the final period, or earlier with risk factors. Lp(a) once, though, is worth doing now.',
    bodyHtml: `
      <p>Bone loss accelerates about a year before the final period. A baseline scan makes sense then, or earlier with risk factors (early menopause, low BMI, steroids, parental hip fracture, smoking). Lp(a) — once in a lifetime, per European consensus — is the test to do this decade regardless.</p>
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
    intro: 'What is actually changing at 40–49, and the order to address it.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'The plan',
    intro: 'The rational routine by budget, and the decade\'s expensive mistakes.',
    sections: context,
  },
  {
    id: 'daily',
    title: 'Daily care, graded',
    intro: 'The topical base — where the age-matched trial evidence is best.',
    sections: daily,
  },
  {
    id: 'clinic',
    title: 'In-office treatments',
    intro: 'The decade where procedures earn their keep — and where overfill begins.',
    sections: clinic,
  },
  {
    id: 'health',
    title: 'Perimenopause & the body',
    intro: 'Hormones, hair, bone, muscle, screening — the systemic decisions that outrank any cream.',
    sections: health,
  },
  {
    id: 'safety',
    title: 'Red flags & specialists',
    intro: 'What to refuse, and who to see.',
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
