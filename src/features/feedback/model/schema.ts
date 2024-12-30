import { z } from 'zod';

export const feedbackSchema = z.object({
  fullName: z.string().min(10, 'Не правильно заполнено ФИО'),
  company: z.string().min(3, 'Не правильно заполнено название компании'),
  email: z.string().email('Некорректный email'),
  phone: z.string().regex(/^\+?[0-9]{10,12}$/, 'Некорректный номер телефона'),
  comment: z.string().optional(),
  agreement: z
    .boolean()
    .refine((val) => val === true, 'Необходимо согласие с обработкой данных'),
});
