export type Producto = {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  flores: string[];
};

export const productos: Producto[] = [
  {
    id: 'pendientes-rosas',
    nombre: 'Pendientes con Rosas',
    precio: 18,
    descripcion: 'Pendientes elegantes elaborados con flores de rosa preservadas encapsuladas en resina epoxi.',
    imagen: '/images/pendientes-rosas.jpg',
    flores: ['Rosa mini', 'Paniculata'],
  },
  {
    id: 'colgante-margarita',
    nombre: 'Colgante Margarita',
    precio: 22,
    descripcion: 'Colgante artesanal con margaritas naturales, ideal para amantes de la naturaleza.',
    imagen: '/images/colgante-margarita.jpg',
    flores: ['Margarita'],
  },
];

export function getProductos() {
  return productos;
}

export function getProductoById(id: string) {
  return productos.find(p => p.id === id);
}
