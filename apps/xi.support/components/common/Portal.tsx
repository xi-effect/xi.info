'use client';

import { createPortal } from 'react-dom';
import { FC, PropsWithChildren, useEffect } from 'react';

type PortalT = {
  mounted: boolean;
  transition: boolean;
};

const Portal: FC<PropsWithChildren<PortalT>> = (props) => {
  const { children, mounted, transition } = props;

  useEffect(() => {
    if (mounted) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [mounted]);

  const content = (
    <div
      className={`${
        transition && 'active'
      } cursor-pointer modal transition-opacity p-[16px] sm:p-[32px]`}
    >
      {children}
    </div>
  );

  return mounted ? createPortal(content, document.body) : null;
};

export default Portal;
