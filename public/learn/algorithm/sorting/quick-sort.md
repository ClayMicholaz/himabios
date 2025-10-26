---
sidebar_position: 5
---

# Quick Sort

Quick Sort, juga dikenal sebagai partition-exchange sort, adalah algoritma sorting yang juga menggunakan paradigma Divide and Conquer. Algoritma ini berorientasi pada proses partisi (partitioning).

## Complexity

|  Case   | Time Complexity |
| :-----: | :-------------: |
|  Best   |  $O(n log n)$   |
| Average |  $O(n log n)$   |
|  Worst  |    $O(n^2)$     |

## Penjelasan

1. Pilih Pivot: Pilih satu elemen dari array sebagai pivot. (Pemilihan pivot sangat mempengaruhi performa).

2. Partition (Partisi): Atur ulang array sehingga semua elemen yang lebih kecil dari pivot berada di sebelah kiri, dan semua elemen yang lebih besar berada di sebelah kanan pivot. Setelah partisi, pivot berada pada posisi akhirnya yang terurut.

3. Recursive Sort: Lakukan pemanggilan rekursif Quick Sort pada subarray di sebelah kiri pivot dan subarray di sebelah kanan pivot.

4. Ulangi hingga seluruh array terurut.

Contoh Python

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    # Pilih pivot (di sini menggunakan elemen pertama)
    pivot = arr[0]
    
    # Partisi array
    less = [x for x in arr[1:] if x <= pivot]
    greater = [x for x in arr[1:] if x > pivot]
    
    # Penggabungan hasil rekursif
    return quick_sort(less) + [pivot] + quick_sort(greater)

# Contoh penggunaan
data = [10, 7, 8, 9, 1, 5]
sorted_data = quick_sort(data)
print(f"Data terurut: {sorted_data}")
# Output: Data terurut: [1, 5, 7, 8, 9, 10]
```
