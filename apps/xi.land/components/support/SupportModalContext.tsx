'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { SupportModal } from './SupportModal';

type SupportModalContextValue = {
  open: () => void;
};

const SupportModalContext = createContext<SupportModalContextValue | null>(null);

export const SupportModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const value = useMemo(() => ({ open }), [open]);

  return (
    <SupportModalContext.Provider value={value}>
      {children}
      <SupportModal open={isOpen} onOpenChange={setIsOpen} />
    </SupportModalContext.Provider>
  );
};

export const useSupportModal = () => {
  const context = useContext(SupportModalContext);

  if (!context) {
    throw new Error('useSupportModal must be used within SupportModalProvider');
  }

  return context;
};
