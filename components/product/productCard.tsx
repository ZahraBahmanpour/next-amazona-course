import { Product } from "@/lib/models/productModel";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col rounded-xl bg-grayBgColor shadow-xl mb-4">
      <figure className="flex items-center justify-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="h-64 w-full"
          />
        </Link>
      </figure>
      <div className="p-6 text-grayHoverColor">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-2xl font-normal">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <div className="card-actions flex items-center justify-between">
          <span className="text-2xl">${product.price}</span>
        </div>
      </div>
    </div>
  );
}
