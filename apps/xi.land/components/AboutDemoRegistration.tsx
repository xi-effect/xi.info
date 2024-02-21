import { Button } from '@xipkg/button';
import React from 'react';

export const AboutDemoRegistration = () => {
  return (
    <div className="flex h-full gap-[145px] bg-gray-100 px-4 sm:px-8 xl:px-[160px] w-full z-10">
      <div className="hidden xl:block">
        <div className="w-[400px] h-[calc(400px/2)] rounded-[0_0_50%_50%_/_0_0_100%_100%] bg-gray-90"></div>
        <div className="size-[400px] rounded-full bg-gray-90"></div>
        <div className="w-[400px] h-[calc(400px/2)] rounded-[0_0_50%_50%_/_0_0_100%_100%] bg-gray-90 rotate-180"></div>
      </div>
      <div className="w-full py-8 xl:py-[160px]">
        <div className="flex flex-col gap-8 xl:gap-16">
          <h2 className="text-[24px] leading-[31px] sm:text-[32px] sm:leading-[41px] xl:text-[64px] xl:leading-[83px] text-gray-0 font-medium">
            То, что вам нужно? Создайте бесплатный аккаунт или запишитесь на демонстрацию
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <Button className="xl:px-8">Записаться на демонстрацию</Button>
            <Button
              variant="secondary"
              // TODO: После созвона вернуться узнать по поводу border внутри компонента
              className="bg-transparent text-gray-0 hover:text-gray-80 border-gray-80 hover:border-transparent xl:px-8"
            >
              Стать пользователем
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
