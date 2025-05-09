import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export async function middleware(request) {
  const session = await auth();

  if (request.nextUrl.pathname === '/login') {
    if (session?.user) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!session?.user) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/admin/:path*'],
};
