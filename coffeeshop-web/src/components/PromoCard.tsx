"use client";

import Image from "next/image";
import { Promo } from "@/data/products";
import { useMemo } from "react";

interface PromoCardProps {
  promo: Promo;
}

export default function PromoCard({ promo }: PromoCardProps) {
  const { validUntil, isExpiringSoon } = useMemo(() => {
    const validUntilDate = new Date(promo.validUntil);
    const now = new Date();
    const daysRemaining =
      (validUntilDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
    return {
      validUntil: validUntilDate,
      isExpiringSoon: daysRemaining < 7 && daysRemaining > 0,
    };
  }, [promo.validUntil]);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <Image
          src={promo.image}
          alt={promo.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Discount Badge */}
        <div className="absolute top-3 right-3 bg-[#FB7181] text-white px-3 py-1.5 rounded-full text-sm font-bold">
          {promo.discount}
        </div>

        {/* Expiring Soon Badge */}
        {isExpiringSoon && (
          <div className="absolute top-3 left-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
            Ending Soon!
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-[#0E0D18] mb-2 group-hover:text-[#3183B5] transition-colors">
          {promo.title}
        </h3>
        <p className="text-[#80869A] text-sm mb-4 line-clamp-2">
          {promo.description}
        </p>

        {/* Promo Code */}
        <div className="bg-[#F8F7FF] border-2 border-dashed border-[#3183B5] rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-[#80869A] text-xs">Use Code:</span>
            <span className="font-bold text-[#3183B5]">{promo.code}</span>
          </div>
        </div>

        {/* Valid Period */}
        <div className="flex items-center justify-between text-xs text-[#80869A]">
          <span>Valid until</span>
          <span className="font-medium">
            {validUntil.toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
