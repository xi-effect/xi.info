import Image from 'next/image';
import { InfiniteSlider } from './InfiniteSlider';

const sliderImages = [
  '1.webp',
  '2.webp',
  '3.webp',
  '4.webp',
  '5.webp',
  '6.webp',
  '7.webp',
  '8.webp',
  '9.webp',
];

export const AppsCarousel = () => (
  <section className="py-8 xs:py-16 gap-8 text-xl-base flex flex-col xl:flex-row items-center justify-center overflow-x-hidden">
    <span className="text-xl-base 2xl:text-h3 -tracking-[.01em] font-medium px-4 text-gray-100">
      Используйте одно приложение вместо
    </span>
    <div className="sm:flex gap-4 hidden">
      <AppsItems />
    </div>
    <InfiniteSlider className="relative w-full sm:hidden">
      <AppsItems />
    </InfiniteSlider>
  </section>
);

const AppsItems = () =>
  sliderImages.map((image) => (
    <Image
      key={image}
      src={`/assets/mainPage/apps/${image}`}
      width={64}
      height={64}
      alt="apps icon"
      className="rounded-full border border-gray-30"
    />
  ));
