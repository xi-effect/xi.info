'use client';

import { Button } from '@xipkg/button';
import { TelegramFilled, ChevronRight } from '@xipkg/icons';

export const CallToAction = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16 px-8 sm:py-32">
      <div className="w-full max-w-[1920px] flex flex-col justify-center items-center gap-4">
        <h3 className="font-medium text-[24px] sm:text-[40px] xl:text-[64px] leading-[31.2px] sm:leading-[52px] xl:leading-[83.2px] text-gray-100">
          Не нашлось ответа?
        </h3>
        <Button className="h-8 sm:h-[56px] xl:h-[84px] font-medium text-sm sm:text-xl xl:text-[30px] xl:leading-[42px] rounded-md sm:rounded-xl xl:rounded-[18px] pl-3 sm:pl-6 xl:pl-9 pr-2 sm:pr-3 xl:pr-[18px] mt-4 sm:mt-8">
          Написать в телеграм
          <TelegramFilled className="fill-gray-0 !size-4 sm:!size-8 xl:!size-12 ml-[6px] sm:ml-4 xl:ml-6" />
        </Button>
      </div>
    </section>
  );
};
