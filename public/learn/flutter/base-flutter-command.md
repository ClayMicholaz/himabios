---
sidebar_position: 4
title: "Base Flutter Command"
description: "Perintah dasar dengan Flutter di Terminal"
---

### Perintah - Perintah dasar Flutter

## 1. Membuat proyek Flutter

```bash
flutter create --org com.namapackage namaproyek
```

contoh:

```bash
flutter create --org com.himabios himabios
```

## 2. Instalasi Package

Masuk kedalam folder proyek lalu buka dengan terminal.

```bash
flutter pub add namapackage
```

contoh:

```bash
flutter pub add device_preview
```

## 3. Upgrade versi Flutter

```bash
flutter upgrade
```

## 4. Cek Device apa saja yang tersedia

```bash
flutter devices
```

## 5. Build proyek
Note:
ketika ingin build contoh APK harus sudah menginstall Requirements seperti Android Studio, SDK, dan JDK.

```bash
Flutter build apk --split-per-abi
```

