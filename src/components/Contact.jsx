import { MapPin, Phone, Clock, Truck, MessageCircle, Instagram } from 'lucide-react';
import { SITE } from '../config';
import { waDefault } from '../lib';
import { nav } from './Header';
const T = (v) => v || 'A confirmar';
export function Contact() {
  const q = encodeURIComponent(SITE.address);
  return (
    <section id="contato" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-2">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl md:text-5xl">Localização e atendimento</h2>
        {[
          [MapPin, 'Endereço', SITE.address],
          [Clock, 'Horários', SITE.hours],
          [Phone, 'Telefone', SITE.phone],
          [Truck, 'Entrega e retirada', SITE.delivery],
        ].map(([I, l, v]) => (
          <p key={l} className="flex gap-3">
            <I className="shrink-0 text-rosa" />
            <span>
              <b>{l}: </b>
              {T(v)}
            </span>
          </p>
        ))}
        <div className="flex flex-wrap gap-3">
          <a
            href={waDefault()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-rosa px-6 font-semibold text-white hover:bg-vinho"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          {SITE.address && (
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center rounded-full border border-rosa px-6 font-semibold text-rosa"
            >
              Abrir rota
            </a>
          )}
        </div>
      </div>
      <div className="min-h-80 overflow-hidden rounded-xl bg-petala">
        {SITE.address ? (
          <iframe
            title="Mapa da Andrea Flores"
            loading="lazy"
            className="h-full min-h-80 w-full"
            src={`https://www.google.com/maps?q=${q}&output=embed`}
          />
        ) : (
          <p className="grid h-full min-h-80 place-items-center p-6 text-center">
            O mapa aparece quando o endereço for preenchido em src/config.js.
          </p>
        )}
      </div>
    </section>
  );
}
export const Footer = () => (
  <footer className="bg-tinta py-14 text-white">
    <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-3">
      <div>
        <img src="/logo.png" alt="Andrea Flores" className="size-16 rounded-lg" />
        <p className="mt-4 text-sm text-white/70">
          Floricultura Andrea Flores. Arranjos para celebrar, surpreender e demonstrar sentimentos.
        </p>
      </div>
      <nav aria-label="Rodapé" className="flex flex-col gap-1">
        {nav.map(([l, h]) => (
          <a key={h} href={h} className="min-h-9 hover:text-rosa">
            {l}
          </a>
        ))}
      </nav>
      <div className="flex flex-col gap-2 text-sm">
        <a href={waDefault()} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2"
        >
          <Instagram size={16} />
          @andreaflores.vr
        </a>
        <p>{T(SITE.address)}</p>
        <p>{T(SITE.hours)}</p>
      </div>
    </div>
    <p className="mt-10 text-center text-xs text-white/60">
      © {new Date().getFullYear()} Andrea Flores. Todos os direitos reservados.
    </p>
  </footer>
);
export const Fab = () => (
  <a
    href={waDefault()}
    target="_blank"
    rel="noreferrer"
    aria-label="Falar pelo WhatsApp"
    className="fixed bottom-5 right-5 z-30 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
  >
    <MessageCircle />
  </a>
);
