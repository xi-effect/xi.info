import Link from 'next/link';
import { Button } from '@xipkg/button';
import type { BlogPost } from 'lib/blog/types';

type BlogPostFooterProps = {
  post: BlogPost;
};

export const BlogPostFooter = ({ post }: BlogPostFooterProps) => (
  <footer className="mt-12 border-t border-gray-10 pt-8">
    {post.relatedFeature && (
      <div className="mb-8 rounded-2xl bg-gray-5 p-6 sm:p-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-50">В Sovlium</p>
        <p className="mb-4 max-w-2xl font-manrope text-base leading-relaxed text-gray-80">
          Если хотите попробовать на практике — у нас это встроено в урок, без отдельных вкладок и
          ссылок.
        </p>
        <Button asChild variant="secondary">
          <Link href={post.relatedFeature.href}>{post.relatedFeature.label}</Link>
        </Button>
      </div>
    )}

    <Link
      href="/blog"
      className="text-sm font-medium text-gray-60 transition-colors hover:text-gray-100 hover:underline"
    >
      ← Все статьи
    </Link>
  </footer>
);
