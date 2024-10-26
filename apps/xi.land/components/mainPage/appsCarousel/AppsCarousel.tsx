'use client';

import Image from 'next/image';

import { useMedia } from 'pkg.utils';
import { InfiniteSlider } from './InfiniteSlider';

const sliderImages = [
  '/assets/mainPage/apps/1.webp',
  '/assets/mainPage/apps/2.webp',
  '/assets/mainPage/apps/3.webp',
  '/assets/mainPage/apps/4.webp',
  '/assets/mainPage/apps/5.webp',
  '/assets/mainPage/apps/6.webp',
  '/assets/mainPage/apps/7.webp',
  '/assets/mainPage/apps/8.webp',
  '/assets/mainPage/apps/9.webp',
];

export const AppsCarousel = () => {
  const isDesktop = useMedia('(min-width: 768px)', true);

  return (
    <section className="py-8 xs:py-16 gap-8 text-xl-base lg:flex-row flex flex-col xl:flex-row items-center justify-center overflow-x-hidden">
      <span className="leading-6 lg:text-3xl 2xl:text-[40px] 2xl:leading-[40px] -tracking-[.01em] font-medium px-4 text-gray-100">
        Используйте одно приложение вместо
      </span>
      {isDesktop ? (
        <div className="flex gap-4">
          <AppsItems />
        </div>
      ) : (
        <InfiniteSlider className="relative w-full">
          <AppsItems />
        </InfiniteSlider>
      )}
    </section>
  );
};

const AppsItems = () =>
  sliderImages.map((image) => (
    <Image
      key={image}
      src={image}
      width={64}
      height={64}
      alt="apps icon"
      className="rounded-full border border-gray-30"
    />
  ));
