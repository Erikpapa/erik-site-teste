import React from 'react';
import { BookOpen, CheckCircle2, Compass, BookmarkCheck, HeartHandshake } from 'lucide-react';

export const AboutCourseSection: React.FC = () => {
  return (
    <section id="como-foi-pensado" className="py-20 sm:py-28 bg-[#FFF9F0] border-b border-[#F1E6D7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173F38]/10 text-[#173F38] text-xs font-semibold tracking-wide uppercase">
            <Compass className="w-3.5 h-3.5 text-[#C56F4D]" />
            <span>Metodologia Vereda & Página</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#173F38] font-normal leading-tight">
            Como o curso foi pensado
          </h2>

          <p className="text-base sm:text-lg text-[#596561] leading-relaxed max-w-2xl mx-auto">
            <strong className="text-[#173F38] font-medium">Da Página à Vida</strong> foi desenvolvido pela Vereda & Página para ajudar mulheres cristãs a transformar a leitura em compreensão, registro e aplicação prática. As aulas apresentam um caminho simples e organizado para quem deseja ler com mais clareza e levar os aprendizados para a rotina.
          </p>
        </div>

        {/* 3 Foundational Pillars of the Course */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#F1E6D7] rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-4 shadow-xs">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FFF9F0] border border-[#F1E6D7] flex items-center justify-center text-[#173F38]">
                <BookOpen className="w-5 h-5 text-[#C56F4D]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C56F4D] block">
                01 • Compreensão
              </span>
              <h3 className="font-serif-title text-xl text-[#173F38] font-medium leading-snug">
                Leitura com discernimento
              </h3>
              <p className="text-sm text-[#596561] leading-relaxed">
                Desacelere a leitura apressada para captar a tese central e os fundamentos do autor, dialogando ativamente com o texto.
              </p>
            </div>
            <div className="pt-3 border-t border-[#F1E6D7] flex items-center gap-2 text-xs text-[#173F38]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#173F38] shrink-0" />
              <span>Sem ansiedade por páginas</span>
            </div>
          </div>

          <div className="bg-white border border-[#F1E6D7] rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-4 shadow-xs">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FFF9F0] border border-[#F1E6D7] flex items-center justify-center text-[#173F38]">
                <BookmarkCheck className="w-5 h-5 text-[#C56F4D]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C56F4D] block">
                02 • Registro
              </span>
              <h3 className="font-serif-title text-xl text-[#173F38] font-medium leading-snug">
                Memória viva e essencial
              </h3>
              <p className="text-sm text-[#596561] leading-relaxed">
                Um sistema limpo de grifos reflexivos e anotações sintéticas em caderno, permitindo revisitar os aprendizados a qualquer momento.
              </p>
            </div>
            <div className="pt-3 border-t border-[#F1E6D7] flex items-center gap-2 text-xs text-[#173F38]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#173F38] shrink-0" />
              <span>Sem poluição visual</span>
            </div>
          </div>

          <div className="bg-white border border-[#F1E6D7] rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-4 shadow-xs">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FFF9F0] border border-[#F1E6D7] flex items-center justify-center text-[#173F38]">
                <HeartHandshake className="w-5 h-5 text-[#C56F4D]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C56F4D] block">
                03 • Aplicação
              </span>
              <h3 className="font-serif-title text-xl text-[#173F38] font-medium leading-snug">
                Da página para o cotidiano
              </h3>
              <p className="text-sm text-[#596561] leading-relaxed">
                Perguntas e exercícios que convertem os princípios lidos em ajustes no lar, palavras de oração e decisões diárias.
              </p>
            </div>
            <div className="pt-3 border-t border-[#F1E6D7] flex items-center gap-2 text-xs text-[#173F38]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#173F38] shrink-0" />
              <span>Frutos reais na rotina</span>
            </div>
          </div>
        </div>

        {/* Institutional Commitment Box */}
        <div className="mt-12 bg-white border border-[#DFD0BC] rounded-xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-xs">
          <p className="font-serif-title text-base sm:text-lg text-[#173F38] italic leading-relaxed">
            “A leitura cristã não existe para inflar o intelecto com vaidade ou metas vazias, mas para iluminar a mente, fortalecer o coração e produzir frutos no dia a dia.”
          </p>
          <span className="text-xs uppercase tracking-wider text-[#596561] font-semibold mt-3 block">
            Vereda & Página • Leitura com Direção
          </span>
        </div>

      </div>
    </section>
  );
};
