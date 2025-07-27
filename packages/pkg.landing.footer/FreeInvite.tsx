'use client';

import { Button } from '@xipkg/button';
import { Link } from '@xipkg/link';
import { usePathname } from 'next/navigation';

export const FreeInvite = () => {
  const pathname = usePathname();

  const isNotMainPage = pathname !== '/';

  if (!isNotMainPage) return null;

  return (
    <div className="xs:py-16 flex flex-col items-center justify-center gap-4 px-4 py-8 md:py-[128px]">
      <h3 className="text-gray-0 xs:text-[32px] text-center text-[24px] font-medium md:text-[48px]">
        Начните с бесплатного тарифа
      </h3>
      <Link href="https://app.sovlium.ru/signup" className="z-5" target="_blank">
        <Button
          size="l"
          variant="default"
          className="text-brand-100 bg-brand-0 h-[56px] w-full text-[20px]"
        >
          Использовать бесплатно
        </Button>
      </Link>
    </div>
  );
};
