import { defineCollection, z } from 'astro:content';

const eventiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
    description: z.string(),
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
    instagram: z.string().optional(),
    facebook: z.string().optional(),
  }),
});

export const collections = {
  eventi: eventiCollection,
  pages: pagesCollection,
  settings: settingsCollection,
};
