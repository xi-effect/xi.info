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
      { link: '/product#tasksAndTests', title: 'Задания' },
      { link: '/product#tasksAndTests', title: 'Тесты' },
      { link: '/product#videocalls', title: 'Видеозвонки' },
      { link: '/product#chats', title: 'Чаты' },
      { link: '/product#announces', title: 'Объявления' },
      { link: '/product#whiteboard', title: 'Онлайн-доска' },
    ],
  },
  {
    title: 'Клиентам',
    links: [
      { link: '/prices', title: 'Тарифы' },
      { link: 'https://support.xieffect.ru/', title: 'Руководства' },
      { link: 'https://t.me/xieffect_support_bot', title: 'Поддержка' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { link: '/about', title: 'О нас' },
      { link: '/blog', title: 'Блог' },
      { link: '/docs', title: 'Документы' },
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
    <div key={section.title} className="xs:gap-6 flex flex-col gap-4">
      <h3 className="text-gray-60 text-m-base xs:text-l-base">{section.title}</h3>
      <ul className="xs:gap-6 flex flex-col gap-4">
        {section.links.map((link, index) => (
          <li key={index}>
            <Link
              className="text-gray-0 xs:text-l-base hover:text-gray-0 hover:decoration-gray-0"
              variant="hover"
              href={link.link}
              size="l"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="flex rounded-t-[32px] bg-gray-100 xl:rounded-t-[64px] 2xl:justify-center">
      <div className="text-gray-0 xs:p-8 flex w-full max-w-[1920px] flex-col gap-8 px-4 py-8 xl:flex-row xl:justify-between xl:px-32 xl:py-16 2xl:px-40">
        <Link
          href="/"
          className="xs:h-[24px] xs:w-[202px] relative h-[16px] w-[134px] 2xl:h-[40px] 2xl:w-[336px]"
        >
          <Image alt="xieffect logo" src="/xieffect.webp" fill priority={false} />
        </Link>
        <div className="flex flex-col gap-8 xl:gap-16">
          <div className="xs:grid-cols-2 xs:gap-y-10 grid grid-cols-1 gap-8 md:grid-cols-4 xl:justify-end 2xl:grid-cols-[repeat(4,minmax(0,240px))]">
            {sections.map(renderSection)}
          </div>
          <div className="text-xs-base xl:text-m-base xl:text-gray-0 text-gray-60 xs:gap-x-8 flex flex-wrap gap-x-4 gap-y-2">
            <span className="2xl:w-[330px]">&copy; xi.effect с {copyrightYear} года</span>
            <span className="xs:order-1 2xl:w-[330px]">
              <Link
                className="text-gray-60 xl:text-gray-0 hover:text-gray-0 hover:decoration-gray-0 xl:text-[16px]"
                target="_blank"
                variant="hover"
                href={`mailto:${email}`}
                size="s"
              >
                {email}
              </Link>
            </span>
            <span className="2xl:w-[330px]">Сделано с ♥ в Санкт-Петербурге</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
