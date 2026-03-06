/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@xipkg/button';
import { File, FileUploader } from '@xipkg/fileuploader';
import { Form, FormControl, FormField, FormItem, FormLabel, useForm } from '@xipkg/form';
import { Close } from '@xipkg/icons';
import { Input } from '@xipkg/input';
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@xipkg/modal';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@xipkg/select';
import React, { ComponentProps, ReactNode, useEffect } from 'react';
import { toast } from 'sonner';
import * as z from 'zod';
import Memoji from '../common/Memoji';
import { vacancyList } from '../common/const';

type SendResumeModalPropsT = {
  children: ReactNode;
} & ComponentProps<typeof Modal>;

const FormSchema = z.object({
  name: z.string().min(2),
  telegram: z.string().min(2),
  position: z.string().min(2),
  resume: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof FormSchema>;

const DEFAULT_FILE_SIZE = 10 * 1024 * 1024;
const LIMIT_FILES = 1;

const SendResumeModal = ({ children, open, onOpenChange, ...props }: SendResumeModalPropsT) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      telegram: '',
      position: '',
      resume: undefined,
      message: '',
    },
  });

  useEffect(() => {
    if (!open) {
      form.reset();
    }
  }, [open]);

  const [pending, setPending] = React.useState(false);
  const [resumeBinary, setResumeBinary] = React.useState<File>();

  const handleFileChange = async (fileList: File | File[]) => {
    setPending(true);

    try {
      const file = Array.isArray(fileList) ? fileList[0] : fileList;
      if (file) {
        setResumeBinary(file);
      }
    } catch (error) {
      console.error('Ошибка при обработке файла:', error);
      alert('Произошла ошибка при загрузке файла. Пожалуйста, попробуйте снова.');
    } finally {
      setPending(false);
    }
  };

  const onSubmit = async (data: FormValues) => {
    if (!resumeBinary) {
      toast.error('Вы забыли прекрепить своё резюме.', {
        position: 'top-center',
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('telegram', data.telegram);
      formData.append('position', data.position || '');
      formData.append('message', data.message || '');
      formData.append('resume', resumeBinary);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL_BACKEND}/api/public/user-service/v2/vacancy-applications/`,
        {
          method: 'POST',
          cache: 'no-cache',
          credentials: 'include',
          body: formData,
        },
      );

      if (response.ok) {
        toast.success(
          'Спасибо, мы получили твоё резюме. В ближайшее время мы с ним ознакомимся и свяжемся с тобой, если у нас есть подходящая для тебя роль.',
          {
            position: 'top-center',
          },
        );
        onOpenChange?.(false);
        form.reset();
        setResumeBinary(undefined);
        return;
      }

      const errorData = await response.json();

      if (errorData.detail && Array.isArray(errorData.detail)) {
        // Формируем сообщения об ошибках
        const errorMessages = errorData.detail.map((err) => err.msg).join('\n');

        toast.error(errorMessages, {
          position: 'top-center',
        });
      } else {
        console.error({ error });
        toast('Произошла неизвестная ошибка', {
          position: 'top-center',
        });
      }
    } catch (error) {
      console.error(`Ошибка HTTP: ${response.status}`);
      toast(`Ошибка HTTP: ${response.status}`);
    }
  };

  const handleDeleteFile = () => {
    setResumeBinary(undefined);
  };

  return (
    <Modal {...props} open={open} onOpenChange={onOpenChange}>
      <ModalTrigger asChild>{children}</ModalTrigger>
      <ModalContent
        className="xs:max-w-[448px] xs:w-[448px] max-h-dvh w-[calc(100%-32px)] max-w-[calc(100vh-32px)] rounded-3xl sm:w-[556px] sm:max-w-[556px] xl:w-[1000px] xl:max-w-[1000px]"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="flex max-h-dvh w-full flex-col overflow-auto rounded-3xl xl:flex-row">
          <div className="flex flex-col gap-4 p-4 sm:p-6 xl:basis-2/4 xl:justify-start xl:p-12">
            <Memoji imageClassName="w-[64px] h-[64px]" wrapperClassName="" />
            <ModalHeader className="flex flex-col gap-2 border-b-transparent p-0 sm:gap-4">
              <ModalTitle>
                <span className="flex text-[24px] leading-8 font-medium sm:text-[32px] sm:leading-[42px]">
                  Отправить резюме
                </span>
              </ModalTitle>
              <ModalDescription className="!mt-0 w-[90%] text-[16px] leading-[130%] font-medium sm:w-full">
                Напиши пару слов о себе и о том, какая вакансия может быть тебе интересна
              </ModalDescription>
            </ModalHeader>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="bg-gray-5 flex flex-col gap-4 p-4 sm:gap-6 sm:p-[24px] xl:basis-2/4 xl:p-[48px]"
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
                      <Select onValueChange={field.onChange} value={field.value ?? ''}>
                        <SelectTrigger className="data-[placeholder]:text-gray-30 hover:border-gray-30 focus:border-gray-30 active:border-gray-30 !h-[32px] w-full sm:!h-[48px]">
                          <SelectValue placeholder="Выбери специализацию" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {vacancyList
                              .filter((item) => !item.hidden)
                              .map((item) => (
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
                    {resumeBinary !== undefined ? (
                      <File
                        name={resumeBinary.name}
                        onDeleteClick={() => handleDeleteFile()}
                        isPending={pending}
                      />
                    ) : (
                      <FileUploader
                        limit={LIMIT_FILES}
                        bytesSizeLimit={DEFAULT_FILE_SIZE}
                        onChange={(fileList) => handleFileChange(fileList)}
                        accept=".pdf"
                        fileTypesHint={['PDF']}
                      />
                    )}
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
                    <FormControl className="focus:border-brand-80 active:border-brand-80 hover:border-gray-30 !sm:h-[48px] !h-[70px]">
                      <textarea
                        {...field}
                        className="border-gray-30 h-[70px] w-full resize-none rounded-[8px] border-2 p-[12px]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <ModalFooter className="border-t-transparent p-0">
                <Button className="h-[32px] w-full sm:h-[48px]" type="submit">
                  Отправить
                </Button>
              </ModalFooter>
            </form>
          </Form>
        </div>
        <ModalCloseButton className="xs:top-[28px] top-4">
          <Close className="fill-gray-90 sm:fill-gray-0" />
        </ModalCloseButton>
      </ModalContent>
    </Modal>
  );
};

export default SendResumeModal;
