import React, { useState } from 'react';
import { Menu, X, BookOpen, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/courseData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F0]/95 backdrop-blur-md border-b border-[#F1E6D7] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Subtitle */}
        <a href="#" className="flex items-center gap-3 group text-left">
          <div className="w-10 h-10 rounded-full bg-[#173F38] flex items-center justify-center text-[#FFF9F0] shadow-sm group-hover:bg-[#102C27] transition-colors">
            <BookOpen className="w-5 h-5 text-[#D3A84F]" />
          </div>
          <div>
            <span className="font-serif-title text-xl sm:text-2xl font-semibold tracking-tight text-[#173F38] block leading-none">
              Vereda & Página
            </span>
            <span className="text-[11px] text-[#596561] tracking-wider uppercase font-medium mt-1 block">
              Leitura cristã com direção
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#222725]/80">
          <a href="#desafio" className="hover:text-[#173F38] transition-colors">
            O Desafio
          </a>
          <a href="#metodo" className="hover:text-[#173F38] transition-colors">
            O Método
          </a>
          <a href="#modulos" className="hover:text-[#173F38] transition-colors">
            Módulos
          </a>
          <a href="#como-foi-pensado" className="hover:text-[#173F38] transition-colors">
            Como foi pensado
          </a>
          <a href="#duvidas" className="hover:text-[#173F38] transition-colors">
            Dúvidas
          </a>
        </nav>

        {/* Desktop Action CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={BRAND_INFO.eduzzUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#173F38] text-[#FFF9F0] text-sm font-semibold hover:bg-[#102C27] transition-colors shadow-sm"
          >
            <span>Quero participar • R$ 27</span>
            <ArrowUpRight className="w-4 h-4 text-[#D3A84F]" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-[#173F38] hover:bg-[#F1E6D7] transition-colors"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#F1E6D7] bg-[#FFF9F0] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-base font-medium text-[#222725]">
            <a
              href="#desafio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F1E6D7] transition-colors"
            >
              O Desafio da Leitura
            </a>
            <a
              href="#metodo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F1E6D7] transition-colors"
            >
              O Método Da Página à Vida
            </a>
            <a
              href="#modulos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F1E6D7] transition-colors"
            >
              Módulos e Aulas
            </a>
            <a
              href="#como-foi-pensado"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F1E6D7] transition-colors"
            >
              Como foi pensado
            </a>
            <a
              href="#duvidas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F1E6D7] transition-colors"
            >
              Perguntas Frequentes
            </a>
          </nav>

          <div className="pt-3 border-t border-[#F1E6D7]">
            <a
              href={BRAND_INFO.eduzzUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#173F38] text-[#FFF9F0] font-semibold text-center text-sm shadow-sm"
            >
              <span>Quero participar por R$ 27</span>
              <ArrowUpRight className="w-4 h-4 text-[#D3A84F]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
