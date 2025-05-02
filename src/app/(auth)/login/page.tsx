'use client';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';
import { login } from '@/actions/auth';
import { useSearchParams } from 'next/navigation';
import { getErrorMessage } from '@/config/auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { toast } from 'sonner';

export default function LoginPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const errorCode = searchParams.get('errorCode');
    if (errorCode) {
      toast.error(getErrorMessage(errorCode));
    }
  }, [searchParams]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md shadow-lg font-geist-sans">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Sign in to access the dashboard</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className=" px-2 text-muted-foreground">Sign in with</span>
            </div>
          </div>
          <form action={login} className="grid gap-2">
            <Button
              variant="outline"
              type="submit"
              className="flex items-center gap-2"
            >
              <FcGoogle className="w-5 h-5" />
              <span>Continue with Google</span>
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          Use the same Google account provided to DSC NIT Rourkela (Members
          only)
        </CardFooter>
      </Card>
    </section>
  );
}
