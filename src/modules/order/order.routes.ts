import { Router } from "express";
import { createOrder } from "./order.controller";

const orderRouter = Router();

orderRouter.post("/", createOrder);

export default orderRouter;
