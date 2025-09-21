---
sidebar_position: 1
title: "Introduction to Python"
description: "Complete guide to getting started with Python programming"
---

# 🐍 Introduction to Python

Python adalah bahasa pemrograman yang sangat populer dan mudah dipelajari. Bahasa ini dibuat oleh Guido van Rossum pada tahun 1991 dan menjadi salah satu bahasa pemrograman yang paling banyak digunakan di dunia.

## 📚 Table of Contents

<div class="toc-container">

1. **[1. Apa itu Python?](#apa-itu-python)**
2. **[2. Mengapa Belajar Python?](#mengapa-belajar-python)**
3. **[3. Installation Guide](#installation-guide)**
   - 🪟 [3.1. Windows](#windows)
   - 🍎 [3.2. macOS](#macos)
4. **[4. Getting Started](#getting-started)**
5. **[5. Your First Python Program](#your-first-python-program)**

</div>

---

## Apa itu Python?

Python adalah bahasa pemrograman tingkat tinggi yang:

- **Mudah dibaca**: Sintaks yang sederhana dan mirip bahasa Inggris
- **Versatile**: Dapat digunakan untuk web development, data science, AI, automation, dan lainnya
- **Cross-platform**: Berjalan di Windows, macOS, Linux, dan sistem operasi lainnya
- **Open Source**: Gratis dan memiliki komunitas yang besar

## Mengapa Belajar Python?

🚀 **Mudah Dipelajari**

- Sintaks yang sederhana dan intuitif
- Perfect untuk pemula

📊 **Sangat Populer**

- Bahasa #1 untuk data science dan machine learning
- Digunakan oleh perusahaan besar seperti Google, Netflix, Instagram

💼 **Peluang Karir Tinggi**

- High demand di job market
- Salary yang kompetitif

🛠️ **Banyak Library**

- Ecosystem yang kaya dengan ribuan library
- Dapat melakukan hampir semua hal

---

## Installation Guide

Untuk memulai programming dengan Python, Anda perlu menginstall Python di komputer Anda terlebih dahulu.

### 📥 Download Python

Kunjungi website resmi Python: **<a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">python.org/downloads</a>**

<tabs>
<tabitem value="windows" label="🪟 Windows">

### Installation di Windows

1. **1. Download Python**
   - Kunjungi <a href="https://www.python.org/downloads/windows/" target="_blank" rel="noopener noreferrer">python.org/downloads/windows</a>
   - Download versi terbaru (Python 3.11+)
2. **2. Run Installer**
   - Jalankan file `.exe` yang telah didownload
   - ✅ **PENTING**: Centang "Add Python to PATH"
3. **3. Verify Installation**
   ```cmd
   python --version
   ```
4. **4. Install Package Manager (pip)**
   ```cmd
   python -m pip install --upgrade pip
   ```

</tabitem>
<tabitem value="macos" label="🍎 macOS">

### Installation di macOS

1. **1. Download Python**
   - Kunjungi <a href="https://www.python.org/downloads/macos/" target="_blank" rel="noopener noreferrer">python.org/downloads/macos</a>
   - Download versi terbaru (Python 3.11+)
2. **2. Install via Installer**
   ```bash
   # Jalankan file .pkg yang didownload
   # Ikuti installation wizard
   ```
3. **3. Alternative: Install via Homebrew**

   ```bash
   # Install Homebrew terlebih dahulu
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

   # Install Python
   brew install python
   ```

4. **4. Verify Installation**
   ```bash
   python3 --version
   pip3 --version
   ```

</tabitem>
</tabs>

---

## Getting Started

Setelah menginstall Python, Anda bisa mulai coding dengan beberapa cara:

### 1. 💻 Python Interactive Shell (REPL)

```bash
# Buka terminal/command prompt, kemudian ketik:
python
```

Anda akan melihat prompt seperti ini:

```python
>>>
```

### 2. 📝 Text Editor + Terminal

Buat file dengan ekstensi `.py`, misalnya `hello.py`:

```python
print("Hello, World!")
```

Jalankan dengan:

```bash
python hello.py
```

### 3. 🆚 IDE (Integrated Development Environment)

**Rekomendasi IDE untuk Pemula:**

- **- IDLE** (built-in dengan Python)
- **- PyCharm Community** (gratis)
- **- Visual Studio Code** (gratis, dengan Python extension)

---

## Your First Python Program

Mari kita buat program Python pertama Anda!

### Hello World Program

```python
# File: hello.py
print("Hello, World!")
print("Selamat datang di dunia Python! 🐍")
```

**Output:**

```python
Hello, World!
Selamat datang di dunia Python! 🐍
```

### Interactive Program

```python
# File: greeting.py
name = input("Siapa nama Anda? ")
age = input("Berapa umur Anda? ")

print(f"Halo {name}!")
print(f"Anda berumur {age} tahun.")
print("Selamat belajar Python! 🚀")
```

**Contoh Output:**

```python
Siapa nama Anda? Andreas
Berapa umur Anda? 20
Halo Andreas!
Anda berumur 20 tahun.
Selamat belajar Python! 🚀
```

### Simple Calculator

```python
# File: calculator.py
print("=== Simple Calculator ===")

num1 = float(input("Masukkan angka pertama: "))
operator = input("Masukkan operator (+, -, *, /): ")
num2 = float(input("Masukkan angka kedua: "))

if operator == "+":
    result = num1 + num2
elif operator == "-":
    result = num1 - num2
elif operator == "*":
    result = num1 * num2
elif operator == "/":
    if num2 != 0:
        result = num1 / num2
    else:
        result = "Error: Division by zero!"
else:
    result = "Error: Invalid operator!"

print(f"Hasil: {result}")
```

---

## 🎯 What's Next?

Setelah menginstall Python dan mencoba program pertama, Anda bisa melanjutkan ke:

1. **[Python Data Types](./data-type.md)** - Pelajari tipe data di Python
2. **[Variables & Operators](./arithmetic-operator.md)** - Cara menggunakan variabel dan operator
3. **[Control Flow](../intro-to-programming/control-flow.md)** - If statements, loops, dan lainnya

## 🔗 Useful Links

- **Official Python Documentation**: <a href="https://docs.python.org/" target="_blank" rel="noopener noreferrer">docs.python.org</a>
- **Python Package Index (PyPI)**: <a href="https://pypi.org/" target="_blank" rel="noopener noreferrer">pypi.org</a>
- **Python Community**: <a href="https://www.python.org/community/" target="_blank" rel="noopener noreferrer">python.org/community</a>
- **Learn Python**: <a href="https://www.python.org/about/gettingstarted/" target="_blank" rel="noopener noreferrer">python.org/about/gettingstarted</a>

---

**Happy Coding! 🚀**

_Selamat datang di journey programming dengan Python. Ingat, setiap expert pernah menjadi beginner. Keep learning and keep coding!_
