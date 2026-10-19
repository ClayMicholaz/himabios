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

export const periode = "";

export const bph: Pengurus[] = [
  { name: "", role: "Ketua" },
  { name: "", role: "Wakil Ketua" },
  { name: "", role: "Sekretaris" },
];

const emptyHead: Pengurus = { name: "", role: "Ketua Divisi" };

export const divisions: Divisi[] = [
  { name: "Tata Usaha", description: "", head: emptyHead, members: [] },
  { name: "Public Relation", description: "", head: emptyHead, members: [] },
  { name: "Creative & Design", description: "", head: emptyHead, members: [] },
  { name: "Acara", description: "", head: emptyHead, members: [] },
  {
    name: "Publication & Documentation",
    description: "",
    head: emptyHead,
    members: [],
  },
  {
    name: "Development & Programming",
    description: "",
    head: emptyHead,
    members: [],
  },
];
