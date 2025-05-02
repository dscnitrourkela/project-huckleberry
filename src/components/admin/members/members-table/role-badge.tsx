import React from 'react';
import { Badge } from '@/components/ui/badge';

interface RoleBadgeProps {
  role: string;
}

const RoleBadge: React.FC<RoleBadgeProps> = ({ role }) => {
  let color;

  switch (role.toLowerCase()) {
    case 'lead':
      color = 'bg-gdg-blue/10 text-gdg-blue border-gdg-blue/20';
      break;
    case 'developer':
      color = 'bg-gdg-green/10 text-gdg-green border-gdg-green/20';
      break;
    case 'designer':
      color = 'bg-gdg-yellow/10 text-gdg-yellow border-gdg-yellow/20';
      break;
    case 'manager':
      color = 'bg-gdg-red/10 text-gdg-red border-gdg-red/20';
      break;
    default:
      color = 'bg-gray-100 text-gray-700 border-gray-200';
  }

  return (
    <Badge
      variant="outline"
      className={`${color} font-medium rounded-full px-3 py-0.5`}
    >
      {role}
    </Badge>
  );
};

export default RoleBadge;
