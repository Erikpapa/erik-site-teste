import React, { useState } from 'react';
import { MODULES, BRAND_INFO } from '../data/courseData';
import { BookOpen, Clock, ChevronDown, ChevronUp, PlayCircle, CheckCircle } from 'lucide-react';

export const CurriculumSection: React.FC = () => {
  const [openModuleId, setOpenModuleId] = useState<number | null>(0);

  const toggleModule = (id: number) => {
    setOpenModuleId(openModuleId === id ? null : id);
  };

  return (
    <section id="modulos" className="py-20 sm:py-28 bg-[#FFF9F0] border-b border-[#F1E6D7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Presentation of Mini-Course: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173F38]/10 text-[#173F38] text-xs font-semibold tracking-wider uppercase">
              <BookOpen className="w-3.5 h-3.5 text-[#C56F4D]" />
              <span>Apresentação do Mini-Curso</span>
            </div>

            <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl text-[#173F38] font-normal leading-tight">
              Uma experiência de aprendizado pensada para a sua <span className="italic text-[#C56F4D]">rotina real</span>
            </h2>

            <p className="text-base text-[#596561] leading-relaxed">
              O curso é 100% online, em ambiente sereno e seguro. Cada aula foi desenhada para ir direto ao ponto, respeitando o tempo da mulher cristã contemporânea.
            </p>

            <div className="space-y-3 pt-1 text-sm text-[#222725]">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#173F38] shrink-0" />
                <span>Menos de 2 horas de gravação em alta definição</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#173F38] shrink-0" />
                <span>Aulas concisas de 12 a 24 minutos para ver no seu ritmo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#173F38] shrink-0" />
                <span>Acesso pelo celular, tablet ou computador</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#173F38] shrink-0" />
                <span>Ambiente de alunas organizado para assistir no seu ritmo</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 bg-[#F1E6D7]/70 rounded-2xl -rotate-1 pointer-events-none"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
                <img
                  src="/images/curso-da-pagina-a-vida.webp"
                  alt="Tablet com uma aula do mini-curso organizada sobre uma mesa"
                  className="w-full h-auto object-cover aspect-[16/10]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3.5 bg-white/95 border-t border-[#F1E6D7] flex items-center justify-between text-xs">
                  <span className="font-serif-title text-[#173F38] font-medium">Ambiente Exclusivo de Aulas</span>
                  <span className="text-[#C56F4D] font-bold">Acesso Imediato</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pt-4 border-t border-[#F1E6D7]">
          <h3 className="font-serif-title text-xl sm:text-2xl text-[#173F38] font-normal leading-tight">
            Conteúdo Programático: o que você vai ver em cada aula
          </h3>
          <p className="text-sm text-[#596561] leading-relaxed">
            Clique em cada bloco para ver os pontos centrais abordados:
          </p>
        </div>

        {/* Modules List Accordion */}
        <div className="mt-12 space-y-4">
          {MODULES.map((mod) => {
            const isOpen = openModuleId === mod.id;
            return (
              <div
                key={mod.id}
                className={`border rounded-xl transition-colors ${
                  isOpen ? 'bg-white border-[#173F38]/40 shadow-xs' : 'bg-white/80 border-[#F1E6D7] hover:border-[#DFD0BC]'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => toggleModule(mod.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#F1E6D7] text-[#173F38]">
                        {mod.badge}
                      </span>
                      <span className="text-xs text-[#596561] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#C56F4D]" />
                        <span>{mod.duration}</span>
                      </span>
                    </div>

                    <h3 className="font-serif-title text-lg sm:text-xl text-[#173F38] font-medium leading-snug">
                      {mod.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#596561]">
                      {mod.subtitle}
                    </p>
                  </div>

                  <div className="p-2 text-[#173F38] shrink-0 mt-1">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-2 border-t border-[#F1E6D7] space-y-4">
                    <p className="text-sm text-[#222725] leading-relaxed">
                      {mod.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-semibold text-[#173F38] tracking-wider uppercase block">
                        Pontos centrais da aula:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {mod.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#596561]">
                            <CheckCircle className="w-3.5 h-3.5 text-[#C56F4D] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA after curriculum */}
        <div className="mt-10 p-6 bg-[#F1E6D7]/40 border border-[#DFD0BC] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-serif-title text-lg text-[#173F38] font-medium block">
              Pronta para assistir às aulas ainda hoje?
            </span>
            <span className="text-xs text-[#596561]">
              Acesso liberado imediatamente após a inscrição por R$ 27 à vista.
            </span>
          </div>

          <a
            href={BRAND_INFO.eduzzUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md bg-[#173F38] hover:bg-[#102C27] text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
          >
            Acessar todas as aulas
          </a>
        </div>

      </div>
    </section>
  );
};
