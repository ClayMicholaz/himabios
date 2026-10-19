import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
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
      const fallbackText = `${
        studentData.status === "accepted" ? "DITERIMA" : "TETAP SEMANGAT"
      } DI HIMA BIOS UBM!

Nama: ${studentData.name}
NIM: ${studentData.nim}
${studentData.division ? `Divisi: ${studentData.division}` : ""}

@ubm_bios_ancol #HIMABIOS #UBMANCOL`;

      await navigator.clipboard.writeText(fallbackText);
      alert(
        "Terjadi kesalahan saat membuat gambar.\nTeks berhasil disalin untuk Instagram Story!",
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleInstagramShare}
      disabled={isGenerating}
      className={`${className} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {isGenerating ? (
        <>
          <svg
            aria-hidden="true"
            className="size-5 animate-spin"
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
          Membuat gambar...
        </>
      ) : (
        <>
          <FaInstagram aria-hidden="true" className="text-lg" />
          Bagikan ke Story IG
        </>
      )}
    </button>
  );
}
