import React from 'react';
import Divider from './divider';

export default function TeamTitle({
  textColor = 'text-gdg-red',
  title = 'Core Team',
}: {
  textColor?: string;
  title?: string;
}) {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1">
        <Divider />
      </div>
      <h2
        className={`text-5xl font-semibold font-productsans whitespace-nowrap px-4 ${textColor}`}
      >
        {title}
      </h2>
      <div className="flex-1">
        <Divider flipVertical={true} />
      </div>
    </div>
  );
}
