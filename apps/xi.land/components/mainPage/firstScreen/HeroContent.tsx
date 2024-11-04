import { Button } from '@xipkg/button';
import { LightningShape } from './LightningShape';
import { TextOutline } from './TextOutline';

export const HeroContent = () => (
  <div className="flex items-end xs:items-center xs:justify-center xl:px-16 md:justify-start mt-12 xs:mt-4 relative">
    <LightningShape />
    <div className="flex flex-col gap-2 xl:gap-4 py-8 relative xs:py-32 md:py-28 lg:py-0 w-full md:w-auto">
      <h1 className="text-h2 2xl:text-[80px] font-medium text-gray-0 flex flex-wrap -tracking-[.01em] md:flex-col xs:gap-x-4 leading-none">
        Проводите занятия
        <div>
          <TextOutline text="онлайн" />
        </div>
      </h1>
      <p className="text-xl-base text-gray-10 2xl:text-h5 leading-[31px] 2xl:leading-[41px] -tracking-[.01em]">
        Приложение для репетиторов и малого бизнеса
      </p>
      <div className="flex gap-2 xs:gap-8 mt-6 xl:mt-4 flex-col xs:flex-row">
        <Button
          variant="ghost"
          className="2xl:h-14 text-brand-80 w-full rounded-xl xl:rounded-2xl xl:px-8 xl:w-auto 2xl:text-l-base"
        >
          Записаться на демонстрацию
        </Button>
        <Button
          variant="secondary"
          className="2xl:h-14 w-full hover:border-gray-0 hover:bg-transparent active:bg-transparent focus:bg-transparent bg-transparent text-gray-0 rounded-xl xl:rounded-2xl xl:px-8 xl:w-auto 2xl:text-l-base"
        >
          Стать пользователем
        </Button>
      </div>
    </div>
  </div>
);
