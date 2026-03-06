/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// CSS fallback для случаев без JavaScript
const fallbackStyles = `
  @media (prefers-reduced-motion: reduce) {
    .motion-fallback {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  }
  
  .no-js .motion-fallback {
    opacity: 1 !important;
    transform: none !important;
  }
`;

const subTitle = [
  {
    id: 1,
    text: 'видеозвонки',
    textColor: 'text-orange-80',
    bgColor: 'bg-yellow-20',
  },
  {
    id: 2,
    text: 'автоматические напоминания',
    textColor: 'text-violet-100',
    bgColor: 'bg-violet-20',
  },
  {
    id: 3,
    text: 'онлайн-доски',
    textColor: 'text-green-80',
    bgColor: 'bg-green-0',
  },
  {
    id: 4,
    text: 'заметки',
    textColor: 'text-cyan-100',
    bgColor: 'bg-cyan-20',
  },
  {
    id: 5,
    text: 'контроль оплат',
    textColor: 'text-red-80',
    bgColor: 'bg-red-0',
  },
];

import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@xipkg/button';
import { usePathname } from 'next/navigation';
import { config } from './config';
import { useMediaQuery } from '@xipkg/utils';

// Декоративные анимации и снег загружаются лениво — не блокируют первый рендер и не тянут gsap/react-snowfall в основной бандл
const AnimationChem = dynamic(() => import('./AnimationChem').then((m) => m.AnimationChem), {
  ssr: false,
});
const AnimationMath = dynamic(() => import('./AnimationMath').then((m) => m.AnimationMath), {
  ssr: false,
});
const AnimationEng = dynamic(() => import('./AnimationEng').then((m) => m.AnimationEng), {
  ssr: false,
});
const AnimationHistory = dynamic(
  () => import('./AnimationHistory').then((m) => m.AnimationHistory),
  { ssr: false },
);
const SnowAnimation = dynamic(() => import('./SnowAnimation').then((m) => m.SnowAnimation), {
  ssr: false,
});

