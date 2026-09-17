import React, { useState, useEffect } from 'react';
import { Timer, Zap, ShieldCheck } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenCheckout: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenCheckout }) => {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 58);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <aside aria-label="Aviso de oferta por tempo limitado" id="announcement-bar" className="bg-[#443331] text-[#FAF7F5] py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium sticky top-0 z-40 border-b border-[#5E4744]/40 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="font-semibold text-amber-200 uppercase tracking-wider text-[11px] sm:text-xs">
            Oferta Especial de Lançamento:
          </span>
          <span className="text-white/90 hidden md:inline">
            De <span className="line-through text-white/50">R$ 67</span> por apenas <strong>R$ 27,00</strong> (Economize 60%)
          </span>
        </div>

        <div className="flex items-center justify-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-1.5 bg-black/25 px-2.5 py-1 rounded text-amber-300 font-mono text-xs">
            <Timer className="w-3.5 h-3.5" />
            <span>Oferta expira em: <strong>{formattedTime}</strong></span>
          </div>

          <button
            id="announcement-cta-btn"
            onClick={onOpenCheckout}
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-[#2C2420] px-2.5 py-1 rounded transition-colors shadow-xs"
          >
            <Zap className="w-3 h-3 fill-current" />
            Aproveitar R$ 27
          </button>
        </div>
      </div>
    </aside>
  );
};
