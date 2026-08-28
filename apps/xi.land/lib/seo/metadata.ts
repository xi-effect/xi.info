import type { Metadata } from 'next';

import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from './site';
import { getSeoPage, type SeoPathT } from './pages';

export const createPageMetadata = (path: SeoPathT): Metadata => {
  const page = getSeoPage(path);
  const canonical = page.canonical ?? absoluteUrl(page.path);
  const ogTitle = page.ogTitle ?? page.title;
  const ogDescription = page.ogDescription ?? page.description;
  const ogImagePath = page.ogImage ?? DEFAULT_OG_IMAGE.url;
  const ogImage = {
    url: absoluteUrl(ogImagePath),
    width: DEFAULT_OG_IMAGE.width,
    height: DEFAULT_OG_IMAGE.height,
    alt: DEFAULT_OG_IMAGE.alt,
  };
  const index = page.index;
  const follow = page.follow ?? true;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical,
    },
    robots: {
      index,
      follow,
      googleBot: {
        index,
        follow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'ru_RU',
      type: 'website',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [ogImage.url],
    },
    metadataBase: new URL(SITE_URL),
  };
};
