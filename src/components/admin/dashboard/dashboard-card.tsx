import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

type DashboardListCardProps = {
  title: string;
  color?: 'gdg-blue' | 'gdg-red' | 'gdg-yellow' | 'gdg-green';
  isLoading?: boolean;
  emptyMessage?: string;
  children: React.ReactNode;
};

export const DashboardListCard = ({
  title,
  color = 'gdg-blue',
  isLoading = false,
  children,
}: DashboardListCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
      <div className={`h-1 w-full bg-${color}`} />
      <CardHeader>
        <CardTitle className="font-gist flex items-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          children
        )}
      </CardContent>
    </Card>
  );
};
