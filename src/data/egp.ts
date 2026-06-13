/**
 * EGP Aesthetics — clinic data module (the clinic-template sibling of
 * collagen.ts / jowls.ts).
 *
 * Consumed by /clinics/egp. The page is a thin template over this module so
 * the same template can later be instanced for other clinics
 * (src/pages/clinics/[clinic].astro).
 *
 * Sources: egpaesthetics.co.uk, the clinic's Fresha listing (single source of
 * truth for prices, hours and service names), Companies House, Google Maps.
 * Anything we could NOT verify is listed in `verificationFlags` and must be
 * resolved with the clinic before launch — the build warns while it is
 * non-empty.
 *
 * COMPLIANCE (UK): prescription-only medicines may not be advertised to the
 * public — Reg 284 Human Medicines Regulations 2012 + CAP 12.12. Nothing in
 * this file may name a POM, price one, or give it a booking link. This covers
 * BOTH POMs the clinic uses: botulinum toxin (expression lines) and
 * hyaluronidase (filler correction). Each exists only as a consultation-led
 * info row (`pom: true`) whose single CTA is the consultation. Keep it so.
 *
 * `bodyHtml` is plain HTML rendered with set:html. Keep external links
 * rel="noopener nofollow" target="_blank".
 */

export type Evidence = 'strong' | 'moderate' | 'emerging' | 'limited';

export type Concern =
  | 'regenerative'
  | 'skin-quality'
  | 'tired-eyes'
  | 'volume-contour'
  | 'lines-wrinkles'
  | 'body-hair-laser';

export const concernLabels: Record<Concern, string> = {
  regenerative: 'Regenerative & biostimulators',
  'skin-quality': 'Skin quality & facials',
  'tired-eyes': 'Tired eyes',
  'volume-contour': 'Contour & volume',
  'lines-wrinkles': 'Lines & expression',
  'body-hair-laser': 'Body, hair & laser',
};

/** Structurally a superset of EvidenceRow's EvidenceItem, so rows render unchanged. */
export interface Treatment {
  id: string;
  title: string;
  tldr: string;
  /** Omit => renders as an ungraded 'info' row (facials, dissolve, the lines row). */
  evidence?: Evidence;
  bodyHtml: string;
  /** Maintenance-rhythm sentence shown under the summary. */
  note?: string;
  sessions?: string;
  downtime?: string;
  /** ALWAYS the Fresha price — single source of truth. */
  cost?: string;
  concern: Concern;
  /** Flags a price divergence between site and Fresha. */
  priceNote?: string;
  /** true => no brand, no price, no booking link; CTA is the consultation only. */
  pom?: boolean;
  /** Conceptual sister-guide link (/collagen-5#… or /jowls#…). */
  guideHref?: string;
}

export interface TreatmentGroup {
  id: Concern;
  title: string;
  intro: string;
  mediaTone?: 'rose' | 'gold';
  treatments: Treatment[];
}

export interface JourneyStage {
  step: number;
  title: string;
  short: string;
  bodyHtml: string;
  /**
   * Practitioner-facing delivery layer for the in-person present view
   * (/clinics/egp/journey). The public JourneyTimeline ignores this; the
   * present-page renders it so the web journey and the practitioner playbook
   * are provably the same four stages. Sourced from the Care Journey Playbook.
   */
  practitioner?: {
    /** What the practitioner is trying to achieve at this stage. */
    goal: string;
    /** Talk-track — lines to actually say in the room. */
    say: string[];
    /** Actions / SOP at this stage. */
    do: string[];
    /** The compliance / relationship guardrail for this stage. */
    watchOut: string;
    /** How this stage sets up the next visit — the follow-up hook. */
    followUpTrigger: string;
    /** Which playbook sections this maps to. */
    playbookRef: string;
  };
}

/**
 * Follow-up protocol per treatment CLASS — the connective tissue between the
 * public journey and the practitioner playbook. "Most treatments need a
 * follow-up": this is the single source of truth for what that follow-up is.
 * The public page derives each treatment's ASA-safe `patientCue` from here so
 * patients EXPECT the path; the present-page renders the full `chain` and the
 * practitioner's `sentence` so the same path can be delivered in person.
 */
export type TxClass =
  | 'biostimulator'
  | 'bio-remodeller'
  | 'ha-filler'
  | 'energy-microneedling'
  | 'regenerative-flagship'
  | 'facial'
  | 'expression-pom'
  | 'pom-correction';

export interface FollowUpProtocol {
  id: TxClass;
  label: string;
  /** Treatment ids this protocol governs. */
  appliesTo: string[];
  /** POM => public stays consultation-only; no interval/efficacy is published. */
  pom?: boolean;
  /** Short, public-safe "what comes next", shown on the treatment row. */
  patientCue: string;
  /** The follow-up path, for the practitioner present view. */
  chain: { when: string; what: string }[];
  /** The biology-first line to say (Playbook §4). */
  sentence: string;
}

/** Powers both the Journey-Map drawers and the Part 04 maintenance calendar. */
export interface MaintenanceItem {
  id: string;
  title: string;
  tldr: string;
  /** Certainty of the INTERVAL claim — drives the evidence bar. */
  evidence: Evidence;
  bodyHtml: string;
  /** e.g. '2–3 sessions, 4–6 weeks apart'. Rendered in the row fact grid. */
  sessions?: string;
  note?: string;
  guideHref?: string;
}

export interface SignatureJourney {
  id: string;
  name: string;
  eyebrow: string;
  forWhom: string;
  steps: { when: string; what: string; priceFrom?: string }[];
  indicativeYearCost?: string;
  tone: 'rose' | 'gold' | 'sage' | 'bone';
  guideHref?: string;
  guideLabel?: string;
}

export interface Practitioner {
  id: string;
  name: string;
  title: string;
  /** Only verified items ship. Self-described claims go in selfReported. */
  credentials: string[];
  selfReported: string[];
  bioHtml: string;
  photoLabel: string;
  rating?: string;
}

export interface EditorialPick {
  /** '#anchor' on this page, so picks can target rows OR sections. */
  href: string;
  kind: string;
  title: string;
  blurb: string;
  tone: 'rose' | 'gold' | 'sage' | 'bone';
}

export interface GalleryCase {
  id: string;
  title: string;
  date?: string;
  whatWasDone: string;
  evidence?: Evidence;
  journeyNote?: string;
  mediaLabel: string;
  /**
   * Real photography may only replace the placeholder when signed, dated,
   * unmanipulated consent is on file (CAP 3.45–3.50). Until then this stays
   * false and the card renders a placeholder.
   */
  consentOnFile: boolean;
}

export interface Review {
  quote: string;
  author: string;
  source: 'Fresha' | 'Google';
  date: string;
  /** Gold chip, e.g. 'Client 3+ years'. */
  relationship?: string;
  /** true => POM mentions removed; full original held on file. */
  excerpted?: boolean;
}

export interface Faq {
  id: string;
  question: string;
  /** Bottom-line answer, always visible in the collapsed drawer. */
  short: string;
  bodyHtml: string;
}

export interface ProofStat {
  stat: string;
  label: string;
  href?: string;
}

export interface OpeningHours {
  day: string;
  open: string;
}

export interface ClinicMeta {
  name: string;
  legalName: string;
  companyNo: string;
  established: number;
  heroEyebrow: string;
  /** Template appends the rose full stop. */
  heroHeadline: string;
  heroSub: string;
  updated: string;
  philosophyQuote: { text: string; attribution: string };
  evidencePromiseHtml: string;
  standardsLine: string;
  address: { line1: string; city: string; postcode: string; geo: [number, number]; area: string };
  transport: string[];
  parking: string;
  contact: { phone: string; whatsappHref: string; email: string };
  /** Verified links only — Instagram is currently broken/unavailable. */
  socials: { label: string; href: string }[];
  ratings: ProofStat[];
  hours: OpeningHours[];
  hoursSource: string;
  mapsHref: string;
}

export interface BookingConfig {
  /** The one canonical Fresha listing. NEVER the legacy 'Beauty Queen' duplicates. */
  venueBase: string;
  consultation: string;
  allServices: string;
  plans: string;
  giftCards: string;
  whatsapp: string;
  consultationOffer: { price: string; redeemable: boolean; durationMin: number };
}

