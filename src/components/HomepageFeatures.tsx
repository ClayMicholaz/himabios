import React from "react";
import Image from "next/image";

interface FeatureItem {
  title: string;
  iconPath: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: "Bahasa Indonesia Dulu",
    iconPath: "/indonesia.svg",
    description:
      "Web ini mendukung bahasa Indonesia sebagai bahasa utama untuk kalian yang tidak fasih berbahasa inggris.",
  },
  {
    title: "Dark Mode Support",
    iconPath: "/moon.svg",
    description:
      "Buat kalian yang suka belajar sampai tengah malam, web ini didukung dengan fitur dark mode agar mata kalian tidak lelah pada saat belajar.",
  },
  {
    title: "Gratis",
    iconPath: "/money.svg",
    description:
      "Kami mempercayai bahwa pendidikan harus bersifat gratis. Maka dari itu kami membuat web ini dengan misi memberikan edukasi gratis kepada seluruh pelajar.",
  },
];

function Feature({ title, iconPath, description }: FeatureItem) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="mb-6">
        <Image
          src={iconPath}
          alt={title}
          width={192}
          height={192}
          className="w-48 h-48 mx-auto"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
