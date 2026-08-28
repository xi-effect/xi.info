'use client';

import Image from 'next/image';
import { cn } from '@xipkg/utils';
import { motion, useReducedMotion } from 'motion/react';

import type { FeatureHighlightT } from './types';

type FeatureHighlightsPropsT = {
  title: string;
  highlights: readonly FeatureHighlightT[];
};

const HighlightCard = ({ card }: { card: FeatureHighlightT }) => (
  <article
    className={cn(
      'relative h-80 min-h-[280px] w-full overflow-hidden rounded-[20px]',
      card.bgClassName,
    )}
  >
    {card.imageNeedsShot === false ? (
      <div className="absolute inset-0 flex items-end justify-center">
        <Image
          src={card.imageSrc}
          alt={card.imageAlt}
          width={826}
          height={476}
          className="h-auto max-h-full w-auto max-w-full object-contain"
          sizes="(max-width: 768px) min(100vw - 3rem, 384px), 384px"
        />
      </div>
    ) : null}
    <div className="absolute top-5 left-5 z-10 max-w-[calc(100%-2.5rem)] rounded-xl bg-white px-4 py-2">
      <span
        className={cn('block text-pretty text-lg font-semibold leading-6', card.badgeTextClassName)}
      >
        {card.title}
      </span>
    </div>
  </article>
);

export const FeatureHighlights = ({ title, highlights }: FeatureHighlightsPropsT) => {
  const reduceMotion = useReducedMotion();

  if (highlights.length === 0) {
    return null;
  }

  return (
    <section
      data-theme="white"
      className="font-nevermind w-full bg-gray-0 px-4 py-10 md:px-6 md:py-14"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10 md:gap-14">
        <h2 className="max-w-[720px] text-3xl font-medium leading-9 tracking-tight text-gray-900 md:text-4xl md:leading-10">
          {title}
        </h2>

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((card, index) => (
            <motion.div
              key={card.id}
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 28,
                delay: reduceMotion ? 0 : 0.08 * index,
              }}
            >
              <HighlightCard card={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
