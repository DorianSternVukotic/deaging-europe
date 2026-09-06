/**
 * Nasolabial folds ("smile lines") guide — single source of truth
 * (problem template).
 *
 * Consumed by /nasolabial-folds. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: the nasolabial fold is a seam, not a wrinkle — the
 * border where the cheek's loose fat-and-septa architecture meets the lip's
 * tight, muscle-anchored one — so it exists in every smile at every age and
 * deepens when the cheek above it descends or deflates, the bone beside the
 * nose recedes, and the skin thins. Every filler ever licensed proved itself
 * in this fold, which makes it the best-evidenced injection site in
 * aesthetics; what is weakly evidenced is everything that promises to lift
 * it instead — threads, devices and, on the objective data, the facelift.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'fold' | 'support' | 'descent' | 'skin' | 'general';

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
  'A nasolabial fold is a seam, not a wrinkle: the border where the cheek’s loose fat-and-septa architecture meets the lip’s tight, muscle-anchored skin. It exists in every smile at every age; what ages is the fold at rest, as the cheek above it descends or deflates, the bone beside the nose recedes and the skin thins.',
  'Lie flat with a hand mirror. A fold that vanishes is descent — the cheek heaped above the seam — and answers to support and, at the far end, surgery. A fold that stays is a volume and bone deficit and answers to filler, first behind the fold and then in it.',
  'Filler in the fold is the best-evidenced injection in aesthetics: 51 randomised trials in 4,097 people, wrinkle scores falling from 3.2 to 1.8 at a month and holding at 2.5 at a year. Calcium hydroxylapatite and poly-L-lactic acid last longer with less reversibility; PMMA is permanent with a 1.7% granuloma rate.',
  'What “lifts” the fold is weakly evidenced: threads have a 32-patient comparison and a systematic review that calls them scarcely studied; devices soften by a fifth; and a 16-study review of facelift techniques finds objective, durable effacement of the fold inconsistent even when patients are satisfied.',
  'The fold sits over the facial artery: it is the most common site of filler-induced skin necrosis, occlusion is roughly six times less likely by cannula, and 84% of hyaluronic-acid occlusions recover with prompt hyaluronidase. Never fill the fold flat — a flattened fold reads as a heavy upper lip, not youth.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-fat',
    kind: 'Fat',
    title: 'The cheek descends and deflates above an anchored seam',
    blurb: 'The malar fat pad slides down and the deep medial cheek fat empties, so cheek tissue heaps against a fold that cannot move — the seam is stitched to muscle below.',
  },
  {
    id: 'type-bone',
    kind: 'Bone',
    title: 'The bone beside the nose recedes',
    blurb: 'The maxilla and the pyriform aperture resorb with age; the deep pyriform space beside the nostril enlarges, and the top of the fold loses its shelf and drops into a groove.',
  },
  {
    id: 'type-skin',
    kind: 'Skin & motion',
    title: 'Thinner skin folds harder with every smile',
    blurb: 'The lip elevators insert into the skin at the fold, so every smile creases it; sun, smoking, a lost stone of weight and a lifetime of side-sleeping decide how deeply it stays.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'fold-anatomy',
    category: 'concept',
    title: 'What a nasolabial fold actually is',
    tldr: 'A seam between two tissue architectures — loose cheek fat with long septa on one side, tight muscle-anchored lip skin on the other — present in every smile at every age. It deepens at rest as the cheek above it descends and deflates.',
    bodyHtml: `
      <p>The nasolabial fold runs from the wing of the nose to the corner of the mouth and marks a change in construction. Lateral to it, the cheek is built of fat compartments threaded by long fibrous septa; medial to it, the upper lip is a condensed, tightly septated layer where the zygomaticus and lip-elevator muscles insert directly into the skin. Histological mapping of donor faces found the fold sitting exactly on the border between the two, with no ligament required to explain it (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6849783/" rel="noopener nofollow" target="_blank">morphological study</a>). That is why it exists in every child's smile: the lip side lifts and the cheek side does not, and the skin folds at the seam.</p>
      <p>What ages is the fold at rest. The cheek's fat compartments deflate and the malar fat pad migrates downward, heaping tissue against the anchored seam (<a href="https://www.oatext.com/anatomy-and-aging-of-cheek-fat-compartments.php" rel="noopener nofollow" target="_blank">cheek fat compartments</a>); the maxilla and the rim of the pyriform aperture resorb, so the top of the fold loses its bony shelf (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3404279/" rel="noopener nofollow" target="_blank">Mendelson &amp; Wong</a>); and the skin thins and loses recoil. Anatomists now sort folds by which of these dominates — fat-pad, bone-retrusion, skin, muscular and hybrid types — because each wants a different treatment (<a href="https://www.mdpi.com/2075-4418/14/7/716" rel="noopener nofollow" target="_blank">anatomical review</a>).</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'Who gets deep folds, and when',
    tldr: 'Everyone has the crease; most people notice the resting fold in their forties. Smoking, sun, and losing more than a tenth of body weight after 45 deepen it measurably; bariatric-scale weight loss ages the midface about five years.',
    bodyHtml: `
      <p>The crease is universal; the resting fold is a decade-by-decade story, usually first noticed in the forties in a photograph taken from below. Identical-twin comparisons put smoking among the strongest modifiable factors, with the smoking twin scoring worse for nasolabial folds alongside jowls and lip lines (<a href="https://pubmed.ncbi.nlm.nih.gov/23924651/" rel="noopener nofollow" target="_blank">twin study</a>). Weight is the other lever: volumetric imaging shows deep facial fat emptying with weight loss, and people who lost more than 10% of their weight after 45 showed a marked accentuation of nasolabial folds and cheek grooves (<a href="https://www.plasticsurgery.org/news/press-releases/how-fat-loss-accelerates-facial-aging" rel="noopener nofollow" target="_blank">ASPS</a>); after bariatric-scale loss, blinded raters judged faces about five years older than their age, with deepened folds and midface descent (<a href="https://academic.oup.com/asjopenforum/article/doi/10.1093/asjof/ojae069/7739023" rel="noopener nofollow" target="_blank">systematic review</a>). Sun and side-sleeping do the rest.</p>
    `,
  },
  {
    id: 'why-hard',
    category: 'concept',
    title: 'Why the fold resists being "lifted"',
    tldr: 'The seam is stitched to muscle, so pulling the cheek sideways or upward moves the cheek, not the fold: a 77-patient imaging study found cheek filler does not shift the fold’s skin, and a 16-study review found facelift effacement of the fold inconsistent. Support and filling work; traction mostly does not.',
    bodyHtml: `
      <p>Because the lip side of the seam is anchored to muscle, treatments that pull on the cheek move the cheek and leave the seam where it was. Three-dimensional imaging of 77 patients after cheek filler found the skin expanding over the injection site with no lateral traction on the fold, and a visible improvement in the medial face only when the nose-to-cheek transition itself was filled (<a href="https://pubmed.ncbi.nlm.nih.gov/29334576/" rel="noopener nofollow" target="_blank">PRS, 2018</a>). The surgical literature says the same at larger scale: a review of 16 cohort and comparative facelift studies found many techniques giving statistically significant, patient-satisfying improvement, but objective, durable effacement of the fold inconsistent — the SMAS layer that surgeons tighten thins out exactly where the fold sits (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13391138/" rel="noopener nofollow" target="_blank">systematic review</a>).</p>
      <p>What works is replacing what was lost next to the seam — bone-level support beside the nose, medial cheek volume, and a soft gel under the crease itself — and, for genuine descent, repositioning the tissue rather than stretching it. The mistake this page exists to prevent is the opposite: syringe after syringe into the fold until it is flat, which produces a heavy, ape-like upper lip that reads as treatment, not youth.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-fat',
    category: 'context',
    title: 'The heavy cheek (descent and deflation)',
    tldr: 'A fold with a soft roll of cheek above it that flattens when you lie on your back — the malar fat has slid and the deep cheek fat has emptied. Support behind it first; repositioning at the far end.',
    focus: 'descent',
    bodyHtml: `
      <p>Lie flat and look in a hand mirror. If the fold softens or disappears as the cheek falls back, the problem is above the seam: the malar fat pad has migrated down and the deep medial cheek fat that once held it forward has deflated, so tissue heaps against the anchored fold. This is the commonest type after fifty, and the one where filling the fold itself is least satisfying — the roll above simply overhangs a flatter crease. The order is support (deep medial cheek and the nose-to-cheek transition), a little in the fold, and, for real descent, a repositioning operation; threads and devices promise the lift and deliver a fraction of it.</p>
    `,
  },
  {
    id: 'type-bone',
    category: 'context',
    title: 'The deep groove beside the nose (bone retrusion)',
    tldr: 'A fold deepest at its top, in a hollow beside the nostril that stays when you lie down — the maxilla and pyriform rim have receded. Deep, bone-level support at the pyriform aperture, then the fold.',
    focus: 'support',
    bodyHtml: `
      <p>Run a finger from the nostril down the fold. If the deepest point is at the top, in a hollow beside the wing of the nose that does not change lying down, the deficit is skeletal: the maxilla and the edge of the pyriform aperture resorb with age, and the fat-lined "deep pyriform space" beside the nostril enlarges as bone and fat retreat together (<a href="https://www.harleyacademy.com/aesthetic-medicine-articles/expert-advice-on-injecting-the-piriform-fossa/" rel="noopener nofollow" target="_blank">piriform fossa</a>). Filler into the fold alone leaves the hollow; a deep bolus on the bone at the pyriform aperture restores the shelf the fold hangs from, and is where an experienced injector starts. A bony deficit is also the one type that a facelift cannot touch.</p>
    `,
  },
  {
    id: 'type-skin',
    category: 'context',
    title: 'The fine crease in thin skin',
    tldr: 'A shallow line along the fold in thin, sun-damaged or crepey skin, without much roll above it — the skin has lost recoil. Retinoids, a soft superficial gel and resurfacing help; deep filler is wasted here.',
    focus: 'skin',
    bodyHtml: `
      <p>Pinch the skin at the fold. If it is thin, tents slowly and carries a fine etched line rather than a deep fold, the skin itself is the problem: sun and smoking have thinned the dermis and the crease has printed into it. This type wants the wrinkle toolkit — a retinoid, sunscreen, a soft low-viscosity gel threaded superficially along the crease, and fractional resurfacing for the etched line — and it responds badly to deep volume, which sits under thin skin as a visible ridge. Our <a href="/wrinkles">wrinkles guide</a> grades the skin tools in detail.</p>
    `,
  },
  {
    id: 'type-dynamic-muscle',
    category: 'context',
    title: 'The fold that only appears when you smile',
    tldr: 'A crease that shows on smiling and vanishes at rest is normal anatomy at any age and should not be filled. If the gums also show, a few units of toxin in the lip elevators lower the lip and soften the medial fold.',
    focus: 'general',
    bodyHtml: `
      <p>A fold that appears on smiling and disappears at rest is the seam doing its job, and no treatment is indicated; filler placed to hide it shows as a ridge across a smile. The exception is the "gummy smile": when the levator labii superioris alaeque nasi pulls the lip so high that gum shows, a small dose of botulinum toxin beside the nose lowers the lip for three to six months, and these patients' unusually deep medial folds soften with it (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9941039/" rel="noopener nofollow" target="_blank">narrative review</a>). For everyone else, toxin does not treat the nasolabial fold.</p>
    `,
  },
  {
    id: 'weight-sleep',
    category: 'context',
    title: 'Weight, sleep position and the fold',
    tldr: 'Losing more than a tenth of your weight after 45 deepens the fold; regaining does not restore it neatly. Side and stomach sleeping press the cheek against the seam for hours a night. Both are real, neither is a treatment.',
    focus: 'general',
    bodyHtml: `
      <p>Two habits move the fold and are rarely mentioned. Deep facial fat is lost with body weight, and it is deep fat that props the cheek: people who lost more than 10% of their weight after 45 showed marked deepening of the folds (<a href="https://www.plasticsurgery.org/news/press-releases/how-fat-loss-accelerates-facial-aging" rel="noopener nofollow" target="_blank">ASPS</a>), and the midface loses the most volume after weight loss in imaging studies (<a href="https://www.dermatologyadvisor.com/news/facial-volume-loss-following-weight-loss-most-significant-mid-facial-region/" rel="noopener nofollow" target="_blank">imaging study</a>). Sleep is the other: compression, shear and tension on a cheek pressed into a pillow for a third of every night produce "sleep wrinkles" whose distribution differs from expression lines, and the nasolabial region takes the load in side-sleepers (<a href="https://pubmed.ncbi.nlm.nih.gov/27329660/" rel="noopener nofollow" target="_blank">Anson 2016</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/22506801/" rel="noopener nofollow" target="_blank">2012 study</a>). Neither is something to fix a fold with; both are worth knowing before you spend.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'The recline test, the smile test and the finger',
    tldr: 'Lie flat: a fold that vanishes is descent, one that stays is volume or bone. Smile: a fold only on smiling is normal. Run a finger down it: deepest at the top means bone. Photograph from below, in one light, before anything.',
    bodyHtml: `
      <p>Three tests sort a fold in a minute. Lie flat with a hand mirror: a fold that softens as the cheek falls back is descent and deflation; one that stays is a volume or bony deficit. Smile and relax: a fold present only on smiling is anatomy, not a problem. Run a fingertip from nostril to mouth corner: a groove deepest at the top, in a hollow beside the nose, is bone retrusion and wants deep support; a fold deepest in its middle is fat and skin. Pinch the skin for thinness. Then photograph from slightly below in one light, at rest and smiling — the fold changes with hydration, salt, sleep and the angle of the camera, and every treatment on this page is judged against that picture.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-spf-quit',
    category: 'home',
    title: 'Sunscreen and not smoking',
    tldr: 'The skin component only: daily sunscreen cut measured skin aging by 24% in the one randomised prevention trial, and the smoking twin has the deeper fold. Neither touches descent or bone.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: everyone — the only prevention with any trial behind it',
    sessions: 'Every morning',
    downtime: 'None',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>Sun and smoke thin the dermis and rob it of recoil, which is the skin's share of a deep fold. Daily sunscreen users in the Nambour trial showed no detectable increase in skin aging over 4.5 years — 24% less than discretionary users (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>) — and among identical twins discordant for smoking, the smoker had the worse nasolabial folds (<a href="https://pubmed.ncbi.nlm.nih.gov/23924651/" rel="noopener nofollow" target="_blank">twin study</a>). Graded moderate rather than strong because no trial has measured the fold itself, and because the fold's main drivers — fat descent and bone — are not skin. The habit that prevents the crease from printing; not the habit that lifts a cheek.</p>
    `,
  },
  {
    id: 'home-retinoid',
    category: 'home',
    title: 'A retinoid along the fold',
    tldr: 'Eight randomised tretinoin trials show fewer fine and coarse wrinkles; on the fold it softens the etched crease in thin skin and nothing else. Worth doing for the skin type; irrelevant to descent.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: 'Nightly, indefinitely',
    downtime: 'Weeks of dryness and peeling',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>Tretinoin thickens the epidermis and rebuilds upper-dermal collagen; the meta-analysis of eight randomised trials in 1,361 patients found significant improvement in fine and coarse wrinkles over vehicle (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/" rel="noopener nofollow" target="_blank">meta-analysis</a>). No trial has measured the nasolabial fold, and the mechanism can only reach the crease printed into thin skin — which is why the row sits at emerging for this problem despite strong evidence for wrinkles in general. For the skin type it is the base; for a heavy cheek it does nothing visible. The <a href="/wrinkles">wrinkles guide</a> covers the retinoid ladder.</p>
    `,
  },
  {
    id: 'home-weight',
    category: 'home',
    title: 'Weight stability rather than rapid loss',
    tldr: 'Deep facial fat goes with body fat: more than 10% weight loss after 45 deepens the folds, and bariatric-scale loss ages the midface about five years in blinded ratings. Lose slowly, expect to replace volume, and avoid cycling.',
    evidence: 'emerging',
    focus: 'support',
    sessions: 'Ongoing',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Nobody should keep weight for a fold, but the trade should be known. Volumetric imaging shows deep and superficial facial fat both lost with weight loss, and deep fat is what props the cheek forward of the seam; people who lost more than 10% of body weight after 45 showed marked accentuation of the folds (<a href="https://www.plasticsurgery.org/news/press-releases/how-fat-loss-accelerates-facial-aging" rel="noopener nofollow" target="_blank">ASPS</a>), and faces after massive weight loss were judged about five years older, with deepened nasolabial folds and midface descent (<a href="https://academic.oup.com/asjopenforum/article/doi/10.1093/asjof/ojae069/7739023" rel="noopener nofollow" target="_blank">systematic review</a>). Slow loss gives the skin time to retract; weight cycling stretches it repeatedly; and the practical answer, for anyone on a weight-loss medication, is to budget for midface volume at the end of it rather than to stop.</p>
    `,
  },
  {
    id: 'home-sleep',
    category: 'home',
    title: 'Sleeping on your back',
    tldr: 'Side and stomach sleeping compress and shear the cheek against the pillow for hours; sleep wrinkles have their own distribution and worsen with age. Plausible, observational, free — and hard to enforce on a sleeping person.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: 'Every night',
    downtime: 'None',
    cost: 'Free (€30–80 for a contoured pillow)',
    bodyHtml: `
      <p>A cheek pressed into a pillow experiences compression, shear and tension for a third of the night, and the review that named "sleep wrinkles" traces a set of lines — including those beside the nose and mouth — that follow that distortion rather than any expression, and worsen as skin loses elasticity (<a href="https://pubmed.ncbi.nlm.nih.gov/27329660/" rel="noopener nofollow" target="_blank">Anson 2016</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/22506801/" rel="noopener nofollow" target="_blank">2012 study</a>). No trial has randomised sleep position, most people cannot hold one asleep, and the fold's deep drivers are untouched; a contoured pillow and a silk pillowcase are cheap experiments, not treatments.</p>
    `,
  },
  {
    id: 'home-facial-exercise',
    category: 'home',
    title: 'Facial exercise',
    tldr: 'The one facial-exercise pilot found fuller upper and lower cheeks after 20 weeks in 16 women, judged by blinded raters — the outcome that matters for a fold — with no control group and no fold measurement.',
    evidence: 'emerging',
    focus: 'support',
    sessions: '30 minutes daily, then alternate days',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>This is the one concern where the facial-exercise evidence is relevant: the 20-week programme pilot in 16 middle-aged women found blinded dermatologists rating upper- and lower-cheek fullness improved and estimating faces about three years younger, the authors proposing muscle hypertrophy beneath the cheek (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/2666801" rel="noopener nofollow" target="_blank">Alam 2018</a>). It had no control group, measured no fold, and asked for half an hour a day; the same movements etch expression lines elsewhere. Emerging rather than limited here because, for once, the pilot's outcome is the tissue that props the fold.</p>
    `,
  },
  {
    id: 'home-gadgets',
    category: 'home',
    title: 'Gua sha, rollers, microcurrent and "lifting" masks',
    tldr: 'Massage moves fluid for an hour; microcurrent devices have no controlled trial on folds; nothing handheld repositions a fat pad or rebuilds bone. Pleasant, harmless, not treatment.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'As desired',
    downtime: 'None',
    cost: '€15–400',
    bodyHtml: `
      <p>The consumer "lifting" shelf is drainage and sensation. Gua sha and rollers move lymph and leave the cheek flushed and briefly plumper; microcurrent devices claim to tone the muscles under the cheek and have no controlled trial on nasolabial folds; sheet masks hydrate the crease for an evening. None reaches the malar fat pad, the deep cheek fat or the pyriform bone, which are the fold's drivers. Fine as ritual; not a line on this page's plan.</p>
    `,
  },
];

const inj: Section[] = [
  {
    id: 'inj-ha-fold',
    category: 'inj',
    title: 'Hyaluronic-acid filler under the fold',
    tldr: 'The best-evidenced injection in aesthetics: 51 randomised trials, 4,097 people, wrinkle scores from 3.2 to 1.8 at a month and 2.5 at a year; the original 2003 trial found HA superior to collagen in 57–62% of patients. Reversible, about a year.',
    evidence: 'strong',
    focus: 'fold',
    note: 'Best for: the fold at rest, after support behind it — the reversible first step for almost everyone',
    sessions: 'Every 9–15 months',
    downtime: '2–5 days of swelling; bruising',
    cost: '€300–600 per syringe (UK £300–630)',
    bodyHtml: `
      <p>Every modern filler earned its licence in the nasolabial fold, so the fold has the deepest randomised evidence in aesthetic medicine. The founding trial randomised 138 patients to hyaluronic acid or bovine collagen, one per side: at six months HA was judged superior in 56.9% of patients by wrinkle score and 62% by global improvement, against 9.5% and 8% for collagen, with less volume needed (<a href="https://pubmed.ncbi.nlm.nih.gov/12786700/" rel="noopener nofollow" target="_blank">Narins 2003</a>). The meta-analysis of 51 randomised trials in 4,097 participants across 13 countries puts numbers on the class: mean wrinkle severity fell from 3.23 to 1.79 at one month, 2.02 at six and 2.46 at twelve, a "sustainable, up to one year" correction (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8481177/" rel="noopener nofollow" target="_blank">meta-analysis</a>). Newer gels are trialled against older ones for a year or more — a 64-week randomised within-subject study of a resilient HA (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7384057/" rel="noopener nofollow" target="_blank">RHA trial</a>), an 18-month open-label extension of a cohesive gel (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1524-4725.2010.01735.x" rel="noopener nofollow" target="_blank">Belotero extension</a>), a registered 18-month controlled trial of a mid-viscosity gel (<a href="https://clinicaltrials.gov/study/NCT01976663" rel="noopener nofollow" target="_blank">Volift trial</a>) — and a 2024 network meta-analysis ranks them with little daylight between the major brands (<a href="https://link.springer.com/article/10.1007/s00266-024-03889-3" rel="noopener nofollow" target="_blank">network meta-analysis</a>).</p>
      <p>Placement decides the look: a medium gel in the deep dermis or just beneath it along the crease, threaded with a cannula from below, never enough to flatten the fold, and always after the support rows — a fold filled before the cheek is supported needs twice the gel and reads as a heavy lip. Hyaluronidase reverses it. The <a href="/fillers">filler guide</a> covers products, MRI persistence and the reversal drug.</p>
    `,
  },
  {
    id: 'inj-caha',
    category: 'inj',
    title: 'Calcium hydroxylapatite (Radiesse) in the fold',
    tldr: 'Two randomised split-face trials: superior to collagen in 79% of folds at six months in the 117-patient pivotal study, and still improved in 79% of folds at 12 months against 43% for hyaluronic acid in the head-to-head. Longer-lasting, firmer, not reversible.',
    evidence: 'strong',
    focus: 'fold',
    note: 'Best for: a deep fold in thicker skin, when you want 12–18 months and accept there is no eraser',
    sessions: 'Every 12–18 months',
    downtime: '3–7 days of swelling; bruising',
    cost: '€350–600 per syringe (UK from £345–410)',
    bodyHtml: `
      <p>Calcium hydroxylapatite microspheres in a gel carrier fill immediately and then provoke collagen around each sphere as the carrier is absorbed. Its pivotal trial randomised 117 patients with symmetric folds to calcium hydroxylapatite on one side and human collagen on the other: at six months it was rated superior in 79% of folds with about half the volume (<a href="https://jcadonline.com/calcium-hydroxylapatite-over-a-decade-of-clinical-experience/" rel="noopener nofollow" target="_blank">decade review</a>), and the 12-month multicentre split-face trial against non-animal stabilised hyaluronic acid found it more effective at every time point, with 79% of folds still improved at a year against 43% and 30% less volume used (<a href="https://pubmed.ncbi.nlm.nih.gov/18093199/" rel="noopener nofollow" target="_blank">split-face RCT</a>); long-term follow-up confirmed safety (<a href="https://academic.oup.com/asj/article-abstract/30/2/235/345209" rel="noopener nofollow" target="_blank">long-term study</a>). Biopsies show it drives more active collagen remodelling than hyaluronic acid (<a href="https://pubmed.ncbi.nlm.nih.gov/25226004/" rel="noopener nofollow" target="_blank">histology study</a>).</p>
      <p>The trade is reversibility: there is no enzyme for it, it is too firm for thin skin and for the lip, and a vascular occlusion with it is harder to treat. Deep placement under a thick-skinned fold, by someone who uses it weekly.</p>
    `,
  },
  {
    id: 'inj-midface',
    category: 'inj',
    title: 'Medial cheek and nose-to-cheek support first',
    tldr: 'Restoring the deep medial cheek improves satisfaction with the untreated fold in the Voluma trial, but 3D imaging of 77 patients shows lateral cheek filler does not move the fold at all — the gain comes from the medial cheek and the nose-to-cheek transition, not from "lifting".',
    evidence: 'moderate',
    focus: 'support',
    note: 'Best for: the heavy-cheek and hybrid types — the support that halves what the fold needs, if it goes in the right place',
    sessions: 'Every 12–24 months',
    downtime: '3–7 days of swelling',
    cost: '€500–1,200 (2–4 ml)',
    bodyHtml: `
      <p>"Treat the cheek first" is the injector's mantra, and it is half right. In the pivotal Voluma programme, 235 patients had midface volume restored with a control group, and patient satisfaction improved in untreated regions including the nasolabial folds at six months and two years, plausibly because the medial cheek compartment was re-supported (<a href="https://pubmed.ncbi.nlm.nih.gov/24093664/" rel="noopener nofollow" target="_blank">pivotal RCT</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4482214/" rel="noopener nofollow" target="_blank">two-year outcomes</a>). But when 77 patients were imaged in three dimensions before and after cheek filler, 3 ml in the cheek produced expansion over the injection site and no traction on the skin between it and the fold — no photographic change in the fold at all — and only those filled at the nose-to-cheek transition showed the medial face improve (<a href="https://pubmed.ncbi.nlm.nih.gov/29334576/" rel="noopener nofollow" target="_blank">PRS, 2018</a>).</p>
      <p>So the evidence supports support, not lift: gel in the deep medial cheek fat and along the nasojugal transition props the tissue above the seam; gel on the lateral cheekbone makes a cheekbone and leaves the fold alone. Ask exactly where the syringe is going. The <a href="/fillers">filler guide</a> and the <a href="/jowls">jowls guide</a> grade the midface tools.</p>
    `,
  },
  {
    id: 'inj-plla',
    category: 'inj',
    title: 'Poly-L-lactic acid (Sculptra and successors)',
    tldr: 'A randomised trial of 233 patients found PLLA more effective than collagen from month 3 to 13 with correction lasting up to 25 months in the open extension; a 252-person double-blind trial of PLLA microspheres found durability toward two years. Gradual, long, not reversible, nodules possible.',
    evidence: 'moderate',
    focus: 'support',
    sessions: '2–3 sessions a month apart; repeat every 2 years',
    downtime: '2–3 days; five days of massage',
    cost: '€500–800 per vial (UK from £525), usually 2–3 vials',
    bodyHtml: `
      <p>Poly-L-lactic acid is a collagen stimulator rather than a filler: injected as a suspension, it provokes fibroblasts over months and the volume arrives slowly. The pivotal randomised, evaluator-blinded trial gave 116 patients PLLA and 117 human collagen for nasolabial folds: PLLA scored significantly higher from month 3 through 13, and correction in the PLLA arm persisted to 25 months (<a href="https://www.jaad.org/article/S0190-9622(09)00962-1/abstract" rel="noopener nofollow" target="_blank">Narins 2010, JAAD</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/21719865/" rel="noopener nofollow" target="_blank">investigator ratings</a>). A newer microsphere formulation was tested in a 252-person multicentre double-blind randomised trial against hyaluronic acid with effects toward two years (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12903950/" rel="noopener nofollow" target="_blank">2024 RCT</a>), and a split-face non-inferiority trial compares brands (<a href="https://link.springer.com/article/10.1007/s00266-023-03736-x" rel="noopener nofollow" target="_blank">split-face RCT</a>). Graded moderate rather than strong because the 25-month figure comes from an uncontrolled extension, the effect is slow and operator-dependent, and there is no reversal. The <a href="/regenerative-aesthetics">regenerative guide</a> covers the biostimulators.</p>
    `,
  },
  {
    id: 'inj-pmma',
    category: 'inj',
    title: 'Permanent PMMA–collagen filler (Bellafill)',
    tldr: 'The only permanent filler with long prospective data: 1,008 patients followed five years after fold correction, 83% satisfied, 87% retention, treatment-related events in 11.7% and biopsy-proven granulomas in 1.7%. Permanent means the mistakes are too.',
    evidence: 'moderate',
    focus: 'fold',
    sessions: 'Once, with a touch-up',
    downtime: '3–7 days',
    cost: '€800–1,500 per syringe',
    bodyHtml: `
      <p>Polymethylmethacrylate microspheres in bovine collagen stay for life, and the fold is where its safety was measured: a 23-site open-label study followed 1,008 patients for five years after nasolabial-fold correction, with 871 completing; 83% were satisfied or very satisfied, treatment-related adverse events occurred in 11.7% (mostly lumps and redness, mostly in the first year), and biopsy-confirmed granulomas in 1.7%, almost all responding to treatment (<a href="https://www.ovid.com/jnls/dermatologicsurgery/fulltext/10.1097/dss.0000000000000542~five-year-safety-and-satisfaction-study-of-pmmacollagen-in" rel="noopener nofollow" target="_blank">five-year study</a>; <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/jocd.70923" rel="noopener nofollow" target="_blank">2026 review</a>). Unavailable in much of Europe, requiring a skin test for the bovine collagen, and permanent in a face that will keep changing around it — a granuloma at year eight is surgery, not an enzyme. Moderate for the data's length; a last choice for most faces.</p>
    `,
  },
  {
    id: 'inj-fat',
    category: 'inj',
    title: 'Autologous fat grafting',
    tldr: 'A 62-patient randomised comparison found fat and hyaluronic acid equally effective for the folds over nine months, with fat ahead at twelve; your own tissue, an operation to harvest it, and survival that varies from half to most of the graft.',
    evidence: 'moderate',
    focus: 'support',
    sessions: 'Once, sometimes twice',
    downtime: '1–2 weeks of swelling; donor-site bruising',
    cost: '€2,500–5,000',
    bodyHtml: `
      <p>Fat harvested from the abdomen or thigh and placed in the medial cheek and along the fold replaces the deep fat that deflated, with tissue that behaves like the tissue around it. The one randomised comparison enrolled 62 patients (57 completing) to fat or hyaluronic acid in both folds: blinded wrinkle scores showed no difference within nine months and a significant advantage for fat at twelve, with early side effects differing and later ones similar (<a href="https://pubmed.ncbi.nlm.nih.gov/28294535/" rel="noopener nofollow" target="_blank">Hu 2017</a>). The trade is that it is an operation with a donor site, that a variable fraction of the graft survives so a second session is common, that it cannot be dissolved, and that it follows body weight afterwards. Best combined with a facelift or done for a whole midface rather than a fold alone.</p>
    `,
  },
  {
    id: 'inj-pyriform',
    category: 'inj',
    title: 'Deep pyriform-space support at the base of the nose',
    tldr: 'A bolus of firm gel on the bone beside the nostril restores the shelf the fold hangs from; retrospective series and cadaver work support it, and migration from the space is a known failure. The right move for the bone type; not yet trialled.',
    evidence: 'emerging',
    focus: 'support',
    sessions: 'Every 12–24 months',
    downtime: '2–5 days',
    cost: '€300–600 (0.5–1 ml)',
    bodyHtml: `
      <p>Where the maxilla has receded, the fat-lined deep pyriform space beside the nostril enlarges, and injectors place a small bolus of high-G′ gel on the bone there to rebuild the shelf and lift the top of the fold. The evidence is technique-level: a retrospective clinical series of deep pyriform-space augmentation with a firm hyaluronic gel (<a href="https://mattioli1885journals.com/index.php/aestheticmedicine/article/view/18412" rel="noopener nofollow" target="_blank">retrospective study</a>), cadaveric work mapping an adjacent "perialar space" for more stable placement because gel migrates out of the pyriform space (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12862196/" rel="noopener nofollow" target="_blank">cadaveric study</a>), and a combined-treatment proposal for the empty space (<a href="https://link.springer.com/article/10.1007/s00266-025-04662-w" rel="noopener nofollow" target="_blank">2025 proposal</a>). The angular branch of the facial artery runs through this territory, which makes it a cannula-and-aspiration site for experienced hands only.</p>
    `,
  },
  {
    id: 'inj-pcl',
    category: 'inj',
    title: 'Polycaprolactone (Ellansé) and other collagen stimulators',
    tldr: 'Compared with PLLA for fold correction in a 2025 study and included among the fillers in the 51-trial meta-analysis; longer-lasting than hyaluronic acid, no reversal, less data.',
    evidence: 'emerging',
    focus: 'fold',
    sessions: 'Every 18–24 months',
    downtime: '3–7 days',
    cost: '€400–700 per syringe',
    bodyHtml: `
      <p>Polycaprolactone microspheres in a carrier gel fill immediately and stimulate collagen as they degrade over one to four years depending on the version. The fold data are thin: a 2025 study comparing polycaprolactone with poly-L-lactic acid injections for nasolabial-fold correction (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12392244/" rel="noopener nofollow" target="_blank">comparative study</a>) and inclusion among the products pooled in the 51-trial meta-analysis (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8481177/" rel="noopener nofollow" target="_blank">meta-analysis</a>). Longer than hyaluronic acid, not reversible, and with the same nodule caveats as the other stimulators; the <a href="/regenerative-aesthetics">regenerative guide</a> grades the class.</p>
    `,
  },
  {
    id: 'inj-fibroblast',
    category: 'inj',
    title: 'Cultured autologous fibroblast injections',
    tldr: 'A pilot comparing injections of the patient’s own cultured fibroblasts with hyaluronic filler for the folds: slower, cell-based, and not something to buy yet.',
    evidence: 'emerging',
    focus: 'fold',
    sessions: '3 sessions; weeks of culture first',
    downtime: '1–2 days',
    cost: 'Not routinely available',
    bodyHtml: `
      <p>Fibroblasts grown from a punch biopsy of the patient's own skin and injected back along the fold aim to rebuild dermis rather than fill it. A pilot study compared cultured autologous fibroblast injections with hyaluronic acid filler for nasolabial folds and reported improvement that arrived more slowly than filler (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10126053/" rel="noopener nofollow" target="_blank">pilot study</a>). Biologically interesting, expensive, weeks of cell culture per treatment, and limited to a handful of research settings; the <a href="/regenerative-aesthetics">regenerative guide</a> covers where cell therapies stand.</p>
    `,
  },
  {
    id: 'inj-toxin',
    category: 'inj',
    title: 'Botulinum toxin for the fold',
    tldr: 'Toxin does not treat a nasolabial fold; the exception is the gummy smile, where a few units in the lip elevators beside the nose lower the lip and soften the medial fold for three to six months. Used as an adjunct to threads in one 32-patient study.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'Every 3–6 months (gummy smile only)',
    downtime: 'None',
    cost: '€100–200',
    bodyHtml: `
      <p>Weakening the lip elevators to soften a fold flattens the smile, so toxin is not a nasolabial-fold treatment. The one legitimate use is the gummy smile: a small dose into the levator labii superioris alaeque nasi beside each nostril lowers the lip for 12–24 weeks with high satisfaction, and the deep medial folds these patients carry soften with it (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9941039/" rel="noopener nofollow" target="_blank">narrative review</a>; <a href="https://www.sciencedirect.com/science/article/abs/pii/S0041010124006305" rel="noopener nofollow" target="_blank">systematic review of dose and site</a>). A prospective comparison of 32 patients found toxin given an hour after thread lifting prolonged the threads' effect on the fold to six months (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12883091/" rel="noopener nofollow" target="_blank">comparative study</a>) — an adjunct, not a treatment. Limited for the fold itself.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-facelift',
    category: 'clinic',
    title: 'Facelift (SMAS, extended SMAS, deep plane)',
    tldr: 'For true descent, the only treatment that repositions the cheek — yet a review of 16 studies found objective, durable effacement of the fold inconsistent, because the tissue layer surgeons tighten thins out where the fold sits. Satisfaction high, fold correction modest.',
    evidence: 'moderate',
    focus: 'descent',
    note: 'Best for: a heavy cheek with jowls and neck — the fold improves as a by-product, never as the reason for the operation',
    sessions: 'Once; 10–15 years',
    downtime: '2–3 weeks; final at 6–12 months',
    cost: '€8,000–20,000 (UK £8,000–15,000; mid-facelift £5,000–8,000)',
    bodyHtml: `
      <p>A facelift repositions the descended cheek and tightens the SMAS layer beneath the skin, and for the heavy-cheek type it is the one treatment that moves tissue rather than adding it. The honest summary comes from the surgical literature itself: a critical review of 16 cohort and comparative studies from 2000 to 2025 — skin-only, SMAS plication, limited SMASectomy, extended SMAS and deep-plane composite lifts — found many techniques giving statistically significant, patient-satisfying improvement, but objective long-term effacement of the fold inconsistent and "lacking" data to favour any technique, because the SMAS layer is absent or attenuated beneath the fold's own fat, so extended and deep-plane dissection has limited purchase there (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13391138/" rel="noopener nofollow" target="_blank">systematic review</a>). Meta-analysis finds deep-plane and SMAS lifts comparable overall (<a href="https://link.springer.com/article/10.1007/s00266-025-05118-x" rel="noopener nofollow" target="_blank">meta-analysis</a>), and some surgeons graft SMAS into the fold at the same operation (<a href="https://www.sciencedirect.com/science/article/abs/pii/S1748681512004226" rel="noopener nofollow" target="_blank">SMAS graft</a>).</p>
      <p>Have the facelift for the jowls and neck, and expect the fold to soften; do not have it for the fold. Fat grafting to the medial cheek at the same operation is how surgeons close the gap. The <a href="/jowls">jowls guide</a> and the <a href="/anti-aging-50s">50s guide</a> grade the surgery.</p>
    `,
  },
  {
    id: 'clinic-threads',
    category: 'clinic',
    title: 'Thread lifts (PDO cog threads)',
    tldr: 'A 32-patient comparison found threads shallowed the fold from about 2.3 to 1.8 mm at six months with partial recurrence, and a systematic review calls the technique scarcely studied; months, not years, with dimpling and extrusion.',
    evidence: 'emerging',
    focus: 'descent',
    sessions: 'Every 12–18 months',
    downtime: '3–7 days; dimpling for weeks',
    cost: '€800–2,000 (mid-face)',
    bodyHtml: `
      <p>Barbed absorbable threads passed under the cheek and anchored above catch tissue and hitch it upward, then dissolve over months leaving a little collagen. The fold data are small: in a prospective comparison of 32 patients aged 40–65, threads alone brought fold depth to 1.8 ± 0.3 mm at six months with partial recurrence, and threads plus toxin to 1.5 ± 0.3 mm (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12883091/" rel="noopener nofollow" target="_blank">comparative study</a>); technique papers describe reverse-vector threads aimed at the fold specifically (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626346/" rel="noopener nofollow" target="_blank">technique paper</a>); and the systematic review of PDO threads calls them a scarcely studied technique (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15709" rel="noopener nofollow" target="_blank">systematic review</a>). The lift is measured in months, the fold recurs first, and dimpling, thread visibility and extrusion are the routine complications. The <a href="/jowls">jowls guide</a> grades threads for the lower face.</p>
    `,
  },
  {
    id: 'clinic-subcision',
    category: 'clinic',
    title: 'Subcision of the fold',
    tldr: 'A needle swept under the crease to release its tethering: in 16 women, 81% showed moderate improvement at a month, falling to 19% mean improvement at six months, with bruising in a third. Cheap, real for the tethered crease, temporary alone.',
    evidence: 'emerging',
    focus: 'fold',
    sessions: '1–2',
    downtime: '2–3 days of bruising',
    cost: '€200–500',
    bodyHtml: `
      <p>Because the lip side of the fold is stitched to muscle by short septa, releasing those septa with a needle lets the crease float free — subcision, borrowed from acne-scar work. An open-label study treated 16 women aged 33–60 with an 18-gauge needle fanned at the dermal–fat junction under local anaesthetic: 81% showed moderate improvement at one month (mean 42.8%), falling to a mean 18.8% improvement at six months, with skin elasticity measurably increased and mild bruising in 31% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4695664/" rel="noopener nofollow" target="_blank">open-label study</a>). No control group and a fading effect, but the mechanism is right for the tethered crease, and combining it with filler placed into the released space is how injectors use it.</p>
    `,
  },
  {
    id: 'clinic-rf',
    category: 'clinic',
    title: 'Monopolar radiofrequency (Thermage and successors)',
    tldr: 'In a 20-patient randomised comparison, two Thermage treatments improved the folds significantly at four months where one did not; newer devices show measurable fold-area reductions over six months. Softening for mild laxity, not repositioning.',
    evidence: 'emerging',
    focus: 'descent',
    sessions: '1–2, repeated yearly',
    downtime: 'None to a day',
    cost: '€1,000–2,500',
    bodyHtml: `
      <p>Monopolar radiofrequency heats the deep dermis and the fibrous septa to contract them, and the nasolabial fold was the endpoint in its first randomised study: 20 patients with mild to moderate laxity received one or two treatments, and only the two-treatment group showed significant fold improvement at four months, with 75% willing to pay for more despite modest change (<a href="https://pubmed.ncbi.nlm.nih.gov/15545529/" rel="noopener nofollow" target="_blank">2004 study</a>). Newer monopolar devices report measurable nasolabial-fold improvement on 3D imaging in pilot and randomised work (<a href="https://pubmed.ncbi.nlm.nih.gov/41014039/" rel="noopener nofollow" target="_blank">2025 pilot</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/39957006/" rel="noopener nofollow" target="_blank">2025 RCT</a>), and a bimodal system a reduction in fold cross-sectional area over six months (<a href="https://pubmed.ncbi.nlm.nih.gov/42187039/" rel="noopener nofollow" target="_blank">2026 study</a>). It tightens skin over a fold; it does not move the fat pad or rebuild bone. Fine for the skin type with mild laxity; the <a href="/jowls">jowls guide</a> grades the devices.</p>
    `,
  },
  {
    id: 'clinic-hifu',
    category: 'clinic',
    title: 'Microfocused ultrasound (Ultherapy and successors)',
    tldr: 'A randomised split-face trial of an intelligent microfocused ultrasound shortened the fold by 18.5% at two months; the class lifts by millimetres in meta-analysis. Modest, safe in good hands, and temporary.',
    evidence: 'emerging',
    focus: 'descent',
    sessions: 'Once a year',
    downtime: 'None; days of tenderness',
    cost: '€1,000–3,000',
    bodyHtml: `
      <p>Focused ultrasound heats points in the SMAS and deep dermis to contract them, and the fold is one of its measured endpoints: in a multicentre randomised split-face study, the treated side's nasolabial-fold length fell by 18.5% at two months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13490873/" rel="noopener nofollow" target="_blank">split-face RCT</a>); a split-face trial combining it with microneedle radiofrequency improved wrinkle-severity scores (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12452053/" rel="noopener nofollow" target="_blank">combination trial</a>); and the systematic review of the class finds consistent but modest tightening (<a href="https://academic.oup.com/asj/article/45/7/690/8106464" rel="noopener nofollow" target="_blank">systematic review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32026164/" rel="noopener nofollow" target="_blank">meta-analysis</a>). A fifth shorter is real and is not a repositioned cheek; it suits mild descent in someone who will not have surgery, and it can melt fat in a cheek that has none to spare. The <a href="/jowls">jowls guide</a> grades HIFU in detail.</p>
    `,
  },
  {
    id: 'clinic-excision',
    category: 'clinic',
    title: 'Direct excision of the fold',
    tldr: 'Cutting the fold out and closing it in the crease: durable in series of 30-plus patients, scars unnoticeable within six months in the reports — for older men with sun-damaged skin and deep folds, almost never for anyone else.',
    evidence: 'emerging',
    focus: 'descent',
    sessions: 'Once',
    downtime: '1–2 weeks; scar matures over months',
    cost: '€1,500–3,000',
    bodyHtml: `
      <p>The bluntest instrument: an ellipse of skin excised along the fold and closed so the scar lies in the crease. The plastic-surgery series report it as effective and durable in selected patients — chiefly men with thick, sun-damaged skin and very deep folds, in whom a scar hides — with scars unnoticeable within six months and results holding at eighteen (<a href="https://pubmed.ncbi.nlm.nih.gov/10513936/" rel="noopener nofollow" target="_blank">PRS, 1999</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/16242829/" rel="noopener nofollow" target="_blank">2005 series</a>). For a woman with fine skin the scar is the new problem, which is why the technique lives at the edge of practice and in facial-palsy and lipoatrophy work rather than routine aesthetics.</p>
    `,
  },
  {
    id: 'clinic-laser',
    category: 'clinic',
    title: 'Fractional and ablative resurfacing over the fold',
    tldr: 'Resurfacing rebuilds skin and softens the etched crease in the skin type; it does not lift a fat pad or fill a groove. No fold-specific trial; graded on the skin evidence alone.',
    evidence: 'limited',
    focus: 'skin',
    sessions: '1–3',
    downtime: '5–14 days by depth',
    cost: '€400–2,000',
    bodyHtml: `
      <p>Fractional and full-field lasers remodel the dermis and are the right tool for a fine line printed into thin skin along the fold; they have no purchase on the fat, bone and descent that make the fold itself, and no trial has used the nasolabial fold as an endpoint. Graded limited for this problem on that basis, not because the lasers do not work on skin — the <a href="/wrinkles">wrinkles guide</a> and the <a href="/laser-ipl">laser guide</a> grade them for what they do.</p>
    `,
  },
  {
    id: 'clinic-dental',
    category: 'clinic',
    title: 'Restoring the support underneath (teeth, dentures, the maxilla)',
    tldr: 'Loss of upper teeth resorbs the bone the fold hangs from and deepens it; prosthodontists check denture flange thickness for exactly this. Emerging because nobody has randomised a denture against a syringe.',
    evidence: 'emerging',
    focus: 'support',
    sessions: 'Dental assessment',
    downtime: 'By procedure',
    cost: 'Varies widely',
    bodyHtml: `
      <p>The top of the fold rests on the maxilla and the teeth in it. Losing upper teeth starts irreversible resorption of the alveolar ridge — about half its width in the first year — and the visible result is a collapsed upper lip and deep nasolabial folds, which is why prosthodontists inspect the thickness of a denture's flange as lip and cheek support (<a href="https://www.oralhealthgroup.com/features/implants-and-prosthetic-restorations-clinical-considerations/" rel="noopener nofollow" target="_blank">prosthodontic review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/15850992/" rel="noopener nofollow" target="_blank">bone loss and teeth</a>). For anyone with worn dentures, missing upper teeth or a collapsed bite, the dentist's assessment comes before the injector's, and filler on the pyriform bone is the bridge between them.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-vascular-nlf',
    category: 'safety',
    title: 'The facial artery: why the fold is the commonest site of filler necrosis',
    tldr: 'The facial artery runs under the fold and its angular branch beside the nose; in a review of 243 ischaemia cases the nose-and-fold territories were the most injured and the facial artery was involved in 58%. Cannula, aspiration, slow small aliquots, hyaluronidase in the room.',
    bodyHtml: `
      <p>The facial artery crosses beneath the nasolabial fold on its way to the angular artery beside the nose, at a depth that varies from person to person, which is why the fold is the classic site of filler-induced skin necrosis: a systematic review of 243 ischaemia cases with 738 photographs found the frontonasal and angulonasal territories the most commonly injured and the facial artery involved in 58% of cases, with the ophthalmic artery in 48% (<a href="https://journals.lww.com/plasreconsurg/fulltext/2023/04000/patterns_of_filler_induced_facial_skin_ischemia__a.15.aspx" rel="noopener nofollow" target="_blank">PRS, 2023</a>); a nasal-ala necrosis after fold injection is the textbook case (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4298868/" rel="noopener nofollow" target="_blank">case report</a>). Blindness is rarer here than at the nose and glabella, but the fold is a moderate-risk site in the ophthalmology report because the angular artery connects to the eye's circulation, and vision loss occurred in 39% of the cases where that circulation was involved (<a href="https://www.aaojournal.org/article/S0161-6420(25)00074-0/fulltext" rel="noopener nofollow" target="_blank">AAO 2025</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5955635/" rel="noopener nofollow" target="_blank">guideline</a>).</p>
      <p>The numbers that reassure: registry analysis puts occlusion at about 1 in 6,410 needle syringes and 1 in 40,882 by cannula (<a href="https://www.harleyacademy.com/aesthetic-medicine-articles/cannula-use-makes-vascular-occlusion-less-likely/" rel="noopener nofollow" target="_blank">registry analysis</a>), and 84% of pooled hyaluronic-acid occlusions recover with prompt hyaluronidase, delay beyond days predicting permanent damage (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12097758/" rel="noopener nofollow" target="_blank">pooled analysis</a>). Blanching, mottling or pain out of proportion in the hours after treatment is an emergency that afternoon, not a message left for the morning. The <a href="/fillers">filler guide</a> covers the protocol.</p>
    `,
  },
  {
    id: 'safety-permanent',
    category: 'safety',
    title: 'The stimulators and the permanent: nodules, granulomas, no eraser',
    tldr: 'PLLA nodules, CaHA lumps and PMMA granulomas (1.7% at five years) share one property — hyaluronidase does nothing for them. Delayed nodules occur in 0.02–4% after any filler; with a permanent one they can arrive years later.',
    bodyHtml: `
      <p>Everything on this page except hyaluronic acid is irreversible in the chair. Poly-L-lactic acid produces papules and nodules when placed too superficially or massaged too little; calcium hydroxylapatite lumps in thin skin and has no dissolving enzyme; PMMA carried biopsy-confirmed granulomas in 1.7% of 1,008 patients over five years, and a granuloma around permanent microspheres is excised, not injected away (<a href="https://www.ovid.com/jnls/dermatologicsurgery/fulltext/10.1097/dss.0000000000000542~five-year-safety-and-satisfaction-study-of-pmmacollagen-in" rel="noopener nofollow" target="_blank">five-year study</a>). Delayed-onset nodules follow 0.02–4.25% of treatments with any filler, often after an infection or a vaccine (<a href="https://jcadonline.com/cmac-delayed-onset-nodules/" rel="noopener nofollow" target="_blank">review</a>). Start with what dissolves; graduate to what lasts only in a fold whose behaviour under gel you already know.</p>
    `,
  },
  {
    id: 'safety-overfill',
    category: 'safety',
    title: 'The flattened fold and the heavy upper lip',
    tldr: 'A fold filled flat reads as a long, heavy upper lip and a "pillow face", and hyaluronic gel persists for years on MRI, so annual top-ups accumulate. Fill behind the fold, leave a fold, photograph before every syringe.',
    bodyHtml: `
      <p>The commonest harm here is not a complication but a look. The fold is a normal feature of a face, and the injector who fills it flat produces a smooth slab from nose to mouth that reads as a long, heavy upper lip and, with the cheeks done to match, the swollen "facial overfilled syndrome" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13051189/" rel="noopener nofollow" target="_blank">overfilled syndrome</a>). MRI shows hyaluronic gel persisting for years rather than the months of folklore, so routine annual top-ups accumulate rather than replace (<a href="https://journals.lww.com/prsgo/fulltext/2024/07000/hyaluronic_acid_filler_longevity_in_the_mid_face_.36.aspx" rel="noopener nofollow" target="_blank">MRI review</a>). The rules are support first, a little in the fold, a visible fold left behind, and a photograph before every syringe — and hyaluronidase for the slab already there.</p>
    `,
  },
  {
    id: 'safety-lift',
    category: 'safety',
    title: 'Threads, devices and surgery: what goes wrong',
    tldr: 'Threads dimple, show and extrude; ultrasound and radiofrequency can burn and melt cheek fat; a facelift carries nerve injury, haematoma and a scar, for a fold it may not change. Match the risk to the type of fold, not to the sales pitch.',
    bodyHtml: `
      <p>Threads under a cheek produce puckering and dimpling that usually settle in weeks, palpable or visible threads that sometimes do not, and occasional extrusion or infection; the systematic review that calls them scarcely studied also finds their complications under-reported (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15709" rel="noopener nofollow" target="_blank">systematic review</a>). Microfocused ultrasound and radiofrequency can burn, and can shrink the very cheek fat a deflated midface cannot spare; the FDA's alert on radiofrequency microneedling burns and scars is recent (<a href="https://www.dermatologytimes.com/view/fda-alerts-clinicians-to-serious-complications-with-radiofrequency-microneedling-devices" rel="noopener nofollow" target="_blank">FDA alert</a>). A facelift carries haematoma, facial-nerve weakness that is usually temporary and occasionally not, and scars around the ear, for an operation whose effect on the fold the surgical literature itself calls inconsistent. The fold is the wrong reason to accept any of these; jowls and a neck are the right ones, with the fold as a bonus.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-normal',
    category: 'faq',
    title: "Aren't smile lines normal? Should I treat them at all?",
    tldr: 'The crease on smiling is normal at every age and should not be filled. The fold at rest is what ages, and the question is whether it bothers you from below and in photographs — then treat the cause, never the crease to flatness.',
    bodyHtml: `
      <p>A nasolabial fold is a seam between two kinds of tissue and appears in every smile from childhood; filling the crease you see when you smile produces a ridge across the smile. What ages is the fold at rest — deeper each decade as the cheek descends, the bone recedes and the skin thins — and the only reason to treat it is that the resting fold bothers you. Treated well, a fold is supported and softened and still visible; a face without one looks filled, not young.</p>
    `,
  },
  {
    id: 'faq-fill-or-cheek',
    category: 'faq',
    title: 'Fill the fold, or fill the cheek?',
    tldr: 'Support first — deep medial cheek and the bone beside the nose — then the fold with what is left. Lateral cheek filler makes a cheekbone and does not move the fold at all in 3D imaging.',
    bodyHtml: `
      <p>Both, in the right order and the right places. The fold's evidence is the deepest in aesthetics — 51 randomised trials — but a fold filled before the tissue above and beside it is supported needs twice the gel and reads as a heavy upper lip. Support means the deep medial cheek fat, the nose-to-cheek transition and, for the bone type, a bolus on the pyriform aperture; it does not mean the lateral cheekbone, which 3D imaging of 77 patients showed expands over the injection and leaves the fold's skin exactly where it was. Then a soft to medium gel threaded under the crease itself, stopping while the fold is still there.</p>
    `,
  },
  {
    id: 'faq-how-long',
    category: 'faq',
    title: 'How long does filler last in the fold?',
    tldr: 'Hyaluronic acid: judged good for about a year in the trials (wrinkle score 2.5 at 12 months from 1.8 at one). Calcium hydroxylapatite 12–18 months, PLLA to about two years, fat variable, PMMA permanent — and MRI shows HA lingering longer than it looks.',
    bodyHtml: `
      <p>The meta-analysis of 51 trials gives the shape of the curve for hyaluronic acid: mean wrinkle severity from 3.23 to 1.79 at one month, 2.02 at six, 2.46 at twelve — most of the gain still there at a year. Calcium hydroxylapatite held 79% of folds improved at twelve months against 43% for hyaluronic acid in the head-to-head; poly-L-lactic acid lasted to 25 months in its extension; fat matched hyaluronic acid for nine months and led at twelve; PMMA is permanent. MRI finds hyaluronic gel persisting for years after it has stopped being visible, which argues for top-ups on the photograph, not the calendar.</p>
    `,
  },
  {
    id: 'faq-facelift',
    category: 'faq',
    title: 'Will a facelift get rid of them?',
    tldr: 'It will soften them if the cheek has descended, and the surgical literature is candid that objective, durable effacement of the fold is inconsistent because the layer surgeons tighten thins out beneath it. Have a facelift for jowls and neck; expect the fold to improve, not vanish.',
    bodyHtml: `
      <p>A facelift repositions the descended cheek, and for the heavy-cheek type the fold softens with it; a bony groove beside the nose does not change. The review of 16 studies found high satisfaction with modest fold correction and no technique with objective long-term data behind it, because the SMAS layer that extended and deep-plane lifts pull on is absent or thin beneath the fold's fat. Surgeons close the gap with fat grafting to the medial cheek during the operation, and the fold is treated afterwards with a little filler if it needs it. Nobody should have a facelift for a fold; plenty of people with jowls and a neck get a better fold as a bonus.</p>
    `,
  },
  {
    id: 'faq-threads',
    category: 'faq',
    title: 'Are threads worth it for the folds?',
    tldr: 'Rarely. One 32-patient comparison, months of effect with the fold recurring first, dimpling and extrusion, and a systematic review calling the technique scarcely studied. Money spent on threads for a fold buys two years of support and filler instead.',
    bodyHtml: `
      <p>Threads hitch tissue upward and dissolve; the evidence for the fold is one prospective comparison of 32 patients in which threads alone shallowed the fold to 1.8 mm at six months with partial recurrence, and the systematic review of the technique calls it scarcely studied with under-reported complications. For someone with mild descent who will not have surgery and understands that the result is measured in months, a mid-face thread lift is a legitimate choice; for the fold as such, the same money buys support at the pyriform and medial cheek plus filler under the crease, with a year of evidence behind every syringe.</p>
    `,
  },
  {
    id: 'faq-weight',
    category: 'faq',
    title: 'I lost weight and my folds got much deeper. Will they recover?',
    tldr: 'Partly, and slowly, if the loss was moderate and the skin young; after losing more than a tenth of body weight past 45 the deep fat rarely refills. Keep the weight off and replace the volume — medial cheek support and, at scale, fat grafting.',
    bodyHtml: `
      <p>Deep facial fat leaves with body fat and props the cheek forward of the seam; losing more than 10% of body weight after 45 deepens the folds markedly, and after bariatric-scale loss blinded raters judged faces about five years older. Regaining weight refills the superficial fat unevenly and is the wrong fix. The right one is to keep the weight off and put the volume back where it came from: deep medial cheek and pyriform support with hyaluronic acid or a collagen stimulator, and for large losses, fat grafting or a facelift with fat grafting. Budget for this at the end of any weight-loss programme rather than treating it as a failure of the diet.</p>
    `,
  },
  {
    id: 'faq-sleep',
    category: 'faq',
    title: 'Does sleeping on my side really matter?',
    tldr: 'Plausibly, over decades: the cheek is compressed and sheared against the pillow for a third of every night, and "sleep wrinkles" have their own distribution. Nobody has randomised it; back-sleeping and a contoured pillow are free experiments, not treatments.',
    bodyHtml: `
      <p>Compression, tension and shear on a cheek pressed into a pillow for seven hours a night is a mechanical load the face carries nowhere else, and the review that named sleep wrinkles maps a distribution that follows that distortion rather than any expression, worsening with age. It has never been tested in a trial, because sleeping people do not hold positions, and it does nothing to the fat, bone and descent that make most folds. Sleep on your back if you can; buy the pillow if you like; do not expect either to move a fold that stays when you lie flat.</p>
    `,
  },
  {
    id: 'faq-permanent',
    category: 'faq',
    title: 'Is there a permanent option?',
    tldr: 'PMMA is permanent, with five-year data on 1,008 patients and a 1.7% granuloma rate; fat is your own and survives in a variable fraction; a facelift lasts a decade but does not reliably efface the fold. Permanent filler in a face that keeps changing is a bet most injectors decline.',
    bodyHtml: `
      <p>Three things last. PMMA–collagen is permanent and the best-followed permanent filler, with 83% satisfaction at five years and 1.7% biopsy-proven granulomas that need excision rather than an enzyme, and a face that continues to deflate and descend around a fixed volume. Fat grafting is your own tissue and lasts as long as your weight does, after a variable fraction of it survives the transfer. A facelift repositions tissue for a decade, with the fold softened rather than removed. For most faces the honest answer is the semi-permanent middle — calcium hydroxylapatite or poly-L-lactic acid every one to two years — with hyaluronic acid first to learn how the fold behaves.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until I see something?',
    tldr: 'Hyaluronic acid and CaHA: at once, settled at two weeks. PLLA: 6–12 weeks, building for months. Fat: judged at three months. Threads and devices: 2–3 months. Facelift: swelling for weeks, final at six to twelve months.',
    bodyHtml: `
      <p>Hyaluronic acid and calcium hydroxylapatite show immediately and are judged at two weeks when the swelling has gone — the moment a hyaluronic lump can still be dissolved. Poly-L-lactic acid and polycaprolactone build over six to twelve weeks and keep building for months, so a second vial is decided at three months, not three weeks. Fat is judged at three months, once the graft that will survive has declared itself. Threads and energy devices are read at two to three months as collagen forms. A facelift is swollen for weeks, presentable at a month and final at six to twelve. Photograph from below, in one light, before anything.</p>
    `,
  },
  {
    id: 'faq-cost-ladder',
    category: 'faq',
    title: 'What is the cheapest thing that works, and the most effective?',
    tldr: 'Cheapest with evidence: a syringe of hyaluronic acid under the fold, €300–600 a year. Most effective per euro for a deep fold: support at the medial cheek and pyriform plus the fold, €800–1,500 a year. Most durable: CaHA or PLLA every 1–2 years. For true descent, surgery, €8,000–20,000.',
    bodyHtml: `
      <p>The ladder in euros: sunscreen, a retinoid and back-sleeping (€20–40 a month, skin only) → one syringe of hyaluronic acid under the fold (€300–600, about a year) → support first plus the fold (€800–1,500 a year, the plan most deep folds actually need) → calcium hydroxylapatite or poly-L-lactic acid for one to two years a round (€600–1,600) → fat grafting (€2,500–5,000, once or twice) → a facelift with fat grafting for a descended cheek with jowls (€8,000–20,000). Threads (€800–2,000 for months) and energy devices (€1,000–3,000 for a fifth of a fold) sit outside the ladder for this problem.</p>
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
    intro: 'Three drivers deepen a fold — and the recline test tells you which one is doing the most in yours.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which fold do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: the skin and the habits',
    intro: 'What prevents the crease from printing, what deepens the fold without anyone noticing, and the shelf of gadgets that does neither.',
    sections: home,
  },
  {
    id: 'inj',
    title: 'Injectables',
    intro: 'The best-evidenced injection site in aesthetics — graded by the 51 trials, the head-to-heads and the five-year data — and where the syringe has to go first.',
    sections: inj,
  },
  {
    id: 'clinic',
    title: 'Lifting, releasing and surgery',
    intro: 'Everything that promises to lift the fold rather than fill it, graded by what the studies actually measured.',
    sections: clinic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'What the trials and the case series actually flag, treatment by treatment — starting with the artery under the fold.',
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
  fold: 'The fold',
  support: 'Support & volume',
  descent: 'Descent',
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
