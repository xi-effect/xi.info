/* eslint-disable no-irregular-whitespace */
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@xipkg/button';
import { SvgColumn } from './SvgColumn';
import SendResumeModal from '../modal/SendResumeModal';

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
    <div className="mt-4 sm:mt-16">
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
              <Button className="w-[165px] xs:w-[200px] text-sm xs:text-base h-8 xs:h-12">
                Отправить резюме
              </Button>
            </SendResumeModal>
          </div>
        </div>

        <footer className="z-10 flex rounded-t-[32px] bg-gray-100 xl:rounded-t-[64px] 2xl:justify-center">
          <div className="text-gray-0 xs:p-8 relative flex w-full max-w-[1920px] flex-col gap-8 px-4 py-8 xl:flex-row xl:justify-between xl:px-32 xl:py-16 2xl:px-40">
            <div className="relative">
              <Link
                href="/"
                className="xs:h-[24px] xs:w-[202px] relative h-[16px] w-[134px] 2xl:h-[40px] 2xl:w-[336px]"
              >
                <Image
                  alt="sovlium logo"
                  src="/assets/logofordark.svg"
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
    </div>
  );
};

export default Footer;
