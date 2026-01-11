/* eslint-disable no-irregular-whitespace */
'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Button } from '@xipkg/button';
import { ArrowRight } from '@xipkg/icons';
import { Link } from '@xipkg/link';
import { Arrow, Formular, SmallStar, Star } from './icons';

interface IconPosition {
  top?: number | string;
  left?: number | string;
  bottom?: number | string;
  right?: number | string;
}

export const MainPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-200px' });

  // Motion values для параллакса
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Коэффициенты параллакса для каждой иконки (разные для разнообразия)
  const parallaxFactors = [0.6, 0.9, 0.7, 1.0];

  // Создаем трансформированные значения для каждой иконки
  const icon1X = useTransform(springX, (value) => value * parallaxFactors[0]);
  const icon1Y = useTransform(springY, (value) => value * parallaxFactors[0]);
  const icon2X = useTransform(springX, (value) => value * parallaxFactors[1]);
  const icon2Y = useTransform(springY, (value) => value * parallaxFactors[1]);
  const icon3X = useTransform(springX, (value) => value * parallaxFactors[2]);
  const icon3Y = useTransform(springY, (value) => value * parallaxFactors[2]);
  const icon4X = useTransform(springX, (value) => value * parallaxFactors[3]);
  const icon4Y = useTransform(springY, (value) => value * parallaxFactors[3]);

  // Фиксированные позиции иконок согласно макету
  // Star - верхний левый угол
  // SmallStar - верхний правый угол
  // Arrow - нижний левый квадрант
  // Formular - нижний правый квадрант
  const iconPositions: IconPosition[] = [
    { top: 20, left: 20 }, // Star - верхний левый
    { bottom: 40, left: 340 }, // Arrow - нижний левый
    { top: 40, right: 180 }, // SmallStar - верхний правый
    { bottom: 20, right: 20 }, // Formular - нижний правый
  ];

  // Обработчик движения мыши для параллакса
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const container = ref.current;
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Вычисляем смещение относительно центра контейнера
    const offsetX = (e.clientX - centerX) / rect.width;
    const offsetY = (e.clientY - centerY) / rect.height;

    // Ограничиваем смещение (параллакс не должен быть слишком сильным)
    mouseX.set(offsetX * 120); // Максимальное смещение 120px
    mouseY.set(offsetY * 80);
  };

  const handleMouseLeave = () => {
    // Возвращаем иконки в исходное положение при уходе курсора
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      id="become-tester"
      className="xs:p-8 relative flex w-full flex-col items-center justify-between gap-4 p-4 pt-10 sm:items-baseline sm:gap-8 md:items-center lg:py-[128px] xl:gap-16 xl:px-24 2xl:px-[160px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
      >
        <>
          <motion.div
            className="pointer-events-none absolute"
            style={{
              top: iconPositions[0].top !== undefined ? `${iconPositions[0].top}px` : undefined,
              left: iconPositions[0].left !== undefined ? `${iconPositions[0].left}px` : undefined,
              x: icon1X,
              y: icon1Y,
            }}
          >
            <Star />
          </motion.div>
          <motion.div
            className="pointer-events-none absolute"
            style={{
              bottom:
                iconPositions[1].bottom !== undefined ? `${iconPositions[1].bottom}px` : undefined,
              left: iconPositions[1].left !== undefined ? `${iconPositions[1].left}px` : undefined,
              x: icon2X,
              y: icon2Y,
            }}
          >
            <Arrow />
          </motion.div>
          <motion.div
            className="pointer-events-none absolute"
            style={{
              top: iconPositions[2].top !== undefined ? `${iconPositions[2].top}px` : undefined,
              right:
                iconPositions[2].right !== undefined ? `${iconPositions[2].right}px` : undefined,
              x: icon3X,
              y: icon3Y,
            }}
          >
            <SmallStar />
          </motion.div>
          <motion.div
            className="pointer-events-none absolute"
            style={{
              bottom:
                iconPositions[3].bottom !== undefined ? `${iconPositions[3].bottom}px` : undefined,
              right:
                iconPositions[3].right !== undefined ? `${iconPositions[3].right}px` : undefined,
              x: icon4X,
              y: icon4Y,
            }}
          >
            <Formular />
          </motion.div>
        </>
      </div>
      <motion.div
        className="xs:gap-8 relative z-10 flex flex-col gap-4 md:gap-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h3
          className="text-gray-0 z-5 text-center text-[24px] leading-[1.2] font-semibold whitespace-pre-line sm:text-[36px] sm:font-medium md:text-[48px] md:leading-[1.05] md:font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Разложите всё по полочкам вместе с sovlium
        </motion.h3>
        <motion.div
          className="text-gray-0 text-m-base xs:text-l-base sm:text-xl-base md:text-h3 z-5 flex w-full justify-center !leading-[1.3]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <Link className="w-full md:w-auto" href="https://app.sovlium.ru/signup">
            <Button
              variant="ghost"
              className="text-brand-100 bg-brand-0 h-12 w-full rounded-2xl pr-3 pl-6 text-[16px] leading-[24px] md:h-16 md:w-auto md:text-[24px] md:leading-[32px]"
              size="l"
            >
              Попробовать бесплатно
              <ArrowRight className="fill-brand-100 ml-2 h-6 w-6 md:ml-4 md:h-8 md:w-8" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
