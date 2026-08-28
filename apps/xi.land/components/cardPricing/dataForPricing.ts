import { SIGNUP_URL, SUBSCRIBE_PRO_URL } from 'lib/app_urls';

type PlanFeatureT = {
  text: string;
  soon?: boolean;
};

type CardPricingPropsT = {
  id: string;
  name: string;
  btn_name: string;
  price: number;
  href?: string;
  onClickBtn?: () => void;
  highlight?: boolean;
  description?: string;
  billing?: string;
  caption?: string;
  features?: PlanFeatureT[];
};

const plansPricing = [
  {
    id: 'basic',
    name: 'Базовый',
    price: 0,
    billing: '/ месяц',
    description: 'Для старта, небольшой нагрузки и\u00A0знакомства с возможностями sovlium',
    btn_name: 'Начать бесплатно',
    href: SIGNUP_URL,
    highlight: false,
    features: [
      { text: 'До 10 кабинетов' },
      { text: 'Без ограничений по количеству учеников' },
      { text: '500 МБ хранилища' },
      { text: 'Базовые возможности сервиса' },
      { text: 'Ограничения по домашним заданиям' },
      // TODO: уточнить финальную формулировку ограничений ВКС для бесплатного тарифа.
      { text: 'Ограничения по видеозвонкам' },
    ],
  },
  {
    id: 'pro',
    name: 'Про',
    price: 1499,
    billing: '/ месяц',
    description:
      'Для репетиторов, которые регулярно проводят занятия и\u00A0хотят использовать sovlium без базовых ограничений',
    btn_name: 'Оформить подписку',
    href: SUBSCRIBE_PRO_URL,
    highlight: true,
    caption: 'Подписка продлевается автоматически каждый месяц, пока вы её не отмените',
    features: [
      { text: 'До 30 кабинетов' },
      { text: 'Без ограничений по количеству учеников' },
      { text: '20 ГБ хранилища' },
      { text: 'Видеозвонки без ограничений' },
      { text: 'Расширенные домашние задания', soon: true },
      { text: 'Дополнительные возможности для регулярной работы' },
    ],
  },
] satisfies CardPricingPropsT[];

type PlanIdT = (typeof plansPricing)[number]['id'];

type ComparisonCellT = {
  text?: string;
  included?: boolean;
  soon?: boolean;
};

type ComparisonRowT = {
  feature: string;
  hint?: string;
  valuesByPlanId: Record<PlanIdT, ComparisonCellT>;
};

type ComparisonSectionT = {
  title: string;
  rows: ComparisonRowT[];
};

const yes = (): ComparisonCellT => ({ included: true });
const both = (): Record<PlanIdT, ComparisonCellT> => ({ basic: yes(), pro: yes() });
const soon = (): Record<PlanIdT, ComparisonCellT> => ({
  basic: { soon: true },
  pro: { soon: true },
});
const values = (basic: string, pro: string): Record<PlanIdT, ComparisonCellT> => ({
  basic: { text: basic },
  pro: { text: pro },
});

