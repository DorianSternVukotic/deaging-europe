/**
 * Serums & actives guide — single source of truth (foundation, in-clinic layout).
 *
 * Consumed by /serums. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Editorial spine: a serum is a delivery vehicle, and what it delivers is
 * graded on vehicle-controlled trials of the active at a stated
 * concentration. Three actives have that evidence for aging skin
 * (niacinamide, L-ascorbic acid, the alpha-hydroxy acids), the pigment
 * actives have head-to-heads against hydroquinone, azelaic acid has
 * prescription-grade trials for rosacea and melasma, and the peptides,
 * growth factors, botanicals and "regenerative" molecules have
 * manufacturer split-face studies or nothing. Retinoids and sunscreen sit
 * above every row on this page and are graded in their own guides. Tiers
 * stay consistent with the guides that already grade these actives
 * (/dark-spots, /dull-skin, /dry-skin, /collagen, /collagen-loss,
 * /crows-feet, /facial-redness, /eye-bags, /dark-circles, /retinoids,
 * /botox, /anti-aging-30s/40s/50s). Prices are indicative European retail
 * prices as of September 2026, not quotes.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea =
  | 'lines'
  | 'pigment'
  | 'hydration'
  | 'texture'
  | 'redness'
  | 'acne'
  | 'antioxidant'
  | 'exfoliant'
  | 'signal'
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
  'A serum is a vehicle, and the evidence belongs to the active in it at a stated concentration, at a pH that lets it in, in a bottle that keeps it alive. L-ascorbic acid enters skin only below pH 3.5 and saturates at 20%; nothing over about 500 Daltons crosses intact skin at all, which rules out collagen, most "growth factors" and every exosome as a topical repair molecule; and a cosmetic in Europe needs no proof that it works before it is sold, only that it is safe.',
  'Three actives have vehicle-controlled trials for aging skin. Niacinamide 5% reduced fine lines, hyperpigmented spots, red blotchiness and sallowness and improved elasticity against the same moisturiser without it in a 12-week double-blind split-face trial. L-ascorbic acid 5% improved photodamage against placebo over six months with elastic-tissue repair on electron microscopy, and a half-face trial found more collagen on biopsy. Glycolic and lactic acid at 8% improved photodamage in 76% and 71% against 40% on vehicle over 22 weeks.',
  'For pigment, the serum shelf has real head-to-heads: azelaic acid 20% matched or beat 4% hydroquinone for melasma in randomised trials and a six-trial meta-analysis; thiamidol beat hydroquinone in one trial and matched it in another; cysteamine 5% matched hydroquinone across seven randomised trials; niacinamide 4% gave good-to-excellent results in 44% against hydroquinone\'s 55% with fewer side effects; topical tranexamic acid works less well than the tablet and no better than vehicle in one double-blind trial; vitamin C gave 62.5% against hydroquinone\'s 93%.',
  'Azelaic acid is the one active that crosses into prescription medicine: 15% gel cleared or nearly cleared papulopustular rosacea in 61–62% against 40–48% on vehicle in two phase 3 trials and beat metronidazole, and 4% niacinamide gel matched 1% clindamycin for inflammatory acne. Peptides have manufacturer split-face studies with small measured gains and none against a retinoid that they win outright; growth-factor, snail and stem-cell creams have blinded trials in which the placebo side improved as much; topical collagen failed a six-month randomised trial with biopsies.',
  'The routine the evidence supports is short: vitamin C under sunscreen in the morning, a retinoid at night, niacinamide anywhere, an acid two or three nights a week if the skin tolerates it, azelaic acid for spots or redness, and a humectant serum under a cream when the skin is tight. Everything above the €60 line is paying for texture, packaging and a story; stacking six actives is the commonest cause of the irritated, blotchy skin the serums were bought to fix.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-a-serum-is',
    category: 'concept',
    title: 'What a serum is — a vehicle, a molecule, a concentration and a pH',
    tldr: 'A serum is a low-viscosity vehicle for a higher concentration of an active than a cream usually carries; it is not a category of molecule. What decides whether it does anything is whether the active can enter the skin (under about 500 Daltons, at the right pH), whether it is present at the concentration the trials used, and whether it survives the bottle. In law it is a cosmetic, which means nobody checked that it works.',
    bodyHtml: `
      <p>The penetration rule: molecules over about 500 Daltons do not cross intact skin — "the most commonly used pharmacological agents applied in topical dermatotherapy are all under 500 Dalton" and "larger molecules are not known as contact sensitizers" because "they cannot penetrate" (<a href="https://pubmed.ncbi.nlm.nih.gov/10839713/" rel="noopener nofollow" target="_blank">Bos 2000</a>). The formulation rule, from the founding vitamin C absorption studies: "L-ascorbic acid must be formulated at pH levels less than 3.5 to enter the skin", the maximal concentration for absorption "was 20%", tissue levels saturated after three daily applications with a half-life of about four days, and the derivatives "magnesium ascorbyl phosphate, ascorbyl-6-palmitate, and dehydroascorbic acid did not increase skin levels of L-ascorbic acid" (<a href="https://pubmed.ncbi.nlm.nih.gov/11207686/" rel="noopener nofollow" target="_blank">Pinnell 2001</a>; reviewed in <a href="https://pubmed.ncbi.nlm.nih.gov/23174055/" rel="noopener nofollow" target="_blank">Stamford 2012</a>). The legal rule: a "cosmeceutical" is "undefined, unclassified, and unregulated", sold as a cosmetic, and "can only be assessed in terms of their ability to improve skin appearance but not function", because a claim to change function would make it a drug (<a href="https://pubmed.ncbi.nlm.nih.gov/19695473/" rel="noopener nofollow" target="_blank">Draelos 2009</a>).</p>
      <p>The consequence for the reader: the words on the front of the bottle are marketing, the ingredient list on the back is law, and the trials — where they exist — were done on a named active at a named concentration in a named vehicle. This guide grades the actives on those trials, and the rows say which concentration and which conditions the evidence belongs to. <a href="/retinoids">Retinoids</a> and <a href="/sun-damage">sunscreen</a> outrank every row below and have their own guides.</p>
    `,
  },
  {
    id: 'what-the-trials-measure',
    category: 'concept',
    title: 'What the trials measure — split faces, vehicles and instruments',
    tldr: 'The good serum trials put the active on one side of the face and the same base without it on the other, for 12–24 weeks, with blinded graders and instruments; niacinamide, palmitoyl pentapeptide, vitamin C and the alpha-hydroxy acids have that design. Most of the rest are open-label instrument studies in which hydration and roughness readings improve on both sides of the face — including, in the vitamin C review, the placebo side — and a systematic review of over-the-counter anti-aging agents found the data "oftentimes lacking".',
    bodyHtml: `
      <p>The reference designs: 50 women, 12 weeks, 5% niacinamide against the same moisturiser without it, blinded, split-face, with "reductions in fine lines and wrinkles, hyperpigmented spots, red blotchiness, and skin sallowness" and elasticity improved on cutometry (<a href="https://pubmed.ncbi.nlm.nih.gov/16029679/" rel="noopener nofollow" target="_blank">Bissett 2005</a>); a six-month double-blind vitamin C study against placebo with silicone replicas, biopsies and electron microscopy (<a href="https://pubmed.ncbi.nlm.nih.gov/12823436/" rel="noopener nofollow" target="_blank">Humbert 2003</a>); a 22-week vehicle-controlled trial of 8% glycolic and 8% lactic acid on faces and forearms (<a href="https://pubmed.ncbi.nlm.nih.gov/8651713/" rel="noopener nofollow" target="_blank">Stiller 1996</a>); a split-face trial of a peptide at 3 parts per million against the same moisturiser (<a href="https://pubmed.ncbi.nlm.nih.gov/18492182/" rel="noopener nofollow" target="_blank">Robinson 2005</a>). The instrument problem: the systematic review of topical vitamin C in melasma and photoaging pooled seven studies and 139 volunteers and found smoother, lighter skin — and that "hydration improved equally in the vitamin C and placebo-treated sites" (<a href="https://pubmed.ncbi.nlm.nih.gov/37128827/" rel="noopener nofollow" target="_blank">Correia 2023</a>); a blinded split-face trial of a stem-cell extract cream found "both sides of the face achieved significant improvement" with no difference between them (<a href="https://pubmed.ncbi.nlm.nih.gov/31012565/" rel="noopener nofollow" target="_blank">Alhaddad 2019</a>). The systematic review of over-the-counter agents concludes that evidence and good clinical practice "are oftentimes lacking" (<a href="https://pubmed.ncbi.nlm.nih.gov/32882685/" rel="noopener nofollow" target="_blank">Imhof 2021</a>), while a 2024 review rated the peptide evidence "the strongest" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11375026/" rel="noopener nofollow" target="_blank">Chan 2024</a>) — on the basis of manufacturer-designed split-face studies that this guide grades one tier lower.</p>
      <p>The comparator that puts it all in scale is the Cochrane review of photodamage: tretinoin at 0.05% improved photodamage against placebo with a relative risk of 1.73 across the trials, and topical ascorbic acid had "one small within-patient study" (<a href="https://pubmed.ncbi.nlm.nih.gov/15674885/" rel="noopener nofollow" target="_blank">Samuel 2005</a>). A serum active with a moderate tier here is one with a vehicle-controlled trial and an effect a blinded grader could see; nothing on this page has the retinoid's evidence.</p>
    `,
  },
  {
    id: 'can-and-cant',
    category: 'concept',
    title: 'What a serum can and cannot do',
    tldr: 'Can: soften fine lines and even out texture modestly over three months, lighten spots and melasma when the active is one of the tyrosinase inhibitors, hold water in the surface, clear mild acne and rosacea bumps with azelaic acid or niacinamide, and add antioxidant protection under a sunscreen. Cannot: replace a retinoid or a sunscreen, lift, fill, thicken thin skin the way tretinoin does on biopsy, "rebuild collagen" with a molecule too large to enter, or relax a muscle.',
    bodyHtml: `
      <p>The measured ceiling: fine lines and spots on the niacinamide split face (<a href="https://pubmed.ncbi.nlm.nih.gov/16029679/" rel="noopener nofollow" target="_blank">Bissett 2005</a>), photodamage grades on the acid faces (<a href="https://pubmed.ncbi.nlm.nih.gov/8651713/" rel="noopener nofollow" target="_blank">Stiller 1996</a>), Grenz-zone collagen and type I collagen mRNA on the vitamin C biopsies (<a href="https://pubmed.ncbi.nlm.nih.gov/11896774/" rel="noopener nofollow" target="_blank">Fitzpatrick 2002</a>), melasma matched against hydroquinone by azelaic acid (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10339666/" rel="noopener nofollow" target="_blank">Albzea 2023</a>). The measured floor: a six-month randomised, double-blind trial of topical and oral collagen peptides in 56 women with thin, fragile forearm skin found "no significant difference" for any parameter — clinical scores, elasticity, thickness, echogenicity, histology — and concluded they "should not be used routinely" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9884723/" rel="noopener nofollow" target="_blank">Guadanhim 2023</a>); the "Botox-like" hexapeptide is graded limited in the <a href="/botox">botox guide</a>; the topical exosome literature "does not yet provide a clear consensus" and has no approved product (<a href="https://pubmed.ncbi.nlm.nih.gov/36597716/" rel="noopener nofollow" target="_blank">Vyas 2023</a>).</p>
      <p>Where a serum fits: as the morning antioxidant under the <a href="/sun-damage">sunscreen</a>, the pigment or redness active in a targeted spot, the hydration layer under a cream in the <a href="/dry-skin">dry skin guide</a>, and the acid that a retinoid user adds carefully; the <a href="/retinoids">retinoids guide</a> covers the one topical that changes the dermis on biopsy, and the <a href="/skin-boosters">skin boosters guide</a> the injected hyaluronic acid that a serum imitates in name only.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'rules-and-labels',
    category: 'context',
    title: 'Reading the label — concentrations, the ingredient list, and what Europe allows',
    tldr: 'In the EU a cosmetic is registered for safety, not efficacy; claims must be "substantiated" but the file stays with the company. The ingredient list is in descending order by weight down to 1%, so an active listed after the preservatives is present in traces. Hydroquinone is prescription-only in Europe; the 2024 regulation capped kojic acid at 1% and alpha-arbutin at 2% in face products and set limits on retinol; azelaic acid over 10% is a medicine; tranexamic acid, niacinamide, vitamin C and the acids are unrestricted at cosmetic strengths.',
    bodyHtml: `
      <p>The trial concentrations are the ones to look for on the label: niacinamide 4–5% (<a href="https://pubmed.ncbi.nlm.nih.gov/16029679/" rel="noopener nofollow" target="_blank">Bissett 2005</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3142702/" rel="noopener nofollow" target="_blank">Navarrete-Solís 2011</a>), L-ascorbic acid 5–20% at pH under 3.5 (<a href="https://pubmed.ncbi.nlm.nih.gov/11207686/" rel="noopener nofollow" target="_blank">Pinnell 2001</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/12823436/" rel="noopener nofollow" target="_blank">Humbert 2003</a>), glycolic or lactic acid 5–8% in a daily leave-on (<a href="https://pubmed.ncbi.nlm.nih.gov/8651713/" rel="noopener nofollow" target="_blank">Stiller 1996</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/9598014/" rel="noopener nofollow" target="_blank">Thibault 1998</a>), azelaic acid 15–20% in the trials that matter (<a href="https://pubmed.ncbi.nlm.nih.gov/12789172/" rel="noopener nofollow" target="_blank">Thiboutot 2003</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/1816137/" rel="noopener nofollow" target="_blank">Baliña 1991</a>), tranexamic acid 2–5% (<a href="https://pubmed.ncbi.nlm.nih.gov/22506692/" rel="noopener nofollow" target="_blank">Kanechorn Na Ayuthaya 2012</a>), cysteamine 5% (<a href="https://pubmed.ncbi.nlm.nih.gov/39673630/" rel="noopener nofollow" target="_blank">Mawu 2024</a>), the peptide at parts per million (<a href="https://pubmed.ncbi.nlm.nih.gov/18492182/" rel="noopener nofollow" target="_blank">Robinson 2005</a>). The European limits on kojic acid and alpha-arbutin came in the 2024 amendment to the cosmetics regulation, which also set concentration limits for retinol (<a href="https://eur-lex.europa.eu/eli/reg/2024/996/oj/eng" rel="noopener nofollow" target="_blank">Regulation (EU) 2024/996</a>); the hydroquinone story — a gold standard withdrawn from cosmetics by regulators in Japan, Europe and then the United States — is told in the review of skin-lightening preparations (<a href="https://pubmed.ncbi.nlm.nih.gov/18045355/" rel="noopener nofollow" target="_blank">Draelos 2007</a>).</p>
      <p>Practically: a percentage on the front is a claim the company chose to make, and its absence usually means the number is small; "clinically proven" in Europe has no legal definition; "dermatologist tested" means a dermatologist was paid to watch a patch test. A product that names its active, its concentration and, for vitamin C, its pH and packaging, is one whose maker read the same trials this guide did.</p>
    `,
  },
  {
    id: 'prices-routine',
    category: 'context',
    title: 'What it costs, and the routine the evidence supports',
    tldr: 'The trial-strength actives cost €8–30 a bottle from the value brands and €60–250 from the prestige ones, for the same molecule at the same percentage; vitamin C is the exception where formulation and packaging justify paying for a stable one. The evidence-based routine: vitamin C under sunscreen in the morning, a retinoid at night, niacinamide in either, an acid two or three nights a week instead of the retinoid, a targeted pigment or redness active where needed, and a humectant under a cream when the skin is tight.',
    bodyHtml: `
      <p>Indicative European retail prices, September 2026, for the actives graded moderate or above: niacinamide 5% €8–40; L-ascorbic acid 10–20% €15–60 from the value brands and €120–250 from the prestige ones, the latter buying stability and the ferulic-vitamin E combination that doubled photoprotection in the laboratory and protected human skin in the clinic (<a href="https://pubmed.ncbi.nlm.nih.gov/16185284/" rel="noopener nofollow" target="_blank">Lin 2005</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/18603326/" rel="noopener nofollow" target="_blank">Murray 2008</a>); glycolic or lactic acid 5–10% €10–40; azelaic acid 10% €15–35 as a cosmetic and 15–20% €10–25 on prescription; tranexamic acid 2–5% €15–50; cysteamine 5% €60–120; thiamidol €25–50; hyaluronic acid serums €8–80 for a molecule the trials used at 0.1% (<a href="https://pubmed.ncbi.nlm.nih.gov/22052267/" rel="noopener nofollow" target="_blank">Pavicic 2011</a>). Peptide and growth-factor serums run €40–400 for evidence graded emerging below.</p>
      <p>The routine: the morning is antioxidant and sunscreen, because the vitamin C–E–ferulic solution's protection "is different from sunscreens and would be expected to supplement the sun protection provided by sunscreens" (<a href="https://pubmed.ncbi.nlm.nih.gov/18603326/" rel="noopener nofollow" target="_blank">Murray 2008</a>); the night is the <a href="/retinoids">retinoid</a>, or an acid on the nights the retinoid is skipped, never both on the same night on a face that stings; niacinamide sits in either slot and beside anything; a pigment active goes on the spot morning and night for twelve weeks; and the humectant serum goes on damp skin under a cream, which is the <a href="/dry-skin">dry skin guide</a>'s instruction. Four products, one of which is sunscreen, is the whole evidence-based shelf.</p>
    `,
  },
  {
    id: 'vetting',
    category: 'context',
    title: 'How to vet a serum before you buy it',
    tldr: 'Five checks: the active and its percentage on the label, in the trial range; for vitamin C, an opaque or airless container and a pH the brand will state — a serum that has turned orange is oxidised; a vehicle-controlled trial of the active, not a "study" of the finished product with no control; a returns policy and a patch test; and a price that buys formulation rather than a story. A brand that will not state a percentage has a reason.',
    bodyHtml: `
      <p>The label test: the ingredient list is the only regulated statement on the product, and the actives in Part 02 have known effective ranges; a niacinamide serum whose niacinamide sits below the preservatives is not the 4–5% of the trials (<a href="https://pubmed.ncbi.nlm.nih.gov/16029679/" rel="noopener nofollow" target="_blank">Bissett 2005</a>). The vitamin C test: L-ascorbic acid degrades in light, air and water, which is why the studied products are amber, airless or anhydrous and why the derivatives that survive the bottle did not raise skin levels in the absorption studies (<a href="https://pubmed.ncbi.nlm.nih.gov/11207686/" rel="noopener nofollow" target="_blank">Pinnell 2001</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/23174055/" rel="noopener nofollow" target="_blank">Stamford 2012</a>). The trial test: "clinically proven" on a growth-factor or stem-cell cream usually resolves to an open-label instrument study or a split-face in which the placebo side improved too (<a href="https://pubmed.ncbi.nlm.nih.gov/31012565/" rel="noopener nofollow" target="_blank">Alhaddad 2019</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/34566354/" rel="noopener nofollow" target="_blank">Miller-Kobisher 2021</a>). The tolerance test: the polyhydroxy-acid regimen matched the alpha-hydroxy-acid regimen on every anti-aging measure but sallowness and recoil and produced far less stinging and burning (<a href="https://pubmed.ncbi.nlm.nih.gov/15002657/" rel="noopener nofollow" target="_blank">Edison 2004</a>), which is the trade to make on a reactive face.</p>
      <p>The photograph test applies here as everywhere: a phone picture in the same window light at week 0 and week 12, because three months is what the trials needed and what a serum has to show before it earns a repurchase.</p>
    `,
  },
];

const uses: Section[] = [
  {
    id: 'use-redness-rosacea',
    category: 'use',
    title: 'Redness and the bumps of rosacea: azelaic acid at prescription strength',
    tldr: 'The one serum active with phase 3 trials: 15% azelaic acid gel gave therapeutic success in 61% and 62% against 40% and 48% on vehicle in two randomised trials, cut inflammatory lesions 58% and 51% against 40% and 39%, improved erythema in 44–46% against 28–29%, beat metronidazole head-to-head (72.7% against 55.8% fewer lesions) and kept improving to week 15, and a 961-patient foam trial confirmed it. Strong, for the papules and background redness of rosacea — on prescription in much of Europe, with a fortnight of stinging.',
    evidence: 'strong',
    focus: 'redness',
    sessions: 'Twice daily; judge at 12 weeks',
    downtime: 'Stinging and tingling for the first weeks',
    cost: '€10–25 (prescription 15–20%); €15–35 (cosmetic 10%)',
    bodyHtml: `
      <p>The phase 3 trials: "AzA gel yielded statistically significantly higher reductions in mean inflammatory lesion count than vehicle: 58% versus 40%, study 1; 51% versus 39%, study 2", erythema improvement in 44% and 46% against 29% and 28%, and therapeutic success "in 61% and 62% of patients treated with AzA gel" against 40% and 48% on vehicle (<a href="https://pubmed.ncbi.nlm.nih.gov/12789172/" rel="noopener nofollow" target="_blank">Thiboutot 2003</a>); against 0.75% metronidazole, "mean percent decrease in inflammatory lesions (−72.7% vs −55.8%)", erythema improved in 56% against 42%, and "the effectiveness of metronidazole gel on these variables seemed to plateau after week 8, whereas azelaic acid gel demonstrated progressive improvement through week 15" (<a href="https://pubmed.ncbi.nlm.nih.gov/14623704/" rel="noopener nofollow" target="_blank">Elewski 2003</a>); the 961-participant foam trial "support[s] the therapeutic superiority of AzA foam over vehicle foam" (<a href="https://pubmed.ncbi.nlm.nih.gov/27814413/" rel="noopener nofollow" target="_blank">Solomon 2016</a>). The systematic review of five randomised trials in 873 patients found four showing significant decreases in lesion count and erythema against vehicle and no effect on telangiectasia (<a href="https://pubmed.ncbi.nlm.nih.gov/16924055/" rel="noopener nofollow" target="_blank">Liu 2006</a>); the Cochrane review pooled participants' assessments as a risk ratio of 1.52 for azelaic acid over placebo (<a href="https://pubmed.ncbi.nlm.nih.gov/21412882/" rel="noopener nofollow" target="_blank">van Zuuren 2011</a>) and its 2015 update covers 106 studies and 13,631 participants (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6481562/" rel="noopener nofollow" target="_blank">van Zuuren 2015</a>). A niacinamide moisturiser improved barrier function and the dermatologist-rated condition of rosacea skin over four weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/16209160/" rel="noopener nofollow" target="_blank">Draelos 2005</a>).</p>
      <p>Strong, as the <a href="/facial-redness">facial redness guide</a> grades it. The 10% cosmetic products have no trials of their own; the 15% gel and 20% cream are the studied strengths, and in most European countries they are dispensed on prescription. Nothing in this row treats the flushing or the visible vessels, which are the <a href="/facial-redness">facial redness guide</a>'s laser section.</p>
    `,
  },
  {
    id: 'use-fine-lines',
    category: 'use',
    title: 'Fine lines, sallowness and uneven texture: niacinamide, vitamin C and the acids',
    tldr: 'Niacinamide 5% reduced fine lines and wrinkles, hyperpigmented spots, red blotchiness and sallowness and improved elasticity against the same base in a 12-week double-blind split-face trial of 50 women; vitamin C 5% improved photodamage against placebo over six months with deep furrows reduced on replicas and elastic-tissue repair on electron microscopy, and a 10% half-face trial found more Grenz-zone collagen on biopsy; 8% glycolic and lactic acid improved photodamage in 76% and 71% against 40% on vehicle. Moderate — visible to a grader at three months, not to a stranger, and never what a retinoid does.',
    evidence: 'moderate',
    focus: 'lines',
    sessions: 'Daily; judge at 12 weeks (niacinamide, acids) or 6 months (vitamin C)',
    downtime: 'None; stinging with acids and low-pH vitamin C',
    cost: '€8–60',
    bodyHtml: `
      <p>Niacinamide: the split-face trial found "reductions in fine lines and wrinkles, hyperpigmented spots, red blotchiness, and skin sallowness (yellowing)" and improved elasticity on cutometry (<a href="https://pubmed.ncbi.nlm.nih.gov/16029679/" rel="noopener nofollow" target="_blank">Bissett 2005</a>), confirmed for "fine lines/wrinkles, hyperpigmentation spots, texture, and red blotchiness" plus sallowness in the earlier report (<a href="https://pubmed.ncbi.nlm.nih.gov/18492135/" rel="noopener nofollow" target="_blank">Bissett 2004</a>), and a placebo-controlled split-face trial in Asian skin found reduced spot, pore, wrinkle and evenness counts with niacinamide and kinetin together (<a href="https://pubmed.ncbi.nlm.nih.gov/18047609/" rel="noopener nofollow" target="_blank">Chiu 2007</a>). Vitamin C: "a highly significant increase in the density of skin microrelief and a decrease of the deep furrows" with "ultrastructural evidence of the elastic tissue repair" after six months of 5% cream against placebo (<a href="https://pubmed.ncbi.nlm.nih.gov/12823436/" rel="noopener nofollow" target="_blank">Humbert 2003</a>); a half-face study with "decreased photoaging scores of the cheeks (P = 0.006) and the peri-oral area (P = 0.01)" and biopsies showing "increased Grenz zone collagen, as well as increased staining for mRNA for type I collagen" (<a href="https://pubmed.ncbi.nlm.nih.gov/11896774/" rel="noopener nofollow" target="_blank">Fitzpatrick 2002</a>); a systematic review of seven studies finding smoother, less wrinkled skin with biopsy support and "long-term use may be needed" (<a href="https://pubmed.ncbi.nlm.nih.gov/37128827/" rel="noopener nofollow" target="_blank">Correia 2023</a>). Acids: "76% glycolic acid, 71% lactic acid, and 40% vehicle" improved at least one photodamage grade at 22 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/8651713/" rel="noopener nofollow" target="_blank">Stiller 1996</a>); a daily 5% glycolic cream improved texture and discolouration significantly and wrinkles as a trend (<a href="https://pubmed.ncbi.nlm.nih.gov/9598014/" rel="noopener nofollow" target="_blank">Thibault 1998</a>).</p>
      <p>Moderate, as the <a href="/dull-skin">dull skin</a>, <a href="/crows-feet">crow's feet</a> and <a href="/collagen-loss">collagen loss</a> guides grade these actives; the <a href="/collagen">collagen guide</a> grades L-ascorbic acid strong as a collagen cofactor. Deep or etched lines are the <a href="/retinoids">retinoid</a>'s and the <a href="/skin-resurfacing">resurfacing guide</a>'s.</p>
    `,
  },
  {
    id: 'use-dark-spots',
    category: 'use',
    title: 'Dark spots and melasma: the tyrosinase inhibitors, against hydroquinone',
    tldr: 'Azelaic acid 20% gave 65% good-or-excellent results against hydroquinone 4% with no difference in one randomised trial, 73% against 19% in another, and a lower melasma score than hydroquinone in a six-trial meta-analysis of 673 patients; thiamidol improved 79% against hydroquinone\'s 61% and then matched it (43% against 33% score reduction); cysteamine 5% matched hydroquinone across seven randomised trials; niacinamide 4% gave 44% good-to-excellent against 55% with fewer side effects; vitamin C 62.5% against 93%; topical tranexamic acid no better than vehicle in the one double-blind trial. Moderate — a serum can lighten a spot; a prescription clears it faster.',
    evidence: 'moderate',
    focus: 'pigment',
    sessions: 'Twice daily on the area for 12 weeks; maintenance after',
    downtime: 'Stinging and dryness in the first weeks',
    cost: '€15–120',
    bodyHtml: `
      <p>Azelaic acid: "azelaic acid cream yielded 65% good or excellent results; no significant treatment differences were observed" against 4% hydroquinone, with no sensitisation or ochronosis (<a href="https://pubmed.ncbi.nlm.nih.gov/1816137/" rel="noopener nofollow" target="_blank">Baliña 1991</a>); "73% of the azelaic acid patients, compared with 19% of the hydroquinone patients, had good to excellent overall results" over 24 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/2528260/" rel="noopener nofollow" target="_blank">Verallo-Rowell 1989</a>); a lower melasma score with azelaic acid at two months in an open comparison (<a href="https://pubmed.ncbi.nlm.nih.gov/22151936/" rel="noopener nofollow" target="_blank">Farshi 2011</a>); the meta-analysis of six randomised trials and 673 patients found "a lower mean change in melasma area severity index" favouring azelaic acid by 1.23 points and no difference in adverse events (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10339666/" rel="noopener nofollow" target="_blank">Albzea 2023</a>); a glycolic-peel-plus-azelaic regimen matched a low-potency triple cream in Indian patients (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4372906/" rel="noopener nofollow" target="_blank">Mahajan 2015</a>). The newer inhibitors: thiamidol improved "79%" of subjects against hydroquinone's 61% with no worsening on the thiamidol side (<a href="https://pubmed.ncbi.nlm.nih.gov/30825454/" rel="noopener nofollow" target="_blank">Arrowitz 2019</a>) and reduced the melasma score 43% against 33% with no significant difference in the evaluator-blinded head-to-head (<a href="https://pubmed.ncbi.nlm.nih.gov/33988887/" rel="noopener nofollow" target="_blank">Lima 2021</a>); cysteamine 5% beat placebo (standardised mean difference −0.84) and showed "no significant difference when compared with hydroquinone 4%" across seven randomised trials (<a href="https://pubmed.ncbi.nlm.nih.gov/39673630/" rel="noopener nofollow" target="_blank">Mawu 2024</a>). The gentler actives: niacinamide "good to excellent improvement was observed in 44% of patients, compared to 55% with HQ", side effects 18% against 29%, with less mast-cell infiltrate and solar elastosis on biopsy (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3142702/" rel="noopener nofollow" target="_blank">Navarrete-Solís 2011</a>), on a mechanism of blocking melanosome transfer (<a href="https://pubmed.ncbi.nlm.nih.gov/12100180/" rel="noopener nofollow" target="_blank">Hakozaki 2002</a>); vitamin C "62.5% on the ascorbic acid side" against 93% for hydroquinone, with side effects in 6.2% against 68.7% (<a href="https://pubmed.ncbi.nlm.nih.gov/15304189/" rel="noopener nofollow" target="_blank">Espinal-Perez 2004</a>); topical 5% tranexamic acid "neither superior nor different" from its vehicle despite lightening on both sides (<a href="https://pubmed.ncbi.nlm.nih.gov/22506692/" rel="noopener nofollow" target="_blank">Kanechorn Na Ayuthaya 2012</a>), while the meta-analysis of 22 trials found the oral route "the most substantial decrease" followed by injections and then topical use (<a href="https://pubmed.ncbi.nlm.nih.gov/38843906/" rel="noopener nofollow" target="_blank">Calacattawi 2024</a>); kojic acid added to a hydroquinone-glycolic gel cleared more than half the melasma in 60% against 47.5% (<a href="https://pubmed.ncbi.nlm.nih.gov/10417583/" rel="noopener nofollow" target="_blank">Lim 1999</a>) and matched hydroquinone in a glycolic base while irritating more (<a href="https://pubmed.ncbi.nlm.nih.gov/8634807/" rel="noopener nofollow" target="_blank">Garcia 1996</a>).</p>
      <p>Moderate, in line with the <a href="/dark-spots">dark spots guide</a>, which grades hydroquinone, the triple cream and oral tranexamic acid strong and sets out the sunscreen without which every row above relapses. The review of melasma topicals sums up the shelf: triple combination and hydroquinone "the most well-studied agents", ascorbic acid, azelaic acid, glycolic acid, kojic acid and niacinamide "effective as adjuvant therapies", tranexamic acid and cysteamine "recent agents of interest" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9122278/" rel="noopener nofollow" target="_blank">González-Molina 2022</a>).</p>
    `,
  },
  {
    id: 'use-hydration',
    category: 'use',
    title: 'Tight, dehydrated skin: hyaluronic acid, glycerin and the humectants',
    tldr: 'All 0.1% hyaluronic-acid creams raised hydration and elasticity against placebo in a 76-woman trial, and the 50 and 130 kDa fractions reduced wrinkle depth on profilometry; a low-molecular-weight hyaluronic lotion raised skin capacitance to 56 units against 49 for vehicle in elderly dry skin; a 20% glycerin cream matched urea in 197 people with less smarting. Moderate — water held in the surface for hours, sealed with a cream, and gone by morning without one.',
    evidence: 'moderate',
    focus: 'hydration',
    sessions: 'Daily on damp skin, under a cream',
    downtime: 'None',
    cost: '€8–80',
    bodyHtml: `
      <p>The trials: "all HA-based creams utilized in this study demonstrated a significant improvement in skin hydration and overall elasticity values when compared to placebo", with wrinkle depth significantly improved in the 130 and 50 kDa groups at 60 days, "which may be due to better penetration abilities of LMW HA" (<a href="https://pubmed.ncbi.nlm.nih.gov/22052267/" rel="noopener nofollow" target="_blank">Pavicic 2011</a>); low-molecular-weight hyaluronic acid raised capacitance to 56.37 against 52.37 for high-molecular-weight and 49.01 for vehicle after four weeks on the dry legs of the elderly, with no difference in water loss or symptom scores (<a href="https://pubmed.ncbi.nlm.nih.gov/38829483/" rel="noopener nofollow" target="_blank">Muhammad 2024</a>); an open-label nano-hyaluronic range reported hydration up to 96% and wrinkle depth down up to 40% at eight weeks, with no control (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3970829/" rel="noopener nofollow" target="_blank">Jegasothy 2014</a>); a crosslinked hyaluronic serum after procedures improved topography and hydration against untreated skin in a split-face study (<a href="https://pubmed.ncbi.nlm.nih.gov/29601621/" rel="noopener nofollow" target="_blank">Sundaram 2018</a>); the 20% glycerin cream showed "equal effects on skin dryness" to urea-saline with less smarting (<a href="https://pubmed.ncbi.nlm.nih.gov/12013198/" rel="noopener nofollow" target="_blank">Lodén 2002</a>).</p>
      <p>Moderate, as the <a href="/dry-skin">dry skin guide</a> grades the humectants, with the rule that a humectant on its own in dry air pulls water outward and needs an occlusive over it; the same guide grades the <a href="/ceramides">ceramide</a> half of the barrier and the injected hyaluronic acid that a "hyaluronic serum" borrows its name from.</p>
    `,
  },
  {
    id: 'use-texture-pores',
    category: 'use',
    title: 'Rough texture, dullness and pores: the exfoliating acids',
    tldr: 'Daily 5–8% glycolic or lactic acid improved photodamage, texture and discolouration against vehicle; a polyhydroxy-acid regimen matched a glycolic one on replicas, grading and pinch recoil with far less stinging; salicylic acid 2% in a leave-on reduced the benzoyl peroxide needed for acne and halved relapse, but plain salicylic acid did nothing to the epidermis on biopsy where its lipohydroxy cousin thickened it; niacinamide reduced pore counts in one split-face trial. Moderate for texture; the pore effect is a clean pore, not a smaller one.',
    evidence: 'moderate',
    focus: 'texture',
    sessions: '2–3 nights a week (acids); daily (niacinamide)',
    downtime: 'Stinging, flaking in the first weeks',
    cost: '€10–40',
    bodyHtml: `
      <p>The acids: the vehicle-controlled trial (<a href="https://pubmed.ncbi.nlm.nih.gov/8651713/" rel="noopener nofollow" target="_blank">Stiller 1996</a>) and the daily 5% glycolic trial with "statistically significant improvement favoring the active-cream in general skin texture and discoloration" (<a href="https://pubmed.ncbi.nlm.nih.gov/9598014/" rel="noopener nofollow" target="_blank">Thibault 1998</a>); the polyhydroxy regimen with "only 2 statistically significant differences" from the alpha-hydroxy one — sallowness 12.4% against 17.1% and pinch recoil 10.2% against 13.5% at week 12 — and "stinging and burning were significantly worse for subjects in the AHA treatment group" (<a href="https://pubmed.ncbi.nlm.nih.gov/15002657/" rel="noopener nofollow" target="_blank">Edison 2004</a>); an enzyme exfoliant compared with glycolic creams over twelve weeks, each improving different instrument scores (<a href="https://pubmed.ncbi.nlm.nih.gov/26580881/" rel="noopener nofollow" target="_blank">Mekas 2015</a>); the reviews of mechanism, concentration and the open question of whether the acids increase or decrease photodamage (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6017965/" rel="noopener nofollow" target="_blank">Tang 2018</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/22916351/" rel="noopener nofollow" target="_blank">Babilas 2012</a>). Salicylic acid: on biopsy, "the vehicle- and salicylic-acid-treated areas had an aspect similar to untreated control sites", while beta-lipohydroxy acid and tretinoin thickened the epidermis (<a href="https://pubmed.ncbi.nlm.nih.gov/9252775/" rel="noopener nofollow" target="_blank">Piérard 1997</a>); in acne a salicylic dermocosmetic "significantly reduces the need for BPO" and cut relapse after it (<a href="https://pubmed.ncbi.nlm.nih.gov/38051857/" rel="noopener nofollow" target="_blank">Khammari 2023</a>); salicylic peels with a post-peel retinoid improved texture, roughness and pores (<a href="https://pubmed.ncbi.nlm.nih.gov/27050699/" rel="noopener nofollow" target="_blank">Kligman 2016</a>). Pores: reduced pore counts with niacinamide and kinetin in the Asian split-face trial (<a href="https://pubmed.ncbi.nlm.nih.gov/18047609/" rel="noopener nofollow" target="_blank">Chiu 2007</a>).</p>
      <p>Moderate, as the <a href="/dull-skin">dull skin guide</a> grades the acids, with salicylic acid for pores at emerging there. The clinic versions — the peels in the <a href="/chemical-peels">peels guide</a> — do in one session what a leave-on acid does in three months, at the price of a week.</p>
    `,
  },
  {
    id: 'use-acne',
    category: 'use',
    title: 'Adult acne: azelaic acid, niacinamide, salicylic acid and ascorbyl phosphate',
    tldr: 'The Cochrane review of 49 trials in 3,880 people found azelaic acid probably less effective than benzoyl peroxide and probably no different from tretinoin; 4% niacinamide gel improved 82% against 68% on 1% clindamycin with comparable lesion reductions; salicylic acid was no different from tretinoin on low-quality evidence; 5% sodium ascorbyl phosphate beat vehicle on every measure in a double-blind trial. Moderate for mild acne — as add-ons to the retinoid and benzoyl peroxide the guidelines start with.',
    evidence: 'moderate',
    focus: 'acne',
    sessions: 'Daily to twice daily; judge at 8–12 weeks',
    downtime: 'Dryness and stinging early',
    cost: '€10–40',
    bodyHtml: `
      <p>The Cochrane verdict: "azelaic acid is probably less effective than benzoyl peroxide (risk ratio 0.82)" but "probably little or no difference when comparing azelaic acid to tretinoin"; salicylic acid "little or no difference" from tretinoin on low-quality evidence; nicotinamide studied against antibiotics in four trials with no difference in withdrawals or minor adverse events (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7193765/" rel="noopener nofollow" target="_blank">Liu 2020</a>). The niacinamide trial: "82% of the patients treated with nicotinamide gel and 68% treated with clindamycin gel were improved", lesions down 60% against 43%, "a desirable alternative" because it breeds no resistance (<a href="https://pubmed.ncbi.nlm.nih.gov/7657446/" rel="noopener nofollow" target="_blank">Shalita 1995</a>). The vitamin C derivative: 5% sodium L-ascorbyl-2-phosphate "demonstrated statistically significant improvement when compared to vehicle in all of the parameters measured" with vehicle-like tolerability (<a href="https://pubmed.ncbi.nlm.nih.gov/20367669/" rel="noopener nofollow" target="_blank">Woolery-Lloyd 2010</a>), and combined with 0.2% retinol reduced inflammatory lesions 63% at eight weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/19134126/" rel="noopener nofollow" target="_blank">Ruamrak 2009</a>). Salicylic acid as a benzoyl-peroxide sparer and maintenance (<a href="https://pubmed.ncbi.nlm.nih.gov/38051857/" rel="noopener nofollow" target="_blank">Khammari 2023</a>); the dermocosmetic review notes that despite the mechanisms "there still remains a lack of rigorous controlled studies" (<a href="https://pubmed.ncbi.nlm.nih.gov/26916232/" rel="noopener nofollow" target="_blank">Araviiskaia 2016</a>).</p>
      <p>Moderate. The <a href="/retinoids">retinoids guide</a> grades the topical retinoids strong for acne and covers the isotretinoin question; benzoyl peroxide and the prescription options are a dermatologist's, and the serums on this row are what keeps a mild case quiet between them.</p>
    `,
  },
  {
    id: 'use-antioxidant-protection',
    category: 'use',
    title: 'Antioxidant protection under sunscreen: vitamin C with E and ferulic acid',
    tldr: 'Ferulic acid stabilised a solution of vitamins C and E and doubled its photoprotection of skin in the laboratory; on human volunteers the same solution reduced sunburn cells, erythema and thymine-dimer DNA mutations after ultraviolet exposure by a mechanism "different from sunscreens"; combined with microneedling it beat placebo serum on photoaging, pigment and elasticity scores in a 2026 split-face trial. Moderate — a morning layer that adds to sunscreen and does not replace a milligram of it.',
    evidence: 'moderate',
    focus: 'antioxidant',
    sessions: 'Every morning, under sunscreen',
    downtime: 'Stinging at low pH',
    cost: '€15–250',
    bodyHtml: `
      <p>The laboratory: ferulic acid added to 15% L-ascorbic acid and 1% alpha-tocopherol stabilised the solution and "doubles its photoprotection of skin", reducing sunburn cells, apoptosis and thymine-dimer formation (<a href="https://pubmed.ncbi.nlm.nih.gov/16185284/" rel="noopener nofollow" target="_blank">Lin 2005</a>). The clinic: the solution "provided significant and meaningful photoprotection for skin by all methods of evaluation", "particularly effective for reducing thymine dimer mutations known to be associated with skin cancer", in a small number of volunteers, and "would be expected to supplement the sun protection provided by sunscreens" (<a href="https://pubmed.ncbi.nlm.nih.gov/18603326/" rel="noopener nofollow" target="_blank">Murray 2008</a>). The procedure trial: with microneedling, the antioxidant side improved the photoaging score 23.9% against 6.8%, the melasma score 31.2% against 5.1% and elasticity 39.0% against 6.8% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12912124/" rel="noopener nofollow" target="_blank">Liu 2026</a>). Vitamin C's older name in the same role: it "protects porcine skin from ultraviolet radiation-induced damage" (<a href="https://pubmed.ncbi.nlm.nih.gov/1390169/" rel="noopener nofollow" target="_blank">Darr 1992</a>).</p>
      <p>Moderate, as the <a href="/collagen">collagen guide</a> grades topical antioxidants and the <a href="/sun-damage">sun damage guide</a> the actives under sunscreen. The botanical antioxidants sold beside it are graded emerging in Part 02; the sunscreen is graded in its own guide and is the half of the morning that a serum cannot do.</p>
    `,
  },
  {
    id: 'use-sensitive-barrier',
    category: 'use',
    title: 'Sensitive, reactive skin: niacinamide, ectoine and the soothing extracts',
    tldr: 'A niacinamide moisturiser improved barrier function and the dermatologist-rated condition of rosacea skin in four weeks; ectoine at 5.5–7% improved dryness and dermatitis scores in atopic skin across six studies and reduced the need for steroids; the polyhydroxy acids gave the alpha-hydroxy result with less stinging; centella\'s trials are in wounds, not faces. Emerging for the extracts, moderate for niacinamide — and the honest advice for a reactive face is fewer products, not a soothing one on top.',
    evidence: 'emerging',
    focus: 'redness',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€10–60',
    bodyHtml: `
      <p>The evidence: niacinamide on rosacea skin, with barrier function and hydration measured on the forearms and the face (<a href="https://pubmed.ncbi.nlm.nih.gov/16209160/" rel="noopener nofollow" target="_blank">Draelos 2005</a>); the ectoine systematic review, in which "topical formulations containing 5.5–7.0% ectoine positively influenced skin dryness and, consequently, pruritus and dermatitis-specific scores" and reduced the need for pharmacological therapy, including in retinoid dermatitis (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8850511/" rel="noopener nofollow" target="_blank">Kauth 2022</a>); the polyhydroxy comparison (<a href="https://pubmed.ncbi.nlm.nih.gov/15002657/" rel="noopener nofollow" target="_blank">Edison 2004</a>); centella's clinical trials, which are in diabetic ulcers and burns with hydrogels and microneedles rather than in serums on faces (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11510310/" rel="noopener nofollow" target="_blank">Witkowska 2024</a>); the snail secretion trials, in which periocular wrinkles and texture improved against placebo on the treated side while "subjects did not report a significant difference in the quality of their skin" (<a href="https://pubmed.ncbi.nlm.nih.gov/23652894/" rel="noopener nofollow" target="_blank">Fabi 2013</a>) and a later open study found both groups improved in fine lines (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7159309/" rel="noopener nofollow" target="_blank">Lim 2020</a>).</p>
      <p>Emerging for the extracts and moderate for niacinamide, in line with the <a href="/facial-redness">facial redness guide</a>'s barrier row. The <a href="/ceramides">ceramides guide</a> and <a href="/dry-skin">dry skin guide</a> cover the moisturiser that a sensitive face needs more than a serum.</p>
    `,
  },
  {
    id: 'use-eye-area',
    category: 'use',
    title: 'The eye area: what an eye serum can and cannot reach',
    tldr: 'The under-eye trials are open-label instrument studies — a multi-active serum reduced measured under-eye pigmentation 47.9% with no control; caffeine gels cut measured fluid for hours; peptide eye serums improved crow\'s-feet measures in manufacturer trials; the one vehicle-controlled data are the vitamin C half-face trial\'s bilateral hydration gain and the retinoid and hyaluronic rows of the eye guides. Emerging — the bag is fat, the circle is often shadow, and the serum reaches neither.',
    evidence: 'emerging',
    focus: 'lines',
    sessions: 'Daily',
    downtime: 'None; stinging near the eye with acids and vitamin C',
    cost: '€15–120',
    bodyHtml: `
      <p>The evidence: the dark-circle serum study reporting "an average overall reduction in under-eye hyperpigmentation of 47.94%" without a control arm (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12235579/" rel="noopener nofollow" target="_blank">Brady 2025</a>); the cyclised hexapeptide-9 trial in which the peptide reduced crow's-feet and forehead wrinkle counts, area and roughness more than retinol in a manufacturer-run randomised trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12207714/" rel="noopener nofollow" target="_blank">Chang 2025</a>); the periocular wrinkle improvement on the snail-secretion side at 12 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/23652894/" rel="noopener nofollow" target="_blank">Fabi 2013</a>); the medium-length polynucleotide eye cream that outperformed 0.1% retinol on periocular wrinkles and eye-bag parameters over 28 days in a manufacturer split-face study (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13353946/" rel="noopener nofollow" target="_blank">Ye 2026</a>); and the vitamin C half-face trial in which "the peri-orbital area improved bilaterally, probably indicating improved hydration" (<a href="https://pubmed.ncbi.nlm.nih.gov/11896774/" rel="noopener nofollow" target="_blank">Fitzpatrick 2002</a>).</p>
      <p>Emerging, as the <a href="/eye-bags">eye bags</a> and <a href="/dark-circles">dark circles</a> guides grade the caffeine, peptide and brightening eye products; those guides sort the fat pad from the shadow from the pigment and grade what treats each. An "eye serum" is the face serum in a smaller, dearer bottle, and the retinoid at the outer eye is the one topical with a tier above emerging there.</p>
    `,
  },
  {
    id: 'use-collagen-signals',
    category: 'use',
    title: '"Boosting collagen": peptides and growth factors',
    tldr: 'Palmitoyl pentapeptide at 3 parts per million reduced fine lines against the same moisturiser in a 12-week split-face trial; the "Botox-like" hexapeptide gave 48.9% subjective anti-wrinkle efficacy against 0% for placebo in Chinese subjects, measured as roughness; a cyclised hexapeptide beat retinol in a manufacturer trial; copper peptides after laser resurfacing gave no objective difference; human fibroblast-derived growth factors beat placebo on fine and coarse lines in one double-blind trial, and the EGF systematic review found trials that "abound" without enough evidence. Emerging — small, real, manufacturer-run, and not what tretinoin does on biopsy.',
    evidence: 'emerging',
    focus: 'signal',
    sessions: 'Daily; judge at 12 weeks',
    downtime: 'None',
    cost: '€40–400',
    bodyHtml: `
      <p>Peptides: pal-KTTKS "provided significant improvement vs. placebo control for reduction in wrinkles/fine lines by both quantitative technical and expert grader image analysis" (<a href="https://pubmed.ncbi.nlm.nih.gov/18492182/" rel="noopener nofollow" target="_blank">Robinson 2005</a>); argireline "total anti-wrinkle efficacy in the argireline group was 48.9%, compared with 0% in the placebo group" with roughness parameters decreased (<a href="https://pubmed.ncbi.nlm.nih.gov/23417317/" rel="noopener nofollow" target="_blank">Wang 2013</a>), and with tripeptide-10 citrulline in a four-arm study of cutometer and water-loss readings (<a href="https://pubmed.ncbi.nlm.nih.gov/28150423/" rel="noopener nofollow" target="_blank">Raikou 2017</a>); the cyclised hexapeptide-9 against retinol and vehicle (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12207714/" rel="noopener nofollow" target="_blank">Chang 2025</a>); a tripeptide-hexapeptide serum before facelift surgery with histological changes on the treated side (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12683705/" rel="noopener nofollow" target="_blank">Widgerow 2025</a>); copper tripeptide after CO2 resurfacing, where "objective evaluation found no significant improvement in wrinkles or overall skin quality" though satisfaction was higher (<a href="https://pubmed.ncbi.nlm.nih.gov/16847171/" rel="noopener nofollow" target="_blank">Miller 2006</a>). Growth factors: the fibroblast-derived product "demonstrated significantly greater reductions in the appearance of fine lines/wrinkles, coarse line/wrinkles, and overall photodamage, compared to the placebo group" (<a href="https://pubmed.ncbi.nlm.nih.gov/29240854/" rel="noopener nofollow" target="_blank">Kadoya 2017</a>); the EGF review found "uncontrolled or randomized trials abound, so that does not represent enough evidence" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8423211/" rel="noopener nofollow" target="_blank">Miller-Kobisher 2021</a>); a 2026 pilot comparing synthetic and human-derived EGF found "global wrinkle severity ratings changed minimally in both cohorts" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13184420/" rel="noopener nofollow" target="_blank">Abud 2026</a>); the review of the field puts topical growth factors at evidence levels II and III (<a href="https://pubmed.ncbi.nlm.nih.gov/24810127/" rel="noopener nofollow" target="_blank">Fabi 2014</a>).</p>
      <p>Emerging, as the <a href="/collagen">collagen</a>, <a href="/collagen-loss">collagen loss</a> and <a href="/crows-feet">crow's feet</a> guides grade them, and limited for the "Botox in a bottle" claim in the <a href="/botox">botox guide</a>. A peptide small enough to enter can signal a fibroblast; a growth factor is usually too large to enter intact skin (<a href="https://pubmed.ncbi.nlm.nih.gov/10839713/" rel="noopener nofollow" target="_blank">Bos 2000</a>), which is why the products that work are paired with needling in the trials.</p>
    `,
  },
  {
    id: 'use-regenerative-claims',
    category: 'use',
    title: 'Topical collagen, exosomes, stem cells and "NAD+" serums',
    tldr: 'A six-month randomised, double-blind, factorial trial of topical and oral collagen peptides in 56 women with thin skin found no benefit on any clinical, instrumental or histological measure; topical exosomes have 17 mostly single-arm studies, no consensus, no approved product and a 500-Dalton wall in the way; a deer stem-cell extract cream improved no more than its placebo on blinded assessment; NAD-precursor serums have formulation papers and no clinical trial. Limited: the most expensive shelf in the shop, graded on what it has published.',
    evidence: 'limited',
    focus: 'marketing',
    sessions: '—',
    downtime: '—',
    cost: '€60–500 for a molecule that does not enter',
    bodyHtml: `
      <p>The collagen trial: "oral or topical collagen peptides used alone or in combination do not have benefits on forearm skin after 6 months of intervention, and therefore should not be used routinely in this population" — with dermal elasticity, thickness, echogenicity and immunohistochemistry all unchanged (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9884723/" rel="noopener nofollow" target="_blank">Guadanhim 2023</a>). Exosomes: "the current published research literature does not yet provide a clear consensus on long-term use for skin rejuvenation" and "there are no currently US FDA-approved exosome products" (<a href="https://pubmed.ncbi.nlm.nih.gov/36597716/" rel="noopener nofollow" target="_blank">Vyas 2023</a>); the scoping review of 17 studies found 76% reporting improvements, "small sample sizes and short follow-up", "non-randomized, single-arm designs and potential conflicts of interest", and granulomas, necrosis and allergic reactions after injection (<a href="https://pubmed.ncbi.nlm.nih.gov/41931695/" rel="noopener nofollow" target="_blank">Wang 2026</a>). Stem cells: "blinded investigator assessments did not detect any statistically significant differences between the two halves of the face" (<a href="https://pubmed.ncbi.nlm.nih.gov/31012565/" rel="noopener nofollow" target="_blank">Alhaddad 2019</a>). The size rule that makes all of them implausible as topicals (<a href="https://pubmed.ncbi.nlm.nih.gov/10839713/" rel="noopener nofollow" target="_blank">Bos 2000</a>).</p>
      <p>Limited, as the <a href="/collagen-loss">collagen loss</a> and <a href="/regenerative-aesthetics">biostimulator</a> guides grade the exosome and stem-cell products, and as the <a href="/aging-hands">aging hands guide</a> grades the collagen creams. The <a href="/collagen">collagen guide</a> grades the oral peptides on their own trials; the topical ones have now had theirs.</p>
    `,
  },
];

const products: Section[] = [
  {
    id: 'prod-azelaic',
    category: 'product',
    title: 'Azelaic acid (15% gel and 20% cream on prescription; 10% cosmetic)',
    tldr: 'A dicarboxylic acid that calms inflammation, slows keratinisation, kills acne bacteria and inhibits tyrosinase: phase 3 trials and a Cochrane review for rosacea, randomised head-to-heads with hydroquinone for melasma, a Cochrane placing for acne beside tretinoin, and safety in pregnancy. The 15–20% strengths are medicines in most of Europe; the 10% cosmetics have no trials of their own. Strong for rosacea, moderate for pigment and acne, and the one active on this page a dermatologist prescribes.',
    evidence: 'strong',
    focus: 'redness',
    note: 'Top pick: 15% gel for redness and bumps, 20% cream for melasma, twice daily for twelve weeks — from the pharmacy, not the counter',
    sessions: 'Twice daily',
    downtime: 'Stinging for a fortnight',
    cost: '€10–25 (prescription); €15–35 (10% cosmetic)',
    bodyHtml: `
      <p>The evidence is in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/12789172/" rel="noopener nofollow" target="_blank">Thiboutot 2003</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/14623704/" rel="noopener nofollow" target="_blank">Elewski 2003</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/16924055/" rel="noopener nofollow" target="_blank">Liu 2006</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6481562/" rel="noopener nofollow" target="_blank">van Zuuren 2015</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/1816137/" rel="noopener nofollow" target="_blank">Baliña 1991</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/2528260/" rel="noopener nofollow" target="_blank">Verallo-Rowell 1989</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10339666/" rel="noopener nofollow" target="_blank">Albzea 2023</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7193765/" rel="noopener nofollow" target="_blank">Liu 2020</a>). The abridged Cochrane update with GRADE assessments sets it beside ivermectin, brimonidine and the oral options for rosacea (<a href="https://pubmed.ncbi.nlm.nih.gov/26099423/" rel="noopener nofollow" target="_blank">van Zuuren 2015</a>).</p>
      <p>Strong, as the <a href="/facial-redness">facial redness guide</a> grades the 15% gel; moderate for melasma and acne marks as the <a href="/dark-spots">dark spots guide</a> grades it. The stinging is real for the first two weeks and settles; the 10% products are a reasonable maintenance strength once the prescription one has worked.</p>
    `,
  },
  {
    id: 'prod-vitamin-c',
    category: 'product',
    title: 'Vitamin C (L-ascorbic acid 10–20%; ascorbyl phosphate, tetrahexyldecyl ascorbate and the derivatives)',
    tldr: 'The cofactor of collagen synthesis and the skin\'s main water-soluble antioxidant: enters only below pH 3.5, saturates at 20%, and the derivatives that survive a bottle did not raise skin levels in the absorption studies; a six-month placebo-controlled trial and a half-face biopsy trial for photoaging, a systematic review of seven small studies, 62.5% against hydroquinone\'s 93% for melasma, the ferulic-vitamin E photoprotection data, and a randomised acne trial for 5% ascorbyl phosphate. Moderate — the morning serum with the most evidence, if the bottle has kept it alive.',
    evidence: 'moderate',
    focus: 'antioxidant',
    note: 'Top pick: 10–15% L-ascorbic acid with vitamin E and ferulic acid in an opaque, airless bottle, every morning under sunscreen; ascorbyl phosphate for acne-prone or stinging skin',
    sessions: 'Every morning',
    downtime: 'Stinging at low pH; yellow staining when oxidised',
    cost: '€15–250',
    bodyHtml: `
      <p>The absorption and stability rules (<a href="https://pubmed.ncbi.nlm.nih.gov/11207686/" rel="noopener nofollow" target="_blank">Pinnell 2001</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/23174055/" rel="noopener nofollow" target="_blank">Stamford 2012</a>) and the trials (<a href="https://pubmed.ncbi.nlm.nih.gov/12823436/" rel="noopener nofollow" target="_blank">Humbert 2003</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/11896774/" rel="noopener nofollow" target="_blank">Fitzpatrick 2002</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/37128827/" rel="noopener nofollow" target="_blank">Correia 2023</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/15304189/" rel="noopener nofollow" target="_blank">Espinal-Perez 2004</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/18603326/" rel="noopener nofollow" target="_blank">Murray 2008</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/20367669/" rel="noopener nofollow" target="_blank">Woolery-Lloyd 2010</a>) are in Part 01; a double-blind randomised trial found twice-daily 5% vitamin C improved the elasticity and thickness of the thin, bruising forearm skin of the elderly — "a localized scurvy" (<a href="https://pubmed.ncbi.nlm.nih.gov/28833652/" rel="noopener nofollow" target="_blank">Humbert 2018</a>).</p>
      <p>Moderate, as the <a href="/dull-skin">dull skin</a>, <a href="/crows-feet">crow's feet</a> and <a href="/collagen-loss">collagen loss</a> guides grade it, and strong in the <a href="/collagen">collagen guide</a> as the collagen cofactor; emerging for pigment in the <a href="/dark-spots">dark spots guide</a>. A serum that has turned orange or brown has oxidised and should be thrown away; a serum that lists a derivative has traded evidence for shelf life, which for the acne indication is a fair trade and for photoaging is not.</p>
    `,
  },
  {
    id: 'prod-niacinamide',
    category: 'product',
    title: 'Niacinamide (nicotinamide) 4–5%',
    tldr: 'Vitamin B3, water-soluble, stable, tolerated at any pH and beside any other active: a double-blind split-face trial for fine lines, spots, blotchiness, sallowness and elasticity; a randomised head-to-head with hydroquinone for melasma; a randomised comparison with clindamycin for acne; a barrier trial in rosacea. The most versatile active on the shelf, at the lowest price, with the smallest effect per indication.',
    evidence: 'moderate',
    focus: 'lines',
    note: 'Top pick: 5% in any serum or moisturiser, morning or night, on any skin — the one active with no reason not to',
    sessions: 'Daily',
    downtime: 'None; flushing at 10% in some',
    cost: '€8–40',
    bodyHtml: `
      <p>The trials are in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/16029679/" rel="noopener nofollow" target="_blank">Bissett 2005</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/18492135/" rel="noopener nofollow" target="_blank">Bissett 2004</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/12100180/" rel="noopener nofollow" target="_blank">Hakozaki 2002</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3142702/" rel="noopener nofollow" target="_blank">Navarrete-Solís 2011</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/7657446/" rel="noopener nofollow" target="_blank">Shalita 1995</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/16209160/" rel="noopener nofollow" target="_blank">Draelos 2005</a>); combined with 1% undecylenoyl phenylalanine it beat both vehicle and 5% niacinamide alone on hyperpigmentation at eight weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/19958429/" rel="noopener nofollow" target="_blank">Bissett 2009</a>).</p>
      <p>Moderate everywhere it is graded — the <a href="/dark-spots">dark spots</a>, <a href="/dull-skin">dull skin</a>, <a href="/collagen">collagen</a> and <a href="/anti-aging-30s">30s</a> guides agree. Five percent is the trial dose; ten and twenty percent products have no trials showing more and some users who flush. The old warning against pairing it with vitamin C comes from a 1960s test-tube reaction that does not happen on skin.</p>
    `,
  },
  {
    id: 'prod-hyaluronic',
    category: 'product',
    title: 'Hyaluronic acid and the humectants (glycerin, polyglutamic acid, panthenol)',
    tldr: 'Sugars that bind water in the surface layers: 0.1% hyaluronic creams of every molecular weight raised hydration and elasticity against placebo, the low-molecular fractions reduced wrinkle depth on profilometry, a low-molecular lotion out-hydrated the high-molecular one and vehicle in elderly dry skin, and 20% glycerin matched urea. Moderate for hydration for hours; nothing about a serum\'s hyaluronic acid resembles the injected one, and "plumping" is water that leaves by evening without a cream over it.',
    evidence: 'moderate',
    focus: 'hydration',
    note: 'Top pick: a low-molecular-weight hyaluronic or glycerin serum on damp skin under a moisturiser — the cheapest bottle on the shelf does this job',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€8–80',
    bodyHtml: `
      <p>The trials are in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/22052267/" rel="noopener nofollow" target="_blank">Pavicic 2011</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/38829483/" rel="noopener nofollow" target="_blank">Muhammad 2024</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3970829/" rel="noopener nofollow" target="_blank">Jegasothy 2014</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/29601621/" rel="noopener nofollow" target="_blank">Sundaram 2018</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/12013198/" rel="noopener nofollow" target="_blank">Lodén 2002</a>).</p>
      <p>Moderate, as the <a href="/dry-skin">dry skin</a>, <a href="/collagen">collagen</a> and <a href="/crows-feet">crow's feet</a> guides grade it. The molecule is over a million Daltons at full size and does not enter; the low-molecular fractions in the trials sit in the upper layers. The <a href="/skin-boosters">skin boosters guide</a> grades the injected version, which is a different treatment with the same name.</p>
    `,
  },
  {
    id: 'prod-aha-pha',
    category: 'product',
    title: 'Alpha- and polyhydroxy acids (glycolic, lactic, mandelic, gluconolactone) at 5–10%',
    tldr: 'Acids that loosen the bonds between dead cells and, at the low concentrations of a leave-on, stimulate the epidermis: vehicle-controlled trials of 8% glycolic and lactic acid and 5% daily glycolic acid for photodamage, texture and discolouration, and a polyhydroxy regimen that matched the alpha-hydroxy one with far less stinging. Moderate for texture and tone; the concentrated versions are the peels of the peels guide, and the open question in the reviews is whether daily acid use increases sun damage.',
    evidence: 'moderate',
    focus: 'exfoliant',
    note: 'Top pick: 5–8% lactic or glycolic acid, or gluconolactone on a face that stings, two or three nights a week, with sunscreen every morning',
    sessions: '2–3 nights a week',
    downtime: 'Stinging, flaking early',
    cost: '€10–40',
    bodyHtml: `
      <p>The trials are in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/8651713/" rel="noopener nofollow" target="_blank">Stiller 1996</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/9598014/" rel="noopener nofollow" target="_blank">Thibault 1998</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/15002657/" rel="noopener nofollow" target="_blank">Edison 2004</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/26580881/" rel="noopener nofollow" target="_blank">Mekas 2015</a>); the reviews conclude that "whether AHA is a friend or foe of human skin depends on its concentration" and that "whether AHAs enhance or decrease photo damage of the skin remains unclear" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6017965/" rel="noopener nofollow" target="_blank">Tang 2018</a>), and that at the right concentration they are "an ingredient for cosmetic products or medical devices with proven efficacy" (<a href="https://pubmed.ncbi.nlm.nih.gov/22916351/" rel="noopener nofollow" target="_blank">Babilas 2012</a>).</p>
      <p>Moderate, as the <a href="/dull-skin">dull skin</a> and <a href="/collagen">collagen</a> guides grade the leave-on acids, and emerging for pigment in the <a href="/dark-spots">dark spots guide</a>. Not on the same night as a retinoid on a face that reacts; not at all on a face with rosacea; and never without the sunscreen the reviews' open question demands. The <a href="/chemical-peels">peels guide</a> grades the 20–70% versions.</p>
    `,
  },
  {
    id: 'prod-bha',
    category: 'product',
    title: 'Salicylic acid 0.5–2% and lipohydroxy acid',
    tldr: 'The oil-soluble acid that travels into the pore: a leave-on salicylic dermocosmetic reduced the benzoyl peroxide needed for acne and cut relapse in a randomised trial, the Cochrane review found it no different from tretinoin on low-quality evidence, and on biopsy plain salicylic acid changed nothing where its lipohydroxy derivative thickened the epidermis. Moderate for oily, congested and acne-prone skin; emerging for pores and aging.',
    evidence: 'moderate',
    focus: 'acne',
    note: 'Top pick: 2% salicylic acid on oily or congested skin, two to seven nights a week; lipohydroxy acid for the sensitive version',
    sessions: '2–7 nights a week',
    downtime: 'Dryness',
    cost: '€10–35',
    bodyHtml: `
      <p>The evidence is in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/38051857/" rel="noopener nofollow" target="_blank">Khammari 2023</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7193765/" rel="noopener nofollow" target="_blank">Liu 2020</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/9252775/" rel="noopener nofollow" target="_blank">Piérard 1997</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/27050699/" rel="noopener nofollow" target="_blank">Kligman 2016</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/26916232/" rel="noopener nofollow" target="_blank">Araviiskaia 2016</a>).</p>
      <p>Moderate for acne and emerging for pores, as the <a href="/dull-skin">dull skin guide</a> grades it; the 20–30% peel is strong in the <a href="/chemical-peels">peels guide</a>. Salicylic acid is an aspirin relative, absorbed a little through skin, and the low leave-on concentrations are considered safe in pregnancy by most guidance; the peels are not.</p>
    `,
  },
  {
    id: 'prod-tranexamic',
    category: 'product',
    title: 'Tranexamic acid 2–5%, topical',
    tldr: 'The antifibrinolytic that treats melasma by tablet, applied to the skin: no better than its vehicle in the one double-blind split-face trial despite lightening on both sides, smaller effects than the oral or injected routes in a 22-trial meta-analysis, and a useful adjunct with microneedling. Moderate for a mixed picture — worth a place in a pigment routine, not the routine.',
    evidence: 'moderate',
    focus: 'pigment',
    note: 'Top pick as an add-on to azelaic acid or a tyrosinase inhibitor for melasma, not alone; the tablet is the dark spots guide\'s',
    sessions: 'Twice daily',
    downtime: 'Erythema in some',
    cost: '€15–50',
    bodyHtml: `
      <p>The evidence is in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/22506692/" rel="noopener nofollow" target="_blank">Kanechorn Na Ayuthaya 2012</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/38843906/" rel="noopener nofollow" target="_blank">Calacattawi 2024</a>); with microneedling, topical therapies including tranexamic acid improved melasma "with a large effect" beyond eight weeks against topical therapy alone (<a href="https://pubmed.ncbi.nlm.nih.gov/33857549/" rel="noopener nofollow" target="_blank">Bailey 2022</a>).</p>
      <p>Moderate, as the <a href="/dark-spots">dark spots guide</a> grades the topical route and strong as it grades the oral one. The <a href="/mesotherapy">mesotherapy guide</a> grades the injected version, which matched the tablet in small trials.</p>
    `,
  },
  {
    id: 'prod-brighteners',
    category: 'product',
    title: 'The tyrosinase inhibitors: thiamidol, cysteamine, kojic acid, arbutin, licorice',
    tldr: 'The molecules that block the enzyme that makes melanin: thiamidol with a vehicle-controlled trial and two head-to-heads with hydroquinone, cysteamine with seven randomised trials matching hydroquinone, kojic acid adding to hydroquinone in randomised comparisons and irritating more, arbutin a glucoside of hydroquinone with clinical data and a caution that it can release its parent, licorice an extract with reviews and few trials. Moderate for thiamidol and cysteamine, emerging for the rest — all of them under an SPF 50 or nothing.',
    evidence: 'moderate',
    focus: 'pigment',
    note: 'Top pick: thiamidol for the counter, cysteamine 5% from the pharmacy, for melasma and marks over twelve weeks with sunscreen',
    sessions: 'Twice daily (thiamidol); a timed short contact then rinse (cysteamine)',
    downtime: 'Irritation; cysteamine smells of sulphur',
    cost: '€25–120',
    bodyHtml: `
      <p>The trials are in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/30825454/" rel="noopener nofollow" target="_blank">Arrowitz 2019</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/33988887/" rel="noopener nofollow" target="_blank">Lima 2021</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/39673630/" rel="noopener nofollow" target="_blank">Mawu 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/10417583/" rel="noopener nofollow" target="_blank">Lim 1999</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/8634807/" rel="noopener nofollow" target="_blank">Garcia 1996</a>); kojic acid with hydroquinone was the most effective of four regimens in a randomised comparison (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3726874/" rel="noopener nofollow" target="_blank">Deo 2013</a>); the arbutin review notes that "caution is recommended for the use of arbutin-containing products, especially from the viewpoint that hydroquinone may be generated during product use" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8301119/" rel="noopener nofollow" target="_blank">Boo 2021</a>); the review of alternatives to hydroquinone covers the rest of the shelf (<a href="https://pubmed.ncbi.nlm.nih.gov/18045355/" rel="noopener nofollow" target="_blank">Draelos 2007</a>).</p>
      <p>Moderate for thiamidol and cysteamine and emerging for kojic acid, arbutin and licorice, exactly as the <a href="/dark-spots">dark spots guide</a> grades them, with that guide's note that the 2024 European regulation capped kojic acid at 1% and alpha-arbutin at 2% in face products.</p>
    `,
  },
  {
    id: 'prod-peptides',
    category: 'product',
    title: 'Peptides (palmitoyl pentapeptide, Matrixyl, argireline, copper peptides, the newer hexapeptides)',
    tldr: 'Short chains of amino acids small enough to enter and signal: one split-face vehicle-controlled trial at parts per million for fine lines, a placebo-controlled argireline trial with a subjective 48.9% against 0%, a cyclised hexapeptide that beat retinol in a manufacturer trial, and copper peptides that did nothing objective after laser. Emerging — small measured gains from company studies, and a "Botox in a bottle" claim that the botox guide grades limited.',
    evidence: 'emerging',
    focus: 'signal',
    note: 'Not a pick over a retinoid; reasonable as a night serum for someone who cannot tolerate one, with expectations set by the trials',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€30–300',
    bodyHtml: `
      <p>The trials are in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/18492182/" rel="noopener nofollow" target="_blank">Robinson 2005</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/23417317/" rel="noopener nofollow" target="_blank">Wang 2013</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/28150423/" rel="noopener nofollow" target="_blank">Raikou 2017</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12207714/" rel="noopener nofollow" target="_blank">Chang 2025</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12683705/" rel="noopener nofollow" target="_blank">Widgerow 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/16847171/" rel="noopener nofollow" target="_blank">Miller 2006</a>); the 2024 review's verdict that the peptide evidence "is the strongest" among cosmeceuticals (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11375026/" rel="noopener nofollow" target="_blank">Chan 2024</a>) rests on those same company-run split-face designs.</p>
      <p>Emerging, as the <a href="/collagen">collagen</a> and <a href="/crows-feet">crow's feet</a> guides grade them; limited in the <a href="/botox">botox guide</a> for the muscle-relaxing claim and in the <a href="/anti-aging-40s">40s guide</a> as a category. The <a href="/retinoids">retinoids guide</a> grades the molecule they are sold as an alternative to, and the comparison is not close.</p>
    `,
  },
  {
    id: 'prod-growth-factors',
    category: 'product',
    title: 'Growth factors, snail secretion and "stem-cell" extracts',
    tldr: 'Proteins from cultured human fibroblasts, plants, deer or snails, most of them far above the 500-Dalton limit for entry: one double-blind placebo-controlled trial of fibroblast-derived growth factors that reduced fine and coarse lines, a snail split-face trial that improved periocular wrinkles against placebo while subjects noticed no difference, an EGF pilot in which wrinkle severity "changed minimally", and a stem-cell cream whose placebo side improved as much. Emerging, at prestige prices.',
    evidence: 'emerging',
    focus: 'signal',
    note: 'Not a pick; the one with a placebo-controlled win is the human-fibroblast product, and it still sits below every moderate row',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€60–400',
    bodyHtml: `
      <p>The evidence is in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/29240854/" rel="noopener nofollow" target="_blank">Kadoya 2017</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8423211/" rel="noopener nofollow" target="_blank">Miller-Kobisher 2021</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13184420/" rel="noopener nofollow" target="_blank">Abud 2026</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/24810127/" rel="noopener nofollow" target="_blank">Fabi 2014</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/23652894/" rel="noopener nofollow" target="_blank">Fabi 2013</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7159309/" rel="noopener nofollow" target="_blank">Lim 2020</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/31012565/" rel="noopener nofollow" target="_blank">Alhaddad 2019</a>); the review of the field notes that growth factors "can accelerate skin healing after laser resurfacing", which is the setting where a large protein can reach the dermis (<a href="https://pubmed.ncbi.nlm.nih.gov/24810127/" rel="noopener nofollow" target="_blank">Fabi 2014</a>).</p>
      <p>Emerging, as the <a href="/collagen">collagen</a> and <a href="/collagen-loss">collagen loss</a> guides grade them, and limited in the <a href="/anti-aging-40s">40s guide</a>. After a fractional laser or microneedling, when the barrier is open, the argument for them is better than on intact skin; the <a href="/regenerative-aesthetics">biostimulator guide</a> grades the injected growth factors of platelet-rich plasma.</p>
    `,
  },
  {
    id: 'prod-botanical-antioxidants',
    category: 'product',
    title: 'Botanical antioxidants and retinoid alternatives (resveratrol, green tea, coenzyme Q10, idebenone, bakuchiol)',
    tldr: 'Molecules that quench radicals in a dish: green tea in a double-blind placebo-controlled trial improved elastic tissue on biopsy and nothing a grader could see; idebenone produced 26–37% instrument improvements in an uncontrolled six-week study; coenzyme Q10 has reviews and industry studies; bakuchiol matched 0.5% retinol for wrinkles and pigment in one randomised trial with less scaling. Emerging — plausible chemistry, thin trials, and vitamin C with E and ferulic acid as the antioxidant that has the human data.',
    evidence: 'emerging',
    focus: 'antioxidant',
    note: 'Top pick within the tier: bakuchiol for skin that cannot tolerate a retinoid; the rest are fine additions to a vitamin C serum, not reasons to buy one',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€20–150',
    bodyHtml: `
      <p>Green tea: "no significant differences in clinical grading were found between the green tea-treated and placebo groups, other than higher subjective scores of irritation", with histologic improvement in elastic tissue (<a href="https://pubmed.ncbi.nlm.nih.gov/16029678/" rel="noopener nofollow" target="_blank">Chiu 2005</a>); idebenone 1%: a 26% reduction in roughness, 37% more hydration, 29% fewer fine lines and 33% global improvement at six weeks, uncontrolled (<a href="https://pubmed.ncbi.nlm.nih.gov/17129261/" rel="noopener nofollow" target="_blank">McDaniel 2005</a>); coenzyme Q10: a review of 36 publications reporting reduced wrinkle depth with topical use (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11324190/" rel="noopener nofollow" target="_blank">Lain 2024</a>); bakuchiol: "comparable with retinol in its ability to improve photoageing and is better tolerated" in 44 people over 12 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/29947134/" rel="noopener nofollow" target="_blank">Dhaliwal 2019</a>), on gene-expression profiling that made it "a functional analogue of retinol" (<a href="https://pubmed.ncbi.nlm.nih.gov/24471735/" rel="noopener nofollow" target="_blank">Chaudhuri 2014</a>) and a systematic review of seven clinical studies (<a href="https://pubmed.ncbi.nlm.nih.gov/36176207/" rel="noopener nofollow" target="_blank">Puyana 2022</a>); the cosmeceutical review covers the botanicals as a class (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11375026/" rel="noopener nofollow" target="_blank">Chan 2024</a>).</p>
      <p>Emerging, as the <a href="/retinoids">retinoids guide</a> grades bakuchiol and the <a href="/collagen">collagen guide</a> grades polyphenols within its moderate antioxidant row. Resveratrol's human data are formulation and animal studies; the vitamin C–E–ferulic combination in Part 01 is the antioxidant with a trial on people.</p>
    `,
  },
  {
    id: 'prod-regenerative-marketing',
    category: 'product',
    title: 'Topical collagen, exosomes, stem cells, NAD+ and "DNA repair" serums',
    tldr: 'The molecules that cannot enter intact skin and the ones that have not been tested on it: collagen peptides failed a six-month randomised trial with biopsies, exosomes have no approved product and no consensus, stem-cell extracts matched their placebo, and NAD-precursor serums exist as formulation papers. Limited — the walk-away row, at the highest prices on the shelf.',
    evidence: 'limited',
    focus: 'marketing',
    note: 'Do not buy for the claim; a moisturiser with a story is still a moisturiser',
    sessions: '—',
    downtime: '—',
    cost: '€60–500',
    bodyHtml: `
      <p>The evidence is in Part 01 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9884723/" rel="noopener nofollow" target="_blank">Guadanhim 2023</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/36597716/" rel="noopener nofollow" target="_blank">Vyas 2023</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/41931695/" rel="noopener nofollow" target="_blank">Wang 2026</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/31012565/" rel="noopener nofollow" target="_blank">Alhaddad 2019</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/10839713/" rel="noopener nofollow" target="_blank">Bos 2000</a>). The medium-length polynucleotide eye cream is the one recent entrant with a split-face comparison, against retinol rather than vehicle and by its manufacturer (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13353946/" rel="noopener nofollow" target="_blank">Ye 2026</a>).</p>
      <p>Limited, as the <a href="/collagen-loss">collagen loss</a>, <a href="/regenerative-aesthetics">biostimulator</a> and <a href="/aging-hands">aging hands</a> guides grade the class. The <a href="/collagen">collagen guide</a> grades the oral peptides that these products borrow their evidence from, and explains why swallowing a peptide and smearing one are different experiments.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-stacking',
    category: 'safety',
    title: 'Irritation and the stacked routine',
    tldr: 'The commonest harm from serums is the routine, not the molecule: an acid, a retinoid, a low-pH vitamin C and a fragranced "brightening" serum on the same face produce the stinging, blotchy, flaking skin that the products were bought to fix, and the alpha-hydroxy trials record stinging and burning as their main adverse effect. Polyhydroxy acids gave the same result with less of it; niacinamide and hyaluronic acid sit beside anything; one new product at a time, patch-tested, is the rule.',
    bodyHtml: `
      <p>The trials record it: "stinging and burning were significantly worse for subjects in the AHA treatment group at both week 6 and 12" against the polyhydroxy regimen (<a href="https://pubmed.ncbi.nlm.nih.gov/15002657/" rel="noopener nofollow" target="_blank">Edison 2004</a>); the acid reviews list swelling, burning and pruritus (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6017965/" rel="noopener nofollow" target="_blank">Tang 2018</a>); azelaic acid's first fortnight stings (<a href="https://pubmed.ncbi.nlm.nih.gov/12789172/" rel="noopener nofollow" target="_blank">Thiboutot 2003</a>); kojic acid irritated more than hydroquinone (<a href="https://pubmed.ncbi.nlm.nih.gov/8634807/" rel="noopener nofollow" target="_blank">Garcia 1996</a>); cysteamine caused more erythema, burning and itching than placebo (<a href="https://pubmed.ncbi.nlm.nih.gov/39673630/" rel="noopener nofollow" target="_blank">Mawu 2024</a>); ectoine reduced retinoid dermatitis in one of the reviewed studies (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8850511/" rel="noopener nofollow" target="_blank">Kauth 2022</a>).</p>
      <p>Rules: one active per slot — antioxidant in the morning, retinoid or acid at night, never the acid and the retinoid on the same night on a face that reacts; a fortnight between new products; a patch test behind the ear for anything with an acid, a fragrance or an essential oil; and, when the skin is red and stinging, a week of cleanser, moisturiser and sunscreen only, which fixes most of what a dermatologist sees in a "skincare" consultation.</p>
    `,
  },
  {
    id: 'safety-pigment-sun',
    category: 'safety',
    title: 'Sun, acids and the pigment paradox',
    tldr: 'Every pigment active on this page relapses without sunscreen, the acids may increase the skin\'s sensitivity to ultraviolet light and the reviews cannot yet say whether daily acid use adds to photodamage, and an irritated face in darker skin pigments where it was irritated. Vitamin C protects against some ultraviolet damage and replaces no sunscreen. The morning order is antioxidant, then sunscreen, then the day.',
    bodyHtml: `
      <p>The acid question — "whether AHAs enhance or decrease photo damage of the skin remains unclear" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6017965/" rel="noopener nofollow" target="_blank">Tang 2018</a>); the antioxidant's role "different from sunscreens" (<a href="https://pubmed.ncbi.nlm.nih.gov/18603326/" rel="noopener nofollow" target="_blank">Murray 2008</a>); the melasma trials, every one of which ran under a broad-spectrum sunscreen (<a href="https://pubmed.ncbi.nlm.nih.gov/1816137/" rel="noopener nofollow" target="_blank">Baliña 1991</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/30825454/" rel="noopener nofollow" target="_blank">Arrowitz 2019</a>); the risk that arbutin releases hydroquinone in the product (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8301119/" rel="noopener nofollow" target="_blank">Boo 2021</a>) and the ochronosis that took hydroquinone off the cosmetic shelf (<a href="https://pubmed.ncbi.nlm.nih.gov/18045355/" rel="noopener nofollow" target="_blank">Draelos 2007</a>).</p>
      <p>Rules: SPF 50 every morning for anyone using an acid, a retinoid or a pigment active, which is everyone this guide is for; acids at night; a lower concentration and a slower start in darker skin, where post-inflammatory pigmentation follows irritation; and no hydroquinone from an unregulated source, where the concentration and the contaminants are unknown. The <a href="/dark-spots">dark spots guide</a> and <a href="/sun-damage">sun damage guide</a> carry the rest.</p>
    `,
  },
  {
    id: 'safety-pregnancy',
    category: 'safety',
    title: 'Pregnancy, breastfeeding and the actives',
    tldr: 'Azelaic acid, niacinamide, vitamin C, hyaluronic acid, glycolic and lactic acid at cosmetic strengths and low-concentration salicylic acid are the actives most guidance considers usable in pregnancy; retinoids and hydroquinone are not; topical tranexamic acid, cysteamine, thiamidol and the peptides have no pregnancy data and no reason to be used until there is. Melasma often arrives with pregnancy and mostly fades after it, which is the argument for sunscreen and patience over a shelf of brighteners.',
    bodyHtml: `
      <p>The azelaic acid trials excluded pregnancy but the molecule's pregnancy record is the reason the <a href="/dark-spots">dark spots guide</a> calls it "safe in pregnancy" and the reason it is the melasma prescription of choice for a pregnant patient (<a href="https://pubmed.ncbi.nlm.nih.gov/1816137/" rel="noopener nofollow" target="_blank">Baliña 1991</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9122278/" rel="noopener nofollow" target="_blank">González-Molina 2022</a>). The <a href="/retinoids">retinoids guide</a> sets out the retinoid rule and the <a href="/dark-spots">dark spots guide</a> the hydroquinone one.</p>
      <p>Rules: a pregnancy routine is sunscreen, a gentle cleanser, a moisturiser, azelaic acid if there is melasma or acne, niacinamide and vitamin C if wanted, and nothing whose safety data consist of the absence of reports.</p>
    `,
  },
  {
    id: 'safety-allergy-quality',
    category: 'safety',
    title: 'Allergy, contamination and the unregulated bottle',
    tldr: 'Contact allergy to a serum is usually to a fragrance, a preservative, a plant extract or a vitamin E derivative rather than to the headline active; the thiamidol head-to-head recorded a case of allergic contact dermatitis; arbutin can generate hydroquinone in the bottle; and products bought from marketplaces outside the European system have no obligation to state what they contain. The ingredient list and the CPNP number are the only safety documents a serum carries.',
    bodyHtml: `
      <p>The reports: allergic contact dermatitis recorded in the thiamidol-versus-hydroquinone trial, with only mild effects in the thiamidol group (<a href="https://pubmed.ncbi.nlm.nih.gov/33988887/" rel="noopener nofollow" target="_blank">Lima 2021</a>); arbutin's hydroquinone problem (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8301119/" rel="noopener nofollow" target="_blank">Boo 2021</a>); the 500-Dalton rule that makes large molecules poor sensitisers and small ones capable (<a href="https://pubmed.ncbi.nlm.nih.gov/10839713/" rel="noopener nofollow" target="_blank">Bos 2000</a>); the regulatory gap in which cosmetic efficacy is asserted rather than shown (<a href="https://pubmed.ncbi.nlm.nih.gov/19695473/" rel="noopener nofollow" target="_blank">Draelos 2009</a>).</p>
      <p>Rules: fragrance-free where possible on a reactive face; a patch test for any new product; a product from a company that answers the concentration question; and a dermatologist for a rash that spreads beyond where the product went, which is the sign of an allergy rather than an irritation.</p>
    `,
  },
  {
    id: 'safety-who-not',
    category: 'safety',
    title: 'Who should not buy one',
    tldr: 'Anyone with active rosacea or eczema buying an acid or a low-pH vitamin C; anyone pregnant buying a retinoid, hydroquinone or an untested brightener; anyone expecting a serum to lift, fill, tighten or replace the retinoid and sunscreen they do not use; and anyone whose routine already has six steps and a rash. The serum a dermatologist would add is usually the one that replaces two others.',
    bodyHtml: `
      <p>The reasoning is in the safety rows above and in Part 01's tiers: the acids and low-pH vitamin C sting a rosacea face (<a href="https://pubmed.ncbi.nlm.nih.gov/15002657/" rel="noopener nofollow" target="_blank">Edison 2004</a>), the placebo sides of the split-face trials improved as much as the active in the growth-factor and stem-cell studies (<a href="https://pubmed.ncbi.nlm.nih.gov/31012565/" rel="noopener nofollow" target="_blank">Alhaddad 2019</a>), and the collagen serum failed its trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9884723/" rel="noopener nofollow" target="_blank">Guadanhim 2023</a>).</p>
      <p>The alternatives for the excluded: the <a href="/facial-redness">facial redness guide</a> for rosacea, the <a href="/dry-skin">dry skin guide</a> for a barrier that will not tolerate actives, the <a href="/retinoids">retinoids guide</a> for the one topical that changes the dermis, the <a href="/skin-tightening">tightening</a> and <a href="/fillers">filler</a> guides for what a serum is being asked to do and cannot.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-vitamin-c-form',
    category: 'faq',
    title: 'Which vitamin C, and what percentage?',
    tldr: 'L-ascorbic acid at 10–20% in a low-pH, opaque, airless formula, ideally with vitamin E and ferulic acid; the derivatives are gentler and more stable and did not raise skin levels in the absorption studies, except that ascorbyl phosphate has its own acne trial.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/11207686/" rel="noopener nofollow" target="_blank">Pinnell 2001</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/16185284/" rel="noopener nofollow" target="_blank">Lin 2005</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/20367669/" rel="noopener nofollow" target="_blank">Woolery-Lloyd 2010</a>.)</p>
    `,
  },
  {
    id: 'faq-c-and-niacinamide',
    category: 'faq',
    title: 'Can I use vitamin C and niacinamide together?',
    tldr: 'Yes. The warning comes from a heated test-tube reaction that does not happen at skin temperature; both have split-face trials on their own and no trial shows one cancelling the other.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/16029679/" rel="noopener nofollow" target="_blank">Bissett 2005</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/12823436/" rel="noopener nofollow" target="_blank">Humbert 2003</a>.) Layer the vitamin C first at its low pH, then the niacinamide, or use them at different times of day if either stings.</p>
    `,
  },
  {
    id: 'faq-how-long',
    category: 'faq',
    title: 'How long before I see anything?',
    tldr: 'Eight to twelve weeks for niacinamide, the acids and the pigment actives; up to six months for vitamin C; hours for a humectant and nothing lasting from it. Photograph at week 0 and week 12.',
    bodyHtml: `
      <p>The trial durations: 12 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/16029679/" rel="noopener nofollow" target="_blank">Bissett 2005</a>), 22 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/8651713/" rel="noopener nofollow" target="_blank">Stiller 1996</a>), six months (<a href="https://pubmed.ncbi.nlm.nih.gov/12823436/" rel="noopener nofollow" target="_blank">Humbert 2003</a>), 12–24 weeks for melasma (<a href="https://pubmed.ncbi.nlm.nih.gov/2528260/" rel="noopener nofollow" target="_blank">Verallo-Rowell 1989</a>).</p>
    `,
  },
  {
    id: 'faq-serum-vs-cream',
    category: 'faq',
    title: 'Serum, cream or ampoule — does the format matter?',
    tldr: 'Only through the active, its concentration and its pH. Niacinamide worked in a moisturiser, vitamin C in a cream, the acids in creams; the serum format buys a higher concentration in a thinner base and a higher price.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/16029679/" rel="noopener nofollow" target="_blank">Bissett 2005</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/12823436/" rel="noopener nofollow" target="_blank">Humbert 2003</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/8651713/" rel="noopener nofollow" target="_blank">Stiller 1996</a>.) The basics drawer explains the vehicle rules.</p>
    `,
  },
  {
    id: 'faq-layering',
    category: 'faq',
    title: 'What order do I put them on?',
    tldr: 'Thinnest to thickest, actives before moisturiser, sunscreen last in the morning. Vitamin C then niacinamide then sunscreen in the morning; a retinoid or an acid, then moisturiser, at night. Waiting minutes between layers is optional.',
    bodyHtml: `
      <p>The order follows from the pH rules for vitamin C (<a href="https://pubmed.ncbi.nlm.nih.gov/11207686/" rel="noopener nofollow" target="_blank">Pinnell 2001</a>) and from the sunscreen's need to be the outer film (<a href="https://pubmed.ncbi.nlm.nih.gov/18603326/" rel="noopener nofollow" target="_blank">Murray 2008</a>); the <a href="/retinoids">retinoids guide</a> covers the night.</p>
    `,
  },
  {
    id: 'faq-peptides-vs-retinol',
    category: 'faq',
    title: 'Can peptides replace my retinoid?',
    tldr: 'No. Peptides have small split-face gains from company trials; tretinoin has biopsy-proven collagen and a Cochrane relative risk of 1.73 against placebo. Bakuchiol is the alternative with a head-to-head against retinol.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/18492182/" rel="noopener nofollow" target="_blank">Robinson 2005</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/15674885/" rel="noopener nofollow" target="_blank">Samuel 2005</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/29947134/" rel="noopener nofollow" target="_blank">Dhaliwal 2019</a>.) The <a href="/retinoids">retinoids guide</a> has the ladder.</p>
    `,
  },
  {
    id: 'faq-exosomes',
    category: 'faq',
    title: 'Are exosome or stem-cell serums worth it?',
    tldr: 'No: no approved product, no consensus, mostly single-arm studies with conflicts of interest, and a molecule too large to enter intact skin. The stem-cell cream with a blinded trial matched its placebo.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/36597716/" rel="noopener nofollow" target="_blank">Vyas 2023</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/41931695/" rel="noopener nofollow" target="_blank">Wang 2026</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/31012565/" rel="noopener nofollow" target="_blank">Alhaddad 2019</a>.)</p>
    `,
  },
  {
    id: 'faq-one-serum',
    category: 'faq',
    title: 'If I buy one serum, which?',
    tldr: 'A vitamin C–E–ferulic serum for the morning under sunscreen, if the budget allows; a 5% niacinamide if it does not. The night belongs to a retinoid, which is not a serum question.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/18603326/" rel="noopener nofollow" target="_blank">Murray 2008</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/16029679/" rel="noopener nofollow" target="_blank">Bissett 2005</a>.) Azelaic acid if the problem is spots or redness; the <a href="/retinoids">retinoids guide</a> for the night.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What a serum is — a vehicle, and the rules that decide whether the active gets in',
    intro: '',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you buy: the label, the prices, the routine and the vetting',
    intro: '',
    sections: context,
  },
  {
    id: 'uses',
    title: 'What people buy a serum for — graded by evidence',
    intro: 'Eleven reasons people buy a serum, from the prescription-grade azelaic acid trials to the collagen and exosome bottles that cannot get through the skin. Sorted by evidence, not by the counter.',
    sections: uses,
  },
  {
    id: 'products',
    title: 'The actives, molecule by molecule',
    intro: 'Twelve actives graded on their own trials at their trial concentrations — what got in, what a blinded grader saw, and what the bottle beside it borrowed.',
    sections: products,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The stacked routine, the sun and the acids, pregnancy, allergy and the unregulated bottle, and who should keep their money.',
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
  lines: 'Lines & texture',
  pigment: 'Pigment',
  hydration: 'Hydration',
  texture: 'Texture & pores',
  redness: 'Redness',
  acne: 'Acne',
  antioxidant: 'Antioxidant',
  exfoliant: 'Exfoliant',
  signal: 'Signal molecule',
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
