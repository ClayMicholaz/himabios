import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "BIOS UBM - Belajar Programming Gratis | Himpunan Mahasiswa Bunda Mulia",
    template: "%s | BIOS UBM",
  },
  description:
    "Belajar programming dan algoritma secara gratis dengan HIMA BIOS Universitas Bunda Mulia. Materi lengkap dari dasar: Python, algoritma, struktur data, dan tips programming.",
  keywords: [
    "BIOS UBM",
    "Bunda Mulia University",
    "programming tutorial",
    "belajar coding gratis",
    "algoritma programming",
    "struktur data",
    "python tutorial",
    "programming indonesia",
    "himpunan mahasiswa",
    "computer science",
    "tutorial programming",
    "coding bootcamp",
    "learn to code",
    "programming fundamentals",
  ],
  authors: [{ name: "HIMA BIOS UBM", url: "https://next-himabios.vercel.app" }],
  creator: "HIMA BIOS - Universitas Bunda Mulia",
  publisher: "HIMA BIOS UBM",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://next-himabios.vercel.app/",
    siteName: "BIOS UBM - Programming Learning Platform",
    title:
      "BIOS UBM - Belajar Programming Gratis | Himpunan Mahasiswa Bunda Mulia",
    description:
      "Platform belajar programming gratis dari HIMA BIOS Universitas Bunda Mulia. Materi lengkap algoritma, struktur data, dan tutorial coding dari dasar.",
    images: [
      {
        url: "/BIOS.png",
        width: 1200,
        height: 630,
        alt: "BIOS UBM - Programming Learning Platform",
      },
    ],
  },
  alternates: {
    canonical: "https://next-himabios.vercel.app/",
  },
  category: "Education",
  classification: "Programming Education Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/BIOS.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2e8555" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
          integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "HIMA BIOS - Universitas Bunda Mulia",
              description:
                "Himpunan Mahasiswa Sistem Informasi yang menyediakan platform belajar programming gratis dengan materi lengkap algoritma dan struktur data.",
              url: "https://next-himabios.vercel.app/",
              logo: "https://next-himabios.vercel.app/BIOS.png",
              sameAs: [
                "https://www.instagram.com/bios_ubm",
                "https://github.com/bios-ubm",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jakarta",
                addressCountry: "ID",
              },
              offers: {
                "@type": "Course",
                name: "Programming Fundamentals Course",
                description:
                  "Kursus programming gratis meliputi algoritma, struktur data, dan pemrograman dasar",
                provider: {
                  "@type": "Organization",
                  name: "HIMA BIOS UBM",
                },
                price: "0",
                priceCurrency: "IDR",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