const comparisonSections: ComparisonSectionT[] = [
  {
    title: 'Тариф',
    rows: [
      {
        feature: 'Стоимость',
        valuesByPlanId: values('0 ₽ / месяц', '1 499 ₽ / месяц'),
      },
      {
        feature: 'Кому подойдёт',
        valuesByPlanId: values(
          'Небольшая нагрузка и знакомство с сервисом',
          'Регулярные занятия и больше пространства',
        ),
      },
      {
        feature: 'Количество учеников',
        hint: 'Лимит только по кабинетам, не по числу учеников',
        valuesByPlanId: {
          basic: { included: true, text: 'Без ограничений' },
          pro: { included: true, text: 'Без ограничений' },
        },
      },
      {
        feature: 'Кабинеты',
        valuesByPlanId: values('До 10', 'До 30'),
      },
      {
        feature: 'Хранилище файлов и материалов',
        valuesByPlanId: values('500 МБ', '20 ГБ'),
      },
      {
        feature: 'Подписка с автопродлением',
        valuesByPlanId: values('Нет, без автосписаний', 'Да, пока не отмените'),
      },
      {
        feature: 'Для учеников',
        valuesByPlanId: values('Бесплатно', 'Бесплатно'),
      },
      {
        feature: 'Приоритетное развитие платных возможностей',
        valuesByPlanId: {
          basic: { text: '—' },
          pro: yes(),
        },
      },
    ],
  },
  {
    title: 'Кабинеты',
    rows: [
      {
        feature: 'Индивидуальный кабинет',
        hint: 'Одно рабочее пространство на ученика',
        valuesByPlanId: both(),
      },
      {
        feature: 'Групповой кабинет',
        hint: 'До 15 учеников, общее расписание, материалы и оплаты',
        valuesByPlanId: both(),
      },
      {
        feature: 'Приглашение по ссылке',
        hint: 'Ученик регистрируется и принимает приглашение сам',
        valuesByPlanId: both(),
      },
      {
        feature: 'Одна ссылка для нескольких учеников',
        valuesByPlanId: both(),
      },
      {
        feature: 'Название индивидуального кабинета видит только репетитор',
        valuesByPlanId: both(),
      },
      {
        feature: 'Вкладки кабинета',
        hint: 'Сводка, материалы, расписание, оплаты',
        valuesByPlanId: both(),
      },
      {
        feature: 'Вкладка «Информация» у репетитора',
        valuesByPlanId: both(),
      },
      {
        feature: 'Старт занятия из шапки кабинета',
        valuesByPlanId: both(),
      },
      {
        feature: 'Ученик присоединяется кнопкой из кабинета',
        hint: 'Без ссылки на сторонний сервис',
        valuesByPlanId: both(),
      },
    ],
  },
  {
    title: 'Расписание',
    rows: [
      {
        feature: 'Календарь на день, неделю и месяц',
        valuesByPlanId: both(),
      },
      {
        feature: 'Создание занятия из календаря и из кабинета',
        hint: 'Одна и та же форма',
        valuesByPlanId: both(),
      },
      {
        feature: 'Название, кабинет, дата, время и длительность',
        hint: 'Время окончания считается само',
        valuesByPlanId: both(),
      },
      {
        feature: 'Повтор по дням недели',
        valuesByPlanId: both(),
      },
      {
        feature: 'Перенос одного урока или всей серии',
        valuesByPlanId: both(),
      },
      {
        feature: 'Отмена занятия',
        valuesByPlanId: both(),
      },
      {
        feature: 'Карточка занятия',
        hint: 'Материалы, настройки и кнопка «Начать»',
        valuesByPlanId: both(),
      },
      {
        feature: 'Ближайший урок на главной',
        valuesByPlanId: both(),
      },
      {
        feature: 'Расписание внутри кабинета',
        hint: 'Только уроки с этим учеником или группой',
        valuesByPlanId: both(),
      },
    ],
  },
  {
    title: 'Видеозвонки',
    rows: [
      {
        feature: 'Встроенный видеоурок',
        hint: 'Без отдельного сервиса конференций',
        valuesByPlanId: both(),
      },
      {
        feature: 'Лимиты по звонкам',
        // TODO: уточнить финальную формулировку ограничений ВКС для бесплатного тарифа.
        valuesByPlanId: values('С базовыми ограничениями', 'Без ограничений'),
      },
      {
        feature: 'Проверка камеры и микрофона до входа',
        valuesByPlanId: both(),
      },
      {
        feature: 'Выбор камеры, микрофона и динамиков',
        valuesByPlanId: both(),
      },
      {
        feature: 'Размытие фона',
        hint: 'Если браузер его поддерживает',
        valuesByPlanId: both(),
      },
      {
        feature: 'Сетка участников',
        valuesByPlanId: both(),
      },
      {
        feature: 'Демонстрация экрана',
        valuesByPlanId: both(),
      },
      {
        feature: 'Чат на всех участников',
        valuesByPlanId: both(),
      },
      {
        feature: 'Кнопка «Поднять руку»',
        valuesByPlanId: both(),
      },
      {
        feature: 'Реакции',
        hint: 'Эмодзи и живой отклик во время урока',
        valuesByPlanId: both(),
      },
      {
        feature: 'Компактное окно звонка',
        hint: 'Когда открываете доску, урок не прерывается',
        valuesByPlanId: both(),
      },
      {
        feature: 'Открытие доски из панели звонка',
        valuesByPlanId: both(),
      },
    ],
  },
  {
    title: 'Онлайн-доска',
    rows: [
      {
        feature: 'Подготовка доски заранее',
        valuesByPlanId: both(),
      },
      {
        feature: 'Перо и текст',
        valuesByPlanId: both(),
      },
      {
        feature: 'Геометрические фигуры',
        valuesByPlanId: both(),
      },
      {
        feature: 'Стикеры',
        valuesByPlanId: both(),
      },
      {
        feature: 'Шаблоны доски',
        valuesByPlanId: both(),
      },
      {
        feature: 'Интерактивные задания на доске',
        hint: 'Задания прямо на холсте, во время урока',
        valuesByPlanId: both(),
      },
      {
        feature: 'Отмена и повтор действий',
        valuesByPlanId: both(),
      },
      {
        feature: 'PDF на доске',
        hint: 'Можно рисовать поверх страницы учебника',
        valuesByPlanId: both(),
      },
      {
        feature: 'Картинки на доске',
        valuesByPlanId: both(),
      },
      {
        feature: 'Аудиофайлы на доске',
        hint: 'Можно вставлять таймкоды и слушать синхронно вместе с учениками',
        valuesByPlanId: both(),
      },
      {
        feature: 'Таймкоды в аудио',
        hint: 'Отмечаете момент на дорожке — ученики слышат то же самое вместе с вами',
        valuesByPlanId: both(),
      },
      {
        feature: 'Фреймы',
        hint: 'Зоны холста для этапов урока',
        valuesByPlanId: both(),
      },
      {
        feature: 'Таймер урока',
        valuesByPlanId: both(),
      },
      {
        feature: 'Совместная работа с учеником на холсте',
        valuesByPlanId: both(),
      },
      {
        feature: 'Та же доска в звонке и в материалах',
        valuesByPlanId: both(),
      },
    ],
  },
  {
    title: 'Материалы',
    rows: [
      {
        feature: 'Библиотека досок и заметок',
        valuesByPlanId: both(),
      },
      {
        feature: 'Заметки и конспекты',
        valuesByPlanId: both(),
      },
      {
        feature: 'Материалы внутри кабинета',
        hint: 'Ученик видит только то, что привязано к его кабинету',
        valuesByPlanId: both(),
      },
      {
        feature: 'Доступ «совместная работа»',
        hint: 'Ученик видит материал и может его править',
        valuesByPlanId: both(),
      },
      {
        feature: 'Доступ «только репетитор»',
        valuesByPlanId: both(),
      },
      {
        feature: 'Черновики, которые ученик не видит',
        valuesByPlanId: both(),
      },
      {
        feature: 'Повторное использование заготовок',
        hint: 'Подготовили раз — открываете снова из библиотеки или кабинета',
        valuesByPlanId: both(),
      },
    ],
  },
  {
    title: 'Файлы',
    rows: [
      {
        feature: 'Загрузка любых файлов',
        hint: 'В пределах хранилища тарифа',
        valuesByPlanId: both(),
      },
      {
        feature: 'Поделиться файлами с учениками',
        valuesByPlanId: both(),
      },
      {
        feature: 'Настройка доступа к файлам',
        hint: 'Открываете доступ ученику или оставляете файл только себе',
        valuesByPlanId: both(),
      },
      {
        feature: 'Просмотр файлов на платформе',
        valuesByPlanId: both(),
      },
    ],
  },
  {
    title: 'Оплаты за занятия',
    rows: [
      {
        feature: 'Журнал счетов и статусов',
        valuesByPlanId: both(),
      },
      {
        feature: 'Счёт из кабинета и из раздела оплат',
        valuesByPlanId: both(),
      },
      {
        feature: 'Строки занятий и автоподсчёт суммы',
        valuesByPlanId: both(),
      },
      {
        feature: 'Шаблоны счетов',
        valuesByPlanId: both(),
      },
      {
        feature: 'Уведомление ученику о счёте',
        valuesByPlanId: both(),
      },
      {
        feature: 'Напоминание, если оплата задерживается',
        valuesByPlanId: both(),
      },
      {
        feature: 'Подтверждение получения перевода',
        hint: 'Деньги за уроки идут напрямую, вне платформы',
        valuesByPlanId: both(),
      },
      {
        feature: 'Доход в таблицах и диаграммах',
        valuesByPlanId: both(),
      },
      {
        feature: 'Ученик видит только свои счета',
        valuesByPlanId: both(),
      },
    ],
  },
  {
    title: 'Напоминания',
    rows: [
      {
        feature: 'Напоминание о новом занятии',
        valuesByPlanId: both(),
      },
      {
        feature: 'Напоминание о переносе',
        valuesByPlanId: both(),
      },
      {
        feature: 'Напоминание об оплате',
        valuesByPlanId: both(),
      },
    ],
  },
  {
    title: 'Домашние задания',
    rows: [
      {
        feature: 'Доступ к домашним заданиям',
        valuesByPlanId: {
          basic: { text: 'С ограничениями' },
          pro: { soon: true, text: 'Расширенные' },
        },
      },
      {
        feature: 'Конструктор заданий',
        valuesByPlanId: soon(),
      },
      {
        feature: 'Выдача, проверка и отслеживание',
        valuesByPlanId: soon(),
      },
      {
        feature: 'Привязка к урокам и ученикам',
        valuesByPlanId: soon(),
      },
    ],
  },
  {
    title: 'Платформа',
    rows: [
      {
        feature: 'Работа в браузере без установки',
        valuesByPlanId: both(),
      },
      {
        feature: 'Компьютер, телефон и планшет',
        valuesByPlanId: both(),
      },
      {
        feature: 'Тёмная тема',
        valuesByPlanId: both(),
      },
      {
        feature: 'Смена языка на английский',
        valuesByPlanId: both(),
      },
      {
        feature: 'Для учеников ничего покупать не нужно',
        valuesByPlanId: both(),
      },
    ],
  },
];

