import PromoCard from "@/components/PromoCard";
import { promos } from "@/data/products";
import Link from "next/link";

export const metadata = {
  title: "Discounts & Promos - CoffeeShop",
  description: "Check out our latest discounts and special offers!",
};

export default function DiscountsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="gradient-bg py-14 md:py-20">
        <div className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discounts & Promos
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Don&apos;t miss out on our exclusive deals and special offers!
          </p>
        </div>
      </section>

      {/* Promo List */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {promos.map((promo) => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </div>
      </section>

      {/* How to Use */}
      <section className="bg-[#F8F7FF] py-14 md:py-20">
        <div className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0E0D18] text-center mb-12">
            How to Use Promo Codes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#3183B5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">1</span>
              </div>
              <h3 className="font-semibold text-[#0E0D18] mb-2">
                Download the App
              </h3>
              <p className="text-[#80869A] text-sm">
                Get our mobile app from the download page
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#3183B5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">2</span>
              </div>
              <h3 className="font-semibold text-[#0E0D18] mb-2">Add to Cart</h3>
              <p className="text-[#80869A] text-sm">
                Choose your favorite drinks and add them to cart
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#3183B5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">3</span>
              </div>
              <h3 className="font-semibold text-[#0E0D18] mb-2">Apply Code</h3>
              <p className="text-[#80869A] text-sm">
                Enter the promo code at checkout and enjoy your discount!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto py-14 md:py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0E0D18] mb-4">
          Ready to Save?
        </h2>
        <p className="text-[#80869A] max-w-xl mx-auto mb-8">
          Download our app now and start using these amazing promo codes!
        </p>
        <Link
          href="/download"
          className="inline-flex items-center gap-3 bg-[#3183B5] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#2670a0] transition-colors text-lg"
        >
          <span>📱</span>
          Download App
        </Link>
      </section>
    </div>
  );
}
