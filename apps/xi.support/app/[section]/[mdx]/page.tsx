import React from 'react';
import { sectionsConfig } from 'config/sectionsConfig';
import { MdxPage } from 'components/MdxPage';
import { Layout, HeaderDoc } from 'components/Common';
import { Link } from '@xipkg/link';
import { CallToAction } from 'components/HomePage';
import { pagesConfig } from 'config/pagesConfig';

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

export default function Page({ params }: MdXPageT) {
  const pageData = pagesConfig.find(
    (item) => item.page === params.mdx && item.section === params.section,
  );

  if (!pageData) return 404;

  return (
    <Layout>
      <HeaderDoc />
      <div className="flex flex-col w-screen justify-center items-center px-4 md:px-[32px] 2xl:px-[160px]">
        <div className="flex flex-row justify-center items-start gap-8 max-w-[1920px] w-full">
          <div className="sticky top-[-32px] h-fit min-w-[376px] hidden lg:flex flex-col">
            <span className="font-medium text-[24px] mt-16 text-gray-100"> Категории </span>
            <div className="w-full flex flex-col gap-4 mt-6">
              {pageData.anchors.map((item, index) => (
                <Link
                  variant="hover"
                  key={index.toString()}
                  className="font-medium text-[20px] text-gray-80"
                  href={`/${params.section}/${params.mdx}#${item.link}`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full">
            {/* <Breadcrumbs /> */}
            <MdxPage sectionId={params.section} mdxId={params.mdx} />
            <span className="font-medium text-[20px] text-gray-60 mt-4 md:mt-8">
              {`Обновлено ${pageData.updateDate}`}
            </span>
            {pageData.relatedLinks.length !== 0 && (
              <div className="mt-4 md:mt-8 rounded-2xl flex flex-col p-4 md:p-8 2xl:p-16 bg-gray-5">
                <span className="font-medium text-[24px]"> Все статьи по теме </span>
                <div className="grid grid-cols-1 xl:grid-cols-2 mt-4 md:mt-8 gap-4">
                  {pageData.relatedLinks.map((item, index) => (
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
            )}
            <CallToAction />
          </div>
        </div>
      </div>
    </Layout>
  );
}
