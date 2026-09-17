import React from 'react';
import { 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Lock, 
  Clock, 
  ArrowRight, 
  ExternalLink,
  CreditCard,
  QrCode
} from 'lucide-react';
import { COURSE_INFO } from '../data/courseData';

interface PricingSectionProps {
  onOpenCheckout: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="investimento" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF7F5] via-[#F4EDE7] to-[#FAF7F5] relative overflow-hidden">
      
      {/* Decorative top blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#9E8581]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9E8581]/20 text-[#6B524E] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Condição Especial Low Ticket
          </span>
          <h2 className="font-serif-title text-3xl sm:text-5xl font-extrabold text-[#2C2420] tracking-tight mb-3">
            Investimento Acessível
          </h2>
          <p className="text-sm sm:text-base text-[#6E5E57]">
            Este mini-curso foi feito para ser acessível, prático e transformador para toda mulher cristã.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-3xl border-2 border-[#9E8581] shadow-2xl shadow-[#8E6D68]/15 overflow-hidden relative">
          
          {/* Top Banner Ribbon */}
          <div className="bg-[#8E6D68] text-white py-3 px-4 text-center text-xs sm:text-sm font-bold tracking-wide uppercase flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 fill-amber-300 text-amber-300" />
            <span>DESCONTO DE LANÇAMENTO LIBERADO • MENOS DE R$ 1 POR DIA</span>
          </div>

          <div className="p-6 sm:p-10 text-center">
            
            <p className="text-xs sm:text-sm font-semibold text-[#8C7D76] uppercase tracking-wider mb-2">
              Acesso Completo ao Mini-Curso + Todos os Bônus
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-[#8A7972] mb-1">
              <span>De:</span>
              <span className="line-through text-[#9E8581] font-semibold text-base">R$ 67,00</span>
            </div>

            <p className="text-xs sm:text-sm font-bold text-rose-700 tracking-wide uppercase mb-3">
              Por tempo limitado: APENAS
            </p>

            {/* Big Price */}
            <div className="flex items-baseline justify-center gap-1 text-[#2C2420] mb-2">
              <span className="text-2xl sm:text-3xl font-extrabold">R$</span>
              <span className="text-5xl sm:text-7xl font-extrabold tracking-tight font-serif-title">27</span>
              <span className="text-base sm:text-lg text-[#7A6C65] font-semibold">,00</span>
            </div>

            <p className="text-xs sm:text-sm text-[#665750] font-medium mb-6">
              Ou em até <strong>3x de R$ 9,68</strong> no cartão de crédito
            </p>

            {/* Payment methods badges */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 py-1.5 px-4 rounded-full bg-[#FAF7F5] border border-[#E9DFD7] text-xs text-[#6A5A53] mb-8">
              <span className="flex items-center gap-1 font-semibold text-emerald-700">
                <QrCode className="w-3.5 h-3.5" /> Pix Instantâneo
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-semibold">
                <CreditCard className="w-3.5 h-3.5 text-[#9E8581]" /> Cartão de Crédito
              </span>
              <span>•</span>
              <span>Boleto Bancário</span>
            </div>

            {/* What is included checklist */}
            <div className="max-w-md mx-auto text-left space-y-3 mb-8 bg-[#FAF7F5] p-5 rounded-2xl border border-[#EDE2D8] text-xs sm:text-sm text-[#4E413B]">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>6 Blocos Completos</strong> em vídeo-aulas práticas</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Checklist: 7 perguntas</strong> para aplicar o que lê (PDF)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Material de apoio</strong> para as aulas (PDF para impressão)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Acesso imediato</strong> no e-mail após confirmação</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Oportunidade com presente secreto</strong> para o Clube Fp4.8</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="max-w-md mx-auto space-y-3">
              <button
                id="pricing-checkout-btn"
                onClick={onOpenCheckout}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#9E8581] hover:bg-[#886F6B] text-white font-extrabold text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl shadow-[#9E8581]/30 transition-all transform active:scale-95 animate-pulse-subtle cursor-pointer"
              >
                <span>QUERO PARTICIPAR AGORA (R$ 27,00)</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                id="eduzz-direct-link"
                href={COURSE_INFO.eduzzUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-xs text-[#7A6A63] hover:text-[#2C2420] underline transition-colors pt-1"
              >
                <span>Ou pagar diretamente na página da Eduzz</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Access clarification box */}
            <div className="mt-6 pt-6 border-t border-[#EFE6DF] text-xs text-[#6E5F58] leading-relaxed max-w-md mx-auto">
              <div className="flex items-start gap-2 bg-[#F6F0EC] p-3 rounded-xl text-left">
                <Clock className="w-4 h-4 text-[#8E6D68] shrink-0 mt-0.5" />
                <p>
                  <strong>15 dias de acesso:</strong> O curso é muito rápido, dividido em aulas curtas e objetivas. 15 dias será mais do que suficiente para você assistir e já sair colocando em prática, pode ter certeza!
                </p>
              </div>
            </div>

            {/* Guarantee and security note */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-[#7B6D66]">
              <span className="flex items-center gap-1 text-emerald-700 font-medium">
                <Lock className="w-3.5 h-3.5" /> Checkout 100% Protegido
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#8E6D68] font-medium">
                <ShieldCheck className="w-3.5 h-3.5" /> Garantia Incondicional de 7 Dias
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
