import { Model } from "mongoose";

type Variant = {
  type: string;
  value: string;
};

type Inventory = {
  quantity: number;
  inStock: boolean;
};

export type IProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[]; // array of strings
  variants: Variant[]; // array of objects
  inventory: Inventory;
};

export interface ProductModel extends Model<IProduct> {
  isExists(id: Types.ObjectId): Promise<IProduct | null>;
}
