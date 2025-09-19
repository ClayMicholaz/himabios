import { designTokens } from "@/styles/designTokens";

interface ScheduleCardProps {
  releaseDate: Date;
  releaseTime: string;
}

export default function ScheduleCard({
  releaseDate,
  releaseTime,
}: ScheduleCardProps) {
  return (
    <div
      className={`${designTokens.gradients.schedule} rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden border border-slate-500 dark:border-slate-600`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 to-slate-500/10"></div>
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-medium mb-6 text-slate-200">
              Jadwal Pengumuman
            </p>
            <div className="bg-white/15 border border-white/20 rounded-xl p-6 backdrop-blur-sm h-32 flex flex-col justify-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
                {releaseDate.toLocaleDateString("id-ID", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </div>
              <div className="text-2xl md:text-3xl font-semibold text-slate-200">
                {releaseDate.getFullYear()}
              </div>
            </div>
          </div>

          <div className="hidden md:block w-px h-24 bg-slate-400/40"></div>
          <div className="md:hidden w-24 h-px bg-slate-400/40"></div>

          <div className="text-center">
            <p className="text-xl md:text-2xl font-medium mb-6 text-slate-200">
              Waktu Pengumuman
            </p>
            <div className="bg-white/15 border border-white/20 rounded-xl p-6 backdrop-blur-sm h-32 flex flex-col justify-center">
              <div className="text-4xl md:text-5xl font-bold text-white">
                {releaseTime}
              </div>
              <div className="text-lg md:text-xl font-medium text-slate-200">
                WIB
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
