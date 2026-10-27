# Portofolio Zarkasi — Next.js

Proyek ini telah dikonversi dari HTML/CSS/JavaScript statis ke framework modern **Next.js** (App Router).

---

## 🚀 Fitur yang Dimigrasikan & Ditingkatkan Menjadi Portofolio Profesional

1. **Next.js App Router**:
   - `/` : Halaman Beranda ([`app/page.jsx`](file:///c:/xampp/htdocs/Latihan_Zarkasi_12240007/PortoZarkasi/app/page.jsx))
   - `/about` : Halaman Tentang Saya ([`app/about/page.jsx`](file:///c:/xampp/htdocs/Latihan_Zarkasi_12240007/PortoZarkasi/app/about/page.jsx))
   - Shared Root Layout ([`app/layout.jsx`](file:///c:/xampp/htdocs/Latihan_Zarkasi_12240007/PortoZarkasi/app/layout.jsx))

2. **Bagian Proyek (Professional Case Studies)**:
   - Filter kategori dinamis (Semua Karya, UI/UX & Produk, Pengembangan Web) dengan penghitung jumlah karya aktif.
   - 4 Showcase proyek lengkap dengan badge metrik dampak nyata (*e.g. +42% Efisiensi, 100/100 Lighthouse, 15k+ Users, 99.99% Uptime*).
   - Modal studi kasus terstruktur: Quick Specs (Peran, Klien, Metrik), Tantangan Masalah, Solusi Desain & Teknis, Hasil & Dampak, serta deretan tag teknologi.

3. **Bagian Tentang (Credibility & Career Timeline)**:
   - Di Beranda: Kartu metrik pengalaman (*3+ Tahun, 25+ Komponen, 100% Aksesibilitas*) dan nilai jual unik.
   - Di Halaman `/about`:
     - Narasi profesional yang menghubungkan sensibilitas desain UI/UX dengan ketepatan rekayasa kode frontend.
     - Timeline Pengalaman Profesional & Rekam Jejak Karier.
     - 4 Tahap Metodologi Kerja Terstruktur (Riset, Wireframe, Desain Visual, Kode & Optimasi).
     - Matriks Keahlian & Tech Stack lengkap (UI/UX, Frontend Next.js/React, Workflow & Tools).

4. **Bagian Kontak (Interactive 2-Column Contact Suite)**:
   - Status ketersediaan real-time dengan animasi live pulse dot.
   - Fitur one-click *Salin Alamat Email* dengan umpan balik visual (*"✓ Tersalin"*).
   - Tautan langsung ke LinkedIn, GitHub, Dribbble, dan Instagram.
   - Formulir pesan interaktif dengan seleksi kebutuhan layanan, validasi form, dan integrasi pengiriman.

---

## 📁 Struktur Multi-Page Next.js (Dedicated Routing)

```text
PortoZarkasi/
├── app/
│   ├── page.jsx            # Halaman 1: Beranda (Hero, Featured Preview, Value Strip, CTA)
│   ├── projects/
│   │   └── page.jsx        # Halaman 2: Proyek (Arsip Lengkap, Filter Kategori, Studi Kasus Modal)
│   ├── about/
│   │   └── page.jsx        # Halaman 3: Tentang (Bio, Timeline Karier, Metodologi, Skill Matrix)
│   ├── contact/
│   │   └── page.jsx        # Halaman 4: Kontak (Suite Kontak 2-Kolom, Status Ketersediaan, FAQ)
│   ├── globals.css         # Seluruh styling, CSS variables tema, responsive breakpoints
│   └── layout.jsx          # Root Layout (Navigasi, Fonts, Footer, Anti-FOUC script)
├── components/
│   ├── Navbar.jsx          # Header navigasi aktif untuk seluruh rute terpisah
│   ├── Footer.jsx          # Footer dengan navigasi multi-halaman dan tahun dinamis
│   ├── ProjectSection.jsx  # Galeri proyek modular & modal studi kasus interaktif
│   ├── ContactSection.jsx  # Panel kredensial kontak & formulir kirim pesan
│   └── ScrollReveal.jsx    # Observer animasi scroll
├── next.config.js          # Konfigurasi Next.js
├── package.json            # Dependensi (Next.js 14, React 18) & script build/dev
└── README.md
```

---

## 🛠️ Cara Menjalankan

### 1. Menjalankan Server Pengembangan (Dev)

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### 2. Membangun untuk Produksi (Production Build)

```bash
npm run build
npm start
```
