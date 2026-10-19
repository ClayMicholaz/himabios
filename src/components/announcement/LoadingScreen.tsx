interface LoadingScreenProps {
  countdown: number;
}

const dotDelays = ["[animation-delay:0s]", "[animation-delay:0.2s]", "[animation-delay:0.4s]"];

export default function LoadingScreen({ countdown }: LoadingScreenProps) {
  return (
    <div
      role="status"
      className="mx-auto max-w-2xl rounded-md border-2 border-silver-300 bg-surface p-8 text-center sm:p-12"
    >
      <div className="mb-8 animate-pulse font-mono text-7xl font-bold text-accent sm:text-8xl">
        {countdown}
      </div>
      <h2 className="font-display text-xl font-bold text-heading sm:text-2xl">
        Sedang memproses hasil kamu...
      </h2>
      <div className="mt-8 flex justify-center gap-3" aria-hidden="true">
        {dotDelays.map((delay) => (
          <div
            key={delay}
            className={`size-3 animate-bounce rounded-full bg-accent ${delay}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
