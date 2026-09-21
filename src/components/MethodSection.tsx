import React from 'react';
import { METHOD_STEPS } from '../data/courseData';

export const MethodSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFF9F0] border-b border-[#F1E6D7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-wider text-[#C56F4D] uppercase">
            O Método
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-normal text-[#173F38] leading-[1.2]">
            Três movimentos para levar a leitura da página à vida.
          </h2>
        </div>

        {/* 3 Movements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {METHOD_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#F1E6D7] shadow-xs flex flex-col justify-between relative overflow-hidden group hover:border-[#C56F4D]/40 transition-colors"
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-[#173F38] text-[#FFF9F0] text-sm font-semibold flex items-center justify-center">
                  {step.step}
                </span>
                <span className="text-xs text-[#8A9692] uppercase tracking-widest font-medium">
                  Movimento {step.step}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-serif-title text-xl text-[#173F38] font-medium">
                  {step.name}
                </h3>
                <p className="text-sm text-[#596561] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
