/**
 * Dry and dehydrated skin guide — single source of truth (problem template).
 *
 * Consumed by /dry-skin. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: dry skin is a barrier problem in two currencies — lipids
 * (the mortar between the outer cells: ceramides, cholesterol, fatty acids,
 * sebum on top) and water (held by natural moisturising factor, glycerol
 * and hyaluronic acid). Age takes both: the aged stratum corneum carries
 * over 30% less lipid, filaggrin and its water-binding fragments fall, sebum
 * falls hardest after menopause, surface pH rises after 55 and the barrier
 * repairs more slowly. Hot water, soap, dry heated air and daily
 * exfoliation strip what is left. The strongest evidence on this page is
 * cheap and old (urea, lactate, glycerin, a plain cream used twice a day),
 * regular use matters more than the brand, the supplements are real but
 * small and manufacturer-funded, microdroplet hyaluronic injections are the
 * one clinic treatment with an instrumented hydration trial, and the trap is
 * treating the symptom of a thyroid, a kidney, a statin or eczema craquelé
 * with a third cream.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'lipids' | 'water' | 'environment' | 'medical' | 'general';

export type SectionCategory = 'concept' | 'context' | 'home' | 'inj' | 'clinic' | 'safety' | 'faq';

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
  'Dry skin is two problems: the lipid mortar between the outer cells (ceramides, cholesterol, fatty acids and sebum) and the water those cells hold (natural moisturising factor, glycerol, hyaluronic acid). Age takes both — the aged stratum corneum carries over 30% less lipid, filaggrin and its water-binding fragments fall, sebum falls hardest after menopause, surface pH rises after 55 and barrier repair slows — and in population studies 53–60% of people over 65 have dry skin.',
  'The habits have numbers: hot water more than doubled water loss across the skin of 50 volunteers, an alkaline soap left water loss raised three days after one exposure, six hours in a heated room under 20% humidity raised forearm water loss by 27%, and one four-hour night measurably dried the skin of 32 women and kept drying it.',
  'The strongest evidence is cheap and old: 12% ammonium lactate beat a petrolatum cream and 5% lactic acid in double-blind trials in the 1980s; urea creams have decades of trials and a 40-patient randomised trial cut a dryness index by 89%; a 20% glycerin cream matched urea in 197 people with less stinging; and in an 80-patient double-blind trial every moisturiser worked — regular use mattered, the brand did not. Ceramide creams, low-molecular-weight hyaluronic acid and petrolatum each have smaller trials.',
  'Supplements hydrate a little, at a price: oral collagen pools across 26 trials in 1,721 people, oral hyaluronic acid across seven, oral ceramides across seven, flaxseed and evening primrose oil have 12-week double-blind trials, probiotics a 15-trial pooled analysis — almost all manufacturer-funded, with gains measured by a probe rather than a mirror. Microdroplet hyaluronic injections are the one clinic treatment with a 202-person controlled trial of hydration.',
  'Dry skin is sometimes a symptom: it is the commonest skin sign of an underactive thyroid (57% of 460 patients), affects about half of people on dialysis and 44% of diabetics in one series, and statins and diuretics were independently associated with whole-body dryness in 5,547 Rotterdam residents. Cracked, itching, weeping patches on the shins are eczema craquelé and need a prescription, and the stripped, stinging barrier of an over-treated face needs a month off, not another serum.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-dry',
    kind: 'Lipids',
    title: 'The mortar between the cells is thinning',
    blurb: 'The outer skin is bricks and mortar — flattened cells set in ceramides, cholesterol and fatty acids, with sebum on top. Aged stratum corneum carries over 30% less lipid, sebum falls hardest after menopause and the barrier repairs more slowly, so water escapes and the surface scales.',
  },
  {
    id: 'type-dehydrated',
    kind: 'Water',
    title: 'Less to hold the water that is there',
    blurb: 'Filaggrin and the water-binding fragments it breaks into, glycerol, the water channel aquaporin-3 and hyaluronic acid all fall with age — so the outer layer binds less water even under enough oil. Dehydration crinkles, dulls and tightens, and oily skin gets it too.',
  },
  {
    id: 'type-environment',
    kind: 'Habits & air',
    title: 'Hot water, soap and dry air take the rest',
    blurb: 'Hot water doubles water loss across the skin, alkaline soap raises its pH and leaves the barrier leaking for days, heated rooms under 20% humidity pull water out within hours, and daily acids and scrubs remove the mortar that is left.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'dry-anatomy',
    category: 'concept',
    title: 'What "dry" and "dehydrated" actually mean',
    tldr: 'The stratum corneum is bricks and mortar: flattened cells that hold water through natural moisturising factor, set in lipid layers of ceramides, cholesterol and fatty acids that keep the water in. "Dry" is the mortar failing (lipids); "dehydrated" is the bricks losing their water (humectants); most ageing skin has both, and a probe measures each.',
    bodyHtml: `
      <p>The outer layer of the skin is a wall of flattened dead cells — the bricks — set in a mortar of lipids arranged in sheets: ceramides, cholesterol and free fatty acids in roughly equal measure, with sebum from the glands spread on top. The bricks hold water through natural moisturising factor, a mix of amino acids and their derivatives released when the protein filaggrin breaks down, together with glycerol, urea, lactate and salts; the mortar keeps that water from evaporating (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7138575/" rel="noopener nofollow" target="_blank">epidermal ageing review</a>). Two things can fail. When the lipid mortar runs short — with age, after menopause, after soap and hot water — water escapes, the cells curl and the surface turns rough, scaly and tight: dry skin, xerosis in the clinic, the diagnosis the German position paper defines on clinical grounds and calls a cardinal symptom of many internal diseases (<a href="https://onlinelibrary.wiley.com/doi/10.1111/ddg.13906" rel="noopener nofollow" target="_blank">position paper</a>). When the bricks lack water-binding material — less filaggrin, less hyaluronic acid, less glycerol — the surface crinkles, dulls and tightens even under enough oil: dehydrated skin, which oily and breakout-prone faces get as readily as dry ones. Most ageing skin has both, and the shelf's split into "dry" and "dehydrated" maps onto the two ingredient families that address them, occlusive lipids and humectants. Each half can be measured — a capacitance probe reads surface water, an evaporimeter reads the water escaping, and Raman spectroscopy now reads the water profile through the depth of the layer (<a href="https://onlinelibrary.wiley.com/doi/10.1111/ics.12990" rel="noopener nofollow" target="_blank">dry-skin measurement study</a>) — which is why the trials on this page report numbers and the labels report adjectives.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'How common — and why age does it',
    tldr: '55.6% of 756 French primary-care patients over 65 and 60% of 5,547 Rotterdam residents over 50 had dry skin; a 28-study pooled estimate is 53%. Age halves the barrier\'s reserves: over 30% less lipid, less filaggrin, sebum, glycerol and aquaporin-3, a surface pH that rises after 55, and slower repair after every insult.',
    bodyHtml: `
      <p>In a national study of 756 French patients aged 65 and over, general practitioners scored dry skin in 55.6%, with the odds higher in women (1.8×), in people on drugs that can dry the skin (2.2×) and in anyone with a history of atopic eczema (3.6×) (<a href="https://pubmed.ncbi.nlm.nih.gov/22104182/" rel="noopener nofollow" target="_blank">primary-care study</a>). In the Rotterdam cohort, physicians graded 60% of 5,547 middle-aged and elderly residents as having dry skin, a fifth of them generalised; age, female sex, skin colour, body-mass index, outside temperature, eczema and past chemotherapy predicted it, smoking, statins and diuretics predicted the whole-body form, and daily cream use went with less of the localised kind (<a href="https://pubmed.ncbi.nlm.nih.gov/30586613/" rel="noopener nofollow" target="_blank">Rotterdam study</a>). A 2023 pooled analysis of 28 studies puts the prevalence in older adults at 53%, highest in nursing homes and on the lower legs (<a href="https://pubmed.ncbi.nlm.nih.gov/37844538/" rel="noopener nofollow" target="_blank">meta-analysis</a>); among 3,875 postmenopausal American women examined for NHANES I, 36% had clinically dry skin (<a href="https://pubmed.ncbi.nlm.nih.gov/9080894/" rel="noopener nofollow" target="_blank">NHANES I</a>).</p>
      <p>The physiology explains it. Aged stratum corneum carries over 30% less total lipid than young; filaggrin and its water-binding breakdown products fall; sebum, glycerol and the water channel aquaporin-3 all decline; the surface pH starts rising at 55 and is markedly higher over 70, which disables the enzymes that build the lipid mortar; and after any insult the barrier takes longer to repair (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7138575/" rel="noopener nofollow" target="_blank">epidermal ageing review</a>). It matters beyond looks: in a cluster-randomised trial across 984 aged-care residents, moisturising the limbs twice a day roughly halved skin tears — 5.8 against 10.6 per 1,000 bed-days (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7950547/" rel="noopener nofollow" target="_blank">skin-tear trial</a>) — and in nursing-home residents itch and poor sleep travel together (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6805713/" rel="noopener nofollow" target="_blank">itch and sleep study</a>).</p>
    `,
  },
  {
    id: 'why-hard',
    category: 'concept',
    title: 'Why the shelf gets this wrong',
    tldr: 'Dryness sells hydration, and the shelf sells hyaluronic serums to skin short of lipid, rich balms to skin short of water, acids to a barrier already stripped, and none of it to the shins where age actually dries. In an 80-patient double-blind trial every moisturiser worked and regular use was what mattered; some creams, tested for seven weeks, made normal skin leak more.',
    bodyHtml: `
      <p>Dry skin is the most product-responsive complaint on this site and the most mis-sold. An 80-patient randomised double-blind trial pitted a growth-factor cream, its vehicle and four best-selling therapeutic moisturisers against each other for four weeks: every one improved the xerosis scores and the probe readings, and the authors concluded that consistent, regular use matters far more than a moisturiser's particular formulation (<a href="https://pubmed.ncbi.nlm.nih.gov/26563519/" rel="noopener nofollow" target="_blank">moisturiser trial</a>). The 28-study meta-analysis reaches the same place — humectant-containing leave-on products and structured regimens are what help (<a href="https://pubmed.ncbi.nlm.nih.gov/37844538/" rel="noopener nofollow" target="_blank">meta-analysis</a>). Composition is not nothing, though: in 78 volunteers treating one forearm for seven weeks, three simplified creams and a lipid-free gel raised water loss and irritant sensitivity in normal skin while a 5% urea cream lowered both (<a href="https://pubmed.ncbi.nlm.nih.gov/17300239/" rel="noopener nofollow" target="_blank">seven-week trial</a>), so the €90 serum can be worse than the €9 cream. The real failures are elsewhere: not applying anything to the legs where dryness starts, showering hot with soap and then buying a product for the result, exfoliating a stripped barrier, and treating the dry skin of a thyroid, a kidney or a statin with a third cream. The plan on this page climbs the other way: rule out the cause, fix the habits, use a plain cream twice a day, choose the active for your half, and buy the clinic rung only for the face that skincare cannot reach.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-dry',
    category: 'context',
    title: 'Rough, scaly, tight — the lipid half (xerosis)',
    tldr: 'Fine white scale on the shins, forearms and cheeks, a tight pull after washing, itch in winter, worse with every hot shower — the mortar between the cells is short of lipid and water is escaping. Lipids (ceramide-and-cholesterol creams, petrolatum), humectants that also soften scale (urea, lactate), and fewer insults.',
    focus: 'lipids',
    bodyHtml: `
      <p>Draw a fingernail lightly down the shin: a white line that lingers is scale lifting off a dry surface. Skin that pulls tight after washing, shows fine white flakes on the shins, forearms and the sides of the face, itches when the heating comes on and looks matte and finely cracked under a low light is the lipid type — the aged stratum corneum with over 30% less lipid, less sebum on top and a surface pH too high for the enzymes that rebuild the mortar (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7138575/" rel="noopener nofollow" target="_blank">epidermal ageing review</a>). It starts on the legs — in the nursing-home trial the legs were drier than arms and trunk, and the pooled prevalence is highest on the lower limbs (<a href="https://pubmed.ncbi.nlm.nih.gov/28214613/" rel="noopener nofollow" target="_blank">nursing-home trial</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/37844538/" rel="noopener nofollow" target="_blank">meta-analysis</a>) — which is why the face-only routine misses it. The tools are lipid creams that mimic the mortar, a pH around 4 that lets the skin make its own (in 20 elderly subjects a pH-4 emulsion lengthened the lipid layers and raised hydration in four weeks; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6593431/" rel="noopener nofollow" target="_blank">pH-4 trial</a>), urea or lactate to dissolve the scale and hold water, and petrolatum over the worst of it at night. The <a href="/ceramides">ceramide guide</a> grades the lipid creams by formulation.</p>
    `,
  },
  {
    id: 'type-dehydrated',
    category: 'context',
    title: 'Crinkled, dull, tight but oily — the water half',
    tldr: 'Pinch the cheek: fine horizontal crinkles that vanish on release are water missing from the outer layer, and they appear on oily, breakout-prone skin as readily as on dry. Wants humectants (glycerin, hyaluronic acid, urea) sealed with a light cream, gentler cleansing and fewer actives — and responds within days.',
    focus: 'water',
    bodyHtml: `
      <p>Pinch a fold of cheek skin gently and look at the surface: fine horizontal crinkles that vanish when released are water missing from the stratum corneum, and they show on the oily T-zone as readily as on a dry cheek. Skin that is tight after cleansing and shiny by noon, that drinks moisturiser and wants more an hour later, that looks dull and finely lined in a way sleep does not fix, is dehydrated rather than dry: the bricks have too little to bind water with — less filaggrin and natural moisturising factor, less glycerol, less aquaporin-3, less hyaluronic acid (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7138575/" rel="noopener nofollow" target="_blank">epidermal ageing review</a>) — usually with a cleanser or an acid stripping what remains. In trials, dry skin reads in the low 20s on a capacitance probe and treated skin in the 50s (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13158435/" rel="noopener nofollow" target="_blank">split-leg trial</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/38829483/" rel="noopener nofollow" target="_blank">hyaluronic lotion trial</a>). The tools are humectants — glycerin, hyaluronic acid, urea at low strength — under a light cream that stops them evaporating, a cleanser that does not foam, water that is not hot, and one active at a time. Adding a rich balm to dehydrated oily skin clogs it; adding a gel serum to truly dry skin does nothing; most faces over 45 want a humectant and a lipid together.</p>
    `,
  },
  {
    id: 'type-environment',
    category: 'context',
    title: 'Winter, heating, hot showers and the over-cleansed face',
    tldr: 'Dryness that arrives with the heating, lives on the shins and the backs of the hands and eases in a humid summer is the environment type; dryness that arrived with a new cleanser, an acid or a retinoid is self-inflicted. Both respond to the same four changes within a fortnight.',
    focus: 'environment',
    bodyHtml: `
      <p>Note when it started and where it lives. Dryness that tracks the heating season, worsens after a shower and lives on the shins, forearms and backs of the hands is the environment type, and the environment has been measured: low humidity and low temperature impair shedding, thin the water content of the outer layer, reduce elasticity and increase roughness (<a href="https://pubmed.ncbi.nlm.nih.gov/26449379/" rel="noopener nofollow" target="_blank">humidity review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/27306376/" rel="noopener nofollow" target="_blank">ambient humidity review</a>); six hours in a heated room under 20% humidity raised forearm water loss by 27% in a Korean split-body study (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10264749/" rel="noopener nofollow" target="_blank">winter indoor study</a>); hot water more than doubled water loss across the skin of 50 volunteers (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8778033/" rel="noopener nofollow" target="_blank">water-exposure study</a>); one exposure to an alkaline soap left water loss raised three days later (<a href="https://pubmed.ncbi.nlm.nih.gov/30160004/" rel="noopener nofollow" target="_blank">four-soap study</a>). Dryness that arrived with a new product is the same barrier injury from the other side — about 83–86% of people starting tretinoin get irritation and dryness (<a href="https://pubmed.ncbi.nlm.nih.gov/23135655/" rel="noopener nofollow" target="_blank">tretinoin split-face study</a>), and foaming cleansers, acids, brushes and scrubs strip the mortar faster than a cream can replace it. Both versions respond to the same four changes — lukewarm, short, a syndet, a cream within minutes of drying — within a fortnight, and the winter version to humidity as well.</p>
    `,
  },
  {
    id: 'type-medical',
    category: 'context',
    title: 'When dry skin is a symptom: thyroid, kidneys, diabetes, drugs and eczema craquelé',
    tldr: 'Dryness that is everywhere, new, itchy at night or came with a prescription is a symptom until proven otherwise: xerosis affects 57% of people with an underactive thyroid, half of those on dialysis and 44% of diabetics in series; statins and diuretics went with whole-body dryness in 5,547 Rotterdam residents; cracked, weeping patches on the shins are eczema craquelé.',
    focus: 'medical',
    bodyHtml: `
      <p>Xerosis was the commonest skin sign in 460 consecutive patients with hypothyroidism (57%), ahead of hair loss, and the reviews trace it to less sebum, less sweating and a slower epidermis (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3726898/" rel="noopener nofollow" target="_blank">hypothyroidism series</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10214500/" rel="noopener nofollow" target="_blank">thyroid skin review</a>); it affected 52% of 143 patients on dialysis (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3398619/" rel="noopener nofollow" target="_blank">dialysis series</a>) and 44% of 100 diabetics with skin complaints (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2856371/" rel="noopener nofollow" target="_blank">diabetes series</a>). In the Rotterdam cohort statins and diuretics were independently associated with generalised dryness (<a href="https://pubmed.ncbi.nlm.nih.gov/30586613/" rel="noopener nofollow" target="_blank">Rotterdam study</a>), and in French primary care drugs that can dry the skin more than doubled the odds (<a href="https://pubmed.ncbi.nlm.nih.gov/22104182/" rel="noopener nofollow" target="_blank">primary-care study</a>). Itch is the commonest skin complaint of old age and reflects the same dry, leaky, inflamed barrier (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4051285/" rel="noopener nofollow" target="_blank">ageing skin and itch review</a>). And when dry shins crack into a red, itching "crazy-paving" pattern, that is eczema craquelé — inflamed dry skin — which needs a short course of prescription treatment before any moisturiser can hold (<a href="https://www.ncbi.nlm.nih.gov/sites/books/n/statpearls/article-20893/" rel="noopener nofollow" target="_blank">StatPearls</a>). The tell is the pattern: everywhere at once, new over weeks, itching that wakes you, or a start date that matches a prescription.</p>
    `,
  },
  {
    id: 'type-menopause',
    category: 'context',
    title: 'The menopause version',
    tldr: 'Oestrogen keeps sebum, dermal hyaluronic acid and collagen up; when it falls, skin that was never dry turns tight and papery within a couple of years. In NHANES I, oestrogen users had 24% lower odds of dry skin; five years of hormone therapy raised sebum 35% in one comparison without changing hydration. Barrier care first; hormones only as a menopause decision.',
    focus: 'lipids',
    bodyHtml: `
      <p>A woman whose skin was oily or normal until her late forties and is tight, papery and prone to flaking by her early fifties has the menopause version: oestrogen supports sebaceous output, dermal hyaluronic acid and collagen, and its fall takes the lipid half and the water half at once (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.70393" rel="noopener nofollow" target="_blank">menopausal skin review</a>). Among 3,875 postmenopausal women in NHANES I, oestrogen users had 24% lower odds of clinically dry skin after adjustment for age, weight and sun (<a href="https://pubmed.ncbi.nlm.nih.gov/9080894/" rel="noopener nofollow" target="_blank">NHANES I</a>); in 98 women, about five years of oestrogen raised sebum by 35% and skin thickness by 7–15% while hydration did not differ (<a href="https://pubmed.ncbi.nlm.nih.gov/8993951/" rel="noopener nofollow" target="_blank">98-woman comparison</a>). The treatment order does not change: lipid creams, humectants, gentler washing and the supplements with trials come first, and hormone therapy is a decision about menopause — symptoms, bones, timing, clot risk — that happens to include the skin, covered in the <a href="/anti-aging-50s">50s guide</a> and graded below.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'The self-check: the pinch, the scratch, the shin and the cabinet',
    tldr: 'Four minutes: pinch the cheek for crinkles (water), scratch the shin for a white line (lipid), note where it lives and when it started, and read every label in the bathroom and the medicine cabinet. Photograph the shin in daylight. Then decide whether it is a cream problem, a habit problem or a doctor problem.',
    bodyHtml: `
      <p>Do the pinch on the cheek and the fingernail scratch on the shin, and write down the answers to four questions: where (face only, shins and hands, everywhere), when it started (the heating, a new product, a new prescription, menopause, over months), what it feels like (tight, itchy, cracking, stinging) and what touches it (the water temperature, the cleanser, every active in the cabinet, every pill). Photograph the worst patch in daylight without cream on it. Three answers sort themselves. Face-only tightness with an active list longer than three items is the over-treated type, and the treatment is subtraction. Shins, hands and winter with a hot-shower habit is the environment-and-lipid type, and the treatment is the cream habit and the four washing changes. Everywhere, new, itching at night, or dated to a prescription is the medical type, and the treatment starts with a blood test — thyroid, kidney and liver function, glucose and a blood count are what the itch reviews suggest for a new generalised dryness in an older adult (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4051285/" rel="noopener nofollow" target="_blank">ageing skin and itch review</a>) — and a medication review. Judge every change against the photograph at two weeks; nothing on this page that works takes longer than eight.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-moisturiser-regular',
    category: 'home',
    title: 'A moisturiser, twice a day, on damp skin',
    tldr: 'In an 80-patient double-blind trial every moisturiser tested improved xerosis and its probe readings — consistent use mattered, the formulation did not; a structured twice-daily regimen cut dryness scores in 133 nursing-home residents within eight weeks; twice-daily moisturising halved skin tears across 984 residents. The habit is the treatment.',
    evidence: 'strong',
    focus: 'general',
    note: 'Best for: everyone on this page — the rung under every other rung, and the one most people skip on their legs',
    sessions: 'Twice daily, within minutes of washing',
    downtime: 'None',
    cost: '€5–30 / month',
    bodyHtml: `
      <p>The one treatment with trials across brands, countries and decades is the plain act of applying a leave-on cream twice a day. Eighty patients with moderate-to-severe xerosis were randomised double-blind to six products — a recombinant growth-factor cream, its vehicle, and four best-selling therapeutic moisturisers — for four weeks: all six improved the clinical scores and the hydration and water-loss readings, with no winner (<a href="https://pubmed.ncbi.nlm.nih.gov/26563519/" rel="noopener nofollow" target="_blank">six-moisturiser trial</a>). In ten Berlin nursing homes, 133 residents averaging 84 years were randomised to one of two structured regimens — a wash product plus a leave-on lotion twice a day — or usual care, and both regimens lowered the dry-skin score against control within eight weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/28214613/" rel="noopener nofollow" target="_blank">nursing-home trial</a>); a 22-resident pilot found two of three commercial moisturisers raised outer-layer water against usual care (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10374378/" rel="noopener nofollow" target="_blank">pilot trial</a>); and across 984 aged-care residents, twice-daily moisturising of the limbs roughly halved skin tears (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7950547/" rel="noopener nofollow" target="_blank">skin-tear trial</a>). The Cochrane review of hygiene and emollient care in older residents pools six trials in 1,598 people and rates the evidence low-quality — the trials are pragmatic and unblinded — but points the same way (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6996088/" rel="noopener nofollow" target="_blank">Cochrane review</a>), and the 28-study meta-analysis finds humectant leave-on products and structured regimens are what alleviate xerosis in older adults (<a href="https://pubmed.ncbi.nlm.nih.gov/37844538/" rel="noopener nofollow" target="_blank">meta-analysis</a>).</p>
      <p>How: within three minutes of washing, on skin that is still damp, so the cream seals water in rather than sitting on a dry surface — the same advice the textbooks give for eczema craquelé (<a href="https://www.ncbi.nlm.nih.gov/sites/books/n/statpearls/article-20893/" rel="noopener nofollow" target="_blank">StatPearls</a>); legs and arms as well as the face; twice a day, because the effect of any single application is measured in hours. Which cream is the next three rows; that you use one, on the days you feel fine, is this row.</p>
    `,
  },
  {
    id: 'home-urea-lactate',
    category: 'home',
    title: 'Urea and lactate: the humectants that also soften scale',
    tldr: '12% ammonium lactate beat a petrolatum cream and 5% lactic acid in double-blind xerosis trials, holding through three weeks off treatment; urea creams at 5–10% have decades of trials — a 40-patient randomised trial cut a dryness index by 89%, 20 elderly patients cleared scale in two weeks — and 40% urea works faster still. Rough shins, heels and winter forearms first.',
    evidence: 'strong',
    focus: 'water',
    note: 'Best for: scaly, rough body skin — shins, forearms, heels, elbows — at 5–10%; 2–5% on the face',
    sessions: 'Twice daily',
    downtime: 'Stinging on cracked skin for the first days',
    cost: '€8–20 / month',
    bodyHtml: `
      <p>Urea and lactate are components of the skin's own natural moisturising factor, and at 5–12% they do two things at once: bind water in the outer layer and loosen the scale that dry skin piles up. The lactate trials are old and clean: 12% ammonium lactate lotion was significantly better than a petrolatum-based cream at reducing moderate-to-severe xerosis in a double-blind two-centre study, during treatment and after it stopped (<a href="https://pubmed.ncbi.nlm.nih.gov/3514154/" rel="noopener nofollow" target="_blank">1986 trial</a>), and better than 5% lactic acid through three weeks of twice-daily use and three weeks off (<a href="https://pubmed.ncbi.nlm.nih.gov/2808786/" rel="noopener nofollow" target="_blank">1989 trial</a>). Urea has more: in 78 volunteers a 5% urea cream lowered water loss over seven weeks where simpler creams raised it (<a href="https://pubmed.ncbi.nlm.nih.gov/17300239/" rel="noopener nofollow" target="_blank">seven-week trial</a>); urea creams reduced water loss and the skin's reaction to a detergent irritant in normal skin (<a href="https://pubmed.ncbi.nlm.nih.gov/8932589/" rel="noopener nofollow" target="_blank">urea barrier study</a>); in 40 diabetics with severe foot xerosis a 5% urea cream cut the dryness index from 1.6 to 0.2 — 89% — against a glycerol cream in 28 days (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3506450/" rel="noopener nofollow" target="_blank">diabetic-foot RCT</a>); 20 elderly patients on 10% urea cleared scale and itch within two weeks under dermoscopy (<a href="https://pubmed.ncbi.nlm.nih.gov/33934477/" rel="noopener nofollow" target="_blank">senile xerosis study</a>), and a 60-day single-arm study of a 10% urea lotion reported hydration up 55% on the probe (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12975674/" rel="noopener nofollow" target="_blank">2026 urea study</a>). Head to head, 40% urea outpaced 12% ammonium lactate in 25 patients with moderate-to-severe xerosis (<a href="https://pubmed.ncbi.nlm.nih.gov/11978141/" rel="noopener nofollow" target="_blank">urea-versus-lactate trial</a>), and a review sets out the wider record — ichthyosis, eczema, psoriasis — and the mild side effects (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8611129/" rel="noopener nofollow" target="_blank">urea review</a>).</p>
      <p>Strong, on decades of randomised trials. The rules: 5–10% on the body, 2–5% on the face, 20–40% only on heels and calluses, and expect stinging on fissured skin for the first days — in the 197-patient glycerin comparison, 24% on the urea-saline cream reported moderate or severe smarting against 10% on glycerin (<a href="https://pubmed.ncbi.nlm.nih.gov/12013198/" rel="noopener nofollow" target="_blank">glycerin-versus-urea trial</a>). The <a href="/ceramides">ceramide guide</a> grades urea the same way.</p>
    `,
  },
  {
    id: 'home-ceramides-lipids',
    category: 'home',
    title: 'Ceramide and physiological-lipid creams for the lipid half',
    tldr: 'In 24 people with senile xerosis a ceramide 1, 3, 6-II cream raised hydration and lowered water loss within 24 hours and held for a week after stopping; a ceramide cream-and-cleanser regimen improved water loss and hydration where placebo did not; a pH-4 lipid emulsion lengthened the lipid layers of 20 elderly subjects in four weeks; a ceramide cream held forearm water through six hours of heated air. The lipid half, measured in small trials.',
    evidence: 'moderate',
    focus: 'lipids',
    note: 'Best for: tight, scaly, over-cleansed or post-menopausal skin — the dry rather than the dehydrated',
    sessions: 'Twice daily',
    downtime: 'None',
    cost: '€10–40 / month',
    bodyHtml: `
      <p>Creams built on the mortar's own lipids — ceramides, cholesterol and fatty acids — are the logical treatment for a barrier short of them, and the trials, though small, measure what they claim. In 24 people with senile xerosis randomised split-shin, a cream containing ceramides 1, 3 and 6-II raised hydration and lowered water loss and pH within 24 hours of a single application, did better than a plain hydrophilic cream at every point over 28 days, and was still ahead a week after both were stopped (<a href="https://pubmed.ncbi.nlm.nih.gov/31585489/" rel="noopener nofollow" target="_blank">split-shin trial</a>). In adults with moderate eczema, a ceramide-dominant cream and cleanser improved water loss and hydration over four weeks while the placebo regimen stayed flat or worsened (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8459234/" rel="noopener nofollow" target="_blank">ceramide regimen trial</a>); two over-the-counter creams raised hydration, cut water loss and increased the skin's own ceramides on the arms and legs of 30 eczema-prone adults in four weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/37801542/" rel="noopener nofollow" target="_blank">two-cream trial</a>); and in the Korean heated-room study a ceramide cream on one forearm held water loss flat and raised hydration 73% while the untreated arm lost water (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10264749/" rel="noopener nofollow" target="_blank">winter indoor study</a>). Acidity does part of the work on its own: in 20 elderly subjects a water-in-oil emulsion at pH 4 lowered surface pH, raised hydration and lengthened and organised the lipid layers better than the same emulsion at pH 5.8 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6593431/" rel="noopener nofollow" target="_blank">pH-4 trial</a>), and a plant-oil pH-4 product raised the skin's own ceramide content in three weeks without containing any (<a href="https://pubmed.ncbi.nlm.nih.gov/27731889/" rel="noopener nofollow" target="_blank">pH-4 oil study</a>). Niacinamide raises ceramide synthesis several-fold in skin cells and increased stratum-corneum ceramides while lowering water loss in dry skin (<a href="https://pubmed.ncbi.nlm.nih.gov/10971324/" rel="noopener nofollow" target="_blank">niacinamide study</a>).</p>
      <p>Moderate: consistent, small, often manufacturer-run, and the position paper's point stands that the ratio of ceramides, fatty acids and sterols matters more than the ceramide content on the label (<a href="https://onlinelibrary.wiley.com/doi/10.1111/ddg.13906" rel="noopener nofollow" target="_blank">position paper</a>). The <a href="/ceramides">ceramide guide</a> grades the formulations and the retinoid-buffer use.</p>
    `,
  },
  {
    id: 'home-glycerin-ha',
    category: 'home',
    title: 'Glycerin, hyaluronic acid and the humectant serums',
    tldr: 'A 20% glycerin cream matched a urea-saline cream on dryness in 197 people with less stinging; in 36 nursing-home residents a low-molecular-weight hyaluronic lotion raised capacitance to 56 units against 49 for the vehicle; 0.1% hyaluronan creams raised hydration and elasticity against placebo around the eyes of 76 women. The water half — sealed with a cream.',
    evidence: 'moderate',
    focus: 'water',
    note: 'Best for: the dehydrated, oily-but-tight face — under a cream, never alone in dry air',
    sessions: 'Once or twice daily, under a cream',
    downtime: 'None',
    cost: '€10–60 / month',
    bodyHtml: `
      <p>Humectants pull water into the outer layer and hold it there; glycerol is one the skin makes less of with age (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7138575/" rel="noopener nofollow" target="_blank">epidermal ageing review</a>), and it is the cheapest ingredient in the category. In a randomised double-blind trial of 197 people with dry atopic skin, a 20% glycerin cream matched a 4% urea and 4% salt cream on dryness as judged by patients and dermatologists, with fewer stinging reactions (<a href="https://pubmed.ncbi.nlm.nih.gov/12013198/" rel="noopener nofollow" target="_blank">glycerin trial</a>). Hyaluronic acid has the newer trials: 36 nursing-home residents aged 60–80 with dry skin applied low-molecular-weight hyaluronan, high-molecular-weight hyaluronan and vehicle lotions to three sites on the leg for four weeks, and the low-molecular-weight site reached 56.4 capacitance units against 52.4 and 49.0 (<a href="https://pubmed.ncbi.nlm.nih.gov/38829483/" rel="noopener nofollow" target="_blank">hyaluronic lotion trial</a>); 76 women applied 0.1% hyaluronan creams of five molecular weights around one eye and vehicle around the other for 60 days, and every weight raised hydration and elasticity against vehicle, with the two smallest also reducing wrinkle depth (<a href="https://pubmed.ncbi.nlm.nih.gov/22052267/" rel="noopener nofollow" target="_blank">five-weight trial</a>); a 2022 review sets out the rest of the topical record (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10078143/" rel="noopener nofollow" target="_blank">topical hyaluronic review</a>).</p>
      <p>Moderate: consistent, small, industry-adjacent. The practical points: a humectant on damp skin under a cream that seals it, because a humectant alone in a dry heated room has nothing to seal; the €12 glycerin cream and the €90 hyaluronic serum are the same row; and the serum does nothing for the lipid half, which is why the tight-and-scaly type layers it under a ceramide cream rather than instead of one.</p>
    `,
  },
  {
    id: 'home-petrolatum',
    category: 'home',
    title: 'Petrolatum and occlusion ("slugging")',
    tldr: 'Petrolatum does not sit on the surface: it works between the outer cells, speeds barrier recovery, and in 36 volunteers and 13 eczema patients switched on antimicrobial peptides and barrier proteins within days. It holds water in and adds none — a 12% lactate lotion beat a petrolatum cream double-blind. The seal over a humectant, at night, on the driest patches.',
    evidence: 'moderate',
    focus: 'lipids',
    note: 'Best for: cracked heels, hands, lips and the retinoid-stripped face — over a humectant, not instead of one',
    sessions: 'Nightly on the driest areas',
    downtime: 'Greasy; can trigger breakouts on oily skin',
    cost: '€2–10 / month',
    bodyHtml: `
      <p>The oldest moisturiser is still the reference occlusive, and it is not inert. In the classic study, petrolatum applied to disrupted skin did not form a film on top: it permeated the spaces between the outer cells, and barrier recovery under it proceeded faster than in untreated skin, unlike the slowed recovery under a plastic wrap (<a href="https://www.jaad.org/article/0190-9622(92)70060-S/abstract" rel="noopener nofollow" target="_blank">1992 study</a>). In 36 healthy volunteers and 13 patients with moderate eczema, petrolatum under occlusion thickened the stratum corneum, induced the barrier proteins filaggrin and loricrin, reduced T-cell infiltrates in eczema-prone skin and switched on a panel of antimicrobial peptides several-fold (<a href="https://www.jacionline.org/article/S0091-6749(15)01194-X/fulltext" rel="noopener nofollow" target="_blank">2016 study</a>). What it cannot do is add water: in the double-blind two-centre comparison, a 12% lactate lotion outperformed a petrolatum-based cream on xerosis severity (<a href="https://pubmed.ncbi.nlm.nih.gov/3514154/" rel="noopener nofollow" target="_blank">1986 trial</a>), which is why the textbooks pair petrolatum ointments with wet skin straight after bathing (<a href="https://www.ncbi.nlm.nih.gov/sites/books/n/statpearls/article-20893/" rel="noopener nofollow" target="_blank">StatPearls</a>).</p>
      <p>Moderate: mechanistic and comparative rather than a dryness trial of its own. Used as the last layer at night over a humectant — the "slugging" of the internet, minus the ring light — on heels, hands, lips, shins and a face stripped by a retinoid, it is the cheapest useful product on this page; used on an oily, breakout-prone face it clogs.</p>
    `,
  },
  {
    id: 'home-cleansing',
    category: 'home',
    title: 'Lukewarm water, a syndet, a shorter shower',
    tldr: 'Hot water more than doubled water loss across the skin in 50 volunteers and raised its pH; an alkaline soap left water loss raised three days after a single patch; repeated washing and towelling raised water loss, pH and redness in a nursing-technique study; an acid syndet improved hydration and barrier readings in a week in elderly dry skin. Free, and worth more than any serum.',
    evidence: 'moderate',
    focus: 'environment',
    note: 'Best for: everyone — and the single change that fixes the tight, oily-but-dehydrated face',
    sessions: 'Every wash',
    downtime: 'None',
    cost: '€5–15 / month',
    bodyHtml: `
      <p>Washing is the insult most people repeat twice a day. In 50 healthy volunteers, hot-water exposure raised water loss across the skin from 25.8 to 58.6 g/m²/h and lifted surface pH and redness, cold water raised it less (to 35.0), and the authors' advice was lukewarm water and less of it (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8778033/" rel="noopener nofollow" target="_blank">water-exposure study</a>). In 20 volunteers patch-tested with four cleansers, alkaline and creamy soaps raised water loss at 24 hours and the alkaline soap was still raising it at 72, while the syndet and glycerin soaps did not (<a href="https://pubmed.ncbi.nlm.nih.gov/30160004/" rel="noopener nofollow" target="_blank">four-soap study</a>). In a study of nursing wash techniques, every wash raised water loss, repeated washing raised it further, and soap raised pH and redness most (<a href="https://pubmed.ncbi.nlm.nih.gov/18199943/" rel="noopener nofollow" target="_blank">washing-technique study</a>). In elderly patients with dry skin, a week of an acid syndet and lotion lowered water loss and raised hydration, and high water loss travelled with high pH, low hydration and low surface lipid (<a href="https://pubmed.ncbi.nlm.nih.gov/2459871/" rel="noopener nofollow" target="_blank">elderly soap-versus-syndet study</a>). The position paper's first instruction is to remove the triggers (<a href="https://onlinelibrary.wiley.com/doi/10.1111/ddg.13906" rel="noopener nofollow" target="_blank">position paper</a>).</p>
      <p>Moderate: consistent experimental studies rather than a randomised dryness trial. The four changes: water you would bathe a baby in, under ten minutes, a non-foaming cleanser at the skin's own pH (about 5) and only where you are actually dirty, pat rather than rub, and a cream within three minutes. For the dehydrated face, water alone in the morning. And no oil in the bath water — olive oil weakened the barrier of 19 volunteers in four weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/22995032/" rel="noopener nofollow" target="_blank">olive-oil study</a>).</p>
    `,
  },
  {
    id: 'home-sleep-smoke',
    category: 'home',
    title: 'Sleep and cigarettes',
    tldr: 'Thirty-two women slept four hours a night for six nights: skin hydration fell after the first short night and kept falling, with gloss, desquamation and elasticity following; in 5,547 Rotterdam residents, smokers had higher odds of dryness over the whole body. Neither is a product.',
    evidence: 'moderate',
    focus: 'environment',
    sessions: 'Nightly',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Thirty-two Korean women in their forties slept eight hours a night for six nights and then four hours a night for six more, with smartwatches checking: skin hydration was significantly lower after the first four-hour night and continued to fall through the week, and gloss, desquamation, transparency, elasticity and wrinkles worsened from day one, texture from day four (<a href="https://pubmed.ncbi.nlm.nih.gov/31692145/" rel="noopener nofollow" target="_blank">sleep-restriction study</a>). In the Rotterdam cohort, smoking was one of the factors that raised the odds of generalised dry skin, alongside statins, diuretics and poorer self-rated health (<a href="https://pubmed.ncbi.nlm.nih.gov/30586613/" rel="noopener nofollow" target="_blank">Rotterdam study</a>). Moderate — one controlled experiment and a large cohort. The <a href="/dull-skin">dull-skin guide</a> has the rest of the sleep and smoke record, including the colour change a single lost night produces.</p>
    `,
  },
  {
    id: 'home-humidity',
    category: 'home',
    title: 'Humidity: the heated room and the humidifier',
    tldr: 'Six hours in a heated room under 20% relative humidity raised forearm water loss by 27% in a Korean split-body study while a ceramide cream on the other arm held it; the physiology reviews find low humidity impairs shedding, thins the outer layer\'s water and roughens it; a humidifying mist raised outer-layer water content in the studies reviewed. Real as a mechanism, untested as a bedroom device.',
    evidence: 'emerging',
    focus: 'environment',
    note: 'Best for: the winter-only type in a centrally heated flat — bedroom at 40–50%, and a cream regardless',
    sessions: 'Winter nights',
    downtime: 'None',
    cost: '€30–150 device',
    bodyHtml: `
      <p>Heated indoor air in winter routinely falls below 20% relative humidity, and the outer layer gives up water to it. In a Korean split-body study, 20 women with normal skin sat six hours in a room at 25 °C and under 20% humidity: the untreated forearm's water loss rose 27%, pores, roughness and redness on the untreated side of the face increased, and the forearm under a ceramide cream held its water loss flat and its hydration up (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10264749/" rel="noopener nofollow" target="_blank">winter indoor study</a>). The reviews of the physiology find that low humidity impairs shedding, lowers the water content of the stratum corneum, reduces elasticity and increases roughness, that low indoor humidity goes with more eczema in epidemiological studies, and that a humidifying mist raised outer-layer water content in the intervention studies available — with no formal review possible because the studies are too different (<a href="https://pubmed.ncbi.nlm.nih.gov/26449379/" rel="noopener nofollow" target="_blank">humidity review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/27306376/" rel="noopener nofollow" target="_blank">ambient humidity review</a>). A Japanese study of a water-nanodroplet mist in an air-conditioned room kept water loss from falling over two hours but did not raise the skin's water content (<a href="https://pubmed.ncbi.nlm.nih.gov/23590637/" rel="noopener nofollow" target="_blank">mist study</a>). Emerging: the mechanism is solid, the bedroom humidifier has no randomised trial, and the ceramide cream on the other arm did more than the air ever could. Keep the tank clean.</p>
    `,
  },
  {
    id: 'home-diet-water',
    category: 'home',
    title: 'Water, linoleic acid and vitamin C',
    tldr: 'A six-study review finds extra water raises outer-layer hydration slightly, mostly in people who drank little; in 4,025 American women, higher linoleic-acid intake meant 25% lower odds of dry skin and higher vitamin C 7% lower. The plate matters more than the bottle.',
    evidence: 'emerging',
    focus: 'water',
    sessions: 'Daily',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>The drinking-water question has a systematic review: six studies of variable quality, a slight rise in outer-layer and deeper hydration after extra water, mostly in people who drank little before, with less clinical dryness and roughness and no clear effect on water loss or sebum (<a href="https://pubmed.ncbi.nlm.nih.gov/29392767/" rel="noopener nofollow" target="_blank">fluid-intake review</a>); the best of the six gave 49 women an extra two litres a day for a month and found hydration rising most in those who had drunk least (<a href="https://www.tandfonline.com/doi/pdf/10.2147/CCID.S86822" rel="noopener nofollow" target="_blank">water-intake study</a>). Diet has a larger dataset: among 4,025 women aged 40–74 examined for NHANES I, higher linoleic-acid intake — sunflower, safflower and grapeseed oils, nuts and seeds — went with 25% lower odds of senile dryness and 22% lower odds of skin atrophy, and higher vitamin C with 7% lower odds of dryness, independent of age, sun and menopause (<a href="https://pubmed.ncbi.nlm.nih.gov/17921406/" rel="noopener nofollow" target="_blank">NHANES diet study</a>). Emerging: observational for the diet, weak for the water. The oils get their own row under supplements, with trials; the <a href="/dull-skin">dull-skin guide</a> covers what diet does to colour.</p>
    `,
  },
  {
    id: 'home-oils',
    category: 'home',
    title: 'Facial and body oils',
    tldr: 'Olive oil applied twice daily for four weeks reduced the integrity of the outer layer and reddened the skin of 19 volunteers, while sunflower oil preserved it and improved hydration; the rosehip, marula and squalane sold for dry skin have no trials. Oils seal; they do not hydrate, and one of the most popular harms.',
    evidence: 'limited',
    focus: 'lipids',
    sessions: 'Over a humectant, if at all',
    downtime: 'None',
    cost: '€10–60',
    bodyHtml: `
      <p>An oil is an occlusive without the humectant, and the one good study of the category is a warning. Nineteen adults, with and without an eczema history, applied six drops of olive oil to one forearm twice a day for four to five weeks, and six drops of sunflower seed oil to the other in the second cohort: olive oil significantly reduced the integrity of the stratum corneum and caused mild redness in both groups, while sunflower oil preserved integrity, caused no redness and improved hydration (<a href="https://pubmed.ncbi.nlm.nih.gov/22995032/" rel="noopener nofollow" target="_blank">olive-and-sunflower study</a>). The position paper notes that daily sunflower oil or paraffin-based emollients lowered the risk of eczema in newborns at risk of it (<a href="https://onlinelibrary.wiley.com/doi/10.1111/ddg.13906" rel="noopener nofollow" target="_blank">position paper</a>); the rosehip, marula, argan and squalane sold to adults for dry skin have no dryness trials at all. Limited: a mechanistic study with a negative for the best-loved oil and no trial for the rest. If you like one, a linoleic-rich oil — sunflower, safflower — as the last layer over a humectant is the version the evidence tolerates.</p>
    `,
  },
];

const inj: Section[] = [
  {
    id: 'inj-microdroplet-ha',
    category: 'inj',
    title: 'Microdroplet hyaluronic injections (skin boosters)',
    tldr: 'In a 202-person randomised trial, intradermal microdroplets of a hyaluronic gel raised cheek hydration on the probe against untreated controls at one and three months, with smoothness improved in 58% against 5% at six; hydration held nine months in the earlier open study; a 12-study review pools a large hydration effect. The one clinic treatment for dryness with a real trial.',
    evidence: 'strong',
    focus: 'water',
    note: 'Best for: the dehydrated, crepey cheek that skincare cannot reach — after three months of the routine, not instead of it',
    sessions: 'Once, repeat at 6–9 months',
    downtime: '1–3 days of bumps; bruising',
    cost: '€300–600 (UK £275–550)',
    bodyHtml: `
      <p>Hundreds of tiny intradermal deposits of a lightly cross-linked hyaluronic gel across the cheeks put a humectant where a serum cannot go. The controlled evidence is one trial: 202 adults randomised to VYC-12L or no treatment, with cheek hydration measured by capacitance probe significantly higher on the treated side than the untreated at one and three months and smoothness improved in about 58% against 5% of controls at six months (<a href="https://pubmed.ncbi.nlm.nih.gov/37163665/" rel="noopener nofollow" target="_blank">VYC-12L RCT</a>); the open-label study before it found hydration lasting nine months and smoothness six (<a href="https://pubmed.ncbi.nlm.nih.gov/31749628/" rel="noopener nofollow" target="_blank">open-label study</a>). The other brand's registered trial — 53 people, two or three sessions of a small-particle hyaluronic gel — reports investigator-rated improvement in 96–100% at one month and 91–100% at 18 (<a href="https://clinicaltrials.gov/study/NCT02403986" rel="noopener nofollow" target="_blank">Skinboosters trial</a>), on the back of the 19-woman pilot that first showed elasticity and roughness improving after three micropuncture sessions (<a href="https://pubmed.ncbi.nlm.nih.gov/18384619/" rel="noopener nofollow" target="_blank">2008 pilot</a>). A 2025 review found 12 studies and pooled six, with a large but imprecise hydration effect and no change in elasticity or pigment (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11731322/" rel="noopener nofollow" target="_blank">meta-analysis</a>); a 13-study review reaches the same conclusion (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10082573/" rel="noopener nofollow" target="_blank">systematic review</a>); and a 2026 split-face trial in 24 women found texture improving for six months on the injected side (<a href="https://pubmed.ncbi.nlm.nih.gov/42420660/" rel="noopener nofollow" target="_blank">split-face RCT</a>).</p>
      <p>Strong for hydration of the face, with two honest limits: the controls are untreated rather than sham-injected, and every trial is the maker's. Expect a few days of bumps and some bruising; the <a href="/fillers">filler guide</a> covers who should inject and what goes wrong.</p>
    `,
  },
  {
    id: 'inj-collagen',
    category: 'inj',
    title: 'Oral collagen peptides',
    tldr: '26 randomised trials in 1,721 people pool to a significant gain in skin hydration; 99 Japanese women on 1 or 5 g a day raised outer-layer water and its natural moisturising factor while water loss fell; a 66-trial review of supplements finds collagen among the few with a consistent hydration effect. Small, probe-measured, and paid for by the makers.',
    evidence: 'moderate',
    focus: 'water',
    note: 'Best for: the person already taking it for elasticity — hydration is the more consistent of its outcomes',
    sessions: 'Daily, 8–12 weeks to judge',
    downtime: 'None',
    cost: '€20–60 / month',
    bodyHtml: `
      <p>Hydrolysed collagen is the supplement with the most trials for hydration. A 2023 review pooled 26 randomised trials in 1,721 people and found hydration significantly improved against placebo, with the caveat of biases in the included trials (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10180699/" rel="noopener nofollow" target="_blank">2023 meta-analysis</a>); a 19-trial review of 1,125 people agrees (<a href="https://onlinelibrary.wiley.com/doi/10.1111/ijd.15518" rel="noopener nofollow" target="_blank">19-trial review</a>); and a 2022 review of 66 supplement trials found collagen, with ceramide, among the few that raised hydration and lowered water loss with any consistency (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9201759/" rel="noopener nofollow" target="_blank">66-trial review</a>). The mechanism trial is the interesting one: 99 Japanese women aged 35–50 took 1 g, 5 g or placebo daily for 12 weeks, and the collagen groups raised outer-layer and epidermal water while water loss fell, with the natural moisturising factor in their stratum corneum measurably increased — elasticity and thickness unchanged (<a href="https://pubmed.ncbi.nlm.nih.gov/33774639/" rel="noopener nofollow" target="_blank">NMF trial</a>). Moderate: the gains are real on a probe, modest in a mirror, and the funding is the manufacturers'. The <a href="/collagen">collagen guide</a> sets out the doses and the caveats.</p>
      <p class="text-ink/60 text-sm italic">Caveat: this site sells a collagen supplement. The grading above is the same one the collagen and sagging-skin guides give the category, and it would be the same if we did not.</p>
    `,
  },
  {
    id: 'inj-oral-ha',
    category: 'inj',
    title: 'Oral hyaluronic acid',
    tldr: 'Seven randomised trials pool to significant hydration and elasticity gains but not water loss; 150 Czech adults on 120 mg a day gained 11.5% cheek hydration over placebo in 12 weeks; 40 Taiwanese and 129 Chinese adults improved on probes; 60 Spanish women on a hyaluronic matrix improved around the eyes but not against placebo on the cheek. Real, modest, manufacturer-run.',
    evidence: 'moderate',
    focus: 'water',
    note: 'Best for: the dehydrated type who wants a pill — judged at three months on a photograph, not a feeling',
    sessions: 'Daily, 120 mg, 8–12 weeks',
    downtime: 'None',
    cost: '€15–40 / month',
    bodyHtml: `
      <p>Swallowed hyaluronan is broken down in the gut and its fragments appear to reach the skin, and the trials, all recent, mostly agree. A 2025 meta-analysis of seven randomised trials found significant improvements in hydration, elasticity and wrinkle depth, with water loss, firmness and wrinkle volume trending but not significant (<a href="https://pubmed.ncbi.nlm.nih.gov/40911749/" rel="noopener nofollow" target="_blank">meta-analysis</a>). The largest trial randomised 150 Czech adults to 60 mg, 120 mg or placebo for 12 weeks: the 120 mg group's cheek hydration rose 11.5% relative to placebo, water loss fell, natural moisturising factor and epidermal thickness rose, and gloss and colour did not change — six of the authors work for the manufacturer (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12827323/" rel="noopener nofollow" target="_blank">150-adult RCT</a>). Forty Taiwanese adults on 120 mg improved outer-layer water, water loss and elasticity against placebo at 12 weeks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8308347/" rel="noopener nofollow" target="_blank">40-adult RCT</a>); 129 Chinese women, young and old, gained hydration within two to eight weeks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10661223/" rel="noopener nofollow" target="_blank">129-woman RCT</a>); and 60 Spanish women on a hyaluronic-matrix ingredient improved periocular hydration, brightness and scaliness against their own baseline, while on the cheek the placebo group's hydration rose just as much (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12256382/" rel="noopener nofollow" target="_blank">60-woman RCT</a>). The 66-trial supplement review also finds a significant hydration effect for hyaluronan (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9201759/" rel="noopener nofollow" target="_blank">66-trial review</a>). Moderate: consistent on probes, small, short, and every trial funded or staffed by a maker.</p>
      <p class="text-ink/60 text-sm italic">Caveat: the hyaluronic-matrix ingredient in that last trial (Dermial) is a component of the collagen supplement this site sells; the trial was funded by its producer and three authors are its employees. The grading would be the same if we did not.</p>
    `,
  },
  {
    id: 'inj-ceramides-oral',
    category: 'inj',
    title: 'Oral ceramides (phytoceramides)',
    tldr: 'Seven randomised trials in 426 people pool to a small-to-moderate hydration gain and lower water loss; the classic 51-woman wheat-ceramide trial improved arms and legs but not the face. Every trial manufacturer-linked; the ceramide guide grades the category the same.',
    evidence: 'moderate',
    focus: 'lipids',
    sessions: 'Daily, 12 weeks',
    downtime: 'None',
    cost: '€20–40 / month',
    bodyHtml: `
      <p>Wheat, rice and milk-derived ceramide extracts are sold as "hydration from within", and the pooled evidence is modest and real: seven randomised trials in 426 people over 6–20 weeks found a small-to-moderate rise in hydration and a small fall in water loss against placebo (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9201759/" rel="noopener nofollow" target="_blank">66-trial review</a>). The best-known trial gave 51 women 350 mg of wheat extract a day for 12 weeks and improved hydration on the arms and legs but not the face, with no difference in dermatologist-scored dryness (<a href="https://pubmed.ncbi.nlm.nih.gov/20646083/" rel="noopener nofollow" target="_blank">wheat-ceramide trial</a>). Moderate, with the footnotes the <a href="/ceramides">ceramide guide</a> spells out: every trial is manufacturer-linked, the wheat products are mostly galactolipids rather than ceramide, and no EU health claim is authorised.</p>
    `,
  },
  {
    id: 'inj-omega',
    category: 'inj',
    title: 'Flaxseed, evening primrose and the essential fatty acids',
    tldr: 'Twelve weeks of flaxseed oil lowered water loss, roughness and scaling and raised hydration in a 26-woman double-blind trial; evening primrose oil raised skin moisture 12.9% and cut roughness 21.7% against placebo in 12 weeks; in 25 patients on isotretinoin it stopped the hydration fall. Consistent, small, old.',
    evidence: 'moderate',
    focus: 'lipids',
    note: 'Best for: the dry, sensitive, easily reddened type — and anyone on isotretinoin',
    sessions: 'Daily, 12 weeks',
    downtime: 'None',
    cost: '€10–25 / month',
    bodyHtml: `
      <p>The oral route with the most consistent barrier data is not ceramides but the essential fatty acids the mortar is built from. In a randomised double-blind 12-week trial, 13 women on flaxseed oil showed lower water loss, roughness and scaling and higher hydration and smoothness, while 13 on safflower oil improved roughness and hydration later and less (<a href="https://pubmed.ncbi.nlm.nih.gov/21088453/" rel="noopener nofollow" target="_blank">flaxseed trial</a>); the companion trial found flaxseed and borage oils both improved roughness and scaling (<a href="https://www.cambridge.org/core/journals/british-journal-of-nutrition/article/intervention-with-flaxseed-and-borage-oil-supplements-modulates-skin-condition-in-women/BBCCBB4F29A6E5DCA6C7B9513C7AFA37" rel="noopener nofollow" target="_blank">flaxseed and borage trial</a>). Evening primrose oil, 3 g a day for 12 weeks, raised skin moisture 12.9%, cut water loss 7.7% and roughness 21.7% and improved elasticity and firmness against placebo in healthy adults (<a href="https://pubmed.ncbi.nlm.nih.gov/18492193/" rel="noopener nofollow" target="_blank">evening primrose trial</a>), and in 50 acne patients on isotretinoin — the drug that dries skin most reliably — the 25 who added it kept their hydration up where the other 25 lost it over nine months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9317771/" rel="noopener nofollow" target="_blank">isotretinoin trial</a>). Add the NHANES finding that dietary linoleic acid went with a quarter lower odds of dry skin in 4,025 women (<a href="https://pubmed.ncbi.nlm.nih.gov/17921406/" rel="noopener nofollow" target="_blank">NHANES diet study</a>). Moderate: small, consistent, and the cheapest supplement row on the page.</p>
    `,
  },
  {
    id: 'inj-hrt',
    category: 'inj',
    title: 'Menopausal hormone therapy',
    tldr: 'In 3,875 postmenopausal women, oestrogen users had 24% lower odds of dry skin; a 24-woman pilot found hydration improved on hormones, but the 40-woman placebo-controlled trial found no significant difference from placebo, and five years of oestrogen raised sebum 35% without changing hydration in 98 women. Sebum yes, hydration mixed — and a menopause decision.',
    evidence: 'emerging',
    focus: 'lipids',
    note: 'Best for: the woman whose skin dried at menopause and who has other reasons to consider hormone therapy',
    sessions: 'Daily; reviewed yearly',
    downtime: 'None',
    cost: '€10–40 / month',
    bodyHtml: `
      <p>For dryness specifically, the hormone evidence is weaker than for elasticity and thickness, where the <a href="/sagging-skin">sagging-skin guide</a> grades it moderate on a 15-study meta-analysis. The large observation is favourable: among 3,875 postmenopausal women examined for NHANES I, oestrogen users had 24% lower odds of clinically dry skin and about a third lower odds of wrinkling after adjustment (<a href="https://pubmed.ncbi.nlm.nih.gov/9080894/" rel="noopener nofollow" target="_blank">NHANES I</a>). The trials are small and split: a 24-woman pilot on transdermal or oral oestrogen for six months reported epidermal moisture, elasticity and thickness improved, with surface lipids rising on the combined regimens (<a href="https://pubmed.ncbi.nlm.nih.gov/11451620/" rel="noopener nofollow" target="_blank">pilot study</a>); the same group's 40-woman randomised placebo-controlled trial of oral oestradiol-dydrogesterone for seven cycles found elasticity and thickness improved while hydration only tended to and surface lipids did not, and the absolute effects did not differ significantly from placebo (<a href="https://pubmed.ncbi.nlm.nih.gov/17653959/" rel="noopener nofollow" target="_blank">placebo-controlled RCT</a>); and 98 women, half on oestrogen for about five years, showed 35% more sebum and 7–15% thicker skin than the untreated but no difference in hydration (<a href="https://pubmed.ncbi.nlm.nih.gov/8993951/" rel="noopener nofollow" target="_blank">98-woman comparison</a>). A 2025 narrative review finds the literature mostly positive and inconsistent (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.70393" rel="noopener nofollow" target="_blank">2025 review</a>). Emerging for dryness, honestly held; nobody should start hormone therapy for skin, and the Menopause Society's position statement sets out for whom the benefits outweigh the risks (<a href="https://journals.lww.com/menopausejournal/fulltext/2022/07000/the_2022_hormone_therapy_position_statement_of_the.4.aspx" rel="noopener nofollow" target="_blank">position statement</a>). The <a href="/anti-aging-50s">50s guide</a> covers the decision.</p>
    `,
  },
  {
    id: 'inj-probiotics',
    category: 'inj',
    title: 'Probiotics',
    tldr: 'A 2026 pooled analysis of 15 trials in 867 people finds hydration up and water loss down, with 87% of the trials industry-funded; the largest single trial, 110 people on Lactobacillus plantarum HY7714, raised face and hand hydration at 12 weeks; a 2022 review of the same field found no hydration benefit for lactic-acid bacteria. Strain-specific and unsettled.',
    evidence: 'emerging',
    focus: 'general',
    sessions: 'Daily, 12 weeks',
    downtime: 'None',
    cost: '€15–40 / month',
    bodyHtml: `
      <p>The gut-skin claim now has a meta-analysis and a contradiction. A 2026 review pooled 15 randomised trials in 867 people — Lactobacillus plantarum, casei, Lactococcus lactis, Bifidobacterium lactis — and found hydration higher and water loss lower on probiotics, with 13 of 15 trials funded by or supplied by the manufacturer (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13474133/" rel="noopener nofollow" target="_blank">probiotic meta-analysis</a>). Its largest trial gave 110 Koreans aged 41–59 with dry skin a plantarum strain or placebo for 12 weeks and found face and hand water content up and water loss suppressed more in the probiotic group, with elasticity up 22% (<a href="https://pubmed.ncbi.nlm.nih.gov/26428734/" rel="noopener nofollow" target="_blank">HY7714 trial</a>). The 2022 review of 66 supplement trials, pooling fewer studies, found no hydration or water-loss benefit for lactic-acid bacteria (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9201759/" rel="noopener nofollow" target="_blank">66-trial review</a>). Emerging: strain-specific, industry-run and not yet consistent.</p>
    `,
  },
  {
    id: 'inj-profhilo-pn',
    category: 'inj',
    title: 'Bioremodelling hyaluronic acid and polynucleotides',
    tldr: 'Profhilo\'s systematic review of nine studies in 278 people finds hydration and elasticity parameters improved, mostly in uncontrolled studies, with a 12-woman triple-blind trial on texture; polynucleotides rest on nine low-to-moderate-quality studies. Hydration-adjacent, priced above the microdroplet gel with the better trial.',
    evidence: 'emerging',
    focus: 'water',
    sessions: '2 sessions a month apart, every 6–9 months',
    downtime: '1–3 days of bumps',
    cost: '€300–450 per session',
    bodyHtml: `
      <p>Five boluses per side of a high-and-low-molecular-weight hyaluronic complex, or a course of fish-derived DNA fragments, are sold for skin quality on the same promise as the microdroplet gels. The Profhilo evidence is a systematic review of nine studies in 278 participants finding improvement or a trend in viscoelasticity, hydration, density and laxity ratings, most of the studies uncontrolled (<a href="https://pubmed.ncbi.nlm.nih.gov/41920062/" rel="noopener nofollow" target="_blank">systematic review</a>), and a randomised triple-blind split-face trial of 12 women on texture and dermal thickness (<a href="https://link.springer.com/article/10.1007/s00266-026-05634-4" rel="noopener nofollow" target="_blank">triple-blind RCT</a>); polynucleotides rest on nine low-to-moderate-quality studies in 219 patients reporting texture and elasticity gains (<a href="https://pubmed.ncbi.nlm.nih.gov/39645667/" rel="noopener nofollow" target="_blank">systematic review</a>). Plausible, mild side effects, and a weaker evidence base than the microdroplet trial for the same complaint; the <a href="/fillers">filler guide</a> and the <a href="/regenerative-aesthetics">regenerative guide</a> grade them.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-asteatotic-rx',
    category: 'clinic',
    title: 'Eczema craquelé: soak, smear, and a short course of steroid ointment',
    tldr: 'Cracked, red, itching "crazy-paving" patches on the shins are inflamed dry skin, not dry skin, and cream alone loses; a soak-and-smear routine — bathe, then steroid ointment on wet skin once a day — cleared over 90% of patients in four to fourteen days in the series behind the textbook advice, with an ointment emollient after. Then back to the moisturiser habit.',
    evidence: 'moderate',
    focus: 'medical',
    note: 'Best for: the itching, cracked shin that keeps you awake — a prescription, then the habit',
    sessions: '1–2 weeks of steroid ointment, then maintenance',
    downtime: 'None',
    cost: '€5–20 prescription',
    bodyHtml: `
      <p>When the lipid half fails far enough, the skin cracks into fine red fissures in a polygonal pattern — eczema craquelé, asteatotic eczema, winter eczema — most often on the shins of older adults, and it itches. The textbook treatment is frequent, generous emollient with a high oil content, petrolatum-based ointments applied to damp skin straight after bathing, with a low- to mid-potency steroid ointment on the inflamed patches; for stubborn cases the soak-and-smear method — soak or bathe, then steroid ointment on wet skin once daily — cleared more than 90% of patients in four to fourteen days in the series the advice rests on (<a href="https://www.ncbi.nlm.nih.gov/sites/books/n/statpearls/article-20893/" rel="noopener nofollow" target="_blank">StatPearls</a>). The itch of advanced age reflects the same dry, leaky, inflamed barrier and altered nerve signalling, and the reviews recommend the same barrier repair first (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4051285/" rel="noopener nofollow" target="_blank">ageing skin and itch review</a>). Over the counter, a 1% colloidal-oat eczema cream improved pH, barrier function and hydration and cut eczema scores by half in 14 days in 61 patients with mild-to-moderate eczema, where a standard moisturiser improved hydration alone (<a href="https://pubmed.ncbi.nlm.nih.gov/32484623/" rel="noopener nofollow" target="_blank">colloidal-oat trial</a>). Moderate: standard of care with series and small trials rather than large randomised ones. A steroid ointment for a fortnight is not a moisturiser for life; the maintenance is the first row on this page.</p>
    `,
  },
  {
    id: 'clinic-medical-workup',
    category: 'clinic',
    title: 'Fixing the cause: thyroid, kidneys, diabetes, statins and diuretics',
    tldr: 'Xerosis is the commonest skin sign of hypothyroidism (57% of 460 patients) and affects about half of dialysis patients and 44% of diabetics in series; statins and diuretics were independently associated with generalised dryness in 5,547 Rotterdam residents, and drugs that can cause it more than doubled the odds in French primary care. A blood test and a medication review before a third cream.',
    evidence: 'moderate',
    focus: 'medical',
    note: 'Best for: whole-body dryness that is new, itchy or arrived with a prescription',
    sessions: 'One GP visit',
    downtime: 'None',
    cost: '€0–150 for bloods',
    bodyHtml: `
      <p>The German position paper's algorithm puts this before any product: possible triggers must be avoided and comorbidities specifically treated (<a href="https://onlinelibrary.wiley.com/doi/10.1111/ddg.13906" rel="noopener nofollow" target="_blank">position paper</a>). The numbers justify it. Xerosis was the commonest sign in 460 consecutive hypothyroid patients (57%) and thyroid hormone drives keratin turnover, barrier lipid formation and sweating (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3726898/" rel="noopener nofollow" target="_blank">hypothyroidism series</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10214500/" rel="noopener nofollow" target="_blank">thyroid skin review</a>); it affected 52% of 143 patients on maintenance dialysis, with itch in 56% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3398619/" rel="noopener nofollow" target="_blank">dialysis series</a>), and was the commonest skin disorder in 100 diabetics (44%) (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2856371/" rel="noopener nofollow" target="_blank">diabetes series</a>). Drugs matter as much: statins lower the cholesterol the mortar needs and diuretics take the water, and both were independently associated with generalised dryness in the Rotterdam cohort (<a href="https://pubmed.ncbi.nlm.nih.gov/30586613/" rel="noopener nofollow" target="_blank">Rotterdam study</a>), while in French primary care any treatment that can cause xerosis raised the odds 2.2-fold (<a href="https://pubmed.ncbi.nlm.nih.gov/22104182/" rel="noopener nofollow" target="_blank">primary-care study</a>); retinoids, chemotherapy and some cancer drugs are the others. Moderate: consistent series and cohorts, and the correction is the treatment of the disease, not a skin trial. Never stop a statin or a diuretic on your own; ask whether the dose, the drug or the timing can change, and treat the skin meanwhile.</p>
    `,
  },
  {
    id: 'clinic-hydradermabrasion',
    category: 'clinic',
    title: 'Hydrating facials and hydradermabrasion',
    tldr: 'The one facial with a controlled trial (20 women, six sessions) thickened the epidermis and dermis; nothing measured hydration beyond the day, and the "deep hydration" on the menu is a serum on freshly abraded skin. An afternoon of plump — not a treatment for dryness, and the wrong thing for a stripped barrier.',
    evidence: 'emerging',
    focus: 'water',
    note: 'Best for: the dehydrated, intact surface before an event — with the retinoid paused and never on a stinging face',
    sessions: '1 before an event; 6 for the trial effect',
    downtime: 'None',
    cost: '€130–250 per session (UK £120–200)',
    bodyHtml: `
      <p>A vacuum tip abrades the surface while a serum is pushed into it, and the effect on a dehydrated face — plump, smooth, briefly glassy — is real for an afternoon because the humectant is sitting in a freshly thinned outer layer. The trial behind the category randomised 20 women to six sessions with an antioxidant serum or the same serum by hand and found the epidermis and papillary dermis thicker in the treated group with fewer fine lines and smaller pores (<a href="https://pubmed.ncbi.nlm.nih.gov/19146604/" rel="noopener nofollow" target="_blank">hydradermabrasion RCT</a>); a 2024 study images the surface change with optical coherence tomography (<a href="https://onlinelibrary.wiley.com/doi/10.1111/srt.13684" rel="noopener nofollow" target="_blank">imaging study</a>). Neither measured hydration a week later, and abrading a barrier that is already short of lipid is the mistake this whole page is about. Emerging for skin quality, not a treatment for dryness; the <a href="/dull-skin">dull-skin guide</a> grades it for what it does do.</p>
    `,
  },
  {
    id: 'clinic-masks-mists',
    category: 'clinic',
    title: 'Sheet masks, facial mists and "skin flooding"',
    tldr: 'A wet mask hydrates the outer layer for as long as it is wet; a water mist held water loss steady in an air-conditioned room without raising the skin\'s water content; nothing sold as flooding or a mask has a trial in dry skin. Pleasant, brief, and evaporation takes the water with it unless a cream follows.',
    evidence: 'limited',
    focus: 'water',
    sessions: 'Whenever',
    downtime: 'None',
    cost: '€2–15 each',
    bodyHtml: `
      <p>Water on the surface hydrates the stratum corneum while it is there and leaves with it, taking some of the skin's own water as it evaporates unless something seals it — which is why a bath dries you and a bath followed by cream does not. A Japanese study of a water-nanodroplet mist in an air-conditioned room found it kept water loss from falling over two hours but did not raise the skin's water content (<a href="https://pubmed.ncbi.nlm.nih.gov/23590637/" rel="noopener nofollow" target="_blank">mist study</a>), and no sheet mask, essence-layering routine or "flooding" protocol has a trial in dry skin. Limited. Used as the wet step under a humectant and a cream, a mask is a pleasant way to do what the first row already does; used as the treatment, it is a twenty-minute effect at a per-use price.</p>
    `,
  },
  {
    id: 'clinic-led',
    category: 'clinic',
    title: 'LED and "hydrating" light',
    tldr: 'Red and near-infrared light has a 136-person trial for roughness and collagen density, not for hydration; no LED trial measures the water content of dry skin. Nothing to do with the barrier.',
    evidence: 'limited',
    focus: 'general',
    sessions: '3–5× a week',
    downtime: 'None',
    cost: '€200–500 device',
    bodyHtml: `
      <p>Low-level red and near-infrared light has a real trial — 136 volunteers, improved roughness and collagen density on ultrasound (<a href="https://journals.sagepub.com/doi/10.1089/pho.2013.3616" rel="noopener nofollow" target="_blank">Wunsch &amp; Matuschka 2014</a>) — and no trial at all of the outer layer's water or lipid. A mask that warms the face for ten minutes may feel hydrating and does nothing for the barrier; sold for dry skin, it is limited. The <a href="/red-light-therapy">red-light guide</a> covers what the light does have evidence for.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-over-treatment',
    category: 'safety',
    title: 'Dry from your own routine: retinoids, acids, scrubs and double cleansing',
    tldr: 'About 83–86% of people starting tretinoin get irritation and dryness; acids, benzoyl peroxide, foaming cleansers, brushes and scrubs strip the mortar the retinoid is already thinning; and a stinging, shiny, tight, flaking face is a barrier injury that needs a month of ceramide cream and a paused active, not a hydrating acid. The retinoid "sandwich" halves the dryness without halving the drug.',
    bodyHtml: `
      <p>The commonest cause of a dry face in someone who spends money on it is the routine. In a randomised split-face study of healthy volunteers on tretinoin 0.05%, about 83–86% developed irritation on both sides; on the side that also received a ceramide-precursor moisturiser it was predominantly mild, and the volunteers preferred it (<a href="https://pubmed.ncbi.nlm.nih.gov/23135655/" rel="noopener nofollow" target="_blank">tretinoin split-face study</a>). Isotretinoin lowered hydration and sebum over nine months in a trial of 50 acne patients (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9317771/" rel="noopener nofollow" target="_blank">isotretinoin trial</a>). Add a glycolic serum, a foaming double cleanse, a brush and a weekly scrub to a retinoid and the mortar is removed faster than an ageing epidermis can rebuild it — and the face that results is tight, shiny, red, stinging and flaking, and reads as "dry" on every quiz. The treatment is subtraction: pause every active for two to four weeks, wash with water or a syndet, use a ceramide cream twice a day and petrolatum at night, then reintroduce the retinoid alone, twice a week, between two layers of moisturiser — the sandwich — and never add an exfoliating acid to a retinoid you are still adjusting to. The <a href="/dull-skin">dull-skin guide</a> covers the over-exfoliated barrier; the <a href="/ceramides">ceramide guide</a> grades the buffering creams.</p>
    `,
  },
  {
    id: 'safety-not-all-moisturisers',
    category: 'safety',
    title: 'Not every moisturiser helps — some raise water loss',
    tldr: 'Seventy-eight volunteers used one of five creams on one forearm for seven weeks: three simplified creams and a lipid-free gel raised water loss and irritant sensitivity in normal skin, while the 5% urea cream lowered both. A moisturiser is a barrier drug in a jar, and composition — not brand, price or "dermatologist-tested" — decides the direction.',
    bodyHtml: `
      <p>The reassuring 80-patient trial found every therapeutic moisturiser worked on dry skin; the unsettling 78-volunteer trial found what some do to normal skin. One forearm was treated for seven weeks with one of three simplified creams (hydrocarbon or vegetable-oil based, one with 5% urea), a lipid-free gel or an ordinary 5% urea cream: the simplified creams and the gel raised water loss and the skin's reaction to a detergent irritant, one lowered capacitance, and only the ordinary urea cream improved both (<a href="https://pubmed.ncbi.nlm.nih.gov/17300239/" rel="noopener nofollow" target="_blank">seven-week trial</a>); the earlier urea study had found the same split between creams with urea and without (<a href="https://pubmed.ncbi.nlm.nih.gov/8932589/" rel="noopener nofollow" target="_blank">urea barrier study</a>). Olive oil, the kitchen's moisturiser, weakened the barrier in four weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/22995032/" rel="noopener nofollow" target="_blank">olive-oil study</a>). None of this is a reason to stop moisturising dry skin; it is a reason to buy on ingredients — urea, glycerin, lactate, ceramides with cholesterol and fatty acids, petrolatum — rather than on a claim, to prefer fragrance-free, and to test a new cream on one forearm for two weeks against the other before it goes on the face. Skin does not become "dependent" on a moisturiser; a stripped barrier simply shows itself again when the cream stops, which is the barrier's problem, not the cream's.</p>
    `,
  },
  {
    id: 'safety-red-flags',
    category: 'safety',
    title: 'Red flags: cracks, weeping, itch that wakes you, dryness everywhere',
    tldr: 'Fissured, red or weeping patches, itch that wakes you, dryness that spread over the whole body in weeks, or dryness with weight change, fatigue or a new prescription are doctor problems — eczema craquelé, an underactive thyroid, kidney disease, diabetes, iron deficiency or a drug, and rarely lymphoma. Itch is the commonest skin complaint of old age and travels with poor sleep.',
    bodyHtml: `
      <p>Most dry skin is a cream problem. The versions that are not: skin that has cracked into red or weeping fissures (eczema craquelé, which needs a prescription before any emollient can hold — <a href="https://www.ncbi.nlm.nih.gov/sites/books/n/statpearls/article-20893/" rel="noopener nofollow" target="_blank">StatPearls</a>); itch that wakes you or that started when you sweat — in French primary care, itching during sweating carried a seven-fold higher odds of xerosis (<a href="https://pubmed.ncbi.nlm.nih.gov/22104182/" rel="noopener nofollow" target="_blank">primary-care study</a>); dryness that spread across the whole body over weeks, or with tiredness, weight change, cold intolerance or hair loss, which is a thyroid until tested (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10214500/" rel="noopener nofollow" target="_blank">thyroid skin review</a>); and dryness dated to a new statin, diuretic, retinoid or cancer drug (<a href="https://pubmed.ncbi.nlm.nih.gov/30586613/" rel="noopener nofollow" target="_blank">Rotterdam study</a>). The itch reviews list the evaluation — thyroid, kidney and liver function, glucose, a blood count and iron, a medication review — and the rare causes, including lymphoma, that a generalised itch in an older adult can announce (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4051285/" rel="noopener nofollow" target="_blank">ageing skin and itch review</a>). In nursing-home residents itch and poor sleep are tightly linked (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6805713/" rel="noopener nofollow" target="_blank">itch and sleep study</a>): a dry, itching parent who is not sleeping is a medical appointment, not a gift of hand cream.</p>
    `,
  },
  {
    id: 'safety-boosters-supplements',
    category: 'safety',
    title: 'Caveats on boosters, supplements and hormones',
    tldr: 'Microdroplet gels bruise and bump for days and, injected too shallow, can show through the skin; supplement trials are short, probe-measured and almost all maker-funded — including one whose ingredient this site sells; hormone therapy is a menopause decision with its own risk profile, taken with a menopause clinician, never for skin alone.',
    bodyHtml: `
      <p>The injectables on this page are the safest in the aesthetic canon and still not nothing: microdroplet and skin-booster gels bruise and leave palpable bumps for one to three days, occasionally longer, and a gel placed too superficially can be visible through thin skin; the trials are the manufacturers' and the controls untreated (<a href="https://pubmed.ncbi.nlm.nih.gov/37163665/" rel="noopener nofollow" target="_blank">VYC-12L RCT</a>). The <a href="/fillers">filler guide</a> covers injector choice and what goes wrong. The supplements are safe and the trials are compromised in the ordinary way — twelve weeks, probe endpoints, manufacturer funding in 13 of 15 probiotic trials and six company authors on the largest hyaluronic trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13474133/" rel="noopener nofollow" target="_blank">probiotic meta-analysis</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12827323/" rel="noopener nofollow" target="_blank">150-adult RCT</a>); wheat-derived ceramides are a question for anyone avoiding gluten, and fish-derived collagen and hyaluronan for anyone with a fish allergy, both covered in the <a href="/ceramides">ceramide</a> and <a href="/collagen">collagen</a> guides. This site sells a collagen supplement containing the hyaluronic-matrix ingredient in one of the trials above; the rows say so where it applies. Hormone therapy is graded here for dryness alone and is a decision about menopause, with the position statement's benefits and risks, taken with a clinician who does it (<a href="https://journals.lww.com/menopausejournal/fulltext/2022/07000/the_2022_hormone_therapy_position_statement_of_the.4.aspx" rel="noopener nofollow" target="_blank">position statement</a>).</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-dry-vs-dehydrated',
    category: 'faq',
    title: 'Is my skin dry or dehydrated?',
    tldr: 'Pinch the cheek and scratch the shin. Crinkles that vanish are dehydration (water), a white line and scale are dryness (lipid), and most faces over 45 have both. Dehydration wants a humectant under a light cream; dryness wants lipids and urea; oily skin can be dehydrated and is usually over-cleansed.',
    bodyHtml: `
      <p>Dehydrated skin is short of water in the outer layer and shows fine horizontal crinkles when pinched, tightness after washing and shine by noon; it responds within days to a humectant sealed with a cream and to gentler cleansing. Dry skin is short of lipid, and shows scale, roughness and a tight pull that a serum does not touch; it wants ceramide-and-cholesterol creams, urea or lactate, petrolatum at night and fewer hot showers. The distinction decides the product, not the habit: both want lukewarm water, a syndet and a cream twice a day, and both get worse with acids, scrubs and heated air. If the face stings, it is neither — it is a stripped barrier, and the treatment is a month of subtraction.</p>
    `,
  },
  {
    id: 'faq-drinking-water',
    category: 'faq',
    title: 'Does drinking more water help?',
    tldr: 'A little, if you drink little: a six-study review finds a slight rise in outer-layer hydration after extra water, mostly in people who were under-drinking. The stratum corneum takes its water from below and loses it above, and a cream changes it within hours in a way a jug does not.',
    bodyHtml: `
      <p>The systematic review of six studies found a slight increase in outer-layer and deeper hydration after additional water, concentrated in people who had been drinking little, with less clinical dryness and roughness and no clear effect on water loss (<a href="https://pubmed.ncbi.nlm.nih.gov/29392767/" rel="noopener nofollow" target="_blank">fluid-intake review</a>). If you are under-hydrated, drinking more measurably helps; if you are not, the extra goes to the kidneys. Diet has the larger effect in the population data — linoleic acid and vitamin C — and the cream on the surface has the largest of all.</p>
    `,
  },
  {
    id: 'faq-how-often',
    category: 'faq',
    title: 'How much moisturiser, and how often?',
    tldr: 'Twice a day, on damp skin, within three minutes of washing, legs included; the trials that worked used twice-daily application for four to eight weeks and the single-application effects last hours. Enough to leave a faint sheen; more often on the hands, which are washed away.',
    bodyHtml: `
      <p>Every trial on this page that improved dry skin used a leave-on product twice a day for four to eight weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/26563519/" rel="noopener nofollow" target="_blank">six-moisturiser trial</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/28214613/" rel="noopener nofollow" target="_blank">nursing-home trial</a>), and the single-application studies show hydration and water loss improving for up to 24 hours from one use of a ceramide cream (<a href="https://pubmed.ncbi.nlm.nih.gov/31585489/" rel="noopener nofollow" target="_blank">split-shin trial</a>). Apply within three minutes of washing on skin still damp, so the water is sealed rather than the cream sitting on a dry surface; cover the shins, forearms and hands, not just the face; reapply on the hands after each wash. A cream that leaves a faint sheen for a minute is the right amount; a cream that never absorbs is too heavy for that skin.</p>
    `,
  },
  {
    id: 'faq-ha-dry-air',
    category: 'faq',
    title: 'Does hyaluronic acid serum pull water out of skin in dry air?',
    tldr: 'Not in the trials, which raised hydration against vehicle; the worry is theoretical, from a humectant with nothing to seal it in a very dry room. Apply it on damp skin under a cream and the question disappears.',
    bodyHtml: `
      <p>The trials of topical hyaluronan raised hydration against vehicle in elderly dry legs and around the eyes of 76 women (<a href="https://pubmed.ncbi.nlm.nih.gov/38829483/" rel="noopener nofollow" target="_blank">hyaluronic lotion trial</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/22052267/" rel="noopener nofollow" target="_blank">five-weight trial</a>). The concern — that a humectant on a dry surface in dry air draws water up and out — is a reasonable piece of physics with no trial showing harm, and it is answered by how the serum is used: on damp skin, so it has water to bind, and under a cream, so the water cannot leave. A humectant alone in a heated bedroom under 20% humidity is the one version to avoid, and the cream fixes it.</p>
    `,
  },
  {
    id: 'faq-dependence',
    category: 'faq',
    title: 'Can skin become dependent on moisturiser?',
    tldr: 'No — but not all creams help. A barrier that is short of lipid shows itself again when the cream stops, which is the barrier\'s problem; some simple creams and gels raised water loss on normal skin over seven weeks, which is the cream\'s. Buy on ingredients and keep using it.',
    bodyHtml: `
      <p>There is no dependence in the pharmacological sense: a moisturiser replaces lipid and water the skin is not making, and when it stops, the deficit is visible again. The nuance is composition — three simplified creams and a lipid-free gel raised water loss and irritant sensitivity on normal forearms over seven weeks while a urea cream lowered them (<a href="https://pubmed.ncbi.nlm.nih.gov/17300239/" rel="noopener nofollow" target="_blank">seven-week trial</a>) — so a cream can be the wrong one, and the fix is a better cream, not none. Dry skin over 60 is a maintenance condition, like dry eyes; the trials that reduced skin tears did so with twice-daily cream indefinitely.</p>
    `,
  },
  {
    id: 'faq-menopause',
    category: 'faq',
    title: 'My skin turned dry at menopause — will hormones fix it?',
    tldr: 'Sebum yes, hydration mixed: oestrogen users had 24% lower odds of dry skin in a 3,875-woman survey and 35% more sebum in a five-year comparison, but the placebo-controlled trial found no significant hydration difference. Barrier care first; hormone therapy as a menopause decision.',
    bodyHtml: `
      <p>Falling oestrogen takes sebum, dermal hyaluronic acid and collagen, which is why skin that was never dry becomes tight and papery within a couple of years of menopause. Hormone therapy restores the sebum — 35% more in 98 women after about five years (<a href="https://pubmed.ncbi.nlm.nih.gov/8993951/" rel="noopener nofollow" target="_blank">98-woman comparison</a>) — and users in NHANES I had 24% lower odds of dry skin (<a href="https://pubmed.ncbi.nlm.nih.gov/9080894/" rel="noopener nofollow" target="_blank">NHANES I</a>), but the 40-woman placebo-controlled trial found hydration only tended to improve and did not differ from placebo (<a href="https://pubmed.ncbi.nlm.nih.gov/17653959/" rel="noopener nofollow" target="_blank">placebo-controlled RCT</a>). The order is the same as for anyone: lipid creams, humectants, gentler washing, the supplements with trials — and hormone therapy only if you are a candidate for the reasons the position statement sets out, in which case less dry skin is a side benefit. The <a href="/anti-aging-50s">50s guide</a> covers the decision.</p>
    `,
  },
  {
    id: 'faq-supplements',
    category: 'faq',
    title: 'Which supplement actually hydrates?',
    tldr: 'Collagen (26 trials), hyaluronic acid (seven), ceramides (seven) and the essential fatty acids all have placebo-controlled trials showing hydration up by a few probe units over 12 weeks; probiotics are contested. Modest, real, manufacturer-funded — and the cheapest is flaxseed or evening primrose oil.',
    bodyHtml: `
      <p>The 66-trial review of supplements for skin moisture found collagen and ceramide with consistent hydration and water-loss effects and hyaluronan with a hydration effect, and found nothing for lactic-acid bacteria (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9201759/" rel="noopener nofollow" target="_blank">66-trial review</a>); the fatty-acid trials are older and consistent (<a href="https://pubmed.ncbi.nlm.nih.gov/18492193/" rel="noopener nofollow" target="_blank">evening primrose trial</a>). The honest size of every effect is a few capacitance units after 12 weeks — measurable, not transformative — and none of them replaces the cream. If you take one, pick by what else you want from it: collagen for elasticity, hyaluronan for the dehydrated face, an oil for sensitive or isotretinoin-dried skin; judge it at three months against the photograph.</p>
    `,
  },
  {
    id: 'faq-oily-and-tight',
    category: 'faq',
    title: 'My skin is oily and tight at the same time — what is that?',
    tldr: 'Dehydrated, and usually over-cleansed: the oil is sebum, the tightness is water missing from the outer layer, and the foaming cleanser, hot water and acids meant for the oil are removing the water. A non-foaming cleanser, a humectant under a light cream, and one active at a time.',
    bodyHtml: `
      <p>Sebum and water are different things, and an oily face can be short of water: the outer layer has lost its water-binding material to age, cleansers and acids while the glands keep producing oil, and the skin reads as shiny and tight at once — often shinier, because a dehydrated surface signals for more sebum. Treating the shine with more stripping makes the tightness worse. Wash once a day with something that does not foam, in lukewarm water; apply a glycerin or hyaluronic humectant on damp skin under a light, non-comedogenic cream; keep the salicylic acid and the retinoid but not both, and not nightly, until the tightness is gone; and let the <a href="/dull-skin">dull-skin guide</a> handle the pores.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until dry skin is fixed?',
    tldr: 'Hours for hydration, a fortnight for scale, eight weeks for the full effect, indefinitely for the habit: a single ceramide application improved probe readings for 24 hours, urea cleared scale in two weeks, the nursing-home regimens took eight, and the supplements twelve. Cracked, itching skin needs a prescription first.',
    bodyHtml: `
      <p>Hydration on a probe moves within hours of the first application and falls back within a day if it stops (<a href="https://pubmed.ncbi.nlm.nih.gov/31585489/" rel="noopener nofollow" target="_blank">split-shin trial</a>); visible scale on the shins cleared within two weeks of 10% urea in 20 elderly patients (<a href="https://pubmed.ncbi.nlm.nih.gov/33934477/" rel="noopener nofollow" target="_blank">senile xerosis study</a>); the structured regimens took eight weeks to separate from usual care (<a href="https://pubmed.ncbi.nlm.nih.gov/28214613/" rel="noopener nofollow" target="_blank">nursing-home trial</a>); the supplements and the hormone trials ran twelve weeks or more; and the microdroplet injections are judged at a month and last six to nine. A stripped face needs two to four weeks of subtraction before anything is added; eczema craquelé needs its fortnight of prescription first. If nothing has changed against the photograph at eight weeks of doing all of it, the cause is medical until a blood test says otherwise.</p>
    `,
  },
  {
    id: 'faq-cost-ladder',
    category: 'faq',
    title: 'What does it cost, from cheapest to dearest?',
    tldr: 'Free (lukewarm, short, sleep, the plate) → €2–10 petrolatum → €8–20 urea or glycerin → €10–40 ceramide cream → €10–25 an oil supplement → €20–60 collagen or hyaluronan → €30–150 a humidifier → €130–250 a facial → €300–600 the microdroplet session. The strongest evidence is in the first four rungs.',
    bodyHtml: `
      <p>The habits are free and have experiments behind them; petrolatum, urea, lactate and glycerin cost less than a coffee a week and carry the strongest randomised evidence on the page; ceramide creams cost a little more for smaller trials; the supplements run €10–60 a month for probe-sized gains; and the microdroplet injections, at €300–600 a session repeated every six to nine months, are the one clinic purchase with a controlled hydration trial. The facial, the mask, the mist and the LED are pleasant purchases with no dryness trial between them. Prices are typical Western European ranges and vary by city and clinic.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS (page order)
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: "What's actually happening",
    intro: 'Dry skin is a barrier problem in two currencies — the lipid mortar between the outer cells and the water those cells hold — and a pinch, a fingernail and a look at the medicine cabinet tell you which of the three drivers is yours.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which dry skin do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: where the strongest evidence lives',
    intro: 'The plain cream with trials across brands and decades, the humectants and lipids that fix each half, the washing and heating habits with numbers, and the oils that do not.',
    sections: home,
  },
  {
    id: 'inj',
    title: 'Supplements, hormones and boosters',
    intro: 'The one clinic injection with a controlled hydration trial, the supplements with small manufacturer-funded ones, and the hormone question graded for dryness alone.',
    sections: inj,
  },
  {
    id: 'clinic',
    title: 'Prescriptions, causes and the facial menu',
    intro: 'The cracked, itching shin that needs a prescription, the blood test that finds a thyroid or a statin, and the facials, masks and lights sold for hydration with nothing behind them.',
    sections: clinic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The routine that causes most product-bought dryness, the creams that make normal skin leak, the red flags that mean a doctor, and the caveats on boosters, supplements and hormones.',
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
  lipids: 'The lipid half',
  water: 'The water half',
  environment: 'Habits & air',
  medical: 'Medical causes',
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
