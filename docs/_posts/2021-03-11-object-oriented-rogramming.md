---
category: docs
tags:
  - oop
date: 2021-03-11
title: OOP-P1 Lập trình hướng đối tượng (Object-Oriented Programming)
vssue: false
---

Chúng ta sẽ cùng tìm hiểu về một trong những kỹ thuật lập trình quan trọng nhất - OOP.

<!-- more -->
## Mở đầu
Chào mọi người, lại là mình - Phúc đây =)). Chẳng qua là hôm nay trên trường lại ôn về OOP,
và mình thấy đây cũng là một chủ đề quan trọng nhưng **RẤT DỄ QUÊN** nếu không ôn tập thường xuyên.

Vì vậy, mình quyết định đây sẽ là chủ đề mở đầu cho những series ôn tập kiến thức của chúng ta :wink:.

## Khái niệm
Đầu tiên, ta sẽ phân biệt:
- Lập trình cấu trúc (Structure programming): Tập trung vào các quá trình xảy ra trong chương trình.
Chương trình bắt đầu, thực hiện vài thao tác, và sau đó kết thúc.
- Lập trình hướng đối tượng (Object-Oriented Programming): Coi chương trình như một phức hợp các đối tượng, mà các
đối tượng đó tương tác với nhau thông qua các phương thức.

#### Vậy tại sao chúng ta lại cần đến Lập trình hướng đối tượng???
Đó là do giới hạn của Lập trình cấu trúc
1. Nếu cấu trúc dữ liệu thay đổi, rất nhiều hàm buộc phải thay đổi theo.
2. Các chương trình dựa trên cấu trúc phân cấp chức năng phức tạp thì:
> Rất khó để HIỂU và BẢO TRÌ

> Trần thân khi TINH CHỈNH và MỞ RỘNG

> Debug sẽ rất kinh khủng khi đó là một chương trình lớn =))

*Vì vậy, lập trình hướng đối tượng có thể giải quyết những khó khăn này dựa vào các đặc trưng của nó.*

**Và các đặc trưng này là gì thì xin mời tiếp tục theo dõi =))**

Chúng ta có thể kể đến một vài ưu điểm của OOP như sau:
1. OOP mô hình hóa những thứ phức tạp dưới dạng cấu trúc đơn giản.
2. Code OOP có thể sử dụng lại, giúp tiết kiệm tài nguyên.
3. Có tính bảo mật cao, bảo vệ thông tin thông qua đóng gói.
4. Dễ mở rộng dự án.
### Đối tượng (Object) là gì???
Đối tượng trong OOP bao gồm 2 thành phần chính:

- Thuộc tính (Attribute): là những thông tin, đặc điểm của đối tượng
- Phương thức (Method): là những hành vi mà đối tượng có thể thực hiện
Để dễ hình dung, ta có một ví dụ thực tế về đối tượng là smartphone. Đối tượng này sẽ có:

- Thuộc tính: màu sắc, bộ nhớ, hệ điều hành…
- Phương thức: gọi điện, chụp ảnh, nhắn tin, ghi âm…
### Thế Class là gì???
**Class** là kiểu dữ liệu do người dùng định nghĩa, bao gồm các thuộc tính và các phương thức được định nghĩa từ trước.
Đây là sự trừu tượng hóa của đối tượng.

### Class và Objects (Đối tượng)
Class giống như một bản thiết kế/khuôn mẫu (blueprint) và các đối tượng (objects) giống như những ngôi nhà
xây nên từ bản thiết kế đó.

->![Class and Objects](https://images2.imgbox.com/74/d4/1DjUoaMw_o.png)<-

Ta có thể lấy ví dụ trực quan cho dễ hiểu như sau :)
Khi nói về loài chó, bạn có thể hiểu nó là class (lớp) chó có:
- Các đặc điểm: 4 chân, 2 mắt, có đuôi,...
- Các hành động như: sủa, đi, ăn, ngủ, quẩy đuôi khi gặp người quen :vv

Đối tượng thì chính là thằng bạn thân của bạn =)) (Mình đùa thôi, chứ nó như là
  con Husky bạn nuôi trong nhà, mang các đặc tính của lớp chó).

## Tạm chốt
Chúng ta đã cùng ôn lại về khái niệm và ưu điểm của Lập trình hướng đối tượng, cũng như
tìm hiểu định nghĩa của một vài thuật ngữ như Class hay Object.

Và vì bài viết cũng đã hơi dài =)) nên mình xin tạm dừng tại đây.

Hẹn gặp các bạn ở phần 2 của seri OOP này, chúng ta sẽ cùng tìm hiểu về *các đặc trưng* của nó <3
