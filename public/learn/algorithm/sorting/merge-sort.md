---
sidebar_position: 6
---

# Merge Sort

Merge Sort adalah algoritma sorting yang mengikuti paradigma Divide and Conquer. Algoritma ini membagi list menjadi sub-masalah yang lebih kecil hingga trivial (list dengan satu elemen), kemudian menggabungkan (merge) kembali sub-masalah tersebut secara terurut.

## Complexity

|  Case   | Time Complexity |
| :-----: | :-------------: |
|  Best   |  $O(n log n)$   |
| Average |  $O(n log n)$   |
|  Worst  |  $O(n log n)$   |

## Penjelasan

1. Divide (Pecah): Bagi array menjadi dua bagian (kiri dan kanan) secara rekursif hingga setiap sublist hanya berisi satu elemen.

2. Conquer (Atasi): Sublist dengan satu elemen dianggap sudah terurut (kasus dasar).

3. Combine/Merge (Gabungkan): Gabungkan dua sublist yang sudah terurut menjadi satu list terurut yang lebih besar. Proses penggabungan ini membandingkan elemen-elemen dari kedua sublist dan menempatkannya ke array hasil secara berurutan.

Contoh Python

```python
def merge_sort(arr):
    # Kasus dasar: list dengan 0 atau 1 elemen sudah terurut
    if len(arr) <= 1:
        return arr

    # 1. Divide (Pecah)
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])  # Rekursif untuk sisi kiri
    right = merge_sort(arr[mid:]) # Rekursif untuk sisi kanan

    # 3. Combine/Merge (Gabungkan)
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    # Bandingkan dan gabungkan elemen dari kedua list
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    # Tambahkan sisa elemen (jika ada)
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Contoh penggunaan
data = [38, 27, 43, 3, 9, 82, 10]
sorted_data = merge_sort(data)
print(f"Data terurut: {sorted_data}")
# Output: Data terurut: [3, 9, 10, 27, 38, 43, 82]
```
