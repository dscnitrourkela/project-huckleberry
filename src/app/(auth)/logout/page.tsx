'use client';
import React, { useEffect } from 'react';
import { signOut } from 'next-auth/react';

import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const LogoutPage: React.FC = () => {
  useEffect(() => {
    // @ts-ignore
    signOut();
  }, []);
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight font-syne">
                Signing out...
              </h1>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LogoutPage;
