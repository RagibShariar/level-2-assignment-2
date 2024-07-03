import { Request, Response } from "express";
import { createProductToDb } from "./product.service";
import productValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodParsedData = productValidationSchema.parse(productData);
    const result = await createProductToDb(zodParsedData);

    res.status(200).json({
      success: false,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Something went wrong while creating product",
      error: err,
    });
  }
};

export { createProduct };
