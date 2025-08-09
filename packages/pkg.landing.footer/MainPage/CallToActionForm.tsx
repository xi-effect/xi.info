/* eslint-disable no-irregular-whitespace */
'use client';

import React, { useState } from 'react';
import { Button } from '@xipkg/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, useForm } from '@xipkg/form';
import { Input } from '@xipkg/input';
import { Link } from '@xipkg/link';
import * as z from 'zod';
import { toast } from 'sonner';
import { FormSchema } from './formSchema';

type CallToActionFormPropsT = {
  className?: string;
};

export const CallToActionForm = ({ className = '' }: CallToActionFormPropsT) => {
  const [isButtonActive, setIsButtonActive] = useState(true);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      contact: '',
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsButtonActive(false);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL_BACKEND}/api/public/user-service/demo-applications/`,
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

    if (response.ok) {
      toast.success(
        'Спасибо, что записались на тестирование! Мы свяжемся с вами в течение 24 часов и всë расскажем',
        {
          position: 'bottom-center',
          duration: 10000,
        },
      );
      setIsButtonActive(true);
      form.reset();
    } else {
      console.error(`Ошибка HTTP: ${response.status}`);
      toast(`Ошибка HTTP: ${response.status}`);
      setIsButtonActive(true);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col justify-center gap-6 md:grow-0 ${className}`}
      >
        <h3 className="text-[32px] font-medium text-gray-100">Запись на тестирование</h3>
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2 block">Как к вам обращаться?</FormLabel>
              <FormControl>
                <Input
                  error={!!errors?.name}
                  type="text"
                  {...field}
                  className="rounded-2xl"
                  placeholder="Анна"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="contact"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="mb-2 block">Телеграм или электронная почта</FormLabel>
              <FormControl>
                <Input
                  error={!!errors?.contact}
                  type="text"
                  {...field}
                  className="rounded-2xl"
                  placeholder="@ann"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div>
          {isButtonActive ? (
            <Button className="w-full rounded-2xl">Записаться</Button>
          ) : (
            <Button variant="default-spinner" className="w-full cursor-not-allowed rounded-2xl">
              Записаться
            </Button>
          )}
          <p className="text-gray-60 text-xxs-base mt-2">
            Нажимая кнопку, вы соглашаетесь с&nbsp;
            <Link className="text-gray-60 text-[10px] font-medium" variant="hover" href="#">
              политикой обработки персональных данных
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};
