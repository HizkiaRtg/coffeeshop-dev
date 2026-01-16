Langkah-Langkah Build Docker Secara Lokal

Langkah 1: Persiapan File Kredensial Android
1.     Siapkan Keystore Pastikan Anda memiliki file keystore (misalnya upload-keystore.jks) yang digunakan untuk menandatangani aplikasi Android.

keytool -genkey -v -keystore upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload

2.     Tempatkan Keystore Letakkan file keystore tersebut di direktori: android/app/
4.     Buat File key.properties Buat file baru bernama key.properties di dalam direktori android/app/ dengan isi sebagai berikut:
     storePassword=PASSWORD_STORE_ANDA
     keyPassword=PASSWORD_KEY_ANDA
     keyAlias=ALIAS_KEY_ANDA
     storeFile=upload-keystore.jks
9.     Amankan Kredensial Tambahkan baris berikut ke file .gitignore agar file sensitif tidak terunggah ke Git:
   key.properties
   *.jks

Langkah 2: Siapkan File Secrets untuk Build Lokal
Karena Dockerfile menggunakan secrets (untuk CI/CD), kita perlu mensimulasikannya secara lokal dengan membuat file sementara.
1.     Buat keystore.b64
2.     base64 -i android/app/upload-keystore.jks > keystore.b64
3.     Buat store_password.txt
4.     echo "PASSWORD_STORE_ANDA" > store_password.txt
5.     Buat key_password.txt
6.     echo "PASSWORD_KEY_ANDA" > key_password.txt
7.     Buat key_alias.txt
8.     echo "ALIAS_KEY_ANDA" > key_alias.txt

Langkah 3: Build Docker Image
Gunakan docker buildx build agar fitur --secret dapat digunakan:
docker buildx build \
  --secret id=KEYSTORE_BASE64,src=keystore.b64 \
  --secret id=STORE_PASSWORD,src=store_password.txt \
  --secret id=KEY_PASSWORD,src=key_password.txt \
  --secret id=KEY_ALIAS,src=key_alias.txt \
  -t coffeeshop_app:local .

Langkah 4: Jalankan Docker Container
Setelah proses build selesai, jalankan container:
docker run -p 8080:80 coffeeshop_app:local
Aplikasi web yang berisi link download APK dapat diakses di:
http://localhost:8080

Langkah 5: Pembersihan File Sementara
Hapus file-file secrets yang tidak diperlukan:
rm keystore.b64 store_password.txt key_password.txt key_alias.txt
