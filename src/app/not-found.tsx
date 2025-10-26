"use client";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const popularPages = [
    {
      title: "Introduction to Programming",
      href: "/learn/intro-to-programming/intro-to-programming",
      icon: "💻",
    },
    { title: "Algorithm Basics", href: "/learn/algorithm/intro", icon: "🧮" },
    {
      title: "Data Types",
      href: "/learn/intro-to-programming/data-types",
      icon: "📊",
    },
    {
      title: "Variables",
      href: "/learn/intro-to-programming/variables",
      icon: "🔧",
    },
    { title: "Glosarium", href: "/learn/Glosarium/intro", icon: "📖" },
  ];

  const filteredPages = popularPages.filter((page) =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          {/* Animated 404 */}
          <div className="mb-8 mt-16">
            <div
              className={`text-9xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-10 transition-all duration-1000 ${
                mounted ? "scale-100 opacity-100" : "scale-150 opacity-0"
              }`}
            >
              404
            </div>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-6 leading-tight">
                🚀 Oops! Halaman Tidak Ditemukan
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-lg mx-auto">
                Sepertinya Anda tersesat di antariksa HIMABIOS. Mari kita bantu
                Anda menemukan jalan kembali!
              </p>
            </div>
          </div>

          {/* Popular Pages */}
          {searchTerm && (
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Hasil Pencarian
              </h3>
              <div className="grid gap-3">
                {filteredPages.length > 0 ? (
                  filteredPages.map((page, index) => (
                    <Link
                      key={index}
                      href={page.href}
                      className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 text-left group"
                    >
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">
                        {page.icon}
                      </span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {page.title}
                      </span>
                      <svg
                        className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-500 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  ))
                ) : (
                  <div className="text-gray-500 dark:text-gray-400 py-8">
                    Tidak ada hasil yang ditemukan untuk "{searchTerm}"
                  </div>
                )}
              </div>
            </div>
          )}

          {!searchTerm && (
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                📚 Halaman Populer
              </h3>
              <div className="grid gap-3">
                {popularPages.map((page, index) => (
                  <Link
                    key={index}
                    href={page.href}
                    className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 text-left group"
                  >
                    <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">
                      {page.icon}
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {page.title}
                    </span>
                    <svg
                      className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-500 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg
                  className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                🏠 Kembali ke Beranda
              </Link>
              <Link
                href="/learn"
                className="group bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-medium transition-all inline-flex items-center justify-center border-2 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg
                  className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                📚 Lihat Materi Belajar
              </Link>
            </div>
          </div>
      </div>
      </div>
    </Layout>
  );
}
