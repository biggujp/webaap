import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";

export * from "./product";
export * from "./user";
export * from "./order";
export * from "./category";
export * from "./api";


import type {
  Product,
  CreateProductInput,
  Order,
} from "@/types";

export default function Home() {
  const product: Product = {
    id: 1,
    name: "Espresso",
    category: "Coffee",
    status: "active",
  };

  const newProduct: CreateProductInput = {
    name: "Americano",
    category: "Coffee",
  };

  const order: Order = {
    id: "ORD-001",
    userId: "USER-001",
    status: "pending",
    items: [
      {
        productId: product.id,
        productName: product.name,
        quantity: 1,
      },
    ],
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">
        {product.name}
      </h1>

      <p>
        New Product: {newProduct.name}
      </p>

      <p>
        Order: {order.id}
      </p>
    </main>
  );
}