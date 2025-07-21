import Image from 'next/image';
import { cn } from '@xipkg/utils';

type VerticalFeatureCardPropsT = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  imageClassName?: string;
  imageStyle?: React.CSSProperties;
};

export const VerticalFeatureCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imageClassName,
  imageStyle,
}: VerticalFeatureCardPropsT) => (
  <div className="flex flex-col gap-4 rounded-2xl sm:rounded-4xl bg-gray-5 col-span-2 md:col-span-1">
    <div className="relative p-4 sm:p-8 overflow-hidden h-[350px] sm:h-auto justify-center align-middle flex">
      <Image
        width={660}
        height={350}
        src={imageSrc}
        alt={imageAlt ?? 'image description'}
        className={cn('rounded-tl-2xl rounded-br-4xl', imageClassName)}
        style={{ objectFit: 'contain', position: 'absolute', bottom: 0, right: 0, ...imageStyle }}
      />
    </div>
    <div className="flex flex-col gap-2 sm:gap-4 p-4 sm:p-8">
      <h4 className="text-l-base-line-height sm:text-xl-base-line-height lg:text-[40px] font-medium">
        {title}
      </h4>
      <p className="text-l-base lg:text-xl-base">{description}</p>
    </div>
  </div>
);
