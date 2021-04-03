---
category: docs
tags:
  - oop
date: 2021-03-17
title: OOP-P4 Tính đa hình và trừu tượng trong OOP
vssue: false
---

Tiếp tục nốt phần còn lại nào các ông ơi :33

<!-- more -->
## Mở đầu
Chào mọi người, Phúc đẹp trai đâyyyy =)).

Hôm nay chúng ta cùng ôn tập về Polymorphism và Abstraction nhé :wink:

## Đôi nét về tính đa hình là gì!!!
Vì phần này cũng hơi khó giải thích, nên mình sẽ cố gắng nói một cách đơn giản và dễ hiểu nhất nhé.
(Ông nào muốn hiểu một cách chi tiết hơn thì có thể [vào đây nha](https://www.geeksforgeeks.org/polymorphism-in-c/))

Đa hình hiểu theo nghĩa đen là nhiều hình dạng :).

->![Shape](https://images2.imgbox.com/d0/a0/VntEiqfU_o.png)<-

Đối tượng Shape không thể vẽ một hình dạng, nó quá
trừu tượng (Thực tế là phương thức Draw () trong Shape
không chứa triển khai).
- Bạn phải xác định một hình dạng cụ thể.
- Để làm điều này, bạn thực hiện phương thức trong từng đối tượng cụ thể.

Cùng xem qua đoạn code sau để hiểu rõ hơn về vấn đề trên.

```cpp
class Shape {
public:
    void Draw() {};
};
class Circle : public Shape {
public:
    void Draw() {
        //Draw a circle
    }
};
class Square : public Shape {
public:
    void Draw() {
        //Draw a square
    }
};
```

Tóm lại, mỗi class có thể phản hồi khác nhau đến cùng một phương thức Draw và vẽ chính nó.

Đây là ý nghĩa của tính đa hình.

**Chú ý**: Nếu một lớp con kế thừa một phương thức trừu tượng từ
một lớp cha, nó phải cung cấp một
thực hiện phương thức đó, hoặc nếu không, nó sẽ
một lớp trừu tượng.

Special thanks to Mr. Truong Tuan Anh (My lecturer of Advanced Programming).

## Đôi nét về tính trừu tượng!!!
**Trừu tượng hóa dữ liệu (Data abstraction)** là một kỹ thuật lập trình mà dựa trên sự phân biệt của Interface và Implementation (trình triển khai).
Nó có nghĩa là bạn có thể ẩn những thông tin không cần thiết và chỉ cung cấp thông tin cần thiết cho người dùng.

Ví dụ: Bạn sử dụng 1 ứng dụng giúp phục hồi ảnh, bạn chỉ cần nhấn *phục hồi* và chờ thành quả, và không cần biết nó được làm thế nào. Đây chính là trừu tượng trong OOP.

### Lợi ích của trừu tượng hóa trong oop
Trừu tượng hóa dữ liệu trong C++ mang lại hai lợi thế quan trọng:

- Phần nội vi hay bên trong lớp được bảo vệ tránh khỏi các lỗi do người dùng vô ý, mà có thể gây hư hỏng trạng thái của dữ liệu.

- Triển khai lớp có thể tiến hành qua thời gian để đáp ứng yêu cầu thay đổi hoặc bug các báo cáo mà không yêu cầu thay đổi trong code của người dùng.

Bằng việc định nghĩa các thành viên dữ liệu chỉ trong khu vực private của lớp, tác giả của lớp có thể tự do tạo các thay đổi trong dữ liệu. Nếu trình triển khai thay đổi, thì chỉ mã hóa lớp là cần kiểm tra để biết khía cạnh nào đem lại thay đổi. Nếu dữ liệu là public, thì khi đó bất kỳ hàm nào mà truy cập một cách trực tiếp tới các thành viên dữ liệu của phép biểu diễn cũ có thể bị phá vỡ.

## Tổng kết
Vậy là chúng ta đã cùng tìm hiểu hết về các đặc trưng của Lập trình hướng đối tượng trong C++.
(2 đặc trưng cuối mình giải thích vẫn còn phèn :( và sai sót. Mong các ông thông cảm nhé).

Rất vui vì đã đồng hành cùng các ông <3.

Hẹn gặp các ông ở những chủ đề tiếp theo.

Love you guys <3.
