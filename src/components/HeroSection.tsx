import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Lock, 
  ShieldCheck, 
  Play, 
  BookOpen, 
  ArrowRight, 
  Star,
  Users,
  Zap
} from 'lucide-react';
import { COURSE_INFO } from '../data/courseData';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="topo" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF7F5] via-[#F6F0EC] to-[#FAF7F5]">
      {/* Decorative background aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#9E8581]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Top Pill Category */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9E8581]/15 border border-[#9E8581]/30 text-[#6D5350] text-xs sm:text-sm font-semibold mb-6 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#9E8581]" />
            <span>MINI-CURSO OFICIAL • FILIPENSES QUATRO OITO</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif-title text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#2C2420] tracking-tight leading-[1.15] mb-5">
            Leitura cristã que <span className="text-[#8E6D68] italic font-serif">transforma</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-[#5F534C] font-normal leading-relaxed max-w-2xl mb-8">
            Como aplicar o que você lê à sua vida com <span className="font-semibold text-[#2C2420]">direção, profundidade e constância espiritual</span>.
          </p>

          {/* Social Proof strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 py-2 px-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-[#E7DDD5] mb-8 shadow-xs">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-[#2C2420] ml-1">4.9/5</span>
            </div>
            <span className="hidden sm:inline text-[#D4C6BD]">|</span>
            <div className="flex items-center gap-2 text-xs font-medium text-[#5E514B]">
              <Users className="w-4 h-4 text-[#9E8581]" />
              <span>Mais de <strong>3.400 mulheres</strong> impactadas pelo Ministério</span>
            </div>
            <span className="hidden sm:inline text-[#D4C6BD]">|</span>
            <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              <Zap className="w-3.5 h-3.5" />
              <span>Em menos de 2 horas</span>
            </div>
          </div>

          {/* Visual Showcase Card Mockup */}
          <div className="w-full max-w-3xl bg-white rounded-3xl p-5 sm:p-8 border border-[#E7DDD5] shadow-xl shadow-[#8B6D68]/10 mb-10 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-100 to-transparent w-40 h-20 -z-0 opacity-50" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Mockup Left: Course Book & Device Concept */}
              <div className="md:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-48 sm:w-56 aspect-[3/4] bg-gradient-to-br from-[#7C615D] to-[#4F3C39] rounded-2xl p-4 text-white shadow-2xl flex flex-col justify-between border-4 border-white transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="text-right">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 bg-amber-400 text-[#2C2420] rounded-full">
                      Mini-Curso
                    </span>
                  </div>
                  
                  <div className="my-auto text-center px-2">
                    <BookOpen className="w-8 h-8 mx-auto mb-2 text-amber-200 opacity-90" />
                    <p className="font-serif-title font-bold text-lg leading-tight text-white">
                      Leitura Cristã Que Transforma
                    </p>
                    <p className="text-[11px] text-white/80 mt-1">
                      Filipenses Quatro Oito
                    </p>
                  </div>

                  <div className="border-t border-white/20 pt-2 flex items-center justify-between text-[10px] text-white/80">
                    <span>Naná Castillo</span>
                    <span className="font-bold text-amber-200">6 Blocos + Bônus</span>
                  </div>

                  {/* Play circle badge */}
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-amber-400 text-[#2C2420] rounded-full flex items-center justify-center shadow-md font-bold text-xs">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>
                <span className="text-[11px] text-[#8C7D76] mt-3 text-center">
                  Vídeo-aulas curtas + Material em PDF para impressão
                </span>
              </div>

              {/* Mockup Right: Fast Benefits & Low Ticket Hook */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#8E6D68] uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Acesso Imediato • 100% Online</span>
                  </div>
                  
                  <h2 className="font-serif-title text-xl sm:text-2xl font-bold text-[#2C2420] leading-snug mb-3">
                    Pare de acumular páginas lidas e comece a colher frutos reais na sua caminhada diária.
                  </h2>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#50443E] mb-6">
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span><strong>6 Blocos práticos:</strong> do propósito à aplicação sem enrolação.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span><strong>Checklist das 7 Perguntas</strong> em PDF pronto para imprimir.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span><strong>Caderno de Anotações</strong> exclusivo de apoio ao estudo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span><strong>15 dias de acesso</strong> — curso objetivo para maratonar em menos de 2h.</span>
                    </li>
                  </ul>
                </div>

                {/* Pricing Box inside Hero */}
                <div className="p-4 rounded-2xl bg-[#F6F0EC] border border-[#E3D7CE] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#8C7D76] line-through font-medium">De R$ 67,00</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-700 px-2 py-0.5 rounded">
                        Economize R$ 40
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xs text-[#5E514B] font-semibold">Por apenas</span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#2C2420]">R$ 27,00</span>
                    </div>
                    <span className="text-[11px] text-[#7A6C65]">ou 3x de R$ 9,68 no cartão</span>
                  </div>

                  <button
                    id="hero-checkout-btn"
                    onClick={onOpenCheckout}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#9E8581] hover:bg-[#886F6B] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-[#9E8581]/30 transition-all transform active:scale-95 animate-pulse-subtle"
                  >
                    <span>COMEÇAR AGORA</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick trust reassurance */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#6F615A]">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              Pagamento 100% Criptografado
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              Liberação Imediata no Pix
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9E8581]" />
              7 Dias de Garantia Incondicional
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
