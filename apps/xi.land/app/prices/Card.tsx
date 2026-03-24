import { Button } from '@xipkg/button';
import { cn } from '@xipkg/utils';
import { Check } from '@xipkg/icons';
import Link from 'next/link';

import type { CardProps } from './types';

export const Card = ({ name, highlight, description, price, billing, features, href, cta }: CardProps) => {
  return (
    <article
      key={name}
      className={cn(
        'relative flex flex-col rounded-4xl border border-gray-10 bg-gray-0 p-6 sm:p-8 lg:p-10 gap-6 shadow-[0px_12px_40px_rgba(17,24,39,0.08)] w-full h-full',
        highlight &&
        'bg-brand-80 border-brand-80 shadow-[0px_24px_60px_rgba(69,84,201,0.25)]',
      )}
    >
      {highlight && (
        <span className="absolute top-6 right-6 inline-flex rounded-full bg-brand-0 text-brand-100 text-xs-base font-semibold px-4 py-1">
          Самый полный доступ
        </span>
      )}

      <div className="flex flex-col gap-3 pt-6 lg:min-h-[140px]">
        <h2
          className={cn(
            'text-[28px] sm:text-[32px] lg:text-[40px] font-semibold leading-[1.1]',
            highlight ? 'text-brand-0' : 'text-gray-100',
          )}
        >
          {name}
        </h2>
        <p
          className={cn(
            'text-m-base sm:text-l-base lg:min-h-[64px]',
            highlight ? 'text-brand-20' : 'text-gray-80',
          )}
        >
          {description}
        </p>
      </div>

      <div className="flex items-baseline gap-2 lg:min-h-[64px]">
        <span
          className={cn(
            'text-[40px] sm:text-[48px] font-semibold leading-none',
            highlight ? 'text-brand-0' : 'text-gray-100',
          )}
        >
          {price}
        </span>
        <span className={cn('text-s-base', highlight ? 'text-brand-20' : 'text-gray-60')}>
          {billing}
        </span>
      </div>

      <Button
        asChild
        size="l"
        variant={highlight ? 'ghost' : 'primary'}
        className={cn(
          'w-full sm:w-85 h-12 sm:h-14 text-base sm:text-l-base font-medium rounded-2xl lg:min-h-[56px]',
          highlight
            ? 'text-brand-100 bg-brand-0 hover:bg-transparent hover:text-brand-0 border-2 border-brand-0'
            : 'text-brand-0 shadow-[0px_4px_4px_rgba(69,84,201,0.25)]',
        )}
      >
        <Link href={href}>{cta}</Link>
      </Button>

      <div className="flex flex-col gap-3 mt-auto">
        <span
          className={cn(
            'text-xs-base font-semibold uppercase tracking-[0.12em]',
            highlight ? 'text-brand-20' : 'text-gray-50',
          )}
        >
          Что входит
        </span>
        <ul className="flex flex-col gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <Check className={cn('size-5 shrink-0', highlight ? 'fill-brand-0' : 'fill-brand-80')} />

              <span
                className={cn(
                  'text-m-base sm:text-l-base',
                  highlight ? 'text-brand-0' : 'text-gray-80',
                )}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
