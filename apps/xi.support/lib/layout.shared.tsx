import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      url: 'https://sovlium.ru/',
      title: (
        <>
          <Image
            src="/logoforwhite.svg"
            alt="Sovlium Support logo"
            width={216}
            height={64}
            className="h-[24px] w-auto sm:h-[40px] dark:hidden"
          />
          <Image
            src="/logofordark.svg"
            alt="Sovlium Support logo"
            width={216}
            height={64}
            className="h-[24px] w-auto sm:h-[40px] hidden dark:block"
          />
        </>
      ),
    },
  };
}
