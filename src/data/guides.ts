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
}

export const guides: GuideMeta[] = [
  {
    path: 'collagen',
    title: 'Collagen',
    tagline: 'What it is, what supplements actually do, and which treatments stimulate new collagen.',
    kind: 'foundation',
  },
  {
    path: 'supplements',
    title: 'Anti-aging supplements',
    tagline: 'The full stack graded — what works, what is early, and what is marketing.',
    kind: 'foundation',
  },
  {
    path: 'fillers',
    title: 'Hyaluronic-acid fillers',
    tagline: 'Where fillers genuinely help, what they cost, and the risks nobody mentions.',
    kind: 'clinic',
  },
  {
    path: 'sauna',
    title: 'Saunas',
    tagline: 'Finnish-cohort longevity data, blood pressure, mood — and the detox myth.',
    kind: 'lifestyle',
  },
  {
    path: 'red-light-therapy',
    title: 'Red-light therapy',
    tagline: 'Photobiomodulation for skin, hair and recovery — trial doses vs consumer devices.',
    kind: 'lifestyle',
  },
  {
    path: 'longevity-clinics',
    title: 'Longevity clinics',
    tagline: 'Which tests and plans change decisions — and which are expensive theater.',
    kind: 'clinic',
  },
  {
    path: 'regenerative-aesthetics',
    title: 'PRP & regenerative aesthetics',
    tagline: 'PRP, PRF, exosomes and polynucleotides — evidence vs the injectable frontier.',
    kind: 'clinic',
  },
  {
    path: 'laser-ipl',
    title: 'Laser & IPL',
    tagline: 'From gentle IPL to full resurfacing — matched to your skin and downtime budget.',
    kind: 'clinic',
  },
  {
    path: 'microneedling',
    title: 'Microneedling & RF',
    tagline: 'Collagen induction from dermarollers to Morpheus8 — what the trials support.',
    kind: 'clinic',
  },
  {
    path: 'chemical-peels',
    title: 'Chemical peels',
    tagline: 'Superficial to phenol-deep — the oldest resurfacing tool, graded by depth.',
    kind: 'clinic',
  },
  {
    path: 'ceramides',
    title: 'Ceramides',
    tagline: 'The barrier lipids — creams, supplements, and boosters graded by what trials show.',
    kind: 'foundation',
  },
  {
    path: 'neck',
    title: 'Crepey neck & neck lines',
    tagline: 'Texture, necklace lines, platysmal bands and laxity — every fix graded, home to surgery.',
    kind: 'clinic',
  },
  {
    path: 'anti-aging-30s',
    title: 'Anti-aging in your 30s',
    tagline: 'What is actually changing, the prevention core with proof, and the prejuvenation hype to skip.',
    kind: 'decade',
  },
  {
    path: 'anti-aging-40s',
    title: 'Anti-aging in your 40s',
    tagline: 'Perimenopause, deflation and the decade where in-office treatments earn their keep.',
    kind: 'decade',
  },
  {
    path: 'anti-aging-50s',
    title: 'Anti-aging in your 50s',
    tagline: 'The estrogen cliff, HRT and skin, resurfacing, and when surgery beats repeated devices.',
    kind: 'decade',
  },
  {
    path: 'hair-loss',
    title: 'Hair loss',
    tagline: 'Thinning, shedding or a widening part — every treatment graded, minoxidil to transplant, with a plan by type.',
    kind: 'problem',
  },
  {
    path: 'wrinkles',
    title: 'Fine lines & wrinkles',
    tagline: 'Surface lines, expression lines, folds and lip lines — four problems, every fix graded from sunscreen to a deep peel.',
    kind: 'problem',
  },
  {
    path: 'jowls',
    title: 'Sagging jowls',
    tagline: 'Bone, fat, ligament and skin — the pinch test that sorts them, every fix graded, and when only surgery answers.',
    kind: 'problem',
  },
];
