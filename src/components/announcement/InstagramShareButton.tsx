import React, { useRef, useState } from "react";
import {
  InstagramShareHandler,
  InstagramImageGenerator,
} from "@/utils/imageGenerator";

interface StudentData {
  name: string;
  nim: string;
  division: string;
  status: "accepted" | "rejected";
  phoneNumber?: string;
}

interface InstagramShareButtonProps {
  studentData: StudentData;
  className?: string;
}

export default function InstagramShareButton({
  studentData,
  className = "",
}: InstagramShareButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleInstagramShare = async () => {
    try {
      setIsGenerating(true);

      // Generate image using canvas
      const generator = new InstagramImageGenerator();
      const imageDataUrl = await generator.generateResultImage(studentData);

      // Share to Instagram
      await InstagramShareHandler.shareToInstagram(imageDataUrl, studentData);
    } catch (error) {
      console.error("Error generating Instagram image:", error);

      // Fallback to simple text copy
      const fallbackText = `🎉 ${
        studentData.status === "accepted" ? "DITERIMA" : "TETAP SEMANGAT"
      } DI HIMA BIOS UBM! 🎉

Nama: ${studentData.name}
NIM: ${studentData.nim}
${studentData.division ? `Divisi: ${studentData.division}` : ""}

@ubm_bios_ancol #HIMABIOS #UBMANCOL #BIOS2025`;

      await navigator.clipboard.writeText(fallbackText);
      alert(
        "❌ Terjadi kesalahan saat membuat gambar.\n✅ Teks berhasil disalin untuk Instagram Story!",
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      {/* Hidden card for image generation fallback */}
      <div
        ref={cardRef}
        className="fixed -top-[9999px] left-0 w-[1080px] h-[1920px] bg-gradient-to-br from-green-50 to-green-100"
        style={{
          fontFamily: "Inter, sans-serif",
          transform: "scale(0.1)",
          transformOrigin: "top left",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full p-20 text-center">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-8xl font-bold text-blue-800 mb-4">HIMA BIOS</h1>
            <p className="text-6xl text-gray-700">Universitas Bunda Mulia</p>
            <p className="text-4xl text-gray-500 mt-4">PENGUMUMAN SELEKSI</p>
          </div>

          {/* Status */}
          <div className="mb-16">
            <div className="text-[200px] mb-8">
              {studentData.status === "accepted" ? "🎉" : "🌟"}
            </div>
            <h2
              className={`text-8xl font-bold mb-6 ${
                studentData.status === "accepted"
                  ? "text-green-700"
                  : "text-orange-600"
              }`}
            >
              {studentData.status === "accepted"
                ? "SELAMAT!"
                : "TETAP SEMANGAT!"}
            </h2>
            <p
              className={`text-5xl ${
                studentData.status === "accepted"
                  ? "text-green-600"
                  : "text-orange-500"
              }`}
            >
              {studentData.status === "accepted"
                ? "Anda telah diterima!"
                : "Terus berkarya dan berkembang!"}
            </p>
          </div>

          {/* Student Info */}
          <div className="bg-white/90 rounded-3xl p-16 mb-16 text-left w-full max-w-4xl">
            <div className="space-y-8">
              <div>
                <span className="text-5xl font-bold text-gray-700">Nama:</span>
                <p className="text-5xl font-bold text-gray-900 mt-2">
                  {studentData.name}
                </p>
              </div>
              <div>
                <span className="text-5xl font-bold text-gray-700">NIM:</span>
                <p className="text-5xl font-bold text-gray-900 mt-2 font-mono">
                  {studentData.nim}
                </p>
              </div>
              {studentData.division && (
                <div>
                  <span className="text-5xl font-bold text-gray-700">
                    Divisi:
                  </span>
                  <p className="text-5xl font-bold text-gray-900 mt-2">
                    {studentData.division}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-5xl font-bold text-indigo-500 mb-4">
              Follow us @ubm_bios_ancol
            </p>
            <p className="text-4xl text-violet-500 mb-4">
              #HIMABIOS #UBMANCOL #BIOS2025
            </p>
            <p className="text-3xl text-slate-500">himabios.ubm.ac.id</p>
          </div>
        </div>
      </div>

      {/* Actual share button */}
      <button
        onClick={handleInstagramShare}
        disabled={isGenerating}
        className={`w-full px-4 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 disabled:from-gray-300 disabled:to-gray-300 dark:disabled:from-gray-600 dark:disabled:to-gray-600 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 ${className} ${
          isGenerating ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isGenerating ? (
          <>
            <svg
              className="animate-spin h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Membuat Gambar...
          </>
        ) : (
          <>Share ke Instagram Story</>
        )}
      </button>
    </>
  );
}
