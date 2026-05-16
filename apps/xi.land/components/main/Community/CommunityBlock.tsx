import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from '@xipkg/icons';
import { cn } from '@xipkg/utils';

import {
  COMMUNITY_BANNER_IMAGE_SRC,
  COMMUNITY_HEADING_LINES,
  COMMUNITY_SUBTEXT,
  COMMUNITY_TELEGRAM_HREF,
  COMMUNITY_VK_HREF,
} from './community_content';

const communityLinkClass =
  'inline-flex w-full items-center justify-center gap-3 rounded-xl px-7 py-3.5 text-lg font-semibold leading-6 no-underline transition-opacity hover:opacity-90 sm:w-auto';

const CtaIconVk = () => <ArrowRight className="size-5 shrink-0 fill-brand-0" aria-hidden />;

const CtaIconTelegram = () => <ArrowRight className="size-5 shrink-0 fill-gray-0" aria-hidden />;

export const CommunityBlock = () => {
  return (
    <section
      data-theme="white"
      className="font-nevermind w-full bg-gray-0 px-4 py-10 md:px-6 md:py-14 dark:bg-gray-100"
    >
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-violet-50 p-6 dark:bg-violet-950/25 md:rounded-[48px] md:p-14">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_min(42vw,560px)] lg:grid-rows-[auto_auto] lg:gap-x-12 lg:gap-y-10">
          <div className="flex flex-col gap-6 lg:col-start-1 lg:row-start-1">
            <h2 className="text-3xl font-medium leading-9 tracking-tight text-gray-900 md:text-4xl md:leading-10 dark:text-gray-0">
              {COMMUNITY_HEADING_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="font-manrope text-lg font-medium leading-6 text-gray-900/60 dark:text-gray-0/60">
              {COMMUNITY_SUBTEXT}
            </p>
          </div>

          <figure
            className={cn(
              'relative mx-auto w-full max-w-[560px] shrink-0',
              'lg:col-start-2 lg:row-span-2 lg:row-start-1',
              'lg:mx-0 lg:justify-self-end lg:self-end',
              // вылезаем в паддинг карточки, чтобы картинка упиралась в правый и нижний край блока
              'lg:w-[calc(100%+3.5rem)] lg:max-w-none lg:-mb-14 lg:-mr-14',
            )}
          >
            <Image
              src={COMMUNITY_BANNER_IMAGE_SRC}
              alt="Иллюстрация: сообщество репетиторов sovlium"
              width={746}
              height={497}
              sizes="(max-width: 1024px) min(100vw - 3rem, 560px), min(560px, 45vw)"
              className="h-auto w-full object-contain max-lg:object-center lg:object-[right_bottom]"
              priority={false}
            />
          </figure>

          <div
            className={cn(
              'flex flex-col gap-3 sm:flex-row sm:flex-wrap',
              'lg:col-start-1 lg:row-start-2 lg:self-start',
            )}
          >
            <Link
              href={COMMUNITY_VK_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(communityLinkClass, 'bg-brand-80 text-brand-0 dark:bg-brand-80')}
            >
              Вконтакте
              <CtaIconVk />
            </Link>
            <Link
              href={COMMUNITY_TELEGRAM_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(communityLinkClass, 'bg-gray-900 text-white')}
            >
              Telegram
              <CtaIconTelegram />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
