'use client';

import { cn } from '@xipkg/utils';
import Image, { ImageProps } from 'next/image';

type ResponsiveImageProps = {
  alt: string;
  srcDesktop?: string;
  srcMobile?: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
} & Partial<Omit<ImageProps, 'src' | 'alt'>>;

export const ResponsiveImage = ({
  alt,
  srcDesktop,
  srcMobile,
  className,
  style,
  width = 660,
  height = 350,
  ...rest
}: ResponsiveImageProps) => (
  <>
    {srcDesktop && (
      <Image
        src={srcDesktop}
        alt={alt}
        width={width}
        height={height}
        className={cn('hidden sm:flex', className)}
        style={{ objectFit: 'contain', ...style }}
        {...rest}
      />
    )}
    {srcMobile && (
      <Image
        src={srcMobile}
        alt={alt}
        width={width}
        height={height}
        className={cn('sm:hidden flex', className)}
        style={{ objectFit: 'contain', ...style }}
        {...rest}
      />
    )}
  </>
);
