import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@xipkg/button';
import SendResumeModal from '../modal/SendResumeModal';

const Footer = () => (
  <footer className="mt-4 sm:mt-16">
    <div className="mx-auto px-8 sm:px-8 2xl:px-[112px] max-w-[1920px]">
      <div className="py-4 sm:py-8 xl:py-[128px] sm:px-8 xl:px-[48px] xl:flex xl:content-center">
        <div className="mt-[10px] hidden xl:block relative before:rounded-b-full before:absolute before:top-[-140px] before:bg-gray-10 before:w-[240px] before:h-[140px] after:rounded-t-full after:absolute after:top-[240px] after:bg-gray-10 after:w-[240px] after:h-[140px]">
          <Image
            width={789}
            height={1183}
            quality={100}
            alt="team working"
            src="/home/work-together.jpg"
            className="rounded-full w-[240px] h-[240px] object-cover mr-[167px]"
          />
        </div>

        <div>
          <h2 className="leading-[130%] text-[24px] sm:text-[48px] xl:text-[64px] font-semibold mb-4 xl:mb-[24px]">
            Приходи работать вместе
          </h2>

          <p className="leading-[130%] mb-[10px] text-[16px] sm:text-[24px] xl:text-[32px] xl:mb-[24px] xl:w-[85%]">
            Напиши пару слов о себе и о том, какая вакансия может быть тебе интересна
          </p>

          <SendResumeModal>
            <Button className="w-[165px] xs:w-[200px] text-sm xs:text-base h-8 xs:h-12">Отправить резюме</Button>
          </SendResumeModal>
        </div>
      </div>
      <div className="py-4 sm:py-8 xl:py-16 sm:px-8 xl:px-[48px] flex flex-col min-[1000px]:flex-row min-[1000px]:content-center  justify-between">
        <Link href="/">
          <Image
            width={110}
            height={16}
            quality={100}
            src="/iconssite/team.svg"
            alt="logo xi.effect"
            className="mb-[24px] min-[1000px]:mb-0 w-[110px] h-[16px] sm:w-[165px] sm:h-[24px]"
          />
        </Link>
        <div className="flex flex-wrap items-start flex-col sm:items-center sm:flex-row sm:justify-between sm:content-center text-[12px] xl:text-[16px] text-gray-100 min-[1000px]:basis-[74%]">
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

export default Footer;
