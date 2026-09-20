import React from 'react';
import { BRAND_INFO } from '../data/courseData';
import { Check, ShieldCheck, Lock, Zap, ArrowRight, Sparkles } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section id="inscricao" className="py-20 sm:py-28 bg-[#FFF9F0] border-b border-[#F1E6D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173F38]/10 text-[#173F38] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C56F4D]" />
            <span>Condição Especial de Inscrição</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl text-[#173F38] font-normal leading-tight">
            Comece a transformar sua forma de ler <span className="italic text-[#C56F4D]">ainda hoje</span>
          </h2>

          <p className="text-sm sm:text-base text-[#596561] leading-relaxed">
            Um valor simbólico e acessível para você ter direção, método e clareza no seu próximo livro.
          </p>
        </div>

        {/* Pricing Card with 2 Columns */}
        <div className="mt-12 bg-white border-2 border-[#173F38] rounded-2xl overflow-hidden shadow-sm">
          
          {/* Card Top Banner */}
          <div className="bg-[#173F38] text-white py-3.5 px-6 text-center">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D3A84F]" />
              <span>Acesso Imediato • Mini-Curso Prático Completo</span>
            </span>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Text, Price, Checklist & CTA */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Price Presentation */}
                <div className="space-y-1.5 pb-5 border-b border-[#F1E6D7]">
                  <span className="text-xs text-[#8A9692] uppercase tracking-wider font-semibold line-through block">
                    De R$ {BRAND_INFO.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-medium text-[#596561]">Por apenas</span>
                    <span className="font-serif-title text-4xl sm:text-5xl font-bold text-[#173F38]">
                      R$ {BRAND_INFO.price.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-xs text-[#596561]">à vista</span>
                  </div>

                  <span className="text-xs sm:text-sm text-[#C56F4D] font-semibold block">
                    ou em até {BRAND_INFO.installments} no cartão
                  </span>
                </div>

                {/* Checklist of inclusions */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#173F38] block">
                    Tudo o que está incluído na sua vaga:
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#222725]">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#173F38] mt-0.5 shrink-0" />
                      <span>7 aulas práticas em vídeo (alta definição)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#173F38] mt-0.5 shrink-0" />
                      <span>Menos de 2 horas de conteúdo direto ao ponto</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#173F38] mt-0.5 shrink-0" />
                      <span>15 dias de acesso integral às aulas</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#173F38] mt-0.5 shrink-0" />
                      <span>Acesso pelo celular, tablet ou computador</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#173F38] mt-0.5 shrink-0" />
                      <span>Garantia incondicional de 7 dias</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#173F38] mt-0.5 shrink-0" />
                      <span>Pagamento 100% seguro via Eduzz</span>
                    </div>
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="pt-3 space-y-3">
                  <a
                    href={BRAND_INFO.eduzzUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-lg bg-[#C56F4D] hover:bg-[#A95636] text-white font-semibold text-base shadow-md transition-all group"
                  >
                    <span>Garantir minha vaga agora por R$ 27</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Security badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-[#596561]">
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-[#173F38]" />
                      <span>Pagamento 100% Seguro</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#C56F4D]" />
                      <span>Acesso Imediato</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#173F38]" />
                      <span>7 Dias de Garantia</span>
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column: CTA Final Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="absolute -inset-2 bg-[#F1E6D7]/80 rounded-2xl -rotate-1 pointer-events-none"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <img
                      src={`${import.meta.env.BASE_URL}images/cta-final-vereda-pagina.webp`}
                      alt="Mulher lendo com tranquilidade perto de uma janela"
                      className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[4/5]"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-4 bg-white/95 border-t border-[#F1E6D7] text-center">
                      <span className="text-xs font-serif-title text-[#173F38] italic block">
                        “Leitura cristã com direção para a vida real.”
                      </span>
                      <span className="text-[10px] text-[#596561] uppercase tracking-wider font-semibold mt-1 block">
                        Vereda & Página
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
