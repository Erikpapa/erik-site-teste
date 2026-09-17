import React, { useState } from 'react';
import { FAQS, BRAND_INFO } from '../data/courseData';
import { HelpCircle, ChevronDown, ChevronUp, Mail } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-20 sm:py-28 bg-[#FFF9F0] border-b border-[#F1E6D7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173F38]/10 text-[#173F38] text-xs font-semibold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-[#C56F4D]" />
            <span>Perguntas Frequentes</span>
          </div>

          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl text-[#173F38] font-normal leading-tight">
            Tudo o que você precisa saber antes de começar
          </h2>

          <p className="text-base text-[#596561] leading-relaxed">
            Respostas claras para as principais dúvidas sobre o formato das aulas, acesso e garantias.
          </p>
        </div>

        {/* Accordion list */}
        <div className="mt-14 space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl transition-all ${
                  isOpen ? 'bg-white border-[#173F38]/40 shadow-xs' : 'bg-white/80 border-[#F1E6D7]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-serif-title text-base sm:text-lg text-[#173F38] font-medium leading-snug">
                    {faq.question}
                  </h3>
                  <div className="p-1.5 text-[#173F38] shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 border-t border-[#F1E6D7]/60">
                    <p className="text-sm text-[#596561] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support note */}
        <div className="mt-12 text-center text-xs text-[#596561] flex items-center justify-center gap-2">
          <Mail className="w-4 h-4 text-[#173F38]" />
          <span>Ainda tem dúvidas? Fale conosco pelo e-mail: <strong className="text-[#173F38]">{BRAND_INFO.supportEmailPlaceholder}</strong></span>
        </div>

      </div>
    </section>
  );
};
