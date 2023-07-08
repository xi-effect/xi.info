'use client';

import { ReactNode } from 'react';
import { ThemeRegistry } from 'pkg.theme';
import { inter, marker } from 'fonts/fonts';

import '@xipkg/tailwind/tailwind.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${marker.variable}`}>
      <body className="overflow-x-hidden">
        <ThemeRegistry mode="light">
          <main className="w-screen h-screen container max-w-[1920px] mx-auto px-4 sm:px-8 md:px-16">
            <Header />

            {children}

            <Footer />
          </main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
