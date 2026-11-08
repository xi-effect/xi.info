import { Metadata } from 'next';
import localFont from 'next/font/local';

import { Header } from 'components/Header';
import { JsonLd } from 'components/seo/JsonLd';
import { LandFooter } from 'components/support/LandFooter';
import { SupportModalProvider } from 'components/support/SupportModalContext';

import { CookieBannerWrapper } from 'components/CookieBanner';
import Script from 'next/script';
import { Toaster } from 'sonner';
import { graphJsonLd, organizationJsonLd, websiteJsonLd } from 'lib/seo/jsonld';
import { createPageMetadata } from 'lib/seo/metadata';
import { SITE_URL } from 'lib/seo/site';
import '../index.css';

export const metadata: Metadata = {
  ...createPageMetadata('/'),
  manifest: '/manifest.webmanifest',
  authors: [{ name: 'Sovlium Team' }],
  creator: 'Sovlium',
  publisher: 'Sovlium',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
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
};

const markerHand = localFont({
  src: '../public/fonts/MarkerHand-Regular.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-marker-hand',
  fallback: ['cursive'],
});

const manropeLatin = localFont({
  src: '../public/fonts/manrope-latin.woff2',
  weight: '400 700',
  display: 'swap',
  variable: '--font-manrope-latin',
  declarations: [
    {
      prop: 'unicode-range',
      value:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
  ],
});

const manropeCyrillic = localFont({
  src: '../public/fonts/manrope-cyrillic.woff2',
  weight: '400 700',
  display: 'swap',
  variable: '--font-manrope-cyrillic',
  declarations: [
    {
      prop: 'unicode-range',
      value: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    },
  ],
});

const neverMind = localFont({
  src: [
    {
      path: '../public/fonts/NeverMind-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeverMind-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeverMind-DemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeverMind-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: false,
  variable: '--font-never-mind',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${neverMind.variable} ${markerHand.variable} ${manropeLatin.variable} ${manropeCyrillic.variable}`}
    >
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
        <JsonLd data={graphJsonLd(organizationJsonLd, websiteJsonLd)} />
        <CookieBannerWrapper />
        <Toaster />
        <SupportModalProvider>
          <Header />
          {children}
          <LandFooter />
        </SupportModalProvider>
      </body>
    </html>
  );
}
