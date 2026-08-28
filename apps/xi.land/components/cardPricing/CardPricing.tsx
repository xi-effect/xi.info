'use client';

import Link from 'next/link';
import { Button } from '@xipkg/button';
import { cn, useMediaQuery } from '@xipkg/utils';
import { Check } from '@xipkg/icons';
import { motion, useReducedMotion } from 'motion/react';

import { SIGNUP_URL } from 'lib/app_urls';
import type { CardPricingPropsT, PlanFeatureT } from './dataForPricing';

const formatPrice = (price: number) => `${price.toLocaleString('ru-RU')} ₽`;

const SoonBadge = ({ highlight }: { highlight: boolean }) => (
  <span
    className={cn(
      'inline-flex shrink-0 rounded-full px-2 py-0.5 text-[11px] leading-none font-semibold',
      highlight ? 'bg-brand-0 text-brand-100' : 'bg-gray-5 text-gray-70',
    )}
  >
    Скоро
  </span>
);

const FeatureItem = ({ feature, highlight }: { feature: PlanFeatureT; highlight: boolean }) => (
  <li className="flex items-start gap-3">
    <Check className={cn('mt-0.5 size-5 shrink-0', highlight ? 'fill-brand-0' : 'fill-brand-80')} />
    <span
      className={cn(
        'flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-m-base leading-6 wrap-break-word sm:text-l-base',
        highlight ? 'text-brand-0' : 'text-gray-80',
      )}
    >
      {feature.text}
      {feature.soon ? <SoonBadge highlight={highlight} /> : null}
    </span>
  </li>
);

export const CardPricing = ({
  name,
  highlight = false,
  description = '',
  price,
  billing = '',
  caption = '',
  features = [],
  btn_name,
  href = SIGNUP_URL,
  onClickBtn,
  appearIndex = 0,
}: CardPricingPropsT & { appearIndex?: number }) => {
  const reduceMotion = useReducedMotion();
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)');
  const isExternal = href.startsWith('http://') || href.startsWith('https://');

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={reduceMotion || !canHover ? undefined : { y: -8 }}
      transition={{
        type: 'spring',
        stiffness: 380,
        damping: 28,
        delay: reduceMotion ? 0 : 0.1 * appearIndex,
      }}
      className={cn(
        'relative flex h-full w-full min-w-0 flex-col rounded-[28px] border p-5 sm:rounded-4xl sm:p-6 md:row-span-7 md:grid md:grid-rows-subgrid md:gap-0 md:p-8',
        highlight
          ? 'border-brand-80 bg-brand-80 text-brand-0 shadow-[0px_24px_60px_rgba(69,84,201,0.28)]'
          : 'border-gray-10 bg-gray-0 text-gray-100 shadow-[0px_8px_32px_rgba(17,24,39,0.06)]',
      )}
    >
      <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
        <h2
          className={cn(
            'text-[26px] leading-none font-semibold sm:text-[32px]',
            highlight ? 'text-brand-0' : 'text-gray-100',
          )}
        >
          {name}
        </h2>
        {highlight ? (
          <span className="inline-flex max-w-full rounded-full bg-brand-0 px-2.5 py-1 text-center text-xs-base font-semibold text-brand-100 sm:px-3">
            Для регулярной работы
          </span>
        ) : (
          <span className="inline-flex rounded-full bg-gray-5 px-2.5 py-1 text-xs-base font-semibold text-gray-80 sm:px-3">
            Бесплатно
          </span>
        )}
      </div>

      <p
        className={cn(
          'mt-4 text-pretty text-m-base leading-6 sm:text-l-base sm:leading-7',
          highlight ? 'text-brand-20' : 'text-gray-80',
        )}
      >
        {description}
      </p>

      <div className="mt-6 flex flex-wrap items-end gap-x-2 gap-y-1 sm:mt-8">
        <span
          className={cn(
            'text-[32px] leading-none font-semibold tracking-tight sm:text-[44px] lg:text-[52px]',
            highlight ? 'text-brand-0' : 'text-gray-100',
          )}
        >
          {formatPrice(price)}
        </span>
        <span
          className={cn(
            'mb-0.5 text-s-base sm:mb-1.5 sm:text-m-base',
            highlight ? 'text-brand-20' : 'text-gray-60',
          )}
        >
          {billing}
        </span>
      </div>

      <p
        className={cn(
          'mt-3 text-pretty text-s-base leading-5',
          highlight ? 'text-brand-20' : 'text-gray-60',
        )}
      >
        {caption || 'Без подписки и автосписаний'}
      </p>

      <Button
        asChild={!onClickBtn}
        size="l"
        variant={highlight ? 'ghost' : 'primary'}
        onClick={onClickBtn}
        className={cn(
          'mt-6 h-auto min-h-12 w-full self-start rounded-2xl py-3 text-base font-medium sm:h-14 sm:py-0 sm:text-l-base',
          !reduceMotion && 'max-md:active:scale-[0.99] md:transition-transform md:duration-200 md:hover:scale-[1.015] md:active:scale-[0.99]',
          highlight
            ? 'border-0 bg-brand-0 text-brand-100 hover:bg-gray-0'
            : 'text-brand-0 shadow-[0px_4px_16px_rgba(69,84,201,0.2)]',
        )}
      >
        {onClickBtn ? (
          btn_name
        ) : isExternal ? (
          <a href={href} className="inline-flex h-full w-full items-center justify-center">
            {btn_name}
          </a>
        ) : (
          <Link href={href} className="inline-flex h-full w-full items-center justify-center">
            {btn_name}
          </Link>
        )}
      </Button>

      <div
        className={cn(
          'mt-8 mb-5 h-px w-full self-start',
          highlight ? 'bg-brand-0/40' : 'bg-gray-10',
        )}
      />

      <div className="flex flex-col gap-3">
        <span
          className={cn(
            'text-xs-base font-semibold tracking-[0.08em] uppercase',
            highlight ? 'text-brand-20' : 'text-gray-50',
          )}
        >
          Что входит
        </span>
        <ul className="flex flex-col gap-3">
          {features.map((feature) => (
            <FeatureItem key={feature.text} feature={feature} highlight={highlight} />
          ))}
        </ul>
      </div>
    </motion.article>
  );
};
