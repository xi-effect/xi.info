import { Items, Title } from 'components/productPage';

export const metadata = {
  title: 'Возможности | xi.effect для онлайн-обучения',
  description:
    'Чаты, тесты, видеоконференции и управление доступом — всё, что нужно для эффективного обучения.',
  openGraph: {
    title: 'Возможности | xi.effect для онлайн-обучения',
    description:
      'Чаты, тесты, видеоконференции и управление доступом — всё, что нужно для эффективного обучения.',
    url: 'https://xieffect.ru',
    siteName: 'xi.effect',
    images: [
      {
        url: 'https://xieffect.ru/opengh.png', // Must be an absolute URL
        width: 512,
        height: 512,
      },
    ],
    type: 'website',
  },
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
