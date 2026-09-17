/**
 * Hair transplant guide — single source of truth (clinic, in-clinic layout).
 *
 * Consumed by /hair-transplant. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Editorial spine: a transplant moves follicles from the permanent zone at
 * the back of the head to where hair has gone; it redistributes a finite
 * supply, it does not create hair and it does not stop the loss around the
 * grafts. The evidence is decades of series and a meta-analysis of graft
 * survival rather than placebo-controlled trials, and the result depends on
 * the surgeon more than on the brand of the technique. Tiers grade the
 * indication and the technique: male pattern loss with a stable donor is
 * strong, women and scars moderate, eyebrows, beards, body-hair donors and
 * burnt-out scarring alopecia emerging, the 22-year-old and diffuse
 * unpatterned loss limited. Tiers stay consistent with /hair-loss (transplant
 * strong; finasteride and minoxidil strong; exosomes limited); where this
 * page diverges (platelet-rich plasma graded emerging as a transplant adjunct
 * although /hair-loss grades it moderate as a treatment) the row says so.
 * Prices are indicative European and Turkish prices as of September 2026, not
 * quotes; regulatory statements are as of September 2026.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea =
  | 'pattern'
  | 'women'
  | 'face'
  | 'scars'
  | 'donor'
  | 'technique'
  | 'adjunct'
  | 'alternative'
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
  'A hair transplant moves follicles; it does not make them. Follicular units of one to four hairs are taken from the back and sides of the head, where pattern hair loss does not reach, and placed where hair has gone; they keep the character of where they came from ("donor dominance") and grow for life. There are two ways to take them: a strip cut out and dissected under microscopes, leaving a line scar, or one unit at a time with a punch under a millimetre wide (FUE), leaving hundreds of dots. The donor supply is finite, so every graft is a decision about the hairline you will want at sixty.',
  'What the evidence is: not placebo-controlled trials, but sixty years of series. A meta-analysis of 34 studies pooled graft survival at 85–93% in non-scarring hair loss and satisfaction at 90–97%; a careful count found about half the transplanted hairs falling out in the first month and 92% growing at six months and 90% at twelve; megasessions of 3,000–6,000 units report 93.5–96.6% survival. Quality of life improved on validated scales in a 48-patient prospective study. One experienced surgeon\'s caution belongs next to those numbers: "graft survival often is not as high as is commonly stated".',
  'It does not stop you losing hair. In the one randomised, double-blind trial around a transplant, 79 men took finasteride or placebo from four weeks before to 48 weeks after: visible increases in hair in 94% against 67%. The hair behind a new hairline goes on thinning unless it is treated, which is why a transplant at 22 with an unstable pattern is a bad operation, and why the list of poor candidates is long — diffuse thinning that includes the donor area, active scarring alopecia, too little loss, the very young, unrealistic expectations, body dysmorphic disorder.',
  'What goes wrong, in numbers: two large series put overall complications at 1.2% and 4.7%; folliculitis followed 12.1% of 1,317 operations, more often with 4,000 or more grafts, more than 45 grafts per cm² and late first washing; bleeding needing attention in up to 8%, lasting numbness in up to 11%, a widened or raised strip scar in up to 15%, shock loss of existing hair in 4–7%. Scalp necrosis is rare — three cases in more than 10,000 operations at one centre — and the published series are dominated by smokers and sessions of about 3,900 grafts. In the specialty society\'s words, "there is no such thing as \'scarless surgery\' in hair transplantation".',
  'The market is the biggest risk. In the 2025 census of the international hair-surgery society, 59% of members reported black-market clinics in their city and one repair case in ten was the result of one; Istanbul\'s trade is estimated at a billion dollars a year, run in a "permissive regulatory environment" by technicians, with "bait and switch" on who operates and a "data black hole" on outcomes. What to do: get the diagnosis from a dermatologist with a dermatoscope first, take a year of medical treatment before surgery, choose the doctor who will hold the punch, ask how many operations happen that day, plan the donor for your whole life — and expect twelve to eighteen months before you judge it.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-a-transplant-is',
    category: 'concept',
    title: 'What a hair transplant is — moving follicular units, and the two ways to harvest them',
    tldr: 'Scalp hair grows in natural groups of one to four hairs called follicular units, and modern surgery transplants nothing else. Units are taken from the permanent zone at the back and sides — by cutting out a strip and dissecting it under microscopes (FUT) or by removing units one at a time with a small punch (FUE) — kept cold and wet, and placed into slits or holes made in the thinning area at the right angle and direction. Because they keep the genetics of where they came from, they are not lost to pattern baldness. The plugs of the 1970s are why people still fear the operation; they are not what is done now.',
    bodyHtml: `
      <p>The principle: hair transplantation is "based on the principle of donor dominance, where transplanted hair retains its genetic characteristics in new locations. It is primarily used for androgenetic alopecia but also can be used in end-stage cicatricial alopecia and as a corrective procedure post-trauma or surgery" (<a href="https://pubmed.ncbi.nlm.nih.gov/40354670/" rel="noopener nofollow" target="_blank">Queen 2025</a>); "Orentreich's donor dominance theory and the definition of safe donor area are the theoretical foundation of modern hair transplantation" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11679175/" rel="noopener nofollow" target="_blank">Punia 2024</a>), set out in the original long-term reports (<a href="https://pubmed.ncbi.nlm.nih.gov/4922433/" rel="noopener nofollow" target="_blank">Orentreich 1970</a>). The unit: "Modern hair restoration surgery is based on a technique known as follicular unit transplantation, in which follicular units are the exclusive structures used as hair grafts" (<a href="https://pubmed.ncbi.nlm.nih.gov/33905785/" rel="noopener nofollow" target="_blank">Jimenez 2021</a>); "Large, pluggy 'punch grafts' have been replaced with natural-appearing follicular unit grafts, which maintain their existing anatomy and with proper technique can match the orientation of surrounding hair follicles" (<a href="https://pubmed.ncbi.nlm.nih.gov/19674037/" rel="noopener nofollow" target="_blank">Avram 2009</a>); "the hair transplant techniques of the past (hair plugs, scalp reductions) have etched a negative impression of hair restoration surgery in the public memory" (<a href="https://pubmed.ncbi.nlm.nih.gov/32312502/" rel="noopener nofollow" target="_blank">Sand 2020</a>). The two harvests: "Follicular unit excision and FUT methods provide high-quality grafts, but differ in their scarring patterns of the donor region. Follicular unit transplantation results in a linear scar, whereas FUE produces punctate scars that are typically easily concealed" (<a href="https://pubmed.ncbi.nlm.nih.gov/32141930/" rel="noopener nofollow" target="_blank">Gupta 2020b</a>).</p>
      <p>What decides the result, according to the surgeons: "selection of the donor site, direction and angle of grafted hairs, density, and survival rate of implanted hair follicles" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4972479/" rel="noopener nofollow" target="_blank">Miao 2016</a>), and above all the hairline — "creating a natural hairline is one of the most important elements of a successful hair transplant" (<a href="https://pubmed.ncbi.nlm.nih.gov/24017977/" rel="noopener nofollow" target="_blank">Shapiro 2013</a>). The <a href="/hair-loss">hair-loss guide</a> covers the diagnosis and the medical treatments that come first; this page is about the operation.</p>
    `,
  },
  {
    id: 'what-the-evidence-shows',
    category: 'concept',
    title: 'What the evidence looks like — series and survival counts, not placebo trials',
    tldr: 'Nobody has randomised bald men to surgery or sham, and nobody needs to: a follicle that was not there and now grows hair is its own control. What the literature measures is how many grafts survive, how satisfied patients are and what goes wrong. A meta-analysis of 34 studies pooled graft survival at 85.0–93.1% and satisfaction at 89.7–97.0% in non-scarring alopecia, and 86–89% survival in scars; counted studies report 90–92% at six to twelve months and 93.5–96.6% in megasessions. The randomised trials that exist test details — holding solutions, blades, robots, finasteride — and the numbers come from experienced centres that chose to publish.',
    bodyHtml: `
      <p>The pooled numbers: "PubMed and Scopus literature searches between 1980 and 2018 yielded 57 articles for systematic review and 34 articles for meta-analysis … The pooled rates of graft survival were 84.98% (95% CI 78.90-91.06) using micrografts and 93.11% (95% CI 91.93-94.29) using micrografts and minigrafts in nonscarring alopecia patients, as well as 88.66% … and 86.25% … in scarring alopecia patients. The pooled rates of satisfaction were 89.70% … and 97.00%" (<a href="https://pubmed.ncbi.nlm.nih.gov/31667549/" rel="noopener nofollow" target="_blank">Stoneburner 2020</a>). The counted study: in tattooed test areas in 11 men, "about 50% of the transplanted hairs fell out in 1 month, but at 6 months the survival rate … showed a good result (92%)", 90.4% at twelve months (<a href="https://pubmed.ncbi.nlm.nih.gov/11493294/" rel="noopener nofollow" target="_blank">Lee 2001</a>). The megasessions: 273 men, 3,000–6,000 units, "graft survival rate varies from 93.5% to 96.6%. A total of 81% of them were satisfied with the outcomes, 19% of them had a second procedure" (<a href="https://pubmed.ncbi.nlm.nih.gov/31529675/" rel="noopener nofollow" target="_blank">Li 2020</a>). The patient's side: 48 patients, "significant improvement in life quality after hair transplantation … Stress and anxiety DASS-21 subscales showed significantly reduced results", depression scores unchanged (<a href="https://pubmed.ncbi.nlm.nih.gov/38123846/" rel="noopener nofollow" target="_blank">Maletic 2024</a>). A 141-study systematic review of pattern-loss treatments lists transplantation among those that "successfully promote hair growth" (<a href="https://pubmed.ncbi.nlm.nih.gov/38852607/" rel="noopener nofollow" target="_blank">Rosenthal 2024</a>).</p>
      <p>The caution, from inside the specialty: "even experienced surgeons acknowledge that graft survival often is not as high as is commonly stated. Hair transplant surgeons should be thoroughly familiar with the many variables that affect graft survival … graft trauma, vascular/oxygenation factors, and biochemical injury" (<a href="https://pubmed.ncbi.nlm.nih.gov/24017986/" rel="noopener nofollow" target="_blank">Cooley 2013</a>); practice guidelines note that "evidence in the form of controlled data is not available for all techniques and protocols being used" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8611706/" rel="noopener nofollow" target="_blank">Mysore 2021</a>). A tier of strong on this page means the operation demonstrably works for that indication in many independent series; it says nothing about the clinic in front of you, which is the variable that matters most.</p>
    `,
  },
  {
    id: 'can-and-cant',
    category: 'concept',
    title: 'What a transplant can and cannot do',
    tldr: 'Can: rebuild a hairline and a frontal forelock that look natural at conversational distance, thicken a part, fill a scar, make an eyebrow or a beard, and last for life where it is placed. Cannot: restore teenage density — sessions place about 30–45 units per cm², roughly half of what an untouched scalp carries, and packing tighter lowers survival; stop the hair around the grafts from thinning; create new follicles; help diffuse loss that includes the donor area; or be undone — a hairline drawn too low at 25 is still there at 55, with the hair behind it gone.',
    bodyHtml: `
      <p>Density: "Dense packing is the philosophy of fitting more than 30 to 35 follicular unit grafts per square centimeter in one operation … not all patients are suitable candidates" (<a href="https://pubmed.ncbi.nlm.nih.gov/24017984/" rel="noopener nofollow" target="_blank">Farjo 2013</a>); in a counted study, "the survival rate of 20 and 30 grafts per template was higher than that of 40 and 50 grafts" per cm² (<a href="https://pubmed.ncbi.nlm.nih.gov/16792647/" rel="noopener nofollow" target="_blank">Lee 2006</a>); for comparison, women with pattern hair loss in one clinic still carried 62–67 follicular units per cm² before treatment (<a href="https://pubmed.ncbi.nlm.nih.gov/38894530/" rel="noopener nofollow" target="_blank">Park 2024</a>). Progression: "The improved scalp coverage achieved by hair transplant for men with androgenetic alopecia can be diminished by continued miniaturization and loss of preexisting, nontransplanted hairs" (<a href="https://pubmed.ncbi.nlm.nih.gov/16188178/" rel="noopener nofollow" target="_blank">Leavitt 2005</a>); "a good treatment plan must consider the potential for future hair loss" (<a href="https://pubmed.ncbi.nlm.nih.gov/32312509/" rel="noopener nofollow" target="_blank">Nadimi 2020</a>). Yield: two-centre data put the average operation at 1,290 units and a gain of about 31 units per cm², with better results under 33 years old and below Norwood stage 4a (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7606102/" rel="noopener nofollow" target="_blank">Vasudevan 2020</a>).</p>
      <p>The arithmetic that follows: a lifetime donor supply is several thousand units, a bald crown can swallow all of it, and the front of the head is what people see. That is why careful surgeons rebuild the hairline and forelock first, keep the hairline adult rather than adolescent, leave the crown until last or alone, and insist on medical treatment to hold what is still there — the <a href="/hair-loss">hair-loss guide</a> grades those medicines.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'who-is-a-candidate',
    category: 'context',
    title: 'Who is a candidate — and the eight kinds of patient who are not',
    tldr: 'The good candidate has patterned loss that has been stable for a year or more on treatment, a dense donor area, enough loss to be worth operating on, hair with some calibre and wave, and an expectation of improvement rather than restoration. A specialist review lists eight groups who are not candidates: diffuse unpatterned alopecia, active scarring alopecia, unstable loss, too little loss, the very young, unrealistic expectations, body dysmorphic disorder or hair-pulling, and the medically unfit. The consultation should include a dermatoscope: 26 patients in one series had lichen planopilaris hiding inside a pattern-loss area, where a transplant is contraindicated.',
    bodyHtml: `
      <p>The list: "not all such patients are candidates for hair transplants. There are eight conditions that cause patients to not be appropriate candidates. These are: diffuse unpatterned alopecia (DUPA), cicatricial alopecia (CA), patients with unstable hair loss, patients with insufficient hair loss, very young patients, patients with unrealistic expectations, patients with psychologic disorders such as body dysmorphic disorder (BDD) and trichotillomania, and patients who are medically unfit" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8719975/" rel="noopener nofollow" target="_blank">True 2021</a>). The hidden diagnosis: "We report 26 patients with LPP presenting with subtle erythema and scaling colocalized in the area of patterned thinning … All patients had been treated for seborrheic dermatitis in the past … This is particularly important in patients with AGA evaluated to undergo hair transplantation, as active LPP is a contraindication" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4857822/" rel="noopener nofollow" target="_blank">Baquerizo Nole 2015</a>). The donor: formulas exist to predict the permanent zone in a young man whose pattern has not declared itself, because "in early stages, the margins are assumed to be free from future hair loss" and may not be (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11679175/" rel="noopener nofollow" target="_blank">Punia 2024</a>). Women: "women should be thoroughly evaluated for biochemical causes of hair loss … The physician must recognize the clinical presentation of scarring alopecias and maintain a low threshold for biopsy" (<a href="https://pubmed.ncbi.nlm.nih.gov/32312508/" rel="noopener nofollow" target="_blank">Lam 2020</a>). The planning rule: "Sufficient donor hair and realistic patient expectations as well as an individual surgical planning of the hair distribution are crucial prerequisites for a sustainable hair restoration" (<a href="https://pubmed.ncbi.nlm.nih.gov/35428954/" rel="noopener nofollow" target="_blank">Finner 2022</a>).</p>
      <p>In practice: a dermatologist's diagnosis with trichoscopy before any surgeon's quote; a year on finasteride, dutasteride, minoxidil or, for women, an anti-androgen, to see what medicine alone returns and to prove the loss is stable; photographs in the same light; and a surgeon who tells you how many grafts you have for life, not only how many you need this year. The <a href="/hair-loss">hair-loss guide</a> covers the work-up and the types of loss.</p>
    `,
  },
  {
    id: 'the-operation-and-timeline',
    category: 'context',
    title: 'The day, the ugly-duckling months and the year it takes',
    tldr: 'Local anaesthetic as a ring block with light oral sedation; four to twelve hours depending on the number of grafts; donor harvested, grafts sorted and kept cold in a holding solution, recipient sites made by the surgeon, grafts placed with forceps or implanter pens. Crusts for a week to ten days, back at a desk in a week with a hat. Then the transplanted hairs shed — about half within a month — and the scalp looks worse than before until growth starts at three to four months. Judge at twelve months, eighteen for the crown and for women.',
    bodyHtml: `
      <p>Anaesthesia: "Traditionally, hair restoration surgery is performed using local anesthesia … coupled with light oral sedation … Due to its simplicity, adequate pain control and safety, ring blocks are typically" used (<a href="https://pubmed.ncbi.nlm.nih.gov/38049107/" rel="noopener nofollow" target="_blank">Barusco 2024</a>), with the doses, vasoconstrictors and toxicity limits reviewed for the specialty (<a href="https://pubmed.ncbi.nlm.nih.gov/11966789/" rel="noopener nofollow" target="_blank">Seager 2002</a>). Duration: megasessions of 3,000–6,000 units took "from 6 hours to 12 hours" (<a href="https://pubmed.ncbi.nlm.nih.gov/31529675/" rel="noopener nofollow" target="_blank">Li 2020</a>); an unshaven-FUE practice averaged 1,408 grafts for male pattern loss and 996 for women (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6392215/" rel="noopener nofollow" target="_blank">Park 2019</a>). The shed: "About 50% of the transplanted hairs fell out in 1 month" before the six-month count of 92% (<a href="https://pubmed.ncbi.nlm.nih.gov/11493294/" rel="noopener nofollow" target="_blank">Lee 2001</a>); in a 240-patient randomised trial, shedding followed 95% of operations with grafts held in Ringer solution and 73.8% with a buffered organ-preservation solution when 3,000 or more grafts were placed, with the same final survival (<a href="https://pubmed.ncbi.nlm.nih.gov/37036372/" rel="noopener nofollow" target="_blank">Zhou 2023</a>). First growth: "Hair growth started becoming visible after two to five months" in 104 patients (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6967169/" rel="noopener nofollow" target="_blank">Bansal 2019</a>). Washing matters: late first washing was a risk factor for folliculitis and for persistent redness around the grafts, which in turn went with more shedding and lower survival (<a href="https://pubmed.ncbi.nlm.nih.gov/37904273/" rel="noopener nofollow" target="_blank">Zhou 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/38849551/" rel="noopener nofollow" target="_blank">Zhang 2024</a>).</p>
      <p>What to expect in the mirror: a swollen forehead for two to four days, crusts that come off with the clinic's washing routine by day ten, a shaved or trimmed donor area that hides within two to three weeks, a worse-looking scalp from week three to month three, fine new hairs from month three or four, and cosmetic density from month eight. Existing hair near the grafts can also shed temporarily, more often in women (<a href="https://pubmed.ncbi.nlm.nih.gov/32312508/" rel="noopener nofollow" target="_blank">Lam 2020</a>); it returns within about three months (<a href="https://pubmed.ncbi.nlm.nih.gov/37085132/" rel="noopener nofollow" target="_blank">Mir-Bonafé 2023</a>).</p>
    `,
  },
  {
    id: 'cost-and-tourism',
    category: 'context',
    title: 'What it costs, why Istanbul is a third of the price, and who is holding the punch',
    tldr: 'Western European clinics where a doctor operates charge roughly €3–6 a graft — €5,000–12,000 for a typical 1,500–3,000-graft operation; Turkish packages with flights and hotel run €1,800–3,500. The difference is labour: technicians rather than surgeons, several patients a day, and a regulatory environment a 2025 review calls permissive, with "bait and switch" on who operates and a "data black hole" on outcomes. In the specialty society\'s 2025 census, 59% of members had black-market clinics in their city and one repair case in ten came from one. Americans surveyed would pay a median $4,000–5,000.',
    bodyHtml: `
      <p>The trade: "Hair transplant tourism has surged globally, with Turkey, especially Istanbul, becoming the epicenter, generating about US$1 billion annually … We documented trends including aggressive digital marketing, the expanded role of unsupervised technicians, bait and switch practices, and alarming complication rates reported by regulatory bodies, which burden patients' home healthcare systems … While the hair transplant tourism industry can offer effective solutions and high graft survival in some centers, it primarily operates within a permissive regulatory environment, lacking standardization, oversight, and consistent reporting, creating a 'data black hole'" (<a href="https://pubmed.ncbi.nlm.nih.gov/40660034/" rel="noopener nofollow" target="_blank">Haider 2025</a>). The specialty's own account: "a large part of the favorable appeal of FUE is due to false claims that it is 'minimally invasive,' 'scarless,' or 'not even surgery' … advertised by 'black-market' clinics offering low-cost FUE surgery performed by amateur, nonprofessional technicians" (<a href="https://pubmed.ncbi.nlm.nih.gov/38092043/" rel="noopener nofollow" target="_blank">Anastassakis 2024</a>); "59% of ISHRS members reported there are Black Market hair transplant clinics in their cities, up from 51% in 2021", and "the average percentage of repair cases due to a previous Black Market hair transplant was 10%, up from 6%" (<a href="https://ishrs.org/2025-practice-census-results/" rel="noopener nofollow" target="_blank">ISHRS 2025 census</a>); "When doctors advertise their credentials and then delegate the surgery to unlicensed personnel, patients are being misled and placed at risk" (<a href="https://ishrs.org/patients/consumer-alert/" rel="noopener nofollow" target="_blank">ISHRS consumer alert</a>). Demand: in a 1,000-person US survey, women with extensive loss would pay a median $5,000 and those with minimal loss $4,000 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10642908/" rel="noopener nofollow" target="_blank">Knoedler 2023</a>); search interest and FUE's share of operations have risen steadily since 2004 (<a href="https://pubmed.ncbi.nlm.nih.gov/32945026/" rel="noopener nofollow" target="_blank">Gupta 2020</a>).</p>
      <p>Indicative prices, September 2026: Western Europe and the UK €3–6 per graft, €4,000–12,000 an operation; Spain, Portugal, Poland and Hungary €2–3.50 per graft; Turkish all-inclusive packages €1,800–3,500 regardless of graft count, which is itself a warning — a fixed price for "up to 5,000 grafts" rewards over-harvesting. Good surgery exists in Turkey and bad surgery exists in London; the questions that separate them are in the Safety section and cost nothing to ask.</p>
    `,
  },
];

const uses: Section[] = [
  {
    id: 'use-male-pattern',
    category: 'use',
    title: 'Male pattern hair loss — hairline, forelock and mid-scalp',
    tldr: 'The indication the operation was built for. Pooled graft survival of 85–93% and satisfaction of 90–97% across 34 studies; 92% of transplanted hairs growing at six months in a counted study; 93.5–96.6% survival in megasessions of 3,000–6,000 units, with one man in five wanting a second pass; validated quality-of-life gains at a year. Results were better under 33 and below Norwood stage 4a in a two-centre series. It works best in a man whose pattern is stable on medication, who wants an adult hairline, and whose donor is thick.',
    evidence: 'strong',
    focus: 'pattern',
    note: 'Best for: Norwood 3–5 with a dense donor, stable for a year on treatment; the crown comes last or not at all',
    sessions: '1–2 operations of 1,500–3,500 grafts, a year apart',
    downtime: '7–10 days of crusts; shed at 3–6 weeks; growth from month 3–4; judge at 12–18 months',
    cost: '€4,000–12,000 in Western Europe; €1,800–3,500 packages in Turkey',
    bodyHtml: `
      <p>The numbers: pooled survival "84.98% … using micrografts and 93.11% … using micrografts and minigrafts", pooled satisfaction 89.7–97.0% (<a href="https://pubmed.ncbi.nlm.nih.gov/31667549/" rel="noopener nofollow" target="_blank">Stoneburner 2020</a>); "The mean survival rate by the total number of hairs was 92.0 and 90.4% at 6 and 12 months" (<a href="https://pubmed.ncbi.nlm.nih.gov/11493294/" rel="noopener nofollow" target="_blank">Lee 2001</a>); 273 men with severe loss, "the number of follicular units transplanted was between 3000 and 6000 … graft survival rate varies from 93.5% to 96.6%. A total of 81% of them were satisfied" (<a href="https://pubmed.ncbi.nlm.nih.gov/31529675/" rel="noopener nofollow" target="_blank">Li 2020</a>); two centres, "average number of follicular units transplanted in patients was 1290 (improvement in hair density: of 30.61 follicular units/sq cm). There was a statistically significant difference in improvement in hair density in patients younger than 33 years and in patients with Norwood classification below stage 4a" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7606102/" rel="noopener nofollow" target="_blank">Vasudevan 2020</a>); quality of life and anxiety better at follow-up in 48 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/38123846/" rel="noopener nofollow" target="_blank">Maletic 2024</a>). The design: a hairline drawn by rule and then softened with single-hair units (<a href="https://pubmed.ncbi.nlm.nih.gov/2040755/" rel="noopener nofollow" target="_blank">Norwood 1991</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/24017977/" rel="noopener nofollow" target="_blank">Shapiro 2013</a>). The reviews: "Thoughtful hairline design and concurrent medical management have improved aesthetic results" (<a href="https://pubmed.ncbi.nlm.nih.gov/40354670/" rel="noopener nofollow" target="_blank">Queen 2025</a>); "Patients are encouraged to also use medical therapy to help protect their surgical results" (<a href="https://pubmed.ncbi.nlm.nih.gov/26176286/" rel="noopener nofollow" target="_blank">Rogers 2015</a>).</p>
      <p>Graded strong, as the <a href="/hair-loss">hair-loss guide</a> grades it: no sham trials, but a visible, countable, durable effect reproduced in independent series for decades. The strength belongs to the operation done well; the same guide's warning applies — it does not stop loss around the grafts, which is the job of the medicines in the adjunct row below.</p>
    `,
  },
  {
    id: 'use-female-pattern',
    category: 'use',
    title: 'Female pattern hair loss — a smaller group of candidates, a different plan',
    tldr: 'Women thin diffusely behind a preserved hairline, present later, and often have a donor area that is thinning too — so fewer are candidates, and the ones who are want density along the part rather than a new hairline. A review of 24 studies finds good results with a tailored approach and notes that women usually prefer the strip method, which spares shaving. Shock loss of existing hair is commoner than in men. One clinic\'s data suggest a transplant when scalp density is below about 96 hairs per cm² and scalp micropigmentation when it is above 105. Work-up first: iron, thyroid, androgens and a biopsy if there is any doubt.',
    evidence: 'moderate',
    focus: 'women',
    note: 'Best for: patterned frontal or part-line thinning with a dense occipital donor, stable on minoxidil and an anti-androgen',
    sessions: '1 operation of 800–2,000 grafts; strip or unshaven FUE',
    downtime: 'As for men; temporary shedding of existing hair is common',
    cost: '€4,000–9,000',
    bodyHtml: `
      <p>The review: "Twenty-four studies focusing on hair transplantation in women were analyzed … Women often present later than men for transplantation, with diffuse thinning across the vertex and temples … Women should be evaluated for systemic contributors and the presence of scarring or traction alopecia. Women favor follicular unit transplantation (FUT) due to donor area preservation and compatibility with long hairstyles … Hair transplantation in women requires a tailored approach focusing on diffuse density restoration, donor area preservation, and adjunct medical management" (<a href="https://pubmed.ncbi.nlm.nih.gov/40911748/" rel="noopener nofollow" target="_blank">Queen 2025b</a>). The surgical experience: "Hair transplant surgery is extremely successful in correcting the most cosmetically problematic areas of alopecia" with attention to "pearls to reduce postoperative sequelae" (<a href="https://pubmed.ncbi.nlm.nih.gov/24017982/" rel="noopener nofollow" target="_blank">Unger 2013</a>); "Postoperative hair shock loss is a common feature following hair transplant in women, and the surgeon should understand the preoperative counseling and preventative measures needed" (<a href="https://pubmed.ncbi.nlm.nih.gov/32312508/" rel="noopener nofollow" target="_blank">Lam 2020</a>). The choice against tattooed camouflage: in 40 women, "SMP is recommended when the HD is ≥104.6 hairs/cm2 and HT surgery is strongly recommended when the HD is ≤96.17 hairs/cm2" (<a href="https://pubmed.ncbi.nlm.nih.gov/38894530/" rel="noopener nofollow" target="_blank">Park 2024</a>). Volumes: an unshaven-FUE practice averaged 996 grafts in women with pattern loss (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6392215/" rel="noopener nofollow" target="_blank">Park 2019</a>). Demand: "the number of female hair restoration surgical patients treated in 2024 increased by 16.5% from 2021" (<a href="https://ishrs.org/2025-practice-census-results/" rel="noopener nofollow" target="_blank">ISHRS 2025 census</a>).</p>
      <p>Graded moderate: consistent expert series, no pooled survival data specific to women, and a real selection problem — the <a href="/hair-loss">hair-loss guide</a> notes that many women are not candidates because the donor thins with the rest. The hairline-lowering row below is a different operation for a different woman.</p>
    `,
  },
  {
    id: 'use-scars-burns',
    category: 'use',
    title: 'Scars, burns and surgical hair loss — grafts into scar tissue, in stages',
    tldr: 'Stable scars from burns, injuries, facelifts and cleft repairs take grafts less reliably than normal scalp, but they take: pooled survival of 86–89% in scarring alopecia in the meta-analysis, a mean 79% of placed units surviving in 37 Chinese patients with no patient below 64%, and a burn-surgery review that plans on repeat sessions to build density. Low density per session, a test patch if the scar is thick or pale, and sometimes fat grafting or a fractional laser first. A Chinese expert consensus now covers selection and technique.',
    evidence: 'moderate',
    focus: 'scars',
    note: 'Best for: mature, stable, non-inflammatory scars of a size the donor can cover; eyebrows, beard and scalp after burns',
    sessions: '2–3 staged sessions at low density, 9–12 months apart',
    downtime: 'As standard; slower healing in scar',
    cost: '€2,000–6,000 per session',
    bodyHtml: `
      <p>The numbers: "88.66% … using micrografts and 86.25% … using micrografts and minigrafts in scarring alopecia patients" (<a href="https://pubmed.ncbi.nlm.nih.gov/31667549/" rel="noopener nofollow" target="_blank">Stoneburner 2020</a>); "Thirty-seven patients were enrolled. Cicatricial alopecia was caused by burns (n=8), trauma (n=21) and plastic surgery … the surviving follicular unit density/transplanted follicular unit density rate was 64.29% to 95.00% (mean 78.96%)", with two epidermoid cysts as the only late complications (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4271754/" rel="noopener nofollow" target="_blank">Shao 2014</a>). The burn experience: "this is usually a multiple stage process often requiring surgery over several years. This is because graft take is not as reliable as in healthy non-scarred skin and may need repeating to achieve adequate density" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5965333/" rel="noopener nofollow" target="_blank">Farjo 2015</a>). The consensus: outcomes "vary because of impaired vascularity, fibrosis and heterogeneous scar characteristics, and standardized perioperative guidance is lacking" (<a href="https://pubmed.ncbi.nlm.nih.gov/42573499/" rel="noopener nofollow" target="_blank">Zhao 2026</a>); a specialist review covers "the evidence-based practices that exist for hair transplantation in scarring alopecia" (<a href="https://pubmed.ncbi.nlm.nih.gov/32312504/" rel="noopener nofollow" target="_blank">Kumar 2020</a>). FUE has widened the uses: "correction of alopecia, cleft lip scars, post-burn or surgical scars, vitiligo" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6795649/" rel="noopener nofollow" target="_blank">Sharma 2019</a>).</p>
      <p>Graded moderate: pooled survival data and consistent series, lower and more variable take than in normal scalp, and the need for staging. This row is about scars whose cause is over; the inflammatory scarring alopecias are a separate row with a different answer.</p>
    `,
  },
  {
    id: 'use-hairline-lowering',
    category: 'use',
    title: 'A high hairline in women — grafts, or the forehead-reduction operation',
    tldr: 'Two ways to lower a lifelong high hairline. Grafts: 1,000–2,000 units, a year to mature, natural and scar-free at the front. Surgical advancement: the scalp is loosened and moved forward in one operation, with immediate full density and a fine scar at the hairline. The largest series, 641 Asian patients, removed about 16 mm of forehead; two years later the forehead had relaxed back by 2–2.5 mm (11–16%), and scar and aesthetic scores were good. It needs a mobile scalp and a hairline that is not going to recede — which excludes most men.',
    evidence: 'emerging',
    focus: 'women',
    note: 'Best for: women with a congenitally high, stable hairline and a loose scalp; grafts afterwards soften the scar',
    sessions: '1 operation; grafts optional at 6–12 months',
    downtime: '1–2 weeks; numbness behind the scar for months',
    cost: '€5,000–9,000',
    bodyHtml: `
      <p>The operation: "As an alternative to hair transplantation for lowering the overly high hairline, hairline-lowering/forehead-reduction surgery has several advantages, including unsurpassed density and immediate results. Appropriate candidates for this surgery must have a stable frontal hairline (thus excluding most men) and a fairly to very mobile scalp" (<a href="https://pubmed.ncbi.nlm.nih.gov/32312507/" rel="noopener nofollow" target="_blank">Epstein 2020</a>); "The best candidates for HLS are usually women with stable frontal hairlines and mobile scalps" (<a href="https://pubmed.ncbi.nlm.nih.gov/41203335/" rel="noopener nofollow" target="_blank">Arnaoutakis 2026</a>). The series: "A total of 641 patients underwent forehead reduction surgery. The average lengths of the skin excisions were 16.64 mm, 15.36 mm, and 15.33 mm … Long-term follow-up of 85 patients revealed forehead lengthening that exceeded the initial postoperative measurements by 2.44 mm (15.04%), 1.98 mm (11.53%), and 2.51 mm (15.8%)", with mean aesthetic scores of 4.38 of 5 from patients and 3.98 from surgeons (<a href="https://pubmed.ncbi.nlm.nih.gov/33683382/" rel="noopener nofollow" target="_blank">Lee 2021b</a>). With grafts instead: 192 of 658 unshaven-FUE patients in one practice were women having hairline surgery (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6392215/" rel="noopener nofollow" target="_blank">Park 2019</a>).</p>
      <p>Graded emerging: large single-centre retrospective series and technique papers, no comparison between the two approaches. The <a href="/forehead-lines">forehead guide</a> and the <a href="/hooded-eyes">brow guide</a> cover what the same incision does to the brows.</p>
    `,
  },
  {
    id: 'use-eyebrows',
    category: 'use',
    title: 'Eyebrows — 200–400 single hairs that keep growing like scalp hair',
    tldr: 'A systematic review found 67 papers and 354 patients, most of them women around 29 and most after burns; follicular-unit grafting is the standard method and complications are few. Cosmetic series report satisfaction of 4.7–4.9 out of 5 with 120–480 units a brow, the best matches coming from fine hair around the ear or from long-hair harvesting that shows the curl before placement. The hairs behave like scalp hair: they need trimming every week or two for life. In frontal fibrosing alopecia they grow well for two years and are mostly lost by four.',
    evidence: 'emerging',
    focus: 'face',
    note: 'Best for: over-plucked, scarred or congenitally sparse brows; not for brows lost to active frontal fibrosing alopecia',
    sessions: '1 session of 150–400 single-hair units per brow; touch-up in one in ten',
    downtime: 'Crusts for a week; visible redness for 2–3 weeks',
    cost: '€2,000–4,500',
    bodyHtml: `
      <p>The review: "A total of 67 articles including 354 patients from 18 countries were included … Most patients were women with an average age of 29 years. The most common etiology requiring hair transplantation was burns, occurring in 57.6 percent of cases. Both eyebrow and eyelash transplantation use follicular unit transplantation techniques most commonly … with minimal complication rates" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6011870/" rel="noopener nofollow" target="_blank">Klingbeil 2018</a>); reconstruction options by defect size are reviewed separately (<a href="https://pubmed.ncbi.nlm.nih.gov/28700281/" rel="noopener nofollow" target="_blank">Figueira 2017</a>). The cosmetic series: 81 Chinese patients given periauricular hair, 402 units on average in women, "a mean overall satisfaction score of 4.90" at fifteen months and lower satisfaction in those with brow tattoos (<a href="https://pubmed.ncbi.nlm.nih.gov/39321534/" rel="noopener nofollow" target="_blank">Cheng 2024</a>); 36 patients with long-hair harvesting, twelve of them after unsatisfactory surgery elsewhere, satisfaction 4.7, four touch-ups (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8647866/" rel="noopener nofollow" target="_blank">Park 2021</a>). The warning: in ten patients with frontal fibrosing alopecia, "eighty percent of patients achieved excellent hair growth at 6- to 12-month follow-up … However, majority started losing the transplanted hairs after 3 to 4 years. Only 1 patient did not lose transplanted hair in the long-term" (<a href="https://pubmed.ncbi.nlm.nih.gov/31652229/" rel="noopener nofollow" target="_blank">Audickaite 2020</a>). Demand: "After scalp, the next highest percentage of transplantation to recipient area for females was eyebrows, at 12%" (<a href="https://ishrs.org/2025-practice-census-results/" rel="noopener nofollow" target="_blank">ISHRS 2025 census</a>).</p>
      <p>Graded emerging: case series with subjective endpoints, a good safety record, and one clear failure mode. The angle of each hair is the whole operation — brow hairs lie almost flat, change direction three times along the arch, and a graft placed upright is visible for ever.</p>
    `,
  },
  {
    id: 'use-beard',
    category: 'use',
    title: 'Beard and moustache — expert series, no counts',
    tldr: 'Scalp hair placed at acute angles into the cheeks, jaw and lip, 1,500–3,000 grafts for a full beard. The literature is surgeons\' reviews: one author reports more than 700 primary beard transplants and sets out the technical keys — one- and two-hair grafts trimmed close, the smallest possible blades, acute angles. Beard and moustache work was 5% of men\'s procedures in the 2025 census. A systematic search for facial hair transplantation in transmasculine patients found two papers. Bumps and visible pitting are the specific risks.',
    evidence: 'emerging',
    focus: 'face',
    note: 'Best for: patchy or absent beard, scars, cleft lip; transmasculine patients at least a year into testosterone',
    sessions: '1 session of 1,000–3,000 grafts',
    downtime: 'Crusts for 7–10 days; redness for weeks; shaving from day 10',
    cost: '€3,000–7,000',
    bodyHtml: `
      <p>The experience: "In the author's experience performing more than 700 primary beard hair transplants and tens of reparative procedures, key aesthetic steps include proper graft dissection so that one- and two-hair grafts contain a minimal cuff of surrounding skin, acute angulation and appropriate direction of recipient sites using the smallest possible recipient-site blades, and aesthetic design" (<a href="https://pubmed.ncbi.nlm.nih.gov/38936998/" rel="noopener nofollow" target="_blank">Epstein 2024</a>); "a significant increase in demand" and "natural-appearing results" with modern technique (<a href="https://pubmed.ncbi.nlm.nih.gov/32312510/" rel="noopener nofollow" target="_blank">Bared 2020</a>). The demand: "After scalp, the next highest percentage of transplantation to recipient area for males was moustache/beards, at 5%" (<a href="https://ishrs.org/2025-practice-census-results/" rel="noopener nofollow" target="_blank">ISHRS 2025 census</a>); "Beard and eyebrow transplants have increased in popularity. Google searches follow this trend" (<a href="https://pubmed.ncbi.nlm.nih.gov/32945026/" rel="noopener nofollow" target="_blank">Gupta 2020</a>). Transmasculine patients: "We identified 2 articles discussing facial hair transplantation in transmasculine patients … facial hair transplantation should be deferred until at least 1 year after the initiation of testosterone therapy … Patients should be advised that a secondary grafting procedure may be needed a year after initial transplant" (<a href="https://pubmed.ncbi.nlm.nih.gov/33565575/" rel="noopener nofollow" target="_blank">Patel 2021</a>).</p>
      <p>Graded emerging: technique reviews from high-volume surgeons, no survival counts or controlled comparisons. Facial skin shows every misplaced graft; this is a sub-specialty within a sub-specialty, and the portfolio to ask for is beards, not scalps.</p>
    `,
  },
  {
    id: 'use-primary-scarring',
    category: 'use',
    title: 'Lichen planopilaris and frontal fibrosing alopecia — only when burnt out, and the grafts fade',
    tldr: 'In the inflammatory scarring alopecias the disease attacks follicles, transplanted ones included. A systematic review of eight studies and 123 patients found weighted graft survival of 82.7% at about a year, 73.3% in year two, 58.4% in year three and 39.6% at four to six years, with four reactivations. Another review counted positive results in five of eight patients with lichen planopilaris and two of seven with frontal fibrosing alopecia after 2.7 years of remission — and 27 people who had no known disease and developed one of the two a median 16 months after a cosmetic transplant.',
    evidence: 'emerging',
    focus: 'scars',
    note: 'Best for: biopsy-proven inactive disease for two years or more, a test session first, and an understanding that the result may not last',
    sessions: 'Test patch, then 1–2 small sessions',
    downtime: 'As standard; disease flare possible',
    cost: '€2,000–6,000 per session',
    bodyHtml: `
      <p>The survival curve: "Eight observational studies with a total of 123 patients met the inclusion criteria. Overall, the weighted FU graft survival rate after HT was 82.7% at 7 to 12 months, 73.3% at 13 to 24 months, 58.4% at 25 to 36 months, 55.4% at 37 to 48 months and 39.6% at 49 to 72 months. Four patients developed reactivation of their disease after HT" (<a href="https://pubmed.ncbi.nlm.nih.gov/40439233/" rel="noopener nofollow" target="_blank">Yii 2025</a>). The outcomes: "two of seven (29%) patients with FFA and five of eight (75%) patients with LPP experienced positive HT results over a follow-up period of 8-72 months. Interestingly, 27 patients without evidence of previous disease developed FFA or LPP following HT after a median duration of 16 months" (<a href="https://pubmed.ncbi.nlm.nih.gov/32045028/" rel="noopener nofollow" target="_blank">Lee 2021</a>). The earlier review: 26 of 34 patients with moderate-to-positive results across several scarring diagnoses, "data must be interpreted with caution due to concern for positive-result publication bias" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6388556/" rel="noopener nofollow" target="_blank">Ekelem 2019</a>). The best prospective data: 32 patients with inactive lichen planopilaris, "survival of grafts was 78.62% at 12 months, and 79.96% at 24 months" (<a href="https://pubmed.ncbi.nlm.nih.gov/34115675/" rel="noopener nofollow" target="_blank">Daruwalla 2021</a>).</p>
      <p>Graded emerging: real benefit at one to two years in selected, inactive disease, fading thereafter, from observational studies with publication bias. The <a href="/hair-loss">hair-loss guide</a> calls these "the ones you can't wait on" — the treatment that matters is medical, early, and from a dermatologist; surgery is a late and conditional extra.</p>
    `,
  },
  {
    id: 'use-afro-traction',
    category: 'use',
    title: 'Afro-textured hair and traction alopecia — curved follicles, special punches',
    tldr: 'Tightly curled hair curves under the skin, so a straight rotating punch cuts across it: in 18 patients, conventional punches failed or transected excessively in eight, while a curved non-rotary punch kept transection under 5%; a newer skin-responsive device kept it at 3–6% in 64 patients of African descent at seven clinics, with skin thickness mattering more than curl. Traction alopecia at the temples and edges, once the styling has stopped and the loss is stable, is a recognised indication. Keloid risk is a reason for a test patch, and for the strip method to be discussed carefully.',
    evidence: 'emerging',
    focus: 'pattern',
    note: 'Best for: stable traction loss at the hairline; a surgeon who can show results in the same hair type',
    sessions: '1 session of 800–2,000 grafts',
    downtime: 'As standard',
    cost: '€4,000–9,000',
    bodyHtml: `
      <p>The technique problem: "Hair transplantation involving patients with tightly curled Afro-textured hair using follicular unit extraction (FUE) employing conventional rotary punches frequently leads to unacceptably high transection rates … In all instances, the curved nonrotary punch had the best transection rate of &lt;5%. Sharp and dull rotary punches completely failed or had excessive transection rates in 8 patients" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5055031/" rel="noopener nofollow" target="_blank">Umar 2016</a>); "Of 64 eligible patients (45 males and 19 females), 28 had Class V FU excision donor grades. The mean transection rate for all patients was 3%-6% … Skin thickness and firmness had a greater effect on the maximum transection rate than hair curliness" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10521773/" rel="noopener nofollow" target="_blank">Umar 2023</a>); a classification of FUE difficulty exists because "patients with these features are often denied FUE" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9249093/" rel="noopener nofollow" target="_blank">Umar 2022</a>). The wider picture: "individuals with curly hair pose specific challenges and special considerations … hair grooming techniques that may influence the management, unique indications for the procedure" (<a href="https://pubmed.ncbi.nlm.nih.gov/24680003/" rel="noopener nofollow" target="_blank">Rogers 2014</a>). Keloids: reported after FUE as well as strip harvesting (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7646428/" rel="noopener nofollow" target="_blank">Alhamzawi 2020</a>).</p>
      <p>Graded emerging: device-led case series from a small number of surgeons, some of whom designed the instruments. Curl is also an advantage — each curly hair covers more scalp — so fewer grafts are needed for the same visual density.</p>
    `,
  },
  {
    id: 'use-body-hair-donor',
    category: 'use',
    title: 'Beard and body hair as donor — for the depleted scalp',
    tldr: 'When the scalp donor is exhausted — advanced baldness, or previous surgery — beard, chest and limb hair can be harvested by FUE. In the one sizeable series, 122 hirsute patients had body hair moved to the scalp; the 79 who answered a survey 2.9 years later scored healing, growth and satisfaction at 7.8 out of 10 or more, similar to scalp-donor patients. Beard is the best source, then chest. Body hair is shorter, curlier and cycles differently, so it is mixed with scalp hair behind the hairline or used to hide old scars.',
    evidence: 'emerging',
    focus: 'donor',
    note: 'Best for: repair cases and advanced baldness in hairy men; never the hairline itself',
    sessions: '1–3 long sessions',
    downtime: 'Donor sites on beard and chest heal with small white dots',
    cost: '€4–8 per graft',
    bodyHtml: `
      <p>The series: "122 patients preselected for adequate body hair had donor hair transplanted from the beard, trunk, and the extremities to the scalp by follicular unit extraction (FUE) by the author at a single center … Seventy-nine patients (64.8%) responded with a mean time of 2.9 years … mean scores of at least a 7.8 on a Likert-like scale of 0 to 10 for their healing status, hair growth in recipient areas, and overall satisfaction" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5070467/" rel="noopener nofollow" target="_blank">Umar 2016b</a>). The guidance: "For patients with available body hair, the beard is probably the best source followed by the chest and abdomen" (<a href="https://pubmed.ncbi.nlm.nih.gov/37799100/" rel="noopener nofollow" target="_blank">Gabel 2023</a>); "Body hair characteristics such as thickness, length, and hair cycle may not completely match to that of the scalp hair. The techniques of harvesting body hairs are more time consuming, requiring higher degree of skill" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5447335/" rel="noopener nofollow" target="_blank">Saxena 2017</a>); "These patients may have had prior scalp transplantation and require repair but do not have sufficient scalp donor follicles remaining" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8719961/" rel="noopener nofollow" target="_blank">True 2021b</a>).</p>
      <p>Graded emerging: one surgeon's survey with a two-thirds response rate, and technique reviews. It is the specialty's answer to the over-harvested scalp, which is a reason to avoid needing it.</p>
    `,
  },
  {
    id: 'use-gender-affirming',
    category: 'use',
    title: 'Gender-affirming hairline, brow and facial-hair surgery',
    tldr: 'For transfeminine patients: lowering and rounding an M-shaped hairline with grafts or advancement, and brow work; for transmasculine patients: beard, sideburn and body hair. Specialist clinics report rising demand. The evidence is technique reviews and a systematic search that found two papers on transmasculine facial hair. Timing rules matter: at least a year on testosterone before a beard transplant so that natural growth has declared itself, and coordination with facial surgery, which moves the hairline and jaw that the grafts are placed on.',
    evidence: 'emerging',
    focus: 'face',
    note: 'Best for: patients settled on hormones, planned together with any facial surgery',
    sessions: '1–2 sessions',
    downtime: 'As standard',
    cost: '€3,000–9,000',
    bodyHtml: `
      <p>The reviews: "The most common hair restoration procedures performed in our clinic for the transgender patient are hairline lowering procedures, facial hair restoration procedures including eyebrow and beard transplantation, and body hair transplantation" (<a href="https://pubmed.ncbi.nlm.nih.gov/37348980/" rel="noopener nofollow" target="_blank">Bared 2023</a>); "Due to the paucity of publications describing facial hair transplantation in transmasculine patients, data regarding facial hair transplant from the cisgender population were utilized … providers should engage patients in discussions about any plans to undergo facial masculinization surgery because this can alter the position of transplanted hairs" (<a href="https://pubmed.ncbi.nlm.nih.gov/33565575/" rel="noopener nofollow" target="_blank">Patel 2021</a>). Hairline advancement candidates "must have a stable frontal hairline" (<a href="https://pubmed.ncbi.nlm.nih.gov/32312507/" rel="noopener nofollow" target="_blank">Epstein 2020</a>) — for transfeminine patients that usually means established anti-androgen treatment first.</p>
      <p>Graded emerging: expert opinion extrapolated from cisgender series. The medical treatment of pattern loss under hormone therapy is covered in the <a href="/hair-loss">hair-loss guide</a>.</p>
    `,
  },
  {
    id: 'use-repair',
    category: 'use',
    title: 'Repairing a bad transplant — one case in ten now comes from the black market',
    tldr: 'Pluggy old grafts, hairlines drawn too low or too straight, grafts pointing the wrong way, a moth-eaten donor: repair means removing and redistributing bad grafts, camouflaging with finer ones, using beard or body hair when the scalp donor is spent, and tattooing scars. The 2025 census found that an average 10% of repair cases came from black-market operations, up from 6% in 2021. There are no outcome studies of repair; the literature is how-to chapters. It costs more than doing it properly once, and it cannot restore a harvested donor.',
    evidence: 'emerging',
    focus: 'donor',
    note: 'Best for: anyone with a poor result — see a surgeon who does repairs before letting the original clinic try again',
    sessions: '1–3 sessions over 1–2 years',
    downtime: 'As standard',
    cost: '€4,000–15,000',
    bodyHtml: `
      <p>The scale: "the average percentage of repair cases due to a previous Black Market hair transplant was 10%, up from 6% in 2021" (<a href="https://ishrs.org/2025-practice-census-results/" rel="noopener nofollow" target="_blank">ISHRS 2025 census</a>). The tools: body and beard hair "to camouflage scarring from prior hair restoration procedures" (<a href="https://pubmed.ncbi.nlm.nih.gov/37799100/" rel="noopener nofollow" target="_blank">Gabel 2023</a>); scalp micropigmentation for "deformities caused by hair restoration surgeries" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4382144/" rel="noopener nofollow" target="_blank">Rassman 2015</a>); an eyebrow series in which "twelve of the 36 patients had previously undergone unsatisfactory surgery at another clinic" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8647866/" rel="noopener nofollow" target="_blank">Park 2021</a>). The causes: "Most complications associated with hair transplant surgery are usually preventable and most often arise as a consequence of poor planning or faulty surgical technique" (<a href="https://pubmed.ncbi.nlm.nih.gov/32312509/" rel="noopener nofollow" target="_blank">Nadimi 2020</a>); donor depletion and "unnatural results" are listed among the recognised complications of FUE (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12909172/" rel="noopener nofollow" target="_blank">Romera de Blas 2026</a>).</p>
      <p>Graded emerging: expert practice without outcome data. The row is here because it is the honest sequel to the cost section: a €2,000 operation that needs an €8,000 repair was not the cheap option.</p>
    `,
  },
  {
    id: 'use-too-young',
    category: 'use',
    title: 'A transplant at 22 for a receding hairline — the operation to postpone',
    tldr: '"Very young patients", "unstable hair loss" and "insufficient hair loss" are three of the eight reasons a specialist review gives for refusing surgery. At 22 nobody can say whether the pattern will stop at the temples or take the whole top, the permanent donor zone cannot be mapped with confidence, and a low, dense teenage hairline placed now will sit alone in front of a bald scalp at 40 with no donor left to fill behind it. Finasteride or dutasteride and minoxidil hold most young men\'s hair for years; the operation will still be available at 28, with better information.',
    evidence: 'limited',
    focus: 'marketing',
    note: 'Best for: nobody under 25 without a year of medical treatment and a conservative plan',
    sessions: 'Postpone',
    downtime: '—',
    cost: 'The price of the repair',
    bodyHtml: `
      <p>The reasoning: "patients with unstable hair loss, patients with insufficient hair loss, very young patients" are not appropriate candidates, and "there are patients who are poor candidates and who should undergo hair transplantation only if they understand and accept limited results" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8719975/" rel="noopener nofollow" target="_blank">True 2021</a>); in early pattern loss "the margins are assumed to be free from future hair loss", which is an assumption (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11679175/" rel="noopener nofollow" target="_blank">Punia 2024</a>); "a good treatment plan must consider the potential for future hair loss" (<a href="https://pubmed.ncbi.nlm.nih.gov/32312509/" rel="noopener nofollow" target="_blank">Nadimi 2020</a>); the randomised trial shows what medication adds even around grafts — visible increases in 94% against 67% (<a href="https://pubmed.ncbi.nlm.nih.gov/16188178/" rel="noopener nofollow" target="_blank">Leavitt 2005</a>). The market pushes the other way: "first-time hair restoration surgery patients in 2024 skewed younger than the general adult population, with 95% initiating hair restoration surgery between the ages of 20-35" (<a href="https://ishrs.org/2025-practice-census-results/" rel="noopener nofollow" target="_blank">ISHRS 2025 census</a>).</p>
      <p>Graded limited — not because grafts fail in young men, but because the evidence and the expert consensus say the plan usually does. The <a href="/hair-loss">hair-loss guide</a> has the medicines, their side effects and the 93% lower odds of further visible loss at five years on finasteride.</p>
    `,
  },
  {
    id: 'use-dupa-diffuse',
    category: 'use',
    title: 'Diffuse thinning that includes the back of the head — no safe donor',
    tldr: 'Diffuse unpatterned alopecia thins the whole scalp, the occipital donor included, so grafts taken from it are already miniaturising and will thin where they are put. A 2026 review calls it "uncommon and incompletely characterized", diagnosed by trichoscopy showing miniaturisation everywhere, easily confused with chronic shedding or diffuse alopecia areata, and managed medically. The same problem, to a lesser degree, is why many women with diffuse loss are not candidates. A surgeon who does not examine the donor with magnification cannot know.',
    evidence: 'limited',
    focus: 'donor',
    note: 'Best for: nobody — medical treatment and, where density allows, scalp micropigmentation',
    sessions: 'Not recommended',
    downtime: '—',
    cost: '—',
    bodyHtml: `
      <p>The condition: "an uncommon and incompletely characterized variant of androgenetic alopecia (AGA) marked by diffuse follicular miniaturization across the entire scalp, including the occipital region, which distinguishes it from classic patterned AGA and often precludes hair transplantation … Important mimickers include telogen effluvium and diffuse alopecia areata … Management is primarily medical, emphasizing stabilization rather than regrowth" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13461204/" rel="noopener nofollow" target="_blank">Spindler 2026</a>). It heads the list of non-candidates (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8719975/" rel="noopener nofollow" target="_blank">True 2021</a>). The alternative for dense-enough diffuse thinning is pigment rather than grafts (<a href="https://pubmed.ncbi.nlm.nih.gov/38894530/" rel="noopener nofollow" target="_blank">Park 2024</a>).</p>
      <p>Graded limited: the mechanism argues against it and no series argues for it. The <a href="/hair-loss">hair-loss guide</a> covers oral minoxidil and the anti-androgens, which are the actual treatment.</p>
    `,
  },
];

const products: Section[] = [
  {
    id: 'tech-fue',
    category: 'product',
    title: 'FUE — follicular unit excision, one graft at a time',
    tldr: 'A punch of 0.8–1.0 mm cores out each unit; no line scar, a shaved donor area, short hair possible afterwards. It is now the commonest method. It is also a blind technique: the punch cannot see the follicle it is cutting, so some are transected — 7.5–8.8% in an expert series, 13–14% in a trial, up to 18% at the sides of the head, plus a "hidden" 2% for an expert and 8% for a beginner in the neighbouring follicles. Transection climbs as the surgeon tires. The dots do scar, and taking too many leaves a donor that looks moth-eaten.',
    evidence: 'strong',
    focus: 'technique',
    note: 'Best for: men who wear their hair short, smaller sessions, eyebrows, beards, body-hair harvesting and repairs',
    sessions: '1 day for up to about 3,000 grafts; larger sessions over 2 days',
    downtime: 'Donor dots crust for a week; hidden by hair in 2–3 weeks',
    cost: '€3–6 per graft in Western Europe',
    bodyHtml: `
      <p>Equivalence: "Both FUE and FUT are equally effective in generating high-quality grafts" (<a href="https://pubmed.ncbi.nlm.nih.gov/32141930/" rel="noopener nofollow" target="_blank">Gupta 2020b</a>); the choice is by patient (<a href="https://pubmed.ncbi.nlm.nih.gov/38016653/" rel="noopener nofollow" target="_blank">Konior 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/36040012/" rel="noopener nofollow" target="_blank">Memon 2022</a>). Transection: "The mean transection rate was similar in both methods (8.8% for the pretrimmed method and 7.5% for the direct method" in 42 patients (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5404446/" rel="noopener nofollow" target="_blank">Park 2017</a>); 13.96% by hand against 13.17% by robot (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626372/" rel="noopener nofollow" target="_blank">Zhu 2024</a>); "The transection was more on right side (17.7%) of the patient as compared to the left side (16.3%)" and lowest in the mid-occiput (<a href="https://pubmed.ncbi.nlm.nih.gov/31743575/" rel="noopener nofollow" target="_blank">Mohmand 2020</a>); "Although 2 surgeons harvested with similar transection rate, there was a significant difference in hidden transection rate: 2% for the expert and 8% for the beginner" (<a href="https://pubmed.ncbi.nlm.nih.gov/27035500/" rel="noopener nofollow" target="_blank">Kim 2016</a>); "The surgeon's workload increases the hair transection during FUE" (<a href="https://pubmed.ncbi.nlm.nih.gov/31317641/" rel="noopener nofollow" target="_blank">Ahmad 2020</a>). Selection bias in the surgeon's favour: FUE yielded more three-hair units and more hairs per unit than strip surgery in the same patients, because "surgeons tend to choose better-looking FUs" (<a href="https://pubmed.ncbi.nlm.nih.gov/38748590/" rel="noopener nofollow" target="_blank">Takata Pontes 2024</a>). The marketing: "There is no such thing as 'scarless surgery' in hair transplantation" (<a href="https://ishrs.org/patients/consumer-alert/" rel="noopener nofollow" target="_blank">ISHRS consumer alert</a>); FUE "is a blind technique and can be minimized only with excellent technique, which takes years to master" (<a href="https://pubmed.ncbi.nlm.nih.gov/38092043/" rel="noopener nofollow" target="_blank">Anastassakis 2024</a>); the best case, from a review of the devices: "When performed properly using the most technically advanced devices, the transection of the grafts with FUE remains under 4%" (<a href="https://pubmed.ncbi.nlm.nih.gov/32312503/" rel="noopener nofollow" target="_blank">Epstein 2020b</a>); the motorised systems have a review of their own (<a href="https://pubmed.ncbi.nlm.nih.gov/40212421/" rel="noopener nofollow" target="_blank">Chauhan 2025</a>).</p>
      <p>Graded strong as a harvesting method: the grafts grow. Everything on this row is an argument about who is holding the punch and for how many hours — the fatigue study is the scientific case against the clinic that does five heads a day.</p>
    `,
  },
  {
    id: 'tech-fut-strip',
    category: 'product',
    title: 'FUT — the strip method',
    tldr: 'An ellipse of scalp is cut from the densest part of the permanent zone, the wound closed, and the strip dissected into units under microscopes by a team. It gives the most grafts from the best zone with the least transection, leaves the rest of the donor untouched for later FUE, and needs no shaving — which is why many women prefer it. The cost is a line scar across the back of the head that a number-two cut will show, which widens or thickens in up to 15% of patients, and a tighter scalp for some months. Equally good grafts; a different scar.',
    evidence: 'strong',
    focus: 'technique',
    note: 'Best for: large first sessions, women, anyone who will keep their hair at least 2 cm long at the back',
    sessions: '1 day; 1,500–3,500 grafts',
    downtime: 'Stitches or staples for 10–14 days; tightness for weeks',
    cost: '€2.50–5 per graft',
    bodyHtml: `
      <p>The method: "The merit of strip harvest lies in the maximum amount of follicular" units obtained from the safest zone (<a href="https://pubmed.ncbi.nlm.nih.gov/34984084/" rel="noopener nofollow" target="_blank">Khanna 2021</a>); "With the improved techniques of follicular unit transplantation, more natural and discreet results can be obtained with minimal downtime and preservation of patient privacy" (<a href="https://pubmed.ncbi.nlm.nih.gov/32312502/" rel="noopener nofollow" target="_blank">Sand 2020</a>). The scar: "The most common donor-site complication was hypertrophic scarring/keloid formation after FUT (up to 15.1%)" (<a href="https://pubmed.ncbi.nlm.nih.gov/39179656/" rel="noopener nofollow" target="_blank">Liu 2025</a>). The comparison: "Follicular unit transplantation results in a linear scar, whereas FUE produces punctate scars that are typically easily concealed. Distinct subgroups of hair transplant patients are eligible for FUE, FUT, or both procedures" (<a href="https://pubmed.ncbi.nlm.nih.gov/32141930/" rel="noopener nofollow" target="_blank">Gupta 2020b</a>). Who chooses it: "Women favor follicular unit transplantation (FUT) due to donor area preservation and compatibility with long hairstyles" (<a href="https://pubmed.ncbi.nlm.nih.gov/40911748/" rel="noopener nofollow" target="_blank">Queen 2025b</a>). The trend: FUE "has supplanted follicular unit transplant (FUT) as the most popular hair transplant performed" (<a href="https://pubmed.ncbi.nlm.nih.gov/32945026/" rel="noopener nofollow" target="_blank">Gupta 2020</a>).</p>
      <p>Graded strong: the method behind most of the long-term survival literature. Its decline is driven by patient preference and by a business model — FUE can be delegated to technicians in a way that strip dissection under microscopes cannot — more than by outcomes.</p>
    `,
  },
  {
    id: 'tech-robotic',
    category: 'product',
    title: 'Robotic FUE (ARTAS) — as good as a hand, not better',
    tldr: 'A camera-guided arm selects and cores the units; people still design the hairline, make the sites and place the grafts. In the one randomised split-donor comparison, in 13 men, the robot\'s yield was 82.1% against 90.0% by hand, its discard rate higher (10.7% against 5.5%), its transection the same (13.2% against 14.0%), and satisfaction no different. It does not tire, which is its real argument. In the specialty society\'s words, "there is currently no machine capable of automatically performing all the aspects of the hair restoration surgery".',
    evidence: 'moderate',
    focus: 'technique',
    note: 'Best for: straight dark hair on light skin, where the vision system works best; judge the surgeon, not the machine',
    sessions: 'As FUE',
    downtime: 'As FUE',
    cost: 'Often a premium of €1–2 per graft',
    bodyHtml: `
      <p>The trial: "Thirteen Chinese male patients with Norwood-Hamilton II-IV AGA … The donor site of each patient was randomly divided into left and right regions, receiving ARTAS on one side and FUE on the other … The total yield rate on the ARTAS side was lower than on the FUE side (82.05% vs. 90.03%, p &gt; 0.05); the total discard rate on the ARTAS side was higher than on the FUE side (10.71% vs. 5.46%, p &lt; 0.05); the total transection rate on the ARTAS side was lower than on the FUE side (13.17% vs. 13.96%, p &gt; 0.05). No significant difference was found in patient satisfaction" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626372/" rel="noopener nofollow" target="_blank">Zhu 2024</a>). The descriptions: the system "analyzes images of the donor area and then a dual-chamber needle and blunt dissecting punch are used to harvest the follicular units" (<a href="https://pubmed.ncbi.nlm.nih.gov/24267426/" rel="noopener nofollow" target="_blank">Rose 2014</a>); an early audit of harvest attempts that produced no graft (<a href="https://pubmed.ncbi.nlm.nih.gov/24746303/" rel="noopener nofollow" target="_blank">Rashid 2014</a>); "Robotic hair transplantation allows precise and efficient removal of follicular units" (<a href="https://pubmed.ncbi.nlm.nih.gov/32312506/" rel="noopener nofollow" target="_blank">Avram 2020</a>). The society's position: "there is currently no machine capable of automatically performing all the aspects of the hair restoration surgery. Available technology can only assist trained surgeons" (<a href="https://ishrs.org/patients/consumer-alert/" rel="noopener nofollow" target="_blank">ISHRS consumer alert</a>).</p>
      <p>Graded moderate: one small randomised comparison showing parity with a modest yield penalty, and descriptive papers. A robot is a harvesting tool in a doctor-led clinic; it is not a reason to choose one clinic over another.</p>
    `,
  },
  {
    id: 'tech-implanters-dhi',
    category: 'product',
    title: 'Implanter pens and "DHI" — a placement tool sold as a technique',
    tldr: 'An implanter is a hollow needle that carries the graft into the skin without forceps squeezing the bulb; "direct hair implantation" is a brand name for harvesting and implanting at once with such pens. The counted survival study that gives the field its 92% figure used an implanter. Series of 104 and 29 patients report good results and less time out of the body. No trial has compared implanters with forceps on survival, so the claim that DHI grafts grow better is unproven; the claim that they are handled less is true.',
    evidence: 'moderate',
    focus: 'technique',
    note: 'Best for: a team trained on them; straight, thick Asian hair was what they were designed for',
    sessions: 'As FUE',
    downtime: 'As FUE',
    cost: 'Often a premium of 10–30%',
    bodyHtml: `
      <p>The history: "In 1992, Dr. Choi introduced an instrument known as the 'implanter,' which had the advantage of simultaneously creating incisions and placing FUs without damaging sensitive parts. Its initial popularity was greater in the East, primarily due to the characteristics of Asian hair" (<a href="https://pubmed.ncbi.nlm.nih.gov/37879353/" rel="noopener nofollow" target="_blank">Speranzini 2024</a>). The data: 92.0% and 90.4% hair survival at six and twelve months with the KNU implanter (<a href="https://pubmed.ncbi.nlm.nih.gov/11493294/" rel="noopener nofollow" target="_blank">Lee 2001</a>); implanters into premade slits in 104 patients, "'good' results were obtained in all except two patients", with the authors' own limitation that "no objective assessment was carried out" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6967169/" rel="noopener nofollow" target="_blank">Bansal 2019</a>); "direct hair transplantation" in 29 patients, 27 good results (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3764754/" rel="noopener nofollow" target="_blank">Sethi 2013</a>); a technique guide for dense packing with sharp implanters (<a href="https://pubmed.ncbi.nlm.nih.gov/37456803/" rel="noopener nofollow" target="_blank">Park 2023</a>). Site shape is a related detail: holes were quicker to make than slits in a half-head comparison, 95.5 against 121 seconds (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10336073/" rel="noopener nofollow" target="_blank">Kasai 2023</a>).</p>
      <p>Graded moderate: good survival in the studies that used them, no head-to-head against forceps. Pay for the team's experience with the tool, not for the acronym.</p>
    `,
  },
  {
    id: 'tech-megasession',
    category: 'product',
    title: 'Megasessions and dense packing — more in one day, at a price in risk',
    tldr: 'Three to six thousand grafts in a single six-to-twelve-hour operation, or more than 35 units per cm²: attractive because it gets the job done once. The best series reports 93.5–96.6% survival and 81% satisfaction. The risks scale with the ambition: folliculitis was 4.8 times likelier with 4,000 or more grafts and 2.2 times likelier above 45 per cm²; survival was lower at 40–50 than at 20–30 per cm² in a counted study; the necrosis series average about 3,900 grafts; dense packing at the temples produces a strange linear shedding of nearby hair; and long sessions mean grafts out of the body for hours and a tired surgeon.',
    evidence: 'moderate',
    focus: 'technique',
    note: 'Best for: advanced loss with an excellent donor, in a clinic that does one patient a day; two smaller sessions are the safer default',
    sessions: '1 long day or 2 consecutive days',
    downtime: 'More swelling; longer crusting',
    cost: 'Per graft, as FUE or FUT',
    bodyHtml: `
      <p>For: "The number of follicular units transplanted was between 3000 and 6000, with surgery duration range from 6 hours to 12 hours and graft survival rate varies from 93.5% to 96.6% … None of them had infection after the surgery" (<a href="https://pubmed.ncbi.nlm.nih.gov/31529675/" rel="noopener nofollow" target="_blank">Li 2020</a>); patients "who have sufficient donor availability, reasonably stable hair loss, and high hair-to-skin color ratios are the ideal candidates" for dense packing (<a href="https://pubmed.ncbi.nlm.nih.gov/24017984/" rel="noopener nofollow" target="_blank">Farjo 2013</a>); in a 1,000-patient observational comparison, two-day full-head operations reached 43.2 grafts per cm² with the highest satisfaction (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13415726/" rel="noopener nofollow" target="_blank">Saket 2026</a>). Against: "number of transplant grafts 4000 or greater (OR, 4.818 …), transplant density greater than 45 grafts/cm 2 (OR, 2.152 …)" as risk factors for folliculitis (<a href="https://pubmed.ncbi.nlm.nih.gov/37904273/" rel="noopener nofollow" target="_blank">Zhou 2024</a>); "The survival rate of 20 and 30 grafts per template was higher than that of 40 and 50 grafts" (<a href="https://pubmed.ncbi.nlm.nih.gov/16792647/" rel="noopener nofollow" target="_blank">Lee 2006</a>); in 18 necrosis cases "an average of 3899.44 ± 93.76 follicular units were transplanted" (<a href="https://pubmed.ncbi.nlm.nih.gov/39160404/" rel="noopener nofollow" target="_blank">Ceran 2024</a>); immediate linear shedding in "association with dense-pack grafting in areas of receding hairline at the temples", reversed by three months (<a href="https://pubmed.ncbi.nlm.nih.gov/37085132/" rel="noopener nofollow" target="_blank">Mir-Bonafé 2023</a>); transection rising through a long session (<a href="https://pubmed.ncbi.nlm.nih.gov/31317641/" rel="noopener nofollow" target="_blank">Ahmad 2020</a>); "Long-term in vitro preservation of hair follicles during FUE Megasession has become a new challenge" (<a href="https://pubmed.ncbi.nlm.nih.gov/32346966/" rel="noopener nofollow" target="_blank">Gan 2021</a>).</p>
      <p>Graded moderate: it works in expert hands, and the dose-response for complications is documented. "Up to 5,000 grafts" as a headline is a marketing number; the right number is the one your donor can afford.</p>
    `,
  },
  {
    id: 'tech-long-hair-unshaven',
    category: 'product',
    title: 'Unshaven and long-hair FUE — no shaved head, slower surgery',
    tldr: 'Grafts are harvested without shaving the donor area, or with the hair left long so that the result can be previewed and the curl matched — useful for women, for people who cannot disappear for three weeks, and for eyebrows. In 42 patients transection was 7.5–8.8%, similar to shaved FUE; one practice reports 658 cases with 8.2%. It takes longer, costs more and limits the session size. A 2026 paper exists solely to sort out the terminology, because "unshaven" means different things in different advertisements.',
    evidence: 'emerging',
    focus: 'technique',
    note: 'Best for: women, small sessions, eyebrows and anyone who needs discretion; ask exactly what will and will not be shaved',
    sessions: '1 day; usually under 2,000 grafts',
    downtime: 'Donor hidden from day one',
    cost: 'A premium of 20–50%',
    bodyHtml: `
      <p>The data: "The mean transection rate was similar in both methods (8.8% for the pretrimmed method and 7.5% for the direct method; P &gt; 0.05)" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5404446/" rel="noopener nofollow" target="_blank">Park 2017</a>); "A total of 658 patients underwent NS-FUE … On average, the total transection rate was 8.2%" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6392215/" rel="noopener nofollow" target="_blank">Park 2019</a>). The reviews: "the latest innovation in transplantation techniques" with its "advantages, disadvantages, and main indications" (<a href="https://pubmed.ncbi.nlm.nih.gov/42342229/" rel="noopener nofollow" target="_blank">Rodríguez Tamez 2026</a>); "terminology has become inconsistent across publications and advertising. This creates confusion for patients and clinicians and undermines informed consent" (<a href="https://pubmed.ncbi.nlm.nih.gov/41805884/" rel="noopener nofollow" target="_blank">Jimenez 2026</a>). In eyebrows, long-hair harvesting "allows surgeons to fully visualize hair curliness" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8647866/" rel="noopener nofollow" target="_blank">Park 2021</a>).</p>
      <p>Graded emerging: single-practice series with good technical numbers and no survival comparison. A convenience with a price, not a better graft.</p>
    `,
  },
  {
    id: 'tech-sapphire',
    category: 'product',
    title: '"Sapphire FUE" — a blade for the recipient sites, and thin evidence either way',
    tldr: 'Sapphire blades make the slits the grafts go into; they have nothing to do with harvesting, whatever the advertisement implies. A 1,000-patient observational study reported graft survival of 94.7% with sapphire against 88.9% with steel, without randomisation. The only physiological study — twelve men, one side each, blood flow measured by laser Doppler — found that handmade steel razor blades caused significantly less tissue damage than sapphire. A mathematical model found the least wound surface with a 30° sapphire-shaped tip and less injury the flatter the blade goes in — shape and angle, not the mineral.',
    evidence: 'emerging',
    focus: 'marketing',
    note: 'Best for: nothing in particular — a reasonable tool, not a reason to choose a clinic',
    sessions: 'As FUE',
    downtime: 'As FUE',
    cost: 'Sold at a premium',
    bodyHtml: `
      <p>For: "The Sapphire group had a greater graft survival rate (94.7%) than the Steel group (88.9%)" in a prospective observational study of 1,000 patients grouped by blade, forceps technique and session plan (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13415726/" rel="noopener nofollow" target="_blank">Saket 2026</a>). Against: "Sapphire percutaneous blade was used on the right side, and a handmade razor slit was used on the left side in 12 male patients … Our results showed that handmade razor blades caused significantly less tissue damage" on laser Doppler flowmetry (<a href="https://pubmed.ncbi.nlm.nih.gov/37811982/" rel="noopener nofollow" target="_blank">Balik 2023</a>). The geometry: in a trigonometric model, "the 30°-sapphire blade caused the least injury followed by 30°-angled blade … The amount of tissue injury decreases as the angle of insertion decreases" (<a href="https://pubmed.ncbi.nlm.nih.gov/33599101/" rel="noopener nofollow" target="_blank">Ahmad 2021</a>).</p>
      <p>Graded emerging: one large non-randomised comparison in its favour, one small controlled study against. When the word "sapphire" is the headline of a clinic's website, the clinic is selling a material; the variables that decide the result are the ones on the rows above.</p>
    `,
  },
  {
    id: 'adj-finasteride-minoxidil',
    category: 'product',
    title: 'Finasteride, dutasteride and minoxidil around the operation — the adjunct with a randomised trial',
    tldr: 'The one double-blind trial in this field randomised 79 men to finasteride 1 mg or placebo from four weeks before to 48 weeks after a transplant: more hair on counts and photographs, and visible improvement in 94% against 67%. Minoxidil around surgery did not change graft survival in a 40-patient comparison but 60% of treated grafts skipped the usual post-operative shed. Medication is what protects the hair the surgeon did not transplant; without it the transplanted hairline can end up alone. Oral minoxidil\'s safety data come from 1,404 patients.',
    evidence: 'strong',
    focus: 'adjunct',
    note: 'Best for: every man with pattern loss having a transplant, started months before; women on minoxidil and an anti-androgen as appropriate',
    sessions: 'Daily, indefinitely',
    downtime: 'None',
    cost: '€10–40 a month',
    bodyHtml: `
      <p>The trial: "In this randomized, double-blind, placebo-controlled study, 79 men with androgenetic alopecia (20-45 years of age) were assigned to treatment with finasteride 1 mg (n = 40) or placebo (n = 39) once daily from 4 weeks before until 48 weeks after hair transplant … Treatment with finasteride resulted in significant improvements from baseline, compared with placebo, in scalp hair based on global photographic assessment (p &lt; .01) and hair counts (p &lt; .01) at week 48. Visible increases in superior/frontal scalp hair post-transplant were recorded for 94% and 67% of patients" (<a href="https://pubmed.ncbi.nlm.nih.gov/16188178/" rel="noopener nofollow" target="_blank">Leavitt 2005</a>). Minoxidil: "Minoxidil did not play any role in the percentage of hair survival before and after transplantation in androgenetic alopecia. However in 60percent grafts of patients who had used topical minoxidil, there was no initial postoperative hair shedding" (<a href="https://pubmed.ncbi.nlm.nih.gov/20921704/" rel="noopener nofollow" target="_blank">Singh 1998</a>); earlier pilots reported the same skipped shed — in two of twelve patients (<a href="https://pubmed.ncbi.nlm.nih.gov/3558912/" rel="noopener nofollow" target="_blank">Kassimir 1987</a>) and in 71% of 64 monitored grafts (<a href="https://pubmed.ncbi.nlm.nih.gov/2910964/" rel="noopener nofollow" target="_blank">Bouhanna 1989</a>). Low-dose oral minoxidil: "The most frequent adverse effect was hypertrichosis (15.1%) … only 1.7% of patients discontinued treatment owing to adverse effects" among 1,404 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/33639244/" rel="noopener nofollow" target="_blank">Vañó-Galván 2021</a>). The consensus: "advances in devices, techniques, and medical therapies to maintain hair density" are jointly responsible for modern results (<a href="https://pubmed.ncbi.nlm.nih.gov/40354670/" rel="noopener nofollow" target="_blank">Queen 2025</a>); treatment options, side effects and costs are reviewed together (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9298335/" rel="noopener nofollow" target="_blank">Nestor 2021</a>).</p>
      <p>Graded strong, matching the <a href="/hair-loss">hair-loss guide</a>, which grades finasteride, dutasteride and topical minoxidil strong on their own trials and covers the sexual and mood warnings that belong with them. A clinic that operates without discussing medication is selling half a treatment.</p>
    `,
  },
  {
    id: 'adj-prp',
    category: 'product',
    title: 'Platelet-rich plasma with the transplant — three small controlled studies',
    tldr: 'Injected into the recipient area or used to bathe the grafts, platelet-rich plasma is sold as a way to improve survival and speed growth. A 2025 systematic review found three controlled studies and 217 participants, all favouring it — more density, better follicle survival, earlier growth — with different preparations, protocols and outcome measures and no standardised counting. A 30-patient randomised study and a 147-patient retrospective comparison agree; in organ culture, grafts grew no faster with it. A plausible add-on at €300–600 a session.',
    evidence: 'emerging',
    focus: 'adjunct',
    note: 'Best for: an optional extra in a clinic that already does the basics well',
    sessions: '1–3 sessions around the operation',
    downtime: 'None',
    cost: '€300–600 per session',
    bodyHtml: `
      <p>The review: "Three studies, including two randomized controlled trials and one non-randomized controlled study, met the inclusion criteria, encompassing a total of 217 participants. Across all studies, the addition of PRP was associated with improved outcomes, including increased hair density, enhanced follicle survival, and earlier initiation of hair growth. However, notable heterogeneity was observed … none of the studies employed standardized evaluation tools or trichoscopic analysis" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12506585/" rel="noopener nofollow" target="_blank">Sindhusen 2025</a>). The studies: 30 patients randomised, "significantly improved follicle survival rates, follicle growth rates, and hair strength" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845930/" rel="noopener nofollow" target="_blank">Xue 2025</a>); 147 patients compared retrospectively, better regeneration scores with the combination (<a href="https://pubmed.ncbi.nlm.nih.gov/37885332/" rel="noopener nofollow" target="_blank">Zhao 2023</a>); in culture, "the growth of hair grafts cultured with PRP was not significance difference from those without PRP" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10495071/" rel="noopener nofollow" target="_blank">Thuangtong 2023</a>). The field's own view: "limitations in evidence and lack of consensus remain among clinicians regarding optimal composition, protocol, technique" (<a href="https://pubmed.ncbi.nlm.nih.gov/38376068/" rel="noopener nofollow" target="_blank">Kourosh 2024</a>); it is listed among the specialty's controversies (<a href="https://pubmed.ncbi.nlm.nih.gov/29064980/" rel="noopener nofollow" target="_blank">Avram 2017</a>). As a treatment for pattern loss without surgery, a meta-analysis found a standardised density gain of 0.51 over placebo (<a href="https://pubmed.ncbi.nlm.nih.gov/30882509/" rel="noopener nofollow" target="_blank">Gupta 2019</a>).</p>
      <p>Graded emerging as a transplant adjunct. The <a href="/hair-loss">hair-loss guide</a> grades platelet-rich plasma moderate as a stand-alone treatment on nine randomised trials; around surgery the question is different — does it change graft survival — and three small, heterogeneous studies are not yet an answer. The <a href="/regenerative-aesthetics">regenerative guide</a> covers the preparation problem.</p>
    `,
  },
  {
    id: 'adj-holding-solutions',
    category: 'product',
    title: 'Graft-holding solutions and growth factors — randomised trials of the details',
    tldr: 'Grafts sit out of the body for hours, and what they sit in matters more than which blade is used. In a 240-patient randomised trial, an organ-preservation solution with ATP and an iron chelator kept grafts firmer and cut post-operative shedding from 95% to 74% of large operations, with the same final survival. In a 60-patient randomised trial, soaking grafts in a fibroblast growth factor and applying it afterwards gave 91.1% survival against 81.0%. Trimming the skin cap off each graft improved the early appearance and did not change survival in 64 men.',
    evidence: 'emerging',
    focus: 'adjunct',
    note: 'Best for: a question to ask — what are my grafts stored in, at what temperature, and for how long',
    sessions: 'Part of the operation',
    downtime: '—',
    cost: 'Usually included',
    bodyHtml: `
      <p>The trials: "There were 240 patients enrolled in the study, and the follicles were placed into either HTK-AD or Ringer solution (RS) … Histidine-tryptophan-ketoglutarate solution with adenosine triphosphate and deferoxamine significantly reduced the incidence of postsurgical hair shedding (73.81% vs 95%), delayed shedding onset, and diminished shedding amount versus RS … when ≥3,000 grafts were transplanted … The final survival rate showed no difference between 2 groups" (<a href="https://pubmed.ncbi.nlm.nih.gov/37036372/" rel="noopener nofollow" target="_blank">Zhou 2023</a>), with the laboratory companion showing less bulb-cell death over 2–12 hours (<a href="https://pubmed.ncbi.nlm.nih.gov/39643038/" rel="noopener nofollow" target="_blank">Huang 2025</a>); "The rb-bFGF group demonstrated superior outcomes compared with controls, including higher 12-month follicle survival (91.1% vs. 81.0%), lower hair-loss rate (11.6% vs. 22.7%)" in 60 randomised patients (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12445400/" rel="noopener nofollow" target="_blank">Lei 2025</a>); "Follicular de-epithelialization does not affect the survival rate of graft in FUE", while immediate satisfaction was 100% against 71% (<a href="https://pubmed.ncbi.nlm.nih.gov/34397543/" rel="noopener nofollow" target="_blank">Fan 2021</a>). The principle: graft survival turns on "graft trauma, vascular/oxygenation factors, and biochemical injury" (<a href="https://pubmed.ncbi.nlm.nih.gov/24017986/" rel="noopener nofollow" target="_blank">Cooley 2013</a>); culture medium at body temperature out-performed cold Ringer solution in organ culture (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10495071/" rel="noopener nofollow" target="_blank">Thuangtong 2023</a>).</p>
      <p>Graded emerging: single-centre randomised trials, each of one product, from the same few Chinese units. They matter as evidence that the unglamorous parts of the operation are where survival is won or lost.</p>
    `,
  },
  {
    id: 'alt-smp',
    category: 'product',
    title: 'Scalp micropigmentation instead — dots of pigment, no hair',
    tldr: 'A cosmetic tattoo of thousands of tiny dots that reads as stubble on a shaved head or as less scalp showing through thin hair, and hides strip and FUE scars. Reviews describe natural results when the dot size, depth and colour are right and blue-grey spreading when they are not; pigment can be removed with a picosecond laser. In women with pattern loss, one clinic\'s data suggest pigment rather than grafts when density is still above about 105 hairs per cm². It fades over three to five years and adds no hair.',
    evidence: 'emerging',
    focus: 'alternative',
    note: 'Best for: diffuse thinning with decent density, the shaved look, and scar camouflage after surgery',
    sessions: '2–4 sessions a week apart; top-up every 3–5 years',
    downtime: 'Redness for 1–3 days',
    cost: '€800–3,000',
    bodyHtml: `
      <p>The reviews: "Scalp micropigmentation has developed rapidly in recent years to the extent that it is now considered a major means of hair loss treatment along with medication and hair transplantation" (<a href="https://pubmed.ncbi.nlm.nih.gov/35947499/" rel="noopener nofollow" target="_blank">Park 2022</a>); "Cosmetic deformities, resulting from some dermatologic diseases or deformities caused by hair restoration surgeries, have had few, if any, good, permanent solutions … A cosmetic tattoo technique has been developed" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4382144/" rel="noopener nofollow" target="_blank">Rassman 2015</a>). The threshold study: "SMP is recommended when the HD is ≥104.6 hairs/cm2 and HT surgery is strongly recommended when the HD is ≤96.17 hairs/cm2" in 40 women (<a href="https://pubmed.ncbi.nlm.nih.gov/38894530/" rel="noopener nofollow" target="_blank">Park 2024</a>).</p>
      <p>Graded emerging: descriptive reviews and one decision study. The <a href="/hair-loss">hair-loss guide</a> lists it with fibres and toppers among the things that work today while the medicines take their six months.</p>
    `,
  },
  {
    id: 'alt-synthetic-cloning',
    category: 'product',
    title: 'Synthetic fibres, "hair cloning" and exosomes — for the donor you do not have',
    tldr: 'Artificial hair implantation (Biofibre, Nido) anchors synthetic fibres in the scalp: immediate, unlimited, and banned by the US FDA since the 1980s; its makers\' 1,518-patient series is enthusiastic, and an independent review rates the methodological quality of the studies between poor and fair and notes the scepticism that infections and fibre loss have earned. Multiplying follicles in the laboratory remains a research programme. Exosome injections have no approved product and small open-label studies. None is a substitute for a donor area.',
    evidence: 'limited',
    focus: 'alternative',
    note: 'Best for: nobody, currently — a wig or pigment is safer than a fibre, and the cell therapies are not yet treatments',
    sessions: '—',
    downtime: '—',
    cost: '—',
    bodyHtml: `
      <p>Fibres: "The use of artificial hair implants remains controversial, particularly because this practice has been banned by the US FDA … Although the studies evaluating the use of artificial hair fibers appear promising, the methodological quality of most of them was between 'poor' and 'fair', due to lack of randomization, absence of control groups, improper study design, and inappropriate outcome measures … Artificial hair implantation has been received with skepticism among physicians due to the complications reported" (<a href="https://pubmed.ncbi.nlm.nih.gov/33565339/" rel="noopener nofollow" target="_blank">Gupta 2022</a>); the manufacturer-linked series of 1,518 patients reports "immediate and visible results without scarring or hospitalization" (<a href="https://pubmed.ncbi.nlm.nih.gov/31168904/" rel="noopener nofollow" target="_blank">Satolli 2019</a>). Cells: stem-cell and follicular-cell approaches are "under development" (<a href="https://pubmed.ncbi.nlm.nih.gov/36370520/" rel="noopener nofollow" target="_blank">Sung 2023</a>), and "hair follicle cloning" is listed under future directions (<a href="https://pubmed.ncbi.nlm.nih.gov/40354670/" rel="noopener nofollow" target="_blank">Queen 2025</a>). Exosomes: "very limited data are available on the safety and efficacy of exosome use in human" subjects (<a href="https://pubmed.ncbi.nlm.nih.gov/39447204/" rel="noopener nofollow" target="_blank">Queen 2025c</a>).</p>
      <p>Graded limited, matching the <a href="/hair-loss">hair-loss guide</a> and the <a href="/exosomes">exosomes guide</a>, which grade exosome scalp treatments limited and emerging at best. Fibre implants are lawful in parts of Europe; lawful is not the same as advisable.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-complications-numbers',
    category: 'safety',
    title: 'Complications in numbers — common and minor, rare and serious',
    tldr: 'A scoping review of 43 papers: overall complication rates of 1.2% and 4.7% in the two large series; bleeding needing intervention in up to 8%; persistent numbness in up to 11%; infection in up to 11%, including rare serious infections; shedding of existing hair at the donor in up to 4.1% and the recipient in up to 6.5%; raised or widened strip scars in up to 15.1%; crusting, forehead swelling and sterile folliculitis each in up to half, depending on definitions. In 1,317 operations folliculitis followed 12.1%; in 1,090, persistent redness around the grafts followed 22% and went with worse shedding and lower survival.',
    bodyHtml: `
      <p>The reviews: "Two large series reported the overall complication rate to be 1.2 and 4.7%. Common complications included bleeding requiring intervention (up to 8%), persistent numbness (up to 11%), infection (up to 11% with two reports of Kaposi varicelliform eruptions and one of mucormycosis), effluvium at donor and recipient sites (up to 4.1% and 6.5%, respectively). The most common donor-site complication was hypertrophic scarring/keloid formation after FUT (up to 15.1%). Complications at the recipient site, including crusting (up to 54.8%), frontal edema (up to 50%), and sterile folliculitis (up to 53.3%), tended to be poorly defined … Serious complications associated with HRS are rare in the hands of experienced providers" (<a href="https://pubmed.ncbi.nlm.nih.gov/39179656/" rel="noopener nofollow" target="_blank">Liu 2025</a>); a meta-analysis of 45 articles, "442 patients reported complications out of 2353 … Pain and discomfort were the most reported", with arteriovenous fistulas in the case-report literature (<a href="https://pubmed.ncbi.nlm.nih.gov/40913181/" rel="noopener nofollow" target="_blank">Khatib 2025</a>). The cohorts: "The overall incidence of postoperative folliculitis was 12.11% … Surgery in summer (OR, 1.772 …), number of transplant grafts 4000 or greater (OR, 4.818 …), transplant density greater than 45 grafts/cm 2 (OR, 2.152 …), and first nursing time greater than 3 days (OR, 1.555 …)" (<a href="https://pubmed.ncbi.nlm.nih.gov/37904273/" rel="noopener nofollow" target="_blank">Zhou 2024</a>); "178 (16.33%) showed mild RPE, 56 (5.14%) showed moderate RPE, and 10 (0.92%) showed severe RPE. Patients with RPE had severe hair shaft shedding … and a lower survival rate" (<a href="https://pubmed.ncbi.nlm.nih.gov/38849551/" rel="noopener nofollow" target="_blank">Zhang 2024</a>). Shedding of existing hair: immediate linear shedding after dense packing in 28 patients, "fully reversed in 3 months" (<a href="https://pubmed.ncbi.nlm.nih.gov/37085132/" rel="noopener nofollow" target="_blank">Mir-Bonafé 2023</a>); localised donor-area shedding described in twelve (<a href="https://pubmed.ncbi.nlm.nih.gov/32947302/" rel="noopener nofollow" target="_blank">Gómez-Zubiaur 2021</a>). The specialists' summary: "Most complications associated with hair restoration are completely preventable and arise from variables that are directly controlled by the surgeon and the patient" (<a href="https://pubmed.ncbi.nlm.nih.gov/24017992/" rel="noopener nofollow" target="_blank">Konior 2013</a>).</p>
      <p>What is yours to control: stop smoking for a month either side; follow the washing routine from the day the clinic says, not later; sleep propped up for three nights; no gym, sauna or sun for two weeks; and report spreading redness, pus, a dark or grey patch, or fever the same day.</p>
    `,
  },
  {
    id: 'safety-necrosis',
    category: 'safety',
    title: 'Scalp necrosis — rare, scarring, and linked to smoking and big dense sessions',
    tldr: 'The grafted skin loses its blood supply, turns dark, forms a crust and heals as a bald scar with the grafts lost. One centre saw three cases in more than 10,000 operations. The largest series, 18 patients seen in consultation between 2017 and 2023, were all single-session FUE cases averaging 3,900 grafts; smoking was recorded in 66.7%, high blood pressure in 20% and diabetes in 13.3%; every one ended with scarring and graft failure. A multicentre series of 52 has since been reported. Adrenaline, tumescence, deep incisions, high density and the crown all reduce perfusion; the blade material is the least of it.',
    bodyHtml: `
      <p>The series: "among more than 10 000 patients who underwent hair transplantation, only three developed scalp necrosis in our clinical experience … Of the four patients, three received timely treatment and had a good prognosis. Necrosis became confined and healed within 2-3 weeks. Grafts in the lesion area partially survived. In case 4, due to improper treatment at the early stage, the lesion developed extensively and deeply" (<a href="https://pubmed.ncbi.nlm.nih.gov/37814471/" rel="noopener nofollow" target="_blank">Chen 2024</a>); "The most common risk factors identified were smoking 66.7% …, hypertension 20% …, and diabetes mellitus 13.3% … All patients (n = 18) underwent single-session hair transplantation using the follicular unit excision technique, and an average of 3899.44 ± 93.76 follicular units were transplanted. Outcomes such as scarring and graft failure occurred in all patients" (<a href="https://pubmed.ncbi.nlm.nih.gov/39160404/" rel="noopener nofollow" target="_blank">Ceran 2024</a>); a multicentre retrospective characterisation of 52 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/41999876/" rel="noopener nofollow" target="_blank">Gómez-Zubiaur 2026</a>). The mechanism: "ischemia in the recipient bed is related to tissue damage caused by the instruments used and the number of grafts per cm²" (<a href="https://pubmed.ncbi.nlm.nih.gov/37811982/" rel="noopener nofollow" target="_blank">Balik 2023</a>); patient factors "such as comorbidities, smoking, or concurrent medications, and technical variables, including punch design, graft handling, follicular unit density, and ischemia time" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12909172/" rel="noopener nofollow" target="_blank">Romera de Blas 2026</a>).</p>
      <p>The practical reading: smokers, diabetics and people with previous scalp surgery should have smaller, less dense sessions, and should hear that from the surgeon unprompted. A dusky or blistered patch in the first week is an emergency for the clinic, not something to watch.</p>
    `,
  },
  {
    id: 'safety-donor-and-scars',
    category: 'safety',
    title: 'The donor area — the one thing a repair cannot give back',
    tldr: 'Every graft taken is gone from the back of your head for good. Over-harvesting — too many punches, too close together, or outside the permanent zone — leaves a thin, patchy, see-through donor that no later surgeon can fix, and grafts taken from outside the safe zone will themselves fall out years later. FUE leaves a white dot per graft and transects neighbours the count does not include; the strip leaves a line that widens or thickens in up to 15%. Keloids have followed both. A fixed-price package with a graft count in the headline pays the clinic to take more.',
    bodyHtml: `
      <p>Depletion: "donor area complications including hypopigmentation, hypertrophic scarring, epithelial cysts, and donor depletion" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12909172/" rel="noopener nofollow" target="_blank">Romera de Blas 2026</a>); FUE "carries potential long-term permanent side effects if not performed properly" (<a href="https://pubmed.ncbi.nlm.nih.gov/38092043/" rel="noopener nofollow" target="_blank">Anastassakis 2024</a>); "Patients' clinical outcomes are mostly operator dependent … Follicular unit excision (FUE) donor harvesting, in particular, is a challenging harvesting technique requiring a long learning" curve (<a href="https://pubmed.ncbi.nlm.nih.gov/37907286/" rel="noopener nofollow" target="_blank">Williams 2024</a>). The uncounted damage: hidden transection of 2% for an expert and 8% for a beginner in follicles next to each punch (<a href="https://pubmed.ncbi.nlm.nih.gov/27035500/" rel="noopener nofollow" target="_blank">Kim 2016</a>); more follicles transected in the areas harvested at the end of a session than at the start, in 25 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/31317641/" rel="noopener nofollow" target="_blank">Ahmad 2020</a>). The safe zone: its limits must be estimated per patient (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11679175/" rel="noopener nofollow" target="_blank">Punia 2024</a>). Scars: strip scars hypertrophic or keloidal in up to 15.1% (<a href="https://pubmed.ncbi.nlm.nih.gov/39179656/" rel="noopener nofollow" target="_blank">Liu 2025</a>); "Keloid scarring is a rare complication of hair transplantation and usually associated with strip harvesting rather than follicular unit extraction (FUE). A case of keloids at the donor site following FUE hair transplantation is presented" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7646428/" rel="noopener nofollow" target="_blank">Alhamzawi 2020</a>); donor-site healing after FUE has its own systematic review of interventions (<a href="https://pubmed.ncbi.nlm.nih.gov/40920315/" rel="noopener nofollow" target="_blank">Arencibia Pérez 2025</a>).</p>
      <p>Ask to see the clinic's donor areas at one year, shaved short, not only its hairlines. Ask for the number of grafts you have for life and how many this operation will use. A surgeon who plans a second operation in advance is being honest about progression, not selling twice.</p>
    `,
  },
  {
    id: 'safety-black-market',
    category: 'safety',
    title: 'Black-market clinics — what the specialty society says, and eight questions',
    tldr: 'The international society\'s alert: unlicensed personnel are "performing substantial medical aspects of hair restoration surgery" worldwide; when doctors advertise their credentials and delegate the surgery, "patients are being misled and placed at risk"; "there is no such thing as \'scarless surgery\' in hair transplantation"; no machine does the whole operation. Its 2025 census: black-market clinics in the cities of 59% of members, up from 51%; one repair case in ten from one; and members who average 15 operations a month each. A German review\'s title is its message: planned and performed by the physician. The questions below take five minutes.',
    bodyHtml: `
      <p>The sources: "unlicensed personnel worldwide are performing substantial medical aspects of hair restoration surgery … When doctors advertise their credentials and then delegate the surgery to unlicensed personnel, patients are being misled and placed at risk … There is no such thing as 'scarless surgery' in hair transplantation" (<a href="https://ishrs.org/patients/consumer-alert/" rel="noopener nofollow" target="_blank">ISHRS consumer alert</a>); "59% of ISHRS members reported there are Black Market hair transplant clinics in their cities, up from 51% in 2021", while "the average number of hair restoration surgeries performed per ISHRS member per month in 2024 was 15" (<a href="https://ishrs.org/2025-practice-census-results/" rel="noopener nofollow" target="_blank">ISHRS 2025 census</a>); "aggressive digital marketing, the expanded role of unsupervised technicians, bait and switch practices, and alarming complication rates reported by regulatory bodies" (<a href="https://pubmed.ncbi.nlm.nih.gov/40660034/" rel="noopener nofollow" target="_blank">Haider 2025</a>); practice guidelines that exist because "there is also a debate as to who can do what, what should be the training for staff, role of technicians. This has led to a situation wherein medico legal issues have cropped up" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8611706/" rel="noopener nofollow" target="_blank">Mysore 2021</a>); the society's core curriculum, which starts from "a sound understanding of all of the alternate pathologic causes of hair loss" (<a href="https://pubmed.ncbi.nlm.nih.gov/16393605/" rel="noopener nofollow" target="_blank">Puig 2006</a>); hair transplantation "sustainably planned and performed by the physician" (<a href="https://pubmed.ncbi.nlm.nih.gov/35428954/" rel="noopener nofollow" target="_blank">Finner 2022</a>).</p>
      <p>The questions: Who examines my scalp and makes the diagnosis, and are they a doctor? Who designs the hairline? Who makes the recipient incisions, and who harvests — by name and registration? How many patients are operated on that day, and in how many rooms? How many grafts do I have for life, and how many will you take? What are the grafts stored in and for how long? Can I see donor areas at one year, shaved? Who looks after me if there is an infection or necrosis once I am home? A clinic that answers all eight in writing is unlikely to be the problem, in any country.</p>
    `,
  },
  {
    id: 'safety-wrong-diagnosis-and-mind',
    category: 'safety',
    title: 'The wrong diagnosis, and the wrong reason — scarring alopecia and body dysmorphic disorder',
    tldr: 'Two ways a technically good transplant fails. First, the hair loss was not what it seemed: 26 patients in one series had lichen planopilaris hiding in a pattern-loss area, where surgery is contraindicated, and 27 people in a review developed lichen planopilaris or frontal fibrosing alopecia a median 16 months after a cosmetic transplant. Second, the patient needed something surgery cannot give: reviews recommend screening for body dysmorphic disorder and depression, poor selection produces dissatisfaction whatever the result, and one case report describes a suicide after a transplant in a man with no psychiatric history.',
    bodyHtml: `
      <p>The diagnosis: "Subtle or focal cases of LPP may be missed for seborrheic dermatitis when overlapping with AGA. Dermatoscopy-guided biopsy from the affected scalp is the best approach to make a timely diagnosis" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4857822/" rel="noopener nofollow" target="_blank">Baquerizo Nole 2015</a>); "27 patients without evidence of previous disease developed FFA or LPP following HT after a median duration of 16 months" (<a href="https://pubmed.ncbi.nlm.nih.gov/32045028/" rel="noopener nofollow" target="_blank">Lee 2021</a>). The mind: "Screening tools such as the Body Dysmorphic Disorder Questionnaire (BDDQ) and Beck Depression Inventory (BDI) are effective in identifying high-risk individuals. When patient expectations are well managed and psychological risk factors are considered, hair transplantation can lead to improved self-esteem, confidence, and emotional well-being. Conversely, inadequate screening or poor patient selection may result in" dissatisfaction (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12458453/" rel="noopener nofollow" target="_blank">Tan 2025</a>); a survey study of body dysmorphic disorder among transplant patients in south India (<a href="https://pubmed.ncbi.nlm.nih.gov/32618069/" rel="noopener nofollow" target="_blank">Hafi 2020</a>); counselling as part of the consultation (<a href="https://pubmed.ncbi.nlm.nih.gov/34984078/" rel="noopener nofollow" target="_blank">Dhami 2021</a>); "we present a case without prior psychiatric history who developed major depressive disorder after hair transplantation and died of suicide … This case highlights the importance of a detailed psychiatric evaluation" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5406114/" rel="noopener nofollow" target="_blank">Ceylan 2017</a>). Anaesthetic safety depends on dose limits for lidocaine and adrenaline over a long day (<a href="https://pubmed.ncbi.nlm.nih.gov/11966789/" rel="noopener nofollow" target="_blank">Seager 2002</a>).</p>
      <p>What this means for you: itch, burning, redness or scale at the hairline, eyebrow loss, or loss that has moved fast is a dermatology appointment, not a surgical quote. And if hair loss is occupying hours of your day, or you expect the operation to change your life rather than your hairline, say so at the consultation — a good surgeon will want to know, and the months of looking worse before looking better are hard on anyone.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-permanent',
    category: 'faq',
    title: 'Is a transplant permanent?',
    tldr: 'The grafts, yes — taken from the permanent zone they keep growing for life, and pooled survival is 85–93%. The hair around them is not: it goes on thinning unless treated, which is why the trial of finasteride around surgery showed visible improvement in 94% against 67%. Grafts placed into scarring alopecia are the exception and fade over years.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/31667549/" rel="noopener nofollow" target="_blank">Stoneburner 2020</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/16188178/" rel="noopener nofollow" target="_blank">Leavitt 2005</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/40439233/" rel="noopener nofollow" target="_blank">Yii 2025</a>.)</p>
    `,
  },
  {
    id: 'faq-when-results',
    category: 'faq',
    title: 'When will I see the result?',
    tldr: 'Crusts gone by day ten. About half the transplanted hairs shed within a month and the scalp looks worse until month three. New growth from month three or four, cosmetic density from month eight, final result at twelve months — eighteen for the crown and often for women.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/11493294/" rel="noopener nofollow" target="_blank">Lee 2001</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6967169/" rel="noopener nofollow" target="_blank">Bansal 2019</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/37036372/" rel="noopener nofollow" target="_blank">Zhou 2023</a>.)</p>
    `,
  },
  {
    id: 'faq-how-many-grafts',
    category: 'faq',
    title: 'How many grafts do I need?',
    tldr: 'A hairline and forelock is typically 1,500–2,500 units; published averages are about 1,300–1,400 per operation for men and 1,000 for women; megasessions reach 3,000–6,000. A lifetime donor is a few thousand more than that, not unlimited. Sessions place about 30–45 units per cm²; above that, survival falls and complications rise.',
    bodyHtml: `
      <p>(<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7606102/" rel="noopener nofollow" target="_blank">Vasudevan 2020</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6392215/" rel="noopener nofollow" target="_blank">Park 2019</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/31529675/" rel="noopener nofollow" target="_blank">Li 2020</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/16792647/" rel="noopener nofollow" target="_blank">Lee 2006</a>.)</p>
    `,
  },
  {
    id: 'faq-cost',
    category: 'faq',
    title: 'What does it cost?',
    tldr: 'September 2026, indicative: €3–6 a graft in Western Europe and the UK, so €4,000–12,000; €2–3.50 a graft in southern and eastern Europe; €1,800–3,500 for Turkish packages. Eyebrows €2,000–4,500, beards €3,000–7,000, repairs €4,000–15,000. Add €10–40 a month for the medication that protects the rest of your hair.',
    bodyHtml: `
      <p>Indicative prices, not quotes. The economics of the cheapest end of the market are described by <a href="https://pubmed.ncbi.nlm.nih.gov/40660034/" rel="noopener nofollow" target="_blank">Haider 2025</a>; what Americans say they would pay, by <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10642908/" rel="noopener nofollow" target="_blank">Knoedler 2023</a>.</p>
    `,
  },
  {
    id: 'faq-fue-or-fut',
    category: 'faq',
    title: 'FUE or the strip method?',
    tldr: 'Equally good grafts, different scars. FUE: dots, a shaved donor, short hairstyles possible, more transection risk in tired or untrained hands. Strip: a line scar hidden by 2 cm of hair, no shaving, the most grafts from the best zone, popular with women. Many people end up having both over a lifetime.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/32141930/" rel="noopener nofollow" target="_blank">Gupta 2020b</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/38016653/" rel="noopener nofollow" target="_blank">Konior 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/40911748/" rel="noopener nofollow" target="_blank">Queen 2025b</a>.)</p>
    `,
  },
  {
    id: 'faq-turkey',
    category: 'faq',
    title: 'Is it safe to go to Turkey?',
    tldr: 'It depends on the clinic, not the country: good surgeons work there, and so does a billion-dollar technician-run industry that a 2025 review describes as a "data black hole". The risk is who operates, how many patients a day, how much donor is taken, and who looks after a complication once you are home. Ask the eight questions in the Safety section and get the answers in writing.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/40660034/" rel="noopener nofollow" target="_blank">Haider 2025</a>; <a href="https://ishrs.org/2025-practice-census-results/" rel="noopener nofollow" target="_blank">ISHRS 2025 census</a>; <a href="https://ishrs.org/patients/consumer-alert/" rel="noopener nofollow" target="_blank">ISHRS consumer alert</a>.)</p>
    `,
  },
  {
    id: 'faq-women',
    category: 'faq',
    title: 'Can women have a hair transplant?',
    tldr: 'Some can: patterned thinning at the front or along the part with a dense back of the head. Diffuse thinning that includes the donor is not suitable. Women need a work-up first, usually prefer the strip or unshaven methods, lose existing hair temporarily more often than men, and sometimes do better with scalp micropigmentation or with lowering a high hairline surgically.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/40911748/" rel="noopener nofollow" target="_blank">Queen 2025b</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32312508/" rel="noopener nofollow" target="_blank">Lam 2020</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/38894530/" rel="noopener nofollow" target="_blank">Park 2024</a>.) The <a href="/hair-loss">hair-loss guide</a> covers the medical side for women.</p>
    `,
  },
  {
    id: 'faq-medication-after',
    category: 'faq',
    title: 'Do I still need finasteride or minoxidil afterwards?',
    tldr: 'For pattern loss, yes. The grafts are safe without it; the hair behind and between them is not. In the randomised trial, men on finasteride around their transplant had visible improvement in 94% against 67% on placebo. Minoxidil does not change graft survival but may spare some grafts the post-operative shed.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/16188178/" rel="noopener nofollow" target="_blank">Leavitt 2005</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/20921704/" rel="noopener nofollow" target="_blank">Singh 1998</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/26176286/" rel="noopener nofollow" target="_blank">Rogers 2015</a>.)</p>
    `,
  },
  {
    id: 'faq-age',
    category: 'faq',
    title: 'Am I too young — or too old?',
    tldr: 'Too young is the real problem: before about 25, and before a year of medical treatment, nobody can map your future pattern or your safe donor, and a low hairline placed now may be stranded later. There is no upper age limit if you are fit for a long day under local anaesthetic and your donor is good; results were better under 33 in one series, which is an argument for not waiting decades, not for operating at 21.',
    bodyHtml: `
      <p>(<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8719975/" rel="noopener nofollow" target="_blank">True 2021</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7606102/" rel="noopener nofollow" target="_blank">Vasudevan 2020</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11679175/" rel="noopener nofollow" target="_blank">Punia 2024</a>.)</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What a transplant is, what the evidence shows, and what it can and cannot do',
    intro: '',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you book: candidacy, the year it takes, and the price gap',
    intro: '',
    sections: context,
  },
  {
    id: 'uses',
    title: 'What hair transplantation is used for — graded by evidence',
    intro: 'Thirteen reasons people have the operation, from male pattern loss with sixty years of series to the 22-year-old who should wait. Sorted by evidence, not by the menu.',
    sections: uses,
  },
  {
    id: 'products',
    title: 'Techniques, tools and add-ons — graded one by one',
    intro: 'Seven ways of doing the operation, three things sold with it and two sold instead of it.',
    sections: products,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'Complication rates, necrosis, the donor area, the black market, and the wrong diagnosis.',
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
  pattern: 'Pattern loss',
  women: 'Women',
  face: 'Face',
  scars: 'Scars',
  donor: 'Donor',
  technique: 'Technique',
  adjunct: 'Add-on',
  alternative: 'Instead',
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
