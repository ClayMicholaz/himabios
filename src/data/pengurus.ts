// Struktur pengurus BIOS yang ditampilkan di /divisi.
// Kosongkan `name` untuk menampilkan "Segera diumumkan".
// `photo` adalah path di folder public, misalnya "/pengurus/ketua.webp".

export interface Pengurus {
  name: string;
  role: string;
  photo?: string;
}

export interface Divisi {
  name: string;
  description: string;
  head: Pengurus;
  members: Pengurus[];
}

export const periode = "2026 - 2027";

export const bph: Pengurus[] = [
  { name: "Febriani Adeline", role: "Ketua" },
  { name: "Claudya Putri Kirania", role: "Wakil Ketua" },
  { name: "Chelsea Arlyn", role: "Sekretaris 1" },
  { name: "Belvia Carla Putri", role: "Sekretaris 2" },
  { name: "Corinthia Angie", role: "Bendahara" },
];

const DnP: Divisi = {
  name: "Development & Programming",
  description:
    "Divisi yang bertanggung jawab atas pengembangan dan pemrograman",
  head: { name: "Clay Micholaz Fu", role: "Kepala Divisi" },
  members: [
    { name: "Moses Chisthoper Adisam", role: "Anggota" },
    { name: "Steven Willis", role: "Anggota" },
    { name: "Louie Hansen Linadi", role: "Anggota" },
    { name: "Nathaniel Pangestu", role: "Anggota" },
    { name: "Steven Budiman Wijaya", role: "Anggota" },
  ],
};

const EO: Divisi = {
  name: "Event Organizer",
  description:
    "Divisi yang bertanggung jawab atas penyelenggaraan acara dan kegiatan",
  head: { name: "Clarance Julian Sudrajat", role: "Kepala Divisi" },
  members: [
    { name: "Christopher Sakalessy", role: "Anggota" },
    { name: "Egner Constantin", role: "Anggota" },
    { name: "Nur Syfa Dawira", role: "Anggota" },
  ],
};

const Marketing: Divisi = {
  name: "Marketing",
  description: "Divisi yang bertanggung jawab atas pemasaran dan promosi",
  head: { name: "Steven", role: "Kepala Divisi" },
  members: [
    { name: "Lionel Christian", role: "Anggota" },
    { name: "Rojas Hawkins Nicolas", role: "Anggota" },
    { name: "Windy Natalie", role: "Anggota" },
  ],
};

const Creative: Divisi = {
  name: "Creative & Design",
  description:
    "Divisi yang bertanggung jawab atas desain grafis, ilustrasi, dan konten kreatif",
  head: { name: "Steven Wilbert Rafael", role: "Kepala Divisi" },
  members: [
    { name: "Davine Mersada", role: "Anggota" },
    { name: "Ivana Natalie Quinn", role: "Anggota" },
    { name: "Jennifer Haris", role: "Anggota" },
    { name: "Ernestien Naori", role: "Anggota" },
    { name: "Ryan Andrew Lee", role: "Anggota" },
  ],
};

const PublicRelation: Divisi = {
  name: "Public Relations",
  description:
    "Divisi yang bertanggung jawab atas hubungan masyarakat dan komunikasi eksternal",
  head: { name: "Bun Jantolio", role: "Kepala Divisi" },
  members: [{ name: "Evelyn Pricilia", role: "Anggota" }],
};

const Documentation: Divisi = {
  name: "Documentation",
  description: "Divisi yang bertanggung jawab atas dokumentasi dan pelaporan",
  head: { name: "Steven Imanuel", role: "Kepala Divisi" },
  members: [
    { name: "Steven Owen", role: "Anggota" },
    { name: "Muhammad Farrel Dwi", role: "Anggota" },
    { name: "Oktimah Pujiani", role: "Anggota" },
  ],
};

export const divisions: Divisi[] = [
  DnP,
  EO,
  Marketing,
  Creative,
  PublicRelation,
  Documentation,
];
