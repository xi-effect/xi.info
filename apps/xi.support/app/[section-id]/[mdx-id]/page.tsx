import { Page } from 'components/document/Page';
import React from 'react';
import { vacancyList } from 'components/common/const';
import Layout from 'components/layout/Layout';

export const dynamicParams = false; // true | false,

export async function generateStaticParams() {
  return vacancyList.map((vacancy) => ({
    id: vacancy.id,
  }));
}

type PageT = {
  params: { id: string };
};

const MDXPage = ({ params }: PageT) => {
  const { id } = params;

  return (
    <Layout>
      <Page id={id} />
    </Layout>
  );
};

export default MDXPage;
