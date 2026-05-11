import { useState } from "react";
import InstagramShareButton from "./InstagramShareButton";

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
  onWhatsAppJoin: () => void;
}

export default function StudentResultCard({
  searchResult,
  onReset,
  onWhatsAppJoin,
}: StudentResultCardProps) {
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [phoneError, setPhoneError] = useState("");

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

  const handleWhatsAppJoin = () => {
    if (!searchResult || !userPhoneNumber) return;

    if (!validatePhoneNumber(userPhoneNumber)) return;

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
      setPhoneError("Nomor WhatsApp tidak sesuai dengan data pendaftaran");
      return;
    }

    onWhatsAppJoin();
    setShowPhoneInput(false);
    setUserPhoneNumber("");
  };

  if (!searchResult) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          NIM tidak ditemukan dalam sistem
        </p>
        <button
          onClick={onReset}
          className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-lg font-bold text-lg transition-all"
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  const isAccepted = searchResult.status === "accepted";
  const statusColor = isAccepted
    ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
    : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800";

  const statusText = isAccepted ? "Diterima" : "Tidak Diterima";
  const statusMessage = isAccepted
    ? `Selamat! Anda diterima di divisi ${searchResult.division}`
    : "Terima kasih telah mengikuti seleksi HIMA BIOS. Tetap semangat!";

  return (
    <div className="space-y-6">
      {/* Status Card */}
      <div className={`rounded-lg border p-6 ${statusColor}`}>
        <p
          className={`text-center text-sm font-semibold mb-2 ${
            isAccepted
              ? "text-green-700 dark:text-green-300"
              : "text-red-700 dark:text-red-300"
          }`}
        >
          {statusText}
        </p>
        <p className="text-center text-lg font-bold text-gray-900 dark:text-white">
          {statusMessage}
        </p>
      </div>

      {/* Student Info */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Nama</span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {searchResult.name}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">NIM</span>
          <span className="font-mono font-semibold text-gray-900 dark:text-white">
            {searchResult.nim}
          </span>
        </div>
        {searchResult.division && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">Divisi</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {searchResult.division}
            </span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        {isAccepted && (
          <>
            <InstagramShareButton
              studentData={searchResult}
              className="w-full"
            />

            {!showPhoneInput ? (
              <button
                onClick={() => setShowPhoneInput(true)}
                className="w-full px-4 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-lg font-bold text-lg transition-all"
              >
                Gabung WhatsApp Group
              </button>
            ) : (
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 space-y-3">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Verifikasi Nomor WhatsApp
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Masukkan nomor WhatsApp yang sama dengan saat pendaftaran
                </p>
                <input
                  type="text"
                  value={userPhoneNumber}
                  onChange={(e) => setUserPhoneNumber(e.target.value)}
                  placeholder="Contoh: 628123456789"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm"
                />
                {phoneError && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {phoneError}
                  </p>
                )}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={handleWhatsAppJoin}
                    disabled={!userPhoneNumber.trim()}
                    className="flex-1 px-4 py-2 sm:py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 disabled:from-gray-300 disabled:to-gray-300 dark:disabled:from-gray-600 dark:disabled:to-gray-600 text-white rounded-lg font-semibold transition-all"
                  >
                    Verifikasi
                  </button>
                  <button
                    onClick={() => {
                      setShowPhoneInput(false);
                      setUserPhoneNumber("");
                      setPhoneError("");
                    }}
                    className="flex-1 px-4 py-2 sm:py-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-900 dark:text-white rounded-lg font-semibold transition-colors"
                  >
                    Batal
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        <button
          onClick={onReset}
          className="w-full px-4 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-lg font-bold text-lg transition-all"
        >
          Cek NIM Lain
        </button>
      </div>
    </div>
  );
}