const availableFeatures = [
  'Расписание занятий с планированием на день, неделю и месяц',
  'Видеозвонки и онлайн-доски',
  'Автоматические напоминания ученикам',
  'Заметки по урокам и ученикам',
  'Цифровая библиотека материалов',
  'Учёт оплат между репетитором и учеником',
  'Работа в браузере без установки',
  'Доступ с компьютера, телефона и планшета',
];

const pricingFaq = [
  {
    title: 'Чем отличаются тарифы?',
    text: 'Базовый — бесплатный тариф с лимитами по кабинетам и хранилищу. Про — 1 499 ₽ в месяц: больше кабинетов, больше хранилища и расширенные функции для регулярной работы. Подписка Про продлевается автоматически каждый месяц, пока вы её не отмените.',
  },
  {
    title: 'Можно ли отменить подписку?',
    text: 'Да. Подписку можно отменить в любой момент в приложении или через поддержку. После отмены доступ к тарифу Про сохранится до конца оплаченного периода.',
  },
  {
    title: 'Можно ли остаться на бесплатном тарифе?',
    text: 'Да. Тариф Базовый остаётся бесплатным и подходит для старта и небольшой нагрузки.',
  },
  {
    title: 'Что будет с текущими пользователями?',
    text: 'Если вы уже пользуетесь sovlium, мы заранее предупредим об изменениях в тарифах и ограничениях. Данные и кабинеты не будут удалены внезапно: перед применением новых лимитов мы дадим время подготовиться или перейти на подходящий тариф.',
  },
  {
    title: 'Что именно оплачивается?',
    text: 'Вы оплачиваете доступ к функциональности сервиса sovlium на выбранный период. sovlium не оказывает образовательные услуги, не является стороной отношений между репетитором и учеником и не отвечает за результат обучения.',
  },
  {
    title: 'Какие способы оплаты доступны?',
    text: 'К оплате принимаются банковские карты платёжных систем МИР, Visa и Mastercard, выпущенные российскими банками, а также СБП, если такой способ доступен на странице оплаты. Оплата проходит через защищённую платёжную страницу банка или платёжного партнёра. Данные банковской карты не передаются и не хранятся в sovlium.',
  },
  {
    title: 'Сколько стоит sovlium для ученика?',
    text: 'Для учеников sovlium полностью бесплатен.',
  },
  {
    title: 'Нужно ли что-то устанавливать?',
    text: 'Нет, платформа работает прямо в браузере.',
  },
  {
    title: 'Как устроена подписка Про?',
    text: 'Тариф Про оформляется в приложении как подписка с автоматическим ежемесячным продлением. Отменить подписку можно в любой момент в приложении или через поддержку. После отмены доступ к тарифу Про сохранится до конца оплаченного периода.',
  },
];

export type { CardPricingPropsT, PlanFeatureT, ComparisonCellT, ComparisonSectionT };

export { plansPricing, availableFeatures, pricingFaq, comparisonSections };
