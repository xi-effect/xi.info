/* eslint-disable react/jsx-no-useless-fragment */

import { Footer } from 'pkg.footer';
import Header from 'components/Header';
import { Title } from 'components/ProductPage/Title';
import { Items } from 'components/ProductPage/Items';

export const metadata = {
  title: 'продукт | xi.effect',
  description: 'Приложение для репетиторов и малого бизнеса',
};

export default function ProductPage() {
  return (
    <main className="flex flex-row h-full w-full min-h-[100vh] justify-center items-start bg-gray-0 overflow-x-hidden">
      <div className="flex flex-col w-full justify-start items-start">
        <Header />
        <Title />
        <Items />
        <Footer />
      </div>
    </main>
  );
}
