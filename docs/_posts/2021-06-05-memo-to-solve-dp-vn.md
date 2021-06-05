---
category: dsa
tags:
  - dp
date: 2021-06-05
title: Kỹ thuật Memoization giải quyết bài toán Quy hoạch động
vssue: false
---

Một cách rất hay để tối ưu cách giải các bài Dynamic Programming.

<!-- more -->
## Mở đầu
(For those who prefer English, I will have another version written in English :wink:)

Chào mọi người, mình quay trở lại rồi đây =))).

Hôm nay chúng ta sẽ cùng tìm hiểu về cách giải các bài toán Quy hoạch động (Dynamic Programming)
và cách tối ưu hóa cách giải bằng Memoization nhé :laughing:.

## Tổng quát
### Dynamic Programming Problem
(Từ giờ mình sẽ sử dụng cụm từ "Dynamic Programming Problem" - "DP" để thay cho Quy hoạch động)

Dynamic Programming Problems là các bài toán kinh điển trong lập trình. Chúng ta thường
giải quyết chúng bằng cách sử dụng kỹ thuật **đệ quy (recursion)**. Cụ thể việc giải
một bài toán DP sẽ được diễn ra theo các bước sau:
- Hình dung bài toán như 1 **tree**.
- Thực thi tree này bằng **đệ quy** .
- Kiểm tra các testcase.

Sau khi đã đảm bảo nó hoạt động tốt và cho ra đúng kết quả, thì chúng ta sẽ chuyển sang
giai đoạn **tối ưu code** bằng một trong hai kỹ thuật:
1. **Tabulation**: Bottom Up
2. **Memoization**: Top Down  

### Memoization
**Memoization** thực chất là một kỹ thuật được dùng để giảm bớt số lần lập trong
các *giải thuật đệ quy*, nhằm giúp giảm độ phức tạp của các thuật toán này một cách đáng kể.

Memoization được thực hiện theo các bước:
- Thêm 1 memo thích hợp.
- Thêm các *base case* cho memo.
- Thêm các *giá trị trả về* vào memo.

Trong C++, memo thường dùng nhất đó là các mảng 1 chiều hoặc 2 chiều được khai báo
toàn cục (Global 1D - array hoặc Global 2D - array).

Hôm nay chúng ta sẽ cùng nhau lần lượt đi qua các bước để thực thi đệ quy và tối ưu hóa
bằng cách giải quyết 2 bài toán kinh điển trong DP đó là **fibonacci** và **travel the grid**.

## Bài toán 1: Fibonacci
### Lên ý tưởng
**Bài toán**: Tìm số fibonacci thứ n.

Ví dụ n = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,...

=>fib(n)= 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,...

Tìm số fibonacci đã là một bài toán quá quen thuộc đối với chúng ta, nó có thể được giải
bằng đệ quy, vòng lặp hay sử dụng công thức. Nhưng mình sẽ triển khai theo hướng sử dụng đệ quy nhé.
```cpp
int fib(int n)
{
    if (n <= 2) //Base case for recursion
        return 1;
    return fib(n - 1) + fib(n - 2);
}
```

### Giải thích
Khi cần tìm fib(1) hay fib(2) thì hàm sẽ trả về 1. Vậy ví dụ khi tìm fib(7) sẽ lần lượt thực hiện:
```cpp
fib(7) = fib(6) + fib(5)
Khi đó cần tìm fib(6) = fib(5) + fib(4) và fib(5) = fib(4) + fib(3)...
Việc này có thể mô tả bằng tree sau:
```
->![Fib(7) visualization from coderbyte](https://images2.imgbox.com/6d/3b/4T9BqOg8_o.png)<-

Vậy khi đó độ phức tạp sẽ rất lớn, vì như bạn thấy khi cần tìm fib(7) thì fib(3) được gọi 5 lần,
fib(4) được gọi 3 lần,... =((. Cụ thể time complexity sẽ là **O(2^n)**.
Nếu vậy khi cần tìm fib(50) thì sẽ tốn **2^50** bước :flushed:.

Tự hỏi liệu có cách gì khi tính fib(50) thì các fib(3), fib(4),fib(30),... **chỉ cần gọi vài lần** không ta??? :sunglasses:

### Tối ưu hóa bằng Memoization
Đương nhiên là có cách rồi :wink:, đó là sử dụng memo theo cách sau đây:
```cpp
#define ll long long
ll memo1D[1000]; //Global array
ll fib_memo(int n)
{
    if (n <= 2) //Base case for recursion
        return 1;
    if (memo1D[n] != 0) //Base case for memo
        return memo1D[n];
    memo1D[n] = fib_memo(n - 1) + fib_memo(n - 2);
    return memo1D[n];
}
```
Mỗi khi tính ra 1 fib(n) thì chúng ta sẽ lưu giá trị của nó vào mảng memo này. Sau đó,
mỗi lần cần 1 giá trị fib(n) chúng ta chỉ cần check xem trong memo đã có chưa (Base case),
nếu có rồi thì chỉ việc xuất ra thôi =))). Thật là hay đúng không nào =)) từ đó việc tìm
fib(7) sẽ chỉ còn như tree sau:
->![fib(7)_memo visualization from coderbyte](https://images2.imgbox.com/18/10/wDptBLR8_o.png)<-
Từ đó, độ phức tạp chỉ còn **O(n)**.

### So sánh thời gian
Mình sẽ so sánh thời gian hai hàm **fib(n) và fib_memo(n)** cho các bạn xem sự khác biệt
giữa *recursion và recursion with memo* nhé.

Mình sẽ tìm fibonacci của 50. Vì dưới 50 thì hầu như rất nhanh (fib_memo toàn đo được 0 microsecond =)) ) rất khó xác thấy sự khác biệt.

