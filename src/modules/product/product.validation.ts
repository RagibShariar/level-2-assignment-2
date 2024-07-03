import { z } from "zod";

const variantValidationSchema = z.object({
  type: z.string().trim(),
  value: z.string().trim(),
});

const inventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean().default(true),
});

//! Product Zod Validation
const productValidationSchema = z.object({
  name: z.string().trim().min(1, { message: "name is required" }),
  description: z.string().trim().min(1, { message: "description is required" }),
  price: z.number(),
  category: z.string().trim(),
  tags: z.string().array(), // array of strings
  variants: z.array(variantValidationSchema), // array of objects
  inventory: inventoryValidationSchema.required(),
});

export default productValidationSchema;
