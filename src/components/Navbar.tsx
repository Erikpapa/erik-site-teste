import React from 'react';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO, getCaktoCheckoutUrl } from '../data/courseData';

export const Navbar: React.FC = () => {
  const checkoutUrl = getCaktoCheckoutUrl();
  const isExternal = checkoutUrl.startsWith('http');

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F0]/95 backdrop-blur-md border-b border-[#F1E6D7] transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo & Subtitle */}
        <a href="#" className="flex items-center gap-3 group text-left">
          <div className="w-9 h-9 rounded-full bg-[#173F38] flex items-center justify-center text-[#FFF9F0] shadow-xs group-hover:bg-[#102C27] transition-colors">
            <BookOpen className="w-4 h-4 text-[#D3A84F]" />
          </div>
          <div>
            <span className="font-serif-title text-lg sm:text-xl font-semibold tracking-tight text-[#173F38] block leading-none">
              {BRAND_INFO.brandName}
            </span>
            <span className="text-[10px] text-[#596561] tracking-wider uppercase font-medium mt-1 block">
              {BRAND_INFO.productName}
            </span>
          </div>
        </a>

        {/* Action CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href={checkoutUrl}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#173F38] text-[#FFF9F0] text-xs sm:text-sm font-semibold hover:bg-[#102C27] transition-colors shadow-xs"
          >
            <span>Quero o Guia + Caderno</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D3A84F]" />
          </a>
        </div>

      </div>
    </header>
  );
};
