import { z } from "zod";

export const productSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.string(),
  size: z.string(),
  color: z.string(),
  category: z.string(),
  gender: z.string(),
  images: z.array(z.instanceof(File)), // Ожидаем массив объектов типа File
});
