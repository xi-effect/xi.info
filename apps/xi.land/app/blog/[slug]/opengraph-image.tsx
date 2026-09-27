import { blogPosts, getBlogPost } from 'lib/blog/posts';
import {
  ogImageAlt,
  ogImageContentType,
  ogImageSize,
  renderOpenGraphImage,
} from 'lib/seo/og-image';

export const dynamic = 'force-static';
export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export const generateStaticParams = () => blogPosts.map((post) => ({ slug: post.slug }));

export default async function BlogPostOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return renderOpenGraphImage({
    eyebrow: 'Блог',
    title: post?.title ?? 'Блог sovlium',
    description: post?.description ?? '',
  });
}
