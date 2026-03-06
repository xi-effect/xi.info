import { Button } from '@xipkg/button';
import { TelegramFilled } from '@xipkg/icons';
import NextLink from 'next/link';

export const CallToAction = () => (
  <section className="flex flex-col justify-center items-center max-w-[1920px] gap-8">
    <h3 className="font-medium text-2xl md:text-h6 text-gray-100 dark:text-gray-0 mt-0 mb-0">
      Не нашлось ответа?
    </h3>
    <Button
      className={`font-medium hover:bg-brand-80
        text-m-base md:text-lg xl:text-2xl text-gray-0 
        rounded-md sm:rounded-xl xl:rounded-[18px] 
        p-6 md:p-8`}
      asChild
    >
      <NextLink
        href="https://t.me/sovlium_support_bot"
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
      >
        Написать в телеграм
        <TelegramFilled className="fill-gray-0 size-4! sm:size-8! xl:size-12! ml-1.5 sm:ml-4 xl:ml-6!" />
      </NextLink>
    </Button>
  </section>
);
