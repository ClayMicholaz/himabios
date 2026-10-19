import Layout from "@/components/Layout";
import Link from "next/link";

const popularPages = [
  {
    title: "Pengantar Pemrograman",
    href: "/learn/intro-to-programming/intro-to-programming",
  },
  { title: "Dasar Algoritma", href: "/learn/algorithm/intro" },
  { title: "Tipe Data", href: "/learn/intro-to-programming/data-types" },
  { title: "Variabel", href: "/learn/intro-to-programming/variables" },
  { title: "Glosarium", href: "/learn/Glosarium/intro" },
];

export default function NotFound() {
  return (
    <Layout>
      <div className="mx-auto flex max-w-2xl flex-col gap-10 px-4 py-20 sm:py-28">
        <header className="flex flex-col gap-5">
          <div className="font-mono text-sm leading-loose text-muted">
            <p>BIOS POST · memeriksa halaman...</p>
            <p>
              Boot device ........ <span className="text-danger">NOT FOUND</span>
            </p>
          </div>
          <p className="font-display text-8xl leading-none font-extrabold tracking-tight text-accent sm:text-9xl">
            404
          </p>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
            Halaman tidak ditemukan.
          </h1>
          <p className="text-lg leading-relaxed">
            Halaman yang kamu cari mungkin sudah dipindah atau tidak pernah
            ada. Coba mulai dari salah satu halaman di bawah ini.
          </p>
        </header>

        <section aria-labelledby="populer" className="flex flex-col gap-4">
          <h2 id="populer" className="font-mono text-sm tracking-widest text-muted">
            [F1] HALAMAN POPULER
          </h2>
          <ul className="overflow-hidden rounded border-2 border-silver-300">
            {popularPages.map((page, index) => (
              <li key={page.href} className="border-line not-first:border-t">
                <Link
                  href={page.href}
                  className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface"
                >
                  <span className="font-mono font-bold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display font-bold text-heading">
                    {page.title}
                  </span>
                  <span aria-hidden="true" className="ml-auto text-muted">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded bg-cta px-6 py-4 font-display font-bold text-on-cta transition-opacity hover:opacity-90"
          >
            Kembali ke beranda
          </Link>
          <Link
            href="/learn"
            className="rounded border-2 border-silver-300 px-6 py-3.5 font-display font-bold text-heading transition-colors hover:border-accent hover:text-accent"
          >
            Lihat materi belajar
          </Link>
        </div>
      </div>
    </Layout>
  );
}
