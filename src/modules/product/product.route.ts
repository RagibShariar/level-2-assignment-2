import { Router } from "express";
import {createProduct, getAllProducts, getProductById} from './product.controller'

const productRouter = Router();

// routes
productRouter.post("/", createProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:productId", getProductById);
// productRouter.put("/:productId", updateProduct);
// productRouter.delete("/:productId", deleteProduct);

export default productRouter;
