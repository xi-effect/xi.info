'use client';

import { Button } from '@xipkg/button';
import partList from './partList.json';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex items-center bg-[url('/assets/home-page/home-page-bg.jpeg')] bg-no-repeat bg-[0%_37%] bg-[length:135%] px-40 w-full h-[1000px]">
      <div className="text-gray-0">
        <div className="text-[64px] leading-[83.2px] text-gray-0 font-medium">
          <h2>Привет 👋</h2>
          <h2>Это база знаний xi.effect</h2>
        </div>
        <p className="text-2xl font-normal mb-8 text-gray-10">
          Воспользуйтесь поиском или перейдите в нужный раздел
        </p>
        <form className="w-[800px] h-16 flex bg-gray-0 rounded-[13.71px] items-center px-4 border-[2.67px] border-gray-30">
          <button className="bg-[url('/iconssite/search.svg')] bg-no-repeat bg-center bg-contain size-8 bg-transparent" />
          <input
            placeholder="Поиск по базе знаний"
            className="w-full h-full border-none text-[21.33px] font-normal leading-[29.33px] ml-[10.67px] py-4 focus:outline-none"
          />
        </form>
      </div>
    </section>
  );
};

const Parts = () => {
  return (
    <section className="px-40 py-16">
      <ul className="grid grid-rows-3 gap-x-8 gap-y-12 grid-flow-col grid-cols-[repeat(auto-fill,_minmax(512px,_1fr))]">
        {partList.map((item, index) => (
          <li className="w-full flex" key={index}>
            <Image
              src={`/assets/home-page/${item.icon}`}
              alt={item.icon}
              width={64}
              height={64}
              className="mb-auto"
            />
            <div className="ml-8">
              <h3 className=" text-[32px] leading-[41.6px] text-brand-80 font-medium">
                {item.title}
              </h3>
              <ul className="font-normal text-gray-90 text-[20px] leading-[26px]">
                {item.links.map((link, index) => (
                  <li className="mt-2" key={index}>
                    {link.linkTitle}
                  </li>
                ))}
                <div className="mt-4 flex items-center ">
                  <p className="">Показать все</p>
                  <span className="bg-[url('/iconssite/arrow-right.svg')] bg-no-repeat bg-center bg-contain size-5 inline-block mt-[4px]" />
                </div>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="flex flex-col justify-center items-center py-32">
      <h3 className=" font-medium text-[64px] leading-[83.2px] text-gray-100">
        Не нашлось ответа?
      </h3>
      <Button className="h-[84px] font-medium text-[30px] leading-[42px] rounded-[18px] pl-9 pr-[18px] mt-8">
        Написать в телеграм
        <span className="bg-[url('/iconssite/telegram-no-circle.svg')] bg-no-repeat bg-center bg-contain size-12 inline-block ml-6" />
      </Button>
    </section>
  );
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Parts />
      <CTA />
    </>
  );
}
