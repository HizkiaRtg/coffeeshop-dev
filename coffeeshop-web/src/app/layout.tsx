import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CoffeeShop - Premium Coffee & Beverages",
  description:
    "Discover our delicious coffee, boba, tea, and more. Download our app to order and enjoy exclusive discounts!",
  keywords: "coffee, boba, tea, cafe, coffee shop, beverages, drinks",
  openGraph: {
    title: "CoffeeShop - Premium Coffee & Beverages",
    description: "Discover our delicious coffee, boba, tea, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
