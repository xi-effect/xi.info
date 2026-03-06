'use client';

import { Button } from '@xipkg/button';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import SendResumeModal from '../modal/SendResumeModal';

const Header = () => {
  const pathname = usePathname();
  const [openModal, setOpenModal] = useState(false);

  return (
    <header className="py-[24px] sm:py-[32px] 2xl:py-16">
      <div className="mx-auto flex max-w-[1920px] items-center justify-between px-8 sm:px-16 2xl:px-40">
        <Link href="/">
          <Image
            width={219}
            height={32}
            quality={100}
            alt="logo xi.effect"
            src="/iconssite/team.svg"
            className="h-[24px] w-[165px]"
          />
        </Link>

        <nav className="hidden items-center sm:block">
          <Link
            href="/vacancy"
            className={` ${pathname === '/vacancy' ? 'text-brand-80' : 'text-gray-60'} mr-[24px] text-[20px] transition-colors 2xl:mr-16`}
          >
            Вакансии
          </Link>
          <SendResumeModal open={openModal} onOpenChange={setOpenModal}>
            <Button className="w-[200px]">Отправить резюме</Button>
          </SendResumeModal>
        </nav>
      </div>
    </header>
  );
};

export default Header;
