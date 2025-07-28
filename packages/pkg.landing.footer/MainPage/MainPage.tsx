'use client';

import { usePathname } from 'next/navigation';
import { CallToActionForm } from './CallToActionForm';

export const MainPage = () => {
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) return null;

  return (
    <div
      id="becometester"
      className="xs:py-16 xs:p-8 flex flex-col items-center justify-center gap-8 p-4 md:p-[128px] lg:flex-row"
    >
      <div>
        <h3 className="text-gray-0 xs:text-[32px] z-5 text-[24px] font-medium whitespace-pre-line md:text-[48px]">
          Проверьте sovlium на практике
          <br />
          и расскажите о своих впечатлениях
        </h3>
        <p className="text-gray-0 xs:text-[16px] z-5 text-[12px] md:text-[24px]">
          А мы подарим вам доступ на 30 дней ко всем функциям
        </p>
      </div>
      <div className="bg-gray-0 w-full max-w-[512px] rounded-[32px] p-[48px]">
        <CallToActionForm />
      </div>
    </div>
  );
};
