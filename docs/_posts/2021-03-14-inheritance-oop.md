---
category: docs
tags:
  - oop
date: 2021-03-14
title: OOP-P3 Tính kế thừa trong Lập trình hướng đối tượng
vssue: false
---

Chúng ta cùng tiếp tục với phần 3 của seri OOP nào =))

<!-- more -->
## Mở đầu
Chào mọi người, lại là mình - Phúc đây =)).

Mặc dù hôm nay là Valentine Trắng (14/3), nhưng vì niềm đam mê viết Blog mà mình
đã ở nhà cả ngày để cùng ôn tập kiến thức với mọi người đó :).

(Đùa chứ, thật ra là vì tôi không có người iu các ông ạ :( buồn lắm chứ, nhưng cuộc sống mà =)) chịu thôi).

Hôm nay mình cùng ôn tập về Inheritance nhé các ông :wink:

## Tính kế thừa là làm những gì???
- Cho phép ta tạo ra 1 class mới từ class đã có.
- Class mới là bản chuyên biệt (a specialized version) của class được thừa kế.

### Lợi ích từ việc kế thừa
Khi 1 class kế thừa từ 1 class khác, sẽ có 3 lợi ích chính như sau:
1. Chúng ta có thể sử dụng lại các phương thức và thuộc tính của class cũ.
2. Chúng ta có thể mở rộng class cũ bằng cách thêm những phương thức và thuộc tính mới.
3. Chúng ta có thể tinh chỉnh class cũ bằng cách viết đè lên (overloading) những phương thức của nó.

## Thuật ngữ và cú pháp trong
Trong kế thừa, chúng ta cần nhớ đến 2 thuật ngữ sau:
- Class cha (Parent/Base class/Superclass): class được thừa kế.
- Class con (Child/Derived class/Subclass): Thừa kế từ class cha.

### Cú pháp trong C++

```cpp
class Student //Base class
{
...
};
class underGrad : public student
{             //Derived class
...
};
```

*Cú pháp kế thừa (Inheritance syntax):*
```cpp
class <CName> [: <access specifier> <BaseCName>] {
. . .
};
```
Ta có thể thấy, class underGrad là class con, kế thừa từ class Student.

### Ví dụ về kế thừa
->![Inheritance example](https://images2.imgbox.com/8d/90/q5Pgh4WB_o.png)<-

Trong đó, khai báo kế thừa sẽ như sau:
```cpp
class Polygon : public Shape { . . . };
class Rectangle : public Polygon { . . . };
class Square : public Rectangle, public Rhombus { . . . };
class Ellipse: public Shape { . . . };
```
### Quan hệ "is a" trong kế thừa
Trong ví dụ trên, Polygon kế thừa trực tiếp từ Shape, Circle kế thừa trực tiếp từ Ellipse,... ta có thể nói:
- Polygon is a Shape
- Circle is a Ellipse

## Tầm vực trong kế thừa!!!
Khi kế thừa, chúng ta sẽ gặp những kiểu **tầm vực (Access specifier)** như sau:
```cpp
//Kế thừa public
class ChildClass : public BaseClass
{
};

//Kế thừa private
class ChildClass : private BaseClass
{
};

//Kế thừa protected
class ChildClass : protected BaseClass
{
};
```

Mỗi kiểu sẽ có đặc điểm như sau:
- **public**: Nếu kế thừa ở dạng này, sau khi kế thừa, tất cả các thành viên dạng **public** lớp cha
sẽ **public** ở lớp con, dạng **protected** ở lớp cha vẫn sẽ là **protected** ở lớp con.
- **protected**: Nếu dùng **protected** thì sau khi kế thừa, tất cả các thành viên dạng **public**
lớp cha sẽ trở thành **protected** tại lớp con.
- **private**: Trường hợp ta sử dụng **private**, thì sau khi kế thừa, tất cả các thành viên dạng
**public** và **protected** ở lớp cha sẽ thành **private** tại lớp con.

Mình có nhặt được bảng tổng kết này từ *Geeksforgeeks* =)) Hy vọng sẽ giúp các bạn dễ hiểu hơn nha.
->![AcSpe_Inheritance](https://media.geeksforgeeks.org/wp-content/cdn-uploads/table-class.png)<-

## Các dạng kế thừa
### Đơn kế thừa (Single Inheritance)
**Đơn kế thừa**: nghĩa là một lớp chỉ được kế thừa từ đúng một lớp khác. Hay nói cách khác, lớp con chỉ có duy nhất một lớp cha.

Cú pháp như sau:
```cpp
class ChildClass : public BaseClass
{

};
```
### Đa kế thừa (Multi Inheritance)
**Đa kế thừa** là một tính năng của ngôn ngữ C++. Trong đó một lớp có thể kế thừa từ nhiều hơn một lớp khác. Nghĩa là một lớp con được kế thừa từ nhiều hơn một lớp cơ sở.

Cú pháp:
```cpp
class ChildClass : public BaseClass1, public BaseClass2
{

};
```
### Hai dạng còn lại
Ngoài ra chúng ta còn có 2 dạng kế thừa khác gồm:
- **Kế thừa đa cấp (Multilevel Inheritance)**: Trong kiểu thừa kế này, một lớp dẫn xuất được tạo từ một lớp dẫn xuất khác.
->![Mul_Inhe](https://codelearn.io/Media/Default/Users/DatTrann/OOP/0.png)<-
- **Kế thừa phân cấp (Hierarchical Inheritance)**: Trong kiểu thừa kế này, sẽ có nhiều hơn một lớp con được kế thừa từ một lớp cha duy nhất.
->![Hie_Inhe](https://codelearn.io/Media/Default/Users/DatTrann/OOP/unnamed.jpg)<-

## Tạm chốt
Vậy là chúng ta đã cùng nhau tìm hiểu chi tiết về tính Kế thừa trong Lập trình hướng đối tượng. Hẹn gặp các bạn
ở những phần tiếp theo với 2 đặc trưng còn lại của OOP <3.

Chúc mọi người ngày Valentine Trắng vui vẻ :wink: À mà cũng là ngày **Số Pi** nhé =)).

Và ông nào còn FA như tôi thì mau chóng tìm bồ đi nhé =)).

Love you guys <3.
