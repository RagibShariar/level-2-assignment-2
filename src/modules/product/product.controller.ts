/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import {
  createProductToDb,
  deleteProductFromDb,
  getAllProductsFromDb,
  getProductByIdFromDb,
  updateProductToDb,
} from "./product.service";
import productValidationSchema from "./product.validation";

// create a new product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodParsedData = productValidationSchema.parse(productData);
    const result = await createProductToDb(zodParsedData);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message:
        err?.error?.issues[0]?.message ||
        "Something went wrong while creating product",
      error: err,
    });
  }
};

// get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await getAllProductsFromDb(req.query);
    res.status(200).json({
      success: true,
      message: !req.query.searchTerm
        ? "Products fetched successfully!"
        : `Products matching search term '${req.query.searchTerm}' fetched successfully!`,
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message:
        err?.error?.issues[0]?.message ||
        "Something went wrong while getting products",
      error: err,
    });
  }
};

// get a single product by id
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await getProductByIdFromDb(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err?.error?.issues[0]?.message || "Product not found",
      error: err,
    });
  }
};

// update a product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedData = req.body;
    const zodParsedData = productValidationSchema.parse(updatedData);
    const result = await updateProductToDb(productId, zodParsedData);

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message:
        err?.error?.issues[0]?.message ||
        "Something went wrong while updating the product",
      error: err,
    });
  }
};

// delete a product by id
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await deleteProductFromDb(productId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err?.error?.issues[0]?.message || "Something went wrong",
      error: err,
    });
  }
};

export {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
};
