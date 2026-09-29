'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@xipkg/button';
import { SwitcherAnimate } from '@xipkg/switcher-animate';
import { cn, useMediaQuery } from '@xipkg/utils';
import { Check } from '@xipkg/icons';
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from 'motion/react';

import { SIGNUP_URL, getSubscribeProUrl } from 'lib/app_urls';
import type { CardPricingPropsT, PlanFeatureT } from './dataForPricing';
import { PRO_YEARLY_DISCOUNT_PERCENT } from './dataForPricing';

const formatPrice = (price: number) => `${price.toLocaleString('ru-RU')} ₽`;

const BILLING_TABS = [
  { id: 'month', label: '30 дней' },
  { id: 'year', label: `Год −${PRO_YEARLY_DISCOUNT_PERCENT}%` },
] as const;

const BILLING_SWITCHER_LAYOUT_ID = 'pricing-pro-billing';

const SoonBadge = ({ highlight }: { highlight: boolean }) => (
  <span
    className={cn(
      'ml-1.5 inline-flex shrink-0 -translate-y-px rounded-full px-2 py-0.5 align-middle text-[11px] leading-none font-semibold',
      highlight ? 'bg-brand-0 text-brand-100' : 'bg-gray-5 text-gray-70',
    )}
  >
    Скоро
  </span>
);

const FeatureItem = ({ feature, highlight }: { feature: PlanFeatureT; highlight: boolean }) => (
  <li className="flex items-start gap-2.5">
    <Check className={cn('mt-px size-5 shrink-0', highlight ? 'fill-brand-0' : 'fill-brand-80')} />
    <p className={cn('min-w-0 text-m-base leading-6', highlight ? 'text-brand-0' : 'text-gray-80')}>
      {feature.text}
      {feature.soon ? <SoonBadge highlight={highlight} /> : null}
    </p>
  </li>
);

type BillingPeriodT = 'month' | 'year';

const PRICE_MORPH_TRANSITION = {
  type: 'spring' as const,
  stiffness: 320,
  damping: 34,
  mass: 0.8,
};

const MorphingPrice = ({
  value,
  className,
  reduceMotion,
}: {
  value: number;
  className: string;
  reduceMotion: boolean | null;
}) => {
  const motionValue = useMotionValue(value);
  const [displayed, setDisplayed] = useState(() => formatPrice(value));

  useMotionValueEvent(motionValue, 'change', (latest) => {
    setDisplayed(formatPrice(Math.round(latest)));
  });

  useEffect(() => {
    if (reduceMotion) {
      motionValue.set(value);
      setDisplayed(formatPrice(value));
      return;
    }

    const controls = animate(motionValue, value, PRICE_MORPH_TRANSITION);
    return () => controls.stop();
  }, [motionValue, reduceMotion, value]);

  return (
    <motion.span layout="size" transition={PRICE_MORPH_TRANSITION} className={className}>
      {displayed}
    </motion.span>
  );
};

const MorphingText = ({
  text,
  className,
  reduceMotion,
}: {
  text: string;
  className: string;
  reduceMotion: boolean | null;
}) => (
  <span className={cn('relative inline-grid', className)}>
    <AnimatePresence initial={false} mode="wait">
      <motion.span
        key={text}
        initial={reduceMotion ? false : { opacity: 0, y: 8, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -8, filter: 'blur(6px)' }}
        transition={{ duration: reduceMotion ? 0 : 0.22, ease: 'easeOut' }}
        className="col-start-1 row-start-1"
      >
        {text}
      </motion.span>
    </AnimatePresence>
  </span>
);

const BillingToggle = ({
  value,
  onChange,
}: {
  value: BillingPeriodT;
  onChange: (next: BillingPeriodT) => void;
}) => (
  <SwitcherAnimate
    layoutId={BILLING_SWITCHER_LAYOUT_ID}
    tabs={[...BILLING_TABS]}
    activeTab={value}
    onChange={(tabId) => onChange(tabId as BillingPeriodT)}
    className="mb-4 h-9 w-full gap-0.5 rounded-[10px] bg-brand-100 p-1"
    tabClassName={cn(
      'h-7 flex-1 rounded-lg px-2 py-1 text-s-base font-medium',
      'data-[state=inactive]:text-brand-0 data-[state=inactive]:hover:text-brand-0',
      'data-[state=active]:text-brand-100 data-[state=active]:hover:text-brand-100',
    )}
    indicatorClassName="rounded-lg border-0 bg-brand-0 shadow-sm"
  />
);

