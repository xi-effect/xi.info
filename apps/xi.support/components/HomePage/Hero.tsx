'use client';

import Image from 'next/image';

export const Hero = () => (
  <section className="relative overflow-hidden flex items-center justify-center py-8 px-4 sm:px-8 lg:px-40 w-full sm:h-[600px] sm:bg-brand-20">
    <Image
      src="/assets/home-page/home-page-bg.webp"
      alt="Задний фон"
      fill
      className="object-cover hidden sm:flex"
    />
    <div className="w-full max-w-[1920px] flex flex-row justify-center items-center gap-4">
      <div className="w-full z-10">
        <div className="text-[24px] leading-[31.2px] sm:text-[48px] md:text-[64px] sm:leading-[62.4px] md:leading-[83.2px] text-gray-100 sm:text-gray-0 font-medium">
          <h2>Привет 👋</h2>
          <h2>Это база знаний xi.effect</h2>
        </div>
        <p className="text-[14px] leading-[18.2px] mb-4 sm:text-[20px] sm:leading-[32px] md:text-2xl font-normal sm:mb-8 text-gray-90 sm:text-gray-10">
          Рассказываем как пользоваться приложением
          <br />и отвечаем на важные вопросы
        </p>
      </div>
    </div>
  </section>
);
