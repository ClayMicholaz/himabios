export interface PastEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  speaker?: string;
  location?: string;
}

export const pastEvents: PastEvent[] = [
  {
    id: "smart-surveillance-security-2026",
    title:
      "Smart Surveillance & Security - Implementasi AI Computer Vision untuk Deteksi Objek dan Identifikasi Wajah",
    date: "2026-11-23",
    speaker: "Ekki Rinaldi, S.Kom., M.Cs.",
    description:
      "Seminar membahas penerapan AI Computer Vision dalam sistem pengawasan dan keamanan modern, mencakup teknologi object detection, face recognition, serta implementasi praktisnya di industri",
    location: "TUSR Lt. 7",
  },
  {
    id: "kunjungan-industri-bios-maxy-ai-hub-2026",
    title: "Kunjungan Industri HIMA Informatika (BIOS) - MAXY AI HUB",
    date: "2026-11-18",
    description:
      "Kunjungan industri yang diselenggarakan oleh Himpunan Mahasiswa Informatika (BIOS) ke MAXY AI HUB untuk mengenal lingkungan industri dan penerapan teknologi AI secara langsung.",
    location: "MAXY AI HUB",
  },
  {
    id: "meet-and-greet-hima-bios-2026",
    title: "Meet & Greet HIMA BIOS Informatika",
    date: "2026-09-11",
    description:
      "Acara Meet & Greet HIMA BIOS Informatika yang bertujuan memperkenalkan organisasi HIMA BIOS kepada mahasiswa Informatika sekaligus membangun relasi dan koneksi di lingkungan kampus.",
    location: "Premiere Room, Lt. 2",
  },
];
