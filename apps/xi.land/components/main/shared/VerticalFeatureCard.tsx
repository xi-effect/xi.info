import { motion } from 'motion/react';
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
  motionConfig?: {
    initial?: any;
    animate?: any;
    transition?: any;
  };
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
  motionConfig,
}: VerticalFeatureCardPropsT) => (
  <motion.div
    className="flex flex-col gap-4 rounded-2xl sm:rounded-4xl bg-gray-5 col-span-2 md:col-span-1 w-full h-full"
    {...motionConfig}
  >
    {/* md:aspect-[768/660] */}
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
        className={cn('rounded-tl-2xl rounded-br-4xl object-contain', imageClassName)}
        style={{ ...imageStyle }}
      />
    </div>
    <div className="flex flex-col gap-4 lg:gap-4 p-4 sm:p-8 md:pt-4 xl:pt-8 ">
      <h4 className="text-xl-base sm:text-h5 sm:font-medium lg:text-[40px] font-semibold sm:leading-[1.1] leading-[1.2] text-gray-100">
        {title}
      </h4>
      <p className="text-m-base sm:text-l-base lg:text-xl-base lg:leading-[1.3] text-gray-80">
        {description}
      </p>
    </div>
  </motion.div>
);
