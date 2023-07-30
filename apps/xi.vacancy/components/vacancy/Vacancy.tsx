import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';
import { ProfessionOptionsT, professions, vacancyList } from '../common/const';

type VacancyT = {
  id: string;
};

const Vacancy: FC<VacancyT> = (props) => {
  const { id } = props;

  const [profession, vacancy] = id.split('_');

  const MDX = dynamic(() => import(`markdown/${vacancy}.mdx`));

  const { title, grade, author }: ProfessionOptionsT = vacancyList[profession].find(
    (v) => v.id === vacancy,
  );

  return (
    <section className=" px-4 sm:px-8 xl:p-[48px] xl:pb-0">
      <Link
        href="/vacancy"
        className="leading-[110%] text-brand-80 text-[16px] mb-2 xl:mb-4 sm:text-[24px] xl:text-[32px]"
      >
        {professions[profession]}
      </Link>

      <h1 className="leading-[130%] font-bold text-[32px] sm:text-[48px] xl:text-[96px] mb-[32px] xl:mb-[48px]">
        {title}
      </h1>

      <div className="xl:flex">
        <div className="xl:basis-[77%] xl:mr-8">
          <MDX />
        </div>

        <div className="pt-4 xl:basis-[25%]">
          <div className="flex flex-col mb-4">
            <span className="leading-[130%] text-[16px] sm:text-[20px]">Формат работы</span>
            <span className="leading-[130%] text-[20px] sm:text-[24px] font-semibold mb-4 sm:mb-8">
              Дистанционный
            </span>

            <span className="leading-[130%] text-[16px] sm:text-[20px]">Уровень</span>
            <span className="leading-[130%] text-[20px] sm:text-[24px] font-semibold mb-4 sm:mb-8">
              {grade}
            </span>

            <span className="leading-[130%] text-[16px] sm:text-[20px]">График работы</span>
            <span className="leading-[130%] text-[20px] sm:text-[24px] font-semibold">
              Гибридный
            </span>
          </div>

          <span className="leading-[130%] text-[16px] sm:text-[20px] mb-2">Кто ищет</span>

          <div className="flex mb-4 sm:mb-8">
            <Image
              width={2156}
              height={1412}
              src={author.src}
              alt={author.name}
              className="object-cover rounded-full w-[64px] h-[64px] mr-4"
            />

            <div className="flex flex-col justify-center">
              <span className="leading-[130%] text-[20px] sm:text-[24px] font-semibold">
                {author.name}
              </span>
              <span className="leading-[130%] text-[16px] sm:text-[20px] text-gray-80">
                {author.name}
              </span>
            </div>
          </div>

          <span className="leading-[130%] text-16px sm:text-[20px] block">Телеграм</span>
          <a
            target="_blank"
            rel="noreferrer"
            className="leading-[130%] text-[20px] sm:text-[24px] font-semibold"
            href={`https://t.me/${author.tg.split('@')[1]}`}
          >
            {author.tg}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Vacancy;