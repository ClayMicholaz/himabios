import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";

const bootChecks = ["Bahasa Indonesia", "Materi gratis", "Mode gelap"];

const learningTracks = [
  {
    title: "Pengantar Pemrograman",
    topics: "Python · Variabel",
    href: "/learn/intro-to-programming/intro-to-programming",
  },
  {
    title: "Algoritma",
    topics: "Big O · Sorting · Searching",
    href: "/learn/algorithm/intro",
  },
  {
    title: "Python",
    topics: "Dasar Python",
    href: "/learn/python/intro-to-python",
  },
];

const features = [
  {
    title: "Bahasa Indonesia dulu",
    description:
      "Untuk kalian yang belum fasih berbahasa Inggris, semua materi ditulis dalam bahasa Indonesia.",
  },
  {
    title: "Nyaman sampai larut",
    description:
      "Mode gelap sebagai bawaan, supaya mata tidak cepat lelah saat belajar tengah malam.",
  },
  {
    title: "Gratis, selamanya",
    description:
      "Kami percaya pendidikan harus bisa diakses semua pelajar tanpa biaya.",
  },
];

export default function Home() {
  return (
    <Layout title="BIOS" description="HIMA BIOS Bunda Mulia University">
      <header className="mx-auto flex max-w-7xl flex-wrap items-center gap-14 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex min-w-0 flex-[999_1_32rem] flex-col gap-7">
          <div className="font-mono text-sm leading-loose text-muted">
            <p>BIOS POST · HIMA Informatika UBM</p>
            {bootChecks.map((check) => (
              <p key={check} className="flex gap-2">
                <span className="truncate">
                  {check} {".".repeat(24 - check.length)}
                </span>
                <span className="text-accent">OK</span>
              </p>
            ))}
          </div>

          <h1 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-heading sm:text-5xl lg:text-6xl">
            Kesulitan memahami materi kuliah?
            <span className="text-accent">_</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed sm:text-xl">
            Belajar pemrograman dan algoritma secara gratis, dalam bahasa
            Indonesia, disusun oleh mahasiswa Informatika Universitas Bunda
            Mulia.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/learn"
              className="rounded bg-cta px-6 py-4 font-display font-bold text-on-cta shadow-[0_0_28px_rgb(0_255_210/0.3)] transition-opacity hover:opacity-90"
            >
              Mulai belajar →
            </Link>
            <Link
              href="/about"
              className="rounded border-2 border-silver-300 px-6 py-3.5 font-display font-bold text-heading transition-colors hover:border-accent hover:text-accent"
            >
              Kenali BIOS
            </Link>
          </div>
        </div>

        <div className="flex flex-[1_1_20rem] justify-center">
          <div className="flex aspect-square w-full max-w-96 items-center justify-center rounded-full border border-dashed border-line">
            <div className="flex aspect-square w-4/5 items-center justify-center rounded-full border border-line shadow-[0_0_80px_rgb(0_255_210/0.12)]">
              <Image
                src="/BIOS.webp"
                alt="Logo BIOS"
                width={320}
                height={320}
                priority
                className="w-11/12"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="bg-band text-on-band">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">
            Pilih jalur belajar
          </h2>
          <ul className="overflow-hidden rounded border-2 border-on-band">
            {learningTracks.map((track, index) => (
              <li
                key={track.href}
                className="border-band-line not-first:border-t"
              >
                <Link
                  href={track.href}
                  className="group flex flex-wrap items-center gap-4 px-6 py-5 transition-colors hover:bg-on-band hover:text-band"
                >
                  <span className="font-mono font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-[1_1_15rem] font-display text-lg font-bold">
                    {track.title}
                  </span>
                  <span className="text-sm text-on-band-muted group-hover:text-band">
                    {track.topics}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="flex flex-col gap-3 border-t-2 border-line pt-5 first:border-accent"
          >
            <span className="font-mono text-sm text-accent">
              0x{String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl font-bold text-heading">
              {feature.title}
            </h3>
            <p className="leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
