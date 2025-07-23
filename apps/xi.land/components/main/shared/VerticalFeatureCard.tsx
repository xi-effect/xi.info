import { cn } from '@xipkg/utils';
import { ResponsiveImage } from './ResponsiveImage';

type VerticalFeatureCardPropsT = {
  title: string;
  description: string;
  imageAlt?: string;
  imageSrcMobile: string;
  imageSrcDesktop: string;
  imageClassName?: string;
  imageBlockClassName?: string;
  imageStyle?: React.CSSProperties;
};

export const VerticalFeatureCard = ({
  title,
  description,
  imageAlt,
  imageSrcMobile,
  imageSrcDesktop,
  imageClassName,
  imageStyle,
  imageBlockClassName,
}: VerticalFeatureCardPropsT) => (
  <div className="flex flex-col gap-4 rounded-2xl sm:rounded-4xl bg-gray-5 col-span-2 md:col-span-1 justify-between md:aspect-[768/660]">
    <div
      className={cn(
        'relative p-4 sm:p-8 overflow-hidden h-[350px] sm:h-[450px] md:h-auto justify-center align-middle flex md:aspect-[768/450]',
        imageBlockClassName,
      )}
    >
      <ResponsiveImage
        alt={imageAlt ?? 'image description'}
        srcMobile={imageSrcMobile}
        srcDesktop={imageSrcDesktop}
        className={cn('rounded-tl-2xl rounded-br-4xl', imageClassName)}
        style={{ objectFit: 'contain', ...imageStyle }}
      />
    </div>
    <div className="flex flex-col gap-2 lg:gap-4 p-4 sm:p-8">
      <h4 className="text-l-base-line-height sm:text-xl-base-line-height 2xl:text-[40px] font-medium leading-[1.3]">
        {title}
      </h4>
      <p className="text-l-base 2xl:text-xl-base leading-[1.3]">{description}</p>
    </div>
  </div>
);
