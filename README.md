# Landing Page – Museum Bank Indonesia Surabaya

Landing page ini dibuat sebagai tugas Pemrograman Web untuk mempromosikan **Museum Bank Indonesia Surabaya**.  
Halaman ini menampilkan informasi singkat museum, galeri foto, lokasi pada peta, hingga form kunjungan/buku tamu yang interaktif.

Demo: https://rafaelwiratama.github.io/LandingPage/

---

## 🎯 Tujuan Proyek

- Menerapkan materi dasar **HTML, CSS, dan JavaScript** dalam satu halaman utuh.
- Membuat landing page yang **responsive** dan nyaman digunakan di desktop maupun mobile.
- Menggunakan **Google Maps (embed)** untuk menampilkan lokasi museum.
- Mengelola data sederhana di sisi client (buku tamu) dengan **DOM manipulation** menggunakan JavaScript.
- Men-deploy proyek statis menggunakan **GitHub Pages**.

---

## 🧩 Fitur Utama

### 1. Hero Section
- Judul besar dan deskripsi singkat museum.
- Tombol **“Kunjungi Sekarang”** yang mengarah ke form kunjungan.
- Informasi jam buka, lokasi, dan promo rombongan.

### 2. Mengapa Berkunjung
- Tiga kartu alasan utama:
  - Arsitektur ikonik
  - Edukasi perbankan
  - Spot foto favorit

### 3. Detail Museum
- Penjelasan singkat tentang sejarah dan fungsi museum.
- Informasi:
  - Lokasi
  - Jam buka
  - Fasilitas
- Panel informasi tiket (dewasa, pelajar/mahasiswa, anak-anak) + tombol ke bagian promo.

### 4. Galeri Museum
- Grid berisi foto-foto museum yang diambil dari folder `images/`.
- Efek hover sederhana untuk memberi kesan interaktif dan modern.

### 5. Lokasi di Google Maps
- Peta interaktif menggunakan **Google Maps embed**.
- Lokasi sudah disesuaikan ke **Museum De Javasche Bank**:

### 6. Promo Rombongan
- Penjelasan singkat promo untuk rombongan sekolah/komunitas.
- Syarat singkat + tombol ajakan daftar rombongan.

### 7. Testimoni Pengunjung
- Tiga testimoni singkat dalam bentuk kartu.
- Memberi gambaran pengalaman pengunjung museum (guru, mahasiswa, sekolah).

### 8. Form Kunjungan & Buku Tamu
- Form input:
  - Nama
  - Email
  - Pesan / rencana kunjungan
- Fitur JavaScript:
  - Validasi sederhana: semua field wajib diisi.
  - Data yang dikirim akan otomatis ditambahkan ke **tabel pengunjung** di sebelah kanan.
  - Pesan sukses / error ditampilkan di bawah tombol submit.

### 9. FAQ
- Beberapa pertanyaan yang sering ditanyakan:
  - Perlu reservasi atau tidak.
  - Ketersediaan parkir.
  - Aturan pengambilan foto.

### 10. Navigasi & Pengalaman Pengguna
- Navbar di atas halaman dengan link ke setiap section.
- **Smooth scrolling** menggunakan JavaScript saat link navigasi diklik.

---

## 🏗️ Struktur Folder

```text
LandingPage/
├─ index.html          # Halaman utama landing page
├─ style.css           # Styling utama (layout, warna, responsive)
├─ README.md           # Dokumentasi proyek
├─ images/             # Semua gambar museum
│  ├─ Museum BI Surabaya.jpg
│  ├─ De Javasche Bank.jpg
│  ├─ Galeri Museum 1.jpg
│  ├─ Galeri Museum 2.jpg
│  ├─ Galeri Museum 3.jpg
│  └─ Galeri Museum 4.jpg
└─ assets/
   └─ js/
      └─ main.js       # Script untuk smooth scroll + form & tabel pengunjung
