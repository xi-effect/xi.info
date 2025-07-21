'use client';

import { Button } from '@xipkg/button';
import { cn } from '@xipkg/utils';
import Image from 'next/image';

type HorizontalFeatureCardPropsT = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  imageClassName?: string;
  imageStyle?: React.CSSProperties;
  reverse?: boolean;
  bg?: string;
  textColor?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
};

export const HorizontalFeatureCard = ({
  title,
  description,
  imageSrc,
  imageAlt = '',
  imageClassName = '',
  imageStyle = {},
  reverse = false,
  bg = 'bg-gray-5',
  textColor = 'text-black',
  buttonText,
  onButtonClick,
  className = '',
}: HorizontalFeatureCardPropsT) => (
  <div
    className={cn(
      'flex flex-col col-span-2 gap-y-8 sm:gap-y-16 gap-x-8 lg:gap-x-16 rounded-2xl sm:rounded-4xl',
      reverse ? 'lg:flex-row-reverse' : 'lg:flex-row',
      bg,
      className,
    )}
  >
    <div className="flex justify-center relative p-4 sm:p-8 overflow-hidden h-[350px] sm:h-auto">
      <Image
        width={700}
        height={240}
        src={imageSrc}
        alt={imageAlt}
        className={imageClassName}
        style={{ objectFit: 'contain', ...imageStyle }}
      />
    </div>
    <div className={cn('flex flex-col gap-2 sm:gap-4 justify-center p-4 sm:p-8', textColor)}>
      <h4 className="text-l-base-line-height sm:text-xl-base-line-height lg:text-[40px] font-medium">
        {title}
      </h4>
      <p className="text-l-base lg:text-xl-base">{description}</p>
      {buttonText && (
        <div className="mt-8">
          <Button className="rounded-2xl" variant="default" onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  </div>
);
