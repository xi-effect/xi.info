import { FeaturePage } from 'components/product';
import { calendarContent } from 'components/product/content/calendar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: calendarContent.seoTitle,
  description: calendarContent.seoDescription,
  alternates: {
    canonical: '/calendar',
  },
};

export default function CalendarPage() {
  return <FeaturePage content={calendarContent} />;
}
