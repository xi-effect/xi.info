'use client';

import { Button, buttonVariants } from '@xipkg/button';

import { cn } from '@xipkg/utils';
import type { VariantProps } from 'class-variance-authority';
import { ResponsiveImage } from './ResponsiveImage';

type HorizontalFeatureCardPropsT = {
  title: string;
  description: string;
  imageAlt?: string;
  imageClassName?: string;
  imageStyle?: React.CSSProperties;
  imageSrcMobile: string;
  imageSrcDesktop: string;
  reverse?: boolean;
  bg?: string;
  descrClassname?: string;
  imgBlockClassName?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonVariant?: VariantProps<typeof buttonVariants>['variant'];
  className?: string;
};

export const HorizontalFeatureCard = ({
  title,
  description,
  imageSrcDesktop,
  imageSrcMobile,
  imageAlt = '',
  imageClassName = '',
  imageStyle = {},
  reverse = false,
  bg = 'bg-gray-5',
  descrClassname,
  imgBlockClassName,
  buttonText,
  buttonVariant,
  onButtonClick,
  className = '',
}: HorizontalFeatureCardPropsT) => (
  <div
    className={cn(
      'flex flex-col col-span-2 gap-y-8 lg:gap-y-16 gap-x-8 lg:gap-x-16 rounded-2xl sm:rounded-4xl md:grid md:grid-cols-2',
      bg,
      className,
    )}
  >
    <div
      className={cn(
        'flex justify-center items-center relative p-4 sm:p-8 overflow-hidden h-[350px] md:h-auto md:aspect-[768/660]',
        imgBlockClassName,
        reverse ? 'md:order-2' : 'md:order-1',
      )}
    >
      <ResponsiveImage
        alt={imageAlt ?? 'image description'}
        srcMobile={imageSrcMobile}
        srcDesktop={imageSrcDesktop}
        className={cn('object-contain', imageClassName)}
        style={{ ...imageStyle }}
      />
    </div>
    <div
      className={cn(
        'flex flex-col gap-2 lg:gap-4 justify-center p-4 sm:p-8 md:aspect-[768/660]',
        descrClassname,
        reverse ? 'md:order-1' : 'md:order-2',
      )}
    >
      <h4 className="text-h6 sm:text-h5 2xl:text-h3 font-medium sm:break-all md:break-normal">
        {title}
      </h4>
      <p className="text-l-base 2xl:text-xl-base">{description}</p>
      {buttonText && (
        <div className="mt-8">
          <Button
            className="rounded-xl text-brand-100 sm:rounded-2xl border-none sm:h-14 sm:text-m-base xl:px-8 xl:text-l-base"
            variant={buttonVariant ?? 'default'}
            onClick={onButtonClick}
            size="m"
          >
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  </div>
);
