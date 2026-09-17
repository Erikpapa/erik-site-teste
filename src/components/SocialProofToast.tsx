import React, { useState, useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';
import { SOCIAL_NOTIFICATIONS } from '../data/courseData';

export const SocialProofToast: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closedManually, setClosedManually] = useState(false);

  useEffect(() => {
    if (closedManually) return;

    // Show initial toast after 4s
    const timerInitial = setTimeout(() => {
      setVisible(true);
    }, 4000);

    // Rotate every 12s
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % SOCIAL_NOTIFICATIONS.length);
        setVisible(true);
      }, 800);
    }, 12000);

    return () => {
      clearTimeout(timerInitial);
      clearInterval(interval);
    };
  }, [closedManually]);

  if (!visible || closedManually) return null;

  const current = SOCIAL_NOTIFICATIONS[index];

  return (
    <div className="fixed bottom-16 sm:bottom-6 left-4 z-30 max-w-xs bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-[#E5D9D0] shadow-xl text-left animate-in slide-in-from-left-4 duration-300">
      <div className="flex items-start gap-2.5">
        <div className="w-8 h-8 rounded-full bg-[#9E8581]/20 text-[#8E6D68] flex items-center justify-center shrink-0 mt-0.5">
          <Sparkles className="w-4 h-4 fill-[#9E8581]" />
        </div>
        <div className="flex-1 pr-2">
          <p className="text-xs font-bold text-[#2C2420] leading-tight">
            {current.name} <span className="text-[10px] font-normal text-[#7A6B64]">de {current.city}</span>
          </p>
          <p className="text-[11px] text-[#554641] mt-0.5 leading-snug">
            {current.action}
          </p>
          <span className="text-[10px] text-[#9A8B84] mt-0.5 block">
            {current.timeAgo} • Vaga confirmada
          </span>
        </div>
        <button
          onClick={() => setClosedManually(true)}
          className="text-[#9A8B84] hover:text-[#2C2420] p-0.5"
          aria-label="Fechar notificação"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
