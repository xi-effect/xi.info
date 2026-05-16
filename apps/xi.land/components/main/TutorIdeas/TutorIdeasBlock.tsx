'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronSmallRight } from '@xipkg/icons';
import { cn } from '@xipkg/utils';
import { motion, useReducedMotion } from 'motion/react';

import {
  TUTOR_IDEA_CARDS,
  TUTOR_IDEAS_SUBTITLE,
  TUTOR_IDEAS_TITLE,
  TUTOR_IDEAS_TITLE_FULL,
  type TutorIdeaCardT,
} from './tutorIdeas_content';

type IdeaCardPropsT = {
  card: TutorIdeaCardT;
  className?: string;
};

const IdeaCard = ({ card, className }: IdeaCardPropsT) => (
  <article
    className={cn(
      'relative h-80 min-h-[280px] w-full overflow-hidden rounded-[20px]',
      card.bgClassName,
      className,
    )}
  >
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
    <div className="absolute left-5 top-5 z-10 max-w-[calc(100%-2.5rem)] rounded-xl bg-white px-4 py-2 shadow-[0_1px_3px_rgba(15,15,17,0.08)]">
      <span
        className={cn(
          'block text-pretty text-center text-lg font-semibold leading-6',
          card.badgeTextClassName,
        )}
      >
        {card.title}
      </span>
    </div>
  </article>
);

export const TutorIdeasBlock = () => {
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
      className="font-nevermind w-full bg-gray-0 px-4 py-10 md:px-6 md:py-14 dark:bg-gray-100"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10 md:gap-14">
        <header className="flex flex-col gap-6 text-left md:items-center md:text-center">
          <h2 className="text-3xl font-medium leading-9 tracking-tight text-gray-900 md:text-4xl md:leading-10 dark:text-gray-0">
            {TUTOR_IDEAS_TITLE}
          </h2>
          <p className="font-manrope text-lg font-medium leading-6 text-gray-900/90 dark:text-gray-0/90">
            {TUTOR_IDEAS_SUBTITLE}
          </p>
        </header>

        <div className="hidden md:flex md:flex-wrap md:justify-start md:gap-7">
          {TUTOR_IDEA_CARDS.map((card) => (
            <IdeaCard key={card.id} card={card} className="w-96 shrink-0" />
          ))}
        </div>

        <div className="relative md:hidden">
          <div
            className={cn(
              'pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-linear-to-l from-gray-0 to-transparent transition-opacity duration-300 dark:from-gray-100',
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
            <ChevronSmallRight className="size-5 shrink-0 fill-brand-100 dark:fill-brand-20" />
          </motion.div>

          <div
            ref={scrollRef}
            role="region"
            aria-label={`${TUTOR_IDEAS_TITLE_FULL}. Прокрутите по горизонтали`}
            onScroll={updateScrollHint}
            onWheel={dismissBounceHint}
            onTouchStart={dismissBounceHint}
            className={cn(
              'flex snap-x snap-mandatory gap-7 overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
              '-mx-1 px-1 touch-pan-x',
            )}
          >
            {TUTOR_IDEA_CARDS.map((card) => (
              <IdeaCard
                key={card.id}
                card={card}
                className="w-[min(calc(100vw-3rem),384px)] min-w-[min(calc(100vw-3rem),384px)] shrink-0 snap-start"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
