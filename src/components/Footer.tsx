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
    <footer className="border-t border-line bg-deep text-silver-300">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-sm">
          © {currentYear} HIMA BIOS · Informatika Universitas Bunda Mulia
        </p>

        <div className="flex items-center gap-2">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-11 items-center justify-center rounded border border-navy-600 transition-colors hover:border-mint-400 hover:text-mint-400"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
