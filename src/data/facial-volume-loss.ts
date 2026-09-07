/**
 * Facial volume loss (hollow temples and cheeks) guide — single source of
 * truth (problem template).
 *
 * Consumed by /facial-volume-loss. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: volume loss is the one aging problem where adding what
 * was lost is exactly the right idea, and it has the randomised evidence to
 * prove it — a temple trial, a midface programme with two-year data, a
 * 331-person trial in which a collagen stimulator beat hyaluronic acid.
 * The honest complications are the temple's arteries and veins, the face
 * that was sagging rather than deflated and gets filled anyway, and gel
 * that persists for years on MRI while the clinic sells a yearly top-up.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'temple' | 'midface' | 'bone' | 'global' | 'general';

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
  'The face deflates before it sags. On MRI of 58 women, temple soft tissue thinned from 12.3 mm to 8.4 mm and the cheeks lost about 3 mm between youth and middle age, most of it between 30 and 60; on CT, the eye socket widens, the cheekbone angle drops and the aperture beside the nose enlarges. Fat pads empty and slide; the skull retreats beneath them.',
  'Lie flat with a mirror. A face that looks better lying down is sagging and wants support and repositioning; a face that looks the same — scalloped temples, flat cheeks, a tired look at every angle — is deflated and wants what was lost put back. Filling a sagging face is how the overfilled look is made.',
  'This is the best-evidenced injection territory after the nasolabial fold: hyaluronic gel improved temple hollowing in 80% against 14% of untreated controls, improved midface volume in 86% with 79% still satisfied at two years, and a meta-analysis of five randomised trials in 748 people finds responder rates three times control. Poly-L-lactic acid beat hyaluronic acid 91% to 51% at a year in a 329-person trial and reached 97% in the temples.',
  'Fat grafting is your own tissue and survives unevenly — 47% pooled retention across 27 studies, 33–65% in the temples — and needs an operation; hyaluronic gel is reversible and persists on MRI for years longer than the folklore says, which is why annual top-ups accumulate into a pillow face.',
  'The temple is the most dangerous place on the face to inject: a superficial artery and a zygomatico-orbital branch connect to the eye, a middle temporal vein connects to the lungs, and 511 cases of filler blindness have been published. Deep on the bone or in the mapped fascial plane, by cannula, in small volumes, with hyaluronidase in the room — or not at all.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-fat-deflation',
    kind: 'Fat',
    title: 'Fat pads that shrink and slide',
    blurb: 'Facial fat sits in separate compartments, and the deep ones under the cheek and in the temple empty first while the superficial ones thin and drift downward — on MRI the temple loses a third of its padding and the cheeks about 3 mm between youth and middle age.',
  },
  {
    id: 'type-bone',
    kind: 'Bone',
    title: 'A skull that recedes beneath the face',
    blurb: 'The eye socket widens, the cheekbone’s angle drops, the aperture beside the nose enlarges and the jaw shortens — CT studies of the aging face show the frame retreating, so the same skin and fat hang on less and hollows open at the temple, orbit and cheek.',
  },
  {
    id: 'type-weight',
    kind: 'Weight & hormones',
    title: 'Body fat, estrogen and the GLP-1 decade',
    blurb: 'Facial fat tracks body fat, so distance runners and anyone who lost a stone quickly deflate first; estrogen deposits fat in the cheeks and its loss at menopause takes it away; the GLP-1 medicines have made hollow temples a clinic complaint in people who never had them.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'volume-anatomy',
    category: 'concept',
    title: 'What facial volume loss actually is',
    tldr: 'Facial fat is compartmentalised — deep pads that prop the face and superficial pads that soften it — and both change with age: deep fat under the cheek empties, superficial fat thins and slides downward, and the temple’s fat pad shrinks. Underneath, the skull itself resorbs. The face deflates before it descends.',
    bodyHtml: `
      <p>Facial fat is not a sheet but a set of compartments separated by fibrous walls, mapped by Rohrich and Pessa in 2007, with deep pads that sit on bone and prop the face and superficial pads that soften its surface (<a href="https://journals.lww.com/plasreconsurg/fulltext/2008/03000/the_fat_compartments_of_the_face__anatomy_and.53.aspx" rel="noopener nofollow" target="_blank">PRS, 2007</a>). Imaging shows what age does to each: on CT the midfacial compartments migrate downward and their volume shifts inferiorly, with the deep medial cheek fat losing volume (<a href="https://pubmed.ncbi.nlm.nih.gov/21915077/" rel="noopener nofollow" target="_blank">CT study</a>); on repeat MRI of 70 people a median 44 months apart, volume and thickness fell significantly in every superficial midface compartment, with the upper and middle compartments narrowing and the lower ones widening as fat displaced downward (<a href="https://pubmed.ncbi.nlm.nih.gov/32804897/" rel="noopener nofollow" target="_blank">MRI study</a>; <a href="https://link.springer.com/article/10.1007/s00266-018-1134-x" rel="noopener nofollow" target="_blank">10-year analysis</a>).</p>
      <p>Beneath the fat, the skeleton retreats: the bony orbit widens, the maxilla's angle decreases, the aperture beside the nose enlarges and the jaw shortens (<a href="https://pubmed.ncbi.nlm.nih.gov/17230106/" rel="noopener nofollow" target="_blank">midface CT study</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3404279/" rel="noopener nofollow" target="_blank">Mendelson &amp; Wong</a>). The result is a face that deflates — temples scalloped, cheeks flat, orbits hollow — often a decade before it visibly sags, and the two problems want different treatments.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'How much is lost, and when',
    tldr: 'On MRI of 58 women, temple soft tissue measured 12.3 mm in the young, 8.4 mm in the middle-aged and 8.9 mm in the old; the medial cheeks lost about 3.3 mm and the lateral cheeks 2.4 mm, with the most dramatic change between 30 and 60. 3D studies show the temples going scalloped and the bitemporal width narrowing.',
    bodyHtml: `
      <p>The numbers are in millimetres and start early. In a study of 2,037 MRI scans from 58 women divided into young, middle-aged and older groups, subcutaneous thickness in the temple measured 12.3, 8.4 and 8.9 mm respectively, the infraorbital area lost 1.6–2.2 mm, the medial cheeks 3.2–3.3 mm and the lateral cheeks 2.4 mm, with the most dramatic changes between the ages of 30 and 60 (<a href="https://pubmed.ncbi.nlm.nih.gov/24238002/" rel="noopener nofollow" target="_blank">MRI study</a>). Three-dimensional surface studies of European faces show bitemporal width decreasing and the temporal fat pad diminishing into the scalloped temple of older adults (<a href="https://link.springer.com/article/10.1007/s11357-026-02293-w" rel="noopener nofollow" target="_blank">3D aging study</a>), and the bony changes accelerate after the menopause in women and a decade later in men (<a href="https://www.sciencedirect.com/science/article/pii/S2352587826000185" rel="noopener nofollow" target="_blank">bone aging review</a>). Lean faces, endurance athletes and people who lost weight quickly show it first; heavier faces show it as descent instead.</p>
    `,
  },
  {
    id: 'why-hard',
    category: 'concept',
    title: 'Why this is the one problem where "add volume" is right — and where it goes wrong',
    tldr: 'Replacing lost volume has the randomised evidence: 80% of temples and 86% of midfaces improved against controls, and a collagen stimulator beat hyaluronic acid 91% to 51% at a year. The failures are anatomical (the temple’s vessels), diagnostic (filling a face that was sagging) and cumulative (gel that persists for years while top-ups continue).',
    bodyHtml: `
      <p>For most aging problems, adding volume is a compromise; for deflation it is the treatment, and the trials are regulator-grade. A hyaluronic gel improved temple hollowing by at least a grade in 80.4% of treated patients against 13.5% of untreated controls at three months (<a href="https://www.jaad.org/article/S0190-9622(24)01982-0/fulltext" rel="noopener nofollow" target="_blank">temple RCT</a>); the midface pivotal programme improved 85.6% at six months against controls with 79% still rating their cheeks improved at two years (<a href="https://pubmed.ncbi.nlm.nih.gov/24093664/" rel="noopener nofollow" target="_blank">pivotal RCT</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4482214/" rel="noopener nofollow" target="_blank">two-year outcomes</a>); a meta-analysis of five randomised trials in 748 people finds midface responder rates 3.3 times control (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12566132/" rel="noopener nofollow" target="_blank">meta-analysis</a>); and poly-L-lactic acid beat hyaluronic acid 90.6% to 51.0% at twelve months in a 329-person randomised trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12273185/" rel="noopener nofollow" target="_blank">superiority trial</a>).</p>
      <p>Three things go wrong. The temple carries arteries that connect to the eye and a vein that connects to the lungs, which makes it the most dangerous injection site on the face. The recline test is skipped, and a face that was sagging gets filled until it is both sagging and swollen. And hyaluronic gel persists on MRI for years while clinics book a top-up every twelve months, so volume accumulates into the overfilled face that the public now recognises. The plan on this page is the trial evidence with those three failures designed out.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-fat-deflation',
    category: 'context',
    title: 'The deflated face (scalloped temples, flat cheeks, a tired look at every angle)',
    tldr: 'Temples that dip inward above the cheekbone, cheeks that have gone flat or concave, a hollow at the side of the orbit — and a face that looks the same lying down as sitting up. Deflation, not descent: the type that volume replacement was trialled on.',
    focus: 'midface',
    bodyHtml: `
      <p>Look at the face straight on and at three-quarters in daylight, then lie flat with a mirror. Temples that curve inward above the cheekbone so the brow tail and the cheekbone stand out, cheeks that have lost their forward curve, a groove running from the orbit's outer corner down the cheek, and a face that reads as tired or drawn whatever the expression — and that looks the same lying on its back — is deflated: the deep fat that propped the cheek and the temple's fat pad have emptied, and the superficial fat has thinned. This is the type the temple and midface trials enrolled, and the type where a firm gel on the bone, a collagen stimulator or a fat graft restores what left. The <a href="/sagging-skin">sagging-skin guide</a> covers the other kind.</p>
    `,
  },
  {
    id: 'type-bone',
    category: 'context',
    title: 'The retreating skeleton (orbit, cheekbone, nose, chin)',
    tldr: 'A hollow ring around the eye, a cheekbone that has lost its shelf, a deepening groove beside the nose and a shortening chin — the bone has resorbed beneath the fat. Bone-level support with a firm gel or a stimulator is the treatment; the eye-bags and nasolabial guides cover the orbit and the nose.',
    focus: 'bone',
    bodyHtml: `
      <p>Run a finger along the lower rim of the eye socket and the cheekbone beneath it. A rim that feels sharper and lower than it did, with a hollow ring around the orbit that no amount of sleep fills, a cheekbone that has lost its forward shelf, and a deepening groove beside the nose, is the skeleton retreating: CT studies show the orbital aperture widening and its rims receding, the maxillary angle decreasing and the pyriform aperture enlarging with age in both sexes (<a href="https://www.sciencedirect.com/science/article/abs/pii/S1090820X08000824" rel="noopener nofollow" target="_blank">orbit CT study</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/17230106/" rel="noopener nofollow" target="_blank">midface CT study</a>). Filler placed deep on the periosteum rebuilds the shelf the soft tissue drapes over, which is why midface injection starts on the bone; the tear trough has its own trial and its own risks in the <a href="/eye-bags">eye guide</a>, and the aperture beside the nose is graded in the <a href="/nasolabial-folds">nasolabial guide</a>.</p>
    `,
  },
  {
    id: 'type-weight',
    category: 'context',
    title: 'The weight-loss face, the athlete’s face and the menopausal face',
    tldr: 'Facial fat tracks body fat: distance runners, dieters and GLP-1 users lose the temples and cheeks first, and estrogen’s loss at menopause takes the cheek fat it once deposited. Younger skin redrapes; older skin hangs. Volume replaced where it left is the plan — at the end of the loss, not during it.',
    focus: 'global',
    bodyHtml: `
      <p>Nobody can choose where fat leaves, and the face is often first. Endurance athletes at very low body fat show the hollow temple and cheek that the internet calls "runner's face" — a redistribution of body fat rather than any effect of running on skin (<a href="https://www.goodrx.com/well-being/movement-exercise/runners-face" rel="noopener nofollow" target="_blank">GoodRx</a>); estrogen deposits subcutaneous fat in the cheeks and its withdrawal at menopause takes it away; and the GLP-1 medicines have made temporal hollowing a routine clinic complaint, with clinicians describing midface volume loss, temple hollowing and laxity arriving over months in people who never had them (<a href="https://pubmed.ncbi.nlm.nih.gov/41768029/" rel="noopener nofollow" target="_blank">ASJ Open Forum, 2026</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12232544/" rel="noopener nofollow" target="_blank">systematic review</a>), and laboratory work suggesting the drugs may also blunt the cells that rebuild fat and dermis (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13385476/" rel="noopener nofollow" target="_blank">mechanisms review</a>). The treatments are the same as for any deflation; the timing is not — replace volume once the weight has settled, or the face will be refilled twice.</p>
    `,
  },
  {
    id: 'type-descent-not-volume',
    category: 'context',
    title: 'The face that is sagging, not deflating',
    tldr: 'Jowls, folds and a heavy lower face that vanish when you lie on your back are descent — tissue in the wrong place, not tissue missing. Filling it adds weight to a face that has too much low down already. The recline test is the whole diagnosis.',
    focus: 'general',
    bodyHtml: `
      <p>The most expensive mistake in this territory is treating descent as deflation. Lie flat with a hand mirror: if the jowls fall back, the folds soften and the face you want appears, the tissue is present but has slid — the malar fat pad down the cheek, the jowl fat over the jaw — and what it needs is support behind it and, at the far end, repositioning, not more of it. Deep filler on the cheekbone can help a sliding cheek a little by re-propping it; filler in the jowl, the fold and the lower face makes a heavy face heavier, and the accumulated result over a few years is the overfilled face (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13051189/" rel="noopener nofollow" target="_blank">overfilled syndrome</a>). The <a href="/jowls">jowls guide</a> and the <a href="/sagging-skin">sagging-skin guide</a> grade that problem; most faces over fifty have some of both, and the order is support first, sparingly, and repositioning when it is really descent.</p>
    `,
  },
  {
    id: 'type-iatrogenic',
    category: 'context',
    title: 'The hollow you paid for (buccal fat removal, over-treated devices, old lipoatrophy)',
    tldr: 'Buccal fat removed at 25 is a hollow cheek at 45; focused ultrasound aimed too deep and too often melts the superficial fat of a thin face; steroid injections and some medicines atrophy fat locally. Self-inflicted deflation is treated like any other — with less to work with.',
    focus: 'global',
    bodyHtml: `
      <p>Some hollows were bought. Buccal fat pad removal, sold to people in their twenties for a sculpted look, removes a compartment that the aging face would have needed; surgeons now warn that as the surrounding fat deflates with age, the missing pad leaves a gaunt, sunken midface that is hard to restore, and that only a small minority of those requesting it are suitable candidates. Focused ultrasound and other energy devices aimed too deep or repeated too often dissolve the superficial fat a thin face cannot spare — the stringy, hollowed look that appears months later and that the retrospective series count as patients who looked worse (<a href="https://pubmed.ncbi.nlm.nih.gov/32770566/" rel="noopener nofollow" target="_blank">retrospective study</a>). Older antiretroviral drugs caused facial lipoatrophy severe enough that poly-L-lactic acid was first licensed for it (<a href="https://pubmed.ncbi.nlm.nih.gov/15012646/" rel="noopener nofollow" target="_blank">HIV lipoatrophy RCT</a>). The treatments are the same; the tissue to build on is less, and a fat graft is often the better long-term answer.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'The recline test, the three-quarter photograph and the scales',
    tldr: 'Lie flat: a face that improves is sagging; one that does not is deflated. Photograph straight on, at three-quarters and in profile in daylight — the temple-hollowing and midface-volume scales the trials used are graded from exactly those views. Note weight trajectory, medicines and any previous procedure.',
    bodyHtml: `
      <p>One test and one photograph decide most of the plan. Lie flat with a hand mirror: a face that looks younger on its back is descending and belongs to the sagging and jowls guides first; a face that looks the same is deflated and belongs here. Then photograph in daylight straight on, at three-quarters and in profile, with a neutral expression — the Allergan temple-hollowing scale (0–4) and the midface-volume-deficit scale used in every trial on this page are graded from those views, and your result will be compared against the same picture. Write down your weight over the last two years and any weight-loss medicine, any hormone change, and any procedure that removed or heated fat. A clinic that quotes syringes before asking those questions and before watching you lie down is selling volume, not diagnosing its absence.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-weight',
    category: 'home',
    title: 'Weight: enough of it, lost slowly, and settled before you refill',
    tldr: 'Facial fat follows body fat, so a very low body-fat percentage or a fast loss hollows the temples and cheeks first, and refilling a face mid-diet is money spent twice. No trial; consistent physiology.',
    evidence: 'moderate',
    focus: 'global',
    note: 'Best for: anyone whose hollows arrived with a weight change — the free half of the treatment',
    sessions: 'Ongoing',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Facial fat is ordinary subcutaneous fat and goes with the rest: endurance training to a very low body-fat percentage, crash dieting and the GLP-1 medicines all empty the temples and cheeks, and the older the skin the less it redrapes (<a href="https://www.goodrx.com/well-being/movement-exercise/runners-face" rel="noopener nofollow" target="_blank">GoodRx</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/41768029/" rel="noopener nofollow" target="_blank">ASJ Open Forum, 2026</a>). Nobody should carry weight for a face, and the useful rules are about pace and timing: lose slowly enough for the skin to follow, hold the weight for a few months before anyone injects, and treat the face at the end of a course of medicine rather than in the middle of it. Moderate on observational evidence; there is no randomised diet.</p>
    `,
  },
  {
    id: 'home-facial-exercise',
    category: 'home',
    title: 'Facial exercise',
    tldr: 'The one facial-exercise pilot is about this problem: blinded raters judged upper and lower cheek fullness improved after 20 weeks in 16 women, estimating faces about three years younger. No control group, no imaging, half an hour a day — and the only place the exercise evidence points the right way.',
    evidence: 'emerging',
    focus: 'midface',
    sessions: '30 minutes daily, then alternate days',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Facial-exercise programmes claim to build the muscles under the cheeks, and the one controlled-ish study measured exactly the outcome this guide is about: in a 20-week pilot, 16 middle-aged women completed a daily programme and blinded dermatologists rated upper- and lower-cheek fullness improved, estimating the faces about three years younger, with the authors proposing hypertrophy of the muscles beneath the cheek fat (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/2666801" rel="noopener nofollow" target="_blank">Alam 2018</a>). There was no control group, no volumetric imaging and a heavy time cost, and the same movements etch expression lines elsewhere; but for the deflated cheek it is the rare free intervention with a plausible mechanism and a pilot behind it. Emerging, and worth the half hour for the person who will do it.</p>
    `,
  },
  {
    id: 'home-skincare',
    category: 'home',
    title: 'Retinoids, sunscreen and the skin over the hollow',
    tldr: 'Nothing topical adds volume; a retinoid thickens the dermis over a hollow so it drapes less thinly, and sunscreen keeps the skin from tightening into the defect. Skin quality around a volume problem, never the volume.',
    evidence: 'emerging',
    focus: 'general',
    sessions: 'Daily',
    downtime: 'Weeks of dryness',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>A hollow reads as a hollow partly because thin, crepey skin drapes into it, and the dermis is the one layer creams reach: tretinoin rebuilt upper-dermal collagen across eight randomised trials (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/" rel="noopener nofollow" target="_blank">meta-analysis</a>) and daily sunscreen kept measured skin aging flat over 4.5 years in the one prevention trial (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>). Neither changes the fat or the bone, which is why the row is emerging for this problem; a thicker dermis over a refilled cheek is the difference between a good result and a visible one. The <a href="/wrinkles">wrinkles guide</a> covers the ladder.</p>
    `,
  },
  {
    id: 'home-creams-gadgets',
    category: 'home',
    title: '"Volumising" creams, plumping serums and home devices',
    tldr: 'A manufacturer-run study of a "volumising" cream in people after rapid weight loss reports self-assessed improvement; hyaluronic serums hydrate the surface for hours; no cream or handheld device adds tissue. Hydration sold as volume.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'As desired',
    downtime: 'None',
    cost: '€20–150',
    bodyHtml: `
      <p>The word "volumising" on a jar means hydration. A topical cream marketed to GLP-1 and post-surgical weight-loss patients has a manufacturer-linked study reporting improved facial volume and skin health on assessment scales (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12817327/" rel="noopener nofollow" target="_blank">industry study</a>); hyaluronic serums swell the outermost layer with water for a few hours; microcurrent, rollers and LED masks tone, drain and stimulate the dermis and add no fat or bone. None of it reaches the compartments that emptied. Pleasant, harmless, and not a rung on the ladder.</p>
    `,
  },
];

const inj: Section[] = [
  {
    id: 'inj-ha-temples',
    category: 'inj',
    title: 'Hyaluronic-acid filler for hollow temples',
    tldr: 'The first filler licensed for temple hollowing: in a randomised controlled trial, 80.4% of 112 treated patients improved at least a grade in both temples at three months against 13.5% of 58 untreated controls, 73.3% still responding at 13 months. A second product has since been approved with results toward 18 months. The most dangerous site on the face, done right.',
    evidence: 'strong',
    focus: 'temple',
    note: 'Best for: the scalloped temple — reversible, a year or more, by an injector who maps the vessels',
    sessions: 'Every 12–18 months',
    downtime: '3–7 days of swelling; tenderness on chewing',
    cost: '€400–800 (1–2 ml; UK from £300–400)',
    bodyHtml: `
      <p>A firm hyaluronic gel placed on the bone of the temple or in the plane between the temporal fasciae rebuilds the padding the temple lost and restores the smooth line from brow to cheekbone. The evidence is regulator-grade: in a multicentre randomised, evaluator-blinded controlled trial, 112 patients were treated and 58 left untreated, and 80.4% of the treated improved at least one grade on the Allergan temple-hollowing scale in both temples at three months against 13.5% of controls, with 73.3% still responding at month 13 and more than 85% satisfied with how balanced and symmetric their face looked (<a href="https://www.jaad.org/article/S0190-9622(24)01982-0/fulltext" rel="noopener nofollow" target="_blank">pivotal trial</a>; <a href="https://news.abbvie.com/2024-03-05-JUVEDERM-R-VOLUMA-R-XC-For-Temple-Hollows-Receives-U-S-FDA-Approval" rel="noopener nofollow" target="_blank">2024 approval</a>). A second hyaluronic product has since been approved for the temples with durable results reported toward 18 months (<a href="https://iapam.com/glp1-temple-hollowing-restylane-contour-fda-approval" rel="noopener nofollow" target="_blank">approval summary</a>), and a randomised comparison of pure hyaluronic acid against a hyaluronic–calcium hydroxylapatite blend for the temple exists (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12371837/" rel="noopener nofollow" target="_blank">comparison RCT</a>).</p>
      <p>The temple is where the rules are strictest, for reasons the safety group spells out: deep on the periosteum or in the mapped interfascial plane, a cannula, aspiration, small volumes, and someone who treats temples weekly and keeps hyaluronidase in the room (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11856534/" rel="noopener nofollow" target="_blank">expert guide</a>). Reversible, which is why it is the first temple treatment and the one to learn your face on. The <a href="/fillers">filler guide</a> covers the products.</p>
    `,
  },
  {
    id: 'inj-ha-midface',
    category: 'inj',
    title: 'Hyaluronic-acid filler for the cheeks and midface',
    tldr: 'The midface has the deepest volume evidence: 85.6% improved at six months against controls in the 235-patient pivotal trial with 79% still rating cheeks improved at two years; a second product reached 88.7% responders; a meta-analysis of five randomised trials in 748 people finds responder rates 3.3 times control. Deep on the bone, in millilitres, not syringes.',
    evidence: 'strong',
    focus: 'midface',
    note: 'Best for: the flat or concave cheek and the retreating cheekbone — the support that most other guides on this site send you back to',
    sessions: 'Every 12–24 months',
    downtime: '3–7 days of swelling; bruising',
    cost: '€600–1,600 (2–4 ml; UK £200–400 per ml)',
    bodyHtml: `
      <p>A firm hyaluronic gel placed on the cheekbone and into the deep medial cheek fat restores the shelf and the padding the midface lost, and the evidence is the deepest in aesthetic volume work. The pivotal programme randomised 235 patients to treatment against 47 untreated controls: 85.6% improved at least one grade on the midface volume-deficit scale at six months, and 79% still rated their cheek volume improved at two years, with satisfaction improving in the untreated folds and tear troughs beside them (<a href="https://pubmed.ncbi.nlm.nih.gov/24093664/" rel="noopener nofollow" target="_blank">pivotal RCT</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4482214/" rel="noopener nofollow" target="_blank">two-year outcomes</a>). A second product's approval trial found 88.7% of 150 patients responding in both cheeks (<a href="https://www.galderma.com/news/galderma-receives-us-fda-approval-restylane-lyft" rel="noopener nofollow" target="_blank">approval</a>; <a href="https://www.accessdata.fda.gov/cdrh_docs/pdf4/P040024S073b.pdf" rel="noopener nofollow" target="_blank">FDA summary</a>); a newer resilient gel matched its comparator at 87% versus 90.5% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13481993/" rel="noopener nofollow" target="_blank">RHA4 trial</a>); and the systematic review and meta-analysis of five randomised trials in 748 participants puts the responder rate at 3.27 times control, with adverse events rare and no product clearly better than another (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12566132/" rel="noopener nofollow" target="_blank">meta-analysis</a>).</p>
      <p>Placement is the medial cheek and the bone beneath it for the deflated face; the lateral cheekbone for a contour that was never there is a different, more visible purchase. Gel persists on MRI for years, so the second and third sessions are decided on the photograph, not the calendar (<a href="https://journals.lww.com/prsgo/fulltext/2024/07000/hyaluronic_acid_filler_longevity_in_the_mid_face_.36.aspx" rel="noopener nofollow" target="_blank">MRI review</a>). The <a href="/fillers">filler guide</a> grades the products.</p>
    `,
  },
  {
    id: 'inj-plla',
    category: 'inj',
    title: 'Poly-L-lactic acid (Sculptra and successors)',
    tldr: 'A collagen stimulator with the strongest head-to-head data in this territory: 90.6% versus 51.0% for hyaluronic acid at twelve months in a 329-person randomised trial, and 96.5% of temples improved against 0% of controls in a 173-person trial. Slow, cumulative, no reversal, and nodules in about one in ten.',
    evidence: 'strong',
    focus: 'global',
    note: 'Best for: the face that has deflated everywhere — temples, cheeks, orbit, jaw — and wants a gradual, natural, longer result',
    sessions: '2–3 sessions a month apart; repeat every 2 years',
    downtime: '2–3 days; five days of massage',
    cost: '€500–800 per vial (UK £400–800), usually 2–4 vials',
    bodyHtml: `
      <p>Poly-L-lactic acid is injected as a suspension and provokes fibroblasts to build collagen around its particles over months, so the volume arrives gradually and reads as the patient's own tissue. First licensed for the facial lipoatrophy of HIV, where a 30-patient randomised trial of immediate against delayed injection found large differences in appearance scores at 12 weeks with benefits lasting beyond the course (<a href="https://pubmed.ncbi.nlm.nih.gov/15012646/" rel="noopener nofollow" target="_blank">HIV lipoatrophy RCT</a>), it now has the strongest comparative trials in this guide: a prospective multicentre randomised evaluator-blinded superiority trial of 329 people found 90.6% of the poly-L-lactic acid group improved at least one grade on the midface volume scale at twelve months against 51.0% of the hyaluronic acid group, with nodules — mostly mild — in 10.2% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12273185/" rel="noopener nofollow" target="_blank">superiority trial</a>); a randomised no-treatment-controlled trial of 173 people found 96.5% of treated temples improved at least a grade at six months against 0% of controls, holding at 97.1% at twelve, with no product-related adverse events (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13182905/" rel="noopener nofollow" target="_blank">temple RCT</a>); a systematic review pools the facial evidence (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11435306/" rel="noopener nofollow" target="_blank">systematic review</a>).</p>
      <p>Both randomised trials are of newer formulations from Chinese manufacturers, which the caveat notes; the class evidence in the nasolabial fold is cited in the <a href="/nasolabial-folds">nasolabial guide</a>. The trades: nothing on the day, results over three months, dilution and massage that decide whether nodules form, and no enzyme to remove it. The <a href="/regenerative-aesthetics">regenerative guide</a> grades the biostimulators.</p>
      <p class="text-ink/60 text-sm italic">Caveat: the two randomised trials cited here were run by the manufacturers of the products tested; the effect sizes are large but not yet independently replicated.</p>
    `,
  },
  {
    id: 'inj-caha-cheek',
    category: 'inj',
    title: 'Calcium hydroxylapatite for the cheeks',
    tldr: 'A randomised controlled trial of 116 people given a mean 4.7 ml in the cheeks found physician satisfaction of 92% and patient satisfaction of 80% at twelve months with no serious adverse events; a systematic review supports the cheek and jawline. Firmer and longer than hyaluronic acid, not reversible.',
    evidence: 'moderate',
    focus: 'midface',
    sessions: 'Every 12–18 months',
    downtime: '3–7 days',
    cost: '€400–700 per syringe, usually 2–3',
    bodyHtml: `
      <p>Calcium hydroxylapatite microspheres in a gel carrier fill on the day and stimulate collagen as the carrier is absorbed, giving a firmer, longer-lasting cheek than hyaluronic acid. The cheek evidence is a randomised controlled multicentre trial of 116 people given a mean of 4.7 ml across the malar, submalar and preauricular areas, with satisfaction of 75% or more throughout, 92% for physicians and 80% for patients at twelve months, and no serious adverse events (<a href="https://pubmed.ncbi.nlm.nih.gov/22759259/" rel="noopener nofollow" target="_blank">cheek RCT</a>); a systematic review of the product recommends it for the cheeks, jawline and lipoatrophy (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/ijd.16888" rel="noopener nofollow" target="_blank">systematic review</a>). Moderate because the trial measured satisfaction rather than a validated scale against controls; the trade is that nothing dissolves it and it is too firm for the temple and the orbit. The <a href="/regenerative-aesthetics">regenerative guide</a> covers the stimulators.</p>
    `,
  },
  {
    id: 'inj-glp1-combination',
    category: 'inj',
    title: 'The GLP-1 protocol: stimulator plus hyaluronic acid after weight loss',
    tldr: 'An open-label multicentre study of combined poly-L-lactic acid and hyaluronic midface filler in GLP-1 users reports improved facial harmony and skin quality; expert guidance describes the same layered approach. The right idea, on early evidence, timed for after the weight has settled.',
    evidence: 'emerging',
    focus: 'global',
    sessions: 'A stimulator course plus 1–2 filler sessions',
    downtime: '3–7 days',
    cost: '€1,500–3,000',
    bodyHtml: `
      <p>The weight-loss face loses deep fat, superficial fat and skin quality at once, and the protocols now published for it layer a collagen stimulator for global deflation with hyaluronic gel for the shelves: a multicentre open-label study of combined poly-L-lactic acid and hyaluronic midface filler in GLP-1 users reports improved facial harmony and skin quality (<a href="https://academic.oup.com/asj/advance-article/8324868" rel="noopener nofollow" target="_blank">open-label study</a>), and experience-based guidance from clinicians treating these patients describes the same sequence with follow-up and nutritional support (<a href="https://pubmed.ncbi.nlm.nih.gov/41768029/" rel="noopener nofollow" target="_blank">ASJ Open Forum, 2026</a>). Emerging because it is open-label and new; the components each have their trials above. The timing is the point: a face refilled while the weight is still falling is refilled twice.</p>
    `,
  },
  {
    id: 'inj-boosters-prp',
    category: 'inj',
    title: 'Skin boosters, PRP, polynucleotides and exosomes',
    tldr: 'None adds volume: skin boosters hydrate the dermis, PRP has split-face trials for texture, polynucleotides low-quality studies for elasticity, exosomes regulator alerts. Sold for the hollow face because a syringe is a syringe; the hollow is untouched.',
    evidence: 'limited',
    focus: 'general',
    sessions: '2–3 sessions',
    downtime: '1–3 days',
    cost: '€300–800 per session',
    bodyHtml: `
      <p>Injectables that improve skin quality are routinely offered to the deflated face, and none of them replaces tissue. Bioremodelling hyaluronic complexes hydrate the dermis and have small controlled trials for texture; platelet-rich plasma's three randomised split-face trials show modest texture gains and measure no volume (<a href="https://www.tandfonline.com/doi/full/10.2147/CCID.S340434" rel="noopener nofollow" target="_blank">split-face trials</a>); polynucleotides rest on low-to-moderate-quality studies of elasticity; exosome products carry regulator alerts (<a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">FDA notification</a>). Defensible as a skin-quality add-on over a refilled cheek; limited for the hollow itself. The <a href="/regenerative-aesthetics">regenerative guide</a> grades each.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-fat-grafting',
    category: 'clinic',
    title: 'Autologous fat grafting to the temples and cheeks',
    tldr: 'Your own fat, moved from the abdomen or thigh: pooled retention of 47% across 27 studies, 33–65% in the temples, better in still areas than mobile ones; a 5-year series reports durable satisfaction; a 62-patient randomised comparison matched hyaluronic acid over nine months and led at twelve. An operation, a second session often, no reversal.',
    evidence: 'moderate',
    focus: 'global',
    note: 'Best for: the globally deflated face that wants one permanent answer, the buccal-fat-removal regret, and anyone done with syringes',
    sessions: 'Once, often twice',
    downtime: '1–2 weeks of swelling; donor-site bruising',
    cost: '€3,500–8,000 (UK £3,000–7,000)',
    bodyHtml: `
      <p>Fat harvested by gentle liposuction, processed and injected in fine threads into the temples, cheeks and orbit replaces the deep fat that emptied with living tissue that ages with the face. The honest number is survival: a systematic review and meta-analysis of 27 studies put pooled facial retention at 47% (range 26–83%), varying with the measurement method (<a href="https://pubmed.ncbi.nlm.nih.gov/31940073/" rel="noopener nofollow" target="_blank">retention meta-analysis</a>); a systematic review of temporal augmentation found retention of 33–65% where it was measured, better in the still temples and cheeks than around the mouth (<a href="https://www.frontiersin.org/journals/surgery/articles/10.3389/fsurg.2024.1410162/full" rel="noopener nofollow" target="_blank">temporal review</a>); a five-year follow-up series reports lasting volume and satisfaction (<a href="https://www.sciencedirect.com/science/article/pii/S1748681525000518" rel="noopener nofollow" target="_blank">five-year study</a>); and the 62-patient randomised comparison with hyaluronic acid in the folds found no difference to nine months and an advantage for fat at twelve (<a href="https://pubmed.ncbi.nlm.nih.gov/28294535/" rel="noopener nofollow" target="_blank">Hu 2017</a>). Concentrated stromal-vascular-fraction gel retained 41% against 33% for standard fat in the temple (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9428844/" rel="noopener nofollow" target="_blank">SVF study</a>). Moderate on series and one randomised trial; permanent for what survives, which follows body weight; and carrying a rare, catastrophic risk described in the safety group. The <a href="/jowls">jowls guide</a> covers it as part of a lift.</p>
    `,
  },
  {
    id: 'clinic-facelift-fat',
    category: 'clinic',
    title: 'Facelift with fat grafting, for the face that is both deflated and descended',
    tldr: 'When the recline test says both, surgeons reposition the descended tissue and graft fat into the temples and cheeks at the same operation; deep-plane and SMAS lifts satisfy 88–94% in a 2,896-patient meta-analysis, and the fat closes the gap a lift alone leaves. A decade of result, two weeks off.',
    evidence: 'moderate',
    focus: 'global',
    sessions: 'Once; 10–15 years',
    downtime: '2–3 weeks; final at 6–12 months',
    cost: '€10,000–22,000',
    bodyHtml: `
      <p>Most faces over fifty have deflated and descended at once, and the operation that addresses both is a facelift with fat grafting: the ligaments released and the cheek repositioned, then fat placed into the temples, the deep cheek and the orbit the lift cannot fill. The lift's evidence is the meta-analysis of deep-plane against SMAS techniques in 2,896 patients — 94% and 88% satisfied, haematoma in 1.6%, temporary nerve injury in 0.85% (<a href="https://link.springer.com/article/10.1007/s00266-025-05118-x" rel="noopener nofollow" target="_blank">meta-analysis</a>); the grafting's is the retention data above. Moderate as a combination on cohort evidence; the <a href="/sagging-skin">sagging-skin guide</a>, the <a href="/jowls">jowls guide</a> and the <a href="/anti-aging-50s">50s guide</a> cover the decision. Nobody should have a facelift for hollow temples alone.</p>
    `,
  },
  {
    id: 'clinic-svf-nanofat',
    category: 'clinic',
    title: 'Stromal-vascular-fraction gel and nanofat',
    tldr: 'Fat concentrated into a cell-rich gel retained 41% against 33% for ordinary fat in a temple comparison; nanofat is injected for skin quality rather than volume. Surgical refinements with small series, sold under regenerative names.',
    evidence: 'emerging',
    focus: 'temple',
    sessions: 'Once',
    downtime: '1–2 weeks',
    cost: '€4,000–9,000',
    bodyHtml: `
      <p>Processing harvested fat further — mechanically concentrating its stromal cells into a gel, or emulsifying it into nanofat — aims to improve survival and add a regenerative effect on the skin above. In a temple comparison, stromal-vascular-fraction gel retained 41.2% of its volume against 32.6% for standard Coleman fat (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9428844/" rel="noopener nofollow" target="_blank">SVF study</a>), and a randomised split-face trial tested platelet-rich fibrin added to fat grafts (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9043459/" rel="noopener nofollow" target="_blank">PRF split-face RCT</a>). Small series, surgical, and an incremental gain on a procedure whose main variable is the surgeon's technique; emerging, and not a reason to choose a clinic. The <a href="/regenerative-aesthetics">regenerative guide</a> covers the claims.</p>
    `,
  },
  {
    id: 'clinic-energy-devices',
    category: 'clinic',
    title: 'Energy devices (ultrasound, radiofrequency, lasers)',
    tldr: 'No device adds volume, and the ones that heat deeply can remove it: focused ultrasound aimed too deep melts superficial fat, and a retrospective series found a sixth of patients looking worse. For the deflated face, a tightening device is the wrong purchase and sometimes the cause.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'Not for this problem',
    downtime: 'None',
    cost: '€1,500–3,500',
    bodyHtml: `
      <p>Energy devices contract collagen; they cannot add fat or bone, and the deeper ones subtract fat when the depth or density is wrong. The retrospective series of focused ultrasound in which a sixth of patients looked worse describes exactly the thin, deflated face treated as if it were lax (<a href="https://pubmed.ncbi.nlm.nih.gov/32770566/" rel="noopener nofollow" target="_blank">retrospective study</a>), and the device meta-analyses measure lift in millimetres on faces selected for laxity rather than deflation (<a href="https://academic.oup.com/asj/article/45/3/NP86/7900203" rel="noopener nofollow" target="_blank">meta-analysis</a>). For a face that fails the recline test — the same lying down as sitting up — a device is money spent on the wrong problem, and in a thin face it can be the reason the hollows deepened. The <a href="/sagging-skin">sagging-skin guide</a> grades them for the problem they treat.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-temple',
    category: 'safety',
    title: 'The temple: arteries to the eye, a vein to the lungs',
    tldr: 'The superficial temporal and zygomatico-orbital arteries connect to the eye and the middle temporal vein to the lungs; CT angiography maps the danger zones, a meta-analysis supports the interfascial plane by cannula, and 511 cases of filler blindness are published. Deep on bone or in the mapped plane, small volumes, aspiration, hyaluronidase in the room.',
    bodyHtml: `
      <p>The temple is the most dangerous injection site on the face because it is crossed by vessels going somewhere worse. The superficial temporal artery and the zygomatico-orbital artery connect through the orbit to the ophthalmic circulation, so gel forced into either can reach the retina; the middle temporal vein, running in the interfascial plane, connects to the internal jugular and gel injected into it has caused pulmonary embolism (<a href="https://pubmed.ncbi.nlm.nih.gov/32472312/" rel="noopener nofollow" target="_blank">venous danger zone review</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13314843/" rel="noopener nofollow" target="_blank">CT angiography study</a>). The 2024 review counts 511 published cases of filler-related blindness worldwide (<a href="https://academic.oup.com/asj/article/44/10/1091/7649223" rel="noopener nofollow" target="_blank">2024 review</a>), and registry analysis puts occlusion at about 1 in 6,410 needle syringes against 1 in 40,882 by cannula (<a href="https://www.harleyacademy.com/aesthetic-medicine-articles/cannula-use-makes-vascular-occlusion-less-likely/" rel="noopener nofollow" target="_blank">registry analysis</a>). The safeguards are anatomical: a systematic review and meta-analysis supports injection between the superficial and deep temporal fasciae with 18–21-gauge cannulas in small volumes (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12748926/" rel="noopener nofollow" target="_blank">interfascial meta-analysis</a>), the expert guides map the planes and hazards (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11856534/" rel="noopener nofollow" target="_blank">expert guide</a>), ultrasound guidance is described (<a href="https://pubmed.ncbi.nlm.nih.gov/36351192/" rel="noopener nofollow" target="_blank">ultrasound-guided technique</a>), and 84% of hyaluronic occlusions recover with prompt hyaluronidase (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12097758/" rel="noopener nofollow" target="_blank">pooled analysis</a>). Pain out of proportion, blanching, visual change or headache during a temple injection is an emergency in minutes; ask the injector how many temples a month and where the hyaluronidase is.</p>
    `,
  },
  {
    id: 'safety-overfill',
    category: 'safety',
    title: 'The overfilled face: MRI persistence, migration and the yearly top-up',
    tldr: 'Hyaluronic gel persists in the midface for years on MRI, and 3D-MRI shows it expanding in volume rather than shrinking; a clinic that tops up every twelve months is stacking. The pillow face is a diagnosis now, and its cure is hyaluronidase and restraint.',
    bodyHtml: `
      <p>The folklore says hyaluronic gel is gone in twelve to eighteen months; the imaging says otherwise. A review of 33 patients with midface MRI found gel persisting for years after injection (<a href="https://journals.lww.com/prsgo/fulltext/2024/07000/hyaluronic_acid_filler_longevity_in_the_mid_face_.36.aspx" rel="noopener nofollow" target="_blank">MRI review</a>), and 3D-MRI shows the injected volume expanding as the gel draws water rather than disappearing (<a href="https://www.ovid.com/jnls/prsgo/fulltext/10.1097/gox.0000000000007894~longevity-and-volume-expansion-of-hyaluronic-acid-dermal" rel="noopener nofollow" target="_blank">3D-MRI study</a>). Added to yearly, it accumulates into the swollen, flattened, feature-blurring face that the literature now classifies as facial overfilled syndrome and treats with hyaluronidase (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13051189/" rel="noopener nofollow" target="_blank">overfilled syndrome</a>), often after gel has migrated from the cheek into the lower face. The rules: volume decided on the photograph rather than the calendar, the medial cheek before the lateral cheekbone, nothing in a face that passed the recline test as sagging, and a clinician who dissolves as readily as they inject.</p>
    `,
  },
  {
    id: 'safety-biostimulators',
    category: 'safety',
    title: 'Poly-L-lactic acid and calcium hydroxylapatite: nodules and no eraser',
    tldr: 'Nodules in 10.2% in the 329-person PLLA trial, mostly mild; delayed nodules after 0.02–4% of any filler; calcium hydroxylapatite lumps in thin skin and is too firm for the temple and orbit. Neither dissolves; dilution, depth and massage decide the outcome.',
    bodyHtml: `
      <p>The collagen stimulators buy their duration with irreversibility. In the 329-person randomised trial, nodules occurred in 10.2% of the poly-L-lactic acid group, mostly mild (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12273185/" rel="noopener nofollow" target="_blank">superiority trial</a>); papules form when the suspension is placed too superficially, diluted too little or massaged too briefly, and the temple and the orbit are the sites where a nodule shows. Calcium hydroxylapatite lumps in thin skin and is not used in the temple or the tear trough; delayed-onset nodules follow 0.02–4.25% of any filler, often after an infection or vaccine (<a href="https://jcadonline.com/cmac-delayed-onset-nodules/" rel="noopener nofollow" target="_blank">review</a>). No enzyme removes either; a nodule is steroids, time and occasionally a scalpel. Hyaluronic acid first, to learn the face; a stimulator once its behaviour under volume is known.</p>
    `,
  },
  {
    id: 'safety-fat-iatrogenic',
    category: 'safety',
    title: 'Fat grafting’s rare catastrophe, and the hollows that were bought',
    tldr: 'Fat is the most dangerous filler when it enters an artery — no enzyme dissolves it, and it accounts for a large share of published filler blindness and stroke; retention is unpredictable and a second session common. Buccal fat removal and over-treated ultrasound create the hollows this page then has to fill.',
    bodyHtml: `
      <p>Fat grafting's routine costs are swelling, donor-site bruising and the uncertainty of survival — 47% pooled retention, so a second session is common (<a href="https://pubmed.ncbi.nlm.nih.gov/31940073/" rel="noopener nofollow" target="_blank">retention meta-analysis</a>). Its rare catastrophe is embolism: fat injected under pressure into an artery of the face travels to the eye or the brain, nothing dissolves it, and autologous fat accounts for a large share of the 511 published cases of filler blindness and of the strokes among them (<a href="https://academic.oup.com/asj/article/44/10/1091/7649223" rel="noopener nofollow" target="_blank">2024 review</a>). Blunt cannulas, low pressure, small aliquots on withdrawal and the danger zones respected are the surgeon's safeguards. The other harm is the hollow that was bought: buccal fat removed for a sculpted look in the twenties leaves a gaunt midface in the forties, and focused ultrasound over-applied to a thin face dissolves the fat this guide exists to restore (<a href="https://pubmed.ncbi.nlm.nih.gov/32770566/" rel="noopener nofollow" target="_blank">retrospective study</a>). Both are treated like any deflation, with less to build on.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-filler-or-sculptra',
    category: 'faq',
    title: 'Hyaluronic acid or Sculptra?',
    tldr: 'Hyaluronic acid first: immediate, reversible, and the trials for temples and cheeks. Poly-L-lactic acid for the face that has deflated everywhere and wants a gradual, longer result — it beat hyaluronic acid 91% to 51% at a year in a 329-person trial, with nodules in one in ten and no eraser.',
    bodyHtml: `
      <p>They answer different questions. A firm hyaluronic gel restores a temple or a cheekbone on the day, is judged at two weeks, lasts a year or two and dissolves with an enzyme if the face was misjudged — the right first treatment, and the one the temple and midface trials were built on. Poly-L-lactic acid does nothing on the day and builds over three months into the patient's own collagen, across the whole face rather than one shelf; in the randomised comparison it beat hyaluronic acid 90.6% to 51.0% at twelve months, at the price of a 10% nodule rate and no reversal. Learn your face on the gel; graduate to the stimulator when you know how much volume you actually want, because that decision cannot be undone.</p>
    `,
  },
  {
    id: 'faq-temples-safe',
    category: 'faq',
    title: 'Are temple fillers safe?',
    tldr: 'In the trial, yes — 80% improved with no serious events. In the wrong hands, the temple is the most dangerous site on the face: arteries to the eye and a vein to the lungs. Deep on bone or in the mapped plane, by cannula, small volumes, hyaluronidase in the room, and an injector who does temples weekly.',
    bodyHtml: `
      <p>The pivotal trial treated 112 people with no serious adverse events and the approval followed, so the answer in expert hands is yes. The anatomy is the reason for the caveat: the superficial temporal and zygomatico-orbital arteries connect to the eye, the middle temporal vein to the lungs, and the published catastrophes — blindness, embolism — came from gel in those vessels. The safeguards are specific: injection deep on the periosteum or in the plane between the temporal fasciae that the meta-analysis supports, a cannula rather than a needle, aspiration, small volumes, slow injection, and hyaluronidase within reach. A temple should not be a first-year injector's site; ask how many they treat a month, and ask to see the emergency kit.</p>
    `,
  },
  {
    id: 'faq-how-long',
    category: 'faq',
    title: 'How long does volume last?',
    tldr: 'Hyaluronic temples: 13 months in the trial, toward 18 for the newer product. Midface: 79% still improved at two years. PLLA: two years and more. Fat: permanent for the half that survives. And MRI finds hyaluronic gel lingering long after it has stopped being visible — top up on the photograph, not the calendar.',
    bodyHtml: `
      <p>The trials give the visible durations: temple hyaluronic gel held its response in 73% at 13 months and the newer product reports results toward 18; midface gel had 79% of patients still rating their cheeks improved at two years; poly-L-lactic acid held 97% of temples at twelve months and its class reaches two years and beyond; fat grafting is permanent for the fraction that survives and then follows body weight. The number that matters more is the invisible one: MRI finds hyaluronic gel persisting in the midface for years after the effect has faded, expanding rather than shrinking, which is why a routine yearly top-up accumulates. The second session is decided by comparing the three-quarter photograph, not by the anniversary.</p>
    `,
  },
  {
    id: 'faq-fat-vs-filler',
    category: 'faq',
    title: 'Fat transfer or filler?',
    tldr: 'Filler for a temple or a cheekbone, reversibly, in an afternoon. Fat for the globally deflated face that wants one permanent answer and accepts an operation, a second session and no eraser — 47% pooled retention, better in the still areas, matched to hyaluronic acid in the one randomised comparison.',
    bodyHtml: `
      <p>Fat is the patient's own tissue, ages with the face, follows body weight and is permanent for what survives; the trades are an operation with a donor site, survival that averages 47% and varies from a quarter to four-fifths so a second session is common, no reversal, and the rare catastrophe of fat in an artery, which nothing dissolves. Filler is an afternoon, judged at two weeks, reversible, and trialled site by site with responder rates of 80–89%; its trades are a year or two of visible effect and gel that lingers invisibly. The usual sequence is filler until the face has told you how much volume it wants, then fat — or a collagen stimulator — for the person who is done with syringes; and fat at the same operation for anyone having a lift anyway.</p>
    `,
  },
  {
    id: 'faq-ozempic',
    category: 'faq',
    title: 'I lost weight on a GLP-1 medicine and my face looks gaunt. What now?',
    tldr: 'Wait until the weight has settled, then refill: deep support on the cheekbone and temple with hyaluronic gel, a collagen stimulator for the global deflation, and a device only if the recline test says slack. Refilling mid-loss means paying twice; refilling too late means skin that has already hung.',
    bodyHtml: `
      <p>The medicines empty deep facial fat fast and, in an older face, the skin does not follow; the temples and cheeks go first, and the clinics treating these patients describe a layered plan — hyaluronic gel on the shelves of the cheekbone and temple, poly-L-lactic acid for the deflation across the face, and skin quality work over it — with an open-label study of the combination reporting improved harmony. The timing rules matter more than the products: hold the weight for a few months before anyone injects, because a face refilled during the loss is refilled again after it; do the recline test, because a face that is now also loose needs support and tightening rather than more volume; and keep the volume modest, because the skin has already been stretched once. The <a href="/sagging-skin">sagging-skin guide</a> covers the laxity half.</p>
    `,
  },
  {
    id: 'faq-hrt',
    category: 'faq',
    title: 'Will hormone therapy bring my cheeks back?',
    tldr: 'Not measurably. Estrogen deposits subcutaneous fat in the cheeks and its loss at menopause removes it, but no trial has shown menopausal hormone therapy restoring facial fat; its skin benefits — elasticity, thickness, collagen — are documented and are a different thing.',
    bodyHtml: `
      <p>Estrogen shapes where a woman's body stores fat, including the cheeks and lips, and its withdrawal at menopause is one reason the face deflates in the fifties. Menopausal hormone therapy has a meta-analysis for skin elasticity, thickness and collagen, graded in the sagging-skin guide, and it is prescribed for menopause rather than for looks; nobody has shown it refilling the temples or the cheeks, and the fat that left is replaced with the treatments on this page. A woman whose face changed fast around menopause has two conversations to have — one with a menopause clinician about hormones and her skin, one with an injector about volume — and they are not the same conversation.</p>
    `,
  },
  {
    id: 'faq-pillow-face',
    category: 'faq',
    title: 'How do I avoid looking overfilled?',
    tldr: 'Do the recline test and refuse volume in a sagging face; fill the medial cheek and the temple before the lateral cheekbone; decide top-ups on the photograph, not the calendar; keep the total in millilitres you can name; and use an injector who dissolves as readily as they inject.',
    bodyHtml: `
      <p>The overfilled face is made by four habits: filling descent as if it were deflation, building a cheekbone that was never there instead of restoring the medial cheek that was, topping up on an annual schedule while gel from previous years persists, and never dissolving. The defences are the opposites. Lie flat before every course — if the face improves lying down, it wants support and repositioning, not volume. Restore the medial cheek and the temple, which read as youth, before the lateral cheekbone, which reads as a procedure. Compare the three-quarter photograph before each session and skip the ones you do not need. Know the total millilitres in your face. And choose a clinician who proposes hyaluronidase as easily as a syringe, because the same enzyme that reverses an occlusion reverses a mistake.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until I see something?',
    tldr: 'Hyaluronic acid: at once, settled at two weeks. Calcium hydroxylapatite: at once, building for months. Poly-L-lactic acid: nothing on the day, 6–12 weeks, judged at three months, sessions a month apart. Fat: swollen for weeks, the survivors declared at three months, final at six.',
    bodyHtml: `
      <p>Hyaluronic gel shows on the day and is judged at two weeks once the swelling has gone — the moment a misjudged temple can still be dissolved. Calcium hydroxylapatite fills on the day and firms over months as collagen forms around it. Poly-L-lactic acid is the patient's exercise in trust: the water it is suspended in is absorbed within days and the face returns to baseline, then collagen builds over six to twelve weeks, sessions are spaced a month apart and the course is judged at three months after the last. Fat grafting is over-corrected on the day, swollen for weeks, and the fat that will survive has declared itself by three months, with the final result at six. Photograph at three-quarters in daylight before anything.</p>
    `,
  },
  {
    id: 'faq-cost-ladder',
    category: 'faq',
    title: 'What is the cheapest thing that works, and the most effective?',
    tldr: 'Cheapest: weight held steady and lost slowly, free, plus a retinoid for the skin over the hollow. Most effective per euro: hyaluronic gel on the temple (€400–800) and the medial cheek (€600–1,600), reversible. Longest: a PLLA course (€1,500–3,000) or fat grafting (€3,500–8,000), once or twice.',
    bodyHtml: `
      <p>The ladder in euros: the recline test and a three-quarter photograph (free, the whole diagnosis) → weight settled and lost slowly, half an hour of facial exercise if you will do it, a retinoid and sunscreen (€10–30 a month, the skin over the hollow) → hyaluronic gel for the temple (€400–800) and the medial cheek (€600–1,600), reversible, a year or two → calcium hydroxylapatite for a firmer cheek (€800–2,000) → a poly-L-lactic acid course for the whole face (€1,500–3,000, two years) → fat grafting (€3,500–8,000, once or twice, permanent for what survives) → a facelift with fat grafting when the face is descended too (€10,000–22,000). Skin boosters, "volumising" creams and energy devices sit outside the ladder for this problem, and the last of them sometimes causes it.</p>
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
    intro: 'Fat pads that empty and slide, a skull that recedes, and body fat and hormones that decide the pace — and the recline test tells you whether your face has deflated or descended.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which volume loss do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: weight, the one exercise pilot, and the skin over the hollow',
    intro: 'The free half of the treatment, the only facial-exercise study that points the right way, and the creams that hydrate while claiming to volumise.',
    sections: home,
  },
  {
    id: 'inj',
    title: 'Injectables',
    intro: 'The best-evidenced volume work in aesthetics — the temple trial, the midface programme, the stimulator that beat hyaluronic acid — and the syringes that add nothing.',
    sections: inj,
  },
  {
    id: 'clinic',
    title: 'Fat grafting, surgery and the devices to avoid',
    intro: 'Your own fat and what survives of it, the combined operation for the face that has done both, and why a tightening device is the wrong purchase for a deflated face.',
    sections: clinic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The temple’s vessels, the gel that outlasts the folklore, the stimulators with no eraser, and fat’s rare catastrophe — stated in numbers.',
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
  temple: 'Temples',
  midface: 'Cheeks & midface',
  bone: 'Bone & orbit',
  global: 'Whole face',
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
