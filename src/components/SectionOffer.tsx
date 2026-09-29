import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { BRAND_INFO, APPROVED_IMAGES, FAQS, getCaktoCheckoutUrl } from '../data/courseData';
import { SafeImage } from './SafeImage';
import { VeredaWheat } from './VeredaWheat';

export const SectionOffer: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const checkoutUrl = getCaktoCheckoutUrl();

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="oferta" className="pt-4 pb-12">
      
      {/* Bloco Verde da Oferta Oficial exatamente igual à referência */}
      <div className="relative rounded-2xl bg-[#09342B] text-white p-5 sm:p-7 overflow-hidden shadow-lg border border-[#06241E]">
        
        {/* Ilustração botânica de trigo em linha dourada no canto esquerdo */}
        <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-32 pointer-events-none opacity-20">
          <svg viewBox="0 0 100 240" fill="none" className="w-full h-full text-[#D4A359]" preserveAspectRatio="none">
            <path d="M5 240C15 180 20 120 10 40C8 28 6 15 5 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 190C22 175 32 170 38 180C34 190 22 192 12 190Z" fill="currentColor" opacity="0.6" />
            <path d="M10 150C20 135 30 130 36 140C32 150 20 152 10 150Z" fill="currentColor" opacity="0.6" />
            <path d="M8 110C18 95 28 90 34 100C30 110 18 112 8 110Z" fill="currentColor" opacity="0.6" />
            <path d="M7 70C17 55 27 50 33 60C29 70 17 72 7 70Z" fill="currentColor" opacity="0.6" />
          </svg>
        </div>

        {/* Conteúdo interno da oferta */}
        <div className="relative z-10">
          
          <div className="flex items-start justify-between gap-3">
            {/* Textos da Oferta */}
            <div className="space-y-2 flex-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A359] block">
                Oferta Oficial
              </span>

              <h3 className="font-serif-title text-[22px] sm:text-[26px] font-normal text-[#FFFDF9] leading-tight">
                Seu próximo passo<br />
                começa aqui.
              </h3>

              <div className="pt-1">
                <span className="font-serif-title text-[17px] sm:text-[19px] font-medium text-[#FFFDF9] block leading-snug">
                  {BRAND_INFO.productName}
                </span>
                <span className="text-[12px] text-[#C5D8D2] block mt-0.5">
                  {BRAND_INFO.format}
                </span>
              </div>

              {/* Preço */}
              <div className="flex items-center gap-2.5 pt-1.5">
                <span className="font-serif-title text-[30px] sm:text-[34px] font-normal text-[#FFFDF9] leading-none">
                  {BRAND_INFO.priceFormatted}
                </span>
                <span className="text-[#FFFDF9]/40 text-base">|</span>
                <span className="text-[12px] text-[#C5D8D2]">
                  {BRAND_INFO.paymentType}
                </span>
              </div>
            </div>

            {/* Imagem real das duas capas com trigo */}
            <div className="w-[125px] sm:w-[170px] shrink-0 pt-2">
              <SafeImage
                src={APPROVED_IMAGES.covers.src}
                fallbackSrc={APPROVED_IMAGES.covers.fallback}
                alt={APPROVED_IMAGES.covers.alt}
                width={APPROVED_IMAGES.covers.width}
                height={APPROVED_IMAGES.covers.height}
                className="w-full h-auto object-contain drop-shadow-md rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Botão branco interno em largura total */}
          <div className="mt-4 pt-1">
            <a
              href={checkoutUrl}
              target="_self"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white hover:bg-[#F5F2EB] text-[#0C382E] font-medium text-[15px] sm:text-[16px] transition-colors shadow-xs group text-center leading-snug"
            >
              <span>Quero compreender a Palavra e viver minha fé</span>
              <ArrowRight className="w-4 h-4 text-[#0C382E] shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Linha de material digital em PDF */}
            <div className="flex items-center justify-center gap-1.5 text-[12px] text-[#C5D8D2] mt-2.5">
              <FileText className="w-3.5 h-3.5 text-[#D4A359] shrink-0" />
              <span>Material digital em PDF</span>
            </div>
          </div>

        </div>

      </div>

      {/* Dúvidas Frequentes */}
      <div className="mt-9 mb-8">
        
        {/* Divisor com linhas douradas */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-[1px] w-12 sm:w-16 bg-[#C58B35]/30"></span>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A332B]">
            Dúvidas frequentes
          </span>
          <span className="h-[1px] w-12 sm:w-16 bg-[#C58B35]/30"></span>
        </div>

        {/* Acordeões */}
        <div className="space-y-2.5">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            const contentId = `faq-answer-${index}`;
            const headerId = `faq-question-${index}`;

            return (
              <div
                key={index}
                className="rounded-xl border border-[#0A332B]/10 bg-white overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  id={headerId}
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="font-serif-title text-[15px] sm:text-[16px] text-[#0A332B] font-normal leading-snug">
                    {faq.question}
                  </span>
                  <div className="text-[#0A332B] shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-4 pb-4 pt-0 text-[13px] text-[#485B55] leading-relaxed border-t border-[#0A332B]/5"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Rodapé Oficial idêntico à imagem de referência */}
      <footer className="pt-6 border-t border-[#C58B35]/25 text-center space-y-2 text-xs text-[#485B55]">
        
        {/* Marca centralizada com símbolo de trigo */}
        <div className="flex items-center justify-center gap-2">
          <VeredaWheat className="w-[26px] h-[26px] text-[#C58B35] shrink-0" />
          <span className="font-serif-title text-[13px] sm:text-sm uppercase tracking-[0.2em] font-medium text-[#0A332B]">
            {BRAND_INFO.brandName}
          </span>
        </div>

        <p className="text-[12px]">
          Suporte ao leitor: <a href={`mailto:${BRAND_INFO.supportEmail}`} className="underline hover:text-[#0A332B]">{BRAND_INFO.supportEmail}</a>
        </p>

        <p className="text-[11px] text-[#485B55]/75">
          © 2026 {BRAND_INFO.brandName}. Todos os direitos reservados.
        </p>
      </footer>

    </section>
  );
};
