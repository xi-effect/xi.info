import { useState } from 'react';
import Image from 'next/image';
import NavOfSpecialties from '../common/NavOfSpecialties';
import { ProfessionsT, vacancyDescription } from '../common/const';

const WorkForSpecialists = () => {
  const [profession, setProfession] = useState<ProfessionsT>('development');

  return (
    <section className="py-8 px-4 sm:px-0  xl:p-16">
      <h2 className="leading-[110%] font-semibold text-[32px] mb-16 sm:text-[64px] xl:text-[80px]">
        У нас есть работа для разных специалистов
      </h2>

      <NavOfSpecialties className="mb-16" setProfession={setProfession} profession={profession} />

      <div className="xl:flex">
        <div className="p-[24px] sm:p-[48px] rounded-[16px] bg-brand-80 mb-[16px] xl:mb-0 xl:mr-16 sm:mb-16 xl:flex xl:flex-col xl:justify-between xl:basis-[50%] 2xl:basis-[42%]">
          <h3 className="mb-[128px] text-gray-0 text-[32px] font-bold sm:text-[72px] 2xl:text-[80px]">
            {vacancyDescription[profession].title}
          </h3>

          <a
            href="#"
            className="text-gray-0 text-[16px] sm:text-[22px] font-medium flex justify-between items-center mx-[12px]"
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
              {vacancyDescription[profession].paragraph}
            </p>
          </div>

          <div className="p-[24px] sm:p-[48px] rounded-[16px] bg-gray-10">
            <h3 className="text-[24px] font-semibold mb-[32px] sm:mb-[15px] sm:text-[40px] 2xl:text-[48px]">
              Какой нужен опыт
            </h3>

            <p className="sm:w-[90%]  leading-[130%] text-[16px] sm:text-[32px] 2xl:text-[40px]">
              {`Любой! У нас есть множество задач для ${vacancyDescription[profession].for} любого уровня`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkForSpecialists;
