# 1. Main Objective

## 1.1. Pages yang AI-Slop

- `/learning`
- `/about`
- `/announcement`

## 1.2. Fix Performance

### Cara cek Performa

Buka di Browser, CTRL+SHIFT+I atau Klik kanan inspect, lalu ke tab Lighthouse
result saat ini (Mobile):

- Performance: 64
- Accessibility: 89
- Best Practices: 100
- SEO: 92

Desktop:

- Performance: 86
- Accessibility: 94
- Best Practices: 100
- SEO: 92

# 2. Idea for Features

## 2.1. halaman `/learning`

menambahkan LMS, dimana ada field/form dimana user dapat latihan secara langsung diweb.

## 2.2. halaman `/announcement`

Form untuk Daftar dan Pengumuman. jadi saat masa/periode pendaftaran di navbar yang muncul adalah Daftar, setelah selesai periode daftar yang muncul adalah pengumuman. Data Mahasiswa masih hardcode. saat hari-H pengumuman dan setelah reveal akan ada fitur untuk share ig, setiap member yang diterima (WAJIB?) share ke Story IG dan tag `@ubm_bios_ancol`, dan @ubm_bios_ancol akan repost.

Hardcoded pendaftar: [Script Announcement page](/src/app/announcement/page.tsx) L20-L131

example:

```tsx
{
    name: "Claudya Putri Kirania",
    nim: "32250016",
    division: "Public Relation",
    status: "accepted",
    phoneNumber: "6285775228500",
  },
```

## 2.3. halaman `/divisi`

menampilkan foto & jabatan struktural BIOS dari ketua-waketu bph, sekre, ketua divisi, dan anggota divisi.
Notes: saat ini masih kosong

## 2.4. halaman `/register`

form registrasi menjadi anggota BIOS, wajib login dengan menggunakan akun 2FA UBM, menggunakan Supabase harus menggunakan method cron-job biar project supa tidak paused.

### Param /register
ada di .env (tapi ini tidak optimal, harus cari method lain)

better diubah jadi fetching ke db untuk system settings (terdiri dari: REG DATE (START/END), ANNOUNCEMENT DATE, ADMIN_NIM)
```sql
CREATE TABLE system_settings (
    id SERIAL PRIMARY KEY,
    setting_key VARCHAR(50) UNIQUE NOT NULL,
    setting_value VARCHAR(255) NOT NULL,
    description TEXT
);

-- Contoh Data Parameter:
-- INSERT INTO system_settings (setting_key, setting_value, description) VALUES 
-- ('REGISTRATION_START_DATE', '2026-08-01', 'Hidden /announcement, showing /register'),
-- ('REGISTRATION_END_DATE', '2026-08-31', 'Hidden /register'),
-- ('ANNOUNCEMENT_DATE', '2026-09-05', 'showing /announcement'),
-- ('ADMIN_NIM', '32250000', 'ID INT(8) => if login with this ID == Roles == BPH');
```

### Form /register

```sql
CREATE TYPE division_enum AS ENUM (
    'Tata Usaha', 'Public Relation', 'Creative & Design', 
    'Acara', 'Publication & Documentation', 'Development & Programming'
);

CREATE TYPE status_enum AS ENUM ('Pending', 'Accepted', 'Rejected');

CREATE TABLE registrations (
    nim INT PRIMARY KEY,
    nama_lengkap VARCHAR(255) NOT NULL,
    no_hp VARCHAR(20) NOT NULL,
    foto_diri_url VARCHAR(255) NOT NULL, -- Menyimpan URL/path file foto
    link_portofolio VARCHAR(255),        -- Optional
    divisi_pilihan_1 division_enum NOT NULL,
    divisi_pilihan_2 division_enum NOT NULL,
    status status_enum DEFAULT 'Pending',
    accepted_division division_enum,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

# 3. Adding more Articles learn

Topics:

- Base Web HTML, CSS, JS
- Algoritma (Big O Notation, Sorting, Searching)
- Next, PHP, Laravel, Flutter, Python
- SQL

# 4. Project Structure & Scripts Summary

## Structural Layout (src/)

```text
src/
├── app/                  # Next.js App Router structure (Pages & Layouts)
│   ├── about/            # About page
│   ├── announcement/     # Announcement page (form, student data)
│   ├── divisi/           # Divisi (divisions) page
│   ├── event/            # Event page
│   ├── learn/            # Learning page (Dynamic routing: [...slug])
│   ├── struktur/         # Structure page
│   ├── layout.tsx        # Global layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/           # Reusable UI components
│   ├── announcement/     # Specific components for Announcement feature
│   ├── Breadcrumb.tsx
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   └── ...
├── hooks/                # Custom React Hooks
│   └── useAnnouncementLogic.ts
├── lib/                  # Library functions (e.g., Markdown processing)
│   ├── breadcrumbs.ts
│   └── markdown.ts
├── styles/               # Global CSS styles & Design Tokens
│   └── code-light.css, designTokens.ts, etc.
├── types/                # TypeScript type definitions
│   └── globals.d.ts
└── utils/                # Utility functions
    └── imageGenerator.ts
