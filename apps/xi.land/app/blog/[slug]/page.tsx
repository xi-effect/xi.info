import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogJsonLd, BlogPostFooter, BlogPostHeader } from 'components/blog';
import { getBlogPost, getPublishedPosts } from 'lib/blog/posts';
import {
  getBlogPostUrl,
  getBlogPostingJsonLd,
  getBreadcrumbJsonLd,
  getFaqJsonLd,
} from 'lib/blog/seo';

export const dynamicParams = false;

export async function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  const ogImage = post.ogImage
    ? `https://sovlium.ru${post.ogImage}`
    : 'https://sovlium.ru/web-app-manifest-512x512.png';

  return {
    title: `${post.title} | Блог Sovlium`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: getBlogPostUrl(post.slug),
      siteName: 'Sovlium',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      tags: post.tags,
      images: [
        {
          url: ogImage,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post || post.hidden) {
    notFound();
  }

  const { default: PostContent } = await import(`../../../markdown/blog/${slug}.mdx`);

  const jsonLd = [
    getBlogPostingJsonLd(post),
    getBreadcrumbJsonLd(post),
    ...(post.faq ? [getFaqJsonLd(post.faq)] : []),
  ];

  return (
    <>
      <BlogJsonLd data={jsonLd} />
      <article>
        <BlogPostHeader post={post} />
        <div className="prose prose-lg max-w-none">
          <PostContent />
        </div>
        <BlogPostFooter post={post} />
      </article>
    </>
  );
}
