import React from 'react';
import { BookOpen, Compass, Heart } from 'lucide-react';
import { IMAGES } from '../data/courseData';
import { SafeImage } from './SafeImage';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFF9F0] border-b border-[#F1E6D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image with Subtle Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-2 bg-[#F1E6D7]/70 rounded-2xl rotate-1 pointer-events-none"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
                <SafeImage
                  src={IMAGES.problem.imgur}
                  fallbackSrc={IMAGES.problem.local}
                  alt={IMAGES.problem.alt}
                  width={IMAGES.problem.width}
                  height={IMAGES.problem.height}
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-square"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text & Reflections */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-semibold tracking-wider text-[#C56F4D] uppercase block">
              O ciclo comum da leitura
            </span>

            <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-normal text-[#173F38] leading-[1.25]">
              Você lê, se inspira… e poucos dias depois quase nada permanece?
            </h2>

            <p className="text-base sm:text-lg text-[#596561] leading-relaxed">
              Isso não significa falta de capacidade ou de fé. Na maioria das vezes, falta um processo que ajude a reconhecer a ideia principal e responder a ela com intenção.
            </p>

            {/* Points List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F1E6D7]/40 border border-[#F1E6D7]">
                <div className="w-8 h-8 rounded-lg bg-[#173F38]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#173F38]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-medium text-[#173F38] text-base">
                    Muitos grifos, mas nenhuma síntese clara.
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F1E6D7]/40 border border-[#F1E6D7]">
                <div className="w-8 h-8 rounded-lg bg-[#173F38]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#173F38]">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-medium text-[#173F38] text-base">
                    Boas ideias que não chegam à oração nem à rotina.
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F1E6D7]/40 border border-[#F1E6D7]">
                <div className="w-8 h-8 rounded-lg bg-[#173F38]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#173F38]">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-medium text-[#173F38] text-base">
                    Culpa por começar livros e perder a constância.
                  </h3>
                </div>
              </div>
            </div>

            {/* Closing statement */}
            <div className="pt-4 border-t border-[#F1E6D7]">
              <p className="font-serif-title text-lg sm:text-xl text-[#173F38] italic">
                “O que falta não é ler mais. É saber o que fazer com o que você lê.”
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