```

### Apa itu Dynamic Routing `[...slug]`?

Dalam folder `src/app/learn/`, terdapat folder unik bernama `[...slug]`. Ini adalah fitur **Dynamic Routing** dari Next.js yang biasa disebut **"Catch-all Segments"**.

**Penjelasan sederhananya:**

- Daripada kita harus repot membuat folder satu per satu untuk setiap materi (misal: bikin folder `python`, lalu di dalamnya bikin folder `intro`), kita cukup menggunakan satu folder "ajaib" `[...slug]` ini.
- Folder ini berfungsi untuk "menangkap" semua alamat URL atau rute apapun yang berada di bawah `/learn/`.
- **Contoh:** Jika kamu mengakses `/learn/python`, `/learn/python/intro`, atau bahkan rute yang lebih panjang seperti `/learn/algoritma/sorting/bubble-sort` — semuanya akan otomatis diarahkan ke satu halaman yang sama yaitu file `page.tsx` di dalam folder `[...slug]`.
- Nanti, kode di halaman tersebut tinggal membaca sisa potong-potongan URL (slug)-nya untuk mencari dan menampilkan file artikel atau materi (Markdown) yang tepat. Sangat praktis dan hemat tenaga untuk web yang berisi banyak artikel!

# 5. Website Features Explanation

## Pusat Pembelajaran (`/learn`)

Platform utama bagi mahasiswa untuk mempelajari pemrograman secara sistematis.

- **Kategori Terstruktur:** Materi dikelompokkan ke dalam kategori seperti **"Pengantar Pemrograman"** (Python, Variabel) dan **"Algoritma"** (Notasi Big O, Pengurutan, Pencarian).
- **Dukungan Markdown:** Menggunakan plugin `react-markdown`, `remark`, dan `rehype` untuk menampilkan teks kaya (*rich text*), cuplikan kode, penyorotan sintaksis, dan rumus matematika.
- **Tautan Cepat:** Navigasi yang memudahkan pengguna untuk langsung menuju pelajaran tertentu.

## Pengumuman & Pendaftaran (`/announcement`)

Fitur interaktif untuk rekrutmen terbuka atau pengumuman resmi HIMA BIOS.

- **Penghitung Mundur:** Menampilkan sisa waktu hingga pengumuman dirilis.
- **Sistem Pengecekan NIM:** Mahasiswa dapat memasukkan Nomor Induk Mahasiswa (NIM) mereka, lengkap dengan simulasi pemuatan (*loading*) dan penanganan kesalahan (*error handling*).
- **Kartu Hasil Mahasiswa:** Jika diterima, sistem menampilkan Nama, NIM, Divisi yang ditugaskan, dan Status mahasiswa.
- **Integrasi WhatsApp:** Mahasiswa yang diterima diberikan tombol untuk langsung bergabung dengan Grup WhatsApp HIMA BIOS.

## Struktur & Divisi (`/struktur` & `/divisi`)

Halaman yang didedikasikan untuk profil organisasi.

- Menampilkan struktur organisasi (Struktur BIOS).
- Menjelaskan berbagai divisi di dalam HIMA BIOS (misalnya: Tata Usaha, Hubungan Masyarakat, Kreatif & Desain, Acara, dll.).
