/**
 * Skin resurfacing guide — single source of truth (in-clinic layout).
 *
 * Consumed by /skin-resurfacing. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: resurfacing removes or wounds the surface of the skin so
 * that it heals thicker and smoother, and the depth of the wound decides the
 * result, the downtime and the risk in equal measure. Full-field ablation
 * (CO2, erbium, phenol, dermabrasion) gives the largest wrinkle result in
 * dermatology at the price of a raw week and a lifetime pigment risk;
 * fractional ablation keeps most of the result for a fraction of the
 * recovery; non-ablative fractional lasers coagulate under an intact
 * epidermis for texture and pigment over several sessions; and the
 * no-downtime machines polish. Tiers stay consistent with the guides that
 * already grade these rows (/laser-ipl, /chemical-peels, /wrinkles,
 * /sun-damage, /lip-lines, /crows-feet, /eye-bags, /dark-spots, /neck,
 * /decolletage, /aging-hands, /dull-skin, /sagging-skin, /microneedling).
 * Prices are indicative Western/Central European and UK private rates as of
 * September 2026, not quotes.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea =
  | 'wrinkles'
  | 'pigment'
  | 'scars'
  | 'perioral'
  | 'eyes'
  | 'offface'
  | 'ablative'
  | 'nonablative'
  | 'chemical'
  | 'mechanical'
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
  /** Rows: typical course, what to expect and price, for the expanded card. */
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
  'Resurfacing removes or wounds the surface of the skin so that it heals thicker and smoother, and the depth of the wound decides everything: full-field CO2 or erbium ablation, a phenol–croton peel and dermabrasion take the whole surface off and give the largest wrinkle result in dermatology; fractional lasers wound columns and keep most of the result for a fraction of the recovery; non-ablative fractional lasers heat under an intact epidermis over several sessions; microdermabrasion and hydradermabrasion polish the dead layer and change nothing underneath.',
  'The results at full depth are old, large and consistent: pulsed CO2 resurfacing cut periorbital and perioral wrinkle scores by 2.25 and 2.34 points in the 1996 series, erbium resurfacing of the upper lip held 2.2 grades of improvement at 13 months, fractional CO2 reduced cheek wrinkle depth 51% on profilometry and its photoaging scores were still improved at five years in Asian skin. The comparative trials are small — a meta-analysis of randomised trials could not separate ablative from non-ablative lasers in 124 people — but nothing else in this library moves an etched line as far.',
  'The price is the recovery and the pigment: five to seven days to re-epithelialise after full-field ablation, three to five weeks of redness, hyperpigmentation in 42–46% lasting three months, delayed "alabaster" hypopigmentation in 8% after CO2 that appears at six months and is permanent, scarring in 1%. Deep fractional CO2 in 490 treatments produced 13.6% adverse events — acne eruptions, herpes, infections — and no scars or hypopigmentation; the scars that fractional lasers do cause happened on the neck and the eyelid.',
  'Darker skin changes the calculation: the same fractional CO2 produced post-inflammatory hyperpigmentation in 42% of Southeast Asian acne-scar patients (24% of those on isotretinoin), non-ablative fractional lasers have level-1 evidence in skin types IV–VI with self-limited pigmentation as the common price, and melasma can rebound after any resurfacing. Depth, density and cooling are chosen for the skin in the chair, and the rules on isotretinoin were rewritten in 2017: fractional and non-ablative lasers and superficial peels no longer wait six months.',
  'Match the wound to the problem. Etched lip and eye lines: full-field or dense fractional ablation, once. Global sun damage and wrinkles: fractional CO2 or erbium in one to three sessions, or a medium-depth peel. Fine lines, pores and texture with days of downtime: non-ablative 1550/1927 nm in three to five sessions. Sun spots: the pigment lasers first, then 1927 nm. Acne scars: fractional lasers, radiofrequency microneedling or TCA CROSS by scar type. Lifting: none of them. The neck at ablative depth: the one place to walk away.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-resurfacing-is',
    category: 'concept',
    title: 'What resurfacing is — a controlled wound, and why depth is the whole story',
    tldr: 'Every resurfacing method injures the skin to a chosen depth and lets it heal: full-field ablation vaporises the epidermis and part of the dermis across the whole area; fractional ablation drills thousands of microscopic columns and leaves the skin between them intact; non-ablative fractional lasers coagulate columns under an unbroken surface; chemical peels do the same job with acid and dermabrasion with a spinning wheel. The healed skin has more organised collagen and a new epidermis, and the deeper the wound the bigger the change, the longer the recovery and the greater the risk.',
    bodyHtml: `
      <p>The founding series described the mechanism and the result together: high-energy pulsed CO2 resurfacing of photoaged faces gave "an average wrinkling score reduction of 2.25 for the periorbital region and 2.34 for the perioral region, the most superficial wrinkles and photodamage being eliminated and the more severe being markedly improved", with "an unexpected finding" of "tightening of loose and folded skin" attributed to "heat-induced collagen shrinkage" (<a href="https://pubmed.ncbi.nlm.nih.gov/8629842/" rel="noopener nofollow" target="_blank">Fitzpatrick 1996</a>). Fractional photothermolysis, introduced in 2004, "stimulates a robust and rapid wound healing response" through "microthermal zones of injury", and its ablative version "results in significantly greater improvement in skin laxity and textural abnormalities" than the non-ablative one (<a href="https://pubmed.ncbi.nlm.nih.gov/19686366/" rel="noopener nofollow" target="_blank">Tierney 2009</a>). The histology after a non-ablative 1,550 nm course is a 6.7% rise in collagen fibres at four months (<a href="https://pubmed.ncbi.nlm.nih.gov/26734913/" rel="noopener nofollow" target="_blank">de Sica 2016</a>); after a phenol peel, a zone of new collagen thicker than the CO2 laser produced despite the laser's deeper ablation (<a href="https://pubmed.ncbi.nlm.nih.gov/10491040/" rel="noopener nofollow" target="_blank">Moy 1999</a>).</p>
      <p>The plastic-surgery and laser reviews describe the ladder: full-field and fractional, ablative and non-ablative, hybrid and picosecond, "all extremely effective and popular tools" with different places on it (<a href="https://pubmed.ncbi.nlm.nih.gov/27363765/" rel="noopener nofollow" target="_blank">Pozner 2016</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/39158413/" rel="noopener nofollow" target="_blank">Haykal 2024</a>). This guide grades each rung on what it measured, and the principle that runs through it is that the same energy that erases a lip line can leave a scar on a neck; the operator's choice of depth and site is the treatment.</p>
    `,
  },
  {
    id: 'what-the-trials-measure',
    category: 'concept',
    title: 'What the trials measure — and why the strongest results have the weakest comparisons',
    tldr: 'The ablative literature is large series with photograph scales and profilometry, rarely randomised, because nobody randomises a face to a raw week against a cream; the comparative evidence is split-face studies of one laser against another, and a meta-analysis of randomised trials could not separate ablative from non-ablative lasers in 124 participants. The Cochrane reviews found no randomised trial of lasers for acne scars in 2001 and low-quality evidence in 2016. The measured effect sizes are the largest in cosmetic dermatology; the trial quality is not.',
    bodyHtml: `
      <p>The measurements: wrinkle scores of 2.25–2.34 points (<a href="https://pubmed.ncbi.nlm.nih.gov/8629842/" rel="noopener nofollow" target="_blank">Fitzpatrick 1996</a>); profilometric wrinkle size and depth down 58% and 51% on the cheeks and 35% and 31% at the eyes after a fractional CO2 series, with melanin homogeneity up 21–24% (<a href="https://pubmed.ncbi.nlm.nih.gov/24372002/" rel="noopener nofollow" target="_blank">Kohl 2014</a>); photoaging scores still improved at five years in 30 Asian patients (<a href="https://pubmed.ncbi.nlm.nih.gov/25400224/" rel="noopener nofollow" target="_blank">Tan 2014</a>); 2.2 grades of perioral improvement at 13 months after erbium resurfacing in 45 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/30589777/" rel="noopener nofollow" target="_blank">Sanniec 2019</a>). The comparisons: the pooled analysis of randomised trials of ablative against non-ablative lasers "on 124 participants showed insignificant differences" for excellent, good or fair improvement and side effects, with a call for larger trials (<a href="https://pubmed.ncbi.nlm.nih.gov/35107665/" rel="noopener nofollow" target="_blank">Seirafianpour 2022</a>); the systematic review of CO2 against erbium found "greater efficacy with the CO2 laser in improving facial wrinkles" and "a better complication profile" for erbium (<a href="https://pubmed.ncbi.nlm.nih.gov/28166434/" rel="noopener nofollow" target="_blank">Chen 2017</a>); the Cochrane review of lasers for acne scars found "no randomised controlled trials" and "poor quality case series" (<a href="https://pubmed.ncbi.nlm.nih.gov/11279732/" rel="noopener nofollow" target="_blank">Jordan 2001</a>) and its 2016 successor 24 trials in 789 participants, most at high risk of performance bias (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7069546/" rel="noopener nofollow" target="_blank">Abdel Hay 2016</a>).</p>
      <p>The Cochrane review of photodamage put the comparator on the table: tretinoin at 0.05% improved photodamage against placebo with a relative risk of 1.73 at 24 weeks across eight trials (<a href="https://pubmed.ncbi.nlm.nih.gov/15674885/" rel="noopener nofollow" target="_blank">Samuel 2005</a>). A retinoid does over a year, slowly and reversibly, a fraction of what one ablative session does in a week — and it is the thing every resurfaced face goes back to afterwards. The <a href="/retinoids">retinoids guide</a> grades it.</p>
    `,
  },
  {
    id: 'can-and-cant',
    category: 'concept',
    title: 'What resurfacing can and cannot do',
    tldr: 'Can: erase or soften etched lines around the mouth and eyes, smooth photodamaged texture and blotchy pigment across a face, flatten acne scars, treat fields of sun-damaged precancerous skin, and thicken a thin crepey dermis. Cannot: lift a jowl or a brow, restore volume, remove a deep ice-pick scar on its own, reliably clear melasma, or be done at ablative depth on the neck, chest or hands with the face\'s margin of safety. The tightening in the CO2 series is dermal contraction of a few millimetres, graded emerging for laxity.',
    bodyHtml: `
      <p>What it does: the wrinkle and pigment measurements above; a five-year result for photoaging (<a href="https://pubmed.ncbi.nlm.nih.gov/25400224/" rel="noopener nofollow" target="_blank">Tan 2014</a>); actinic keratosis counts and photoaging parameters reduced with thicker dermis on biopsy after 1,927 nm field treatment (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13074125/" rel="noopener nofollow" target="_blank">Salviano 2026</a>); a meta-analysis of six studies in 467 patients favouring fractional CO2 for depressed acne scars (<a href="https://pubmed.ncbi.nlm.nih.gov/35249351/" rel="noopener nofollow" target="_blank">Lin 2022</a>). What it does not: "tightening" is the heat-shrinkage of collagen described in 1996 (<a href="https://pubmed.ncbi.nlm.nih.gov/8629842/" rel="noopener nofollow" target="_blank">Fitzpatrick 1996</a>) and graded emerging in the <a href="/sagging-skin">sagging skin guide</a>, not a lift; volume is a syringe (<a href="/facial-volume-loss">the volume guide</a>); ice-pick scars are a TCA CROSS or a punch (<a href="/chemical-peels">the peels guide</a>); melasma "may be treated with fractionated non-ablative devices, but utilized with caution" because of "rebound worsening" (<a href="https://pubmed.ncbi.nlm.nih.gov/27605303/" rel="noopener nofollow" target="_blank">Wat 2017</a>); and the neck and chest have thin skin with few adnexal structures to heal from, which is where the fractional-laser scars happened (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2747732/" rel="noopener nofollow" target="_blank">Avram 2009</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/19291745/" rel="noopener nofollow" target="_blank">Fife 2009</a>).</p>
      <p>The practical map: etched lines want full depth once; global damage wants fractional depth one to three times or a medium peel; texture with a working week to keep wants non-ablative sessions; spots want the pigment lasers first (<a href="/dark-spots">the dark spots guide</a>); scars want a type-specific plan (<a href="/microneedling">the microneedling guide</a>); and sagging wants the <a href="/skin-tightening">tightening guide</a> or a surgeon.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'rules-and-access',
    category: 'context',
    title: 'Who should hold the laser, the isotretinoin rule that changed, and the antivirals',
    tldr: 'Full-field ablation and deep peels are surgery-grade procedures — sedation or nerve blocks, a monitored patient, a clinician who manages burns, infections and scars — and in much of Europe a fractional laser can be bought and operated by anyone, so the operator matters more than the machine. The 2017 consensus ended the six-month isotretinoin wait for non-ablative lasers, fractional devices and superficial peels; herpes prophylaxis is standard because a third of people with a cold-sore history reactivated without it; routine antibiotics did not reduce infection in the CO2 series and selected for gram-negative organisms.',
    bodyHtml: `
      <p>Isotretinoin: the ASDS task force found "insufficient evidence to justify delaying treatment with superficial chemical peels and nonablative lasers, including hair removal lasers and lights, vascular lasers, and nonablative fractional devices for patients currently or recently exposed to isotretinoin", with superficial and focal dermabrasion "also safe when performed by a well-trained clinician" (<a href="https://pubmed.ncbi.nlm.nih.gov/28498204/" rel="noopener nofollow" target="_blank">Waldman 2017</a>); the Indian guidelines went further, listing fractional lasers, fractional radiofrequency microneedling, superficial and medium-depth peels and microdermabrasion as safe during or after isotretinoin (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5820835/" rel="noopener nofollow" target="_blank">Mysore 2017</a>); a 2025 Southeast Asian study found fractional CO2 on isotretinoin produced less crusting and less hyperpigmentation (23.8% against 42.2%) than without it (<a href="https://pubmed.ncbi.nlm.nih.gov/40820662/" rel="noopener nofollow" target="_blank">Rujirawan 2025</a>). Full-field ablation and mechanical dermabrasion remain the cautious exceptions. Herpes: famciclovir prevented recurrence in 90%, and "approximately one-third of patients in each group with a positive history of oral herpes labialis experienced HSV recurrence compared to 5% of those without a known HSV history" (<a href="https://pubmed.ncbi.nlm.nih.gov/10193975/" rel="noopener nofollow" target="_blank">Alster 1999</a>); a 10- or 14-day valaciclovir course prevented every outbreak in a later series (<a href="https://pubmed.ncbi.nlm.nih.gov/11966791/" rel="noopener nofollow" target="_blank">Beeson 2002</a>). Antibiotics: a retrospective CO2 series found the infection rate "not significantly reduced with the use of prophylactic antibiotics" and a higher rate with combined prophylaxis, the organisms being Enterobacter and Pseudomonas (<a href="https://pubmed.ncbi.nlm.nih.gov/10594597/" rel="noopener nofollow" target="_blank">Walia 1999</a>), while a pilot in which two of four unprophylaxed full-face patients grew Staphylococcus aureus led its authors to recommend narrow gram-positive cover for full-face resurfacing (<a href="https://pubmed.ncbi.nlm.nih.gov/9843012/" rel="noopener nofollow" target="_blank">Ross 1998</a>).</p>
      <p>Practically: a dermatologist or plastic surgeon for anything ablative, with a written plan for antivirals, wound care and a same-day contact for pain, pus or spreading redness; the complication reviews exist because "excessive treatment" produced significant scarring and hypopigmentation in the early years and "certain key principles" now prevent most of it (<a href="https://pubmed.ncbi.nlm.nih.gov/37806680/" rel="noopener nofollow" target="_blank">Duplechain 2023</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/33010868/" rel="noopener nofollow" target="_blank">Hamilton 2020</a>). The <a href="/chemical-peels">peels guide</a> covers the phenol peel's cardiac monitoring; the <a href="/laser-ipl">laser guide</a> the device classes.</p>
    `,
  },
  {
    id: 'prices-downtime',
    category: 'context',
    title: 'What it costs, in money and in days off',
    tldr: 'Full-field CO2 or erbium €2,500–6,000 for a face with a raw week and weeks of redness; fractional CO2 €800–2,000 a session, one to three sessions, five to seven days each; non-ablative 1550/1927 nm €400–900 a session, three to five sessions, two to three days of redness and swelling each; medium-depth peel €300–800 with a week of peeling; phenol–croton peel €2,500–5,000 under monitoring with two weeks raw; dermabrasion €1,500–3,000; microdermabrasion or hydradermabrasion €60–200 with an afternoon of pinkness. The recovery is the honest price tag.',
    bodyHtml: `
      <p>Indicative European private prices, September 2026. The recovery numbers are measured: after single-pass CO2 and long-pulsed erbium full-field resurfacing "the average time to re-epithelialization was 5.5 days" and "5.1 days", erythema lasted 4.5 and 3.6 weeks, and hyperpigmentation occurred in 46% and 42% for 12.7 and 11.4 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/12534517/" rel="noopener nofollow" target="_blank">Tanzi 2003</a>); a combined fractional-and-full-spot erbium full face re-epithelialised in 6.4 days with 13.8 days of erythema (<a href="https://pubmed.ncbi.nlm.nih.gov/32319157/" rel="noopener nofollow" target="_blank">Mani 2021</a>); fractional CO2 against fractional erbium for acne scars cost 1.9 more pain points and 3.7 more days of downtime for a better response (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13562242/" rel="noopener nofollow" target="_blank">Song 2026</a>); a 1,927 nm session leaves "moderate erythema, mild edema and mild skin roughness" and pain of 4.3 out of 10 (<a href="https://pubmed.ncbi.nlm.nih.gov/25607696/" rel="noopener nofollow" target="_blank">Brauer 2014</a>), with transient tenderness, redness, swelling and scaling "resolving within 7 days" in the periorbital trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12178097/" rel="noopener nofollow" target="_blank">Huang 2025</a>).</p>
      <p>Translate that: a full-field face is ten days at home and a month of make-up over pink skin, once, for a result graded in years; fractional CO2 is a long weekend each time; non-ablative is a Friday session with a Monday face, five times over. Lower fractional settings "may produce similar dermal remodeling as higher settings and with a better side-effect profile" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3839025/" rel="noopener nofollow" target="_blank">Hsiao 2012</a>), which is the argument for more sessions at less depth in anyone who cannot disappear for a week or has skin that pigments.</p>
    `,
  },
  {
    id: 'vetting',
    category: 'context',
    title: 'How to vet a resurfacing clinic',
    tldr: 'Ask what depth and density they intend and why for your skin type; whether they have treated your Fitzpatrick type with this device and what the pigmentation rate was; what they will do about herpes, infection and the neck; whether you will see healed patients at six months, when delayed hypopigmentation appears; and who answers the phone on day three. A clinic that resurfaces the neck at the face\'s settings, or promises a lift, has not read its own complication literature.',
    bodyHtml: `
      <p>The complication series are the checklist. Depth: full-field erbium complications rose from 10.1% for micro-peels to 26.5% for deep resurfacing, "a correlation between increased depth of ablation and increased rate of complication", highest around the mouth (38.6%) (<a href="https://pubmed.ncbi.nlm.nih.gov/32110799/" rel="noopener nofollow" target="_blank">Weniger 2020</a>). Site: hypertrophic scarring of the neck after fractional CO2 with "caution when treating the neck with this device" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2747732/" rel="noopener nofollow" target="_blank">Avram 2009</a>), and four cases of scarring — an eyelid ectropion, two necks, an MRSA-infected neck — after fractional CO2 (<a href="https://pubmed.ncbi.nlm.nih.gov/19291745/" rel="noopener nofollow" target="_blank">Fife 2009</a>). Skin type: hyperpigmentation in 42% of unmedicated Southeast Asian patients after fractional CO2 (<a href="https://pubmed.ncbi.nlm.nih.gov/40820662/" rel="noopener nofollow" target="_blank">Rujirawan 2025</a>), and a review of Asian fractional resurfacing naming post-inflammatory hyperpigmentation and melasma rebound as "the predominant complication" (<a href="https://pubmed.ncbi.nlm.nih.gov/27605303/" rel="noopener nofollow" target="_blank">Wat 2017</a>). Time: the "alabaster" hypopigmentation after full-face CO2 appeared six months later (<a href="https://pubmed.ncbi.nlm.nih.gov/9648570/" rel="noopener nofollow" target="_blank">Laws 1998</a>), so a clinic's three-month photographs do not show the risk that matters most.</p>
      <p>Ask also for the plan after the laser: sun avoidance for months, a retinoid and a pigment-suppressing regime in darker skin (the long-term CO2 series found 21% hyperpigmentation "but the overwhelming majority of this group were treated before our postoperative antipigment regimen") (<a href="https://pubmed.ncbi.nlm.nih.gov/9950552/" rel="noopener nofollow" target="_blank">Schwartz 1999</a>), and a wound-care regime that is simple enough to follow at home. The <a href="/dark-spots">dark spots guide</a> covers the pigment regime.</p>
    `,
  },
];

const uses: Section[] = [
  {
    id: 'use-etched-lines',
    category: 'use',
    title: 'Etched lip lines and deep periorbital lines: full-field ablation, once',
    tldr: 'The largest single result in cosmetic dermatology: pulsed CO2 resurfacing reduced perioral and periorbital wrinkle scores by 2.34 and 2.25 points with the most superficial lines "eliminated"; erbium resurfacing of the upper lip held 2.2 grades of improvement at 13 months with no hypopigmentation at six; a randomised comparison found the CO2 laser gave "a small but significantly greater improvement" than dermabrasion at six months. Strong — with a raw week, months of pink, and the pigment and scar risks of Part 03.',
    evidence: 'strong',
    focus: 'perioral',
    sessions: '1 session; touch-up years later',
    downtime: '5–7 days raw; 3–5 weeks red; months of pink',
    cost: '€1,000–2,500 for the lip or eyes; €2,500–6,000 for the face',
    bodyHtml: `
      <p>The series: pulsed CO2 with a defined protocol gave "predictable improvement in perioral and periorbital wrinkling and photodamage", all three severity classes "responded equally well", side effects were transient erythema and post-inflammatory hyperpigmentation and "one instance of an isolated hypertrophic scar" (<a href="https://pubmed.ncbi.nlm.nih.gov/8629842/" rel="noopener nofollow" target="_blank">Fitzpatrick 1996</a>); the long-term CO2 assessment found "facial rhytids were almost completely ablated at the 3 and 6 month follow-up", "some relapse" at one year with the perioral region recurring most and the cheeks lasting best, infection and scleral show in 6% each, hyperpigmentation in 21%, hypopigmentation in 8% and scarring in 1% (<a href="https://pubmed.ncbi.nlm.nih.gov/9950552/" rel="noopener nofollow" target="_blank">Schwartz 1999</a>); erbium resurfacing of perioral rhytides in 45 patients gave "a statistically significant score improvement of 2.2 gradations" at an average of 13 months and "no cases of hypopigmentation at the 6-month postoperative visit" (<a href="https://pubmed.ncbi.nlm.nih.gov/30589777/" rel="noopener nofollow" target="_blank">Sanniec 2019</a>). Against the older method: the controlled comparison of dermabrasion and CO2 for perioral wrinkles found more redness at one month and "a small but significantly greater improvement in perioral wrinkles at 6 months" with the laser, biomechanically a skin "more similar to skin in younger patients", and patients split evenly on which they would recommend (<a href="https://pubmed.ncbi.nlm.nih.gov/11083571/" rel="noopener nofollow" target="_blank">Kitzmiller 2000</a>). The systematic review favours CO2 for efficacy and erbium for complications (<a href="https://pubmed.ncbi.nlm.nih.gov/28166434/" rel="noopener nofollow" target="_blank">Chen 2017</a>).</p>
      <p>Strong, as the <a href="/lip-lines">lip lines</a> and <a href="/wrinkles">wrinkles</a> guides grade it; the perioral deep peel and dermabrasion are graded beside it there and in the <a href="/aging-smile">aging smile guide</a>. This is the treatment for the line a filler cannot fill and a toxin cannot relax; it is bought once, with the eyes of a clinician who has seen the six-month hypopigmentation and knows which skin gets it.</p>
    `,
  },
  {
    id: 'use-photodamage',
    category: 'use',
    title: 'Global sun damage and wrinkles: fractional ablative lasers and the medium peel',
    tldr: 'A fractional CO2 series reduced wrinkle size and depth 58% and 51% on the cheeks and 35% and 31% at the eyes on profilometry and improved melanin homogeneity 21–24%; photoaging scores in Asian patients were still improved at five years; deep fractional CO2 in 490 treatments produced 13.6% adverse events, mostly acne flares and infections, and no scarring. The Jessner–TCA medium peel does the lighter version of the same job in a session. Strong — most of full-field\'s result for a long weekend.',
    evidence: 'strong',
    focus: 'wrinkles',
    sessions: '1–3 fractional sessions 2–3 months apart, or 1 medium peel',
    downtime: '5–7 days (fractional CO2); 7 days of peeling (medium peel)',
    cost: '€800–2,000 per fractional session; €300–800 per peel',
    bodyHtml: `
      <p>The profilometry: "wrinkles were significantly reduced in all facial areas, and the best results for wrinkle size and depth were found for the cheeks (−58% and −51%) and the periorbital area (−35% and −31%)", with investigators rating mottled pigment improvement at 51–75% (<a href="https://pubmed.ncbi.nlm.nih.gov/24372002/" rel="noopener nofollow" target="_blank">Kohl 2014</a>); the five-year follow-up of 30 Asian patients found photoaging scores "significantly changed at one month, one year, and five years" with minimal adverse events (<a href="https://pubmed.ncbi.nlm.nih.gov/25400224/" rel="noopener nofollow" target="_blank">Tan 2014</a>); the 490-treatment safety series in skin types I–IV found 67 adverse events (13.6%) — acneiform eruption 5.3%, herpes 2.2%, bacterial infection 1.8%, yeast 1.2%, hyperpigmentation 1.2%, prolonged erythema 0.8% — and "no reports of scarring or hypopigmentation" (<a href="https://pubmed.ncbi.nlm.nih.gov/21761414/" rel="noopener nofollow" target="_blank">Shamsaldeen 2011</a>). Lower fractional energy "produces similar molecular changes and clinical outcome with fewer side effects" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3839025/" rel="noopener nofollow" target="_blank">Hsiao 2012</a>); ablative fractional photothermolysis gives "significantly greater improvement than nonablative FP in reducing acne scarring and skin redundancy and laxity associated with photoaging" (<a href="https://pubmed.ncbi.nlm.nih.gov/19686366/" rel="noopener nofollow" target="_blank">Tierney 2009</a>). The medium peel: Jessner's solution followed by 35% TCA "produces a medium-depth peel for photoaging skin, actinic keratoses, and rhytides" (<a href="https://pubmed.ncbi.nlm.nih.gov/2778184/" rel="noopener nofollow" target="_blank">Monheit 1989</a>).</p>
      <p>Strong, as the <a href="/laser-ipl">laser guide</a>, <a href="/sun-damage">sun damage guide</a> and <a href="/wrinkles">wrinkles guide</a> grade fractional ablation, and strong for the Monheit peel in the <a href="/chemical-peels">peels guide</a>. The randomised comparison of fractional erbium against non-ablative 1,550 nm in Asian skin is the trade-off in one study: erbium won on pigment and tone, the non-ablative laser on wrinkle score and overall impression, and erbium caused fewer adverse events (<a href="https://pubmed.ncbi.nlm.nih.gov/26417998/" rel="noopener nofollow" target="_blank">Moon 2015</a>).</p>
    `,
  },
  {
    id: 'use-acne-scars',
    category: 'use',
    title: 'Acne scars: fractional lasers by scar type',
    tldr: 'A meta-analysis of six studies in 467 patients favoured fractional CO2 for depressed acne scars; a 2026 meta-analysis found erbium-based fractional lasers less likely to reach a 50% response than CO2 with less pain and 3.7 fewer days of downtime; fractional radiofrequency matched lasers with a fraction of the hyperpigmentation in eight randomised trials, and fractional picosecond matched them in seven; non-ablative 1,550 nm improved scars in skin types IV–VI with self-limited pigmentation as the price. The Cochrane verdict is low-quality evidence; the direction of every trial is the same.',
    evidence: 'strong',
    focus: 'scars',
    sessions: '3–5 sessions 4–8 weeks apart',
    downtime: '3–7 days (ablative); 1–3 (non-ablative)',
    cost: '€400–1,500 per session',
    bodyHtml: `
      <p>The meta-analyses: ultra-pulse fractional CO2 scored higher for skin smoothness than other methods (standardised mean difference 0.49) across six studies and 467 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/35249351/" rel="noopener nofollow" target="_blank">Lin 2022</a>); erbium-based fractional lasers were "associated with a lower probability of &gt;50% clinical response than fractional CO2" (risk ratio 0.69), with CO2 costing 1.86 more pain points and 3.67 more days of downtime and no difference in hyperpigmentation (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13562242/" rel="noopener nofollow" target="_blank">Song 2026</a>); fractional radiofrequency was "as effective as the laser group in treating atrophic acne scars" with hyperpigmentation at a risk ratio of 0.12 and shorter erythema (<a href="https://pubmed.ncbi.nlm.nih.gov/36062400/" rel="noopener nofollow" target="_blank">Li 2022</a>); fractional picosecond lasers showed "no difference" from other fractional lasers with less hyperpigmentation and pain (<a href="https://pubmed.ncbi.nlm.nih.gov/37310182/" rel="noopener nofollow" target="_blank">Li 2023</a>). In skin types IV–VI, the non-ablative 1,550 nm laser improved scar scores at 16 and 24 weeks at both densities, with mild-to-moderate hyperpigmentation in five of seven patients at the higher density (<a href="https://pubmed.ncbi.nlm.nih.gov/26945321/" rel="noopener nofollow" target="_blank">Alexis 2016</a>). The Cochrane review of 24 trials found most at high risk of performance bias and, in one study, fractional laser more effective than non-fractional non-ablative laser (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7069546/" rel="noopener nofollow" target="_blank">Abdel Hay 2016</a>); the non-energy review found TCA CROSS gave more than 70% improvement in 73% for ice-pick scars, microneedling 31–62%, and microdermabrasion "the least significant results" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5965325/" rel="noopener nofollow" target="_blank">Kravvas 2017</a>); the evidence-based management review grades the ladder (<a href="https://pubmed.ncbi.nlm.nih.gov/38059974/" rel="noopener nofollow" target="_blank">Kim 2023</a>).</p>
      <p>Strong, in line with the <a href="/microneedling">microneedling guide</a>'s grade for radiofrequency microneedling and the <a href="/chemical-peels">peels guide</a>'s TCA CROSS — with the Cochrane caveat that the comparisons are weak. Rolling scars want fractional ablation or subcision, boxcar scars fractional lasers or radiofrequency, ice-picks TCA CROSS; darker skin wants radiofrequency or picosecond first. A randomised trial found microneedling plus a chemical peel beat either alone on the objective scale (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8501429/" rel="noopener nofollow" target="_blank">Pakla-Misiur 2021</a>).</p>
    `,
  },
  {
    id: 'use-texture-fine-lines',
    category: 'use',
    title: 'Fine lines, pores and texture with days of downtime: non-ablative fractional lasers',
    tldr: 'The 1,550 nm laser raised collagen fibres 6.7% on biopsy at four months; the randomised comparison against fractional erbium found it better for wrinkle score and overall impression; the 1,927 nm diode improved periorbital pores and wrinkles at four-week intervals; the 1440/1927 nm system\'s reactions were mild and self-limited across skin types. Three to five sessions, a Monday face, and a moderate result that darker skin can have.',
    evidence: 'moderate',
    focus: 'wrinkles',
    sessions: '3–5 sessions 4 weeks apart; maintenance yearly',
    downtime: '2–3 days of redness and swelling',
    cost: '€400–900 per session',
    bodyHtml: `
      <p>The evidence: collagen fibres up 6.68% at four months with the growth-factor signalling to match (<a href="https://pubmed.ncbi.nlm.nih.gov/26734913/" rel="noopener nofollow" target="_blank">de Sica 2016</a>); "wrinkle score reduction was significantly greater after Er:glass NAFR" than after fractional erbium ablation, with physician and patient overall assessments also favouring it (<a href="https://pubmed.ncbi.nlm.nih.gov/26417998/" rel="noopener nofollow" target="_blank">Moon 2015</a>); the 1,927 nm diode periorbital trial found lightness and pigment improved in both arms and pores and wrinkles improved with the four-week interval, side effects "resolving within 7 days" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12178097/" rel="noopener nofollow" target="_blank">Huang 2025</a>); the 1440/1927 nm review found reactions "mild to moderate and self-limited" with safety "demonstrated in patients with skin of color" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12612654/" rel="noopener nofollow" target="_blank">Geronemus 2025</a>); experienced users of the dual 1550/1927 nm device treat "patients of all ages and skin types" for photoaging, periorbital wrinkles, lentigines and scars on face and body (<a href="https://pubmed.ncbi.nlm.nih.gov/34784135/" rel="noopener nofollow" target="_blank">Friedman 2021</a>). The meta-analysis of randomised trials could not show ablative lasers outperformed non-ablative ones in 124 people (<a href="https://pubmed.ncbi.nlm.nih.gov/35107665/" rel="noopener nofollow" target="_blank">Seirafianpour 2022</a>). Same-session IPL plus non-ablative fractional treatment beat either alone in a split-face study without added downtime (<a href="https://pubmed.ncbi.nlm.nih.gov/22574965/" rel="noopener nofollow" target="_blank">Kearney 2012</a>).</p>
      <p>Moderate, as the <a href="/laser-ipl">laser guide</a>, <a href="/wrinkles">wrinkles guide</a> and <a href="/dull-skin">dull skin guide</a> grade it. This is the resurfacing for someone with a job, a tan, or a darker skin type; it does over five sessions what fractional CO2 does in one, and does not touch an etched line.</p>
    `,
  },
  {
    id: 'use-pigment',
    category: 'use',
    title: 'Sun spots and blotchy tone: the 1,927 nm laser after the pigment lasers',
    tldr: 'Two 1,927 nm sessions gave moderate-to-very-significant overall improvement in 82% at one month and 69% at three, with lentigines improved in 68% and then 51%; a 2023 study found spots and brown areas improved at one month "with an increase in pigment toward baseline at 3 months"; a randomised trial found the 755 nm picosecond laser beat the 1,927 nm for photopigmentation with less pain. Moderate for diffuse tone — the pigment lasers are strong for discrete spots, and the effect needs upkeep.',
    evidence: 'moderate',
    focus: 'pigment',
    sessions: '2–3 sessions 4 weeks apart; yearly maintenance',
    downtime: '3–5 days of redness, swelling and bronzed flaking',
    cost: '€400–800 per session',
    bodyHtml: `
      <p>The trials: 40 patients with photopigmentation, overall improvement "moderate to very significant in 82% of subjects at one month and in 69% of subjects at three months after the second treatment", lentigines improved in approximately 68% and then 51%, blinded photographic assessment "a durable response at three month follow-up" (<a href="https://pubmed.ncbi.nlm.nih.gov/25607696/" rel="noopener nofollow" target="_blank">Brauer 2014</a>); 27 women with diffuse dyspigmentation, spots, UV spots and brown spots improved at one month, brown spots still improved at three, and "an increase in pigment toward baseline at 3 months" (<a href="https://pubmed.ncbi.nlm.nih.gov/36950878/" rel="noopener nofollow" target="_blank">Vingan 2023</a>); the low-energy, low-density 1,927 nm laser gave marked improvement in about 55% for photodamage, melasma and post-inflammatory pigmentation (<a href="https://pubmed.ncbi.nlm.nih.gov/26580875/" rel="noopener nofollow" target="_blank">Brauer 2015</a>). The comparison: the 755 nm picosecond laser "can yield superior results with less pain and side effects" than the 1,927 nm for photopigmentation and aging in a randomised single-blind study (<a href="https://pubmed.ncbi.nlm.nih.gov/30019970/" rel="noopener nofollow" target="_blank">Serra 2018</a>), and a fractional 1,064 nm picosecond laser outperformed IPL on periorbital fine lines and pores with equal pigment results (<a href="https://pubmed.ncbi.nlm.nih.gov/41485124/" rel="noopener nofollow" target="_blank">Zhang 2026</a>).</p>
      <p>Moderate, as the <a href="/dark-spots">dark spots guide</a> and <a href="/sun-damage">sun damage guide</a> grade the 1,927 nm laser; the Q-switched and picosecond pigment lasers are strong for discrete lentigines in the <a href="/laser-ipl">laser guide</a>. Resurfacing evens a blotchy field; a spot is removed by a spot laser, and everything on this row comes back without sunscreen.</p>
    `,
  },
  {
    id: 'use-actinic-field',
    category: 'use',
    title: 'Fields of sun damage and actinic keratoses',
    tldr: 'Field-directed 1,927 nm thulium treatment significantly reduced actinic keratosis counts and photoaging scores with less keratinocyte atypia, a thicker dermis and fibroplasia on biopsy; full-face CO2 resurfacing was used for widespread keratoses before fractional lasers existed and is the setting of the alabaster-skin case; the medium Jessner–TCA peel treats keratoses in a session. Moderate — a dermatologist\'s decision, because a field of keratoses is a field of precancer.',
    evidence: 'moderate',
    focus: 'pigment',
    sessions: '1–3 sessions',
    downtime: '3–7 days',
    cost: '€400–1,500',
    bodyHtml: `
      <p>The thulium study found "a significant reduction in AK count (p &lt; 0.001) and photoaging parameters", histologically an improvement in the vertical extension of keratinocyte atypia, "increased dermal thickness" and fibroplasia, and no severe adverse effects, calling it "promising" as a field-directed therapy (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13074125/" rel="noopener nofollow" target="_blank">Salviano 2026</a>). The medium peel's original indications include actinic keratoses (<a href="https://pubmed.ncbi.nlm.nih.gov/2778184/" rel="noopener nofollow" target="_blank">Monheit 1989</a>); full-face CO2 resurfacing for widespread keratoses is where the "striking leukoderma" of alabaster skin was documented six months later (<a href="https://pubmed.ncbi.nlm.nih.gov/9648570/" rel="noopener nofollow" target="_blank">Laws 1998</a>).</p>
      <p>Moderate, as the <a href="/chemical-peels">peels guide</a> grades TCA for keratosis fields and the <a href="/sun-damage">sun damage guide</a> its lasers. Actinic keratoses are a medical diagnosis first: the dermatologist decides between field treatments — photodynamic therapy, topical agents, a peel or a laser — on the basis of the field, and the cosmetic improvement is the bonus.</p>
    `,
  },
  {
    id: 'use-eyelids',
    category: 'use',
    title: 'Eyelid skin and the periorbital area',
    tldr: 'Dual-depth fractional CO2 resurfacing of the eyelids improved rhytidosis 53% and skin redundancy 42% with no serious complications; fractional CO2 reduced periorbital wrinkle size and depth 35% and 31% on profilometry; the 1,927 nm diode improved periorbital pigment, pores and wrinkles. Moderate for lid skin — and one of the four fractional-laser scars on record is an eyelid ectropion, so the lid is a specialist\'s zone.',
    evidence: 'moderate',
    focus: 'eyes',
    sessions: '1 fractional session, or 3–5 non-ablative',
    downtime: '5–7 days of swelling (fractional CO2)',
    cost: '€600–1,500',
    bodyHtml: `
      <p>The eyelid series: "excellent post-treatment improvements were noted for eyelid skin rhytidosis and redundancy, which improved 53.1% and 42.0%, respectively", with a favourable recovery profile, treating "areas within the boundaries of the orbital rim" (<a href="https://pubmed.ncbi.nlm.nih.gov/20384754/" rel="noopener nofollow" target="_blank">Kotlus 2010</a>); the profilometry (<a href="https://pubmed.ncbi.nlm.nih.gov/24372002/" rel="noopener nofollow" target="_blank">Kohl 2014</a>); the 1,927 nm periorbital trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12178097/" rel="noopener nofollow" target="_blank">Huang 2025</a>). The harm: "erosions and swelling of the right lower eyelid 2 days postoperatively, which developed into scarring and an ectropion" after fractional CO2 (<a href="https://pubmed.ncbi.nlm.nih.gov/19291745/" rel="noopener nofollow" target="_blank">Fife 2009</a>); scleral show in 6% of the long-term full-field CO2 series (<a href="https://pubmed.ncbi.nlm.nih.gov/9950552/" rel="noopener nofollow" target="_blank">Schwartz 1999</a>).</p>
      <p>Moderate, as the <a href="/eye-bags">eye bags guide</a> grades lower-lid resurfacing, and strong for crow's feet outside the lid in the <a href="/crows-feet">crow's feet guide</a>. Crepey lid skin tightens a little and smooths a lot; excess lid skin is a <a href="/hooded-eyes">blepharoplasty</a>, and a bag is fat. Metal eye shields, a conservative depth, and a clinician who has treated lids are the conditions.</p>
    `,
  },
  {
    id: 'use-off-face',
    category: 'use',
    title: 'Neck, chest and hands: non-ablative fractional lasers, at their own settings',
    tldr: 'Experienced users of the 1550/1927 nm laser treat the neck, chest, hands and arms with rarely reported mild reactions; the 1,927 nm laser treats diffuse chest and hand pigment; a dual 1440/1927 nm review found off-face use well tolerated. Moderate — the off-face skin is thin and slow to heal, which is exactly why the ablative depths that suit the face scar the neck (next row).',
    evidence: 'moderate',
    focus: 'offface',
    sessions: '3–5 non-ablative sessions',
    downtime: '2–4 days of redness',
    cost: '€400–900 per area per session',
    bodyHtml: `
      <p>The user survey for the dual-wavelength non-ablative device reports treatment of "both facial and non-facial areas, including neck, chest, hands, arms, abdomen, legs, and buttocks" with adverse effects "rarely reported" and "mild and transient" (<a href="https://pubmed.ncbi.nlm.nih.gov/34784135/" rel="noopener nofollow" target="_blank">Friedman 2021</a>); the 1440/1927 nm diode review found the same off-face tolerability (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12612654/" rel="noopener nofollow" target="_blank">Geronemus 2025</a>); the fractional photothermolysis review lists "dyschromia and fine wrinkling of photoaging on the face, chest, neck, and hands" and poikiloderma among the non-ablative indications (<a href="https://pubmed.ncbi.nlm.nih.gov/19686366/" rel="noopener nofollow" target="_blank">Tierney 2009</a>); the 1,927 nm pigment trials included the same patients' photodamage pattern (<a href="https://pubmed.ncbi.nlm.nih.gov/25607696/" rel="noopener nofollow" target="_blank">Brauer 2014</a>).</p>
      <p>Moderate, as the <a href="/neck">neck</a>, <a href="/decolletage">décolletage</a> and <a href="/aging-hands">aging hands</a> guides grade the non-ablative lasers off the face; those guides also grade the peels and the pigment lasers for spots on the hands and chest. Density and energy are turned down off the face, sessions go up, and the ablative lasers stay on the face for the reason in the next row.</p>
    `,
  },
  {
    id: 'use-melasma',
    category: 'use',
    title: 'Melasma: fractional lasers, with caution',
    tldr: 'A split-face, double-blind randomised pilot of 1,927 nm thulium with and without laser-assisted tranexamic acid delivery improved both sides at three months with no difference between them and recurrence by six; the review of Asian fractional resurfacing warns of "rebound worsening of melasma"; the skin-of-colour review finds laser-assisted delivery reduces the number of treatments needed. Emerging — a maintenance tool behind sunscreen, tranexamic acid and the triple cream, never a cure.',
    evidence: 'emerging',
    focus: 'pigment',
    sessions: '3–4 low-energy sessions; repeat every 3 months',
    downtime: '2–3 days',
    cost: '€300–600 per session',
    bodyHtml: `
      <p>The randomised pilot: 46 mostly type IV patients, "significant improvement from baseline was seen in both the MI and mMASI scores for both the TXA and control sides at 3 months, with no statistically significant difference between sides", with a repeat regimen "every 3 months" suggested for recurrence (<a href="https://pubmed.ncbi.nlm.nih.gov/32506227/" rel="noopener nofollow" target="_blank">Wanitphakdeedecha 2020</a>); the low-energy 1,927 nm series included melasma among its favourable outcomes (<a href="https://pubmed.ncbi.nlm.nih.gov/26580875/" rel="noopener nofollow" target="_blank">Brauer 2015</a>); the skin-of-colour review found laser-assisted drug delivery with low-density 1,927 nm or diode lasers "reduce[s] the number of treatments required for significant clearance of melasma" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11189641/" rel="noopener nofollow" target="_blank">Sanyal 2024</a>); the Asian resurfacing review names "post-inflammatory hyperpigmentation (PIH) and rebound worsening of melasma" as the predominant complications (<a href="https://pubmed.ncbi.nlm.nih.gov/27605303/" rel="noopener nofollow" target="_blank">Wat 2017</a>).</p>
      <p>Emerging, as the <a href="/dark-spots">dark spots guide</a> grades lasers for melasma. Melasma is a hormonal, light-driven condition; sunscreen, oral or topical tranexamic acid and the triple cream are graded moderate to strong there, and a laser is the thing that can make it worse.</p>
    `,
  },
  {
    id: 'use-laxity',
    category: 'use',
    title: 'Tightening and laxity from resurfacing',
    tldr: 'The 1996 CO2 series noted "an unexpected finding" of tightened loose skin from heat-induced collagen shrinkage, and ablative fractional lasers give "significantly greater improvement in skin laxity" than non-ablative ones — a few millimetres of dermal contraction that a photograph of crepey skin shows and a jowl does not. Emerging for laxity, strong for the texture that reads as tightness.',
    evidence: 'emerging',
    focus: 'wrinkles',
    sessions: '1–3 fractional sessions',
    downtime: '5–7 days',
    cost: '€800–2,000 per session',
    bodyHtml: `
      <p>The observation (<a href="https://pubmed.ncbi.nlm.nih.gov/8629842/" rel="noopener nofollow" target="_blank">Fitzpatrick 1996</a>), the fractional comparison (<a href="https://pubmed.ncbi.nlm.nih.gov/19686366/" rel="noopener nofollow" target="_blank">Tierney 2009</a>), the eyelid redundancy figure of 42% (<a href="https://pubmed.ncbi.nlm.nih.gov/20384754/" rel="noopener nofollow" target="_blank">Kotlus 2010</a>) and the fractional-laser review's list of laxity among its improved parameters (<a href="https://pubmed.ncbi.nlm.nih.gov/26133312/" rel="noopener nofollow" target="_blank">Carniol 2015</a>) are the evidence, and none of them measured a jowl or a neck against a control.</p>
      <p>Emerging, as the <a href="/sagging-skin">sagging skin guide</a> grades it. Resurfacing rebuilds the dermis of crepey skin, and a rebuilt dermis lies flatter; descent of fat and ligament is the <a href="/skin-tightening">tightening guide</a>'s subject, and a facelift's.</p>
    `,
  },
  {
    id: 'use-glow-no-downtime',
    category: 'use',
    title: 'The "glow": microdermabrasion, hydradermabrasion and the no-downtime machines',
    tldr: 'Microdermabrasion "can produce changes in dermal matrix constituents" and improve contour irregularities, but "its role in the treatment of dyschromias and acne vulgaris is limited" and it gave the least significant results for acne scars, with 27% of patients unimproved after eight sessions; a randomised trial found a 5% retinoic-acid peel with microdermabrasion beat placebo for photoaging modestly. An afternoon of smoothness for the price of a facial — emerging, and honest about it.',
    evidence: 'emerging',
    focus: 'wrinkles',
    sessions: 'Monthly, indefinitely',
    downtime: 'Pinkness for hours',
    cost: '€60–200 per session',
    bodyHtml: `
      <p>The evidence-based review concluded that microdermabrasion "appears to be a procedure that can produce changes in dermal matrix constituents and result in improvement in skin contour irregularities", may improve transepidermal delivery, and has a "limited" role in pigment and acne (<a href="https://pubmed.ncbi.nlm.nih.gov/20048628/" rel="noopener nofollow" target="_blank">Karimipour 2010</a>); in the acne-scar review it "achieved the least significant results", with "27.3% patients did not achieve any benefit despite eight treatment sessions, and only 9.1% achieved good results" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5965325/" rel="noopener nofollow" target="_blank">Kravvas 2017</a>); the randomised, double-blind, placebo-controlled trial of a 5% retinoic-acid peel with microdermabrasion found "slight but statistically significant improvements" for all photoaging parameters at one to two months, with mild transient side effects (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5331278/" rel="noopener nofollow" target="_blank">Faghihi 2017</a>).</p>
      <p>Emerging, as the <a href="/dull-skin">dull skin guide</a> grades microdermabrasion and hydradermabrasion and the <a href="/dry-skin">dry skin guide</a> the hydrating facials. The mechanism is exfoliation of the dead layer, which a retinoid or an acid does at home for the price of a tube; the machine's advantage is the afternoon it produces, before an event.</p>
    `,
  },
  {
    id: 'use-neck-ablative',
    category: 'use',
    title: 'The neck at ablative depth: the scars on record',
    tldr: 'Hypertrophic scarring of the neck after ablative fractional CO2 resurfacing has its own paper, urging "caution when treating the neck with this device"; three of the four scarring cases in the fractional-CO2 complications series were necks, one MRSA-infected, ending in band-like scars and a platysmal band; the neck has thin skin and few follicles to heal from. Limited — the one place on this page to walk away from a laser that is safe on the face beside it.',
    evidence: 'limited',
    focus: 'offface',
    sessions: '—',
    downtime: '—',
    cost: 'Non-ablative sessions, or nothing',
    bodyHtml: `
      <p>The cases: "as with traditional ablative CO2 laser resurfacing, hypertrophic scarring is a potential complication of ablative fractional CO2 laser resurfacing, particularly on the neck", reversible in one case with early steroids and unresolved in another at a month (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2747732/" rel="noopener nofollow" target="_blank">Avram 2009</a>); "linear erosions and beefy red swelling on the right side of the neck which developed into a tender, band-like scar", a neck with "stinging and yellow exudate" that grew MRSA and scarred in streaks, and a neck whose eschar "developed into horizontal scars and a vertical platysmal band" (<a href="https://pubmed.ncbi.nlm.nih.gov/19291745/" rel="noopener nofollow" target="_blank">Fife 2009</a>); the complication reviews of laser resurfacing, peels and dermabrasion put the neck among the sites where "excessive treatment" scarred (<a href="https://pubmed.ncbi.nlm.nih.gov/33010868/" rel="noopener nofollow" target="_blank">Hamilton 2020</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/37806680/" rel="noopener nofollow" target="_blank">Duplechain 2023</a>).</p>
      <p>Limited, as the <a href="/neck">neck guide</a> grades fractional ablation on the neck and the <a href="/decolletage">décolletage guide</a> keeps the chest at emerging with the same warning. Necks get non-ablative sessions at their own settings, a peel graded for body skin, and the pigment laser for spots; a clinic that offers the face's fractional CO2 settings on the neck is offering the case reports.</p>
    `,
  },
];

const products: Section[] = [
  {
    id: 'prod-fullfield-ablative',
    category: 'product',
    title: 'Full-field ablative lasers: CO2 (UltraPulse, SmartXide) and erbium:YAG (Sciton, Fotona)',
    tldr: 'The whole surface vaporised to a chosen depth: the CO2 laser with the larger wrinkle result and the larger complication profile (hyperpigmentation 21%, hypopigmentation 8%, scarring 1%, infection 6% in the long-term series), the erbium laser with equivalent healing when matched pass for pass, a lower complication rate, and a depth-dependent 10–27% complication rate in its own series. One session, a raw week, a result measured in years.',
    evidence: 'strong',
    focus: 'ablative',
    note: 'Top pick: erbium at full depth for the upper lip and periorbital lines in light skin, from a clinician who shows six-month photographs',
    sessions: '1',
    downtime: '5–7 days raw; 3–5 weeks red',
    cost: '€2,500–6,000 face; €1,000–2,500 per region',
    bodyHtml: `
      <p>The CO2 results and complications are in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/8629842/" rel="noopener nofollow" target="_blank">Fitzpatrick 1996</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/9950552/" rel="noopener nofollow" target="_blank">Schwartz 1999</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/9648570/" rel="noopener nofollow" target="_blank">Laws 1998</a>). The erbium comparison: with equivalent immediate histology, "equivalent healing and cosmetic improvement occurs", and "one can use CO2 laser with one pass to mimic a moderately aggressive Er:YAG laser treatment" (<a href="https://pubmed.ncbi.nlm.nih.gov/11493293/" rel="noopener nofollow" target="_blank">Ross 2001</a>); single-pass CO2 and multi-pass long-pulsed erbium "yielded comparable postoperative healing times and complication profiles" with no hypopigmentation or scarring in that series (<a href="https://pubmed.ncbi.nlm.nih.gov/12534517/" rel="noopener nofollow" target="_blank">Tanzi 2003</a>); the systematic review gives CO2 the efficacy and erbium the safety (<a href="https://pubmed.ncbi.nlm.nih.gov/28166434/" rel="noopener nofollow" target="_blank">Chen 2017</a>); full-field erbium complications ran 10.1% for micro-peels and 26.5% for deep resurfacing, perioral highest (<a href="https://pubmed.ncbi.nlm.nih.gov/32110799/" rel="noopener nofollow" target="_blank">Weniger 2020</a>); a combined fractional-and-full-spot erbium full face improved 78% on blinded photographs with 97% satisfied, one hyperpigmentation, one infection, one hypopigmentation and one ulcer that resolved (<a href="https://pubmed.ncbi.nlm.nih.gov/32319157/" rel="noopener nofollow" target="_blank">Mani 2021</a>); the perioral erbium series (<a href="https://pubmed.ncbi.nlm.nih.gov/30589777/" rel="noopener nofollow" target="_blank">Sanniec 2019</a>).</p>
      <p>Strong, as the <a href="/laser-ipl">laser guide</a> grades full-field ablation. The modern practice is erbium or a single conservative CO2 pass, regional rather than full-face, in skin types I–III, with the antiviral, the wound care and the sun avoidance of Part 03; the full-face deep CO2 of the 1990s, and its alabaster skin, are what the complication reviews were written to end.</p>
    `,
  },
  {
    id: 'prod-fractional-ablative',
    category: 'product',
    title: 'Fractional ablative lasers: CO2 (Fraxel Re:pair, UltraPulse, CO2RE, SmartXide DOT) and erbium (ProFractional, Fotona)',
    tldr: 'Thousands of microscopic ablated columns with intact skin between them: profilometric wrinkle reductions of 31–58%, a five-year result, 13.6% adverse events and no scars in 490 deep treatments, acne-scar meta-analyses favouring CO2 over erbium with erbium the gentler recovery. The workhorse of the field, and the device whose neck and eyelid cases define its limits.',
    evidence: 'strong',
    focus: 'ablative',
    note: 'Top pick: fractional CO2 for global photodamage and acne scars on the face in skin types I–IV, one to three sessions, with the neck left alone',
    sessions: '1–3 sessions 2–3 months apart',
    downtime: '5–7 days',
    cost: '€800–2,000 per session',
    bodyHtml: `
      <p>The evidence is in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/24372002/" rel="noopener nofollow" target="_blank">Kohl 2014</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/25400224/" rel="noopener nofollow" target="_blank">Tan 2014</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/21761414/" rel="noopener nofollow" target="_blank">Shamsaldeen 2011</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/35249351/" rel="noopener nofollow" target="_blank">Lin 2022</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13562242/" rel="noopener nofollow" target="_blank">Song 2026</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/26417998/" rel="noopener nofollow" target="_blank">Moon 2015</a>). The wound-care and parameter review found lower energy produced "similar molecular changes and clinical outcome with fewer side effects" and platelet-rich plasma modestly faster healing (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3839025/" rel="noopener nofollow" target="_blank">Hsiao 2012</a>); the fractional-laser review notes treatment of "higher Fitzpatrick skin types (types IV to VI)", remodelling "for several months" and adjuvants under study (<a href="https://pubmed.ncbi.nlm.nih.gov/26133312/" rel="noopener nofollow" target="_blank">Carniol 2015</a>); the isotretinoin study found fractional CO2 safe and less pigmenting on the drug (<a href="https://pubmed.ncbi.nlm.nih.gov/40820662/" rel="noopener nofollow" target="_blank">Rujirawan 2025</a>). The limits: the neck scars (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2747732/" rel="noopener nofollow" target="_blank">Avram 2009</a>) and the four-case series (<a href="https://pubmed.ncbi.nlm.nih.gov/19291745/" rel="noopener nofollow" target="_blank">Fife 2009</a>).</p>
      <p>Strong, as the <a href="/laser-ipl">laser guide</a>, <a href="/crows-feet">crow's feet guide</a> and <a href="/sun-damage">sun damage guide</a> grade it. Fractional erbium is the gentler, shallower sibling — better for pigment and tone, fewer adverse events, less wrinkle and scar effect — and the right choice for a first session, a darker skin or a shorter recovery.</p>
    `,
  },
  {
    id: 'prod-nafl-1550',
    category: 'product',
    title: 'Non-ablative fractional 1,550 / 1,540 / 1,565 nm lasers (Fraxel Dual, Icon, ResurFX)',
    tldr: 'Erbium-glass coagulation columns under an intact epidermis: collagen up 6.7% at four months, better wrinkle scores than fractional erbium in a randomised comparison, acne-scar improvement in skin types IV–VI, level-1 evidence in darker skin for rejuvenation, a working week kept. Three to five sessions for a moderate result, and no etched line.',
    evidence: 'moderate',
    focus: 'nonablative',
    note: 'Top pick: the 1550 nm class for texture, pores and fine lines in anyone with a job, a tan or a darker skin type',
    sessions: '3–5 sessions 4 weeks apart',
    downtime: '2–3 days',
    cost: '€400–900 per session',
    bodyHtml: `
      <p>The evidence is in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/26734913/" rel="noopener nofollow" target="_blank">de Sica 2016</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/26417998/" rel="noopener nofollow" target="_blank">Moon 2015</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/26945321/" rel="noopener nofollow" target="_blank">Alexis 2016</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/34784135/" rel="noopener nofollow" target="_blank">Friedman 2021</a>). In skin of colour, the evidence-based review found "level 1 evidence for the use of fractional lasers for treating acne, striae and skin rejuvenation" and level 2 for acne scars, melasma and surgical scars in types IV–VI, with "a paucity of high-quality studies involving skin types V and VI" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5605208/" rel="noopener nofollow" target="_blank">Kaushik 2017</a>); the fractional photothermolysis review lists the conditions it has treated from acne scars and photoaging to melasma and poikiloderma (<a href="https://pubmed.ncbi.nlm.nih.gov/19686366/" rel="noopener nofollow" target="_blank">Tierney 2009</a>).</p>
      <p>Moderate, as the <a href="/laser-ipl">laser guide</a> grades the Fraxel class. The same-session pairing with IPL for colour and the 1,927 nm handpiece for pigment turns one device into a photodamage programme (<a href="https://pubmed.ncbi.nlm.nih.gov/22574965/" rel="noopener nofollow" target="_blank">Kearney 2012</a>).</p>
    `,
  },
  {
    id: 'prod-1927',
    category: 'product',
    title: '1,927 nm thulium and diode lasers (Fraxel Dual 1927, LaseMD, Clear + Brilliant Permea, Moxi)',
    tldr: 'A water-absorbed wavelength that stays in the epidermis and upper dermis: the pigment laser of the fractional family, with 82% then 69% improvement in the photopigmentation trial, a drift back toward baseline by three months, field treatment of actinic keratoses with biopsy proof, and a low-energy diode version with sparse device-specific evidence. Moderate for the full-power thulium; emerging for the "prejuvenation" diodes.',
    evidence: 'moderate',
    focus: 'nonablative',
    note: 'Top pick: the full-power 1,927 nm thulium for blotchy sun-damaged tone after the spot lasers, two or three sessions, with sunscreen for life',
    sessions: '2–3 sessions 4 weeks apart',
    downtime: '3–5 days of bronzed flaking',
    cost: '€400–800 per session',
    bodyHtml: `
      <p>The evidence is in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/25607696/" rel="noopener nofollow" target="_blank">Brauer 2014</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/36950878/" rel="noopener nofollow" target="_blank">Vingan 2023</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/26580875/" rel="noopener nofollow" target="_blank">Brauer 2015</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13074125/" rel="noopener nofollow" target="_blank">Salviano 2026</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12178097/" rel="noopener nofollow" target="_blank">Huang 2025</a>); the 1440/1927 nm diode system's safety review (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12612654/" rel="noopener nofollow" target="_blank">Geronemus 2025</a>); the melasma pilot (<a href="https://pubmed.ncbi.nlm.nih.gov/32506227/" rel="noopener nofollow" target="_blank">Wanitphakdeedecha 2020</a>). The picosecond comparison found the 755 nm laser superior for photopigmentation with less pain (<a href="https://pubmed.ncbi.nlm.nih.gov/30019970/" rel="noopener nofollow" target="_blank">Serra 2018</a>).</p>
      <p>Moderate, as the <a href="/dark-spots">dark spots guide</a> and <a href="/laser-ipl">laser guide</a> grade the thulium; the low-energy diodes marketed as "prejuvenation" are emerging in the laser guide for want of device-specific outcomes. The wavelength is also the laser-assisted-delivery tool for tranexamic acid in melasma, graded emerging above.</p>
    `,
  },
  {
    id: 'prod-hybrid',
    category: 'product',
    title: 'Hybrid fractional laser (Halo: 2,940 nm ablative + 1,470 nm non-ablative)',
    tldr: 'An ablative and a non-ablative wavelength in one pass, sold as fractional-CO2 results with non-ablative downtime: one multicentre manufacturer-linked study of 29 completers found 80% significantly improved on photographic analysis, 100% satisfied, pain 4 out of 10 and two cases of post-inflammatory hyperpigmentation that resolved. Popular, plausible, and one trial deep.',
    evidence: 'emerging',
    focus: 'ablative',
    note: 'Not a pick over fractional CO2 or the 1,550 nm class until a comparison exists; reasonable where a clinic has one and shows its own results',
    sessions: '1–2 sessions',
    downtime: '3–5 days',
    cost: '€900–2,000 per session',
    bodyHtml: `
      <p>The trial: "of the 29 subjects completing the study, 80% showed significant skin improvement on photographic analysis", average pain 4 out of 10, "100% satisfaction", and "two patients experienced post-inflammatory hyperpigmentation that resolved within 90 days" with no other adverse events (<a href="https://pubmed.ncbi.nlm.nih.gov/30481954/" rel="noopener nofollow" target="_blank">Waibel 2018</a>); the laser reviews list hybrid lasers among the "versatile" newer options (<a href="https://pubmed.ncbi.nlm.nih.gov/39158413/" rel="noopener nofollow" target="_blank">Haykal 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/27363765/" rel="noopener nofollow" target="_blank">Pozner 2016</a>).</p>
      <p>Emerging, as the <a href="/laser-ipl">laser guide</a> grades it: a coherent design without a head-to-head against either parent technology.</p>
    `,
  },
  {
    id: 'prod-picosecond',
    category: 'product',
    title: 'Fractional picosecond lasers (PicoSure Focus, PicoWay Resolve, Discovery Pico)',
    tldr: 'Ultrashort pulses through a diffractive lens create laser-induced optical breakdown in the dermis without ablating the surface: a meta-analysis of seven studies found them equal to other fractional lasers for atrophic acne scars with far less hyperpigmentation and pain; a randomised trial found the 755 nm picosecond beat the 1,927 nm for photopigmentation; a 2026 randomised trial found a fractional 1,064 nm picosecond beat IPL on periorbital fine lines and pores. Moderate — the resurfacing for skin that pigments.',
    evidence: 'moderate',
    focus: 'nonablative',
    note: 'Top pick: for texture, pores and pigment in darker or easily pigmenting skin, three to five sessions',
    sessions: '3–5 sessions 4–6 weeks apart',
    downtime: '1–3 days; pinpoint bleeding',
    cost: '€400–900 per session',
    bodyHtml: `
      <p>The meta-analysis: no difference from other fractional lasers on three physician scales or patient assessment, "temporary pinpoint bleeding was more common" but "the incidence of post-inflammatory hyperpigmentation and pain level were lower" (risk ratio for hyperpigmentation 0.16) (<a href="https://pubmed.ncbi.nlm.nih.gov/37310182/" rel="noopener nofollow" target="_blank">Li 2023</a>); the randomised comparisons (<a href="https://pubmed.ncbi.nlm.nih.gov/30019970/" rel="noopener nofollow" target="_blank">Serra 2018</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/41485124/" rel="noopener nofollow" target="_blank">Zhang 2026</a>); the reviews (<a href="https://pubmed.ncbi.nlm.nih.gov/39158413/" rel="noopener nofollow" target="_blank">Haykal 2024</a>).</p>
      <p>Moderate; the <a href="/laser-ipl">laser guide</a> grades the same devices strong for discrete pigment and the <a href="/dark-spots">dark spots guide</a> emerging for melasma. For resurfacing they trade depth of effect for safety in skin that would pigment after CO2.</p>
    `,
  },
  {
    id: 'prod-medium-peels',
    category: 'product',
    title: 'Medium-depth chemical peels (Jessner\'s + 35% TCA, straight TCA)',
    tldr: 'Acid to the upper dermis in a controlled frost: the Monheit combination has decades of consistent data for photoaging, keratoses and fine wrinkles in a single session with a week of peeling; straight TCA has systematic-review support with small trials. The resurfacing that needs no machine, and the one that a clinician\'s hand and eye control entirely.',
    evidence: 'strong',
    focus: 'chemical',
    note: 'Top pick: the Jessner–TCA peel for photodamage and fine wrinkles in light skin from a clinician who does them weekly',
    sessions: '1; repeat yearly',
    downtime: '7 days of peeling',
    cost: '€300–800',
    bodyHtml: `
      <p>The original description (<a href="https://pubmed.ncbi.nlm.nih.gov/2778184/" rel="noopener nofollow" target="_blank">Monheit 1989</a>) and its grading, with the straight TCA and superficial peels, are in the <a href="/chemical-peels">peels guide</a>; the histology comparison with the laser found "the zone of new collagen formation was thicker" after a phenol peel than after CO2 despite the laser's deeper ablation (<a href="https://pubmed.ncbi.nlm.nih.gov/10491040/" rel="noopener nofollow" target="_blank">Moy 1999</a>); the complication review covers peels alongside lasers and dermabrasion (<a href="https://pubmed.ncbi.nlm.nih.gov/33010868/" rel="noopener nofollow" target="_blank">Hamilton 2020</a>).</p>
      <p>Strong, as the <a href="/chemical-peels">peels guide</a> grades the Monheit peel, moderate for straight TCA. A medium peel is the fractional CO2 of the pre-laser era: one session, a week, a real change, with pigmentation the risk in darker skin.</p>
    `,
  },
  {
    id: 'prod-deep-peel',
    category: 'product',
    title: 'Phenol–croton oil deep peel (Hetter, Baker–Gordon)',
    tldr: 'The deepest non-surgical resurfacing: croton-oil-titrated phenol to the mid-reticular dermis, under cardiac monitoring because phenol is absorbed and can cause arrhythmias, with two weeks raw and a permanently lighter, waxy skin at the old strengths. Hetter\'s dilutions turned an alabaster face into a titratable peel; the collagen zone on biopsy was thicker than the CO2 laser\'s. Strong for etched lines — a monitored surgical-grade event.',
    evidence: 'strong',
    focus: 'chemical',
    note: 'Top pick for a whole face of etched lines in light skin, once, from a surgeon who has done a hundred; the upper lip alone at lower strength',
    sessions: '1',
    downtime: '10–14 days raw; months of pink',
    cost: '€2,500–5,000 face',
    bodyHtml: `
      <p>The CME review: "no longer does a deep peel denote 'alabaster white' facial depigmentation with complete effacement of wrinkles" because "the strength and corresponding depth of penetration of the phenol–croton oil peel can be modified by varying the concentration of croton oil" (<a href="https://pubmed.ncbi.nlm.nih.gov/30550827/" rel="noopener nofollow" target="_blank">Wambier 2019</a>); the histology (<a href="https://pubmed.ncbi.nlm.nih.gov/10491040/" rel="noopener nofollow" target="_blank">Moy 1999</a>); the complications reviewed with the lasers (<a href="https://pubmed.ncbi.nlm.nih.gov/33010868/" rel="noopener nofollow" target="_blank">Hamilton 2020</a>).</p>
      <p>Strong, as the <a href="/chemical-peels">peels guide</a> grades it, where the cardiac monitoring, the hypopigmentation and the choice between phenol and the laser for the upper lip are set out; the <a href="/lip-lines">lip lines guide</a> grades the upper-lip peel moderate against full-field laser's strong.</p>
    `,
  },
  {
    id: 'prod-dermabrasion',
    category: 'product',
    title: 'Dermabrasion (wire brush and diamond fraise)',
    tldr: 'A rotating abrasive wheel taking the skin down to the papillary dermis by hand: the randomised comparison against CO2 for perioral wrinkles found the laser slightly better at six months with more early redness, and patients evenly split on which they would recommend; superficial and focal dermabrasion is safe with isotretinoin according to the 2017 consensus. A craft with few practitioners left, and a fair result where the craft survives.',
    evidence: 'moderate',
    focus: 'mechanical',
    note: 'Top pick: the upper lip, from one of the surgeons who still do it well',
    sessions: '1',
    downtime: '7–10 days raw',
    cost: '€1,500–3,000',
    bodyHtml: `
      <p>The trial (<a href="https://pubmed.ncbi.nlm.nih.gov/11083571/" rel="noopener nofollow" target="_blank">Kitzmiller 2000</a>), the isotretinoin position (<a href="https://pubmed.ncbi.nlm.nih.gov/28498204/" rel="noopener nofollow" target="_blank">Waldman 2017</a>), the single dermabrasion study in the acne-scar review (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5965325/" rel="noopener nofollow" target="_blank">Kravvas 2017</a>) and the complication review (<a href="https://pubmed.ncbi.nlm.nih.gov/33010868/" rel="noopener nofollow" target="_blank">Hamilton 2020</a>) are the literature.</p>
      <p>Moderate, as the <a href="/lip-lines">lip lines guide</a> and <a href="/aging-smile">aging smile guide</a> grade manual dermabrasion of the upper lip. Operator-dependent to a degree no laser is, bloodier, and in the right hands within a small step of the laser.</p>
    `,
  },
  {
    id: 'prod-microdermabrasion',
    category: 'product',
    title: 'Microdermabrasion and hydradermabrasion (crystal, diamond-tip, HydraFacial)',
    tldr: 'Crystals, a diamond tip or a vortex of solution abrading and vacuuming the stratum corneum: dermal matrix changes and contour improvement in the evidence-based review, "limited" for pigment and acne, the least effective option for scars, and a modest placebo-beating result only when paired with a retinoic-acid peel. The facial that sells as resurfacing.',
    evidence: 'emerging',
    focus: 'mechanical',
    note: 'Fine before an event; not a treatment for anything on this page',
    sessions: 'Monthly',
    downtime: 'Hours',
    cost: '€60–200',
    bodyHtml: `
      <p>The evidence is in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/20048628/" rel="noopener nofollow" target="_blank">Karimipour 2010</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5965325/" rel="noopener nofollow" target="_blank">Kravvas 2017</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5331278/" rel="noopener nofollow" target="_blank">Faghihi 2017</a>); the Indian isotretinoin guideline lists microdermabrasion among the procedures safe on the drug (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5820835/" rel="noopener nofollow" target="_blank">Mysore 2017</a>).</p>
      <p>Emerging, as the <a href="/dull-skin">dull skin guide</a> grades it. Nothing here is dangerous, and nothing here reaches the dermis where the lines and the scars are.</p>
    `,
  },
  {
    id: 'prod-plasma-other',
    category: 'product',
    title: 'Plasma skin regeneration, thermomechanical (Tixel) and the newer resurfacers',
    tldr: 'Nitrogen plasma resurfacing (Portrait PSR) had a clearance for body rhytides and keratoses, uncontrolled series showing improvement of mild-to-moderate wrinkles and no demarcation lines, and then a manufacturer that stopped; thermomechanical and other newer devices have small series. Emerging — plausible physics, no comparison against the lasers above, and in the plasma device\'s case, few machines left.',
    evidence: 'emerging',
    focus: 'ablative',
    note: 'Not a pick over the lasers; acceptable where a clinician has long experience with one device and shows results',
    sessions: '1–3',
    downtime: '3–7 days',
    cost: '€600–1,500 per session',
    bodyHtml: `
      <p>The plasma reviews: clearance "for treatment of rhytides of the body, superficial skin lesions, actinic keratoses, viral papillomata, and seborrheic keratoses", benefits for photoaging and laxity, "no reports of demarcation lines in perioral, periorbital, or jawline areas, as can sometimes be observed following CO2 resurfacing" (<a href="https://pubmed.ncbi.nlm.nih.gov/18789051/" rel="noopener nofollow" target="_blank">Foster 2008</a>); "excellent improvement of mild to moderate skin wrinkles" and pigment uniformity in skin types 1–4 in a long-term personal series (<a href="https://pubmed.ncbi.nlm.nih.gov/22537783/" rel="noopener nofollow" target="_blank">Bentkover 2012</a>). The broad reviews place the newer devices in the ladder (<a href="https://pubmed.ncbi.nlm.nih.gov/39158413/" rel="noopener nofollow" target="_blank">Haykal 2024</a>).</p>
      <p>Emerging. Unrelated to the handheld "plasma pens" graded limited in the <a href="/home-devices">home devices guide</a> and <a href="/hooded-eyes">hooded eyes guide</a>: those are arc burns; this was a medical resurfacing platform with an evidence base that stopped growing.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-pigment',
    category: 'safety',
    title: 'Pigment: the hyperpigmentation that fades and the hypopigmentation that does not',
    tldr: 'Post-inflammatory hyperpigmentation followed full-field resurfacing in 42–46% for about three months and fractional CO2 in 42% of unmedicated Southeast Asian patients; it fades with sunscreen and a pigment regime. Delayed hypopigmentation followed full-face CO2 in 8%, appears at six months as "alabaster skin" with normal melanocyte numbers and less melanin, and is permanent; it is the reason full-field CO2 is now regional, conservative and reserved for light skin. Non-ablative fractional lasers carry self-limited pigmentation as their common price in skin types IV–VI.',
    bodyHtml: `
      <p>The numbers: hyperpigmentation in 46% and 42% after single-pass CO2 and erbium for 12.7 and 11.4 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/12534517/" rel="noopener nofollow" target="_blank">Tanzi 2003</a>); 21% hyperpigmentation and 8% hypopigmentation in the long-term CO2 series (<a href="https://pubmed.ncbi.nlm.nih.gov/9950552/" rel="noopener nofollow" target="_blank">Schwartz 1999</a>); the alabaster case with "a significant decrease in epidermal melanin" and no loss of melanocytes, "an increasingly recognized and reported complication" (<a href="https://pubmed.ncbi.nlm.nih.gov/9648570/" rel="noopener nofollow" target="_blank">Laws 1998</a>); 42.2% against 23.8% hyperpigmentation after fractional CO2 without and with isotretinoin in types 3–5 (<a href="https://pubmed.ncbi.nlm.nih.gov/40820662/" rel="noopener nofollow" target="_blank">Rujirawan 2025</a>); hyperpigmentation in five of seven higher-density non-ablative patients in types IV–VI (<a href="https://pubmed.ncbi.nlm.nih.gov/26945321/" rel="noopener nofollow" target="_blank">Alexis 2016</a>); the Asian review's "predominant complication" (<a href="https://pubmed.ncbi.nlm.nih.gov/27605303/" rel="noopener nofollow" target="_blank">Wat 2017</a>); the skin-of-colour reviews (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5605208/" rel="noopener nofollow" target="_blank">Kaushik 2017</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11189641/" rel="noopener nofollow" target="_blank">Sanyal 2024</a>).</p>
      <p>Rules: full-field CO2 for skin types I–III only, and regional; fractional and non-ablative lasers in darker skin at lower density with more sessions, a test spot, and a pigment regime before and after; no laser on a tan, and strict sun avoidance for months; and photographs at six months, because the hypopigmentation that ends careers appears after the three-month review. The <a href="/dark-spots">dark spots guide</a> covers the regime.</p>
    `,
  },
  {
    id: 'safety-infection',
    category: 'safety',
    title: 'Herpes, bacteria, yeast and the acne flare',
    tldr: 'Resurfaced skin is a wound: herpes reactivated in a third of people with a cold-sore history without prophylaxis and in almost none with famciclovir or valaciclovir; bacterial infection ran 6% in the long-term CO2 series and 1.8% in deep fractional CO2, with yeast at 1.2% and acne eruptions the commonest event at 5.3%; the MRSA-infected neck in the fractional series scarred. Antivirals for everyone, antibiotics on the evidence of a culture, and a same-day call for pus, pain or spreading redness.',
    bodyHtml: `
      <p>The data: famciclovir (<a href="https://pubmed.ncbi.nlm.nih.gov/10193975/" rel="noopener nofollow" target="_blank">Alster 1999</a>) and valaciclovir (<a href="https://pubmed.ncbi.nlm.nih.gov/11966791/" rel="noopener nofollow" target="_blank">Beeson 2002</a>) prophylaxis; infection in 6% of the long-term CO2 series (<a href="https://pubmed.ncbi.nlm.nih.gov/9950552/" rel="noopener nofollow" target="_blank">Schwartz 1999</a>); acneiform eruption 5.3%, herpes 2.2%, bacterial 1.8%, yeast 1.2% in 490 deep fractional treatments (<a href="https://pubmed.ncbi.nlm.nih.gov/21761414/" rel="noopener nofollow" target="_blank">Shamsaldeen 2011</a>); the antibiotic evidence pointing both ways (<a href="https://pubmed.ncbi.nlm.nih.gov/10594597/" rel="noopener nofollow" target="_blank">Walia 1999</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/9843012/" rel="noopener nofollow" target="_blank">Ross 1998</a>); the MRSA neck (<a href="https://pubmed.ncbi.nlm.nih.gov/19291745/" rel="noopener nofollow" target="_blank">Fife 2009</a>).</p>
      <p>Rules: an antiviral from the day before to re-epithelialisation for every ablative or fractional-ablative treatment, whatever the history; a wound-care regime of bland occlusion and dilute soaks rather than a shelf of actives; a culture before an antibiotic when something looks infected, because the organisms in the series were not always the expected ones; and no make-up, no acids, no retinoid and no gym until the surface has closed.</p>
    `,
  },
  {
    id: 'safety-scarring',
    category: 'safety',
    title: 'Scarring and the sites that scar: neck, eyelid, jawline',
    tldr: 'Scarring ran 1% in the long-term CO2 series and 0% in 490 deep fractional CO2 treatments on the face; the scars that fractional lasers did cause were on the neck (hypertrophic bands, a platysmal band) and the eyelid (an ectropion), and full-field erbium complications rose with depth to 38.6% around the mouth. Depth, site and infection are the three variables, and all three are the operator\'s.',
    bodyHtml: `
      <p>The series: scarring 1% (<a href="https://pubmed.ncbi.nlm.nih.gov/9950552/" rel="noopener nofollow" target="_blank">Schwartz 1999</a>); "one instance of an isolated hypertrophic scar" in the founding series (<a href="https://pubmed.ncbi.nlm.nih.gov/8629842/" rel="noopener nofollow" target="_blank">Fitzpatrick 1996</a>); none in 490 deep fractional treatments (<a href="https://pubmed.ncbi.nlm.nih.gov/21761414/" rel="noopener nofollow" target="_blank">Shamsaldeen 2011</a>); the neck (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2747732/" rel="noopener nofollow" target="_blank">Avram 2009</a>) and the four cases (<a href="https://pubmed.ncbi.nlm.nih.gov/19291745/" rel="noopener nofollow" target="_blank">Fife 2009</a>); the depth correlation in erbium resurfacing (<a href="https://pubmed.ncbi.nlm.nih.gov/32110799/" rel="noopener nofollow" target="_blank">Weniger 2020</a>); the reviews of recognising and managing complications (<a href="https://pubmed.ncbi.nlm.nih.gov/33010868/" rel="noopener nofollow" target="_blank">Hamilton 2020</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/37806680/" rel="noopener nofollow" target="_blank">Duplechain 2023</a>).</p>
      <p>Rules: face settings stay on the face; the neck, chest and hands get non-ablative lasers or peels made for body skin; the eyelids get metal shields and conservative depth; a history of keloids or hypertrophic scars rules out full-field ablation; and any area that is unusually painful, weeping or firm in the first week is seen the same day, because early steroid treatment reversed one neck scar and delay fixed another.</p>
    `,
  },
  {
    id: 'safety-isotretinoin-drugs',
    category: 'safety',
    title: 'Isotretinoin, photosensitisers and the drugs that matter',
    tldr: 'The six-month isotretinoin wait was withdrawn for non-ablative lasers, fractional devices and superficial peels by the 2017 consensus, and a 2025 study found fractional CO2 on isotretinoin produced less crusting and half the hyperpigmentation; full-field ablation and mechanical dermabrasion remain the cautious exceptions. Anticoagulants, photosensitising drugs and a recent course of a systemic retinoid or a topical one are the other questions for the consultation.',
    bodyHtml: `
      <p>The consensus documents (<a href="https://pubmed.ncbi.nlm.nih.gov/28498204/" rel="noopener nofollow" target="_blank">Waldman 2017</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5820835/" rel="noopener nofollow" target="_blank">Mysore 2017</a>) and the 2025 data (<a href="https://pubmed.ncbi.nlm.nih.gov/40820662/" rel="noopener nofollow" target="_blank">Rujirawan 2025</a>) are in the rules drawer. Topical retinoids are stopped a few days before ablative treatment and restarted when the surface has closed, and they are the maintenance the whole result depends on afterwards (<a href="/retinoids">the retinoids guide</a>).</p>
      <p>Rules: declare isotretinoin, anticoagulants, immunosuppressants, hormonal treatment for melasma, doxycycline and other photosensitisers, and any history of herpes, keloids, vitiligo or autoimmune skin disease; a clinician who still quotes the six-month rule for a fractional laser is quoting a package insert the specialty has retired.</p>
    `,
  },
  {
    id: 'safety-who-not',
    category: 'safety',
    title: 'Who should not be resurfaced',
    tldr: 'Full-field ablation: not for skin types IV–VI, keloid formers, active acne or infection, uncontrolled melasma, smokers who will not stop, anyone who cannot take two weeks of wound care and months of sun avoidance, and anyone expecting a lift. Fractional and non-ablative: not on a tan, an active cold sore, a field of open acne, or a neck at face settings. Everyone: not in pregnancy, not without an antiviral, and not from a clinic whose six-month photographs you have not seen.',
    bodyHtml: `
      <p>The reasoning is in the safety rows above and the complication reviews (<a href="https://pubmed.ncbi.nlm.nih.gov/33010868/" rel="noopener nofollow" target="_blank">Hamilton 2020</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/37806680/" rel="noopener nofollow" target="_blank">Duplechain 2023</a>). The expectation rule matters as much as the medical ones: the "tightening" of ablative resurfacing is dermal contraction graded emerging (<a href="/sagging-skin">the sagging skin guide</a>), and someone with jowls who books a laser for them gets a smoother jowl.</p>
      <p>The alternatives for those excluded: non-ablative lasers and picosecond devices for darker skin, superficial peels and a retinoid for the tan season, the <a href="/skin-tightening">tightening guide</a> for laxity, and the <a href="/dark-spots">dark spots guide</a> for melasma, which a laser can worsen.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-fractional-vs-full',
    category: 'faq',
    title: 'Fractional or full-field?',
    tldr: 'Full-field for an etched lip or eye line, once, in light skin, with a raw week. Fractional for everything else on the face: most of the result over one to three sessions with a long weekend each and no scars in 490 deep treatments.',
    bodyHtml: `
      <p>The fractional safety series (<a href="https://pubmed.ncbi.nlm.nih.gov/21761414/" rel="noopener nofollow" target="_blank">Shamsaldeen 2011</a>) against the full-field complication rates (<a href="https://pubmed.ncbi.nlm.nih.gov/9950552/" rel="noopener nofollow" target="_blank">Schwartz 1999</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32110799/" rel="noopener nofollow" target="_blank">Weniger 2020</a>) is the trade; Part 02 grades both.</p>
    `,
  },
  {
    id: 'faq-erbium-vs-co2',
    category: 'faq',
    title: 'Erbium or CO2?',
    tldr: 'CO2 for the bigger wrinkle and scar result, erbium for the gentler recovery and lower complication rate; matched pass for pass they heal alike. Erbium first for pigment-prone skin and a first treatment.',
    bodyHtml: `
      <p>"Greater efficacy with the CO2 laser" and "a better complication profile" for erbium in the systematic review (<a href="https://pubmed.ncbi.nlm.nih.gov/28166434/" rel="noopener nofollow" target="_blank">Chen 2017</a>); equivalent healing when matched (<a href="https://pubmed.ncbi.nlm.nih.gov/11493293/" rel="noopener nofollow" target="_blank">Ross 2001</a>); the fractional acne-scar meta-analysis (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13562242/" rel="noopener nofollow" target="_blank">Song 2026</a>).</p>
    `,
  },
  {
    id: 'faq-how-long',
    category: 'faq',
    title: 'How long does it last?',
    tldr: 'Years for ablative work: near-complete wrinkle ablation at six months, some relapse at a year around the mouth, cheeks lasting best, and fractional photoaging scores still improved at five years. Non-ablative and pigment results need yearly upkeep and sunscreen for life.',
    bodyHtml: `
      <p>The one-year CO2 follow-up (<a href="https://pubmed.ncbi.nlm.nih.gov/9950552/" rel="noopener nofollow" target="_blank">Schwartz 1999</a>), the five-year fractional data (<a href="https://pubmed.ncbi.nlm.nih.gov/25400224/" rel="noopener nofollow" target="_blank">Tan 2014</a>), the 13-month erbium lip result (<a href="https://pubmed.ncbi.nlm.nih.gov/30589777/" rel="noopener nofollow" target="_blank">Sanniec 2019</a>) and the three-month pigment drift (<a href="https://pubmed.ncbi.nlm.nih.gov/36950878/" rel="noopener nofollow" target="_blank">Vingan 2023</a>).</p>
    `,
  },
  {
    id: 'faq-darker-skin',
    category: 'faq',
    title: 'Can darker skin be resurfaced?',
    tldr: 'Yes, with the non-ablative fractional, picosecond and radiofrequency devices, lower density, more sessions and a pigment regime; level-1 evidence exists in types IV–VI. Full-field CO2, no.',
    bodyHtml: `
      <p>The skin-of-colour reviews (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5605208/" rel="noopener nofollow" target="_blank">Kaushik 2017</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11189641/" rel="noopener nofollow" target="_blank">Sanyal 2024</a>), the type IV–VI acne-scar trial (<a href="https://pubmed.ncbi.nlm.nih.gov/26945321/" rel="noopener nofollow" target="_blank">Alexis 2016</a>) and the fractional-radiofrequency and picosecond meta-analyses with their lower pigmentation rates (<a href="https://pubmed.ncbi.nlm.nih.gov/36062400/" rel="noopener nofollow" target="_blank">Li 2022</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/37310182/" rel="noopener nofollow" target="_blank">Li 2023</a>).</p>
    `,
  },
  {
    id: 'faq-laser-vs-peel',
    category: 'faq',
    title: 'Laser or peel?',
    tldr: 'For photodamage and fine lines, a medium peel and fractional CO2 are alternatives at different prices; for etched lines, a phenol peel and full-field laser are both strong, and the peel made a thicker collagen zone on biopsy. The clinician\'s experience with one method beats the method.',
    bodyHtml: `
      <p>The histology comparison (<a href="https://pubmed.ncbi.nlm.nih.gov/10491040/" rel="noopener nofollow" target="_blank">Moy 1999</a>); the <a href="/chemical-peels">peels guide</a> grades every peel and the <a href="/laser-ipl">laser guide</a> every laser.</p>
    `,
  },
  {
    id: 'faq-antivirals',
    category: 'faq',
    title: 'Do I need antivirals?',
    tldr: 'Yes, for anything ablative or fractional-ablative: a third of people with a cold-sore history reactivated without them and 90–100% were protected with famciclovir or valaciclovir.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/10193975/" rel="noopener nofollow" target="_blank">Alster 1999</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/11966791/" rel="noopener nofollow" target="_blank">Beeson 2002</a>.) Routine antibiotics are a clinician's call on weaker evidence (<a href="https://pubmed.ncbi.nlm.nih.gov/10594597/" rel="noopener nofollow" target="_blank">Walia 1999</a>).</p>
    `,
  },
  {
    id: 'faq-neck',
    category: 'faq',
    title: 'Can my neck be lasered?',
    tldr: 'With non-ablative fractional lasers at neck settings, yes. With ablative fractional CO2 at face settings, no — that is where the hypertrophic scars on record came from.',
    bodyHtml: `
      <p>(<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2747732/" rel="noopener nofollow" target="_blank">Avram 2009</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/19291745/" rel="noopener nofollow" target="_blank">Fife 2009</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/34784135/" rel="noopener nofollow" target="_blank">Friedman 2021</a>.) The <a href="/neck">neck guide</a> grades the options.</p>
    `,
  },
  {
    id: 'faq-isotretinoin',
    category: 'faq',
    title: 'I am on isotretinoin — do I have to wait six months?',
    tldr: 'Not for non-ablative lasers, fractional devices, superficial or medium peels or microdermabrasion: the 2017 consensus retired the rule, and fractional CO2 on the drug pigmented less in a 2025 study. Full-field ablation and dermabrasion still wait.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/28498204/" rel="noopener nofollow" target="_blank">Waldman 2017</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5820835/" rel="noopener nofollow" target="_blank">Mysore 2017</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/40820662/" rel="noopener nofollow" target="_blank">Rujirawan 2025</a>.) The <a href="/retinoids">retinoids guide</a> covers the drug.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What resurfacing is — and why depth is the whole story',
    intro: '',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you book: the operator, the isotretinoin rule, the prices and the vetting',
    intro: '',
    sections: context,
  },
  {
    id: 'uses',
    title: 'What people book resurfacing for — graded by evidence',
    intro: 'Twelve reasons people book a laser or a peel, from the etched lip line that nothing else moves to the neck that the ablative laser scars. Sorted by evidence, not by downtime.',
    sections: uses,
  },
  {
    id: 'products',
    title: 'The technologies, depth by depth',
    intro: 'Eleven ways to wound the skin on purpose, graded on their own trials — how deep, what they measured, what they cost in days, and what the complication series recorded.',
    sections: products,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'Pigment, infection, scarring and the sites that scar, isotretinoin and the drugs, and who should keep their skin as it is.',
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
  wrinkles: 'Wrinkles & texture',
  pigment: 'Pigment',
  scars: 'Scars',
  perioral: 'Lip lines',
  eyes: 'Eyes',
  offface: 'Neck, chest, hands',
  ablative: 'Ablative',
  nonablative: 'Non-ablative',
  chemical: 'Chemical',
  mechanical: 'Mechanical',
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
