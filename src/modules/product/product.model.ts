import mongoose, { Schema } from "mongoose";
import IProduct from "./product.interface";

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
  inventory: {
    type: Boolean,
    required: true,
  },
});

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
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
    type: [String], // (array of strings)
    required: true,
  },
  variants: {
    type: [variantSchema], // (array of objects)
    required: true,
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
});

export const Product = mongoose.model<IProduct>("Product", productSchema);