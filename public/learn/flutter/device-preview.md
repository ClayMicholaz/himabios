---
sidebar_position: 3
title: "Device Preview"
description: "Shortcut jika tidak menggunakan Android Virtual Device"
---

### Shortcut selain menggunakan Virtual Device

Jika anda tidak terlalu memerlukan debugging yang membutuhkan fungsi native di Device Android, bisa menggunakan package Device_Preview untuk mempercepat debugging.

## 📚 Table of Contents

<div class="toc-container">

1.  **[1. Instalasi Package Device Preview](#1-instalasi-device-preview)**
2.  **[2. Konfigurasi void Main](#2-konfigurasi-plugin-flutter--dart)**
3.  **[3. Debuging sebagai Website](#3-setup-android-sdk--environment-variables)**

</div>

## 1. Instalasi Package Device Preview

Device Preview adalah package yang dimana ketika debugging ke website namun dapat debugging selayaknya menggunakan emulator hanya saja tidak dapat menjalankan fungsi yang ada di Android Native.

1. **Download Package Device Preview**: Kunjungi situs PubDev: **<a href="https://pub.dev/packages/device_preview" target="_blank" rel="noopener noreferrer">device_preview</a>**.
2. **Jalankan Perintah ini di terminal proyek**:

```bash
flutter pub add device_preview
```

lalu akan muncul output berikut:

```bash
Resolving dependencies...
Downloading packages... (1.0s)
  characters 1.4.0 (1.4.1 available)
  flutter_lints 5.0.0 (6.0.0 available)
  lints 5.1.1 (6.0.0 available)
  material_color_utilities 0.11.1 (0.13.0 available)
  meta 1.16.0 (1.17.0 available)
  shared_preferences_android 2.4.13 (2.4.15 available)
  shared_preferences_foundation 2.5.4 (2.5.5 available)
  test_api 0.7.6 (0.7.7 available)
Got dependencies!
8 packages have newer versions incompatible with dependency constraints.
Try `flutter pub outdated` for more information.
```

## 2. Konfigurasi void Main

Untuk dapat menggunakan Device Preview saat menjalankan ke website, Anda perlu menginisialisasi komponen Device Preview pada void Main.

1. Buka script main.dart anda di folder /lib
2. Cari void main

```bash
void main() => runApp(MyApp());
```

3. Ubah void main menjadi berikut

```bash
void main() => runApp(
  DevicePreview(
    enabled: true,
    builder: (context) => MyApp(),
  ),
);
```

## 3. Debuging sebagai Website

setelah menginisialisasi Device_Preview di void main, sekarang lakukan debugging ke website dengan mengganti devicenya menjadi Chrome atau Edge (atau browser lainnya di Desktop anda).

![Device Select](/learn/flutter/select_device.png)

lalu tekan F5 di keyboard anda, dan berikut hasil akhirnya

![Chrome Device Preview](/learn/flutter/chrome_device_preview.png)
