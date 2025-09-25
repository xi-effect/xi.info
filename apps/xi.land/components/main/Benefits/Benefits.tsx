'use client';

import { motion, Variants } from 'motion/react';

import { Sticker } from './Sticker';

const MotionSticker = motion.create(Sticker);

const stickerAnimation: Variants = {
  hidden: { opacity: 0, scale: 1.2, rotate: -3 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      opacity: { duration: 0.6, ease: 'easeOut' },
      scale: { type: 'spring', stiffness: 120, damping: 20 },
      rotate: { type: 'spring', stiffness: 120, damping: 20 },
    },
  },
};

export const Benefits = () => {
  return (
    <section
      className="relative w-full lg:min-h-[915px] overflow-hidden flex items-center justify-center bg-no-repeat bg-cover bg-center px-4 lg:px-8 py-16 sm:py-20 lg:py-64"
      style={{ backgroundImage: "url('/assets/main/benefits/bg_benefits.svg')" }}
    >
      <div className="relative z-10 w-full max-w-7xl lg:mx-auto h-full flex items-center justify-center">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-[10px] sm:gap-6 w-full lg:min-h-[1000px]">
          {/* Первый стикер - всегда сверху */}
          <MotionSticker
            className="flex-shrink-0 lg:self-start"
            type="violetSticker"
            variants={stickerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          />

          {/* Второй стикер - снизу на больших экранах, по центру на мобильных */}
          <MotionSticker
            className="flex-shrink-0 self-end lg:mt-auto"
            type="greenSticker"
            variants={stickerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          />

          {/* Третий стикер - сверху на больших экранах */}
          <MotionSticker
            className="flex-shrink-0 lg:self-start"
            type="yellowSticker"
            variants={stickerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
          />
        </div>
      </div>
    </section>
  );
};
