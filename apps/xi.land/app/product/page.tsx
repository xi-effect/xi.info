import { Footer } from 'pkg.footer';
import Header from 'components/Header';

const featchersData = [
  {
    title: 'Задания и тесты',
    image: ''
  }
]

export default function ProductPage() {
  return (
    <main className="flex flex-row h-full w-full min-h-[100vh] justify-center items-start bg-gray-0 overflow-x-hidden">
      <div className="flex flex-col w-full justify-start items-start">
        <Header />
          1
        <Footer />
      </div>
    </main>
  );
}
