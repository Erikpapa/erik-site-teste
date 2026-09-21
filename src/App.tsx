import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { MethodSection } from './components/MethodSection';
import { OrnamentDivider } from './components/OrnamentDivider';
import { ProductSection } from './components/ProductSection';
import { TheologySection } from './components/TheologySection';
import { ForWhomSection } from './components/ForWhomSection';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F0] text-[#222725] font-sans antialiased selection:bg-[#173F38] selection:text-[#FFF9F0] overflow-x-hidden">
      {/* Brand Navigation Bar */}
      <Navbar />

      {/* Main Content strictly following the 9 requested sections */}
      <main className="flex-1">
        {/* 1. Hero com promessa principal e botão */}
        <HeroSection />

        {/* 2. Problema da leitora */}
        <ProblemSection />

        {/* 3. Método em três movimentos */}
        <MethodSection />

        {/* Delicate transition divider */}
        <OrnamentDivider />

        {/* 4. Apresentação do Guia + Caderno */}
        <ProductSection />

        {/* 5. Embasamento teológico */}
        <TheologySection />

        {/* 6. Para quem é */}
        <ForWhomSection />

        {/* 7. Oferta de R$ 27,90 */}
        <OfferSection />

        {/* 8. Perguntas frequentes */}
        <FaqSection />
      </main>

      {/* 9. Rodapé */}
      <Footer />

      {/* Non-intrusive Sticky Bottom Bar */}
      <StickyBottomBar />
    </div>
  );
}
