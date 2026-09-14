/**
 * At-home devices guide — single source of truth (in-clinic layout).
 *
 * Consumed by /home-devices. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: a home device is clinic technology at a fraction of the
 * dose, sold on the clinic's evidence. The trials that exist were mostly
 * paid for by the manufacturer, ran for weeks, and had no sham arm — with
 * two exceptions worth the money (laser caps for pattern hair loss; LED
 * for fine lines and acne) and one honest workhorse (home IPL for hair
 * removal). Part 01 grades what people buy a device for; Part 02 grades the
 * technologies themselves. Tiers stay consistent with the guides that
 * already grade these rows (/red-light-therapy, /hair-loss, /crows-feet,
 * /sagging-skin, /jowls, /eye-bags, /microneedling, /laser-ipl, /cellulite,
 * /hooded-eyes). Prices are indicative retail prices in Western/Central
 * Europe and the UK as of September 2026, not quotes.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea =
  | 'hair'
  | 'lines'
  | 'lift'
  | 'pigment'
  | 'acne'
  | 'body'
  | 'light'
  | 'energy'
  | 'needle'
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
  'A home device is clinic technology at a fraction of the dose — a weaker light, a cooler radiofrequency, a shorter needle — sold on the clinic\'s evidence. The reviews agree on the state of the literature: "a paucity of randomized, double-blind controlled trials", mostly "smaller, uncontrolled industry-sponsored single-center studies" suggesting "modest results". Read every "clinically proven" through that lens.',
  'Two categories have earned their tier. Laser and LED caps for pattern hair loss have sham-controlled randomised trials and meta-analyses of 38 studies in 3,098 patients (+18 to +26 hairs per cm² against +2 to +9 for the sham comb at 26 weeks) — the best-evidenced home device there is, with every trial paid for by a manufacturer. Red and near-infrared LED for fine lines has a multicentre, double-blind, sham-controlled trial of a home mask for crow\'s feet, and blue or blue-red LED for acne has double-blind randomised trials.',
  'Home IPL removes hair. Seven studies, none randomised, measured 6–72% short-term reductions, a typical device taking about half of the hair off a treated area and holding much of it at six months; blistering, crusting and pigment change are the reported harms, in darker or tanned skin above all. It is the one home device that replaces a recurring clinic bill.',
  'Everything sold for lifting, tightening, sculpting and pigment sits at emerging or below. Home radiofrequency, home fractional lasers, microcurrent and muscle-stimulation handhelds have uncontrolled manufacturer trials with blinded photographs and one small randomised brow study; dissolving microneedle patches beat a serum on crow\'s feet in split-face trials; dermarollers, gua sha, rollers, cleansing brushes and "home HIFU" have nothing controlled for any anti-aging claim, and the plasma pens on the marketplaces are burns sold as surgery.',
  'The device you use beats the device you own. Every positive trial ran three to seven sessions a week for eight to twenty-six weeks, and the effect fades when the schedule stops; price does not track evidence, and "FDA-cleared" or "CE" attests to electrical safety, not to results. Pick the row graded moderate or above, buy the device with a published trial on itself, use it on the trial\'s schedule, and judge it in a photograph at twelve weeks.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-home-devices-are',
    category: 'concept',
    title: 'What a home device is — clinic technology at a fraction of the dose',
    tldr: 'Four families: light (LED masks, laser caps, home IPL and lasers), energy (radiofrequency, microcurrent, muscle stimulation, ultrasound), needles (dermarollers, dissolving microneedle patches, plasma pens) and mechanical (rollers, gua sha, cleansing brushes). Each borrows a clinic treatment and reduces the power until an untrained person cannot burn themselves with it — which is the safety design and the efficacy problem in one sentence.',
    bodyHtml: `
      <p>The dermatology reviews describe the same market: "a consumer-driven market with a wide variety of home-use devices" whose specifications, price, ease of use and technology "differ greatly", and where "scientific studies may be weak or lacking" (<a href="https://pubmed.ncbi.nlm.nih.gov/25830253/" rel="noopener nofollow" target="_blank">Keller 2014</a>). The design rule for a consumer device is that it must be safe in untrained hands and in the wrong skin type, so an LED mask delivers a fraction of a clinic panel's irradiance, a home IPL a fraction of a clinic IPL's fluence, a home radiofrequency handpiece a fraction of the heat, and a home fractional laser far fewer, shallower microcolumns than the office machine (<a href="https://pubmed.ncbi.nlm.nih.gov/22386051/" rel="noopener nofollow" target="_blank">Leyden 2012</a>). The manufacturer's answer is repetition: daily or several times a week, for weeks to months, in place of the clinic's few sessions.</p>
      <p>That trade — time and adherence in place of power — is the whole story of this guide. Where the mechanism tolerates low doses delivered often (photobiomodulation of hair follicles and fibroblasts, blue light on acne bacteria, repeated low-fluence light on hair follicles), the home devices have evidence. Where the clinic effect depends on a dose no consumer device is allowed to deliver (the deep heat that tightens, the ablation that resurfaces, the energy that breaks up pigment), they do not. The <a href="/red-light-therapy">red-light guide</a> covers the photobiomodulation science; this guide grades the devices people actually buy.</p>
    `,
  },
  {
    id: 'what-the-evidence-looks-like',
    category: 'concept',
    title: 'How to read a home-device study — who paid, who was blinded, and what was measured',
    tldr: 'A 2024 systematic search found 18 clinical studies of home facial-rejuvenation devices in total, with "small sample sizes and short follow-up periods"; a review of hand-held laser and light devices found "a paucity of randomized, double-blind controlled trials" and "smaller, uncontrolled industry-sponsored single-center studies" with modest results; a 2026 analysis of social media found only 8.3% of promotional posts cited a peer-reviewed paper and the devices\' promoted energy outputs did not match the studies invoked. The exceptions — sham-controlled trials of laser caps, an LED mask and acne lights — are named in Part 01.',
    bodyHtml: `
      <p>The state of the literature, in the reviewers' words. The 2024 evaluation of home beauty devices screened the field down to 18 clinical studies and concluded that the devices "can improve skin aging to a certain extent", that apart from "transient redness and swelling" no adverse reactions were observed, and that "existing studies suffer from issues such as small sample sizes and short follow-up periods" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10929553/" rel="noopener nofollow" target="_blank">Bu 2024</a>). The review of hand-held cosmetic laser and light devices found the most data for IPL hair removal and LED acne treatment, "modest results" limited by "small sample sizes and short follow-up periods", and "a paucity of randomized, double-blind controlled trials" (<a href="https://pubmed.ncbi.nlm.nih.gov/25705949/" rel="noopener nofollow" target="_blank">Hession 2015</a>). A 2026 evidence grading placed blue and blue-red LED for acne and LED and radiofrequency for rejuvenation at moderate-quality evidence, home IPL and heat devices for acne at "not recommended", and home microneedling at low-quality evidence "associated with infectious complications" (<a href="https://pubmed.ncbi.nlm.nih.gov/42545315/" rel="noopener nofollow" target="_blank">Raef 2026</a>).</p>
      <p>Three questions sort the studies. <strong>Who paid?</strong> Nearly every device trial in this guide was funded by its maker, including the good ones; that does not make them wrong, but it explains why negative trials are rare. <strong>Was there a sham?</strong> A device that glows, hums or warms is a powerful placebo, and blinded-photograph grading against baseline (the design of most home RF and laser studies) cannot separate the device from the season, the skincare and the wish. The sham-controlled trials — the laser combs, the crow's-feet mask, the acne lights, one brow-lift handheld — are the rows graded moderate or above. <strong>What was measured?</strong> Hair counts per cm², profilometry of a wrinkle and blinded scale grading are outcomes; "94% would recommend" is a survey. The social-media analysis found the marketing runs "well beyond substantiated evidence", with 87.7% of TikTok device posts from non-credentialed accounts and a "discrepancy in terms of energy output from promoted at-home devices, which remain untested, compared with the specifications found in these references" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12977816/" rel="noopener nofollow" target="_blank">Merkle 2026</a>).</p>
    `,
  },
  {
    id: 'can-and-cant',
    category: 'concept',
    title: 'What a home device can and cannot do',
    tldr: 'Can: add hair density in pattern hair loss, take most of the hair off a leg or lip, soften fine lines and crow\'s feet over months, clear mild acne, plump a crease overnight with a patch. Cannot: lift a jowl, tighten a neck, replace a syringe of filler or toxin, clear melasma or sun spots, or resurface. The line runs along the dose the device is allowed to deliver, not along the marketing.',
    bodyHtml: `
      <p>The positive evidence clusters where low, frequent doses suit the biology. Follicles respond to red light delivered every other day for months, and the meta-analyses show it (<a href="https://pubmed.ncbi.nlm.nih.gov/39404126/" rel="noopener nofollow" target="_blank">Perez 2025</a>). Fibroblasts respond to red and near-infrared light in the clinic trials (<a href="https://pubmed.ncbi.nlm.nih.gov/17566756/" rel="noopener nofollow" target="_blank">Lee 2007</a>) and, in the one sham-controlled home trial, to a mask worn for 16 weeks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11835066/" rel="noopener nofollow" target="_blank">Park 2025</a>). Acne bacteria absorb blue light (<a href="https://pubmed.ncbi.nlm.nih.gov/23278295/" rel="noopener nofollow" target="_blank">Kwon 2013</a>). Hair follicles are damaged by repeated low-fluence light (<a href="https://pubmed.ncbi.nlm.nih.gov/22126235/" rel="noopener nofollow" target="_blank">Thaysen-Petersen 2012</a>).</p>
      <p>The negative space is as clear. Lifting needs a mechanical or thermal event at depth — a thread, a facelift, or the deep heat of clinic ultrasound and radiofrequency graded in the <a href="/sagging-skin">sagging skin guide</a> — and no consumer device is permitted to deliver it; the home RF trials measured periorbital wrinkles, not jowls. Pigment needs a wavelength and fluence that consumer devices are built not to reach. Volume needs a syringe. Resurfacing needs ablation. The rows below grade each claim on what was measured, and the honest summary is that a home device is a maintenance tool for hair, fine lines and acne, an alternative for hair removal, and a placebo for lifting.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'rules-and-access',
    category: 'context',
    title: 'What "FDA-cleared", "CE" and "clinically proven" mean on the box',
    tldr: 'In the EU and UK a device that claims to treat a condition — pattern hair loss, acne — is a medical device and carries a CE mark under the medical-device rules; a device that promises "radiance" or "smoother skin" is a consumer product whose CE mark attests to electrical safety and nothing clinical. In the US, "FDA-cleared" means a 510(k) finding that the device is substantially equivalent to one already sold, a bar the laser combs and most LED masks have passed on safety data; "FDA-approved" is a different, higher bar that no cosmetic home device has met. Home IPL is the one category with a professional society\'s safety guideline.',
    bodyHtml: `
      <p>The European Society for Laser Dermatology wrote its guidelines on light-based home hair-removal devices because "although some regulations exist, they differ from region to region and there is a specific need for international common principles and guidelines relating to the manufacture, marketing and use of intense pulsed light and laser devices, including manufacturing standards for home-use products" — and noted that the same devices were being marketed for "photo-rejuvenation" with no such standards at all (<a href="https://pubmed.ncbi.nlm.nih.gov/22211702/" rel="noopener nofollow" target="_blank">Town 2012</a>). The systematic review that accompanied it found no randomised trial of any home hair-removal device and "theoretical concerns about ocular damage and paradoxical hair growth" that the studies had not examined (<a href="https://pubmed.ncbi.nlm.nih.gov/22126235/" rel="noopener nofollow" target="_blank">Thaysen-Petersen 2012</a>).</p>
      <p>Practically: a CE mark on a mask means it will not electrocute you; a medical CE mark (with a four-digit notified-body number) on a laser cap means a regulator accepted a clinical file for the stated indication; "FDA-cleared" means the same as the safety-equivalence it says and no more. "Clinically proven" has no legal definition anywhere in Europe and, in this guide, usually resolves to a manufacturer-funded study of twenty to sixty people without a sham arm. None of these devices needs a prescription; none is covered by insurance; and the rules on returns (14 days for online purchases in the EU, provided the device is unused) matter more than the badge, because the trial schedules below need eight to twenty-six weeks to show anything.</p>
    `,
  },
  {
    id: 'prices-protocols',
    category: 'context',
    title: 'What they cost, in money and in minutes',
    tldr: 'LED masks €150–550; laser caps and helmets €300–2,500; home IPL €150–500; home radiofrequency €300–700; microcurrent handhelds €150–450; home lasers €400–700; microneedle patches €5–15 a pair; dermarollers, rollers and gua sha €10–40; cleansing brushes €100–200. The real price is the schedule: three to seven sessions a week for two to six months in every positive trial, and the results fade when it stops.',
    bodyHtml: `
      <p>Indicative European retail prices, September 2026. The trial schedules are the useful numbers: the laser-comb trials treated three times a week for 26 weeks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3986893/" rel="noopener nofollow" target="_blank">Jimenez 2014</a>) and the cap trials every other day for 17 to 24 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/28328705/" rel="noopener nofollow" target="_blank">Friedman 2017</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/30569416/" rel="noopener nofollow" target="_blank">Suchonwanit 2019</a>); the crow's-feet mask trial ran 16 weeks with grading at 8, 12 and 16 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11835066/" rel="noopener nofollow" target="_blank">Park 2025</a>); the home IPL trials treated weekly for three sessions and then measured for six months (<a href="https://pubmed.ncbi.nlm.nih.gov/19396717/" rel="noopener nofollow" target="_blank">Emerson 2009</a>); the home fractional laser ran a daily active phase and then a maintenance phase (<a href="https://pubmed.ncbi.nlm.nih.gov/22386051/" rel="noopener nofollow" target="_blank">Leyden 2012</a>); the home RF studies used two or three sessions a week for four to six weeks and followed up for one to three months (<a href="https://pubmed.ncbi.nlm.nih.gov/25607700/" rel="noopener nofollow" target="_blank">Shemer 2014</a>).</p>
      <p>Translate that before buying. A laser cap at €600 used three times a week for six months costs less than a year of clinic PRP and about the same as a year of minoxidil; an LED mask at €400 used four times a week for four months is ten minutes a session for sixty-odd sessions; a home IPL at €300 replaces a course of clinic sessions that would cost €600–1,500 for one area. A device that will be used twice and shelved is worth nothing at any price, and the largest home-device trials were designed, in the authors' words, to test whether users would follow the instructions at all (<a href="https://pubmed.ncbi.nlm.nih.gov/22386051/" rel="noopener nofollow" target="_blank">Leyden 2012</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/27910259/" rel="noopener nofollow" target="_blank">Gold 2017</a>).</p>
    `,
  },
  {
    id: 'vetting',
    category: 'context',
    title: 'How to vet a device before you pay for it',
    tldr: 'Five checks: a published trial of this device (not of the technology), with a sham arm if possible; a stated wavelength and irradiance or fluence, so the dose can be compared with the trials; a stated schedule you will actually keep; eye protection and a skin-tone sensor where light is involved; and a returns policy long enough to matter. Then a photograph in the same light at week zero and week twelve.',
    bodyHtml: `
      <p><strong>The trial on the device itself.</strong> The sham-controlled trials in this guide are attached to specific products — the HairMax comb (<a href="https://pubmed.ncbi.nlm.nih.gov/19366270/" rel="noopener nofollow" target="_blank">Leavitt 2009</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3986893/" rel="noopener nofollow" target="_blank">Jimenez 2014</a>), the helmet and cap trials (<a href="https://pubmed.ncbi.nlm.nih.gov/24078483/" rel="noopener nofollow" target="_blank">Lanzafame 2013</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4265291/" rel="noopener nofollow" target="_blank">Lanzafame 2014</a>), one 630/850 nm mask (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11835066/" rel="noopener nofollow" target="_blank">Park 2025</a>), the acne lights (<a href="https://pubmed.ncbi.nlm.nih.gov/22091799/" rel="noopener nofollow" target="_blank">Gold 2011</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/23278295/" rel="noopener nofollow" target="_blank">Kwon 2013</a>). A brand that cites "the science of red light" is citing someone else's device at someone else's dose. <strong>The numbers on the box.</strong> Wavelength in nanometres and irradiance in mW/cm² (light), fluence in J/cm² (IPL), or a stated current (microcurrent) let you compare with the trial; a device that will not state them has a reason. The photobiomodulation CME for dermatologists asks clinicians to "counsel patients on proper application for home-use devices to best manage safety and expectations" precisely because the doses vary so widely (<a href="https://pubmed.ncbi.nlm.nih.gov/38307144/" rel="noopener nofollow" target="_blank">Mineroff 2024</a>).</p>
      <p><strong>The schedule.</strong> Three to seven sessions a week for two to six months, or nothing. <strong>Safety features.</strong> Goggles or shielded eye cut-outs for LED and laser; a skin-tone sensor and a stated skin-type range for IPL; disposable heads for anything with a needle. <strong>Returns.</strong> Fourteen days is the EU legal minimum for an unused device and useless for a trial of efficacy; the brands confident in their product offer 60–90 days. Photograph the target area in the same window light, no make-up, at weeks 0, 8 and 12, and let the photograph decide — the trial raters were blinded for a reason.</p>
    `,
  },
];

const uses: Section[] = [
  {
    id: 'use-hair-regrowth',
    category: 'use',
    title: 'Thinning hair: laser and LED combs, caps and helmets',
    tldr: 'The best-evidenced home device there is. Four sham-controlled randomised trials of the laser comb added 18–26 terminal hairs per cm² at 26 weeks against 2–9 for the sham; helmet and cap trials in men and women added 35–51% more hair counts than sham; meta-analyses of 38 studies in 3,098 patients find a large, heterogeneous effect and a further gain when the device is added to minoxidil. Every trial short and manufacturer-funded; no head-to-head against minoxidil or finasteride; results fade when use stops.',
    evidence: 'strong',
    focus: 'hair',
    sessions: '3×/week to every other day, 6–25 min, for 16–26 weeks then ongoing',
    downtime: 'None; temporary shedding in a few',
    cost: '€300–2,500 for the device',
    bodyHtml: `
      <p>The randomised, double-blind, sham-device-controlled evidence is unusual for a consumer product. The multicentre HairMax LaserComb trial in men found "a significantly greater increase in mean terminal hair density than subjects in the sham device group (p &lt; 0.0001)" at 26 weeks in 110 completers, with no difference in adverse effects (<a href="https://pubmed.ncbi.nlm.nih.gov/19366270/" rel="noopener nofollow" target="_blank">Leavitt 2009</a>); four further sham-controlled trials of the 7-, 9- and 12-beam combs in 225 evaluable men and women found terminal hair counts up by 18.4–25.7 per cm² against 1.6–9.4 for the sham, "independent of the age and sex of the subject and the lasercomb model" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3986893/" rel="noopener nofollow" target="_blank">Jimenez 2014</a>). The 655 nm helmet trials found 35–39% more hair growth than sham in men (<a href="https://pubmed.ncbi.nlm.nih.gov/24078483/" rel="noopener nofollow" target="_blank">Lanzafame 2013</a>) and 37% in women (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4265291/" rel="noopener nofollow" target="_blank">Lanzafame 2014</a>); a 650 nm laser cap worn every other day for 17 weeks gave a "51% increase in hair counts as compared with sham-treated control patients" in women (<a href="https://pubmed.ncbi.nlm.nih.gov/28328705/" rel="noopener nofollow" target="_blank">Friedman 2017</a>); a Thai helmet trial was superior to sham for density and diameter at 24 weeks, with the authors' own caveats of "small sample size, no long-term follow-up data, and use of inappropriate sham devices" (<a href="https://pubmed.ncbi.nlm.nih.gov/30569416/" rel="noopener nofollow" target="_blank">Suchonwanit 2019</a>).</p>
      <p>The meta-analyses: laser therapy in men "superior to placebo (P &lt; .00001)" alongside minoxidil and finasteride (<a href="https://pubmed.ncbi.nlm.nih.gov/28396101/" rel="noopener nofollow" target="_blank">Adil 2017</a>); a pooled effect in both sexes, comb and helmet alike, with a larger effect at lower treatment frequency (<a href="https://pubmed.ncbi.nlm.nih.gov/30706177/" rel="noopener nofollow" target="_blank">Liu 2019</a>); 38 studies and 3,098 patients with standardised mean differences of 1.14 under 20 weeks and 1.44 beyond, and heterogeneity above 80% (<a href="https://pubmed.ncbi.nlm.nih.gov/39404126/" rel="noopener nofollow" target="_blank">Perez 2025</a>); and seven randomised trials in which the device added to minoxidil beat minoxidil alone by 6.6 hairs per cm² with higher satisfaction and no extra adverse events (<a href="https://pubmed.ncbi.nlm.nih.gov/40826200/" rel="noopener nofollow" target="_blank">Mawu 2025</a>). The critical assessment stands: nine trials, small samples, "a lack of visual evidence", no standard regimen and no data on maintenance or long-term consequences (<a href="https://pubmed.ncbi.nlm.nih.gov/27618394/" rel="noopener nofollow" target="_blank">Gupta 2017</a>). Strong for density in pattern hair loss, as an addition to or alternative to minoxidil; the <a href="/hair-loss">hair loss guide</a> ranks it below the drugs, and the <a href="/red-light-therapy">red-light guide</a> covers the dose.</p>
    `,
  },
  {
    id: 'use-hair-removal',
    category: 'use',
    title: 'Unwanted hair: home IPL and diode lasers',
    tldr: 'A systematic review found seven studies of home light-based hair removal — one controlled, six uncontrolled, no randomised trial — with short-term reductions of 6–72%; the typical low-fluence IPL took 47% of terminal hairs off at four weeks and 41% at six months after three weekly sessions, with 84% of users showing a significant reduction. Erythema in most, and blistering, crusting and pigment change in some. The one home device that replaces a clinic course, for light skin with dark hair.',
    evidence: 'moderate',
    focus: 'body',
    sessions: 'Weekly for 4–12 sessions, then monthly or as regrowth appears',
    downtime: 'Redness for hours; no sun or tanning on treated skin',
    cost: '€150–500 for the device',
    bodyHtml: `
      <p>The review identified "a total of seven studies: one controlled and six uncontrolled trials. No randomized controlled trials", the best evidence for IPL (three devices) and the least for a home diode laser (one uncontrolled study); "hair reduction percentages ranged from 6% to 72% after repetitive treatments", mostly measured at three and six months, with erythema the most frequent side effect and "oedema, blistering, crusting and pigment changes" also reported (<a href="https://pubmed.ncbi.nlm.nih.gov/22126235/" rel="noopener nofollow" target="_blank">Thaysen-Petersen 2012</a>). The representative trial, in "simulated consumer use", found a 47% mean reduction in terminal hair counts at four weeks and 41% at six months after three weekly treatments, 84% of participants with a significant reduction (mean 51%, range 25–86%) and only mild transient erythema (<a href="https://pubmed.ncbi.nlm.nih.gov/19396717/" rel="noopener nofollow" target="_blank">Emerson 2009</a>). A randomised study of sun exposure after a low-fluence home IPL found no amplified reaction in skin types II–IV and perifollicular darkening in the one type V participant (<a href="https://pubmed.ncbi.nlm.nih.gov/26296296/" rel="noopener nofollow" target="_blank">Thaysen-Petersen 2015</a>).</p>
      <p>The physics is the clinic's at lower fluence: melanin in the hair shaft absorbs the light and heats the follicle, so the device needs dark hair on light skin, and the sensors on modern devices refuse to fire on skin too dark to be safe. Grey, white, red and very fine hair do not respond; the face is treated from the cheekbone down, never near the eyes. Moderate for a consistent, measurable, partial and maintainable reduction; the professional-society guideline on these devices sets out the safety case and the gaps (<a href="https://pubmed.ncbi.nlm.nih.gov/22211702/" rel="noopener nofollow" target="_blank">Town 2012</a>), and the <a href="/laser-ipl">laser and IPL guide</a> grades the clinic versions.</p>
    `,
  },
  {
    id: 'use-fine-lines',
    category: 'use',
    title: 'Fine lines and crow\'s feet: red and near-infrared LED',
    tldr: 'A multicentre, randomised, double-blind, sham-controlled trial of a home 630 nm and 850 nm mask found significant differences from the sham on the crow\'s-feet grading scale at 8, 12 and 16 weeks, with 69% of mask users counted as improved by independent raters, 49 points more than the sham group. It confirms at home what the split-face placebo-controlled clinic trials of 633/830 nm LED showed — wrinkles reduced by up to 36% and collagen increased on biopsy. Modest, slow, and dependent on months of use.',
    evidence: 'moderate',
    focus: 'lines',
    sessions: '3–5 sessions a week, 10–20 min, for 12–16 weeks then maintenance',
    downtime: 'None',
    cost: '€150–550 for a mask',
    bodyHtml: `
      <p>The home trial that earns the tier: adults with crow's feet were randomised to a 630 nm LED plus 850 nm infrared mask or a sham mask for 16 weeks; the Crow's Feet Grading Scale scores of independent raters and investigators "showed significant differences at 8, 12, and 16 weeks", the independent raters' improvement rate was 69.2% with "a difference of 49.2% from the control group", and the authors concluded the phototherapy was "effective, safe, well-tolerated, and painless" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11835066/" rel="noopener nofollow" target="_blank">Park 2025</a>). It sits on the clinic evidence: the randomised, placebo-controlled, double-blinded split-face trial of 830 and 633 nm LED found wrinkles reduced by up to 36% and elasticity up by up to 19% on the treated side, with "a marked increase in the amount of collagen and elastic fibers" on histology (<a href="https://pubmed.ncbi.nlm.nih.gov/17566756/" rel="noopener nofollow" target="_blank">Lee 2007</a>); the earlier pulsed-LED trial found 90% of subjects improved on digital imaging, 10% on profilometry and a 28% average rise in collagen I density on biopsy (<a href="https://pubmed.ncbi.nlm.nih.gov/15654716/" rel="noopener nofollow" target="_blank">Weiss 2005</a>); and a 2025 sham-controlled trial found glabellar and periorbital wrinkle length reduced against sham with satisfaction of 74–80%, and no advantage to more than two sessions a week (<a href="https://pubmed.ncbi.nlm.nih.gov/40167796/" rel="noopener nofollow" target="_blank">Bragato 2025</a>).</p>
      <p>The uncontrolled home studies point the same way and show the limits: men using a 633/830/1072 nm mask for six weeks reported improvement and digital analysis found favourable changes in wrinkles and texture (<a href="https://pubmed.ncbi.nlm.nih.gov/37418018/" rel="noopener nofollow" target="_blank">Mineroff 2023</a>); an under-eye LED device produced "outstanding" satisfaction and a wrinkle-score change from 20.05 to 19.72 that "was not statistically significant" (<a href="https://pubmed.ncbi.nlm.nih.gov/39133416/" rel="noopener nofollow" target="_blank">Wang 2024</a>). Moderate for fine lines and crow's feet, in line with the <a href="/crows-feet">crow's feet guide</a>; the effect is a softening of texture and fine lines over months, not a change a stranger notices, and it stops accruing when the mask goes in the drawer. The <a href="/red-light-therapy">red-light guide</a> covers the wavelengths and doses.</p>
    `,
  },
  {
    id: 'use-acne',
    category: 'use',
    title: 'Mild to moderate acne: blue and blue-red light at home',
    tldr: 'Double-blind randomised trials of home LED devices: a blue-red combination reduced inflammatory lesions by 77% and non-inflammatory lesions by 54% at 12 weeks with no significant change in the control group, and shrank sebaceous glands on biopsy; daily home blue light beat placebo on lesion size, redness and time to resolution. A 445/630 nm mask matched or beat benzoyl peroxide over 12 weeks. Graded moderate-quality evidence in the 2026 review — for mild acne, alongside a retinoid, not instead of one.',
    evidence: 'moderate',
    focus: 'acne',
    sessions: 'Daily to alternate days, 10–20 min, for 8–12 weeks',
    downtime: 'None; dryness in some',
    cost: '€60–400',
    bodyHtml: `
      <p>The Korean double-blind randomised trial of a home blue-red LED device found that by week 12 "both inflammatory and noninflammatory acne lesions had decreased significantly, by 77% and 54%, respectively, in the treatment group" with "no significant difference" in the control group, alongside reduced sebum output, smaller sebaceous glands and reduced inflammatory markers on biopsy (<a href="https://pubmed.ncbi.nlm.nih.gov/23278295/" rel="noopener nofollow" target="_blank">Kwon 2013</a>). The home blue-light trial found a significant advantage over placebo for lesion size, lesion erythema and overall skin condition, improvement "as early as post 2 treatments" and a shorter time to resolution (<a href="https://pubmed.ncbi.nlm.nih.gov/22091799/" rel="noopener nofollow" target="_blank">Gold 2011</a>). The over-the-counter 445/630 nm mask trial found a 24.4% reduction in inflammatory lesions against 17.2% for benzoyl peroxide and a 19.0% versus 4.7% improvement on the investigator's global assessment (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4896818/" rel="noopener nofollow" target="_blank">Nestor 2016</a>).</p>
      <p>The 2026 evidence grading put blue and blue-red LED for acne at moderate-quality evidence with favourable safety, red LED alone and light-heat devices at low-quality evidence, and home IPL and heat devices for acne at "not recommended" (<a href="https://pubmed.ncbi.nlm.nih.gov/42545315/" rel="noopener nofollow" target="_blank">Raef 2026</a>). Moderate for mild to moderate inflammatory acne as an add-on; a 24% lesion reduction is real and is also what a well-chosen cleanser achieves, and the treatments that clear acne — topical retinoids, benzoyl peroxide, and prescription therapy — are graded in the <a href="/retinoids">retinoids guide</a>. Blue light does nothing for scars or marks.</p>
    `,
  },
  {
    id: 'use-wrinkles-laxity',
    category: 'use',
    title: 'Deeper wrinkles and mild laxity: home radiofrequency and home fractional lasers',
    tldr: 'Uncontrolled manufacturer trials with blinded photograph grading: 62 users of a handheld multisource RF device improved a grade on the Fitzpatrick wrinkle scale in 92–98% by reviewer after a month; 30 users of an RF-plus-light device dropped 1.49 grades; the home tripolar RF study reported a 41% average periorbital wrinkle reduction; 124 users of a home 1410 nm fractional laser improved a grade in 90% after the active phase and 79% after maintenance. No sham arm in any of them, and the laser in the trial is no longer sold.',
    evidence: 'emerging',
    focus: 'lines',
    sessions: 'RF 2–3×/week for 4–6 weeks; laser daily for 4–8 weeks, then maintenance',
    downtime: 'Redness for an hour (RF) to a day (laser)',
    cost: '€300–700',
    bodyHtml: `
      <p>The home radiofrequency studies share a design: a course of self-treatments, then before-and-after photographs graded by blinded dermatologists, with no untreated or sham group. The handheld multisource phase-controlled device (the technology sold as Newa): 62 completers, no difficulty operating it, and "improvement (downgrade of at least 1 score according to the Fitzpatrick scale) in 91.93%, 96.77%, and 98.39% of study subjects" according to three reviewers after one month of home use, held at one and three months (<a href="https://pubmed.ncbi.nlm.nih.gov/25607700/" rel="noopener nofollow" target="_blank">Shemer 2014</a>). The RF-plus-light periorbital device: 30 completers, "an average reduction of 1.49 Fitzpatrick scores", erythema in all that cleared within an hour and oedema in some that cleared within a day (<a href="https://pubmed.ncbi.nlm.nih.gov/27910259/" rel="noopener nofollow" target="_blank">Gold 2017</a>). The home tripolar device: "an average periorbital wrinkle reduction of 41%" with all patients satisfied (<a href="https://pubmed.ncbi.nlm.nih.gov/21401380/" rel="noopener nofollow" target="_blank">Beilin 2011</a>). The 2024 handheld multi-energy device trial did use a control side and found hydration, elasticity, roughness, pore size and eye-wrinkle volume improved against it at eight weeks, with more collagen I and less MMP-1 in skin samples (<a href="https://pubmed.ncbi.nlm.nih.gov/38236440/" rel="noopener nofollow" target="_blank">Choi 2024</a>).</p>
      <p>The home fractional laser: 124 subjects completed a multicentre trial of a 1410 nm non-ablative fractional device, "Fitzpatrick Wrinkle Scale score improvement by one or more grades in 90% of subjects at the completion of the active phase and in 79% of subjects at the completion of the maintenance phase" on blinded review, transient erythema the main side effect, and the authors' stated limitations of "lack of a control group and single-blinded study groups" (<a href="https://pubmed.ncbi.nlm.nih.gov/22386051/" rel="noopener nofollow" target="_blank">Leyden 2012</a>); that device (PaloVia) was withdrawn, and the home lasers now on sale have no sham-controlled trial on PubMed. Emerging for periorbital wrinkles, in line with the <a href="/laser-ipl">laser and IPL guide</a>; the systematic review of clinic radiofrequency finds real but modest tightening at clinic doses (<a href="https://pubmed.ncbi.nlm.nih.gov/34923652/" rel="noopener nofollow" target="_blank">Austin 2022</a>) that the home devices are built not to reach, and no home RF study has measured a jowl or a neck (the <a href="/sagging-skin">sagging skin guide</a> grades that claim limited).</p>
    `,
  },
  {
    id: 'use-eye-lift',
    category: 'use',
    title: 'Brows, upper lids and eye bags: microcurrent and muscle stimulation',
    tldr: 'One double-blind, randomised, placebo-controlled home study found a six-minute electrostatic-microcurrent device raised the treated brow (brow-to-hairline distance down 1.3 cm against placebo); a 2025 study of focused electric-field stimulation reported higher upper-eyelid lift and eye-corner angle at 14 and 28 days; a 2026 split-face pilot found neuromuscular stimulation thickened the orbicularis muscle and shortened the fat bulge of the eye bag. Small, short, mostly uncontrolled, manufacturer-run — and the effect, like any exercise, needs keeping up.',
    evidence: 'emerging',
    focus: 'lift',
    sessions: '5–10 min, daily to 3×/week, ongoing',
    downtime: 'None; tingling',
    cost: '€150–450',
    bodyHtml: `
      <p>The controlled study: a home device emitting "electrostatic pulses containing RF energy, resulting in high frequency, low level transdermal microcurrent pulsations", tested double-blind against placebo, decreased the eyebrow-to-hairline distance "by 1.338 ± 0.170 cm in the treated eyebrow", significant against both baseline and placebo, in six-minute sessions; the authors called it "a useful tool to delay skin laxity or to prolong the time to the first surgical facial lift" (<a href="https://pubmed.ncbi.nlm.nih.gov/26963615/" rel="noopener nofollow" target="_blank">Nobile 2016</a>). The 2025 focused-electric-field study found, after 14 days, that "the lift height of the upper eyelid and eye corner angle significantly increased", with improvements in drooping lids and eye bags on clinical evaluation, more pronounced at 28 days, and in mice a reversal of age-related muscle-fibre atrophy (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845949/" rel="noopener nofollow" target="_blank">Jiang 2025</a>). The 2026 split-face pilot measured muscle: on the stimulated side "OOM thickness significantly increased and the length of fat herniation decreased", the temporal muscle thickened and the temple contour improved, with strong correlations between muscle thickness and the change (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12957948/" rel="noopener nofollow" target="_blank">Okuda 2026</a>).</p>
      <p>Emerging, in line with the <a href="/sagging-skin">sagging skin guide</a>: a brow that sits a few millimetres higher and an orbicularis that holds the fat pad back are plausible, measured, and fade within days of stopping, as muscle tone does. Nothing here treats a hooded lid's excess skin — that is a <a href="/hooded-eyes">blepharoplasty question</a> — and the electrical devices are contraindicated with pacemakers and metal implants (Safety).</p>
    `,
  },
  {
    id: 'use-fullness-exercise',
    category: 'use',
    title: 'Mid-face fullness: the facial-exercise programme',
    tldr: 'The Northwestern pilot enrolled 27 women aged 40–65 in a 30-minute daily (later alternate-day) facial-exercise programme for 20 weeks; the 16 who finished were rated by two blinded dermatologists as fuller in the upper and lower cheeks (about 0.7 points on the Merz scales) and 2.7 years younger-looking, with no change in forehead lines, glabellar lines, crow\'s feet or marionette lines. No control group, eleven dropouts, and no device required.',
    evidence: 'emerging',
    focus: 'lift',
    sessions: '30 min daily for 8 weeks, then alternate days',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>The JAMA Dermatology research letter is the only measured study of face yoga, and the numbers are worth knowing exactly: 27 women were enrolled, 16 completed 20 weeks of a programme of 30-minute daily exercises for eight weeks and then every other day, and two blinded physicians rated standardised photographs on the Merz-Carruthers scales. Upper cheek fullness improved from 1.1 to 1.8 and lower cheek fullness from 0.9 to 1.6 on the scales (both P = .003), and the raters' estimated age fell from 50.8 to 48.1 years (P = .002); forehead lines, glabellar lines, crow's feet and marionette lines did not change. The authors listed the limitations themselves: "small", "exclusively of middle-aged women", "numerous dropouts", "no control group" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5885810/" rel="noopener nofollow" target="_blank">Alam 2018</a>).</p>
      <p>Emerging, as the <a href="/facial-volume-loss">facial volume guide</a> grades it: a mechanism (hypertrophy of the cheek muscles under thinning fat) that fits the one feature that changed, in a study with no control arm and a 41% dropout rate. For crow's feet and forehead lines it did nothing, which is what the <a href="/crows-feet">crow's feet guide</a> reports. It costs nothing but time, and the time is the reason most people stop.</p>
    `,
  },
  {
    id: 'use-puffiness',
    category: 'use',
    title: 'Morning eye puffiness: cold rollers, cooled spoons and cryo globes',
    tldr: 'Cold constricts vessels and firms tissue for an hour or two, which is the whole effect and the whole evidence: the reviews of oedema management find ice universally used and unproven for lasting change, and a roller study found facial massage raised skin blood flow for at least ten minutes. The fastest morning fix in this guide, and the shortest.',
    evidence: 'emerging',
    focus: 'lift',
    sessions: '3–5 min in the morning',
    downtime: 'None',
    cost: '€10–40',
    bodyHtml: `
      <p>Cooling the eyelids constricts the dermal and periorbital vessels and reduces fluid in the loose tissue under the eye for an hour or two; the physiology is not disputed and no trial has bothered to measure it on a face, which is why the <a href="/eye-bags">eye bags guide</a> grades it emerging on the oedema literature — where the review of oedema management finds cooling universally used and unproven for any lasting change (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5300735/" rel="noopener nofollow" target="_blank">King 2017</a>). The roller study, in 14 subjects, found short-term facial massage "significantly increased facial skin blood flow solely in the right cheek for at least 10 min" and five weeks of daily use improved the vasodilatation response to heat (<a href="https://pubmed.ncbi.nlm.nih.gov/30477852/" rel="noopener nofollow" target="_blank">Miyaji 2018</a>) — a change in vessel reactivity, not in a bag.</p>
      <p>Emerging for a morning of less puffiness; nothing for a fat pad, a tear trough or the skin laxity of a true eye bag, which the <a href="/eye-bags">eye bags guide</a> sorts out. A cold spoon from the fridge does what the €40 roller does.</p>
    `,
  },
  {
    id: 'use-pigment',
    category: 'use',
    title: 'Sun spots, melasma and uneven tone: nothing at home that works',
    tldr: 'No home device has a controlled trial for pigment. Home IPL is built to avoid the fluences that clear sun spots and is contraindicated for melasma and darker skin; LED masks have digital-analysis "brown spot" numbers from uncontrolled studies and no measured pigment outcome; the reviews list pigment change among the harms of home light devices, not the benefits. The treatments that work are in the dark spots guide, and most of them are a cream and a sunscreen.',
    evidence: 'limited',
    focus: 'pigment',
    sessions: '—',
    downtime: '—',
    cost: 'Spend it on sunscreen and a retinoid',
    bodyHtml: `
      <p>The review of hand-held home laser and light devices found the data concentrated on hair removal and acne and "a paucity of randomized, double-blind controlled trials" for the rest (<a href="https://pubmed.ncbi.nlm.nih.gov/25705949/" rel="noopener nofollow" target="_blank">Hession 2015</a>); the professional guideline on home IPL notes the devices were being sold for "photo-rejuvenation" without standards or evidence (<a href="https://pubmed.ncbi.nlm.nih.gov/22211702/" rel="noopener nofollow" target="_blank">Town 2012</a>), and the systematic review lists "pigment changes" among their adverse effects (<a href="https://pubmed.ncbi.nlm.nih.gov/22126235/" rel="noopener nofollow" target="_blank">Thaysen-Petersen 2012</a>). The one home LED study to mention pigment reported favourable "UV spots" and "brown spots" numbers from photographic software in an uncontrolled six-week study of men (<a href="https://pubmed.ncbi.nlm.nih.gov/37418018/" rel="noopener nofollow" target="_blank">Mineroff 2023</a>), which is not a pigment outcome.</p>
      <p>Limited, and the direction of harm matters: heat and light darken melasma, and a home IPL used on a tanned or darker skin produces the pigment change it was bought to remove. Sun spots respond to clinic IPL, Q-switched and picosecond lasers and to hydroquinone, retinoids and azelaic acid; melasma to tranexamic acid and the triple cream — all graded in the <a href="/dark-spots">dark spots guide</a>. The device to buy for pigment is a tube of SPF 50.</p>
    `,
  },
  {
    id: 'use-body-cellulite',
    category: 'use',
    title: 'Cellulite and body circumference: home RF and the massage gadgets',
    tldr: 'One manufacturer study of a home tripolar RF body device measured a 2.4 cm reduction on treated thighs against a smaller, non-significant change on the untreated thigh, a laxity score down from 1.4 to 0.8 and no significant change at the abdomen; nothing has measured a dimple. Dry brushing, vibration plates, rollers and "anti-cellulite" massagers have no controlled trial and are graded limited in the cellulite guide.',
    evidence: 'limited',
    focus: 'body',
    sessions: 'RF 2–3×/week for 6–8 weeks',
    downtime: 'None',
    cost: '€300–600',
    bodyHtml: `
      <p>The home body-RF study is the only measured result: ex-vivo skin showed an 82% rise in hypodermal glycerol release and a 31% rise in collagen synthesis, and in the clinical arm "a significant average reduction of 2.4 cm was measured on the treated thighs" while "on the control thighs a lesser, non-significant reduction was found"; abdominal laxity fell from 1.4 to 0.8 and the abdominal circumference change was not significant, for what the authors called "discrete circumference reduction and moderate laxity improvement" (<a href="https://pubmed.ncbi.nlm.nih.gov/20395192/" rel="noopener nofollow" target="_blank">Boisnic 2010</a>). The clinic version of the same technology increased dermal thickness by 49% on biopsy in a small study (<a href="https://pubmed.ncbi.nlm.nih.gov/19408182/" rel="noopener nofollow" target="_blank">Kaplan 2009</a>).</p>
      <p>Limited for cellulite, because a centimetre off a thigh circumference is fluid and fat, not a released fibrous band, and no home device has measured the dimples that define the condition; the <a href="/cellulite">cellulite guide</a> grades the brushes, rollers and vibration devices limited and sets out what does move a dimple (subcision, and the clinic energy devices with their own caveats). The <a href="/upper-arms">upper arms guide</a> covers the body laxity claims.</p>
    `,
  },
  {
    id: 'use-jowls-jawline',
    category: 'use',
    title: 'Jowls, jawline and neck: no home device has lifted one',
    tldr: 'Home radiofrequency, microcurrent, muscle-stimulation and "home HIFU" devices are sold for the lower face on trials that measured periorbital wrinkles, brows and cheeks. The one randomised trial of gua sha against a facial roller measured 2–3 mm contour reductions in both arms with no untreated group — fluid moved by massage, gone by evening. The jowls, sagging skin and neck guides grade the home devices limited, and this guide agrees.',
    evidence: 'limited',
    focus: 'lift',
    sessions: '—',
    downtime: '—',
    cost: 'Keep it for the clinic',
    bodyHtml: `
      <p>Look at what each trial measured. The home RF studies graded periorbital and perioral wrinkles (<a href="https://pubmed.ncbi.nlm.nih.gov/21401380/" rel="noopener nofollow" target="_blank">Beilin 2011</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/27910259/" rel="noopener nofollow" target="_blank">Gold 2017</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/25607700/" rel="noopener nofollow" target="_blank">Shemer 2014</a>); the microcurrent and stimulation studies measured brows, lids and temples (<a href="https://pubmed.ncbi.nlm.nih.gov/26963615/" rel="noopener nofollow" target="_blank">Nobile 2016</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12957948/" rel="noopener nofollow" target="_blank">Okuda 2026</a>); the randomised comparison of gua sha and a facial roller found "reductions ranging from 2.23 to 2.40 mm in the gua sha group" and "2.75–3.26 mm in the facial roller group" in facial-contour measurements, gua sha lowering muscle tone and the roller improving elasticity readings, in a trial that compared the two tools with each other and not with doing nothing (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12121324/" rel="noopener nofollow" target="_blank">Ahn 2025</a>). Millimetres of contour after massage are lymph and fluid; a jowl is fat and ligament descent, graded in the <a href="/jowls">jowls guide</a>.</p>
      <p>Limited. The clinic devices that measurably tighten the lower face — microfocused ultrasound, monopolar and microneedle radiofrequency — are graded moderate in the <a href="/sagging-skin">sagging skin guide</a> at doses no consumer device may deliver, and the "home HIFU" machines on the marketplaces are either too weak to do anything or, if they are not, an unsupervised way to burn the fat and nerves of the face (Safety). The <a href="/neck">neck guide</a> has the same verdict for the neck.</p>
    `,
  },
];

const products: Section[] = [
  {
    id: 'prod-laser-caps',
    category: 'product',
    title: 'Laser combs, caps and helmets (HairMax, iRestore, Capillus, Theradome, Kiierr)',
    tldr: 'Red laser diodes, sometimes with LEDs, at about 650 nm, in a comb, band, cap or helmet: the HairMax comb and band have the four sham-controlled trials, the helmet and cap format has the sham-controlled Lanzafame and Friedman trials, and the meta-analyses pool them all. Medical-device clearances for pattern hair loss; €300 for a comb, €600–1,200 for a band or helmet, €1,000–2,500 for the dense caps. Buy diodes, a published trial and a schedule you will keep.',
    evidence: 'strong',
    focus: 'light',
    note: 'Top pick: a laser cap or band with a sham-controlled trial on the device family, used every other day for six months before judging',
    sessions: '3×/week to alternate days, 6–25 min',
    downtime: 'None',
    cost: '€300–2,500',
    bodyHtml: `
      <p>The comb and band trials are attached to HairMax (<a href="https://pubmed.ncbi.nlm.nih.gov/19366270/" rel="noopener nofollow" target="_blank">Leavitt 2009</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3986893/" rel="noopener nofollow" target="_blank">Jimenez 2014</a>), the 655 nm helmet trials to a laser-and-LED helmet (<a href="https://pubmed.ncbi.nlm.nih.gov/24078483/" rel="noopener nofollow" target="_blank">Lanzafame 2013</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4265291/" rel="noopener nofollow" target="_blank">Lanzafame 2014</a>), and the 650 nm cap trial to a laser-diode array worn inside a sports cap (<a href="https://pubmed.ncbi.nlm.nih.gov/28328705/" rel="noopener nofollow" target="_blank">Friedman 2017</a>); the meta-analyses found device type and format did not change the effect and that a lower treatment frequency did at least as well (<a href="https://pubmed.ncbi.nlm.nih.gov/30706177/" rel="noopener nofollow" target="_blank">Liu 2019</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/39404126/" rel="noopener nofollow" target="_blank">Perez 2025</a>). The device to buy is therefore the one you will wear: a comb needs slow passes and a free hand three times a week; a band or cap needs nothing but the timer. Laser diodes versus LEDs matters less than dose and coverage — the helmet trials mixed both — and the dense 272-diode caps have no trial showing they beat the 80-diode ones.</p>
      <p>Strong, as the <a href="/red-light-therapy">red-light guide</a> grades it; the <a href="/hair-loss">hair loss guide</a> places the caps below minoxidil and finasteride and beside them as an addition, on the trial that found the combination beat minoxidil alone (<a href="https://pubmed.ncbi.nlm.nih.gov/40826200/" rel="noopener nofollow" target="_blank">Mawu 2025</a>). Expect shedding in the first weeks in some users, judge at six months with a parting photograph, and expect to keep using it.</p>
    `,
  },
  {
    id: 'prod-led-masks',
    category: 'product',
    title: 'LED masks and panels (Omnilux, CurrentBody, Dr Dennis Gross, Shark, Therabody)',
    tldr: 'Red (630–660 nm) and near-infrared (830–850 nm) LEDs in a silicone or rigid mask, some adding blue for acne: the one sham-controlled home-mask trial used 630 and 850 nm for 16 weeks; the split-face clinic trials used 633 and 830 nm; the 633/830/1072 nm men\'s mask has an uncontrolled six-week study. Few masks publish their irradiance and fewer have a trial on themselves; €150–550. The claim is moderate (Part 01); any given mask is emerging until it states its dose and publishes a study on its own model.',
    evidence: 'emerging',
    focus: 'light',
    note: 'Top pick: a red-plus-near-infrared mask that states its wavelengths and irradiance and has a study on its own model, 3–5 sessions a week',
    sessions: '3–5×/week, 10–20 min',
    downtime: 'None',
    cost: '€150–550',
    bodyHtml: `
      <p>The evidence is in Part 01: the sham-controlled 630/850 nm home mask (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11835066/" rel="noopener nofollow" target="_blank">Park 2025</a>), the 633/830 nm split-face clinic trial (<a href="https://pubmed.ncbi.nlm.nih.gov/17566756/" rel="noopener nofollow" target="_blank">Lee 2007</a>), the six-week men's mask study (<a href="https://pubmed.ncbi.nlm.nih.gov/37418018/" rel="noopener nofollow" target="_blank">Mineroff 2023</a>) and the acne trials (<a href="https://pubmed.ncbi.nlm.nih.gov/23278295/" rel="noopener nofollow" target="_blank">Kwon 2013</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4896818/" rel="noopener nofollow" target="_blank">Nestor 2016</a>). What separates the masks is the dose and the honesty about it: the photobiomodulation CME asks dermatologists to counsel patients on home devices because doses "can induce varied biological effects" and the outputs vary (<a href="https://pubmed.ncbi.nlm.nih.gov/38307144/" rel="noopener nofollow" target="_blank">Mineroff 2024</a>), and the social-media analysis found promoted devices whose energy output did not match the studies they cited (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12977816/" rel="noopener nofollow" target="_blank">Merkle 2026</a>). A mask that states red and near-infrared wavelengths, an irradiance in the tens of mW/cm², and a session length that lands in the trials' dose window is a reasonable buy; a mask with "seven colours" and no numbers is a lamp.</p>
      <p>Emerging for the masks as sold, which is the <a href="/red-light-therapy">red-light guide</a>'s verdict on "masks as actually sold" and the reason it separates the dose arithmetic from the marketing; the claim itself — fine lines, crow's feet and mild acne — is moderate in Part 01 and in the <a href="/crows-feet">crow's feet guide</a>, and a mask that publishes its dose and a trial on its own model earns that tier. Eye shielding is not optional; near-infrared LEDs are invisible and the eye cannot blink at what it cannot see.</p>
    `,
  },
  {
    id: 'prod-home-ipl',
    category: 'product',
    title: 'Home IPL and diode lasers for hair removal (Philips Lumea, Braun Silk-expert, Silk\'n, SmoothSkin, Ulike, Tria)',
    tldr: 'Low-fluence intense pulsed light with a skin-tone sensor, or a low-power diode laser: the uncontrolled trials measured roughly half the hair gone at six months; the systematic review found no randomised trial; the professional guideline exists because the category grew faster than its standards. The most useful home device per euro for dark hair on light skin, and the one most likely to burn the wrong skin.',
    evidence: 'moderate',
    focus: 'light',
    note: 'Top pick: an IPL with a skin-tone sensor, a stated fluence and skin-type range, and a large window for legs — used weekly for a month, then as regrowth appears',
    sessions: 'Weekly ×4–12, then monthly',
    downtime: 'Redness for hours',
    cost: '€150–500',
    bodyHtml: `
      <p>The trial data are in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/22126235/" rel="noopener nofollow" target="_blank">Thaysen-Petersen 2012</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/19396717/" rel="noopener nofollow" target="_blank">Emerson 2009</a>). Between devices, the variables that matter are fluence (stated in J/cm², typically 3–7 for home IPL against 15–40 in a clinic), window size, flash count and a working skin-tone sensor; the guideline sets out the measurement methodology manufacturers should follow and the adverse events to expect (<a href="https://pubmed.ncbi.nlm.nih.gov/22211702/" rel="noopener nofollow" target="_blank">Town 2012</a>). Blistering, crusting and pigment change appear in the reviewed studies and follow the same rule as in the clinic: the darker or more tanned the skin, the more energy the skin absorbs instead of the hair (<a href="https://pubmed.ncbi.nlm.nih.gov/26296296/" rel="noopener nofollow" target="_blank">Thaysen-Petersen 2015</a>).</p>
      <p>Moderate for a partial, maintainable reduction in dark hair on skin types I–IV; the <a href="/laser-ipl">laser and IPL guide</a> grades the clinic versions and explains why the clinic still wins for coarse, hormonal or facial hair. Not for the eyebrows, not on a tan, not for the darkest skin types, and never for "photo-rejuvenation" — a claim the guideline flagged as unsupported for these devices.</p>
    `,
  },
  {
    id: 'prod-home-rf',
    category: 'product',
    title: 'Home radiofrequency (Tripollar Stop, Newa, Silk\'n FaceTite, Medicube)',
    tldr: 'Bipolar, tripolar or multisource RF handpieces that warm the dermis to a temperature a consumer can hold: uncontrolled manufacturer trials with blinded photographs found a grade of periorbital wrinkle improvement in most users after a month of self-treatment, and the one control-side study found improved hydration, elasticity and eye-wrinkle volume at eight weeks. No sham arm, no jowl, no neck; €300–700 and three sessions a week.',
    evidence: 'emerging',
    focus: 'energy',
    note: 'Top pick: a device with a published home-use study on its own model, used on its trial schedule for six weeks around the eyes and mouth — and not bought for the jawline',
    sessions: '2–3×/week for 4–6 weeks, then weekly',
    downtime: 'Redness for an hour',
    cost: '€300–700',
    bodyHtml: `
      <p>The trials are in Part 01: the multisource handheld (<a href="https://pubmed.ncbi.nlm.nih.gov/25607700/" rel="noopener nofollow" target="_blank">Shemer 2014</a>), the RF-plus-light device (<a href="https://pubmed.ncbi.nlm.nih.gov/27910259/" rel="noopener nofollow" target="_blank">Gold 2017</a>), the tripolar face device (<a href="https://pubmed.ncbi.nlm.nih.gov/21401380/" rel="noopener nofollow" target="_blank">Beilin 2011</a>) and body device (<a href="https://pubmed.ncbi.nlm.nih.gov/20395192/" rel="noopener nofollow" target="_blank">Boisnic 2010</a>), and the multi-energy handheld with a control side (<a href="https://pubmed.ncbi.nlm.nih.gov/38236440/" rel="noopener nofollow" target="_blank">Choi 2024</a>). The 2024 evaluation of the category found these studies small and short but consistently free of harm beyond transient redness (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10929553/" rel="noopener nofollow" target="_blank">Bu 2024</a>); the 2026 grading placed home RF at moderate-quality evidence for rejuvenation (<a href="https://pubmed.ncbi.nlm.nih.gov/42545315/" rel="noopener nofollow" target="_blank">Raef 2026</a>), a step above this guide's verdict, because this guide does not count a study without a sham arm as more than emerging.</p>
      <p>Emerging for fine lines and skin quality around the eyes and mouth; limited for anything the marketing photographs the jawline for (Part 01). The <a href="/sagging-skin">sagging skin guide</a> explains the temperature and depth a clinic device reaches to tighten and why a handheld that a consumer can hold to the skin for minutes does not.</p>
    `,
  },
  {
    id: 'prod-home-lasers',
    category: 'product',
    title: 'Home lasers for wrinkles (NIRA, Tria Age-Defying, the withdrawn PaloVia)',
    tldr: 'Non-ablative infrared lasers at 1410–1450 nm, fractional or not, at a fraction of clinic fluence: the 124-subject PaloVia trial found a grade of periorbital wrinkle improvement in 90% on blinded review, with no control group, and the device was later withdrawn; the lasers now sold rely on that literature and on in-house studies without a sham arm. Daily use for weeks with a day of redness; €400–700.',
    evidence: 'emerging',
    focus: 'light',
    note: 'Top pick: none without a sham-controlled trial on the device itself; if buying, one with stated wavelength and energy, for periorbital lines, on a daily schedule',
    sessions: 'Daily for 4–8 weeks, then 2–3×/week',
    downtime: 'Redness for a day',
    cost: '€400–700',
    bodyHtml: `
      <p>The trial is in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/22386051/" rel="noopener nofollow" target="_blank">Leyden 2012</a>): 124 subjects who could follow written instructions, 90% improved a grade after the active phase and 79% after maintenance on blinded photograph review, transient erythema, and "lack of a control group" as the authors' first limitation. The 2026 review graded home fractional lasers at its highest evidence level on that consistency (<a href="https://pubmed.ncbi.nlm.nih.gov/42545315/" rel="noopener nofollow" target="_blank">Raef 2026</a>); this guide and the <a href="/laser-ipl">laser and IPL guide</a> keep them at emerging, because the one large trial had no sham, the device it tested is no longer sold, and the current lasers have no sham-controlled trial on PubMed.</p>
      <p>Emerging for periorbital fine lines; nothing for pigment, pores, scars or laxity at home doses. Clinic non-ablative fractional lasers work at a fluence and density that produce days of swelling, and the home devices are built to produce an hour of redness; the difference in result follows the difference in dose.</p>
    `,
  },
  {
    id: 'prod-microcurrent',
    category: 'product',
    title: 'Microcurrent and muscle-stimulation handhelds (NuFace, Ziip, Foreo Bear, Medicube, AMIRO)',
    tldr: 'Low-level current or pulsed electrical fields applied with a conductive gel, five minutes a day, to contract or "re-educate" the facial muscles: one small double-blind placebo-controlled home study lifted a brow, two 2025–2026 studies measured thicker orbicularis and temporal muscle and a higher upper lid, and the market leader has no sham-controlled trial on PubMed. The effect is muscle tone: real, small, and gone within days of stopping. €150–450 plus gel.',
    evidence: 'emerging',
    focus: 'energy',
    note: 'Top pick: a device with a controlled study behind its waveform, used daily for the brow and eye area, on the understanding that the lift is maintenance, not repair',
    sessions: '5–10 min daily, ongoing',
    downtime: 'None',
    cost: '€150–450 plus conductive gel',
    bodyHtml: `
      <p>The studies are in Part 01 (<a href="https://pubmed.ncbi.nlm.nih.gov/26963615/" rel="noopener nofollow" target="_blank">Nobile 2016</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845949/" rel="noopener nofollow" target="_blank">Jiang 2025</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12957948/" rel="noopener nofollow" target="_blank">Okuda 2026</a>), alongside the multi-energy handheld that combined current with other energies (<a href="https://pubmed.ncbi.nlm.nih.gov/38236440/" rel="noopener nofollow" target="_blank">Choi 2024</a>). The 2024 review of the category counted microcurrent among the technologies whose studies are small and short, and noted that "physical stimulation of meridian acupoints" by home devices is a research direction rather than a finding (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10929553/" rel="noopener nofollow" target="_blank">Bu 2024</a>). Between brands the difference is waveform, current and the app; none of the best-selling handhelds has a sham-controlled trial on its own model on PubMed, and the "instant lift" in the demonstration is muscle contraction that relaxes by evening.</p>
      <p>Emerging, in line with the <a href="/sagging-skin">sagging skin guide</a>: a defensible maintenance tool for the brow and eye area, contraindicated with pacemakers, implanted defibrillators, epilepsy and metal implants in the face, and not to be used over fresh filler or toxin (Safety). It will not do what a syringe of toxin does — toxin stops a muscle, current works it — and it does not reach the fat and ligaments that make a jowl.</p>
    `,
  },
  {
    id: 'prod-microneedle-patches',
    category: 'product',
    title: 'Dissolving microneedle patches (Acropass, Vice Reversa, Peace Out, ZitSticka)',
    tldr: 'Hyaluronic-acid microneedles a fraction of a millimetre long that dissolve into the skin overnight, carrying HA, adenosine, vitamin C or peptides: split-face trials found the HA patch beat the same HA as a serum on crow\'s-feet roughness and elasticity at eight weeks, an ascorbic-acid patch beat placebo double-blind, and an adenosine patch matched the cream at a 140-fold lower dose. A plumped crease for a day, with a delivery advantage; €5–15 a pair.',
    evidence: 'emerging',
    focus: 'needle',
    note: 'Top pick: an HA-based patch for crow\'s feet, worn overnight two or three times a week — for the morning after, not for the year after',
    sessions: '2–3 nights a week',
    downtime: 'None; pinprick marks for an hour',
    cost: '€5–15 a pair',
    bodyHtml: `
      <p>The Korean trials: the HA microneedle patch against an HA essence for eight weeks reduced wrinkle roughness and increased elasticity in both groups, "although improvement was greater in the patch group at week 8", without irritation (<a href="https://pubmed.ncbi.nlm.nih.gov/28892233/" rel="noopener nofollow" target="_blank">Choi 2017</a>); an ascorbic-acid patch improved the global photodamage score and roughness against a placebo patch in a double-blind study (<a href="https://pubmed.ncbi.nlm.nih.gov/26648582/" rel="noopener nofollow" target="_blank">Lee 2016</a>); adenosine patches had "a similar or better efficacy than the adenosine cream" on wrinkles, dermal density, elasticity and hydration "although the weekly adenosine dose was 140 times lower" (<a href="https://pubmed.ncbi.nlm.nih.gov/29574973/" rel="noopener nofollow" target="_blank">Kang 2018</a>); a high-molecular-weight HA patch beat a low-molecular-weight one on wrinkle depth, dermal density and elasticity (<a href="https://pubmed.ncbi.nlm.nih.gov/32421218/" rel="noopener nofollow" target="_blank">Jang 2020</a>); and a 2026 pilot randomised trial of a near-infrared-actuated microneedle patch in 20 women found under-eye roughness down 16.3% at four weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/42300963/" rel="noopener nofollow" target="_blank">Han 2026</a>).</p>
      <p>Emerging, in line with the <a href="/crows-feet">crow's feet guide</a>: the patches deliver a hydrating or active dose past the barrier better than a cream, and the measured changes are hydration and small roughness gains over weeks, not collagen over years. They are single-use, sterile and shallow, which is the difference between them and the dermaroller in the next row.</p>
    `,
  },
  {
    id: 'prod-dermarollers',
    category: 'product',
    title: 'Dermarollers and home microneedling pens (0.2–0.5 mm)',
    tldr: 'Short needles rolled over the face to "boost absorption" and "stimulate collagen": no controlled trial for wrinkles or scars at home lengths, a three-arm hair study in which a home microneedle device plus minoxidil did not significantly beat either alone, a 2026 grading of low-quality evidence "associated with infectious complications", and a reused roller as a vehicle for infection. Clinic microneedling at 1.5–2.5 mm has the scar evidence; a 0.25 mm roller has a serum bill.',
    evidence: 'limited',
    focus: 'needle',
    note: 'Not recommended; if used, a new sterile head each time, 0.25 mm, over intact skin, never over active acne or a cold sore',
    sessions: '—',
    downtime: 'Redness for hours; infection if reused',
    cost: '€10–60',
    bodyHtml: `
      <p>The hair study is the closest thing to a trial: pattern-hair-loss patients using a home microneedle device alone, minoxidil alone or both, in which "the improvements in hair count were seen in the combination group at month 6, but the differences observed did not reach statistical significance in each group and among the three groups" (<a href="https://pubmed.ncbi.nlm.nih.gov/32516497/" rel="noopener nofollow" target="_blank">Sohng 2021</a>). The systematic review of microneedling adverse effects covered 51 studies and 1,029 patients of professional treatment and found it relatively safe with expected redness, pain and swelling, while advising that patients "be informed about the adverse side effects" so that preventable complications are avoided (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7869810/" rel="noopener nofollow" target="_blank">Gowda 2021</a>); the 2026 review of home devices specifically graded home microneedling at low-quality evidence and "associated with infectious complications" (<a href="https://pubmed.ncbi.nlm.nih.gov/42545315/" rel="noopener nofollow" target="_blank">Raef 2026</a>).</p>
      <p>Limited, as the <a href="/microneedling">microneedling guide</a> grades it: the collagen response that treats scars and wrinkles needs needle depths and sterile single-use cartridges that belong in a clinic, and the home roller's real effect — pushing more of a serum into the skin — is also the mechanism by which it pushes bacteria, fungi and the serum's preservatives into the dermis. A dissolving patch does the delivery job sterilely; a clinic does the collagen job.</p>
    `,
  },
  {
    id: 'prod-massage-tools',
    category: 'product',
    title: 'Gua sha, jade rollers, cryo rollers and sculpting tools',
    tldr: 'Stone or steel tools drawn over the face to "drain", "sculpt" and "lift": the one randomised trial compared gua sha with a roller and found both moved facial contours by 2–3 mm with different effects on muscle tone and elasticity readings, in a trial with no untreated arm; a roller raised skin blood flow for ten minutes in 14 subjects. Fluid moves; nothing else does. Pleasant, cheap, and the least likely tool on this page to do harm — or anything lasting.',
    evidence: 'limited',
    focus: 'mechanical',
    note: 'Fine for a morning de-puff and for the ritual; buy the €15 one',
    sessions: '5 min as wanted',
    downtime: 'None; bruising if pressed hard',
    cost: '€10–40',
    bodyHtml: `
      <p>The randomised comparison of the two tools, in Part 01, found gua sha reduced contour measurements by 2.23–2.40 mm and the roller by 2.75–3.26 mm, gua sha lowered muscle-tone readings and the roller raised elasticity readings, and concluded that "both interventions effectively improved facial contours through distinct physiological mechanisms" — measured immediately after massage, against each other (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12121324/" rel="noopener nofollow" target="_blank">Ahn 2025</a>). The roller study found blood flow raised for at least ten minutes and the vasodilatation response to heat improved after five weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/30477852/" rel="noopener nofollow" target="_blank">Miyaji 2018</a>). Neither measured a wrinkle, a jowl or a collagen fibre.</p>
      <p>Limited for any anti-aging claim, as the <a href="/collagen">collagen guide</a> and <a href="/sagging-skin">sagging skin guide</a> grade them; emerging for a morning of less puffiness when the tool is cold (Part 01 and the <a href="/eye-bags">eye bags guide</a>). The harm is small — bruising, and broken capillaries in thin skin pressed hard — and the cost of the jade, rose quartz or "medical-grade steel" is the same fluid moved with the same fingers.</p>
    `,
  },
  {
    id: 'prod-cleansing-brushes',
    category: 'product',
    title: 'Sonic cleansing brushes (Foreo Luna, PMD Clean, the discontinued Clarisonic)',
    tldr: 'Oscillating silicone or bristle heads that cleanse "six times better": an industry-convened expert panel concluded the sonic brush "may offer a safe and effective treatment for various conditions"; an uncontrolled four-week cohort of 46 acne-prone users found 76% cleared or almost cleared with a brush and a gel cleanser; no controlled trial for anything to do with aging. A cleanser removes what a brush removes; the brush adds friction. €100–200.',
    evidence: 'limited',
    focus: 'mechanical',
    note: 'Skip; a cleanser and hands do the job, and a barrier already thinned by retinoids does not want the friction',
    sessions: '—',
    downtime: '—',
    cost: '€100–200',
    bodyHtml: `
      <p>The literature is a review and consensus statement whose panel "agreed there are increasing concerns over the rise of atmospheric pollution" and concluded that "the sonic brush may offer a safe and effective treatment for various conditions" (<a href="https://pubmed.ncbi.nlm.nih.gov/30985993/" rel="noopener nofollow" target="_blank">Gold 2019</a>), and a cohort study by the same group in which 46 subjects with mild-to-moderate acne used a brush with an acne head and a gel cleanser for four weeks, with physician scores improved and 76% "cleared or almost cleared", with no comparison arm (<a href="https://pubmed.ncbi.nlm.nih.gov/31741359/" rel="noopener nofollow" target="_blank">Gold 2019</a>). Clarisonic, the brand that created the category, was discontinued by its owner in 2020.</p>
      <p>Limited for aging, acne and pores alike: cleansing matters, and the <a href="/dry-skin">dry skin guide</a> explains why a brush on a retinoid-thinned barrier is friction the skin does not need. Nothing on this row is dangerous; nothing on it is necessary.</p>
    `,
  },
  {
    id: 'prod-plasma-hifu',
    category: 'product',
    title: 'Plasma pens and "home HIFU" from the marketplaces',
    tldr: 'Plasma pens vaporise dots of skin with an electrical arc and are sold on TikTok as "fibroblast" non-surgical blepharoplasty: an analysis of 78 videos found 61% were adverts, 36% from lay users, 25% from self-proclaimed "specialists" and 6.5% warnings, mostly from doctors; the hooded eyes guide records the pigment scars and a published bilateral eye injury. "Home HIFU" ultrasound machines have no trial and are either inert or unsupervised deep heat. The one row to walk away from.',
    evidence: 'limited',
    focus: 'energy',
    note: 'Do not buy. The clinic versions are graded in the hooded eyes and sagging skin guides; the marketplace versions are burns',
    sessions: '—',
    downtime: 'Weeks of crusting; permanent pigment marks in darker skin',
    cost: '€40–400 and a scar',
    bodyHtml: `
      <p>The TikTok analysis identified 78 English-language videos under the fibroblast and plasma-pen hashtags: "36% of the posts were created by lay-person TikTok users, followed by 25% of posts being created by self-proclaimed fibroblast skin tightening specialists", the major themes were "advertisement of the fibroblast pen (61%)" and personal experience, and "only 6.5% of posts were created with the intention of serving as a warning to users, with most of these posts being created by medical doctors" (<a href="https://pubmed.ncbi.nlm.nih.gov/35500136/" rel="noopener nofollow" target="_blank">Hernandez 2022</a>). The device makes a grid of small full-thickness burns; done by a physician at a chosen depth on selected patients it is plasma exeresis, graded limited in the <a href="/hooded-eyes">hooded eyes guide</a> with its case reports of pigment scarring and a bilateral eye injury; done at home with a €40 pen it is the same burn without the selection.</p>
      <p>"Home HIFU" devices on the marketplaces carry the name of microfocused ultrasound — a clinic treatment graded moderate for lifting in the <a href="/sagging-skin">sagging skin guide</a>, delivered under imaging at depths that avoid the facial nerve and fat — with no trial of any consumer model. A device weak enough to be safe in untrained hands does nothing; one strong enough to do something can leave fat loss and nerve damage on a face that cannot see where the beam went. Limited, and the walk-away pick of this guide.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-eyes',
    category: 'safety',
    title: 'Eyes: the risk every light device shares',
    tldr: 'Home IPL is never fired above the cheekbone and the guideline exists partly because "theoretical concerns about ocular damage" had not been studied; LED masks bathe closed lids in red and invisible near-infrared light that the trials delivered with eye protection; laser caps and home lasers carry laser-safety classes for a reason. Goggles or opaque shields with every light device, and a stop-and-ask for anyone with retinal disease, recent eye surgery or photosensitising medication.',
    bodyHtml: `
      <p>The systematic review of home hair-removal devices noted that "theoretical concerns about ocular damage and paradoxical hair growth have not been reported in any of the studies reviewed" — which is a statement about what the studies looked for (<a href="https://pubmed.ncbi.nlm.nih.gov/22126235/" rel="noopener nofollow" target="_blank">Thaysen-Petersen 2012</a>), and the professional guideline's purpose was to define the "recognized critical parameters for the safe use of light-based hair removal technology" including eye safety (<a href="https://pubmed.ncbi.nlm.nih.gov/22211702/" rel="noopener nofollow" target="_blank">Town 2012</a>). An IPL flash near an open eye can injure the iris and retina; the devices' skin-contact sensors are the engineering answer, and keeping the window below the cheekbone is the behavioural one. LED masks are low-power but sit centimetres from the eye for ten to twenty minutes several times a week; the crow's-feet trial treated the periorbital area with the eyes protected (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11835066/" rel="noopener nofollow" target="_blank">Park 2025</a>), and near-infrared is invisible, so the blink reflex does not defend against it.</p>
      <p>Rules: opaque goggles or the mask's shielded cut-outs, eyes closed, no home light device with a retinal condition, macular degeneration, recent eye surgery, or on a photosensitising drug (some antibiotics, some diuretics, isotretinoin, St John's wort), without asking the prescriber; no IPL or laser on the eyelids, eyebrows or inside the orbit under any brand's instructions.</p>
    `,
  },
  {
    id: 'safety-burns-pigment',
    category: 'safety',
    title: 'Burns and pigment change: IPL, lasers and RF on the wrong skin',
    tldr: 'The reviewed home IPL studies reported oedema, blistering, crusting and pigment changes as well as the usual redness, and the sun-exposure study\'s one type V participant developed perifollicular darkening from the IPL alone. Melanin takes the energy meant for the hair; a tan is temporary melanin. RF handhelds burn when held still on dry skin; home lasers burn when the treatment is repeated over the same spot.',
    bodyHtml: `
      <p>"The most frequently reported side-effect was erythema, but oedema, blistering, crusting and pigment changes were also reported" across the home hair-removal studies (<a href="https://pubmed.ncbi.nlm.nih.gov/22126235/" rel="noopener nofollow" target="_blank">Thaysen-Petersen 2012</a>); the randomised sun-exposure study found no amplified reaction in skin types II–IV but "one subject with FST V experienced perifollicular hyperpigmentation after IPL and slightly more intense when exposed to UVR" (<a href="https://pubmed.ncbi.nlm.nih.gov/26296296/" rel="noopener nofollow" target="_blank">Thaysen-Petersen 2015</a>). The home RF studies reported erythema in every user that cleared within an hour and oedema in some that cleared within a day (<a href="https://pubmed.ncbi.nlm.nih.gov/27910259/" rel="noopener nofollow" target="_blank">Gold 2017</a>); the home fractional laser trial's main side effect was transient erythema (<a href="https://pubmed.ncbi.nlm.nih.gov/22386051/" rel="noopener nofollow" target="_blank">Leyden 2012</a>) — in trials where everyone followed written instructions.</p>
      <p>Rules: IPL and diode lasers only within the skin-type range on the box, never on a tan, never over a tattoo, mole or pigmented patch, and never on melasma, which darkens with heat and light; RF handpieces kept moving over the supplied gel and never held on one spot; a test patch behind the ear or on the inner forearm a day before any light device; and sun protection on treated skin, which the <a href="/sun-damage">sun damage guide</a> would recommend anyway.</p>
    `,
  },
  {
    id: 'safety-needles-infection',
    category: 'safety',
    title: 'Needles at home: rollers, pens and the infections that follow',
    tldr: 'The 2026 evidence review is explicit that home microneedling is "associated with infectious complications"; the professional-microneedling safety review found the procedure relatively safe when performed with sterile cartridges in a clinic. A dermaroller reused from a bathroom shelf inoculates the dermis with whatever grew on it and with whatever was on the skin — bacteria, herpes simplex, and the preservatives of the serum rolled in. Patches are sterile and single-use; rollers are neither after first use.',
    bodyHtml: `
      <p>The systematic review of microneedling adverse effects, in clinic hands, found expected erythema, pain and swelling and advised that patients "be informed about the adverse side effects associated with microneedling so that the risk of preventable complications can be reduced or avoided" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7869810/" rel="noopener nofollow" target="_blank">Gowda 2021</a>); the 2026 grading of home devices singled out microneedling for low-quality evidence and infectious complications (<a href="https://pubmed.ncbi.nlm.nih.gov/42545315/" rel="noopener nofollow" target="_blank">Raef 2026</a>). The dissolving patches in the trials caused no irritation or sensitisation on repeated use (<a href="https://pubmed.ncbi.nlm.nih.gov/26648582/" rel="noopener nofollow" target="_blank">Lee 2016</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/28892233/" rel="noopener nofollow" target="_blank">Choi 2017</a>), because they are sterile, single-use and shallow.</p>
      <p>Rules: no rolling over active acne, a cold sore, eczema or broken skin; no roller shared or reused without a new sterile head; no vitamin C, retinoid, acid or essential-oil serum "rolled in" — the ingredients that sting on intact skin cause granulomas and allergic reactions inside it; and a spreading redness, pustules or a cold-sore outbreak after any needle device is a same-week doctor's visit. The <a href="/microneedling">microneedling guide</a> covers the clinic version's rules.</p>
    `,
  },
  {
    id: 'safety-electrical',
    category: 'safety',
    title: 'Current, fields and heat: pacemakers, implants, epilepsy and pregnancy',
    tldr: 'Microcurrent, muscle-stimulation and radiofrequency devices are contraindicated by every manufacturer with a pacemaker or implanted defibrillator, and usually with metal implants in the face, epilepsy, active cancer and pregnancy; flashing IPL is contraindicated in photosensitive epilepsy. None of the trials enrolled these patients, so the contraindications are precautions without data — which is the right way round.',
    bodyHtml: `
      <p>The device trials excluded anyone with an implanted electrical device, a seizure disorder, a pregnancy, a skin cancer history or a photosensitising medication, so their safety record says nothing about those users (<a href="https://pubmed.ncbi.nlm.nih.gov/26963615/" rel="noopener nofollow" target="_blank">Nobile 2016</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/25607700/" rel="noopener nofollow" target="_blank">Shemer 2014</a>). The reasoning is physical: a current applied to the face can be sensed by a pacemaker's circuitry; radiofrequency heats metal; a fast-flashing IPL is a strobe; and no energy device has been tested in pregnancy, so every label excludes it.</p>
      <p>Rules: no electrical or RF device with a pacemaker, defibrillator, cochlear implant, deep-brain stimulator or metal plate, screw or dental implant in the treatment area without the implanting clinician's view; no IPL with photosensitive epilepsy; no energy device in pregnancy; no microcurrent, RF or massage tool over filler or toxin for the fortnight after injection, because the risk of moving the product is the injector's to judge; and a stop on any device that causes a rash, numbness, weakness or a headache that repeats with use.</p>
    `,
  },
  {
    id: 'safety-who-not',
    category: 'safety',
    title: 'Who should not buy one at all',
    tldr: 'Anyone expecting a lift: no home device has lifted a jowl or a neck, and the money is better held for the clinic. Anyone with melasma buying a light or heat device: it darkens. Anyone with the darkest skin types buying home IPL: the sensor will refuse, and it is right. Anyone who will not use it four times a week for three months: every positive trial ran that schedule, and a drawer full of devices is the commonest outcome of the category.',
    bodyHtml: `
      <p>The trials that worked shared a schedule — three to seven sessions a week for eight to twenty-six weeks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3986893/" rel="noopener nofollow" target="_blank">Jimenez 2014</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11835066/" rel="noopener nofollow" target="_blank">Park 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/23278295/" rel="noopener nofollow" target="_blank">Kwon 2013</a>) — and their manufacturers designed them in part to test whether users would keep it (<a href="https://pubmed.ncbi.nlm.nih.gov/22386051/" rel="noopener nofollow" target="_blank">Leyden 2012</a>). The dropout rate in the one facial-exercise study, 41%, is a fair estimate of what a free intervention loses in twenty weeks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5885810/" rel="noopener nofollow" target="_blank">Alam 2018</a>).</p>
      <p>Buy nothing if the concern is a jowl, a neck, a deep fold, hollowing or a hooded lid — those are graded in the <a href="/jowls">jowls</a>, <a href="/neck">neck</a>, <a href="/nasolabial-folds">nasolabial folds</a>, <a href="/facial-volume-loss">volume</a> and <a href="/hooded-eyes">hooded eyes</a> guides and none of their answers plugs into a wall. Buy nothing light-based with melasma, a tan, a skin-cancer history without a dermatologist's view, or a photosensitising prescription. And buy nothing whose trial schedule you have already decided you will not keep; the device that works is the device that is used.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-led-masks-work',
    category: 'faq',
    title: 'Do LED masks actually work?',
    tldr: 'For fine lines and crow\'s feet, modestly, over months, if the mask delivers a real dose of red and near-infrared light and is used three to five times a week; for acne, yes, at the mild end. For lifting, pigment or pores, no.',
    bodyHtml: `
      <p>The sham-controlled home trial found a significant advantage over a sham mask on crow's-feet grading at 8, 12 and 16 weeks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11835066/" rel="noopener nofollow" target="_blank">Park 2025</a>), and the acne trials found lesion reductions against control (<a href="https://pubmed.ncbi.nlm.nih.gov/23278295/" rel="noopener nofollow" target="_blank">Kwon 2013</a>). The rest is Part 01; the <a href="/red-light-therapy">red-light guide</a> explains why the dose on the box decides whether a given mask can reproduce the trial.</p>
    `,
  },
  {
    id: 'faq-how-long',
    category: 'faq',
    title: 'How long before I see anything?',
    tldr: 'Eight to sixteen weeks for lines, twelve for acne, sixteen to twenty-six for hair, six months for hair removal to settle. Nothing from any device in a fortnight except a patch or a cold roller.',
    bodyHtml: `
      <p>The crow's-feet mask separated from sham at eight weeks and kept widening to sixteen (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11835066/" rel="noopener nofollow" target="_blank">Park 2025</a>); the acne trial reported at twelve (<a href="https://pubmed.ncbi.nlm.nih.gov/23278295/" rel="noopener nofollow" target="_blank">Kwon 2013</a>); the laser-comb trials counted hairs at 26 weeks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3986893/" rel="noopener nofollow" target="_blank">Jimenez 2014</a>); the home IPL trial measured at four weeks and six months (<a href="https://pubmed.ncbi.nlm.nih.gov/19396717/" rel="noopener nofollow" target="_blank">Emerson 2009</a>). Photograph at week zero and judge at week twelve.</p>
    `,
  },
  {
    id: 'faq-price',
    category: 'faq',
    title: 'Is the €500 mask better than the €100 one?',
    tldr: 'Not by price. Judge wavelength, irradiance, coverage, a study on the model and the returns policy; a €100 mask with the right numbers beats a €500 one without them.',
    bodyHtml: `
      <p>The social-media analysis found devices promoted on studies whose energy output they did not match (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12977816/" rel="noopener nofollow" target="_blank">Merkle 2026</a>), and the dermatology CME warns that home-device doses vary widely (<a href="https://pubmed.ncbi.nlm.nih.gov/38307144/" rel="noopener nofollow" target="_blank">Mineroff 2024</a>). Price buys silicone, an app and a brand; the dose is a number, and the vetting drawer lists what to look for.</p>
    `,
  },
  {
    id: 'faq-with-retinoids',
    category: 'faq',
    title: 'Can I use a device alongside a retinoid?',
    tldr: 'LED and laser caps, yes — apply the retinoid after the session, not before. IPL, home lasers and dermarollers: pause the retinoid for a few days around use, as the device instructions say, because an irritated barrier burns and stings more easily.',
    bodyHtml: `
      <p>None of the LED or hair trials excluded retinoid users, and light does not interact with tretinoin in the skin; the practical rule is a clean, dry face for the light and the cream afterwards. The IPL trials treated intact skin and the roller row explains why acids and retinoids should never be needled in. The <a href="/retinoids">retinoids guide</a> covers the barrier.</p>
    `,
  },
  {
    id: 'faq-sun-after-ipl',
    category: 'faq',
    title: 'Do I have to hide from the sun after home IPL?',
    tldr: 'A randomised study found ordinary sun exposure a day after low-fluence home IPL did not amplify skin reactions in skin types II–IV. Avoid deliberate tanning before and after, because a tan changes the skin type the device sees.',
    bodyHtml: `
      <p>"A single UVR exposure of three SEDs either shortly or 1 day after low-fluence IPL causes no amplification of skin responses in constitutive skin of individuals with FST II-IV" — with perifollicular darkening in the one type V participant (<a href="https://pubmed.ncbi.nlm.nih.gov/26296296/" rel="noopener nofollow" target="_blank">Thaysen-Petersen 2015</a>). Sunscreen on treated skin is sensible for the reasons in the <a href="/sun-damage">sun damage guide</a>; a tan is the thing to avoid.</p>
    `,
  },
  {
    id: 'faq-home-vs-clinic',
    category: 'faq',
    title: 'How much weaker is a home device than the clinic version?',
    tldr: 'By a factor of several to many, by design: a fraction of the fluence, the heat or the needle depth, made up for with three to seven sessions a week. For hair, light and acne the arithmetic works; for tightening, resurfacing and pigment it does not.',
    bodyHtml: `
      <p>The home fractional laser trial describes a device built so that untrained users could apply it daily with only transient redness (<a href="https://pubmed.ncbi.nlm.nih.gov/22386051/" rel="noopener nofollow" target="_blank">Leyden 2012</a>); the clinic radiofrequency review describes the depths, temperatures and the one neck fistula of the clinic devices (<a href="https://pubmed.ncbi.nlm.nih.gov/34923652/" rel="noopener nofollow" target="_blank">Austin 2022</a>). The basics drawer explains where the low-dose-often trade works and where it cannot.</p>
    `,
  },
  {
    id: 'faq-microcurrent-vs-botox',
    category: 'faq',
    title: 'Will microcurrent replace Botox?',
    tldr: 'No. Toxin stops a muscle so the skin over it stops creasing; current works a muscle so it holds a brow a little higher. Opposite mechanisms, different problems, and the current\'s effect lasts days.',
    bodyHtml: `
      <p>The microcurrent study measured a brow lift (<a href="https://pubmed.ncbi.nlm.nih.gov/26963615/" rel="noopener nofollow" target="_blank">Nobile 2016</a>) and the stimulation studies measured thicker muscle (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12957948/" rel="noopener nofollow" target="_blank">Okuda 2026</a>); neither measured a frown line, which is what the toxin trials in the <a href="/botox">botox guide</a> measure. Using both is common; using current over fresh toxin is not advised (Safety).</p>
    `,
  },
  {
    id: 'faq-one-device',
    category: 'faq',
    title: 'If I buy one device, which?',
    tldr: 'For thinning hair, a laser cap. For fine lines or mild acne, a red-and-near-infrared LED mask that states its dose. For hair removal on light skin, a home IPL. For anything else on the face, none — the money belongs to sunscreen, a retinoid, and the clinic.',
    bodyHtml: `
      <p>Those are the goals graded moderate or above in Part 01, on sham-controlled hair trials (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3986893/" rel="noopener nofollow" target="_blank">Jimenez 2014</a>), a sham-controlled mask trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11835066/" rel="noopener nofollow" target="_blank">Park 2025</a>) and the consistent hair-removal studies (<a href="https://pubmed.ncbi.nlm.nih.gov/22126235/" rel="noopener nofollow" target="_blank">Thaysen-Petersen 2012</a>). The <a href="/retinoids">retinoids</a> and <a href="/sun-damage">sun damage</a> guides are the two things that outperform every device on this page for the price of a tube.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What a home device is — and why the dose is the whole story',
    intro: '',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you buy: the badges, the prices and the vetting',
    intro: '',
    sections: context,
  },
  {
    id: 'uses',
    title: 'What people buy a device for — graded by evidence',
    intro: 'Eleven goals, from the one with sham-controlled trials and meta-analyses to the ones no home device has ever measured. Sorted by evidence, not by what sells.',
    sections: uses,
  },
  {
    id: 'products',
    title: 'The technologies, device by device',
    intro: 'Eleven categories of device, each graded on the trials attached to it — with the brands that have a study on their own model named, and the ones trading on someone else\'s.',
    sections: products,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'Eyes, burns and pigment, the needles, the electrical contraindications, and who should keep their money.',
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
  hair: 'Hair',
  lines: 'Lines',
  lift: 'Lift & contour',
  pigment: 'Pigment',
  acne: 'Acne',
  body: 'Body',
  light: 'Light',
  energy: 'Energy',
  needle: 'Needles',
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
