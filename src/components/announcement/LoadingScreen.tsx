interface LoadingScreenProps {
  countdown: number;
}

export default function LoadingScreen({ countdown }: LoadingScreenProps) {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl shadow-2xl p-12 mb-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center">
        <div className="text-8xl md:text-9xl font-bold mb-8 animate-pulse">
          {countdown}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          🔮 Sedang Memproses Hasil Anda...
        </h2>
        <p className="text-lg md:text-xl opacity-90">
          Bersiaplah untuk melihat keajaiban!
        </p>

        {/* Loading animation */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-white rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1 + Math.random() * 2}s`,
          }}
        ></div>
      ))}
    </div>
  );
}
