import { z } from "zod";
import orderValidationSchema from "./order.validation";

// export type IOrder = {
//   email: string;
//   productId: string;
//   price: number;
//   quantity: number;
// };

export type IOrder = z.infer<typeof orderValidationSchema>;
