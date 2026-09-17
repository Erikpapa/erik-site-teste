import React, { useState } from 'react';
import { Layers, ChevronDown, Clock, Check, Sparkles, Gift } from 'lucide-react';
import { MODULES } from '../data/courseData';

export const CurriculumSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setOpenIndex(prev => prev === id ? null : id);
  };

  return (
    <section id="estrutura" className="py-16 sm:py-24 bg-[#FAF7F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9E8581]/15 text-[#6B534F] text-xs font-bold tracking-wider uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            Grade Curricular
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C2420] tracking-tight mb-3">
            Estrutura do Mini-Curso
          </h2>
          <p className="text-sm sm:text-base text-[#6B5C55]">
            Dividido em aulas enxutas, sem rodeios ou teorias maçantes. Veja o que você vai assistir:
          </p>
        </div>

        {/* Modules Accordion */}
        <div className="space-y-3.5">
          {MODULES.map((m) => {
            const isOpen = openIndex === m.id;
            const isSpecial = m.id === 6;

            return (
              <div 
                key={m.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isSpecial 
                    ? 'bg-gradient-to-r from-amber-50/80 to-rose-50/80 border-amber-300'
                    : isOpen 
                      ? 'bg-white border-[#9E8581] shadow-md ring-1 ring-[#9E8581]/20' 
                      : 'bg-white border-[#E6DCD4] hover:border-[#D5C2BA]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleModule(m.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                      isSpecial 
                        ? 'bg-amber-400 text-[#2C2420]' 
                        : 'bg-[#9E8581] text-white'
                    }`}>
                      {m.badge}
                    </span>

                    <div>
                      <h3 className="font-serif-title text-base sm:text-lg font-bold text-[#2C2420] flex items-center gap-2">
                        <span>{m.title}</span>
                        {isSpecial && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-200 px-2 py-0.5 rounded-full">
                            <Gift className="w-3 h-3" /> Com Presente!
                          </span>
                        )}
                      </h3>
                      <p className="text-xs text-[#7A6C65] hidden sm:block">
                        {m.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="inline-flex items-center gap-1 text-xs text-[#8C7D76] font-medium bg-[#FAF7F5] px-2.5 py-1 rounded border border-[#EDE2D8]">
                      <Clock className="w-3 h-3 text-[#9E8581]" />
                      <span>{m.duration}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#7A6C65] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#F2EAE3] bg-[#FAF7F5]/50 text-xs sm:text-sm text-[#5B4E48]">
                    <p className="mb-3.5 leading-relaxed text-[#4A3F3A]">
                      {m.description}
                    </p>

                    <div className="p-3 bg-white rounded-xl border border-[#E9DFD7]">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#8E6D68] mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#9E8581]" />
                        Pontos centrais abordados:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {m.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-1.5 text-xs text-[#524641]">
                            <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-[10px]">
                              ✓
                            </div>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Total Time Summary pill */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold shadow-2xs">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>Total de curso: <strong>Menos de 2 horas</strong> (aulas dinâmicas para ver no celular ou notebook)</span>
          </div>
        </div>

      </div>
    </section>
  );
};
