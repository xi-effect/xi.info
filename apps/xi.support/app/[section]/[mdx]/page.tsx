import React from 'react';
import { sectionsConfig } from 'config/sectionsConfig';
import { MdxPage } from 'components/MdxPage';
import { Layout, HeaderDoc } from 'components/Common';
import { Link } from '@xipkg/link';
import { CallToAction } from 'components/HomePage';

export const dynamicParams = false; // true | false,

type MdXPageT = {
  params: { section: string; mdx: string };
};

export async function generateStaticParams() {
  const itemsArray: { sectionId: string; mdxId: string }[] = [];
  sectionsConfig.forEach((item) => {
    item.links.forEach((link) =>
      itemsArray.push({ sectionId: item.sectionName, mdxId: link.pageUrl }),
    );
  });

  console.log('itemsArray', itemsArray);

  return itemsArray.map((item) => ({
    section: item.sectionId,
    mdx: item.mdxId,
  }));
}

const page = {
  updateData: '07.05.2024',
  anchors: [
    {
      title: 'Начало работы',
      link: '#',
    },
    {
      title: 'Задания',
      link: '#',
    },
    {
      title: 'Тесты',
      link: '#Какунасдела?',
    },
    {
      title: 'Чат',
      link: '#',
    },
  ],

  relatedLinks: [
    {
      title: 'Инструкция: как настроить xi.effect под себя',
      link: '#',
    },
    {
      title: 'Как перевести команду в xi.effect',
      link: '#',
    },
    {
      title: 'Что такое xi.effect',
      link: '#',
    },
    {
      title: 'Безопасность в xi.effect',
      link: '#',
    },
    {
      title: 'О внедрении',
      link: '#',
    },
    {
      title: 'Инструкция для новичков',
      link: '#',
    },
    {
      title: 'Первые шаги в системе',
      link: '#',
    },
  ],
};

const Breadcrumbs = () => {
  return <div className="flex flex-row mt-[48px]"> 1 </div>;
};

export default function Page({ params }: MdXPageT) {
  return (
    <Layout>
      <HeaderDoc />
      <div className="flex flex-col w-screen justify-center items-center px-4 md:px-[32px] 2xl:px-[160px]">
        <div className="flex flex-row gap-8 max-w-[1920px]">
          <div className="sticky top-[-32px] h-fit min-w-[376px] hidden xl:flex flex-col">
            <span className="font-medium text-[24px] mt-16 text-gray-100"> Категории </span>
            <div className="w-full flex flex-col gap-4 mt-6">
              {page.anchors.map((item, index) => (
                <Link
                  variant="hover"
                  key={index.toString()}
                  className="font-medium text-[20px] text-gray-80"
                  href={item.link}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            {/* <Breadcrumbs /> */}
            <MdxPage sectionId={params.section} mdxId={params.mdx} />
            <span className="font-medium text-[20px] text-gray-60 mt-4 md:mt-8">
              {`Обновлено ${page.updateData}`}
            </span>
            <div className="mt-4 md:mt-8 rounded-2xl flex flex-col p-4 md:p-8 2xl:p-16 bg-gray-5">
              <span className="font-medium text-[24px]"> Все статьи по теме </span>
              <div className="grid grid-cols-1 xl:grid-cols-2 mt-4 md:mt-8 gap-4">
                {page.relatedLinks.map((item, index) => (
                  <Link
                    variant="hover"
                    key={index.toString()}
                    className="xl:basis-1/2 font-medium text-[14px] md:text-[20px] text-gray-80"
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <CallToAction />
          </div>
        </div>
      </div>
    </Layout>
  );
}
