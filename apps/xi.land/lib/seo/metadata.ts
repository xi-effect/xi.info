import type { Metadata } from 'next';

import type { BlogPostT } from 'lib/blog/posts';

import { absoluteUrl, SITE_NAME, SITE_URL } from './site';
import { getSeoPage, type SeoPathT } from './pages';

export const createPageMetadata = (path: SeoPathT): Metadata => {
  const page = getSeoPage(path);
  const canonical = page.canonical ?? absoluteUrl(page.path);
  const ogTitle = page.ogTitle ?? page.title;
  const ogDescription = page.ogDescription ?? page.description;
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
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
    },
    metadataBase: new URL(SITE_URL),
  };
};

export const createBlogPostMetadata = (post: BlogPostT): Metadata => {
  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    title: post.title,
    description: post.description,
    keywords: [...(post.tags ?? [])],
    alternates: {
      canonical: url,
    },
    robots: {
      index: post.index,
      follow: true,
      googleBot: {
        index: post.index,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: SITE_NAME,
      locale: 'ru_RU',
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    metadataBase: new URL(SITE_URL),
  };
};
