import { z } from "zod";

const orderValidationSchema = z.object({
  email: z.string().min(1, { message: "Please enter a valid email address" }),
  productId: z.string().min(1, { message: "product id is required" }),
  price: z.number().min(1, { message: "price is required" }),
  quantity: z.number().gte(1, {message: "minimum order quantity is 1" }),
});

export default orderValidationSchema;
