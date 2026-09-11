/**
 * Aging hands guide — single source of truth (problem template).
 *
 * Consumed by /aging-hands. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: an old-looking hand is two different problems that need
 * two different toolkits. Under the skin, the fat thins and the veins,
 * tendons and knuckles show through (graded 0–4 on a validated scale); on
 * the skin, a lifetime of sun leaves spots, crepe and bruises that appear
 * from nothing. Volume answers only to fillers or fat — the best-trialled
 * thing on this page, with two randomised, blinded trials of over a hundred
 * people each and two regulatory approvals. Spots answer to a retinoid and
 * the pigment lasers, cryotherapy or a peel. Nothing in a jar does either.
 * The hand is also the one place where the treatment most people ask for
 * first — stripping the veins — is the one a careful clinician talks them
 * out of, because those veins are the drip lines of the rest of their life.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'volume' | 'spots' | 'texture' | 'veins' | 'nails' | 'general';

export type SectionCategory = 'concept' | 'context' | 'home' | 'spots' | 'volume' | 'safety' | 'faq';

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
  'An old-looking hand is two problems, not one. Under the skin the fat thins until veins, tendons and knuckles show (graded 0–4 on the validated Merz Hand Grading Scale); on the skin a lifetime of sun leaves brown spots (in up to 90% of fair-skinned people over 60), crepe and the bruises-from-nothing of actinic purpura (in more than one in ten over 50). Each needs its own toolkit, and no cream does either.',
  'Volume has the best evidence on this page: calcium hydroxylapatite filler improved a blinded grade in 75.3% of 114 people against 3.4% of untreated controls at three months and in 68% at a year, and hyaluronic acid filler in 85.9% against 21.2% of 90 people\'s untreated other hands — the only two fillers with a regulatory hand indication. Swelling and bruising for a week in most, nodules in one in sixteen, hand function unchanged.',
  'Spots answer to light and cold: in a 27-patient randomised trial on the backs of the hands, a Q-switched laser lightened 89% of lentigines against 68% with liquid nitrogen, 93% of patients preferred the laser, and across 41 trials the lasers beat every alternative with the least pigment rebound. Tretinoin lightened liver spots in 83% against 29% on vehicle, and daily sunscreen cut measured skin aging on the back of the hand by 24% in 903 adults.',
  'Fat grafting is the only permanent volume option, with 97.6% satisfaction across 320 patients — and an unpredictable half of the graft that melts away, so 12% need a second round. Stripping the veins works (95% with 3% polidocanol) but the veins are the drip lines of the rest of your life, one case of a dead fingertip is on record, and a filler hides them without removing them.',
  'The self-inflicted harms: a potent steroid cream that thins the skin into purpura, a fully ablative laser on skin that heals slowly and scars, cryotherapy that leaves permanent white spots on darker skin, and high-dose biotin for the nails, which has no controlled trial and makes heart-attack blood tests read falsely normal.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-volume',
    kind: 'Volume',
    title: 'The fat under the skin thins, and everything beneath it shows',
    blurb: 'The back of the hand has three thin layers of fat separated by fascia; the veins and nerves run in the middle one and the tendons in the deepest. As the top layer wastes with age, the veins bulge, the tendons rope and the knuckles look bigger — the change that ages a hand most in a viewer\'s eye, and the one only a filler or a fat graft reverses.',
  },
  {
    id: 'type-spots',
    kind: 'Sun',
    title: 'A lifetime of sun on the one patch of skin that is never covered',
    blurb: 'The backs of the hands get the sun the face gets, without the hat, the sunscreen or the winter — plus a car window that lets ultraviolet A through onto the driver\'s side. The ledger is brown spots in up to 90% of fair-skinned people over 60, mottling, crepe, rough pre-cancerous patches and skin so thin it bruises from nothing.',
  },
  {
    id: 'home-barrier',
    kind: 'Barrier & wear',
    title: 'Washed, sanitised, scrubbed and never protected',
    blurb: 'Hands are the most washed skin on the body: in one pandemic survey 90% of healthcare workers had the symptoms of hand dermatitis. Water, detergent and cold strip the barrier, the cracks and redness read as age, and the sunscreen applied at breakfast is gone by the first hand-wash — so the gloves, the rub instead of the soap and the cream after every wash come before anything a clinic sells.',
  },
];

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What\'s actually happening',
    intro: 'Three things age a hand, and they need different fixes: the fat that thins, the sun that spots and thins the skin, and the washing that strips it.',
    sections: [
      {
        id: 'hand-biology',
        category: 'concept',
        title: 'Why hands give the age away: thin skin, little fat, and a lifetime of sun',
        tldr: 'Skin collagen falls roughly 1% a year through adult life, and the back of the hand starts with less of everything — a thin dermis over three thin layers of fat, with the veins in the middle layer and the tendons in the deepest. As the top layer wastes, the veins and tendons show; as the sun does its work, spots, mottling and crepe arrive; a 143-person study found veins and age spots rising with every decade and the wrinkle spacing tightening. Ask people what makes a hand look old and they name the veins first — and a photograph with the veins digitally removed is judged younger every time.',
        bodyHtml: `
          <p>The famous "1% a year" comes from <a href="https://pubmed.ncbi.nlm.nih.gov/1220811/" rel="noopener nofollow" target="_blank">forearm biopsies in 148 people aged 15–93</a>: skin collagen falls roughly linearly through adult life, lower in women at every age. The back of the hand starts with less. A cadaver study of ten fresh hands found the subcutaneous tissue arranged in three distinct fatty laminae separated by thin fascia: the superficial layer, less than a millimetre from the skin, contains no structures at all; the large dorsal veins and sensory nerves run in the intermediate layer; the extensor tendons lie in the deep one, with eight to ten perforating vessels travelling in the septa between them (<a href="https://pubmed.ncbi.nlm.nih.gov/20220561/" rel="noopener nofollow" target="_blank">dorsal hand anatomy study</a>). Age wastes that superficial cushion first, and everything beneath it comes into view. A study photographing both hands of 143 volunteers found dorsal veins and age spots increasing with age in both sexes, the distance between wrinkles shrinking decade by decade, and — contrary to the common belief — no significant thickening of the finger joints in normal aging (<a href="https://pubmed.ncbi.nlm.nih.gov/18262858/" rel="noopener nofollow" target="_blank">the ageing hand, 143 volunteers</a>). What the eye reads as old is specific: when 93 people rated digital images of women\'s hands, wrinkles, veins, prominent joints, thin skin and spots characterised old hands, fullness and the absence of veins and wrinkles characterised young ones, and images with the veins digitally removed were judged younger than the originals in every comparison — a difference that was statistically significant every time, unlike added make-up and jewellery (<a href="https://pubmed.ncbi.nlm.nih.gov/16772919/" rel="noopener nofollow" target="_blank">hand aging: patients\' opinions</a>). That ranking is the map of this page: the volume that hides the veins first, the spots second, the skin quality third.</p>
        `,
      },
      {
        id: 'how-common',
        category: 'concept',
        title: 'How common: spots in 90% over 60, bruises in one in ten over 50, painful knuckles in one older woman in four',
        tldr: 'Solar lentigines are found in up to 90% of fair-skinned people over 60 and the backs of the hands are among their commonest sites; actinic purpura — the bruises from nothing — affects more than 10% of people over 50 on the forearms and hands; symptomatic hand osteoarthritis affects 26.2% of women and 13.4% of men aged 71 and over; hand eczema has a one-year prevalence near 10% and a lifetime prevalence of 15%. Across 46 studies of hand rejuvenation, 96.8% of patients were women, aged on average 41 to 69.',
        bodyHtml: `
          <p>The signs are near-universal by the seventh decade. Solar lentigines "may be found in up to 90% of Caucasians over the age of 60", most often on the backs of the hands, forearms, upper body and shins, and unlike freckles they persist through winter (<a href="https://dermnetnz.org/topics/solar-lentigo" rel="noopener nofollow" target="_blank">DermNet on solar lentigo</a>); in the Leiden skin-cancer study of 962 people they rose steeply with age and, after adjustment for age, sex and skin type, tracked cumulative and intermittent sun exposure, sunburns before 20 and the number of childhood sunburns (<a href="https://pubmed.ncbi.nlm.nih.gov/15140067/" rel="noopener nofollow" target="_blank">Leiden lentigo study</a>). Actinic (senile) purpura — dark purple patches of one to four centimetres that appear on the forearms and backs of the hands after trivial knocks — affects over 10% of people over 50, equally in men and women, and recurs for life (<a href="https://dermnetnz.org/topics/senile-purpura" rel="noopener nofollow" target="_blank">DermNet on senile purpura</a>). The joints are a separate story: in 1,041 Framingham subjects aged 71–100, symptomatic hand osteoarthritis affected 26.2% of women and 13.4% of men, with 10% weaker grip and three-fold difficulty handling small objects (<a href="https://pubmed.ncbi.nlm.nih.gov/12446258/" rel="noopener nofollow" target="_blank">Framingham hand osteoarthritis</a>). And the skin between: hand eczema has a point prevalence around 4%, a one-year prevalence near 10% and a lifetime prevalence of 15%, with wet work, atopy and female sex the risk factors (<a href="https://pubmed.ncbi.nlm.nih.gov/20136890/" rel="noopener nofollow" target="_blank">hand eczema epidemiology review</a>). Who seeks treatment: across 46 published studies of dorsal hand rejuvenation — nine of fat grafting, 20 of fillers, ten of lasers and light — 96.8% of patients were women, mean ages 41.5 to 69, and satisfaction was lowest for the light-based treatments (<a href="https://pubmed.ncbi.nlm.nih.gov/33420511/" rel="noopener nofollow" target="_blank">dorsal hand rejuvenation systematic review</a>). The severity language clinicians use is a 5-point photonumeric scale developed by nine experts rating 35 subjects\' hands twice, from grade 0 (no loss of fatty tissue) to 4 (very severe loss, marked visibility of veins and tendons), validated for photographs and later for live assessment (<a href="https://pubmed.ncbi.nlm.nih.gov/19021677/" rel="noopener nofollow" target="_blank">the validated hand grading scale</a>, <a href="https://pubmed.ncbi.nlm.nih.gov/26618469/" rel="noopener nofollow" target="_blank">live-assessment validation</a>) — the scale every filler trial on this page is scored on.</p>
        `,
      },
      {
        id: 'why-hard',
        category: 'concept',
        title: 'Why hand treatments disappoint: two problems, two toolkits, skin that heals slowly, and a sunscreen that washes off',
        tldr: 'A filler restores volume and does nothing for spots; a laser lightens spots and does nothing for volume — and people buy one expecting both. Hand skin has few hair follicles and oil glands to heal from, so the aggressive resurfacing that works on a face scars on a hand, which is why every laser study on hands is small and cautious and satisfaction with light treatments is the lowest of any hand procedure. And the daily sunscreen that prevents the damage is gone at the first hand-wash.',
        bodyHtml: `
          <p>The first reason is the mismatch. The volume trials measure the hand grading scale — veins, tendons and fat — and are explicit that fillers "revolumize hands, but do not address pigmentary changes" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11042518/" rel="noopener nofollow" target="_blank">hand-lentigo peel trial</a>); the laser and light studies grade lentigines and texture and measure no volume at all. The second is the tissue. The dorsal hand\'s "inherent tissue properties" have made it "challenging to safely and effectively improve all three parameters of photoaging with a single device" (<a href="https://pubmed.ncbi.nlm.nih.gov/21276159/" rel="noopener nofollow" target="_blank">fractional CO2 hand pilot</a>): thin skin with sparse hair follicles and sebaceous glands re-epithelialises slowly, so the resurfacing depths used on a face carry a scarring risk on a hand, the hand laser literature is a run of ten-patient pilots, and satisfaction with laser and light treatments was lower than with every other modality across 46 studies (<a href="https://pubmed.ncbi.nlm.nih.gov/33420511/" rel="noopener nofollow" target="_blank">systematic review</a>). The third is exposure that never stops. The hands are washed many times a day, so the sunscreen that a 903-person randomised trial showed slows measured hand-skin aging by 24% (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Nambour sunscreen trial</a>) has to be reapplied after each wash to count; and the hand on the window side of the car sits in ultraviolet A that side glass does not stop — a Mohs-unit review found 52.6% of all skin cancers and 74% of melanomas in situ on the left side of American patients (<a href="https://pubmed.ncbi.nlm.nih.gov/20226568/" rel="noopener nofollow" target="_blank">left-sided skin cancers</a>, <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11742901/" rel="noopener nofollow" target="_blank">UV transmission through car windows</a>). The fourth is expectation: the reviews that call fat grafting "the most promising choice" (<a href="https://pubmed.ncbi.nlm.nih.gov/27113709/" rel="noopener nofollow" target="_blank">fat-grafting review</a>) also concede that an unpredictable half of it resorbs. The rest of this page sorts the hand into its parts and grades what fixes each.</p>
        `,
      },
    ],
  },
  {
    id: 'context',
    title: 'Which old hand do you have?',
    intro: 'Volume, spots, crepe, veins, joints, nails and eczema look alike from a metre away and are treated by different people. Sort yours before you spend.',
    sections: [
      {
        id: 'type-volume',
        category: 'context',
        title: 'Veins, tendons and knuckles showing: the fat has thinned (grades 1–4)',
        tldr: 'Hold the hand flat and relaxed: if the veins bulge, the tendons rope from wrist to knuckle and the spaces between them are hollow, the superficial fat has wasted. Clinicians grade it 0–4 — mild loss with slight visibility of veins (1), moderate loss with veins and tendons showing mildly (2), severe (3), very severe with marked visibility of both (4). Grades 2–4 are what the filler and fat trials treated, and the only thing that reverses them is putting volume back into the structure-free top layer.',
        focus: 'volume',
        bodyHtml: `
          <p>The scale is worth learning because it is what you will be quoted. Grade 0 is no loss of fatty tissue; grade 1 mild loss with slight visibility of veins; grade 2 moderate loss with mild visibility of veins and tendons; grade 3 severe loss with moderate visibility; grade 4 very severe loss with marked visibility of veins and tendons (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10063163/" rel="noopener nofollow" target="_blank">hand rejuvenation review with the scale</a>, from the original photonumeric scale developed by nine experts rating 35 subjects twice: <a href="https://pubmed.ncbi.nlm.nih.gov/19021677/" rel="noopener nofollow" target="_blank">Carruthers 2008</a>). The filler trials enrolled grades 2–4 and counted a one-grade improvement as success; the largest calcium hydroxylapatite trial started at a mean grade of 2.6 and reached 1.5 at three months (<a href="https://clinicaltrials.gov/study/NCT01832090" rel="noopener nofollow" target="_blank">trial results</a>). Anatomically the deficit is in the superficial lamina — the layer under a millimetre from the skin with no veins, nerves or tendons in it, which is why every author agrees it is the place to put volume (<a href="https://pubmed.ncbi.nlm.nih.gov/20220561/" rel="noopener nofollow" target="_blank">anatomy study</a>). Two things masquerade as volume loss: the athlete\'s or slim person\'s naturally prominent veins on a hand with normal fat, treated in the veins group below, and the enlarged knuckles of osteoarthritis, which no injection changes. Volume loss is graded in the volume group: fillers first, fat for those who want it once.</p>
        `,
      },
      {
        id: 'type-spots',
        category: 'context',
        title: 'Brown spots, mottling and rough patches: the sun\'s ledger',
        tldr: 'Flat, sharply bordered brown spots that stay through winter are solar lentigines — benign, sun-caused, in up to 90% of fair-skinned people over 60. Rough, scaly, sandpaper patches that never quite heal are actinic keratoses, pre-cancerous and commonest on the hands and forearms; a spot that is growing, irregular, multi-coloured or bleeding is a lentigo maligna or melanoma until a dermatologist says otherwise. The lentigines answer to retinoids, lasers, cold and acid; the keratoses to cryotherapy, photodynamic therapy or a prescription cream; the third gets a biopsy, not a laser.',
        focus: 'spots',
        bodyHtml: `
          <p>Solar lentigines are the "age spots" or "liver spots": flat, tan-to-brown, sharply bordered, from millimetres to a centimetre or more, on the backs of the hands, forearms, face and shoulders, caused by ultraviolet-driven mutations that increase melanin production and its retention in the keratinocytes; freckles fade in winter, lentigines do not (<a href="https://dermnetnz.org/topics/solar-lentigo" rel="noopener nofollow" target="_blank">DermNet</a>). In the Leiden study, facial lentigines were associated with the other signs of photodamage — solar elastosis (odds ratio 2.4) and actinic keratosis (odds ratio 1.8) — so a hand covered in them is a hand that has also earned the rough patches (<a href="https://pubmed.ncbi.nlm.nih.gov/15140067/" rel="noopener nofollow" target="_blank">Leiden lentigo study</a>); in 523 French women, sun-exposure behaviour, tanning capacity and current oral contraceptive or progestogen use were independent risk factors (<a href="https://pubmed.ncbi.nlm.nih.gov/22924836/" rel="noopener nofollow" target="_blank">French lentigo study</a>). Actinic keratoses are the pre-cancers: scaly, rough, sometimes easier to feel than see, and on the hands and forearms they respond a little less well to photodynamic therapy than on the face — in 121 patients with 1,343 lesions, 98% on the extremities, one round of cryotherapy cleared 88% and photodynamic therapy 78%, with better cosmetic results and patient preference for the light (<a href="https://pubmed.ncbi.nlm.nih.gov/18341663/" rel="noopener nofollow" target="_blank">extremity actinic keratosis trial</a>). The third category is the one the whole page defers to: a spot that is enlarging, irregular in outline, variegated in colour, raised, itching or bleeding is examined and, where there is doubt, biopsied from each distinct area, because "different pathologies can coexist" (<a href="https://dermnetnz.org/topics/solar-lentigo" rel="noopener nofollow" target="_blank">DermNet</a>). The <a href="/dark-spots">dark-spots guide</a> covers the pigment pharmacology in depth; the spots group below grades the hand-specific trials.</p>
        `,
      },
      {
        id: 'type-crepe',
        category: 'context',
        title: 'Crepe, thinning and bruises from nothing: actinic purpura and the fragile skin of the forearm and hand',
        tldr: 'Skin that has gone tissue-paper thin, wrinkles in fine parallel lines when pinched, and shows purple patches after knocks you do not remember is dermal thinning plus sun damage — actinic (senile) purpura, in more than one in ten people over 50, worse on corticosteroids or blood thinners. It needs no treatment and is not a bleeding disorder; it is prevented by sun protection, worsened by potent steroid creams, and improved a little by a retinoid, by hyaluronic acid skin boosters, and in one randomised trial by an oral citrus bioflavonoid blend.',
        focus: 'texture',
        bodyHtml: `
          <p>Pinch the skin on the back of the hand and let go: young skin snaps back, thinned skin stands in a fold and settles slowly, and crepe is the fine parallel wrinkling that appears in the fold. The bruising that goes with it is actinic purpura: irregular dark purple patches of one to four centimetres with distinct borders on the extensor forearms and backs of the hands, caused by dermal thinning and photodamage that leave the superficial vessels unsupported so they rupture with minimal trauma; unlike an ordinary bruise the colour does not evolve through green and yellow, and each patch resolves within about three weeks while new ones keep arriving for life; oral and topical corticosteroids and anticoagulants make it worse; it is benign, needs no treatment, and the management is sun protection (<a href="https://dermnetnz.org/topics/senile-purpura" rel="noopener nofollow" target="_blank">DermNet on senile purpura</a>). It is also the reason a potent steroid cream is the wrong answer to an itchy old hand: continuous topical corticosteroid beyond six weeks is only recommended under medical supervision in the European hand-eczema guideline (<a href="https://pubmed.ncbi.nlm.nih.gov/34971008/" rel="noopener nofollow" target="_blank">ESCD hand eczema guideline</a>). What thickens thinned skin, a little: tretinoin, whose ten-month trial increased epidermal thickness and granular-layer thickness on biopsy while it lightened the spots (<a href="https://pubmed.ncbi.nlm.nih.gov/1729619/" rel="noopener nofollow" target="_blank">tretinoin liver-spot trial</a>); hyaluronic acid microdroplets, which improved elasticity, roughness and hydration against saline in the other hand (<a href="https://pubmed.ncbi.nlm.nih.gov/25738851/" rel="noopener nofollow" target="_blank">skin-booster trial</a>); and diluted calcium hydroxylapatite, which improved viscoelasticity and ultrasound dermal measures in 15 women (<a href="https://pubmed.ncbi.nlm.nih.gov/32976172/" rel="noopener nofollow" target="_blank">diluted CaHA study</a>). The home group grades the bioflavonoid trial and the creams.</p>
        `,
      },
      {
        id: 'type-veins',
        category: 'context',
        title: 'Big blue veins on an otherwise fine hand: normal anatomy made visible — and the drip lines of the rest of your life',
        tldr: 'Prominent, ropy dorsal veins on a slim or athletic hand with normal fat are healthy veins, not disease; they enlarge with age, heat and exercise and were the single feature that, digitally removed, made hands look younger. They can be hidden with a filler over them, shrunk with sclerotherapy or an endovenous laser, or cut out — but the dorsal hand veins are where every anaesthetist and nurse will look for a cannula for the rest of your life, one case of a dead fingertip after cosmetic sclerotherapy is published, and a vein that is closed does not come back.',
        focus: 'veins',
        bodyHtml: `
          <p>The dorsal veins sit in the intermediate fatty lamina with the sensory nerves (<a href="https://pubmed.ncbi.nlm.nih.gov/20220561/" rel="noopener nofollow" target="_blank">anatomy study</a>) and become "more prominent with the passage of time", a "common source of patient dissatisfaction" (<a href="https://pubmed.ncbi.nlm.nih.gov/10513934/" rel="noopener nofollow" target="_blank">hand-vein sclerotherapy series</a>); in the rating study, veins removed from a photograph made every hand look younger (<a href="https://pubmed.ncbi.nlm.nih.gov/16772919/" rel="noopener nofollow" target="_blank">patients\' opinions study</a>). The distinction that matters is between a hand whose fat has thinned so the veins show — treated by replacing the fat, which pads over them — and a hand with normal fat and large veins, where only the vein treatments change the picture. Two things to know before anyone offers to close them. First, they are the veins of daily medicine: the back of the hand is the standard site for an intravenous cannula, for contrast in a scan and for a drip in an emergency, and a closed vein does not reopen. Second, the harm is rare but real: a published case of acute fingertip ischaemia after elective sclerotherapy of a dorsal hand vein, with the authors noting that inadvertent arterial injection "has led to reported instances of acute ischemic events and distal limb necrosis" (<a href="https://pubmed.ncbi.nlm.nih.gov/28410939/" rel="noopener nofollow" target="_blank">hand ischaemia case</a>). The volume group grades the fillers that hide veins; the vein row grades the treatments that remove them, and the safety section says when not to.</p>
        `,
      },
      {
        id: 'type-joints',
        category: 'context',
        title: 'Knuckles that thicken and ache: osteoarthritis, not skin',
        tldr: 'Bony knobs at the end joints (Heberden\'s nodes) or middle joints (Bouchard\'s nodes) of the fingers, with stiffness in the morning and ache after use, are hand osteoarthritis — symptomatic in 26% of women and 13% of men over 70. Nothing cosmetic changes a joint; the useful things are a rheumatologist or hand therapist, exercises, splints and pain control, and telling the filler injector, because a swollen joint changes where volume can go. Normal aging does not thicken the finger joints — a 143-person study looked and found no significant change.',
        focus: 'general',
        bodyHtml: `
          <p>The Framingham survey defined symptomatic hand osteoarthritis as a joint with both symptoms and radiographic change and found it in 26.2% of women and 13.4% of men aged 71–100, with 10% lower maximal grip strength, three-fold difficulty writing and handling small objects (odds ratio 3.4) and difficulty carrying a 4.5 kg load (<a href="https://pubmed.ncbi.nlm.nih.gov/12446258/" rel="noopener nofollow" target="_blank">Framingham hand osteoarthritis</a>). It is not the same as aging: photographing 143 volunteers found that "significant joint thickening of the proximal interphalangeal joint could not be confirmed" as a feature of normal chronological hand aging (<a href="https://pubmed.ncbi.nlm.nih.gov/18262858/" rel="noopener nofollow" target="_blank">the ageing hand study</a>). Swelling that is warm, red, or comes with morning stiffness lasting more than half an hour, or that involves the wrists and knuckles symmetrically, is inflammatory arthritis and needs a doctor promptly rather than a clinic. For the cosmetic reader the practical points are three: no filler, laser or cream treats a joint; a hand with active arthritis was not what the filler trials enrolled, and the large calcium hydroxylapatite safety study measured range of motion, dexterity and grip before and after precisely because volume sits near the joints (<a href="https://clinicaltrials.gov/study/NCT02904096" rel="noopener nofollow" target="_blank">hand safety study</a>); and the rings that no longer pass a swollen knuckle are a jeweller\'s job, not a dermatologist\'s.</p>
        `,
      },
      {
        id: 'type-nails',
        category: 'context',
        title: 'Nails that split, peel and ridge',
        tldr: 'Fine vertical ridges are normal aging of the nail plate; brittleness that splits the free edge in layers (onychoschizia) is mostly water — repeated wetting and drying, detergents and solvents — and improves with gloves, a moisturiser worked into the nail folds and shorter nails. Thickened, yellow, crumbling nails are fungal until proven otherwise and need a scraping, not a supplement. Biotin has an old, uncontrolled literature and a modern safety warning; there is no trial of collagen or "hardeners" worth the name.',
        focus: 'nails',
        bodyHtml: `
          <p>The nail is dead keratin that takes about six months to grow out from the matrix, so everything that changes it shows late and slowly. Longitudinal ridging deepens with age and is cosmetic. Brittle, splitting nails have the same enemy as the skin around them: cycles of hydration and drying, detergents and solvents, which is why the hand-eczema prevention measures — gloves for wet work, an emollient after every wash, alcohol rub in place of soap where possible — are also the nail measures (<a href="https://pubmed.ncbi.nlm.nih.gov/34971008/" rel="noopener nofollow" target="_blank">ESCD guideline</a>, <a href="https://pubmed.ncbi.nlm.nih.gov/17578437/" rel="noopener nofollow" target="_blank">alcohol rub versus washing study</a>). The supplement literature is thin: a 1990 scanning-electron-microscopy study measured a 25% increase in nail thickness in eight patients before and after biotin (<a href="https://pubmed.ncbi.nlm.nih.gov/2273113/" rel="noopener nofollow" target="_blank">biotin SEM study</a>), a 1993 retrospective review found 63% of 35 patients reporting improvement (<a href="https://pubmed.ncbi.nlm.nih.gov/8477615/" rel="noopener nofollow" target="_blank">biotin retrospective series</a>), and the modern review concludes that larger controlled trials are needed to determine whether it works at all (<a href="https://pubmed.ncbi.nlm.nih.gov/29057689/" rel="noopener nofollow" target="_blank">biotin evidence review</a>); the home group grades it, and the safety section carries the blood-test warning. A nail that thickens, yellows, crumbles or lifts is fungal or psoriatic and needs a clipping sent for microscopy — nothing cosmetic fixes it.</p>
        `,
      },
      {
        id: 'type-eczema',
        category: 'context',
        title: 'Red, cracked, itchy, sore: hand eczema, which reads as age and is not',
        tldr: 'Dry, scaly, fissured, itchy skin on the backs of the hands and between the fingers — flaring after wet work, cold or a new soap — is hand eczema: a one-year prevalence near 10%, driven by wet work, atopy and, in a pandemic survey, the hand hygiene that gave 90% of healthcare workers its symptoms. It is treated by a doctor with gloves, emollients and a short course of a steroid cream, and it makes every cosmetic treatment on this page worse or impossible until it is quiet.',
        focus: 'texture',
        bodyHtml: `
          <p>Hand eczema is common enough to be mistaken for aging: point prevalence around 4%, one-year prevalence nearly 10%, lifetime 15%, with an incidence in women more than twice that in men (9.6 against 4.0 per 1,000 person-years), atopic dermatitis the single strongest risk factor and wet work the strongest occupational one (<a href="https://pubmed.ncbi.nlm.nih.gov/20136890/" rel="noopener nofollow" target="_blank">epidemiology review</a>). Washing does it: among 114 healthcare workers surveyed at a Munich university hospital during the pandemic, hand washing, disinfection and hand-cream use all rose significantly and 90.4% reported symptoms of acute hand dermatitis, while only 14.9% reported hand eczema by name — the gap between a diagnosis and a hand that looks old, rough and red (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7283680/" rel="noopener nofollow" target="_blank">pandemic hand-eczema survey</a>). The management is not cosmetic and belongs to a doctor: irritant avoidance and gloves, barrier-strengthening emollients, topical corticosteroids as first line but continuously beyond six weeks only under supervision, and alitretinoin or other systemic options for severe chronic disease (<a href="https://pubmed.ncbi.nlm.nih.gov/34971008/" rel="noopener nofollow" target="_blank">ESCD guideline 2022</a>). For this page the rule is simple: an inflamed hand is not lasered, peeled, frozen or injected; the barrier row comes first, and the <a href="/dry-skin">dry-skin guide</a> has the emollient chemistry.</p>
        `,
      },
      {
        id: 'workup',
        category: 'context',
        title: 'The self-check: the pinch, the photograph, the grade, the two-hand comparison and the spot rule',
        tldr: 'Photograph both hands flat on a white surface by the same window; grade the volume 0–4 against the scale; pinch the skin for thinning and count the bruises; compare left with right for the driver\'s-window difference; write down how often you wash and what with; and apply the spot rule — anything changing, raised, rough, multicoloured or bleeding goes to a dermatologist before anything cosmetic. Then match the toolkit to the problem: volume to the volume group, spots to the spots group, redness and cracks to a doctor first.',
        focus: 'general',
        bodyHtml: `
          <p>Five minutes that stop most wasted money. <strong>The photograph:</strong> both hands flat, relaxed, palms down on plain paper, same window, same time of day, repeated monthly — the hand grading trials used standardised photographs because a hand looks a grade worse in raking evening light and a grade better after a warm bath. <strong>The grade:</strong> 0 no fat loss; 1 mild, veins slightly visible; 2 moderate, veins and tendons mildly visible; 3 severe; 4 very severe with marked visibility (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10063163/" rel="noopener nofollow" target="_blank">scale descriptions</a>). Grades 2 and above are what the fillers treated; a grade 1 hand with spots is a spots problem. <strong>The pinch:</strong> skin that stands in a fold, crepes, and shows purple patches is thinning — sun protection and a retinoid, a skin booster if you want more, and no steroid cream. <strong>The two-hand comparison:</strong> more spots and crepe on the window-side hand is the ultraviolet A through the side glass (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11742901/" rel="noopener nofollow" target="_blank">car window UV study</a>) and the cheapest fix on the page is a driving glove or sunscreen before the car. <strong>The wash count:</strong> above ten washes a day, or any hand rub use, the barrier row is the first treatment. <strong>The spot rule:</strong> a lesion that has changed, is rough to the finger, raised, more than one colour, or has bled is seen by a dermatologist and biopsied where there is doubt (<a href="https://dermnetnz.org/topics/solar-lentigo" rel="noopener nofollow" target="_blank">DermNet</a>) — a laser on a melanoma delays the diagnosis. Then read the group that matches: veins and tendons to volume, brown to spots, crepe and bruises to the home group and the skin boosters, red and cracked to a doctor.</p>
        `,
      },
    ],
  },
  {
    id: 'home',
    title: 'At home: sun, gloves, cream, the retinoid and the lighteners',
    intro: 'The daily things — one with a randomised trial on the back of the hand itself, one that prevents the damage that ages a hand fastest, and the jar that does neither.',
    sections: [
      {
        id: 'home-sunscreen',
        category: 'home',
        title: 'Daily broad-spectrum sunscreen on the backs of the hands — reapplied after washing, and before the car',
        tldr: 'The one anti-aging intervention with a randomised trial measured on the back of the hand: 903 Australian adults assigned to daily broad-spectrum sunscreen on head, neck, arms and hands showed no detectable increase in skin aging on hand microtopography after 4.5 years — 24% less than the discretionary-use group (relative odds 0.76) — alongside 39% fewer squamous-cell carcinomas and, a decade on, 73% fewer invasive melanomas. It only counts if it is on: after every wash, and on the window-side hand before driving.',
        evidence: 'strong',
        focus: 'general',
        note: 'Best for: every hand on this page — the only treatment that prevents the spots, the crepe, the purpura and the pre-cancers at once, and the precondition for keeping any clinic result',
        sessions: 'Every morning and after every hand-wash, for good',
        downtime: 'None',
        cost: '€10–30 / month',
        bodyHtml: `
          <p>The Nambour trial in Queensland randomised 1,621 adults, of whom 903 under 55 were assessed for aging, to daily broad-spectrum sunscreen on the head, neck, arms and hands or to use at their own discretion, and graded silicone casts of the back of the hand for microtopographic aging by blinded assessors. After 4.5 years the daily group "showed no detectable increase in skin aging"; aging from baseline was 24% less than in the discretionary group (relative odds 0.76, 95% confidence interval 0.59 to 0.98); β-carotene 30 mg did nothing (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Nambour sunscreen and aging trial</a>). The same trial cut squamous-cell carcinomas by 39% (rate ratio 0.61) (<a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(98)12168-2/abstract" rel="noopener nofollow" target="_blank">Lancet, 1999</a>) and, ten years after it ended, invasive melanomas by 73% — three against eleven (<a href="https://pubmed.ncbi.nlm.nih.gov/21135266/" rel="noopener nofollow" target="_blank">JCO, 2011</a>). Strong, on the strength of one large randomised trial with the hand as its measuring site and cancer endpoints behind it. The mechanism is the same one that makes the lentigines: the Leiden study tied them to cumulative and intermittent exposure and to sunburns before 20 (<a href="https://pubmed.ncbi.nlm.nih.gov/15140067/" rel="noopener nofollow" target="_blank">Leiden lentigo study</a>), and the purpura and crepe are the same photodamage on the dermis (<a href="https://dermnetnz.org/topics/senile-purpura" rel="noopener nofollow" target="_blank">DermNet</a>). Two hand-specific rules. Reapply after each wash — the trial\'s participants were asked to use it every morning and reapply after heavy sweating, bathing or long exposure, and a hand washed ten times a day has none left by lunch. And treat the car as sun: laminated windscreens block ultraviolet A, tempered side windows largely do not, and the driver\'s-side excess of skin cancers — 52.6% of all lesions and 74% of melanomas in situ on the left in one American Mohs unit — is the same light on the same hand (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11742901/" rel="noopener nofollow" target="_blank">car window UV study</a>, <a href="https://pubmed.ncbi.nlm.nih.gov/20226568/" rel="noopener nofollow" target="_blank">left-sided skin cancers</a>). A tinted or iron-oxide sunscreen also disguises the spots while the retinoid works; the <a href="/sun-damage">sun-damage guide</a> has the product detail.</p>
        `,
      },
      {
        id: 'home-barrier',
        category: 'home',
        title: 'The barrier routine: gloves for wet work, alcohol rub instead of soap, and a urea or glycerol cream after every wash',
        tldr: 'The washed, cracked, red hand is the commonest "old hand" and the cheapest to fix. In 53 people whose hand eczema had cleared, a 5% urea barrier moisturiser stretched the median time to relapse from 2 days to 20; in wash tests, an alcohol hand rub irritated the skin significantly less than washing with a detergent, and the European guideline recommends gloves for wet work, emollients after washing and cotton liners under occlusive gloves. Nothing else on this page works on inflamed skin.',
        evidence: 'moderate',
        focus: 'texture',
        note: 'Best for: anyone washing more than ten times a day, using hand rub, doing wet work or with cracked, red or itchy backs of the hands — first, before any retinoid, acid, laser or injection',
        sessions: 'Cream after every wash; gloves for every wet task',
        downtime: 'None',
        cost: '€10–25 / month',
        bodyHtml: `
          <p>The trial is small and randomised: 53 patients with successfully treated hand eczema were assigned to a barrier-strengthening 5% urea moisturiser or to nothing, and the median time to relapse was 20 days with the moisturiser against 2 days without (p = 0.04), although 90% had relapsed by 26 weeks in both groups and quality of life fell equally at relapse — a moisturiser prolongs the good spell, it does not cure the disease (<a href="https://pubmed.ncbi.nlm.nih.gov/21057743/" rel="noopener nofollow" target="_blank">urea moisturiser relapse trial</a>). The washing itself is the injury. In repeated patch and wash tests on 15 volunteers, 60–100% ethanol, propanol and isopropanol caused no significant barrier disruption or redness, while washing with a detergent did, and applying alcohol to skin already irritated by detergent did not worsen it — "alcohol-based hand rubs cause less skin irritation than hand washing and are therefore preferred for hand hygiene from the dermatological point of view" (<a href="https://pubmed.ncbi.nlm.nih.gov/17578437/" rel="noopener nofollow" target="_blank">how irritant is alcohol?</a>). The European guideline adds gloves for wet work with cotton liners, fragrance-free emollients after every wash and at night, and a short supervised course of a topical steroid for the flare (<a href="https://pubmed.ncbi.nlm.nih.gov/34971008/" rel="noopener nofollow" target="_blank">ESCD guideline</a>). Moderate: one small relapse trial, a mechanistic irritancy study and a consensus guideline, but the effect is visible within a fortnight and it is the precondition for everything below — a retinoid stings on a cracked hand, a peel or laser is refused on one, and a filler injected through inflamed skin is an infection risk. Practicalities: a pump of cream by every sink, urea 5–10% or glycerol-ceramide formulas for the day, an occlusive ointment under cotton gloves overnight for the bad weeks, lukewarm water, and the rub rather than the soap whenever the hands are not visibly dirty. The <a href="/dry-skin">dry-skin guide</a> and the <a href="/ceramides">ceramide guide</a> have the formulation chemistry.</p>
        `,
      },
      {
        id: 'home-retinoid',
        category: 'home',
        title: 'Tretinoin or adapalene on the backs of the hands, nightly, for the spots and the thinning',
        tldr: 'The two randomised trials of retinoids on liver spots both treated the upper extremities: 0.1% tretinoin for ten months lightened lesions in 83% against 29% on vehicle on the face with "similar" results on the arms and hands, thickened the epidermis on biopsy, and the cleared spots stayed cleared for at least six months off treatment; adapalene 0.1% or 0.3% for nine months lightened lentigines in 57% and 59% against 36% and cut the count of actinic keratoses where the vehicle let it rise. Slow, cheap, and the only thing that treats the spots and the thinning at once.',
        evidence: 'moderate',
        focus: 'spots',
        note: 'Best for: the spotted, thinning hand that is not inflamed — as the base under every other spot treatment and the maintenance after it',
        sessions: 'Nightly, judged at 4–6 months, continued for good',
        downtime: 'Dryness and peeling for the first 2–4 weeks; stop before any peel or laser',
        cost: '€10–40 / month (prescription in most of Europe; adapalene 0.1% over the counter in some)',
        bodyHtml: `
          <p>The tretinoin trial is the classic: 58 patients completed a ten-month randomised double-blind study applying 0.1% tretinoin or vehicle cream daily to the face, upper extremities or both; lightening was significant by one month, and at ten months 20 of 24 (83%) with facial lesions on tretinoin had lightened against 8 of 28 (29%) on vehicle, "the results for lesions of the upper extremities were similar", biopsies showed less epidermal pigment and a thicker epidermis and granular layer, and in the six-month follow-up the specific lesions that had disappeared did not return in any patient (<a href="https://pubmed.ncbi.nlm.nih.gov/1729619/" rel="noopener nofollow" target="_blank">tretinoin liver-spot trial</a>). Adapalene, the better-tolerated retinoid that is sold without prescription in several countries, was tested in 90 patients with actinic keratoses and solar lentigines for nine months: 57% and 59% had lighter lesions on the 0.1% and 0.3% gels against 36% on vehicle, and the mean number of actinic keratoses fell by 0.5 and 2.5 while it rose by 1.5 on vehicle (<a href="https://pubmed.ncbi.nlm.nih.gov/12833014/" rel="noopener nofollow" target="_blank">adapalene lentigo trial</a>). Moderate: two randomised trials, neither large, both with the arms and hands treated but the face the primary site reported, and a modest effect that takes months. It earns its place because it is the one topical that treats both hand problems at once — the epidermal thickening is the same change that firms crepe and, in the purpura literature, retinol is the active ingredient in the cream marketed for bruising (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5605207/" rel="noopener nofollow" target="_blank">actinic purpura treatment review</a>). Use: a pea for both hands at night after the moisturiser has dried, three nights a week for a month then nightly, sunscreen every morning because a retinoid-treated hand burns, and a two-week pause before any peel, cryotherapy or laser. The <a href="/dark-spots">dark-spots guide</a> covers retinoid strengths and the combination with lighteners.</p>
        `,
      },
      {
        id: 'home-lighteners',
        category: 'home',
        title: 'The lighteners: mequinol-tretinoin, hydroquinone and the pharmacy shelf',
        tldr: 'The best-trialled topical for solar lentigines is a 2% mequinol / 0.01% tretinoin solution applied twice daily to the face, forearms and backs of the hands: superior to each ingredient alone and to vehicle in two phase 3 trials, better than hydroquinone 3% on the forearm in a 216-person comparison, and clearing or almost clearing the forearm target lesion in 81% of 406 people in open use. Availability varies by country, hydroquinone is prescription-only in the EU, and the effect fades when the sun returns.',
        evidence: 'moderate',
        focus: 'spots',
        note: 'Best for: many small flat lentigines on both hands where a laser session per spot is impractical, or as maintenance after cryotherapy or laser',
        sessions: 'Twice daily for 16–24 weeks, then as needed',
        downtime: 'Redness, dryness and occasional pale halos around spots',
        cost: '€20–60 / month (prescription products)',
        bodyHtml: `
          <p>Two phase 3 randomised, double-blind trials assigned people with solar lentigines to the 2% 4-hydroxyanisole (mequinol) / 0.01% tretinoin solution, to either active alone, or to vehicle, applied with a wand twice daily to all lesions on the face, forearms and backs of hands for up to 24 weeks; the combination was clinically superior to each component and to vehicle on the forearms and face, with some benefit persisting through a 24-week treatment-free phase (<a href="https://pubmed.ncbi.nlm.nih.gov/10688717/" rel="noopener nofollow" target="_blank">the two phase 3 trials</a>). Against the standard alternative, in 216 subjects randomised for 16 weeks and followed for 24 more, a significantly higher proportion achieved clinical success with the combination than with hydroquinone 3% on the forearm, with similar results on the face (<a href="https://pubmed.ncbi.nlm.nih.gov/15605971/" rel="noopener nofollow" target="_blank">mequinol-tretinoin versus hydroquinone</a>); in 406 European subjects using it with a sunscreen for up to 24 weeks, 81% had forearm target lesions almost clear or clear and 88% facial ones, at the cost of skin irritation in 173, hypopigmentation in four (three resolved) and halo hypopigmentation around lesions in 16 (<a href="https://pubmed.ncbi.nlm.nih.gov/15551721/" rel="noopener nofollow" target="_blank">open-label European study</a>); over 80% of 259 people with darker skin types responded too (<a href="https://pubmed.ncbi.nlm.nih.gov/17177746/" rel="noopener nofollow" target="_blank">ethnic-skin study</a>). The 2025 systematic review of 41 lentigo trials in 3,234 patients calls it "the most common effective topical treatment", with efficacy between 52.6% and over 80% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11948172/" rel="noopener nofollow" target="_blank">lentigo systematic review</a>). Moderate rather than strong: the hands were treated in every trial but the forearm and face were the measured sites, the fixed combination is not marketed everywhere and a pharmacist or dermatologist has to tell you what your country stocks, and every lightener is undone by the next summer without the sunscreen above. Hydroquinone, azelaic acid, cysteamine and the rest are graded in the <a href="/dark-spots">dark-spots guide</a>; on hands the practical difference is that the skin is thinner and drier, so start on alternate days and moisturise first.</p>
        `,
      },
      {
        id: 'home-purpura',
        category: 'home',
        title: 'For the bruises from nothing: a citrus bioflavonoid blend, and the creams sold for purpura',
        tldr: 'One randomised, double-blind, placebo-controlled trial exists for actinic purpura: 70 patients took an oral citrus bioflavonoid blend or placebo twice daily for six weeks, and the treated group had 50% fewer purpura lesions from baseline while the placebo group had 9% more, with no adverse effects. The retinol-arnica-vitamin K creams marketed for bruising have a review of their ingredients and no trial. Sun protection, and stopping any unnecessary steroid cream, remain the only prevention.',
        evidence: 'emerging',
        focus: 'texture',
        note: 'Best for: the forearms and hands that bruise from nothing, once a doctor has confirmed there is no bleeding disorder or drug cause — a cheap six-week experiment',
        sessions: 'Twice daily for 6 weeks, then judged',
        downtime: 'None',
        cost: '€20–40 / month',
        bodyHtml: `
          <p>Senile purpura affects "more than 10 percent of individuals over the age of 50" and until recently had "no known effective treatments" (<a href="https://pubmed.ncbi.nlm.nih.gov/21720653/" rel="noopener nofollow" target="_blank">bioflavonoid trial introduction</a>). The trial: 70 patients with active senile purpura were randomised in two centres to an oral citrus bioflavonoid blend or placebo twice daily for six weeks, 67 completed, and blinded investigators counted new lesions in a marked area of forearm, hand or leg: the treated group showed a 50% reduction in purpura lesions from baseline, patient self-assessment matched the investigators\' global assessment, and no adverse effects were noted (<a href="https://pubmed.ncbi.nlm.nih.gov/21720653/" rel="noopener nofollow" target="_blank">citrus bioflavonoid trial</a>). Emerging: a single six-week trial, industry-formulated, with a lesion count rather than a photograph as its endpoint and no replication since. The topical products contain retinol, alpha-hydroxy acids, arnica oil, ceramides, niacinamide and phytonadione (vitamin K1), and the published support is a review of what each ingredient might do — improve circulation, thicken the skin, repair the barrier — rather than a trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5605207/" rel="noopener nofollow" target="_blank">actinic purpura treatment review</a>); the retinol is the only ingredient with hand data, via the tretinoin trial above. The prevention is unglamorous and free: sun protection, because the fragility is photodamage on a thinned dermis; a review of any topical or oral corticosteroid and of anticoagulants with the prescriber, because both worsen it (<a href="https://dermnetnz.org/topics/senile-purpura" rel="noopener nofollow" target="_blank">DermNet</a>); and long sleeves for the garden. A 2026 report describes diluted calcium hydroxylapatite improving senile purpura with histological thickening of the skin (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13238434/" rel="noopener nofollow" target="_blank">CaHA and senile purpura</a>) — a single study, in the volume group\'s territory.</p>
        `,
      },
      {
        id: 'home-creams',
        category: 'home',
        title: 'Hand creams that promise to reverse aging: collagen, peptides, "lifting", "age-spot" creams',
        tldr: 'No hand cream has a trial showing it restores volume, removes a lentigo or thickens crepe. A moisturiser earns its place by repairing the barrier and softening the look of dry, crepey skin within days — the urea trial above — and a tinted or iron-oxide sunscreen hides the spots while it prevents new ones. Collagen cannot cross the skin, peptides have no hand data, and a cream labelled for "age spots" without a retinoid, a lightener or an acid in it is a moisturiser at a premium.',
        evidence: 'limited',
        focus: 'general',
        note: 'Best for: nothing that a €10 urea cream and a sunscreen do not do better — spend the difference on the retinoid',
        sessions: 'Daily, as a moisturiser',
        downtime: 'None',
        cost: '€10–80 per tube',
        bodyHtml: `
          <p>The claims on the shelf are borrowed from other evidence. Collagen and elastin in a cream sit on the surface — the molecules are too large to cross an intact stratum corneum, and the <a href="/collagen">collagen guide</a> explains why the oral trials are the ones with data. Peptides, growth factors and "stem-cell" extracts have small facial studies and none on the hand. What a good hand cream does is real but modest: it repairs the barrier, and a repaired barrier on a dry, crepey hand reads as five years younger within a fortnight, which is the effect people attribute to the marketing molecule. The evidence for that is the urea relapse trial above and the emollient recommendations of the European hand-eczema guideline (<a href="https://pubmed.ncbi.nlm.nih.gov/21057743/" rel="noopener nofollow" target="_blank">urea trial</a>, <a href="https://pubmed.ncbi.nlm.nih.gov/34971008/" rel="noopener nofollow" target="_blank">ESCD guideline</a>). The volume trials measured the fat, and no cream reached it; the spot trials measured melanin, and only a retinoid, a lightener, an acid, cold or light moved it. Limited, then, for the claims — and a caution about one category: "brightening" hand creams bought online from outside the EU have been found to contain hydroquinone above legal concentrations, mercury or potent corticosteroids, the last of which thins the skin into exactly the purpura the buyer was trying to hide (see the <a href="/dark-spots">dark-spots guide\'s</a> safety section). What to buy instead: a fragrance-free urea or glycerol cream by every sink, a tinted broad-spectrum sunscreen for the day, and the retinoid at night.</p>
        `,
      },
      {
        id: 'home-nails',
        category: 'home',
        title: 'Biotin for splitting nails',
        tldr: 'The evidence is an eight-patient electron-microscopy study showing nail thickness up 25% on 2.5 mg of biotin, a retrospective series in which 63% of 35 patients said their nails improved, and a review concluding that controlled trials are needed. There is no placebo-controlled trial, biotin deficiency is rare, and the doses sold for hair and nails make troponin and thyroid blood tests read falsely — a warning the FDA has issued twice. Gloves and a moisturiser have better odds.',
        evidence: 'limited',
        focus: 'nails',
        note: 'Best for: a three-month trial in someone whose nails split in layers despite gloves and emollients — after telling the doctor, and stopped for a week before any blood test',
        sessions: '2.5 mg daily for 3–6 months if tried',
        downtime: 'None',
        cost: '€5–15 / month',
        bodyHtml: `
          <p>The whole literature is three papers. In 1990 a Swiss group examined the fingernail clippings of 32 people by scanning electron microscopy: the eight brittle-nail patients studied before and after biotin showed a 25% increase in nail thickness, and the splitting and irregular surface cells improved (<a href="https://pubmed.ncbi.nlm.nih.gov/2273113/" rel="noopener nofollow" target="_blank">biotin electron-microscopy study</a>). In 1993 a New York nail clinic reviewed 44 patients prescribed biotin and found that of the 35 who took it daily, 22 (63%) reported clinical improvement and 13 no change — "a small, retrospective study" in the authors\' own words (<a href="https://pubmed.ncbi.nlm.nih.gov/8477615/" rel="noopener nofollow" target="_blank">biotin retrospective series</a>). The 2018 review concludes that trials have shown improvement in firmness and thickness "with promising results" but that "further larger clinical trials with controls are necessary to determine efficacy and optimal dosing" (<a href="https://pubmed.ncbi.nlm.nih.gov/29057689/" rel="noopener nofollow" target="_blank">biotin evidence review</a>). Limited: no placebo group in thirty-five years, and the improvement in a retrospective series of people who expected to improve is what a placebo group is for. The harm is not the vitamin but the blood test: biotin in the milligram doses sold for hair and nails — up to 100 mg per pill against a daily requirement of 0.03 mg — interferes with immunoassays and can make troponin, the test that diagnoses a heart attack, read falsely low; the FDA warned in 2017, again in 2019, and has a death on record in a patient taking high-dose biotin whose troponin came back normal (<a href="https://www.fda.gov/medical-devices/in-vitro-diagnostics/biotin-interference-troponin-lab-tests-assays-subject-biotin-interference" rel="noopener nofollow" target="_blank">FDA on biotin interference</a>). If you take it, tell every doctor and stop it several days before bloods. Collagen peptides for nails have small trials covered in the <a href="/collagen">collagen guide</a>; "nail hardeners" containing formaldehyde make brittle nails more brittle with time.</p>
        `,
      },
    ],
  },
  {
    id: 'spots',
    title: 'Spots and crepe: lasers, light, cold, acid and the devices',
    intro: 'What removes a lentigo and what smooths the skin — graded on the hand trials, which are small, because hand skin heals slowly and the good clinicians go carefully.',
    sections: [
      {
        id: 'dev-qs-laser',
        category: 'spots',
        title: 'Q-switched and picosecond lasers for the spots (532 nm Nd:YAG, ruby, alexandrite)',
        tldr: 'The best-evidenced spot removal on the hand: in 27 patients with lentigines on both hands randomised across four treatments with blinded photo grading, the frequency-doubled Q-switched Nd:YAG lightened 89% of spots to good or better at 12 weeks against 68% for liquid nitrogen, 93% of patients preferred a laser, textural change was 2% and it hurt least; in an 11-patient split-hand trial the Q-switched ruby beat the fractional CO2 laser; across 41 lentigo trials in 3,234 people the pigment lasers were the most effective option with the least pigment rebound. One to three sessions, a week of dark crusts, and permanent for the treated spot.',
        evidence: 'strong',
        focus: 'spots',
        note: 'Best for: discrete brown lentigines on fair to medium skin that a retinoid has not shifted — the definitive treatment, spot by spot',
        sessions: '1–3 sessions 4–8 weeks apart; new spots as they appear',
        downtime: '5–10 days of dark crusts; redness 1–2 weeks; no sun for a month',
        cost: '€150–400 / session',
        bodyHtml: `
          <p>The hand trial is small and unusually clean. Twenty-seven patients with multiple solar lentigines on the backs of both hands had lesions randomised to liquid nitrogen, a frequency-doubled Q-switched Nd:YAG (532 nm), a krypton laser or a 532 nm diode-pumped vanadate laser, with blinded observers grading photographs at 6 and 12 weeks. At 12 weeks the Q-switched Nd:YAG produced good, excellent or clear lightening in 89% of spots against 80% for krypton, 72% for the diode and 68% for liquid nitrogen; hypopigmentation was under 2% for all, textural change 2% for the Q-switched laser against 8% for krypton and 4% for cryotherapy, 25 of 27 patients (93%) said laser gave the best overall result, and only 8% rated the Q-switched laser most painful against 60% for the krypton (<a href="https://pubmed.ncbi.nlm.nih.gov/10890985/" rel="noopener nofollow" target="_blank">four-treatment hand trial</a>, <a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/190439" rel="noopener nofollow" target="_blank">full results</a>). A Zurich split-hand randomised trial in 11 patients, three sessions at weeks 0, 4 and 8, found the 694 nm Q-switched ruby "significantly more efficacious" than an ablative fractional CO2 laser for lentigines on the dorsum of the hands (p = 0.01) (<a href="https://pubmed.ncbi.nlm.nih.gov/25788397/" rel="noopener nofollow" target="_blank">ruby versus fractional CO2 trial</a>). Across all sites, the 2025 systematic review of 41 trials in 3,234 patients aged 24–92 put Q-switched lasers at 36–77% success and picosecond lasers at 68–93%, concluded that "laser therapy appears more effective than other modalities, with an acceptable safety profile", and noted that cryotherapy carried the more severe side effects (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11948172/" rel="noopener nofollow" target="_blank">lentigo systematic review</a>). Strong — with the caveat that the hand-specific trials number 38 patients between them and the grade leans on the larger lentigo literature, whose biology is the same. Practicalities: a test spot in darker skin, because post-inflammatory darkening is the main risk and rises with skin type; a retinoid paused for a fortnight before; sunscreen for a month after; and a dermatologist\'s eye on every spot before the laser touches it, since a lentigo maligna treated as a lentigo is the one disaster on this page. The <a href="/laser-ipl">laser and IPL guide</a> has the device physics.</p>
        `,
      },
      {
        id: 'dev-ipl',
        category: 'spots',
        title: 'Intense pulsed light for spots and mottling across the whole back of the hand',
        tldr: 'IPL treats the whole hand in one pass rather than spot by spot, and the hand series are consistent: more than 50% improvement in lentigines in 62% of 31 patients after up to five sessions with no pigmentary rebound or scarring; good-to-excellent results in 100% of 23 patients by the investigators and 87% by the patients after four; excellent or good lentigo clearance in 60% of 128 Japanese patients, mostly after one session, with the fine wrinkles barely moved. Across 41 trials it was the light source least associated with post-inflammatory darkening. No randomised hand trial against a laser.',
        evidence: 'moderate',
        focus: 'spots',
        note: 'Best for: a hand freckled all over with many small lentigines and mottled redness, where treating spot by spot is impractical — not for the crepe, and not for darker skin',
        sessions: '3–5 sessions 3–4 weeks apart; yearly top-up',
        downtime: '3–7 days of darkened spots that flake; mild redness',
        cost: '€150–350 / session',
        bodyHtml: `
          <p>Three open series and one randomised trial arm. In Japan, 31 patients with solar lentigines on the backs of the hands were treated with a 515 nm-filtered IPL at monthly intervals up to five times: 62% had more than 50% improvement and 23% more than 75%, no one stopped for side effects and "no patients showed hyperpigmentation or scarring" (<a href="https://pubmed.ncbi.nlm.nih.gov/22515674/" rel="noopener nofollow" target="_blank">IPL hand lentigo series</a>). In Brazil, 23 patients with sun damage and lentigines had four sessions three to four weeks apart: investigators rated the improvement in lentigines and skin quality good to excellent in 100% and patients in 86.9% (20 of 23), with no significant side effects (<a href="https://pubmed.ncbi.nlm.nih.gov/18544292/" rel="noopener nofollow" target="_blank">IPL hand rejuvenation series</a>). The largest series, 128 Japanese patients of mean age 58 treated with 560–1,200 and 515–1,200 nm filters, graded lentigines excellent in 45.3% and good in 14.8%, unchanged in 37.5% and worse in 2.3% — dark, flat spots cleared best, often after one treatment — while wrinkles were "effective" in only 25.0% after the first session (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4846839/" rel="noopener nofollow" target="_blank">IPL in 128 Asian patients</a>). The one randomised design used IPL as the light source for photodynamic therapy against the same IPL with placebo cream, three sessions six weeks apart in 37 patients with actinic keratoses on the hands: both arms "significantly improved photoaged skin", and the sensitiser added the keratosis clearance (<a href="https://pubmed.ncbi.nlm.nih.gov/27518833/" rel="noopener nofollow" target="_blank">PDT-IPL hand trial</a>). The systematic review puts IPL at 74.6–90% success for lentigines and, with the pulsed-dye laser, "less associated with post-inflammatory hyperpigmentation" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11948172/" rel="noopener nofollow" target="_blank">lentigo systematic review</a>). Moderate: consistent series in 182 patients and one trial arm, no head-to-head against the Q-switched laser on hands, and nothing for the crepe. Not on tanned or darker skin, where the broad spectrum burns the surrounding pigment; the <a href="/laser-ipl">laser and IPL guide</a> has the settings and the skin-type limits.</p>
        `,
      },
      {
        id: 'dev-cryo',
        category: 'spots',
        title: 'Liquid nitrogen cryotherapy: the cheapest spot removal, with the white-spot risk',
        tldr: 'A two-second spray of liquid nitrogen per lentigo, in any dermatologist\'s office, for the price of a consultation. In the four-way hand trial it lightened 68% of spots to good or better against 89% for the best laser, with 4% textural change; in 25 women it beat 33% trichloroacetic acid on the other hand but hurt more and healed slower, with post-inflammatory darkening equal and results best in fair skin; in 13 patients it beat two older lasers. Across 41 trials, 37–71% success and the most severe side effects of any option — permanent pale spots on the tanned or darker hand.',
        evidence: 'moderate',
        focus: 'spots',
        note: 'Best for: a handful of well-defined lentigines on a fair-skinned hand, done by a dermatologist who has excluded anything suspicious first — the budget option, not the best one',
        sessions: '1–2 sessions per spot',
        downtime: 'Blister and dark crust for 7–14 days; pale mark for months, sometimes permanent',
        cost: '€50–150 / session',
        bodyHtml: `
          <p>The comparisons are all on hands. In the four-treatment randomised trial, liquid nitrogen produced good, excellent or clear lightening in 65% of spots at six weeks and 68% at 12 against 89% for the frequency-doubled Q-switched Nd:YAG, with textural change in 4% and 16% of patients rating it the most painful (<a href="https://pubmed.ncbi.nlm.nih.gov/10890985/" rel="noopener nofollow" target="_blank">four-treatment hand trial</a>, <a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/190439" rel="noopener nofollow" target="_blank">full results</a>). In Tehran, each hand of 25 women was randomised to cryotherapy or 33% trichloroacetic acid: cryotherapy "was more likely to produce substantial lightening" (p = 0.025) but was more painful and slower to heal, post-inflammatory hyperpigmentation was equal in both and was "the major complication", and results were significantly better in fairer skin types (<a href="https://pubmed.ncbi.nlm.nih.gov/18021205/" rel="noopener nofollow" target="_blank">cryotherapy versus TCA trial</a>). In Boston, 99 lentigines in 13 patients randomised to cryotherapy, argon laser or low-fluence CO2 laser found cryotherapy superior to both older lasers (<a href="https://pubmed.ncbi.nlm.nih.gov/8188893/" rel="noopener nofollow" target="_blank">cryotherapy versus argon and CO2 trial</a>). The systematic review gives cryotherapy 37–71.4% success and notes it "was linked to more severe side effects" than the lasers (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11948172/" rel="noopener nofollow" target="_blank">lentigo systematic review</a>), and DermNet\'s summary of all destructive methods applies most to this one: they "risk leaving pale or dark spots, which can be temporary or permanent" (<a href="https://dermnetnz.org/topics/solar-lentigo" rel="noopener nofollow" target="_blank">DermNet</a>). Moderate: randomised comparisons in 65 patients, effective in two thirds, beaten by the Q-switched laser on every measure but price. Its real value is that the person holding the canister is a dermatologist who has looked at the spot first — cryotherapy is also the standard treatment for the actinic keratoses that share the hand (<a href="https://pubmed.ncbi.nlm.nih.gov/18341663/" rel="noopener nofollow" target="_blank">extremity keratosis trial</a>). Freeze lightly (two to five seconds), never on a tan, and expect a pale ghost where each spot was.</p>
        `,
      },
      {
        id: 'dev-peels',
        category: 'spots',
        title: 'Chemical peels on the hands: trichloroacetic acid and glycolic acid',
        tldr: 'The one hand trial with a control: 18 of 20 patients, mean age 64, had three peels of 15% trichloroacetic acid plus 3% glycolic acid on one hand at monthly intervals with the other untreated, and blinded dermatologists correctly picked the treated after-photograph in 88%, with pain of 3.8 out of 10 and no complications. Stronger 33% TCA lost to cryotherapy on the other hand. Across 41 lentigo trials, TCA peels achieved 12–46% success — a modest evening of tone, not a spot-remover.',
        evidence: 'emerging',
        focus: 'spots',
        note: 'Best for: diffuse mottling and mild crepe on a fair-skinned hand that wants a lift without the crusts of a laser, from a clinician who peels hands regularly — never a deep peel on a hand',
        sessions: '3–4 light peels 4 weeks apart',
        downtime: '3–7 days of flaking; redness',
        cost: '€100–250 / session',
        bodyHtml: `
          <p>The controlled study is recent and small: 20 patients with hand lentigines (mean age 64.4, range 51–71) received three 15% TCA + 3% glycolic acid peels at four-week intervals on one hand, the other serving as the untreated control; 18 completed, mean pain was 3.8 on a 10-point scale, two blinded dermatologists correctly identified the after-treatment photographs in 16 patients (88%), and physician- and patient-graded improvement was significantly greater on the treated hand (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11042518/" rel="noopener nofollow" target="_blank">split-hand peel trial</a>). The stronger acid did less well against cold: 33% TCA lost to cryotherapy on the other hand in 25 women, though it hurt less and healed faster (<a href="https://pubmed.ncbi.nlm.nih.gov/18021205/" rel="noopener nofollow" target="_blank">cryotherapy versus TCA trial</a>), and across the lentigo trials TCA peels achieved 12–46% success against 36–93% for the lasers (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11948172/" rel="noopener nofollow" target="_blank">lentigo systematic review</a>). Emerging: one blinded 18-patient trial and one comparison. The reason to consider it anyway is the reason the peelers give — a light peel evens the mottled background between the spots and softens fine crepe in one appointment, which the spot lasers do not do — and the reason to stop at "light" is the same tissue warning as for lasers: hand skin heals slowly, and medium and deep peels that are routine on a face scar on a hand. Skin of colour darkens after any peel here; a retinoid should be paused a fortnight before; and the <a href="/chemical-peels">chemical peel guide</a> covers the acids, depths and the neutralising.</p>
        `,
      },
      {
        id: 'dev-fractional',
        category: 'spots',
        title: 'Fractional lasers (non-ablative 1,550 nm and fractional CO2) for pigment plus texture',
        tldr: 'The only devices that treat the spots and the crepe together, and the evidence is three pilots of nine or ten patients: five sessions of a 1,550 nm non-ablative fractional laser improved pigment 51–75% and roughness and wrinkling 25–50% with more collagen on biopsy and no scarring; a second 1,550 nm series found a statistically significant 23% improvement in overall photodamage at six months with fewer atypical cells on histology; three fractional CO2 sessions improved wrinkles 26–50%, pigment 51–75% and texture 26–50% with no long-term scarring or pigment change. For the spots alone the Q-switched ruby beat the fractional CO2 in a randomised comparison.',
        evidence: 'emerging',
        focus: 'texture',
        note: 'Best for: the crepey, mottled, spotted hand that wants texture as well as pigment addressed, from a laser dermatologist who treats hands often and stays conservative',
        sessions: '3–5 sessions 3–6 weeks apart',
        downtime: 'Non-ablative: 2–4 days of redness and swelling. Fractional CO2: 5–10 days of crusting and redness, pinkness for weeks',
        cost: '€300–800 / session',
        bodyHtml: `
          <p>Ten patients with hand photodamage (skin types II–IV) were randomised to five treatments of a 1,550 nm fractional erbium-fibre laser on one hand at 8–9 mJ and 2,500 microscopic zones per square centimetre: patient and physician assessment at one and three months showed a mean 51–75% improvement in pigmentation and 25–50% in roughness and wrinkling, biopsies showed increased dermal collagen density, and side effects were transient redness and swelling with no scarring (<a href="https://pubmed.ncbi.nlm.nih.gov/18053047/" rel="noopener nofollow" target="_blank">fractional 1,550 nm hand study</a>). A nine-patient series with five to six sessions found statistically significant improvement in wrinkling, pigmentation, texture and overall photodamage (23%) at six months, with histology showing fewer atypical keratinocytes, restored rete ridges, denser collagen and less solar elastosis (<a href="https://pubmed.ncbi.nlm.nih.gov/19177257/" rel="noopener nofollow" target="_blank">second 1,550 nm hand study</a>). The ablative version, fractional CO2, was piloted in ten participants with three treatments to one hand at four-to-six-week intervals: at one month after the last, investigators rated wrinkles 26–50% improved, pigment 51–75% and texture 26–50%, participants rated texture higher, one had significant swelling after the first session, and there was "no long-term scarring or pigmentary alteration" (<a href="https://pubmed.ncbi.nlm.nih.gov/21276159/" rel="noopener nofollow" target="_blank">fractional CO2 hand pilot</a>). For the spots specifically, the Q-switched ruby was significantly better than the fractional CO2 in an 11-patient randomised split-hand trial (<a href="https://pubmed.ncbi.nlm.nih.gov/25788397/" rel="noopener nofollow" target="_blank">ruby versus fractional CO2</a>), and across sites the systematic review gives fractional CO2 8–23% lentigo success (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11948172/" rel="noopener nofollow" target="_blank">lentigo systematic review</a>). Emerging: 29 patients across three pilots, no controls, and encouraging histology. The practical rule from all three papers is conservatism — low densities, more sessions, no fully ablative resurfacing, because the hand\'s sparse follicles re-epithelialise slowly and the scarring that a face shrugs off is permanent here. The <a href="/laser-ipl">laser and IPL guide</a> and the <a href="/decolletage">décolletage guide</a>, another slow-healing site, have the device detail.</p>
        `,
      },
      {
        id: 'dev-pdt',
        category: 'spots',
        title: 'Photodynamic therapy for the rough pre-cancerous patches — and the photo-rejuvenation that comes with it',
        tldr: 'For hands with actinic keratoses, the one randomised placebo-controlled hand trial: 37 patients had three sessions of methyl aminolaevulinate cream plus IPL on one hand and placebo cream plus IPL on the other, six weeks apart, and ten weeks later 54.5% of the treated hands were clear of keratoses against 3.0%, while both hands showed significantly improved photoaged skin and new collagen. Against cryotherapy on the extremities, PDT cleared 78% of lesions to cryotherapy\'s 88%, with better cosmetic results and patient preference. A medical treatment whose side effect is a younger-looking hand.',
        evidence: 'emerging',
        focus: 'spots',
        note: 'Best for: the sun-damaged hand with several actinic keratoses, where a dermatologist wants to treat the whole field — the cosmetic gain rides on the medical indication',
        sessions: '2–3 sessions 4–6 weeks apart',
        downtime: 'Burning during illumination; 3–7 days of redness, swelling and crusting; strict light avoidance for 48 hours',
        cost: '€300–600 / session (may be reimbursed for keratoses)',
        bodyHtml: `
          <p>The Regensburg trial randomised the hands of 37 patients (mean age 68.8) with one to four mild-to-moderate actinic keratoses per hand to methyl aminolaevulinate cream or placebo, both followed by the same IPL illumination (λ ≥ 600 nm, 16.2 J/cm², three passes), three treatments at six-week intervals. Ten weeks after the last, complete keratosis clearance per hand was 54.5% with the sensitiser against 3.0% with placebo, the trial\'s second primary endpoint — new subepidermal collagen — was met, and "both treatment modalities significantly improved photoaged skin" (<a href="https://pubmed.ncbi.nlm.nih.gov/27518833/" rel="noopener nofollow" target="_blank">PDT-IPL hand trial</a>). The larger comparison is against cold: 121 patients with 1,343 keratoses, 98% on the extremities, treated once on each side with MAL-PDT or cryotherapy and retreated at 12 weeks if needed, had 78% lesion reduction with PDT against 88% with cryotherapy at 24 weeks — inferior for clearance, "significantly better" for cosmetic outcome by the investigators, and preferred by the patients (<a href="https://pubmed.ncbi.nlm.nih.gov/18341663/" rel="noopener nofollow" target="_blank">PDT versus cryotherapy on the extremities</a>). Emerging for the cosmetic claim — one 37-patient trial in which the rejuvenation was a secondary observation shared by the placebo arm, so the IPL may have done it — and established, with reimbursement in many countries, for the medical one. The reasoning for the reader with a rough, spotted hand: the keratoses have to be treated anyway, because up to 65% of squamous-cell carcinomas arise from them (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11802505/" rel="noopener nofollow" target="_blank">actinic keratosis to SCC review</a>), and field treatment of the whole back of the hand with a light source is the version that also lightens the lentigines and smooths the surface. Hands respond a little less than faces, so two or three rounds are usual; the <a href="/sun-damage">sun-damage guide</a> has the keratosis pharmacology.</p>
        `,
      },
      {
        id: 'dev-devices-nodata',
        category: 'spots',
        title: 'Microneedling, radiofrequency, focused ultrasound, PRP and microdermabrasion on the hands',
        tldr: 'Offered everywhere, trialled almost nowhere on hands. Microneedling has one published hand series with no controlled data; a 67-study review of microfocused ultrasound maps its evidence to the face and body with no hand trial; radiofrequency, platelet-rich plasma and microdermabrasion have facial or other-site studies and none on the dorsal hand; and the systematic review of hand rejuvenation files them under "miscellaneous" with satisfaction lower for the energy devices than for fillers. Not harmful in careful hands, not evidence-based, and not what fixes veins or spots.',
        evidence: 'limited',
        focus: 'texture',
        note: 'Best for: nothing on the hand that the retinoid, the skin booster and the fractional laser do not do with better data — spend elsewhere unless it is bundled free with something graded above',
        sessions: '3–6 sessions typically sold',
        downtime: '1–3 days of redness',
        cost: '€150–600 / session',
        bodyHtml: `
          <p>The hand-specific literature is a single 2010 report of percutaneous collagen induction (medical needling) for hand rejuvenation in a plastic-surgery journal, without controls (<a href="https://pubmed.ncbi.nlm.nih.gov/20885224/" rel="noopener nofollow" target="_blank">collagen induction on hands</a>); the <a href="/microneedling">microneedling guide</a> grades the facial evidence, which is better, and the mechanism — new collagen in the dermis — is plausible for crepe on a hand with no trial to say so. Microfocused ultrasound has 67 studies in a 2025 narrative review, mapped to firmness, surface evenness, tone and glow, "with sustained effects beyond 6 months" — on the face, neck, décolletage, arms and abdomen, not the hand (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12374570/" rel="noopener nofollow" target="_blank">microfocused ultrasound review</a>); the dorsal hand\'s tendons a few millimetres down are the reason nobody has been keen to focus heat there. Radiofrequency microneedling, platelet-rich plasma, exosomes and microdermabrasion appear in the hand reviews as options — the 2016 fat-grafting review lists microdermabrasion and peeling agents as the "alternative options" fat outperforms (<a href="https://pubmed.ncbi.nlm.nih.gov/27113709/" rel="noopener nofollow" target="_blank">fat-grafting review</a>) — and in the systematic review as seven "miscellaneous" studies, with the finding that satisfaction was lowest for the energy-based treatments (<a href="https://pubmed.ncbi.nlm.nih.gov/33420511/" rel="noopener nofollow" target="_blank">dorsal hand rejuvenation systematic review</a>). Limited, then: not because they fail, but because no one has measured them on a hand. If a clinic proposes one, ask what it will change that the hand grading scale or a photograph can show, and compare the price per session with the fractional laser and the skin-booster rows, which have hand data for the same complaint.</p>
        `,
      },
    ],
  },
  {
    id: 'volume',
    title: 'Volume and veins: fillers, fat, biostimulators and the vein treatments',
    intro: 'The best evidence on this page — two randomised, blinded trials of over a hundred people each and two regulatory approvals — and the treatment a good clinician talks you out of.',
    sections: [
      {
        id: 'inj-caha',
        category: 'volume',
        title: 'Calcium hydroxylapatite filler (Radiesse) into the back of the hand — the first with a regulatory hand indication',
        tldr: 'The largest hand trial: 114 people with grade 2–4 hands randomised 3:1 to calcium hydroxylapatite with lidocaine or no treatment, graded by blinded investigators; at three months 75.3% of treated subjects (77.1% of hands) had improved at least one grade against 3.4% of controls, the mean grade fell from 2.6 to 1.5, 97.6% rated themselves at least improved, and 68% were still a grade better a year later without retreatment. A 30-person trial found 20 of 20 treated improved against 0 of 10 untreated at four weeks. Swelling in 20%, bruising 19%, nodules or lumps 6%; in a 256-person safety study with up to two syringes per hand and three retreatments, severe device-related events 1.5% or less, grip and dexterity unchanged, and the filler is visible on X-ray without obscuring the bones.',
        evidence: 'strong',
        focus: 'volume',
        note: 'Best for: the grade 2–4 hand where the veins and tendons are the complaint — the treatment with the most robust evidence on this page, immediate, and repeated about yearly',
        sessions: '1 session (1.5–3 mL per hand), top-up at 6–12 months',
        downtime: '3–7 days of swelling, bruising and stiffness; rings off for a week',
        cost: '€500–900 per syringe; typically 1 syringe per hand, so €1,000–1,800 for both',
        bodyHtml: `
          <p>The pivotal study was multicentre, single-blind and randomised 3:1: 114 subjects with moderate-to-very-severe volume loss received calcium hydroxylapatite mixed with lidocaine into the dorsum of both hands or waited three months as untreated controls, with effectiveness graded live by blinded investigators on the Merz Hand Grading Scale (<a href="https://pubmed.ncbi.nlm.nih.gov/28562435/" rel="noopener nofollow" target="_blank">12-month randomised hand trial</a>). The posted results: mean grade 2.6 in both arms at baseline, 1.5 against 2.6 at three months; a one-grade-or-better improvement in 77.1% of treated hands against 5.2% of control hands and in 75.3% of treated subjects against 3.4% (p < 0.0001); a similar response under and over 60; the Global Aesthetic Improvement Scale at least "improved" in 97.6% at three months; and among those never retreated, responders still 73.6% of hands at nine months and 71.7% at 12, with the mean grade drifting from 1.3 back to 1.7 — the filler fading, not gone (<a href="https://clinicaltrials.gov/study/NCT01832090" rel="noopener nofollow" target="_blank">trial results on ClinicalTrials.gov</a>). A smaller controlled trial randomised 30 subjects 2:1 and found all 20 treated improved at least a grade at four weeks against none of the ten controls (<a href="https://pubmed.ncbi.nlm.nih.gov/26618470/" rel="noopener nofollow" target="_blank">30-subject controlled study</a>); a 52-week series of ten women given 1.3 mL per hand had 80% of hands rated improved at nine months and 30–40% at 12 (<a href="https://pubmed.ncbi.nlm.nih.gov/21197523/" rel="noopener nofollow" target="_blank">52-week series</a>). Safety from the same trial, in 113 treated: swelling 20.4%, bruising 18.6%, redness 8.0%, pain 6.2%, itching 3.5%, nodules or lumps 6.2%, "expected, minor, short-lived" (<a href="https://clinicaltrials.gov/study/NCT01832090" rel="noopener nofollow" target="_blank">adverse-event table</a>); and from the 256-person, two-year safety study of severe (grade 4) against moderate hands treated with up to 3 mL per hand and up to three retreatments: bruising 30.0% and 29.4%, swelling 24.6% and 21.4%, nodules 13.1% and 11.1%, erythema 15.4% and 6.3%, severe device- or injection-related events 1.5% and 0%, and no worsening of range of motion, dexterity, sensation or grip and pinch strength at 24 months (<a href="https://clinicaltrials.gov/study/NCT02904096" rel="noopener nofollow" target="_blank">hand safety study</a>). The one unusual question — it is radiopaque — was answered in 20 people X-rayed for two years: visible in 100% at one month and 83.3% at 24, "no bone obscuration" at any point (<a href="https://pubmed.ncbi.nlm.nih.gov/36573029/" rel="noopener nofollow" target="_blank">X-ray study</a>). Strong. It is one of only two fillers with a regulatory indication for the hand (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10063163/" rel="noopener nofollow" target="_blank">hand rejuvenation review</a>), placed with a cannula into the structure-free superficial lamina and massaged flat. Diluted, it is also used for skin quality: in 15 women, both a deep-fat and a subdermal technique improved the grading and aesthetic scores, viscoelasticity and ultrasound dermal parameters over 24 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/32976172/" rel="noopener nofollow" target="_blank">diluted CaHA study</a>), and a 40-woman series combined undiluted and diluted in the same session with satisfaction held to six months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10656086/" rel="noopener nofollow" target="_blank">dual-approach series</a>). It cannot be dissolved, which is the argument for the hyaluronic acid row below in a first-timer; the <a href="/fillers">filler guide</a> covers the products.</p>
        `,
      },
      {
        id: 'inj-ha',
        category: 'volume',
        title: 'Hyaluronic acid filler (Restylane Lyft) into the back of the hand — reversible, and the second with a hand indication',
        tldr: 'The split-hand trial: 90 people had one hand treated with a large-particle hyaluronic acid with lidocaine (mean 2.1 mL) and the other left alone; at 12 weeks 85.9% of treated hands had improved at least a grade on blinded assessment against 21.2% of the untreated (73 against 18 of 85), still 76% against 30% at 24 weeks, at least 92.8% rated themselves improved and 84.5% would recommend it. Diary week one: swelling and tenderness in 75%, redness 72%, bruising 60%, pain 44%, impaired hand function 6.8%, mostly gone in four days; related adverse events 7.9%, none serious. Dissolvable with hyaluronidase.',
        evidence: 'strong',
        focus: 'volume',
        note: 'Best for: the first-time hand, the person who wants the option of reversal, and the hand with big veins that needs padding rather than removal',
        sessions: '1 session (about 2 mL per hand), touch-up at 6 months',
        downtime: '3–5 days of swelling, tenderness and bruising; rings off for a week',
        cost: '€400–800 per mL syringe; typically 1–2 syringes per hand, so €800–1,600 for both',
        bodyHtml: `
          <p>The design is the fair one for a hand: each person their own control. Ninety-two subjects were randomised, 90 treated in one hand with a 20 mg/mL large-gel-particle hyaluronic acid with 0.3% lidocaine and the other hand untreated, a mean 2.1 mL at the first session and 1.13 mL at the touch-up; blinded evaluators scored both hands on the Merz Hand Grading Scale. Responders — one grade or better — were 85.9% of treated hands against 21.2% of untreated at week 12, significantly higher at weeks 16, 20 and 24 (p < 0.0001), at least 92.8% of subjects rated themselves improved on the aesthetic improvement scale at every visit, 84.5% would recommend it to a friend and 77.4% would repeat it (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6766356/" rel="noopener nofollow" target="_blank">split-hand trial, open access</a>). The posted counts: 73 responders of 85 against 18 of 85 at week 12 (difference 64.7 points, 95% confidence interval 53.3 to 76.1), 76 against 16 at week 16, 68 against 21 at week 20 and 63 against 25 at week 24; the treating investigators rated 83 of 84 treated hands improved at week 12 and none of the untreated (<a href="https://clinicaltrials.gov/study/NCT02650921" rel="noopener nofollow" target="_blank">results on ClinicalTrials.gov</a>). Tolerability from the subject diaries in the first week: swelling 75.0%, tenderness 75.0%, redness 71.6%, bruising 60.2%, pain 44.3%, itching 13.6%, impaired hand function 6.8%, "the majority resolved within 4 days"; treatment-related adverse events in 7 of 89 (7.9%), none serious (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6766356/" rel="noopener nofollow" target="_blank">trial safety data</a>). It became the first hyaluronic acid filler with a US hand indication in May 2018 on that study (<a href="https://www.galderma.com/news/fda-approval-restylaner-lyft-hands" rel="noopener nofollow" target="_blank">approval announcement</a>). The older comparisons agree: in ten women randomised to hyaluronic acid or human collagen in alternate intermetacarpal spaces, hyaluronic acid cleared the veins from view significantly better on blinded photographs at six months (<a href="https://pubmed.ncbi.nlm.nih.gov/18430173/" rel="noopener nofollow" target="_blank">hyaluronic acid versus collagen</a>), and a 100-subject Chinese split-hand trial of a skin-quality hyaluronic acid gel over 15 months found clinically relevant differences on the hand grading scale in favour of treatment (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7318129/" rel="noopener nofollow" target="_blank">Chinese split-hand trial</a>). Strong. The trade against calcium hydroxylapatite: a little less lift per millilitre and a shorter run, against reversibility with hyaluronidase within a day if a lump, a vein or a regret needs it — which is why it is the sensible first hand filler. The <a href="/fillers">filler guide</a> has the rheology.</p>
        `,
      },
      {
        id: 'inj-skinbooster',
        category: 'volume',
        title: 'Hyaluronic acid "skin boosters": microdroplets for crepe, hydration and elasticity rather than volume',
        tldr: 'Thin, non-lifting hyaluronic acid placed as hundreds of intradermal droplets across the back of the hand, three sessions a month apart. In 30 women given three 1 mL sessions of stabilised hyaluronic acid in one hand and saline in the other, all improved on the aesthetic scale at three months with hydration, elasticity and roughness significantly better than the saline hand, held to 12 months; in 15 volunteers the stabilised gel beat a non-stabilised one on elasticity and roughness at week 12 and was wearing off by week 24. Improves the skin, not the veins.',
        evidence: 'moderate',
        focus: 'texture',
        note: 'Best for: the crepey, dry, thinned hand at grade 0–1 that does not need lifting — or as the skin layer over a volume filler',
        sessions: '3 sessions 4 weeks apart; repeat every 6–12 months',
        downtime: '1–3 days of pinpoint bumps and mild bruising',
        cost: '€250–450 / session',
        bodyHtml: `
          <p>The placebo-controlled trial is small and clean: 30 women (mean age 53) received three monthly injections of 1.0 mL of a 20 mg/mL stabilised hyaluronic acid gel as microdroplets into the dorsum of one hand and 1.0 mL of saline into the other, with evaluators blinded. At three months every patient had improved on the Global Aesthetic Improvement Scale, patient scores were significantly higher for the treated hand from month one, biomechanical measurements showed significantly better hydration and elasticity than both baseline and the saline hand, maximum roughness and waviness improved against saline, all adverse events were mild, and the improvements were sustained to 12 months in the extension (<a href="https://pubmed.ncbi.nlm.nih.gov/25738851/" rel="noopener nofollow" target="_blank">skin booster versus saline trial</a>). The earlier split-hand study in 15 volunteers compared a stabilised with a non-stabilised hyaluronic acid at weeks 0, 4 and 8: the stabilised gel produced significant improvement in elasticity and surface roughness at week 12 and higher hydration with lower water loss than the other hand, the blinded dermatologist rated it clinically superior, and by week 24 the effects "started to return back toward baseline" (<a href="https://pubmed.ncbi.nlm.nih.gov/19735521/" rel="noopener nofollow" target="_blank">stabilised versus non-stabilised study</a>). The 100-subject Chinese trial of a hyaluronic acid gel for dorsal hand skin quality over 15 months adds the largest numbers, with clinically relevant differences on the hand grading scale and biophysical measures of elasticity, roughness and hydration in favour of treatment (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7318129/" rel="noopener nofollow" target="_blank">Chinese trial</a>). Moderate: three controlled studies in 145 people, all showing the same thing — a better surface for six to twelve months — and none of them showing a lift, because there is no volume in a microdroplet. The honest use is the hand whose complaint is crepe and dryness rather than veins, or the top layer of a two-part plan over a volume filler; expect to repeat it yearly, and expect the effect to be one that a photograph in good light shows and a photograph in bad light does not.</p>
        `,
      },
      {
        id: 'surg-fat',
        category: 'volume',
        title: 'Fat grafting (lipofilling) to the backs of the hands: the permanent option, with an unpredictable half that melts',
        tldr: 'Your own fat, harvested from the abdomen or thigh under local anaesthetic and placed in thin layers over the dorsal fascia — 10 to 39 mL per hand. Across ten studies and 320 patients, 97.6% were satisfied; oedema affected nearly all, bruising 7%, temporary numbness 5.3%, cysts or irregularities 1.3%, infection 0.67%, no major complications. What survives is the problem: about 40% of the injected volume on 3D scanning at eight months, 69% at six months in a measured case, "approximately 50% resorption" as the working assumption, so 12% of one surgeon\'s 65 patients needed a second round. Two small randomised trials compared preparation methods, none compared it with a filler.',
        evidence: 'moderate',
        focus: 'volume',
        note: 'Best for: the grade 3–4 hand in someone who has liked a filler and wants a lasting result, has donor fat, and accepts two weeks of swollen hands and a possible second session',
        sessions: '1 session; a second in 10–30%',
        downtime: '1–2 weeks of swelling, elevation and light use; bruising at the donor site',
        cost: '€2,000–5,000 for both hands',
        bodyHtml: `
          <p>The technique dates from the structural fat grafting described in 2002: fat harvested with a blunt cannula, cleaned by centrifugation or decanting, and placed as minuscule parcels through many passes so each meets recipient tissue and survives, restoring "a slight fullness to atrophic subcutaneous tissue" and softening the exposed tendons and veins (<a href="https://pubmed.ncbi.nlm.nih.gov/12447057/" rel="noopener nofollow" target="_blank">structural fat grafting technique</a>). The 2022 systematic review pooled ten studies and 320 patients (93.1% women): volumes of 10–39 mL per hand, most needing one session; some postoperative oedema "in nearly all patients", ecchymosis 7%, temporary dysesthesia 5.3%, cysts or irregularities 1.3%, infection 0.67%, no major complications; 97.6% self-reported satisfaction; and the frank verdict that "unpredictable graft resorption is the greatest drawback", with survival ranging from 30% to 83% in the literature — one 3D-scanned series retaining a mean 10.3 mL of 25.5 injected (about 40%) at eight months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9018121/" rel="noopener nofollow" target="_blank">fat transfer systematic review</a>). The 2025 review found 11 studies and 303 patients, three small randomised trials (comparing preparation methods, not fat against filler), high satisfaction, and the same warning that "fat graft resorption may require multiple treatments" (<a href="https://pubmed.ncbi.nlm.nih.gov/39806138/" rel="noopener nofollow" target="_blank">2025 systematic review</a>). The measured case: 3D surface scanning found 69% of the injected volume still present at six months in one hand (<a href="https://pubmed.ncbi.nlm.nih.gov/20352578/" rel="noopener nofollow" target="_blank">3D volumetric case</a>). The long series: 65 patients over 12 years, 10–30 mL per hand, decanted rather than centrifuged, injected from the wrist above the deep fascia: 84% satisfied, 12% "somewhat satisfied" and needing a second graft, 4% dissatisfied, three cases of temporary swelling, no long-term complications (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5610212/" rel="noopener nofollow" target="_blank">12-year fat grafting series</a>). The rare harm is on record: an atypical mycobacterial infection of both hands after fat grafting in a 55-year-old, needing months of treatment (<a href="https://pubmed.ncbi.nlm.nih.gov/18472321/" rel="noopener nofollow" target="_blank">M. abscessus after hand fat grafting</a>). Moderate: hundreds of patients, consistent satisfaction, no comparison against the fillers that have randomised controlled trials, and a durability that cannot be promised for any individual hand. It suits the person who has done the reversible trial with a filler, liked it, and wants it once; the <a href="/regenerative-aesthetics">regenerative aesthetics guide</a> covers nanofat and the stem-cell claims.</p>
        `,
      },
      {
        id: 'inj-plla',
        category: 'volume',
        title: 'Poly-L-lactic acid and poly-D,L-lactic acid biostimulators on the hands',
        tldr: 'A collagen-stimulating powder injected diluted into the spaces between the metacarpals, two or three sessions, with the volume arriving over months as the body builds collagen around it. The evidence is series: 27 patients (mean age 65.9) over 109 sessions with most satisfied, and a 2024 pilot of the D,L isomer. No blinded grading, no controls, and lumps are the known risk of a product that cannot be dissolved.',
        evidence: 'emerging',
        focus: 'volume',
        note: 'Best for: the patient already on a biostimulator plan for the face who wants a gradual, natural change on grade 2–3 hands and accepts the nodule risk — otherwise the two fillers with trials come first',
        sessions: '2–3 sessions 4–6 weeks apart; repeat at 18–24 months',
        downtime: '2–5 days of swelling and bruising; nodules occasionally weeks later',
        cost: '€400–700 per vial; usually 1 vial per session for both hands',
        bodyHtml: `
          <p>Poly-L-lactic acid does not fill; it provokes. Reconstituted to five to eight millilitres and injected in 2–4 mL portions into the intermetacarpal spaces, it is cleared over months while the fibroblasts around it lay down collagen that thickens the tissue. The founding series treated 27 patients (mean age 65.9) in 109 sessions between 2004 and 2005, every hand treatment paired with a face or neck treatment, and reported that most were satisfied (<a href="https://pubmed.ncbi.nlm.nih.gov/17177745/" rel="noopener nofollow" target="_blank">PLLA hand series</a>); the newer poly-D,L-lactic acid has a 2024 pilot on the dorsal hand (<a href="https://pubmed.ncbi.nlm.nih.gov/38764417/" rel="noopener nofollow" target="_blank">PDLLA pilot</a>); and the hand reviews list it among the options without a controlled study to grade (<a href="https://pubmed.ncbi.nlm.nih.gov/22268976/" rel="noopener nofollow" target="_blank">hand rejuvenation review</a>). Emerging: uncontrolled series, no blinded grading on the hand scale, and a mechanism that is slow, cumulative and cannot be reversed. The case for it is a gradual change that no one notices happening and a duration often quoted at two years; the case against is that the two fillers above have randomised blinded trials of over 100 people each and produce their result in the chair, and that the diluted calcium hydroxylapatite row does the biostimulation with better hand data. Nodules are the specific risk of any stimulator placed too superficially or massaged too little, and on a hand they are felt with every handshake. The <a href="/regenerative-aesthetics">regenerative aesthetics guide</a> covers the biostimulator class.</p>
        `,
      },
      {
        id: 'vein-treatments',
        category: 'volume',
        title: 'Removing the veins: sclerotherapy, endovenous laser and phlebectomy',
        tldr: 'It works and it is permanent, which is the problem. In 100 women, 3% polidocanol sclerotherapy eliminated the target veins in 95% while weaker solutions failed in 80%; side effects — pain, bruising, swelling, clotted veins — occurred in 90%, matting in 14.5%, and one had a temporary nerve palsy. Foam sclerotherapy series report high satisfaction and a clotted cord in 15% of sessions; an office endovenous laser closed the veins in 54 hands with every patient satisfied and every hand swollen for up to two weeks. One published case of a dead fingertip after hand-vein sclerotherapy, and a lifetime of cannulas that will go somewhere worse.',
        evidence: 'emerging',
        focus: 'veins',
        note: 'Best for: almost no one — a healthy person with normal hand fat and large veins who has tried a filler over them, understands they will never be cannulated there again, and is treated by a phlebologist who does hands weekly',
        sessions: '1–3 sessions',
        downtime: 'Compression for 1–2 weeks; tender cords for weeks; swelling up to 2 weeks after laser',
        cost: '€200–500 / sclerotherapy session; €1,000–2,500 for endovenous laser',
        bodyHtml: `
          <p>The largest series is the argument for and against at once. One hundred healthy women (mean age 56.5) had sclerotherapy of dilated dorsal hand veins of 1–6 mm: the 20 treated with 0.5% sodium tetradecyl sulfate or 1.5% polidocanol failed in 16 (80%), while 3% polidocanol succeeded in 76 of 80 (95%); adverse events "common to sclerotherapy" — pain, bruising, oedema of various degrees, thrombosis of the treated veins — were observed in 90%, 14.5% of the successes developed microscopic new vessels (matting), and one patient had transient palsy of the superficial radial nerve after a vein on the thumb web was treated (<a href="https://pubmed.ncbi.nlm.nih.gov/10513934/" rel="noopener nofollow" target="_blank">100-patient sclerotherapy series</a>). Foam versions are gentler: a retrospective review of 41 hand patients treated with 0.2% sodium tetradecyl sulfate or 0.5% polidocanol foam over a mean of 1.5 sessions found coagulum in 15.2% of sessions, induration, oedema and hyperpigmentation rare, no thrombophlebitis, ulceration or nerve events, and significant improvement in 63.2% at three months (<a href="https://pubmed.ncbi.nlm.nih.gov/37606885/" rel="noopener nofollow" target="_blank">foam sclerotherapy review</a>); a telephone survey of 21 of 45 foam patients scored improvement 2.55 of 3 (<a href="https://pubmed.ncbi.nlm.nih.gov/25022711/" rel="noopener nofollow" target="_blank">foam sclerotherapy survey</a>). The endovenous laser: 54 hands in 28 patients treated in the office with a 940 nm fibre under tumescent anaesthesia, on average four veins per hand; all but one vein cannulated, all 28 patients satisfied at up to 31 months, hand swelling in every treated hand for up to two weeks, one 3 mm skin burn (<a href="https://pubmed.ncbi.nlm.nih.gov/18090768/" rel="noopener nofollow" target="_blank">endovenous laser series</a>). And the harm: acute ischaemia of a fingertip after elective sclerotherapy of a dorsal hand vein, reported by hand surgeons who note that as the procedure "grows in popularity", awareness of this "rare but potentially devastating complication" is essential (<a href="https://pubmed.ncbi.nlm.nih.gov/28410939/" rel="noopener nofollow" target="_blank">hand ischaemia case</a>). Emerging: series without controls, a real effect, permanent, and a specific injury on record. The editorial position is in the safety section: the dorsal hand veins are the veins of the rest of your medical life, and a filler placed over them hides them in a blinded trial without removing them (<a href="https://pubmed.ncbi.nlm.nih.gov/18430173/" rel="noopener nofollow" target="_blank">vein-clearance scores with filler</a>). If the reader still wants them gone, a phlebologist, the foam, the smallest effective concentration, the non-dominant hand first, and never both hands in one sitting.</p>
        `,
      },
    ],
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The spot that must be seen, the filler numbers to know, the veins to keep, the skin that heals slowly, and the two things that make hands look older or blood tests wrong.',
    sections: [
      {
        id: 'safety-spot-rule',
        category: 'safety',
        title: 'The spot that must be seen first: lentigo maligna, the actinic keratosis and the squamous-cell carcinoma on the back of the hand',
        tldr: 'Before any spot is frozen, lasered or peeled, a dermatologist looks at it — the back of the hand is a prime site for actinic keratoses, up to 65% of squamous-cell carcinomas arise from them, and a lentigo maligna is a brown patch that looks like the spots beside it. A spot that has changed, is larger than the others, irregular, more than one colour, raised, rough or bleeding is biopsied, and where the colour varies, from each distinct area. Treatment of a melanoma with a laser removes the evidence and delays the diagnosis.',
        focus: 'spots',
        bodyHtml: `
          <p>The same sun that makes lentigines makes the pre-cancers on the same hand: in the Leiden study lentigines travelled with actinic keratosis (odds ratio 1.8) and solar elastosis (2.4) (<a href="https://pubmed.ncbi.nlm.nih.gov/15140067/" rel="noopener nofollow" target="_blank">Leiden lentigo study</a>), and the keratoses matter because cutaneous squamous-cell carcinoma, the second commonest skin cancer, arises from them in up to 65% of cases, with contiguous keratosis found beside 97% of squamous-cell carcinomas on sun-damaged skin (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11802505/" rel="noopener nofollow" target="_blank">actinic keratosis to SCC review</a>). The hand is also a slow-healing, often-injured site where a keratosis that "will not heal" is easy to dismiss. The rules DermNet gives for a lentigo apply to every spot on this page: biopsy where there is diagnostic uncertainty or concern for malignancy, and where a lesion is variegated in colour, from each distinct area, because different pathologies can coexist in one spot (<a href="https://dermnetnz.org/topics/solar-lentigo" rel="noopener nofollow" target="_blank">DermNet</a>). Practically: a full-skin check before a course of spot treatments, and a dermatoscope, not a laser handpiece, as the first instrument on any spot that is new, growing, irregular, multicoloured, raised, rough or bleeding, or that stands out from the crowd around it. The <a href="/dark-spots">dark-spots guide</a> has the biopsy-first section in detail and the <a href="/sun-damage">sun-damage guide</a> the keratosis treatments.</p>
        `,
      },
      {
        id: 'safety-fillers',
        category: 'safety',
        title: 'Filler safety in the hand: the week of swelling, the lump, the hand that cannot make a fist, and the X-ray question',
        tldr: 'Expect a swollen, bruised, stiff hand for three to seven days — swelling 75% and bruising 60% in the hyaluronic acid diaries, mostly gone in four days; nodules or lumps in 6–13% with calcium hydroxylapatite; impaired hand function in 6.8% in the first week and none lasting in the trials that measured grip, dexterity and sensation for two years. The product goes into the structure-free top layer with a cannula, never near the tendons, veins or nerves of the middle and deep layers; hyaluronic acid can be dissolved and calcium hydroxylapatite cannot; and the radiopaque one shows on X-ray without hiding the bones.',
        focus: 'volume',
        bodyHtml: `
          <p>The trial diaries are the honest forecast. Hyaluronic acid, first week: swelling 75.0%, tenderness 75.0%, redness 71.6%, bruising 60.2%, pain 44.3%, itching 13.6%, impaired hand function 6.8%, the majority resolved within four days, related adverse events 7.9%, none serious (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6766356/" rel="noopener nofollow" target="_blank">hyaluronic acid hand trial</a>). Calcium hydroxylapatite, 113 treated: swelling 20.4%, bruising 18.6%, redness 8.0%, nodules or lumps 6.2% (<a href="https://clinicaltrials.gov/study/NCT01832090" rel="noopener nofollow" target="_blank">pivotal trial</a>); in the 256-person safety study with up to two syringes per hand, bruising 29–30%, swelling 21–25%, nodules 11–13%, erythema 6–15%, haematoma 1–5%, severe device-related events 1.5% in the worst hands and 0% in moderate ones, and no deterioration in range of motion, dexterity, filament sensation, grip or pinch strength at 24 months — the study existed to show that a filler near the tendons does not cost function (<a href="https://clinicaltrials.gov/study/NCT02904096" rel="noopener nofollow" target="_blank">hand safety study</a>). The anatomy behind the technique: the superficial lamina, under a millimetre from the skin, has no vessels, nerves or tendons, and every author places the volume there and nowhere deeper; the intermediate layer holds the veins and sensory nerves, the deep one the extensor tendons and the perforating vessels (<a href="https://pubmed.ncbi.nlm.nih.gov/20220561/" rel="noopener nofollow" target="_blank">anatomy study</a>, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10063163/" rel="noopener nofollow" target="_blank">hand rejuvenation review</a>). A blunt cannula from one or two entry points at the wrist, injection while withdrawing, then massage to spread the product between the tendons, is the standard. The two differences from the face: vascular occlusion, the serious filler harm on a face, is rare on the dorsal hand because the arteries are deep, but intravascular calcium hydroxylapatite cannot be dissolved, which is why the first-timer\'s filler is the hyaluronic acid; and a lump that persists past a fortnight is massaged, then dissolved if hyaluronic acid, then injected with a corticosteroid if not. Rings come off before the appointment and stay off for a week; the hand is elevated; and the person whose hands are their instrument — musician, surgeon, climber — books it for a fortnight off. The <a href="/fillers">filler guide</a> covers hyaluronidase and the emergency protocol.</p>
        `,
      },
      {
        id: 'safety-veins',
        category: 'safety',
        title: 'Before anyone strips a hand vein',
        tldr: 'The dorsal hand veins are where cannulas go: for an anaesthetic, a scan with contrast, a chemotherapy, a drip in a road accident, and a dialysis fistula later in life. Closing them for a smoother hand closes those options, matting replaces one vein with a blush of tiny ones in 14.5%, a fingertip has been lost to a sclerosant in the wrong vessel, and a filler placed over the veins hides them in a blinded trial without touching them. Try the padding first; keep the veins.',
        focus: 'veins',
        bodyHtml: `
          <p>The clinical case is short. Sclerotherapy of a dorsal hand vein requires higher concentrations than leg veins and "often results in a tender, phlebitic cord" (<a href="https://pubmed.ncbi.nlm.nih.gov/18090768/" rel="noopener nofollow" target="_blank">endovenous laser series</a>); the effective concentration produced adverse events in 90% and matting in 14.5% (<a href="https://pubmed.ncbi.nlm.nih.gov/10513934/" rel="noopener nofollow" target="_blank">100-patient series</a>); and the one catastrophic outcome — acute ischaemia of a finger after the sclerosant reached an artery — has been reported after elective cosmetic treatment of a dorsal hand vein (<a href="https://pubmed.ncbi.nlm.nih.gov/28410939/" rel="noopener nofollow" target="_blank">hand ischaemia case</a>). The non-clinical case is the longer one: these veins are the standard intravenous access of adult medicine, they are the first thing an anaesthetist looks for and the last thing a vascular surgeon wants sacrificed in anyone who may one day need dialysis, and a closed vein does not reopen. The alternative has a trial: hyaluronic acid filler placed in the intermetacarpal spaces cleared the veins from view on blinded photographs significantly better than collagen at six months without touching a vein (<a href="https://pubmed.ncbi.nlm.nih.gov/18430173/" rel="noopener nofollow" target="_blank">filler vein-clearance trial</a>), and the largest filler trials scored exactly that visibility as their endpoint. So the order is fixed: padding first; if the veins still dominate a hand with normal fat, a phlebologist who treats hands weekly, foam at the lowest effective concentration, one hand at a time, and a written note in your medical record that the dorsal veins of that hand have been closed.</p>
        `,
      },
      {
        id: 'safety-lasers',
        category: 'safety',
        title: 'Hands heal slowly: the resurfacing, cryotherapy and skin-of-colour limits',
        tldr: 'Dorsal hand skin has few follicles and oil glands to regrow from, so the fully ablative resurfacing that is routine on a face scars on a hand, every hand laser study is a conservative pilot, and medium and deep peels are not done here. Cryotherapy leaves pale spots that can be permanent, worst on tanned or darker skin; post-inflammatory darkening after any spot treatment rises with skin type and was "the major complication" of both cryotherapy and TCA in the hand trial; a test spot, no tan, a paused retinoid and a month of sunscreen are the rules.',
        focus: 'texture',
        bodyHtml: `
          <p>The tissue warning is in the hand laser literature itself: the dorsal hand\'s "inherent tissue properties" have made it "challenging to safely and effectively improve all three parameters of photoaging with a single device" (<a href="https://pubmed.ncbi.nlm.nih.gov/21276159/" rel="noopener nofollow" target="_blank">fractional CO2 hand pilot</a>), which is why the fractional studies used low densities, several sessions and one hand at a time, and why nobody publishes fully ablative CO2 on hands. The pigment risks are in the comparisons: post-inflammatory hyperpigmentation was "the major complication" of both cryotherapy and TCA, "particularly in darker Fitzpatrick skin types", and results were significantly better in fair skin (<a href="https://pubmed.ncbi.nlm.nih.gov/18021205/" rel="noopener nofollow" target="_blank">cryotherapy versus TCA trial</a>); across 41 trials cryotherapy "was linked to more severe side effects" and the lasers the fewest (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11948172/" rel="noopener nofollow" target="_blank">lentigo systematic review</a>); and every destructive method risks "pale or dark spots, which can be temporary or permanent" (<a href="https://dermnetnz.org/topics/solar-lentigo" rel="noopener nofollow" target="_blank">DermNet</a>). The rules that follow: a test spot on the wrist a fortnight before a full session in skin type IV and above; no treatment on a tan, and none within a month of the next holiday; a retinoid or lightener paused two weeks before a peel, freeze or laser and restarted once healed; broad-spectrum sunscreen for a month after, reapplied after every wash; and a clinician whose hand photographs you have seen. The <a href="/laser-ipl">laser and IPL guide</a> has the skin-type settings and the <a href="/dark-spots">dark-spots guide</a> the section on lasers in darker skin.</p>
        `,
      },
      {
        id: 'safety-steroids-biotin',
        category: 'safety',
        title: 'Two things that make hands look older or blood tests wrong: potent steroid creams and high-dose biotin',
        tldr: 'A potent corticosteroid cream used for months on an itchy old hand thins the dermis and turns fragile skin into the purpura it was meant to hide; the European guideline allows continuous topical steroid beyond six weeks only under medical supervision. High-dose biotin, sold for nails and hair at up to 100 mg a pill against a requirement of 0.03 mg, has no controlled trial and interferes with immunoassays: the FDA has warned twice that it can make troponin — the heart-attack test — read falsely low, with a death on record.',
        focus: 'general',
        bodyHtml: `
          <p>The steroid problem is invisible until it is permanent. Actinic purpura is worsened by topical and oral corticosteroids (<a href="https://dermnetnz.org/topics/senile-purpura" rel="noopener nofollow" target="_blank">DermNet</a>), the hand-eczema guideline recommends topical corticosteroids as first line but "continuous long-term treatment beyond six weeks only when necessary and under careful medical supervision" (<a href="https://pubmed.ncbi.nlm.nih.gov/34971008/" rel="noopener nofollow" target="_blank">ESCD guideline</a>), and the hand is the site where people self-medicate itch for years from a tube meant for a fortnight. If a hand needs a steroid for more than a few weeks, the diagnosis needs a doctor and the plan needs a steroid-sparing alternative; and no "brightening" cream from an unregulated source goes on a hand, since corticosteroids are among the undeclared ingredients found in them (see the <a href="/dark-spots">dark-spots guide</a>). The biotin problem is a laboratory one. The recommended daily intake is 0.03 mg; supplements for hair, skin and nails contain up to 100 mg; at those doses biotin in the blood interferes with the immunoassays that use it as a reagent, giving falsely high or falsely low results depending on the test, including a falsely low troponin — the FDA warned in November 2017, updated the warning in November 2019, and has received a report of a patient on high-dose biotin who died after a falsely normal troponin (<a href="https://www.fda.gov/medical-devices/in-vitro-diagnostics/biotin-interference-troponin-lab-tests-assays-subject-biotin-interference" rel="noopener nofollow" target="_blank">FDA on biotin interference</a>). Thyroid and hormone panels are affected too. If you take it for your nails — on the strength of an eight-patient microscopy study and a retrospective series (<a href="https://pubmed.ncbi.nlm.nih.gov/29057689/" rel="noopener nofollow" target="_blank">biotin evidence review</a>) — tell every doctor, stop it for several days before any blood test, and stop it altogether before an emergency department if there is time to say so.</p>
        `,
      },
    ],
  },
  {
    id: 'faq',
    title: 'Frequently asked questions',
    intro: 'The questions people ask about their hands, answered from the trials above.',
    sections: [
      {
        id: 'faq-why-hands-first',
        category: 'faq',
        title: 'Do hands really age faster than the face?',
        tldr: 'Thinner, less padded, and unprotected.',
        bodyHtml: `
          <p>They age the same way and show it sooner. The back of the hand has a thin dermis over three thin fat layers with the veins and tendons a few millimetres down (<a href="https://pubmed.ncbi.nlm.nih.gov/20220561/" rel="noopener nofollow" target="_blank">anatomy study</a>), so the 1%-a-year collagen loss (<a href="https://pubmed.ncbi.nlm.nih.gov/1220811/" rel="noopener nofollow" target="_blank">forearm biopsy study</a>) and the wasting of the superficial fat expose structure that a cheek keeps hidden for another decade; it gets the sun the face gets without the hat, the sunscreen or the winter, plus the car window; and it is washed ten times a day. Veins and age spots rose with every decade in 143 photographed volunteers (<a href="https://pubmed.ncbi.nlm.nih.gov/18262858/" rel="noopener nofollow" target="_blank">the ageing hand study</a>), and the fillers and light treatments graded above are the face\'s treatments applied to the site that needs them earlier.</p>
        `,
      },
      {
        id: 'faq-fillers-how-long',
        category: 'faq',
        title: 'How much filler does a hand take, and how long does it last?',
        tldr: 'About 1.5–2 mL per hand; 6–12 months.',
        bodyHtml: `
          <p>The trials used a mean 2.1 mL of hyaluronic acid per hand at the first session and 1.13 mL at the touch-up (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6766356/" rel="noopener nofollow" target="_blank">hyaluronic acid trial</a>), and up to 3 mL of calcium hydroxylapatite per hand in the safety study (<a href="https://clinicaltrials.gov/study/NCT02904096" rel="noopener nofollow" target="_blank">safety study</a>). Duration: hyaluronic acid held 76% of hands a grade better at six months against 30% untreated; calcium hydroxylapatite held 68% of subjects a grade better at 12 months without retreatment, the mean grade drifting from 1.3 at three months to 1.7 at twelve (<a href="https://clinicaltrials.gov/study/NCT01832090" rel="noopener nofollow" target="_blank">pivotal trial results</a>). Plan a top-up at six to twelve months, and expect the second round to need less.</p>
        `,
      },
      {
        id: 'faq-face-products',
        category: 'faq',
        title: 'Can I use my face retinoid and sunscreen on my hands?',
        tldr: 'Yes — nightly, and after every wash.',
        bodyHtml: `
          <p>The retinoid trials treated the face and the upper extremities with the same cream and found "similar" results (<a href="https://pubmed.ncbi.nlm.nih.gov/1729619/" rel="noopener nofollow" target="_blank">tretinoin trial</a>), and the sunscreen trial measured its 24% effect on the back of the hand (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Nambour trial</a>). The differences are practical: hand skin is drier, so moisturise first and start the retinoid on alternate nights; the hands are washed, so the sunscreen is reapplied after each wash and before driving; and the retinoid goes on the backs, not the palms. Whatever is left on the fingertips after the face is not enough — dose the hands deliberately.</p>
        `,
      },
      {
        id: 'faq-spots-danger',
        category: 'faq',
        title: 'Are age spots dangerous?',
        tldr: 'No — but a changing one gets checked.',
        bodyHtml: `
          <p>Solar lentigines are benign (<a href="https://dermnetnz.org/topics/solar-lentigo" rel="noopener nofollow" target="_blank">DermNet</a>), but a hand that has earned many of them has earned the actinic keratoses that come with them (odds ratio 1.8 in the Leiden study) (<a href="https://pubmed.ncbi.nlm.nih.gov/15140067/" rel="noopener nofollow" target="_blank">Leiden lentigo study</a>), and a lentigo maligna can sit among them looking like the rest. The rule is in the safety section: new, growing, irregular, multicoloured, raised, rough or bleeding means a dermatologist and, where there is doubt, a biopsy — before a laser, never after.</p>
        `,
      },
      {
        id: 'faq-veins-remove',
        category: 'faq',
        title: 'Should I have my hand veins removed?',
        tldr: 'Hide them first; keep the veins.',
        bodyHtml: `
          <p>A filler over the veins cleared them from view on blinded photographs (<a href="https://pubmed.ncbi.nlm.nih.gov/18430173/" rel="noopener nofollow" target="_blank">filler vein-clearance trial</a>) without closing the vessels every future cannula will need. Sclerotherapy and the endovenous laser work (95% with 3% polidocanol, all 28 laser patients satisfied) at the cost of a tender cord, matting in 14.5%, swelling for a fortnight and one published lost fingertip (<a href="https://pubmed.ncbi.nlm.nih.gov/10513934/" rel="noopener nofollow" target="_blank">sclerotherapy series</a>, <a href="https://pubmed.ncbi.nlm.nih.gov/28410939/" rel="noopener nofollow" target="_blank">ischaemia case</a>). Padding first, and the vein treatments only for a hand with normal fat, one hand at a time, from a phlebologist.</p>
        `,
      },
      {
        id: 'faq-laser-or-cryo',
        category: 'faq',
        title: 'Laser, cryotherapy or a peel for the spots?',
        tldr: 'Laser best; cryotherapy cheapest; peels for the mottling.',
        bodyHtml: `
          <p>Head to head on the backs of the hands, the Q-switched 532 nm laser lightened 89% of lentigines against 68% for liquid nitrogen, with 93% of patients preferring the laser and the least textural change (<a href="https://pubmed.ncbi.nlm.nih.gov/10890985/" rel="noopener nofollow" target="_blank">four-treatment hand trial</a>); cryotherapy beat 33% TCA but hurt more and healed slower (<a href="https://pubmed.ncbi.nlm.nih.gov/18021205/" rel="noopener nofollow" target="_blank">cryotherapy versus TCA</a>); a light TCA-glycolic peel series improved the overall look in a blinded split-hand trial without removing individual spots (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11042518/" rel="noopener nofollow" target="_blank">peel trial</a>). A few spots on a fair hand: cryotherapy from a dermatologist. Many, or darker skin, or a hand you care about: the laser. Mottling more than spots: IPL or a light peel. All of them after the retinoid has had four months.</p>
        `,
      },
      {
        id: 'faq-fat-or-filler',
        category: 'faq',
        title: 'Fat or filler for the volume?',
        tldr: 'Filler first; fat if you want it once.',
        bodyHtml: `
          <p>The fillers have randomised, blinded trials of over a hundred people, a result in the chair and, for hyaluronic acid, an antidote (<a href="https://pubmed.ncbi.nlm.nih.gov/28562435/" rel="noopener nofollow" target="_blank">calcium hydroxylapatite trial</a>, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6766356/" rel="noopener nofollow" target="_blank">hyaluronic acid trial</a>); they fade over six to twelve months. Fat is your own tissue, lasts in the fraction that survives, satisfied 97.6% of 320 patients, and loses an unpredictable half of its volume, so 12% of one surgeon\'s patients needed a second round, after two weeks of swollen hands (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9018121/" rel="noopener nofollow" target="_blank">fat transfer review</a>, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5610212/" rel="noopener nofollow" target="_blank">12-year series</a>). The sensible sequence is a hyaluronic acid trial run, then calcium hydroxylapatite for duration, then fat for the person who wants to stop paying yearly and accepts the odds.</p>
        `,
      },
      {
        id: 'faq-nails',
        category: 'faq',
        title: 'Biotin, collagen or a hardener for splitting nails?',
        tldr: 'Gloves and a moisturiser; the supplements are thin.',
        bodyHtml: `
          <p>Splitting nails are mostly wet-dry cycling and detergents, so the barrier routine — gloves for wet work, cream into the nail folds after every wash, shorter nails — is the treatment with a mechanism (<a href="https://pubmed.ncbi.nlm.nih.gov/34971008/" rel="noopener nofollow" target="_blank">ESCD guideline</a>). Biotin\'s evidence is an eight-patient microscopy study and a 63%-improved retrospective series, no placebo trial in thirty-five years, and an FDA warning about falsified heart-attack tests (<a href="https://pubmed.ncbi.nlm.nih.gov/29057689/" rel="noopener nofollow" target="_blank">biotin review</a>, <a href="https://www.fda.gov/medical-devices/in-vitro-diagnostics/biotin-interference-troponin-lab-tests-assays-subject-biotin-interference" rel="noopener nofollow" target="_blank">FDA warning</a>); collagen peptides have small trials covered in the <a href="/collagen">collagen guide</a>; formaldehyde hardeners make nails more brittle with time. A thick, yellow, crumbling nail is fungal until a clipping says otherwise.</p>
        `,
      },
      {
        id: 'faq-cost-ladder',
        category: 'faq',
        title: 'What does it all cost?',
        tldr: 'Free to €5,000.',
        bodyHtml: `
          <p>Typical European clinic list prices, which vary by city and clinic and should be confirmed in writing. <strong>Free to €30 a month:</strong> gloves, the rub instead of the soap, a urea cream by every sink and a sunscreen reapplied after each wash — the tier with the randomised trial on the back of the hand. <strong>€10–60 a month:</strong> a prescription retinoid and, where available, a lightener. <strong>€50–400 a session:</strong> cryotherapy from a dermatologist for a few spots, IPL or a Q-switched laser for many, a light peel series for the mottling. <strong>€800–1,800 for both hands:</strong> a hyaluronic acid or calcium hydroxylapatite filler, repeated at six to twelve months, or three sessions of a skin booster for crepe. <strong>€2,000–5,000:</strong> fat grafting, once — or twice. And the thing not to buy at any price: the vein removal that the safety section explains, and the €80 cream that promises what the filler does.</p>
        `,
      },
    ],
  },
];

export const focusLabels: Record<FocusArea, string> = {
  volume: 'Volume loss (veins & tendons)',
  spots: 'Age spots & pigment',
  texture: 'Crepe, thinning & bruising',
  veins: 'Prominent veins',
  nails: 'Nails',
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