export interface ClinicData {
  slug: string;
  meta: ClinicMeta;
  booking: BookingConfig;
  keyTakeaways: string[];
  practitioners: Practitioner[];
  continuityPromise: string;
  journeyStages: JourneyStage[];
  /** ids of maintenance items shown as drawers directly under the Journey Map. */
  journeyDrawerIds: string[];
  maintenance: MaintenanceItem[];
  signatureJourneys: SignatureJourney[];
  journeyDisclaimer: string;
  treatmentGroups: TreatmentGroup[];
  picks: EditorialPick[];
  gallery: GalleryCase[];
  galleryDisclaimer: string;
  reviews: Review[];
  reviewsAllHref: string;
  belonging: { id: string; title: string; blurb: string; href?: string; cta?: string }[];
  faqs: Faq[];
  references: string;
  complianceFooterHtml: string;
  /** Must be resolved before launch; the page build warns while non-empty. */
  verificationFlags: string[];
}

// ---------------------------------------------------------------------------
// BOOKING — one canonical listing; every CTA on the page resolves through here.
// ---------------------------------------------------------------------------

const FRESHA = 'https://www.fresha.com/a/egp-aesthetics-london-809-wandsworth-road-ubfxsyj0';
const UTM = '?utm_source=deaging_clinicpage';

const booking: BookingConfig = {
  venueBase: FRESHA,
  // Per-service deep links are unverified — every CTA lands on the venue page
  // until exact share-links are captured from the Fresha dashboard (flagged).
  consultation: FRESHA + UTM,
  allServices: FRESHA + UTM,
  plans: FRESHA + UTM,
  giftCards: FRESHA + UTM,
  whatsapp: 'https://wa.me/447944242079',
  consultationOffer: { price: '£50', redeemable: true, durationMin: 30 },
};

const bookLink = (label = 'Book on Fresha') =>
  `<a href="${booking.allServices}" target="_blank" rel="noopener nofollow" data-cta="book-row">${label} →</a>`;
const guideLink = (href: string, label = 'Read the science') => `<a href="${href}">${label} →</a>`;

// ---------------------------------------------------------------------------
// META
// ---------------------------------------------------------------------------

const meta: ClinicMeta = {
  name: 'EGP Aesthetics',
  legalName: 'EGP AESTHETICS LTD',
  companyNo: '12004741',
  established: 2019,
  heroEyebrow: 'Clinic · Clapham, London',
  heroHeadline: 'Skin, cultivated',
  heroSub:
    'EGP Aesthetics is a sister-led regenerative clinic in Clapham. Great results here are not a one-off purchase — they are a plan we write with you and tend over months and years.',
  updated: '13 June 2026',
  philosophyQuote: {
    text: 'True aesthetic medicine should never be aggressive or trend-driven — it should be regenerative, respectful, and tailored to the individual.',
    attribution: 'Eli & Galina Pavlova, founders',
  },
  evidencePromiseHtml: `
    <p>We hold EGP to the same standard as every guide on DeAging Europe: every treatment below is graded by the strength of its published evidence — <strong>strong</strong>, <strong>moderate</strong>, <strong>emerging</strong> or <strong>limited</strong>. Where the science is young, we say so. Where biology sets the schedule, we show you the mechanism.</p>
  `,
  standardsLine:
    'Face-to-face assessment before any prescription treatment. No remote prescribing. Complication protocols in place.',
  address: {
    line1: '809 Wandsworth Road',
    city: 'London',
    postcode: 'SW8 3JH',
    geo: [51.4665, -0.14873],
    area: 'Clapham',
  },
  transport: [
    'Clapham Common tube — about 10 minutes on foot',
    'Clapham Junction rail — about 15 minutes on foot, or 5 by bus',
    'Buses 87 & 88 stop at The Chase, one minute away',
  ],
  parking: 'Pay-and-display street parking on The Chase and Victoria Rise.',
  contact: {
    phone: '07944 242079',
    whatsappHref: 'https://wa.me/447944242079',
    email: 'info@egpaesthetics.co.uk',
  },
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/egpaesthetics' },
    { label: 'YouTube', href: 'https://www.youtube.com/@egpaesthetics' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@egpaesthetics_london' },
  ],
  ratings: [
    { stat: '5.0 / 5', label: '655 verified Fresha reviews — 652 five-star', href: FRESHA },
    {
      stat: '4.9 / 5',
      label: 'Google rating',
      href: 'https://www.google.com/maps/search/?api=1&query=EGP%20Aesthetics%20809%20Wandsworth%20Road%20London%20SW8%203JH',
    },
    { stat: '7 years', label: 'In Clapham — Companies House 12004741' },
    { stat: 'Two sisters', label: 'Women-founded and women-run' },
  ],
  hours: [
    { day: 'Monday – Wednesday', open: '10:00 – 18:00' },
    { day: 'Thursday', open: '10:00 – 19:00' },
    { day: 'Friday', open: '10:00 – 16:00' },
    { day: 'Saturday', open: '9:00 – 16:00' },
    { day: 'Sunday', open: 'Closed' },
  ],
  hoursSource: 'Hours from the clinic’s Fresha listing, June 2026.',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=EGP%20Aesthetics%20809%20Wandsworth%20Road%20London%20SW8%203JH',
};

// ---------------------------------------------------------------------------
// TAKEAWAYS — journey-seeded, in the house "case in five lines" format.
// ---------------------------------------------------------------------------

const keyTakeaways: string[] = [
  'EGP is a regenerative, health-first clinic — they favour treatments that rebuild your own collagen over volume-chasing.',
  'Every plan starts with a face-to-face consultation; nothing prescription-based is sold online or remotely.',
  'You will be treated by one of the two founders — the same person across your whole plan, working from your photos and notes.',
  'A result is a schedule, not a purchase: collagen falls roughly 1% a year, so the question is never if you return but when biology asks.',
  'We grade everything they offer by evidence strength — and they will tell you when a treatment is not right for you.',
];

// ---------------------------------------------------------------------------
// PRACTITIONERS
// ---------------------------------------------------------------------------

const practitioners: Practitioner[] = [
  {
    id: 'eli',
    name: 'Eli Pavlova',
    title: 'Medical Cosmetologist · Director',
    credentials: ['Certified aesthetic practitioner', 'Aesthetic trainer', 'Co-founder, 2019'],
    selfReported: ['Background spanning medical cosmetology and holistic nutrition'],
    bioHtml: `
      <p>Eli co-founded EGP with her sister Galina and has led its move into regenerative aesthetics — PRP, exosome therapy and polynucleotides alongside classic injectables. Clients consistently describe the same thing: time. Consultations that don't feel rushed, and advice that extends to skincare you can do at home.</p>
    `,
    photoLabel: 'Eli Pavlova — portrait',
    rating: '5.0 on Fresha',
  },
  {
    id: 'galina',
    name: 'Galina Pavlova',
    title: 'Aesthetic Nurse',
    credentials: ['Certified aesthetic practitioner', 'Aesthetic trainer', 'Co-founder, 2019'],
    selfReported: ['Master of Law before retraining into medical cosmetology'],
    bioHtml: `
      <p>Galina came to aesthetics from a legal career — a second profession chosen deliberately, not inherited. Reviewers single out her thoroughness: methodical assessment, honest expectation-setting, and a gentle hand with treatments from microneedling to advanced skin boosters.</p>
    `,
    photoLabel: 'Galina Pavlova — portrait',
    rating: '5.0 on Fresha',
  },
];

const continuityPromise =
  'No rotating injector roster. The practitioner who writes your plan carries it out — and answers your follow-up message.';

// ---------------------------------------------------------------------------
// JOURNEY MAP — the page's spine, placed before any price list.
// ---------------------------------------------------------------------------

