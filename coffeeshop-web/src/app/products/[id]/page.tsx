import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-4">
        <nav className="flex items-center gap-2 text-sm text-[#80869A]">
          <Link href="/" className="hover:text-[#3183B5]">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#3183B5]">
            Products
          </Link>
          <span>/</span>
          <span className="text-[#0E0D18]">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Image Gallery Thumbnails (placeholder) */}
            <div className="flex gap-3 mt-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${
                    i === 1 ? "border-[#3183B5]" : "border-transparent"
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={`${product.name} ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#3183B5]/10 text-[#3183B5] px-3 py-1 rounded-full text-sm font-medium capitalize">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#0E0D18] mb-2">
              {product.name}
            </h1>
            <p className="text-[#80869A] text-lg mb-4">{product.variant}</p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={
                      star <= Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  >
                    ⭐
                  </span>
                ))}
              </div>
              <span className="text-[#0E0D18] font-semibold">
                {product.rating}
              </span>
              <span className="text-[#80869A]">
                ({product.numReviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#3183B5]">
                ${product.price.toFixed(2)}
              </span>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-[#0E0D18] mb-3">
                Description
              </h3>
              <p className="text-[#80869A] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Options (display only) */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#0E0D18] mb-3">
                Available Sizes
              </h3>
              <div className="flex gap-3">
                {["S", "M", "L"].map((size) => (
                  <div
                    key={size}
                    className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center font-semibold text-[#80869A]"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#F8F7FF] rounded-2xl p-6 mt-8">
              <h3 className="font-semibold text-[#0E0D18] mb-2">
                🛒 Want to order this drink?
              </h3>
              <p className="text-[#80869A] text-sm mb-4">
                Download our mobile app to place orders and enjoy exclusive
                discounts!
              </p>
              <Link
                href="/download"
                className="inline-flex items-center gap-2 bg-[#3183B5] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2670a0] transition-colors"
              >
                <span>📱</span>
                Download App to Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0E0D18] mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
