import { Product } from './product.model';

export const product1: Product = {
    id: 1,
    description: 'Ace 3 litros',
    type: 'Detergente',
    price: 5500,
    imageLink: '../assets/img/1-ace.jpg',
    quantity: 0
  }

  export const product2: Product = {
    id: 2,
    description: 'Cif crema 1 litro',
    type: 'Limpiador cremoso',
    price: 1500,
    imageLink: '../assets/img/2-cif.jpg',
    quantity: 0
  }

  export const product3: Product = {
    id: 3,
    description: 'Clorox de 3 litros',
    type: 'Cloro',
    price: 1400,
    imageLink: '../assets/img/3-cloro.png',
    quantity: 0
  }

  export const product4: Product = {
    id: 4,
    description: 'Escobillón Virutex',
    type: 'Escobillón ',
    price: 2000,
    imageLink: '../assets/img/4-escobillon.jpg',
    quantity: 0
  }

  export const product5: Product = {
    id: 5,
    description: 'Esponja genérica',
    type: 'Esponja',
    price: 300,
    imageLink: '../assets/img/5-esponja.jpg',
    quantity: 0
  }

  export const product6: Product = {
    id: 6,
    description: 'Guante genérico',
    type: 'Guantes desinfectantes',
    price: 1200,
    imageLink: '../assets/img/6-guantes.jpg',
    quantity: 0
  }

  export const product7: Product = {
    id: 7,
    description: 'Lysoform 700ml',
    type: 'Desinfectante aerosol',
    price: 1500,
    imageLink: '../assets/img/7-lysoform.jpg',
    quantity: 0
  }

  export const product8: Product = {
    id: 8,
    description: 'Pack 3 paños genéricos',
    type: 'Paño de limpieza',
    price: 1000,
    imageLink: '../assets/img/8-panio.jpg',
    quantity: 0
  }

  export const product9: Product = {
    id: 9,
    description: 'Raid Max de 299g',
    type: 'Insecticida aerosol',
    price: 3200,
    imageLink: '../assets/img/9-raid.jpg',
    quantity: 0
  }

  export const product10: Product = {
    id: 10,
    description: 'Tanax en polvo',
    type: 'Insecticida en polvo',
    price: 1500,
    imageLink: '../assets/img/10-tanax.jpg',
    quantity: 0
  }
  
export const PRODUCTS: Product[] = [
    product1, 
    product2, 
    product3, 
    product4, 
    product5, 
    product6, 
    product7, 
    product8, 
    product9, 
    product10
];