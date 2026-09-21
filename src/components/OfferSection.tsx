import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Download } from 'lucide-react';
import { BRAND_INFO, IMAGES, getCaktoCheckoutUrl } from '../data/courseData';
import { SafeImage } from './SafeImage';

export const OfferSection: React.FC = () => {
  const checkoutUrl = getCaktoCheckoutUrl();
  const isExternal = checkoutUrl.startsWith('http');

  return (
    <section id="oferta" className="py-16 sm:py-24 bg-[#FFF9F0] border-b border-[#F1E6D7] scroll-mt-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Offer Details */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-wider text-[#C56F4D] uppercase block">
              Acesso Completo
            </span>

            <h2 className="font-serif-title text-3xl sm:text-4xl font-normal text-[#173F38] leading-[1.2]">
              Comece com o Guia + Caderno.
            </h2>

            {/* Included Items */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#173F38] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-[#222725]">
                  Guia Da Página à Vida — 26 páginas.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#173F38] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-[#222725]">
                  Caderno Da Página à Vida — 26 páginas.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#173F38] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-[#222725]">
                  Jornada prática de 21 dias.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#173F38] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-[#222725]">
                  Entrega digital após a aprovação do pagamento.
                </span>
              </div>
            </div>

            {/* Pricing Tag */}
            <div className="p-6 rounded-2xl bg-white border border-[#F1E6D7] shadow-xs space-y-4">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#8A9692] font-semibold block">
                  Valor do investimento
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-serif-title font-semibold text-[#173F38]">
                    {BRAND_INFO.priceFormatted}
                  </span>
                  <span className="text-sm text-[#596561]">
                    — {BRAND_INFO.paymentType}
                  </span>
                </div>
              </div>

              {/* Commercial Button */}
              <div className="space-y-2 pt-2">
                <a
                  href={checkoutUrl}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#C56F4D] hover:bg-[#A95636] text-white font-semibold text-base shadow-md transition-all group"
                >
                  <span>Quero receber os dois PDFs</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-xs text-[#596561] text-center pt-1">
                  Compra concluída no checkout oficial da Cakto.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Final Call Image */}
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-2 bg-[#F1E6D7]/70 rounded-2xl rotate-1 pointer-events-none"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
                <SafeImage
                  src={IMAGES.offer.imgur}
                  fallbackSrc={IMAGES.offer.local}
                  alt={IMAGES.offer.alt}
                  width={IMAGES.offer.width}
                  height={IMAGES.offer.height}
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[4/5]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
