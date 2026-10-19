import type { Metadata } from "next";
import Layout from "@/components/Layout";
import React from "react";
import MemberAvatar from "@/components/divisi/MemberAvatar";
import DivisionTabs from "@/components/divisi/DivisionTabs";
import { bph, divisions, periode } from "@/data/pengurus";

export const metadata: Metadata = {
  title: "Divisi & Pengurus",
  description:
    "Mengenal lebih dekat pengurus dan divisi di HIMA BIOS Universitas Bunda Mulia",
};

export default function DivisiPage() {
  return (
    <Layout
      title="Divisi - BIOS"
      description="Mengenal lebih dekat divisi yang ada di HIMA BIOS Universitas Bunda Mulia"
    >
      <header className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-4 px-4 pt-16 pb-10 sm:px-6 sm:pt-20 lg:px-8">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-sm tracking-widest text-accent">
            &gt; STRUKTUR PENGURUS
          </span>
          <h1 className="font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-heading sm:text-5xl">
            Orang-orang di balik BIOS.
          </h1>
        </div>
        {periode && (
          <span className="font-mono text-sm text-muted">
            Periode {periode}
          </span>
        )}
      </header>

      <section
        aria-labelledby="bph-title"
        className="mx-auto flex max-w-7xl flex-col gap-6 px-4 pb-16 sm:px-6 lg:px-8"
      >
        <h2
          id="bph-title"
          className="font-mono text-sm tracking-widest text-muted"
        >
          [BPH] BADAN PENGURUS HARIAN
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bph.map((person) => (
            <li
              key={person.role}
              className="flex flex-col items-center gap-3.5 rounded-md border border-line bg-surface px-3 py-7 text-center"
            >
              <MemberAvatar person={person} size="lg" />
              <span
                className={`text-lg font-semibold ${
                  person.name ? "text-heading" : "text-muted"
                }`}
              >
                {person.name || "Segera diumumkan"}
              </span>
              <span className="font-mono text-xs font-bold tracking-widest text-accent">
                {person.role.toUpperCase()}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="divisi-title" className="bg-band text-on-band">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 pt-14 pb-18 sm:px-6 lg:px-8">
          <h2
            id="divisi-title"
            className="font-display text-3xl font-extrabold tracking-tight"
          >
            {divisions.length} divisi
          </h2>
          <DivisionTabs divisions={divisions} />
        </div>
      </section>
    </Layout>
  );
}
