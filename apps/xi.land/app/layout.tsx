import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Providers } from './providers';
import React from 'react';
import { Metadata } from 'next';

import 'styles/globals.css';

export const metadata: Metadata = {
  title: 'xi.effect',
  description: 'xi.effect - Гибкий образовательный инструмент для репетиторов и малого бизнеса',
};

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
