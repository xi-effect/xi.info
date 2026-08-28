export type LegalDocumentT = {
  href: string;
  title: string;
  description: string;
};

export const LEGAL_DOCUMENTS: LegalDocumentT[] = [
  {
    href: '/legal/terms',
    title: 'Условия использования',
    description: 'Правила использования сервиса sovlium, права и обязанности пользователей.',
  },
  {
    href: '/legal/offer',
    title: 'Оферта',
    description:
      'Условия оплаты тарифа, предоставления доступа к сервису sovlium, отмены подписки и возврата.',
  },
  {
    href: '/legal/payment-refund',
    title: 'Оплата и возврат',
    description:
      'Способы оплаты, порядок предоставления доступа к тарифу, отмена подписки и возврат.',
  },
  {
    href: '/legal/privacy',
    title: 'Политика конфиденциальности',
    description:
      'Как мы собираем, используем и защищаем персональные данные пользователей sovlium.',
  },
  {
    href: '/legal/consent',
    title: 'Согласие на обработку персональных данных',
    description: 'Согласие на обработку персональных данных в соответствии с законодательством РФ.',
  },
  {
    href: '/legal/marketing-consent',
    title: 'Согласие на рекламные сообщения',
    description: 'Добровольное согласие на получение новостей, материалов и предложений sovlium.',
  },
  {
    href: '/legal/requisites',
    title: 'Реквизиты',
    description: 'Реквизиты индивидуального предпринимателя, оказывающего услуги сервиса sovlium.',
  },
];
