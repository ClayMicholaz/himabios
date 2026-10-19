import { useState } from "react";
import clsx from "clsx";
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

const secondaryButton =
  "flex w-full cursor-pointer items-center justify-center gap-3 rounded border-2 border-silver-300 px-4 py-3 font-display font-bold text-heading transition-colors hover:border-accent hover:text-accent";

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
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-12 text-center">
        <p className="text-lg text-muted">NIM tidak ditemukan dalam sistem</p>
        <button
          onClick={onReset}
          className="cursor-pointer rounded bg-cta px-10 py-4 font-display text-lg font-bold text-on-cta transition-opacity hover:opacity-90"
        >
          Coba lagi
        </button>
      </div>
    );
  }

  const isAccepted = searchResult.status === "accepted";

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <article
        aria-label="Hasil seleksi"
        className={clsx(
          "overflow-hidden rounded-md border-2",
          isAccepted
            ? "border-accent shadow-[0_0_40px_rgb(0_255_210/0.15)]"
            : "border-silver-300",
        )}
      >
        <div
          className={clsx(
            "px-5 py-3 font-mono text-sm font-bold tracking-widest",
            isAccepted ? "bg-cta text-on-cta" : "bg-raised text-danger",
          )}
        >
          {isAccepted ? "● SELAMAT, KAMU DITERIMA" : "✕ BELUM LOLOS SELEKSI"}
        </div>

        <div className="flex flex-col gap-6 bg-surface p-6 sm:p-8">
          <p className="font-display text-2xl leading-snug font-bold text-heading sm:text-3xl">
            {isAccepted
              ? `${searchResult.name}, kamu diterima di BIOS divisi ${searchResult.division}.`
              : `${searchResult.name}, terima kasih sudah mendaftar. Tetap ikut belajar di BIOS, ya.`}
          </p>

          <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-[auto_1fr]">
            <dt className="font-mono text-sm text-muted">Nama</dt>
            <dd className="font-semibold text-heading">{searchResult.name}</dd>
            <dt className="font-mono text-sm text-muted">NIM</dt>
            <dd className="font-mono text-heading">{searchResult.nim}</dd>
            <dt className="font-mono text-sm text-muted">Divisi</dt>
            <dd className="font-semibold text-accent">
              {searchResult.division || "-"}
            </dd>
          </dl>
        </div>
      </article>

      <div className="flex flex-col gap-3">
        {isAccepted && (
          <>
            {!showPhoneInput ? (
              <button
                onClick={() => setShowPhoneInput(true)}
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded bg-cta px-4 py-3.5 font-display font-bold text-on-cta transition-opacity hover:opacity-90"
              >
                <FaWhatsapp aria-hidden="true" className="text-lg" />
                Gabung grup WhatsApp
              </button>
            ) : (
              <div className="flex flex-col gap-3 rounded-md border border-line bg-surface p-5">
                <label
                  htmlFor="wa-number"
                  className="font-display font-bold text-heading"
                >
                  Verifikasi nomor WhatsApp
                </label>
                <p className="text-sm text-muted">
                  Masukkan nomor WhatsApp yang sama dengan saat pendaftaran.
                </p>
                <input
                  id="wa-number"
                  type="tel"
                  inputMode="numeric"
                  value={userPhoneNumber}
                  onChange={(e) => setUserPhoneNumber(e.target.value)}
                  placeholder="628123456789"
                  aria-invalid={Boolean(phoneError)}
                  className="w-full rounded border-2 border-line bg-bg px-4 py-3 font-mono text-heading placeholder:text-muted/60 focus:border-accent focus:outline-hidden"
                />
                {phoneError && (
                  <p role="alert" className="text-sm text-danger">
                    {phoneError}
                  </p>
                )}
                <div className="flex gap-3">
                  <button
                    onClick={handleWhatsAppJoin}
                    disabled={!userPhoneNumber.trim()}
                    className="flex-1 cursor-pointer rounded bg-cta px-4 py-3 font-display font-bold text-on-cta transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:bg-raised disabled:text-muted"
                  >
                    Verifikasi
                  </button>
                  <button
                    onClick={() => {
                      setShowPhoneInput(false);
                      setUserPhoneNumber("");
                      setPhoneError("");
                    }}
                    className="flex-1 cursor-pointer rounded border-2 border-line px-4 py-3 font-display font-bold text-heading transition-colors hover:border-silver-300"
                  >
                    Batal
                  </button>
                </div>
              </div>
            )}

            <InstagramShareButton
              studentData={searchResult}
              className={secondaryButton}
            />
          </>
        )}

        <button onClick={onReset} className={secondaryButton}>
          <FaArrowRotateLeft aria-hidden="true" className="text-lg" />
          Cek NIM lain
        </button>
      </div>
    </div>
  );
}
