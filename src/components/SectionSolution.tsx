import React from 'react';
import { BookOpen, Edit3 } from 'lucide-react';
import { APPROVED_IMAGES } from '../data/courseData';
import { SafeImage } from './SafeImage';

export const SectionSolution: React.FC = () => {
  return (
    <section className="pt-6 pb-6">
      
      {/* Tag de Apoio Concreto */}
      <div className="flex items-center gap-2 mb-2">
        <span className="w-6 h-[2px] bg-[#C58B35]"></span>
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C58B35]">
          Apoio concreto
        </span>
      </div>

      {/* Título da seção */}
      <h2 className="font-serif-title text-[28px] sm:text-[32px] font-normal text-[#0A332B] leading-tight mb-2">
        Para quando você lê e pensa:<br />
        “E agora?”
      </h2>

      {/* Subtítulo */}
      <p className="text-[15px] sm:text-[16px] text-[#485B55] leading-relaxed mb-5">
        Um caminho para compreender, refletir e aplicar o que você lê.
      </p>

      {/* Os dois itens com círculos duplos e divisor vertical */}
      <div className="space-y-4 mb-6">
        
        {/* Item 01: Guia de leitura */}
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#FAF4EB] border border-[#C58B35]/30 text-[#C58B35] font-semibold text-xs flex items-center justify-center">
              01
            </div>
            <div className="w-8 h-8 rounded-full bg-[#FAF4EB] border border-[#C58B35]/30 text-[#C58B35] flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-[#C58B35]" />
            </div>
          </div>

          <div className="w-[1.5px] h-8 bg-[#C58B35]/30 shrink-0"></div>

          <div>
            <h3 className="font-serif-title text-[17px] font-medium text-[#0A332B] leading-snug">
              Guia de leitura
            </h3>
            <p className="text-[13px] text-[#485B55]">
              Uma direção para compreender o que você lê.
            </p>
          </div>
        </div>

        {/* Item 02: Caderno prático */}
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#FAF4EB] border border-[#C58B35]/30 text-[#C58B35] font-semibold text-xs flex items-center justify-center">
              02
            </div>
            <div className="w-8 h-8 rounded-full bg-[#FAF4EB] border border-[#C58B35]/30 text-[#C58B35] flex items-center justify-center">
              <Edit3 className="w-4 h-4 text-[#C58B35]" />
            </div>
          </div>

          <div className="w-[1.5px] h-8 bg-[#C58B35]/30 shrink-0"></div>

          <div>
            <h3 className="font-serif-title text-[17px] font-medium text-[#0A332B] leading-snug">
              Caderno prático
            </h3>
            <p className="text-[13px] text-[#485B55]">
              Registre dúvidas, reflexões e próximos passos.
            </p>
          </div>
        </div>

      </div>

      {/* Fotografia de Leitura (reading-approved.webp) */}
      <div className="rounded-2xl overflow-hidden shadow-xs border border-[#0A332B]/10 bg-white">
        <SafeImage
          src={APPROVED_IMAGES.reading.src}
          fallbackSrc={APPROVED_IMAGES.reading.fallback}
          alt={APPROVED_IMAGES.reading.alt}
          width={APPROVED_IMAGES.reading.width}
          height={APPROVED_IMAGES.reading.height}
          className="w-full h-auto object-cover object-center aspect-[16/10]"
          loading="lazy"
        />
      </div>

    </section>
  );
};
