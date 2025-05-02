import React from 'react';

const GoogleColorsBar: React.FC = () => (
  <div className="w-full h-1.5 rounded-full mb-6 flex overflow-hidden">
    <div className="w-1/4 bg-gdg-blue"></div>
    <div className="w-1/4 bg-gdg-red"></div>
    <div className="w-1/4 bg-gdg-yellow"></div>
    <div className="w-1/4 bg-gdg-green"></div>
  </div>
);

export default GoogleColorsBar;
