'use client';
import Header from 'components/layout/Header';
import Link from 'next/link';
import { Telegram, Mail } from '@xipkg/icons';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <main
          className={
            "h-screen overflow-auto bg-[url('/not-found/background.png')] bg-no-repeat bg-cover"
          }
        >
          {' '}
          <div className='w-screen container max-w-[1920px] mx-auto px-4 sm:px-8 2xl:px-[160px]'>
            <Header />
            <div className="py-32 flex flex-col items-start justify-center"> 
              <div className="flex items-start gap-x-1 mb-4">
                <h1 className="text-h1 text-gray-100">Страница затерялась в облаках</h1>
                <span className="text-h5 font-bold text-gray-30">404</span>
              </div>
              <div className="text-[30px] leading-9 text-gray-80">
                В адресе есть ошибка или страница удалена
              </div>
              <div className="my-16">
                {' '}
                <div>Если ошибка повторяется — напишите нам об этом</div>
                <div>
                  в{' '}
                  <Link className="text-brand-80" href="https://t.me/xieffect">
                    <Telegram className="inline-block fill-brand-80" />
                    <span className='inline-block relative ml-1 after:block after:content-[""] after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-brand-20'>
                      чат Telegram
                    </span>
                  </Link>{' '}
                  или{' '}
                  <Link className="text-brand-80" href="">
                    <Mail className="inline-block fill-brand-80" />
                    <span className='inline-block relative ml-1 after:block after:content-[""] after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-brand-20'>
                      на электронную почту
                    </span>
                  </Link>
                </div>
              </div>
              <div>
                Вернитесь{' '}
                <button
                  className='inline-block border-none outline-none relative text-brand-80 after:block after:content-[""] after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-brand-20'
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
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
