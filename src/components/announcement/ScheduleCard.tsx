interface ScheduleCardProps {
  releaseDateTime: Date;
}

export default function ScheduleCard({
  releaseDateTime,
}: ScheduleCardProps) {
  const dayName = releaseDateTime.toLocaleDateString("id-ID", {
    weekday: "long",
    timeZone: "Asia/Jakarta",
  });
  const dateStr = releaseDateTime.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  });
  const timeStr = releaseDateTime.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: "Asia/Jakarta",
  });

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-10 text-center">
      <header className="flex flex-col gap-3">
        <span className="font-mono text-sm tracking-widest text-accent">
          &gt; PENGUMUMAN SELEKSI PENGURUS
        </span>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
          Jadwal pengumuman
        </h1>
      </header>

      <div className="grid overflow-hidden rounded border-2 border-silver-300 sm:grid-cols-2">
        <div className="flex flex-col gap-2 border-line p-6 max-sm:border-b sm:border-r">
          <p className="font-mono text-xs tracking-widest text-muted">TANGGAL</p>
          <p className="font-display text-3xl font-extrabold text-heading capitalize">
            {dayName}
          </p>
          <p className="text-lg">{dateStr}</p>
        </div>
        <div className="flex flex-col gap-2 p-6">
          <p className="font-mono text-xs tracking-widest text-muted">WAKTU</p>
          <p className="font-display text-3xl font-extrabold text-heading">
            {timeStr}
          </p>
          <p className="text-lg">WIB</p>
        </div>
      </div>
    </div>
  );
}
