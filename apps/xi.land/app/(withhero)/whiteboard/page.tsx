import { FeaturePage } from 'components/product';
import { whiteboardContent } from 'components/product/content/whiteboard';
import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/whiteboard');

export default function WhiteboardPage() {
  return <FeaturePage content={whiteboardContent} />;
}
