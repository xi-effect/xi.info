import { ReactNode } from 'react';
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

interface FooterProps {
  topContent?: ReactNode;
  sections?: Section[];
  /** Один логотип (для светлой или тёмной темы) */
  logoPath?: string;
  /** Логотип для светлой темы (при использовании вместе с logoPathDark переключается по теме) */
  logoPathLight?: string;
  /** Логотип для тёмной темы (при использовании вместе с logoPathLight переключается по теме) */
  logoPathDark?: string;
  classNameFooter?: string;
  /** Классы для внутреннего footer (по умолчанию светлый фон в light, прозрачный в dark) */
  innerClassNameFooter?: string;
  /**
   * true = текст подстраивается под data-theme (светлая тема → тёмный текст, тёмная → светлый).
   * false/undefined = футер всегда с тёмным фоном (xi.land), текст всегда светлый.
   */
  themeAwareContent?: boolean;
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
      { link: 'https://support.sovlium.ru/', title: 'База знаний' },
      { link: 'https://t.me/sovlium_support_bot', title: 'Поддержка' },
      { link: '/roadmap', title: 'План развития' },
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
    links: [
      { link: 'https://vk.com/sovlium', title: 'ВКонтакте' },
      { link: 'https://t.me/sovlium', title: 'Telegram' },
    ],
  },
];

const email = 'support@sovlium.ru';

const Footer = ({
  topContent,
  sections: customSections,
  logoPath = '/logofordark.svg',
  logoPathLight,
  logoPathDark,
  classNameFooter = 'bg-brand-80 dark:bg-gray-100',
  innerClassNameFooter = 'bg-gray-100 dark:bg-transparent',
  themeAwareContent = false,
}: FooterProps = {}) => {
  const footerSections = customSections || sections;
  const useThemeLogos = logoPathLight != null && logoPathDark != null;

  const titleClass = themeAwareContent
    ? 'text-gray-90 dark:text-gray-60 text-m-base xs:text-lg mb-0 mt-0'
    : 'text-gray-60 text-m-base xs:text-l-base mb-0 mt-0';
  const linkClass = themeAwareContent
    ? 'no-underline text-m-base text-gray-100 decoration-gray-100 dark:text-gray-0 dark:hover:text-gray-0 dark:hover:decoration-gray-0 xs:text-l-base hover:text-gray-100 hover:decoration-gray-100'
    : 'no-underline text-m-base text-gray-0 xs:text-l-base hover:text-gray-0 hover:decoration-gray-0';
  const bottomRowClass = themeAwareContent
    ? 'text-xs-base xl:text-m-base text-gray-90 dark:text-gray-60 dark:xl:text-gray-0 xs:gap-x-8 flex flex-wrap justify-between gap-x-4 gap-y-2'
    : 'text-xs-base xl:text-m-base text-gray-60 xl:text-gray-0 xs:gap-x-8 flex flex-wrap justify-between gap-x-4 gap-y-2';
  const emailLinkClass = themeAwareContent
    ? 'text-gray-90 decoration-gray-90 dark:text-gray-60 dark:xl:text-gray-0 dark:hover:text-gray-0 dark:hover:decoration-gray-0 hover:text-gray-90 hover:decoration-gray-90 xl:text-[16px]'
    : 'text-gray-60 xl:text-gray-0 hover:text-gray-0 hover:decoration-gray-0 xl:text-[16px]';

  const renderSection = (section: Section) => (
    <div key={section.title} className="xs:gap-6 flex flex-col gap-4">
      <p className={titleClass}>{section.title}</p>
      <ul className="xs:gap-6 mt-0 mb-0 flex flex-col gap-6 pl-0">
        {section.links.map((link, index) => (
          <li key={index} className="mt-0 mb-0 list-none">
            <Link className={linkClass} variant="hover" href={link.link} size="l">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {topContent || (
        <div className="bg-brand-80 z-1 mt-0 flex w-full flex-col items-center justify-center rounded-t-2xl sm:rounded-t-4xl xl:rounded-t-[64px] dark:bg-gray-100">
          <MainPage />
        </div>
      )}

      <div className={classNameFooter}>
        <footer
          className={`z-10 flex rounded-t-[32px] xl:rounded-t-[64px] 2xl:justify-center ${innerClassNameFooter}`}
        >
          <div
            className={`xs:p-8 relative flex w-full max-w-[1920px] flex-col gap-8 px-4 py-8 xl:flex-row xl:justify-between xl:px-32 xl:py-16 2xl:px-40 ${themeAwareContent ? 'text-gray-0 dark:text-gray-0' : 'text-gray-0'}`}
          >
            <div className="relative">
              <Link
                href="/"
                className="xs:h-[24px] xs:w-[202px] relative mt-0 mb-0 h-[16px] w-[134px] 2xl:h-[40px] 2xl:w-[336px]"
              >
                {useThemeLogos ? (
                  <>
                    <Image
                      alt="sovlium logo"
                      src={logoPathLight}
                      width={216}
                      height={64}
                      priority={false}
                      className="mt-0 mb-0 block dark:hidden"
                    />
                    <Image
                      alt="sovlium logo"
                      src={logoPathDark}
                      width={216}
                      height={64}
                      priority={false}
                      className="mt-0 mb-0 hidden dark:block"
                    />
                  </>
                ) : (
                  <Image
                    alt="sovlium logo"
                    src={logoPath}
                    width={216}
                    height={64}
                    priority={false}
                  />
                )}
              </Link>
              <div className="absolute bottom-[-64px] left-0 hidden max-[1760px]:left-[-100px] min-[1760px]:left-0 xl:left-[-100px] xl:block">
                <SvgColumn
                  className={
                    themeAwareContent ? 'text-brand-20 dark:text-[#26262A]' : 'text-[#26262A]'
                  }
                />
              </div>
            </div>
            <div className="z-5 flex flex-col gap-8 xl:gap-16">
              <div className="xs:grid-cols-2 xs:gap-y-10 grid grid-cols-1 gap-8 md:grid-cols-4 xl:justify-end 2xl:grid-cols-[repeat(4,minmax(0,240px))]">
                {footerSections.map(renderSection)}
              </div>
              <div className={bottomRowClass}>
                <span className="2xl:w-[330px]">&copy; sovlium с 2025 года</span>
                <span className="xs:order-1 2xl:w-[330px]">
                  <Link
                    className={emailLinkClass}
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
