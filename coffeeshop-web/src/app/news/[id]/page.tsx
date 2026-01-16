import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "@/data/products";

interface NewsDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return news.map((item) => ({
    id: item.id,
  }));
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params;
  const newsItem = news.find((n) => n.id === id);

  if (!newsItem) {
    notFound();
  }

  // Get other news (excluding current)
  const otherNews = news.filter((n) => n.id !== newsItem.id).slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-4">
        <nav className="flex items-center gap-2 text-sm text-[#80869A]">
          <Link href="/" className="hover:text-[#3183B5]">
            Home
          </Link>
          <span>/</span>
          <Link href="/news" className="hover:text-[#3183B5]">
            News
          </Link>
          <span>/</span>
          <span className="text-[#0E0D18] line-clamp-1">{newsItem.title}</span>
        </nav>
      </div>

      {/* Article */}
      <article className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0E0D18] mb-4">
            {newsItem.title}
          </h1>
          <div className="flex items-center gap-4 text-[#80869A] text-sm">
            <span>
              {new Date(newsItem.date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span>By {newsItem.author}</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {newsItem.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-[#0E0D18] leading-relaxed mb-4">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        {/* Share */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <h3 className="font-semibold text-[#0E0D18] mb-4">
            Share this article
          </h3>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-[#3183B5]/10 flex items-center justify-center hover:bg-[#3183B5] hover:text-white transition-colors">
              📱
            </button>
            <button className="w-10 h-10 rounded-full bg-[#3183B5]/10 flex items-center justify-center hover:bg-[#3183B5] hover:text-white transition-colors">
              🐦
            </button>
            <button className="w-10 h-10 rounded-full bg-[#3183B5]/10 flex items-center justify-center hover:bg-[#3183B5] hover:text-white transition-colors">
              📧
            </button>
          </div>
        </div>
      </article>

      {/* Other News */}
      {otherNews.length > 0 && (
        <section className="bg-[#F8F7FF] py-12 md:py-16">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0E0D18] mb-8">
              Other News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherNews.map((item) => (
                <Link key={item.id} href={`/news/${item.id}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex">
                    <div className="relative w-32 sm:w-48 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-[#3183B5] text-xs font-medium mb-2">
                        {new Date(item.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                      <h3 className="font-semibold text-[#0E0D18] group-hover:text-[#3183B5] transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
