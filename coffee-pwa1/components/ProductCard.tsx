import type { Product } from "@/types/product";
import AvailabilityButton from "./AvailabilityButton";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article className="rounded-xl border bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold">
        {product.name}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        {product.category}
      </p>

      <div className="mt-4">
        <AvailabilityButton available={product.status === "active"} />
      </div>
    </article>
  );
}