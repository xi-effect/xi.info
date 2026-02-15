import { Button } from '@xipkg/button';
import { TelegramFilled } from '@xipkg/icons';
import NextLink from 'next/link';

export const CallToAction = () => (
  <section className="flex flex-col justify-center items-center py-16 px-8 sm:py-8  max-w-[1920px] gap-8">
    <h3 className="font-medium text-2xl sm:text-h3 xl:text-h2 leading-[31.2px] sm:leading-[52px] xl:leading-[83.2px] text-gray-100 dark:text-gray-0 mt-0 mb-0">
      Не нашлось ответа?
    </h3>
    <Button
      className="h-8 sm:h-14 xl:h-[84px] font-medium text-sm sm:text-xl xl:text-[30px] xl:leading-[42px] rounded-md sm:rounded-xl xl:rounded-[18px] pl-3 sm:pl-6 xl:pl-9 pr-2 sm:pr-3 xl:pr-[18px]"
      asChild
    >
      <NextLink href="https://t.me/sovlium_support_bot" target="_blank" rel="noopener noreferrer">
        Написать в телеграм
        <TelegramFilled className="fill-gray-0 size-4! sm:size-8! xl:size-12! ml-1.5 sm:ml-4 xl:ml-6!" />
      </NextLink>
    </Button>
  </section>
);
