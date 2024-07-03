import IProduct from "./product.interface";
import { Product } from "./product.model";

// create a new product
const createProductToDb = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

// get all products
const getAllProductsFromDb = async (query: Record<string, unknown>) => {
  // { name: {$regex: query.searchTerm, $option:i} }
  let searchTerm = "";
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }
  const result = await Product.find({
    name: { $regex: searchTerm, $options: "i" },
  });
  return result;
};

// get a single product by id
const getProductByIdFromDb = async (id: string) => {
  const result = await Product.findOne({ _id: id });
  return result;
};

// update a single product
const updateProductToDb = async (id: string, updatedData: IProduct) => {
  // const product = await Product.findOne({ _id: id });

  const result = await Product.findByIdAndUpdate(id, updatedData);
  return result;
};

// delete a product by id
const deleteProductFromDb = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

export {
  createProductToDb,
  deleteProductFromDb,
  getAllProductsFromDb,
  getProductByIdFromDb,
  updateProductToDb,
};
