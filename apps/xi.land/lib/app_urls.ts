export const APP_URL = 'https://app.sovlium.ru';
export const LOGIN_URL = 'https://app.sovlium.ru/login';
export const SIGNUP_URL = 'https://app.sovlium.ru/signup';
export const SUPPORT_URL = 'https://support.sovlium.ru';

export type SubscribeProPeriodT = 'month' | 'year';

/** Оформление подписки Про живёт в приложении: лендинг только ведёт через login. */
export const getSubscribeProUrl = (period: SubscribeProPeriodT = 'month') => {
  const url = new URL(APP_URL);
  url.searchParams.set('profile', 'subscription');
  url.searchParams.set('period', period);
  return url.toString();
};

export const SUBSCRIBE_PRO_URL = getSubscribeProUrl('month');
export const SUBSCRIBE_PRO_YEARLY_URL = getSubscribeProUrl('year');
