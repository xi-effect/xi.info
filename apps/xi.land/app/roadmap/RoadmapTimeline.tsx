'use client';

import { cn } from '@xipkg/utils';

import { QuarterT } from './types';
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
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-0">
      <div className="mt-6 flex w-full flex-col items-start justify-start sm:mt-10">
        <section className="w-full px-4 pb-12 pt-24 sm:px-8 sm:pb-16 lg:pt-28">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-5 sm:gap-6">
            <div className="flex flex-col gap-5 md:gap-10">
              <h1 className={cn(titleClass, 'font-bold')}>
                Дорожная карта развития Sovlium на 2026 год
              </h1>

              <div className="flex flex-col gap-4">
                <p className={subtitleClass}>
                  От идеи до результата — с чёткой дорожной картой и прозрачными этапами
                </p>
              </div>
            </div>
          </div>
        </section>

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
                Каждый квартал сфокусирован на конкретном блоке роста: от базового опыта
                преподавателя до масштабирования платформы на более сложные сценарии.
              </p>
            </div>

            <div className="flex flex-col gap-6 lg:gap-8">
              {quarters.map((quarter) => (
                <QuarterTimeline key={quarter.quarter} quarter={quarter} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
