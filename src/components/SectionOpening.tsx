import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { BRAND_INFO, APPROVED_IMAGES, getCaktoCheckoutUrl } from '../data/courseData';
import { SafeImage } from './SafeImage';
import { VeredaWheat } from './VeredaWheat';

export const SectionOpening: React.FC = () => {
  const checkoutUrl = getCaktoCheckoutUrl();

  return (
    <section className="pt-2 pb-6">
      
      {/* Cabeçalho exatamente igual à foto de referência */}
      <header className="flex items-center justify-between gap-3 py-3">
        {/* Marca com trigo botânico dourado */}
        <div className="flex items-center gap-2.5 min-w-0">
          <VeredaWheat className="w-[38px] h-[38px] text-[#C58B35] shrink-0" />
          <span className="font-serif-title text-[13px] sm:text-sm uppercase tracking-[0.24em] font-medium text-[#0A332B] truncate">
            {BRAND_INFO.brandName}
          </span>
        </div>

        {/* Botão verde escuro: Quero meu acesso → */}
        <a
          href={checkoutUrl}
          target="_self"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-[#0C382E] hover:bg-[#072B23] text-[#FFFDF9] text-[13px] sm:text-[14px] font-medium transition-colors shadow-2xs shrink-0"
        >
          <span>Quero meu acesso</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#FFFDF9]" />
        </a>
      </header>

      {/* Título Principal */}
      <h1 className="font-serif-title text-[30px] sm:text-[34px] font-normal text-[#0A332B] leading-[1.18] tracking-tight mt-5 sm:mt-7 mb-5">
        Você abre a Bíblia para<br />
        se aproximar de Deus.<br />
        Mas lê, relê… e continua<br />
        sem entender.
      </h1>

      {/* Foto Principal com detalhe sobreposto */}
      <div className="relative mb-5">
        <div className="rounded-2xl overflow-hidden shadow-xs border border-[#0A332B]/10 bg-white">
          <SafeImage
            src={APPROVED_IMAGES.hero.src}
            fallbackSrc={APPROVED_IMAGES.hero.fallback}
            alt={APPROVED_IMAGES.hero.alt}
            width={APPROVED_IMAGES.hero.width}
            height={APPROVED_IMAGES.hero.height}
            className="w-full h-auto object-cover object-[center_28%] aspect-[16/10]"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Pequeno detalhe sobreposto no canto inferior direito: mãos na Bíblia (sem tablet) */}
        <div className="absolute bottom-2.5 right-2.5 w-[34%] max-w-[145px] aspect-[4/3] rounded-xl overflow-hidden border-2 border-white shadow-md bg-white z-10">
          <SafeImage
            src={APPROVED_IMAGES.bibleDetail.src}
            fallbackSrc={APPROVED_IMAGES.bibleDetail.fallback}
            alt={APPROVED_IMAGES.bibleDetail.alt}
            width={APPROVED_IMAGES.bibleDetail.width}
            height={APPROVED_IMAGES.bibleDetail.height}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
      </div>

      {/* Parágrafo explicativo */}
      <p className="text-[15px] sm:text-[16px] text-[#485B55] leading-relaxed mb-4">
        Você quer entender a Palavra e levar essa leitura para a sua vida. Mas nem sempre sabe por onde começar.
      </p>

      {/* Bloco da Frase de Oração */}
      <div className="p-4 sm:p-5 rounded-r-xl border-l-[3.5px] border-[#C58B35] bg-[#F5EFE6] shadow-2xs mb-4">
        <p className="font-serif-title italic text-[15px] sm:text-[16px] text-[#0A332B] leading-snug">
          “Deus, eu quero me aproximar de Ti…<br className="hidden sm:inline" /> mas não sei por onde começar.”
        </p>
      </div>

      {/* Linha complementar */}
      <p className="text-[14px] text-[#485B55] mb-5">
        Uma direção para compreender, refletir e colocar em prática.
      </p>

      {/* Botão Principal Verde Escuro */}
      <div className="space-y-3">
        <a
          href={checkoutUrl}
          target="_self"
          className="w-full inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-3.5 px-5 rounded-xl bg-[#0C382E] hover:bg-[#072B23] text-[#FFFDF9] text-center font-serif-title text-[16px] sm:text-[17px] font-medium shadow-xs transition-colors group leading-snug"
        >
          <span>Quero compreender a Palavra</span>
          <span className="inline-flex items-center gap-1.5">
            e viver minha fé
            <ArrowRight className="w-4 h-4 text-[#FFFDF9] shrink-0 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </a>

        {/* Linha do formato e preço */}
        <div className="flex items-center gap-2 text-[14px] text-[#485B55]">
          <FileText className="w-4 h-4 text-[#0C382E] shrink-0" />
          <span>
            Guia + caderno em PDF • <strong className="font-serif-title font-semibold text-[#0A332B] text-[16px] sm:text-[17px]">{BRAND_INFO.priceFormatted}</strong>
          </span>
        </div>
      </div>

    </section>
  );
};
