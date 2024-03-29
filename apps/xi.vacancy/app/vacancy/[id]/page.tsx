import React, { FC } from 'react';
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
  params: { id: string };
};

const Page: FC<PageT> = (props) => {
  const {
    params: { id },
  } = props;

  return (
    <Layout>
      <Vacancy id={id} />
    </Layout>
  );
};

export default Page;
