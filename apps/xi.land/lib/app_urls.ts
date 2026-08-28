export const APP_URL = 'https://app.sovlium.ru';
export const LOGIN_URL = 'https://app.sovlium.ru/login';
export const SIGNUP_URL = 'https://app.sovlium.ru/signup';
export const SUPPORT_URL = 'https://support.sovlium.ru';

/** Оформление подписки Профи живёт в приложении: лендинг только ведёт через login. */
export const BILLING_SUBSCRIBE_PRO_PATH = '/billing/subscribe?plan=pro';
export const SUBSCRIBE_PRO_URL = `${LOGIN_URL}?redirect=${encodeURIComponent(BILLING_SUBSCRIBE_PRO_PATH)}`;
