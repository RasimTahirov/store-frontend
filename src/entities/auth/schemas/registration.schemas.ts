import { z } from "zod";

export const registrationSchema = z.object({
  name: z.string().nullable(),
  surname: z.string().nullable(),
  email: z.string().email().nullable(),
  password: z.string().nullable(),
  passwordRepeat: z.string().nullable(),
});
