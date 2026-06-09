import type { Metadata } from 'next';
import { roadmapData, RoadmapTimeline } from '../../components/roadmap';

export const metadata: Metadata = {
  title: 'План развития Sovlium — roadmap продукта',
  description:
    'Что уже есть в Sovlium и что появится дальше: видеозвонки, доска, расписание, оплаты и другие инструменты для репетиторов.',
  alternates: {
    canonical: '/roadmap',
  },
  openGraph: {
    title: 'План развития Sovlium — roadmap продукта',
    description: 'Дорожная карта развития платформы Sovlium для репетиторов.',
    url: 'https://sovlium.ru/roadmap',
    siteName: 'Sovlium',
    type: 'website',
  },
};

export default function RoadmapPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gray-0 pt-24 sm:pt-28">
      <RoadmapTimeline items={roadmapData} />
    </main>
  );
}
