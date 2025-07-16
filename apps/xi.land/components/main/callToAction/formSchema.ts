import * as z from 'zod';

export const FormSchema = z.object({
  name: z.string().min(2),
  contact: z.string().min(2),
});
