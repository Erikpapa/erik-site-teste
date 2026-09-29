import React from 'react';
import { SectionOpening } from './components/SectionOpening';
import { SectionSolution } from './components/SectionSolution';
import { SectionOffer } from './components/SectionOffer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFAF6] text-[#222725] font-sans antialiased selection:bg-[#0C382E] selection:text-[#FFFDF9] overflow-x-hidden">
      <main className="max-w-[460px] sm:max-w-[500px] mx-auto px-4 sm:px-5">
        {/* 1. ABERTURA & CABEÇALHO */}
        <SectionOpening />

        {/* 2. SOLUÇÃO & APOIO CONCRETO */}
        <SectionSolution />

        {/* 3. OFERTA & DÚVIDAS */}
        <SectionOffer />
      </main>
    </div>
  );
}
