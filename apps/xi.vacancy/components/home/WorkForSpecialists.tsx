'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tabs } from '@xipkg/tabs';
import { vacancyDescription, professions } from '../common/const';

const WorkForSpecialists = () => {
  const [tabsValue, setTabsValue] = useState('development');

  const currentProfession = professions.filter((el) => el.type === tabsValue);

  return (
    <section className="p-4 sm:p-8 2xl:py-16 2xl:px-[48px]">
      <h2 className="leading-[110%] font-semibold text-[24px] mb-4 2xl:mb-8 sm:text-[48px] 2xl:text-[64px]">
        У нас есть работа для разных специалистов
      </h2>

      <div className="mt-8 overflow-auto pb-2 md:pb-6">
        <Tabs.Root onValueChange={(value) => setTabsValue(value)} defaultValue="development">
          <Tabs.List
            className="border-0 gap-6 md:gap-12"
            classNameShadow={`h-0.5 rounded-none bg-${currentProfession[0].color}`}
          >
            {professions.map((el, index) => (
              <Tabs.Trigger
                style={{
                  color: tabsValue === el.type ? `var(--xi-${professions[index].color})` : '',
                }}
                className="text-[16px] md:leading-[17.6px] md:text-[32px] leading-[35.2px] grow-0 pb-0 md:pb-2 transition-colors"
                key={index}
                value={el.type}
              >
                {el.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>
      </div>

      <div className="xl:flex mt-4">
        <Link
          href={`/vacancy?type=${currentProfession[0].type}`}
          style={{ backgroundColor: `var(--xi-${currentProfession[0].color})` }}
          className="transition-colors xl:min-w-[480px] p-4 sm:p-[48px] rounded-[16px] sm:rounded-[24px] 2xl:rounded-[32px] mb-[16px] xl:mb-0 xl:mr-8 sm:mb-8 flex flex-col xl:justify-between xl:basis-[36%]"
        >
          <h3 className="mb-[64px] text-gray-0 text-[24px] sm:text-[48px] font-bold  2xl:text-[64px]">
            {vacancyDescription[tabsValue].title}
          </h3>

          <span className="text-gray-0 text-[18px] sm:text-[22px] font-medium flex justify-between items-center mx-[6px] 2xl:mx-0">
            Подробнее
            <Image
              width={36}
              height={36}
              quality={100}
              src="/iconssite/icon-right.svg"
              alt="More detailed"
              className="w-[24px] h-[24px] 2xl:w-[36px] 2xl:h-[36px]"
            />
          </span>
        </Link>

        <div className="xl:basis-[66%]">
          <div className="p-4 sm:p-[24px] 2xl:p-[48px] rounded-[16px] sm:rounded-[24px] 2xl:rounded-[32px] bg-gray-10 mb-[16px] sm:mb-8">
            <h3 className="leading-[110%] text-[20px] font-semibold mb-2 sm:mb-8  sm:text-[32px] 2xl:text-[32px]">
              Что делаем
            </h3>

            <p className="h-[95px] xl:h-[100px] leading-[130%] text-[16px] sm:text-[24px] 2xl:text-[28px]">
              {vacancyDescription[tabsValue].paragraph}
            </p>
          </div>

          <div className="p-4 sm:p-[24px] 2xl:p-[48px] rounded-[16px] sm:rounded-[24px] 2xl:rounded-[32px] bg-gray-10">
            <h3 className="leading-[110%] text-[20px] font-semibold mb-2 sm:mb-8 sm:text-[32px] 2xl:text-[32px]">
              Какой нужен опыт
            </h3>

            <p className="h-[95px] xl:h-[100px] leading-[130%] text-[16px] sm:text-[24px] 2xl:text-[28px]">
              {`Любой! У нас есть множество задач для ${vacancyDescription[tabsValue].for} любого уровня`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkForSpecialists;
