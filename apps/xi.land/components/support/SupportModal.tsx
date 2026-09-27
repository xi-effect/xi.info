'use client';

import { Close, External, MailRounded, TelegramFilled } from '@xipkg/icons';
import { Modal, ModalBody, ModalContent, ModalTitle } from '@xipkg/modal';
import { VkIcon } from './VkIcon';

const CONTACTS = [
  {
    title: 'Telegram',
    description: '@sovlium_support_bot',
    href: 'https://t.me/sovlium_support_bot',
    icon: TelegramFilled,
    colorClass: 'bg-brand-0 text-brand-80',
    iconClass: 'fill-brand-80',
  },
  {
    title: 'ВКонтакте',
    description: 'Сообщество sovlium',
    href: 'https://vk.com/im/convo/-230871378?entrypoint=community_page&tab=all',
    icon: VkIcon,
    colorClass: 'bg-blue-100/10 text-blue-600',
    iconClass: 'text-blue-600',
  },
  {
    title: 'Электронная почта',
    description: 'support@sovlium.ru',
    href: 'mailto:support@sovlium.ru',
    icon: MailRounded,
    colorClass: 'bg-gray-5 text-gray-100',
    iconClass: 'fill-gray-100',
  },
] as const;

type SupportModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const SupportModal = ({ open, onOpenChange }: SupportModalProps) => (
  <Modal open={open} onOpenChange={onOpenChange}>
    <ModalContent className="w-[calc(100%-32px)] max-w-[480px] overflow-hidden rounded-3xl bg-gray-0 p-0 shadow-[0px_24px_32px_0px_rgba(16,16,16,0.08),0px_16px_16px_0px_rgba(16,16,16,0.08)]">
      <ModalBody className="flex min-w-0 flex-col gap-6 overflow-hidden p-6">
        <div className="flex min-w-0 items-center justify-between gap-4">
          <ModalTitle className="font-nevermind m-0 min-w-0 flex-1 text-2xl leading-normal font-medium text-gray-100">
            Свяжитесь с нами
          </ModalTitle>
          <button
            type="button"
            className="group flex size-6 shrink-0 items-center justify-center bg-transparent p-0"
            onClick={() => onOpenChange(false)}
            aria-label="Закрыть"
          >
            <Close className="size-6 fill-gray-60 transition-colors group-hover:fill-gray-100" />
          </button>
        </div>

        <p className="m-0 text-m-base leading-5 text-gray-60">
          Выберите удобный способ связи — мы всегда рады помочь!
        </p>

        {CONTACTS.map((contact) => (
          <a
            key={contact.title}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-gray-10 p-4 transition-colors hover:bg-gray-5"
          >
            <div
              className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${contact.colorClass}`}
            >
              <contact.icon className={`size-5 ${contact.iconClass}`} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-m-base font-medium text-gray-100">{contact.title}</div>
              <div className="text-s-base text-gray-60">{contact.description}</div>
            </div>
            <External className="size-5 shrink-0 text-gray-40" />
          </a>
        ))}

        <p className="mt-2 text-center text-xs-base text-gray-40">
          Обычно отвечаем за пару часов, максимум — в течение суток
        </p>

        <div className="mt-3 border-t border-gray-10 pt-4">
          <p className="mb-3 text-center text-s-base font-medium text-gray-60">
            Следить за актуальными новостями платформы
          </p>
          <div className="flex gap-3">
            <a
              href="https://t.me/sovlium"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2.5 rounded-lg border border-gray-10 px-3 py-2 transition-colors hover:bg-gray-5"
            >
              <TelegramFilled className="size-4 shrink-0 fill-gray-60" />
              <span className="text-s-base text-gray-100">Канал в Telegram</span>
            </a>
            <a
              href="https://vk.com/sovlium"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2.5 rounded-lg border border-gray-10 px-3 py-2 transition-colors hover:bg-gray-5"
            >
              <VkIcon className="size-4 shrink-0 text-gray-60" />
              <span className="text-s-base text-gray-100">Группа ВКонтакте</span>
            </a>
          </div>
        </div>
      </ModalBody>
    </ModalContent>
  </Modal>
);
