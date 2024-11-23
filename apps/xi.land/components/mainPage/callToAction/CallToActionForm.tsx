'use client';

import { Button } from '@xipkg/button';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, useForm } from '@xipkg/form';
import { Input } from '@xipkg/input';
import { Link } from '@xipkg/link';
import { useState } from 'react';
import * as z from 'zod';
import { toast } from 'sonner';
import { FormSchema } from './formSchema';

export const CallToActionForm = () => {
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

    if (response.ok) {
      toast.success('Спасибо, мы получили Ваш контакт', {
        position: 'bottom-center',
      });
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
      <motion.form
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col rounded-2xl md:grow-0 sm:rounded-[32px] bg-gray-0 gap-6 p-6 sm:p-12 md:p-6 lg:p-12 justify-center"
      >
        <h1 className="font-medium text-xl-base sm:text-h5 md:text-xl-base lg:text-h5">
          Запись на демонстрацию
        </h1>
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
                  placeholder="Денис"
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
                  placeholder="@denis"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div>
          {isButtonActive ? (
            <Button className="rounded-2xl w-full">Записаться</Button>
          ) : (
            <Button variant="default-spinner" className="rounded-2xl w-full" disabled />
          )}
          <p className="text-gray-60 text-xxs-base mt-2">
            Нажимая кнопку, вы соглашаетесь с&nbsp;
            <Link className="text-gray-60 text-xxs-base font-medium" variant="none" href="#">
              политикой обработки пресональных данных
            </Link>
          </p>
        </div>
      </motion.form>
    </Form>
  );
};
