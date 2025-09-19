import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pengumuman Seleksi HIMA BIOS UBM Ancol - Himpunan Mahasiswa Informatika",
  description:
    "Pengumuman resmi hasil seleksi anggota baru HIMA BIOS UBM Ancol. Cek status penerimaan Anda di Himpunan Mahasiswa Informatika Universitas Bunda Mulia. Bergabunglah dengan komunitas programmer terbaik di Jakarta!",
  keywords: [
    "Pengumuman HIMA BIOS",
    "Seleksi HIMA BIOS UBM",
    "HIMA BIOS UBM Ancol",
    "Recruitment HIMA BIOS",
    "Hasil Seleksi HIMA BIOS",
    "Anggota Baru HIMA BIOS",
    "Himpunan Mahasiswa Informatika UBM",
    "Organisasi Mahasiswa UBM",
    "BIOS UBM Ancol",
    "Student Organization Jakarta",
  ],
  openGraph: {
    title: "Pengumuman Seleksi HIMA BIOS UBM Ancol",
    description:
      "Pengumuman resmi hasil seleksi anggota baru HIMA BIOS UBM Ancol. Cek status penerimaan Anda sekarang!",
    url: "https://himabios.vercel.app/announcement",
    siteName: "HIMA BIOS UBM Ancol",
    images: [
      {
        url: "https://himabios.vercel.app/BIOS.png",
        width: 1200,
        height: 630,
        alt: "Pengumuman HIMA BIOS UBM Ancol",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pengumuman Seleksi HIMA BIOS UBM Ancol",
    description: "Cek hasil seleksi anggota baru HIMA BIOS UBM Ancol sekarang!",
    images: ["/BIOS.png"],
    creator: "@ubm_bios_ancol",
  },
  alternates: {
    canonical: "https://himabios.vercel.app/announcement",
  },
};
