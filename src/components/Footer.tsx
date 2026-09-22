import React from 'react';
import { BookOpen } from 'lucide-react';
import { BRAND_INFO, getCaktoCheckoutUrl } from '../data/courseData';

export const Footer: React.FC = () => {
  const checkoutUrl = getCaktoCheckoutUrl();

  return (
    <footer className="bg-[#173F38] text-[#FFF9F0] pt-14 pb-24 sm:pb-16 border-t border-[#102C27]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          {/* Brand Presentation */}
          <div className="space-y-1.5 max-w-sm">
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#FFF9F0] text-[#173F38] flex items-center justify-center">
                <BookOpen className="w-3.5 h-3.5 text-[#C56F4D]" />
              </div>
              <span className="font-serif-title text-xl font-semibold tracking-tight text-[#FFF9F0]">
                {BRAND_INFO.brandName}
              </span>
            </div>
            <p className="text-xs text-[#FFF9F0]/80">
              {BRAND_INFO.productName} • Guia + Caderno em PDF (52 páginas)
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-[#FFF9F0]/80">
            <a href="#oferta" className="hover:text-white transition-colors">
              Oferta ({BRAND_INFO.priceFormatted})
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              Perguntas frequentes
            </a>
            <a
              href={checkoutUrl}
              className="hover:text-white transition-colors underline underline-offset-4 text-[#D3A84F]"
            >
              Checkout oficial Cakto
            </a>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 border-t border-white/10 space-y-3 text-center text-xs text-[#FFF9F0]/60 leading-relaxed max-w-2xl mx-auto">
          <p>
            {BRAND_INFO.brandName} • {BRAND_INFO.productName}
          </p>
          <p>
            Processamento de pagamento e entrega digital realizados com segurança pela plataforma Cakto.
          </p>
          <p className="text-[11px] text-[#FFF9F0]/40">
            © {new Date().getFullYear()} {BRAND_INFO.brandName}. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
