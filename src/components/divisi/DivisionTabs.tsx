"use client";

import { useState } from "react";
import clsx from "clsx";
import MemberAvatar from "./MemberAvatar";
import type { Divisi } from "@/data/pengurus";

interface DivisionTabsProps {
  divisions: Divisi[];
}

export default function DivisionTabs({ divisions }: DivisionTabsProps) {
  const [selected, setSelected] = useState(0);
  const current = divisions[selected];

  return (
    <div className="flex flex-wrap items-start gap-8">
      <div
        role="tablist"
        aria-label="Pilih divisi"
        aria-orientation="vertical"
        className="flex flex-[1_1_18rem] flex-col overflow-hidden rounded border-2 border-on-band"
      >
        {divisions.map((division, index) => {
          const isSelected = index === selected;
          return (
            <button
              key={division.name}
              id={`tab-${index}`}
              role="tab"
              aria-selected={isSelected}
              aria-controls="division-panel"
              onClick={() => setSelected(index)}
              className={clsx(
                "min-h-13 cursor-pointer border-band-line px-4 py-3.5 text-left font-display font-bold transition-colors not-last:border-b",
                isSelected
                  ? "bg-on-band text-band"
                  : "hover:bg-on-band/10",
              )}
            >
              <span aria-hidden="true" className="inline-block w-6">
                {isSelected ? "▶" : ""}
              </span>
              {division.name}
            </button>
          );
        })}
      </div>

      <div
        id="division-panel"
        role="tabpanel"
        aria-labelledby={`tab-${selected}`}
        className="flex min-w-0 flex-[999_1_32rem] flex-col gap-6 rounded-md bg-bg p-7 text-fg"
      >
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-2xl font-bold text-heading">
            {current.name}
          </h3>
          {current.description && (
            <p className="leading-relaxed">{current.description}</p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-5 border-b border-line pb-6">
          <MemberAvatar person={current.head} size="md" glow />
          <div className="flex flex-col gap-1">
            <span
              className={clsx(
                "text-lg font-semibold",
                current.head.name ? "text-heading" : "text-muted",
              )}
            >
              {current.head.name || "Segera diumumkan"}
            </span>
            <span className="font-mono text-xs font-bold tracking-widest text-accent">
              {current.head.role.toUpperCase()}
            </span>
          </div>
        </div>

        {current.members.length > 0 ? (
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(7.5rem,1fr))] gap-5">
            {current.members.map((member, index) => (
              <li
                key={`${member.name}-${index}`}
                className="flex flex-col items-center gap-2 text-center"
              >
                <MemberAvatar person={member} size="sm" />
                <span className="text-sm text-heading">{member.name}</span>
                <span className="font-mono text-[0.6875rem] text-muted">
                  {member.role.toUpperCase()}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">
            Anggota divisi akan diumumkan setelah seleksi selesai.
          </p>
        )}
      </div>
    </div>
  );
}
