import Link from "next/link";
import Image from "next/image";
import { NewsItem } from "@/data/products";

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <Link href={`/news/${news.id}`}>
      <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Date */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#3183B5] text-xs font-medium">
              {new Date(news.date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="text-[#80869A]">•</span>
            <span className="text-[#80869A] text-xs">{news.author}</span>
          </div>

          <h3 className="font-bold text-lg text-[#0E0D18] mb-2 group-hover:text-[#3183B5] transition-colors line-clamp-2">
            {news.title}
          </h3>
          <p className="text-[#80869A] text-sm line-clamp-2">{news.excerpt}</p>

          <div className="mt-4 flex items-center gap-2 text-[#3183B5] text-sm font-medium group-hover:gap-3 transition-all">
            <span>Read More</span>
            <span>→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
