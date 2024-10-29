import Link from 'next/link';
import { Button } from '@xipkg/button';
import Image from 'next/image';
import { Navigation } from './mainPage/navigation/Navigation';
import { MobileNavigation } from './mainPage/navigation/MobileNavigation';

export const Header = () => (
  <header className="flex justify-center py-4 xs:py-8 w-full top-0 fixed z-10">
    <div className="z-10 flex gap-14 rounded-[40px] relative bg-white bg-opacity-70 backdrop-blur-[48px] py-4 items-center pl-8 pr-4 outline outline-1 outline-gray-30">
      <Link href="/" className="w-[202px] h-[24px] relative">
        <Image src="/xieffectlight.webp" fill alt="xi effect logo" priority />
      </Link>
      <Navigation />
      <div className="gap-2 hidden lg:flex">
        <Button variant="ghost" className="px-6 rounded-full bg-transparent">
          Войти
        </Button>
        <Button className="rounded-full px-6 bg-brand-80">Зарегистрироваться</Button>
      </div>
      <MobileNavigation />
    </div>
  </header>
);
