import mongoose, { Schema } from "mongoose";
import IProduct, { ProductModel } from "./product.interface";

const variantSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const inventorySchema = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
});

//! Product Schema
const productSchema = new Schema<IProduct, ProductModel>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String], // array of strings
    required: true,
  },
  variants: {
    type: [variantSchema], // array of objects
    required: true,
  },
  inventory: {
    type: inventorySchema, // object
    required: true,
  },
});

// Mongoose Static methods
productSchema.statics.isExists = async (id: any) => {
  const existingData = await Product.findOne({ _id: id });
  return existingData;
};

// Create the Product model
export const Product = mongoose.model<IProduct, ProductModel>(
  "Product",
  productSchema
);
