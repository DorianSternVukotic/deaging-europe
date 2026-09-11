/**
 * Thinning lips and lost lip definition guide — single source of truth
 * (problem template).
 *
 * Consumed by /thin-lips. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: the ageing lip is not mainly a shrinking lip. MRI and
 * photographs show the cutaneous upper lip lengthening (about 22 to 24.5 mm
 * between the twenties and the seventies), the red lip thinning and rolling
 * inward, the Cupid's bow and the vermilion border flattening, the colour
 * contrast between lip and skin fading, and the teeth and bone behind the
 * lip retreating — with no measurable loss of total volume. So the popular
 * fix, volume alone, is the wrong tool for the commonest version and gives
 * the blown-up look everyone recognises. Hyaluronic filler has the best
 * evidence on the page (sixteen randomised trials) and is the right tool for
 * the flattened vermilion; the lip lift is the tool for the lengthened lip;
 * colour is the cheapest treatment with an experiment behind it; and the
 * overfilled, migrated lip is now a problem of its own.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'volume' | 'definition' | 'length' | 'colour' | 'support' | 'general';

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
  'The ageing lip lengthens more than it shrinks: in MRI scans of 30 women aged 20–35 and 30 aged 65–80, the skin of the upper lip grew from 22.0 to 24.5 mm while the lip thinned from 10.7 to 8.75 mm, with no loss of total volume; in 182 photographs, skin gained at the expense of visible red lip. The red lip rolls inward, the Cupid\'s bow flattens, and the changes accelerate after 40.',
  'Two more things go quietly: the colour contrast between the lips and the skin around them, which falls with age in every ethnic group measured and is a cue observers use to judge age, and the support behind the lip — teeth and maxillary bone — whose loss retrudes the upper lip and narrows the mouth.',
  'Hyaluronic filler is the best-evidenced treatment: sixteen randomised trials pool to lip fullness improved in 60% and appearance in 82%, with an adverse event in half (swelling, firmness, bruising) and a serious one in about 1 in 90; pivotal trials show 80–88% responders at two to three months and about 60% at a year. Most of it ends up in muscle, because the lip has less than a millimetre of subcutaneous space, and imaging finds it years later.',
  'The lengthened lip is a surgical problem: a subnasal lip lift shortened the philtrum from 14–14.5 mm to 10.8–12 mm, raised vermilion height from 5–6 mm to 7–9 mm and roughly doubled tooth show across seven studies of 1,754 patients, with revision rates of 0.6–6.7% and a permanent scar under the nose. Filler on that lip gives the "blown-up" look the anatomists warned about in 2008.',
  'The cheapest treatment has an experiment behind it: raising lip-to-skin contrast with colour made faces look younger to raters in Paris, Gettysburg and Beijing, and makeup made 40- and 50-year-old women look younger while making 20-year-olds look older. Plumping glosses, suction devices and lip exercises have no trials; the toxin "lip flip" raises the upper lip a little for six to eight weeks; biostimulators and permanent fillers do not belong in a lip.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-length',
    kind: 'Length',
    title: 'The upper lip is getting longer, not just thinner',
    blurb: 'On MRI the skin of the upper lip grows from about 22 to 24.5 mm between the twenties and the seventies, and photographs show skin gaining at the expense of visible red lip. Total volume does not fall — it is redistributed into length, which is why volume alone looks wrong.',
  },
  {
    id: 'type-volume',
    kind: 'Volume',
    title: 'The red lip flattens and rolls inward',
    blurb: 'The lip thins from about 10.7 to 8.75 mm at the border and mid-lip, the vermilion height falls from late adolescence on, the Cupid\'s bow blunts, the dermis thins and its elastic fibres degenerate — and the changes accelerate after 40.',
  },
  {
    id: 'type-contrast',
    kind: 'Colour & support',
    title: 'Less contrast, less support',
    blurb: 'The redness of the lips against the surrounding skin falls with age in every ethnic group measured and is a cue observers use to judge age; behind the lip, the teeth and the bone that hold it forward retreat, retruding the upper lip and narrowing the mouth.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'lip-anatomy',
    category: 'concept',
    title: 'What a young lip has and an old one loses',
    tldr: 'A young lip has a short cutaneous upper lip with two philtral columns, a raised vermilion border (the "white roll") drawing a crisp Cupid\'s bow, a full everted red lip in roughly a 1:2 upper-to-lower ratio, strong colour contrast against the skin, and teeth and bone behind it. Ageing takes each of those in a measurable order.',
    bodyHtml: `
      <p>The lip is three structures. The cutaneous upper lip, from the base of the nose to the red lip, carries the philtrum — two soft columns with a dip between them — and is short in youth. The vermilion border is a slightly raised ridge of pale skin, the "white roll", that catches light and draws the Cupid's bow; the red lip below it is thin, gland-rich mucosa over the orbicularis oris muscle, with a dry outer part and a wet inner part that meet at the line where lipstick stops. Behind all of it sit the upper teeth and the maxilla, which hold the lip forward. Attractiveness studies put numbers on the young version: when 150 raters ranked 100 morphed faces of women aged 18–25, the most attractive lips were about half again larger than the originals, and when 428 raters ranked ratios, an upper-to-lower lip ratio of 1:2 won and a 2:1 ratio came last (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5543334/" rel="noopener nofollow" target="_blank">ideal-lip study</a>) — a white, young sample, but the ratio is the one every injector on this page is aiming at. Ageing takes the pieces in order: the cutaneous lip lengthens, the red lip thins and rolls in, the white roll and the bow flatten, the colour fades against the skin, and the support behind it retreats (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12878117/" rel="noopener nofollow" target="_blank">perioral ageing review</a>). Each has a different fix, and the guide is organised by which one is yours.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'How common — and what actually changes',
    tldr: 'In 918 people aged 4–73, vermilion height rose until late adolescence and fell thereafter while the mouth widened; in 169 Chinese women the changes accelerated after 40; in 124 more, vermilion height fell while vermilion area did not — the lip lengthens and inverts more than it shrinks. Lip augmentation ran to 1.45 million procedures in the United States in 2024, in the top five every year it has been counted.',
    bodyHtml: `
      <p>The measurements come from three-dimensional anthropometry. In 532 men and 386 women aged 4–73, mouth width, philtrum width and total lip height increased with age while the vermilion heights of the lips rose until late adolescence and then fell, and the ratio of vermilion height to mouth width — the number that reads as "full lips" — fell steadily (<a href="https://pubmed.ncbi.nlm.nih.gov/20570070/" rel="noopener nofollow" target="_blank">918-subject study</a>). In 169 Chinese women aged 20–60, the cutaneous upper and lower lips lengthened, the upper vermilion shortened and its border flattened, and most variables changed little between the twenties and forties then significantly between the forties and fifties (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7984336/" rel="noopener nofollow" target="_blank">169-woman study</a>); in 124 more, philtrum length and area grew and vermilion height fell, while vermilion area and lip protrusion stayed the same — the red lip is rolling inward and hiding rather than disappearing (<a href="https://pubmed.ncbi.nlm.nih.gov/37606289/" rel="noopener nofollow" target="_blank">124-person 3D study</a>). The MRI study is the anchor: 30 women aged 20–35 against 30 aged 65–80, upper-lip skin 22.0 against 24.5 mm, lip thickness 10.7 against 8.75 mm, and no loss of total volume (<a href="https://pubmed.ncbi.nlm.nih.gov/18639513/" rel="noopener nofollow" target="_blank">MRI and photograph study</a>). Demand tracks the anxiety: American plastic surgeons alone recorded 1,449,565 lip augmentations in 2024, up 1%, and the procedure has been in the top five since it was first counted (<a href="https://www.plasticsurgery.org/documents/news/statistics/2024/top-five-minimally-invasive-procedures-2024.pdf" rel="noopener nofollow" target="_blank">ASPS 2024</a>); hyaluronic filler of all kinds was the second most common non-surgical procedure in the world, 6.3 million a year (<a href="https://www.isaps.org/discover/about-isaps/global-statistics/global-survey-2024-full-report-and-press-releases/" rel="noopener nofollow" target="_blank">ISAPS 2024</a>).</p>
    `,
  },
  {
    id: 'why-hard',
    category: 'concept',
    title: 'Why the syringe gets this wrong',
    tldr: 'The anatomists concluded in 2008 that isolated volume augmentation is not a causal treatment for the ageing upper lip and risks an unnatural "blown-up" look — and volume is what the market sells. Most lip filler ends up in muscle, imaging finds it years later, and the migrated, overfilled lip is now a presentation of its own.',
    bodyHtml: `
      <p>The study that measured the ageing lip ended with a warning the industry ignored: because the change is a redistribution into length with no loss of volume, "isolated volume augmentation is not a causal method of upper lip rejuvenation and may therefore rather lead to an unnatural 'blown up' look" (<a href="https://pubmed.ncbi.nlm.nih.gov/18639513/" rel="noopener nofollow" target="_blank">MRI and photograph study</a>). Filler is nonetheless the best-evidenced treatment on this page for the lip that has actually flattened — sixteen randomised trials pool to fullness improved in 60% and appearance in 82% (<a href="https://academic.oup.com/asj/advance-article-abstract/doi/10.1093/asj/sjaf224/8313674" rel="noopener nofollow" target="_blank">2026 meta-analysis</a>) — and its problems are the ones the anatomy predicts. Ultrasound of 126 treated and untreated lips found less than a millimetre of subcutaneous space, so filler sits in the muscle in most people, and vertical injection techniques went with deeper deposits, hypervascularity and migration (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13290038/" rel="noopener nofollow" target="_blank">ultrasound study</a>); residual gel is found on scans years after a "temporary" treatment (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13100341/" rel="noopener nofollow" target="_blank">persistence review</a>); and the overfilled face is a recognised syndrome (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13051189/" rel="noopener nofollow" target="_blank">overfilled-syndrome review</a>). The guide's order is the anatomist's: measure the length, restore the contrast, replace only the volume that left, lift what has lengthened, and support what the teeth no longer do.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-length',
    category: 'context',
    title: 'The long upper lip: philtrum stretching, teeth hiding',
    tldr: 'Relax the face and look straight on: a young upper lip shows 2–4 mm of upper teeth at rest and a short, curved philtrum; the lengthened lip shows no teeth, a flat philtrum and a thin red lip that filler only pushes outward. In lip-lift series the philtrum measured 14–14.5 mm before surgery. The tool is a lift, not a syringe.',
    focus: 'length',
    bodyHtml: `
      <p>Hold a ruler from the base of the nose to the top of the red lip, and take a photograph with the face relaxed and the lips parted a few millimetres. In lip-lift series the cutaneous upper lip measured 14.0–14.5 mm before surgery and tooth show at rest 1.5–2.0 mm (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12929697/" rel="noopener nofollow" target="_blank">lip-lift review</a>); on MRI the upper-lip skin grew about 2.5 mm between the twenties and the seventies while the red lip thinned and no volume was lost (<a href="https://pubmed.ncbi.nlm.nih.gov/18639513/" rel="noopener nofollow" target="_blank">MRI and photograph study</a>). The signs are a philtrum that has flattened and lengthened, upper teeth that no longer show at rest, a red lip that has rolled under and become a line, and — the tell — a history of filler that made the lip project without making it look younger. The lengthened lip is the surgical type: shortening the skin lifts and everts the red lip and shows the teeth again, and 0.5 mL of gel afterwards does what 2 mL could not before. The <a href="/lip-lines">lip-lines guide</a> covers the lines on the same skin.</p>
    `,
  },
  {
    id: 'type-volume',
    category: 'context',
    title: 'The flattened vermilion: thinner, rolled in, Cupid\'s bow blurred',
    tldr: 'In profile the red lip no longer projects past the skin above it; straight on, the bow has lost its two peaks and the white roll its shadow; lipstick feathers because there is no ridge to stop it. The lip has thinned by about a fifth and rolled inward. The tool is a small volume of soft hyaluronic gel placed at the border and in the body, with the ratio kept at 1:2.',
    focus: 'volume',
    bodyHtml: `
      <p>Take a profile photograph. A young red lip projects a few millimetres beyond the skin above and below it and has a crisp ridge where the two meet; the flattened vermilion sits level with the skin or behind it, the Cupid's bow has lost its peaks, and the lipstick line blurs. The measurements behind the look are the thinning from 10.7 to 8.75 mm at the border and mid-lip on MRI (<a href="https://pubmed.ncbi.nlm.nih.gov/18639513/" rel="noopener nofollow" target="_blank">MRI and photograph study</a>) and the fall in vermilion height and in the vermilion-to-mouth-width ratio across 918 people (<a href="https://pubmed.ncbi.nlm.nih.gov/20570070/" rel="noopener nofollow" target="_blank">918-subject study</a>), with the 3D studies showing height falling while area does not — an inward roll as much as a loss (<a href="https://pubmed.ncbi.nlm.nih.gov/37606289/" rel="noopener nofollow" target="_blank">124-person 3D study</a>). This is the type filler is for, in the volume the trials used rather than the volume the clinic sells: the border first to restore the ridge, then the body of the lip to evert it, the upper lip kept smaller than the lower. If the philtrum is also long, the lift comes first.</p>
    `,
  },
  {
    id: 'type-contrast',
    category: 'context',
    title: 'Paler lips, a lost border, a blurred edge',
    tldr: 'Compare a photograph from your thirties: the lip colour has moved toward the skin colour, the border has lost its light-catching ridge and fine lines run into it. The redness contrast between lip and skin falls with age in Caucasian, Chinese, Latin American and South African women, and raters read it as age. Colour, a liner, a retinoid on the skin above, and a fine gel at the border.',
    focus: 'colour',
    bodyHtml: `
      <p>Facial contrast — the difference in colour and brightness between the lips, eyes and brows and the skin around them — falls with age. In a large sample of Caucasian women the redness contrast of the lips against the surrounding skin decreased with age and correlated with how old the faces were judged to be, and the same faces were rated younger when the contrast was artificially raised and older when it was lowered (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3590275/" rel="noopener nofollow" target="_blank">facial contrast study</a>); the pattern held in Chinese, Latin American and black South African women aged 20–80, judged by French and Chinese raters (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5524771/" rel="noopener nofollow" target="_blank">cross-cultural study</a>). The lost edge is partly the same story — the white roll fades as the dermis of the cutaneous lip thins and the vertical lines run into it — and the <a href="/lip-lines">lip-lines guide</a> handles the lines. This type is the cheapest on the page to treat: colour and a liner restore the contrast that afternoon, a retinoid and sunscreen rebuild the skin the border sits in over months, and a fine hyaluronic gel along the border redraws the ridge without adding volume.</p>
    `,
  },
  {
    id: 'type-support',
    category: 'context',
    title: 'Lost support: teeth, bone and the denture profile',
    tldr: 'Lips sit on teeth and bone, and both retreat with age; after tooth loss the upper lip falls back, the mouth narrows and the profile flattens. In 30 edentulous patients, new dentures opened the nasolabial angle from 116° to 108° and widened the mouth 2.3 mm; in 25, implant-supported teeth moved the upper lip 3.4 mm forward. Ask a dentist before an injector.',
    focus: 'support',
    bodyHtml: `
      <p>The lip is draped over the upper teeth and the alveolar bone that holds them, and both are lost with age — bone resorbs after tooth loss and shrinks even around retained teeth. The effect is visible in the edentulous face: compared with dentate peers over 65, women with dentures had a narrower lower vermilion, a retruded upper lip and a flatter profile, and fitting dentures produced a wider mouth, a longer upper lip, a wider upper vermilion and a more protruded profile in 102 patients scanned in 3D (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11870634/" rel="noopener nofollow" target="_blank">denture 3D study</a>); in 30 more, new complete dentures changed half of 65 facial measurements, closing the nasolabial angle from 116° to 108° and widening the mouth by 2.3 mm (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12842011/" rel="noopener nofollow" target="_blank">before-after denture study</a>); in 25 patients given implant-supported upper teeth, the top of the upper lip moved 3.4 mm forward (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8459564/" rel="noopener nofollow" target="_blank">implant-prosthesis study</a>). A collapsed-looking mouth with missing or worn upper teeth, a denture that no longer fits, or a long history of orthodontic retraction is the support type, and filler on it is a cosmetic answer to a structural question.</p>
    `,
  },
  {
    id: 'type-overfilled',
    category: 'context',
    title: 'The reverse problem: the overfilled and migrated lip',
    tldr: 'A shelf of firmness above the vermilion, a lip that projects but has lost its bow, a "filler moustache" and a face that reads as treated: gel that has migrated or accumulated over years. Ultrasound of 126 lips found most filler in muscle and vertical techniques linked to migration; residual gel shows on imaging years later. The tool is dissolving, waiting, and a smaller plan.',
    focus: 'definition',
    bodyHtml: `
      <p>The commonest lip problem in a clinic that does a lot of lips is now the lip that has had too much. Ultrasound of 126 people found that the subcutaneous layer of the lip is under a millimetre thick, so most filler is placed in the muscle whether the injector intends it or not, that treated lips had thicker connective-tissue and muscle layers, and that vertical injection techniques — the "Russian lip" family — went with deeper deposits, extra vessels and evidence of migration (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13290038/" rel="noopener nofollow" target="_blank">ultrasound study</a>). In 216 women randomised by needle direction, the direction the needle travelled determined where the gel spread, and satisfaction was highest when the technique respected migration toward the upper lip (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11253074/" rel="noopener nofollow" target="_blank">technique study</a>). Gel does not reliably vanish on schedule: reviews of imaging find hyaluronic filler months and years after injection, and repeated layering in the same compartment accumulates (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13100341/" rel="noopener nofollow" target="_blank">persistence review</a>; <a href="https://journals.lww.com/prsgo/fulltext/2024/07000/hyaluronic_acid_filler_longevity_in_the_mid_face_.36.aspx" rel="noopener nofollow" target="_blank">MRI review</a>). The signs are a firm shelf above the border, a lip that projects without a bow, a blurred edge and a flat, uniform lower face. The treatment is hyaluronidase, a wait of months, and a plan built on the ruler rather than the syringe.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'The self-check: a ruler, a profile, a smile and a photograph from your thirties',
    tldr: 'Five minutes: measure the philtrum, count the millimetres of upper tooth showing at rest, take a profile and a straight-on photograph without colour, compare both with a photograph from your thirties, and note dentures, missing teeth, cold-sore history and every previous injection. Length, volume, contrast, support or overfill — then the plan.',
    bodyHtml: `
      <p>Measure the cutaneous upper lip from the base of the nose to the top of the red lip with the face relaxed; note whether any upper teeth show with the lips parted at rest; photograph the profile and the front without lipstick in daylight; and find a photograph from your thirties for the same two views. Four questions sort the types. Has the lip grown longer and stopped showing teeth (length — a lift, not filler)? Has the red lip flattened and rolled in while the skin above it stayed short (volume — a small amount of gel at the border and body)? Has the colour faded toward the skin and the edge blurred while the shape is much the same (contrast — colour, liner, a retinoid, a border gel)? Are there missing, worn or retracted upper teeth, or a denture (support — a dentist before an injector)? If the lip projects but has a shelf, no bow and a history of syringes, it is the overfilled type and the first step is subtraction. Write down every previous filler, when and how much, and any cold sores, because both change what happens next. Judge everything on this page against the profile photograph, not the mirror.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-contrast',
    category: 'home',
    title: 'Lip colour and a liner: the contrast that reads as young',
    tldr: 'Raising the redness contrast of the lips against the skin made the same faces look younger to raters, and lowering it made them look older, in Caucasian women and then in Chinese, Latin American and South African women; makeup made 40- and 50-year-old women look younger and 20-year-olds older in three experiments. The one lip treatment that is free, reversible and measured.',
    evidence: 'moderate',
    focus: 'colour',
    note: 'Best for: the faded, blurred-edge lip — and everyone else, on top of whatever else they do',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€10–40',
    bodyHtml: `
      <p>Age perception uses colour as well as shape. In a large sample of Caucasian women the redness contrast between the lips and the surrounding skin fell with age, tracked the ages raters assigned, and could be moved: the same faces were judged younger when the contrast was artificially increased and older when it was decreased (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3590275/" rel="noopener nofollow" target="_blank">facial contrast study</a>). Repeated with Chinese, Latin American and black South African faces and French and Chinese raters, the same aspects of contrast fell with age and the same manipulation shifted perceived age (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5524771/" rel="noopener nofollow" target="_blank">cross-cultural study</a>). Makeup itself was then tested: 40- and especially 50-year-old women were judged significantly younger with makeup than without across three studies, while 30-year-olds looked no different and 20-year-olds looked older (<a href="https://bpspsychub.onlinelibrary.wiley.com/doi/abs/10.1111/bjop.12337" rel="noopener nofollow" target="_blank">makeup and perceived age</a>). Moderate: perceptual experiments rather than clinical trials, but controlled, replicated and directly about the thing this guide is for. A colour a shade redder than the natural lip and a liner drawn on the border, not outside it, restore the two cues that age removed; drawing outside the border is the paint version of migration.</p>
    `,
  },
  {
    id: 'home-retinoid-spf',
    category: 'home',
    title: 'Sunscreen and a retinoid on the skin the border sits in',
    tldr: 'The white roll is skin, and the skin of the cutaneous lip thins and loses its elastic fibres with age; tretinoin has eight randomised trials for fine and coarse wrinkles and daily sunscreen slowed visible ageing in a four-year trial. Neither adds volume; both keep the edge readable and the lines out of it.',
    evidence: 'moderate',
    focus: 'definition',
    note: 'Best for: the blurred-edge lip before any gel is placed on it — and after, to keep it',
    sessions: 'Sunscreen every morning; retinoid nightly, indefinitely',
    downtime: 'Weeks of peeling around the mouth',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>The histology of the ageing upper lip shows a thinning dermis with degenerating elastic and collagen fibres over a thickened subcutis (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12878117/" rel="noopener nofollow" target="_blank">perioral ageing review</a>), and the vermilion border is a fold of that dermis. Tretinoin thickens it: the meta-analysis of eight randomised trials in 1,361 patients finds fewer fine and coarse wrinkles (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/" rel="noopener nofollow" target="_blank">retinoid meta-analysis</a>), and daily sunscreen use slowed visible skin ageing by 24% against discretionary use over four and a half years in 903 adults (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">sunscreen trial</a>). Neither restores volume or length, and the retinoid goes on the skin above the border, not the red lip, which it will peel. Moderate for definition — the trials measured wrinkles, not borders — and the <a href="/lip-lines">lip-lines guide</a> grades the same two products for the lines that run into the edge.</p>
    `,
  },
  {
    id: 'home-topical-ha',
    category: 'home',
    title: 'Topical hyaluronic and peptide lip serums',
    tldr: 'A two-step hyaluronic lip product raised caliper-measured plumpness and hydration over four weeks in 36 women aged 22–40 in an open-label study; a peptide-hyaluronic serum improved shine, texture and the border in two small trials, one placebo-controlled. Both by the makers, both measured in fractions of a millimetre. Hydration, not volume.',
    evidence: 'emerging',
    focus: 'definition',
    sessions: 'Two to three times daily',
    downtime: 'None',
    cost: '€20–90',
    bodyHtml: `
      <p>Topical hyaluronic acid cannot reach the muscle where the volume went; it can hydrate the red lip, which is thin, gland-poor mucosa that dries easily, and a hydrated lip is slightly plumper and reflects more light. The studies say exactly that. Thirty-six women aged 22–40 applied a two-step hyaluronic lip treatment at least three times a day for four weeks, open-label, and improved on every graded parameter — texture, colour, definition, scaling, lines, plumpness — with corneometer hydration and caliper-measured plumpness up at weeks 2 and 4 (<a href="https://pubmed.ncbi.nlm.nih.gov/28403271/" rel="noopener nofollow" target="_blank">two-step lip study</a>). A peptide-hyaluronic serum with a vesicle delivery system was tested in filler-naive lips and, double-blind against placebo, in lips augmented three to nine months earlier, improving shine, texture and the vermilion border with 94% rated improved in the first study (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12639410/" rel="noopener nofollow" target="_blank">peptide-hyaluronic study</a>). Emerging: manufacturer studies, young subjects, and endpoints a caliper can see and a dinner companion cannot. A useful thing to do to the surface; not a treatment for a thin lip.</p>
    `,
  },
  {
    id: 'home-plumpers',
    category: 'home',
    title: 'Plumping glosses, suction devices and lip exercises',
    tldr: 'Plumping glosses irritate the lip with capsaicin, menthol or cinnamon for an hour or two of swelling; suction "lip pumps" bruise it; lip exercises train the muscle that ageing does not weaken. None has a trial, and the swelling of an irritant is inflammation, not youth.',
    evidence: 'limited',
    focus: 'volume',
    sessions: 'Whenever',
    downtime: 'Stinging; bruising with suction',
    cost: '€5–40',
    bodyHtml: `
      <p>The mechanism of every plumping gloss is irritation: a counter-irritant — capsaicin, menthol, cinnamon, niacin — dilates the vessels of the red lip and the lip swells for an hour or two, which the label calls plumping and a dermatologist calls contact irritation. Suction devices do the same with negative pressure and add bruising and, in the enthusiastic, broken capillaries. Lip and "face yoga" exercises train the orbicularis oris, which is not what ages — the muscle keeps working while the skin over it lengthens and the lip rolls in. None of the three has a trial of any kind; the comparison is the sixteen randomised trials of the gel (<a href="https://academic.oup.com/asj/advance-article-abstract/doi/10.1093/asj/sjaf224/8313674" rel="noopener nofollow" target="_blank">2026 meta-analysis</a>) and the seven prospective studies of the toxin flip (<a href="https://pubmed.ncbi.nlm.nih.gov/40377719/" rel="noopener nofollow" target="_blank">lip-flip review</a>), which are the two non-surgical treatments that do something measurable. Limited; harmless in moderation; a weekly gloss is a pleasure, not a plan.</p>
    `,
  },
];

const inj: Section[] = [
  {
    id: 'inj-ha-lips',
    category: 'inj',
    title: 'Hyaluronic acid lip filler',
    tldr: 'Sixteen randomised trials: lip fullness improved in 60%, appearance in 82%, satisfaction 68%, an adverse event in half (swelling 78%, firmness 48%, bruising 34%) and a serious one in about 1.1%. The pivotal trials show 80–88% responders at two to three months and about 60% at a year on 1.8–2.6 mL. The right tool for the flattened vermilion, in the volume the trials used.',
    evidence: 'strong',
    focus: 'volume',
    note: 'Best for: the flattened, rolled-in red lip — border first, 0.5–1 mL, the ratio kept at 1:2; never as a substitute for a lift on a long lip',
    sessions: 'Once, touch-up at 4 weeks; repeat at 9–12 months',
    downtime: '3–7 days of swelling; bruising up to two weeks',
    cost: '€300–600 per 0.5–1 mL (UK £250–500)',
    bodyHtml: `
      <p>Cross-linked hyaluronic gel placed along the vermilion border and into the body of the lip is the most-trialled aesthetic injection there is. The 2026 meta-analysis of sixteen randomised trials found lip fullness improved in 60% (95% CI 44–76%), aesthetic appearance in 82%, satisfaction in 68%, an adverse event in 50% — swelling 78%, firmness 48%, bruising 34%, tenderness 33% — and a serious adverse event needing treatment, follow-up or lasting beyond 30 days in 1.1% (<a href="https://academic.oup.com/asj/advance-article-abstract/doi/10.1093/asj/sjaf224/8313674" rel="noopener nofollow" target="_blank">2026 meta-analysis</a>); an earlier pooled analysis put responders at 91% two months after injection (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8377277/" rel="noopener nofollow" target="_blank">2021 meta-analysis</a>). The pivotal trials underneath agree. In 225 adults randomised to Volbella or Restylane-L, 80.3% and 70.8% had improved a grade on the Lip Fullness Scale at three months, responders stayed above 60% through a year, perioral lines improved in two-thirds, and 96% reported satisfaction with their lips (<a href="https://journals.lww.com/dermatologicsurgery/fulltext/2017/03000/safety_and_effectiveness_of_vyc_15l,_a_hyaluronic.11.aspx" rel="noopener nofollow" target="_blank">Volbella trial</a>); against no treatment, 84.7% of Chinese adults responded at three months versus 0% of controls (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9661899/" rel="noopener nofollow" target="_blank">Chinese Volbella trial</a>). In 270 adults randomised 2:1 to Kysse or Volbella, 88% had responded at week 8 and 60% at week 48 on a mean 1.82 mL in the lips, with an injection-site lump in 10% and bruising in 8%, resolving in a median of two weeks, and no serious events (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8021234/" rel="noopener nofollow" target="_blank">Kysse trial</a>). Restylane's own pivotal study randomised 180 adults 3:1 against no treatment and reported 90.1% responders at week 12 against 36.8% of untreated controls (<a href="https://www.restylaneusa.com/docs/Restylane-IFU" rel="noopener nofollow" target="_blank">Restylane label</a>); Juvéderm Ultra XC's randomised 157 to treatment and 56 to delayed treatment, with 79% meaningfully improved at three months and 78% satisfied at a year (<a href="https://www.accessdata.fda.gov/cdrh_docs/pdf5/p050047s044c.pdf" rel="noopener nofollow" target="_blank">FDA summary</a>); a newer soft gel, RHA3, was non-inferior to a comparator in 202 patients with a "natural look and feel" maintained through 52 weeks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12529664/" rel="noopener nofollow" target="_blank">RHA3 trial</a>). Open studies in older patients — 73 people averaging 54 followed 18 months, 30 followed six with 67% still responding — fill in the age this page is about (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12041919/" rel="noopener nofollow" target="_blank">18-month study</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10911686/" rel="noopener nofollow" target="_blank">six-month study</a>).</p>
      <p>Strong, and every trial is the manufacturer's, with the untreated or the rival gel as control. The honest reading of the numbers: about 60% of trial lips are visibly fuller at a year, half swell or firm for a fortnight, one in ninety has a problem that needs a doctor, and the volumes that produced those results were 1.8–2.6 mL across lips and perioral lines in one or two sittings — not the single 1 mL "lip refresh" repeated every four months that accumulates into the overfilled type. The <a href="/fillers">filler guide</a> covers the gels, the injector and the dissolving.</p>
    `,
  },
  {
    id: 'inj-ha-border',
    category: 'inj',
    title: 'Border-only definition with a fine gel',
    tldr: 'A soft, low-cross-linked gel threaded along the vermilion border redraws the white roll and the Cupid\'s bow with 0.3–0.5 mL and little projection; the trials that support it measured fullness and perioral lines, not borders, and the technique data are series — 216 women showed that needle direction decides where gel spreads. The right first injection for the blurred edge.',
    evidence: 'moderate',
    focus: 'definition',
    note: 'Best for: the lip with a good shape and a lost edge — and the first treatment for anyone afraid of looking done',
    sessions: 'Once; repeat at 9–12 months',
    downtime: '2–5 days of swelling',
    cost: '€250–450 (0.3–0.5 mL)',
    bodyHtml: `
      <p>The ridge at the edge of the red lip is what draws the bow and stops lipstick, and a fine gel threaded along it restores the ridge without inflating the lip. The products are the same ones as the row above, at a third of the volume: the Volbella and Kysse trials measured fullness and perioral lines rather than edge definition, but two-thirds of Volbella patients improved their perioral lines at three months and a year (<a href="https://journals.lww.com/dermatologicsurgery/fulltext/2017/03000/safety_and_effectiveness_of_vyc_15l,_a_hyaluronic.11.aspx" rel="noopener nofollow" target="_blank">Volbella trial</a>) and Kysse is labelled for the lines as well as the lips (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8021234/" rel="noopener nofollow" target="_blank">Kysse trial</a>). Technique decides the result: in 216 women randomised by needle direction, where the gel spread followed where the needle travelled, and satisfaction was highest with the technique that kept gel from drifting upward (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11253074/" rel="noopener nofollow" target="_blank">technique study</a>), and the ultrasound study links vertical, deep techniques to migration (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13290038/" rel="noopener nofollow" target="_blank">ultrasound study</a>). Moderate: the products are trialled, the border use is series and technique. The lipstick stops feathering the same week; the lip does not look bigger, which for this type is the point.</p>
    `,
  },
  {
    id: 'inj-lip-flip',
    category: 'inj',
    title: 'The toxin "lip flip"',
    tldr: 'Four units of botulinum toxin along the upper lip relaxed the muscle enough to raise the upper lip height measurably at 15 days in 17 women, with no change in volume, high satisfaction and numbness or a weak straw-sip that resolved within 30 days; a review of seven studies finds 4–6 units and consistent eversion. A millimetre of show for six to eight weeks.',
    evidence: 'emerging',
    focus: 'length',
    note: 'Best for: the slightly long lip that curls under when smiling, and the person who wants to see what eversion looks like before committing to anything',
    sessions: 'Every 2–3 months',
    downtime: 'None; a week or two of odd straw-drinking',
    cost: '€100–250',
    bodyHtml: `
      <p>A few units of toxin placed superficially along the upper vermilion border relax the marginal fibres of the orbicularis oris, and the lip everts a little, showing more red. The first prospective study with instruments gave 17 women 4 units of onabotulinumtoxinA and measured them by stereophotogrammetry: upper-lip height rose modestly but significantly at 15 days, volume did not change, perioral appraisal improved and satisfaction was high, and every adverse event — numbness, a functional limitation of the lip — was mild and gone within 30 days (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13314836/" rel="noopener nofollow" target="_blank">17-woman study</a>). A 2025 systematic review found seven studies with doses and sites, typically 4–6 units, consistent eversion and improved contour, and transient trouble whistling or drinking through a straw (<a href="https://pubmed.ncbi.nlm.nih.gov/40377719/" rel="noopener nofollow" target="_blank">lip-flip review</a>); a 2026 series of three patients on 1 unit per site reports the same at two weeks with the authors' own warning about sample size (<a href="https://pubmed.ncbi.nlm.nih.gov/42434768/" rel="noopener nofollow" target="_blank">2026 series</a>). Emerging: small, uncontrolled, short. It is a good experiment for the person unsure whether eversion is what they want, and a poor substitute for either the gel or the lift; too many units and the lip cannot hold soup.</p>
    `,
  },
  {
    id: 'inj-fat',
    category: 'inj',
    title: 'Fat grafting to the lips',
    tldr: 'Your own fat, processed and injected: satisfaction was higher with a cell-enriched method in a retrospective series, but facial fat retention pools to 47% across 27 studies and is worst in mobile areas, and at five years volume tracked weight gain while satisfaction had returned to pre-operative levels. An operation with an unpredictable result in the most mobile part of the face.',
    evidence: 'emerging',
    focus: 'volume',
    sessions: 'Once, often twice, under sedation',
    downtime: '1–2 weeks of swelling; donor-site bruising',
    cost: '€2,000–4,000',
    bodyHtml: `
      <p>Fat harvested from the abdomen or thigh and injected into the lips is sold as the permanent, natural alternative to gel, and the lip is the worst place in the face to keep a fat graft alive. Retention across 27 studies of facial fat grafting pooled to 47% and was lower in mobile areas than still ones (<a href="https://pubmed.ncbi.nlm.nih.gov/31940073/" rel="noopener nofollow" target="_blank">retention meta-analysis</a>); at five years in 12 patients, the volume that remained tracked how much weight the patient had gained rather than how much was injected, and satisfaction had returned to pre-operative levels (<a href="https://pubmed.ncbi.nlm.nih.gov/39938464/" rel="noopener nofollow" target="_blank">five-year study</a>). For the lips specifically, a retrospective series found higher satisfaction with a cell-enriched preparation than with sedimented or filtered fat (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12513944/" rel="noopener nofollow" target="_blank">lip fat-grafting series</a>). Emerging for the lip: no controlled trial, an operation, a second session often, and no hyaluronidase if the result is lumpy. Reasonable as part of a lift or a facelift when fat is being harvested anyway; not a first treatment. The <a href="/facial-volume-loss">volume-loss guide</a> grades fat grafting where it works better.</p>
    `,
  },
  {
    id: 'inj-biostimulators-prp',
    category: 'inj',
    title: 'PRP, biostimulators and "natural" lip injections',
    tldr: 'Calcium hydroxylapatite is contraindicated in the lips — granulomatous nodules after lip use are in the literature — and poly-L-lactic acid forms nodules in 5–29% of patients in the review data; neither belongs in a thin, mobile lip. Platelet-rich plasma in the lips has no trial at all. What is sold as natural here is either dangerous or unproven.',
    evidence: 'limited',
    focus: 'volume',
    sessions: 'Do not',
    downtime: 'Nodules that can last years',
    cost: '€250–600, plus the removal',
    bodyHtml: `
      <p>The biostimulators that build collagen in a cheek do not belong in a lip. Calcium hydroxylapatite is contraindicated in hypermobile areas with thin skin such as the lips because of nodule formation (<a href="https://link.springer.com/chapter/10.1007/978-3-319-78265-2_68" rel="noopener nofollow" target="_blank">calcium hydroxylapatite chapter</a>), and granulomatous foreign-body reactions after lip augmentation with it are reported (<a href="https://pubmed.ncbi.nlm.nih.gov/17670876/" rel="noopener nofollow" target="_blank">foreign-body reaction report</a>); poly-L-lactic acid produced nodules in 4.7–28.6% of patients in the review of biostimulator inflammation, more than the other products (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13214704/" rel="noopener nofollow" target="_blank">biostimulator review</a>). Platelet-rich plasma injected into the lips has no trial of any size; the <a href="/regenerative-aesthetics">regenerative guide</a> grades it for the face. Anything permanent — silicone oil, polymethylmethacrylate — injected into a lip is a lifelong problem when it goes wrong, and cannot be dissolved. Limited: the "natural" and "collagen-building" lip injections on a clinic menu are the two things a lip should not receive.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'surg-lip-lift',
    category: 'clinic',
    title: 'The subnasal lip lift',
    tldr: 'A strip of skin removed under the nose shortens the philtrum and everts the red lip: across seven studies of 1,754 patients the philtrum went from 14–14.5 mm to 10.8–12 mm, vermilion height from 5–6 mm to 7–9 mm and tooth show from 1.5–2 mm to 3.5–5 mm, with satisfaction 4.4/5, revisions in 0.6–6.7% and adverse scarring in 7.5% of one series. The only treatment for the lengthened lip, and a permanent scar at the nostril base.',
    evidence: 'moderate',
    focus: 'length',
    note: 'Best for: the long philtrum with no tooth show and a red lip that filler only pushes outward',
    sessions: 'Once',
    downtime: '1–2 weeks; the scar matures over months',
    cost: '€2,500–5,000',
    bodyHtml: `
      <p>The "bullhorn" lip lift removes a curved strip of skin along the base of the nose and closes it, shortening the cutaneous upper lip and rolling the red lip outward — the one treatment that addresses the change the MRI study actually found. A 2026 systematic review of seven studies in 1,754 adults found the subnasal techniques reduced philtral length from 14.0–14.5 mm to 10.8–12.0 mm, increased vermilion height from 5.0–6.0 mm to 7.0–9.0 mm and improved upper-incisor show from 1.5–2.0 mm to 3.5–5.0 mm, with mean satisfaction 4.4 out of 5, revision rates of 0.6–6.7%, and adverse scarring in 7.5% of one series treated with steroid injections (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12929697/" rel="noopener nofollow" target="_blank">lip-lift review</a>). A review of six studies in 361 patients who had it with a rhinoplasty found high satisfaction, shortened lips, and mild scarring and temporary numbness as the commonest problems, resolving within months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11629712/" rel="noopener nofollow" target="_blank">rhinoplasty-and-lift review</a>); the Freiburg group that measured the ageing lip published the morphometric case for the lift as its treatment (<a href="https://www.ovid.com/jnls/plasreconsurg/fulltext/10.1097/prs.0b013e3181df6faa~proving-the-effectiveness-of-the-lip-lift-for-treatment-of" rel="noopener nofollow" target="_blank">morphometric evaluation</a>). Moderate: measured, consistent, series-based, no randomised comparison — the <a href="/lip-lines">lip-lines guide</a> grades it lower for lines, which it does not treat. The scar sits in the crease under the nose and is visible in a minority; the change is permanent and cannot be dissolved; and 2–3 mm is the whole point, so a surgeon who does many of them matters more than anywhere else on this page.</p>
    `,
  },
  {
    id: 'clinic-hyaluronidase-reset',
    category: 'clinic',
    title: 'Dissolving: the reset for the overfilled lip',
    tldr: 'Hyaluronidase dissolved the gel in 84% of pooled hyaluronic cases, sometimes needing repeat sessions at higher doses; the migrated shelf, the lost bow and the "filler moustache" all respond, the lip deflates for days, and the natural lip returns over weeks. The treatment for the reverse problem, before any new plan.',
    evidence: 'moderate',
    focus: 'definition',
    note: 'Best for: the shelf above the lip, the lip with no bow, and anyone who dislikes what a previous injector did',
    sessions: '1–3, two weeks apart',
    downtime: '2–5 days of swelling; a deflated look for a week or two',
    cost: '€150–400 per session',
    bodyHtml: `
      <p>Hyaluronic gel is the one injectable with an off switch. A pooled analysis of hyaluronidase treatment found resolution in 84% of hyaluronic cases (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12097758/" rel="noopener nofollow" target="_blank">hyaluronidase review</a>), with repeat sessions at higher doses needed for older, denser or accumulated deposits (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11875574/" rel="noopener nofollow" target="_blank">dosing study</a>), and a 2026 review reframes the enzyme from "dissolving" to "modifying" — partial doses to sculpt a migrated edge rather than erase the lip (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13270321/" rel="noopener nofollow" target="_blank">hyaluronidase reframing</a>). The migrated shelf above the border and the lip that projects without a bow both respond; the lip swells for days, looks emptier than the patient remembers for a week or two because the eye had adjusted to the fill, and settles over a month, at which point the ruler and the profile photograph decide what, if anything, goes back. Moderate: consistent series, no trial of the aesthetic outcome. Allergy is rare and a test dose is reasonable; the <a href="/fillers">filler guide</a> covers the enzyme in detail.</p>
    `,
  },
  {
    id: 'clinic-dental-support',
    category: 'clinic',
    title: 'Restoring the support behind the lip: teeth, dentures, implants',
    tldr: 'New complete dentures changed half of 65 facial measurements in 30 edentulous patients, closing the nasolabial angle from 116° to 108° and widening the mouth 2.3 mm; implant-supported upper teeth moved the upper lip 3.4 mm forward in 25; 102 denture wearers gained a wider vermilion and a more protruded profile. For the collapsed mouth, the dentist is the aesthetic treatment.',
    evidence: 'emerging',
    focus: 'support',
    note: 'Best for: missing, worn or retracted upper teeth, or a denture that no longer supports the lip',
    sessions: 'Weeks to months of dental work',
    downtime: 'Depends on the prosthesis',
    cost: '€500–25,000 depending on the prosthesis',
    bodyHtml: `
      <p>Lip support is a dental variable before it is a cosmetic one. In 30 completely edentulous patients aged 48–87, new upper and lower dentures changed 34 of 65 facial measurements on structured-light 3D scans, closing the nasolabial angle from 116° to 108° and widening the mouth by 2.3 mm (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12842011/" rel="noopener nofollow" target="_blank">before-after denture study</a>); in 102 edentulous adults over 65, dentures produced a wider mouth, a longer upper lip, a wider upper vermilion and a more protruded profile, though the faces stayed shorter and more retruded than dentate peers (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11870634/" rel="noopener nofollow" target="_blank">denture 3D study</a>); in 25 patients given implant-supported fixed upper teeth, the top of the upper lip moved 3.4 mm forward and the philtrum shortened (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8459564/" rel="noopener nofollow" target="_blank">implant-prosthesis study</a>); and the old laser-profile work shows the nasolabial angle and lip position moving with the amount of support a denture's flange provides (<a href="https://pubmed.ncbi.nlm.nih.gov/16457669/" rel="noopener nofollow" target="_blank">lip-support study</a>). Emerging: small prospective 3D studies, consistent, and not aesthetic trials. For the woman whose mouth collapsed after tooth loss, a well-made prosthesis moves the lip further than any syringe, and a dentist who understands lip support belongs in the plan before an injector.</p>
    `,
  },
  {
    id: 'surg-implants',
    category: 'clinic',
    title: 'Silicone lip implants',
    tldr: 'A soft solid-silicone implant threaded through the lip: one practice reports 832 consecutive cases with low complication rates and a permanent but reversible result that does not fix asymmetry or razor-thin lips; a 100-woman series found swelling, bruising and malposition the commonest problems and one case of severe oedema. Permanent, palpable, and easy to regret.',
    evidence: 'emerging',
    focus: 'volume',
    sessions: 'Once',
    downtime: '1–2 weeks of swelling',
    cost: '€2,000–4,500',
    bodyHtml: `
      <p>A tapered rod of soft silicone is drawn through a tunnel in the lip from two small incisions at the corners of the mouth, adding permanent volume that a surgeon can also remove. The largest experience is one practice's: 832 consecutive implant augmentations with excellent photographic results, patient-survey satisfaction and low complication rates, with the authors noting that implants hide excess tooth show, improve pout and lines, do not correct asymmetry, and do nothing for razor-thin lips without a lift or mucosal advancement first (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4174082/" rel="noopener nofollow" target="_blank">832-case series</a>). An Italian series of 100 women with atrophic lips reported a permanent, natural result without discomfort, with swelling, bruising and malposition the most frequent adverse events and one case of severe oedema (<a href="https://pubmed.ncbi.nlm.nih.gov/28336448/" rel="noopener nofollow" target="_blank">100-woman series</a>). Emerging: series from the surgeons who do them, no comparison with gel, and the known trade-offs of a permanent object in a mobile lip — palpability, asymmetry when the two halves sit at different depths, and a fixed volume on a face that keeps changing. For the person who has been happy with filler for years and wants to stop buying it, with a surgeon who has done hundreds.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-vascular',
    category: 'safety',
    title: 'The labial artery: occlusion, necrosis and the rare blindness',
    tldr: 'The superior labial artery runs behind the wet–dry junction exactly where filler goes; gel injected into it or compressing it necroses the lip and, through its connections, has rarely caused blindness. Reviews put occlusion under 1 in 5,000 injections, with the lip and nasolabial fold the commonest sites of necrosis. Slow injection, aspiration, a cannula where appropriate, hyaluronidase in the room, and a lip that blanches or hurts disproportionately is an emergency that afternoon.',
    bodyHtml: `
      <p>The superior and inferior labial arteries run along the lips just behind the junction of the wet and dry red lip, at variable depth, and every lip injection passes near them. Gel injected into the artery or compressing it from outside blanches and then necroses the lip, and through the artery's anastomoses with the facial and angular vessels has, rarely, reached the eye (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12028560/" rel="noopener nofollow" target="_blank">labial-artery review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/36129182/" rel="noopener nofollow" target="_blank">necrosis systematic review</a>). Reviews put occlusion at under 1 in 5,000 injections, with the nasolabial fold and the lip the commonest sites of filler necrosis (<a href="https://www.oaepublish.com/articles/2347-9264.2021.58" rel="noopener nofollow" target="_blank">perioral complications review</a>), and the 2026 meta-analysis counts serious adverse events at 1.1% of trial patients (<a href="https://academic.oup.com/asj/advance-article-abstract/doi/10.1093/asj/sjaf224/8313674" rel="noopener nofollow" target="_blank">2026 meta-analysis</a>). The safeguards are the injector's — slow injection of small aliquots, aspiration, a cannula where the anatomy suits it, ultrasound in the hands that use it, and hyaluronidase in the room — and one is yours: a lip that goes white or mottled, hurts out of proportion, or develops a dusky patch in the hours after treatment is an emergency to be dissolved that afternoon, not watched overnight.</p>
    `,
  },
  {
    id: 'safety-migration-overfill',
    category: 'safety',
    title: 'Migration, the "filler moustache" and the lip that accumulates',
    tldr: 'Less than a millimetre of subcutaneous space means most lip filler sits in muscle, vertical techniques link to migration, and imaging finds gel months and years after a "temporary" treatment; a 1 mL top-up every few months accumulates into the shelf, the lost bow and the overfilled face. Smaller volumes, longer intervals, a border-first technique, and hyaluronidase rather than more gel when it drifts.',
    bodyHtml: `
      <p>The routine harm of lip filler is not the artery but the drift. Ultrasound of 126 lips found the subcutaneous layer under a millimetre, filler in the muscle in most treated people, thicker muscle and connective-tissue layers in treated lips, and deeper deposits, extra vessels and migration with vertical injection techniques (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13290038/" rel="noopener nofollow" target="_blank">ultrasound study</a>); the direction the needle travels determines where the gel spreads (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11253074/" rel="noopener nofollow" target="_blank">technique study</a>). Hyaluronic gel does not keep to its label: residual filler is seen on high-frequency ultrasound and MRI months and years after injection, and repeated deposits in the same compartment layer up (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13100341/" rel="noopener nofollow" target="_blank">persistence review</a>; <a href="https://journals.lww.com/prsgo/fulltext/2024/07000/hyaluronic_acid_filler_longevity_in_the_mid_face_.36.aspx" rel="noopener nofollow" target="_blank">MRI review</a>), which is how the "refresh every four months" schedule builds the firm shelf above the border, the lip without a bow and the overfilled face the reviews now describe (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13051189/" rel="noopener nofollow" target="_blank">overfilled-syndrome review</a>). Rules that follow from the evidence: the volumes and intervals the trials used, a border-first technique with the needle travelling away from the skin above the lip, an injector who will say no, a photograph before every session, and hyaluronidase rather than "balancing" when gel has moved.</p>
    `,
  },
  {
    id: 'safety-herpes-infection',
    category: 'safety',
    title: 'Cold sores, infection and the lump that is not filler',
    tldr: 'Lip filler reactivates herpes simplex in anyone who carries it; antiviral cover started the day before, as the perioral resurfacing trials established, prevents it. Swelling and firmness for a fortnight are expected (78% and 48% in the trials); a hot, spreading, worsening lump after the first week is infection, and a firm nodule months later needs a doctor, not a massage.',
    bodyHtml: `
      <p>Herpes simplex lives in the lip and any needle wakes it: cold-sore reactivation after lip injection is a recognised and preventable complication, and the prophylaxis established for perioral laser resurfacing — famciclovir or valacyclovir started the day before and continued for a few days — applies to filler in anyone with a history (<a href="https://pubmed.ncbi.nlm.nih.gov/10193975/" rel="noopener nofollow" target="_blank">famciclovir study</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/11966791/" rel="noopener nofollow" target="_blank">valacyclovir study</a>). The expected course is swelling in 78% of trial patients, firmness in 48%, bruising in a third and tenderness in a third, resolving over about two weeks (<a href="https://academic.oup.com/asj/advance-article-abstract/doi/10.1093/asj/sjaf224/8313674" rel="noopener nofollow" target="_blank">2026 meta-analysis</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8021234/" rel="noopener nofollow" target="_blank">Kysse trial</a>). What is not expected: a lump that is hot, red and growing after the first week, which is infection; a cold sore, which needs antivirals the same day; and a firm nodule appearing weeks or months later, which can be a delayed inflammatory reaction to the gel and needs assessment and, usually, hyaluronidase rather than the "massage it out" advice of the internet. The lip-line resurfacing and peel risks are in the <a href="/lip-lines">lip-lines guide</a>.</p>
    `,
  },
  {
    id: 'safety-surgery-toxin',
    category: 'safety',
    title: 'Lift, flip and implant: what each can do wrong',
    tldr: 'The lip lift leaves a permanent scar under the nose that was troublesome in 7.5% of one series and needed revision in 0.6–6.7%, and it cannot be undone; too much toxin in a lip flip means a lip that cannot hold a straw or a spoonful for weeks; implants are permanent, palpable and asymmetric when the halves sit at different depths. Choose the surgeon by the number done, and the flip dose by units, not enthusiasm.',
    bodyHtml: `
      <p>The surgical options trade the syringe's reversibility for permanence, and each has a signature problem. The lip lift's is the scar: it sits in the crease under the nose, was adverse in 7.5% of one series and treated with steroid injections, needed revision in 0.6–6.7% across the review, and can widen the nostrils or leave a lip too short to close comfortably if too much skin is taken — none of it dissolvable (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12929697/" rel="noopener nofollow" target="_blank">lip-lift review</a>). The toxin flip's is function: the studies used 4–6 units precisely because more relaxes the muscle that seals the mouth, and the mild numbness and weak sip that resolved within 30 days in the 17-woman study become drooling, a changed smile and difficulty with straws, whistling and consonants when the dose is generous (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13314836/" rel="noopener nofollow" target="_blank">17-woman study</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/40377719/" rel="noopener nofollow" target="_blank">lip-flip review</a>). The implant's is permanence in a moving part: palpability, malposition, asymmetry between the two halves and, in one series, severe swelling (<a href="https://pubmed.ncbi.nlm.nih.gov/28336448/" rel="noopener nofollow" target="_blank">100-woman series</a>). Fat grafting's is unpredictability, with no enzyme for the lumps. The practical rule for the whole page: the gel is the only treatment here with an off switch, so it is the one to try first, in small volume, and the permanent options come after a year of knowing what you like.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-how-much',
    category: 'faq',
    title: 'How much filler do thinning lips need?',
    tldr: 'Less than the menu suggests: the trials that produced 60% responders at a year used 1.8–2.6 mL across the lips and perioral lines in one or two sittings, and a first treatment for a flattened lip is 0.5–1 mL, border first. More than 1 mL in one sitting, or 1 mL every four months, is how the overfilled type is built.',
    bodyHtml: `
      <p>The Kysse trial injected a mean 1.82 mL into the lips and 2.65 mL in total including the lines around them, with a touch-up at four weeks, and 60% of those lips were still visibly fuller at 48 weeks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8021234/" rel="noopener nofollow" target="_blank">Kysse trial</a>). A thinning lip that keeps its shape needs the border redrawn and a little body restored — half a millilitre to one, upper lip smaller than lower — and the honest injector will send you away with product left in the syringe. The number that matters more than the millilitres is the interval: nine to twelve months between full treatments, judged on a profile photograph, because the gel outlasts its label on imaging and the layers add up.</p>
    `,
  },
  {
    id: 'faq-how-long',
    category: 'faq',
    title: 'How long does lip filler last?',
    tldr: 'About 60% of trial lips are still visibly fuller at a year — 61.8% for Volbella, 60% for Kysse — and the gel itself is found on scans long after it stops showing. Plan on a top-up at nine to twelve months, not four.',
    bodyHtml: `
      <p>Responder rates in the pivotal trials fall from 80–88% at two or three months to about 60% at a year (<a href="https://journals.lww.com/dermatologicsurgery/fulltext/2017/03000/safety_and_effectiveness_of_vyc_15l,_a_hyaluronic.11.aspx" rel="noopener nofollow" target="_blank">Volbella trial</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8021234/" rel="noopener nofollow" target="_blank">Kysse trial</a>), and open studies in older patients report improvement holding through 18 months in most (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12041919/" rel="noopener nofollow" target="_blank">18-month study</a>). Meanwhile the material persists: imaging reviews find hyaluronic filler months and years later (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13100341/" rel="noopener nofollow" target="_blank">persistence review</a>). The two facts together are the argument against the four-monthly top-up: the visible effect fades before the gel does, and refilling on the schedule of the effect stacks the gel.</p>
    `,
  },
  {
    id: 'faq-filler-vs-lift',
    category: 'faq',
    title: 'Filler or a lip lift?',
    tldr: 'The ruler decides. A philtrum of 14 mm or more with no upper teeth showing at rest is a length problem, and filler on it gives the blown-up look; a short lip with a flattened red lip is a volume problem, and a lift on it is an unnecessary scar. Many faces over 55 are both, in which case the lift comes first and a little gel after.',
    bodyHtml: `
      <p>The MRI study found the ageing upper lip lengthened and thinned without losing volume and concluded that volume alone is not a causal treatment (<a href="https://pubmed.ncbi.nlm.nih.gov/18639513/" rel="noopener nofollow" target="_blank">MRI and photograph study</a>); the lip-lift review found the operation shortens the philtrum by 2–3.5 mm, raises the vermilion by about 2 mm and doubles tooth show (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12929697/" rel="noopener nofollow" target="_blank">lip-lift review</a>); the filler trials show the gel doing what it does for the flattened lip (<a href="https://academic.oup.com/asj/advance-article-abstract/doi/10.1093/asj/sjaf224/8313674" rel="noopener nofollow" target="_blank">2026 meta-analysis</a>). Measure, photograph the profile, and let the answer pick the tool. The toxin flip is a two-month preview of eversion for anyone unsure whether they would like what a lift shows.</p>
    `,
  },
  {
    id: 'faq-lip-flip',
    category: 'faq',
    title: 'Is a lip flip worth it?',
    tldr: 'For a millimetre of eversion lasting six to eight weeks at €100–250, yes as an experiment, no as a treatment: the 17-woman study measured a modest rise in upper-lip height, no volume change and side effects gone within 30 days. It is the cheapest way to find out whether you like a more everted lip.',
    bodyHtml: `
      <p>The instrumented study gave 17 women 4 units and found upper-lip height modestly but significantly higher at 15 days with no change in volume, high satisfaction and mild, transient numbness and functional limitation (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13314836/" rel="noopener nofollow" target="_blank">17-woman study</a>). The effect is real, small, and short, and it costs the lip a few weeks of clumsy straws. As a way of seeing what eversion looks like on your own face before committing to gel or a lift, it is worth a session; as the answer to a thinning lip, it is not.</p>
    `,
  },
  {
    id: 'faq-natural',
    category: 'faq',
    title: 'How do I avoid the "duck"?',
    tldr: 'Keep the ratio at 1:2, the border before the body, the volume at 0.5–1 mL, the needle travelling away from the skin above the lip, the interval at nine months or more, and the injector one who will refuse. The duck is projection without a bow, and it is built by technique and repetition, not by the product.',
    bodyHtml: `
      <p>The attractiveness study found a 1:2 upper-to-lower ratio most attractive and a 2:1 ratio least (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5543334/" rel="noopener nofollow" target="_blank">ideal-lip study</a>); the technique study found the direction of the needle determines where the gel spreads and satisfaction was highest when gel was kept from drifting into the upper lip skin (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11253074/" rel="noopener nofollow" target="_blank">technique study</a>); the ultrasound study links vertical, deep techniques to migration (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13290038/" rel="noopener nofollow" target="_blank">ultrasound study</a>). The duck is a lip that projects forward and up without a Cupid's bow, with a firm shelf above the border, and it is the product of too much, too often, placed to project. Ask the injector how much of the syringe they plan to use and what they will do with the rest; the right answer is "half, and keep it".</p>
    `,
  },
  {
    id: 'faq-stretch',
    category: 'faq',
    title: 'Does filler stretch the lips permanently?',
    tldr: 'There is no evidence that a lip sags after gel is dissolved and good evidence that gel persists longer than its label: treated lips show thicker muscle and connective tissue on ultrasound, and residual filler shows on scans years later. What people mistake for stretching is usually leftover filler or the lip they had forgotten.',
    bodyHtml: `
      <p>Ultrasound of treated lips found thicker connective-tissue and muscle layers than untreated ones, with filler sitting in the muscle in most (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13290038/" rel="noopener nofollow" target="_blank">ultrasound study</a>), and reviews find gel months and years after injection (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13100341/" rel="noopener nofollow" target="_blank">persistence review</a>). No study has shown a lip permanently enlarged, loosened or sagging once the gel is genuinely gone; the "stretched" lip after years of filler is usually a lip that still contains filler, or a thinning lip seen again after years of not seeing it. Dissolve, wait two months, photograph, and then judge.</p>
    `,
  },
  {
    id: 'faq-dissolve',
    category: 'faq',
    title: 'Can lip filler be undone?',
    tldr: 'Hyaluronic gel, yes: hyaluronidase resolved 84% of pooled hyaluronic cases, sometimes over repeat sessions at higher doses, with the lip deflated for a week or two and back to its own shape in a month. Silicone, polymethylmethacrylate, fat and implants cannot be dissolved — implants can be removed by the surgeon who placed them.',
    bodyHtml: `
      <p>Hyaluronidase dissolved the gel in 84% of pooled hyaluronic cases (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12097758/" rel="noopener nofollow" target="_blank">hyaluronidase review</a>), with denser or older deposits needing repeat sessions at higher doses (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11875574/" rel="noopener nofollow" target="_blank">dosing study</a>). That reversibility is why the gel is the first injectable on this page and the permanent options the last: implants are reversible by an operation, fat is not, and permanent fillers are a lifelong problem when they go wrong. The <a href="/fillers">filler guide</a> covers the enzyme, the test dose and what to expect in the fortnight after.</p>
    `,
  },
  {
    id: 'faq-lipstick',
    category: 'faq',
    title: 'Why does my lipstick bleed, and what fixes it?',
    tldr: 'Because the ridge that stopped it has flattened and the vertical lines now channel it: a liner drawn on the border, a retinoid and sunscreen on the skin above, and a fine gel threaded along the border restore the edge; the lines themselves are the lip-lines guide\'s problem.',
    bodyHtml: `
      <p>Lipstick feathers when the vermilion border loses its raised edge and the vertical perioral lines give the pigment channels to run up. The fixes are the definition rows: a liner on the border and a slightly redder colour restore the contrast that reads as young (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3590275/" rel="noopener nofollow" target="_blank">facial contrast study</a>), a retinoid and sunscreen rebuild the skin the edge sits in over months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/" rel="noopener nofollow" target="_blank">retinoid meta-analysis</a>), and 0.3–0.5 mL of a fine gel along the border redraws the ridge without adding volume, with two-thirds of Volbella patients improving their perioral lines in the trial (<a href="https://journals.lww.com/dermatologicsurgery/fulltext/2017/03000/safety_and_effectiveness_of_vyc_15l,_a_hyaluronic.11.aspx" rel="noopener nofollow" target="_blank">Volbella trial</a>). The etched lines need the resurfacing and toxin graded in the <a href="/lip-lines">lip-lines guide</a>.</p>
    `,
  },
  {
    id: 'faq-cost-ladder',
    category: 'faq',
    title: 'What does it cost, from cheapest to dearest?',
    tldr: '€10–40 a lip colour and liner → €10–30 a month for a retinoid and sunscreen → €100–250 a lip flip every two to three months → €250–450 a border-only gel → €300–600 a lip filler session at nine to twelve months → €150–400 a dissolving session → €2,000–4,500 fat or implants → €2,500–5,000 a lip lift. The strongest evidence is in the middle; the cheapest rung has an experiment.',
    bodyHtml: `
      <p>Colour costs almost nothing and has the perceptual experiments behind it; the retinoid and sunscreen cost a coffee a week and keep the edge; the toxin flip is a cheap two-month experiment; the gel, at €300–600 a session repeated at nine to twelve months, carries the sixteen trials; dissolving costs a fraction of what it removes; and the permanent options — fat, implants, the lift — cost a few thousand euros once, with the lift the only one that treats the lengthened lip and the only one with a measured, reviewed result. Prices are typical Western European ranges and vary by city, clinic and syringe.</p>
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
    intro: 'The ageing lip lengthens, rolls inward, fades and loses its support more than it shrinks — and a ruler, a profile photograph and a look at your teeth tell you which of the three drivers is yours.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which thinning lip do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: colour, the edge, and the glosses',
    intro: 'The contrast experiments that make colour the cheapest treatment with evidence, the two products that keep the border readable, and the serums, glosses and devices with nothing behind them.',
    sections: home,
  },
  {
    id: 'inj',
    title: 'Injectables',
    intro: 'The most-trialled injection in aesthetics, graded by what sixteen randomised trials actually found; the border-only version; the toxin flip; and the fat, plasma and biostimulators sold as natural.',
    sections: inj,
  },
  {
    id: 'clinic',
    title: 'Surgery, dissolving and the dentist',
    intro: 'The lift that treats the lengthened lip, the enzyme that resets the overfilled one, the dental support that moves a lip further than any syringe, and the implant for the person who wants to stop buying gel.',
    sections: clinic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The artery, the drift, the cold sore, and what each permanent option can do wrong.',
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
  volume: 'Volume',
  definition: 'Border & definition',
  length: 'Upper-lip length',
  colour: 'Colour & contrast',
  support: 'Dental support',
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
