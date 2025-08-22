/* eslint-disable no-irregular-whitespace */
'use client';

import { usePathname } from 'next/navigation';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { CallToActionForm } from './CallToActionForm';

export const MainPage = () => {
  const pathname = usePathname();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-200px' });

  const isMainPage = pathname === '/';

  if (!isMainPage) return null;

  return (
    <div
      ref={ref}
      id="become-tester"
      className="xs:p-8 flex w-full flex-col items-center justify-between gap-4 p-4 sm:items-baseline sm:gap-8 md:items-center lg:flex-row lg:py-[128px] xl:gap-16 xl:px-24 2xl:px-[160px]"
    >
      <motion.div
        className="flex flex-col gap-4 md:gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h3
          className="text-gray-0 text-xl-base z-5 leading-[1.2] font-semibold whitespace-pre-line sm:text-[48px] sm:font-medium md:text-[64px] md:leading-[1.05] md:font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Проверьте sovlium на практике
          <br />
          и расскажите о своих впечатлениях
        </motion.h3>
        <motion.p
          className="text-gray-0 text-m-base xs:text-l-base sm:text-xl-base md:text-h3 z-5 !leading-[1.3]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          А мы подарим вам доступ на 30 дней ко всем функциям
        </motion.p>
      </motion.div>
      <motion.div
        className="bg-gray-0 w-full max-w-full rounded-2xl p-4 sm:rounded-[48px] sm:p-12 md:h-135.5 md:max-w-128"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      >
        <CallToActionForm />
      </motion.div>
    </div>
  );
};
