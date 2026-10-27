import {useState} from 'react';import {AnimatePresence,motion} from 'framer-motion';import {Menu,X,Instagram,MessageCircle} from 'lucide-react';
import {SITE} from '../config';import {waDefault} from '../lib';
export const nav=[['Início','#inicio'],['Catálogo','#catalogo'],['Ocasiões','#ocasioes'],['Sobre nós','#sobre'],['Contato','#contato']];
export default function Header(){const[o,setO]=useState(false);
return(<header className="fixed inset-x-0 top-0 z-40 border-b border-vinho/10 bg-white/90 backdrop-blur"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
<a href="#inicio" aria-label="Andrea Flores, início"><img src="/logo.png" alt="Andrea Flores" className="h-11 w-11 rounded-lg"/></a>
<nav aria-label="Principal" className="hidden gap-8 md:flex">{nav.map(([l,h])=><a key={h} href={h} className="text-sm font-medium transition hover:text-rosa">{l}</a>)}</nav>
<div className="flex items-center gap-2"><a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hidden size-11 place-items-center rounded-full hover:bg-petala sm:grid"><Instagram size={20}/></a>
<a href={waDefault()} target="_blank" rel="noreferrer" className="hidden min-h-11 items-center gap-2 rounded-full bg-rosa px-5 text-sm font-semibold text-white transition hover:bg-vinho sm:inline-flex"><MessageCircle size={18}/>Fazer pedido</a>
<button onClick={()=>setO(!o)} aria-expanded={o} aria-label="Menu" className="grid size-11 place-items-center md:hidden">{o?<X/>:<Menu/>}</button></div></div>
<AnimatePresence>{o&&<motion.nav initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden bg-white md:hidden">
<div className="flex flex-col px-5 pb-5">{nav.map(([l,h])=><a key={h} href={h} onClick={()=>setO(false)} className="border-b border-vinho/10 py-4 font-serif text-2xl">{l}</a>)}
<a href={waDefault()} target="_blank" rel="noreferrer" className="mt-4 grid min-h-12 place-items-center rounded-full bg-rosa font-semibold text-white">Fazer pedido pelo WhatsApp</a></div></motion.nav>}</AnimatePresence></header>);}
