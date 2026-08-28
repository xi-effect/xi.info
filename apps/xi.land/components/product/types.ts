export type ProductPillT = {
  label: string;
  href: string;
  pillClassName: string;
  labelClassName: string;
};

export type JourneyStepT = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  /** false — показать imageSrc; иначе нейтральная заглушка */
  imageNeedsShot?: boolean;
  imageClassName?: string;
};

export type FeatureHighlightT = {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  /** false — показать imageSrc; иначе только цвет и название */
  imageNeedsShot?: boolean;
  bgClassName: string;
  badgeTextClassName: string;
};

export type RelatedModuleT = {
  title: string;
  href: string;
  description: string;
};

export type FeatureFaqItemT = {
  title: string;
  text: string;
};

export type ProductPageContentT = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  title: string;
  subtitle: string;
  heroImageSrc: string;
  heroImageAlt: string;
  /** false — показать heroImageSrc; иначе нейтральная заглушка */
  heroImageNeedsShot?: boolean;
  pills: readonly ProductPillT[];
  journeyTitle: string;
  journeySubtitle: string;
  steps: readonly JourneyStepT[];
  highlightsTitle: string;
  highlights: readonly FeatureHighlightT[];
  relatedTitle: string;
  related: readonly RelatedModuleT[];
  faq: readonly FeatureFaqItemT[];
  supportHref: string;
  supportLabel: string;
  ctaTitle: string;
  ctaSubtitle: string;
};
