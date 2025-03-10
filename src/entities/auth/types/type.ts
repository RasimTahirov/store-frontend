import { z } from 'zod'

import { authSchema } from '../schemas/auth.schemas'
import { registrationSchema } from '../schemas/registration.schemas'

export type FormRegisterData = z.infer<typeof registrationSchema>
export type FromAuthData = z.infer<typeof authSchema>

export interface IUser {
  id: string
  name: string
  surname: string
  email: string
  password: string
  role: string
}
