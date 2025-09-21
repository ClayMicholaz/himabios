import Layout from "@/components/Layout";
import LearnLayout from "@/components/LearnLayout";
import Link from "next/link";
import { getNavigationStructure } from "@/lib/markdown";

export default function LearnPage() {
  const navigationStructure = getNavigationStructure();

  return (
    <Layout>
      <LearnLayout navigationStructure={navigationStructure}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              📚 Materi Pembelajaran HIMABIOS
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Selamat datang di pusat pembelajaran HIMABIOS. Di sini kamu dapat
              mempelajari berbagai materi pemrograman dan algoritma yang telah
              disusun secara sistematis.
            </p>
          </header>

          {/* Course Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <span className="text-xl sm:text-2xl">💻</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    Intro to Programming
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Dasar-dasar pemrograman
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                Pelajari konsep dasar pemrograman mulai dari variabel, tipe
                data, kontrol flow, hingga best practices dalam coding.
              </p>
              <Link
                href="/learn/intro-to-programming/intro-to-programming"
                className="inline-flex items-center text-sm sm:text-base text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-200 transition-colors"
              >
                Mulai Belajar →
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 dark:bg-green-900 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <span className="text-xl sm:text-2xl">🧮</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    Algorithm
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Algoritma dan struktur data
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                Eksplorasi berbagai algoritma sorting, searching, dan konsep
                kompleksitas waktu untuk memahami efisiensi program.
              </p>
              <Link
                href="/learn/algorithm/intro"
                className="inline-flex items-center text-sm sm:text-base text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-200 transition-colors"
              >
                Mulai Belajar →
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              � Mulai Belajar Cepat
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/learn/intro"
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  📖 Pengantar
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Mulai dari sini!
                </p>
              </Link>
              <Link
                href="/learn/intro-to-programming/variables"
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  🔢 Variables
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pelajari variabel
                </p>
              </Link>
              <Link
                href="/learn/algorithm/big-o-notation"
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  ⏱️ Big O
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Kompleksitas algoritma
                </p>
              </Link>
            </div>
          </div>

          {/* Getting Started */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 sm:p-8 lg:p-10 rounded-xl text-white text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-5">
              Siap untuk Memulai?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-primary-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-4">
              Mulai perjalanan belajar kamu dengan materi pengantar pemrograman,
              atau langsung terjun ke algoritma jika kamu sudah familiar dengan
              dasar-dasarnya.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
              <Link
                href="/learn/intro"
                className="w-full sm:w-auto bg-white text-primary-600 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center text-sm sm:text-base"
              >
                Mulai dari Awal
              </Link>
              <Link
                href="/learn/python/install"
                className="w-full sm:w-auto bg-primary-700 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg font-medium hover:bg-primary-800 transition-colors border border-primary-400 text-center text-sm sm:text-base"
              >
                Langsung ke Python
              </Link>
            </div>
          </div>
        </div>
      </LearnLayout>
    </Layout>
  );
}
