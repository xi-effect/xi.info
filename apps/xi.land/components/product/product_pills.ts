import { FEATURE_HREF, HERO_CONTENT } from 'components/main/Hero/hero_content';
import type { HeroFeatureIconIdT } from 'components/main/Hero/hero_content';

import type { ProductPillT } from './types';

export const productHref = (id: HeroFeatureIconIdT) => FEATURE_HREF[id];

export const productPills = (...ids: HeroFeatureIconIdT[]): ProductPillT[] =>
  ids.map((id) => {
    const feature = HERO_CONTENT.features.find((item) => item.id === id);
    if (!feature) {
      throw new Error(`Unknown product pill: ${id}`);
    }

    return {
      label: feature.label,
      href: FEATURE_HREF[id],
      pillClassName: feature.pillClassName,
      labelClassName: feature.labelClassName,
    };
  });
