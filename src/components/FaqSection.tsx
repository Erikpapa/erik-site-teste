import React, { useState } from 'react';
import { FAQS } from '../data/courseData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FFF9F0] border-b border-[#F1E6D7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#C56F4D] uppercase">
            Esclarecimentos
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl text-[#173F38] font-normal leading-[1.2]">
            Perguntas frequentes
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${index}`;
            const headerId = `faq-question-${index}`;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-colors ${
                  isOpen ? 'bg-white border-[#173F38]/40 shadow-xs' : 'bg-white/80 border-[#F1E6D7]'
                }`}
              >
                <button
                  id={headerId}
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#173F38] rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <h3 className="font-serif-title text-base sm:text-lg text-[#173F38] font-medium leading-snug">
                    {faq.question}
                  </h3>
                  <div className="p-1 text-[#173F38] shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 border-t border-[#F1E6D7]/60"
                  >
                    <p className="text-sm text-[#596561] leading-relaxed">
                      {faq.answer}
                    </p>
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
