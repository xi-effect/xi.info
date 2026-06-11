const HIDDEN_SUBDOMAIN_PARTS = new Set(['support', 'wiki', 'vacancy', 'jobs', 'job']);

export const shouldHideFooterPromo = (hostname: string): boolean => {
  const host = hostname.toLowerCase().split(':')[0];
  return host.split('.').some((label) => HIDDEN_SUBDOMAIN_PARTS.has(label));
};
