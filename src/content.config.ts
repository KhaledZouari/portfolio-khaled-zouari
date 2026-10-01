import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    locale: z.enum(['fr', 'en']),
    project: z.enum([
      'production-atelier',
      'carpooling',
      'edutrack',
      'minidrawfx',
    ]),
    description: z.string(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { caseStudies };
