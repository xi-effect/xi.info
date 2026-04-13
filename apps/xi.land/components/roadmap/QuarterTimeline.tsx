'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { cn } from '@xipkg/utils';

import { QuarterT } from './typesForRoadmap';
import { MilestoneCard } from './MilestoneCard';

type QuarterTimelineT = {
  quarter: QuarterT;
};

export function QuarterTimeline({ quarter }: QuarterTimelineT) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  const [lineTravel, setLineTravel] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 35%'],
  });

  const beamProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.2,
  });

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const updateLineTravel = () => {
      setLineTravel(Math.max(line.offsetHeight - 112, 0));
    };

    updateLineTravel();

    const observer = new ResizeObserver(updateLineTravel);
    observer.observe(line);

    return () => observer.disconnect();
  }, []);

  const beamY = useTransform(beamProgress, [0, 1], [0, lineTravel]);
  const revealScale = useTransform(beamProgress, [0, 1], [0.08, 1]);
  const beamOpacity = useTransform(beamProgress, [0, 0.08, 0.2, 1], [0, 0.35, 1, 1]);

  return (
    <section
      ref={sectionRef}
      className="grid gap-4 rounded-4xl bg-gray-5 p-3 sm:gap-6 sm:p-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:p-8"
    >
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className={cn('rounded-4xl bg-linear-to-br p-5 sm:p-8', quarter.accent)}>
          <div className="flex flex-col gap-3 sm:gap-4">
            <span className="text-[36px] font-semibold leading-none text-gray-100 sm:text-h4-line-height">
              {quarter.quarter}
            </span>
            <p className="text-m-base font-semibold leading-6 text-gray-100 sm:text-l-base">
              {quarter.focus}
            </p>
            <p className="text-s-base leading-5 text-gray-80">{quarter.summary}</p>
          </div>
        </div>
      </aside>

      <div className="relative overflow-hidden pl-5 sm:pl-8">
        <div
          ref={lineRef}
          className="absolute bottom-3 left-0 top-3 w-px rounded-full bg-gray-20 sm:bottom-4 sm:top-4"
        >
          <motion.div
            className="absolute inset-x-0 top-0 origin-top rounded-full bg-brand-80/30"
            style={{ scaleY: revealScale }}
          />
          <motion.div
            className="pointer-events-none absolute left-1/2 h-20 w-2 -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,rgba(112,76,255,0)_0%,rgba(112,76,255,0.3)_18%,rgba(112,76,255,0.95)_52%,rgba(177,233,88,0.85)_100%)] blur-[2px] sm:h-28 sm:w-3"
            style={{ y: beamY, opacity: beamOpacity }}
          />
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          {quarter.milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              className="relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
            >
              <span
                className={cn(
                  'absolute left-0 top-7 size-2.5 -translate-x-[19px] rounded-full border-2 border-gray-0 bg-brand-80 shadow-[0_0_0_4px_rgba(112,76,255,0.14)] sm:top-8 sm:size-3 sm:-translate-x-[31px] sm:border-[3px] sm:shadow-[0_0_0_6px_rgba(112,76,255,0.14)]',
                  index === quarter.milestones.length - 1 && 'bg-[#7CB518]',
                )}
              />
              <MilestoneCard milestone={milestone} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
