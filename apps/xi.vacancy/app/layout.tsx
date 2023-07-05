'use client';

import '@xipkg/tailwind/tailwind.css';

import { Inter } from 'next/font/google';

import { ReactNode } from 'react';
import { ThemeRegistry } from 'pkg.theme';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <ThemeRegistry mode="light">
          <main className="w-screen h-screen container max-w-[1920px]  mx-auto px-16 flex flex-col">
            {children}
          </main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
