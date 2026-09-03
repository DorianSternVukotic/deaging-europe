export const LOCALES = ['en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
};

export const HREFLANG: Record<Locale, string> = {
  en: 'en',
};

type Dict = Record<string, string>;

export const ui: Record<Locale, Dict> = {
  en: {
    'nav.products': 'Products',
    'nav.science': 'Science',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'home.hero.eyebrow': 'Anti-aging, evidence first',
    'home.hero.title': 'Look and live younger, backed by science.',
    'home.hero.sub': 'A library of protocols, ingredients and devices that actually move the needle. Curated by clinicians. Updated as the evidence evolves.',
    'problem.bodyArea': 'Body area',
    'product.buy': 'Buy now',
    'product.affiliate': 'This page contains affiliate links. We may earn a commission at no extra cost to you.',
    'product.doctor.title': 'Reviewed by',
    'product.studies.title': 'The science',
    'product.testimonials.title': 'What people say',
    'product.buyAt': 'Buy at',
    'product.perServing': 'per serving',
    'product.servings': 'servings',
    'product.vat': 'incl. VAT',
    'product.ledger': 'Evidence behind each active',
    'product.actives.eyebrow': "What's inside",
    'product.actives.title': 'Four actives, four named suppliers',
    'product.actives.perServing': 'Per serving',
    'product.actives.guide': 'In the guide',
    'product.facts.title': 'The label, read honestly',
    'product.facts.serving': 'Serving size',
    'product.facts.servings': 'Servings per pack',
    'product.caveats.title': 'Read before you buy',
    'product.studies.eyebrow': 'Evidence',
    'product.readStudy': 'Read the study',
    'product.guide': 'Read the full collagen guide',
    'product.howto.title': 'How to take it',
    'product.timeline.title': 'What to expect, and when',
    'product.variants.title': 'Which one?',
    'product.variants.flavour': 'Flavour',
    'product.variants.source': 'Collagen source',
    'product.variants.pack': 'Pack',
    'product.variants.price': 'Price',
    'product.quotes.title': 'From buyers on the shop',
    'product.faq.title': 'Questions',
    'product.evidence.strong': 'Strong',
    'product.evidence.moderate': 'Moderate',
    'product.evidence.emerging': 'Emerging',
    'product.evidence.limited': 'Limited',
    'footer.tagline': 'The evidence-based anti-aging hub for Europe.',
    'footer.disclaimer': 'Information here is educational and not medical advice. Consult a qualified clinician.',
  },
};
