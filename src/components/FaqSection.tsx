import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS } from '../data/courseData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF7F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9E8581]/15 text-[#6B534F] text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-extrabold text-[#2C2420] tracking-tight mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-[#6B5C55]">
            Tudo o que você precisa saber antes de garantir sua vaga no mini-curso:
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E8DFD7] bg-white overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer"
                >
                  <span className="font-serif-title text-base sm:text-lg font-bold text-[#2C2420]">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#8E6D68] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#61534D] leading-relaxed border-t border-[#F4ECE5] bg-[#FAF7F5]/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
