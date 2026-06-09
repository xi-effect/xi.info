import type { MetadataRoute } from 'next';
import { getPublishedPosts } from 'lib/blog/posts';

export const dynamic = 'force-static';

const SITE_URL = 'https://sovlium.ru';

const staticPages: MetadataRoute.Sitemap = [
  { url: SITE_URL, lastModified: '2026-06-02', changeFrequency: 'weekly', priority: 1 },
  {
    url: `${SITE_URL}/prices`,
    lastModified: '2026-06-02',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  { url: `${SITE_URL}/blog`, lastModified: '2026-06-02', changeFrequency: 'weekly', priority: 0.8 },
  {
    url: `${SITE_URL}/about`,
    lastModified: '2026-06-02',
    changeFrequency: 'monthly',
    priority: 0.5,
  },
  {
    url: `${SITE_URL}/roadmap`,
    lastModified: '2026-06-02',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    url: `${SITE_URL}/calendar`,
    lastModified: '2026-06-02',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    url: `${SITE_URL}/calls`,
    lastModified: '2026-06-02',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    url: `${SITE_URL}/whiteboard`,
    lastModified: '2026-06-02',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    url: `${SITE_URL}/materials`,
    lastModified: '2026-06-02',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    url: `${SITE_URL}/payments`,
    lastModified: '2026-06-02',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    url: `${SITE_URL}/legal`,
    lastModified: '2026-05-19',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    url: `${SITE_URL}/legal/terms`,
    lastModified: '2026-05-19',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    url: `${SITE_URL}/legal/privacy`,
    lastModified: '2026-05-19',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    url: `${SITE_URL}/legal/consent`,
    lastModified: '2026-05-19',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    url: `${SITE_URL}/legal/marketing-consent`,
    lastModified: '2026-05-19',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPages: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
