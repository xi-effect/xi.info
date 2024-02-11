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
      { link: '#', title: 'Задания' },
      { link: '#', title: 'Тесты' },
      { link: '#', title: 'Видеоконференции' },
      { link: '#', title: 'Чаты' },
      { link: '#', title: 'Объявления' },
      { link: '#', title: 'Расписание' },
    ],
  },
  {
    title: 'Клиентам',
    links: [
      { link: '#', title: 'Тарифы' },
      { link: '#', title: 'Руководства' },
      { link: '#', title: 'Поддержка' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { link: '#', title: 'О нас' },
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
    <div className="flex flex-col text-[16px] w-full grow">
      <h3 className="m-0 opacity-40 text-[16px] sm:text-[20px]">{section.title}</h3>
      <ul className="flex flex-col p-0 m-0 mt-6 gap-6">
        {section.links.map((link) => (
          <li key={link.title}>
            <Link className="text-[16px] sm:text-[20px]" target="_blank" variant="hover" href={link.link}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="flex flex-col lg:flex-row w-full text-gray-100 py-8 px-4 sm:p-8 xl:p-[160px] xl:pb-20">
      <div>
        <Image alt="xieffect logo" src="/xieffectlogo.svg" className='w-[202px] h-[24px] lg:w-[336px] lg:h-[40px]' height={0} width={0} />
      </div>
      <div className="lg:ml-[72px] max-lg:mt-8 flex flex-col w-full">
        <div className="flex flex-col sm:flex-row w-full gap-8">{sections.map(renderSection)}</div>
        <div className="flex flex-col sm:flex-row justify-between mt-16 gap-2">
          <span>&copy; xieffect с {copyrightYear} года</span>
          <span className='order-1 sm:order-none'>Сделано с ❤️ в Санкт-Петербурге</span>
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
    </footer>
  );
};

export default Footer;
