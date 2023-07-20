import { useState } from 'react';
import Image from 'next/image';

const aboutProfession = [
  {
    title: 'Разработка',
    for: 'разработчиков',
    paragraph:
      'В Xi.effect продуктовая разработка. Есть куча инженерных задач и технических вызовов для умного человека',
  },
  {
    title: 'Дизайн',
    for: 'дизайнеров',
    paragraph:
      'В Xi.effect продуктовая разработка. Есть множество интересных задач и вызовов для дизайнеров',
  },
  {
    title: 'Продукт',
    for: 'менеджеров',
    paragraph:
      'В Xi.effect продуктовая разработка. Нужно продумывать то, как будет развиваться продукт',
  },
  {
    title: 'Маркетинг',
    for: 'менеджеров',
    paragraph:
      'Xi.effect - продуктовая команда. Необходимо развивать общение с клиентами  позиционирование бренда',
  },
];

const WorkForSpecialists = () => {
  const [profession, setProfession] = useState<number>(0);

  return (
    <section className="py-8 px-4 sm:px-0  xl:p-16">
      <h2 className="leading-[110%] font-semibold text-[32px] mb-16 sm:text-[64px] xl:text-[80px]">
        У нас есть работа для разных специалистов
      </h2>

      <div className="h-[35px] sm:h-[65px] mb-16 overflow-hidden">
        <div className="flex pb-8 mx-[-32px] overflow-x-auto">
          <button
            type="button"
            onClick={() => setProfession(0)}
            className={`${
              profession === 0 && 'text-brand-80 underline'
            }  mx-[32px] text-[24px] sm:text-[48px]`}
          >
            Разработка
          </button>

          <button
            type="button"
            onClick={() => setProfession(1)}
            className={`${
              profession === 1 && 'text-brand-80 underline'
            }  mx-[32px] text-[24px] sm:text-[48px]`}
          >
            Дизайн
          </button>

          <button
            type="button"
            onClick={() => setProfession(2)}
            className={`${
              profession === 2 && 'text-brand-80 underline'
            }  mx-[32px] text-[24px] sm:text-[48px]`}
          >
            Продукт
          </button>

          <button
            type="button"
            onClick={() => setProfession(3)}
            className={`${
              profession === 3 && 'text-brand-80 underline'
            }  mx-[32px] text-[24px] sm:text-[48px]`}
          >
            Маркетинг
          </button>
        </div>
      </div>

      <div className="xl:flex">
        <div className="p-[24px] sm:p-[48px] rounded-[16px] bg-brand-80 mb-[16px] xl:mb-0 xl:mr-16 sm:mb-16 xl:flex xl:flex-col xl:justify-between xl:basis-[50%] 2xl:basis-[42%]">
          <h3 className="mb-[128px] text-gray-0 text-[32px] font-bold sm:text-[72px] 2xl:text-[80px]">
            {aboutProfession[profession].title}
          </h3>

          <a
            href="#"
            className="text-gray-0 text-[16px] font-medium flex justify-between items-center mx-[12px]"
          >
            Подробнее
            <Image
              width={36}
              height={36}
              quality={100}
              className="w-[36px] h-[36px]"
              src="/icons/icon-right.svg"
              alt="More detailed"
            />
          </a>
        </div>

        <div className="xl:basis-[48%] 2xl:basis-[58%]">
          <div className="p-[24px] sm:p-[48px] rounded-[16px] bg-gray-10 mb-[16px] sm:mb-16">
            <h3 className="text-[24px] font-semibold mb-[32px] sm:mb-[15px]  sm:text-[40px] 2xl:text-[48px]">
              Что делаем
            </h3>

            <p className=" leading-[130%] text-[16px] sm:text-[32px] 2xl:text-[40px]">
              {aboutProfession[profession].paragraph}
            </p>
          </div>

          <div className="p-[24px] sm:p-[48px] rounded-[16px] bg-gray-10">
            <h3 className="text-[24px] font-semibold mb-[32px] sm:mb-[15px] sm:text-[40px] 2xl:text-[48px]">
              Какой нужен опыт
            </h3>

            <p className="sm:w-[90%]  leading-[130%] text-[16px] sm:text-[32px] 2xl:text-[40px]">
              {`Любой! У нас есть множество задач для ${aboutProfession[profession].for} любого уровня`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkForSpecialists;
