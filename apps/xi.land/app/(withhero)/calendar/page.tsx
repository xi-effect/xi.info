import { FeaturePage } from 'components/product';
import { calendarContent } from 'components/product/content/calendar';
import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/calendar');

export default function CalendarPage() {
  return <FeaturePage content={calendarContent} />;
}
