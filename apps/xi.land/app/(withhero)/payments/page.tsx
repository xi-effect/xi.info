import { FeaturePage } from 'components/product';
import { paymentsContent } from 'components/product/content/payments';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: paymentsContent.seoTitle,
  description: paymentsContent.seoDescription,
  alternates: {
    canonical: '/payments',
  },
};

export default function PaymentsPage() {
  return <FeaturePage content={paymentsContent} />;
}
