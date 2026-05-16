export const MESSAGES_ASSETS = {
  shield: '/assets/main/Messages/messages-shield-network.webp',
  /** Логотип платформы (колонна) — центр хаба и иконка во втором блоке */
  platformColumn: '/assets/main/Messages/messages-platform-column.webp',
  dashboard: '/assets/main/Messages/messages-dashboard.webp',
} as const;

export type MessagesFloatingFeatureIdT =
  | 'calendar'
  | 'materials'
  | 'conference'
  | 'payments'
  | 'notifications'
  | 'rooms';

/** Иконки вокруг центрального лого — якоря в % с лёгким «разбросом», орбита не идеальная окружность */
export const MESSAGES_FLOATING_FEATURES: readonly {
  id: MessagesFloatingFeatureIdT;
  /** Якорная позиция в процентах от контейнера визуала */
  leftPct: number;
  topPct: number;
  /** Фаза анимации плавания, с */
  motionPhase: number;
}[] = [
  { id: 'calendar', leftPct: 67, topPct: 10, motionPhase: 0 },
  { id: 'materials', leftPct: 46, topPct: 17, motionPhase: 0.35 },
  { id: 'conference', leftPct: 9, topPct: 38, motionPhase: 0.7 },
  { id: 'payments', leftPct: 17, topPct: 74, motionPhase: 0.2 },
  { id: 'notifications', leftPct: 61, topPct: 83, motionPhase: 0.55 },
  { id: 'rooms', leftPct: 90, topPct: 46, motionPhase: 0.9 },
] as const;

export type MessagesRowContentT = {
  id: 'russia' | 'tools' | 'assistant';
  titleLines: readonly string[];
  subtitle: string;
  visualAlt: string;
};

export const MESSAGES_ROWS: readonly MessagesRowContentT[] = [
  {
    id: 'russia',
    titleLines: ['Платформа sovlium', 'создана в России'],
    subtitle: 'Быстро открывается и всегда доступна.',
    visualAlt: 'Стабильная работа платформы Sovlium: щит и глобус',
  },
  {
    id: 'tools',
    titleLines: ['Всё для занятий уже под рукой'],
    subtitle: 'Не нужно тратить время, чтобы переключиться между инструментами.',
    visualAlt: 'Центральный блок платформы Sovlium и связанные сервисы',
  },
  {
    id: 'assistant',
    titleLines: ['Личный секретарь, библиотекарь', 'и бухгалтер'],
    subtitle: 'Разошлёт напоминания, поможет рассчитать доход и разложить материалы по полочкам.',
    visualAlt: 'Напоминания, доход и материалы в интерфейсе Sovlium',
  },
] as const;