const journeyStages: JourneyStage[] = [
  {
    step: 1,
    title: 'The consultation',
    short: '£50, fully redeemed against your first treatment.',
    bodyHtml: `
      <p>Thirty minutes with Eli or Galina, including digital skin analysis — pigmentation, sun damage, hydration, sensitivity. You leave with a written <strong>First-Year Map</strong>: what, when and why, phased across twelve months.</p>
    `,
    practitioner: {
      goal: 'The journey is born here. Listen first, present outcomes not injection sites, close with a sequenced choice — and send them home with a written First-Year Map.',
      say: [
        'Open: “When you look in the mirror, what would you like to feel?”',
        'Close with choice, never yes/no: “Skin quality this season and the under-eyes in spring — or the reverse? Which bothers you more day to day?”',
      ],
      do: [
        'Full-face assessment at rest and in animation',
        'Digital skin analysis (the £50 redeems against treatment)',
        'Photograph everything — your continuity instrument',
        'Write the one-page First-Year Map together',
      ],
      watchOut: 'No flaw-cataloguing, no same-day pressure, no “risk-free” language. POMs are discussed here only — never online.',
      followUpTrigger: 'Pre-book the 2-week review before they leave — it is printed on the Map.',
      playbookRef: '§2 · §3',
    },
  },
  {
    step: 2,
    title: 'The foundation',
    short: 'Your first treatment — with a review built in.',
    bodyHtml: `
      <p>The first treatment on your map, followed by a two-week review where results are photographed, checked and refined. The review is part of the treatment, not an upsell window.</p>
    `,
    practitioner: {
      goal: 'Deliver the first treatment, then run the 2-week review like a ward round — photograph, refine, and only then re-open the Map.',
      say: [
        '“Your review is part of this treatment — shall we put it in now? I have Thursday the 14th.”',
        '“I’d rather see you ten minutes too early than a month too late.”',
      ],
      do: [
        'Treat the first item on the Map',
        'At 2 weeks: photograph and compare against baseline, with the client watching',
        'Check and refine — small corrections now prevent quiet dissatisfaction',
      ],
      watchOut: 'The review is a clinical touchpoint, never a place to sell beyond what the Map already contains.',
      followUpTrigger: 'Secure the next date before they leave — target ≥65% rebooked.',
      playbookRef: '§5 · §6',
    },
  },
  {
    step: 3,
    title: 'The rhythm',
    short: 'Maintenance scheduled by biology, not marketing.',
    bodyHtml: `
      <p>Each treatment has a biological interval — when collagen production peaks and fades, when bio-remodellers settle. Your next visit is set by that mechanism, and we show you the science behind every date.</p>
    `,
    practitioner: {
      goal: 'Maintenance scheduled by biology, not demand. Each treatment class has its own follow-up rhythm — see the protocols below.',
      say: [
        '“Here is when biology will ask for the next visit” — never “come back to buy more.”',
        'Window nudge: “You’re entering the window where Profhilo starts to fade — here’s the link if you’d like to stay inside it.”',
      ],
      do: [
        'Tie every date to the biological interval (the protocols below)',
        'Use the 5-template follow-up pack via Fresha / WhatsApp',
        'Keep facials as the standing ritual between phases',
      ],
      watchOut: 'No urgency mechanics — “we’re filling up fast” is banned (off-brand and an ASA risk).',
      followUpTrigger: 'Each treatment class’s chain sets the next visit automatically.',
      playbookRef: '§4 · §7 · §9',
    },
  },
  {
    step: 4,
    title: 'The annual edit',
    short: 'Once a year, the whole plan is reassessed.',
    bodyHtml: `
      <p>Skin changes; goals change. Once a year the full plan is re-examined against new photographs — treatments that earned their place stay, the rest are edited out.</p>
    `,
    practitioner: {
      goal: 'Once a year, reassess against fresh photos. Keep what earned its place — and say the ethical “no”.',
      say: [
        '“My honest advice is: not yet — let’s sequence the proven things first.”',
        '“If you only do one thing this year, it isn’t this — it’s X. Then let’s revisit.”',
      ],
      do: [
        'Full reassessment with side-by-side photos',
        'Edit the plan down as happily as up',
        'Mondays: the 15-minute metrics huddle',
      ],
      watchOut: 'A client refused honestly returns and refers; a client over-treated quietly disappears.',
      followUpTrigger: 'The edit writes next year’s Map — and the loop repeats.',
      playbookRef: '§8 · §12',
    },
  },
];

const journeyDrawerIds = ['maint-baseline', 'maint-biostimulators'];

// ---------------------------------------------------------------------------
// MAINTENANCE — the biology that sets the calendar. The evidence bar grades
// the certainty of the INTERVAL claim. No POM brand names, ever.
// ---------------------------------------------------------------------------

const maintenance: MaintenanceItem[] = [
  {
    id: 'maint-baseline',
    title: 'Your collagen is declining ~1–1.5% every year',
    tldr: 'Every result works against a moving baseline — production falls and breakdown speeds up from your 30s onward.',
    evidence: 'strong',
    note: 'The honest reason maintenance exists at all.',
    bodyHtml: `
      <p>From roughly age 30, skin loses collagen at about 1–1.5% per year: fibroblasts produce less, and existing fibres break down faster. Elastin degrades even earlier and barely regenerates. Because the decline is continuous, any treatment is working against an ongoing process — which is the honest, biology-first justification for periodic maintenance rather than one-and-done correction.</p>
      <p>${guideLink('/collagen-5#loss', 'How collagen declines — the full guide')}</p>
    `,
    guideHref: '/collagen-5#loss',
  },
  {
    id: 'maint-biostimulators',
    title: 'Collagen biostimulators need a series, then patience',
    tldr: '2–3 sessions, peak results at 3–6 months, a top-up every 12–18 months.',
    evidence: 'strong',
    sessions: '2–3 sessions, 4–6 weeks apart',
    note: 'The multi-session timeline is dictated by collagen biology, not sales cadence.',
    bodyHtml: `
      <p>Biostimulators such as Sculptra (poly-L-lactic acid) don't fill — they trigger your own gradual collagen synthesis. The standard protocol is two to three sessions spaced four to six weeks apart; peak results appear three to six months after the final session, when new collagen production maxes out. Results last around two years, maintained with one to two vials every 12–18 months.</p>
      <p>${guideLink('/collagen-5#therapy-sculptra', 'Sculptra in our collagen guide')}</p>
    `,
    guideHref: '/collagen-5#therapy-sculptra',
  },
  {
    id: 'maint-bioremodellers',
    title: 'Bio-remodellers (Profhilo) work in pairs',
    tldr: 'An initial course of 2 sessions 4 weeks apart, then maintenance every 6–9 months.',
    evidence: 'moderate',
    sessions: '2 sessions, 4 weeks apart',
    note: 'The 4-week gap lets the first dose prime fibroblasts before the second amplifies it.',
    bodyHtml: `
      <p>Profhilo and similar hyaluronic-acid bio-remodellers are dosed as a pair: the first session stimulates fibroblast activity, and the second — four weeks later — amplifies that response. Optimal results show four to eight weeks after the second session, and the effect lasts roughly six to nine months, which sets the maintenance rhythm.</p>
    `,
  },
  {
    id: 'maint-series',
    title: 'Microneedling & energy treatments build cumulatively',
    tldr: 'A series of ~3 sessions — each triggers a wound-healing collagen cascade that stacks on the last.',
    evidence: 'strong',
    sessions: 'Series of ~3, a few weeks apart',
    note: 'One session cannot achieve the structural remodelling a staged series produces.',
    bodyHtml: `
      <p>Each microneedling or energy-device session triggers a controlled wound-healing response that remodels collagen over the following weeks. The effect is cumulative: a series of around three sessions, spaced to respect healing windows, produces structural change a single session cannot.</p>
      <p>${guideLink('/collagen-5#therapy-microneedling', 'Microneedling in our collagen guide')}</p>
    `,
    guideHref: '/collagen-5#therapy-microneedling',
  },
];

// ---------------------------------------------------------------------------
// SIGNATURE JOURNEYS — three ways a year can look. Illustrative, never
// bookable as a bundle; every CTA goes to the consultation.
// ---------------------------------------------------------------------------

const signatureJourneys: SignatureJourney[] = [
  {
    id: 'journey-regenerative',
    name: 'The Regenerative Year',
    eyebrow: 'Flagship',
    forWhom: 'For skin that needs rebuilding from within — texture, firmness, glow.',
    steps: [
      { when: 'Month 0', what: 'Consultation + digital skin analysis', priceFrom: '£50, redeemable' },
      { when: 'Months 1–2', what: 'Polynucleotides series', priceFrom: 'from £390' },
      { when: 'Month 3', what: 'Exosome therapy or PRP rejuvenation', priceFrom: 'from £480' },
      { when: 'Months 6 & 12', what: 'Profhilo maintenance', priceFrom: '£490 each' },
    ],
    indicativeYearCost: 'Indicative year from ~£2,000',
    tone: 'rose',
    guideHref: '/collagen-5',
    guideLabel: 'The collagen science behind this plan',
  },
  {
    id: 'journey-quiet-lift',
    name: 'The Quiet Lift',
    eyebrow: 'Jawline & lower face',
    forWhom: 'For early jowling and softness along the jaw — lifted without looking done.',
    steps: [
      { when: 'Month 0', what: 'Consultation + digital skin analysis', priceFrom: '£50, redeemable' },
      { when: 'Month 1', what: 'Profhilo Structura — cheeks & jawline', priceFrom: '£490' },
      { when: 'Month 2', what: 'Ultrasound lift & tighten', priceFrom: '£190' },
      { when: 'Month 3', what: 'Two-week review refinement, then 6-month rhythm', priceFrom: 'included' },
    ],
    indicativeYearCost: 'Indicative year from ~£1,200',
    tone: 'gold',
    guideHref: '/jowls',
    guideLabel: 'Why jawlines soften — our jowls guide',
  },
  {
    id: 'journey-eye-edit',
    name: 'The Eye Edit',
    eyebrow: 'Under-eyes',
    forWhom: 'For tired-looking eyes — hollowness, crepey texture, dark circles.',
    steps: [
      { when: 'Month 0', what: 'Consultation + digital skin analysis', priceFrom: '£50, redeemable' },
      { when: 'Month 1', what: 'Under-eye mesotherapy (Jalupro / NCTF)', priceFrom: '£159' },
      { when: 'Month 2', what: 'Advanced under-eye meso — polynucleotides + NCTF', priceFrom: '£290' },
      { when: 'Month 12', what: '3-step signature under-eye treatment as the yearly anchor', priceFrom: '£390' },
    ],
    indicativeYearCost: 'Indicative year from ~£900',
    tone: 'sage',
  },
];

