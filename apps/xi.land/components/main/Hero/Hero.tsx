'use client';

import { createContext, useContext, useRef, type ComponentType, type PointerEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@xipkg/button';
import {
  ArrowRight,
  Calendar,
  Materials,
  Notification,
  Payments,
  Users,
  Conference,
  WhiteBoard,
} from '@xipkg/icons';
import { cn } from '@xipkg/utils';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';

import type { HeroFeatureIconIdT, HeroFeatureT, HeroParallaxLayerT } from './hero_content';
import { HERO_CONTENT, HERO_PARALLAX_INTENSITY, HERO_PARALLAX_LAYERS } from './hero_content';

const FEATURE_ICONS: Record<HeroFeatureIconIdT, ComponentType<{ className?: string }>> = {
  conference: Conference,
  whiteboard: WhiteBoard,
  calendar: Calendar,
  materials: Materials,
  payments: Payments,
  notifications: Notification,
  rooms: Users,
};

const buttonClassName =
  'inline-flex h-auto min-h-12 w-full shrink-0 rounded-2xl border-0 px-7 py-3.5 text-lg font-semibold leading-6 hover:border-0 sm:w-auto';

type HeroParallaxContextValueT = {
  moveX: MotionValue<number>;
  moveY: MotionValue<number>;
};

const HeroParallaxContext = createContext<HeroParallaxContextValueT | null>(null);

const useHeroParallaxMotion = () => {
  const ctx = useContext(HeroParallaxContext);
  if (!ctx) {
    throw new Error('useHeroParallaxMotion must be used within Hero parallax provider');
  }
  return ctx;
};

type HeroParallaxLayerPropsT = {
  layer: HeroParallaxLayerT;
};

const HeroParallaxLayer = ({ layer }: HeroParallaxLayerPropsT) => {
  const { moveX, moveY } = useHeroParallaxMotion();
  const depthPx = layer.depth * (layer.depthMultiplier ?? 1) * HERO_PARALLAX_INTENSITY;
  const tx = useTransform(moveX, (v) => v * depthPx);
  const ty = useTransform(moveY, (v) => v * depthPx);

  return (
    <motion.div
      className={cn('absolute block max-w-none will-change-transform', layer.className)}
      style={{ x: tx, y: ty }}
    >
      <div className={cn('block w-full', layer.innerClassName)}>
        <Image
          src={layer.src}
          alt={layer.alt}
          width={layer.width}
          height={layer.height}
          sizes="(max-width: 768px) 42vw, 280px"
          className="h-auto w-full border-0 object-contain select-none"
          draggable={false}
        />
      </div>
    </motion.div>
  );
};

type HeroFeatureBadgePropsT = {
  feature: HeroFeatureT;
};

const HeroFeatureBadge = ({ feature }: HeroFeatureBadgePropsT) => {
  const Icon = FEATURE_ICONS[feature.id];

  return (
    <div
      className={cn(
        'inline-flex max-w-full items-center gap-3 rounded-[9.6px] px-3 py-2',
        feature.pillClassName,
      )}
    >
      <span className="flex size-7 shrink-0 items-center justify-center">
        <Icon className={cn('size-7 shrink-0 fill-current', feature.labelClassName)} />
      </span>
      <span
        className={cn(
          'text-m-base font-medium leading-5 sm:text-lg sm:leading-6',
          feature.labelClassName,
        )}
      >
        {feature.label}
      </span>
    </div>
  );
};

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const spring = shouldReduceMotion
    ? { stiffness: 500, damping: 48, mass: 0.35 }
    : { stiffness: 168, damping: 19, mass: 0.42 };

  const moveX = useSpring(rawX, spring);
  const moveY = useSpring(rawY, spring);

  const updatePointer = (e: PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion) {
      return;
    }
    const el = sectionRef.current;
    if (!el) {
      return;
    }
    const r = el.getBoundingClientRect();
    const w = r.width || 1;
    const h = r.height || 1;
    rawX.set((e.clientX - r.left) / w - 0.5);
    rawY.set((e.clientY - r.top) / h - 0.5);
  };

  const resetPointer = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <HeroParallaxContext.Provider value={{ moveX, moveY }}>
      <section
        ref={sectionRef}
        data-theme="white"
        onPointerMove={updatePointer}
        onPointerLeave={resetPointer}
        className="w-full overflow-x-clip bg-gray-0 pt-28 pb-14 md:pt-32 lg:pb-24 xl:pt-40"
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-stretch gap-10 px-4 md:gap-14 md:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="flex min-w-0 flex-1 flex-col gap-10 lg:max-w-[650px] lg:justify-between lg:self-stretch xl:gap-14">
            <div className="flex flex-col gap-10 lg:gap-14">
              <div className="flex flex-col gap-6">
                <h1 className="font-nevermind text-[28px] font-medium leading-8 tracking-[-0.01em] text-gray-100/90 sm:text-4xl sm:leading-10 lg:text-4xl lg:leading-10">
                  {HERO_CONTENT.title}
                </h1>
                <p className="max-w-xl text-m-base font-medium leading-5 text-slate-800/60 sm:text-lg sm:leading-6">
                  {HERO_CONTENT.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                {HERO_CONTENT.features.map((feature) => (
                  <HeroFeatureBadge key={feature.id} feature={feature} />
                ))}
              </div>
            </div>

            <Button asChild variant="primary" className={buttonClassName}>
              <Link
                href={HERO_CONTENT.primaryButtonHref}
                className="flex items-center justify-center gap-3"
              >
                {HERO_CONTENT.primaryButtonLabel}
                <ArrowRight className="size-5 shrink-0 fill-gray-0" />
              </Link>
            </Button>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[600px] shrink-0 overflow-visible md:mx-auto md:block lg:mx-0">
            <div className="relative aspect-600/620 w-full overflow-visible">
              <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
                <Image
                  src={HERO_CONTENT.heroImageSrc}
                  alt={HERO_CONTENT.heroImageAlt}
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 600px"
                  className="object-cover object-center"
                />
              </div>

              {HERO_PARALLAX_LAYERS.map((layer) => (
                <HeroParallaxLayer key={layer.src} layer={layer} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </HeroParallaxContext.Provider>
  );
};
