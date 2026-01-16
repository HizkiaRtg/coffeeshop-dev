# ☕ CoffeeShop Website

Website showcase untuk aplikasi CoffeeShop - menampilkan produk, promo, dan berita.
**Tidak ada fitur pemesanan** - pemesanan hanya melalui aplikasi mobile.

---

## 📦 Struktur Project

```
coffeeshop-web/
├── public/
│   ├── downloads/          # 📱 APK disimpan di sini
│   │   └── coffeeshop-app-v2.1.0.apk
│   └── images/             # 🖼️ Gambar produk & banner
├── src/
│   ├── app/                # 📄 Halaman website
│   ├── components/         # 🧩 Komponen UI
│   └── data/               # 📊 Data produk (hardcoded)
├── Dockerfile              # 🐳 Docker build config
├── docker-compose.yml      # 🐳 Docker orchestration
└── .dockerignore           # 🐳 Files to ignore
```

---

## 🚀 Cara Menjalankan

### Development (Lokal)
```bash
npm install
npm run dev
# Buka http://localhost:3000
```

### Production (Docker)
```bash
# Build dan jalankan
docker-compose up -d --build

# Cek status
docker-compose ps

# Lihat log
docker-compose logs -f

# Stop
docker-compose down
```

---

## 📱 Cara Update APK

### Metode 1: Rebuild Container
```bash
# 1. Ganti file APK di folder public/downloads/
# 2. Update versi di src/data/products.ts (appInfo.version)
# 3. Rebuild container
docker-compose up -d --build
```

### Metode 2: Tanpa Rebuild (via Volume)
```bash
# 1. Ganti file APK di folder public/downloads/
# 2. Restart container (opsional, biasanya tidak perlu)
docker-compose restart
```

---

## 🏗️ Arsitektur Sistem

```
┌─────────────────────────────────────────────────────┐
│                    DOCKER HOST                       │
│  ┌─────────────────────────────────────────────────┐│
│  │           Container: coffeeshop-web              ││
│  │  ┌─────────────────────────────────────────────┐││
│  │  │         Next.js Website (Port 3000)         │││
│  │  │  • Home Page (produk unggulan, promo)       │││
│  │  │  • Products Page (semua produk)             │││
│  │  │  • Discounts Page (promo aktif)             │││
│  │  │  • News Page (berita & artikel)             │││
│  │  │  • Download Page (link APK)                 │││
│  │  └─────────────────────────────────────────────┘││
│  │  ┌─────────────────────────────────────────────┐││
│  │  │    Static Files                              │││
│  │  │    /public/downloads/app.apk                 │││
│  │  │    /public/images/*                          │││
│  │  └─────────────────────────────────────────────┘││
│  └─────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────┘
```

---

## 📋 Checklist Tugas DevOps

- [x] Website menampilkan produk, diskon, berita
- [x] Tidak ada fitur pemesanan (hanya download APK)
- [x] APK di-host di container (bukan lokal)
- [x] Menggunakan Docker untuk deployment
- [x] Mudah update APK (ganti file → rebuild/restart)

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: TailwindCSS 4
- **Container**: Docker + Docker Compose
- **Runtime**: Node.js 20 Alpine

---

## 📞 Kontak

- Email: hello@coffeeshop.com
- Instagram: @coffeeshop
- WhatsApp: +62 812-3456-7890
