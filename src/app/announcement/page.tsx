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
    name: "Evelyn Pricillia",
    nim: "32260098",
    division: "Media dan Komunikasi",
    status: "accepted",
    phoneNumber: "6281281085850",
  },
  {
    name: "Windy Natalie",
    nim: "32260083",
    division: "Wirausaha",
    status: "accepted",
    phoneNumber: "628567996410",
  },
  {
    name: "Christopher Sakalessy",
    nim: "32260089",
    division: "Event Organizer",
    status: "accepted",
    phoneNumber: "628121000115",
  },
  {
    name: "Louie Hansen Liandi",
    nim: "32260113",
    division: "Development and Programming",
    status: "accepted",
    phoneNumber: "6281286382755",
  },
  {
    name: "Nathaniel Pangestu",
    nim: "32250048",
    division: "Development and Programming",
    status: "accepted",
    phoneNumber: "6281384584384",
  },
  {
    name: "Steven Budiman Wijaya",
    nim: "32260105",
    division: "Development and Programming",
    status: "accepted",
    phoneNumber: "6282297970015",
  },
  {
    name: "Steven Willis",
    nim: "32250017",
    division: "Development and Programming",
    status: "accepted",
    phoneNumber: "6287882281888",
  },
  {
    name: "Muhammad Farel Dwi S",
    nim: "32260117",
    division: "Documentation",
    status: "accepted",
    phoneNumber: "6285892244390",
  },
  {
    name: "Oktimah Pujiani",
    nim: "32260122",
    division: "Documentation",
    status: "accepted",
    phoneNumber: "6282137928649",
  },
  {
    name: "Ernestien Naori",
    nim: "32260107",
    division: "Design",
    status: "accepted",
    phoneNumber: "6289643322796",
  },
  {
    name: "Ryan Andrew Lee",
    nim: "32260109",
    division: "Design",
    status: "accepted",
    phoneNumber: "6283872929989",
  },
  {
    name: "Darion Audrey",
    nim: "32250042",
    division: "",
    status: "rejected",
    phoneNumber: "6281363322529",
  },
  {
    name: "Edwin Farrel Kalendesang",
    nim: "32250045",
    division: "",
    status: "rejected",
    phoneNumber: "6282124561710",
  },
  {
    name: "Jonatan Nilena Wahyudi",
    nim: "32260083",
    division: "",
    status: "rejected",
    phoneNumber: "62557182220",
  },
  {
    name: "Matthew Chanson",
    nim: "32260112",
    division: "",
    status: "rejected",
    phoneNumber: "6283831688855",
  },
  {
    name: "Fernando",
    nim: "32240137",
    division: "",
    status: "rejected",
    phoneNumber: "6281779171738",
  },
  {
    name: "Yosua Santoso",
    nim: "32260124",
    division: "",
    status: "rejected",
    phoneNumber: "6285876846368",
  },
];

const announcementConfig = {
  releaseDate: new Date("2026-09-19"),
  releaseTime: "00:00",
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
    const groupLink = "https://chat.whatsapp.com/GkNlatokviu4FlBnbPtOkB";
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
