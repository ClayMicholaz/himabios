import { componentStyles, designTokens } from "@/styles/designTokens";

export default function AnnouncementClosed() {
  return (
    <div className="text-center">
      <div
        className={`${designTokens.gradients.card} rounded-xl shadow-xl p-10 max-w-md mx-auto border ${componentStyles.card.border}`}
      >
        <div className="text-6xl md:text-7xl mb-6">🔒</div>
        <h2
          className={`text-2xl md:text-3xl ${componentStyles.text.heading.primary} mb-6`}
        >
          Pengumuman Belum Dibuka
        </h2>
        <p
          className={`${componentStyles.text.body.secondary} text-base md:text-lg leading-relaxed`}
        >
          Pengumuman akan dibuka sesuai jadwal yang telah ditentukan. Silakan
          kembali lagi nanti!
        </p>
      </div>
    </div>
  );
}
