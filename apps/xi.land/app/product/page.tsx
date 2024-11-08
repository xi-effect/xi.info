import { Items, Title } from 'components/productPage';

export const metadata = {
  title: 'продукт | xi.effect',
  description: 'Приложение для репетиторов и малого бизнеса',
};

export default function ProductPage() {
  return (
    <main className="flex flex-row h-full w-full min-h-[100vh] justify-center items-start bg-gray-0 overflow-x-hidden">
      <div className="flex flex-col w-full justify-start items-start mt-32">
        <Title />
        <Items />
      </div>
    </main>
  );
}
