import { z } from "zod";
import { productSchema } from "../schemas/product.schema";

export type FromProductData = z.infer<typeof productSchema>;
