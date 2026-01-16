import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="group bg-gradient-to-br from-[#364955] to-[#656667] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {/* Price Badge */}
          <div className="absolute top-3 right-3 bg-[#3183B5] text-white px-3 py-1 rounded-full text-sm font-semibold">
            ${product.price.toFixed(2)}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-white font-semibold text-lg truncate">
            {product.name}
          </h3>
          <p className="text-white/70 text-sm truncate mb-3">
            {product.variant}
          </p>

          {/* Rating */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">⭐</span>
              <span className="text-white font-medium text-sm">
                {product.rating}
              </span>
              <span className="text-white/50 text-xs">
                ({product.numReviews})
              </span>
            </div>
            <span className="text-[#53D1B6] text-sm font-medium group-hover:underline">
              View →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
