'use client';

import { Link } from '@xipkg/link';
import Image from 'next/image';

interface SectionLink {
  link: string;
  title: string;
}

interface Section {
  title: string;
  links: SectionLink[];
}

const sections: Section[] = [
  {
    title: 'Продукт',
    links: [
      { link: 'https://xieffect.ru/product#tasksAndTests', title: 'Задания' },
      { link: 'https://xieffect.ru/product#tasksAndTests', title: 'Тесты' },
      { link: 'https://xieffect.ru/product#videocalls', title: 'Видеоконференции' },
      { link: 'https://xieffect.ru/product#chats', title: 'Чаты' },
      { link: 'https://xieffect.ru/product#announces', title: 'Объявления' },
    ],
  },
  {
    title: 'Клиентам',
    links: [
      { link: '#', title: 'Тарифы' },
      { link: 'https://support.xieffect.ru/', title: 'Поддержка' },
      { link: 'https://support.xieffect.ru/', title: 'Поддержка' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { link: '/about-us', title: 'О нас' },
      { link: '#', title: 'Блог' },
      { link: '#', title: 'Документы' },
      { link: 'https://vacancy.xieffect.ru/', title: 'Вакансии' },
    ],
  },
  {
    title: 'Социальные сети',
    links: [
      { link: 'https://vk.com/xieffect', title: 'VK' },
      { link: 'https://t.me/xieffect', title: 'Telegram' },
    ],
  },
];

const email = 'hello@xieffect.ru';
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  const renderSection = (section: Section) => (
    <div key={section.title} className="flex w-full grow flex-col text-[16px]">
      <h3 className="m-0 text-[16px] opacity-40 sm:text-[20px]">{section.title}</h3>
      <ul className="m-0 mt-6 flex flex-col gap-6 p-0">
        {section.links.map((link, index) => (
          <li key={index}>
            <Link className="text-[16px] sm:text-[20px]" variant="hover" href={link.link}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="flex w-full items-center justify-center px-4 py-8 text-gray-100 sm:p-8 xl:p-[160px] xl:pb-20">
      <div className="flex w-full w-full max-w-[1920px] flex-col text-gray-100 lg:flex-row">
        <div className="relative h-[24px] w-[202px] lg:h-[40px] lg:w-[336px]">
          <Image alt="xieffect logo" src="/xieffectlight.webp" height={40} width={336} />
        </div>
        <div className="flex w-full flex-col max-lg:mt-8 lg:ml-[72px]">
          <div className="flex w-full flex-col gap-8 sm:flex-row">
            {sections.map(renderSection)}
          </div>
          <div className="mt-16 flex flex-col justify-between gap-2 sm:flex-row">
            <span>&copy; xieffect с {copyrightYear} года</span>
            <span className="order-1 sm:order-none">Сделано с ❤️ в Санкт-Петербурге</span>
            <span>
              <Link
                className="text-[16px]"
                target="_blank"
                variant="hover"
                href={`mailto:${email}`}
              >
                {email}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
