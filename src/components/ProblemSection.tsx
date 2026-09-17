import React from 'react';
import { Quote, AlertCircle, Sparkles, HeartHandshake } from 'lucide-react';
import { PROBLEM_QUOTES } from '../data/courseData';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problema" className="py-16 sm:py-24 bg-[#F2ECE6] relative overflow-hidden">
      {/* Subtle organic pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#9E8581_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Intro heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9E8581]/15 text-[#6B534F] text-xs font-bold tracking-wider uppercase mb-4">
            <AlertCircle className="w-3.5 h-3.5" />
            A Grande Frustração do Leitor Cristão
          </span>
          <h2 className="font-serif-title text-2xl sm:text-4xl font-extrabold text-[#2C2420] tracking-tight leading-tight mb-4">
            Você já leu livros cristãos super recomendados e indicados por todos...
          </h2>
          <p className="text-base sm:text-xl text-[#675A53] font-medium">
            Mas, algum tempo depois de fechar a última página, se pegou pensando:
          </p>
        </div>

        {/* 3 Real Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {PROBLEM_QUOTES.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E3D6CD] shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FAF7F5] border border-[#E8DFD7] text-[#9E8581] flex items-center justify-center mb-4">
                  <Quote className="w-4 h-4 fill-current opacity-80" />
                </div>
                <h3 className="font-serif-title text-lg sm:text-xl font-bold text-[#2C2420] leading-snug mb-3 italic">
                  "{item.quote}"
                </h3>
                <p className="text-xs sm:text-sm text-[#6C5E57] leading-relaxed">
                  {item.sub}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-[#F0E7E0] flex items-center gap-2 text-[11px] font-semibold text-[#8C7D76]">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span>Sensação de esforço em vão</span>
              </div>
            </div>
          ))}
        </div>

        {/* The Deep Truth Block (from the original Elementor page) */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#4F3C39] to-[#392A27] text-white p-8 sm:p-12 shadow-xl overflow-hidden text-center max-w-3xl mx-auto border border-[#7C635F]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#9E8581]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-semibold tracking-wider uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>O Ponto de Virada</span>
          </div>

          <h3 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-6">
            A verdade é que ler, por si só, não transforma.
          </h3>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light mb-6">
            Mas quando a leitura é feita com <strong className="text-amber-200 font-semibold">propósito</strong>, <strong className="text-amber-200 font-semibold">direção</strong>, <strong className="text-amber-200 font-semibold">entendimento</strong>, <strong className="text-amber-200 font-semibold">prática</strong> e <strong className="text-amber-200 font-semibold">comunidade</strong>, ela se torna um instrumento poderoso de crescimento espiritual e maturidade diante de Deus.
          </p>

          <div className="pt-4 border-t border-white/15 inline-flex items-center gap-2 text-xs sm:text-sm text-white/80">
            <HeartHandshake className="w-4 h-4 text-amber-300" />
            <span>É exatamente isso que você vai dominar no mini-curso.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
