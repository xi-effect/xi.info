'use client';

import { Footer, defaultFooterSections } from 'pkg.footer';
import { useSupportModal } from './SupportModalContext';

const SUPPORT_HREF = 'https://t.me/sovlium_support_bot';

export const LandFooter = () => {
  const { open } = useSupportModal();

  const sections = defaultFooterSections.map((section) => ({
    ...section,
    links: section.links.map((link) =>
      link.link === SUPPORT_HREF ? { ...link, onClick: open } : link,
    ),
  }));

  return <Footer sections={sections} />;
};
