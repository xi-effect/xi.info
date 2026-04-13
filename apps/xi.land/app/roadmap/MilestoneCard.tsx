import { cn } from '@xipkg/utils';

import { MilestoneStatusT, MilestoneT } from './types';

type MilestoneCardProps = {
  milestone: MilestoneT;
};

const mapBadgeClassNameByStatus: Record<MilestoneStatusT, string> = {
  Фундамент: 'bg-brand-10 text-brand-100',
  Продукт: 'bg-[#EAF7D6] text-[#476614]',
  Рост: 'bg-[#FFF1E5] text-[#8C4E15]',
  Масштабирование: 'bg-[#EEE9FF] text-[#5E44A1]',
};

export function MilestoneCard({ milestone }: MilestoneCardProps) {
  return (
    <article className="rounded-4xl bg-gray-0 p-4 sm:p-8">
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={cn(
              'inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-[0.02em]',
              mapBadgeClassNameByStatus[milestone.status],
            )}
          >
            {milestone.status}
          </span>
          <span className="text-s-base font-medium text-gray-60">{milestone.period}</span>
        </div>

        <div className="flex flex-col gap-2 sm:gap-3">
          <h3 className="text-l-base font-semibold leading-[1.2] text-gray-100 sm:text-h5">
            {milestone.title}
          </h3>
          <p className="text-s-base leading-5 text-gray-80 sm:text-l-base sm:leading-7">
            {milestone.description}
          </p>
        </div>

        <ul className="flex flex-col gap-2 border-t border-gray-10 pt-3 sm:pt-4">
          {milestone.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2.5 text-s-base leading-5 text-gray-70 sm:gap-3 sm:text-m-base"
            >
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-brand-80" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
