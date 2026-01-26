import { defineCollection, z } from 'astro:content';

const eventiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    year: z.string(),
    location: z.string().optional(),
    image: z.string(),
    description: z.string(),
    isPast: z.boolean().default(false),
    published: z.boolean().default(true),
  }),
});

const shopCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    price: z.number(),
    image: z.string(),
    buyLink: z.string(),
    published: z.boolean().default(true),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    email: z.string().optional(),
  }),
});

const settingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    email: z.string(),
    themeColor: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  eventi: eventiCollection,
  shop: shopCollection,
  pages: pagesCollection,
  settings: settingsCollection,
};
