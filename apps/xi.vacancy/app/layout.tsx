import { ReactNode } from 'react';

import '../index.css';
import '../public/global.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

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
      { url: '/favicon-for-light.svg' },
      { url: '/favicon-for-dark.svg', media: '(prefers-color-scheme: dark)' },
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

const DEFAULT_DURATION_TOAST = 5000;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden">
        <Toaster duration={DEFAULT_DURATION_TOAST} />
        {children}
      </body>
    </html>
  );
}
