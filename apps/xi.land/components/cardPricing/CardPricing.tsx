'use client';

import Link from 'next/link';
import { Button } from '@xipkg/button';
import { cn } from '@xipkg/utils';
import { Check } from '@xipkg/icons';

import { SIGNUP_URL } from 'lib/app_urls';
import type { CardPricingPropsT } from './dataForPricing';

export const CardPricing = ({
  name,
  highlight = false,
  description = '',
  price,
  billing = '',
  features = [],
  btn_name,
  onClickBtn,
}: CardPricingPropsT) => {
  return (
    <article
      className={cn(
        'relative flex h-full w-full flex-col gap-6 rounded-4xl border border-gray-10 bg-gray-0 p-6 shadow-[0px_12px_40px_rgba(17,24,39,0.08)] sm:p-8 lg:p-10',
        highlight && 'border-brand-80 bg-brand-80 shadow-[0px_24px_60px_rgba(69,84,201,0.25)]',
      )}
    >
      {highlight && (
        <span className="text-xs-base absolute top-6 right-6 inline-flex rounded-full bg-brand-0 px-4 py-1 font-semibold text-brand-100">
          Самый полный доступ
        </span>
      )}

      <div className="flex flex-col gap-3 pt-6 lg:min-h-[140px]">
        <h2
          className={cn(
            'text-[28px] leading-[1.1] font-semibold sm:text-[32px] lg:text-[40px]',
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
            'text-[40px] leading-none font-semibold sm:text-[48px]',
            highlight ? 'text-brand-0' : 'text-gray-100',
          )}
        >
          {price === null ? 'Скоро' : `${price} ₽`}
        </span>
        <span className={cn('text-s-base', highlight ? 'text-brand-20' : 'text-gray-60')}>
          {billing}
        </span>
      </div>

      <Button
        asChild={!onClickBtn}
        size="l"
        variant={highlight ? 'ghost' : 'primary'}
        onClick={onClickBtn}
        className={cn(
          'sm:w-85 h-12 w-full rounded-2xl text-base font-medium sm:h-14 sm:text-l-base lg:min-h-[56px]',
          highlight
            ? 'border-2 border-brand-0 bg-brand-0 text-brand-100'
            : 'text-brand-0 shadow-[0px_4px_4px_rgba(69,84,201,0.25)]',
        )}
      >
        {onClickBtn ? (
          btn_name
        ) : (
          <Link href={SIGNUP_URL} className="inline-flex h-full w-full items-center justify-center">
            {btn_name}
          </Link>
        )}
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
              <Check
                className={cn('size-5 shrink-0', highlight ? 'fill-brand-0' : 'fill-brand-80')}
              />

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
