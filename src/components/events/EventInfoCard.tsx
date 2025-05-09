import React from 'react';
import { cn } from '@/lib/utils';

interface EventInfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor?: string;
}

const EventInfoCard: React.FC<EventInfoCardProps> = ({
  icon,
  title,
  description,
  bgColor = 'bg-gray-100',
}) => {
  return (
    <div className={cn('p-4 rounded-lg flex items-start', bgColor)}>
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default EventInfoCard;
