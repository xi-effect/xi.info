import React from 'react';
import Vacancy from 'components/vacancy/Vacancy';
import { vacancyList } from 'components/common/const';
import Layout from 'components/layout/Layout';

export const dynamicParams = false; // true | false,

export async function generateStaticParams() {
  return vacancyList.map((vacancy) => ({
    id: vacancy.id,
  }));
}

type PageT = {
  params: Promise<{
    id: string;
  }>;
};

const Page = async ({ params }: PageT) => {
  const { id } = await params;

  return (
    <Layout>
      <Vacancy id={id} />
    </Layout>
  );
};

export default Page;
