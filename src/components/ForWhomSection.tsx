import React from 'react';
import { Check, X, UserCheck } from 'lucide-react';
import { FOR_WHOM_ITEMS, NOT_FOR_WHOM_ITEMS, BRAND_INFO } from '../data/courseData';

export const ForWhomSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFF9F0] border-b border-[#F1E6D7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173F38]/10 text-[#173F38] text-xs font-semibold tracking-wider uppercase">
            <UserCheck className="w-3.5 h-3.5 text-[#C56F4D]" />
            <span>Alinhamento de Expectativas</span>
          </div>

          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl text-[#173F38] font-normal leading-tight">
            Este mini-curso foi feito para o seu momento?
          </h2>

          <p className="text-base text-[#596561] leading-relaxed">
            Acreditamos na honestidade editorial. Queremos que cada aluna entre com clareza sobre o propósito da nossa jornada juntas.
          </p>
        </div>

        {/* 2 Comparative Columns */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: For Whom */}
          <div className="bg-white border-2 border-[#173F38]/20 rounded-xl p-7 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#F1E6D7]">
                <div className="w-8 h-8 rounded-full bg-[#173F38] text-white flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-[#D3A84F]" />
                </div>
                <div>
                  <h3 className="font-serif-title text-xl text-[#173F38] font-semibold">
                    Este mini-curso É para você que:
                  </h3>
                  <span className="text-xs text-[#596561]">Deseja profundidade, leveza e frutos práticos</span>
                </div>
              </div>

              <ul className="space-y-4">
                {FOR_WHOM_ITEMS.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-[#222725] leading-relaxed">
                    <Check className="w-4 h-4 text-[#173F38] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F1E6D7]">
              <a
                href={BRAND_INFO.eduzzUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-3 px-5 rounded-md bg-[#C56F4D] hover:bg-[#A95636] text-white font-semibold text-sm transition-colors text-center"
              >
                Sim, é exatamente isso que procuro
              </a>
            </div>
          </div>

          {/* Column 2: NOT For Whom */}
          <div className="bg-[#FAF7F2] border border-[#F1E6D7] rounded-xl p-7 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#F1E6D7]">
                <div className="w-8 h-8 rounded-full bg-[#8A9692]/20 text-[#596561] flex items-center justify-center shrink-0">
                  <X className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-title text-xl text-[#596561] font-semibold">
                    Este mini-curso NÃO é para quem:
                  </h3>
                  <span className="text-xs text-[#8A9692]">Busca métricas superficiais ou fórmulas automáticas</span>
                </div>
              </div>

              <ul className="space-y-4">
                {NOT_FOR_WHOM_ITEMS.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-[#596561] leading-relaxed">
                    <X className="w-4 h-4 text-[#8A9692] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F1E6D7] text-xs text-[#8A9692] italic text-center">
              Nosso compromisso é com a maturidade e a reflexão bíblica genuína.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
