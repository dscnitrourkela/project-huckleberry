import React from 'react';

const BackgroundElements: React.FC = () => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
    <div
      className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gdg-blue/5 animate-float"
      style={{ animationDelay: '0s' }}
    ></div>
    <div
      className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gdg-green/5 animate-float"
      style={{ animationDelay: '1s' }}
    ></div>
    <div
      className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-gdg-yellow/5 animate-float"
      style={{ animationDelay: '2s' }}
    ></div>
    <div
      className="absolute bottom-1/4 left-1/5 w-36 h-36 rounded-full bg-gdg-red/5 animate-float"
      style={{ animationDelay: '3s' }}
    ></div>
  </div>
);

export default BackgroundElements;
