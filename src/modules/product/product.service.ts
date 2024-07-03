import { ObjectId } from "mongoose";
import IProduct from "./product.interface";
import {Product} from "./product.model";

//
const createProductToDb = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

//
const getAllProductsFromDb = async () => {
  const result = await Product.find();
  return result;
}

//
const getProductByIdFromDb = async (id: string) => { 
  const result = await Product.findOne({ _id:id });
  return result;
}

//
const deleteProductFromDb = async(id:string) => {
  const result = await Product.deleteOne({ _id:id });
  return result;
}

export { createProductToDb,getAllProductsFromDb, getProductByIdFromDb,deleteProductFromDb };
