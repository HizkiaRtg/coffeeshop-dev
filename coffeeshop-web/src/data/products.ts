export interface Product {
  id: string;
  name: string;
  variant: string;
  image: string;
  description: string;
  rating: number;
  numReviews: number;
  price: number;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Promo {
  id: string;
  title: string;
  description: string;
  discount: string;
  image: string;
  validFrom: string;
  validUntil: string;
  code: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export const categories: Category[] = [
  { id: "all", name: "All", icon: "☕" },
  { id: "boba", name: "Boba", icon: "🧋" },
  { id: "coffee", name: "Coffee", icon: "☕" },
  { id: "tea", name: "Tea", icon: "🍵" },
  { id: "juice", name: "Juice", icon: "🧃" },
  { id: "smoothie", name: "Smoothie", icon: "🥤" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Bubble Tea",
    variant: "Milk Tea",
    image: "/images/product-1.jpg",
    description:
      "Bubble tea klasik dengan tambahan pearl yang kenyal dan susu segar. Perpaduan sempurna antara teh premium dan susu berkualitas tinggi, ditambah dengan topping pearl yang chewy. Minuman ini sangat cocok untuk menemani aktivitas sehari-hari Anda.",
    rating: 4.5,
    numReviews: 250,
    price: 6.0,
    category: "boba",
  },
  {
    id: "2",
    name: "Espresso",
    variant: "Double Shot",
    image: "/images/product-2.jpg",
    description:
      "Espresso double shot dengan biji kopi pilihan yang dipanggang sempurna. Rasa yang bold dan aroma yang kuat akan membangunkan semangat Anda. Dibuat dengan mesin espresso profesional untuk menghasilkan crema yang sempurna.",
    rating: 4.2,
    numReviews: 180,
    price: 5.5,
    category: "coffee",
  },
  {
    id: "3",
    name: "Green Tea",
    variant: "Matcha Latte",
    image: "/images/product-3.jpg",
    description:
      "Matcha Latte premium dari Jepang dengan susu segar. Teh hijau berkualitas tinggi yang dihaluskan menjadi bubuk halus, dicampur dengan susu creamy untuk menghasilkan minuman yang smooth dan menyegarkan.",
    rating: 4.8,
    numReviews: 300,
    price: 7.0,
    category: "tea",
  },
  {
    id: "4",
    name: "Latte",
    variant: "Classic Latte",
    image: "/images/product-4.jpg",
    description:
      'Dalam bahasa Italia, Caffe artinya "kopi", dan Latte adalah "susu", jadi Caffe Latte artinya kopi susu. Caffe latte atau kopi latte ini merupakan salah satu jenis minuman kopi susu yang populer di samping Cappucino.',
    rating: 4.0,
    numReviews: 150,
    price: 5.0,
    category: "coffee",
  },
  {
    id: "5",
    name: "Smoothie",
    variant: "Mixed Berries",
    image: "/images/product-5.jpg",
    description:
      "Smoothie segar dengan campuran berry pilihan - strawberry, blueberry, dan raspberry. Ditambah dengan yogurt dan madu alami untuk rasa yang seimbang. Kaya akan vitamin dan antioksidan.",
    rating: 4.6,
    numReviews: 200,
    price: 6.5,
    category: "smoothie",
  },
  {
    id: "6",
    name: "Taro Boba",
    variant: "Taro Milk Tea",
    image: "/images/product-1.jpg",
    description:
      "Taro milk tea dengan warna ungu yang cantik dan rasa yang creamy. Dibuat dari taro asli yang dihaluskan dan dicampur dengan susu segar serta pearl yang kenyal.",
    rating: 4.7,
    numReviews: 320,
    price: 6.5,
    category: "boba",
  },
  {
    id: "7",
    name: "Cappuccino",
    variant: "Classic Cap",
    image: "/images/product-2.jpg",
    description:
      "Cappuccino klasik dengan foam susu yang tebal dan lembut. Perpaduan sempurna antara espresso, steamed milk, dan milk foam dalam proporsi yang ideal.",
    rating: 4.4,
    numReviews: 190,
    price: 5.5,
    category: "coffee",
  },
  {
    id: "8",
    name: "Jasmine Tea",
    variant: "Premium Jasmine",
    image: "/images/product-3.jpg",
    description:
      "Teh melati premium dengan aroma bunga yang harum dan rasa yang lembut. Diseduh dengan suhu yang tepat untuk menghasilkan cita rasa terbaik.",
    rating: 4.3,
    numReviews: 145,
    price: 4.5,
    category: "tea",
  },
  {
    id: "9",
    name: "Orange Juice",
    variant: "Fresh Squeezed",
    image: "/images/product-4.jpg",
    description:
      "Jus jeruk segar yang diperas langsung dari jeruk pilihan. Tanpa tambahan gula atau pengawet, hanya kesegaran jeruk murni.",
    rating: 4.5,
    numReviews: 175,
    price: 5.0,
    category: "juice",
  },
  {
    id: "10",
    name: "Mango Smoothie",
    variant: "Tropical Mango",
    image: "/images/product-5.jpg",
    description:
      "Smoothie mangga tropis yang segar dan manis alami. Dibuat dari mangga matang pilihan yang diblender dengan es dan sedikit susu.",
    rating: 4.6,
    numReviews: 210,
    price: 6.0,
    category: "smoothie",
  },
  {
    id: "11",
    name: "Brown Sugar Boba",
    variant: "Tiger Milk Tea",
    image: "/images/product-1.jpg",
    description:
      "Brown sugar boba yang viral dengan motif tiger stripes yang cantik. Pearl dimasak dengan gula merah untuk rasa karamel yang kaya.",
    rating: 4.9,
    numReviews: 450,
    price: 7.0,
    category: "boba",
  },
  {
    id: "12",
    name: "Americano",
    variant: "Iced Americano",
    image: "/images/product-2.jpg",
    description:
      "Americano dingin yang menyegarkan. Espresso berkualitas tinggi dicampur dengan air dingin untuk rasa kopi yang clean dan bold.",
    rating: 4.1,
    numReviews: 165,
    price: 4.5,
    category: "coffee",
  },
];

export const promos: Promo[] = [
  {
    id: "1",
    title: "New Year Special",
    description:
      "Rayakan tahun baru dengan diskon spesial untuk semua minuman boba! Berlaku untuk pembelian minimal 2 minuman.",
    discount: "30%",
    image: "/images/banner-1.jpg",
    validFrom: "2026-01-01",
    validUntil: "2026-01-31",
    code: "NEWYEAR30",
  },
  {
    id: "2",
    title: "Buy 2 Get 1 Free",
    description:
      "Beli 2 minuman apapun dan dapatkan 1 minuman gratis! Berlaku untuk semua kategori minuman.",
    discount: "Free 1",
    image: "/images/banner-2.jpg",
    validFrom: "2026-01-05",
    validUntil: "2026-01-20",
    code: "B2G1FREE",
  },
  {
    id: "3",
    title: "Student Discount",
    description:
      "Diskon khusus untuk pelajar dan mahasiswa. Tunjukkan kartu pelajar Anda untuk mendapatkan diskon.",
    discount: "15%",
    image: "/images/banner-3.jpg",
    validFrom: "2026-01-01",
    validUntil: "2026-12-31",
    code: "STUDENT15",
  },
  {
    id: "4",
    title: "Weekend Vibes",
    description:
      "Nikmati diskon spesial setiap akhir pekan! Berlaku untuk semua minuman signature.",
    discount: "20%",
    image: "/images/banner-1.jpg",
    validFrom: "2026-01-01",
    validUntil: "2026-03-31",
    code: "WEEKEND20",
  },
];

export const news: NewsItem[] = [
  {
    id: "1",
    title: "Grand Opening Cabang Baru di Surabaya",
    excerpt:
      "Kami dengan bangga mengumumkan pembukaan cabang baru kami di Surabaya...",
    content: `Kami dengan bangga mengumumkan pembukaan cabang baru kami di Surabaya! Berlokasi di pusat kota, cabang baru ini siap melayani Anda dengan menu-menu favorit dan suasana yang nyaman.

    Untuk merayakan pembukaan ini, kami menawarkan diskon 50% untuk semua minuman selama seminggu penuh! Jangan lewatkan kesempatan ini untuk mencoba berbagai minuman signature kami.
    
    Cabang baru ini dilengkapi dengan:
    - Area indoor dan outdoor yang luas
    - WiFi gratis
    - Stop kontak di setiap meja
    - Parkir yang memadai
    
    Kami tunggu kedatangan Anda!`,
    image: "/images/banner-1.jpg",
    date: "2026-01-05",
    author: "Admin",
  },
  {
    id: "2",
    title: "Menu Baru: Seasonal Winter Collection",
    excerpt:
      "Koleksi minuman musiman terbaru kami hadir untuk menghangatkan hari-hari Anda...",
    content: `Koleksi minuman musiman terbaru kami hadir untuk menghangatkan hari-hari Anda di musim dingin ini!

    Introducing our Winter Collection:
    1. Hot Chocolate Deluxe - Cokelat panas dengan whipped cream dan marshmallow
    2. Gingerbread Latte - Latte dengan sirup gingerbread dan rempah-rempah
    3. Cinnamon Apple Tea - Teh apel dengan kayu manis yang hangat
    4. Hazelnut Mocha - Mocha dengan sirup hazelnut yang creamy
    
    Semua minuman dalam koleksi ini tersedia dalam versi hot dan iced. Koleksi ini hanya tersedia untuk waktu terbatas, jadi pastikan Anda mencobanya sebelum habis!`,
    image: "/images/banner-2.jpg",
    date: "2026-01-03",
    author: "Marketing Team",
  },
  {
    id: "3",
    title: "Tips: Cara Menikmati Kopi yang Benar",
    excerpt:
      "Tahukah Anda bahwa ada cara yang tepat untuk menikmati kopi? Simak tips berikut...",
    content: `Tahukah Anda bahwa ada cara yang tepat untuk menikmati kopi? Berikut adalah beberapa tips dari barista kami:

    1. Perhatikan suhu: Kopi paling nikmat dinikmati pada suhu 60-70°C untuk hot coffee, atau dengan es yang cukup untuk iced coffee.
    
    2. Cium aromanya terlebih dahulu: Sebelum menyeruput, cium aroma kopi Anda. Ini akan meningkatkan pengalaman minum kopi Anda.
    
    3. Sip, jangan gulp: Nikmati kopi Anda dengan menyeruput perlahan agar lidah dapat merasakan semua flavor notes.
    
    4. Pairing yang tepat: Kopi cocok dipadukan dengan pastry atau makanan manis untuk menyeimbangkan rasa pahit.
    
    5. Waktu yang tepat: Hindari minum kopi saat perut kosong. Waktu terbaik adalah setelah sarapan atau saat sore hari.
    
    Selamat menikmati kopi Anda!`,
    image: "/images/banner-3.jpg",
    date: "2026-01-01",
    author: "Head Barista",
  },
];

export const appInfo = {
  version: "2.1.0",
  releaseDate: "2026-01-05",
  size: "45 MB",
  minAndroid: "Android 6.0+",
  downloadUrl: "/downloads/coffeeshop-app-v2.1.0.apk",
  changelog: [
    {
      version: "2.1.0",
      date: "2026-01-05",
      changes: [
        "Added new payment methods",
        "Improved order tracking system",
        "Fixed bugs in cart calculation",
        "UI improvements and performance optimization",
      ],
    },
    {
      version: "2.0.0",
      date: "2025-12-15",
      changes: [
        "Complete UI redesign",
        "Added loyalty points system",
        "New promo and voucher features",
        "Added order history",
      ],
    },
    {
      version: "1.5.0",
      date: "2025-11-01",
      changes: [
        "Added product reviews feature",
        "Improved search functionality",
        "Added favorite products",
        "Bug fixes and improvements",
      ],
    },
  ],
};
