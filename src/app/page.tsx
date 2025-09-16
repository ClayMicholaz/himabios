import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import HomepageFeatures from "@/components/HomepageFeatures";

function HomepageHeader() {
  const siteConfig = {
    title: "Kesulitan Memahami Materi Perkuliahan?",
    tagline: "Yuk belajar secara GRATIS dengan klik tombol dibawah ini!",
  };

  return (
    <header className="hero-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 lg:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white dark:text-black leading-tight">
          {siteConfig.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 text-white dark:text-black max-w-3xl mx-auto px-4">
          {siteConfig.tagline}
        </p>
        <div>
          <Link
            href="/learn"
            className="btn-secondary text-base sm:text-lg font-bold px-6 py-3 sm:px-8 sm:py-4 inline-block"
          >
            Ayo Mulai Sekarang 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="BIOS" description="HIMA BIOS Bunda Mulia University">
      <HomepageHeader />
      <HomepageFeatures />
    </Layout>
  );
}
