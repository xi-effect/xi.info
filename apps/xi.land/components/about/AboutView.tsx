import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from '@xipkg/icons';
import { Button } from '@xipkg/button';

import { SIGNUP_URL } from 'lib/app_urls';
import { ABOUT_FACTS, ABOUT_HERO, ABOUT_LINKS, ABOUT_TEAM } from './about_content';

const buttonClassName =
  'inline-flex h-auto min-h-12 w-full shrink-0 self-start rounded-2xl border-0 px-7 py-3.5 text-lg font-semibold leading-6 hover:border-0 sm:w-auto';

export const AboutView = () => (
  <main>
    <section
      data-theme="white"
      className="w-full overflow-x-clip bg-gray-0 pt-28 pb-14 md:pt-32 lg:pb-20 xl:pt-40"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-stretch gap-10 px-4 md:gap-14 md:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex min-w-0 flex-1 flex-col gap-10 lg:max-w-[650px]">
          <div className="flex flex-col gap-6">
            <h1 className="font-nevermind text-[28px] font-medium leading-8 tracking-[-0.01em] text-gray-100/90 sm:text-4xl sm:leading-10">
              {ABOUT_HERO.title}
            </h1>
            {ABOUT_HERO.text.map((paragraph) => (
              <p
                key={paragraph}
                className="font-manrope max-w-xl text-m-base font-medium leading-5 text-slate-800/60 sm:text-lg sm:leading-6"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <Button asChild variant="primary" className={buttonClassName}>
            <Link href={SIGNUP_URL} className="flex items-center justify-center gap-3">
              Попробовать бесплатно
              <ArrowRight className="size-5 shrink-0 fill-gray-0" />
            </Link>
          </Button>
        </div>

        <div className="relative mx-auto hidden w-full max-w-[560px] shrink-0 md:block lg:mx-0">
          <Image
            src={ABOUT_HERO.imageSrc}
            alt={ABOUT_HERO.imageAlt}
            width={746}
            height={497}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>

    <section
      data-theme="white"
      className="font-nevermind w-full bg-gray-0 px-4 py-10 md:px-6 md:py-14"
    >
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
        <h2 className="text-3xl font-medium leading-9 tracking-tight text-gray-900 md:text-4xl md:leading-10">
          {ABOUT_TEAM.title}
        </h2>
        <div className="flex flex-col gap-5">
          {ABOUT_TEAM.paragraphs.map((paragraph) => (
            <p key={paragraph} className="font-manrope text-lg leading-7 text-gray-900/75">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>

    <section
      data-theme="white"
      className="font-nevermind w-full bg-gray-0 px-4 py-10 md:px-6 md:py-14"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-5 rounded-[28px] bg-violet-50 p-6 md:grid-cols-3 md:rounded-[48px] md:p-14">
        {ABOUT_FACTS.map((fact) => (
          <article
            key={fact.title}
            className="flex flex-col gap-3 rounded-[20px] bg-white px-6 py-6"
          >
            <h2 className="text-xl font-medium leading-7 text-gray-100">{fact.title}</h2>
            <p className="font-manrope text-base leading-7 text-gray-900/70">{fact.text}</p>
          </article>
        ))}
      </div>
    </section>

    <section
      data-theme="white"
      className="font-nevermind w-full bg-gray-0 px-4 pb-14 md:px-6 md:pb-20"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 rounded-[28px] bg-violet-50 p-6 md:rounded-[48px] md:p-14">
        <h2 className="text-3xl font-medium leading-9 tracking-tight text-gray-900 md:text-4xl md:leading-10">
          Контакты и вакансии
        </h2>
        <ul className="flex flex-col">
          {ABOUT_LINKS.map((item) => (
            <li key={item.title} className="border-b border-gray-900/10 last:border-b-0">
              <Link
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center justify-between gap-6 py-6 md:py-7"
              >
                <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8">
                  <p className="w-full shrink-0 text-xl font-medium leading-7 text-gray-100 sm:w-48">
                    {item.title}
                  </p>
                  <p className="font-manrope text-base leading-7 text-gray-900/70">
                    {item.description}
                  </p>
                </div>
                <ArrowRight className="size-5 shrink-0 fill-gray-100 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </main>
);
