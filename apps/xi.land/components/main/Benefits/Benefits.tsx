import { cn } from '@xipkg/utils';

import { Sticker } from './Sticker';

export const Benefits = () => {
  const fontSticker =
    'font-marker-hand font-normal text-m-base xs:text-l-base sm:text-xl-base lg:text-h5';

  return (
    <section
      className="relative w-full min-h-screen lg:min-h-[915px] overflow-hidden flex items-center justify-center bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/main/benefits/bg_benefits.svg')" }}
    >
      <div className="relative z-10 w-full mx-auto">
        <div className="h-full w-full grid grid-cols-1 auto-rows-min gap-[10px] sm:grid-cols-3 sm:grid-rows-2 sm:gap-6 items-stretch sm:place-content-center">
          <Sticker className="row-start-1" type="violetSticker">
            <div
              className={cn(
                fontSticker,
                'h-full flex flex-col items-center justify-center text-center xs:gap-2',
              )}
            >
              <div>Быстрый переход между инструментами</div>
              <div>+</div>
              <div>Единая рабочая среда</div>
              <div>=</div>
              <div>Экономия до 2 часов в неделю</div>
            </div>
          </Sticker>

          <Sticker
            className="col-start-2 row-start-2 xs:row-start-3 xs:col-start-1 sm:row-start-2 sm:col-start-2 sm:-translate-y-[20%] lg:-translate-y-[50%]"
            type="greenSticker"
          >
            <div
              className={cn(
                fontSticker,
                'h-full flex flex-col items-start justify-center sm:justify-start gap-2 xs:gap-3 sm:gap-6 lg:gap-8',
              )}
            >
              <div>Ход опыта:</div>
              <div>Шаг 1. Настройте платформу</div>
              <div>Шаг 2. Удалите из преподавания скуку и рутину</div>
              <div>Шаг 3. Оставьте главное — удовольствие от того, что ученик понял тему</div>
            </div>
          </Sticker>

          <Sticker
            className="row-start-3 xs:row-start-2 xs:col-start-2 sm:row-start-1 sm:col-start-3"
            type="yellowSticker"
          >
            <div
              className={cn(
                fontSticker,
                'h-full flex flex-col items-start justify-center sm:justify-start gap-4 sm:gap-6',
              )}
            >
              <div>Соберите материалы и учеников в одной платформе — и обретите дзен</div>
              <div>Ваши знания бесценны. Делитесь ими с комфортом</div>
            </div>
          </Sticker>
        </div>
      </div>
    </section>
  );
};
