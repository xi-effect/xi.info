'use client';

import { ReactNode } from 'react';
import { ThemeRegistry } from 'pkg.theme';
import { inter, marker } from 'fonts/fonts';

import '@xipkg/tailwind/tailwind.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${marker.variable}`}>
      <body>
        <ThemeRegistry mode="light">
          <main className="w-screen h-screen container max-w-[1920px] mx-auto px-4 sm:px-8 md:px-16 flex flex-col">
            {children}
          </main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
