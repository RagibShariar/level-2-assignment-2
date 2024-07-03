import { z } from "zod";

const variantValidationSchema = z.object({
  type: z.string().trim(),
  value: z.string().trim(),
});

const inventoryValidationSchema = z.object({
  quantity: z.number(),
  inventory: z.boolean(),
});

//! Product Zod Validation
export const productValidationSchema = z.object({
  name: z.string().trim(),
  description: z.string().trim(),
  price: z.number(),
  category: z.string().trim(),
  tags: z.string().array(), // array of strings
  variants: z.array(variantValidationSchema), // array of objects
  inventory: inventoryValidationSchema.required(),
});
