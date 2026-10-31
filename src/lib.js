import { SITE } from './config';
export const wa = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
// [EDITAR] Textos das mensagens do WhatsApp (opcional)
export const waDefault = () =>
  wa('Olá! Conheci a Andrea Flores pelo site e gostaria de fazer um pedido.');
export const waProduct = (n) =>
  wa(
    `Olá! Conheci a Andrea Flores pelo site e gostaria de saber mais sobre o produto ${n}. Poderiam me passar mais informações?`,
  );
