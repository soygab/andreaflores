import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, X } from 'lucide-react';
import { SITE, gallery, instagramPosts } from '../config';
import { Img } from './Petal';
// [EDITAR] Ocasiões: título, chave da ocasião (ver src/data/products.js) e foto em public/images/
const occ = [
  { title: 'Dia dos Namorados', key: 'namoro', img: '/images/namoro.png' },
  { title: 'Aniversários', key: 'aniversario', img: '/images/aniversario.png' },
  { title: 'Dia das Mães', key: 'maes', img: '/images/maes.jpg' },
  { title: 'Pedidos de namoro e presentes românticos', key: 'namoro', img: '/images/presente.jpg' },
  { title: 'Casamentos e celebrações', key: 'casamento', img: '/images/foto_noiva_4k.png' },
  { title: 'Homenagens e condolências', key: 'homenagem', img: '/images/coroa.jpg' },
];

export function Occasions({ pick }) {
  return (
    <section id="ocasioes" className="bg-petala py-24">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-4xl md:text-5xl">Ocasiões</h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {occ.map(({ title, key, img }) => (
            <li key={title}>
              <button
                onClick={() => {
                  pick(key);
                  document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl text-left"
              >
                <div className="h-full transition duration-700 group-hover:scale-105">
                  <Img src={img} alt={null} />
                </div>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-tinta/80 p-5 font-serif text-2xl text-white">
                  {title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export function Gallery() {
  const [s, setS] = useState(null);
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <h2 className="text-4xl md:text-5xl">Galeria</h2>
      <div className="mt-10 columns-2 gap-4 lg:columns-3">
        {gallery.map((g, i) => (
          <button
            key={i}
            onClick={() => setS(g)}
            className={`group mb-4 block w-full overflow-hidden rounded-xl ${g.r}`}
            aria-label={`Ampliar: ${g.alt}`}
          >
            <div className="h-full transition duration-500 group-hover:scale-105">
              <Img src={g.src} alt={g.alt} />
            </div>
          </button>
        ))}
      </div>
      <a
        href={SITE.instagram}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-vinho underline"
      >
        Ver mais no Instagram
      </a>
      <AnimatePresence>
        {s && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setS(null)}
            className="fixed inset-0 z-50 grid place-items-center bg-tinta/80 p-4"
          >
            <button
              aria-label="Fechar"
              className="absolute right-4 top-4 grid size-11 place-items-center text-white"
            >
              <X />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="aspect-[4/5] max-h-[85svh] overflow-hidden rounded-xl"
            >
              <Img src={s.src} alt={s.alt} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
export const About = () => (
  <section id="sobre" className="grid md:grid-cols-2">
    <div className="min-h-96">
      {/* [EDITAR] Foto da seção "Sobre": troque src="" por src="/images/sobre.jpg" */}
      <Img src="/images/andrea.png" alt="Flores da Andrea Flores" />
    </div>
    <div className="flex flex-col justify-center gap-4 px-6 py-16 md:px-16">
      <h2 className="text-4xl md:text-5xl">Sobre a Andrea Flores</h2>
      <p>
        {/* [EDITAR] Substitua pelo texto real: história, diferenciais, cuidados e qualidade */}
        Na Andrea Flores, cada arranjo é pensado para dizer o que as palavras nem sempre alcançam.
        Seja para celebrar, surpreender, agradecer ou homenagear, escolhemos as flores com atenção e
        montamos cada composição com cuidado, para que chegue bonita e fiel ao momento de quem
        recebe.Você escolhe no catálogo, conversa com a gente pelo WhatsApp e nós ajudamos a encontrar o
        arranjo certo para a ocasião.
      </p>
    </div>
  </section>
);
export const InstagramSec = () => (
  <section className="bg-petala py-24">
    <div className="mx-auto max-w-7xl px-5">
      <h2 className="text-4xl md:text-5xl">Acompanhe a Andrea Flores</h2>
      {instagramPosts.length > 0 && (
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {instagramPosts.map((p) => (
            <li key={p.url}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="block aspect-square overflow-hidden rounded-lg"
              >
                <Img src={p.src} alt={p.alt} />
              </a>
            </li>
          ))}
        </ul>
      )}
      <a
        href={SITE.instagram}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-vinho px-7 font-semibold text-white hover:bg-rosa"
      >
        <Instagram size={18} />
        @andreaflores.vr
      </a>
    </div>
  </section>
);
