import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/courseData';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside aria-label="Aviso de inscrição" className="bg-[#173F38] text-[#FFF9F0] text-xs sm:text-sm py-2 px-4 transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <Sparkles className="w-3.5 h-3.5 text-[#D3A84F] shrink-0" />
          <span className="font-medium text-center sm:text-left">
            Inscrições abertas para o mini-curso <strong className="font-semibold text-white">Da Página à Vida</strong> • Apenas <span className="text-[#D3A84F] font-bold">R$ 27</span>
          </span>
        </div>

        <a
          href={BRAND_INFO.eduzzUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-xs tracking-wide uppercase px-3 py-1 rounded bg-[#C56F4D] hover:bg-[#A95636] text-white transition-colors"
        >
          <span>Garantir vaga</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </aside>
  );
};
