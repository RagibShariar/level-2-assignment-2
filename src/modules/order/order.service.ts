import { Product } from "../product/product.model";
import { getProductByIdFromDb } from "../product/product.service";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderToDb = async (orderData: IOrder) => {
  const { productId } = orderData;
  const product = await getProductByIdFromDb(productId);

  // check product exists or not
  if (!product || null) {
    throw new Error("Product not found on our database");
  }

  // check stock is available or not
  if (!product.inventory.inStock) {
    throw new Error(`Product is currently out of stock`);
  }

  // check inventory/stock is available or not
  if (orderData?.quantity > product?.inventory.quantity)
    throw new Error(
      `We don't have that much product. We have ${product?.inventory.quantity} items remaining`
    );

  product.inventory.quantity -= orderData.quantity;
  if (product.inventory.quantity <= 0) {
    product.inventory.inStock = false;
  }

  // // calculate price
  const price = orderData.quantity * product.price;
  const newOrderData = { ...orderData, price };

  await Product.findByIdAndUpdate(orderData.productId, product);

  const result = await Order.create(newOrderData);
  return result;
};

// get all orders from database
const getAllOrdersFromDb = async (query: Record<string, unknown>) => {
  if (query?.email) {
    const result = await Order.find({ email: query.email });
    return result;
  }
  const result = await Order.find();
  return result;
};
export { createOrderToDb, getAllOrdersFromDb };
