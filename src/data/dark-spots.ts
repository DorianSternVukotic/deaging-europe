/**
 * Dark spots, sun spots & hyperpigmentation guide — single source of truth
 * (problem template).
 *
 * Consumed by /dark-spots. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Editorial spine: "dark spots" are three diseases — sun spots (lentigines),
 * melasma and post-inflammatory marks — with three different plans. Lasers
 * cure sun spots and relapse melasma; hydroquinone and tranexamic acid are the
 * prescription core for melasma; sunscreen that blocks visible light is the
 * base for all of them; and a changing spot gets a biopsy before a laser.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'lentigo' | 'melasma' | 'pih' | 'general';

export type SectionCategory = 'concept' | 'context' | 'home' | 'rx' | 'clinic' | 'safety' | 'faq';

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
  '"Dark spots" are three different conditions. Sun spots are printed by decades of UV and clear with a laser; melasma is hormonal, heat- and light-driven, and relapses; post-inflammatory marks fade on their own and are made worse by aggression. The plan follows the diagnosis.',
  'Sunscreen is the base, and for melasma it must block visible light: tinted iron-oxide sunscreen halved relapses over six months in a randomised trial. An untinted SPF 50 is not enough for melasma.',
  'For sun spots, pigment lasers and IPL clear 70–93% in one to three sessions across a 41-trial review, and a retinoid fades them by half over six months. For melasma, the triple cream and oral tranexamic acid have the randomised evidence; lasers give short-lived gains and the risk of permanent white spots.',
  'Hydroquinone is prescription-only in Europe and banned from cosmetics; used at 2–4% in courses it is the most-studied brightener there is, and used for years at high strength it can permanently darken skin. Azelaic acid, cysteamine, niacinamide and thiamidol are the over-the-counter tier with real trials.',
  'A new, changing, irregular or single dark spot on sun-damaged skin is a biopsy before it is a laser. Lentigo maligna mimics a sun spot, and the laser that clears the spot hides the melanoma.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-lentigo',
    kind: 'Sun',
    title: 'Decades of UV, printed on the skin',
    blurb: 'Sun spots are patches where UV has permanently switched melanocytes on. They appear where the sun did — cheeks, temples, hands, chest — and affect more than nine in ten people over 50.',
  },
  {
    id: 'type-melasma',
    kind: 'Hormones',
    title: 'Estrogen, heat and visible light',
    blurb: 'Melasma is symmetrical pigment driven by hormones (pregnancy, the pill, HRT) and pushed by UV, heat and even visible light. Nine in ten cases are women, and it relapses when the trigger returns.',
  },
  {
    id: 'type-pih',
    kind: 'Injury',
    title: 'The mark that inflammation leaves',
    blurb: 'Acne, eczema, a bite, a burn or a procedure leaves a brown or grey mark where the skin was inflamed — in up to two-thirds of darker-skinned people with acne. It fades with time and sunscreen, and darkens with aggression.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'pigment-anatomy',
    category: 'concept',
    title: 'What a dark spot actually is',
    tldr: 'Melanocytes make pigment with an enzyme called tyrosinase and hand it to skin cells; a spot is a patch where that factory is switched on, and whether the pigment sits in the epidermis or has dropped into the dermis decides what can reach it.',
    bodyHtml: `
      <p>Pigment is made by melanocytes at the base of the epidermis, using the enzyme tyrosinase, and passed in packets to the skin cells above, which carry it to the surface and shed it over about a month. Every brightener on this page works on one step of that chain: tyrosinase inhibitors (hydroquinone, azelaic acid, kojic acid, thiamidol, cysteamine) slow production; niacinamide and tranexamic acid interfere with the transfer and the signals that switch melanocytes on; retinoids and acids speed the shedding; lasers and light shatter the pigment so the body can clear it.</p>
      <p>Depth decides success. Pigment in the epidermis is reachable and clears over weeks to months. Pigment that has dropped into the dermis — in long-standing melasma and older post-inflammatory marks — sits in immune cells that topicals cannot reach and lasers clear only partly, which is why the same brown patch can respond in one person and not in another. Sun spots are epidermal but structural: the keratinocytes themselves have changed, which is why creams fade them and only physical removal clears them (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12292655/" rel="noopener nofollow" target="_blank">2025 study</a>).</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'Who gets which spots',
    tldr: 'Sun spots: over 90% of people past 50 in fair skin. Melasma: about nine women to one man, up to half of pregnancies in some populations. Post-inflammatory marks: up to two-thirds of darker-skinned people with acne.',
    bodyHtml: `
      <p>Solar lentigines are close to universal in fair skin by the sixth decade — more than 90% of people over 50 in the systematic review of their treatment — and their number and darkness track cumulative sun (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11948172/" rel="noopener nofollow" target="_blank">2025 review</a>). Melasma affects women of reproductive age with medium to darker skin most: the usual ratio quoted is nine women to one man, and prevalence in pregnancy runs from about 16% in one Iranian study to over half of a large Indian sample (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12207721/" rel="noopener nofollow" target="_blank">pathogenesis review</a>). Post-inflammatory hyperpigmentation follows acne in about 65% of Black, 53% of Hispanic and 47% of Asian patients in the US series, and is the commonest pigment complaint in skin of colour (<a href="https://jcadonline.com/postinflammatory-hyperpigmentation-a-review-of-the-epidemiology-clinical-features-and-treatment-options-in-skin-of-color/" rel="noopener nofollow" target="_blank">JCAD review</a>).</p>
      <p>Skin colour flips the risk profile: fair skin gets sun spots and sunburn, darker skin gets melasma and post-inflammatory marks and reacts to lasers by making more pigment. The treatment tiers below are graded with that in mind.</p>
    `,
  },
  {
    id: 'why-sort',
    category: 'concept',
    title: 'Why the diagnosis matters more than the product',
    tldr: 'A laser cures a sun spot and relapses melasma; hydroquinone for years darkens skin; a brightener without visible-light sunscreen is money into the sun. And the spot that looks slightly different is a biopsy first.',
    bodyHtml: `
      <p>The three spots look alike in a bathroom mirror and behave nothing alike. A sun spot is a fixed print: fade it with a retinoid, remove it with a laser, and it stays gone unless you make more. Melasma is a running process: every treatment lightens it, every summer, pregnancy or hot kitchen brings it back, and the laser that clears a sun spot in one session gives melasma a few months of improvement and a real chance of permanent white speckling. A post-inflammatory mark is the skin's own overreaction: it fades over months with sunscreen and a gentle brightener, and every aggressive thing done to it — a strong peel, a hot laser, a scrub — starts the cycle again.</p>
      <p>The ordering mistakes cost money and skin: laser-toning melasma, buying a €150 serum without an iron-oxide sunscreen, using hydroquinone continuously for years, and — the one that matters — lasering a new, irregular spot on sun-damaged skin without a dermatologist looking at it first. Read the type drawers and the red-flags drawer before the treatment rows.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-lentigo',
    category: 'context',
    title: 'Sun spots (solar lentigines, "age" or "liver" spots)',
    tldr: 'Flat, tan-to-brown, sharply edged spots on sun-exposed skin — face, hands, shoulders, chest — that do not fade in winter. Fixed prints, not a process: creams fade, lasers remove.',
    focus: 'lentigo',
    bodyHtml: `
      <p>Solar lentigines are flat, uniform tan or brown spots a few millimetres to a centimetre across with a defined edge, scattered where the sun landed: the backs of the hands, the temples and cheeks, the shoulders and chest. They have nothing to do with the liver and little to do with age as such — they are cumulative UV, which is why a 35-year-old surfer and a 70-year-old gardener have the same hands. Freckles (ephelides) are the genetic version: smaller, present since childhood, darker in summer and paler in winter. Raised, waxy, "stuck-on" brown lesions are seborrheic keratoses — harmless, common, and not pigment at all; they need scraping or freezing, not brightening.</p>
      <p>Because a sun spot is a structural change in the epidermis, it responds in two ways: retinoids and brighteners fade it by around half over months, and pigment lasers, IPL or cryotherapy remove it in one to three sessions. What it does not do is come back on its own; new ones appear only with new sun.</p>
    `,
  },
  {
    id: 'type-melasma',
    category: 'context',
    title: 'Melasma (the symmetrical patches)',
    tldr: 'Brown or grey-brown patches, symmetrical, on the cheeks, forehead, upper lip and chin — women, hormones, heat and light. Chronic and relapsing; the plan is control, not cure.',
    focus: 'melasma',
    bodyHtml: `
      <p>Melasma is blotchy, symmetrical pigment across the cheeks, forehead, bridge of the nose, upper lip and chin, in shades from light brown to grey. It is driven by hormones — pregnancy, the combined pill, hormone therapy — in genetically prone skin, and pushed by UV, by long-wave UVA and high-energy visible light, and probably by heat: cooks, sauna-goers and people who work by hot windows relapse (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12207721/" rel="noopener nofollow" target="_blank">pathogenesis review</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9790748/" rel="noopener nofollow" target="_blank">photoprotection review</a>). A Wood's lamp separates epidermal melasma, which lightens well, from dermal and mixed melasma, which lightens partly.</p>
      <p>The honest framing is a chronic condition: treatments produce months of lightening, and about half of patients relapse within months of stopping even the strongest cream (<a href="https://pubmed.ncbi.nlm.nih.gov/20398959/" rel="noopener nofollow" target="_blank">maintenance study</a>). The programme is sunscreen that blocks visible light every day, a brightener in courses, oral tranexamic acid for the stubborn cases, and no lasers as first-line — the reverse of the sun-spot plan.</p>
    `,
  },
  {
    id: 'type-pih',
    category: 'context',
    title: 'Post-inflammatory marks (after acne, eczema, bites, procedures)',
    tldr: 'Brown or grey marks exactly where the skin was inflamed, commonest and longest-lasting in darker skin; they fade over months to years with sunscreen and gentle brighteners, and every insult restarts them.',
    focus: 'pih',
    bodyHtml: `
      <p>Post-inflammatory hyperpigmentation is the skin's overreaction to injury: acne spots, eczema, insect bites, burns, cuts, waxing, a peel or laser done too hard. In darker skin the melanocytes are more reactive, so the mark is darker, deeper and slower to leave — in up to two-thirds of people with acne in some groups (<a href="https://jcadonline.com/postinflammatory-hyperpigmentation-a-review-of-the-epidemiology-clinical-features-and-treatment-options-in-skin-of-color/" rel="noopener nofollow" target="_blank">JCAD review</a>). Brown marks are epidermal and fade in months; grey-blue marks mean pigment has dropped into the dermis and can take years.</p>
      <p>The plan is the least aggressive one on this page: treat the cause (the acne, the eczema), daily sunscreen, a gentle brightener — azelaic acid, a retinoid, niacinamide, cysteamine — and time. A systematic review of 48 studies found topical retinoids produced partial improvement in 85% of patients and lasers in 66%, with 2.6% made worse by the laser (<a href="https://pubmed.ncbi.nlm.nih.gov/37843491/" rel="noopener nofollow" target="_blank">systematic review</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11514325/" rel="noopener nofollow" target="_blank">skin-of-colour review</a>). Nobody in a hurry treats post-inflammatory marks well.</p>
    `,
  },
  {
    id: 'type-red-flags',
    category: 'context',
    title: 'The spot that is not a spot (melanoma and its mimics)',
    tldr: 'Lentigo maligna — a slow melanoma of sun-damaged skin — looks like a sun spot with irregular edges, several colours and a history of change. ABCDE, a dermatoscope and a biopsy come before any laser.',
    bodyHtml: `
      <p>Lentigo maligna is a melanoma that begins as a flat brown patch on the sun-damaged face of an older person, and it can be clinically indistinguishable from a solar lentigo or a flat seborrheic keratosis for years (<a href="https://www.ncbi.nlm.nih.gov/books/NBK482163/" rel="noopener nofollow" target="_blank">StatPearls</a>). The warning signs are the ABCDE rule — Asymmetry, irregular Border, more than one Colour, Diameter over 6 mm, Evolving — plus a spot that stands out from its neighbours, and dermoscopy adds the specific features a trained eye reads (<a href="https://dermnetnz.org/topics/lentigo-maligna-and-lentigo-maligna-melanoma-dermoscopy" rel="noopener nofollow" target="_blank">DermNet</a>). Pigmented basal cell carcinomas and pigmented actinic keratoses sit in the same line-up.</p>
      <p>The rule: any new, growing, irregular, multicoloured or solitary dark spot in an adult, or any spot that has changed, is examined with a dermatoscope and, if in doubt, biopsied before it is lightened or lasered. A laser that clears the pigment of a lentigo maligna does not clear the melanoma; it hides it. Clinics that laser "age spots" without a dermatologist's look are the reason this drawer exists.</p>
    `,
  },
  {
    id: 'hormones-and-hrt',
    category: 'context',
    title: 'The pill, pregnancy and HRT',
    tldr: 'Estrogen and progesterone switch melanocytes on in prone skin: melasma of pregnancy usually fades within a year, pill-related melasma often improves after switching or stopping, and HRT can trigger it — a conversation with the prescriber, not a reason to stop.',
    focus: 'melasma',
    bodyHtml: `
      <p>Melanocytes carry estrogen and progesterone receptors, and in genetically prone skin the hormones of pregnancy, the combined pill and menopausal hormone therapy raise pigment production — the mechanism behind the "mask of pregnancy" and the melasma that appears months after starting a pill (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12207721/" rel="noopener nofollow" target="_blank">pathogenesis review</a>). Pregnancy melasma usually fades within a year of delivery, faster with strict sunscreen; pill-related melasma often improves on a progestin-only or non-hormonal method; hormone therapy can trigger it and rarely needs to be stopped for it — a lower dose or a transdermal route is the usual compromise. None of this is a reason to abandon contraception or hormone therapy you need; it is a reason to tell the prescriber and to expect the melasma programme to run alongside.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'How a dermatologist sorts a spot (and what to photograph)',
    tldr: 'History (sun, hormones, acne, heat), a Wood’s lamp for depth, a dermatoscope for danger, and a photograph in the same light — then the type decides the tier.',
    bodyHtml: `
      <p>A pigment consultation is a history first: when the spots came, whether they are symmetrical, what the hormones and the sun have been doing, whether there was acne or a rash underneath, and what the skin does in summer. A Wood's lamp shows whether pigment is epidermal (it stands out sharply under the lamp and will respond) or dermal (it fades under the lamp and will respond less). A dermatoscope separates the harmless from the suspicious, and a scoring system (the MASI for melasma) or standardised photographs give something to judge a treatment by three months later.</p>
      <p>Photograph the face and hands in the same daylight, without make-up, before starting anything and monthly after. Pigment changes slowly and the mirror forgets; the photograph is the only honest judge, and the one thing that stops people abandoning a treatment at week six that would have worked by week twelve.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-sunscreen',
    category: 'home',
    title: 'Tinted, iron-oxide sunscreen (SPF 50, every day)',
    tldr: 'For melasma, sunscreen must block visible light: iron-oxide tinted sunscreen made hydroquinone work better in one RCT and roughly halved relapses over six months in another. The base under every other row.',
    evidence: 'strong',
    focus: 'general',
    note: 'Best for: everyone — and for melasma, the tint is the treatment',
    sessions: 'Every morning, reapplied outdoors',
    downtime: 'None',
    cost: '€15–30 / month',
    bodyHtml: `
      <p>UV makes every kind of dark spot and visible light makes melasma, and ordinary sunscreens block only the first. In a double-blind randomised trial, melasma patients using a sunscreen with iron oxides (which absorb visible light) alongside hydroquinone lightened significantly more than those using a UV-only sunscreen (<a href="https://pubmed.ncbi.nlm.nih.gov/24313385/" rel="noopener nofollow" target="_blank">Castanedo-Cázares 2014</a>); in a prospective randomised comparison, an iron-oxide sunscreen significantly reduced melasma relapses over six months against a UV-only one, and tinted cosmetics without iron oxides did nothing (<a href="https://www.jaad.org/article/S0190-9622(14)01870-2/fulltext" rel="noopener nofollow" target="_blank">Boukari 2015</a>); a 2025 investigator-blinded trial through a summer reached the same conclusion (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12475913/" rel="noopener nofollow" target="_blank">2025 trial</a>). Reviews put visible-light blocking by iron-oxide tints at 80–97% (<a href="https://www.jaad.org/article/S0190-9622(20)30694-0/abstract" rel="noopener nofollow" target="_blank">JAAD review</a>). For sun spots and post-inflammatory marks the visible-light story matters less and the daily habit matters just as much: the Nambour trial's 24% less measured aging with daily use applies (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>).</p>
      <p>What to buy: SPF 50, broad-spectrum with a UVA seal, containing iron oxides (they are on the label, usually as CI 77491/77492/77499, and they give the tint), applied generously every morning and again after sweating or at midday outdoors. A hat and shade do the rest. No brightener on this page outperforms the sun it is competing with.</p>
    `,
  },
  {
    id: 'home-retinoid',
    category: 'home',
    title: 'Tretinoin or adapalene for sun spots and marks',
    tldr: 'Randomised, vehicle-controlled trials: tretinoin lightened sun spots and related pigment over 6–10 months; adapalene lightened them in 57–59% versus 36% on vehicle; retinoids produced partial improvement in 85% of post-inflammatory marks in a systematic review.',
    evidence: 'strong',
    focus: 'lentigo',
    note: 'Best for: fading sun spots and post-inflammatory marks over months — and preventing the next ones',
    sessions: 'Nightly (start 2–3× a week), 6–12 months',
    downtime: 'Weeks 1–8 of dryness',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>Retinoids speed the turnover that carries pigment out and thin the pigmented layer; in doing so they fade sun spots by about half over six months and clear post-inflammatory marks faster. The evidence is randomised and vehicle-controlled: tretinoin lightened hyperpigmented lesions of photoaging in a controlled trial in Chinese and Japanese patients (<a href="https://www.jaad.org/article/S0190-9622(94)70011-7/abstract" rel="noopener nofollow" target="_blank">JAAD, 1994</a>); a mequinol–tretinoin combination cleared or improved solar lentigines in two double-blind multicentre studies (<a href="https://pubmed.ncbi.nlm.nih.gov/10688717/" rel="noopener nofollow" target="_blank">two studies</a>); and adapalene 0.1% and 0.3% gel produced "lighter" or "much lighter" lentigines in 57% and 59% of patients against 36% on vehicle over nine months (<a href="https://pubmed.ncbi.nlm.nih.gov/12833014/" rel="noopener nofollow" target="_blank">Kang 2003</a>). For post-inflammatory marks, retinoids were the commonest intervention in a 48-study review and produced partial improvement in 85% (<a href="https://pubmed.ncbi.nlm.nih.gov/37843491/" rel="noopener nofollow" target="_blank">systematic review</a>).</p>
      <p>Start low and slow — irritation itself causes post-inflammatory pigment in darker skin — always with sunscreen, and not in pregnancy. Adapalene is the pregnancy-avoided but over-the-counter option in several EU countries; tretinoin is prescription. Retinoids do not remove a sun spot; a laser does. Our <a href="/wrinkles">wrinkles guide</a> covers the retinoid ladder.</p>
    `,
  },
  {
    id: 'home-azelaic',
    category: 'home',
    title: 'Azelaic acid 15–20%',
    tldr: 'Comparable to 4% hydroquinone for melasma in randomised trials and a meta-analysis, effective for acne marks in a placebo-controlled trial, and safe in pregnancy. The over-the-counter workhorse.',
    evidence: 'moderate',
    focus: 'melasma',
    note: 'Best for: melasma and acne marks — the first brightener to try, and the only one for pregnancy',
    sessions: 'Twice daily, 3–6 months',
    downtime: 'Stinging in week 1',
    cost: '€10–25 / month',
    bodyHtml: `
      <p>Azelaic acid inhibits tyrosinase in overactive melanocytes and calms the inflammation that drives post-inflammatory marks, while leaving normal skin alone. Against the reference drug it holds up: in a double-blind comparison, 20% azelaic acid matched 4% hydroquinone for melasma (<a href="https://pubmed.ncbi.nlm.nih.gov/2528260/" rel="noopener nofollow" target="_blank">double-blind trial</a>); a 2011 randomised comparison found the azelaic group's MASI scores at least as good (<a href="https://pubmed.ncbi.nlm.nih.gov/22151936/" rel="noopener nofollow" target="_blank">Farshi 2011</a>); a meta-analysis of the randomised trials pools the comparison (<a href="https://www.cureus.com/articles/167988-azelaic-acid-versus-hydroquinone-for-managing-patients-with-melasma-systematic-review-and-meta-analysis-of-randomized-controlled-trials.pdf" rel="noopener nofollow" target="_blank">meta-analysis</a>); a 2023 systematic review covers acne, rosacea, melasma and aging (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15923" rel="noopener nofollow" target="_blank">systematic review</a>); and a randomised, placebo-controlled trial of 15% gel in 72 acne patients improved post-inflammatory marks and redness (<a href="https://link.springer.com/article/10.1007/s13555-024-01176-2" rel="noopener nofollow" target="_blank">2024 trial</a>). It is graded moderate rather than strong because the melasma trials are small and old, not because the effect is in doubt.</p>
      <p>Prescription 15–20% (Skinoren, Finacea) or over-the-counter 10% versions; twice daily; a sting for the first week; safe in pregnancy and breastfeeding, which makes it the pregnancy melasma treatment. Our <a href="/anti-aging-30s">30s guide</a> covers it as the pregnancy-safe pigment workhorse.</p>
    `,
  },
  {
    id: 'home-cysteamine',
    category: 'home',
    title: 'Cysteamine 5% cream',
    tldr: 'A placebo-controlled RCT and head-to-head comparisons with hydroquinone show similar melasma lightening; a 2024 meta-analysis of the randomised trials supports it. Smells of sulphur, works, no prescription.',
    evidence: 'moderate',
    focus: 'melasma',
    note: 'Best for: melasma and acne marks in someone who cannot or will not use hydroquinone',
    sessions: '15 minutes daily, washed off; 4 months',
    downtime: 'Redness in week 1; the smell',
    cost: '€80–150 per tube (3–4 months)',
    bodyHtml: `
      <p>Cysteamine is a natural antioxidant that inhibits pigment synthesis and, stabilised in a cream, has the rare distinction among cosmetic brighteners of a placebo-controlled randomised trial: 50 melasma patients, 4 months, significant lightening versus placebo (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/bjd.13424" rel="noopener nofollow" target="_blank">Mansouri 2015, BJD</a>). Randomised comparisons found it roughly equivalent to hydroquinone (<a href="https://pubmed.ncbi.nlm.nih.gov/32981068/" rel="noopener nofollow" target="_blank">2020 trial</a>) and to a hydroquinone–vitamin C combination (<a href="https://pubmed.ncbi.nlm.nih.gov/35510765/" rel="noopener nofollow" target="_blank">2022 trial</a>), a 2024 meta-analysis pools the randomised evidence (<a href="https://link.springer.com/article/10.1007/s00403-024-03571-3" rel="noopener nofollow" target="_blank">meta-analysis</a>), and a controlled study supports it for acne marks (<a href="https://jcadonline.com/effectiveness-cysteamine-cream-hydroquinone-ascorbic-acid/" rel="noopener nofollow" target="_blank">PIH study</a>). It is applied for 15 minutes and washed off, it smells of sulphur, it stings at first, and it is expensive; it is also one of the few things that competes with hydroquinone without being hydroquinone.</p>
    `,
  },
  {
    id: 'home-niacinamide',
    category: 'home',
    title: 'Niacinamide 4–5%',
    tldr: 'A double-blind split-face RCT: niacinamide 4% gave good-to-excellent melasma improvement in 44% versus 55% for hydroquinone, with fewer side effects. Gentle, cheap, slow, and a good partner to everything else.',
    evidence: 'moderate',
    focus: 'general',
    sessions: 'Twice daily, 8–12 weeks to judge',
    downtime: 'None',
    cost: '€10–20 / month',
    bodyHtml: `
      <p>Niacinamide blocks the transfer of pigment packets from melanocytes to skin cells rather than pigment production, which is why it is gentle and why it layers with the tyrosinase inhibitors. In a double-blind, randomised split-face trial, 27 melasma patients applied 4% niacinamide to one side and 4% hydroquinone to the other for eight weeks: colorimetry showed no difference, good-to-excellent improvement was 44% with niacinamide against 55% with hydroquinone, and side effects were 18% versus 29% (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3142702/" rel="noopener nofollow" target="_blank">Navarrete-Solís 2011</a>); a 2025 randomised trial of a 10% nicotinamide combination against hydroquinone reached a similar place (<a href="https://www.tandfonline.com/doi/full/10.2147/CCID.S473224" rel="noopener nofollow" target="_blank">2025 trial</a>). The 4–5% concentration in the trials is the useful one; it also improved fine lines and blotchiness in the wrinkle literature. Slow, safe in pregnancy, and best as the second active in a routine rather than the only one.</p>
    `,
  },
  {
    id: 'home-thiamidol',
    category: 'home',
    title: 'Thiamidol and the resorcinol family',
    tldr: 'The most potent human-tyrosinase inhibitor in a cosmetic: a randomised, vehicle-controlled trial and a head-to-head with hydroquinone for melasma, plus a controlled study in post-inflammatory marks — all manufacturer-run.',
    evidence: 'moderate',
    focus: 'melasma',
    sessions: 'Twice daily, 12 weeks',
    downtime: 'None',
    cost: '€20–35 / month',
    bodyHtml: `
      <p>Thiamidol (isobutylamido thiazolyl resorcinol) was designed against the human enzyme rather than the mushroom tyrosinase most brighteners were screened on, and it inhibits it more strongly than hydroquinone, kojic acid or arbutin in the laboratory. Clinically it has a randomised, double-blind, vehicle-controlled trial for facial hyperpigmentation (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13013891/" rel="noopener nofollow" target="_blank">2025 RCT</a>), an evaluator-blinded randomised comparison with 4% hydroquinone in melasma in which it held its own, and a controlled study showing effective reduction of post-inflammatory marks (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8251899/" rel="noopener nofollow" target="_blank">PIH study</a>). Its cousin 4-n-butylresorcinol has a similar, smaller evidence base (<a href="https://onlinelibrary.wiley.com/doi/full/10.1111/jdv.12051" rel="noopener nofollow" target="_blank">Kolbe 2013</a>). Every trial is by the manufacturer, which caps it at moderate. Sold as Eucerin Anti-Pigment in Europe at pharmacy prices; a reasonable first over-the-counter brightener for sun spots and mild melasma.</p>
    `,
  },
  {
    id: 'home-tranexamic-topical',
    category: 'home',
    title: 'Topical tranexamic acid 3–5%',
    tldr: 'Mixed: a 5% gel did no better than vehicle in one double-blind trial, while a randomised comparison found topical TXA nearly matched the oral tablets (51% vs 59% MASI reduction). Useful, not reliable alone.',
    evidence: 'moderate',
    focus: 'melasma',
    sessions: 'Twice daily, 12 weeks',
    downtime: 'Mild redness',
    cost: '€20–40 / month',
    bodyHtml: `
      <p>Tranexamic acid, applied to the skin, damps the signalling between blood vessels, keratinocytes and melanocytes that drives melasma. The trials disagree on how much gets through: a double-blind study of 5% gel in Asian patients found lightening no different from vehicle (<a href="https://pubmed.ncbi.nlm.nih.gov/22506692/" rel="noopener nofollow" target="_blank">2012 trial</a>), while a randomised comparison of oral against topical found MASI reductions of 59% and 51% respectively with no significant difference (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12418907/" rel="noopener nofollow" target="_blank">2025 trial</a>), and a 2026 meta-analysis of the tranexamic literature supports both routes with the oral one ahead (<a href="https://onlinelibrary.wiley.com/doi/10.1155/dth/6691762" rel="noopener nofollow" target="_blank">meta-analysis</a>). Formulation decides penetration. A sensible over-the-counter add-on to azelaic acid or niacinamide, and a poor stand-alone; the tablets are the version with the consistent evidence.</p>
    `,
  },
  {
    id: 'home-vitamin-c',
    category: 'home',
    title: 'Vitamin C serum',
    tldr: 'A 16-woman double-blind split-face trial: 62.5% good-to-excellent melasma improvement with 5% ascorbic acid versus 93% with hydroquinone, with fewer side effects. A supporting antioxidant, not a brightener to rely on.',
    evidence: 'emerging',
    focus: 'general',
    sessions: 'Every morning under sunscreen',
    downtime: 'None',
    cost: '€20–80 / month',
    bodyHtml: `
      <p>Ascorbic acid interrupts pigment synthesis and reduces the oxidation that darkens it, and it has one direct comparison with the reference drug: 16 women with melasma, 5% ascorbic acid on one side and 4% hydroquinone on the other for 16 weeks, with good-to-excellent results in 62.5% against 93% — and fewer side effects on the vitamin C side (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1365-4632.2004.02134.x" rel="noopener nofollow" target="_blank">Espinal-Pérez 2004</a>). A 2023 systematic review of topical vitamin C in melasma and photoaging finds small, heterogeneous studies with consistent modest benefit (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15748" rel="noopener nofollow" target="_blank">systematic review</a>). Its best role is under sunscreen in the morning, adding UV protection and slowing the re-darkening of treated skin; as a sole treatment for a visible spot it will disappoint.</p>
    `,
  },
  {
    id: 'home-kojic-arbutin',
    category: 'home',
    title: 'Kojic acid, arbutin and licorice',
    tldr: 'Kojic acid adds to hydroquinone in randomised comparisons; an arbutin–kojic cosmetic matched the triple cream in a small pilot; the EU capped kojic acid at 1% and alpha-arbutin at 2% in 2024. Modest, over-marketed, fine as add-ons.',
    evidence: 'emerging',
    focus: 'general',
    sessions: 'Daily, 12 weeks',
    downtime: 'Kojic acid irritates and sensitises',
    cost: '€15–40 / month',
    bodyHtml: `
      <p>Kojic acid (from fermentation), arbutin (a plant-derived hydroquinone precursor) and licorice extract (glabridin) all inhibit tyrosinase weakly. The best kojic data are as an add-on: in a randomised, single-blind comparison, kojic acid combined with hydroquinone outperformed the other combinations (<a href="https://pubmed.ncbi.nlm.nih.gov/23918998/" rel="noopener nofollow" target="_blank">2013 trial</a>). An arbutin 5% plus kojic 2% cosmetic was not significantly different from the triple combination cream in a small split-face pilot (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11740261/" rel="noopener nofollow" target="_blank">2025 pilot</a>). Arbutin can release hydroquinone in the skin, which is why the EU's scientific committee reviewed it and the Commission limited alpha-arbutin to 2% in face creams and kojic acid to 1% in 2024 (<a href="https://eur-lex.europa.eu/eli/reg/2024/996/oj/eng" rel="noopener nofollow" target="_blank">Regulation 2024/996</a>). Licorice has open-label data and a place in gentle routines. None of the three is a first choice; all are reasonable in a serum layered under azelaic acid or a retinoid.</p>
    `,
  },
  {
    id: 'home-aha',
    category: 'home',
    title: 'Glycolic and lactic acid at home',
    tldr: 'A 22-week double-blind trial of 8% glycolic and lactic creams improved mottled pigmentation and overall photodamage over vehicle; surface brightening that speeds pigment out and, overdone, puts it back.',
    evidence: 'emerging',
    focus: 'lentigo',
    sessions: '2–5 nights a week',
    downtime: 'Sun sensitivity',
    cost: '€10–40 / month',
    bodyHtml: `
      <p>Alpha-hydroxy acids exfoliate the pigmented upper layers and, over months, even out mottled tone. In the reference trial, 74 women used 8% glycolic acid, 8% lactic acid or vehicle for 22 weeks: on the forearms lactic acid significantly reduced mottled hyperpigmentation and sallowness and both acids improved overall photodamage over vehicle (<a href="https://pubmed.ncbi.nlm.nih.gov/8651713/" rel="noopener nofollow" target="_blank">Stiller 1996</a>). Two cautions: acids increase sun sensitivity, so the sunscreen row is not optional, and in darker skin an acid used too often inflames and creates the post-inflammatory marks it was bought to fade. A few nights a week, low strength, and never the same night as a retinoid. Our <a href="/chemical-peels">peel guide</a> covers the clinic strengths.</p>
    `,
  },
  {
    id: 'home-polypodium',
    category: 'home',
    title: 'Oral Polypodium leucotomos (fern extract)',
    tldr: 'Two small placebo-controlled trials as an add-on to sunscreen in melasma — one significantly better than placebo on severity, one not on instrumental measures. A plausible photoprotective supplement, not a treatment.',
    evidence: 'emerging',
    focus: 'melasma',
    sessions: '240 mg twice daily in summer',
    downtime: 'None',
    cost: '€30–50 / month',
    bodyHtml: `
      <p>The extract of a Central American fern is an oral antioxidant that blunts UV damage in laboratory and small human studies. For melasma it has been tested twice as an adjunct to sunscreen: in a double-blind pilot in 33 Asian women, melasma severity fell 49% on the extract against 33% on placebo over 12 weeks, though instrumental melanin measures did not differ (<a href="https://pubmed.ncbi.nlm.nih.gov/29606995/" rel="noopener nofollow" target="_blank">Goh 2018</a>), and an earlier randomised trial found it helped as an adjunct to sunscreen (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/1693756" rel="noopener nofollow" target="_blank">JAMA Dermatology</a>). It is not a sunscreen substitute — the protection factor is small — and the melasma effect is modest. A reasonable summer add-on for someone whose melasma relapses despite good sunscreen, and nothing more.</p>
    `,
  },
  {
    id: 'home-glutathione',
    category: 'home',
    title: 'Glutathione (oral, and the IV "whitening drips")',
    tldr: 'Oral glutathione produced small, transient lightening in small trials; intravenous glutathione has no established advantage and has caused liver injury, anaphylaxis and endotoxin contamination — the FDA warned compounders in 2019.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'Do not (IV); oral optional',
    downtime: 'IV: liver injury, anaphylaxis reported',
    cost: '€30–80 / month oral; €100–300 per drip',
    bodyHtml: `
      <p>Glutathione shifts pigment synthesis toward the lighter pheomelanin, and oral supplements produce small, variable and transient lightening in the few controlled trials — the effect fades within months of stopping (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11862975/" rel="noopener nofollow" target="_blank">2025 narrative review</a>). The intravenous version, sold as a "whitening drip", has no established superiority over the oral route and a documented list of harms: liver failure in a proportion of reported cases, allergic reactions, anaphylaxis, and a 2019 FDA warning to compounding pharmacies after endotoxin-contaminated injections hospitalised patients. It also lightens the whole body rather than a spot, which is not what someone with three sun spots wants. Nothing here for a dark spot; a real hazard in a drip.</p>
    `,
  },
  {
    id: 'home-natural',
    category: 'home',
    title: 'Lemon juice, vinegar and "natural" spot remedies',
    tldr: 'Lemon and lime contain furanocoumarins that burn in sunlight and leave pigment that lasts years; vinegar burns; a systematic review of natural brighteners finds small trials for a few extracts and none for kitchen remedies.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'Do not',
    downtime: 'Phytophotodermatitis; chemical burns',
    cost: 'Cheap, and expensive',
    bodyHtml: `
      <p>Citrus juice is the worst thing on the internet for a dark spot: lemon and lime carry furanocoumarins that react with UVA to produce a phototoxic burn — blisters, then dark pigment that can last years, and sometimes permanent white patches (<a href="https://www.uhhospitals.org/blog/articles/2025/02/phytophotodermatitis-why-your-skin-reacts-to-citrus-and-sun-exposure" rel="noopener nofollow" target="_blank">University Hospitals</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11070173/" rel="noopener nofollow" target="_blank">case report</a>). Undiluted vinegar is acetic acid and causes chemical burns that darken as they heal. A systematic review of natural ingredients for hyperpigmentation found small trials supporting a handful of standardised extracts — licorice, soy, niacinamide-containing botanicals — and nothing for the kitchen cupboard (<a href="https://jcadonline.com/natural-ingredients-hyperpigmentation-feb2018/" rel="noopener nofollow" target="_blank">JCAD review</a>). The natural remedy that works is shade.</p>
    `,
  },
];

const rx: Section[] = [
  {
    id: 'rx-hydroquinone',
    category: 'rx',
    title: 'Hydroquinone 2–4%',
    tldr: 'The reference brightener in every melasma trial for fifty years and the comparator the others are measured against; prescription-only and banned from cosmetics in the EU; used in courses, not for years.',
    evidence: 'strong',
    focus: 'melasma',
    note: 'Best for: melasma and stubborn post-inflammatory marks, in 3–4-month courses with a dermatologist',
    sessions: 'Nightly, 12–16 weeks, then a break',
    downtime: 'Irritation; a halo of lightening if misused',
    cost: '€15–40 per prescription',
    bodyHtml: `
      <p>Hydroquinone inhibits tyrosinase and is toxic to overactive melanocytes, and it is the drug every other brightener is compared with. The Cochrane review of melasma treatments — 20 randomised trials, 2,125 participants — found it effective and found the triple combination built around it more effective still (<a href="https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD003583.pub2/references" rel="noopener nofollow" target="_blank">Cochrane 2010</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/24438951/" rel="noopener nofollow" target="_blank">abridged review</a>). In the comparisons on this page it beats vitamin C, matches azelaic acid, cysteamine and niacinamide, and outperforms most cosmetics.</p>
      <p>Europe treats it with respect: it is prohibited in cosmetics (Annex II of the Cosmetics Regulation) and available only on prescription, usually compounded at 2–4% or in the triple cream (<a href="https://legalclarity.org/is-hydroquinone-banned-in-the-european-union/" rel="noopener nofollow" target="_blank">regulatory summary</a>). The reason is exogenous ochronosis — a permanent blue-black darkening after long use, especially above 2% and in darker skin — which a systematic review finds rare but real (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/ijd.15878" rel="noopener nofollow" target="_blank">ochronosis review</a>). Used the way dermatologists use it — 12–16 weeks, then a break on a non-hydroquinone maintenance — it is the most effective cream for melasma there is. Used from an unlabelled pot for years, it is the cause of the next problem.</p>
    `,
  },
  {
    id: 'rx-triple',
    category: 'rx',
    title: 'The triple combination cream (hydroquinone, tretinoin, fluocinolone)',
    tldr: 'Cochrane: 58% more likely to lighten melasma than hydroquinone alone; the standard against which everything is measured — and half of patients relapse within months, so maintenance is part of the prescription.',
    evidence: 'strong',
    focus: 'melasma',
    note: 'Best for: moderate to severe melasma — the fastest, best-evidenced cream, in courses',
    sessions: 'Nightly, 8–12 weeks, then twice weekly',
    downtime: 'Redness and peeling in weeks 1–3',
    cost: '€50–80 per tube',
    bodyHtml: `
      <p>Kligman's formula pairs hydroquinone with tretinoin (which speeds pigment out and improves penetration) and a mild corticosteroid (which damps the irritation and the pigment-provoking inflammation). In the Cochrane review the triple combination was 1.58 times as likely to lighten melasma as hydroquinone alone and beat every dual combination (<a href="https://pubmed.ncbi.nlm.nih.gov/24438951/" rel="noopener nofollow" target="_blank">Cochrane review</a>); a trial in Middle Eastern skin confirms efficacy and tolerability (<a href="https://pubmed.ncbi.nlm.nih.gov/31354327/" rel="noopener nofollow" target="_blank">2019 study</a>). Marketed as Tri-Luma in some countries and compounded in others, it is prescription-only everywhere.</p>
      <p>The relapse problem is the honest half of the story. Among patients who cleared and moved to a twice-weekly maintenance regimen, about half stayed clear at six months and the rest needed daily therapy again (<a href="https://pubmed.ncbi.nlm.nih.gov/20398959/" rel="noopener nofollow" target="_blank">maintenance study</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/21623930/" rel="noopener nofollow" target="_blank">maintenance regimens</a>); earlier data found half needed a second course within two months. Melasma is treated in cycles, with an iron-oxide sunscreen doing the work in between, and the steroid is the reason it cannot be used continuously.</p>
    `,
  },
  {
    id: 'rx-tranexamic-oral',
    category: 'rx',
    title: 'Oral tranexamic acid',
    tldr: 'Randomised, placebo-controlled: 49% reduction in melasma score versus 18% on placebo at three months; meta-analyses of RCTs and a large cohort finding no excess of clots at 250 mg twice daily. Prescription, screened, off-label.',
    evidence: 'strong',
    focus: 'melasma',
    note: 'Best for: melasma that relapses through good sunscreen and creams — the biggest lever short of the clinic',
    sessions: '250 mg twice daily, 12 weeks; repeat courses',
    downtime: 'None; mild stomach upset',
    cost: '€15–30 / month',
    bodyHtml: `
      <p>Tranexamic acid, a clotting drug used for heavy periods, damps the plasmin signalling that links UV, blood vessels and melanocytes in melasma, and taken by mouth it reaches all of it. In the double-blind randomised trial, 250 mg twice daily for three months reduced the modified MASI by 49% against 18% on placebo, with the severe cases improving most (<a href="https://pubmed.ncbi.nlm.nih.gov/28987494/" rel="noopener nofollow" target="_blank">Del Rosario 2018</a>); a network meta-analysis puts the optimal dose at 250 mg three times daily for 12 weeks with twice daily acceptable (<a href="https://pubmed.ncbi.nlm.nih.gov/36332095/" rel="noopener nofollow" target="_blank">network meta-analysis</a>); a 2024 meta-analysis of the randomised trials confirms the class effect (<a href="https://www.tandfonline.com/doi/full/10.1080/09546634.2024.2361106" rel="noopener nofollow" target="_blank">2024 meta-analysis</a>). It is the largest single effect on melasma outside a clinic and it works alongside the creams. Our <a href="/anti-aging-30s">30s guide</a> grades it the same way.</p>
      <p>Safety is about clots in theory and reassuring in practice: a multicentre propensity-matched cohort found no association between melasma-dose tranexamic acid and thromboembolism (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12621489/" rel="noopener nofollow" target="_blank">2025 cohort</a>), and the dose is comparable to the monthly dose used for heavy periods (<a href="https://dermnetnz.org/topics/tranexamic-acid" rel="noopener nofollow" target="_blank">DermNet</a>). It is still contraindicated with a history of clots, clotting disorders, the combined pill in higher-risk women, and severe kidney disease, and it is off-label and prescription-only for melasma. Relapse follows stopping, as with everything else in this condition; repeat courses are usual.</p>
    `,
  },
  {
    id: 'rx-hormones',
    category: 'rx',
    title: 'Reviewing the pill, HRT and other triggers',
    tldr: 'Switching from a combined pill to a progestin-only or non-hormonal method, or lowering an HRT dose, improves melasma in some women — observational evidence and expert practice, no trials.',
    evidence: 'emerging',
    focus: 'melasma',
    sessions: 'One conversation with the prescriber',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Because estrogen and progesterone act directly on melanocytes, removing or reducing a hormonal trigger is part of every melasma plan — in principle. In practice the evidence is observational: melasma that began with a pill often improves after switching to a progestin-only or non-hormonal method, pregnancy melasma fades in most women within a year of delivery, and hormone therapy that provoked it can sometimes be continued at a lower dose or by a transdermal route (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12207721/" rel="noopener nofollow" target="_blank">pathogenesis review</a>). No trial randomises women off their contraception, so this stays emerging. Heat is the other trigger worth naming: cooks, sauna habits and hot yoga relapse, and the fix is a fan, not a cream.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-pigment-lasers',
    category: 'clinic',
    title: 'Pigment lasers for sun spots (Q-switched, picosecond)',
    tldr: 'A 41-trial systematic review: Q-switched lasers clear 36–77% of sun spots and picosecond lasers 68–93% in one to three sessions; lasers beat cryotherapy in a meta-analysis of five randomised trials. The removal tool.',
    evidence: 'strong',
    focus: 'lentigo',
    note: 'Best for: sun spots and freckles in lighter skin — one to three sessions, then sunscreen forever',
    sessions: '1–3',
    downtime: '5–10 days of dark crusts',
    cost: '€150–400 / session',
    bodyHtml: `
      <p>Nanosecond (Q-switched) and picosecond lasers at 532, 694 or 755 nm shatter the pigment in a sun spot into fragments the body clears; the spot darkens, crusts and falls away within ten days. The systematic review of 41 clinical trials puts clearance at 36–77% for Q-switched lasers and 68–93% for picosecond lasers (<a href="https://pubmed.ncbi.nlm.nih.gov/40145274/" rel="noopener nofollow" target="_blank">2025 review</a>); a split-face randomised comparison found the 532 nm picosecond laser more effective than its Q-switched equivalent with less post-inflammatory darkening (<a href="https://pubmed.ncbi.nlm.nih.gov/33911703/" rel="noopener nofollow" target="_blank">split-face RCT</a>); a meta-analysis of five randomised trials found lasers significantly more likely than cryotherapy to achieve at least 50% improvement (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13477615/" rel="noopener nofollow" target="_blank">laser vs cryotherapy meta-analysis</a>); a 2025 randomised trial compares 730, 532 and 694 nm devices for freckles and lentigines (<a href="https://link.springer.com/article/10.1007/s10103-025-04562-0" rel="noopener nofollow" target="_blank">2025 RCT</a>).</p>
      <p>Two conditions: the spot has been examined (a laser hides a lentigo maligna — see the red-flags drawer), and the skin is light enough, or the settings conservative enough, to avoid post-inflammatory darkening, which is the common complication in Fitzpatrick IV–VI. Cleared spots stay cleared; new ones follow new sun. Our <a href="/laser-ipl">laser guide</a> covers the devices.</p>
    `,
  },
  {
    id: 'clinic-ipl',
    category: 'clinic',
    title: 'IPL for scattered sun spots',
    tldr: 'Randomised split-face trial support and 75–90% sun-spot clearance in the 41-trial review, treating a whole cheek or chest in three to five sessions; the wrong tool for melasma and for darker skin.',
    evidence: 'strong',
    focus: 'lentigo',
    note: 'Best for: many small sun spots across the cheeks, chest or hands, with redness alongside',
    sessions: '3–5, a month apart',
    downtime: 'Darkened spots for a week',
    cost: '€200–400 / session',
    bodyHtml: `
      <p>Intense pulsed light is a broad flash that pigment and blood vessels absorb, so it treats a field — a mottled cheek, a freckled chest, the backs of the hands — rather than a spot. A randomised, blinded split-face trial showed improved pigmentation, visible vessels and texture (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/407425" rel="noopener nofollow" target="_blank">JAMA Dermatology</a>); the 41-trial review of solar lentigines reports 75–90% success for IPL with less post-inflammatory darkening than some lasers (<a href="https://pubmed.ncbi.nlm.nih.gov/40145274/" rel="noopener nofollow" target="_blank">2025 review</a>); a 16-study systematic review supports the class for photoaging (<a href="https://link.springer.com/article/10.1007/s00403-021-02283-2" rel="noopener nofollow" target="_blank">systematic review</a>). It is the colour eraser of the <a href="/laser-ipl">laser guide</a> — and it is the wrong tool for melasma, which it heats and relapses, and for darker skin, where the broad spectrum burns. Our <a href="/anti-aging-50s">50s guide</a> makes it the decade's pigment device.</p>
    `,
  },
  {
    id: 'clinic-cryotherapy',
    category: 'clinic',
    title: 'Cryotherapy (liquid nitrogen) for sun spots',
    tldr: 'Freezing clears 37–71% of sun spots in randomised comparisons but lost to lasers in a meta-analysis; cheap, quick, and a real risk of a permanent white spot in darker skin.',
    evidence: 'moderate',
    focus: 'lentigo',
    sessions: '1–2',
    downtime: 'A blister and crust for a week',
    cost: '€50–150',
    bodyHtml: `
      <p>A brief spray of liquid nitrogen kills the pigment cells in a sun spot, which crusts and falls off. Across the randomised comparisons pooled in a 2025 meta-analysis, cryotherapy succeeded in 37–71% of spots against 36–77% for Q-switched lasers, and lasers were significantly more likely to reach at least 50% improvement with fewer poor responses (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13477615/" rel="noopener nofollow" target="_blank">meta-analysis</a>). It is the cheapest removal on this page and what a dermatologist reaches for a few spots on a fair hand; its drawbacks are hypopigmentation — melanocytes die more easily than the skin around them, so an over-frozen spot heals white — and post-inflammatory darkening in darker skin. Not for melasma, not for anything unexamined.</p>
    `,
  },
  {
    id: 'clinic-thulium',
    category: 'clinic',
    title: '1927 nm fractional thulium laser (diffuse sun damage, melasma)',
    tldr: 'A shallow non-ablative laser for mottled photoaging: 100-patient melasma series with MASI falling from 11.8 to 3.4 after two sessions, 60–90% improvement in diffuse dyspigmentation, partial rebound by three months in melasma.',
    evidence: 'moderate',
    focus: 'lentigo',
    note: 'Best for: a whole face or chest of mottled sun damage; melasma as an adjunct, with relapse expected',
    sessions: '2–4, a month apart',
    downtime: '3–5 days of sandpaper and bronzing',
    cost: '€300–700 / session',
    bodyHtml: `
      <p>The 1927 nm wavelength is absorbed by water within the top 200 microns of skin, so it resurfaces the pigmented epidermis without reaching the dermis — the profile that suits diffuse sun damage. A retrospective series of 100 melasma patients recorded MASI falling from 11.8 to 3.4 after two monthly sessions (<a href="https://pubmed.ncbi.nlm.nih.gov/31690148/" rel="noopener nofollow" target="_blank">100-patient series</a>); a study of diffuse dyspigmentation and actinic change reported 60–90% improvement (<a href="https://pubmed.ncbi.nlm.nih.gov/36950878/" rel="noopener nofollow" target="_blank">2023 study</a>); the original photopigmentation series saw two-thirds of patients with moderate to very significant improvement in lentigines at one month, falling to half by three months (<a href="https://jddonline.com/articles/nonablative-1927-nm-fractional-resurfacing-for-the-treatment-of-facial-photopigmentation-S1545961614P1317X" rel="noopener nofollow" target="_blank">JDD, 2014</a>); and a series in Fitzpatrick V–VI used it for post-inflammatory marks with good safety (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8016558/" rel="noopener nofollow" target="_blank">skin-of-colour series</a>). Uncontrolled and retrospective throughout, with the melasma gains partially rebounding, which is where the tier sits.</p>
    `,
  },
  {
    id: 'clinic-peels',
    category: 'clinic',
    title: 'Chemical peels (glycolic, Jessner’s, TCA)',
    tldr: 'A series of glycolic peels matched the triple cream in a randomised trial and TCA acts faster with more relapse; useful adjuncts for melasma and post-inflammatory marks, and a pigment risk in darker skin if pushed.',
    evidence: 'moderate',
    focus: 'melasma',
    sessions: '4–6, 2–4 weeks apart',
    downtime: '2–7 days of peeling by depth',
    cost: '€100–300 / session',
    bodyHtml: `
      <p>Peels remove pigmented epidermis in a controlled way and let brighteners in behind them. In a randomised trial, a course of glycolic-acid peels achieved the same roughly 50% reduction in melasma score as the triple combination cream (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4372906/" rel="noopener nofollow" target="_blank">randomised trial</a>), and the Cochrane review lists peels among the adjuncts with trial support (<a href="https://pubmed.ncbi.nlm.nih.gov/24438951/" rel="noopener nofollow" target="_blank">Cochrane review</a>). Superficial peels in a series are the melasma and post-inflammatory tool; medium TCA peels work faster on sun damage in fair skin and relapse melasma more. The risk is the familiar one — inflammation in darker skin makes pigment — so the depth is kept superficial in Fitzpatrick IV–VI and the sunscreen row does the rest. Our <a href="/chemical-peels">peel guide</a> grades every agent.</p>
    `,
  },
  {
    id: 'clinic-microneedling-txa',
    category: 'clinic',
    title: 'Microneedling with tranexamic acid',
    tldr: 'Meta-analyses of the randomised trials show microneedled or injected TXA lowers melasma scores meaningfully, in one comparison beating the triple cream; relapse remains the rule.',
    evidence: 'moderate',
    focus: 'melasma',
    sessions: '3–6, 2–4 weeks apart',
    downtime: '1–2 days of redness',
    cost: '€150–300 / session',
    bodyHtml: `
      <p>Delivering tranexamic acid through microneedle channels or as an intradermal injection solves the penetration problem of the topical. A meta-analysis of microneedling with tranexamic acid found meaningful MASI reductions across the randomised trials (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15965" rel="noopener nofollow" target="_blank">meta-analysis</a>); one randomised comparison had it beating the triple combination cream (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12359957/" rel="noopener nofollow" target="_blank">comparison</a>); intralesional tranexamic acid alongside hydroquinone outperformed hydroquinone alone in a split-face study (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6051262/" rel="noopener nofollow" target="_blank">split-face study</a>). It is a clinic-based, needle-based way to get the drug where it works, safe in darker skin because it makes no heat, and — like everything for melasma — a course with maintenance, not a cure. Our <a href="/microneedling">microneedling guide</a> covers the technique.</p>
    `,
  },
  {
    id: 'clinic-laser-melasma',
    category: 'clinic',
    title: 'Lasers for melasma (low-fluence "toning", picosecond)',
    tldr: 'Meta-analyses show real short-term MASI reductions that diminish with time, relapse is the rule, and repeated low-fluence sessions have caused permanent confetti-white hypopigmentation. An adjunct for the resistant case, never first-line.',
    evidence: 'emerging',
    focus: 'melasma',
    sessions: 'Weekly to fortnightly, 5–10 (as sold)',
    downtime: 'None; the risk is cumulative',
    cost: '€150–300 / session',
    bodyHtml: `
      <p>Low-fluence 1064 nm Q-switched "laser toning" and the picosecond lasers do lighten melasma: a meta-analysis found moderate short-term improvements as monotherapy and larger ones combined with creams, diminishing over time (<a href="https://pubmed.ncbi.nlm.nih.gov/36533794/" rel="noopener nofollow" target="_blank">low-fluence meta-analysis</a>); a systematic review found the same and linked mottled hypopigmentation to the number of sessions (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9323185/" rel="noopener nofollow" target="_blank">systematic review</a>); picosecond lasers have a modest randomised evidence base, in one trial no better than 2% hydroquinone cream (<a href="https://pubmed.ncbi.nlm.nih.gov/36897459/" rel="noopener nofollow" target="_blank">picosecond meta-analysis</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10086227/" rel="noopener nofollow" target="_blank">RCT vs hydroquinone</a>). The damage from over-treatment is specific and permanent: confetti-like white spots across the cheeks after repeated toning schedules, a recognised problem in Asian practice (<a href="https://jcadonline.com/the-asian-problem-of-frequent-laser-toning-for-melasma/" rel="noopener nofollow" target="_blank">JCAD</a>). Our <a href="/laser-ipl">laser guide</a> grades it the same way: an adjunct for the resistant case under a dermatologist who counts sessions, never a package of ten.</p>
    `,
  },
  {
    id: 'clinic-laser-pih',
    category: 'clinic',
    title: 'Lasers for post-inflammatory marks',
    tldr: 'In the systematic review, lasers fully cleared 18% and partly improved 61% of post-inflammatory marks — and made 2.6% worse. Second-line, conservative, and only after the topicals and time.',
    evidence: 'emerging',
    focus: 'pih',
    sessions: '3–6',
    downtime: '1–5 days',
    cost: '€150–400 / session',
    bodyHtml: `
      <p>Every laser works by injuring skin, and post-inflammatory pigment is what injured skin does in the people who have it — which is why the systematic review of 48 studies found laser and energy devices fully clearing only 18% of marks, partially improving 61%, and worsening 2.6% (<a href="https://pubmed.ncbi.nlm.nih.gov/37843491/" rel="noopener nofollow" target="_blank">systematic review</a>). The gentler options — low-fluence 1064 nm, the 1927 nm thulium at conservative settings, and microneedling without heat — have the best record in darker skin (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8016558/" rel="noopener nofollow" target="_blank">thulium series</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11514325/" rel="noopener nofollow" target="_blank">skin-of-colour review</a>). Test spots, priming with a brightener, and strict sunscreen are not optional. The right order is sunscreen and topicals for three to six months first; most marks never need the laser.</p>
    `,
  },
  {
    id: 'clinic-cosmelan',
    category: 'clinic',
    title: 'Branded depigmentation masks (Cosmelan, Dermamelan)',
    tldr: 'A multi-month protocol of a clinic mask followed by a home cream, with retrospective published data and marketing percentages no trial supports; expensive, serious, and built on the same actives as the rows above.',
    evidence: 'emerging',
    focus: 'melasma',
    sessions: '1 clinic mask + 6–12 months of home cream',
    downtime: '7–10 days of peeling and redness',
    cost: '€600–1,200',
    bodyHtml: `
      <p>The branded depigmentation systems apply a thick occluded mask of tyrosinase inhibitors (azelaic and kojic acids, arbutin, retinoids and, in some formulations, hydroquinone-class agents) in clinic for several hours, followed by months of a home maintenance cream and strict sunscreen. They work by the same mechanisms as the rows above, concentrated and sequenced, and the published evidence is retrospective series rather than controlled trials; the "95% success" figures are the manufacturer's. For someone who wants a supervised, all-in programme they are a reasonable structure; for someone comparing evidence per euro, the triple cream plus oral tranexamic acid plus an iron-oxide sunscreen has the trials and costs a fraction. Our <a href="/chemical-peels">peel guide</a> grades the branded peels in detail.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-biopsy-first',
    category: 'safety',
    title: 'Look before you laser: the melanoma rule',
    tldr: 'A new, changing, irregular, multicoloured or solitary dark spot in an adult is examined with a dermatoscope — and biopsied if in doubt — before any brightener, peel or laser. Lentigo maligna mimics a sun spot.',
    bodyHtml: `
      <p>Lentigo maligna is a slow melanoma that begins as a flat brown patch on the sun-damaged face of an older person and can look like a solar lentigo or a flat seborrheic keratosis for years (<a href="https://www.ncbi.nlm.nih.gov/books/NBK482163/" rel="noopener nofollow" target="_blank">StatPearls</a>). Lasering or bleaching it removes the visible pigment and leaves the melanoma growing unseen, which is the single most serious thing that can go wrong on this page. The ABCDE signs, a spot unlike its neighbours, and any change over months are the triggers for a dermatoscope and, if in doubt, a biopsy (<a href="https://dermnetnz.org/topics/lentigo-maligna-and-lentigo-maligna-melanoma-dermoscopy" rel="noopener nofollow" target="_blank">DermNet</a>). A clinic that treats "age spots" without a dermatologist's examination is not a clinic to use; a beautician with an IPL is not a clinic at all.</p>
    `,
  },
  {
    id: 'safety-hydroquinone',
    category: 'safety',
    title: 'Hydroquinone: ochronosis, halos, and the EU rules',
    tldr: 'Long, high-strength use — especially above 2% and in darker skin — can cause permanent blue-black ochronosis; the EU bans it from cosmetics and permits it on prescription; courses, then breaks, and never from an unlabelled pot.',
    bodyHtml: `
      <p>Exogenous ochronosis is the paradox of hydroquinone: after months to years of use, especially above 2% and in Fitzpatrick IV–VI skin, some users develop a permanent blue-black, stippled darkening where they applied it, and the mechanism now appears to involve tyrosinase metabolising the drug itself (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/ijd.15878" rel="noopener nofollow" target="_blank">systematic review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/40662524/" rel="noopener nofollow" target="_blank">2025 mechanism study</a>). It has been reported even with 2% used for years (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3482806/" rel="noopener nofollow" target="_blank">case report</a>). The lesser harms are irritation, a halo of over-lightened skin around the treated spot, and rebound darkening on stopping. Europe's rules follow: prohibited in cosmetics under Annex II of the Cosmetics Regulation, permitted as a prescription medicine, and illegal to sell over the counter — the shops fined for it are selling exactly the unlabelled high-strength pots that cause ochronosis (<a href="https://legalclarity.org/is-hydroquinone-banned-in-the-european-union/" rel="noopener nofollow" target="_blank">regulatory summary</a>). Used in 12–16-week courses with breaks, at 2–4%, on a spot rather than a face, under a dermatologist, it is safe; the harm is in the "forever".</p>
    `,
  },
  {
    id: 'safety-mercury-steroids',
    category: 'safety',
    title: 'The illegal lightening creams: mercury and steroids',
    tldr: 'Skin-lightening creams sold online and in ethnic-market shops have contained mercury at up to 30,000 times the legal limit and potent steroids; both poison, and steroid creams thin and darken skin.',
    bodyHtml: `
      <p>The unregulated "whitening" and "fade" creams — sold on marketplaces and in some shops for the whole face — are the dangerous end of this topic. Health authorities keep finding mercury in them: a 2025 New York health advisory identified 22 over-the-counter creams with mercury up to 30,000 times the allowable cosmetic limit (<a href="https://www.nyc.gov/assets/doh/downloads/pdf/han/advisory/2025/han-advisory-2-skin-lightening-creams.pdf" rel="noopener nofollow" target="_blank">NYC advisory</a>), the FDA warns of poisoning through skin absorption and household exposure (<a href="https://www.fda.gov/consumers/consumer-updates/mercury-poisoning-linked-skin-products" rel="noopener nofollow" target="_blank">FDA</a>), and case reports describe tremor, kidney damage and neurological harm in couples sharing a cream (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11794203/" rel="noopener nofollow" target="_blank">case report</a>). Others contain potent corticosteroids that lighten by thinning: stretch marks, visible vessels, steroid acne and, on stopping, rebound darkening. Any lightening product with no ingredient list, a whole-face "fairness" claim, or a price too good is one of these.</p>
    `,
  },
  {
    id: 'safety-lasers-darker-skin',
    category: 'safety',
    title: 'Lasers and peels in darker skin: the pigment they cause',
    tldr: 'Post-inflammatory darkening after lasers in Fitzpatrick IV–VI, permanent white spots after repeated melasma "toning", worsening in 2.6% of post-inflammatory marks — test spots, conservative settings, priming and sunscreen are the rules.',
    bodyHtml: `
      <p>Every energy device makes heat and every peel makes inflammation, and in reactive melanocytes both make pigment. Post-inflammatory hyperpigmentation follows resurfacing in darker skin in a meaningful minority even with care; the systematic review of post-inflammatory marks found lasers worsened 2.6% of them (<a href="https://pubmed.ncbi.nlm.nih.gov/37843491/" rel="noopener nofollow" target="_blank">systematic review</a>); repeated low-fluence laser toning for melasma has produced permanent confetti-like hypopigmentation, correlated with the number of sessions (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9323185/" rel="noopener nofollow" target="_blank">systematic review</a>; <a href="https://jcadonline.com/the-asian-problem-of-frequent-laser-toning-for-melasma/" rel="noopener nofollow" target="_blank">JCAD</a>); IPL in Fitzpatrick V–VI burns. The rules that reduce the risk: a test spot, the longest safe wavelength (1064 nm) and conservative settings, priming for weeks with a brightener, a course of sunscreen before and after, and an operator who treats darker skin weekly rather than occasionally. Our <a href="/laser-ipl">laser guide</a> has the full skin-of-colour section.</p>
    `,
  },
  {
    id: 'safety-tranexamic',
    category: 'safety',
    title: 'Oral tranexamic acid: who must not take it',
    tldr: 'A personal or family history of clots, a clotting disorder, some combined pills, smoking over 35, pregnancy, severe kidney disease — screened before prescribing; the melasma dose has not been linked to clots in cohort data.',
    bodyHtml: `
      <p>Tranexamic acid slows the breakdown of clots, which is its job in heavy periods and its theoretical hazard in melasma. The screening list is short and firm: no personal or family history of venous thrombosis or stroke, no known clotting disorder, caution with the combined pill in women with other risk factors, not in pregnancy or breastfeeding, and not with severe kidney disease (<a href="https://dermnetnz.org/topics/tranexamic-acid" rel="noopener nofollow" target="_blank">DermNet</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/29677015/" rel="noopener nofollow" target="_blank">review</a>). Within those limits the data are reassuring — a propensity-matched multicentre cohort found no association with thromboembolism at melasma doses (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12621489/" rel="noopener nofollow" target="_blank">2025 cohort</a>) — and the side effects are stomach upset and lighter periods. It is prescription-only and off-label for melasma across Europe; the tablets bought online without the screening are the risk, not the drug.</p>
    `,
  },
  {
    id: 'safety-pregnancy',
    category: 'safety',
    title: 'Pregnancy and breastfeeding',
    tldr: 'Hydroquinone, retinoids and oral tranexamic acid are avoided; azelaic acid, niacinamide, vitamin C, sunscreen and, after delivery, time are the plan. Pregnancy melasma usually fades within a year.',
    bodyHtml: `
      <p>Pregnancy is when melasma appears and when most of the treatment list is off the table: hydroquinone (absorbed, avoided as a precaution), topical retinoids (avoided), oral tranexamic acid (not used), lasers and medium peels (deferred). What remains is enough to hold the line — an iron-oxide tinted SPF 50 every morning, azelaic acid 15–20% (the one brightener with pregnancy safety data and real trials), niacinamide and vitamin C, a hat, and shade. Most pregnancy melasma fades substantially within a year of delivery; what remains is treated with the full list afterwards. Breastfeeding follows the same rules for the face, which a baby's face touches.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-comeback',
    category: 'faq',
    title: 'Will the spots come back?',
    tldr: 'Sun spots stay cleared unless you make new ones; melasma relapses in about half of patients within months of stopping and is managed, not cured; post-inflammatory marks return whenever the skin is re-injured.',
    bodyHtml: `
      <p>A lasered or frozen sun spot is gone; the sun that made it makes its neighbours, which is why the after-care is sunscreen for life rather than more lasers. Melasma is a chronic condition with a relapse rate of about half within six months even after the strongest cream, and every summer, pregnancy or hormone change is a new trigger — the plan is a tinted sunscreen every day, brighteners in courses, and oral tranexamic acid for the bad years. Post-inflammatory marks fade and come back with the next spot or rash, so treating the acne or eczema is the treatment.</p>
    `,
  },
  {
    id: 'faq-remove-at-home',
    category: 'faq',
    title: 'Can I get rid of age spots at home?',
    tldr: 'Fade, yes — a retinoid or a brightener lightens sun spots by roughly half over six months. Remove, no — that takes a laser, IPL or cryotherapy, in one to three sessions.',
    bodyHtml: `
      <p>Home treatment fades: adapalene lightened sun spots in about 58% of patients over nine months against 36% on vehicle, and hydroquinone, thiamidol or cysteamine do similar work. Nothing in a tube removes the altered skin that makes a sun spot, so a fully cleared spot means a device: a picosecond or Q-switched laser clears 68–93% in one to three sessions, IPL 75–90% across a field, cryotherapy fewer for less money. The order for most people is the retinoid and sunscreen first (they also prevent the next spots), then the laser for the ones that bother you.</p>
    `,
  },
  {
    id: 'faq-dangerous',
    category: 'faq',
    title: 'Is my dark spot dangerous?',
    tldr: 'Usually not — but a new, growing, irregular, multicoloured or solitary spot, or one that has changed, needs a dermatoscope before anything else. The ABCDE rule and "the ugly duckling" are the screen.',
    bodyHtml: `
      <p>Sun spots are uniform, flat, and match their neighbours; melasma is symmetrical; post-inflammatory marks sit where something happened. The spot to worry about is the one that is different — asymmetrical, with an irregular border, more than one colour, larger than 6 mm, or evolving — especially a single new patch on the sun-damaged face of someone over 50, which is how lentigo maligna presents. A dermatologist with a dermatoscope answers the question in minutes, and a biopsy settles it; no laser, peel or cream comes before that answer.</p>
    `,
  },
  {
    id: 'faq-melasma-vs-sunspots',
    category: 'faq',
    title: 'Melasma or sun spots — how do I tell?',
    tldr: 'Sun spots are separate, defined spots on sun-exposed skin at any age; melasma is symmetrical, blotchy patches on the cheeks, forehead and upper lip, in women, tied to hormones and worse in summer.',
    bodyHtml: `
      <p>Count and shape decide it. Sun spots are discrete, sharply edged, scattered where the sun landed — including hands and chest — and the same in every season. Melasma is a symmetrical map: patches with irregular, feathered edges on both cheeks, the forehead, the upper lip or the chin, on the face only, that started with a pregnancy, a pill or a hot summer and lightens in winter. The distinction matters because the treatments are opposites: lasers for sun spots, and for melasma an iron-oxide sunscreen, a brightener in courses and oral tranexamic acid, with lasers as a last, cautious adjunct.</p>
    `,
  },
  {
    id: 'faq-hydroquinone-legal',
    category: 'faq',
    title: 'Is hydroquinone legal, and is it safe, in Europe?',
    tldr: 'Legal on prescription, banned in cosmetics. Safe in 12–16-week courses at 2–4% under a dermatologist; unsafe from an unlabelled pot used for years, which is where ochronosis comes from.',
    bodyHtml: `
      <p>In the EU and UK hydroquinone is prohibited in cosmetic products and available only as a prescription medicine, usually compounded or in the triple combination cream. That is not because a short course is dangerous — the Cochrane review makes it the reference treatment for melasma — but because unsupervised long-term use, especially above 2% in darker skin, causes exogenous ochronosis, a permanent blue-black darkening, and because the illegal high-strength creams that circulate also carry mercury and steroids. Used as prescribed, in courses with breaks and a non-hydroquinone maintenance, it remains the most effective cream there is.</p>
    `,
  },
  {
    id: 'faq-sunscreen-melasma',
    category: 'faq',
    title: 'Which sunscreen for melasma?',
    tldr: 'SPF 50, broad-spectrum with a UVA seal, and tinted with iron oxides — the tint blocks the visible light that untinted sunscreens let through. Every morning, reapplied at midday.',
    bodyHtml: `
      <p>Melasma responds to visible light as well as UV, and only iron-oxide pigments block it — the two randomised trials that improved hydroquinone's results and halved relapses used exactly that. Look for iron oxides on the label (CI 77491, 77492, 77499), a UVA seal or PA++++ rating, SPF 50, and a texture you will wear every day including winter; mineral filters with a tint are the usual answer. A wide-brimmed hat adds what no sunscreen reaches, and a fan in a hot kitchen is part of the regimen too.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until I see something?',
    tldr: 'Brighteners: 8–12 weeks for a visible change, 4–6 months for the full effect. Oral tranexamic acid: 4–8 weeks. Lasers and cryotherapy: the spot crusts and clears in 1–2 weeks. Post-inflammatory marks: months to a year.',
    bodyHtml: `
      <p>Pigment leaves the skin at the pace the epidermis turns over, so every cream on this page needs eight to twelve weeks before it is judged and four to six months to finish — the trials ran that long. Oral tranexamic acid moves faster, with change by week four to eight. A lasered or frozen sun spot darkens, crusts and falls off within ten days, and the skin beneath is pink for weeks. Post-inflammatory marks are the slow ones: brown marks fade in three to six months with sunscreen and a brightener, grey marks take a year or more. Photograph monthly in the same light; the mirror cannot see change this slow.</p>
    `,
  },
  {
    id: 'faq-laser-or-ipl',
    category: 'faq',
    title: 'Laser or IPL for sun spots?',
    tldr: 'A pigment laser for a few defined spots (one to three sessions, the highest clearance); IPL for a field of many small spots with redness; neither for melasma or for darker skin without a specialist.',
    bodyHtml: `
      <p>Picosecond and Q-switched lasers clear individual sun spots most completely (68–93% in the 41-trial review) and suit a handful of defined spots on a fair face or hand. IPL treats a whole area — a mottled cheek, a freckled chest, sun-damaged hands — in three to five sessions and also fades the redness that comes with photoaging, at somewhat lower per-spot clearance. Both need the spots examined first, both need sunscreen forever afterwards, and both are wrong for melasma, which they relapse, and hazardous in darker skin, where the 1064 nm laser at conservative settings is the tool. The <a href="/laser-ipl">laser guide</a> walks the ladder.</p>
    `,
  },
  {
    id: 'faq-acne-marks',
    category: 'faq',
    title: 'What works on the dark marks acne leaves?',
    tldr: 'Treat the acne, daily sunscreen, azelaic acid or a retinoid, patience — and no picking. Retinoids partially improved 85% in the review; lasers are second-line and can make it worse.',
    bodyHtml: `
      <p>Post-inflammatory marks are the skin overreacting to injury, so the first treatment is to stop the injury: an acne regimen that works, no picking, no scrubbing. Then sunscreen every day (a mark exposed to sun darkens and stays), and a gentle brightener that also treats acne — azelaic acid 15–20% has a placebo-controlled trial for exactly this, and adapalene or tretinoin do both jobs. Niacinamide and cysteamine layer well. Give it three to six months; most marks fade without a device, and lasers, which cleared only 18% fully and worsened 2.6% in the systematic review, are for the marks that remain after that.</p>
    `,
  },
  {
    id: 'faq-vitamin-c',
    category: 'faq',
    title: 'Does vitamin C fade dark spots?',
    tldr: 'A little — 62.5% good-to-excellent melasma improvement against 93% for hydroquinone in the one head-to-head. Its best job is under sunscreen, slowing the re-darkening of treated skin.',
    bodyHtml: `
      <p>Ascorbic acid interrupts pigment synthesis and reduces the oxidation that darkens it, and in its one direct comparison it did about two-thirds of what hydroquinone did with fewer side effects. As a sole treatment for a visible spot it disappoints; as the morning antioxidant layer under an iron-oxide sunscreen it adds UV protection and helps keep lightened skin light. Buy 10–20% in opaque, airless packaging and discard it when it browns; for a real spot, pair it with azelaic acid, a retinoid or one of the prescription rows.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS (page order)
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: "What's actually happening",
    intro: 'Three drivers make almost every dark spot — and each one is a different disease with a different plan.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which spots do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home and at the pharmacy',
    intro: 'The sunscreen that is the treatment, the brighteners with real trials, and the remedies that make new spots.',
    sections: home,
  },
  {
    id: 'rx',
    title: 'Prescription treatments',
    intro: 'The reference drug, the cream built around it, and the tablet that reaches where creams cannot — graded on the Cochrane review and the randomised trials.',
    sections: rx,
  },
  {
    id: 'clinic',
    title: 'Lasers, light, peels and needles',
    intro: 'Where sun spots are removed in a session, and where melasma is lightened for a while and sometimes scarred white.',
    sections: clinic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'What the trials and the regulators actually flag, treatment by treatment — starting with the spot that is not a spot.',
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
  lentigo: 'Sun spots',
  melasma: 'Melasma',
  pih: 'Post-inflammatory',
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
