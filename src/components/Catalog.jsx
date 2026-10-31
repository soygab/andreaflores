import { useMemo, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X, MessageCircle } from 'lucide-react';
import { products, categories } from '../data/products';
import { waProduct } from '../lib';
import { Img } from './Petal';
const brl = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
function Modal({ p, close }) {
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && close();
    addEventListener('keydown', k);
    return () => removeEventListener('keydown', k);
  }, [close]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
      className="fixed inset-0 z-50 grid place-items-center bg-tinta/70 p-4"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={p.name}
        initial={{ y: 30, scale: 0.97 }}
        animate={{ y: 0, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="grid max-h-[90svh] w-full max-w-3xl overflow-auto rounded-2xl bg-white md:grid-cols-2"
      >
        <div className="aspect-square">
          <Img src={p.image} alt={p.name} />
        </div>
        <div className="relative flex flex-col gap-4 p-7">
          <button
            onClick={close}
            aria-label="Fechar"
            className="absolute right-3 top-3 grid size-11 place-items-center"
          >
            <X />
          </button>
          <h3 className="pr-10 text-3xl">{p.name}</h3>
          {p.demo && (
            <p className="w-fit rounded bg-petala px-2 py-1 text-xs text-vinho">
              Conteúdo demonstrativo
            </p>
          )}
          <p>{p.long}</p>
          <ul className="list-disc pl-5 text-sm">
            {p.options.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          {p.price != null && <p className="text-xl font-semibold">{brl(p.price)}</p>}
          <a
            href={waProduct(p.name)}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-rosa font-semibold text-white hover:bg-vinho"
          >
            <MessageCircle size={18} />
            Solicitar pelo WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
export default function Catalog({ preset, clear }) {
  const [cat, setCat] = useState('Todos');
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(null);
  useEffect(() => {
    if (preset) {
      setCat('Todos');
      setQ('');
    }
  }, [preset]);
  const list = useMemo(
    () =>
      products.filter(
        (p) =>
          (preset ? p.occasion === preset : cat === 'Todos' || p.category === cat) &&
          p.name.toLowerCase().includes(q.toLowerCase()),
      ),
    [cat, q, preset],
  );
  return (
    <section id="catalogo" className="mx-auto max-w-7xl px-5 py-24">
      <h2 className="text-4xl md:text-5xl">Catálogo</h2>
      <p className="mt-2 text-sm text-tinta/70">
        Produtos de exemplo. Os itens reais serão cadastrados pela loja.
      </p>
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Categorias">
          {['Todos', ...categories].map((c) => (
            <button
              key={c}
              aria-pressed={!preset && cat === c}
              onClick={() => {
                clear();
                setCat(c);
              }}
              className={`min-h-11 rounded-full border px-4 text-sm transition ${!preset && cat === c ? 'border-rosa bg-rosa text-white' : 'border-vinho/20 hover:border-rosa'}`}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="relative">
          <span className="sr-only">Buscar produto</span>
          <Search size={18} className="absolute left-3 top-3.5 text-vinho" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por nome"
            className="min-h-11 w-full rounded-full border border-vinho/20 pl-10 pr-4 md:w-64"
          />
        </label>
      </div>
      {preset && (
        <button onClick={clear} className="mt-4 text-sm text-vinho underline">
          Filtro de ocasião ativo. Limpar
        </button>
      )}
      <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.li
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="group"
            >
              <button onClick={() => setSel(p)} className="block w-full text-left">
                <div className="aspect-[4/5] overflow-hidden rounded-xl">
                  <div className="h-full transition duration-500 group-hover:scale-105">
                    <Img src={p.image} alt={p.name} />
                  </div>
                </div>
                <h3 className="mt-3 text-2xl">{p.name}</h3>
                <p className="text-sm text-tinta/70">{p.short}</p>
                {p.price != null && <p className="mt-1 font-semibold">{brl(p.price)}</p>}
              </button>
              <a
                href={waProduct(p.name)}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex min-h-11 items-center rounded-full border border-rosa px-4 text-sm font-medium text-rosa transition hover:bg-rosa hover:text-white"
              >
                Consultar pelo WhatsApp
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      {!list.length && (
        <p className="mt-10">Nenhum produto encontrado. Tente outra categoria ou termo.</p>
      )}
      <AnimatePresence>{sel && <Modal p={sel} close={() => setSel(null)} />}</AnimatePresence>
    </section>
  );
}
