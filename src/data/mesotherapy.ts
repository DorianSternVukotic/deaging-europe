/**
 * Mesotherapy guide — single source of truth (in-clinic layout).
 *
 * Consumed by /mesotherapy. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: mesotherapy is a technique, not a treatment — hundreds of
 * shallow injections of whatever is in the syringe. The evidence therefore
 * belongs to the cocktail, not the needle: a licensed drug (deoxycholic acid
 * for the chin) has phase 3 trials; off-label drugs (tranexamic acid,
 * dutasteride) have small randomised trials; hyaluronic-acid cocktails have
 * the skin-booster literature; vitamin cocktails have two negative biopsy
 * studies; and the "fat-dissolving" and "whitening" mixtures have case
 * series, bans and outbreaks. Tiers stay consistent with the problem guides
 * that already grade these rows (/double-chin, /dark-spots, /dark-circles,
 * /hair-loss, /cellulite, /skin-boosters). Regulatory status is as of
 * September 2026; prices are indicative Western/Central European and UK
 * private rates, not quotes.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea =
  | 'face'
  | 'pigment'
  | 'hair'
  | 'fat'
  | 'body'
  | 'licensed'
  | 'offlabel'
  | 'device'
  | 'unlicensed'
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
  'Mesotherapy is a technique — dozens to hundreds of shallow injections of a solution into the skin or the fat under it — invented in France in 1952 for pain, not a treatment. What it does depends entirely on what is in the syringe, which ranges from a licensed drug to a hyaluronic-acid device to a clinic-mixed vitamin cocktail to a homeopathic multi-dose vial.',
  'Graded by cocktail, the evidence is lopsided. Deoxycholic acid for the double chin has two phase 3 placebo-controlled trials and three-year follow-up (66.5% improved against 22.2%). Intradermal tranexamic acid for melasma has small randomised trials in which it matched oral tranexamic acid and hydroquinone. Hyaluronic-acid cocktails have the skin-booster literature. Dutasteride for hair has one randomised trial and a 541-patient series.',
  'The classic "vitamin mesotherapy" for the face has two controlled biopsy studies, and both were negative: no significant clinical or histological change after multivitamin-and-HA mesotherapy in the 2006 study, none in collagen, elastin or appearance in the 2012 study. Two of the commercial vitamin solutions killed fibroblasts in culture. Radiance for a fortnight is the needle, not the vitamins.',
  '"Fat-dissolving" injections are not one thing: the licensed deoxycholic acid works on the chin; phosphatidylcholine-deoxycholate cocktails for the body have a 25-study review in which 94% of studies reported reductions and 38% reached significance, one seven-woman randomised trial, and a record of ulcers, nodules and necrosis. Cellulite, "whitening drips" and stretch-mark cocktails have nothing better than case series, and intravenous glutathione is described as contraindicated in the 2025 systematic review.',
  'The specific harm is infection. A systematic review found 423 patients with non-tuberculous mycobacterial infections after mesotherapy across 30 reports; single outbreaks infected 28% of 138 clients at a Spanish beauty salon and 17 of 77 at a clinic using contaminated homeopathic multi-dose vials; a 2026 Canadian outbreak came from an esthetician injecting lipolytics. Months of antibiotics and permanent scars, for a glow. The vial and the hands matter more than the technique.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-mesotherapy-is',
    category: 'concept',
    title: 'What mesotherapy is — a French technique for pain that became a cosmetic delivery system',
    tldr: 'Michel Pistor coined the term in 1952 for shallow injections of small drug doses near a painful site; the "meso" is the mesoderm. Cosmetic mesotherapy borrowed the technique — a 4 mm needle, a fan of intradermal or subcutaneous micro-injections by hand or by "mesogun" — and filled the syringe with vitamins, hyaluronic acid, drugs, plant extracts and detergents. The technique is common to all of them; the evidence is not.',
    bodyHtml: `
      <p>The historical review is clear about where the evidence came from and where it did not: "all the published studies evaluating the clinical efficacy of traditional mesotherapy currently originate from Europe" and "focus primarily on musculoskeletal pain and vascular disease, rather than cosmetic applications", while the fat-reducing effect attributed to traditional cocktails "has not been supported in peer-reviewed studies" (<a href="https://pubmed.ncbi.nlm.nih.gov/16681654/" rel="noopener nofollow" target="_blank">Rotunda 2006</a>). What crossed over was the method: multiple small-volume injections, 1–4 mm deep, placed in a grid ("nappage") across the treatment area, by hand or with a spring-loaded or electronic injector, in a course of weekly to monthly sessions. The plastic-surgery literature describes the same evolution from a pain treatment into "injection lipolysis" and skin rejuvenation (<a href="https://pubmed.ncbi.nlm.nih.gov/19309641/" rel="noopener nofollow" target="_blank">Matarasso 2009</a>).</p>
      <p>Two consequences follow. A microinjection is itself a stimulus — needling raises dermal thickness on the saline side of controlled trials, as the <a href="/skin-boosters">skin boosters guide</a> documents — so every open-label mesotherapy study is measuring the needle and the solution together. And because the technique is trivially easy to perform and the solutions are cheap, cosmetic mesotherapy has spread far beyond medicine, into salons and spas, which is where its outbreaks happened (Safety). This guide grades the syringe, not the grid.</p>
    `,
  },
  {
    id: 'the-cocktail-problem',
    category: 'concept',
    title: 'The cocktail problem: licensed drug, CE device, compounded mixture, or homeopathic vial',
    tldr: 'Four legal categories share the word. Licensed medicines used as intended (deoxycholic acid for the chin) or off-label (tranexamic acid, dutasteride, minoxidil in the skin); CE-marked hyaluronic-acid devices (the skin boosters); clinic-compounded cocktails of vitamins, minerals, amino acids, caffeine and plant extracts with no licence and no trial; and homeopathic or "natural" multi-dose vials. In the laboratory, two of the commercial vitamin solutions killed fibroblasts. Ask which category you are buying.',
    bodyHtml: `
      <p>The one laboratory study to compare the actual products is sobering. Human skin fibroblasts exposed to hyaluronic acid and the NCTF solutions proliferated normally and expressed more collagen I and its regulators, whereas two other commercial mesotherapy reagents "led to apoptosis and/or necrosis of human fibroblasts" — the authors concluded that the reagents "elicit strikingly divergent physiological processes" (<a href="https://pubmed.ncbi.nlm.nih.gov/22151394/" rel="noopener nofollow" target="_blank">Jäger 2012</a>). The fat-reduction review adds a second irony: the local anaesthetics traditionally mixed into cocktails to make the injections bearable are antilipolytic — "the historic and empiric mixing of sodium channel blocking local anaesthetics in mesotherapy solutions inhibits the intended lipolysis" (<a href="https://pubmed.ncbi.nlm.nih.gov/23800269/" rel="noopener nofollow" target="_blank">Jayasinghe 2013</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/17954040/" rel="noopener nofollow" target="_blank">Caruso 2008</a>).</p>
      <p>The safety review of the field found "a number of case series and isolated case reports describing various side effects of different severities" and no standardised parameters (<a href="https://pubmed.ncbi.nlm.nih.gov/31444843/" rel="noopener nofollow" target="_blank">Plachouri 2019</a>), and the outbreak investigations traced infections to the contents of vials as often as to the hands (Safety). So the first question at any consultation is not "does mesotherapy work" but "what, exactly, is going in, under which licence, from which vial" — and Part 02 grades the answers.</p>
    `,
  },
  {
    id: 'evidence-map',
    category: 'concept',
    title: 'What the evidence says, indication by indication',
    tldr: 'Strong for one thing (deoxycholic acid under the chin), moderate for three (tranexamic acid for melasma, hyaluronic-acid cocktails for skin hydration, vitamin C and tranexamic acid cocktails for under-eye pigment), emerging for hair and body fat, and limited or negative for the rest — the facial vitamin cocktail, cellulite, "whitening", stretch marks. The pattern is that the licensed and the drug-containing cocktails have trials and the traditional ones have testimonials.',
    bodyHtml: `
      <p>Read across Part 01 and the map is simple. Where a pharmacologically active, characterised molecule is injected — deoxycholic acid (<a href="https://pubmed.ncbi.nlm.nih.gov/27430612/" rel="noopener nofollow" target="_blank">REFINE-2</a>), tranexamic acid (<a href="https://pubmed.ncbi.nlm.nih.gov/33782959/" rel="noopener nofollow" target="_blank">Badran 2021</a>), dutasteride (<a href="https://pubmed.ncbi.nlm.nih.gov/22486925/" rel="noopener nofollow" target="_blank">Moftah 2013</a>), hyaluronic acid (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3778226/" rel="noopener nofollow" target="_blank">Baspeyras 2013</a>) — there are controlled trials, and some are positive. Where the syringe holds a "cocktail" chosen by tradition — multivitamins, minerals, plant extracts, caffeine, homeopathic dilutions — the controlled studies are either absent or negative: no clinical or histological change in the two facial biopsy studies (<a href="https://pubmed.ncbi.nlm.nih.gov/17199654/" rel="noopener nofollow" target="_blank">Amin 2006</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3513770/" rel="noopener nofollow" target="_blank">El-Domyati 2012</a>), no effect of aminophylline on cellulite in a randomised comparison (<a href="https://pubmed.ncbi.nlm.nih.gov/10654755/" rel="noopener nofollow" target="_blank">Collis 1999</a>).</p>
      <p>The systematic reviews say the same thing in each field: for hair, "a lack of standardized regimens" across 27 studies and six classes of agent (<a href="https://pubmed.ncbi.nlm.nih.gov/37558233/" rel="noopener nofollow" target="_blank">Gupta 2023</a>); for body fat, 25 studies of which 37.5% reached statistical significance (<a href="https://pubmed.ncbi.nlm.nih.gov/41296813/" rel="noopener nofollow" target="_blank">Carrion 2026</a>); for skin lightening, an intravenous glutathione literature so thin the reviewers call the drip "contraindicated" (<a href="https://pubmed.ncbi.nlm.nih.gov/39444151/" rel="noopener nofollow" target="_blank">Sarkar 2025</a>). The problem guides that own each concern — <a href="/double-chin">double chin</a>, <a href="/dark-spots">dark spots</a>, <a href="/dark-circles">dark circles</a>, <a href="/hair-loss">hair loss</a>, <a href="/cellulite">cellulite</a> — carry the same tiers, so the site does not contradict itself.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'rules-and-access',
    category: 'context',
    title: 'The rules: who may inject, what is licensed, and the bans',
    tldr: 'Injecting anything into skin is a medical act in most EU countries and restricted to clinicians; in the UK devices may still be injected by non-medics, which is where the salon outbreaks have their legal cover. Deoxycholic acid is an authorised medicine (US 2015; nationally authorised in EU states as Belkyra). Tranexamic acid and dutasteride are licensed medicines used off-label by injection. Phosphatidylcholine has never been licensed for fat reduction anywhere, was banned for that use in Brazil, and drew US regulator warnings; "fat-dissolving" gels sold in Europe are CE-marked devices, not medicines. Clinic-mixed cocktails are unlicensed.',
    bodyHtml: `
      <p>Sort every offer into its legal box. <strong>Licensed for the purpose:</strong> deoxycholic acid injection for submental fat — two 24-week phase 3 trials, US approval in 2015, national authorisations in the EU under the Belkyra name (the <a href="/double-chin">double chin guide</a> links the EMA record). <strong>Licensed medicines, off-label route:</strong> tranexamic acid ampoules diluted and injected intradermally for melasma; dutasteride, minoxidil or finasteride prepared for scalp injection; both are legal for a prescriber to use off-label and both lack a licence for the route. <strong>CE-marked devices:</strong> hyaluronic-acid boosters and the deoxycholate-based "fat-dissolving" gels (Aqualyx and its copies) — a device certificate attests safety and performance, not the efficacy a medicine must show, and the review of the lipolytic literature notes that "expanding Food and Drug Administration" approval beyond the chin has not happened (<a href="https://pubmed.ncbi.nlm.nih.gov/41296813/" rel="noopener nofollow" target="_blank">Carrion 2026</a>). <strong>Unlicensed:</strong> the compounded vitamin, mineral, amino-acid, caffeine and plant-extract cocktails, the homeopathic multi-dose vials, and the viral "Lemon Bottle"-type products — no licence, no trial, no lot traceability worth the name.</p>
      <p>Phosphatidylcholine is the cautionary tale: introduced as a lipolytic in the 1990s from an intravenous fat-emulsion drug, spread worldwide as "Lipodissolve", banned for fat reduction by Brazil's regulator and the subject of US regulator warning letters over unproven claims; the detergent that actually dissolves fat, its emulsifier deoxycholate, is the molecule that was eventually licensed on its own (<a href="https://pubmed.ncbi.nlm.nih.gov/16681654/" rel="noopener nofollow" target="_blank">Rotunda 2006</a>). Who may inject is the second box: a doctor, dentist or prescribing nurse throughout the EU, with several states restricting aesthetic injection to physicians; in the UK, devices and cocktails can still legally be injected by non-medical practitioners, and that is where the mycobacterial outbreaks in the literature cluster (Safety).</p>
    `,
  },
  {
    id: 'prices-protocols',
    category: 'context',
    title: 'Prices and the trial-based protocols',
    tldr: 'Deoxycholic acid €600–1,200 a session, two to four sessions six weeks apart. Tranexamic acid for melasma €100–250 a session, four to six sessions one to two weeks apart. Hyaluronic-acid cocktails €120–350, three sessions a month apart. Dutasteride scalp mesotherapy €150–300 monthly for three months, then quarterly. Body lipolytic cocktails €200–500 a session, four to eight sessions. Dark-circle cocktails €150–300, two to four sessions. Anything sold as "ten sessions" has left the trials behind.',
    bodyHtml: `
      <p>The protocols with evidence are short. In the deoxycholic acid trials most patients reached a one-grade improvement "within 2 to 4 treatment sessions" of up to six permitted, and 19.1% needed fewer than six because they were satisfied or had no fat left to treat (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6094350/" rel="noopener nofollow" target="_blank">Dayan 2018</a>). The intradermal tranexamic-acid trials used fortnightly or weekly sessions over two to three months (<a href="https://pubmed.ncbi.nlm.nih.gov/33782959/" rel="noopener nofollow" target="_blank">Badran 2021</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/36743976/" rel="noopener nofollow" target="_blank">Pazyar 2023</a>). Dutasteride mesotherapy in the Spanish series was "every 3 months" in the first year (<a href="https://pubmed.ncbi.nlm.nih.gov/35816059/" rel="noopener nofollow" target="_blank">Saceda-Corralo 2022</a>), and a 2026 randomised trial compared monthly with quarterly dosing (<a href="https://pubmed.ncbi.nlm.nih.gov/41328478/" rel="noopener nofollow" target="_blank">Sanabria 2026</a>). Hyaluronic-acid cocktails follow the booster protocols of three monthly sessions (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13300611/" rel="noopener nofollow" target="_blank">Yang 2026</a>). The under-eye trial used two injections (<a href="https://pubmed.ncbi.nlm.nih.gov/41117156/" rel="noopener nofollow" target="_blank">dark-circle trial</a>).</p>
      <p>Price the cocktail, not the session. Tranexamic acid and dutasteride cost cents per ampoule; what you pay for is the prescriber, the sterile preparation and the needle. Deoxycholic acid is priced per vial and the chin usually needs two to three vials a session. Vitamin cocktails are cheap to make and expensive to sell — and, per Part 01, have not been shown to do anything on the face. The <a href="/skin-boosters">skin boosters guide</a> gives the yearly cost of the HA products; a course of facial vitamin mesotherapy at €150–350 a session, repeated monthly "for maintenance", is the single worst value in this library.</p>
    `,
  },
  {
    id: 'vetting',
    category: 'context',
    title: 'Vetting the injector: the vial, the hands, the licence',
    tldr: 'The outbreaks in the literature came from a beauty salon, a clinic using contaminated homeopathic multi-dose vials, a procaine vial in Lima, and an esthetician injecting lipolytics in Montréal. So: a clinician on a medical register; single-dose vials of a named product opened in front of you, or a compounded solution with a pharmacy label; no multi-dose vials, no homemade mixtures; skin disinfection and single-use needles; and, for anything under the chin or on the body, someone who can name the nerve they are avoiding.',
    bodyHtml: `
      <p>Every one of the documented outbreaks is a lesson in provenance. Thirty-nine of 138 women (28.3%) who received mesotherapy at a single beauty salon in Spain developed <em>Mycobacterium fortuitum</em> lesions — three to twenty per patient — needing months of clarithromycin and levofloxacin (<a href="https://pubmed.ncbi.nlm.nih.gov/19840199/" rel="noopener nofollow" target="_blank">Quiñones 2010</a>). Seventeen of 77 patients at a clinic developed <em>M. abscessus</em> abscesses after injections of "homeopathic drugs in multi-dose vials"; the clinic's sterile technique was judged correct, contamination was traced to the factory, and the production line was suspended (<a href="https://pubmed.ncbi.nlm.nih.gov/21684045/" rel="noopener nofollow" target="_blank">Galmés-Truyols 2011</a>). In Lima, <em>M. chelonae</em> was isolated from four patients and from a procaine vial (<a href="https://pubmed.ncbi.nlm.nih.gov/18200353/" rel="noopener nofollow" target="_blank">Munayco 2008</a>). In Montréal in 2026, genomically near-identical <em>M. abscessus</em> isolates were traced to lipolytic injections "from the same esthetician within a one-month period" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13475720/" rel="noopener nofollow" target="_blank">Quan-Nguyen 2026</a>).</p>
      <p>The checklist: a medical register number you can look up; the product name, licence status and lot number recorded in your notes; single-dose ampoules or a pharmacy-labelled compounded preparation — never a multi-dose vial drawn from across clients, never an unlabelled "house cocktail"; skin disinfected, needles single-use, gloves changed; a two-week review; and a clinician who can tell you what to do if a red lump appears at week three (it is not a bruise — Safety). For deoxycholic acid or any lipolytic under the chin, ask which nerve runs there; the answer is the marginal mandibular branch of the facial nerve, and an injector who does not know it should not be injecting there.</p>
    `,
  },
];

const uses: Section[] = [
  {
    id: 'use-chin-dca',
    category: 'use',
    title: 'The double chin with deoxycholic acid',
    tldr: 'The one mesotherapy-style injection with phase 3 evidence: in the REFINE-2 trial 66.5% of 258 patients improved at least one grade against 22.2% on placebo, 18.6% versus 3.0% improved two grades, with MRI-confirmed volume loss; response held at three years in 82% versus 65%. Two to four sessions, weeks of swelling, temporary jaw-nerve weakness in a few percent. A meta-analysis of five randomised trials found every efficacy outcome positive and every trial industry-funded.',
    evidence: 'strong',
    focus: 'fat',
    sessions: '2–4 sessions, 6 weeks apart',
    downtime: '1–2 weeks of swelling and numbness per session',
    cost: '€600–1,200 per session',
    bodyHtml: `
      <p>Deoxycholic acid is the bile salt that emulsifies dietary fat; injected into subcutaneous fat it lyses adipocytes, which the body then clears. The phase 3 REFINE-2 trial randomised 516 adults to ATX-101 or placebo: 66.5% versus 22.2% achieved a composite one-grade improvement in submental fat and 18.6% versus 3.0% a two-grade improvement, with volume reduction confirmed on MRI and better psychological-impact and satisfaction scores; 85.7% of adverse events in the active group were at the injection site (<a href="https://pubmed.ncbi.nlm.nih.gov/27430612/" rel="noopener nofollow" target="_blank">Humphrey 2016</a>). The three-year follow-up of 224 patients found the response maintained in 86.4% versus 56.8% at year one and 82.4% versus 65.0% at year three, with 74% of those satisfied at twelve weeks still satisfied at three years and no new safety signals (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8520020/" rel="noopener nofollow" target="_blank">Humphrey 2021</a>). Most patients reached their improvement within two to four of the six permitted sessions (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6094350/" rel="noopener nofollow" target="_blank">Dayan 2018</a>).</p>
      <p>The meta-analyses agree and add the caveat: five randomised trials in 1,838 participants, every efficacy measure better than placebo at both doses, withdrawals for adverse events in 6.8–9.9% (<a href="https://pubmed.ncbi.nlm.nih.gov/33523775/" rel="noopener nofollow" target="_blank">Cunha 2021</a>); a second review found "all studies showed a potential industry bias", only two at low risk of bias, a higher risk of fibrosis, pain, numbness, swelling and nodules, and "low to moderate certainty" that it works (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10570630/" rel="noopener nofollow" target="_blank">Inocêncio 2023</a>). Strong for the chin, in a firm neck with fat above the muscle; the <a href="/double-chin">double chin guide</a> sets it beside cryolipolysis and liposuction, and the <a href="/jowls">jowls guide</a> grades its off-label use lower down the face.</p>
    `,
  },
  {
    id: 'use-melasma-txa',
    category: 'use',
    title: 'Melasma with intradermal tranexamic acid',
    tldr: 'Small randomised trials: intradermal tranexamic acid cut the melasma score 62.7% against 39.1% for the topical cream in one Egyptian trial, matched 4% hydroquinone in an Iranian trial, and matched oral tranexamic acid alongside laser in another. But the meta-analysis of 28 randomised trials found only the oral route significantly better than adjuvant treatment, and a network meta-analysis found injected tranexamic acid best when combined with hydroquinone. Works; not better than the pill; moderate.',
    evidence: 'moderate',
    focus: 'pigment',
    sessions: '4–6 sessions, 1–2 weeks apart',
    downtime: 'Burning during injection; papules for a day',
    cost: '€100–250 per session',
    bodyHtml: `
      <p>Tranexamic acid blocks the plasmin pathway that links ultraviolet light to melanocyte activation, and injecting it into the dermis puts a licensed antifibrinolytic exactly where melasma lives. In a three-arm Egyptian randomised trial the intradermal group's MASI score fell 62.7% against 39.1% for a topical cream and 4.2% in the control group — "intradermal injection of TA leads to better results than the topical application" (<a href="https://pubmed.ncbi.nlm.nih.gov/33782959/" rel="noopener nofollow" target="_blank">Badran 2021</a>). Against the standard bleaching cream, 100 mg intradermal tranexamic acid and 4% hydroquinone both cut the score significantly at three months "without any significant differences", at the cost of mild burning at every injection (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9891212/" rel="noopener nofollow" target="_blank">Pazyar 2023</a>). Against the pill, with laser in both arms, oral and injected tranexamic acid produced the same score and colour changes, the same satisfaction and the same complications (<a href="https://pubmed.ncbi.nlm.nih.gov/34724323/" rel="noopener nofollow" target="_blank">Behrangi 2022</a>).</p>
      <p>The pooled data are the corrective. Across 28 randomised trials, oral tranexamic acid was significantly better than adjuvant treatment at 8 and 12 weeks while topical and intradermal routes were not, with heavy heterogeneity (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10810386/" rel="noopener nofollow" target="_blank">Panchal 2024</a>); an earlier meta-analysis reached the same conclusion — "the superiority of TXA was not detected when the topical or intradermal route was adopted" (<a href="https://pubmed.ncbi.nlm.nih.gov/33959984/" rel="noopener nofollow" target="_blank">Feng 2021</a>); and the 2025 network meta-analysis of injectable combinations found tranexamic acid plus 4% hydroquinone the most effective, at level 3 evidence (<a href="https://pubmed.ncbi.nlm.nih.gov/40590795/" rel="noopener nofollow" target="_blank">Nukaly 2025</a>). Moderate, matching the <a href="/dark-spots">dark spots guide</a>, which grades the oral route strong: injections are for the person who cannot or will not take the tablet, and they must be paired with the sunscreen and hydroquinone or azelaic acid the melasma will otherwise defeat.</p>
    `,
  },
  {
    id: 'use-face-ha',
    category: 'use',
    title: 'Facial "biorevitalisation" with hyaluronic-acid cocktails',
    tldr: 'When the syringe holds hyaluronic acid, mesotherapy is a skin booster and inherits that evidence: plain HA beat saline on elasticity and blinded radiance in 55 women; an HA-and-amino-acid solution improved 97.6% against 4% untreated in 439 people; NCTF 135HA beat a face cream on wrinkles and radiance in 146. Hydration and glow for a few months, with the needle doing part of the work. Moderate, and graded product by product in the skin boosters guide.',
    evidence: 'moderate',
    focus: 'face',
    sessions: '3 sessions a month apart; repeat at 6 months',
    downtime: 'Papules for a day; bruising',
    cost: '€120–350 per session',
    bodyHtml: `
      <p>The hyaluronic-acid cocktails are the respectable end of facial mesotherapy because HA itself binds water and because three of them have randomised trials. Non-cross-linked HA against saline, cheek to cheek, in 55 women improved cutometer elasticity on the HA side only and blinded complexion radiance at three months — while dermal thickness rose on both sides at one month (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3778226/" rel="noopener nofollow" target="_blank">Baspeyras 2013</a>). A sodium hyaluronate solution with glycine, proline, leucine and lysine, three monthly sessions against no treatment in 439 completers, reached a 97.56% global-improvement rate against 3.95%, with hydration and elasticity improved to three months and adverse events in 1.67% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13300611/" rel="noopener nofollow" target="_blank">Yang 2026</a>). NCTF 135HA, the classic French cocktail of HA plus some fifty vitamins and amino acids, reduced superficial wrinkles and improved radiance against a routine anti-aging cream in a manufacturer-funded 146-person trial (<a href="https://pubmed.ncbi.nlm.nih.gov/37577796/" rel="noopener nofollow" target="_blank">Fanian 2023</a>). The systematic review of HA skin quality found HA alone did more than HA-plus-cocktail (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10082573/" rel="noopener nofollow" target="_blank">Ghatge 2023</a>).</p>
      <p>Moderate, for hydration and radiance over a few months; the <a href="/skin-boosters">skin boosters guide</a> grades every product, including the sham-controlled trials that show how much is the needle. The point for this guide is the contrast with the next row: take the hyaluronic acid out of the syringe and the evidence goes with it.</p>
    `,
  },
  {
    id: 'use-dark-circles',
    category: 'use',
    title: 'Under-eye pigment with vitamin C, tranexamic acid and hyaluronate cocktails',
    tldr: 'The largest controlled trial for pigmented dark circles: 120 patients randomised to two injections of a hyaluronate solution with vitamin C, tranexamic acid and glutathione or to control, with greyscale values rising, the pigment gap to normal skin narrowing from 23 to 14 units, and 96.7% satisfied while controls did not change. Tranexamic acid plus vitamin C matched PRP in an 18-patient split trial; mesotherapy beat carboxytherapy in a three-way comparison. Moderate, as the dark circles guide grades it.',
    evidence: 'moderate',
    focus: 'pigment',
    sessions: '2–4 sessions, 2–4 weeks apart',
    downtime: 'Burning; bruising likely under the eye',
    cost: '€150–300 per session',
    bodyHtml: `
      <p>Pigmented dark circles are melanin in thin skin, and a cocktail of tyrosinase-inhibiting vitamin C, tranexamic acid and hyaluronate is at least aimed at the mechanism. The controlled trial randomised 120 patients with periorbital hyperpigmentation to the injectable hyaluronate-vitamin C-tranexamic acid-glutathione combination or to control: greyscale values rose from 162.1 to 169.7 in the treated group, the pigmentation difference from normal skin fell from 23.0 to 14.4 units, quality-of-life scores improved, severity fell, and 96.7% reported satisfaction, while "the control group showed no significant changes" — level II evidence (<a href="https://pubmed.ncbi.nlm.nih.gov/41117156/" rel="noopener nofollow" target="_blank">dark-circle trial 2025</a>). In a split-site randomised comparison, tranexamic acid plus vitamin C mesotherapy and PRP "showed similar rates of improvement" in 18 patients (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626328/" rel="noopener nofollow" target="_blank">Iranmanesh 2024</a>); in a three-way comparison with carboxytherapy and a chemical peel, all three improved pigmentation and mesotherapy produced "a significant improvement in pigmentation and a higher level of patient satisfaction" than carboxytherapy, with more burning (<a href="https://pubmed.ncbi.nlm.nih.gov/29767467/" rel="noopener nofollow" target="_blank">Ahmed 2019</a>).</p>
      <p>Moderate — one decent controlled trial and small comparisons — and only for the pigment type: the <a href="/dark-circles">dark circles guide</a> sorts pigment from vessels from shadow first, because a hollow needs the <a href="/fillers#use-tear-trough">tear-trough section of the filler guide</a> and no cocktail will fill it. This row is the exception to the vitamin rule in this guide, because the cocktail contains two drugs with a mechanism and was tested against a control.</p>
    `,
  },
  {
    id: 'use-hair-dutasteride',
    category: 'use',
    title: 'Pattern hair loss with dutasteride mesotherapy',
    tldr: 'A drug that works by mouth, injected into the scalp to spare the body: photographic improvement in 62.8% of women against 17.5% of controls in the one placebo-controlled trial, "most" of 541 Spanish patients improved in a retrospective series with pain in 45.5% and no sexual side effects, a 2025 systematic review reporting consistent gains and "a lack of large-scale, high-quality trials", and a 2026 randomised trial of monthly versus quarterly dosing. Emerging, as the hair loss guide grades it.',
    evidence: 'emerging',
    focus: 'hair',
    sessions: 'Monthly for 3 months, then every 3 months',
    downtime: 'Scalp pain during and after; none otherwise',
    cost: '€150–300 per session',
    bodyHtml: `
      <p>Dutasteride blocks both 5-alpha-reductase isoenzymes and beats finasteride by mouth; mesotherapy injects a dilute solution into the scalp to keep the drug where the follicles are. The controlled evidence is one randomised trial in female pattern hair loss: photographic improvement in 62.8% of treated women against 17.5% of controls, fewer hairs pulled out, thicker hairs, better self-assessment, and side effects no different from control (<a href="https://pubmed.ncbi.nlm.nih.gov/22486925/" rel="noopener nofollow" target="_blank">Moftah 2013</a>). The real-world evidence is the Madrid series of 541 men and women treated roughly every three months: response could be assessed in only 86 patients at one year, most of them improved with 38.4% "marked", pain was the commonest side effect at 45.5%, and "no serious or sexual adverse events were detected" (<a href="https://pubmed.ncbi.nlm.nih.gov/35816059/" rel="noopener nofollow" target="_blank">Saceda-Corralo 2022</a>). The 2025 systematic review and meta-analysis found studies "consistently reported improvements in hair density and thickness" with minimal adverse events and "a lack of large-scale, high-quality trials" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12690437/" rel="noopener nofollow" target="_blank">intralesional dutasteride review 2025</a>); the 2026 systematic review of all injectables for androgenetic alopecia concluded that injectable therapy "may provide cosmetic benefit, particularly with dutasteride", with small samples, variable protocols and short follow-up (<a href="https://pubmed.ncbi.nlm.nih.gov/41603616/" rel="noopener nofollow" target="_blank">Beer 2026</a>). A randomised trial of monthly against quarterly injections was published in 2026 (<a href="https://pubmed.ncbi.nlm.nih.gov/41328478/" rel="noopener nofollow" target="_blank">Sanabria 2026</a>).</p>
      <p>Emerging, consistent with the <a href="/hair-loss">hair loss guide</a>: plausible, off-label, less systemic exposure than the tablet, and "evidence of its effectiveness limited to retrospective studies in real clinical practice" in the words of the group that popularised it (<a href="https://pubmed.ncbi.nlm.nih.gov/36169916/" rel="noopener nofollow" target="_blank">Saceda-Corralo 2023</a>). Women who could become pregnant should not be near dutasteride by any route.</p>
    `,
  },
  {
    id: 'use-hair-cocktails',
    category: 'use',
    title: 'Hair loss with vitamin, mineral and minoxidil cocktails',
    tldr: 'The "hair booster" cocktails: a randomised trial in women found nutrient mesotherapy more acceptable than topical minoxidil and better on follicle counts, in a small, short study; a randomised trial in men found "no significant improvement of mesotherapy in male AGA over minoxidil"; the 2026 systematic review found multivitamin and peptide formulations the most studied and the evidence limited, with paradoxical alopecia, scarring and dermatitis among the harms. Emerging at best.',
    evidence: 'emerging',
    focus: 'hair',
    sessions: '6–10 sessions, 1–2 weeks apart, then monthly',
    downtime: 'Scalp tenderness',
    cost: '€100–250 per session',
    bodyHtml: `
      <p>Most scalp mesotherapy sold in Europe is not dutasteride but a cocktail of biotin, B vitamins, minerals, amino acids, peptides and sometimes minoxidil, marketed as a "hair booster". The two randomised trials against topical minoxidil point in opposite directions. In women, a nutrient-only cocktail produced more improvement in follicle counts on ultrasound biomicroscopy and the highest satisfaction, and the authors called it "effective, more acceptable to patients, and more tolerable" while noting "small sample size, and relatively short duration" (<a href="https://pubmed.ncbi.nlm.nih.gov/31032783/" rel="noopener nofollow" target="_blank">Hunter 2019</a>). In men, dermoscopy, trichoscan and subjective measures "failed to show significant difference between two groups" and the authors concluded there was "no significant improvement of mesotherapy in male AGA over minoxidil" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6463458/" rel="noopener nofollow" target="_blank">Gajjar 2019</a>). The systematic reviews count six randomised trials among twelve studies of 527 people with "positive efficacy… to a certain extent" (<a href="https://pubmed.ncbi.nlm.nih.gov/35253335/" rel="noopener nofollow" target="_blank">Tang 2022</a>), 27 studies across six classes of agent with "a lack of standardized regimens" (<a href="https://pubmed.ncbi.nlm.nih.gov/37558233/" rel="noopener nofollow" target="_blank">Gupta 2023</a>), and, most recently, multivitamin and peptide formulations as the most studied agents with harms that "included paradoxical alopecia, scarring, and acute dermatitis" (<a href="https://pubmed.ncbi.nlm.nih.gov/41603616/" rel="noopener nofollow" target="_blank">Beer 2026</a>).</p>
      <p>Emerging: a plausible delivery of an active drug (minoxidil) when the cocktail contains one, and a delivery of nothing in particular when it does not. The scalp is also where the worst single mesotherapy injury on record occurred — multifocal abscesses with fat necrosis and scarring alopecia needing surgical repair (<a href="https://pubmed.ncbi.nlm.nih.gov/18246702/" rel="noopener nofollow" target="_blank">Kadry 2008</a>). The <a href="/hair-loss">hair loss guide</a> puts minoxidil, finasteride, dutasteride and PRP in order; a cocktail is an adjunct to those, not a substitute.</p>
    `,
  },
  {
    id: 'use-body-fat',
    category: 'use',
    title: 'Localised body fat with lipolytic injections (phosphatidylcholine-deoxycholate, Aqualyx and copies)',
    tldr: 'A 2026 systematic review of 25 studies in 3,178 patients found reductions reported in 94% of studies and statistical significance in 38%, satisfaction of 57–86%, and courses costlier than liposuction; the one randomised trial measured seven women. A three-arm randomised comparison of cocktails found circumference falling with the weight of the participants. Fat cells do die, the results are modest and multiple, and the ulcers and nodules are real. Emerging.',
    evidence: 'emerging',
    focus: 'body',
    sessions: '4–8 sessions, 2–4 weeks apart',
    downtime: 'Days to weeks of swelling, pain and bruising per session',
    cost: '€200–500 per session',
    bodyHtml: `
      <p>Deoxycholate lyses fat cells wherever it is injected, and phosphatidylcholine-deoxycholate mixtures have been sold for the abdomen, flanks, thighs and arms for twenty-five years under names like Lipodissolve and, as CE-marked devices, Aqualyx. The systematic review of non-submental injectables found 25 studies of deoxycholic acid, phosphatidylcholine and newer agents in 3,178 patients: "significant reductions in localized adiposity were reported in 93.75% of studies, with 37.5% achieving statistical significance", mild transient adverse events, satisfaction from 57.1% to 86%, and the observation that "injectable treatments require multiple sessions, making them costlier than single-session surgical liposuction" (<a href="https://pubmed.ncbi.nlm.nih.gov/41296813/" rel="noopener nofollow" target="_blank">Carrion 2026</a>). The mechanistic randomised trial enrolled seven women: abdominal fat thickness fell significantly, biopsies showed adipocyte necrosis and macrophage infiltration, and blood lipids and inflammatory markers did not change (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3667691/" rel="noopener nofollow" target="_blank">Reeds 2013</a>). A randomised comparison of three cocktails in 75 people found circumference falling 2–4 cm per site — alongside weight loss of 2.8–5.3 kg, which explains at least part of it (<a href="https://pubmed.ncbi.nlm.nih.gov/21718184/" rel="noopener nofollow" target="_blank">Kutlubay 2011</a>). Two practices reported smooth results in 74.5–86.5% of Lipodissolve patients and ulceration in two (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3486781/" rel="noopener nofollow" target="_blank">Mahmud 2012</a>).</p>
      <p>Emerging: the fat does dissolve, the trials are small or uncontrolled, the licensed molecule is only licensed for the chin, and the injuries are in Safety. The <a href="/double-chin">double chin guide</a> grades the unlicensed cocktails lower still for the chin itself, where a licensed drug exists; the <a href="/upper-arms">upper arms</a> and <a href="/cellulite">cellulite</a> guides put body injectables beside cryolipolysis and liposuction. Not for cellulite, not for weight, not for the abdomen of someone who could lose the kilogram instead.</p>
    `,
  },
  {
    id: 'use-face-vitamins',
    category: 'use',
    title: 'Facial rejuvenation with vitamin cocktails — the classic "meso-glow"',
    tldr: 'Two controlled studies with biopsies, both negative. Multivitamin-and-hyaluronic-acid mesotherapy for six months: "no significant clinical or histologic changes", and electron microscopy showing thinner collagen fibres afterwards. Mesotherapy "biorevitalisation" with clinical, histological and immunostaining assessment of collagens I, III and VII, new collagen, elastin and tropoelastin: no statistically significant change and no clinical improvement. In culture, two commercial vitamin solutions killed fibroblasts. Limited, meaning negative.',
    evidence: 'limited',
    focus: 'face',
    note: 'Best for: nothing that a moisturiser, a retinoid and a fortnight of good sleep would not do',
    sessions: '—',
    downtime: 'Papules and bruising, for no measured benefit',
    cost: '€120–350 per session',
    bodyHtml: `
      <p>The vitamin-cocktail facial is the treatment most people mean by "mesotherapy", and it is the one with the clearest negative evidence. The New York study treated patients with a multivitamin and hyaluronic-acid solution and evaluated them at 0, 3 and 6 months with photographs, light microscopy and electron microscopy: "no significant clinical differences", "no significant changes" on light microscopy, and collagen fibres of smaller diameter after treatment — "multivitamin and hyaluronic acid solution facial mesotherapy does not appear to provide any significant benefit" (<a href="https://pubmed.ncbi.nlm.nih.gov/17199654/" rel="noopener nofollow" target="_blank">Amin 2006</a>). The Egyptian study, with immunostaining for collagen types I, III and VII, newly synthesised collagen, total elastin and tropoelastin at baseline, end of treatment and three months later, found "no statistically significant changes" and "no clinical improvement" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3513770/" rel="noopener nofollow" target="_blank">El-Domyati 2012</a>). The laboratory study of the reagents found two commercial vitamin solutions inducing fibroblast apoptosis or necrosis while the hyaluronic-acid products did not (<a href="https://pubmed.ncbi.nlm.nih.gov/22151394/" rel="noopener nofollow" target="_blank">Jäger 2012</a>).</p>
      <p>Limited, and the row that gives this guide its rule: the glow after a mesotherapy facial is real for a week or two and comes from a hundred micro-wounds and a litre of water, not from the vitamins. If the syringe held hyaluronic acid, see the row above; if it held vitamins, the better use of the money is the <a href="/retinoids">retinoids guide</a>, which has decades of biopsies showing the collagen these cocktails do not make.</p>
    `,
  },
  {
    id: 'use-cellulite',
    category: 'use',
    title: 'Cellulite',
    tldr: 'The 2005 review of injectables for cellulite found mechanisms and no clinical evidence; twenty years later the picture is a single uncontrolled ultrasound study and a laboratory paper showing that the lidocaine in the cocktails blocks the lipolysis the cocktails are meant to cause. The one randomised comparison of an aminophylline product found neither it nor endermologie effective. Limited, as the cellulite guide grades it.',
    evidence: 'limited',
    focus: 'body',
    note: 'Best for: no one — the cellulite guide grades the treatments that have trials',
    sessions: '—',
    downtime: '—',
    cost: '€150–400 per session, for nothing measured',
    bodyHtml: `
      <p>Cellulite is fibrous bands tethering skin over lobulated fat, and no injected vitamin, enzyme or caffeine derivative addresses the bands. The Massachusetts General review concluded that "peer-reviewed studies have not evaluated whether these effects translate clinically" and that patients "must be aware that the substances currently being injected… have not been thoroughly evaluated for safety or efficacy" (<a href="https://pubmed.ncbi.nlm.nih.gov/16414902/" rel="noopener nofollow" target="_blank">Rotunda 2005</a>). The laboratory study of the cocktails found isoproterenol, aminophylline, yohimbine and Melilotus stimulating lipolysis in fat cells and lidocaine inhibiting it — "lidocaine is antilipolytic and should be removed from mesotherapy solutions" (<a href="https://pubmed.ncbi.nlm.nih.gov/17954040/" rel="noopener nofollow" target="_blank">Caruso 2008</a>). The randomised comparison of an aminophylline cream and endermologie found no measurable difference between treated and untreated legs and only 3 of 35 aminophylline-treated legs subjectively improved: "the authors do not believe that either of these two treatments is effective" (<a href="https://pubmed.ncbi.nlm.nih.gov/10654755/" rel="noopener nofollow" target="_blank">Collis 1999</a>). The single ultrasound study of intradermal mesotherapy reported reduced hypodermis thickness and grade in an uncontrolled series and called for further research "due to a limited number of published studies" (<a href="https://pubmed.ncbi.nlm.nih.gov/28590783/" rel="noopener nofollow" target="_blank">Sylwia 2017</a>).</p>
      <p>Limited, and the <a href="/cellulite">cellulite guide</a> is where the treatments with trials — subcision, shockwave, radiofrequency, the 1,440 nm laser — are graded. Mesotherapy for cellulite is also, historically, where the largest mycobacterial outbreaks occurred, on the thighs and buttocks of young women (Safety).</p>
    `,
  },
  {
    id: 'use-whitening',
    category: 'use',
    title: 'Skin whitening: glutathione drips and injections',
    tldr: 'Oral glutathione has small placebo-controlled trials showing a modest fall in melanin index in sun-exposed skin; intravenous glutathione has one placebo-controlled study (37.5% versus 18.7%, not significant) and a 2025 systematic review that calls it "contraindicated due to lack of efficacy and side effects". Injected "whitening cocktails" have no trials at all. Limited, as the dark spots guide grades it.',
    evidence: 'limited',
    focus: 'pigment',
    note: 'Best for: no one — and a red flag for the clinic offering it',
    sessions: '—',
    downtime: '—',
    cost: '€100–300 per drip, for a contraindicated treatment',
    bodyHtml: `
      <p>Glutathione is the cell's main antioxidant and, in melanocytes, shifts pigment synthesis toward the lighter pheomelanin, which is the rationale for swallowing, injecting or infusing it to lighten skin. The 2025 systematic review found five randomised controlled trials of oral glutathione at 250–500 mg a day with "a significant reduction in the melanin index compared to placebo", topical 2% glutathione moderately effective, and, for the intravenous route, exactly one placebo-controlled study — 6 of 16 responders against 3 of 16, not significant — leading to the conclusion that "IV glutathione is contraindicated due to lack of efficacy and side effects" (<a href="https://pubmed.ncbi.nlm.nih.gov/39444151/" rel="noopener nofollow" target="_blank">Sarkar 2025</a>). The earlier review found four studies, a trend to brightening in sun-exposed skin only, and evidence "still inconclusive due to the quality of included studies and inconsistent findings" (<a href="https://pubmed.ncbi.nlm.nih.gov/30895708/" rel="noopener nofollow" target="_blank">Dilokthornsakul 2019</a>).</p>
      <p>Limited, consistent with the <a href="/dark-spots">dark spots guide</a>, which puts the oral route at the same tier. The intradermal "whitening" and "brightening" cocktails sold in European clinics — glutathione with vitamin C, tranexamic acid and sometimes kojic acid — have no controlled trial as a whitening treatment, although the same ingredients have one for under-eye pigment (above). A clinic offering a "whitening drip" is telling you how it reads evidence.</p>
    `,
  },
  {
    id: 'use-stretch-marks',
    category: 'use',
    title: 'Stretch marks and scars',
    tldr: 'One five-arm comparison in adolescents with red stretch marks found mesotherapy giving mild-to-moderate improvement, less than a peel-and-microdermabrasion combination, with no untreated arm; nothing else. Fresh red marks respond to a retinoid in a randomised trial; mature white ones respond to little. Limited.',
    evidence: 'limited',
    focus: 'body',
    note: 'Best for: nothing the retinoids and microneedling guides do not grade higher',
    sessions: '—',
    downtime: '—',
    cost: '€150–300 per session',
    bodyHtml: `
      <p>Stretch marks are dermal tears, and the cocktails offered for them — vitamins, HA, silicon, "growth factors" — have a single comparative study behind them. Fifty patients with striae rubra were divided among tretinoin, an Nd:YAG laser, mesotherapy, microdermabrasion with trichloroacetic acid, and microdermabrasion with a salicylic-and-retinol peel: the peel combination gave moderate improvement in 60%, "mild to moderate improvement was seen with Nd:YAG laser, mesotherapy and MDA + TCA", and tretinoin the least — with no untreated arm and no blinding (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4924406/" rel="noopener nofollow" target="_blank">Karia 2016</a>). That is the literature.</p>
      <p>Limited. The <a href="/retinoids">retinoids guide</a> has the randomised trial of tretinoin on early red marks and the <a href="/microneedling">microneedling guide</a> the needling evidence; a "mesotherapy for stretch marks" package is the needling with a mystery solution added.</p>
    `,
  },
];

const products: Section[] = [
  {
    id: 'prod-dca',
    category: 'product',
    title: 'Deoxycholic acid (Kybella / Belkyra) — the licensed fat-dissolver',
    tldr: 'Synthetic deoxycholic acid at 1 or 2 mg/cm², up to 50 injections a session under the chin: phase 3 trials, three-year follow-up, a licence in the US and national authorisations in the EU. The only mesotherapy-style injectable in this guide that has cleared a medicines regulator. Numbness, swelling and hardness for weeks; temporary weakness of the jaw nerve and difficulty swallowing in a few percent; every trial industry-funded.',
    evidence: 'strong',
    focus: 'licensed',
    note: 'Top pick: the chin, in a clinic that has used it many times and can map the marginal mandibular nerve',
    sessions: '2–4 sessions 6 weeks apart, up to 6',
    downtime: '1–2 weeks swelling; numbness for weeks',
    cost: '€600–1,200 per session',
    bodyHtml: `
      <p>The trials and the three-year data are in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/27430612/" rel="noopener nofollow" target="_blank">Humphrey 2016</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8520020/" rel="noopener nofollow" target="_blank">Humphrey 2021</a>); the meta-analyses found both doses equally effective and withdrawals for side effects under 10% (<a href="https://pubmed.ncbi.nlm.nih.gov/33523775/" rel="noopener nofollow" target="_blank">Cunha 2021</a>) alongside "a potential industry bias" in every included trial and a higher risk of fibrosis, pain, numbness, nodules and paraesthesia (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10570630/" rel="noopener nofollow" target="_blank">Inocêncio 2023</a>). The molecule is the emulsifier that made the older phosphatidylcholine cocktails work, isolated and standardised (<a href="https://pubmed.ncbi.nlm.nih.gov/16681654/" rel="noopener nofollow" target="_blank">Rotunda 2006</a>).</p>
      <p>Strong, for the licensed indication. The <a href="/double-chin">double chin guide</a> gives the nerve-injury and dysphagia rates and the comparison with cryolipolysis and liposuction; off-label use on the jowls and body is graded lower in the <a href="/jowls">jowls guide</a> and in the body-fat row above, because the licence, the dose-finding and the three-year data all belong to the chin.</p>
    `,
  },
  {
    id: 'prod-txa',
    category: 'product',
    title: 'Tranexamic acid, intradermal — a licensed drug in an off-label syringe',
    tldr: 'Injectable tranexamic acid diluted to 4–10 mg/ml and placed intradermally in melasma every one to two weeks: randomised trials showing it equal to hydroquinone and to the oral tablet, better than the cream, and not better than adjuvant care in the pooled analysis. Cheap, stinging, and contraindicated in anyone with a clotting history. Moderate.',
    evidence: 'moderate',
    focus: 'offlabel',
    note: 'Top pick: melasma in someone who cannot take the tablet — always with sunscreen and a bleaching agent',
    sessions: '4–6 sessions, 1–2 weeks apart',
    downtime: 'Burning; papules for a day',
    cost: '€100–250 per session',
    bodyHtml: `
      <p>The trials are in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/33782959/" rel="noopener nofollow" target="_blank">Badran 2021</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9891212/" rel="noopener nofollow" target="_blank">Pazyar 2023</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/34724323/" rel="noopener nofollow" target="_blank">Behrangi 2022</a>) and the meta-analyses that keep it at moderate (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10810386/" rel="noopener nofollow" target="_blank">Panchal 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/40590795/" rel="noopener nofollow" target="_blank">Nukaly 2025</a>). The drug is a licensed antifibrinolytic sold in ampoules for bleeding; a prescriber may use it off-label, and the dose in the skin is a fraction of the oral dose, which is the argument for it in patients with a reason to avoid systemic exposure.</p>
      <p>Moderate. The contraindications follow the drug: a history of thrombosis, clotting disorders, oestrogen therapy with thrombotic risk, and pregnancy are reasons for the prescriber to say no by any route. The <a href="/dark-spots">dark spots guide</a> and the <a href="/microneedling">microneedling guide</a> cover the oral, topical and needled routes; under the eye the same drug is part of the cocktail graded in Part 01.</p>
    `,
  },
  {
    id: 'prod-ha-cocktails',
    category: 'product',
    title: 'Hyaluronic-acid cocktails (NCTF 135HA, Redensity I, Viscoderm, amino-acid HA)',
    tldr: 'When mesotherapy delivers hyaluronic acid, with or without vitamins and amino acids, it is a skin booster: randomised trials against saline, against no treatment and against a face cream; instrument-measured hydration and radiance for a few months; a systematic review finding HA alone does more than HA-plus-cocktail. Moderate, and graded product by product in the skin boosters guide.',
    evidence: 'moderate',
    focus: 'device',
    note: 'Top pick: plain non-cross-linked HA — the best-controlled trial in the class at the lowest price',
    sessions: '3 sessions a month apart; repeat at 6 months',
    downtime: 'Papules for a day; bruising',
    cost: '€120–350 per session',
    bodyHtml: `
      <p>The evidence is in Part 01 and, in full, in the <a href="/skin-boosters">skin boosters guide</a>: the saline-controlled hemiface trial of plain HA (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3778226/" rel="noopener nofollow" target="_blank">Baspeyras 2013</a>), the 439-completer randomised trial of an HA-amino-acid solution (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13300611/" rel="noopener nofollow" target="_blank">Yang 2026</a>), the NCTF trial against a cream (<a href="https://pubmed.ncbi.nlm.nih.gov/37577796/" rel="noopener nofollow" target="_blank">Fanian 2023</a>), and the 2026 meta-analysis of amino-acid-enriched HA pooling a 2.15-point wrinkle-scale change across eleven mostly uncontrolled studies (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12926521/" rel="noopener nofollow" target="_blank">Mosteirin 2026</a>). Every one of these products is a CE-marked device with a name, a lot number and a single-dose presentation — the opposite of the house cocktail.</p>
      <p>Moderate. The one caution specific to this guide: NCTF's fifty ingredients are the "vitamin" part of a vitamin-HA cocktail, and the systematic review's finding that HA alone outperformed cocktails (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10082573/" rel="noopener nofollow" target="_blank">Ghatge 2023</a>) plus the negative vitamin biopsy studies in Part 01 suggest the HA is doing the work.</p>
    `,
  },
  {
    id: 'prod-dutasteride',
    category: 'product',
    title: 'Dutasteride (and minoxidil, finasteride) for the scalp — licensed drugs, off-label route',
    tldr: 'Dutasteride 0.01–0.05% in saline, one to two millilitres fanned across the thinning scalp: one placebo-controlled randomised trial in women, a 541-patient series, a 2025 meta-analysis of heterogeneous studies, and a 2026 dosing trial. Minoxidil and finasteride are injected on the same logic with less evidence. Pain in nearly half; no sexual side effects reported; not for anyone who could be pregnant. Emerging.',
    evidence: 'emerging',
    focus: 'offlabel',
    note: 'Best for: a man or post-menopausal woman with pattern loss who will not take the tablet — as an adjunct, in a dermatologist\'s hands',
    sessions: 'Monthly ×3, then quarterly',
    downtime: 'Scalp pain',
    cost: '€150–300 per session',
    bodyHtml: `
      <p>The evidence is in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/22486925/" rel="noopener nofollow" target="_blank">Moftah 2013</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/35816059/" rel="noopener nofollow" target="_blank">Saceda-Corralo 2022</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12690437/" rel="noopener nofollow" target="_blank">2025 meta-analysis</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/41328478/" rel="noopener nofollow" target="_blank">Sanabria 2026</a>). A case series in the JAAD's case-report journal adds outcomes in a small cohort (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11647129/" rel="noopener nofollow" target="_blank">dutasteride mesotherapy case series</a>). The safety review of novel alopecia treatments lists mesotherapy among modalities whose "safety profiles vary widely" and asks physicians to weigh each (<a href="https://pubmed.ncbi.nlm.nih.gov/30318935/" rel="noopener nofollow" target="_blank">Almohanna 2018</a>).</p>
      <p>Emerging, consistent with the <a href="/hair-loss">hair loss guide</a>. The drug is compounded for injection by a pharmacy on prescription — the licence is for the capsule — and the practical rules are those of the capsule: not in pregnancy or in women who could become pregnant, and honest expectations that the injection spares the body some exposure rather than eliminating it.</p>
    `,
  },
  {
    id: 'prod-pcdc',
    category: 'product',
    title: 'Phosphatidylcholine-deoxycholate cocktails (Lipodissolve, Aqualyx, DesoBody and copies)',
    tldr: 'The detergent that dissolves fat, sold as a compounded cocktail or a CE-marked "device" gel for the body: a 25-study review with 38% of studies reaching significance, a seven-woman randomised trial, a record of ulceration and chronic nodules when placed too superficially, and no medicines licence for fat reduction anywhere — Brazil banned it, the US regulator warned providers, and the licensed molecule is only licensed for the chin. Emerging for the body; the double chin guide grades it limited for the chin.',
    evidence: 'emerging',
    focus: 'unlicensed',
    note: 'Best for: a small, discrete fat pocket on the body in someone who has read the necrosis case reports and priced liposuction',
    sessions: '4–8 sessions, 2–4 weeks apart',
    downtime: 'Days to weeks of swelling and pain',
    cost: '€200–500 per session',
    bodyHtml: `
      <p>The evidence is in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/41296813/" rel="noopener nofollow" target="_blank">Carrion 2026</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3667691/" rel="noopener nofollow" target="_blank">Reeds 2013</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/21718184/" rel="noopener nofollow" target="_blank">Kutlubay 2011</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3486781/" rel="noopener nofollow" target="_blank">Mahmud 2012</a>). The pharmacology is simple: deoxycholate is a detergent and phosphatidylcholine an emulsifier, and "cell lysis, resulting from the detergent action of deoxycholate, may account for this clinical effect" (<a href="https://pubmed.ncbi.nlm.nih.gov/16681654/" rel="noopener nofollow" target="_blank">Rotunda 2006</a>); a submental pilot found phosphatidylcholine with and without organic silicon "equally effective" in eleven patients with nodules and bruising for days (<a href="https://pubmed.ncbi.nlm.nih.gov/18047610/" rel="noopener nofollow" target="_blank">Co 2007</a>). The harms are in Safety: superficial placement of Aqualyx producing skin necrosis and chronic nodules that ruptured (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9142263/" rel="noopener nofollow" target="_blank">Shahid 2022</a>), skin necrosis after "adipocytolytic" injections (<a href="https://pubmed.ncbi.nlm.nih.gov/26507958/" rel="noopener nofollow" target="_blank">Di Toro 2016</a>).</p>
      <p>Emerging: it works by a known mechanism, modestly, in uncontrolled series, and the regulatory history — no licence, a national ban, warning letters, a device certificate that attests safety rather than efficacy — is part of the grade. For the chin, the <a href="/double-chin">double chin guide</a> grades it limited, because a licensed drug exists; for the body, this is the alternative to cryolipolysis and liposuction, and the systematic review's cost comparison found it "costlier than single-session surgical liposuction".</p>
    `,
  },
  {
    id: 'prod-vitamin-cocktails',
    category: 'product',
    title: 'Vitamin, mineral and amino-acid cocktails (the clinic\'s own mix, "Meso-BK", "hair boosters")',
    tldr: 'The traditional syringe: vitamins B and C, minerals, amino acids, DMAE, organic silicon, sometimes procaine or lidocaine, mixed in the clinic or bought as a multi-ingredient solution. Two negative biopsy studies on the face; two commercial solutions that killed fibroblasts in culture; hair cocktails with one small positive and one negative trial against minoxidil; and, when drawn from multi-dose vials, the outbreaks. Limited.',
    evidence: 'limited',
    focus: 'unlicensed',
    note: 'Best for: nothing on the face; an adjunct at most on the scalp',
    sessions: '—',
    downtime: 'Papules, bruising, and the infection risk of the vial',
    cost: '€100–350 per session',
    bodyHtml: `
      <p>The facial evidence is the two negative biopsy studies (<a href="https://pubmed.ncbi.nlm.nih.gov/17199654/" rel="noopener nofollow" target="_blank">Amin 2006</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3513770/" rel="noopener nofollow" target="_blank">El-Domyati 2012</a>) and the laboratory finding that two commercial vitamin solutions killed fibroblasts (<a href="https://pubmed.ncbi.nlm.nih.gov/22151394/" rel="noopener nofollow" target="_blank">Jäger 2012</a>). The scalp evidence is the pair of minoxidil comparisons in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/31032783/" rel="noopener nofollow" target="_blank">Hunter 2019</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6463458/" rel="noopener nofollow" target="_blank">Gajjar 2019</a>) and an open-label study of a commercial "hair booster serum" of micronutrients and multivitamins (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10174677/" rel="noopener nofollow" target="_blank">Khare 2023</a>). Vitamin C by injection has randomised trials — for pigmented gums in dentistry, where it is compared with a diode laser (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10662509/" rel="noopener nofollow" target="_blank">Esmat 2023</a>), which tells you where the aesthetic trial is missing.</p>
      <p>Limited: no licence, no lot traceability in the clinic-mixed version, negative controlled evidence on the face, and the provenance problem that produced the outbreaks. The one vitamin-containing cocktail with a controlled trial in this guide is the under-eye combination in Part 01, and it earned its tier by containing two drugs.</p>
    `,
  },
  {
    id: 'prod-lipolytic-stimulators',
    category: 'product',
    title: 'Caffeine, aminophylline, L-carnitine, yohimbine and plant extracts — the "lipolytic stimulators"',
    tldr: 'Beta-agonists, phosphodiesterase inhibitors and plant extracts that make fat cells release fat in a dish: isoproterenol, aminophylline, yohimbine and Melilotus all stimulated lipolysis in the laboratory, and the lidocaine mixed with them blocked it. In people, the aminophylline randomised comparison was negative for cellulite and the fat-cell release, unlike deoxycholate\'s cell death, refills. Limited.',
    evidence: 'limited',
    focus: 'unlicensed',
    note: 'Best for: nothing outside a petri dish',
    sessions: '—',
    downtime: 'Tenderness; palpitations if the dose is careless',
    cost: '€150–400 per session',
    bodyHtml: `
      <p>The distinction the reviews draw is between "ablative" mesotherapy, which destroys fat cells with a detergent, and "lipolytic stimulators", which make fat cells release fat that "can refill over time" and therefore "requires more frequent treatments" (<a href="https://pubmed.ncbi.nlm.nih.gov/23800269/" rel="noopener nofollow" target="_blank">Jayasinghe 2013</a>). The laboratory work is real — isoproterenol, aminophylline, yohimbine and Melilotus each stimulated lipolysis, combinations more so, and lidocaine inhibited it (<a href="https://pubmed.ncbi.nlm.nih.gov/17954040/" rel="noopener nofollow" target="_blank">Caruso 2008</a>) — and the clinical work is not: the randomised comparison of aminophylline found no difference between treated and untreated legs (<a href="https://pubmed.ncbi.nlm.nih.gov/10654755/" rel="noopener nofollow" target="_blank">Collis 1999</a>), and the 2005 review found no clinical evaluation of the cellulite cocktails at all (<a href="https://pubmed.ncbi.nlm.nih.gov/16414902/" rel="noopener nofollow" target="_blank">Rotunda 2005</a>).</p>
      <p>Limited. These are also the cocktails most often drawn up in salons from unlabelled bottles, on the thighs and buttocks where the mycobacterial outbreaks were concentrated (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11801139/" rel="noopener nofollow" target="_blank">Singsing 2022</a>). The <a href="/cellulite">cellulite guide</a> is where the money should go.</p>
    `,
  },
  {
    id: 'prod-glutathione',
    category: 'product',
    title: 'Glutathione and "whitening" cocktails — intravenous, intramuscular or intradermal',
    tldr: 'The drip: intravenous glutathione has one placebo-controlled study, not significant, and a systematic-review verdict of "contraindicated due to lack of efficacy and side effects"; oral glutathione has small positive trials; injected whitening cocktails of glutathione, vitamin C and tranexamic acid have no controlled trial for whitening. Limited, and illegal to market as a whitening injection in several countries.',
    evidence: 'limited',
    focus: 'unlicensed',
    note: 'Best for: no one',
    sessions: '—',
    downtime: '—',
    cost: '€100–300 per drip',
    bodyHtml: `
      <p>The evidence is in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/39444151/" rel="noopener nofollow" target="_blank">Sarkar 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/30895708/" rel="noopener nofollow" target="_blank">Dilokthornsakul 2019</a>). The reason the drip is singled out is that it is the only route with a placebo-controlled study, and that study was negative, while the side effects — skin eruptions, and the thyroid, kidney and liver concerns catalogued in the reviews — accrue to the intravenous dose. The <a href="/longevity-clinics">longevity clinics guide</a> grades the wider "IV drip" menu at the same tier.</p>
      <p>Limited. If lightening a patch of melasma is the goal, the tranexamic-acid row above and the <a href="/dark-spots">dark spots guide</a> have the treatments with trials; if lightening the whole skin is the goal, no injectable does it safely, and a clinic that says otherwise is selling a drip, not a result.</p>
    `,
  },
  {
    id: 'prod-homeopathic-needlefree',
    category: 'product',
    title: 'Homeopathic mixtures, multi-dose vials and "needle-free" mesotherapy',
    tldr: 'Homeopathic mesotherapy products are dilutions with no active dose; the one thing they have demonstrably delivered is Mycobacterium abscessus, from contaminated multi-dose vials at a clinic where 17 of 77 patients were infected. "Needle-free" mesotherapy — electroporation, "mesoporation", jet injectors — has no controlled trial for any cosmetic claim in the searchable literature. Limited.',
    evidence: 'limited',
    focus: 'unlicensed',
    note: 'Best for: no one; the multi-dose vial is the single most avoidable risk in this guide',
    sessions: '—',
    downtime: '—',
    cost: '€60–200 per session',
    bodyHtml: `
      <p>The outbreak investigation is the whole argument: seventeen of 77 patients developed <em>M. abscessus</em> abscesses, the products were "homeopathic drugs in multi-dose vials", the clinic's technique was correct, the vials were contaminated at the factory, and the production line was suspended (<a href="https://pubmed.ncbi.nlm.nih.gov/21684045/" rel="noopener nofollow" target="_blank">Galmés-Truyols 2011</a>). A homeopathic dilution has, by definition, no pharmacologically active dose; what it carries is whatever grew in the bottle. Needle-free "mesotherapy" — electric pulses, ultrasound or jet pressure claimed to drive cosmetic solutions through intact skin — returns no controlled cosmetic trial under any of its names in PubMed; the only relevant paper tests whether a jet injector damages platelets in a dish (<a href="https://pubmed.ncbi.nlm.nih.gov/34021518/" rel="noopener nofollow" target="_blank">Gökkaya 2021</a>), and intact skin does not admit large molecules without a needle, which is why the <a href="/skin-boosters">skin boosters guide</a> exists.</p>
      <p>Limited. Both are sold on the absence of the thing that gives mesotherapy any effect — the drug, and the needle — and one of them has an outbreak to its name.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-infections',
    category: 'safety',
    title: 'The mesotherapy infection: rapidly growing mycobacteria, weeks later, for months',
    tldr: 'A systematic review found 30 reports and 423 patients with non-tuberculous mycobacterial infections after mesotherapy, mostly women aged 16–55, mostly on the abdomen, buttocks and thighs, with multiple localised nodules, abscesses and ulcers appearing weeks after the injections, needing prolonged and often repeated courses of antibiotics, and "often complicated by scarring/poor cosmesis". Outbreaks infected 28% of a salon\'s clients and 22% of a clinic\'s. The organisms come from contaminated solutions and environments, not from the patient.',
    bodyHtml: `
      <p>Rapidly growing mycobacteria — <em>M. fortuitum</em>, <em>M. chelonae</em>, <em>M. abscessus</em> — live in water and soil, survive many disinfectants, and cause a characteristic infection: painful violaceous nodules and abscesses at injection sites appearing one to eight weeks after treatment, spreading to fistulas and ulcers, without fever, and unresponsive to the usual antibiotics. The systematic review pooled 30 reports of 423 patients: "largely from South America", "mostly women aged 16–55", lesions "in the abdomen, buttocks, or thighs", "multiple, well-localized lesions without systemic symptoms", resolution "after antibiotic therapy, though many patients required multiple antibiotic courses and/or agents", and infections "often complicated by scarring/poor cosmesis and prolonged treatment course" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11801139/" rel="noopener nofollow" target="_blank">Singsing 2022</a>). The outbreaks: 39 of 138 clients of one Spanish beauty salon, with 3 to 20 lesions each and two months or more of clarithromycin and levofloxacin (<a href="https://pubmed.ncbi.nlm.nih.gov/19840199/" rel="noopener nofollow" target="_blank">Quiñones 2010</a>); 17 of 77 patients from contaminated homeopathic vials (<a href="https://pubmed.ncbi.nlm.nih.gov/21684045/" rel="noopener nofollow" target="_blank">Galmés-Truyols 2011</a>); a procaine vial in Lima (<a href="https://pubmed.ncbi.nlm.nih.gov/18200353/" rel="noopener nofollow" target="_blank">Munayco 2008</a>); clusters in Colombia (<a href="https://pubmed.ncbi.nlm.nih.gov/20332582/" rel="noopener nofollow" target="_blank">Correa 2010</a>) and Italy (<a href="https://pubmed.ncbi.nlm.nih.gov/32294290/" rel="noopener nofollow" target="_blank">Veraldi 2020</a>); and, in 2026, an esthetician's lipolytic injections in Montréal, traced by whole-genome sequencing (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13475720/" rel="noopener nofollow" target="_blank">Quan-Nguyen 2026</a>).</p>
      <p>What to do: a red, tender lump appearing two to eight weeks after mesotherapy is not a bruise and not "the product working" — it needs a doctor, a biopsy and a mycobacterial culture that ordinary swabs miss, and treatment lasts months. Prevention is provenance: single-dose vials or pharmacy-labelled preparations, skin disinfection, single-use needles, a clinician, and no salon.</p>
    `,
  },
  {
    id: 'safety-granulomas',
    category: 'safety',
    title: 'Granulomas, panniculitis and the lumps that are not infection',
    tldr: 'Foreign-body granulomas after mesotherapy — diffuse dermal nodules, redness and itching on ultrasound and biopsy — are treated with steroid-based multi-drug injections over two to four sessions; granuloma annulare around the eyes and on the face has followed vitamin cocktails and has needed a JAK inhibitor in one case; panniculitis has needed dapsone. A lump that is not infected is still a lump that needs a doctor who knows what was injected.',
    bodyHtml: `
      <p>Not every lump is mycobacterial. A Chinese series of patients with multiple foreign-body granulomas after mesotherapy — "diffuse hypoechoic areas in the dermis" on ultrasound — responded to a multi-drug intralesional regimen built around a reduced triamcinolone dose over two to four sessions, without recurrence at one to eight months (<a href="https://pubmed.ncbi.nlm.nih.gov/39160402/" rel="noopener nofollow" target="_blank">Su 2025</a>). Granuloma annulare has been reported around the eyes after mesotherapy (<a href="https://pubmed.ncbi.nlm.nih.gov/32975346/" rel="noopener nofollow" target="_blank">Robati 2020</a>) and, in a 2025 case, was treated with the JAK inhibitor baricitinib (<a href="https://pubmed.ncbi.nlm.nih.gov/40165738/" rel="noopener nofollow" target="_blank">Wang 2025</a>); mesotherapy-induced panniculitis responded to dapsone (<a href="https://pubmed.ncbi.nlm.nih.gov/25970226/" rel="noopener nofollow" target="_blank">Polat 2016</a>). The safety review of the field describes exactly this literature — "case series and isolated case reports describing various side effects of different severities", each managed individually (<a href="https://pubmed.ncbi.nlm.nih.gov/31444843/" rel="noopener nofollow" target="_blank">Plachouri 2019</a>).</p>
      <p>The common thread is an unknown substance in the dermis. When the syringe held a named, licensed product, the treating doctor can look up what it was; when it held a house cocktail, the biopsy is the first anyone learns of its contents. Keep the product name and lot number from every session, and take them with you if a lump appears.</p>
    `,
  },
  {
    id: 'safety-lipolytics',
    category: 'safety',
    title: 'Necrosis, ulcers, nodules and nerves: the lipolytic injections',
    tldr: 'Deoxycholate dissolves whatever it touches. Placed too superficially, Aqualyx produced skin necrosis and chronic nodules that ruptured through the skin; "adipocytolytic" injections have caused skin necrosis; scalp mesotherapy caused multifocal abscesses with fat necrosis and permanent scarring alopecia requiring surgery. The licensed deoxycholic acid adds temporary marginal mandibular nerve weakness and swallowing difficulty in a few percent, and fibrosis and numbness for weeks. Anatomy and depth are the whole of the safety.',
    bodyHtml: `
      <p>The detergent that lyses adipocytes lyses skin, nerve and muscle if it reaches them. The Aqualyx case: injections "administered too superficially" produced severe pain, localised skin necrosis, and "numerous painful nodules" that "ruptured onto the skin surface, resulting in purulent and bleeding lesions" — the authors' conclusion was about "appropriate training and competence" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9142263/" rel="noopener nofollow" target="_blank">Shahid 2022</a>); skin necrosis after adipocytolytic solutions has its own report (<a href="https://pubmed.ncbi.nlm.nih.gov/26507958/" rel="noopener nofollow" target="_blank">Di Toro 2016</a>); ulceration occurred in two of the Lipodissolve series (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3486781/" rel="noopener nofollow" target="_blank">Mahmud 2012</a>). On the scalp, mesotherapy produced "multifocal scalp abscesses with subcutaneous fat necrosis" and scarring alopecia "requiring extensive surgical repair" (<a href="https://pubmed.ncbi.nlm.nih.gov/18246702/" rel="noopener nofollow" target="_blank">Kadry 2008</a>). For the licensed drug, the meta-analyses list fibrosis, pain, numbness, swelling, nodules and paraesthesia as significantly more frequent than placebo (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10570630/" rel="noopener nofollow" target="_blank">Inocêncio 2023</a>), and the <a href="/double-chin">double chin guide</a> gives the nerve-weakness and swallowing rates from the trials.</p>
      <p>Rules: deoxycholate and its cocktails go into subcutaneous fat, never the dermis, never within the anatomical zone of the marginal mandibular nerve unless the injector can draw it, never into a patient who cannot tolerate weeks of swelling; no lipolytic near the eyes, the neck's great vessels or the thin skin of the lower leg; and no "same-day" combination with a device that heats the same fat.</p>
    `,
  },
  {
    id: 'safety-drugs',
    category: 'safety',
    title: 'The drug in the syringe: what tranexamic acid, dutasteride, minoxidil and lidocaine carry with them',
    tldr: 'An off-label route does not cancel a drug\'s contraindications. Tranexamic acid: not with a history of clots, clotting disorders or high-risk oestrogen therapy. Dutasteride and finasteride: not in pregnancy or in women who could conceive, by any route. Minoxidil: dizziness and unwanted hair if it reaches the circulation. Lidocaine and procaine in cocktails: allergy, and — the lipolysis studies\' finding — an antilipolytic effect that defeats the fat cocktail it sits in.',
    bodyHtml: `
      <p>The intradermal dose of tranexamic acid is small, but the drug is an antifibrinolytic and the trial exclusion criteria are the prescribing rule: thromboembolic history, coagulopathy, and hormonal therapy with thrombotic risk (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9891212/" rel="noopener nofollow" target="_blank">Pazyar 2023</a>). Dutasteride mesotherapy produced "no serious or sexual adverse events" in 541 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/35816059/" rel="noopener nofollow" target="_blank">Saceda-Corralo 2022</a>), which is a statement about men and post-menopausal women; a 5-alpha-reductase inhibitor is teratogenic and has no place near a pregnancy. The safety review of novel alopecia treatments is explicit that "their safety profiles vary widely" and asks for each to be weighed (<a href="https://pubmed.ncbi.nlm.nih.gov/30318935/" rel="noopener nofollow" target="_blank">Almohanna 2018</a>). The local anaesthetics added to cocktails for comfort carry allergy risk, were the vehicle of the Lima outbreak's contaminated vial (<a href="https://pubmed.ncbi.nlm.nih.gov/18200353/" rel="noopener nofollow" target="_blank">Munayco 2008</a>), and "should be removed from mesotherapy solutions designed for local fat reduction" because they block lipolysis (<a href="https://pubmed.ncbi.nlm.nih.gov/17954040/" rel="noopener nofollow" target="_blank">Caruso 2008</a>).</p>
      <p>Disclose every medicine you take, every allergy, and any possibility of pregnancy; ask what is in the syringe and whether each ingredient is licensed for anything; and treat "it's only vitamins" as the sentence that preceded most of the case reports above.</p>
    `,
  },
  {
    id: 'safety-who-not',
    category: 'safety',
    title: 'Who should choose something else',
    tldr: 'Anyone offered a vitamin cocktail for their face (the trials are negative), a whitening drip (contraindicated), a cellulite cocktail (no evidence), or any injection in a salon or from a multi-dose vial (the outbreaks). Anyone pregnant, breastfeeding, with active infection or inflammation at the site, with a clotting history if tranexamic acid is proposed, or who could conceive if dutasteride is. And anyone who wants a result that lasts: the licensed chin injection is the one exception.',
    bodyHtml: `
      <p>Sort by the syringe. If it holds a licensed drug used for its licence — deoxycholic acid under the chin — the question is the usual one of a medical treatment: the right patient, the right anatomy, an injector who has done it many times, and tolerance for weeks of swelling. If it holds a licensed drug off-label — tranexamic acid, dutasteride — the question is whether the tablet would do the same job with less needle, and the answer in the trials is usually yes. If it holds hyaluronic acid, the <a href="/skin-boosters">skin boosters guide</a> applies. If it holds vitamins, plant extracts, caffeine, homeopathic dilutions or glutathione, the controlled evidence is absent or negative, and the risks — the mycobacterial infections, the granulomas — are borne for nothing.</p>
      <p>Then the setting: no injection of anything in a beauty salon, a hotel room, a home or a pop-up; nothing from a multi-dose vial; nothing without a product name and lot number; nothing from a practitioner who cannot say what to do if a lump appears at week three. The reason this guide is stricter than the others in the library is that mesotherapy is the one aesthetic technique whose documented outbreaks have infected a quarter of a clinic's clients at a time.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-same-as-boosters',
    category: 'faq',
    title: 'Is mesotherapy the same as a skin booster?',
    tldr: 'Same technique, different syringe. A skin booster is mesotherapy with hyaluronic acid; classic mesotherapy is the technique with vitamins, drugs or fat-dissolvers. The HA version has the evidence.',
    bodyHtml: `
      <p>Every skin booster is delivered by mesotherapy technique, and the hyaluronic-acid cocktails have randomised trials (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13300611/" rel="noopener nofollow" target="_blank">Yang 2026</a>); the vitamin cocktails without HA have negative biopsy studies (<a href="https://pubmed.ncbi.nlm.nih.gov/17199654/" rel="noopener nofollow" target="_blank">Amin 2006</a>). The <a href="/skin-boosters">skin boosters guide</a> grades the HA products; this guide grades everything else that goes through the same needle.</p>
    `,
  },
  {
    id: 'faq-face-vitamins',
    category: 'faq',
    title: 'Does vitamin mesotherapy for the face work?',
    tldr: 'No, on the two studies that looked under the skin: no clinical or histological change, and thinner collagen fibres in one. The glow is the needling and the water, for a fortnight.',
    bodyHtml: `
      <p>Both controlled biopsy studies were negative (<a href="https://pubmed.ncbi.nlm.nih.gov/17199654/" rel="noopener nofollow" target="_blank">Amin 2006</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3513770/" rel="noopener nofollow" target="_blank">El-Domyati 2012</a>), and two commercial solutions killed fibroblasts in culture (<a href="https://pubmed.ncbi.nlm.nih.gov/22151394/" rel="noopener nofollow" target="_blank">Jäger 2012</a>). The <a href="/retinoids">retinoids guide</a> has the biopsies that show collagen actually being made.</p>
    `,
  },
  {
    id: 'faq-fat-dissolving',
    category: 'faq',
    title: 'Are "fat-dissolving injections" the same as Kybella?',
    tldr: 'Only the licensed deoxycholic acid is Kybella / Belkyra, and only for the chin. The rest are cocktails or CE devices with the same detergent, no licence, and a record of ulcers.',
    bodyHtml: `
      <p>Deoxycholic acid has phase 3 trials and three-year data under the chin (<a href="https://pubmed.ncbi.nlm.nih.gov/27430612/" rel="noopener nofollow" target="_blank">Humphrey 2016</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8520020/" rel="noopener nofollow" target="_blank">Humphrey 2021</a>); the body cocktails have a review in which 38% of studies reached significance (<a href="https://pubmed.ncbi.nlm.nih.gov/41296813/" rel="noopener nofollow" target="_blank">Carrion 2026</a>) and case reports of necrosis (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9142263/" rel="noopener nofollow" target="_blank">Shahid 2022</a>). Ask for the product name; if it is not the licensed drug, you are buying the emerging row.</p>
    `,
  },
  {
    id: 'faq-hair',
    category: 'faq',
    title: 'Dutasteride injections or the tablet?',
    tldr: 'The tablet has the trials; the injection has one randomised trial, a large series and less systemic exposure. An adjunct or an alternative for people who will not take the pill, not a replacement.',
    bodyHtml: `
      <p>Oral dutasteride is graded strong for men in the <a href="/hair-loss">hair loss guide</a>; the mesotherapy route is emerging on one placebo-controlled trial (<a href="https://pubmed.ncbi.nlm.nih.gov/22486925/" rel="noopener nofollow" target="_blank">Moftah 2013</a>), a 541-patient series (<a href="https://pubmed.ncbi.nlm.nih.gov/35816059/" rel="noopener nofollow" target="_blank">Saceda-Corralo 2022</a>) and a meta-analysis that asks for large trials (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12690437/" rel="noopener nofollow" target="_blank">2025 review</a>). Either way, not in pregnancy.</p>
    `,
  },
  {
    id: 'faq-melasma',
    category: 'faq',
    title: 'Melasma: tranexamic acid injections or tablets?',
    tldr: 'Tablets, on the meta-analyses; injections if you cannot take them. Both need sunscreen and a bleaching agent, and both relapse.',
    bodyHtml: `
      <p>Across 28 randomised trials only the oral route was significantly better than adjuvant care (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10810386/" rel="noopener nofollow" target="_blank">Panchal 2024</a>); head to head, the injection matched the tablet (<a href="https://pubmed.ncbi.nlm.nih.gov/34724323/" rel="noopener nofollow" target="_blank">Behrangi 2022</a>) and hydroquinone (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9891212/" rel="noopener nofollow" target="_blank">Pazyar 2023</a>). The <a href="/dark-spots">dark spots guide</a> has the full ladder.</p>
    `,
  },
  {
    id: 'faq-infections',
    category: 'faq',
    title: 'Why do people get infections from mesotherapy?',
    tldr: 'Contaminated solutions, multi-dose vials and non-sterile settings: the organisms are water-loving mycobacteria that survive disinfectants and appear weeks later as nodules and abscesses.',
    bodyHtml: `
      <p>The systematic review of 423 patients found infections "arise from injections contaminated by the environment" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11801139/" rel="noopener nofollow" target="_blank">Singsing 2022</a>); the outbreaks came from a salon (<a href="https://pubmed.ncbi.nlm.nih.gov/19840199/" rel="noopener nofollow" target="_blank">Quiñones 2010</a>), contaminated homeopathic vials (<a href="https://pubmed.ncbi.nlm.nih.gov/21684045/" rel="noopener nofollow" target="_blank">Galmés-Truyols 2011</a>) and a procaine vial (<a href="https://pubmed.ncbi.nlm.nih.gov/18200353/" rel="noopener nofollow" target="_blank">Munayco 2008</a>). A lump appearing weeks after treatment needs a mycobacterial culture, not a warm compress.</p>
    `,
  },
  {
    id: 'faq-sessions',
    category: 'faq',
    title: 'How many sessions?',
    tldr: 'Two to four for deoxycholic acid; four to six for tranexamic acid; three for HA cocktails; monthly then quarterly for dutasteride. A "course of ten" has no trial behind it.',
    bodyHtml: `
      <p>Most deoxycholic acid patients reached their result within two to four of six permitted sessions (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6094350/" rel="noopener nofollow" target="_blank">Dayan 2018</a>); the tranexamic-acid trials ran two to three months of weekly or fortnightly injections (<a href="https://pubmed.ncbi.nlm.nih.gov/33782959/" rel="noopener nofollow" target="_blank">Badran 2021</a>); the HA trials used three monthly sessions (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13300611/" rel="noopener nofollow" target="_blank">Yang 2026</a>). The prices drawer has the rest.</p>
    `,
  },
  {
    id: 'faq-cost',
    category: 'faq',
    title: 'What does it cost?',
    tldr: '€100–350 a session for most cocktails, €600–1,200 for deoxycholic acid, €100–300 for a drip you should decline. Price the molecule, not the needle.',
    bodyHtml: `
      <p>Indicative European private prices. A deoxycholic-acid chin at €600–1,200 a session for two to four sessions is the one course on this page with a licence and a three-year result; tranexamic acid and dutasteride cost cents a dose and €100–300 a session for the clinician; HA cocktails are priced in the <a href="/skin-boosters">skin boosters guide</a>; vitamin, cellulite and whitening cocktails cost €100–400 a session for outcomes the trials could not find. Spend it on the rows graded moderate or above, or on the retinoid and sunscreen that outperform most of this page.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What mesotherapy is — and why the syringe matters more than the needle',
    intro: '',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you book: the law, the prices and the vial',
    intro: '',
    sections: context,
  },
  {
    id: 'uses',
    title: 'What mesotherapy can do — every use graded',
    intro: 'Graded on the trials for each indication and cocktail. The licensed and drug-containing syringes have the evidence; the traditional cocktails have the testimonials.',
    sections: uses,
  },
  {
    id: 'products',
    title: 'The cocktails, one by one — each graded on its own trials',
    intro: 'From a licensed medicine with phase 3 trials to homeopathic dilutions with an outbreak to their name. A cocktail is graded on what it has shown, not on the technique that delivers it.',
    sections: products,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The infections that define the field, the lumps that are not infections, what the fat-dissolvers do to skin and nerve, and what the drugs in the syringe carry with them.',
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
  face: 'Face',
  pigment: 'Pigment',
  hair: 'Hair',
  fat: 'Fat',
  body: 'Body',
  licensed: 'Licensed medicine',
  offlabel: 'Off-label medicine',
  device: 'CE device',
  unlicensed: 'Unlicensed',
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
