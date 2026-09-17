import React from 'react';

export const OrnamentDivider: React.FC = () => {
  return (
    <div className="py-8 sm:py-10 flex justify-center items-center overflow-hidden bg-[#FFF9F0] border-b border-[#F1E6D7]/60" aria-hidden="true">
      <img
        src="/images/ornamento-vereda-pagina.webp"
        alt=""
        aria-hidden="true"
        className="max-w-[280px] sm:max-w-[360px] md:max-w-[440px] h-auto select-none pointer-events-none opacity-90"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
