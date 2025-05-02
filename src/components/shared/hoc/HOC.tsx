import { ThemeProvider } from 'next-themes';
import React from 'react';
import StyledComponentsRegistry from '@/lib/registry';

export default function HOC({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StyledComponentsRegistry>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </>
  );
}
