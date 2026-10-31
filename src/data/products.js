// =====================================================================
//  PRODUTOS DO CATÁLOGO  →  [EDITAR] substitua os exemplos por produtos reais
//  Campos: id, name, category (uma de `categories`), occasion, image, price,
//          short, long, options. Remova demo:true nos produtos reais.
//  occasion liga o produto ao card de Ocasiões: namoro | aniversario | maes | casamento | homenagem
//  price: número (ex.: 89.9) ou null para ocultar o preço.
//  image: '/images/arquivo.jpg' (arquivo em public/images/).
// =====================================================================
export const categories = [
  'Romance',
  'Buquês variados',
  'Arranjos florais',
  'Flores em vasos',
  'Cestas e presentes',
  'Aniversários',
  'Românticas',
  'Coroas e homenagens',
];
const r = (id, name, category, occasion) => ({
  id,
  name,
  category,
  occasion,
  image: '/images/romance.jpg',
  price: 'R$450,00',
  demo: true,
  short: 'Lindo buquê de rosas vermelhas.',
  long: 'Cerca de aproximadamente 30 rosas vermelhas.',
  options: ['Confirmar disponibilidade com a loja'],
});

const l = (id, name, category, occasion) => ({
  id,
  name,
  category,
  occasion,
  image: '/images/liriopocket.jpg',
  price: 'R$120,00',
  demo: true,
  short: 'Charmoso buquê de lírios com astromélias.',
  long: '1 lírio + astromélias.',
  options: ['Confirmar disponibilidade com a loja'],
});

const m = (id, name, category, occasion) => ({
  id,
  name,
  category,
  occasion,
  image: '/images/mixgirassol.jpg',
  price: 'R$90,00',
  demo: true,
  short: 'Encanto de girrasóis com flores diversas.',
  long: 'Mix de flores aleatórias.',
  options: ['Confirmar disponibilidade com a loja'],
});

const p = (id, name, category, occasion) => ({
  id,
  name,
  category,
  occasion,
  image: '/images/princesa.jpg',
  price: 'R$420,00',
  demo: true,
  short: 'Lindo buquê de rosas.',
  long: 'Aproximadamente 30 rosas + folhagem.',
  options: ['Confirmar disponibilidade com a loja'],
});

const c = (id, name, category, occasion) => ({  
  id,
  name,
  category,
  occasion,
  image: '/images/cesta30.jpg',
  price: 'R$110,00',
  demo: true,
  short: 'Cesta com 30 itens e flores para surpreender!',
  long: 'Composto por uma cesta como foto, kit para café com 30 itens:',
  options: ['Confirmar disponibilidade com a loja'],
});

export const products = [
  r(1, 'Romance', 'Romance', 'namoro'),
  l(2, 'Lírio Pocket', 'Romance', 'namoro'),
  m(3, 'Mix Girassol Singelo', 'Romance', 'namoro'),
  p(4, 'Princesa', 'Romance', 'namoro'),
  c(4, 'Cesta 30', 'Cestas e presentes', 'namoro'),
];
