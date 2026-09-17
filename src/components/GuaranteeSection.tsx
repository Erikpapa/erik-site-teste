import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/courseData';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F1E6D7]/40 border-b border-[#F1E6D7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-[#DFD0BC] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xs">
          
          {/* Badge Visual */}
          <div className="w-24 h-24 rounded-full bg-[#FFF9F0] border-2 border-[#173F38] flex flex-col items-center justify-center shrink-0 text-center p-2">
            <ShieldCheck className="w-8 h-8 text-[#173F38]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C56F4D] mt-1">
              7 Dias
            </span>
          </div>

          {/* Copy */}
          <div className="space-y-3 text-center md:text-left flex-1">
            <h3 className="font-serif-title text-2xl text-[#173F38] font-medium leading-snug">
              Experimente sem riscos: garantia incondicional de 7 dias
            </h3>
            <p className="text-sm text-[#596561] leading-relaxed">
              Assista às aulas e coloque o método em prática. Se por qualquer motivo você achar que o mini-curso não valeu cada centavo dos R$ 27 investidos, basta solicitar o reembolso na plataforma Eduzz. Devolveremos 100% do seu valor com total respeito e tranquilidade.
            </p>
          </div>

          {/* CTA Link */}
          <div className="shrink-0">
            <a
              href={BRAND_INFO.eduzzUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#173F38] hover:bg-[#102C27] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Inscrever-se com garantia</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D3A84F]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
