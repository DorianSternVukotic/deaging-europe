import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localeSchema = z.enum(['en', 'bg', 'de', 'fr', 'it', 'es']);
const evidenceSchema = z.enum(['strong', 'moderate', 'emerging', 'limited']);

// Free-form editorial blocks (optional). Product pages are built from the
// structured fields below; `info` is kept for one-off extra sections.
const infoBlock = z.discriminatedUnion('type', [
  z.object({ type: z.literal('paragraph'), title: z.string().optional(), body: z.string() }),
  z.object({ type: z.literal('image'), src: z.string(), alt: z.string(), caption: z.string().optional() }),
  z.object({ type: z.literal('video'), src: z.string(), title: z.string().optional() }),
  z.object({
    type: z.literal('table'),
    title: z.string().optional(),
    headers: z.array(z.string()),
    rows: z.array(z.array(z.string())),
  }),
  z.object({ type: z.literal('list'), title: z.string().optional(), items: z.array(z.string()) }),
]);

const products = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/products',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    locale: localeSchema,
    slug: z.string(),
    brand: z.string(),
    /** Where the brand is based — shown under the brand eyebrow. */
    origin: z.string().optional(),
    /** Card image (homepage) and default og:image. */
    image: z.string(),
    /** Product shots for the hero gallery; first is the default. */
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    /** One-liner used on cards and as the meta description fallback. */
    tagline: z.string(),
    /** Two or three plain sentences under the title: what it is, who makes it, what one serving is. */
    whatItIs: z.string().optional(),
    /** Headline price (the standard one-time pack). */
    price: z.string().optional(),
    currency: z.string().default('EUR'),
    /** Servings in the headline pack — drives the per-serving price. */
    servings: z.number().optional(),
    priceNote: z.string().optional(),
    buyUrl: z.string(),
    /** Shop the buy button sends people to, e.g. "aeterna.bg". */
    shopName: z.string().optional(),
    subscription: z.object({ price: z.string(), note: z.string() }).optional(),
    affiliateDisclosure: z.string().optional(),
    /** Label claims, verbatim from the pack ("Non-GMO", "Sugar-free"…). */
    badges: z.array(z.string()).default([]),
    variants: z
      .array(
        z.object({
          name: z.string(),
          /** Short label for the variant pills. */
          short: z.string(),
          flavour: z.string(),
          source: z.string(),
          pack: z.string(),
          servings: z.number(),
          price: z.string(),
          url: z.string(),
        })
      )
      .default([]),
    /** The active ingredients, each graded with the site's evidence tiers. */
    actives: z
      .array(
        z.object({
          name: z.string(),
          brand: z.string().optional(),
          supplier: z.string(),
          country: z.string(),
          perServing: z.string(),
          role: z.string(),
          finding: z.string(),
          evidence: evidenceSchema,
          /** Section id in the collagen guide to link to. */
          guideId: z.string().optional(),
        })
      )
      .default([]),
    /** Nutrition-label style panel. */
    facts: z
      .object({
        servingSize: z.string(),
        servingsPerPack: z.string(),
        rows: z.array(z.object({ label: z.string(), amount: z.string(), note: z.string().optional() })),
        footnotes: z.array(z.string()).default([]),
      })
      .optional(),
    /** Plain statements of what the product is not / won't do. */
    caveats: z.array(z.object({ title: z.string(), body: z.string() })).default([]),
    studies: z
      .array(
        z.object({
          title: z.string(),
          journal: z.string(),
          year: z.number(),
          summary: z.string(),
          url: z.string().optional(),
          evidence: evidenceSchema,
          tag: z.string().optional(),
        })
      )
      .default([]),
    howTo: z
      .object({
        steps: z.array(z.string()),
        timeline: z.array(z.object({ when: z.string(), what: z.string() })),
      })
      .optional(),
    /** Buyer reviews quoted from the shop, with a note on provenance. */
    quotes: z.array(z.object({ name: z.string(), body: z.string(), source: z.string().optional() })).default([]),
    quotesNote: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    info: z.array(infoBlock).default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

export const collections = { products };
