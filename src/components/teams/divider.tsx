import React from 'react';

interface DividerProps {
  flipVertical?: boolean;
}

const Divider: React.FC<DividerProps> = ({ flipVertical = false }) => {
  return (
    <svg
      width="100%"
      height="2"
      viewBox="0 0 477 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ transform: flipVertical ? 'rotate(180deg)' : 'none' }}
    >
      <path
        d="M475.5 0C476.052 0 476.5 0.447715 476.5 1C476.5 1.55228 476.052 2 475.5 2V0ZM475.5 1V2H0.5V1V0H475.5V1Z"
        fill="url(#paint0_linear_3334_1775)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3334_1775"
          x1="475.5"
          y1="1.5"
          x2="0.5"
          y2="1.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#474747" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Divider;
