export default function AnnouncementClosed() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sm:p-8 lg:p-10 text-center max-w-2xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Pengumuman Belum Dibuka
      </h2>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
        Pengumuman akan dibuka sesuai jadwal yang telah ditentukan. Silakan
        kembali lagi nanti.
      </p>
    </div>
  );
}