const journeyDisclaimer =
  'Illustrative. Your actual plan is written at consultation and may be shorter.';

// ---------------------------------------------------------------------------
// TREATMENTS — graded by evidence, grouped by concern. Grades mirror our own
// guides (Sculptra strong, microneedling strong, PRP moderate, fat freezing
// moderate) so the platform never contradicts itself. Grades require named-
// clinician sign-off before launch (flagged).
// ---------------------------------------------------------------------------

const regenerative: Treatment[] = [
  {
    id: 'tx-sculptra',
    title: 'Sculptra — collagen regeneration',
    tldr: 'Poly-L-lactic acid that triggers your own collagen synthesis. Gradual, natural, long-lasting.',
    evidence: 'strong',
    concern: 'regenerative',
    note: 'Rhythm: 2–3 sessions to build, then a top-up every 12–18 months.',
    sessions: '2–3, 4–6 wks apart',
    downtime: '1–2 days',
    cost: '£950',
    guideHref: '/collagen-5#therapy-sculptra',
    bodyHtml: `
      <p>Sculptra doesn't fill — it makes your skin rebuild. Poly-L-lactic acid microparticles trigger fibroblasts to lay down new collagen over months, restoring volume and firmness gradually enough that nobody can point to a "before and after moment". Trial data shows responder rates above 70% at 12 months.</p>
      <p>Peak results arrive 3–6 months after the final session and last around two years.</p>
      <p>${guideLink('/collagen-5#therapy-sculptra')} · ${bookLink()}</p>
    `,
  },
  {
    id: 'tx-profhilo',
    title: 'Profhilo & Profhilo Structura',
    tldr: 'Injectable hyaluronic acid that remodels skin quality; Structura adds gentle volume to cheeks and jawline.',
    evidence: 'moderate',
    concern: 'regenerative',
    note: 'Rhythm: a 2-session course 4 weeks apart, then every 6–9 months.',
    sessions: '2, 4 wks apart',
    downtime: 'Same day',
    cost: '£490',
    bodyHtml: `
      <p>Profhilo is a bio-remodeller: ultra-pure hyaluronic acid that spreads through the skin and stimulates fibroblast activity rather than filling a specific line. The result is hydration, elasticity and a firmness that reads as "well-rested" rather than "treated". The newer Structura formulation targets the fat-supporting layer at the cheeks and jawline.</p>
      <p>Evidence is graded moderate: good clinical studies exist, though fewer and smaller than for retinoids or biostimulators.</p>
      <p>${bookLink()}</p>
    `,
  },
  {
    id: 'tx-skin-booster',
    title: 'Skin boosters',
    tldr: 'Micro-injected hyaluronic acid for deep hydration, texture and elasticity.',
    evidence: 'moderate',
    concern: 'regenerative',
    note: 'Rhythm: courses, typically refreshed every 6–9 months.',
    sessions: '1–3',
    downtime: 'Same day',
    cost: '£490',
    bodyHtml: `
      <p>Skin boosters place small deposits of hyaluronic acid across the treatment area to hydrate from within and nudge collagen production. They suit dull, dehydrated or crepey skin — the goal is quality, not volume.</p>
      <p>${bookLink()}</p>
    `,
  },
  {
    id: 'tx-prp',
    title: 'PRP rejuvenation (face)',
    tldr: 'Your own platelet-rich plasma re-injected to deliver growth factors — texture, tone and fine lines.',
    evidence: 'moderate',
    concern: 'regenerative',
    note: 'Rhythm: a series of 2–3, then 1–2 maintenance sessions a year.',
    sessions: '2–3',
    downtime: '1–2 days',
    cost: '£480',
    guideHref: '/collagen-5#therapy-microneedling-prp',
    bodyHtml: `
      <p>Blood is drawn, spun to concentrate platelets and growth factors, and returned to the skin. PRP's evidence base is genuinely moderate — good results in studies for texture and fine lines, with variability that depends on preparation method and the individual.</p>
      <p>${guideLink('/collagen-5#therapy-microneedling-prp')} · ${bookLink()}</p>
    `,
  },
  {
    id: 'tx-polynucleotides',
    title: 'Polynucleotides',
    tldr: 'DNA-fragment injectables that signal skin repair — fine lines, under-eyes, early laxity.',
    evidence: 'emerging',
    concern: 'regenerative',
    note: 'Rhythm: a course of 2–3 sessions, refreshed roughly twice a year.',
    sessions: '2–3, 2–4 wks apart',
    downtime: 'Same day – 1 day',
    cost: '£390',
    bodyHtml: `
      <p>Polynucleotides — purified DNA fragments, usually salmon-derived — appear to calm inflammation and stimulate fibroblast repair. Early studies and clinical experience are promising, especially under the eyes, but large randomized trials don't yet exist. We grade them emerging and say so plainly.</p>
      <p>${bookLink()}</p>
    `,
  },
  {
    id: 'tx-exosomes',
    title: 'Exosome therapy (Meta Cell Technology)',
    tldr: 'Their signature treatment. Early science is genuinely exciting; large trials do not exist yet — we say so.',
    evidence: 'emerging',
    concern: 'regenerative',
    note: 'Rhythm: typically a short series, then reviewed within the annual plan.',
    sessions: '1–3',
    downtime: '1–2 days',
    cost: 'from £650',
    bodyHtml: `
      <p>Exosomes are the signalling packets cells use to instruct one another; here they are derived from your own blood using MetaCell Technology and applied to drive regeneration. It is EGP's flagship — and precisely because it is, we grade it honestly: the mechanism is real, early results are striking, and the large controlled trials that would justify a "strong" rating have not been run yet.</p>
      <p>If you want the most-studied option instead, start with Sculptra or microneedling and ask about exosomes at your annual edit.</p>
      <p>${bookLink()}</p>
    `,
  },
  {
    id: 'tx-biofiller',
    title: 'Advanced biofiller',
    tldr: 'An autologous filler made from your own plasma — volume plus regeneration, no synthetic gel.',
    evidence: 'emerging',
    concern: 'regenerative',
    note: 'Rhythm: reviewed at 12 months; longevity data is still maturing.',
    sessions: '1–2',
    downtime: '2–3 days',
    cost: '£1,150',
    bodyHtml: `
      <p>Biofiller is heat-treated plasma from your own blood, re-injected as a natural volumiser with regenerative growth factors. It appeals to clients who want no synthetic material; the trade-off is a younger evidence base and shorter, less predictable longevity than HA fillers.</p>
      <p>${bookLink()}</p>
    `,
  },
];

