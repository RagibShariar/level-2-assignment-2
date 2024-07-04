import { Request, Response } from "express";
import { createOrderToDb } from "./order.service";
import orderValidationSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodParsedData = orderValidationSchema.parse(orderData);
    const result = await createOrderToDb(zodParsedData);

    res.status(200).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || "failed",
      error: err,
    });
  }
};

export { createOrder };
