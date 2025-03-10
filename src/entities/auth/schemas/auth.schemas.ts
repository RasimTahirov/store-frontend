import { z } from 'zod'

export const authSchema = z.object({
  email: z
    .string()
    .email({ message: 'Введите корректный email' })
    .min(1, { message: 'Поле email не должно быть пустым' }),
  password: z.string().min(1, { message: 'Поле пароля не должно быть пустым' }),
})
