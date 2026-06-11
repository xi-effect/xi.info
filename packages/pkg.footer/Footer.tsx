import { ReactNode } from 'react';
import { Link } from '@xipkg/link';
import Image from 'next/image';
import { SvgColumn } from './SvgColumn';
import { Button } from '@xipkg/button';
import {
  Calendar,
  BookOpened,
  Group,
  Payments,
  Conference,
  WhiteBoard,
  ArrowRight,
} from '@xipkg/icons';

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
  backgroundImageUrl?: string;
  mobileBackgroundImageUrl?: string;
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
      { link: '/legal', title: 'Документы' },
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

const legalDocumentLinks: SectionLink[] = [
  { link: '/legal/terms', title: 'Пользовательское соглашение' },
  { link: '/legal/privacy', title: 'Политика конфиденциальности' },
  { link: '/legal/consent', title: 'Согласие на обработку ПДн' },
  { link: '/legal/marketing-consent', title: 'Согласие на рекламные сообщения' },
];

const email = 'support@sovlium.ru';

const Footer = ({
  sections: customSections,
  logoPath = '/logofordark.svg',
  logoPathLight,
  logoPathDark,
  classNameFooter = 'bg-brand-80 dark:bg-gray-100 rounded-t-[64px]',
  innerClassNameFooter = 'bg-gray-100 dark:bg-transparent',
  themeAwareContent = false,
  backgroundImageUrl,
  mobileBackgroundImageUrl,
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
  const legalDocLinkClass = themeAwareContent
    ? 'no-underline text-xxs-base text-gray-80 dark:text-gray-60 hover:text-gray-100 dark:hover:text-gray-40'
    : 'no-underline text-xxs-base text-gray-60 hover:text-gray-40';
  const footerGradientClass = `bg-[radial-gradient(circle_at_center,_rgba(15,15,17,0)_30%,_rgba(15,15,17,1)_100%)]`;

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
      <div className={classNameFooter}>
        <footer
          className={`z-10 flex rounded-t-4xl xl:rounded-t-[64px] 2xl:justify-center ${innerClassNameFooter}`}
        >
          <div className="flex w-full flex-col">
            <div className="relative flex h-155 flex-col items-center justify-between gap-8 p-6 md:p-4 xl:h-auto xl:px-32 xl:py-16 2xl:px-40">
              <div className="absolute inset-0 p-6 md:p-0">
                <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-t-3xl md:rounded-b-none xl:rounded-t-[64px]">
                  <div className={`absolute inset-0 z-9 ${footerGradientClass}`} />

                  {mobileBackgroundImageUrl && (
                    <Image
                      src={mobileBackgroundImageUrl}
                      alt="фон футера мобильный"
                      fill
                      className="block object-cover md:hidden"
                    />
                  )}
                  {backgroundImageUrl && (
                    <Image
                      src={backgroundImageUrl}
                      alt="фон футера десктопный"
                      fill
                      className="hidden bg-[radial-gradient(circle,rgba(21,22,36,0)_0%,rgba(21,22,36,1)_100%)] object-cover md:block"
                    />
                  )}
                </div>
              </div>
              <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-between gap-8 p-6 sm:justify-center md:items-baseline md:justify-baseline xl:py-24 2xl:py-32">
                <div className="flex flex-col gap-4 text-center md:w-132.5 md:text-left xl:gap-5">
                  <p className="text-gray-0 text-xl-base md:text-h5 xl:text-h3 font-semibold">
                    Экономьте до 1 часа в день вместе с sovlium
                  </p>
                  <span className="text-m-base leading-[1.3] text-gray-50 md:text-[18px]">
                    {`Быстро переключайтесь между инструментами\u00A0в единой рабочей среде`}
                  </span>
                  <div className="flex justify-center gap-2 md:justify-start xl:mt-10 xl:gap-5">
                    <div className="bg-cyan-20 rounded-lg p-2 xl:p-2 2xl:rounded-xl 2xl:p-3">
                      <Calendar className="fill-cyan-100 xl:size-8 2xl:size-9" />
                    </div>
                    <div className="bg-pink-20 rounded-lg p-2 xl:p-2 2xl:rounded-xl 2xl:p-3">
                      <BookOpened className="fill-pink-100 xl:size-8 2xl:size-9" />
                    </div>
                    <div className="bg-violet-20 rounded-lg p-2 xl:p-2 2xl:rounded-xl 2xl:p-3">
                      <Group className="fill-violet-100 xl:size-8 2xl:size-9" />
                    </div>
                    <div className="bg-yellow-20 rounded-lg p-2 xl:p-2 2xl:rounded-xl 2xl:p-3">
                      <Payments className="fill-yellow-100 xl:size-8 2xl:size-9" />
                    </div>
                    <div className="bg-green-0 rounded-lg p-2 xl:p-2 2xl:rounded-xl 2xl:p-3">
                      <Conference className="fill-green-100 xl:size-8 2xl:size-9" />
                    </div>
                    <div className="bg-red-0 rounded-lg p-2 xl:p-2 2xl:rounded-xl 2xl:p-3">
                      <WhiteBoard className="fill-red-100 xl:size-8 2xl:size-9" />
                    </div>
                  </div>
                </div>
                <div className="sm:mt-5 xl:mt-24 2xl:mt-40">
                  <Link className="w-full md:w-auto" href="https://app.sovlium.ru/signup">
                    <Button
                      className="h-12 w-full rounded-2xl pr-3 pl-6 text-[16px] leading-6 md:w-auto"
                      size="l"
                    >
                      Попробовать бесплатно
                      <ArrowRight className="fill-brand-0 ml-3 h-6 w-6 md:ml-4 md:h-8 md:w-8" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`xs:p-8 relative flex w-full max-w-480 flex-col gap-8 px-4 py-8 xl:flex-row xl:justify-between xl:px-32 xl:py-16 2xl:px-40 ${themeAwareContent ? 'text-gray-0 dark:text-gray-0' : 'text-gray-0'}`}
            >
              <div className="relative">
                <Link
                  href="/"
                  className="xs:h-6 xs:w-50.5 relative mt-0 mb-0 h-4 w-33.5 2xl:h-10 2xl:w-84"
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
                <div
                  className={
                    themeAwareContent
                      ? 'text-xxs-base xs:text-xs-base text-gray-90 dark:text-gray-60 leading-relaxed'
                      : 'text-xxs-base xs:text-xs-base text-gray-60 leading-relaxed'
                  }
                >
                  <p className="m-0">
                    Индивидуальный предприниматель Букшев Игорь Владимирович · ОГРНИП
                    326784700178496 · ИНН 781102952900
                  </p>
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
                <nav
                  aria-label="Юридические документы"
                  className="border-gray-80/30 flex flex-wrap gap-x-4 gap-y-2 border-t pt-6"
                >
                  {legalDocumentLinks.map((link) => (
                    <Link
                      key={link.link}
                      className={legalDocLinkClass}
                      variant="hover"
                      href={link.link}
                      size="s"
                    >
                      {link.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
