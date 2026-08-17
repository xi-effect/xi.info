import { FeaturePage } from 'components/product';
import { materialsContent } from 'components/product/content/materials';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: materialsContent.seoTitle,
  description: materialsContent.seoDescription,
  alternates: {
    canonical: '/materials',
  },
};

export default function MaterialsPage() {
  return <FeaturePage content={materialsContent} />;
}
