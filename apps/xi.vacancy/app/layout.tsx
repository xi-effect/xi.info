import { ReactNode } from 'react';

import '@xipkg/tailwind/index.css';
import '../public/global.css';
import { Inter } from 'next/font/google';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'xi.vacancy',
  description:
    'Рассказываем о вакансиях стартапа xi.effect - разработка, дизайн, тестирование, менеджмент',
  manifest: '/manifest.webmanifest',
  keywords: [
    'xi.effect',
    'кси эффект',
    'эффект',
    'стартап',
    'вакансии',
    'работа',
    'vacancy',
    'xi.vacancy',
  ],
  icons: {
    icon: [
      { url: './favicon-for-light.svg' },
      { url: './favicon-for-dark.svg', media: '(prefers-color-scheme: dark)' },
    ],
  },
};

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
        <main className="w-screen h-screen container max-w-[1920px] mx-auto px-4 sm:px-8 2xl:px-[112px]">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
