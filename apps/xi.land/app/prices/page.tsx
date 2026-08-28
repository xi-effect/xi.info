import { PricesView } from 'components/cardPricing/PricesView';
import { JsonLd } from 'components/seo/JsonLd';
import { breadcrumbJsonLd, graphJsonLd, pricesOffersJsonLd, webPageJsonLd } from 'lib/seo/jsonld';
import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/prices');

export default function PricesPage() {
  return (
    <>
      <JsonLd
        data={graphJsonLd(
          webPageJsonLd('/prices'),
          breadcrumbJsonLd('/prices'),
          pricesOffersJsonLd,
        )}
      />
      <PricesView />
    </>
  );
}
