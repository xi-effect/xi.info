'use client';

import { Hero } from 'components/main';
import { HorizontalFeatureCard, VerticalFeatureCard } from 'components/main/shared';

export default function PaymentsPage() {
  return (
    <>
      <Hero />
      <section className="px-4 py-8 sm:px-8 sm:py-12 xl:px-40 xl:py-20">
        <div className="bg-gray-0 grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-16">
          <VerticalFeatureCard
            title="Порядок в финансах"
            description="Легко отслеживайте статусы платежей"
            imageSrcDesktop="/assets/payments/messageList.webp"
            imageSrcMobile="/assets/payments/messageList.webp"
            imageClassName="left-4 sm:left-8 top-4 sm:top-8 h-full object-cover object-left p-8 pr-0 w-full absolute md:p-0 md:relative md:object-contain"
            imageBlockClassName="h-[250px]"
          />

          <VerticalFeatureCard
            title="…и в отношениях"
            description="Обсуждайте только учёбу — денежные вопросы оставьте системе"
            imageSrcDesktop="/assets/payments/files.svg"
            imageSrcMobile="/assets/payments/files.svg"
            imageClassName="w-[440px] relative"
          />

          <HorizontalFeatureCard
            title="Тактичные напоминания об оплате"
            description="Отправляйте счета на оплату и подтверждайте получение денег. Если оплата задержится, мы сами пришлём ученику напоминание"
            imageSrcDesktop="/assets/payments/paymentReminders.svg"
            imageSrcMobile="/assets/payments/paymentReminders.svg"
            imageClassName="absolute left-4 top-4 sm:left-8 sm:top-8 md:left-0 md:pl-8 md:object-cover md:w-full md:h-full md:py-6 md:top-0 sm:w-full sm:object-left"
            imgBlockClassName="h-[300px] sm:h-[450px] xl:items-center"
            reverse
          />

          <HorizontalFeatureCard
            title="Ваш личный бухгалтер"
            description="Освободитесь от скучных подсчётов и напоминаний. Просто поручите их sovlium"
            imageSrcDesktop="/assets/payments/personalAccountant.webp"
            imageSrcMobile="/assets/payments/personalAccountant_m.webp"
            imageClassName="absolute left-4 top-4 sm:left-8 sm:top-8 w-full object-cover h-full object-left-top"
            reverse
            bg="bg-brand-80"
            descrClassname="text-brand-0"
            imgBlockClassName="sm:h-[450px]"
            buttonText="Попробовать бесплатно"
            buttonVariant="secondary"
            className="gap-y-0"
          />
        </div>
      </section>
    </>
  );
}
