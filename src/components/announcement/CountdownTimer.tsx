interface CountdownTimerProps {
  timeRemaining: string;
}

export default function CountdownTimer({ timeRemaining }: CountdownTimerProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sm:p-8 lg:p-10 text-center max-w-2xl mx-auto">
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">
        Pengumuman akan dibuka dalam
      </p>
      <div className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-gray-900 dark:text-white">
        {timeRemaining}
      </div>
    </div>
  );
}
