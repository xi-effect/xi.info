import { JsonLd } from 'components/seo/JsonLd';
import { breadcrumbJsonLd, graphJsonLd, webPageJsonLd } from 'lib/seo/jsonld';
import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/legal/offer');

export default async function OfferPage() {
  const { default: OfferContent } = await import('../../../markdown/offer.mdx');

  return (
    <>
      <JsonLd data={graphJsonLd(webPageJsonLd('/legal/offer'), breadcrumbJsonLd('/legal/offer'))} />
      <OfferContent />
    </>
  );
}
