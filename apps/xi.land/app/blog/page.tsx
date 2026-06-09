import type { Metadata } from 'next';
import { BlogCard, BlogJsonLd } from 'components/blog';
import { getBlogJsonLd } from 'lib/blog/seo';
import { getPublishedPosts } from 'lib/blog/posts';

const posts = getPublishedPosts();

export const metadata: Metadata = {
  title: 'Блог Sovlium — статьи и советы для репетиторов',
  description:
    'Практичные заметки об онлайн-уроках, досках, видеозвонках и организации работы репетитора. Без воды, из реального опыта.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Блог Sovlium — статьи и советы для репетиторов',
    description:
      'Практичные заметки об онлайн-уроках, досках, видеозвонках и организации работы репетитора.',
    url: 'https://sovlium.ru/blog',
    siteName: 'Sovlium',
    type: 'website',
    images: [
      {
        url: 'https://sovlium.ru/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Sovlium — блог для репетиторов',
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <>
      <BlogJsonLd data={getBlogJsonLd(posts)} />

      <header className="mb-12">
        <h1 className="mb-4 text-3xl font-semibold text-gray-100 sm:text-4xl">Блог</h1>
        <p className="max-w-2xl font-manrope text-lg leading-relaxed text-gray-70">
          Пишем о том, что реально мешает и помогает на уроке: доски, звук, расписание, оплаты. То,
          о чём обычно вспоминают после третьего сорванного занятия.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
