import React from 'react';
import { Gift, CheckSquare, FileText, Sparkles, Check } from 'lucide-react';
import { BONUSES } from '../data/courseData';

export const BonusSection: React.FC = () => {
  return (
    <section id="bonus" className="py-16 sm:py-24 bg-[#F5EFEA] border-y border-[#E8DCD1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-bold tracking-wider uppercase mb-3">
            <Gift className="w-3.5 h-3.5 text-amber-800" />
            Acesso 100% Gratuito Para Alunas
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C2420] tracking-tight mb-3">
            Bônus Inclusos no Seu Ingresso
          </h2>
          <p className="text-sm sm:text-base text-[#685A53]">
            Além de todas as aulas do mini-curso, você recebe materiais complementares sem pagar nenhum centavo a mais:
          </p>
        </div>

        {/* 2 Core Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D6CD] shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-[#9E8581]/15 text-[#735955] px-3 py-1 rounded-full">
                  BÔNUS 1 • PRÁTICO
                </span>
                <span className="text-xs text-[#8C7D76] font-medium">
                  Valor avulso: <s className="text-rose-600">R$ 37,00</s> (<strong>Grátis</strong>)
                </span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-[#F6F0EC] text-[#9E8581] flex items-center justify-center mb-4">
                <CheckSquare className="w-6 h-6" />
              </div>

              <h3 className="font-serif-title text-xl font-bold text-[#2C2420] mb-2">
                Checklist: 7 perguntas para aplicar o que você lê
              </h3>
              <p className="text-xs sm:text-sm text-[#6C5E57] leading-relaxed mb-4">
                Um checklist objetivo em PDF de alta qualidade para você imprimir ou usar no tablet/celular. Basta responder a essas 7 perguntas e fixar cada lição.
              </p>
            </div>

            <div className="pt-4 border-t border-[#F2EAE4] flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <Check className="w-4 h-4" />
              <span>Arquivo digital pronto para download imediato</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D6CD] shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-[#9E8581]/15 text-[#735955] px-3 py-1 rounded-full">
                  BÔNUS 2 • MATERIAL DE APOIO
                </span>
                <span className="text-xs text-[#8C7D76] font-medium">
                  Valor avulso: <s className="text-rose-600">R$ 29,00</s> (<strong>Grátis</strong>)
                </span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-[#F6F0EC] text-[#9E8581] flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>

              <h3 className="font-serif-title text-xl font-bold text-[#2C2420] mb-2">
                Material de apoio para as aulas (PDF para impressão)
              </h3>
              <p className="text-xs sm:text-sm text-[#6C5E57] leading-relaxed mb-4">
                Caderno de estudos com síntese das aulas, espaços pautados para reflexões pessoais e planos de ação para colocar em prática o que foi ensinado.
              </p>
            </div>

            <div className="pt-4 border-t border-[#F2EAE4] flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <Check className="w-4 h-4" />
              <span>Diagramação limpa e elegante para imprimir</span>
            </div>
          </div>
        </div>

        {/* Special Surprise Gift (from original page) */}
        <div className="bg-gradient-to-r from-amber-50 via-white to-amber-50/50 rounded-3xl p-6 sm:p-8 border-2 border-dashed border-amber-300 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-400 text-[#2C2420] flex items-center justify-center shrink-0 shadow-md">
              <Gift className="w-7 h-7" />
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Presente Especial Para Alunas do Mini-Curso</span>
              </div>
              <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#2C2420] mb-2">
                Mini-aula secreta: “5 erros que atrapalham sua constância na leitura cristã — e como evitá-los”
              </h3>
              <p className="text-xs sm:text-sm text-[#675A53] leading-relaxed">
                Ao participar do mini-curso, você terá a oportunidade única de se inscrever no <strong>Clube Fp4.8 com esse bônus exclusivo</strong>, disponível apenas para quem entrar durante o período de acesso ao mini-curso!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
