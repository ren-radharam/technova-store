import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/utils/helpers";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/40 transition duration-300 hover:-translate-y-2">
        
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-5">
          <p className="text-sm text-purple-400 mb-2">
            {product.category}
          </p>

          <h3 className="text-xl font-semibold mb-2">
            {product.name}
          </h3>

          <p className="text-white/60 text-sm mb-4 line-clamp-2 min-h-[48px]">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">
            {formatPrice(product.price)}
            </span>

            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
              View
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}