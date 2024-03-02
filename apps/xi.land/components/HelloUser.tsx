'use client';

import NextLink from 'next/link';
import { Button } from '@xipkg/button';
import Image from 'next/image';


const HelloUser = () => {
  return (
    <div className="h-[920px] bg-brand-80 flex flex-col w-full justify-center items-center p-4 sm:p-8 xl:py-16 xl:px-[160px]">
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
