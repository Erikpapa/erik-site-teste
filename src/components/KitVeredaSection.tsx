import React from 'react';
import { KIT_VEREDA_INFO, KIT_VEREDA_ITEMS } from '../data/courseData';
import { FileText, CheckSquare, Sparkles, Check } from 'lucide-react';

export const KitVeredaSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#173F38]" />;
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5 text-[#C56F4D]" />;
      default:
        return <FileText className="w-5 h-5 text-[#173F38]" />;
    }
  };

  return (
    <section id="kit-vereda" className="py-16 sm:py-24 bg-[#F1E6D7]/30 border-b border-[#F1E6D7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173F38]/10 text-[#173F38] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C56F4D]" />
            <span>{KIT_VEREDA_INFO.tag}</span>
          </div>

          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl text-[#173F38] font-normal leading-tight">
            {KIT_VEREDA_INFO.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#596561] leading-relaxed max-w-2xl mx-auto">
            {KIT_VEREDA_INFO.description}
          </p>
        </div>

        {/* 2-Column Presentation: Image Left, Kit Materials Right */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Image of the actual materials */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 bg-[#DFD0BC]/60 rounded-2xl rotate-1 pointer-events-none"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={`${import.meta.env.BASE_URL}images/materiais-da-pagina-a-vida.webp`}
                  alt="Materiais complementares do Kit Vereda de Aplicação organizados sobre uma mesa"
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[4/4]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-white/95 border-t border-[#F1E6D7] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#173F38] block">{KIT_VEREDA_INFO.title}</span>
                    <span className="text-[#596561]">Arquivos diagramados em PDF</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#FFF9F0] border border-[#F1E6D7] text-[#173F38] font-medium text-[11px]">
                    Opcional no Checkout
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Kit Description & Real Materials */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="bg-white border border-[#F1E6D7] rounded-xl p-6 shadow-xs space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C56F4D] block">
                Sobre este complemento
              </span>
              <h3 className="font-serif-title text-xl text-[#173F38] font-medium">
                {KIT_VEREDA_INFO.title}
              </h3>
              <p className="text-sm text-[#596561] leading-relaxed">
                {KIT_VEREDA_INFO.subtext}
              </p>
            </div>

            {/* List of Real Items Included in the Kit */}
            <div className="space-y-3">
              {KIT_VEREDA_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#F1E6D7] rounded-xl p-5 flex items-start gap-4 shadow-xs"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FFF9F0] border border-[#F1E6D7] flex items-center justify-center shrink-0 mt-0.5">
                    {getIcon(item.iconName)}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h4 className="font-serif-title text-base text-[#173F38] font-medium">
                        {item.title}
                      </h4>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#596561] bg-[#F1E6D7]/60 px-2 py-0.5 rounded">
                        {item.format}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#596561] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtle informative notice */}
            <div className="p-4 rounded-lg bg-[#FFF9F0] border border-[#DFD0BC] flex items-start gap-3 text-xs text-[#596561] leading-relaxed">
              <Check className="w-4 h-4 text-[#173F38] mt-0.5 shrink-0" />
              <span>
                A adesão ao Kit Vereda de Aplicação é opcional e poderá ser selecionada na tela segura de pagamento da Eduzz, caso você queira complementar sua experiência com esses recursos impressos e digitais.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
