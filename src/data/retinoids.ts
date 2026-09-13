/**
 * Retinoids guide — single source of truth (foundation guide on the
 * in-clinic layout: basics/context drawers, two chart groups, safety, FAQ).
 *
 * Consumed by /retinoids. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: one molecule family with the deepest trial record in
 * cosmetic dermatology, sold across a ladder of forms whose evidence
 * ranges from two-year placebo-controlled trials (tretinoin) to nothing
 * independent at all (the newest esters). The "uses" group grades what
 * retinoids can do; the "products" group grades each form on its own
 * trials, not on tretinoin's. Tiers are honest downward: retinol and
 * retinal are graded moderate because their trials are smaller and mostly
 * manufacturer-funded, however consistent. Regulatory statements are as
 * of September 2026; prices are indicative Western/Central European and
 * UK private rates, not quotes.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea =
  | 'lines'
  | 'pigment'
  | 'texture'
  | 'body'
  | 'prescription'
  | 'cosmetic'
  | 'oral'
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
  /** Rows: typical regimen, what to expect and price, for the expanded card. */
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
  'Tretinoin is the best-evidenced anti-aging topical in existence: randomised, vehicle-controlled trials since 1988, a two-year placebo-controlled trial in 204 people that improved fine and coarse wrinkles, mottled pigment, sun spots and sallowness with no cellular atypia, and a biopsy study showing an 80% rise in new collagen. In Europe it is prescription-only and its anti-aging use is off-label.',
  'Strength matters less than time. In a 48-week trial 0.025% tretinoin matched 0.1% for results with far less irritation; 0.02% beat vehicle in two trials; after a year of nightly use, three nights a week held the result. Pigment lightens within four weeks, lines soften from twelve, and improvement continues into the second year.',
  'The cosmetic ladder is real but shorter. Retinaldehyde 0.05% matched 0.05% tretinoin at 18 weeks with less irritation in a 125-person trial; 0.1% stabilised retinol improved crow\'s feet by 44% and mottled pigment by 84% over a year; retinyl palmitate and propionate need roughly twenty times the concentration of retinol to do anything, and the one independent placebo-controlled trial of a retinyl ester found no difference from placebo at 48 weeks.',
  'The EU rules changed on 1 November 2025: cosmetics may now contain at most 0.3% retinol equivalents on the face and 0.05% in body lotions, must carry a vitamin A warning, and non-compliant stock must be gone by 1 May 2027. Retinaldehyde is not covered; tretinoin, adapalene and tazarotene remain prescription medicines.',
  'What it will not do: it does not prevent skin cancer (a five-year trial of 0.1% tretinoin in 1,131 high-risk veterans found no effect), it does not lift or fill, and the irritation is the price of the result — managed by starting low, twice a week, on dry skin, under moisturiser and daily sunscreen. It is stopped in pregnancy, although a meta-analysis of 654 exposed pregnancies found no rise in malformations.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-retinoids-are',
    category: 'concept',
    title: 'What a retinoid is — and the ladder from retinyl palmitate to tretinoin',
    tldr: 'All retinoids are vitamin A or molecules that act like it. The skin can only use one form, retinoic acid (tretinoin); everything sold over the counter has to be converted into it first, and each conversion step loses potency: esters → retinol → retinaldehyde → retinoic acid. Adapalene, tazarotene and trifarotene are synthetic cousins that skip the conversion.',
    bodyHtml: `
      <p>Vitamin A reaches the skin as <strong>retinyl esters</strong> (palmitate, acetate, propionate — the storage form), is freed to <strong>retinol</strong>, oxidised to <strong>retinaldehyde</strong> (retinal), and finally to <strong>retinoic acid</strong>, the only form that binds the nuclear receptors that switch skin genes on and off. Tretinoin <em>is</em> all-trans retinoic acid, which is why it works without conversion and why it is a prescription medicine. Every cosmetic retinoid has to climb the ladder inside the skin, and each step is rate-limited: in a landmark human study the concentration needed to switch on a retinoid-responsive enzyme was 0.01% for retinaldehyde, 0.025% for retinol and 0.6% for retinyl palmitate (<a href="https://pubmed.ncbi.nlm.nih.gov/9284094/" rel="noopener nofollow" target="_blank">Duell 1997</a>). Retinol is roughly ten to twenty times weaker than tretinoin weight for weight; the palmitate ester is twenty times weaker again.</p>
      <p>The <strong>synthetic retinoids</strong> — adapalene, tazarotene and the newer trifarotene — were designed to bind the same receptors (adapalene and trifarotene favour the RAR-γ subtype that dominates in skin) without conversion, and to be more stable in light. Adapalene and tazarotene both have photoaging trials; trifarotene, licensed for acne, has laboratory data only (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8750127/" rel="noopener nofollow" target="_blank">a clinician's guide to topical retinoids</a>). <strong>Bakuchiol</strong> is not a retinoid at all — a plant meroterpene that switches on a similar set of genes — and <strong>hydroxypinacolone retinoate</strong> (the "granactive retinoid") is an ester of retinoic acid marketed as receptor-active without conversion, a claim that so far rests on laboratory work (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11788006/" rel="noopener nofollow" target="_blank">cosmetic retinoids review</a>). Each rung is graded on its own trials in Part 02.</p>
    `,
  },
  {
    id: 'what-they-do',
    category: 'concept',
    title: 'What retinoids do to skin — thicker epidermis, new collagen, dispersed pigment — and how fast',
    tldr: 'Retinoic acid makes the epidermis thicker (by about 30% after a year of tretinoin), restores collagen synthesis that sun damage had cut by more than half (an 80% increase in one biopsy series), blocks the enzymes that dissolve collagen after UV, and spreads melanin more evenly. Pigment changes show at four weeks, fine lines at twelve to twenty-four, and improvement continues through the second year.',
    bodyHtml: `
      <p>The mechanism was worked out in Michigan in the 1990s. Sun-damaged forearm skin was making 56% less type I collagen than sun-protected skin from the same people; ten to twelve months of 0.1% tretinoin produced an <strong>80% increase in collagen I formation</strong> in the treated skin (<a href="https://pubmed.ncbi.nlm.nih.gov/8336752/" rel="noopener nofollow" target="_blank">Griffiths, NEJM 1993</a>). A 48-week trial found the epidermis <strong>30% thicker</strong> on 0.1% tretinoin and 28% thicker on 0.025% against an 11% decrease on vehicle, with roughly doubled dermal blood vessel area (<a href="https://pubmed.ncbi.nlm.nih.gov/7544967/" rel="noopener nofollow" target="_blank">Griffiths 1995</a>). In the two-year placebo-controlled trial, a marker of procollagen synthesis was significantly raised at twelve months and there was no increase in keratinocyte or melanocyte atypia (<a href="https://pubmed.ncbi.nlm.nih.gov/16060712/" rel="noopener nofollow" target="_blank">Kang 2005</a>). Retinoids also suppress the matrix metalloproteinases that ultraviolet light switches on to digest collagen — the reason they are called preventive as well as corrective (<a href="https://pubmed.ncbi.nlm.nih.gov/40072791/" rel="noopener nofollow" target="_blank">photoaging mechanisms review</a>).</p>
      <p>The timeline in the trials is consistent. Hyperpigmented lesions were significantly lighter after <strong>one month</strong> of 0.1% tretinoin (<a href="https://pubmed.ncbi.nlm.nih.gov/1729619/" rel="noopener nofollow" target="_blank">Rafal, NEJM 1992</a>); tazarotene reached significance on some measures at <strong>week 2</strong> and "had not plateaued by week 24" (<a href="https://pubmed.ncbi.nlm.nih.gov/15692472/" rel="noopener nofollow" target="_blank">Kang 2005, tazarotene</a>); fine wrinkling is usually judged at 12–24 weeks; and in the 52-week tazarotene extension improvement "had not plateaued by week 52" (<a href="https://pubmed.ncbi.nlm.nih.gov/12437455/" rel="noopener nofollow" target="_blank">Phillips 2002</a>). The early epidermal thickening partly settles with continued use while the dermal collagen keeps rising: in dark-skinned patients collagen I rose from 75% to 94% of the field only at ten months (<a href="https://pubmed.ncbi.nlm.nih.gov/17166106/" rel="noopener nofollow" target="_blank">El-Domyati 2004</a>). A retinoid is a two-year project, not a twelve-week one.</p>
    `,
  },
  {
    id: 'can-and-cant',
    category: 'concept',
    title: 'What it can and cannot fix',
    tldr: 'Fine lines, mottled pigment, sun spots, roughness, sallowness, pores and adult acne: yes, with the best data in skincare. Coarse wrinkles: partly, slowly. Deep folds, sagging, volume loss, broken capillaries and etched expression lines: no — those belong to toxin, filler, energy devices and surgery.',
    bodyHtml: `
      <p>The outcome lists of the pivotal trials are the honest map of what a retinoid does. The two-year tretinoin trial improved "fine and coarse wrinkling, mottled hyperpigmentation, lentigines, and sallowness" (<a href="https://pubmed.ncbi.nlm.nih.gov/16060712/" rel="noopener nofollow" target="_blank">Kang 2005</a>); the 568-patient tazarotene trial added "irregular depigmentation, apparent pore size, elastosis, tactile roughness" (<a href="https://pubmed.ncbi.nlm.nih.gov/15692472/" rel="noopener nofollow" target="_blank">Kang 2005, tazarotene</a>). Those are surface and upper-dermis problems. Nothing in the trials touched the nasolabial fold, the jowl, the hollow temple or the platysmal band, because those are muscle, fat, ligament and bone.</p>
      <p>Two limits deserve emphasis. First, the "coarse wrinkle" improvement in the trials is a grade on a scale, not the disappearance of a forehead line — the <a href="/botox">Botox guide</a> and the <a href="/wrinkles">wrinkles guide</a> cover what actually removes expression lines. Second, retinoids do not prevent skin cancer: the largest trial ever run, 1,131 high-risk veterans on 0.1% tretinoin for up to five and a half years, found no effect on basal or squamous cell carcinoma or even on the count of precancerous keratoses (<a href="https://pubmed.ncbi.nlm.nih.gov/22318383/" rel="noopener nofollow" target="_blank">VA chemoprevention trial</a>). Sunscreen does that job — and it is the partner every retinoid trial mandated.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'rules-and-access',
    category: 'context',
    title: 'The rules in Europe — what needs a prescription, and the 2025 retinol cap',
    tldr: 'Tretinoin, adapalene, tazarotene and oral isotretinoin are prescription medicines throughout the EU and UK, and their anti-aging use is off-label in Europe. Since 1 November 2025, EU cosmetics may contain at most 0.3% retinol equivalents on the face and 0.05% in body lotions, with a mandatory vitamin A warning and a sell-through deadline of 1 May 2027. Retinaldehyde and the newer esters are not covered.',
    bodyHtml: `
      <p><strong>Prescription.</strong> Tretinoin is licensed across Europe for acne and prescribed off-label for photoaging — the products the trials used (the 0.05% emollient cream and 0.02% cream) were licensed for photodamage in the United States, not here. Any dermatologist, and in most countries any GP, can prescribe a 0.025–0.05% cream; a generic tube costs €8–25. Adapalene 0.1% and 0.3% are prescription-only in the EU and UK (0.1% has been over the counter in the US since 2016). Tazarotene is licensed in only a few EU countries, for psoriasis and acne, and is usually imported; trifarotene is licensed for acne. Oral isotretinoin needs a specialist and a pregnancy-prevention programme.</p>
      <p><strong>The cosmetic cap.</strong> <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202400996" rel="noopener nofollow" target="_blank">Regulation (EU) 2024/996</a> restricted retinol, retinyl acetate and retinyl palmitate in cosmetics to <strong>0.3% retinol equivalents</strong> in face and other leave-on or rinse-off products and <strong>0.05%</strong> in body lotions, with the label "Contains Vitamin A. Consider your daily intake before use." The reasoning was total vitamin A intake — food, supplements and skincare added together — not skin safety. From <strong>1 November 2025</strong> non-compliant products may no longer be placed on the market; from <strong>1 May 2027</strong> they may no longer be sold at all. The 0.5% and 1% retinol serums are being reformulated or sold through; "retinol equivalents" means 0.3% retinol, or about 0.55% retinyl palmitate. The regulation does <em>not</em> list retinaldehyde or hydroxypinacolone retinoate, which is why retinal products now dominate the strong end of the European shelf. Great Britain keeps its own copy of the cosmetics regulation, so a UK-bought product may still be stronger; check the label.</p>
    `,
  },
  {
    id: 'how-to-start',
    category: 'context',
    title: 'How to start without the peeling — the twelve-week ramp',
    tldr: 'A pea-sized amount to a dry face, twenty minutes after washing, two nights a week; moisturiser over it (or under it, if you are sensitive); nothing on the eyelids, nostril creases or mouth corners. Add a night every two weeks. Expect dryness, flaking and a little redness for two to six weeks — the "retinisation" the trials all report — and daily sunscreen from day one. Most people are on nightly use by week twelve; nobody needs to be.',
    bodyHtml: `
      <p>Irritation is the reason the trials lose patients: in the melasma trial 88% of tretinoin users had erythema or peeling (<a href="https://pubmed.ncbi.nlm.nih.gov/8217756/" rel="noopener nofollow" target="_blank">Griffiths 1993</a>), in the veterans' trial 61% reported a side effect at six months against 42% on vehicle, with burning the commonest (39% vs 17%) — and the difference had disappeared by 30 months as skin adapted (<a href="https://pubmed.ncbi.nlm.nih.gov/19681859/" rel="noopener nofollow" target="_blank">VA tolerability study</a>). The ramp below is what dermatologists actually tell patients, and it follows from three trial facts: the lowest tested strengths work (Part 02), three nights a week maintains a result (<a href="https://pubmed.ncbi.nlm.nih.gov/9270508/" rel="noopener nofollow" target="_blank">Olsen 1997</a>), and the adaptation is measured in weeks.</p>
      <p><strong>Weeks 1–2:</strong> the lowest strength of your chosen form (0.025% tretinoin, 0.05% retinal, 0.1–0.3% retinol), a pea for the whole face, on dry skin, two non-consecutive nights; moisturiser on top. <strong>Weeks 3–8:</strong> add a night every fortnight if there is no more than mild flaking; if there is, go back a step for a week rather than stopping. <strong>Weeks 9–12:</strong> most people reach nightly or alternate nights; stay there. <strong>Always:</strong> a bland moisturiser — a ceramide-containing one measurably reduced barrier damage and dryness during adapalene treatment in a randomised study (<a href="https://pubmed.ncbi.nlm.nih.gov/37276158/" rel="noopener nofollow" target="_blank">Draelos 2023</a>; see the <a href="/ceramides">ceramides guide</a>) — sunscreen every morning, no scrubs, and no waxing of treated skin. Stinging on application, a few days of tightness and flaking around the nose and mouth are expected; sustained burning, swelling or a rash is not, and means stop and see someone.</p>
    `,
  },
  {
    id: 'what-good-product',
    category: 'context',
    title: 'What a good product looks like — packaging, percentage, and the stability problem',
    tldr: 'Retinoids degrade in light, air and heat: in a laboratory test of twelve commercial cosmetics, retinoid content fell by up to 80% after six months at room temperature and by 40–100% at 40 °C, light was worse than heat, and some products contained less than the label claimed. Buy an opaque, airless tube or pump with a stated percentage, store it closed and cool, and use it within months of opening.',
    bodyHtml: `
      <p>The molecule that makes retinoids work is the one that makes them unstable — a chain of conjugated double bonds that absorbs light and oxygen. Slovenian pharmacists measured sixteen retinoid derivatives in twelve commercial products over six months: declines of "0%–80% after 6 months at 25 °C and 40%–100% at 40 °C", light degradation "more pronounced than temperature-induced", and content in some products already lower than declared (<a href="https://pubmed.ncbi.nlm.nih.gov/33206444/" rel="noopener nofollow" target="_blank">retinoid stability study</a>). Hydroxypinacolone retinoate was the most stable; plain retinol in a jar the least. Encapsulated and "stabilised" retinol formulas exist for this reason, and the 52-week retinol trial that produced the 44% and 84% improvements used one (<a href="https://pubmed.ncbi.nlm.nih.gov/25738849/" rel="noopener nofollow" target="_blank">Randhawa 2015</a>).</p>
      <p><strong>The checklist:</strong> an opaque, airless container (never a jar); a percentage on the label — "retinol complex" or "with retinoid" without a number means the dose is not disclosed; a retinal product that states 0.05–0.1%, a retinol product that states 0.1–0.3%; a use-by period after opening; a price that reflects a stabilised formula rather than a brand name. Prescription tretinoin is manufactured to pharmaceutical stability standards and stated strengths — one of the quieter arguments for the €12 tube over the €90 serum. Apply any retinoid at night, keep the tube closed, and do not store it on a sunny windowsill or in a hot bathroom.</p>
    `,
  },
];

const uses: Section[] = [
  {
    id: 'use-fine-lines',
    category: 'use',
    title: 'Fine lines and photoaged skin',
    tldr: 'The indication that built the field: fourteen of fifteen tretinoin-treated faces improved against none on vehicle in the 1988 JAMA trial; 68% improved on 0.05% versus 43% on vehicle in a 296-person trial; 0.025% matched 0.1% at 48 weeks; and the two-year, 204-person placebo-controlled trial confirmed fine and coarse wrinkle improvement with no cellular atypia. A 2025 network meta-analysis of 23 trials ranks tretinoin, retinol and oral isotretinoin as effective for fine wrinkles with tretinoin the best-tolerated.',
    evidence: 'strong',
    focus: 'lines',
    sessions: 'Nightly after a 12-week ramp; judge at 6 months',
    downtime: '2–6 weeks of flaking at the start',
    cost: '€8–25 per tube (tretinoin); €25–90 (cosmetic forms)',
    bodyHtml: `
      <p>Tretinoin's photoaging evidence begins with a 16-week randomised, double-blind, vehicle-controlled trial in which all 30 patients improved on the tretinoin-treated forearm and none on the vehicle arm, and 14 of 15 treated faces improved against none of the vehicle faces (<a href="https://pubmed.ncbi.nlm.nih.gov/3336176/" rel="noopener nofollow" target="_blank">Weiss, JAMA 1988</a>). The emollient 0.05% cream that became the standard was tested in 296 subjects over 24 weeks: 68% improved against 43% on vehicle, with excellent or good responses in 26% versus 11%, and the 0.01% and 0.001% strengths did no better than vehicle (<a href="https://pubmed.ncbi.nlm.nih.gov/1552056/" rel="noopener nofollow" target="_blank">Olsen 1992</a>). A 48-week comparison of 0.1% and 0.025% found "no clinically or statistically significant differences in efficacy" and much less irritation at the lower strength (<a href="https://pubmed.ncbi.nlm.nih.gov/7544967/" rel="noopener nofollow" target="_blank">Griffiths 1995</a>); two further trials showed even 0.02% beating vehicle on fine and coarse wrinkling at 24 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/11534915/" rel="noopener nofollow" target="_blank">Nyirady 2001</a>). The two-year trial in 204 people is the long-term anchor (<a href="https://pubmed.ncbi.nlm.nih.gov/16060712/" rel="noopener nofollow" target="_blank">Kang 2005</a>), and a systematic review of the randomised trials of the last twenty years found every one positive (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9112391/" rel="noopener nofollow" target="_blank">Sitohang 2022</a>).</p>
      <p>Across the whole class, a 2025 Bayesian network meta-analysis of 23 randomised trials and 3,905 participants found isotretinoin, retinol and tretinoin "significantly improved fine wrinkles", tazarotene the most effective for coarse wrinkles, and tretinoin "the most favorable" safety profile — with the caveat of limited racial diversity and "potential commercial bias" in the trials (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12289910/" rel="noopener nofollow" target="_blank">Lin 2025</a>). What "improved" means: a grade or two on a fine-wrinkle scale at six months, a smoother, more even, less sallow surface, and a difference that photographs. It does not mean the crow's feet are gone; the <a href="/crows-feet">crow's feet</a> and <a href="/wrinkles">wrinkles</a> guides grade the treatments that go further.</p>
    `,
  },
  {
    id: 'use-pigment',
    category: 'use',
    title: 'Sun spots, melasma and post-inflammatory marks',
    tldr: 'The most under-rated use. In the NEJM trial 83% of tretinoin-treated faces had lighter liver spots at ten months against 29% on vehicle, with lightening significant after one month; melasma improved in 68% versus 5%; post-inflammatory marks in Black skin lightened 40% versus 18%; and photoaging pigment in Chinese and Japanese patients lightened in 90% versus 33%. The network meta-analysis ranks tretinoin and retinol top for hyperpigmentation.',
    evidence: 'strong',
    focus: 'pigment',
    sessions: 'Nightly; first change at 4 weeks, judge at 6–10 months',
    downtime: 'Initial flaking; sunscreen mandatory',
    cost: '€8–25 (tretinoin); €40–70 for the triple cream',
    bodyHtml: `
      <p>Retinoids disperse melanin and speed its clearance through a faster-turning epidermis, and the trials are among the cleanest in the field. Fifty-eight patients applied 0.1% tretinoin or vehicle for ten months: 20 of 24 (83%) tretinoin-treated faces had lighter lesions against 8 of 28 (29%) on vehicle, lightening was significant after one month, and lesions on the arms responded the same way (<a href="https://pubmed.ncbi.nlm.nih.gov/1729619/" rel="noopener nofollow" target="_blank">Rafal, NEJM 1992</a>). In melasma, 13 of 19 women (68%) were improved or much improved after 40 weeks against 1 of 19 on vehicle, with epidermal pigment down 36% — but the first significant change took 24 weeks and 88% had erythema or peeling (<a href="https://pubmed.ncbi.nlm.nih.gov/8217756/" rel="noopener nofollow" target="_blank">Griffiths 1993</a>). In 54 Black patients with post-inflammatory hyperpigmentation, lesions lightened 40% toward normal skin colour on tretinoin against 18% on vehicle, first noticed at four weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/8479462/" rel="noopener nofollow" target="_blank">Bulengo-Ransby, NEJM 1993</a>); in Chinese and Japanese patients 90% versus 33% had lighter face and hand spots, with a 41% fall in epidermal pigment (<a href="https://pubmed.ncbi.nlm.nih.gov/8277035/" rel="noopener nofollow" target="_blank">Griffiths 1994</a>). Adapalene did the same for solar lentigines: lighter in 57–59% versus 36% at nine months (<a href="https://pubmed.ncbi.nlm.nih.gov/12833014/" rel="noopener nofollow" target="_blank">Kang 2003</a>).</p>
      <p>For melasma the retinoid is usually one third of the triple cream (fluocinolone, hydroquinone and tretinoin), the reference treatment against which a generic version showed 52% versus 57% efficacy at eight weeks in a 2025 trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12038315/" rel="noopener nofollow" target="_blank">triple-combination trial</a>). The <a href="/dark-spots">dark spots guide</a> grades the whole pigment toolkit, including the lasers a retinoid prepares the skin for — though in one vehicle-controlled study adding tretinoin lotion to a 1,927 nm laser did not improve the result (<a href="https://pubmed.ncbi.nlm.nih.gov/34784124/" rel="noopener nofollow" target="_blank">Almukhtar 2021</a>).</p>
    `,
  },
  {
    id: 'use-acne-pores',
    category: 'use',
    title: 'Adult acne, congestion and pores',
    tldr: 'The original licence: topical retinoids are first-line in every acne guideline, with dozens of randomised trials behind tretinoin, adapalene, tazarotene and trifarotene, and they reduce the atrophic scarring acne leaves. For the "large pores" of an oily 40-year-old, apparent pore size improved in the tazarotene photoaging trials and in split-face retinoid comparisons.',
    evidence: 'strong',
    focus: 'texture',
    sessions: 'Nightly; acne judged at 12 weeks',
    downtime: 'Dryness; a possible flare in weeks 2–4',
    cost: '€8–25 per tube on prescription',
    bodyHtml: `
      <p>Retinoids normalise the shedding of cells inside the follicle, which is why they unblock comedones and why they were medicines for acne for thirty years before anyone noticed the wrinkles improving. The acne evidence is the largest retinoid literature there is — the current reviews describe a "well-established position" for tretinoin, adapalene, tazarotene and trifarotene as monotherapy and in combination with benzoyl peroxide, and an ability to "improve the appearance of atrophic acne scars" and slow their progression (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13119282/" rel="noopener nofollow" target="_blank">retinoids in acne and acne scars, 2026</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11909303/" rel="noopener nofollow" target="_blank">acne sequelae recommendations</a>). Adult female acne along the jaw responds to the same molecules, and the anti-aging effect comes free.</p>
      <p>Pores have no trial of their own, but they appear as a secondary outcome: "apparent pore size" improved significantly against vehicle in both large tazarotene trials (<a href="https://pubmed.ncbi.nlm.nih.gov/15692472/" rel="noopener nofollow" target="_blank">Kang 2005</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/12437455/" rel="noopener nofollow" target="_blank">Phillips 2002</a>), subjects in the Australian tretinoin trial reported smaller pores (<a href="https://pubmed.ncbi.nlm.nih.gov/7998893/" rel="noopener nofollow" target="_blank">Lowe 1994</a>), and pore size fell in a split-face comparison of a conjugated retinoid with retinol and tretinoin (<a href="https://pubmed.ncbi.nlm.nih.gov/28762645/" rel="noopener nofollow" target="_blank">McDaniel 2017</a>). The mechanism is a tighter, better-keratinised follicle opening, not a shrunken one; the <a href="/dull-skin">dull skin guide</a> covers the rest of the texture toolkit.</p>
    `,
  },
  {
    id: 'use-texture',
    category: 'use',
    title: 'Roughness, sallowness and dull, uneven tone',
    tldr: 'Tactile roughness, sallow colour and irregular pigment improved against vehicle in the tretinoin and tazarotene trials, usually earlier than wrinkles — the "glow" people report in the first months is a smoother, thicker, better-hydrated epidermis. Graded moderate because the outcomes were secondary and subjective.',
    evidence: 'moderate',
    focus: 'texture',
    sessions: 'Nightly; visible at 8–12 weeks',
    downtime: 'Flaking first, smoothness after',
    cost: '€8–25 (tretinoin); €25–70 (retinal, retinol)',
    bodyHtml: `
      <p>The trials measured more than wrinkles. The two-year tretinoin trial recorded improvement in "sallowness" and overall photodamage severity (<a href="https://pubmed.ncbi.nlm.nih.gov/16060712/" rel="noopener nofollow" target="_blank">Kang 2005</a>); the 0.02% trials improved "yellowing" (<a href="https://pubmed.ncbi.nlm.nih.gov/11534915/" rel="noopener nofollow" target="_blank">Nyirady 2001</a>); tazarotene improved "tactile roughness" and "irregular depigmentation" in 568 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/15692472/" rel="noopener nofollow" target="_blank">Kang 2005, tazarotene</a>); and the Australian 0.05% trial found investigators rating roughness, mottled pigment and laxity better while subjects reported better "tightness, colour and pores" (<a href="https://pubmed.ncbi.nlm.nih.gov/7998893/" rel="noopener nofollow" target="_blank">Lowe 1994</a>). Histology explains it: a compacted stratum corneum, a thicker epidermis and more glycosaminoglycans holding water in the upper dermis — the retinol trial in 87-year-olds found glycosaminoglycan expression significantly induced (<a href="https://pubmed.ncbi.nlm.nih.gov/17515510/" rel="noopener nofollow" target="_blank">Kafi 2007</a>).</p>
      <p>Graded moderate rather than strong because these were secondary outcomes, graded by eye and hand rather than instrument, and because glycolic acid outperformed the retinoids for roughness specifically in the network meta-analysis (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12289910/" rel="noopener nofollow" target="_blank">Lin 2025</a>). For texture alone, a retinoid three nights a week and a gentle acid on the others is the usual pairing; the <a href="/chemical-peels">chemical peels guide</a> grades the stronger acids.</p>
    `,
  },
  {
    id: 'use-coarse-wrinkles',
    category: 'use',
    title: 'Coarse wrinkles and leathery, elastotic skin',
    tldr: 'Coarse wrinkling improved against vehicle in the two-year tretinoin trial and in both large tazarotene trials, and tazarotene was ranked most effective for coarse wrinkles in the 2025 network meta-analysis — at the cost of more irritation. The change is a grade on a scale over a year, not a filled fold: honest expectations, moderate tier.',
    evidence: 'moderate',
    focus: 'lines',
    sessions: 'Nightly for a year or more',
    downtime: 'More irritation at the strengths that do this',
    cost: '€8–25 (tretinoin); €25–60 (tazarotene, imported)',
    bodyHtml: `
      <p>Fine lines are an epidermal and papillary-dermal problem and respond first; coarse wrinkles and the yellow, thickened, elastotic skin of decades of sun sit deeper and respond slowly. The two-year trial recorded significant improvement in coarse wrinkling on 0.05% tretinoin (<a href="https://pubmed.ncbi.nlm.nih.gov/16060712/" rel="noopener nofollow" target="_blank">Kang 2005</a>); tazarotene 0.1% improved coarse wrinkling and elastosis against vehicle in 563 and 568 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/12437455/" rel="noopener nofollow" target="_blank">Phillips 2002</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/15692472/" rel="noopener nofollow" target="_blank">Kang 2005, tazarotene</a>) and beat tretinoin 0.05% head-to-head on coarse wrinkling at earlier time points (<a href="https://pubmed.ncbi.nlm.nih.gov/15203997/" rel="noopener nofollow" target="_blank">Lowe 2004</a>); the network meta-analysis ranked tazarotene first for coarse wrinkles and among the worst for adverse events (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12289910/" rel="noopener nofollow" target="_blank">Lin 2025</a>). The four-year biopsy series found dermal elastin content falling with continued treatment (<a href="https://pubmed.ncbi.nlm.nih.gov/8785167/" rel="noopener nofollow" target="_blank">Bhawan 1996</a>).</p>
      <p>The honest translation: after a year on the strongest tolerated retinoid, a leathery cheek is smoother and a coarse line is shallower by a grade. A deep, etched line at rest needs resurfacing or filler, and the fold from the nose to the mouth needs none of these — see the <a href="/laser-ipl">laser guide</a>, the <a href="/fillers">filler guide</a> and the <a href="/nasolabial-folds">nasolabial folds guide</a>. The retinoid is what you use before, between and after those, because it keeps the collagen the procedures made.</p>
    `,
  },
  {
    id: 'use-maintenance',
    category: 'use',
    title: 'Keeping the result: maintenance and long-term use',
    tldr: 'After 48 weeks of nightly 0.05% tretinoin, 126 people were randomised to three nights a week, one night a week or nothing: three nights a week held and sometimes extended the improvement, once a week held less, and stopping let it regress. Four years of biopsies found no harm to keratinocytes or melanocytes. A retinoid is a habit, not a course.',
    evidence: 'moderate',
    focus: 'lines',
    sessions: '3 nights a week, indefinitely, after year one',
    downtime: 'None once adapted',
    cost: '€8–25 per tube, roughly 3 tubes a year',
    bodyHtml: `
      <p>The maintenance question was answered in a proper randomised extension. After 48 weeks of once-daily tretinoin emollient cream 0.05%, 126 subjects were assigned to once-weekly, three-times-weekly or no treatment for 24 more weeks: "the clinical improvement observed during 48 weeks of once-daily treatment was sustained with three-times weekly applications and to a lesser extent with once-weekly dosing, whereas effects tended to regress in subjects off therapy" (<a href="https://pubmed.ncbi.nlm.nih.gov/9270508/" rel="noopener nofollow" target="_blank">Olsen 1997</a>). The longest histological follow-up, four years of tretinoin in 27 patients, found decreased dermal elastin and perivascular inflammation, increased epidermal mucin, and "no untoward effects on keratinocytes or melanocytes" (<a href="https://pubmed.ncbi.nlm.nih.gov/8785167/" rel="noopener nofollow" target="_blank">Bhawan 1996</a>); the two-year trial likewise found no atypia (<a href="https://pubmed.ncbi.nlm.nih.gov/16060712/" rel="noopener nofollow" target="_blank">Kang 2005</a>).</p>
      <p>Graded moderate rather than strong because the maintenance data come from one extension study and because the "start at 25 to prevent wrinkles at 45" claim has never been tested prospectively — it follows from the mechanism (suppressed collagen-digesting enzymes after UV) and from the fact that every trial cohort kept improving with time, not from a trial that followed young skin for two decades. What is well supported: a retinoid used for years is safe, a result maintained at three nights a week costs a few tubes a year, and stopping means slowly losing what was gained.</p>
    `,
  },
  {
    id: 'use-neck-chest-hands',
    category: 'use',
    title: 'Neck, chest and hands',
    tldr: 'Mixed. Liver spots on the arms and hands lightened as reliably as the face in the NEJM trial and in Chinese and Japanese patients; the Australian tretinoin trial treated face, neck and forearm together with benefit. But the one dedicated vehicle-controlled chest trial found tretinoin 0.05% lotion no better than its vehicle at six months, and the retinyl propionate trial found nothing on forearms or hands. Thinner, more reactive skin, smaller doses, slower results.',
    evidence: 'emerging',
    focus: 'body',
    sessions: '2–3 nights a week, low strength, for a year',
    downtime: 'Neck and chest irritate easily',
    cost: '€8–25 (tretinoin); body retinol lotions capped at 0.05% in the EU',
    bodyHtml: `
      <p>Off the face the evidence thins and splits by problem. <strong>Pigment</strong> responds: lesions of the upper extremities lightened like facial ones in the ten-month NEJM trial (<a href="https://pubmed.ncbi.nlm.nih.gov/1729619/" rel="noopener nofollow" target="_blank">Rafal 1992</a>), and face and hand spots lightened in 90% of Chinese and Japanese patients on 0.1% tretinoin (<a href="https://pubmed.ncbi.nlm.nih.gov/8277035/" rel="noopener nofollow" target="_blank">Griffiths 1994</a>). <strong>Texture and wrinkling</strong> are less certain: the Australian trial applied 0.05% tretinoin to face, neck and forearm nightly for 24 weeks and reported improved wrinkles, laxity and roughness overall (<a href="https://pubmed.ncbi.nlm.nih.gov/7998893/" rel="noopener nofollow" target="_blank">Lowe 1994</a>), but the only randomised, vehicle-controlled trial dedicated to the chest found both tretinoin 0.05% lotion and its moisturising vehicle producing "30–40% improvement" at 180 days with no difference between them (<a href="https://pubmed.ncbi.nlm.nih.gov/35674757/" rel="noopener nofollow" target="_blank">Wood 2022</a>), and the 48-week retinyl propionate trial found no effect on the face, forearms or hands (<a href="https://pubmed.ncbi.nlm.nih.gov/9894360/" rel="noopener nofollow" target="_blank">Green 1998</a>).</p>
      <p>Practically: the neck and décolletage have fewer oil glands and irritate at doses the face shrugs off, so the ramp is slower and the strength lower, and the EU now caps body-lotion retinol at 0.05%. Use a retinoid there for pigment with confidence and for crepe with modest hopes; the <a href="/neck">neck guide</a>, the <a href="/decolletage">décolletage guide</a> and the <a href="/aging-hands">hands guide</a> grade what does more.</p>
    `,
  },
  {
    id: 'use-stretch-marks',
    category: 'use',
    title: 'Early stretch marks and scars',
    tldr: 'Red, recent stretch marks improved significantly on 0.1% tretinoin against vehicle in a 22-person, six-month trial, and tretinoin 0.05% was compared with superficial dermabrasion in 32 women with early marks. White, mature stretch marks and established scars respond little. A small, old evidence base for a real but narrow use.',
    evidence: 'emerging',
    focus: 'body',
    sessions: 'Nightly for 6 months, on red marks only',
    downtime: 'Irritation on abdominal and breast skin',
    cost: '€8–25 per tube',
    bodyHtml: `
      <p>Stretch marks are dermal tears, and a retinoid can only act while they are still inflamed and remodelling. In the randomised trial, 22 patients applied 0.1% tretinoin or vehicle daily to early, clinically active stretch marks for six months; after two months the tretinoin group had significantly better severity scores, and biopsies were taken to compare with untreated skin (<a href="https://pubmed.ncbi.nlm.nih.gov/8624148/" rel="noopener nofollow" target="_blank">Kang 1996</a>). A later pilot randomised 32 women with early striae to weekly superficial dermabrasion or daily tretinoin 0.05% and measured width and length over time (<a href="https://pubmed.ncbi.nlm.nih.gov/24612027/" rel="noopener nofollow" target="_blank">Hexsel 2014</a>). The European review of topicals for striae found "many commercially available topical products" but few with evidence, tretinoin among the few (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5057295/" rel="noopener nofollow" target="_blank">Ud-Din 2016</a>); the 2025 tretinoin review lists striae, hypertrophic scars and keloids among uses supported by "smaller RCTs and prospective studies" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12653878/" rel="noopener nofollow" target="_blank">Balado-Simó 2025</a>).</p>
      <p>The catch for the commonest cause is timing: the marks that respond are the red ones of the last months, which for most women means pregnancy or just after it — exactly when topical retinoids are avoided. Post-partum and once breastfeeding is finished, six months of a low-strength retinoid on red marks is a reasonable, cheap attempt; on silvery marks it is not.</p>
    `,
  },
  {
    id: 'use-precancer',
    category: 'use',
    title: 'Actinic keratoses and skin-cancer prevention',
    tldr: 'No. The largest retinoid trial ever run — 1,131 high-risk veterans on 0.1% tretinoin for up to five and a half years — found no reduction in basal or squamous cell carcinoma (53% vs 54% and 28% vs 31% at five years) and no change in actinic keratosis counts. Adapalene reduced keratosis counts modestly in one nine-month trial. A retinoid is not a sunscreen.',
    evidence: 'limited',
    focus: 'general',
    note: 'Best for: nothing here — the point of this row is the negative trial',
    sessions: 'Not a use',
    downtime: '—',
    cost: '—',
    bodyHtml: `
      <p>Because retinoids reverse cellular atypia in biopsies, it was reasonable to hope they would prevent the skin cancers that atypia precedes. The Veterans Affairs Topical Tretinoin Chemoprevention Trial tested it properly: 1,131 patients with a history of keratinocyte carcinoma randomised to 0.1% tretinoin or vehicle for 1.5 to 5.5 years. "The effects were not significant": basal cell carcinoma in 53% versus 54% at five years, invasive squamous cell carcinoma in 28% versus 31%, "no differences in any cancer-related end points or in actinic keratosis counts", and worse skin symptoms in the tretinoin group at twelve months (<a href="https://pubmed.ncbi.nlm.nih.gov/22318383/" rel="noopener nofollow" target="_blank">Weinstock 2012</a>). The trial was also stopped six months early over an excess of deaths in the tretinoin group, discussed in the Safety section.</p>
      <p>Smaller and shorter trials look kinder: adapalene 0.3% reduced the mean number of actinic keratoses by 2.5 against an increase of 1.5 on vehicle over nine months (<a href="https://pubmed.ncbi.nlm.nih.gov/12833014/" rel="noopener nofollow" target="_blank">Kang 2003</a>), and the retinyl propionate trial saw the few keratoses in its active group disappear (<a href="https://pubmed.ncbi.nlm.nih.gov/9894360/" rel="noopener nofollow" target="_blank">Green 1998</a>). Those are surface lesions, not cancers. The prevention that works is the one the retinoid trials all mandated — daily sunscreen — and, for actual keratoses, a dermatologist's field treatment; see the <a href="/sun-damage">sun damage guide</a>.</p>
    `,
  },
];

const products: Section[] = [
  {
    id: 'prod-tretinoin',
    category: 'product',
    title: 'Tretinoin 0.02–0.1% (prescription)',
    tldr: 'The reference molecule and the reference evidence: every pivotal trial in Part 01, the two-year placebo-controlled trial, the collagen biopsies and the four-year safety histology are tretinoin\'s. 0.025% matches 0.1% for results with less irritation; 0.02% and 0.05% beat vehicle. A generic 0.025–0.05% cream on prescription is the cheapest effective retinoid in Europe.',
    evidence: 'strong',
    focus: 'prescription',
    note: 'Best for: anyone who can get a prescription and tolerate the ramp — start at 0.025%',
    sessions: '0.025–0.05% nightly after a 12-week ramp',
    downtime: '2–6 weeks of dryness and flaking',
    cost: '€8–25 per 20–30 g tube',
    bodyHtml: `
      <p>Tretinoin is retinoic acid itself: no conversion, full receptor activity, pharmaceutical manufacturing standards and a stated strength. Its trials are summarised in Part 01 — the 1988 JAMA trial (<a href="https://pubmed.ncbi.nlm.nih.gov/3336176/" rel="noopener nofollow" target="_blank">Weiss</a>), the 296-person emollient-cream trial (<a href="https://pubmed.ncbi.nlm.nih.gov/1552056/" rel="noopener nofollow" target="_blank">Olsen 1992</a>), the 0.1%-versus-0.025% equivalence study (<a href="https://pubmed.ncbi.nlm.nih.gov/7544967/" rel="noopener nofollow" target="_blank">Griffiths 1995</a>), the two-year trial (<a href="https://pubmed.ncbi.nlm.nih.gov/16060712/" rel="noopener nofollow" target="_blank">Kang 2005</a>) and the maintenance study (<a href="https://pubmed.ncbi.nlm.nih.gov/9270508/" rel="noopener nofollow" target="_blank">Olsen 1997</a>). The systematic review that compared tretinoin with 25 alternatives found its comparators "had variable efficacy" and tretinoin the gold standard they were measured against (<a href="https://pubmed.ncbi.nlm.nih.gov/39348007/" rel="noopener nofollow" target="_blank">Siddiqui 2024</a>).</p>
      <p><strong>Which strength:</strong> 0.025% for photoaging in most people, 0.05% for those who adapt easily or have heavier pigment; 0.1% adds irritation, not results. <strong>Formulation:</strong> creams are gentler than gels; the emollient cream used in the photoaging trials is not sold everywhere, but any tretinoin cream at the same strength delivers the same molecule. <strong>Access in Europe:</strong> prescription-only, licensed for acne, prescribed off-label for aging by dermatologists and many GPs; €8–25 a tube, and a tube lasts two to three months at a pea a night. The one thing money cannot improve on.</p>
    `,
  },
  {
    id: 'prod-tazarotene',
    category: 'product',
    title: 'Tazarotene 0.1% — the strongest, and the most irritating',
    tldr: 'Three trials in more than 1,400 patients: 67% treatment success at 24 weeks against 55% on tretinoin 0.05% and 22% on vehicle; significant gains in fine and coarse wrinkles, pigment, pores and roughness, still improving at week 52. Head-to-head it beat tretinoin on speed and coarse wrinkling. Ranked first for coarse wrinkles and among the worst for adverse events in the network meta-analysis; licensed for photoaging in the US, rarely available in Europe.',
    evidence: 'strong',
    focus: 'prescription',
    note: 'Best for: leathery, coarsely wrinkled, heavily sun-damaged skin that has already tolerated tretinoin',
    sessions: '0.1% cream nightly; 0.05% to start',
    downtime: 'More burning and peeling than tretinoin, especially in week 1',
    cost: '€25–60 per tube, usually imported',
    bodyHtml: `
      <p>Tazarotene is a synthetic retinoid with the largest modern photoaging trials of any retinoid. In the 349-person dose-ranging study, treatment success at 24 weeks was 67% on 0.1% tazarotene, 55% on 0.05% tretinoin emollient cream and 22% on vehicle (<a href="https://pubmed.ncbi.nlm.nih.gov/11735710/" rel="noopener nofollow" target="_blank">Kang 2001</a>). In 563 patients it produced significantly more treatment success and at least one-grade improvements in fine wrinkling, mottled hyperpigmentation, lentigines, elastosis, pore size, roughness and coarse wrinkling at 24 weeks, with improvement that "had not plateaued by week 52" — and 20 of 283 tazarotene patients versus 1 of 280 on vehicle stopped for side effects (<a href="https://pubmed.ncbi.nlm.nih.gov/12437455/" rel="noopener nofollow" target="_blank">Phillips 2002</a>). A second 568-patient trial confirmed it with significance "as early as week 2" (<a href="https://pubmed.ncbi.nlm.nih.gov/15692472/" rel="noopener nofollow" target="_blank">Kang 2005</a>), and a direct comparison in 173 subjects found every significant difference in favour of tazarotene over tretinoin 0.05%, with a transient burning sensation in the first week (<a href="https://pubmed.ncbi.nlm.nih.gov/15203997/" rel="noopener nofollow" target="_blank">Lowe 2004</a>).</p>
      <p>The network meta-analysis put the trade-off in one sentence: tazarotene "most effective for coarse wrinkles" and, with glycolic acid, carrying "higher adverse event risks" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12289910/" rel="noopener nofollow" target="_blank">Lin 2025</a>). In Europe it is licensed in a handful of countries for psoriasis and acne and otherwise obtained by import on a private prescription — the strongest rung, for a face that has already climbed the others.</p>
    `,
  },
  {
    id: 'prod-adapalene',
    category: 'product',
    title: 'Adapalene 0.1–0.3% — the gentle synthetic',
    tldr: 'Adapalene 0.3% gel was non-inferior to tretinoin 0.05% cream for photoaging at 24 weeks in a randomised Brazilian trial; 0.1% and 0.3% lightened sun spots in 57–59% of patients against 36% on vehicle over nine months and improved wrinkles on blinded photographs; 0.1% cream reduced a skin-aging score by five points against no treatment in 58 women. Fewer and smaller trials than tretinoin, better tolerated, and the only retinoid medicine sold without prescription in the US.',
    evidence: 'moderate',
    focus: 'prescription',
    note: 'Best for: sensitive or acne-prone skin that cannot tolerate tretinoin; the 0.3% for aging',
    sessions: '0.1% nightly to start; 0.3% for photoaging',
    downtime: 'Milder than tretinoin',
    cost: '€10–25 per tube',
    bodyHtml: `
      <p>Adapalene binds the receptors directly, is stable in light and is less irritating than tretinoin — which made it the acne retinoid of choice and, more slowly, a photoaging candidate. The key trial randomised photoaged subjects to adapalene 0.3% gel or tretinoin 0.05% cream once daily for 24 weeks and found no significant difference in global photoaging, periorbital or forehead wrinkles, melanosis or keratoses, concluding it "may be considered a safe and effective option for the treatment of mild or moderate photoaging" (<a href="https://pubmed.ncbi.nlm.nih.gov/30105991/" rel="noopener nofollow" target="_blank">Bagatin 2018</a>). The earlier nine-month trial in 90 patients found keratosis counts down and lentigines lighter in 57% and 59% (0.1% and 0.3%) against 36% on vehicle, with blinded photographic review showing improved wrinkles (<a href="https://pubmed.ncbi.nlm.nih.gov/12833014/" rel="noopener nofollow" target="_blank">Kang 2003</a>). A 2025 randomised trial of 0.1% cream against no treatment in 58 women found a five-point fall in a skin-aging score at six months, with pigmentation and wrinkles improved (<a href="https://pubmed.ncbi.nlm.nih.gov/40990960/" rel="noopener nofollow" target="_blank">Tran 2025</a>).</p>
      <p>Graded moderate: the trials are consistent but few, small and not placebo-controlled at the strength that matters for aging. A cosmetic prodrug, oleyl adapalenate, improved wrinkle severity 9.5% against 4.1% for 0.5% retinol in a 48-person 12-week trial — one manufacturer study (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11608876/" rel="noopener nofollow" target="_blank">Nguyen 2024</a>). In Europe adapalene remains prescription-only at both strengths; where a doctor will not prescribe tretinoin off-label, adapalene for "acne-prone skin" is often the easier conversation.</p>
    `,
  },
  {
    id: 'prod-retinal',
    category: 'product',
    title: 'Retinaldehyde 0.05–0.1% — strongest without a prescription',
    tldr: 'One conversion step from retinoic acid and about ten times the potency of retinol in the receptor assay. In a 125-patient randomised trial, 0.05% retinaldehyde reduced crow\'s-feet wrinkles and roughness as much as 0.05% tretinoin at 18 weeks, with far better tolerance; in a 23-person split-face study it beat retinol at equal strength on most objective measures. Well tolerated for up to three years in 229 patients. Not covered by the EU retinol cap.',
    evidence: 'moderate',
    focus: 'cosmetic',
    note: 'Top pick: Medik8 Crystal Retinal 6 or 10 (0.06–0.1% retinal); Avène RetrinAL 0.1',
    sessions: '0.05% two nights a week, building to nightly 0.1%',
    downtime: 'Mild; less than retinol at equal strength in one study',
    cost: '€30–70 per 30 ml',
    bodyHtml: `
      <p>Retinaldehyde sits one enzyme away from retinoic acid, and the biology follows: in the human enzyme-induction study it was active at 0.01% against 0.025% for retinol (<a href="https://pubmed.ncbi.nlm.nih.gov/9284094/" rel="noopener nofollow" target="_blank">Duell 1997</a>), and the Geneva group that introduced it showed dose-dependent epidermal thickening at 0.05–0.5% and, in 229 patients, that 0.05% and 0.1% "were well tolerated and allowed prolonged use (up to 3 years)" while 1% was tolerated by only 70% (<a href="https://pubmed.ncbi.nlm.nih.gov/7798613/" rel="noopener nofollow" target="_blank">Saurat 1994</a>). The efficacy trial randomised 125 photodamaged patients to 0.05% retinaldehyde, 0.05% retinoic acid or vehicle: at week 18 both actives significantly reduced wrinkle and roughness features on silicone replicas of the crow's feet, the vehicle did nothing, and "retinoic acid caused more local irritation, and affected compliance" (<a href="https://pubmed.ncbi.nlm.nih.gov/9843009/" rel="noopener nofollow" target="_blank">Creidi 1998</a>). A split-face study in 23 Korean volunteers found vesicle-encapsulated retinal 0.05% and 0.1% improving crow's-feet depth, hydration and elasticity significantly more than retinol at the same concentrations over eight weeks, with no adverse events (<a href="https://pubmed.ncbi.nlm.nih.gov/33569865/" rel="noopener nofollow" target="_blank">Kim 2021</a>).</p>
      <p>Graded moderate, not strong: one 125-patient randomised trial, one 23-person study and manufacturer work (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10539272/" rel="noopener nofollow" target="_blank">Brown 2023</a>) against tretinoin's dozens. But it is the best-evidenced thing you can buy without a prescription, its instability is managed by encapsulation in the serious products, and because <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202400996" rel="noopener nofollow" target="_blank">Regulation 2024/996</a> does not name it, a 0.1% retinal cream is now the strongest retinoid legally on a European cosmetic shelf. Start at 0.03–0.05%, move to 0.1% after three months.</p>
    `,
  },
  {
    id: 'prod-retinol',
    category: 'product',
    title: 'Retinol 0.1–0.3% — the EU-compliant range',
    tldr: 'Retinol works, at strengths the EU still allows: 0.4% lotion three times a week improved fine wrinkles in 36 people averaging 87 years old with biopsy-proven new collagen; 0.1% stabilised retinol over 52 weeks improved crow\'s-feet lines by 44% and mottled pigment by 84%; a pooled analysis of six vehicle-controlled studies (471 people) found improvement from week 4 with almost no irritation. Trials are consistent but small and manufacturer-run, hence moderate.',
    evidence: 'moderate',
    focus: 'cosmetic',
    note: 'Top pick: La Roche-Posay Retinol B3 (0.3%) or SkinCeuticals Retinol 0.3 — a stated percentage in an airless tube',
    sessions: '0.1% nightly, or 0.3% three nights a week',
    downtime: 'Mild flaking at 0.3% and above',
    cost: '€15–90 per 30 ml',
    bodyHtml: `
      <p>Retinol is two conversions from retinoic acid and penetrates well without occlusion (<a href="https://pubmed.ncbi.nlm.nih.gov/9284094/" rel="noopener nofollow" target="_blank">Duell 1997</a>). Its independent evidence is the Michigan trial in two nursing homes: 0.4% retinol lotion applied by staff up to three times a week for 24 weeks to one arm of 36 elderly subjects (mean age 87) improved fine-wrinkle scores by 1.64 points against 0.08 on vehicle, with significantly increased glycosaminoglycan and procollagen I on biopsy (<a href="https://pubmed.ncbi.nlm.nih.gov/17515510/" rel="noopener nofollow" target="_blank">Kafi 2007</a>). The manufacturer evidence is larger: a 52-week double-blind trial of 0.1% stabilised retinol in 62 subjects found crow's-feet fine lines improved 44% and mottled pigmentation 84%, with over half the subjects two grades better on many measures and increased procollagen I and hyaluronan on biopsy (<a href="https://pubmed.ncbi.nlm.nih.gov/25738849/" rel="noopener nofollow" target="_blank">Randhawa 2015</a>); a pooled analysis of six vehicle-controlled studies (237 retinol, 234 vehicle, mean age 47) found improvement in all signs of photoaging from week 4 through 12 with only a handful of mild irritation events (<a href="https://pubmed.ncbi.nlm.nih.gov/38564380/" rel="noopener nofollow" target="_blank">Farris 2024</a>). A 2024 systematic review of cosmeceuticals gave retinol its top recommendation grade (<a href="https://pubmed.ncbi.nlm.nih.gov/38758222/" rel="noopener nofollow" target="_blank">Lau 2024</a>), and the network meta-analysis found it effective for fine wrinkles and pigment (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12289910/" rel="noopener nofollow" target="_blank">Lin 2025</a>).</p>
      <p>Against tretinoin it is weaker weight for weight and gentler: a 1.1% retinol-plus-esters formula matched 0.02% tretinoin on photoaging scores in 20 women at 24 weeks with erythema six times less often (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9178500/" rel="noopener nofollow" target="_blank">Chien, JAMA Dermatology 2022</a>), and 1% retinol caused more redness than a conjugated retinoid in a split-face study (<a href="https://pubmed.ncbi.nlm.nih.gov/28762645/" rel="noopener nofollow" target="_blank">McDaniel 2017</a>). The EU cap of 0.3% removes the 0.5–1% products from the market by May 2027; the 0.1–0.3% range is where most of the trial evidence sits anyway. What matters more than the number is the formula: stabilised, encapsulated, airless — because the stability study found plain retinol products losing most of their content on the shelf (<a href="https://pubmed.ncbi.nlm.nih.gov/33206444/" rel="noopener nofollow" target="_blank">stability study</a>).</p>
    `,
  },
  {
    id: 'prod-esters',
    category: 'product',
    title: 'Retinyl palmitate, acetate, propionate — the "retinol" that is not',
    tldr: 'The storage esters need roughly twenty times the concentration of retinol to do anything in skin, and the only independent placebo-controlled trial of one — retinyl propionate cream in 80 people for 48 weeks — found no significant difference from placebo on any clinical, histological or profilometric measure. Manufacturer regimens combining 0.3% retinyl propionate with niacinamide and peptides matched 0.02% tretinoin at 24 weeks. Read the label: "retinyl palmitate" at an undisclosed percentage is a moisturiser.',
    evidence: 'limited',
    focus: 'cosmetic',
    note: 'Best for: nothing on its own — a marker of a product trading on the word "retinol"',
    sessions: '—',
    downtime: 'None, which is the point',
    cost: '€10–60, for very little',
    bodyHtml: `
      <p>Retinyl esters are how the body stores vitamin A, and they are what many products mean when the front label says "retinol". They are stable, cheap and inert enough to sit in a moisturiser without irritating anyone — because very little of them becomes retinoic acid. The human enzyme study needed 0.6% retinyl palmitate to match 0.025% retinol (<a href="https://pubmed.ncbi.nlm.nih.gov/9284094/" rel="noopener nofollow" target="_blank">Duell 1997</a>). The one independent, double-blind, placebo-controlled trial randomised 80 subjects to retinyl propionate cream or placebo for 24 weeks, 60 of them continuing to 48: "no statistically significant differences between the effects of the retinyl propionate cream and the placebo preparation were apparent for any of the clinical, histological or profilometric parameters" (<a href="https://pubmed.ncbi.nlm.nih.gov/9894360/" rel="noopener nofollow" target="_blank">Green 1998</a>).</p>
      <p>The manufacturer trials are kinder and confounded: a Procter &amp; Gamble regimen of niacinamide, peptides and 0.3% retinyl propionate with SPF 30 improved wrinkles more than 0.02% tretinoin at eight weeks and comparably at 24 in 196 women (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2841824/" rel="noopener nofollow" target="_blank">Fu 2010</a>), and a Unilever retinyl propionate–climbazole combination beat 0.1% retinol on a split face (<a href="https://pubmed.ncbi.nlm.nih.gov/28733999/" rel="noopener nofollow" target="_blank">Hawkins 2017</a>) — in each case the ester travelled with other actives and without a placebo arm. Since November 2025 the esters count toward the EU's 0.3% retinol-equivalent cap (0.55% retinyl palmitate ≈ 0.3% retinol). Graded limited: an independent negative trial and industry positives that cannot isolate the molecule.</p>
    `,
  },
  {
    id: 'prod-hpr',
    category: 'product',
    title: 'Hydroxypinacolone retinoate ("granactive retinoid")',
    tldr: 'The most stable retinoid on the shelf, marketed as receptor-active without conversion and irritation-free. The human evidence is a Chinese manufacturer programme combining it with retinyl propionate: 8% fewer wrinkles and 14–23% better elasticity at eight weeks in a study with no vehicle arm. No independent randomised trial against vehicle, retinol or tretinoin exists. Stable, pleasant, unproven.',
    evidence: 'limited',
    focus: 'cosmetic',
    note: 'Best for: skin that cannot tolerate anything else and accepts an unproven molecule',
    sessions: '2–5% "granactive" complex (0.2–0.5% HPR) nightly',
    downtime: 'Essentially none',
    cost: '€10–50',
    bodyHtml: `
      <p>Hydroxypinacolone retinoate is an ester of retinoic acid, sold as the "granactive retinoid" in a 2% or 5% complex that contains a tenth of that as the active. Its selling points are real in the laboratory: it was the most stable of sixteen retinoid derivatives in the six-month commercial stability study (<a href="https://pubmed.ncbi.nlm.nih.gov/33206444/" rel="noopener nofollow" target="_blank">stability study</a>), it binds retinoid receptors in cell work, and a 2026 mouse study found a 9-cis version protecting against UV-induced matrix loss (<a href="https://pubmed.ncbi.nlm.nih.gov/41644086/" rel="noopener nofollow" target="_blank">Hu 2026</a>). The clinical evidence is a Chinese cosmetic-science programme pairing it with retinyl propionate ("Gravi-A"): an optimal 5:9 ratio in fibroblasts, then an eight-week serum study reporting wrinkles improved 8.3%, smoothness 11.9% and elasticity 14.5–22.6% with fewer adverse effects than retinol at the same concentration — and no vehicle control (<a href="https://pubmed.ncbi.nlm.nih.gov/36762391/" rel="noopener nofollow" target="_blank">Wang 2023</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10051651/" rel="noopener nofollow" target="_blank">nanoparticle formulation</a>).</p>
      <p>That is the whole human record as of 2026: no independent randomised trial against vehicle, retinol or tretinoin, and no biopsy evidence of collagen. It may well work — the chemistry is plausible — but a product whose advertising leans on stability and comfort rather than on a trial is telling you something. Graded limited on evidence, not on mechanism; the same rung as the classic esters until someone runs the trial.</p>
    `,
  },
  {
    id: 'prod-bakuchiol',
    category: 'product',
    title: 'Bakuchiol — the plant "retinol alternative"',
    tldr: 'Not a retinoid, but it switches on a similar set of skin genes. In a randomised, double-blind, 12-week trial of 44 people, bakuchiol 0.5% twice daily matched retinol 0.5% once daily for wrinkle surface area and pigmentation, with less scaling and stinging. One trial, against a modest retinol dose, with no vehicle arm; a systematic review found seven clinical studies in total. Promising for skin that cannot tolerate a retinoid, and for pregnancy where a retinoid is off the table.',
    evidence: 'emerging',
    focus: 'cosmetic',
    note: 'Best for: pregnancy, breastfeeding and truly intolerant skin — as the substitute, not the upgrade',
    sessions: '0.5–1% twice daily',
    downtime: 'Little',
    cost: '€20–50',
    bodyHtml: `
      <p>Bakuchiol is a meroterpene from the seeds of <em>Psoralea corylifolia</em>. Gene-expression profiling found it regulating retinoid-responsive genes in skin cells despite no structural resemblance to vitamin A (<a href="https://pubmed.ncbi.nlm.nih.gov/24471735/" rel="noopener nofollow" target="_blank">Chaudhuri 2014</a>). The trial that made its name randomised 44 patients to bakuchiol 0.5% cream twice daily or retinol 0.5% once daily for twelve weeks, with blinded grading of high-resolution photographs: both "significantly decreased wrinkle surface area and hyperpigmentation, with no statistical difference between the compounds", and retinol users reported more scaling and stinging (<a href="https://pubmed.ncbi.nlm.nih.gov/29947134/" rel="noopener nofollow" target="_blank">Dhaliwal 2019</a>). A systematic review found 30 articles — sixteen preclinical, seven clinical — and results "comparable to those achieved by topical retinoids" for photoaging, acne and post-inflammatory pigmentation (<a href="https://pubmed.ncbi.nlm.nih.gov/36176207/" rel="noopener nofollow" target="_blank">Puyana 2022</a>).</p>
      <p>Why emerging rather than moderate: one 44-person trial, twice-daily bakuchiol against once-daily retinol, twelve weeks, no vehicle, no biopsy. "As good as retinol" in that design is a real signal and a modest bar. Its practical niche is honest — the person who cannot use a retinoid at all, including in pregnancy, where bakuchiol has no known teratogenic signal but also no safety trial; and the person who wants the daytime product a photolabile retinoid cannot be.</p>
    `,
  },
  {
    id: 'prod-isotretinoin',
    category: 'product',
    title: 'Low-dose oral isotretinoin (off-label, specialist only)',
    tldr: 'Ranked highest for fine wrinkles in the 2025 network meta-analysis, but on thin evidence: a review found six studies with 251 patients in total, four positive, and "insufficient evidence"; the one randomised comparison (24 people, 20 mg every other day versus 0.05% tretinoin for six months) found both improved and isotretinoin "not superior". A teratogen with blood tests and eye risks, taken for a result a cream gives.',
    evidence: 'emerging',
    focus: 'oral',
    note: 'Best for: almost no one for aging alone — a dermatologist\'s decision when acne or severe photodamage justifies a systemic drug',
    sessions: '10–20 mg on alternate days or daily, 3–6 months',
    downtime: 'Dry lips and eyes; monitoring; strict contraception',
    cost: '€20–40 a month plus consultations and blood tests',
    bodyHtml: `
      <p>Oral isotretinoin remodels skin from the inside — the same p53 reduction and collagen increase seen with topical tretinoin appear in biopsies — and Brazilian dermatologists have studied low doses for photoaging for twenty years. The randomised comparison enrolled 24 people aged 50–75 with advanced photoaging: 20 mg isotretinoin or 0.05% tretinoin cream, each every other day for six months, with moisturiser and sunscreen. Both groups improved clinically and histologically, with "no differences between groups": "low-dose ISO was not superior to 0.05% RA" (<a href="https://pubmed.ncbi.nlm.nih.gov/24168514/" rel="noopener nofollow" target="_blank">Bagatin 2014</a>). The 2020 review found six studies and 251 patients in total, three randomised, "many hampered by methodological challenges", and concluded there is "currently insufficient evidence" (<a href="https://pubmed.ncbi.nlm.nih.gov/32372509/" rel="noopener nofollow" target="_blank">Honeybrook 2020</a>). The network meta-analysis nonetheless ranked it first for fine wrinkles, on those few trials (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12289910/" rel="noopener nofollow" target="_blank">Lin 2025</a>).</p>
      <p>The costs are systemic: absolute contraindication in pregnancy under a formal prevention programme, lipid and liver monitoring, dry eyes and a documented need for ocular surveillance in off-label photoaging use (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12371842/" rel="noopener nofollow" target="_blank">ocular surveillance review</a>). Emerging, and a conversation for a dermatologist who is already treating something else.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-irritation',
    category: 'safety',
    title: 'Retinoid dermatitis — how common, how long, and when it is something else',
    tldr: 'Redness, dryness, peeling, stinging: 88% of tretinoin users in the melasma trial, 61% versus 42% on vehicle in the veterans\' trial at six months, gone as a difference by 30 months. Peaks at weeks two to four, settles by six to eight with a slower ramp. Not an allergy, not a "purge" of the face, and not a sign it is "working harder". Swelling, oozing or a spreading rash are something else — stop and be seen.',
    bodyHtml: `
      <p>The irritation is pharmacological, not allergic: retinoic acid thins the stratum corneum and speeds turnover before the barrier catches up, and it is dose-dependent — the 0.1%-versus-0.025% study found the same results with different degrees of irritation (<a href="https://pubmed.ncbi.nlm.nih.gov/7544967/" rel="noopener nofollow" target="_blank">Griffiths 1995</a>). The rates: erythema or desquamation in 88% of tretinoin users versus 29% on vehicle in the 40-week melasma trial (<a href="https://pubmed.ncbi.nlm.nih.gov/8217756/" rel="noopener nofollow" target="_blank">Griffiths 1993</a>); any side effect in 61% versus 42% at six months in 736 veterans on 0.1%, burning in 39% versus 17%, mostly mild, and "the difference became nonsignificant at 30 months" (<a href="https://pubmed.ncbi.nlm.nih.gov/19681859/" rel="noopener nofollow" target="_blank">VA tolerability study</a>). Tazarotene adds a first-week burning sensation (<a href="https://pubmed.ncbi.nlm.nih.gov/15203997/" rel="noopener nofollow" target="_blank">Lowe 2004</a>); stabilised 0.1% retinol produced a handful of mild events in 237 people (<a href="https://pubmed.ncbi.nlm.nih.gov/38564380/" rel="noopener nofollow" target="_blank">Farris 2024</a>).</p>
      <p>Management is the ramp in the context section: lower strength, fewer nights, moisturiser, no other actives on retinoid nights, nothing on the eyelids or the corners of the nose and mouth where cream collects. Ceramide moisturisers measurably reduced dryness, redness and barrier damage during adapalene treatment in two randomised studies (<a href="https://pubmed.ncbi.nlm.nih.gov/37276158/" rel="noopener nofollow" target="_blank">Draelos 2023</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/38299457/" rel="noopener nofollow" target="_blank">Tempark 2024</a>). "Purging" is real only in acne, where existing microcomedones surface faster in weeks two to four; on a non-acne face, new spots are irritation or the wrong product. True allergic contact dermatitis to a retinoid is rare — the usual culprit in a reacting product is the preservative or fragrance.</p>
    `,
  },
  {
    id: 'safety-sun',
    category: 'safety',
    title: 'Sun, timing and the photocarcinogenicity scare',
    tldr: 'Retinoids are photolabile, not photosensitising: sunlight destroys the molecule, and a thinner stratum corneum burns a little more easily in the first weeks — so apply at night and wear sunscreen, which every trial required anyway. The US toxicology study that found retinyl palmitate accelerating tumours in hairless mice under simulated sunlight has no human counterpart; the human data are four years of biopsies and a five-year cancer trial with nothing untoward.',
    bodyHtml: `
      <p>Two facts get confused. Retinoids absorb ultraviolet light and break down in it — which is why the trials dosed at night and why a daytime retinoid is mostly wasted. Separately, freshly retinised skin has a thinner horny layer and is somewhat easier to burn in the early weeks; that is a sunscreen instruction, not a contraindication, and the 2025 photoaging review lists retinoids alongside sunscreen as the standard of care (<a href="https://pubmed.ncbi.nlm.nih.gov/40072791/" rel="noopener nofollow" target="_blank">Kaltchenko 2025</a>). Retinoids do not make skin photosensitive in the way doxycycline or St John's wort do.</p>
      <p>The scare comes from the US National Toxicology Program, which applied retinoic acid and retinyl palmitate to hairless mice under simulated solar light for a year and reported enhanced photocarcinogenesis (<a href="https://pubmed.ncbi.nlm.nih.gov/23001333/" rel="noopener nofollow" target="_blank">NTP technical report</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/15845224/" rel="noopener nofollow" target="_blank">photoreactivity review</a>). Mice were dosed and irradiated together, at doses and exposures no night-time user experiences; the human evidence points the other way — no keratinocyte or melanocyte abnormality after four years (<a href="https://pubmed.ncbi.nlm.nih.gov/8785167/" rel="noopener nofollow" target="_blank">Bhawan 1996</a>), no atypia after two (<a href="https://pubmed.ncbi.nlm.nih.gov/16060712/" rel="noopener nofollow" target="_blank">Kang 2005</a>), and no increase in skin cancer in 1,131 high-risk patients over five years (<a href="https://pubmed.ncbi.nlm.nih.gov/22318383/" rel="noopener nofollow" target="_blank">VA trial</a>). One honest footnote to that trial: it was stopped six months early because of an excess of deaths in the tretinoin group, a difference that stayed statistically significant after adjusting for the imbalances in age, illness and smoking between the groups; the investigators "do not infer a causal association that current evidence suggests is unlikely" (<a href="https://pubmed.ncbi.nlm.nih.gov/19153339/" rel="noopener nofollow" target="_blank">Weinstock 2009</a>), the participants were 71-year-old men applying 0.1% twice daily for years, and an evidence review found no sign of it in retinoid use for acne (<a href="https://pubmed.ncbi.nlm.nih.gov/19874358/" rel="noopener nofollow" target="_blank">Ingram 2010</a>). It exists, it is unexplained, and this guide would rather you read it here than on a forum.</p>
    `,
  },
  {
    id: 'safety-pregnancy',
    category: 'safety',
    title: 'Pregnancy and breastfeeding',
    tldr: 'Topical retinoids are stopped when you are pregnant or trying, and oral isotretinoin is absolutely forbidden. The reassurance if you used a cream before you knew: a meta-analysis of 654 first-trimester-exposed pregnancies against 1,375 controls found no significant increase in major malformations, miscarriage, stillbirth, low birthweight or prematurity. The rule stands because isotretinoin is a proven teratogen and topical absorption, though tiny, is not zero.',
    bodyHtml: `
      <p>Oral isotretinoin causes severe birth defects and is dispensed under pregnancy-prevention programmes; no cosmetic use justifies it in anyone who could conceive without reliable contraception. Topical retinoids are absorbed in small amounts — plasma tazarotenic acid stayed below endogenous retinoid levels in the 563-patient trial (<a href="https://pubmed.ncbi.nlm.nih.gov/12437455/" rel="noopener nofollow" target="_blank">Phillips 2002</a>) — and the human data are reassuring: the systematic review and meta-analysis of first-trimester exposure to topical retinoids found odds ratios that did not differ from 1 for major congenital malformations (1.22, 95% CI 0.65–2.29), spontaneous abortion (1.02), stillbirth, low birthweight and prematurity (<a href="https://pubmed.ncbi.nlm.nih.gov/26215715/" rel="noopener nofollow" target="_blank">Kaplan 2015</a>). Guidelines for acne in pregnancy nonetheless advise stopping topical retinoids, because the downside is catastrophic and the alternative is a few months without them (<a href="https://pubmed.ncbi.nlm.nih.gov/38453786/" rel="noopener nofollow" target="_blank">acne in pregnancy review</a>).</p>
      <p>So: stop when you start trying; do not panic about the weeks before a positive test; stay off through breastfeeding for the same precautionary reason; use bakuchiol, azelaic acid, vitamin C and sunscreen meanwhile; and restart on a low rung afterwards. Stretch marks, the one problem where timing would favour a retinoid during pregnancy, wait until after.</p>
    `,
  },
  {
    id: 'safety-who-careful',
    category: 'safety',
    title: 'Who should go slowly, and what not to mix on the same night',
    tldr: 'Rosacea, eczema, very dry or reactive skin, recent peels, lasers or microneedling, waxing, and darker skin prone to post-inflammatory pigment from irritation: all fine with a retinoid eventually, all needing a slower ramp and a lower rung. Benzoyl peroxide (with tretinoin), strong acids and physical scrubs on the same night multiply irritation; vitamin C and niacinamide do not need to be feared.',
    bodyHtml: `
      <p>None of these is a contraindication; all are reasons to start at the bottom of the ladder. <strong>Rosacea and reactive skin:</strong> an old trial even used tretinoin to treat severe rosacea (<a href="https://pubmed.ncbi.nlm.nih.gov/8129410/" rel="noopener nofollow" target="_blank">Ertl 1994</a>), but the first weeks can flare it; retinal or 0.1% retinol, once or twice a week, under moisturiser. <strong>Darker skin:</strong> retinoids treat post-inflammatory pigment (<a href="https://pubmed.ncbi.nlm.nih.gov/8479462/" rel="noopener nofollow" target="_blank">Bulengo-Ransby 1993</a>), but irritation itself can cause it, so the ramp matters more, not less. <strong>Procedures:</strong> stop a retinoid a few days before waxing, peels and resurfacing and restart when the skin has healed; used in the months before, it is a well-established pre-treatment (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12653878/" rel="noopener nofollow" target="_blank">Balado-Simó 2025</a>). <strong>Eczema:</strong> barrier first, retinoid later, on the face only.</p>
      <p><strong>Mixing.</strong> Tretinoin is degraded by benzoyl peroxide applied at the same time (adapalene is not); glycolic and salicylic acids and scrubs on the same night stack irritation without adding benefit; alternate nights solves both. Vitamin C in the morning and a retinoid at night is the conventional pairing, and niacinamide alongside a retinoid is, if anything, soothing — a niacinamide-and-ceramide moisturiser reduced irritation during acne retinoid treatment in a split-face randomised trial (<a href="https://pubmed.ncbi.nlm.nih.gov/38299457/" rel="noopener nofollow" target="_blank">Tempark 2024</a>). The eyelid margin, the nostril creases and the corners of the mouth collect product and burn first: skip them or wipe them.</p>
    `,
  },
  {
    id: 'safety-myths',
    category: 'safety',
    title: 'Five myths: thin skin, no summers, no eyes, stopped working, and "it burns so it\'s working"',
    tldr: 'Retinoids thicken the epidermis by about 30%, not thin it. They are used year-round with sunscreen. The skin around the eyes is where the retinol trials measured their results. Tolerance to the irritation develops; tolerance to the benefit does not. And burning is dose, not efficacy: 0.025% did what 0.1% did with a fraction of the irritation.',
    bodyHtml: `
      <p><strong>"Retinoids thin the skin."</strong> The opposite: epidermal thickness rose 28–30% after 48 weeks of tretinoin against an 11% fall on vehicle (<a href="https://pubmed.ncbi.nlm.nih.gov/7544967/" rel="noopener nofollow" target="_blank">Griffiths 1995</a>), the dermis makes more collagen (<a href="https://pubmed.ncbi.nlm.nih.gov/8336752/" rel="noopener nofollow" target="_blank">Griffiths 1993</a>) and retinaldehyde thickened the epidermis dose-dependently (<a href="https://pubmed.ncbi.nlm.nih.gov/7798613/" rel="noopener nofollow" target="_blank">Saurat 1994</a>). The myth comes from the early peeling, which is the stratum corneum turning over faster. <strong>"Stop in summer."</strong> The trials ran through summers with sunscreen; stopping for three months a year loses ground (<a href="https://pubmed.ncbi.nlm.nih.gov/9270508/" rel="noopener nofollow" target="_blank">Olsen 1997</a>). <strong>"Never near the eyes."</strong> The crow's feet are exactly where the 52-week retinol trial measured its 44% improvement (<a href="https://pubmed.ncbi.nlm.nih.gov/25738849/" rel="noopener nofollow" target="_blank">Randhawa 2015</a>) and where the retinaldehyde trial took its silicone replicas (<a href="https://pubmed.ncbi.nlm.nih.gov/9843009/" rel="noopener nofollow" target="_blank">Creidi 1998</a>); the lid margin itself is skipped, the orbital bone is not.</p>
      <p><strong>"It stopped working."</strong> Irritation fades because the skin adapts; the biological response does not — improvement continued through year two in the long trials (<a href="https://pubmed.ncbi.nlm.nih.gov/16060712/" rel="noopener nofollow" target="_blank">Kang 2005</a>). What usually happened is that the visible change plateaued because the easy gains came first, or the product degraded in its jar (<a href="https://pubmed.ncbi.nlm.nih.gov/33206444/" rel="noopener nofollow" target="_blank">stability study</a>). <strong>"If it burns, it's working."</strong> The equivalence of 0.025% and 0.1% is the whole answer: irritation tracks dose, results track time.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-how-long',
    category: 'faq',
    title: 'How long until I see something?',
    tldr: 'Pigment: 4 weeks. Texture and glow: 8–12. Fine lines: 12–24 weeks. Coarse lines: a year. It keeps improving into year two.',
    bodyHtml: `
      <p>Hyperpigmented lesions were significantly lighter after one month of tretinoin (<a href="https://pubmed.ncbi.nlm.nih.gov/1729619/" rel="noopener nofollow" target="_blank">Rafal 1992</a>); tazarotene hit significance on some measures at week 2 and was still improving at week 52 (<a href="https://pubmed.ncbi.nlm.nih.gov/12437455/" rel="noopener nofollow" target="_blank">Phillips 2002</a>); melasma took 24 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/8217756/" rel="noopener nofollow" target="_blank">Griffiths 1993</a>); the two-year trial was still separating from placebo at the end (<a href="https://pubmed.ncbi.nlm.nih.gov/16060712/" rel="noopener nofollow" target="_blank">Kang 2005</a>). Photograph yourself in the same light at 0, 3, 6 and 12 months; the mirror lies.</p>
    `,
  },
  {
    id: 'faq-which-first',
    category: 'faq',
    title: 'Which one should I start with?',
    tldr: 'With a prescription: tretinoin 0.025%. Without: retinaldehyde 0.05%, or a stabilised 0.1–0.3% retinol. Sensitive: adapalene 0.1% or retinol 0.1%.',
    bodyHtml: `
      <p>The strengths are chosen from the trials: 0.025% tretinoin matched 0.1% (<a href="https://pubmed.ncbi.nlm.nih.gov/7544967/" rel="noopener nofollow" target="_blank">Griffiths 1995</a>), 0.05% retinaldehyde matched 0.05% tretinoin (<a href="https://pubmed.ncbi.nlm.nih.gov/9843009/" rel="noopener nofollow" target="_blank">Creidi 1998</a>), 0.1% stabilised retinol carried a 52-week trial (<a href="https://pubmed.ncbi.nlm.nih.gov/25738849/" rel="noopener nofollow" target="_blank">Randhawa 2015</a>). Skip retinyl esters and undisclosed "retinol complexes". Climb one rung every three to six months only if the skin is bored, not because a stronger number exists.</p>
    `,
  },
  {
    id: 'faq-how-often',
    category: 'faq',
    title: 'Every night, or a few times a week?',
    tldr: 'Twice a week to start, nightly by month three if tolerated, three nights a week for life after year one.',
    bodyHtml: `
      <p>The maintenance trial is the evidence: after 48 weeks of nightly use, three nights a week sustained and sometimes extended the result, once a week partly, and stopping lost it (<a href="https://pubmed.ncbi.nlm.nih.gov/9270508/" rel="noopener nofollow" target="_blank">Olsen 1997</a>). Nightly use is not required for the benefit — the 87-year-olds in the retinol trial were treated up to three times a week (<a href="https://pubmed.ncbi.nlm.nih.gov/17515510/" rel="noopener nofollow" target="_blank">Kafi 2007</a>) — but consistency over years is.</p>
    `,
  },
  {
    id: 'faq-combine',
    category: 'faq',
    title: 'Can I use it with vitamin C, acids, niacinamide or benzoyl peroxide?',
    tldr: 'Vitamin C morning, retinoid night: yes. Niacinamide: yes, together. Acids and scrubs: alternate nights. Benzoyl peroxide: not with tretinoin at the same time.',
    bodyHtml: `
      <p>Niacinamide-and-ceramide moisturisers reduced retinoid irritation in randomised trials (<a href="https://pubmed.ncbi.nlm.nih.gov/38299457/" rel="noopener nofollow" target="_blank">Tempark 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/37276158/" rel="noopener nofollow" target="_blank">Draelos 2023</a>). Glycolic acid was the best agent for roughness in the network meta-analysis and also among the most irritating (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12289910/" rel="noopener nofollow" target="_blank">Lin 2025</a>) — use it on the nights off. Benzoyl peroxide oxidises tretinoin (not adapalene); separate them by twelve hours. The <a href="/ceramides">ceramides guide</a> covers the moisturiser side.</p>
    `,
  },
  {
    id: 'faq-eu-ban',
    category: 'faq',
    title: 'Is retinol banned in the EU now?',
    tldr: 'No — capped. 0.3% retinol equivalents on the face, 0.05% in body lotion, from 1 November 2025; old stock gone by 1 May 2027. Retinal is not covered.',
    bodyHtml: `
      <p><a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202400996" rel="noopener nofollow" target="_blank">Regulation (EU) 2024/996</a> restricts retinol, retinyl acetate and retinyl palmitate and requires the label "Contains Vitamin A. Consider your daily intake before use." It was about total vitamin A intake, not skin harm. Retinaldehyde, hydroxypinacolone retinoate and the prescription retinoids are unaffected, and 0.3% is above the 0.1% that carried the 52-week trial. The 1% serums are leaving the shelves; you will not miss them.</p>
    `,
  },
  {
    id: 'faq-retinol-vs-tretinoin',
    category: 'faq',
    title: 'Is retinol as good as tretinoin?',
    tldr: 'Weaker weight for weight, gentler, and — in one small trial of a 1.1% formula against 0.02% tretinoin — not measurably different at 24 weeks. Tretinoin has the trials; retinol has the tolerability.',
    bodyHtml: `
      <p>Twenty women randomised to a 1.1% retinol-plus-esters formula or 0.02% tretinoin for 24 weeks showed no significant difference in photoaging scores, with erythema in 11% versus 64% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9178500/" rel="noopener nofollow" target="_blank">Chien 2022</a>); the enzyme study puts retinol at roughly a tenth to a twentieth of tretinoin's potency (<a href="https://pubmed.ncbi.nlm.nih.gov/9284094/" rel="noopener nofollow" target="_blank">Duell 1997</a>); the systematic review calls tretinoin the standard its comparators are measured against (<a href="https://pubmed.ncbi.nlm.nih.gov/39348007/" rel="noopener nofollow" target="_blank">Siddiqui 2024</a>). A 0.3% retinol you use nightly for two years will beat a tretinoin tube abandoned in week three.</p>
    `,
  },
  {
    id: 'faq-eyes',
    category: 'faq',
    title: 'Can I use it around my eyes?',
    tldr: 'Yes, on the orbital bone, not the lid margin. The crow\'s feet are where the retinol and retinal trials measured their results.',
    bodyHtml: `
      <p>The 44% crow's-feet improvement (<a href="https://pubmed.ncbi.nlm.nih.gov/25738849/" rel="noopener nofollow" target="_blank">Randhawa 2015</a>) and the retinaldehyde silicone replicas (<a href="https://pubmed.ncbi.nlm.nih.gov/9843009/" rel="noopener nofollow" target="_blank">Creidi 1998</a>) were both taken at the outer eye. Use the lowest rung there, a rice grain, and stop at the bone; the lid skin itself is too thin and too close to the eye. The <a href="/crows-feet">crow's feet guide</a> covers what toxin adds.</p>
    `,
  },
  {
    id: 'faq-cost',
    category: 'faq',
    title: 'What does it cost?',
    tldr: '€8–25 a tube for prescription tretinoin or adapalene, lasting two to three months; €25–70 for a retinal cream; €15–90 for retinol serums, mostly for the packaging.',
    bodyHtml: `
      <p>Indicative European private prices. The trial evidence is cheapest at the top of the ladder: a generic 0.025% tretinoin cream costs less than most moisturisers and outperforms every cosmetic below it. Retinal creams from serious brands cost €30–70 and are the best buy without a prescription; retinol prices track marketing more than concentration, and the stability study found no reliable link between price and content that survived six months on a shelf (<a href="https://pubmed.ncbi.nlm.nih.gov/33206444/" rel="noopener nofollow" target="_blank">stability study</a>). Budget for sunscreen and a bland moisturiser first; they are half the treatment.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What a retinoid is and what it does',
    intro: '',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you buy: the rules, the ramp and the packaging',
    intro: '',
    sections: context,
  },
  {
    id: 'uses',
    title: 'What retinoids do — every use graded',
    intro: 'Graded on the trials for each use, whichever retinoid ran them. Tretinoin\'s evidence sets the ceiling; the product rows below say which forms have earned it.',
    sections: uses,
  },
  {
    id: 'products',
    title: 'The ladder, rung by rung — every form graded on its own trials',
    intro: 'From the molecule with two-year placebo-controlled data to the esters with none. A cosmetic retinoid is graded on what it has shown, not on what tretinoin has.',
    sections: products,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The irritation is real and manageable; the cancer scare is mice; the pregnancy rule stands on caution rather than on data. And five myths that cost people their results.',
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
  lines: 'Lines',
  pigment: 'Pigment',
  texture: 'Texture',
  body: 'Body & neck',
  prescription: 'Prescription',
  cosmetic: 'Cosmetic',
  oral: 'Oral',
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
