---
sidebar_position: 13
---

# Code Formatting

> Code formatting adalah proses mengatur tampilan code agar lebih mudah dibaca dan dipahami.

Hal ini termasuk penempatan spasi, tab, baris baru, dan karakter khusus yang digunakan dalam kode.

Beberapa contoh dari code formatting yang umum digunakan dalam pemrograman:

1. **Indentation**: menggunakan spasi atau tab untuk mengidentifikasi struktur kode seperti blok if, while, dll.
2. **White space**: menggunakan spasi untuk memisahkan elemen-elemen kode seperti operator, kurung kurawal, dll.
3. **Line breaks**: menggunakan baris baru untuk memisahkan elemen-elemen kode seperti perintah, variabel, dll.
4. **Comments**: menggunakan komentar untuk menjelaskan bagian-bagian dari kode yang mungkin sulit dipahami.

Code formatting membantu dalam pemeliharaan kode dan membuat kode lebih mudah dibaca dan dipahami oleh pengembang lain yang mungkin akan bekerja pada kode tersebut. Beberapa bahasa pemrograman memiliki tool atau library untuk memformat kode secara otomatis sesuai dengan konvensi yang ditetapkan.

Beberapa tools code formatter yaitu:

1. Prettier
2. Black
3. Clang-Format
4. gofmt
5. YAPF

Dan masih banyak lagi.

Contoh perbandingan tanpa menggunakan code formatter vs menggunakan code formatter.

**Tanpa Code Formatter**

```python
def add(a:int,b:int)-> int:
    return a+b
```

**Dengan Code Formatter**

```python
def add(a: int, b: int) -> int:
    return a + b
```

Kesimpulannya, dengan menggunakan code formatter, penulisan code menjadi lebih rapih, mudah dibaca, dan menjadi lebih estetik. Kebanyakan programmer pemula tidak menggunakan code formatter. Hal inilah yang menjadikan kekurangan yang paling sering terjadi kepada programmer pemula.
