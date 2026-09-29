import React from 'react';

export const VeredaWheat: React.FC<{ className?: string }> = ({ className = "w-9 h-9 text-[#C58B35]" }) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Delicate botanical wheat stalk inspired by Vereda & Página brand identity */}
      <path
        d="M12 42C15 36 21 28 27 18C29 14 31 10 33 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Lower leaves */}
      <path
        d="M14 38C10 35 8 30 10 26C11 29 13 32 16 34"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M17 34C22 35 25 38 27 42C24 40 20 38 17 34"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Wheat grains alternating along stem */}
      <path
        d="M20 28C17 26 16 22 18 20C21 21 22 24 22 27Z"
        fill="currentColor"
      />
      <path
        d="M18 20L15 15"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M23 25C26 23 29 23 30 26C29 28 26 29 23 27Z"
        fill="currentColor"
      />
      <path
        d="M30 24L35 20"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M23 21C20 19 19 15 21 13C24 14 25 17 25 20Z"
        fill="currentColor"
      />
      <path
        d="M21 13L18 8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M26 18C29 16 32 16 33 19C32 21 29 22 26 20Z"
        fill="currentColor"
      />
      <path
        d="M33 17L37 13"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M26 14C24 12 23 9 25 7C27 8 28 11 28 13Z"
        fill="currentColor"
      />
      <path
        d="M25 7L23 2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M29 11C31 10 34 10 35 12C34 14 32 15 29 13Z"
        fill="currentColor"
      />
      <path
        d="M35 11L38 7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M30 8C31 6 32 4 34 3C34 5 33 7 32 8Z"
        fill="currentColor"
      />
      <path
        d="M34 3L36 0.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};
