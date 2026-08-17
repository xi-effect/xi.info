import { FeaturePage } from 'components/product';
import { whiteboardContent } from 'components/product/content/whiteboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: whiteboardContent.seoTitle,
  description: whiteboardContent.seoDescription,
  alternates: {
    canonical: '/whiteboard',
  },
};

export default function WhiteboardPage() {
  return <FeaturePage content={whiteboardContent} />;
}
