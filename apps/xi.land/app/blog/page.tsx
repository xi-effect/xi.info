import Link from 'next/link';

import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/blog');

export default function BlogPage() {
  return (
    <main className="flex h-full min-h-[100vh] w-full flex-row items-start justify-center overflow-x-hidden bg-gray-0">
      <div className="mt-32 flex w-full flex-col items-start justify-start">
        <div className="flex max-w-2xl flex-col gap-4 p-8">
          <h1 className="text-h5">Мы пока работаем над этой страницей 😔</h1>
          <p className="text-l-base text-gray-80">
            Скоро здесь появятся новости и заметки для репетиторов. Пока можно заглянуть в{' '}
            <Link href="/roadmap" className="text-brand-80 underline underline-offset-4">
              план развития
            </Link>{' '}
            или на страницу{' '}
            <Link href="/about" className="text-brand-80 underline underline-offset-4">
              О нас
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
