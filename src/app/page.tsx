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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-43xl md:text-4xl lg:text-5xl font-bold mb-6 text-white dark:text-black">
          {siteConfig.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 text-white dark:text-black">
          {siteConfig.tagline}
        </p>
        <div>
          <Link href="/learn" className="btn-secondary text-lg font-bold">
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
