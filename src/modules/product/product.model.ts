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


//! Product Schema
const productSchema = new Schema<IProduct>({
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

// Create the Product model
export const Product = mongoose.model<IProduct>("Product", productSchema);
