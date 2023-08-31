import { FC } from 'react';
import Vacancy from 'components/vacancy/Vacancy';
import React from 'react';
import { vacancyList } from 'components/common/const';

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

  return <Vacancy id={id} />;
};

export default Page;
