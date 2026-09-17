import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { COURSE_INFO } from '../data/courseData';

interface StickyBottomBarProps {
  onOpenCheckout: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenCheckout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    <div id="sticky-bottom-bar" className="fixed bottom-0 left-0 right-0 z-40 bg-[#2C2420]/95 backdrop-blur-md text-white py-2.5 px-4 border-t border-white/10 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <p className="font-serif-title text-xs sm:text-sm font-bold text-white line-clamp-1">
              {COURSE_INFO.title}
            </p>
            <p className="text-[11px] text-amber-200">
              Oferta exclusiva: 6 Blocos + Bônus Inclusos
            </p>
          </div>
          
          <div className="flex items-baseline gap-1">
            <span className="text-[11px] text-white/60 line-through">R$ 67</span>
            <span className="font-serif-title text-lg sm:text-xl font-extrabold text-amber-300">
              R$ 27,00
            </span>
          </div>
        </div>

        <button
          id="sticky-checkout-btn"
          onClick={onOpenCheckout}
          className="inline-flex items-center gap-2 bg-[#9E8581] hover:bg-[#B39995] text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer whitespace-nowrap"
        >
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>QUERO ME INSCREVER</span>
          <ArrowRight className="w-3.5 h-3.5 opacity-90 hidden sm:inline" />
        </button>
      </div>
    </div>
  );
};
