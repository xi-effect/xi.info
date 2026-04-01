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

  // prettier-ignore
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

  // prettier-ignore
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
        className={`flex flex-col justify-center gap-6 md:grow-0 md:gap-8 ${className}`}
      >
        <h3 className="text-xl-base sm:text-h5 md:text-h3 leading-[1.2] font-semibold text-gray-100 sm:!leading-[1.3] sm:font-medium md:leading-[1.05] md:font-bold">
          Запись на тестирование
        </h3>
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sm:!text-m-base md:!text-l-base mb-2 block">
                Как к вам обращаться?
              </FormLabel>
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
              <FormLabel className="sm:!text-m-base md:!text-l-base mb-2 block">
                Телеграм или электронная почта
              </FormLabel>
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
            <Button className="sm:!text-l-base md:!text-xl-base h-12 w-full rounded-2xl shadow-[0px_4px_4px_rgba(69,84,201,0.25)] md:h-14.5">
              Записаться
            </Button>
          ) : (
            <Button
              variant="default-spinner"
              className="sm:!text-l-base md:!text-xl-base h-12 w-full cursor-not-allowed rounded-2xl shadow-[0px_4px_4px_rgba(69,84,201,0.25)] md:h-14.5"
            >
              Записаться
            </Button>
          )}
          <p className="text-gray-60 text-xxs-base md:text-xs-base mt-2 text-center">
            Нажимая кнопку, вы даёте&nbsp; <br />
            <Link
              className="text-gray-60 !text-xxs-base md:!text-xs-base underline"
              variant="hover"
              target="_blank"
              href="/legal/consent"
            >
              согласие на обработку персональных данных
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};
