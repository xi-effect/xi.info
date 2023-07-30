'use client';

import { ReactNode } from 'react';
import { ThemeRegistry } from 'pkg.theme';

import '@xipkg/tailwind/index.css';
import { Inter } from 'next/font/google';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden">
        <ThemeRegistry mode="light">
          <main className="w-screen h-screen container max-w-[1920px] mx-auto px-4 sm:px-8 2xl:px-[112px]">
            <Header />

            {children}

            <Footer />
          </main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
