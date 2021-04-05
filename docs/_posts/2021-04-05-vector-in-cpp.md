---
category: dsa
tags:
  - cont
date: 2021-04-05
title: Vector trong ngôn ngữ C++
vssue: false
---
Hôm nay chúng ta cùng tìm hiểu về Vector nhé.

<!-- more -->
## Mở đầu
Chào các ông nhé, Phúc đẹp zai đây =))).

Hôm nay ta sẽ đến với 1 loại container mà tôi đảm bảo 70% các bài tập lập trình
sẽ sử dụng đến :heart_eyes: (Theo kinh nghiệm của mình thôi =))). Đó chính là **vector**.

## Tổng quát
### Vector là gì?
Vector giống như một mảng động vậy, là một dãy các phần tử được lưu trữ kế tiếp nhau.

Hãy thử nghĩ tới việc bạn cần tạo 1 mảng mà không biết trước số lượng của nó, truy cập
dễ dàng tới từng phần tử, thêm 1 phần tử vào mảng một cách nhanh gọn.

*=>vector chính là lựa chọn hàng đầu cho chúng ta.*
### Ưu điểm so với mảng động
Vậy tại sao không dùng dynamic array mà lại dùng vector? Học chi nhiều thứ cho khổ vậy??

Đương nhiên là phải có lý do thì người ta mới tạo ra vector rồi :wink:

1. *Dễ dàng thay đổi số lượng phân tử của mảng.*
```cpp
//Giả sử chúng ta cần tạo mảng gồm N phần tử nhập từ bàn phím.
int N; cin >> N;
int* arr = new int[N];    //Dynamic array

vector<int> myVector(N); //vector
```
Nhưng khi muốn thêm phần tử thứ *N+1* vào mảng thì:
- Đối với mảng, chúng ta cần tạo 1 mảng động khác gồm *N+1* phần tử và gán lại cho mảng *arr*
- Đối với Vector, chúng ta chỉ cần dùng câu lệnh đơn giản.
```cpp
myVector.push_back(m); //m là phần tử cần thêm vào
```
2. Sau khi sử dụng xong, *vector không cần phải delete thủ công* như mảng động, quá khỏe nhỉ =)).
```cpp
delete[] arr; //Xóa mảng động để tránh dữ liệu rác
```

3. *Vector cung cấp rất nhiều hàm* giúp cho việc lập trình dễ dàng hơn như: sắp xếp, đảo vector,
tìm size,... và nhiều nhiều nữa sẽ có ở mục sau.
## Một số hàm thông dụng
Để sử dụng vector, trước hết chúng ta phải thêm thư viện **vector** vào đã.
```cpp
#include <vector>
```
- Cách khai báo:
```cpp
vector<type> name;
vector<type> name(Size);
```
- Hàm trả về size: *vec.size()*
- Khởi tạo vector A = vector B:
```cpp
vector<type> A(B);
```
Chúng ta sẽ lấy về dụ về vector tên là **vec** nhé.

- Thêm phần tử:
```cpp
vec.push_back(m);    //Thêm m vào cuối vector
vec.insert(pos, m);  //Chèn m vào vị trí pos
```
- Xóa phần tử:
```cpp
vec.pop_back();    //Xóa phần tử cuối
vec.erase(pos);    //Xóa phần tử ở vị trí pos
vec.clear();       //Xóa tất cả phần tử
```
- Sắp xếp vector:
```cpp
sort(vec.begin(), vec.end());     //Sắp xếp theo chiều tăng dần
sort(vecc.rbegin(), vec.rend());  //Sắp theo chiều giảm dần
```
- Đảo ngược vector:
```cpp
//Vector A: 9 8 7 6 5 4 3 2 1
reverse(vec.begin(), vec.end());
//Vector A: 1 2 3 4 5 6 7 8 9
```
## Chốt lại
Đó là tất cả những kiến thức cơ bản về vector :wink:, các bạn nên luyện tập nhiều hơn để quen với vector nhé.

Hẹn gặp lại ở các bài viết tiếp theo.

Love you guys <3.
