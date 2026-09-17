import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface GuaranteeSectionProps {
  onOpenCheckout: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#EFE5DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="p-6 sm:p-10 rounded-3xl bg-[#FAF7F5] border border-[#E5D8CF] flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-[#9E8581] to-[#715551] text-white flex flex-col items-center justify-center p-3 text-center shrink-0 shadow-lg">
            <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
            <span className="font-serif-title font-extrabold text-sm sm:text-base leading-tight">
              7 DIAS
            </span>
            <span className="text-[9px] uppercase tracking-widest font-bold text-amber-200">
              GARANTIA
            </span>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#2C2420] mb-2">
              Garantia Incondicional de 7 Dias • Risco Zero
            </h3>
            <p className="text-xs sm:text-sm text-[#63554F] leading-relaxed mb-4">
              Assista a todas as aulas, baixe o checklist e o material de apoio. Se você sentir que o método não te ajudou a transformar sua leitura ou simplesmente não era o que você esperava, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-[#8E6D68]">
              <span>O risco é todo nosso. A sua transformação é garantida.</span>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenCheckout}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#9E8581] hover:bg-[#856D69] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-sm transition-all active:scale-95"
            >
              <span>Entrar Sem Risco</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
