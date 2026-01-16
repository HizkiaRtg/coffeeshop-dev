import Image from "next/image";
import { appInfo } from "@/data/products";

export const metadata = {
  title: "Download App - CoffeeShop",
  description:
    "Download the CoffeeShop app to order your favorite drinks and enjoy exclusive discounts!",
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-16 md:py-24">
        <div className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Download Our App
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                Order your favorite drinks easily, collect loyalty points, and
                enjoy exclusive discounts only available for app users!
              </p>

              {/* App Info */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg">
                  <span className="text-white/60 text-sm">Version</span>
                  <p className="text-white font-semibold">{appInfo.version}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg">
                  <span className="text-white/60 text-sm">Size</span>
                  <p className="text-white font-semibold">{appInfo.size}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg">
                  <span className="text-white/60 text-sm">Requires</span>
                  <p className="text-white font-semibold">
                    {appInfo.minAndroid}
                  </p>
                </div>
              </div>

              {/* Download Button */}
              <a
                href={appInfo.downloadUrl}
                className="inline-flex items-center gap-3 bg-white text-[#3183B5] px-10 py-5 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg shadow-xl"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5765-6.1185-9.4396" />
                </svg>
                Download APK
              </a>

              <p className="text-white/60 text-sm mt-4">
                Released on{" "}
                {new Date(appInfo.releaseDate).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            {/* Phone Mockup */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-72 h-[580px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
                  <div className="absolute inset-3 bg-gray-900 rounded-[2.5rem] overflow-hidden">
                    <Image
                      src="/images/product-1.jpg"
                      alt="App Screenshot"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm opacity-80">Welcome to</p>
                      <h3 className="text-2xl font-bold">CoffeeShop</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0E0D18] text-center mb-12">
          App Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 rounded-2xl bg-[#F8F7FF]">
            <div className="w-16 h-16 bg-[#3183B5] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛒</span>
            </div>
            <h3 className="font-semibold text-[#0E0D18] mb-2">Easy Ordering</h3>
            <p className="text-[#80869A] text-sm">
              Order your favorite drinks with just a few taps
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-[#F8F7FF]">
            <div className="w-16 h-16 bg-[#3183B5] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="font-semibold text-[#0E0D18] mb-2">
              Loyalty Points
            </h3>
            <p className="text-[#80869A] text-sm">
              Earn points with every purchase and redeem for rewards
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-[#F8F7FF]">
            <div className="w-16 h-16 bg-[#3183B5] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎁</span>
            </div>
            <h3 className="font-semibold text-[#0E0D18] mb-2">
              Exclusive Promos
            </h3>
            <p className="text-[#80869A] text-sm">
              Get access to app-only discounts and special offers
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-[#F8F7FF]">
            <div className="w-16 h-16 bg-[#3183B5] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="font-semibold text-[#0E0D18] mb-2">
              Order Tracking
            </h3>
            <p className="text-[#80869A] text-sm">
              Track your order status in real-time
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="bg-[#F8F7FF] py-16 md:py-20">
        <div className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0E0D18] text-center mb-4">
            App Screenshots
          </h2>
          <p className="text-[#80869A] text-center mb-12 max-w-xl mx-auto">
            Take a peek at what awaits you inside our app
          </p>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide justify-start lg:justify-center">
            {[
              "product-1.jpg",
              "product-2.jpg",
              "product-3.jpg",
              "product-4.jpg",
              "product-5.jpg",
            ].map((img, index) => (
              <div
                key={index}
                className="relative w-48 h-96 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={`/images/${img}`}
                  alt={`Screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0E0D18] text-center mb-12">
          Release Notes
        </h2>

        <div className="max-w-2xl mx-auto space-y-6">
          {appInfo.changelog.map((release, index) => (
            <div
              key={release.version}
              className={`border-l-4 ${
                index === 0 ? "border-[#3183B5]" : "border-gray-200"
              } pl-6 pb-6`}
            >
              <div className="flex items-center gap-4 mb-3">
                <span
                  className={`font-bold text-lg ${
                    index === 0 ? "text-[#3183B5]" : "text-[#0E0D18]"
                  }`}
                >
                  v{release.version}
                </span>
                {index === 0 && (
                  <span className="bg-[#53D1B6] text-white text-xs px-2 py-1 rounded-full font-medium">
                    Latest
                  </span>
                )}
                <span className="text-[#80869A] text-sm">
                  {new Date(release.date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <ul className="space-y-2">
                {release.changes.map((change, changeIndex) => (
                  <li
                    key={changeIndex}
                    className="text-[#80869A] text-sm flex items-start gap-2"
                  >
                    <span className="text-[#53D1B6]">✓</span>
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Update Notice */}
      <section className="bg-[#0E0D18] py-12 md:py-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="bg-[#FB7181]/10 border border-[#FB7181]/30 rounded-2xl p-6 max-w-2xl mx-auto">
            <span className="text-3xl mb-4 block">⚠️</span>
            <h3 className="text-white font-semibold text-lg mb-2">
              How to Update the App
            </h3>
            <p className="text-[#80869A] text-sm">
              When a new version is available, please download the latest APK
              from this page and install it. The app will automatically update
              your existing data.
            </p>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="gradient-primary py-16 md:py-20">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Download the CoffeeShop app now and enjoy a seamless ordering
            experience!
          </p>
          <a
            href={appInfo.downloadUrl}
            className="inline-flex items-center gap-3 bg-white text-[#3183B5] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5765-6.1185-9.4396" />
            </svg>
            Download APK v{appInfo.version}
          </a>
        </div>
      </section>
    </div>
  );
}
