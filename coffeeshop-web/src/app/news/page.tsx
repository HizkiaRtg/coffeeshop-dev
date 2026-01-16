import NewsCard from "@/components/NewsCard";
import { news } from "@/data/products";

export const metadata = {
  title: "News & Blog - CoffeeShop",
  description:
    "Stay updated with our latest news, articles, and announcements.",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="gradient-bg py-14 md:py-20">
        <div className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            News & Blog
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Stay updated with our latest news, articles, and announcements
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#F8F7FF] py-14 md:py-20">
        <div className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0E0D18] mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-[#80869A] max-w-xl mx-auto mb-8">
            Get the latest news and exclusive offers delivered straight to your
            inbox!
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:border-[#3183B5] focus:ring-2 focus:ring-[#3183B5]/20 outline-none transition-all"
            />
            <button
              type="submit"
              className="bg-[#3183B5] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#2670a0] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
