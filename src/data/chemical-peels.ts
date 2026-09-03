/**
 * Chemical peels guide — single source of truth.
 *
 * Consumed by /chemical-peels. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank". Organizing principle: depth decides benefit, downtime,
 * and risk — superficial maintains, medium corrects, deep resurfaces.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'glow' | 'acne' | 'pigment' | 'wrinkles' | 'dark-skin' | 'branded' | 'general';

export type SectionCategory = 'concept' | 'context' | 'superficial' | 'medium-deep' | 'branded' | 'safety' | 'faq';

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
  'One variable rules everything: depth. Superficial peels maintain (texture, tone, glow), medium peels correct (photodamage, pigment, fine lines), deep peels resurface — with risk and downtime scaling in lockstep.',
  'The superficial workhorses are well-tested: glycolic has a vehicle-controlled RCT with histology, and salicylic/salicylic-mandelic peels have the best record in darker skin for breakouts and post-acne pigment.',
  'The Jessner + 35% TCA medium peel has decades of consistent controlled data for photoaging — while phenol–croton oil remains the deepest non-surgical resurfacing there is, with surgical-grade demands: cardiac monitoring included.',
  'Home acids and clinic peels are different products: 5% daily glycolic produced only trends in a trial where supervised 50% produced real histological change. And a phenol peel by an unlicensed "practitioner" has killed.',
  '"Designer" branded peels (VI Peel, PRX-T33) mostly borrow ingredient-level evidence — several have no published trials of the actual product at all.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'how-peels-work',
    category: 'concept',
    title: 'How chemical peels work',
    tldr: 'A controlled chemical injury to a chosen depth; healing rebuilds a fresher epidermis and — at dermal depth — new collagen.',
    bodyHtml: `
      <p>A peel is controlled chemexfoliation: an acid destroys tissue to a predictable depth, and the wound heals with a new epidermis — and, if the injury reached the dermis, reorganised collagen. Three depth classes (<a href="https://jcadonline.com/evidence-and-considerations-in-the-application-of-chemical-peels-in-skin-disorders-and-aesthetic-resurfacing/" rel="noopener nofollow" target="_blank">classic review</a>):</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Superficial</strong> — epidermis only; heals in 3–5 days of light flaking.</li>
        <li><strong>Medium</strong> — into the papillary dermis (a white "frost" during treatment); about a week of visible peeling.</li>
        <li><strong>Deep</strong> — reticular dermis; 5–10 days to re-epithelialise, months to fully settle.</li>
      </ul>
      <p>Histology backs the promise at dermal depth: TCA peeling measurably <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8423570/" rel="noopener nofollow" target="_blank">thickens the dermis and increases collagen organisation</a>. Everything else in this guide — benefit, downtime, risk, price — follows from how deep the acid goes.</p>
    `,
  },
  {
    id: 'depth-decides',
    category: 'concept',
    title: 'Maintenance, correction, resurfacing — pick your lane',
    tldr: 'Superficial = an ongoing skincare upgrade. Medium = an event that corrects. Deep = a once-per-face renovation.',
    bodyHtml: `
      <p>The most useful way to shop the peel menu:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Maintenance (superficial series):</strong> 4–6 light peels at 2-week intervals for texture, tone, congestion, glow. Results plateau and need upkeep — closer to professional-grade skincare than to a procedure.</li>
        <li><strong>Correction (medium):</strong> a single Jessner+TCA session for real photodamage, pigment, and fine lines — repeatable at months-long intervals.</li>
        <li><strong>Resurfacing (deep):</strong> phenol–croton oil, once, for deeply etched lines — competing with fully ablative lasers, with comparable gravity.</li>
      </ul>
      <p>Peels overlap heavily with lasers in the middle of this range — head-to-head trials are rare, so choose by access, budget, skin type, and practitioner skill rather than by category loyalty. (Our <a href="/laser-ipl">laser guide</a> maps the other side.)</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'priming-aftercare',
    category: 'context',
    title: 'Priming, series protocols & aftercare',
    tldr: '2–4 weeks of retinoid (± hydroquinone) before; series of 4–6 for superficial; sunscreen is non-negotiable after.',
    bodyHtml: `
      <p><strong>Priming works:</strong> tretinoin pre-treatment <a href="https://pubmed.ncbi.nlm.nih.gov/2024986/" rel="noopener nofollow" target="_blank">accelerated healing after TCA peels</a> in a double-blind study, and hydroquinone priming is standard PIH-prevention practice in darker skin (expert consensus more than trial data). Typical: 2–4 weeks of retinoid ± hydroquinone, stopped 3–5 days before peeling.</p>
      <p><strong>Series, from the trials:</strong> superficial peels almost universally run <strong>~6 sessions at 2-week intervals</strong>; medium peels are single sessions repeated at months; maintenance after a course — monthly for six months, then quarterly.</p>
      <p><strong>After:</strong> bland moisturiser, no picking at the peeling, and daily broad-spectrum sunscreen — AHAs measurably increase UV sensitivity, and every pigment outcome depends on photoprotection. Anyone unwilling to wear SPF has pre-failed the treatment.</p>
    `,
  },
  {
    id: 'home-vs-pro',
    category: 'context',
    title: 'Home acids vs professional peels (and the DIY danger)',
    tldr: 'OTC acids work in the top skin layer; clinic peels reach the dermis. Buying strong TCA or phenol online is a burns story.',
    bodyHtml: `
      <p>The gap is measurable, not marketing. Within one molecule: 5% daily glycolic for 3 months produced <a href="https://www.researchgate.net/publication/13686192_A_Double-Blind_Randomized_Clinical_Trial_on_the_Effectiveness_of_a_Daily_Glycolic_Acid_5_Formulation_in_the_Treatment_of_Photoaging" rel="noopener nofollow" target="_blank">only trends toward improvement</a>, while supervised 50% glycolic produced significant clinical and histological change. OTC "peeling solutions" (The Ordinary-style 30% AHA rinse-offs) are short-contact masks at formulated pH — fine for glow, not peels in the clinical sense, and a real irritation/PIH risk in darker skin when overused.</p>
      <p><strong>The hard line:</strong> high-percentage TCA and phenol bought online are surgical instruments without the surgeon. The cautionary datum: a <a href="https://pubmed.ncbi.nlm.nih.gov/40774430/" rel="noopener nofollow" target="_blank">published forensic analysis of a fatal phenol peel</a> performed by an unlicensed social-media practitioner. Unsupervised medium-agent use earns burns and demarcation lines; unsupervised deep-agent use has earned a death certificate.</p>
    `,
  },
];

const superficial: Section[] = [
  {
    id: 'peel-glycolic',
    category: 'superficial',
    title: 'Glycolic acid (20–70%)',
    tldr: 'The best-studied superficial agent: a vehicle-controlled trial improved texture, fine wrinkling, and sun spots — with histology.',
    evidence: 'moderate',
    focus: 'glow',
    sessions: '4–6, biweekly',
    downtime: '0–3 days flaking',
    cost: '€80–200/session',
    bodyHtml: `
      <p>The classic clinic peel, and the superficial agent with actual controlled data: 50% glycolic applied weekly for four weeks improved rough texture, fine wrinkling, and solar keratoses versus vehicle in a <a href="https://pubmed.ncbi.nlm.nih.gov/8634809/" rel="noopener nofollow" target="_blank">double-blind trial (n=41)</a>, with biopsy-confirmed epidermal renewal and, in some specimens, increased dermal collagen.</p>
      <p>Perspective for expectations: a comparative RCT found a retinaldehyde cream <a href="https://pubmed.ncbi.nlm.nih.gov/30027612/" rel="noopener nofollow" target="_blank">competitive with a course of glycolic peels</a> — in-office superficial peeling is professional-grade skincare, not a category above good topicals. Concentrations escalate 20→70% across a series; expect mild stinging and a few days of light flaking.</p>
    `,
  },
  {
    id: 'peel-salicylic',
    category: 'superficial',
    title: 'Salicylic acid (20–30%) — the oily-skin specialist',
    tldr: 'Strong for breakouts, oiliness, and post-acne pigment — including the best safety record in Fitzpatrick V–VI.',
    evidence: 'strong',
    focus: 'acne',
    sessions: '5–6, biweekly',
    downtime: '1–3 days',
    cost: '€80–200/session',
    bodyHtml: `
      <p>Lipid-soluble salicylic acid follows oil into pores, self-limits its own penetration, and holds the best dark-skin record of any peel. The landmark: Grimes treated <a href="https://pubmed.ncbi.nlm.nih.gov/9935087/" rel="noopener nofollow" target="_blank">25 patients of Fitzpatrick V–VI</a> (acne, post-inflammatory pigment, melasma, oily skin) with five 20–30% peels after hydroquinone priming — safe and effective across all four indications. Multiple controlled comparisons since support it for acne and oily, congested skin.</p>
      <p>As a pure anti-wrinkle agent it's secondary — its aging relevance is tone, texture, and keeping breakout-prone skin clear enough for retinoids to do their work.</p>
    `,
  },
  {
    id: 'peel-mandelic',
    category: 'superficial',
    title: 'Salicylic–mandelic combination (the darker-skin pick)',
    tldr: 'In Fitzpatrick IV–VI trials, the 20/10% combo beat glycolic on post-acne pigment — the pigment-safe series of choice.',
    evidence: 'moderate',
    focus: 'dark-skin',
    sessions: '6, biweekly',
    downtime: '1–3 days',
    cost: '€90–220/session',
    bodyHtml: `
      <p>Mandelic acid's large molecule penetrates slowly and evenly — ideal for reactive and deeper-toned skin. In a three-arm trial of <a href="https://jcasonline.com/comparative-study-of-35-glycolic-acid-20-salicylic-10-mandelic-acid-and-phytic-acid-combination-peels-in-the-treatment-of-active-acne-and-postacne-pigmentation/" rel="noopener nofollow" target="_blank">45 Fitzpatrick IV–VI patients</a>, six biweekly 20% salicylic–10% mandelic peels cleared pustules better than 35% glycolic and cut the post-acne pigmentation index from 10.1 to 2.8 (versus 10.9→6.2 for glycolic), with no dropouts for side effects. Small, single-region trials — but consistent, and exactly on-target for the pigment problems that dominate darker-skin aging concerns.</p>
    `,
  },
  {
    id: 'peel-melasma',
    category: 'superficial',
    title: 'Peels for melasma',
    tldr: 'A useful adjunct, not a cure: glycolic series matched the gold-standard cream in an RCT; TCA acts faster but relapses more.',
    evidence: 'moderate',
    focus: 'pigment',
    sessions: '6 + maintenance',
    downtime: '1–3 days',
    cost: '€100–250/session',
    bodyHtml: `
      <p>Honest melasma framing first: nothing cures it; photoprotection and topicals are the backbone. Within that, peels earn a place: an RCT in Fitzpatrick IV–VI found glycolic peels plus azelaic acid produced the <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4372906/" rel="noopener nofollow" target="_blank">same ~50% pigment-score reduction as triple-combination cream</a> at 12 weeks, and adding glycolic peels to a Kligman-type cream deepened and sped the response in earlier work. TCA lightens faster but <em>relapses more</em>.</p>
      <p>Rules of engagement: prime with hydroquinone, peel gently, expect maintenance forever, and treat any promised "permanent peel cure" as a red flag. (Tranexamic-acid evidence is for creams, tablets, and injections — not peel formulations.)</p>
    `,
  },
  {
    id: 'peel-jessner',
    category: 'superficial',
    title: "Jessner's solution",
    tldr: 'Rarely a destination — its proven role is evening out penetration as the first coat of a medium TCA peel.',
    evidence: 'moderate',
    focus: 'general',
    sessions: '1 (as primer)',
    downtime: '2–4 days',
    cost: 'Bundled',
    bodyHtml: `
      <p>Resorcinol + salicylic + lactic acid in ethanol. Standalone it performs like a strong superficial peel (comparable to 70% glycolic in acne comparisons), but its historical importance is as the <strong>penetration-equalising first layer</strong> under 35% TCA — the combination that defines the modern medium peel (next section). Contains resorcinol: relevant for allergy history and avoided in pregnancy.</p>
    `,
  },
  {
    id: 'peel-lactic',
    category: 'superficial',
    title: 'Lactic & other gentle acids',
    tldr: 'The sensitive-skin AHAs — pleasant and hydrating, with the thinnest trial base of the superficial class.',
    evidence: 'limited',
    focus: 'glow',
    sessions: '4–6',
    downtime: '0–2 days',
    cost: '€70–180/session',
    bodyHtml: `
      <p>Lactic acid (and gentler cousins like lipohydroxy acid) is positioned as the hydrating, low-irritation AHA for dry or reactive skin. Clinical literature is mostly combination studies and small comparative trials — no controlled photoaging base comparable to glycolic's. A reasonable "first peel ever" or sensitive-skin substitution; not the evidence pick.</p>
    `,
  },
];

const mediumDeep: Section[] = [
  {
    id: 'peel-monheit',
    category: 'medium-deep',
    title: "Jessner + 35% TCA (the Monheit medium peel)",
    tldr: 'The workhorse medium peel: decades of consistent controlled data for photoaging, pigment, and fine wrinkles in one session.',
    evidence: 'strong',
    focus: 'wrinkles',
    sessions: '1, repeatable',
    downtime: '~7 days peeling',
    cost: '€300–800',
    bodyHtml: `
      <p>Described by <a href="https://pubmed.ncbi.nlm.nih.gov/2778184/" rel="noopener nofollow" target="_blank">Monheit in 1989</a> and refined since: degrease, apply Jessner's to equalise the barrier, then 35% TCA penetrates evenly to the papillary dermis — the efficacy of stronger TCA without its unpredictability. Decades of comparative and histologic studies back it for moderate photoaging, actinic damage, pigment, and fine-to-moderate wrinkles.</p>
      <p>The experience: a monitored office procedure, a white frost, about a week of impressive peeling, then weeks of pinkness fading into visibly renewed skin. One session corrects; repeats happen at month-to-year intervals.</p>
    `,
  },
  {
    id: 'peel-tca',
    category: 'medium-deep',
    title: 'TCA 15–35% (straight)',
    tldr: 'Systematic-review support: better elasticity and pigment with more sessions, dermal thickening on histology — small trials.',
    evidence: 'moderate',
    focus: 'wrinkles',
    sessions: '1–3',
    downtime: '4–7 days',
    cost: '€250–600',
    bodyHtml: `
      <p>Trichloroacetic acid is the medium-depth standard, superficial at 15–20% and medium at 25–35%. The <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8423570/" rel="noopener nofollow" target="_blank">systematic review</a> (5 prospective trials + cohorts, 210 patients) found improved cosmesis, elasticity gains proportional to session count, significant melanin-index reduction, and dermal thickening on histology — with burning during application and up to a week of scaling, while scarring and infection stayed rare. Small trials, unstandardised outcomes: solidly "moderate". Higher concentrations trade extra effect for unpredictability — the reason the Jessner combination exists.</p>
    `,
  },
  {
    id: 'peel-ak',
    category: 'medium-deep',
    title: 'TCA for sun-damage fields (actinic keratoses)',
    tldr: 'A real medical option — but RCT-inferior to photodynamic therapy (31% vs 58% lesion reduction at 12 months).',
    evidence: 'moderate',
    focus: 'general',
    sessions: '1',
    downtime: '~7 days',
    cost: '€300–700',
    bodyHtml: `
      <p>Widespread actinic keratoses ("field cancerisation") can be treated by medium peeling — with honest rank: in an observer-blinded randomized trial, 35% TCA reduced lesion counts by <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/bjd.15272" rel="noopener nofollow" target="_blank">31% at 12 months versus 58% for photodynamic therapy</a>, and reviews place peels below PDT and 5-FU cream in efficacy while remaining a valid, cost-effective single-visit option. If your motivation is precancerous damage rather than cosmetics, discuss all three with a dermatologist.</p>
    `,
  },
  {
    id: 'peel-phenol',
    category: 'medium-deep',
    title: 'Phenol–croton oil deep peel',
    tldr: 'The deepest non-surgical resurfacing — dramatic, decades-proven for etched lines, and a monitored surgical-grade event.',
    evidence: 'strong',
    focus: 'wrinkles',
    sessions: '1 (once)',
    downtime: '10 days raw + 2 mo red',
    cost: '€2,000–5,000+',
    bodyHtml: `
      <p>For deeply etched perioral and periorbital lines, nothing non-surgical outperforms a modern phenol–croton oil peel. The field moved past the harsh Baker-Gordon formula: <a href="https://pubmed.ncbi.nlm.nih.gov/30550827/" rel="noopener nofollow" target="_blank">Hetter's work showed croton-oil concentration sets the depth</a>, allowing titrated, more natural results without obligatory waxy depigmentation.</p>
      <p>It remains surgery-adjacent: phenol is cardiotoxic in overdose, so full-face work means cardiac monitoring, IV fluids, and segmental application with timed pauses — under which a prospective Holter-monitored series recorded <a href="https://www.jaad.org/article/S0190-9622(17)32478-7/fulltext" rel="noopener nofollow" target="_blank">no clinically significant arrhythmias</a>. Trade-offs: weeks of recovery, months of redness, permanent lightening risk (it's not for most darker skin), and a small circle of practitioners who still do it well. Dramatic results, grown-up decision.</p>
    `,
  },
  {
    id: 'peel-cross',
    category: 'medium-deep',
    title: 'TCA CROSS for ice-pick scars',
    tldr: 'Focal high-strength TCA into individual scars — many small trials, consistent direction, high PIH risk in darker skin.',
    evidence: 'moderate',
    focus: 'acne',
    sessions: '2–4',
    downtime: '3–7 days (spots)',
    cost: '€150–400/session',
    bodyHtml: `
      <p>CROSS (chemical reconstruction of skin scars) dabs 50–100% TCA into individual ice-pick scars — the scar type that resists lasers and needles. Since the <a href="https://pubmed.ncbi.nlm.nih.gov/12460296/" rel="noopener nofollow" target="_blank">original 2002 description</a>, ~30 small comparative studies point the same way: cheap, effective, repeatable. Each treated pit frosts, crusts, and remodels over weeks; darker skin trades higher PIH risk and needs experienced hands.</p>
    `,
  },
];

const branded: Section[] = [
  {
    id: 'peel-cosmelan',
    category: 'branded',
    title: 'Cosmelan / Dermamelan depigmenting protocols',
    tldr: 'A serious multi-month melasma protocol with retrospective published data — and marketing numbers no trial supports.',
    evidence: 'emerging',
    focus: 'pigment',
    sessions: '1 mask + 16-wk home phase',
    downtime: '5–10 days peeling',
    cost: '€800–1,200 (kit)',
    bodyHtml: `
      <p>The branded heavyweight for stubborn pigmentation: an in-clinic depigmenting mask worn for hours, then a mandatory months-long tapering home regimen. Published support is retrospective protocol analysis rather than controlled trials, and clinic claims like "95% spot reduction in 99% of patients" are marketing, not literature. It contains genuinely active depigmenting ingredients and helps some melasma patients — but unbranded hydroquinone-based regimens carry far better evidence per euro. Consider it a committed second-line, not a first stop.</p>
    `,
  },
  {
    id: 'peel-prx',
    category: 'branded',
    title: 'PRX-T33 ("the no-peel peel")',
    tldr: 'TCA + hydrogen peroxide marketed as needle-free biorevitalisation — traceable clinical data: a 5-person open-label pilot.',
    evidence: 'limited',
    focus: 'branded',
    sessions: '4–5 weekly',
    downtime: 'None claimed',
    cost: '€350–500/session',
    bodyHtml: `
      <p>An ingenious pitch — 33% TCA whose epidermal action is blunted by hydrogen peroxide, promising "dermal remodelling with no visible peeling". The retrievable clinical evidence behind the decade-of-studies marketing: a <a href="https://jcadonline.com/facial-chrono-photodamage-acid-peel/" rel="noopener nofollow" target="_blank">single-centre open-label pilot of five women</a>. Whatever the treatment does, the claims outrun the literature by an unusually wide margin even for aesthetics. If you enjoy it as a glow facial, fine — just don't buy the "remodelling" story at these prices.</p>
    `,
  },
  {
    id: 'peel-vi',
    category: 'branded',
    title: 'VI Peel, Perfect Derma & designer blends',
    tldr: 'Proprietary acid cocktails with no peer-reviewed efficacy trials of the actual products — borrowed ingredient evidence only.',
    evidence: 'limited',
    focus: 'branded',
    sessions: 'Per brand protocol',
    downtime: '3–7 days',
    cost: '€250–450/session',
    bodyHtml: `
      <p>The designer-blend tier (TCA + retinoic + salicylic + phenol traces + vitamins) sells convenience and branding. Targeted searching finds <a href="https://www.medicalnewstoday.com/articles/vi-peel" rel="noopener nofollow" target="_blank">no peer-reviewed efficacy trials of the branded products themselves</a> — the evidence is borrowed from their unbranded ingredients at unstated concentrations. They likely perform like the mid-strength peels they contain; you're paying the trademark premium for a mystery ratio. The unbranded classics above have the actual data.</p>
    `,
  },
  {
    id: 'peel-yellow',
    category: 'branded',
    title: 'Retinoic-acid "yellow" peels',
    tldr: 'A clinic staple in Brazil and India with a thin published base — the critical review is titled exactly that.',
    evidence: 'limited',
    focus: 'branded',
    sessions: '3–6',
    downtime: '2–4 days flaking',
    cost: '€120–300/session',
    bodyHtml: `
      <p>High-dose tretinoin painted on and worn for hours — popular, pleasant, and thinly evidenced: the field's own literature includes a review pointedly titled <a href="https://pubmed.ncbi.nlm.nih.gov/29186249/" rel="noopener nofollow" target="_blank">"Tretinoin peel: a critical view"</a>. What is well-supported is daily topical retinoid use (see our <a href="/collagen">collagen guide</a>) and tretinoin as a <em>primer</em> before TCA. The peel format adds theatre to a molecule that works better as a nightly habit.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety',
    category: 'safety',
    title: 'Safety by depth — and the rules that changed',
    tldr: 'PIH risk scales with depth and skin tone; herpes prophylaxis for medium+; phenol is a monitored procedure; superficial peels are fine on isotretinoin.',
    bodyHtml: `
      <p><strong>Pigment risk scales with depth:</strong> superficial peels suit nearly all skin types; medium peels demand caution and priming in Fitzpatrick IV–VI; deep phenol peels are not recommended for most darker skin (permanent lightening risk). Milia (up to ~20% at 2–4 months), acne flares, and prolonged redness are the common nuisances; scarring and infection are rare and concentrate in the lower face and in over-deep DIY work.</p>
      <p><strong>Herpes:</strong> any peel reaching the dermis can reactivate cold sores across the whole treated field — antiviral prophylaxis for anyone with a history, mandatory for medium and deep peels.</p>
      <p><strong>Phenol specifics:</strong> cardiac monitoring, IV hydration, segmental timed application, QTc screening — the documented fatality happened outside medical care, not inside it.</p>
      <p><strong>Pregnancy:</strong> superficial glycolic/lactic are generally considered acceptable; salicylic, Jessner's (resorcinol), TCA are avoided; <strong>phenol is absolutely contraindicated</strong>.</p>
      <p><strong>Isotretinoin:</strong> the 6-month ban is over for light peels — the <a href="https://pubmed.ncbi.nlm.nih.gov/28498204/" rel="noopener nofollow" target="_blank">ASDS consensus</a> found insufficient evidence to delay superficial peels during or shortly after treatment. Medium and deep remain case-by-case with your prescriber.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-wrinkles',
    category: 'faq',
    title: 'Will a peel get rid of my wrinkles?',
    tldr: 'Depth decides: superficial no, medium softens, deep genuinely can.',
    bodyHtml: `
      <p>Superficial series improve texture and tone with little effect on established wrinkles. Medium TCA peels improve fine lines, elasticity, and pigment — gains proportional to sessions. Only phenol–croton oil reliably transforms deeply etched lines, at renovation-grade downtime. Match the depth to the wrinkle, not to the brochure.</p>
    `,
  },
  {
    id: 'faq-sessions',
    category: 'faq',
    title: 'How many sessions, how often?',
    tldr: 'Superficial: ~6, two weeks apart. Medium: one, repeatable. Deep: once.',
    bodyHtml: `
      <p>The trials converge on six superficial peels at 2-week intervals, then monthly-to-quarterly maintenance. Medium peels are single corrective events repeated at months-long intervals; deep peels are effectively once per face. Beware clinics selling deep-sounding results on a superficial-peel subscription.</p>
    `,
  },
  {
    id: 'faq-dark-skin',
    category: 'faq',
    title: 'I have deeper skin — are peels safe for me?',
    tldr: 'Superficial salicylic/mandelic: the best record. Medium: caution + priming. Deep: mostly no.',
    bodyHtml: `
      <p>Salicylic and salicylic–mandelic peels have published efficacy and safety in Fitzpatrick V–VI — arguably the best-tested darker-skin resurfacing option anywhere. Medium peels need hydroquinone priming, conservative technique, and an experienced practitioner; phenol peels are generally not recommended. The universal rule: prime, go gentle, and guard the result with SPF.</p>
    `,
  },
  {
    id: 'faq-home',
    category: 'faq',
    title: 'Can I just use a strong acid at home?',
    tldr: 'Home acids polish; clinic peels remodel. Online TCA/phenol is how burns happen.',
    bodyHtml: `
      <p>Home products act in the top layer — the same molecule that only "trended" at 5% daily produced real histological change at supervised 50%. Rinse-off 30% "peeling solutions" are masks, not peels. And high-percentage TCA or phenol from the internet belongs in the incident-report literature, which now includes a fatality. Superficial-series money is better spent in a clinic; deep-agent curiosity is better abandoned.</p>
    `,
  },
  {
    id: 'faq-melasma',
    category: 'faq',
    title: 'Will a peel cure my melasma?',
    tldr: 'No — peels assist; sunscreen and topicals do the heavy lifting.',
    bodyHtml: `
      <p>In an RCT, glycolic peels plus azelaic acid matched the gold-standard cream (~50% improvement) — as an <em>adjunct</em>, with relapse expected whenever photoprotection slips. TCA lightens faster and relapses faster. Any promise of a permanent peel cure is a marketing tell, not a treatment plan.</p>
    `,
  },
  {
    id: 'faq-recovery',
    category: 'faq',
    title: 'What does recovery actually look like?',
    tldr: 'Superficial: days of flaking. Medium: a week of peeling. Deep: weeks, then months of pink.',
    bodyHtml: `
      <p>Superficial: 3–5 days of light flaking, makeup usually next day. Medium: about a week of dramatic peeling (schedule accordingly), pinkness lingering after. Deep: 5–10 days to re-epithelialise, two-plus months of redness settling, milia possible along the way. The mirror gets worse before it gets much better — plan events around the timeline, not the hope.</p>
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
    intro: 'How controlled chemical injury becomes renewal — and why depth is everything.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Doing it right',
    intro: 'Priming, series maths, and the home-vs-clinic reality check.',
    sections: context,
  },
  {
    id: 'superficial',
    title: 'Superficial peels',
    intro: 'The maintenance tier — glow, tone, breakouts, and the darker-skin specialists.',
    sections: superficial,
  },
  {
    id: 'medium-deep',
    title: 'Medium & deep peels',
    intro: 'The correction and renovation tier — from the Monheit workhorse to phenol.',
    sections: mediumDeep,
  },
  {
    id: 'branded',
    title: 'Branded & "designer" peels',
    intro: 'Where trademarks outrun trials.',
    sections: branded,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'Risk scales with depth — and a few rules recently changed.',
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
  glow: 'Glow',
  acne: 'Acne & scars',
  pigment: 'Pigment',
  wrinkles: 'Wrinkles',
  'dark-skin': 'Dark-skin safe',
  branded: 'Brand check',
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
