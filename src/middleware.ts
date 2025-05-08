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

  if (
    request.nextUrl.pathname.startsWith('/admin') ||
    request.nextUrl.pathname.startsWith('/api')
  ) {
    if (!session?.user) {
      if (request.nextUrl.pathname.startsWith('/api')) {
        return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/admin/:path*', '/api/:path*'],
};
