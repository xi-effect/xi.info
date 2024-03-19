import { Button } from '@xipkg/button';
import React from 'react';
import NextLink from 'next/link';
import ContactUsModal from './ContactUsModal';

export const AboutDemoRegistration = () => {
  return (
    <div className="flex justify-center h-full bg-gray-100 px-4 sm:px-8 xl:px-[160px] w-full z-10">
      <div className="flex gap-[145px] w-full max-w-[1920px]">
        <div className="hidden xl:block">
          <div className="w-[400px] h-[calc(400px/2)] rounded-[0_0_50%_50%_/_0_0_100%_100%] bg-gray-90"></div>
          <div className="size-[400px] rounded-full bg-gray-90"></div>
          <div className="w-[400px] h-[calc(400px/2)] rounded-[0_0_50%_50%_/_0_0_100%_100%] bg-gray-90 rotate-180"></div>
        </div>
        <div className="w-full py-8 xl:py-[160px]">
          <div className="flex flex-col gap-8 2xl:gap-16">
            <h2 className="text-[24px] leading-[31px] sm:text-[32px] sm:leading-[41px] 2xl:text-[64px] 2xl:leading-[83px] text-gray-0 font-medium">
              То, что вам нужно? <br />
              Запишитесь на тестирование и получите доступ бесплатно
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              <ContactUsModal>
                <Button className="xl:px-8">Записаться на тестирование</Button>
              </ContactUsModal>

              <Button
                variant="secondary"
                className="bg-transparent text-gray-0 hover:text-gray-80 border-gray-80 hover:border-transparent 2xl:px-8"
                asChild
              >
                <NextLink href="https://app.xieffect.ru/signup">Стать пользователем</NextLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
