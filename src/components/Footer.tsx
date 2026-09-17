import React from 'react';
import { BookOpen } from 'lucide-react';
import { BRAND_INFO } from '../data/courseData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#173F38] text-[#FFF9F0] pt-16 pb-24 sm:pb-16 border-t border-[#102C27]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Brand Presentation */}
          <div className="space-y-2 max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FFF9F0] text-[#173F38] flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-[#C56F4D]" />
              </div>
              <span className="font-serif-title text-xl font-semibold tracking-tight text-[#FFF9F0]">
                {BRAND_INFO.brandName}
              </span>
            </div>
            <p className="text-xs text-[#FFF9F0]/80 leading-relaxed">
              {BRAND_INFO.brandTagline}
            </p>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-[#FFF9F0]/80">
            <a href="#desafio" className="hover:text-white transition-colors">
              O Desafio
            </a>
            <a href="#metodo" className="hover:text-white transition-colors">
              O Método
            </a>
            <a href="#modulos" className="hover:text-white transition-colors">
              Módulos
            </a>
            <a href="#como-foi-pensado" className="hover:text-white transition-colors">
              Como foi pensado
            </a>
            <a href="#inscricao" className="hover:text-white transition-colors">
              Inscrição (R$ 27)
            </a>
            <a href="#duvidas" className="hover:text-white transition-colors">
              Dúvidas
            </a>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 border-t border-white/10 space-y-4 text-center text-xs text-[#FFF9F0]/60 leading-relaxed max-w-3xl mx-auto">
          <p>
            {BRAND_INFO.brandName} • {BRAND_INFO.productName}
          </p>
          <p>
            Aviso de responsabilidade: A leitura cristã e o método apresentado são ferramentas de apoio e discipulado pessoal. Os resultados dependem da dedicação, da constância e da aplicação prática de cada aluna no seu contexto individual. Pagamento e processamento seguros realizados através da plataforma Eduzz.
          </p>
          <p className="text-[11px] text-[#FFF9F0]/40">
            © {new Date().getFullYear()} {BRAND_INFO.brandName}. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