const skinQuality: Treatment[] = [
  {
    id: 'tx-microneedling',
    title: 'Microneedling',
    tldr: 'Controlled micro-injury that triggers collagen induction — texture, pores, fine lines, scars.',
    evidence: 'strong',
    concern: 'skin-quality',
    note: 'Rhythm: a series of ~3, then 1–2 sessions a year to maintain.',
    sessions: '3, 4 wks apart',
    downtime: '1–3 days',
    cost: '£170',
    guideHref: '/collagen-5#therapy-microneedling',
    bodyHtml: `
      <p>One of the best-evidenced treatments in aesthetics: fine needles create controlled micro-channels, and the wound-healing cascade that follows remodels collagen over weeks. EGP uses a Dermapen device.</p>
      <p>${guideLink('/collagen-5#therapy-microneedling')} · ${bookLink()}</p>
    `,
  },
  {
    id: 'tx-prx',
    title: 'PRX-T33 bio-rejuvenation',
    tldr: 'A TCA-based revitalising peel that works without visibly shedding the epidermis.',
    evidence: 'moderate',
    concern: 'skin-quality',
    note: 'Rhythm: a course of 3–4, typically refreshed seasonally.',
    sessions: '3–4, weekly',
    downtime: 'Same day',
    cost: '£200',
    bodyHtml: `
      <p>PRX-T33 combines trichloroacetic acid with hydrogen peroxide so it stimulates the deeper skin without frosting or peeling the surface — pigmentation, fine lines and scarring with minimal downtime.</p>
      <p>${bookLink()}</p>
    `,
  },
  {
    id: 'tx-peels',
    title: 'Medical skin peels',
    tldr: 'Tailored professional peels — resurfacing with decades of evidence behind it.',
    evidence: 'strong',
    concern: 'skin-quality',
    note: 'Rhythm: single sessions or short courses, usually seasonal.',
    sessions: '1–4',
    downtime: '2–7 days by depth',
    cost: '£200',
    guideHref: '/collagen-5#therapy-chemical-peels',
    bodyHtml: `
      <p>Chemical peels are among the oldest and best-studied resurfacing tools in dermatology. Depth is chosen to match the problem — superficial for glow and tone, deeper for pigmentation and fine lines.</p>
      <p>${guideLink('/collagen-5#therapy-chemical-peels')} · ${bookLink()}</p>
    `,
  },
  {
    id: 'tx-mesotherapy',
    title: 'Injectable mesotherapy',
    tldr: 'Vitamin and antioxidant cocktails micro-injected into the skin. Pleasant — but thinly evidenced.',
    evidence: 'limited',
    concern: 'skin-quality',
    note: 'We grade this limited: enjoy it as a boost, not as a cornerstone.',
    sessions: '1–6',
    downtime: 'Same day',
    cost: '£200',
    bodyHtml: `
      <p>Mesotherapy delivers a cocktail of vitamins, minerals and hyaluronic acid into the superficial skin. Clients often love the immediate glow; controlled evidence for lasting structural change is thin, which is why it sits at the bottom of this list rather than the top of the menu.</p>
      <p>${bookLink()}</p>
    `,
  },
  {
    id: 'tx-signature-facial',
    title: 'Signature deep-cleansing facial',
    tldr: 'The clinic’s 9-step medical facial — the maintenance ritual between treatment phases.',
    concern: 'skin-quality',
    note: 'No evidence grade: this is skin upkeep and pleasure, honestly labelled.',
    sessions: '1h15',
    cost: '£170',
    bodyHtml: `
      <p>A nine-step medical deep-pore cleanse — the most-booked service at EGP and the rhythm-keeper of many clients' plans. It will not rebuild collagen; it will keep skin clean, calm and cared-for between the treatments that do.</p>
      <p>${bookLink()}</p>
    `,
  },
  {
    id: 'tx-hydra-detox',
    title: 'Deep hydra-detox facial',
    tldr: 'A 6-stage hydrafacial-style cleanse, exfoliation and hydration.',
    concern: 'skin-quality',
    note: 'No evidence grade: maintenance, not structural change.',
    sessions: '1h',
    cost: '£210',
    bodyHtml: `
      <p>Six stages of detox, exfoliation and infusion for congested or dull skin. Like all facials, graded as care rather than correction.</p>
      <p>${bookLink()}</p>
    `,
  },
];

const tiredEyes: Treatment[] = [
  {
    id: 'tx-under-eye-meso',
    title: 'Under-eye mesotherapy (Jalupro / NCTF)',
    tldr: 'Revitalising micro-injections for crepey, tired under-eye skin.',
    evidence: 'emerging',
    concern: 'tired-eyes',
    note: 'Rhythm: a course of 2–3, refreshed every 6–9 months.',
    sessions: '2–3',
    downtime: '1–2 days',
    cost: '£159',
    bodyHtml: `
      <p>Skin-booster formulas with amino acids and hyaluronic acid (Jalupro BEAUTIFEYE, Filorga NCTF 135HA) injected superficially under the eye to improve skin quality. Clinical-experience evidence outpaces trial evidence — hence the honest emerging grade.</p>
      <p>${bookLink()}</p>
    `,
  },
  {
    id: 'tx-under-eye-advanced',
    title: 'Advanced under-eye mesotherapy',
    tldr: 'Polynucleotides plus NCTF combined — the regenerative under-eye protocol.',
    evidence: 'emerging',
    concern: 'tired-eyes',
    note: 'Rhythm: a course of 2–3, then reviewed within the annual plan.',
    sessions: '2–3',
    downtime: '1–2 days',
    cost: '£290',
    bodyHtml: `
      <p>Combines the repair-signalling of polynucleotides with the revitalising cocktail of NCTF for the under-eye area — dark circles, hollowing and crepe in one protocol.</p>
      <p>${bookLink()}</p>
    `,
  },
  {
    id: 'tx-tear-trough',
    title: 'Tear-trough filler',
    tldr: 'Hyaluronic acid placed under the eye for hollows and shadows — effective, technique-dependent.',
    evidence: 'moderate',
    concern: 'tired-eyes',
    note: 'Rhythm: lasts ~12 months; reviewed before any repeat.',
    sessions: '1',
    downtime: '2–5 days',
    cost: '£390',
    bodyHtml: `
      <p>Filler under the eye can erase a tired look in one session — and is one of the least forgiving areas to treat, which is why practitioner skill and conservative dosing matter more here than anywhere. Graded moderate: it works, with results that depend heavily on anatomy and technique.</p>
      <p>${bookLink()}</p>
    `,
  },
];

const volumeContour: Treatment[] = [
  {
    id: 'tx-cheek-filler',
    title: 'Cheek & mid-face filler',
    tldr: 'Restores the mid-face volume that supports the whole lower face.',
    evidence: 'strong',
    concern: 'volume-contour',
    note: 'Rhythm: lasts 12–18 months; reviewed annually.',
    sessions: '1',
    downtime: '~2 days',
    cost: '£490',
    priceNote: 'Site shows £450; Fresha £490 — Fresha is the source of truth.',
    guideHref: '/jowls#tx-ha-filler',
    bodyHtml: `
      <p>Restoring cheek volume is often what people actually want when they say "lift": it re-supports the skin above the jawline and softens nasolabial folds from above. HA fillers are among the best-evidenced tools in aesthetics, and fully reversible.</p>
      <p>${guideLink('/jowls#tx-ha-filler')} · ${bookLink()}</p>
    `,
  },
  {
    id: 'tx-jawline-filler',
    title: 'Jawline filler',
    tldr: 'Definition along the jaw — sharpens the line and improves early jowling.',
    evidence: 'strong',
    concern: 'volume-contour',
    note: 'Rhythm: lasts 12–18 months; reviewed annually.',
    sessions: '1',
    downtime: '~2 days',
    cost: '£490',
    guideHref: '/jowls#tx-ha-filler',
    bodyHtml: `
      <p>Structural filler along the mandible restores definition and visually lifts early jowls. For moderate or advanced laxity, see our jowls guide for where filler stops and energy devices or surgery begin — honest triage is the point of the grading.</p>
      <p>${guideLink('/jowls', 'Our full jowls guide')} · ${bookLink()}</p>
    `,
  },
  {
    id: 'tx-lip-filler',
    title: 'Lip enhancement & hydration',
    tldr: 'Natural-proportion lip filler (£290) or hydration-only treatment (£190).',
    evidence: 'strong',
    concern: 'volume-contour',
    note: 'Rhythm: 6–12 months depending on product and metabolism.',
    sessions: '1',
    downtime: '1–3 days',
    cost: 'from £190',
    bodyHtml: `
      <p>EGP's signature here is restraint — reviewers repeatedly use the word "natural". Lip hydration treats texture and dryness with minimal volume; enhancement restores proportion.</p>
      <p>${bookLink()}</p>
    `,
  },
  {
    id: 'tx-fold-filler',
    title: 'Nasolabial & marionette filler',
    tldr: 'Softens nose-to-mouth and mouth-corner lines.',
    evidence: 'strong',
    concern: 'volume-contour',
    note: 'Rhythm: 9–15 months; often better addressed from the cheeks first.',
    sessions: '1',
    downtime: '~2 days',
    cost: '£290',
    guideHref: '/jowls#cause-volume-loss',
    bodyHtml: `
      <p>Direct filling of these folds works — though a good practitioner often starts higher, since deflated cheeks are frequently the real cause. Expect that conversation at consultation; it is a sign of someone treating the face, not the line.</p>
      <p>${guideLink('/jowls#cause-volume-loss', 'Why these folds deepen')} · ${bookLink()}</p>
    `,
  },
  {
    id: 'tx-pbserum',
    title: 'PB Serum chin contouring',
    tldr: 'Enzymatic treatment for fullness under the chin and skin tightening.',
    evidence: 'emerging',
    concern: 'volume-contour',
    note: 'Rhythm: a short course, reviewed at 3 months.',
    sessions: '1–3',
    downtime: '2–4 days',
    cost: '£290',
    guideHref: '/jowls#tx-kybella',
    bodyHtml: `
      <p>An injectable enzyme treatment that softens submental fullness and tightens skin. A newer alternative to deoxycholic-acid injections — promising, with an evidence base still maturing.</p>
      <p>${guideLink('/jowls#tx-kybella', 'Injectable fat reduction in our jowls guide')} · ${bookLink()}</p>
    `,
  },
  {
    id: 'tx-dissolve',
    title: 'Filler correction & dissolving',
    tldr: 'We also correct work you regret. Because it uses a prescription-only medicine, it is assessed face-to-face — never sold from a price list.',
    concern: 'volume-contour',
    pom: true,
    note: 'A safety service, not a sale. Consultation first, always.',
    sessions: '1–2',
    downtime: '1–2 days',
    bodyHtml: `
      <p>One of the most reassuring services a clinic can offer: the ability to undo. Old or migrated hyaluronic-acid filler — placed elsewhere or here — can be corrected, restoring the canvas before any new plan is written. The medicine used is prescription-only, so UK law requires a face-to-face assessment first; that is where suitability and cost are discussed.</p>
      <p><a href="${booking.consultation}" target="_blank" rel="noopener nofollow" data-cta="book-consult-dissolve">Book a consultation →</a></p>
    `,
  },
];

