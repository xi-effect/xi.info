import { FC } from 'react';
import Vacancy from 'components/vacancy/Vacancy';

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