export const CardPricing = ({
  name,
  highlight = false,
  description = '',
  price,
  billing = '',
  caption = '',
  yearly,
  features = [],
  btn_name,
  href = SIGNUP_URL,
  onClickBtn,
  appearIndex = 0,
}: CardPricingPropsT & { appearIndex?: number }) => {
  const reduceMotion = useReducedMotion();
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)');
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriodT>('month');

  const isYearly = Boolean(yearly) && billingPeriod === 'year';
  const displayedPrice = isYearly && yearly ? yearly.price : price;
  const displayedBilling = isYearly && yearly ? yearly.billing : billing;
  const displayedCaption = isYearly && yearly ? yearly.caption : caption;
  const buttonHref = yearly ? getSubscribeProUrl(billingPeriod) : href;
  const isExternal = buttonHref.startsWith('http://') || buttonHref.startsWith('https://');

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

      <div className="mt-5 sm:mt-6">
        {yearly ? <BillingToggle value={billingPeriod} onChange={setBillingPeriod} /> : null}
        <div className="flex flex-wrap items-end gap-x-2 gap-y-1">
          <MorphingPrice
            value={displayedPrice}
            reduceMotion={reduceMotion}
            className={cn(
              'inline-block text-[32px] leading-none font-semibold tracking-tight tabular-nums sm:text-[44px] lg:text-[52px]',
              highlight ? 'text-brand-0' : 'text-gray-100',
            )}
          />
          <MorphingText
            text={displayedBilling}
            reduceMotion={reduceMotion}
            className={cn(
              'mb-0.5 text-s-base sm:mb-1.5 sm:text-m-base',
              highlight ? 'text-brand-20' : 'text-gray-60',
            )}
          />
        </div>
        {yearly ? (
          <p
            className={cn(
              'mt-2 min-h-5 text-pretty text-s-base leading-5',
              highlight ? 'text-brand-20' : 'text-gray-60',
            )}
          >
            <AnimatePresence initial={false}>
              {isYearly ? (
                <motion.span
                  key={yearly.equivalentLabel}
                  initial={reduceMotion ? false : { opacity: 0, y: 6, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -6, filter: 'blur(4px)' }}
                  transition={{ duration: reduceMotion ? 0 : 0.2, ease: 'easeOut' }}
                  className="block"
                >
                  {yearly.equivalentLabel}
                </motion.span>
              ) : null}
            </AnimatePresence>
          </p>
        ) : null}
      </div>

      <p
        className={cn(
          'mt-3 min-h-10 text-pretty text-s-base leading-5',
          highlight ? 'text-brand-20' : 'text-gray-60',
        )}
      >
        <MorphingText
          text={displayedCaption || 'Без подписки и автосписаний'}
          reduceMotion={reduceMotion}
          className="block"
        />
      </p>

      <Button
        asChild={!onClickBtn}
        size="l"
        variant={highlight ? 'ghost' : 'primary'}
        onClick={onClickBtn}
        className={cn(
          'mt-6 h-auto min-h-12 w-full self-start rounded-2xl py-3 text-base font-medium sm:h-14 sm:py-0 sm:text-l-base',
          !reduceMotion &&
            'max-md:active:scale-[0.99] md:transition-transform md:duration-200 md:hover:scale-[1.015] md:active:scale-[0.99]',
          highlight
            ? 'border-0 bg-brand-0 text-brand-100 hover:bg-gray-0'
            : 'text-brand-0 shadow-[0px_4px_16px_rgba(69,84,201,0.2)]',
        )}
      >
        {onClickBtn ? (
          btn_name
        ) : isExternal ? (
          <a href={buttonHref} className="inline-flex h-full w-full items-center justify-center">
            {btn_name}
          </a>
        ) : (
          <Link href={buttonHref} className="inline-flex h-full w-full items-center justify-center">
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

      <div className="flex min-w-0 flex-col gap-3">
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
