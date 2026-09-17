import React from 'react';
import { Award, BookHeart, Users, Quote, CheckCircle2 } from 'lucide-react';

export const TeacherSection: React.FC = () => {
  return (
    <section id="professora" className="py-16 sm:py-24 bg-[#FAF7F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E7DCD2] shadow-xl shadow-[#8E6D68]/5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left: Teacher Visual Badge */}
            <div className="md:col-span-5 flex flex-col items-center text-center">
              <div className="relative">
                {/* Visual Avatar frame */}
                <div className="w-52 sm:w-64 h-64 sm:h-76 rounded-3xl bg-gradient-to-br from-[#8E716C] via-[#6F524D] to-[#45322F] p-1.5 shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="w-full h-full rounded-[22px] bg-[#5C4541] flex flex-col items-center justify-center p-6 text-white text-center relative">
                    <div className="w-20 h-20 rounded-full bg-white/15 flex items-center justify-center mb-4 border border-white/20">
                      <BookHeart className="w-10 h-10 text-amber-200" />
                    </div>
                    <span className="font-serif-title font-bold text-2xl text-white">
                      Naná Castillo
                    </span>
                    <span className="text-xs text-amber-200 uppercase tracking-widest font-semibold mt-1">
                      Filipenses Quatro Oito
                    </span>
                    <span className="text-[11px] text-white/80 mt-3 font-light leading-snug">
                      Encorajando mulheres a aplicarem o evangelho na vida real
                    </span>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute -bottom-3 -right-3 bg-amber-400 text-[#2C2420] px-4 py-1.5 rounded-full shadow-md font-bold text-xs flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>15 Anos de Ministério</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="text-[11px] bg-[#FAF7F5] border border-[#E7DDD5] text-[#6E5E58] px-3 py-1 rounded-full font-medium">
                  Autora & Mentora
                </span>
                <span className="text-[11px] bg-[#FAF7F5] border border-[#E7DDD5] text-[#6E5E58] px-3 py-1 rounded-full font-medium">
                  +3.400 Leitoras
                </span>
              </div>
            </div>

            {/* Right: Bio Story */}
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9E8581]/15 text-[#6B534F] text-xs font-bold tracking-wider uppercase mb-3">
                <Users className="w-3.5 h-3.5" />
                Sua Mentora Nessa Jornada
              </span>

              <h2 className="font-serif-title text-2xl sm:text-4xl font-extrabold text-[#2C2420] tracking-tight mb-5">
                Quem será a sua professora?
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#5A4D46] leading-relaxed">
                <p>
                  Olá! Eu sou <strong className="text-[#2C2420] font-semibold">Naná Castillo</strong>, fundadora do ministério <strong className="text-[#2C2420] font-semibold">Filipenses Quatro Oito</strong>, que existe para encorajar mulheres a aplicarem o evangelho na vida real.
                </p>

                <p>
                  Quer por meio do clube de leitura, desafios que renovam o amor pela Palavra, séries devocionais, livros publicados e outros projetos, <strong>estou há 15 anos vendo o Senhor transformar a vida de mulheres por meio da Palavra</strong>.
                </p>

                <div className="p-4 rounded-2xl bg-[#F6F0EC] border-l-4 border-[#9E8581] my-4 text-[#3E312D] italic font-serif">
                  "Quando vivida com intenção, comunidade, e na dependência do Espírito…. a leitura transforma!"
                </div>

                <p>
                  Esse mini-curso é um convite acolhedor para você dar esse passo com a gente e finalmente tirar o máximo de proveito dos seus livros cristãos — sem culpa e com leveza.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#EFE5DC] flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-[#665751]">
                  Vagas abertas com valor promocional por tempo limitado
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