const HeroText = () => {
  const pathname = usePathname();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const title = config[pathname]?.title ?? config['/'].title;
  const wrapperClass = 'flex flex-col items-center gap-4 md:gap-6 motion-fallback';
  const h1Class =
    'text-xl-base sm:text-h2 md:text-[64px] leading-[1.2] sm:leading-[1] md:leading-[1.05] font-semibold text-gray-0 text-center whitespace-pre-line';

  if (!isDesktop) {
    return (
      <div className={wrapperClass}>
        <h1 className={h1Class}>{title}</h1>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {subTitle.map((item) => (
            <div key={item.id} className={`rounded-2xl px-4 py-2 ${item.bgColor}`}>
              <p
                className={`text-xl max-[720px]:text-base max-[720px]:leading-6 max-[376px]:leading-4 max-[376px]:text-xs font-normal ${item.textColor}`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={wrapperClass}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
        ...(typeof window !== 'undefined' &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches && {
            duration: 0,
          }),
      }}
    >
      <motion.h1
        className={h1Class}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: 'easeOut',
          ...(typeof window !== 'undefined' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches && {
              duration: 0,
              delay: 0,
            }),
        }}
      >
        {title}
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {subTitle.map((item, index) => (
          <motion.div
            key={item.id}
            className={`rounded-2xl px-4 py-2 ${item.bgColor}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 20,
              duration: 0.6,
              delay: 0.4 + index * 0.2,
              ease: 'easeOut',
              ...(typeof window !== 'undefined' &&
                window.matchMedia('(prefers-reduced-motion: reduce)').matches && {
                  duration: 0,
                  delay: 0,
                }),
            }}
          >
            <p
              className={`text-xl max-[720px]:text-base max-[720px]:leading-6 max-[376px]:leading-4 max-[376px]:text-xs font-normal ${item.textColor}`}
            >
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Blobs = () => (
  <>
    <div className="absolute -left-[21px] -top-[173px] z-1 w-[512px] h-[512px] bg-gray-0 opacity-50 blur-[256px] flex-none order-0 flex-grow-0" />
    <div className="absolute -right-[226px] bottom-[158px] z-1 w-[512px] h-[512px] bg-[#F3F4FC] opacity-50 blur-[256px] sm:flex hidden flex-none order-1 flex-grow-0" />
  </>
);

const IDLE_DELAY_MS = 400;

export const Hero = () => {
  const pathname = usePathname();
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [showDecorations, setShowDecorations] = React.useState(false);

  // Добавляем CSS fallback
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = fallbackStyles;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Декоративные анимации (gsap) подгружаем после первого кадра, чтобы не блокировать LCP
  React.useEffect(() => {
    const id =
      typeof requestIdleCallback !== 'undefined'
        ? requestIdleCallback(() => setShowDecorations(true), { timeout: IDLE_DELAY_MS })
        : (setTimeout(() => setShowDecorations(true), IDLE_DELAY_MS) as unknown as number);

    return () => {
      if (typeof cancelIdleCallback !== 'undefined') {
        cancelIdleCallback(id as number);
      } else {
        clearTimeout(id);
      }
    };
  }, []);

  const heroConfig = config[pathname] ?? config['/'];
  const imageSrc = heroConfig?.image ?? config['/'].image;
  const imageMobileSrc = heroConfig?.imageMobile ?? config['/'].imageMobile;

  return (
    <section
      data-theme="white"
      className="relative flex flex-col items-center justify-center z-0 bg-gray-0 dark:bg-gray-100 h-100dvh min-h-100dvh w-full pt-28 px-6 pb-12 transition-all duration-700 ease-in-out"
    >
      <div className="w-full max-w-400 sm:h-[calc(100vh-160px)] flex items-start justify-center">
        <div className="relative overflow-hidden bg-brand-80 w-full h-full md:min-h-[560px] z-0 rounded-[32px] md:rounded-[48px] lg:rounded-[64px] pt-8 md:pt-16 pb-8 sm:pb-0 px-4 sm:px-8 lg:px-12 2xl:px-[128px] flex flex-col items-center gap-8 sm:gap-16 md:gap-16">
          <SnowAnimation />
          <Blobs />

          {showDecorations && (
            <>
              <motion.div
                className="hidden md:block absolute top-0 left-6 w-[192px] h-[192px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              >
                <AnimationChem active={true} />
              </motion.div>

              <motion.div
                className="hidden md:block absolute top-0 right-6 w-[192px] h-[192px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              >
                <AnimationEng active={true} />
              </motion.div>

              <motion.div
                className="hidden md:block absolute top-72 right-16 w-[296px] h-[192px]"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 4.5, ease: 'easeOut' }}
              >
                <AnimationHistory active={true} />
              </motion.div>

              <motion.div
                className="hidden md:block absolute top-72 left-16 w-[192px] h-[192px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
              >
                <AnimationMath active={true} />
              </motion.div>
            </>
          )}

          <div className="z-30 my-auto md:my-0 md:mb-0 flex flex-col items-center md:max-w-[1088px] max-w-[580px]">
            <HeroText />

            {isDesktop ? (
              <motion.div
                className="flex flex-col items-center w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              >
                <Button
                  asChild
                  variant="ghost"
                  size="l"
                  className="px-4 mt-8 md:mt-10 w-full sm:w-85 md:w-full max-w-77.75 sm:max-w-116 !text-base sm:!text-l-base md:!text-xl-base h-12 md:h-16 text-brand-80 sm:text-brand-100 md:text-brand-80 font-medium bg-brand-0 shadow-[0px_4px_4px_rgba(69,84,201,0.25)] hover:bg-transparent hover:text-gray-0 hover:border-gray-0 border-2 border-brand-0 transition-all duration-600"
                >
                  <Link href="https://app.sovlium.ru/signup">{heroConfig.button}</Link>
                </Button>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center w-full">
                <Button
                  asChild
                  variant="ghost"
                  size="l"
                  className="px-4 mt-8 md:mt-10 w-full sm:w-85 md:w-full max-w-77.75 sm:max-w-116 !text-base sm:!text-l-base md:!text-xl-base h-12 md:h-16 text-brand-80 sm:text-brand-100 md:text-brand-80 font-medium bg-brand-0 shadow-[0px_4px_4px_rgba(69,84,201,0.25)] hover:bg-transparent hover:text-gray-0 hover:border-gray-0 border-2 border-brand-0 transition-all duration-600"
                >
                  <Link href="https://app.sovlium.ru/signup">{heroConfig.button}</Link>
                </Button>
              </div>
            )}

            {isDesktop ? (
              <motion.span
                className="text-gray-10 md:text-gray-20 text-xs-base md:text-s-base font-normal mt-2 text-center md:!leading-[1.3]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: 'easeOut' }}
              >
                Платформа на бета-тестировании
              </motion.span>
            ) : (
              <span className="text-gray-10 md:text-gray-20 text-xs-base md:text-s-base font-normal mt-2 text-center md:!leading-[1.3]">
                Платформа на бета-тестировании
              </span>
            )}
          </div>

          {isDesktop ? (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.2, ease: 'easeOut' }}
              className="self-end mr-[-32px] hidden sm:block md:hidden"
            >
              <Image
                src={imageMobileSrc}
                alt="screenshot of the site"
                width={1344}
                height={400}
                sizes="(min-width: 768px) 0px, (min-width: 640px) 100vw, 0px"
                priority={!isDesktop}
              />
            </motion.div>
          ) : (
            <div className="self-end mr-[-32px] hidden sm:block md:hidden">
              <Image
                src={imageMobileSrc}
                alt="screenshot of the site"
                width={1344}
                height={400}
                sizes="(min-width: 768px) 0px, (min-width: 640px) 100vw, 0px"
                priority={!isDesktop}
              />
            </div>
          )}

          {isDesktop ? (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.2, ease: 'easeOut' }}
              className="hidden md:flex h-full justify-end items-end"
            >
              <Image
                src={imageSrc}
                alt="screenshot of the site"
                width={1344}
                height={756}
                sizes="(max-width: 767px) 0px, 100vw"
                priority={isDesktop}
              />
            </motion.div>
          ) : (
            <div className="hidden md:flex h-full justify-end items-end">
              <Image
                src={imageSrc}
                alt="screenshot of the site"
                width={1344}
                height={756}
                sizes="(max-width: 767px) 0px, 100vw"
                priority={isDesktop}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
