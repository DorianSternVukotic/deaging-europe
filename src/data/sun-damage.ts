/**
 * Sun damage (photoaging) guide — single source of truth (problem template).
 *
 * Consumed by /sun-damage. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: sun damage is the one aging problem with a randomised
 * trial showing that stopping the cause prevents cancer, and the one where
 * the cosmetic complaint (texture, spots, redness) shares its skin with a
 * medical one (actinic keratoses, squamous-cell carcinoma, melanoma). The
 * four faces of photoaging each have a tool with strong evidence —
 * retinoids for texture, light and lasers for colour, fluorouracil and
 * photodynamic therapy for the precancerous field — and none of them
 * outranks sunscreen, which has the only cancer-prevention and
 * photoaging-prevention trials on the site.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'texture' | 'pigment' | 'vascular' | 'precancer' | 'prevention' | 'general';

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
  'Sun damage is four problems on one patch of skin: leathery texture and coarse wrinkles from fragmented elastin, brown spots and mottling from overworked melanocytes, red vessels and blotching on the neck and chest, and rough precancerous patches that turn into squamous-cell carcinoma in about one in ten over a decade. Each has its own tool; the self-check on this page sorts them.',
  'Sunscreen is the only anti-aging treatment with cancer-prevention trials: in 1,621 Australians randomised to daily use, squamous-cell carcinomas fell by 39%, invasive melanomas by 73% over the following decade, and measured skin aging by 24%. In a one-year study, daily sunscreen alone improved existing texture and pigmentation by 40–52%.',
  'Retinoids are the one topical licensed for photodamage: eight randomised tretinoin trials in 1,361 patients and a 563-patient tazarotene trial show fewer wrinkles, less mottling and restored collagen on biopsy. A five-week course of fluorouracil cream cut squamous-cell carcinomas needing surgery by 75% in the year after, in 932 veterans; 500 mg of nicotinamide twice daily cut new skin cancers by 23% in a phase 3 trial.',
  'Colour and texture want different machines: intense pulsed light cleared telangiectasia in about 80% and pigmentation in 60–70% of faces in a blinded split-face trial and did nothing for wrinkles; resurfacing lasers rebuild texture; Q-switched lasers beat fractional CO₂ for hand spots. Photodynamic therapy treats the cancer field and, with light, rejuvenates.',
  'The habits are the dose: most exposure is incidental — car side windows pass a tenth of UVA the windscreen blocks, tanning beds before 35 raise melanoma risk by 75%, and a "base tan" protects almost nothing. Daily high-SPF use lowered vitamin D by a small, real amount in a 628-person trial, which a supplement fixes for pennies.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'photo-anatomy',
    kind: 'Ultraviolet',
    title: 'Two wavelengths doing two kinds of damage',
    blurb: 'UVB burns the surface and mutates DNA — the cancer wavelength; UVA reaches the dermis through cloud and glass, generates free radicals and switches on the enzymes that shred collagen and elastin — the wrinkle wavelength. Both build a mutated field over decades.',
  },
  {
    id: 'dose-habits',
    kind: 'Dose',
    title: 'Decades of incidental exposure, not just holidays',
    blurb: 'The dose that ages a face comes from commuting, driving, lunch outside and winter walks — UVA through side windows, off snow and water, on cloudy days — plus the tanning beds that raise melanoma risk by 75% when first used before 35.',
  },
  {
    id: 'type-skin-of-color',
    kind: 'Skin type',
    title: 'Your phototype decides which damage you get',
    blurb: 'Fair skin burns, wrinkles, freckles and grows precancers; darker skin resists the burn and the cancer but pigments from visible light as well as ultraviolet, and photoages a decade or two later with the same elastin loss underneath.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'photo-anatomy',
    category: 'concept',
    title: 'What sun damage actually is',
    tldr: 'UVB damages DNA in the epidermis and drives the collagen-cutting enzymes; UVA penetrates to the dermis, floods it with free radicals and induces an elastase that dissolves elastin into the tangled debris called solar elastosis. The result is thick, yellow, leathery, mottled, veiny skin carrying mutations.',
    bodyHtml: `
      <p>Ultraviolet light injures skin in two bands. UVB (290–320 nm) is absorbed in the epidermis, where it burns, forms the DNA lesions that accumulate into the mutations behind squamous-cell carcinoma and melanoma, and switches on the matrix metalloproteinases — MMP-1, -3 and -10 — that cut collagen (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9090247/" rel="noopener nofollow" target="_blank">UVB and MMPs</a>). UVA (320–400 nm) is thirty times more abundant, passes through cloud and window glass, reaches the dermis, generates reactive oxygen species and induces MMP-12, an elastase that dissolves elastic fibres and leaves behind the tangled, non-functional material called solar elastosis (<a href="https://www.nejm.org/doi/full/10.1056/NEJM199711133372003" rel="noopener nofollow" target="_blank">NEJM review</a>; <a href="https://www.jidsponline.org/article/S1087-0024(15)30515-3/pdf" rel="noopener nofollow" target="_blank">pathogenesis review</a>).</p>
      <p>Over decades the skin thickens with elastotic debris and thins in collagen, the melanocytes overproduce in patches, the small vessels dilate, and the epidermis carries clones of mutated cells — the "field" from which actinic keratoses and carcinomas grow. That is why sun damage is four cosmetic problems and one medical one on the same skin, and why the treatments on this page are sorted by the sign rather than by the machine.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'How much of aging is the sun, and who shows it',
    tldr: 'Compare the skin of your inner upper arm with the back of your hand or your face: the difference is photoaging. Dermatologists grade it from Glogau I (none) to IV (leathery, yellow, precancers); drivers show it on the window side; fair skin shows it earliest, darker skin latest.',
    bodyHtml: `
      <p>The cleanest demonstration is your own body: the inner upper arm, which rarely sees sun, keeps its texture and colour into old age while the face, neck, hands and forearms of the same person coarsen, mottle and wrinkle. The asymmetry shows up wherever exposure does — in a study of facial aging, the side of the face that faces the car window aged measurably more, attributed to cumulative UVA through glass (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2946854/" rel="noopener nofollow" target="_blank">asymmetric aging study</a>). Clinicians grade the whole picture on Glogau's four-step scale, from mild pigment change with no wrinkles (I) to the yellow, leathery, precancer-bearing skin of type IV. Fair, freckling, burn-prone skin reaches type IV decades before olive or brown skin, whose extra melanin absorbs much of the dose; every phototype loses elastin underneath, and the differences by skin type are laid out in the reviews (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12018068/" rel="noopener nofollow" target="_blank">skin-type review</a>).</p>
    `,
  },
  {
    id: 'why-hard',
    category: 'concept',
    title: 'Why the cosmetic problem and the medical one share a page',
    tldr: 'The skin that looks sun-damaged is a cancer field: rough patches take about two years to become a carcinoma, and 6–10% of people with them get one over a decade. The same trials that cut cancer — sunscreen, fluorouracil, nicotinamide — also improve how the skin looks, and the cosmetic clinic that treats one without checking the other is doing half the job.',
    bodyHtml: `
      <p>Actinic keratoses — the rough, scaly, sandpapery patches on sun-damaged skin — are the visible tips of a mutated field. In a retrospective analysis of 6,691 patients, the interval from a keratosis to a squamous-cell carcinoma at the same site averaged 24.6 months (<a href="https://pubmed.ncbi.nlm.nih.gov/17760601/" rel="noopener nofollow" target="_blank">kinetics study</a>); the lifetime risk of a carcinoma for someone with keratoses followed for ten years is put at 6–10%, and a Swedish cohort of 17,651 patients with the diagnosis carried a raised risk of every skin cancer (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11802505/" rel="noopener nofollow" target="_blank">progression review</a>; <a href="https://www.medicaljournals.se/acta/content/html/10.2340/00015555-3486" rel="noopener nofollow" target="_blank">Swedish cohort</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11164289/" rel="noopener nofollow" target="_blank">field cancerization</a>).</p>
      <p>The good news is that the interventions overlap. Daily sunscreen cut carcinomas and melanomas in a randomised trial and reversed visible photodamage in another; a course of fluorouracil cream that clears keratoses also cut carcinomas needing surgery by three-quarters; photodynamic therapy clears the field and, with light, smooths the skin over it. The ladder on this page starts with stopping the dose, rebuilds the surface with retinoids, picks a machine by the sign — light for colour, lasers for texture — treats the field where there is one, and puts an annual skin check on the calendar for anyone in Glogau III or IV.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-textural',
    category: 'context',
    title: 'Leathery texture, coarse wrinkles, sallow colour',
    tldr: 'Thick, yellowish, coarsely wrinkled skin that looks worn rather than lined — solar elastosis. Retinoids rebuild it slowly; resurfacing lasers rebuild it fast; light-based devices do nothing for it.',
    focus: 'texture',
    bodyHtml: `
      <p>Pinch the cheek and look at the surface under a window: a coarse, criss-crossed texture, a yellowish cast, deep static wrinkles across the cheek and neck, sometimes with small yellow bumps or enlarged pores, is the elastotic type — the dermis has swapped its elastic network for solar debris. This is the Glogau III–IV skin that retinoids were licensed for, that fractional and full-field resurfacing were built for, and that intense pulsed light, which treats colour, leaves unchanged. The <a href="/wrinkles">wrinkles guide</a> covers the fine-line end of the same spectrum.</p>
    `,
  },
  {
    id: 'type-pigment',
    category: 'context',
    title: 'Brown spots and blotchy colour',
    tldr: 'Flat brown lentigines on the face, hands, chest and shoulders, with mottled colour between them — melanocytes that sun has switched on. Sunscreen fades them, retinoids and vitamin C lighten them, light and lasers remove them; the dark-spots guide grades the whole ladder.',
    focus: 'pigment',
    bodyHtml: `
      <p>Flat, sharply edged brown spots that appeared after forty on the face, the backs of the hands, the chest and the shoulders are solar lentigines, and the uneven colour between them is mottled pigmentation — melanocytes that decades of sun have set to overproduce. They are the sign that responds first to sunscreen alone (the one-year study measured a 40–52% improvement in pigmentation), lighten with retinoids and vitamin C, and disappear with intense pulsed light or a Q-switched or picosecond laser. Any spot that is growing, has an irregular edge or several colours, or is new after sixty needs a dermatologist's dermatoscope before a laser — lentigo maligna is a melanoma that starts as a "spot". The <a href="/dark-spots">dark-spots guide</a> grades every treatment.</p>
    `,
  },
  {
    id: 'type-vascular',
    category: 'context',
    title: 'Redness, broken vessels, the blotchy neck and chest',
    tldr: 'Fine red vessels on the nose and cheeks and a red-brown, net-like mottling on the sides of the neck and the V of the chest — poikiloderma of Civatte. Intense pulsed light and pulsed dye lasers clear most of it; nothing topical does.',
    focus: 'vascular',
    bodyHtml: `
      <p>Sun dilates and multiplies the small vessels of the dermis, and on the neck and chest it produces the reddish-brown, mottled, slightly shiny patch with pale skin under the chin called poikiloderma of Civatte — the pattern of a lifetime of open collars. Fine red lines on the nose and cheeks are the facial version. Neither responds to creams; both respond to vessel-targeting light — intense pulsed light cleared more than 80% of the vascular and pigmented components in a 175-patient series — and the treated skin needs the sun kept off it afterward. The <a href="/neck">neck guide</a> covers the neck's other problems.</p>
    `,
  },
  {
    id: 'type-precancer',
    category: 'context',
    title: 'Rough, scaly patches that keep coming back (actinic keratoses)',
    tldr: 'Sandpaper-rough pink or skin-coloured patches on the scalp, forehead, ears, nose, lower lip, forearms and hands that flake off and return — precancers. A field, not a spot; treated with fluorouracil, photodynamic therapy or freezing, and watched for life.',
    focus: 'precancer',
    bodyHtml: `
      <p>Run your fingertips over the forehead, the bald scalp, the tops of the ears, the nose, the lower lip and the backs of the hands. A rough patch you feel before you see it, that flakes and returns in the same place, is an actinic keratosis; several mean the surrounding skin is a mutated field even where it looks normal (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11164289/" rel="noopener nofollow" target="_blank">field cancerization</a>). About a quarter of individual keratoses regress on their own (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8990007/" rel="noopener nofollow" target="_blank">regression analysis</a>); the field does not. Red flags that turn a keratosis into an urgent appointment: a patch that thickens, bleeds, becomes tender, grows a horn or a crust, or fails to heal in a month (<a href="https://www.skincancer.org/skin-cancer-information/actinic-keratosis/actinic-keratosis-warning-signs-and-images/" rel="noopener nofollow" target="_blank">warning signs</a>). Single lesions are frozen; a field is treated with fluorouracil cream or photodynamic therapy, graded below.</p>
    `,
  },
  {
    id: 'dose-habits',
    category: 'context',
    title: 'Where the dose actually comes from',
    tldr: 'Car side windows pass about 11% of UVA where the windscreen passes 1%; ordinary window glass passes UVA; cloud passes most of it; snow and water reflect it. Tanning beds raise melanoma risk 75% when first used before 35. The face is aged by Tuesdays, not by holidays.',
    focus: 'prevention',
    bodyHtml: `
      <p>Sunburn comes from holidays; photoaging comes from the daily dose. Measurements across modern cars found windscreens (laminated glass) blocking 99% of UVA and side windows (tempered glass) only 89% — a tenfold difference in what reaches the driver's window-side cheek and forearm (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11742901/" rel="noopener nofollow" target="_blank">vehicle-glass study</a>); ordinary window glass at home and at work blocks UVB and passes UVA (<a href="https://onlinelibrary.wiley.com/doi/10.1111/phpp.12022" rel="noopener nofollow" target="_blank">window-glass review</a>); cloud attenuates UVA far less than it feels; snow, water and sand reflect it upward under a hat. Tanning beds are the concentrated version: first use before 35 raises melanoma risk by 75% in meta-analysis, and any use by 15% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2913608/" rel="noopener nofollow" target="_blank">indoor-tanning review</a>; <a href="https://onlinelibrary.wiley.com/doi/10.1111/jdv.20586" rel="noopener nofollow" target="_blank">JEADV 2025</a>). A "base tan" is the skin's injury response and protects trivially. The habits that matter are the ones that happen on an ordinary Tuesday.</p>
    `,
  },
  {
    id: 'type-skin-of-color',
    category: 'context',
    title: 'Sun damage in darker skin',
    tldr: 'Brown and black skin burns rarely and grows fewer cancers, but pigments from visible light as well as ultraviolet — melasma and dark patches that ordinary sunscreen does not prevent. Tinted, iron-oxide sunscreen does; lasers need care; the elastin loss underneath is the same, later.',
    focus: 'pigment',
    bodyHtml: `
      <p>Melanin absorbs much of the ultraviolet dose, so Fitzpatrick IV–VI skin burns rarely, keeps its texture longer and grows far fewer keratinocyte cancers — and melanomas in dark skin appear on palms, soles and nails, where nobody looks. Its sun problem is pigment, and the wavelength is broader: visible light, which ordinary sunscreens ignore, produced darker and longer-lasting pigmentation than UVA in darker phototypes, and only formulations containing iron oxides — the tinted sunscreens — blocked it (<a href="https://jddonline.com/articles/impact-of-iron-oxide-containing-formulations-against-visible-light-induced-skin-pigmentation-in-skin-S1545961620P0712X" rel="noopener nofollow" target="_blank">iron-oxide study</a>; <a href="https://jddonline.com/articles/photoprotection-efficacy-of-sun-protection-factor-iron-oxide-formulations-in-diverse-skin-with-melasma-photodamage-S1545961625P9240X/" rel="noopener nofollow" target="_blank">2025 study</a>). Every device on this page carries more pigment risk in darker skin, which the <a href="/dark-spots">dark-spots guide</a> and the <a href="/laser-ipl">laser guide</a> spell out; the elastin loss beneath arrives a decade or two later and answers to the same retinoids.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'The arm test, the fingertip test and the annual look',
    tldr: 'Compare the inner upper arm with the face and hands: the difference is your photoaging. Run fingertips over scalp, ears, nose, lip and hands for rough patches. Photograph in daylight. Anyone with rough patches, many spots or a past skin cancer books a yearly skin check.',
    bodyHtml: `
      <p>Three minutes in daylight. Hold the inner upper arm next to the back of the hand and the cheek: the gap in texture and colour is what the sun did, and what the treatments below can and cannot recover. Run fingertips over the scalp, forehead, ears, nose, lower lip, forearms and hands for the sandpaper roughness of a keratosis, and note any spot that has changed, has an irregular edge or more than one colour, or is new after sixty. Photograph the face, neck, chest and hands straight on in daylight — the pigment and vascular treatments are judged against exactly that picture. Then the audit that decides the plan more than any machine: how much sunscreen actually goes on and how often, whether the neck, ears, chest and hands get any, what you drive and sit beside, and whether you have ever used a sunbed. Rough patches, many spots or a previous skin cancer put a yearly dermatologist's skin check on the calendar before anything cosmetic.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-sunscreen',
    category: 'home',
    title: 'Daily broad-spectrum sunscreen',
    tldr: 'The only anti-aging treatment with cancer trials: 1,621 people randomised to daily use had 39% fewer squamous-cell carcinomas, 73% fewer invasive melanomas over the next decade, and 24% less measured skin aging; in a one-year study, daily sunscreen alone improved existing texture and pigment by 40–52%.',
    evidence: 'strong',
    focus: 'prevention',
    note: 'Best for: everyone, every morning, on the face, neck, ears, chest and hands — the base under every other row',
    sessions: 'Every morning; reapply outdoors',
    downtime: 'None',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>The Nambour trial in Queensland randomised 1,621 adults to daily broad-spectrum sunscreen on the head, neck, arms and hands or to use at their own discretion. After 4.5 years the daily group had 39% fewer squamous-cell carcinomas (rate ratio 0.61) with no effect on basal-cell carcinoma (<a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(98)12168-2/abstract" rel="noopener nofollow" target="_blank">Lancet, 1999</a>); ten years after the trial ended, 11 melanomas had occurred in the daily group against 22, and invasive melanomas 3 against 11 — a 73% reduction (<a href="https://pubmed.ncbi.nlm.nih.gov/21135266/" rel="noopener nofollow" target="_blank">JCO, 2011</a>); and the daily group showed no detectable increase in skin aging on microtopography, 24% less than discretionary users (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>). Existing damage improves too: 32 people applying an SPF 30 sunscreen to the face daily for a year improved on every photoaging measure from week 12, with texture, clarity and mottled pigmentation 40–52% better at week 52 and every subject improved (<a href="https://pubmed.ncbi.nlm.nih.gov/27749441/" rel="noopener nofollow" target="_blank">one-year study</a>).</p>
      <p>The rules that make the trials true: broad-spectrum, SPF 30 or above, enough of it (most people apply a fraction of the amount tested), every morning regardless of weather, carried to the neck, ears, chest and backs of the hands, and reapplied when outdoors. Tinted iron-oxide formulations for anyone whose problem is pigment. No supplement, serum or device on this page ranks above this row.</p>
    `,
  },
  {
    id: 'home-retinoid',
    category: 'home',
    title: 'A prescription retinoid (tretinoin, tazarotene) or adapalene',
    tldr: 'The one topical licensed for photodamage: eight randomised tretinoin trials in 1,361 patients show fewer fine and coarse wrinkles and less mottling; a 563-patient tazarotene trial improved every sign over a year; biopsies show collagen restored. Adapalene 0.3% matched tretinoin in a head-to-head.',
    evidence: 'strong',
    focus: 'texture',
    note: 'Best for: the leathery, mottled type — the base that rebuilds what the sun took, over a year',
    sessions: 'Nightly, indefinitely',
    downtime: 'Weeks of dryness and peeling',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>Retinoids reverse photodamage at its source: they switch off the collagen-cutting enzymes, thicken the epidermis, disperse pigment and drive fibroblasts to lay down new collagen — restored on biopsy in the classic study (<a href="https://www.nejm.org/doi/full/10.1056/NEJM199308193290803" rel="noopener nofollow" target="_blank">NEJM, 1993</a>). The evidence is regulator-grade: a systematic review and meta-analysis of eight randomised, vehicle-controlled tretinoin trials in 1,361 patients found significant improvement in fine and coarse wrinkling and overall photodamage (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/" rel="noopener nofollow" target="_blank">meta-analysis</a>); a 12-month multicentre randomised trial of 0.1% tazarotene cream in 563 patients found significantly greater success than vehicle at 24 weeks for fine wrinkles, mottled pigmentation, lentigines, elastosis and roughness, with further gains to week 52 (<a href="https://pubmed.ncbi.nlm.nih.gov/12437455/" rel="noopener nofollow" target="_blank">tazarotene trial</a>); and adapalene 0.3%, available without prescription in some countries, matched tretinoin 0.05% over 24 weeks in 86 photoaged women (<a href="https://www.jle.com/fr/revues/ejd/e-docs/comparable_efficacy_of_adapalene_0.3_gel_and_tretinoin_0.05_cream_as_treatment_for_cutaneous_photoaging_312613/article.phtml" rel="noopener nofollow" target="_blank">head-to-head</a>). Start two nights a week, expect months of dryness, use it under sunscreen, not in pregnancy. The <a href="/wrinkles">wrinkles guide</a> covers the retinol-to-tretinoin ladder.</p>
    `,
  },
  {
    id: 'home-shade-clothing',
    category: 'home',
    title: 'Hats, clothing, shade and window film',
    tldr: 'A three-inch brim cuts UV to the nose by two-thirds, the cheeks by three-quarters and the neck by 96%; UPF fabric blocks what sunscreen misses; car side windows and home glass pass UVA that a film stops. Physics rather than trials, and free of the reapplication problem.',
    evidence: 'moderate',
    focus: 'prevention',
    sessions: 'Whenever outdoors',
    downtime: 'None',
    cost: '€20–100',
    bodyHtml: `
      <p>Fabric and shade have no reapplication problem. Measurements behind the Skin Cancer Foundation's standard show a three-inch (7.5 cm) brim reducing UV to the nose by 66%, the cheeks by 77% and the neck by 96%, and the foundation now requires UPF 50 fabric and that brim for its seal — with a caveat from a Drexel study that a third of hats sold with UPF claims fall short of European criteria, so brim width is the number to trust (<a href="https://newsblog.drexel.edu/2025/11/10/is-it-time-to-sunset-hats-uv-protection-claims/" rel="noopener nofollow" target="_blank">hat study</a>). Long sleeves in UPF fabric cover the forearms and hands that the Nambour trial protected; a UV film on a car's side windows brings them to windscreen standard (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11742901/" rel="noopener nofollow" target="_blank">vehicle-glass study</a>; <a href="https://onlinelibrary.wiley.com/doi/10.1111/phpp.12022" rel="noopener nofollow" target="_blank">window-glass review</a>); shade between eleven and three removes most of the day's UVB. Moderate because the evidence is dosimetry rather than randomised outcomes; in practice it is the half of photoprotection that people forget.</p>
    `,
  },
  {
    id: 'home-antioxidants-topical',
    category: 'home',
    title: 'Topical vitamin C and niacinamide',
    tldr: 'A 5% vitamin C cream reduced photoaging furrows over six months in a double-blind trial; niacinamide 5% improved fine lines, mottling and elasticity in a split-face RCT. Antioxidants mop up what sunscreen lets through; the supporting cast under it.',
    evidence: 'moderate',
    focus: 'texture',
    sessions: 'Daily, under sunscreen',
    downtime: 'None',
    cost: '€15–60 / month',
    bodyHtml: `
      <p>Sunscreen filters most ultraviolet; what passes generates free radicals that topical antioxidants neutralise, and two have controlled trials on photoaged skin. A 5% vitamin C cream applied for six months reduced deep furrows and improved photodamage against vehicle in a double-blind study (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1034/j.1600-0625.2003.00008.x" rel="noopener nofollow" target="_blank">Humbert 2003</a>); niacinamide 5% reduced fine lines, mottled pigmentation and sallowness and improved elasticity in a 12-week double-blind split-face trial (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1524-4725.2005.31732" rel="noopener nofollow" target="_blank">Bissett 2005</a>). Morning vitamin C under sunscreen, niacinamide at either end of the day, a retinoid at night is the regimen the trials support; the <a href="/wrinkles">wrinkles guide</a> grades the rest of the shelf.</p>
    `,
  },
  {
    id: 'home-nicotinamide',
    category: 'home',
    title: 'Oral nicotinamide, for people who have had skin cancer',
    tldr: 'In a phase 3 trial of 386 people with two or more prior skin cancers, 500 mg twice daily for a year cut new non-melanoma skin cancers by 23% and squamous-cell carcinomas by 30%, with fewer keratoses; a later trial in transplant recipients found no benefit. Cheap, safe, for the high-risk field.',
    evidence: 'moderate',
    focus: 'precancer',
    note: 'Best for: anyone with a previous keratinocyte cancer or a field of keratoses — a vitamin, not a cosmetic',
    sessions: '500 mg twice daily, ongoing',
    downtime: 'None',
    cost: '€5–10 / month',
    bodyHtml: `
      <p>Nicotinamide, the amide form of vitamin B3, replenishes the cellular energy that ultraviolet depletes and supports DNA repair. The ONTRAC trial randomised 386 people who had had at least two non-melanoma skin cancers in the previous five years to 500 mg twice daily or placebo for a year: new non-melanoma skin cancers were 23% fewer, squamous-cell carcinomas 30% fewer, and actinic keratoses 11–20% fewer, with no significant side effects (<a href="https://pubmed.ncbi.nlm.nih.gov/26488693/" rel="noopener nofollow" target="_blank">NEJM, 2015</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9125143/" rel="noopener nofollow" target="_blank">meta-analysis</a>). The counterweight is a later trial in organ-transplant recipients, the highest-risk group, that found no benefit (<a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2203086" rel="noopener nofollow" target="_blank">NEJM, 2023</a>), and the benefit stops when the tablets do. Nicotinamide, not niacin, which flushes; for the high-risk field rather than for looks, and moderate on one positive phase 3 trial and one negative one.</p>
    `,
  },
  {
    id: 'home-vitamin-d',
    category: 'home',
    title: 'Take vitamin D rather than sun',
    tldr: 'In a 628-person randomised trial, a year of daily SPF 50+ lowered vitamin D by a small, real amount and left 46% deficient against 37% of controls; a 1995 trial with SPF 17 found no effect. A daily supplement removes the only medical argument for unprotected sun.',
    evidence: 'moderate',
    focus: 'prevention',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€3–5 / month',
    bodyHtml: `
      <p>The one medical reason people give for skipping sunscreen is vitamin D, and the trials now answer it. The Sun-D trial randomised 628 Australians (median age 52) to daily SPF 50+ for a year or discretionary use: vitamin D rose 1.6 nmol/L in the sunscreen group against 6.8 in controls, a difference of 5.2 nmol/L, and 45.7% of daily users were deficient at a year against 36.9% — small, real, and the authors' conclusion that regular users may need a supplement (<a href="https://pubmed.ncbi.nlm.nih.gov/40927943/" rel="noopener nofollow" target="_blank">Sun-D trial</a>); the earlier 113-person trial with SPF 17 found no effect at all (<a href="https://pubmed.ncbi.nlm.nih.gov/7726582/" rel="noopener nofollow" target="_blank">1995 trial</a>). A daily 1,000–2,000 IU supplement costs pennies and delivers the vitamin without the mutations; the <a href="/supplements">supplements guide</a> covers dosing.</p>
    `,
  },
  {
    id: 'home-oral-photoprotectants',
    category: 'home',
    title: 'Oral photoprotectants: Polypodium leucotomos, flavanols, carotenoids',
    tldr: 'A fern extract raised the dose needed to burn by 29% in 47 volunteers; a meta-analysis of 40 trials finds cocoa flavanols raise it too and collagen and polyphenols improve elasticity, while carotenoids, lycopene and hyaluronic acid do nothing measurable. An SPF of about 1.3 in a capsule; never a substitute.',
    evidence: 'emerging',
    focus: 'prevention',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€20–40 / month',
    bodyHtml: `
      <p>Some swallowed antioxidants raise the ultraviolet dose needed to redden skin. Polypodium leucotomos extract at 480 mg a day raised the minimal erythema dose by 29% in 47 volunteers over 30 days, without measurably reducing DNA damage in biopsies, while oral nicotinamide in the same trial raised neither (<a href="https://pubmed.ncbi.nlm.nih.gov/41182568/" rel="noopener nofollow" target="_blank">intraindividual trial</a>); a five-day gummy course produced smaller, inconsistent gains (<a href="https://pubmed.ncbi.nlm.nih.gov/40095119/" rel="noopener nofollow" target="_blank">gummy study</a>); an antioxidant combination raised the dose against baseline but not against control in a randomised trial (<a href="https://pubmed.ncbi.nlm.nih.gov/22708005/" rel="noopener nofollow" target="_blank">RCT</a>). The systematic review and meta-analysis of 40 randomised trials in 2,119 adults found flavanols raised the erythema dose and collagen and polyphenols improved elasticity, with carotenoids, lycopene and oral hyaluronic acid showing no significant benefit, and heterogeneity everywhere (<a href="https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2025.1582946/full" rel="noopener nofollow" target="_blank">meta-analysis</a>). A 29% rise in burn threshold is an SPF of about 1.3; useful for the person who will be in the sun regardless, and no substitute for a cream with an SPF of 30.</p>
    `,
  },
  {
    id: 'home-aha',
    category: 'home',
    title: 'Glycolic and lactic acids',
    tldr: 'A 22-week double-blind trial of 8% glycolic and lactic creams improved photodamage grades over vehicle in about three-quarters of users; a 5% glycolic formulation has its own controlled trial. Surface smoothing and brightening for the mottled, rough type.',
    evidence: 'emerging',
    focus: 'texture',
    sessions: '2–4 nights a week',
    downtime: 'Stinging; sun sensitivity',
    cost: '€10–40 / month',
    bodyHtml: `
      <p>Alpha-hydroxy acids exfoliate the roughened, pigmented surface of photoaged skin and, over months, modestly thicken the epidermis. In the reference trial, 76% of women on 8% glycolic acid and 71% on 8% lactic acid improved at least one grade of photodamage against 40% on vehicle over 22 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/8651713/" rel="noopener nofollow" target="_blank">Stiller 1996</a>), and a daily 5% glycolic formulation has a double-blind randomised trial in photoaging (<a href="https://www.researchgate.net/publication/13686192_A_Double-Blind_Randomized_Clinical_Trial_on_the_Effectiveness_of_a_Daily_Glycolic_Acid_5_Formulation_in_the_Treatment_of_Photoaging" rel="noopener nofollow" target="_blank">1998 trial</a>). They increase sun sensitivity, which in a guide about sun damage is the caveat: nights only, with the morning sunscreen non-negotiable. The <a href="/chemical-peels">peel guide</a> covers the clinic strengths.</p>
    `,
  },
];

const rx: Section[] = [
  {
    id: 'rx-5fu',
    category: 'rx',
    title: 'Fluorouracil cream for the precancerous field',
    tldr: 'In 932 veterans with prior skin cancers, a single two-to-four-week course of 5% fluorouracil to the face and ears cut squamous-cell carcinomas needing surgery by 75% over the following year and cleared keratoses; two weeks of a raw red face is the price. The best-evidenced field treatment.',
    evidence: 'strong',
    focus: 'precancer',
    note: 'Best for: a field of keratoses on the face, scalp, ears or hands — the course that treats what you can feel and what you cannot',
    sessions: '2–4 weeks twice daily; repeat every 1–3 years',
    downtime: '2–4 weeks of redness, crusting and soreness',
    cost: '€20–60 per course (prescription)',
    bodyHtml: `
      <p>Fluorouracil is a chemotherapy cream that selectively kills the sun-mutated cells of the field, visible keratoses and invisible ones alike; the skin reddens, crusts and peels over two to four weeks and heals smoother. The Veterans Affairs Keratinocyte Carcinoma Chemoprevention trial randomised 932 veterans with at least two prior skin cancers to a single course of 5% fluorouracil or placebo twice daily to the face and ears for up to four weeks: in the following year, squamous-cell carcinomas needing surgery occurred in 1% of the treated group against 4% of controls, a 75% reduction, with the effect fading over four years and no effect on basal-cell carcinoma (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/2666803" rel="noopener nofollow" target="_blank">JAMA Dermatology, 2018</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/29299592/" rel="noopener nofollow" target="_blank">abstract</a>). It also clears most keratoses in the field, and pre-treating with it doubles the effect of daylight photodynamic therapy (<a href="https://www.sciencedirect.com/science/article/pii/S157210002400108X" rel="noopener nofollow" target="_blank">combination RCT</a>). Prescription only, ugly for a fortnight, and the treatment with the strongest cancer-prevention evidence after sunscreen.</p>
    `,
  },
  {
    id: 'rx-pdt',
    category: 'rx',
    title: 'Photodynamic therapy — the field, and photorejuvenation',
    tldr: 'A photosensitising cream activated by red or daylight clears keratosis fields with meta-analysis-grade evidence, 87% lesion clearance when primed with fluorouracil; combined with intense pulsed light it improved crow’s feet and roughness by 55% against 30% for light alone in a split-face study. One treatment, days of redness.',
    evidence: 'strong',
    focus: 'precancer',
    note: 'Best for: a field of keratoses where fluorouracil’s fortnight is unacceptable, and the sun-damaged face that wants the field and the look treated at once',
    sessions: '1–2 sessions',
    downtime: '3–7 days of redness and peeling',
    cost: '€900–1,300 (UK £850–1,150)',
    bodyHtml: `
      <p>Aminolevulinic acid or its methyl ester is applied to the sun-damaged area, accumulates in the abnormal cells over one to three hours, and is activated by red light — or by daylight in the gentler outdoor version — to destroy them. For the precancerous field the evidence is pooled: a systematic review and meta-analysis finds it at least as effective as conventional therapies for keratoses with better cosmetic outcomes (<a href="https://www.sciencedirect.com/science/article/pii/S1572100025008397" rel="noopener nofollow" target="_blank">meta-analysis</a>); in a 60-patient randomised trial, priming with fluorouracil raised clearance from 74% to 87% (<a href="https://www.sciencedirect.com/science/article/pii/S157210002400108X" rel="noopener nofollow" target="_blank">combination RCT</a>); and daylight photodynamic therapy is reviewed as the field treatment with the least pain (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11941503/" rel="noopener nofollow" target="_blank">daylight review</a>). For looks, the split-face evidence is consistent: in 16 patients given three treatments, the side treated with the photosensitiser plus intense pulsed light improved crow's feet and tactile roughness by 55% against 29.5% for light alone, with better keratosis clearance (<a href="https://pubmed.ncbi.nlm.nih.gov/16792644/" rel="noopener nofollow" target="_blank">split-face study</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/15696983/" rel="noopener nofollow" target="_blank">earlier split-face</a>). Strong for the field; the rejuvenation is a documented bonus rather than the indication.</p>
    `,
  },
  {
    id: 'rx-skin-check',
    category: 'rx',
    title: 'An annual dermatologist’s skin check',
    tldr: 'For anyone with keratoses, many spots, a sunbed history or a previous skin cancer: a yearly examination with a dermatoscope finds the carcinoma at the keratosis two years in, and the melanoma hiding among the lentigines. Not a treatment; the thing that makes the rest safe.',
    evidence: 'moderate',
    focus: 'precancer',
    sessions: 'Yearly; sooner for any changing lesion',
    downtime: 'None',
    cost: '€80–200 privately; free in many health systems',
    bodyHtml: `
      <p>A keratosis takes about two years to become a carcinoma and a carcinoma can be cut out small; a lentigo maligna looks like a sun spot for years before it invades; and the sun-damaged patient carries both among a hundred harmless marks. A dermatologist with a dermatoscope sorts them in twenty minutes. The Swedish cohort of 17,651 people with a keratosis diagnosis carried a raised ten-year risk of squamous-cell carcinoma, basal-cell carcinoma and melanoma (<a href="https://www.medicaljournals.se/acta/content/html/10.2340/00015555-3486" rel="noopener nofollow" target="_blank">Swedish cohort</a>), and the lentigo that is actually a melanoma has a dermoscopic signature no laser clinic should miss (<a href="https://dermnetnz.org/topics/lentigo-maligna-and-lentigo-maligna-melanoma-dermoscopy" rel="noopener nofollow" target="_blank">DermNet</a>). Moderate because screening trials in the general population are contested; for the person with a damaged field, a previous cancer or a sunbed past, the yearly look is the standard of care and the precondition for treating spots with light.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-ipl',
    category: 'clinic',
    title: 'Intense pulsed light for colour',
    tldr: 'A randomised split-face trial with blinded raters: three sessions improved telangiectasia on the treated side in 79–85% of faces through nine months and pigmentation in 59–71%, texture briefly, wrinkles not at all. The machine for red and brown; not for lines.',
    evidence: 'strong',
    focus: 'pigment',
    note: 'Best for: blotchy colour — lentigines, mottling, red vessels — in fair to olive skin',
    sessions: '3, a month apart; yearly maintenance',
    downtime: 'Redness for a day; spots darken and flake for a week',
    cost: '€200–500 per session (UK £200–500)',
    bodyHtml: `
      <p>Intense pulsed light is a filtered flash absorbed by haemoglobin and melanin, so it closes dilated vessels and breaks up pigment without much effect on the dermis beneath. The controlled evidence is a randomised split-face trial of 32 women with photodamage, each given three treatments to one half of the face a month apart and assessed by blinded raters for nine months: telangiectasia improved on the treated side in 79% at one month and 85% at nine, irregular pigmentation in 71% falling to 59%, skin texture in 82% falling to 56%, and wrinkles showed no difference at any time; one patient developed a small atrophic scar (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/407425" rel="noopener nofollow" target="_blank">JAMA Dermatology RCT</a>). Against a pulsed dye laser for facial vessels it was equivalent in a 16-person split-face comparison (<a href="https://pubmed.ncbi.nlm.nih.gov/22180317/" rel="noopener nofollow" target="_blank">IPL vs PDL</a>). Strong for what it treats — colour — and the wrong purchase for the leathery type. Darker skin risks pigment change; the <a href="/laser-ipl">laser guide</a> and the <a href="/dark-spots">dark-spots guide</a> cover the settings and the caveats.</p>
    `,
  },
  {
    id: 'clinic-qs-laser',
    category: 'clinic',
    title: 'Q-switched and picosecond lasers for sun spots',
    tldr: 'Meta-analyses pool lasers against cryotherapy and picosecond devices for lentigines with high clearance rates; on the backs of the hands a Q-switched ruby laser beat fractional CO₂ in a side-by-side randomised comparison. One or two sessions per spot; the spot must be checked first.',
    evidence: 'strong',
    focus: 'pigment',
    sessions: '1–2 sessions',
    downtime: 'Spots darken and flake for 7–10 days',
    cost: '€200–500 per session',
    bodyHtml: `
      <p>Nanosecond and picosecond pulses shatter pigment granules in a lentigo without heating the skin around them, and the pooled evidence is good: a meta-analysis of laser against cryotherapy for solar lentigines favours the laser on clearance and pigment complications (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13477615/" rel="noopener nofollow" target="_blank">laser vs cryotherapy meta-analysis</a>), the picosecond devices have their own meta-analysis (<a href="https://pubmed.ncbi.nlm.nih.gov/36897459/" rel="noopener nofollow" target="_blank">picosecond meta-analysis</a>), and in an 11-patient randomised side-by-side comparison on the backs of the hands the Q-switched ruby laser cleared lentigines significantly better than fractional CO₂ (<a href="https://pubmed.ncbi.nlm.nih.gov/25788397/" rel="noopener nofollow" target="_blank">hands RCT</a>). Two rules: a dermatoscope before the laser, because a lentigo maligna treated as a sun spot is a melanoma made invisible; and sunscreen afterward, because the spot returns to a face that keeps its habits. The <a href="/dark-spots">dark-spots guide</a> grades the whole ladder including the darker-skin caveats.</p>
    `,
  },
  {
    id: 'clinic-ablative',
    category: 'clinic',
    title: 'Ablative resurfacing (fractional and full-field CO₂, erbium)',
    tldr: 'The treatment for the leathery, coarsely wrinkled type: profilometry after three fractional CO₂ sessions found wrinkles reduced in every facial zone, a 2024 meta-analysis pools the class for photoaging, and full-field resurfacing held most of its gain at two years. Days to two weeks down, pigment risk in darker skin.',
    evidence: 'strong',
    focus: 'texture',
    note: 'Best for: Glogau III–IV texture in fair skin, after the field has been treated and checked',
    sessions: '1 full-field, or 2–3 fractional',
    downtime: '5–14 days by depth; pink for weeks to months',
    cost: '€2,000–3,500 full face (UK £2,000–3,500); €800–1,200 for a zone',
    bodyHtml: `
      <p>Ablative lasers vaporise the elastotic surface and heat the dermis beneath, and the skin that regrows is thicker, with reorganised collagen and its keratoses gone with the surface. Fractional CO₂ reduced wrinkle size and depth significantly in every facial zone on profilometry after three sessions (<a href="https://academic.oup.com/bjd/article-abstract/170/4/858/6614960" rel="noopener nofollow" target="_blank">BJD, 2014</a>), a 2024 meta-analysis pools the class for photoaging (<a href="https://pubmed.ncbi.nlm.nih.gov/39240125/" rel="noopener nofollow" target="_blank">2024 meta-analysis</a>), and a 16-study systematic review sets the fractional and non-ablative devices side by side (<a href="https://link.springer.com/article/10.1007/s00403-021-02283-2" rel="noopener nofollow" target="_blank">systematic review</a>); full-field CO₂ held 87% of its wrinkle-depth reduction at two years in the perioral study cited in the <a href="/lip-lines">lip-lines guide</a>, and a pilot of fractional CO₂ on ten photoaged hands rated pigment 51–75% improved and wrinkles and texture 26–50% (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1529-8019.2010.01379.x" rel="noopener nofollow" target="_blank">hands pilot</a>). The cost is downtime and, in darker skin, post-inflammatory darkening; the neck scars if treated like the face. The <a href="/laser-ipl">laser guide</a> walks the ladder.</p>
    `,
  },
  {
    id: 'clinic-nafl',
    category: 'clinic',
    title: 'Non-ablative fractional lasers (1550 / 1927 nm)',
    tldr: 'A randomised double-blind comparison found 1550 nm non-ablative and erbium fractional resurfacing both effective for photoaged Asian skin; the 1927 nm thulium wavelength treats photopigmentation with days rather than weeks of downtime. Softer results, safer in darker skin, three sessions.',
    evidence: 'moderate',
    focus: 'texture',
    sessions: '3–4, a month apart',
    downtime: '2–4 days of redness and bronzing',
    cost: '€300–600 per session',
    bodyHtml: `
      <p>Non-ablative fractional lasers heat columns of dermis under an intact surface, trading depth of effect for days of downtime and a wider margin in darker skin. In a prospective randomised double-blind comparison, 1550 nm non-ablative fractional and 2940 nm ablative fractional erbium resurfacing were both effective and safe for photoaged Asian skin over three sessions (<a href="https://pubmed.ncbi.nlm.nih.gov/26417998/" rel="noopener nofollow" target="_blank">randomised comparison</a>); the 1927 nm thulium device targets the epidermis where photopigmentation sits, with a dedicated study of facial photopigmentation (<a href="https://jddonline.com/articles/nonablative-1927-nm-fractional-resurfacing-for-the-treatment-of-facial-photopigmentation-S1545961614P1317X" rel="noopener nofollow" target="_blank">JDD, 2014</a>). The middle rung: more than a peel, less than ablation, three sessions instead of one, and the sensible choice for Fitzpatrick IV–VI. The <a href="/laser-ipl">laser guide</a> grades the devices.</p>
    `,
  },
  {
    id: 'clinic-peels',
    category: 'clinic',
    title: 'Medium-depth chemical peels (Jessner’s–TCA)',
    tldr: 'A systematic review finds medium-depth trichloroacetic acid peels effective resurfacing for photodamage and superficial keratoses; a controlled study reported 73% global photoaging improvement at three months. Cheaper than a laser, more operator-dependent, and a week of peeling.',
    evidence: 'moderate',
    focus: 'texture',
    sessions: '1–3',
    downtime: '5–7 days of peeling',
    cost: '€150–500',
    bodyHtml: `
      <p>Jessner's solution followed by 35% trichloroacetic acid coagulates the epidermis and upper dermis across the whole face, taking mottled pigment, roughness, fine lines and thin keratoses with it as the skin peels over a week. The systematic review of trichloroacetic acid peeling finds medium-depth peels effective resurfacing agents for photodamage (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8423570/" rel="noopener nofollow" target="_blank">systematic review</a>), and the classic reviews place the combination among the standard tools for Glogau II–III skin (<a href="https://jcadonline.com/evidence-and-considerations-in-the-application-of-chemical-peels-in-skin-disorders-and-aesthetic-resurfacing/" rel="noopener nofollow" target="_blank">JCAD review</a>). Less reach than a laser into elastotic dermis, more pigment risk in darker skin than the non-ablative lasers, and dependent on the hand holding the gauze. The <a href="/chemical-peels">peel guide</a> grades the depths.</p>
    `,
  },
  {
    id: 'clinic-chest-hands',
    category: 'clinic',
    title: 'The neck, chest and hands',
    tldr: 'Poikiloderma of the neck and chest cleared by more than 80% after three intense pulsed light sessions in a 175-patient series with 5% transient side effects; hand lentigines answer to a Q-switched laser, hand texture to gentle fractional CO₂. Thin skin, no follicles to heal from, low settings.',
    evidence: 'moderate',
    focus: 'vascular',
    sessions: '2–3 sessions',
    downtime: '3–7 days of redness or flaking',
    cost: '€250–500 per session',
    bodyHtml: `
      <p>The neck, the V of the chest and the backs of the hands are where sun damage shows and where treatment goes wrong: thin skin with few sebaceous glands heals slowly and scars from settings the face tolerates. For the red-brown mottling of poikiloderma of Civatte, the vessel-and-pigment machine is the right one — in a series of 175 patients (mean age 49, skin types I–III) three intense pulsed light sessions cleared more than 80% of the vascular and pigmented components with minimal transient side effects in 5% (<a href="https://pubmed.ncbi.nlm.nih.gov/18177401/" rel="noopener nofollow" target="_blank">175-patient series</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/10971554/" rel="noopener nofollow" target="_blank">135-patient series</a>). For the hands, the randomised side-by-side comparison favoured a Q-switched ruby laser over fractional CO₂ for lentigines (<a href="https://pubmed.ncbi.nlm.nih.gov/25788397/" rel="noopener nofollow" target="_blank">hands RCT</a>), and a fractional CO₂ pilot improved pigment more than texture (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1529-8019.2010.01379.x" rel="noopener nofollow" target="_blank">hands pilot</a>). Moderate on series rather than trials; the <a href="/neck">neck guide</a> covers the neck's other treatments and the scarring caveat.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-cancer',
    category: 'safety',
    title: 'The field is a cancer risk: what to watch and when to go',
    tldr: 'A keratosis becomes a carcinoma in about two years; 6–10% of people with keratoses get one over a decade; a lentigo maligna hides among sun spots. A patch that thickens, bleeds, hurts, crusts or will not heal, a spot with an irregular edge or several colours, or anything new after sixty is an appointment, not a laser booking.',
    bodyHtml: `
      <p>Sun-damaged skin is a cancer field, and the cosmetic treatments on this page are safe only on skin that has been looked at. Actinic keratoses progress to squamous-cell carcinoma at rates that vary by study but average about two years per event in the kinetics analysis (<a href="https://pubmed.ncbi.nlm.nih.gov/17760601/" rel="noopener nofollow" target="_blank">kinetics study</a>), with a lifetime risk for someone carrying them of roughly 6–10% (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11802505/" rel="noopener nofollow" target="_blank">progression review</a>); squamous-cell carcinomas on the ear, lip and scalp are the ones that spread. Melanoma's warning signs are asymmetry, an irregular border, more than one colour, a diameter over six millimetres and any evolution — and the lentigo maligna type looks like a sun spot for years (<a href="https://dermnetnz.org/topics/lentigo-maligna-and-lentigo-maligna-melanoma-dermoscopy" rel="noopener nofollow" target="_blank">DermNet</a>). The red flags for a keratosis: thickening, bleeding, tenderness, a horn or crust, failure to heal in a month (<a href="https://www.skincancer.org/skin-cancer-information/actinic-keratosis/actinic-keratosis-warning-signs-and-images/" rel="noopener nofollow" target="_blank">warning signs</a>). A laser or light clinic that treats spots without a dermatoscope is treating blind; ask who looked first.</p>
    `,
  },
  {
    id: 'safety-sunscreen',
    category: 'safety',
    title: 'Sunscreen: the vitamin D question, the amount, and the filters',
    tldr: 'Daily SPF 50+ lowered vitamin D by 5 nmol/L and raised deficiency from 37% to 46% in a 628-person trial — real and fixed by a supplement. Most people apply a fraction of the tested amount. Modern filters are regulated; tinted iron-oxide products add visible-light protection for pigment-prone skin.',
    bodyHtml: `
      <p>Sunscreen's harms are small and specific. The vitamin D effect is now measured: a year of daily SPF 50+ produced a 5.2 nmol/L smaller rise in vitamin D than discretionary use and left 45.7% of daily users deficient against 36.9% of controls (<a href="https://pubmed.ncbi.nlm.nih.gov/40927943/" rel="noopener nofollow" target="_blank">Sun-D trial</a>) — a supplement costing pennies replaces it, and the 1995 trial with SPF 17 found no effect at all (<a href="https://pubmed.ncbi.nlm.nih.gov/7726582/" rel="noopener nofollow" target="_blank">1995 trial</a>). The commoner failure is dose: the trials that prevented cancer used enough product to coat the skin, and most people apply a fraction, so the SPF on the label is rarely the SPF on the face. Filters are regulated on both sides of the Atlantic; mineral zinc and titanium suit reactive skin, and tinted iron-oxide formulations add the visible-light protection that pigment-prone and darker skin needs (<a href="https://jddonline.com/articles/impact-of-iron-oxide-containing-formulations-against-visible-light-induced-skin-pigmentation-in-skin-S1545961620P0712X" rel="noopener nofollow" target="_blank">iron-oxide study</a>). Any sunscreen used is better than the best one left in the drawer.</p>
    `,
  },
  {
    id: 'safety-lasers-ipl',
    category: 'safety',
    title: 'Light, lasers and peels on sun-damaged skin: pigment, scars, the neck',
    tldr: 'Every device that treats colour can cause it: post-inflammatory darkening in Fitzpatrick IV–VI, permanent confetti-like lightening after repeated laser toning, an atrophic scar in one of 32 patients in the IPL trial, and neck scarring from face-strength settings. Sunscreen afterward is not optional.',
    bodyHtml: `
      <p>Machines that target melanin and haemoglobin injure the cells around them when the settings or the skin type are wrong. Post-inflammatory hyperpigmentation follows intense pulsed light, lasers and medium peels far more often in darker skin, which is why the non-ablative devices and lower settings are the rule there; repeated low-fluence laser toning has produced permanent confetti-like hypopigmentation (<a href="https://jcadonline.com/the-asian-problem-of-frequent-laser-toning-for-melasma/" rel="noopener nofollow" target="_blank">JCAD</a>); the randomised IPL trial recorded one atrophic scar in 32 patients and three withdrawals for pain (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/407425" rel="noopener nofollow" target="_blank">JAMA Dermatology RCT</a>); and the neck, with few follicles to heal from, has scarred after fractional CO₂ at settings the face tolerates (<a href="https://pubmed.ncbi.nlm.nih.gov/19291746/" rel="noopener nofollow" target="_blank">neck scarring</a>). Treated skin is photosensitive for weeks and re-pigments in sun; a course of light in June without sunscreen is a course of light wasted. The <a href="/laser-ipl">laser guide</a> covers the settings by skin type.</p>
    `,
  },
  {
    id: 'safety-tanning',
    category: 'safety',
    title: 'Tanning beds and the "base tan"',
    tldr: 'First use of a sunbed before 35 raises melanoma risk by 75% in meta-analysis and any use by 15%; a tan is DNA damage made visible and protects about as much as an SPF of 3. No cosmetic treatment on this page survives a sunbed habit.',
    bodyHtml: `
      <p>Indoor tanning delivers UVA at intensities the midday sun does not, and the epidemiology is settled: a meta-analysis of seven studies found first use before age 35 associated with a 75% increase in melanoma risk and any use with a 15% increase, and the World Health Organization classes the devices as carcinogenic (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2913608/" rel="noopener nofollow" target="_blank">indoor-tanning review</a>; <a href="https://onlinelibrary.wiley.com/doi/10.1111/jdv.20586" rel="noopener nofollow" target="_blank">JEADV 2025</a>). The "base tan" sold as protection is the skin's response to injury and shields about as much as an SPF of 3; the melanoma risk from tanning is highest in exactly the young, fair users who buy it. Every treatment on this page — the retinoid, the light, the laser, the field therapy — is undone by a sunbed, and a clinic that offers both is not reading its own literature.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-reverse',
    category: 'faq',
    title: 'Can sun damage actually be reversed?',
    tldr: 'Partly, and more than most people expect: daily sunscreen alone improved existing texture and pigmentation by 40–52% in a year, retinoids restore collagen on biopsy, light clears colour, resurfacing rebuilds texture, and field treatments clear the precancers. The mutations underneath remain, which is what the skin check is for.',
    bodyHtml: `
      <p>Yes, in layers. Stopping the dose lets the skin repair: in the one-year sunscreen study every subject improved, with texture and pigmentation 40–52% better. Retinoids reverse the biology — collagen restored on biopsy, wrinkles and mottling reduced in eight randomised trials. Light and lasers remove the colour that sun switched on; ablative resurfacing removes the elastotic surface and grows a new one; fluorouracil and photodynamic therapy clear the precancerous field. What none of them reverses is the mutated clones in the cells that remain, which is why sun-damaged skin stays a cancer risk after it looks better, and why the yearly look is part of the treatment.</p>
    `,
  },
  {
    id: 'faq-spf',
    category: 'faq',
    title: 'SPF 30 or 50, and how much?',
    tldr: 'Either, applied properly, beats a higher number applied thinly: the trials that cut cancer used SPF 15–16 every day. Broad-spectrum, a generous layer on the face, neck, ears, chest and hands every morning, reapplied outdoors; tinted iron oxide if pigment is your problem.',
    bodyHtml: `
      <p>The Nambour trial that cut carcinomas and melanomas used an SPF 15–16 sunscreen applied daily, and the one-year reversal study used SPF 30. The difference between 30 and 50 is small if both go on generously; the difference between a generous layer and the thin smear most people use is large, because SPF is tested at an amount few reach. So: broad-spectrum, SPF 30 or above, roughly half a teaspoon for the face and neck, every morning regardless of weather, carried to the ears, chest and backs of the hands, reapplied after two hours outdoors or after sweating, and a tinted iron-oxide formulation for anyone whose complaint is melasma or spots. The best sunscreen is the one you will use every day.</p>
    `,
  },
  {
    id: 'faq-indoors',
    category: 'faq',
    title: 'Do I need sunscreen indoors, in winter, or in the car?',
    tldr: 'By a window or in a car, yes: glass blocks UVB and passes UVA, side windows pass a tenth of what the windscreen blocks, and cloud passes most of it. Deep indoors away from windows, no. Winter sun ages skin; it just does not burn it.',
    bodyHtml: `
      <p>UVA — the wrinkle wavelength — passes through ordinary window glass and through cloud, which is why the office worker by the window and the driver on the window side photoage on one side. Vehicle measurements found side windows blocking 89% of UVA against the windscreen's 99%, a tenfold difference in what reaches the driver's cheek and forearm; a UV film closes the gap. Winter sun in northern Europe carries little UVB, so it rarely burns, but the UVA that ages skin varies far less through the year. Deep indoors away from windows, the dose is negligible and sunscreen is optional; beside a window, on a commute, on a cloudy walk, it is not.</p>
    `,
  },
  {
    id: 'faq-vitamin-d',
    category: 'faq',
    title: 'Will sunscreen make me vitamin D deficient?',
    tldr: 'A little, if you use high-SPF sunscreen every day: a 628-person trial found a 5 nmol/L smaller rise and deficiency in 46% against 37%. A daily supplement replaces it for pennies; sun is not the way to get vitamin D in skin that is being treated for sun damage.',
    bodyHtml: `
      <p>The honest answer changed in 2025. The older trial with SPF 17 found no effect on vitamin D; the Sun-D trial with daily SPF 50+ found a real but small one — a 5.2 nmol/L smaller rise over a year and deficiency in 45.7% of daily users against 36.9% of controls — and concluded that regular users may need a supplement. The arithmetic is simple: 1,000–2,000 IU of vitamin D a day costs a few euros a month and carries no mutations; the ultraviolet dose needed to make the same vitamin in skin is the dose this page exists to prevent. Use the sunscreen, take the tablet, and get the level checked if you are indoors most of the year anyway.</p>
    `,
  },
  {
    id: 'faq-ak',
    category: 'faq',
    title: 'What is that rough patch that keeps coming back?',
    tldr: 'Probably an actinic keratosis — a precancer felt before it is seen, on the scalp, forehead, ears, nose, lip or hands. About one in four regresses; the field around it does not; about one in ten people with them gets a carcinoma over a decade. A dermatologist, then fluorouracil, photodynamic therapy or freezing.',
    bodyHtml: `
      <p>A rough, scaly, pink or skin-coloured patch on sun-exposed skin that flakes off and returns in the same place is almost always an actinic keratosis, the visible tip of a mutated field. Individual keratoses regress about a quarter of the time; the field does not, and the interval from a keratosis to a carcinoma at the same site averaged about two years in the kinetics analysis, with a lifetime risk of roughly 6–10% for someone carrying them. A single lesion is frozen; several mean a field treatment — a course of fluorouracil cream, which also cut carcinomas needing surgery by 75% in the veterans' trial, or photodynamic therapy — and a yearly check afterward. A patch that thickens, bleeds, hurts or crusts is seen this month, not next year.</p>
    `,
  },
  {
    id: 'faq-tan',
    category: 'faq',
    title: 'Is a tan safe? Does a "base tan" protect me?',
    tldr: 'A tan is DNA damage made visible and protects about as much as an SPF of 3; a sunbed before 35 raises melanoma risk by 75%. Self-tanner gives the colour without the mutations; sunscreen and shade give the protection.',
    bodyHtml: `
      <p>A tan is the skin's response to ultraviolet injury — melanocytes producing pigment because DNA has been damaged — and the protection it gives is about an SPF of 3, which no dermatologist would sell you in a bottle. Sunbeds deliver UVA at intensities the sun does not: first use before 35 raises melanoma risk by 75% in meta-analysis, and the devices are classed as carcinogens. Self-tanning lotions colour the dead outer layer with a sugar reaction, involve no ultraviolet, and are the only tan this page endorses; they do not protect, so the sunscreen goes over them.</p>
    `,
  },
  {
    id: 'faq-darker-skin',
    category: 'faq',
    title: 'I have dark skin — does any of this apply to me?',
    tldr: 'The cancer risk is lower and the wrinkles come later, but pigment comes sooner and from visible light too, which ordinary sunscreen ignores; tinted iron-oxide sunscreen, gentler devices and the same retinoids apply. Melanoma in dark skin hides on palms, soles and nails.',
    bodyHtml: `
      <p>Melanin absorbs much of the ultraviolet dose, so darker skin burns rarely, keeps its texture longer and grows far fewer keratinocyte cancers. Its sun problem is pigment: melasma and dark patches triggered not only by ultraviolet but by visible light, which produced darker and longer-lasting pigmentation than UVA in darker phototypes and which only iron-oxide-tinted sunscreens block. The devices on this page carry more pigment risk in Fitzpatrick IV–VI, which is why the non-ablative lasers and lower settings are the rule and why the dark-spots guide exists. Melanoma is rarer but deadlier because it is found late — on palms, soles and under nails, where sun is not the cause and nobody looks; any new dark streak or spot there is a dermatologist's appointment.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until I see something?',
    tldr: 'Sunscreen: 12 weeks for texture and colour, a year for the full effect. Retinoids: 3–6 months, still improving at a year. Light and lasers: spots darken and flake in a week, colour judged at a month. Field treatments: raw for two weeks, smooth at six. Resurfacing: pink for weeks, judged at three months.',
    bodyHtml: `
      <p>Everything here works through repair, and repair is slow. Daily sunscreen showed measurable improvement in the one-year study from week 12 and kept improving to week 52. Retinoids change the surface over three to six months and the dermis over a year; the tazarotene trial was still improving at week 52. Intense pulsed light and Q-switched lasers darken spots for a week before they flake, and colour is judged at a month after each of three sessions. Fluorouracil and photodynamic therapy are red and raw for one to four weeks and smooth at six. Ablative resurfacing is pink for weeks and judged at three months. Photograph in daylight before anything, and again a year in.</p>
    `,
  },
  {
    id: 'faq-cost-ladder',
    category: 'faq',
    title: 'What is the cheapest thing that works, and the most effective?',
    tldr: 'Cheapest with cancer trials: sunscreen, a hat and vitamin D, €15–40 a month. Most effective per euro: a prescription retinoid, €10–30 a month, for a year. For the field: fluorouracil, €20–60 a course. For colour: three IPL sessions, €600–1,500. For texture: resurfacing, €800–3,500. The skin check first.',
    bodyHtml: `
      <p>The ladder in euros: sunscreen, a three-inch brim and a vitamin D tablet (€15–40 a month, the only rung with cancer-prevention trials) → a prescription retinoid or adapalene (€10–30 a month, the only cream licensed for photodamage) → vitamin C and niacinamide under it (€15–60 a month) → a yearly skin check for anyone with a field (€80–200) → fluorouracil for the field (€20–60 a course) or photodynamic therapy (€900–1,300) → intense pulsed light or a Q-switched laser for colour (€600–1,500 for a course) → non-ablative fractional laser or a medium peel (€150–600 a session) → ablative resurfacing for the leathery face (€800–3,500). Oral photoprotectants, nicotinamide for the high-risk and self-tanner sit beside the ladder; sunbeds sit under it.</p>
    `,
  },
  {
    id: 'faq-prevent',
    category: 'faq',
    title: 'I am 25 — what actually prevents this?',
    tldr: 'Sunscreen every morning on the face, neck, ears and hands, a hat and shade in the middle of the day, no sunbeds ever, a film on the car windows, a retinoid from the late twenties, and vitamin D from a bottle. The face you have at fifty is the sum of a few thousand ordinary days.',
    bodyHtml: `
      <p>Photoaging is cumulative and mostly incidental, so prevention is a habit rather than a purchase. The trial-proven habit is daily broad-spectrum sunscreen on the face, neck, ears, chest and hands, every morning, in every season, reapplied when outdoors — the Nambour cohort cut its carcinomas, melanomas and measured aging with exactly that. A three-inch brim and shade between eleven and three cut the rest; a film on the car's side windows removes the driver's asymmetry; sunbeds are the one thing on this page with no safe dose. A retinoid from the late twenties rebuilds what slips through, and vitamin D comes from a tablet. The <a href="/anti-aging-30s">30s guide</a> covers the decade, and the inner-arm test will tell you at fifty how well it worked.</p>
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
    intro: 'Two wavelengths, a lifetime of incidental dose and your phototype make four kinds of sun damage — and the arm test and the fingertip test tell you which ones you have.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which sun damage do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: stopping the dose and repairing the surface',
    intro: 'The only anti-aging treatment with cancer-prevention trials, the only cream licensed for photodamage, and the supplements and habits graded by what they measured.',
    sections: home,
  },
  {
    id: 'rx',
    title: 'Prescription and field treatments',
    intro: 'What treats the mutated field that the cosmetic complaint sits on — and the yearly look that makes the rest safe.',
    sections: rx,
  },
  {
    id: 'clinic',
    title: 'Light, lasers and peels',
    intro: 'Colour and texture want different machines: light for red and brown, resurfacing for leather — graded by the blinded trials and the series, with the neck, chest and hands treated as the different skin they are.',
    sections: clinic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The cancer field first, then the small harms of sunscreen, the pigment harms of devices, and the sunbed that undoes all of it.',
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
  texture: 'Texture & wrinkles',
  pigment: 'Pigment',
  vascular: 'Redness & vessels',
  precancer: 'Precancer & cancer',
  prevention: 'Prevention',
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
