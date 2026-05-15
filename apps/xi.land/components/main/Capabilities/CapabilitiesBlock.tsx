'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronSmallRight } from '@xipkg/icons';
import { cn } from '@xipkg/utils';
import { motion, useReducedMotion } from 'motion/react';

import {
  CAPABILITIES_HEADING,
  CAPABILITIES_TITLE_FULL,
  CAPABILITY_CARDS,
  type CapabilityCardT,
} from './capabilities_content';

type CapabilityCardPropsT = {
  card: CapabilityCardT;
  className?: string;
};

const CapabilityCard = ({ card, className }: CapabilityCardPropsT) => {
  const { Icon, text, badge } = card;
  const showBadgeRow = badge === 'new' || badge === 'soon';

  return (
    <article
      className={cn(
        'flex min-h-[176px] flex-col gap-2.5 overflow-hidden rounded-[20px] bg-white px-6 py-6 dark:bg-gray-90',
        'md:h-44 md:min-h-[176px]',
        className,
      )}
    >
      <div className="flex min-h-0 flex-1 flex-col justify-between gap-2.5">
        <div
          className={cn(
            'flex shrink-0 items-center',
            showBadgeRow ? 'justify-between' : 'justify-start',
          )}
        >
          <span className="flex size-8 shrink-0 items-center justify-center overflow-hidden">
            <Icon className="size-8 shrink-0 fill-fuchsia-500 dark:fill-fuchsia-400" aria-hidden />
          </span>
          {badge === 'new' ? (
            <span className="shrink-0 rounded-full bg-lime-300 px-4 py-1.5 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100">
              новинка
            </span>
          ) : null}
          {badge === 'soon' ? (
            <span className="shrink-0 rounded-full bg-violet-50 px-4 py-1.5 text-sm font-semibold leading-5 text-slate-600 dark:bg-violet-950/40 dark:text-slate-300">
              скоро будет
            </span>
          ) : null}
        </div>
        <p className="text-pretty text-lg font-medium leading-6 text-gray-900/90 dark:text-gray-0/90">
          {text}
        </p>
      </div>
    </article>
  );
};

export const CapabilitiesBlock = () => {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hintPlayedRef = useRef(false);
  const [fadeRightEdge, setFadeRightEdge] = useState(true);
  const [showBounceHint, setShowBounceHint] = useState(true);

  const updateScrollHint = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const nearEnd = maxScroll <= 0 || el.scrollLeft >= maxScroll - 8;
    setFadeRightEdge(!nearEnd);
  }, []);

  const dismissBounceHint = useCallback(() => setShowBounceHint(false), []);

  useEffect(() => {
    updateScrollHint();
    window.addEventListener('resize', updateScrollHint);
    return () => window.removeEventListener('resize', updateScrollHint);
  }, [updateScrollHint]);

  useEffect(() => {
    const el = scrollRef.current;
    const section = sectionRef.current;
    if (!el || !section || reduceMotion) return;

    const timeouts: number[] = [];
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hintPlayedRef.current) return;
        if (el.scrollWidth <= el.clientWidth) return;
        hintPlayedRef.current = true;
        timeouts.push(
          window.setTimeout(() => {
            el.scrollTo({ left: 52, behavior: 'smooth' });
            timeouts.push(
              window.setTimeout(() => {
                el.scrollTo({ left: 0, behavior: 'smooth' });
              }, 780),
            );
          }, 420),
        );
      },
      { threshold: 0.28 },
    );

    io.observe(section);
    return () => {
      timeouts.forEach(clearTimeout);
      io.disconnect();
    };
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      data-theme="white"
      className="w-full bg-gray-0 px-4 py-10 md:px-6 md:py-14 dark:bg-gray-100"
    >
      <div className="mx-auto max-w-[1360px] rounded-[28px] bg-violet-50 p-6 dark:bg-gray-90 md:rounded-[48px] md:p-14">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10 md:gap-14">
          <h2 className="max-w-[920px] text-3xl font-medium leading-9 tracking-tight text-gray-900/90 dark:text-gray-0/90 sm:text-4xl sm:leading-10">
            <span className="block">{CAPABILITIES_HEADING.line1}</span>
            <span className="block">{CAPABILITIES_HEADING.line2}</span>
          </h2>

          <div className="hidden md:flex md:flex-wrap md:justify-start md:gap-7">
            {CAPABILITY_CARDS.map((card) => (
              <CapabilityCard key={card.id} card={card} className="w-96 shrink-0" />
            ))}
          </div>

          <div className="relative md:hidden">
            <div
              className={cn(
                'pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-linear-to-l from-violet-50 to-transparent transition-opacity duration-300 dark:from-gray-90',
                !fadeRightEdge && 'opacity-0',
              )}
              aria-hidden
            />

            <motion.div
              className={cn(
                'pointer-events-none absolute bottom-3 right-1 z-20 flex items-center justify-center rounded-full bg-white/90 p-1.5 shadow-md ring-1 ring-gray-900/5 transition-opacity duration-300 dark:bg-gray-90/95 dark:ring-gray-0/10',
                !(fadeRightEdge && showBounceHint) && 'opacity-0',
              )}
              animate={
                reduceMotion || !fadeRightEdge || !showBounceHint ? undefined : { x: [0, 6, 0] }
              }
              transition={
                reduceMotion || !fadeRightEdge || !showBounceHint
                  ? undefined
                  : { repeat: Infinity, duration: 2.1, ease: 'easeInOut' }
              }
              aria-hidden
            >
              <ChevronSmallRight className="size-5 shrink-0 fill-fuchsia-600 dark:fill-fuchsia-400" />
            </motion.div>

            <div
              ref={scrollRef}
              role="region"
              aria-label={`${CAPABILITIES_TITLE_FULL}. Прокрутите по горизонтали, чтобы увидеть все возможности`}
              onScroll={updateScrollHint}
              onWheel={dismissBounceHint}
              onTouchStart={dismissBounceHint}
              className={cn(
                'flex snap-x snap-mandatory gap-7 overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
                '-mx-1 px-1 touch-pan-x',
              )}
            >
              {CAPABILITY_CARDS.map((card) => (
                <CapabilityCard
                  key={card.id}
                  card={card}
                  className="w-[min(calc(100vw-3rem),24rem)] min-w-[min(calc(100vw-3rem),24rem)] shrink-0 snap-start"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
