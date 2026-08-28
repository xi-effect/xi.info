import { FeaturePage } from 'components/product';
import { callsContent } from 'components/product/content/calls';
import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/calls');

export default function CallsPage() {
  return <FeaturePage content={callsContent} />;
}
