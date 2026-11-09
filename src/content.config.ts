import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Case studies shown under "Selected work" and at /work/<slug>.
const work = defineCollection({
  loader: glob({ base: "./src/content/work", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(), // one sentence, shown on the home page
      context: z.string(), // e.g. "Starbound Space Solutions" or "Team project"
      year: z.string().optional(),
      order: z.number(), // lower numbers appear first
      featured: z.boolean().default(false),
      metric: z
        .object({ value: z.string(), label: z.string() })
        .optional(),
      stack: z.array(z.string()).default([]),
      links: z
        .array(z.object({ label: z.string(), href: z.url() }))
        .default([]),
      // Category pill on project rows, e.g. "Agents".
      tag: z.string().optional(),
      cover: image().optional(), // product screenshot
      coverAlt: z.string().optional(),
      // Optional photograph for the case-study opening. Without one, the cover screenshot is framed instead.
      hero: image().optional(),
      heroAlt: z.string().optional(),
      // Extra photography shown through the case study, in order.
      gallery: z
        .array(z.object({ src: image(), alt: z.string(), wide: z.boolean().default(false) }))
        .default([]),
    }),
});

// Blog posts, published at /blog.
const notes = defineCollection({
  loader: glob({ base: "./src/content/notes", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, notes };
