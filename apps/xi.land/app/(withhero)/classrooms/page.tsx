import { FeaturePage } from 'components/product';
import { classroomsContent } from 'components/product/content/classrooms';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: classroomsContent.seoTitle,
  description: classroomsContent.seoDescription,
  alternates: {
    canonical: '/classrooms',
  },
};

export default function ClassroomsPage() {
  return <FeaturePage content={classroomsContent} />;
}
