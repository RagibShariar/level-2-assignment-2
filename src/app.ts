import cors from "cors";
import express from "express";
import orderRouter from "./modules/order/order.routes";
import productRouter from "./modules/product/product.route";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Server is running...`);
});

// Application Routes
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

export default app;
