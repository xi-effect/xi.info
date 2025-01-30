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
  ModalFooter,
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
import { FileUploader } from '@xipkg/fileuploader';
import Memoji from '../common/Memoji';
import { vacancyList } from '../common/const';

type SendResumeModalPropsT = {
  children: ReactNode;
} & ComponentProps<typeof Modal>;

const FormSchema = z.object({
  name: z.string().min(2),
  telegram: z.string().min(2),
  position: z.string().min(2),
  resume: z.string().min(1),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof FormSchema>;

const SendResumeModal = ({ children, ...props }: SendResumeModalPropsT) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      telegram: '',
      position: undefined,
      resume: undefined,
      message: '',
    },
  });

  const [resumeBinary, setResumeBinary] = React.useState<File>();

  const handleFileChange = async (fileList: File | File[]) => {
    const file = Array.isArray(fileList) ? fileList[0] : fileList;
    if (file) {
      setResumeBinary(file);
    }
  };

  const onSubmit = async (data: FormValues) => {
    if (!resumeBinary) {
      toast.error('Вы забыли прекрепить своё резюме.', {
        position: 'top-center',
      });
      return;
    }

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('telegram', data.telegram);
    formData.append('position', data.position || '');
    formData.append('message', data.message || '');
    formData.append('resume', resumeBinary);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL_BACKEND}/api/v2/vacancy-applications/`,
      {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'include',
        body: formData,
      },
    );

    if (response.ok) {
      // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      toast.success(
        'Спасибо, мы получили твоё резюме. В ближайшее время мы с ним ознакомимся и свяжемся с тобой, если у нас есть подходящая для тебя роль.',
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
        className="w-[calc(100%-32px)] max-w-[calc(100vh-32px)] xs:max-w-[448px] xs:w-[448px] sm:max-w-[556px] sm:w-[556px] xl:w-[1000px] xl:max-w-[1000px] rounded-3xl max-h-dvh"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="flex flex-col xl:flex-row w-full max-h-dvh rounded-3xl overflow-auto">
          <div className="flex flex-col xl:justify-start gap-4 p-4 sm:p-6 xl:p-12 xl:basis-2/4">
            <Memoji imageClassName="w-[64px] h-[64px]" wrapperClassName="" />
            <ModalHeader className="border-b-transparent p-0 flex flex-col gap-2 sm:gap-4">
              <ModalTitle>
                <span className="flex text-[24px] leading-8 sm:leading-[42px] font-medium sm:text-[32px]">
                  Отправить резюме
                </span>
              </ModalTitle>
              <ModalDescription className="text-[16px] font-medium w-[90%] leading-[130%] sm:w-full !mt-0">
                Напиши пару слов о себе и о том, какая вакансия может быть тебе интересна
              </ModalDescription>
            </ModalHeader>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="p-4 bg-gray-5 sm:p-[24px] xl:p-[48px] xl:basis-2/4 flex flex-col gap-4 sm:gap-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel className="flex">Имя *</FormLabel>
                    <FormControl className="focus:border-brand-80 active:border-brand-80 hover:border-gray-30 !h-[32px] sm:!h-[48px]">
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
                    <FormControl className="focus:border-brand-80 active:border-brand-80 hover:border-gray-30 !h-[32px] sm:!h-[48px]">
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
                        <SelectTrigger className="w-full data-[placeholder]:text-gray-30 hover:border-gray-30 focus:border-gray-30 active:border-gray-30 !h-[32px] sm:!h-[48px]">
                          <SelectValue placeholder="Выбери специализацию" />
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
                name="resume"
                render={() => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel className="flex">Приложи резюме</FormLabel>
                    <FileUploader
                      onChange={(fileList) => handleFileChange(fileList)}
                      accept=".pdf"
                      fileTypesHint={['PDF']}
                      size="medium"
                    />
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
                    <FormControl className="focus:border-brand-80 active:border-brand-80 hover:border-gray-30 !h-[70px] !sm:h-[48px]">
                      <textarea
                        {...field}
                        className=" w-full h-[70px] resize-none rounded-[8px] border-2 border-gray-30 p-[12px]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <ModalFooter className="border-t-transparent p-0">
                <Button className="w-full h-[32px] sm:h-[48px]" type="submit">
                  Отправить
                </Button>
              </ModalFooter>
            </form>
          </Form>
        </div>
        <ModalCloseButton className="top-4 xs:top-[28px]">
          <Close className="fill-gray-90 sm:fill-gray-0" />
        </ModalCloseButton>
      </ModalContent>
    </Modal>
  );
};

export default SendResumeModal;
