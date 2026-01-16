"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const banners = [
  {
    image: "/images/banner-1.jpg",
    title: "Start Your Day with Premium Coffee",
    subtitle: "Fresh brewed, made with love",
  },
  {
    image: "/images/banner-2.jpg",
    title: "New Boba Collection",
    subtitle: "Try our signature pearl milk tea",
  },
  {
    image: "/images/banner-3.jpg",
    title: "Special Discount 30% Off",
    subtitle: "Use code: NEWYEAR30",
  },
];

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={banner.image}
            alt={banner.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 sm:px-16 md:px-20 max-w-2xl">
              <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-5 animate-fade-in leading-tight">
                {banner.title}
              </h2>
              <p className="text-white/80 text-sm sm:text-lg md:text-xl mb-5 md:mb-8">
                {banner.subtitle}
              </p>
              <button className="bg-[#3183B5] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#2670a0] transition-colors text-sm sm:text-base">
                Explore Menu
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-6 sm:w-8 h-2 sm:h-2.5 bg-[#3183B5]"
                : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
