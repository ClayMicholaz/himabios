---
sidebar_position: 7
---

# Control Flow

![Minuman Beralkohol](./../../static/img/pic7.png)

Gambar diatas adalah ilustrasi minuman beralkohol yang hanya dapat dikonsumsi oleh umur 21 tahun keatas. Nah bayangkan jika kamu adalah penjaga kasir di supermarket. Ada seseorang yang ingin membeli salah satu dari minuman diatas. Anda pasti akan menanyakan KTP untuk memastikan batas umur pembeli minuman beralkohol adalah 21 tahun. Bagaimana jika orang tersebut belum berumur 21 tahun, atau baru saja berulang tahun yang ke-21? Disinilah control flow diperlukan.

> Control FLow (Aliran Kontrol) adalah urutan di mana pernyataan dalam sebuah program dieksekusi.

Ada beberapa pernyataan aliran kontrol yang dapat digunakan untuk mengontrol aliran sebuah program.

## Conditional Statement/Pernyataan Kondisional (if/else)

```python
umur_pembeli = 16

if umur_pembeli < 21:
  print("Maaf, Anda belum berumur 21 tahun")
else:
  print("Silahkan, Anda sudah berumur 21 tahun")
```

## Looping/Perulangan (for, while)

Perulangan digunakan untuk mengeksekusi suatu perintah atau blok kode berulang kali selama kondisi tertentu terpenuhi. Hal ini sangat berguna ketika Anda ingin melakukan suatu tugas yang sama pada beberapa data atau melakukan suatu proses yang sama berulang kali.

Perulangan dibagi menjadi 2 kategori, yaitu:

### Predicted loop

> Predicted loop adalah perulangan yang diharapkan untuk dijalankan sampai selesai, dengan jumlah iterasi yang diketahui sebelumnya.

Contoh dari predicted loop adalah perulangan for yang digunakan untuk mengeksekusi suatu perintah untuk setiap item dalam sebuah array atau perulangan while yang digunakan untuk mengeksekusi suatu perintah sampai kondisi tertentu terpenuhi. Pada perulangan predicted loop, kondisi loop diketahui sebelum eksekusi loop dan jumlah iterasi diketahui.

```python
for i in range(5):
    print(i)
```

### Unpredicted loop

> Unpredicted loop adalah perulangan yang tidak diharapkan untuk dijalankan sampai selesai, dengan jumlah iterasi yang tidak diketahui sebelumnya.

Contohnya adalah jika Anda memiliki suatu perulangan yang dijalankan sampai user memberikan input yang benar, Anda tidak tahu berapa kali perulangan akan dijalankan. Pada perulangan unpredicted loop, kondisi loop tidak diketahui sebelum eksekusi loop dan jumlah iterasi tidak diketahui.

```python
password = ""
while password != "password123":
    password = input("Masukkan password: ")
    if password != "password123":
        print("Password salah!")
print("Akses diberikan!")
```

Kode diatas menanyakan input password. Jika password bukan `password123`, maka program akan mengulang terus untuk menginput password.

## Function dan Subroutines

Sama seperti matematika, dalam programming kita juga memiliki fungsi yang digunakan untuk menyelesaikan suatu permasalahan atau untuk membuat kode program lebih terstruktur dan mudah dikelola. Seperti yang dijelaskan sebelumnya, function dalam programming adalah sebuah blok kode yang dapat digunakan secara terpisah dalam program yang dapat menerima input (parameter) dan mengembalikan output (return value).

Contohnya, jika kita memiliki fungsi matematika f(x) = x + 4, dalam programming kita dapat menerjemahkannya menjadi sebuah function yang dapat menerima input x dan mengembalikan output x + 4.

```python
def add_four(x):
    return x + 4

result = add_four(3)
print(result) # Output: 7
```
