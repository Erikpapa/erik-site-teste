import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO, IMAGES, getCaktoCheckoutUrl } from '../data/courseData';
import { SafeImage } from './SafeImage';

export const HeroSection: React.FC = () => {
  const checkoutUrl = getCaktoCheckoutUrl();

  return (
    <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#FFF9F0] via-[#FFF9F0] to-[#F1E6D7]/40 border-b border-[#F1E6D7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Editorial Brand Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173F38]/10 text-[#173F38] text-xs font-semibold tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C56F4D]"></span>
          <span>{BRAND_INFO.brandName} • Guia + Caderno em PDF</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#173F38] leading-[1.18] max-w-3xl mx-auto">
          Leia com clareza. Guarde o essencial. <span className="italic font-medium text-[#C56F4D]">Viva o que aprendeu.</span>
        </h1>

        {/* Hero Image */}
        <div className="my-8 sm:my-10 relative max-w-2xl mx-auto">
          <div className="absolute -inset-2 sm:-inset-3 bg-[#F1E6D7]/60 rounded-3xl -rotate-1 pointer-events-none"></div>
          
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <SafeImage
              src={IMAGES.hero.imgur}
              fallbackSrc={IMAGES.hero.local}
              alt={IMAGES.hero.alt}
              width={IMAGES.hero.width}
              height={IMAGES.hero.height}
              className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/10]"
              loading="eager"
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#596561] leading-relaxed max-w-2xl mx-auto">
          Um guia cristão e um caderno de prática para você sair dos grifos esquecidos e transformar cada leitura em reflexão, oração e ação.
        </p>

        {/* Benefits List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 max-w-xl mx-auto text-sm text-[#222725] text-left">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#173F38] shrink-0" />
            <span>Dois PDFs autorais.</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#173F38] shrink-0" />
            <span>Jornada guiada de 21 dias.</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#173F38] shrink-0" />
            <span>Fundamentos teológicos.</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#173F38] shrink-0" />
            <span>Exercícios simples e aplicáveis.</span>
          </div>
        </div>

        {/* Primary Action Button & Microtext */}
        <div className="pt-8 space-y-3">
          <a
            href={checkoutUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#C56F4D] hover:bg-[#A95636] text-white font-semibold text-base shadow-md transition-all group"
          >
            <span>Quero o Guia + Caderno</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-xs text-[#596561]">
            Pagamento processado pela Cakto.
          </p>
        </div>

      </div>
    </section>
  );
};
