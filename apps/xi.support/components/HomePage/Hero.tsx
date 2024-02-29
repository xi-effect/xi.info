'use client';

import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden flex items-center py-8 px-4 sm:px-8 lg:px-40 w-full sm:h-[600px]">
      <Image
        src={'/assets/home-page/home-page-bg.webp'}
        alt="Задний фон"
        fill
        className="object-cover hidden sm:flex"
      />
      <div className="w-full z-10">
        <div className="text-[24px] leading-[31.2px] sm:text-[48px] md:text-[64px] sm:leading-[62.4px] md:leading-[83.2px] text-gray-100 sm:text-gray-0 font-medium">
          <h2>Привет 👋</h2>
          <h2>Это база знаний xi.effect</h2>
        </div>
        {/* <p className="text-[14px] leading-[18.2px] mb-4 sm:text-[20px] sm:leading-[32px] md:text-2xl font-normal sm:mb-8 text-gray-90 sm:text-gray-10">
            Воспользуйтесь поиском или перейдите в нужный раздел
          </p> */}
        <p className="text-[14px] leading-[18.2px] mb-4 sm:text-[20px] sm:leading-[32px] md:text-2xl font-normal sm:mb-8 text-gray-90 sm:text-gray-10">
          Перейдите в нужный раздел
        </p>
        {/* Пока функционал поиска не реализован */}
        {/* <form className="h-12 relative w-full max-w-[800px] sm:h-16">
            <Button className="absolute z-10 top-[50%] translate-y-[-50%] left-3 sm:left-4 bg-[url('/iconssite/search.svg')] bg-no-repeat bg-center bg-contain size-6 sm:size-8 bg-transparent" />
            <Input
              placeholder="Поиск по базе знаний"
              className="w-full rounded-[13.71px] border-2 sm:border-[2.67px] sm:pl-[58.67px] p-3 pl-[44px] sm:py-4 border-gray-30 h-full text-[16px] sm:text-[21.33px] font-normal leading-[22px] sm:leading-[29.33px]"
            />
          </form> */}
      </div>
    </section>
  );
};
