'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@xipkg/button';
import SendResumeModal from '../modal/SendResumeModal';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="py-[24px] sm:py-[32px] 2xl:py-16">
      <div className="max-w-[1920px] px-8 sm:px-16 2xl:px-40 mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            width={219}
            height={32}
            quality={100}
            alt="logo xi.effect"
            src="/iconssite/team.svg"
            className="w-[165px] h-[24px]"
          />
        </Link>

        <nav className="items-center hidden sm:block">
          <Link
            href="/vacancy"
            className={`
              ${pathname === '/vacancy' ? 'text-brand-80' : 'text-gray-60'}
              transition-colors mr-[24px] text-[20px] 2xl:mr-16
            `}
          >
            Вакансии
          </Link>
          <SendResumeModal>
            <Button className="w-[200px]">Отправить резюме</Button>
          </SendResumeModal>
        </nav>
      </div>
    </header>
  );
};

export default Header;
