'use client';

import { useRef } from 'react';
import { useInView } from 'motion/react';
import { HorizontalFeatureCard, VerticalFeatureCard } from 'components/main/shared';

export const Payments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const baseMotionConfig = {
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  return (
    <div
      ref={ref}
      className="w-full max-w-[1600px] mx-auto bg-gray-0 grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-16"
    >
      <VerticalFeatureCard
        title="Порядок в финансах"
        description="Легко отслеживайте статусы платежей"
        imageSrcDesktop="/assets/payments/messageList.webp"
        imageSrcMobile="/assets/payments/messageList.webp"
        imageClassName="left-4 sm:left-8 top-4 sm:top-8 xl:top-0 h-full object-cover object-left pl-4 sm:pl-8 xl:pl-0 pt-4.5 sm:pt-18 md:pt-8 xl:pt-18 h-50 sm:h-80 w-full absolute xl:relative xl:object-contain"
        imageBlockClassName="h-[250px]"
        motionConfig={{
          ...baseMotionConfig,
          transition: { ...baseMotionConfig.transition, delay: 0.1 },
        }}
      />

      <VerticalFeatureCard
        title="…и в отношениях"
        description="Обсуждайте только учёбу — денежные вопросы оставьте системе"
        imageSrcDesktop="/assets/payments/files.svg"
        imageSrcMobile="/assets/payments/files.svg"
        imageClassName="w-[440px] relative"
        imageBlockClassName="h-75"
        motionConfig={{
          ...baseMotionConfig,
          transition: { ...baseMotionConfig.transition, delay: 0.2 },
        }}
      />

      <HorizontalFeatureCard
        title="Тактичные напоминания об оплате"
        description="Отправляйте счета на оплату и подтверждайте получение денег. Если оплата задержится, мы сами пришлём ученику напоминание"
        imageSrcDesktop="/assets/payments/paymentReminders.svg"
        imageSrcMobile="/assets/payments/paymentReminders.svg"
        imageClassName="absolute left-4 top-4 sm:left-8 sm:top-8 md:left-0 md:pl-8 md:object-cover md:w-full md:h-full md:py-6.75 md:top-0 sm:w-full sm:object-left"
        imgBlockClassName="h-75 sm:h-112.5 xl:items-center"
        className="gap-8"
        isReversed
        motionConfig={{
          ...baseMotionConfig,
          transition: { ...baseMotionConfig.transition, delay: 0.3 },
        }}
      />

      <HorizontalFeatureCard
        title="Ваш личный бухгалтер"
        description="Освободитесь от скучных подсчётов и напоминаний. Просто поручите их sovlium"
        imageSrcDesktop="/assets/payments/personalAccountant.webp"
        imageSrcMobile="/assets/payments/personalAccountant_m.webp"
        imageClassName="absolute left-4 top-4 sm:left-8 sm:top-8 w-full object-cover h-full object-left-top"
        isReversed
        isInverted
        imgBlockClassName="sm:h-120.5 h-87.5"
        buttonText="Попробовать бесплатно"
        buttonVariant="secondary"
        className="gap-y-0"
        motionConfig={{
          ...baseMotionConfig,
          transition: { ...baseMotionConfig.transition, delay: 0.4 },
        }}
      />
    </div>
  );
};
