'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

import type { HeroCardT } from './hero_content';

const HERO_SLIDER_SPEED = 80;

type HeroInfiniteSliderPropsT = {
  cards: readonly HeroCardT[];
};

export const HeroInfiniteSlider = ({ cards }: HeroInfiniteSliderPropsT) => {
  const sliderGroupRef = useRef<HTMLDivElement>(null);
  const [sliderDistance, setSliderDistance] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const sliderGroup = sliderGroupRef.current;

    if (!sliderGroup) {
      return;
    }

    const updateSliderDistance = () => {
      setSliderDistance(sliderGroup.getBoundingClientRect().width);
    };

    updateSliderDistance();

    const resizeObserver = new ResizeObserver(updateSliderDistance);
    resizeObserver.observe(sliderGroup);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden mask-none md:mask-[linear-gradient(to_right,transparent,black_1.5%,black_98.5%,transparent)]">
      <motion.div
        className="flex w-max"
        animate={sliderDistance > 0 && !shouldReduceMotion ? { x: [0, -sliderDistance] } : { x: 0 }}
        transition={{
          duration: sliderDistance > 0 ? sliderDistance / HERO_SLIDER_SPEED : 0,
          ease: 'linear',
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <div
          ref={sliderGroupRef}
          className="flex shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4 lg:gap-5 lg:pr-5"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative aspect-square w-[280px] overflow-hidden rounded-2xl bg-gray-5 sm:w-[320px] sm:rounded-4xl lg:w-[385px]"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 639px) 280px, (max-width: 1023px) 320px, 385px"
                className="object-contain object-center"
              />
            </div>
          ))}
        </div>

        <div aria-hidden className="flex shrink-0 gap-3 sm:gap-4 lg:gap-5">
          {cards.map((card) => (
            <div
              key={`${card.id}-duplicate`}
              className="relative aspect-square w-[280px] overflow-hidden rounded-2xl bg-gray-5 sm:w-[320px] sm:rounded-4xl lg:w-[385px]"
            >
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(max-width: 639px) 280px, (max-width: 1023px) 320px, 385px"
                className="object-contain object-center"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
