import { roadmapData, RoadmapTimeline } from '../../components/roadmap';
import { JsonLd } from 'components/seo/JsonLd';
import { breadcrumbJsonLd, graphJsonLd, webPageJsonLd } from 'lib/seo/jsonld';
import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/roadmap');

export default function RoadmapPage() {
  return (
    <>
      <JsonLd data={graphJsonLd(webPageJsonLd('/roadmap'), breadcrumbJsonLd('/roadmap'))} />
      <main className="min-h-screen w-full overflow-x-hidden bg-gray-0 pt-24 sm:pt-28">
        <RoadmapTimeline items={roadmapData} />
      </main>
    </>
  );
}
