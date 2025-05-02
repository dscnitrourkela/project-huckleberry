import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import React from 'react';

export default function Instructions() {
  return (
    <Card className="border border-gray-200 shadow-sm mb-8 overflow-hidden bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md">
      <CardHeader className="sm:px-6 bg-gdg-blue/5 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="h-5 w-5 text-gdg-red" />
          <CardTitle className="text-xl sm:text-2xl tracking-tight font-medium text-gdg-dark">
            Important Guidelines
          </CardTitle>
        </div>
        <CardDescription className="text-gdg-gray">
          <ul className="list-disc list-inside space-y-2 sm:text-base">
            <li className="transition-all duration-200 hover:translate-x-1">
              We can pull{' '}
              <span className="text-gdg-blue font-medium">
                100 posts per month
              </span>
            </li>
            <li className="transition-all duration-200 hover:translate-x-1">
              Rate limit:{' '}
              <span className="text-gdg-blue font-medium">
                1 request / 15 minutes
              </span>
            </li>
            <li className="transition-all duration-200 hover:translate-x-1">
              A{' '}
              <span className="text-gdg-blue font-medium">2 hour cooldown</span>{' '}
              is enforced between fetches
            </li>
            <li className="transition-all duration-200 hover:translate-x-1">
              Use{' '}
              <span className="text-gdg-blue font-medium">
                Fetch All Tweets
              </span>{' '}
              when the project is deployed and used by the public. This will{' '}
              <span className="text-gdg-blue font-medium">
                fetch 20 latest tweets
              </span>{' '}
              <span className="text-gdg-red font-medium">
                (Do not use frequently)
              </span>
            </li>
            <li className="transition-all duration-200 hover:translate-x-1">
              Use{' '}
              <span className="text-gdg-blue font-medium">
                Fetch Latest Tweet
              </span>{' '}
              when you want to fetch the latest tweet only
            </li>
          </ul>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
