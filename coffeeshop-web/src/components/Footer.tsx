import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0E0D18] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-white text-xl">☕</span>
              </div>
              <span className="text-xl font-bold">
                Coffee<span className="text-[#3183B5]">Shop</span>
              </span>
            </Link>
            <p className="text-[#80869A] text-sm leading-relaxed">
              Your favorite coffee shop with the best quality drinks and a cozy
              atmosphere. Download our app to order and enjoy exclusive
              discounts!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#80869A] hover:text-[#3183B5] transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-[#80869A] hover:text-[#3183B5] transition-colors text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/discounts"
                  className="text-[#80869A] hover:text-[#3183B5] transition-colors text-sm"
                >
                  Discounts
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-[#80869A] hover:text-[#3183B5] transition-colors text-sm"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/download"
                  className="text-[#80869A] hover:text-[#3183B5] transition-colors text-sm"
                >
                  Download App
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products?category=boba"
                  className="text-[#80869A] hover:text-[#3183B5] transition-colors text-sm"
                >
                  🧋 Boba
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=coffee"
                  className="text-[#80869A] hover:text-[#3183B5] transition-colors text-sm"
                >
                  ☕ Coffee
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=tea"
                  className="text-[#80869A] hover:text-[#3183B5] transition-colors text-sm"
                >
                  🍵 Tea
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=juice"
                  className="text-[#80869A] hover:text-[#3183B5] transition-colors text-sm"
                >
                  🧃 Juice
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=smoothie"
                  className="text-[#80869A] hover:text-[#3183B5] transition-colors text-sm"
                >
                  🥤 Smoothie
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-[#80869A]">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Jl. Kopi Nikmat No. 123, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>hello@coffeeshop.id</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#3183B5]/20 flex items-center justify-center hover:bg-[#3183B5] transition-colors"
              >
                <span>📱</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#3183B5]/20 flex items-center justify-center hover:bg-[#3183B5] transition-colors"
              >
                <span>📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#3183B5]/20 flex items-center justify-center hover:bg-[#3183B5] transition-colors"
              >
                <span>🐦</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-[#80869A] text-sm">
            © 2026 CoffeeShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
