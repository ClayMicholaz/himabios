"use client";

import Layout from "@/components/Layout";
import ScheduleCard from "@/components/announcement/ScheduleCard";
import CountdownTimer from "@/components/announcement/CountdownTimer";
import InputForm from "@/components/announcement/InputForm";
import LoadingScreen from "@/components/announcement/LoadingScreen";
import StudentResultCard from "@/components/announcement/StudentResultCard";
import AnnouncementClosed from "@/components/announcement/AnnouncementClosed";
import Footer from "@/components/announcement/Footer";
import { useAnnouncementLogic } from "@/hooks/useAnnouncementLogic";
import { designTokens, componentStyles } from "@/styles/designTokens";

interface StudentData {
  name: string;
  nim: string;
  division: string;
  status: "accepted" | "rejected";
  phoneNumber?: string;
}

const studentAcceptanceData: StudentData[] = [
  // Accepted
  {
    name: "Rojas Hawkins Nicolas",
    nim: "32250005",
    division: "Tata Usaha",
    status: "accepted",
    phoneNumber: "6281211689133",
  },
  {
    name: "Claudya Putri Kirania",
    nim: "32250016",
    division: "Public Relation",
    status: "accepted",
    phoneNumber: "6285775228500",
  },
  {
    name: "Davine Mersadra",
    nim: "32250009",
    division: "Creative & Design",
    status: "accepted",
    phoneNumber: "62881081970769",
  },
  {
    name: "Ivana Natalie Quinn",
    nim: "32250155",
    division: "Creative & Design",
    status: "accepted",
    phoneNumber: "6281804953508",
  },
  {
    name: "Jennifer Haris",
    nim: "32250028",
    division: "Creative & Design",
    status: "accepted",
    phoneNumber: "6285171100560",
  },
  {
    name: "Nur Syfa Dawira",
    nim: "32250153",
    division: "Acara",
    status: "accepted",
    phoneNumber: "6285780134718",
  },
  {
    name: "Thassania Thalia",
    nim: "32250161",
    division: "Publication & Documentation",
    status: "accepted",
    phoneNumber: "6285781939599",
  },
  {
    name: "Lionel Christian",
    nim: "32250018",
    division: "Tata Usaha",
    status: "accepted",
    phoneNumber: "6287780294649",
  },
  {
    name: "Moses Christopher Adisam",
    nim: "32250047",
    division: "Development & Programming",
    status: "accepted",
    phoneNumber: "6285890326818",
  },
  {
    name: "Belvia Carla Putri",
    nim: "32250026",
    division: "Acara",
    status: "accepted",
    phoneNumber: "6287876481777",
  },
  {
    name: "Marcos",
    nim: "32240172",
    division: "Tata Usaha",
    status: "accepted",
    phoneNumber: "6282124518164",
  },
  {
    name: "Steven Owen",
    nim: "32250014",
    division: "Publication & Documentation",
    status: "accepted",
    phoneNumber: "6287775978606",
  },
  // Rejected
  {
    name: "Nathan William Pranoto",
    nim: "32250019",
    division: "",
    status: "rejected",
  },
  {
    name: "Wilsen Willian",
    nim: "32250034",
    division: "",
    status: "rejected",
  },
  {
    name: "Muhammad Dzaki Naufali",
    nim: "32250022",
    division: "",
    status: "rejected",
  },
  {
    name: "Nathaniel Pangestu",
    nim: "32250048",
    division: "",
    status: "rejected",
  },
];

// const announcementConfig = {
//   releaseDate: new Date("2025-09-21"),
//   releaseTime: "12:00",
// };

const announcementConfig = {
  releaseDate: new Date("2025-09-18"),
  releaseTime: "09:45",
};

export default function AnnouncementPage() {
  const {
    nimInput,
    searchResult,
    isAnnouncementTime,
    timeRemaining,
    showResult,
    isSearching,
    countdown,
    nimError,
    isNimValid,
    handleNimInput,
    handleSearch,
    handleReset,
  } = useAnnouncementLogic(studentAcceptanceData, announcementConfig);

  const handleInstagramShare = (studentData: StudentData) => {
    const shareText = `🎉 DITERIMA DI HIMA BIOS UBM! 🎉

Nama: ${studentData.name}
NIM: ${studentData.nim}
Divisi: ${studentData.division}

#HIMABIOS #UBMANCOL #BIOS2025`;

    navigator.clipboard.writeText(shareText);
    alert("Teks berhasil disalin untuk Instagram Story!");
  };

  const handleWhatsAppJoin = () => {
    if (!searchResult) return;
    const groupLink = "https://chat.whatsapp.com/G0a2OMp5wWx69yIOpwkckA";
    window.open(groupLink, "_blank");
    alert("Selamat datang di group WhatsApp HIMA BIOS!");
  };

  return (
    <Layout>
      <div
        className={`min-h-screen ${designTokens.gradients.background} animate-fade-in`}
      >
        <div className="container mx-auto px-4 py-8 relative">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[calc(100vh-8rem)]">
            {/* Left Column - Schedule */}
            <div className="flex flex-col justify-center space-y-8 animate-slide-up">
              <div className="text-center">
                <h1
                  className={`text-4xl md:text-5xl ${componentStyles.text.heading.primary} mb-8 animate-fade-in`}
                >
                  🎓 PENGUMUMAN HIMA BIOS
                </h1>
                <p
                  className={`text-xl md:text-2xl ${componentStyles.text.body.secondary} mb-12`}
                >
                  Universitas Bunda Mulia
                </p>
              </div>

              <ScheduleCard
                releaseDate={announcementConfig.releaseDate}
                releaseTime={announcementConfig.releaseTime}
              />

              {!isAnnouncementTime && (
                <CountdownTimer timeRemaining={timeRemaining} />
              )}

              {/* Footer positioned at bottom of left column on desktop, hidden on mobile */}
              <div className="mt-auto hidden lg:block">
                <Footer />
              </div>
            </div>

            {/* Right Column - Input and Results */}
            <div className="flex flex-col justify-center">
              {isAnnouncementTime ? (
                <div className="space-y-8">
                  {!isSearching && !showResult && (
                    <InputForm
                      nimInput={nimInput}
                      nimError={nimError}
                      isNimValid={isNimValid}
                      onNimInput={handleNimInput}
                      onSearch={handleSearch}
                    />
                  )}

                  {isSearching && <LoadingScreen countdown={countdown} />}

                  {showResult && (
                    <div
                      className={`${designTokens.gradients.card} ${componentStyles.card.base} ${componentStyles.card.padding} backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 animate-scale-up`}
                    >
                      <h3
                        className={`text-3xl md:text-4xl ${componentStyles.text.heading.primary} text-center mb-8`}
                      >
                        🎯 Hasil Seleksi Anda
                      </h3>
                      <StudentResultCard
                        searchResult={searchResult}
                        onReset={handleReset}
                        onInstagramShare={handleInstagramShare}
                        onWhatsAppJoin={handleWhatsAppJoin}
                      />

                      {/* Footer on mobile - appears below results */}
                      <div className="mt-8 lg:hidden">
                        <Footer />
                      </div>
                    </div>
                  )}

                  {/* Footer on mobile when no result is shown */}
                  {!showResult && (
                    <div className="lg:hidden">
                      <Footer />
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-center h-full">
                    <AnnouncementClosed />
                  </div>

                  {/* Footer on mobile when announcement is closed */}
                  <div className="mt-8 lg:hidden">
                    <Footer />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
