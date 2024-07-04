import { Product } from "../product/product.model";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderToDb = async (orderData: IOrder) => {
  // console.log("orderData service" ,orderData)
  const existingData = await Product.isExists(orderData.productId);

  // check product exists or not
  if (existingData === null) {
    throw new Error("Product not found on our database");
  }

  // check stock is available or not
  if (!existingData?.inventory?.inStock) {
    throw new Error(`Product currently out of stock`);
  }

  // check inventory is available or not
  if (orderData?.quantity > existingData?.inventory.quantity)
    throw new Error(
      `We don't have that much product. We have ${existingData?.inventory.quantity} items remaining`
    );

  existingData.inventory.quantity -= orderData.quantity;
  if (existingData.inventory.quantity === 0) {
    existingData.inventory.inStock = false;
  }
  await Product.findByIdAndUpdate(orderData.productId, existingData);

  const result = await Order.create(orderData);
  return result;
};
export { createOrderToDb };
