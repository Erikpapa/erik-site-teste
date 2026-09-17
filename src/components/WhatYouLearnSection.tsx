import React from 'react';
import { 
  Compass, 
  Target, 
  PenTool, 
  ShieldAlert, 
  Users2, 
  Flame, 
  CheckCircle, 
  BookOpen
} from 'lucide-react';
import { WHAT_YOU_LEARN } from '../data/courseData';

const ICONS = [Compass, Target, PenTool, ShieldAlert, Users2, Flame];

export const WhatYouLearnSection: React.FC = () => {
  return (
    <section id="aprender" className="py-16 sm:py-24 bg-white border-y border-[#EDE4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9E8581]/15 text-[#6B534F] text-xs font-bold tracking-wider uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Conteúdo Prático & Direto ao Ponto
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C2420] tracking-tight mb-4">
            O que você vai aprender
          </h2>
          <p className="text-base sm:text-lg text-[#6B5C55] font-normal">
            Neste mini-curso direto, prático e transformador, você vai sair com um plano claro para viver o que lê:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_YOU_LEARN.map((item, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#FAF7F5] border border-[#E7DDD5] hover:border-[#9E8581] hover:bg-white hover:shadow-lg hover:shadow-[#9E8581]/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#DFD3CA] text-[#9E8581] group-hover:bg-[#9E8581] group-hover:text-white transition-colors flex items-center justify-center mb-5 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif-title text-lg sm:text-xl font-bold text-[#2C2420] mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6A5B55] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EDE3DA] flex items-center gap-2 text-xs font-semibold text-[#8E6D68]">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Aplicação imediata</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
