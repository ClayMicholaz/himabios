import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/highlight-dracula.css";

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
      "HIMA BIOS UBM Ancol - Belajar Programming Gratis | Himpunan Mahasiswa Informatika Universitas Bunda Mulia",
    template: "%s | HIMA BIOS UBM",
  },
  description:
    "HIMA BIOS UBM Ancol - Himpunan Mahasiswa Informatika Universitas Bunda Mulia. Belajar programming dan algoritma secara gratis. Materi lengkap dari dasar: Python, algoritma, struktur data, dan tips programming. Bergabunglah dengan komunitas programmer UBM!",
  keywords: [
    // Primary target keywords
    "HIMA BIOS",
    "HIMA BIOS UBM",
    "HIMA BIOS UBM Ancol",
    "HIMA BIOS Informatika",
    "Himpunan Mahasiswa BIOS UBM",
    "BIOS UBM",
    "BIOS UBM Ancol",
    // University and location keywords
    "Universitas Bunda Mulia",
    "UBM Ancol",
    "UBM Jakarta",
    "Bunda Mulia University",
    "Informatika UBM",
    "Sistem Informasi UBM",
    "IT UBM",
    "Kampus UBM Ancol",
    // Programming and education keywords
    "Programming UBM",
    "Belajar Programming Gratis",
    "Kursus Programming Jakarta",
    "Tutorial Programming Indonesia",
    "Algoritma Programming",
    "Struktur Data",
    "Python Tutorial",
    "Coding Bootcamp Jakarta",
    "Learn to Code Indonesia",
    "Programming Fundamentals",
    "Himpunan Mahasiswa Informatika",
    "Organisasi Mahasiswa IT",
    "Community Programming Jakarta",
    // Activity keywords
    "Pengumuman HIMA BIOS",
    "Seleksi HIMA BIOS",
    "Recruitment HIMA BIOS",
    "Event Programming UBM",
    "Workshop Programming",
    "Seminar IT UBM",
  ],
  authors: [{ name: "HIMA BIOS UBM", url: "https://himabios.vercel.app" }],
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
    url: "https://himabios.vercel.app/",
    siteName: "HIMA BIOS UBM Ancol - Programming Learning Platform",
    title:
      "HIMA BIOS UBM Ancol - Himpunan Mahasiswa Informatika Universitas Bunda Mulia",
    description:
      "Platform belajar programming gratis dari HIMA BIOS UBM Ancol. Materi lengkap algoritma, struktur data, dan tutorial coding. Bergabunglah dengan komunitas programmer terbaik di Jakarta!",
    images: [
      {
        url: "https://himabios.vercel.app/BIOS.png",
        width: 1200,
        height: 630,
        alt: "HIMA BIOS UBM Ancol - Himpunan Mahasiswa Informatika",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HIMA BIOS UBM Ancol - Programming Learning Platform",
    description:
      "Belajar programming gratis dengan HIMA BIOS UBM Ancol. Komunitas mahasiswa informatika terbaik di Jakarta!",
    images: ["/BIOS.png"],
    creator: "@ubm_bios_ancol",
    site: "@ubm_bios_ancol",
  },
  alternates: {
    canonical: "https://himabios.vercel.app/",
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

        <meta name="google-site-verification" content="wCJ4618uQYlQOFViXg5BBcMRC20LpuWdasmIM0iAk80" />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta, Indonesia" />
        <meta name="geo.position" content="-6.1944,106.8229" />
        <meta name="ICBM" content="-6.1944,106.8229" />

        {/* Organization and Contact Info */}
        <meta name="organization" content="HIMA BIOS UBM Ancol" />
        <meta name="locality" content="Jakarta Utara" />
        <meta name="region" content="Jakarta" />
        <meta name="country" content="Indonesia" />

        {/* Educational Content Tags */}
        <meta
          name="educational-content"
          content="programming, algorithms, data structures"
        />
        <meta
          name="target-audience"
          content="students, programmers, developers"
        />
        <meta name="content-language" content="id" />

        {/* Social Media Verification (add when available) */}
        {/* <meta name="facebook-domain-verification" content="your_verification_code" /> */}
        {/* <meta name="google-site-verification" content="your_verification_code" /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
          integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "@id": "https://himabios.vercel.app/#organization",
                name: "HIMA BIOS UBM Ancol",
                alternateName: [
                  "HIMA BIOS",
                  "HIMA BIOS UBM",
                  "BIOS UBM",
                  "Himpunan Mahasiswa BIOS",
                ],
                description:
                  "Himpunan Mahasiswa Informatika (HIMA BIOS) Universitas Bunda Mulia Ancol yang menyediakan platform belajar programming gratis dengan materi lengkap algoritma dan struktur data.",
                url: "https://himabios.vercel.app/",
                logo: {
                  "@type": "ImageObject",
                  url: "https://himabios.vercel.app/BIOS.png",
                  width: 512,
                  height: 512,
                },
                image: "https://himabios.vercel.app/BIOS.png",
                sameAs: [
                  "https://www.instagram.com/ubm_bios_ancol",
                  "https://www.instagram.com/bios_ubm",
                  "https://github.com/KwikAndreas/himabios",
                ],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Jl. Lodan Raya No. 2",
                  addressLocality: "Ancol",
                  addressRegion: "Jakarta Utara",
                  postalCode: "14430",
                  addressCountry: "ID",
                },
                parentOrganization: {
                  "@type": "University",
                  name: "Universitas Bunda Mulia",
                  alternateName: ["UBM", "Bunda Mulia University", "UBM Ancol"],
                  url: "https://ubm.ac.id/",
                },
                department: {
                  "@type": "CollegeOrUniversity",
                  name: "Program Studi Informatika UBM",
                  description:
                    "Program Studi Informatika Universitas Bunda Mulia",
                },
                offers: {
                  "@type": "Course",
                  name: "Programming Fundamentals Course",
                  description:
                    "Kursus programming gratis meliputi algoritma, struktur data, dan pemrograman dasar untuk mahasiswa dan umum",
                  provider: {
                    "@type": "Organization",
                    name: "HIMA BIOS UBM Ancol",
                  },
                  price: "0",
                  priceCurrency: "IDR",
                  courseMode: "online",
                  educationalLevel: "beginner to intermediate",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://himabios.vercel.app/#website",
                url: "https://himabios.vercel.app/",
                name: "HIMA BIOS UBM Ancol - Platform Belajar Programming",
                description:
                  "Platform resmi HIMA BIOS Universitas Bunda Mulia untuk belajar programming, algoritma, dan struktur data secara gratis",
                publisher: {
                  "@id": "https://himabios.vercel.app/#organization",
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://himabios.vercel.app/docs?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
                inLanguage: "id-ID",
              },
            ]),
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
