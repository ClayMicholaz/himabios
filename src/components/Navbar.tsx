"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FaGithub } from "react-icons/fa";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

interface NavItem {
  label: string;
  href: string;
  cta?: boolean;
}

const navItems: NavItem[] = [
  { label: "Belajar", href: "/learn" },
  { label: "Tentang", href: "/about" },
  { label: "Divisi", href: "/divisi" },
  { label: "Pengumuman", href: "/announcement", cta: true },
];

const githubUrl = "https://github.com/bios-bunda-mulia-university";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // The theme class is already set by the inline script in layout.tsx
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const linkClass = (item: NavItem, isActive: boolean) =>
    clsx(
      "font-display font-semibold transition-colors",
      item.cta
        ? "rounded bg-cta px-4 py-2.5 text-on-cta hover:opacity-90"
        : isActive
          ? "px-3 py-3 text-accent shadow-[inset_0_-2px_0_var(--accent)]"
          : "px-3 py-3 text-fg hover:text-accent",
    );

  return (
    <nav
      aria-label="Navigasi utama"
      className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/BIOS.webp"
              alt=""
              width={40}
              height={40}
              className="size-10"
            />
            <span className="font-display text-xl font-extrabold tracking-wide text-heading">
              BIOS
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={linkClass(item, isActive)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="flex size-11 items-center justify-center rounded border border-line text-fg transition-colors hover:text-accent"
              aria-label={isDarkMode ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
            >
              {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub BIOS"
              className="hidden size-11 items-center justify-center rounded border border-line text-fg transition-colors hover:text-accent md:flex"
            >
              <FaGithub size={18} />
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex size-11 items-center justify-center rounded border border-line text-fg md:hidden"
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="flex flex-col gap-1 border-t border-line py-3 md:hidden">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={clsx(
                    "rounded px-3 py-3 font-display text-lg font-semibold",
                    item.cta
                      ? "bg-cta text-on-cta"
                      : isActive
                        ? "bg-surface text-accent"
                        : "text-fg hover:text-accent",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded px-3 py-3 font-display text-lg font-semibold text-fg hover:text-accent"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
