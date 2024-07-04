import { z } from "zod";

const orderValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter a valid email address" })
    .email({ message: "Please enter a valid email address" }),
  productId: z.string({
    required_error: "The product id is required",
    invalid_type_error: "The product id must be a string",
  }),
  price: z.number(),
  quantity: z.number().gte(1, { message: "minimum order quantity is 1" }),
});

export default orderValidationSchema;
