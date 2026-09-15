/**
 * Body contouring guide — single source of truth (in-clinic layout).
 *
 * Consumed by /body-contouring. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: body contouring is three different jobs — removing a
 * pocket of fat, removing skin, and building muscle — and the evidence is
 * lopsided. The non-invasive fat devices take about a fifth to a quarter off
 * a pinch of fat in uncontrolled manufacturer studies with a handful of
 * sham-controlled trials; liposuction removes the layer with a complication
 * database of 31,010 cases behind it; only surgery removes skin, at
 * complication rates of 2–70% depending on how much; fat comes back
 * somewhere else when weight rises; and the one procedure with a mortality
 * problem is the fat transfer to the buttocks. Tiers stay consistent with
 * the guides that already grade these rows (/double-chin, /upper-arms,
 * /cellulite, /mesotherapy, /red-light-therapy, /skin-tightening, /neck,
 * /jowls). Prices are indicative Western/Central European and UK private
 * rates as of September 2026, not quotes.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea =
  | 'abdomen'
  | 'flanks'
  | 'thighs'
  | 'buttocks'
  | 'muscle'
  | 'skin'
  | 'noninvasive'
  | 'injectable'
  | 'surgical'
  | 'other'
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
  'Body contouring is three different jobs — removing a pocket of fat, removing skin, and building muscle — and no single treatment does more than one of them well. The non-invasive devices take a fifth to a quarter off a pinch of fat; liposuction removes the layer; only an operation removes skin; and electromagnetic stimulation thickens a muscle by a few millimetres. None of them is weight loss, and all of them are undone by the weight coming back.',
  'Cryolipolysis is the best-documented non-invasive fat treatment: 19 studies with caliper reductions of 15–29% and ultrasound reductions of 10–26%, a 3D-imaged contralateral-control trial, a meta-analysis of 30 studies and 3,158 people with 80% satisfaction, and one signature harm — paradoxical adipose hyperplasia, a hard overgrowth of fat in about 1 in 455 patients that only liposuction removes. Focused ultrasound and low-level laser have sham-controlled trials of centimetres; radiofrequency has none.',
  'Liposuction is the reference standard, with a 0.7% major-complication rate when done alone across 31,010 cases, no serious complications in 15,336 tumescent cases under local anaesthesia, and 86% of patients recommending it nine years on. Its limits are fixed: it leaves the skin where it was, a 1990s survey put its mortality at 1 in 5,000 when done under general anaesthesia with other operations, and in a randomised trial abdominal liposuction produced a 10% compensatory rise in visceral fat within six months unless the patient exercised.',
  'Skin only comes off with a scalpel. Abdominoplasty carries a 2–4% major-complication rate in databases of 25,000–56,000 patients and the highest venous-thromboembolism risk in aesthetic surgery; a lower body lift after massive weight loss produced a complication in 70% of patients and a re-operation in 10%; a thigh lift in 43%. The pay-off is large — body-image scores rose from 13 to 90 in post-bariatric patients — and it belongs after the weight has been stable, which on a GLP-1 drug means eight to twelve months in and with the regain after stopping in view.',
  'The fat transfer to the buttocks is the one cosmetic operation with its own mortality problem: a 2017 task force confirmed 25 deaths from pulmonary fat embolism in the United States in five years, and the rules that followed — subcutaneous injection only, larger cannulas, no downward angling — cut the reported mortality from about 1 in 3,000 to about 1 in 15,000 within two years. "Fat freezing" in a salon, cavitation, lipo-laser pads, body wraps and lymphatic drainage have no evidence that survives a tape measure.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-body-contouring-is',
    category: 'concept',
    title: 'What body contouring is — fat, skin and muscle, and why one treatment cannot do all three',
    tldr: 'Liposuction is the most performed cosmetic operation in the world and abdominoplasty the fourth; the non-invasive devices sold beside them freeze, heat, shake or irradiate fat so that some of it dies and is cleared over months. A device thins a pinch of fat by two to five millimetres; suction removes the layer; only excision removes skin; electromagnetic stimulation adds a few millimetres of muscle. Deciding which of the three is the problem is most of the consultation.',
    bodyHtml: `
      <p>The scale of the field: 34.9 million aesthetic procedures by plastic surgeons in 2023, and among the 15.8 million surgical ones "the top five surgical procedures were liposuction, breast augmentation, eyelid surgery, abdominoplasty, and rhinoplasty", a ranking "stable for 14 years" (<a href="https://pubmed.ncbi.nlm.nih.gov/39103642/" rel="noopener nofollow" target="_blank">Triana 2024</a>). The non-invasive alternatives work by killing fat cells in place: cooling to the temperature at which adipocytes die and skin does not (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4444424/" rel="noopener nofollow" target="_blank">Ingargiola 2015</a>), focused ultrasound (<a href="https://pubmed.ncbi.nlm.nih.gov/21701341/" rel="noopener nofollow" target="_blank">Jewell 2011</a>), a 1,060 nm laser that heats the fat layer (<a href="https://pubmed.ncbi.nlm.nih.gov/29320595/" rel="noopener nofollow" target="_blank">Bass 2018</a>), radiofrequency (<a href="https://pubmed.ncbi.nlm.nih.gov/32621362/" rel="noopener nofollow" target="_blank">Somenek 2021</a>) or an injected detergent (<a href="https://pubmed.ncbi.nlm.nih.gov/30883481/" rel="noopener nofollow" target="_blank">Walker 2020</a>); the review of the four energy classes found all "clinically effective in terms of both objective body measurements, such as fat layer thickness or circumference reduction, and subjective patient satisfaction" with "further well-designed trials" needed for long-term confidence (<a href="https://pubmed.ncbi.nlm.nih.gov/37431699/" rel="noopener nofollow" target="_blank">Wolska 2023</a>).</p>
      <p>What none of them does is remove skin, which is why the abdomen after pregnancy or a large weight loss is a surgical question, or build muscle, which is what the electromagnetic devices in Part 02 claim. The <a href="/skin-tightening">tightening guide</a> grades the energy devices for loose skin, the <a href="/cellulite">cellulite guide</a> the dimples that fat removal does not touch, and the <a href="/upper-arms">upper arms</a> and <a href="/double-chin">double chin</a> guides the two regions with their own literature.</p>
    `,
  },
  {
    id: 'what-the-trials-measure',
    category: 'concept',
    title: 'What the trials measure — millimetres of pinch, centimetres of tape, and the sham arms that are missing',
    tldr: 'Most non-invasive fat studies are manufacturer-funded series measuring a fat layer by caliper or ultrasound and a waist by tape, without a sham arm; the exceptions are a focused-ultrasound trial (2.4 cm off the waist against sham), two low-level-laser trials, and the 2022 sham-controlled trial of radiofrequency with muscle stimulation. An independent review of the electromagnetic literature found "photographic results were typically modest", high measurement variance, and photographs whose "more dramatic results also showed unexplained reductions in untreated areas". The surgical evidence is the reverse: no trials against nothing, and complication databases of tens of thousands.',
    bodyHtml: `
      <p>The sham-controlled trials: focused ultrasound reduced waist circumference by 2.44 cm against sham at the higher dose in the intention-to-treat analysis, with "mild to moderate discomfort, bruising, and edema" (<a href="https://pubmed.ncbi.nlm.nih.gov/21701341/" rel="noopener nofollow" target="_blank">Jewell 2011</a>); low-level laser reduced combined waist, hip and thigh circumference by 3.51 inches against 0.68 in controls over two weeks, with a regain of 0.31 inches in the fortnight after (<a href="https://pubmed.ncbi.nlm.nih.gov/20014253/" rel="noopener nofollow" target="_blank">Jackson 2009</a>) and by 2.15 cm of waist against control in a second (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5225499/" rel="noopener nofollow" target="_blank">Caruso-Davis 2011</a>); simultaneous radiofrequency and electromagnetic stimulation reduced abdominal fat thickness 28.3% and thickened the rectus muscle 24.2% at three months on ultrasound "whereas the sham group showed no significant changes" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9028295/" rel="noopener nofollow" target="_blank">Samuels 2022</a>). Cryolipolysis has an internal-control trial instead: one flank treated, the other not, 56.2 cc of fat volume lost on the treated side against 16.6 cc on the control by 3D photography (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4123113/" rel="noopener nofollow" target="_blank">Garibyan 2014</a>).</p>
      <p>The critique: the independent systematic review of electromagnetic treatments found 14 studies, one with a sham group, a mean fat reduction of 5.5 mm and muscle gain of 2.2 mm, a non-significant change in muscle separation, "measurement variances were high", and photographs in which "more dramatic results also showed unexplained reductions in untreated areas" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9869942/" rel="noopener nofollow" target="_blank">Swanson 2023</a>); the second review found no study reporting weight change before and after, and "two studies report marginal or no benefit" (<a href="https://pubmed.ncbi.nlm.nih.gov/37957393/" rel="noopener nofollow" target="_blank">Kohan 2024</a>). A tape measure moves with water, salt and the time of day; a fat layer on ultrasound or MRI is the outcome to ask for, and a photograph of a different-looking abdomen is, at best, one of the two.</p>
    `,
  },
  {
    id: 'can-and-cant',
    category: 'concept',
    title: 'What body contouring can and cannot do',
    tldr: 'Can: thin a discrete pocket of fat in a person at a stable, near-normal weight; remove the layer with suction; remove an apron of skin with an operation; thicken a muscle. Cannot: produce weight loss, tighten loose skin without an incision, remove the fat behind the abdominal muscle, cure cellulite, or keep the fat off if the weight comes back — a randomised trial found abdominal liposuction followed by a 10% rise in visceral fat within six months in patients who did not exercise.',
    bodyHtml: `
      <p>The limits are measured. A systematic review of abdominal lipectomy found "only a transient effect" on weight and fat mass, significant at one to two months and gone at three to twenty, "which support fat redistribution and compensatory fat growth, as a result of feedback mechanisms, triggered by fat removal" (<a href="https://pubmed.ncbi.nlm.nih.gov/26210190/" rel="noopener nofollow" target="_blank">Seretis 2015</a>); the randomised trial found that "abdominal liposuction does not induce regrowth of fat, but it does trigger a compensatory increase of visceral fat, which is effectively counteracted by physical activity" — 10% more visceral fat and lower energy expenditure at six months in the group that did not train (<a href="https://pubmed.ncbi.nlm.nih.gov/22539589/" rel="noopener nofollow" target="_blank">Benatti 2012</a>); a two-year cohort found skinfolds after liposuction tracked strongly over time and were not related to physical activity (<a href="https://pubmed.ncbi.nlm.nih.gov/27348685/" rel="noopener nofollow" target="_blank">Valente 2016</a>). Long-term weight regain after trunk surgery was 11.8% in post-bariatric and 7.6% in other patients (<a href="https://pubmed.ncbi.nlm.nih.gov/36877608/" rel="noopener nofollow" target="_blank">Henderson 2023</a>).</p>
      <p>The one thing the devices cannot reach is the fat behind the muscle: a belly that is firm and round rather than pinchable is visceral fat, treated by weight loss — and the GLP-1 drugs are that route, graded in the <a href="/anti-aging-50s">50s guide</a> and discussed in the vetting drawer. Skin that hangs is the <a href="/skin-tightening">tightening guide</a>'s subject up to a point and a surgeon's beyond it; dimples are the <a href="/cellulite">cellulite guide</a>'s.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'rules-and-access',
    category: 'context',
    title: 'Who does what — salons, clinics, surgeons, and the mortality figures that made the rules',
    tldr: 'Cryolipolysis and the other non-invasive devices are operated in salons across Europe, and a do-it-yourself frostbite case ended in a hospital and a panniculectomy; injection lipolysis is a licensed drug for the chin and an unlicensed cocktail everywhere else; liposuction is surgery, and the safety record splits by how it is done — no serious complications in 15,336 tumescent cases under local anaesthesia in dermatology offices against 1 in 5,000 deaths in a 1990s census of plastic surgeons doing it under general anaesthesia with other operations. Buttock fat grafting has its own task-force rules.',
    bodyHtml: `
      <p>The liposuction data: a 1995 survey of 66 dermatologic surgeons and 15,336 tumescent patients found "no serious complications such as death, embolism (pulmonary or fat), hypovolemic shock, perforation of peritoneum or thorax, or thrombophlebitis" and no transfusions (<a href="https://pubmed.ncbi.nlm.nih.gov/7743109/" rel="noopener nofollow" target="_blank">Hanke 1995</a>); the 2000 census of aesthetic plastic surgeons found 95 fatalities in 496,245 lipoplasties, "1 in 5224, or 19.1 per 100,000", with pulmonary thromboembolism "the major killer" and many deaths "during the first night after discharge" (<a href="https://pubmed.ncbi.nlm.nih.gov/10627013/" rel="noopener nofollow" target="_blank">Grazer 2000</a>); the review contrasting the two literatures adds a European survey of "72 cases of severe complications from liposuction, including 23 deaths in a 5-year period from 1998 to 2002", mostly bacterial infections such as necrotising fasciitis and sepsis (<a href="https://pubmed.ncbi.nlm.nih.gov/22134559/" rel="noopener nofollow" target="_blank">Tierney 2011</a>); the modern insurance database puts the major-complication rate of liposuction alone at 0.7%, rising almost fivefold when combined with other procedures (<a href="https://pubmed.ncbi.nlm.nih.gov/28430878/" rel="noopener nofollow" target="_blank">Kaoutzanis 2017</a>). The buttock rules are in Safety (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5846701/" rel="noopener nofollow" target="_blank">Mofid 2017</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32306045/" rel="noopener nofollow" target="_blank">Rios 2020</a>). The salon end: a woman who attempted cryolipolysis at home with ice following online instructions suffered full-thickness abdominal wounds that needed a xenograft and a panniculectomy (<a href="https://pubmed.ncbi.nlm.nih.gov/27068348/" rel="noopener nofollow" target="_blank">Leonard 2016</a>).</p>
      <p>Practically: a device with a published trial on its own model, operated by someone trained on it, with the paradoxical-hyperplasia conversation had before the first cycle; injection lipolysis only as the licensed product under the chin (<a href="/mesotherapy">the mesotherapy guide</a>); liposuction by a surgeon who can say how many they have done in this region, under what anaesthesia, in what facility, with what thromboembolism prophylaxis; and excisional surgery only after the weight-stability questions in the vetting drawer have been answered.</p>
    `,
  },
  {
    id: 'prices-protocols',
    category: 'context',
    title: 'What it costs, how many sessions, and when the result arrives',
    tldr: 'Cryolipolysis €300–800 per applicator cycle and two to four cycles per area, results at eight to twelve weeks; focused ultrasound and the 1,060 nm laser €800–2,500 per area; radiofrequency fat devices €300–600 a session for four to six; electromagnetic stimulation €1,200–2,500 for a course of four; low-level laser €50–150 a session for six to twelve; liposuction €2,500–8,000 per region set, final at three to six months; abdominoplasty €6,000–12,000; lower body lift €12,000–25,000; thigh lift €6,000–12,000; buttock fat transfer €6,000–12,000. Surgery is one payment and one recovery; the devices are courses, repeated.',
    bodyHtml: `
      <p>Indicative European private prices, September 2026. The timelines come from the trials: cryolipolysis measured at two, three and four months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4123113/" rel="noopener nofollow" target="_blank">Garibyan 2014</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/23639062/" rel="noopener nofollow" target="_blank">Dierickx 2013</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6680208/" rel="noopener nofollow" target="_blank">Zelickson 2015</a>); focused ultrasound at twelve weeks after one session (<a href="https://pubmed.ncbi.nlm.nih.gov/24852468/" rel="noopener nofollow" target="_blank">Robinson 2014</a>); the 1,060 nm laser at six and twelve weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/29320595/" rel="noopener nofollow" target="_blank">Bass 2018</a>); electromagnetic stimulation as four sessions over two to four weeks with follow-up at one to six months (<a href="https://pubmed.ncbi.nlm.nih.gov/37957393/" rel="noopener nofollow" target="_blank">Kohan 2024</a>) and one series followed for a year (<a href="https://pubmed.ncbi.nlm.nih.gov/32103232/" rel="noopener nofollow" target="_blank">Kinney 2020</a>); contactless radiofrequency with 75% of the waist reduction preserved at four years in 13 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/28940691/" rel="noopener nofollow" target="_blank">Fritz 2017</a>); tumescent liposuction followed for a mean of 8.9 years (<a href="https://pubmed.ncbi.nlm.nih.gov/32604228/" rel="noopener nofollow" target="_blank">Lipp 2020</a>).</p>
      <p>Translate that: three cryolipolysis cycles to each flank at €500 each is €3,000 for two to five millimetres off a pinch on each side, against liposuction of both flanks at €3,500–5,000 for the layer; a course of electromagnetic sessions is €1,500 for a few millimetres of muscle that need maintenance; an abdominoplasty is €8,000 and a fortnight off for the only result that removes skin. Cost per millimetre favours the operation; the devices buy the absence of an anaesthetic, a scar and a recovery, which for a small pocket in a slim person is a fair trade and for an apron of skin is a wasted one.</p>
    `,
  },
  {
    id: 'vetting',
    category: 'context',
    title: 'How to vet a body-contouring plan — the pinch, the scale, the weight-loss drug and the surgeon',
    tldr: 'Four questions before anything. Is the fat pinchable, or behind the muscle? Is the weight stable, and for how long — on a GLP-1 drug, weight plateaus after eight to twelve months and 63–74% comes back after stopping? Does the skin recoil, or does it hang? And who is operating — for liposuction, a surgeon with a facility, an anaesthetic plan and thromboembolism prophylaxis; for the devices, someone who will say "paradoxical adipose hyperplasia" before you do.',
    bodyHtml: `
      <p>The weight-loss drugs have rewritten the timing question. A systematic review and meta-analysis of 13,947 semaglutide patients found the weight plateau at "53.0 ± 8.2 weeks at 16% weight loss", and in the two studies of discontinuation "participants regained 62.7 and 74.3% of greatest on-treatment weight loss", so that "weight stabilizes after 8–12 months of semaglutide use, at which time body contouring surgery may be appropriate" — with caution "given initial data indicating weight recurrence exceeding 50% after drug discontinuation" (<a href="https://pubmed.ncbi.nlm.nih.gov/40835770/" rel="noopener nofollow" target="_blank">Garbaccio 2025</a>). The surgical review adds "increased wound dehiscence in semaglutide users versus matched controls (5.19% vs 2.78%)", retained gastric contents despite fasting in some users, and lean-mass loss that changes tissue quality (<a href="https://pubmed.ncbi.nlm.nih.gov/42298156/" rel="noopener nofollow" target="_blank">Venza 2026</a>); the aesthetic-medicine review sets out the facial and body consequences of the drugs and the timing of interventions (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845967/" rel="noopener nofollow" target="_blank">Haykal 2025</a>). After bariatric surgery, body contouring patients who had lost weight by bypass regained 2.3 lb on average against 22 lb in those who had dieted (<a href="https://pubmed.ncbi.nlm.nih.gov/18520903/" rel="noopener nofollow" target="_blank">Shermak 2008</a>).</p>
      <p>The surgeon questions come from the databases: combined procedures multiply liposuction's major-complication risk by 4.8 (<a href="https://pubmed.ncbi.nlm.nih.gov/28430878/" rel="noopener nofollow" target="_blank">Kaoutzanis 2017</a>) and trunk-liposuction combinations carried an adjusted odds ratio of 4.84 in a second database (<a href="https://pubmed.ncbi.nlm.nih.gov/37128702/" rel="noopener nofollow" target="_blank">Schafer 2023</a>), while a 55,956-patient abdominoplasty analysis found no added major risk from combination once risk factors were controlled (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11683586/" rel="noopener nofollow" target="_blank">Chaker 2024</a>); obesity, tobacco, diabetes and hypertension predicted dehiscence, haematoma and infection across 243,886 body-contouring patients (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10499002/" rel="noopener nofollow" target="_blank">Garoosi 2023</a>); and 95.5% of the venous thromboembolisms in an outpatient database occurred in patients whose risk score would not have triggered chemoprophylaxis (<a href="https://pubmed.ncbi.nlm.nih.gov/29117339/" rel="noopener nofollow" target="_blank">Keyes 2018</a>). Ask how the surgeon scores, prevents and follows up a clot; the answer tells you most of what you need.</p>
    `,
  },
];

const uses: Section[] = [
  {
    id: 'use-liposuction-contour',
    category: 'use',
    title: 'A pocket of fat that diet does not move: liposuction',
    tldr: 'The reference standard: the layer removed in one session, 0.7% major complications when done alone across 31,010 cases, no serious complications in 15,336 tumescent cases, 85.7% recommending it at a mean of 8.9 years with blinded evaluators still seeing the difference, and a meta-analysis of 3,583 large-volume cases with 3.35% major complications led by transfusion. Strong for the pocket in a person of stable weight with skin that recoils; it leaves the skin, and the visceral fat, exactly where they were.',
    evidence: 'strong',
    focus: 'surgical',
    sessions: '1 operation; touch-up in a minority',
    downtime: '3–7 days off; compression garment 4–6 weeks; final result 3–6 months',
    cost: '€2,500–8,000 per region set',
    bodyHtml: `
      <p>The safety file: "liposuction alone had a major complication rate of 0.7% with hematoma (0.15%), pulmonary complications (0.1%), infection (0.1%), and confirmed venous thromboembolism (0.06%)", with combined procedures (relative risk 4.81), age, BMI and hospital setting as independent predictors (<a href="https://pubmed.ncbi.nlm.nih.gov/28430878/" rel="noopener nofollow" target="_blank">Kaoutzanis 2017</a>); the tumescent survey (<a href="https://pubmed.ncbi.nlm.nih.gov/7743109/" rel="noopener nofollow" target="_blank">Hanke 1995</a>); large-volume liposuction averaging 7.7 litres with "3.35%" major complications — transfusion 2.89%, pulmonary embolism 0.18%, haematoma 0.16%, necrotising fasciitis 0.13% — and 11.6% minor, seroma commonest (<a href="https://pubmed.ncbi.nlm.nih.gov/33252626/" rel="noopener nofollow" target="_blank">Kanapathy 2021</a>); tumescent lidocaine safe to 55 mg/kg with peak plasma levels at four to eight hours (<a href="https://pubmed.ncbi.nlm.nih.gov/9063507/" rel="noopener nofollow" target="_blank">Ostad 1996</a>). The durability: at 8.9 years, surgeon and blinded evaluators scored volume and laxity significantly improved and "85.7% of the patients would recommend liposuction to their friends and family members" (<a href="https://pubmed.ncbi.nlm.nih.gov/32604228/" rel="noopener nofollow" target="_blank">Lipp 2020</a>). The technique comparisons: a randomised trial found 980 nm laser-assisted lipolysis reduced submental fat thickness more than liposuction with higher satisfaction (<a href="https://pubmed.ncbi.nlm.nih.gov/25968162/" rel="noopener nofollow" target="_blank">Valizadeh 2016</a>), while three studies found no advantage for a 10 W 1,064 nm laser over liposculpture alone and intra-operative burns in 2 of 20 patients with a higher-power combined device (<a href="https://pubmed.ncbi.nlm.nih.gov/20014258/" rel="noopener nofollow" target="_blank">Woodhall 2009</a>).</p>
      <p>Strong, graded on complication databases and outcome series rather than sham trials, because nobody randomises a flank against nothing; the <a href="/double-chin">double chin</a> and <a href="/upper-arms">upper arms</a> guides grade their regional versions moderate on thinner regional data. The caveats are physiological: the compensatory visceral-fat rise without exercise (<a href="https://pubmed.ncbi.nlm.nih.gov/22539589/" rel="noopener nofollow" target="_blank">Benatti 2012</a>), the transient effect on weight (<a href="https://pubmed.ncbi.nlm.nih.gov/26210190/" rel="noopener nofollow" target="_blank">Seretis 2015</a>), and skin that hangs afterwards if it did not recoil before.</p>
    `,
  },
  {
    id: 'use-loose-skin-abdomen',
    category: 'use',
    title: 'Loose abdominal skin and a separated muscle wall: abdominoplasty',
    tldr: 'The only treatment that removes skin: 25,478 abdominoplasties in one database with a 4.0% major-complication rate against 1.4% for other aesthetic surgery — haematoma, infection and venous thromboembolism the leading three — and 55,956 in another at 2.1%, highest for the fleur-de-lis; seroma the commonest minor problem, cut by two-thirds with progressive tension sutures; the highest clot risk in aesthetic surgery; and body-image scores from 13 to 90 in the patients who needed it most. Strong, for the abdomen that has skin to spare.',
    evidence: 'strong',
    focus: 'skin',
    sessions: '1 operation',
    downtime: '2 weeks off; no lifting for 6 weeks; scars mature over 12 months',
    cost: '€6,000–12,000',
    bodyHtml: `
      <p>The databases: "1,012 (4.0 percent overall rate versus 1.4 percent in other aesthetic surgery procedures)", of which "31.5 percent were hematomas, 27.2 percent were infections and 20.2 percent were suspected or confirmed venous thromboembolism", with male sex, age over 55, BMI of 30 or more, multiple procedures and hospital setting as risk factors (<a href="https://pubmed.ncbi.nlm.nih.gov/26505716/" rel="noopener nofollow" target="_blank">Winocour 2015</a>); an overall complication rate of 2.1% across seven abdominoplasty types, "fleur-de-lis abdominoplasty having the highest", with underweight, morbid obesity, diabetes and male sex as risks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11683586/" rel="noopener nofollow" target="_blank">Chaker 2024</a>). Seroma: progressive-tension and quilting sutures cut it to an occurrence ratio of 0.306 in a meta-analysis of ten randomised trials and other studies (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10995621/" rel="noopener nofollow" target="_blank">Liao 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/28482000/" rel="noopener nofollow" target="_blank">Ardehali 2017</a>). Clots: abdominoplasty "has the highest occurrence of VTE among aesthetic procedures", higher with liposuction, circumferential procedures, obesity and hormone therapy (<a href="https://pubmed.ncbi.nlm.nih.gov/31858207/" rel="noopener nofollow" target="_blank">Mittal 2020</a>), and 58% of the clots in an outpatient database were abdominoplasties (<a href="https://pubmed.ncbi.nlm.nih.gov/29117339/" rel="noopener nofollow" target="_blank">Keyes 2018</a>). The pay-off: in post-bariatric patients the abdominal appearance score rose from 13 to 90 and overall body image from 24 to 67 at a year, unaffected by minor complications (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7034793/" rel="noopener nofollow" target="_blank">Paul 2020</a>).</p>
      <p>Strong, as the operation with the most patients and the clearest indication on this page: skin that hangs, a rectus separation, and a weight that has been stable for six to twelve months. Weight regain afterwards averaged 7.6% in non-bariatric and 11.8% in post-bariatric patients over 43 months, which "should not contend with the psychological benefit" but does change the contour (<a href="https://pubmed.ncbi.nlm.nih.gov/36877608/" rel="noopener nofollow" target="_blank">Henderson 2023</a>). Muscle separation without loose skin is a different problem, and the electromagnetic row below has numbers for it.</p>
    `,
  },
  {
    id: 'use-double-chin',
    category: 'use',
    title: 'Under the chin: the licensed injectable, cryolipolysis and liposuction',
    tldr: 'The one region with a phase 3 injectable — deoxycholic acid, 66.5% improved against 22.2% on placebo — beside a cryolipolysis meta-analysis of eight studies (2.8 mm and about 20 cm³ per treatment), a 60-patient pivotal trial with 83% satisfied, a sequential protocol that took extreme submental fat down two grades, and submental liposuction that removes the layer above the muscle. Strong, graded in full in the double chin guide.',
    evidence: 'strong',
    focus: 'injectable',
    sessions: '2–4 injection sessions, 1–2 cryolipolysis cycles, or 1 liposuction',
    downtime: 'Days to 2 weeks of swelling (injections); hours (cryolipolysis); a chin strap for a week (liposuction)',
    cost: '€600–1,200 per injection session; €500–900 per cryolipolysis cycle; €2,000–4,000 liposuction',
    bodyHtml: `
      <p>The chin literature is the best in body contouring because it has a licensed drug and a pivotal device trial: submental cryolipolysis in 60 patients gave a 2.0 mm ultrasound fat reduction, 91% correct identification of baseline photographs by blinded physicians and 83% satisfaction (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5396277/" rel="noopener nofollow" target="_blank">Kilmer 2016</a>); 3D analysis measured 22.3 cm³ of volume lost at twelve weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/31099382/" rel="noopener nofollow" target="_blank">Jain 2020</a>); the meta-analysis of eight studies and 206 patients pooled "a mean reduction in submental fat thickness of −2.78 mm and volume of −19.57 cm³" (<a href="https://pubmed.ncbi.nlm.nih.gov/40473257/" rel="noopener nofollow" target="_blank">Do 2025</a>); sequential cryolipolysis then deoxycholic acid gave every patient with extreme submental fat at least one grade and 71% two grades (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9325515/" rel="noopener nofollow" target="_blank">Jalian 2022</a>); the histology of the drug shows adipocyte lysis, inflammation and septal thickening confined to the fat (<a href="https://pubmed.ncbi.nlm.nih.gov/30883481/" rel="noopener nofollow" target="_blank">Walker 2020</a>).</p>
      <p>Strong, as the <a href="/double-chin">double chin guide</a> grades deoxycholic acid and moderate as it grades cryolipolysis and liposuction; that guide and the <a href="/neck">neck guide</a> sort the fat above the muscle from the fat below it, the platysma bands and the loose skin, and the <a href="/mesotherapy">mesotherapy guide</a> grades the drug. A submental paradoxical hyperplasia needed a deep-plane neck lift to correct in one 2025 report (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11903390/" rel="noopener nofollow" target="_blank">Zimmerman 2025</a>).</p>
    `,
  },
  {
    id: 'use-abdomen-flanks-noninvasive',
    category: 'use',
    title: 'A belly pocket or love handles without surgery: cryolipolysis, ultrasound, laser and radiofrequency',
    tldr: 'The largest non-invasive literature: 19 cryolipolysis studies with caliper reductions of 14.7–28.5% and ultrasound reductions of 10.3–25.5%, a 518-patient series with 23% caliper reduction and 73% satisfaction, a meta-analysis of 30 studies in 3,158 people with 3.6 cm off the abdominal circumference and 80% satisfied; a sham-controlled ultrasound trial with 2.4 cm off the waist; a 1,060 nm laser study with 2.65 mm off the fat layer at twelve weeks. Moderate — a fifth to a quarter of a pinch, over months, for a pocket in a slim person.',
    evidence: 'moderate',
    focus: 'abdomen',
    sessions: '1–4 cycles or sessions per area; results at 8–12 weeks',
    downtime: 'Numbness, bruising, tenderness for days to weeks',
    cost: '€1,000–3,000 per area course',
    bodyHtml: `
      <p>Cryolipolysis: the systematic review of 19 studies found "average reduction in caliper measurement ranged from 14.67 percent to 28.5 percent" and by ultrasound "from 10.3 percent to 25.5 percent", no effect on lipids or liver tests, and "paradoxical adipose hyperplasia was described in one patient" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4444424/" rel="noopener nofollow" target="_blank">Ingargiola 2015</a>); the 518-patient series found "23% reduction in fat layer thickness at 3 months", 73% satisfaction, and the abdomen, back and flanks the most effective sites (<a href="https://pubmed.ncbi.nlm.nih.gov/23639062/" rel="noopener nofollow" target="_blank">Dierickx 2013</a>); the 2025 meta-analysis of 30 studies pooled an abdominal circumference change of −3.56 cm and suprailiac fat thickness of −5.22 mm at twelve weeks with 80.4% satisfaction, and adverse events of numbness in 49.5%, erythema 44.5%, oedema 30.5%, pain 28.8% and hyperpigmentation 2% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12246886/" rel="noopener nofollow" target="_blank">Ravindran 2025</a>); the contralateral-control 3D trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4123113/" rel="noopener nofollow" target="_blank">Garibyan 2014</a>); a plastic-surgery practice's 1,785 treated sites with three cases of transient pain and no adverse events (<a href="https://pubmed.ncbi.nlm.nih.gov/23858510/" rel="noopener nofollow" target="_blank">Stevens 2013</a>). Focused ultrasound: −2.44 cm against sham (<a href="https://pubmed.ncbi.nlm.nih.gov/21701341/" rel="noopener nofollow" target="_blank">Jewell 2011</a>) and −2.3 cm at twelve weeks across five treatment techniques (<a href="https://pubmed.ncbi.nlm.nih.gov/24852468/" rel="noopener nofollow" target="_blank">Robinson 2014</a>). The 1,060 nm laser: fat layer down 2.65 mm at twelve weeks with blinded evaluators picking the after-photograph 95% of the time, in all skin types (<a href="https://pubmed.ncbi.nlm.nih.gov/29320595/" rel="noopener nofollow" target="_blank">Bass 2018</a>). Radiofrequency: 24% and 22% ultrasound fat reduction of abdomen and flanks in a single-blinded pilot (<a href="https://pubmed.ncbi.nlm.nih.gov/32621362/" rel="noopener nofollow" target="_blank">Somenek 2021</a>).</p>
      <p>Moderate, in line with the <a href="/upper-arms">upper arms</a> and <a href="/double-chin">double chin</a> guides' grade for cryolipolysis. The arithmetic is honest: a 25 mm pinch becomes a 19–20 mm pinch after a cycle, visibly in a slim person and invisibly under an overweight one, with the paradoxical-hyperplasia risk of Part 03 attached to every cycle.</p>
    `,
  },
  {
    id: 'use-thighs',
    category: 'use',
    title: 'Inner and outer thighs and saddlebags',
    tldr: 'Cryolipolysis of the inner thigh thinned the fat layer 2.8 mm and the circumference 0.9 cm at sixteen weeks in 42 patients with 93% satisfied and blinded physicians picking the baseline photograph 91% of the time; a prototype applicator took 20% (3.3 mm) off; full-body electromagnetic stimulation with radiofrequency measured 17.6 mm off the saddlebags and 12.4 mm off the inner thighs on MRI in a preliminary series; liposuction removes the layer. Moderate — with the caveat that a thigh with loose skin hangs more once the fat beneath it is gone.',
    evidence: 'moderate',
    focus: 'thighs',
    sessions: '1–2 cryolipolysis cycles per thigh, or 1 liposuction',
    downtime: 'Numbness and bruising for days to weeks',
    cost: '€1,000–2,500 per pair (devices); €3,000–6,000 (liposuction)',
    bodyHtml: `
      <p>The inner-thigh trials: 42 patients who held their weight within five pounds, "independent photo review from 3 blinded physicians found 91% correct identification of baseline clinical photographs", ultrasound fat reduction of 2.8 mm, circumference −0.9 cm, 93% satisfied and no serious adverse events (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6680208/" rel="noopener nofollow" target="_blank">Zelickson 2015</a>); the prototype study with 83% attaining some reduction and a normalised mean of 20% or 3.3 mm (<a href="https://pubmed.ncbi.nlm.nih.gov/25111437/" rel="noopener nofollow" target="_blank">Boey 2014</a>); a rotational radiofrequency device with 6% thigh fat-layer reduction and 2% off thigh contours (<a href="https://pubmed.ncbi.nlm.nih.gov/38952073/" rel="noopener nofollow" target="_blank">Santos 2024</a>); and the full-body electromagnetic-plus-radiofrequency MRI series with fat thickness down 17.57 mm in the saddlebag region and 12.43 mm in the inner thighs, and 2.8–3.6 cm off thigh circumferences (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10087156/" rel="noopener nofollow" target="_blank">Katz 2023</a>). The systematic review of focused ultrasound reports "effective noninvasive lifting" of the abdomen and thighs with fewer than 5% transient side effects and no standard protocol (<a href="https://pubmed.ncbi.nlm.nih.gov/40184185/" rel="noopener nofollow" target="_blank">Haykal 2025</a>).</p>
      <p>Moderate. The inner thigh is the site where skin quality decides the result: a slim thigh with a discrete pad responds; a thigh whose skin has already lost its recoil is a thigh-lift question, graded below, and the <a href="/cellulite">cellulite guide</a> explains why fat removal can make the dimples more visible rather than less.</p>
    `,
  },
  {
    id: 'use-muscle-definition',
    category: 'use',
    title: 'Abdominal definition, a firmer buttock and a separated muscle wall: electromagnetic stimulation',
    tldr: 'Supramaximal contractions from a magnetic coil, four sessions in two weeks: MRI showed 18.6% less fat, 15.4% thicker rectus muscle and 10.4% less diastasis at two months, held at a year in a follow-up cohort; the 2022 sham-controlled trial of the radiofrequency-combined version found 28.3% less fat and 24.2% more muscle at three months with no change in the sham arm; gluteal muscle volume rose 13% on MRI. Independent reviews call the photographs modest and the variance high. Moderate for a few millimetres of muscle that need maintaining.',
    evidence: 'moderate',
    focus: 'muscle',
    sessions: '4 sessions of 30 min over 2–4 weeks; maintenance every 3–6 months',
    downtime: 'Muscle soreness for a day',
    cost: '€1,200–2,500 per course',
    bodyHtml: `
      <p>The imaging series: "average 18.6% reduction of adipose tissue thickness, 15.4% increase in rectus abdominis muscle thickness, and 10.4% reduction in rectus abdominus separation" at two months, more in patients of normal BMI, with a 3.8 cm sub-umbilical circumference change and no weight change (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6585690/" rel="noopener nofollow" target="_blank">Kinney 2019</a>); one-year follow-up with 14.6% less fat, 19.1% thicker muscle and 10.5% less diastasis "not related to weight fluctuations" (<a href="https://pubmed.ncbi.nlm.nih.gov/32103232/" rel="noopener nofollow" target="_blank">Kinney 2020</a>); postpartum women with 20.2% fat reduction, 21.3% muscle increase and 22.7% less separation at three months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7733372/" rel="noopener nofollow" target="_blank">Jacob 2020</a>); gluteal muscle volume up 10.8% at one month and 13.2% at three with "visible buttock lifting" and fat unaffected (<a href="https://pubmed.ncbi.nlm.nih.gov/32947301/" rel="noopener nofollow" target="_blank">Palm 2021</a>), and 24.7% with synchronised radiofrequency against 15.9% without (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9837370/" rel="noopener nofollow" target="_blank">DiBernardo 2023</a>). The controlled trial: radiofrequency and electromagnetic stimulation together against sham, fat thickness −20.5% at one month and −28.3% at three, rectus thickness +21.5% and +24.2%, maintained at six months, "whereas the sham group showed no significant changes" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9028295/" rel="noopener nofollow" target="_blank">Samuels 2022</a>). Combined with cryolipolysis, the pairing scored highest on blinded photographs in a feasibility study (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7515474/" rel="noopener nofollow" target="_blank">Kilmer 2020</a>).</p>
      <p>Moderate for the abdomen and buttocks, on one sham-controlled trial and a consistent set of imaging series against two independent reviews' scepticism (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9869942/" rel="noopener nofollow" target="_blank">Swanson 2023</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/37957393/" rel="noopener nofollow" target="_blank">Kohan 2024</a>); the <a href="/upper-arms">upper arms guide</a> keeps the arm version at emerging on its single uncontrolled study. Two millimetres of rectus muscle is what a few months of training produces, and like training it is lost without maintenance; a separation wider than a few centimetres with loose skin is an abdominoplasty.</p>
    `,
  },
  {
    id: 'use-buttock-shape',
    category: 'use',
    title: 'A fuller or higher buttock: fat transfer, and the electromagnetic alternative',
    tldr: 'Fat transfer to the buttocks works — surgeons reported 198,857 cases to a task-force survey — and kills more patients than any other cosmetic operation: 32 fatal pulmonary fat emboli in that survey, 25 confirmed US deaths in five years, and a mortality estimated at 1 in 3,448 in 2017 that fell to 1 in 14,952 in 2019 after the rules changed to subcutaneous injection only. Electromagnetic stimulation lifts the gluteal muscle by 13% on MRI without a needle. Moderate — for the shape, with the safety row read first.',
    evidence: 'moderate',
    focus: 'buttocks',
    sessions: '1 operation (fat transfer) or a course of 4 (electromagnetic)',
    downtime: '2–3 weeks without sitting on the graft; 6 weeks compression',
    cost: '€6,000–12,000 (fat transfer); €1,500–2,500 (electromagnetic course)',
    bodyHtml: `
      <p>The task-force report: 692 surgeons, 198,857 cases, "32 fatalities from pulmonary fat emboli as well as 103 nonfatal pulmonary fat emboli", 3% of surgeons with a patient death, deep-muscle injection associated with the fatal and non-fatal emboli, and "twenty-five fatalities were confirmed in the United States over the last 5 years" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5846701/" rel="noopener nofollow" target="_blank">Mofid 2017</a>). The follow-up survey two years after the recommendations: pulmonary fat embolism "1 in 2492 compared with 1 in 1030 reported in 2017", mortality trending "from 1 in 3448 in 2017 to 1 in 14,952 in 2019", deep-muscle injection down from 13.1% to 0.8% of surgeons, and cannulas of 4.1 mm or more up from 4.1% to 29.8% (<a href="https://pubmed.ncbi.nlm.nih.gov/32306045/" rel="noopener nofollow" target="_blank">Rios 2020</a>). The 2026 review contrasts the gluteal veins and volumes with breast and facial lipofilling's lower embolism risk and calls for strict subcutaneous injection, ultrasound guidance and registries (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13451889/" rel="noopener nofollow" target="_blank">Aad 2026</a>); the safety review notes larger graft volumes bring more fat necrosis (<a href="https://pubmed.ncbi.nlm.nih.gov/31136476/" rel="noopener nofollow" target="_blank">Chopan 2019</a>). The non-surgical option: gluteal muscle volume up 13.2% at three months on MRI (<a href="https://pubmed.ncbi.nlm.nih.gov/32947301/" rel="noopener nofollow" target="_blank">Palm 2021</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9837370/" rel="noopener nofollow" target="_blank">DiBernardo 2023</a>).</p>
      <p>Moderate for the augmentation itself, graded on series and surveys rather than trials, and the reason the safety row exists. A surgeon who injects only under the skin, with ultrasound, through a large cannula, in a facility that can treat an embolus, is the whole of the risk reduction; a "BBL" at a discount abroad is the whole of the risk.</p>
    `,
  },
  {
    id: 'use-massive-weight-loss',
    category: 'use',
    title: 'After massive weight loss: lower body lift, thigh lift and the staged plan',
    tldr: 'The lower body lift produced at least one complication in 70% of 50 post-bariatric patients — wound dehiscence in 60%, seroma in 34% — and a re-operation in 10%; medial thigh lifts complicated in 42.7% of 447 patients with dehiscence in 18% and seroma in 8%; the reviews of post-bariatric thigh surgery describe an operation still being redesigned. Quality of life rises steeply and weight is kept better after bypass than after dieting. Moderate — a high-complication, high-value surgery for the patient who has already done the hard part.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: '2–4 staged operations over 12–24 months',
    downtime: '3–6 weeks off per stage; a year of scar maturation',
    cost: '€12,000–25,000 (lower body lift); €6,000–12,000 (thigh lift)',
    bodyHtml: `
      <p>The prospective series: 50 patients with a mean excess-weight loss of 86%, "a total of 35 (70%) patients developed at least one complication", 10% needing surgical revision, dehiscence in 60% and seroma in 34%, complications related to the maximum BMI reached and to age (<a href="https://pubmed.ncbi.nlm.nih.gov/23040202/" rel="noopener nofollow" target="_blank">Kitzinger 2013</a>). The thigh: "complications were observed in 191/447 patients (42.72%)", mostly dehiscence (18.3%) and seroma (8.1%), with no thromboembolism or sepsis in the reviewed series (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4728900/" rel="noopener nofollow" target="_blank">Sisti 2015</a>); the post-bariatric thigh-lift review of 17 articles and 496 patients finds the liposuction-assisted inner thigh lift with combined scars "effective and versatile for most patients" (<a href="https://pubmed.ncbi.nlm.nih.gov/39341177/" rel="noopener nofollow" target="_blank">Susini 2024</a>). The pay-off and the weight: body-image scores from 24 to 67 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7034793/" rel="noopener nofollow" target="_blank">Paul 2020</a>); post-bypass patients gained 2.3 lb after contouring against 22 lb for dieters (<a href="https://pubmed.ncbi.nlm.nih.gov/18520903/" rel="noopener nofollow" target="_blank">Shermak 2008</a>); 11.8% regain over 43 months in the post-bariatric cohort (<a href="https://pubmed.ncbi.nlm.nih.gov/36877608/" rel="noopener nofollow" target="_blank">Henderson 2023</a>). On a GLP-1 drug the same questions apply with a plateau at 8–12 months and a regain of more than half after stopping (<a href="https://pubmed.ncbi.nlm.nih.gov/40835770/" rel="noopener nofollow" target="_blank">Garbaccio 2025</a>).</p>
      <p>Moderate: a surgery that works, in the sense of removing the skin and restoring a body the patient can live in, at complication rates that would be unacceptable anywhere else in aesthetic surgery and are accepted here because nothing else does the job. Weight stable for a year, nutrition corrected, smoking stopped, and a surgeon who does these every week are the conditions; the <a href="/upper-arms">upper arms guide</a> grades the arm lift on the same terms.</p>
    `,
  },
  {
    id: 'use-arms',
    category: 'use',
    title: 'The upper arms',
    tldr: 'Cryolipolysis thinned the arm fat layer 15.3% in a pilot; electromagnetic stimulation with radiofrequency measured 25.5% less fat and 23.9% more triceps on MRI at three months; radiofrequency-assisted liposuction contracted the inner-arm skin 13–15% against 8–11% for aggressive liposuction alone; the arm lift removes skin at a 9.9% poor-scar and 7.8% recurrence rate across 1,578 patients. Moderate, graded in full in the upper arms guide.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: '1 cycle, 1 course, or 1 operation',
    downtime: 'Hours (devices) to 2–3 weeks (arm lift)',
    cost: '€600–1,500 (devices); €3,000–6,000 (liposuction); €5,000–9,000 (arm lift)',
    bodyHtml: `
      <p>The arm evidence: one cryolipolysis cycle with a flat applicator gave "a mean reduction in fat layer thickness of 15.3%, corresponding to 2.03 mm" at eight weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/26735803/" rel="noopener nofollow" target="_blank">Lee 2016</a>); electromagnetic stimulation with radiofrequency reduced arm fat 25.5% and increased muscle 23.9% on MRI at three months in 25 completers with 85% satisfied (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10005810/" rel="noopener nofollow" target="_blank">Jacob 2023</a>); radiofrequency-assisted liposuction reduced anterior and posterior arm skin surface 15.0% and 13.1% at one year against 10.9% and 8.1% for aggressive superficial liposuction (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4527633/" rel="noopener nofollow" target="_blank">Chia 2015</a>); the brachioplasty meta-analysis of 29 studies and 1,578 patients found aberrant scarring 9.9%, recurrence 7.8%, dehiscence 6.8%, seroma 5.9%, infection 3.6%, nerve complications 2.5% and lymphoedema 2.5% (<a href="https://pubmed.ncbi.nlm.nih.gov/34936607/" rel="noopener nofollow" target="_blank">Aljerian 2022</a>).</p>
      <p>Moderate across the board, as the <a href="/upper-arms">upper arms guide</a> grades each of them with the self-check that sorts fat from skin from muscle; this row exists so that the arm is not missing from the body map.</p>
    `,
  },
  {
    id: 'use-visceral-fat',
    category: 'use',
    title: 'The firm, round belly: visceral fat behind the muscle',
    tldr: 'A belly that does not pinch is fat inside the abdominal cavity, which no cryolipolysis applicator, laser or cannula can reach; one retrospective MRI analysis found 17.8% less visceral fat at three months after radiofrequency with electromagnetic stimulation, held at six, in a manufacturer-linked series with no control. Emerging at best — weight loss, and the drugs that produce it, are the treatment, and liposuction of the fat in front of it raised visceral fat in the randomised trial.',
    evidence: 'emerging',
    focus: 'abdomen',
    sessions: '—',
    downtime: '—',
    cost: 'Spend it on the weight, not the wall',
    bodyHtml: `
      <p>The one measurement: "a VAT reduction of 17.8% on average at 3-month follow-up, maintaining the results up to 6 months" on MRI after electromagnetic-plus-radiofrequency treatment in a retrospective analysis with no control group (<a href="https://pubmed.ncbi.nlm.nih.gov/37154787/" rel="noopener nofollow" target="_blank">Kent 2023</a>). Against it, the physiology: liposuction of subcutaneous abdominal fat triggered a 10% compensatory rise in visceral fat within six months in the randomised trial's non-exercising arm (<a href="https://pubmed.ncbi.nlm.nih.gov/22539589/" rel="noopener nofollow" target="_blank">Benatti 2012</a>), and the effect of lipectomy on weight and fat mass faded within months in the systematic review (<a href="https://pubmed.ncbi.nlm.nih.gov/26210190/" rel="noopener nofollow" target="_blank">Seretis 2015</a>). Spot reduction by exercise, long dismissed, did appear in a randomised trial in which abdominal endurance exercise reduced trunk fat by 7% against no change with treadmill running at matched energy expenditure (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10680576/" rel="noopener nofollow" target="_blank">Brobakken 2023</a>).</p>
      <p>Emerging for the device claim; the treatment is weight loss, whose drugs are covered in the <a href="/anti-aging-50s">50s guide</a> and whose consequences for skin are in the <a href="/skin-tightening">tightening guide</a>. A clinic that offers a fat-freezing cycle for a belly it could not pinch is selling the cycle.</p>
    `,
  },
  {
    id: 'use-weight-loss',
    category: 'use',
    title: 'Losing weight, or reshaping a whole body, with devices',
    tldr: 'No body-contouring device produces weight loss: a cryolipolysis cycle clears a few grams of fat, the largest meta-analysis found no study reporting weight before and after electromagnetic treatment, the sham-controlled laser trial regained a third of an inch within a fortnight, and the lipectomy review found the effect on weight gone by three months. Limited for the expectation that fills the consultation, and the reason the weight-loss drugs sit above every device on this page.',
    evidence: 'limited',
    focus: 'general',
    sessions: '—',
    downtime: '—',
    cost: 'Not the device',
    bodyHtml: `
      <p>The numbers: weight "did not change significantly (average −0.5 lb)" in the electromagnetic MRI series (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6585690/" rel="noopener nofollow" target="_blank">Kinney 2019</a>) and "no studies reported weight change before and after treatment" in the systematic review (<a href="https://pubmed.ncbi.nlm.nih.gov/37957393/" rel="noopener nofollow" target="_blank">Kohan 2024</a>); "mean weight change was +0.1 lb" in the laser trial (<a href="https://pubmed.ncbi.nlm.nih.gov/29320595/" rel="noopener nofollow" target="_blank">Bass 2018</a>); the low-level laser group "demonstrated a gain of 0.31 total inches" in the two weeks after treatment ended (<a href="https://pubmed.ncbi.nlm.nih.gov/20014253/" rel="noopener nofollow" target="_blank">Jackson 2009</a>); lipectomy's effect on weight and fat mass was "transient", present at one to two months and absent at three to twenty (<a href="https://pubmed.ncbi.nlm.nih.gov/26210190/" rel="noopener nofollow" target="_blank">Seretis 2015</a>). The cryolipolysis meta-analysis did pool a BMI change of −1.8 at twelve weeks across uncontrolled studies (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12246886/" rel="noopener nofollow" target="_blank">Ravindran 2025</a>), which in the absence of controls says more about who books a course of fat freezing than about the device.</p>
      <p>Limited. The sequence that works is the opposite one: lose the weight, hold it for six to twelve months, then contour what is left — the skin with surgery, the pockets with a device or a cannula. The <a href="/cellulite">cellulite guide</a> and <a href="/sauna">sauna guide</a> grade the other weight-loss claims made in the same rooms.</p>
    `,
  },
  {
    id: 'use-cellulite',
    category: 'use',
    title: 'Cellulite',
    tldr: 'Fat removal does not treat cellulite and can unmask it: liposuction, fat grafting and radiofrequency-assisted liposuction are graded limited for dimples in the cellulite guide, where subcision, the collagenase injection and the clinic energy devices carry the evidence. Limited here; graded there.',
    evidence: 'limited',
    focus: 'thighs',
    sessions: '—',
    downtime: '—',
    cost: 'See the cellulite guide',
    bodyHtml: `
      <p>Cellulite is fibrous septa tethering the skin over lobulated fat; taking the fat out from under a tethered skin leaves the tethers and a looser envelope. The non-invasive fat trials measured fat thickness and circumference, not dimples (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4444424/" rel="noopener nofollow" target="_blank">Ingargiola 2015</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/37431699/" rel="noopener nofollow" target="_blank">Wolska 2023</a>), and the one body-contouring study to report dermal changes found only non-significant trends in echogenicity with a 6% rise in thigh dermal thickness (<a href="https://pubmed.ncbi.nlm.nih.gov/38952073/" rel="noopener nofollow" target="_blank">Santos 2024</a>).</p>
      <p>Limited, as the <a href="/cellulite">cellulite guide</a> grades fat removal for dimples; that guide grades what does work, and the <a href="/skin-tightening">tightening guide</a> the ultrasound-plus-biostimulator combination that improved cellulite scores by 4.5 points in one study.</p>
    `,
  },
];

const products: Section[] = [
  {
    id: 'prod-liposuction',
    category: 'product',
    title: 'Liposuction (tumescent, power-assisted, ultrasound-assisted, laser-assisted, water-jet)',
    tldr: 'A cannula removes the fat layer under tumescent local anaesthesia or general anaesthesia: the most performed cosmetic operation, 0.7% major complications alone and 4.8 times that combined, no serious complications in 15,336 tumescent cases, 3.35% major complications in large volumes led by transfusion, a 1 in 5,000 death rate in the 1990s census, and an 8.9-year satisfaction of 86%. The energy-assisted variants add skin contraction and, at high power, burns.',
    evidence: 'strong',
    focus: 'surgical',
    note: 'Top pick: tumescent liposuction of a discrete pocket in a stable-weight patient, by a surgeon who does it weekly, alone rather than bundled',
    sessions: '1',
    downtime: '3–7 days; garment 4–6 weeks',
    cost: '€2,500–8,000',
    bodyHtml: `
      <p>The evidence is in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/28430878/" rel="noopener nofollow" target="_blank">Kaoutzanis 2017</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/7743109/" rel="noopener nofollow" target="_blank">Hanke 1995</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/33252626/" rel="noopener nofollow" target="_blank">Kanapathy 2021</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/10627013/" rel="noopener nofollow" target="_blank">Grazer 2000</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32604228/" rel="noopener nofollow" target="_blank">Lipp 2020</a>). The variants: laser-assisted lipolysis at 980 nm beat liposuction for submental fat thickness in a randomised trial (<a href="https://pubmed.ncbi.nlm.nih.gov/25968162/" rel="noopener nofollow" target="_blank">Valizadeh 2016</a>) while a 10 W 1,064 nm laser added nothing and a higher-power combined device burned 2 of 20 (<a href="https://pubmed.ncbi.nlm.nih.gov/20014258/" rel="noopener nofollow" target="_blank">Woodhall 2009</a>); the sculpting techniques — "abdominal etching" of muscle lines — produced contour irregularities in 12%, seromas in 10% and satisfaction of 98% in 50 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/30921120/" rel="noopener nofollow" target="_blank">Husain 2019</a>) and 96% satisfaction in a prospective 25 (<a href="https://pubmed.ncbi.nlm.nih.gov/31844942/" rel="noopener nofollow" target="_blank">Niddam 2020</a>); men had similar overall major-complication rates to women in aesthetic surgery with more haematomas (<a href="https://pubmed.ncbi.nlm.nih.gov/29045566/" rel="noopener nofollow" target="_blank">Kaoutzanis 2018</a>).</p>
      <p>Strong. The choice between tumescent local and general anaesthesia, between a dermatology office and a hospital, and between one procedure and a bundle is where the safety literature splits, and it is the patient's choice to make with the numbers in front of them.</p>
    `,
  },
  {
    id: 'prod-excisional-surgery',
    category: 'product',
    title: 'Excisional surgery: abdominoplasty, mini and fleur-de-lis, lower body lift, thigh lift, arm lift',
    tldr: 'The skin cut away and the wall tightened: abdominoplasty at 2.1–4.0% major complications across 25,000–56,000 patients with clots, haematoma and infection leading; the fleur-de-lis and the combined operations at the top of the range; the post-weight-loss lifts at 43–70% complications and a re-operation in a tenth; seroma the everyday problem and progressive tension sutures its answer. Strong for the abdomen, moderate for the rest, and the only category that removes skin.',
    evidence: 'strong',
    focus: 'surgical',
    note: 'Top pick: abdominoplasty with progressive tension sutures and a written thromboembolism plan, for skin that hangs after a weight that has been stable for a year',
    sessions: '1 per region; staged after massive weight loss',
    downtime: '2–6 weeks off; scars mature over a year',
    cost: '€6,000–25,000',
    bodyHtml: `
      <p>The evidence is in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/26505716/" rel="noopener nofollow" target="_blank">Winocour 2015</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11683586/" rel="noopener nofollow" target="_blank">Chaker 2024</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10995621/" rel="noopener nofollow" target="_blank">Liao 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/31858207/" rel="noopener nofollow" target="_blank">Mittal 2020</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/23040202/" rel="noopener nofollow" target="_blank">Kitzinger 2013</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4728900/" rel="noopener nofollow" target="_blank">Sisti 2015</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/34936607/" rel="noopener nofollow" target="_blank">Aljerian 2022</a>). The comorbidity database of 243,886 patients found obesity, tobacco, diabetes and hypertension predicting dehiscence, haematoma and infection (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10499002/" rel="noopener nofollow" target="_blank">Garoosi 2023</a>); combined procedures raised 30-day complications from 4.2% to 7.6% overall, driven by trunk liposuction and breast augmentation rather than abdominoplasty combinations (<a href="https://pubmed.ncbi.nlm.nih.gov/37128702/" rel="noopener nofollow" target="_blank">Schafer 2023</a>).</p>
      <p>Strong for abdominoplasty and moderate for the lifts, as the <a href="/upper-arms">upper arms guide</a> grades the arm lift. The scar is the price of the only real answer to loose skin, and its length is proportional to how much skin there is; a mini-abdominoplasty for a small apron and a fleur-de-lis for a large one are the same principle with different lines.</p>
    `,
  },
  {
    id: 'prod-cryolipolysis',
    category: 'product',
    title: 'Cryolipolysis (CoolSculpting Elite, Cooltech, Clatuu, Cristal and copies)',
    tldr: 'A vacuum or flat applicator cools the fat to the temperature at which adipocytes die: 19 studies, a 518-patient series, a contralateral-control 3D trial, a 30-study meta-analysis and a real-world review of 18,203 cycles with 2.05% adverse events per cycle; numbness in half, a five-week loss of skin sensation on biopsy, and paradoxical adipose hyperplasia in about 1 in 455 — seven times the manufacturer\'s figure — correctable only by liposuction. The best-documented device, sold in salons.',
    evidence: 'moderate',
    focus: 'noninvasive',
    note: 'Top pick for the slim person with one or two discrete pockets who will not have surgery — after the hyperplasia conversation, on a device with a published trial',
    sessions: '1–3 cycles per area, 6–8 weeks apart',
    downtime: 'Numbness and tenderness for 2–6 weeks',
    cost: '€300–800 per cycle',
    bodyHtml: `
      <p>The efficacy is in Part 01 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4444424/" rel="noopener nofollow" target="_blank">Ingargiola 2015</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/23639062/" rel="noopener nofollow" target="_blank">Dierickx 2013</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12246886/" rel="noopener nofollow" target="_blank">Ravindran 2025</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4123113/" rel="noopener nofollow" target="_blank">Garibyan 2014</a>). The real-world review: 3,262 patients, 18,203 cycles, a median of four cycles per patient, the lower abdomen the commonest site, and "87 patients exhibited 180 adverse events (2.05% of cycles), including 3 body areas (n = 2) with paradoxical adipose hyperplasia" (<a href="https://pubmed.ncbi.nlm.nih.gov/39829238/" rel="noopener nofollow" target="_blank">Friedmann 2025</a>). The hyperplasia meta-analysis: 28 studies, 13,078 patients, "the pooled incidence of PAH was 0.22% (95% CI, 0.10–0.47), with 29 cases identified (1 in 455 patients)", higher than manufacturer reports, with only four studies following patients long enough to see it (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12662051/" rel="noopener nofollow" target="_blank">Mah 2025</a>); the case series describes the initial reduction followed by "abnormal fat growth exceeding the original volume" (<a href="https://pubmed.ncbi.nlm.nih.gov/38573568/" rel="noopener nofollow" target="_blank">Stein 2024</a>). Nerves: "hyposensitivity started between two to seven days after cryolipolysis and persisted for at least thirty-five days", with reduced epidermal and dermal nerve-fibre density on biopsy (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4640987/" rel="noopener nofollow" target="_blank">Garibyan 2015</a>), and atypical neuropathic pain after submental treatment in a case series (<a href="https://pubmed.ncbi.nlm.nih.gov/30640270/" rel="noopener nofollow" target="_blank">Gregory 2019</a>).</p>
      <p>Moderate, as the <a href="/double-chin">double chin</a> and <a href="/upper-arms">upper arms</a> guides grade it. Between brands the applicator fit, the cooling profile and the published trials differ; between operators, the pinch assessment and the hyperplasia disclosure differ more. A patient who is told the 1 in 455 figure before the first cycle and treated on a pinchable pocket by someone trained on the device is the trial population; a salon customer with a round belly is not.</p>
    `,
  },
  {
    id: 'prod-hifem',
    category: 'product',
    title: 'High-intensity electromagnetic muscle stimulation, with or without radiofrequency (Emsculpt, Emsculpt Neo, CoolTone, Transform)',
    tldr: 'A coil induces thousands of supramaximal contractions in thirty minutes: MRI series with 15–21% thicker rectus and 15–20% less fat, a year of durability in one cohort, gluteal volume up 13%, and the one sham-controlled randomised trial in body contouring with a device that does two things at once — 28% less fat, 24% more muscle, sham unchanged. Independent reviews call the photographs modest. Comfortable, uncontroversial in safety, and a result that lapses like a gym membership.',
    evidence: 'moderate',
    focus: 'muscle',
    note: 'Top pick: the radiofrequency-combined version for a slim abdomen or a flat buttock that wants definition rather than volume, four sessions and a maintenance plan',
    sessions: '4 × 30 min over 2–4 weeks; maintenance every 3–6 months',
    downtime: 'Soreness for a day',
    cost: '€1,200–2,500 per course',
    bodyHtml: `
      <p>The evidence is in Part 01 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6585690/" rel="noopener nofollow" target="_blank">Kinney 2019</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32103232/" rel="noopener nofollow" target="_blank">Kinney 2020</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9028295/" rel="noopener nofollow" target="_blank">Samuels 2022</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32947301/" rel="noopener nofollow" target="_blank">Palm 2021</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9837370/" rel="noopener nofollow" target="_blank">DiBernardo 2023</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9869942/" rel="noopener nofollow" target="_blank">Swanson 2023</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/37957393/" rel="noopener nofollow" target="_blank">Kohan 2024</a>). The radiofrequency-plus-stimulation combination device from a second manufacturer measured 5.4 mm less ultrasound fat and 6.1 mm less caliper thickness at three months with a non-significant 0.43 cm circumference change in 15 patients (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9298471/" rel="noopener nofollow" target="_blank">Novak 2022</a>); the full-body MRI series treated abdomen, thighs and buttocks on one day with fat thickness down 10.7–17.6 mm and gluteus maximus up 7.4 mm (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10087156/" rel="noopener nofollow" target="_blank">Katz 2023</a>).</p>
      <p>Moderate for the abdomen and buttocks; the <a href="/upper-arms">upper arms guide</a> keeps the arm at emerging. Contraindicated with implanted electrical devices, metal in the field and pregnancy; useless for an apron of skin; and honest only when sold as what a training programme does, delivered lying down.</p>
    `,
  },
  {
    id: 'prod-hifu-fat',
    category: 'product',
    title: 'Focused and non-thermal ultrasound for fat (Liposonix, UltraShape)',
    tldr: 'Thermal focused ultrasound has the field\'s best trial — 180 patients randomised against sham, 2.4 cm off the waist at the higher dose, bruising and discomfort the price — and a five-technique study with 2.3 cm at twelve weeks; the non-thermal version has series with circumference and caliper changes and wheals that fade in hours. Moderate on the evidence; the trial device has largely left the market, which is the practical caveat.',
    evidence: 'moderate',
    focus: 'noninvasive',
    note: 'Top pick where a clinic still runs the thermal device, for the waist, one session; otherwise cryolipolysis has the wider file',
    sessions: '1–3 sessions',
    downtime: 'Bruising and tenderness for days',
    cost: '€800–2,500 per area',
    bodyHtml: `
      <p>The sham-controlled trial (<a href="https://pubmed.ncbi.nlm.nih.gov/21701341/" rel="noopener nofollow" target="_blank">Jewell 2011</a>) and the technique comparison with "a statistically significant mean circumferential reduction of −2.3 ± 2.9 cm" at twelve weeks and improvement from four weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/24852468/" rel="noopener nofollow" target="_blank">Robinson 2014</a>); the non-thermal device combined with radiofrequency in 17 Asian patients with significant circumference and caliper changes, pain of 2.3 out of 10 and six transient wheals (<a href="https://pubmed.ncbi.nlm.nih.gov/26352171/" rel="noopener nofollow" target="_blank">Shek 2016</a>); the systematic review of focused ultrasound for tightening and contouring (<a href="https://pubmed.ncbi.nlm.nih.gov/40184185/" rel="noopener nofollow" target="_blank">Haykal 2025</a>).</p>
      <p>Moderate. The randomised trial is the reason the tier is not lower; the disappearance of the device from most clinics is the reason the row is short. Salon "ultrasonic cavitation" is not this technology and is graded in the last row of this part.</p>
    `,
  },
  {
    id: 'prod-laser-1060',
    category: 'product',
    title: '1,060 nm diode laser for fat (SculpSure and successors)',
    tldr: 'Flat applicators heat the fat layer for 25 minutes: the abdominal study met its three endpoints with 2.65 mm off the fat layer at twelve weeks, blinded evaluators picking the after-photograph 95% of the time, a quarter of subjects with darker skin types and no serious events — with no sham arm and the manufacturer\'s design. Emerging: one measured, uncontrolled trial per site.',
    evidence: 'emerging',
    focus: 'noninvasive',
    note: 'Not a pick over cryolipolysis or ultrasound until it has a controlled trial; reasonable where a clinic has one and treats a small pocket',
    sessions: '1–2 sessions',
    downtime: 'Tenderness and induration for 1–3 weeks',
    cost: '€800–1,500 per session',
    bodyHtml: `
      <p>The trial: "mean reduction in fat layer thickness from baseline was statistically significant at both 6 weeks (1.5 mm) and 12 weeks (2.65 mm)", weight change +0.1 lb, side effects "edema, tenderness, and induration mostly resolving within 1–3 weeks" (<a href="https://pubmed.ncbi.nlm.nih.gov/29320595/" rel="noopener nofollow" target="_blank">Bass 2018</a>); the review places laser among the four energy classes with objective and subjective effect (<a href="https://pubmed.ncbi.nlm.nih.gov/37431699/" rel="noopener nofollow" target="_blank">Wolska 2023</a>).</p>
      <p>Emerging. A few millimetres of pinch for a few hundred euros, without the hyperplasia risk of cooling but also without its evidence base; the row would move up with a sham-controlled trial that nobody has published.</p>
    `,
  },
  {
    id: 'prod-rf-fat',
    category: 'product',
    title: 'Radiofrequency for fat (Vanquish, truSculpt, Exilis, Zionic)',
    tldr: 'Contact or contactless radiofrequency heats the fat layer over four to six sessions: a five-patient MRI case study with 5.4 mm off, a 16-patient series with circumference and BMI changes, a pilot with 24% and 22% ultrasound fat reduction at abdomen and flanks, and a four-year follow-up in which 13 patients kept 75% of a 5.9 cm waist reduction. No sham arm anywhere. Emerging, as the cellulite guide grades the same class.',
    evidence: 'emerging',
    focus: 'noninvasive',
    note: 'Not a pick; acceptable as a comfortable add-on for someone who will not have cooling or suction, with the results photographed rather than measured by tape',
    sessions: '4–6 weekly sessions',
    downtime: 'Warmth and redness for hours',
    cost: '€300–600 per session',
    bodyHtml: `
      <p>The studies: MRI fat thickness down 5.36 mm in five subjects under a contactless applicator (<a href="https://pubmed.ncbi.nlm.nih.gov/27050705/" rel="noopener nofollow" target="_blank">Downie 2016</a>); "statistically significant reductions in BMI and abdominal circumference in all 16 patients" (<a href="https://pubmed.ncbi.nlm.nih.gov/33356001/" rel="noopener nofollow" target="_blank">Qin 2021</a>); the four-year follow-up with 75.2% of the original waist reduction preserved and none of 13 patients larger than baseline (<a href="https://pubmed.ncbi.nlm.nih.gov/28940691/" rel="noopener nofollow" target="_blank">Fritz 2017</a>); the monopolar pilot (<a href="https://pubmed.ncbi.nlm.nih.gov/32621362/" rel="noopener nofollow" target="_blank">Somenek 2021</a>); the rotational device with 8% and 6% fat-layer reductions and 80% satisfaction (<a href="https://pubmed.ncbi.nlm.nih.gov/38952073/" rel="noopener nofollow" target="_blank">Santos 2024</a>).</p>
      <p>Emerging, in line with the <a href="/cellulite">cellulite guide</a>'s grade for radiofrequency. A tape measure and a five-patient MRI study are what the class has; the <a href="/skin-tightening">tightening guide</a> covers the same devices' other claim.</p>
    `,
  },
  {
    id: 'prod-injection-lipolysis',
    category: 'product',
    title: 'Injection lipolysis off the chin (deoxycholic acid off-label, phosphatidylcholine-deoxycholate, Aqualyx and copies)',
    tldr: 'The detergent that is licensed under the chin, injected elsewhere: a seven-woman randomised trial found the phosphatidylcholine-deoxycholate cocktail reduced abdominal fat thickness by inducing adipocyte necrosis with macrophage infiltration and no systemic metabolic change; the drug\'s own histology shows lysis, inflammation and septal thickening confined to fat; the body cocktails have a 25-study review in which 38% of studies reached significance and a record of nodules, ulcers and necrosis. Emerging, graded in the mesotherapy guide.',
    evidence: 'emerging',
    focus: 'injectable',
    note: 'Not a pick beyond the chin; if used, the licensed molecule from a clinician who maps the nerves, on a small pocket, with the swelling weeks expected',
    sessions: '2–4 sessions 4–6 weeks apart',
    downtime: '1–2 weeks of swelling, bruising and numbness per session',
    cost: '€300–800 per session',
    bodyHtml: `
      <p>The randomised trial: "treatment with PC-DC significantly reduced the thickness of the anterior subcutaneous abdominal fat", with "rapid increases in crown-like structures, macrophage infiltration" and unchanged C-reactive protein, lipids and glucose, in seven completers (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3667691/" rel="noopener nofollow" target="_blank">Reeds 2013</a>); the licensed drug's phase 1 histology in subcutaneous fat (<a href="https://pubmed.ncbi.nlm.nih.gov/30883481/" rel="noopener nofollow" target="_blank">Walker 2020</a>); the chin trials in Part 01. The body cocktails' review, bans and necrosis reports are in the <a href="/mesotherapy">mesotherapy guide</a>, which grades them emerging for body fat and limited for everything sold beside them.</p>
      <p>Emerging, in line with that guide. A syringe cannot do what a cannula does on a body, and the chin licence does not travel with the vial.</p>
    `,
  },
  {
    id: 'prod-rfal-plasma',
    category: 'product',
    title: 'Energy-assisted liposuction for skin contraction (BodyTite, Renuvion, VASER)',
    tldr: 'Liposuction with a radiofrequency probe, helium plasma or ultrasound energy delivered under the skin to contract the envelope: radiofrequency-assisted liposuction of the arms reduced skin surface 13–15% at a year against 8–11% for aggressive liposuction alone; helium plasma carries a 3,508-patient meta-analysis with 92% satisfaction and 5–15% complications and a regulator\'s safety communication. Moderate, for the pocket with mild-to-moderate skin excess that is not yet an excision.',
    evidence: 'moderate',
    focus: 'surgical',
    note: 'Top pick: for the arm, abdomen or thigh with fat and mildly loose skin, from a surgeon who reads the internal temperature and stops',
    sessions: '1',
    downtime: '1–2 weeks of swelling; garment 4–6 weeks',
    cost: '€4,000–9,000',
    bodyHtml: `
      <p>The arm comparison: "at 1 year, the measured surface area reductions on the anterior arms averaged 15.0% for RFAL and 10.9% for SupL" and posteriorly 13.1% against 8.1%, with no complications in the series and the aggressive superficial technique carrying "a higher complication rate, risk for contour" deformity (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4527633/" rel="noopener nofollow" target="_blank">Chia 2015</a>). The helium-plasma meta-analysis, the neck clearance trial and the regulator's communication are in the <a href="/skin-tightening">tightening guide</a>, which grades the subdermal devices moderate in a surgeon's hands; the <a href="/upper-arms">upper arms guide</a> grades the arm version.</p>
      <p>Moderate. The energy buys a percentage of skin contraction on top of the fat removal — enough for a mildly loose envelope, not for an apron — and adds the burn, seroma and nerve risks of heat under the skin to liposuction's own.</p>
    `,
  },
  {
    id: 'prod-fat-grafting-buttock',
    category: 'product',
    title: 'Fat transfer to the buttocks (the "Brazilian butt lift") and gluteal implants',
    tldr: 'Fat harvested by liposuction and injected into the buttocks: the shape is the surgeon\'s and the survival of the graft is partial; the mortality was 1 in 3,448 in 2017 and about 1 in 15,000 two years after the rules changed to subcutaneous injection, cannulas over 4 mm and no downward angling; deep-muscle injection, still practised by 0.8% of surveyed surgeons, is the fatal variable. Moderate for the augmentation; the safety row is mandatory reading.',
    evidence: 'moderate',
    focus: 'buttocks',
    note: 'Top pick only with a surgeon who injects subcutaneously under ultrasound guidance in an accredited facility — and never as a package abroad',
    sessions: '1; a second graft in some',
    downtime: '2–3 weeks without sitting on the graft; 6 weeks compression',
    cost: '€6,000–12,000',
    bodyHtml: `
      <p>The evidence is in Part 01 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5846701/" rel="noopener nofollow" target="_blank">Mofid 2017</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32306045/" rel="noopener nofollow" target="_blank">Rios 2020</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13451889/" rel="noopener nofollow" target="_blank">Aad 2026</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/31136476/" rel="noopener nofollow" target="_blank">Chopan 2019</a>). Implants are the alternative for the patient without fat to harvest, with their own infection, seroma and displacement rates and none of the embolism risk; they are not graded here for want of fetched trials.</p>
      <p>Moderate. The operation that made the headlines is also the one whose safety improved fastest once surgeons changed technique; the task-force rules are now the standard of care, and a clinic that cannot recite them should not be doing it.</p>
    `,
  },
  {
    id: 'prod-lllt',
    category: 'product',
    title: 'Low-level laser and LED "lipo" (Zerona, Verjú, i-Lipo, lipo-laser pads)',
    tldr: 'Red light that is said to open pores in fat cells so that they leak: two sham-controlled trials measured 3.5 inches off combined circumferences and 2.15 cm off the waist, and a 2025 systematic review pooled 2.48 cm against 0.64 cm in controls across 160 participants with heterogeneous protocols; the effect regressed within a fortnight in the first trial and no independent group has shown durable fat loss. Limited, as the red-light guide grades it: a tape-measure effect.',
    evidence: 'limited',
    focus: 'noninvasive',
    note: 'Not a pick; the pads in a salon are this technology at a fraction of the trial dose',
    sessions: '6–12 sessions',
    downtime: 'None',
    cost: '€50–150 per session',
    bodyHtml: `
      <p>The trials: 3.51 inches off waist, hips and thighs combined against 0.68 in controls over two weeks, and "a gain of 0.31 total inches collectively across all three sites" in the two weeks after (<a href="https://pubmed.ncbi.nlm.nih.gov/20014253/" rel="noopener nofollow" target="_blank">Jackson 2009</a>); cumulative waist loss of 2.15 cm over four weeks of eight treatments against 1.35 cm in controls, with the in-vitro claim that laser releases triglycerides without lysing cells (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5225499/" rel="noopener nofollow" target="_blank">Caruso-Davis 2011</a>); the systematic review with 160 participants, waist −2.48 cm versus −0.64, effect sizes "from −0.4 cm to −8.7 cm" and protocols too varied to fix a dose (<a href="https://pubmed.ncbi.nlm.nih.gov/41423522/" rel="noopener nofollow" target="_blank">Mustafa 2025</a>).</p>
      <p>Limited, in line with the <a href="/red-light-therapy">red-light guide</a>'s verdict on the fat-reduction claim: sponsor-run trials with tape-measure endpoints, a mechanism that has never been shown to remove a fat cell, and a regain curve that starts the week the sessions stop.</p>
    `,
  },
  {
    id: 'prod-salon-devices',
    category: 'product',
    title: 'Salon "fat freezing", ultrasonic cavitation, body wraps, lymphatic drainage and home devices',
    tldr: 'Low-power copies of the clinic devices and the treatments that were never devices: cavitation-with-radiofrequency trials measure leptin and circumference in the overweight without a fat-layer outcome; wraps and drainage move water; home cryolipolysis produced full-thickness abdominal wounds in a woman following online instructions; salon cooling devices without the applicator engineering deliver the frostbite risk with less of the fat effect. Limited, and the walk-away row.',
    evidence: 'limited',
    focus: 'other',
    note: 'Do not buy; the money spent on ten cavitation sessions is one cryolipolysis cycle in a clinic or a consultation with a surgeon',
    sessions: '—',
    downtime: '—',
    cost: '€40–150 per session, repeatedly',
    bodyHtml: `
      <p>The cavitation literature is metabolic rather than cosmetic: a randomised study found serum leptin fell and abdominal and waist circumference reduced after combined radiofrequency and ultrasound cavitation in overweight adults whose weight fell in both arms (<a href="https://pubmed.ncbi.nlm.nih.gov/31336456/" rel="noopener nofollow" target="_blank">Arabpour-Dahoue 2019</a>). The home case: full-thickness abdominal wounds after do-it-yourself cryolipolysis, a xenograft, a panniculectomy, and the authors' warning about "online information of dubious quality" (<a href="https://pubmed.ncbi.nlm.nih.gov/27068348/" rel="noopener nofollow" target="_blank">Leonard 2016</a>). Wraps, brushes, vibration and drainage are graded limited in the <a href="/cellulite">cellulite guide</a>, and the consumer versions of every device in this part are graded in the <a href="/home-devices">home devices guide</a>.</p>
      <p>Limited. The physics of fat removal is a dose — of cold, heat, ultrasound or suction — that a salon or a living room cannot safely deliver; what is delivered instead is a tape measure and a receipt.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-pah',
    category: 'safety',
    title: 'Paradoxical adipose hyperplasia: the fat that grows back harder after freezing',
    tldr: 'In about 1 in 455 cryolipolysis patients across 28 studies and 13,078 people — seven times the figure the manufacturer used for a decade — the treated pocket shrinks and then, months later, grows into a firm, larger, applicator-shaped mass that only liposuction, and in one submental case a deep-plane neck lift, removes. Men and older applicators appear more often in the case series; only four studies followed patients long enough to count it. Numbness in half of patients and a five-week loss of skin sensation are the everyday harms.',
    bodyHtml: `
      <p>The incidence (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12662051/" rel="noopener nofollow" target="_blank">Mah 2025</a>), the description "initial reduction in fat volume, followed by abnormal fat growth exceeding the original volume in the treated area" with an incidence "thought to be underreported" (<a href="https://pubmed.ncbi.nlm.nih.gov/38573568/" rel="noopener nofollow" target="_blank">Stein 2024</a>), the two cases in 3,262 real-world patients (<a href="https://pubmed.ncbi.nlm.nih.gov/39829238/" rel="noopener nofollow" target="_blank">Friedmann 2025</a>) and the submental case corrected by a deep-plane neck lift because "dense structural material and fibrotic subplatysmal fat" made liposuction inadequate (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11903390/" rel="noopener nofollow" target="_blank">Zimmerman 2025</a>). The nerves: sensory loss from two to seven days to at least 35 days with fewer nerve fibres on biopsy (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4640987/" rel="noopener nofollow" target="_blank">Garibyan 2015</a>), neuropathic pain after submental cycles (<a href="https://pubmed.ncbi.nlm.nih.gov/30640270/" rel="noopener nofollow" target="_blank">Gregory 2019</a>), and numbness in 49.5% in the pooled adverse events (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12246886/" rel="noopener nofollow" target="_blank">Ravindran 2025</a>).</p>
      <p>Rules: the 1 in 455 figure stated and signed before the first cycle; a pinch assessment that excludes visceral fat and loose skin; photographs at baseline; a review at three and six months, because the hyperplasia declares itself late; and a plan, in writing, for who does the liposuction if it happens. The <a href="/double-chin">double chin guide</a> has the submental version.</p>
    `,
  },
  {
    id: 'safety-liposuction',
    category: 'safety',
    title: 'Liposuction: clots, infection, fluid and the first night',
    tldr: 'The 1990s census put mortality at 1 in 5,224 with pulmonary thromboembolism the leading cause and many deaths on the first night home; the European survey counted 23 deaths in five years, mostly infections; the modern database puts major complications at 0.7% alone and 4.8 times that with other procedures; large volumes bring transfusion in 2.9% and necrotising fasciitis in 0.13%. The tumescent series under local anaesthesia reported none of these. Lidocaine is safe to 55 mg/kg with a peak at four to eight hours, and lasers under the skin burn at high power.',
    bodyHtml: `
      <p>The mortality and complication data (<a href="https://pubmed.ncbi.nlm.nih.gov/10627013/" rel="noopener nofollow" target="_blank">Grazer 2000</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/22134559/" rel="noopener nofollow" target="_blank">Tierney 2011</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/28430878/" rel="noopener nofollow" target="_blank">Kaoutzanis 2017</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/33252626/" rel="noopener nofollow" target="_blank">Kanapathy 2021</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/7743109/" rel="noopener nofollow" target="_blank">Hanke 1995</a>); the lidocaine pharmacology (<a href="https://pubmed.ncbi.nlm.nih.gov/9063507/" rel="noopener nofollow" target="_blank">Ostad 1996</a>); the laser burns (<a href="https://pubmed.ncbi.nlm.nih.gov/20014258/" rel="noopener nofollow" target="_blank">Woodhall 2009</a>); contour irregularities in 12% of sculpting cases (<a href="https://pubmed.ncbi.nlm.nih.gov/30921120/" rel="noopener nofollow" target="_blank">Husain 2019</a>); the visceral-fat compensation (<a href="https://pubmed.ncbi.nlm.nih.gov/22539589/" rel="noopener nofollow" target="_blank">Benatti 2012</a>).</p>
      <p>Rules: one procedure rather than a bundle, or a frank discussion of the fivefold risk; a volume limit and a facility that can transfuse if the aspirate will exceed a few litres; a thromboembolism risk score and prophylaxis decided before the day; someone at home the first night; a same-day call for fever, spreading redness, breathlessness or calf pain; and exercise afterwards as part of the prescription, because the trial says the fat moves inward without it.</p>
    `,
  },
  {
    id: 'safety-surgery',
    category: 'safety',
    title: 'Excisional surgery: seroma, wounds, clots and the weight-loss drug',
    tldr: 'Abdominoplasty has the highest venous-thromboembolism rate in aesthetic surgery, and 95.5% of the clots in one database occurred in patients whose risk score would not have triggered prophylaxis; seroma is the commonest complication and falls by two-thirds with progressive tension sutures; wound dehiscence ran 60% after a lower body lift and 18% after a thigh lift; semaglutide users dehisced at 5.19% against 2.78%, and some had retained gastric contents despite fasting. Obesity, smoking, diabetes and hypertension predicted every wound problem across 243,886 patients.',
    bodyHtml: `
      <p>The data (<a href="https://pubmed.ncbi.nlm.nih.gov/29117339/" rel="noopener nofollow" target="_blank">Keyes 2018</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/31858207/" rel="noopener nofollow" target="_blank">Mittal 2020</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10995621/" rel="noopener nofollow" target="_blank">Liao 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/23040202/" rel="noopener nofollow" target="_blank">Kitzinger 2013</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4728900/" rel="noopener nofollow" target="_blank">Sisti 2015</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/42298156/" rel="noopener nofollow" target="_blank">Venza 2026</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10499002/" rel="noopener nofollow" target="_blank">Garoosi 2023</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/26505716/" rel="noopener nofollow" target="_blank">Winocour 2015</a>).</p>
      <p>Rules: a risk score for clots and a written prophylaxis plan, with the knowledge that the score under-calls the risk; progressive tension sutures asked for by name; smoking stopped for six weeks either side; diabetes and blood pressure controlled; the GLP-1 drug discussed with the anaesthetist, because the stomach may not be empty, and the weight stable on or off it for the months the meta-analysis describes; and a surgeon who does the operation weekly, in a facility that keeps patients overnight when the operation is long.</p>
    `,
  },
  {
    id: 'safety-fat-embolism',
    category: 'safety',
    title: 'Buttock fat grafting: the pulmonary fat embolism',
    tldr: 'Fat injected into or below the gluteal muscle can enter the large veins and reach the lungs: 32 fatal and 103 non-fatal emboli reported by 692 surgeons, 25 confirmed US deaths in five years, and a mortality of about 1 in 3,000 that fell to about 1 in 15,000 once injection moved to the subcutaneous plane with larger cannulas and no downward angling. Ultrasound guidance and mandatory registries are the current asks. Breast and facial fat grafting carry a fraction of the risk; facial grafting carries its own arterial one.',
    bodyHtml: `
      <p>The reports (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5846701/" rel="noopener nofollow" target="_blank">Mofid 2017</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32306045/" rel="noopener nofollow" target="_blank">Rios 2020</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13451889/" rel="noopener nofollow" target="_blank">Aad 2026</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/31136476/" rel="noopener nofollow" target="_blank">Chopan 2019</a>).</p>
      <p>Rules, in the surgeon's words or not at all: subcutaneous injection only; a cannula of 4 mm or more; no downward angle; ultrasound on the field; an accredited facility with the means to manage an embolus; and a refusal to operate on a patient who arrives with a discount package, because the deaths in the reports cluster where the rules were not followed. The <a href="/facial-volume-loss">volume guide</a> covers facial fat grafting and its different risk.</p>
    `,
  },
  {
    id: 'safety-who-not',
    category: 'safety',
    title: 'Who should not have it',
    tldr: 'Anyone with a BMI over 30 for the devices (the pinch is not the problem) and with added surgical risk for the operations; anyone whose weight is still moving, on a drug or off it; anyone planning a pregnancy before an abdominoplasty; cold-sensitive conditions for cryolipolysis; pacemakers and metal for the electromagnetic and radiofrequency devices; smokers, uncontrolled diabetes and clotting histories for surgery; and anyone who expects a device to change the number on the scale or the skin that hangs over the pocket.',
    bodyHtml: `
      <p>The reasoning is in the safety rows and the databases: BMI of 30 or more raised abdominoplasty risk 1.3-fold and every BMI unit raised liposuction risk 5% (<a href="https://pubmed.ncbi.nlm.nih.gov/26505716/" rel="noopener nofollow" target="_blank">Winocour 2015</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/28430878/" rel="noopener nofollow" target="_blank">Kaoutzanis 2017</a>); the weight-loss-drug timing and wound data (<a href="https://pubmed.ncbi.nlm.nih.gov/40835770/" rel="noopener nofollow" target="_blank">Garbaccio 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/42298156/" rel="noopener nofollow" target="_blank">Venza 2026</a>); the comorbidity analysis (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10499002/" rel="noopener nofollow" target="_blank">Garoosi 2023</a>). Cryoglobulinaemia, cold urticaria and paroxysmal cold haemoglobinuria are the device makers' contraindications to cooling, and implanted electrical devices and metal in the field theirs to electromagnetic and radiofrequency energy; neither has trial data because the trials excluded them.</p>
      <p>The commonest reason not to have it is the expectation: a device for a round belly, an operation before the weight has settled, a fat transfer from a clinic that will not say "subcutaneous". The <a href="/skin-tightening">tightening guide</a>, <a href="/cellulite">cellulite guide</a> and <a href="/upper-arms">upper arms guide</a> sort the adjacent problems; the weight itself is not on this page.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-permanent',
    category: 'faq',
    title: 'Is the fat gone for good?',
    tldr: 'The cells removed by freezing or suction do not return; the ones left behind, and the visceral ones, grow with weight. Four-year radiofrequency results kept 75% of the change; nine-year liposuction results were still visible to blinded evaluators; a randomised trial found visceral fat up 10% in six months without exercise.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/28940691/" rel="noopener nofollow" target="_blank">Fritz 2017</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32604228/" rel="noopener nofollow" target="_blank">Lipp 2020</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/22539589/" rel="noopener nofollow" target="_blank">Benatti 2012</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/26210190/" rel="noopener nofollow" target="_blank">Seretis 2015</a>.)</p>
    `,
  },
  {
    id: 'faq-how-much',
    category: 'faq',
    title: 'How much fat does one session remove?',
    tldr: 'A cryolipolysis cycle: a fifth to a quarter of the pinch, two to five millimetres, about 40–60 cc by 3D imaging. Focused ultrasound: about 2 cm off a waist. Liposuction: the layer, by the litre. None of it is a kilogram on the scale.',
    bodyHtml: `
      <p>(<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4444424/" rel="noopener nofollow" target="_blank">Ingargiola 2015</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4123113/" rel="noopener nofollow" target="_blank">Garibyan 2014</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/21701341/" rel="noopener nofollow" target="_blank">Jewell 2011</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/33252626/" rel="noopener nofollow" target="_blank">Kanapathy 2021</a>.)</p>
    `,
  },
  {
    id: 'faq-noninvasive-vs-lipo',
    category: 'faq',
    title: 'Fat freezing or liposuction?',
    tldr: 'Freezing for one or two small pockets in a slim person who will not have surgery, at 1 in 455 odds of a hard overgrowth; liposuction for the layer, once, with 0.7% major complications when done alone. Neither for loose skin or a round belly.',
    bodyHtml: `
      <p>Part 01 grades both; Part 03 has the hyperplasia and the clot data (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12662051/" rel="noopener nofollow" target="_blank">Mah 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/28430878/" rel="noopener nofollow" target="_blank">Kaoutzanis 2017</a>).</p>
    `,
  },
  {
    id: 'faq-emsculpt',
    category: 'faq',
    title: 'Does Emsculpt build real muscle?',
    tldr: 'A few millimetres of it, on MRI and in one sham-controlled trial, with less fat over it — like a few months of training, and lost like them without maintenance. Independent reviews call the photographs modest.',
    bodyHtml: `
      <p>(<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9028295/" rel="noopener nofollow" target="_blank">Samuels 2022</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6585690/" rel="noopener nofollow" target="_blank">Kinney 2019</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9869942/" rel="noopener nofollow" target="_blank">Swanson 2023</a>.)</p>
    `,
  },
  {
    id: 'faq-weight',
    category: 'faq',
    title: 'Will body contouring help me lose weight?',
    tldr: 'No. The devices leave the scale where it was; liposuction\'s effect on weight fades within months and shifts fat inward without exercise; the weight-loss drugs and surgery do the losing, and contouring tidies what they leave.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/26210190/" rel="noopener nofollow" target="_blank">Seretis 2015</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/22539589/" rel="noopener nofollow" target="_blank">Benatti 2012</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/37957393/" rel="noopener nofollow" target="_blank">Kohan 2024</a>.)</p>
    `,
  },
  {
    id: 'faq-glp1-timing',
    category: 'faq',
    title: 'I am on a weight-loss injection — when can I have surgery?',
    tldr: 'When the weight has been stable: on semaglutide that is eight to twelve months in, and the plan should survive the 63–74% regain seen after stopping. Tell the anaesthetist about the drug; the stomach may not be empty, and wounds open more often.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/40835770/" rel="noopener nofollow" target="_blank">Garbaccio 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/42298156/" rel="noopener nofollow" target="_blank">Venza 2026</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845967/" rel="noopener nofollow" target="_blank">Haykal 2025</a>.)</p>
    `,
  },
  {
    id: 'faq-bbl-safe',
    category: 'faq',
    title: 'Is a Brazilian butt lift safe now?',
    tldr: 'Safer: mortality fell from about 1 in 3,000 to about 1 in 15,000 in two years once surgeons stopped injecting into muscle. It remains the cosmetic operation with a mortality figure, and the rules are the only protection.',
    bodyHtml: `
      <p>(<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5846701/" rel="noopener nofollow" target="_blank">Mofid 2017</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32306045/" rel="noopener nofollow" target="_blank">Rios 2020</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13451889/" rel="noopener nofollow" target="_blank">Aad 2026</a>.)</p>
    `,
  },
  {
    id: 'faq-cost',
    category: 'faq',
    title: 'What does it cost?',
    tldr: 'From €300 for a cryolipolysis cycle to €25,000 for a lower body lift; per millimetre of fat the operation is cheaper, per day of recovery the device is. The prices drawer has the bands.',
    bodyHtml: `
      <p>The <a href="/upper-arms">upper arms</a>, <a href="/double-chin">double chin</a> and <a href="/cellulite">cellulite</a> guides price their regions; the <a href="/skin-tightening">tightening guide</a> the devices sold for the skin.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What body contouring is — fat, skin and muscle',
    intro: '',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you book: who does what, the prices and the vetting',
    intro: '',
    sections: context,
  },
  {
    id: 'uses',
    title: 'What people book body contouring for — graded by evidence',
    intro: 'Twelve reasons people book, from the pocket that liposuction removes with a 31,010-case safety file to the weight loss no device delivers. Sorted by evidence, not by what the clinic advertises.',
    sections: uses,
  },
  {
    id: 'products',
    title: 'The technologies, cannula to coil',
    intro: 'Twelve ways to remove fat, remove skin or add muscle, graded on their own trials — what they measured, what they cost in recovery, and what the complication series and the mortality surveys recorded.',
    sections: products,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The fat that grows back harder, the clots and infections of suction, the wounds of excision, the embolism of the buttock graft, and who should keep their money.',
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
  abdomen: 'Abdomen',
  flanks: 'Flanks',
  thighs: 'Thighs',
  buttocks: 'Buttocks',
  muscle: 'Muscle',
  skin: 'Loose skin',
  noninvasive: 'Non-invasive',
  injectable: 'Injectable',
  surgical: 'Surgical',
  other: 'Other',
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
