/* eslint-disable no-irregular-whitespace */
'use client';

import { Button } from '@xipkg/button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SendResumeModal from '../modal/SendResumeModal';

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <footer className="mt-4 sm:mt-16">
      <div className="mx-auto max-w-[1920px] px-8 sm:px-8 2xl:px-[112px]">
        <div className="py-4 sm:px-8 sm:py-8 xl:flex xl:content-center xl:px-[48px] xl:py-[128px]">
          <div className="before:bg-gray-10 after:bg-gray-10 relative mt-[10px] hidden before:absolute before:top-[-140px] before:h-[140px] before:w-[240px] before:rounded-b-full after:absolute after:top-[240px] after:h-[140px] after:w-[240px] after:rounded-t-full xl:block">
            <Image
              width={789}
              height={1183}
              quality={100}
              alt="team working"
              src="/home/work-together.jpg"
              className="mr-[167px] h-[240px] w-[240px] rounded-full object-cover"
            />
          </div>

          <div>
            <h2 className="mb-4 text-[24px] leading-[130%] font-semibold sm:text-[48px] xl:mb-[24px] xl:text-[64px]">
              Приходи работать вместе
            </h2>

            <p className="mb-[10px] text-[16px] leading-[130%] sm:text-[24px] xl:mb-[24px] xl:w-[85%] xl:text-[32px]">
              Напиши пару слов о себе и о том, какая вакансия может быть тебе интересна
            </p>

            <SendResumeModal open={openModal} onOpenChange={setOpenModal}>
              <Button className="xs:w-[200px] xs:text-base xs:h-12 h-8 w-[165px] text-sm">
                Отправить резюме
              </Button>
            </SendResumeModal>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4 min-[1000px]:flex-row min-[1000px]:content-center sm:px-8 sm:py-8 xl:px-[48px] xl:py-16">
          <Link href="/">
            <Image
              width={110}
              height={16}
              quality={100}
              src="/iconssite/team.svg"
              alt="logo xi.effect"
              className="mb-[24px] h-[16px] w-[110px] min-[1000px]:mb-0 sm:h-[24px] sm:w-[165px]"
            />
          </Link>
          <div className="flex flex-col flex-wrap items-start text-[12px] text-gray-100 min-[1000px]:basis-[74%] sm:flex-row sm:content-center sm:items-center sm:justify-between xl:text-[16px]">
            <span className="mr-4 mb-2 min-[1000px]:mb-0">&copy; xi.effect c 2024 года</span>
            <span className="mr-4 mb-6 sm:mb-0">Сделано с ❤️ в Санкт-Петербурге</span>
            <div className="flex gap-x-4 2xl:w-[250px]">
              <a href="https://vk.com/xieffect" target="_blank" rel="noreferrer">
                <Image width={32} height={32} alt="vk link" src="/iconssite/vk.svg" />
              </a>
              <a href="https://github.com/xi-effect" target="_blank" rel="noreferrer">
                <Image width={32} height={32} alt="github link" src="/iconssite/gh.svg" />
              </a>
              <a href="https://t.me/xieffect" target="_blank" rel="noreferrer">
                <Image width={32} height={32} alt="telegram link" src="/iconssite/telegram.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
