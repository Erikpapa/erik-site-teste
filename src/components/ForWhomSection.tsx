import React from 'react';
import { Check } from 'lucide-react';
import { FOR_WHOM_ITEMS } from '../data/courseData';

export const ForWhomSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFF9F0] border-b border-[#F1E6D7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-10 sm:mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#C56F4D] uppercase">
            Direção
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-normal text-[#173F38] leading-[1.2]">
            Para quem é
          </h2>
        </div>

        {/* Short List */}
        <div className="space-y-3.5 bg-white p-6 sm:p-8 rounded-2xl border border-[#F1E6D7] shadow-xs">
          {FOR_WHOM_ITEMS.map((item, index) => (
            <div key={index} className="flex items-start gap-3.5">
              <div className="w-5 h-5 rounded-full bg-[#173F38]/10 text-[#173F38] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm sm:text-base text-[#222725] leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
