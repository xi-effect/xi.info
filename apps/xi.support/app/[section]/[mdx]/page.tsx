import React from 'react';
import { pageConfig } from 'components/common/pageConfig';
import { MdxPage } from 'components/MdxPage';
import Layout from 'components/layout/Layout';

export const dynamicParams = false; // true | false,

type MdXPageT = {
  params: { section: string; mdx: string };
};

export async function generateStaticParams() {
  const itemsArray: { sectionId: string; mdxId: string }[] = [];
  pageConfig.forEach((item) => {
    item.links.forEach((link) =>
      itemsArray.push({ sectionId: item.showAllLink, mdxId: link.linkUrl }),
    );
  });

  console.log('itemsArray', itemsArray);

  return itemsArray.map((item) => ({
    section: item.sectionId,
    mdx: item.mdxId,
  }));
}

export default function Page({ params }: MdXPageT) {
  return (
    <Layout>
      <MdxPage sectionId={params.section} mdxId={params.mdx} />
    </Layout>
  );
}
