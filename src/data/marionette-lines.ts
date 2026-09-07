/**
 * Marionette lines (downturned mouth corners) guide — single source of truth
 * (problem template).
 *
 * Consumed by /marionette-lines. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: a marionette line is a trench between two fixed points —
 * the depressor anguli oris pulling the corner down from above, the
 * mandibular ligament pinning the skin to the jaw below — with the jowl
 * heaping into it from the side and the chin shrinking away underneath.
 * Three drivers, three tools: toxin quietens the puller, filler restores
 * the chin and prejowl the line hangs from and softens the trench, and only
 * surgery moves the corner measurably. The honest gap is that nothing here
 * has the strong evidence of the nasolabial fold: the marionette-specific
 * data are open-label, split-face and retrospective, and the 962-patient
 * review of "lifting the mouth corner" calls the objective evidence weak.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'corner' | 'line' | 'support' | 'descent' | 'skin' | 'general';

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
  'A marionette line runs between two fixed points: the depressor anguli oris muscle inserting into the skin at the mouth corner above, and the mandibular ligament pinning the skin to the jaw below. The jowl heaps into the trench from the side and the chin shrinks away underneath — three drivers, and no single tool touches all three.',
  'Say "e" hard and relax, then lie flat with a mirror. Corners that pull down with the muscle want toxin; a trench that softens lying down is descent and wants support and, at the far end, surgery; a line that runs into a notch at the jaw is a receding chin and wants chin and prejowl filler first.',
  'The evidence is honest but thinner than for the nasolabial fold: the marionette-specific filler study is open-label (70% responders at a month, 51% at six), the toxin data are small randomised and split-face trials plus expert consensus, and the 962-patient review of mouth-corner lifting finds high satisfaction with "no significant lifting effect" from filler and calls the objective evidence weak.',
  'What lifts the corner measurably is a few units of toxin in the depressor anguli oris (6–9 months on photographs) and, for a permanent change, a commissure lift that took corners from −3° to +3.6° in a 51-patient series at the price of a visible scar in about one in seventeen. Facelifts improve the line, and one 78-procedure series saw it recur at 6–12 months.',
  'The mouth punishes overdoing it: toxin that drifts into the depressor labii inferioris gives a lopsided smile for months, the facial and inferior labial arteries run under the line, and a line filled flat reads as a heavier jowl, not a lifted corner. Fill behind the line and the chin, leave a line, treat the muscle first.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-muscle',
    kind: 'Muscle',
    title: 'A muscle that pulls the corner down',
    blurb: 'The depressor anguli oris runs from the jaw to the mouth corner and its inner edge inserts into the skin at the top of the line; with age it wins the tug-of-war against the lifters, and the corner turns down at rest.',
  },
  {
    id: 'type-descent',
    kind: 'Descent',
    title: 'The jowl slides forward against an anchor',
    blurb: 'The mandibular ligament pins the skin to the jaw at the bottom of the line; cheek and jowl fat descend and heap against it, and the line is the trench between the sliding jowl and the anchored chin.',
  },
  {
    id: 'type-volume',
    kind: 'Bone & volume',
    title: 'The chin and jaw shrink underneath',
    blurb: 'The mandible resorbs, the prejowl notch appears, the deep fat under the muscle empties and a receding chin lengthens the line — the shelf it rests on gets smaller every decade.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'line-anatomy',
    category: 'concept',
    title: 'What a marionette line actually is',
    tldr: 'A static fold from the mouth corner toward the chin, defined by two fixed points — the depressor anguli oris inserting into the skin above and the mandibular ligament below — with the jowl heaping into the trench between them.',
    bodyHtml: `
      <p>The anatomists' name is the static labiomandibular fold: a groove from the corner of the mouth down toward the jaw, present without any expression. It has two fixed edges. At the top, the innermost fibres of the depressor anguli oris — the muscle that pulls the corner down — insert directly into the skin; at the bottom, the mandibular ligament pins the skin to the bone of the jaw. Between those two anchors the skin is free, and everything that descends in the lower face piles into the gap (<a href="https://www.tandfonline.com/doi/full/10.1080/09546634.2025.2452954" rel="noopener nofollow" target="_blank">anatomical review</a>; <a href="https://onlinelibrary.wiley.com/doi/10.1111/srt.13676" rel="noopener nofollow" target="_blank">why marionette lines appear</a>).</p>
      <p>The causes listed in the same reviews are the whole lower face at once: resorption of the mandible and maxilla, gravitational descent of the cheek and jowl fat, atrophy of the deep fat under the muscle, the tethering of the mandibular ligament, a muscle that grows relatively stronger as its opponents weaken, and skin that has lost recoil (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9944027/" rel="noopener nofollow" target="_blank">jowl anatomy reassessed</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3404279/" rel="noopener nofollow" target="_blank">Mendelson &amp; Wong</a>). That is why the puppet's line is the hardest lower-face problem to treat with one syringe.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'Who gets them, and why they read as sad',
    tldr: 'Downturned corners are called the earliest perioral sign of aging; the validated 0–4 scale was built on faces from 22 to 87 with a mean age of 51. The line itself is anatomy; the "perpetual frown" is what other people see.',
    bodyHtml: `
      <p>The facial-plastic literature calls the downturned corner the earliest sign of perioral aging, "creating the appearance of a perpetual frown and adding years" — which is why marionette lines bother people more than their depth would justify: the face reads as sad, tired or disapproving when it is neither (<a href="https://pubmed.ncbi.nlm.nih.gov/30943562/" rel="noopener nofollow" target="_blank">2019 review</a>). The validated photonumeric scale grades them from 0 (none) through corners that begin to point down with shallow lines (1) to inverted corners with deep furrows and sagging (4), and was built on 75 live subjects aged 22–87, mean 51 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10833177/" rel="noopener nofollow" target="_blank">scale validation</a>). Anatomy sets the starting point — the position of the modiolus, the knot of muscle at the corner, predisposes some faces and populations to earlier commissure droop (<a href="https://www.tandfonline.com/doi/full/10.1080/09546634.2025.2452954" rel="noopener nofollow" target="_blank">anatomical review</a>) — and weight loss, smoking and sun set the pace.</p>
    `,
  },
  {
    id: 'why-hard',
    category: 'concept',
    title: 'Why "lifting" the corner is mostly marketing',
    tldr: 'A review of 11 studies in 962 patients found filler gave 90–93% satisfaction with no measurable lift of the corner; toxin lifts the angle for 6–9 months; only surgery moves it durably, and objective evidence for all of it is weak. Fillers fill a trench; they do not raise a corner.',
    bodyHtml: `
      <p>The clearest statement comes from the systematic review of everything used to lift the mouth corner: 11 studies, 962 patients, 96% women. Filler studies reported 90–93% patient satisfaction and "no significant lifting effect on the oral commissures"; botulinum toxin produced a significant lift of the commissure angle on photographs lasting six to nine months; surgical excisions lifted effectively in 78.6% of patients in the largest series; and the authors concluded that surgery lifts better than anything non-surgical but that "objective evidence is weak" throughout (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9342679/" rel="noopener nofollow" target="_blank">systematic review</a>).</p>
      <p>That sorts the tools. Toxin quietens the muscle that pulls the corner down. Filler does not lift; it restores the chin and prejowl the line hangs from and fills the trench so the shadow softens. Threads and devices tighten a little for a while. Surgery — a facelift for the descended jowl, a commissure lift for the corner itself — is the only thing that moves tissue, and even there a 78-procedure deep-plane series documented the marionette lines recurring between 6 and 12 months (<a href="https://journals.lww.com/prsgo/fulltext/10.1097/gox.0000000000006897~critical-review-of-a-series-of-78-surgical-facial" rel="noopener nofollow" target="_blank">2025 series</a>). The plan that works treats the muscle, the support and the trench in that order, and does not promise a lifted corner from a syringe.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-muscle',
    category: 'context',
    title: 'The sad mouth (an overactive depressor)',
    tldr: 'Corners that turn down at rest and pull down further when you say "e" or grimace — the depressor anguli oris has won. A few units of toxin, placed exactly, lift the angle for months; nothing else touches this driver.',
    focus: 'corner',
    bodyHtml: `
      <p>Say "e" hard, or pull the corners of your mouth down as if disgusted, and feel the cord that stands up beside each corner running toward the jaw: that is the depressor anguli oris. If your corners already sit below the horizontal at rest and drop further with that movement, the muscle is the driver, and this is the one type with a specific fix — a small dose of toxin in the belly of the muscle lets the lifters win for three to six months, and the corner rises by a few degrees on photographs. Filler cannot do this; it makes the trench shallower and leaves the corner where it was. The mistake at this stage is a syringe under the corner "to lift it", which produces a lump beside a corner that still points down.</p>
    `,
  },
  {
    id: 'type-descent',
    category: 'context',
    title: 'The trench with a jowl above it (descent)',
    tldr: 'A line that deepens as the jowl leans into it and softens when you lie flat — cheek and jowl fat have slid down against the mandibular ligament. Support behind it, a little in it, and surgery for the jowl when it is a jowl problem.',
    focus: 'descent',
    bodyHtml: `
      <p>Lie flat with a hand mirror. If the line softens as the jowl falls back and deepens when you lean forward or look down at a phone, the driver is descent: the cheek and jowl fat have migrated down and forward and heap against the mandibular ligament, and the marionette line is the trench between the sliding jowl and the anchored chin (<a href="https://www.sciencedirect.com/science/article/abs/pii/S1010518216301068" rel="noopener nofollow" target="_blank">retaining ligaments</a>). This is the commonest type after fifty and the one with a jowl attached, so the plan runs through the <a href="/jowls">jowls guide</a>: prejowl and chin support to fill the notch the jowl falls into, a little gel in the trench, and, when the jowl is the problem, the operation that moves it. Threads hitch it for months; devices tighten it a fifth.</p>
    `,
  },
  {
    id: 'type-volume',
    category: 'context',
    title: 'The line that runs into a notch at the jaw (bone and volume)',
    tldr: 'A small or receded chin, a hollow in front of the jowl and a line that ends in it — the mandible has resorbed and the deep fat under the muscle has emptied. Chin and prejowl support is the first syringe, not the line.',
    focus: 'support',
    bodyHtml: `
      <p>Look at the jaw in profile and run a finger along its edge. A chin that sits behind the lower lip, a hollow in front of the jowl where the jawline dips — the prejowl sulcus — and a marionette line that runs down into that hollow mean the shelf has shrunk: the mandible resorbs with age, especially in front of the jowl, and the deep fat beneath the depressor anguli oris atrophies (<a href="https://pubmed.ncbi.nlm.nih.gov/20871486/" rel="noopener nofollow" target="_blank">prejowl notch</a>). Filling the line alone here leaves a shadow that returns in months; rebuilding the chin and the prejowl with a firm gel, or permanently with an implant or genioplasty, gives the line something to rest on and shortens it. It is also where the dentist belongs: a collapsed bite or lost lower teeth resorb the same bone.</p>
    `,
  },
  {
    id: 'type-skin',
    category: 'context',
    title: 'The fine line in thin skin',
    tldr: 'A shallow etched line without sagging or a downturned corner, in thin or sun-damaged skin — the skin has lost recoil. Retinoids, a soft superficial gel and resurfacing; deep filler and toxin are wasted here.',
    focus: 'skin',
    bodyHtml: `
      <p>Pinch the skin beside the line. If it is thin, tents slowly and carries a fine crease rather than a trench, and the corners are level and the jowl is absent, the skin is the driver. This type belongs to the wrinkle toolkit — a retinoid, sunscreen, a low-viscosity gel threaded superficially along the crease, fractional resurfacing for the etched line — and responds badly to deep volume, which shows as a ridge under thin skin. Our <a href="/wrinkles">wrinkles guide</a> grades the skin tools in detail.</p>
    `,
  },
  {
    id: 'commissure-groove',
    category: 'context',
    title: 'The corner itself (the commissure groove and the downturn)',
    tldr: 'A short groove and a fold of skin at the corner of the mouth, distinct from the long line below it — the modiolus has dropped. Toxin lifts the angle; a drop of filler supports the corner; a commissure lift is the surgery.',
    focus: 'corner',
    bodyHtml: `
      <p>Some people's complaint is not the line but the corner: a downturned commissure with a small groove and a hood of skin folding over it, which reads as a frown from across a room. The facial-plastic literature treats it separately — the modiolus, the muscular knot at the corner, has dropped, and the fix is a lift of the corner itself rather than a filled trench (<a href="https://pubmed.ncbi.nlm.nih.gov/18005887/" rel="noopener nofollow" target="_blank">Perkins 2007</a>; <a href="https://jddonline.com/articles/the-happy-face-treatment-an-anatomical-based-technique-for-the-correction-of-marionette-lines-and-th-S1545961618P1226X" rel="noopener nofollow" target="_blank">"happy face" technique</a>). Toxin in the depressor lifts the angle for months; a small amount of gel under the corner and along the groove supports it; and the commissure lift, a tiny excision above the corner, is the only thing that changes the angle permanently — at the price of a scar on the face.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'The "e" test, the recline test and the profile',
    tldr: 'Say "e" and grimace: corners that drop are muscle. Lie flat: a trench that softens is descent. Look in profile: a small chin and a notch at the jaw are bone. Check your smile for symmetry before any toxin, and photograph from the front and at three-quarters.',
    bodyHtml: `
      <p>Three tests in a minute. Pull the corners down hard as if disgusted and relax: if the resting corner sits low and drops further with the movement, the depressor is the driver. Lie flat with a hand mirror: a trench that softens as the jowl falls back is descent; one that stays is volume or bone. Look in profile and run a finger along the jaw: a chin behind the lower lip and a dip in front of the jowl mean the shelf has shrunk. Then two things before anyone injects. Smile widely and check the two sides match — an existing asymmetry has to be known before toxin, which can unmask it — and photograph from the front and at three-quarters in one light, at rest and smiling, because the line changes with posture, weight and the angle of the camera.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-spf-quit',
    category: 'home',
    title: 'Sunscreen and not smoking',
    tldr: 'The skin component only: daily sunscreen cut measured skin aging by 24% in the one randomised prevention trial, and the smoking twin has the more descended lower face. Neither touches the muscle, the jowl or the bone.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: everyone — the only prevention with any trial behind it',
    sessions: 'Every morning',
    downtime: 'None',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>Sun and smoke thin the dermis and rob it of recoil, which is the skin's share of a marionette line. Daily sunscreen users in the Nambour trial showed no detectable increase in skin aging over 4.5 years, 24% less than discretionary users (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>), and among identical twins discordant for smoking the smoker scored worse for jowls and lower-face lines (<a href="https://pubmed.ncbi.nlm.nih.gov/23924651/" rel="noopener nofollow" target="_blank">twin study</a>). Moderate rather than strong because no trial has measured the line itself, and because the drivers that make it deep — the muscle, the descent and the bone — are not skin.</p>
    `,
  },
  {
    id: 'home-retinoid',
    category: 'home',
    title: 'A retinoid along the line',
    tldr: 'Eight randomised tretinoin trials show fewer fine and coarse wrinkles; along a marionette line it softens the etched crease in thin skin and nothing more.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: 'Nightly, indefinitely',
    downtime: 'Weeks of dryness',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>Tretinoin rebuilds upper-dermal collagen, and the meta-analysis of eight randomised trials in 1,361 patients found significant improvement in fine and coarse wrinkles over vehicle (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/" rel="noopener nofollow" target="_blank">meta-analysis</a>). No trial has measured a marionette line, and the mechanism reaches only the crease printed into thin skin — emerging for this problem despite strong evidence for wrinkles in general. The skin at the corner is thin and easily irritated; start slowly. The <a href="/wrinkles">wrinkles guide</a> covers the retinoid ladder.</p>
    `,
  },
  {
    id: 'home-weight',
    category: 'home',
    title: 'Weight stability rather than rapid loss',
    tldr: 'Lower-face fat leaves with body weight and the marionette line deepens with it; faces after bariatric-scale loss were judged about five years older with deepened folds and descent. Lose slowly, and budget for chin and prejowl volume afterwards.',
    evidence: 'emerging',
    focus: 'support',
    sessions: 'Ongoing',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Deep facial fat goes with body fat, and the lower face notices: imaging shows people who lost more than 10% of body weight after 45 with marked accentuation of their folds and mandibular laxity (<a href="https://www.plasticsurgery.org/news/press-releases/how-fat-loss-accelerates-facial-aging" rel="noopener nofollow" target="_blank">ASPS</a>), and after massive weight loss blinded raters judged faces about five years older, with deepened folds, midface descent and neck laxity (<a href="https://academic.oup.com/asjopenforum/article/doi/10.1093/asjof/ojae069/7739023" rel="noopener nofollow" target="_blank">systematic review</a>). Nobody should keep weight for a line; the practical answer, for anyone on a weight-loss medication, is slow loss and a budget for chin and prejowl support at the end of it.</p>
    `,
  },
  {
    id: 'home-sleep',
    category: 'home',
    title: 'Sleeping on your back',
    tldr: 'Side and stomach sleeping compress and shear the cheek and jowl against the pillow for hours; sleep wrinkles have their own distribution around the mouth. Plausible, observational, free, and hard to enforce on a sleeping person.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: 'Every night',
    downtime: 'None',
    cost: 'Free (€30–80 for a contoured pillow)',
    bodyHtml: `
      <p>A cheek and jowl pressed into a pillow experience compression, shear and tension for a third of the night, and the review that named "sleep wrinkles" traces lines around the mouth and cheek that follow that distortion rather than any expression, worsening as skin loses elasticity (<a href="https://pubmed.ncbi.nlm.nih.gov/27329660/" rel="noopener nofollow" target="_blank">Anson 2016</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/22506801/" rel="noopener nofollow" target="_blank">2012 study</a>). No trial has randomised sleep position, and the muscle, jowl and bone are untouched by it; a contoured pillow is a cheap experiment, not a treatment.</p>
    `,
  },
  {
    id: 'home-facial-exercise',
    category: 'home',
    title: 'Facial exercise and "mouth corner lifts"',
    tldr: 'The one facial-exercise pilot found fuller cheeks in 16 women with no control group and no lower-face line measured; exercises that work the corner train the muscle that pulls it down. Harmless for the cheeks, backwards for the corner.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'Do not, for the corners',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>The 20-week facial-exercise pilot in 16 women found blinded raters judging upper and lower cheeks fuller, with no control group and no measurement of any lower-face line (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/2666801" rel="noopener nofollow" target="_blank">Alam 2018</a>). For the marionette line the logic runs the wrong way: the best-evidenced treatment on this page works by weakening the depressor anguli oris, and "corner lift" exercises that grimace and purse strengthen it and every muscle around it. Cheek exercises for cheek fullness if you like; nothing for the corner.</p>
    `,
  },
  {
    id: 'home-gadgets',
    category: 'home',
    title: 'Gua sha, rollers, microcurrent and "lifting" masks',
    tldr: 'Massage moves fluid for an hour; microcurrent devices have no controlled trial on the lower face; nothing handheld quietens a muscle, moves a jowl or rebuilds a jaw.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'As desired',
    downtime: 'None',
    cost: '€15–400',
    bodyHtml: `
      <p>The consumer "lifting" shelf is drainage and sensation: gua sha and rollers move lymph and leave the jawline briefly crisper, microcurrent devices claim to tone the lifters and have no controlled trial on marionette lines, sheet masks hydrate the crease for an evening. None reaches the depressor anguli oris, the jowl fat or the mandible. Fine as ritual; not a line on the plan.</p>
    `,
  },
];

const inj: Section[] = [
  {
    id: 'inj-dao-toxin',
    category: 'inj',
    title: 'Botulinum toxin in the depressor anguli oris',
    tldr: 'A few units — the consensus mean is 5.6 U in total — quieten the muscle pulling the corner down; a 2026 double-blind randomised trial found the lower injection site lifted the commissure more, and the systematic review measured a significant lift lasting 6–9 months. The one treatment that changes the angle without a scalpel.',
    evidence: 'moderate',
    focus: 'corner',
    note: 'Best for: the sad mouth — the corner that drops with the "e" test — and as the first step before any filler',
    sessions: 'Every 3–6 months',
    downtime: 'None',
    cost: '€150–300',
    bodyHtml: `
      <p>Weakening the depressor anguli oris lets the lip elevators win and the corner rises a few degrees for the life of the toxin. The evidence is small and consistent: a two-stage, prospective, double-blind randomised trial measured commissure position by three-dimensional photogrammetry and found both injection sites lifted the corner at every time point, the lower site more than the upper, and toxin in the muscle plus the platysma more still at one and six months, with no severe adverse events (<a href="https://pubmed.ncbi.nlm.nih.gov/42554701/" rel="noopener nofollow" target="_blank">PRS, 2026</a>); the systematic review of mouth-corner lifting recorded a significant photographic lift of the commissure angle persisting six to nine months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9342679/" rel="noopener nofollow" target="_blank">systematic review</a>); and the Italian and international consensus panels converge on a mean total dose of 5.6 U at a single intramuscular point per side, midway between the muscle's origin on the jaw and the corner, slightly lateral to the line (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13517480/" rel="noopener nofollow" target="_blank">consensus</a>). Ultrasound mapping has since shown how often the muscle sits away from where injectors assume, which is the argument for a clinician who treats this muscle weekly (<a href="https://academic.oup.com/asj/article/44/9/NP661/7633282" rel="noopener nofollow" target="_blank">ultrasound study</a>). Moderate rather than strong because the trials are small and no large placebo-controlled marionette-line programme exists.</p>
      <p>Two to three units a side, one point, lateral to the line, never medial where the lower-lip depressor lies — see the safety row. Effect at a week, peak at two, three to six months; the first treatment is a trial of your own anatomy.</p>
    `,
  },
  {
    id: 'inj-ha-line',
    category: 'inj',
    title: 'Hyaluronic-acid filler along the line',
    tldr: 'The marionette-specific study is open-label: 83 adults, about 0.7 ml a side, 70% at least one grade better at a month, 58% at three, 51% at six, declining to a year. It fills the trench and softens the shadow; it does not lift the corner.',
    evidence: 'moderate',
    focus: 'line',
    note: 'Best for: the trench itself, after the muscle is treated and the chin and prejowl are supported',
    sessions: 'Every 6–12 months',
    downtime: '2–5 days of swelling; bruising',
    cost: '€300–650 per syringe (UK £250–635)',
    bodyHtml: `
      <p>Filler in the marionette line is placed in the deep dermis and the fat under the trench, from the corner down toward the jaw, to lift the floor of the groove and soften its shadow. The class evidence borrowed from the nasolabial fold is the deepest in aesthetics (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8481177/" rel="noopener nofollow" target="_blank">51-trial meta-analysis</a>), but the marionette-specific evidence is one study: a 12-month prospective open-label post-marketing trial of a mid-viscosity gel in 83 adults (mean age 59, 95% women), averaging 0.73 ml per side plus an optional 0.35 ml touch-up, in which 69.9% were at least one grade better on the validated marionette scale at one month, 58.2% at three and 51.3% at six, declining through month 12, with 98.8% rated improved by investigators at a month and 50% at a year; injection-site reactions were mild and settled within eight days (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845915/" rel="noopener nofollow" target="_blank">open-label study</a>). No randomised marionette-line trial exists, which keeps a strong class at moderate here.</p>
      <p>The mouth-corner review's finding is the one to remember: filler gives 90–93% satisfaction and no measurable lift of the corner (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9342679/" rel="noopener nofollow" target="_blank">systematic review</a>). Fill the trench, leave a line, treat the muscle first, and support the chin before adding more gel to a groove that keeps returning. The <a href="/fillers">filler guide</a> covers products and the reversal drug.</p>
    `,
  },
  {
    id: 'inj-combo',
    category: 'inj',
    title: 'Toxin plus filler together',
    tldr: 'A 22-patient split-face randomised trial: toxin plus hyaluronic acid on one side beat filler alone on the other at two weeks and a month, and the combined side took a median 6.5 weeks longer to return to baseline. The way the lower face is actually treated.',
    evidence: 'moderate',
    focus: 'line',
    note: 'Best for: a downturned corner with a trench — the majority of marionette lines after fifty',
    sessions: 'Toxin every 3–6 months; filler every 6–12',
    downtime: 'By component',
    cost: '€450–900 per round',
    bodyHtml: `
      <p>Because the muscle deepens the trench every time it fires, quietening it protects the gel. In a randomised, blinded, split-face trial, 22 patients had hyaluronic acid plus onabotulinumtoxinA on one melomental fold and hyaluronic acid plus placebo on the other: the combination side showed significantly greater improvement on physician photographic analysis at two weeks and one month, patients rated it better at a month, and the median return to baseline came 6.5 weeks later than with filler alone (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1524-4725.2010.01741.x" rel="noopener nofollow" target="_blank">Custis 2010</a>). A larger multicentre randomised study of toxin and hyaluronic filler, alone and combined, for lower-face rejuvenation reached the same conclusion (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1524-4725.2010.01705.x" rel="noopener nofollow" target="_blank">Carruthers 2010</a>), and the same synergy showed with threads in a 32-patient comparison. Toxin first, gel two weeks later once the corner has settled.</p>
    `,
  },
  {
    id: 'inj-chin-prejowl',
    category: 'inj',
    title: 'Chin and prejowl support first',
    tldr: 'Two randomised controlled trials: chin filler corrected retrusion in 56% versus 28% of untreated controls at six months (192 adults), and jawline filler deepened the prejowl by 4.6 mm against 2.5 mm in controls with marionette-line satisfaction up 33 points (206 adults). The shelf the line hangs from.',
    evidence: 'moderate',
    focus: 'support',
    note: 'Best for: the receded chin and the notch at the jaw — the first syringe for the bone-and-volume type',
    sessions: 'Every 12–24 months',
    downtime: '3–7 days of swelling; firmness for weeks',
    cost: '€600–1,600 (2–4 ml; UK £200–400 per ml)',
    bodyHtml: `
      <p>Rebuilding the chin and the prejowl gives the marionette line a floor and a shorter course, and both have regulator-grade trials with the line as a secondary outcome. In the chin trial, 192 adults with chin retrusion were randomised three to one to a firm hyaluronic gel or six months of no treatment: 56.3% of treated participants improved at least one grade on the chin-retrusion scale at six months against 27.5% of controls, with one serious event, a cellulitis that resolved (<a href="https://pubmed.ncbi.nlm.nih.gov/33347003/" rel="noopener nofollow" target="_blank">chin RCT</a>; <a href="https://academic.oup.com/asj/article/44/5/527/7421096" rel="noopener nofollow" target="_blank">live-assessment analysis</a>); a second multicentre chin trial reached the same result (<a href="https://pubmed.ncbi.nlm.nih.gov/39542893/" rel="noopener nofollow" target="_blank">2024 RCT</a>). In the jawline trial, 206 adults (mean age 59, 73% with severe definition loss) were randomised to a jawline gel or no treatment: prejowl linear depth improved by 4.6 mm against 2.5 mm in controls at six months, and satisfaction with the marionette lines rose 32.6 points on the FACE-Q, with 68% still satisfied at a year; tenderness and lumps in about four in five, settling within two weeks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11634383/" rel="noopener nofollow" target="_blank">jawline RCT</a>). A surgeon's chin implant or genioplasty does the same job permanently for a genuinely receded chin.</p>
      <p>Moderate rather than strong because the marionette line is the secondary outcome in both. It is nevertheless the syringe that decides whether the line syringe works. The <a href="/jowls">jowls guide</a> grades the jawline products.</p>
    `,
  },
  {
    id: 'inj-caha',
    category: 'inj',
    title: 'Calcium hydroxylapatite, hyperdilute or as a filler',
    tldr: 'A retrospective series of 22 patients given two sessions of diluted calcium hydroxylapatite across the mid and lower face measured marionette-line depth 27% shallower at day 150, with severe lines falling from 41% to 11% of patients; the class has randomised fold trials, the marionette use does not.',
    evidence: 'emerging',
    focus: 'support',
    sessions: '2 sessions a month apart; repeat yearly',
    downtime: '2–5 days',
    cost: '€700–1,200 for two sessions',
    bodyHtml: `
      <p>Calcium hydroxylapatite is used two ways here: undiluted as a firm filler on the chin and prejowl bone, and diluted one-to-three or more and fanned through the lower-face fat and dermis as a collagen stimulator. The marionette data are retrospective: 22 patients (mean age 52) had two sessions of 1:3-diluted calcium hydroxylapatite four weeks apart across the mid and lower face, and 3D imaging at day 150 measured jowl volume 41% lower, nasolabial-fold depth 28% shallower and marionette-line depth 27% shallower, with the share of patients graded severe for marionette lines falling from 40.9% to 11.4% and 86% satisfied or extremely satisfied; one patient had swelling treated with steroids (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12686807/" rel="noopener nofollow" target="_blank">retrospective series</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11903391/" rel="noopener nofollow" target="_blank">panfacial series</a>). The randomised evidence belongs to the nasolabial fold (<a href="https://pubmed.ncbi.nlm.nih.gov/18093199/" rel="noopener nofollow" target="_blank">split-face RCT</a>); for the marionette line it is a series without controls, hence emerging. No reversal, and too firm for the thin skin of the line itself. The <a href="/regenerative-aesthetics">regenerative guide</a> covers the biostimulators.</p>
    `,
  },
  {
    id: 'inj-plla',
    category: 'inj',
    title: 'Poly-L-lactic acid for the lower face',
    tldr: 'A randomised double-blind trial of PLLA microspheres in the nasolabial fold found durability toward two years; for the marionette line and prejowl it is used off the fold evidence, slowly, with no marionette-specific trial.',
    evidence: 'emerging',
    focus: 'support',
    sessions: '2–3 sessions a month apart; repeat every 2 years',
    downtime: '2–3 days; five days of massage',
    cost: '€500–800 per vial, usually 2–3',
    bodyHtml: `
      <p>Poly-L-lactic acid provokes collagen over months rather than filling at once, and its lower-face use is to rebuild the prejowl and the fat beneath the marionette line gradually. The evidence is borrowed: a 252-person multicentre double-blind randomised trial of PLLA microspheres in the nasolabial fold with effects toward two years (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12903950/" rel="noopener nofollow" target="_blank">2024 RCT</a>) and the collagen-stimulator reviews (<a href="https://pubmed.ncbi.nlm.nih.gov/26505542/" rel="noopener nofollow" target="_blank">review</a>); no trial has used the marionette line as its endpoint. Slow, long, operator-dependent, nodules if placed superficially, nothing to dissolve. The <a href="/regenerative-aesthetics">regenerative guide</a> grades the class.</p>
    `,
  },
  {
    id: 'inj-fat',
    category: 'inj',
    title: 'Autologous fat grafting',
    tldr: 'Counted among the indirect surgical options in the mouth-corner review; fat to the chin, prejowl and under the line replaces what emptied, with variable survival and a donor site. Usually done with a facelift, rarely for the line alone.',
    evidence: 'emerging',
    focus: 'support',
    sessions: 'Once, sometimes twice',
    downtime: '1–2 weeks of swelling',
    cost: '€2,500–5,000',
    bodyHtml: `
      <p>Fat harvested from the abdomen or thigh and placed along the jawline, the prejowl and beneath the marionette line restores the deep fat that atrophied under the muscle, with tissue that behaves like the tissue around it. The mouth-corner systematic review lists fat grafting among the indirect surgical approaches, none with controlled data for the corner (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9342679/" rel="noopener nofollow" target="_blank">systematic review</a>), and the fat-grafting reviews describe the jawline as a routine site (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7023965/" rel="noopener nofollow" target="_blank">review</a>). An operation with a donor site, a variable fraction surviving, no reversal, and a result that follows body weight; best combined with a facelift for the descended type.</p>
    `,
  },
  {
    id: 'inj-threads',
    category: 'inj',
    title: 'Thread lifts (PDO and barbed threads)',
    tldr: 'A marionette-line thread study scored lines from 3.3 to 1.7 immediately after, a 31-procedure series called 87% satisfactory, and threads plus a collagen stimulator satisfied 74–86% of 50 patients at 6–12 months; a systematic review calls the technique scarcely studied. Months, with dimpling.',
    evidence: 'emerging',
    focus: 'descent',
    sessions: 'Every 12–18 months',
    downtime: '3–7 days; dimpling for weeks',
    cost: '€800–2,000',
    bodyHtml: `
      <p>Barbed absorbable threads passed under the jowl and anchored above catch the tissue that heaps into the line and hitch it upward for a few months, leaving a little collagen behind. The marionette-specific data are small and short: an absorbable-thread study graded lines 3.30 before and 1.70 immediately after treatment (<a href="https://doi.org/10.9734/jammr/2021/v33i830886" rel="noopener nofollow" target="_blank">thread study</a>); a retrospective review of 31 knotless PDO procedures over two years found 87% satisfactory with minor complications (<a href="https://pubmed.ncbi.nlm.nih.gov/25993611/" rel="noopener nofollow" target="_blank">2015 series</a>); 50 patients given barbed threads plus a polycaprolactone stimulator for the jawline and marionette lines were 74% satisfied at six months and 86% at twelve while surgeon satisfaction fell from 96% to 86% (<a href="https://pubmed.ncbi.nlm.nih.gov/35506203/" rel="noopener nofollow" target="_blank">2022 study</a>); technique papers describe threads run against the line's vector or laid perpendicular to it as volumisers (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626346/" rel="noopener nofollow" target="_blank">technique paper</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626340/" rel="noopener nofollow" target="_blank">volumising threads</a>). The systematic review of PDO threads calls the technique scarcely studied (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15709" rel="noopener nofollow" target="_blank">systematic review</a>), and the meta-analysis of thread lifting finds effects fading within a year (<a href="https://dpcj.org/index.php/dpc/article/view/5172" rel="noopener nofollow" target="_blank">meta-analysis</a>). For mild descent in someone who will not have surgery; the <a href="/jowls">jowls guide</a> grades threads for the lower face.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-facelift',
    category: 'clinic',
    title: 'Facelift (deep plane and extended deep plane)',
    tldr: 'For the descended jowl, the only treatment that repositions tissue: in a 70-patient prospective cohort the extended deep-plane lift beat the standard one for marionette lines at nine months; a 78-procedure series saw the lines recur at 6–12 months. Have it for the jowls and neck.',
    evidence: 'moderate',
    focus: 'descent',
    note: 'Best for: a heavy jowl and a lax neck with the marionette line as part of the picture — never for the line alone',
    sessions: 'Once; 10–15 years',
    downtime: '2–3 weeks; final at 6–12 months',
    cost: '€8,000–20,000 (UK £8,000–15,000)',
    bodyHtml: `
      <p>A deep-plane facelift releases the mandibular and labiomandibular ligaments and lifts the skin and SMAS as one unit, so the jowl fat that heaps into the marionette line is moved back up the face. The comparative evidence is recent: a prospective cohort of 70 patients (96% women, mean age 52–55) compared the deep-plane with the extended deep-plane lift on standardised photographs read by blinded surgeons at nine months, and both improved the lower face, with the extended version superior for marionette lines, jowls and neck laxity and no permanent nerve injuries (<a href="https://pubmed.ncbi.nlm.nih.gov/41348089/" rel="noopener nofollow" target="_blank">ASJ, 2026</a>). The sobering counterweight is a critical review of 78 deep-plane procedures followed up to two years, which documented early recurrence of nasolabial ptosis, jowls, marionette lines and neck laxity between 6 and 12 months in all cases and argued for narrower indications (<a href="https://journals.lww.com/prsgo/fulltext/10.1097/gox.0000000000006897~critical-review-of-a-series-of-78-surgical-facial" rel="noopener nofollow" target="_blank">2025 series</a>); the deep-plane-versus-SMAS meta-analysis finds the two comparable overall (<a href="https://link.springer.com/article/10.1007/s00266-025-05118-x" rel="noopener nofollow" target="_blank">meta-analysis</a>). The <a href="/jowls">jowls guide</a> and the <a href="/anti-aging-50s">50s guide</a> grade the surgery; a chin implant and fat grafting at the same operation are how surgeons address the volume half.</p>
    `,
  },
  {
    id: 'clinic-commissure-lift',
    category: 'clinic',
    title: 'Corner-of-the-mouth (commissure) lift',
    tldr: 'A small excision of skin above the corner that turns it up: in a 51-patient series the commissure angle went from about −3° to +3.5° with 25 months of follow-up, with visible scarring in three patients and one asymmetry. Permanent, precise, and a scar on the face.',
    evidence: 'emerging',
    focus: 'corner',
    sessions: 'Once',
    downtime: '1–2 weeks; scar matures over months',
    cost: '€2,000–4,000',
    bodyHtml: `
      <p>The commissure lift excises a small lens or triangle of skin just above and lateral to the corner of the mouth and closes it so the corner is pulled upward, with the scar hidden in the new corner line. The largest single series followed 51 patients (mean age 47) for a mean of 25 months: right and left commissure angles measured −3.1° and −3.4° before surgery and +3.6° and +3.3° after, with one undercorrection, one asymmetry and visible scarring in three (<a href="https://link.springer.com/article/10.1007/s00266-021-02393-2" rel="noopener nofollow" target="_blank">retrospective series</a>); the systematic review pools the surgical techniques at an effective lift in 78.6% of patients in the largest study, 70–88% satisfaction, mild complications in 14% and obvious scars in 3.8%, and concludes that surgery lifts better than anything non-surgical while the evidence remains weak (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9342679/" rel="noopener nofollow" target="_blank">systematic review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/18005887/" rel="noopener nofollow" target="_blank">Perkins 2007</a>). The only permanent answer to a downturned corner; a scar in the most looked-at part of the face is the price, and it is done by a handful of surgeons who do it often.</p>
    `,
  },
  {
    id: 'clinic-hifu',
    category: 'clinic',
    title: 'Microfocused ultrasound (Ultherapy and successors)',
    tldr: 'A 20-patient vectoring pilot found extra passes aimed vertically increased marionette-line tightening, with blinded improvement in 43% at a year; the class lifts by millimetres in meta-analysis. Softening for mild descent, not a repositioned jowl.',
    evidence: 'emerging',
    focus: 'descent',
    sessions: 'Once a year',
    downtime: 'None; days of tenderness',
    cost: '€1,000–3,000',
    bodyHtml: `
      <p>Focused ultrasound heats points in the SMAS and deep dermis to contract them, and the marionette fold is one of the places operators concentrate passes. A prospective open-label pilot of 20 patients (mean age 47) using vertical vectoring reported statistically significant increases in marionette-line tightening with the added vectors and dual depths, with 90–100% of patients and physicians reporting global improvement and blinded raters seeing improvement in 43% of evaluable subjects at one year (<a href="https://jcadonline.com/long-term-efficacy-of-micro-focused-ultrasound-with-visualization-for-lifting-and-tightening-lax-facial-and-neck-skin-using-a-customized-vectoring-treatment-method/" rel="noopener nofollow" target="_blank">vectoring pilot</a>); the systematic reviews and meta-analyses of the class find consistent but modest lifting (<a href="https://academic.oup.com/asj/article/45/3/NP86/7900203" rel="noopener nofollow" target="_blank">MFU-V meta-analysis</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32026164/" rel="noopener nofollow" target="_blank">HIFU meta-analysis</a>). Mild descent in someone avoiding surgery; it does nothing to the muscle or the bone, and it can melt fat a deflated lower face cannot spare. The <a href="/jowls">jowls guide</a> grades the devices.</p>
    `,
  },
  {
    id: 'clinic-rf',
    category: 'clinic',
    title: 'Monopolar and microneedle radiofrequency',
    tldr: 'Randomised and pilot data show measurable lower-face tightening with modern monopolar devices; no study has used the marionette line as its endpoint. Skin tightening over a trench, not a moved jowl.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '1–4, repeated yearly',
    downtime: 'None to a few days',
    cost: '€1,000–2,500',
    bodyHtml: `
      <p>Radiofrequency heats the deep dermis and the fibrous septa to contract them. The lower-face evidence is real — a prospective randomised controlled study of a modern monopolar device found long-term skin tightening (<a href="https://pubmed.ncbi.nlm.nih.gov/39957006/" rel="noopener nofollow" target="_blank">2025 RCT</a>), the original Thermage study measured nasolabial improvement after two treatments (<a href="https://pubmed.ncbi.nlm.nih.gov/15545529/" rel="noopener nofollow" target="_blank">2004 study</a>), and bimodal systems report lower-face fold reductions over six months (<a href="https://pubmed.ncbi.nlm.nih.gov/42187039/" rel="noopener nofollow" target="_blank">2026 study</a>) — but none of it measured a marionette line, and microneedle radiofrequency carries a regulator's alert on burns and scars (<a href="https://www.dermatologytimes.com/view/fda-alerts-clinicians-to-serious-complications-with-radiofrequency-microneedling-devices" rel="noopener nofollow" target="_blank">FDA alert</a>). For the skin type with mild laxity; the <a href="/jowls">jowls guide</a> grades the devices.</p>
    `,
  },
  {
    id: 'clinic-laser',
    category: 'clinic',
    title: 'Fractional and ablative resurfacing along the line',
    tldr: 'Resurfacing rebuilds skin and softens the etched crease in the skin type; it does not quieten a muscle, move a jowl or rebuild a chin. No marionette-specific trial.',
    evidence: 'limited',
    focus: 'skin',
    sessions: '1–3',
    downtime: '5–14 days by depth',
    cost: '€400–2,000',
    bodyHtml: `
      <p>Fractional and full-field lasers remodel the dermis and are the right tool for a fine line printed into thin skin at the corner; they have no purchase on the depressor, the jowl or the mandible, and no trial has used the marionette line as an endpoint. Limited for this problem on that basis — the <a href="/wrinkles">wrinkles guide</a> and the <a href="/laser-ipl">laser guide</a> grade them for what they do.</p>
    `,
  },
  {
    id: 'clinic-dental',
    category: 'clinic',
    title: 'Restoring the support underneath (teeth, bite, the mandible)',
    tldr: 'Loss of lower teeth resorbs the jaw the line rests on and a collapsed bite shortens the lower face, deepening the trench; prosthodontists rebuild the vertical dimension for exactly this. Emerging because nobody has randomised a denture against a syringe.',
    evidence: 'emerging',
    focus: 'support',
    sessions: 'Dental assessment',
    downtime: 'By procedure',
    cost: 'Varies widely',
    bodyHtml: `
      <p>The bottom of the marionette line is pinned to the mandible, and the mandible follows the teeth. Losing teeth starts irreversible resorption of the alveolar ridge — about half its width in the first year — and worn or missing lower teeth collapse the bite, shortening the lower face so the corners drop and the trench deepens; prosthodontists rebuild that vertical dimension with dentures and implants (<a href="https://www.oralhealthgroup.com/features/implants-and-prosthetic-restorations-clinical-considerations/" rel="noopener nofollow" target="_blank">prosthodontic review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/15850992/" rel="noopener nofollow" target="_blank">bone loss and teeth</a>). For anyone with missing lower teeth, worn dentures or a collapsed bite, the dentist's assessment comes before the injector's; chin and prejowl filler bridges the two.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-dao-toxin',
    category: 'safety',
    title: 'Toxin at the mouth corner: the lopsided smile',
    tldr: 'Toxin that drifts medially into the depressor labii inferioris weakens one side of the lower lip — an asymmetric smile, difficulty showing the lower teeth, dribbling from a cup — for as long as the toxin lasts. One point, lateral to the line, 2–3 units a side; a unit or two on the other side rebalances.',
    bodyHtml: `
      <p>The depressor anguli oris is interwoven with the depressor labii inferioris, the muscle that pulls the lower lip down and out to show the lower teeth, and the two sit a few millimetres apart. Toxin that diffuses medially paralyses the lip depressor on that side: an asymmetric smile with one side of the lower lip failing to descend, difficulty with a cup or a straw, and in the reported cases a lower lip that hangs or over-pulls on the unaffected side for months (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.13869" rel="noopener nofollow" target="_blank">case report</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11626216/" rel="noopener nofollow" target="_blank">lip-depressor palsy</a>). The consensus panels' answer is a single intramuscular point per side, midway between the jaw and the corner and slightly lateral to the line, a mean total of 5.6 U, and 1–2 U on the opposite side if a smile comes out uneven (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13517480/" rel="noopener nofollow" target="_blank">consensus</a>); ultrasound shows the muscle often sits away from the textbook point (<a href="https://academic.oup.com/asj/article/44/9/NP661/7633282" rel="noopener nofollow" target="_blank">ultrasound study</a>). Toxin that reaches the orbicularis gives a weak seal and a hanging corner. Check your smile for symmetry beforehand, start low, review at two weeks, and take an existing asymmetry to someone who treats this muscle weekly.</p>
    `,
  },
  {
    id: 'safety-filler-lower-face',
    category: 'safety',
    title: 'Filler in the lower face: arteries, the mental nerve, lumps',
    tldr: 'The facial artery crosses the jaw just in front of the masseter and the inferior labial artery runs under the corner; the mental nerve exits below the premolars. Occlusion is rare (about 1 in 6,400 needle syringes, six times rarer by cannula) and 84% of hyaluronic-acid occlusions recover with prompt hyaluronidase; lumps in the thin skin of the line are common.',
    bodyHtml: `
      <p>The lower face has two arteries the injector must respect: the facial artery, which crosses the mandibular border in front of the masseter and runs up toward the corner of the mouth, and the inferior labial artery beneath the corner and the lower lip; the mental nerve emerges from the jaw below the premolars and supplies feeling to the chin and lower lip (<a href="https://www.tandfonline.com/doi/full/10.1080/09546634.2025.2452954" rel="noopener nofollow" target="_blank">anatomical review</a>). Registry analysis puts vascular occlusion at about 1 in 6,410 needle syringes and 1 in 40,882 by cannula (<a href="https://www.harleyacademy.com/aesthetic-medicine-articles/cannula-use-makes-vascular-occlusion-less-likely/" rel="noopener nofollow" target="_blank">registry analysis</a>), the facial artery is the vessel involved in most filler ischaemia (<a href="https://journals.lww.com/plasreconsurg/fulltext/2023/04000/patterns_of_filler_induced_facial_skin_ischemia__a.15.aspx" rel="noopener nofollow" target="_blank">PRS, 2023</a>), and 84% of pooled hyaluronic-acid occlusions recover with prompt hyaluronidase, delay beyond days predicting permanent damage (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12097758/" rel="noopener nofollow" target="_blank">pooled analysis</a>). The routine harms are lumps and firmness in the thin skin of the line — four in five patients in the jawline trial had tenderness and lumps that settled within two weeks — and delayed nodules in 0.02–4% after any filler (<a href="https://jcadonline.com/cmac-delayed-onset-nodules/" rel="noopener nofollow" target="_blank">review</a>). Blanching, mottling or pain out of proportion in the hours afterward is an emergency that afternoon. The <a href="/fillers">filler guide</a> covers the protocol.</p>
    `,
  },
  {
    id: 'safety-overfill',
    category: 'safety',
    title: 'The filled-flat line and the heavy lower face',
    tldr: 'A marionette line filled flat reads as a heavier jowl and a squared, "pillow" lower face, and hyaluronic gel persists for years on MRI so annual top-ups accumulate. Treat the muscle, support the chin, fill the trench a little, leave a line.',
    bodyHtml: `
      <p>The commonest harm is a look. The corner cannot be filled upward, so an injector chasing the frown with gel produces a smooth slab from the corner to the jaw that reads as a heavier jowl and, with the chin and cheeks done to match, the swollen "facial overfilled syndrome" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13051189/" rel="noopener nofollow" target="_blank">overfilled syndrome</a>). MRI shows hyaluronic gel persisting for years rather than the months of folklore, so routine top-ups accumulate rather than replace (<a href="https://journals.lww.com/prsgo/fulltext/2024/07000/hyaluronic_acid_filler_longevity_in_the_mid_face_.36.aspx" rel="noopener nofollow" target="_blank">MRI review</a>). The rules: toxin for the corner, chin and prejowl for the support, a little in the trench, a visible line left behind, a photograph before every syringe — and hyaluronidase for the slab already there.</p>
    `,
  },
  {
    id: 'safety-lift',
    category: 'safety',
    title: 'Threads, devices and surgery: what goes wrong',
    tldr: 'Threads dimple, show and extrude; ultrasound and radiofrequency can burn and melt lower-face fat; a commissure lift leaves a visible scar in roughly one in seventeen; a facelift carries nerve injury and haematoma, and one series saw the lines recur within a year.',
    bodyHtml: `
      <p>Threads under the jowl produce puckering and dimpling that usually settle in weeks, palpable or visible threads that sometimes do not, and occasional extrusion or infection, with complications under-reported in the systematic review (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15709" rel="noopener nofollow" target="_blank">systematic review</a>). Microfocused ultrasound and radiofrequency can burn, and can shrink the deep fat a hollow prejowl cannot spare; the FDA's alert on radiofrequency microneedling burns and scars is recent (<a href="https://www.dermatologytimes.com/view/fda-alerts-clinicians-to-serious-complications-with-radiofrequency-microneedling-devices" rel="noopener nofollow" target="_blank">FDA alert</a>). The commissure lift left visible scars in three of 51 patients and asymmetry in one (<a href="https://link.springer.com/article/10.1007/s00266-021-02393-2" rel="noopener nofollow" target="_blank">retrospective series</a>). A facelift carries haematoma, facial-nerve weakness that is usually temporary and occasionally not, and scars around the ear, for a line that a 78-procedure series saw recur between 6 and 12 months (<a href="https://journals.lww.com/prsgo/fulltext/10.1097/gox.0000000000006897~critical-review-of-a-series-of-78-surgical-facial" rel="noopener nofollow" target="_blank">2025 series</a>). Jowls and a neck are reasons for a facelift; a marionette line alone is not.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-sad',
    category: 'faq',
    title: 'Why does my mouth look sad or angry when I feel neither?',
    tldr: 'Because the corners have dropped below horizontal — the depressor anguli oris has won against weakening lifters, the jowl has slid into the line and the chin has shrunk — and a downturned corner reads as a frown from across a room. The "e" test tells you how much is muscle.',
    bodyHtml: `
      <p>The face signals mood with the corners of the mouth, and once they sit below the horizontal at rest the brain of everyone who looks at you reads a frown. Three things drop them: the depressor anguli oris, which pulls the corner down and gets relatively stronger as the lifters weaken; the descent of cheek and jowl fat against the mandibular ligament, which heaps tissue into the line and drags the corner with it; and the shrinking of the chin and jaw underneath. Pull your corners down hard and relax — if the resting corner sits low and the movement deepens it, toxin in that muscle will change the message for months. If it does not, the answer is support and, for a real jowl, surgery.</p>
    `,
  },
  {
    id: 'faq-botox-or-filler',
    category: 'faq',
    title: 'Botox or filler for marionette lines?',
    tldr: 'Both, in order: toxin in the depressor for the corner, chin and prejowl filler for the support, then a little in the trench. Filler alone satisfies 90% of patients and lifts the corner by nothing measurable; the split-face trial shows the combination lasts longer.',
    bodyHtml: `
      <p>They do different jobs. Toxin quietens the muscle that pulls the corner down and is the only injectable that raises the angle on photographs, for six to nine months. Filler does not lift — the 962-patient review found no measurable lift of the corner and 90–93% satisfaction anyway — but it restores the chin and prejowl the line hangs from and fills the trench so the shadow softens. The 22-patient split-face trial found toxin plus filler beat filler alone at two weeks and a month and took 6.5 weeks longer to wear off. Toxin first, gel two weeks later, support before the line.</p>
    `,
  },
  {
    id: 'faq-how-long',
    category: 'faq',
    title: 'How long does filler last in a marionette line?',
    tldr: 'In the one marionette-specific study, 70% were a grade better at one month, 58% at three, 51% at six, declining to a year. Chin and prejowl gel lasts longer; MRI shows the gel lingering after the effect is gone, so top up on the photograph, not the calendar.',
    bodyHtml: `
      <p>The trench is a mobile, muscle-driven site, and the open-label marionette study shows the curve: 69.9% at least one grade better at a month, 58.2% at three, 51.3% at six, and roughly half of the improvement gone by a year. Firm gel on the chin and prejowl bone lasts 12–24 months because nothing moves it; quietening the muscle with toxin stretched the combined result by a median 6.5 weeks in the split-face trial. MRI finds hyaluronic gel persisting for years after it has stopped being visible, which argues against automatic top-ups and for a photograph before each one.</p>
    `,
  },
  {
    id: 'faq-chin',
    category: 'faq',
    title: 'Will chin or jawline filler help my marionette lines?',
    tldr: 'If the chin is receded or there is a notch in front of the jowl, yes — the jawline trial improved prejowl depth by 4.6 mm against 2.5 mm untreated and raised marionette-line satisfaction 33 points. If the chin is already strong, no; then it is the muscle or the jowl.',
    bodyHtml: `
      <p>The line is pinned to the jaw at the bottom, and a jaw that has shrunk lets it run down into a hollow. In the 206-person randomised jawline trial, filler along the jaw and prejowl improved prejowl depth by 4.6 mm at six months against 2.5 mm in untreated controls, and satisfaction with the marionette lines rose by 32.6 points; in the 192-person chin trial, 56% improved a grade of chin retrusion against 28% of controls. For a receded chin or a prejowl notch, this is the first syringe and it shortens the line; for a strong chin with a heavy jowl or a downturned corner it does little, and the money belongs in toxin, the trench or the operation.</p>
    `,
  },
  {
    id: 'faq-facelift',
    category: 'faq',
    title: 'Will a facelift get rid of them?',
    tldr: 'It improves them if the jowl has descended — the extended deep-plane lift beat the standard one for marionette lines in a 70-patient cohort — and it does not change the muscle or the bone. One 78-procedure series saw the lines recur at 6–12 months. Have it for jowls and neck.',
    bodyHtml: `
      <p>A deep-plane facelift releases the ligaments at the bottom of the line and moves the jowl fat back up, and for the descended type the trench softens with it; in the 70-patient comparison the extended deep-plane technique did this better than the standard one at nine months. It cannot quieten the depressor anguli oris, which is why surgeons add toxin afterward, and it cannot rebuild a small chin, which is why they add an implant or fat. The critical review of 78 deep-plane lifts recorded the marionette lines returning between 6 and 12 months in all cases — a warning to have the operation for the jowls and the neck, with the line as a bonus, and to keep the toxin and the support going afterward.</p>
    `,
  },
  {
    id: 'faq-threads',
    category: 'faq',
    title: 'Are threads worth it for marionette lines?',
    tldr: 'Rarely. Small short studies, months of effect, dimpling and extrusion, and a systematic review calling the technique scarcely studied. For mild descent in someone refusing surgery, perhaps; for the line as such, the same money buys toxin, chin support and filler with better evidence.',
    bodyHtml: `
      <p>Threads hitch the jowl upward for a few months and dissolve. The marionette-specific data are a study that scored lines from 3.3 to 1.7 immediately after treatment, a 31-procedure series with 87% satisfactory results, and a 50-patient threads-plus-stimulator series in which patient satisfaction was 74–86% while the surgeons' own fell from 96% to 86% by a year; the meta-analysis of thread lifting finds the effect fading within twelve months. For mild descent in someone who understands the result is measured in months, a legitimate choice; for the line, toxin, chin and prejowl support and a little gel in the trench have the trials behind them.</p>
    `,
  },
  {
    id: 'faq-corner-lift',
    category: 'faq',
    title: 'Is there a surgery for the corners themselves?',
    tldr: 'The commissure lift: a small excision above the corner that took angles from −3° to +3.5° in a 51-patient series with 25 months of follow-up, and a visible scar in three of them. Permanent and precise, done by few surgeons, with a scar where everyone looks.',
    bodyHtml: `
      <p>Yes, and it is the only permanent one. A commissure lift removes a small lens or triangle of skin above and to the side of the mouth corner and closes it so the corner turns up, with the scar laid in the new corner line. The largest series moved the corner angle from about −3° to +3.5° and held it over two years, with one undercorrection, one asymmetry and three visible scars in 51 patients; the systematic review pools surgery at an effective lift in 79% and obvious scars in 3.8%. It suits a downturned corner in older skin that hides a scar, after toxin has shown what a lifted corner looks like on that face; it is the wrong first move for anyone under fifty with good skin.</p>
    `,
  },
  {
    id: 'faq-prevent',
    category: 'faq',
    title: 'Can I prevent them?',
    tldr: 'The skin half, partly: sunscreen, no smoking, a retinoid. The muscle half, with early, light toxin once the corners start to drop. The bone and weight half, by losing weight slowly and keeping your teeth and bite. Nothing prevents the anatomy.',
    bodyHtml: `
      <p>Marionette lines are anatomy plus time, and prevention buys years rather than immunity. Sunscreen and not smoking keep the skin's recoil, which is the difference between a shadow and a trench; a retinoid slows the etching. Once the corners begin to drop with the "e" test, a light dose of toxin every four to six months keeps the depressor from winning early, with the split-face evidence that it also protects any filler. Slow weight loss rather than crash loss preserves the deep fat under the muscle, and keeping the lower teeth and the bite preserves the jaw the line is pinned to. The <a href="/anti-aging-40s">40s guide</a> covers the decade when this starts.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until I see something?',
    tldr: 'Toxin: a week, peak at two. Filler: at once, settled at two weeks. Collagen stimulators: 6–12 weeks. Threads and devices: 2–3 months. Commissure lift: presentable at two weeks, scar mature at six months. Facelift: final at six to twelve months.',
    bodyHtml: `
      <p>Toxin in the depressor lifts the corner within a week and peaks at two, which is when an uneven smile is rebalanced with a unit on the other side. Hyaluronic acid on the chin, prejowl or in the trench shows at once and is judged at two weeks when the swelling has gone. Calcium hydroxylapatite and poly-L-lactic acid build over six to twelve weeks. Threads and energy devices are read at two to three months. A commissure lift is presentable at two weeks with a scar that fades over six months; a facelift is swollen for weeks, presentable at a month and final at six to twelve. Photograph from the front and at three-quarters before anything.</p>
    `,
  },
  {
    id: 'faq-cost-ladder',
    category: 'faq',
    title: 'What is the cheapest thing that works, and the most effective?',
    tldr: 'Cheapest with evidence: toxin in the depressor, €150–300 every four to six months. Most effective per euro for the whole problem: toxin plus chin and prejowl support plus a little in the trench, €1,000–2,000 a year. Permanent: a commissure lift for the corner, a facelift with chin work for descent.',
    bodyHtml: `
      <p>The ladder in euros: sunscreen and a retinoid (€20–40 a month, skin only) → toxin in the depressor anguli oris (€150–300, four to six months, the only injectable that lifts the corner) → toxin plus hyaluronic acid in the trench (€450–900 a round) → chin and prejowl support first, then the trench (€1,000–2,000 a year, the plan most deep lines need) → calcium hydroxylapatite or PLLA every one to two years (€700–1,600) → a commissure lift (€2,000–4,000, once, a scar) → a facelift with chin and fat work for the descended jowl (€8,000–20,000). Threads (€800–2,000 for months) and energy devices (€1,000–3,000 for a modest tightening) sit outside the ladder for this problem.</p>
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
    intro: 'Three drivers make a marionette line — and the "e" test and the recline test tell you which is doing the most in yours.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which marionette lines do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: the skin and the habits',
    intro: 'What keeps the crease from printing, what deepens the trench without anyone noticing, and the shelf of gadgets that does neither.',
    sections: home,
  },
  {
    id: 'inj',
    title: 'Injectables',
    intro: 'The one injectable that lifts the corner, the syringes that support and soften the trench, and what the marionette-specific studies actually measured.',
    sections: inj,
  },
  {
    id: 'clinic',
    title: 'Lifting and surgery',
    intro: 'Everything that promises to lift the line or the corner rather than fill it — graded by the 962-patient review and the facelift cohorts.',
    sections: clinic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'What the trials, the consensus panels and the case reports actually flag — starting with the lopsided smile.',
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
  corner: 'Mouth corner',
  line: 'The line',
  support: 'Chin & jaw support',
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
