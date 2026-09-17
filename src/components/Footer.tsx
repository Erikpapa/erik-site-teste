import React from 'react';
import { BookOpen, ShieldCheck, Lock, Heart } from 'lucide-react';
import { COURSE_INFO } from '../data/courseData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#261E1B] text-[#DDD2CA] pt-14 pb-20 sm:pb-14 border-t border-[#3B2F2B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#9E8581] text-white flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="font-serif-title text-lg font-bold text-white tracking-wide">
                Filipenses Quatro Oito
              </span>
            </div>
            <p className="text-xs text-[#A89890] max-w-sm">
              Encorajando mulheres a aplicarem o evangelho na vida real por meio da leitura cristã com propósito e comunidade.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#C5B7AF]">
            <a href="#topo" className="hover:text-white transition-colors">Início</a>
            <a href="#problema" className="hover:text-white transition-colors">Por Que Ler?</a>
            <a href="#aprender" className="hover:text-white transition-colors">Conteúdo</a>
            <a href="#estrutura" className="hover:text-white transition-colors">Módulos</a>
            <a href="#bonus" className="hover:text-white transition-colors">Bônus</a>
            <a href="#investimento" className="hover:text-white transition-colors">Investimento</a>
            <a 
              href={COURSE_INFO.eduzzUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-amber-200 font-semibold"
            >
              Checkout Eduzz
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#8A7B74]">
          <p>
            © {new Date().getFullYear()} Filipenses Quatro Oito • Todos os direitos reservados.
          </p>

          <div className="flex items-center justify-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-emerald-400">
              <Lock className="w-3 h-3" /> SSL 256 bits
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-amber-200">
              <ShieldCheck className="w-3 h-3" /> Plataforma Segura Eduzz
            </span>
          </div>
        </div>

        <p className="text-[10px] text-center text-[#695B54] mt-6 max-w-2xl mx-auto leading-relaxed">
          Este site não é afiliado ao Facebook, Google ou qualquer entidade dessas redes. Os resultados podem variar de pessoa para pessoa e dependem da aplicação individual dos métodos ensinados.
        </p>

      </div>
    </footer>
  );
};
