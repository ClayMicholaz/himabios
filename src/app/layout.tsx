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
  title: "BIOS - Kesulitan Memahami Materi Perkuliahan?",
  description:
    "HIMA BIOS Bunda Mulia University - Yuk belajar secara GRATIS dengan klik tombol dibawah ini!",
  keywords:
    "BIOS, Bunda Mulia University, programming, belajar, gratis, education",
  authors: [{ name: "BIOS UBM" }],
  creator: "BIOS UBM",
  openGraph: {
    title: "BIOS - Kesulitan Memahami Materi Perkuliahan?",
    description: "HIMA BIOS Bunda Mulia University - Yuk belajar secara GRATIS",
    url: "https://next-himabios.vercel.app/",
    siteName: "BIOS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIOS - Kesulitan Memahami Materi Perkuliahan?",
    description: "HIMA BIOS Bunda Mulia University - Yuk belajar secara GRATIS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
          integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn"
          crossOrigin="anonymous"
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
