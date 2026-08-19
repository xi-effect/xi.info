'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { cn } from '@xipkg/utils';
import { motion, useReducedMotion } from 'motion/react';

import {
  CAPABILITIES_HEADING,
  CAPABILITIES_TITLE_FULL,
  CAPABILITY_CARDS,
  type CapabilityCardT,
} from './capabilities_content';

const cardStaggerDelay = (index: number, reduceMotion: boolean | null) =>
  reduceMotion ? 0 : 0.11 * index;

const cardRevealTransition = (index: number, reduceMotion: boolean | null) =>
  reduceMotion
    ? { duration: 0 }
    : {
        type: 'spring' as const,
        stiffness: 380,
        damping: 28,
        mass: 0.85,
        delay: cardStaggerDelay(index, reduceMotion),
      };

type CapabilityCardPropsT = {
  card: CapabilityCardT;
  className?: string;
};

const CapabilityCard = ({ card, className }: CapabilityCardPropsT) => {
  const { Icon, text, badge, href } = card;
  const showBadgeRow = badge === 'new' || badge === 'soon';
  const cardClassName = cn(
    'flex min-h-[176px] flex-col gap-5 overflow-hidden rounded-[20px] bg-white px-6 py-6 dark:bg-gray-90',
    'md:min-h-[12rem]',
    href && 'transition-colors hover:bg-gray-0',
    className,
  );

  const inner = (
    <>
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
      <p className="font-manrope text-pretty text-base font-normal leading-7 text-gray-900/75 dark:text-gray-0/80 md:text-lg md:leading-relaxed">
        {text}
      </p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {inner}
      </Link>
    );
  }

  return <article className={cardClassName}>{inner}</article>;
};

export const CapabilitiesBlock = () => {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hintPlayedRef = useRef(false);
  const [fadeRightEdge, setFadeRightEdge] = useState(true);

  const updateScrollHint = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const nearEnd = maxScroll <= 0 || el.scrollLeft >= maxScroll - 8;
    setFadeRightEdge(!nearEnd);
  }, []);

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
      className="font-nevermind w-full bg-gray-0 px-4 py-10 md:px-6 md:py-14 dark:bg-gray-100"
    >
      <div className="mx-auto w-full max-w-[1440px] rounded-[28px] bg-violet-50 p-6 dark:bg-gray-90 md:rounded-[48px] md:p-14">
        <div className="flex w-full flex-col gap-10 md:gap-14">
          <h2 className="max-w-[920px] text-3xl font-medium leading-9 tracking-tight text-gray-900/90 dark:text-gray-0/90 sm:text-4xl sm:leading-10">
            <span className="block">{CAPABILITIES_HEADING.line1}</span>
            <span className="block">{CAPABILITIES_HEADING.line2}</span>
          </h2>

          <div className="relative">
            <div
              className={cn(
                'pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-linear-to-l from-violet-50 to-transparent transition-opacity duration-300 md:hidden dark:from-gray-90',
                !fadeRightEdge && 'opacity-0',
              )}
              aria-hidden
            />

            <div
              ref={scrollRef}
              role="region"
              aria-label={`${CAPABILITIES_TITLE_FULL}. На узком экране прокрутите по горизонтали, чтобы увидеть все возможности`}
              onScroll={updateScrollHint}
              className={cn(
                'mb-3 flex snap-x snap-mandatory gap-7 overflow-x-auto pb-1 touch-pan-x -ml-1 px-1',
                'md:mb-0 md:ml-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0 md:snap-none',
              )}
            >
              {CAPABILITY_CARDS.map((card, index) => (
                <motion.div
                  key={card.id}
                  className="w-[min(calc(100vw-3rem),24rem)] min-w-[min(calc(100vw-3rem),24rem)] shrink-0 snap-start md:w-auto md:min-w-0 md:shrink"
                  initial={
                    reduceMotion
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 32, scale: 0.96 }
                  }
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.28, margin: '0px 0px -48px 0px' }}
                  transition={cardRevealTransition(index, reduceMotion)}
                >
                  <CapabilityCard card={card} className="h-full min-w-0 w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
