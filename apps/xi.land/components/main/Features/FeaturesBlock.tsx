'use client';

import { useMediaQuery } from '@xipkg/utils';
import { Features } from './Features';
import { FeaturesMobile } from './FeaturesMobile';

export const FeaturesBlock = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return isMobile ? <FeaturesMobile /> : <Features />;
};
