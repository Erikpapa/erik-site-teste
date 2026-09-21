import React from 'react';
import { IMAGES } from '../data/courseData';
import { SafeImage } from './SafeImage';

export const OrnamentDivider: React.FC = () => {
  return (
    <div className="py-6 sm:py-8 flex justify-center items-center overflow-hidden bg-[#FFF9F0] border-b border-[#F1E6D7]/60" aria-hidden="true">
      <SafeImage
        src={IMAGES.ornament.imgur}
        fallbackSrc={IMAGES.ornament.local}
        alt={IMAGES.ornament.alt}
        width={IMAGES.ornament.width}
        height={IMAGES.ornament.height}
        className="max-w-[280px] sm:max-w-[360px] md:max-w-[440px] h-auto select-none pointer-events-none opacity-85"
        loading="lazy"
      />
    </div>
  );
};
