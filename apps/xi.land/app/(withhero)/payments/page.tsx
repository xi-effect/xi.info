import { FeaturePage } from 'components/product';
import { paymentsContent } from 'components/product/content/payments';
import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/payments');

export default function PaymentsPage() {
  return <FeaturePage content={paymentsContent} />;
}
