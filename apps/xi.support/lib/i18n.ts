import { defineI18n } from 'fumadocs-core/i18n';
import { defineI18nUI } from 'fumadocs-ui/i18n';

export const i18n = defineI18n({
  defaultLanguage: 'ru',
  languages: ['ru', 'en'],
  parser: 'dir',
});

const { provider } = defineI18nUI(i18n, {
  translations: {
    ru: {
      displayName: 'Русский',
      search: 'Поиск',
      searchNoResult: 'Ничего не найдено',
      toc: 'На этой странице',
      tocNoHeadings: 'Нет заголовков',
      lastUpdate: 'Обновлено',
      chooseLanguage: 'Выбрать язык',
      nextPage: 'Далее',
      previousPage: 'Назад',
      chooseTheme: 'Тема',
      editOnGithub: 'Редактировать на GitHub',
    },
    en: {
      displayName: 'English',
    },
  },
});

export { provider as i18nUIProvider };
