import { FeaturePage } from 'components/product';
import { callsContent } from 'components/product/content/calls';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: callsContent.seoTitle,
  description: callsContent.seoDescription,
  alternates: {
    canonical: '/calls',
  },
};

export default function CallsPage() {
  return <FeaturePage content={callsContent} />;
}
