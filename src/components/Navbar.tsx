import React from 'react';
import { BookOpen, Sparkles, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  return (
    <header id="main-navbar" className="bg-[#FAF7F5]/95 backdrop-blur-md border-b border-[#E8DFD8] sticky top-[37px] sm:top-[39px] z-30 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#topo" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#9E8581] text-white flex items-center justify-center shadow-sm group-hover:bg-[#8A716D] transition-colors">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <span className="font-serif-title font-bold text-base sm:text-lg tracking-tight text-[#2C2420] block leading-tight">
              Filipenses 4.8
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#9E8581] block">
              Ministério de Leitura Cristã
            </span>
          </div>
        </a>

        <nav aria-label="Navegação rápida" className="hidden lg:flex items-center gap-7 text-xs font-semibold text-[#5A4E48] tracking-wide uppercase">
          <a href="#problema" className="hover:text-[#9E8581] transition-colors">Por Que Ler Não Transforma?</a>
          <a href="#aprender" className="hover:text-[#9E8581] transition-colors">O Que Vai Aprender</a>
          <a href="#estrutura" className="hover:text-[#9E8581] transition-colors">Estrutura</a>
          <a href="#bonus" className="hover:text-[#9E8581] transition-colors">Bônus</a>
          <a href="#professora" className="hover:text-[#9E8581] transition-colors">Professora</a>
          <a href="#faq" className="hover:text-[#9E8581] transition-colors">Dúvidas</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            id="nav-checkout-btn"
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 bg-[#9E8581] hover:bg-[#8A716D] text-white text-xs sm:text-sm font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span>QUERO POR R$ 27</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-80" />
          </button>
        </div>
      </div>
    </header>
  );
};
