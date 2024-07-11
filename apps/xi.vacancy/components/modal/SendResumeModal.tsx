'use client';

import React, { ComponentProps, ReactNode } from 'react';
import { Button } from '@xipkg/button';
import { toast } from 'sonner';
import {
  Modal,
  ModalContent,
  ModalTrigger,
  ModalCloseButton,
  ModalHeader,
  ModalTitle,
  ModalDescription,
} from '@xipkg/modal';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, useForm } from '@xipkg/form';
import { Close } from '@xipkg/icons';
import { Input } from '@xipkg/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from '@xipkg/select';
import Memoji from '../common/Memoji';
import { vacancyList } from '../common/const';

type SendResumeModalPropsT = {
  children: ReactNode;
} & ComponentProps<typeof Modal>;

const FormSchema = z.object({
  name: z.string().min(2),
  telegram: z.string().min(2),
  position: z.string().min(2),
  link: z.string().min(2),
  message: z.string().optional(),
});

const SendResumeModal = ({ children, ...props }: SendResumeModalPropsT) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      telegram: '',
      position: undefined,
      link: '',
      message: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL_BACKEND}/api/vacancy-applications/`,
      {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    if (response.ok) {
      // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      toast.success(
        'Спасибо, мы получили ваше резюме! В ближайшее время мы с ним ознакомимся и при необходимости свяжемся с Вами.',
        {
          position: 'top-center',
        },
      );
      form.reset();
    } else {
      console.error(`Ошибка HTTP: ${response.status}`);
      toast(`Ошибка HTTP: ${response.status}`);
    }
  };

  return (
    <Modal {...props}>
      <ModalTrigger asChild>{children}</ModalTrigger>
      <ModalContent
        className="flex flex-col xl:flex-row w-full max-w-[calc(100%-32px)] sm:max-w-[556px] sm:-w-[556px] xl:w-[1000px] xl:max-w-[1000px] border-transparent rounded-3xl"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-4 p-[16px] sm:p-[24px] xl:p-[48px] xl:basis-2/4 rounded-t-3xl xl:rounded-l-3xl xl:rounded-r-none">
          <Memoji imageClassName="w-[64px] h-[64px]" wrapperClassName="" />
          <ModalHeader className="border-b-transparent p-0 flex flex-col gap-2 sm:gap-4">
            <ModalTitle>
              <span className="flex text-[24px] leading-8 font-medium sm:text-[32px]">Отправить резюме</span>
            </ModalTitle>
            <ModalDescription className="text-[16px] font-medium w-[90%] leading-[130%] sm:w-full !mt-0">
              Напиши пару слов о себе и о том, какая вакансия может быть вам интересна
            </ModalDescription>
          </ModalHeader>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 p-[16px] bg-[#F7F7F7] rounded-b-3xl xl:rounded-r-3xl xl:rounded-l-none sm:p-[24px] xl:p-[48px] xl:basis-2/4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="flex">Имя *</FormLabel>
                  <FormControl className="focus:border-brand-80 active:border-brand-80 hover:border-gray-30 !h-[32px]">
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telegram"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="flex">Telegram *</FormLabel>
                  <FormControl className="focus:border-brand-80 active:border-brand-80 hover:border-gray-30 !h-[32px]">
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="flex">Интересующая специализация *</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-full data-[placeholder]:text-gray-30 hover:border-gray-30 focus:border-gray-30 active:border-gray-30 !h-[32px]">
                        <SelectValue placeholder="Выберите специализацию" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {vacancyList.map((item) => (
                            <SelectItem value={item.title} key={item.id}>
                              {item.title}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="flex">Ссылка на резюме *</FormLabel>
                  <FormControl className="focus:border-brand-80 active:border-brand-80 hover:border-gray-30 !h-[32px]">
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="flex gap-0.5">
                    Сообщение <span className="text-gray-30">Не обязательно</span>
                  </FormLabel>
                  <FormControl className="focus:border-brand-80 active:border-brand-80 hover:border-gray-30 !h-[70px]">
                    <textarea
                      {...field}
                      className=" w-full h-[70px] resize-none rounded-[8px] border-2 border-gray-30 p-[12px]"
                      placeholder="Многострочное поле"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="w-full h-[32px]" type="submit">
              Отправить резюме
            </Button>
          </form>
        </Form>
        <ModalCloseButton>
          <Close className="fill-gray-90 sm:fill-gray-0" />
        </ModalCloseButton>
      </ModalContent>
    </Modal>
  );
};

export default SendResumeModal;
