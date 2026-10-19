import Layout from "@/components/Layout";
import LearnLayout from "@/components/LearnLayout";
import Link from "next/link";
import { getNavigationStructure } from "@/lib/markdown";

const categories = [
  {
    title: "Pengantar Pemrograman",
    subtitle: "Dasar-dasar pemrograman",
    description:
      "Konsep dasar pemrograman mulai dari variabel, tipe data, kontrol alur, hingga best practices dalam coding.",
    href: "/learn/intro-to-programming/intro-to-programming",
  },
  {
    title: "Algoritma",
    subtitle: "Algoritma dan struktur data",
    description:
      "Eksplorasi algoritma sorting, searching, dan kompleksitas waktu untuk memahami efisiensi program.",
    href: "/learn/algorithm/intro",
  },
];

const quickLinks = [
  { title: "Pengantar", description: "Mulai dari sini", href: "/learn/intro" },
  {
    title: "Variabel",
    description: "Menyimpan data",
    href: "/learn/intro-to-programming/variables",
  },
  {
    title: "Notasi Big O",
    description: "Kompleksitas algoritma",
    href: "/learn/algorithm/big-o-notation",
  },
];

export default function LearnPage() {
  const navigationStructure = getNavigationStructure();

  return (
    <Layout>
      <LearnLayout navigationStructure={navigationStructure}>
        <div className="mx-auto flex max-w-4xl flex-col gap-12">
          <header className="flex flex-col gap-4">
            <span className="font-mono text-sm tracking-widest text-accent">
              &gt; BIOS LEARN
            </span>
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-heading sm:text-4xl lg:text-5xl">
              Materi pembelajaran
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed">
              Pelajari pemrograman dan algoritma yang sudah disusun secara
              sistematis, dari dasar sampai siap dipakai di perkuliahan.
            </p>
          </header>

          <section aria-labelledby="kategori" className="flex flex-col gap-4">
            <h2
              id="kategori"
              className="font-mono text-sm tracking-widest text-muted"
            >
              [01] KATEGORI
            </h2>
            <div className="grid gap-5 lg:grid-cols-2">
              {categories.map((category, index) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group flex flex-col gap-3 rounded-md border border-line bg-surface p-7 transition-colors hover:border-accent"
                >
                  <span className="font-mono text-sm text-accent">
                    0x{String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-heading">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted">{category.subtitle}</p>
                  </div>
                  <p className="leading-relaxed">{category.description}</p>
                  <span className="mt-auto font-display font-bold text-accent">
                    Mulai belajar{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="cepat" className="flex flex-col gap-4">
            <h2 id="cepat" className="font-mono text-sm tracking-widest text-muted">
              [02] MULAI CEPAT
            </h2>
            <ul className="overflow-hidden rounded border-2 border-silver-300">
              {quickLinks.map((link, index) => (
                <li
                  key={link.href}
                  className="border-line not-first:border-t"
                >
                  <Link
                    href={link.href}
                    className="flex flex-wrap items-center gap-4 px-5 py-4 transition-colors hover:bg-surface"
                  >
                    <span className="font-mono font-bold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-[1_1_12rem] font-display font-bold text-heading">
                      {link.title}
                    </span>
                    <span className="text-sm text-muted">
                      {link.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="flex flex-wrap items-center justify-between gap-6 rounded-md bg-band p-8 text-on-band">
            <div className="flex flex-[1_1_20rem] flex-col gap-2">
              <h2 className="font-display text-2xl font-extrabold">
                Siap untuk memulai?
              </h2>
              <p className="leading-relaxed">
                Mulai dari materi pengantar, atau langsung ke Python kalau
                kamu sudah familiar dengan dasar-dasarnya.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/learn/intro"
                className="rounded bg-on-band px-5 py-3 font-display font-bold text-band transition-opacity hover:opacity-90"
              >
                Mulai dari awal
              </Link>
              <Link
                href="/learn/python/intro-to-python"
                className="rounded border-2 border-on-band px-5 py-2.5 font-display font-bold transition-colors hover:bg-on-band hover:text-band"
              >
                Langsung ke Python
              </Link>
            </div>
          </section>
        </div>
      </LearnLayout>
    </Layout>
  );
}
