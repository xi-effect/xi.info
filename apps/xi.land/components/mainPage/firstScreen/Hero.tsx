'use client';

import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useState } from 'react';
import { StarShape } from './StarShape';
import { WaveShape } from './WaveShape';
import { HeroContent } from './HeroContent';

export const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Функция обновления координат курсора
  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    x.set(offsetX - rect.width / 2);
    y.set(offsetY - rect.height / 2);
  };

  // Определение трансформаций для каждого слоя
  const layer1X = useTransform(x, (value) => value * 0.08);
  const layer1Y = useTransform(y, (value) => value * 0.08);

  const layer2X = useTransform(x, (value) => value * 0.12);
  const layer2Y = useTransform(y, (value) => value * 0.2);

  const layer3X = useTransform(x, (value) => value * 0.02);
  const layer3Y = useTransform(y, (value) => value * 0.02);

  return (
    <section
      className="rounded-b-[64px] bg-brand-80 relative lg:h-[calc(100dvh-1.5rem)] md:flex"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        style={{
          x: layer1X,
          y: layer1Y,
        }}
        animate={{ scale: isHovering ? 1.05 : 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <StarShape />
      </motion.div>
      <motion.div
        style={{
          x: layer2X,
          y: layer2Y,
        }}
        animate={{ scale: isHovering ? 1.05 : 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <WaveShape />
      </motion.div>
      <div className="pt-28 lg:px-24 xs:pt-36 px-8 md:flex relative overflow-hidden w-full">
        <Image
          src="/assets/mainPage/hero/main.webp"
          alt="main screen image"
          width={1085}
          height={890}
          priority
          className="hidden md:block lg:pt-16 2xl:pt-5 w-auto h-full top-0 -right-28 object-cover xl:right-0 absolute z-0 pointer-events-none"
        />
        <HeroContent isHovering={isHovering} layer3X={layer3X} layer3Y={layer3Y} />
      </div>
    </section>
  );
};
