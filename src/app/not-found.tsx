import Layout from "@/components/Layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md w-full text-center px-4">
          <div className="mb-8">
            <div className="text-8xl font-bold text-gray-200 dark:text-gray-700 mb-4">
              404
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Halaman Tidak Ditemukan
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin
              halaman tersebut telah dipindahkan atau tidak ada.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Kembali ke Beranda
              </Link>
              <Link
                href="/learn"
                className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Lihat Materi Belajar
              </Link>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              🔍 Saran untuk Anda
            </h3>
            <ul className="text-left space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Periksa kembali URL yang Anda ketik
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Gunakan menu navigasi untuk menemukan halaman
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Kembali ke halaman sebelumnya menggunakan tombol back browser
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Hubungi kami jika Anda yakin ini adalah kesalahan
              </li>
            </ul>
          </div>

          <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            Kode Error: 404 • Halaman tidak ditemukan
          </div>
        </div>
      </div>
    </Layout>
  );
}
