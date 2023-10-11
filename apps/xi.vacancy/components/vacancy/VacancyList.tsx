'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ProfessionsT, vacancyList } from '../common/const';
import NavOfSpecialties from '../common/NavOfSpecialties';
import SendResumeButton from '../modal/SendResumeButton';

const VacancyList = () => {
  const [profession, setProfession] = useState<ProfessionsT>('development');

  const listOnType = vacancyList.filter((vacancy) => vacancy.id.includes(profession));

  const vacancyCard = listOnType.map((vacancy, index) => (
    <Link className='group' key={index} href={`/vacancy/${vacancy.id}`}>
      <article className={index !== listOnType.length - 1 ? 'mb-[32px] sm:mb-[64px]' : ''}>
        <h2 className="leading-[120%] text-[24px] mb-[8px] sm:text-[32px] xl:text-[64px] group-hover:underline transition-all ease-in decoration-3 duration-500">
          {vacancy.title}
        </h2>

        <div className="flex leading-[120%] text-[16px] sm:text-[20px] xl:text-[24px]">
          <span className="mr-[22px] min-[390px]:mr-[32px]">Удалённо</span>

          <time className="text-gray-60 mr-[22px] min-[390px]:mr-[32px]">{vacancy.date}</time>

          <address className="text-gray-60">{vacancy.author.tg}</address>
        </div>
      </article>
    </Link>
  ));

  return (
    <section className="px-4 py-[20px] sm:p-8 sm:pb-0 xl:p-[48px] xl:pb-0">
      <h1 className="leading-[130%] font-bold mb-[24px] xl:mb-[40px] text-[32px] sm:text-[48px] xl:text-[96px]">
        Вакансии
      </h1>

      <NavOfSpecialties
        profession={profession}
        setProfession={setProfession}
        className="mb-[48px] sm:mb-16 xl:mb-[105px]"
      />

      <div
        className={`${
          listOnType.length ? 'max-h-[500px] duration-700' : 'py-[50px] duration-500'
        } transition-all`}
      >
        {listOnType.length ? (
          vacancyCard
        ) : (
          <>
            <h3 className="leading-[120%] mb-2 text-[32px] xl:text-[64px]">Вакансии отсутствуют</h3>

            <span className="text-[24px] leading-[120%]">Посмотрите другие разделы или</span>

            <SendResumeButton
              label="заполните форму"
              className="ml-[10px] text-[24px] bg-transparent underline border-none"
            />
          </>
        )}
      </div>
    </section>
  );
};

export default VacancyList;
