import { Footer } from 'pkg.footer';
import Header from 'components/Header';
import { Link } from '@xipkg/link';

export default function AboutUsPage() {
  return (
    <main className="flex flex-row h-full w-full min-h-[100vh] justify-center items-start bg-gray-0 overflow-x-hidden">
      <div className="flex flex-col w-full justify-start items-start">
        <Header />
        <div className="flex flex-col justify-center items-center w-full p-4 md:p-8 2xl:p-[160px]">
          <div className="w-full max-w-[1920px] flex flex-col justify-start items-start">
            <div className="md:h-[104px] flex flex-col md:justify-center md:items-center md:flex-row gap-4 2xl:gap-16">
              <span className="font-medium text-[32px] md:text-[48px] 2xl:text-[80px] md:leading-[104px]">
                Мы — xi.effect
              </span>
              <span className="text-[16px] md:text-[20px] 2xl:text-[24px] md:w-[600px] leading-[32px] text-gray-80">
                Мы заботливо создаём продукт для репетиторов и малого бизнеса
              </span>
            </div>
            <span className="text-[14px] md:text-[20px] 2xl:text-[24px] mt-[64px]">
              Команда энтузиастов — разработчиков, дизайнеров, менеджеров и тестировщиков трудится
              над этим продуктом. Мы хотим сделать качественный инструмент для репетиторов
              и их студентов, повысить эффективность и комфорт образовательного процесса.
              Для нас это важно, ведь учёба — неотъемлемая часть жизни любого человека.
              <br />
              <br />
              Мы открыты к сотрудничеству —{' '}
              <Link
                className="text-[14px] md:text-[20px] 2xl:text-[24px]"
                href="mailto:hello@xieffect.ru"
              >
                hello@xieffect.ru
              </Link>
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
