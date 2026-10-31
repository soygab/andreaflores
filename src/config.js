// =====================================================================
//  CONFIGURAÇÃO DA LOJA  →  ARQUIVO PRINCIPAL PARA EDITAR
//  Campos vazios ('') aparecem como "A confirmar" no site.
//  Nada aqui é inventado: preencha com os dados reais.
// =====================================================================

export const SITE = {
  // [EDITAR] WhatsApp: só dígitos, com país + DDD + número. Ex.: '5524999999999'
  whatsapp: '5524999713751',

  // [EDITAR] Telefone para exibição. Ex.: '(24) 99999-9999'
  phone: '5524999713751',

  // [EDITAR] Endereço completo. Preenchido, o mapa e o botão "Abrir rota" aparecem.
  address: 'https://maps.app.goo.gl/qz1DuSJzYVVDRLTD6',

  // [EDITAR] Horários. Ex.: 'Seg a Sex, 8h às 18h'
  hours: 'Ter a Dom, 9h às 18h',

  // [EDITAR] Entrega e retirada. Ex.: 'Entregamos em Volta Redonda'
  delivery: 'Entregas e retiradas à combinar pelo WhatsApp.',

  // Instagram (já configurado)
  instagram: 'https://www.instagram.com/andreaflores.vr/',

  // [EDITAR] Foto principal do topo. Coloque o arquivo em public/images/. Ex.: '/images/hero.jpg'
  heroImage: '/images/logo.png',
};

// [EDITAR] Posts do Instagram (opcional). Vazio = só o botão do perfil.
// Exemplo: { src: '/images/ig1.jpg', alt: 'Descrição', url: 'https://www.instagram.com/p/XXXX/' }
export const instagramPosts = [];

// [EDITAR] Galeria. Troque src por '/images/arquivo.jpg'.
// r = proporção da foto: 'aspect-square', 'aspect-[3/4]', 'aspect-[4/5]', 'aspect-[4/3]'
export const gallery = [
  { src: '', alt: 'Arranjo floral (foto a inserir)', r: 'aspect-[3/4]' },
  { src: '', alt: 'Buquê (foto a inserir)', r: 'aspect-square' },
  { src: '', alt: 'Cesta (foto a inserir)', r: 'aspect-[4/5]' },
  { src: '', alt: 'Flores em vaso (foto a inserir)', r: 'aspect-[4/3]' },
  { src: '', alt: 'Arranjo romântico (foto a inserir)', r: 'aspect-[3/4]' },
  { src: '', alt: 'Homenagem (foto a inserir)', r: 'aspect-square' },
];
