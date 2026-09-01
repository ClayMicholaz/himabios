"use client";
import Layout from "@/components/Layout";
import ScheduleCard from "@/components/announcement/ScheduleCard";
import CountdownTimer from "@/components/announcement/CountdownTimer";
import InputForm from "@/components/announcement/InputForm";
import LoadingScreen from "@/components/announcement/LoadingScreen";
import StudentResultCard from "@/components/announcement/StudentResultCard";
import { useAnnouncementLogic } from "@/hooks/useAnnouncementLogic";

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

const announcementConfig = {
  releaseDate: new Date("2025-09-21"),
  releaseTime: "12:00",
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

  const handleWhatsAppJoin = () => {
    if (!searchResult) return;
    const groupLink = "https://chat.whatsapp.com/G0a2OMp5wWx69yIOpwkckA";
    window.open(groupLink, "_blank");
    alert("Selamat datang di group WhatsApp HIMA BIOS!");
  };

  return (
    <Layout>
      {/* Hero Banner Header */}
      {/* <div className="hero-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 lg:py-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white dark:text-black leading-tight">
            Pengumuman HIMA BIOS
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 text-white dark:text-black max-w-3xl mx-auto px-4">
            Universitas Bunda Mulia
          </p>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="bg-white dark:bg-gray-900 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {isAnnouncementTime ? (
            // AFTER release date/time: show inputs / loading / results
            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
              {!isSearching && !showResult && (
                <div className="px-4 sm:px-6 lg:px-8">
                  <InputForm
                    nimInput={nimInput}
                    nimError={nimError}
                    isNimValid={isNimValid}
                    onNimInput={handleNimInput}
                    onSearch={handleSearch}
                  />
                </div>
              )}

              {isSearching && (
                <div className="px-4 sm:px-6 lg:px-8">
                  <LoadingScreen countdown={countdown} />
                </div>
              )}

              {showResult && (
                <div className="px-4 sm:px-6 lg:px-8">
                  <StudentResultCard
                    searchResult={searchResult}
                    onReset={handleReset}
                    onWhatsAppJoin={handleWhatsAppJoin}
                  />
                </div>
              )}
            </div>
          ) : (
            // BEFORE release date/time: show schedule + countdown
            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
              <div className="px-4 sm:px-6 lg:px-8">
                <ScheduleCard
                  releaseDate={announcementConfig.releaseDate}
                  releaseTime={announcementConfig.releaseTime}
                />
              </div>

              <div className="px-4 sm:px-6 lg:px-8">
                <CountdownTimer timeRemaining={timeRemaining} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
