import { useState } from "react";
import { designTokens, componentStyles } from "@/styles/designTokens";

interface StudentData {
  name: string;
  nim: string;
  division: string;
  status: "accepted" | "rejected";
  phoneNumber?: string;
}

interface StudentResultCardProps {
  searchResult: StudentData | null;
  onReset: () => void;
  onInstagramShare: (studentData: StudentData) => void;
  onWhatsAppJoin: () => void;
}

export default function StudentResultCard({
  searchResult,
  onReset,
  onInstagramShare,
  onWhatsAppJoin,
}: StudentResultCardProps) {
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  // Fungsi untuk validasi nomor WhatsApp
  const validatePhoneNumber = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 10 || cleanPhone.length > 15) {
      setPhoneError("Nomor WhatsApp harus 10-15 digit");
      return false;
    }
    if (!cleanPhone.startsWith("62") && !cleanPhone.startsWith("08")) {
      setPhoneError("Nomor harus dimulai dengan 62 atau 08");
      return false;
    }
    setPhoneError("");
    return true;
  };

  // Fungsi untuk join WhatsApp group
  const handleWhatsAppJoin = () => {
    if (!searchResult || !userPhoneNumber) return;

    if (!validatePhoneNumber(userPhoneNumber)) return;

    // Normalize phone numbers untuk perbandingan
    const normalizePhone = (phone: string) => {
      let clean = phone.replace(/\D/g, "");
      if (clean.startsWith("08")) {
        clean = "62" + clean.substring(1);
      }
      return clean;
    };

    const inputPhone = normalizePhone(userPhoneNumber);
    const registeredPhone = normalizePhone(searchResult.phoneNumber || "");

    if (inputPhone !== registeredPhone) {
      setPhoneError("❌ Nomor WhatsApp tidak sesuai dengan data pendaftaran");
      return;
    }

    onWhatsAppJoin();
    setShowPhoneInput(false);
    setUserPhoneNumber("");
  };

  if (!searchResult) {
    return (
      <div className="text-center p-10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-2xl">
        <div className="text-7xl md:text-8xl mb-6 animate-pulse">❌</div>
        <h4 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-6">
          NIM Tidak Ditemukan
        </h4>
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
          NIM yang Anda masukkan tidak terdaftar dalam sistem.
          <br />
          Pastikan NIM yang dimasukkan benar dan coba lagi.
        </p>
        <button
          onClick={onReset}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
        >
          🔄 Coba Lagi
        </button>
      </div>
    );
  }

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "accepted":
        return {
          container: `${designTokens.status.accepted.background} ${designTokens.status.accepted.border}`,
          title: designTokens.status.accepted.text,
          subtitle: designTokens.status.accepted.textSecondary,
          text: designTokens.status.accepted.text,
          emoji: designTokens.status.accepted.icon,
          title_text: "SELAMAT!",
          subtitle_text: "Anda telah diterima!",
        };
      case "rejected":
        return {
          container: `${designTokens.status.rejected.background} ${designTokens.status.rejected.border}`,
          title: designTokens.status.rejected.text,
          subtitle: designTokens.status.rejected.textSecondary,
          text: designTokens.status.rejected.text,
          emoji: designTokens.status.rejected.icon,
          title_text: "TETAP SEMANGAT!",
          subtitle_text: "Terus berkarya dan berkembang!",
        };
      default:
        return {
          container: `${designTokens.status.pending.background} ${designTokens.status.pending.border}`,
          title: designTokens.status.pending.text,
          subtitle: designTokens.status.pending.textSecondary,
          text: designTokens.status.pending.text,
          emoji: designTokens.status.pending.icon,
          title_text: "MENUNGGU",
          subtitle_text: "Mohon tunggu pengumuman selanjutnya",
        };
    }
  };

  const styles = getStatusStyles(searchResult.status);

  const getDescriptionText = () => {
    switch (searchResult.status) {
      case "accepted":
        return `Selamat! Anda diterima di divisi ${searchResult.division}! Silakan tunggu informasi selanjutnya melalui WhatsApp. Welcome to the BIOS!`;
      case "rejected":
        return "Terima kasih telah mengikuti seleksi HIMA BIOS! Walaupun belum bergabung kali ini, terus kembangkan potensi diri dan ikuti kegiatan-kegiatan BIOS lainnya. Semangat berkarya!";
      default:
        return "Status Anda masih dalam proses review. Silakan cek kembali nanti. Stay tuned!";
    }
  };

  return (
    <div
      className={`${componentStyles.card.padding} ${componentStyles.card.base} border-2 relative overflow-hidden ${styles.container} animate-scale-up`}
    >
      <div className="text-center mb-8">
        <div className="text-7xl md:text-8xl mb-6 animate-bounce-gentle">
          {styles.emoji}
        </div>
        <h4
          className={`text-4xl md:text-5xl ${componentStyles.text.heading.primary} mb-4 ${styles.title}`}
        >
          {styles.title_text}
        </h4>
        <p className={`text-xl md:text-2xl font-semibold ${styles.subtitle}`}>
          {styles.subtitle_text}
        </p>
      </div>

      <div
        className={`space-y-6 ${designTokens.gradients.card} rounded-2xl p-8 backdrop-blur-sm border ${componentStyles.card.border}`}
      >
        <div className="flex flex-col md:flex-row md:justify-between gap-3">
          <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
            Nama:
          </span>
          <span className="text-xl font-bold text-gray-900 dark:text-white md:text-right">
            {searchResult.name}
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-3">
          <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
            NIM:
          </span>
          <span className="text-xl font-bold text-gray-900 dark:text-white font-mono md:text-right">
            {searchResult.nim}
          </span>
        </div>
        {searchResult.division && (
          <div className="flex flex-col md:flex-row md:justify-between gap-3">
            <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
              Divisi:
            </span>
            <span className="text-xl font-bold text-gray-900 dark:text-white md:text-right">
              {searchResult.division}
            </span>
          </div>
        )}
      </div>

      <div className="mt-8 p-8 bg-white/80 dark:bg-gray-700/80 rounded-2xl shadow-lg backdrop-blur-sm">
        <p
          className={`text-center text-lg md:text-xl leading-relaxed font-medium ${styles.text}`}
        >
          {getDescriptionText()}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 space-y-4">
        {searchResult.status === "accepted" && (
          <>
            {/* Instagram Share Button */}
            <div className="flex justify-center">
              <button
                onClick={() => onInstagramShare(searchResult)}
                className={`${componentStyles.button.base} ${componentStyles.button.social.instagram} ${componentStyles.button.size.lg} flex items-center gap-3`}
              >
                📸 Share ke Instagram Story
              </button>
            </div>

            {/* WhatsApp Join Section */}
            {!showPhoneInput ? (
              <div className="flex justify-center">
                <button
                  onClick={() => setShowPhoneInput(true)}
                  className={`${componentStyles.button.base} ${componentStyles.button.social.whatsapp} ${componentStyles.button.size.lg} flex items-center gap-3`}
                >
                  💬 Gabung WhatsApp Group
                </button>
              </div>
            ) : (
              <div
                className={`${designTokens.gradients.card} rounded-2xl p-6 shadow-lg backdrop-blur-sm border ${componentStyles.card.border}`}
              >
                <h5
                  className={`text-lg ${componentStyles.text.heading.secondary} mb-4 text-center`}
                >
                  Verifikasi Nomor WhatsApp
                </h5>
                <p
                  className={`text-sm ${componentStyles.text.body.secondary} mb-4 text-center`}
                >
                  Masukkan nomor WhatsApp yang sama dengan saat pendaftaran
                </p>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={userPhoneNumber}
                    onChange={(e) => setUserPhoneNumber(e.target.value)}
                    placeholder="Contoh: 628123456789 atau 08123456789"
                    className={`w-full px-4 py-3 ${componentStyles.input.base} ${componentStyles.input.default} text-center font-mono`}
                  />
                  {phoneError && (
                    <div className="text-error-500 dark:text-error-400 text-center text-sm font-medium animate-fade-in">
                      {phoneError}
                    </div>
                  )}
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={handleWhatsAppJoin}
                      disabled={!userPhoneNumber.trim()}
                      className={`${componentStyles.button.base} ${componentStyles.button.success} ${componentStyles.button.size.sm} disabled:from-neutral-400 disabled:to-neutral-500 disabled:cursor-not-allowed disabled:scale-100`}
                    >
                      ✅ Verifikasi & Join
                    </button>
                    <button
                      onClick={() => {
                        setShowPhoneInput(false);
                        setUserPhoneNumber("");
                        setPhoneError("");
                      }}
                      className={`${componentStyles.button.base} ${componentStyles.button.secondary} ${componentStyles.button.size.sm}`}
                    >
                      ❌ Batal
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Reset Button */}
        <div className="flex justify-center">
          <button
            onClick={onReset}
            className={`${componentStyles.button.base} ${componentStyles.button.secondary} ${componentStyles.button.size.lg}`}
          >
            🔄 Cek NIM Lain
          </button>
        </div>
      </div>
    </div>
  );
}
