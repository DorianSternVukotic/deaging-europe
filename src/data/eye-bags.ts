/**
 * Under-eye bags & puffy eyes guide — single source of truth (problem template).
 *
 * Consumed by /eye-bags. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Editorial spine: a "bag" is one of three things — orbital fat that has pushed
 * forward, fluid that pooled overnight, or a hollow whose shadow reads as a bag —
 * and the tools do not cross over. Fluid answers to sleep, salt and time; fat
 * answers only to surgery; a hollow answers to filler in expert hands. The
 * lower lid is the most unforgiving place on the face to get that wrong.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'fat' | 'fluid' | 'hollow' | 'skin' | 'general';

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
  'An under-eye bag is fat, fluid or a shadow. Fat bulges more when you look up and is there at 2 p.m.; fluid is worst on waking and gone by lunch; a hollow reads as a bag because of the shadow it casts. Each has a different fix and the fixes do not cross over.',
  'Fluid answers to sleep, salt, alcohol, allergies and the pillow — and to time. Nothing sold in a tube treats it better than an extra hour of sleep and a cold compress, and hemorrhoid cream makes it worse.',
  'A hollow answers to hyaluronic-acid filler: 87% responders at three months in the first regulator-grade trial, at the price of swelling in a fifth of patients and the highest routine-complication rate of any filler zone.',
  'Herniated fat answers only to surgery. Transconjunctival lower blepharoplasty, with the fat repositioned rather than thrown away, has a 1% revision rate in a 200-patient series and lasts a decade or more. No cream, device or injection removes orbital fat.',
  'Sudden, one-sided, painful or red swelling, or puffiness with a change in your eyes\' shape, is a medical problem — thyroid, kidney or allergy — before it is a cosmetic one.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-fat',
    kind: 'Fat',
    title: 'Orbital fat pushing forward',
    blurb: 'The fat that cushions the eye sits behind a thin membrane that weakens with age — or was weak from birth — while the bony rim beneath it recedes. The fat herniates forward, and the bulge is there morning and evening.',
  },
  {
    id: 'type-fluid',
    kind: 'Fluid',
    title: 'Fluid pooled overnight',
    blurb: 'The loosest, thinnest skin on the body holds water like a sponge. Lying flat, salt, alcohol, allergies, crying and the week before a period all fill it; gravity and time drain it by midday.',
  },
  {
    id: 'type-hollow',
    kind: 'Shadow',
    title: 'A hollow that reads as a bag',
    blurb: 'As the cheek deflates and the tear-trough ligament holds the skin down, a groove forms under the eye. The shadow it casts makes the tissue above it look like a bag — and filler, not surgery, is its treatment.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'eye-anatomy',
    category: 'concept',
    title: 'What an eye bag actually is',
    tldr: 'Three fat pads behind a membrane (the septum), the thinnest skin on the body in front of it, a ligament that pins the skin down at the tear trough, and a bony rim that recedes with age.',
    bodyHtml: `
      <p>The lower eyelid is a half-millimetre of skin over a thin muscle over a membrane called the orbital septum, and behind the septum sit three pads of fat that cushion the eyeball. With age — and in some families from adolescence — the septum weakens and the fat pushes forward against it: that bulge is the classic bag. At the same time the bony rim of the orbit recedes downward and outward, stretching the septum and the ligaments attached to it and making the herniation worse (<a href="https://www.sciencedirect.com/science/article/abs/pii/S1090820X08000824" rel="noopener nofollow" target="_blank">Kahn &amp; Shaw 2008</a>; <a href="https://www.sciencedirect.com/science/article/abs/pii/S1748681517304953" rel="noopener nofollow" target="_blank">2017 study</a>). Below the bag, a ligament pins the skin to the rim at the tear trough, so as the cheek deflates a groove forms beneath the bulge, deepening its shadow.</p>
      <p>Because the skin here is so thin and loose, it also holds fluid more visibly than anywhere else on the face — which is why the same eye looks different at 7 a.m. and 2 p.m., and why sorting fluid from fat is the first job.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'Who gets bags, and how much is inherited',
    tldr: 'Heritability of sagging eyelids is about 61% in twin studies; age, male sex, lighter skin, higher BMI and smoking add to it; a night without sleep visibly swells the eyes of anyone.',
    bodyHtml: `
      <p>Bags run in families more than any other facial aging sign. In a study of Dutch twins, the heritability of sagging eyelids was estimated at 61%, with age, being male, lighter skin, a higher body-mass index and probably current smoking adding to the risk (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/1876055" rel="noopener nofollow" target="_blank">Jacobs 2014, JAMA Dermatology</a>). Among identical twins discordant for smoking, the smoking twin had worse lower-lid bags (<a href="https://pubmed.ncbi.nlm.nih.gov/23924651/" rel="noopener nofollow" target="_blank">twin study</a>). That is why some people have fat bags at 22 and others none at 60.</p>
      <p>Fluid is universal. When ten people were photographed after normal sleep and after 31 hours awake, raters saw more swollen eyes, more hanging eyelids, darker circles and redder eyes in the sleep-deprived faces — with swollen eyes and hanging lids among the largest effects (<a href="https://pubmed.ncbi.nlm.nih.gov/23997369/" rel="noopener nofollow" target="_blank">Sundelin 2013, Sleep</a>). The morning bag is a physiology everyone shares; the permanent one is a family trait plus time.</p>
    `,
  },
  {
    id: 'why-sort',
    category: 'concept',
    title: 'Why sorting fat from fluid from shadow matters',
    tldr: 'Fluid fixes do nothing for fat; filler into a fat bag makes it bigger; surgery on fluid removes nothing. The lower lid is the least forgiving place on the face to treat the wrong thing.',
    bodyHtml: `
      <p>The three causes look alike in a mirror at 8 a.m. and behave nothing alike. A fluid bag is gone by lunch and answers to sleep, salt and time. A fat bag is constant, bulges more when you look at the ceiling, and answers to nothing but surgery — a cream cannot reach it and filler placed over it adds volume to a bulge. A hollow is a shadow, and the "bag" above it is often normal tissue; filler in the groove removes the shadow, and surgery that removes the fat above it deepens it.</p>
      <p>Getting this wrong costs more here than anywhere else. The tear trough has the highest routine-complication rate of any filler zone, lower-lid surgery through the skin risks pulling the lid down, and both are hard to undo. Read the three tests before spending anything.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-fat',
    category: 'context',
    title: 'The fat bag (herniated orbital fat)',
    tldr: 'A soft bulge above the tear trough, present all day, bigger when you look up and when you press gently on the eyeball — hereditary in the young, structural in the old. Surgery only.',
    focus: 'fat',
    bodyHtml: `
      <p>Look at the ceiling in a mirror: a fat bag bulges further as the eye rotates and pushes the fat forward. It is there at every hour of the day, does not pit when pressed, and often has a groove (the tear trough) below it. In the young it is inherited — a lax septum and generous fat pads — and in everyone it worsens as the orbital rim recedes and the septum stretches (<a href="https://www.sciencedirect.com/science/article/abs/pii/S1748681517304953" rel="noopener nofollow" target="_blank">mechanism</a>). Fluid can sit on top of it and make mornings worse, which is where the confusion comes from.</p>
      <p>Nothing non-surgical removes orbital fat: not creams, not caffeine, not devices, and not fat-dissolving injections, which are unlicensed and dangerous this close to the eye. Filler can hide a small bag by filling the groove beneath it; a real bag is a lower blepharoplasty, ideally with the fat repositioned into the groove rather than removed.</p>
    `,
  },
  {
    id: 'type-fluid',
    category: 'context',
    title: 'The fluid bag (periorbital edema)',
    tldr: 'Worst on waking, better by midday, pits softly when pressed, and tracks salt, alcohol, allergies, crying, the menstrual cycle and sleep. Answers to time and habits — and, rarely, signals disease.',
    focus: 'fluid',
    bodyHtml: `
      <p>The loose lower-lid tissue fills with fluid whenever the body retains it or gravity delivers it: lying flat for eight hours, a salty or alcoholic evening, hay fever, a cry, the days before a period, a long flight. The signs are timing — bad at 7 a.m., improving by noon — and softness: gentle pressure leaves a brief dent. Allergies add itch, watering and the dark "allergic shiner" of congested veins under the eye (<a href="https://my.clevelandclinic.org/health/diseases/allergic-shiners" rel="noopener nofollow" target="_blank">Cleveland Clinic</a>).</p>
      <p>Persistent, symmetrical morning puffiness that no longer clears, or puffiness with a change in the shape of the eyes, belongs to a doctor before a clinic: nephritic and nephrotic kidney disease present as periorbital swelling worst on waking (<a href="https://www.ncbi.nlm.nih.gov/books/NBK562240/" rel="noopener nofollow" target="_blank">StatPearls</a>), thyroid eye disease as lid swelling, redness, grittiness and a staring look (<a href="https://www.thyroid.org/thyroid-eye-disease/" rel="noopener nofollow" target="_blank">American Thyroid Association</a>). The safety drawer lists the red flags.</p>
    `,
  },
  {
    id: 'type-hollow',
    category: 'context',
    title: 'The hollow (tear trough) that reads as a bag',
    tldr: 'A groove from the inner corner of the eye toward the cheek, whose shadow makes normal tissue above it look like a bag; disappears when lit from below or when the cheek is lifted. Filler territory.',
    focus: 'hollow',
    bodyHtml: `
      <p>Light a mirror from below, or gently lift the cheek with a finger: if the "bag" disappears, you never had one — you have a hollow. The tear-trough ligament holds the skin to the bony rim while the cheek fat above it deflates and descends, and the groove that results throws a shadow that the eye reads as a bulge above it. Thin skin over the groove adds a violet tint from the muscle beneath, which is why hollows and dark circles arrive together.</p>
      <p>This is the one type filler genuinely treats, because it is a volume problem: a soft hyaluronic-acid gel placed deep on the bone under the groove lifts the shadow. It is also the one type surgery can make worse if fat is removed above it without filling the hollow — which is why modern lower blepharoplasty moves the fat down into the trough rather than discarding it.</p>
    `,
  },
  {
    id: 'type-festoons',
    category: 'context',
    title: 'Festoons and malar mounds (the bag on the cheekbone)',
    tldr: 'Puffiness below the orbital rim on the upper cheek, chronic and worse in the morning — lax skin and muscle trapping fluid. The hardest problem on this page; filler makes it worse.',
    focus: 'fluid',
    bodyHtml: `
      <p>A festoon is a hammock of loose skin and orbicularis muscle draped over the cheekbone below the true eyelid, holding fluid that swings with salt, alcohol, sleep and allergies; a malar mound is its firmer, fattier cousin. They are lower than an eye bag, they persist for years, and they are made worse by anything that adds fluid or volume — filler placed nearby is a classic trigger, and hyaluronic-acid gel in the tear trough can produce malar edema in up to 11% of patients (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7583139/" rel="noopener nofollow" target="_blank">periocular filler review</a>). A 2019 systematic review of festoon management concludes that treatment must be individualised to whether the festoon is mostly fluid, fat or skin (<a href="https://pubmed.ncbi.nlm.nih.gov/31051517/" rel="noopener nofollow" target="_blank">systematic review</a>). The realistic options — tetracycline injections, resurfacing, direct excision, a midface lift — are graded below; none is easy, and the honest first step is an oculoplastic surgeon, not an injector.</p>
    `,
  },
  {
    id: 'type-dark-circles',
    category: 'context',
    title: 'Dark circles — pigment, vessels or shadow',
    tldr: 'Brown circles are pigment, blue-purple ones are vessels through thin skin, and grey ones are the shadow of a hollow; most are mixed. Stretch the skin: pigment stays, shadow and vessels change.',
    focus: 'skin',
    bodyHtml: `
      <p>Dark circles are classified into pigmented (brown, often familial, worse with sun and rubbing), vascular (blue-purple, thin skin over the muscle and veins, worse with fatigue and allergies), structural (the shadow of a hollow or a bag) and mixed types (<a href="https://pubmed.ncbi.nlm.nih.gov/23879616/" rel="noopener nofollow" target="_blank">classification</a>; <a href="https://jcadonline.com/periorbital-hyperpigmentation-a-comprehensive-review/" rel="noopener nofollow" target="_blank">review</a>). Stretch the skin gently: pigment stays put, a vascular tint changes and a shadow disappears. Tilt the head back under a light: a structural shadow vanishes.</p>
      <p>The treatments follow the type: sunscreen, retinoids, vitamin C and pigment lasers for brown; sleep, allergy control and sometimes vascular lasers or PRP for blue; filler for shadow. A 2025 systematic review of dark-circle treatments finds every category evidenced by small trials only (<a href="https://onlinelibrary.wiley.com/doi/full/10.1155/dth/9155535" rel="noopener nofollow" target="_blank">2025 review</a>). Our <a href="/laser-ipl">laser guide</a> covers the pigment devices.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'The three tests (look up, press, lift)',
    tldr: 'Look up: bulges more → fat. Press gently: dents and refills → fluid. Lift the cheek or light from below: disappears → hollow. Photograph at 7 a.m. and 5 p.m. before you believe anything.',
    bodyHtml: `
      <p>An oculoplastic surgeon sorts an eye bag in a minute with three moves you can copy.</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Look up.</strong> Tilt only your eyes to the ceiling. A bulge that grows is orbital fat pressing forward through the septum. Gentle pressure on the closed upper lid does the same.</li>
        <li><strong>Press.</strong> Press the swelling softly with a fingertip for five seconds. A soft dent that slowly refills is fluid; firm tissue that does not dent is fat or muscle.</li>
        <li><strong>Lift.</strong> Push the cheek gently upward, or light your face from below. A "bag" that vanishes was the shadow of a hollow.</li>
      </ul>
      <p>Then photograph the same eyes at 7 a.m. and 5 p.m. in the same light for a week. Fluid shows as a morning-only problem; fat and hollows do not change. Most faces have two of the three, and the order of treatment is always fluid first (it is free), then hollow, then fat.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-sleep-salt-alcohol',
    category: 'home',
    title: 'Sleep, salt, alcohol and an extra pillow',
    tldr: 'The one controlled study of sleep loss shows visibly swollen eyes and hanging lids after a night awake; salt, alcohol and lying flat fill the tissue by the same physiology. Free, and the whole treatment for the fluid type.',
    evidence: 'moderate',
    focus: 'fluid',
    note: 'Best for: morning puffiness that clears by midday — the fluid bag',
    sessions: 'Nightly',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Fluid under the eye is a plumbing problem: the tissue fills when the body holds water and when the head is level with the heart for hours, and drains once you are upright. In the only controlled study of its kind, faces photographed after 31 hours awake were rated as having more swollen eyes, more hanging eyelids and darker circles than the same faces after normal sleep, and the eye signs were among the largest effects (<a href="https://pubmed.ncbi.nlm.nih.gov/23997369/" rel="noopener nofollow" target="_blank">Sundelin 2013</a>). A 60-woman study found poor sleepers had more signs of intrinsic aging and slower barrier recovery (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/ced.12455" rel="noopener nofollow" target="_blank">Oyetakin-White 2015</a>). Salt and alcohol retain water and dilate vessels; there is no trial of a low-salt evening on eye bags, and there does not need to be.</p>
      <p>The protocol is dull and works: seven to eight hours, the head raised on a second pillow (or the bed head lifted), a salty or alcoholic dinner treated as a known cost, and water rather than a diuretic. If the morning bag is gone by noon, this is the treatment; if it is not, it was never fluid.</p>
    `,
  },
  {
    id: 'home-allergy',
    category: 'home',
    title: 'Treating the allergy (antihistamines, rinses, not rubbing)',
    tldr: 'Allergic rhinitis congests the veins under the eye and swells the lids; a non-sedating antihistamine, a saline rinse and not rubbing resolve the "allergic shiner" within days. Standard medicine, not cosmetics.',
    evidence: 'moderate',
    focus: 'fluid',
    note: 'Best for: seasonal or pet-related puffiness with itch, watering and dark circles',
    sessions: 'Daily in season',
    downtime: 'None',
    cost: '€5–15 / month',
    bodyHtml: `
      <p>When the nasal lining swells with hay fever or a dust or pet allergy, the veins that drain the lower lid back up, producing a dark, puffy under-eye — the allergic shiner — often with itching, watering and a crease under the eye from rubbing (<a href="https://my.clevelandclinic.org/health/diseases/allergic-shiners" rel="noopener nofollow" target="_blank">Cleveland Clinic</a>). The treatment is the allergy's: a non-sedating antihistamine (cetirizine, loratadine, fexofenadine), a steroid nasal spray in season, saline rinses, and the hard part, not rubbing, which thickens and darkens the skin over years. Eyelid eczema and contact allergy to a mascara or cream do the same and answer to stopping the product. Cosmetic treatment of a puffy eye whose cause is an untreated allergy is money spent on the wrong organ.</p>
    `,
  },
  {
    id: 'home-cold',
    category: 'home',
    title: 'Cold compresses, cooled spoons and rollers',
    tldr: 'Cold constricts vessels and firms tissue for an hour or two; reviews of edema management find ice unproven but universally used. The fastest morning fix, with no lasting effect.',
    evidence: 'emerging',
    focus: 'fluid',
    sessions: '5–10 minutes when needed',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Cold narrows blood vessels and slows fluid leaking into tissue, so a cold compress, a chilled spoon or a roller from the fridge visibly reduces a fluid bag for an hour or two. A review of edema management in aesthetic practice notes that ice has not been proven to reduce swelling in trials yet is recommended by most practitioners for exactly this purpose (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5300735/" rel="noopener nofollow" target="_blank">JCAD review</a>). Tea bags add caffeine and tannins to the cold; cucumber adds water. Use it for the morning of the wedding; expect nothing tomorrow.</p>
    `,
  },
  {
    id: 'home-caffeine',
    category: 'home',
    title: 'Caffeine eye creams and patches',
    tldr: 'Small, mostly manufacturer studies: a 3% caffeine gel cut measured under-eye fluid by about 17% versus placebo over four weeks, and combination eye creams improved rated puffiness. Hours of effect on fluid, none on fat.',
    evidence: 'emerging',
    focus: 'fluid',
    sessions: 'Morning',
    downtime: 'None',
    cost: '€15–60',
    bodyHtml: `
      <p>Caffeine constricts vessels and pulls water out of tissue when it gets through the skin, which under the eye it partly does. A four-week placebo-controlled study of a 3% caffeine gel measured about a 17% reduction in under-eye fluid and a small elasticity gain; an eye cream with caffeine, a xyloside and blueberry extract improved rated dark circles and puffiness over 12 weeks in a manufacturer trial (<a href="https://www.jaad.org/article/S0190-9622(09)01597-7/pdf" rel="noopener nofollow" target="_blank">JAAD, 2009</a>); a 2024 "multicorrective" eye cream did the same without a control group (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.16122" rel="noopener nofollow" target="_blank">2024 study</a>); a 2025 study of a dark-circle formulation reported objective improvement (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12235579/" rel="noopener nofollow" target="_blank">2025 study</a>). Real, small, temporary, and confined to the fluid type. A caffeine product on a fat bag does nothing at any price.</p>
    `,
  },
  {
    id: 'home-retinoid',
    category: 'home',
    title: 'A retinoid on the lower lid (carefully)',
    tldr: 'Tretinoin thickens thin under-eye skin and reduces fine lines and crepe in the randomised trials; a retinoid eye cream improved rated puffiness in an uncontrolled 12-week study. Skin quality, not the bag.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: crepey, thin, lined lower-lid skin over any type of bag',
    sessions: '2–3 nights a week, then nightly',
    downtime: 'Weeks of dryness if overdone',
    cost: '€10–40 / month',
    bodyHtml: `
      <p>Thin, crepey lower-lid skin exaggerates every bag, and the one topical that thickens it is a retinoid: the randomised tretinoin trials and their meta-analysis show more dermal collagen, fewer fine wrinkles and better texture over six to twelve months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/" rel="noopener nofollow" target="_blank">meta-analysis</a>). A retinoid eye cream improved rated lines by 33% and puffiness by 55% at 12 weeks in an uncontrolled study — read the puffiness number as skin firming, not fat loss (<a href="https://pubmed.ncbi.nlm.nih.gov/36074511/" rel="noopener nofollow" target="_blank">JDD, 2022</a>). Apply a pea-sized amount to the orbital bone, not the lid margin, two or three nights a week at first; the lower lid irritates faster than any other skin. Our <a href="/wrinkles">wrinkles guide</a> covers the retinoid ladder.</p>
    `,
  },
  {
    id: 'home-spf-sunglasses',
    category: 'home',
    title: 'Sunscreen and sunglasses',
    tldr: 'Daily sunscreen cut measured skin aging by 24% in the one randomised prevention trial; the lower lid is where people skip it. Sunglasses stop the squint and the sun. Prevention for skin and pigment, not for fat.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: 'Every morning',
    downtime: 'None',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>The thin lower-lid skin photoages fastest and is where most people stop their sunscreen. The Nambour trial's 24% reduction in measured skin aging with daily use applies here as everywhere (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>), and pigmented dark circles darken with every unprotected summer. Sunglasses with UV-blocking lenses protect the skin and stop the squinting that etches crow's feet. A mineral sunscreen stings less near the eye. None of this shrinks a bag; all of it decides how the skin over one looks at 55.</p>
    `,
  },
  {
    id: 'home-eye-creams',
    category: 'home',
    title: 'Peptide and "de-puffing" eye creams',
    tldr: 'No trial shows an eye cream outperforming the same actives from a face routine; the de-puffing claims rest on caffeine and hydration, and a 2024 review of eye-cream ingredients finds mostly small, sponsored studies.',
    evidence: 'limited',
    focus: 'skin',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€30–200',
    bodyHtml: `
      <p>An eye cream is a face cream in a smaller jar, and the evidence for "eye" formulations specifically is thin: a 2024 review of popular eye-cream ingredients finds retinoids, vitamin C, niacinamide and caffeine supported by small studies, mostly manufacturer-run, and peptides and "de-puffing" complexes supported by almost nothing (<a href="https://journals.lww.com/ijwd/fulltext/2024/06000/a_review_of_the_efficacy_of_popular_eye_cream.21.aspx" rel="noopener nofollow" target="_blank">IJWD, 2024</a>). The instant "de-puffing" is caffeine and hydration — see those rows. The one study that looked at eye appearance and habits found dark circles tracked with poor sleep (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/ced.12455" rel="noopener nofollow" target="_blank">60-woman study</a>). Spend on a retinoid, sunscreen and sleep; keep the €150 cream for the pleasure of it. Our <a href="/anti-aging-30s">30s guide</a> covers the eye-cream question in full.</p>
    `,
  },
  {
    id: 'home-massage',
    category: 'home',
    title: 'Lymphatic massage, jade rollers and gua sha',
    tldr: 'De-puffs a fluid bag for an hour or two by moving fluid; no periorbital trials exist, and rubbing the thinnest skin on the face darkens it over years.',
    evidence: 'limited',
    focus: 'fluid',
    sessions: 'Mornings',
    downtime: 'None',
    cost: '€10–40',
    bodyHtml: `
      <p>Gentle outward strokes from the inner corner along the orbital rim move pooled fluid toward the lymph nodes in front of the ear, and a cold roller does the same with vasoconstriction thrown in. The effect on a fluid bag is real for an hour or two and there is no trial of it around the eye; the general facial-massage trials measure millimetres of temporary contour change. The hazard is friction: rubbing the lower lid, whether with a roller or a knuckle, is a documented route to pigmented dark circles and thickened skin. Feather-light, cold, outward, and never on a fat bag, which it cannot move.</p>
    `,
  },
  {
    id: 'home-hemorrhoid',
    category: 'home',
    title: 'Hemorrhoid cream (the myth)',
    tldr: 'Phenylephrine constricts vessels for an hour then rebounds; the hydrocortisone in many formulas thins eyelid skin; no study supports it. Dermatologists say no.',
    evidence: 'limited',
    focus: 'fluid',
    sessions: 'Do not',
    downtime: 'Rebound swelling; steroid thinning',
    cost: '€5',
    bodyHtml: `
      <p>The backstage trick works for the same reason and the same hour as a cold spoon: phenylephrine constricts vessels, and when it wears off they dilate past baseline, so the puffiness returns worse. Many formulations also contain hydrocortisone, which on the thinnest skin of the body causes thinning, visible vessels and, absorbed through it, cortisol effects; the mineral-oil base clogs the lid glands. No study supports the practice and dermatologists advise against it (<a href="https://www.goodrx.com/health-topic/dermatology/hemorrhoid-cream-eyes" rel="noopener nofollow" target="_blank">GoodRx review</a>). Cold and caffeine do the same job without the rebound.</p>
    `,
  },
];

const inj: Section[] = [
  {
    id: 'inj-tear-trough',
    category: 'inj',
    title: 'Hyaluronic-acid filler for the tear trough',
    tldr: 'The first regulator-grade trial: 87% of patients were responders at 3 months and 64% at 12; the meta-analysis of 31 studies puts satisfaction at 91% — and swelling at 19%, bruising at 18%, lumps at 5%. Expert-only.',
    evidence: 'strong',
    focus: 'hollow',
    note: 'Best for: the hollow whose shadow reads as a bag — thin skin, a groove, and no real fat bulge',
    sessions: 'Every 12–18 months',
    downtime: '3–7 days of swelling; bruising common',
    cost: '€400–800',
    bodyHtml: `
      <p>Filler treats the hollow, and for the hollow it now has the evidence: in a randomised, evaluator-blinded, no-treatment-controlled multicentre trial of a soft hyaluronic-acid gel made for the under-eye, 87.4% of treated patients were responders at three months, 63.5% at twelve, and 80.3% after a single retreatment at eighteen — the basis of the first approval specifically for infraorbital hollows (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11334209/" rel="noopener nofollow" target="_blank">pivotal trial</a>). A meta-analysis of 31 studies in 2,556 patients found a pooled satisfaction rate of 91% (<a href="https://pubmed.ncbi.nlm.nih.gov/37684413/" rel="noopener nofollow" target="_blank">2023 meta-analysis</a>).</p>
      <p>The same meta-analysis is the safety warning: swelling in 19.2%, bruising in 18.4%, contour lumps in 5.3%, and the blue-grey Tyndall tint in about 1%; malar edema — persistent puffiness on the cheekbone — follows in up to 11% in periocular reviews and can appear years later (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7583139/" rel="noopener nofollow" target="_blank">periocular filler review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/34666405/" rel="noopener nofollow" target="_blank">delayed complications</a>). Gel placed over a real fat bag makes the bag bigger. This is a procedure for an injector who does eyes weekly, with a soft low-water gel, a cannula, deep placement on bone, tiny volumes, and hyaluronidase in the room. Our <a href="/fillers">filler guide</a> covers the zone in detail.</p>
    `,
  },
  {
    id: 'inj-hyaluronidase',
    category: 'inj',
    title: 'Dissolving old or misplaced filler (hyaluronidase)',
    tldr: 'The under-eye is where filler most often needs undoing — puffiness, lumps, a blue tint, filler that migrated or never left. One injection resolved eyelid edema in a 20-patient series; it also removes the good filler.',
    evidence: 'moderate',
    focus: 'fluid',
    note: 'Best for: puffiness or lumps that appeared after filler — sometimes years after',
    sessions: '1–3',
    downtime: '1–2 days of swelling',
    cost: '€150–400',
    bodyHtml: `
      <p>Hyaluronic-acid gel under the eye persists for years and attracts water, which is why a proportion of "eye bags" in clinics are old filler. Hyaluronidase dissolves it: in a series of 20 patients with eyelid edema, a single injection resolved the swelling effectively and rapidly with no relevant adverse effects (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4063423/" rel="noopener nofollow" target="_blank">20-patient series</a>), and reviews set out doses and the fact that denser gels need more, and repeated, treatment (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11733830/" rel="noopener nofollow" target="_blank">review</a>). It dissolves the filler you liked along with the filler you did not, and a small number of people react to the enzyme, so it is a reset rather than a fine adjustment. If your bags began after an aesthetic treatment, this drawer is the first question to ask.</p>
    `,
  },
  {
    id: 'inj-toxin-lower-lid',
    category: 'inj',
    title: 'Botulinum toxin to the lower lid ("jelly roll")',
    tldr: 'Two units soften the muscle roll under the lashes and widen the eye; in the dose-finding study every patient at 8 units got lower-lid edema and a weak blink. A treatment that can create the bag it was meant to hide.',
    evidence: 'emerging',
    focus: 'fluid',
    sessions: 'Every 3–4 months',
    downtime: 'None; risk of a puffy, lax lid for months',
    cost: '€100–200',
    bodyHtml: `
      <p>The "jelly roll" is the pretarsal orbicularis muscle bunching under the lashes when you smile, and a tiny dose of toxin — one to two units — flattens it and widens the eye, as the original study showed (<a href="https://www.semanticscholar.org/paper/Botulinum%E2%80%90A-Toxin-Treatment-of-the-Lower-Eyelid-and-Flynn-Carruthers/c6e8f1bc4bcbcda6a4fdcbd20be1f8f5b68f660a" rel="noopener nofollow" target="_blank">Flynn &amp; Carruthers</a>). The same muscle pumps lymph out of the lower lid and holds the lid against the eye, and the dose-finding study found that at 8 units every subject developed bothersome lower-lid edema and incomplete closure (<a href="https://pubmed.ncbi.nlm.nih.gov/12930337/" rel="noopener nofollow" target="_blank">dose-finding study</a>). Over-treatment produces exactly the puffy, slack lower lid people came in to fix, and it lasts until the toxin wears off. Useful in a very light hand for a muscle roll in a young face; contraindicated for a bag of fat or fluid, which it worsens.</p>
    `,
  },
  {
    id: 'inj-tetracycline',
    category: 'inj',
    title: 'Tetracycline or doxycycline injections for festoons',
    tldr: 'Sclerotherapy of the fluid pockets: about a 50% success rate in the published series, painful for 20 minutes, sometimes combined with a skin pinch and canthopexy for severe festoons.',
    evidence: 'emerging',
    focus: 'fluid',
    note: 'Best for: fluid-dominant festoons before, or instead of, surgery',
    sessions: '1–3, 6–8 weeks apart',
    downtime: 'Swelling for 1–2 weeks',
    cost: '€300–600 / session',
    bodyHtml: `
      <p>Injecting dilute tetracycline or doxycycline into a festoon inflames and scars its fluid pockets shut, the same principle as sclerosing a vein. It is a niche tool for edema-dominant festoons with roughly a 50% success rate in the published experience, uncomfortable for 10–20 minutes, and repeated once or twice (<a href="https://consultqd.clevelandclinic.org/how-to-improve-the-appearance-of-festoons-malar-mounds" rel="noopener nofollow" target="_blank">Cleveland Clinic</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/31051517/" rel="noopener nofollow" target="_blank">2019 systematic review</a>). For severe festoons, one surgical group combines serial tetracycline injections with a pinch excision of skin and a canthopexy to support the lid (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8830314/" rel="noopener nofollow" target="_blank">preliminary series</a>). Off-label, oculoplastic-surgeon territory, and the least invasive thing that has ever changed a festoon.</p>
    `,
  },
  {
    id: 'inj-prp',
    category: 'inj',
    title: 'PRP for dark circles and lower-lid skin',
    tldr: 'A blinded randomised comparison found PRP, stromal vascular fraction and a pigment laser all improved dark circles after nanofat; a single session gave fair-to-good improvement in 80%. Small trials, no placebo, nothing for bags.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '3, a month apart',
    downtime: '1–3 days of bruising',
    cost: '€250–500 / session',
    bodyHtml: `
      <p>Platelet-rich plasma injected or needled into the lower lid delivers growth factors that thicken thin skin and, in the vascular and pigmented dark-circle types, reduce the tint. In a controlled, blinded randomised trial, PRP, stromal vascular fraction and a Q-switched Nd:YAG laser each improved dark circles and wrinkles after nanofat grafting (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11187812/" rel="noopener nofollow" target="_blank">randomised trial</a>), and a single-session study reported fair-to-good improvement in 80% at three months with about a 47% fall in measured melanin (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12587466/" rel="noopener nofollow" target="_blank">study</a>). No trial compares it with placebo, and it does nothing for fat or fluid. A reasonable add-on for thin, dark lower-lid skin; the <a href="/regenerative-aesthetics">regenerative guide</a> covers the systems.</p>
    `,
  },
  {
    id: 'inj-fat-grafting',
    category: 'inj',
    title: 'Fat and nanofat grafting to the tear trough',
    tldr: 'Your own fat, injected under the hollow or spread as nanofat over thin skin: a randomised comparison favoured segmental fat grafting over fat repositioning, and combined series in the young report high satisfaction. Surgeon-only, lumps possible, permanent.',
    evidence: 'emerging',
    focus: 'hollow',
    sessions: 'Once, often with blepharoplasty',
    downtime: '1–2 weeks of swelling',
    cost: '€2,000–4,000 alone',
    bodyHtml: `
      <p>Fat harvested from the abdomen and placed in the tear trough restores volume permanently — and in a comparison of lower blepharoplasty with fat repositioning against onlay segmental fat grafting, grafting produced the better long-term result, confirmed in patients who had one technique on each eye (<a href="https://pubmed.ncbi.nlm.nih.gov/33595637/" rel="noopener nofollow" target="_blank">ASJ, 2021</a>). Nanofat, an emulsified version, is injected superficially to thicken and brighten thin lower-lid skin, and a series combining it with transconjunctival blepharoplasty in young patients with bags and hollows reports high satisfaction (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11755396/" rel="noopener nofollow" target="_blank">series</a>). Lumps and irregularities under thin skin are the risk, retention is unpredictable, and it cannot be dissolved — which is why it is a surgeon's tool, usually combined with removing or moving the fat above.</p>
    `,
  },
  {
    id: 'inj-deoxycholic',
    category: 'inj',
    title: 'Fat-dissolving injections under the eye',
    tldr: 'Deoxycholic acid is licensed for the fat under the chin, not the fat behind the eye; an eye bag is orbital fat inside the septum, and dissolving agents this close to the eye risk the muscle, the skin and the globe. Do not.',
    evidence: 'limited',
    focus: 'fat',
    sessions: 'Do not',
    downtime: 'Necrosis, nerve and eye injury reported off-label',
    cost: 'Not applicable',
    bodyHtml: `
      <p>Deoxycholic acid destroys any cell membrane it touches; it is authorised for subcutaneous fat under the chin (<a href="https://www.ema.europa.eu/en/documents/psusa/deoxycholic-acid-list-nationally-authorised-medicinal-products-psusa00010525202104_en.pdf" rel="noopener nofollow" target="_blank">EU authorisation</a>) and for nothing near the eye. An eye bag is not subcutaneous fat: it is orbital fat behind a membrane, next to the muscle that closes the eye and a millimetre of skin, and an injection that reached it would also reach those. Clinics offering "fat-dissolving" for eye bags are offering an unlicensed injection in the most dangerous place on the face. The treatment for orbital fat is surgery, which removes or moves it under direct vision.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'surg-lower-bleph',
    category: 'clinic',
    title: 'Lower blepharoplasty (transconjunctival, fat repositioned)',
    tldr: 'The only treatment that removes orbital fat: a 200-patient prospective series with 1% revision and 3% fat necrosis; FACE-Q scores improve dramatically; done from inside the lid, no scar and a fraction of the lid-malposition risk.',
    evidence: 'strong',
    focus: 'fat',
    note: 'Best for: a fat bag present all day — hereditary at 25 or structural at 55',
    sessions: 'Once',
    downtime: '7–14 days of bruising; final at 3 months',
    cost: '€3,000–6,500',
    bodyHtml: `
      <p>Through an incision inside the lower lid, the surgeon opens the septum and either trims the herniated fat or, increasingly, slides it downward over the orbital rim into the tear trough, fixing it there so the bag becomes the filling for the hollow beneath it. A prospective series of 200 consecutive extended transconjunctival blepharoplasties reports high satisfaction, fat necrosis in 3% and a revision rate of 1% for residual bulges at a mean 22 months (<a href="https://pubmed.ncbi.nlm.nih.gov/41150997/" rel="noopener nofollow" target="_blank">200-case series</a>); FACE-Q lower-eyelid scores fell from 66.7 to 21.9 (lower is better) in a cohort of refined fat trimming (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12558292/" rel="noopener nofollow" target="_blank">cohort</a>); fat fixation techniques correct bag and trough together (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12550871/" rel="noopener nofollow" target="_blank">2025 series</a>). Removed fat does not grow back; the result lasts a decade or more, and the ageing that follows is the skin's.</p>
      <p>The approach matters: the transconjunctival route preserves the septum and the muscle's nerve supply, whereas the through-the-skin (transcutaneous) route carries a lid-malposition risk — a pulled-down lid or scleral show — reported in up to a fifth of cases in older series (<a href="https://www.ncbi.nlm.nih.gov/books/NBK557659/" rel="noopener nofollow" target="_blank">StatPearls</a>). Removing fat without addressing the hollow hollows the eye, which is why repositioning replaced excision. An oculoplastic or facial plastic surgeon who does lower lids weekly, a discussion of where the fat will go, and a plan for the skin (pinch or laser) are the three things to insist on.</p>
    `,
  },
  {
    id: 'surg-skin-pinch-canthopexy',
    category: 'clinic',
    title: 'Skin pinch and canthopexy for lax lower-lid skin',
    tldr: 'A thin strip of excess skin removed under the lashes, with the outer corner of the lid tightened to stop it sagging: the standard add-on when skin, not just fat, is the problem, and the protection against a pulled-down lid.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: 'Once, usually with blepharoplasty',
    downtime: '1–2 weeks',
    cost: '€1,500–3,000 alone',
    bodyHtml: `
      <p>When the lower-lid skin is loose as well as the fat prominent, a "pinch" excision removes a millimetres-wide strip just under the lashes, leaving a scar in the lash line; when the lid itself is lax — it does not snap back when pulled — a canthopexy tightens its outer attachment so the tightened skin does not drag the lid down. Transcanthal canthopexy corrected horizontal laxity with no recurrence across follow-up in one series (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10878753/" rel="noopener nofollow" target="_blank">series</a>), and the extended techniques that treat festoons excise up to 16 mm of skin safely only because the lid is suspended (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8830314/" rel="noopener nofollow" target="_blank">technique series</a>). This is the part of lower-lid surgery that decides whether the eye looks rested or pulled; it is why a snap test is part of every honest consultation.</p>
    `,
  },
  {
    id: 'surg-festoon',
    category: 'clinic',
    title: 'Festoon surgery (direct excision, midface lift)',
    tldr: 'For skin- and muscle-dominant festoons: direct excision or an extended lift with the cheek re-suspended; a 2023 outcomes study reports significant improvement, with scars and swelling as the price. The definitive answer to the hardest problem here.',
    evidence: 'moderate',
    focus: 'fluid',
    sessions: 'Once',
    downtime: '2–3 weeks; scar matures over months',
    cost: '€4,000–8,000',
    bodyHtml: `
      <p>When a festoon is mostly redundant skin and muscle rather than fluid, injections and lasers reach their limit and surgery takes over: direct excision of the festoon (a scar along a cheek crease, which fades but exists) or an extended lower blepharoplasty and midface lift that releases the retaining ligament and re-suspends the cheek to the canthal bone. A 2023 outcomes study of surgical festoon treatment reports significant aesthetic improvement with a multifactorial approach (<a href="https://pubmed.ncbi.nlm.nih.gov/37256298/" rel="noopener nofollow" target="_blank">2023 study</a>); the systematic review sets out how the choice follows the festoon's content (<a href="https://pubmed.ncbi.nlm.nih.gov/31051517/" rel="noopener nofollow" target="_blank">2019 review</a>). Prolonged swelling — festoons are edema machines — is the expected recovery, and this is a surgeon who treats festoons specifically, not a general blepharoplasty.</p>
    `,
  },
  {
    id: 'dev-co2',
    category: 'clinic',
    title: 'Fractional CO₂ or erbium resurfacing of the lower lid',
    tldr: 'Tightens crepey lower-lid skin and softens fine lines; after transconjunctival surgery it is the standard way to deal with the skin without cutting it. Nothing for fat or fluid.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: crepey, lined lower-lid skin — alone, or with fat surgery done from inside',
    sessions: '1–2',
    downtime: '5–7 days raw; pink for weeks',
    cost: '€600–1,500',
    bodyHtml: `
      <p>Ablative fractional lasers rebuild the thin dermis of the lower lid and contract the skin a little, which is why surgeons pair them with transconjunctival fat surgery instead of cutting skin: a retrospective series of CO₂ laser lower blepharoplasty with fractional CO₂ or non-ablative resurfacing describes the combination as safe and reliable for bags with residual crepe (<a href="https://www.oaepublish.com/articles/2347-9264.2021.17" rel="noopener nofollow" target="_blank">2021 series</a>), and a review of laser and light treatments for the lower lid sets out the options by depth (<a href="https://www.sciencedirect.com/science/article/pii/S2096691121001059" rel="noopener nofollow" target="_blank">review</a>). Alone, it improves texture, fine lines and mild laxity; it does not reach fat, fluid or a hollow, and it risks pigment change in darker skin. Our <a href="/laser-ipl">laser guide</a> covers the settings and the aftercare.</p>
    `,
  },
  {
    id: 'dev-thermage-eyes',
    category: 'clinic',
    title: 'Monopolar radiofrequency for the eyelids',
    tldr: 'Small studies report most patients seeing more than 50% eyelid tightening by six months; a 2025 series and newer small tips extend it; no controlled trial, and nothing for a bag of fat.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '1, yearly',
    downtime: 'None',
    cost: '€800–2,000',
    bodyHtml: `
      <p>Monopolar radiofrequency with a small eyelid tip heats the lid dermis under a protective corneal shield to contract it. In the early eyelid evaluation, 73% of patients reported more than 50% improvement in eyelid tightening at two months and 86% at six (<a href="https://clinician.nejm.org/thermage-eyelid-tightening-JD200701260000004" rel="noopener nofollow" target="_blank">clinician summary</a>); a 2025 series describes eyelid tightening in Asian patients (<a href="https://link.springer.com/article/10.1007/s10103-025-04788-y" rel="noopener nofollow" target="_blank">2025 series</a>), and newer dual-frequency small tips are being introduced for periorbital tightening (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12788910/" rel="noopener nofollow" target="_blank">2025 study</a>). Self-reported improvement without a control group, modest in scale, for mild skin laxity — and the same warning as every device: it tightens skin, and a bag is not skin.</p>
    `,
  },
  {
    id: 'dev-rf-microneedling',
    category: 'clinic',
    title: 'Radiofrequency microneedling around the eye',
    tldr: 'Prospective studies report about a quarter less infraorbital wrinkling and better elasticity after three sessions; no controlled comparison, a small risk of fat loss, and no effect on the bag itself.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '3, 4–8 weeks apart',
    downtime: '2–4 days',
    cost: '€400–800 / session',
    bodyHtml: `
      <p>Insulated needles deliver radiofrequency heat into the thin periorbital dermis. A 2026 prospective study of periorbital treatment measured mean wrinkle reductions of about 25% under the eye and 37% at the crow's feet six months after one to three sessions (<a href="https://www.tandfonline.com/doi/full/10.1080/14764172.2026.2680304" rel="noopener nofollow" target="_blank">2026 study</a>); a dual-depth device improved wrinkle scores and elasticity over 24 weeks in 32 adults (<a href="https://link.springer.com/article/10.1007/s10103-026-04942-0" rel="noopener nofollow" target="_blank">2026 series</a>); an earlier nonrandomised trial found similar periorbital gains (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11626310/" rel="noopener nofollow" target="_blank">2024 trial</a>). All are uncontrolled, all measure skin rather than bags, and the class carries a documented risk of fat loss with aggressive settings — unwelcome next to a hollow. Conservative depths for crepe; nothing for fat or fluid.</p>
    `,
  },
  {
    id: 'dev-ultherapy-brow',
    category: 'clinic',
    title: 'Microfocused ultrasound around the eye',
    tldr: 'Cleared for a brow lift of roughly half a millimetre to 1.7 mm in the reviews; on the lower lid it is neither cleared nor useful for a bag.',
    evidence: 'limited',
    focus: 'skin',
    sessions: '1',
    downtime: 'None; sore',
    cost: '€800–1,500 for the periorbital area',
    bodyHtml: `
      <p>Microfocused ultrasound earned its first clearance for lifting the brow, and the systematic reviews measure that lift at about 0.47 to 1.7 mm (<a href="https://www.mdpi.com/1660-4601/20/2/1522" rel="noopener nofollow" target="_blank">systematic review</a>) — real, small, and about the upper eye. For the lower lid it has no clearance and no mechanism: the bag is fat behind a membrane, not lax dermis, and heating the thin tissue around the eye risks the fat that is supposed to stay. Sold for "eye rejuvenation" as part of a full-face treatment; graded here for what it does to a bag, which is nothing.</p>
    `,
  },
  {
    id: 'dev-plasma-pen',
    category: 'clinic',
    title: 'Plasma "fibroblast" pens',
    tldr: 'Arc burns that shrink eyelid skin a little, marketed as a non-surgical blepharoplasty; small uncontrolled series, unregulated devices, a case of bilateral chemical eye injury, and pigment scars.',
    evidence: 'limited',
    focus: 'skin',
    sessions: '1–3',
    downtime: '7–10 days of carbon crusts',
    cost: '€300–800',
    bodyHtml: `
      <p>A plasma pen ionises the air at its tip and creates a grid of tiny burns that contract as they heal, and for upper-lid hooding small series report satisfied patients. The evidence is thin and the devices are largely unregulated; the case report of bilateral chemical eye injury from numbing cream applied for a plasma eyelid treatment is the kind of complication that comes with an untrained hand near the eye (<a href="https://pubmed.ncbi.nlm.nih.gov/32831067/" rel="noopener nofollow" target="_blank">case report</a>). The grid of dots hyperpigments in darker skin and can scar in any. It tightens skin by a few percent and does nothing to fat; for a bag it is a burn with no upside.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-red-flags',
    category: 'safety',
    title: 'When puffy eyes are a medical problem',
    tldr: 'One-sided, painful, red or sudden swelling; puffiness with bulging or a changed eye shape; morning swelling that no longer clears; swelling with breathlessness, foamy urine or weight change — doctor first, clinic second.',
    bodyHtml: `
      <p>Cosmetic eye bags are symmetrical, painless and stable. See a doctor promptly for swelling that is one-sided, painful, hot or red (infection, which around the eye is an emergency); sudden swelling with itch or hives (allergy, sometimes to a new cosmetic); puffiness with a staring look, bulging, grittiness or double vision (thyroid eye disease, which often begins with lid swelling and is treatable early — <a href="https://www.thyroid.org/thyroid-eye-disease/" rel="noopener nofollow" target="_blank">American Thyroid Association</a>); morning swelling that has stopped clearing, with foamy urine, ankle swelling or blood pressure (kidney disease presents as periorbital edema worst on waking — <a href="https://www.ncbi.nlm.nih.gov/books/NBK562240/" rel="noopener nofollow" target="_blank">StatPearls</a>); or swelling with breathlessness or weight gain (heart). Blood tests for thyroid and kidney function cost less than any treatment on this page and should precede all of them when the puffiness is new, worsening or does not fit the fluid pattern.</p>
    `,
  },
  {
    id: 'safety-filler-eye',
    category: 'safety',
    title: 'Under-eye filler: the complication capital of the face',
    tldr: 'Swelling 19%, bruising 18%, lumps 5%, blue tint 1%, malar edema up to 11% and sometimes years later; vascular occlusion and blindness rare but documented; HA is reversible, the injector is not.',
    bodyHtml: `
      <p>The under-eye is where filler most often disappoints. Pooled data from 31 studies put swelling at 19.2%, bruising at 18.4%, contour lumps at 5.3% and the Tyndall blue-grey tint at 0.9% (<a href="https://pubmed.ncbi.nlm.nih.gov/37684413/" rel="noopener nofollow" target="_blank">meta-analysis</a>); periocular reviews report malar edema in up to 11%, and complications that surface months or years after injection (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7583139/" rel="noopener nofollow" target="_blank">review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/34666405/" rel="noopener nofollow" target="_blank">delayed complications</a>). The tear trough is a recognised high-risk zone for vascular occlusion because of the vessels that run there, and blindness from periocular filler, while very rare, is documented (<a href="https://www.oaepublish.com/articles/2347-9264.2020.133" rel="noopener nofollow" target="_blank">periocular complications review</a>; <a href="https://jcadonline.com/filler-complications-june-2019/" rel="noopener nofollow" target="_blank">vascular meta-analysis</a>).</p>
      <p>The safeguards are specific: a soft, low-water gel made for the area; a cannula; placement deep on the bone, never in the skin; tiny volumes (usually under half a syringe per side); no filler over a real fat bag or a festoon; an injector who treats eyes weekly and keeps hyaluronidase in the room; and photographs at every visit so migration is caught. Calcium hydroxylapatite and poly-L-lactic acid do not belong under the eye at all.</p>
    `,
  },
  {
    id: 'safety-surgery-eye',
    category: 'safety',
    title: 'Lower-lid surgery: malposition, dry eye, and the rare emergency',
    tldr: 'Lid retraction or ectropion in up to a fifth of transcutaneous cases in older series versus few transconjunctival; dry eye and chemosis for weeks; fat necrosis 3%, revision 1%; bleeding behind the eye is the rare emergency. Choose the approach and the surgeon accordingly.',
    bodyHtml: `
      <p>The characteristic complication of lower-lid surgery is a lid pulled down — scleral show, rounding of the eye's outer corner, or a turned-out lid (ectropion) — and the transcutaneous approach that cuts through the skin and muscle carries that risk in up to 20% of cases in older series, against a small fraction for the transconjunctival route that leaves the septum and muscle nerve intact (<a href="https://www.ncbi.nlm.nih.gov/books/NBK557659/" rel="noopener nofollow" target="_blank">StatPearls</a>). A lax lid must be supported with a canthopexy before any skin is removed. Dry, gritty eyes and swelling of the conjunctiva (chemosis) are common for weeks; fat necrosis occurred in 3% and revision in 1% of a 200-patient series (<a href="https://pubmed.ncbi.nlm.nih.gov/41150997/" rel="noopener nofollow" target="_blank">series</a>). Bleeding behind the eye after surgery is the rare emergency that can threaten sight and is why blood thinners, hypertension and strenuous activity are managed before and after.</p>
      <p>Choosing: an oculoplastic surgeon (an ophthalmologist trained in lid surgery) or a facial plastic surgeon who does lower lids weekly; a snap test and a discussion of where the fat goes; a plan for the skin that does not rely on cutting it; and photographs of their own patients at a year with the eyes open and closed.</p>
    `,
  },
  {
    id: 'safety-toxin-eye',
    category: 'safety',
    title: 'Toxin near the lower lid: edema, laxity, double vision',
    tldr: 'Over-treating the lower-lid muscle weakens the lymph pump and the lid’s tone — puffiness, a slack lid, poor closure, and rarely double vision if it spreads to an eye muscle; a light hand or none.',
    bodyHtml: `
      <p>The orbicularis muscle under the eye closes the lid, holds it against the globe and pumps lymph out of the tissue. Weakening it beyond a unit or two produces lower-lid edema and incomplete closure — every subject at 8 units in the dose-finding study (<a href="https://pubmed.ncbi.nlm.nih.gov/12930337/" rel="noopener nofollow" target="_blank">study</a>) — and a slack lid that reads as a bag for months. Toxin spreading to the inferior oblique muscle causes double vision. Crow's-feet injections placed too low do the same. If a clinic proposes toxin for a bag, it has misdiagnosed the bag.</p>
    `,
  },
  {
    id: 'safety-home-myths',
    category: 'safety',
    title: 'Hemorrhoid cream, hydrocortisone, tapes and pens',
    tldr: 'Steroid creams thin the thinnest skin on the body; phenylephrine rebounds; eyelid tapes irritate and stretch; unregulated plasma and "laser" pens burn — none is worth the eye it risks.',
    bodyHtml: `
      <p>The lower lid is half a millimetre of skin over the eye, and the home remedies that circulate for it are graded on that. Hydrocortisone — in hemorrhoid creams and "anti-itch" products — thins eyelid skin, unmasks vessels and, absorbed here, reaches the body; phenylephrine constricts vessels for an hour and rebounds (<a href="https://www.goodrx.com/health-topic/dermatology/hemorrhoid-cream-eyes" rel="noopener nofollow" target="_blank">review</a>). Eyelid tapes and "lifting" strips irritate and, used nightly, stretch the skin they claim to lift. Unregulated plasma pens and consumer "laser" devices near the eye have caused burns and, in one published case, bilateral chemical eye injury from the numbing cream alone (<a href="https://pubmed.ncbi.nlm.nih.gov/32831067/" rel="noopener nofollow" target="_blank">case report</a>). Cold, caffeine, sleep and a retinoid on the bone are the safe home list; everything else here is a doctor's procedure or nobody's.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-morning',
    category: 'faq',
    title: 'Why are my eyes puffy in the morning and fine by noon?',
    tldr: 'Because that is fluid: lying flat pools it in the loosest tissue on the face, and standing up drains it. Sleep, salt, alcohol, allergies and a second pillow are the treatment.',
    bodyHtml: `
      <p>Eight hours horizontal lets fluid settle into the lower-lid tissue, which holds it like a sponge; gravity drains it over the morning. Salt, alcohol, a cry, hay fever and the days before a period add to the load. If the puffiness reliably clears by midday, it is fluid and answers to the free tier: an earlier night, the head raised, less salt and alcohol in the evening, the allergy treated, a cold compress for the meeting. If it stops clearing, it has become something else — a fat bag, a festoon, or a reason to see a doctor.</p>
    `,
  },
  {
    id: 'faq-permanent',
    category: 'faq',
    title: 'Will my bags go away on their own?',
    tldr: 'Fluid bags do, daily. Fat bags never do — the septum does not tighten and the fat does not retreat — though they change little for years.',
    bodyHtml: `
      <p>A bag that is fat behind a weakened membrane is anatomy, not a phase: it will not resolve with sleep, weight loss (which often makes it more visible as the cheek deflates), creams or time. It also progresses slowly, so waiting costs little. A bag that is fluid resolves every day and is prevented by habits. A hollow's shadow deepens as the cheek deflates and can be filled at any point. Knowing which you have is the answer to the question.</p>
    `,
  },
  {
    id: 'faq-filler-or-surgery',
    category: 'faq',
    title: 'Filler or surgery?',
    tldr: 'A hollow with no real bulge: filler, in expert hands, for a year or two at a time. A fat bulge: surgery, once. A bulge with a hollow beneath it: surgery that moves the fat into the hollow.',
    bodyHtml: `
      <p>The look-up and lift tests decide. If the eye reads tired because of a groove and the tissue above it is flat, a soft filler placed on the bone lifts the shadow with 87% responders in the pivotal trial — and a fifth of patients swollen for a week. If there is a bulge that grows when you look up, filler adds volume to volume; the fat needs to be moved or removed, and moving it into the hollow treats both problems at once. A comparison of fat repositioning against filler for the tear trough sets out the trade-offs (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11595342/" rel="noopener nofollow" target="_blank">review</a>). Surgery is the more expensive appointment and, over a decade of refills, usually the cheaper one.</p>
    `,
  },
  {
    id: 'faq-eye-cream',
    category: 'faq',
    title: 'Does any eye cream work for bags?',
    tldr: 'For fluid, a caffeine product de-puffs for hours. For skin, a retinoid thickens it over months. For fat, nothing in a jar has ever worked or ever will.',
    bodyHtml: `
      <p>The honest map: caffeine constricts vessels and pulls a little water out, so a caffeine gel softens a fluid bag until lunch; a retinoid rebuilds the thin dermis over the bag over six months so it drapes better; sunscreen prevents the crepe and the pigment. A fat bag sits behind a membrane a cream cannot cross. The €150 "eye lift" cream contains, at best, the caffeine and a peptide with a manufacturer study; at worst, an occlusive that swells the lids overnight. Our <a href="/anti-aging-30s">30s guide</a> has the eye-cream evidence in full.</p>
    `,
  },
  {
    id: 'faq-age-young',
    category: 'faq',
    title: "I'm 25 with my mother's bags — is surgery reasonable?",
    tldr: 'Yes: hereditary fat bags are structural, do not respond to anything else, and transconjunctival surgery in the young is common, scarless and lasting.',
    bodyHtml: `
      <p>Bags in the twenties are almost always inherited — a lax septum and full fat pads, with heritability around 61% in twin data — and they are the purest fat type: no fluid, no laxity, often a hollow beneath. Transconjunctival lower blepharoplasty with fat repositioning is the standard operation in this group, done from inside the lid with no external scar, with combined series in young patients reporting high satisfaction and the fat, once moved, staying moved. The decision is about how much the bags bother you and about finding a surgeon who treats young lower lids often; it is not one that gets easier by waiting.</p>
    `,
  },
  {
    id: 'faq-dark-circles',
    category: 'faq',
    title: 'Are dark circles the same problem?',
    tldr: 'Related, not the same: brown is pigment, blue-purple is vessels through thin skin, grey is the shadow of a hollow or a bag. Stretch the skin and tilt the head to tell them apart.',
    bodyHtml: `
      <p>Dark circles have their own classification — pigmented, vascular, structural and mixed — and each has its own treatment: sunscreen, retinoids, vitamin C and pigment lasers for brown; sleep, allergy control and sometimes PRP or vascular lasers for blue; filler for the structural shadow, which is the one that overlaps with this page. Most people have two types at once, and a 2025 systematic review finds every treatment supported by small trials only. Concealer treats all three instantly, which is why it remains the best-evidenced product for dark circles by a wide margin.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until I see something?',
    tldr: 'Cold and caffeine: minutes. Sleep and salt: days. Filler: at once, settled at two weeks, judged at a month. Retinoid: months. Surgery: presentable at two weeks, final at three months.',
    bodyHtml: `
      <p>The timeline is the diagnosis: anything that changes in minutes was fluid. Habits show within a week of mornings. Filler shows immediately but swells for a week and should be judged at four weeks, when a lump can still be dissolved. A retinoid on the lower lid takes three to six months to show thicker, smoother skin. After surgery the bruising is obvious for a week, presentable with sunglasses at two, good at six weeks and final at three months as the swelling in the thinnest tissue on the face resolves. Photograph at 7 a.m. and 5 p.m. before and after anything.</p>
    `,
  },
  {
    id: 'faq-surgery-lasts',
    category: 'faq',
    title: 'How long does lower blepharoplasty last?',
    tldr: 'The fat that is moved or removed does not come back; the result lasts ten to fifteen years or more, and what ages afterwards is the skin.',
    bodyHtml: `
      <p>Orbital fat, once repositioned into the trough or excised, does not regenerate, and the 200-patient series records a 1% revision rate for residual bulge. What changes over the following decade is the skin — crepe, lines, a little laxity — which a retinoid, sunscreen and, later, resurfacing manage without a second operation. A small minority develop a new bulge from a different fat compartment years on. Most people have the operation once.</p>
    `,
  },
  {
    id: 'faq-crying-hangover',
    category: 'faq',
    title: 'Fastest fix for a puffy morning?',
    tldr: 'Sit up, cold compress or chilled spoons for ten minutes, a caffeine gel, a walk, water, and concealer. An hour of effect for an hour of cause.',
    bodyHtml: `
      <p>Get upright immediately and stay upright; cold — a compress, spoons from the fridge, a cold roller stroked outward — for ten minutes; a caffeine eye gel or cold tea bags; water rather than coffee; a brisk walk to get the lymph moving; and a peach-toned corrector under a concealer for the colour. Skip the hemorrhoid cream, the salty breakfast and the nap. None of it will matter by 2 p.m., which is also the point.</p>
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
    intro: 'Three drivers make an eye bag — and the fix for one does nothing for the others.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which eye bag do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: what helps, what de-puffs for an hour, what harms',
    intro: 'The whole treatment for the fluid type, the skin base for every type, and the myths graded honestly.',
    sections: home,
  },
  {
    id: 'inj',
    title: 'Injectables',
    intro: 'Filler for the hollow, dissolver for the filler, and the injections that belong nowhere near a bag of fat.',
    sections: inj,
  },
  {
    id: 'clinic',
    title: 'Surgery and devices',
    intro: 'The only treatment that removes orbital fat, the add-ons that decide how the eye looks afterward, and the devices that tighten skin and nothing else.',
    sections: clinic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'What the trials and the regulators actually flag, treatment by treatment — and when puffy eyes are a doctor’s problem first.',
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
  fat: 'Fat bag',
  fluid: 'Fluid',
  hollow: 'Hollow & shadow',
  skin: 'Skin & pigment',
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
