/**
 * Exosomes guide — single source of truth (clinic, in-clinic layout).
 *
 * Consumed by /exosomes. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Editorial spine: "exosomes" are extracellular vesicles whose content
 * depends on the cell they came from and the way they were separated, and
 * no regulator has authorised any exosome product for anything. The human
 * evidence is a handful of small split-face studies in which the vesicles
 * were applied to skin opened by a laser or a needle; the strongest is one
 * 25-patient double-blind trial. Injected and intravenous exosomes are
 * unlawful in Europe and the United States and are where the harm reports
 * come from. Tiers stay consistent with the guides that already grade
 * exosomes limited (/regenerative-aesthetics, /hair-loss, /collagen-loss,
 * /serums, /skin-boosters, /sagging-skin, /facial-volume-loss): the
 * injected, intravenous and intact-skin rows here are limited; the rows
 * graded emerging are the specific post-procedure uses with controlled
 * trials, which those guides did not separate out. Prices are indicative
 * European clinic and retail prices as of September 2026, not quotes;
 * regulatory statements are as of September 2026.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea =
  | 'scars'
  | 'aging'
  | 'hair'
  | 'pigment'
  | 'redness'
  | 'healing'
  | 'topical'
  | 'injected'
  | 'human'
  | 'plant'
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
  'An exosome is a 30–150 nanometre vesicle that a cell sheds, carrying proteins, lipids and RNA from that cell. What is in a vial depends on which cells made it (fat-tissue stem cells, umbilical cord, platelets, rose or ginseng cells, cow\'s milk), how it was separated, how it was stored and how much is in it — and none of that is standardised. The scientists who wrote the field\'s reporting rules say that "claims that exosomes are endowed with exquisite and specific activities remain difficult to support experimentally", and an overview of 17 systematic reviews found "a pervasive shortfall in methodological rigour".',
  'No exosome product is approved by any regulator for any purpose. In the United States they are drugs or biologics that need approval, and the FDA issued a public safety notification after patients in Nebraska suffered serious adverse events from unapproved injections. In Europe, anything injected to treat is a medicinal product with no authorised example, and the cosmetics regulation bans cells, tissues and products of human origin from cosmetics — so a human-derived "exosome serum" is not a legal cosmetic in the EU, and the products sold lawfully here are plant-, animal- or bacteria-derived. Korea, where most of the vials come from, allows them on the skin only.',
  'The human evidence is small and almost entirely post-procedure. The best trial is 25 patients: after three fractional CO2 laser sessions for acne scars, the half-face treated with adipose stem-cell exosome gel improved 32.5% against 19.9% on the control gel, with milder redness and shorter downtime. In a split-face comparison after radiofrequency microneedling, exosomes matched platelet-rich plasma, with collagen on biopsy rising equally on both sides; in a 60-person unblinded split-face trial, exosomes added about three points of wrinkle score to what the needling alone did. A scoping review found 17 human studies between 2020 and 2025, 76% reporting improvement, nearly all single-arm and many with conflicts of interest.',
  'On intact skin, exosomes cannot get in: the stratum corneum stops molecules over about 500 Daltons and an exosome is thousands of times larger, and the one penetration study found vesicles reaching the dermis only through laser, needle or plasma channels. The serum studies are single-arm and sponsor-run; the blinded trial of a "stem-cell" cream found the placebo side improved as much; a manufacturer analysis rated 18% of exosome companies transparent and 27% of their claims misleading. For hair, eleven small studies (two randomised) report density gains of 9.5–35 hairs per cm² with needling, against 25.6 for injected PRP in a low-quality meta-analysis — and minoxidil with microneedling ranks above both.',
  'What to do with that: if a clinic offers exosomes as the topical after-care to a fractional laser or radiofrequency microneedling you were having anyway, the price buys an emerging-tier chance of a modestly better scar result and a quicker recovery, from a vial whose source and species you should be told. Do not pay for them injected, dripped into a vein, or as a serum for intact skin, and do not choose them over the treatments with controlled trials — microneedling with PRP for scars, minoxidil and microneedling for hair, a retinoid and a resurfacing laser for photoaging.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-exosomes-are',
    category: 'concept',
    title: 'What an exosome is — and what is actually in the vial',
    tldr: 'Extracellular vesicles are membrane-bound particles every cell sheds; "exosomes" are the 30–150 nanometre subset that form inside the cell before release, and they carry a sample of the parent cell\'s proteins, lipids and RNA. Products are made by culturing cells (fat-tissue, umbilical cord or bone-marrow stem cells, platelets, rose or ginseng cells) and separating the vesicles from the liquid; the result is a mixture whose content depends on the cell, the culture, the separation method, the dose and the storage. The field\'s own reporting standard says the specific claims made for exosomes remain hard to support experimentally, and nobody has agreed on what a "dose" is.',
    bodyHtml: `
      <p>The definitions come from the International Society for Extracellular Vesicles: "extracellular vesicles (EVs), a collective term covering various subtypes of cell-released, membranous structures, called exosomes, microvesicles, microparticles, ectosomes, oncosomes, apoptotic bodies, and many other names", which "are difficult to obtain as relatively pure preparations, and to characterize properly"; and the warning that matters for a buyer: "claims that exosomes are endowed with exquisite and specific activities remain difficult to support experimentally, given our still limited knowledge of their specific molecular machineries of biogenesis and release, as compared with other biophysically similar EVs" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6322352/" rel="noopener nofollow" target="_blank">Théry 2018</a>). The 2023 update lists the unsolved problems as "EV nomenclature, separation from non-vesicular extracellular particles, characterisation and functional studies" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10850029/" rel="noopener nofollow" target="_blank">Welsh 2024</a>). The dermatology reviews say the same in clinical language: "challenges remain, including inconsistent isolation methods, source variability, and the need for clinical trials" (<a href="https://pubmed.ncbi.nlm.nih.gov/39761139/" rel="noopener nofollow" target="_blank">Haykal 2025</a>); "the main considerations for practice utilization include variation in exosome purification, isolation, storage, scalability and reproducibility" (<a href="https://pubmed.ncbi.nlm.nih.gov/36597716/" rel="noopener nofollow" target="_blank">Vyas 2023</a>); and the source matters — in a head-to-head laboratory comparison, adipose stem-cell exosomes were richer in the vessel-growth factor VEGF and umbilical-cord exosomes in TGF-β and PDGF-BB, with "distinct yet complementary" profiles (<a href="https://pubmed.ncbi.nlm.nih.gov/41800728/" rel="noopener nofollow" target="_blank">Ponnikorn 2026</a>).</p>
      <p>What this means at the counter: two products both called "exosomes" can be as different as two herbal teas, the label rarely states a particle count or a potency, and a lyophilised powder from a Korean laboratory, a platelet extract from an American one and a "rose stem-cell exosome" ampoule share a word and little else. Exosomes are not stem cells (there are no cells in the vial), not PRP (which is your own spun blood, graded in the <a href="/regenerative-aesthetics">biostimulator guide</a>), and not growth-factor serums (graded in the <a href="/serums">serums guide</a>), although the marketing borrows from all three.</p>
    `,
  },
  {
    id: 'what-the-studies-show',
    category: 'concept',
    title: 'What the human studies look like — seventeen of them, mostly single-arm',
    tldr: 'A 2026 scoping review found 17 human studies of exosome therapies published between 2020 and 2025 — cohorts, comparative trials and case series — 76% of them reporting improvement, and concluded that interpretation "is further limited by non-randomized, single-arm designs and potential conflicts of interest". By late 2021 exactly one clinical study existed. The best design is a 25-patient double-blind split-face trial after CO2 laser; the largest is a 60-person split-face trial that was not blinded. An overview of 17 systematic reviews covering 556 primary studies found "a pervasive shortfall in methodological rigour", and a systematic review of "regenerative aesthetics" concluded the field "lacks the necessary scientific rigour and regulatory compliance to be recognized as a legitimate medical specialty".',
    bodyHtml: `
      <p>The counts: "Seventeen studies between 2020-2025 were identified, including cohort studies, comparative trials, and case series … 76% of studies recorded improvements in wrinkles, pigmentation, elasticity, hydration, or scars. Adverse events were uncommon but included granulomas, necrosis, and allergic reactions post-injection … Interpretation is further limited by non-randomized, single-arm designs and potential conflicts of interest" (<a href="https://pubmed.ncbi.nlm.nih.gov/41931695/" rel="noopener nofollow" target="_blank">Wang 2026</a>); through October 2021, "only 1 clinical study has been published to date, and there are no FDA-approved products on the market" (<a href="https://pubmed.ncbi.nlm.nih.gov/35580250/" rel="noopener nofollow" target="_blank">Hartman 2022</a>); a 2025 analysis of 12 clinical studies against the MISEV reporting criteria found "significant challenges related to the standardization of their production and the lack of large-scale randomized studies" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11899913/" rel="noopener nofollow" target="_blank">Domaszewska-Szostek 2025</a>); the microneedling-plus-exosome literature is eight studies of 3 to 60 participants (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13107235/" rel="noopener nofollow" target="_blank">Dhaliwal 2026</a>). The quality verdicts: "a pervasive shortfall in methodological rigour" across 17 systematic reviews and 556 primary studies, "notably in exosome source characterisation and bioactive constituent delineation" (<a href="https://pubmed.ncbi.nlm.nih.gov/39078426/" rel="noopener nofollow" target="_blank">Rahman 2025</a>); and for the wider "regenerative aesthetics" menu, 19 studies including 14 randomised trials with "a prevalent gap in molecular and clinical evidence" (<a href="https://pubmed.ncbi.nlm.nih.gov/39198280/" rel="noopener nofollow" target="_blank">Rahman 2025b</a>). The best trial is in the acne-scar row (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9309822/" rel="noopener nofollow" target="_blank">Kwon 2020</a>); the reviews that summarise the whole field agree that "the current published research literature does not yet provide a clear consensus on long-term use for skin rejuvenation or hair restoration" (<a href="https://pubmed.ncbi.nlm.nih.gov/36597716/" rel="noopener nofollow" target="_blank">Vyas 2023</a>) and that "the safety, efficacy, potency, and dosages of exosomes remains to be determined via robust human clinical trials" (<a href="https://pubmed.ncbi.nlm.nih.gov/37498301/" rel="noopener nofollow" target="_blank">Olumesi 2023</a>).</p>
      <p>How to read the rows below: every study in them applied the product to skin that a laser, a needle or a plasma device had just opened, usually with the manufacturer involved, usually without blinding, and usually for three months. A tier of emerging on this page means "a small controlled study exists and pointed the right way"; nothing here has the evidence of a retinoid, a filler or a fractional laser.</p>
    `,
  },
  {
    id: 'can-and-cant',
    category: 'concept',
    title: 'What exosomes can and cannot do, on current evidence',
    tldr: 'Can, in small studies: improve the result of a fractional CO2 laser for acne scars by about a third more than the laser alone, with less redness and a shorter recovery; match PRP as the after-care to radiofrequency microneedling; add a few points of wrinkle score to what needling does; raise hair counts modestly when needled into the scalp. Cannot: cross intact skin; replace a retinoid, a filler, a laser or minoxidil; be lawfully injected or infused in Europe or the United States; "reverse aging" or "regenerate" anything a blinded grader has measured; or tell you what is in the vial.',
    bodyHtml: `
      <p>The can: "adipose tissue stem cell-derived exosomes-treated sides had achieved a significantly greater improvement than the control sides at the final follow-up visit (percentage reduction in échelle d\'évaluation clinique des cicatrices d\'acné scores: 32.5 vs 19.9%, p &lt; 0.01). Treatment-related erythema was milder, and post-treatment downtime was shorter" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9309822/" rel="noopener nofollow" target="_blank">Kwon 2020</a>); "both exosomes and PRP equally improved wrinkling, dyschromia, erythema, texture, and overall skin appearance. Histological analysis confirmed increased collagen I and glycosaminoglycans, without significant differences between treatment arms" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12104007/" rel="noopener nofollow" target="_blank">Estupiñan 2025</a>); a paired wrinkle-score difference of 3.32 points after radiofrequency microneedling in 60 people, "unblinded" (<a href="https://pubmed.ncbi.nlm.nih.gov/42635327/" rel="noopener nofollow" target="_blank">Yen 2026</a>); hair density gains of "9.5 to 35 hairs/cm²" across eleven small hair studies (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12433634/" rel="noopener nofollow" target="_blank">Al Ameer 2025</a>). The cannot: molecules over about 500 Daltons do not cross the stratum corneum (<a href="https://pubmed.ncbi.nlm.nih.gov/10839713/" rel="noopener nofollow" target="_blank">Bos 2000</a>), and labelled vesicles reached the deep dermis only "under microneedles, NAFL, and PBASM treatments" — a needle, a non-ablative laser or a plasma device (<a href="https://pubmed.ncbi.nlm.nih.gov/36573453/" rel="noopener nofollow" target="_blank">Wang 2023</a>); no product is approved anywhere (<a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">FDA 2019</a>); and the one blinded placebo-controlled trial of a "stem-cell" cream found that "both sides of the face achieved significant improvement" with no difference between them (<a href="https://pubmed.ncbi.nlm.nih.gov/31012565/" rel="noopener nofollow" target="_blank">Alhaddad 2019</a>).</p>
      <p>Where exosomes fit, if anywhere: as an optional topical after-care to a procedure the <a href="/skin-resurfacing">resurfacing</a>, <a href="/microneedling">microneedling</a> or <a href="/hair-loss">hair loss</a> guides already grade, from a source you have been told, at a price that reflects an emerging tier. Everything else on the menu — the drip, the injection, the serum, the "exosome facelift" — is below that line.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'law-and-labels',
    category: 'context',
    title: 'The law: cosmetics on the skin, medicines in the needle, and what Europe bans',
    tldr: 'In the United States, an exosome product intended to treat anything is a drug or biologic that needs FDA approval, none has it, and the FDA has issued a public safety notification and a consumer alert. In the European Union, anything injected or infused to treat is a medicinal product — the 2025 EMA guideline places unmodified extracellular vesicles outside the advanced-therapy category and inside the ordinary medicines framework, where no exosome has a licence — and the cosmetics regulation prohibits "cells, tissues or products of human origin" in cosmetics, so a human-derived exosome serum cannot be a lawful EU cosmetic; the plant-, animal- and bacteria-derived ones can. Korea, the source of most vials, permits topical use only.',
    bodyHtml: `
      <p>The American position: "There are currently no FDA-approved exosome products", clinics have marketed them "with unsubstantiated claims about the potential for these products to prevent, treat or cure various diseases or conditions", and the notification followed "multiple recent reports of serious adverse events experienced by patients in Nebraska" (<a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">FDA public safety notification, December 2019</a>); "exosome products intended to treat diseases or conditions in humans require FDA approval" and the marketed ones "have not been shown to be safe or effective, and, in some cases, may have significant safety issues" (<a href="https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes" rel="noopener nofollow" target="_blank">FDA consumer alert, July 2020</a>). The European position: "the 2025 European Medicines Agency/Committee for Advanced Therapies (EMA/CAT) guideline clarifies that \'not substantially modified extracellular vesicles\' fall outside the current advanced therapy medicinal products (ATMPs) definition, requiring case-by-case development within other medicinal-product frameworks", while "the United States Food and Drug Administration (FDA) regulates exosome/EV products for disease treatment as drugs and biological products subject to premarket requirements" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13314385/" rel="noopener nofollow" target="_blank">Limongi 2026</a>); the classification "defines subsequent requirements for manufacturing, quality control and clinical investigation" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4698466/" rel="noopener nofollow" target="_blank">Lener 2015</a>). The cosmetic side: Annex II of the EU cosmetics regulation lists cells, tissues and products of human origin among the substances prohibited in cosmetic products (<a href="https://eur-lex.europa.eu/eli/reg/2009/1223/oj/eng" rel="noopener nofollow" target="_blank">Regulation (EC) No 1223/2009</a>), which is why the exosome products on European shelves are rose, ginseng, centella, milk or lactobacillus vesicles and why a human stem-cell "cosmetic" in a European clinic is either imported outside the rules or mislabelled. The Korean and wider position: exosomes "to date, has only been approved for topical administration" (<a href="https://pubmed.ncbi.nlm.nih.gov/37498301/" rel="noopener nofollow" target="_blank">Olumesi 2023</a>). The professional societies: the International Society for Cell &amp; Gene Therapy "has opposed the premature commercialization of unproven cell- and gene-based interventions" and describes "the use of tokens of scientific legitimacy as persuasive marketing devices" (<a href="https://pubmed.ncbi.nlm.nih.gov/37517865/" rel="noopener nofollow" target="_blank">Ikonomou 2023</a>).</p>
      <p>The practical translation for a European reader: a vial applied to your skin after a procedure is, at best, a cosmetic or an unclassified product used off-label under the practitioner\'s responsibility; a vial injected into your face or scalp, or infused into a vein, is an unlicensed medicine, and no consent form changes that. Ask what the product is registered as, in which country, and from which species.</p>
    `,
  },
  {
    id: 'what-is-sold',
    category: 'context',
    title: 'What clinics and shops actually sell, and what is known about the bottle',
    tldr: 'Four families: Korean lyophilised adipose stem-cell exosome powders reconstituted in the clinic (the product in the acne-scar trial); American platelet-derived "human platelet extract" serums with sponsor-run single-arm studies; umbilical-cord, placental and "stem-cell" vials of uncertain provenance, mostly outside Europe; and the plant, milk and bacterial "exosome-like" cosmetics that are lawful on European shelves. A 2025 analysis of 18 manufacturers and 70 formulations rated 18% of companies highly transparent, found growth-factor content varying significantly by source, judged 27% of public claims misleading, and found "regulatory compliance was minimal".',
    bodyHtml: `
      <p>The manufacturer audit: "High transparency was observed in 18% of manufacturers, with most companies relying on vague and promotional language. Growth factor concentrations showed significant variability across human-, plant-, and animal-derived sources … Positive sentiment (54%) dominated social media, driven by HCP-influencer endorsements, but 27% of claims were misleading. Regulatory compliance was minimal, with no FDA-approved products and widespread reliance on unsubstantiated marketing" (<a href="https://pubmed.ncbi.nlm.nih.gov/40055226/" rel="noopener nofollow" target="_blank">Rahman 2025c</a>). The products behind the studies: an adipose stem-cell exosome gel in the acne-scar trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9309822/" rel="noopener nofollow" target="_blank">Kwon 2020</a>) and the PRP comparison (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12104007/" rel="noopener nofollow" target="_blank">Estupiñan 2025</a>); a platelet extract "derived from US-sourced, leukocyte-reduced apheresed platelets" in the serum studies (<a href="https://pubmed.ncbi.nlm.nih.gov/35689936/" rel="noopener nofollow" target="_blank">Proffer 2022</a>); a Korean "Exosome Regenerative Complex" in the hair study (<a href="https://pubmed.ncbi.nlm.nih.gov/41037530/" rel="noopener nofollow" target="_blank">Ablon 2025</a>); a Seoul-made vial in the split-face laser study (<a href="https://pubmed.ncbi.nlm.nih.gov/40892048/" rel="noopener nofollow" target="_blank">Vitale 2025</a>); umbilical-cord exosomes in the Chinese melasma study (<a href="https://pubmed.ncbi.nlm.nih.gov/36573453/" rel="noopener nofollow" target="_blank">Wang 2023</a>); rose stem-cell exosomes in the case series (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11736088/" rel="noopener nofollow" target="_blank">Majewska 2025</a>); bovine milk vesicles in a 28-day cosmetic study (<a href="https://pubmed.ncbi.nlm.nih.gov/38105431/" rel="noopener nofollow" target="_blank">Lu 2024</a>). The market is "growing … internationally and within the United States, with diverse formulations primarily derived from human stem cells" (<a href="https://pubmed.ncbi.nlm.nih.gov/40533901/" rel="noopener nofollow" target="_blank">Nahm 2025</a>) — the formulations, in other words, that European cosmetic law does not allow.</p>
      <p>Indicative European prices, September 2026: an exosome "add-on" to a fractional laser or radiofrequency microneedling session €150–400; an "exosome facial" of microneedling plus the vial €300–700 a session, three or four sessions recommended; a scalp course of three to four needling sessions with exosomes €1,200–3,000; human-derived serums sold as skincare €80–350 for 30 ml; plant-vesicle cosmetics €40–150. The vial usually costs the clinic €60–150.</p>
    `,
  },
  {
    id: 'questions-to-ask',
    category: 'context',
    title: 'The questions to ask before you pay',
    tldr: 'Six: which cells or plants made it, and in which country; what it is registered as (a cosmetic, a medical device, nothing); whether it will be applied to the skin after a device or injected (the first can be lawful, the second is not); what the particle count and characterisation are, and whether it was stored cold or reconstituted from powder; what the clinic\'s own before-and-after evidence looks like at three and six months; and what the same money buys in a treatment with controlled trials. A clinic that cannot answer the first three is selling a word.',
    bodyHtml: `
      <p>The questions follow from the reporting standards — source, separation, characterisation (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10850029/" rel="noopener nofollow" target="_blank">Welsh 2024</a>) — and from the regulators\' advice: the FDA tells patients to ask whether a treatment has been reviewed and to "request the Investigational New Drug Application (IND) number" (<a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">FDA 2019</a>), and the cell-therapy society describes how "tokens of scientific legitimacy" — a laboratory name, a particle count, a paper about mice — are used as marketing (<a href="https://pubmed.ncbi.nlm.nih.gov/37517865/" rel="noopener nofollow" target="_blank">Ikonomou 2023</a>). The comparison question is the one that saves the most money: PRP with microneedling for acne scars carries a meta-analysis of 14 studies (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8882957/" rel="noopener nofollow" target="_blank">Kang 2021</a>), minoxidil with microneedling for hair ranks first in a network meta-analysis of 27 trials (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10697753/" rel="noopener nofollow" target="_blank">Gupta 2023</a>), and the exosome equivalent is one 25-patient trial and a set of single-arm series (<a href="https://pubmed.ncbi.nlm.nih.gov/41931695/" rel="noopener nofollow" target="_blank">Wang 2026</a>).</p>
      <p>Two rules of thumb. If the exosomes are the after-care to a procedure you would have anyway, the decision is only about the surcharge. If the exosomes are the procedure — an "exosome facial", an "exosome hair treatment", an "exosome drip" — the evidence is thinner than the price, and the needle or the drip moves the product from unproven to unlawful.</p>
    `,
  },
];

const uses: Section[] = [
  {
    id: 'use-acne-scars-laser',
    category: 'use',
    title: 'Acne scars after fractional CO2 laser: the one double-blind randomised trial',
    tldr: 'Twenty-five patients had three fractional CO2 laser sessions to the whole face; after each, one side got an adipose stem-cell exosome gel and the other a control gel, double-blind. At 12 weeks the exosome side\'s acne-scar score had fallen 32.5% against 19.9% (p < 0.01), with milder redness and a shorter downtime. One trial, one manufacturer\'s product, three months — emerging, and the best evidence exosomes have.',
    evidence: 'emerging',
    focus: 'scars',
    note: 'Best for: someone already having fractional laser or microneedling for atrophic acne scars, as the topical after-care — with PRP the better-evidenced alternative',
    sessions: 'Applied after each of 3 laser sessions, 4 weeks apart',
    downtime: 'The laser\'s; shorter on the exosome side in the trial',
    cost: '€150–400 per session on top of the laser',
    bodyHtml: `
      <p>The trial: "A 12-week prospective, double-blind, randomized, split-face trial was performed. A total of 25 patients received 3 consecutive treatment sessions of fractional CO2 laser to the whole face … one side of the face was treated with adipose tissue stem cell-derived exosomes gel and the other side was treated with control gel. Adipose tissue stem cell-derived exosomes-treated sides had achieved a significantly greater improvement than the control sides at the final follow-up visit (percentage reduction in échelle d\'évaluation clinique des cicatrices d\'acné scores: 32.5 vs 19.9%, p &lt; 0.01). Treatment-related erythema was milder, and post-treatment downtime was shorter" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9309822/" rel="noopener nofollow" target="_blank">Kwon 2020</a>). The fresh-scar cousin: in ten people with chest scars from rib-cartilage harvest, the half treated with an adipose exosome product improved in pliability, pigmentation and relief against the half treated with hyaluronic acid, with one-year photographs showing "superior improvements in scar height and thickness on the exosome-treated side" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12945872/" rel="noopener nofollow" target="_blank">Jeong 2026</a>). The comparators: microneedling alone improves acne scars in a meta-analysis of 12 randomised trials (<a href="https://pubmed.ncbi.nlm.nih.gov/35426044/" rel="noopener nofollow" target="_blank">Shen 2022</a>), and adding PRP to it roughly triples the odds of a better-than-50% improvement, odds ratio 2.97, across 14 studies and 472 patients (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8882957/" rel="noopener nofollow" target="_blank">Kang 2021</a>).</p>
      <p>Emerging: one 25-patient trial with a clear result is exactly what the tier describes, and the <a href="/microneedling">microneedling</a> and <a href="/regenerative-aesthetics">biostimulator</a> guides grade microneedling with PRP moderate on its 14 studies. The honest advice for an acne-scar patient is the laser or the needling first, PRP as the evidence-based add-on, and exosomes as the add-on for someone who cannot or will not have blood drawn — at a surcharge that reflects one trial.</p>
    `,
  },
  {
    id: 'use-rejuvenation-with-devices',
    category: 'use',
    title: 'Wrinkles, texture and tone with radiofrequency microneedling or laser: exosomes as the after-care',
    tldr: 'In an investigator-blinded split-face comparison after three radiofrequency microneedling sessions, topical adipose exosomes and PRP "equally improved wrinkling, dyschromia, erythema, texture, and overall skin appearance", with collagen I rising on biopsy on both sides; in 60 adults, adding a vesicle preparation to radiofrequency microneedling improved wrinkle score by 12.6 points against 9.3 for needling alone — a 3.3-point difference in an unblinded 12-week trial; a nine-woman split-face series and a six-person rose-exosome series point the same way. Emerging: the device does most of the work, and no study has compared exosomes with a plain moisturiser after it.',
    evidence: 'emerging',
    focus: 'aging',
    note: 'Best for: the patient already booked for RF microneedling or fractional laser who wants an after-care with a trial behind it — PRP has more of them',
    sessions: '3 device sessions, 4 weeks apart, exosomes applied after each',
    downtime: 'The device\'s: 2–5 days of redness',
    cost: '€150–400 per session on top of the device',
    bodyHtml: `
      <p>The comparison: "Participants with mild to moderate photoaging underwent three radiofrequency microneedling treatments with PRP and topical exosomes each applied to one half of the face … Both exosomes and PRP equally improved wrinkling, dyschromia, erythema, texture, and overall skin appearance. Histological analysis confirmed increased collagen I and glycosaminoglycans, without significant differences between treatment arms" — a non-inferiority design with no untreated side (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12104007/" rel="noopener nofollow" target="_blank">Estupiñan 2025</a>). The controlled trial: "At week 12, wrinkle improvement was 12.59 (2.58) points on the RFMN+EV side and 9.28 (2.35) points on the RFMN side, giving a paired mean difference of 3.32 points (95% CI: 2.55-4.08)", with the authors\' caveat that "the unblinded design, 12-week follow-up, and absence of histologic or molecular biomarkers require cautious interpretation" (<a href="https://pubmed.ncbi.nlm.nih.gov/42635327/" rel="noopener nofollow" target="_blank">Yen 2026</a>). The series: nine women, split-face, exosomes with microneedling, CO2 or picosecond laser — "exosome-treated sides showed greater improvements in texture, hydration, elasticity, and pigmentation", least with the picosecond laser, "possibly due to pinpoint bleeding reducing exosome absorption" (<a href="https://pubmed.ncbi.nlm.nih.gov/40892048/" rel="noopener nofollow" target="_blank">Vitale 2025</a>); six subjects with rose stem-cell exosomes after needling radiofrequency, greater wrinkle reduction at one and three months (<a href="https://pubmed.ncbi.nlm.nih.gov/41800727/" rel="noopener nofollow" target="_blank">Huang 2026</a>). The systematic review of the combination: eight studies of 3 to 60 participants, "more evidence is required before we can ascertain the safety profile and efficacy profile" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13107235/" rel="noopener nofollow" target="_blank">Dhaliwal 2026</a>).</p>
      <p>Emerging, and the reader should notice what the comparator was in every study: the same device without the vial, or PRP. Nobody has tested exosomes against a bland occlusive after the device, which is what the untreated side of a split-face gets anyway, and the collagen on biopsy in the PRP comparison rose equally on both sides because the needling made it. The <a href="/skin-tightening">tightening</a>, <a href="/microneedling">microneedling</a> and <a href="/skin-resurfacing">resurfacing</a> guides grade the devices themselves.</p>
    `,
  },
  {
    id: 'use-hair-loss',
    category: 'use',
    title: 'Hair thinning: eleven small studies, two randomised, all with needling',
    tldr: 'A 2025 systematic review found eleven clinical studies — two randomised, three retrospective, three single-arm, one case series, two case reports — reporting density gains of 9.5 to 35 hairs per cm² and thickness gains up to 13 µm with no serious adverse events; a 2026 review of regenerative hair treatments found three vesicle studies in 89 patients with hair counts up 28%; a 30-person open-label study of a Korean exosome complex after microneedling raised terminal and vellus counts at four months. For comparison, injected PRP adds 25.6 hairs per cm² over saline on low-quality evidence, and minoxidil with microneedling ranks above both. Emerging — and the microneedling in every study is itself a treatment.',
    evidence: 'emerging',
    focus: 'hair',
    note: 'Best for: early pattern thinning in someone already on minoxidil who wants an add-on and will not have PRP — with the needling doing a measurable part of the work',
    sessions: '3–4 scalp needling sessions a month apart, exosomes applied after each',
    downtime: 'A day of scalp redness',
    cost: '€1,200–3,000 for a course',
    bodyHtml: `
      <p>The reviews: "Eleven studies included: two RCTs, three retrospective studies, three prospective single-arm studies, one case series, and two case reports … MSC-derived exosomes from adipose tissue, placenta, hair follicles, bone marrow, foreskin, and umbilical cord having substantial increases in hair density (9.5 to 35 hairs/cm²) and hair thickness (up to 13.01 µm) … no serious adverse events were noted. The greatest level of evidence came from RCTs with adipose- and plant extract-derived exosome formulation. However, heterogeneity in design and outcome limited direct comparisons" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12433634/" rel="noopener nofollow" target="_blank">Al Ameer 2025</a>); "EV therapy, though less studied (3 studies, 89 patients), showed hair count increases of 28% and density gains up to 45% in certain subgroups, with higher responses in early-stage AGA" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13191867/" rel="noopener nofollow" target="_blank">Behrangi 2026</a>); "Topical ADSC-Exo has been tried successfully in 39 androgenetic alopecia patients demonstrating significant increases in hair density and thickness" among 16 studies of which 15 were preclinical (<a href="https://pubmed.ncbi.nlm.nih.gov/37381168/" rel="noopener nofollow" target="_blank">Gupta 2023</a>); "One hundred twenty-five patients received an exosome treatment for hair loss. Side effects were rare. However, in the broader field of dermatology, at least 10 serious adverse events have been reported" (<a href="https://pubmed.ncbi.nlm.nih.gov/39447204/" rel="noopener nofollow" target="_blank">Queen &amp; Avram 2025</a>); of 27 studies in the stem-cell exosome hair literature, three were clinical (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12305264/" rel="noopener nofollow" target="_blank">Poddar 2025</a>). The open-label study: 30 men and women, an "Exosome Regenerative Complex" applied after microneedling on days 0, 30, 60 and 90, "significantly increased terminal and vellus hair counts (P&lt;0.0001) and decreased hair shedding on day 120", no control group, manufacturer-affiliated (<a href="https://pubmed.ncbi.nlm.nih.gov/41037530/" rel="noopener nofollow" target="_blank">Ablon 2025</a>). The comparators: PRP raised density at three and six months against placebo in nine randomised trials (<a href="https://pubmed.ncbi.nlm.nih.gov/37533146/" rel="noopener nofollow" target="_blank">Zhang 2023</a>) — "MD, 25.6 hairs/cm²" against saline, "low quality due to inconsistency and risk of bias" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9918380/" rel="noopener nofollow" target="_blank">Cruciani 2023</a>) — and in the network meta-analysis of 27 trials, 5% minoxidil plus microneedling ranked first (SUCRA 95.8%), ahead of minoxidil alone, PRP alone and microneedling alone (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10697753/" rel="noopener nofollow" target="_blank">Gupta 2023b</a>).</p>
      <p>Emerging here for the topical-after-needling use; the <a href="/hair-loss">hair loss guide</a> grades exosome and "stem-cell" scalp <em>injections</em> limited, and so does this page in the injection row. The order of evidence for a thinning scalp is unchanged: minoxidil, the antiandrogen where appropriate, microneedling, then PRP — with an exosome course as an add-on that costs more than all four and has eleven small studies behind it.</p>
    `,
  },
  {
    id: 'use-scars-wounds',
    category: 'use',
    title: 'Fresh surgical scars and wound healing: where the real medicine is being built',
    tldr: 'The serious exosome trials are in wounds, not faces: a randomised trial in 110 people with chronic diabetic foot ulcers found weekly topical umbilical-cord exosomes healed ulcers in a mean of 6 weeks against 20 with standard care; a first-in-human phase I trial of injected platelet vesicles in healthy volunteers found them safe and no faster than untreated wounds; a ten-patient split-scar study found fresh chest scars more pliable and less pigmented on the exosome half at eight weeks and thinner at one year; and a meta-analysis of 68 animal studies found consistent healing effects with "a general lack of transparency in reporting". Emerging — the aesthetic scar use borrows from medical wound data.',
    evidence: 'emerging',
    focus: 'healing',
    note: 'Best for: a fresh surgical scar under a surgeon\'s care, as an adjunct with a small controlled study — not a substitute for silicone, sun protection and time',
    sessions: 'Weekly to fortnightly applications for 4–8 weeks',
    downtime: 'None',
    cost: '€100–300 per application',
    bodyHtml: `
      <p>The wound trial: 110 people with persistent diabetic foot ulcers randomised to weekly topical Wharton\'s-jelly exosomes with standard care, standard care alone, or the vehicle; "the treated group\'s mean time to fully recover was 6 weeks (range: 4-8 weeks), while the controls were 20 weeks (range: 12-28 weeks)" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12519741/" rel="noopener nofollow" target="_blank">Kishta 2025</a>). The phase I trial: clinical-grade platelet vesicles injected into healthy volunteers were "safe and well tolerated", and "all wounds healed rapidly and completely and no difference in time to wound closure of the treated and untreated wounds was observed at the single dose tested" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10290200/" rel="noopener nofollow" target="_blank">Johnson 2023</a>). The scar study: ten rhinoplasty patients, chest incision scars four months old split into exosome and hyaluronic-acid halves — pliability improved "beginning at week 3 and persisting through week 8", pigmentation improved on observer scoring, and "one-year follow-up photographs confirmed superior improvements in scar height and thickness on the exosome-treated side" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12945872/" rel="noopener nofollow" target="_blank">Jeong 2026</a>). The animal literature: 68 studies in which small vesicles "promoted skin regeneration in diabetic and non-diabetic animal models … regardless of cell source, production protocol and disease model", with risk of bias "uncertain for most studies due to insufficient reporting" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9516230/" rel="noopener nofollow" target="_blank">Al-Masawa 2022</a>).</p>
      <p>Emerging, and the most interesting row on the page: a real randomised trial in a real disease, run as medicine rather than as aesthetics, is what the field needs and what the diabetic-ulcer study is. It does not license the clinic vial — a different product, a different dose, a different wound — but it is the reason the science is worth watching. For a cosmetic scar, silicone gel, sun protection and the <a href="/skin-resurfacing">resurfacing guide</a>\'s lasers remain the treatments with evidence.</p>
    `,
  },
  {
    id: 'use-post-procedure-downtime',
    category: 'use',
    title: 'Faster healing and less redness after a laser: the claim clinics sell most',
    tldr: 'In the acne-scar trial the exosome side had "milder" treatment-related erythema and "shorter" downtime after fractional CO2 laser; in the 60-person radiofrequency microneedling trial, local reactions were "transient and predominantly mild" on both sides and erythema "numerically favored" the exosome side; the nine-woman series reported greater hydration and elasticity gains. No study has measured days of downtime against a plain occlusive dressing, which is the real comparator. Emerging for the recovery claim, on the same one trial.',
    evidence: 'emerging',
    focus: 'healing',
    note: 'Best for: a fractional CO2 or erbium patient who wants the post-laser week shorter and has already accepted the tier — an occlusive ointment and sun avoidance are the evidence-based basics',
    sessions: 'Once, immediately after the laser',
    downtime: 'The laser\'s, possibly a day or two shorter',
    cost: '€150–400',
    bodyHtml: `
      <p>The evidence is a sentence: "Treatment-related erythema was milder, and post-treatment downtime was shorter on the applications of human adipose tissue stem cell-derived exosomes-treated side" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9309822/" rel="noopener nofollow" target="_blank">Kwon 2020</a>), supported by "texture, pore, erythema, melanin, hydration, and GAIS outcomes numerically favored RFMN+EV, while local reactions were transient and predominantly mild" (<a href="https://pubmed.ncbi.nlm.nih.gov/42635327/" rel="noopener nofollow" target="_blank">Yen 2026</a>) and by the nine-woman series (<a href="https://pubmed.ncbi.nlm.nih.gov/40892048/" rel="noopener nofollow" target="_blank">Vitale 2025</a>). The mechanism is plausible — anti-inflammatory and pro-angiogenic cargo, shown in the laboratory for both adipose and umbilical sources (<a href="https://pubmed.ncbi.nlm.nih.gov/41800728/" rel="noopener nofollow" target="_blank">Ponnikorn 2026</a>) — and the reviews list wound healing as the best-supported preclinical effect (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10929203/" rel="noopener nofollow" target="_blank">Yu 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/33582246/" rel="noopener nofollow" target="_blank">Xiong 2021</a>).</p>
      <p>Emerging, and the cheapest row to test at home: the difference the trial reports is a matter of days, on the side of a face that also healed fine without it. The post-laser protocol in the <a href="/skin-resurfacing">resurfacing guide</a> — occlusive ointment, no picking, strict sun avoidance — is what the control side received, and it is the part that matters.</p>
    `,
  },
  {
    id: 'use-melasma-pigment',
    category: 'use',
    title: 'Melasma and pigment: one non-randomised comparison, and a mechanism',
    tldr: 'In 60 melasma patients split into four groups, umbilical-cord exosomes delivered through microneedles, a non-ablative fractional laser or a plasma device improved severity scores and satisfaction against the laser with saline, with no difference between the three delivery routes; the same study showed in animals that the vesicles reach the dermis only through those channels. In the laboratory both adipose and umbilical exosomes reduced melanin production without harming melanocytes, and rose-exosome case series report lighter marks. Emerging — one controlled comparison, not randomised, in a condition where tinted sunscreen and hydroquinone have decades of trials.',
    evidence: 'emerging',
    focus: 'pigment',
    note: 'Best for: nobody yet as a first-line — melasma has a treatment ladder with trials; this is an add-on with one comparison behind it',
    sessions: '4 device sessions a month apart in the study',
    downtime: 'The device\'s',
    cost: '€200–500 per session',
    bodyHtml: `
      <p>The study: "In the clinical application study, 60 patients with melasma treated in our department were divided into four groups. NAFL combined with normal saline treatment was used for Group A. Microneedles, NAFL, and PBASM combined with hUCMSC-Exos treatments were used for Groups B, C, and D … compared with Group A, Groups B, C, and D showed significantly improved therapeutic effect and patient satisfaction (p &lt; 0.05), and there was no significant difference among Groups B, C, and D" — and, in the animal arm, "hUCMSC-Exos can penetrate the deep dermis under microneedles, NAFL, and PBASM treatments" (<a href="https://pubmed.ncbi.nlm.nih.gov/36573453/" rel="noopener nofollow" target="_blank">Wang 2023</a>). The mechanism: "both reduced melanogenesis without altering melanocyte viability" in the ex vivo skin model (<a href="https://pubmed.ncbi.nlm.nih.gov/41800728/" rel="noopener nofollow" target="_blank">Ponnikorn 2026</a>); the scar study recorded pigmentation improving on observer scoring from week three (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12945872/" rel="noopener nofollow" target="_blank">Jeong 2026</a>); the rose-exosome case series reports hyperpigmentation and melasma among its eight cases (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11736088/" rel="noopener nofollow" target="_blank">Majewska 2025</a>). The reviews list melasma among the indications with "clinical efficacy" while noting the standardisation gap (<a href="https://pubmed.ncbi.nlm.nih.gov/40533901/" rel="noopener nofollow" target="_blank">Nahm 2025</a>).</p>
      <p>Emerging: the 60-patient comparison is not described as randomised and the exosome groups also had the extra device. The <a href="/dark-spots">dark spots guide</a> carries the ladder that works — iron-oxide tinted sunscreen, hydroquinone and the triple cream, tranexamic acid, then the lasers — and the <a href="/sunscreen">sunscreen guide</a> the base under all of it.</p>
    `,
  },
  {
    id: 'use-sensitive-inflammatory',
    category: 'use',
    title: 'Sensitive skin, atopic dermatitis and psoriasis: the anti-inflammatory story',
    tldr: 'Twenty-two women with sensitive skin used a stem-cell exosome preparation for 28 days in an open study and reported less roughness, scaling, redness, tension and burning, with barrier measurements moving toward normal; twelve psoriasis patients using a stem-cell secretome sponge for 30 days had plaque scores fall by up to 33% and plaque size by 41% in a small controlled study; the scoping review lists atopic dermatitis and psoriasis among the indications with early data. Emerging — plausible immunomodulation, no randomised placebo-controlled trial on faces, and prescription treatments with real trials for every condition named.',
    evidence: 'emerging',
    focus: 'redness',
    note: 'Best for: a research setting; for a reactive face the facial redness guide has the treatments, and a bland moisturiser does what the open study\'s vehicle would have',
    sessions: 'Daily topical use in the studies',
    downtime: 'None',
    cost: '€80–350 for a serum',
    bodyHtml: `
      <p>The sensitive-skin study: 22 women, exosomes from primary mesenchymal stem cells characterised to the ISEV standard, 28 days; "scores of objective symptoms including roughness, scales, erythema, and subjective symptoms including tension, burning, or itching, were improved after 7-, 14-, and 28- day using hMSC-exosomes. TEWL, hydration, sebum, pH, and a* values were tended to return to the level of healthy skin" — no control group (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9633936/" rel="noopener nofollow" target="_blank">Ye 2022</a>). The psoriasis study: a Wharton\'s-jelly secretome and hyaluronic-acid sponge containing exosomes of 164 ± 87 nm; "in a 30-day efficacy study, 12 patients with bilateral psoriasis exhibited up to a 33% reduction in mPASI scores and a 41% decrease in plaque size", with transepidermal water loss down 30% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12232821/" rel="noopener nofollow" target="_blank">Elgueta 2025</a>). The mechanism is the best-documented part: umbilical-cord exosomes "demonstrated stronger immunomodulatory activity and more pronounced SASP reduction in ultraviolet-damaged skin" in the laboratory (<a href="https://pubmed.ncbi.nlm.nih.gov/41800728/" rel="noopener nofollow" target="_blank">Ponnikorn 2026</a>), and the mechanism reviews cover psoriasis, dermatitis and vitiligo (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10929203/" rel="noopener nofollow" target="_blank">Yu 2024</a>).</p>
      <p>Emerging: the effects are on symptom scores in studies without placebo arms, in conditions where a placebo cream moves symptom scores too. The <a href="/facial-redness">facial redness guide</a> grades the treatments with trials, and an exosome serum for a barrier problem is, in Europe, a plant-vesicle cosmetic at best.</p>
    `,
  },
  {
    id: 'use-topical-intact-skin',
    category: 'use',
    title: 'An exosome serum on intact skin: the 500-Dalton wall',
    tldr: 'The stratum corneum stops molecules over about 500 Daltons and an exosome is a particle thousands of times larger; the one penetration study found vesicles in the dermis only through needle, laser or plasma channels. The serum studies are single-arm and sponsor-run: 6-week imaging gains and, in 56 people over 12 weeks, thicker collagen fibrils on biopsy with 87% self-reported improvement — no vehicle side to compare with; a 28-day milk-vesicle cosmetic study reports moisture and wrinkles; the growth-factor serum literature that exosome serums imitate shows modest gains and "no statistically significant differences between treatments" in its three comparative trials; and the one blinded trial of a "stem-cell" cream found the placebo side improved as much. Limited.',
    evidence: 'limited',
    focus: 'topical',
    note: 'Best for: nobody as a repair product — a retinoid enters the skin and has biopsies; an exosome serum has neither',
    sessions: 'Twice daily in the studies',
    downtime: 'None',
    cost: '€80–350 for 30 ml',
    bodyHtml: `
      <p>The barrier: "the molecular weight (MW) of a compound must be under 500 Dalton to allow skin absorption. Larger molecules cannot pass the corneal layer" (<a href="https://pubmed.ncbi.nlm.nih.gov/10839713/" rel="noopener nofollow" target="_blank">Bos 2000</a>); labelled exosomes reached the deep dermis only under microneedling, laser or plasma (<a href="https://pubmed.ncbi.nlm.nih.gov/36573453/" rel="noopener nofollow" target="_blank">Wang 2023</a>); the rose-exosome investigators note that "limited penetration restricts clinical utility" (<a href="https://pubmed.ncbi.nlm.nih.gov/41800727/" rel="noopener nofollow" target="_blank">Huang 2026</a>). The serum studies: "This prospective, single-arm, non-randomized, longitudinal study" of a platelet extract found imaging "skin health score" improved at six weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/35689936/" rel="noopener nofollow" target="_blank">Proffer 2022</a>); the follow-up, "prospective, single-arm, non-randomized, evaluator-blinded", enrolled 56 people for 12 weeks, "87.3% of subjects reported improvement" and "histology revealed a significant increase in collagen fibril thickness" — with no vehicle arm to show what twelve weeks of moisturiser and sun protection do (<a href="https://pubmed.ncbi.nlm.nih.gov/39231070/" rel="noopener nofollow" target="_blank">Wyles 2024</a>); bovine milk vesicles applied by 31 volunteers for 28 days were reported to preserve moisture and reduce wrinkles (<a href="https://pubmed.ncbi.nlm.nih.gov/38105431/" rel="noopener nofollow" target="_blank">Lu 2024</a>). The genre: growth-factor preparations across 33 studies and 1,180 participants gave "a modest improvement in skin texture (median &lt; 50%), fine lines/wrinkles (median &lt; 35%)" against baseline, and "three comparative RCTs showed no statistically significant differences between treatments" (<a href="https://pubmed.ncbi.nlm.nih.gov/37222303/" rel="noopener nofollow" target="_blank">Quinlan 2023</a>); the blinded split-face trial of a deer stem-cell conditioned-media cream: "Blinded investigator assessments did not detect any statistically significant differences between the two halves of the face" (<a href="https://pubmed.ncbi.nlm.nih.gov/31012565/" rel="noopener nofollow" target="_blank">Alhaddad 2019</a>). The reviews\' verdict on topical exosomes: "generally considered safe in humans on intact skin", with no consensus on benefit (<a href="https://pubmed.ncbi.nlm.nih.gov/36597716/" rel="noopener nofollow" target="_blank">Vyas 2023</a>).</p>
      <p>Limited, as the <a href="/serums">serums guide</a> grades the whole "regenerative" shelf. Safe on intact skin, expensive, and unable to reach the cells it is sold to instruct; the money belongs in a <a href="/retinoids">retinoid</a>, a <a href="/sunscreen">sunscreen</a> and a vitamin C serum, all of which have blinded trials.</p>
    `,
  },
  {
    id: 'use-injected-iv',
    category: 'use',
    title: 'Injected, "mesotherapy" and intravenous exosomes: unlawful, and where the harm is',
    tldr: 'No exosome product is approved for injection or infusion anywhere. The FDA\'s safety notification followed serious adverse events in Nebraska patients who received unapproved exosome injections; the scoping review of human studies lists "granulomas, necrosis, and allergic reactions post-injection"; the hair review counts at least ten serious adverse events in dermatology; and the practising-dermatologist review names infection, unwanted inflammation and "promotion of malignancy" as the theoretical risks of putting a cell\'s signalling cargo into tissue. No controlled trial of injected exosomes exists for any aesthetic indication. Limited — for the evidence, and prohibited for the practice.',
    evidence: 'limited',
    focus: 'injected',
    note: 'Best for: nobody — the same money in PRP, a filler or a biostimulator buys a licensed product with trials',
    sessions: '—',
    downtime: '—',
    cost: '€300–1,500 per session where sold',
    bodyHtml: `
      <p>The regulators: "There are currently no FDA-approved exosome products" and the notification followed "multiple recent reports of serious adverse events experienced by patients in Nebraska" (<a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">FDA 2019</a>); in Europe, a product administered to treat is a medicinal product under the ordinary or advanced-therapy frameworks and none is licensed (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13314385/" rel="noopener nofollow" target="_blank">Limongi 2026</a>). The harms: "Adverse events were uncommon but included granulomas, necrosis, and allergic reactions post-injection" (<a href="https://pubmed.ncbi.nlm.nih.gov/41931695/" rel="noopener nofollow" target="_blank">Wang 2026</a>); "in the broader field of dermatology, at least 10 serious adverse events have been reported" (<a href="https://pubmed.ncbi.nlm.nih.gov/39447204/" rel="noopener nofollow" target="_blank">Queen &amp; Avram 2025</a>); "clinical studies are lacking, and there are substantial safety concerns, such as the potential risk of infections, unwanted inflammatory response, and promotion of malignancy" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12007658/" rel="noopener nofollow" target="_blank">Mahmoud 2025</a>). The one lawful injection study — clinical-grade platelet vesicles in a phase I trial — was designed to test safety, found it, and found no healing benefit (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10290200/" rel="noopener nofollow" target="_blank">Johnson 2023</a>). The society position: "a global industry of direct-to-consumer offerings of prematurely commercialized cell and cell-based products with unknown safety and efficacy profiles" (<a href="https://pubmed.ncbi.nlm.nih.gov/37517865/" rel="noopener nofollow" target="_blank">Ikonomou 2023</a>).</p>
      <p>Limited, as the <a href="/hair-loss">hair loss</a>, <a href="/collagen-loss">collagen loss</a>, <a href="/regenerative-aesthetics">biostimulator</a> and <a href="/longevity-clinics">longevity clinics</a> guides grade the injections and drips. The distinction this whole page turns on: on the skin after a device, an exosome is an unproven cosmetic; in a syringe, it is an unlicensed medicine of unknown content, and the case reports are of the second kind.</p>
    `,
  },
  {
    id: 'use-antiaging-claims',
    category: 'use',
    title: '"Reversing aging", "senolytic", "regenerating collagen": the claims',
    tldr: 'In the laboratory, adipose and umbilical exosomes reduced senescence markers and raised collagen and hyaluronic acid in fibroblasts and skin explants — real mechanism, on a bench. In people, the only collagen measurement is a biopsy after radiofrequency microneedling in which the exosome side and the PRP side rose equally, and a single-arm serum study with no control. The manufacturer audit found 27% of public claims misleading; the systematic review of regenerative aesthetics found the field lacking the rigour to be a specialty. Limited for the claims as sold.',
    evidence: 'limited',
    focus: 'marketing',
    note: 'Best for: understanding the gap between a fibroblast in a dish and a face — the retinoids and biostimulator guides have the collagen biopsies',
    sessions: '—',
    downtime: '—',
    cost: 'The premium on every product above',
    bodyHtml: `
      <p>The bench: "Both exosome types increased fibroblast proliferation and reduced senescence. AD-MSC exosomes showed higher vascular endothelial growth factor (VEGF) content, driving angiogenesis and greater collagen and hyaluronic acid production. UC-MSC exosomes … demonstrated stronger immunomodulatory activity and more pronounced SASP reduction" — in dermal fibroblasts and skin explants, with retinoic acid as the reference control (<a href="https://pubmed.ncbi.nlm.nih.gov/41800728/" rel="noopener nofollow" target="_blank">Ponnikorn 2026</a>); the plant-vesicle literature on photoaging is likewise cellular and murine (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12711848/" rel="noopener nofollow" target="_blank">Dong 2025</a>). The people: collagen I rose on biopsy after radiofrequency microneedling "without significant differences between treatment arms" of exosomes and PRP (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12104007/" rel="noopener nofollow" target="_blank">Estupiñan 2025</a>); the serum histology had no control (<a href="https://pubmed.ncbi.nlm.nih.gov/39231070/" rel="noopener nofollow" target="_blank">Wyles 2024</a>). The claims: "27% of claims were misleading" and "most companies relying on vague and promotional language" (<a href="https://pubmed.ncbi.nlm.nih.gov/40055226/" rel="noopener nofollow" target="_blank">Rahman 2025c</a>); "the field of regenerative aesthetics lacks the necessary scientific rigour and regulatory compliance to be recognized as a legitimate medical specialty" (<a href="https://pubmed.ncbi.nlm.nih.gov/39198280/" rel="noopener nofollow" target="_blank">Rahman 2025b</a>); and the reporting standard\'s caution that exosome-specific activity claims "remain difficult to support experimentally" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6322352/" rel="noopener nofollow" target="_blank">Théry 2018</a>).</p>
      <p>Limited, in the site\'s sense of marketing running ahead of measurement. The collagen that has been measured on human biopsies belongs to tretinoin (the <a href="/retinoids">retinoids guide</a>), to the poly-L-lactic acid and calcium hydroxylapatite biostimulators (the <a href="/regenerative-aesthetics">biostimulator guide</a>) and to the fractional lasers (the <a href="/skin-resurfacing">resurfacing guide</a>).</p>
    `,
  },
  {
    id: 'use-grey-hair-other',
    category: 'use',
    title: 'Grey hair, stretch marks, cellulite, under-eye circles and the rest of the menu',
    tldr: 'A cross-sectional study of ten people treated with rose stem-cell exosomes for grey hair reported repigmentation after a mean of 2.4 sessions lasting a mean of 4.7 months, without a control group; the other indications on clinic menus — stretch marks, cellulite, dark circles, "exosome lip", "exosome neck" — have case reports or nothing. Limited.',
    evidence: 'limited',
    focus: 'marketing',
    note: 'Best for: nobody — each of these concerns has its own guide with the treatments that have trials',
    sessions: '—',
    downtime: '—',
    cost: '€200–600 per session where sold',
    bodyHtml: `
      <p>The grey-hair study: "This cross-sectional observational study enrolled 10 patients with visible gray or white hair who were treated with rose stem cell-derived exosomes (RSCEs) using various procedures … Repigmentation was observed after an average of 2.4 ± 0.7 sessions and was maintained for 4.7 ± 1.9 months … 60% achieving a higher-grade response" — an observational series with no comparator, from the group that also published a single case of rose exosomes delivered by electroporation for pattern hair loss (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12593320/" rel="noopener nofollow" target="_blank">Lueangarun 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/38979924/" rel="noopener nofollow" target="_blank">Lueangarun 2024</a>). The rose-exosome case series covers eight patients across atopic dermatitis, pigmentation, scarring, wounds and "antiaging concerns" and "emphasizes the need for further randomized and controlled clinical trials" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11736088/" rel="noopener nofollow" target="_blank">Majewska 2025</a>). For the remaining menu items there is no human study to cite.</p>
      <p>Limited. The <a href="/cellulite">cellulite</a>, <a href="/dark-circles">dark circles</a>, <a href="/neck">neck</a> and <a href="/thin-lips">lips</a> guides grade what works for each; none of them has an exosome row because there is nothing to grade.</p>
    `,
  },
];

const products: Section[] = [
  {
    id: 'prod-asc-exosomes',
    category: 'product',
    title: 'Adipose stem-cell exosomes (the Korean lyophilised powders and gels)',
    tldr: 'Vesicles harvested from cultured fat-tissue stem cells, freeze-dried and reconstituted in the clinic: the product in the acne-scar trial (32.5% against 19.9% improvement after CO2 laser), the PRP comparison (equal, with equal collagen on biopsy), the fresh-scar study and the 39-patient hair series. Richer in the vessel-growth factor VEGF than umbilical exosomes in the laboratory. Human-derived, so not a lawful cosmetic in the EU, and imported into European clinics on that footing. Emerging — the source with the most and the best studies, which is still one double-blind trial.',
    evidence: 'emerging',
    focus: 'human',
    note: 'Top pick: if exosomes at all, an adipose-derived product with a named manufacturer and a particle count, applied after a fractional laser or RF microneedling — never injected',
    sessions: 'Applied after each device session',
    downtime: 'The device\'s',
    cost: '€150–400 per session as an add-on',
    bodyHtml: `
      <p>The trials: the double-blind split-face acne-scar trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9309822/" rel="noopener nofollow" target="_blank">Kwon 2020</a>); the PRP non-inferiority comparison after radiofrequency microneedling (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12104007/" rel="noopener nofollow" target="_blank">Estupiñan 2025</a>); the ten-patient split-scar study (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12945872/" rel="noopener nofollow" target="_blank">Jeong 2026</a>); the 39-patient topical hair series cited in the systematic review (<a href="https://pubmed.ncbi.nlm.nih.gov/37381168/" rel="noopener nofollow" target="_blank">Gupta 2023</a>); and the hair systematic review\'s note that "the greatest level of evidence came from RCTs with adipose- and plant extract-derived exosome formulation" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12433634/" rel="noopener nofollow" target="_blank">Al Ameer 2025</a>). The biology: "AD-MSC exosomes favor dermal ECM remodeling and hydration" (<a href="https://pubmed.ncbi.nlm.nih.gov/41800728/" rel="noopener nofollow" target="_blank">Ponnikorn 2026</a>). The law: human-origin material is prohibited in EU cosmetics (<a href="https://eur-lex.europa.eu/eli/reg/2009/1223/oj/eng" rel="noopener nofollow" target="_blank">Regulation (EC) No 1223/2009</a>), and topical is the only route any regulator has permitted (<a href="https://pubmed.ncbi.nlm.nih.gov/37498301/" rel="noopener nofollow" target="_blank">Olumesi 2023</a>).</p>
      <p>Emerging: the adipose source carries the field\'s one blinded trial and its best comparison, both run with the manufacturer\'s involvement and both as after-care to a device. The pick is conditional on the clinic being able to name the product, the country and the count, and on the needle staying in the device rather than the vial.</p>
    `,
  },
  {
    id: 'prod-umbilical-placental',
    category: 'product',
    title: 'Umbilical cord, Wharton\'s jelly and placental stem-cell exosomes',
    tldr: 'The source with the strongest medical trial — 110 diabetic foot ulcers healing in 6 weeks against 20 with weekly topical Wharton\'s-jelly exosomes — and, in aesthetics, the 60-patient melasma comparison and the laboratory profile of stronger immunomodulation and anti-inflammatory activity. Also the source most often behind the American clinic vials the FDA acted on, of birth-tissue provenance that a buyer cannot verify, and human-derived, so outside EU cosmetic law. Emerging for the science, with the largest regulatory shadow.',
    evidence: 'emerging',
    focus: 'human',
    note: 'Top pick: none in aesthetics — the medical trials are in wounds, and the cosmetic vials are of unverifiable origin',
    sessions: 'Weekly (wounds) or per device session (aesthetics)',
    downtime: 'None to the device\'s',
    cost: '€150–500 per application where sold',
    bodyHtml: `
      <p>The wound trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12519741/" rel="noopener nofollow" target="_blank">Kishta 2025</a>), the melasma comparison (<a href="https://pubmed.ncbi.nlm.nih.gov/36573453/" rel="noopener nofollow" target="_blank">Wang 2023</a>), the psoriasis secretome sponge (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12232821/" rel="noopener nofollow" target="_blank">Elgueta 2025</a>) and the laboratory comparison in which "UC-MSC exosomes exert potent anti-inflammatory and photo-protective effects" (<a href="https://pubmed.ncbi.nlm.nih.gov/41800728/" rel="noopener nofollow" target="_blank">Ponnikorn 2026</a>) are the evidence. The market: formulations "primarily derived from human stem cells" (<a href="https://pubmed.ncbi.nlm.nih.gov/40533901/" rel="noopener nofollow" target="_blank">Nahm 2025</a>), sold in the United States as unapproved biologics (<a href="https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes" rel="noopener nofollow" target="_blank">FDA consumer alert</a>) and in Europe outside the cosmetics regulation.</p>
      <p>Emerging, with the caveat that the only convincing trial is for a disease no aesthetic clinic treats. A birth-tissue product carries the questions of donor screening and provenance that a fat-tissue product from a named Korean manufacturer answers more easily, and the same 500-Dalton and needle rules apply.</p>
    `,
  },
  {
    id: 'prod-platelet-exosomes',
    category: 'product',
    title: 'Platelet-derived exosomes and "human platelet extract" serums',
    tldr: 'Vesicles from pooled donor platelets, sold as a topical serum: a single-arm six-week imaging study, a single-arm 12-week study of 56 people with 87% self-reported improvement and thicker collagen fibrils on biopsy, and a phase I injection trial in healthy volunteers that found the vesicles safe and no faster than untreated wounds. A review of platelet-derived exosomes finds "scarce information" on hair growth and skin rejuvenation. Emerging — trials exist, none with a vehicle arm, all with the manufacturer.',
    evidence: 'emerging',
    focus: 'human',
    note: 'Top pick: none over a vitamin C–E–ferulic serum, which has vehicle-controlled photoprotection data at a fifth of the price',
    sessions: 'Twice daily',
    downtime: 'None',
    cost: '€150–350 for 30 ml',
    bodyHtml: `
      <p>The studies: "a prospective, single-arm, non-randomized, longitudinal study" with imaging gains at six weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/35689936/" rel="noopener nofollow" target="_blank">Proffer 2022</a>); 56 participants, "prospective, single-arm, non-randomized, evaluator-blinded", 12 weeks, "87.3% of subjects reported improvement" and "a significant increase in collagen fibril thickness" (<a href="https://pubmed.ncbi.nlm.nih.gov/39231070/" rel="noopener nofollow" target="_blank">Wyles 2024</a>); the phase I trial in which injected clinical-grade platelet vesicles were "safe and well tolerated" and "no difference in time to wound closure of the treated and untreated wounds was observed" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10290200/" rel="noopener nofollow" target="_blank">Johnson 2023</a>). The review: "there is scarce information on the use of platelet-rich plasma-derived exosomes in hair growth and skin rejuvenation. Isolation techniques, activation methods, and methods of delivery have not been optimized" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845942/" rel="noopener nofollow" target="_blank">Gupta 2025</a>). The comparator with vehicle-controlled data on intact skin is the vitamin C–E–ferulic serum in the <a href="/serums">serums guide</a>.</p>
      <p>Emerging: the design is the tell. A 12-week single-arm study of a serum in people told to use sunscreen and a standard regimen will show improvement in most participants whatever is in the bottle, which is why the site grades on vehicle-controlled trials — and why this product, human-derived, is again not a lawful EU cosmetic.</p>
    `,
  },
  {
    id: 'prod-conditioned-media',
    category: 'product',
    title: 'Stem-cell conditioned media and "secretome" products: the older cousin with more trials',
    tldr: 'The liquid stem cells were grown in, containing their secreted growth factors and vesicles together: a 15-person split-face randomised trial with fractional radiofrequency (roughness better, dermal thickness up on histology), a 48-woman randomised trial against saline with microneedling (photoaging better), a 64-person randomised trial against vehicle (pores, wrinkles, spots better), six hair studies in 229 patients with density up 7–16% — and the one double-blind vehicle-controlled cream trial in which blinded graders saw no difference. Emerging: more randomised trials than exosomes have, small and short, with one clean negative.',
    evidence: 'emerging',
    focus: 'topical',
    note: 'Top pick: the deer-derived cream is the only one with a blinded placebo trial, and it lost — a conditioned-medium product belongs, like exosomes, after a device or nowhere',
    sessions: 'After each device session, or twice daily as a cream',
    downtime: 'None to the device\'s',
    cost: '€100–300 per session; €100–250 a cream',
    bodyHtml: `
      <p>The device trials: "Stem cell conditioned medium provided a synergistic effect on improvement of skin roughness, which was statistically significant (p &lt; 0.05). Histologic examination revealed marked increase in dermal thickness and dermal collagen content" in 15 women after fractional radiofrequency (<a href="https://pubmed.ncbi.nlm.nih.gov/23368685/" rel="noopener nofollow" target="_blank">Seo 2013</a>); 48 women randomised to amniotic-membrane stem-cell conditioned medium or saline with microneedling, "significant better effects with the AMSC-CM than with NS" (<a href="https://pubmed.ncbi.nlm.nih.gov/30265171/" rel="noopener nofollow" target="_blank">Prakoeswa 2019</a>); 64 photoaged subjects randomised to adipose stem-cell conditioned medium or vehicle, better "pore, wrinkle, spot polarized, spot UV parameters and skin tone" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11750066/" rel="noopener nofollow" target="_blank">Putri 2024</a>); for hair, "CM was the most extensively investigated therapy (6 studies, 229 patients), showing consistent improvements in hair density (7-16%) and thickness (11-32%)" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13191867/" rel="noopener nofollow" target="_blank">Behrangi 2026</a>). The cream: 40 subjects, three months, red-deer umbilical-cord-lining conditioned media against vehicle, "Blinded investigator assessments did not detect any statistically significant differences between the two halves of the face" (<a href="https://pubmed.ncbi.nlm.nih.gov/31012565/" rel="noopener nofollow" target="_blank">Alhaddad 2019</a>), with the manufacturer\'s laboratory work on elastin and hyaluronic acid in fibroblasts (<a href="https://pubmed.ncbi.nlm.nih.gov/36607757/" rel="noopener nofollow" target="_blank">Ong 2023</a>).</p>
      <p>Emerging, and instructive: conditioned media are what the exosome industry grew out of, they have three small randomised trials with a device and one blinded trial without, and the pattern — a signal when the skin is opened, none when it is not — is the pattern this whole page describes. The deer-derived product, being animal rather than human, is at least a lawful European cosmetic.</p>
    `,
  },
  {
    id: 'prod-hair-products',
    category: 'product',
    title: 'Exosome scalp products used after microneedling',
    tldr: 'The Korean lyophilised complexes and the American "regenerative complex" applied to a freshly needled scalp: a 30-person open-label study with hair counts up at four months, the 39-patient adipose series, and the eleven-study hair review\'s density range of 9.5–35 hairs per cm². No placebo-controlled trial in which the needling was held constant and the vial was the only difference, and no comparison against minoxidil. Emerging, at €1,200–3,000 a course.',
    evidence: 'emerging',
    focus: 'hair',
    note: 'Top pick: none over minoxidil with microneedling, which ranks first in the network meta-analysis and costs a tenth as much',
    sessions: '3–4 sessions a month apart',
    downtime: 'A day of scalp redness',
    cost: '€1,200–3,000 a course',
    bodyHtml: `
      <p>The studies are in the <a href="#use-hair-loss">hair row</a>: the open-label complex study (<a href="https://pubmed.ncbi.nlm.nih.gov/41037530/" rel="noopener nofollow" target="_blank">Ablon 2025</a>), the 39-patient series (<a href="https://pubmed.ncbi.nlm.nih.gov/37381168/" rel="noopener nofollow" target="_blank">Gupta 2023</a>), the eleven-study review (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12433634/" rel="noopener nofollow" target="_blank">Al Ameer 2025</a>), the 125-patient safety review (<a href="https://pubmed.ncbi.nlm.nih.gov/39447204/" rel="noopener nofollow" target="_blank">Queen &amp; Avram 2025</a>). The comparators: 5% minoxidil plus microneedling first, PRP alone and microneedling alone behind it (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10697753/" rel="noopener nofollow" target="_blank">Gupta 2023b</a>); PRP, finasteride and minoxidil "approximately equivalent in mean change hair count" with low-quality evidence for PRP (<a href="https://pubmed.ncbi.nlm.nih.gov/29797431/" rel="noopener nofollow" target="_blank">Gupta 2018</a>).</p>
      <p>Emerging. The <a href="/hair-loss">hair loss guide</a> has the ladder; an exosome course is a plausible fourth rung for the patient who has climbed the other three, and an expensive first rung for the one who has not.</p>
    `,
  },
  {
    id: 'prod-plant-milk-vesicles',
    category: 'product',
    title: 'Plant, milk and bacterial "exosome-like" vesicles: the lawful European cosmetic',
    tldr: 'Nanovesicles from rose, ginseng, centella, grape, coriander or cow\'s milk: biocompatible, cheap to make, permitted in EU cosmetics, and studied almost entirely in cells and mice. The human data are a six-person split-face series after needling radiofrequency, an eight-case series, a ten-person grey-hair series, one case report and a 31-volunteer 28-day milk-vesicle study. Limited — the evidence is preclinical, and the word "exosome" on the label is doing the work.',
    evidence: 'limited',
    focus: 'plant',
    note: 'Top pick: none — as a moisturiser it is fine and as a treatment it is unmeasured; the price should be a moisturiser\'s',
    sessions: 'Daily, or after a device',
    downtime: 'None',
    cost: '€40–150',
    bodyHtml: `
      <p>The reviews: plant-derived vesicles are "characterized by intrinsic biocompatibility" with "multi-target effects" in preclinical models, while "toxicology, stability, delivery efficiency, manufacturing scalability, and regulatory compliance" remain the obstacles (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12514849/" rel="noopener nofollow" target="_blank">Liu 2025</a>); the photoaging work is cellular and murine (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12711848/" rel="noopener nofollow" target="_blank">Dong 2025</a>). The human data: six subjects after needling radiofrequency (<a href="https://pubmed.ncbi.nlm.nih.gov/41800727/" rel="noopener nofollow" target="_blank">Huang 2026</a>); eight cases (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11736088/" rel="noopener nofollow" target="_blank">Majewska 2025</a>); ten grey-hair patients without a control group (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12593320/" rel="noopener nofollow" target="_blank">Lueangarun 2025</a>); a single case of pattern hair loss treated with electroporation (<a href="https://pubmed.ncbi.nlm.nih.gov/38979924/" rel="noopener nofollow" target="_blank">Lueangarun 2024</a>); 31 volunteers using bovine milk vesicles for 28 days, with laboratory work on keratinocyte moisture genes and collagen (<a href="https://pubmed.ncbi.nlm.nih.gov/38105431/" rel="noopener nofollow" target="_blank">Lu 2024</a>). The manufacturer audit found growth-factor content varying significantly between human-, plant- and animal-derived products (<a href="https://pubmed.ncbi.nlm.nih.gov/40055226/" rel="noopener nofollow" target="_blank">Rahman 2025c</a>).</p>
      <p>Limited: a rose vesicle is not a stem-cell vesicle, the biology is different by definition, and the trials that give the human products their emerging tier were not done with these. They are, however, the only exosome cosmetics that can be sold lawfully in Europe, which is why the shelf is full of them.</p>
    `,
  },
  {
    id: 'prod-otc-serums',
    category: 'product',
    title: 'Over-the-counter "exosome" serums, creams and ampoules',
    tldr: 'Whatever the source, a serum on intact skin faces the 500-Dalton wall, the studies are single-arm, the content is unstated — 18% of manufacturers rated transparent — and in Europe a human-derived one is not a lawful cosmetic at all. Limited, as the serums guide grades the regenerative shelf.',
    evidence: 'limited',
    focus: 'marketing',
    note: 'Top pick: none — a retinoid at night and vitamin C under sunscreen in the morning is the evidence-based version of what the bottle promises',
    sessions: 'Twice daily',
    downtime: 'None',
    cost: '€80–350 for 30 ml',
    bodyHtml: `
      <p>The barrier (<a href="https://pubmed.ncbi.nlm.nih.gov/10839713/" rel="noopener nofollow" target="_blank">Bos 2000</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/36573453/" rel="noopener nofollow" target="_blank">Wang 2023</a>), the single-arm serum studies (<a href="https://pubmed.ncbi.nlm.nih.gov/35689936/" rel="noopener nofollow" target="_blank">Proffer 2022</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/39231070/" rel="noopener nofollow" target="_blank">Wyles 2024</a>), the transparency audit (<a href="https://pubmed.ncbi.nlm.nih.gov/40055226/" rel="noopener nofollow" target="_blank">Rahman 2025c</a>), the blinded cream trial that found no difference (<a href="https://pubmed.ncbi.nlm.nih.gov/31012565/" rel="noopener nofollow" target="_blank">Alhaddad 2019</a>) and the EU prohibition on human-origin material in cosmetics (<a href="https://eur-lex.europa.eu/eli/reg/2009/1223/oj/eng" rel="noopener nofollow" target="_blank">Regulation (EC) No 1223/2009</a>) are set out in the <a href="#use-topical-intact-skin">intact-skin row</a>. The growth-factor serum literature the category imitates shows modest gains and no differences in its comparative trials (<a href="https://pubmed.ncbi.nlm.nih.gov/37222303/" rel="noopener nofollow" target="_blank">Quinlan 2023</a>).</p>
      <p>Limited, consistent with the <a href="/serums">serums</a>, <a href="/collagen-loss">collagen loss</a> and <a href="/wrinkles">wrinkles</a> guides. The routine those guides support costs less than one bottle of this.</p>
    `,
  },
  {
    id: 'prod-injectables-drips',
    category: 'product',
    title: 'Injectable vials and intravenous "exosome drips"',
    tldr: 'The products behind the FDA\'s Nebraska notification and the granuloma, necrosis and allergy reports: unlicensed everywhere, of unverifiable content, sold as "exosome facelifts", scalp injections and anti-aging infusions. No controlled trial for any aesthetic indication; one phase I safety trial of a clinical-grade product, which found no benefit. Limited, and unlawful.',
    evidence: 'limited',
    focus: 'injected',
    note: 'Top pick: none — walk away, and report a clinic that offers them',
    sessions: '—',
    downtime: '—',
    cost: '€300–1,500 per session where sold',
    bodyHtml: `
      <p>The evidence and the law are in the <a href="#use-injected-iv">injection row</a>: the FDA notification and alert (<a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">FDA 2019</a>; <a href="https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes" rel="noopener nofollow" target="_blank">FDA 2020</a>), the European classification (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13314385/" rel="noopener nofollow" target="_blank">Limongi 2026</a>), the adverse events (<a href="https://pubmed.ncbi.nlm.nih.gov/41931695/" rel="noopener nofollow" target="_blank">Wang 2026</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/39447204/" rel="noopener nofollow" target="_blank">Queen &amp; Avram 2025</a>), the theoretical risks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12007658/" rel="noopener nofollow" target="_blank">Mahmoud 2025</a>), the phase I trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10290200/" rel="noopener nofollow" target="_blank">Johnson 2023</a>) and the society position on unproven products (<a href="https://pubmed.ncbi.nlm.nih.gov/37517865/" rel="noopener nofollow" target="_blank">Ikonomou 2023</a>).</p>
      <p>Limited, as every guide on this site grades them. The licensed injectables with trials — hyaluronic acid, the biostimulators, PRP from your own blood — are in the <a href="/fillers">fillers</a> and <a href="/regenerative-aesthetics">biostimulator</a> guides, and the <a href="/longevity-clinics">longevity clinics guide</a> covers the drip.</p>
    `,
  },
  {
    id: 'prod-comparators',
    category: 'product',
    title: 'Instead: PRP, microneedling, minoxidil and the retinoid — the alternatives with controlled trials',
    tldr: 'For acne scars, microneedling with PRP triples the odds of a better-than-50% improvement across 14 studies; for hair, minoxidil with microneedling ranks first in a 27-trial network meta-analysis and PRP adds density in nine randomised trials; for photoaging, tretinoin has biopsy-proven collagen and a Cochrane review, and the fractional lasers have decades of data. Exosomes matched PRP in one split-face comparison and have not been tested against the rest. Moderate — the tier of the alternatives, not of exosomes.',
    evidence: 'moderate',
    focus: 'general',
    note: 'Top pick: the treatment your concern\'s own guide grades highest — with exosomes, at most, as its after-care',
    sessions: 'Per the treatment',
    downtime: 'Per the treatment',
    cost: 'PRP €250–600 a session; microneedling €150–400; minoxidil €10–20 a month; tretinoin €10–30 a month',
    bodyHtml: `
      <p>Acne scars: microneedling improves scars in 12 randomised trials (<a href="https://pubmed.ncbi.nlm.nih.gov/35426044/" rel="noopener nofollow" target="_blank">Shen 2022</a>) and PRP added to it gives "increased odds of clinical improvement of &gt;50% … odds ratio (OR): 2.97" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8882957/" rel="noopener nofollow" target="_blank">Kang 2021</a>). Hair: "5% minoxidil plus microneedling (SUCRA = 95.8%)" first, then minoxidil plus PRP, minoxidil, PRP, microneedling (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10697753/" rel="noopener nofollow" target="_blank">Gupta 2023b</a>); PRP "increased hair density at 3 and 6 months with statistically significant differences compared with the placebo" in nine randomised trials (<a href="https://pubmed.ncbi.nlm.nih.gov/37533146/" rel="noopener nofollow" target="_blank">Zhang 2023</a>). Photoaging with a device: exosomes and PRP "equally improved" the face and its collagen after radiofrequency microneedling (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12104007/" rel="noopener nofollow" target="_blank">Estupiñan 2025</a>). The regenerative-medicine field\'s randomised trials, across 64 studies and 2,888 patients, are mostly PRP and cell transplantation for hair loss and vitiligo — not exosomes (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11184747/" rel="noopener nofollow" target="_blank">Jafarzadeh 2024</a>).</p>
      <p>Moderate, as the <a href="/regenerative-aesthetics">biostimulator</a>, <a href="/microneedling">microneedling</a> and <a href="/hair-loss">hair loss</a> guides grade PRP and microneedling for these uses, and strong for tretinoin in the <a href="/retinoids">retinoids guide</a>. The row exists so that the reader who arrived asking about exosomes leaves knowing what the same money buys with trials behind it.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-injection-harms',
    category: 'safety',
    title: 'The harm reports: injections, infections, granulomas and the Nebraska patients',
    tldr: 'Every serious harm in the exosome literature follows an injection or infusion of an unapproved product: the FDA\'s notification cites "serious adverse events" in Nebraska; the scoping review lists granulomas, necrosis and allergic reactions after injection; the hair review counts at least ten serious events in dermatology. Topical use after a device has, in the small trials, produced only transient redness. The theoretical risks of putting a cell\'s signalling cargo into tissue — infection from a non-sterile vial, immune reaction to donor material, and the promotion of a malignancy — are named by the reviews and unmeasured by anyone.',
    bodyHtml: `
      <p>The reports: "multiple recent reports of serious adverse events experienced by patients in Nebraska" who received unapproved exosome products (<a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">FDA 2019</a>); "granulomas, necrosis, and allergic reactions post-injection" (<a href="https://pubmed.ncbi.nlm.nih.gov/41931695/" rel="noopener nofollow" target="_blank">Wang 2026</a>); "at least 10 serious adverse events have been reported" (<a href="https://pubmed.ncbi.nlm.nih.gov/39447204/" rel="noopener nofollow" target="_blank">Queen &amp; Avram 2025</a>); "substantial safety concerns, such as the potential risk of infections, unwanted inflammatory response, and promotion of malignancy" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12007658/" rel="noopener nofollow" target="_blank">Mahmoud 2025</a>). The topical record: no adverse events in the acne-scar trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9309822/" rel="noopener nofollow" target="_blank">Kwon 2020</a>), "transient and predominantly mild" local reactions after radiofrequency microneedling (<a href="https://pubmed.ncbi.nlm.nih.gov/42635327/" rel="noopener nofollow" target="_blank">Yen 2026</a>), "no serious adverse events" across eleven hair studies (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12433634/" rel="noopener nofollow" target="_blank">Al Ameer 2025</a>), and "generally considered safe in humans on intact skin" (<a href="https://pubmed.ncbi.nlm.nih.gov/36597716/" rel="noopener nofollow" target="_blank">Vyas 2023</a>). The animal literature gave adverse effects "only minimal attention" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9516230/" rel="noopener nofollow" target="_blank">Al-Masawa 2022</a>).</p>
      <p>The practical line: a vial on skin that a device has opened is a low-risk unknown; a vial in a syringe is a higher-risk unknown, and the harm reports say so. Anyone offered an injection should ask what product, from what species, under what licence — and expect no good answer.</p>
    `,
  },
  {
    id: 'safety-what-is-in-the-vial',
    category: 'safety',
    title: 'What is in the vial: sterility, provenance, donor screening and the missing particle count',
    tldr: 'An exosome product is a biological material of human, animal or plant origin whose content is defined by the cells, the culture, the separation and the storage, and whose label rarely states any of them; 18% of manufacturers were rated transparent. Human-derived products raise the questions any donor tissue raises — screening, sterility, the cold chain — and animal-derived ones the question of foreign proteins. The reporting standards that would answer these exist and are mostly not followed.',
    bodyHtml: `
      <p>The standards: the MISEV guidelines on source, separation and characterisation (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6322352/" rel="noopener nofollow" target="_blank">Théry 2018</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10850029/" rel="noopener nofollow" target="_blank">Welsh 2024</a>) and the finding that adherence to them is deficient "notably in exosome source characterisation and bioactive constituent delineation" (<a href="https://pubmed.ncbi.nlm.nih.gov/39078426/" rel="noopener nofollow" target="_blank">Rahman 2025</a>). The market: "high transparency was observed in 18% of manufacturers" and "growth factor concentrations showed significant variability across human-, plant-, and animal-derived sources" (<a href="https://pubmed.ncbi.nlm.nih.gov/40055226/" rel="noopener nofollow" target="_blank">Rahman 2025c</a>); the reviews name "inconsistent isolation methods, source variability" (<a href="https://pubmed.ncbi.nlm.nih.gov/39761139/" rel="noopener nofollow" target="_blank">Haykal 2025</a>) and "isolation, storage, scalability, and reproducibility" (<a href="https://pubmed.ncbi.nlm.nih.gov/35580250/" rel="noopener nofollow" target="_blank">Hartman 2022</a>) as the unsolved problems. What a proper product looks like: the psoriasis sponge study reported particle size, concentration, sterility after three months\' storage and a dose defined by protein content (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12232821/" rel="noopener nofollow" target="_blank">Elgueta 2025</a>), and the phase I trial used a clinical-grade purification (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10290200/" rel="noopener nofollow" target="_blank">Johnson 2023</a>) — the exception, not the clinic norm.</p>
      <p>The questions in the <a href="#questions-to-ask">context drawer</a> are the safety check: species, manufacturer, registration, characterisation, storage. A reconstituted powder that has sat opened in a clinic fridge is a different product from the one in the trial.</p>
    `,
  },
  {
    id: 'safety-who-should-not',
    category: 'safety',
    title: 'Who should not: cancer history, immunosuppression, pregnancy, active infection and keloid skin',
    tldr: 'The theoretical concern the reviews name is promotion of malignancy — vesicles that stimulate cell growth and blood-vessel formation are the wrong thing to apply near a tumour — so a personal history of skin cancer or any active cancer is a reason to decline; so are immunosuppression, pregnancy and breastfeeding (no data), an active infection or inflammatory flare at the site, and a tendency to keloid, where any wound-healing stimulus is a gamble. The trials enrolled healthy adults with mild-to-moderate photoaging or scars and excluded everyone else.',
    bodyHtml: `
      <p>The concern: "promotion of malignancy" among the "substantial safety concerns" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12007658/" rel="noopener nofollow" target="_blank">Mahmoud 2025</a>), grounded in the pro-angiogenic and pro-proliferative cargo shown in the laboratory (<a href="https://pubmed.ncbi.nlm.nih.gov/41800728/" rel="noopener nofollow" target="_blank">Ponnikorn 2026</a>) and in the keloid literature that studies the same pathways from the other direction (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10929203/" rel="noopener nofollow" target="_blank">Yu 2024</a>). The populations studied: healthy adults with acne scars (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9309822/" rel="noopener nofollow" target="_blank">Kwon 2020</a>), mild-to-moderate photoaging (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12104007/" rel="noopener nofollow" target="_blank">Estupiñan 2025</a>), pattern hair loss (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12433634/" rel="noopener nofollow" target="_blank">Al Ameer 2025</a>) — and healthy volunteers for the safety trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10290200/" rel="noopener nofollow" target="_blank">Johnson 2023</a>).</p>
      <p>The absence of evidence is the point: nobody has studied these products in the people most likely to be harmed, and the only sensible reading of "no data" for a growth-signalling product is "not for you".</p>
    `,
  },
  {
    id: 'safety-consent-and-recourse',
    category: 'safety',
    title: 'Consent, the IND number and what recourse you have',
    tldr: 'The FDA\'s advice to patients is to ask whether the product has been reviewed and to request the Investigational New Drug number before agreeing; a European clinic cannot produce a marketing authorisation because none exists; and a consent form that describes an unlicensed product as a "treatment" does not make it one. Adverse events go to the national medicines agency (MedWatch in the US, the Yellow Card and its EU equivalents in Europe) and, for a cosmetic, to the market-surveillance authority. The cell-therapy society publishes reporting routes precisely because patients of unproven products have few others.',
    bodyHtml: `
      <p>"Verify FDA review of the treatment and request the Investigational New Drug Application (IND) number before proceeding" and review consent forms for the risks, with adverse events reported through MedWatch (<a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">FDA 2019</a>); the society guide provides "an overview of reporting mechanisms for patients who believe they have been harmed by administration of unapproved and unproven products" (<a href="https://pubmed.ncbi.nlm.nih.gov/37517865/" rel="noopener nofollow" target="_blank">Ikonomou 2023</a>); the European classification means the responsibility for an injected product sits with the prescriber under the medicines framework (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13314385/" rel="noopener nofollow" target="_blank">Limongi 2026</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4698466/" rel="noopener nofollow" target="_blank">Lener 2015</a>).</p>
      <p>Practically: ask for the product name, the manufacturer, the country of registration and the category it is registered in, in writing, before the appointment. A topical add-on after a device from a named Korean manufacturer, applied by a doctor who can answer those questions, is the defensible end of this market; an anonymous vial in a syringe is the other end.</p>
    `,
  },
  {
    id: 'safety-topical-tolerance',
    category: 'safety',
    title: 'Allergy, irritation and the post-procedure skin',
    tldr: 'On skin a laser or needle has just opened, anything applied can sting, and a foreign protein can sensitise; the trials report transient redness and mild local reactions and no allergies, in small numbers over three months. Donor-derived and animal-derived proteins are potential allergens; plant vesicles carry the plant\'s. A product with fragrance, botanicals or preservatives on an ablated face is a poor idea whatever else it contains, and the exosome studies used simple gels.',
    bodyHtml: `
      <p>The trial record: "Treatment-related erythema was milder" on the exosome side (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9309822/" rel="noopener nofollow" target="_blank">Kwon 2020</a>); "local reactions were transient and predominantly mild" (<a href="https://pubmed.ncbi.nlm.nih.gov/42635327/" rel="noopener nofollow" target="_blank">Yen 2026</a>); "all patients completed follow-up without serious adverse events" (<a href="https://pubmed.ncbi.nlm.nih.gov/40892048/" rel="noopener nofollow" target="_blank">Vitale 2025</a>); the sensitive-skin study reported symptoms improving rather than worsening over 28 days (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9633936/" rel="noopener nofollow" target="_blank">Ye 2022</a>); the milk-vesicle cosmetic passed phototoxicity, photoallergy, repeated-irritation and patch tests (<a href="https://pubmed.ncbi.nlm.nih.gov/38105431/" rel="noopener nofollow" target="_blank">Lu 2024</a>). The allergic reactions in the scoping review followed injection, not application (<a href="https://pubmed.ncbi.nlm.nih.gov/41931695/" rel="noopener nofollow" target="_blank">Wang 2026</a>).</p>
      <p>Rules: a sterile, fragrance-free, preservative-light product on a freshly treated face; nothing new on a face that is already reacting; and the post-procedure basics of the <a href="/skin-resurfacing">resurfacing guide</a> — occlusive ointment, no picking, no sun — whether or not a vial is added to them.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-legal-europe',
    category: 'faq',
    title: 'Are exosomes legal in Europe?',
    tldr: 'On the skin, a plant-, animal- or bacteria-derived one can be a lawful cosmetic; a human-derived one cannot, because the cosmetics regulation bans products of human origin. Injected or infused, none is licensed, and the product is an unauthorised medicine whatever the consent form says.',
    bodyHtml: `
      <p>(<a href="https://eur-lex.europa.eu/eli/reg/2009/1223/oj/eng" rel="noopener nofollow" target="_blank">Regulation (EC) No 1223/2009</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13314385/" rel="noopener nofollow" target="_blank">Limongi 2026</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/37498301/" rel="noopener nofollow" target="_blank">Olumesi 2023</a>.) The <a href="#law-and-labels">law drawer</a> has the detail.</p>
    `,
  },
  {
    id: 'faq-intact-skin',
    category: 'faq',
    title: 'Do exosome serums work on normal, unbroken skin?',
    tldr: 'There is no controlled evidence that they do, and a physical reason they should not: the stratum corneum stops molecules over about 500 Daltons, and vesicles reached the dermis in the one penetration study only through needle, laser or plasma channels.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/10839713/" rel="noopener nofollow" target="_blank">Bos 2000</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/36573453/" rel="noopener nofollow" target="_blank">Wang 2023</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/31012565/" rel="noopener nofollow" target="_blank">Alhaddad 2019</a>.)</p>
    `,
  },
  {
    id: 'faq-exosomes-vs-prp',
    category: 'faq',
    title: 'Exosomes or PRP?',
    tldr: 'They matched each other in one investigator-blinded split-face comparison after radiofrequency microneedling, collagen included; PRP has nine randomised hair trials, a 14-study scar meta-analysis and your own blood behind it, and costs less. PRP, unless you cannot have blood drawn.',
    bodyHtml: `
      <p>(<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12104007/" rel="noopener nofollow" target="_blank">Estupiñan 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/37533146/" rel="noopener nofollow" target="_blank">Zhang 2023</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8882957/" rel="noopener nofollow" target="_blank">Kang 2021</a>.) The <a href="/regenerative-aesthetics">biostimulator guide</a> grades PRP.</p>
    `,
  },
  {
    id: 'faq-hair',
    category: 'faq',
    title: 'Will exosomes regrow my hair?',
    tldr: 'Small studies with needling report density gains of 9.5–35 hairs per cm², none against placebo with the needling held constant; minoxidil with microneedling ranks first in the network meta-analysis and costs a tenth of a course. An add-on for someone already on the ladder, not a first treatment.',
    bodyHtml: `
      <p>(<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12433634/" rel="noopener nofollow" target="_blank">Al Ameer 2025</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10697753/" rel="noopener nofollow" target="_blank">Gupta 2023b</a>.) The <a href="/hair-loss">hair loss guide</a> has the ladder.</p>
    `,
  },
  {
    id: 'faq-after-laser',
    category: 'faq',
    title: 'My clinic offers exosomes after my laser for €300 — worth it?',
    tldr: 'For atrophic acne scars after fractional CO2, one double-blind trial says a third more improvement and a shorter downtime; for general rejuvenation the gain is a few points on a wrinkle scale in an unblinded trial. Worth it only if the €300 does not come out of the budget for the sessions themselves, and only applied, never injected.',
    bodyHtml: `
      <p>(<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9309822/" rel="noopener nofollow" target="_blank">Kwon 2020</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/42635327/" rel="noopener nofollow" target="_blank">Yen 2026</a>.)</p>
    `,
  },
  {
    id: 'faq-stem-cells',
    category: 'faq',
    title: 'Are exosomes stem cells?',
    tldr: 'No. They are vesicles some stem cells (and platelets, plants and bacteria) release; there are no cells in the vial. "Stem-cell facial" and "exosome facial" are marketing names for the same category of unproven product.',
    bodyHtml: `
      <p>(<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6322352/" rel="noopener nofollow" target="_blank">Théry 2018</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/39761139/" rel="noopener nofollow" target="_blank">Haykal 2025</a>.) The <a href="/regenerative-aesthetics">biostimulator guide</a> grades the "stem-cell" injections.</p>
    `,
  },
  {
    id: 'faq-safe',
    category: 'faq',
    title: 'Is an "exosome facial" safe?',
    tldr: 'Applied to needled or lasered skin: the small trials report transient redness and nothing serious. Injected or infused: the harm reports — granulomas, necrosis, allergic reactions, the Nebraska events — are all from that route, and it is unlawful.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/41931695/" rel="noopener nofollow" target="_blank">Wang 2026</a>; <a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">FDA 2019</a>.)</p>
    `,
  },
  {
    id: 'faq-how-many',
    category: 'faq',
    title: 'How many sessions, and what does it cost?',
    tldr: 'The trials used three device sessions a month apart with the product applied after each; clinics charge €150–400 per application on top of the device, €300–700 for a stand-alone "exosome facial" and €1,200–3,000 for a scalp course. Judge at three months with photographs, as the trials did.',
    bodyHtml: `
      <p>(<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9309822/" rel="noopener nofollow" target="_blank">Kwon 2020</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12104007/" rel="noopener nofollow" target="_blank">Estupiñan 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/41037530/" rel="noopener nofollow" target="_blank">Ablon 2025</a>.) Prices are indicative European prices, September 2026.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What an exosome is, what the studies show, and what it can and cannot do',
    intro: '',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you pay: the law, the products, the prices and the questions',
    intro: '',
    sections: context,
  },
  {
    id: 'uses',
    title: 'What exosomes are sold for — graded by evidence',
    intro: 'Eleven things clinics and shops sell exosomes for, from the one double-blind trial to the intravenous drip. Sorted by evidence, not by the menu.',
    sections: uses,
  },
  {
    id: 'products',
    title: 'The products, source by source',
    intro: 'Eight kinds of vial and bottle graded on their own data — where the vesicles came from, whether they can lawfully be sold here, and what the trial, if any, showed — and the alternatives with controlled trials.',
    sections: products,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The harm reports, what is in the vial, who should not, consent and recourse, and the post-procedure skin.',
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
  scars: 'Scars',
  aging: 'Aging & texture',
  hair: 'Hair',
  pigment: 'Pigment',
  redness: 'Redness & barrier',
  healing: 'Healing',
  topical: 'Topical',
  injected: 'Injected',
  human: 'Human-derived',
  plant: 'Plant & animal',
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
