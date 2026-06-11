'use client';

import { useSyncExternalStore } from 'react';
import Image from 'next/image';
import { Link } from '@xipkg/link';
import { Button } from '@xipkg/button';
import {
  Calendar,
  BookOpened,
  Group,
  Payments,
  Conference,
  WhiteBoard,
  ArrowRight,
} from '@xipkg/icons';
import { shouldHideFooterPromo } from './shouldHideFooterPromo';

interface FooterPromoSectionProps {
  showPromoSection?: boolean;
  backgroundImageUrl?: string;
  mobileBackgroundImageUrl?: string;
  footerGradientClass: string;
}

const subscribe = () => () => {};

const useFooterPromoVisibility = ({
  showPromoSection,
  backgroundImageUrl,
  mobileBackgroundImageUrl,
}: Pick<
  FooterPromoSectionProps,
  'showPromoSection' | 'backgroundImageUrl' | 'mobileBackgroundImageUrl'
>) => {
  const hasBackgroundImages = Boolean(backgroundImageUrl || mobileBackgroundImageUrl);

  return useSyncExternalStore(
    subscribe,
    () => {
      if (showPromoSection !== undefined) {
        return showPromoSection;
      }

      return !shouldHideFooterPromo(window.location.hostname);
    },
    () => {
      if (showPromoSection !== undefined) {
        return showPromoSection;
      }

      return hasBackgroundImages;
    },
  );
};

export const FooterPromoSection = ({
  showPromoSection,
  backgroundImageUrl,
  mobileBackgroundImageUrl,
  footerGradientClass,
}: FooterPromoSectionProps) => {
  const isVisible = useFooterPromoVisibility({
    showPromoSection,
    backgroundImageUrl,
    mobileBackgroundImageUrl,
  });

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative flex h-155 flex-col items-center justify-between gap-8 p-6 md:p-4 xl:h-auto xl:px-32 xl:py-16 2xl:px-40">
      <div className="absolute inset-0 p-6 md:p-0">
        <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-t-3xl md:rounded-b-none xl:rounded-t-[64px]">
          <div className={`absolute inset-0 z-9 ${footerGradientClass}`} />

          {mobileBackgroundImageUrl && (
            <Image
              src={mobileBackgroundImageUrl}
              alt="фон футера мобильный"
              fill
              className="block object-cover md:hidden"
            />
          )}
          {backgroundImageUrl && (
            <Image
              src={backgroundImageUrl}
              alt="фон футера десктопный"
              fill
              className="hidden bg-[radial-gradient(circle,rgba(21,22,36,0)_0%,rgba(21,22,36,1)_100%)] object-cover md:block"
            />
          )}
        </div>
      </div>
      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-between gap-8 p-6 sm:justify-center md:items-baseline md:justify-baseline xl:py-24 2xl:py-32">
        <div className="flex flex-col gap-4 text-center md:w-132.5 md:text-left xl:gap-5">
          <p className="text-gray-0 text-xl-base md:text-h5 xl:text-h3 font-semibold">
            Экономьте до 1 часа в день вместе с sovlium
          </p>
          <span className="text-m-base leading-[1.3] text-gray-50 md:text-[18px]">
            {`Быстро переключайтесь между инструментами\u00A0в единой рабочей среде`}
          </span>
          <div className="flex justify-center gap-2 md:justify-start xl:mt-10 xl:gap-5">
            <div className="bg-cyan-20 rounded-lg p-2 xl:p-2 2xl:rounded-xl 2xl:p-3">
              <Calendar className="fill-cyan-100 xl:size-8 2xl:size-9" />
            </div>
            <div className="bg-pink-20 rounded-lg p-2 xl:p-2 2xl:rounded-xl 2xl:p-3">
              <BookOpened className="fill-pink-100 xl:size-8 2xl:size-9" />
            </div>
            <div className="bg-violet-20 rounded-lg p-2 xl:p-2 2xl:rounded-xl 2xl:p-3">
              <Group className="fill-violet-100 xl:size-8 2xl:size-9" />
            </div>
            <div className="bg-yellow-20 rounded-lg p-2 xl:p-2 2xl:rounded-xl 2xl:p-3">
              <Payments className="fill-yellow-100 xl:size-8 2xl:size-9" />
            </div>
            <div className="bg-green-0 rounded-lg p-2 xl:p-2 2xl:rounded-xl 2xl:p-3">
              <Conference className="fill-green-100 xl:size-8 2xl:size-9" />
            </div>
            <div className="bg-red-0 rounded-lg p-2 xl:p-2 2xl:rounded-xl 2xl:p-3">
              <WhiteBoard className="fill-red-100 xl:size-8 2xl:size-9" />
            </div>
          </div>
        </div>
        <div className="sm:mt-5 xl:mt-24 2xl:mt-40">
          <Link className="w-full md:w-auto" href="https://app.sovlium.ru/signup">
            <Button
              className="h-12 w-full rounded-2xl pr-3 pl-6 text-[16px] leading-6 md:w-auto"
              size="l"
            >
              Попробовать бесплатно
              <ArrowRight className="fill-brand-0 ml-3 h-6 w-6 md:ml-4 md:h-8 md:w-8" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
