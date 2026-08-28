import { FeaturePage } from 'components/product';
import { classroomsContent } from 'components/product/content/classrooms';
import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/classrooms');

export default function ClassroomsPage() {
  return <FeaturePage content={classroomsContent} />;
}
