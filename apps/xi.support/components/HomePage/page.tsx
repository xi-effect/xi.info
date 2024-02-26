'use client';

import { Button } from '@xipkg/button';
import { Input } from '@xipkg/input';
import { TelegramFilled, ChevronRight } from '@xipkg/icons';
import partList from './partList.json';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative overflow-hidden flex items-center py-8 px-4 sm:px-8 lg:px-40 w-full sm:h-[700px] lg:h-[1000px]">
      <Image
        src={'/assets/home-page/home-page-bg.webp'}
        alt="Задний фон"
        width={0}
        height={0}
        className="absolute size-0 sm:min-w-[150%] lg:min-w-[135%] sm:h-fit left-0 top-[-3%] 2xl:top-[-23%] "
      />
      <div className="w-full z-10">
        <div className="text-[24px] leading-[31.2px] sm:text-[48px] md:text-[64px] sm:leading-[62.4px] md:leading-[83.2px] text-gray-100 sm:text-gray-0 font-medium">
          <h2>Привет 👋</h2>
          <h2>Это база знаний xi.effect</h2>
        </div>
        <p className="text-[14px] leading-[18.2px] mb-4 sm:text-[20px] sm:leading-[32px] md:text-2xl font-normal sm:mb-8 text-gray-90 sm:text-gray-10">
          Воспользуйтесь поиском или перейдите в нужный раздел
        </p>
        {/* Пока функционал поиска не реализован */}
        <form className="h-12 relative w-full max-w-[800px] sm:h-16">
          <Button className="absolute z-10 top-[50%] translate-y-[-50%] left-3 sm:left-4 bg-[url('/iconssite/search.svg')] bg-no-repeat bg-center bg-contain size-6 sm:size-8 bg-transparent" />
          <Input
            placeholder="Поиск по базе знаний"
            className="w-full rounded-[13.71px] border-2 sm:border-[2.67px] sm:pl-[58.67px] p-3 pl-[44px] sm:py-4 border-gray-30 h-full text-[16px] sm:text-[21.33px] font-normal leading-[22px] sm:leading-[29.33px]"
          />
        </form>
      </div>
    </section>
  );
};

const Parts = () => {
  return (
    <section className="p-4 xs:p-8 lg:px-40 md:py-16">
      <ul className="grid w-full gap-8 md:gap-y-12 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))]">
        {partList.map((item, index) => (
          <li className="w-full flex" key={index}>
            <Image
              src={`/assets/home-page/${item.icon}`}
              alt={item.icon}
              width={0}
              height={0}
              className="mb-auto size-12 sm:size-16"
            />
            <div className="ml-4 sm:ml-8">
              <h3 className="text-[24px] sm:text-[32px] leading-[31.2px] sm:leading-[41.6px] text-brand-80 font-medium">
                {item.title}
              </h3>
              <ul className="font-normal text-gray-90 text-[16px] sm:text-[20px] leading-[20.8px] sm:leading-[26px]">
                {item.links.map((link, index) => (
                  <li className="mt-2" key={index}>
                    {link.linkTitle}
                  </li>
                ))}
                <div className="mt-4 flex items-center gap-1">
                  <p>Показать все</p>
                  <ChevronRight className="!size-4 sm:!size-5 mt-[1px] sm:mt-[4px]" />
                </div>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16 px-8 sm:py-32">
      <h3 className="font-medium text-[24px] sm:text-[40px] xl:text-[64px] leading-[31.2px] sm:leading-[52px] xl:leading-[83.2px] text-gray-100">
        Не нашлось ответа?
      </h3>
      <Button className="h-8 sm:h-[56px] xl:h-[84px] font-medium text-sm sm:text-xl xl:text-[30px] xl:leading-[42px] rounded-md sm:rounded-xl xl:rounded-[18px] pl-3 sm:pl-6 xl:pl-9 pr-2 sm:pr-3 xl:pr-[18px] mt-4 sm:mt-8">
        Написать в телеграм
        <TelegramFilled className="fill-gray-0 !size-4 sm:!size-8 xl:!size-12 ml-[6px] sm:ml-4 xl:ml-6" />
      </Button>
    </section>
  );
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Parts />
      <CallToAction />
    </>
  );
}
