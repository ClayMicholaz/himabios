---
sidebar_position: 1
title: "Introduction to Flutter"
description: "Complete guide to getting started with Dart programming"
---

# Introduction to Flutter

Flutter adalah UI toolkit open-source dari Google untuk membuat aplikasi mobile, web, dan desktop yang cantik dan terkompilasi secara native dari satu codebase. Flutter dibuat dengan bahasa pemrograman Dart, menjadikannya pilihan modern untuk pengembangan lintas platform.

## 📚 Table of Contents

<div class="toc-container">

1. **[1. Apa itu Flutter?](#apa-itu-flutter)**
2. **[2. Mengapa Belajar Flutter?](#mengapa-belajar-flutter)**
3. **[3. Installation Guide](#installation-guide)**
   - 🪟 [3.1. Windows](#windows)
   - 🍎 [3.2. macOS](#macos)
4. **[4. Getting Started](#getting-started)**
5. **[5. Your First Flutter App](#your-first-flutter-app)**

</div>

---

## Apa itu Flutter?

Flutter adalah framework UI yang memungkinkan Anda membangun aplikasi multi-platform yang cepat dan indah. Berikut beberapa karakteristik utamanya:

- **Satu Codebase**: Kembangkan aplikasi untuk Android, iOS, web, dan desktop dari satu basis kode.
- **Hot Reload**: Fitur revolusioner yang memungkinkan Anda melihat perubahan kode secara instan tanpa kehilangan state aplikasi.
- **Widget**: Semua yang ada di Flutter adalah widget, mulai dari tata letak hingga teks dan tombol, menjadikannya sangat fleksibel.
- **Kompatibel Native**: Flutter mengompilasi kode Anda langsung ke kode ARM native (untuk mobile), memastikan performa yang cepat.

---

## Mengapa Belajar Flutter?

🚀 **Sangat Efisien**

- Kembangkan aplikasi untuk berbagai platform sekaligus, menghemat waktu dan sumber daya.
- Fitur **Hot Reload** mempercepat proses pengembangan.

🎨 **UI yang Indah & Fleksibel**

- Kustomisasi UI hingga ke detail terkecil dengan beragam widget bawaan.
- UI yang dibuat dengan Flutter memiliki tampilan dan nuansa (feel) yang sama di semua platform.

💼 **Peluang Karir Tinggi**

- Flutter berkembang pesat dan permintaan developer Flutter terus meningkat.
- Digunakan oleh perusahaan seperti Google, Alibaba, dan BMW.

⚙️ **Didukung Google**

- Flutter didukung penuh oleh Google, menjamin pembaruan dan pengembangan yang berkelanjutan.
- Komunitas yang besar dan ekosistem yang kaya.

---

## Installation Guide

Untuk memulai pengembangan dengan Flutter, Anda harus menginstal Flutter SDK dan dependensinya.

### 📥 Download Flutter SDK

Kunjungi website resmi Flutter: **<a href="https://flutter.dev/docs/get-started/install" target="_blank" rel="noopener noreferrer">flutter.dev/docs/get-started/install</a>**

<tabs>
<tabitem value="windows" label="🪟 Windows">

### Installation di Windows

1. **1. Download Flutter SDK**
   - Kunjungi <a href="https://flutter.dev/docs/get-started/install/windows" target="_blank" rel="noopener noreferrer">flutter.dev/docs/get-started/install/windows</a>
   - Download file `.zip` terbaru.
2. **2. Ekstrak File**
   - Ekstrak file ke lokasi yang mudah diingat, misalnya `C:\src\flutter`.
3. **3. Tambahkan ke PATH**
   - Buka **"Environment Variables"** dari Start Menu.
   - Di bagian **"User variables"**, pilih `Path`, lalu **"Edit..."**.
   - Tambahkan path ke folder `bin` di dalam folder Flutter Anda (contoh: `C:\src\flutter\bin`).
4. **4. Jalankan `flutter doctor`**
   ```cmd
   flutter doctor
   ```

</tabitem>
<tabitem value="macos" label="🍎 macOS">

### Installation di MacOS

1. **1. Download Flutter SDK**
   - Kunjungi <a href="https://docs.flutter.dev/get-started/install/macos" target="_blank" rel="noopener noreferrer">flutter.dev/docs/get-started/install/macos</a>
   - Download file `.zip` terbaru.
2. **2. Ekstrak File**
   - Ekstrak file ke lokasi yang mudah diingat, misalnya `~/development/flutter`.
3. **3. Tambahkan ke PATH**

   - Buka Terminal dan jalankan perintah berikut untuk menambahkan Flutter ke variabel PATH Anda.v.
   - Jika Anda menggunakan shell Zsh (default di macOS Catalina ke atas).

   ```bash
   echo 'export PATH="$PATH:[lokasi_folder_flutter]/bin"' >> ~/.zshrc
   ```

   - Jika Anda menggunakan shell Bash (default di versi lama):.

   ```bash
   echo 'export PATH="$PATH:[lokasi_folder_flutter]/bin"' >> ~/.bash_profile
   ```

   **Notes**: Ganti `[lokasi_folder_flutter]` dengan jalur absolut tempat mengekstrak Flutter SDK.

4. **4. Reopen terminal jalankan `source ~/.zshrc`(Zsh) atau `~/.  bash_profile`(Bash)**

5. **5. Verifikasi Instalasi: Buka terminal baru dan jalankan `flutter doctor` perintah ini akan memeriksa dependensi yang diperlukan seperti Xcode dan Android Studio**

</tabitem>
</tabs>

---

## Getting Started

Setelah menginstall Flutter SDK, Anda dapat mulai membuat program dengan cara:

### 1. Text Editor + Terminal

Gunakan editor seperti Visual Studio Code dengan plugin Flutter dan Dart. Buka terminal di VS Code untuk menjalankan perintah.

### 2. 🆚 IDE (Intergrated Development Environment)

**Rekomendasi IDE untuk Pemula:**

- **- Visual Studio Code**
- **- Android Studio**
- **- Xcode**

---

## Your First Flutter App

Mari kita buat aplikasi Flutter pertama!

### Membuat Project baru

```bash
flutter create my_first_app
```

atau

```bash
flutter create --org com.namaorganisasi my_first_app
```

### Jalankan Aplikasi

Masuk ke dalam direktori project dan jalankan aplikasi

```bash
cd my_first_app
flutter run
```

Flutter akan mengompilasi dan menjalankan aplikasi demo di emulator atau perangkat fisik Anda

---

### Struktur Folder

Struktur folder yang akan dibuat pada Project App Flutter:

```dart
my_first_app/
├── android/                 # Konfigurasi khusus Android
├── ios/                     # Konfigurasi khusus iOS
├── lib/                     # Kode Dart utama aplikasi
│   └── main.dart           # File entry point aplikasi
├── test/                    # File test untuk aplikasi
│   └── widget_test.dart    # Test widget default
├── web/                     # Konfigurasi khusus Web
├── windows/                 # Konfigurasi khusus Windows
├── linux/                   # Konfigurasi khusus Linux
├── macos/                   # Konfigurasi khusus macOS
├── .gitignore              # File yang diabaikan Git
├── .metadata               # Metadata project Flutter
├── analysis_options.yaml   # Konfigurasi analisis kode
├── pubspec.yaml            # Dependensi dan konfigurasi project
├── pubspec.lock            # Lock file untuk dependensi
└── README.md               # Dokumentasi project
```

**Penjelasan Folder Penting:**

- **📁 `lib/`**: Folder utama yang berisi semua kode Dart aplikasi Anda
- **📄 `lib/main.dart`**: File entry point aplikasi, tempat aplikasi dimulai
- **📁 `android/` & `ios/`**: Konfigurasi platform-specific untuk Android dan iOS
- **📄 `pubspec.yaml`**: File konfigurasi yang mendefinisikan dependensi, assets, dan metadata project
- **📁 `test/`**: Folder untuk menulis unit test dan widget test

### Modifikasi kode

Buka file lib/main.dart di IDE Anda. Anda bisa memodifikasi kode untuk mengubah tampilan aplikasi.

```dart
// lib/main.dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Hello Flutter!'),
        ),
        body: const Center(
          child: Text('Selamat datang di dunia Flutter! 🚀'),
        ),
      ),
    );
  }
}
```

Setelah memodifikasi, simpan file dan amati keajaiban Hot Reload! Aplikasi Anda akan diperbarui secara instan