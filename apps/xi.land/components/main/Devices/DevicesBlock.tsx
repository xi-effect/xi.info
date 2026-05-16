'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from '@xipkg/icons';
import { Button } from '@xipkg/button';
import { SwitcherAnimate } from '@xipkg/switcher-animate';
import { cn } from '@xipkg/utils';

import {
  DEVICE_SWITCHER_TABS,
  DEVICE_VARIANT_BY_ID,
  DEVICES_CTA_HREF,
  DEVICES_CTA_LABEL,
  DEVICES_HEADING_DESKTOP,
  DEVICES_HEADING_MOBILE,
  DEVICES_SUB_DESKTOP,
  DEVICES_SUB_MOBILE,
  DEVICES_SWITCHER_LAYOUT_ID,
  type DeviceTabId,
} from './devices_content';

const DeviceVisual = ({ activeTab, className }: { activeTab: DeviceTabId; className?: string }) => {
  const variant = DEVICE_VARIANT_BY_ID[activeTab];

  return (
    <figure
      className={cn(
        'relative isolate min-h-72 w-full overflow-hidden rounded-3xl lg:min-h-0 lg:h-full',
        className,
      )}
    >
      <Image
        key={variant.imageSrc}
        src={variant.imageSrc}
        alt={variant.imageAlt}
        fill
        sizes="(max-width: 1024px) min(100vw - 3rem, 720px), 50vw"
        className={cn(variant.imageObjectClassName)}
      />
    </figure>
  );
};

export const DevicesBlock = () => {
  const [activeTab, setActiveTab] = useState<DeviceTabId>('computer');
  const variant = DEVICE_VARIANT_BY_ID[activeTab];

  return (
    <section
      data-theme="white"
      className="w-full bg-gray-0 px-4 py-10 md:px-6 md:py-14 dark:bg-gray-100"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 overflow-hidden rounded-[28px] bg-violet-50 p-6 dark:bg-violet-950/25 md:rounded-[48px] md:p-14">
        <header className="flex flex-col gap-6">
          <h2 className="text-3xl font-medium leading-9 tracking-tight text-gray-900 lg:hidden dark:text-gray-0">
            {DEVICES_HEADING_MOBILE}
          </h2>
          <h2 className="hidden text-4xl font-medium leading-10 tracking-tight text-gray-900 lg:block dark:text-gray-0">
            {DEVICES_HEADING_DESKTOP}
          </h2>
          <p className="text-lg font-medium leading-6 text-gray-900/80 lg:hidden dark:text-gray-0/80">
            {DEVICES_SUB_MOBILE}
          </p>
          <p className="hidden text-lg font-medium leading-6 text-gray-900/80 lg:block dark:text-gray-0/80">
            {DEVICES_SUB_DESKTOP}
          </p>
        </header>

        <div className="grid gap-8 lg:h-96 lg:grid-cols-[minmax(0,1fr)_560px] lg:grid-rows-[auto_1fr_auto] lg:items-stretch lg:gap-x-12 lg:gap-y-8">
          <SwitcherAnimate
            layoutId={DEVICES_SWITCHER_LAYOUT_ID}
            tabs={DEVICE_SWITCHER_TABS}
            activeTab={activeTab}
            onChange={(tabId) => setActiveTab(tabId as DeviceTabId)}
            className={cn(
              'lg:col-start-2 lg:row-start-1',
              'w-full rounded-2xl bg-black/5 p-1 dark:bg-black/15 sm:p-1.5',
              'h-auto min-h-12 gap-1 sm:min-h-14',
            )}
            tabClassName={cn(
              'min-h-11 flex-1 rounded-2xl px-4 py-3 text-base font-medium leading-6',
              'sm:min-h-[52px] sm:px-5 sm:text-lg sm:leading-7',
              'text-gray-900/90 hover:text-gray-900 dark:text-gray-0/90 dark:hover:text-gray-0',
              'data-[state=active]:font-semibold data-[state=active]:text-white dark:data-[state=active]:text-white',
            )}
            indicatorClassName="rounded-2xl border-0 bg-indigo-700 shadow-sm dark:bg-indigo-600"
          />

          <DeviceVisual
            activeTab={activeTab}
            className="lg:col-start-1 lg:row-start-1 lg:row-span-3"
          />

          <div
            id="devices-panel"
            role="tabpanel"
            aria-labelledby={`${DEVICES_SWITCHER_LAYOUT_ID}-tab-${activeTab}`}
            className="flex flex-col gap-4 lg:col-start-2 lg:row-start-2 lg:min-h-0"
          >
            <h3 className="text-pretty text-2xl font-medium leading-8 text-neutral-800 lg:hidden dark:text-neutral-100">
              {variant.headingLinesMobile.map((line, i) => (
                <span key={`m-${i}-${line}`} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <h3 className="hidden text-pretty text-2xl font-medium leading-8 text-neutral-800 lg:block dark:text-neutral-100">
              {variant.headingLines.map((line, i) => (
                <span key={`d-${i}-${line}`} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <p className="text-pretty text-base font-normal leading-5 text-neutral-800/60 lg:hidden dark:text-neutral-200/70">
              {variant.descriptionMobile}
            </p>
            <p className="hidden text-pretty text-base font-normal leading-5 text-neutral-800/60 lg:block dark:text-neutral-200/70">
              {variant.description}
            </p>
          </div>

          <div className="lg:col-start-2 lg:row-start-3 lg:self-start">
            <Button
              asChild
              variant="primary"
              className="w-full rounded-2xl border-0 bg-gray-900 px-7 py-3.5 text-lg font-medium leading-6 text-slate-100 hover:bg-gray-800 dark:bg-gray-0 dark:text-gray-100 dark:hover:bg-gray-10 sm:w-auto"
            >
              <Link
                href={DEVICES_CTA_HREF}
                className="inline-flex items-center justify-center gap-3"
              >
                {DEVICES_CTA_LABEL}
                <ArrowRight
                  className="size-5 shrink-0 fill-slate-100 dark:fill-gray-100"
                  aria-hidden
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
