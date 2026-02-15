import { Button } from '@xipkg/button';
import { TelegramFilled } from '@xipkg/icons';
import NextLink from 'next/link';

export const CallToAction = () => (
  <section className="flex flex-col justify-center items-center max-w-[1920px] gap-8">
    <h3 className="font-medium text-2xl sm:text-h3 xl:text-h6  text-gray-100 dark:text-gray-0 mt-0 mb-0">
      Не нашлось ответа?
    </h3>
    <Button
      className="h-8 sm:h-14 font-medium text-sm sm:text-xl xl:text-2xl rounded-md sm:rounded-xl xl:rounded-[18px] px-8 py-8"
      asChild
    >
      <NextLink href="https://t.me/sovlium_support_bot" target="_blank" rel="noopener noreferrer">
        Написать в телеграм
        <TelegramFilled className="fill-gray-0 size-4! sm:size-8! xl:size-12! ml-1.5 sm:ml-4 xl:ml-6!" />
      </NextLink>
    </Button>
  </section>
);
