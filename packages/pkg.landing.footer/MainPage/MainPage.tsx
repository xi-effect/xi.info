/* eslint-disable no-irregular-whitespace */
'use client';

import { usePathname } from 'next/navigation';
import { CallToActionForm } from './CallToActionForm';

export const MainPage = () => {
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) return null;

  return (
    <div
      id="become-tester"
      className="xs:p-8 flex w-full flex-col items-center justify-between gap-8 p-4 sm:items-baseline md:items-center lg:flex-row lg:py-[128px] xl:gap-16 xl:px-24 2xl:px-[160px]"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-gray-0 z-5 text-[32px] leading-[1.2] font-medium whitespace-pre-line sm:text-[48px]">
          Проверьте sovlium на практике
          <br />
          и расскажите о своих впечатлениях
        </h3>
        <p className="text-gray-0 xs:text-l-base sm:text-xl-base z-5">
          А мы подарим вам доступ на 30 дней ко всем функциям
        </p>
      </div>
      <div className="bg-gray-0 w-full max-w-[512px] rounded-2xl p-4 sm:rounded-[48px] sm:p-12">
        <CallToActionForm />
      </div>
    </div>
  );
};
