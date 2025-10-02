import { cn } from '@xipkg/utils';

const fontSticker =
  'font-family-marker-hand font-normal text-m-base xs:text-l-base sm:text-xl-base lg:text-h5';

const getVioletStickerContent = () => {
  return (
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
  );
};

const getGreenStickerContent = () => {
  return (
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
  );
};

const getYellowStickerContent = () => {
  return (
    <div
      className={cn(
        fontSticker,
        'h-full flex flex-col items-start justify-center sm:justify-start gap-4 sm:gap-6',
      )}
    >
      <div>Соберите материалы и учеников в одной платформе — и обретите дзен</div>
      <div>Ваши знания бесценны. Делитесь ими с комфортом</div>
    </div>
  );
};

export const contentStickers = {
  violetSticker: getVioletStickerContent(),
  greenSticker: getGreenStickerContent(),
  yellowSticker: getYellowStickerContent(),
};
