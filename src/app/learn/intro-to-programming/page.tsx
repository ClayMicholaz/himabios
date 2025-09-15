import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function IntroToProgrammingPage() {
  return (
    <Layout
      title="Pengenalan Pemrograman - BIOS"
      description="Dasar-dasar pemrograman untuk pemula"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Pengenalan Pemrograman 💻
          </h1>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-2xl">💡</span>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-200">
                  Selamat datang di dunia pemrograman!
                </h3>
                <p className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                  Di sini Anda akan mempelajari konsep-konsep fundamental yang
                  menjadi dasar dari semua bahasa pemrograman.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Apa itu Pemrograman?
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            Pemrograman adalah proses menulis instruksi untuk komputer agar
            dapat menyelesaikan tugas-tugas tertentu. Seperti memberikan resep
            masakan kepada seseorang, kita memberikan langkah-langkah yang jelas
            dan terstruktur kepada komputer untuk mencapai hasil yang
            diinginkan.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Materi Pembelajaran
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Dasar-Dasar */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl mb-4">🏗️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Dasar-Dasar
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <li>
                  •{" "}
                  <Link
                    href="/docs/intro-to-programming/variables"
                    className="text-primary hover:text-primary-dark"
                  >
                    Variabel
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link
                    href="/docs/intro-to-programming/data-types"
                    className="text-primary hover:text-primary-dark"
                  >
                    Tipe Data
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link
                    href="/docs/intro-to-programming/operator"
                    className="text-primary hover:text-primary-dark"
                  >
                    Operator
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link
                    href="/docs/intro-to-programming/comment"
                    className="text-primary hover:text-primary-dark"
                  >
                    Komentar
                  </Link>
                </li>
              </ul>
            </div>

            {/* Input/Output */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Input/Output
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <li>
                  •{" "}
                  <Link
                    href="/docs/intro-to-programming/io"
                    className="text-primary hover:text-primary-dark"
                  >
                    Input/Output Dasar
                  </Link>
                </li>
                <li>• Interaksi dengan User</li>
                <li>• Format Output</li>
              </ul>
            </div>

            {/* Kontrol Flow */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Kontrol Flow
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <li>
                  •{" "}
                  <Link
                    href="/docs/intro-to-programming/control-flow"
                    className="text-primary hover:text-primary-dark"
                  >
                    If-Else
                  </Link>
                </li>
                <li>• Switch Case</li>
                <li>• Loop (For, While)</li>
              </ul>
            </div>

            {/* Struktur Data */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Struktur Data
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <li>
                  •{" "}
                  <Link
                    href="/docs/intro-to-programming/array"
                    className="text-primary hover:text-primary-dark"
                  >
                    Array
                  </Link>
                </li>
                <li>• List</li>
                <li>
                  •{" "}
                  <Link
                    href="/docs/intro-to-programming/object"
                    className="text-primary hover:text-primary-dark"
                  >
                    Object
                  </Link>
                </li>
              </ul>
            </div>

            {/* Fungsi dan Modular */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Fungsi & Modular
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <li>• Function</li>
                <li>
                  •{" "}
                  <Link
                    href="/docs/intro-to-programming/modules"
                    className="text-primary hover:text-primary-dark"
                  >
                    Modules
                  </Link>
                </li>
                <li>• Import/Export</li>
              </ul>
            </div>

            {/* Best Practices */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Best Practices
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <li>
                  •{" "}
                  <Link
                    href="/docs/intro-to-programming/debugging"
                    className="text-primary hover:text-primary-dark"
                  >
                    Debugging
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link
                    href="/docs/intro-to-programming/testing"
                    className="text-primary hover:text-primary-dark"
                  >
                    Testing
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link
                    href="/docs/intro-to-programming/tipsntricks"
                    className="text-primary hover:text-primary-dark"
                  >
                    Tips & Tricks
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Mengapa Belajar Pemrograman?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 mr-3 text-xl flex-shrink-0">
                  💼
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Peluang Karir
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Industri teknologi terus berkembang dengan kebutuhan
                    programmer yang tinggi
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl flex-shrink-0">
                  🧠
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Melatih Logika
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Pemrograman mengasah kemampuan berpikir sistematis dan logis
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-purple-500 mr-3 text-xl flex-shrink-0">
                  🚀
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Inovasi
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Menciptakan solusi digital untuk berbagai masalah di
                    kehidupan sehari-hari
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-orange-500 mr-3 text-xl flex-shrink-0">
                  🌍
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Global
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Skill yang bisa diterapkan di mana saja di dunia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Siap Memulai Journey Coding Anda?
            </h3>
            <p className="mb-6 opacity-90">
              Mulai dari konsep dasar dan bangun fondasi yang kuat untuk karir
              di bidang teknologi!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs/intro-to-programming/intro-to-programming"
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Mulai dengan Dasar-Dasar
              </Link>
              <Link
                href="/docs/intro-to-programming/variables"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
              >
                Langsung ke Variabel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
