import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { JsonLd } from 'components/seo/JsonLd';
import { formatBlogDate, getBlogPost, blogPosts } from 'lib/blog/posts';
import { createBlogPostMetadata } from 'lib/seo/metadata';
import { blogPostBreadcrumbJsonLd, blogPostingJsonLd, graphJsonLd } from 'lib/seo/jsonld';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const loadBlogPostContent = (slug: string) => {
  switch (slug) {
    case 'sovlium-zavershenie-testirovaniya-2026':
      return import('../../../markdown/blog/sovlium-zavershenie-testirovaniya-2026.mdx');
    default:
      return null;
  }
};

export const dynamicParams = false;

export const generateStaticParams = () => blogPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({ params }: BlogPostPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return createBlogPostMetadata(post);
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const content = loadBlogPostContent(slug);

  if (!post || !content) {
    notFound();
  }

  const { default: PostContent } = await content;
  const posting = blogPostingJsonLd(slug);
  const breadcrumb = blogPostBreadcrumbJsonLd(slug);

  return (
    <main>
      <article
        data-theme="white"
        className="w-full bg-gray-0 pt-28 pb-20 md:pt-32 md:pb-28 xl:pt-40"
      >
        <div className="mx-auto flex w-full max-w-[880px] flex-col gap-8 px-4 md:px-6">
          <header className="flex flex-col gap-4">
            <Link
              href="/blog"
              className="font-manrope text-sm font-semibold tracking-[0.08em] text-brand-80 uppercase"
            >
              Блог
            </Link>
            <p className="font-manrope text-sm font-semibold text-brand-80">{post.category}</p>
            <h1 className="font-nevermind text-[28px] font-medium leading-8 tracking-[-0.01em] text-gray-100/90 sm:text-4xl sm:leading-10">
              {post.title}
            </h1>
            <time
              dateTime={post.date}
              className="font-manrope text-sm font-medium text-gray-900/50"
            >
              {formatBlogDate(post.date)}
            </time>
            <ul className="flex flex-wrap gap-2">
              {(post.tags ?? []).map((tag) => (
                <li
                  key={tag}
                  className="font-manrope rounded-full bg-violet-50 px-3 py-1 text-sm text-gray-900/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </header>
          <div className="font-manrope text-[16px] sm:text-[17px]">
            <PostContent />
          </div>
        </div>
      </article>
      {posting && breadcrumb ? <JsonLd data={graphJsonLd(posting, breadcrumb)} /> : null}
    </main>
  );
}
