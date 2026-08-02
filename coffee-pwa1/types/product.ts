export type ProductStatus =
  | "active"
  | "inactive";

export type Product = {
  id: number;
  name: string;
  category: string;
  description?: string;
  imageUrl?: string;
  status: ProductStatus;
};

export type CreateProductInput = {
  name: string;
  category: string;
  description?: string;
  imageUrl?: string;
};

export type UpdateProductInput =
  Partial<CreateProductInput>;