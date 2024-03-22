'use client';

import Header from 'components/layout/Header';
import Link from 'next/link';
import { Mail } from '@xipkg/icons';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-screen overflow-auto bg-[url('/not-found/background.png')] bg-no-repeat bg-auto xl:bg-cover">
      <Header />
      <main className="w-screen container max-w-[1920px] mx-auto px-8 sm:px-16 2xl:px-[160px] py-32 flex flex-col items-start justify-center">
        <h1 className="flex flex-col-reverse gap-x-1 sm:inline-block text-[40px] leading-[48px] sm:text-[48px] sm:leading-[62px] lg:text-[64px] font-medium text-gray-100 mb-4">
          Страница затерялась в облаках{' '}
          <span className="inline-block text-l leading-[100%] align-super lg:text-h5 font-bold text-gray-30">
            404
          </span>
        </h1>
        <div className="text-[20px] leading-[26px] lg:text-[30px] lg:leading-9 text-gray-80">
          В адресе есть ошибка или страница удалена
        </div>
        <div className="my-16">
          <div>
            Если ошибка повторяется — напишите нам об этом{' '}
            <a className="text-brand-80" href="mailto:xieffect@yandex.ru">
              <Mail className="inline-block fill-brand-80" />
              <span className='inline-block relative ml-1 after:block after:content-[""] after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-brand-20'>
                на электронную почту
              </span>
            </a>
          </div>
        </div>
        <div>
          Вернитесь{' '}
          <button
            type="button"
            className='inline-block border-none outline-none bg-transparent relative text-brand-80 after:block after:content-[""] after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-brand-20'
            onClick={router.back}
          >
            назад
          </button>{' '}
          или{' '}
          <Link
            className='inline-block relative text-brand-80 after:block after:content-[""] after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-brand-20'
            href="/"
          >
            на главную
          </Link>
        </div>
      </main>
    </div>
  );
}
