import { FeaturePage } from 'components/product';
import { materialsContent } from 'components/product/content/materials';
import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/materials');

export default function MaterialsPage() {
  return <FeaturePage content={materialsContent} />;
}
