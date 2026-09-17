import React from 'react';
import { METHOD_PILLARS } from '../data/courseData';
import { Compass, BookOpen, PenTool, HeartHandshake, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/courseData';

export const WhatYouLearnSection: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BookOpen className="w-5 h-5 text-[#173F38]" />;
      case 1:
        return <PenTool className="w-5 h-5 text-[#C56F4D]" />;
      case 2:
        return <HeartHandshake className="w-5 h-5 text-[#D3A84F]" />;
      default:
        return <Compass className="w-5 h-5 text-[#173F38]" />;
    }
  };

  return (
    <section id="metodo" className="py-20 sm:py-28 bg-[#F1E6D7]/30 border-b border-[#F1E6D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173F38]/10 text-[#173F38] text-xs font-semibold tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5 text-[#C56F4D]" />
            <span>O Método Vereda & Página</span>
          </div>

          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl text-[#173F38] font-normal leading-tight">
            Os três passos práticos para transformar o que você lê em <span className="italic text-[#C56F4D]">vida real</span>
          </h2>

          <p className="text-base text-[#596561] leading-relaxed">
            O método <strong className="text-[#222725] font-semibold">Da Página à Vida</strong> não exige horas livres nem técnicas acadêmicas cansativas. Ele é construído sobre três movimentos simples e profundos:
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {METHOD_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#F1E6D7] rounded-xl p-8 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#173F38]/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF9F0] border border-[#F1E6D7] flex items-center justify-center">
                    {getIcon(idx)}
                  </div>
                  <span className="font-serif-title text-3xl font-bold text-[#F1E6D7] select-none">
                    {pillar.number}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C56F4D]">
                    Passo {idx + 1}
                  </span>
                  <h3 className="font-serif-title text-2xl text-[#173F38] font-medium">
                    {pillar.title}
                  </h3>
                  <h4 className="text-xs text-[#596561] font-medium">
                    {pillar.subtitle}
                  </h4>
                </div>

                <p className="text-sm text-[#596561] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F1E6D7]">
                <span className="text-xs font-semibold text-[#173F38] block mb-1">
                  Aplicação imediata:
                </span>
                <p className="text-xs text-[#222725] bg-[#FFF9F0] p-2.5 rounded border border-[#F1E6D7]">
                  {pillar.practice}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Bar inside Method */}
        <div className="mt-14 text-center">
          <a
            href={BRAND_INFO.eduzzUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#173F38] hover:bg-[#102C27] text-white font-semibold text-sm transition-colors shadow-sm"
          >
            <span>Aprender o método no mini-curso por R$ 27</span>
            <ArrowRight className="w-4 h-4 text-[#D3A84F]" />
          </a>
        </div>

      </div>
    </section>
  );
};
