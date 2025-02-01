import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';
import { vacancyList } from '../common/const';

type VacancyT = {
  id: string;
  Post: any;
};

const Vacancy: FC<VacancyT> = (props) => {
  const { id, Post } = props;

  const vacancy = vacancyList.find((v) => v.id === id);

  if (!vacancy) return null;

  const { author } = vacancy;

  return (
    <section className=" px-4 sm:px-8 xl:p-[48px] xl:pb-0">
      <Link
        href="/vacancy"
        className="leading-[110%] text-brand-80 text-[16px] mb-2 xl:mb-4 sm:text-[24px]"
      >
        {vacancy.label}
      </Link>

      <h1 className="leading-[130%] font-bold text-[32px] sm:text-[48px] xl:text-[72px] mb-[32px] xl:mb-[48px]">
        {vacancy.title}
      </h1>

      <div className="xl:flex">
        <div className="xl:basis-[77%] xl:mr-8">
          <Post />
        </div>

        <div className="pt-4 xl:basis-[25%]">
          <div className="flex flex-col mb-4">
            <span className="leading-[130%] text-[16px] sm:text-[20px]">Формат работы</span>
            <span className="leading-[130%] text-[20px] sm:text-[24px] font-semibold mb-4 sm:mb-8">
              Дистанционный
            </span>

            <span className="leading-[130%] text-[16px] sm:text-[20px]">Уровень</span>
            <span className="leading-[130%] text-[20px] sm:text-[24px] font-semibold mb-4 sm:mb-8">
              {vacancy.grade}
            </span>

            <span className="leading-[130%] text-[16px] sm:text-[20px]">График работы</span>
            <span className="leading-[130%] text-[20px] sm:text-[24px] font-semibold">Гибкий</span>
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
                {author.grade}
              </span>
            </div>
          </div>

          <span className="leading-[130%] text-[16px] sm:text-[20px] block">Телеграм</span>
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
