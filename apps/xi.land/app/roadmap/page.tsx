import { roadmapData } from '../../components/roadmap/dataForRoadmap';
import { RoadmapTimeline } from '../../components/roadmap/RoadmapTimeline';

export default function RoadmapPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gray-0 pt-24 sm:pt-28">
      <RoadmapTimeline items={roadmapData} />
    </main>
  );
}
