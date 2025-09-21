import React from "react";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  items: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Learn",
    items: [
      {
        label: "Intro to programming",
        href: "/learn/intro-to-programming/intro-to-programming",
      },
      { label: "Python", href: "/learn/python/intro-to-python" },
      { label: "Flutter", href: "/learn/flutter/intro-to-flutter" },
    ],
  },
  {
    title: "Social",
    items: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/ubm_bios_ancol/",
        external: true,
      },
      {
        label: "Discord",
        href: "https://discord.gg/tUPHdBKS",
        external: true,
      },
    ],
  },
  {
    title: "More",
    items: [
      {
        label: "GitHub",
        href: "https://github.com/bios-bunda-mulia-university",
        external: true,
      },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-docusaurus-footer dark:bg-docusaurus-footer-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.href}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-2">
          <p className="text-center text-gray-400">
            Copyright © {currentYear} BIOS.
          </p>
        </div>
      </div>
    </footer>
  );
}
