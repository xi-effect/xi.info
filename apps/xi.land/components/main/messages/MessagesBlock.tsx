'use client';

import Image from 'next/image';
import type { ComponentType, CSSProperties, ReactNode } from 'react';
import {
  Account,
  Calendar,
  Conference,
  Link as LinkIcon,
  Materials,
  Notification,
  Payments,
  Users,
  WhiteBoard,
} from '@xipkg/icons';
import { cn } from '@xipkg/utils';
import { motion, useReducedMotion } from 'motion/react';

import type { HeroFeatureIconIdT, HeroFeatureT } from '../Hero/hero_content';
import { HERO_CONTENT } from '../Hero/hero_content';
import {
  MESSAGES_ASSETS,
  MESSAGES_FLOATING_FEATURES,
  MESSAGES_ROWS,
  type MessagesFloatingFeatureIdT,
} from './messages_content';

const FEATURE_ICONS: Record<HeroFeatureIconIdT, ComponentType<{ className?: string }>> = {
  conference: Conference,
  whiteboard: WhiteBoard,
  calendar: Calendar,
  materials: Materials,
  payments: Payments,
  notifications: Notification,
  rooms: Users,
};

const heroFeature = (id: MessagesFloatingFeatureIdT): HeroFeatureT => {
  const found = HERO_CONTENT.features.find((f) => f.id === id);
  if (!found) {
    throw new Error(`Hero feature "${id}" not found`);
  }
  return found;
};

const FEATURE_BY_ID: Record<MessagesFloatingFeatureIdT, HeroFeatureT> = {
  calendar: heroFeature('calendar'),
  materials: heroFeature('materials'),
  conference: heroFeature('conference'),
  payments: heroFeature('payments'),
  notifications: heroFeature('notifications'),
  rooms: heroFeature('rooms'),
};

/** Фиксированная высота строки по макету; анимации могут выходить за пределы через overflow-visible */
const MESSAGES_ROW_HEIGHT_CLASS = 'h-[340px]';

type FloatingServiceIconPropsT = {
  featureId: MessagesFloatingFeatureIdT;
  className?: string;
  style?: CSSProperties;
  motionPhase: number;
};

const FloatingServiceIcon = ({
  featureId,
  className,
  style,
  motionPhase,
}: FloatingServiceIconPropsT) => {
  const feature = FEATURE_BY_ID[featureId];
  const Icon = FEATURE_ICONS[featureId];
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn('pointer-events-none absolute z-[2]', className)}
      aria-hidden
      style={{
        ...style,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <motion.div
        className={cn(
          'inline-flex items-center justify-center rounded-xl p-3',
          feature.pillClassName,
        )}
        animate={reduceMotion ? undefined : { y: [0, -9, 0], x: [0, 5, 0], rotate: [0, 1.2, 0] }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: motionPhase,
        }}
      >
        <Icon className={cn('size-10 shrink-0 fill-current', feature.labelClassName)} aria-hidden />
      </motion.div>
    </div>
  );
};

const BrandBadge = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div
    className={cn(
      'flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-brand-80 text-brand-0',
      className,
    )}
  >
    {children}
  </div>
);

