/**
 * Non-surgical skin tightening guide — single source of truth (in-clinic layout).
 *
 * Consumed by /skin-tightening. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: every energy device tightens by heating collagen — at a
 * point (focused ultrasound), in bulk (monopolar radiofrequency), along a
 * needle (radiofrequency microneedling), under the skin (helium plasma,
 * radiofrequency-assisted liposuction) — and the trials measure millimetres:
 * a 1.7–2.2 mm brow, a 0.44-grade laxity change that is 37% of a facelift's,
 * a 1.4-point neck score. Part 01 grades what people book a tightening
 * treatment for; Part 02 grades the technologies. Tiers stay consistent with
 * the guides that already grade these rows (/sagging-skin, /jowls, /neck,
 * /double-chin, /hooded-eyes, /forehead-lines, /eye-bags, /microneedling,
 * /upper-arms, /decolletage, /collagen-loss). Prices are indicative
 * Western/Central European and UK private rates as of September 2026, not
 * quotes.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea =
  | 'brow'
  | 'lowerface'
  | 'neck'
  | 'eyes'
  | 'body'
  | 'texture'
  | 'ultrasound'
  | 'rf'
  | 'invasive'
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
  'Every non-surgical tightening device does one thing: heat collagen until it contracts and the skin rebuilds it thicker over three to six months. Focused ultrasound heats points 1.5–4.5 mm deep, monopolar radiofrequency heats the whole dermis in bulk, radiofrequency microneedling heats along needles, and the "minimally invasive" devices — helium plasma, radiofrequency-assisted liposuction — heat the underside of the skin through an incision. None of them moves a ligament or removes skin, which is what a facelift does.',
  'The measured results are millimetres, and the field\'s honest trial says so: a blinded, randomised comparison of fractional radiofrequency against a surgical facelift found 0.44 grades of laxity improvement against 1.20 — 16% against 49% from baseline, or "37% that of the surgical face-lift". Focused ultrasound lifts a brow by 1.7–2.2 mm in rater-blinded studies and produced clinically significant lower-face tightening in 70% in the one randomised controlled trial; a retrospective series found a fifth improved and a sixth worse.',
  'Focused ultrasound has the most controlled evidence and the most variable results; monopolar radiofrequency matched it head-to-head in a randomised split-face trial and is the gentlest for thin, crepey skin; radiofrequency microneedling has randomised trials for texture and scars and a thinner file for laxity, plus a regulator\'s file of fat loss, scarring and burns; helium plasma has a prospective neck trial (82.5% improved at six months) and a meta-analysis of 3,508 patients, in a surgeon\'s hands under sedation.',
  'What fails: threads, whose one randomised trial found the lift gone by 60 days whatever the thread count, with dimpling in 10% and 35% swelling in the meta-analysis; home devices; and anything sold as "tightening" for a jowl, a heavy neck or hollow cheeks, where descent and volume loss — not loose skin — are the problem. The facelift meta-analyses give the comparison: 88–94% satisfaction and 10–17% complications for an operation that removes the skin instead of shrinking it.',
  'The harms are specific and mostly preventable: fat loss where the energy went too deep (ultrasound, microneedle radiofrequency, early high-energy monopolar protocols), nerve injury on the jawline and temple, burns from devices without visualisation or temperature control, and two published eye injuries — a traumatic cataract and a scarred cornea — from ultrasound applied on an eyelid. A 2026 surgical series found fibrosis, lost tissue planes and unpredictable fat in 68% of neck-lift patients who had prior non-surgical treatments, so every session now is a decision about a later operation.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'how-tightening-works',
    category: 'concept',
    title: 'How energy tightens skin — heat, contraction and the collagen that follows',
    tldr: 'Collagen fibres contract when heated past about 60 °C and the wound-healing response that follows lays down new collagen and elastin over three to six months; the devices differ only in where and how they put the heat. Biopsies after focused ultrasound show thicker dermis and straightened elastic fibres; after fractional radiofrequency, zones of denatured collagen replaced by new dermis by ten weeks. The change is a few percent in dermal thickness and a few millimetres on a photograph — not a lift.',
    bodyHtml: `
      <p>The histology is consistent across technologies. After intense focused ultrasound in Asian patients, biopsies "showed greater dermal collagen with thickening of the dermis and straightening of elastic fibers in the reticular dermis" (<a href="https://pubmed.ncbi.nlm.nih.gov/21806707/" rel="noopener nofollow" target="_blank">Suh 2011</a>), and in a later series "increased collagen fibers in the lower dermis and between fat layers" (<a href="https://pubmed.ncbi.nlm.nih.gov/25594130/" rel="noopener nofollow" target="_blank">Suh 2015</a>). Bipolar fractional radiofrequency produced "zones of denatured collagen separated by zones of spared dermis" that "were replaced by new dermal tissue by 10 weeks", with rising heat-shock protein 47, tropoelastin, fibrillin and procollagens 1 and 3 (<a href="https://pubmed.ncbi.nlm.nih.gov/19143021/" rel="noopener nofollow" target="_blank">Hantash 2009</a>). Synchronised radiofrequency with muscle stimulation raised collagen-occupied area by 25–30% and elastin by 67–103% on biopsy at one and three months against no change in controls (<a href="https://pubmed.ncbi.nlm.nih.gov/38468421/" rel="noopener nofollow" target="_blank">Goldberg 2024</a>).</p>
      <p>The clinical translation of that biology is what this guide grades, and it is small: a brow height change of 1.7 mm (<a href="https://pubmed.ncbi.nlm.nih.gov/20115948/" rel="noopener nofollow" target="_blank">Alam 2010</a>), a 0.29 mL volume change in a lower face against +0.42 mL on the untreated side (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11756818/" rel="noopener nofollow" target="_blank">Zhu 2024</a>), a 1.96 mm skin contraction at 24 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/38411259/" rel="noopener nofollow" target="_blank">Oku 2024</a>). Skin that is thin and crepey, with mild laxity and little descent, shows it; a jowl made of fallen fat and a stretched ligament does not. The <a href="/sagging-skin">sagging skin guide</a> explains how to tell the two apart before booking anything.</p>
    `,
  },
  {
    id: 'what-the-trials-measure',
    category: 'concept',
    title: 'What the trials measure — and the one that compared a device with a facelift',
    tldr: 'Most tightening studies are open-label, manufacturer-funded, graded on photographs by the treating clinic, and reported as "percent improved". The exceptions define the field: a blinded, randomised photograph comparison found fractional radiofrequency gave 37% of a facelift\'s laxity improvement; a randomised split-face trial found monopolar radiofrequency and focused ultrasound indistinguishable; a randomised trial with 3D imaging found 70% of ultrasound patients clinically tighter at three months; and a retrospective series found investigators rated a fifth improved and a sixth worse while nearly half the patients thought they had improved.',
    bodyHtml: `
      <p>The benchmark study randomised blinded graders to unmarked before-and-after photographs of patients who had either fractional radiofrequency or a surgical facelift: "a mean grade improvement of 1.20 for patients in the surgical face-lift group and of 0.44 for FRF-treated patients on a 4-point laxity grading scale", improvements "of 16% for FRF treatment compared with 49% for the surgical face-lift", so that "the mean laxity improvement from a single FRF treatment was 37% that of the surgical face-lift" — with 93% of the device patients satisfied or very satisfied (<a href="https://pubmed.ncbi.nlm.nih.gov/20404228/" rel="noopener nofollow" target="_blank">Alexiades-Armenakas 2010</a>). That pairing — a small measured change and a high satisfaction score — recurs everywhere in this guide. In the retrospective lower-face ultrasound series, investigators scored 20.9% improved, 62.5% unchanged and 16.7% worse, while 45.9% of the same patients reported improvement, "a statistically significant difference" the authors attribute to photographs missing "what subjects feel but we cannot see" (<a href="https://pubmed.ncbi.nlm.nih.gov/32770566/" rel="noopener nofollow" target="_blank">Yalici-Armagan 2020</a>).</p>
      <p>The systematic reviews describe the rest: 16 eligible studies of microfocused ultrasound, "all the studies involved female patients", brow lifts of 0.47–1.7 mm, submental reductions of 26–45 mm², 92% improved on investigator scales at 90 days and mild patient-rated improvements "from 42% (90 days) to 53% (360 days)", and "longer-term follow-up data are not available" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9861614/" rel="noopener nofollow" target="_blank">Contini 2023</a>); 17 HIFU studies in 477 participants with "moderate improvement" scores of 2.7 out of 5 and pain of 4.2 out of 10, "multiple and different outcome variables" and no long follow-up in most (<a href="https://pubmed.ncbi.nlm.nih.gov/32026164/" rel="noopener nofollow" target="_blank">Ayatollahi 2020</a>); 41 radiofrequency-microneedling studies with "inconsistent" reporting of the temperature, pulse width and cooling that decide what the device did (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13433423/" rel="noopener nofollow" target="_blank">Kumar 2026</a>). Read any "94% satisfied" against the 37%.</p>
    `,
  },
  {
    id: 'can-and-cant',
    category: 'concept',
    title: 'What non-surgical tightening can and cannot do',
    tldr: 'Can: raise a brow a couple of millimetres, firm a mildly loose lower face and upper neck for a year, thicken thin crepey skin, tighten the skin over a liposuctioned neck, improve texture and fine lines as a bonus. Cannot: lift a jowl, remove a turkey neck, fill a hollow, tighten skin that has been stretched by a large weight loss, or replace the operation it is sold as an alternative to. The trials were done on women with mild to moderate laxity and a BMI under 30, and the results belong to them.',
    bodyHtml: `
      <p>The largest lower-face ultrasound study is explicit about who responds: 93 patients, "improvement in skin laxity in 58.1%" on blinded review, and "no change was detected in 54.5% of patients whose BMI exceeded 30 kg/m² or in 12.2% of patients whose BMI was ≤30 kg/m²" (<a href="https://pubmed.ncbi.nlm.nih.gov/24990884/" rel="noopener nofollow" target="_blank">Oni 2014</a>). The prospective neck study found 52.9% "mentioned some improvement" and concluded the device suits "selected patients with minor skin sagging and no volume discrepancy" (<a href="https://pubmed.ncbi.nlm.nih.gov/32011076/" rel="noopener nofollow" target="_blank">Friedman 2020</a>). The body consensus for the abdomen and arms names "mild to moderate skin and soft tissue laxity" with "target tissues located at treatable depths" as the ideal candidate (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12461775/" rel="noopener nofollow" target="_blank">Lin 2025</a>).</p>
      <p>Against that, the facelift: the meta-analysis of deep-plane and SMAS techniques in 2,896 patients found 94.4% and 87.8% satisfaction with 17.2% and 10.3% complication rates (<a href="https://pubmed.ncbi.nlm.nih.gov/40801931/" rel="noopener nofollow" target="_blank">Khoury 2025</a>), and the SMAS-technique meta-analysis of 183 studies puts temporary nerve injury at 1.5–1.9% and major haematoma at 1.2–1.9% by technique (<a href="https://pubmed.ncbi.nlm.nih.gov/30768122/" rel="noopener nofollow" target="_blank">Jacono 2019</a>). A device is a way to postpone that decision for a mildly lax face, or to avoid it for someone who will never have surgery; it is not a way to get its result. The <a href="/jowls">jowls</a> and <a href="/neck">neck</a> guides sort descent from laxity and say when the surgeon is the honest answer.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'rules-and-access',
    category: 'context',
    title: 'Who may hold the handpiece — clearances, visualisation and the salon problem',
    tldr: 'In most of Europe an ultrasound or radiofrequency device is a CE-marked medical device that a beautician may legally operate, so the same energy that a dermatologist delivers with imaging is sold in salons without it. The consensus on ultrasound safety found the visualised device and the copies "have key differences in several parameters that play a role in safety and effectiveness" and that seeing the tissue "help[s] prevent complications"; the eye-injury case reports come from ultrasound applied on eyelids. Helium plasma and radiofrequency-assisted liposuction are surgery: sedation, incisions, a surgeon.',
    bodyHtml: `
      <p>Independent bench testing of microfocused ultrasound with visualisation against unvisualised HIFU devices found differences in "consistent size and uniformity of thermal coagulation points", "precise localization of energy concentration at the focal point" and "reliable thermal regulation", and an expert panel concluded that "real-time visualization and the capability to detect coupling, features found only in MFU-V, help prevent complications" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9305832/" rel="noopener nofollow" target="_blank">Pavicic 2022</a>). The manufacturer-convened origin of that consensus is obvious and the physics is not: a focused beam fired blind through 1.5–4.5 mm of tissue lands on whatever is there — dermis, fat, a nerve, or the globe of the eye. Two ophthalmology case reports describe the last: "traumatic cataract, visual impairment, injuries to the iris and conjunctiva" after cosmetic HIFU near the eyes (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11370310/" rel="noopener nofollow" target="_blank">Xiao 2024</a>) and corneal infiltrates, severe uveitis and "residual corneal opacity, iris atrophy and peripherical cataract formation" after HIFU applied to an upper eyelid (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10201742/" rel="noopener nofollow" target="_blank">Marafon 2023</a>).</p>
      <p>Practical rules: ultrasound and radiofrequency on the face from a clinician who can name the depth, the nerve and the fat pad under every line; no focused ultrasound inside the orbital rim; a device with a published trial on that model, not "HIFU" generically; and for anything that goes under the skin — helium plasma, radiofrequency-assisted liposuction, temperature-controlled subdermal probes — a surgeon in a facility that can manage a burn, a nerve palsy or, in one reported case, an airway obstruction after radiofrequency-assisted liposuction of the neck (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9542876/" rel="noopener nofollow" target="_blank">Chemali 2022</a>). The <a href="/home-devices">home devices guide</a> grades the consumer versions.</p>
    `,
  },
  {
    id: 'prices-protocols',
    category: 'context',
    title: 'What it costs, how often, and how long it lasts',
    tldr: 'Focused ultrasound €1,500–4,000 for a full face and neck, one session, repeated yearly; monopolar radiofrequency €1,000–3,000 for one session, or a course of two; radiofrequency microneedling €500–1,200 a session, three sessions; parallel ultrasound €1,000–2,500; synchronised RF with muscle stimulation €1,500–2,500 for four sessions; helium plasma or radiofrequency-assisted liposuction of the neck €3,000–7,000 as a procedure. Results peak at three to six months and are graded at a year; nobody has published two.',
    bodyHtml: `
      <p>Indicative European private prices, September 2026. The protocols come from the trials: one ultrasound session graded at 90 and 180 days (<a href="https://pubmed.ncbi.nlm.nih.gov/24990884/" rel="noopener nofollow" target="_blank">Oni 2014</a>) with improvement in the pooled data "which continued up to one year" and no data beyond (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9861614/" rel="noopener nofollow" target="_blank">Contini 2023</a>); one or two monopolar sessions, with the original randomised comparison finding two better than one at four months (<a href="https://pubmed.ncbi.nlm.nih.gov/15545529/" rel="noopener nofollow" target="_blank">Fritz 2004</a>) and patients in a later survey noticing change at one to two months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10818126/" rel="noopener nofollow" target="_blank">Hwang 2024</a>); three radiofrequency-microneedling sessions a month apart with the full effect needing at least twelve weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/36062400/" rel="noopener nofollow" target="_blank">Li 2022</a>); four weekly 20-minute sessions of synchronised RF with muscle stimulation graded at three and six months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12344545/" rel="noopener nofollow" target="_blank">Robb 2025</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12001025/" rel="noopener nofollow" target="_blank">Frank 2025</a>); one helium-plasma procedure graded at 180 days (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10702463/" rel="noopener nofollow" target="_blank">Ruff 2023</a>).</p>
      <p>Cost was "the main deterrent to seeking treatment again" for 78.6% of ultrasound patients in a satisfaction survey, and about two-thirds were satisfied, with the eye and submental areas rated lowest (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11314364/" rel="noopener nofollow" target="_blank">Bukhari 2024</a>); in another, "about one-half of patients (52%) needed a follow-up appointment with photos to be able to see post-treatment changes" (<a href="https://pubmed.ncbi.nlm.nih.gov/30681800/" rel="noopener nofollow" target="_blank">Montes 2019</a>). Price a yearly ultrasound against the facelift it postpones: five years of sessions cost what the operation does, and the operation is graded above. A result that needs a photograph to be seen is the honest expectation for a mildly lax face.</p>
    `,
  },
  {
    id: 'vetting',
    category: 'context',
    title: 'How to vet a clinic before you buy a tightening treatment',
    tldr: 'Ask which layer they are heating and how they see it (imaging for ultrasound, temperature readout for radiofrequency); which of your problems is laxity and which is descent or volume — and whether they will say so; what they do about the marginal mandibular nerve, the temple and the eye; whether they photograph in standardised light before and at 90 and 180 days; and whether they have told you the measured results are millimetres. A clinic that promises a "non-surgical facelift" is quoting the 37% trial without the number.',
    bodyHtml: `
      <p>The patient-selection language of the trials is the vetting checklist. Ultrasound works in "selected patients with minor skin sagging and no volume discrepancy" (<a href="https://pubmed.ncbi.nlm.nih.gov/32011076/" rel="noopener nofollow" target="_blank">Friedman 2020</a>) and less in a BMI over 30 (<a href="https://pubmed.ncbi.nlm.nih.gov/24990884/" rel="noopener nofollow" target="_blank">Oni 2014</a>); a clinic that offers it to a heavy neck or a hollow cheek is selling the session, not the result. Satisfaction in the survey data was higher with clinicians who managed expectations and photographed the result, and lower around the eye and under the chin (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11314364/" rel="noopener nofollow" target="_blank">Bukhari 2024</a>). The radiofrequency-microneedling reviews ask for the parameters — temperature, pulse width, cooling, depth — that "were inconsistent" in the literature (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13433423/" rel="noopener nofollow" target="_blank">Kumar 2026</a>); a clinic should be able to state its depth on a thin temple and a fatty cheek and why they differ.</p>
      <p>The forward-looking question is new: what does this do to a facelift later? A 2026 series of 180 neck lifts found 68% had prior treatments, and in those "fibrosis, loss of normal tissue planes, platysma and deep fascia rigidity, and unpredictable fat distribution", a deep cervicoplasty needed in 94%, longer operations and "contour irregularities postoperatively" in nearly all (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13098153/" rel="noopener nofollow" target="_blank">O'Daniel 2026</a>); a scoping review warns that radiofrequency microneedling "may lead to dermal fibrosis, tissue adhesions, and altered superficial musculoaponeurotic system composition, which could interfere with future facelift procedures" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13120527/" rel="noopener nofollow" target="_blank">Panlilio 2026</a>); the ultrasound adverse-event review found "1 report of facelift compromise" and mostly "anecdotal, largely unverified reports" (<a href="https://pubmed.ncbi.nlm.nih.gov/39625163/" rel="noopener nofollow" target="_blank">Humphrey 2025</a>). Ask, and expect a shrug; the shrug is the state of the evidence.</p>
    `,
  },
];

const uses: Section[] = [
  {
    id: 'use-brow-upper-face',
    category: 'use',
    title: 'The brow and upper face: focused ultrasound, and radiofrequency on the lids',
    tldr: 'The best-measured tightening result there is: a rater-blinded study found 86% of 35 patients with a clinically significant brow lift at 90 days averaging 1.7 mm, and a 2024 randomised blinded trial found 87.5% of 40 with significant elevation at 180 days averaging 2.16 mm. Monopolar radiofrequency on Asian eyelids raised the brow 1.2–1.45 mm with 86% reporting more than 50% improvement at six months. Millimetres, measured well, for a heavy brow that is not yet a hooded lid.',
    evidence: 'moderate',
    focus: 'brow',
    sessions: '1 session; repeat at 12–18 months',
    downtime: 'Redness and swelling for hours; tenderness for days',
    cost: '€800–1,800 for the brow and forehead',
    bodyHtml: `
      <p>The original rater-blinded cohort: 35 evaluable patients, "30 of 35 subjects (86%) were judged by the 3 masked experienced clinician raters to show clinically significant brow-lift 90 days after treatment", mean brow-height change 1.7 mm on photographs, and the authors' own limitation that lower-face tightening could not be measured "because of the lack of fixed anatomic landmarks" (<a href="https://pubmed.ncbi.nlm.nih.gov/20115948/" rel="noopener nofollow" target="_blank">Alam 2010</a>). The 2024 randomised blinded study: 40 completers, "35 (87.5%) were deemed to have clinically significant brow elevation by two blinded assessors" at 180 days, a mean brow-height change of 2.16 mm at 90 days, and 3D vectors showing the skin displaced upward and outward over the brow (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626351/" rel="noopener nofollow" target="_blank">Chen 2024</a>). The systematic review pools brow lifts of 0.47–1.7 mm across studies (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9861614/" rel="noopener nofollow" target="_blank">Contini 2023</a>). Monopolar radiofrequency with a small tip on Asian upper eyelids raised the mid-pupillary brow 1.18 mm at two months and 1.45 mm at six, with 73% and then 86% reporting more than 50% improvement and no adverse events (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12708710/" rel="noopener nofollow" target="_blank">Suh 2025</a>). Synchronised RF with muscle stimulation raised the medial, central and lateral brow by 3.2, 3.0 and 2.3 mm at 24 weeks in an open-label study (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12001025/" rel="noopener nofollow" target="_blank">Frank 2025</a>).</p>
      <p>Moderate, as the <a href="/forehead-lines">forehead lines</a> and <a href="/hooded-eyes">hooded eyes</a> guides grade it: two millimetres is visible on a brow and invisible on a jowl, and it is the one region where the device evidence has blinded raters and a fixed landmark. Excess lid skin is a blepharoplasty; ultrasound must stay outside the orbital rim (Safety).</p>
    `,
  },
  {
    id: 'use-lower-face',
    category: 'use',
    title: 'The lower face and jawline: mild laxity, before it is a jowl',
    tldr: 'The one randomised controlled trial of focused ultrasound with 3D imaging found clinically significant tightening in 70% at three months; the largest study found blinded reviewers saw improvement in 58% and patients in 66%; the split-face randomised trial found monopolar radiofrequency and focused ultrasound equal; the retrospective series found investigators rated a fifth better and a sixth worse. Moderate for mild laxity in a face without fallen fat, with the widest spread of outcomes on this page.',
    evidence: 'moderate',
    focus: 'lowerface',
    sessions: '1 session (ultrasound, monopolar RF) or 3 (RF microneedling); repeat yearly',
    downtime: 'None to a day; bruising with needles',
    cost: '€1,200–3,500 for the lower face and upper neck',
    bodyHtml: `
      <p>The controlled evidence: 20 women randomised to a treated and a control side, "fourteen of 20 participants (70%) were judged to show clinically significant facial tightening" at three months, lower-face volume −0.29 mL on the treated side against +0.42 mL on the control side, pain 3 out of 10 without anaesthesia, and the authors' limitations of "a small sample size, lack of clinical scales" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11756818/" rel="noopener nofollow" target="_blank">Zhu 2024</a>). The largest series: 93 patients, "blinded reviewers observed improvement in skin laxity in 58.1%", quantitative improvement in 63.6%, 65.6% perceiving improvement at day 90, pain scores of 5.7–6.5 out of 10 (<a href="https://pubmed.ncbi.nlm.nih.gov/24990884/" rel="noopener nofollow" target="_blank">Oni 2014</a>). The randomised split-face comparison of monopolar radiofrequency and visualised ultrasound: both improved the Fasil laxity scale from day 30 through day 180 and "there were no statistical differences between MRF and MFU-V in standardized investigator measures of face and neck laxity, patient satisfaction, and adverse events" (<a href="https://pubmed.ncbi.nlm.nih.gov/30531187/" rel="noopener nofollow" target="_blank">Alhaddad 2019</a>). The counterweight: 20.9% improved, 62.5% unchanged and 16.7% worse by investigator grading after one session (<a href="https://pubmed.ncbi.nlm.nih.gov/32770566/" rel="noopener nofollow" target="_blank">Yalici-Armagan 2020</a>).</p>
      <p>Radiofrequency microneedling adds texture: the systematic review found it "improved wrinkle scales, dermal density, and submental volume" for laxity and photoaging (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13433423/" rel="noopener nofollow" target="_blank">Kumar 2026</a>), and the multimodal bipolar-plus-microneedle protocol in 247 patients improved the Baker face and neck score by 1.4 points with 93% pleased (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7489644/" rel="noopener nofollow" target="_blank">Dayan 2020</a>) — a minimally invasive procedure under local anaesthesia, graded in Part 02. Moderate, in line with the <a href="/jowls">jowls guide</a>, for skin laxity; a jowl that is fat and ligament is graded there, and the answer is not on this page.</p>
    `,
  },
  {
    id: 'use-neck-submental',
    category: 'use',
    title: 'The neck and under the chin: from focused ultrasound to helium plasma',
    tldr: 'Focused ultrasound reduces the submental area by 26–45 mm² in the pooled studies and is cleared for the neck on that basis; parallel ultrasound improved submental and neck laxity in 83% of 42 Asian patients at three months; helium plasma under the skin improved loose neck skin in 82.5% at 180 days in the prospective trial behind its 2022 clearance, with 92% satisfaction and 5–8% complications in a meta-analysis of 3,508 patients; radiofrequency-assisted liposuction improved the Baker score by 1.4 points in 247 patients. Moderate — with the surgical options carrying the surgical risks.',
    evidence: 'moderate',
    focus: 'neck',
    sessions: '1 ultrasound or RF session, or one subdermal procedure',
    downtime: 'Hours (ultrasound) to 1–2 weeks of swelling and a compression garment (subdermal)',
    cost: '€1,200–2,500 (energy) · €3,000–7,000 (subdermal procedure)',
    bodyHtml: `
      <p>The non-invasive layer: the systematic review of microfocused ultrasound pooled "submental lifts (measured as a 26–45 mm² reduction in the submental area on lateral photographs)" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9861614/" rel="noopener nofollow" target="_blank">Contini 2023</a>); parallel-beam ultrasound in 42 Asian patients gave "83.3% showed improvement in submental and neck skin laxity at the 3-month follow-up", a 1.04 mL volume trend at the jawline, transient oedema in 7.2% and erythema in 50% (<a href="https://pubmed.ncbi.nlm.nih.gov/42226470/" rel="noopener nofollow" target="_blank">Chung 2026</a>); the prospective neck ultrasound study found 52.9% with "some improvement" (<a href="https://pubmed.ncbi.nlm.nih.gov/32011076/" rel="noopener nofollow" target="_blank">Friedman 2020</a>); insulated-needle radiofrequency microneedling improved every parameter of mild-to-moderate neck laxity on optical coherence tomography with or without PRP (<a href="https://pubmed.ncbi.nlm.nih.gov/34214220/" rel="noopener nofollow" target="_blank">Gawdat 2022</a>). The subdermal layer: helium plasma met its primary endpoint with "82.5% demonstrated improvement at Day 180", 96.9% with no more than moderate pain to day 7 and no serious device-related events, which produced the 2022 clearance for loose neck and submental skin (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10702463/" rel="noopener nofollow" target="_blank">Ruff 2023</a>); the meta-analysis of 34 studies in 3,508 patients found pooled complications of "5% for helium plasma RF-only, 8% for helium plasma RF + liposuction, and 15%" with excisional surgery and 92% satisfaction (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13293070/" rel="noopener nofollow" target="_blank">Shridharani 2026</a>); radiofrequency-assisted liposuction with microneedle radiofrequency improved 247 patients by 1.4 Baker points with prolonged swelling in 4.8%, hard areas in 3.2% and marginal mandibular neuropraxia in 1.2%, all resolving (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7489644/" rel="noopener nofollow" target="_blank">Dayan 2020</a>), and 93% satisfaction in an East Asian neck-contouring series (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10187477/" rel="noopener nofollow" target="_blank">Yen 2023</a>).</p>
      <p>Moderate, as the <a href="/neck">neck</a> and <a href="/double-chin">double chin</a> guides grade it — with the caveat that the strongest neck results belong to procedures with incisions, sedation, a surgeon and a regulator's safety communication about burns outside the clearance, and that a fatty neck needs the fat addressed first (deoxycholic acid, liposuction) and a banded neck needs a platysmaplasty. The 2026 neck-lift series is the warning about what repeated non-surgical heating does to the operation that may follow (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13098153/" rel="noopener nofollow" target="_blank">O'Daniel 2026</a>).</p>
    `,
  },
  {
    id: 'use-chest-body',
    category: 'use',
    title: 'The chest, arms and abdomen: off-face laxity',
    tldr: 'One focused-ultrasound session on the chest improved wrinkles by one to two points in 46% at 90 days and 62% at 180, shortened the clavicle-to-nipple distance by about a centimetre, and 71% were improved on masked assessment — in skin types I and II only. A 2025 global consensus endorses visualised ultrasound for mild-to-moderate laxity of the abdomen and upper arms; combined with dilute calcium hydroxylapatite it improved buttock and thigh laxity and cellulite scores by 4.5 points. Moderate for the chest; the body is a session of millimetres against skin that surgery removes by the handful.',
    evidence: 'moderate',
    focus: 'body',
    sessions: '1 session per area; repeat at 12–18 months',
    downtime: 'Redness, tenderness for days',
    cost: '€1,500–3,000 per area',
    bodyHtml: `
      <p>The décolletage study: "rhytides improved over time (P &lt; .0001), with 46% and 62% of subjects showing a 1- to 2-point improvement at days 90 and 180", mean mid-clavicular-to-nipple distance down from 20.9 to 19.8 and 19.5 cm, 96% improved on physician global scale and "improvement by masked assessment at day 90 was 71%", limited by a single centre, a small sample and "only Fitzpatrick skin types I and II enrolled" (<a href="https://pubmed.ncbi.nlm.nih.gov/24054759/" rel="noopener nofollow" target="_blank">Fabi 2013</a>); combined with 1:1 diluted calcium hydroxylapatite, neck lines improved from 2.6 to 1.3 and chest wrinkles from 2.6 to 1.1 on the Merz scales in 47 subjects (<a href="https://pubmed.ncbi.nlm.nih.gov/29285863/" rel="noopener nofollow" target="_blank">Casabona 2018</a>). The body: the 2025 consensus "affirms MFU-V as a safe and effective noninvasive modality for treating mild to moderate skin and soft tissue laxity in the abdomen and upper arms" with protocols by depth (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12461775/" rel="noopener nofollow" target="_blank">Lin 2025</a>); the buttock and thigh study found a 4.5-point cellulite-severity improvement after one combined ultrasound-and-CaHA treatment with peak collagen at 90 days on biopsy (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5548562/" rel="noopener nofollow" target="_blank">Casabona 2017</a>); the review of off-face laxity covers the radiofrequency and laser alternatives site by site (<a href="https://pubmed.ncbi.nlm.nih.gov/26566567/" rel="noopener nofollow" target="_blank">Jerdan 2015</a>); the HIFU systematic review reports "effective noninvasive lifting" of the abdomen and thighs with fewer than 5% transient side effects and "standardization of treatment protocols remains a key challenge" (<a href="https://pubmed.ncbi.nlm.nih.gov/40184185/" rel="noopener nofollow" target="_blank">Haykal 2025</a>).</p>
      <p>Moderate for the chest and mild body laxity, in line with the <a href="/decolletage">décolletage</a> and <a href="/upper-arms">upper arms</a> guides, which also set out when an arm lift or abdominoplasty is the only thing that removes skin. Combination with a biostimulator is graded in the <a href="/regenerative-aesthetics">biostimulator guide</a>: the systematic review of ultrasound plus calcium hydroxylapatite found "promising outcomes" in 11 mostly pre-post studies and asked for controlled ones (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12080884/" rel="noopener nofollow" target="_blank">Amiri 2025</a>).</p>
    `,
  },
  {
    id: 'use-texture-crepe',
    category: 'use',
    title: 'Thin, crepey skin and fine wrinkles: the texture bonus',
    tldr: 'Radiofrequency microneedling has randomised trials for wrinkles and texture and the 2026 systematic review finds it "improved wrinkle scales, dermal density"; synchronised RF with muscle stimulation reduced wrinkle severity 35% on 3D imaging at three months in 33 patients with collagen and elastin up on biopsy; monopolar radiofrequency with a fractional diode laser improved laxity and photoaging grades at six months with 77% responders. Moderate for texture — the result most people actually get from a tightening session.',
    evidence: 'moderate',
    focus: 'texture',
    sessions: '3 sessions (RF microneedling) or 4 weekly (synchronised RF); 1 (monopolar RF)',
    downtime: '1–3 days of redness; pinpoint bleeding with needles',
    cost: '€500–1,200 per session',
    bodyHtml: `
      <p>The radiofrequency-microneedling literature is strongest here: 41 studies including 15 randomised trials, with "credible efficacy" for scars, "wrinkle scales, dermal density" and photoaging, transient erythema and oedema, and post-inflammatory hyperpigmentation "infrequent and self-limited" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13433423/" rel="noopener nofollow" target="_blank">Kumar 2026</a>); the meta-analysis of eight randomised trials found fractional radiofrequency as effective as laser for acne scars with a fraction of the hyperpigmentation (<a href="https://pubmed.ncbi.nlm.nih.gov/36062400/" rel="noopener nofollow" target="_blank">Li 2022</a>). Synchronised RF with muscle stimulation: 3D wrinkle improvement of 20% immediately, 23% at one month and 35% at three, 88% improved a point on the global scale, the wrinkle-and-elastosis score from 5.6 to 3.8 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12344545/" rel="noopener nofollow" target="_blank">Robb 2025</a>), with collagen up 25–30% and elastin 67–103% on biopsy against controls (<a href="https://pubmed.ncbi.nlm.nih.gov/38468421/" rel="noopener nofollow" target="_blank">Goldberg 2024</a>). Monopolar radiofrequency combined with a 1440/1927 nm fractional diode improved laxity grades from 1.65 to 1.30 and Glogau photoaging from 1.85 to 1.35 at six months, blinded reviewers picked the after-photograph 67% of the time and 77% were responders (<a href="https://pubmed.ncbi.nlm.nih.gov/39964075/" rel="noopener nofollow" target="_blank">Peters 2025</a>); a bimodal radiofrequency device in Southeast Asian patients reduced nasolabial cross-section and wrinkle width with 96% transient erythema (<a href="https://pubmed.ncbi.nlm.nih.gov/42187039/" rel="noopener nofollow" target="_blank">Chottawornsak 2026</a>).</p>
      <p>Moderate, as the <a href="/microneedling">microneedling</a> and <a href="/collagen-loss">collagen loss</a> guides grade it. Thickening thin skin is what the heat measurably does; when a clinic photographs "tightening", this is usually the change in the picture. The <a href="/skin-resurfacing">resurfacing guide</a> grades the lasers and peels that do the same job by removing skin rather than heating it.</p>
    `,
  },
  {
    id: 'use-eye-area',
    category: 'use',
    title: 'Around the eyes: lower lids, crow\'s feet and the orbit',
    tldr: 'Monopolar radiofrequency on the eyelids has small open-label studies; radiofrequency microneedling at the outer eye has a texture effect; focused ultrasound around the orbit produced the lowest satisfaction in the survey data and two published eye injuries — a traumatic cataract and a scarred cornea — when applied on the lid. Emerging for lid skin; nothing on this page moves a fat pad or a tear trough.',
    evidence: 'emerging',
    focus: 'eyes',
    sessions: '1–3 sessions',
    downtime: 'Swelling for days',
    cost: '€500–1,200',
    bodyHtml: `
      <p>The eyelid evidence is thin and Asian-skin specific: monopolar radiofrequency with a 0.25 cm² tip on upper lids gave 86% more-than-50% improvement at six months by patient report and a 1.2–1.45 mm brow rise (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12708710/" rel="noopener nofollow" target="_blank">Suh 2025</a>); the randomised comparison of 1,550 nm fractional laser and focused ultrasound for periorbital wrinkles is in the <a href="/crows-feet">crow's feet guide</a>. Satisfaction after ultrasound was lowest "around the eye and submentum" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11314364/" rel="noopener nofollow" target="_blank">Bukhari 2024</a>). The harm is documented twice in the ophthalmology literature: cosmetic HIFU near the eyes causing "traumatic cataract, visual impairment, injuries to the iris and conjunctiva" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11370310/" rel="noopener nofollow" target="_blank">Xiao 2024</a>), and HIFU applied to an upper eyelid causing corneal infiltrates, severe uveitis and lasting corneal opacity, iris atrophy and early cataract (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10201742/" rel="noopener nofollow" target="_blank">Marafon 2023</a>).</p>
      <p>Emerging, as the <a href="/eye-bags">eye bags</a> and <a href="/hooded-eyes">hooded eyes</a> guides grade the lid devices: thin lid skin responds to gentle bulk heating a little and to nothing dramatically, a bag is a fat pad and a hood is skin to be removed, and a focused beam has no business inside the orbital rim.</p>
    `,
  },
  {
    id: 'use-jowls-heavy-neck',
    category: 'use',
    title: 'True jowls, a heavy neck and hollow cheeks: what tightening is sold for and cannot do',
    tldr: 'A jowl is fat and a stretched ligament, a heavy neck is fat and a loose platysma, a hollow is lost volume — none of them is loose skin, and the tightening trials excluded or failed them: no change in 54.5% of ultrasound patients with a BMI over 30, "no volume discrepancy" as the selection rule, and 37% of a facelift\'s effect at best. The neck-lift series describes what repeated attempts leave behind. Limited for the problems that fill the clinic\'s waiting room.',
    evidence: 'limited',
    focus: 'lowerface',
    sessions: '—',
    downtime: '—',
    cost: 'Keep it for the surgeon or the syringe',
    bodyHtml: `
      <p>The evidence base tells you who was studied: patients with "minor skin sagging and no volume discrepancy" (<a href="https://pubmed.ncbi.nlm.nih.gov/32011076/" rel="noopener nofollow" target="_blank">Friedman 2020</a>), a BMI mostly under 30 (<a href="https://pubmed.ncbi.nlm.nih.gov/24990884/" rel="noopener nofollow" target="_blank">Oni 2014</a>), "mild to moderate" laxity at "treatable depths" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12461775/" rel="noopener nofollow" target="_blank">Lin 2025</a>). The comparison with surgery quantified the gap for laxity itself — 16% against 49% (<a href="https://pubmed.ncbi.nlm.nih.gov/20404228/" rel="noopener nofollow" target="_blank">Alexiades-Armenakas 2010</a>) — and for descent and volume there is no comparison because the devices do not address them. What repeated non-surgical treatment does to the eventual operation is now published: fibrosis, lost planes, rigid platysma and unpredictable fat in 68% of a neck-lift series, with longer operations and near-universal contour irregularities (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13098153/" rel="noopener nofollow" target="_blank">O'Daniel 2026</a>).</p>
      <p>Limited, as the <a href="/jowls">jowls</a>, <a href="/facial-volume-loss">volume</a> and <a href="/neck">neck</a> guides grade the devices for these problems. A jowl wants a facelift or, for the fat component, deoxycholic acid or liposuction; a hollow wants filler, fat or a biostimulator; a heavy neck wants the fat and the platysma treated. A device sold for any of them is a year's delay and a harder operation.</p>
    `,
  },
  {
    id: 'use-threads',
    category: 'use',
    title: 'Thread lifts sold as tightening',
    tldr: 'The randomised trial of polydioxanone thread quantity found volume and displacement gains "diminished by 60 days" whatever the number of threads; the meta-analysis of 26 studies puts swelling at 35%, dimpling at 10%, paraesthesia at 6%, visible threads at 4%, infection and extrusion at 2% each, with dimpling 16% and infection 5.9% over fifty; the systematic reviews find "at best a very limited durability" and "a huge theoretical and methodological gap". Threads hitch tissue for weeks; they do not tighten skin.',
    evidence: 'limited',
    focus: 'lowerface',
    sessions: '1 procedure; repeated at 6–12 months by those who repeat it',
    downtime: '1–2 weeks of swelling, dimpling, bruising',
    cost: '€1,000–3,000',
    bodyHtml: `
      <p>The randomised comparison of thread counts found "significant volumetric changes over time" but "no significant intergroup differences", tissue displacement significant over time but not between groups, and "initial improvements in volume and tissue displacement diminished by 60 days, suggesting that additional threads do not enhance long-term efficacy" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11997779/" rel="noopener nofollow" target="_blank">Germani 2025</a>). The complications meta-analysis of 26 studies: swelling 35%, dimpling 10%, paraesthesia 6%, thread visibility 4%, infection 2%, extrusion 2%, with dimpling 16% and infection 5.9% in patients over 50 and long-term satisfaction falling from 98% to 88% (<a href="https://pubmed.ncbi.nlm.nih.gov/33821308/" rel="noopener nofollow" target="_blank">Niu 2021</a>); the 14,222-patient safety review lists facial asymmetry, oedema and bruising as the commonest effects with paraesthesia, alopecia and vessel or gland injury as the serious ones (<a href="https://pubmed.ncbi.nlm.nih.gov/34699439/" rel="noopener nofollow" target="_blank">Pham 2021</a>). The efficacy reviews: "little or no substantial evidence has been added" since 2006, "at best a very limited durability of the lifting effect", and the two positive studies "sponsored by the companies that manufacture the threads" (<a href="https://pubmed.ncbi.nlm.nih.gov/29481392/" rel="noopener nofollow" target="_blank">Gülbitti 2018</a>); "a huge theoretical and methodological gap" for polydioxanone threads (<a href="https://pubmed.ncbi.nlm.nih.gov/37021458/" rel="noopener nofollow" target="_blank">Contreras 2023</a>).</p>
      <p>Limited, as the <a href="/sagging-skin">sagging skin</a>, <a href="/jowls">jowls</a> and <a href="/neck">neck</a> guides grade them. The thread appears on this page because it is sold beside the devices as "tightening"; it is a suture, and a suture through fat holds for as long as sutures through fat hold.</p>
    `,
  },
  {
    id: 'use-home-devices',
    category: 'use',
    title: 'Home radiofrequency, microcurrent and "home HIFU"',
    tldr: 'A consumer device is built so that it cannot deliver the temperature that contracts collagen at depth; the home radiofrequency trials measured periorbital wrinkles without a sham arm, the microcurrent studies measured brows and muscle tone that relax within days, and the marketplace "HIFU" machines have no trial at all. Limited for tightening, as the home devices guide grades them.',
    evidence: 'limited',
    focus: 'other',
    sessions: '—',
    downtime: '—',
    cost: '€300–700, and a drawer',
    bodyHtml: `
      <p>The clinic devices in this guide work by reaching a coagulation temperature at a depth a consumer cannot see or safely target; the systematic-review language on the clinic versions — "precise localization of energy concentration at the focal point" and "reliable thermal regulation" as the features that separate working devices from copies (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9305832/" rel="noopener nofollow" target="_blank">Pavicic 2022</a>) — is the engineering a home unit is designed not to have. The <a href="/home-devices">home devices guide</a> grades the home radiofrequency handhelds emerging for periorbital wrinkles on uncontrolled trials, the microcurrent and muscle-stimulation devices emerging for a brow that relaxes within days, and the plasma pens and "home HIFU" as the row to walk away from.</p>
      <p>Limited for any tightening claim below the eyes, in line with the <a href="/jowls">jowls</a>, <a href="/neck">neck</a> and <a href="/sagging-skin">sagging skin</a> guides.</p>
    `,
  },
];

const products: Section[] = [
  {
    id: 'prod-mfu',
    category: 'product',
    title: 'Microfocused ultrasound with visualisation (Ultherapy, Ultherapy Prime) and unvisualised HIFU (Ultraformer, Doublo, Ultracel and copies)',
    tldr: 'Ultrasound focused to coagulation points 1.5, 3.0 and 4.5 mm deep along lines under the skin, with (Ultherapy) or without (HIFU) an image of the tissue being heated. The most-studied device: a rater-blinded brow study, a randomised trial with 3D imaging, a 93-patient blinded series, meta-analyses of 16–17 studies, and the retrospective series with a sixth worse. Painful, one session, one year, and the eye and nerve injuries that come from firing blind.',
    evidence: 'moderate',
    focus: 'ultrasound',
    note: 'Top pick: the visualised device from a clinician who treats by depth and stays out of the orbit, for a brow, a mildly lax lower face or a chest',
    sessions: '1 session; repeat at 12–18 months',
    downtime: 'Redness and swelling for hours; tenderness and occasional numbness for days to weeks',
    cost: '€1,500–4,000 face and neck',
    bodyHtml: `
      <p>The trials are in Part 01: the brow cohorts (<a href="https://pubmed.ncbi.nlm.nih.gov/20115948/" rel="noopener nofollow" target="_blank">Alam 2010</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626351/" rel="noopener nofollow" target="_blank">Chen 2024</a>), the randomised 3D-imaging trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11756818/" rel="noopener nofollow" target="_blank">Zhu 2024</a>), the largest lower-face series (<a href="https://pubmed.ncbi.nlm.nih.gov/24990884/" rel="noopener nofollow" target="_blank">Oni 2014</a>), the chest study (<a href="https://pubmed.ncbi.nlm.nih.gov/24054759/" rel="noopener nofollow" target="_blank">Fabi 2013</a>), the systematic review and meta-analysis (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9861614/" rel="noopener nofollow" target="_blank">Contini 2023</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32026164/" rel="noopener nofollow" target="_blank">Ayatollahi 2020</a>) and the retrospective counterweight (<a href="https://pubmed.ncbi.nlm.nih.gov/32770566/" rel="noopener nofollow" target="_blank">Yalici-Armagan 2020</a>). Between the visualised device and the HIFU copies, an evaluator-blinded split-face comparison of two HIFU devices found "mild to moderate improvement" with both and differences in pain and satisfaction (<a href="https://pubmed.ncbi.nlm.nih.gov/26985696/" rel="noopener nofollow" target="_blank">Jung 2016</a>); the safety consensus found the copies lacked uniform coagulation points, focal precision and thermal regulation (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9305832/" rel="noopener nofollow" target="_blank">Pavicic 2022</a>); a 2024 randomised study of a technique targeting the thicker parotid SMAS reported better lifting and lower nerve risk (<a href="https://pubmed.ncbi.nlm.nih.gov/38773827/" rel="noopener nofollow" target="_blank">Fatemi 2024</a>). The adverse-event review found transient oedema, erythema and pain in the literature, one case of subcutaneous atrophy, and in the regulator's device-report database "lipoatrophy, neurologic sequelae (including nerve damage, focal numbness, dysesthesia, and ptosis), and scarring" reported most often (<a href="https://pubmed.ncbi.nlm.nih.gov/39625163/" rel="noopener nofollow" target="_blank">Humphrey 2025</a>).</p>
      <p>Moderate, as every regional guide on this site grades it for the brow, lower face, neck and chest, and emerging to limited around the eye. The pain is real (5–6 out of 10 in the largest series), the result peaks at three to six months and is graded at a year, and the two variables that decide the outcome are the patient's laxity type and the operator's map of what lies 4.5 mm under each line.</p>
    `,
  },
  {
    id: 'prod-monopolar-rf',
    category: 'product',
    title: 'Monopolar radiofrequency (Thermage FLX, Oligio, Youmagic, Density)',
    tldr: 'A single electrode heats the whole dermis and the septa beneath it in bulk, with cooling to protect the surface: equal to focused ultrasound in the randomised split-face trial, non-inferior between devices in a 212-patient randomised trial, two sessions better than one in the original comparison, 2.7% temporary side effects in 600 treatments and no permanent ones. The gentlest device for thin, crepey skin, the least visible result, and the one with the least to lose.',
    evidence: 'moderate',
    focus: 'rf',
    note: 'Top pick: a thin, crepey lower face or lids, from a clinic that uses the modern low-energy multi-pass protocol, in one or two sessions',
    sessions: '1–2 sessions; repeat yearly',
    downtime: 'Redness for hours; none',
    cost: '€1,000–3,000 face',
    bodyHtml: `
      <p>Head-to-head, monopolar radiofrequency and visualised ultrasound produced the same laxity improvement, satisfaction and adverse events through day 180 (<a href="https://pubmed.ncbi.nlm.nih.gov/30531187/" rel="noopener nofollow" target="_blank">Alhaddad 2019</a>). The device trials: a multicentre randomised assessor-blind non-inferiority trial of 212 patients found 100% and 98.1% with at least a 3-grade global improvement at 90 days for the new and the reference device (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12948897/" rel="noopener nofollow" target="_blank">Wang 2026</a>), and its long-term randomised companion found significant nasolabial depression-volume changes at 1, 3 and 6 months with no difference from the reference device (<a href="https://pubmed.ncbi.nlm.nih.gov/39957006/" rel="noopener nofollow" target="_blank">Wang 2025</a>); the original randomised comparison found two treatments better than one at four months, with 75% willing to pay again despite "modest" change (<a href="https://pubmed.ncbi.nlm.nih.gov/15545529/" rel="noopener nofollow" target="_blank">Fritz 2004</a>); the multipass vector technique improved 96% of patients across skin types on photographs (<a href="https://pubmed.ncbi.nlm.nih.gov/16042936/" rel="noopener nofollow" target="_blank">Finzi 2005</a>). Safety over 600 treatments: "2.7% of treatments resulted in temporary side effects, the most significant of which was a slight depression on the cheek (n = 1), which completely resolved within 3.5 months", and "no permanent side effects" (<a href="https://pubmed.ncbi.nlm.nih.gov/16989184/" rel="noopener nofollow" target="_blank">Weiss 2006</a>). The fat-loss reputation of the early high-energy protocols has an unexpected 2026 footnote: repeated low-energy continuous monopolar radiofrequency increased facial fat thickness by 1.6 mm on ultrasound with stem-cell activation on histology (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13475923/" rel="noopener nofollow" target="_blank">Kim 2026</a>). Patients in a satisfaction survey were 82% satisfied, most noticing change at one to two months, mostly in laxity (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10818126/" rel="noopener nofollow" target="_blank">Hwang 2024</a>).</p>
      <p>Moderate, in line with the <a href="/jowls">jowls</a> and <a href="/collagen-loss">collagen loss</a> guides. Bulk heating suits thin skin that focused points would over-treat, the eyelids (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12708710/" rel="noopener nofollow" target="_blank">Suh 2025</a>) and anyone who will not accept the ultrasound's pain; it does the least for descent.</p>
    `,
  },
  {
    id: 'prod-rf-microneedling',
    category: 'product',
    title: 'Radiofrequency microneedling (Morpheus8, Genius, Potenza, Secret RF, Sylfirm X, Profound)',
    tldr: 'Insulated or bare needles deliver heat at set depths from 0.5 to 7 mm: 15 randomised trials in a 41-study review for scars, texture and photoaging, a 37%-of-a-facelift result for laxity in the blinded comparison, and a regulator database in which fat loss, scarring, textural and pigment change and burns lead the reports. The texture device with a tightening bonus, and the one whose depth setting decides whether it thickens skin or hollows a cheek.',
    evidence: 'emerging',
    focus: 'rf',
    note: 'Top pick: for crepey texture, scars and mild laxity together, three sessions, from a clinician who states the depth for each zone and turns it down over thin fat',
    sessions: '3 sessions, 4–6 weeks apart',
    downtime: '2–5 days of redness, pinpoint crusts, bruising',
    cost: '€500–1,200 per session',
    bodyHtml: `
      <p>The evidence for texture and scars is in Part 01 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13433423/" rel="noopener nofollow" target="_blank">Kumar 2026</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/36062400/" rel="noopener nofollow" target="_blank">Li 2022</a>), with the one caution from the microneedling meta-analysis that plain microneedling beat the radiofrequency version for acne-scar improvement in the pooled randomised trials (<a href="https://pubmed.ncbi.nlm.nih.gov/35426044/" rel="noopener nofollow" target="_blank">Shen 2022</a>). For laxity: the blinded randomised facelift comparison (<a href="https://pubmed.ncbi.nlm.nih.gov/20404228/" rel="noopener nofollow" target="_blank">Alexiades-Armenakas 2010</a>), the neck study on optical coherence tomography (<a href="https://pubmed.ncbi.nlm.nih.gov/34214220/" rel="noopener nofollow" target="_blank">Gawdat 2022</a>), the histology of new dermis by ten weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/19143021/" rel="noopener nofollow" target="_blank">Hantash 2009</a>), the combination with bipolar radiofrequency in 247 patients (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7489644/" rel="noopener nofollow" target="_blank">Dayan 2020</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6460431/" rel="noopener nofollow" target="_blank">Dayan 2019</a>) and an anatomical series of 364 foreheads and 233 jawlines with no pigment change or scarring (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11862810/" rel="noopener nofollow" target="_blank">Stein 2025</a>). The regulator's device reports: 86 reports and 145 adverse events from 2020 to 2025 with "fat loss, scarring, and postinflammatory erythema" the most reported (<a href="https://pubmed.ncbi.nlm.nih.gov/42430734/" rel="noopener nofollow" target="_blank">Camacho-Hubbard 2026</a>); 114 reports and 224 events with textural change 25%, pigmentary alteration 18%, fat loss 12%, burns 6% (<a href="https://pubmed.ncbi.nlm.nih.gov/41886649/" rel="noopener nofollow" target="_blank">Chou 2026</a>); and the scoping review's warning that dermal fibrosis and altered SMAS "could interfere with future facelift procedures" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13120527/" rel="noopener nofollow" target="_blank">Panlilio 2026</a>).</p>
      <p>Emerging for laxity and moderate for texture, as the <a href="/microneedling">microneedling</a> and <a href="/sagging-skin">sagging skin</a> guides grade it. The needle depth is the whole safety story: 3–4 mm into the thin fat of a temple or a 50-year-old cheek is a hollow that filler will be asked to repair; 1–2 mm into thick perioral skin is the texture result the trials describe.</p>
    `,
  },
  {
    id: 'prod-parallel-ultrasound',
    category: 'product',
    title: 'High-intensity parallel-beam ultrasound (Sofwave)',
    tldr: 'A shallower, non-focused ultrasound heating the mid-dermis at 1.5 mm in parallel lines rather than points: 15 patients with stable improvement of brow, submental and neck laxity on photographs, 34 patients with 1.9–2.0 mm of directional skin contraction at 8 and 24 weeks, 42 Asian patients with 83% submental improvement at three months, and no head-to-head against focused ultrasound. Less pain, less depth, less data.',
    evidence: 'emerging',
    focus: 'ultrasound',
    note: 'Top pick: for thin skin and a low pain threshold where focused ultrasound is too deep — on the understanding that the comparison has not been done',
    sessions: '1 session; repeat yearly',
    downtime: 'Redness for hours',
    cost: '€1,000–2,500',
    bodyHtml: `
      <p>The studies: 15 subjects with a mean age of 55 in whom "an improvement pattern was detected in all treated areas in both follow-up visits and persisted stably", with pain of 5.6 out of 10 (<a href="https://pubmed.ncbi.nlm.nih.gov/38031530/" rel="noopener nofollow" target="_blank">Gold 2024</a>); the vectorised "thermal thread" study measuring "1.91 ± 0.61 mm" of contraction at 8 weeks and "1.96 ± 0.67 mm" at 24, in the intended direction in 28 of 34, with pain 2.6 out of 5 and no side effects (<a href="https://pubmed.ncbi.nlm.nih.gov/38411259/" rel="noopener nofollow" target="_blank">Oku 2024</a>); 42 Asian patients with 83.3% submental and neck improvement, 28.6% brow elevation and 38.1% wrinkle improvement at three months, effects sustained to nine months in 12.8% (<a href="https://pubmed.ncbi.nlm.nih.gov/42226470/" rel="noopener nofollow" target="_blank">Chung 2026</a>); and the clinical-and-histological series in 13 women reported in the <a href="/sagging-skin">sagging skin guide</a> (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845918/" rel="noopener nofollow" target="_blank">Suh 2025</a>). The HIFU systematic review credits parallel-beam technology with "improved treatment precision and patient comfort" (<a href="https://pubmed.ncbi.nlm.nih.gov/40184185/" rel="noopener nofollow" target="_blank">Haykal 2025</a>).</p>
      <p>Emerging, in line with the <a href="/jowls">jowls</a>, <a href="/neck">neck</a> and <a href="/double-chin">double chin</a> guides: plausible, comfortable, manufacturer-run, and not yet compared with the device it is sold as an easier version of.</p>
    `,
  },
  {
    id: 'prod-emface',
    category: 'product',
    title: 'Synchronised radiofrequency with muscle stimulation (Emface)',
    tldr: 'Pads deliver radiofrequency to the dermis and high-intensity electrical stimulation to the lifting muscles at once: 33 patients with 35% wrinkle reduction on 3D imaging at three months, brows raised 2.3–3.2 mm at 24 weeks, zygomaticus thickness up from 2.06 to 2.80 mm with 1.43 cm³ of midface volume gain, collagen and elastin up on biopsy against controls. Four comfortable sessions, every study open-label and manufacturer-linked, no laxity scale, no comparison.',
    evidence: 'emerging',
    focus: 'rf',
    note: 'Top pick: for someone who wants a comfortable, needle-free upper-face result and accepts that the evidence is a year old and uncontrolled',
    sessions: '4 weekly 20-min sessions; maintenance yearly',
    downtime: 'None',
    cost: '€1,500–2,500 for the course',
    bodyHtml: `
      <p>The data: multicentre 3D evaluation of 33 patients with wrinkle improvement of 20.1% after treatment, 23.2% at one month and 35.4% at three, 88% improved a global point (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12344545/" rel="noopener nofollow" target="_blank">Robb 2025</a>); the upper-face study with forehead and crow's-feet lines improved at every visit and brows up 3.18, 3.02 and 2.27 mm at week 24 with no change in frontalis thickness (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12001025/" rel="noopener nofollow" target="_blank">Frank 2025</a>); the midface study with zygomaticus thickness from 2.06 to 2.80 mm, a 39% rise in EMG signal, 0.9–1.0 mm skin displacement and 1.43 cm³ more midface volume at 24 weeks, "further randomized studies are needed" (<a href="https://pubmed.ncbi.nlm.nih.gov/39749931/" rel="noopener nofollow" target="_blank">Frank 2025</a>); the ultrasound echo-intensity pilot with muscle tone improved and 87.5% satisfied (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12152478/" rel="noopener nofollow" target="_blank">Halaas 2025</a>); the histology (<a href="https://pubmed.ncbi.nlm.nih.gov/38468421/" rel="noopener nofollow" target="_blank">Goldberg 2024</a>); and the anatomy review (<a href="https://pubmed.ncbi.nlm.nih.gov/37806688/" rel="noopener nofollow" target="_blank">Chilukuri 2023</a>).</p>
      <p>Emerging, as the <a href="/sagging-skin">sagging skin</a> and <a href="/double-chin">double chin</a> guides grade it. A toned elevator muscle supporting the skin is a coherent idea with measurements behind it and no control group in front of it; the effect is expected to need maintenance, as muscle does. Contraindicated with implanted electrical devices and metal in the field (Safety).</p>
    `,
  },
  {
    id: 'prod-helium-plasma',
    category: 'product',
    title: 'Subdermal helium plasma (Renuvion / J-Plasma)',
    tldr: 'A probe under the skin delivers helium plasma energised by radiofrequency to contract the underside of the dermis and the fibrous septa, usually after liposuction, under sedation: 82.5% improvement of loose neck skin at 180 days in the prospective clearance trial, 92% satisfaction and 5–15% complications across 3,508 patients in the meta-analysis, and a regulator\'s safety communication about burns and subcutaneous emphysema outside its cleared uses. Surgery-adjacent, and graded as such.',
    evidence: 'moderate',
    focus: 'invasive',
    note: 'Top pick: the loose neck after liposuction, in a surgeon\'s hands with the energy metered — never from a device "on the face" without an incision plan',
    sessions: '1 procedure',
    downtime: '1–2 weeks of swelling, a compression garment, firmness for weeks',
    cost: '€3,000–7,000 neck',
    bodyHtml: `
      <p>The clearance trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10702463/" rel="noopener nofollow" target="_blank">Ruff 2023</a>) and the meta-analysis (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13293070/" rel="noopener nofollow" target="_blank">Shridharani 2026</a>) are in Part 01; a retrospective safety review of 47 patients found the abdomen, buttocks and thighs received the most energy (10–14 kJ) with no serious or device-related events, and argued for a generator that meters joules so that operators can see what they delivered (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9897171/" rel="noopener nofollow" target="_blank">Shridharani 2022</a>); the technique reviews describe the face and neck application and its physics (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7374633/" rel="noopener nofollow" target="_blank">Gentile 2020</a>). The neck review of non-surgical options ranks percutaneous radiofrequency highest for satisfaction and lowest for complications among the submental-fat treatments (<a href="https://pubmed.ncbi.nlm.nih.gov/37169415/" rel="noopener nofollow" target="_blank">Sturm 2023</a>).</p>
      <p>Moderate, as the <a href="/double-chin">double chin</a> and <a href="/upper-arms">upper arms</a> guides grade it with liposuction, and emerging in the <a href="/neck">neck guide</a> for the neck alone. This is an operation with a probe instead of a scalpel: sedation, incisions, a surgeon, seromas and transient nerve effects in the complication tally, and no relation to the handheld "plasma pens" sold for tightening.</p>
    `,
  },
  {
    id: 'prod-rfal',
    category: 'product',
    title: 'Radiofrequency-assisted liposuction and subdermal probes (FaceTite, AccuTite, BodyTite, ThermiTight)',
    tldr: 'A bipolar probe under the skin heats the fibrous septa to a set temperature while an external electrode reads the surface, with or without liposuction: 247 lower faces and necks improved 1.4 Baker points with 93% pleased, 4.8% prolonged swelling, 3.2% hard areas and 1.2% marginal mandibular neuropraxia, all resolving; 93% satisfaction in an East Asian neck series; one published airway obstruction. The strongest non-excisional neck result, bought with an incision and an anaesthetist.',
    evidence: 'moderate',
    focus: 'invasive',
    note: 'Top pick: a lower face and neck with fat and mild-to-moderate laxity, under local anaesthesia with a surgeon who tracks internal temperature',
    sessions: '1 procedure',
    downtime: '1–2 weeks of swelling and a chin strap',
    cost: '€3,000–6,000 lower face and neck',
    bodyHtml: `
      <p>The multimodal series: 247 patients, mean age 55, 97% under local anaesthesia, a 1.4-point Baker improvement, 93% pleased and willing to repeat, prolonged swelling 4.8%, hard areas 3.2%, marginal mandibular neuropraxia 1.2%, "which all resolved without further intervention", and age the main predictor of a smaller change (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7489644/" rel="noopener nofollow" target="_blank">Dayan 2020</a>); the East Asian neck-contouring series with a mean global improvement of 3.03 out of 4, 93% satisfied and no serious complications (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10187477/" rel="noopener nofollow" target="_blank">Yen 2023</a>); the combination with buccal fat removal for facial slimming (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11645423/" rel="noopener nofollow" target="_blank">Tettamanzi 2024</a>); the "treatment gap" rationale for combining bipolar and microneedle radiofrequency (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6460431/" rel="noopener nofollow" target="_blank">Dayan 2019</a>). The case report of upper airway obstruction after radiofrequency-assisted liposuction of the neck and lower face is the reminder that swelling under the jaw is not cosmetic (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9542876/" rel="noopener nofollow" target="_blank">Chemali 2022</a>).</p>
      <p>Moderate, as the <a href="/upper-arms">upper arms guide</a> grades the body version and the <a href="/double-chin">double chin guide</a> the neck. Every series is single-centre and unblinded, which is why an operation with a 93% satisfaction rate sits at moderate rather than strong; it is nonetheless the one non-excisional treatment on this page whose result a stranger might notice.</p>
    `,
  },
  {
    id: 'prod-other-devices',
    category: 'product',
    title: 'Interstitial lasers, infrared and bipolar handpieces (Endolift, Titan, Exilis, Venus, Tempsure)',
    tldr: 'A 1470 nm fibre passed under the skin (Endolift) has open-label series reporting jowl-fat reduction and thicker, denser skin with 90% satisfaction; the infrared and multipolar surface handpieces have company studies and no controlled trials against the devices above. Emerging at best; several are the "tightening" on a salon menu.',
    evidence: 'emerging',
    focus: 'other',
    note: 'Not a pick: no controlled trial on any of them; if a clinic offers one, ask for the study on that device and compare it with the rows above',
    sessions: '1 (interstitial) to 6 (surface handpieces)',
    downtime: 'Days (interstitial) to none (surface)',
    cost: '€600–2,500',
    bodyHtml: `
      <p>The interstitial laser series measured biometrics: "Endolift laser can increase the thickness, density, and elasticity of the skin in the jowl area", 90% good-to-very-good by patients and by three blinded dermatologists, with no control group (<a href="https://pubmed.ncbi.nlm.nih.gov/35083532/" rel="noopener nofollow" target="_blank">Nilforoushzadeh 2022</a>). The surface bipolar and multipolar handpieces sold in salons deliver a fraction of the monopolar device's depth and appear in the reviews of off-face laxity as options with thin literature (<a href="https://pubmed.ncbi.nlm.nih.gov/26566567/" rel="noopener nofollow" target="_blank">Jerdan 2015</a>); the neck review ranks the field (<a href="https://pubmed.ncbi.nlm.nih.gov/37169415/" rel="noopener nofollow" target="_blank">Sturm 2023</a>). The 2026 low-energy monopolar study is the one recent hint that gentle repeated heating may add fat rather than remove it (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13475923/" rel="noopener nofollow" target="_blank">Kim 2026</a>).</p>
      <p>Emerging. The devices above have a randomised trial, a meta-analysis or a clearance study each; these have a brochure and a series. A six-session course of surface radiofrequency at €150 a session costs what one monopolar session costs and has no comparable measurement behind it.</p>
    `,
  },
  {
    id: 'prod-threads',
    category: 'product',
    title: 'Threads (PDO, PLLA, PCL; smooth, cog and barbed)',
    tldr: 'Absorbable sutures with barbs, hooked into the fat and pulled: the randomised trial found the effect gone by 60 days, the meta-analysis found swelling 35%, dimpling 10%, paraesthesia 6%, extrusion 2%, and the systematic reviews found "very limited durability" and a "methodological gap". The tightening they are sold beside is heat; this is a hitch.',
    evidence: 'limited',
    focus: 'other',
    note: 'Not a pick; the graded case is in Part 01 and the jowls guide',
    sessions: '1; repeated at 6–12 months',
    downtime: '1–2 weeks',
    cost: '€1,000–3,000',
    bodyHtml: `
      <p>The trial and reviews are in Part 01 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11997779/" rel="noopener nofollow" target="_blank">Germani 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/33821308/" rel="noopener nofollow" target="_blank">Niu 2021</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/34699439/" rel="noopener nofollow" target="_blank">Pham 2021</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/29481392/" rel="noopener nofollow" target="_blank">Gülbitti 2018</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/37021458/" rel="noopener nofollow" target="_blank">Contreras 2023</a>). Absorbable threads carry less paraesthesia (3.1% vs 11.7%) and extrusion (1.6% vs 7.6%) than permanent ones, and patients over 50 more dimpling and infection (<a href="https://pubmed.ncbi.nlm.nih.gov/33821308/" rel="noopener nofollow" target="_blank">Niu 2021</a>).</p>
      <p>Limited, as the <a href="/sagging-skin">sagging skin</a>, <a href="/jowls">jowls</a> and <a href="/neck">neck</a> guides grade them; the <a href="/marionette-lines">marionette</a> and <a href="/nasolabial-folds">nasolabial</a> guides allow emerging for a brief hitch of mild descent in someone refusing surgery.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-fat-loss',
    category: 'safety',
    title: 'Fat loss: the harm that looks like aging',
    tldr: 'Energy that reaches subcutaneous fat kills it: lipoatrophy leads the regulator\'s reports for focused ultrasound, fat loss is the most-reported adverse event for radiofrequency microneedling in one database analysis and 12% of events in another, and the early high-energy monopolar protocols produced the cheek depressions that gave the technology its reputation. A hollow temple or cheek after a "tightening" session is permanent except by filler, and the thin-faced patient who least needs tightening is the one most at risk.',
    bodyHtml: `
      <p>The ultrasound adverse-event review found "lipoatrophy, neurologic sequelae (including nerve damage, focal numbness, dysesthesia, and ptosis), and scarring were reported with the most frequency" in 106 device reports and one case of subcutaneous atrophy in the literature (<a href="https://pubmed.ncbi.nlm.nih.gov/39625163/" rel="noopener nofollow" target="_blank">Humphrey 2025</a>). The radiofrequency-microneedling database analyses: "the most reported side effects were fat loss, scarring, and postinflammatory erythema" (<a href="https://pubmed.ncbi.nlm.nih.gov/42430734/" rel="noopener nofollow" target="_blank">Camacho-Hubbard 2026</a>); fat loss in 11.6% of 224 events alongside textural change in 25% and pigmentary alteration in 18% (<a href="https://pubmed.ncbi.nlm.nih.gov/41886649/" rel="noopener nofollow" target="_blank">Chou 2026</a>). Monopolar radiofrequency's one significant side effect in 600 treatments was "a slight depression on the cheek" that resolved in 3.5 months (<a href="https://pubmed.ncbi.nlm.nih.gov/16989184/" rel="noopener nofollow" target="_blank">Weiss 2006</a>), and stacked pulses under the chin "were shown to reduce fat" (<a href="https://pubmed.ncbi.nlm.nih.gov/16042936/" rel="noopener nofollow" target="_blank">Finzi 2005</a>) — a feature under a chin and a harm on a cheek.</p>
      <p>Rules: no 4.5 mm ultrasound transducer or 3–4 mm needle depth over the temple, the thin cheek of an older face, or any zone the clinician cannot show on imaging to contain fat thick enough to take it; a written depth map by zone; and a frank statement before treatment that a slim face has more to lose than to gain. The <a href="/facial-volume-loss">volume guide</a> covers what repairs a hollow.</p>
    `,
  },
  {
    id: 'safety-nerves-burns',
    category: 'safety',
    title: 'Nerves, burns and the eye',
    tldr: 'The marginal mandibular nerve along the jaw and the temporal branch at the temple sit within the depths these devices heat: transient neuropraxia occurred in 1.2% of radiofrequency-assisted liposuction cases, nerve damage and ptosis lead the ultrasound device reports, and a 2024 ultrasound technique paper targets the parotid region specifically to "reduce the risk of nerve injury". Burns come from devices without visualisation or temperature control and from energy under the skin; the eye injuries came from ultrasound on eyelids.',
    bodyHtml: `
      <p>Nerves: marginal mandibular neuropraxia in 3 of 247 radiofrequency-assisted liposuction patients, resolving (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7489644/" rel="noopener nofollow" target="_blank">Dayan 2020</a>); "nerve damage, focal numbness, dysesthesia, and ptosis" among the most frequent ultrasound device reports (<a href="https://pubmed.ncbi.nlm.nih.gov/39625163/" rel="noopener nofollow" target="_blank">Humphrey 2025</a>); dysaesthesia among the rare (2%) effects in the pooled literature (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9861614/" rel="noopener nofollow" target="_blank">Contini 2023</a>); a technique paper choosing the parotid SMAS partly because it "reduces the risk of nerve injury" (<a href="https://pubmed.ncbi.nlm.nih.gov/38773827/" rel="noopener nofollow" target="_blank">Fatemi 2024</a>). Burns: 6.3% of the radiofrequency-microneedling events in the FDA data (<a href="https://pubmed.ncbi.nlm.nih.gov/41886649/" rel="noopener nofollow" target="_blank">Chou 2026</a>); the safety consensus on unvisualised ultrasound copies (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9305832/" rel="noopener nofollow" target="_blank">Pavicic 2022</a>); the helium-plasma safety communication described in the <a href="/sagging-skin">sagging skin guide</a>. The eye: a traumatic cataract and iris and conjunctival injury (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11370310/" rel="noopener nofollow" target="_blank">Xiao 2024</a>) and corneal opacity with iris atrophy and early cataract (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10201742/" rel="noopener nofollow" target="_blank">Marafon 2023</a>) after cosmetic ultrasound on the lids. Airway: one obstruction after radiofrequency-assisted liposuction of the neck (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9542876/" rel="noopener nofollow" target="_blank">Chemali 2022</a>).</p>
      <p>Rules: a clinician who can draw the nerve lines on your face before the first pass; no focused ultrasound inside the orbital rim, over the thyroid or on the anterior neck midline; a temperature readout or imaging on the screen, not a timer; and any weakness of the lip or brow, persisting numbness, blistering or a swelling neck reported the same day. Temporary weakness usually recovers over weeks; a burn scar and a cataract do not.</p>
    `,
  },
  {
    id: 'safety-later-surgery',
    category: 'safety',
    title: 'The facelift later: fibrosis, lost planes and a harder operation',
    tldr: 'A 2026 series of 180 neck lifts found 68% of patients had prior treatments and that the non-surgical ones left "fibrosis, loss of normal tissue planes, platysma and deep fascia rigidity, and unpredictable fat distribution", a deep cervicoplasty in 94%, longer operations and near-universal contour irregularities; a scoping review warns radiofrequency microneedling may alter the SMAS itself. Every device session is a decision about an operation you may want in ten years.',
    bodyHtml: `
      <p>The surgical evidence is recent and pointed: the neck-lift series (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13098153/" rel="noopener nofollow" target="_blank">O'Daniel 2026</a>) names deoxycholic acid, cryolipolysis, radiofrequency-assisted lipolysis, microneedle radiofrequency, focused ultrasound, subdermal radiofrequency and threads among the prior treatments it found scarred planes behind; the scoping review concludes patients "should be informed that RFMN may lead to dermal fibrosis, tissue adhesions, and altered superficial musculoaponeurotic system composition, which could interfere with future facelift procedures" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13120527/" rel="noopener nofollow" target="_blank">Panlilio 2026</a>); the ultrasound review found the concern "anecdotal, largely unverified" with one reported case of facelift compromise and asked for data (<a href="https://pubmed.ncbi.nlm.nih.gov/39625163/" rel="noopener nofollow" target="_blank">Humphrey 2025</a>).</p>
      <p>What this means for a decision now: a single session of surface ultrasound or monopolar radiofrequency on a mildly lax face is unlikely to matter to a surgeon; yearly sessions for a decade, deep needle radiofrequency, subdermal probes and threads in a neck that will eventually need a neck lift are the pattern the series describes. Someone who knows they will want surgery at 60 should ask the surgeon at 50 what the devices will do to their operation, and expect the answer to be "make it harder".</p>
    `,
  },
  {
    id: 'safety-pigment-scars',
    category: 'safety',
    title: 'Pigment, texture and scarring — and darker skin',
    tldr: 'Ultrasound and monopolar radiofrequency bypass the epidermis and the reviews report no hyperpigmentation; radiofrequency microneedling reports infrequent, self-limited post-inflammatory pigmentation in the trials and pigmentary alteration in 18% of the regulator\'s events, with textural change in 25%; the energy devices have been shown to treat laxity safely in skin of colour with a paucity of data in type VI. Needles and heat in dark skin need lower density and a clinician who has treated it.',
    bodyHtml: `
      <p>The HIFU meta-analysis found "no hyperpigmentation was reported by included studies" (<a href="https://pubmed.ncbi.nlm.nih.gov/32026164/" rel="noopener nofollow" target="_blank">Ayatollahi 2020</a>) and the multipass monopolar series "no scarring or dyspigmentation" across skin types (<a href="https://pubmed.ncbi.nlm.nih.gov/16042936/" rel="noopener nofollow" target="_blank">Finzi 2005</a>); the review of energy devices in skin of colour concluded that "microfocused ultrasound has been shown to safely treat skin laxity in skin of color" with "a paucity of studies which include patients with skin type VI" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11189641/" rel="noopener nofollow" target="_blank">Sanyal 2024</a>). Radiofrequency microneedling: post-inflammatory hyperpigmentation "infrequent and self-limited" in the trials (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13433423/" rel="noopener nofollow" target="_blank">Kumar 2026</a>) and lower than after laser in the meta-analysis (<a href="https://pubmed.ncbi.nlm.nih.gov/36062400/" rel="noopener nofollow" target="_blank">Li 2022</a>), against textural change in 25% and pigmentary alteration in 18% of the regulator's reported events (<a href="https://pubmed.ncbi.nlm.nih.gov/41886649/" rel="noopener nofollow" target="_blank">Chou 2026</a>). Scarring appears in both device-report analyses.</p>
      <p>Rules: for darker skin, ultrasound or monopolar radiofrequency before needles; if needles, insulated tips, lower density and a test area; no treatment over active acne, a cold sore, eczema or a tan; and sun protection afterwards as the <a href="/dark-spots">dark spots guide</a> sets out. The <a href="/skin-resurfacing">resurfacing guide</a> covers the ablative devices whose pigment risk is higher.</p>
    `,
  },
  {
    id: 'safety-who-not',
    category: 'safety',
    title: 'Who should not have it',
    tldr: 'Anyone with a pacemaker, defibrillator or other implanted electrical device (radiofrequency and muscle stimulation); metal implants, plates or permanent filler in the field (radiofrequency); pregnancy (everything); active infection, open wounds, a cold sore or severe acne in the area; a bleeding disorder or anticoagulation for the subdermal procedures; a thin, hollow or heavy face for the reasons in Part 01; and a recent filler or toxin injection until the injector agrees. And anyone expecting a facelift.',
    bodyHtml: `
      <p>The device trials excluded implanted electronic devices, pregnancy, active skin disease in the field, and — for the subdermal procedures — the medical conditions that make an operation unsafe (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10702463/" rel="noopener nofollow" target="_blank">Ruff 2023</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/30531187/" rel="noopener nofollow" target="_blank">Alhaddad 2019</a>), so their safety record says nothing about those patients. Heating over a permanent filler or a metal plate concentrates energy in the implant; radiofrequency and electrical stimulation can interfere with a pacemaker; the effect of focused ultrasound on a recent hyaluronic-acid filler is uncertain, and most injectors ask for a two-to-four-week interval either way.</p>
      <p>The commonest reason not to have it is the one in Part 01: a jowl, a heavy neck or a hollow cheek being sold a "non-surgical facelift". The <a href="/sagging-skin">sagging skin guide</a> sorts the three problems, the <a href="/jowls">jowls</a> and <a href="/neck">neck</a> guides say when the surgeon is the honest answer, and the <a href="/facial-volume-loss">volume guide</a> covers the syringe.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-non-surgical-facelift',
    category: 'faq',
    title: 'Is there such a thing as a non-surgical facelift?',
    tldr: 'No. The one blinded, randomised comparison found the device delivered 37% of a facelift\'s laxity improvement. Devices tighten skin by millimetres; a facelift moves the SMAS and removes skin.',
    bodyHtml: `
      <p>0.44 grades against 1.20, 16% against 49% (<a href="https://pubmed.ncbi.nlm.nih.gov/20404228/" rel="noopener nofollow" target="_blank">Alexiades-Armenakas 2010</a>); the facelift meta-analyses record 88–94% satisfaction at the price of a 10–17% complication rate (<a href="https://pubmed.ncbi.nlm.nih.gov/40801931/" rel="noopener nofollow" target="_blank">Khoury 2025</a>). The phrase is marketing; the <a href="/jowls">jowls guide</a> says when the operation is the answer.</p>
    `,
  },
  {
    id: 'faq-ultherapy-vs-thermage',
    category: 'faq',
    title: 'Ultherapy or Thermage?',
    tldr: 'The randomised split-face trial found them equal for face and neck laxity, satisfaction and side effects. Ultrasound for a brow or a defined lower-face line; monopolar radiofrequency for thin, crepey skin and the eyelids; whichever the clinic uses well.',
    bodyHtml: `
      <p>"No statistical differences between MRF and MFU-V in standardized investigator measures of face and neck laxity, patient satisfaction, and adverse events" (<a href="https://pubmed.ncbi.nlm.nih.gov/30531187/" rel="noopener nofollow" target="_blank">Alhaddad 2019</a>). Part 02 sets out where each has its own evidence.</p>
    `,
  },
  {
    id: 'faq-morpheus8-tightening',
    category: 'faq',
    title: 'Does Morpheus8 tighten skin?',
    tldr: 'It thickens and smooths it, with randomised trials for texture and scars; for laxity the evidence is thinner and the regulator\'s reports list fat loss, scarring and burns. Texture with a tightening bonus, at a depth the clinician must get right.',
    bodyHtml: `
      <p>The 41-study review (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13433423/" rel="noopener nofollow" target="_blank">Kumar 2026</a>), the facelift comparison of the class (<a href="https://pubmed.ncbi.nlm.nih.gov/20404228/" rel="noopener nofollow" target="_blank">Alexiades-Armenakas 2010</a>) and the device-report analyses (<a href="https://pubmed.ncbi.nlm.nih.gov/41886649/" rel="noopener nofollow" target="_blank">Chou 2026</a>) are in Part 02; the <a href="/microneedling">microneedling guide</a> grades the whole class.</p>
    `,
  },
  {
    id: 'faq-how-long',
    category: 'faq',
    title: 'How long does it last?',
    tldr: 'Results build over three to six months and are measured at a year in the best studies; nothing has been followed for two. Clinics repeat ultrasound and monopolar radiofrequency yearly, microneedling courses every one to two years, and muscle stimulation as maintenance.',
    bodyHtml: `
      <p>The systematic review of microfocused ultrasound reports improvement "which continued up to one year" and that "longer-term follow-up data are not available" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9861614/" rel="noopener nofollow" target="_blank">Contini 2023</a>); the HIFU meta-analysis found long follow-up "not reported by majority of studies" (<a href="https://pubmed.ncbi.nlm.nih.gov/32026164/" rel="noopener nofollow" target="_blank">Ayatollahi 2020</a>). Yearly is the clinics' interval, not a trial's.</p>
    `,
  },
  {
    id: 'faq-pain',
    category: 'faq',
    title: 'How much does it hurt?',
    tldr: 'Focused ultrasound: 4–6 out of 10 in the studies, worse over the jaw and under the chin, worth pre-medicating for. Monopolar radiofrequency and parallel ultrasound: 2–3. Microneedling: numbing cream. Subdermal procedures: sedation or local anaesthesia.',
    bodyHtml: `
      <p>Pain scores of 5.68, 6.09 and 6.53 for cheek, submental and submandibular ultrasound (<a href="https://pubmed.ncbi.nlm.nih.gov/24990884/" rel="noopener nofollow" target="_blank">Oni 2014</a>) and 4.2 out of 10 pooled (<a href="https://pubmed.ncbi.nlm.nih.gov/32026164/" rel="noopener nofollow" target="_blank">Ayatollahi 2020</a>); 3.0 without anaesthesia for the newer device (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11756818/" rel="noopener nofollow" target="_blank">Zhu 2024</a>); 1.9 for monopolar radiofrequency (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10818126/" rel="noopener nofollow" target="_blank">Hwang 2024</a>); 2.6 out of 5 for parallel ultrasound (<a href="https://pubmed.ncbi.nlm.nih.gov/38411259/" rel="noopener nofollow" target="_blank">Oku 2024</a>).</p>
    `,
  },
  {
    id: 'faq-with-filler-toxin',
    category: 'faq',
    title: 'Can I have it with filler, toxin or a biostimulator?',
    tldr: 'Yes, in sequence: energy first, injectables two to four weeks later, or injectables first and energy after they have settled. Ultrasound plus dilute calcium hydroxylapatite has eleven mostly uncontrolled studies behind it.',
    bodyHtml: `
      <p>The systematic review of combined ultrasound and calcium hydroxylapatite found improvements in scales and skin quality with mild-to-moderate side effects and asked for controlled trials (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12080884/" rel="noopener nofollow" target="_blank">Amiri 2025</a>); the <a href="/regenerative-aesthetics">biostimulator guide</a> and <a href="/fillers">filler guide</a> grade the injectables. Heating over fresh filler is the thing to avoid.</p>
    `,
  },
  {
    id: 'faq-darker-skin',
    category: 'faq',
    title: 'Is it safe for darker skin?',
    tldr: 'Ultrasound and monopolar radiofrequency, yes — they bypass the epidermis and the reviews report no pigment change. Radiofrequency microneedling, with care: infrequent pigmentation in trials, 18% of reported events in the regulator\'s data.',
    bodyHtml: `
      <p>The skin-of-colour review (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11189641/" rel="noopener nofollow" target="_blank">Sanyal 2024</a>), the HIFU meta-analysis (<a href="https://pubmed.ncbi.nlm.nih.gov/32026164/" rel="noopener nofollow" target="_blank">Ayatollahi 2020</a>) and the microneedling data (<a href="https://pubmed.ncbi.nlm.nih.gov/41886649/" rel="noopener nofollow" target="_blank">Chou 2026</a>) are in Safety.</p>
    `,
  },
  {
    id: 'faq-cost',
    category: 'faq',
    title: 'What does it cost, and is it worth it?',
    tldr: 'From €1,000 for a monopolar session to €7,000 for a subdermal neck procedure; a yearly ultrasound for five years costs a facelift. Worth it for a mildly lax face that will never have surgery, or a brow, or a chest. Not worth it as a substitute for the operation a jowl needs.',
    bodyHtml: `
      <p>Cost was the main deterrent to repeating treatment for 78.6% in the satisfaction survey (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11314364/" rel="noopener nofollow" target="_blank">Bukhari 2024</a>) and half of patients needed photographs to see their result (<a href="https://pubmed.ncbi.nlm.nih.gov/30681800/" rel="noopener nofollow" target="_blank">Montes 2019</a>). The prices drawer has the bands; the <a href="/retinoids">retinoid</a> and <a href="/sun-damage">sun damage</a> guides are the cheaper way to a thicker dermis.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'How tightening works — and the trial that measured it against a facelift',
    intro: '',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you book: who holds the handpiece, the prices and the vetting',
    intro: '',
    sections: context,
  },
  {
    id: 'uses',
    title: 'What people book tightening for — graded by evidence',
    intro: 'Nine reasons people book a tightening session, from the brow that a blinded rater can measure to the jowl that no device has moved. Sorted by evidence, not by what the clinic sells most.',
    sections: uses,
  },
  {
    id: 'products',
    title: 'The technologies, device by device',
    intro: 'Nine device classes graded on their own trials — where the heat goes, what it measured, what the regulator has on file, and what the operation would have done.',
    sections: products,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'Fat loss, nerves and the eye, the facelift later, pigment and scarring, and who should keep their money.',
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
  brow: 'Brow',
  lowerface: 'Lower face',
  neck: 'Neck',
  eyes: 'Eyes',
  body: 'Chest & body',
  texture: 'Texture',
  ultrasound: 'Ultrasound',
  rf: 'Radiofrequency',
  invasive: 'Subdermal',
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
