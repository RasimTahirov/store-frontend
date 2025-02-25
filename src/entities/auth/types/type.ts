import { z } from "zod";
import { registrationSchema } from "../schemas/registration.schemas";

export type FormRegisterData = z.infer<typeof registrationSchema>
