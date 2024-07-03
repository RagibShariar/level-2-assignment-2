type Variant = {
  type: string;
  value: string;
};

type Inventory = {
  quantity: number;
  inStock: boolean;
};

type IProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[]; // array of strings
  variants: Variant[]; // array of objects
  inventory: Inventory;
};

export default IProduct;
