---
sidebar_position: 1
title: "Introduction to NextJS"
description: "Complete guide to getting started with NextJS web development"
---

# Introduction to NextJS

NextJS adalah framework berbasis React yang dikembangkan oleh Vercel untuk membuat website dan web application modern. NextJS membantu developer membangun aplikasi web yang cepat, terstruktur, dan siap digunakan untuk production.

Framework ini banyak digunakan karena memiliki fitur seperti routing otomatis, optimasi performa, server-side rendering, dan kemudahan dalam proses development.

## 📚 Table of Contents

<div class="toc-container">

1. **[1. Apa itu NextJS?](#apa-itu-nextjs)**
2. **[2. Mengapa Belajar NextJS?](#mengapa-belajar-nextjs)**
3. **[3. Installation Guide](#installation-guide)**
   - 🪟 [3.1. Windows](#windows)
4. **[4. Getting Started](#getting-started)**
5. **[5. Your First NextJS WebApp](#your-first-nextjs-webapp)**

</div>

---

## Apa itu NextJS?

NextJS adalah framework React yang digunakan untuk membangun website modern dengan lebih mudah dan lebih terstruktur.

Beberapa fitur utama dari NextJS:

- **File-based Routing** → Routing dibuat otomatis berdasarkan folder.
- **Server-Side Rendering (SSR)** → Membantu website lebih cepat dan SEO-friendly.
- **Static Site Generation (SSG)** → Dapat menghasilkan halaman static yang ringan dan cepat.
- **API Routes** → Bisa membuat backend API langsung di dalam project.
- **Built on React** → Menggunakan ecosystem React yang sangat populer.

---

## Mengapa Belajar NextJS?

🚀 **Digunakan di Industri**

- Banyak digunakan perusahaan startup maupun enterprise.
- Cocok untuk membuat portfolio, company profile, dashboard, dan web app modern.

⚡ **Performa Cepat**

- NextJS memiliki optimasi bawaan seperti image optimization dan code splitting.
- Loading website menjadi lebih cepat dibanding React biasa.

🧩 **Struktur Project Lebih Rapi**

- Routing dan struktur project lebih mudah dipahami.
- Cocok digunakan untuk project kecil maupun besar.

💼 **Skill yang Banyak Dicari**

- NextJS menjadi salah satu skill frontend yang cukup banyak dicari di industri web development.

---

## Installation Guide

Sebelum menggunakan NextJS, Anda perlu menginstall NodeJS terlebih dahulu.

### 📥 Download NodeJS

Kunjungi website resmi NodeJS:

**<a href="https://nodejs.org/en/download" target="_blank" rel="noopener noreferrer">nodejs.org/en/download</a>**

<tabs>
<tabitem value="windows" label="🪟 Windows">

### Installation di Windows

1. **1. Download NodeJS**
   - Download installer `.msi` versi terbaru dari website resmi NodeJS.

2. **2. Jalankan Installer**
   - Buka file installer yang sudah didownload.
   - Klik `Next` hingga proses instalasi selesai.

3. **3. Cek Instalasi NodeJS**

Buka CMD atau Terminal lalu jalankan:

```cmd
node -v
```

4. **4. Cek Versi NPM**

```cmd
npm -v
```

Jika versi berhasil muncul, maka NodeJS sudah berhasil diinstall.

</tabitem>
</tabs>

---

## Getting Started

Setelah NodeJS berhasil diinstall, Anda bisa mulai membuat project NextJS.

### Text Editor + Terminal

Gunakan text editor seperti Visual Studio Code lalu jalankan perintah melalui terminal.

---

## Your First NextJS WebApp

Mari membuat project NextJS pertama.

### Membuat Project Baru

Jalankan perintah berikut di terminal:

```bash
npx create-next-app@latest my-first-next-app
```

atau jika ingin langsung menggunakan TypeScript:

```bash
npx create-next-app@latest my-first-next-app --typescript
```

atau jika ingin menggunakan CSS Tailwind:

```bash
npx create-next-app@latest my-first-next-app --typescript --tailwind
```

---

### Masuk ke Folder Project

```bash
cd my-first-next-app
```

---

### Menjalankan Development Server

```bash
npm run dev
```

maka akan muncul:

```bash
> himabios@0.1.0 dev
> next dev

   ▲ Next.js 15.5.3 <- Versi Nextjs Kamu
   - Local:        http://localhost:3000
   - Network:      http://10.10.10.1:3000

 ✓ Starting...
 ✓ Ready in 2.5s
```

Setelah berhasil dijalankan, buka browser dan akses:

```bash
http://localhost:3000
```

Jika berhasil, maka halaman default NextJS akan muncul.

---

## Struktur Folder

Berikut struktur folder dasar pada project NextJS:

```bash
my-first-next-app/
├── app/                  # Folder routing utama
│   ├── page.tsx          # Halaman utama website
│   ├── layout.tsx        # Layout utama aplikasi
│   └── globals.css       # Global CSS
├── public/               # Asset static
├── node_modules/         # Dependency project
├── package.json          # Konfigurasi dependency
├── next.config.ts        # Konfigurasi NextJS
├── tsconfig.json         # Konfigurasi TypeScript
└── README.md             # Dokumentasi project
```

### Penjelasan Folder Penting

- **📁 `app/`** → Folder utama untuk routing dan halaman website.
- **📄 `page.tsx`** → Halaman utama website.
- **📄 `layout.tsx`** → Layout global aplikasi.
- **📁 `public/`** → Tempat menyimpan gambar atau asset static.
- **📄 `package.json`** → Berisi dependency project dan script.

---

## Modifikasi Kode

Buka file `app/page.tsx` lalu ubah menjadi seperti berikut:

```tsx
export default function Home() {
  return (
    <main>
      <h1>Hello NextJS! 🚀</h1>
      <p>Selamat datang di dunia NextJS</p>
    </main>
  );
}
```

Simpan file lalu lihat hasilnya di browser.

NextJS memiliki fitur **Fast Refresh** sehingga perubahan kode akan langsung tampil tanpa perlu restart server.