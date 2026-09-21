import React from 'react';
import { BookOpen, FileText, CheckCircle2, Lock } from 'lucide-react';
import { IMAGES } from '../data/courseData';
import { SafeImage } from './SafeImage';

export const ProductSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFF9F0] border-b border-[#F1E6D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-wider text-[#C56F4D] uppercase">
            O Material
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-normal text-[#173F38] leading-[1.2]">
            Dois materiais que trabalham juntos.
          </h2>
          <p className="text-base sm:text-lg text-[#596561] leading-relaxed">
            O Guia ensina o caminho. O Caderno ajuda você a praticar com a leitura que já está nas suas mãos.
          </p>
        </div>

        {/* 2 Materials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Guia Da Página à Vida */}
          <div className="p-8 rounded-2xl bg-white border border-[#F1E6D7] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#173F38]/10 text-[#173F38] flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#8A9692] font-semibold block">
                Material 1 • Guia
              </span>
              <h3 className="font-serif-title text-2xl text-[#173F38] font-normal">
                Guia Da Página à Vida
              </h3>
              <p className="text-sm sm:text-base text-[#596561] leading-relaxed">
                <strong className="text-[#222725] font-semibold">26 páginas</strong> com método, bases teológicas, exemplos e uma jornada de 21 dias.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F1E6D7]/60 flex items-center gap-2 text-xs text-[#173F38] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#173F38]" />
              <span>Formato PDF digital • Leitura fluida</span>
            </div>
          </div>

          {/* Caderno de Prática */}
          <div className="p-8 rounded-2xl bg-white border border-[#F1E6D7] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C56F4D]/10 text-[#C56F4D] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#8A9692] font-semibold block">
                Material 2 • Prática
              </span>
              <h3 className="font-serif-title text-2xl text-[#173F38] font-normal">
                Caderno de prática
              </h3>
              <p className="text-sm sm:text-base text-[#596561] leading-relaxed">
                <strong className="text-[#222725] font-semibold">26 páginas</strong> para sínteses, perguntas, oração, aplicação e revisão.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F1E6D7]/60 flex items-center gap-2 text-xs text-[#173F38] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#173F38]" />
              <span>Imprimível ou preenchível no dispositivo</span>
            </div>
          </div>

        </div>

        {/* Editorial Block & Ambient Image: Discreet, preserving curiosity, no fake book covers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          
          {/* Discreet Editorial Block */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl bg-[#F1E6D7]/50 border border-[#F1E6D7] space-y-6">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#173F38]">
              <Lock className="w-4 h-4 text-[#C56F4D]" />
              <span>Conteúdo liberado após a compra</span>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif-title text-2xl text-[#173F38] font-normal">
                Guia + Caderno
              </h4>
              <p className="text-sm text-[#596561] leading-relaxed">
                52 páginas de conteúdo e prática para descobrir no seu ritmo.
              </p>
            </div>

            <ul className="space-y-3 text-sm text-[#222725] pt-2 border-t border-[#F1E6D7]">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C56F4D]"></span>
                <span>PDF digital</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C56F4D]"></span>
                <span>Jornada de 21 dias</span>
              </li>
            </ul>
          </div>

          {/* Reading Scene Image */}
          <div className="lg:col-span-6">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-2 bg-[#F1E6D7]/60 rounded-2xl rotate-1 pointer-events-none"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-md border-4 border-white">
                <SafeImage
                  src={IMAGES.materials.imgur}
                  fallbackSrc={IMAGES.materials.local}
                  alt={IMAGES.materials.alt}
                  width={IMAGES.materials.width}
                  height={IMAGES.materials.height}
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/11]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
