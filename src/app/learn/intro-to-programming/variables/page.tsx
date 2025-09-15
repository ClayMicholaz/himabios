import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function VariablesPage() {
  return (
    <Layout
      title="Variabel - BIOS"
      description="Pelajari konsep variabel dalam pemrograman"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex mb-8 text-sm">
          <Link href="/docs" className="text-primary hover:text-primary-dark">
            Docs
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link
            href="/docs/intro-to-programming"
            className="text-primary hover:text-primary-dark"
          >
            Intro to Programming
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600 dark:text-gray-400">Variabel</span>
        </nav>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Variabel dalam Pemrograman 📦
          </h1>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-2xl">💡</span>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-blue-800 dark:text-blue-200">
                  Apa itu Variabel?
                </h3>
                <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                  Variabel adalah "wadah" atau "kotak" yang digunakan untuk
                  menyimpan data dalam program. Seperti kotak penyimpanan yang
                  diberi label, variabel memiliki nama dan dapat menyimpan
                  berbagai jenis nilai.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Konsep Dasar Variabel
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            Bayangkan variabel seperti kotak penyimpanan di rumah Anda. Setiap
            kotak memiliki:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4 text-center">🏷️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 text-center">
                Nama (Identifier)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                Label untuk mengenali kotak, seperti "nama_siswa" atau "umur"
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4 text-center">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 text-center">
                Tipe Data
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                Jenis data yang disimpan: angka, teks, boolean, dll.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4 text-center">💎</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 text-center">
                Nilai (Value)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                Isi yang disimpan dalam kotak, seperti "John" atau 25
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Deklarasi Variabel
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Dalam berbagai bahasa pemrograman, cara mendeklarasikan variabel
            sedikit berbeda:
          </p>

          <div className="space-y-6 mb-8">
            {/* Python */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <span className="bg-blue-500 text-white px-3 py-1 rounded text-sm mr-3">
                  Python
                </span>
                Deklarasi Dinamis
              </h4>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-gray-400">
                  # Tidak perlu menentukan tipe data
                </div>
                <div>nama = "John Doe"</div>
                <div>umur = 25</div>
                <div>tinggi = 175.5</div>
                <div>mahasiswa = True</div>
              </div>
            </div>

            {/* JavaScript */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded text-sm mr-3">
                  JavaScript
                </span>
                Menggunakan let, const, var
              </h4>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-gray-400">// Modern JavaScript (ES6+)</div>
                <div>let nama = "John Doe";</div>
                <div>const umur = 25;</div>
                <div>var tinggi = 175.5;</div>
                <div>let mahasiswa = true;</div>
              </div>
            </div>

            {/* Java */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <span className="bg-red-500 text-white px-3 py-1 rounded text-sm mr-3">
                  Java
                </span>
                Strongly Typed
              </h4>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-gray-400">
                  // Harus menentukan tipe data
                </div>
                <div>String nama = "John Doe";</div>
                <div>int umur = 25;</div>
                <div>double tinggi = 175.5;</div>
                <div>boolean mahasiswa = true;</div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Aturan Penamaan Variabel
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-4 flex items-center">
                ✅ Yang Boleh
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                      nama_siswa
                    </code>{" "}
                    - menggunakan underscore
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                      namaSiswa
                    </code>{" "}
                    - camelCase
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                      umur2
                    </code>{" "}
                    - angka di akhir
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                      _private
                    </code>{" "}
                    - underscore di awal
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-4 flex items-center">
                ❌ Yang Tidak Boleh
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                      2nama
                    </code>{" "}
                    - dimulai dengan angka
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                      nama siswa
                    </code>{" "}
                    - ada spasi
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                      nama-siswa
                    </code>{" "}
                    - menggunakan dash
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                      if
                    </code>{" "}
                    - kata kunci bahasa
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Contoh Praktis
          </h2>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              🏫 Sistem Informasi Mahasiswa
            </h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <div className="text-gray-400"># Data mahasiswa</div>
              <div>nama_mahasiswa = "Andi Susanto"</div>
              <div>npm = "2021001234"</div>
              <div>semester = 5</div>
              <div>ipk = 3.75</div>
              <div>aktif = True</div>
              <div>jurusan = "Sistem Informasi"</div>
              <br />
              <div className="text-gray-400"># Menampilkan informasi</div>
              <div>print(f"Nama: {"{nama_mahasiswa}"}")</div>
              <div>print(f"NPM: {"{npm}"}")</div>
              <div>print(f"Semester: {"{semester}"}")</div>
              <div>print(f"IPK: {"{ipk}"}")</div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 mb-8">
            <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-200 mb-2">
              💡 Tips Penamaan yang Baik
            </h3>
            <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>
                • Gunakan nama yang deskriptif: <code>total_harga</code> lebih
                baik dari <code>x</code>
              </li>
              <li>• Konsisten dengan konvensi: camelCase atau snake_case</li>
              <li>
                • Hindari singkatan yang membingungkan:{" "}
                <code>jumlah_mahasiswa</code> lebih jelas dari{" "}
                <code>jml_mhs</code>
              </li>
              <li>• Gunakan bahasa Inggris untuk konsistensi global</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <span className="mr-2">📖</span>
              Selanjutnya: Pelajari tentang tipe data
            </div>
            <div className="flex gap-3">
              <Link
                href="/docs/intro-to-programming"
                className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                ← Kembali
              </Link>
              <Link
                href="/docs/intro-to-programming/data-types"
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Tipe Data →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
