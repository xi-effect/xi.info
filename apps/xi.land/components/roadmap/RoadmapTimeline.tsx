'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

import type { RoadmapItemT } from './dataForRoadmap';

type RoadmapTimelinePropsT = {
  items: RoadmapItemT[];
};

export function RoadmapTimeline({ items }: RoadmapTimelinePropsT) {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  const [lineTravel, setLineTravel] = useState(0);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 78%', 'end 22%'],
  });

  const timelineProgress = useTransform(scrollYProgress, [0.18, 1], [0, 1]);

  const beamProgress = useSpring(timelineProgress, {
    stiffness: 120,
    damping: 32,
    mass: 0.4,
  });
  const beamOffsetY = 32;

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const updateLineTravel = () => {
      setLineTravel(Math.max(line.offsetHeight - 240, 0));
    };

    updateLineTravel();

    const observer = new ResizeObserver(updateLineTravel);
    observer.observe(line);

    return () => observer.disconnect();
  }, []);

  const beamY = useTransform(beamProgress, [0, 1], [-36 + beamOffsetY, lineTravel + beamOffsetY]);
  const revealScale = useTransform(beamProgress, [0, 1], [0.16, 1]);
  const beamOpacity = useTransform(beamProgress, [0, 0.04, 0.12, 1], [0.55, 0.75, 1, 1]);

  return (
    <section className="w-full px-4 pb-20 pt-8 sm:px-8 sm:pb-24 md:pt-10 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 sm:gap-12">
        <div className="mx-auto flex max-w-[880px] flex-col gap-4 text-center">
          <h1 className="text-[28px] leading-[1.2] font-semibold whitespace-pre-line text-gray-100 sm:text-h3 sm:leading-[1] md:text-h1-line-height">
            Планы развития Sovlium
          </h1>

          <p className="mt-4 text-base leading-6 text-gray-80 sm:text-l-base sm:leading-7">
            Мы собрали предварительный план развития Sovlium на 2026 год.
          </p>

          <p className="text-xs-base leading-6 text-gray-80 sm:text-m-base sm:leading-7">
            Он будет постепенно обновляться и дополняться, чтобы вам было проще понимать, <br />{' '}
            какие обновления мы готовим в ближайшее время.
          </p>
        </div>

        <div ref={timelineRef} className="relative mt-16">
          <div
            ref={lineRef}
            className="absolute inset-y-0 hidden w-px rounded-full bg-gray-20 lg:left-[272px] lg:block"
          >
            <motion.div
              className="absolute inset-0 origin-top rounded-full bg-linear-to-b from-brand-80 via-brand-80 to-brand-20"
              style={{ scaleY: revealScale }}
            />
            <motion.div
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-[3px] -translate-x-1/2 rounded-full bg-linear-to-b from-brand-80 via-brand-80 to-brand-20 blur-[1px] lg:h-72"
              style={{ y: beamY, opacity: beamOpacity }}
            />
          </div>

          <div className="flex flex-col gap-5 sm:gap-10 md:gap-15 lg:gap-30">
            {items.map((item, index) => (
              <motion.article
                key={`${item.period}-${item.title}`}
                className="relative grid gap-4 md:gap-5 lg:grid-cols-[224px_96px_minmax(0,1fr)] lg:items-start lg:gap-0"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
              >
                <span className="absolute left-[272px] top-10 z-10 hidden size-3 -translate-x-1/2 rounded-full border-[3px] border-gray-0 bg-brand-80 ring-[6px] ring-brand-20 lg:block" />

                <div className="lg:pr-10 lg:pt-7">
                  <p className="text-s-base font-semibold uppercase leading-[1.1] tracking-[0.06em] text-gray-60 sm:text-m-base lg:text-[22px] lg:leading-[1.02]">
                    {item.period}
                  </p>
                </div>

                <div className="hidden lg:block" />

                <div className="rounded-4xl border border-gray-10 bg-gray-5 p-5 sm:p-8 md:p-7 lg:p-10">
                  <div className="flex flex-col gap-4 sm:gap-5">
                    <div className="flex flex-col gap-3 sm:gap-4">
                      <h2 className="text-l-base font-semibold leading-[1.2] text-gray-100 sm:text-xl-base sm:leading-[1.15] md:text-h5 md:leading-[1.1]">
                        {item.title}
                      </h2>

                      <p className="text-m-base leading-6 text-gray-80 sm:text-l-base sm:leading-7">
                        {item.description}
                      </p>
                    </div>

                    <div className="border-t border-gray-10 pt-4 sm:pt-5 lg:pt-6">
                      <p className="mb-3 text-xs-base font-semibold uppercase tracking-[0.08em] text-gray-60">
                        Основные цели
                      </p>

                      <ul className="grid gap-3 md:gap-3.5 lg:gap-4">
                        {item.goals.map((goal) => (
                          <li
                            key={goal}
                            className="flex items-start gap-3 text-s-base leading-5 text-gray-80 sm:text-m-base sm:leading-6"
                          >
                            <span className="mt-2 block size-2 shrink-0 rounded-full bg-brand-80" />
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        <div className="mt-20 flex w-full items-center justify-center">
          <p className="max-w-[680px] text-base leading-6 text-gray-80 sm:text-l-base sm:leading-7">
            Обратите внимание, что это предварительный план и он может быть изменен в зависимости от
            потребностей рынка и клиентов.
          </p>
        </div>
      </div>
    </section>
  );
}
