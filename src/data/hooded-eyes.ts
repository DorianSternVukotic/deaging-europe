/**
 * Hooded eyelids and drooping brows guide — single source of truth
 * (problem template).
 *
 * Consumed by /hooded-eyes. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: "hooded" is one word for three different problems —
 * excess eyelid skin folding over the lashes (dermatochalasis, in more than
 * half of people over 60), a brow that has descended and pushed its skin
 * onto the lid (brow ptosis, with a forehead working to hold it up), and a
 * lid margin that has slipped down over the eye because the muscle's tendon
 * has stretched (blepharoptosis, in a fifth of people over 70). A finger on
 * the brow and a ruler on a flash photograph tell them apart, and the
 * treatment follows: eyelid surgery for the skin, a brow lift by toxin,
 * ultrasound, browpexy or endoscope for the brow, and eye drops or
 * Müller's-muscle surgery for the margin. Eyelid surgery is the most
 * performed cosmetic operation in the world and the best-evidenced rung on
 * the page; the non-surgical devices lift by fractions of a millimetre to
 * two; and the commonest harms are the wrong operation for the type and
 * forehead toxin in a face whose brows were already holding the lids up.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'lid' | 'brow' | 'ptosis' | 'hollow' | 'general';

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
  '"Hooded" is one word for three problems: excess eyelid skin folding over the lashes (dermatochalasis, in 55% of 3,267 people over 60 in the Tehran study), a brow that has descended and pushed its skin onto the lid (brow ptosis, in 5%), and a lid margin that has slipped down over the eye because the levator tendon has stretched (blepharoptosis, in 11.5% of 400 people over 50 in a British survey and 20.8% of those over 70). A finger lifting the brow and a ruler on a flash photograph tell them apart.',
  'Upper eyelid surgery is the most performed cosmetic operation in the world — about 2.1 million in 2024 — and the best-evidenced rung on the page: 12 randomised trials in 450 patients pool to fewer dry-eye symptoms afterwards, a 348-patient trial found large gains on every quality-of-life scale, a 54-patient trial halved forehead-muscle activity and improved headaches, and the bleed behind the eye that threatens sight occurred in 149 of 269,433 operations with permanent loss in 12.',
  'For the slipped lid margin there is now a drop and an operation: oxymetazoline 0.1% raised the lid 1.16 mm against 0.50 mm on placebo at two weeks in two phase 3 trials of 304 people, with a pooled 1.40 mm across five studies of 458 — a real lift for as long as the drop lasts; Müller\'s-muscle surgery raised the margin from 1.5 to 3.2 mm in a randomised comparison with fewer reoperations than the levator approach, and succeeded in 97% of severe cases in a 372-lid series.',
  'The brow has a ladder measured in millimetres: toxin in the brow depressors lifted the outer brow 4.8 mm in 22 patients and 0.6–2.1 mm in a randomised trial; ultrasound lifted it 1.7–2.2 mm in 86–88% of people in two blinded studies; a browpexy done through the eyelid incision held 2–3 mm at two years; an endoscopic brow lift 3–4 mm for years, relapsing 2–3 mm laterally in some series. Nothing lifts a brow more than a few millimetres without an incision.',
  'The commonest harms are the wrong treatment for the type: eyelid skin removed from a brow problem drops the brow further, forehead toxin in a face whose brows were holding the lids up produces the heavy lid the label rates at 2%, a plasma pen burns lid skin in unregulated hands, and a sudden droop with double vision or an unequal pupil is a nerve or a muscle disease, not a cosmetic problem.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-lid',
    kind: 'Lid skin',
    title: 'Excess skin folding over the lashes',
    blurb: 'The upper-lid skin stretches, the muscle under it thins, the wall that holds the fat back weakens and the fold drapes onto the lashes — dermatochalasis, in more than half of people over 60. Only excision removes it; devices tighten it by fractions of a millimetre.',
  },
  {
    id: 'type-brow',
    kind: 'Brow',
    title: 'A brow that has come down and brought the lid with it',
    blurb: 'The brow fat pad descends with age and gravity, pushing its own skin onto the lid; the forehead muscle works all day to hold it up, and the forehead lines are the receipt. Lift the brow with a finger: if the hooding vanishes, it was never the lid.',
  },
  {
    id: 'type-ptosis',
    kind: 'Lid margin',
    title: 'A lid margin that has slipped over the eye',
    blurb: 'The tendon of the muscle that lifts the lid stretches or slips — with age, contact lenses, rubbing — and the margin sits lower over the pupil: blepharoptosis, in a fifth of people over 70. Eye drops and a specific operation treat it; removing skin does not.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'eye-anatomy',
    category: 'concept',
    title: 'Skin, brow, tendon and fat: the four parts that make an eye look hooded',
    tldr: 'The upper lid is a curtain of thin skin over a muscle that closes the eye, lifted by the levator whose tendon attaches to the lid\'s cartilage plate, with fat pads behind a thin wall and the brow above. The margin normally sits 4–5 mm above the pupil\'s light reflex (MRD1); hooding comes from surplus skin, a fallen brow, a stretched tendon or a hollow that folds the skin — and each has a different fix.',
    bodyHtml: `
      <p>Four structures decide how open an eye looks. The eyelid skin, the thinnest on the body, lies over the orbicularis muscle that closes the eye; behind them the orbital septum holds two fat pads in the socket; beneath them the levator muscle, through a tendon called the aponeurosis, attaches to the tarsal plate and lifts the lid; and above them the brow, cushioned by its own fat pad, sits on the bone of the forehead. Eyelid surgeons measure the result of all four with one number: the margin reflex distance, MRD1, from the corneal light reflex in a flash photograph up to the lid margin, normally 4 to 5 mm, and measured with a finger holding the brow still so the forehead cannot cheat (<a href="https://www.ncbi.nlm.nih.gov/books/NBK539828/" rel="noopener nofollow" target="_blank">StatPearls on ptosis</a>). The four failures look alike from across a room and differ under the finger: surplus skin folding over the lashes with a normal margin underneath (dermatochalasis), a brow that has descended and pushed its skin onto the lid with a forehead straining to hold it up (brow ptosis — <a href="https://www.ncbi.nlm.nih.gov/books/NBK560762/" rel="noopener nofollow" target="_blank">StatPearls on brow ptosis</a>), a tendon that has stretched so the margin itself sits low (aponeurotic blepharoptosis, the commonest acquired form), and a hollow where the fat has gone that lets the skin fold into it. The specialist review of ptosis lists the masquerades that must be excluded before any cosmetic plan — a lid retracted on the other side, an eye set back, a third-nerve palsy, Horner's syndrome, myasthenia gravis (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5330793/" rel="noopener nofollow" target="_blank">ptosis evaluation review</a>) — and the rest of this page sorts the four by two tests you can do at home.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'How common — and how many operations',
    tldr: 'In 3,267 Iranians over 60, 55% had dermatochalasis (60% of women) and 5% brow ptosis; in 400 Britons over 50, 11.5% had a ptotic lid, rising from 2.4% in the fifties to 20.8% over 70; in 94 American eye-clinic patients over 50, 73% self-rated some ptosis. Eyelid surgery became the most performed cosmetic operation in the world in 2024, about 2.1 million, and American surgeons alone did 120,755.',
    bodyHtml: `
      <p>The three problems have different prevalences and the same complaint. In the Tehran Geriatric Eye Study, 3,267 people aged 60–97 had a complete eyelid examination: dermatochalasis was present in 55.15%, in 60% of women against 50% of men, brow ptosis in 5.01%, and true blepharoptosis by the examiners' definition in under 1% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13295570/" rel="noopener nofollow" target="_blank">Tehran Geriatric Eye Study</a>). A British community survey that examined 400 randomly selected people over 50 at home found ptosis in 11.5%, rising from 2.4% in the fifties to 8.9% in the sixties and 20.8% over 70, bilateral in 39%, and due to a stretched or slipped tendon in most of the cases with a cause (<a href="https://pubmed.ncbi.nlm.nih.gov/7762457/" rel="noopener nofollow" target="_blank">British ptosis survey</a>); a Chinese community study of people over 50 found 27% (<a href="https://pubmed.ncbi.nlm.nih.gov/38168822/" rel="noopener nofollow" target="_blank">Chinese ptosis study</a>); and when 94 American eye-clinic patients over 50 compared their own lids to four photographs, 73% chose one with some ptosis, 41.5% mild, and a quarter had one lid lower than the other (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10788066/" rel="noopener nofollow" target="_blank">clinic self-assessment study</a>); the specialist review puts the prevalence above 20% over 70 (<a href="https://www.nature.com/articles/s41433-021-01547-5" rel="noopener nofollow" target="_blank">acquired ptosis review</a>). The market has noticed: eyelid surgery overtook liposuction to become the most common surgical aesthetic procedure in the world in 2024, at about 2.1 million (<a href="https://www.isaps.org/media/sqqoodpf/global-survey-2024-press-release-english.pdf" rel="noopener nofollow" target="_blank">ISAPS 2024</a>), and American plastic surgeons alone reported 120,755 blepharoplasties (<a href="https://www.plasticsurgery.org/documents/news/statistics/2024/plastic-surgery-statistics-report-2024.pdf" rel="noopener nofollow" target="_blank">ASPS 2024</a>).</p>
    `,
  },
  {
    id: 'why-hard',
    category: 'concept',
    title: 'Why the hooded eye is treated badly',
    tldr: 'Three problems share one word, and the wrong treatment for the type makes it worse: skin removed from a brow problem lets the brow fall further, skin removed from a slipped margin leaves a sleepy eye with a scar, forehead toxin in a face whose brows were propping up the lids drops both, and the devices sold as non-surgical lifts move a brow by fractions of a millimetre to two. The finger test comes before the consultation.',
    bodyHtml: `
      <p>The hooded eye punishes the wrong diagnosis. Remove eyelid skin from someone whose real problem is a fallen brow and the brow, no longer held up by the tension the surgeon just released, descends further — which is why the browpexy trials measure what a blepharoplasty alone does to brow height and find it falls (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11826645/" rel="noopener nofollow" target="_blank">browpexy comparison</a>). Remove skin from a lid whose margin has slipped and the eye still looks half-shut, because the margin is the problem and the skin was not (<a href="https://www.ncbi.nlm.nih.gov/books/NBK539828/" rel="noopener nofollow" target="_blank">StatPearls on ptosis</a>). Inject the forehead of a person whose frontalis was straining to hold up a low brow and both come down — the label rates eyelid ptosis and brow ptosis at 2% each, and the risk concentrates in exactly this face (<a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=485d9b71-6881-42c5-a620-a4360c7192ab" rel="noopener nofollow" target="_blank">prescribing information</a>). And the non-surgical menu is measured in a unit the brochures avoid: ultrasound lifted the brow a mean 1.7 mm in the first blinded study (<a href="https://pubmed.ncbi.nlm.nih.gov/20115948/" rel="noopener nofollow" target="_blank">ultrasound brow study</a>), radiofrequency about 1.2–1.5 mm (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12708710/" rel="noopener nofollow" target="_blank">radiofrequency eyelid study</a>), and a plasma pen burns the skin it claims to remove. The order on this page: sort the type with a finger and a photograph, treat the margin with drops or the tendon operation, the brow with the rung that matches the millimetres you need, and the skin with the operation that has the trials.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-lid',
    category: 'context',
    title: 'The heavy lid: skin folding over the lashes (dermatochalasis)',
    tldr: 'Lift the brow with a finger and the fold stays; pull the fold up and the lid margin underneath sits at a normal height: surplus skin, with or without a bulge of fat at the inner corner. The commonest type — 55% of people over 60 — and the type the operation was designed for. Devices tighten it by a fraction; nothing topical moves it.',
    focus: 'lid',
    bodyHtml: `
      <p>Sit at a mirror, look straight ahead and rest a finger on the brow bone to stop the forehead helping. If a fold of skin still hangs over the lashes, and lifting that fold with the other hand shows a lid margin sitting a normal 4–5 mm above the pupil's reflection, the problem is the skin: stretched, thinned and draped, sometimes with a soft bulge of prolapsed fat at the inner corner and a heavy, tired look that make-up disappears into by noon. It is the type the population studies count most — 55% of the Tehran cohort over 60 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13295570/" rel="noopener nofollow" target="_blank">Tehran Geriatric Eye Study</a>) — and the type the operation was built for: the functional review lists an enlarged upper visual field, fewer headaches and better vision-related quality of life after skin removal (<a href="https://pubmed.ncbi.nlm.nih.gov/30528286/" rel="noopener nofollow" target="_blank">functional outcomes review</a>). The devices below tighten this skin by a fraction of what the scalpel removes, and no cream reaches it. If the finger on the brow makes the fold disappear, read the next type instead.</p>
    `,
  },
  {
    id: 'type-brow',
    category: 'context',
    title: 'The fallen brow: hooding that vanishes under a finger',
    tldr: 'Lift the outer brow 5 mm with a fingertip and the hooding goes; at rest the brows sit at or below the bone rim, the forehead is lined from holding them up, and the outer eye is heaviest. Brow ptosis, not lid skin. The ladder is measured in millimetres — toxin 1–5, ultrasound 2, browpexy 2–3, endoscope 3–4 — and eyelid skin removal alone makes it worse.',
    focus: 'brow',
    bodyHtml: `
      <p>The brow test is the one that changes the plan. Relax the forehead completely — most people have to be told twice — and note where the brows sit: at or below the bony rim, with the outer third lowest, is a descended brow. Now lift the outer brow about half a centimetre with a fingertip: if the hood over the outer eye disappears, the eyelid skin was never surplus, it was displaced downward by the brow above it (<a href="https://www.ncbi.nlm.nih.gov/books/NBK560762/" rel="noopener nofollow" target="_blank">StatPearls on brow ptosis</a>). The forehead is the second witness: horizontal lines and brows that ride up whenever you look at someone are the frontalis working all day to do what the finger just did, and the <a href="/forehead-lines">forehead-lines guide</a> explains why toxin there makes this face heavier. Only 5% of the Tehran cohort were counted as brow ptosis (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13295570/" rel="noopener nofollow" target="_blank">Tehran Geriatric Eye Study</a>), but it hides inside a large share of the 55% with "hooding", and it is the type the ladder below is built for: a few millimetres from toxin in the depressors, about two from ultrasound, two to three from a browpexy stitched through the eyelid incision, three to four from an endoscopic lift. Blepharoplasty alone on this face removes the skin and lets the brow fall into the gap.</p>
    `,
  },
  {
    id: 'type-ptosis',
    category: 'context',
    title: 'The sleepy eye: a lid margin that sits too low (blepharoptosis)',
    tldr: 'In a flash photograph the lid margin sits under 2.5 mm above the pupil\'s reflection, often on one side more than the other; the crease is high, the lid looks thin, the forehead lifts to compensate and the eye looks tired whatever you slept. A stretched levator tendon — age, contact lenses, rubbing, eye surgery — treated with a drop or with Müller\'s-muscle or levator surgery. Skin removal does not touch it.',
    focus: 'ptosis',
    bodyHtml: `
      <p>Take a flash photograph straight on, eyes relaxed, brow held by a finger, and measure from the white reflection on the pupil up to the edge of the lid. Four to five millimetres is normal; under about 2.5 is ptosis, and a difference between the two eyes is the commonest way people first notice it (<a href="https://www.ncbi.nlm.nih.gov/books/NBK539828/" rel="noopener nofollow" target="_blank">StatPearls on ptosis</a>). The other signs are a lid crease that has migrated upward, a lid that looks thin and long above the lashes, a forehead that lifts when you try to open the eye wide, and a look of tiredness that sleep does not remove. The commonest cause after fifty is a stretched or slipped levator aponeurosis — the tendon of the lifting muscle — from age, years of contact lenses, rubbing, or previous eye surgery, and it accounted for most of the cases with a cause in the British survey, where prevalence reached 20.8% over 70 (<a href="https://pubmed.ncbi.nlm.nih.gov/7762457/" rel="noopener nofollow" target="_blank">British ptosis survey</a>; <a href="https://www.nature.com/articles/s41433-021-01547-5" rel="noopener nofollow" target="_blank">acquired ptosis review</a>). This is the type with a prescription drop and a specific operation, and the type a blepharoplasty leaves half-shut. A ptosis that arrived over days, that varies through the day, or that comes with double vision or a small pupil is the safety section, today.</p>
    `,
  },
  {
    id: 'type-hollow',
    category: 'context',
    title: 'The sunken lid: a hollow the skin folds into',
    tldr: 'A deep groove between the brow bone and the lashes, a lid that looks skeletal rather than heavy, and skin that folds because there is nothing behind it — fat lost with age, weight, or a previous over-aggressive blepharoplasty. The one hooded type that filling treats and skin removal worsens.',
    focus: 'hollow',
    bodyHtml: `
      <p>Look at the lid from the side in overhead light: a deep shadow under the brow bone, a visible groove above the crease and a thin, folded, multi-creased lid with a bony look is the sunken lid. It comes from loss of the orbital fat with age or weight loss, from the fat removed in an earlier blepharoplasty, and in some faces from a deep-set anatomy that was always there, and it makes the skin above it fold into the hollow so the eye reads as hooded and older at once. It is the one hooded type that adding treats: a 357-patient series of hyaluronic gel placed in three planes under the brow improved every grade of hollowing by at least one level (<a href="https://www.jcosmetmed.org/journal/view.html?uid=173&vmd=Full" rel="noopener nofollow" target="_blank">357-patient filler series</a>), and a 35-woman study of fat repositioning with fat grafting filled a mean 5.9 mm hollow with 1.1 mL and held it on ultrasound at six months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13049471/" rel="noopener nofollow" target="_blank">fat-grafting study</a>). A surgeon who removes skin and fat from this lid deepens the hollow; a surgeon who repositions the fat and takes little skin treats it.</p>
    `,
  },
  {
    id: 'type-toxin',
    category: 'context',
    title: 'The heavy lid after toxin: iatrogenic droop',
    tldr: 'A brow that dropped two weeks after forehead injections, or a lid that sits lower on one side after glabella or crow\'s-foot toxin, is the drug — brow ptosis and eyelid ptosis each at 2% on the label, more in faces whose forehead was holding low brows up. It wears off with the toxin; drops raise the lid 1–3 mm meanwhile; the next round is placed differently or not at all.',
    focus: 'brow',
    bodyHtml: `
      <p>The face most likely to be injected for forehead lines is the face least able to afford it: a person whose brows sit low and whose frontalis has been lifting them for years has lines because the muscle works, and relaxing it drops the brows and the lids they were carrying. The label rates brow ptosis at 2% and eyelid ptosis at 2% against 0% on placebo (<a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=485d9b71-6881-42c5-a620-a4360c7192ab" rel="noopener nofollow" target="_blank">prescribing information</a>), a true lid ptosis follows toxin that has diffused to the levator from glabellar or crow's-foot injections, and the 2026 review of toxin complications ranks upper-lid ptosis as the most frequent clinically significant one, managed with alpha-adrenergic drops (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12865869/" rel="noopener nofollow" target="_blank">toxin complications review</a>). Apraclonidine 0.5% raises the lid 1–3 mm by contracting Müller's muscle while the toxin wears off (<a href="https://pubmed.ncbi.nlm.nih.gov/15748550/" rel="noopener nofollow" target="_blank">apraclonidine report</a>), and oxymetazoline 0.1% does the same with trials behind it. The <a href="/forehead-lines">forehead-lines guide</a> has the eyelid test that predicts which foreheads should not be injected; the drop below is the rescue.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'The self-check: a finger, a flash photograph, a relaxed forehead and an old picture',
    tldr: 'Five minutes: relax the forehead and see where the brows sit; lift the outer brow with a fingertip and watch whether the hooding goes; take a flash photograph with a finger holding the brow and measure reflection-to-margin (4–5 mm normal, under 2.5 ptosis); look for a hollow from the side; compare with a photograph from your thirties; note contact lenses, previous injections and anything sudden. Lid, brow, margin or hollow — then the row.',
    bodyHtml: `
      <p>Sort the type before anyone with a syringe or a scalpel does. First the forehead: relax it fully, twice, and note whether the brows sit at or below the bone rim and whether the forehead is lined from holding them up. Second the finger: lift the outer brow half a centimetre — hooding that disappears is a brow problem, hooding that stays is skin. Third the photograph: a flash picture straight on with a finger on the brow, and a ruler from the pupil's white reflection to the lid edge, 4–5 mm being normal and under about 2.5 the ptosis type, with any difference between the eyes noted (<a href="https://www.ncbi.nlm.nih.gov/books/NBK539828/" rel="noopener nofollow" target="_blank">StatPearls on ptosis</a>). Fourth the side view under a ceiling light for the hollow. Fifth the history: contact lenses for decades, previous eye surgery, previous toxin and when, and above all anything sudden, variable, or accompanied by double vision, a droopy face, a small pupil or weakness — the masquerades that need a doctor today rather than a clinic (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5330793/" rel="noopener nofollow" target="_blank">ptosis evaluation review</a>). Most faces over 55 have two of the four types at once, which is why the surgeons combine an eyelid operation with a browpexy or a tendon repair, and why the photograph is what you judge everything on this page against.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-brow-grooming',
    category: 'home',
    title: 'Brow shaping, makeup and the optical lift',
    tldr: 'No trial has measured a brow pencil against a hooded eye, but makeup as a whole made 40- and 50-year-old women look younger to raters in three experiments, and a brow drawn with its arch at the outer third and the lid shaded above the crease moves the eye\'s apparent opening the way a millimetre of surgery does. Free, reversible, and nothing to do with the tendon.',
    evidence: 'limited',
    focus: 'brow',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€10–40',
    bodyHtml: `
      <p>The eye is read by contrast and by the lines the brow and crease draw, and both can be painted. Makeup as a whole has an experiment: 40- and especially 50-year-old women were judged significantly younger with makeup than without across three studies, while younger women were not (<a href="https://bpspsychub.onlinelibrary.wiley.com/doi/abs/10.1111/bjop.12337" rel="noopener nofollow" target="_blank">makeup and perceived age</a>). Nothing has measured a brow pencil against a hooded lid specifically. The techniques the make-up artists use — the brow's arch placed above the outer third and its tail kept from drooping, a shade darker than the skin swept just above where the crease should be, no shimmer on the fold itself, the lashes curled — make the eye read as more open by the same optical logic that makes a millimetre of brow lift visible. Limited: no trial, no harm, and the honest place to start for anyone who wants to see what an opened eye would look like before paying for one.</p>
    `,
  },
  {
    id: 'home-tape-skincare',
    category: 'home',
    title: 'Eyelid tape, "lifting" strips and eye creams',
    tldr: 'Adhesive strips fold the surplus skin into a crease for the day and have no trial; retinoids and peptide eye creams treat crepe and fine lines on the periorbital skin and move no fold, brow or margin; nothing sold in a jar lifts an eyelid. Harmless, temporary, and a poor place to spend the surgery money.',
    evidence: 'limited',
    focus: 'lid',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€10–60',
    bodyHtml: `
      <p>Eyelid tapes and strips work by mechanically tucking the fold into a crease; they hold for a day, show under close light, can irritate the thinnest skin on the body, and have no published trial. Eye creams have the periorbital evidence graded in the <a href="/crows-feet">crow's-feet guide</a> and the <a href="/eye-bags">eye-bags guide</a> — a retinoid thickens and smooths the thin skin at the outer eye over months — and none of it applies to a fold of surplus skin, a descended brow or a slipped tendon, which are structural. Limited, and worth saying plainly because the search for a non-surgical eyelid lift ends here for most people: the skin can be made smoother, the brow can be lifted a little by toxin or ultrasound, the margin can be lifted by a drop, and the fold can be removed only by a surgeon.</p>
    `,
  },
];

const inj: Section[] = [
  {
    id: 'inj-drops-oxymetazoline',
    category: 'inj',
    title: 'Oxymetazoline 0.1% eye drops for the slipped margin (Upneeq)',
    tldr: 'Two randomised phase 3 trials, 203 on the drop and 101 on placebo: the lid margin rose 1.16 mm against 0.50 mm at two weeks, within 5–15 minutes of the first drop, with the superior visual-field test improved on days 1 and 14 and adverse events no more frequent than placebo; five studies of 458 people pool to 1.40 mm. A daily drop, a real lift while it lasts, and only for the ptosis type.',
    evidence: 'strong',
    focus: 'ptosis',
    note: 'Best for: the sleepy eye with a low margin and good levator strength — and the lid that dropped after toxin — as a test before, or instead of, the operation',
    sessions: 'One drop per eye each morning; effect through the day',
    downtime: 'None',
    cost: '€150–250 / month',
    bodyHtml: `
      <p>Müller's muscle is a small involuntary lifter under the levator that responds to adrenaline-like drugs, and a drop that stimulates it raises the lid for as long as the drug lasts. Oxymetazoline 0.1% was approved in the United States in 2020 as the first drug for acquired ptosis on two randomised, placebo-controlled phase 3 trials (<a href="https://www.aao.org/education/headline/first-blepharoptosis-drug-gains-fda-approval" rel="noopener nofollow" target="_blank">approval report</a>): pooled, 203 people received the drop and 101 placebo, the lid margin rose 0.59 mm at five minutes and 0.93 at fifteen on day one, 1.16 mm against 0.50 mm on placebo at day 14, and the effect held through day 42, with the primary endpoint — points seen on a superior visual-field test — improved at six hours on day 1 and two hours on day 14 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8240850/" rel="noopener nofollow" target="_blank">pooled phase 3 analysis</a>; <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2020/0212520s000lbl.pdf" rel="noopener nofollow" target="_blank">prescribing information</a>). A 2025 systematic review of five studies in 458 people found the margin 1.40 mm higher after treatment and 0.83 mm higher than controls, with high heterogeneity (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11635132/" rel="noopener nofollow" target="_blank">oxymetazoline systematic review</a>), and a six-month Japanese phase 3 study extends the safety data (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13452870/" rel="noopener nofollow" target="_blank">six-month study</a>). Strong, within its limits: about a millimetre, for the day, for the ptosis type only — it does nothing for a fold of skin or a fallen brow — and licensing and price vary by country, with the drop prescribed in the United States and Britain and not yet authorised across the European Union. The drop also doubles as a test: an eye that opens on it will open on Müller's-muscle surgery.</p>
    `,
  },
  {
    id: 'inj-toxin-brow-lift',
    category: 'inj',
    title: 'The toxin brow lift',
    tldr: 'Seven to ten units in the outer orbicularis raised the outer brow 4.83 mm from the lateral canthus and 1.02 mm at mid-pupil in 22 patients; a randomised trial of 30 brows per arm found 0.6–2.1 mm depending on which depressors were injected, with 97% satisfied; six units in ten women raised the outer brow measurably without asymmetry. A few millimetres at the tail, for three to four months, and forehead injections left alone.',
    evidence: 'moderate',
    focus: 'brow',
    note: 'Best for: the outer-brow hood in a face with a working forehead — depressors only, never the frontalis',
    sessions: 'Every 3–4 months',
    downtime: 'None',
    cost: '€150–300',
    bodyHtml: `
      <p>The brow sits where its lifter and its depressors balance, and relaxing the depressors — the outer orbicularis that pulls the tail down, and the muscles between the brows that pull the head down — lets the frontalis win. The measured series: 22 patients had 7–10 units into the lateral orbicularis on each side and two weeks later the brow was 4.83 mm higher measured from the lateral canthus and 1.02 mm higher at mid-pupil (<a href="https://pubmed.ncbi.nlm.nih.gov/10724275/" rel="noopener nofollow" target="_blank">temporal brow-lift study</a>); a randomised trial of 30 brows in each arm found the lateral depressors alone lifted the brow 0.6–2.1 mm at every point while adding the medial depressors lifted 1–1.7 mm from the inner limbus outward and nothing at the inner brow, with 97% of patients satisfied (<a href="https://pubmed.ncbi.nlm.nih.gov/29280866/" rel="noopener nofollow" target="_blank">brow-height RCT</a>); six units at three points under the outer brow in ten women raised the outer brow on calipers without disturbing symmetry (<a href="https://pubmed.ncbi.nlm.nih.gov/23851789/" rel="noopener nofollow" target="_blank">caliper study</a>). Moderate: small, measured, consistent, and technique-dependent to the millimetre. The rule for this face is the one the <a href="/forehead-lines">forehead-lines guide</a> spells out — depressors only, the frontalis left to do its job — and the <a href="/crows-feet">crow's-feet guide</a> grades the same injection where it also softens the lines.</p>
    `,
  },
  {
    id: 'inj-filler-hollow',
    category: 'inj',
    title: 'Filling the sunken lid: hyaluronic gel or fat',
    tldr: 'In 357 patients, hyaluronic gel placed in three planes under the brow improved every grade of upper-lid hollowing by at least one level with no severe complication; in 35 women, orbital fat repositioned and topped up with 1.1 mL of grafted fat filled a 5.9 mm hollow and held on ultrasound at six months. For the hollow type only, by someone who works around the eye every week — the arteries above it supply the eye.',
    evidence: 'emerging',
    focus: 'hollow',
    note: 'Best for: the skeletal, folded upper lid — and the lid that was over-emptied by an earlier operation',
    sessions: 'Gel once, repeat at 12–18 months; fat once',
    downtime: '3–7 days of swelling; bruising',
    cost: '€400–700 (gel); €2,000–4,000 (fat)',
    bodyHtml: `
      <p>The hollow upper lid folds because it is empty, and the treatment is to refill the space between the brow bone and the crease rather than remove anything. The largest series used hyaluronic gel: 357 patients graded one to four for hollowing were injected in three planes under the brow, and every grade improved by at least one level — all of the mildest to normal, and 22% of the most severe by three grades — with high satisfaction and no severe complication reported (<a href="https://www.jcosmetmed.org/journal/view.html?uid=173&vmd=Full" rel="noopener nofollow" target="_blank">357-patient filler series</a>). The surgical version repositions the lid's own orbital fat and adds grafted fat: in 35 women aged 40–65 with moderate hollowing, a mean hollow of 5.9 mm was filled with 1.09 mL and high-resolution ultrasound showed the space in front of the lid reduced and the lid thickened at one, three and six months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13049471/" rel="noopener nofollow" target="_blank">fat-grafting study</a>). Emerging: series without controls, and an anatomy that punishes error — the supraorbital and supratrochlear arteries that run through this zone connect to the eye's circulation, and the periocular filler review sets out the vascular and lump complications and the bluish show of gel placed too shallow (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7583139/" rel="noopener nofollow" target="_blank">periocular filler review</a>). The <a href="/eye-bags">eye-bags guide</a> grades the same gels under the eye, where the trial evidence is larger.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'dev-mfu-brow',
    category: 'clinic',
    title: 'Microfocused ultrasound for the brow (Ultherapy and successors)',
    tldr: 'The first device cleared to lift a brow: in the rater-blinded study, 30 of 35 subjects showed a clinically significant brow lift at 90 days, a mean 1.7 mm; a randomised blinded study measured 2.16 mm at 90 days and 1.9 at 180 in 87.5%; and a single periocular HIFU session shortened the visible upper lid by 0.94 mm in 34 women. About two millimetres, for a year, with no wound.',
    evidence: 'moderate',
    focus: 'brow',
    note: 'Best for: the mildly descended brow in someone who will not have an incision — two millimetres is the honest promise',
    sessions: 'Once; repeat at 12–18 months',
    downtime: 'None beyond a day of redness; sore for days',
    cost: '€800–1,500 (brow and upper face)',
    bodyHtml: `
      <p>Ultrasound placed in focused points under the forehead skin contracts the tissue that suspends the brow, and the brow was the first indication the device earned. In the rater-blinded prospective study, 35 subjects were treated across forehead, temples, cheeks and neck and three masked experts compared photographs at 90 days: 30 of 35 showed a clinically significant brow lift, and eyebrow height measured against fixed landmarks rose a mean 1.7 mm, with transient redness and swelling (<a href="https://pubmed.ncbi.nlm.nih.gov/20115948/" rel="noopener nofollow" target="_blank">ultrasound brow study</a>). A randomised, blinded study of upper-face ultrasound measured a 2.16 mm rise in brow height at 90 days and 1.9 mm at 180, clinically significant in 87.5% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626351/" rel="noopener nofollow" target="_blank">randomised blinded study</a>), and 34 Korean women given a single periocular session with a 2 mm probe showed the visible eyelid shortened by 0.94 mm at twelve weeks with high satisfaction (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12719753/" rel="noopener nofollow" target="_blank">eyelid HIFU study</a>). Moderate: blinded, measured, small, and about two millimetres — real at the outer brow, invisible on a brow that needs eight. The <a href="/forehead-lines">forehead-lines guide</a> grades the same device for the compensating forehead, and the eye is shielded because focused ultrasound near the orbit is not a device for a beginner.</p>
    `,
  },
  {
    id: 'dev-rf-eyelids',
    category: 'clinic',
    title: 'Monopolar radiofrequency on the eyelids',
    tldr: 'A 0.25 cm² tip applied to the lids of 72 patients in a multicentre trial tightened the upper lid in 88% and reduced hooding in 86% by masked photographs, most by up to a quarter; 14 Asian patients treated once showed brow elevation of 1.45 mm at mid-pupil and 86% reporting more than 50% improvement at six months. A grade of tightening, a millimetre of lift, and a contact lens in the eye while it runs.',
    evidence: 'emerging',
    focus: 'lid',
    sessions: 'Once; repeat yearly',
    downtime: 'A day of redness and swelling',
    cost: '€400–900',
    bodyHtml: `
      <p>Radiofrequency heats the eyelid dermis through a small tip while a protective lens covers the eye, and it has the largest device series on the lid itself. In the multicentre trial, 72 patients had a single treatment with a 0.25 cm² monopolar tip and were followed six months by the treating physician, themselves and masked photograph reviewers: upper-lid tightening was noted in 88% and reduction of hooding in 86%, most achieving up to 25% improvement and a smaller share more, with no serious adverse events and no relation between the energy used and the result (<a href="https://pubmed.ncbi.nlm.nih.gov/17163476/" rel="noopener nofollow" target="_blank">radiofrequency eyelid trial</a>). A 2025 study of 14 Asian patients treated once found every subject improved, 73% reporting more than 50% tightening at two months and 86% at six, with brow elevation of 1.18 and 1.45 mm at mid-pupil and the crease lifted about half a millimetre (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12708710/" rel="noopener nofollow" target="_blank">radiofrequency eyelid study</a>). Emerging: uncontrolled, judged on photographs, and a quarter of a fold at best. The <a href="/eye-bags">eye-bags guide</a> grades the same device on the lower lid.</p>
    `,
  },
  {
    id: 'dev-plasma',
    category: 'clinic',
    title: 'Plasma "non-surgical blepharoplasty" (plasma exeresis and plasma pens)',
    tldr: 'Ten patients given three sessions of plasma exeresis improved 2.6 grades on a laxity scale with straighter collagen on confocal microscopy; 16 patients rated their satisfaction highest a week after treatment and reported swelling and itching; no controlled study, no measurement of the fold, unregulated copies of the device, pigment scars in darker skin, and a published case of bilateral chemical eye injury. Arc burns dressed as surgery.',
    evidence: 'limited',
    focus: 'lid',
    sessions: '1–3 sessions',
    downtime: '5–10 days of crusts',
    cost: '€400–800',
    bodyHtml: `
      <p>A plasma device ionises the air a millimetre from the skin and makes a grid of tiny burns that contract the surface as they heal — sold as a blepharoplasty without a scalpel. The evidence is two small uncontrolled studies: ten patients had three sessions and improved 2.6 grades on a facial laxity scale, with reflectance confocal microscopy showing collagen as long straight fibres afterwards and no serious adverse events (<a href="https://pubmed.ncbi.nlm.nih.gov/28930794/" rel="noopener nofollow" target="_blank">confocal pilot</a>), and 16 patients with dermatochalasis reported satisfaction highest at day 7 and lower at day 30, with swelling and itching the commonest symptoms and outcomes worse in darker skin types (<a href="https://pubmed.ncbi.nlm.nih.gov/33252188/" rel="noopener nofollow" target="_blank">plasma exeresis study</a>). Nobody has measured a fold before and after against a control, the pens sold online are unregulated copies, thermal injury to the thinnest skin on the body leaves pale or dark marks that outlast the tightening, and a bilateral chemical eye injury from a treatment has been published (<a href="https://pubmed.ncbi.nlm.nih.gov/32831067/" rel="noopener nofollow" target="_blank">eye-injury case report</a>). Limited, as the <a href="/eye-bags">eye-bags</a> and <a href="/crows-feet">crow's-feet</a> guides grade it; the operation it imitates costs a little more and has the trials.</p>
    `,
  },
];

const surg: Section[] = [
  {
    id: 'surg-blepharoplasty',
    category: 'surg',
    title: 'Upper blepharoplasty: removing the fold',
    tldr: 'The most performed cosmetic operation in the world and the best-evidenced rung on the page: 12 randomised trials in 450 patients pool to fewer dry-eye symptoms afterwards (odds ratio 0.22), a 348-patient trial found large gains on every quality-of-life scale, a 54-patient trial halved forehead-muscle activity and improved headaches, muscle removal adds nothing to satisfaction, and the bleed that threatens sight occurred in 149 of 269,433 operations with permanent loss in 12.',
    evidence: 'strong',
    focus: 'lid',
    note: 'Best for: the fold of surplus skin with a normal lid margin — with a browpexy if the finger test says the brow has dropped, and a tendon repair if the margin has',
    sessions: 'Once; lasts 10–15 years',
    downtime: '1–2 weeks of bruising and swelling; scar in the crease matures over months',
    cost: '€2,500–5,000',
    bodyHtml: `
      <p>An ellipse of skin — with or without a strip of muscle and a little fat — is removed along the crease and closed, leaving a scar hidden in the fold, under local anaesthetic in under an hour a side. Its evidence base is unusual for a cosmetic operation. The systematic review of 28 studies found an enlarged visual field, fewer headaches and better vision-related quality of life after skin removal (<a href="https://pubmed.ncbi.nlm.nih.gov/30528286/" rel="noopener nofollow" target="_blank">functional outcomes review</a>); the 2025 meta-analysis of 12 randomised trials in 450 patients found dry-eye symptoms significantly reduced afterwards, odds ratio 0.22, against the common belief that they worsen (<a href="https://pubmed.ncbi.nlm.nih.gov/40152471/" rel="noopener nofollow" target="_blank">blepharoplasty meta-analysis</a>); a randomised trial of 348 patients aged 49–87 found significant improvement in satisfaction with the eyes and the face, psychological function and social function on validated questionnaires, with minimal adverse effects that improved with time (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10972357/" rel="noopener nofollow" target="_blank">quality-of-life trial</a>); a 54-patient randomised trial recorded forehead-muscle activity falling from 80 to 39 microvolts a year after surgery with headaches improved, because the frontalis stops holding the lids up (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9866996/" rel="noopener nofollow" target="_blank">headache trial</a>); and a double-blind randomised trial of 54 patients found removing a strip of orbicularis muscle added nothing to satisfaction over skin alone (<a href="https://pubmed.ncbi.nlm.nih.gov/35219565/" rel="noopener nofollow" target="_blank">technique trial</a>). The danger is rare and specific: a survey of 269,433 eyelid operations by oculoplastic surgeons found 149 bleeds behind the eye, 48 with temporary and 12 with permanent visual loss, most within three hours of surgery and associated with high blood pressure, aspirin, vomiting and early exertion (<a href="https://pubmed.ncbi.nlm.nih.gov/15599241/" rel="noopener nofollow" target="_blank">orbital haemorrhage survey</a>).</p>
      <p>Strong: randomised trials of technique and outcome, consistent functional gains, and a complication profile counted in the hundreds of thousands. Its limits are the types it does not treat — a fallen brow needs its own procedure in the same sitting, a slipped margin needs the tendon repaired, a hollow lid needs fat kept rather than taken — and the surgeon who takes too much skin, which cannot be put back. The <a href="/eye-bags">eye-bags guide</a> grades the lower-lid operation.</p>
    `,
  },
  {
    id: 'surg-ptosis-repair',
    category: 'surg',
    title: 'Ptosis repair: Müller\'s-muscle resection or levator advancement',
    tldr: 'In a randomised trial of 40 patients, the margin rose from 1.5 to 3.2 mm with the internal Müller\'s-muscle operation and from 1.2 to 3.0 with the external levator advancement, with better cosmetic scores and 2.6% against 7.7% reoperations for the internal approach; a 372-lid series found the internal operation succeeded in 97% of severe cases against 77% for the external; residual ptosis or retraction needing a second operation runs up to 20% in the largest series.',
    evidence: 'moderate',
    focus: 'ptosis',
    note: 'Best for: the sleepy eye that opens on the drop test — done with, not instead of, the skin removal when both are present',
    sessions: 'Once; second operation in 3–20% depending on approach',
    downtime: '1–2 weeks of swelling',
    cost: '€2,500–5,000',
    bodyHtml: `
      <p>Two operations lift a slipped margin: shortening Müller's muscle and conjunctiva from inside the lid with no skin incision, offered to eyes that open on a phenylephrine or oxymetazoline drop, or advancing the stretched levator tendon through the eyelid crease. The randomised trial enrolled 40 patients with mild-to-moderate ptosis and a positive drop test: at one month the margin had risen from 1.2 to 3.0 mm with the levator approach and from 1.5 to 3.2 with the Müller's approach, no different, but the cosmetic score was better with Müller's (3.07 against 2.69) and reoperation less frequent (2.6% against 7.7%) (<a href="https://pubmed.ncbi.nlm.nih.gov/29369985/" rel="noopener nofollow" target="_blank">ptosis-repair RCT</a>). The series agree: in 372 lids, the internal operation succeeded in 97.2% of severe ptosis and 90.9% of mild-to-moderate against 77.4% and 85% for the external approach (<a href="https://pubmed.ncbi.nlm.nih.gov/32387434/" rel="noopener nofollow" target="_blank">372-lid series</a>); in 82 eyes, success was 91.7% against 72.2% with fewer complications and a shorter operation (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10385713/" rel="noopener nofollow" target="_blank">82-eye comparison</a>); and in the 272-procedure series from Los Angeles, the margin rose a mean 1.6 mm with either operation, 141 combined with a blepharoplasty, and residual ptosis or over-correction needing a second operation occurred in up to 20% (<a href="https://pubmed.ncbi.nlm.nih.gov/16083839/" rel="noopener nofollow" target="_blank">272-procedure series</a>). Moderate: one randomised trial of technique, consistent series, and a revision rate that is part of the consent. This is the operation the hooded-eye consultation misses when the surgeon is not an oculoplastic one.</p>
    `,
  },
  {
    id: 'surg-browpexy',
    category: 'surg',
    title: 'Browpexy: the brow stitched up through the eyelid incision',
    tldr: 'A suture placed through the blepharoplasty incision to hold the brow to the bone: in 98 patients it lifted the lateral brow 2.3–3.0 mm and the central brow 1.5–1.9 mm at four to five months against a fall with blepharoplasty alone; in 70 lids it held 2–3 mm at two years against half a millimetre in controls; in a 32-woman randomised trial the internal browpexy raised the outer brow at six months where a temporal brow lift did not. The brow problem fixed in the same sitting as the lid.',
    evidence: 'moderate',
    focus: 'brow',
    note: 'Best for: the mild-to-moderate fallen brow found by the finger test in someone already having their lids done',
    sessions: 'Once, with the blepharoplasty',
    downtime: 'Adds little to the blepharoplasty\'s 1–2 weeks',
    cost: '€500–1,500 added to the blepharoplasty',
    bodyHtml: `
      <p>Because removing eyelid skin lets the brow fall, surgeons anchor the brow while they are there: through the blepharoplasty incision (internal browpexy) or a small incision above the brow (external), the brow's soft tissue is stitched to the bone's lining a few millimetres higher. In 98 patients quantified on standardised photographs, the lateral and central brow rose 2.29 and 1.47 mm with the internal technique and 2.97 and 1.90 mm with the external at four to five months, both significantly more than blepharoplasty alone (<a href="https://pubmed.ncbi.nlm.nih.gov/28267396/" rel="noopener nofollow" target="_blank">98-patient comparison</a>); in 70 lids measured at 24 months, the internal browpexy held 2.10 mm centrally and 3.19 mm laterally and the external 2.66 and 3.03, against 0.48 and 0.55 mm in the blepharoplasty-only controls (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11826645/" rel="noopener nofollow" target="_blank">browpexy comparison</a>); and in a randomised trial of 32 women having blepharoplasty, the internal browpexy raised the outer brow significantly at six months while a temporal brow lift left it where it was (<a href="https://pubmed.ncbi.nlm.nih.gov/28975711/" rel="noopener nofollow" target="_blank">browpexy RCT</a>). Moderate: measured, one small randomised trial, and two to three millimetres — enough for the mild brow, not for the brow at the level of the lashes, which is the next row.</p>
    `,
  },
  {
    id: 'surg-brow-lift',
    category: 'surg',
    title: 'The brow lift: endoscopic, temporal and open',
    tldr: 'A meta-analysis of 12 studies in 478 patients: endoscopic brow lifts raised the brow 3.3 mm medially, 3.9 centrally and 4.4 laterally, sustained one to six years, with the lateral brow relapsing 2–3 mm in some series; a 71-patient endoscopic temporal series measured 1.8 mm with 1.4% complications; a 15-study review finds the endoscopic and minimally invasive techniques match or beat the open ones with fewer complications. The severe brow, at the price of numbness, scars in the hair and a relapse.',
    evidence: 'moderate',
    focus: 'brow',
    note: 'Best for: brows at or below the rim with a forehead that cannot hold them — the only rung with more than three millimetres in it',
    sessions: 'Once; lateral relapse of 2–3 mm in some series',
    downtime: '2–3 weeks; scalp numbness for months',
    cost: '€4,000–8,000',
    bodyHtml: `
      <p>The brow lift releases the brow from the bone through small incisions behind the hairline and fixes it higher, with an endoscope or, in the older open versions, through a long incision across the scalp. The meta-analysis of 12 studies in 478 patients found endoscopic brow lifts elevated the brow a mean 3.3 mm medially, 3.9 mm centrally and 4.4 mm laterally, sustained across follow-up of one to six years, with the lateral brow relapsing 2–3 mm in some series (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11834984/" rel="noopener nofollow" target="_blank">brow-lift meta-analysis</a>); a ten-year series of 71 endoscopic temporal lifts measured 1.8 mm at mid-pupil and the canthi with a complication rate of 1.4% and one relapse re-operated (<a href="https://pubmed.ncbi.nlm.nih.gov/31764641/" rel="noopener nofollow" target="_blank">endoscopic temporal series</a>); a 2026 systematic review of 15 studies concluded that endoscopic and minimally invasive techniques give comparable or better aesthetic results than the open lifts with fewer complications and faster recovery (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12911988/" rel="noopener nofollow" target="_blank">brow-lift review</a>), and fixation matters, with bone-tunnel fixation holding the lift at nine months where temporary tape did not (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13336341/" rel="noopener nofollow" target="_blank">fixation trial</a>). Complications are scalp numbness, asymmetry, hair loss along the incisions and lagophthalmos when combined with an aggressive blepharoplasty (<a href="https://www.ncbi.nlm.nih.gov/books/NBK545220/" rel="noopener nofollow" target="_blank">StatPearls on endoscopic brow lift</a>). Moderate: no randomised trial against the alternatives, consistent measured series, and the one rung that moves a brow by more than a browpexy. The <a href="/forehead-lines">forehead-lines guide</a> grades it for the forehead it also treats.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-red-flags',
    category: 'safety',
    title: 'The droop that is not cosmetic: nerves, muscles and the pupil',
    tldr: 'A lid that dropped over days, that varies through the day or worsens with fatigue, that comes with double vision, a small or large pupil, a numb or weak face, headache or a droopy corner of the mouth is a third-nerve palsy, Horner\'s syndrome, myasthenia gravis or a stroke until a doctor says otherwise — the same day, not at a clinic. Age-related ptosis is slow, symmetrical-ish, and painless.',
    bodyHtml: `
      <p>Most ptosis after fifty is a stretched tendon, and the specialist reviews exist because some is not. The evaluation review lists the masquerades — a third-nerve palsy, which can be the first sign of an aneurysm and comes with a large pupil, double vision or an eye that cannot move; Horner's syndrome, a mild ptosis with a small pupil that can signal a carotid dissection or a tumour at the lung apex; myasthenia gravis, a ptosis that worsens through the day and with fatigue and comes with double vision or weakness — and insists on excluding them before any cosmetic plan (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5330793/" rel="noopener nofollow" target="_blank">ptosis evaluation review</a>; <a href="https://www.ncbi.nlm.nih.gov/books/NBK539828/" rel="noopener nofollow" target="_blank">StatPearls on ptosis</a>). The British survey found one probable myasthenia among its 46 ptoses and eleven mechanical causes — lumps and swellings weighing the lid down (<a href="https://pubmed.ncbi.nlm.nih.gov/7762457/" rel="noopener nofollow" target="_blank">British ptosis survey</a>). The rules: sudden means emergency; variable means neurology; a pupil that does not match its partner means a doctor today; and a lid that drooped after a head injury, an eye operation or a new medication is a question for the prescriber before it is a question for a surgeon.</p>
    `,
  },
  {
    id: 'safety-surgery',
    category: 'safety',
    title: 'What eyelid and brow surgery can do wrong',
    tldr: 'The bleed behind the eye: 149 in 269,433 operations, 12 with permanent visual loss, most within three hours, more with hypertension, aspirin, vomiting and exertion. Too much skin taken: an eye that cannot close, dry and exposed, and cannot be undone. Ptosis repair: a second operation in up to 20%. Brow lift: numbness, hair loss, asymmetry, relapse. The surgeon who does eyes every week, and blood pressure and blood thinners managed before.',
    bodyHtml: `
      <p>The eyelid's one dangerous complication is bleeding into the closed space behind the eye: in the survey of 269,433 cosmetic eyelid operations there were 149 orbital haemorrhages, 48 with temporary and 12 with permanent visual loss, most within the first three hours and the risk falling sharply after 24, with hypertension, perioperative aspirin, postoperative vomiting and early physical activity the common companions (<a href="https://pubmed.ncbi.nlm.nih.gov/15599241/" rel="noopener nofollow" target="_blank">orbital haemorrhage survey</a>) — which is why blood pressure is controlled, blood thinners are discussed, and sudden severe pain or a bulging eye in the first day is a return to the surgeon that hour, not a phone call in the morning. The aesthetic complications are the irreversible ones: skin over-resected leaves a lid that cannot close, dries the eye and hollows the socket, and the complication reviews put prevention — measuring what to leave rather than what to take — ahead of any repair (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3357590/" rel="noopener nofollow" target="_blank">blepharoplasty complications review</a>). Ptosis repair under- or over-corrects in up to 20% in the largest series and is revised (<a href="https://pubmed.ncbi.nlm.nih.gov/16083839/" rel="noopener nofollow" target="_blank">272-procedure series</a>); brow lifts leave scalp numbness, asymmetry and hair loss along the incisions and relapse laterally (<a href="https://www.ncbi.nlm.nih.gov/books/NBK545220/" rel="noopener nofollow" target="_blank">StatPearls on endoscopic brow lift</a>). The trade that protects you is the specialist: an oculoplastic or facial plastic surgeon who measures margins, tests the drop, and operates on eyes weekly.</p>
    `,
  },
  {
    id: 'safety-toxin',
    category: 'safety',
    title: 'Toxin in a hooded face: the 2% that becomes 20%',
    tldr: 'Eyelid ptosis and brow ptosis each run at 2% on the forehead label, and they concentrate in the face this page describes — low brows held up by a working frontalis. Depressors only for the brow lift, no frontalis toxin without the eyelid test, and if a lid drops, an alpha-agonist drop raises it 1–3 mm while three months pass.',
    bodyHtml: `
      <p>The forehead label's 2% eyelid ptosis and 2% brow ptosis against 0% on placebo are averages over foreheads that could afford to relax (<a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=485d9b71-6881-42c5-a620-a4360c7192ab" rel="noopener nofollow" target="_blank">prescribing information</a>); in a face whose brows sit on the rim and whose lids are hooded, the frontalis is load-bearing, and the complication reviews single out low brows, hooded lids and a working forehead as the predictors of heaviness that lasts the life of the toxin (<a href="https://pubmed.ncbi.nlm.nih.gov/33864431/" rel="noopener nofollow" target="_blank">complications review</a>). True lid ptosis, from toxin diffusing to the levator after glabellar or crow's-foot injections, is the most frequent clinically significant complication in the 2026 review and is managed with alpha-adrenergic drops — apraclonidine 0.5%, or oxymetazoline 0.1% where available — that contract Müller's muscle and lift the lid 1–3 mm while the toxin wears off over eight to twelve weeks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12865869/" rel="noopener nofollow" target="_blank">toxin complications review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/15748550/" rel="noopener nofollow" target="_blank">apraclonidine report</a>). The rules for this face: the brow lift is depressors only; the frontalis is injected only if the <a href="/forehead-lines">forehead-lines guide</a>'s eyelid test passes, and then low and lightly; and a drooped lid is reported to the injector the day it appears, not endured for a season.</p>
    `,
  },
  {
    id: 'safety-devices-filler',
    category: 'safety',
    title: 'Devices and filler near the eye: burns, lenses and the arteries above the lid',
    tldr: 'Plasma pens burn the thinnest skin on the body and have injured eyes; radiofrequency and ultrasound on the lid need a protective lens and a practitioner who treats eyes; filler above the lid goes into a zone whose arteries connect to the eye\'s circulation and is for the hollow type only, by someone who does it weekly. A blue tinge, a lump or a white patch after any of them is reported the same day.',
    bodyHtml: `
      <p>Every energy device on this page sits a few millimetres from the eye. Radiofrequency on the lid is delivered over a protective contact lens and the multicentre trial found no serious event in 72 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/17163476/" rel="noopener nofollow" target="_blank">radiofrequency eyelid trial</a>); focused ultrasound is kept off the orbital rim by operators trained to shield it; and the plasma pen, in unregulated copies used at home and in salons, has produced pigment scars on lid skin and a published bilateral chemical eye injury (<a href="https://pubmed.ncbi.nlm.nih.gov/32831067/" rel="noopener nofollow" target="_blank">eye-injury case report</a>). Filler in the hollow above the lid sits among the supraorbital and supratrochlear arteries, whose connections to the ophthalmic circulation make the upper orbit one of the highest-risk zones for filler blindness, and the periocular review sets out the vascular events, the lumps and the bluish show of gel placed too shallow (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7583139/" rel="noopener nofollow" target="_blank">periocular filler review</a>). The rules: no device on the lid without eye protection; no filler above the lid from anyone who does not treat that zone weekly with hyaluronidase in the room; and pain, blanching, a visual change or a blue tinge in the hours after is an emergency, not a wait-and-see.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-finger-test',
    category: 'faq',
    title: 'How do I know if it is my brow or my eyelid?',
    tldr: 'Relax the forehead and lift the outer brow half a centimetre with a fingertip: hooding that disappears is the brow, hooding that stays is the eyelid skin, and a lid margin that still sits low under the lifted fold is ptosis. Most faces over 55 have two of the three, which is why the operations are combined.',
    bodyHtml: `
      <p>The finger test is the one the specialists use before the ruler (<a href="https://www.ncbi.nlm.nih.gov/books/NBK560762/" rel="noopener nofollow" target="_blank">StatPearls on brow ptosis</a>): the brow held or lifted removes the brow's contribution and shows what the lid does on its own. Add the flash photograph with the brow held — margin 4–5 mm above the reflection is normal, under about 2.5 is ptosis (<a href="https://www.ncbi.nlm.nih.gov/books/NBK539828/" rel="noopener nofollow" target="_blank">StatPearls on ptosis</a>) — and the four types sort themselves. A brow problem gets the brow ladder, a skin problem the excision, a margin problem the drop and the tendon repair, a hollow the filler; and a surgeon who does not do the finger test in the consultation is a surgeon to leave.</p>
    `,
  },
  {
    id: 'faq-botox-hooded',
    category: 'faq',
    title: 'Will Botox make my hooded eyes worse?',
    tldr: 'In the forehead, probably: the label\'s 2% brow and lid ptosis concentrate in faces whose frontalis is holding low brows up. In the brow depressors, the opposite — a few millimetres of lift at the tail for three to four months. Same drug, different muscle, and the eyelid test decides.',
    bodyHtml: `
      <p>Toxin lowers whatever muscle it relaxes. Relax the frontalis in a face that was using it to keep hooded lids open and both brow and lid come down — the labelled 2% each (<a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=485d9b71-6881-42c5-a620-a4360c7192ab" rel="noopener nofollow" target="_blank">prescribing information</a>), concentrated in exactly this face. Relax the depressors instead and the brow tail rises, 4.83 mm from the lateral canthus in the measured series and 0.6–2.1 mm in the randomised trial (<a href="https://pubmed.ncbi.nlm.nih.gov/10724275/" rel="noopener nofollow" target="_blank">temporal brow-lift study</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/29280866/" rel="noopener nofollow" target="_blank">brow-height RCT</a>). The <a href="/forehead-lines">forehead-lines guide</a> has the eyelid test that predicts which foreheads should be left alone.</p>
    `,
  },
  {
    id: 'faq-drops',
    category: 'faq',
    title: 'How well do the eyelid-lifting drops work, and for whom?',
    tldr: 'About a millimetre — 1.16 mm against 0.50 on placebo at two weeks, 1.40 mm pooled across five studies — within minutes, for the day, for the ptosis type only. Nothing for a fold of skin or a fallen brow; a rescue for a lid dropped by toxin; and a test of whether Müller\'s-muscle surgery will work.',
    bodyHtml: `
      <p>The two phase 3 trials and the pooled analysis give the size: 1.16 mm at day 14 against 0.50 on placebo, onset within five to fifteen minutes, holding through day 42, with the visual-field endpoint met and adverse events no more frequent than placebo (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8240850/" rel="noopener nofollow" target="_blank">pooled phase 3 analysis</a>); the systematic review pools 1.40 mm across 458 people (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11635132/" rel="noopener nofollow" target="_blank">oxymetazoline systematic review</a>). A millimetre on a lid that sits at 2 mm is the difference between a sleepy eye and an ordinary one; on a fold of skin it is invisible. The drop is a daily habit with a monthly cost, works while it is in the eye, and is the cheapest way to find out whether your problem is the margin at all.</p>
    `,
  },
  {
    id: 'faq-surgery-lasts',
    category: 'faq',
    title: 'How long does an eyelid lift last, and will I need it again?',
    tldr: 'Ten to fifteen years is the usual answer for the skin, because skin removed does not return, though skin keeps ageing and the brow keeps descending; browpexy held 2–3 mm at two years, endoscopic brow lifts one to six years with lateral relapse, and ptosis repair needs a second operation in 3–20%. Once, for most people, with the brow the part that comes back.',
    bodyHtml: `
      <p>The blepharoplasty's result is measured in the decade: the fold removed does not regrow, and what returns is the ageing of what was left and, above all, the brow — which is why the browpexy studies exist, holding 2–3 mm at 24 months where blepharoplasty alone let the brow fall half a millimetre below where it started (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11826645/" rel="noopener nofollow" target="_blank">browpexy comparison</a>). Brow lifts are sustained one to six years in the meta-analysis with lateral relapse of 2–3 mm in some series (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11834984/" rel="noopener nofollow" target="_blank">brow-lift meta-analysis</a>); ptosis repair is revised in 2.6–7.7% in the randomised trial and up to 20% in the largest series (<a href="https://pubmed.ncbi.nlm.nih.gov/29369985/" rel="noopener nofollow" target="_blank">ptosis-repair RCT</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/16083839/" rel="noopener nofollow" target="_blank">272-procedure series</a>). The devices are the ones repeated yearly.</p>
    `,
  },
  {
    id: 'faq-forehead-lines',
    category: 'faq',
    title: 'Will fixing my eyelids reduce my forehead lines?',
    tldr: 'Often, yes: in a 54-patient randomised trial, forehead-muscle activity fell from 80 to 39 microvolts a year after upper blepharoplasty and headaches improved, because the frontalis stopped holding the lids up. The lines etched by years of it need the forehead-lines guide; the habit that made them stops.',
    bodyHtml: `
      <p>The frontalis lifts hooded lids all day, and the trial that measured it found electrical activity halved a year after the lids were done, with headaches better (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9866996/" rel="noopener nofollow" target="_blank">headache trial</a>); the functional review lists fewer headaches among the consistent gains (<a href="https://pubmed.ncbi.nlm.nih.gov/30528286/" rel="noopener nofollow" target="_blank">functional outcomes review</a>). The dynamic lines soften as the muscle relaxes; the static grooves it etched over years are the <a href="/forehead-lines">forehead-lines guide</a>'s problem, and toxin for them becomes safe only once the lids no longer need the forehead.</p>
    `,
  },
  {
    id: 'faq-medical',
    category: 'faq',
    title: 'Is this medical or cosmetic — and does a visual-field test matter?',
    tldr: 'Both, and the test decides which: an upper lid or brow that cuts into the superior visual field on a formal test, with photographs showing the margin or the fold over the pupil, is a functional problem that health systems and insurers may cover; the same fold that annoys you in photographs is cosmetic. The operation is the same; the paperwork is not.',
    bodyHtml: `
      <p>Hooding and ptosis remove the top of the visual field, and the functional review lists an enlarged visual field, better vision-related quality of life and fewer headaches after surgery (<a href="https://pubmed.ncbi.nlm.nih.gov/30528286/" rel="noopener nofollow" target="_blank">functional outcomes review</a>); the oxymetazoline trials used a superior visual-field test as their primary endpoint for the same reason (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8240850/" rel="noopener nofollow" target="_blank">pooled phase 3 analysis</a>). Most health systems that fund eyelid surgery ask for a visual-field test with and without the lid taped up, a margin measurement and photographs; the thresholds vary by country and insurer, and an oculoplastic surgeon knows the local ones. The cosmetic version of the same operation differs only in who pays.</p>
    `,
  },
  {
    id: 'faq-nonsurgical-best',
    category: 'faq',
    title: 'What is the best non-surgical option?',
    tldr: 'For the ptosis type, the drop, with two randomised trials and a millimetre. For the outer-brow hood, toxin in the depressors for a few millimetres, or ultrasound for about two. For the fold of skin, nothing non-surgical does more than a quarter of what the scalpel does, and the plasma pen does less than that with burns.',
    bodyHtml: `
      <p>Sort by type first. The margin has a drug with trials (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8240850/" rel="noopener nofollow" target="_blank">pooled phase 3 analysis</a>); the brow has toxin at the tail (<a href="https://pubmed.ncbi.nlm.nih.gov/10724275/" rel="noopener nofollow" target="_blank">temporal brow-lift study</a>) and ultrasound at about two millimetres (<a href="https://pubmed.ncbi.nlm.nih.gov/20115948/" rel="noopener nofollow" target="_blank">ultrasound brow study</a>); the skin has radiofrequency at up to a quarter of a fold in most (<a href="https://pubmed.ncbi.nlm.nih.gov/17163476/" rel="noopener nofollow" target="_blank">radiofrequency eyelid trial</a>). Anyone promising a non-surgical blepharoplasty is describing one of those three with adjectives, or a plasma pen.</p>
    `,
  },
  {
    id: 'faq-scar',
    category: 'faq',
    title: 'Where is the scar, and does it show?',
    tldr: 'Upper blepharoplasty: in the crease, invisible with the eye open and a fine line with it shut. Ptosis repair by the internal route: no skin scar. Browpexy: none of its own. Brow lift: behind the hairline, with numbness and sometimes thin hair along it. The scar is not the reason to avoid eyelid surgery; the surgeon who takes too much skin is.',
    bodyHtml: `
      <p>The blepharoplasty incision sits in the lid crease and is hidden by the fold when the eye is open; the technique trial compared scarring between skin-only and skin-and-muscle operations and found no difference, with satisfaction rising over the year (<a href="https://pubmed.ncbi.nlm.nih.gov/35219565/" rel="noopener nofollow" target="_blank">technique trial</a>). Müller's-muscle resection is done from the inside of the lid with no skin incision (<a href="https://pubmed.ncbi.nlm.nih.gov/29369985/" rel="noopener nofollow" target="_blank">ptosis-repair RCT</a>), and the internal browpexy uses the blepharoplasty's incision. The endoscopic brow lift hides in the hair and pays in scalp numbness and, sometimes, hair loss along the incisions (<a href="https://www.ncbi.nlm.nih.gov/books/NBK545220/" rel="noopener nofollow" target="_blank">StatPearls on endoscopic brow lift</a>).</p>
    `,
  },
  {
    id: 'faq-cost-ladder',
    category: 'faq',
    title: 'What does it cost, from cheapest to dearest?',
    tldr: 'Free (the finger test, the brow pencil) → €150–300 a toxin brow lift every three to four months → €150–250 a month for the drops → €400–900 radiofrequency → €400–700 filler in a hollow lid → €800–1,500 ultrasound → €2,500–5,000 an upper blepharoplasty or a ptosis repair, plus €500–1,500 for a browpexy → €4,000–8,000 an endoscopic brow lift. The strongest evidence is at the €2,500 rung; the drops are the strongest non-surgical one.',
    bodyHtml: `
      <p>The self-checks and the pencil are free; the toxin brow lift and the drops cost a few hundred euros a season for a few millimetres that last as long as the drug; the devices cost the same or more for a year of one to two millimetres; and the operations, at a few thousand euros once, are the only rungs that move a fold, a margin or a brow by the amount most hooded eyes need. Prices are typical Western European ranges and vary by city, surgeon and whether the lid, the brow and the tendon are done in one sitting, which is cheaper than three.</p>
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
    intro: '"Hooded" is one word for three problems — surplus lid skin, a fallen brow, a slipped lid margin — and a finger on the brow and a ruler on a flash photograph tell you which of the three drivers is yours.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which hooded eye do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: the optical lift, and what a jar cannot do',
    intro: 'The brow pencil and the makeup with an experiment behind them, and the tapes and creams that move nothing structural.',
    sections: home,
  },
  {
    id: 'inj',
    title: 'Drops, toxin and filler',
    intro: 'The first drug for a slipped lid margin, with two randomised trials; the toxin brow lift measured in millimetres; and the filler for the one hooded type that needs adding rather than removing.',
    sections: inj,
  },
  {
    id: 'clinic',
    title: 'Devices: ultrasound, radiofrequency and plasma',
    intro: 'The non-surgical menu graded in the unit the brochures avoid — about two millimetres of brow, a quarter of a fold, and burns.',
    sections: clinic,
  },
  {
    id: 'surg',
    title: 'Surgery: the lid, the tendon and the brow',
    intro: 'The most performed cosmetic operation in the world and the operations done with it — each for a different one of the three problems, and combined when a face has two.',
    sections: surg,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The droop that is a nerve or a muscle disease, the bleed behind the eye, the toxin that drops the face it was meant to lift, and the devices and filler a few millimetres from the eye.',
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
  lid: 'Eyelid skin',
  brow: 'Brow position',
  ptosis: 'Lid margin (ptosis)',
  hollow: 'Hollow lid',
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
