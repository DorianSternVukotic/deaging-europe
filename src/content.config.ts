import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localeSchema = z.enum(['en', 'bg', 'de', 'fr', 'it', 'es']);

const problems = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/problems',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    locale: localeSchema,
    slug: z.string(),
    bodyArea: z.string(),
    image: z.string(),
    summary: z.string(),
    solutions: z.array(
      z.object({
        name: z.string(),
        kind: z.enum(['ingredient', 'treatment', 'device', 'lifestyle']),
        description: z.string(),
        productSlug: z.string().optional(),
        evidence: z.enum(['strong', 'moderate', 'emerging']).default('moderate'),
      })
    ),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

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
    image: z.string(),
    tagline: z.string(),
    price: z.string().optional(),
    currency: z.string().default('EUR'),
    buyUrl: z.string(),
    affiliateDisclosure: z.string().optional(),
    info: z.array(infoBlock),
    doctor: z.object({
      name: z.string(),
      title: z.string(),
      image: z.string(),
      bio: z.string(),
      studies: z.array(
        z.object({
          title: z.string(),
          journal: z.string(),
          year: z.number(),
          summary: z.string(),
          url: z.string().optional(),
        })
      ),
    }),
    testimonials: z.array(
      z.object({
        name: z.string(),
        location: z.string().optional(),
        rating: z.number().min(1).max(5),
        body: z.string(),
        image: z.string().optional(),
      })
    ),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

export const collections = { problems, products };
