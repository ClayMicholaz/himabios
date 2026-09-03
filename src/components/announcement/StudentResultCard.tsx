import { useState } from "react";
import { FaArrowRotateLeft, FaWhatsapp } from "react-icons/fa6";
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

  return (
    <div className="w-full">
      <div className="w-full pt-0 pb-2 text-center sm:pb-3 lg:pb-4">
        <div className="space-y-2">
          <h1
            className={`text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl ${
              isAccepted
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-red-700 dark:text-red-600"
            }`}
          >
            {isAccepted ? "SELAMAT!" : "MOHON MAAF"}
          </h1>
          <p className="mx-auto max-w-4xl text-lg font-semibold text-slate-700 dark:text-slate-200 sm:text-xl lg:text-3xl">
            {isAccepted
              ? `${searchResult.name} anda diterima di BIOS divisi ${searchResult.division}`
              : `${searchResult.name} anda belum diterima di HIMA BIOS`}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800/80">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Nama
          </p>
          <p className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
            {searchResult.name}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800/80">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            NIM
          </p>
          <p className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
            {searchResult.nim}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800/80">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Divisi
          </p>
          <p className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
            {searchResult.division || "-"}
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {isAccepted && (
          <>
            <InstagramShareButton
              studentData={searchResult}
              className="w-full"
            />

            {!showPhoneInput ? (
              <button
                onClick={() => setShowPhoneInput(true)}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-base font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-600 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
              >
                <FaWhatsapp className="text-lg" />
                Gabung WhatsApp Group
              </button>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/80">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Verifikasi Nomor WhatsApp
                </h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Masukkan nomor WhatsApp yang sama dengan saat pendaftaran
                </p>
                <input
                  type="text"
                  value={userPhoneNumber}
                  onChange={(e) => setUserPhoneNumber(e.target.value)}
                  placeholder="Contoh: 628123456789"
                  className="mt-4 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
                />
                {phoneError && (
                  <p className="mt-3 text-sm text-red-600 dark:text-red-400">
                    {phoneError}
                  </p>
                )}
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={handleWhatsAppJoin}
                    disabled={!userPhoneNumber.trim()}
                    className="flex-1 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 px-4 py-3 font-semibold text-white transition-all hover:from-green-700 hover:to-teal-700 disabled:cursor-not-allowed disabled:from-slate-300 disabled:to-slate-300 dark:disabled:from-slate-600 dark:disabled:to-slate-600"
                  >
                    Verifikasi
                  </button>
                  <button
                    onClick={() => {
                      setShowPhoneInput(false);
                      setUserPhoneNumber("");
                      setPhoneError("");
                    }}
                    className="flex-1 rounded-xl bg-slate-200 px-4 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
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
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-base font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-white dark:hover:text-white"
        >
          <FaArrowRotateLeft className="text-lg" />
          Cek NIM Lain
        </button>
      </div>
    </div>
  );
}
