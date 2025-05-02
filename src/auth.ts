// @ts-nocheck // This is a temporary fix to avoid TypeScript errors

import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { User as DefaultUser } from 'next-auth';
import { prisma } from '@/lib/prisma';
declare module 'next-auth' {
  interface Session {
    user: {
      memberId?: string;
      isAdmin?: boolean;
      isSuperAdmin?: boolean;
      role?: string;
      userName?: string;
    } & DefaultUser;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        const email = user.email;
        if (!email) {
          return false;
        }

        const memberResponse = await prisma.member.findFirst({
          where: { email },
        });

        if (!memberResponse?.id) {
          return `/login?errorCode=member_not_found`;
        }

        return true;
      }

      return true;
    },

    async jwt({ token, user, account }) {
      if (account && user) {
        if (user.email) {
          const memberResponse = await prisma.member.findFirst({
            where: { email: user.email },
          });

          if (memberResponse?.id) {
            token.memberId = memberResponse.id;
            token.isAdmin = memberResponse.is_admin;
            token.role = memberResponse.role;
            token.userName = memberResponse.user_name;
          }
        }
        return token;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.memberId = token.memberId;
        session.user.isAdmin = token.isAdmin;
        session.user.isSuperAdmin = token.isSuperAdmin;
        session.user.role = token.role;
        session.user.userName = token.userName;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/error',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
});
