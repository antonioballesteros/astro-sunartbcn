import { defineCollection, z } from 'astro:content';

const productos  = defineCollection({
  schema: z.object({
    id: z.string(),
    nombre: z.string(),
    featured: z.boolean().optional().default(false),
    precio: z.number(),
    imagen: z.string(),
    flores: z.array(z.string()),
  }),
});

export const collections = {
  productos,
};
