'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@xipkg/button';
import { usePathname } from 'next/navigation';
import { config } from './config';
const cards = [
  {
    id: 1,
    title: 'видеозвонки',
    image: '/assets/main/Hero/1.png',
    badgeClass: 'bg-yellow-20 text-orange-80',
  },
  {
    id: 2,
    title: 'автоматические напоминания',
    image: '/assets/main/Hero/2.png',
    badgeClass: 'bg-violet-20 text-violet-100',
  },
  {
    id: 3,
    title: 'онлайн-доски',
    image: '/assets/main/Hero/3.png',
    badgeClass: 'bg-green-0 text-green-80',
  },
  {
    id: 4,
    title: 'расписание',
    image: '/assets/main/Hero/4.png',
    badgeClass: 'bg-pink-20 text-fuchsia-100',
  },
  {
    id: 5,
    title: 'контроль оплат',
    image: '/assets/main/Hero/5.png',
    badgeClass: 'bg-red-0 text-red-80',
  },
];

export const Hero = () => {
  const pathname = usePathname();
  const heroConfig = config[pathname] ?? config['/'];

  return (
    <section data-theme="white" className="w-full bg-gray-0 px-4 pb-14 pt-28 md:px-8 md:pb-20 md:pt-36">
      <div className="mx-auto flex w-full max-w-[2410px] flex-col items-center gap-8 md:gap-12">
        <div className="flex max-w-[1116px] flex-col items-center gap-4 md:gap-12">
          <h1 className="text-center text-[42px] font-medium leading-[105%] tracking-[-0.01em] text-[#1E1E2C] sm:text-[56px] lg:text-[80px]">
            {heroConfig.title}
          </h1>
          <p className="text-center text-base font-normal leading-[130%] text-[#5B5F6D] sm:text-xl lg:text-2xl">
            {heroConfig.description}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {cards.map((card) => (
            <article
              key={card.id}
              className="flex min-h-[320px] flex-col rounded-[32px] bg-[rgba(243,244,253,0.6)] p-[30px] md:min-h-[385px]"
            >
              <span
                className={`inline-flex w-fit items-center justify-center rounded-xl px-4 py-2 text-sm font-normal leading-[130%] md:text-base ${card.badgeClass}`}
              >
                {card.title}
              </span>
              <div className="mt-5 flex grow items-end">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={385}
                  height={385}
                  className="h-auto w-full rounded-3xl object-cover"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="flex w-full max-w-[609px] flex-col items-center gap-3 md:flex-row md:justify-center md:gap-6">
          <Button
            asChild
            variant="ghost"
            size="l"
            className="h-12 w-full rounded-xl border border-[#DADCE8] bg-transparent px-6 text-base font-medium leading-[22px] text-[#0F0F11] hover:bg-[#F3F4FD] md:w-[308px]"
          >
            <Link href="/about">{heroConfig.secondaryButton}</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="l"
            className="h-12 w-full rounded-xl bg-brand-80 px-6 text-base font-medium leading-[22px] text-white hover:bg-brand-100 md:w-[277px]"
          >
            <Link href="https://app.sovlium.ru/signup">{heroConfig.button}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
