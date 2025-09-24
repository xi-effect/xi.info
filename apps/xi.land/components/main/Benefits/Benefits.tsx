'use client';

import { motion, Variants } from 'framer-motion';

import { Sticker } from './Sticker';

const MotionSticker = motion.create(Sticker);

export const Benefits = () => {
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

  return (
    <section
      className="relative w-full min-h-screen lg:min-h-[915px] overflow-hidden flex items-center justify-center bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/main/benefits/bg_benefits.svg')" }}
    >
      <div className="relative z-10 w-full mx-auto">
        <div className="h-full w-full grid grid-cols-1 auto-rows-min gap-[10px] sm:grid-cols-3 sm:grid-rows-2 sm:gap-6 items-stretch sm:place-content-center">
          <MotionSticker
            className="row-start-1"
            type="violetSticker"
            variants={stickerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          />

          <MotionSticker
            className="col-start-2 row-start-2 xs:row-start-3 xs:col-start-1 sm:row-start-2 sm:col-start-2 sm:-translate-y-[20%] lg:-translate-y-[50%]"
            type="greenSticker"
            variants={stickerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          />

          <MotionSticker
            className="row-start-3 xs:row-start-2 xs:col-start-2 sm:row-start-1 sm:col-start-3"
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
