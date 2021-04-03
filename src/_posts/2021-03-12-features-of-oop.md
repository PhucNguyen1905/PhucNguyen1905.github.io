---
category: docs
tags:
  - oop
date: 2021-03-12
title: OOP-P2 Tính đóng gói trong Lập trình hướng đối tượng
vssue: false
---

Tìm hiểu về những đặc trưng làm nên sức mạnh của OOP.

<!-- more -->
## Mở đầu
Chào mọi người, lại là mình - Phúc đây =)). Chúng ta cùng tiếp tục tìm hiểu về OOP nhé :wink:

Điều bắt buộc phải nhớ khi học về OOP chính là các ✨đặc trưng✨ của nó (Cũng giống như việc học nấu cơm
  phải biết vo gạo vậy =))).

  Chúng ta sẽ lần lượt tìm hiểu về 4 đặc trưng quan trọng:

**1. Tính đóng gói (Encapsulation) (Hot hot hot)**

**2. Tính kế thừa (Inheritance) (Hot hot hot)**

**3. Tính trừu tượng (Abstraction)**

**4. Tính đa hình (Polymorphism)**

## Tính đóng gói (Encapsulation)
Một trong những ưu điểm nổi bật của OOP đó là các đối tượng (objects) không cần phải
thể hiện tất cả thuộc tính và phương thức của nó. Các chi tiết không liên quan đến việc sử dụng người dùng/đối tượng phải
được ẩn khỏi các đối tượng khác.

Người dùng chỉ biết về các *public methods/data* (phương thức/thuộc tính) của đối tượng: Đây gọi là **interface**

Interface giấu đi những chi tiết về cách chương trình được thực hiện, chúng ta có 2 thuật ngữ về việc này:
- Data hiding
- Black box

**Chức năng**: Mình nhặt được câu này, và thấy nó đã bao quát gần hết nên tiện tay copy và đem vào đây =))

"Tính đóng là kỹ thuật giúp bạn che giấu được những thông tin bên trong đối tượng. Mục đích chính của tính đóng gói là giúp hạn chế các lỗi khi phát triển chương trình. Với cách làm này thông tin của đối tượng đã được ẩn đi, bạn chỉ có thể giao tiếp với đối tượng thông qua các phương thức." - *codelearn.io*
### Tầm vực trong class (Class Access Specifier)
Dùng để điều khiển quyền truy cập đến các thành phần trong class:
- *private* (Mặc định): Các thành phần được khai báo *private* chỉ có thể được truy cập bởi
các thành phần trong class. TRUY CẬP TỪ BÊN NGOÀI LÀ KHÔNG THỂ =)) (Rất hay ho nha)
- *public*: Các thành phần được khai báo *public* có thể được truy cập từ bên ngoài class
thông qua đối tượng của class đó.
- *protected*: Các thành phần được khai báo *protected* thì không thể gọi ở bên ngoài class và
chỉ được phép gọi nó bên trong class và các class con kế thừa nó (Tính kế thừa sẽ tìm hiểu sau nhá :33).

### Ví dụ cho dễ hiểu nè =))
Chúng ta sẽ lấy ví dụ để hiểu hơn về tầm vực và lợi ích của Đóng gói nhé <3

```cpp
class Student {
private:
    string MSSV;
    double GPA;
public:
    string phoneNumber;
    double getGPA() {
        return this->getGPA;
    }
};
```
Okayy, giờ bắt đầu phân tích này:
- *MSSV và GPA* được khai báo private ==> User (Sinh viên) không thể tùy ý thay đổi
nó từ bên ngoài =)) (Of course, nếu không thì ai cũng 10.0 à :)).
```cpp
int main()
{  
    Student st1;
    st1.GPA = 10.0; // Of course, you cant do that =))
}
```
"Tất cả các thành phân được khai báo private không thể truy cập từ bên ngoài".
Bạn chỉ có thể xem điểm của mình thông qua method *getGPA*.
```cpp
    cout << st1.getGPA();
```

- ĐỐi với *phoneNumber* được khai báo public, nên có thể truy cập từ bên ngoài.
```cpp
int main()
{  
    Student st2;
    st1.phoneNumber = "0123456789"; // Các thuộc tính/phương thức public có thể gọi bất cứ đâu
}
```

### Hàm bạn (Friend function)
Một hàm ngoài class được định nghĩa là một *hàm bạn (Friend function)*, thì hàm đó có thể truy cập dữ liệu *protected* và *private* của class. Một class có thể có nhiều hàm bạn, và chúng phải nằm bên ngoài class.

Ta quay lại ví dụ về class Student để hiểu rõ hơn:
```cpp
class Student {
private:
    string MSSV;
    double GPA;
public:
    string phoneNumber;
    double getGPA() {
        return this->getGPA;
    }
    friend void printInfor(Student st); //Khai báo hàm bạn
};

void printInfor(Student st) {
    cout << st.MSSV << " got " << st.GPA << endl;
}
```
Hàm *printInfor* được khai báo là hàm bạn của class Student, nên nó có thể truy cập
các dữ liệu private của class này.

### Lớp bạn (Friend class)
Tương tự như hàm bạn, *lớp bạn (Friend class)* cũng cho phép lớp bạn của lớp kia truy cập các thành viên *private*.

**Lưu ý**: A là lớp bạn của B, không có nghĩa B cũng là bạn của A, nó chỉ có tính 1 chiều.
(Giống như việc bạn chết mê chết mệt vì Crush của mình, nhưng không đồng nghĩa người ta cũng thích bạn =)), đau nhỉ???
Nhưng đó là cuộc sống :vv).

Điều này cũng có nghĩa, A có thể truy cập thành phần của B, nhưng B không thể truy cập của A. Ta cùng quay lại với class Student nào :wink:
```cpp
class Student {
private:
    string MSSV;
    double GPA;
public:
    string phoneNumber;
    friend class University; // University là hàm bạn của Student
};
class University {
public:
    void printInfor(Student st) {
        cout << st.MSSV << " got " << st.GPA << endl;
    }
};
```
*University* có thể truy cập các thành phần của *Student*, nhưng *Student* thì không thể truy cập của *University*.

## Chốt lại
Chúng ta đã cùng tìm hiểu về tính Đóng gói (Encapsulation) của Lập trình hướng đối tượng.

Nếu có sai sót gì, mình rất mong nhận được sự góp ý từ các bạn <3.

Hẹn gặp lại các bạn trong các bài viết tiếp theo để tìm hiểu về 3 đặc trưng còn lại của OOP nhé =)).

Love you guys <3.
