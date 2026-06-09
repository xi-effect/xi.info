import type { BlogPost } from './types';

const SITE_URL = 'https://sovlium.ru';

export const getBlogPostUrl = (slug: string) => `${SITE_URL}/blog/${slug}`;

export const getBlogPostingJsonLd = (post: BlogPost) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.description,
  datePublished: post.publishedAt,
  dateModified: post.updatedAt ?? post.publishedAt,
  author: {
    '@type': 'Organization',
    name: 'Sovlium',
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Sovlium',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/web-app-manifest-512x512.png`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': getBlogPostUrl(post.slug),
  },
  image: post.ogImage ? `${SITE_URL}${post.ogImage}` : `${SITE_URL}/web-app-manifest-512x512.png`,
  inLanguage: 'ru-RU',
  keywords: post.tags.join(', '),
});

export const getBlogJsonLd = (posts: BlogPost[]) => ({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Блог Sovlium',
  description:
    'Статьи и советы для репетиторов об онлайн-уроках, инструментах и организации работы.',
  url: `${SITE_URL}/blog`,
  inLanguage: 'ru-RU',
  blogPost: posts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    url: getBlogPostUrl(post.slug),
    datePublished: post.publishedAt,
  })),
});

export const getFaqJsonLd = (faq: NonNullable<BlogPost['faq']>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export const getBreadcrumbJsonLd = (post: BlogPost) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Главная',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Блог',
      item: `${SITE_URL}/blog`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: post.title,
      item: getBlogPostUrl(post.slug),
    },
  ],
});
