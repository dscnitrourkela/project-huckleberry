import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export async function middleware(request) {
  const publicRoutes = ['/', '/team', '/landingPage'];

  if (publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const session = await auth();

  if (session && session.user && request.nextUrl.pathname === '/login') {
    if (session.user) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  if (request.nextUrl.pathname === '/login' && !session) {
    return NextResponse.next();
  }

  if (!session || !session.user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // if (request.nextUrl.pathname.startsWith('/admin')) {
  //   if (!session.user.isAdmin) {
  //     return NextResponse.redirect(new URL('/profile', request.url));
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/login',
    '/dashboard/:path*',
    '/profile/:path*',
    '/admin/:path*',
    '/((?!api|login|register|unauthorized|_next/static|_next/image|favicon.ico).*)',
  ],
};
