/**
 * Crepey chest and décolletage lines guide — single source of truth
 * (problem template).
 *
 * Consumed by /decolletage. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: the chest ages like the face but has less to age with —
 * a thinner dermis, far fewer oil glands and hair follicles, decades of
 * sun on a V that sunscreen forgets, and a fold pressed into it every night
 * by side-sleeping. Three separate problems result: the red-brown mottling
 * of poikiloderma of Civatte (colour), the crepe and laxity of photoaged,
 * oestrogen-poor skin (texture), and the vertical cleavage lines of
 * compression (lines). The evidence is smaller than for the face — mostly
 * series under forty people — with two exceptions: a 152-person randomised
 * trial of hyperdilute calcium hydroxylapatite for décolleté wrinkles, and
 * two series of 135 and 175 patients for intense pulsed light on the
 * mottling. The chest also scars and depigments where the face would not,
 * so the face protocols that clinics transplant onto it are the commonest
 * cause of harm.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'lines' | 'crepe' | 'colour' | 'laxity' | 'general';

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
  'The chest ages like the face with less to age with: a thinner dermis and epidermis, far fewer oil glands and hair follicles (so it dries, heals slowly and scars where the face would not), decades of sun on a V that sunscreen forgets, and a fold pressed into it every night by the 65% of people who sleep on their side. Three problems result — red-brown mottling, crepe and laxity, and vertical cleavage lines — and each has a different treatment.',
  'The red-brown net on the sides of the neck and the V of the chest, sparing the shade under the chin, is poikiloderma of Civatte: sun, fair skin, low oestrogen and photosensitising perfume. Light treats it and cream does not — intense pulsed light cleared more than 75–80% of the redness and pigment in series of 135 and 175 patients with about 5% side effects, and pulsed-dye and 532 nm lasers improved it 49–74% in blinded studies. Too high a fluence permanently depigments.',
  'Hyperdilute calcium hydroxylapatite has the best evidence of any chest treatment: in a 152-person randomised, assessor-blinded trial, 71% of treated women were responders on the décolleté wrinkle scale at 24 weeks against 6% of untreated controls, and a biopsy pilot showed new collagen I and elastin at four and seven months. Poly-L-lactic acid, hyaluronic boosters, microfocused ultrasound and the 1927 nm thulium and 1550 nm lasers each have small uncontrolled studies showing improvement.',
  'The cheap rungs work on body skin as they do on the face: 0.4% retinol reduced fine wrinkles on the arms of 36 people averaging 87 in a randomised vehicle-controlled trial, tretinoin partly restored the collagen synthesis that sun had cut by 56% in photodamaged forearms, 8% glycolic and lactic acid improved mottling and texture on face and forearms double-blind, and daily sunscreen slowed visible ageing by 24% in a four-year trial. Silicone chest pads and back-sleeping have no trial.',
  'The chest is where face protocols cause harm: fractional CO2 at ordinary facial settings produced hypertrophic scars on the neck in a five-patient series, pulsed-dye at 5–7 J/cm² left six of eight poikiloderma patients permanently depigmented, and a chest with "moderate to severe photodamage" carried 184 precancerous keratoses in twelve women. Non-ablative first, low fluence, a test patch, and a dermatoscope before anything cosmetic.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-sun',
    kind: 'Sun',
    title: 'Decades of sun on the V that sunscreen forgets',
    blurb: 'The chest gets the face\'s sun without the face\'s sunscreen: fragmented elastin makes the crepe, overworked melanocytes make the spots, and dilated vessels with leaked pigment make the red-brown net of poikiloderma of Civatte on the sides of the neck and the V, sparing the shade under the chin.',
  },
  {
    id: 'type-sleep',
    kind: 'Compression',
    title: 'A fold pressed into thin skin every night',
    blurb: 'About 65% of people sleep on their side; one breast folds over the other and the skin between them creases, and in a dermis that has lost its collagen the crease that used to smooth out by breakfast stays — the vertical cleavage lines that filler and lasers are asked to remove.',
  },
  {
    id: 'type-thin',
    kind: 'Thin skin',
    title: 'Thin, gland-poor and short of oestrogen',
    blurb: 'The chest has a thinner dermis than the face and far fewer oil glands and follicles, so it dries, heals slowly and scars easily; oestrogen loss at menopause thins it further and is one of the causes of the mottling. Every treatment on this page has to be gentler than its face version.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'chest-anatomy',
    category: 'concept',
    title: 'What the chest skin is, and why it ages faster than the face',
    tldr: 'A thinner dermis and epidermis and a lower density of oil glands and hair follicles: the chest dries, repairs slowly after any injury and scars where the face would not. Photodamage of the chest is laxity, lines, mottled pigment, redness, roughness, atrophy and visible vessels, and clinicians now grade it on validated five-point scales for wrinkles at rest, wrinkles with the arms pressed together, and pigmentation.',
    bodyHtml: `
      <p>The skin of the chest is thinner than the face's and has far fewer pilosebaceous units — the oil glands and hair follicles from which skin re-grows after a laser or a peel — which is why the reviews of chest rejuvenation attribute most of its adverse events to "the thinness of the dermis and epidermis and the lower concentration of pilosebaceous units" (<a href="https://pubmed.ncbi.nlm.nih.gov/21463389/" rel="noopener nofollow" target="_blank">chest rejuvenation review</a>), and why the neck and chest are treated more cautiously than the face with every energy device (<a href="https://pubmed.ncbi.nlm.nih.gov/40956467/" rel="noopener nofollow" target="_blank">neck laser study</a>). Photodamage of the chest is a list: laxity, lines and wrinkles, hyperpigmentation, redness, tactile roughness, atrophy and telangiectasia (<a href="https://pubmed.ncbi.nlm.nih.gov/27128235/" rel="noopener nofollow" target="_blank">décolletage review</a>). Clinicians grade it on scales built for the purpose: the Fabi-Bolton five-point chest wrinkle scale, from absent to "very deep with redundant folds", validated on photographs of 28 volunteers (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1473-2165.2012.00628.x" rel="noopener nofollow" target="_blank">Fabi-Bolton scale</a>); a set of three scales for décolleté wrinkles at rest, wrinkles in the "hand-to-elbow" position that presses the breasts together, and pigmentation, validated by 13 experts on 50 women (<a href="https://www.ovid.com/jnls/dermatologicsurgery/fulltext/10.1097/dss.0000000000000786~validated-assessment-scales-for-dcollet-wrinkling-and" rel="noopener nofollow" target="_blank">validated décolleté scales</a>); and a 15-item patient questionnaire whose scenarios — a low neckline, lying on the side, the breasts pushed together, arms crossed, getting up in the morning — are a fair description of when the chest bothers people (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11834981/" rel="noopener nofollow" target="_blank">BODY-Q décolletage scale</a>).</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'How common — and which of the three problems is yours',
    tldr: 'Poikiloderma of Civatte, the red-brown mottling, affects fair-skinned middle-aged and older people and is commonest in postmenopausal women with a lot of sun behind them; about 65% of adults sleep on their side, which is where the vertical lines come from; and a chest graded "moderate to severe photodamage" carried 184 precancerous keratoses in twelve women. Colour, lines and crepe are three problems with three treatments.',
    bodyHtml: `
      <p>Nobody has counted crepey chests, but the components have numbers. Poikiloderma of Civatte — confluent reddish-brown patches with thinning on the sides of the neck and the V of the chest, sparing the shaded skin under the chin — primarily affects middle-aged and elderly fair-skinned people and is most frequent in postmenopausal women with significant sun exposure, with photosensitising perfumes and low oestrogen listed among its causes and a course that is chronic and irreversible without treatment (<a href="https://dermnetnz.org/topics/poikiloderma-of-civatte" rel="noopener nofollow" target="_blank">DermNet</a>; <a href="https://www.tandfonline.com/doi/abs/10.1586/edm.12.34" rel="noopener nofollow" target="_blank">poikiloderma review</a>). Lateral sleep is the commonest position in the studies reviewed, averaging 65%, against 30% on the back and 5% prone, and compression, shear and stress in the lateral position are what press sleep wrinkles into skin that has lost its recoil (<a href="https://pubmed.ncbi.nlm.nih.gov/27329660/" rel="noopener nofollow" target="_blank">sleep-wrinkle review</a>). And the crepe is sun: in a Danish trial of twelve women whose décolletés were graded moderately to severely photodamaged, the same skin carried 184 thin actinic keratoses between them (<a href="https://pubmed.ncbi.nlm.nih.gov/31788828/" rel="noopener nofollow" target="_blank">thulium décolleté trial</a>). The three problems overlap on most chests over fifty, and the treatments do not: light for the colour, collagen stimulation and lasers for the crepe and lines, and sunscreen and a change of sleeping position to stop both getting worse.</p>
    `,
  },
  {
    id: 'why-hard',
    category: 'concept',
    title: 'Why the chest is treated badly',
    tldr: 'Clinics transplant face protocols onto skin that cannot take them: fractional CO2 at facial settings scarred five necks in one series, pulsed-dye at facial fluences depigmented six of eight poikiloderma patients permanently, and the vertical lines come back every night whatever was injected. The evidence is small — mostly series under forty people — with one 152-person randomised trial and two light series of 135 and 175.',
    bodyHtml: `
      <p>The chest has been treated as a second face, and it is not one. Five patients treated for neck photodamage with the same fractional CO2 laser, at pulse energies of 20–30 mJ that are routine on the face, were referred with hypertrophic scars along the skin folds within three months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2747732/" rel="noopener nofollow" target="_blank">neck scarring series</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/27115980/" rel="noopener nofollow" target="_blank">severe neck scarring report</a>); six of eight poikiloderma patients treated with a pulsed-dye laser at 5–7 J/cm² reported severe depigmentation four to eleven months later, while two treated at lower fluence did not (<a href="https://pubmed.ncbi.nlm.nih.gov/17062040/" rel="noopener nofollow" target="_blank">depigmentation series</a>). The lines have their own problem: a crease pressed in nightly returns nightly, and a gel placed in it is fighting the pillow. And the evidence is thin — the chest reviews found reports rather than trials, and little at all on combining them (<a href="https://pubmed.ncbi.nlm.nih.gov/27128235/" rel="noopener nofollow" target="_blank">décolletage review</a>) — with three exceptions this page leans on: a 152-person randomised trial of hyperdilute calcium hydroxylapatite for décolleté wrinkles whose results are posted on the trial registry (<a href="https://clinicaltrials.gov/study/NCT05163353" rel="noopener nofollow" target="_blank">Radiesse décolleté trial</a>), and two intense-pulsed-light series of 135 and 175 poikiloderma patients (<a href="https://pubmed.ncbi.nlm.nih.gov/10971554/" rel="noopener nofollow" target="_blank">135-patient IPL series</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/18177401/" rel="noopener nofollow" target="_blank">175-patient IPL series</a>). The order that follows: sort colour from crepe from lines, protect the V, use the cheap products that work on body skin, treat colour with light at chest settings, treat lines and crepe with the stimulator that has a trial, and keep ablation for last and low.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-sun',
    category: 'context',
    title: 'Red-brown, mottled, papery: photoageing and poikiloderma of Civatte',
    tldr: 'A net of red-brown on the sides of the neck and the V, spared under the chin and behind a necklace, that blanches when pressed (vessels) and does not (pigment): poikiloderma of Civatte, a sun disease of fair, perimenopausal skin, sometimes with a perfume in it. Light treats it; cream does not; sunscreen and no fragrance stop it advancing.',
    focus: 'colour',
    bodyHtml: `
      <p>Press a glass slide or a fingertip on the reddest patch: the part that blanches is dilated vessels, the part that stays brown is melanin and leaked blood pigment, and the combination in a net-like pattern on the sides of the neck and the V of the chest, with a pale, spared patch under the chin where the jaw casts shade, is poikiloderma of Civatte (<a href="https://dermnetnz.org/topics/poikiloderma-of-civatte" rel="noopener nofollow" target="_blank">DermNet</a>). Biopsies after treatment show what it is made of — irregular melanin, fragmented elastic fibres and thinned collagen — and how light changes it (<a href="https://pubmed.ncbi.nlm.nih.gov/22540888/" rel="noopener nofollow" target="_blank">IPL histology study</a>). It affects fair skin, women more than men, most often after menopause, and photosensitising perfume sprayed on the chest is one of its listed causes, which is why the first instruction is sunscreen and no fragrance on the V. Retinoids, hydroquinone and acids barely touch it; intense pulsed light and vascular lasers do, at chest settings, and the crepe underneath it is the next type.</p>
    `,
  },
  {
    id: 'type-sleep',
    category: 'context',
    title: 'Vertical cleavage lines that are worse in the morning',
    tldr: 'Two to five vertical lines between the breasts, deepest on waking and softer by evening, in a side-sleeper: compression wrinkles, pressed in by one breast folding over the other, that stay once the dermis has lost its recoil. Position and padding to stop the pressing; a collagen stimulator or a fractional laser for the lines that no longer smooth out.',
    focus: 'lines',
    bodyHtml: `
      <p>Photograph the chest on waking and again at bedtime. Lines that are deep in the morning and shallower by evening are compression wrinkles, and the mechanism is in the sleep-wrinkle literature: the lateral position, which about 65% of adults use, applies compression, shear and stress to the skin on the downhill side, and skin that has lost its elastic recoil retains the crease (<a href="https://pubmed.ncbi.nlm.nih.gov/27329660/" rel="noopener nofollow" target="_blank">sleep-wrinkle review</a>). On the chest the compressing object is the upper breast folding over the lower one, so the lines run vertically up the cleavage and are worse with larger, heavier or more ptotic breasts and with sleep on the same side every night. They are the type the clinic is most often asked to inject, and the type that recurs fastest, because the cause is repeated every night. The tools are the pillow and the position for the cause, and hyperdilute calcium hydroxylapatite, poly-L-lactic acid or a fractional laser for the lines that no longer smooth out by lunch.</p>
    `,
  },
  {
    id: 'type-thin',
    category: 'context',
    title: 'Crepe and laxity: thin skin that has lost its collagen and oestrogen',
    tldr: 'A fine, papery, crinkled texture across the whole chest that folds into a fan of lines when the arms are pressed together, and looks worst in a low neckline under overhead light: fragmented elastin and a thin dermis, accelerated after menopause. Retinoids and acids for the surface; the collagen stimulators, ultrasound and non-ablative lasers for the dermis.',
    focus: 'crepe',
    bodyHtml: `
      <p>Pinch a fold of skin below the collarbone and let go, then press the upper arms inward: crepe is the fine crinkling that appears on the pinch and the fan of lines that opens on the press, and it is what the validated "hand-to-elbow" dynamic scale grades (<a href="https://www.ovid.com/jnls/dermatologicsurgery/fulltext/10.1097/dss.0000000000000786~validated-assessment-scales-for-dcollet-wrinkling-and" rel="noopener nofollow" target="_blank">validated décolleté scales</a>). Underneath is the histology of photodamage — fragmented elastin, and collagen I synthesis 56% lower in sun-damaged forearm skin than in protected skin from the same people (<a href="https://pubmed.ncbi.nlm.nih.gov/8336752/" rel="noopener nofollow" target="_blank">tretinoin collagen study</a>) — on a dermis that was thin to begin with and that oestrogen loss thins further: about five years of hormone therapy went with 7–15% thicker skin in 98 postmenopausal women (<a href="https://pubmed.ncbi.nlm.nih.gov/8993951/" rel="noopener nofollow" target="_blank">98-woman comparison</a>). This is the type for the treatments that build dermis — a retinoid and the acids on the surface, hyperdilute calcium hydroxylapatite and poly-L-lactic acid in it, microfocused ultrasound and the non-ablative fractional lasers through it — and the type that ablative resurfacing was designed for on the face and scars on the chest.</p>
    `,
  },
  {
    id: 'type-spots',
    category: 'context',
    title: 'Brown spots and rough patches: lentigines, keratoses and the check they need',
    tldr: 'Flat brown spots are solar lentigines; rough, sandpaper patches that catch a fingernail are actinic keratoses, the precancers that turn into squamous-cell carcinoma in a small percentage; twelve women with a photodamaged décolleté carried 184 of them between them. A dermatoscope before any cosmetic treatment, and the dark-spots and sun-damage guides for the rest.',
    focus: 'colour',
    bodyHtml: `
      <p>Run a fingertip over the chest with the eyes closed. Flat brown spots you cannot feel are solar lentigines, the sun-switched melanocytes that the <a href="/dark-spots">dark-spots guide</a> covers; patches you feel before you see — rough, sandpapery, sometimes tender — are actinic keratoses, the field of precancer that the <a href="/sun-damage">sun-damage guide</a> grades the treatments for. They are common on exactly this skin: the twelve women in the Danish thulium trial, selected for moderate-to-severe photodamage of the décolleté, had 184 thin actinic keratoses curetted before the cosmetic treatment began (<a href="https://pubmed.ncbi.nlm.nih.gov/31788828/" rel="noopener nofollow" target="_blank">thulium décolleté trial</a>). The practical rule is the same as the sun-damage guide's: a chest with rough patches gets a dermatoscope examination before it gets a laser, an intense-pulsed-light session or a peel, both because the precancers need their own treatment and because light devices can obscure a lesion that should have been biopsied.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'The self-check: the blanch, the pinch, the press and the morning photograph',
    tldr: 'Five minutes: press the reddest patch (vessels blanch, pigment does not), pinch below the collarbone for crepe, press the arms together for the fan of lines, photograph the chest on waking and at bedtime, run a fingertip over it for rough patches, and note the side you sleep on and what you spray on your neck. Colour, lines, crepe, spots — then the plan.',
    bodyHtml: `
      <p>Four tests and two notes. The blanch test sorts the colour: press the reddest area and watch what fades (vessels) and what stays (pigment); a net of both on the sides of the neck and the V that spares the shade under the chin is poikiloderma, and the treatment is light. The pinch and the press sort the texture: fine crinkling on a pinched fold and a fan of lines when the upper arms are pressed inward is crepe and laxity, the type for the stimulators and the non-ablative lasers. The morning-and-evening photographs sort the lines: vertical creases that are deep on waking and soft by bedtime are compression lines, and the pillow is part of the treatment. The fingertip finds the rough patches that need a dermatoscope before anything cosmetic. Then note the side you sleep on, the perfume that lands on your chest, whether the V is in the sunscreen every morning, and — for the woman whose chest changed in her early fifties — the menopause. Judge every treatment on this page against the morning photograph in the low neckline that made you look.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-sunscreen',
    category: 'home',
    title: 'Sunscreen on the V every morning, and no perfume on it',
    tldr: 'Daily sunscreen slowed visible skin ageing by 24% against discretionary use over four and a half years in 903 adults, and poikiloderma of Civatte is a disease of sun, fair skin and photosensitising fragrance. The chest is the site sunscreen forgets and perfume finds; both habits change the direction of every other row.',
    evidence: 'strong',
    focus: 'general',
    note: 'Best for: everyone — the only treatment on the page that prevents, and the one that decides whether the light treatments last',
    sessions: 'Every morning; reapplied at lunch in summer',
    downtime: 'None',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>The chest is the face's neighbour in sun exposure and its opposite in protection: a V-neck takes the same midday sun the face does, and the sunscreen stops at the jaw. The evidence is the face's: in the Australian randomised trial, 903 adults assigned to daily broad-spectrum sunscreen showed 24% less visible skin ageing over four and a half years than those using it at their discretion (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">sunscreen trial</a>), and a year of daily sunscreen alone improved texture, clarity and mottled pigmentation by 40–52% in 32 people (<a href="https://pubmed.ncbi.nlm.nih.gov/27749441/" rel="noopener nofollow" target="_blank">one-year study</a>). For the mottling specifically, the cause list is sun, fair skin, menopause and the photosensitising components of cosmetics and toiletries, especially perfumes (<a href="https://dermnetnz.org/topics/poikiloderma-of-civatte" rel="noopener nofollow" target="_blank">DermNet</a>), so the second habit is to spray fragrance on clothes or wrists rather than the neck and chest. Strong: the one prevention on the page, and the difference between a light treatment that holds and one that is back in eighteen months. The <a href="/sun-damage">sun-damage guide</a> covers filters and the precancer field.</p>
    `,
  },
  {
    id: 'home-retinoid',
    category: 'home',
    title: 'A retinoid on the chest, lower and slower than the face',
    tldr: 'Body skin answers retinoids: 0.4% retinol reduced fine wrinkles on the arms of 36 people averaging 87 in a randomised vehicle-controlled trial (score −1.64 against −0.08), with more collagen and water-binding glycosaminoglycan on biopsy; tretinoin partly restored the collagen synthesis that sun had cut by 56% in photodamaged forearms over 10–12 months. Thin chest skin irritates faster than the face.',
    evidence: 'moderate',
    focus: 'crepe',
    note: 'Best for: the crepey, papery chest — twice a week to start, a pea for the whole V, never the week before a light treatment',
    sessions: 'Nightly, built up over two months, indefinitely',
    downtime: 'Weeks of dryness and peeling on thin skin',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>The retinoid trials with biopsies were done on body skin. In the arm study, 36 residents of two senior facilities averaging 87 years had 0.4% retinol applied to one upper inner arm and vehicle to the other up to three times a week for 24 weeks, randomised and double-blind: fine wrinkling scores fell by 1.64 on the retinol arm against 0.08 on vehicle, with significantly more glycosaminoglycan — the water-binding matrix — and more collagen on biopsy (<a href="https://pubmed.ncbi.nlm.nih.gov/17515510/" rel="noopener nofollow" target="_blank">retinol arm trial</a>). In the forearm study, collagen I formation was 56% lower in sun-damaged forearm skin than in sun-protected buttock skin from the same 26 people, and 10–12 months of 0.1% tretinoin partly restored it in 15 treated patients against 14 on vehicle (<a href="https://pubmed.ncbi.nlm.nih.gov/8336752/" rel="noopener nofollow" target="_blank">tretinoin collagen study</a>). The eight facial trials in the meta-analysis add the wrinkle outcome (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/" rel="noopener nofollow" target="_blank">retinoid meta-analysis</a>). Moderate for the chest: the mechanism and the arm trial transfer, no chest trial exists, and thin gland-poor skin irritates at doses the face tolerates — start with retinol or a low tretinoin twice a week, a pea-sized amount for the whole V, moisturiser over it, and stop a week before any laser or light. The <a href="/wrinkles">wrinkles guide</a> covers the retinoid ladder.</p>
    `,
  },
  {
    id: 'home-acids-urea',
    category: 'home',
    title: 'Lactic and glycolic acid, urea: the body-skin resurfacers',
    tldr: 'Eight per cent glycolic or lactic acid improved mottled pigmentation, sallowness and texture on the face and forearms against vehicle over 22 weeks in a double-blind trial; 12% ammonium lactate and 5–10% urea have decades of body-skin trials for rough, scaly skin. For the crepe and the roughness, not the colour underneath.',
    evidence: 'moderate',
    focus: 'crepe',
    note: 'Best for: rough, dry crepe — a lactic or urea body lotion most nights, the retinoid on the others',
    sessions: 'Nightly or alternate nights',
    downtime: 'Stinging on sun-damaged skin for the first week',
    cost: '€10–25 / month',
    bodyHtml: `
      <p>The alpha-hydroxy acids have a body-skin trial: 8% glycolic acid and 8% L-lactic acid creams, applied to the face and forearms twice daily for 22 weeks in a randomised double-blind vehicle-controlled study, improved mottled hyperpigmentation, sallowness and texture on both sites, the glycolic arm most (<a href="https://pubmed.ncbi.nlm.nih.gov/8651713/" rel="noopener nofollow" target="_blank">Stiller 1996</a>). At higher strength, 12% ammonium lactate beat a petrolatum cream and 5% lactic acid in double-blind trials of scaly, rough skin (<a href="https://pubmed.ncbi.nlm.nih.gov/3514154/" rel="noopener nofollow" target="_blank">1986 trial</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/2808786/" rel="noopener nofollow" target="_blank">1989 trial</a>), and urea has its decades (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8611129/" rel="noopener nofollow" target="_blank">urea review</a>). Moderate: consistent trials on arms and legs, none on the chest, and a surface effect — smoother, better-hydrated, slightly more even — rather than a dermal one. A lactic or urea lotion on the nights the retinoid is off does the roughness half of crepe, and the <a href="/dry-skin">dry-skin guide</a> grades the products.</p>
    `,
  },
  {
    id: 'home-sleep-pads',
    category: 'home',
    title: 'Back-sleeping, a pillow between the breasts, silicone chest pads',
    tldr: 'The mechanism is documented — lateral sleep compresses and shears the downhill skin and about 65% of adults sleep that way — but no trial tests a sleeping position, a bra, a pillow or a silicone pad on chest lines. The pad makers cite their own surveys of 92 users. Cheap, harmless and untested; the position change is the one that addresses the cause.',
    evidence: 'limited',
    focus: 'lines',
    sessions: 'Nightly',
    downtime: 'None',
    cost: '€20–40 for pads; €0 for the pillow',
    bodyHtml: `
      <p>The sleep-wrinkle review lays out the physics — compression, shear and stress on the skin of the downhill side in the lateral and prone positions, in the 65% of adults who sleep on their side — and proposes that repeated nightly compression not only wrinkles skin but expands it (<a href="https://pubmed.ncbi.nlm.nih.gov/27329660/" rel="noopener nofollow" target="_blank">sleep-wrinkle review</a>). It does not test a remedy, and nobody has: there is no trial of back-sleeping, of a pillow or a soft bra placed between the breasts to stop one folding over the other, or of the silicone pads worn overnight to hold the skin flat, whose evidence is the manufacturers' own user surveys — one company reports 92 women and 97.5% "saw a reduction" (<a href="https://wrinklesschminkles.com/pages/clinical-study-silicone-patches-and-more" rel="noopener nofollow" target="_blank">manufacturer's page</a>), which is a satisfaction survey, not a measurement. Limited. The position change is the only one of the three that removes the cause, and the pad is a plausible splint that costs less than one clinic session; neither undoes a line that has already etched.</p>
    `,
  },
];

const inj: Section[] = [
  {
    id: 'inj-caha',
    category: 'inj',
    title: 'Hyperdilute calcium hydroxylapatite (Radiesse)',
    tldr: 'The one chest treatment with a randomised trial: 152 people randomised to diluted Radiesse or delayed treatment, assessor-blinded — 71.2% of treated responders on the décolleté wrinkle scale at rest at 24 weeks against 6.3% of untreated controls, 65.8% against 16.0% with the arms pressed together, 92.6% improved on the investigator scale, bruising in 7 of 116 treated. A biopsy pilot showed new collagen I and elastin at four and seven months.',
    evidence: 'moderate',
    focus: 'lines',
    note: 'Best for: the cleavage lines and the crepe together — one to two sessions, judged at six months, with the pillow fixed first',
    sessions: '1–2 sessions, 1–4 months apart; repeat yearly',
    downtime: '2–5 days of swelling; bruises',
    cost: '€400–700 per session',
    bodyHtml: `
      <p>Calcium hydroxylapatite microspheres diluted one part in two to six with saline and threaded under the dermis do not fill; they provoke collagen. The chest is where this has been tested best. In the manufacturer's registered trial, 152 people were randomised to injection of the décolleté wrinkles with diluted Radiesse or to delayed treatment, with the outcome assessor blinded: at 24 weeks, 71.2% of the treated group were responders on the Merz décolleté wrinkle scale at rest against 6.3% of the untreated, 65.8% against 16.0% on the dynamic scale with the arms pressed together, 92.6% were rated improved by the investigator and 87.4% rated themselves improved, and 16 of 116 treated participants had a treatment-related adverse event, bruising in seven (<a href="https://clinicaltrials.gov/study/NCT05163353" rel="noopener nofollow" target="_blank">Radiesse décolleté trial</a>). The biology comes from a pilot: 20 people aged 35–45 with lax neck and décolletage skin received diluted CaHA at baseline and four months, and biopsies showed collagen I significantly increased at four and seven months, collagen III at four, and elastin and new vessels at both, alongside better elasticity on cutometry and thicker dermis on ultrasound (<a href="https://pubmed.ncbi.nlm.nih.gov/28095536/" rel="noopener nofollow" target="_blank">biopsy pilot</a>); on the neck, two sessions improved horizontal lines in 86% and laxity in 82% of 22 women at four months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10226485/" rel="noopener nofollow" target="_blank">neck study</a>).</p>
      <p>Moderate rather than strong: one randomised trial, run by the maker, with untreated rather than sham controls and results posted on the registry rather than yet in a journal — and still the best evidence any chest treatment has. Nodules are the product's known risk in thin, mobile skin and the reason for the dilution; the <a href="/fillers">filler guide</a> grades the biostimulators and the <a href="/neck">neck guide</a> the same product one level up.</p>
    `,
  },
  {
    id: 'inj-plla',
    category: 'inj',
    title: 'Poly-L-lactic acid (Sculptra)',
    tldr: 'In the maker\'s open-label chest study, 30 people randomised to two dilutions were 93.8% and 78.6% responders on the décolletage scale at nine months with one nodule in the higher-volume group; a Brazilian series of 36 neck-and-chest patients found photographic improvement in 81–100% of the 21 evaluable and 91.6% pleased. Consistent, uncontrolled, and slower than the calcium.',
    evidence: 'emerging',
    focus: 'laxity',
    note: 'Best for: diffuse crepe and laxity rather than discrete lines — a two-to-three-session course judged at six to nine months',
    sessions: '2–3 sessions, 4–6 weeks apart',
    downtime: '2–3 days of swelling; massage for five days',
    cost: '€500–900 per vial',
    bodyHtml: `
      <p>Poly-L-lactic acid is the slower collagen stimulator, dissolved in more water for the chest than the face and injected in a course. Its chest evidence is open-label. The manufacturer's registered study randomised 30 adults to Sculptra at the current 8 mL dilution or a new 17 mL dilution for décolletage wrinkles: at nine months 93.8% and 78.6% were responders on the Galderma décolletage scale as judged live by the treating investigator, every participant rated themselves improved at six months, and one of 14 in the higher-volume group developed an injection-site nodule (<a href="https://clinicaltrials.gov/study/NCT05538728" rel="noopener nofollow" target="_blank">Sculptra décolletage study</a>). The Brazilian series that opened the field treated 36 patients with flaccidity, atrophy and wrinkles of the neck and chest and found improvement in 81–100% of the 21 with photographable changes, with 91.6% of all 36 pleased and willing to repeat (<a href="https://pubmed.ncbi.nlm.nih.gov/19438668/" rel="noopener nofollow" target="_blank">36-patient series</a>); the chest reviews list it first among injectables (<a href="https://pubmed.ncbi.nlm.nih.gov/21463389/" rel="noopener nofollow" target="_blank">chest rejuvenation review</a>). Emerging: no control group anywhere, unblinded assessment, and the nodule rate that thin skin and a product of particles produce — the <a href="/fillers">filler guide</a> puts it at 4.7–28.6% across the biostimulator literature. Reasonable for the diffusely lax chest in experienced hands; the calcium has the trial.</p>
    `,
  },
  {
    id: 'inj-ha-boosters',
    category: 'inj',
    title: 'Hyaluronic skin boosters and fine gel in the lines',
    tldr: 'A 33-person randomised trial of Skinboosters in the décolletage completed in 2020 and has posted no results; an 81-volunteer single-centre study of another booster across face, neck and décolleté reported improvement on aesthetic scales and instruments at six months. Hydration and a little smoothing for a season; the lines are pressed back in each night.',
    evidence: 'emerging',
    focus: 'crepe',
    sessions: '3 sessions, 3–4 weeks apart; repeat at 6–9 months',
    downtime: '1–3 days of bumps',
    cost: '€300–500 per session',
    bodyHtml: `
      <p>Microdroplets of a soft hyaluronic gel across the chest hydrate and plump the surface the way they do on the cheek, and fine gel threaded into a cleavage line lifts it for a while. The controlled evidence has not arrived: a randomised trial of Restylane Skinboosters Vital in the décolletage region enrolled 33 people, completed at the end of 2020 and has posted no results (<a href="https://clinicaltrials.gov/study/NCT04488939" rel="noopener nofollow" target="_blank">Skinboosters décolletage trial</a>). The open evidence is a single-centre prospective study in which 81 volunteers received three intradermal sessions of a hyaluronic booster three weeks apart across face, neck and décolleté, with the aesthetic scale improving at every visit and biometric gains on the face maintained at six months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12620603/" rel="noopener nofollow" target="_blank">81-volunteer study</a>). Emerging, as the <a href="/fillers">filler guide</a> grades the same use. The honest expectation: a better-hydrated, slightly smoother chest for a season, lumps in thin skin if placed too shallow, and a vertical line that reappears when the pillow does.</p>
    `,
  },
  {
    id: 'inj-hrt',
    category: 'inj',
    title: 'Menopausal hormone therapy',
    tldr: 'Low oestrogen is on the cause list for poikiloderma of Civatte, and about five years of oestrogen went with 7–15% thicker skin in 98 postmenopausal women; oestrogen users had 24% lower odds of dry skin and a third lower odds of wrinkling in NHANES I. No trial has treated a chest. A decision about menopause, taken with a menopause clinician, that happens to include this skin.',
    evidence: 'emerging',
    focus: 'laxity',
    sessions: 'Daily; reviewed yearly',
    downtime: 'None',
    cost: '€10–40 / month',
    bodyHtml: `
      <p>The chest is oestrogen-sensitive skin, and its ageing accelerates in the years the hormone leaves: low oestrogen is among the listed causes of poikiloderma of Civatte (<a href="https://dermnetnz.org/topics/poikiloderma-of-civatte" rel="noopener nofollow" target="_blank">DermNet</a>), 98 postmenopausal women with about five years of oestrogen had 7–15% thicker skin and 35% more sebum than untreated peers (<a href="https://pubmed.ncbi.nlm.nih.gov/8993951/" rel="noopener nofollow" target="_blank">98-woman comparison</a>), and among 3,875 postmenopausal women in NHANES I, oestrogen users had 24% lower odds of dry skin and about a third lower odds of wrinkling after adjustment (<a href="https://pubmed.ncbi.nlm.nih.gov/9080894/" rel="noopener nofollow" target="_blank">NHANES I</a>). Nothing has been measured on a chest. Emerging, and the same rule as everywhere on this site: nobody starts hormone therapy for skin, the Menopause Society's position statement sets out who benefits (<a href="https://journals.lww.com/menopausejournal/fulltext/2022/07000/the_2022_hormone_therapy_position_statement_of_the.4.aspx" rel="noopener nofollow" target="_blank">position statement</a>), and the <a href="/anti-aging-50s">50s guide</a> and the <a href="/sagging-skin">sagging-skin guide</a> cover the decision and the skin data.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-ipl',
    category: 'clinic',
    title: 'Intense pulsed light for the red-brown mottling',
    tldr: 'Two series: 135 patients with poikiloderma of the neck and chest cleared more than 75% of the vessels and pigment in one to five sessions with 5% side effects, and 175 patients cleared more than 80% in three sessions with 5% transient side effects and no scarring; biopsies show more even melanin and denser collagen afterwards. The treatment of choice for the colour, at chest settings, on untanned skin.',
    evidence: 'moderate',
    focus: 'colour',
    note: 'Best for: the red-brown net of poikiloderma in fair skin — three sessions a month apart, after the dermatoscope, never on a tan',
    sessions: '3–5 sessions, 3–4 weeks apart; a top-up yearly',
    downtime: '3–7 days of darkened mottling that flakes',
    cost: '€200–400 per session',
    bodyHtml: `
      <p>Intense pulsed light treats the two components of poikiloderma at once, which is why it became the standard. In the first large series, 135 patients with typical changes on the neck or upper chest received one to five treatments and cleared more than 75% of the telangiectasia and hyperpigmentation, with side effects, including pigment changes, in 5%, and many noting smoother texture (<a href="https://pubmed.ncbi.nlm.nih.gov/10971554/" rel="noopener nofollow" target="_blank">135-patient IPL series</a>); in the seven-year Italian series, 175 patients of skin types I–III averaging 49 years had three sessions three weeks apart and cleared more than 80% of the vascular and pigmented components, with minimal transient side effects in 5% and no scarring or pigment disturbance (<a href="https://pubmed.ncbi.nlm.nih.gov/18177401/" rel="noopener nofollow" target="_blank">175-patient IPL series</a>). Biopsies from 14 necks after three monthly sessions showed more homogeneous melanin, more fibroblasts and unfragmented elastic fibres and denser, thicker collagen bundles, with clinical improvement in 93% (<a href="https://pubmed.ncbi.nlm.nih.gov/22540888/" rel="noopener nofollow" target="_blank">IPL histology study</a>). The systematic review of IPL rates the poikiloderma evidence level 3 — series, not trials — against level 1 for telangiectasia and melasma (<a href="https://pubmed.ncbi.nlm.nih.gov/24495252/" rel="noopener nofollow" target="_blank">IPL systematic review</a>). Moderate: 310 consistent patients and no control group. The <a href="/laser-ipl">laser guide</a> covers settings and the reasons darker and tanned skin are excluded; the sunscreen row decides whether it lasts.</p>
    `,
  },
  {
    id: 'clinic-vascular-lasers',
    category: 'clinic',
    title: 'Pulsed-dye and 532 nm lasers for the redness',
    tldr: 'A modern pulsed-dye laser with a 15 mm spot improved poikiloderma by an average 49% after four monthly sessions in 17 patients, with 10 of 17 more than half better and side effects of swelling, redness and bruising; a 532 nm KTP-type laser improved the neck 74% and the chest 68% in 20. At facial fluences, an older pulsed-dye series left six of eight patients permanently depigmented.',
    evidence: 'moderate',
    focus: 'colour',
    note: 'Best for: the redness-dominant chest, and the skin IPL should not treat — low fluence, a test patch, and a laser that is used for this every week',
    sessions: '3–4 sessions, a month apart',
    downtime: '2–7 days of bruising or redness',
    cost: '€250–500 per session',
    bodyHtml: `
      <p>Vascular lasers target the vessels that make the red half of poikiloderma. In a blinded study of a redesigned pulsed-dye laser with a 15 mm spot and 50% higher energy, 17 patients completed four monthly treatments: three blinded raters correctly identified the baseline photograph in 94% of comparisons, 14 of 17 improved by more than 40% and 10 by more than 50%, the average improvement was 49%, and side effects were mild swelling, redness and purpura with pain of 3.5 on an 11-point scale (<a href="https://pubmed.ncbi.nlm.nih.gov/30480322/" rel="noopener nofollow" target="_blank">pulsed-dye study</a>). A 2025 study of a long-pulse 532 nm laser with cryogen cooling treated 20 people four times and found average improvement of 74% on the neck and 68% on the chest two months later, with redness, swelling and purpura the only side effects (<a href="https://pubmed.ncbi.nlm.nih.gov/39789753/" rel="noopener nofollow" target="_blank">532 nm study</a>), on the back of an older KTP series (<a href="https://pubmed.ncbi.nlm.nih.gov/10354107/" rel="noopener nofollow" target="_blank">KTP series</a>). The caution is the older series: eight patients treated with a 585 nm pulsed-dye laser at 450 microseconds cleared their vessels, and the six treated at 5–7 J/cm² reported severe depigmentation four to eleven months later while the two at lower fluence did not (<a href="https://pubmed.ncbi.nlm.nih.gov/17062040/" rel="noopener nofollow" target="_blank">depigmentation series</a>). Moderate: blinded but small and uncontrolled. Fluence as low as works, a test patch reviewed at three months, and an operator who treats chests weekly.</p>
    `,
  },
  {
    id: 'clinic-thulium-nafl',
    category: 'clinic',
    title: 'Non-ablative fractional lasers: 1927 nm thulium, 1550 nm, low-power diodes',
    tldr: 'In a randomised side-by-side trial on twelve photodamaged décolletés, a single 1927 nm thulium treatment improved overall photodamage, mottling and wrinkles against lesion-directed control and matched thulium plus photodynamic therapy; a nine-patient pilot on non-facial skin rated improvement 3.25 of 4 with no scarring or pigment change; four sessions of a low-power 1440/1927 nm diode improved chest wrinkles, texture and pigment in 20 women. The safe resurfacing for this skin.',
    evidence: 'moderate',
    focus: 'crepe',
    note: 'Best for: crepe with mottled pigment and rough patches — a course of three, in winter, after the dermatoscope',
    sessions: '3 sessions, 4 weeks apart',
    downtime: '3–5 days of redness, swelling and bran-like peeling',
    cost: '€300–600 per session',
    bodyHtml: `
      <p>Non-ablative fractional lasers heat columns of dermis without removing the surface, which on adnexa-poor skin is the difference between resurfacing and scarring. The 1927 nm thulium wavelength, absorbed strongly by water in the upper dermis and epidermis, has the chest's only randomised trial: twelve Danish women with moderate-to-severe décolleté photodamage had their chests divided into four areas randomised to a single thulium treatment, photodynamic therapy, both, or lesion-directed curettage alone, and at twelve weeks the thulium-treated areas had improved overall photodamage, mottled pigmentation and wrinkles against the control area, with the combination no better than thulium alone except for texture (<a href="https://pubmed.ncbi.nlm.nih.gov/31788828/" rel="noopener nofollow" target="_blank">thulium décolleté trial</a>). The pilot before it treated nine people with non-facial photodamage three times and a blinded assessor rated mean improvement 3.25 on a 0–4 scale for photodamage and 3.33 for lentigines, with no scarring or pigment disturbance (<a href="https://pubmed.ncbi.nlm.nih.gov/21342312/" rel="noopener nofollow" target="_blank">thulium pilot</a>). A gentler low-power 1440/1927 nm diode, four sessions a month apart, improved chest wrinkle scores by 0.7, texture by 1.4 and pigment by 0.67 points in the 20 of 24 women who completed (<a href="https://pubmed.ncbi.nlm.nih.gov/38334165/" rel="noopener nofollow" target="_blank">diode chest study</a>), and three sessions of a 1550 nm laser on 19 necks shifted wrinkle scores from severe to moderate and thickened the dermis from 1.15 to 1.30 mm on ultrasound (<a href="https://pubmed.ncbi.nlm.nih.gov/40956467/" rel="noopener nofollow" target="_blank">1550 nm neck study</a>). Moderate: one small randomised trial and consistent small series. The <a href="/laser-ipl">laser guide</a> grades the wavelengths; on the chest the rule is lower density than the face, no tan, and the retinoid paused a week before.</p>
    `,
  },
  {
    id: 'clinic-mfu',
    category: 'clinic',
    title: 'Microfocused ultrasound (Ultherapy) for lines and laxity',
    tldr: 'In 24 women with moderate-to-severe chest wrinkles on the Fabi-Bolton scale, a single ultrasound treatment improved wrinkles over 180 days with high satisfaction; in the multicentre follow-up, 66% of evaluable subjects showed aesthetic improvement at 180 days on blinded assessment and about 75% at 90, with mild adverse events. One session, no surface injury, and fair skin only in the trials.',
    evidence: 'moderate',
    focus: 'laxity',
    note: 'Best for: the lax, crepey chest that folds when the arms press together — one treatment, judged at six months',
    sessions: 'Once; repeat at 12–18 months',
    downtime: 'None beyond an hour of redness; sore for days',
    cost: '€1,000–2,000',
    bodyHtml: `
      <p>Microfocused ultrasound places lines of thermal coagulation points at 1.5, 3 and 4.5 mm without touching the surface, which suits skin that scars. Its chest evidence is two industry-run studies. In the first, 24 women with moderate-to-severe chest wrinkles on the validated Fabi-Bolton scale had a single treatment and were measured at 90 and 180 days by the scale, by mid-clavicle-to-nipple distance, by masked assessment and by satisfaction: wrinkles improved over time with appreciable efficacy and satisfaction, in a single centre with only skin types I and II enrolled (<a href="https://pubmed.ncbi.nlm.nih.gov/24054759/" rel="noopener nofollow" target="_blank">24-woman study</a>). In the multicentre follow-up, healthy women with moderate-to-severe décolleté lines received 280 treatment lines with three transducers in one session: 77 evaluable subjects — 66.4% — showed aesthetic improvement at 180 days on blinded assessment, roughly 75% at 90 days, most were satisfied, and adverse events were generally mild (<a href="https://pubmed.ncbi.nlm.nih.gov/25705947/" rel="noopener nofollow" target="_blank">multicentre study</a>). Moderate: blinded photographs, no control group, fair skin, and the maker's funding. The <a href="/sagging-skin">sagging-skin guide</a> grades the same device on the face and neck, where a randomised trial exists; on the chest the appeal is a single session with no wound on skin that heals badly.</p>
    `,
  },
  {
    id: 'clinic-pdt',
    category: 'clinic',
    title: 'Photodynamic therapy for the sun-damaged chest',
    tldr: 'In a randomised split-chest study, three sessions of photodynamic therapy improved wrinkles in all eleven women who completed and texture in ten, and pre-treating one side with a low-energy thulium laser added nothing but worse side effects; in the Danish trial it equalled thulium only in combination. Treats the precancer field and the photodamage together; graded strong for the keratoses in the sun-damage guide, emerging as a cosmetic chest treatment.',
    evidence: 'emerging',
    focus: 'colour',
    note: 'Best for: the chest with rough precancerous patches and photodamage together — the field treatment first, the cosmetic gain as a side benefit',
    sessions: '2–3 sessions, 4 weeks apart',
    downtime: '3–7 days of redness, swelling and crusting; strict sun avoidance for 48 hours',
    cost: '€300–600 per session',
    bodyHtml: `
      <p>Photodynamic therapy — a photosensitising cream incubated on the skin and activated by light — is a treatment for the field of actinic keratoses that also smooths what it treats. In a randomised, evaluator-blinded split-chest study, women with chest photodamage had three courses over eight weeks, one side pre-treated with a low-energy 1927 nm laser before the photodynamic session: at week 20, all eleven who completed had improved wrinkle scores and ten improved texture on both sides, with no difference between the pre-treated and untreated sides and significantly worse adverse events on the laser-plus-PDT side (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7003803/" rel="noopener nofollow" target="_blank">split-chest PDT study</a>). In the Danish four-area trial, thulium alone matched the thulium-plus-PDT combination on overall photodamage, with the combination better for texture (<a href="https://pubmed.ncbi.nlm.nih.gov/31788828/" rel="noopener nofollow" target="_blank">thulium décolleté trial</a>). Emerging as a cosmetic treatment; the <a href="/sun-damage">sun-damage guide</a> grades it strong for the keratoses, which on a photodamaged chest are often the reason it should come first. The chest reviews list it among the standard options (<a href="https://pubmed.ncbi.nlm.nih.gov/21463389/" rel="noopener nofollow" target="_blank">chest rejuvenation review</a>).</p>
    `,
  },
  {
    id: 'clinic-microneedling-rf',
    category: 'clinic',
    title: 'Microneedling and radiofrequency microneedling',
    tldr: 'Four monthly sessions of a microneedling pen at up to 2.5 mm improved neck wrinkles on blinded assessment in 32 of 35 adults; no chest trial exists for either plain or radiofrequency microneedling. Plausible on thin skin at conservative depth, unproven, and a device that must be turned down for the chest.',
    evidence: 'emerging',
    focus: 'crepe',
    sessions: '3–4 sessions, a month apart',
    downtime: '2–3 days of redness',
    cost: '€150–300 (needling) to €400–800 (radiofrequency) per session',
    bodyHtml: `
      <p>Microneedling has the neck's evidence and not the chest's: 35 adults had four monthly sessions with a pen at depths up to 2.5 mm, and two blinded raters found significant wrinkle improvement on the neck at 90 days in the 32 who completed (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9472661/" rel="noopener nofollow" target="_blank">neck microneedling study</a>). Radiofrequency microneedling, which adds heat at the needle tips, has trials on the face and the lower face and neck but none on the chest, and the <a href="/microneedling">microneedling guide</a> grades both. Emerging for this site: a mechanism that transfers, depths and energies that must be lower than the face on a dermis this thin, and no chest data. A reasonable middle rung for crepe in darker skin that the light devices exclude, at a conservative setting, with an operator who has treated chests before.</p>
    `,
  },
  {
    id: 'clinic-peels',
    category: 'clinic',
    title: 'Superficial peels: lactic, glycolic, low-strength TCA',
    tldr: 'Superficial peels appear in every chest-rejuvenation review and in no chest trial; the 8% acid trial on face and forearms and the peel literature on the face support a course of superficial peels for roughness and mottling, and the chest\'s thin, gland-poor skin rules out the medium depths that work on the face. Cheap, modest, and not to be taken deeper.',
    evidence: 'emerging',
    focus: 'crepe',
    sessions: '4–6 peels, 2–4 weeks apart',
    downtime: '2–5 days of flaking',
    cost: '€100–250 per peel',
    bodyHtml: `
      <p>Chemical peels are listed among the chest options in both reviews (<a href="https://pubmed.ncbi.nlm.nih.gov/21463389/" rel="noopener nofollow" target="_blank">chest rejuvenation review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/27128235/" rel="noopener nofollow" target="_blank">décolletage review</a>), and the evidence beneath them is borrowed: the double-blind trial of 8% glycolic and lactic acid on face and forearms for mottling and texture (<a href="https://pubmed.ncbi.nlm.nih.gov/8651713/" rel="noopener nofollow" target="_blank">Stiller 1996</a>) and a laboratory study of a professional TCA-lactic peel showing the enzyme and gene changes behind collagen repair and pigment reduction (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7928281/" rel="noopener nofollow" target="_blank">TCA-lactic peel study</a>). No chest trial exists. Emerging: a course of superficial peels — lactic, mandelic, glycolic or 10–15% TCA — smooths and evens a rough chest modestly, and the medium-depth peels that treat facial crepe are where the chest's thin, adnexa-poor skin scars and depigments. The <a href="/chemical-peels">peel guide</a> covers depths and the darker-skin choices.</p>
    `,
  },
  {
    id: 'clinic-fractional-ablative',
    category: 'clinic',
    title: 'Fractional CO2 and erbium resurfacing — with the scar warning',
    tldr: 'The reviews allow ablative fractional lasers on the chest "for more dramatic results" with longer healing and more adverse events; the case literature shows why — five necks scarred after fractional CO2 at 20–30 mJ, and a 2016 report of severe neck scarring from aggressive settings. No chest trial. Last, low, and only from someone who treats chests.',
    evidence: 'emerging',
    focus: 'crepe',
    sessions: '1–2, months apart',
    downtime: '7–14 days of raw, crusted skin; weeks of redness',
    cost: '€800–1,500 per session',
    bodyHtml: `
      <p>Fractional ablative lasers vaporise columns of skin and rely on the surrounding follicles and glands to re-grow the surface — the structures the chest lacks. The chest reviews permit them "for more dramatic results, although longer healing times and potential adverse effects are to be expected" and trace the adverse events to the thin dermis and sparse pilosebaceous units (<a href="https://pubmed.ncbi.nlm.nih.gov/21463389/" rel="noopener nofollow" target="_blank">chest rejuvenation review</a>). The case series show the cost of getting it wrong: five patients treated for neck photodamage with the same fractional CO2 device at 20–30 mJ and 25–30% coverage — routine facial settings — developed hypertrophic scars along the skin folds within weeks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2747732/" rel="noopener nofollow" target="_blank">neck scarring series</a>), and a 2016 report describes severe scarring of a 45-year-old's neck after aggressive fractional CO2, with the author's recommended modifications (<a href="https://pubmed.ncbi.nlm.nih.gov/27115980/" rel="noopener nofollow" target="_blank">severe neck scarring report</a>). No chest trial. Emerging on this site — the <a href="/laser-ipl">laser guide</a> grades the same lasers strong on the face — and the last rung: low energy, low density, a test area, winter, fair untanned skin, and an operator whose photographs of chests you have seen.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-scars',
    category: 'safety',
    title: 'The chest scars: adnexa, fluence and the sternum',
    tldr: 'The chest re-grows skin from a fraction of the follicles and glands the face has, so any treatment that removes the surface heals slowly and can scar; the sternum is a classic site for thick, raised scars. Fractional CO2 at facial settings scarred five necks; the safe order is non-ablative first, ablative last and low, a test patch always, and no resurfacing for anyone who has ever scarred thickly.',
    bodyHtml: `
      <p>Every laser, peel and needle relies on the pilosebaceous units — follicles and oil glands — to re-epithelialise the wound it makes, and the chest has far fewer of them and a thinner dermis, which the reviews name as the reason its adverse events are commoner (<a href="https://pubmed.ncbi.nlm.nih.gov/21463389/" rel="noopener nofollow" target="_blank">chest rejuvenation review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/40956467/" rel="noopener nofollow" target="_blank">neck laser study</a>). The neck series is the warning that transfers directly: five patients scarred after fractional CO2 at 20–30 mJ, two of them described in detail with firm pale papules in lines along the skin folds and hypopigmentation, after settings that are unremarkable on the face (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2747732/" rel="noopener nofollow" target="_blank">neck scarring series</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/27115980/" rel="noopener nofollow" target="_blank">severe neck scarring report</a>). The sternum adds its own problem: the skin over the breastbone is under constant tension and is one of the classic sites for hypertrophic scars and keloids, so a piercing, a surgical scar or an acne scar that thickened there is a reason to stay with the non-ablative rows. Order of safety on this skin: sunscreen and topicals; light and non-ablative lasers; ultrasound and the stimulators; ablation last, low, tested on a patch and reviewed at three months.</p>
    `,
  },
  {
    id: 'safety-pigment',
    category: 'safety',
    title: 'Depigmentation, darkening, and the tan that turns light into burns',
    tldr: 'Pulsed-dye at 5–7 J/cm² left six of eight poikiloderma patients permanently depigmented while lower fluence did not; the IPL series report pigment changes in about 5%; and a tan or darker skin type turns any light device into a burn and a patch of darkening that lasts months. Fluence low, a test patch, winter, untanned, and skin types IV–VI treated with needles rather than light.',
    bodyHtml: `
      <p>Light treats poikiloderma by destroying vessels and pigment, and the same energy destroys the melanocytes that make the skin's own colour. The pulsed-dye series is explicit — six of eight patients treated at 5–7 J/cm² reported severe depigmentation four to eleven months later, the two at 3.5–5.5 J/cm² did not, and the authors advise fluences as low as possible (<a href="https://pubmed.ncbi.nlm.nih.gov/17062040/" rel="noopener nofollow" target="_blank">depigmentation series</a>); the IPL series put pigment changes and other side effects at around 5% (<a href="https://pubmed.ncbi.nlm.nih.gov/10971554/" rel="noopener nofollow" target="_blank">135-patient IPL series</a>). A summer tan or a naturally darker skin type puts melanin in the path of every light device on this page — the multicentre ultrasound study enrolled only skin types I and II, and the IPL series types I–III — and the result is a burn, blistering and a patch of post-inflammatory darkening on skin that takes months to even out. Rules: light in winter on untanned skin, fluence at the low end and a test patch reviewed at three months, sunscreen on the V for the rest of the year, and for skin types IV–VI the retinoid, the acids, the collagen stimulators and conservative microneedling rather than light. The <a href="/laser-ipl">laser guide</a> has the darker-skin section.</p>
    `,
  },
  {
    id: 'safety-stimulators',
    category: 'safety',
    title: 'Nodules, lumps and the wrong product in thin skin',
    tldr: 'Poly-L-lactic acid produced a nodule in one of 14 chests in the maker\'s study and nodules in 5–29% of patients across the biostimulator literature; calcium hydroxylapatite is diluted for the chest precisely to avoid them; hyaluronic gel placed shallow in thin skin shows as bumps; and undiluted filler in a cleavage line is a lump you can see in a low neckline. Dilution, depth, massage and an injector who treats chests.',
    bodyHtml: `
      <p>The chest's dermis is thin enough that anything placed in it shows. Poly-L-lactic acid's known problem is the nodule: one of 14 participants in the higher-volume group of the maker's chest study developed an injection-site nodule (<a href="https://clinicaltrials.gov/study/NCT05538728" rel="noopener nofollow" target="_blank">Sculptra décolletage study</a>), and across the biostimulator literature nodules were most notable with PLLA at 4.7–28.6% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13214704/" rel="noopener nofollow" target="_blank">biostimulator review</a>), which is why the chest protocol dilutes it more than the face and massages it for days. Calcium hydroxylapatite is hyperdiluted for the same reason — the trial's treatment-related events were bruising and swelling in 16 of 116 (<a href="https://clinicaltrials.gov/study/NCT05163353" rel="noopener nofollow" target="_blank">Radiesse décolleté trial</a>) — and undiluted CaHA or a volumising hyaluronic gel threaded into a cleavage line is a visible ridge in a neckline. The <a href="/fillers">filler guide</a> covers the products and the dissolving; the practical rule is that the chest is a skin-quality zone, not a volume zone, and the syringe that fills a cheek does not belong on it.</p>
    `,
  },
  {
    id: 'safety-precancer',
    category: 'safety',
    title: 'Rough patches and the dermatoscope: the check before the cosmetic',
    tldr: 'A chest crepey enough to treat has usually had enough sun to grow precancers: twelve women with photodamaged décolletés carried 184 actinic keratoses. A rough patch, a spot that bleeds, scales or changes, or a pearly bump is examined and, if needed, biopsied before any light, laser or peel — both because it needs its own treatment and because cosmetic devices can hide it.',
    bodyHtml: `
      <p>The skin this page treats is sun-damaged skin, and sun-damaged skin grows actinic keratoses, squamous-cell carcinomas and basal-cell carcinomas. The Danish trial makes the point without meaning to: its twelve women, selected for moderate-to-severe décolleté photodamage, had 184 thin actinic keratoses between them, curetted before the cosmetic treatment began (<a href="https://pubmed.ncbi.nlm.nih.gov/31788828/" rel="noopener nofollow" target="_blank">thulium décolleté trial</a>). Anything rough that catches a fingernail, any spot that scales, bleeds, itches or changes, any pearly or pink bump that does not heal, and any new dark or irregular mark gets a dermatoscope examination first, and the <a href="/sun-damage">sun-damage guide</a> grades the field treatments that clear the precancers — fluorouracil, photodynamic therapy — some of which improve the crepe as a side effect. Intense pulsed light and lasers applied over an unexamined lesion can blur its features and delay a diagnosis; they can also treat a keratosis by accident and leave the cancer beside it. Check, then cosmetic.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-sleep-lines',
    category: 'faq',
    title: 'Do the vertical lines from sleeping go away?',
    tldr: 'The morning ones do; the ones still there at bedtime have etched into a dermis that has lost its recoil and need the pillow plus a collagen stimulator or a non-ablative laser. Nothing injected into a line that is pressed back in every night lasts as long as it does on the face.',
    bodyHtml: `
      <p>Compression wrinkles begin as creases that smooth out within hours of getting up and end as lines that stay, once the elastic fibres beneath them have fragmented; the sleep-wrinkle review describes the forces and the progression (<a href="https://pubmed.ncbi.nlm.nih.gov/27329660/" rel="noopener nofollow" target="_blank">sleep-wrinkle review</a>). The morning-and-evening photographs tell you which stage you are at. For the first, the position and a pillow between the breasts are the whole treatment; for the second, the hyperdilute calcium hydroxylapatite trial is the best evidence any chest line has (<a href="https://clinicaltrials.gov/study/NCT05163353" rel="noopener nofollow" target="_blank">Radiesse décolleté trial</a>), with the non-ablative lasers and ultrasound behind it — and the pillow still, because the cause returns nightly.</p>
    `,
  },
  {
    id: 'faq-face-products',
    category: 'faq',
    title: 'Can I use my face retinoid and acids on my chest?',
    tldr: 'Yes, lower and slower: the trials that showed retinoids rebuild body skin used 0.4% retinol three times a week and 0.1% tretinoin daily on arms, and chest skin, thinner and gland-poor, irritates faster than the face. Twice a week to start, a pea for the whole V, a lactic or urea lotion on the other nights, sunscreen every morning.',
    bodyHtml: `
      <p>The arm and forearm trials are the reassurance (<a href="https://pubmed.ncbi.nlm.nih.gov/17515510/" rel="noopener nofollow" target="_blank">retinol arm trial</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/8336752/" rel="noopener nofollow" target="_blank">tretinoin collagen study</a>) and the chest's anatomy is the caution: fewer oil glands means less of the lipid that buffers a retinoid, and the redness and peeling that a face shrugs off in a fortnight last longer here. The face routine transfers at a lower strength and frequency, with the acids on alternate nights rather than layered, and everything paused for a week before a light or laser session. Nothing topical touches the red-brown mottling; that is the light rows.</p>
    `,
  },
  {
    id: 'faq-red-brown',
    category: 'faq',
    title: 'What is the red-brown mottling on my chest, and will cream fix it?',
    tldr: 'Poikiloderma of Civatte — sun, fair skin, low oestrogen and often a perfume — and no: it is vessels and pigment, and only light removes them. Intense pulsed light cleared more than 75–80% in two series of 135 and 175 patients; sunscreen and no fragrance on the V keep it away.',
    bodyHtml: `
      <p>The net of red and brown on the sides of the neck and the V, sparing the shade under the chin, is a chronic sun change that retinoids, hydroquinone and acids barely touch (<a href="https://dermnetnz.org/topics/poikiloderma-of-civatte" rel="noopener nofollow" target="_blank">DermNet</a>). The two intense-pulsed-light series cleared more than 75% and more than 80% of it with about 5% side effects (<a href="https://pubmed.ncbi.nlm.nih.gov/10971554/" rel="noopener nofollow" target="_blank">135-patient IPL series</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/18177401/" rel="noopener nofollow" target="_blank">175-patient IPL series</a>), and the vascular lasers treat the redness half. It comes back with the sun and the perfume, so the maintenance is the first row on the page.</p>
    `,
  },
  {
    id: 'faq-best-single',
    category: 'faq',
    title: 'What is the single best treatment for a crepey chest?',
    tldr: 'There is not one, because there are three problems: light for the red-brown colour, hyperdilute calcium hydroxylapatite or a thulium laser course for the crepe and lines, and sunscreen with a change of sleeping side to stop both. If you can only do one clinic treatment, the calcium has the trial; if the chest is mainly mottled, intense pulsed light.',
    bodyHtml: `
      <p>Sort the type first with the blanch, the pinch and the morning photograph. A chest that is mainly colour gets intense pulsed light or a vascular laser; a chest that is mainly crepe and vertical lines gets the collagen stimulator with the randomised trial (<a href="https://clinicaltrials.gov/study/NCT05163353" rel="noopener nofollow" target="_blank">Radiesse décolleté trial</a>) or a course of the thulium laser that has the chest's only laser trial (<a href="https://pubmed.ncbi.nlm.nih.gov/31788828/" rel="noopener nofollow" target="_blank">thulium décolleté trial</a>); a chest that is both gets the light first and the stimulator after. Every version gets the sunscreen and the pillow, or the clinic result is gone in eighteen months.</p>
    `,
  },
  {
    id: 'faq-laser-safe',
    category: 'faq',
    title: 'Are lasers safe on the chest?',
    tldr: 'Non-ablative ones, at chest settings, on untanned skin: yes, with pigment change in about 5% and no scarring in the series. Ablative fractional lasers at facial settings scarred five necks in one series and are the last rung; vascular lasers at facial fluences depigmented six of eight. The operator\'s experience with chests matters more than the machine.',
    bodyHtml: `
      <p>The 1927 nm thulium pilot and trial reported no scarring or pigment disturbance (<a href="https://pubmed.ncbi.nlm.nih.gov/21342312/" rel="noopener nofollow" target="_blank">thulium pilot</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/31788828/" rel="noopener nofollow" target="_blank">thulium décolleté trial</a>), the IPL series about 5% mostly transient side effects (<a href="https://pubmed.ncbi.nlm.nih.gov/18177401/" rel="noopener nofollow" target="_blank">175-patient IPL series</a>), and the scarring and depigmentation reports all involve settings or fluences that were fine on a face (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2747732/" rel="noopener nofollow" target="_blank">neck scarring series</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/17062040/" rel="noopener nofollow" target="_blank">depigmentation series</a>). Ask the operator how many chests they treat a month and to show you their own before-and-after photographs of chests; ask for a test patch; and go in winter, untanned, with the retinoid paused.</p>
    `,
  },
  {
    id: 'faq-pads',
    category: 'faq',
    title: 'Do silicone chest pads work?',
    tldr: 'Nobody has tested them: the evidence is the makers\' own surveys, in which almost everyone says they saw a difference. As a splint that stops the crease forming overnight they are plausible and cheap; as a treatment for lines that are already etched they are not. Sleeping on your back does the same for free.',
    bodyHtml: `
      <p>The pads hold the skin flat and occlude it overnight, and the only published outcomes are the manufacturers' user surveys (<a href="https://wrinklesschminkles.com/pages/clinical-study-silicone-patches-and-more" rel="noopener nofollow" target="_blank">manufacturer's page</a>), which record satisfaction rather than a measured line. The mechanism they interrupt is real (<a href="https://pubmed.ncbi.nlm.nih.gov/27329660/" rel="noopener nofollow" target="_blank">sleep-wrinkle review</a>), so a pad worn by a committed side-sleeper is a reasonable experiment against the morning photograph for a month; a line that is there at bedtime needs the clinic rows.</p>
    `,
  },
  {
    id: 'faq-menopause',
    category: 'faq',
    title: 'Why did my chest change so fast at menopause?',
    tldr: 'Because the sun had already thinned it and the oestrogen that was compensating left: low oestrogen is a listed cause of the mottling, and hormone therapy went with 7–15% thicker skin in 98 women. Hormone therapy is a menopause decision, not a chest treatment; the retinoid, the sunscreen and the stimulators are the chest treatments.',
    bodyHtml: `
      <p>The chest's dermis is thin and oestrogen-sensitive, and the decade of sun before menopause is paid for in the two years after it: the skin thins, the crepe appears, and in fair skin the red-brown net of poikiloderma often arrives in the same window (<a href="https://dermnetnz.org/topics/poikiloderma-of-civatte" rel="noopener nofollow" target="_blank">DermNet</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/8993951/" rel="noopener nofollow" target="_blank">98-woman comparison</a>). The hormone question belongs to the <a href="/anti-aging-50s">50s guide</a>; the chest's own answers are the sunscreen, the retinoid at body strength, and the calcium or the laser for what has already changed.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long does each take to show?',
    tldr: 'Sunscreen and the retinoid: three to six months on the photograph; intense pulsed light: three sessions, the mottling darker and flaking for a week after each; the thulium laser: three sessions, judged a month after the last; calcium hydroxylapatite: six months, with the trial\'s endpoint at 24 weeks; ultrasound: 90 to 180 days; poly-L-lactic acid: six to nine months.',
    bodyHtml: `
      <p>The trials set the clocks. The calcium hydroxylapatite trial measured its responders at 24 weeks (<a href="https://clinicaltrials.gov/study/NCT05163353" rel="noopener nofollow" target="_blank">Radiesse décolleté trial</a>), the ultrasound studies at 90 and 180 days (<a href="https://pubmed.ncbi.nlm.nih.gov/25705947/" rel="noopener nofollow" target="_blank">multicentre study</a>), the poly-L-lactic acid study at six and nine months (<a href="https://clinicaltrials.gov/study/NCT05538728" rel="noopener nofollow" target="_blank">Sculptra décolletage study</a>), the thulium trial at twelve weeks after one session (<a href="https://pubmed.ncbi.nlm.nih.gov/31788828/" rel="noopener nofollow" target="_blank">thulium décolleté trial</a>), the IPL series three months after the third session (<a href="https://pubmed.ncbi.nlm.nih.gov/18177401/" rel="noopener nofollow" target="_blank">175-patient IPL series</a>), and the retinol arm trial at 24 weeks with change visible from four (<a href="https://pubmed.ncbi.nlm.nih.gov/17515510/" rel="noopener nofollow" target="_blank">retinol arm trial</a>). Judge each against the morning photograph at the trial's own timepoint, not the clinic's.</p>
    `,
  },
  {
    id: 'faq-cost-ladder',
    category: 'faq',
    title: 'What does it cost, from cheapest to dearest?',
    tldr: 'Free (the pillow and the sleeping side) → €10–30 a month sunscreen and a retinoid → €20–40 pads → €100–250 a peel → €200–400 an IPL session, three needed → €300–600 a thulium session, three needed → €400–700 a calcium hydroxylapatite session, one or two → €500–900 a PLLA vial → €1,000–2,000 ultrasound → €800–1,500 a fractional CO2 session. The trial evidence sits at the €400–700 rung.',
    bodyHtml: `
      <p>The habits are free and prevent; the products cost a coffee a week and have arm and forearm trials; the light treatments for colour cost €600–1,200 for a course and have the largest series; the collagen stimulator with the randomised trial costs €400–1,400 for one or two sessions and lasts about a year; ultrasound is a single €1,000–2,000 session with blinded photographs; and ablation is the dearest rung with no chest trial and the scar reports. Prices are typical Western European ranges and vary by city, clinic and area treated.</p>
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
    intro: 'The chest ages like the face with less to age with — and a blanch test, a pinch, a press and a morning photograph tell you which of the three drivers is yours.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which chest do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: the V, the retinoid, the acids and the pillow',
    intro: 'The prevention that decides whether anything else lasts, the two product families with body-skin trials, and the sleeping remedies with none.',
    sections: home,
  },
  {
    id: 'inj',
    title: 'Injectables, stimulators and hormones',
    intro: 'The one chest treatment with a randomised trial, the slower stimulator with open studies, the boosters with none yet, and the hormone question graded for this skin.',
    sections: inj,
  },
  {
    id: 'clinic',
    title: 'Light, lasers, ultrasound and needles',
    intro: 'The light that treats the colour, the non-ablative lasers and ultrasound that treat the crepe on skin that scars, and the ablative rung that is last and low.',
    sections: clinic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'Why the chest scars and depigments where the face would not, the nodules of the stimulators, and the precancer check that comes before anything cosmetic.',
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
  lines: 'Cleavage lines',
  crepe: 'Crepe & texture',
  colour: 'Red-brown colour',
  laxity: 'Laxity & thinning',
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
