import React from 'react';
import { Cross, BookMarked, Sparkles, Users } from 'lucide-react';
import { IMAGES, THEOLOGICAL_PRINCIPLES } from '../data/courseData';
import { SafeImage } from './SafeImage';

export const TheologySection: React.FC = () => {
  const icons = [BookMarked, Cross, Sparkles, Users];

  return (
    <section className="py-16 sm:py-24 bg-[#FFF9F0] border-b border-[#F1E6D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Text & Principles */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-wider text-[#C56F4D] uppercase block">
              Fundamentos
            </span>

            <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-normal text-[#173F38] leading-[1.25]">
              Teologia que orienta a leitura sem deixar o caminho pesado.
            </h2>

            <p className="text-base sm:text-lg text-[#596561] leading-relaxed">
              O material parte de convicções centrais da fé cristã e transforma princípios em perguntas que cabem na vida comum.
            </p>

            {/* 4 Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {THEOLOGICAL_PRINCIPLES.map((item, idx) => {
                const Icon = icons[idx % icons.length];
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-white border border-[#F1E6D7] flex items-center gap-3 shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#173F38]/10 text-[#173F38] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-[#173F38]">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Clarifying Note */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#F1E6D7]/40 border border-[#F1E6D7] text-xs sm:text-sm text-[#596561] leading-relaxed">
              <strong className="text-[#173F38] font-semibold block mb-1">
                Nota importante:
              </strong>
              O guia não substitui a Bíblia, a igreja local ou o cuidado pastoral. Ele organiza a leitura para que cada aprendizado seja examinado com atenção e vivido com humildade.
            </div>

          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-2 bg-[#F1E6D7]/70 rounded-2xl -rotate-1 pointer-events-none"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
                <SafeImage
                  src={IMAGES.theology.imgur}
                  fallbackSrc={IMAGES.theology.local}
                  alt={IMAGES.theology.alt}
                  width={IMAGES.theology.width}
                  height={IMAGES.theology.height}
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/11]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
