/**
 * Loose upper-arm skin guide — single source of truth (problem template).
 *
 * Consumed by /upper-arms. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: the hanging upper arm is three things in different
 * proportions — a skin envelope that has lost its recoil, fat that is either
 * too much or has left, and a triceps that sits under the fascia and does
 * not sag but does fill. The surgeons' classification sorts arms by how much
 * fat and how many centimetres of hang, and the treatment follows: fat
 * removal for the full firm arm, energy under the skin for the moderate
 * hang, excision for the deflated arm, and training and topicals for the
 * crepey arm that is not yet hanging. Nothing non-surgical shrinks skin by
 * more than a third on a tattooed grid, the scar of the arm lift is real
 * and takes 12–18 months to fade, and the commonest mistake is treating
 * the fat of an arm whose problem is skin, which makes it hang more.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'skin' | 'fat' | 'muscle' | 'surgery' | 'general';

export type SectionCategory = 'concept' | 'context' | 'home' | 'inj' | 'clinic' | 'surg' | 'safety' | 'faq';

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
  'A hanging upper arm is three things in different proportions: a skin envelope that has lost its recoil, fat that is either too much or has left, and a triceps that sits under the fascia and does not sag. Surgeons classify arms by fat and by centimetres of hang with the arm held out at 90° — under 5 cm mild, 5–10 moderate, over 10 severe — and the treatment follows the class, not the wish.',
  'Nothing non-surgical shrinks skin by much: radiofrequency-assisted liposuction contracted the inner-arm surface by a third and halved the hang at one year in a 12-patient pilot and beat plain superficial liposuction by 4–5 percentage points in a bilateral comparison; ultrasound, radiofrequency and the collagen stimulators improve laxity and crepe on scales in small open studies; a firming cream beat placebo on the arms of 40 women over 12 weeks. Skin excess over about 10 cm is a scar or a sleeve.',
  'The arm lift is the only treatment that removes skin, and its evidence is 1,578 patients across 29 observational studies: poor scarring in 9.9%, recurrent hang in 7.8%, wound separation in 6.8%, seroma in 5.9%, nerve symptoms and lymphoedema in about 2.5% each, revision for looks in 7.5% — and satisfaction of 4.3 out of 5 with 94% who would do it again, despite a scar rated 3.9 that takes 12–18 months to fade.',
  'Fat and muscle have their own rows: cryolipolysis thinned the arm fat layer 15% in a single treatment in a seven-person pilot, electromagnetic muscle stimulation with radiofrequency thickened the triceps 24% and thinned the fat 25% on MRI in the maker\'s 34-person study, and resistance training with 1.2 g/kg of protein adds lean mass in older women — though 10 weeks of free weights added muscle in pre-menopausal women and not in post-menopausal ones. Muscle fills the envelope; it never shrinks it.',
  'The commonest mistakes have numbers behind them: liposuction of an arm whose problem is skin makes it hang more, treating before weight is stable wastes the treatment, and rapid loss on a GLP-1 drug produces the deflated arm that only excision fixes. Weight stable for six to twelve months, the pinch and the hang measured, the fat treated only where the skin still recoils, and the scar accepted only when the hang is beyond what energy can do.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-skin',
    kind: 'Skin',
    title: 'An envelope that has lost its recoil',
    blurb: 'Collagen and elastin thin with age, sun on the outer arm and the loss of oestrogen, and skin stretched by years of extra weight does not shrink back when the weight goes. Hold the arm out at 90° and measure the hang: under 5 cm is mild, over 10 is a scar or a sleeve.',
  },
  {
    id: 'type-fat',
    kind: 'Fat',
    title: 'Too much fat, or fat that has left',
    blurb: 'The full, firm arm has fat under skin that still pinches back, and fat removal alone fixes it; the deflated arm after weight loss — or a GLP-1 drug — has the same envelope with nothing in it. Removing fat from the second makes it hang more.',
  },
  {
    id: 'type-muscle',
    kind: 'Muscle',
    title: 'The triceps under it',
    blurb: 'Muscle sits under the fascia and does not sag — the "bat wing" is skin and fat, not a weak triceps — but muscle is what fills the envelope from inside, and it declines from the forties. Training rebuilds the filling; it cannot take in the sleeve.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'arm-anatomy',
    category: 'concept',
    title: 'What hangs, and what does not: skin, fat and the triceps',
    tldr: 'The upper arm is skin over subcutaneous fat over a fascia that holds the muscle; when the arm is held out, the skin and fat below the biceps groove hang and the muscle does not. Surgeons classify arms by fat deposit and ptosis grade — five stages from minimal fat with no hang to no fat with severe hang — and a 2024 refinement measures the hang in centimetres: under 5 mild, 5–10 moderate, over 10 severe.',
    bodyHtml: `
      <p>Hold the arm out sideways at shoulder height and look at what falls below the bone line: skin and the fat beneath it, hanging from the groove between biceps and triceps. The triceps sits under a fascial sleeve and does not join the hang, which is why the "bat wing" belongs to the skin and fat and not to any weakness of the muscle. Plastic surgeons sort arms on exactly this: the classification that guides treatment describes five groups — stage 1 minimal fat and no ptosis, stage 2a moderate fat with grade 1 ptosis, stage 2b severe fat with grade 2 ptosis, stage 3 severe fat with grade 3 ptosis, and stage 4 minimal or no fat with grade 3 ptosis — with a treatment for each, from liposuction alone to a full arm lift, developed on 60 patients followed one to three years (<a href="https://pubmed.ncbi.nlm.nih.gov/17496609/" rel="noopener nofollow" target="_blank">brachial ptosis classification</a>). A 2024 series of 50 women simplified it to a ruler: the vertical distance from the lowest point of the hang to the arm's groove with the arm abducted to 90°, mild under 5 cm, moderate 5–10 cm, severe over 10 cm, treated respectively with liposuction, radiofrequency-assisted liposuction and an arm lift (<a href="https://pubmed.ncbi.nlm.nih.gov/38114083/" rel="noopener nofollow" target="_blank">50-patient series</a>). The pinch test adds the second axis: a fold that is thick and springs back is fat under good skin; a thin fold that stays where it is pinched is skin that has lost its recoil. Every treatment on this page belongs to one cell of that grid.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'How common — and why the arms are first',
    tldr: 'On a validated excess-skin questionnaire, the reference population scored 1.5, people with obesity 10.5 and adults after weight-loss surgery 12.3, with the upper arms among the sites measured; American surgeons performed 23,527 arm lifts in 2024, up 2% as GLP-1 weight loss spread. The inner upper arm is also the site researchers use to study intrinsic skin ageing, because it gets no sun and ages anyway.',
    bodyHtml: `
      <p>The Swedish group that built the excess-skin questionnaire compared six populations: the reference population scored 1.5 for experience of and discomfort from excess skin, adults with obesity 10.5, adults after obesity surgery 12.3 and adolescents 14.4, and abdominoplasty brought the abdomen's score back to 2.9; measured ptosis on the arms fell after weight loss in adults but not in the adolescents (<a href="https://pubmed.ncbi.nlm.nih.gov/30638792/" rel="noopener nofollow" target="_blank">excess-skin study</a>). The demand is now a drug story as much as a surgery story: American plastic surgeons reported 23,527 upper-arm lifts in 2024, up 2% on the year, alongside a rise in body contouring among patients on GLP-1 weight-loss medication (<a href="https://www.plasticsurgery.org/documents/news/statistics/2024/plastic-surgery-statistics-report-2024.pdf" rel="noopener nofollow" target="_blank">ASPS 2024</a>), and the aesthetic reviews now treat semaglutide laxity of the arms, abdomen and thighs as a patient group of its own (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845967/" rel="noopener nofollow" target="_blank">GLP-1 review</a>). Age does the rest without weight: the upper inner arm is the site dermatologists use to study skin ageing that owes nothing to sun, and it was there that a 0.4% retinol lotion was tested against vehicle on 36 people averaging 87 (<a href="https://pubmed.ncbi.nlm.nih.gov/17515510/" rel="noopener nofollow" target="_blank">retinol arm trial</a>). Muscle joins in from the forties, and in a 20-week trial of free-weight training in 41 women averaging 52, the pre-menopausal women gained fat-free mass and muscle and the post-menopausal women did not, at either intensity, in ten weeks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10559623/" rel="noopener nofollow" target="_blank">menopause training trial</a>).</p>
    `,
  },
  {
    id: 'why-hard',
    category: 'concept',
    title: 'Why the arm is treated badly',
    tldr: 'Skin does not shrink much: the best-measured energy treatment contracted the inner-arm surface by a third, and the devices sold as "tightening" move a laxity scale by a grade in small open studies. The arm lift removes skin and leaves a scar that is poor in one in ten. In between, clinics liposuction arms whose problem is skin — which makes them hang more — and treat people whose weight is still falling.',
    bodyHtml: `
      <p>The arm exposes the two limits of aesthetic medicine at once. The first is that skin contracts modestly: the pilot that tattooed a grid on the inner arm and measured it a year after radiofrequency-assisted liposuction found the surface area down 33.5% and the hang halved (<a href="https://pubmed.ncbi.nlm.nih.gov/22231416/" rel="noopener nofollow" target="_blank">RFAL pilot</a>), a bilateral comparison put the same device at 13–15% against 8–11% for aggressive liposuction alone (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4527633/" rel="noopener nofollow" target="_blank">bilateral comparison</a>), and the non-invasive devices are graded on five-point laxity scales in studies of 12 to 46 people. The second is that removing skin leaves a mark: across 29 studies and 1,578 patients, arm-lift scarring was rated poor in 9.9% and the hang recurred in 7.8% (<a href="https://pubmed.ncbi.nlm.nih.gov/34936607/" rel="noopener nofollow" target="_blank">brachioplasty meta-analysis</a>). Between the two sit the errors: liposuction of a stage-4 arm, whose skin has nothing to recoil around; energy devices on a hang of 12 cm; any treatment on a body still losing weight; and the muscle-toning promise for a fold that contains no muscle. The classification exists so that the ruler and the pinch, not the clinic's equipment, choose the row.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-skin',
    category: 'context',
    title: 'The deflated arm: skin excess, little fat',
    tldr: 'A thin, loose fold that hangs 5 cm or more with the arm out and stays where it is pinched, often after weight loss or in the seventies — stage 4 in the surgeons\' system. Energy under the skin for a moderate hang without a scar; the arm lift for a severe one; nothing topical or non-invasive closes more than a fraction of it.',
    focus: 'skin',
    bodyHtml: `
      <p>Pinch the fold below the arm held out at 90°: if it is thin, loose and slow to spring back, and the hang measures 5 cm or more, the problem is skin that has lost its recoil with little fat inside it — the stage 4 arm of the classification, which the classification assigns to a full arm lift (<a href="https://pubmed.ncbi.nlm.nih.gov/17496609/" rel="noopener nofollow" target="_blank">brachial ptosis classification</a>), and the "severe" arm of the 2024 series, treated with brachioplasty plus liposuction for a 17.3% reduction in circumference (<a href="https://pubmed.ncbi.nlm.nih.gov/38114083/" rel="noopener nofollow" target="_blank">50-patient series</a>). It is the arm of massive weight loss and of the eighth decade, and the arm the devices oversell: the RFAL pilot managed stage 4 arms without a scar in its 12 patients, but the stage 3 arms still needed a short-scar excision (<a href="https://pubmed.ncbi.nlm.nih.gov/22231416/" rel="noopener nofollow" target="_blank">RFAL pilot</a>). The choice here is the honest one between a moderate result with no scar and a full result with one.</p>
    `,
  },
  {
    id: 'type-fat',
    category: 'context',
    title: 'The full arm: fat under skin that still pinches back',
    tldr: 'A thick, firm fold that springs back when released, an arm that is big rather than hanging, and skin that has not been stretched by a large weight change — stage 1 or 2a. Fat removal alone works here: liposuction cut circumference 6.8% in mild cases, cryolipolysis thinned the fat layer 15% in one session. The skin recoils around what is left.',
    focus: 'fat',
    bodyHtml: `
      <p>A fold that is thick, resists the pinch and snaps back when released is fat under skin with recoil to spare, and the arm looks large rather than loose — stage 1 or 2a, which the classification treats with liposuction alone (<a href="https://pubmed.ncbi.nlm.nih.gov/17496609/" rel="noopener nofollow" target="_blank">brachial ptosis classification</a>); the 2024 series' mild group had a 6.8% circumference reduction from suction alone with a small gain on the arm satisfaction questionnaire (<a href="https://pubmed.ncbi.nlm.nih.gov/38114083/" rel="noopener nofollow" target="_blank">50-patient series</a>). This is the one arm the non-invasive fat treatments suit: cryolipolysis thinned the arm fat layer by 15.3% after a single cycle in a seven-person pilot with the other arm as control (<a href="https://pubmed.ncbi.nlm.nih.gov/26735803/" rel="noopener nofollow" target="_blank">cryolipolysis arm pilot</a>). The test that protects you is the recoil: if the skin does not spring back, removing the fat inside it turns a full arm into a hanging one.</p>
    `,
  },
  {
    id: 'type-mixed',
    category: 'context',
    title: 'The mixed arm after weight loss',
    tldr: 'Some fat, more skin, a hang of 5–10 cm, and a history of a large weight change or a GLP-1 prescription: the commonest arm in a clinic. The rule is sequence — weight stable six to twelve months first, then energy under the skin with liposuction for the moderate hang, and excision if the ruler says severe. Treating a body still losing weight wastes the treatment.',
    focus: 'skin',
    bodyHtml: `
      <p>Most arms that reach a clinic are neither pure fat nor pure skin: a fold with some thickness that recoils slowly, a hang of 5–10 cm, and a story of a large weight loss, a pregnancy or two, or a GLP-1 prescription still running. The 2024 series treated this "moderate" arm with radiofrequency-assisted liposuction plus suction for a 15.1% reduction in circumference and a two-point gain on the satisfaction scale (<a href="https://pubmed.ncbi.nlm.nih.gov/38114083/" rel="noopener nofollow" target="_blank">50-patient series</a>), and the 120-patient series treated every class of arm that way, with circumference down 3.75 cm at six months and satisfaction up from 35% to 87% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10784384/" rel="noopener nofollow" target="_blank">120-patient RFAL series</a>). The sequence matters more than the device: weight-loss surgery patients in the excess-skin study averaged large losses before contouring, and the GLP-1 review's first recommendation is timing — laxity treated while the weight is still falling will be treated again (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845967/" rel="noopener nofollow" target="_blank">GLP-1 review</a>). Stable for six to twelve months, then the ruler decides between energy and excision.</p>
    `,
  },
  {
    id: 'type-crepe',
    category: 'context',
    title: 'The crepey arm: thin skin, a small hang, the fifties',
    tldr: 'Fine crinkling on the inner arm, a hang under 5 cm, no large weight change — the arm that ages on its own and in the sun on its outer side. The retinoid that was tested on this exact skin, the collagen stimulators and the ultrasound devices with arm studies, and no surgery: a scar is a poor trade for a mild hang.',
    focus: 'skin',
    bodyHtml: `
      <p>Crepe on the inner upper arm with a hang under 5 cm and no history of a large weight change is intrinsic ageing plus, on the outer arm, sun — the skin that thins, loses its elastic fibres and crinkles under a pinch in the fifties and sixties. It is the arm the trials of gentle treatments recruited: 36 people averaging 87 for the retinol lotion (<a href="https://pubmed.ncbi.nlm.nih.gov/17515510/" rel="noopener nofollow" target="_blank">retinol arm trial</a>), 40 women aged 40–60 with mild-to-moderate laxity and crepiness for the firming moisturiser (<a href="https://pubmed.ncbi.nlm.nih.gov/32462206/" rel="noopener nofollow" target="_blank">firming-cream trial</a>), 14 women for the ultrasound comparison (<a href="https://pubmed.ncbi.nlm.nih.gov/41025649/" rel="noopener nofollow" target="_blank">ultrasound arm trial</a>) and 30 for the calcium hydroxylapatite series (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4699473/" rel="noopener nofollow" target="_blank">30-patient CaHA series</a>). It is also the arm for which a scar is the wrong trade: the arm lift's meta-analysis rates the scar poor in one in ten, and a 3 cm hang does not justify one.</p>
    `,
  },
  {
    id: 'type-muscle',
    category: 'context',
    title: 'The soft arm: muscle lost, not skin gained',
    tldr: 'An arm that has gone soft and thin rather than loose, with a weaker grip and less strength in the sixties and seventies: the envelope has not changed, the filling has. Resistance training with enough protein rebuilds it in older women in trials, and the electromagnetic devices thicken the triceps on MRI. The hang, if there is one, is a separate problem.',
    focus: 'muscle',
    bodyHtml: `
      <p>Squeeze the back of the arm with the elbow straight and the triceps tensed: a soft, thin muscle under skin that still fits is muscle loss, not skin excess, and it is the one arm on this page whose treatment is a gym. Twelve weeks of elastic-band training added 0.70 kg of skeletal muscle and improved arm muscle quality against no exercise in 56 older women with sarcopenic obesity (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5797161/" rel="noopener nofollow" target="_blank">elastic-band trial</a>); 16 weeks of body-weight and band training improved strength and function and prevented the rise in intramuscular fat seen in controls in 22 sarcopenic women over 65 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8267934/" rel="noopener nofollow" target="_blank">sarcopenia trial</a>). The honest footnote is the menopause trial, in which ten weeks of free weights built muscle in the pre-menopausal women and not in the post-menopausal ones (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10559623/" rel="noopener nofollow" target="_blank">menopause training trial</a>) — after menopause it takes longer, more protein and more patience. The <a href="/supplements">supplements guide</a> grades protein and creatine; the muscle fills the sleeve but never shortens it.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'The self-check: the hang, the pinch, the flex and the scale',
    tldr: 'Five minutes: arm out at 90°, a ruler from the groove to the lowest point of the hang (under 5, 5–10, over 10 cm); pinch the fold for thickness and recoil; tense the triceps and squeeze it; write down the weight trend over six months and any GLP-1 dose. Photograph both arms from the front and back, held out. Then the row is chosen by the grid, not the mirror.',
    bodyHtml: `
      <p>Four measurements sort every arm on this page. The hang: stand side-on to a mirror with the arm straight out at shoulder height, and measure from the groove between biceps and triceps down to the lowest point of the fold — under 5 cm is mild, 5–10 moderate, over 10 severe in the 2024 grading (<a href="https://pubmed.ncbi.nlm.nih.gov/38114083/" rel="noopener nofollow" target="_blank">50-patient series</a>). The pinch: thick and springing back is fat with recoil, thin and staying put is skin without it. The flex: a triceps that is soft under skin that still fits is the muscle arm. The scale: a weight that has moved more than a few kilograms in six months, or a GLP-1 prescription in progress, means the arm you are measuring is not the arm you will have, and the treatment waits. Photograph both arms front and back at 90° in daylight; every treatment on this page is judged against that photograph at its own trial's timepoint, and the mild-hang arm that shrinks on the photograph after three months of training and a retinoid never needed the rest.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-resistance-training',
    category: 'home',
    title: 'Resistance training with enough protein',
    tldr: 'Twelve weeks of elastic-band training added 0.70 kg of skeletal muscle and improved arm muscle quality in 56 older women; protein at about 1.2 g/kg a day and creatine add measurably to what training builds in older adults; ten weeks of free weights built muscle in pre-menopausal but not post-menopausal women. Fills the envelope from inside; cannot shrink it.',
    evidence: 'moderate',
    focus: 'muscle',
    note: 'Best for: the soft arm and every other arm as the base — a fuller triceps makes a mild hang read as shape rather than sag',
    sessions: '2–3 sessions a week, indefinitely',
    downtime: 'None',
    cost: 'Free to €50 / month',
    bodyHtml: `
      <p>The muscle under the fold is the one part of the arm you can rebuild at home, and the trials are in the population this page serves. Fifty-six women averaging 67 with sarcopenic obesity were randomised to 12 weeks of elastic-band resistance training or no exercise: skeletal muscle mass was 0.70 kg higher in the trained group at three months and 0.72 kg at nine, with muscle quality and physical function improving alongside (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5797161/" rel="noopener nofollow" target="_blank">elastic-band trial</a>); 16 weeks of band and body-weight training improved grip strength, gait speed and isometric strength in 22 sarcopenic women over 65 while the controls gained intramuscular fat (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8267934/" rel="noopener nofollow" target="_blank">sarcopenia trial</a>). The <a href="/supplements">supplements guide</a> grades the two additions with the best evidence: protein at about 1.2 g per kilo a day, which the pooled trials in older adults show preserves and builds muscle (<a href="https://onlinelibrary.wiley.com/doi/10.1002/jcsm.12922" rel="noopener nofollow" target="_blank">protein meta-analysis</a>), and creatine, which adds measurable muscle and strength to training in older adults (<a href="https://link.springer.com/article/10.1186/s11556-025-00392-9" rel="noopener nofollow" target="_blank">creatine review</a>). The honest limit is the menopause trial — 10 weeks of free weights at 50% or 75% of maximum built fat-free mass and muscle in the pre-menopausal women and not in the post-menopausal ones, at either intensity (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10559623/" rel="noopener nofollow" target="_blank">menopause training trial</a>) — so after menopause the programme is months, not weeks, with the protein non-negotiable. Moderate: consistent trials for muscle, none for the hang, which training does not treat. Triceps extensions, presses and rows two or three times a week; the arm gets firmer and rounder, and the sleeve stays the length it was.</p>
    `,
  },
  {
    id: 'home-retinoid',
    category: 'home',
    title: 'A retinoid on the arm — the trial was done here',
    tldr: 'Topical 0.4% retinol applied to one upper inner arm and vehicle to the other, up to three times a week for 24 weeks in 36 people averaging 87, reduced fine wrinkling by 1.64 points against 0.08, with more collagen and water-binding glycosaminoglycan on biopsy; tretinoin partly restored collagen synthesis in sun-damaged forearms. The crepe, not the hang.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: the crepey inner arm at any stage — and every arm before and after a device, which works better on skin that is making collagen',
    sessions: 'Nightly, built up over two months, indefinitely',
    downtime: 'Dryness and peeling on the inner arm',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>The upper inner arm is the site where the retinoid trial with biopsies was run, because it ages without sun. Thirty-six residents of two senior facilities, mean age 87, had 0.4% retinol lotion applied to one upper inner arm and vehicle to the other by study staff up to three times a week for 24 weeks, randomised and double-blind: fine wrinkling fell by 1.64 points on the retinol arm against 0.08 on vehicle, and biopsies showed significantly more glycosaminoglycan — the matrix that binds water — and more collagen, changes the authors expected to make the skin more resistant to injury as well as better-looking (<a href="https://pubmed.ncbi.nlm.nih.gov/17515510/" rel="noopener nofollow" target="_blank">retinol arm trial</a>). On sun-damaged forearm skin, where collagen synthesis was 56% lower than in protected skin from the same people, 10–12 months of 0.1% tretinoin partly restored it (<a href="https://pubmed.ncbi.nlm.nih.gov/8336752/" rel="noopener nofollow" target="_blank">tretinoin collagen study</a>), and the face has eight randomised trials (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/" rel="noopener nofollow" target="_blank">retinoid meta-analysis</a>). Moderate: one arm trial, small and short, with a mechanism and a biopsy behind it. It treats the crepe and thickens the skin; it does not lift a fold. The <a href="/decolletage">chest guide</a> covers the same products on the same thin body skin.</p>
    `,
  },
  {
    id: 'home-sunscreen-acids',
    category: 'home',
    title: 'Sunscreen on the outer arm, lactic acid and urea on the inner',
    tldr: 'The outer upper arm takes summer sun and the inner arm does not, and they age differently: daily sunscreen slowed visible skin ageing 24% in a four-year trial, and 8% glycolic and lactic acid improved mottling and texture on face and forearms double-blind. Surface, not structure.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: 'Sunscreen every morning in summer; an acid or urea lotion most nights',
    downtime: 'None',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>The two sides of the upper arm are two different skins: the outer, deltoid side takes sun every summer and mottles, roughens and crepes with it, while the inner side ages intrinsically. For the outer side, 903 adults randomised to daily sunscreen showed 24% less visible skin ageing after four and a half years than those using it at their discretion (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">sunscreen trial</a>); for the texture of either, 8% glycolic and lactic acid creams improved mottled pigmentation, sallowness and roughness on the face and the forearms over 22 weeks against vehicle (<a href="https://pubmed.ncbi.nlm.nih.gov/8651713/" rel="noopener nofollow" target="_blank">Stiller 1996</a>), and urea and lactate have decades of body-skin trials for rough, dry skin (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8611129/" rel="noopener nofollow" target="_blank">urea review</a>). Moderate, and a surface effect: smoother, more even, better-hydrated arm skin that the retinoid works beneath. The <a href="/dry-skin">dry-skin guide</a> grades the lotions and the <a href="/sun-damage">sun-damage guide</a> the filters.</p>
    `,
  },
  {
    id: 'home-firming-cream',
    category: 'home',
    title: 'A "firming" body moisturiser — the one with a trial',
    tldr: 'Forty women aged 40–60 with mild-to-moderate arm laxity and crepiness applied a peptide firming moisturiser to one arm and a placebo moisturiser to the other twice daily for 12 weeks, randomised and double-blind: the active side improved on every graded parameter and on instruments and showed better skin density on ultrasound. One manufacturer-run trial; a degree of crepe, not a centimetre of hang.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: 'Twice daily',
    downtime: 'None',
    cost: '€40–90',
    bodyHtml: `
      <p>Most firming creams have a survey; one has a trial. Forty women aged 40–60, skin types II–V, with mild-to-moderate laxity, crepiness and photodamage of the upper arms were randomised to apply a topical body firming moisturiser to one arm and a placebo moisturiser to the other twice daily for 12 weeks, with ten biopsied: the clinical grader and the instruments found the active side improved on every parameter of the aged arm and outperformed placebo at 12 weeks, photography showed toning and firming, and ultrasound indicated improved skin density and structure (<a href="https://pubmed.ncbi.nlm.nih.gov/32462206/" rel="noopener nofollow" target="_blank">firming-cream trial</a>). Emerging: a single trial run by the product's maker, a split-body design that controls for the person but not the company, and endpoints of grade and density rather than centimetres. A reasonable moisturiser for the crepey arm on the nights the retinoid is off; the caffeine-and-retinol products sold on the same shelf without a trial are the same idea with less behind it.</p>
    `,
  },
  {
    id: 'home-weight',
    category: 'home',
    title: 'Slow loss, stable weight, and the GLP-1 clock',
    tldr: 'Excess arm skin is a consequence of how much weight was gained and how fast it left: adults after obesity surgery scored 12.3 on the excess-skin questionnaire against 1.5 in the reference population, and the GLP-1 reviews put timing first — treat laxity after the weight has been stable for months, not during the fall. Untested as an intervention; unarguable as a sequence.',
    evidence: 'emerging',
    focus: 'skin',
    note: 'Best for: anyone still losing — the treatment that costs nothing is waiting until the arm you are treating is the arm you will keep',
    sessions: 'Six to twelve months of stable weight before any procedure',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Skin stretched by years of extra weight does not follow the fat out, and the faster the fat leaves the less it follows. The Swedish excess-skin study scored a reference population at 1.5, adults with obesity at 10.5 and adults after obesity surgery at 12.3, with the arms among the sites measured and the adolescents' upper arms the one site that did not improve with the loss (<a href="https://pubmed.ncbi.nlm.nih.gov/30638792/" rel="noopener nofollow" target="_blank">excess-skin study</a>); the massive-weight-loss brachioplasty series averaged 146 pounds lost before surgery (<a href="https://pubmed.ncbi.nlm.nih.gov/20354431/" rel="noopener nofollow" target="_blank">31-patient series</a>). The GLP-1 era has made the same arm common in people who never had surgery, and the aesthetic reviews put timing at the top of the list: the optimal moment for any intervention is after the weight has settled, with a personalised, staged plan rather than a device at the first consultation (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845967/" rel="noopener nofollow" target="_blank">GLP-1 review</a>). Emerging because nobody has trialled "lose it slowly" for the arms; the physiology and the surgeons' consent forms agree on it. Slow loss with resistance training and protein to keep the muscle, then six to twelve stable months, then the ruler.</p>
    `,
  },
];

const inj: Section[] = [
  {
    id: 'inj-caha',
    category: 'inj',
    title: 'Hyperdilute calcium hydroxylapatite (Radiesse)',
    tldr: 'Thirty people had 1.5 mL of calcium hydroxylapatite per arm at two visits a month apart, open-label: 100% of subjects and evaluators were satisfied at four months and 77% were rated considerably improved on flaccidity and volume distribution; ten women gained skin elasticity from 72 to 82 units on cutometry at three months. The class has a 152-person randomised trial on the chest; the arm has series.',
    evidence: 'emerging',
    focus: 'skin',
    note: 'Best for: the crepey arm with a hang under 5 cm — two sessions, judged at four to six months, with the training and the retinoid underneath',
    sessions: '2 sessions, 1–2 months apart; repeat yearly',
    downtime: '2–5 days of swelling; bruises',
    cost: '€500–900 per session (both arms)',
    bodyHtml: `
      <p>Calcium hydroxylapatite microspheres diluted with saline and threaded under the skin of the arm stimulate collagen rather than fill, and the arm was one of the first body sites tried. In a prospective open-label study, 30 people seeking improvement of their upper arms received 1.5 mL per arm at two visits a month apart and were assessed four months after the second: all subjects and all evaluators were satisfied or very satisfied, flaccidity and volume distribution improved significantly on a new visual scale, and 77% were rated considerably improved by the investigators with 73% rating themselves the same (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4699473/" rel="noopener nofollow" target="_blank">30-patient CaHA series</a>). Ten women treated with a 1:2 dilution showed skin elasticity rising from 72 to 82 cutometer units at three months, with 90% of subjects and physicians rating the result much or very much improved (<a href="https://pubmed.ncbi.nlm.nih.gov/28915285/" rel="noopener nofollow" target="_blank">10-woman series</a>), and an expert consensus sets out dilutions and volumes for the arms (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6467620/" rel="noopener nofollow" target="_blank">hyperdilute CaHA consensus</a>). The class's controlled evidence is on the chest, where a 152-person randomised trial found 71% responders against 6% untreated (<a href="https://clinicaltrials.gov/study/NCT05163353" rel="noopener nofollow" target="_blank">Radiesse décolleté trial</a>). Emerging for the arm: open series, no control, and the <a href="/decolletage">chest guide</a> for the trial that gives the product its standing.</p>
    `,
  },
  {
    id: 'inj-plla',
    category: 'inj',
    title: 'Poly-L-lactic acid (Sculptra and others)',
    tldr: 'Twenty adults had two poly-L-lactic acid products injected into opposite upper arms in a blinded split-arm comparison: both improved texture and contour on the aesthetic scales to Day 120, raised skin elasticity by Day 90 and thickened the skin from about 1.8–2.1 to 2.7 mm on ultrasound, with no granulomas in ten biopsies. A comparison of two actives, no untreated arm.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '2–3 sessions, 4–6 weeks apart',
    downtime: '2–3 days of swelling; massage for five days',
    cost: '€600–1,000 per session (both arms)',
    bodyHtml: `
      <p>Poly-L-lactic acid is the slower collagen stimulator, and the arm now has a blinded trial — of two brands against each other. Twenty adults received bilateral upper-arm injections, one formulation per arm, randomised and blinded: subject and physician aesthetic scores rose to about 3 by Day 120 with no difference between products, ultrasound confirmed dermal remodelling, skin elasticity rose significantly in both arms by Day 90, skin thickness increased from 2.06 to 2.66 mm on one side and 1.80 to 2.70 mm on the other, water loss was unchanged, and histology in ten cases showed sparse inflammatory cells with no granulomas or crystalline residue (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13194430/" rel="noopener nofollow" target="_blank">split-arm PLLA trial</a>); the body reviews and consensus place the arms among its standard sites (<a href="https://www.tandfonline.com/doi/full/10.2147/CCID.S359813" rel="noopener nofollow" target="_blank">body PLLA review</a>). Emerging: a measured, blinded study with no untreated control and a known nodule rate across the class that thin arm skin will show. The <a href="/fillers">filler guide</a> grades the biostimulators and their lumps.</p>
    `,
  },
  {
    id: 'inj-ha-profhilo',
    category: 'inj',
    title: 'Hyaluronic complexes (Profhilo Body)',
    tldr: 'Thirty-four women aged 37–65 received a hyaluronic complex in the inner upper arms — two injections a month apart, then five at two-month intervals — over a year, single-arm: the photographic laxity scale improved significantly at month 3 and held to month 12, at least half reported moderate improvement in firmness and smoothness, and almost everyone bruised. Hydration and a grade of laxity, seven sessions a year.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '2 sessions a month apart, then every 2 months',
    downtime: '1–3 days of bumps and bruising',
    cost: '€400–600 per session (both arms)',
    bodyHtml: `
      <p>Hybrid complexes of high- and low-molecular-weight hyaluronic acid are sold for body laxity on the same promise as on the face, and the inner arm has a twelve-month study. Thirty-four women with at least early laxity and roughness of the upper inner arms had two injections a month apart followed by five at two-month intervals, with 32 completing: the photographic laxity scale for the inner arm fell significantly at month 3 and stayed down through month 12, at least half of participants reported moderate improvement in firmness, smoothness, brightness and hydration, tolerability was rated optimal, and slight bruising was near-universal (<a href="https://pubmed.ncbi.nlm.nih.gov/41457907/" rel="noopener nofollow" target="_blank">inner-arm study</a>). Emerging: a single-centre, single-arm study funded by the maker, with a laxity scale as the endpoint and seven sessions a year as the protocol. The <a href="/fillers">filler guide</a> and the <a href="/dull-skin">dull-skin guide</a> grade the same complexes on the face, where the evidence is larger.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'dev-ultrasound',
    category: 'clinic',
    title: 'Microfocused and parallel-beam ultrasound (Ultherapy, Sofwave)',
    tldr: 'In a blinded split-body randomised trial, 14 women had one arm treated with parallel-beam ultrasound and the other with microfocused ultrasound; both improved laxity and crepiness at 90 days with no difference and high satisfaction. The parallel-beam device\'s clearance study treated 46 people twice, with 93% of arms rated improved by blinded reviewers at three months; a 45-study review of ultrasound tightening reports 18–30% laxity improvement and under 5% transient side effects.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: the crepey arm with a hang under 5 cm, and the person who will not have a wound — one or two sessions, judged at three to six months',
    sessions: '1–2 sessions; repeat at 12–18 months',
    downtime: 'None beyond redness; sore for days',
    cost: '€1,000–2,500 (both arms)',
    bodyHtml: `
      <p>Ultrasound heats the dermis in points or lines without touching the surface, which suits an arm that must go into a sleeve the next day. The arm has a randomised comparison: 14 women had one upper inner arm treated with high-intensity parallel-beam ultrasound and the other with microfocused ultrasound with visualisation, blinded, in a single session; at Day 90 both had improved laxity and crepiness by investigator and subject rating with no difference between devices, most subjects were satisfied, pain did not differ and the parallel-beam treatment was quicker (<a href="https://pubmed.ncbi.nlm.nih.gov/41025649/" rel="noopener nofollow" target="_blank">ultrasound arm trial</a>). The parallel-beam device's American clearance for the upper arm rested on 46 people treated twice, one to three weeks apart, with 93% of arms rated improved or very much improved by blinded reviewers three months after the second session (<a href="https://sofwave.com/news/sofwave-medical-receives-fda-clearance-of-superb-technology-for-improvement-of-the-appearance-of-skin-laxity-on-the-upper-arm" rel="noopener nofollow" target="_blank">clearance announcement</a>). A 2025 systematic review of 45 ultrasound studies puts skin-laxity improvement at 18–30% and transient redness, swelling or discomfort under 5% (<a href="https://pubmed.ncbi.nlm.nih.gov/40184185/" rel="noopener nofollow" target="_blank">ultrasound systematic review</a>), and a six-woman pilot found cutometer elasticity improved at the upper arm four weeks after deep-focus HIFU (<a href="https://pubmed.ncbi.nlm.nih.gov/27306500/" rel="noopener nofollow" target="_blank">HIFU body pilot</a>). Moderate: a small randomised comparison of two actives, a manufacturer's clearance study with blinded photographs, and no untreated control anywhere. A grade of laxity on a scale, not a centimetre of hang.</p>
    `,
  },
  {
    id: 'dev-cryolipolysis',
    category: 'clinic',
    title: 'Cryolipolysis for the fat-dominant arm',
    tldr: 'One cycle of a flat vacuum applicator thinned the arm fat layer by 15.3% — about 2 mm — at eight weeks in a seven-person pilot with the other arm as control; the device is cleared for the upper arms and its class has a pivotal trial and a meta-analysis elsewhere, with paradoxical fat overgrowth as its rare signature complication. Fat, not skin: on an arm that does not recoil it makes the hang worse.',
    evidence: 'moderate',
    focus: 'fat',
    note: 'Best for: the full, firm arm whose skin springs back from a pinch — never the deflated one',
    sessions: '1–2 cycles per arm, 8 weeks apart',
    downtime: 'Numbness and bruising for days to weeks',
    cost: '€400–800 per arm per cycle',
    bodyHtml: `
      <p>Controlled cooling kills a proportion of the fat cells under the applicator and the body clears them over weeks, which on an arm with good skin means a smaller arm. The arm-specific evidence is a pilot: seven people had one upper arm treated with a flat vacuum applicator for a single cycle and the other left as control, and at eight weeks ultrasound showed the fat layer thinner at 83% of measured sites, by a mean 15.3% or 2.03 mm (<a href="https://pubmed.ncbi.nlm.nih.gov/26735803/" rel="noopener nofollow" target="_blank">cryolipolysis arm pilot</a>); the reviews list the upper arm among the cleared sites (<a href="https://onlinelibrary.wiley.com/doi/full/10.1111/jocd.16039" rel="noopener nofollow" target="_blank">cryolipolysis review</a>). The class evidence is larger — the submental pivotal trial and a meta-analysis in the <a href="/double-chin">double-chin guide</a> (<a href="https://pubmed.ncbi.nlm.nih.gov/26607045/" rel="noopener nofollow" target="_blank">pivotal study</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/40473257/" rel="noopener nofollow" target="_blank">meta-analysis</a>) — and so is the class's one serious complication, paradoxical adipose hyperplasia, a firm enlargement of the treated fat months later that is rare and needs liposuction to remove (<a href="https://academic.oup.com/asjopenforum/article/doi/10.1093/asjof/ojaf142/8307545" rel="noopener nofollow" target="_blank">hyperplasia meta-analysis</a>). Moderate for fat on the arm with recoil; the wrong treatment for the arm without it, because removing filling from a loose envelope lengthens the hang.</p>
    `,
  },
  {
    id: 'dev-rf',
    category: 'clinic',
    title: 'Radiofrequency: monopolar, tripolar and subdermal',
    tldr: 'Twelve people with moderate-to-severe laxity of the back of the upper arm had a single subdermal monopolar radiofrequency treatment to both arms and improved on a five-point laxity scale at 30 and 90 days by a non-treating physician, with bruising in 13%; eight weekly tripolar sessions reduced arm circumference 1.99 cm in 12 women. Small, open, and a grade on a scale.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '1 (subdermal) to 8 weekly (surface) sessions',
    downtime: 'None to a few days of bruising',
    cost: '€300–600 per session; €1,500–3,000 subdermal',
    bodyHtml: `
      <p>Radiofrequency heats the dermis by electrical resistance, from the surface or from a probe passed under the skin. The arm studies are small and uncontrolled. Twelve subjects aged 18–65 with moderate-to-severe laxity of the posterior upper arms had one subdermal, thermistor-controlled monopolar treatment to both arms: a non-treating physician recorded significant improvement on a five-point laxity scale at Days 30 and 90, subjects rated firmness, texture and laxity improved and most were satisfied to extremely satisfied, and adverse events at Day 7 were redness in 4%, contour irregularity in 4% and bruising in 13%, all resolving (<a href="https://pubmed.ncbi.nlm.nih.gov/27560292/" rel="noopener nofollow" target="_blank">subdermal RF study</a>). Twelve women had eight weekly surface treatments with a tripolar device on the front and back of the upper arms and lost a mean 1.99 cm of circumference (<a href="https://jddonline.com/articles/improving-upper-arm-skin-laxity-using-a-tripollar-radiofrequency-device-S1545961615P1463X" rel="noopener nofollow" target="_blank">tripolar RF study</a>). Emerging: no control arms, a dozen subjects each, and circumference as an endpoint that fat loss also moves. The <a href="/sagging-skin">sagging-skin guide</a> grades the same devices on the face and neck with more behind them.</p>
    `,
  },
  {
    id: 'dev-hifem',
    category: 'clinic',
    title: 'Electromagnetic muscle stimulation with radiofrequency (Emsculpt Neo)',
    tldr: 'Thirty-four people had four 30-minute sessions of simultaneous electromagnetic stimulation and radiofrequency to both upper arms a week apart, measured on MRI: at three months the triceps was 23.9% thicker and the fat layer 25.5% thinner in the 25 who completed, with 85% satisfied. The maker\'s study, no control, and a filling for the envelope rather than a shortening of it.',
    evidence: 'emerging',
    focus: 'muscle',
    note: 'Best for: the soft arm that will not train — four sessions buy what eight weeks in a gym would, without the gym\'s other benefits',
    sessions: '4 sessions, a week apart; maintenance every few months',
    downtime: 'None; sore as after a workout',
    cost: '€300–500 per session',
    bodyHtml: `
      <p>High-intensity focused electromagnetic fields contract the muscle thousands of times in a session, and the newer devices add radiofrequency heating of the fat above it. The arm study is the manufacturer's multicentre trial: 34 subjects had four 30-minute bilateral treatments over the upper arms a week apart, and MRI at one month in 28 showed a 22.3% decrease in fat thickness and a 21.5% increase in triceps thickness; at three months in the 25 who completed, fat was down 25.5% and muscle up 23.9%, with 85% satisfaction and a pain score of 1.6 out of 10 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10005810/" rel="noopener nofollow" target="_blank">HIFEM arm study</a>); an earlier MRI case study reported biceps up 17.1%, triceps 10.2% and arm fat down 12.8% (<a href="https://jddonline.com/articles/mri-assessment-of-arm-and-calf-muscle-toning-with-high-intensity-focused-electromagnetic-technology-S1545961620P0556X/" rel="noopener nofollow" target="_blank">MRI case study</a>). Emerging: uncontrolled, funded and measured by the maker, and a treatment for the filling — the same filling that resistance training builds with the bone, tendon and metabolic benefits the device does not deliver. Nothing here shortens the skin; on the soft arm with a mild hang it makes the hang read as shape.</p>
    `,
  },
  {
    id: 'dev-rf-microneedling',
    category: 'clinic',
    title: 'Radiofrequency microneedling',
    tldr: 'A microneedle radiofrequency device already used for cellulite was reported at a laser-medicine congress as a single treatment for laxity of the upper arms, knees and back; the arm has no published trial, the face has a 12-trial meta-analysis, and the American regulator has issued an alert about burns, scarring and nerve injury from the devices. Plausible, unproven on the arm, and a device that must be turned down for thin skin.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '1–3 sessions, 4–6 weeks apart',
    downtime: '2–5 days of redness and swelling',
    cost: '€500–900 per session (both arms)',
    bodyHtml: `
      <p>Insulated needles deliver radiofrequency heat at depth and leave the surface largely intact, which is the appeal on body skin that scars. The arm evidence is a conference report: a fractional microneedle radiofrequency device shown effective for cellulite was assessed as a single treatment for body skin laxity above the knee, on the upper arms and on the upper back, and presented as promising for these hard-to-treat areas (<a href="https://www.aslms.org/about-aslms/media-center/news/2021/04/21/microneedle-radiofrequency-device-shows-promise-for-non-invasive-skin-tightening-and-body-contouring-in-hard-to-treat-areas" rel="noopener nofollow" target="_blank">congress report</a>). The face has the trials — a meta-analysis of 12 randomised trials for wrinkles and laxity (<a href="https://pubmed.ncbi.nlm.nih.gov/35426044/" rel="noopener nofollow" target="_blank">12-RCT meta-analysis</a>) — and the regulator has the warnings: an American alert on burns, scarring, fat loss and nerve injury from radiofrequency microneedling devices (<a href="https://www.dermatologytimes.com/view/fda-alerts-clinicians-to-serious-complications-with-radiofrequency-microneedling-devices" rel="noopener nofollow" target="_blank">FDA alert</a>). Emerging on the arm; the <a href="/microneedling">microneedling guide</a> grades the device where it is studied.</p>
    `,
  },
];

const surg: Section[] = [
  {
    id: 'surg-rfal',
    category: 'surg',
    title: 'Radiofrequency- and plasma-assisted liposuction (BodyTite, Renuvion, argon plasma)',
    tldr: 'Energy delivered under the skin during liposuction contracts the envelope: a tattooed-grid pilot in 12 patients measured the inner-arm surface down 33.5% and the hang halved at one year; a bilateral comparison put radiofrequency at 13–15% surface reduction against 8–11% for aggressive liposuction; 120 consecutive patients lost 3.75 cm of circumference at six months with satisfaction up from 35% to 87% and none converted to an arm lift. The moderate hang without a scar.',
    evidence: 'moderate',
    focus: 'surgery',
    note: 'Best for: the 5–10 cm hang with some fat and a refusal of the scar — under local anaesthetic, judged at six months to a year',
    sessions: 'Once',
    downtime: '1–2 weeks in a compression sleeve; bruising for weeks',
    cost: '€3,500–7,000',
    bodyHtml: `
      <p>A probe passed under the skin heats the underside of the dermis while the fat is suctioned, and the skin contracts over the following months — the one non-excisional method with a ruler on its result. The pilot tattooed the inner arm of 12 consecutive patients in the surgeons' stages 2b, 3 and 4, measured the surface with a 3D camera, treated without any skin excision in the tattooed zone, and found the surface area down 33.5% and the pendulous hang shortened 50% at one year; the stage 2b and 4 arms were managed without a scar, the stage 3 arms still needed a short-scar lift (<a href="https://pubmed.ncbi.nlm.nih.gov/22231416/" rel="noopener nofollow" target="_blank">RFAL pilot</a>). Ten women had radiofrequency-assisted liposuction on one arm and aggressive superficial liposuction on the other: at one year the surface area was down 15.0% front and 13.1% back with radiofrequency against 10.9% and 8.1% with liposuction alone, with no complications and satisfaction in all (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4527633/" rel="noopener nofollow" target="_blank">bilateral comparison</a>). In the largest series, 120 consecutive patients across every class of arm were treated with radiofrequency-assisted liposuction, none required conversion to brachioplasty, circumference fell a mean 3.75 cm at six months and satisfaction on the arm questionnaire rose from 35% to 87% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10784384/" rel="noopener nofollow" target="_blank">120-patient RFAL series</a>). The plasma devices do the same job with a different energy: argon plasma with liposuction in 15 patients reduced ptosis 29%, diameter 15% and tissue thickness 43% at six months with satisfaction up 85% and no major complications (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12378442/" rel="noopener nofollow" target="_blank">argon plasma series</a>), and helium plasma improved contour and laxity on the treated against the untreated side in four of five arm patients at six months (<a href="https://dx.doi.org/10.1177/07488068211031096" rel="noopener nofollow" target="_blank">helium plasma arm study</a>), with the regulator's safety communication on its use in mind (<a href="https://www.fda.gov/medical-devices/safety-communications/update-use-renuvionj-plasma-device-certain-aesthetic-procedures-fda-safety-communication" rel="noopener nofollow" target="_blank">FDA safety communication</a>).</p>
      <p>Moderate: measured, consistent, surgeon-run series with one bilateral comparison and no randomised trial against an arm lift. A third of the surface and half the hang is a real result and not a full one; the honest promise is a moderate arm made mild, not a severe arm made normal, and the <a href="/sagging-skin">sagging-skin guide</a> grades the same energies on the neck.</p>
    `,
  },
  {
    id: 'surg-liposuction',
    category: 'surg',
    title: 'Liposuction alone for the full arm',
    tldr: 'For the arm with fat under skin that recoils, suction alone is the surgeons\' first stage: 6.8% off the circumference in the mild group of the 2024 series, and the treatment for stages 1 and 2a in the classification. Aggressive superficial liposuction contracts skin too — 8–11% of surface at one year — with a steeper learning curve and more contour irregularities than the energy-assisted version.',
    evidence: 'moderate',
    focus: 'fat',
    note: 'Best for: the full, firm arm with good recoil — and never the deflated one, which hangs more after',
    sessions: 'Once',
    downtime: '1–2 weeks in a compression sleeve',
    cost: '€2,500–5,000',
    bodyHtml: `
      <p>Suction-assisted liposuction removes the fat and lets skin with recoil shrink around what is left. In the classification it is the whole treatment for stage 1 and 2a arms and the first stage before excision for the heavier ones (<a href="https://pubmed.ncbi.nlm.nih.gov/17496609/" rel="noopener nofollow" target="_blank">brachial ptosis classification</a>); in the 2024 series the mild group treated with suction alone lost 6.8% of circumference with a modest gain on the arm questionnaire, against 15.1% and 17.3% for the energy-assisted and excisional groups (<a href="https://pubmed.ncbi.nlm.nih.gov/38114083/" rel="noopener nofollow" target="_blank">50-patient series</a>). Pushed superficially, liposuction also contracts skin — 10.9% front and 8.1% back at one year in the bilateral comparison — at the price of a higher complication rate, contour irregularities and a steeper learning curve than the radiofrequency version (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4527633/" rel="noopener nofollow" target="_blank">bilateral comparison</a>), and in the brachioplasty meta-analysis adding liposuction lowered the incidence of certain complications (<a href="https://pubmed.ncbi.nlm.nih.gov/34936607/" rel="noopener nofollow" target="_blank">brachioplasty meta-analysis</a>). Moderate: consistent surgical series, no trial, and a treatment that is right or wrong entirely on the pinch test — a deflated arm liposuctioned is a longer hang.</p>
    `,
  },
  {
    id: 'surg-brachioplasty',
    category: 'surg',
    title: 'Brachioplasty (arm lift): the only treatment that removes skin',
    tldr: 'Across 29 observational studies and 1,578 patients: poor scarring 9.9%, recurrent hang 7.8%, wound separation 6.8%, seroma 5.9%, infection 3.6%, nerve symptoms 2.5%, lymphoedema 2.5%, revision for looks 7.5%; medial incisions had more complications and adjunctive liposuction fewer. In a 31-patient massive-weight-loss series, satisfaction was 4.3 of 5, the scar 3.9, and 94% would do it again. The severe hang, at the price of a line down the inner arm.',
    evidence: 'moderate',
    focus: 'surgery',
    note: 'Best for: the deflated arm with a hang over 10 cm, weight stable for six to twelve months, and a person who has seen the scar and still wants the arm',
    sessions: 'Once; scar matures over 12–18 months',
    downtime: '2–3 weeks; no lifting for six; compression for weeks',
    cost: '€5,000–9,000',
    bodyHtml: `
      <p>The arm lift excises the excess skin and fat along the inner or back of the arm from armpit toward elbow, in a straight, curved or L-shaped pattern, with liposuction of the rest — the only treatment on this page that shortens the envelope rather than heating it (<a href="https://www.ncbi.nlm.nih.gov/books/NBK585115/" rel="noopener nofollow" target="_blank">StatPearls</a>). Its evidence is large and observational. The meta-analysis of 29 studies in 1,578 patients estimated aberrant scarring at 9.9%, ptosis or recurrence 7.8%, wound dehiscence 6.8%, seroma 5.9%, infection 3.6%, nerve-related complications 2.5%, lymphoedema or lymphocele 2.5%, skin necrosis or delayed healing 2.3% and haematoma 2.1%, with reoperation for aesthetic reasons in 7.5% and for complications in 1.6%, medial incisions carrying more risk and adjunctive liposuction less (<a href="https://pubmed.ncbi.nlm.nih.gov/34936607/" rel="noopener nofollow" target="_blank">brachioplasty meta-analysis</a>). The satisfaction data come from the massive-weight-loss series: 31 patients averaging 146 pounds lost, a 22% complication rate and 16% revision rate mostly for scars, and satisfaction of 4.3 out of 5 overall, 4.9 for symptoms and 3.9 for the scar, with 94% more comfortable in short sleeves and 94% willing to repeat it (<a href="https://pubmed.ncbi.nlm.nih.gov/20354431/" rel="noopener nofollow" target="_blank">31-patient series</a>). Scar placement decides the rest: in 90 patients divided by incision, the postero-medial approach was rated excellent or very good by 92% against 72% for medial and 58% for posterior (<a href="https://pubmed.ncbi.nlm.nih.gov/40826295/" rel="noopener nofollow" target="_blank">incision comparison</a>), the 2025 review of 15 massive-weight-loss studies favours liposuction-assisted excision with a postero-medial scar (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12459545/" rel="noopener nofollow" target="_blank">arm contouring review</a>), and for the mild-to-moderate arm a minimal-incision version hidden in the armpit reduced circumference 15–25% with flat scars in a nine-patient series (<a href="https://pubmed.ncbi.nlm.nih.gov/19331908/" rel="noopener nofollow" target="_blank">minimal-incision series</a>).</p>
      <p>Moderate: no randomised trial, consistent large series, and the trade-off is the point — a full result and a scar the patients themselves rate lowest of everything about the operation. The <a href="/sagging-skin">sagging-skin guide</a> grades excision on the face, where the scar hides better.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-scar-nerves',
    category: 'safety',
    title: 'The arm-lift scar, the nerves and the lymph',
    tldr: 'The scar runs the length of the inner or back of the arm, is under tension in a hanging position and takes 12–18 months to flatten and fade; it was rated poor in 9.9% and revised in 7.5% across 1,578 patients, and in the satisfaction series scored lowest of everything at 3.9 of 5. Sensory nerve symptoms and lymphoedema each affected about 2.5%. See the surgeon\'s scars on other arms before agreeing to one on yours.',
    bodyHtml: `
      <p>The arm lift's price is on the inside of the arm. The incision runs from the armpit toward the elbow along the inner or posterior-inner surface, and because the arm hangs and moves the scar is under tension for months: the textbooks put scar maturation at 12–18 months, longer than most sites (<a href="https://www.ncbi.nlm.nih.gov/books/NBK585115/" rel="noopener nofollow" target="_blank">StatPearls</a>). Across 29 studies the scar was aberrant in 9.9% and revised for appearance in 7.5%, with wound separation in 6.8% (<a href="https://pubmed.ncbi.nlm.nih.gov/34936607/" rel="noopener nofollow" target="_blank">brachioplasty meta-analysis</a>), and in the series that asked, patients who were otherwise delighted rated the scar 3.9 out of 5 (<a href="https://pubmed.ncbi.nlm.nih.gov/20354431/" rel="noopener nofollow" target="_blank">31-patient series</a>). The medial antebrachial cutaneous nerve runs where the incision does, and nerve-related complications — numbness or altered sensation on the inner arm — affected 2.5%; the lymphatics of the arm run the same route, and lymphoedema or a lymph collection affected another 2.5%. Where the incision sits decides much of this: medial placement raised complications in the meta-regression, and the postero-medial approach was rated best by patients in the 90-patient comparison (<a href="https://pubmed.ncbi.nlm.nih.gov/40826295/" rel="noopener nofollow" target="_blank">incision comparison</a>). Ask to see the surgeon's own arm scars at a year, ask which nerve they preserve and how, and treat a keloid or hypertrophic scar anywhere on your body as a reason to stop at the energy rows.</p>
    `,
  },
  {
    id: 'safety-devices',
    category: 'safety',
    title: 'Burns, nerves and the plasma warning: energy under the skin',
    tldr: 'Radiofrequency and plasma probes under the skin heat the underside of the dermis to contract it and can burn it through: contour irregularities and bruising in the subdermal radiofrequency study, a regulator\'s safety communication on the helium plasma device, and an alert on burns, scarring, fat loss and nerve injury from radiofrequency microneedling. Temperature monitoring, an operator with a series, and the ulnar nerve left alone.',
    bodyHtml: `
      <p>Every subdermal energy device on this page works by heating tissue to the edge of injury, and the arm has less tissue than most sites between the probe and the skin, the nerves and the vessels. The subdermal radiofrequency study recorded contour irregularity and bruising in its 24 arms (<a href="https://pubmed.ncbi.nlm.nih.gov/27560292/" rel="noopener nofollow" target="_blank">subdermal RF study</a>), the argon plasma series measured skin temperature to keep it within a safe threshold (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12378442/" rel="noopener nofollow" target="_blank">argon plasma series</a>), the American regulator issued a safety communication on the helium plasma device's use in aesthetic procedures (<a href="https://www.fda.gov/medical-devices/safety-communications/update-use-renuvionj-plasma-device-certain-aesthetic-procedures-fda-safety-communication" rel="noopener nofollow" target="_blank">FDA safety communication</a>) and an alert on burns, scarring, fat loss and nerve injury from radiofrequency microneedling devices (<a href="https://www.dermatologytimes.com/view/fda-alerts-clinicians-to-serious-complications-with-radiofrequency-microneedling-devices" rel="noopener nofollow" target="_blank">FDA alert</a>). The ulnar nerve runs behind the inner elbow and the radial nerve spirals around the back of the humerus; both are reasons the treated zone stops well short of the elbow. The safeguards are the operator's series in arms specifically, external and internal temperature monitoring, and a refusal to chase a severe hang with a probe that was built for a moderate one.</p>
    `,
  },
  {
    id: 'safety-timing-weight',
    category: 'safety',
    title: 'Timing: weight stable first, GLP-1 drugs and the surgeon\'s checklist',
    tldr: 'Contouring a body still losing weight treats an arm that will not exist in six months; surgeons want a stable weight for six to twelve months, a body-mass index in a safe range, no smoking and controlled nutrition after bariatric surgery. Semaglutide and its relatives slow the stomach and are paused before a general anaesthetic on most anaesthetists\' advice. The cheapest treatment on the page is waiting.',
    bodyHtml: `
      <p>Every surgical series on this page was of patients whose weight had settled — the massive-weight-loss series averaged 146 pounds lost before the arm was touched (<a href="https://pubmed.ncbi.nlm.nih.gov/20354431/" rel="noopener nofollow" target="_blank">31-patient series</a>) — and the textbooks list a stable weight, a safe body-mass index, no smoking and repleted nutrition among the preconditions for brachioplasty (<a href="https://www.ncbi.nlm.nih.gov/books/NBK585115/" rel="noopener nofollow" target="_blank">StatPearls</a>). The GLP-1 review adds the drug-era version: interventions timed to the end of the weight loss rather than its middle, and a plan that expects the face and body to keep changing while the dose does (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845967/" rel="noopener nofollow" target="_blank">GLP-1 review</a>). Two practical rules follow. The energy devices and the stimulators are wasted on an arm that will deflate further, and an arm lift on a body that regains ten kilos refills the sleeve; and the GLP-1 drugs themselves slow gastric emptying, so the anaesthetist needs to know about them and will usually ask for a pause before an operation. Six to twelve stable months, the ruler, then the row.</p>
    `,
  },
  {
    id: 'safety-stimulators',
    category: 'safety',
    title: 'Nodules and lumps from the injectables in thin arm skin',
    tldr: 'Poly-L-lactic acid formed nodules in 5–29% of patients across the biostimulator literature and none in the ten arm biopsies of the split-arm trial; calcium hydroxylapatite is diluted for the arm to avoid them; the hyaluronic complexes bruised almost everyone in the inner-arm study. Dilution, depth, massage, and an injector who treats arms — an arm lump shows in a sleeveless dress as surely as a hang does.',
    bodyHtml: `
      <p>The injectables' risk on the arm is the same as everywhere on thin body skin: the product showing. Poly-L-lactic acid's nodules were most notable across the biostimulator literature at 4.7–28.6% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13214704/" rel="noopener nofollow" target="_blank">biostimulator review</a>), though the split-arm trial's ten biopsies found no granulomas or crystalline residue with either product (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13194430/" rel="noopener nofollow" target="_blank">split-arm PLLA trial</a>); calcium hydroxylapatite is hyperdiluted for the arms in the consensus precisely to avoid palpable product (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6467620/" rel="noopener nofollow" target="_blank">hyperdilute CaHA consensus</a>); and the hyaluronic complex study recorded slight bruising in almost every participant across seven sessions (<a href="https://pubmed.ncbi.nlm.nih.gov/41457907/" rel="noopener nofollow" target="_blank">inner-arm study</a>). The <a href="/fillers">filler guide</a> covers the products and the dissolving; the practical rule is that the arm is a skin-quality site, that the injector should treat arms weekly, and that a firm lump appearing weeks later is assessed rather than massaged on faith.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-exercise',
    category: 'faq',
    title: 'Can exercise tighten loose arm skin?',
    tldr: 'No, and yes: training does not shorten the skin, which is a separate organ from the muscle beneath it, but a fuller triceps fills the envelope so a mild hang reads as shape. In older women, twelve weeks of band training added 0.70 kg of muscle; after menopause it takes longer and more protein.',
    bodyHtml: `
      <p>The fold below a horizontal arm is skin and fat hanging from the groove between the muscles; the triceps sits under its fascia and does not sag, so no exercise reaches the thing that hangs. What exercise does is fill: 12 weeks of elastic-band training added 0.70 kg of skeletal muscle in 56 older women (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5797161/" rel="noopener nofollow" target="_blank">elastic-band trial</a>), and a fuller arm makes a hang of a few centimetres read as the shape of the arm rather than an empty sleeve. The menopause trial's warning stands — ten weeks was not enough for the post-menopausal women (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10559623/" rel="noopener nofollow" target="_blank">menopause training trial</a>) — so the plan is months, with protein at 1.2 g per kilo. A hang over 10 cm is unmoved by any of it.</p>
    `,
  },
  {
    id: 'faq-creams',
    category: 'faq',
    title: 'Do firming creams work on arms?',
    tldr: 'One does, modestly, in one trial: a peptide firming moisturiser beat its placebo on graded crepe, laxity and photodamage and on ultrasound density in 40 women over 12 weeks. The retinoid has the better trial, on this exact skin. Neither moves a centimetre of hang.',
    bodyHtml: `
      <p>The firming moisturiser with a trial improved every graded parameter of the aged upper arm against a placebo moisturiser on the other arm in 40 women aged 40–60 (<a href="https://pubmed.ncbi.nlm.nih.gov/32462206/" rel="noopener nofollow" target="_blank">firming-cream trial</a>), and the 0.4% retinol lotion reduced fine wrinkling on the upper inner arm with more collagen on biopsy in 36 people (<a href="https://pubmed.ncbi.nlm.nih.gov/17515510/" rel="noopener nofollow" target="_blank">retinol arm trial</a>). Both treat crepe and thickness; the hang is a matter of centimetres of skin, and creams work in fractions of a millimetre. The caffeine and "lifting" products without a trial are the same category with nothing behind them.</p>
    `,
  },
  {
    id: 'faq-best-nonsurgical',
    category: 'faq',
    title: 'What is the best non-surgical treatment for loose arms?',
    tldr: 'For a hang under 5 cm with crepe, ultrasound (the randomised arm comparison and the 46-person clearance study) or a course of calcium hydroxylapatite; for a full arm with good recoil, cryolipolysis; for a hang of 5–10 cm, radiofrequency-assisted liposuction under local anaesthetic, which is minimally invasive rather than non-invasive and the only one with a ruler on its result.',
    bodyHtml: `
      <p>Sort by the grid first. A mild hang with crepe suits the devices that heat the dermis without a wound — the ultrasound comparison found both devices improved laxity and crepiness at 90 days (<a href="https://pubmed.ncbi.nlm.nih.gov/41025649/" rel="noopener nofollow" target="_blank">ultrasound arm trial</a>) — or the collagen stimulators. A full, firm arm suits fat reduction (<a href="https://pubmed.ncbi.nlm.nih.gov/26735803/" rel="noopener nofollow" target="_blank">cryolipolysis arm pilot</a>). A moderate hang is beyond the non-invasive rows, and the treatment with measured contraction — a third of the surface, half the hang — needs a cannula and a local anaesthetic (<a href="https://pubmed.ncbi.nlm.nih.gov/22231416/" rel="noopener nofollow" target="_blank">RFAL pilot</a>). Nothing without a wound closes a hang over 10 cm.</p>
    `,
  },
  {
    id: 'faq-scar',
    category: 'faq',
    title: 'Where is the arm-lift scar, and how bad is it?',
    tldr: 'Along the inner or posterior-inner arm from armpit toward elbow, visible with the arm raised, poor in about one in ten, revised in 7.5%, and 12–18 months to fade; patients who rated the operation 4.3 of 5 rated the scar 3.9. A postero-medial placement was rated best in a 90-patient comparison, and a minimal-incision version hides in the armpit for mild-to-moderate arms.',
    bodyHtml: `
      <p>The meta-analysis puts aberrant scarring at 9.9% and aesthetic revision at 7.5% across 1,578 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/34936607/" rel="noopener nofollow" target="_blank">brachioplasty meta-analysis</a>); the satisfaction series scored the scar 3.9 against 4.3 overall and 4.9 for symptoms, with 94% willing to repeat the operation anyway (<a href="https://pubmed.ncbi.nlm.nih.gov/20354431/" rel="noopener nofollow" target="_blank">31-patient series</a>); the incision comparison favoured the postero-medial line (<a href="https://pubmed.ncbi.nlm.nih.gov/40826295/" rel="noopener nofollow" target="_blank">incision comparison</a>); and the minimal-incision technique confines the scar to the armpit at the cost of treating only the upper part of the arm (<a href="https://pubmed.ncbi.nlm.nih.gov/19331908/" rel="noopener nofollow" target="_blank">minimal-incision series</a>). Ask to see a year-old scar on an arm like yours; a surgeon who does many will have them.</p>
    `,
  },
  {
    id: 'faq-glp1',
    category: 'faq',
    title: 'I am losing weight on a GLP-1 drug — when should I treat my arms?',
    tldr: 'After the loss, not during it: six to twelve months of stable weight, muscle kept with protein and resistance training on the way down, and the ruler at the end. Devices and injectables on a still-deflating arm are paid for twice; an arm lift on a weight that returns refills the sleeve.',
    bodyHtml: `
      <p>The reviews of GLP-1 aesthetics put timing first and multimodal, staged plans second (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845967/" rel="noopener nofollow" target="_blank">GLP-1 review</a>), and the surgical preconditions are a stable weight and repleted nutrition (<a href="https://www.ncbi.nlm.nih.gov/books/NBK585115/" rel="noopener nofollow" target="_blank">StatPearls</a>). On the way down, the job is to lose fat rather than muscle — protein at 1.2 g per kilo and two or three sessions of resistance training a week — because a triceps kept is a sleeve that hangs less. At the end, the hang and the pinch decide between nothing, energy and excision; and the anaesthetist is told about the drug before any operation.</p>
    `,
  },
  {
    id: 'faq-percent',
    category: 'faq',
    title: 'What does "30% skin tightening" actually mean?',
    tldr: 'In the one study that measured it properly, a third less surface area on a tattooed grid of the inner arm a year after radiofrequency-assisted liposuction, and half the vertical hang — measured with a caliper, in 12 people. Devices quoted at "up to" percentages without a grid are quoting a grade on a five-point scale or a circumference that fat loss also moves.',
    bodyHtml: `
      <p>The tattooed-grid pilot is the reference: 33.5% surface reduction and 50% hang shortening at one year in 12 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/22231416/" rel="noopener nofollow" target="_blank">RFAL pilot</a>), with the bilateral comparison at 13–15% for the same device and 8–11% for liposuction alone (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4527633/" rel="noopener nofollow" target="_blank">bilateral comparison</a>). The non-invasive devices report a grade on a laxity scale, a percentage of arms "improved" on blinded photographs or a circumference, none of which is a percentage of skin. Ask what was measured, on how many arms, and against what.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until each shows?',
    tldr: 'Training and the retinoid: three to six months on the photograph, longer after menopause; the firming cream: 12 weeks; ultrasound and radiofrequency: 90 days; cryolipolysis: eight weeks; the stimulators: four to six months; radiofrequency-assisted liposuction: six months to a year for the contraction; the arm lift: two weeks to wear it, 12–18 months for the scar.',
    bodyHtml: `
      <p>The trials set the clocks: the retinol arm trial reported at 24 weeks with change from four (<a href="https://pubmed.ncbi.nlm.nih.gov/17515510/" rel="noopener nofollow" target="_blank">retinol arm trial</a>), the firming cream at 12 (<a href="https://pubmed.ncbi.nlm.nih.gov/32462206/" rel="noopener nofollow" target="_blank">firming-cream trial</a>), the ultrasound comparison at 90 days (<a href="https://pubmed.ncbi.nlm.nih.gov/41025649/" rel="noopener nofollow" target="_blank">ultrasound arm trial</a>), the cryolipolysis pilot at eight weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/26735803/" rel="noopener nofollow" target="_blank">cryolipolysis arm pilot</a>), the calcium hydroxylapatite series at four months after the second session (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4699473/" rel="noopener nofollow" target="_blank">30-patient CaHA series</a>), the RFAL series at six months and the pilot at a year (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10784384/" rel="noopener nofollow" target="_blank">120-patient RFAL series</a>), and the arm-lift scar at 12–18 months (<a href="https://www.ncbi.nlm.nih.gov/books/NBK585115/" rel="noopener nofollow" target="_blank">StatPearls</a>). Judge each against the 90° photograph at its own timepoint.</p>
    `,
  },
  {
    id: 'faq-cost-ladder',
    category: 'faq',
    title: 'What does it cost, from cheapest to dearest?',
    tldr: 'Free (training, waiting for a stable weight) → €10–30 a month for a retinoid, protein and creatine → €40–90 a firming cream → €300–600 a radiofrequency or electromagnetic session → €400–800 a cryolipolysis cycle per arm → €500–1,000 a stimulator session → €1,000–2,500 ultrasound → €2,500–5,000 liposuction → €3,500–7,000 energy-assisted liposuction → €5,000–9,000 an arm lift. The measured contraction and the removed skin are the two dearest rungs.',
    bodyHtml: `
      <p>The habits are free and build the filling; the products cost a coffee a week and treat the crepe; the non-invasive devices cost hundreds a session for a grade on a scale; the stimulators cost a thousand or two for a course; and the two treatments that change the hang by centimetres — energy under the skin with liposuction, and excision — cost several thousand euros once, the second with a scar. Prices are typical Western European ranges for both arms and vary by city, clinic and anaesthetic.</p>
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
    intro: 'The hanging arm is skin, fat and muscle in different proportions — and a ruler at 90°, a pinch and a squeeze of the triceps tell you which of the three drivers is yours.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which arm do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: the filling, the crepe and the clock',
    intro: 'The training that fills the envelope, the retinoid that was trialled on this exact skin, the one firming cream with a trial, and the wait that costs nothing.',
    sections: home,
  },
  {
    id: 'inj',
    title: 'Collagen stimulators',
    intro: 'The three injectables with arm studies — open series and a blinded comparison, none against an untreated arm — for the crepey arm with a small hang.',
    sections: inj,
  },
  {
    id: 'clinic',
    title: 'Devices: ultrasound, cold, heat and current',
    intro: 'The energy devices with arm studies, graded on what they measured — a grade of laxity, a millimetre of fat, a percentage of muscle on MRI — and never a centimetre of hang.',
    sections: clinic,
  },
  {
    id: 'surg',
    title: 'Surgery: energy under the skin, and the scar',
    intro: 'The only rows that move the hang by centimetres — energy-assisted liposuction for the moderate arm without a scar, and the arm lift for the severe one with it.',
    sections: surg,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The scar and the nerves of the arm lift, the burns and warnings of energy under the skin, the timing that decides whether any of it lasts, and the lumps of the injectables.',
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
  skin: 'The skin envelope',
  fat: 'The fat',
  muscle: 'The muscle',
  surgery: 'Surgery',
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
