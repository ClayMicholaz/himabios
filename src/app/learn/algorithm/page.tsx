import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function AlgorithmPage() {
  return (
    <Layout
      title="Algoritma - BIOS"
      description="Pelajari dasar-dasar algoritma dan struktur data"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Algoritma & Struktur Data 🧮
          </h1>

          <div className="flex justify-center mb-8">
            <img
              src="/algorithm-meme.png"
              alt="Algorithm Meme"
              className="rounded-lg shadow-md max-w-md w-full"
            />
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-indigo-800 dark:text-indigo-200">
                  Mengapa Algoritma Penting?
                </h3>
                <p className="mt-2 text-sm text-indigo-700 dark:text-indigo-300">
                  Algoritma adalah jantung dari pemrograman yang efisien.
                  Memahami algoritma akan membantu Anda menulis kode yang lebih
                  cepat, efisien, dan scalable.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Apa itu Algoritma?
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            Algoritma adalah serangkaian langkah-langkah terstruktur untuk
            menyelesaikan masalah atau mencapai tujuan tertentu. Dalam
            pemrograman, algoritma membantu kita merancang solusi yang efisien
            untuk berbagai permasalahan komputasi.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Topik Pembelajaran
          </h2>

          <div className="space-y-8 mb-8">
            {/* Big O Notation */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">📊</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Big O Notation
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Pelajari cara menganalisis kompleksitas waktu dan ruang dari
                algoritma untuk menentukan efisiensi kode Anda.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Kompleksitas: Fundamental
                </div>
                <Link
                  href="/docs/algorithm/big-o-notation"
                  className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Pelajari Sekarang →
                </Link>
              </div>
            </div>

            {/* Sorting Algorithms */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">🔄</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Algoritma Sorting
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Mengurutkan data adalah salah satu operasi paling fundamental
                dalam pemrograman. Pelajari berbagai teknik sorting dari yang
                sederhana hingga yang canggih.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <Link
                    href="/docs/algorithm/sorting/bubble-sort"
                    className="text-primary hover:text-primary-dark font-medium text-sm"
                  >
                    Bubble Sort
                  </Link>
                  <div className="text-xs text-gray-500 mt-1">
                    O(n²) - Sederhana
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <Link
                    href="/docs/algorithm/sorting/insertion-sort"
                    className="text-primary hover:text-primary-dark font-medium text-sm"
                  >
                    Insertion Sort
                  </Link>
                  <div className="text-xs text-gray-500 mt-1">
                    O(n²) - Efisien untuk data kecil
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <Link
                    href="/docs/algorithm/sorting/selection-sort"
                    className="text-primary hover:text-primary-dark font-medium text-sm"
                  >
                    Selection Sort
                  </Link>
                  <div className="text-xs text-gray-500 mt-1">
                    O(n²) - Minimal swap
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <Link
                    href="/docs/algorithm/sorting/merge-sort"
                    className="text-primary hover:text-primary-dark font-medium text-sm"
                  >
                    Merge Sort
                  </Link>
                  <div className="text-xs text-gray-500 mt-1">
                    O(n log n) - Divide & Conquer
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <Link
                    href="/docs/algorithm/sorting/quick-sort"
                    className="text-primary hover:text-primary-dark font-medium text-sm"
                  >
                    Quick Sort
                  </Link>
                  <div className="text-xs text-gray-500 mt-1">
                    O(n log n) avg - Populer
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <Link
                    href="/docs/algorithm/sorting/heap-sort"
                    className="text-primary hover:text-primary-dark font-medium text-sm"
                  >
                    Heap Sort
                  </Link>
                  <div className="text-xs text-gray-500 mt-1">
                    O(n log n) - Heap based
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  6 Algoritma | Dari Basic hingga Advanced
                </div>
                <Link
                  href="/docs/algorithm/sorting"
                  className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Lihat Semua →
                </Link>
              </div>
            </div>

            {/* Searching Algorithms */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">🔍</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Algoritma Searching (Coming Soon)
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Teknik-teknik untuk mencari data dalam berbagai struktur data
                dengan efisien.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Linear Search, Binary Search, Hash Table
                </div>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-4 py-2 rounded-lg text-sm">
                  Segera Hadir
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Visualisasi Sorting
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="text-center">
              <img
                src="/unsorted-array.png"
                alt="Unsorted Array"
                className="rounded-lg shadow-md mb-4 w-full"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Array sebelum di-sort
              </p>
            </div>
            <div className="text-center">
              <img
                src="/sorted-array.png"
                alt="Sorted Array"
                className="rounded-lg shadow-md mb-4 w-full"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Array setelah di-sort
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Kenapa Harus Belajar Algoritma?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 mr-3 text-xl flex-shrink-0">
                  ⚡
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Performance
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Algoritma yang baik membuat aplikasi berjalan lebih cepat
                    dan efisien
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl flex-shrink-0">
                  🎯
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Problem Solving
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Mengasah kemampuan analitis dan pemecahan masalah yang
                    kompleks
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-purple-500 mr-3 text-xl flex-shrink-0">
                  💼
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Interview
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Wajib dikuasai untuk technical interview di perusahaan tech
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-orange-500 mr-3 text-xl flex-shrink-0">
                  🏗️
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Architecture
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Membantu merancang sistem yang scalable dan maintainable
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg p-8 text-center">
            <span className="text-4xl mb-4 block">🧠</span>
            <h3 className="text-xl font-semibold mb-4">
              Ready to Think Like a Computer Scientist?
            </h3>
            <p className="mb-6 opacity-90">
              Mulai journey Anda dalam memahami algoritma dan struktur data yang
              akan membuat Anda menjadi programmer yang lebih baik!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs/algorithm/big-o-notation"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Mulai dengan Big O
              </Link>
              <Link
                href="/docs/algorithm/sorting"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
              >
                Langsung ke Sorting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
