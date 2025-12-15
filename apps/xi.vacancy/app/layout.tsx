import { ReactNode } from 'react';

import '../public/global.css';
import '../index.css';

import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Sovlium Вакансии',
  description:
    'Рассказываем о вакансиях стартапа Sovlium - разработка, дизайн, тестирование, менеджмент',
  manifest: '/manifest.webmanifest',
  keywords: [
    'sovlium',
    'совлиум',
    'стартап',
    'вакансии',
    'работа',
    'vacancy',
    'репетиторы',
    'платформа для репетиторов',
  ],
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
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
        <Toaster />
        {children}
      </body>
    </html>
  );
}