const linesExpression: Treatment[] = [
  {
    id: 'tx-expression-lines',
    title: 'Softening expression lines',
    tldr: 'Several options exist, including prescription-only medicines that UK law does not allow us to advertise. What suits you is decided face-to-face at consultation.',
    concern: 'lines-wrinkles',
    pom: true,
    note: 'Prescription treatments are never sold online or prescribed remotely.',
    bodyHtml: `
      <p>Forehead lines, frown lines and crow's feet have a range of answers — from skin-quality treatments that improve the canvas, to prescription-only medicines. UK law (rightly) prohibits advertising prescription-only medicines to the public, so which option suits you — along with specifics and pricing — is discussed at a face-to-face consultation with Eli or Galina.</p>
      <p>What we can say here: the consultation is unhurried, the assessment covers your face at rest and in motion, and "no, not yet" is a real answer you might hear.</p>
      <p><a href="${booking.consultation}" target="_blank" rel="noopener nofollow" data-cta="book-consult-lines">Book a consultation for lines and wrinkles →</a></p>
    `,
  },
];

const bodyHairLaser: Treatment[] = [
  {
    id: 'tx-laser-hair',
    title: 'Laser hair removal',
    tldr: 'The best-evidenced treatment in this group — permanent reduction over a course of 8.',
    evidence: 'strong',
    concern: 'body-hair-laser',
    note: 'Rhythm: a course of 8, then occasional top-ups.',
    sessions: '8, 4–6 wks apart',
    downtime: 'Same day',
    cost: 'packages from £288',
    bodyHtml: `
      <p>Decades of evidence and millions of treated patients: laser hair removal delivers permanent hair reduction across a staged course, with occasional maintenance after.</p>
      <p>${bookLink()}</p>
    `,
  },
  {
    id: 'tx-ultrasound-lift',
    title: 'Ultrasound lift & tighten (face)',
    tldr: 'Focused ultrasound heat to stimulate collagen contraction and tightening.',
    evidence: 'moderate',
    concern: 'body-hair-laser',
    note: 'Rhythm: a short series, repeated yearly.',
    sessions: '1–3',
    downtime: 'Same day',
    cost: '£190',
    guideHref: '/jowls#tx-ultrasound',
    bodyHtml: `
      <p>Ultrasound energy heats the deeper skin layers to trigger collagen contraction and remodelling — a no-downtime option for early laxity. See our jowls guide for where ultrasound sits against RF microneedling and surgical options.</p>
      <p>${guideLink('/jowls#tx-ultrasound')} · ${bookLink()}</p>
    `,
  },
  {
    id: 'tx-fat-freezing',
    title: 'Fat freezing (body)',
    tldr: 'Cryolipolysis kills fat cells in targeted pockets — gradual, measurable, modest.',
    evidence: 'moderate',
    concern: 'body-hair-laser',
    note: 'Rhythm: 1–2 sessions per area; results settle over 2–3 months.',
    sessions: '1–2',
    downtime: 'Same day',
    cost: 'from £150',
    guideHref: '/jowls#tx-fat-freezing',
    bodyHtml: `
      <p>Controlled cooling crystallises fat cells, which the body clears over the following weeks. Evidence is moderate and expectations should be too: think contouring of stubborn pockets, not weight loss.</p>
      <p>${guideLink('/jowls#tx-fat-freezing')} · ${bookLink()}</p>
    `,
  },
  {
    id: 'tx-rf-body',
    title: 'RF & ultrasound body contouring',
    tldr: 'Energy-based skin tightening and contouring for the body.',
    evidence: 'emerging',
    concern: 'body-hair-laser',
    note: 'Rhythm: a series of 4–6 sessions.',
    sessions: '4–6, weekly',
    downtime: 'Same day',
    cost: '£250',
    bodyHtml: `
      <p>Radio-frequency and ultrasound combined for body skin tightening. Pleasant and no-downtime; body-contouring evidence is younger and more variable than facial applications, hence the emerging grade.</p>
      <p>${bookLink()}</p>
    `,
  },
  {
    id: 'tx-prp-hair',
    title: 'PRP for hair loss',
    tldr: 'Platelet growth factors injected into the scalp to slow shedding and thicken existing hair.',
    evidence: 'moderate',
    concern: 'body-hair-laser',
    note: 'Rhythm: a series of 3–4, then maintenance every 4–6 months.',
    sessions: '3–4, monthly',
    downtime: 'Same day',
    cost: '£199',
    bodyHtml: `
      <p>Meta-analyses show PRP can increase hair density in androgenetic hair loss, with results that need maintaining. A reasonable, evidence-aware option before or alongside medical therapy.</p>
      <p>${bookLink()}</p>
    `,
  },
  {
    id: 'tx-exosomes-hair',
    title: 'Exosome therapy for hair',
    tldr: 'Regenerative signalling applied to the scalp — early days, honestly labelled.',
    evidence: 'emerging',
    concern: 'body-hair-laser',
    note: 'Rhythm: a short series, reviewed at 6 months.',
    sessions: '2–3',
    downtime: 'Same day',
    cost: '£450',
    bodyHtml: `
      <p>The same regenerative logic as facial exosome therapy, pointed at follicles. Early evidence only — if budget forces a choice, PRP has the deeper data today.</p>
      <p>${bookLink()}</p>
    `,
  },
];

const treatmentGroups: TreatmentGroup[] = [
  {
    id: 'regenerative',
    title: 'Regenerative & biostimulators',
    intro:
      'The clinic’s centre of gravity: treatments that make your skin rebuild itself rather than masking what it has lost.',
    mediaTone: 'rose',
    treatments: regenerative,
  },
  {
    id: 'skin-quality',
    title: 'Skin quality & facials',
    intro: 'From the best-evidenced treatment in aesthetics to honest pleasure — clearly told apart.',
    mediaTone: 'gold',
    treatments: skinQuality,
  },
  {
    id: 'tired-eyes',
    title: 'Tired eyes',
    intro: 'The under-eye area gets its own protocols — and its own honest grades.',
    treatments: tiredEyes,
  },
  {
    id: 'volume-contour',
    title: 'Contour & volume',
    intro:
      'Hyaluronic-acid fillers: well-evidenced, reversible, and at their best when someone treats the face rather than the line.',
    mediaTone: 'gold',
    treatments: volumeContour,
  },
  {
    id: 'lines-wrinkles',
    title: 'Lines & expression',
    intro: 'The one category UK law does not allow us to detail in public — here is how it works instead.',
    treatments: linesExpression,
  },
  {
    id: 'body-hair-laser',
    title: 'Body, hair & laser',
    intro: 'Beyond the face — graded with the same ruler.',
    treatments: bodyHairLaser,
  },
];

