/**
 * Anti-aging in your 30s — single source of truth (decade guide).
 *
 * Consumed by /anti-aging-30s. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank". Editorial spine: the 30s are the prevention decade — the
 * two things with trial-grade proof (daily SPF, retinoids) are cheap, and most
 * "prejuvenation" rests on a single twin case report and marketing.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'prevention' | 'lines' | 'pigment' | 'acne' | 'hype' | 'body' | 'general';

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
  'Nothing inflects at 30 — collagen has been falling ~1% a year since your mid-20s. What changes is that the cumulative deficit, and the sun and smoke of your 20s, start to show.',
  'The only prevention with trial-grade proof in an under-55 population is daily sunscreen: in a 903-person RCT, daily users showed no detectable skin aging over 4.5 years. It costs less than one facial.',
  'Retinoids have eight RCTs behind them, enrolling people from age 29 with early photodamage — the rational start is the first fine lines or sun spots, not a birthday.',
  '"Prejuvenation" is mostly marketing: preventive Botox rests on one identical-twin case report, early filler on nothing (MRI shows filler persisting up to 15 years and swelling to ~3× its volume), and laser "maintenance" on sponsor-run open-label studies.',
  'In 186 pairs of identical twins, each 10 years of smoking made the smoking twin look ~2.5 years older, and sun exposure did the same — the two things you can control in this decade dwarf everything you can buy.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-changes',
    category: 'concept',
    title: 'What actually changes in your 30s',
    tldr: 'Linear collagen decline, the first lines that stay at rest, early sun spots, subtle fat and bone changes — and the biggest hormonal skin event of the decade is pregnancy.',
    bodyHtml: `
      <p>The famous "1% a year" comes from <a href="https://pubmed.ncbi.nlm.nih.gov/1220811/" rel="noopener nofollow" target="_blank">forearm biopsies in 148 people aged 15–93</a>: skin collagen falls roughly linearly through adult life, lower in women at every age. There is no inflection at 30 — the line is straight; the 30s are simply when the cumulative deficit becomes visible.</p>
      <p>What you notice: expression lines that were purely dynamic in your 20s start to stay when your face is at rest (repeated contraction fatigues the collagen and elastin under them); the first solar lentigines and mottled pigment appear — the visible return on UV from your teens and 20s; surface turnover slows and skin reads duller. Facial fat compartments begin to deflate and the <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3404279/" rel="noopener nofollow" target="_blank">facial skeleton starts its lifelong resorption</a>, but neither dominates appearance yet — sun and surface do.</p>
      <p>Hormonally, the ovaries' late reproductive stage can begin in the late 30s, but skin-relevant estrogen decline is a 40s–50s story. The decade's big hormonal skin event is <strong>pregnancy</strong>: melasma affects 36–75% of pregnancies, usually fading within a year and persisting in roughly 30% — with contraceptive choice modulating the risk.</p>
    `,
  },
  {
    id: 'twin-lesson',
    category: 'concept',
    title: 'The twin lesson: what you can control',
    tldr: 'In 186 identical-twin pairs, smoking (~2.5 years per decade), sun, alcohol and — under 40 — extra weight made twins look older. Sunscreen made them look younger.',
    bodyHtml: `
      <p>The cleanest human evidence separating genetics from lifestyle comes from identical twins photographed at the Twins Days Festival and rated for perceived age difference within each pair (<a href="https://pubmed.ncbi.nlm.nih.gov/19337100/" rel="noopener nofollow" target="_blank">Guyuron 2009, 186 pairs</a>). The findings map directly onto the 30s:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Smoking:</strong> each 10 years added ~2.5 years of perceived age; five years was enough to register; the damage concentrated around the mouth and in pigmentation.</li>
        <li><strong>Sun:</strong> more exposure and outdoor hobbies aged; sunscreen use made twins look younger.</li>
        <li><strong>Alcohol:</strong> twins who avoided it looked significantly younger (dose wasn't captured).</li>
        <li><strong>Weight:</strong> a 4-point higher BMI made twins <em>under 40</em> look older — extra weight doesn't "fill" a 30-something face, it obscures its structure. (The relationship flips after 40.)</li>
        <li><strong>Divorce and antidepressants</strong> tracked with older appearance — stress is in the data, confounded but present.</li>
      </ul>
      <p>Cross-sectional and self-reported, but genetically controlled — and consistent with every biopsy study of smokers' and sun-damaged dermis. The practical reading: in this decade, the modifiable share of how old you'll look at 45 is mostly UV and tobacco, both cumulative, both cheap to stop.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'routine-and-budget',
    category: 'context',
    title: 'The rational 30s routine, by budget',
    tldr: 'SPF every morning, a retinoid at night, vitamin C or niacinamide if you like — ~€200–450 a year. Add toxin only for lines that stay at rest.',
    bodyHtml: `
      <p><strong>Foundation (≈€200–450/year):</strong> broad-spectrum SPF 30–50 every morning, reapplied outdoors (tinted with iron oxides if melasma-prone); a retinoid at night — prescription tretinoin 0.025–0.05% or OTC adapalene 0.1% — two or three nights a week building to nightly; a plain cleanser and moisturizer; one dermatology visit.</p>
      <p><strong>Foundation + targeted (≈€900–2,000/year):</strong> add a vitamin C serum in the morning, niacinamide or azelaic acid on non-retinoid nights for pigment or breakouts, and botulinum toxin two or three times a year for lines that are now visible at rest.</p>
      <p><strong>Full evidence-based (≈€2,500–5,000/year):</strong> add a dermatologist-supervised melasma protocol if you need one, a short pigment-laser or fractional course for <em>actual</em> lentigines or texture change, and — the item with the most data for future skin — a gym membership or strength coach.</p>
      <p><strong>Skip at any budget:</strong> "eye creams" as a category, collagen creams and drinks, preventive filler, energy devices on skin that isn't lax. Anything above the top tier in your 30s buys marketing, not evidence. Prices are indicative Western-European estimates.</p>
    `,
  },
  {
    id: 'what-not-to-do',
    category: 'context',
    title: 'What not to do in your 30s',
    tldr: 'Filler stacking, toxin before lines exist, devices without an indication, aggressive lasers in darker skin, the supplement rabbit hole, over-exfoliation — and filters.',
    bodyHtml: `
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Filler "maintenance" from 30.</strong> MRI shows hyaluronic-acid filler persisting up to 15 years at ~2.8× its injected volume — annual top-ups accumulate into the heavy, overfilled 40-year-old face. Filler corrects a deficit you can point to, not a calendar.</li>
        <li><strong>Toxin in unlined skin.</strong> No trial; unknown long-term muscle adaptation; a recurring bill from 28.</li>
        <li><strong>Energy devices without an indication.</strong> Ultherapy on skin that isn't loose, fractional-laser "subscriptions" sold as insurance.</li>
        <li><strong>Aggressive lasers in Fitzpatrick IV–VI.</strong> Higher pigmentation risk; device and settings matter more than the brochure.</li>
        <li><strong>The supplement rabbit hole.</strong> Collagen's effect vanishes in independently funded trials; beta-carotene did nothing for photoaging in the big sunscreen RCT.</li>
        <li><strong>Over-exfoliation.</strong> Acids plus retinoid plus scrubs produce the irritation the retinoid trials document, with no extra benefit.</li>
        <li><strong>Filters.</strong> Body dysmorphic disorder has a pooled prevalence of <a href="https://pubmed.ncbi.nlm.nih.gov/40200598/" rel="noopener nofollow" target="_blank">around 20% in cosmetic settings</a>, and time on image-led platforms correlates with intention to have procedures. A good injector screens for it and declines to treat it.</li>
      </ul>
    `,
  },
];

const daily: Section[] = [
  {
    id: 'daily-spf',
    category: 'daily',
    title: 'Daily broad-spectrum sunscreen',
    tldr: 'The only anti-aging RCT in an under-55 population: 903 adults, 4.5 years — daily users showed no detectable increase in skin aging (24% less than discretionary users).',
    evidence: 'strong',
    focus: 'prevention',
    sessions: 'Every morning',
    cost: '€80–150/year',
    bodyHtml: `
      <p>The trial every 30-something should know: <a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013, Annals of Internal Medicine</a> — 903 Queensland adults <em>under 55</em>, randomized to daily SPF 15+ versus discretionary use for 4.5 years, with skin aging measured by blinded microtopography casts. Daily users showed <strong>no detectable increase in skin aging</strong>; aging was 24% lower than in the discretionary group (relative odds 0.76). Publicly funded. The beta-carotene arm of the same trial did nothing.</p>
      <p>Caveats: hand skin, Australian UV, a discretionary (not zero) comparator. Even so, it is the only long-term RCT of anything topical against photoaging in your age band, and the twin data point the same way (sunscreen users looked younger). Broad-spectrum SPF 30–50, every morning, reapplied outdoors; tinted iron-oxide formulas if you're melasma-prone.</p>
    `,
  },
  {
    id: 'daily-tretinoin',
    category: 'daily',
    title: 'Prescription tretinoin',
    tldr: 'Eight RCTs, 1,361 participants, enrolling from age 29: measurable fine-wrinkle and pigment improvement with histological proof. All industry-funded; none tested pure prevention.',
    evidence: 'strong',
    focus: 'lines',
    sessions: 'Nightly (build up)',
    cost: '€40–120/year',
    bodyHtml: `
      <p>A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/" rel="noopener nofollow" target="_blank">2025 meta-analysis</a> pooled eight vehicle-controlled RCTs (1,361 people, 16 weeks to 2 years): fine wrinkles improved by a mean 0.41 on the trial scales, coarse wrinkles 0.25, with epidermal thickening and increased procollagen on biopsy — and a threefold higher rate of dryness and peeling. The youngest trials enrolled people aged 29–50 with existing photodamage, so the 30s are inside the evidence; nobody has ever tested tretinoin as pure prevention on unlined skin.</p>
      <p><strong>How:</strong> 0.025% two or three nights a week over moisturizer, building to nightly over two months; expect 2–8 weeks of peeling. The 0.02–0.05% strengths give most of the benefit with less irritation.</p>
      <p><strong>Pregnancy:</strong> meta-analyses of accidental first-trimester exposure found no substantial excess of malformations — reassurance for accidents, but stop when trying to conceive; oral isotretinoin is a major teratogen.</p>
    `,
  },
  {
    id: 'daily-retinol-adapalene',
    category: 'daily',
    title: 'OTC retinol and adapalene',
    tldr: 'Split-face trials found retinol 0.25–1% comparable to tretinoin at 12 weeks; adapalene 0.3% was non-inferior in an RCT — the natural start for breakout-prone skin.',
    evidence: 'moderate',
    focus: 'lines',
    sessions: 'Nightly (build up)',
    cost: '€40–150/year',
    bodyHtml: `
      <p>If a prescription is a hurdle: a <a href="https://jddonline.com/a-randomized-double-blind-split-face-study-comparing-the-efficacy-and-tolerability-of-three-retinol-based-products-vs-three-tretinoin-based-products-in-subjects-with-moderate-to-severe-facial-photodam/" rel="noopener nofollow" target="_blank">randomized split-face study</a> found retinol 0.25–1.0% matched tretinoin 0.025–0.1% on every efficacy measure at 12 weeks (short, manufacturer-run, no placebo arm). Adapalene — OTC across much of Europe — <a href="https://www.jle.com/fr/revues/ejd/e-docs/comparable_efficacy_of_adapalene_0.3_gel_and_tretinoin_0.05_cream_as_treatment_for_cutaneous_photoaging_312613/article.phtml" rel="noopener nofollow" target="_blank">was non-inferior to tretinoin 0.05%</a> for photoaging in a randomized trial and improves lentigines, and it doubles as acne treatment — the obvious first retinoid for a 30-something with breakouts.</p>
    `,
  },
  {
    id: 'daily-vitamin-c',
    category: 'daily',
    title: 'Topical vitamin C',
    tldr: 'Three small vehicle-controlled RCTs (the whole literature totals ~139 people) show smoother, less wrinkled skin with biopsy support. An adjunct to sunscreen.',
    evidence: 'moderate',
    focus: 'prevention',
    sessions: 'Mornings',
    cost: '€100–300/year',
    bodyHtml: `
      <p>A <a href="https://pubmed.ncbi.nlm.nih.gov/37128827/" rel="noopener nofollow" target="_blank">2023 systematic review</a> found every RCT measuring skin topography favoured vitamin C over vehicle — including a 6-month double-blind trial of 5% ascorbic acid that reduced deep wrinkles — but the entire evidence base is about 139 volunteers, in photodamaged adults presumably older than you. The mechanism (antioxidant, collagen cofactor, UV-damage buffer under sunscreen) is sound; the clinical base is tiny. Worth it as a morning adjunct if the formulation is stable (opaque, airless, replaced every few months).</p>
    `,
  },
  {
    id: 'daily-niacinamide',
    category: 'daily',
    title: 'Niacinamide (4–5%)',
    tldr: 'Vehicle-controlled split-face trials in women 40–60: fewer fine lines, spots, blotchiness and sallowness at 12 weeks — one manufacturer\'s programme.',
    evidence: 'moderate',
    focus: 'pigment',
    sessions: 'AM or PM',
    cost: '€60–150/year',
    bodyHtml: `
      <p>Bissett's <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1524-4725.2005.31732" rel="noopener nofollow" target="_blank">12-week double-blind split-face RCT</a> (50 women, 5% niacinamide versus the same moisturizer without it) found improvements in fine lines, hyperpigmented spots, red blotchiness and sallowness. Consistent, well-run, and essentially all from Procter &amp; Gamble. For the 30s it's the barrier-and-pigment support that pairs with a retinoid without irritation — and a ceramide booster (see our <a href="/ceramides">ceramides guide</a>).</p>
    `,
  },
  {
    id: 'daily-azelaic',
    category: 'daily',
    title: 'Azelaic acid (15–20%)',
    tldr: 'Comparable to hydroquinone for melasma in RCTs, usable in pregnancy, and an acne treatment — the pregnancy-safe pigment workhorse.',
    evidence: 'moderate',
    focus: 'pigment',
    sessions: 'AM or PM',
    cost: '€60–150/year',
    bodyHtml: `
      <p>For the decade's signature pigment problem, azelaic acid is the topical you can use through pregnancy and breastfeeding. A <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10339666/" rel="noopener nofollow" target="_blank">meta-analysis of six RCTs</a> (673 patients) found it comparable to hydroquinone for melasma; the classic double-blind trial in contraceptive users reached the same "not better, but valid" verdict. It also treats acne and post-acne marks. Slow, tingly at first, and genuinely useful.</p>
    `,
  },
  {
    id: 'daily-eye-cream',
    category: 'daily',
    title: '"Eye creams"',
    tldr: 'No trial shows an eye cream outperforms the same actives from your face routine applied carefully. Dark circles tracked with poor sleep in the one study that looked.',
    evidence: 'limited',
    focus: 'hype',
    sessions: '—',
    cost: '€40–150 (skip)',
    bodyHtml: `
      <p>Nothing in an eye cream is unavailable in a smaller tube from your face routine, and no trial shows the category outperforming a low-strength retinoid, vitamin C and sunscreen applied near the orbit. Under-eye changes in the 30s are thin skin, vascular show, pigment and the first orbital-rim change — and in a <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/ced.12455" rel="noopener nofollow" target="_blank">60-woman study</a>, poor sleepers scored worse on intrinsic aging measures including dark circles. Sleep, SPF and your existing actives are the evidence-adjacent moves.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-toxin-lines',
    category: 'clinic',
    title: 'Botulinum toxin for lines that stay at rest',
    tldr: 'One of the best-proven cosmetic treatments — multiple phase-3 RCTs, 3–4 months per session. The 30s trigger is the first resting line, not an age.',
    evidence: 'strong',
    focus: 'lines',
    sessions: '2–3×/year',
    downtime: 'None',
    cost: '€250–450/session',
    bodyHtml: `
      <p>For glabellar, forehead and crow's-feet lines you already make, toxin is licensed on multiple phase-3 randomized trials, with effects lasting three to four months; older work even reported better outcomes in 30–50-year-olds "due to greater skin plasticity". Treating the muscle once a line has begun to imprint at rest prevents it etching deeper — which toxin alone cannot undo later.</p>
      <p>The rational 30s trigger: the first line that is still there when your face is relaxed, or unusually strong glabellar animation. Two or three sessions a year, not four — no evidence supports more frequent "preventive" dosing.</p>
    `,
  },
  {
    id: 'clinic-spironolactone',
    category: 'clinic',
    title: 'Spironolactone for adult female acne',
    tldr: 'The SAFA trial: 410 women, 24 weeks, publicly funded — clear improvement over placebo. The evidence-based answer to hormonal breakouts in your 30s.',
    evidence: 'strong',
    focus: 'acne',
    sessions: 'Daily, 6+ months',
    cost: '€10–30/month + Rx',
    bodyHtml: `
      <p>Adult acne is a 30s staple, and the <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10599794/" rel="noopener nofollow" target="_blank">SAFA trial</a> (BMJ 2023 — pragmatic, double-blind, NIHR-funded, 410 women, spironolactone 50→100 mg/day for 24 weeks) settled it: significantly better acne-quality-of-life scores and a fivefold higher odds of investigator-rated success at 12 weeks, with headache and light-headedness the main side effects. Combine with topical adapalene ± benzoyl peroxide; reliable contraception is required; isotretinoin remains the option for scarring disease.</p>
    `,
  },
  {
    id: 'clinic-tranexamic',
    category: 'clinic',
    title: 'Oral tranexamic acid for melasma',
    tldr: 'Meta-analyses of RCTs show the largest melasma-score reductions of any route — prescription-only, thrombosis screening required, not in pregnancy.',
    evidence: 'strong',
    focus: 'pigment',
    sessions: '8–12 wk courses',
    cost: '€20–60/month + Rx',
    bodyHtml: `
      <p>Post-pregnancy or pill-triggered melasma that outlasts sunscreen and azelaic acid has a strong option: <a href="https://pubmed.ncbi.nlm.nih.gov/38843906/" rel="noopener nofollow" target="_blank">meta-analyses of RCTs</a> show oral tranexamic acid produces the largest reductions in melasma severity scores, and as an add-on to triple-combination cream it improves results and lowers recurrence. It is a prescription medicine with real exclusions — personal or family clotting history, and caution with combined hormonal contraception — and it is off-limits in pregnancy and breastfeeding. Dermatologist-supervised, and paired with fanatical visible-light photoprotection.</p>
    `,
  },
  {
    id: 'clinic-nafl',
    category: 'clinic',
    title: 'Non-ablative fractional laser (Clear + Brilliant class)',
    tldr: 'Sponsor-run open-label studies show modest improvements in early texture and lentigines with little downtime. As a preventive "subscription", no evidence at all.',
    evidence: 'emerging',
    focus: 'pigment',
    sessions: '1–3 for a real target',
    downtime: '1–2 days',
    cost: '€250–400/session',
    bodyHtml: `
      <p>The 1440/1927 nm devices are marketed at 20s–30s "maintenance". The evidence: manufacturer-sponsored, open-label studies in adults 18–65 reporting improved tone, texture, fine lines and pore counts (<a href="https://pubmed.ncbi.nlm.nih.gov/39190540/" rel="noopener nofollow" target="_blank">2024 study</a>), and a favourable safety review — but no sham- or untreated-controlled trial, no long-term outcome, and nothing showing <em>prevention</em>. For a 30-something with real early lentigines or texture change, one short course is defensible after sunscreen and a retinoid; as a standing subscription, it is marketing. (More in our <a href="/laser-ipl">laser guide</a>.)</p>
    `,
  },
  {
    id: 'clinic-baby-botox',
    category: 'clinic',
    title: '"Preventive" / "baby" Botox before lines exist',
    tldr: 'Rests on one identical-twin case report; a 2025 systematic review found no dedicated trials in anyone under 35.',
    evidence: 'limited',
    focus: 'hype',
    sessions: '—',
    cost: '€250–450/session',
    bodyHtml: `
      <p>The preventive claim has exactly one human anchor: <a href="https://pubmed.ncbi.nlm.nih.gov/17116793/" rel="noopener nofollow" target="_blank">Binder's identical twins</a> — one treated two or three times a year for 13 years, the other twice ever; the treated twin had no imprinted forehead or glabellar lines at rest. One pair, reported by a toxin clinician. A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12372128/" rel="noopener nofollow" target="_blank">2025 systematic review</a> of toxin's preventive role found nine heterogeneous studies, several of them intradermal "micro-toxin" for skin quality, and <strong>no dedicated trials in under-35 populations</strong> — with long-term muscle adaptation, tolerance, psychology and cost-effectiveness all unresolved. Plausible mechanism; unproven practice; a decade of bills.</p>
    `,
  },
  {
    id: 'clinic-early-filler',
    category: 'clinic',
    title: 'Early "preventive" filler',
    tldr: 'No preventive evidence — and MRI shows HA filler persisting up to 15 years at ~2.8× its injected volume. Annual top-ups from 30 accumulate.',
    evidence: 'limited',
    focus: 'hype',
    sessions: '—',
    cost: '€300–600/syringe',
    bodyHtml: `
      <p>No study has tested hyaluronic-acid filler as prevention of volume loss. What imaging has tested is the "it dissolves in a year" premise on which early filler is sold: a <a href="https://journals.lww.com/prsgo/fulltext/2024/07000/hyaluronic_acid_filler_longevity_in_the_mid_face_.36.aspx" rel="noopener nofollow" target="_blank">review of 33 MRI studies</a> found midface filler persisting for years as the rule, and a <a href="https://www.ovid.com/jnls/prsgo/fulltext/10.1097/gox.0000000000007894~longevity-and-volume-expansion-of-hyaluronic-acid-dermal" rel="noopener nofollow" target="_blank">3D-MRI study</a> detected filler up to 15 years after injection at volumes averaging 2.8× the amount injected. Someone "maintaining" annually from 30 may carry many syringes by 40 — the mechanism behind the overfilled young face. Filler is for a deficit you can see (our <a href="/fillers">filler guide</a>), not insurance.</p>
    `,
  },
  {
    id: 'clinic-biostimulators',
    category: 'clinic',
    title: 'Early biostimulators (Sculptra, Radiesse, "skin boosters")',
    tldr: 'No preventive trials in the 30s, and — unlike HA — no enzyme to undo them.',
    evidence: 'limited',
    focus: 'hype',
    sessions: '—',
    cost: '€500–900/session',
    bodyHtml: `
      <p>Poly-L-lactic acid and calcium hydroxylapatite have their evidence for correcting established deflation in older faces; nothing tests them as prevention in the 30s, and the "age-related trends" analyses are exploratory subgroups of older cohorts. They are also irreversible — no hyaluronidase exit — which raises the bar for using them on a face that doesn't yet need volume.</p>
    `,
  },
  {
    id: 'clinic-ultherapy',
    category: 'clinic',
    title: 'Ultherapy and energy "tightening" in the 30s',
    tldr: 'The evidence sits in visibly lax 45+ faces; a 30-year-old without laxity has nothing for the device to tighten.',
    evidence: 'limited',
    focus: 'hype',
    sessions: '—',
    cost: '€2,000–4,500',
    bodyHtml: `
      <p>Microfocused ultrasound shows investigator-rated improvement in ~89% of patients in a <a href="https://academic.oup.com/asj/article/45/3/NP86/7900203" rel="noopener nofollow" target="_blank">2025 meta-analysis</a> — populations with visible laxity, mostly 45 and up. Claims that "younger patients produce more collagen" or that results last longer in the 30s come from clinic marketing, not trials. Without laxity there is no indication; the €3,000 belongs in a strength coach and a decade of sunscreen.</p>
    `,
  },
];

const health: Section[] = [
  {
    id: 'health-smoking',
    category: 'health',
    title: 'Not smoking',
    tldr: 'Twin-controlled: ~2.5 years of perceived age per 10 years of smoking, visible after five, concentrated around the mouth. No RCT is possible; this is as good as causal evidence gets.',
    evidence: 'strong',
    focus: 'prevention',
    bodyHtml: `
      <p>Smoking cannot be randomized, so the identical-twin design is the best causal evidence available — and it is stark: in <a href="https://pubmed.ncbi.nlm.nih.gov/19337100/" rel="noopener nofollow" target="_blank">186 pairs</a>, the longer a twin smoked the older she looked, with each decade adding ~2.5 years and five years enough to register; a follow-up of smoking-discordant twins found the differences concentrated in the lower two-thirds of the face. Combined with sun, tobacco is the largest modifiable driver of how old you'll look at 45. Quitting in the 30s is the highest-yield "treatment" on this page.</p>
    `,
  },
  {
    id: 'health-strength',
    category: 'health',
    title: 'Resistance training (peak bone, and skin)',
    tldr: 'Peak bone mass arrives around 30 — meta-analyses show resistance training raises spine density in premenopausal women; one trial found it thickened the dermis.',
    evidence: 'strong',
    focus: 'body',
    sessions: '2–3×/week',
    cost: '€300–1,200/year',
    bodyHtml: `
      <p>The 30s are the last decade to bank bone and the first to defend it. A <a href="https://pubmed.ncbi.nlm.nih.gov/11138958/" rel="noopener nofollow" target="_blank">meta-analysis of controlled trials</a> found resistance training raises lumbar-spine bone density in women, with premenopausal women represented in 13 studies; high-impact loading optimizes peak bone mass and the benefit is lost if training stops for six months. The skin bonus: in a <a href="https://www.nature.com/articles/s41598-023-37207-9" rel="noopener nofollow" target="_blank">16-week trial</a> of sedentary middle-aged women, both aerobic and resistance training improved elasticity, but <strong>only resistance training increased dermal thickness</strong>. Two or three sessions a week; the muscle you build now is the muscle you keep at 60.</p>
    `,
  },
  {
    id: 'health-vitamin-d',
    category: 'health',
    title: 'Vitamin D — if you\'re deficient',
    tldr: 'Around 40% of Europeans are below 50 nmol/L; correct it for bone. No evidence it changes skin aging.',
    evidence: 'moderate',
    focus: 'body',
    sessions: 'Test, then daily',
    cost: '€20–40/year',
    bodyHtml: `
      <p>Europe-wide, <a href="https://www.sciencedirect.com/science/article/pii/S0002916523119277" rel="noopener nofollow" target="_blank">about 13% of people are severely deficient and ~40% below 50 nmol/L</a>, more in winter and more in women. Correcting a measured deficiency matters for the bone you are banking this decade; supplementing sufficient people showed no benefit in large trials, and nothing links vitamin D to skin aging. Test in late winter, correct with 800–2,000 IU/day, skip the megadoses (our <a href="/supplements">supplements guide</a> has the full picture).</p>
    `,
  },
  {
    id: 'health-alcohol',
    category: 'health',
    title: 'Alcohol',
    tldr: 'Twin and survey data: avoidance tracked with younger appearance; heavy drinking with more lines and volume loss. No dose-response or trial.',
    evidence: 'emerging',
    focus: 'prevention',
    bodyHtml: `
      <p>Twins who avoided alcohol looked significantly younger, though dose wasn't captured; a <a href="https://jcadonline.com/aging-august-2019/" rel="noopener nofollow" target="_blank">3,267-woman survey</a> spanning the 30s linked heavy drinking to upper-face lines, under-eye puffiness and midface volume loss — self-reported, industry-run, observational. Consistent direction, no interventional proof. Cutting evening drinking also removes a known sleep disruptor, which the next row cares about.</p>
    `,
  },
  {
    id: 'health-sleep',
    category: 'health',
    title: 'Sleep',
    tldr: 'One 60-woman study: good sleepers had lower intrinsic-aging scores and 30% better barrier recovery. Plausible mechanism, no trial.',
    evidence: 'emerging',
    focus: 'prevention',
    bodyHtml: `
      <p><a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/ced.12455" rel="noopener nofollow" target="_blank">Oyetakin-White 2015</a> compared 30 poor sleepers (≤5 h, poor quality) with 30 good sleepers: the good sleepers had lower intrinsic-aging scores — fine lines, uneven pigment, laxity — lower water loss and 30% faster barrier recovery after tape-stripping. Small, cross-sectional, industry-collaborative. Nobody has shown that fixing sleep changes wrinkles; the barrier data make it plausible, and the downside of trying is nil.</p>
    `,
  },
  {
    id: 'health-exercise-skin',
    category: 'health',
    title: 'Aerobic exercise for skin',
    tldr: 'Twelve weeks of endurance training moved elderly skin biopsies toward younger profiles; both cardio and weights improved elasticity in middle-aged women.',
    evidence: 'emerging',
    focus: 'prevention',
    bodyHtml: `
      <p><a href="https://pubmed.ncbi.nlm.nih.gov/25902870/" rel="noopener nofollow" target="_blank">Crane 2015</a> put sedentary older adults through 12 weeks of endurance training and found their skin biopsies shifted toward younger structure, with a muscle-derived signal (IL-15) implicated; the 2023 Japanese trial above found aerobic work improved elasticity but only resistance training thickened the dermis. Two small studies in older populations, extrapolated to yours — a bonus reason to move, not the reason.</p>
    `,
  },
  {
    id: 'health-diet',
    category: 'health',
    title: 'Diet and glycation',
    tldr: 'In 2,753 people over 50, healthier diets meant fewer wrinkles in women; "sugar ages skin" is mechanism plus observation, not trial.',
    evidence: 'emerging',
    focus: 'prevention',
    bodyHtml: `
      <p>The <a href="https://www.jaad.org/article/S0190-9622(18)30487-0/abstract" rel="noopener nofollow" target="_blank">Rotterdam Study</a> photographed 2,753 people over 50 and found adherence to a healthy-diet index associated with fewer wrinkles in women, red-meat-and-snack patterns with more, fruit-dominant patterns with fewer — cross-sectional, older, and confounded by everything that travels with healthy eating. Glycation (sugar cross-linking collagen) is real biochemistry with observational skin-autofluorescence data behind it, and no dietary RCT with skin endpoints. Eat well because of the rest of your body; the skin case is plausible, not proven.</p>
    `,
  },
  {
    id: 'health-collagen',
    category: 'health',
    title: 'Collagen supplements in your 30s',
    tldr: 'Meta-analyses show small hydration/elasticity gains — that vanish in independently funded and high-quality trials, all in 40–60-year-olds.',
    evidence: 'emerging',
    focus: 'hype',
    sessions: '8–12 weeks',
    cost: '€20–45/month',
    bodyHtml: `
      <p>A <a href="https://www.amjmed.com/article/S0002-9343(25)00283-9/abstract" rel="noopener nofollow" target="_blank">2025 meta-analysis of 23 RCTs</a> (1,474 participants) found collagen peptides improved hydration, elasticity and wrinkles overall — <strong>but no effect in trials without manufacturer funding, and none in high-quality trials</strong>. Participants were typically 40–60; there is essentially no 30s data. The full accounting is in our <a href="/collagen">collagen guide</a>; for this decade, the money buys more skin in a gym membership and a retinoid.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety',
    category: 'safety',
    title: 'Pregnancy, contraception and the retinoid rules',
    tldr: 'Stop retinoids when trying to conceive; azelaic acid, vitamin C, niacinamide and mineral SPF are the pregnancy core; the pill you choose changes melasma risk.',
    bodyHtml: `
      <p>The 30s are the decade where anti-aging and reproduction share a bathroom shelf. The rules:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Topical retinoids:</strong> meta-analyses of accidental first-trimester exposure (over 2,000 exposed pregnancies in a Nordic cohort) found no substantial excess of malformations — reassurance for accidents; stop as policy when trying to conceive, because oral isotretinoin is a major teratogen and the class shares the label.</li>
        <li><strong>Oral tranexamic acid, hydroquinone, most lasers:</strong> deferred in pregnancy and breastfeeding.</li>
        <li><strong>Pregnancy-compatible core:</strong> azelaic acid, vitamin C, niacinamide, mineral sunscreen.</li>
        <li><strong>Contraception and melasma:</strong> 2025 data link fourth-generation-progestin combined pills to more than double the melasma risk, third-generation progestins to the lowest, and hormonal IUDs to lower long-term risk than pills — observational, but actionable if you're melasma-prone.</li>
        <li><strong>Postpartum shedding</strong> starts 2–4 months after delivery and usually recovers by a year; shedding that doesn't, or a widening part, deserves a check for female pattern hair loss (25% of women have it by 49).</li>
      </ul>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-retinoid-when',
    category: 'faq',
    title: 'When should I start a retinoid?',
    tldr: 'When there\'s something to treat — for most, the early-to-mid 30s.',
    bodyHtml: `
      <p>Fine lines, early sun spots, uneven texture or adult acne are the triggers; the RCTs enrolled people from age 29 with existing photodamage, and nobody has tested pure prevention on unlined 25-year-old skin. Adapalene 0.1% or tretinoin 0.025% a few nights a week is the sensible start; expect 2–8 weeks of dryness; stop when trying to conceive.</p>
    `,
  },
  {
    id: 'faq-preventive-botox',
    category: 'faq',
    title: 'Is "preventive Botox" real?',
    tldr: 'For lines you make, proven. Before lines exist, one twin case report.',
    bodyHtml: `
      <p>Toxin for existing dynamic lines is one of the best-proven cosmetic treatments. Toxin to prevent lines rests on a single identical-twin case report and a plausible mechanism; a 2025 systematic review found no trials in people under 35. Sensible trigger: the first line that stays when your face is at rest — not an age.</p>
    `,
  },
  {
    id: 'faq-eye-cream',
    category: 'faq',
    title: 'Do I need an eye cream?',
    tldr: 'No — the same actives, applied carefully, and more sleep.',
    bodyHtml: `
      <p>No trial shows an eye cream outperforming your face routine near the orbit. Dark circles were worse in poor sleepers in the one study that looked; sleep, sunscreen, a low-strength retinoid and vitamin C are the evidence-adjacent moves.</p>
    `,
  },
  {
    id: 'faq-sun-damage',
    category: 'faq',
    title: 'Can I still fix sun damage from my 20s?',
    tldr: 'Partly — sunscreen stops it worsening, retinoids reverse some, lasers clear spots.',
    bodyHtml: `
      <p>Daily sunscreen halted measurable aging over 4.5 years in under-55s; tretinoin reverses fine wrinkles and mottled pigment over 6–24 months; discrete sun spots respond to pigment lasers or IPL. What nothing reverses is bony or deep-fat change — which is why the 30s are for prevention, and why starting now is the cheapest anti-aging decision you'll make.</p>
    `,
  },
  {
    id: 'faq-early-filler',
    category: 'faq',
    title: 'Should I get filler early so I need less later?',
    tldr: 'No evidence — and filler persists for years, so early top-ups accumulate.',
    bodyHtml: `
      <p>Nothing supports the "less later" idea, and MRI shows hyaluronic-acid filler persisting up to 15 years at nearly three times its injected volume. Annual top-ups from 30 stack into the overfilled 40-year-old face. Use filler for a specific deficit you can see, on imaging-aware intervals, or not at all.</p>
    `,
  },
  {
    id: 'faq-melasma',
    category: 'faq',
    title: 'My melasma appeared with pregnancy or the pill — will it go?',
    tldr: 'Usually fades within a year; ~30% persists. Azelaic acid now, tranexamic acid later.',
    bodyHtml: `
      <p>Melasma affects roughly 36–75% of pregnancies; most fades within a year post-partum, about 30% persists. Strict visible-light-blocking sunscreen is the foundation; azelaic acid is pregnancy-safe; after breastfeeding, oral tranexamic acid (prescription, screening required) and hydroquinone-based creams are the effective options. If you're choosing contraception, hormonal IUDs carry the lowest melasma risk and fourth-generation-progestin pills the highest.</p>
    `,
  },
  {
    id: 'faq-smoking',
    category: 'faq',
    title: 'Does smoking really age my face?',
    tldr: 'About 2.5 perceived years per decade, visible after five — in identical twins.',
    bodyHtml: `
      <p>In 186 identical-twin pairs, each 10 years of smoking made the smoking twin look ~2.5 years older, with differences visible after only five years and concentrated around the mouth and in pigmentation. Combined with sun, it's the largest modifiable driver of how old you'll look at 45. Quitting is the highest-return item in this guide.</p>
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
    intro: 'What is actually changing at 30–39, and what the twin studies say you control.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'The plan',
    intro: 'The rational routine by budget, and the decade\'s classic mistakes.',
    sections: context,
  },
  {
    id: 'daily',
    title: 'Daily care, graded',
    intro: 'The prevention core — two strong-evidence habits and their supporting cast.',
    sections: daily,
  },
  {
    id: 'clinic',
    title: 'In-office: treatment vs "prejuvenation"',
    intro: 'What has trials at this age, and what is sold on a single case report.',
    sections: clinic,
  },
  {
    id: 'health',
    title: 'Lifestyle & the body',
    intro: 'Smoking, strength, sleep, diet, supplements — the inputs that compound over decades.',
    sections: health,
  },
  {
    id: 'safety',
    title: 'Pregnancy & fertility rules',
    intro: 'Where anti-aging and reproduction share a shelf.',
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
  prevention: 'Prevention',
  lines: 'Lines',
  pigment: 'Pigment',
  acne: 'Acne',
  hype: 'Hype check',
  body: 'Body',
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
