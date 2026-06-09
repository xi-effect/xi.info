import Link from 'next/link';
import type { BlogPost } from 'lib/blog/types';
import { formatBlogDate } from 'lib/blog/posts';

type BlogCardProps = {
  post: BlogPost;
};

export const BlogCard = ({ post }: BlogCardProps) => (
  <article className="group flex flex-col rounded-2xl border border-gray-10 bg-gray-0 p-6 transition-colors hover:border-gray-20">
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

    <h2 className="mb-3 text-xl font-semibold leading-snug text-gray-100 group-hover:text-brand-80">
      <Link href={`/blog/${post.slug}`} className="outline-none">
        {post.title}
      </Link>
    </h2>

    <p className="mb-6 flex-1 font-manrope text-base leading-relaxed text-gray-70">
      {post.excerpt}
    </p>

    <div className="flex items-center justify-between text-sm text-gray-50">
      <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
      <span>{post.readingTimeMinutes} мин чтения</span>
    </div>
  </article>
);
