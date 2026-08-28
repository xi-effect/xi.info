import type { MetadataRoute } from 'next';

import { blogPosts } from 'lib/blog/posts';
import { indexableSeoPages } from 'lib/seo/pages';
import { absoluteUrl } from 'lib/seo/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = indexableSeoPages().map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: page.lastmod,
  }));

  const posts: MetadataRoute.Sitemap = blogPosts
    .filter((post) => post.index)
    .map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.date,
    }));

  return [...pages, ...posts];
}
