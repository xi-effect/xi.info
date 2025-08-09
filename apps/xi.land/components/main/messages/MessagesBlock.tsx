'use client';

import { useMediaQuery } from '@xipkg/utils';
import { MessagesMobile } from './MessagesMobile';
import { Messages } from './Messages';

export const MessagesBlock = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return isMobile ? <MessagesMobile /> : <Messages />;
};
