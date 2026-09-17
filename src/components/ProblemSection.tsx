import React from 'react';
import { REALITY_REFLECTIONS } from '../data/courseData';
import { HelpCircle, Sparkles } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="desafio" className="py-20 sm:py-28 bg-[#FFF9F0] border-b border-[#F1E6D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image with Warm Editorial Frame */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 bg-[#F1E6D7]/70 rounded-2xl rotate-1 pointer-events-none"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
                <img
                  src="/images/reflexao-leitura-vereda.webp"
                  alt="Mulher refletindo durante um momento de leitura e anotações"
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[4/3]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-white/95 border-t border-[#F1E6D7]">
                  <p className="text-xs text-[#596561] italic leading-relaxed">
                    “Ler muito sem método gera cansaço; ler com clareza gera transformação real.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Problem Presentation & Real Challenges */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173F38]/10 text-[#173F38] text-xs font-semibold tracking-wider uppercase">
              <HelpCircle className="w-3.5 h-3.5 text-[#C56F4D]" />
              <span>O Desafio Silencioso da Leitura Cristã</span>
            </div>

            <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl text-[#173F38] font-normal leading-tight">
              Por que é tão comum ler bons livros cristãos e, ainda assim, sentir que <span className="italic text-[#C56F4D]">pouco muda na prática?</span>
            </h2>

            <p className="text-base text-[#596561] leading-relaxed">
              Se você já se sentiu culpada por abandonar livros pela metade ou desanimada por esquecer rapidamente o que leu, saiba que você não está sozinha. O problema nunca foi a sua capacidade intelectual: é a falta de um método simples para extrair o cerne e aplicá-lo ao cotidiano.
            </p>

            {/* 3 Pain Points stacked cleanly */}
            <div className="space-y-3 pt-2">
              {REALITY_REFLECTIONS.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#F1E6D7] rounded-xl p-4 sm:p-5 flex items-start gap-4 hover:border-[#173F38]/30 transition-colors shadow-xs"
                >
                  <span className="font-serif-title text-xl font-bold text-[#C56F4D] shrink-0 mt-0.5">
                    0{index + 1}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-serif-title text-base text-[#173F38] font-medium leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#596561] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Highlight Quote Box */}
        <div className="mt-16 bg-[#F1E6D7]/60 border border-[#DFD0BC] rounded-xl p-8 text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-3">
            <Sparkles className="w-5 h-5 text-[#C56F4D]" />
          </div>
          <blockquote className="font-serif-title text-lg sm:text-xl text-[#173F38] italic leading-relaxed">
            “Ler não é sobre colecionar páginas lidas para aliviar a consciência, mas sobre permitir que a verdade molde quem você é na vida real.”
          </blockquote>
          <cite className="block mt-3 text-xs text-[#596561] uppercase tracking-wider font-semibold not-italic">
            — Vereda & Página
          </cite>
        </div>

      </div>
    </section>
  );
};
