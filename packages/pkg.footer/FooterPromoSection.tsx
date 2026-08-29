'use client';

import { useSyncExternalStore } from 'react';
import { Link } from '@xipkg/link';
import { Button } from '@xipkg/button';
import {
  Calendar,
  BookOpened,
  Group,
  Payments,
  Conference,
  WhiteBoard,
  ArrowRight,
} from '@xipkg/icons';
import { motion, useReducedMotion } from 'motion/react';
import { shouldHideFooterPromo } from './shouldHideFooterPromo';

interface FooterPromoSectionProps {
  showPromoSection?: boolean;
}

const subscribe = () => () => {};

const useFooterPromoVisibility = (showPromoSection?: boolean) =>
  useSyncExternalStore(
    subscribe,
    () => showPromoSection ?? !shouldHideFooterPromo(window.location.hostname),
    () => showPromoSection ?? true,
  );

const PROMO_TOOLS = [
  { id: 'calendar', Icon: Calendar, wrapClassName: 'bg-cyan-20', iconClassName: 'fill-cyan-100' },
  {
    id: 'materials',
    Icon: BookOpened,
    wrapClassName: 'bg-pink-20',
    iconClassName: 'fill-pink-100',
  },
  { id: 'group', Icon: Group, wrapClassName: 'bg-violet-20', iconClassName: 'fill-violet-100' },
  {
    id: 'payments',
    Icon: Payments,
    wrapClassName: 'bg-yellow-20',
    iconClassName: 'fill-yellow-100',
  },
  {
    id: 'conference',
    Icon: Conference,
    wrapClassName: 'bg-green-0',
    iconClassName: 'fill-green-100',
  },
  { id: 'board', Icon: WhiteBoard, wrapClassName: 'bg-red-0', iconClassName: 'fill-red-100' },
] as const;

export const FooterPromoSection = ({ showPromoSection }: FooterPromoSectionProps) => {
  const isVisible = useFooterPromoVisibility(showPromoSection);
  const reduceMotion = useReducedMotion();

  if (!isVisible) {
    return null;
  }

  return (
    <section
      data-theme="white"
      className="font-nevermind bg-gray-0 w-full px-4 py-10 md:px-6 md:py-14"
    >
      <motion.div
        className="relative mx-auto flex w-full max-w-[1320px] flex-col gap-8 overflow-hidden rounded-[28px] bg-violet-50 p-6 md:rounded-[48px] md:p-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      >
        <div className="relative flex max-w-[640px] flex-col gap-4">
          <motion.p
            className="text-2xl leading-8 font-medium tracking-tight text-gray-100 md:text-4xl md:leading-10"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              type: 'spring',
              stiffness: 360,
              damping: 28,
              delay: reduceMotion ? 0 : 0.06,
            }}
          >
            Экономьте до 1 часа в день вместе с sovlium
          </motion.p>
          <motion.span
            className="text-m-base text-gray-80 leading-6 md:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              type: 'spring',
              stiffness: 360,
              damping: 28,
              delay: reduceMotion ? 0 : 0.12,
            }}
          >
            Быстро переключайтесь между инструментами в единой рабочей среде
          </motion.span>
          <div className="mt-2 flex flex-wrap gap-2">
            {PROMO_TOOLS.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  type: 'spring',
                  stiffness: 420,
                  damping: 24,
                  delay: reduceMotion ? 0 : 0.18 + index * 0.06,
                }}
              >
                <motion.div
                  className={`rounded-lg p-2 ${tool.wrapClassName}`}
                  animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                  transition={{
                    duration: 3.2 + index * 0.18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.22,
                  }}
                >
                  <tool.Icon className={tool.iconClassName} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="relative w-full shrink-0 md:w-auto"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            type: 'spring',
            stiffness: 360,
            damping: 28,
            delay: reduceMotion ? 0 : 0.22,
          }}
        >
          <Link className="block w-full md:w-auto" href="https://app.sovlium.ru/signup">
            <Button
              size="l"
              className="h-auto min-h-12 w-full rounded-2xl border-0 px-7 py-3.5 text-lg leading-6 md:w-auto"
            >
              Попробовать бесплатно
              <motion.span
                className="ml-3 inline-flex"
                animate={reduceMotion ? undefined : { x: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              >
                <ArrowRight className="fill-gray-0 size-5" />
              </motion.span>
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
