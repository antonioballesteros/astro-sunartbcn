import { defineCollection, z } from 'astro:content';
import type { CategoriaId } from '../lib/categorias';

const productos = defineCollection({
  schema: z.object({
    id: z.string(),
    nombre: z.string(),
    featured: z.boolean().optional().default(false),
    precio: z.number(),
    imagen: z.string(),
    categoria: z.custom<CategoriaId>(),
    flores: z.array(z.string()),
  }),
});

const eventos = defineCollection({
  schema: z.object({
    id: z.string(),
    titulo: z.string(),
    fechaInicio: z.string(),
    fechaFin: z.string(),
    localizacion: z.string(),
    descripcion: z.string(),
    imagen: z.string(),
  }),
});

export const collections = {
  productos,
  eventos,
};
