---
category: dsa
tags:
  - cont
date: 2021-05-12
title: Pair trong ngôn ngữ C++
vssue: false
---

Cùng tìm hiểu về pair trong C++ STL nhé.

<!-- more -->
## Mở đầu
Chào mọi người, mình quay trở lại rồi đây =))).

Hôm nay chúng ta cùng đến với 1 loại container cũng không kém phần phổ biến so với vector,
đó là **pair** nhé :wink:

## Tổng quát
### Pair là gì???
Đúng như cái tên của nó "pair" có nghĩa là 1 cặp =)). Mà ở đây 1 cặp có thể là 2
phần tử cùng loại hoặc khác loại.

**Syntax:**

```cpp
pair <type1, type2> pair_name;
```
**Cách truy cập phần tử của pair:**
```cpp
//First element
cout << pair_name.first;
//Second element
cout<< pair_name.Second;
```
### Cách sử dụng
Tiếp đến là ví dụ một số cách khai báo pair:
```cpp
// Pair of same type
pair<int, int> p1(1, 10);

// Pair of two types, có thể sử dụng hàm make_pair
pair<string, int> p2 = make_pair("Phuc", 20 ); //

// Pair in pair =))
pair<string, pair<int, int>> p3 = { "Depzai", {19,05} };

```

Pair có thể được gán, copy và so sánh. Mảng các phần tử trong **map** hoặc
**hash_map** (Chúng ta sẽ đến với *map* ở bài viết sau :heart_eyes:), thực chất chính là mảng các pair
mà tất cả các phần tử "first" là các khóa duy nhất được liên kết với các "second" của chúng.

### Ứng dụng
Pair có thể sử dụng trong rất nhiều trường hợp khác nhau hoặc sử dụng trong việc giải các
bài toán lập trình :wink:.

<details>
<summary>Ví dụ 1:</summary>
<p>

```cpp
// Kết hợp vector và pair
// Ta sẽ tạo 1 vector để lưu các giá trị:
// Tên + Tuổi + Chiều cao
vector < pair<string, pair<int, string>>> myPair;
myPair.push_back({ "Phuc",{20,"170"} });
myPair.push_back({ "Phuc be",{10,"140"} });
myPair.push_back({ "Phuc baby",{5,"90"} });

for (int i = 0; i < myPair.size(); i++) {
    cout << "Name: " << myPair[i].first << ", Age: " << myPair[i].second.first
        << ", Height: " << myPair[i].second.second << endl;
}
```
Output:
```cpp
Name: Phuc, Age: 20, Height: 170
Name: Phuc be, Age: 10, Height: 140
Name: Phuc baby, Age: 5, Height: 90
```
Chúng ta cũng có thể sắp xếp lại vector trên dựa theo tuổi :heart_eyes:.
```cpp
for (int i = 0; i < myPair.size(); i++) {
    for (int j = i + 1; j < myPair.size(); j++) {
        if (myPair[j].second.first < myPair[i].second.first) {
            //Use swap() function
            swap(myPair[j], myPair[i]);
        }
    }
}

for (int i = 0; i < myPair.size(); i++) {
    cout << "Name: " << myPair[i].first << ", Age: " << myPair[i].second.first
        << ", Height: " << myPair[i].second.second << endl;
}

Output:
Name: Phuc baby, Age: 5, Height: 90
Name: Phuc be, Age: 10, Height: 140
Name: Phuc, Age: 20, Height: 170
```

</p>
</details>  


<details>
<summary>Ví dụ 2:</summary>
<p>

Cho danh sách các sản phẩm theo cú pháp: Name + Price, nhập danh sách từ bàn phím
và in ra theo thứ tự giá tăng dần =)) (Đề này mình tùy ý cho thôi, thật ra có
1 bài trên **Hackerrank** khai thác triệt để thế mạnh của pair, nhưng mình làm lâu quá
quên mất link rồi :disappointed_relieved:).

```cpp
int num;
cout << "Enter number of products: "; cin >> num;
vector<pair<string, int>> p;
for (int i = 0; i < num; i++) {
    string tmp; int price;
    cout << "Product " << i + 1 << endl;
    cout << "Name "; cin >> tmp;
    cout << "Price ";cin >> price;
    pair<string, int> mp;
    mp = make_pair(tmp, price);
    p.push_back(mp);
}
for (int i = 0; i < num; i++) {
    for (int j = i + 1; j < num; j++) {
        if (p[j].second < p[i].second) {
            swap(p[j], p[i]);
        }
    }
}
// Tới đây thì các bạn in ra thôi =)) tự thực hành đi nào.
```

</p>
</details>  


## Chốt lại
Đó là một vài kiến thức cơ bản về pair mà các bạn cần biết :wink:, nó sẽ rất hữu
ích khi học về *map* đó nhé =))

Hẹn gặp lại ở các bài viết tiếp theo về **map** (Rất rất hữu ích).

Love you guys <3.
