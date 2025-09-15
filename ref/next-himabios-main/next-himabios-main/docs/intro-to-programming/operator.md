---
sidebar_position: 5
---

# Operator

![Mengisi botol air](./../../static/img/pic5.png)

Pada ilustrasi diatas, ada orang sedang mengisi air. Maka air di dalam botol tersebut menjadi **bertambah**. Kalau kita meminum air dari botol tersebut, maka air yang ada di botol tersebut menjadi **berkurang**.

Nah sama seperti ilustrasi diatas, di dalam programming kita dapat melakukan operasi matematika seperti pertambahan, pengurangan, perkalian dan pembagian.

> Operator adalah simbol atau fungsi yang melakukan operasi yang spesifik seperti tambah, kurang, kali, bagi.

Contoh:

```python
isi = 3
minum = 2
isi_botol = 5

# Isi air
isi_botol = isi_botol + isi
print(isi_botol) # Output: 8

# Minum air
isi_botol = isi_botol - minum
print(isi_botol) # Output: 6
```

Operator terbagi menjadi beberapa jenis, yaitu:

1. Operator Aritmatik

   Operator aritmatik adalah operator yang digunakan untuk melakukan operasi matematika seperti tambah, kurang, kali, bagi, dan lain-lain.

   | Operator |  Nama  |              Fungsi               |
   | -------- | :----: | :-------------------------------: |
   | `+`      | Tambah |       Melakukan pertambahan       |
   | `-`      | Kurang |       Melakukan pengurangan       |
   | `*`      |  Kali  |        Melakukan perkalian        |
   | `/`      |  Bagi  |        Melakukan pembagian        |
   | `%`      | Modulo | Melakukan operasi hasil sisa bagi |

2. Operator Relasional

   Operator relasional adalah operator yang digunakan untuk membandingkan dua buah nilai.

   | Operator |          Nama           |                                         Fungsi                                         |
   | -------- | :---------------------: | :------------------------------------------------------------------------------------: |
   | `==`     |       Sama dengan       |                  Membandingkan apakah dua buah nilai sama atau tidak                   |
   | `!=`     |    Tidak sama dengan    |               Membandingkan apakah dua buah nilai tidak sama atau tidak                |
   | `>`      |       Lebih dari        |       Membandingkan apakah nilai pertama lebih besar dari nilai kedua atau tidak       |
   | `<`      |       Kurang dari       |       Membandingkan apakah nilai pertama lebih kecil dari nilai kedua atau tidak       |
   | `>=`     | Lebih dari sama dengan  | Membandingkan apakah nilai pertama lebih besar atau sama dengan nilai kedua atau tidak |
   | `<=`     | Kurang dari sama dengan | Membandingkan apakah nilai pertama lebih kecil atau sama dengan nilai kedua atau tidak |

3. Operator Bitwise

   Operator bitwise adalah operator yang digunakan untuk melakukan operasi pada bit.

   | Operator            |    Nama     |              Fungsi               |
   | ------------------- | :---------: | :-------------------------------: |
   | `&`                 |     AND     |       Melakukan operasi AND       |
   | <code>&vert;</code> |     OR      |       Melakukan operasi OR        |
   | `^`                 |     XOR     |       Melakukan operasi XOR       |
   | `~`                 |     NOT     |       Melakukan operasi NOT       |
   | `<<`                | Left shift  | Melakukan operasi shift left bit  |
   | `>>`                | Right shift | Melakukan operasi shift right bit |

4. Operator Logical

   Operator logical adalah operator yang digunakan untuk melakukan operasi logika.

   | Operator                  | Nama |        Fungsi         |
   | ------------------------- | :--: | :-------------------: |
   | `&&`                      | AND  | Melakukan operasi AND |
   | <code>&vert;&vert;</code> |  OR  | Melakukan operasi OR  |
   | `!`                       | NOT  | Melakukan operasi NOT |

5. Operator Assignemnt

   Operator assignment adalah operator yang digunakan untuk melakukan operasi penugasan.

   | Operator |          Nama          |                        Fungsi                         |
   | -------- | :--------------------: | :---------------------------------------------------: |
   | `=`      |       Assignment       |           Melakukan operasi penugasan nilai           |
   | `+=`     | Assignment dan tambah  |   Melakukan operasi penugasan nilai dan pertambahan   |
   | `-=`     | Assignment dan kurang  |   Melakukan operasi penugasan nilai dan pengurangan   |
   | `*=`     |  Assignment dan kali   |    Melakukan operasi penugasan nilai dan perkalian    |
   | `/=`     |  Assignment dan bagi   |    Melakukan operasi penugasan nilai dan pembagian    |
   | `%=`     | Assignment dan modulus | Melakukan operasi penugasan nilai dan hasil sisa bagi |

6. Operator Increment/Decrement

   Operator increment/decrement adalah operator yang digunakan untuk melakukan operasi penambahan atau pengurangan nilai.

   | Operator | Nama |        Fungsi        |
   | -------- | :--: | :------------------: |
   | `++`     |  ++  | Melakukan operasi ++ |
   | `--`     |  --  | Melakukan operasi -- |
