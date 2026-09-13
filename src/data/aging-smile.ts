/**
 * Aging smile guide — single source of truth (problem template).
 *
 * Consumed by /aging-smile. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: a smile ages in three places at once — the lip that
 * lengthens and thins until it hides the upper teeth, the teeth that
 * darken, shorten and lose their gum, and the bony frame that recedes
 * behind both — and the lip fillers that most people reach for first
 * address none of the three causes. The treatments are graded against the
 * component they act on, dental and aesthetic side by side, because the
 * two professions rarely sit in the same room and the patient has to.
 * The honest ranking: whitening, gum grafting, veneers and implants have
 * the largest trial and survival literatures on the page; lip filler has
 * proper randomised trials but treats a symptom; the lip lift is the only
 * causal fix for the lengthened lip and rests on case series; the
 * neuromodulator and resurfacing rows are small trials; and the
 * "smile makeover" is a package that needs reading one row at a time.
 * Prices are indicative private rates for Western/Central Europe and the UK.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'teeth' | 'gums' | 'lips' | 'frame' | 'general';

export type SectionCategory = 'concept' | 'context' | 'home' | 'dental' | 'perioral' | 'safety' | 'faq';

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
  'A smile ages in three places: the upper lip lengthens by about 5.5 mm and thins until it curtains the upper teeth, the teeth darken, shorten and lose gum, and the maxilla and jaw recede behind them. The youthful signature — upper teeth showing at rest and on speech, lower teeth hidden — reverses: upper incisor display falls 1.5–2 mm on smiling across adult life, and showing more lower teeth is read by observers as an older face.',
  'The lip problem is length and ptosis, not deflation. MRI of 60 women found the aging upper lip longer and thinner but not smaller, and histology found a thinner skin and orbicularis with degenerated elastin — which is why isolated filler "may lead to an unnatural blown-up look" and why the causal fix is a lift, a shorter lip or a longer tooth.',
  'The dental side has the best evidence on the page: whitening works with every protocol and holds one to 2.5 years; connective-tissue gum grafts cover exposed roots in dozens of randomised trials; porcelain veneers survive 96% at ten years; anterior composite bonding survives 92% at ten; dental implants 96% at ten. Teeth are the frame the lips hang on, and they are treated first.',
  'The perioral side is smaller trials and a surgery with series: lip filler has randomised trials (93% responders at eight weeks against 29% untreated), a conservative volume restores the vermilion show; the lip lift shortens the philtrum in case series with results holding one to five years; toxin softens a gummy or downturned mouth by millimetres; resurfacing beats dermabrasion by a small margin in split-face trials.',
  'The frame decides the rest. Tooth loss collapses the lower third of the face — and dentures only partly restore it, leaving faces shorter and more retruded than dentate peers on 3D scans; the maxilla and pyriform aperture recede on CT from middle age. Replace missing teeth before filling the lip, and read every "smile makeover" one row at a time.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the type drawer that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-lip',
    kind: 'The lip',
    title: 'An upper lip that lengthens, thins and rolls in until it hides the teeth',
    blurb: 'The philtrum grows from about 14 mm in young women to 20 mm in older ones; the skin part of the lip expands at the expense of the visible red; the orbicularis thins and the elastin degenerates. MRI shows no loss of volume — a longer, thinner curtain, not a deflated one — which is why the causal fixes are a lift, a shorter philtrum or longer teeth, and filler alone risks the "blown-up" lip.',
  },
  {
    id: 'type-teeth',
    kind: 'The teeth',
    title: 'Teeth that darken, shorten and lose their gum — and show less on smiling',
    blurb: 'Age explains 45% of the variation in tooth lightness across 1,361 adults; teeth darken measurably within eight years in middle age. Wear affects 41% of people worldwide and 98% of Europeans to some degree, shortening the edges that the upper lip used to reveal. Gum recession of a millimetre or more is present in 88% of European adults and 3 mm or more in half, lengthening the tooth and opening black triangles.',
  },
  {
    id: 'type-frame',
    kind: 'The frame',
    title: 'A maxilla and jaw that recede, and teeth that go missing',
    blurb: 'On CT the maxillary angle decreases and the pyriform aperture widens from middle age, dropping the base the lip rests on; bone volume and density fall after 40. Every lost tooth removes lip support, and 22% of adults over 45 worldwide have lost them all: on 3D scans, even a well-made denture leaves the face shorter and more retruded than a dentate one.',
  },
];

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What\'s actually happening',
    intro: 'Lip, teeth and frame age together, each hiding the other\'s repair — and the youthful signature is simple: upper teeth on show, lower teeth hidden.',
    sections: [
      {
        id: 'what-ages',
        category: 'concept',
        title: 'What a young smile shows, and what an old one hides',
        tldr: 'With the lips gently parted a young adult shows a few millimetres of upper incisor and no lower teeth; with age the upper display shrinks toward zero while the lower incisors appear. On smiling, upper incisor display falls 1.5–2 mm across adult life, "high" gummy smiles disappear after 50, upper lip length and the corners drop, and the smile narrows vertically and transversely. Observers read the lower-tooth smile as older.',
        bodyHtml: `
          <p>The classic survey that started the field measured tooth display with the lips at rest in hundreds of dental patients and found "the gradual reduction in the amount of maxillary central incisor exposure with an increase in age, accompanied by a gradual increase in the mandibular tooth exposure" (<a href="https://pubmed.ncbi.nlm.nih.gov/349139/" rel="noopener nofollow" target="_blank">Vig and Brundo, 1978</a>). Every video study since has confirmed and extended it. In 221 people filmed at rest and at widest smile, maxillary incisor display on smiling fell 1.5 to 2 mm with age, no one over 50 had a "high" smile and no teenager a "low" one, and the amount the lips moved from rest to smile declined "especially evident after ages 30 to 39" (<a href="https://pubmed.ncbi.nlm.nih.gov/19732654/" rel="noopener nofollow" target="_blank">dynamic smile analysis</a>). In 265 adults aged 19–60 the upper lip lengthened and the commissures dropped with age, more in men, lower incisors showed more and upper incisors less — "gingival and maxillary incisor display during speech and smile is a youthful and feminine characteristic" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8601479/" rel="noopener nofollow" target="_blank">incisor display study</a>). In 249 Brazilian women the upper lip thinned, upper incisor exposure fell, and the smile narrowed from the molars to the premolars across the decades (<a href="https://pubmed.ncbi.nlm.nih.gov/27119585/" rel="noopener nofollow" target="_blank">Brazilian women's smiles</a>).</p>
          <p>The perception follows the anatomy: when 162 evaluators rated digitally altered smiles, more upper incisor exposure was rated more attractive by every group, and more lower incisor exposure was "significantly associated with the perception of an older apparent age" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13316878/" rel="noopener nofollow" target="_blank">perceived age study</a>). Tooth colour does the same work: darkened teeth in otherwise identical photographs drew lower ratings for attractiveness, success and perceived age than natural or whitened ones (<a href="https://pubmed.ncbi.nlm.nih.gov/34363891/" rel="noopener nofollow" target="_blank">tooth colour and social judgement</a>). The reviews list the whole set — fine lip lines, deepening folds, "elongation and flattening of the upper lip, downturned corners of the mouth, marionette lines, diminished vermilion and upper teeth show" (<a href="https://pubmed.ncbi.nlm.nih.gov/33845492/" rel="noopener nofollow" target="_blank">perioral aging review</a>) — and this guide takes them one component at a time.</p>
        `,
      },
      {
        id: 'the-lip-science',
        category: 'concept',
        title: 'The lip: longer and thinner, not emptier — the finding that should change what you buy',
        tldr: 'Photographs of 182 people, MRI of 60 women and histology of 20 upper lips gave the same answer: the aging upper lip lengthens, its skin portion grows at the cost of the visible vermilion, its thickness falls, and its volume does not. The muscle atrophies and the elastic fibres degenerate. The authors\' conclusion: "isolated volume augmentation is not a causal method of upper lip rejuvenation and may rather lead to an unnatural blown-up look".',
        bodyHtml: `
          <p>The Freiburg group did what the filler industry never had: measured the aging lip three ways. Photomorphometry of 182 standardised faces showed statistically significant lengthening of the upper lip with age and "an increase of prolabium skin at the cost of a decreasing visible upper lip vermilion"; MRI of 30 women aged 20–35 against 30 aged 65–80 showed a decrease in thickness and a redistribution of tissue, and "a loss of volume could not be shown" (<a href="https://pubmed.ncbi.nlm.nih.gov/18639513/" rel="noopener nofollow" target="_blank">photomorphometric and MRI study</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12878117/" rel="noopener nofollow" target="_blank">three-study synthesis</a>). Histology of the upper lip complex in ten people under 40 and ten over 80 found significant thinning of the skin and of the orbicularis oris muscle, degeneration of elastic and collagen fibres, and a widened muscle angle at the vermilion border — "the aged look is due to a loss of elasticity and resultant ptosis of the upper lip rather than to often-postulated but unproven total volume loss" (<a href="https://pubmed.ncbi.nlm.nih.gov/19644283/" rel="noopener nofollow" target="_blank">lip histology</a>). A direct-measurement study put a number on the lengthening: mean philtral height 14.3 mm in young women and 19.8 mm in older ones, a 5.5 mm difference, offered "as a guide for the lip lifting procedure" (<a href="https://pubmed.ncbi.nlm.nih.gov/38643687/" rel="noopener nofollow" target="_blank">philtral height study</a>).</p>
          <p>The red of the lip fades for its own reasons: in donated upper-lip vermilion the total vessel area and the number of vessels in the upper dermis fell with age and the rete ridges flattened (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6594803/" rel="noopener nofollow" target="_blank">vermilion vasculature</a>), and hyaluronan, collagen and muscle-fibre area in the vermilion all declined across 15 cadavers aged 27–78 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7496161/" rel="noopener nofollow" target="_blank">vermilion histology</a>). The same group's classification grades the lip by shape (profile, length against the incisors, vermilion inversion) and by surface (radial lines, the visibility of Cupid's bow, philtrum and white roll), and matches each stage to a treatment (<a href="https://pubmed.ncbi.nlm.nih.gov/25409624/" rel="noopener nofollow" target="_blank">aging lip classification</a>). Read the perioral rows with that in mind: length is a lift, surface is a laser, and volume is the last thing to add.</p>
        `,
      },
      {
        id: 'why-hard',
        category: 'concept',
        title: 'Why the aging smile is treated badly: two professions, one patient, and posed photographs',
        tldr: 'Dentists treat teeth and gums; aesthetic doctors treat lips and lines; the maxillofacial surgeon who understands the frame sees neither until something has gone wrong. The evidence follows the split — survival data and randomised trials on the dental side, small trials and case series on the aesthetic side — and the before-and-afters are posed smiles under studio light, which erase exactly the signs that age a face in conversation.',
        bodyHtml: `
          <p>The perioral region "although severely impacted by facial aging, is often overlooked in texts on facial rejuvenation" (<a href="https://pubmed.ncbi.nlm.nih.gov/33845492/" rel="noopener nofollow" target="_blank">perioral aging review</a>), and the dental literature on the aging smile — orthodontic and prosthodontic — is almost never read by the people injecting lips. The result is predictable: a lip filled to compensate for a lengthened philtrum, a set of veneers placed under a lip that no longer lifts to show them, a lip lift on a mouth whose real problem is a worn, short incisor. The rows below are graded within their own evidence traditions — survival meta-analyses and randomised trials for the dental side, small randomised trials and case series for the aesthetic side — and the tier says how good the evidence is, not which profession owns it.</p>
          <p>Two measurement problems run through every study. A posed smile and a spontaneous one are different expressions — the emotional smile lifts the lip further and shows more gum and tooth (<a href="https://pubmed.ncbi.nlm.nih.gov/35148479/" rel="noopener nofollow" target="_blank">gingival display by age</a>) — and the "after" photograph in a brochure is the posed one, taken from the front, in light that flattens the philtrum and hides the corners. And satisfaction with teeth is not the same as youth: in a UK survey of 3,384 adults, people over 55 were more satisfied with their dental appearance and tooth colour than younger people (<a href="https://pubmed.ncbi.nlm.nih.gov/15747896/" rel="noopener nofollow" target="_blank">UK dental appearance survey</a>). Treat what bothers you in conversation, not what a studio photograph reveals.</p>
        `,
      },
    ],
  },
  {
    id: 'context',
    title: 'Which part of your smile has aged?',
    intro: 'Lip, teeth, frame and the muscles that move them look like one problem in a mirror and answer to four different professions. Sort yours with a ruler and a phone before you book anyone.',
    sections: [
      {
        id: 'type-lip',
        category: 'context',
        title: 'The long lip: teeth that have vanished at rest, a philtrum over 18 mm, a thin red line',
        tldr: 'Lips gently parted, you see no upper tooth; the distance from the base of the nose to the red of the lip measures 18–22 mm; the red has narrowed to a line and rolled inward; the Cupid\'s bow has flattened. This is length and ptosis. Filler makes it a longer, fatter lip; the causal answers are a lift, a longer tooth, or — for a young woman with a naturally long lip — nothing at all.',
        bodyHtml: `
          <p>The measurement is the philtrum: from the junction of nose and lip to the top of the red, in the mirror, with a ruler. Young women average about 14 mm, older women about 20 (<a href="https://pubmed.ncbi.nlm.nih.gov/38643687/" rel="noopener nofollow" target="_blank">philtral height</a>), and the tooth show at rest follows it directly — in 200 subjects, women with a 10–15 mm lip showed 3.7 mm of central incisor and women with a 31–35 mm lip showed 0.25 mm (<a href="https://pubmed.ncbi.nlm.nih.gov/22186686/" rel="noopener nofollow" target="_blank">lip length and tooth exposure</a>). If your upper teeth have disappeared at rest and on speech and the ruler reads over 18, the lip has lengthened; if the red has thinned and rolled in and the white roll has faded, the vermilion has inverted with it.</p>
          <p>The classification in the basics puts these together as the lip-shape stages (<a href="https://pubmed.ncbi.nlm.nih.gov/25409624/" rel="noopener nofollow" target="_blank">aging lip classification</a>). The treatments that shorten the curtain — the subnasal lip lift — or lengthen what it curtains — bonding or veneers on worn incisors — address the cause; a small vermilion-border filler can restore the roll without adding length; a large one adds both volume and, by weight, length. The <a href="/thin-lips">thin lips guide</a> covers the volume side in depth.</p>
        `,
      },
      {
        id: 'type-teeth',
        category: 'context',
        title: 'The aged teeth: yellow-grey, short and flat, long at the gum, dark triangles between',
        tldr: 'Teeth that have darkened toward yellow-grey, incisal edges worn flat and short, a straight or reversed smile line, gums receded so the teeth look long, and dark triangles opening between them. Each has its own prevalence — wear in 98% of Europeans, recession over 1 mm in 88% — and its own repair, and most of them are cheaper and better-evidenced than anything done to the lip.',
        bodyHtml: `
          <p>Colour: in 1,361 Spanish adults aged 16–89, age explained 45% of the variation in tooth lightness, with teeth becoming darker, yellower and redder (<a href="https://pubmed.ncbi.nlm.nih.gov/26371458/" rel="noopener nofollow" target="_blank">tooth colour by age</a>); followed for eight years, middle-aged incisors lost four units of lightness and shifted red, more than the threshold most people notice (<a href="https://pubmed.ncbi.nlm.nih.gov/28858417/" rel="noopener nofollow" target="_blank">longitudinal colour study</a>). Wear: a meta-analysis of 133 studies puts tooth wear at 40.8% worldwide (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12771503/" rel="noopener nofollow" target="_blank">global tooth wear</a>), and a seven-country European examination of 3,551 adults found erosive wear in 97.6%, gum recession of a millimetre or more in 87.9% and sensitivity in 75.9%, all rising through adult life (<a href="https://pubmed.ncbi.nlm.nih.gov/39317300/" rel="noopener nofollow" target="_blank">seven-country European study</a>). Recession pooled across 22 studies: 81% at 1 mm or more, 48% at 3 mm or more, 16% at 5 mm or more, with men and smokers at higher odds (<a href="https://pubmed.ncbi.nlm.nih.gov/39988303/" rel="noopener nofollow" target="_blank">recession meta-analysis</a>).</p>
          <p>The self-check is a smile in daylight against the whites of your eyes (teeth should be no yellower), a look at the edges of the upper front teeth (a young edge is slightly rounded and follows the curve of the lower lip; a worn one is flat, chipped or reversed), a ruler against the gum line (teeth look long when the gum has moved), and a look for triangles of darkness between the teeth at the gum. A dentist's examination with photographs turns these into a plan; the dental rows grade each repair.</p>
        `,
      },
      {
        id: 'type-frame',
        category: 'context',
        title: 'The receding frame: a flattened base under the nose, a collapsed lower face, missing teeth',
        tldr: 'A lip that seems to have fallen back rather than down, deepening nasolabial and marionette folds, a chin that comes forward as the mouth sinks, and — after tooth loss — a lower face that has shortened and folded. The maxilla and pyriform aperture recede on CT from middle age; each missing tooth removes support; dentures restore chewing and only part of the height.',
        bodyHtml: `
          <p>The skeleton is not a fixed scaffold. In 3D CT of 60 adults across three age groups, the glabellar and maxillary angles decreased significantly with age in both sexes and the pyriform aperture area increased from young to middle age — "the bony elements of the midface change dramatically with age" (<a href="https://pubmed.ncbi.nlm.nih.gov/17230106/" rel="noopener nofollow" target="_blank">midface bone CT study</a>); the areas with "a strong predisposition to resorption" are the maxilla including the pyriform region, the orbital rims and the prejowl mandible (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3404279/" rel="noopener nofollow" target="_blank">facial skeleton review</a>), and a 510-subject CT series found bone volume and density declining after 40 (<a href="https://pubmed.ncbi.nlm.nih.gov/41917478/" rel="noopener nofollow" target="_blank">facial skeleton CT series</a>). The lip sits on that base; as it retreats the lip falls back with it and the folds deepen.</p>
          <p>Teeth are the rest of the frame. Complete tooth loss affects a pooled 22% of community-dwelling adults over 45 worldwide (<a href="https://pubmed.ncbi.nlm.nih.gov/36265526/" rel="noopener nofollow" target="_blank">global edentulism</a>) and about 4.4% of the EU population age-standardised (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12790123/" rel="noopener nofollow" target="_blank">EU edentulism trends</a>); with it goes the vertical dimension of the lower face. When 102 edentulous older adults were 3D-scanned before and after complete dentures, the dentures lengthened the upper lip, widened the mouth and protruded the profile — and the faces still appeared "shorter and more retruded than those of dentate individuals" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11870634/" rel="noopener nofollow" target="_blank">denture 3D study</a>). If the lower third of your face has folded, the first appointment is dental, not aesthetic.</p>
        `,
      },
      {
        id: 'type-dynamic',
        category: 'context',
        title: 'The tired mouth: corners that turn down, a smile that shows the lower teeth, a gummy or a low lip line',
        tldr: 'Corners that sit below the midline at rest and give a sad or stern cast; a smile that lifts too little and shows lower teeth; or, the opposite, a lip that lifts high enough to show a band of gum. These are the muscles and their attachments — the depressor of the corner, the elevators of the lip — and they answer to a few units of toxin, a repositioned lip or a lengthened crown.',
        bodyHtml: `
          <p>The muscles change with everything else: the lip elevates less from rest to smile after the thirties (<a href="https://pubmed.ncbi.nlm.nih.gov/19732654/" rel="noopener nofollow" target="_blank">dynamic smile analysis</a>), the commissures descend (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8601479/" rel="noopener nofollow" target="_blank">incisor display study</a>), and the depressor anguli oris, unopposed by a thinner, weaker lip, holds the corners down. The pattern of a "low" smile that shows a thin strip of upper tooth and more of the lower is the aged pattern; the "high" smile with 4 mm or more of gum is the young one that some people would rather lose.</p>
          <p>The self-check is a resting face in a mirror (do the corners sit below the line of the mouth?), a posed smile (which teeth show, how much gum?), and a spontaneous one caught on a phone (more lift, more gum). The perioral rows grade the toxin for the corners and the gummy smile; the dental rows grade the surgical repositioning and crown lengthening for a gummy smile that toxin cannot hold; the <a href="/marionette-lines">marionette lines guide</a> takes the corners further.</p>
        `,
      },
      {
        id: 'workup',
        category: 'context',
        title: 'The self-check: the ruler, the four expressions, and two examinations',
        tldr: 'Lips gently parted: how many millimetres of upper tooth show (young: 2–4; aged: 0)? Philtrum with a ruler: under 15 young, over 18 lengthened. Say "Emma" and "sixty-six" to a phone camera: which teeth show on speech? Posed smile, then a real laugh: gum, upper teeth, lower teeth, corners. Teeth against the whites of your eyes for colour; edges for wear; gum line for recession; triangles between teeth. Then a dentist with photographs, and only then an aesthetic doctor.',
        bodyHtml: `
          <p>The four expressions are the ones the research measured. <strong>Rest:</strong> lips parted, jaw relaxed — the tooth show at rest is the single most age-linked number in the smile literature (<a href="https://pubmed.ncbi.nlm.nih.gov/349139/" rel="noopener nofollow" target="_blank">Vig and Brundo</a>); measure it, and measure the philtrum from nose to red lip. <strong>Speech:</strong> the words dentists use ("Emma", "sixty-six", "Mississippi") show which teeth appear when you talk — the display most people see of you. <strong>Posed smile</strong> and <strong>spontaneous laugh:</strong> note the upper incisor show, the gum, the lower teeth and the corners; the spontaneous one is the honest one (<a href="https://pubmed.ncbi.nlm.nih.gov/35148479/" rel="noopener nofollow" target="_blank">forced versus posed smile</a>).</p>
          <p>Then the teeth: colour against the sclera in daylight, edges for flattening or chipping, gum line for length and recession, triangles for lost papillae, and any gaps from missing teeth. Photograph all four expressions from the front and in profile, in the same light, without a flash. Take them to a dentist first — a hygienist's assessment, a periodontal chart, and an honest word about wear and colour cost less than one syringe — and to an aesthetic doctor second, with the dental plan in hand. The professions rarely talk to each other; you are the one who has to.</p>
        `,
      },
    ],
  },
  {
    id: 'home',
    title: 'At home and at the hygienist: the base the rest is built on',
    intro: 'Cheap, daily, and the precondition for every row that follows. Nothing here lifts a lip; several things here decide whether the teeth are worth showing.',
    sections: [
      {
        id: 'home-stain',
        category: 'home',
        title: 'Stain removal: the hygienist, a whitening toothpaste, and stopping smoking',
        tldr: 'A meta-analysis of 21 controlled trials found whitening toothpastes reduce natural surface stain measurably more than regular ones — extrinsic stain, not the tooth\'s own colour. A professional scale-and-polish removes what paste cannot. In 200 smokers trying to quit, stain and shade improved within weeks. The first, cheapest shade change; the peroxide comes after.',
        evidence: 'moderate',
        focus: 'teeth',
        note: 'Best for: tea, coffee, wine and tobacco stain — before deciding whether the underlying colour needs bleaching',
        sessions: 'Twice daily; hygienist every 6 months',
        downtime: 'None',
        cost: '€5–15 a tube; €80–150 a hygienist visit',
        bodyHtml: `
          <p>Surface stain from tea, coffee, red wine and tobacco sits on the enamel; the yellowing of age sits within it. The first is removable. A systematic review and meta-analysis of 21 publications and 32 comparisons in adults found whitening dentifrices reduced natural extrinsic stain area and intensity significantly more than regular dentifrices over at least six weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/28573755/" rel="noopener nofollow" target="_blank">whitening toothpaste meta-analysis</a>) — a modest, real effect on the stain layer and none on the tooth beneath. A hygienist's scale and polish removes calculus and stain the brush cannot reach and is the point at which the true colour becomes visible.</p>
          <p>Smoking is the largest reversible stainer and one of the two risk factors for gum recession in the meta-analysis (odds ratio 1.84) (<a href="https://pubmed.ncbi.nlm.nih.gov/39988303/" rel="noopener nofollow" target="_blank">recession risk factors</a>); in a randomised trial of 200 daily smokers in a cessation programme, tooth stain and shade improved over twelve weeks on both nicotine-replacement arms (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3444372/" rel="noopener nofollow" target="_blank">cessation and stain trial</a>). It also drives the lip lines and the thinning of the vermilion — the one habit that ages every component on this page at once.</p>
        `,
      },
      {
        id: 'home-wear',
        category: 'home',
        title: 'Protecting the edges: acid, grinding and a night guard',
        tldr: 'Erosive wear is present in 97.6% of European adults and rises through life; attrition from night grinding flattens the incisal edges that a young smile shows. The preventions are unglamorous — acidic drinks through a straw and not before bed, reflux treated, a dentist-made night guard for grinders, fluoride — and they decide whether a bonding or a veneer will survive.',
        evidence: 'emerging',
        focus: 'teeth',
        note: 'Best for: anyone whose front edges have flattened or chipped, before the edges are rebuilt',
        sessions: 'Nightly guard if you grind; habits daily',
        downtime: 'None',
        cost: '€150–500 for a guard; fluoride paste €5',
        bodyHtml: `
          <p>Teeth shorten two ways: acid dissolves the enamel (erosion) and teeth grind each other down (attrition). The seven-country European study found erosive wear in 97.6% of 3,551 adults, associated with sensitivity and increasing "markedly during young adult life" and thereafter (<a href="https://pubmed.ncbi.nlm.nih.gov/39317300/" rel="noopener nofollow" target="_blank">European prevalence study</a>); a systematic review of risk groups found it concentrated in reflux, eating disorders, acidic-drink and special-diet groups (<a href="https://pubmed.ncbi.nlm.nih.gov/39387908/" rel="noopener nofollow" target="_blank">erosive wear risk groups</a>). A flat, short, chipped upper edge that no longer follows the curve of the lower lip is the single most under-recognised sign of an aged smile, and it is why upper incisors stop showing at rest as surely as the lip lengthening does.</p>
          <p>Prevention is the dentist's list: acidic drinks with meals and through a straw, water afterwards, no brushing for an hour after acid, reflux diagnosed and treated, high-fluoride toothpaste for softened enamel, and — for the clencher and grinder, who is most people with flat edges — a custom night guard. None of it lengthens a tooth; all of it decides whether the bonding or veneer that does will still be there in ten years, because a grinder breaks restorations as readily as enamel. The evidence is epidemiology and mechanism — no trial has followed protected edges for a decade — hence the tier.</p>
        `,
      },
      {
        id: 'home-lip-care',
        category: 'home',
        title: 'Lip sunscreen, a retinoid to the white lip, and hydration: slowing the surface, not the length',
        tldr: 'The vermilion loses vessels, collagen and hyaluronan with age and the white lip loses elastin; ultraviolet light and smoking accelerate both. A lip balm with SPF, a retinoid on the skin above the lip (never the red), and a plain occlusive at night are the maintenance for the surface stage of the lip classification. No cream lengthens a tooth or shortens a philtrum.',
        evidence: 'emerging',
        focus: 'lips',
        note: 'Best for: the surface stage — fading Cupid\'s bow, early radial lines, a dull vermilion',
        sessions: 'Daily, for good',
        downtime: 'Retinoid peeling at first',
        cost: '€10–40 / month',
        bodyHtml: `
          <p>The vermilion has no sebaceous glands and thin keratin, and it ages measurably: vessel area and number fall, rete ridges flatten (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6594803/" rel="noopener nofollow" target="_blank">vermilion vasculature</a>), and collagen, hyaluronan and muscle fibre decline across adult life (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7496161/" rel="noopener nofollow" target="_blank">vermilion histology</a>). The white lip above it loses elastin and thins like the rest of the sun-exposed face (<a href="https://pubmed.ncbi.nlm.nih.gov/19644283/" rel="noopener nofollow" target="_blank">lip histology</a>). The classification's "surface" stages — radial lines, fading of the white roll, Cupid's bow and philtral columns — are the ones daily care can slow (<a href="https://pubmed.ncbi.nlm.nih.gov/25409624/" rel="noopener nofollow" target="_blank">aging lip classification</a>).</p>
          <p>The evidence is borrowed: sunscreen and retinoids have decades of facial data, none of it specific to the lip, hence the tier. An SPF 30 balm reapplied through the day, a retinoid on the skin between nose and red lip at night (kept off the vermilion, which it burns), a bland occlusive on the red at night, and no licking, picking or smoking. The <a href="/lip-lines">lip lines guide</a> grades the retinoids and resurfacing for the lines themselves.</p>
        `,
      },
      {
        id: 'home-habits',
        category: 'home',
        title: 'Straws, pursing, sleeping face-down and "facial yoga": the habits, mostly folklore',
        tldr: 'Smoking is the one habit with evidence for aging the mouth. Straws, pursing, whistling and sleeping on the face are plausible contributors to radial lines and unproven; facial exercises to lift the corners have no trial in the aging mouth and cannot lengthen a tooth or shorten a lip. Free to fix, nothing to expect.',
        evidence: 'limited',
        focus: 'general',
        note: 'Best for: stopping smoking; the rest costs nothing and promises nothing',
        sessions: 'Daily',
        downtime: 'None',
        cost: 'Free',
        bodyHtml: `
          <p>The lip lines are dynamic — the orbicularis pursing thousands of times a day around a straw, a cigarette, a bottle — and the same logic that makes toxin work on them makes the habits plausible contributors; there is no trial that measured a straw. Smoking is different: it stains, it drives recession, and its association with perioral lines is one of the most consistent in the photoaging literature. Sleeping face-down folds the lower face for a third of the night and is easy to change.</p>
          <p>"Facial yoga" and the exercise programmes sold to lift the corners have no trial in the aging mouth, and the anatomy argues against them: the corners drop because the lip thins and the skeleton beneath it recedes, and no exercise adds bone or elastin. Stop smoking, change the pillow, drink the coffee from a cup — and put the money into the rows above and below.</p>
        `,
      },
    ],
  },
  {
    id: 'dental',
    title: 'The dental side: colour, edges, gums and the missing teeth',
    intro: 'The best-evidenced rows on the page, from the profession that measures survival in decades. Teeth are the frame the lips hang on; fix the frame first.',
    sections: [
      {
        id: 'dental-whitening',
        category: 'dental',
        title: 'Peroxide whitening, at the dentist or in dentist-made trays: every protocol works, and it holds one to 2.5 years',
        tldr: 'Systematic reviews of the randomised trials find in-office, at-home and combined bleaching all change tooth colour effectively, with at-home carbamide-peroxide trays relapsing less over time and in-office sessions causing more sensitivity; colour stays stable for one to 2.5 years and severe discolourations relapse sooner. A network meta-analysis found the "white diet" unnecessary. EU law limits peroxide to 6% and to dentists; the over-the-counter 0.1% products are not the same treatment.',
        evidence: 'strong',
        focus: 'teeth',
        note: 'Best for: the yellow-grey of age on intact enamel — the cheapest large change on the page',
        sessions: '2–4 weeks of trays, or 1–3 in-office sessions; top-up yearly',
        downtime: 'Sensitivity for days',
        cost: '€200–600 trays; €400–900 in-office',
        bodyHtml: `
          <p>Hydrogen or carbamide peroxide diffuses into enamel and dentine and oxidises the chromophores that age has deposited; it is the most-trialled cosmetic intervention in dentistry. The 2024 systematic review of 30 studies concluded that "all types of bleaching have been shown to be effective in changing colour", that in the head-to-head comparisons the at-home carbamide-peroxide tray had "a lower recurrence", and that sensitivity appears higher with in-office and combined protocols (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11672885/" rel="noopener nofollow" target="_blank">professional whitening review</a>). The prognosis review of 24 studies found colour "stable between 1 and 2.5 years regardless of the type of bleaching agent or the forms of administration", with severe discolourations relapsing sooner (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10329590/" rel="noopener nofollow" target="_blank">home bleaching prognosis</a>). And the ritual of the white diet failed its test: a network meta-analysis of seven trials found cola, coffee, tea, grape juice and red wine during bleaching produced the same colour change as abstaining (<a href="https://pubmed.ncbi.nlm.nih.gov/39557282/" rel="noopener nofollow" target="_blank">white diet meta-analysis</a>).</p>
          <p>Whitening lifts the natural tooth only; it does not change fillings, crowns or veneers, so they are matched afterwards. In the EU, products above 0.1% hydrogen peroxide may only be used by or under a dentist and are capped at 6%; the strips and pens sold direct are legally weaker versions, and the "peroxide-free" ones are abrasives and blue pigments. Sensitivity is the price — a desensitising toothpaste before and during reduces it (<a href="https://pubmed.ncbi.nlm.nih.gov/39078468/" rel="noopener nofollow" target="_blank">desensitising toothpaste review</a>) — and the goal is a shade that matches the whites of your eyes, not the veneers on television.</p>
        `,
      },
      {
        id: 'dental-bonding',
        category: 'dental',
        title: 'Composite bonding: rebuilding the worn edge and the short incisor in one visit — 92% surviving at ten years',
        tldr: 'A multicentre German study of 667 direct composite build-ups on front teeth in 198 patients found 98.8% surviving at two years, 91.7% at ten and 77.6% at fifteen, with 98.5% still functional at fifteen because chipped restorations are repaired rather than replaced. No enamel is removed. The treatment for the flattened edge that has stopped showing under the lip — and the one to try before any veneer.',
        evidence: 'strong',
        focus: 'teeth',
        note: 'Best for: worn, chipped or short upper incisors; the reversed smile line; small gaps',
        sessions: '1 visit; repair every 5–10 years',
        downtime: 'None',
        cost: '€150–400 per tooth',
        bodyHtml: `
          <p>Bonding adds tooth-coloured resin to the edge or face of a tooth, sculpted and cured in the chair, without drilling. It restores the 1–2 mm of incisal length that wear removes — and that the lip, lengthening at the same time, no longer reveals — and it recreates the gentle curve of a young edge. The evidence is unusually good for something so cheap: across three university clinics, 667 anterior build-ups placed over eleven years were followed in 198 patients; overall survival was 98.8% at two years, 91.7% at ten and 77.6% at fifteen, while functional survival — counting repaired chips as survivals — was 98.5% at fifteen, and clinical quality was rated excellent or good for most (<a href="https://pubmed.ncbi.nlm.nih.gov/33491402/" rel="noopener nofollow" target="_blank">anterior composite multicentre study</a>). The systematic review behind it pooled 17 studies of 1,821 anterior composites followed for at least three years: annual failure rates of 0 to 4.1%, fracture the commonest reason to fail, and colour or surface stain the commoner complaint when a restoration had been placed for looks (<a href="https://pubmed.ncbi.nlm.nih.gov/26303655/" rel="noopener nofollow" target="_blank">anterior composite systematic review</a>). The dominant failure was chipping, and a chip is polished or patched in twenty minutes.</p>
          <p>Composite stains and dulls faster than porcelain and needs polishing at the hygienist; a heavy grinder needs the night guard first. But it is reversible, repairable and removes nothing, which makes it the right first answer for a short, flat or chipped edge — and often the last. If the whole front of the tooth is discoloured or fractured, the veneer row is next.</p>
        `,
      },
      {
        id: 'dental-veneers',
        category: 'dental',
        title: 'Porcelain veneers: colour, length and shape in one, surviving 96% at ten years — irreversibly',
        tldr: 'A meta-analysis of 29 studies puts pooled ten-year survival at 96.1% for feldspathic, 93.7% for leucite-reinforced and 96.8% for lithium-disilicate ceramic veneers, with technical complications over a decade ranging from 6% (lithium disilicate) to 41% (feldspathic). Composite veneers pool at 88% over two to eight years. Enamel is removed to place them; they are replaced, not removed.',
        evidence: 'strong',
        focus: 'teeth',
        note: 'Best for: teeth that are dark, worn, chipped and mis-shaped at once, in a mouth that has stopped grinding',
        sessions: '2–3 visits; replaced at 10–20 years',
        downtime: 'Sensitivity; a temporary phase',
        cost: '€800–1,800 per tooth (porcelain); €300–600 (composite)',
        bodyHtml: `
          <p>A veneer is a thin shell bonded to the front of a tooth after a fraction of a millimetre of enamel is removed; it changes colour, length, shape and alignment at once, and it is the engine of every "smile makeover". The survival literature is large. The 2025 meta-analysis of 29 studies found pooled survival at 10.4 years of 96.13% for feldspathic porcelain, 93.70% for leucite-reinforced glass-ceramic and 96.81% for lithium disilicate, with no significant difference between materials — but complication rates that differed sharply: technical, aesthetic and biological complications over the decade of 41%, 20% and 7% for feldspathic against 6%, 2% and 0.5% for lithium disilicate (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12076113/" rel="noopener nofollow" target="_blank">veneer survival meta-analysis</a>). An earlier systematic review of 30 studies agreed on high survival and warned that estimates beyond 20 years do not exist (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8184312/" rel="noopener nofollow" target="_blank">porcelain veneer survival review</a>). Resin-composite veneers pooled at 88% survival over two to eight years, with roughness, colour mismatch and marginal staining the usual complaints (<a href="https://pubmed.ncbi.nlm.nih.gov/38035903/" rel="noopener nofollow" target="_blank">composite veneer meta-analysis</a>).</p>
          <p>The tier is for the survival evidence, not for the decision. Enamel removal is permanent — a veneered tooth needs a veneer for life — and a veneer placed under a lip that has lengthened to hide it changes nothing in conversation. Bonded to enamel rather than dentine, on a patient who has stopped grinding, in lithium disilicate, on no more teeth than actually show: those are the conditions the meta-analyses describe. The Safety section covers the "full set of crowns" that has replaced veneers in some markets.</p>
        `,
      },
      {
        id: 'dental-aligners',
        category: 'dental',
        title: 'Clear aligners in adults: the crowding, the drifted incisors and the tooth show — acceptable outcomes in mild-to-moderate cases',
        tldr: 'Systematic reviews rate the certainty "low to moderate": aligners produce clinically acceptable results comparable to fixed braces for the incisor tipping and mild-to-moderate crowding that adult front teeth develop, with shorter chair time, and remain less predictable for large movements. Lower front teeth crowd and upper incisors drift with age; straightening them changes what shows at rest and on speech.',
        evidence: 'moderate',
        focus: 'teeth',
        note: 'Best for: the lower incisors that have crowded with age, the drifted or tipped upper incisor, before any veneer is considered',
        sessions: '6–18 months of trays; retainers for life',
        downtime: 'None',
        cost: '€2,500–6,000',
        bodyHtml: `
          <p>Adult teeth move: lower incisors crowd through the decades, upper incisors tip and drift as bone and gum change, and the smile line loses its curve. Clear aligners are the adult-acceptable way to move them back. The systematic reviews are cautious and consistent: aligners "may produce clinically acceptable outcomes that could be comparable to fixed appliance therapy for buccolingual inclination of upper and lower incisors in mild to moderate malocclusions", at low-to-moderate certainty, with most other tooth movements less predictable (<a href="https://pubmed.ncbi.nlm.nih.gov/31651082/" rel="noopener nofollow" target="_blank">aligner effectiveness review</a>); an earlier meta-analysis of four controlled trials found a significant advantage in chair time and treatment duration for mild-to-moderate cases and no difference in stability (<a href="https://pubmed.ncbi.nlm.nih.gov/28547915/" rel="noopener nofollow" target="_blank">aligner meta-analysis</a>).</p>
          <p>The aesthetic point is display: a straightened, slightly proclined upper incisor shows more at rest and on speech, and an even lower arch stops the crowded lower teeth from being the ones that appear. The costs are months of trays, retention for life, and the recession risk the Safety section describes in a thin, receded gum. Orthodontics also moves gum: aligning teeth is one of the four treatments the papilla review found to reduce black triangles.</p>
        `,
      },
      {
        id: 'dental-recession',
        category: 'dental',
        title: 'Gum grafting for recession: the connective-tissue graft covers the exposed root in dozens of randomised trials',
        tldr: 'A meta-analysis of 13 randomised trials with 529 recession defects found the coronally advanced flap with a connective-tissue graft gained significantly more keratinised tissue than the flap alone — the combination the earlier reviews had already found most likely to achieve complete root coverage; 24 randomised trials comparing a donor-site-free acellular dermal matrix with the patient\'s own graft found no difference in root coverage. The "long tooth" of age is a moved gum, and it moves back.',
        evidence: 'strong',
        focus: 'gums',
        note: 'Best for: front teeth that look long, roots that are sensitive or yellow at the neck, a gum line that has become uneven',
        sessions: '1 surgery per area; 2–4 weeks healing',
        downtime: 'A sore palate for a week if a graft is taken',
        cost: '€600–1,500 per site',
        bodyHtml: `
          <p>Recession is the gum migrating down the root, and it is nearly universal: 81% of adults at a millimetre or more, 48% at three millimetres or more, 16% at five (<a href="https://pubmed.ncbi.nlm.nih.gov/39988303/" rel="noopener nofollow" target="_blank">recession meta-analysis</a>), highest in men and smokers, and rising through life in the European study (<a href="https://pubmed.ncbi.nlm.nih.gov/39317300/" rel="noopener nofollow" target="_blank">European prevalence</a>). The exposed root is darker than enamel, so a receded front tooth looks longer and yellower at once — the "long in the tooth" of the idiom. Periodontists have randomised the repairs for thirty years: the meta-analysis of 13 randomised trials found the coronally advanced flap plus connective-tissue graft superior to the flap alone for keratinised tissue, building on earlier reviews that had found the combination the most likely to achieve complete root coverage (<a href="https://pubmed.ncbi.nlm.nih.gov/25039691/" rel="noopener nofollow" target="_blank">root coverage meta-analysis</a>), and a meta-analysis of 24 randomised trials found a donor-free acellular dermal matrix matched the patient's own graft for root coverage, with more attachment gain and less keratinised tissue (<a href="https://pubmed.ncbi.nlm.nih.gov/37552186/" rel="noopener nofollow" target="_blank">dermal matrix vs connective tissue graft</a>).</p>
          <p>The surgery takes an hour, the result is a gum line that sits where it did at 25, and it is the only row on the page that both rejuvenates the smile and protects the tooth — covered roots stop being sensitive and stop decaying. It needs a periodontist who does it weekly and a patient who has stopped the over-brushing or smoking that moved the gum.</p>
        `,
      },
      {
        id: 'dental-black-triangles',
        category: 'dental',
        title: 'Black triangles between the teeth: hyaluronic-acid injection for weeks, grafting for years, orthodontics sometimes',
        tldr: 'A systematic review of 45 studies (7 randomised) found hyaluronic-acid injections, platelet-rich fibrin, soft-tissue grafting and orthodontics all improve lost papillae at three months, with the connective-tissue graft carrying "the most robust evidence for the longer-term reduction of black triangles" and insufficient evidence for recommendations overall. In 15 sites, a single HA injection cut the triangle area from 0.54 to 0.13 mm² at one week and 0.26 at four — fading already.',
        evidence: 'emerging',
        focus: 'gums',
        note: 'Best for: small triangles in a stable gum; large ones are a restorative or orthodontic conversation',
        sessions: 'HA: 2–3 injections, repeated; graft: once',
        downtime: 'None for injection; a week for grafting',
        cost: '€150–300 per HA session; €600–1,500 per grafted site',
        bodyHtml: `
          <p>The interdental papilla — the pink triangle of gum between two teeth — recedes with the rest of the gum and with bone loss, leaving a dark triangle that ages a smile more than most people realise and that lipstick cannot hide. The 2024 systematic review found 45 studies of reconstruction: 15 of hyaluronic-acid injection, six of platelet-rich fibrin, 16 of soft-tissue grafting and four of orthodontics; all "seem to improve outcomes at a minimum three months", the connective-tissue graft has the most robust long-term evidence, and "there is insufficient evidence to make recommendations to clinicians" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10794407/" rel="noopener nofollow" target="_blank">papilla reconstruction review</a>). A representative injection study treated 15 deficient papillae with 0.5 ml of HA: the black-triangle area fell from 0.54 mm² to 0.13 at one week and had drifted back to 0.26 by four (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11320376/" rel="noopener nofollow" target="_blank">HA papilla study</a>).</p>
          <p>The honest options are three: the injected filler for a small triangle, repeated as it fades; reshaping the teeth' contact points with composite so the triangle closes from above (the restorative answer, in the bonding row); and, for a larger loss, accepting it or the graft. The "gum filler" clinics now sell is the first of these with a longer name.</p>
        `,
      },
      {
        id: 'dental-gummy',
        category: 'dental',
        title: 'Lip repositioning and crown lengthening for the gummy smile: 3 mm less gum at six months, 2.8 mm at three years',
        tldr: 'A meta-analysis of 13 studies of surgical lip repositioning found gingival display reduced by 3.06 mm at six months, 2.91 at twelve and 2.76 at 36, with the periosteal-suture modification holding 5 mm; a split-mouth randomised trial found flapless crown lengthening as stable as the open-flap operation at twelve months. The young problem in this guide — a gummy smile is a youthful trait that fades — with the durable fix when toxin will not hold.',
        evidence: 'moderate',
        focus: 'gums',
        note: 'Best for: 4 mm or more of gum on a full smile that bothers you, when three-monthly toxin is not the answer you want',
        sessions: 'Once',
        downtime: 'A week of swelling',
        cost: '€800–2,500',
        bodyHtml: `
          <p>Excess gum on smiling is the opposite of the aged pattern — high smiles are seen in 45% of women in their twenties and 19% over 50 (<a href="https://pubmed.ncbi.nlm.nih.gov/27119585/" rel="noopener nofollow" target="_blank">Brazilian women's smiles</a>) — but for the woman it bothers, the fixes are dental. Lip repositioning sutures the inside of the upper lip lower so it cannot rise as far: the meta-analysis of 13 studies with at least six months' follow-up found gingival display reduced by 3.06 mm at six months, 2.91 mm at twelve and 2.76 mm at 36, and the modification with periosteal suturing held 5.22 mm at six months and 4.94 at twelve (<a href="https://pubmed.ncbi.nlm.nih.gov/35347420/" rel="noopener nofollow" target="_blank">lip repositioning meta-analysis</a>). Where the teeth are short because gum covers them (altered passive eruption), aesthetic crown lengthening trims the gum and bone to reveal the tooth; a split-mouth randomised trial in 28 patients found the minimally invasive flapless version as stable as the open-flap one at twelve months, with high satisfaction and low morbidity (<a href="https://pubmed.ncbi.nlm.nih.gov/23826645/" rel="noopener nofollow" target="_blank">crown lengthening trial</a>).</p>
          <p>The toxin alternative — two to four units into the lip elevators, 3.4 mm less gum for three months — is graded in the <a href="/botox#use-gummy-smile">Botox guide</a>. Surgery is once and permanent; toxin is a quarterly subscription that lets you try the result first.</p>
        `,
      },
      {
        id: 'dental-implants',
        category: 'dental',
        title: 'Replacing missing teeth: implants survive 96% at ten years and restore the frame that dentures only partly do',
        tldr: 'A systematic review of 18 prospective studies found 96.4% of dental implants surviving at ten years (91.5% in people over 65). Complete dentures restore chewing and part of the face — on 3D scans they lengthen the lip and protrude the profile, yet leave the face shorter and more retruded than dentate peers. Every missing tooth is missing lip support; the lower third of an aging face collapses from the inside.',
        evidence: 'strong',
        focus: 'frame',
        note: 'Best for: any missing tooth in the smile zone, and the collapsed lower face that follows several',
        sessions: '2–3 stages over 3–9 months',
        downtime: 'Days of swelling per stage',
        cost: '€2,000–4,000 per tooth; €15,000–30,000 per arch',
        bodyHtml: `
          <p>Teeth hold the lips out and the lower face up. Lose one at the front and the lip loses a prop; lose them all and the vertical dimension of the face falls with the bone that follows them. Implants are the replacement with survival data: across 18 prospective studies of contemporary implant systems, the summary ten-year survival was 96.4%, with a more conservative sensitivity estimate of 93.2% and 91.5% in patients aged 65 and over (<a href="https://pubmed.ncbi.nlm.nih.gov/30904559/" rel="noopener nofollow" target="_blank">10-year implant survival</a>). They preserve the bone around them in a way a denture, which rests on the gum and lets the ridge resorb beneath it, cannot.</p>
          <p>Dentures still matter for the many who have them: when 102 edentulous older adults were 3D-scanned before and after complete dentures, the changes were "most noticeable in the perioral region: wider rima oris, longer upper lip, wider upper vermilion, and more protruded profile" — and the denture faces remained "shorter and more retruded" than the dentate controls (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11870634/" rel="noopener nofollow" target="_blank">denture 3D study</a>); a stereophotogrammetry study of 30 edentulous and 30 dentate people quantified the same residual collapse (<a href="https://pubmed.ncbi.nlm.nih.gov/35431030/" rel="noopener nofollow" target="_blank">facial proportion study</a>). Reviews now describe hyaluronic-acid filler as an adjunct for the perioral collapse that a prosthesis cannot fully correct (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9570954/" rel="noopener nofollow" target="_blank">HA in edentulous patients</a>). The order is fixed: teeth, then prosthesis, then — if anything — filler.</p>
        `,
      },
    ],
  },
  {
    id: 'perioral',
    title: 'The perioral side: lips, lines, corners and the base beneath',
    intro: 'Smaller trials and one surgery with case series. Every row here treats a symptom of the three drivers; the tier says how well it was tested, and the text says whether it treats the cause.',
    sections: [
      {
        id: 'peri-filler-lips',
        category: 'perioral',
        title: 'Hyaluronic-acid filler to the lips and lip lines: randomised trials, 93% responders — and the wrong tool for the long lip',
        tldr: 'In 180 adults with thin lips randomised to a small-particle HA filler or no treatment, 93% improved a grade at eight weeks against 29% untreated, with visible results in most at six months; a flexible gel matched the standard with 20% less product and held 48 weeks; treating lips and lip lines together improved both in 76% against 12%. Strong for volume. Volume is not what the aging upper lip has lost — restore the border and the show, not the size.',
        evidence: 'strong',
        focus: 'lips',
        note: 'Best for: a thinned vermilion, a faded border, radial lines — in 0.5–1 ml, from an injector who declines to add length',
        sessions: '1, repeated at 9–12 months',
        downtime: '3–5 days of swelling; bruising',
        cost: '€350–600',
        bodyHtml: `
          <p>The trials are real. In the pivotal study, 180 adults aged 18–65 with very thin or thin lips were randomised 3:1 to up to 1.5 ml of small-gel-particle HA per lip or no treatment: 93% of treated lips improved at least one grade on the validated fullness scale at eight weeks against 29% untreated, self-rated improvement was 97% at eight weeks and 74% at 24, with swelling in 58% and bruising in 44%, mostly mild (<a href="https://pubmed.ncbi.nlm.nih.gov/22759255/" rel="noopener nofollow" target="_blank">lip filler pivotal trial</a>). Treating the lip and the radial lines together produced treatment success in 76% against 11.6% and an "aesthetically meaningful improvement in perioral rhytides" (<a href="https://pubmed.ncbi.nlm.nih.gov/25828037/" rel="noopener nofollow" target="_blank">lips and lip lines trial</a>); a flexible gel designed for the moving lip was non-inferior to the standard at eight weeks with about 20% less volume and held fullness and wrinkle improvement to 48 weeks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8021234/" rel="noopener nofollow" target="_blank">flexible lip filler trial</a>). The <a href="/fillers#use-lips">filler guide</a> and the <a href="/thin-lips">thin lips guide</a> grade the products.</p>
          <p>Then the caveat the trials cannot answer, because they enrolled thin lips rather than aged ones: the aging upper lip has lengthened and thinned, not shrunk, and "isolated volume augmentation is not a causal method of upper lip rejuvenation" (<a href="https://pubmed.ncbi.nlm.nih.gov/18639513/" rel="noopener nofollow" target="_blank">MRI study</a>). Filler that restores the white roll, defines the Cupid's bow and everts the border a little gives back vermilion show without length; filler that adds a millilitre to the body of a long lip adds weight to a curtain that already hangs too low. Half a millilitre, placed at the border, by someone who says no to more, is the version the aging smile needs.</p>
        `,
      },
      {
        id: 'peri-lip-lift',
        category: 'perioral',
        title: 'The subnasal lip lift: the only treatment that shortens the philtrum — case series, results holding one to five years',
        tldr: 'A bullhorn of skin under the nose is removed and the lip lifted, shortening the philtrum by the 4–6 mm that aging added and everting the vermilion. Two systematic reviews found nine and four studies, all series and cohorts: consistent improvement on anthropometric measures and satisfaction, results maintained 12 to 59 months, surgical lifts outlasting non-surgical ones, no randomised trial. A scar at the nostril base, in exchange for the cause treated.',
        evidence: 'emerging',
        focus: 'lips',
        note: 'Best for: a philtrum over 18 mm with no upper tooth show at rest, in a face that has already had the teeth and the corners assessed',
        sessions: 'Once',
        downtime: '1–2 weeks; scar matures over a year',
        cost: '€2,500–5,000',
        bodyHtml: `
          <p>If the aging upper lip is a longer curtain, the lift shortens the rod. Through an incision hidden in the crease at the base of the nose, a bullhorn-shaped strip of skin is removed and the lip advanced upward, restoring the 14-mm philtrum of youth, re-exposing the upper incisors at rest and rolling the vermilion outward. The 2023 systematic review found nine studies with quantitative measurements — eight surgical, one non-surgical — with "surgical procedures seem to have better longevity", good satisfaction and no severe complaints (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9976673/" rel="noopener nofollow" target="_blank">lip lift techniques review</a>); the second review found four eligible studies, 92% of patients women with a mean age of 36.6, the bullhorn excision in three of the four, and improvement on anthropometry and satisfaction "maintaining results for varying periods of time (from 12 to 59.1 months)" (<a href="https://pubmed.ncbi.nlm.nih.gov/35253108/" rel="noopener nofollow" target="_blank">subnasal lip lift review</a>). The philtral-height study offers the measurement to plan it by (<a href="https://pubmed.ncbi.nlm.nih.gov/38643687/" rel="noopener nofollow" target="_blank">philtral height</a>).</p>
          <p>The tier reflects the evidence, not the logic: no one has randomised a lip lift, and the series report satisfaction more than measured relapse. The risks are a visible scar if it is placed or closed badly, a widened nostril base, a lip that no longer closes at rest if too much is taken, and — in a young face with a naturally long lip — an expression that is no longer yours. It is a surgeon's operation, done after the teeth are the length they should be, because a lifted lip over worn incisors shows the wear.</p>
        `,
      },
      {
        id: 'peri-neuromodulator',
        category: 'perioral',
        title: 'Botulinum toxin for the mouth: the gummy smile in a meta-analysis, the corners and the lip flip in small studies',
        tldr: 'Two to four units into the lip elevators reduce gum show by a mean 3.4 mm at two weeks across 17 studies, lasting three months; a few units into the depressor anguli oris lift downturned corners in retrospective series; four to six units along the upper lip evert the border a millimetre for two months. Reversible, quarterly, and the cheapest way to test whether a surgical version is worth it.',
        evidence: 'moderate',
        focus: 'lips',
        note: 'Best for: a gummy smile, a stern or sad set to the corners, a smile that has lost its lift — as a trial before surgery',
        sessions: 'Every 3–4 months',
        downtime: 'None',
        cost: '€100–250',
        bodyHtml: `
          <p>The muscles of the mouth are the one thing on this page that changes in a fortnight. For the gummy smile, a meta-analysis of 17 studies found a mean 3.42 mm reduction in gingival exposure at two weeks, effective for at least twelve weeks and back near baseline by 24 — best for smiles showing up to 4 mm of gum (<a href="https://pubmed.ncbi.nlm.nih.gov/34652491/" rel="noopener nofollow" target="_blank">gummy smile meta-analysis</a>). For corners that turn down, a few units into the depressor anguli oris lets the elevators win, with the evidence resting on a retrospective series and anatomical mapping (<a href="https://pubmed.ncbi.nlm.nih.gov/35139057/" rel="noopener nofollow" target="_blank">depressor anguli oris series</a>). For the thin upper border, the "lip flip" everts the vermilion by a millimetre for two to three months in small studies (<a href="https://pubmed.ncbi.nlm.nih.gov/40377719/" rel="noopener nofollow" target="_blank">lip flip review</a>). Each is graded on its own in the <a href="/botox">Botox guide</a>.</p>
          <p>The aging-smile use is diagnostic as much as cosmetic: a mouth that reads better after four units in the corners has told you the surgeon's operation is worth discussing, and one that does not has saved you the fee. The risks are functional — a weak lip that spills a drink, a crooked smile for three months from a misplaced unit — and the injector who does the lower face weekly is the one to choose.</p>
        `,
      },
      {
        id: 'peri-resurfacing',
        category: 'perioral',
        title: 'Resurfacing the upper lip: CO2 laser against dermabrasion in split-face trials — a small edge to the laser, a raw week either way',
        tldr: 'Twenty women had half the upper lip treated with dermabrasion and half with a CO2 laser: the laser side had more redness at a month and a small but significantly greater wrinkle improvement at six, and 13 of 20 preferred it; a second split-face trial of 15 found no difference in wrinkle score at four months and faster healing with dermabrasion. A newer comparison of two fractional systems improved lines and pigment in 36 women. The treatment for the etched, static lines the toxin and filler cannot reach.',
        evidence: 'moderate',
        focus: 'lips',
        note: 'Best for: the radial lines etched into the white lip at rest, in lighter skin, after the muscle and the border have been addressed',
        sessions: '1 ablative, or 3 fractional',
        downtime: '7–10 days raw; redness for weeks (ablative)',
        cost: '€600–2,000',
        bodyHtml: `
          <p>The lines that fan from the red lip into the white are dynamic while they are young and etched once the elastin has gone; the etched ones are removed by taking the surface off. Two split-face trials set the standard. In 20 women, half the perioral area was dermabraded and half treated with an ultrapulsed CO2 laser, judged by ten blinded plastic surgeons: the laser side had a significantly higher erythema score at one month and "a small but significantly greater improvement in perioral wrinkles at 6 months", and 13 of the 20 judged the laser side the better result despite more intra-operative pain — though asked which they would recommend to a friend, they split evenly (<a href="https://pubmed.ncbi.nlm.nih.gov/11083571/" rel="noopener nofollow" target="_blank">dermabrasion vs CO2 trial</a>). In 15 volunteers, superpulsed CO2 on one side and dermabrasion on the other gave no significant difference in wrinkle score at four months, with less crusting and faster re-epithelialisation after dermabrasion (<a href="https://pubmed.ncbi.nlm.nih.gov/10871933/" rel="noopener nofollow" target="_blank">dermabrasion vs superpulsed CO2</a>). In a 2025 randomised comparison, three sessions of a 1,550 nm erbium-glass laser or a combined Er:YAG and Nd:YAG protocol both improved supralabial lines and pigmentation in 36 women with darker skin types (<a href="https://pubmed.ncbi.nlm.nih.gov/40537663/" rel="noopener nofollow" target="_blank">fractional laser comparison</a>).</p>
          <p>Resurfacing changes the surface stage of the lip classification and nothing else — a lengthened lip is a lengthened lip with smoother skin. The <a href="/lip-lines">lip lines guide</a> grades every option for the lines in depth, including the retinoid that makes the result last and the pigment risk in darker skin.</p>
        `,
      },
      {
        id: 'peri-support',
        category: 'perioral',
        title: 'Filling the base: chin, marionette, pyriform and the perioral compartments — support for a lip the bone has let fall',
        tldr: 'The maxilla and pyriform aperture recede, the prejowl mandible resorbs and the perioral fat compartments deflate; filler or fat placed on the bone under the lip and at the corners restores the platform. The chin has a pivotal randomised trial, the marionette area a phase 3 programme, and perioral fat a 65-versus-65 comparison in which the fat group improved twice as much. Structural support, not lip volume — and the piece the lip-only clinic skips.',
        evidence: 'moderate',
        focus: 'frame',
        note: 'Best for: the lip that has fallen back, deep folds at the corners, a weak chin — before any more product goes into the red lip',
        sessions: '1, repeated at 12–24 months (filler); once (fat)',
        downtime: '3–7 days swelling; 1–2 weeks for fat',
        cost: '€400–900 per area (filler); €2,000–4,000 (fat)',
        bodyHtml: `
          <p>Surgeons learned it from the skeleton: the maxilla, the pyriform region and the prejowl mandible "resorb in a specific and predictable manner with aging", and "failure to address changes in the skeletal foundation of the face may limit the potential benefit of any rejuvenation procedure" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3404279/" rel="noopener nofollow" target="_blank">facial skeleton review</a>). Filler placed deep on the bone at the pyriform aperture and the chin, and in the marionette and prejowl area, rebuilds the platform the lip rests on; the chin has its own pivotal randomised trial and the marionette and perioral area a phase 3 programme, both graded in the <a href="/fillers#use-chin">filler guide</a> and the <a href="/marionette-lines">marionette lines guide</a>. For the deflated perioral compartments, a comparison of 65 facelift patients with perioral fat transfer against 65 without found the fat group had "a two times more significant improvement in perioral aesthetics" on blinded wrinkle-scale review at a year or more (<a href="https://pubmed.ncbi.nlm.nih.gov/26313834/" rel="noopener nofollow" target="_blank">perioral fat transfer study</a>), and structural fat with CO2 resurfacing improved fine lines, folds and pigment on blinded scoring in 17 women (<a href="https://pubmed.ncbi.nlm.nih.gov/21250790/" rel="noopener nofollow" target="_blank">fat and CO2 study</a>).</p>
          <p>For the edentulous, reviews now describe the same logic — HA to correct the uncompensated bone loss a prosthesis leaves behind (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9570954/" rel="noopener nofollow" target="_blank">HA in edentulous patients</a>). The order does not change: replace the teeth, then support the base, then decide whether the lip itself needs anything.</p>
        `,
      },
    ],
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The mouth is where two professions\' mistakes meet — irreversible dentistry and overfilled lips — and where the marketing is loudest.',
    sections: [
      {
        id: 'safety-veneers',
        category: 'safety',
        title: 'Veneers and crowns: enamel that does not grow back, the 10-year complication rates, and the "full set" abroad',
        tldr: 'A veneer removes enamel and commits the tooth for life; the ten-year technical complication rate runs from 6% for lithium disilicate to 41% for feldspathic porcelain, and a veneer bonded to dentine or on a grinder fails sooner. A "full set" of crowns replaces far more tooth than a veneer and is sold as the same thing. Veneer only the teeth that show, bond to enamel, treat the grinding first, and keep the originals\' shade natural.',
        bodyHtml: `
          <p>The meta-analyses that give veneers their tier also give the warnings: at 10.4 years, feldspathic veneers had technical complications in 41.5% and aesthetic ones in 19.6%, lithium disilicate 6.1% and 1.9% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12076113/" rel="noopener nofollow" target="_blank">veneer meta-analysis</a>); survival falls when the veneer is bonded to dentine or an old filling rather than enamel (<a href="https://pubmed.ncbi.nlm.nih.gov/38604905/" rel="noopener nofollow" target="_blank">substrate meta-analysis</a>); and no estimate exists beyond twenty years (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8184312/" rel="noopener nofollow" target="_blank">survival review</a>). Every veneer is replaced eventually, each time with a little more tooth gone.</p>
          <p>The "smile makeover" abroad usually means full crowns — the tooth ground to a peg — on all the upper and lower front teeth, in a uniform bright white that reads as artificial in daylight and hides the aging lip not at all. Crowned teeth need root treatment more often, and the work is done far from the dentist who will manage the failure. Treat the grinding, whiten first, bond where bonding will do, veneer only the six to eight teeth that show, choose lithium disilicate on enamel, and pick a shade against your sclera.</p>
        `,
      },
      {
        id: 'safety-whitening',
        category: 'safety',
        title: 'Whitening: sensitivity, gums, the EU peroxide limit, and what it will not change',
        tldr: 'Transient sensitivity is common and reduced by desensitising toothpaste; gum irritation comes from ill-fitting trays; EU law caps hydrogen peroxide at 6% and restricts anything above 0.1% to dentists — so the beauty-salon "laser whitening" is either illegal or 0.1%. Fillings, crowns and veneers do not bleach, and a chalky-white shade ages a face as surely as a yellow one.',
        bodyHtml: `
          <p>Peroxide reaches the pulp, and the sensitivity that follows is the commonest complaint, worse with in-office concentrations; a systematic review of randomised trials found desensitising toothpastes reduce it (<a href="https://pubmed.ncbi.nlm.nih.gov/39078468/" rel="noopener nofollow" target="_blank">desensitising toothpaste review</a>). Gum burns come from trays that leak gel; dentist-made trays fit. The regulatory line in the EU is simple: products above 0.1% hydrogen peroxide (or the equivalent carbamide) may only be sold to and used by dental practitioners, up to 6%; a salon offering "laser whitening" without a dentist is using a legal 0.1% product with a blue light for theatre, or an illegal one.</p>
          <p>Whitening lifts natural tooth only. Existing fillings, bonding, crowns and veneers keep their shade and are matched afterwards, so bleach before restorative work, not after. And the target is a shade in harmony with the whites of the eyes and the skin: the studies that rate whitened teeth as more attractive used natural-looking whitening, and a bright, opaque, uniform white on an older face reads as false rather than young.</p>
        `,
      },
      {
        id: 'safety-lips',
        category: 'safety',
        title: 'Lips: the vascular emergency, the overfilled lip that ages you, the lift scar and the flip that spills your coffee',
        tldr: 'HA filler in the lip can occlude the labial artery — blanching, pain out of proportion, a dusky lip within hours, hyaluronidase within hours. More commonly it does what the MRI study warned: adds volume and weight to a lip that has lengthened, producing the "blown-up" lip that reads as done and old at once. The lip lift leaves a scar at the nostril base and can widen the nose or stop the lips closing; the toxin flip weakens the lip for weeks.',
        bodyHtml: `
          <p>The lip is vascular and unforgiving. The superior and inferior labial arteries run through it, and filler injected into or compressing one produces blanching, disproportionate pain and a dusky, mottled lip — a same-day emergency treated with hyaluronidase, which is the reason to choose HA over anything permanent here; the <a href="/fillers#safety-vascular">filler guide</a> covers the numbers. The commoner harm is aesthetic: the trials enrolled thin young lips, and the aging upper lip is long and thin, so a millilitre added to its body lowers the curtain further and produces the protruding, shelf-like "trout" lip of the tabloid. The MRI study's warning about the "unnatural blown-up look" is the sentence to remember (<a href="https://pubmed.ncbi.nlm.nih.gov/18639513/" rel="noopener nofollow" target="_blank">MRI study</a>). Filler migrating above the border into the white lip, and lumps at the border, are dissolved.</p>
          <p>The lip lift trades a permanent result for a permanent scar: fine and hidden in a good closure, visible in a poor one; a widened alar base, a lip that will not close at rest, or an over-shortened philtrum on a young face are the surgeon's errors and are hard to reverse. The toxin flip and corner treatments produce weeks of a lip that cannot purse, whistle or hold a straw, and a misplaced unit gives a crooked smile until it wears off. Every one of these is an argument for the dental work first — nothing done to the teeth carries a vascular risk, and most of it is reversible.</p>
        `,
      },
      {
        id: 'safety-ortho-perio',
        category: 'safety',
        title: 'Aligners and gum surgery: recession in a thin gum, root shortening, retention for life, and the palate',
        tldr: 'Moving teeth through a thin gum can pull it further down; a periodontal assessment comes before any adult aligner plan, and the gum may need grafting first. Roots shorten a little with any orthodontics; teeth relapse without retainers worn for life. Gum grafting has a sore donor palate for a week if the patient\'s own tissue is used, and a matrix if not.',
        bodyHtml: `
          <p>Adult front teeth sit in thinner bone and gum than adolescent ones, and moving them outward through it is one of the recognised causes of recession — the reason an adult aligner plan starts with a periodontal chart, and the reason recession is sometimes grafted before the teeth move. The systematic reviews' low-to-moderate certainty (<a href="https://pubmed.ncbi.nlm.nih.gov/31651082/" rel="noopener nofollow" target="_blank">aligner review</a>) is also a warning about predictability: what the software animates and what the tooth does are not the same, and a plan that promises a big movement in a few months deserves a second opinion. All orthodontics shortens roots slightly and all of it relapses without retention; the retainer is for life.</p>
          <p>Gum grafting's costs are the donor site — a raw palate for a week when the patient's own connective tissue is used, avoided by the acellular dermal matrix at the price of less keratinised tissue (<a href="https://pubmed.ncbi.nlm.nih.gov/37552186/" rel="noopener nofollow" target="_blank">matrix vs graft meta-analysis</a>) — and a result that depends on the cause of the recession being gone: the hard brush, the smoking, the clenching. A periodontist who does it weekly, and a photograph at six months.</p>
        `,
      },
      {
        id: 'safety-claims',
        category: 'safety',
        title: 'How to read a "smile makeover" before-and-after',
        tldr: 'A posed smile, studio light, a head tilted back, lipstick, and a "before" taken with the lips at rest: five ways to make any set of veneers look like a rejuvenation. Ask for both photographs in the same expression, the same light, without make-up, at rest and speaking as well as smiling — and ask which rows of this page the package actually contains.',
        bodyHtml: `
          <p>The smile literature's own measurement problem is the makeover industry's method. A posed smile shows less lip movement than a spontaneous one and a low-angle studio light erases the philtrum and the corners (<a href="https://pubmed.ncbi.nlm.nih.gov/35148479/" rel="noopener nofollow" target="_blank">forced versus posed smile</a>); a "before" at rest against an "after" smiling is not a comparison at all. The other tell is uniformity: real teeth vary in shade and translucency along the arch, and the flat bright white of a full set is recognisable across a room.</p>
          <p>Ask for the two photographs in the same expression and light, at rest and on speech as well as smiling, and in profile. Ask which teeth were veneered, which crowned, how much enamel was removed, and what the plan is at ten years. Ask whether the lip was treated, and with what. And measure the result the way the research does — how much upper tooth shows with the lips parted, and what shows when you speak — because that, not a photograph, is what a face across a table sees.</p>
        `,
      },
    ],
  },
  {
    id: 'faq',
    title: 'Frequently asked questions',
    intro: 'Quick answers to what people actually ask.',
    sections: [
      {
        id: 'faq-teeth-gone',
        category: 'faq',
        title: 'Why can\'t I see my upper teeth any more when I talk?',
        tldr: 'The lip lengthened by about 5 mm and thinned, and the incisal edges wore down to meet it. Lengthen the teeth, shorten the lip, or both — not more filler.',
        bodyHtml: `
          <p>Tooth show at rest is the most age-linked number in the smile literature (<a href="https://pubmed.ncbi.nlm.nih.gov/349139/" rel="noopener nofollow" target="_blank">Vig and Brundo</a>); it falls because the philtrum grows from 14 to 20 mm (<a href="https://pubmed.ncbi.nlm.nih.gov/38643687/" rel="noopener nofollow" target="_blank">philtral height</a>) while the edges of the incisors wear. A ruler on the philtrum and a look at the edges tells you which dominates; bonding restores the edge in a visit, the lift restores the lip in an operation.</p>
        `,
      },
      {
        id: 'faq-how-white',
        category: 'faq',
        title: 'How white should my teeth be?',
        tldr: 'No whiter than the whites of your eyes, and not uniform. Whitened natural teeth were rated better than darkened ones; opaque bright white reads as false.',
        bodyHtml: `
          <p>In the rating study, whitened natural teeth drew the best judgements and darkened ones the worst (<a href="https://pubmed.ncbi.nlm.nih.gov/34363891/" rel="noopener nofollow" target="_blank">tooth colour and judgement</a>) — the whitening was natural-looking. Age darkens teeth by a measurable four units of lightness over eight years (<a href="https://pubmed.ncbi.nlm.nih.gov/28858417/" rel="noopener nofollow" target="_blank">longitudinal colour</a>), and bleaching reverses that; it does not need to go further. Match the sclera in daylight and stop.</p>
        `,
      },
      {
        id: 'faq-bonding-veneers',
        category: 'faq',
        title: 'Bonding or veneers?',
        tldr: 'Bonding first: no enamel removed, 92% at ten years, repairable. Veneers when colour, shape and wear all need changing and the grinding has stopped.',
        bodyHtml: `
          <p>Composite build-ups survived 91.7% at ten years and 98.5% functionally at fifteen without removing enamel (<a href="https://pubmed.ncbi.nlm.nih.gov/33491402/" rel="noopener nofollow" target="_blank">composite study</a>); porcelain veneers 96% at ten with permanent enamel loss and material-dependent complications (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12076113/" rel="noopener nofollow" target="_blank">veneer meta-analysis</a>). For a worn edge, bond. For a tooth that is dark, chipped and mis-shaped at once, veneer — lithium disilicate, on enamel, on the teeth that show.</p>
        `,
      },
      {
        id: 'faq-filler-or-lift',
        category: 'faq',
        title: 'Filler or a lip lift?',
        tldr: 'Measure the philtrum. Under 15 mm with a thin red: a small border filler. Over 18 mm with no tooth show: the lift, or longer teeth, and filler only at the border.',
        bodyHtml: `
          <p>Filler has the randomised trials (<a href="https://pubmed.ncbi.nlm.nih.gov/22759255/" rel="noopener nofollow" target="_blank">pivotal trial</a>) and the lift has case series (<a href="https://pubmed.ncbi.nlm.nih.gov/35253108/" rel="noopener nofollow" target="_blank">lip lift review</a>), but the trials enrolled thin lips and the aging lip is long: "isolated volume augmentation is not a causal method" (<a href="https://pubmed.ncbi.nlm.nih.gov/18639513/" rel="noopener nofollow" target="_blank">MRI study</a>). The measurement decides; the toxin flip and a border filler are the reversible ways to preview more vermilion before committing to a scar.</p>
        `,
      },
      {
        id: 'faq-order',
        category: 'faq',
        title: 'Dentist first or aesthetic doctor first?',
        tldr: 'Dentist. Teeth are the frame the lip hangs on, most dental repairs are cheaper and better-evidenced, and a lip treated over worn or missing teeth shows the wear.',
        bodyHtml: `
          <p>Hygienist, then whitening, then edges and gum, then any orthodontics, then implants for gaps — and only then the corners, the border and the length of the lip. The lifted or filled lip reveals the teeth behind it; make them worth revealing. The one exception is the toxin trial for the corners or gum, which is reversible and costs a hundred euros.</p>
        `,
      },
      {
        id: 'faq-men',
        category: 'faq',
        title: 'Does this apply to men?',
        tldr: 'More so: men\'s lips lengthen and corners drop more with age, and their tooth show falls faster. The fixes are the same; the lip filler is the one to be most conservative with.',
        bodyHtml: `
          <p>The 265-person study found upper-lip lengthening and commissure descent with age "more markedly in men" and a sharper fall in upper incisor display (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8601479/" rel="noopener nofollow" target="_blank">incisor display study</a>). Whitening, bonding, gum grafting, implants and a conservative lift are gender-neutral; a filled male lip rarely is.</p>
        `,
      },
      {
        id: 'faq-how-long',
        category: 'faq',
        title: 'How long do the results last?',
        tldr: 'Whitening 1–2.5 years; bonding a decade with repairs; veneers 10–20; gum grafts and implants decades; filler 9–12 months; toxin 3; a lip lift years.',
        bodyHtml: `
          <p>The survival numbers are the dental side's strength: 96% of veneers and implants at ten years, 92% of anterior composites, root coverage that holds if the cause is gone. The aesthetic side is a calendar — filler at nine to twelve months, toxin at three — except the lift, whose series report one to five years of maintained result (<a href="https://pubmed.ncbi.nlm.nih.gov/35253108/" rel="noopener nofollow" target="_blank">lip lift review</a>) and whose scar is permanent either way.</p>
        `,
      },
      {
        id: 'faq-cost-ladder',
        category: 'faq',
        title: 'What does it all cost?',
        tldr: '€80 to €30,000: a hygienist and a night guard at the bottom, whitening and bonding in the low hundreds, a lift or a set of veneers in the thousands, an implant arch at the top.',
        bodyHtml: `
          <p>Indicative European private prices, to be confirmed in writing. <strong>€5–150:</strong> whitening toothpaste, lip SPF, a hygienist visit, a night guard, a toxin trial of the corners — the base and the cheapest reversible tests. <strong>€200–900:</strong> peroxide whitening, one or two bonded edges, a lip-border filler, resurfacing of the upper lip. <strong>€600–1,500 per site:</strong> a gum graft, a papilla injection course, aligner retainers. <strong>€2,500–6,000:</strong> aligners, a lip lift, a chin-and-marionette filler plan, perioral fat. <strong>€800–1,800 per tooth, €2,000–4,000 per implant:</strong> veneers and replacements, the permanent tier, on the teeth that show. Spend from the dentist outward.</p>
        `,
      },
    ],
  },
];

export const focusLabels: Record<FocusArea, string> = {
  teeth: 'Teeth',
  gums: 'Gums',
  lips: 'Lips & mouth',
  frame: 'The frame',
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