// ---------------------------------------------------------------------------
// FOLLOW-UP PROTOCOLS — the journey's connective tissue. One protocol per
// treatment class (Playbook §4/§9); every treatment id is mapped via
// `appliesTo`. patientCueFor() derives the public "what comes next" cue from
// this single source, so the public page and the practitioner present view can
// never drift apart. POM classes stay consultation-only in public.
// ---------------------------------------------------------------------------

export const followUpProtocols: FollowUpProtocol[] = [
  {
    id: 'biostimulator',
    label: 'Biostimulators (Sculptra)',
    appliesTo: ['tx-sculptra'],
    patientCue: 'A 2–3 session course, then a top-up every 12–18 months',
    chain: [
      { when: 'Day 0', what: 'First of 2–3 sessions' },
      { when: 'Wk 4–6', what: 'Next session(s)' },
      { when: 'Mo 3–6', what: 'Your own collagen peaks' },
      { when: 'Mo 12–18', what: 'Top-up' },
    ],
    sentence: '“Your collagen keeps building for months after the last session — we’ll see the real result in spring.”',
  },
  {
    id: 'bio-remodeller',
    label: 'Bio-remodellers (Profhilo, skin boosters)',
    appliesTo: ['tx-profhilo', 'tx-skin-booster'],
    patientCue: '2 sessions a month apart, then maintain every 6–9 months',
    chain: [
      { when: 'Day 0', what: 'Session 1' },
      { when: 'Wk 4', what: 'Session 2 locks it in' },
      { when: 'Wk 8', what: 'Review' },
      { when: 'Mo 6–9', what: 'Maintain' },
    ],
    sentence: '“The second session a month from now is what locks the result in.”',
  },
  {
    id: 'ha-filler',
    label: 'HA fillers',
    appliesTo: ['tx-cheek-filler', 'tx-jawline-filler', 'tx-lip-filler', 'tx-fold-filler', 'tx-tear-trough'],
    patientCue: 'Reviewed at 2 weeks, then reassessed once a year',
    chain: [
      { when: 'Day 0', what: 'Treat' },
      { when: 'Wk 2', what: 'Review & refine' },
      { when: 'Mo 12', what: 'Annual reassessment' },
    ],
    sentence: '“HA is reversible — we review at two weeks and reassess yearly; dissolving is always on the menu.”',
  },
  {
    id: 'energy-microneedling',
    label: 'Energy & microneedling (also peels, laser, RF, fat-freezing)',
    appliesTo: ['tx-microneedling', 'tx-prx', 'tx-peels', 'tx-ultrasound-lift', 'tx-fat-freezing', 'tx-rf-body', 'tx-laser-hair'],
    patientCue: 'A series of ~3, then 1–2 maintenance sessions a year',
    chain: [
      { when: 'Day 0', what: 'Session 1 of ~3' },
      { when: 'Every few wks', what: 'Build the series' },
      { when: 'After series', what: 'Review' },
      { when: '1–2×/yr', what: 'Maintain' },
    ],
    sentence: '“Each session builds on the last — three is where the structure changes.”',
  },
  {
    id: 'regenerative-flagship',
    label: 'Regenerative flagship (exosomes, PRP, polynucleotides)',
    appliesTo: ['tx-prp', 'tx-polynucleotides', 'tx-exosomes', 'tx-biofiller', 'tx-under-eye-meso', 'tx-under-eye-advanced', 'tx-pbserum', 'tx-prp-hair', 'tx-exosomes-hair'],
    patientCue: 'A short series, reviewed at 3 months, then revisited yearly',
    chain: [
      { when: 'Day 0', what: 'Short series begins' },
      { when: 'Mo 3', what: 'Review' },
      { when: 'Mo 12', what: 'Fold into the annual edit' },
    ],
    sentence: '“The science here is young — we under-promise, review at month three, and fold it into your yearly plan.”',
  },
  {
    id: 'facial',
    label: 'Facials — the rhythm-keeper',
    appliesTo: ['tx-signature-facial', 'tx-hydra-detox', 'tx-mesotherapy'],
    patientCue: 'A standing ritual — monthly to quarterly, between treatment phases',
    chain: [
      { when: 'Monthly–quarterly', what: 'Standing ritual between phases' },
    ],
    sentence: '“This is what keeps everything else looking its best between phases.”',
  },
  {
    id: 'expression-pom',
    label: 'Expression lines (prescription-only)',
    appliesTo: ['tx-expression-lines'],
    pom: true,
    patientCue: 'Discussed at your consultation — never sold online',
    chain: [
      { when: 'In person', what: 'Consultation-led; assessed face-to-face' },
      { when: 'Privately', what: 'Specifics, suitability & rhythm discussed — not advertised' },
    ],
    sentence: 'Consultation only. Never name the medicine, price it, or state its interval in public (Reg 284 HMR 2012; CAP 12.12).',
  },
  {
    id: 'pom-correction',
    label: 'Filler correction (prescription-only)',
    appliesTo: ['tx-dissolve'],
    pom: true,
    patientCue: 'Assessed at consultation first',
    chain: [
      { when: 'In person', what: 'Consultation-led; the medicine is prescription-only' },
      { when: 'Privately', what: 'Suitability & cost discussed face-to-face' },
    ],
    sentence: 'Consultation only — a safety service, never sold from a price list.',
  },
];

/** treatment id → its public "what comes next" cue (single source: the protocols above). */
const _patientCueByTx: Record<string, string> = Object.fromEntries(
  followUpProtocols.flatMap((p) => p.appliesTo.map((id) => [id, p.patientCue]))
);
export const patientCueFor = (treatmentId: string): string | undefined => _patientCueByTx[treatmentId];
export const protocolFor = (treatmentId: string): FollowUpProtocol | undefined =>
  followUpProtocols.find((p) => p.appliesTo.includes(treatmentId));

// ---------------------------------------------------------------------------
// EDITORIAL PICKS — where journeys begin.
// ---------------------------------------------------------------------------

const picks: EditorialPick[] = [
  {
    href: '#journey',
    kind: 'Start here',
    title: 'The consultation',
    blurb:
      '30 minutes, digital skin analysis, and a written First-Year Map. £50, fully redeemed against your first treatment.',
    tone: 'sage',
  },
  {
    href: '#tx-profhilo',
    kind: 'Skin quality',
    title: 'Profhilo + polynucleotides — £490',
    blurb: 'The dual-action skin booster: deep hydration plus repair signalling, as a 2-session course.',
    tone: 'gold',
  },
  {
    href: '#tx-exosomes',
    kind: 'Regenerative',
    title: 'Exosome therapy — from £650',
    blurb: 'Their signature regenerative treatment — graded honestly as emerging, and we explain why.',
    tone: 'rose',
  },
  {
    href: '#tx-signature-facial',
    kind: 'Maintenance ritual',
    title: 'Signature facial — £170',
    blurb: 'The 9-step medical facial that keeps clients in rhythm between treatment phases.',
    tone: 'bone',
  },
];

// ---------------------------------------------------------------------------
// GALLERY — placeholder visuals until consented photography is supplied.
// ---------------------------------------------------------------------------

const gallery: GalleryCase[] = [
  {
    id: 'case-lips',
    title: 'Natural lip enhancement',
    date: 'February 2026',
    whatWasDone: 'Restored central volume, improved definition, maintained natural proportions.',
    evidence: 'strong',
    journeyNote: 'This client is on a 6-month maintenance rhythm.',
    mediaLabel: 'Lip enhancement — before / after',
    consentOnFile: false,
  },
  {
    id: 'case-rebalancing',
    title: 'Facial rebalancing & under-eye restoration',
    whatWasDone: 'Mid-face support rebuilt first, then under-eye hollows treated — the order matters.',
    evidence: 'moderate',
    journeyNote: 'Treated across three visits on a written plan.',
    mediaLabel: 'Facial rebalancing — before / after',
    consentOnFile: false,
  },
  {
    id: 'case-regenerative',
    title: 'Regenerative skin-quality course',
    whatWasDone: 'Polynucleotide series followed by Profhilo — texture and firmness over four months.',
    evidence: 'emerging',
    journeyNote: 'Month 4 of a Regenerative Year.',
    mediaLabel: 'Skin quality course — before / after',
    consentOnFile: false,
  },
];

const galleryDisclaimer =
  'Results vary. All photographs are published with written, dated patient consent and are unedited.';

// ---------------------------------------------------------------------------
// REVIEWS — genuine Fresha reviews; POM mentions excerpted, originals on file.
// ---------------------------------------------------------------------------

