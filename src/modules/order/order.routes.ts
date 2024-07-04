import { Router } from "express";
import { createOrder, getAllOrders } from "./order.controller";

const orderRouter = Router();

orderRouter.get("/", getAllOrders);
orderRouter.post("/", createOrder);

export default orderRouter;
