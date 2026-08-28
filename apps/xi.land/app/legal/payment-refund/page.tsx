import { JsonLd } from 'components/seo/JsonLd';
import { breadcrumbJsonLd, graphJsonLd, webPageJsonLd } from 'lib/seo/jsonld';
import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/legal/payment-refund');

export default async function PaymentRefundPage() {
  const { default: PaymentRefundContent } = await import('../../../markdown/payment-refund.mdx');

  return (
    <>
      <JsonLd
        data={graphJsonLd(
          webPageJsonLd('/legal/payment-refund'),
          breadcrumbJsonLd('/legal/payment-refund'),
        )}
      />
      <PaymentRefundContent />
    </>
  );
}
