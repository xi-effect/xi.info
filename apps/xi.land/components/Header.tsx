'use client';

import NextLink from 'next/link';
import { Button } from '@xipkg/button';
import { Link } from '@xipkg/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMedia } from 'pkg.utils';

const BurgerIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5.33331" y="8" width="21.3333" height="2.66667" rx="0.5" fill="#101010" />
    <rect x="5.33331" y="14.667" width="21.3333" height="2.66667" rx="0.5" fill="#101010" />
    <rect x="5.33331" y="21.333" width="21.3333" height="2.66667" rx="0.5" fill="#101010" />
  </svg>
);

const arrayOfLinks = [
  {
    label: 'Продукт',
  },
  {
    label: 'Тарифы',
  },
  {
    label: 'Блог',
  },
  {
    label: 'Роадмап',
  },
];

const Header = () => {
  const router = useRouter();
  const isTablet = useMedia('(min-width: 720px)', true);

  return (
    <div className="p-4 sm:p-8 3xl:py-16 3xl:px-[160px] flex flex-row w-full justify-between items-center z-10">
      <div>
        <Image alt="xieffect logo" src="/xieffectlogo.svg" height={24} width={202} />
      </div>
      {isTablet && (
        <div className="flex flex-row justify-between w-full max-w-[398px] py-0 px-1.5">
          {arrayOfLinks.map((item, index) => (
            <Link href="#" key={index} variant="hover" className="text-gray-60 text-xl pointer">
              {item.label}
            </Link>
          ))}
        </div>
      )}
      <div>
        <Button
          variant="default"
          className="w-24 z-10 max-sm:hidden"
          id="to-signin-button"
          data-umami-event="to-signin-button"
          asChild
        >
          <NextLink href="https://app.xieffect.ru/">Войти</NextLink>
        </Button>
        <Button variant="ghost" className="h-12 w-12 z-10 p-0 m-0 sm:hidden">
          <BurgerIcon />
        </Button>
      </div>
    </div>
  );
};

export default Header;
