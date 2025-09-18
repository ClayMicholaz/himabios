export default function AnnouncementClosed() {
  return (
    <div className="text-center">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-10 max-w-md mx-auto border border-gray-200 dark:border-gray-700">
        <div className="text-6xl md:text-7xl mb-6">🔒</div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Pengumuman Belum Dibuka
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
          Pengumuman akan dibuka sesuai jadwal yang telah ditentukan. Silakan
          kembali lagi nanti!
        </p>
      </div>
    </div>
  );
}