const TextColumn = ({
  row,
  icon,
  iconBadgeClassName,
}: {
  row: (typeof MESSAGES_ROWS)[number];
  icon: ReactNode;
  /** Например `relative p-0`, когда иконка должна заполнять плашку целиком */
  iconBadgeClassName?: string;
}) => (
  <div className="flex w-full min-w-0 max-w-[610px] flex-col gap-10 lg:h-full lg:max-h-[340px] lg:justify-center lg:gap-5">
    <BrandBadge className={iconBadgeClassName}>{icon}</BrandBadge>
    <div className="flex max-w-[500px] flex-col gap-4">
      <h3 className="font-nevermind text-3xl font-medium leading-10 text-neutral-800 dark:text-neutral-100">
        {row.titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h3>
      <p className="font-manrope text-lg font-normal leading-6 text-neutral-800/60 dark:text-neutral-200/70">
        {row.subtitle}
      </p>
    </div>
  </div>
);

const ShieldVisual = ({ imageAlt }: { imageAlt: string }) => (
  <div
    className={cn(
      'relative isolate w-full overflow-visible rounded-3xl',
      MESSAGES_ROW_HEIGHT_CLASS,
    )}
  >
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl bg-gray-0 dark:bg-gray-90"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center overflow-visible"
      aria-hidden
    >
      {[
        { px: 420, delay: 0 },
        { px: 300, delay: 0.55 },
        { px: 220, delay: 1.1 },
      ].map(({ px, delay }) => (
        <div
          key={px}
          className="animate-messages-shield-ring absolute rounded-full border-2 border-emerald-500/55 bg-emerald-400/14 shadow-[0_0_0_1px_rgba(16,185,129,0.12)] dark:border-emerald-400/50 dark:bg-emerald-400/10 dark:shadow-[0_0_0_1px_rgba(52,211,153,0.2)]"
          style={{
            width: `min(${px}px, 85vw)`,
            height: `min(${px}px, 85vw)`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </div>
    <div className="relative z-[2] flex h-full w-full items-center justify-center p-6">
      <Image
        src={MESSAGES_ASSETS.shield}
        alt={imageAlt}
        width={150}
        height={150}
        className="size-[150px] shrink-0 object-contain select-none"
        draggable={false}
      />
    </div>
  </div>
);

const ToolsHubVisual = ({ centerAlt }: { centerAlt: string }) => {
  return (
    <div
      className={cn(
        'relative isolate w-full overflow-visible rounded-3xl',
        MESSAGES_ROW_HEIGHT_CLASS,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl bg-gray-0 dark:bg-gray-90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12)_0%,transparent_55%)] dark:bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.14)_0%,transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto flex h-full w-full max-w-[560px] items-center justify-center overflow-visible px-4">
        <div className="relative aspect-square w-[min(100%,420px)]">
          {MESSAGES_FLOATING_FEATURES.map((slot) => (
            <FloatingServiceIcon
              key={slot.id}
              featureId={slot.id}
              motionPhase={slot.motionPhase}
              style={{
                left: `${slot.leftPct}%`,
                top: `${slot.topPct}%`,
              }}
            />
          ))}
          <div className="absolute left-1/2 top-1/2 z-[3] -translate-x-1/2 -translate-y-1/2">
            <Image
              src={MESSAGES_ASSETS.platformColumn}
              alt={centerAlt}
              width={64}
              height={64}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardVisual = ({ imageAlt }: { imageAlt: string }) => (
  <div
    className={cn(
      'relative w-full overflow-hidden rounded-3xl bg-violet-50 dark:bg-violet-950/30',
      MESSAGES_ROW_HEIGHT_CLASS,
    )}
  >
    <Image
      src={MESSAGES_ASSETS.dashboard}
      alt={imageAlt}
      fill
      sizes="(max-width: 1024px) min(100vw - 3rem, 610px), 610px"
      className="object-contain object-right select-none"
      draggable={false}
    />
  </div>
);

export const MessagesBlock = () => {
  const [row1, row2, row3] = MESSAGES_ROWS;

  return (
    <section
      data-theme="white"
      className="font-nevermind w-full overflow-visible bg-gray-0 px-4 py-10 md:px-6 md:py-14 dark:bg-gray-100"
      aria-label="Преимущества платформы Sovlium"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-16 overflow-visible lg:gap-20">
        <article className="grid grid-cols-1 gap-8 overflow-visible lg:h-[340px] lg:grid-cols-2 lg:items-center lg:gap-x-24 lg:gap-y-0">
          <div className="order-1 overflow-visible lg:col-start-2 lg:row-start-1">
            <figure className="m-0 overflow-visible">
              <ShieldVisual imageAlt={row1.visualAlt} />
            </figure>
          </div>
          <div className="order-2 min-h-0 lg:col-start-1 lg:row-start-1">
            <TextColumn
              row={row1}
              icon={<LinkIcon className="size-12 shrink-0 fill-brand-0" aria-hidden />}
            />
          </div>
        </article>

        <article className="grid grid-cols-1 gap-8 overflow-visible lg:h-[340px] lg:grid-cols-2 lg:items-center lg:gap-x-24 lg:gap-y-0">
          <div className="order-1 overflow-visible lg:col-start-1 lg:row-start-1">
            <figure className="m-0 overflow-visible">
              <ToolsHubVisual centerAlt={row2.visualAlt} />
            </figure>
          </div>
          <div className="order-2 min-h-0 lg:col-start-2 lg:row-start-1">
            <TextColumn
              row={row2}
              iconBadgeClassName="relative p-0"
              icon={
                <Image
                  src={MESSAGES_ASSETS.platformColumn}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover object-center"
                  draggable={false}
                />
              }
            />
          </div>
        </article>

        <article className="grid grid-cols-1 gap-8 overflow-visible lg:h-[340px] lg:grid-cols-2 lg:items-center lg:gap-x-24 lg:gap-y-0">
          <div className="order-1 overflow-visible lg:col-start-2 lg:row-start-1">
            <figure className="m-0 overflow-visible">
              <DashboardVisual imageAlt={row3.visualAlt} />
            </figure>
          </div>
          <div className="order-2 min-h-0 lg:col-start-1 lg:row-start-1">
            <TextColumn
              row={row3}
              icon={<Account className="size-12 shrink-0 fill-brand-0" aria-hidden />}
            />
          </div>
        </article>
      </div>
    </section>
  );
};
