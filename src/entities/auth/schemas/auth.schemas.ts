import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email().nullable(),
  password: z.string().nullable(),
})