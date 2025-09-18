import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

interface StudentData {
  name: string;
  nim: string;
  division: string;
  status: "accepted" | "rejected";
  phoneNumber?: string;
}

interface AnnouncementConfig {
  releaseDate: Date;
  releaseTime: string;
}

export function useAnnouncementLogic(
  studentAcceptanceData: StudentData[],
  announcementConfig: AnnouncementConfig
) {
  const [nimInput, setNimInput] = useState("");
  const [searchResult, setSearchResult] = useState<StudentData | null>(null);
  const [isAnnouncementTime, setIsAnnouncementTime] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [nimError, setNimError] = useState("");
  const [isNimValid, setIsNimValid] = useState(false);

  // Fungsi untuk mengecek apakah sudah waktunya pengumuman
  const checkAnnouncementTime = () => {
    const now = new Date();
    const releaseDateTime = new Date(announcementConfig.releaseDate);
    const [hours, minutes] = announcementConfig.releaseTime.split(":");
    releaseDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    if (now >= releaseDateTime) {
      setIsAnnouncementTime(true);
      setTimeRemaining("");
    } else {
      setIsAnnouncementTime(false);
      // Hitung waktu tersisa
      const timeDiff = releaseDateTime.getTime() - now.getTime();
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }
  };

  // Update timer setiap detik
  useEffect(() => {
    checkAnnouncementTime();
    const timer = setInterval(checkAnnouncementTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fungsi untuk validasi NIM secara real-time
  const validateNim = (nim: string) => {
    // Hapus spasi dan karakter non-digit
    const cleanNim = nim.replace(/\D/g, "");

    if (cleanNim.length === 0) {
      setNimError("");
      setIsNimValid(false);
      return cleanNim;
    }

    if (cleanNim.length > 8) {
      setNimError("NIM tidak boleh lebih dari 8 angka");
      setIsNimValid(false);
      return nimInput; // Jangan update jika lebih dari 8
    }

    if (cleanNim.length < 8) {
      setNimError(`NIM harus 8 angka (${cleanNim.length}/8)`);
      setIsNimValid(false);
    } else {
      // Cek apakah NIM ada dalam database saat sudah 8 digit
      const student = studentAcceptanceData.find(
        (student) => student.nim === cleanNim
      );

      if (student) {
        setNimError("");
        setIsNimValid(true);
      } else {
        setNimError("❌ NIM tidak ditemukan dalam sistem");
        setIsNimValid(false);
      }
    }

    return cleanNim;
  };

  // Fungsi untuk handle perubahan input NIM
  const handleNimInput = (value: string) => {
    const validatedNim = validateNim(value);
    setNimInput(validatedNim);
  };

  // Fungsi untuk trigger confetti
  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
    };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  // Fungsi untuk mencari data mahasiswa berdasarkan NIM
  const handleSearch = () => {
    if (!nimInput.trim()) {
      alert("Silakan masukkan NIM Anda");
      return;
    }

    if (!isNimValid) {
      alert("NIM harus berupa 8 angka");
      return;
    }

    setIsSearching(true);
    setCountdown(5);

    const student = studentAcceptanceData.find(
      (student) => student.nim === nimInput.trim()
    );

    // Countdown 5 detik
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          setIsSearching(false);
          setSearchResult(student || null);
          setShowResult(true);

          // Trigger confetti jika diterima
          if (student && student.status === "accepted") {
            triggerConfetti();
          }

          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Fungsi untuk reset pencarian
  const handleReset = () => {
    setNimInput("");
    setSearchResult(null);
    setShowResult(false);
    setIsSearching(false);
    setCountdown(0);
    setNimError("");
    setIsNimValid(false);
  };

  return {
    // State
    nimInput,
    searchResult,
    isAnnouncementTime,
    timeRemaining,
    showResult,
    isSearching,
    countdown,
    nimError,
    isNimValid,

    // Functions
    handleNimInput,
    handleSearch,
    handleReset,
  };
}
