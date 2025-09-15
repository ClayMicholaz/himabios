import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Layout
      title="Tentang Kami - BIOS"
      description="Mengenal lebih dekat HIMA BIOS Universitas Bunda Mulia"
    >
      <div className="bg-docusaurus-bg dark:bg-docusaurus-bg-dark min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Tentang BIOS 🎓
            </h1>

            <div className="flex justify-center mb-8">
              <img
                src="/BIOS.png"
                alt="BIOS Logo"
                className="w-48 h-48 object-contain"
              />
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Siapa Kami?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              Kami adalah organisasi himpunan mahasiswa Informatika Universitas
              Bunda Mulia yang bernama BIOS. Organisasi ini sudah didirikan
              sejak tahun ~2006 dengan nama BRAINITY. Kemudian pada tahun 2012,
              berganti nama menjadi BIOS.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Visi & Misi
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-4">
                  🎯 Visi
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Menjadi organisasi mahasiswa yang unggul dalam mengembangkan
                  potensi mahasiswa Sistem Informasi untuk mencetak lulusan yang
                  berkompeten dan berkarakter.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-4">
                  🎯 Misi
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                  <li>• Menyelenggarakan kegiatan akademik dan non-akademik</li>
                  <li>• Memfasilitasi pengembangan soft skills mahasiswa</li>
                  <li>• Menjalin kerjasama dengan berbagai pihak</li>
                  <li>• Memberikan edukasi gratis kepada mahasiswa</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Program Unggulan
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  📚 BIOS Learning Platform
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Platform pembelajaran online yang menyediakan materi-materi
                  fundamental pemrograman, algoritma, dan teknologi informasi
                  dalam bahasa Indonesia yang mudah dipahami.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  🏆 Workshop & Seminar
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Menyelenggarakan berbagai workshop teknis, seminar teknologi
                  terkini, dan sharing session dengan praktisi industri.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  🤝 Mentoring Program
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Program pendampingan mahasiswa junior oleh senior yang
                  berpengalaman dalam bidang akademik dan pengembangan karir.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Bergabung dengan Kami
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Tertarik untuk bergabung dengan komunitas BIOS? Ikuti media sosial
              kami dan jangan lewatkan informasi terbaru tentang kegiatan dan
              program yang kami selenggarakan!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <a
                href="https://www.instagram.com/ubm_bios_ancol/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                <span className="mr-2">📱</span>
                Instagram
              </a>

              <a
                href="https://discord.gg/tUPHdBKS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                <span className="mr-2">💬</span>
                Discord
              </a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Ada pertanyaan atau ingin berkolaborasi?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Jangan ragu untuk menghubungi kami melalui media sosial atau
                bergabung di server Discord kami untuk diskusi langsung!
              </p>
              <Link
                href="/learn"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
              >
                Kembali ke Pembelajaran
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
