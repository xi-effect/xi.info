'use client';

import { ReactNode } from 'react';
import React from 'react';
import { Button } from '@xipkg/button';

import { Modal, ModalContent, ModalTrigger, ModalCloseButton } from '@xipkg/modal';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useForm,
} from '@xipkg/form';
import { ArrowRight, Close } from '@xipkg/icons';
import { Input } from '@xipkg/input';
import { toast } from 'sonner';

type ContactUsModalProps = {
  children: ReactNode;
};

const FormSchema = z.object({
  name: z.string().min(2),
  contact: z.string().min(2),
});

const ContactUsModal = ({ children }: ContactUsModalProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      contact: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log('onSubmit', {
      name: data.name,
      contacts: [data.contact],
    });
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL_BACKEND}/api/demo-applications/`,
      {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'include',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          contacts: [data.contact],
        }),
      },
    );

    console.log('response', response);

    if (response.ok) {
      // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      toast.success('Спасибо, мы получили Ваш контакт', {
        position: "top-center"
      });
      form.reset();
    } else {
      console.error('Ошибка HTTP: ' + response.status);
      toast('Ошибка HTTP: ' + response.status);
    }
  };

  return (
    <Modal>
      <ModalTrigger asChild>{children}</ModalTrigger>
      <ModalContent className="flex flex-col lg:flex-row lg:max-w-[1000px] lg:min-h-[414px] rounded-[24px]">
        <ModalCloseButton breakpoint="lg">
          <Close className="fill-gray-80 lg:fill-gray-0" />
        </ModalCloseButton>
        <div className="flex flex-col w-full p-6 lg:p-12">
          <span className="font-medium text-[32px] w-[80%] md:w-full">Тестирование xi.effect</span>
          <span className="mt-4 font-medium text-[16px]">
            В ближайшие месяцы команда проекта запустит первое тестирование, Вы можете принять
            участие:
          </span>
          <div className="mt-4 flex flex-row">
            <div className="h-4 w-4 mt-1">
              <ArrowRight className="h-4 w-4" />
            </div>
            <span className="ml-2 text-[16px]">Первоочерёдно получить доступ к продукту</span>
          </div>
          <div className="mt-4 flex flex-row">
            <div className="h-4 w-4 mt-1">
              <ArrowRight className="h-4 w-4" />
            </div>
            <span className="ml-2 text-[16px]">
              Напрямую взаимодействовать с командой и влиять на разработку
            </span>
          </div>
          <div className="mt-4 flex flex-row">
            <div className="h-4 w-4 mt-1">
              <ArrowRight className="h-4 w-4" />
            </div>
            <span className="ml-2 text-[16px]">Получить скидки и бонусы в дальнейшем</span>
          </div>
        </div>
        <div className="w-full p-6 lg:p-12 bg-gray-5 rounded-b-[24px] lg:rounded-r-[24px] lg:rounded-bl-none">
          <span className="font-medium text-[16px]">
            Мы свяжемся с вами, когда начнётся тестирование и расскажем, как принять участие
          </span>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 w-full space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Как к вам обращаться?</FormLabel>
                    <FormControl className="mt-2">
                      <Input placeholder="Иван" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Телеграм или электронная почта</FormLabel>
                    <FormControl className="mt-2">
                      <Input placeholder="@ivan" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Отправить контакт
              </Button>
            </form>
          </Form>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ContactUsModal;
