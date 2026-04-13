import { overviewCards, roadmapData } from '../../components/roadmap/dataForRoadmap';
import { RoadmapTimeline } from '../../components/roadmap/RoadmapTimeline';

export const titleClass =
  'text-[26px] font-bold leading-[1.15] sm:text-h3 sm:leading-[1] md:text-h1-line-height text-gray-100 font-semibold text-center whitespace-pre-line';

export const subtitleClass =
  'display-block text-gray-80 text-base leading-6 sm:text-l-base sm:leading-7 font-normal text-center';

export default function RoadmapPage() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-0">
      <div className="mt-6 flex w-full flex-col items-start justify-start sm:mt-10">
        <section className="w-full px-4 pb-12 pt-24 sm:px-8 sm:pb-16 lg:pt-28">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-5 sm:gap-6">
            <div className="flex flex-col gap-5 md:gap-10">
              <h1 className={titleClass}>Дорожная карта развития Sovlium на 2026 год</h1>

              <div className="flex flex-col gap-4">
                <p className={subtitleClass}>
                  От идеи до результата — с чёткой дорожной картой и прозрачными этапами
                </p>
              </div>
            </div>
          </div>
        </section>

        <RoadmapTimeline quarters={roadmapData} overviewCards={overviewCards} />
      </div>
    </div>
  );
}
