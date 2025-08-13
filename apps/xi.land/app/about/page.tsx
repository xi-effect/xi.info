export const metadata = {
  title: 'Наша команда и вакансии в sovlium team',
  description: 'Узнайте о нас больше и присоединяйтесь к команде.',
  openGraph: {
    title: 'Наша команда и вакансии в sovlium team',
    description: 'Узнайте о нас больше и присоединяйтесь к команде.',
    url: 'https://sovlium.ru',
    siteName: 'sovlium',
    images: [
      {
        url: 'https://sovlium.ru/web-app-manifest-512x512.png', // Must be an absolute URL
        width: 512,
        height: 512,
      },
    ],
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="flex flex-row h-full w-full min-h-[100vh] justify-center items-start bg-gray-0 overflow-x-hidden">
      <div className="flex flex-col w-full justify-start items-start mt-32">
        <h1 className="p-8 text-h5"> Мы пока работаем над этой страницей 😔</h1>
      </div>
    </main>
  );
}
