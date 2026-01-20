import React from 'react';
import { gridBackground } from '@/config/home';

interface GridBackgroundProps {
  opacity?: number;
  className?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({
  opacity = 0.5,
  className = '',
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `url(${gridBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity,
      }}
    />
  );
};

export default GridBackground;
