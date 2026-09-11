/**
 * Facial redness, rosacea and broken capillaries guide — single source of
 * truth (problem template).
 *
 * Consumed by /facial-redness. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: a red face is four different things that share one
 * disease — flushing that turns into fixed redness, vessels that have opened
 * for good, bumps and pustules that are not acne, and (rarely) skin that
 * thickens on the nose — plus the eyes, which are involved in a third. Each
 * has its own treatment, and rosacea is one of the best-trialled conditions
 * on this site: 152 randomised trials in 20,944 people, with high-certainty
 * evidence for the creams that treat bumps (ivermectin, azelaic acid), the
 * gel that blanks redness for a day (brimonidine) and the low-dose
 * antibiotic (doxycycline 40 mg). The vessels themselves answer only to a
 * vascular laser or intense pulsed light, whose evidence is moderate; the
 * flushing that survives everything has a shelf of off-label pills with
 * one trial each; and the two commonest harms are the steroid cream that
 * caused it and the redness gel that rebounds in one user in six.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'flush' | 'vessels' | 'bumps' | 'barrier' | 'general';

export type SectionCategory = 'concept' | 'context' | 'home' | 'rx' | 'clinic' | 'flush' | 'safety' | 'faq';

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
  'A red face is four different things sharing one disease: flushing that hardens into fixed redness, capillaries that have opened for good, bumps and pustules that are not acne, and — rarely — skin that thickens on the nose. Rosacea affects 5.46% of people in a meta-analysis of 32 studies covering 26.5 million, women more than men (5.41% against 3.90%), mostly between 45 and 60, and a third report gritty, dry or light-sensitive eyes.',
  'The bumps have the best evidence on this site: high-certainty trials for ivermectin 1% cream (clear or almost clear in 38–40% against 12–19% on vehicle in 1,371 people), azelaic acid 15% (success in 61–62% against 40–48% in 664) and doxycycline 40 mg (lesions halved in 537), with low-dose isotretinoin for the cases that fail them (a 90% clearance in 57% against 10% on placebo).',
  'The redness has a switch, not a cure: brimonidine gel blanks moderate-to-severe redness for the day in a quarter to a third of users against a tenth on vehicle, within 30 minutes, and 10–20% of users get a rebound worse than they started; oxymetazoline cream does less (one in six against one in fifteen) with rebound under 1%, and is not sold in Europe. Neither touches a capillary.',
  'Broken capillaries answer only to light: the pulsed-dye laser and intense pulsed light reduced erythema and telangiectasia equally in a 29-patient split-face trial, cut cheek redness 39% for at least six months in 34 patients, and hold low-to-moderate-certainty evidence in the Cochrane review — three to five sessions, repeated as new vessels form, and never on a tan.',
  'The two commonest harms are self-inflicted: the steroid cream that calmed the face for weeks and then made it worse (steroid rosacea, treated by stopping it and months of a tetracycline), and the tinted "redness" gel that rebounds. And the flushing that comes with palpitations, diarrhoea, wheeze or sweats is a hormone-secreting tumour or mastocytosis until blood tests say otherwise.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-flush',
    kind: 'Vessels & nerves',
    title: 'Vessels that open too easily and stop closing',
    blurb: 'Heat, sun, wine, stress and embarrassment fire nerves that dilate the facial vessels; in rosacea they fire on a hair trigger and the vessels, after years of it, stay open — first as a flush that lasts, then as fixed redness, then as capillaries you can see.',
  },
  {
    id: 'type-bumps',
    kind: 'Inflammation',
    title: 'An innate immune system on a hair trigger',
    blurb: 'Rosacea skin over-produces an antimicrobial peptide (cathelicidin) that inflames and dilates, carries nine times the odds of Demodex mites, and answers with papules and pustules that look like acne and are not. The best-trialled creams on this page target exactly this.',
  },
  {
    id: 'home-barrier',
    kind: 'Barrier & triggers',
    title: 'A thinned barrier and the triggers that fire it',
    blurb: 'Rosacea skin loses water, stings on lactic acid and shows barrier damage down to the gene level; ultraviolet light triggers flares in 81% of sufferers, heat in 75%, and the steroid cream that calms it for a fortnight makes it worse for a year.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'redness-biology',
    category: 'concept',
    title: 'Vessels, nerves, an immune hair-trigger and a thin barrier: what makes a face red',
    tldr: 'Rosacea is diagnosed by persistent redness across the centre of the face (or thickened skin), with flushing, visible vessels, bumps and eye symptoms as its major features. Under it: nerves that dilate vessels too readily, an antimicrobial peptide (cathelicidin) that inflames and grows vessels, Demodex mites at nine times the odds, and a barrier damaged at the gene level. Each driver has a treatment; none has a cure.',
    bodyHtml: `
      <p>The global consensus panels replaced the old "subtypes" with features: persistent redness across the centre of the face, or thickened (phymatous) skin, is diagnostic on its own; flushing, visible capillaries, papules and pustules and eye involvement are major features that can arrive in any combination (<a href="https://academic.oup.com/bjd/article/176/2/431/6601814" rel="noopener nofollow" target="_blank">ROSCO 2017 consensus</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/31392722/" rel="noopener nofollow" target="_blank">ROSCO 2019 update</a>). Underneath, three systems misfire. The vessels dilate on nerve signals that fire too easily — heat, ultraviolet light, alcohol, emotion — and after years stay dilated. The innate immune system over-produces cathelicidin, an antimicrobial peptide processed by a skin protease into a fragment that, injected into mouse skin, reproduces the redness and vessel growth of the disease (<a href="https://pubmed.ncbi.nlm.nih.gov/17676051/" rel="noopener nofollow" target="_blank">cathelicidin study</a>), and ultraviolet damage feeds the same pathway (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8596706/" rel="noopener nofollow" target="_blank">UV and rosacea review</a>); Demodex mites, which live in everyone's follicles, are present at nine times the odds and far higher density in rosacea skin across 23 case-control studies of 1,513 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/28711190/" rel="noopener nofollow" target="_blank">Demodex meta-analysis</a>). And the barrier is damaged: 463 patients with the bumpy form lost more water and burned, itched and dried more than 412 with acne (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5216279/" rel="noopener nofollow" target="_blank">barrier comparison</a>), and RNA sequencing found the barrier genes disturbed in a pattern resembling eczema (<a href="https://pubmed.ncbi.nlm.nih.gov/32199994/" rel="noopener nofollow" target="_blank">barrier gene study</a>). The rows below sort by which driver they treat.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'How common — and how much it costs people',
    tldr: '5.46% of people in a meta-analysis of 32 studies (26.5 million individuals), women 5.41% against men 3.90%, most between 45 and 60; 5.1% of 50,552 people across 20 countries in 2024, 3.1% in Europe by clinical examination; 15.1% of Finnish 46-year-olds examined by a dermatologist, five in six with the flushing-and-vessels form. Quality of life scores were nearly three times worse than controls and 57% of patients had moderate or severe anxiety.',
    bodyHtml: `
      <p>The pooled prevalence across 32 studies and 41 populations totalling 26.5 million people was 5.46%, higher in women (5.41%) than men (3.90%) and concentrated between 45 and 60, with self-report inflating the figure over examination (<a href="https://pubmed.ncbi.nlm.nih.gov/29478264/" rel="noopener nofollow" target="_blank">prevalence meta-analysis</a>) — around 415 million people (<a href="https://www.rosacea.org/press/2018/july/new-study-finds-415-million-people-may-suffer-from-rosacea-worldwide" rel="noopener nofollow" target="_blank">National Rosacea Society</a>). A 2024 study of 50,552 people in 20 countries found 5.1% overall, 3.1% in Europe, and — against the stereotype — a peak at 25–39 (<a href="https://www.rosacea.org/blog/2024/may/new-study-estimates-rosaceas-worldwide-prevalence" rel="noopener nofollow" target="_blank">2024 worldwide study</a>). When a dermatologist examined 1,932 Finns aged 46, 15.1% had rosacea, 83% of them the flushing-and-vessels form and 15% the bumpy form, and a third reported dry, watering, gritty or light-sensitive eyes (<a href="https://pubmed.ncbi.nlm.nih.gov/35249014/" rel="noopener nofollow" target="_blank">Finnish cohort study</a>). The cost is not cosmetic: 198 patients matched to 198 controls scored 11.3 against 4.3 on the Dermatology Life Quality Index, 57% had moderate or severe anxiety and 31% moderate or severe depression, worse with severity and in women (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11668539/" rel="noopener nofollow" target="_blank">quality-of-life study</a>).</p>
    `,
  },
  {
    id: 'why-hard',
    category: 'concept',
    title: 'Why a red face is treated badly',
    tldr: 'Four features need four treatments and most people are given one; the creams with the best trials treat the bumps, while what most people want gone is the redness, which only a switch (that can rebound) or a laser (that is not covered and needs repeating) addresses; the cream that calms it fastest is a steroid that causes it; and the flushing that survives everything has a shelf of off-label pills with one trial each.',
    bodyHtml: `
      <p>Rosacea is chronic and relapsing, and the mismatch between what is trialled and what is wanted explains most of the disappointment. The 2019 systematic review of 152 randomised trials in 20,944 people found high-certainty evidence for the creams that reduce papules and pustules and for the gel that blanks redness for the day, but only low-to-moderate certainty for the lasers and light that treat the vessels themselves, and no randomised trial at all for the thickened nose (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6850438/" rel="noopener nofollow" target="_blank">Cochrane-group review</a>). The redness switch has a catch — a rebound worse than baseline in 10–20% of users of brimonidine (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5083782/" rel="noopener nofollow" target="_blank">paradoxical erythema review</a>) — and the vessels' only real treatment, vascular laser or intense pulsed light, is rarely reimbursed, needs three to five sessions and is repeated as new vessels form. The face's commonest cause of a fast improvement, a potent steroid cream, is also a cause of the disease (<a href="https://dermnetnz.org/topics/steroid-rosacea" rel="noopener nofollow" target="_blank">DermNet on steroid rosacea</a>). And a third of patients have eye symptoms that dermatologists forget to ask about (<a href="https://pubmed.ncbi.nlm.nih.gov/35249014/" rel="noopener nofollow" target="_blank">Finnish cohort study</a>). The order on this page: sort which of the four features you have, treat the bumps with the creams that have the trials, blank the redness on the days it matters, laser the vessels once the disease is quiet, and keep the steroid tube and the tinted miracle gel away from your face.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-flush',
    category: 'context',
    title: 'Flushing that lasts, and redness that stays (erythematotelangiectatic rosacea)',
    tldr: 'A flush that outlasts the trigger by ten minutes or more, burns or stings, and over years leaves the cheeks, nose and chin red at rest, with or without visible capillaries. The commonest form — five in six cases in the Finnish cohort. Triggers and barrier first, a redness switch for the days it matters, light for the fixed component, and off-label pills for the flushing that survives.',
    focus: 'flush',
    bodyHtml: `
      <p>Everyone flushes; rosacea flushes on a hair trigger and for longer, and after enough years the vessels do not close. The signs: redness across the cheeks, nose, chin and central forehead that sparing the skin around the eyes, a burning or stinging that soaps and creams make worse, a flush from a hot room or a glass of wine that takes a quarter of an hour to fade rather than a minute, and, eventually, capillaries you can see. It was the form in 83% of the Finns found to have rosacea at 46 (<a href="https://pubmed.ncbi.nlm.nih.gov/35249014/" rel="noopener nofollow" target="_blank">Finnish cohort study</a>), and its two parts need two treatments: the flushing responds to trigger control and the barrier, to the alpha-agonist gels for the day and to the off-label pills for refractory cases, while the fixed redness and the vessels respond to the pulsed-dye laser and intense pulsed light, which the Cochrane review grades at low-to-moderate certainty (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6850438/" rel="noopener nofollow" target="_blank">Cochrane-group review</a>). Persistent centrofacial redness is diagnostic on its own (<a href="https://pubmed.ncbi.nlm.nih.gov/31392722/" rel="noopener nofollow" target="_blank">ROSCO 2019 update</a>); the flushing with palpitations, diarrhoea, wheeze or sweats is the safety section.</p>
    `,
  },
  {
    id: 'type-vessels',
    category: 'context',
    title: 'Broken capillaries (telangiectasia): rosacea, sun, steroids and genes',
    tldr: 'Fine red or purple threads on the nose and cheeks that blanch under a pressed glass and return: dilated vessels that no cream closes. Rosacea is the commonest cause; sun damage, years of a steroid cream, pregnancy, and family are the others. The only treatments that remove them are the vascular lasers and intense pulsed light, three to five sessions, repeated as new ones appear.',
    focus: 'vessels',
    bodyHtml: `
      <p>Press a clear glass against the cheek: threads that vanish under pressure and refill are telangiectasia — capillaries dilated permanently, usually on the sides of the nose and the cheekbones. In rosacea they arrive after years of flushing; on the sun-exposed face they arrive with the mottled redness the <a href="/sun-damage">sun-damage guide</a> describes; on a face that has used a potent steroid cream for months they arrive with the burning and bumps of steroid rosacea (<a href="https://dermnetnz.org/topics/steroid-rosacea" rel="noopener nofollow" target="_blank">DermNet on steroid rosacea</a>); and some families simply grow them. Nothing applied to the skin closes a dilated vessel, and the redness switches below constrict the surrounding skin around it for a day. What removes them is light absorbed by the blood inside: the 595 nm pulsed-dye laser, intense pulsed light, the 532 nm KTP laser for discrete threads and the 1,064 nm Nd:YAG for deeper ones, whose evidence is graded in the clinic group and in the <a href="/laser-ipl">laser and IPL guide</a>. The treated vessel is gone; the disease that made it goes on making new ones, which is why the sunscreen and the triggers come first and the sessions are repeated.</p>
    `,
  },
  {
    id: 'type-bumps',
    category: 'context',
    title: 'Bumps and pustules that are not acne (papulopustular rosacea)',
    tldr: 'Red bumps and pus-heads on a red, burning centre of the face, with no blackheads or whiteheads, in someone past their twenties: the bumpy form, 15% of cases. Rosacea skin is drier, more inflamed and more barrier-damaged than acne skin (463 against 412 patients), and the treatments differ — ivermectin, azelaic acid, metronidazole and low-dose doxycycline have the strongest evidence on this page.',
    focus: 'bumps',
    bodyHtml: `
      <p>The bumps are the feature most often mistaken for acne and most often mistreated with acne's routine. The differences: no comedones — no blackheads or whiteheads — a background of persistent redness, burning and stinging rather than oiliness, onset after thirty rather than at fifteen, and a face that reacts to the acids and retinoids acne tolerates. In 463 patients with papulopustular rosacea compared with 412 with acne, redness, burning, dryness and itch were all more frequent, and the barrier was measurably damaged in rosacea and intact in acne (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5216279/" rel="noopener nofollow" target="_blank">barrier comparison</a>). This is the form with the best evidence: high-certainty trials for ivermectin 1% and azelaic acid 15%, moderate-to-high for doxycycline 40 mg and low-dose isotretinoin, moderate for metronidazole (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6850438/" rel="noopener nofollow" target="_blank">Cochrane-group review</a>) — and a newer encapsulated benzoyl peroxide, which the acne shelf shares, has two trials of its own. Adult acne and rosacea can coexist; a dermatologist sorts them in one look.</p>
    `,
  },
  {
    id: 'type-phyma',
    category: 'context',
    title: 'Skin that thickens on the nose (rhinophyma)',
    tldr: 'A nose that grows bulbous, pitted and reddened over years, overwhelmingly in men aged 50–70 with long-standing rosacea — not from drink. It can block breathing and can hide a skin cancer. No randomised trial exists; the carbon-dioxide laser and the surgical blade both reshape it with high satisfaction in the series, and low-dose isotretinoin is used early.',
    focus: 'general',
    bodyHtml: `
      <p>Phymatous change — sebaceous glands and fibrous tissue enlarging until the nose, and rarely the chin, forehead or ears, thickens and pits — is rosacea's rarest feature (0.1% of the Finnish cohort, three people) and the one with the most stubborn myth, because it has nothing to do with alcohol. It affects mostly men between 50 and 70, can obstruct the airway, and can be mimicked by a basal cell carcinoma, which is why a changing lump on a phymatous nose is biopsied rather than assumed (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11697134/" rel="noopener nofollow" target="_blank">CO₂ laser series</a>). Thickened skin is diagnostic on its own (<a href="https://academic.oup.com/bjd/article/176/2/431/6601814" rel="noopener nofollow" target="_blank">ROSCO 2017 consensus</a>), no randomised trial has tested a treatment (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6850438/" rel="noopener nofollow" target="_blank">Cochrane-group review</a>), and the series — ablative laser or the surgical blade — are in the clinic group. Early, low-dose isotretinoin shrinks the glands and is graded in the prescription group.</p>
    `,
  },
  {
    id: 'type-ocular',
    category: 'context',
    title: 'Gritty, dry, watering or light-sensitive eyes (ocular rosacea)',
    tldr: 'Dryness in 32%, watering in 29%, a foreign-body feeling in 22% and light sensitivity in 21% of people with rosacea in the Finnish cohort — inflamed eyelid margins and blocked oil glands that can scar the cornea if ignored. Lid hygiene, omega-3 (moderate-certainty evidence), doxycycline and ciclosporin drops; an ophthalmologist for pain or blurred vision.',
    focus: 'general',
    bodyHtml: `
      <p>The eyes are involved in a third or more of people with rosacea and forgotten in most consultations. In the Finnish cohort, dryness (32.3%), tearing (29.4%), a foreign-body sensation (21.8%) and photophobia (20.5%) were the common complaints, foreign-body sensation significantly more than in people without rosacea, and the authors ask that every patient be asked about their eyes and have their lids examined even when the skin is mild (<a href="https://pubmed.ncbi.nlm.nih.gov/35249014/" rel="noopener nofollow" target="_blank">Finnish cohort study</a>). The signs are red, crusted lid margins, recurrent styes, blocked meibomian glands and a gritty, burning eye; the danger is inflammation of the cornea, which scars. The 2019 review found moderate-certainty evidence that oral omega-3 fatty acids help ocular rosacea and low-certainty evidence for ciclosporin eye drops and doxycycline (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6850438/" rel="noopener nofollow" target="_blank">Cochrane-group review</a>); warm compresses and lid cleaning are the daily routine; and pain, blurred vision or light sensitivity that limits daylight are an ophthalmologist's appointment, not a pharmacy visit.</p>
    `,
  },
  {
    id: 'type-steroid',
    category: 'context',
    title: 'The redness a cream caused: steroid rosacea and perioral dermatitis',
    tldr: 'A face that improved for a fortnight on a potent steroid cream — prescribed for something else, bought abroad, or hidden in a "brightening" product — and then developed redness, burning, small bumps and capillaries, worst around the mouth or eyes, that flare whenever the cream is stopped. Mostly adult women. The cure is stopping, and it gets worse before it gets better.',
    focus: 'barrier',
    bodyHtml: `
      <p>Steroid rosacea develops after several weeks of a potent topical corticosteroid applied to the mid-forehead, eyelids, cheeks or chin: redness, small bumps and pustules, burning and itching, and dilated vessels, most often in adult women, with a rebound flare whenever the steroid is withdrawn — which is why people keep using it (<a href="https://dermnetnz.org/topics/steroid-rosacea" rel="noopener nofollow" target="_blank">DermNet on steroid rosacea</a>). A series of 110 cases documents the same picture from long and improper use (<a href="https://ijdvl.com/topical-corticosteroid-induced-rosacea-like-dermatitis-a-clinical-study-of-110-cases/" rel="noopener nofollow" target="_blank">110-case series</a>). Its cousin, perioral dermatitis, rings the mouth and nose with tiny papules and spares a rim of skin at the lip. The sources are usually innocent: a cream prescribed for eczema years ago and kept, a relative's tube, a "fairness" or "sensitive skin" product from a market abroad with a hidden steroid. The treatment is withdrawal — gradual, with a weaker steroid if the flare is severe — months of a tetracycline, a calcineurin cream for the worst weeks and a vascular laser for capillaries that remain, and the counsel that the first weeks are the worst. The safety section has the rules.</p>
    `,
  },
  {
    id: 'type-masquerade',
    category: 'context',
    title: 'Redness that is not rosacea: seborrhoeic dermatitis, lupus, menopause, medicines, and the flushing with company',
    tldr: 'Greasy scale in the eyebrows and nose folds is seborrhoeic dermatitis; a butterfly rash with joint pain, mouth ulcers or fatigue is lupus until tested; hot flushes with sweats in a woman in her forties are the menopause; niacin, calcium-channel blockers and dozens of other drugs flush; and flushing with palpitations, diarrhoea, wheeze or hives needs blood and urine tests for carcinoid, phaeochromocytoma and mastocytosis before anyone treats it as cosmetic.',
    focus: 'general',
    bodyHtml: `
      <p>The flushing review that dermatologists use lists the differential and the tests: most flushing is benign and obvious from the history — rosacea, the climacteric, alcohol, spicy food, emotion, medicines — but carcinoid syndrome, phaeochromocytoma, mastocytosis and anaphylaxis have to be excluded with laboratory studies when the flush comes with other symptoms or without an obvious trigger (<a href="https://pubmed.ncbi.nlm.nih.gov/16844500/" rel="noopener nofollow" target="_blank">flushing review</a>). The look-alikes on the skin: seborrhoeic dermatitis, with greasy yellow scale in the eyebrows, the folds beside the nose and the scalp, which shares the face with rosacea in many people and responds to antifungal creams; lupus, whose butterfly rash crosses the nose bridge, spares the nasolabial folds and comes with photosensitivity, joint pain, mouth ulcers or fatigue; contact allergy to a fragrance or a preservative, which itches more than it burns; the flat red-brown mottling of sun damage; and drug flushing, which the review catalogues from niacin to calcium-channel blockers. Menopausal flushing and rosacea overlap in the same decade and the same women, and the <a href="/anti-aging-50s">50s guide</a> covers the hormonal side. When the redness has scale, ulcers, a rash elsewhere, joint pain, or systemic company, the answer is a doctor's examination and tests, not a redness cream.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'The self-check: a photo in daylight, a pressed glass, a trigger diary, the tube count and four eye questions',
    tldr: 'A photograph by a north-facing window each week; a glass pressed on the cheek (threads that vanish are capillaries; bumps that stay are inflammation); blackheads present or absent; a fortnight\'s diary of flushes and their triggers; every tube on the shelf checked for a steroid; four eye questions; and any flush with palpitations, diarrhoea, wheeze or sweats sent to a doctor. Then the row.',
    focus: 'general',
    bodyHtml: `
      <p>Five minutes sorts the features. First the photograph, same window, same time, no make-up, weekly — the only way to judge a chronic disease and every treatment on this page against it. Second the glass: press a clear tumbler against the reddest cheek; threads that disappear and refill are capillaries and belong to the clinic group, bumps and pustules that stay are inflammation and belong to the creams, and a diffuse pink that blanches is the fixed redness the switches and the light address. Third the comedones: blackheads and whiteheads mean acne is at least part of the picture. Fourth a fortnight's diary of every flush and what preceded it — heat, sun, wine, exercise, a hot drink, a meeting — because the triggers are individual and the National Rosacea Society's survey ranks 20 of them (<a href="https://www.rosacea.org/rosacea-review/2002/summer/new-survey-pinpoints-leading-factors-that-trigger-symptoms" rel="noopener nofollow" target="_blank">trigger survey</a>). Fifth the shelf: every cream on the face for the past year, read for a corticosteroid (hydrocortisone, betamethasone, clobetasol, mometasone, or an unlisted "anti-inflammatory" in a product bought abroad). Sixth the eyes: dry, gritty, watering, light-sensitive, styes. Seventh the company: flushing with palpitations, diarrhoea, wheeze, hives or drenching sweats is the safety section today. Persistent redness across the centre of the face is diagnostic on its own (<a href="https://pubmed.ncbi.nlm.nih.gov/31392722/" rel="noopener nofollow" target="_blank">ROSCO 2019 update</a>), and a dermatologist confirms it in one visit, which is the visit that unlocks every prescription row below.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-sun-triggers',
    category: 'home',
    title: 'Sunscreen every day, and the trigger diary',
    tldr: 'Sun exposure triggers flares in 81% of 1,066 surveyed sufferers, emotional stress in 79%, hot weather in 75%, wind 57%, heavy exercise 56%, alcohol 52%, hot baths 51%, spicy food 45%, heated drinks 36%; ultraviolet light feeds the cathelicidin pathway that drives the disease. No trial has randomised sunscreen against none, but every guideline puts it first — a mineral SPF 50 the skin tolerates, and the two or three triggers that are yours.',
    evidence: 'moderate',
    focus: 'barrier',
    note: 'Best for: everyone on this page, every day — the cheapest row and the one every other row assumes',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€15–40 / month',
    bodyHtml: `
      <p>The National Rosacea Society surveyed 1,066 patients on what set their faces off: sun exposure in 81%, emotional stress 79%, hot weather 75%, wind 57%, heavy exercise 56%, alcohol 52%, hot baths 51%, cold weather 46%, spicy foods 45%, humidity 44%, indoor heat 41%, skin-care products 41%, heated beverages 36% (<a href="https://www.rosacea.org/rosacea-review/2002/summer/new-survey-pinpoints-leading-factors-that-trigger-symptoms" rel="noopener nofollow" target="_blank">trigger survey</a>). Sun leads for a reason: ultraviolet damage releases signals that the over-produced cathelicidin peptide turns into vessel dilation, leukocyte recruitment and new vessel growth, the review of UV and the exposome in rosacea making photoprotection the foundation of treatment (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8596706/" rel="noopener nofollow" target="_blank">UV and rosacea review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/17676051/" rel="noopener nofollow" target="_blank">cathelicidin study</a>). Moderate, and honestly so: no randomised trial has compared sunscreen with none in rosacea — the one trial that built SPF 15 into a metronidazole cream gave it to both arms (<a href="https://pubmed.ncbi.nlm.nih.gov/12001006/" rel="noopener nofollow" target="_blank">metronidazole-sunscreen trial</a>) — and the grade rests on the mechanism, the survey and a consensus without dissent. Practically: a mineral (zinc or titanium) sunscreen at SPF 30–50 that does not sting, a hat, shade at midday, and a fortnight's diary that finds the two or three triggers that are actually yours rather than a list of twenty to fear; the <a href="/sun-damage">sun-damage guide</a> grades sunscreen for the ageing it also prevents.</p>
    `,
  },
  {
    id: 'home-barrier',
    category: 'home',
    title: 'Barrier repair: a gentle cleanser, a plain moisturiser and niacinamide',
    tldr: 'Rosacea skin loses water and stings; in a randomised, investigator-blind study of 50 patients, a niacinamide moisturiser twice daily for four weeks improved barrier function and hydration on instruments and improved the rosacea on the dermatologist\'s and the patients\' scores. Lukewarm water, a non-foaming cleanser, no scrubs, no alcohol, no fragrance, and every prescription cream tolerated better on top of it.',
    evidence: 'moderate',
    focus: 'barrier',
    note: 'Best for: the burning, stinging, product-intolerant face — before any active, and under every one',
    sessions: 'Twice daily',
    downtime: 'None',
    cost: '€15–40 / month',
    bodyHtml: `
      <p>The barrier studies explain the stinging: papulopustular rosacea skin lost more water and was drier and more reactive than acne skin in 463 against 412 patients (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5216279/" rel="noopener nofollow" target="_blank">barrier comparison</a>), and RNA sequencing found the barrier's structural genes, lipid production and tight junctions disturbed in a pattern the authors found unexpectedly similar to eczema, arguing for barrier-repair as treatment (<a href="https://pubmed.ncbi.nlm.nih.gov/32199994/" rel="noopener nofollow" target="_blank">barrier gene study</a>). The trial: 50 people with rosacea applied a niacinamide-containing moisturiser twice daily for four weeks to the face and one forearm, with the other forearm as control; barrier function and hydration improved on instruments and a chemical probe, the same trends appeared on the face, and both the investigator's evaluation and the patients' self-assessment recorded improvement in the rosacea (<a href="https://pubmed.ncbi.nlm.nih.gov/16209160/" rel="noopener nofollow" target="_blank">niacinamide moisturiser study</a>). Moderate: one small randomised study and a consistent mechanism. The routine that follows from it: lukewarm water, a non-foaming cleanser once or twice a day, a plain moisturiser with ceramides or niacinamide (the <a href="/ceramides">ceramides guide</a> and the <a href="/dry-skin">dry-skin guide</a> grade them), no scrubs, toners, alcohol, menthol, witch hazel or fragrance, and new products patch-tested on the jaw for a week. Every prescription on this page is tolerated better on a repaired barrier, and the redness gels are specifically riskier on a broken one.</p>
    `,
  },
  {
    id: 'home-diet',
    category: 'home',
    title: 'Alcohol, coffee, spice and heat: what the cohorts say',
    tldr: 'In 82,737 nurses followed 14 years, alcohol raised the risk of developing rosacea (hazard 1.12 at one to four grams a day, 1.53 at 30 or more, white wine and spirits most) and caffeinated coffee lowered it (0.77 for four or more cups a day against under one a month; decaf, tea and chocolate did nothing). Heat, not chemistry, is the trigger in hot drinks; spicy food fires 45% of sufferers. Observational, and about risk rather than treatment.',
    evidence: 'emerging',
    focus: 'flush',
    sessions: 'Ongoing',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Two analyses of the same 82,737 women in the Nurses' Health Study II, with 4,945 cases of rosacea over 14 years, are the best data on diet. Alcohol was associated with developing the disease: compared with never-drinkers, a hazard ratio of 1.12 at one to four grams a day and 1.53 at 30 grams or more, with white wine and liquor most associated and red wine not significantly (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5438297/" rel="noopener nofollow" target="_blank">alcohol cohort study</a>). Caffeine went the other way: the highest fifth of caffeine intake had a hazard ratio of 0.76 against the lowest, four or more servings of caffeinated coffee a day 0.77 against one or fewer a month, and decaffeinated coffee, tea, soda and chocolate showed no association (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/2707780" rel="noopener nofollow" target="_blank">caffeine cohort study</a>) — which suggests the "coffee trigger" is the heat of the cup, consistent with heated beverages firing 36% and spicy foods 45% in the trigger survey (<a href="https://www.rosacea.org/rosacea-review/2002/summer/new-survey-pinpoints-leading-factors-that-trigger-symptoms" rel="noopener nofollow" target="_blank">trigger survey</a>). Emerging: cohorts and surveys, no trial, and evidence about who develops the disease rather than what treats it. The practical reading: let coffee cool, drink alcohol as the diary allows, and treat spice, saunas and hot baths as the personal experiments they are; the <a href="/sauna">sauna guide</a> has rosacea's entry.</p>
    `,
  },
  {
    id: 'home-camouflage',
    category: 'home',
    title: 'Green-tinted primers and corrective make-up',
    tldr: 'Green cancels red on the colour wheel, and in an observational study of 1,840 people with visible facial conditions (15% rosacea), four to six weeks of a corrective cosmetic significantly improved every quality-of-life score, with 96% compliance and good tolerance. It treats the mirror, not the disease, and it treats the mirror well.',
    evidence: 'emerging',
    focus: 'flush',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€15–50',
    bodyHtml: `
      <p>Corrective cosmetics have an outcome study: 1,840 subjects, 95% women, with visible facial conditions — acne in 49%, melasma 17%, rosacea 15% — used a corrective cosmetic daily for four to six weeks, and Skindex-16 scores for symptoms, emotions and functioning all improved significantly, with 96% compliance, better skin comfort and good tolerance (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7125304/" rel="noopener nofollow" target="_blank">corrective cosmetic study</a>). The National Rosacea Society's own surveys found green- and yellow-tinted bases hide the redness best and pink or orange tones worst (<a href="https://www.rosacea.org/rosacea-review/2003/fall/survey-says-green-and-yellow-can-hide-the-facial-redness-of-rosacea" rel="noopener nofollow" target="_blank">make-up survey</a>). Emerging: uncontrolled, and about appearance and mood rather than vessels. Choose a sheer green primer under a mineral foundation, fragrance-free, removed with the same gentle cleanser, and patch-tested — the barrier row applies to make-up too.</p>
    `,
  },
  {
    id: 'home-tea-tree',
    category: 'home',
    title: 'Tea tree oil and the Demodex home remedies',
    tldr: 'Demodex mites are nine times more likely and far denser in rosacea skin; in a double-blind split-face trial, a permethrin 2.5% gel with tea tree oil, twice daily for 12 weeks on one side of 35 completers\' faces, cut mite density and improved papules, pustules and redness on that side. A trial of a prescription combination, not of the oil from the health shop — which stings rosacea skin at any useful strength.',
    evidence: 'emerging',
    focus: 'bumps',
    sessions: 'Twice daily',
    downtime: 'None',
    cost: '€10–30',
    bodyHtml: `
      <p>The mite is real: 23 case-control studies of 1,513 patients found Demodex nine times more likely and much denser in rosacea skin, in both the flushing and the bumpy forms (<a href="https://pubmed.ncbi.nlm.nih.gov/28711190/" rel="noopener nofollow" target="_blank">Demodex meta-analysis</a>), and killing it is how ivermectin cream is thought to work. Tea tree oil kills mites in the laboratory, and one randomised, double-blind split-face trial tested it in a gel with permethrin 2.5%: 47 patients with papulopustular rosacea enrolled and 35 finished 12 weeks, mite density fell significantly on the treated side from week five, and papules, pustules and persistent redness improved on that side against the placebo side (<a href="https://pubmed.ncbi.nlm.nih.gov/31613050/" rel="noopener nofollow" target="_blank">permethrin–tea tree trial</a>). Emerging: one trial of a combination that a pharmacy has to make, not of neat oil. Undiluted or high-strength tea tree oil is a contact allergen and an irritant, and on a barrier-damaged face it burns; the honest reading is that the mite hypothesis is why the ivermectin row exists, and the shelf version is a poor substitute for it.</p>
    `,
  },
];

const rx: Section[] = [
  {
    id: 'rx-brimonidine',
    category: 'rx',
    title: 'Brimonidine 0.33% gel: the redness switched off for the day (Mirvaso)',
    tldr: 'Two randomised trials in 553 people with moderate-to-severe redness: a two-grade improvement on both the doctor\'s and the patient\'s scale in 31/30/26/23% at 3, 6, 9 and 12 hours against 11/10/10/9% on vehicle in the first study and 25/25/18/22% against 9/9/11/10% in the second, within 30 minutes of the first application; high-certainty evidence in the Cochrane review. It constricts vessels for the day, treats nothing underneath, and rebounds worse than baseline in 10–20% of users.',
    evidence: 'strong',
    focus: 'flush',
    note: 'Best for: the days that matter — a wedding, a presentation — on an intact barrier, patch-tested first, never as a daily habit without a plan',
    sessions: 'Once daily as needed; effect 8–12 hours',
    downtime: 'None; rebound redness in 1 in 5–10',
    cost: '€40–80 / tube (about a month)',
    bodyHtml: `
      <p>Brimonidine is an alpha-2 agonist — an eye-drop drug for glaucoma — that constricts the small vessels of the face for most of a day. In two identical randomised, double-blind trials, 553 people with moderate-to-severe persistent redness applied the gel or vehicle once daily for four weeks; the primary endpoint, a two-grade improvement on both the Clinician's Erythema Assessment and the patient's self-assessment at hours 3, 6, 9 and 12 on day 29, was reached in 31%, 30%, 26% and 23% against 11%, 10%, 10% and 9% in the first study and 25%, 25%, 18% and 22% against 9%, 9%, 11% and 10% in the second, with separation from vehicle as early as 30 minutes after the first application (<a href="https://pubmed.ncbi.nlm.nih.gov/23839181/" rel="noopener nofollow" target="_blank">phase 3 trials</a>; <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f6a4353f-ae69-4214-901f-e5d42a6fbde7" rel="noopener nofollow" target="_blank">prescribing information</a>). A one-year open-label study accumulated 345 subject-years of use with adverse events highest at the start and falling (<a href="https://pubmed.ncbi.nlm.nih.gov/24385120/" rel="noopener nofollow" target="_blank">one-year study</a>), and the Cochrane review rates the evidence high-certainty for temporarily reducing persistent erythema (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6850438/" rel="noopener nofollow" target="_blank">Cochrane-group review</a>). Strong, for exactly what it claims: a switch, not a treatment. The catch is the rebound — the label warns of redness returning worse than baseline and spreading to areas previously unaffected, the label's own adverse-event table lists erythema in 4% and flushing in 3% against 1% and 0%, and the expert review of "paradoxical erythema" puts reversible worsening at 10–20% of users, about 80% improving without it (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5083782/" rel="noopener nofollow" target="_blank">paradoxical erythema review</a>; <a href="https://jcadonline.com/dermatological-adverse-events-associated-with-topical-brimonidine-gel-0-33-in-subjects-with-erythema-of-rosacea-a-retrospective-review-of-clinical-studies/" rel="noopener nofollow" target="_blank">adverse-event review</a>). The rules: a pea-sized amount, a patch test on the jaw for three days, an intact barrier underneath, and the first full-face use on a day with nothing at stake.</p>
    `,
  },
  {
    id: 'rx-oxymetazoline',
    category: 'rx',
    title: 'Oxymetazoline 1% cream: the gentler switch (Rhofade)',
    tldr: 'Two randomised trials in 885 people: a two-grade composite improvement at 3, 6, 9 and 12 hours on day 29 in 12/16/18/15% against 6/6/8/6% and 14/13/16/12% against 7/5/9/6% — about one in six against one in fifteen; over 52 weeks in 440 people, 37–43% responded at three to six hours, treatment-related adverse events were 8.2%, and rebound after stopping was under 1%. Smaller effect, far less rebound, and not sold in Europe.',
    evidence: 'strong',
    focus: 'flush',
    note: 'Best for: the person who rebounded on brimonidine — if they can get it',
    sessions: 'Once daily; effect up to 12 hours',
    downtime: 'None',
    cost: 'Licensed in the US only; not marketed in the EU',
    bodyHtml: `
      <p>Oxymetazoline is the nasal-decongestant drug reformulated as a face cream; it works on alpha-1 receptors and constricts more gently. The two REVEAL trials randomised 440 and 445 people with moderate-to-severe persistent redness to cream or vehicle once daily for 29 days: the composite success — a two-grade improvement on both the clinician's and the patient's scale — at 3, 6, 9 and 12 hours on day 29 was 12%, 16%, 18% and 15% against 6%, 6%, 8% and 6% in the first trial and 14%, 13%, 16% and 12% against 7%, 5%, 9% and 6% in the second, statistically superior at every point, with discontinuation for adverse events at 1.8% (<a href="https://pubmed.ncbi.nlm.nih.gov/29320594/" rel="noopener nofollow" target="_blank">first REVEAL trial</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/29537447/" rel="noopener nofollow" target="_blank">second REVEAL trial</a>; <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/208552s000lbl.pdf" rel="noopener nofollow" target="_blank">prescribing information</a>). The 52-week open-label study of 440 patients found 36.7% and 43.4% achieving the composite improvement at three and six hours after a dose at week 52, treatment-related adverse events in 8.2%, discontinuation for them in 3.2%, no meaningful change in blanching, lesions or telangiectasia, and a rebound after stopping in under 1% (<a href="https://pubmed.ncbi.nlm.nih.gov/29409914/" rel="noopener nofollow" target="_blank">52-week study</a>). Strong evidence for a modest effect: the Cochrane review graded it moderate-certainty when only the abstracts were available (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6850438/" rel="noopener nofollow" target="_blank">Cochrane-group review</a>), and the absolute gain is a few people in twenty. It was approved in the United States in 2017 and is not authorised in the European Union, so for most readers of this site it is the drug their brimonidine rebound is compared against, not one they can buy.</p>
    `,
  },
  {
    id: 'rx-ivermectin',
    category: 'rx',
    title: 'Ivermectin 1% cream for the bumps (Soolantra)',
    tldr: 'Two randomised trials in 1,371 people with moderate-to-severe papulopustular rosacea: clear or almost clear at 12 weeks in 38.4% and 40.1% against 11.6% and 18.8% on vehicle; against metronidazole in 962 people, an 83.0% reduction in lesions against 73.7%. High-certainty evidence, once a day, and it kills the mite.',
    evidence: 'strong',
    focus: 'bumps',
    note: 'Best for: the papulopustular face — the first prescription cream, before any antibiotic',
    sessions: 'Once daily; judge at 12–16 weeks',
    downtime: 'None; mild burning or dryness in some',
    cost: '€30–50 / tube (1–2 months)',
    bodyHtml: `
      <p>Ivermectin is an anti-parasitic that also calms inflammation, and the mite hypothesis is why it was tried. In two identically designed randomised, double-blind trials, 1,371 adults with moderate-to-severe papulopustular rosacea applied the cream or vehicle once daily for 12 weeks: the proportion "clear" or "almost clear" on the Investigator's Global Assessment was 38.4% and 40.1% against 11.6% and 18.8%, with greater lesion reductions, better satisfaction and quality of life, and separation from vehicle from week four (<a href="https://pubmed.ncbi.nlm.nih.gov/24595578/" rel="noopener nofollow" target="_blank">pivotal trials</a>; <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/206255lbl.pdf" rel="noopener nofollow" target="_blank">prescribing information</a>). Head to head, 962 patients were randomised to ivermectin once daily or metronidazole 0.75% twice daily for 16 weeks; ivermectin reduced inflammatory lesions by 83.0% against 73.7% and was superior on the global assessment with high patient satisfaction (<a href="https://pubmed.ncbi.nlm.nih.gov/25228137/" rel="noopener nofollow" target="_blank">ivermectin versus metronidazole trial</a>). The Cochrane review rates the evidence high-certainty for papules and pustules (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6850438/" rel="noopener nofollow" target="_blank">Cochrane-group review</a>). Strong. It does little for the fixed redness or the vessels, can sting in the first weeks on a damaged barrier, and needs three months before a verdict — the mite takes time to die and the inflammation to follow.</p>
    `,
  },
  {
    id: 'rx-azelaic',
    category: 'rx',
    title: 'Azelaic acid 15% gel or foam (Finacea, Skinoren)',
    tldr: 'Two randomised trials in 664 people: therapeutic success in 61% and 62% against 40% and 48% on vehicle at 12 weeks, twice daily; a 961-patient foam trial confirmed it; against metronidazole in 251 people, lesions fell 72.7% against 55.8% and kept improving to week 15 where metronidazole plateaued at week 8. High-certainty evidence, and it stings for the first fortnight.',
    evidence: 'strong',
    focus: 'bumps',
    note: 'Best for: the bumps with background redness — and the all-rounder that pairs with everything else on the page',
    sessions: 'Once or twice daily; judge at 12 weeks',
    downtime: 'None; stinging and itching in the first weeks',
    cost: '€20–40 / tube',
    bodyHtml: `
      <p>Azelaic acid is a dicarboxylic acid from grain that suppresses the cathelicidin-protease pathway and the inflammation it drives. Two multicentre, double-blind, randomised trials enrolled 329 and 335 patients with moderate papulopustular rosacea and applied the 15% gel or vehicle twice daily for 12 weeks; therapeutic success — clear, minimal or mild on the investigator's global assessment — was reached by 61% and 62% against 40% and 48%, with greater lesion and erythema reductions (<a href="https://pubmed.ncbi.nlm.nih.gov/12789172/" rel="noopener nofollow" target="_blank">phase 3 gel trials</a>). A phase 3 trial of the foam at 48 US sites in 961 participants confirmed superiority on lesions, global assessment and erythema (<a href="https://pubmed.ncbi.nlm.nih.gov/27814413/" rel="noopener nofollow" target="_blank">foam trial</a>). Against the older standard, 251 patients randomised to azelaic acid 15% or metronidazole 0.75% gel twice daily for 15 weeks: lesions fell 72.7% against 55.8%, and azelaic acid kept improving through week 15 while metronidazole plateaued at week 8 (<a href="https://pubmed.ncbi.nlm.nih.gov/14623704/" rel="noopener nofollow" target="_blank">azelaic acid versus metronidazole trial</a>). High-certainty evidence in the Cochrane review (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6850438/" rel="noopener nofollow" target="_blank">Cochrane-group review</a>). Strong. It stings and itches for the first one to two weeks in a good share of users — the barrier row first, a moisturiser underneath, once daily before twice — and the <a href="/dark-spots">dark-spots guide</a> grades the same molecule for the pigment it also lightens.</p>
    `,
  },
  {
    id: 'rx-metronidazole',
    category: 'rx',
    title: 'Metronidazole 0.75–1% cream or gel',
    tldr: 'The oldest rosacea cream, moderate-certainty evidence in the Cochrane review: better than vehicle in a 120-patient randomised trial and many older ones, but beaten by ivermectin in 962 patients and by azelaic acid in 251. Cheap, gentle, well tolerated, and the one to reach for when the two better creams sting.',
    evidence: 'moderate',
    focus: 'bumps',
    sessions: 'Once or twice daily; judge at 12 weeks',
    downtime: 'None',
    cost: '€10–25 / tube',
    bodyHtml: `
      <p>Topical metronidazole was rosacea's standard cream for thirty years and remains the gentlest. A randomised, double-blind trial of 120 patients with moderate-to-severe rosacea found metronidazole 1% cream with SPF 15 significantly better than its sunscreen vehicle on lesions, erythema and telangiectasia scores at 12 weeks, well tolerated (<a href="https://pubmed.ncbi.nlm.nih.gov/12001006/" rel="noopener nofollow" target="_blank">metronidazole-sunscreen trial</a>), and the Cochrane group pooled the older trials to moderate-certainty evidence against placebo (<a href="https://pubmed.ncbi.nlm.nih.gov/26099423/" rel="noopener nofollow" target="_blank">Cochrane abridged review</a>). The comparisons put it behind: ivermectin once daily beat metronidazole 0.75% twice daily on lesion reduction in 962 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/25228137/" rel="noopener nofollow" target="_blank">ivermectin versus metronidazole trial</a>), and azelaic acid 15% beat it on lesions and kept improving after it plateaued in 251 (<a href="https://pubmed.ncbi.nlm.nih.gov/14623704/" rel="noopener nofollow" target="_blank">azelaic acid versus metronidazole trial</a>). Moderate. Its place is the face that cannot tolerate the other two, the maintenance phase after a course of doxycycline, and the budget.</p>
    `,
  },
  {
    id: 'rx-doxycycline',
    category: 'rx',
    title: 'Doxycycline 40 mg modified-release: the anti-inflammatory dose (Oracea, Efracea)',
    tldr: 'Two randomised phase 3 trials, 269 on doxycycline 40 mg and 268 on placebo for 16 weeks: lesions fell by 11.8 and 9.5 from a baseline of about 20 against 5.9 and 4.3 on placebo; moderate-to-high-certainty evidence. A dose below the antibiotic threshold that does not breed resistance, and minocycline 100 mg was non-inferior in an 80-patient trial with more global-assessment successes (60% against 18%).',
    evidence: 'strong',
    focus: 'bumps',
    note: 'Best for: the moderate-to-severe papulopustular flare, for 8–16 weeks, with a cream to hold the result afterwards',
    sessions: 'One capsule daily for 8–16 weeks',
    downtime: 'None; sun sensitivity and stomach upset',
    cost: '€30–60 / month',
    bodyHtml: `
      <p>Tetracyclines treat rosacea by damping inflammation, not by killing bacteria, and 40 mg of doxycycline in a modified-release capsule does that at blood levels below the antimicrobial threshold. In two parallel phase 3 trials, 269 patients received the capsule and 268 placebo once daily for 16 weeks; from a baseline of about 20 inflammatory lesions, the count fell by 11.8 and 9.5 on doxycycline against 5.9 and 4.3 on placebo, with no more adverse events than placebo (<a href="https://pubmed.ncbi.nlm.nih.gov/17367893/" rel="noopener nofollow" target="_blank">phase 3 trials</a>). The Cochrane review grades the evidence high-certainty on physician assessment in its 2015 update and moderate-to-high in 2019 (<a href="https://pubmed.ncbi.nlm.nih.gov/26099423/" rel="noopener nofollow" target="_blank">Cochrane abridged review</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6850438/" rel="noopener nofollow" target="_blank">Cochrane-group review</a>). The alternatives: in the DOMINO trial, 80 patients were randomised to doxycycline 40 mg or minocycline 100 mg for 16 weeks; lesion reductions were comparable (13 against 14 fewer), global-assessment success favoured minocycline (60% against 18%) and remission lasted longer, at the cost of minocycline's known rarer but more serious risks (<a href="https://pubmed.ncbi.nlm.nih.gov/27797396/" rel="noopener nofollow" target="_blank">DOMINO trial</a>); and a 205-patient phase 2 trial of an extended-release minocycline 40 mg found success in 66% against 33% on doxycycline 40 mg and 11.5% on placebo (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8794488/" rel="noopener nofollow" target="_blank">minocycline extended-release trial</a>). Strong. The course is weeks, not years; a cream — ivermectin or azelaic acid — holds the result; the sun sensitivity is real and the sunscreen row is not optional; and the 100 mg antibiotic dose is no better for rosacea and worse for the microbiome.</p>
    `,
  },
  {
    id: 'rx-newer-creams',
    category: 'rx',
    title: 'The newer creams: minocycline 1.5% foam and encapsulated benzoyl peroxide 5%',
    tldr: 'Encapsulated benzoyl peroxide: two randomised phase 3 trials in 733 people, clear or almost clear in 43.5% and 50.1% against 16.1% and 25.9% at 12 weeks, with 66–68% success after 40 more weeks. Minocycline foam: two phase 3 trials and a meta-analysis of five (2,453 people), a statistically significant but small edge over vehicle. Both are licensed in the United States only.',
    evidence: 'moderate',
    focus: 'bumps',
    sessions: 'Once daily; judge at 12 weeks',
    downtime: 'None; dryness and irritation possible',
    cost: 'Licensed in the US only',
    bodyHtml: `
      <p>Two newer topicals have trial programmes behind them. Benzoyl peroxide, the acne standard, is usually too irritating for rosacea; a formulation that traps it in silica microcapsules for slow release was tested in two 12-week randomised, double-blind trials of 733 adults with moderate-to-severe rosacea: clear or almost clear at week 12 in 43.5% and 50.1% against 16.1% and 25.9% on vehicle, lesion counts down 17.4 and 20.3 against 9.5 and 13.3, with tolerability similar to vehicle (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10452484/" rel="noopener nofollow" target="_blank">encapsulated benzoyl peroxide trials</a>); in the 40-week extension, success reached 66.5% in those switched from vehicle and 67.6% in those continuing, with 1.4% stopping for adverse events (<a href="https://pubmed.ncbi.nlm.nih.gov/37636251/" rel="noopener nofollow" target="_blank">extension study</a>). Minocycline 1.5% foam reduced lesions by 17.57 and 18.54 against 15.65 and 14.88 on vehicle in two phase 3 trials (<a href="https://pubmed.ncbi.nlm.nih.gov/32004648/" rel="noopener nofollow" target="_blank">minocycline foam trials</a>), and a meta-analysis of five randomised trials in 2,453 participants found a modest relative gain in global-assessment success, risk ratio 1.31 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11996761/" rel="noopener nofollow" target="_blank">topical minocycline meta-analysis</a>). Moderate: each rests on a single manufacturer's programme without independent replication, the benzoyl peroxide effect is large and the minocycline effect small, and neither is authorised in the European Union — so for most readers they are what a US dermatologist would add, not what a European one can prescribe.</p>
    `,
  },
  {
    id: 'rx-isotretinoin',
    category: 'rx',
    title: 'Low-dose isotretinoin, off-label, for the rosacea that fails everything',
    tldr: 'In 573 patients randomised across five arms, isotretinoin 0.3 mg/kg cut lesions 90% against 83% on doxycycline and was superior to placebo; in 156 patients with difficult-to-treat disease, 57.4% on 0.25 mg/kg reached a 90% clearance against 10.4% on placebo; a meta-analysis of 16 studies in 1,445 people found lesions still 70% and erythema 47% lower four months after stopping, a 35% relapse at five and a half months and serious adverse events in 0.4%. Teratogenic, monitored, and a dermatologist\'s decision.',
    evidence: 'strong',
    focus: 'bumps',
    note: 'Best for: the papulopustular or early phymatous rosacea that has failed the creams and a tetracycline — with contraception, blood tests and a specialist',
    sessions: 'Daily for 3–6 months, then stop or maintain at the lowest dose',
    downtime: 'None; dry lips, eyes and nose throughout',
    cost: '€20–60 / month plus blood tests',
    bodyHtml: `
      <p>The acne drug at a fraction of the acne dose shrinks the sebaceous glands and calms the inflammation that rosacea's creams cannot. In a five-armed, double-blind randomised study at 35 German centres, 573 patients with papulopustular or phymatous rosacea received isotretinoin at 0.1, 0.3 or 0.5 mg/kg, doxycycline or placebo for 12 weeks; 0.3 mg/kg was the most effective dose, superior to placebo and non-inferior to doxycycline with a 90% reduction in lesions against 83% (<a href="https://pubmed.ncbi.nlm.nih.gov/20337772/" rel="noopener nofollow" target="_blank">five-arm trial</a>). In a multicentre placebo-controlled trial of 156 patients with difficult-to-treat disease and at least eight lesions, 0.25 mg/kg for four months produced a 90% reduction in papules and pustules in 57.4% against 10.4% on placebo (<a href="https://pubmed.ncbi.nlm.nih.gov/26854486/" rel="noopener nofollow" target="_blank">low-dose isotretinoin trial</a>). The 2025 meta-analysis of 16 studies in 1,445 patients found large reductions in lesions and erythema, both still down 70% and 47% sixteen weeks after stopping, a relapse rate of 35% at five and a half months, worsening in 0.4% and serious adverse events in 0.4% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11934015/" rel="noopener nofollow" target="_blank">isotretinoin meta-analysis</a>); the Cochrane review grades the evidence moderate-to-high (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6850438/" rel="noopener nofollow" target="_blank">Cochrane-group review</a>). Strong evidence for an off-label use, and the drug that is teratogenic at any dose, dries every mucous membrane, needs blood tests and belongs to a dermatologist. It relapses in a third within six months; it is the rung for the disease that has defeated the rest, and the one early phymatous change is offered before the laser.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'dev-pdl',
    category: 'clinic',
    title: 'The pulsed-dye laser (595 nm) for fixed redness and capillaries',
    tldr: 'The device with the most robust evidence for rosacea\'s vessels: in a 29-patient randomised split-face trial three monthly sessions reduced erythema, telangiectasia and symptoms as much as intense pulsed light did; in a 14-patient double-blind split-face trial it beat the Nd:YAG (redness rated 52% better against 34%); across 12 studies it matched every other device. Low-to-moderate-certainty evidence, three to five sessions, and the only thing on this page that removes a vessel.',
    evidence: 'moderate',
    focus: 'vessels',
    note: 'Best for: the visible capillaries and the fixed background redness once the bumps are controlled — the vessel treatment with the most data',
    sessions: '3–5 sessions 4–6 weeks apart; maintenance yearly',
    downtime: '1–2 days of redness and swelling; 7–10 days of bruising on purpuric settings',
    cost: '€200–500 / session',
    bodyHtml: `
      <p>Light at 595 nm is absorbed by haemoglobin, heats the vessel and closes it; on gentle settings the skin reddens for a day, on aggressive ones it bruises for a week and clears more. The comparisons: 29 patients with moderate erythematotelangiectatic rosacea were randomised in a single-blind split-face design to three monthly sessions of non-bruising pulsed-dye laser on one side, intense pulsed light on the other, with an untreated control; both significantly reduced spectrophotometric erythema, telangiectasia and patient-reported symptoms, with no difference between them (<a href="https://pubmed.ncbi.nlm.nih.gov/19397667/" rel="noopener nofollow" target="_blank">pulsed-dye versus IPL trial</a>); in a double-blind split-face randomised trial of 14 patients with diffuse facial erythema, four monthly sessions of pulsed-dye laser reduced spectrophotometer redness 8.9% against 2.5% with the microsecond Nd:YAG, patients rated their redness 52% improved against 34%, and the Nd:YAG hurt less (<a href="https://pubmed.ncbi.nlm.nih.gov/23688651/" rel="noopener nofollow" target="_blank">pulsed-dye versus Nd:YAG trial</a>). The meta-analyses agree: across 12 records, pulsed-dye laser was not significantly different from the other light devices on erythema, telangiectasia, physician assessment or satisfaction, more painful than Nd:YAG and less than IPL, and "holds the most robust evidence" at low-to-moderate quality (<a href="https://pubmed.ncbi.nlm.nih.gov/34089264/" rel="noopener nofollow" target="_blank">light-therapy meta-analysis</a>); a 2026 network meta-analysis of 25 randomised trials found most at unclear or high risk of bias and radiofrequency microneedling ahead of it on satisfaction and erythema in a small comparison (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12800891/" rel="noopener nofollow" target="_blank">network meta-analysis</a>); and the Cochrane review grades laser and IPL for erythema and telangiectasia at low-to-moderate certainty (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6850438/" rel="noopener nofollow" target="_blank">Cochrane-group review</a>). Moderate, and the first thing to spend on for the vessels: the <a href="/laser-ipl">laser and IPL guide</a> has the device detail, the safety section the skin-type limits, and the disease that grew the vessels goes on growing new ones, which is why the sessions recur.</p>
    `,
  },
  {
    id: 'dev-ipl',
    category: 'clinic',
    title: 'Intense pulsed light for diffuse redness',
    tldr: 'In 34 patients, four sessions cut measured cheek redness 39% and the improvement held at six months; equal to the pulsed-dye laser in the 29-patient split-face trial; in a meta-analysis of four studies (141 people) IPL achieved more than-75% clearance more often and hurt more; in 112 patients, narrow-band IPL reduced erythema most and broad-band IPL pigmented more. The broad, adjustable option for a red face rather than discrete threads.',
    evidence: 'moderate',
    focus: 'flush',
    note: 'Best for: diffuse redness across cheeks and nose in fair skin — the same evidence tier as the laser, on a machine most clinics own',
    sessions: '3–5 sessions 3–4 weeks apart; maintenance yearly',
    downtime: 'A day of redness; pigment risk on tanned or darker skin',
    cost: '€200–450 / session',
    bodyHtml: `
      <p>Intense pulsed light is a broad flash filtered to the wavelengths blood absorbs; it treats an area rather than a thread. The prospective study: 34 patients (25 women) had four sessions three weeks apart with a 560 nm cut-off filter; measured erythema fell 39% on the cheeks, telangiectasia and physician and patient scores improved, and the result was sustained at six months (<a href="https://pubmed.ncbi.nlm.nih.gov/18565174/" rel="noopener nofollow" target="_blank">IPL rosacea study</a>). Against the laser it was equal in the 29-patient split-face trial (<a href="https://pubmed.ncbi.nlm.nih.gov/19397667/" rel="noopener nofollow" target="_blank">pulsed-dye versus IPL trial</a>); a 2024 meta-analysis of four comparative studies in 141 participants found no difference in more-than-50% clearance, a higher rate of more-than-75% clearance with IPL, similar erythema change, and more pain with IPL (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626304/" rel="noopener nofollow" target="_blank">IPL versus pulsed-dye meta-analysis</a>); and a 112-patient comparison found narrow-band IPL reduced erythema most, broad-band IPL cut sebum but pigmented more, pulsed-dye laser had the fewest adverse events, and recurrence ran 8–14% across the three (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12351582/" rel="noopener nofollow" target="_blank">three-device comparison</a>). Moderate, at the same Cochrane certainty as the laser (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6850438/" rel="noopener nofollow" target="_blank">Cochrane-group review</a>). It is the more operator-dependent device — filter, fluence and cooling decide the result and the burns — and the <a href="/laser-ipl">laser and IPL guide</a> and the <a href="/sun-damage">sun-damage guide</a> grade the same machine for the brown mottling it treats in the same session.</p>
    `,
  },
  {
    id: 'dev-ktp-ndyag',
    category: 'clinic',
    title: 'The 532 nm KTP and the 1,064 nm Nd:YAG for individual vessels',
    tldr: 'In a 15-patient split-face comparison the KTP cleared 62% of discrete vessels after one session and 85% after three against 49% and 75% for the pulsed-dye laser, with more redness and swelling afterwards (58% against 8%); in a 20-patient randomised trial a sequential 595/1,064 nm pulse cleared nasal vessels better than either alone; the Nd:YAG hurts less and does less for diffuse redness. Small trials, and the tools for the thread rather than the blush.',
    evidence: 'emerging',
    focus: 'vessels',
    sessions: '1–3 sessions',
    downtime: '1–3 days of redness and swelling',
    cost: '€150–400 / session',
    bodyHtml: `
      <p>Two other wavelengths treat the vessel you can point at. The 532 nm KTP is absorbed by blood even more avidly than 595 nm: in a split-face, single-blind comparison of 15 patients with facial telangiectasia and diffuse telangiectatic erythema, the KTP side cleared 62% after the first treatment and 85% three weeks after the third against 49% and 75% for the pulsed-dye side, at least as effective in every subject, but 58% noted more erythema on the KTP side against 8% on the laser side, with more swelling (<a href="https://pubmed.ncbi.nlm.nih.gov/17430378/" rel="noopener nofollow" target="_blank">KTP versus pulsed-dye study</a>). The 1,064 nm Nd:YAG penetrates deeper for the larger, bluer vessels around the nose: a randomised, blinded trial in 20 patients treated one side of the nose with a sequential 595 nm then 1,064 nm pulse and the other with either alone, and the combination cleared vessels significantly better than either single wavelength (<a href="https://pubmed.ncbi.nlm.nih.gov/18318728/" rel="noopener nofollow" target="_blank">dual-wavelength trial</a>), while for diffuse redness the Nd:YAG underperformed the pulsed-dye laser and hurt less in the 14-patient trial (<a href="https://pubmed.ncbi.nlm.nih.gov/23688651/" rel="noopener nofollow" target="_blank">pulsed-dye versus Nd:YAG trial</a>). Emerging: split-face series of 15 and 20, and a role — the discrete thread, the nasal vessel, the deeper vein — rather than a rival to the two rows above. The 1,064 nm is also the wavelength safest in darker skin, which the safety section explains.</p>
    `,
  },
  {
    id: 'dev-rf-microneedling',
    category: 'clinic',
    title: 'Radiofrequency microneedling and the newer devices',
    tldr: 'A 2026 network meta-analysis of 25 randomised trials placed radiofrequency microneedling ahead of the pulsed-dye laser on patient satisfaction and erythema — from few trials, mostly at unclear or high risk of bias, with a hint of publication bias. Promising, expensive, and not yet where the money should go first.',
    evidence: 'emerging',
    focus: 'flush',
    sessions: '3–4 sessions monthly',
    downtime: '2–3 days of redness and swelling',
    cost: '€300–600 / session',
    bodyHtml: `
      <p>Radiofrequency delivered through insulated microneedles heats the dermis below the surface and is sold for rosacea on the theory that it shrinks the vessels and calms the nerve signalling around them. The 2026 systematic review and network meta-analysis of 25 randomised trials of lasers and energy devices in rosacea found radiofrequency microneedling more effective than the pulsed-dye laser on patient satisfaction (mean difference −1.32) and erythema (−1.44), and the combination of oxymetazoline with pulsed-dye laser best for telangiectasia — while noting that most included studies were at unclear or high risk of bias and that a slight publication bias was present (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12800891/" rel="noopener nofollow" target="_blank">network meta-analysis</a>). Emerging: a ranking from a handful of trials rather than a body of them, and a device the <a href="/microneedling">microneedling guide</a> grades for other uses with the same caution. Light-emitting diodes, photodynamic therapy and plasma have less than this and are not graded here.</p>
    `,
  },
  {
    id: 'dev-rhinophyma',
    category: 'clinic',
    title: 'Reshaping the nose: carbon-dioxide laser or the surgical blade for rhinophyma',
    tldr: 'No randomised trial exists. Eleven men treated with the CO₂ laser at a Swedish university hospital: 92% highly satisfied at long-term follow-up, 55% breathing better, some hypopigmentation and scarring, no major complication; in a Danish comparison with blinded photo grading, excellent or good results in 75% after the blade and 71% after the laser. Both work; the surgeon\'s hands and the skin type decide.',
    evidence: 'moderate',
    focus: 'general',
    note: 'Best for: the bulbous, obstructing nose — by a surgeon or laser dermatologist who does it regularly, after a biopsy of anything that looks different',
    sessions: 'Once; touch-ups possible',
    downtime: '2–3 weeks of healing; redness for months',
    cost: '€1,500–4,000',
    bodyHtml: `
      <p>Rhinophyma is removed by shaving the overgrown tissue down to a new contour and letting it re-epithelialise from the glands left behind — with a carbon-dioxide laser, which seals as it cuts, or a blade, or an electrosurgical loop. The Cochrane group found no randomised trial of any treatment for phymatous rosacea (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6850438/" rel="noopener nofollow" target="_blank">Cochrane-group review</a>), so the evidence is series. Eleven men with moderate-to-major rhinophyma treated with the CO₂ laser at the Karolinska between 2015 and 2023 reported sustained results, 92% high satisfaction and 55% improved nasal airflow, with some hypopigmentation and scarring and no major side effect, in Fitzpatrick skin types I–III (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11697134/" rel="noopener nofollow" target="_blank">CO₂ laser series</a>); a Danish retrospective comparison graded before-and-after photographs on the RHISI scale by consultants blinded to the method, and found excellent or good results in 75% after the cold-blade technique and 71% after fractional CO₂ laser, with only one patient moderately satisfied (<a href="https://pubmed.ncbi.nlm.nih.gov/39709878/" rel="noopener nofollow" target="_blank">blade versus laser comparison</a>). Moderate: consistent series with blinded assessment, decades of practice, no randomised comparison, and a warning that darker skin scars and pigments more. A lump that has changed, bled or failed to heal on a phymatous nose is biopsied first, because basal cell carcinoma hides there.</p>
    `,
  },
];

const flush: Section[] = [
  {
    id: 'flush-paroxetine',
    category: 'flush',
    title: 'Paroxetine for refractory redness and flushing',
    tldr: 'One multicentre, randomised, double-blind trial: 97 people with refractory erythema took paroxetine 25 mg or placebo daily for 12 weeks; erythema success in 42.9% against 20.8%, flushing improved by two points or more in 44.9% against 25.0%, burning in 46.9% against 18.8%. Dizziness, lethargy, nausea and tremor; an antidepressant with a withdrawal syndrome, for the flushing nothing else has touched.',
    evidence: 'emerging',
    focus: 'flush',
    sessions: 'Daily for 12 weeks, then reassess',
    downtime: 'None; side effects in the first weeks',
    cost: '€5–15 / month',
    bodyHtml: `
      <p>The nerves that fire the flush use serotonin among their signals, and the antidepressant that raises it was tried on the patients no cream had helped. In the PRRE trial, patients with moderate-to-severe refractory erythema were randomised to paroxetine 25 mg or placebo daily for 12 weeks; 97 completed. Clinical Erythema Assessment success at week 12 was 42.9% against 20.8%, flushing success (a reduction of two points or more) 44.9% against 25.0%, burning improved in 46.9% against 18.8%, and depression scores improved, with dizziness, lethargy, nausea, dyspepsia and muscle tremor the reported adverse events (<a href="https://pubmed.ncbi.nlm.nih.gov/36806645/" rel="noopener nofollow" target="_blank">paroxetine trial</a>). Emerging: one trial, one dose, twelve weeks, and a drug with real side effects and a discontinuation syndrome that needs tapering. It is a dermatologist's third-line choice for the flushing-and-burning face that has failed triggers, the barrier, the alpha-agonists and light, and a reasonable one for the patient whose flushing and anxiety feed each other.</p>
    `,
  },
  {
    id: 'flush-beta-blockers',
    category: 'flush',
    title: 'Carvedilol and propranolol: beta-blockers for flushing',
    tldr: 'A systematic review of nine studies — one randomised trial, one cohort, one case-control, case series and reports — found carvedilol (6.25–37.5 mg a day) and propranolol (30–120 mg) produced a large, rapid reduction in flushing and erythema in patients unresponsive to conventional treatment; in five patients on carvedilol the erythema score fell from 3.4 to 0.4. Slow pulse and low blood pressure are the price.',
    evidence: 'emerging',
    focus: 'flush',
    sessions: 'Daily, titrated; reassess at 3–6 months',
    downtime: 'None; dizziness on standing',
    cost: '€5–15 / month',
    bodyHtml: `
      <p>Beta-blockers blunt the adrenaline that fires the flush and are the old remedy for blushing. The 2020 systematic review found nine studies of carvedilol, propranolol, nadolol and beta-blockers generally — one randomised trial, one cohort, one case-control, three case reports and three series — in which carvedilol and propranolol produced a large reduction in erythema and flushing with rapid onset of control, bradycardia and hypotension being the common adverse events and most designs retrospective, small and subjectively measured (<a href="https://pubmed.ncbi.nlm.nih.gov/32360760/" rel="noopener nofollow" target="_blank">beta-blocker review</a>). The original report: five patients with severe frequent flushing or persistent erythema and burning added carvedilol titrated to 12.5 mg twice daily for at least six months, and the five-point Clinician Erythema Assessment fell from 3.4 to 0.4 (<a href="https://www.jaad.org/article/S0190-9622(12)00440-9/fulltext" rel="noopener nofollow" target="_blank">carvedilol report</a>). Emerging: consistent, small and mostly uncontrolled. A drug for the person whose flushing is triggered by emotion and exertion and whose blood pressure and pulse can spare it, prescribed by someone who checks both.</p>
    `,
  },
  {
    id: 'flush-toxin',
    category: 'flush',
    title: 'Intradermal botulinum toxin for flushing',
    tldr: 'Micro-droplets of toxin injected into the skin of the cheeks, not the muscle: a meta-analysis of seven studies in 167 patients found erythema significantly improved at one, two and three months, with two randomised trials pooling to a large effect at three months; a 2026 review of three randomised trials found reduced erythema and flushing and better satisfaction, with mild transient stiffness. Small trials, three to six months per round, and a cost that recurs.',
    evidence: 'emerging',
    focus: 'flush',
    sessions: 'Every 3–6 months',
    downtime: 'Pinpoint bruising for days',
    cost: '€300–600 / session',
    bodyHtml: `
      <p>Toxin placed superficially in the dermis is thought to block the nerve release of the peptides that dilate the vessels and drive the inflammation, without paralysing the muscle below. The scoping review and meta-analysis found seven studies in 167 rosacea patients treated by intradermal injection; two randomised trials pooled to a standardised mean difference of 1.68 in erythema at three months, and the seven single-arm studies showed significant improvement at one, two and three months (<a href="https://pubmed.ncbi.nlm.nih.gov/39912154/" rel="noopener nofollow" target="_blank">toxin meta-analysis</a>). The 2026 systematic review restricted to randomised trials found three, both parallel-group and split-face designs showing significantly reduced erythema and flushing with improved satisfaction, adverse events mild, transient and self-limited — facial tightness, superficial stiffness, injection bruising — and the evidence limited by small samples, suboptimal designs and short follow-up (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13159499/" rel="noopener nofollow" target="_blank">toxin systematic review</a>). Emerging, and expensive per year. The <a href="/crows-feet">crow's-feet guide</a> grades the same drug in the muscle where its evidence is strong; the injector who does the micro-droplet technique regularly is the one who does not weaken your smile.</p>
    `,
  },
  {
    id: 'flush-txa',
    category: 'flush',
    title: 'Tranexamic acid, oral or topical, for redness and the barrier',
    tldr: 'In 70 patients randomised to standard treatment with or without oral tranexamic acid for eight weeks, erythema, global and self-assessment scores, dryness and quality of life were all better with the drug, water loss fell and hydration rose, with no significant side effects; in 45 women, topical 10% tranexamic acid improved erythema and telangiectasia on both sides of the face and more with microneedling. The melasma drug moonlighting, in small trials.',
    evidence: 'emerging',
    focus: 'flush',
    sessions: 'Daily for 8–12 weeks',
    downtime: 'None',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>Tranexamic acid, the clot-stabilising drug the <a href="/dark-spots">dark-spots guide</a> grades for melasma, also damps the vessel growth and plasmin-driven inflammation of rosacea. In the randomised trial, 70 patients with papulopustular rosacea received traditional therapy with or without oral tranexamic acid for eight weeks and were followed four more; erythema, investigator and patient global scores, dryness and rosacea quality of life were significantly better with the drug, the aesthetic improvement score higher, water loss lower and hydration higher, without significant side effects and with the largest gains in dry-skinned patients (<a href="https://pubmed.ncbi.nlm.nih.gov/38712728/" rel="noopener nofollow" target="_blank">oral tranexamic acid trial</a>). Topically, 45 women with erythematotelangiectatic rosacea had three sessions of 10% tranexamic acid with microneedling on one side and the solution alone on the other; both improved, the microneedled side more on clinical and dermoscopic scores at three months (<a href="https://pubmed.ncbi.nlm.nih.gov/38444423/" rel="noopener nofollow" target="_blank">topical tranexamic acid study</a>). Emerging: an open-label add-on trial and a split-face study, the oral drug carrying a clotting risk in anyone predisposed, the topical version cheap and gentle. A reasonable adjunct where a dermatologist offers it; not a substitute for the strong rows.</p>
    `,
  },
  {
    id: 'flush-hcq',
    category: 'flush',
    title: 'Hydroxychloroquine, the lupus drug, for erythema',
    tldr: 'A multicentre randomised, double-blind, double-dummy pilot trial against doxycycline in 2020, and a 2025 randomised trial of 73 patients in which hydroxychloroquine 200 mg twice daily added to doxycycline produced erythema improvement in 89.7% of completers at eight weeks against doxycycline alone. Two Chinese trials, an antimalarial with a retina to watch, and a rung for the specialist.',
    evidence: 'emerging',
    focus: 'flush',
    sessions: 'Daily for 8–12 weeks',
    downtime: 'None; eye check before long courses',
    cost: '€10–20 / month plus an eye examination',
    bodyHtml: `
      <p>Hydroxychloroquine calms the innate immune signalling — the same pathways cathelicidin drives — and is the drug of lupus, rosacea's closest look-alike. A multicentre randomised, double-blind, double-dummy pilot study compared it with doxycycline in rosacea (<a href="https://www.jaad.org/article/S0190-9622(20)30915-4/fulltext" rel="noopener nofollow" target="_blank">pilot trial</a>), and in a 2025 randomised, double-blind trial, 73 patients with moderate-to-severe rosacea received hydroxychloroquine 200 mg twice daily or placebo alongside doxycycline 100 mg daily; among 58 completers the combination gave significantly higher clinical efficacy at week eight, with an erythema improvement rate of 89.7% (<a href="https://onlinelibrary.wiley.com/doi/10.1155/dth/6636265" rel="noopener nofollow" target="_blank">combination trial</a>). Emerging: two trials from one country, modest sizes, and a drug that needs a baseline eye examination and retinal monitoring beyond a few months. A specialist's option for erythema that has failed the tetracycline, particularly where the flushing has an autoimmune flavour.</p>
    `,
  },
  {
    id: 'flush-sibo',
    category: 'flush',
    title: 'The gut: small-intestinal bacterial overgrowth and rifaximin',
    tldr: 'In 113 consecutive rosacea patients and 60 controls, breath tests found bacterial overgrowth in 52 of 113 against 3 of 60; those positive were randomised to rifaximin or placebo, and eradication produced an almost complete regression of the skin lesions that held for at least nine months, with a three-year follow-up from the same group. One centre, unblinded dermatologists, and a finding that other clinics see much less often.',
    evidence: 'emerging',
    focus: 'bumps',
    sessions: 'Breath test; a 10-day course if positive',
    downtime: 'None',
    cost: '€30–90 / course plus the test',
    bodyHtml: `
      <p>The gut–skin link in rosacea has one striking study. In Genoa, 113 consecutive rosacea patients (82 women, mean age 52) and 60 matched controls had lactulose and glucose breath tests; small-intestinal bacterial overgrowth was found in 52 of 113 patients against 3 of 60 controls. Those positive were randomised to rifaximin 1,200 mg a day for ten days or placebo, eradication was checked a month later, and two dermatologists — unblinded to the treatment — graded the skin: eradication induced an almost complete regression of the cutaneous lesions, maintained for at least nine months (<a href="https://pubmed.ncbi.nlm.nih.gov/18456568/" rel="noopener nofollow" target="_blank">bacterial overgrowth study</a>), and the same group reported a three-year follow-up (<a href="https://www.jaad.org/article/S0190-9622(16)30014-7/fulltext" rel="noopener nofollow" target="_blank">three-year follow-up</a>). Emerging: a single centre with an unusually high prevalence, unblinded assessors, and results other clinics have reproduced only partly. The reading for a patient: bloating, diarrhoea or the irritable bowel alongside a bumpy rosacea is worth a breath test and, if positive, a course that treats both — and a normal gut is not made better by a course of antibiotics for the skin.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-red-flags',
    category: 'safety',
    title: 'The redness that needs a doctor before a dermatologist',
    tldr: 'Flushing with palpitations, diarrhoea, wheeze, hives, drenching sweats or weight loss is carcinoid syndrome, phaeochromocytoma, mastocytosis or anaphylaxis until blood and urine tests say otherwise; a butterfly rash with joint pain, mouth ulcers, fatigue or photosensitivity is lupus until tested; eye pain, blurred vision or light that hurts is the cornea; a nose lump that bleeds or will not heal is biopsied. Rosacea itself is a diagnosis of the face, not the whole body.',
    bodyHtml: `
      <p>The flushing review sets the rule: most flushing is benign and obvious from history and examination — rosacea, the menopause, alcohol, food, emotion, drugs — but carcinoid syndrome, phaeochromocytoma, mastocytosis and anaphylaxis have to be excluded with laboratory studies when the flush is dry, prolonged, unprovoked, or accompanied by other symptoms (<a href="https://pubmed.ncbi.nlm.nih.gov/16844500/" rel="noopener nofollow" target="_blank">flushing review</a>): palpitations, headache and sweating point to a catecholamine-secreting tumour, diarrhoea and wheeze to carcinoid, hives, bone pain and faintness to mastocytosis. Lupus crosses the bridge of the nose and spares the folds beside it, and comes with joint pain, mouth ulcers, fatigue, hair loss or a rash that sun brings out; an antibody test decides. The eyes: pain, blurred vision or light sensitivity that limits daylight is corneal involvement, and an ophthalmologist's, because the Finnish cohort's authors found eye symptoms in a third and ask that every rosacea patient be asked (<a href="https://pubmed.ncbi.nlm.nih.gov/35249014/" rel="noopener nofollow" target="_blank">Finnish cohort study</a>). And the nose: basal cell carcinoma mimics and hides in rhinophyma, so a lump that has changed, bled or ulcerated is biopsied before it is lasered (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11697134/" rel="noopener nofollow" target="_blank">CO₂ laser series</a>). None of this is common; all of it is missed when a red face is treated as a red face.</p>
    `,
  },
  {
    id: 'safety-steroid',
    category: 'safety',
    title: 'The steroid cream: the fastest improvement and the commonest cause',
    tldr: 'A potent topical corticosteroid calms a red face in days and, applied for weeks, causes rosacea, perioral dermatitis and capillaries that stay; stopping it brings a rebound flare, which is why people cannot stop. Never a steroid on rosacea; read every tube for one; withdraw gradually if it has been months; expect a bad fortnight; a tetracycline for months and a calcineurin cream for the worst weeks.',
    bodyHtml: `
      <p>Steroid rosacea follows several weeks of a potent topical corticosteroid on the mid-forehead, eyelids, cheeks or chin — redness, bumps, pustules, burning, itch and telangiectasia — and it "may become especially severe when the topical steroid cream is discontinued", the rebound flare that traps the user (<a href="https://dermnetnz.org/topics/steroid-rosacea" rel="noopener nofollow" target="_blank">DermNet on steroid rosacea</a>). The sources are the eczema cream kept from years ago, a relative's tube, a cortisone bought over the counter abroad, and cosmetic products with an undeclared steroid; a series of 110 cases catalogues the long, improper use that produces it (<a href="https://ijdvl.com/topical-corticosteroid-induced-rosacea-like-dermatitis-a-clinical-study-of-110-cases/" rel="noopener nofollow" target="_blank">110-case series</a>). The management: the steroid is stopped — gradually, by reducing frequency and stepping down potency, when it has been months — an oral tetracycline such as doxycycline is prescribed for several months, a calcineurin cream (pimecrolimus or tacrolimus) covers the worst weeks, and a vascular laser deals with the capillaries that remain. The rules for everyone on this page: no corticosteroid on a rosacea face, ever, including hydrocortisone "for the redness"; every tube read; and a face that improved dramatically on an unknown cream and flared when it ran out is this section, not a new disease.</p>
    `,
  },
  {
    id: 'safety-alpha-agonists',
    category: 'safety',
    title: 'The redness switches: rebound, paradoxical erythema and how to test them',
    tldr: 'Brimonidine\'s label warns of redness returning worse than baseline and spreading to previously unaffected skin; expert review puts reversible worsening — a paradoxical flush within hours or a rebound as it wears off — at 10–20% of users; oxymetazoline\'s rebound was under 1% in a year of use but it is not sold in Europe. Patch-test on the jaw, use a pea, never on a broken barrier, never more than once a day, and stop at the first worsening.',
    bodyHtml: `
      <p>Both switches constrict vessels, and vessels constricted for a day can dilate harder when the drug leaves. Brimonidine's prescribing information records that some trial subjects reported a rebound phenomenon with erythema worse than baseline, and post-marketing reports of redness in areas of the face previously unaffected, with erythema in 4% and flushing in 3% of treated subjects against 1% and 0% on vehicle in the trials (<a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f6a4353f-ae69-4214-901f-e5d42a6fbde7" rel="noopener nofollow" target="_blank">prescribing information</a>); the multidisciplinary review of the mechanism — inflamed receptors, saturation, a damaged barrier letting more drug in, receptor genetics — estimates that about 80% of users improve without worsening, leaving 10–20% who get either a paradoxical flush within hours of application or an exaggerated recurrence as it wears off (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5083782/" rel="noopener nofollow" target="_blank">paradoxical erythema review</a>; <a href="https://jcadonline.com/dermatological-adverse-events-associated-with-topical-brimonidine-gel-0-33-in-subjects-with-erythema-of-rosacea-a-retrospective-review-of-clinical-studies/" rel="noopener nofollow" target="_blank">adverse-event review</a>). Oxymetazoline's 52-week study found a rebound in under 1% after stopping (<a href="https://pubmed.ncbi.nlm.nih.gov/29409914/" rel="noopener nofollow" target="_blank">52-week study</a>). The protocol that limits the damage: a three-day patch test on the jawline; a pea-sized amount for the whole face; a repaired barrier underneath, because the review names barrier damage as a mechanism; never on broken or freshly lasered skin; once a day at most; the first full-face use on a day that does not matter; and, at the first sign of worsening, stopping rather than reapplying — the rebound is reversible and the drug is not a treatment for the disease.</p>
    `,
  },
  {
    id: 'safety-devices',
    category: 'safety',
    title: 'Lasers and light: purpura, burns, pigment and the skin types that scar',
    tldr: 'Bruising for a week on purpuric laser settings; blistering and burns from too much fluence or too little cooling; hyperpigmentation with broad-band IPL and in tanned or darker skin (the Nd:YAG is the safer wavelength there); hypopigmentation and scarring after rhinophyma ablation, worse in skin types IV–VI; eye protection every time. A test spot, no tan, no active flare, and an operator who treats rosacea weekly.',
    bodyHtml: `
      <p>Every device in the clinic group heats blood inside vessels a fraction of a millimetre under skin that is already inflamed. The predictable effects: transient redness and swelling for a day or two, and on the purpuric settings of the pulsed-dye laser a week of bruising that clears more vessels per session (<a href="https://pubmed.ncbi.nlm.nih.gov/19397667/" rel="noopener nofollow" target="_blank">pulsed-dye versus IPL trial</a>). The avoidable ones: blistering and crusting from too much energy or failed cooling; hyperpigmentation, which the 112-patient comparison found with broad-band IPL and which tanned or darker skin makes far more likely, so that the 1,064 nm Nd:YAG is the wavelength chosen there (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12351582/" rel="noopener nofollow" target="_blank">three-device comparison</a>); and, after rhinophyma ablation, hypopigmentation and scarring that the Swedish series recorded even in fair skin and that the authors say demand extra caution in skin types IV–VI (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11697134/" rel="noopener nofollow" target="_blank">CO₂ laser series</a>). The rules: eye shields for everyone in the room; no treatment on a tan or within weeks of one; no treatment during an active papulopustular flare, which the creams settle first; a test spot in darker skin; the alpha-agonist gels stopped for the days around a session; and an operator who treats rosacea vessels every week rather than one who treats hair on Mondays. The <a href="/laser-ipl">laser and IPL guide</a> has the full safety page.</p>
    `,
  },
  {
    id: 'safety-drugs',
    category: 'safety',
    title: 'The pills: sun, stomach, pregnancy, pulse and retina',
    tldr: 'Doxycycline burns in the sun and irritates the oesophagus (a full glass of water, upright, never at bedtime); minocycline carries rarer but more serious risks — pigmentation, drug-induced lupus, liver; isotretinoin causes birth defects at any dose and needs contraception and blood tests; paroxetine has a withdrawal syndrome; beta-blockers slow the pulse and drop the pressure; hydroxychloroquine needs the retina checked; oral tranexamic acid is a clot risk. Off-label means a specialist and a plan, not a forum.',
    bodyHtml: `
      <p>The tetracyclines: doxycycline at any dose photosensitises, which in a disease triggered by sun in 81% of sufferers makes the sunscreen row mandatory, and it inflames the oesophagus when swallowed dry or lying down; the 40 mg modified-release dose spares the gut flora that the 100 mg dose disturbs (<a href="https://pubmed.ncbi.nlm.nih.gov/17367893/" rel="noopener nofollow" target="_blank">phase 3 trials</a>). Minocycline was non-inferior and gave longer remissions in the DOMINO trial, whose authors nonetheless note its lower risk-to-benefit ratio — blue-grey pigmentation, drug-induced lupus and liver injury are its rare harms (<a href="https://pubmed.ncbi.nlm.nih.gov/27797396/" rel="noopener nofollow" target="_blank">DOMINO trial</a>). Isotretinoin is teratogenic at every dose, requires reliable contraception and pregnancy testing, dries the lips, eyes and nose, and is monitored with blood tests; serious adverse events were 0.4% in the meta-analysis (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11934015/" rel="noopener nofollow" target="_blank">isotretinoin meta-analysis</a>). Of the off-label flushing drugs, paroxetine brings dizziness, nausea and tremor early and a discontinuation syndrome if stopped abruptly (<a href="https://pubmed.ncbi.nlm.nih.gov/36806645/" rel="noopener nofollow" target="_blank">paroxetine trial</a>); the beta-blockers cause bradycardia and hypotension (<a href="https://pubmed.ncbi.nlm.nih.gov/32360760/" rel="noopener nofollow" target="_blank">beta-blocker review</a>); hydroxychloroquine needs a baseline and periodic eye examination; oral tranexamic acid is avoided in anyone with a clotting history. Every one of these is a prescription with monitoring, and none is a first step.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-sensitive-or-rosacea',
    category: 'faq',
    title: 'Is it rosacea, or just sensitive skin?',
    tldr: 'Persistent redness across the centre of the face — cheeks, nose, chin, mid-forehead — that does not go away is rosacea by definition; flushing that lasts, visible capillaries, bumps without blackheads and gritty eyes are its major features. Sensitive skin that stings but is not red at rest is a barrier problem, which rosacea skin also has. A dermatologist decides in one visit; the treatments overlap at the barrier and diverge after it.',
    bodyHtml: `
      <p>The consensus makes persistent centrofacial erythema, or phymatous change, diagnostic alone; flushing, telangiectasia, papules and pustules, and ocular signs are major features that support the diagnosis in combination (<a href="https://academic.oup.com/bjd/article/176/2/431/6601814" rel="noopener nofollow" target="_blank">ROSCO 2017 consensus</a>). Sensitive skin without redness at rest is usually a barrier that stings — and rosacea skin is a barrier that stings with a disease behind it (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5216279/" rel="noopener nofollow" target="_blank">barrier comparison</a>). The barrier row treats both; the prescription rows treat only one; and the visit that tells you which is the cheapest thing on this page.</p>
    `,
  },
  {
    id: 'faq-cure',
    category: 'faq',
    title: 'Will it go away — can it be cured?',
    tldr: 'No, and yes to control: rosacea is chronic and relapsing, every trial measures 12–16 weeks and every course is followed by maintenance. Isotretinoin relapsed in 35% within six months; IPL held for six months and is repeated; the creams hold what the pills gained. The realistic goal is a face that is quiet most of the time, with a plan for the flares.',
    bodyHtml: `
      <p>Every rung on this page is followed by the word "maintenance". The isotretinoin meta-analysis found lesions still 70% down four months after stopping and a 35% relapse at five and a half months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11934015/" rel="noopener nofollow" target="_blank">isotretinoin meta-analysis</a>); the IPL study's improvement held at six months and the device is repeated after that (<a href="https://pubmed.ncbi.nlm.nih.gov/18565174/" rel="noopener nofollow" target="_blank">IPL rosacea study</a>); the doxycycline trials ran 16 weeks and the creams that follow them are used indefinitely (<a href="https://pubmed.ncbi.nlm.nih.gov/17367893/" rel="noopener nofollow" target="_blank">phase 3 trials</a>). Control looks like this: sunscreen and the barrier daily, a cream that suits you daily, a short course of pills for a flare, light for the vessels every year or two, and a switch for the days that matter.</p>
    `,
  },
  {
    id: 'faq-capillaries-permanent',
    category: 'faq',
    title: 'Do lasers remove broken capillaries permanently?',
    tldr: 'The vessel that is treated is destroyed and does not come back; the disease that grew it goes on growing new ones, at 8–14% recurrence in a year in the 112-patient comparison. Three to five sessions clear most of what is visible, a session every year or two keeps it that way, and sunscreen slows the replacement rate.',
    bodyHtml: `
      <p>Light closes a vessel by heating the blood in it; the vessel is absorbed and does not reopen. The KTP study cleared 85% of discrete vessels after three sessions (<a href="https://pubmed.ncbi.nlm.nih.gov/17430378/" rel="noopener nofollow" target="_blank">KTP versus pulsed-dye study</a>), the IPL study's cheek redness stayed down at six months (<a href="https://pubmed.ncbi.nlm.nih.gov/18565174/" rel="noopener nofollow" target="_blank">IPL rosacea study</a>), and recurrence — new vessels, not old ones — ran 8–14% across the three devices in the 112-patient comparison (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12351582/" rel="noopener nofollow" target="_blank">three-device comparison</a>). The trade is a maintenance session every year or two, cheaper than the first course and unnecessary for some; the sunscreen row is what makes it rarer.</p>
    `,
  },
  {
    id: 'faq-alcohol',
    category: 'faq',
    title: 'Does alcohol cause rosacea — and the red nose?',
    tldr: 'It raises the risk and fires the flush: 82,737 women followed 14 years showed a 53% higher risk of developing rosacea at 30 grams a day or more, white wine and spirits most, and alcohol triggers flares in 52% of sufferers. The bulbous nose is rhinophyma, a feature of rosacea that has nothing to do with drink — the myth that has stigmatised teetotal men for a century.',
    bodyHtml: `
      <p>The cohort: hazard ratios of 1.12 at one to four grams of alcohol a day and 1.53 at 30 or more, white wine and liquor most associated (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5438297/" rel="noopener nofollow" target="_blank">alcohol cohort study</a>); the survey: alcohol as a flare trigger in 52% (<a href="https://www.rosacea.org/rosacea-review/2002/summer/new-survey-pinpoints-leading-factors-that-trigger-symptoms" rel="noopener nofollow" target="_blank">trigger survey</a>). Rhinophyma, by contrast, is a severe manifestation of rosacea itself, overwhelmingly in men aged 50–70 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11697134/" rel="noopener nofollow" target="_blank">CO₂ laser series</a>), and no study links it to alcohol; the association in the public mind is the same red face read two ways. Drink as the diary allows, and let nobody read your nose.</p>
    `,
  },
  {
    id: 'faq-coffee-spice',
    category: 'faq',
    title: 'Do I have to give up coffee, spicy food and hot drinks?',
    tldr: 'Coffee, no: caffeinated coffee was associated with a lower risk of rosacea (23% lower at four or more cups a day), and decaf did nothing, so it is the heat of the cup that flushes — let it cool. Spicy food fires 45% of sufferers and heated drinks 36%; the diary tells you whether you are one of them.',
    bodyHtml: `
      <p>The caffeine analysis of the nurses' cohort found the highest fifth of caffeine intake carried a hazard ratio of 0.76 for developing rosacea and four or more daily servings of caffeinated coffee 0.77, with no association for decaffeinated coffee, tea, soda or chocolate (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/2707780" rel="noopener nofollow" target="_blank">caffeine cohort study</a>); heated beverages triggered flares in 36% and spicy foods in 45% of surveyed patients (<a href="https://www.rosacea.org/rosacea-review/2002/summer/new-survey-pinpoints-leading-factors-that-trigger-symptoms" rel="noopener nofollow" target="_blank">trigger survey</a>). Iced coffee is the experiment that separates the drug from the heat; the fortnight's diary separates your triggers from everyone else's.</p>
    `,
  },
  {
    id: 'faq-actives',
    category: 'faq',
    title: 'Can I use retinol, vitamin C, acids or exfoliants on a rosacea face?',
    tldr: 'Carefully or not at all: rosacea skin has a barrier damaged at the gene level and stings on lactic acid, and no rosacea trial supports retinol, glycolic acid or scrubs. Azelaic acid is the acid with the trials. If an anti-ageing active matters, it goes on a repaired barrier, at the lowest strength, twice a week, and stops at the first burn.',
    bodyHtml: `
      <p>The barrier studies are the argument for restraint: water loss, dryness and stinging are the disease's own features (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5216279/" rel="noopener nofollow" target="_blank">barrier comparison</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32199994/" rel="noopener nofollow" target="_blank">barrier gene study</a>), and skin-care products triggered flares in 41% of surveyed patients (<a href="https://www.rosacea.org/rosacea-review/2002/summer/new-survey-pinpoints-leading-factors-that-trigger-symptoms" rel="noopener nofollow" target="_blank">trigger survey</a>). Azelaic acid has high-certainty trials and doubles as the pigment and texture active (<a href="https://pubmed.ncbi.nlm.nih.gov/12789172/" rel="noopener nofollow" target="_blank">phase 3 gel trials</a>). For the retinoid the <a href="/wrinkles">wrinkles guide</a> grades, the rule on this face is the niacinamide moisturiser first, the lowest strength, buffered over the moisturiser, two nights a week, and a month before judging.</p>
    `,
  },
  {
    id: 'faq-acne',
    category: 'faq',
    title: 'Is it acne? Can I use my acne products?',
    tldr: 'Rosacea has no blackheads or whiteheads, starts after thirty, burns rather than shines, and sits on a red background; acne\'s benzoyl peroxide, salicylic acid and retinoids mostly inflame it — though an encapsulated, slow-release benzoyl peroxide cleared rosacea in two trials. Adult acne and rosacea coexist; the treatments overlap at azelaic acid and doxycycline and diverge everywhere else.',
    bodyHtml: `
      <p>The comparison of 463 rosacea and 412 acne patients found redness, burning, dryness and itch far more frequent in rosacea and the barrier damaged only there (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5216279/" rel="noopener nofollow" target="_blank">barrier comparison</a>) — which is why the acne routine burns. The exceptions are instructive: azelaic acid treats both; doxycycline treats both; and benzoyl peroxide, unusable in its ordinary form, cleared rosacea in 43.5–50.1% when trapped in slow-release microcapsules (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10452484/" rel="noopener nofollow" target="_blank">encapsulated benzoyl peroxide trials</a>). Comedones mean acne is part of the picture and a dermatologist treats the two together.</p>
    `,
  },
  {
    id: 'faq-rebound',
    category: 'faq',
    title: 'Why is my face redder after the redness gel?',
    tldr: 'Paradoxical erythema — a flush within hours — or rebound as it wears off, in 10–20% of brimonidine users, worse on a damaged barrier and with more gel. It is reversible: stop, repair the barrier, tell the prescriber. Oxymetazoline rebounded in under 1% but is not sold in Europe.',
    bodyHtml: `
      <p>The expert review explains it as inflamed and saturated receptors, more drug entering through a damaged barrier, and receptor genetics, with about 80% of users improving cleanly and 10–20% worsening reversibly (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5083782/" rel="noopener nofollow" target="_blank">paradoxical erythema review</a>); the label warns of redness worse than baseline and in new areas (<a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f6a4353f-ae69-4214-901f-e5d42a6fbde7" rel="noopener nofollow" target="_blank">prescribing information</a>). Stopping fixes it within days; reapplying to chase it makes it worse; the safety section has the protocol for trying again, if you want to.</p>
    `,
  },
  {
    id: 'faq-cost-ladder',
    category: 'faq',
    title: 'What does it cost, from cheapest to dearest?',
    tldr: 'Free (the diary, cooling the coffee) → €15–40 a month for sunscreen and barrier care → €10–50 a tube for metronidazole, azelaic acid or ivermectin → €30–60 a month for doxycycline 40 mg → €40–80 a tube for brimonidine → €5–30 a month for the off-label pills → €150–500 a session, three to five sessions, for the lasers and IPL → €300–600 a session for toxin or radiofrequency microneedling → €1,500–4,000 for rhinophyma surgery. The strongest evidence sits in the €10–60 rungs; the vessels are the expensive part.',
    bodyHtml: `
      <p>Rosacea's best-evidenced treatments are among the cheapest on this site: a tube of azelaic acid or ivermectin and a three-month course of low-dose doxycycline together cost less than one laser session, and they carry the high-certainty evidence. The vessels are where the money goes — three to five sessions of pulsed-dye laser or IPL at €200–500, rarely reimbursed, repeated every year or two — and the off-label flushing drugs are cheap pills with expensive monitoring. Prices are typical Western European ranges; the two American-only creams and the nose surgery vary most.</p>
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
    intro: 'A red face is vessels that open too easily, an immune system on a hair trigger and a barrier that lets everything in — three drivers, four visible features, and a different treatment for each.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which red face do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: sun, barrier, triggers and the mirror',
    intro: 'The rows every prescription assumes — the sunscreen, the repaired barrier, the two or three triggers that are actually yours — and what the cohorts and the make-up counter honestly offer.',
    sections: home,
  },
  {
    id: 'rx',
    title: 'Prescription creams and pills',
    intro: 'The best-trialled part of this site: high-certainty evidence for the creams that clear the bumps and the gel that blanks the redness for a day, a low-dose antibiotic that does not breed resistance, and the retinoid for the disease that fails them all.',
    sections: rx,
  },
  {
    id: 'clinic',
    title: 'Lasers and light: the only things that remove a vessel',
    intro: 'Pulsed-dye laser, intense pulsed light, the KTP and the Nd:YAG for the capillaries and the fixed redness no cream touches — moderate evidence, three to five sessions, repeated as the disease grows new ones — and the nose.',
    sections: clinic,
  },
  {
    id: 'flush',
    title: 'When the flushing survives everything: off-label pills and injections',
    intro: 'An antidepressant, two beta-blockers, micro-droplets of toxin, the melasma drug, the lupus drug and a gut antibiotic — one or two trials each, for the flushing and burning that the strong rows have not touched.',
    sections: flush,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The flushing that is a tumour until tested, the steroid cream that caused it, the redness gel that rebounds, the light that burns and pigments, and the pills that need sunscreen, contraception and a pulse check.',
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
  flush: 'Flushing & fixed redness',
  vessels: 'Broken capillaries',
  bumps: 'Bumps & pustules',
  barrier: 'Barrier & triggers',
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
