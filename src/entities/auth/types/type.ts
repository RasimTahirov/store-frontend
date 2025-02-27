import { z } from "zod";
import { registrationSchema } from "../schemas/registration.schemas";
import { authSchema } from "../schemas/auth.schemas";

export type FormRegisterData = z.infer<typeof registrationSchema>
export type FromAuthData = z.infer<typeof authSchema>

export interface IUser {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  role: string;
}