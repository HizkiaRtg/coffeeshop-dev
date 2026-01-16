"use client";

import { Category } from "@/data/products";

interface CategoryCardProps {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryCard({
  category,
  isActive,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
        isActive
          ? "bg-[#3183B5] text-white shadow-lg shadow-[#3183B5]/30"
          : "bg-white text-[#80869A] border border-gray-200 hover:border-[#3183B5] hover:text-[#3183B5]"
      }`}
    >
      <span className="text-lg">{category.icon}</span>
      <span>{category.name}</span>
    </button>
  );
}
