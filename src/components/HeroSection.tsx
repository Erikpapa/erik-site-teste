import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, BookOpen, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/courseData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#FFF9F0] via-[#FFF9F0] to-[#F1E6D7]/40 border-b border-[#F1E6D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Presentation */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Editorial Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173F38]/10 text-[#173F38] text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C56F4D]"></span>
              <span>Mini-Curso Prático • Vereda & Página</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#173F38] leading-[1.15]">
              Você termina o livro, mas a vida continua <span className="italic font-medium text-[#C56F4D]">exatamente igual?</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#596561] leading-relaxed max-w-2xl">
              <strong className="text-[#222725] font-semibold">Da Página à Vida</strong> é o mini-curso prático da Vereda & Página para mulheres cristãs que desejam ler com discernimento bíblico, reter o essencial e transformar páginas em atitudes na vida real.
            </p>

            {/* Editorial Bullet Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#222725]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#173F38] shrink-0" />
                <span>Compreenda o cerne sem se perder</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#173F38] shrink-0" />
                <span>Grifos e anotações sem poluição</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#173F38] shrink-0" />
                <span>Da reflexão para a oração e o lar</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#173F38] shrink-0" />
                <span>Ritmo sereno sem cobrança irreal</span>
              </div>
            </div>

            {/* Primary Action Button & Transparent Pricing */}
            <div className="pt-4 space-y-3">
              <a
                href={BRAND_INFO.eduzzUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#C56F4D] hover:bg-[#A95636] text-white font-semibold text-base shadow-md transition-all group"
              >
                <span>Quero começar o mini-curso por R$ 27</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-[#596561]">
                <span className="flex items-center gap-1">
                  <span className="line-through text-[#8A9692]">De R$ 67</span>
                  <strong className="text-[#173F38] font-bold">Por R$ 27 à vista</strong> ou 3x de R$ 9,68
                </span>
                <span className="hidden sm:inline text-[#D3A84F]">•</span>
                <span className="flex items-center gap-1 text-[#173F38]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Acesso imediato</span>
                </span>
                <span className="hidden sm:inline text-[#D3A84F]">•</span>
                <span className="flex items-center gap-1 text-[#173F38]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#173F38]" />
                  <span>Garantia incondicional de 7 dias</span>
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image with Editorial Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle background decoration plate */}
              <div className="absolute -inset-2 sm:-inset-3 bg-[#F1E6D7]/60 rounded-3xl -rotate-1 pointer-events-none"></div>
              
              {/* Image Container */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/images/hero-vereda-pagina.webp"
                  alt="Mulher lendo e fazendo anotações em um ambiente tranquilo"
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/11]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Editorial Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-xs p-3 sm:p-4 rounded-xl border border-[#F1E6D7] shadow-sm flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-[#C56F4D] uppercase font-bold tracking-wider block">
                      Mini-Curso Prático
                    </span>
                    <span className="text-xs sm:text-sm font-serif-title font-medium text-[#173F38]">
                      Da Página à Vida • Vereda & Página
                    </span>
                  </div>
                  <div className="text-right pl-3 border-l border-[#F1E6D7]">
                    <span className="text-[10px] text-[#8A9692] line-through block">R$ 67</span>
                    <span className="text-sm sm:text-base font-bold text-[#173F38]">R$ 27</span>
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
