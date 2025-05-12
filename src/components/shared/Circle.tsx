import React from 'react';
interface CircleProps {
  bgColor: string;
}
const Circle: React.FC<CircleProps> = ({ bgColor }) => {
  return (
    <div
      className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full top-[300px] left-[-120px] z-0"
      style={{ backgroundColor: bgColor }}
    />
  );
};
export default Circle;
