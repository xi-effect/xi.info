import { Link } from '@xipkg/link';
import Image from 'next/image';
import { SvgColumn } from './SvgColumn';
import { MainPage } from './MainPage';

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
      { link: '/calendar', title: 'Расписание' },
      { link: '/calls', title: 'Видеозвонки' },
      { link: '/whiteboard', title: 'Онлайн-доска' },
      { link: '/materials', title: 'Материалы' },
      { link: '/payments', title: 'Оплаты' },
    ],
  },
  {
    title: 'Клиентам',
    links: [
      { link: '/prices', title: 'Тарифы' },
      // { link: 'https://support.sovlium.ru/', title: 'Руководства' },
      { link: 'https://t.me/sovlium_support_bot', title: 'Поддержка' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { link: '/about', title: 'О нас' },
      { link: '/blog', title: 'Блог' },
      { link: '/legal/terms', title: 'Документы' },
      { link: 'https://vacancy.sovlium.ru/', title: 'Вакансии' },
    ],
  },
  {
    title: 'Социальные сети',
    links: [{ link: 'https://t.me/sovlium', title: 'Telegram' }],
  },
];

const email = 'support@sovlium.ru';
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
    <>
      <div className="bg-brand-80 z-1 mt-0 flex w-full flex-col items-center justify-center rounded-t-2xl sm:rounded-t-4xl xl:rounded-t-[64px]">
        <MainPage />
      </div>
      <div className="bg-brand-80">
        <footer className="z-10 flex rounded-t-[32px] bg-gray-100 xl:rounded-t-[64px] 2xl:justify-center">
          <div className="text-gray-0 xs:p-8 relative flex w-full max-w-[1920px] flex-col gap-8 px-4 py-8 xl:flex-row xl:justify-between xl:px-32 xl:py-16 2xl:px-40">
            <div className="relative">
              <Link
                href="/"
                className="xs:h-[24px] xs:w-[202px] relative h-[16px] w-[134px] 2xl:h-[40px] 2xl:w-[336px]"
              >
                <Image
                  alt="sovlium logo"
                  src="/logofordark.svg"
                  width={216}
                  height={64}
                  priority={false}
                />
              </Link>
              <div className="absolute bottom-[-64px] left-0 hidden max-[1760px]:left-[-100px] min-[1760px]:left-0 xl:left-[-100px] xl:block">
                <SvgColumn />
              </div>
            </div>
            <div className="z-5 flex flex-col gap-8 xl:gap-16">
              <div className="xs:grid-cols-2 xs:gap-y-10 grid grid-cols-1 gap-8 md:grid-cols-4 xl:justify-end 2xl:grid-cols-[repeat(4,minmax(0,240px))]">
                {sections.map(renderSection)}
              </div>
              <div className="text-xs-base xl:text-m-base xl:text-gray-0 text-gray-60 xs:gap-x-8 flex flex-wrap gap-x-4 gap-y-2">
                <span className="2xl:w-[330px]">&copy; sovlium с {copyrightYear} года</span>
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
                <span className="2xl:w-[330px]">Сделано с ♥ в России</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
