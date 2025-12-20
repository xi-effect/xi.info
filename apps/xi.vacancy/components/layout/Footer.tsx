import Image from 'next/image';
import { Button } from '@xipkg/button';
import { Footer } from 'pkg.landing.footer';

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
      { link: 'https://sovlium.ru/calendar', title: 'Расписание' },
      { link: 'https://sovlium.ru/calls', title: 'Видеозвонки' },
      { link: 'https://sovlium.ru/whiteboard', title: 'Онлайн-доска' },
      { link: 'https://sovlium.ru/materials', title: 'Материалы' },
      { link: 'https://sovlium.ru/payments', title: 'Оплаты' },
    ],
  },
  {
    title: 'Клиентам',
    links: [
      { link: 'https://sovlium.ru/prices', title: 'Тарифы' },
      { link: 'https://t.me/sovlium_support_bot', title: 'Поддержка' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { link: 'https://sovlium.ru/about', title: 'О нас' },
      { link: 'https://sovlium.ru/blog', title: 'Блог' },
      { link: 'https://sovlium.ru/legal/terms', title: 'Документы' },
      { link: '/', title: 'Вакансии' },
    ],
  },
  {
    title: 'Социальные сети',
    links: [{ link: 'https://t.me/sovlium', title: 'Telegram' }],
  },
];

const TopContent = () => (
  <div className="mt-4 sm:mt-16">
    <div className="mx-auto px-8 2xl:px-[112px] max-w-[1920px]">
      <div className="py-4 sm:py-8 xl:py-[128px] sm:px-8 xl:px-[48px] xl:flex xl:content-center">
        <div className="mt-[10px] hidden xl:block relative before:rounded-b-full before:absolute before:top-[-140px] before:bg-gray-10 before:w-[240px] before:h-[140px] before:z-0 after:rounded-t-full after:absolute after:top-[240px] after:bg-gray-10 after:w-[240px] after:h-[140px] after:z-0">
          <Image
            width={789}
            height={1183}
            quality={100}
            alt="team working"
            src="/home/work-together.jpg"
            className="rounded-full w-[240px] h-[240px] object-cover mr-[167px] relative z-10"
          />
        </div>

        <div>
          <h2 className="leading-[130%] text-[24px] sm:text-[48px] xl:text-[64px] font-semibold mb-4 xl:mb-[24px]">
            Приходи работать вместе
          </h2>

          <p className="leading-[130%] mb-[10px] text-[16px] sm:text-[24px] xl:text-[32px] xl:mb-[24px] xl:w-[85%]">
            Напиши пару слов о себе и о том, какая вакансия может быть тебе интересна
          </p>

          <SendResumeModal>
            <Button className="w-[165px] xs:w-[200px] text-sm xs:text-base h-8 xs:h-12">
              Отправить резюме
            </Button>
          </SendResumeModal>
        </div>
      </div>
    </div>
  </div>
);

const VacancyFooter = () => {
  return (
    <Footer
      topContent={<TopContent />}
      sections={sections}
      logoPath="/assets/logofordark.svg"
      classNameFooter="bg-gray-100 rounded-t-[32px] xl:rounded-t-[64px]"
    />
  );
};

export default VacancyFooter;
