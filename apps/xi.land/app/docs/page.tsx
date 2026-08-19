import Link from 'next/link';

import { SUPPORT_URL } from 'lib/app_urls';
import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/docs');

export default function DocsMovedPage() {
  return (
    <main className="flex min-h-[100vh] w-full items-start justify-center bg-gray-0">
      <div className="mt-32 flex max-w-2xl flex-col gap-4 p-8">
        <h1 className="text-h5">Инструкции переехали</h1>
        <p className="text-l-base text-gray-80">
          Мы собрали подсказки и руководства в базе знаний — так их проще искать и обновлять.
        </p>
        <p>
          <Link href={SUPPORT_URL} className="text-brand-80 underline underline-offset-4">
            Перейти в базу знаний
          </Link>
        </p>
      </div>
    </main>
  );
}
