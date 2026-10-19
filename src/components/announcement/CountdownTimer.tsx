interface CountdownTimerProps {
  timeRemaining: string;
}

export default function CountdownTimer({ timeRemaining }: CountdownTimerProps) {
  return (
    <div className="mx-auto max-w-2xl rounded-md border-2 border-silver-300 bg-surface p-6 text-center sm:p-10">
      <p className="mb-6 font-mono text-sm tracking-widest text-muted">
        PENGUMUMAN DIBUKA DALAM
      </p>
      <div
        role="timer"
        className="font-mono text-3xl font-bold text-heading sm:text-5xl lg:text-6xl"
      >
        {timeRemaining}
      </div>
    </div>
  );
}
