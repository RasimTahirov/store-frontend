import { z } from "zod";

export const registrationSchema = z.object({
  name: z.string().min(1, { message: "Поле имя не должно быть пустым" }),
  surname: z
    .string()
    .min(1, { message: "Поле с фамилией не должно быть пустым" }),
  email: z
    .string()
    .email({ message: "Введите корректный email" })
    .min(1, { message: "Поле email не должно быть пустым" }),
  password: z
    .string()
    .min(6, { message: "Пароль должен содержать минимум 6 символов" }),
  passwordRepeat: z
    .string()
    .min(6, { message: "Пароль должен содержать минимум 6 символов" }),
});
