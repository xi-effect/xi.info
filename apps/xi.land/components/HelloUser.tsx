'use client';

import NextLink from 'next/link';
import { Button } from '@xipkg/button';
import Image from 'next/image';

const Images = () => {
  return (
    <div
      className={`max-lg:hidden flex flex-col justify-start items-start absolute right-[160px] top-[-226px] xl:top-[-558px] h-[1536px] w-[256px] xl:w-[512px] z-1`}
    >
      <div className={`w-[256px] h-[256px] xl:w-[512px] xl:h-[512px] rounded-[50%] bg-gray-10`} />
      <Image
        alt="student"
        src="/assets/student-main.svg"
        width={0}
        height={0}
        className="w-[256px] h-[256px] xl:w-[512px] xl:h-[512px] rounded-[50%]"
      />
      <div className={`w-[256px] h-[256px] xl:w-[512px] xl:h-[512px] rounded-[50%] bg-gray-10`} />
    </div>
  );
};

const HelloUser = () => {
  return (
    <div className="flex flex-col w-full justify-start items-start p-4 sm:p-8 xl:py-16 xl:px-[160px] relative">
      {<Images />}
      <h1 className="mt-0 text-[32px] sm:text-[40px] 2xl:text-[64px] text-gray-100 leading-[130%] font-bold tracking-[-0.96px]">
        {`Гибкий\nобразовательный`}
        <br />
        {`инструмент`}
        <br />
        <span className=" text-[32px] sm:text-[40px] 2xl:text-[64px] text-gray-50 leading-[130%] tracking-[-0.96px] font-medium">
          {`для репетиторов\nи малого`}
          <br />
          {`бизнеса`}
        </span>
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 w-full mt-16">
        <Button size="l">
          <NextLink href="mailto:xieffect@yandex.ru">Записаться на демонстрацию</NextLink>
        </Button>
        <Button size="l" variant="secondary">
          <NextLink href="https://app.xieffect.ru/signup">Стать пользователем</NextLink>
        </Button>
      </div>
    </div>
  );
};

export default HelloUser;