```cpp
Fibonacci of 50: 12586269025
Time taken by fib(n): 43.6161 seconds
Time taken by fib_memo(n): 0 seconds
```
Như các bạn thấy đó, kết quả **quá chênh lệch** =))) fib(n) phải tốn gần 44s để tính ra fib(50),
còn sau khi sử sụng Memoization thì dường như là ra *ngay lập tức* :heart_eyes:. Dù cho có tìm
fibonacci của 200 thì fib_memo(n) vẫn ra ngay lập tức =)).

Đã thấy sự lợi hại của Memoization chưa nào :sunglasses:.

## Bài toán 2: Travel the grid
### Lên ý tưởng
**Bài toán:** Bạn phải được cung cấp một lưới (Bảng or something else =(( thật sự
  không biết tiếng Việt dịch ra sao luôn mọi người ạ) có kích thước **m x n**.
  Bạn  phải di chuyển từ **góc trên bên trái (Vị trí m:n)** tới đích ở **góc dưới bên phải (Vị trí 1:1)**
  . Nhưng chỉ được di chuyển theo 2 cách:
  - *Đi qua phải*.
  - *Đi xuống dưới*.

  Hỏi có tổng cộng bao nhiêu cách để di chuyển theo yêu cầu???

Chà, độ khó có vẻ đã tăng lên kha khá so với bài toán 1 rồi phải không :sunglasses:.
Chúng ta cùng ví dụ mô tả bên dưới để hiểu hơn về đề bài nha:
->![grid2x3 visualization from coderbyte](https://images2.imgbox.com/cd/5e/c7B2IPJi_o.png)<-
Như ví dụ trên, thì với lưới 2x3 chúng ta có thể di chuyển theo 3 cách để tới đích.

Vậy phải giải bài này như thế nào đây??? Trước tiên thì hãy nghĩ đến một vài trường
hợp đặc biệt mà có thể dùng làm base case:
```cppp
1/ Nếu m = n == 1: Thì lưới có cỡ 1x1
=> Đích trùng vạch xuất phát nên chỉ có 1 cách đi =))
2/ Nếu m hoặc n == 0: Thì lưới có cỡ 0xn hoặc mx0
=> Không có cách nào để đi cả: return 0
```

### Giải thích và thực thi
Lấy ví dụ này để giải thích nhé:
->![grid3x3 visualization from coderbyte](https://images2.imgbox.com/6f/5e/NfOenYtc_o.png)<-
```cpp
Lấy lưới cỡ 3 x 3 để chạy thử 1 lần xem sao.
Bạn chỉ có thể đi qua phải hoặc đi xuống, bắt đầu từ 3:3 và đích ở 1:1
+ Nếu đi xuống thì từ 3:3 chúng ta đi tới 2:3
=> Sau đó phải tìm số cách đi từ 2:3 tới 1:1
+ Nếu đi qua phải thì từ 3:3 chúng ta tới 3:2
=> Lại phải tìm cách từ đi từ 3:2 tới 1:1

Đây không phải là đệ quy ư!!! Từ đó chúng ta có thể code như sau:

int gridTraveler(int m, int n)
{
    if (n == 0 || m == 0) //Base case số 1
        return 0;
    if (n == 1 && m == 1) //Base case số 2
        return 1;
            //Đi xuống                  //Đi qua phải
    return gridTravelerRec(m - 1, n) + gridTravelerRec(m, n - 1);
}

```

### Tối ưu hóa
Vậy là đã giải xong bài toán này bằng đệ quy, nhưng nếu chỉ sử dụng đệ quy thì chỉ
có hiệu quả với các lưới có *kích thước nhỏ*. Vì vậy chúng ta có thể tối ưu hóa
bằng cách sử dụng Memoization :wink:.

Vì ở đây có 2 biến cần lưu trữ nên ta phải sử dụng **2D - array**, cụ thể:
```cpp
int memo2D[1000][1000];
int gridTraveler(int n, int m)
{
    if (n == 0 || m == 0) //Base case 1
        return 0;
    if (n == 1 && m == 1) //Base case 2
        return 1;
    if (memo2D[n][m] != 0) //Base case for memo
    {
        return memo2D[n][m];
    }
    else
    {
        memo2D[n][m] = gridTraveler(n - 1, m) + gridTraveler(n, m - 1);
        return memo2D[n][m];
    }
}
```
### So sánh
Tiếp tục với chuyên mục so sánh giữa **recursion và recursion with memo** nhé =)).
```cpp
Size of grid: 15 x 15
Num of way(s): 40116600
Time taken by gridTraveler: 510217 microseconds
Time taken by gridTraveler_memo: 0 microseconds

Đó mới chỉ là 15 x 15 mà đã cực kỳ khác biệt rồi =))
Khi mình test size 20 x 20 thì recursion without memo chạy lâu quá chờ không nổi luôn =)).
Còn recursion with memo thì vô tư như vầy đây.
Size of grid: 20 x 20
Num of way(s): 985525432
Time taken by gridTraveler_memo: 0 microseconds
```

## Chốt lại
Mình nghĩ nhiêu đó là đủ để mọi người cơ bản nắm được cách giải quyết các bài toán
**Quy hoạch động** và cũng thấy được sự lợi hại của **Memoization** rồi nhỉ :heart_eyes:

Hẹn gặp lại ở các bài viết tiếp theo nhé!!!

Love you guys <3.
