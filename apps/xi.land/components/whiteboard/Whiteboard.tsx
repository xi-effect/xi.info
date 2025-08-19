import { HorizontalFeatureCard, VerticalFeatureCard } from 'components/main/shared';

export const Whiteboard = () => (
  <div className="w-full max-w-[1600px] mx-auto bg-gray-0 grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-16">
    <VerticalFeatureCard
      title="Визуализация материала"
      description="Выделяйте ключевые моменты, легко объясняйте логику и связи"
      imageSrcDesktop="/assets/whiteboard/diagramContainer.svg"
      imageSrcMobile="/assets/whiteboard/diagramContainer.svg"
      imageBlockClassName="h-[250px]"
    />

    <VerticalFeatureCard
      title="Загрузка изображений"
      description="Делитесь страницами из учебников или полезными картинками"
      imageBlockClassName="h-[300px] sm:h-[450px]"
      imageSrcDesktop="/assets/whiteboard/videoCallInterface.webp"
      imageSrcMobile="/assets/whiteboard/videoCallInterface.webp"
      imageClassName="w-full absolute h-full object-cover "
    />

    <HorizontalFeatureCard
      title="Пространство вдохновения"
      description="Создавайте интересные и полезные уроки вместе с sovlium"
      imageSrcDesktop="/assets/whiteboard/space.webp"
      imageSrcMobile="/assets/whiteboard/space.webp"
      imageClassName="absolute left-4 top-4 sm:left-8 sm:top-8 w-full object-cover h-full object-left-top"
      isReversed
      isInverted
      textBlockClassName="lg:gap-6"
      imgBlockClassName="sm:h-120.5 h-87.5"
      buttonText="Попробовать бесплатно"
      buttonVariant="secondary"
      className="gap-y-0"
    />
  </div>
);
