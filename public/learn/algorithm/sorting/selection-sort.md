---
sidebar_position: 4
---

# Selection Sort

Selection Sort adalah algoritma sorting berbasis perbandingan yang sederhana. Algoritma ini membagi list menjadi dua bagian: sublist yang sudah terurut dan sublist yang belum terurut.

## Complexity

|  Case   | Time Complexity |
| :-----: | :-------------: |
|  Best   |    $O(n^2)$     |
| Average |    $O(n^2)$     |
|  Worst  |    $O(n^2)$     |

## Penjelasan

1. Iterasi dari elemen pertama hingga elemen terakhir.

2. Pada setiap iterasi, cari elemen terkecil dalam sublist yang belum terurut.

3. Tukar (swap) elemen terkecil tersebut dengan elemen pertama dari sublist yang belum terurut (elemen pada posisi iterasi saat ini).

4. Proses ini secara bertahap memindahkan batas antara sublist yang terurut dan yang belum terurut satu posisi ke kanan.

Contoh Python

```python
def selection_sort(array):
    n = len(array)
    for i in range(n):
        # Asumsi elemen saat ini adalah yang terkecil
        min_index = i 
        
        # Cari elemen terkecil di sublist array[i..n-1]
        for j in range(i + 1, n):
            if array[j] < array[min_index]:
                min_index = j
                
        # Tukar elemen terkecil yang ditemukan dengan elemen di posisi i
        # (array[i], array[min_index]) = (array[min_index], array[i]) # Cara Pythonic
        temp = array[i]
        array[i] = array[min_index]
        array[min_index] = temp

    return array

# Contoh penggunaan
data = [64, 25, 12, 22, 11]
sorted_data = selection_sort(data)
print(f"Data terurut: {sorted_data}")
# Output: Data terurut: [11, 12, 22, 25, 64]
```
