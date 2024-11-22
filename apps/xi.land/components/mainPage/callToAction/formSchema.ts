import * as z from 'zod';

export const FormSchema = z.object({
  name: z.string({
    required_error: 'Обязательное поле',
  }),
  email: z
    .string({
      required_error: 'Обязательное поле',
    })
    .refine(
      (value) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ||
        /^@[a-zA-Z0-9_]{2,}$/.test(value),
      {
        message: 'Введите корректный email или Telegram',
      },
    ),
});
