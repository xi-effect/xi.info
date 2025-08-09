import { HorizontalFeatureCard, VerticalFeatureCard } from 'components/main/shared';

export const Materials = () => (
  <div className="w-full max-w-[1600px] mx-auto bg-gray-0 grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-16">
    <VerticalFeatureCard
      title="Порядок и структура"
      description="Быстро находите нужное"
      imageSrcDesktop="/assets/materials/structure.webp"
      imageSrcMobile="/assets/materials/structure.webp"
      imageClassName="absolute left-8 top-8 w-full"
      imageBlockClassName="h-[250px]"
    />

    <VerticalFeatureCard
      title="Хранилище файлов"
      description="Загрузите всё один раз. А потом просто делитесь файлами"
      imageSrcDesktop="/assets/materials/files.webp"
      imageSrcMobile="/assets/materials/files.webp"
      imageClassName="relative md:absolute sm:px-16 2xl:pt-16"
    />

    <HorizontalFeatureCard
      title="Редактор статей"
      description="Выходите на новый уровень — пишите учебные статьи с иллюстрациями и создавайте свою методику преподавания"
      imageSrcDesktop="/assets/materials/dropdown.svg"
      imageSrcMobile="/assets/materials/dropdown.svg"
      imageClassName="absolute w-[240px] top-4 sm:top-8 md:relative md:top-0 2xl:absolute xl:bottom-0 xl:top-auto sm:w-[425px]"
      imgBlockClassName="h-[300px] sm:h-[450px] md:items-start"
    />

    <HorizontalFeatureCard
      title="Удобная рабочая среда"
      description="Облегчите свой труд вместе с sovlium"
      imageSrcDesktop="/assets/materials/workSpace.svg"
      imageSrcMobile="/assets/materials/workSpace_m.svg"
      imageClassName="absolute left-4 top-4 sm:left-8 sm:top-8 w-full object-cover h-full object-left-top rounded-tl-lg sm:rounded-tl-2xl lg:rounded-tl-3xl"
      reverse
      bg="bg-brand-80"
      descrClassname="text-brand-0"
      imgBlockClassName="sm:h-[450px]"
      buttonText="Попробовать бесплатно"
      buttonVariant="secondary"
      className="gap-y-0"
    />
  </div>
);
