---
category: dsa
tags:
  - cont
date: 2021-03-18
title: Seri Containers in C++ STL (New)
vssue: false
---

Cùng triển khai một seri mới nào.

<!-- more -->
## Mở đầu
Chào mọi người, Phúc đẹp zai đây :wink:.

Hôm nay chúng ta cùng đến với 1 seri mới, đó chính là tìm hiểu về các loại Containers
trong C++ STL (Standard Template Library) nhé.

Xuyên suốt seri này, mình sẽ giới thiệu:
- Các loại thông dụng nhất (Theo ý kiến cá nhân của mình).
- Các method của từng loại.
- Cách mình ứng dụng =)).
- Một số bài tập để áp dụng ngay và luôn cho từng loại nhé (Chủ yếu trên Hackerrank, Codeforces hay LeetCode).

Như vậy, sau khi xem xong từng loại thì có thể áp dụng và biết cách nó xài thế nào luôn rồi <3 (Sướng nhất các ông nhé :vv).

## Các loại hình Containers
Mình phân loại dựa theo *Geeksforgeeks* nhé, còn riêng về từng cái thì mình sẽ tự viết theo ý mình. Nên các ông yên tâm, sẽ dễ hiểu lắm =)).
### Sequence containers (Các containers có trình tự)
Containers trình tự thực hiện các cấu trúc dữ liệu có thể được truy cập tuần tự.
- array: Mảng tĩnh.
- vector: Mảng động.
- deque: Double-ended queue.
- forward_list: Singly-linked list.
- list : Doubly-linked list.
### Associative containers (Containers liên kết)
Các Containers liên kết thực hiện các cấu trúc dữ liệu được sắp xếp, có thể được tìm kiếm nhanh chóng (Độ phức tạp O(log n)).
- Set: Tập hợp của các keys *độc nhất*, sắp xếp theo keys.
- Map: Tập hợp của cặp *key-value*, sắp xếp theo keys, keys là *độc nhất*.
- multiset: Tập hợp của các keys, sắp xếp theo keys.
- multimap: Tập hợp của cặp *key-value*, sắp xếp theo keys.

Các loại kể trên còn có dạng đặc biệt của nó, gọi là Unordered associative containers (Mình sẽ không nói sâu về nó).
- unordered_set
- unordered_map
- unordered_multiset
- unordered_multimap
### Container adaptors
Container adaptors cung cấp một giao diện khác cho các vùng chứa tuần tự.
- stack: Cung cấp 1 stack (LIFO data structure).
- queue: Cung cấp 1 queue (FIFO data structure).
- priority_queue: Cung cấp priority queue (Hàng đợi ưu tiên).

## Tạm chốt
Chúng ta đã phân loại các Containers xong rồi :33.

Ở các bài viết tiếp mình sẽ cùng tìm hiểu chi tiết các loại thông dụng nhé :wink:

Love you guys <3.
