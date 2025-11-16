'use client';

import { motion } from 'motion/react';
import { Button, buttonVariants } from '@xipkg/button';

import { cn } from '@xipkg/utils';
import type { VariantProps } from 'class-variance-authority';
import { ResponsiveImage } from './ResponsiveImage';
import Link from 'next/link';

type HorizontalFeatureCardPropsT = {
  title: string;
  description: string;
  imageAlt?: string;
  imageClassName?: string;
  imageStyle?: React.CSSProperties;
  imageSrcMobile: string;
  imageSrcDesktop: string;
  isReversed?: boolean;
  isInverted?: boolean;
  textBlockClassName?: string;
  imgBlockClassName?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonVariant?: VariantProps<typeof buttonVariants>['variant'];
  className?: string;
  motionConfig?: {
    initial?: any;
    animate?: any;
    transition?: any;
  };
};

export const HorizontalFeatureCard = ({
  title,
  description,
  imageSrcDesktop,
  imageSrcMobile,
  imageAlt = '',
  imageClassName = '',
  imageStyle = {},
  isReversed = false,
  isInverted = false,
  textBlockClassName,
  imgBlockClassName,
  buttonText,
  buttonVariant,
  onButtonClick,
  className = '',
  motionConfig,
}: HorizontalFeatureCardPropsT) => (
  <motion.div
    className={cn(
      'flex flex-col col-span-2 gap-y-4 lg:gap-y-16 gap-x-6 lg:gap-x-8 rounded-2xl sm:rounded-4xl md:grid md:grid-cols-2',
      isInverted ? 'bg-brand-80' : 'bg-gray-5',
      className,
    )}
    {...motionConfig}
  >
    <div
      className={cn(
        'flex justify-center items-center relative p-4 sm:p-8 overflow-hidden h-75 md:h-auto md:aspect-[768/660]',
        imgBlockClassName,
        isReversed ? 'md:order-2' : 'md:order-1',
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
        'flex flex-col gap-4 p-4 sm:p-8 md:aspect-[768/660] lg:justify-center ',
        textBlockClassName,
        isReversed ? 'md:order-1' : 'md:order-2',
      )}
    >
      <h4
        className={cn(
          '!text-xl-base sm:!text-h5 lg:!text-[40px] font-semibold sm:font-medium sm:break-all md:break-normal !leading-[1.2] sm:!leading-[1.1]',
          isInverted ? 'text-brand-0' : 'text-gray-100',
        )}
      >
        {title}
      </h4>
      <p
        className={cn(
          '!text-m-base sm:!text-l-base lg:!text-xl-base lg:!leading-[1.3]',
          isInverted ? 'text-brand-20' : 'text-gray-80',
        )}
      >
        {description}
      </p>
      {buttonText && (
        <div className="mt-2 sm:mt-6 lg:mt-4">
          <Button
            className="w-full sm:w-85 lg:w-116 sm:h-14 text-brand-100 sm:text-l-base rounded-xl sm:rounded-2xl border-none shadow-[0px_4px_4px_rgba(69,84,201,0.25)]"
            variant={buttonVariant ?? 'primary'}
            onClick={() => {
              const el = document.getElementById('become-tester');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }

              if (onButtonClick) {
                onButtonClick();
              }
            }}
            size="m"
          >
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  </motion.div>
);
