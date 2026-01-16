"use client";

import { useState } from "react";
import Link from "next/link";
import BannerSlider from "@/components/BannerSlider";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import PromoCard from "@/components/PromoCard";
import NewsCard from "@/components/NewsCard";
import { categories, products, promos, news } from "@/data/products";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products.slice(0, 8)
      : products.filter((p) => p.category === activeCategory).slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Banner */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto py-8 md:py-10">
        <BannerSlider />
      </section>

      {/* Categories Section */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto py-10 md:py-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0E0D18]">
            Our Menu
          </h2>
          <Link
            href="/products"
            className="text-[#3183B5] font-medium hover:underline text-sm md:text-base"
          >
            View All →
          </Link>
        </div>

        {/* Category Pills */}
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-[#80869A]">
            No products found in this category.
          </div>
        )}
      </section>

      {/* Promo Section */}
      <section className="bg-[#F8F7FF] py-14 md:py-20">
        <div className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0E0D18] mb-2">
                Special Offers
              </h2>
              <p className="text-[#80869A]">
                Don&apos;t miss out on our exclusive discounts!
              </p>
            </div>
            <Link
              href="/discounts"
              className="text-[#3183B5] font-medium hover:underline text-sm md:text-base hidden sm:block"
            >
              See All Promos →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promos.map((promo) => (
              <PromoCard key={promo.id} promo={promo} />
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/discounts"
              className="text-[#3183B5] font-medium hover:underline"
            >
              See All Promos →
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto py-14 md:py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0E0D18] mb-2">
              Latest News
            </h2>
            <p className="text-[#80869A]">
              Stay updated with our latest news and articles
            </p>
          </div>
          <Link
            href="/news"
            className="text-[#3183B5] font-medium hover:underline text-sm md:text-base hidden sm:block"
          >
            View All News →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link
            href="/news"
            className="text-[#3183B5] font-medium hover:underline"
          >
            View All News →
          </Link>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="gradient-bg py-20 md:py-28">
        <div className="px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Download Our App
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
            Order your favorite drinks easily through our mobile app. Get
            exclusive discounts and rewards only available for app users!
          </p>
          <Link
            href="/download"
            className="inline-flex items-center gap-4 bg-white text-[#3183B5] px-10 py-5 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg shadow-xl"
          >
            <span className="text-2xl">📱</span>
            Download Now
          </Link>
        </div>
      </section>
    </div>
  );
}
