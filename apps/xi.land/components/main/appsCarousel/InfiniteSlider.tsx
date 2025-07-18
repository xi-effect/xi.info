'use client';

import { animate, AnimationPlaybackControls, motion, useMotionValue } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 15,
  className,
}: InfiniteSliderProps) {
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let controls: AnimationPlaybackControls;

    const updateWidth = () => {
      const width = ref.current?.getBoundingClientRect().width;

      if (width) {
        const contentSize = width + gap;
        const from = 0;
        const to = -contentSize / 2;

        if (isTransitioning) {
          controls = animate(translation, [translation.get(), to], {
            ease: 'linear',
            duration: duration * Math.abs((translation.get() - to) / contentSize),
            onComplete: () => {
              setIsTransitioning(false);
              setKey((prevKey) => prevKey + 1);
            },
          });
        } else {
          controls = animate(translation, [from, to], {
            ease: 'linear',
            duration,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
            onRepeat: () => {
              translation.set(from);
            },
          });
        }
      }
    };

    window.addEventListener('resize', updateWidth);
    updateWidth();

    return () => {
      window.removeEventListener('resize', updateWidth);
      controls?.stop();
    };
  }, [key, translation, duration, gap, isTransitioning]);

  return (
    <div className={className}>
      <motion.div
        className="flex w-max"
        style={{
          x: translation,
          gap: `${gap}px`,
          flexDirection: 'row',
        }}
        ref={ref}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
