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
const getProductByIdFromDb = async (id: ObjectId) => { 
  const result = await Product.findOne({ _id:id });
  return result;
}

export { createProductToDb,getAllProductsFromDb, getProductByIdFromDb };
