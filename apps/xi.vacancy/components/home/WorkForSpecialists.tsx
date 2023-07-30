import { useState } from 'react';
import Image from 'next/image';
import NavOfSpecialties from '../common/NavOfSpecialties';
import { ProfessionsT, vacancyDescription } from '../common/const';

const WorkForSpecialists = () => {
  const [profession, setProfession] = useState<ProfessionsT>('development');

  return (
    <section className="p-4 sm:p-8 2xl:py-16 2xl:px-[48px]">
      <h2 className="leading-[110%] font-semibold text-[24px] mb-4 2xl:mb-8 sm:text-[48px] 2xl:text-[64px]">
        У нас есть работа для разных специалистов
      </h2>

      <NavOfSpecialties
        profession={profession}
        setProfession={setProfession}
        className="mb-[34px] sm:mb-[38px]"
      />

      <div className="xl:flex">
        <div className="xl:min-w-[460px] p-4 sm:p-[48px] rounded-[16px] sm:rounded-[24px] 2xl:rounded-[32px] bg-brand-80 mb-[16px] xl:mb-0 xl:mr-8 sm:mb-8 xl:flex xl:flex-col xl:justify-between xl:basis-[32%]">
          <h3 className="mb-[64px] mb-[58px] text-gray-0 text-[24px] sm:text-[48px] font-bold  2xl:text-[64px]">
            {vacancyDescription[profession].title}
          </h3>

          <a
            href="#"
            className="text-gray-0 text-[18px] sm:text-[22px] font-medium flex justify-between items-center mx-[6px] 2xl:mx-0"
          >
            Подробнее
            <Image
              width={36}
              height={36}
              quality={100}
              src="/icons/icon-right.svg"
              alt="More detailed"
              className="w-[24px] h-[24px] 2xl:w-[36px] 2xl:h-[36px]"
            />
          </a>
        </div>

        <div className="xl:basis-[66%]">
          <div className="p-4 sm:p-[24px] 2xl:p-[48px] rounded-[16px] sm:rounded-[24px] 2xl:rounded-[32px] bg-gray-10 mb-[16px] sm:mb-8">
            <h3 className="leading-[110%] text-[20px] font-semibold mb-2 sm:mb-8  sm:text-[32px] 2xl:text-[32px]">
              Что делаем
            </h3>

            <p className="h-[95px] xl:h-[110px] leading-[130%] text-[16px] sm:text-[24px] 2xl:text-[28px]">
              {vacancyDescription[profession].paragraph}
            </p>
          </div>

          <div className="p-4 sm:p-[24px] 2xl:p-[48px] rounded-[16px] sm:rounded-[24px] 2xl:rounded-[32px] bg-gray-10">
            <h3 className="leading-[110%] text-[20px] font-semibold mb-2 sm:mb-8 sm:text-[32px] 2xl:text-[32px]">
              Какой нужен опыт
            </h3>

            <p className="h-[95px] xl:h-[110px] leading-[130%] text-[16px] sm:text-[24px] 2xl:text-[28px]">
              {`Любой! У нас есть множество задач для ${vacancyDescription[profession].for} любого уровня`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkForSpecialists;
