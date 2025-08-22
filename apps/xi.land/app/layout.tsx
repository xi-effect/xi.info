 
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { Header } from 'components/Header';
import { Footer } from 'pkg.landing.footer';

import { CookieBannerWrapper } from 'components/CookieBanner';
import Script from 'next/script';
import { Toaster } from 'sonner';
import '../index.css';

export const metadata: Metadata = {
  title: 'Проводите уроки онлайн. Платформа для репетиторов sovlium',
  description:
    'Видеозвонки, онлайн-доски, расписание и контроль оплат. Делитесь знаниями с комфортом, а рутину оставьте нам. Попробуйте sovlium бесплатно.',
  manifest: '/manifest.webmanifest',
  keywords: [
    'sovlium',
    'совлиум',
    'платформа для репетиторов',
    'онлайн уроки',
    'видеозвонки',
    'онлайн доска',
    'расписание уроков',
    'контроль оплат',
    'репетиторство',
    'дистанционное обучение',
    'EdTech',
    'образовательная платформа',
    'онлайн образование',
    'видеоконференции',
    'цифровое обучение',
  ],
  authors: [{ name: 'Sovlium Team' }],
  creator: 'Sovlium',
  publisher: 'Sovlium',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sovlium.ru'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'Y4vSUoLC0DZXzBAmNZ5rtQ9UVPlPaiKVSFHGx3ZJj-g',
    yandex: '4b86f3c46a3dc46d',
  },
  openGraph: {
    title: 'Проводите уроки онлайн. Платформа для репетиторов sovlium',
    description:
      'Видеозвонки, онлайн-доски, расписание и контроль оплат. Делитесь знаниями с комфортом, а рутину оставьте нам. Попробуйте sovlium бесплатно.',
    url: 'https://sovlium.ru',
    siteName: 'Sovlium',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://sovlium.ru/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Sovlium - Платформа для репетиторов',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Проводите уроки онлайн. Платформа для репетиторов sovlium',
    description:
      'Видеозвонки, онлайн-доски, расписание и контроль оплат. Делитесь знаниями с комфортом, а рутину оставьте нам. Попробуйте sovlium бесплатно.',
    images: ['https://sovlium.ru/web-app-manifest-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    <html lang="ru" suppressHydrationWarning className={`${inter.variable}`}>
      <body>
        {process.env.NODE_ENV === 'development' ? (
          <></>
        ) : (
          <>
            <Script id="metrika-counter" strategy="afterInteractive">
              {`(function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103653512', 'ym');

                ym(103653512, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
              `}
            </Script>
            <noscript>
              <div>
                <img
                  src="https://mc.yandex.ru/watch/103653512"
                  style={{ position: 'absolute', left: '-9999px' }}
                  alt=""
                />
              </div>
            </noscript>
          </>
        )}
        <CookieBannerWrapper />
        <Toaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
