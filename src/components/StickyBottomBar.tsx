import React, { useState, useEffect } from 'react';
import { BRAND_INFO } from '../data/courseData';
import { ArrowRight, BookOpen } from 'lucide-react';

export const StickyBottomBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section (~450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#FFF9F0]/95 backdrop-blur-md border-t border-[#F1E6D7] shadow-lg py-3 px-4 transition-transform duration-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Product & Teacher info */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#173F38] flex items-center justify-center text-[#FFF9F0]">
            <BookOpen className="w-4 h-4 text-[#D3A84F]" />
          </div>
          <div>
            <span className="font-serif-title text-sm font-semibold text-[#173F38] block leading-tight">
              Da Página à Vida
            </span>
            <span className="text-[11px] text-[#596561] block">
              Mini-curso Vereda & Página • 15 dias de acesso
            </span>
          </div>
        </div>

        {/* Center / Right: Pricing & Direct Eduzz CTA */}
        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
          <div className="text-left sm:text-right">
            <div className="flex items-baseline gap-1">
              <span className="text-xs text-[#8A9692] line-through">R$ 67</span>
              <span className="font-serif-title text-lg font-bold text-[#173F38]">R$ 27</span>
              <span className="text-[10px] text-[#596561]">à vista</span>
            </div>
            <span className="text-[10px] text-[#C56F4D] block font-medium">
              ou 3x de R$ 9,68
            </span>
          </div>

          <a
            href={BRAND_INFO.eduzzUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md bg-[#C56F4D] hover:bg-[#A95636] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm shrink-0"
          >
            <span>Garantir minha vaga</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
