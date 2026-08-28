import { JsonLd } from 'components/seo/JsonLd';
import { breadcrumbJsonLd, graphJsonLd, webPageJsonLd } from 'lib/seo/jsonld';
import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/legal/requisites');

export default async function RequisitesPage() {
  const { default: RequisitesContent } = await import('../../../markdown/requisites.mdx');

  return (
    <>
      <JsonLd
        data={graphJsonLd(
          webPageJsonLd('/legal/requisites'),
          breadcrumbJsonLd('/legal/requisites'),
        )}
      />
      <RequisitesContent />
    </>
  );
}
