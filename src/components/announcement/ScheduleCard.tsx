interface ScheduleCardProps {
  releaseDate: Date;
  releaseTime: string;
}

export default function ScheduleCard({
  releaseDate,
  releaseTime,
}: ScheduleCardProps) {
  const dayName = releaseDate.toLocaleDateString("id-ID", {
    weekday: "long",
  });
  const dateStr = releaseDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12">
        Jadwal Pengumuman
      </h2>

      <div className="space-y-8 sm:space-y-10 lg:space-y-12 max-w-2xl mx-auto">
        {/* Date Section */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-8 sm:pb-10 lg:pb-12">
          <p className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3 sm:mb-4">
            Tanggal Pengumuman
          </p>
          <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
            {dayName}
          </div>
          <div className="text-lg sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
            {dateStr}
          </div>
        </div>

        {/* Time Section */}
        <div className="pt-6 sm:pt-8 lg:pt-10">
          <p className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3 sm:mb-4">
            Waktu Pengumuman
          </p>
          <div className="inline-flex items-baseline gap-2 sm:gap-3">
            <span className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white">
              {releaseTime}
            </span>
            <span className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 font-semibold">
              WIB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
