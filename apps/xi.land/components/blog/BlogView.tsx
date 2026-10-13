import Link from 'next/link';

import { blogPosts, formatBlogDate } from 'lib/blog/posts';
import { BLOG_HERO } from './blog_content';

export const BlogView = () => (
  <main>
    <section
      data-theme="white"
      className="w-full overflow-x-clip bg-gray-0 pt-28 pb-20 md:pt-32 md:pb-28 xl:pt-40"
    >
      <div className="mx-auto flex w-full max-w-[760px] flex-col gap-10 px-4 md:px-6">
        <div className="flex flex-col gap-6">
          <p className="font-manrope text-sm font-semibold tracking-[0.08em] text-brand-80 uppercase">
            {BLOG_HERO.eyebrow}
          </p>
          <h1 className="font-nevermind text-[28px] font-medium leading-8 tracking-[-0.01em] text-gray-100/90 sm:text-4xl sm:leading-10">
            {BLOG_HERO.title}
          </h1>
          {blogPosts.length === 0 ? (
            <p className="font-manrope max-w-2xl text-m-base font-medium leading-6 text-slate-800/60 sm:text-lg">
              {BLOG_HERO.lead}
            </p>
          ) : null}
        </div>

        {blogPosts.length > 0 ? (
          <ul className="flex flex-col">
            {blogPosts.map((post) => (
              <li key={post.slug} className="border-b border-gray-900/10 last:border-b-0">
                <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-3 py-8">
                  <p className="font-manrope flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-gray-900/50">
                    <span className="text-brand-80">{post.category}</span>
                    <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                  </p>
                  <h2 className="font-nevermind text-2xl font-medium leading-8 text-gray-100 group-hover:text-brand-80">
                    {post.title}
                  </h2>
                  <p className="font-manrope text-base leading-7 text-gray-900/70">
                    {post.description}
                  </p>
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
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  </main>
);