const reviews: Review[] = [
  {
    quote:
      'I have been a client of EGP Aesthetics for over three years… Eli and Galina demonstrate exceptional professionalism and approachability, consistently taking the time to understand my individual concerns and tailor each treatment accordingly.',
    author: 'Ivelina V.',
    source: 'Fresha',
    date: 'August 2025',
    relationship: 'Client 3+ years',
    excerpted: true,
  },
  {
    quote:
      'I’ve been a client of EGP for years, Eli and Galina have always made sure to customise each treatment to what my skin needs at the time… my skin has improved so much since becoming a client of theirs.',
    author: 'Laura B.',
    source: 'Fresha',
    date: 'December 2024',
    relationship: 'Long-term client',
    excerpted: true,
  },
  {
    quote:
      'Best in town! Knowledgeable, well informed and attentive. Both Galina and Eli put their heart into every client, every treatment. Never pushy, always gentle.',
    author: 'Elvira P.',
    source: 'Fresha',
    date: 'March 2025',
  },
];

const reviewsAllHref = FRESHA;

// ---------------------------------------------------------------------------
// BELONGING — no urgency, no countdowns, no discount mechanics (CAP 1.3).
// ---------------------------------------------------------------------------

const belonging = [
  {
    id: 'belong-membership',
    title: 'Memberships',
    blurb:
      'For clients in a rhythm: membership plans through Fresha spread the cost of a maintenance year. Details at consultation.',
    href: booking.plans,
    cta: 'Ask about memberships',
  },
  {
    id: 'belong-consult',
    title: 'The consultation that pays for itself',
    blurb:
      '£50, fully redeemed against your first treatment — so the only thing a careful decision costs you is half an hour.',
    href: booking.consultation,
    cta: 'Book a consultation',
  },
  {
    id: 'belong-gift',
    title: 'Gift cards',
    blurb: 'A journey can also begin as a gift. Digital gift cards are available through Fresha.',
    href: booking.giftCards,
    cta: 'Gift cards on Fresha',
  },
];

// ---------------------------------------------------------------------------
// FAQ — honest answers, in the drawer format.
// ---------------------------------------------------------------------------

const faqs: Faq[] = [
  {
    id: 'faq-how-often',
    question: 'How often will I actually need to come back?',
    short: 'Your biology decides',
    bodyHtml: `
      <p>Each treatment has a biological interval — bio-remodellers hold for 6–9 months, biostimulators for 12–18 months after the initial series, and skin-quality work builds over a short course. Your First-Year Map sets the dates against those mechanisms, and the <a href="#maintenance">maintenance calendar</a> on this page shows the science behind each one.</p>
    `,
  },
  {
    id: 'faq-look-done',
    question: 'Will I look "done"?',
    short: 'No — that is the philosophy',
    bodyHtml: `
      <p>The clinic's stated philosophy is regenerative and respectful, never aggressive or trend-driven. The treatment menu reflects it: the centre of gravity is skin quality and gradual collagen rebuilding, not volume. Reviewers' most repeated word is "natural".</p>
    `,
  },
  {
    id: 'faq-consultation',
    question: 'What happens at the consultation?',
    short: '30 min · analysis · written plan',
    bodyHtml: `
      <p>Thirty minutes with Eli or Galina: a conversation about what you want, digital skin analysis (pigmentation, sun damage, hydration, sensitivity), and a written First-Year Map you take home. The £50 fee is fully redeemed against your first treatment. Face-to-face assessment is legally required before any prescription treatment — EGP never prescribes remotely.</p>
    `,
  },
  {
    id: 'faq-book-online',
    question: 'Can I just book a wrinkle treatment online?',
    short: 'Not the prescription kind',
    bodyHtml: `
      <p>Facials, peels, microneedling and similar treatments — yes, book directly. Prescription-only medicines for expression lines legally require a face-to-face assessment first, so that path always starts with the consultation. It is a feature, not friction: it is how you end up with the right treatment instead of the requested one.</p>
    `,
  },
  {
    id: 'faq-hurt',
    question: 'Does it hurt? Is there downtime?',
    short: 'Honest ranges per treatment',
    bodyHtml: `
      <p>It varies, and we publish the honest range on every treatment row above — from same-day facials to two to four days of swelling after enzymatic contouring. Numbing cream is used where it helps. No injectable treatment is risk-free: bruising, swelling and tenderness are common and temporary; rarer risks are covered at consultation before you consent.</p>
    `,
  },
  {
    id: 'faq-cost',
    question: 'What does a first year cost?',
    short: 'Most journeys: £500–£2,500',
    bodyHtml: `
      <p>Indicatively: an under-eye plan from around £900 a year, a skin-quality plan around £1,200, the full regenerative flagship from around £2,000. A single facial is £170. Your actual plan — written at consultation — may be shorter or smaller than any of these; prices come from the clinic's live Fresha listing.</p>
    `,
  },
  {
    id: 'faq-bad-filler',
    question: 'I had filler elsewhere and hate it. Can you fix it?',
    short: 'Yes — at consultation',
    bodyHtml: `
      <p>Hyaluronic-acid filler can be corrected, whoever placed it. EGP offers a <a href="#tx-dissolve">filler-correction service</a> that begins with an assessment — the medicine involved is prescription-only, so it is never sold online. We assess first, correct, let it settle, and only then discuss whether to re-treat.</p>
    `,
  },
  {
    id: 'faq-teens',
    question: 'Do you treat teenagers?',
    short: 'Skin health only',
    bodyHtml: `
      <p>There is a dedicated Teen Facial (£84) for congestion, breakouts and sensitive skin. Cosmetic injectables are not offered to anyone under 18 — it is the law (Botulinum Toxin and Cosmetic Fillers (Children) Act 2021), and it is also just right.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// REFERENCES + COMPLIANCE
// ---------------------------------------------------------------------------

const references =
  'Treatment-interval claims draw on published pharmacology and clinical literature: poly-L-lactic acid collagen-synthesis trials and consensus protocols, hyaluronic-acid bio-remodelling studies, microneedling and chemical-peel reviews, and age-related collagen-decline data. Evidence grades follow the same rubric as every DeAging Europe guide and are reviewed against the linked guides for consistency.';

const complianceFooterHtml = `
  <p>${meta.legalName}, Companies House ${meta.companyNo}. Prescription-only medicines cannot be advertised to the public in the UK; nothing on this page is an offer of a prescription treatment — suitability is determined at a face-to-face consultation. Prices are taken from the clinic's Fresha listing and may change. Results vary. Produced by DeAging Europe in partnership with the clinic.</p>
`;

// ---------------------------------------------------------------------------
// VERIFICATION FLAGS — must be empty before launch. The page warns at build
// time while any remain.
// ---------------------------------------------------------------------------

const verificationFlags: string[] = [
  'Consultation offer conflict: site lists a free 15-min discovery consult, Fresha a £50 redeemable consultation — page standardises on £50-redeemable; confirm with clinic.',
  'Galina: NMC registration/PIN not published anywhere — page avoids prescriber framing; verify registration before adding any.',
  '"Award-Winning", "1000+ treatments" and "100% satisfaction" claims are unsubstantiated — excluded until the clinic can evidence them (CAP 3.1/3.7).',
  'Three conflicting opening-hour sets (site footer / site JSON-LD / Fresha) — page uses Fresha; confirm with clinic.',
  'Evidence grades require named-clinician sign-off before launch (CAP 12.1).',
  'Per-service Fresha deep links, membership and gift-card URLs unverified — all CTAs currently land on the venue page; capture share-links from the Fresha dashboard.',
  'Cheek/mid-face filler price: site £450 vs Fresha £490 — using Fresha.',
  'Gallery: written, dated consent must be on file before real photography replaces any placeholder (CAP 3.45–3.50).',
  'PB Serum chin contouring: confirm UK regulatory classification (medical device vs POM) before keeping its public price and booking link; specific enzyme names removed from the copy pending that check.',
];

// ---------------------------------------------------------------------------
// EXPORT
// ---------------------------------------------------------------------------

export const clinic: ClinicData = {
  slug: 'egp',
  meta,
  booking,
  keyTakeaways,
  practitioners,
  continuityPromise,
  journeyStages,
  journeyDrawerIds,
  maintenance,
  signatureJourneys,
  journeyDisclaimer,
  treatmentGroups,
  picks,
  gallery,
  galleryDisclaimer,
  reviews,
  reviewsAllHref,
  belonging,
  faqs,
  references,
  complianceFooterHtml,
  verificationFlags,
};

export const allTreatments = (): Treatment[] => treatmentGroups.flatMap((g) => g.treatments);
