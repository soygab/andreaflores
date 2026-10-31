import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import { Occasions, Gallery, About, InstagramSec } from './components/Sections';
import { Contact, Footer, Fab } from './components/Contact';
export default function App() {
  const [preset, setPreset] = useState(null);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalog preset={preset} clear={() => setPreset(null)} />
        <Occasions pick={setPreset} />
        <Gallery />
        <About />
        <InstagramSec />
        <Contact />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
