---
sidebar_position: 2
title: "Setup Android Environment"
description: "Panduan lengkap setup Android Studio dan AVD untuk debugging Flutter"
---

# Setup Android Environment untuk Flutter

Setelah Anda menginstal Flutter SDK, langkah selanjutnya adalah menyiapkan Android Studio. Panduan ini akan memandu Anda menginstal Android Studio, mengatur Environment Variables yang diperlukan, dan membuat Android Virtual Device (AVD) agar Anda bisa menjalankan dan men-debug aplikasi Flutter.

## 📚 Table of Contents

<div class="toc-container">

1.  **[1. Instalasi Android Studio](#1-instalasi-android-studio)**
2.  **[2. Konfigurasi Plugin Flutter & Dart](#2-konfigurasi-plugin-flutter--dart)**
3.  **[3. Setup Android SDK & Environment Variables](#3-setup-android-sdk--environment-variables)**
    - 🪟 [3.1. Konfigurasi Windows](#konfigurasi-di-windows)
    - 🍎 [3.2. Konfigurasi macOS](#konfigurasi-di-macos)
4.  **[4. Membuat Android Virtual Device (AVD)](#4-membuat-android-virtual-device-avd)**
5.  **[5. Verifikasi & Debugging](#5-verifikasi--debugging)**

</div>

---

## 1. Instalasi Android Studio

Android Studio adalah IDE resmi untuk pengembangan Android dan sangat penting untuk alur kerja Flutter, bahkan jika Anda menggunakan VS Code sebagai editor utama.

1.  **Download Android Studio**: Kunjungi situs resmi Android Developer: **<a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer">developer.android.com/studio</a>**.
2.  **Jalankan Installer**: Ikuti instruksi instalasi. Saat di "Setup Wizard", pastikan Anda memilih komponen berikut untuk diinstal:
    * Android Studio (Wajib)
    * Android SDK (Wajib)
    * Android Virtual Device (Direkomendasikan)
3.  **Selesaikan Instalasi**: Buka Android Studio setelah instalasi selesai. Biarkan ia men-download dan menginstal komponen SDK tambahan yang mungkin diperlukan pada peluncuran pertama.

---

## 2. Konfigurasi Plugin Flutter & Dart

Agar Android Studio dapat mengenali dan membangun project Flutter, Anda perlu menginstal plugin Flutter dan Dart.

1.  Buka Android Studio.
2.  Dari halaman selamat datang, pilih **"Plugins"** dari menu di sebelah kiri.
3.  Cari **"Flutter"** di Marketplace.
4.  Klik **"Install"**. Plugin ini juga akan otomatis menginstal plugin **"Dart"** sebagai dependensi.
5.  Setelah instalasi selesai, restart Android Studio.

---

## 3. Setup Android SDK & Environment Variables

Agar perintah `flutter` dan `adb` (Android Debug Bridge) dapat diakses dari terminal, Anda harus mengatur beberapa environment variables.

### 🎯 Menemukan Lokasi Android SDK

Pertama, temukan di mana Android Studio menginstal SDK.
1.  Buka Android Studio.
2.  Pergi ke **"Settings/Preferences"** (File > Settings di Windows, atau Android Studio > Preferences di macOS).
3.  Navigasi ke **"Appearance & Behavior" > "System Settings" > "Android SDK"**.
4.  Lihat di bagian atas, ada **"Android SDK Location"**. Salin path (lokasi) ini.
    * Contoh di Windows: `C:\Users\[NamaUser]\AppData\Local\Android\Sdk`
    * Contoh di macOS: `/Users/[NamaUser]/Library/Android/sdk`

<tabs>
<tabitem value="windows" label="🪟 Konfigurasi di Windows">

### Konfigurasi di Windows

1.  **Buka Environment Variables**: Tekan tombol Windows, ketik "environment variables", dan pilih **"Edit the system environment variables"**.
2.  **Buat `ANDROID_HOME`**:
    * Di jendela System Properties, klik **"Environment Variables..."**.
    * Di bawah "System variables", klik **"New..."**.
    * Variable name: `ANDROID_HOME`
    * Variable value: Masukkan path Android SDK yang Anda salin tadi (mis: `C:\Users\User\AppData\Local\Android\Sdk`).
3.  **Tambahkan ke `Path`**:
    * Di "System variables", cari dan pilih `Path`, lalu klik **"Edit..."**.
    * Klik **"New"** dan tambahkan tiga path baru ini, satu per satu:
        1.  `%ANDROID_HOME%\platform-tools`
        2.  `%ANDROID_HOME%\tools`
        3.  `%ANDROID_HOME%\emulator`
4.  **Simpan & Tutup**: Klik "OK" di semua jendela. **Penting:** Tutup dan buka kembali terminal (CMD atau PowerShell) Anda agar perubahan terdeteksi.

</tabitem>
<tabitem value="macos" label="🍎 Konfigurasi di macOS">

### Konfigurasi di macOS

1.  **Buka Terminal**.
2.  **Edit file profile shell Anda**. (Sama seperti di referensi instalasi Flutter)
    * Jika Anda menggunakan Zsh (default): `nano ~/.zshrc`
    * Jika Anda menggunakan Bash: `nano ~/.bash_profile`
3.  **Tambahkan Path**: Tambahkan baris-baris berikut di akhir file. Ganti `[lokasi_sdk_anda]` dengan path Android SDK yang Anda salin.

    ```bash
    export ANDROID_HOME="[lokasi_sdk_anda]"
    export PATH="$PATH:$ANDROID_HOME/platform-tools"
    export PATH="$PATH:$ANDROID_HOME/tools"
    export PATH="$PATH:$ANDROID_HOME/emulator"
    ```
    *Contoh:*
    ```bash
    export ANDROID_HOME="/Users/MyUser/Library/Android/sdk"
    export PATH="$PATH:$ANDROID_HOME/platform-tools"
    export PATH="$PATH:$ANDROID_HOME/tools"
    export PATH="$PATH:$ANDROID_HOME/emulator"
    ```

4.  **Simpan & Terapkan**:
    * Tekan `Ctrl+O` lalu `Enter` untuk menyimpan.
    * Tekan `Ctrl+X` untuk keluar.
    * Terapkan perubahan: `source ~/.zshrc` (atau `source ~/.bash_profile`).

</tabitem>
</tabs>

---

## 4. Membuat Android Virtual Device (AVD)

AVD (Emulator) memungkinkan Anda menjalankan aplikasi Android di komputer Anda seolah-olah itu adalah perangkat fisik.

1.  Buka Android Studio.
2.  Dari halaman selamat datang, pilih **"More Actions" > "Virtual Device Manager"**.
    * (Atau jika project terbuka, klik ikon AVD Manager di toolbar atas, biasanya berbentuk ponsel dengan logo Android).
3.  Klik **"Create Device"**.
4.  **Pilih Hardware**: Pilih model ponsel, misalnya **"Pixel 7 Pro"** (direkomendasikan). Klik **"Next"**.
5.  **Pilih System Image**:
    * Pilih versi Android yang direkomendasikan (misalnya, Tiramisu atau Upside Down Cake).
    * Jika gambar belum di-download, klik ikon **"Download"** di sebelahnya dan tunggu hingga selesai.
    * Setelah selesai, pilih gambar tersebut dan klik **"Next"**.
6.  **Konfigurasi Akhir**: Anda dapat memberi nama AVD Anda. Untuk performa terbaik, di bagian "Emulated Performance" > "Graphics", pastikan terpilih **"Hardware - GLES 2.0"**.
7.  Klik **"Finish"**.

AVD Anda sekarang akan muncul di daftar. Anda dapat mengklik ikon **"Play" (Mulai)** untuk menjalankannya kapan saja.

---

## 5. Verifikasi & Debugging

Sekarang, mari kita pastikan Flutter dapat melihat setup Android Anda dan menjalankan aplikasi.

### 1. Jalankan `flutter doctor`

Buka terminal baru (setelah mengatur Environment Variables) dan jalankan:
```bash
flutter doctor