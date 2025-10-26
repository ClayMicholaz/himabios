---
sidebar_position: 7
---

# Heap Sort

Heap Sort adalah algoritma sorting berbasis perbandingan yang memanfaatkan struktur data Heap Biner (Binary Heap), biasanya Max-Heap. Algoritma ini pertama membangun heap dari data input, kemudian berulang kali mengekstrak elemen terbesar (akar heap) dan menyusun ulang (rebalance) heap yang tersisa hingga seluruh array terurut.

## Complexity

|  Case   | Time Complexity |
| :-----: | :-------------: |
|  Best   |  $O(n log n)$   |
| Average |  $O(n log n)$   |
|  Worst  |  $O(n log n)$   |

## Penjelasan

1. Build Max-Heap: Susun array input menjadi Max-Heap, di mana nilai setiap parent node lebih besar dari nilai child nodenya.

2. Sort: Tukar elemen pertama (root, elemen terbesar) dengan elemen terakhir dari heap yang belum terurut.

3. Heapify: Kecilkan ukuran heap sebanyak satu, lalu perbaiki (heapify) heap yang tersisa untuk mengembalikan sifat Max-Heap.

4. Ulangi langkah 2 dan 3 sampai semua elemen berada di posisi terurut.

Contoh Python

```python
import heapq

def heap_sort(iterable):
    """
    Mengurutkan list menggunakan Python's heapq (min-heap secara default).
    Untuk mendapatkan urutan menaik (ascending).
    """
    h = []
    # Membangun min-heap
    for value in iterable:
        heapq.heappush(h, value)

    # Mengambil elemen terkecil secara berulang
    return [heapq.heappop(h) for _ in range(len(h))]

# Contoh penggunaan
data = [12, 11, 13, 5, 6, 7]
sorted_data = heap_sort(data)
print(f"Data terurut: {sorted_data}")
# Output: Data terurut: [5, 6, 7, 11, 12, 13]
```

