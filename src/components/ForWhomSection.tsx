import React, { useState } from 'react';
import { Check, UserCheck, ArrowRight, Heart } from 'lucide-react';
import { FOR_WHOM } from '../data/courseData';

interface ForWhomSectionProps {
  onOpenCheckout: () => void;
}

export const ForWhomSection: React.FC<ForWhomSectionProps> = ({ onOpenCheckout }) => {
  const [checkedItems, setCheckedItems] = useState<number[]>([0, 1, 2]);

  const toggleItem = (idx: number) => {
    setCheckedItems(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="para-quem" className="py-16 sm:py-24 bg-[#FAF7F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9E8581]/15 text-[#6B534F] text-xs font-bold tracking-wider uppercase mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            Diagnóstico Pessoal
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-extrabold text-[#2C2420] tracking-tight mb-3">
            Este mini-curso é para você que:
          </h2>
          <p className="text-sm sm:text-base text-[#6C5E57]">
            Marque os itens com os quais você se identifica para testar sua prontidão:
          </p>
        </div>

        {/* Interactive Checklist */}
        <div className="space-y-3.5 mb-10">
          {FOR_WHOM.map((text, idx) => {
            const isChecked = checkedItems.includes(idx);
            return (
              <div
                key={idx}
                onClick={() => toggleItem(idx)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                  isChecked 
                    ? 'bg-white border-[#9E8581] shadow-sm ring-1 ring-[#9E8581]/30' 
                    : 'bg-[#F7F2EE] border-[#E8DFD7] hover:bg-white hover:border-[#D9C7C1]'
                }`}
              >
                <div 
                  className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isChecked 
                      ? 'bg-[#9E8581] text-white' 
                      : 'border-2 border-[#C9B9B2] bg-white text-transparent'
                  }`}
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>

                <div className="flex-1">
                  <p className={`text-sm sm:text-base leading-relaxed ${isChecked ? 'text-[#2C2420] font-semibold' : 'text-[#5E514B]'}`}>
                    {text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic feedback banner based on selections */}
        <div className="p-6 rounded-2xl bg-[#F4EDE7] border border-[#E3D4CA] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-xs font-bold text-[#8E6D68] uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <Heart className="w-3.5 h-3.5 fill-[#8E6D68]" />
              <span>Você marcou {checkedItems.length} de {FOR_WHOM.length} situações</span>
            </p>
            <p className="text-sm sm:text-base text-[#2C2420] font-medium">
              {checkedItems.length >= 1 
                ? 'Você está no lugar certo. Este método de 2 horas foi desenhado especificamente para destravar você.' 
                : 'Clique nos itens acima que você já sentiu ao tentar ler um livro.'}
            </p>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#9E8581] hover:bg-[#886F6B] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all shrink-0 active:scale-95"
          >
            <span>Quero Destravar Minha Leitura (R$ 27)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
