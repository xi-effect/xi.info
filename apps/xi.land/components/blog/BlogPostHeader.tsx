import Link from 'next/link';
import type { BlogPost } from 'lib/blog/types';
import { formatBlogDate } from 'lib/blog/posts';

type BlogPostHeaderProps = {
  post: BlogPost;
};

export const BlogPostHeader = ({ post }: BlogPostHeaderProps) => (
  <header className="mb-10 border-b border-gray-10 pb-8">
    <nav aria-label="Хлебные крошки" className="mb-6 text-sm text-gray-50">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-gray-80 hover:underline">
            Главная
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <Link href="/blog" className="hover:text-gray-80 hover:underline">
            Блог
          </Link>
        </li>
      </ol>
    </nav>

    <div className="mb-4 flex flex-wrap gap-2">
      {post.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-gray-5 px-3 py-1 text-xs font-medium text-gray-60"
        >
          {tag}
        </span>
      ))}
    </div>

    <h1 className="mb-4 text-3xl font-semibold leading-tight text-gray-100 sm:text-4xl">
      {post.title}
    </h1>

    <p className="mb-4 max-w-3xl font-manrope text-lg leading-relaxed text-gray-70">
      {post.description}
    </p>

    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-50">
      <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
      <span aria-hidden="true">·</span>
      <span>{post.readingTimeMinutes} мин чтения</span>
    </div>
  </header>
);
