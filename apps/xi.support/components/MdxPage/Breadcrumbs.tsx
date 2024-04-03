'use client';

import { Link } from '@xipkg/link';
import { ChevronRight } from '@xipkg/icons';

type BreadcrumbsPropsT = {
  sectionName: string;
  sectionLink: string;
  pageName: string;
  pageLink: string;
};

export const Breadcrumbs = ({
  sectionName,
  sectionLink,
  pageName,
  pageLink,
}: BreadcrumbsPropsT) => (
  <div className="w-full flex justify-start items-center flex-row z-10 gap-0.5">
    <Link theme="brand" variant="hover" href="/">
      Главная
    </Link>
    <div className="flex justify-center items-center w-4 h-4">
      <ChevronRight className="fill-brand-80" />
    </div>
    <Link theme="brand" variant="hover" href={`/${sectionLink}`}>
      {sectionName}
    </Link>
    <div className="flex justify-center items-center w-4 h-4">
      <ChevronRight className="fill-brand-80" />
    </div>
    <Link theme="brand" variant="hover" href={`/${sectionLink}/${pageLink}`}>
      {pageName}
    </Link>
  </div>
);
