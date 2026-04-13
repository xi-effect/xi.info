import { overviewCards, roadmap2026 } from './data';
import { RoadmapTimeline } from './RoadmapTimeline';

export default function RoadmapPage() {
  return <RoadmapTimeline quarters={roadmap2026} overviewCards={overviewCards} />;
}
