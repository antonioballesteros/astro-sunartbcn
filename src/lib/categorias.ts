// Tipo para los IDs de categoría
export type CategoriaId = "lamparas" | "blocks" | "bandejas" | "inciensos" | "porta-velas" | "puntos-de-libro" | "pendientes" | "colgantes" | "marinas";

// Tipo para el objeto de configuración de categorías
export type Categoria = {
  id: CategoriaId;
  nombre: string;
  imagen: string;
  imagenGrande: string;
  descripcion: string;
};


// Array con todas las categorías
export const categorias: Categoria[] = [
  {
    id: "lamparas",
    nombre: "Lámparas",
    imagen: "/images/categorias/tmp_lamparas.jpg",
    imagenGrande: "/images/categorias/tmp_lamparas-big.jpg",
    descripcion: "Ilumina tu espacio con lámparas artesanales y únicas.",
  },
  {
    id: "blocks",
    nombre: "Blocks",
    imagen: "/images/categorias/tmp_blocks.jpg",
    imagenGrande: "/images/categorias/tmp_blocks-big.jpg",
    descripcion: "Decoración en bloques de resina con flores naturales.",
  },
  {
    id: "bandejas",
    nombre: "Bandejas",
    imagen: "/images/categorias/tmp_bandeja.jpg",
    imagenGrande: "/images/categorias/tmp_bandejas-big.jpg",
    descripcion: "Bandejas decorativas para tu hogar o eventos especiales.",
  },
  {
    id: "inciensos",
    nombre: "Inciensos",
    imagen: "/images/categorias/tmp_inciensos.jpg",
    imagenGrande: "/images/categorias/tmp_inciensos-big.jpg",
    descripcion: "Porta inciensos elegantes hechos a mano.",
  },
  {
    id: "porta-velas",
    nombre: "Porta velas",
    imagen: "/images/categorias/tmp_porta-velas.jpg",
    imagenGrande: "/images/categorias/tmp_porta-velas-big.jpg",
    descripcion: "Crea ambientes cálidos con porta velas originales.",
  },
  {
    id: "puntos-de-libro",
    nombre: "Puntos de libro",
    imagen: "/images/categorias/tmp_puntos-libro.jpg",
    imagenGrande: "/images/categorias/tmp_puntos-libro-big.jpg",
    descripcion: "Marca tus lecturas con arte floral único.",
  },
  {
    id: "pendientes",
    nombre: "Pendientes",
    imagen: "/images/categorias/tmp_pendientes.jpg",
    imagenGrande: "/images/categorias/tmp_pendientes-big.jpg",
    descripcion: "Pendientes con flores preservadas, ligeros y coloridos.",
  },
  {
    id: "colgantes",
    nombre: "Colgantes",
    imagen: "/images/categorias/tmp_collares.jpg",
    imagenGrande: "/images/categorias/tmp_collares-big.jpg",
    descripcion: "Colgantes artesanales con esencia natural.",
  },
  {
    id: "marinas",
    nombre: "Marinas",
    imagen: "/images/categorias/tmp_marina.jpg",
    imagenGrande: "/images/categorias/tmp_marina-big.jpg",
    descripcion: "Piezas inspiradas en el mar y la naturaleza acuática.",
  }
];
