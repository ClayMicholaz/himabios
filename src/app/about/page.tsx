import React from "react";
import Layout from "@/components/Layout";
import { FiBookOpen, FiMonitor, FiUsers } from "react-icons/fi";

const timeline = [
  {
    year: "±2006",
    title: "Berdiri sebagai BRAINITY",
    description:
      "Organisasi himpunan mahasiswa Informatika di Universitas Bunda Mulia.",
  },
  {
    year: "2012",
    title: "Berganti nama menjadi BIOS",
    description: "Nama dan logo tombol daya yang kita kenal sekarang.",
  },
  {
    year: "Sekarang",
    title: "Belajar bareng, gratis",
    description:
      "Platform belajar daring, workshop, dan mentoring untuk mahasiswa Informatika.",
  },
];

const missions = [
  "Menyelenggarakan kegiatan akademik dan non-akademik",
  "Memfasilitasi pengembangan soft skills mahasiswa",
  "Menjalin kerja sama dengan berbagai pihak",
  "Memberikan edukasi gratis kepada mahasiswa",
];

const programs = [
  {
    icon: FiBookOpen,
    title: "BIOS Learning Platform",
    description:
      "Materi fundamental pemrograman, algoritma, dan teknologi informasi dalam bahasa Indonesia yang mudah dipahami.",
  },
  {
    icon: FiMonitor,
    title: "Workshop & Seminar",
    description:
      "Workshop teknis, seminar teknologi terkini, dan sharing session dengan praktisi industri.",
  },
  {
    icon: FiUsers,
    title: "Mentoring Program",
    description:
      "Pendampingan mahasiswa junior oleh senior yang berpengalaman di bidang akademik dan pengembangan karier.",
  },
];

export default function AboutPage() {
  return (
    <Layout
      title="Tentang Kami - BIOS"
      description="Mengenal lebih dekat HIMA BIOS Universitas Bunda Mulia"
    >
      <header className="mx-auto flex max-w-7xl flex-col gap-5 px-4 pt-16 pb-12 sm:px-6 sm:pt-20 lg:px-8">
        <span className="font-mono text-sm tracking-widest text-accent">
          &gt; TENTANG KAMI
        </span>
        <h1 className="max-w-4xl font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-heading sm:text-5xl lg:text-6xl">
          Himpunan mahasiswa Informatika Universitas Bunda Mulia.
        </h1>
      </header>

      <section className="mx-auto flex max-w-7xl flex-wrap gap-12 px-4 pb-16 sm:px-6 lg:px-8">
        <ol className="flex min-w-0 flex-[999_1_30rem] flex-col gap-9 border-l-2 border-line">
          {timeline.map((item, index) => {
            const isCurrent = index === timeline.length - 1;
            return (
              <li
                key={item.year}
                className={`-ml-0.5 flex flex-col gap-2 border-l-2 pl-7 ${
                  isCurrent ? "border-accent" : "border-transparent"
                }`}
              >
                <span
                  className={`font-display text-3xl font-extrabold ${
                    isCurrent ? "text-accent" : "text-muted"
                  }`}
                >
                  {item.year}
                </span>
                <h2 className="font-display text-xl font-bold text-heading">
                  {item.title}
                </h2>
                <p className="leading-relaxed">{item.description}</p>
              </li>
            );
          })}
        </ol>

        <div className="flex flex-[1_1_20rem] flex-col gap-4 self-start rounded-md border-2 border-silver-300 bg-surface p-7">
          <span className="font-mono text-xs tracking-widest text-muted">
            VISI
          </span>
          <p className="text-xl leading-relaxed text-heading">
            Menjadi organisasi mahasiswa yang unggul dalam mengembangkan
            potensi mahasiswa untuk mencetak lulusan yang berkompeten dan
            berkarakter.
          </p>
        </div>
      </section>

      <section className="bg-band text-on-band">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">
            Misi
          </h2>
          <ol className="grid overflow-hidden rounded border-2 border-on-band sm:grid-cols-2 lg:grid-cols-4">
            {missions.map((mission, index) => (
              <li
                key={mission}
                className="flex flex-col gap-2.5 border-band-line p-6 not-last:border-b sm:not-last:border-r lg:border-b-0"
              >
                <span className="font-mono font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg leading-snug">{mission}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-7 px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-heading">
          Program unggulan
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={program.title}
                className="flex flex-col gap-3 rounded-md border border-line bg-surface p-7"
              >
                <Icon
                  aria-hidden="true"
                  size={28}
                  className={index === 0 ? "text-accent" : "text-muted"}
                />
                <h3 className="font-display text-xl font-bold text-heading">
                  {program.title}
                </h3>
                <p className="leading-relaxed">{program.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-md border-2 border-accent p-8 sm:p-10">
          <div className="flex flex-[1_1_24rem] flex-col gap-2">
            <h2 className="font-display text-2xl font-extrabold text-heading sm:text-3xl">
              Mau ikut menyalakan BIOS?
            </h2>
            <p className="text-lg leading-relaxed">
              Ikuti Instagram kami untuk info pendaftaran pengurus dan kegiatan
              terbaru, atau ngobrol langsung di Discord.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/ubm_bios_ancol/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-cta px-6 py-4 font-display font-bold text-on-cta transition-opacity hover:opacity-90"
            >
              @ubm_bios_ancol →
            </a>
            <a
              href="https://discord.gg/tUPHdBKS"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border-2 border-silver-300 px-6 py-3.5 font-display font-bold text-heading transition-colors hover:border-accent hover:text-accent"
            >
              Discord
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
