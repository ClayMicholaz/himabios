import React from "react";
import { FaInstagram, FaDiscord, FaGithub } from "react-icons/fa";

interface SocialLink {
  label: string;
  href: string;
  icon: React.ElementType;
}

const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ubm_bios_ancol/",
    icon: FaInstagram,
  },
  {
    label: "Discord",
    href: "https://discord.gg/tUPHdBKS",
    icon: FaDiscord,
  },
  {
    label: "GitHub",
    href: "https://github.com/bios-bunda-mulia-university",
    icon: FaGithub,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-docusaurus-footer dark:bg-docusaurus-footer-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5">
        <div className="flex flex-col items-center gap-2">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 text-gray-300 hover:text-white hover:border-white transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            Copyright © {currentYear} BIOS.
          </p>
        </div>
      </div>
    </footer>
  );
}