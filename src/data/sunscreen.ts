/**
 * Sunscreen & photoprotection guide — single source of truth (foundation, in-clinic layout).
 *
 * Consumed by /sunscreen. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Editorial spine: sunscreen is the one anti-aging product with randomised
 * trials that carry cancer endpoints (the Nambour trial and its follow-ups),
 * and almost everything else on the shelf is graded against that. The dose
 * is the product: SPF is measured at 2 mg/cm² and people apply a quarter to
 * a half of that, so the tiers on the format rows (SPF in makeup, sprays,
 * powders) are tiers for the dose they deliver, not for the filter chemistry.
 * Tiers stay consistent with the guides that already grade photoprotection
 * (/sun-damage, /dark-spots, /wrinkles, /collagen-loss, /aging-hands,
 * /decolletage, /neck, /crows-feet, /lip-lines, /facial-redness, /serums,
 * /supplements, /anti-aging-30s/40s/50s); where a row here is graded lower
 * than a sibling guide, the text says why. Prices are indicative European
 * retail prices as of September 2026, not quotes; regulatory statements are
 * as of September 2026.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea =
  | 'aging'
  | 'cancer'
  | 'pigment'
  | 'eyes'
  | 'body'
  | 'sensitive'
  | 'children'
  | 'topical'
  | 'oral'
  | 'physical'
  | 'marketing'
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
  /** Rows: typical schedule, what to expect and price, for the expanded card. */
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
  'Sunscreen is the one anti-aging product with randomised trials that carry cancer endpoints. In Nambour, Queensland, 1,621 adults were randomised to daily broad-spectrum sunscreen on the head, neck, arms and hands or to use at their own discretion: after 4.5 years the daily group had 39% fewer squamous cell carcinoma tumours (rate ratio 0.61), still 38% fewer eight years on, and no reduction in basal cell carcinoma; ten years after the trial ended, 11 melanomas had occurred in the daily group against 22, and invasive melanomas 3 against 11; and the 903 participants under 55 who were cast for skin aging showed "no detectable increase" in the daily group — 24% less aging than the discretionary group.',
  'The label is measured at 2 mg/cm² and real people apply 0.4–1.0 mg/cm², and protection falls exponentially with the amount: half the dose gives roughly the square root of the SPF, so an SPF 30 or 50 delivers single figures at the amounts most people use, while SPF 70 and 100 at half a milligram delivered an actual 19 and 27. In 199 skiers wearing both for a day, 55% burned more on the SPF 50+ side and 5% on the SPF 100+ side. Buy 50+, apply two coats, and reapply within the first hour outdoors — indoors, the morning coat lasts the day.',
  '"Broad spectrum" means UVA. In Europe the UVA-in-a-circle logo certifies a UVA protection factor of at least a third of the SPF and a critical wavelength of at least 370 nm; UVA is 95% of the ultraviolet that reaches you, passes through window glass (side windows of a car block about 89% of it, the laminated windscreen 99%) and drives pigment and photoaging. Visible light darkens melasma and skin of type IV and above, and only visible pigments block it: in a double-blind randomised trial, an iron-oxide tinted SPF 50+ improved hydroquinone\'s result by 15% on the melasma index against a UV-only SPF 50+, and tinted sunscreens cut relapses in two randomised comparisons.',
  'The formats that fail are the ones that under-dose: an SPF moisturiser left 16.6% of the face and 21% of the eyelids bare against 11% and 14% for a sunscreen, and nobody noticed; foundation goes on at a fraction of the tested weight; sprays and powders deliver less still. The filters are absorbed — all six American filters exceeded the FDA\'s 0.5 ng/mL threshold in blood after a single application, oxybenzone at 200 ng/mL — with no harm demonstrated in humans, and the EU capped benzophenone-3 at 6% and octocrylene at 10% in 2022; zinc oxide nanoparticles did not enter living skin. Vitamin D falls a little with daily SPF 50+ (5 nmol/L over a year; 46% deficient against 37%): take a supplement rather than the sun.',
  'Beyond the bottle: a hat needs a brim over 7.5 cm to protect the nose and cheeks, a third of summer fabrics tested had a UPF under 15, and a beach umbrella alone left 78% of people sunburned in three and a half hours against 25% with SPF 100. Oral nicotinamide cut new keratinocyte cancers by 23% in people who had already had two, and did nothing in transplant recipients or on the burn threshold of healthy skin; Polypodium leucotomos raised the burn threshold 29%, an SPF of about 1.3; a vitamin C–E–ferulic serum under the sunscreen doubled photoprotection in the laboratory and cut keratosis counts 22% against placebo. "Sunscreen pills", blue-light and after-sun "repair" claims are the walk-away rows.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-sun-does',
    category: 'concept',
    title: 'What sunlight does to skin — UVB, UVA, visible light and infrared',
    tldr: 'UVB (290–320 nm) is about 5% of the ultraviolet that reaches the ground and does most of the burning and the direct DNA damage; UVA (320–400 nm) is the other 95%, reaches the dermis, passes through glass, and drives the pigment, the wrinkles and much of the cancer risk; visible light (400–700 nm) darkens melasma and skin of type IV and above, and no ordinary sunscreen blocks it; infrared-A reaches the dermis and switched on the collagen-degrading enzyme MMP-1 in 80% of people tested. A sunscreen is graded on the first two, the tint handles the third, and an antioxidant is the only answer to the fourth.',
    bodyHtml: `
      <p>The bands, from the expert panel\'s review: "Protection against ultraviolet (UV)B is especially important for light skin as there is a high risk of sunburn, DNA damage and skin cancers. Darker skin may be naturally better protected against UVB but is more prone to hyperpigmentation induced by visible light (VL) and UVA. Protection against UVA, VL and infrared A can be helpful for all skin phototypes as they penetrate deeply and cause photoaging. Long-wave UVA1 plays a critical role in pigmentation, photoaging, skin cancer, DNA damage and photodermatoses" (<a href="https://pubmed.ncbi.nlm.nih.gov/33764577/" rel="noopener nofollow" target="_blank">Passeron 2021</a>). Visible light, measured: on the backs of 20 volunteers with skin types IV–VI, visible light (400–700 nm) and long-wave UVA both induced pigment, but "pigmentation induced by visible light was darker and more sustained", and neither produced any pigment in type II skin (<a href="https://pubmed.ncbi.nlm.nih.gov/20410914/" rel="noopener nofollow" target="_blank">Mahmoud 2010</a>). Infrared-A (760–1,440 nm) "accounts for more than one third of the solar energy that reaches human skin" and "more than 65%" of it reaches the dermis (<a href="https://pubmed.ncbi.nlm.nih.gov/20090404/" rel="noopener nofollow" target="_blank">Schroeder 2010</a>); irradiating healthy skin at physiological doses raised MMP-1, the enzyme that degrades collagen, in the dermis of "eighty percent of the tested individuals", and "treatment of human skin with specific antioxidants prevented IRA radiation-induced MMP-1 expression in vitro and in vivo" (<a href="https://pubmed.ncbi.nlm.nih.gov/18449210/" rel="noopener nofollow" target="_blank">Schroeder 2008</a>). Glass: "window glass filters out UVB and transmits UVA and visible light" (<a href="https://pubmed.ncbi.nlm.nih.gov/16635665/" rel="noopener nofollow" target="_blank">Tuchinda 2006</a>).</p>
      <p>The consequence for the reader: a sunscreen bought on its SPF alone protects against the burn and not against the aging, a sunscreen with the UVA circle protects against both, only a tinted sunscreen protects melasma and darker skin from the light that pigments them, and the dermis behind a west-facing window is being aged by wavelengths no SPF number describes. Sunburns matter at every age — a meta-analysis of 51 study populations found melanoma risk rising with the number of sunburns "during all life-periods, not just childhood" (<a href="https://pubmed.ncbi.nlm.nih.gov/18652979/" rel="noopener nofollow" target="_blank">Dennis 2008</a>) — but most of what this site treats is the slow, unburned dose.</p>
    `,
  },
  {
    id: 'reading-the-label',
    category: 'concept',
    title: 'SPF, UVA-PF, the UVA circle and "broad spectrum" — what the numbers mean',
    tldr: 'SPF is the sunburn (UVB) protection factor measured at 2 mg/cm² on volunteers: SPF 15 lets through about 7% of the burning dose, SPF 30 about 3%, SPF 50 2%, SPF 100 1%. It says nothing about UVA. In Europe the UVA-in-a-circle logo means the UVA protection factor is at least a third of the SPF and the critical wavelength at least 370 nm; labels say "high" (30–50) or "very high" (50+, anything measured at 60 or more) and may not say "sunblock", "total protection" or "all-day". PA+ to PA++++ (Asia) and the Boots stars (UK) are UVA scales; "broad spectrum" in the United States means only the 370 nm test was passed.',
    bodyHtml: `
      <p>The European rules are in the Commission Recommendation on sunscreen efficacy: the labelled categories run from "low protection" (6, 10) through "medium" (15, 20, 25) and "high" (30, 50) to "very high" (50+, for a measured SPF of 60 or higher); a product should offer "a UVA protection factor of 1/3 of the sun protection factor" and "a critical wavelength of 370 nm"; claims of "100 % protection from UV radiation (such as \'sunblock\', \'sunblocker\' or \'total protection\')" and of "no need to re-apply the product under any circumstances (such as \'all day prevention\')" should not be made; and the test dose is "2 mg/cm2, which equals 6 teaspoons of lotion (approx. 36 grams) for the body of one average adult person" (<a href="https://eur-lex.europa.eu/eli/reco/2006/647/oj/eng" rel="noopener nofollow" target="_blank">Commission Recommendation 2006/647/EC</a>). The filters themselves are a closed list: under the cosmetics regulation, "UV-filters other than those listed in Annex VI and UV-filters which are listed there but not used in accordance with the conditions laid down in that Annex" are prohibited, and nano-sized filters must carry the word "nano" in brackets in the ingredient list (<a href="https://eur-lex.europa.eu/eli/reg/2009/1223/oj/eng" rel="noopener nofollow" target="_blank">Regulation (EC) No 1223/2009</a>).</p>
      <p>What the numbers hide: the SPF is a laboratory ratio at a dose almost nobody applies (the <a href="#how-much-how-often">dose drawer</a> has the arithmetic), the UVA-PF is a separate measurement that a high SPF does not guarantee, and 40% of American users were "unsure if their sunscreen provided broad-spectrum protection" (<a href="https://pubmed.ncbi.nlm.nih.gov/26002066/" rel="noopener nofollow" target="_blank">Holman 2015</a>). In Europe the circle settles it. The expert panel\'s practical rule is that the formulation should be chosen by skin type and problem — UVB first for fair skin, UVA and visible light for darker skin and for pigment, texture adapted to the face that has to wear it (<a href="https://pubmed.ncbi.nlm.nih.gov/33764577/" rel="noopener nofollow" target="_blank">Passeron 2021</a>).</p>
    `,
  },
  {
    id: 'can-and-cant',
    category: 'concept',
    title: 'What sunscreen can and cannot do',
    tldr: 'Can: hold measured skin aging at zero over 4.5 years, cut new pre-cancers and squamous cell carcinomas by roughly 40%, probably halve invasive melanoma, keep melasma from coming back, and make every other treatment on this site last longer. Cannot: prevent basal cell carcinoma in the one trial that looked, reverse deep wrinkles, replace shade and clothing at the beach (25% of people on SPF 100 still burned somewhere in three and a half hours), protect at a quarter of the dose, or stop a tan — and it can lengthen the time people spend in the sun.',
    bodyHtml: `
      <p>The can: "The daily sunscreen group showed no detectable increase in skin aging after 4.5 years. Skin aging from baseline to the end of the trial was 24% less in the daily sunscreen group than in the discretionary sunscreen group" (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>); squamous cell carcinoma tumours 1,115 against 1,832 per 100,000, rate ratio 0.61 (<a href="https://pubmed.ncbi.nlm.nih.gov/10475183/" rel="noopener nofollow" target="_blank">Green 1999</a>); invasive melanomas 3 against 11 a decade on (<a href="https://pubmed.ncbi.nlm.nih.gov/21135266/" rel="noopener nofollow" target="_blank">Green 2011</a>). The cannot: basal cell carcinoma, rate ratio 1.03 in the trial and "no clear benefit" after eight more years (<a href="https://pubmed.ncbi.nlm.nih.gov/17132769/" rel="noopener nofollow" target="_blank">van der Pols 2006</a>); on a Texas beach at midday, "neither umbrella nor sunscreen alone completely prevented sunburn" — 78% of the umbrella group and 25% of the SPF 100 group burned somewhere (<a href="https://pubmed.ncbi.nlm.nih.gov/28114650/" rel="noopener nofollow" target="_blank">Ou-Yang 2017</a>); and in a double-blind randomised trial, young Europeans given SPF 30 rather than SPF 10 for their holidays spent 72.6 against 58.2 hours in the sun with no difference in sunburn — "use of higher SPF sunscreen seems to increase the duration of recreational sun exposure" (<a href="https://pubmed.ncbi.nlm.nih.gov/10433619/" rel="noopener nofollow" target="_blank">Autier 1999</a>). Reversal is modest: a year of daily SPF 30 improved texture, clarity and mottling in an uncontrolled study (<a href="https://pubmed.ncbi.nlm.nih.gov/27749441/" rel="noopener nofollow" target="_blank">Randhawa 2016</a>), which is not what a <a href="/retinoids">retinoid</a> or a <a href="/skin-resurfacing">resurfacing laser</a> does.</p>
      <p>Where sunscreen fits: under everything. It is the row every problem guide on this site puts first, the precondition for keeping a laser or peel result, the treatment for melasma before any brightener, and the one product whose evidence includes fewer cancers. It is also the product most people apply at a quarter of the tested dose, which is why the next drawer exists.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'how-much-how-often',
    category: 'context',
    title: 'How much, where and how often — the dose is the whole product',
    tldr: 'The tested dose is 2 mg/cm²: about six teaspoons (36 g) for an adult body, a quarter-teaspoon or two finger-lengths for face and neck. People apply 0.4–1.0 mg/cm² and the protection falls exponentially — half the amount gives about the square root of the SPF. Two coats raise the amount by 13–100% and cut the missed area from 20% to 9%; reapplication does most good 15–30 minutes after going out, then after swimming, sweating or towelling; indoors, the morning coat lasts the day. Eyelids, hairline, ears, lips, the sides of the neck, the backs of the hands and the tops of the feet are where it never lands.',
    bodyHtml: `
      <p>The arithmetic: on the backs of 20 volunteers, the relation between amount and protection "follows exponential growth", so that "application of 1 mg cm(-2) or 0.5 mg cm(-2) makes the SPF fall as the square or fourth root, respectively" (<a href="https://pubmed.ncbi.nlm.nih.gov/17493070/" rel="noopener nofollow" target="_blank">Faurschou 2007</a>); in real life "sunscreen under natural conditions is applied insufficiently with amounts about 0.39 to 1.0 mg/cm2, which decreases the protection factor considerably", and the reviewers\' teaching strategy is "(1) Apply before sun exposure and (2) Reapply once within 1 h" (<a href="https://pubmed.ncbi.nlm.nih.gov/24313722/" rel="noopener nofollow" target="_blank">Petersen 2014</a>); measured on volunteers, "sunscreens labeled SPF 70 and 100 applied at 0.5 mg/cm(2) provided an actual SPF value of, respectively, 19 and 27", while "sunscreens with SPF 30 or 50 may not produce sufficient protection at actual consumer usage levels" (<a href="https://pubmed.ncbi.nlm.nih.gov/22463921/" rel="noopener nofollow" target="_blank">Ou-Yang 2012</a>). The fix: after a single application 31 volunteers had "missed a median of 20% of their available body surface", after a second coat 9%, with 13–100% more product on the skin — "We recommend double application, especially before intense sun exposure" (<a href="https://pubmed.ncbi.nlm.nih.gov/29590142/" rel="noopener nofollow" target="_blank">Heerfordt 2018</a>). The timing: modelled over a midday exposure, "reapplication of sunscreen at 20 minutes results in 60% to 85% of the ultraviolet exposure that would be received if sunscreen were reapplied at 2 hours", so the advice is to apply 15–30 minutes before going out and reapply 15–30 minutes after the exposure begins, then after swimming, towelling or sweating (<a href="https://pubmed.ncbi.nlm.nih.gov/11712033/" rel="noopener nofollow" target="_blank">Diffey 2001</a>). The teaspoon rule — about a teaspoon for the face and neck, one for each arm, two for each leg, one each for the front and back of the trunk — is the dermatologist\'s translation of 36 g (<a href="https://pubmed.ncbi.nlm.nih.gov/12056975/" rel="noopener nofollow" target="_blank">Schneider 2002</a>; <a href="https://eur-lex.europa.eu/eli/reco/2006/647/oj/eng" rel="noopener nofollow" target="_blank">Recommendation 2006/647/EC</a>).</p>
      <p>The missed places, photographed under ultraviolet: 84 people applying SPF 30 left 11.1% of the face bare with a sunscreen and 16.6% with an SPF moisturiser, the eyelids 14.0% and 20.9%, and "participants to be unaware of their incomplete coverage" (<a href="https://pubmed.ncbi.nlm.nih.gov/30943192/" rel="noopener nofollow" target="_blank">Lourenço 2019</a>). The habit itself is rare: 18% of American men and 43% of women use sunscreen on the face regularly when outdoors for an hour or more (<a href="https://pubmed.ncbi.nlm.nih.gov/26002066/" rel="noopener nofollow" target="_blank">Holman 2015</a>). Practically: two finger-lengths for the face, ears and neck every morning, pressed on rather than rubbed thin, the lids and the hairline included, a second coat before a day outside, the backs of the hands after every wash, and a top-up in the first hour of sun rather than at the two-hour alarm.</p>
    `,
  },
  {
    id: 'regulation-filters',
    category: 'context',
    title: 'Which filters Europe allows, which America does not, and what changed in 2022',
    tldr: 'Annex VI of the EU cosmetics regulation lists roughly thirty permitted UV filters, including the photostable broad-spectrum molecules — bemotrizinol and bisoctrizole (Tinosorb S and M), ecamsule and drometrizole trisiloxane (Mexoryl SX and XL), diethylamino hydroxybenzoyl hexyl benzoate (Uvinul A Plus) and, since 2021, the long-UVA filter MCE (Mexoryl 400) — that the US FDA has never approved; the American list stops at 16, of which only zinc oxide and titanium dioxide are "generally recognised as safe and effective". In 2022 the EU cut benzophenone-3 to 6% in face products and 2.2% in body products and capped octocrylene at 10%, after absorption data and the finding that octocrylene degrades into benzophenone in the bottle.',
    bodyHtml: `
      <p>The European list and its rules: only Annex VI filters, used within their conditions, are allowed, and nano-sized ingredients "shall be followed by the word \'nano\' in brackets" in the ingredient list (<a href="https://eur-lex.europa.eu/eli/reg/2009/1223/oj/eng" rel="noopener nofollow" target="_blank">Regulation (EC) No 1223/2009</a>). The 2022 amendment set benzophenone-3 at "6 %" in face, hand and lip products (excluding sprays), "2,2 %" in body products including sprays and "0,5 %" elsewhere, and octocrylene at "9 %" in propellant sprays and "10 %" in other products (<a href="https://eur-lex.europa.eu/eli/reg/2022/1176/oj/eng" rel="noopener nofollow" target="_blank">Regulation (EU) 2022/1176</a>). Behind it: 16 octocrylene-containing sunscreens bought in Europe and the United States contained an average of 39 mg/kg of benzophenone, rising to 75 mg/kg after accelerated aging, none in the product without octocrylene — "Octocrylene generates benzophenone through a retro-aldol condensation" (<a href="https://pubmed.ncbi.nlm.nih.gov/33682414/" rel="noopener nofollow" target="_blank">Downs 2021</a>); and the FDA\'s own trials found every organic filter it tested in the blood above its 0.5 ng/mL threshold (<a href="https://pubmed.ncbi.nlm.nih.gov/31961417/" rel="noopener nofollow" target="_blank">Matta 2020</a>). The American position is that avobenzone, octocrylene, oxybenzone, octinoxate, octisalate and homosalate are "Category III Non-GRASE" filters facing "photodegradation and systemic absorption" (<a href="https://pubmed.ncbi.nlm.nih.gov/40451593/" rel="noopener nofollow" target="_blank">Safian 2025</a>), and that oxybenzone\'s "use has been minimized in many countries worldwide" over animal endocrine data, coral and photoallergy (<a href="https://pubmed.ncbi.nlm.nih.gov/28038886/" rel="noopener nofollow" target="_blank">Lim 2017</a>). The newest filter: MCE, "exhibiting a peak of absorption at 385 nm, was approved by the Scientific Committee on Consumer Safety for use in sunscreen products" and covers the UVA1 gap older formulas left above 370 nm (<a href="https://pubmed.ncbi.nlm.nih.gov/35072138/" rel="noopener nofollow" target="_blank">Marionnet 2022</a>).</p>
      <p>What it means at the shelf: a European pharmacy sunscreen is built from filters that are more photostable and reach further into UVA than an American drugstore one, oxybenzone has all but vanished from European face products, octocrylene is still common and legal at 10%, and "nano" on the label is a disclosure, not a warning. The mineral filters are the same on both sides of the Atlantic.</p>
    `,
  },
  {
    id: 'prices-and-the-one-you-wear',
    category: 'context',
    title: 'What it costs, and the sunscreen you will actually wear',
    tldr: 'A pharmacy SPF 50+ face fluid costs €8–18 for 50 ml and a body lotion €10–20 for 200 ml; prestige brands charge €30–60 for the same filters. At the trial dose a face-and-neck tube lasts about a month and a body bottle a beach week, so doing it properly costs €10–25 a month — the cheapest row on this site. Adherence is the problem: fewer than one adult in three uses sunscreen on the face regularly, the products marketed to darker skin are dearer and lower in SPF, and the sunscreen that gets worn is the one whose texture, tint and sting you can live with.',
    bodyHtml: `
      <p>The use figures: "few adults regularly used sunscreen on the face (men: 18.1%; women: 42.6%)", and regular use tracked sun-sensitive skin and a household income above $60,000 (<a href="https://pubmed.ncbi.nlm.nih.gov/26002066/" rel="noopener nofollow" target="_blank">Holman 2015</a>). The skin-of-colour market: websites recommending sunscreens for darker skin "were more likely to recommend chemical sunscreens (70% vs. 36%) and more expensive products (median: $14 vs. $11.3 per ounce), despite the lower sun protection factor level (median: 32.5 vs. 50)", and 43% of dermatologists surveyed rarely or never took skin type into account when recommending one (<a href="https://pubmed.ncbi.nlm.nih.gov/33937484/" rel="noopener nofollow" target="_blank">Song 2021</a>). The texture rule from the expert panel: "adapting the formulation and texture of the sunscreen to the type of skin and dermatoses is also essential" (<a href="https://pubmed.ncbi.nlm.nih.gov/33764577/" rel="noopener nofollow" target="_blank">Passeron 2021</a>); in rosacea, the vehicle decides the sting — silicones "may prevent irritation from other sunscreen ingredients" (<a href="https://pubmed.ncbi.nlm.nih.gov/9640556/" rel="noopener nofollow" target="_blank">Nichols 1998</a>). What sustained use looks like: transplant recipients given a free SPF 50+ managed "an average of 5.6 applications per week throughout the 24 months" and had no invasive squamous cell carcinomas against eight in the control group (<a href="https://pubmed.ncbi.nlm.nih.gov/19775361/" rel="noopener nofollow" target="_blank">Ulrich 2009</a>).</p>
      <p>Indicative European retail prices, September 2026: SPF 50+ face fluids and gel-creams €8–18 for 50 ml from the pharmacy brands and €30–60 from the prestige ones; tinted iron-oxide SPF 50+ €12–25; mineral SPF 50 €10–25; body lotions and sprays €10–20 for 200 ml; SPF lip balms and sticks €4–12; UPF clothing €20–60 a garment; a 7.5 cm brim €20–80. Two finger-lengths a day for face, ears and neck is roughly a gram, so a 50 ml tube lasts five to six weeks; the brand matters less than the circle, the SPF and whether it is on your face at nine in the morning.</p>
    `,
  },
];

const uses: Section[] = [
  {
    id: 'use-photoaging',
    category: 'use',
    title: 'Wrinkles, texture and the skin\'s measured age: the only prevention with a randomised trial',
    tldr: 'In the Nambour trial, 903 adults under 55 were randomised to daily broad-spectrum sunscreen or use at their own discretion; after 4.5 years the daily group "showed no detectable increase in skin aging" on blinded microtopography, 24% less aging than the discretionary group (relative odds 0.76, 95% CI 0.59–0.98), while 30 mg of beta-carotene did nothing. Strong, as every guide on this site grades it — and the only anti-aging intervention whose evidence base also counts cancers.',
    evidence: 'strong',
    focus: 'aging',
    note: 'Best for: every face on this site, under every other row — the precondition for keeping any result a retinoid, a peel or a laser produces',
    sessions: 'Every morning, for good',
    downtime: 'None',
    cost: '€10–25 / month',
    bodyHtml: `
      <p>The trial: "Randomized, controlled, community-based intervention" in Nambour, Australia, four arms of daily or discretionary broad-spectrum sunscreen crossed with 30 mg of beta-carotene or placebo, and the endpoint "change in microtopography between 1992 and 1996 … graded by assessors blinded to treatment allocation"; the result "The daily sunscreen group showed no detectable increase in skin aging after 4.5 years. Skin aging from baseline to the end of the trial was 24% less in the daily sunscreen group than in the discretionary sunscreen group (relative odds, 0.76 [95% CI, 0.59 to 0.98])", with the honest limitation that "power to detect moderate treatment effects was modest" (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>). The product was the parent trial\'s "sun protection factor 15-plus sunscreen to the head, neck, arms, and hands" every morning (<a href="https://pubmed.ncbi.nlm.nih.gov/10475183/" rel="noopener nofollow" target="_blank">Green 1999</a>) — a 15-plus applied at the trial dose, which a 50+ at the dose you use roughly reproduces (<a href="https://pubmed.ncbi.nlm.nih.gov/22463921/" rel="noopener nofollow" target="_blank">Ou-Yang 2012</a>). The supporting study is weaker and points the same way: 32 people applying an SPF 30 to the face daily for a year improved on every photoaging parameter from week 12, with texture, clarity and mottled pigmentation 40–52% better at week 52 (<a href="https://pubmed.ncbi.nlm.nih.gov/27749441/" rel="noopener nofollow" target="_blank">Randhawa 2016</a>). The mechanism sits in the basics drawer: UVA to the dermis, infrared-A switching on the collagenase MMP-1 in 80% of people (<a href="https://pubmed.ncbi.nlm.nih.gov/18449210/" rel="noopener nofollow" target="_blank">Schroeder 2008</a>).</p>
      <p>Strong, and consistently so: the <a href="/wrinkles">wrinkles</a>, <a href="/sun-damage">sun damage</a>, <a href="/collagen-loss">collagen loss</a>, <a href="/dull-skin">dull skin</a> and decade guides all grade daily sunscreen strong on this trial. One randomised trial with a modest effect size and cancer endpoints behind it outranks every serum, supplement and device on this site; the reason it is not "very strong" is that there is only one, and the reason the effect is not larger is that the discretionary group in Queensland also used sunscreen, just not every day.</p>
    `,
  },
  {
    id: 'use-actinic-keratoses-scc',
    category: 'use',
    title: 'Pre-cancers and squamous cell carcinoma: 40% fewer, and the rough patches regress',
    tldr: 'Daily SPF 17 for one Australian summer cut new solar keratoses (rate ratio 0.62) and increased remissions (odds ratio 1.53) in 588 people, with a dose–response to the amount used; in Nambour, daily sunscreen cut squamous cell carcinoma tumours by 39% (rate ratio 0.61) at 4.5 years and by 38% (rate ratio 0.62) over the following eight; in 120 transplant recipients, two years of daily SPF 50+ meant no invasive squamous cell carcinomas against eight, and keratosis counts of 89 against 273. Strong.',
    evidence: 'strong',
    focus: 'cancer',
    note: 'Best for: anyone with sun spots, rough patches or a skin cancer behind them — the base under the treatments in the sun damage guide',
    sessions: 'Every morning; a nicotinamide tablet as well if you have had a skin cancer',
    downtime: 'None',
    cost: '€10–25 / month',
    bodyHtml: `
      <p>The keratosis trials: 588 Australians over 40 applied an SPF 17 or its base cream to the head, neck, forearms and hands for one summer; "the mean number of solar keratoses increased by 1.0 per subject in the base-cream group and decreased by 0.6 in the sunscreen group", with fewer new lesions (rate ratio 0.62), more remissions (odds ratio 1.53) and "a dose-response relation: the amount of sunscreen cream used was related to both the development of new lesions and the remission of existing ones" (<a href="https://pubmed.ncbi.nlm.nih.gov/8377777/" rel="noopener nofollow" target="_blank">Thompson 1993</a>); a two-year double-blind trial in a high-risk Texas clinic found "the rate of appearance of new precancerous skin lesions was less for the treatment group" (<a href="https://pubmed.ncbi.nlm.nih.gov/7857113/" rel="noopener nofollow" target="_blank">Naylor 1995</a>); in Nambour the keratosis count ratio over two years was 1.20 with daily use against 1.57 with discretionary use, "equivalent to the prevention of an average of 1 additional SK per person" (<a href="https://pubmed.ncbi.nlm.nih.gov/12707092/" rel="noopener nofollow" target="_blank">Darlington 2003</a>). The cancer: squamous cell carcinoma tumours "significantly lower in the sunscreen group than in the no daily sunscreen group (1115 vs 1832 per 100,000; 0.61 [0.46-0.81])" (<a href="https://pubmed.ncbi.nlm.nih.gov/10475183/" rel="noopener nofollow" target="_blank">Green 1999</a>), and "significantly decreased by almost 40% during the entire follow-up period (rate ratio, 0.62)" eight years after the trial stopped (<a href="https://pubmed.ncbi.nlm.nih.gov/17132769/" rel="noopener nofollow" target="_blank">van der Pols 2006</a>). In the highest-risk group of all, 120 organ-transplant recipients, the 60 given a daily SPF 50+ had "8 new invasive SCC (0 vs. 8; P&lt;0.01)" and keratosis counts of "89 vs. 273" after two years (<a href="https://pubmed.ncbi.nlm.nih.gov/19775361/" rel="noopener nofollow" target="_blank">Ulrich 2009</a>). The 2016 Cochrane review, counting people rather than tumours, found only the Nambour trial eligible for the general population and graded its evidence low quality (<a href="https://pubmed.ncbi.nlm.nih.gov/27455163/" rel="noopener nofollow" target="_blank">Sánchez 2016</a>) — the tier here rests on the tumour counts, the keratosis trials and the transplant study together.</p>
      <p>Strong, as the <a href="/sun-damage">sun damage guide</a> grades it. For the person who already has a field of keratoses the row pairs with <a href="#prod-oral-nicotinamide">oral nicotinamide</a> and with the field treatments — photodynamic therapy, 5-fluorouracil, the medium peel — that the sun damage guide grades; the sunscreen is what keeps them from coming back.</p>
    `,
  },
  {
    id: 'use-pigment',
    category: 'use',
    title: 'Sun spots, melasma and post-inflammatory marks: the base of every pigment treatment — tinted',
    tldr: 'For melasma the sunscreen has to block visible light. In a double-blind randomised trial of 68 patients on hydroquinone, an iron-oxide tinted SPF 50+ gave 15% more improvement on the melasma index and 28% more colorimetric lightening than a UV-only SPF 50+; a tinted sunscreen cut relapses over six months against an untinted one; through a summer in the south of France a tinted SPF 65 narrowed the colour difference between melasma and normal skin and the untinted twin did not; and 185 pregnant women using SPF 50+ daily developed melasma in 2.7% against 53% in the same clinic\'s earlier cohort. Strong, and the tint is the treatment.',
    evidence: 'strong',
    focus: 'pigment',
    note: 'Best for: melasma, sun spots, post-inflammatory marks and any skin of type IV or darker — iron oxides on the label (CI 77491, 77492, 77499), all year',
    sessions: 'Every morning, all year; reapplied at midday outdoors',
    downtime: 'None',
    cost: '€12–25 / month',
    bodyHtml: `
      <p>The trials: 68 melasma patients on 4% hydroquinone were randomised to a broad-spectrum SPF ≥ 50 with iron oxide or the same without; "at 8 weeks, the UV-VL group showed 15%, 28% and 4% greater improvements than the UV-only group in MASI scores, colorimetric values and melanin assessments" (<a href="https://pubmed.ncbi.nlm.nih.gov/24313385/" rel="noopener nofollow" target="_blank">Castanedo-Cázares 2014</a>); a prospective randomised comparison found significantly fewer melasma relapses over six months with a sunscreen that also blocked short-wavelength visible light than with a UV-only one (<a href="https://pubmed.ncbi.nlm.nih.gov/25443629/" rel="noopener nofollow" target="_blank">Boukari 2015</a>); in 42 women through five months of a southern French summer, the tinted SPF 65 (UVA-PF 35, visible-light protection factor 66) significantly reduced the colour difference between melasma and unaffected skin and the identical untinted formula did not, while the melasma index fell in both groups (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12475913/" rel="noopener nofollow" target="_blank">Polena 2025</a>). Prevention in pregnancy: of 185 women who used an SPF 50+ (UVA-PF 28) daily, "only five new cases of chloasma were noted, an occurrence of 2.7%, which is much lower than the 53% previously observed" by the same investigators (<a href="https://pubmed.ncbi.nlm.nih.gov/17567299/" rel="noopener nofollow" target="_blank">Lakhdar 2007</a>). The physics: visible light pigments type IV–VI skin more darkly and durably than long-wave UVA (<a href="https://pubmed.ncbi.nlm.nih.gov/20410914/" rel="noopener nofollow" target="_blank">Mahmoud 2010</a>), iron-oxide formulations "significantly protected against visible light-induced pigmentation compared to untreated skin or mineral SPF 50+ sunscreen in Fitzpatrick IV individuals" (<a href="https://pubmed.ncbi.nlm.nih.gov/32726103/" rel="noopener nofollow" target="_blank">Dumbuya 2020</a>), and "for a sunscreen to protect against visible light, it must be visible on the skin" (<a href="https://pubmed.ncbi.nlm.nih.gov/32335182/" rel="noopener nofollow" target="_blank">Lyons 2021</a>). The 2026 international Delphi consensus lists "photoprotection with broad-spectrum sunscreens as essential" ahead of hydroquinone (<a href="https://pubmed.ncbi.nlm.nih.gov/40996222/" rel="noopener nofollow" target="_blank">Sarkar 2026</a>), and the evidence-based review of 113 melasma trials assumes it under every intervention (<a href="https://pubmed.ncbi.nlm.nih.gov/31802394/" rel="noopener nofollow" target="_blank">McKesey 2020</a>).</p>
      <p>Strong, as the <a href="/dark-spots">dark spots guide</a> grades it. For ordinary sun spots and post-inflammatory marks the visible-light story matters less and the daily habit matters as much; the <a href="/serums">serums guide</a> grades the brighteners that go under it and the dark spots guide the lasers that go after it.</p>
    `,
  },
  {
    id: 'use-hands-neck-chest',
    category: 'use',
    title: 'Hands, neck and chest: the sites the trial actually measured',
    tldr: 'The Nambour trial\'s aging endpoint was a silicone cast of the back of the hand, and its cancer analysis counted only tumours on the sites of daily application — head, neck, arms and hands. The left hand and the left side of the face take the car window\'s UVA: side windows blocked about 89% of it against the windscreen\'s 99%, and one Mohs unit found 74% of its melanomas in situ on the left. Strong — the same evidence as the face, on skin that gets a tenth of the sunscreen.',
    evidence: 'strong',
    focus: 'body',
    note: 'Best for: the backs of the hands after every wash, the V of the chest, the sides of the neck and the ears — and the window-side arm before driving',
    sessions: 'Every morning and after every hand-wash',
    downtime: 'None',
    cost: '€10–20 / month',
    bodyHtml: `
      <p>The trial measured "change in microtopography" on the hand (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>) and applied the sunscreen "to the head, neck, arms, and hands", with the cancer analysis "based only on skin cancers that developed on sites of daily application" (<a href="https://pubmed.ncbi.nlm.nih.gov/10475183/" rel="noopener nofollow" target="_blank">Green 1999</a>) — so the strong tier belongs to these sites first. The car: across 34 vehicles, the windscreen attenuated 99.25% of UVA and the driver\'s side window 88.78%, with the front side windows the weakest glass in most cars and mileage, not age, predicting how much got through (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11742901/" rel="noopener nofollow" target="_blank">Axelson 2025</a>); "laminated glass offers better UVA protection than tempered glass" and "window films can be applied to glass to increase UVR protection" (<a href="https://pubmed.ncbi.nlm.nih.gov/23458389/" rel="noopener nofollow" target="_blank">Almutawa 2013</a>). The result on the skin: in a Mohs unit\'s year, 52.6% of skin cancers were on the left, with "significantly more malignant melanoma in situ on the left (31/42, 74%)" (<a href="https://pubmed.ncbi.nlm.nih.gov/20226568/" rel="noopener nofollow" target="_blank">Butler 2010</a>), and the textbook image is a truck driver\'s face aged decades more on the window side (<a href="https://pubmed.ncbi.nlm.nih.gov/22512500/" rel="noopener nofollow" target="_blank">Gordon 2012</a>).</p>
      <p>Strong, as the <a href="/aging-hands">aging hands</a>, <a href="/decolletage">décolletage</a> and <a href="/neck">neck</a> guides grade it. The practical difference from the face is attrition: hands are washed ten times a day and the chest is dressed and undressed, so the rule is a tube by the sink and one in the car, and long sleeves in UPF fabric for the drive.</p>
    `,
  },
  {
    id: 'use-melanoma',
    category: 'use',
    title: 'Melanoma: the trial says half, the cohort says a third, the meta-analysis says unproven',
    tldr: 'Ten years after Nambour ended, 11 melanomas had occurred in the daily-sunscreen group against 22 (hazard ratio 0.50, p = 0.051) and invasive melanomas 3 against 11 (hazard ratio 0.27); in 143,844 Norwegian women, users of SPF 15+ had a third lower melanoma risk than users of weaker products (hazard ratio 0.67); but a meta-analysis of 29 mostly case-control studies found no association at all, because the people who buy sunscreen are the people who sunbathe. Moderate: one randomised trial with 33 events, and honest about it.',
    evidence: 'moderate',
    focus: 'cancer',
    note: 'Best for: fair skin, many moles, a family history — with a hat and shade, because the trial population used all three',
    sessions: 'Every morning; generously on holiday',
    downtime: 'None',
    cost: '€10–25 / month',
    bodyHtml: `
      <p>The trial follow-up: "Ten years after trial cessation, 11 new primary melanomas had been identified in the daily sunscreen group, and 22 had been identified in the discretionary group … (hazard ratio [HR], 0.50; 95% CI, 0.24 to 1.02; P = .051). The reduction in invasive melanomas was substantial (n = 3 in active v 11 in control group; HR, 0.27; 95% CI, 0.08 to 0.97)" — "Melanoma may be preventable by regular sunscreen use in adults" (<a href="https://pubmed.ncbi.nlm.nih.gov/21135266/" rel="noopener nofollow" target="_blank">Green 2011</a>). The cohort: 1.5 million person-years and 722 melanomas; "sunscreen users reported significantly more sunburns and sunbathing vacations", and SPF ≥ 15 use against SPF &lt; 15 use carried a hazard ratio of 0.67, with a population-attributable fraction of 18% (<a href="https://pubmed.ncbi.nlm.nih.gov/27621396/" rel="noopener nofollow" target="_blank">Ghiasvand 2016</a>). The meta-analysis: 29 studies, 313,717 participants, "the overall meta-analysis did not show a significant association between skin cancer and sunscreen use (odds ratio (OR) = 1.08)", with the pre-1980s studies showing sunscreen users at more than double the risk and the association fading to nothing by the 1990s — confounding by exposure, the authors conclude, and "this systematic review does not confirm the expected protective benefits" (<a href="https://pubmed.ncbi.nlm.nih.gov/29620003/" rel="noopener nofollow" target="_blank">Silva 2018</a>). The behavioural trials explain the confounding: higher-SPF users stayed in the sun longer (<a href="https://pubmed.ncbi.nlm.nih.gov/10433619/" rel="noopener nofollow" target="_blank">Autier 1999</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/11027441/" rel="noopener nofollow" target="_blank">Autier 2000</a>). The risk factors sunscreen does not touch: sunbed use raises melanoma risk by 20% overall and 87% when started before 35 (<a href="https://pubmed.ncbi.nlm.nih.gov/22833605/" rel="noopener nofollow" target="_blank">Boniol 2012</a>), and in skin of colour the commonest melanomas are on the palms, soles and nails, where "there are limited data on UV exposure and melanoma risk" (<a href="https://pubmed.ncbi.nlm.nih.gov/35533770/" rel="noopener nofollow" target="_blank">Brunsgaard 2023</a>).</p>
      <p>Moderate, one tier below the <a href="/sun-damage">sun damage guide</a>\'s combined sunscreen row, which folds the melanoma follow-up into the strong squamous-cell and aging evidence; graded on its own, the melanoma claim rests on 33 events in one trial and a cohort that points the same way. Nothing here argues against the habit — the same daily application is what produced the trial\'s numbers — only against believing the bottle does the whole job.</p>
    `,
  },
  {
    id: 'use-eyes-lips-ears',
    category: 'use',
    title: 'Eyelids, lips, ears and the hairline: where the sunscreen never lands',
    tldr: 'Ultraviolet photographs of 84 people applying SPF 30 showed 11% of the face missed with a sunscreen and 17% with an SPF moisturiser, the eyelids 14% and 21% — and the participants did not know. More than 90% of 408 patients with actinic cheilitis had never used lip protection. In the exposure models, large sunglasses brought the periorbital dose close to zero and medium ones did the least; a hat needs a brim over 7.5 cm to give the nose and cheeks a protection factor above 3. Moderate: coverage studies and dosimetry, applied to the same trial evidence as the face.',
    evidence: 'moderate',
    focus: 'eyes',
    note: 'Best for: a mineral stick to the lids and lips, large UV400 sunglasses, the ears and the parting, and a brim',
    sessions: 'Every morning; the lip balm through the day',
    downtime: 'None',
    cost: '€4–12 for a stick; sunglasses and a hat once',
    bodyHtml: `
      <p>The coverage data: "application of moisturiser was significantly worse than sunscreen in terms area of the whole face missed (11.1% missed with sunscreen compared to 16.6% for SPF moisturiser)", "primarily due to decreased coverage of the eyelid regions (14.0% missed with sunscreen, 20.9% moisturiser)", and "participants to be unaware of their incomplete coverage" (<a href="https://pubmed.ncbi.nlm.nih.gov/30943192/" rel="noopener nofollow" target="_blank">Lourenço 2019</a>). The lips: in eight Galician dermatology departments, "more than 90% of AC patients (370/408) had never used lip photoprotection" (<a href="https://pubmed.ncbi.nlm.nih.gov/31475909/" rel="noopener nofollow" target="_blank">Rodríguez-Blanco 2019</a>); the risk factors for actinic cheilitis are fair skin (odds ratio 3.30), age over 50, cumulative and daily sun exposure, male sex, drinking and smoking, and in the pooled observational data "the use of sunscreen creams and caps/hats to protect against the sun were factors with no significant influence" — which is what a habit almost nobody has looks like in a case-control study (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8760378/" rel="noopener nofollow" target="_blank">Rodríguez-Archilla 2021</a>). The eyes: modelled ultraviolet doses to the facial, periorbital and ocular zones under three head positions found "least sun protection was provided by middle-sized sunglasses", goggles "almost 100% protection at all skin zones", large sunglasses highly effective, and "sunglasses do not totally block UVR and should be combined with additional protection means" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6803516/" rel="noopener nofollow" target="_blank">Backes 2019</a>). The hat: "hats with a wide (greater than 7.5 cm) brim are necessary in order to provide reasonable protection factors (greater than 3) around the nose and cheeks", a baseball cap protects the nose and little else, and a flat cap "negligible protection at all sites apart from the vertex and forehead" (<a href="https://pubmed.ncbi.nlm.nih.gov/1637687/" rel="noopener nofollow" target="_blank">Diffey 1992</a>).</p>
      <p>Moderate here, where the <a href="/crows-feet">crow\'s feet</a> and <a href="/lip-lines">lip lines</a> guides grade sunscreen and sunglasses strong: those rows borrow the face-wide Nambour result for the skin around the eye and mouth, which is fair, while this row grades what is known about the sites themselves — coverage photographs, dosimetry and a case-control null. The instruction is the same either way: carry the sunscreen to the lash line and the vermilion, use a stick where a fluid stings, and put the sunglasses on before the squint.</p>
    `,
  },
  {
    id: 'use-rosacea-sensitive',
    category: 'use',
    title: 'Rosacea, redness and the face that stings: a sunscreen as trigger control',
    tldr: 'Ultraviolet light is implicated in "all significant aspects of rosacea: skin inflammation, neoangiogenesis, telangiectasia, and fibrosis", sun is the most-cited trigger, and yet "the literature on the impact of photoprotection in rosacea is scarce": six studies, in which sunscreens with emollient, anti-inflammatory or vessel-calming ingredients improved symptoms, and a bilateral comparison showing that silicones in the vehicle stop the filters stinging. Moderate, as the facial redness guide grades it — a mineral or silicone-based SPF 50 that does not burn, tinted if the redness shows.',
    evidence: 'moderate',
    focus: 'sensitive',
    note: 'Best for: anyone who flushes, whose sunscreen stings, or who reacts to fragrance — a fluid tested on the jawline before the whole face',
    sessions: 'Every morning',
    downtime: 'None',
    cost: '€12–25 / month',
    bodyHtml: `
      <p>The review: "UV light is implicated in all significant aspects of rosacea: skin inflammation, neoangiogenesis, telangiectasia, and fibrosis, and may even initiate rosacea. While the use of sunscreens is widely recommended, the literature on the impact of photoprotection in rosacea is scarce. Adequately formulated sunscreens could not only provide the required level of photoprotection, but may also help to mitigate the barrier dysfunction, neutralize facial redness (tinted sunscreens), and decrease inflammation and vascular dysfunction" — six original studies of sunscreen in rosacea, all showing symptomatic improvement with the right vehicle (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8596706/" rel="noopener nofollow" target="_blank">Morgado-Carrasco 2021</a>). The vehicle: patients with rosacea "are particularly susceptible to the irritation caused by sunscreen ingredients", and "appropriate protective ingredients, such as dimethicone and cyclomethicone in the vehicle, may prevent irritation from other sunscreen ingredients" (<a href="https://pubmed.ncbi.nlm.nih.gov/9640556/" rel="noopener nofollow" target="_blank">Nichols 1998</a>). The panel\'s recommendation for inflammatory and sensitive skin is a formulation adapted to the dermatosis rather than a particular filter (<a href="https://pubmed.ncbi.nlm.nih.gov/33764577/" rel="noopener nofollow" target="_blank">Passeron 2021</a>); the practical translation is a mineral or mineral-led SPF 50 in a silicone base, fragrance-free, with a green or beige tint if the flush is the complaint.</p>
      <p>Moderate, as the <a href="/facial-redness">facial redness guide</a> grades it: no trial has randomised sunscreen against none in rosacea, and the tier rests on mechanism, surveys and small formulation studies. The redness guide carries the treatments — azelaic acid, ivermectin, the vascular lasers — that the sunscreen protects.</p>
    `,
  },
  {
    id: 'use-children-teens',
    category: 'use',
    title: 'Children and teenagers: fewer moles, and the sunburns that count at every age',
    tldr: 'In 309 white Vancouver schoolchildren randomised to a broad-spectrum SPF 30 or to nothing for three years, the sunscreen group grew fewer new moles (median 24 against 28), freckled children 30–40% fewer, and the difference sat on the trunk — the intermittently exposed site; a meta-analysis of 51 study populations found sunburns raise melanoma risk in childhood, adolescence and adulthood alike; and the skin barrier stays immature for at least the first two years of life. Moderate: one randomised trial on a surrogate, and strong biology.',
    evidence: 'moderate',
    focus: 'children',
    note: 'Best for: every child from six months, generously and with a hat; shade and clothing before that',
    sessions: 'Every outdoor day; reapplied at school breaks and after water',
    downtime: 'None',
    cost: '€10–20 / month in summer',
    bodyHtml: `
      <p>The trial: 458 children in grades 1 and 4 were randomised, and among the 309 white children analysed, "children in the sunscreen group developed fewer nevi than did children in the control group (median counts, 24 vs 28; P=.048)", with modelling suggesting "freckled children assigned to a broad-spectrum sunscreen intervention would develop 30% to 40% fewer new nevi" (<a href="https://pubmed.ncbi.nlm.nih.gov/10865273/" rel="noopener nofollow" target="_blank">Gallagher 2000</a>); by site, the protection was "on intermittently sun-exposed body sites", the trunk above all (<a href="https://pubmed.ncbi.nlm.nih.gov/15858467/" rel="noopener nofollow" target="_blank">Lee 2005</a>). The stakes: "an increased risk of melanoma was seen with increasing number of sunburns for all time-periods (childhood, adolescence, adulthood, and lifetime)" (<a href="https://pubmed.ncbi.nlm.nih.gov/18652979/" rel="noopener nofollow" target="_blank">Dennis 2008</a>), and first sunbed use before 35 carries a relative risk of 1.87 (<a href="https://pubmed.ncbi.nlm.nih.gov/22833605/" rel="noopener nofollow" target="_blank">Boniol 2012</a>). The infant skin: "the skin\'s barrier protection remains immature throughout at least the first 2 years of life" and "accumulation of UVR-induced changes in the skin may begin as early as the first summer of life" (<a href="https://pubmed.ncbi.nlm.nih.gov/21646256/" rel="noopener nofollow" target="_blank">Paller 2011</a>).</p>
      <p>Moderate, because a mole count is a surrogate and there is one trial; the melanoma logic behind it is as strong as anything on this page. Practically: under six months, shade, a brim and clothing rather than cream; from six months a mineral SPF 50 on what the clothes do not cover; and for teenagers, whose sunburns count as much as anyone\'s, the honest message is that a tan is not protection (<a href="https://pubmed.ncbi.nlm.nih.gov/20979596/" rel="noopener nofollow" target="_blank">Miyamura 2011</a>).</p>
    `,
  },
  {
    id: 'use-existing-damage',
    category: 'use',
    title: 'Damage already done: what daily sunscreen alone reverses',
    tldr: 'In an open, single-arm, manufacturer-funded study, 32 people applying an SPF 30 to the face every day for a year improved on every photoaging score from week 12, with texture, clarity and mottled pigmentation 40–52% better at week 52 and every subject improved on clarity and texture; the keratosis trials also recorded remissions of existing lesions (odds ratio 1.53). Emerging for reversal: no control arm, no biopsies, and nothing a retinoid, a peel or a laser would call a result — but the floor that every other treatment builds on.',
    evidence: 'emerging',
    focus: 'aging',
    note: 'Best for: the face that has just started — for established damage, the retinoid, the peel and the laser, with this underneath',
    sessions: 'Every morning; judge at 12 weeks and a year',
    downtime: 'None',
    cost: '€10–25 / month',
    bodyHtml: `
      <p>The study: "Thirty-two subjects applied a broad spectrum photostable sunscreen (SPF 30) for 52 weeks to the entire face … all photoaging parameters improved significantly from baseline as early as Week 12 and the amelioration continued until Week 52. Skin texture, clarity, and mottled and discrete pigmentation were the most improved parameters by the end of the study (40% to 52% improvement from baseline), with 100% of subjects showing improvement in skin clarity and texture" (<a href="https://pubmed.ncbi.nlm.nih.gov/27749441/" rel="noopener nofollow" target="_blank">Randhawa 2016</a>). The controlled data on regression are for keratoses, not wrinkles: "more remissions (odds ratio, 1.53)" over a summer of SPF 17 (<a href="https://pubmed.ncbi.nlm.nih.gov/8377777/" rel="noopener nofollow" target="_blank">Thompson 1993</a>) and a lower keratosis count in Nambour (<a href="https://pubmed.ncbi.nlm.nih.gov/12707092/" rel="noopener nofollow" target="_blank">Darlington 2003</a>). The randomised aging trial measured prevention, not repair — "no detectable increase" — and that is the claim the strong tier belongs to (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>).</p>
      <p>Emerging, and deliberately separated from the prevention row so that the strong tier is not read as a promise of reversal. The mechanism is real — skin that is no longer being damaged repairs some of what it can — and the reader who wants more than that is in the <a href="/retinoids">retinoids</a>, <a href="/chemical-peels">peels</a> and <a href="/skin-resurfacing">resurfacing</a> guides, every one of which assumes this row is already in place.</p>
    `,
  },
  {
    id: 'use-indoors-car-screens',
    category: 'use',
    title: 'Indoors, in the car and at the screen: what gets through glass and what does not',
    tldr: 'Window glass blocks UVB and lets UVA through; a laminated windscreen stops 99% of UVA and a tempered side window about 89%, which is why skin cancers and photoaging cluster on the driver\'s side, and a window film brings a side window to windscreen standard. The screen is a different matter: a controlled study found that short-term exposure to the blue light of electronic devices did not worsen melasma. Emerging: physical and observational evidence for the window, negative evidence for the laptop — sunscreen for the window seat and the car, none for the screen.',
    evidence: 'emerging',
    focus: 'general',
    note: 'Best for: commuters, drivers, the desk by the window and the conservatory; not the desk by the laptop',
    sessions: 'Mornings when you will sit by glass; the drive',
    downtime: 'None',
    cost: '€10–25 / month; €100–300 for a car window film',
    bodyHtml: `
      <p>The glass: "all types of commercial and automobile glass block the majority of ultraviolet-B; however, the degree of ultraviolet-A transmission depends on the type of glass. Laminated glass offers better UVA protection than tempered glass" (<a href="https://pubmed.ncbi.nlm.nih.gov/23458389/" rel="noopener nofollow" target="_blank">Almutawa 2013</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/16635665/" rel="noopener nofollow" target="_blank">Tuchinda 2006</a>); measured across 34 vehicles, 99.25% UVA attenuation at the windscreen and 88.78% at the driver\'s side window (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11742901/" rel="noopener nofollow" target="_blank">Axelson 2025</a>). The skin: more cancers on the left in an American Mohs unit, 74% of melanomas in situ (<a href="https://pubmed.ncbi.nlm.nih.gov/20226568/" rel="noopener nofollow" target="_blank">Butler 2010</a>), and the driver whose window side of the face carried 28 years of extra aging (<a href="https://pubmed.ncbi.nlm.nih.gov/22512500/" rel="noopener nofollow" target="_blank">Gordon 2012</a>). The screen: a controlled study of melasma patients exposed to the blue light emitted by electronic devices found no worsening over the short term (<a href="https://pubmed.ncbi.nlm.nih.gov/31887321/" rel="noopener nofollow" target="_blank">Duteil 2020</a>) — the visible light that pigments skin in the laboratory is delivered at solar irradiance, orders of magnitude above a screen (<a href="https://pubmed.ncbi.nlm.nih.gov/20410914/" rel="noopener nofollow" target="_blank">Mahmoud 2010</a>).</p>
      <p>Emerging, because no trial has randomised indoor sunscreen against none and the case for it is dosimetry plus a left-sided cancer pattern; that is enough for the commuter and the window seat, and nothing for the "blue-light" claim that the <a href="#prod-beyond-uv-claims">marketing row</a> grades. A daily morning application already covers the office window; the car deserves its own tube and, for the long-distance driver, a film on the side windows.</p>
    `,
  },
  {
    id: 'use-bcc',
    category: 'use',
    title: 'Basal cell carcinoma: the one skin cancer daily sunscreen did not prevent',
    tldr: 'In Nambour, basal cell carcinoma incidence was the same in the daily and discretionary groups (rate ratio 1.03) at 4.5 years and "tended to decrease but not significantly" eight years later; in transplant recipients two years of daily SPF 50+ gave 2 basal cell carcinomas against 9, not significant. Basal cell carcinoma tracks intermittent, early-life exposure more than the cumulative adult dose a sunscreen habit removes. Limited — a negative result, not a reason to stop: the same habit prevents the cancer that spreads.',
    evidence: 'limited',
    focus: 'cancer',
    note: 'Best for: understanding the limits — and why the childhood row and the sunburns matter more for this tumour',
    sessions: 'Every morning regardless',
    downtime: 'None',
    cost: '€10–25 / month',
    bodyHtml: `
      <p>The numbers: "there were no significant differences in the incidence of first new skin cancers between groups randomly assigned daily sunscreen and no daily sunscreen (basal-cell carcinoma 2588 vs 2509 per 100,000; rate ratio 1.03 [95% CI 0.73-1.46])" and "no effect on incidence of basal-cell carcinoma by sunscreen use" in the tumour count (<a href="https://pubmed.ncbi.nlm.nih.gov/10475183/" rel="noopener nofollow" target="_blank">Green 1999</a>); "after prolonged follow-up, BCC tumor rates tended to decrease but not significantly" (<a href="https://pubmed.ncbi.nlm.nih.gov/17132769/" rel="noopener nofollow" target="_blank">van der Pols 2006</a>); in transplant recipients, "11 BCC (2 vs. 9; ns)" (<a href="https://pubmed.ncbi.nlm.nih.gov/19775361/" rel="noopener nofollow" target="_blank">Ulrich 2009</a>). The Cochrane review\'s low-quality-evidence verdict on keratinocyte cancer as a whole rests on the same trial (<a href="https://pubmed.ncbi.nlm.nih.gov/27455163/" rel="noopener nofollow" target="_blank">Sánchez 2016</a>). Basal cell carcinoma\'s epidemiology — intermittent exposure and sunburn, much of it before adulthood — is the likeliest reason a 4.5-year adult habit did not move it, and a 30-patient DNA-repair trial in xeroderma pigmentosum that cut basal cell carcinomas from 5.4 to 3.8 a year hints at where the tumour\'s damage is done (<a href="https://pubmed.ncbi.nlm.nih.gov/11289350/" rel="noopener nofollow" target="_blank">Yarosh 2001</a>).</p>
      <p>Limited, for the specific claim, and stated plainly because the site\'s other guides quote the squamous-cell and melanoma numbers and a reader deserves the one that went the other way. The nicotinamide row is the evidence-based addition for someone who has already had a basal cell carcinoma.</p>
    `,
  },
  {
    id: 'use-tan',
    category: 'use',
    title: 'A "safe tan", a "base tan" and the sunbed: the protection that is not',
    tldr: 'A UVA-induced tan "contributes essentially no photoprotection" and a UVB tan only a modest one, and every tan is itself DNA damage; sunbed use raises melanoma risk by 20% overall and 87% when started before 35, with 1.8% more risk per extra session a year; sunburns at any age raise the risk; and a higher-SPF sunscreen let young Europeans stay in the sun 25% longer without burning less. Limited — the row for the beach holiday and the "pre-holiday" sunbed, both of which the evidence says to skip.',
    evidence: 'limited',
    focus: 'marketing',
    note: 'Best for: nobody — a tinted sunscreen or a self-tanner gives the colour without the dose',
    sessions: 'None',
    downtime: 'None',
    cost: '€0',
    bodyHtml: `
      <p>The tan: skin repeatedly exposed to sub-burning UVA, UVB or both looked equally tanned, but "the melanin content and UV-protective effects against DNA damage in UVB-tanned skin (but not in UVA-tanned skin) were significantly higher", so "UVA tanning contributes essentially no photoprotection, although all types of UV-induced tanning result in DNA and cellular damage" (<a href="https://pubmed.ncbi.nlm.nih.gov/20979596/" rel="noopener nofollow" target="_blank">Miyamura 2011</a>) — and sunbeds are mostly UVA. The sunbed: across 27 studies "ever use of sunbeds was associated with a summary relative risk of 1.20", rising to 1.87 for first use before 35, "a 1.8% increase in risk of melanoma for each additional session of sunbed use per year", and an estimated 3,438 melanomas a year in western Europe attributable to them (<a href="https://pubmed.ncbi.nlm.nih.gov/22833605/" rel="noopener nofollow" target="_blank">Boniol 2012</a>). The burn: risk rises with the number of sunburns in every period of life (<a href="https://pubmed.ncbi.nlm.nih.gov/18652979/" rel="noopener nofollow" target="_blank">Dennis 2008</a>). The behaviour: SPF 30 rather than SPF 10 meant 72.6 against 58.2 hours of holiday sun and no less sunburn (<a href="https://pubmed.ncbi.nlm.nih.gov/10433619/" rel="noopener nofollow" target="_blank">Autier 1999</a>), and the dosimeter trial found sunscreen "tended to increase the duration of exposures to doses of ultraviolet radiation below the sunburn threshold" (<a href="https://pubmed.ncbi.nlm.nih.gov/11027441/" rel="noopener nofollow" target="_blank">Autier 2000</a>).</p>
      <p>Limited, in the sense the site uses for negative evidence. Sunscreen is not a licence: the trial-proven habit is daily protection of skin that is going about its day, not a tool for lying in the sun longer, and the tan that the holiday is for is the dose this whole guide is about avoiding.</p>
    `,
  },
  {
    id: 'use-post-procedure',
    category: 'use',
    title: 'After a laser or a peel: what sunscreen alone does not prevent',
    tldr: 'Every clinic says SPF 50 after a procedure, and rightly, for the sake of healing skin — but a 2026 network meta-analysis of 14 randomised trials found sunscreen monotherapy no better than placebo at preventing post-laser hyperpigmentation, while topical steroids, tranexamic acid and cooling worked; a split-face trial after picosecond laser found only a non-significant trend with an anti-inflammatory sunscreen. Limited for the specific claim; the sunscreen stays, and the pigment prevention comes from the clinic\'s protocol and the tinted row.',
    evidence: 'limited',
    focus: 'pigment',
    note: 'Best for: everyone after a procedure — with the clinic\'s tranexamic acid, steroid or cooling doing the actual pigment prevention',
    sessions: 'Every morning after a procedure, tinted, for three months',
    downtime: 'None',
    cost: '€12–25 / month',
    bodyHtml: `
      <p>The network meta-analysis: fourteen randomised trials of interventions against post-inflammatory hyperpigmentation after laser and energy devices; "intradermal tranexamic acid (TXA), topical corticosteroids, topical vasoconstrictors, oral TXA, and epidermal cooling were significantly more effective in reducing PIH incidence compared with sunscreen monotherapy … while sunscreen monotherapy was ineffective compared with placebo" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12997392/" rel="noopener nofollow" target="_blank">Wongdama 2026</a>). The split-face trial: 59 patients of skin types III and IV after a picosecond laser, a sunscreen with an anti-inflammatory agent on one side and a plain one on the other; "sunscreen A caused a higher reduction of the brown score compared to the other side but there was no statistically significant difference" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8894080/" rel="noopener nofollow" target="_blank">Puaratanaarunkon 2022</a>). On a retinoid, the sunscreen earns its place differently: adding a sunscreen to adapalene improved tolerance and post-acne pigmentation in a randomised comparison, with fewer patients scaling and stinging (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10752021/" rel="noopener nofollow" target="_blank">How 2023</a>).</p>
      <p>Limited for "sunscreen prevents post-laser pigment", which is what the bottle is often sold for after a procedure; not limited for wearing it, which the healing dermis needs and every guide on this site assumes. The <a href="/skin-resurfacing">resurfacing</a>, <a href="/laser-ipl">laser and IPL</a> and <a href="/dark-spots">dark spots</a> guides carry the protocols — tranexamic acid, a short steroid course, cooling — that the evidence actually supports.</p>
    `,
  },
];

const products: Section[] = [
  {
    id: 'prod-broad-spectrum-50',
    category: 'product',
    title: 'Broad-spectrum SPF 30–50+ with the UVA circle: the product the trials used',
    tldr: 'The Nambour product was an SPF 15-plus broad-spectrum sunscreen applied every morning to the head, neck, arms and hands, and that is the whole evidence base for preventing aging and squamous cell carcinoma; a 15-plus at the trial dose is what a 50+ delivers at yours. In Europe, buy 50+ with the UVA circle, built on the photostable filters (bemotrizinol, bisoctrizole, ecamsule, drometrizole trisiloxane, diethylamino hydroxybenzoyl hexyl benzoate, stabilised avobenzone) in a texture you will wear every day. Strong.',
    evidence: 'strong',
    focus: 'topical',
    note: 'Top pick: a fragrance-free SPF 50+ fluid with the UVA circle from a European pharmacy brand, two finger-lengths every morning',
    sessions: 'Every morning; a second coat and a top-up in the first hour outdoors',
    downtime: 'None',
    cost: '€8–18 / 50 ml',
    bodyHtml: `
      <p>The evidence is the trial product: "daily application of a sun protection factor 15-plus sunscreen to the head, neck, arms, and hands" (<a href="https://pubmed.ncbi.nlm.nih.gov/10475183/" rel="noopener nofollow" target="_blank">Green 1999</a>), the same daily use that held aging at zero (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>) and reduced squamous cell carcinoma for eight years after the tubes were handed back (<a href="https://pubmed.ncbi.nlm.nih.gov/17132769/" rel="noopener nofollow" target="_blank">van der Pols 2006</a>). Why 50+ and not 15: the real-world dose makes SPF 30 and 50 deliver single figures and SPF 70–100 deliver 19–27 (<a href="https://pubmed.ncbi.nlm.nih.gov/22463921/" rel="noopener nofollow" target="_blank">Ou-Yang 2012</a>), and "current sunscreen labelling overrates the protective effect of a given sunscreen when the reality of sunscreen use is taken into account" (<a href="https://pubmed.ncbi.nlm.nih.gov/24313722/" rel="noopener nofollow" target="_blank">Petersen 2014</a>). Why the circle: the European rules require a UVA-PF of a third of the SPF and a critical wavelength of 370 nm for the logo (<a href="https://eur-lex.europa.eu/eli/reco/2006/647/oj/eng" rel="noopener nofollow" target="_blank">Recommendation 2006/647/EC</a>), and UVA1 "plays a critical role in pigmentation, photoaging, skin cancer, DNA damage and photodermatoses" (<a href="https://pubmed.ncbi.nlm.nih.gov/33764577/" rel="noopener nofollow" target="_blank">Passeron 2021</a>). Why the European filters: the American organic filters "break down when exposed to sunlight, reducing their effectiveness and generating potentially harmful byproducts" and are absorbed (<a href="https://pubmed.ncbi.nlm.nih.gov/40451593/" rel="noopener nofollow" target="_blank">Safian 2025</a>), while the Annex VI molecules were designed to be photostable and, with MCE, to cover the spectrum to 400 nm (<a href="https://pubmed.ncbi.nlm.nih.gov/35072138/" rel="noopener nofollow" target="_blank">Marionnet 2022</a>).</p>
      <p>Strong, as every problem guide on this site grades daily sunscreen. The pick is a pharmacy fluid rather than a prestige cream because the filters are the same, the pharmacy textures are lighter and get worn, and the money is better spent on a second tube for the car and the bag.</p>
    `,
  },
  {
    id: 'prod-tinted-iron-oxide',
    category: 'product',
    title: 'Tinted sunscreen with iron oxides: the visible-light filter for melasma and darker skin',
    tldr: 'Iron oxides (CI 77491, 77492, 77499) and pigmentary titanium dioxide absorb visible light; nano-mineral and organic filters do not. In the trials the tinted sunscreen improved hydroquinone\'s result by 15% on the melasma index, reduced relapses over six months, evened the colour difference over a summer, and protected type IV skin against visible-light pigmentation where an untinted mineral SPF 50+ did not. Strong for pigment, as the dark spots guide grades it; for everyone else, a cosmetic bonus that also hides the white cast.',
    evidence: 'strong',
    focus: 'pigment',
    note: 'Top pick: an iron-oxide tinted SPF 50+ in a shade that matches, worn all year for melasma — the tint is the treatment',
    sessions: 'Every morning, all year',
    downtime: 'None',
    cost: '€12–25 / 40–50 ml',
    bodyHtml: `
      <p>The physics and the trials: "for a sunscreen to protect against visible light, it must be visible on the skin", the nanoparticle minerals "do not protect against visible light", and "tinted sunscreens use different formulations and concentrations of iron oxides and pigmentary titanium dioxide to provide protection against visible light" (<a href="https://pubmed.ncbi.nlm.nih.gov/32335182/" rel="noopener nofollow" target="_blank">Lyons 2021</a>); iron-oxide formulations "significantly protected against visible light-induced pigmentation compared to untreated skin or mineral SPF 50+ sunscreen in Fitzpatrick IV individuals" (<a href="https://pubmed.ncbi.nlm.nih.gov/32726103/" rel="noopener nofollow" target="_blank">Dumbuya 2020</a>); the double-blind hydroquinone trial (<a href="https://pubmed.ncbi.nlm.nih.gov/24313385/" rel="noopener nofollow" target="_blank">Castanedo-Cázares 2014</a>), the relapse trial (<a href="https://pubmed.ncbi.nlm.nih.gov/25443629/" rel="noopener nofollow" target="_blank">Boukari 2015</a>) and the summer trial in which only the tinted arm reduced the colour difference between melasma and normal skin (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12475913/" rel="noopener nofollow" target="_blank">Polena 2025</a>) are in the <a href="#use-pigment">pigment row</a>. The market gap: darker-skinned patients "find it challenging to use sunscreens on the market that leave an obvious residue on their skin", and the products marketed to them are dearer and lower in SPF (<a href="https://pubmed.ncbi.nlm.nih.gov/33937484/" rel="noopener nofollow" target="_blank">Song 2021</a>) — a tinted mineral or hybrid in the right shade solves both the cast and the visible light.</p>
      <p>Strong for the pigment indications, as the <a href="/dark-spots">dark spots guide</a> grades it. Read the label for the CI numbers rather than the word "tinted": a beige tint from titanium dioxide alone does not carry the visible-light data, and a shade range wide enough to match skin of type V and VI is the sign of a brand that read the same trials.</p>
    `,
  },
  {
    id: 'prod-high-spf',
    category: 'product',
    title: 'SPF 50+ and SPF 100: the margin for the amount you actually apply',
    tldr: 'At the 0.5–1 mg/cm² people really use, labelled SPF 30 and 50 deliver single figures and SPF 70 and 100 deliver 19 and 27; in 199 skiers wearing both for a day, 55% burned more on the SPF 50+ side and 5% on the SPF 100+ side; an earlier split-face comparison found SPF 85 more protective than SPF 50; and in the Norwegian cohort SPF 15+ users had a third less melanoma than users of weaker products. Moderate: consistent, manufacturer-funded, one-day sunburn trials — the argument for 50+ every day and, on the beach and the mountain, the "50+" that tests at 100.',
    evidence: 'moderate',
    focus: 'topical',
    note: 'Top pick: the highest SPF you will wear generously — 50+ daily, and a very-high one in two coats for the beach and the ski slope',
    sessions: 'Daily; two coats before intense exposure',
    downtime: 'None',
    cost: '€8–20 / 50 ml',
    bodyHtml: `
      <p>The dose arithmetic (<a href="https://pubmed.ncbi.nlm.nih.gov/17493070/" rel="noopener nofollow" target="_blank">Faurschou 2007</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/22463921/" rel="noopener nofollow" target="_blank">Ou-Yang 2012</a>) is the case; the trials test it in the sun. In Vail, "following an average 6.1 ± 1.3 hours of sun exposure, investigator-blinded evaluation identified 55.3% of the participants (110 of 199) as more sunburned on the SPF 50+ protected side and 5% (10 of 199) on the SPF 100+ protected side", with the stated limitation that "single-day exposure may not extrapolate to benefits of longer-term protection" (<a href="https://pubmed.ncbi.nlm.nih.gov/29291958/" rel="noopener nofollow" target="_blank">Williams 2018</a>); the same group\'s earlier split-face study on the same mountain found SPF 85 significantly more protective than SPF 50 (<a href="https://pubmed.ncbi.nlm.nih.gov/20115958/" rel="noopener nofollow" target="_blank">Russak 2010</a>). In 143,844 women, SPF ≥ 15 against SPF &lt; 15 carried a melanoma hazard ratio of 0.67 (<a href="https://pubmed.ncbi.nlm.nih.gov/27621396/" rel="noopener nofollow" target="_blank">Ghiasvand 2016</a>). The counterweight is behaviour: the higher-SPF group in the French–Swiss holiday trial stayed in the sun 25% longer (<a href="https://pubmed.ncbi.nlm.nih.gov/10433619/" rel="noopener nofollow" target="_blank">Autier 1999</a>). In Europe everything measured at 60 or above is labelled "50+" (<a href="https://eur-lex.europa.eu/eli/reco/2006/647/oj/eng" rel="noopener nofollow" target="_blank">Recommendation 2006/647/EC</a>), so the brands that test at 100 say so only in their literature.</p>
      <p>Moderate rather than strong because the sunburn trials are one-day, sponsor-funded and measure erythema, not aging or cancer; the aging and cancer evidence belongs to daily use of any broad-spectrum product at a proper dose. The higher number is a margin for under-application, not a licence for longer exposure.</p>
    `,
  },
  {
    id: 'prod-mineral',
    category: 'product',
    title: 'Mineral sunscreens (zinc oxide, titanium dioxide): for the reactive face, with trade-offs',
    tldr: 'Zinc oxide absorbs across UVA and UVB and titanium dioxide mostly UVB; the nanoparticles that stop the white cast "did not enter or cause cellular toxicity in the viable epidermis" after five days of application, and about a thousandth of applied zinc reached the blood in an outdoor trial. The trade-offs: a whiter cast, weaker UVA protection in titanium-heavy products, no visible-light protection unless pigmented, and no outcome trials of their own. Moderate: the same physics without the trials, and the right choice for a face that stings, a pregnancy, a baby and the reef.',
    evidence: 'moderate',
    focus: 'sensitive',
    note: 'Top pick: a zinc-oxide-led SPF 50 with the UVA circle, tinted if the cast bothers you, in a silicone base for rosacea',
    sessions: 'Every morning',
    downtime: 'None; a white cast on darker skin unless tinted',
    cost: '€10–25 / 50 ml',
    bodyHtml: `
      <p>The filters: "ZnO has a broad UVA-UVB absorption curve, while TiO2 provides better UVB protection. Overall, the human health risks with inorganic filters are extremely low given a lack of percutaneous absorption; however, there is potential risk when exposed via inhalation, prompting recommendations against spray sunscreen products with nanoparticles" (<a href="https://pubmed.ncbi.nlm.nih.gov/30444533/" rel="noopener nofollow" target="_blank">Schneider &amp; Lim 2019</a>). The penetration studies: zinc oxide nanoparticles "accumulated on the skin surface and within the skin furrows but did not enter or cause cellular toxicity in the viable epidermis" of volunteers after repeated application (<a href="https://pubmed.ncbi.nlm.nih.gov/30448212/" rel="noopener nofollow" target="_blank">Mohammed 2019</a>); with isotope-labelled zinc oxide worn outdoors for five days, "the overwhelming majority of applied (68)Zn was not absorbed", the tracer in blood reaching "∼1/1000 th that of total Zn in the blood compartment" (<a href="https://pubmed.ncbi.nlm.nih.gov/20705894/" rel="noopener nofollow" target="_blank">Gulson 2010</a>). The limits: the nano forms that avoid the white cast "do not protect against visible light" (<a href="https://pubmed.ncbi.nlm.nih.gov/32335182/" rel="noopener nofollow" target="_blank">Lyons 2021</a>); the vehicle, not the filter, decides the sting in rosacea (<a href="https://pubmed.ncbi.nlm.nih.gov/9640556/" rel="noopener nofollow" target="_blank">Nichols 1998</a>); and in pregnancy the general rule is that topical products "act locally and therefore produce minimal systemic levels", with hydroquinone the exception (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3114665/" rel="noopener nofollow" target="_blank">Bozzo 2011</a>) — the mineral preference in pregnancy is precaution, not evidence of harm from the organic filters.</p>
      <p>Moderate rather than strong because the outcome trials used organic filters and a mineral product\'s protection is inferred from its SPF and UVA-PF rather than measured in a cohort; the inference is sound, and the tier is the honest label for it. Check the UVA circle — a titanium-dioxide-only "mineral" fluid can carry a high SPF and a poor UVA-PF — and prefer zinc-led formulas, tinted, for melasma-prone and darker skin.</p>
    `,
  },
  {
    id: 'prod-antioxidant-under',
    category: 'product',
    title: 'Antioxidant serums under the sunscreen: vitamin C, E and ferulic acid',
    tldr: 'A 15% L-ascorbic acid, 1% vitamin E, 0.5% ferulic acid solution doubled photoprotection from 4-fold to 8-fold in the laboratory and protected human skin against erythema, sunburn cells and thymine dimers in a vehicle-controlled study; in a randomised trial on forearms with keratoses, night-time antioxidants under daytime sunscreen cut keratosis counts 22% against placebo and doubled partial clearance; and antioxidants are the only demonstrated protection against infrared-A\'s collagenase induction. Moderate, as the serums guide grades it — a supplement to sunscreen, never a replacement.',
    evidence: 'moderate',
    focus: 'topical',
    note: 'Top pick: 10–15% L-ascorbic acid with vitamin E and ferulic acid every morning, sunscreen over it',
    sessions: 'Every morning under the sunscreen',
    downtime: 'Stinging at low pH',
    cost: '€15–60 / month (value brands); €120–250 (prestige)',
    bodyHtml: `
      <p>The laboratory: ferulic acid "improved chemical stability of the vitamins (C+E) and doubled photoprotection to solar-simulated irradiation of skin from 4-fold to approximately 8-fold as measured by both erythema and sunburn cell formation" (<a href="https://pubmed.ncbi.nlm.nih.gov/16185284/" rel="noopener nofollow" target="_blank">Lin 2005</a>). The human skin: the same solution "provided significant and meaningful photoprotection for skin by all methods of evaluation", "particularly effective for reducing thymine dimer mutations known to be associated with skin cancer", and "its mechanism of action is different from sunscreens and would be expected to supplement the sun protection provided by sunscreens" (<a href="https://pubmed.ncbi.nlm.nih.gov/18603326/" rel="noopener nofollow" target="_blank">Murray 2008</a>). The randomised trial: 40 people with keratoses on both forearms, daytime sunscreen with or without photolyase and night-time antioxidants or placebo; "AOx led to a significant reduction in AK count (22%; p &lt; 0.05). Partial clearance was obtained in 18 (47.4%) forearms treated with AOx and in 9 (23.7%) treated with placebo" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9073224/" rel="noopener nofollow" target="_blank">Alvares 2022</a>). The infrared argument: "topical application of appropriate antioxidants represents an effective photoprotective strategy" against infrared-A\'s induction of MMP-1 (<a href="https://pubmed.ncbi.nlm.nih.gov/18449210/" rel="noopener nofollow" target="_blank">Schroeder 2008</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/24433486/" rel="noopener nofollow" target="_blank">Grether-Beck 2014</a>). The photoaging trial for the vitamin on its own — six months, double-blind, deep furrows reduced on replicas — is in the <a href="/serums">serums guide</a> (<a href="https://pubmed.ncbi.nlm.nih.gov/12823436/" rel="noopener nofollow" target="_blank">Humbert 2003</a>).</p>
      <p>Moderate, as the <a href="/serums">serums</a> and <a href="/sun-damage">sun damage</a> guides grade it, and strong in the <a href="/collagen">collagen guide</a> as the collagen cofactor. The serum goes on first, in the morning, in a dark airless bottle; the sunscreen is the outer film.</p>
    `,
  },
  {
    id: 'prod-oral-nicotinamide',
    category: 'product',
    title: 'Oral nicotinamide, 500 mg twice daily, for people who have had skin cancer',
    tldr: 'In the ONTRAC phase 3 trial, 386 people with two or more previous keratinocyte cancers took nicotinamide or placebo for a year: 23% fewer new cancers, 30% fewer squamous cell carcinomas, 11–20% fewer keratoses, no side effects, and no benefit once stopped; a meta-analysis of five trials halved skin cancers (rate ratio 0.50); but the transplant-recipient trial found nothing (207 against 210 cancers), and in healthy skin it raised neither the burn threshold nor DNA repair. Moderate, for the high-risk field; nothing for the healthy face.',
    evidence: 'moderate',
    focus: 'oral',
    note: 'Top pick: nicotinamide (not niacin, which flushes) 500 mg twice daily, on a dermatologist\'s advice after a keratinocyte cancer — never instead of the cream',
    sessions: '500 mg twice daily, ongoing',
    downtime: 'None',
    cost: '€5–10 / month',
    bodyHtml: `
      <p>The trial: "At 12 months, the rate of new nonmelanoma skin cancers was lower by 23% (95% confidence interval [CI], 4 to 38) in the nicotinamide group than in the placebo group (P=0.02)", squamous cell carcinomas 30% lower, keratoses 11–20% lower, "no noteworthy between-group differences … with respect to the number or types of adverse events", and "no evidence of benefit after nicotinamide was discontinued" (<a href="https://pubmed.ncbi.nlm.nih.gov/26488693/" rel="noopener nofollow" target="_blank">Chen 2015</a>). The meta-analysis: 29 trials, five with cancer outcomes, "nicotinamide was associated with a significant reduction in skin cancers compared to control (rate ratio 0.50 (95% CI, 0.29-0.85)" with more digestive side effects (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9125143/" rel="noopener nofollow" target="_blank">Mainville 2022</a>). The negative trial: in 158 transplant recipients, "207 new keratinocyte cancers in the nicotinamide group and 210 in the placebo group (rate ratio, 1.0)" (<a href="https://pubmed.ncbi.nlm.nih.gov/36856616/" rel="noopener nofollow" target="_blank">Allen 2023</a>). The healthy-skin study: 2,000 mg daily for 30 days "did not affect MED" and "neither treatment significantly affected TT-dimer levels" (<a href="https://pubmed.ncbi.nlm.nih.gov/41182568/" rel="noopener nofollow" target="_blank">Faisal 2025</a>).</p>
      <p>Moderate, as the <a href="/sun-damage">sun damage guide</a> grades it: one positive phase 3 trial, one negative one in a different population, and a benefit that stops with the tablet. It is a chemoprevention for people with a cancer history, not a sunscreen substitute and not an anti-aging supplement — the <a href="/supplements">supplements guide</a> has the rest of that shelf.</p>
    `,
  },
  {
    id: 'prod-clothing-hats-shade',
    category: 'product',
    title: 'Clothing, hats, sunglasses and shade: the half of photoprotection with no reapplication problem',
    tldr: 'A hat needs a brim over 7.5 cm to give the nose and cheeks a protection factor above 3, and a baseball cap protects the nose and little else; of 236 summer fabrics tested, a third had a UPF under 15 and only half reached the European standard\'s 30, with polyester, wool and dark dense weaves doing best and cotton, linen and viscose worst; a beach umbrella alone left 78% of people sunburned in three and a half hours against 25% with SPF 100; large sunglasses cut the periorbital dose to near zero and medium ones did the least. Moderate: dosimetry rather than trials, as the sun damage guide grades it.',
    evidence: 'moderate',
    focus: 'physical',
    note: 'Top pick: a 7.5 cm brim, UPF 50 sleeves for the beach and the bike, large UV400 sunglasses, shade between eleven and three — and the cream underneath',
    sessions: 'Whenever outdoors',
    downtime: 'None',
    cost: '€20–80 a hat; €20–60 a garment',
    bodyHtml: `
      <p>Hats: measured on model heads with ultraviolet film badges, "hats with a wide (greater than 7.5 cm) brim are necessary in order to provide reasonable protection factors (greater than 3) around the nose and cheeks", while "peaked baseball-style caps offer good protection to the nose but are relatively ineffective at other sites on the face" (<a href="https://pubmed.ncbi.nlm.nih.gov/1637687/" rel="noopener nofollow" target="_blank">Diffey 1992</a>). Fabric: of 236 spring–summer garments, "seventy-eight (33%) fabrics had UPF &lt; 15 … and 113 (48%) had UPF ≥ 30", with "more than 70% of the wool, polyester, and fabric blends, and only less than 30% of the cotton, linen, and viscose fabrics" reaching 30+ (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC59842/" rel="noopener nofollow" target="_blank">Gambichler 2001</a>). Shade: "a beach umbrella alone may not provide sufficient protection for extended UV exposure" — 142 sunburn incidences under the umbrella against 17 on the sunscreen (<a href="https://pubmed.ncbi.nlm.nih.gov/28114650/" rel="noopener nofollow" target="_blank">Ou-Yang 2017</a>). Eyes: goggles near 100%, large sunglasses highly effective, medium ones least, and no pair total (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6803516/" rel="noopener nofollow" target="_blank">Backes 2019</a>). Glass: "a wraparound style or side shields offer the best protection" and window films raise a car\'s side glass to windscreen standard (<a href="https://pubmed.ncbi.nlm.nih.gov/23458389/" rel="noopener nofollow" target="_blank">Almutawa 2013</a>). The reviewers\' summary of the whole field: "the public should be counseled to seek shade, use photoprotective clothing including hats and glasses in addition to sunscreens on sun-exposed skin" (<a href="https://pubmed.ncbi.nlm.nih.gov/30444533/" rel="noopener nofollow" target="_blank">Schneider &amp; Lim 2019</a>).</p>
      <p>Moderate, as the <a href="/sun-damage">sun damage guide</a> grades it, because it is physics rather than randomised outcomes; in practice a UPF 50 sleeve is the only SPF 50 that is still there at four in the afternoon. The Nambour participants wore hats and sought shade as well as applying the cream, which is one more reason the bottle should not be asked to do the whole job.</p>
    `,
  },
  {
    id: 'prod-long-uva-filters',
    category: 'product',
    title: 'Long-UVA and "full-spectrum" filters (MCE / Mexoryl 400, the "ultra" formulas)',
    tldr: 'UVA1 (340–400 nm) is the band that drives pigmentation, photoaging and DNA damage and that older filters barely absorbed above 370 nm; the new filter MCE peaks at 385 nm, and in a double-blind randomised comparison in 19 volunteers, adding it to a reference formula reduced UVA1-induced pigmentation, with dermal and epidermal protection shown in a skin model. Emerging: pigmentation endpoints in a manufacturer\'s trial and no outcome data — a reasonable upgrade for melasma-prone and darker skin, not a new category.',
    evidence: 'emerging',
    focus: 'topical',
    note: 'Top pick: worth choosing when the price is the same, for melasma and darker skin; not worth a premium over a tinted SPF 50+ with the circle',
    sessions: 'Every morning',
    downtime: 'None',
    cost: '€12–25 / 50 ml',
    bodyHtml: `
      <p>The gap and the filter: "Current sunscreen formulas lack sufficient absorption in the 370-400 nm wavelengths range. Recently, a new UVA1 filter, Methoxypropylamino Cyclohexenylidene Ethoxyethylcyanoacetate (MCE) exhibiting a peak of absorption at 385 nm, was approved by the Scientific Committee on Consumer Safety"; in the trial, "MCE addition in reference formulas enlarged the profile of absorption up to 400 nm; reduced UVA1-induced dermal and epidermal alterations at cellular, biochemical, and molecular levels; and decreased UVA1-induced pigmentation" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8762479/" rel="noopener nofollow" target="_blank">Marionnet 2022</a>). Why it matters: "long-wave UVA1 plays a critical role in pigmentation, photoaging, skin cancer, DNA damage and photodermatoses" (<a href="https://pubmed.ncbi.nlm.nih.gov/33764577/" rel="noopener nofollow" target="_blank">Passeron 2021</a>) and long-wave UVA pigments darker skin (<a href="https://pubmed.ncbi.nlm.nih.gov/20410914/" rel="noopener nofollow" target="_blank">Mahmoud 2010</a>). The older European filters — bemotrizinol, bisoctrizole, drometrizole trisiloxane, diethylamino hydroxybenzoyl hexyl benzoate — already reach further into UVA than the American set and are more photostable (<a href="https://pubmed.ncbi.nlm.nih.gov/40451593/" rel="noopener nofollow" target="_blank">Safian 2025</a>), which is why a European "50+ with the circle" is the baseline and MCE the refinement.</p>
      <p>Emerging: the trial is the manufacturer\'s, the endpoint is pigmentation after artificial UVA1 in 19 people, and no product with the filter has aging or cancer data. For the melasma-prone face it is a sensible choice at the same price; iron oxides remain the answer to visible light, which no organic filter touches.</p>
    `,
  },
  {
    id: 'prod-oral-photoprotectants',
    category: 'product',
    title: '"Sunscreen pills": Polypodium leucotomos, carotenoids and antioxidant blends',
    tldr: 'Polypodium leucotomos extract at 480 mg a day raised the dose needed to burn by 29% in 47 volunteers over 30 days without reducing DNA damage in skin or urine; an earlier nine-person study found fewer sunburn cells and pyrimidine dimers on biopsy; a five-day gummy course raised the burn threshold measurably in 44%; and an antioxidant blend raised it no more than the control product. A 29% higher burn threshold is an SPF of about 1.3. Emerging, as the sun damage and dark spots guides grade it — an adjunct for the person who will be in the sun regardless, never a substitute.',
    evidence: 'emerging',
    focus: 'oral',
    note: 'Top pick: 240 mg Polypodium leucotomos twice daily through a beach holiday or a melasma summer, with — never instead of — the cream',
    sessions: 'Daily through the sunny months',
    downtime: 'None',
    cost: '€20–40 / month',
    bodyHtml: `
      <p>The trials: "PL treatment increased MED by 29% (p = 0.00018), while NAM did not affect MED … Neither treatment significantly affected TT-dimer levels measured in skin biopsies or urine" (<a href="https://pubmed.ncbi.nlm.nih.gov/41182568/" rel="noopener nofollow" target="_blank">Faisal 2025</a>); in nine volunteers given 7.5 mg/kg before irradiation, "a significant decrease in erythema was found in PL-treated skin" with "less sunburn cells (P &lt; .05), cyclobutane pyrimidine dimers (P &lt; .001)" on biopsy (<a href="https://pubmed.ncbi.nlm.nih.gov/15583582/" rel="noopener nofollow" target="_blank">Middelkamp-Hup 2004</a>); after five days of gummies "44% of participants showed a quantifiable rise in MED", from 223 to 234 J/cm² on average (<a href="https://pubmed.ncbi.nlm.nih.gov/40095119/" rel="noopener nofollow" target="_blank">Hussain 2025</a>); and in a double-blind randomised trial of an antioxidant combination, the burn threshold rose from baseline on both the product and the control, and "the comparisons between the two groups were not statistically significant" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3366441/" rel="noopener nofollow" target="_blank">Lima 2012</a>). The reviewers list Polypodium, afamelanotide and nicotinamide as the oral agents with "photoprotective and antiphotocarcinogenic properties" that "could potentially provide addition modalities" (<a href="https://pubmed.ncbi.nlm.nih.gov/28038886/" rel="noopener nofollow" target="_blank">Lim 2017</a>).</p>
      <p>Emerging, as the <a href="/sun-damage">sun damage</a>, <a href="/dark-spots">dark spots</a> and <a href="/supplements">supplements</a> guides grade the same molecules. The arithmetic is the argument: a 29% higher burn threshold is what a fifth of a proper coat of SPF 50 delivers, and "drinkable sunscreen" is a phrase, not a product.</p>
    `,
  },
  {
    id: 'prod-dna-repair',
    category: 'product',
    title: 'DNA-repair enzymes in sunscreen (photolyase, T4 endonuclease V)',
    tldr: 'In xeroderma pigmentosum, a T4 endonuclease liposome lotion cut new actinic keratoses from 25.9 to 8.2 a year and basal cell carcinomas from 5.4 to 3.8 in a randomised trial of 30 patients; photolyase added to an SPF 50 reduced UV-induced DNA lesions and apoptosis on biopsy in ten volunteers; but in a randomised trial of 40 people with keratoses, the photolyase sunscreen did no better than the plain one over eight weeks, and the manufacturer\'s randomised field-cancerisation studies are small. Emerging: mechanism proven, clinical benefit in normal skin not shown.',
    evidence: 'emerging',
    focus: 'topical',
    note: 'Top pick: only if it costs the same as the SPF 50+ you would otherwise buy — the sunscreen in it is what works',
    sessions: 'Every morning, as a sunscreen',
    downtime: 'None',
    cost: '€25–40 / 50 ml',
    bodyHtml: `
      <p>The genetic-disease trial: 30 patients with xeroderma pigmentosum, a year of T4N5 liposome lotion or placebo; "the annualised rate of new actinic keratoses was 8.2 among the patients assigned T4N5 liposome lotion and 25.9 among those assigned placebo", basal cell carcinomas 3.8 against 5.4 (<a href="https://pubmed.ncbi.nlm.nih.gov/11289350/" rel="noopener nofollow" target="_blank">Yarosh 2001</a>). The biopsy study: in ten volunteers irradiated at three times the burning dose for four days, "photolyase plus SS was superior to SS alone in reducing both the formation of CPDs and apoptotic cell death (both P&lt;0.001)" (<a href="https://pubmed.ncbi.nlm.nih.gov/22086236/" rel="noopener nofollow" target="_blank">Berardesca 2012</a>). The clinical trial in ordinary sun-damaged skin: "there is no difference in the treatment of advanced photodamage skin when comparing the use of sunscreen with photolyase and regular sunscreen" over eight weeks in 40 people, while the night-time antioxidants in the same trial did reduce keratoses (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9073224/" rel="noopener nofollow" target="_blank">Alvares 2022</a>). The manufacturer\'s randomised studies — 30 patients after photodynamic therapy compared with an SPF 50+ over nine months (<a href="https://pubmed.ncbi.nlm.nih.gov/27167413/" rel="noopener nofollow" target="_blank">Eibenschutz 2016</a>) and a double-blind pilot in field cancerisation (<a href="https://pubmed.ncbi.nlm.nih.gov/28294419/" rel="noopener nofollow" target="_blank">Moscarella 2017</a>) — are small and product-specific.</p>
      <p>Emerging: the enzyme does what it says on a biopsy, and whether that translates into fewer keratoses in people with normal DNA repair has one negative randomised comparison and two small sponsor trials. The keratosis patient\'s evidence-based additions remain daily sunscreen, nicotinamide and the field treatments in the <a href="/sun-damage">sun damage guide</a>.</p>
    `,
  },
  {
    id: 'prod-spf-makeup-formats',
    category: 'product',
    title: 'SPF in moisturisers and foundation, powders, sprays and sticks: the formats that under-dose',
    tldr: 'An SPF moisturiser left 16.6% of the face and 20.9% of the eyelids uncovered against 11.1% and 14.0% for a sunscreen, and users had no idea; foundation goes on at a fraction of 2 mg/cm² and the SPF falls exponentially with the dose; a powder cannot be applied at the tested weight at all; sprays deliver the filters to the blood as well as a lotion does and the nanoparticle ones should not be breathed. Limited as the only protection; fine as a top-up over a proper morning dose.',
    evidence: 'limited',
    focus: 'marketing',
    note: 'Top pick: none — a real sunscreen first, then the makeup; a powder or stick for the midday top-up over it',
    sessions: 'As a top-up only',
    downtime: 'None',
    cost: '€10–60',
    bodyHtml: `
      <p>The coverage photographs (<a href="https://pubmed.ncbi.nlm.nih.gov/30943192/" rel="noopener nofollow" target="_blank">Lourenço 2019</a>) and the dose arithmetic — half the amount, the square root of the SPF (<a href="https://pubmed.ncbi.nlm.nih.gov/17493070/" rel="noopener nofollow" target="_blank">Faurschou 2007</a>), SPF 30 delivering single figures at consumer amounts (<a href="https://pubmed.ncbi.nlm.nih.gov/22463921/" rel="noopener nofollow" target="_blank">Ou-Yang 2012</a>) — are the whole argument: a foundation is applied thinly by design, a powder thinner still, and the SPF printed on either was measured at a weight nobody wears on the face. Sprays: in the FDA\'s trial the aerosol, non-aerosol and pump sprays put avobenzone, oxybenzone, octocrylene, homosalate, octisalate and octinoxate into the blood above the threshold after a single application, much as the lotion did (<a href="https://pubmed.ncbi.nlm.nih.gov/31961417/" rel="noopener nofollow" target="_blank">Matta 2020</a>), and the inorganic-filter reviewers recommend "against spray sunscreen products with nanoparticles" because of inhalation (<a href="https://pubmed.ncbi.nlm.nih.gov/30444533/" rel="noopener nofollow" target="_blank">Schneider &amp; Lim 2019</a>); a spray that is not rubbed in after spraying leaves the missed areas that even a rubbed-in lotion leaves at 20% after one coat (<a href="https://pubmed.ncbi.nlm.nih.gov/29590142/" rel="noopener nofollow" target="_blank">Heerfordt 2018</a>). The European labelling rules forbid "all day" claims for a reason (<a href="https://eur-lex.europa.eu/eli/reco/2006/647/oj/eng" rel="noopener nofollow" target="_blank">Recommendation 2006/647/EC</a>).</p>
      <p>Limited, as the sole protection; the formats are not fraudulent, they are under-dosed by the way they are used. The order that works is a two-finger coat of a real SPF 50+ first, makeup over it, and a stick or a powder for the top-up over makeup at midday — the one job those formats do well.</p>
    `,
  },
  {
    id: 'prod-beyond-uv-claims',
    category: 'product',
    title: '"Blue-light", "anti-infrared", "anti-pollution" and after-sun "repair" claims',
    tldr: 'Visible light from the sun matters for pigment, and only pigments block it (the tinted row); the blue light of screens did not worsen melasma in a controlled study; infrared-A does induce collagenase in the dermis, but the only protection shown is an antioxidant, there is no standard to measure an "IR-protection" claim, and no product carries an outcome trial; "anti-pollution" and after-sun "DNA repair" creams have mechanism and marketing. Limited — the claims cost money and the ingredients that matter are already in the rows above.',
    evidence: 'limited',
    focus: 'marketing',
    note: 'Top pick: none — buy the SPF, the UVA circle and the tint, and ignore the rest of the front label',
    sessions: '—',
    downtime: 'None',
    cost: '€20–80 for the claim',
    bodyHtml: `
      <p>Blue light: the controlled study of melasma patients found that short-term exposure to the blue light emitted by electronic devices did not worsen the condition (<a href="https://pubmed.ncbi.nlm.nih.gov/31887321/" rel="noopener nofollow" target="_blank">Duteil 2020</a>), while the solar visible light that does pigment skin is blocked only by what is "visible on the skin" (<a href="https://pubmed.ncbi.nlm.nih.gov/32335182/" rel="noopener nofollow" target="_blank">Lyons 2021</a>) — so a transparent "blue-light" sunscreen is a contradiction and a tinted one is already in the strong row. Infrared: the damage is real (<a href="https://pubmed.ncbi.nlm.nih.gov/18449210/" rel="noopener nofollow" target="_blank">Schroeder 2008</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/20090404/" rel="noopener nofollow" target="_blank">Schroeder 2010</a>), the demonstrated countermeasure is a topical antioxidant, and the reviewers who make the case for "photoprotection beyond ultraviolet radiation" concede "the challenges that result from the task of showing their efficacy" (<a href="https://pubmed.ncbi.nlm.nih.gov/24433486/" rel="noopener nofollow" target="_blank">Grether-Beck 2014</a>). The panel review lists visible light and infrared as future targets for "topical antioxidants and oral and subcutaneous agents" rather than for any filter now on sale (<a href="https://pubmed.ncbi.nlm.nih.gov/28038886/" rel="noopener nofollow" target="_blank">Lim 2017</a>). After-sun "repair" creams borrow the photolyase data from the <a href="#prod-dna-repair">DNA-repair row</a> without its trials; "anti-pollution" has no outcome measure at all.</p>
      <p>Limited, and inexpensive to act on: the antioxidant that addresses infrared is the vitamin C–E–ferulic serum already graded moderate, the pigment that addresses visible light is the iron oxide already graded strong, and the rest of the front label is copy.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-absorption-hormones',
    category: 'safety',
    title: 'Absorbed into the blood: what the FDA trials found, and what they did not',
    tldr: 'Under maximal use — 2 mg/cm² on 75% of the body, four times a day — every organic filter tested (avobenzone, oxybenzone, octocrylene, ecamsule, homosalate, octisalate, octinoxate) exceeded the FDA\'s 0.5 ng/mL threshold in plasma, oxybenzone at 170–260 ng/mL, and in the second trial all six crossed it after a single application. The threshold is the point at which toxicology data are required, not evidence of harm; no human harm has been shown, the trial authors and the FDA said to keep using sunscreen, and Europe\'s response was to cap benzophenone-3 and octocrylene in 2022. Pregnancy: a mineral sunscreen by precaution; hydroquinone, not sunscreen, is the pregnancy exception among topicals.',
    bodyHtml: `
      <p>The trials: "Systemic concentrations greater than 0.5 ng/mL were reached for all 4 products after 4 applications on day 1", with oxybenzone at 169–210 ng/mL and the study\'s conclusion that the results "do not indicate that individuals should refrain from the use of sunscreen" — the abstract\'s words are that the findings exceed "the threshold established by the FDA for potentially waiving some nonclinical toxicology studies" (<a href="https://pubmed.ncbi.nlm.nih.gov/31058986/" rel="noopener nofollow" target="_blank">Matta 2019</a>); in 48 people, "geometric mean maximum plasma concentrations of all 6 active ingredients were greater than 0.5 ng/mL, and this threshold was surpassed on day 1 after a single application", oxybenzone at 180–258 ng/mL and homosalate at 14–23 (<a href="https://pubmed.ncbi.nlm.nih.gov/31961417/" rel="noopener nofollow" target="_blank">Matta 2020</a>). The critical appraisal notes the design was maximal use, far beyond a daily face application (<a href="https://pubmed.ncbi.nlm.nih.gov/31834937/" rel="noopener nofollow" target="_blank">Charalambides 2020</a>). The European response: benzophenone-3 limited to 6% in face products and 2.2% in body products, octocrylene to 10% (<a href="https://eur-lex.europa.eu/eli/reg/2022/1176/oj/eng" rel="noopener nofollow" target="_blank">Regulation (EU) 2022/1176</a>), after the finding that octocrylene degrades to benzophenone in the bottle (<a href="https://pubmed.ncbi.nlm.nih.gov/33682414/" rel="noopener nofollow" target="_blank">Downs 2021</a>). The endocrine question: oxybenzone\'s "reported endocrinologic effects … in animal studies" are the reason its use "has been minimized in many countries" (<a href="https://pubmed.ncbi.nlm.nih.gov/28038886/" rel="noopener nofollow" target="_blank">Lim 2017</a>); no human outcome has been tied to it. Pregnancy: the general rule for topicals is minimal systemic levels, "with the exception of hydroquinone, which has a relatively high systemic absorption rate, and tretinoin" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3114665/" rel="noopener nofollow" target="_blank">Bozzo 2011</a>) — the mineral preference in pregnancy is caution, and the melasma-prevention trial in pregnancy used an organic SPF 50+ with "excellent" tolerance (<a href="https://pubmed.ncbi.nlm.nih.gov/17567299/" rel="noopener nofollow" target="_blank">Lakhdar 2007</a>).</p>
      <p>Practically, in Europe: the filters in a pharmacy SPF 50+ are the photostable Annex VI molecules, oxybenzone is rare in face products and now capped, a zinc-oxide sunscreen answers the absorption question entirely for anyone who wants it answered, and the measured harm of not wearing sunscreen — the squamous cell carcinomas and melanomas of the trials — is the number the absorption data have to be weighed against.</p>
    `,
  },
  {
    id: 'safety-allergy-irritation-acne',
    category: 'safety',
    title: 'Allergy, photoallergy, stinging eyes and acne',
    tldr: 'Sunscreens and topical anti-inflammatories are "the most common photosensitizers" in photopatch testing, with the benzophenones and octocrylene the usual culprits; true allergy is uncommon, irritation is common and mostly the vehicle\'s fault — fragrance, alcohol and low-pH actives underneath — and silicones in the base prevented irritation in rosacea; the eyes sting from migration, which a stick solves; acne is not worsened by a non-comedogenic fluid, and a sunscreen added to adapalene improved tolerance and post-acne marks in a randomised comparison.',
    bodyHtml: `
      <p>Photoallergy: "currently the most common photosensitizers are sunscreens and topical non-steroidal anti-inflammatory drugs", investigated by photopatch testing under a European consensus method (<a href="https://pubmed.ncbi.nlm.nih.gov/20415735/" rel="noopener nofollow" target="_blank">Kerr &amp; Ferguson 2010</a>); oxybenzone\'s "photocontact allergy potential" is one of the three reasons for its retreat (<a href="https://pubmed.ncbi.nlm.nih.gov/28038886/" rel="noopener nofollow" target="_blank">Lim 2017</a>). Irritation: rosacea patients "are particularly susceptible to the irritation caused by sunscreen ingredients", and the vehicle decides it (<a href="https://pubmed.ncbi.nlm.nih.gov/9640556/" rel="noopener nofollow" target="_blank">Nichols 1998</a>). Acne and retinoids: in 51 patients on adapalene, adding a daily sunscreen was "associated with further improvement in acne severity, PAH and calorimetric parameters", with the licochalcone formula giving less scaling, dryness and stinging than the comparator sunscreen (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10752021/" rel="noopener nofollow" target="_blank">How 2023</a>). The panel review recommends adapting the formulation to the dermatosis — gels and fluids for oily and acne-prone skin, mineral or silicone bases for the reactive face (<a href="https://pubmed.ncbi.nlm.nih.gov/33764577/" rel="noopener nofollow" target="_blank">Passeron 2021</a>).</p>
      <p>Rules: fragrance-free, patch-tested behind the ear for three days; a mineral stick for the lids and the eye sting; a fluid or gel labelled non-comedogenic for acne, applied over a dry face and not over a fresh acid; and, for a rash in sun-exposed sites that appears with a new sunscreen, a dermatologist\'s photopatch test rather than a guess.</p>
    `,
  },
  {
    id: 'safety-nano-environment',
    category: 'safety',
    title: 'Nanoparticles, sprays, "reef-safe" and the environment',
    tldr: 'Zinc oxide nanoparticles stayed on the surface and in the furrows and "did not enter or cause cellular toxicity in the viable epidermis"; the risk is inhalation, which is why the reviewers recommend against nano sprays and the EU labels nano ingredients. Oxybenzone deformed and bleached coral larvae in the laboratory at concentrations found on some Hawaiian and Caribbean reefs, several jurisdictions banned it, and "reef-safe" on a bottle has no legal definition; the reviewers rate the environmental risk of mineral filters low on current evidence.',
    bodyHtml: `
      <p>Nano: "ZnO-NPs accumulated on the skin surface and within the skin furrows but did not enter or cause cellular toxicity in the viable epidermis" after five days of application (<a href="https://pubmed.ncbi.nlm.nih.gov/30448212/" rel="noopener nofollow" target="_blank">Mohammed 2019</a>); the isotope study found about a thousandth of blood zinc traceable to the sunscreen after five outdoor days, "not known whether (68)Zn has been absorbed as ZnO particles or soluble Zn or both" (<a href="https://pubmed.ncbi.nlm.nih.gov/20705894/" rel="noopener nofollow" target="_blank">Gulson 2010</a>); the health risk is "extremely low given a lack of percutaneous absorption; however, there is potential risk when exposed via inhalation, prompting recommendations against spray sunscreen products with nanoparticles" (<a href="https://pubmed.ncbi.nlm.nih.gov/30444533/" rel="noopener nofollow" target="_blank">Schneider &amp; Lim 2019</a>); European law requires the "nano" bracket in the ingredient list (<a href="https://eur-lex.europa.eu/eli/reg/2009/1223/oj/eng" rel="noopener nofollow" target="_blank">Regulation (EC) No 1223/2009</a>). Reefs: oxybenzone "transformed planulae from a motile state to a deformed, sessile condition", bleached them in a dose-dependent way and "poses a hazard to coral reef conservation", with reef contamination of 0.8–19.2 µg/L in Hawaii and up to 1.4 mg/L in the US Virgin Islands (<a href="https://pubmed.ncbi.nlm.nih.gov/26487337/" rel="noopener nofollow" target="_blank">Downs 2016</a>); "at this time, the known risk to the environment is low though the risk stratification may evolve" for the mineral filters, which the reviewers call "safe alternatives" (<a href="https://pubmed.ncbi.nlm.nih.gov/30444533/" rel="noopener nofollow" target="_blank">Schneider &amp; Lim 2019</a>). The other bottle chemistry: octocrylene\'s benzophenone, rising with the age of the product (<a href="https://pubmed.ncbi.nlm.nih.gov/33682414/" rel="noopener nofollow" target="_blank">Downs 2021</a>).</p>
      <p>Practically: a lotion or cream rather than an aerosol for children and for mineral formulas; a zinc-based product for the snorkelling holiday, which also removes the absorption question; and no weight on "reef-safe", which is a marketing term until a regulator defines it — the ingredient list, again, is the only regulated statement on the pack.</p>
    `,
  },
  {
    id: 'safety-vitamin-d',
    category: 'safety',
    title: 'Vitamin D: the small, real effect, and the supplement that settles it',
    tldr: 'The systematic review found "little evidence that sunscreen decreases 25(OH)D concentration when used in real-life settings" but no trials of high-SPF products; the trial that filled the gap randomised 628 Australians to daily SPF 50+ on days the UV index reached 3 and found vitamin D rising 1.6 nmol/L against 6.8 in controls over a year — a 5.2 nmol/L difference — with 45.7% deficient against 36.9%. On a Tenerife holiday, correctly applied SPF 15 still allowed vitamin D to rise while preventing sunburn. The consensus: daily and recreational sunscreen does not compromise vitamin D in healthy people; the rigorously photoprotected should be screened and supplemented; a €3 tablet ends the argument.',
    bodyHtml: `
      <p>The review: experimental studies with artificial UV "considerably abrogated" vitamin D production, the two randomised field trials with SPF ~16 "found no effect of daily sunscreen application", and "there is little evidence that sunscreen decreases 25(OH)D concentration when used in real-life settings … However, there have been no trials of the high-SPF sunscreens that are now widely recommended" (<a href="https://pubmed.ncbi.nlm.nih.gov/30945275/" rel="noopener nofollow" target="_blank">Neale 2019</a>). The high-SPF trial: "adjusted mean differences from baseline were 1.6 nmol L-1 (intervention) and 6.8 nmol L-1 (control) [between-group treatment effect -5.2 nmol L-1]" and "vitamin D deficiency (final sample) was higher in the intervention (n = 139/304; 45.7%) than in the control group (n = 115/312; 36.9%)" (<a href="https://pubmed.ncbi.nlm.nih.gov/40927943/" rel="noopener nofollow" target="_blank">Tran 2025</a>). The holiday trial: with optimal application of SPF 15 in Tenerife, the sunscreen groups "equally inhibited sunburn, which was present in the discretionary use group", while vitamin D still rose by 13–19 nmol/L against 28 in the discretionary group, the high-UVA-PF formula allowing more (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6899952/" rel="noopener nofollow" target="_blank">Young 2019</a>). The consensus: "Sunscreen use for daily and recreational photoprotection does not compromise vitamin D synthesis, even when applied under optimal conditions", with screening and supplementation "for patients with photosensitivity disorders, who require rigorous photoprotection" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6899926/" rel="noopener nofollow" target="_blank">Passeron 2019</a>); the transplant sunscreen group also ran lower (53 against 60 ng/mL) (<a href="https://pubmed.ncbi.nlm.nih.gov/19775361/" rel="noopener nofollow" target="_blank">Ulrich 2009</a>).</p>
      <p>The <a href="/sun-damage">sun damage guide</a> grades "take vitamin D rather than sun" moderate on these trials, and the <a href="/supplements">supplements guide</a> covers dosing. The only medical argument for unprotected sun is answered by a daily 1,000–2,000 IU tablet that costs less than the sunscreen.</p>
    `,
  },
  {
    id: 'safety-who-needs-more',
    category: 'safety',
    title: 'Who needs more than a cream: transplant recipients, photosensitive patients, infants and the pregnant',
    tldr: 'Organ-transplant recipients get skin cancers at many times the general rate and are the group in which daily SPF 50+ produced zero invasive squamous cell carcinomas against eight, and in which nicotinamide did nothing; people with photosensitivity disorders or on photosensitising medicines need high-SPF, high-UVA products plus clothing and shade, and should have vitamin D checked; infants under six months get shade, a brim and fabric rather than cream, because the barrier is immature for two years; pregnancy is when melasma starts, and daily SPF 50+ cut new cases to 2.7%.',
    bodyHtml: `
      <p>Transplant recipients: skin cancers "outnumber every other form of cancer in organ transplant recipients", and two years of a free daily SPF 50+ meant "8 new invasive SCC (0 vs. 8; P&lt;0.01)" and keratoses falling below the baseline count (<a href="https://pubmed.ncbi.nlm.nih.gov/19775361/" rel="noopener nofollow" target="_blank">Ulrich 2009</a>), while oral nicotinamide "did not lead to lower numbers of keratinocyte cancers or actinic keratoses" in that population (<a href="https://pubmed.ncbi.nlm.nih.gov/36856616/" rel="noopener nofollow" target="_blank">Allen 2023</a>). Photosensitivity: "photoprotection strategies for patients with photosensitivity disorders that include high sun-protection factor sunscreens with high UVA protection, along with protective clothing and shade-seeking behaviour are likely to compromise vitamin D status. Screening for vitamin D status and supplementation are recommended" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6899926/" rel="noopener nofollow" target="_blank">Passeron 2019</a>); the panel review tailors the product to the photodermatosis (<a href="https://pubmed.ncbi.nlm.nih.gov/33764577/" rel="noopener nofollow" target="_blank">Passeron 2021</a>). Infants: "the skin\'s barrier protection remains immature throughout at least the first 2 years of life" and UV changes "may begin as early as the first summer of life" (<a href="https://pubmed.ncbi.nlm.nih.gov/21646256/" rel="noopener nofollow" target="_blank">Paller 2011</a>). Pregnancy: the 2.7% against 53% melasma figure (<a href="https://pubmed.ncbi.nlm.nih.gov/17567299/" rel="noopener nofollow" target="_blank">Lakhdar 2007</a>) and the mineral-by-precaution rule in the absorption drawer.</p>
      <p>The common thread is that the cream is necessary and not sufficient: the transplant patient wears it with a hat and a dermatologist\'s annual check, the photosensitive patient with clothing and a vitamin D level, the baby under a parasol, and the pregnant woman with the tint that stops the melasma the hormones are trying to start.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-spf-30-or-50',
    category: 'faq',
    title: 'SPF 30 or 50 — does the number matter?',
    tldr: 'Yes, because of the dose you apply rather than the label: at real-world amounts SPF 30 and 50 deliver single figures and SPF 70–100 deliver 19–27, and the SPF 100+ side of 199 faces burned in 5% against 55% on the SPF 50+ side. Buy 50+ with the UVA circle; the number is a margin for under-application, not a licence.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/22463921/" rel="noopener nofollow" target="_blank">Ou-Yang 2012</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/29291958/" rel="noopener nofollow" target="_blank">Williams 2018</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/17493070/" rel="noopener nofollow" target="_blank">Faurschou 2007</a>.) The <a href="#prod-high-spf">high-SPF row</a> has the caveats.</p>
    `,
  },
  {
    id: 'faq-how-much',
    category: 'faq',
    title: 'How much do I actually need?',
    tldr: 'Two finger-lengths (about a gram) for face, ears and neck; a teaspoon per limb, two per leg, one each for the front and back of the trunk — six teaspoons, 36 g, for the body. Two coats before a day outside, because one coat misses 20% of the skin and two miss 9%.',
    bodyHtml: `
      <p>(<a href="https://eur-lex.europa.eu/eli/reco/2006/647/oj/eng" rel="noopener nofollow" target="_blank">Recommendation 2006/647/EC</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/12056975/" rel="noopener nofollow" target="_blank">Schneider 2002</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/29590142/" rel="noopener nofollow" target="_blank">Heerfordt 2018</a>.) The <a href="#how-much-how-often">dose drawer</a> has the arithmetic.</p>
    `,
  },
  {
    id: 'faq-reapply-indoors',
    category: 'faq',
    title: 'Do I need to reapply if I am indoors all day?',
    tldr: 'No. The morning coat lasts a day at a desk; reapplication matters outdoors — 15–30 minutes after going out, then after swimming, sweating or towelling — and for the drive, where the side window lets a tenth of the UVA through.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/11712033/" rel="noopener nofollow" target="_blank">Diffey 2001</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/24313722/" rel="noopener nofollow" target="_blank">Petersen 2014</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11742901/" rel="noopener nofollow" target="_blank">Axelson 2025</a>.) The European rules forbid "all day" claims because the product wears off outdoors, not indoors.</p>
    `,
  },
  {
    id: 'faq-mineral-or-chemical',
    category: 'faq',
    title: 'Mineral or chemical?',
    tldr: 'Either that carries the UVA circle at SPF 50+ — the one you will wear every day. Mineral for the reactive face, pregnancy, babies and the reef; a modern European organic filter for the lighter texture and the stronger UVA; tinted if pigment is the problem. The trials used organic filters.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/30444533/" rel="noopener nofollow" target="_blank">Schneider &amp; Lim 2019</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/33764577/" rel="noopener nofollow" target="_blank">Passeron 2021</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/10475183/" rel="noopener nofollow" target="_blank">Green 1999</a>.)</p>
    `,
  },
  {
    id: 'faq-makeup-spf',
    category: 'faq',
    title: 'Is the SPF in my foundation or moisturiser enough?',
    tldr: 'No, not on its own: an SPF moisturiser left 17% of the face and 21% of the eyelids bare, and foundation goes on at a fraction of the tested dose. A real sunscreen first, makeup over it, a powder or stick for the top-up.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/30943192/" rel="noopener nofollow" target="_blank">Lourenço 2019</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/17493070/" rel="noopener nofollow" target="_blank">Faurschou 2007</a>.)</p>
    `,
  },
  {
    id: 'faq-cloudy-winter',
    category: 'faq',
    title: 'Cloudy days and winter — still?',
    tldr: 'Yes whenever the UV index reaches 3, which in most of Europe is March to October and all year at altitude or on snow; UVA, which drives the aging and the pigment, varies less with season and cloud than UVB does, and passes through glass. The trials that count applied it every morning regardless of weather.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/40927943/" rel="noopener nofollow" target="_blank">Tran 2025</a>, whose protocol used the UV-index-3 rule; <a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/16635665/" rel="noopener nofollow" target="_blank">Tuchinda 2006</a>.)</p>
    `,
  },
  {
    id: 'faq-vitamin-d',
    category: 'faq',
    title: 'Will daily sunscreen give me a vitamin D deficiency?',
    tldr: 'A little, at SPF 50+: 5 nmol/L less over a year and 46% deficient against 37% in the one high-SPF trial; a supplement of 1,000–2,000 IU a day settles it and costs less than the cream.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/40927943/" rel="noopener nofollow" target="_blank">Tran 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/30945275/" rel="noopener nofollow" target="_blank">Neale 2019</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6899926/" rel="noopener nofollow" target="_blank">Passeron 2019</a>.)</p>
    `,
  },
  {
    id: 'faq-dark-skin',
    category: 'faq',
    title: 'I have dark skin — do I need it?',
    tldr: 'Yes, and tinted: darker skin burns less but pigments more, from visible light and long-wave UVA that ordinary sunscreens do not block, and melasma and post-inflammatory marks are the commonest reasons it ends up in a clinic. An iron-oxide tinted SPF 50+ in a matching shade; the melanomas of dark skin are mostly on the palms, soles and nails, where sun is not the cause.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/20410914/" rel="noopener nofollow" target="_blank">Mahmoud 2010</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32726103/" rel="noopener nofollow" target="_blank">Dumbuya 2020</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/33937484/" rel="noopener nofollow" target="_blank">Song 2021</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/35533770/" rel="noopener nofollow" target="_blank">Brunsgaard 2023</a>.)</p>
    `,
  },
  {
    id: 'faq-oral-sunscreen',
    category: 'faq',
    title: 'Is there a pill instead?',
    tldr: 'No. Polypodium leucotomos raises the burn threshold by about 29%, an SPF of 1.3; nicotinamide cut skin cancers by 23% in people who had already had two and did nothing for healthy skin\'s burn threshold; "drinkable sunscreen" is a phrase.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/41182568/" rel="noopener nofollow" target="_blank">Faisal 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/26488693/" rel="noopener nofollow" target="_blank">Chen 2015</a>.)</p>
    `,
  },
  {
    id: 'faq-children',
    category: 'faq',
    title: 'From what age, and which one for a child?',
    tldr: 'Shade, a brim and fabric under six months; from six months a mineral SPF 50 on what the clothes leave bare, reapplied at breaks and after water; a broad-spectrum SPF 30 cut new moles in a randomised trial of schoolchildren, and sunburns at every age count.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/21646256/" rel="noopener nofollow" target="_blank">Paller 2011</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/10865273/" rel="noopener nofollow" target="_blank">Gallagher 2000</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/18652979/" rel="noopener nofollow" target="_blank">Dennis 2008</a>.)</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What sunlight does, what the label means, and what a sunscreen can and cannot do',
    intro: '',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you buy: the dose, the filters and the law, the prices and the one you will wear',
    intro: '',
    sections: context,
  },
  {
    id: 'uses',
    title: 'What people wear sunscreen for — graded by evidence',
    intro: 'Thirteen reasons people reach for the bottle, from the randomised trials with cancer endpoints to the "safe tan" and the post-laser claim the evidence does not support. Sorted by evidence, not by the shelf.',
    sections: uses,
  },
  {
    id: 'products',
    title: 'The products, format by format',
    intro: 'Twelve kinds of photoprotection graded on their own data — the trial product, the tint, the very high SPF, the minerals, the serum underneath, the tablets, the clothes, and the formats and claims that under-deliver.',
    sections: products,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'Absorption and hormones, allergy and acne, nanoparticles and reefs, vitamin D, and the people who need more than a cream.',
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
  aging: 'Aging',
  cancer: 'Skin cancer',
  pigment: 'Pigment',
  eyes: 'Eyes & lips',
  body: 'Body sites',
  sensitive: 'Sensitive skin',
  children: 'Children',
  topical: 'Topical',
  oral: 'Oral',
  physical: 'Physical barrier',
  marketing: 'Marketing tier',
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
