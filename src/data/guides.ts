/**
 * Registry of every evidence guide on the site — one entry per hand-built
 * guide page. Used by the homepage guide grid and the header nav so links
 * can't drift from the actual routes. Guides are English-only.
 */

export interface GuideMeta {
  /** Route without leading slash — also the data-module filename. */
  path: string;
  /** Short nav/card title. */
  title: string;
  /** One-line card blurb. */
  tagline: string;
  /** Card grouping on the homepage. */
  kind: 'foundation' | 'clinic' | 'lifestyle' | 'decade' | 'problem';
  /** First published, ISO date — `datePublished` in the page's Article schema. */
  published: string;
  /**
   * Last substantive content change, ISO date. Shown in the hero ("Updated …"),
   * emitted as `dateModified` / `article:modified_time` and as the sitemap
   * `lastmod`. Bump it only when the content really changed — not for restyles.
   */
  updated: string;
}

export const guides: GuideMeta[] = [
  {
    path: 'collagen',
    title: 'Collagen',
    tagline: 'What it is, what supplements actually do, and which treatments stimulate new collagen.',
    kind: 'foundation',
    published: '2026-05-10',
    updated: '2026-09-12',
  },
  {
    path: 'supplements',
    title: 'Anti-aging supplements',
    tagline: 'The full stack graded — what works, what is early, and what is marketing.',
    kind: 'foundation',
    published: '2026-09-03',
    updated: '2026-09-03',
  },
  {
    path: 'fillers',
    title: 'Hyaluronic-acid fillers',
    tagline: 'Where fillers genuinely help, what they cost, and the risks nobody mentions.',
    kind: 'clinic',
    published: '2026-09-03',
    updated: '2026-09-03',
  },
  {
    path: 'sauna',
    title: 'Saunas',
    tagline: 'Finnish-cohort longevity data, blood pressure, mood — and the detox myth.',
    kind: 'lifestyle',
    published: '2026-09-03',
    updated: '2026-09-03',
  },
  {
    path: 'red-light-therapy',
    title: 'Red-light therapy',
    tagline: 'Photobiomodulation for skin, hair and recovery — trial doses vs consumer devices.',
    kind: 'lifestyle',
    published: '2026-09-03',
    updated: '2026-09-03',
  },
  {
    path: 'longevity-clinics',
    title: 'Longevity clinics',
    tagline: 'Which tests and plans change decisions — and which are expensive theater.',
    kind: 'clinic',
    published: '2026-09-03',
    updated: '2026-09-03',
  },
  {
    path: 'regenerative-aesthetics',
    title: 'PRP & regenerative aesthetics',
    tagline: 'PRP, PRF, exosomes and polynucleotides — evidence vs the injectable frontier.',
    kind: 'clinic',
    published: '2026-09-03',
    updated: '2026-09-03',
  },
  {
    path: 'laser-ipl',
    title: 'Laser & IPL',
    tagline: 'From gentle IPL to full resurfacing — matched to your skin and downtime budget.',
    kind: 'clinic',
    published: '2026-09-03',
    updated: '2026-09-03',
  },
  {
    path: 'microneedling',
    title: 'Microneedling & RF',
    tagline: 'Collagen induction from dermarollers to Morpheus8 — what the trials support.',
    kind: 'clinic',
    published: '2026-09-03',
    updated: '2026-09-03',
  },
  {
    path: 'chemical-peels',
    title: 'Chemical peels',
    tagline: 'Superficial to phenol-deep — the oldest resurfacing tool, graded by depth.',
    kind: 'clinic',
    published: '2026-09-03',
    updated: '2026-09-03',
  },
  {
    path: 'ceramides',
    title: 'Ceramides',
    tagline: 'The barrier lipids — creams, supplements, and boosters graded by what trials show.',
    kind: 'foundation',
    published: '2026-09-03',
    updated: '2026-09-03',
  },
  {
    path: 'neck',
    title: 'Crepey neck & neck lines',
    tagline: 'Texture, necklace lines, platysmal bands and laxity — every fix graded, home to surgery.',
    kind: 'clinic',
    published: '2026-09-03',
    updated: '2026-09-03',
  },
  {
    path: 'anti-aging-30s',
    title: 'Anti-aging in your 30s',
    tagline: 'What is actually changing, the prevention core with proof, and the prejuvenation hype to skip.',
    kind: 'decade',
    published: '2026-09-03',
    updated: '2026-09-03',
  },
  {
    path: 'anti-aging-40s',
    title: 'Anti-aging in your 40s',
    tagline: 'Perimenopause, deflation and the decade where in-office treatments earn their keep.',
    kind: 'decade',
    published: '2026-09-03',
    updated: '2026-09-03',
  },
  {
    path: 'anti-aging-50s',
    title: 'Anti-aging in your 50s',
    tagline: 'The estrogen cliff, HRT and skin, resurfacing, and when surgery beats repeated devices.',
    kind: 'decade',
    published: '2026-09-03',
    updated: '2026-09-03',
  },
  {
    path: 'hair-loss',
    title: 'Hair loss',
    tagline: 'Thinning, shedding or a widening part — every treatment graded, minoxidil to transplant, with a plan by type.',
    kind: 'problem',
    published: '2026-09-05',
    updated: '2026-09-05',
  },
  {
    path: 'wrinkles',
    title: 'Fine lines & wrinkles',
    tagline: 'Surface lines, expression lines, folds and lip lines — four problems, every fix graded from sunscreen to a deep peel.',
    kind: 'problem',
    published: '2026-09-06',
    updated: '2026-09-06',
  },
  {
    path: 'jowls',
    title: 'Sagging jowls',
    tagline: 'Bone, fat, ligament and skin — the pinch test that sorts them, every fix graded, and when only surgery answers.',
    kind: 'problem',
    published: '2026-09-06',
    updated: '2026-09-06',
  },
  {
    path: 'eye-bags',
    title: 'Under-eye bags & puffy eyes',
    tagline: 'Fat, fluid or shadow — three tests that tell you which, every fix graded, and the under-eye filler risks in numbers.',
    kind: 'problem',
    published: '2026-09-06',
    updated: '2026-09-06',
  },
  {
    path: 'dark-spots',
    title: 'Dark spots & hyperpigmentation',
    tagline: 'Sun spots, melasma and acne marks are three problems — every brightener, prescription and laser graded, and the spot that needs a biopsy first.',
    kind: 'problem',
    published: '2026-09-06',
    updated: '2026-09-06',
  },
  {
    path: 'crows-feet',
    title: "Crow's feet",
    tagline: 'Dynamic, static or crepe — the smile test that sorts them, toxin to lasers graded by trial, and the risks near the eye in numbers.',
    kind: 'problem',
    published: '2026-09-06',
    updated: '2026-09-06',
  },
  {
    path: 'lip-lines',
    title: 'Lip lines (barcode lines)',
    tagline: 'A pursing muscle, thin sun-exposed skin and a deflating lip — the pucker test, toxin to the phenol peel graded, and the mouth’s risks in numbers.',
    kind: 'problem',
    published: '2026-09-07',
    updated: '2026-09-07',
  },
  {
    path: 'nasolabial-folds',
    title: 'Nasolabial folds (smile lines)',
    tagline: 'A seam, not a wrinkle — the recline test, the best-evidenced filler site in aesthetics, and why threads, devices and even facelifts lift it less than they promise.',
    kind: 'problem',
    published: '2026-09-07',
    updated: '2026-09-07',
  },
  {
    path: 'marionette-lines',
    title: 'Marionette lines',
    tagline: 'A muscle pulling the corner down, a ligament pinning the jaw, a jowl in between — the "e" test, the one injectable that lifts the corner, and what the 962-patient review says about the rest.',
    kind: 'problem',
    published: '2026-09-07',
    updated: '2026-09-07',
  },
  {
    path: 'forehead-lines',
    title: 'Forehead lines',
    tagline: 'Folded by the only muscle that lifts your brows — the eyelid test that tells you whether it is also holding your eyes open, toxin to the brow lift graded, and the dropped brow in numbers.',
    kind: 'problem',
    published: '2026-09-07',
    updated: '2026-09-07',
  },
  {
    path: 'sagging-skin',
    title: 'Sagging skin (skin laxity)',
    tagline: 'Skin that lost its recoil, or a frame that shrank beneath it — the pinch and recline tests, sunscreen to hormone therapy to every tightening device and the facelift graded, and what "lift" means in millimetres.',
    kind: 'problem',
    published: '2026-09-07',
    updated: '2026-09-07',
  },
  {
    path: 'sun-damage',
    title: 'Sun damage (photoaging)',
    tagline: 'Four problems on one cancer field — the arm test, sunscreen to retinoids to light, lasers and the field therapies graded, and the cancer numbers stated plainly.',
    kind: 'problem',
    published: '2026-09-07',
    updated: '2026-09-07',
  },
  {
    path: 'double-chin',
    title: 'Double chin',
    tagline: 'Fat above the muscle, fat below it, a loose neck or a short chin — the four tests, the one injection with placebo-controlled trials, and why devices first can make the neck lift harder.',
    kind: 'problem',
    published: '2026-09-07',
    updated: '2026-09-07',
  },
  {
    path: 'facial-volume-loss',
    title: 'Hollow temples & cheeks (volume loss)',
    tagline: 'The face deflates before it sags — the recline test, the temple and midface trials, the stimulator that beat hyaluronic acid, fat grafting’s real survival rate, and the temple’s arteries in numbers.',
    kind: 'problem',
    published: '2026-09-07',
    updated: '2026-09-07',
  },
  {
    path: 'dull-skin',
    title: 'Dull, uneven skin',
    tagline: 'Glow is physics — the self-checks, sunscreen to retinoids to peels, boosters and lasers graded, the habits with next-morning experiments, and the stripped barrier that causes most product-bought dullness.',
    kind: 'problem',
    published: '2026-09-07',
    updated: '2026-09-07',
  },
  {
    path: 'dry-skin',
    title: 'Dry, dehydrated skin',
    tagline: 'Lipids or water — the pinch and the scratch that sort them, urea to ceramides to petrolatum, supplements, hormones and skin boosters graded, the washing and heating habits with numbers, and the red flags that mean a blood test, not a third cream.',
    kind: 'problem',
    published: '2026-09-07',
    updated: '2026-09-07',
  },
  {
    path: 'thin-lips',
    title: 'Thinning lips & lost definition',
    tagline: 'The lip lengthens more than it shrinks — the ruler-and-profile self-check, lip colour to hyaluronic gel to the lip lift graded by sixteen trials and seven series, the toxin flip, fat, implants and the dentist, and the overfilled lip treated as its own problem.',
    kind: 'problem',
    published: '2026-09-08',
    updated: '2026-09-08',
  },
  {
    path: 'decolletage',
    title: 'Crepey chest & décolletage lines',
    tagline: 'The chest ages like the face with less to age with — the blanch, the pinch and the morning photograph that sort mottling from crepe from cleavage lines, sunscreen to light to lasers to the one chest treatment with a randomised trial, and the settings that scar this skin.',
    kind: 'problem',
    published: '2026-09-08',
    updated: '2026-09-08',
  },
  {
    path: 'upper-arms',
    title: 'Loose upper-arm skin',
    tagline: 'Skin, fat or muscle — the ruler-and-pinch grid that sorts the hanging arm, training and retinoids to collagen stimulators, ultrasound and cryolipolysis, energy-assisted liposuction and the arm lift graded by their trials, with the honest percentages, the scar and the weight-stable clock.',
    kind: 'problem',
    published: '2026-09-08',
    updated: '2026-09-08',
  },
  {
    path: 'hooded-eyes',
    title: 'Hooded eyelids & drooping brows',
    tagline: 'Three problems in one word — the finger-and-photograph test that sorts lid skin from a fallen brow from a slipped margin, and eye drops, the toxin brow lift, ultrasound, blepharoplasty, ptosis repair, browpexy and the brow lift graded by their trials, in the millimetres each actually moves.',
    kind: 'problem',
    published: '2026-09-08',
    updated: '2026-09-08',
  },
  {
    path: 'facial-redness',
    title: 'Facial redness, rosacea & broken capillaries',
    tagline: 'Four features sharing one disease — the self-check that sorts flushing from capillaries from bumps from the nose, and sunscreen, barrier repair, azelaic acid, ivermectin, doxycycline, the redness switches, pulsed-dye laser, IPL and the off-label shelf graded by 152 randomised trials, with the steroid cream and the rebound gel that make it worse.',
    kind: 'problem',
    published: '2026-09-08',
    updated: '2026-09-08',
  },
  {
    path: 'aging-hands',
    title: 'Aging hands: veins, tendons, spots & crepe',
    tagline: 'Two problems in one hand — the fat that thins until veins and tendons show, and the sun that spots, thins and bruises the skin — sorted by a self-check and graded on the hand trials: daily sunscreen measured on the back of the hand itself, the retinoid, the Q-switched laser that beat liquid nitrogen, IPL, cryotherapy, peels, fractional lasers, the two fillers with a regulatory hand indication, skin boosters, fat grafting and the biostimulators, with the vein removal a careful clinician talks you out of.',
    kind: 'problem',
    published: '2026-09-08',
    updated: '2026-09-08',
  },
  {
    path: 'collagen-loss',
    title: 'Collagen loss & loss of firmness',
    tagline: 'Firmness is the dermis, lost at 1% a year and 1–2% more after menopause — the self-check that sorts time from sun from estrogen, and sunscreen, tretinoin, vitamin C, the acids, oral collagen, hormone therapy, the lasers, microneedling, radiofrequency, ultrasound, red light and the biostimulators graded on what measures firmness: collagen on a biopsy, recoil on a cutometer, thickness on ultrasound — with the collagen jar, the exosome vial and the "collagen bank" that measure nothing.',
    kind: 'problem',
    published: '2026-09-08',
    updated: '2026-09-08',
  },
];

/** The registry entry for a guide page; throws at build time if the path is not registered. */
export function guideMeta(path: string): GuideMeta {
  const g = guides.find((x) => x.path === path);
  if (!g) throw new Error(`Guide "${path}" is not in src/data/guides.ts`);
  return g;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2026-09-03" → "3 Sep 2026" — the site's visible date style, locale-independent. */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

/** The most recent `updated` across every guide — the homepage's lastmod. */
export function latestUpdate(): string {
  return guides.map((g) => g.updated).sort().at(-1)!;
}
