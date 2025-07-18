'use client';

import { ReactNode } from 'react';
import { motion } from 'motion/react';

import { Modal, ModalContent, ModalTrigger, ModalCloseButton } from '@xipkg/modal';
import { ArrowRight, Close } from '@xipkg/icons';
import { DialogTitle } from '@xipkg/modal/Modal';
import { CallToActionForm } from './CallToActionForm';

const transition = {
  type: 'spring',
  mass: 0.6,
  damping: 10,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.01,
};

type CallToActionModalT = {
  children: ReactNode;
};

export const CallToActionModal = ({ children }: CallToActionModalT) => (
  <Modal>
    <ModalTrigger asChild>{children}</ModalTrigger>
    <ModalContent className="max-h-full sm:max-w-[calc(100%-9rem)] bg-transparent w-[calc(100%-2rem)] md:w-full lg:max-w-[1000px] max-md:overflow-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={transition}
        layoutId="active"
        className="flex flex-col md:flex-row rounded-[24px] bg-gray-0"
      >
        <ModalCloseButton breakpoint="sm" className="top-4 right-4">
          <Close className="fill-gray-80 sm:fill-gray-0" />
        </ModalCloseButton>
        <div className="flex flex-col w-full p-4 sm:p-6 lg:p-12">
          <DialogTitle asChild>
            <h5 className="font-medium w-4/5 md:text-h6 lg:text-h5 text-xl-base sm:text-h5 text-gray-90 sm:w-full">
              Демонстрация xi.effect
            </h5>
          </DialogTitle>
          <p className="font-medium text-s-base md:text-s-base lg:text-m-base sm:text-m-base text-gray-90 mt-4 mb-2">
            Живой разговор с нашим экспертом, не больше получаса
          </p>
          <div className="mt-2 sm:mt-4 flex gap-2 items-center">
            <ArrowRight className="h-4 w-4" />
            <span className="md:text-s-base lg:text-m-base sm:text-m-base text-xs-base text-gray-90">
              Узнаете, как быстро настроить работу
            </span>
          </div>
          <div className="mt-2 sm:mt-4 flex gap-2 items-center">
            <ArrowRight className="h-4 w-4" />
            <span className="md:text-s-base lg:text-m-base sm:text-m-base text-xs-base text-gray-90">
              Сориентируетесь по ценам и скидкам
            </span>
          </div>
          <div className="mt-2 sm:mt-4 flex gap-2 items-center">
            <ArrowRight className="h-4 w-4" />
            <span className="md:text-s-base lg:text-m-base sm:text-m-base text-xs-base text-gray-90">
              Посмотрите, как работает xi.effect
            </span>
          </div>
        </div>
        <CallToActionForm
          className="w-full bg-gray-5 rounded-b-[24px] md:rounded-r-[24px] md:rounded-l-none sm:p-6 lg:p-12"
          title="Мы свяжемся с вами в ближайшее время и договоримся о встрече"
        />
      </motion.div>
    </ModalContent>
  </Modal>
);
