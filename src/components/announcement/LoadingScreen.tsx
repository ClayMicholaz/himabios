interface LoadingScreenProps {
  countdown: number;
}

export default function LoadingScreen({ countdown }: LoadingScreenProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 sm:p-10 lg:p-12 text-center max-w-2xl mx-auto">
      <div className="text-7xl sm:text-8xl font-bold text-gray-900 dark:text-white mb-8 animate-pulse">
        {countdown}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Sedang memproses hasil Anda...
      </h3>
      <div className="flex justify-center space-x-3 mt-8">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
