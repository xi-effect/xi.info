import { QuarterT } from './typesForRoadmap';
import { OverviewCard } from './OverviewCard';
import { QuarterTimeline } from './QuarterTimeline';

type OverviewCardDataT = {
  value: string;
  label: string;
  note: string;
};

type RoadmapTimelineT = {
  quarters: QuarterT[];
  overviewCards: OverviewCardDataT[];
};

export const titleClass =
  'text-[26px] leading-[1.15] sm:text-h3 sm:leading-[1] md:text-h1-line-height text-gray-100 font-semibold text-center whitespace-pre-line';

export const subtitleClass =
  'display-block text-gray-80 text-base leading-6 sm:text-l-base sm:leading-7 font-normal text-center';

export function RoadmapTimeline({ quarters, overviewCards }: RoadmapTimelineT) {
  return (
    <>
      <section className="w-full px-4 pb-12 sm:px-8 sm:pb-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-3">
          {overviewCards.map((card) => (
            <OverviewCard key={card.label} {...card} />
          ))}
        </div>
      </section>

      <section className="w-full px-4 pb-12 sm:px-8 sm:pb-16">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 sm:gap-6">
          <div className="flex flex-col gap-4">
            <h2 className={titleClass}>План по кварталам</h2>

            <p className={subtitleClass}>
              Каждый квартал сфокусирован на конкретном блоке роста: от базового опыта преподавателя
              до масштабирования платформы на более сложные сценарии.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8">
            {quarters.map((quarter) => (
              <QuarterTimeline key={quarter.quarter} quarter={quarter} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
