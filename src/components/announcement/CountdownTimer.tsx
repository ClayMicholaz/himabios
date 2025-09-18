interface CountdownTimerProps {
  timeRemaining: string;
}

export default function CountdownTimer({ timeRemaining }: CountdownTimerProps) {
  return (
    <div className="text-center mb-8">
      <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-xl shadow-xl p-8 max-w-md mx-auto border border-orange-300">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Countdown</h2>
        <div className="text-3xl md:text-4xl font-mono font-bold mb-2">
          {timeRemaining}
        </div>
        <p className="text-sm md:text-base mt-2 opacity-90">
          Pengumuman akan segera dibuka!
        </p>
      </div>
    </div>
  );
}
