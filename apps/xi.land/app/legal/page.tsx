import Link from 'next/link';

import { JsonLd } from 'components/seo/JsonLd';
import { LEGAL_DOCUMENTS } from 'lib/legal/documents';
import { breadcrumbJsonLd, graphJsonLd, webPageJsonLd } from 'lib/seo/jsonld';
import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/legal');

export default function LegalPage() {
  return (
    <>
      <JsonLd data={graphJsonLd(webPageJsonLd('/legal'), breadcrumbJsonLd('/legal'))} />
      <div>
        <h1 className="mb-8 text-4xl font-bold text-gray-900">Юридические документы</h1>

        <div className="grid gap-6 sm:grid-cols-2">
          {LEGAL_DOCUMENTS.map((document) => (
            <Link
              key={document.href}
              href={document.href}
              className="block rounded-lg border border-gray-200 bg-white p-6 transition-colors hover:border-gray-300"
            >
              <h2 className="mb-3 text-xl font-semibold text-gray-900">{document.title}</h2>
              <p className="text-gray-600">{document.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-blue-50 p-6">
          <h2 className="mb-2 text-lg font-semibold text-blue-900">Нужна помощь?</h2>
          <p className="mb-4 text-blue-800">
            Если у вас есть вопросы по юридическим документам, обращайтесь к нам:
          </p>
          <p className="text-blue-800">
            Email:{' '}
            <a href="mailto:support@sovlium.ru" className="underline underline-offset-4">
              support@sovlium.ru
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
