"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";

const ITEMS_PER_PAGE = 12;

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.variant.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="gradient-bg py-14 md:py-20">
        <div className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Products
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore our wide selection of premium beverages
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto py-10">
        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-5 py-4 pl-12 rounded-xl border border-gray-200 focus:border-[#3183B5] focus:ring-2 focus:ring-[#3183B5]/20 outline-none transition-all text-[#0E0D18]"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#80869A]">
            🔍
          </span>
        </div>

        {/* Category Pills */}
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => handleCategoryChange(category.id)}
            />
          ))}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mt-6 mb-4">
          <p className="text-[#80869A] text-sm">
            Showing {paginatedProducts.length} of {filteredProducts.length}{" "}
            products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {paginatedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-[#0E0D18] mb-2">
              No products found
            </h3>
            <p className="text-[#80869A]">
              Try adjusting your search or filter to find what you&apos;re
              looking for.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-200 text-[#80869A] hover:border-[#3183B5] hover:text-[#3183B5] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                  currentPage === page
                    ? "bg-[#3183B5] text-white"
                    : "border border-gray-200 text-[#80869A] hover:border-[#3183B5] hover:text-[#3183B5]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-200 text-[#80869A] hover:border-[#3183B5] hover:text-[#3183B5] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              →
            </button>
          </div>
        )}
      </section>

      {/* Download CTA */}
      <section className="bg-[#F8F7FF] py-14 md:py-20 mt-8">
        <div className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0E0D18] mb-4">
            Want to Order?
          </h2>
          <p className="text-[#80869A] max-w-xl mx-auto mb-8">
            Download our app to order your favorite drinks and enjoy exclusive
            discounts!
          </p>
          <a
            href="/download"
            className="inline-flex items-center gap-3 bg-[#3183B5] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#2670a0] transition-colors text-lg"
          >
            <span>📱</span>
            Download App
          </a>
        </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
