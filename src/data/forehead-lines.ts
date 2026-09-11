/**
 * Forehead lines (horizontal forehead lines) guide — single source of truth
 * (problem template).
 *
 * Consumed by /forehead-lines. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: horizontal forehead lines are made by the frontalis, the
 * only muscle that lifts the brows — and in a large share of people that
 * muscle is working overtime to hold heavy lids and drooping brows out of
 * the line of sight. Toxin has the best evidence on this page (two phase 3
 * trials, a regulator's label with the side-effect rates), but it trades
 * lines for heaviness in exactly the patients whose frontalis is doing a
 * job; for them the treatment of the forehead is the eyelid or the brow.
 * The forehead is also the highest-risk site on the face for filler
 * blindness, which is why the filler rows are graded on thin evidence and
 * heavy caveats.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'dynamic' | 'static' | 'brow' | 'skin' | 'general';

export type SectionCategory = 'concept' | 'context' | 'home' | 'inj' | 'clinic' | 'safety' | 'faq';

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
  'Horizontal forehead lines are folded by the frontalis, the only muscle that lifts the brows — and in many foreheads that muscle is holding heavy lids and low brows out of the line of sight. In a 160-patient series, people with forehead lines were more likely to have eyelid ptosis (90% vs 77%), and every one of 28 people with one-sided lines had ptosis on that side.',
  'Close your eyes, relax your forehead, open slowly without raising your brows. If the lids hood and the view narrows, your frontalis is doing a job, and toxin that stops it trades lines for heaviness. For that forehead the treatment is the eyelid or the brow, with toxin used lightly and high.',
  'Toxin has the best evidence here: 61% of patients two grades better at a month against 0% on placebo in the 391-person phase 3 trial, licensed since 2017, with the label putting headache at 9% vs 5%, eyelid droop at 2% vs 0% and brow droop at 2%. It is given with the frown lines, in small doses above the line where the forehead’s two halves converge.',
  'Etched lines that stay at rest need more than toxin: a soft superficial filler improved 83% of foreheads at 12 weeks in the post-market study behind its European licence, and an 18-month series held two-thirds of the gain — but the forehead, glabella and nose are the three sites where filler has caused blindness, so this is cannula, tiny aliquots and an expert.',
  'For the brow-dependent forehead the lift is the treatment: focused ultrasound raised the brow about 2 mm in a 42-person blinded study, an endoscopic brow lift holds 3–4 mm over years in meta-analysis, and after upper blepharoplasty the frontalis relaxes measurably — its electrical activity halved at a year in a randomised trial — which is why forehead lines often soften after eyelid surgery.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-dynamic',
    kind: 'Muscle',
    title: 'The only muscle that lifts your brows',
    blurb: 'The frontalis raises the brows for surprise, emphasis and every glance upward, and folds the forehead skin each time; its two halves pull toward a line about 60% of the way up, which is where the deepest crease forms.',
  },
  {
    id: 'type-compensatory',
    kind: 'The eyelids',
    title: 'A forehead working to hold heavy lids up',
    blurb: 'When the upper lid droops or hoods, the frontalis lifts the brow all day to keep the view clear; people with forehead lines are more likely to have eyelid ptosis, and one-sided lines almost always sit over the droopier eye.',
  },
  {
    id: 'type-static',
    kind: 'Skin & sun',
    title: 'The most sun-exposed skin on the face, printing the fold',
    blurb: 'The forehead takes more sun than any other part of the face; as the dermis thins and loses recoil, the fold the muscle makes stops springing back, and the line is there when the face is at rest.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'line-anatomy',
    category: 'concept',
    title: 'What a forehead line actually is',
    tldr: 'A fold made by the frontalis — a sheet of muscle with no bony attachment that lifts the brows against the frown muscles below. Its two halves move toward a convergence line about 60% of the way up the forehead, where the deepest crease forms.',
    bodyHtml: `
      <p>The frontalis is a thin sheet of muscle running from the scalp to the brows, the only muscle that raises them, and it has no attachment to bone: it pulls the brow up against the frown muscles — corrugator, procerus, orbicularis — that pull it down (<a href="https://pubmed.ncbi.nlm.nih.gov/32491684/" rel="noopener nofollow" target="_blank">frontalis anatomy</a>; <a href="https://link.springer.com/article/10.1007/s00266-013-0178-1" rel="noopener nofollow" target="_blank">functional anatomy</a>). Because it is anchored above and below by skin rather than bone, contraction moves the forehead in two directions at once: in 27 volunteers of both sexes, the lower forehead skin moved up and the upper forehead skin moved down, converging on a horizontal "C-line" at about 61% of forehead height that coincided with the second line from the top (<a href="https://pubmed.ncbi.nlm.nih.gov/32332530/" rel="noopener nofollow" target="_blank">PRS, 2020</a>). That is where the deepest crease lives, and it is also the line above which toxin can be placed without dropping the brow.</p>
      <p>Every raise of the brows folds the skin at these lines. In youth the fold springs back; as the dermis thins and loses elastic recoil, the fold prints and the line is there at rest. What makes forehead lines different from every other line on the face is the muscle's other job — see the next two drawers.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'Who gets them, and why men get them deeper',
    tldr: 'Among the earliest lines on the face, often visible in the twenties on raising; the validated 0–4 scale was built on 295 people. In a 160-patient series, people with forehead lines were older, three times as likely to be men, and more likely to have drooping lids.',
    bodyHtml: `
      <p>Forehead lines appear early, usually as dynamic creases on raising the brows in the twenties, and deepen into resting lines through the forties; the validated photonumeric scale runs from 0 (none) through fine lines only on expression (1) to deep wrinkles at rest with deep furrows on expression (4), and was built and tested on 295 live subjects (<a href="https://pubmed.ncbi.nlm.nih.gov/27661747/" rel="noopener nofollow" target="_blank">scale validation</a>). Men get them deeper, with thicker skin and heavier brows that ask more of the frontalis: in a retrospective series of 160 patients over 50, those with fixed forehead lines were older (61.6 vs 58.6 years), three times as often male (36% vs 12%), and more likely to have eyelid ptosis (90% vs 77%) and excess lid skin (20% vs 5%) (<a href="https://pubmed.ncbi.nlm.nih.gov/30030561/" rel="noopener nofollow" target="_blank">Aesthetic Plastic Surgery, 2018</a>). Sun, smoking and a habit of talking with the eyebrows set the pace.</p>
    `,
  },
  {
    id: 'why-hard',
    category: 'concept',
    title: 'Why the forehead is a trade, not a fix',
    tldr: 'The muscle that makes the lines is the muscle holding the brows up: toxin that stops it can drop the brow and hood the eyes in the wrong patient; etched lines outlast the muscle; and the forehead is the highest-risk site for filler blindness. The ladder is the frown lines first, the frontalis lightly and high, and the eyelids or brow when they are the cause.',
    bodyHtml: `
      <p>Every other line on the face can be treated by quietening the muscle that makes it. The forehead cannot, quite, because the frontalis is also the muscle that keeps the brows and lids out of the eyes; the 160-patient series found ptosis in 90% of people with forehead lines, and its authors warn that chemodenervation "may have significant adverse effects on the visual field by forcibly blocking frontalis compensation" (<a href="https://pubmed.ncbi.nlm.nih.gov/30030561/" rel="noopener nofollow" target="_blank">2018 series</a>). So toxin on the forehead is a dose-finding exercise in the individual: enough to soften the lines, not enough to drop the brow, always with the frown muscles treated so the lifters have less to fight (<a href="https://doi.org/10.3390/toxins17120603" rel="noopener nofollow" target="_blank">2025 review</a>).</p>
      <p>Two more constraints. Lines that have printed into the skin outlast the muscle and need skin work or a soft filler — and the forehead, glabella and nose are the three sites where filler has caused blindness, because their arteries connect to the eye (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7427155/" rel="noopener nofollow" target="_blank">visual-loss consensus</a>). And for the forehead that is compensating for heavy lids, the honest treatment is not on the forehead at all: after upper blepharoplasty the frontalis measurably relaxes, and after a brow lift it no longer needs to work. This page grades all of it, with the trade stated each time.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-dynamic',
    category: 'context',
    title: 'Dynamic lines (only when you raise your brows)',
    tldr: 'Lines that appear on raising and vanish when the forehead is relaxed — the muscle alone, the stage where toxin works cleanly and skincare keeps the fold from printing.',
    focus: 'dynamic',
    bodyHtml: `
      <p>Raise your brows in a mirror and relax. Lines that vanish completely are dynamic: the skin still springs back, and the frontalis is the whole cause. This is the stage where a light dose of toxin, given with the frown lines, softens the lines for three to four months without touching the brow, and where sunscreen and a retinoid keep the fold from printing. Before anyone injects, do the eyelid test in the drawer below — a dynamic-looking forehead can still be a working one.</p>
    `,
  },
  {
    id: 'type-static',
    category: 'context',
    title: 'Etched lines (there at rest)',
    tldr: 'Lines present with the forehead fully relaxed — the fold has printed into thinned skin. Toxin still softens and stops them deepening, and over cycles they shallow; what remains wants a superficial filler or resurfacing.',
    focus: 'static',
    bodyHtml: `
      <p>Relax the forehead completely — hand flat on the brow if it helps — and look. Lines still there are etched: the collagen beneath the fold has been creased past recovery, and no dose of toxin removes them on day one. Toxin still matters — it stops the folding, and etched forehead lines shallow over successive cycles as the skin stops being creased — but the residue after three months of a quiet muscle is skin, and belongs to a soft, superficial hyaluronic gel (the one filler licensed for forehead lines in Europe), a retinoid and, for the deepest, fractional resurfacing. Deep furrows in a thick male forehead sometimes want structural support on the bone as well.</p>
    `,
  },
  {
    id: 'type-compensatory',
    category: 'context',
    title: 'The working forehead (heavy lids, low brows)',
    tldr: 'A forehead that lifts all day to hold hooded lids and low brows out of the eyes — the commonest reason toxin disappoints. The eyelid test finds it; the treatment is the lid or the brow, with toxin only lightly and above the convergence line.',
    focus: 'brow',
    bodyHtml: `
      <p>Close your eyes, let the forehead go slack, then open the eyes slowly without letting the brows rise. If the upper lids hood, the lashes disappear under a fold of skin, or the top of the view narrows, the frontalis is compensating: it has been holding the brows up to keep the eyes open, and the forehead lines are the receipt. This is common after fifty, commoner in men, and it is what the 160-patient series measured — ptosis in 90% of those with forehead lines, and one-sided lines over the droopier eye in every case (<a href="https://pubmed.ncbi.nlm.nih.gov/30030561/" rel="noopener nofollow" target="_blank">2018 series</a>). Toxin that stops this frontalis gives a smooth forehead, a low brow and a tired, hooded eye for three months. The treatments for this forehead are upper blepharoplasty, ptosis repair or a brow lift — after which the muscle relaxes on its own — with toxin, if at all, in small doses high on the forehead and always with the frown muscles.</p>
    `,
  },
  {
    id: 'type-asymmetric',
    category: 'context',
    title: 'Lines on one side only',
    tldr: 'One-sided forehead lines almost always sit over the eye whose lid droops more: in the series, all 28 people with unilateral lines had ptosis on that side. Check the lid before treating the line.',
    focus: 'brow',
    bodyHtml: `
      <p>A forehead lined on one side and smooth on the other is a diagnostic gift. In the 160-patient series, all 28 patients with unilateral fixed forehead lines had eyelid ptosis on the same side — the frontalis on that side is lifting harder to keep that eye open (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6211947/" rel="noopener nofollow" target="_blank">abstract</a>). Look at the lids in a photograph taken straight on: the eye under the lines will show less of its upper lid and a lower brow. Treating that side's frontalis with toxin evens the forehead and drops the already-lower brow further; the fix is the lid, and a one-sided ptosis is something an oculoplastic surgeon should see.</p>
    `,
  },
  {
    id: 'type-glabellar-link',
    category: 'context',
    title: 'The frown–forehead tug of war',
    tldr: 'The frontalis works against the frown muscles; in an 18-person pilot, treating the frown lines alone brought forehead lines from grade 3 to grade 1 over three cycles without touching the frontalis. Why the glabella is always treated first, and sometimes only.',
    focus: 'dynamic',
    bodyHtml: `
      <p>The frontalis lifts against the corrugators and procerus, so a strong frown complex makes the frontalis work harder to hold the brows where the face wants them. Quieten the frown muscles and the lifter can relax: in a prospective pilot, 18 patients (mean age 39) with moderate to very severe frown lines were treated with toxin in the glabella only, and their forehead-wrinkle scale fell from 3.0 to 1.0 over three treatment cycles, with frontal skin displacement on 3D imaging falling from 37 mm to 18 mm — no frontalis injections at all (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12330204/" rel="noopener nofollow" target="_blank">pilot study</a>). That is why the licensed forehead treatment is always given with the glabella, why co-treatment reduces the risk of brow droop, and why, for the working forehead that cannot afford a weak frontalis, treating the frown lines alone is a legitimate plan.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'The raise test, the eyelid test and the photograph',
    tldr: 'Raise and relax: what stays is etched. Close, relax, open slowly without raising: hooding means a working forehead. Compare the two sides. Photograph at rest and raised, straight on, before anything, and take your glasses prescription with you.',
    bodyHtml: `
      <p>Three tests before any needle. Raise the brows and relax: lines that vanish are dynamic, lines that stay are etched. Close the eyes, let the forehead go, open slowly without raising the brows: if the lids hood or the view narrows, the frontalis is working and toxin will cost you brow height. Compare the sides: lines on one side mean a droopier lid on that side. Then a photograph straight on, at rest and raised, in one light, with the brows' resting height visible — every treatment on this page is judged against it, and a brow that drops after toxin is only provable with a before. Two questions for the clinician: whether you squint or raise your brows to see (an out-of-date glasses prescription makes a forehead work), and whether your brows sit low already, which is the single best predictor of a heavy result.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-spf',
    category: 'home',
    title: 'Sunscreen, a hat and a fringe',
    tldr: 'The forehead is the most sun-exposed skin on the face, and daily sunscreen cut measured skin aging by 24% in the one randomised prevention trial. The skin half of the problem, and the cheapest.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: everyone — the only prevention with a trial, on the skin that takes the most sun',
    sessions: 'Every morning',
    downtime: 'None',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>The forehead faces the sky, and it is where sun does its most measurable work on the face. Daily sunscreen users in the Nambour trial showed no detectable increase in skin aging over 4.5 years — 24% less than discretionary users (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>) — and the forehead is the zone most people apply it to first and reapply to never. A hat does the rest; a fringe does it for free and hides the lines while it does. Graded moderate rather than strong because no trial has measured forehead lines and the muscle is untouched: this keeps the fold from printing, and nothing else.</p>
    `,
  },
  {
    id: 'home-retinoid',
    category: 'home',
    title: 'A retinoid across the forehead',
    tldr: 'Eight randomised tretinoin trials show fewer fine and coarse wrinkles over vehicle; the forehead tolerates it well and it softens the etched component. It does not touch the muscle.',
    evidence: 'moderate',
    focus: 'static',
    sessions: 'Nightly, indefinitely',
    downtime: 'Weeks of dryness',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>Tretinoin thickens the epidermis and rebuilds upper-dermal collagen; the meta-analysis of eight randomised trials in 1,361 patients found significant improvement in both fine and coarse wrinkles over vehicle (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/" rel="noopener nofollow" target="_blank">meta-analysis</a>). The forehead's thick skin tolerates it better than the eyes or mouth, and it is the base under toxin for anyone with lines at rest: the muscle stops folding, the retinoid rebuilds the crease. Moderate here rather than strong because a forehead line is a fold first and a wrinkle second. The <a href="/wrinkles">wrinkles guide</a> covers the retinoid ladder.</p>
    `,
  },
  {
    id: 'home-peptides',
    category: 'home',
    title: '"Topical Botox" peptides (acetyl hexapeptide-3 / Argireline)',
    tldr: 'A 60-person placebo-controlled trial found a 49% anti-wrinkle response against 0% on placebo around the eyes after four weeks, and a blinded crow’s-feet trial agrees; the effect is a fraction of toxin’s and nobody has tested the forehead.',
    evidence: 'emerging',
    focus: 'dynamic',
    sessions: 'Twice daily',
    downtime: 'None',
    cost: '€20–80 / month',
    bodyHtml: `
      <p>Acetyl hexapeptide-3 mimics a fragment of the protein toxin cleaves, and the marketing calls it topical Botox. The evidence is small and positive: 60 Chinese subjects randomised to the peptide or placebo on periorbital wrinkles twice daily for four weeks showed a 48.9% anti-wrinkle response against 0% on placebo (<a href="https://www.ovid.com/journals/ajcde/pdf/10.1007/s40257-013-0009-9~the-anti-wrinkle-efficacy-of-argireline-a-synthetic" rel="noopener nofollow" target="_blank">randomised study</a>), and a double-blind randomised trial of the peptide cream against a palmitoyl pentapeptide cream on crow's feet found measurable improvement (<a href="https://jcadonline.com/trial-acetylhexapeptide-cream-crows-feet/" rel="noopener nofollow" target="_blank">JCAD trial</a>). Skin-deep, a fraction of an injection's effect, and untested on the frontalis — but harmless, and the one cream with a mechanism aimed at the muscle rather than the skin.</p>
    `,
  },
  {
    id: 'home-eyes',
    category: 'home',
    title: 'An eye test, the right glasses and sunglasses',
    tldr: 'A forehead that lifts to see — an old prescription, screen squinting, glare — works all day; no trial exists, but the lid-ptosis series makes the mechanism plain. Free, and the first thing to fix in a working forehead.',
    evidence: 'emerging',
    focus: 'brow',
    sessions: 'Once, then every two years',
    downtime: 'None',
    cost: 'Free–€50',
    bodyHtml: `
      <p>The frontalis is recruited whenever the eyes need more room — a lid that droops, a brow that has fallen, a screen that is too dim, a prescription two years out of date, glare that makes you lift the brows instead of narrowing the eyes. The 160-patient series established the lid half of that mechanism (<a href="https://pubmed.ncbi.nlm.nih.gov/30030561/" rel="noopener nofollow" target="_blank">2018 series</a>); nobody has trialled the glasses half, which is why the row sits at emerging. An eye test, current lenses, sunglasses outdoors and a brighter screen cost almost nothing and remove hours of daily brow-lifting from a forehead that is compensating. Not a treatment for a line that exists; a habit that stops the next one.</p>
    `,
  },
  {
    id: 'home-patches',
    category: 'home',
    title: 'Silicone forehead patches, wrinkle tape and overnight "smoothing" pads',
    tldr: 'Splinting the forehead overnight stops it folding for eight hours and hydrates the crease so it looks softer for an hour on removal; the century-old products have no controlled trial. Cheap, harmless, temporary.',
    evidence: 'limited',
    focus: 'static',
    sessions: 'Nightly',
    downtime: 'None',
    cost: '€15–40',
    bodyHtml: `
      <p>Adhesive forehead patches are the oldest wrinkle product still sold, and the mechanism is honest: the forehead cannot fold while it is taped flat, and silicone holds water against the crease so it plumps for an hour or two after removal. No controlled trial exists for any of them on forehead lines, the effect ends when the tape comes off, and the muscle resumes at breakfast. A harmless experiment before an event; not a plan.</p>
    `,
  },
  {
    id: 'home-facial-exercise',
    category: 'home',
    title: 'Facial exercise and "forehead yoga"',
    tldr: 'Raising the brows is the movement that makes the line; the one facial-exercise pilot measured cheek fullness, not the forehead. Counterproductive here.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'Do not, for the forehead',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Facial-exercise programmes include brow raises and "forehead smoothing" movements that contract the frontalis — the muscle whose contraction is the wrinkle. The 20-week pilot in 16 women found fuller cheeks with no control group and no forehead measurement (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/2666801" rel="noopener nofollow" target="_blank">Alam 2018</a>); the best-evidenced treatment on this page works by doing the opposite. If anything, the useful habit is the reverse: noticing when the brows are up and letting them down.</p>
    `,
  },
];

const inj: Section[] = [
  {
    id: 'inj-toxin-frontalis',
    category: 'inj',
    title: 'Botulinum toxin in the frontalis, with the frown lines',
    tldr: 'Two phase 3 trials: 61% at least two grades better at a month vs 0% on placebo (391 patients) and 46–53% vs 0.6% (787 patients); licensed since 2017 at 20 units across five points, always with 20 units in the glabella. Label rates: headache 9% vs 5%, eyelid droop 2% vs 0%, brow droop 2%.',
    evidence: 'strong',
    focus: 'dynamic',
    note: 'Best for: dynamic lines in a forehead that passes the eyelid test — the treatment, given lightly and high',
    sessions: 'Every 3–4 months',
    downtime: 'None',
    cost: '€150–350 (UK £150–350 for one or two areas)',
    bodyHtml: `
      <p>Weakening the frontalis stops the folding, and the evidence is regulator-grade. In the pivotal 12-month phase 3 trial, 391 patients with moderate-to-severe forehead and glabellar lines were randomised to onabotulinumtoxinA 40 U — 20 U across the frontalis and 20 U in the glabella — or placebo: at day 30, 61.4% had improved at least two grades on both investigator and self-assessment against 0% on placebo, and 94.8% versus 1.7% were rated none or mild (<a href="https://pubmed.ncbi.nlm.nih.gov/33065953/" rel="noopener nofollow" target="_blank">phase 3 trial</a>); the companion trial of 787 patients treated with or without crow's feet found 45.6% and 53.0% two grades better against 0.6% (<a href="https://pubmed.ncbi.nlm.nih.gov/30096106/" rel="noopener nofollow" target="_blank">upper-face trial</a>), with satisfaction measured separately (<a href="https://pubmed.ncbi.nlm.nih.gov/30829771/" rel="noopener nofollow" target="_blank">patient-reported outcomes</a>). The prescribing information records the trade: in 665 treated patients against 315 on placebo, headache 9% vs 5%, eyelid ptosis 2% vs 0%, brow ptosis 2% (<a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=485d9b71-6881-42c5-a620-a4360c7192ab" rel="noopener nofollow" target="_blank">prescribing information</a>). A GRADE-assessed meta-analysis of three phase 3 trials of incobotulinumtoxinA in 704 patients gives a relative risk of 19 for a one-grade forehead improvement at day 30, with no significant excess of brow ptosis (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13253580/" rel="noopener nofollow" target="_blank">meta-analysis</a>); the longer-acting daxibotulinumtoxinA has phase 2 forehead data (<a href="https://www.biospace.com/revance-announces-positive-results-in-two-phase-2a-studies-of-daxibotulinumtoxina-for-injection-for-the-treatment-of-forehead-lines-and-crow-s-feet-respectively" rel="noopener nofollow" target="_blank">phase 2a</a>).</p>
      <p>Technique is the whole art: small doses spread across the upper two-thirds of the forehead above the convergence line, nothing within a centimetre of the brow, less on the sides (the "Spock" peak comes from an untreated lateral frontalis), and always with the glabella so the lifters have less to fight (<a href="https://doi.org/10.3390/toxins17120603" rel="noopener nofollow" target="_blank">2025 review</a>). Effect at a week, peak at two, three to four months. The first treatment is a trial of your own forehead: photograph the brow height before, and expect the second visit to adjust the dose.</p>
    `,
  },
  {
    id: 'inj-toxin-glabella-first',
    category: 'inj',
    title: 'Frown lines only, for the working forehead',
    tldr: 'For the forehead that cannot afford a weak frontalis, treating the glabella alone: forehead lines fell from grade 3 to grade 1 over three cycles in an 18-person pilot, with brow position preserved. Small, prospective, and the safest first move for heavy lids.',
    evidence: 'emerging',
    focus: 'brow',
    note: 'Best for: low brows, hooded lids, or a forehead that dropped after a previous treatment',
    sessions: 'Every 3–4 months',
    downtime: 'None',
    cost: '€150–250',
    bodyHtml: `
      <p>Because the frontalis works against the frown complex, quietening the frown muscles lets it rest without being weakened. The pilot is small and specific: 18 patients (mean age 39) with moderate to very severe glabellar lines received toxin in the glabella only across three cycles; forehead-wrinkle scores fell from 3.0 to 1.0, frontal skin displacement on 3D imaging fell from 37.2 mm to 17.9 mm, and brow position was scored throughout, without a single frontalis injection (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12330204/" rel="noopener nofollow" target="_blank">pilot study</a>). Emerging because it is 18 people without a control arm — but for the forehead that fails the eyelid test it is the plan with no downside, and if the lines soften enough the frontalis never needs touching. If they do not, a few units high on the forehead can be added at the next cycle.</p>
    `,
  },
  {
    id: 'inj-microbotox',
    category: 'inj',
    title: 'Intradermal micro-dosing ("microbotox", "baby botox")',
    tldr: 'Microdroplets of 0.1–0.2 units into the skin of the lower forehead to block only the surface fibres of the frontalis; reports describe softer lines with brow height unchanged, at the cost of a shorter effect. Described in reviews, not yet trialled against standard dosing.',
    evidence: 'emerging',
    focus: 'brow',
    sessions: 'Every 2–3 months',
    downtime: 'None',
    cost: '€150–300',
    bodyHtml: `
      <p>Instead of five intramuscular points, the toxin is diluted and placed as dozens of intradermal microdroplets of 0.1–0.2 U across the lower forehead, aiming to weaken only the superficial fibres that fold the skin while the deeper muscle keeps lifting the brow. The reviews describe reduced forehead-wrinkle severity with brow heights unchanged, and are candid that the effect is shorter and partial (<a href="https://doi.org/10.3390/toxins17120603" rel="noopener nofollow" target="_blank">2025 review</a>; <a href="https://academic.oup.com/asj/article/43/9/1015/7064988" rel="noopener nofollow" target="_blank">microtoxin roundtable</a>). No randomised comparison against standard dosing exists, which keeps it emerging. A reasonable choice for the low-browed forehead that wants something, and for the lower forehead where standard points cannot go.</p>
    `,
  },
  {
    id: 'inj-ha-static',
    category: 'inj',
    title: 'A soft, superficial hyaluronic-acid filler in etched lines',
    tldr: 'The one filler licensed for forehead lines in Europe improved 83% of foreheads at 12 weeks in its post-market study, maintained to 24 weeks; an 18-month series of a superficial gel in 84 foreheads held two-thirds of its gain. The forehead is the highest-risk site for filler blindness.',
    evidence: 'moderate',
    focus: 'static',
    note: 'Best for: lines that stay after three months of a quiet muscle — by cannula, in tiny amounts, from an expert',
    sessions: 'Every 6–12 months',
    downtime: '1–3 days; bruising',
    cost: '€300–600',
    bodyHtml: `
      <p>Once toxin has stopped the folding, the crease that remains is a groove in thinned skin, and a low-viscosity gel threaded just beneath it lifts the floor. The evidence is post-market rather than pivotal: the cohesive gel granted a European indication for horizontal forehead lines improved 82.7% of participants at 12 weeks with results maintained to 24 (<a href="https://plasticsurgerypractice.com/client-objectives/rejuvenation/injectibles/merz-aesthetics-receives-eu-approval-new-belotero-balance-indications/" rel="noopener nofollow" target="_blank">EU approval</a>); an 18-month prospective study of a superficial gel across 196 people treated 84 foreheads with about 1.1 ml, taking the forehead score down 1.5 grades at three weeks and holding a 0.8-grade improvement at 18 months, with 62–66% still counted as successes at the end (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11743021/" rel="noopener nofollow" target="_blank">18-month study</a>). Moderate rather than strong because none of it is randomised.</p>
      <p>The caveat outweighs the evidence. The supratrochlear and supraorbital arteries run up the forehead from the eye, and the forehead, glabella and nose are the three sites where hyaluronic filler has caused blindness (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7427155/" rel="noopener nofollow" target="_blank">visual-loss consensus</a>). Cannula, tiny aliquots, superficial placement, an injector who treats foreheads weekly and keeps hyaluronidase in the room, and a good reason. The <a href="/fillers">filler guide</a> covers the protocol.</p>
    `,
  },
  {
    id: 'inj-forehead-volume',
    category: 'inj',
    title: 'Deep forehead contouring on the bone (biostimulator or firm gel)',
    tldr: 'For the flat, bony forehead whose furrows persist after toxin: a 132-patient double-blind randomised trial of supraperiosteal filling with calcium hydroxylapatite, with or without hyaluronic acid, improved contour in most with 3.7% nodules and no vascular events. Structure, not lines.',
    evidence: 'emerging',
    focus: 'static',
    sessions: 'Every 12–24 months',
    downtime: '3–7 days',
    cost: '€600–1,200',
    bodyHtml: `
      <p>Some foreheads — often men's, often after years of toxin — keep their furrows because the forehead has flattened and the skin folds over bone with nothing between. Filling on the periosteum restores a convex forehead that folds less. The trial is real but narrow: 132 patients with forehead irregularities unresolved by toxin were randomised double-blind to diluted calcium hydroxylapatite or the same mixed with hyaluronic acid, placed supraperiosteally; the mixture gave better global improvement at 180 days (63 vs 55 improved), nodules occurred in 3.7% (four times fewer with the mixture), and no vascular complications were reported (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626347/" rel="noopener nofollow" target="_blank">double-blind RCT</a>). Emerging because it compares two actives without an untreated arm and treats contour rather than lines, and because deep forehead injection carries the same arterial risk as any forehead filler. The <a href="/regenerative-aesthetics">regenerative guide</a> grades the biostimulators.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-blepharoplasty',
    category: 'clinic',
    title: 'Upper blepharoplasty or ptosis repair (when the lids are the cause)',
    tldr: 'Fix the lid and the frontalis relaxes: in a 54-patient randomised trial, frontalis electrical activity halved at a year (80 to 39 mV) and headaches improved; brow descent of 1–4 mm is the visible sign of a muscle that has stopped working. The treatment of the working forehead.',
    evidence: 'moderate',
    focus: 'brow',
    note: 'Best for: the forehead that fails the eyelid test — hooded lids, a narrowed view, one-sided lines',
    sessions: 'Once; 10–15 years',
    downtime: '1–2 weeks of bruising; scar fades over months',
    cost: '€2,500–5,000 (UK £2,500–4,500)',
    bodyHtml: `
      <p>When the frontalis is lifting to hold hooded lids or a drooping eyelid out of the way, the treatment of the forehead is the eyelid. The evidence is the muscle relaxing after surgery: in a randomised trial of 54 patients comparing two blepharoplasty techniques, frontalis electromyographic activity fell significantly by 12 months (80 to 39 mV in the skin-only arm), both groups' brows descended 1.4–4.3 mm, and headache scores improved (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9866996/" rel="noopener nofollow" target="_blank">randomised trial</a>); a 13-patient EMG study found the same gradual fall in frontalis tone over six months (<a href="https://pubmed.ncbi.nlm.nih.gov/25709007/" rel="noopener nofollow" target="_blank">frontalis tonicity</a>); after ptosis repair, eyebrow descent of at least 5% occurred in 61% of 93 patients — the brow returning to where it belongs once the muscle stops compensating (<a href="https://pubmed.ncbi.nlm.nih.gov/39879807/" rel="noopener nofollow" target="_blank">case-control study</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/22421841/" rel="noopener nofollow" target="_blank">2012 study</a>). Moderate because forehead lines were never the measured endpoint: what is measured is the muscle switching off.</p>
      <p>The same descent is the trade: a blepharoplasty in someone with already-low brows can drop them, which is why surgeons add an internal browpexy — brow position rose about 3–4% with it and fell about 6% without in a 48-patient comparison (<a href="https://pubmed.ncbi.nlm.nih.gov/39150758/" rel="noopener nofollow" target="_blank">browpexy study</a>) — or pair the eyelid with a brow lift. The <a href="/eye-bags">eye guide</a> and the <a href="/anti-aging-50s">50s guide</a> cover the surgery.</p>
    `,
  },
  {
    id: 'clinic-hifu-brow',
    category: 'clinic',
    title: 'Microfocused ultrasound brow lift (Ultherapy and successors)',
    tldr: 'The first device cleared to lift the brow (2009): a randomised, blinded 42-person study measured 2.2 mm of lift at 90 days and 1.9 mm at 180, clinically significant in 87.5%; a 38-person study found 2.0 mm at a month and 1.6 mm at four. A lifted brow unloads the frontalis for a year.',
    evidence: 'moderate',
    focus: 'brow',
    note: 'Best for: a low brow in someone not ready for surgery — the non-surgical answer to the working forehead',
    sessions: 'Once a year',
    downtime: 'None; days of tenderness',
    cost: '€400–800 for the brow (UK £320–800)',
    bodyHtml: `
      <p>Focused ultrasound heats points in the deep dermis and the fibrous layer over the brow to contract them, and its first regulatory clearance, in 2009, was for lifting the brow (<a href="https://ultherapy.com/about-ultrasound-skin-lifting" rel="noopener nofollow" target="_blank">Ultherapy</a>). The measurements are millimetres and consistent: in a randomised, blinded, prospective study of 42 people (mean age 41), brow height rose by 2.16 mm at 90 days and 1.93 mm at 180, with 87.5% judged to have clinically significant elevation by two blinded assessors and only transient redness and swelling (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626351/" rel="noopener nofollow" target="_blank">randomised blinded study</a>); a prospective study of 38 patients treated across the forehead and lateral eye found average brow height up 1.99 mm at four weeks and 1.57 mm at sixteen, with glabellar wrinkles improved in 71% (<a href="https://pubmed.ncbi.nlm.nih.gov/39920474/" rel="noopener nofollow" target="_blank">2025 study</a>); the meta-analyses of the class find modest, consistent lifting (<a href="https://academic.oup.com/asj/article/45/3/NP86/7900203" rel="noopener nofollow" target="_blank">meta-analysis</a>). Two millimetres of brow is real, is not a surgical lift, and buys the forehead a year of doing less; it does not remove a line. Painful for a few minutes, and a risk to the temple's nerve branch in careless hands. A manufacturer summary supports a competing device's brow indication (<a href="https://api.sofwave.com/app/uploads/2024/12/MK00105_B-Eybrow-Neck-and-Submental-Lifting_Clinical-Study-Summary.pdf" rel="noopener nofollow" target="_blank">study summary</a>). The <a href="/jowls">jowls guide</a> grades the devices.</p>
    `,
  },
  {
    id: 'clinic-brow-lift',
    category: 'clinic',
    title: 'Endoscopic brow lift',
    tldr: 'Meta-analysis of 12 studies in 478 patients: brow elevation of 3.3 mm medially, 3.9 mm centrally and 4.4 mm laterally sustained at 1–6 years, with the lateral brow relapsing 2–3 mm in some series; forehead furrows improve as the frontalis stands down. Surgery, scars in the hair, numbness for months.',
    evidence: 'moderate',
    focus: 'brow',
    sessions: 'Once; 7–10 years',
    downtime: '2 weeks; numbness and itching for months',
    cost: '€5,000–8,000 (UK £4,500–7,000)',
    bodyHtml: `
      <p>Through small incisions behind the hairline, the forehead is released from the bone, the frown muscles weakened and the brow repositioned and fixed — the operation for the brow that has fallen and the forehead that has been holding it up. A systematic review and meta-analysis of 12 studies in 478 patients with one to six years of follow-up found pooled elevation of 3.25 mm at the medial brow, 3.86 mm centrally and 4.35 mm laterally, with the lateral brow the least stable — relapse of 2–3 mm within six months in some series, and one long-term analysis finding the brow tail only 0.7 mm above its starting point (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11834984/" rel="noopener nofollow" target="_blank">meta-analysis</a>). Objective one-year data found frontalis furrows significantly improved with 95% satisfaction (<a href="https://www.sciencedirect.com/science/article/abs/pii/S1090820X99001144" rel="noopener nofollow" target="_blank">one-year study</a>), and a 2026 AI analysis of 35 patients showed that the "bigger forehead" people notice afterward is the frontalis relaxing with the eyes open, not the hairline moving (<a href="https://pubmed.ncbi.nlm.nih.gov/42012844/" rel="noopener nofollow" target="_blank">PRS, 2026</a>). Numbness and itching of the scalp for months, small areas of hair loss around the incisions, and a lateral brow that drifts back; the <a href="/anti-aging-50s">50s guide</a> covers the decade.</p>
    `,
  },
  {
    id: 'clinic-fractional-laser',
    category: 'clinic',
    title: 'Fractional CO₂ and erbium resurfacing',
    tldr: 'Profilometry after three fractional CO₂ sessions found wrinkles significantly reduced in every facial zone, with the cheeks best (−58% size) and no separate forehead figure; the etched forehead line responds, the fold returns unless the muscle is treated. Skin work, after toxin.',
    evidence: 'emerging',
    focus: 'static',
    sessions: '1–3',
    downtime: '5–7 days per session',
    cost: '€400–1,500',
    bodyHtml: `
      <p>Fractional lasers ablate columns of skin and rebuild the dermis between them, and the forehead — thick, sebaceous, quick to heal — tolerates them well. The measured evidence is by zone rather than by line: a prospective profilometric study after three fractional CO₂ treatments found wrinkle size and depth significantly reduced in all four facial areas, best on the cheeks (−58% and −51%) and less on the periorbital zone (−35% and −31%), without a separate forehead figure (<a href="https://academic.oup.com/bjd/article-abstract/170/4/858/6614960" rel="noopener nofollow" target="_blank">BJD, 2014</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/25652114/" rel="noopener nofollow" target="_blank">satisfaction study</a>). Emerging for this problem on that basis: it rebuilds the crease, the muscle re-folds it, so it belongs after toxin for etched lines and not instead of it. Darker skin darkens; the <a href="/laser-ipl">laser guide</a> covers the devices.</p>
    `,
  },
  {
    id: 'clinic-rf-microneedling',
    category: 'clinic',
    title: 'Radiofrequency microneedling',
    tldr: 'Image-derived studies show tighter, better-hydrated forehead skin at 30 days with needles at 1.5 mm or more; no trial has used forehead lines as its endpoint, and the class carries a regulator’s alert on burns. Skin quality, not a fold.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '3–4, a month apart',
    downtime: '2–4 days',
    cost: '€400–800 / session',
    bodyHtml: `
      <p>Insulated needles deliver radiofrequency heat into the forehead dermis — at least 1.5 mm deep here, over bone — to contract and remodel it. The evidence is skin-metric: image-derived analysis after microneedle radiofrequency found improved wrinkle metrics, tone and hydration at 30 days with a low complication rate, and an independent benefit for forehead vascular parameters (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12685671/" rel="noopener nofollow" target="_blank">2025 study</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11181949/" rel="noopener nofollow" target="_blank">review</a>). No study has measured a forehead line, the muscle is untouched, and the FDA's alert on burns and scarring with these devices is recent (<a href="https://www.dermatologytimes.com/view/fda-alerts-clinicians-to-serious-complications-with-radiofrequency-microneedling-devices" rel="noopener nofollow" target="_blank">FDA alert</a>). For skin texture on a forehead already treated with toxin; the <a href="/microneedling">microneedling guide</a> covers the devices.</p>
    `,
  },
  {
    id: 'clinic-sleep-lines',
    category: 'clinic',
    title: 'The vertical lines are a different problem',
    tldr: 'Vertical creases on the forehead and temple are sleep lines from a pillow, not frontalis lines; no muscle makes them and toxin does nothing for them. Back-sleeping, a soft filler or resurfacing.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'Every night',
    downtime: 'None',
    cost: 'Free (€30–80 for a contoured pillow)',
    bodyHtml: `
      <p>A vertical or diagonal crease on one side of the forehead or temple that does not change when you raise your brows is a sleep wrinkle: the review that named them traces these lines to compression and shear of the face against the pillow in side- and stomach-sleepers, worsening as skin loses elasticity (<a href="https://pubmed.ncbi.nlm.nih.gov/27329660/" rel="noopener nofollow" target="_blank">Anson 2016</a>). No muscle makes them, so toxin does nothing; the answer is sleeping on the back where possible, a contoured pillow, and — for a crease that has printed — the same superficial filler or resurfacing as any etched line. Limited because nobody has randomised a pillow.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-toxin-brow',
    category: 'safety',
    title: 'Toxin on the forehead: the dropped brow and the heavy lid',
    tldr: 'Label rates: eyelid ptosis 2% vs 0%, brow ptosis 2%, headache 9% vs 5%. The real risk is who you are: low brows, hooded lids and a working frontalis predict heaviness that lasts the life of the toxin. Small doses, above the convergence line, never within a centimetre of the brow, always with the glabella.',
    bodyHtml: `
      <p>Two different droops. Brow ptosis is the frontalis weakened past what the face can spare: the brows sit lower, the lids look hooded, the face reads tired, for three to four months; the prescribing information puts it at 2% in the pivotal trials, and eyelid ptosis — toxin reaching the muscle that lifts the lid itself — at 2% against 0% on placebo, with headache in 9% against 5% (<a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=485d9b71-6881-42c5-a620-a4360c7192ab" rel="noopener nofollow" target="_blank">prescribing information</a>). Trial patients are selected for adequate brows; in the clinic the incidence follows the patient, and the reviews name the causes plainly — wrong site, too much dose, and the wrong forehead (<a href="https://pubmed.ncbi.nlm.nih.gov/33864431/" rel="noopener nofollow" target="_blank">complications review</a>). The prevention is anatomy: small doses spread high across the forehead above the convergence line, nothing within a centimetre of the brow, the sides treated so the lateral frontalis does not peak into a "Spock" brow, and the glabella treated so the lifters have less to fight (<a href="https://pubmed.ncbi.nlm.nih.gov/32332530/" rel="noopener nofollow" target="_blank">convergence-line study</a>; <a href="https://doi.org/10.3390/toxins17120603" rel="noopener nofollow" target="_blank">2025 review</a>). An eyedrop can lift a drooping eyelid a little for the duration; nothing lifts a dropped brow except time. Photograph the brow before, review at two weeks, and take a heavy result as information for the next dose, not a reason for more.</p>
    `,
  },
  {
    id: 'safety-forehead-filler',
    category: 'safety',
    title: 'Filler on the forehead: the arteries that reach the eye',
    tldr: 'The forehead, glabella and nose are the three sites where filler has caused blindness, because the supratrochlear and supraorbital arteries connect to the eye’s circulation; 511 cases have been published worldwide. Cannula, tiny aliquots, superficial or on the bone, hyaluronidase in the room.',
    bodyHtml: `
      <p>The supratrochlear and supraorbital arteries climb the forehead from the orbit, and filler forced into either can travel backward into the ophthalmic artery and occlude the retina. The consensus on minimising embolic visual loss names the forehead, glabella and nasal dorsum as the locations of greatest risk (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7427155/" rel="noopener nofollow" target="_blank">consensus</a>), and the 2024 review counts 511 published cases of filler-related blindness worldwide, the majority from these central sites (<a href="https://academic.oup.com/asj/article/44/10/1091/7649223" rel="noopener nofollow" target="_blank">2024 review</a>). The safeguards are the ones the trials used: superficial placement for lines or supraperiosteal for contour, a blunt cannula, aliquots of a tenth of a millilitre or less, slow injection with aspiration, no forehead filler after recent toxin has changed the landmarks, hyaluronidase in the room, and an injector who knows the emergency protocol by heart. Sudden pain, blanching or any change in vision during or after treatment is an emergency in minutes. The <a href="/fillers">filler guide</a> covers it.</p>
    `,
  },
  {
    id: 'safety-devices',
    category: 'safety',
    title: 'Ultrasound and radiofrequency: the temple nerve, the burn, the fat',
    tldr: 'The frontal branch of the facial nerve runs across the temple where brow-lift passes go; ultrasound can numb or weaken it for weeks, radiofrequency microneedling carries a regulator’s alert on burns, and both can thin the fat a hollow temple cannot spare.',
    bodyHtml: `
      <p>The frontal branch of the facial nerve — the one that moves the forehead — crosses the temple just under the skin on its way to the frontalis, exactly where brow-lift ultrasound passes are placed; transient numbness or a weak brow for weeks is the recognised risk, and the 42-person blinded study reported none (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626351/" rel="noopener nofollow" target="_blank">randomised blinded study</a>). Ultrasound is painful for minutes and can melt superficial fat in a temple that has none to spare. Radiofrequency microneedling over the thin forehead skin burns if the depth or energy is wrong, and the FDA's alert on burns and scarring is recent (<a href="https://www.dermatologytimes.com/view/fda-alerts-clinicians-to-serious-complications-with-radiofrequency-microneedling-devices" rel="noopener nofollow" target="_blank">FDA alert</a>). Ask who holds the handpiece and how many foreheads a month.</p>
    `,
  },
  {
    id: 'safety-surgery',
    category: 'safety',
    title: 'Brow lift and blepharoplasty: relapse, numbness, and the brow that drops',
    tldr: 'A brow lift numbs and itches the scalp for months, loses hair around the incisions and lets the lateral brow drift back 2–3 mm; a blepharoplasty in someone with low brows can drop them further (descent in 61% after ptosis repair). Pair the lid with the brow when both are low.',
    bodyHtml: `
      <p>The endoscopic brow lift's costs are the scalp's: numbness and itching for months where the sensory nerves were stretched, small patches of hair loss at the incisions, and the lateral brow relapsing 2–3 mm in some series within six months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11834984/" rel="noopener nofollow" target="_blank">meta-analysis</a>). The blepharoplasty's paradox is the brow: removing lid skin lets the frontalis relax, and the brow descends 1–4 mm — welcome in a brow that was being held too high, unwelcome in one that was already low, which is why eyebrow descent of at least 5% followed ptosis repair in 61% of 93 patients, more often in men and with larger skin excisions (<a href="https://pubmed.ncbi.nlm.nih.gov/39879807/" rel="noopener nofollow" target="_blank">case-control study</a>), and why an internal browpexy or a combined brow lift is planned when the brows start low (<a href="https://pubmed.ncbi.nlm.nih.gov/39150758/" rel="noopener nofollow" target="_blank">browpexy study</a>). Dry eye and incomplete closure follow an over-resected lid. A surgeon who assesses the brow before the lid is the one to choose.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-botox-heavy',
    category: 'faq',
    title: 'Will Botox make my brows heavy?',
    tldr: 'In the trials, brow droop in about 2%; in the clinic it follows who you are. Low brows, hooded lids, or a forehead that lifts to see predict heaviness. The eyelid test tells you before the needle does; small doses high on the forehead and the glabella treated first keep it rare.',
    bodyHtml: `
      <p>Sometimes, and predictably. Toxin weakens the only muscle that lifts the brows; if that muscle was doing a job — holding hooded lids or fallen brows out of your eyes — the forehead goes smooth and the face goes heavy for three months. The trials, which select patients with adequate brows, put brow droop at about 2% and eyelid droop at 2% against 0% on placebo. Do the eyelid test before booking: close, relax, open slowly without raising. If the lids hood, ask for the frown lines only or a light dose high on the forehead, or treat the lid or brow instead. If they do not, standard dosing above the convergence line is safe in experienced hands. Photograph the brow first, either way.</p>
    `,
  },
  {
    id: 'faq-static',
    category: 'faq',
    title: 'My lines are there when I relax. Will toxin remove them?',
    tldr: 'Not on day one. Toxin stops the folding and etched lines shallow over successive cycles; what remains after three months of a quiet muscle is skin, and belongs to a retinoid, a superficial filler or resurfacing.',
    bodyHtml: `
      <p>Toxin removes the movement, not the print. A line present at rest has creased the collagen beneath it, and the first treatment will soften it and stop it deepening rather than erase it; with the muscle quiet across two or three cycles most etched forehead lines shallow noticeably as the skin stops being folded. The residue is a skin problem: a retinoid for the fine ones, a soft superficial gel threaded under the deep ones (83% improved at 12 weeks in the study behind its European licence), fractional resurfacing for the deepest. In a thick, flattened male forehead, structural support on the bone is sometimes what makes the furrows stop folding at all.</p>
    `,
  },
  {
    id: 'faq-glabella',
    category: 'faq',
    title: 'Why does my injector insist on treating my frown lines too?',
    tldr: 'Because the frontalis lifts against the frown muscles: quieten them and it needs less force — forehead lines fell from grade 3 to 1 over three cycles in a glabella-only pilot — and a weakened frontalis facing an untreated frown complex is how brows drop. The licence requires the pairing.',
    bodyHtml: `
      <p>The frontalis and the frown complex are a tug of war. Weaken the frontalis alone and the corrugators and procerus pull the brows down unopposed — the mechanism of a dropped brow; weaken the frown muscles as well and the lifter needs less force, which is why forehead lines improved from grade 3.0 to 1.0 over three cycles in an 18-person pilot that treated the glabella only. The pivotal forehead trials and the licence both pair 20 units in the forehead with 20 in the glabella for this reason, and the label's brow-droop rate of 2% comes from that pairing. An injector who offers forehead-only treatment is offering a heavier brow.</p>
    `,
  },
  {
    id: 'faq-one-side',
    category: 'faq',
    title: 'Why do I have lines on one side of my forehead only?',
    tldr: 'Almost always because the eyelid on that side droops more and the frontalis on that side is lifting harder: all 28 people with one-sided lines in the series had ptosis on that side. See an oculoplastic surgeon before anyone injects that side.',
    bodyHtml: `
      <p>The frontalis on each side works for its own eye. When one upper lid sits lower or hoods more, that side's forehead lifts all day and prints its lines, while the other rests. In the 160-patient series every one of the 28 patients with one-sided fixed forehead lines had eyelid ptosis on the same side. Look at a straight-on photograph: the lined side will show less upper lid and a lower brow. Toxin on that side evens the forehead and drops the brow that was already low; the fix is the lid, and a one-sided ptosis is worth an oculoplastic opinion, because some causes are medical rather than cosmetic.</p>
    `,
  },
  {
    id: 'faq-filler-safe',
    category: 'faq',
    title: 'Is filler in the forehead safe?',
    tldr: 'It is the highest-risk site on the face for filler blindness, with the glabella and nose; the risk is rare and the consequence permanent. Superficial, by cannula, in tiny amounts, from someone who treats foreheads weekly and keeps hyaluronidase in the room — or not at all.',
    bodyHtml: `
      <p>Safe in the trials that reported it — no vascular events in the 132-patient forehead-contour trial, mild reactions in the 18-month superficial-gel study — and dangerous in the wrong hands, because the forehead's arteries connect to the eye. The consensus on visual loss names the forehead, glabella and nose as the sites of greatest risk, and 511 cases of filler blindness have been published. The precautions are specific: superficial placement for lines or on the bone for contour, a cannula, aliquots of a tenth of a millilitre or less, slow injection, hyaluronidase in the room and a clinician who knows the protocol. For most foreheads, toxin plus a retinoid gets there without the risk; filler is for the etched line that remains.</p>
    `,
  },
  {
    id: 'faq-brow-lift-or-botox',
    category: 'faq',
    title: 'Brow lift, eyelid surgery or Botox?',
    tldr: 'Botox if the forehead passes the eyelid test. Eyelid surgery if the lids hood and the brows are fine. A brow lift — by ultrasound for 2 mm and a year, endoscopically for 3–4 mm and years — if the brows themselves have fallen. Many foreheads over sixty need the lid and the brow together.',
    bodyHtml: `
      <p>It depends on what the frontalis is doing. A forehead that relaxes without hooding is a toxin forehead: two phase 3 trials and a licence. A forehead that hoods when it relaxes is a working forehead, and the question is what it is holding up: if the lids carry excess skin and the brows sit at a reasonable height, upper blepharoplasty lets the frontalis stand down — its electrical activity halved at a year in a randomised trial; if the brows themselves have fallen, a brow lift — about 2 mm for a year with focused ultrasound, 3–4 mm for years endoscopically — is the treatment, and a blepharoplasty alone would drop them further. Over sixty, most working foreheads have both, and surgeons plan the lid with a browpexy or a lift. Toxin can be added lightly afterward for what movement remains.</p>
    `,
  },
  {
    id: 'faq-how-long',
    category: 'faq',
    title: 'How long does toxin last on the forehead?',
    tldr: 'Three to four months for the standard products, less for micro-dosing, and longer for the newer long-acting toxin; etched lines keep improving across cycles while dynamic ones return as the muscle wakes.',
    bodyHtml: `
      <p>Effect at a week, peak at two, and three to four months of a quiet forehead for the licensed products, with the movement returning gradually rather than overnight. Intradermal micro-dosing wears off sooner. The long-acting daxibotulinumtoxinA has phase 2 forehead data and a glabellar licence with longer median duration. The useful pattern is that etched lines shallow across successive cycles as the skin stops being folded, so the second and third treatments often look better than the first even at the same dose; and the useful discipline is to let the muscle come most of the way back before the next dose, so the brow's resting height can be checked each time.</p>
    `,
  },
  {
    id: 'faq-prevent',
    category: 'faq',
    title: 'How do I prevent forehead lines in my twenties and thirties?',
    tldr: 'Sunscreen and a hat on the most exposed skin on the face, a retinoid, current glasses and sunglasses so the brows stay down, and — once a line starts to linger after the raise — light toxin with the frown lines. Nothing prevents the anatomy.',
    bodyHtml: `
      <p>Forehead lines are the earliest dynamic lines, and prevention is about how often the skin is folded and how well it springs back. Sunscreen every morning and a hat outdoors keep the recoil; a retinoid from the late twenties rebuilds it; sunglasses and a current prescription stop the brows lifting to see; and noticing the habit of talking with the eyebrows is free. When a line begins to stay a moment after the raise, a light toxin dose with the glabella keeps the fold from printing, with the strongest evidence on this page behind it. Filler and resurfacing are for lines that exist; the <a href="/anti-aging-30s">30s guide</a> covers the decade.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until I see something?',
    tldr: 'Toxin: a week, peak at two, judged at two weeks with the brow height checked. Filler: at once, settled at two weeks. Retinoid: 8–12 weeks. Ultrasound brow: 90 days. Resurfacing: pink for weeks, judged at three months. Surgery: final at six months.',
    bodyHtml: `
      <p>Toxin softens the forehead within a week and peaks at two, which is when brow height is compared with the photograph and the dose adjusted for next time. A superficial filler shows immediately and is judged once swelling clears at two weeks. Retinoids change the surface over eight to twelve weeks. Focused ultrasound lifts the brow over 90 days as collagen forms. Fractional resurfacing is pink for a week or two and judged at three months. Blepharoplasty and a brow lift are bruised for two weeks, presentable at a month and final at six, with scalp numbness after a brow lift lasting months. Photograph straight on, at rest and raised, before anything.</p>
    `,
  },
  {
    id: 'faq-cost-ladder',
    category: 'faq',
    title: 'What is the cheapest thing that works, and the most effective?',
    tldr: 'Cheapest with evidence: sunscreen and a retinoid, €20–40 a month. Most effective for dynamic lines: toxin with the glabella, €150–350 every 3–4 months. For the working forehead: an ultrasound brow lift (€400–800 a year), blepharoplasty (€2,500–5,000) or an endoscopic brow lift (€5,000–8,000), once.',
    bodyHtml: `
      <p>The ladder in euros: sunscreen, a hat and a retinoid (€20–40 a month, the skin half) → an eye test and sunglasses (free, the habit half) → toxin with the frown lines (€150–350 every three to four months, the strongest evidence on the page) → a superficial filler for etched lines (€300–600, six to twelve months, with the arterial caveat) → fractional resurfacing (€400–1,500) → an ultrasound brow lift for the low brow (€400–800 a year) → upper blepharoplasty when the lids are the cause (€2,500–5,000, once) → an endoscopic brow lift when the brows have fallen (€5,000–8,000, once). Patches, peptides and gadgets sit outside the ladder for this problem.</p>
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
    intro: 'Three drivers make a forehead line — and the eyelid test tells you whether the muscle making yours is also holding your eyes open.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which forehead lines do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: the skin and the habits',
    intro: 'What keeps the fold from printing on the most sun-exposed skin on the face, the habit that makes a forehead work, and the shelf that does neither.',
    sections: home,
  },
  {
    id: 'inj',
    title: 'Injectables',
    intro: 'The strongest evidence on the page, and the trade that comes with it — plus the filler rows, graded on thin evidence and a real arterial risk.',
    sections: inj,
  },
  {
    id: 'clinic',
    title: 'The eyelids, the brow and the skin',
    intro: 'Where the working forehead is actually treated — the lid, the brow, the surgery — and the devices and lasers that work on the skin around it.',
    sections: clinic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'What the label, the consensus statements and the surgical series actually flag — starting with the brow that drops.',
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
  dynamic: 'Dynamic lines',
  static: 'Etched lines',
  brow: 'Brow & lids',
  skin: 'Skin',
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
