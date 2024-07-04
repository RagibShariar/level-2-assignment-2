import { Request, Response } from "express";
import { createOrderToDb, getAllOrdersFromDb } from "./order.service";
import orderValidationSchema from "./order.validation";

//
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

// get all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query;
    const result = await getAllOrdersFromDb(email);

    res.status(200).json({
      success: true,
      message: !req.query.email
        ? "Orders fetched successfully"
        : `Orders fetched successfully for user email: ${req.query.email}`,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Failed to fetched orders",
      error: err,
    });
  }
};

export { createOrder, getAllOrders };
