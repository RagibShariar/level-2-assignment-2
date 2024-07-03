import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "./product.controller";

const productRouter = Router();

// routes
productRouter.post("/", createProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:productId", getProductById);
productRouter.put("/:productId", updateProduct);
productRouter.delete("/:productId", deleteProduct);

export default productRouter;
