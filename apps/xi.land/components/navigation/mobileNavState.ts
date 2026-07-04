let isMobileNavOpen = false;
const listeners = new Set<() => void>();

export function setMobileNavOpen(open: boolean) {
  if (isMobileNavOpen === open) return;
  isMobileNavOpen = open;
  listeners.forEach((listener) => listener());
}

export function subscribeMobileNavOpen(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getMobileNavOpenSnapshot() {
  return isMobileNavOpen;
}
