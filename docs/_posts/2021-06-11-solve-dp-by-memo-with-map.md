---
category: dsa
tags:
  - dp
date: 2021-06-11
title: Solving some DP Problems by Memoization with unordered_map
vssue: false
---

Giải một số bài toán phổ biến về Dynamic Programming.

<!-- more -->
## Mở đầu
Chào mọi người, mình quay trở lại rồi đây =))).

Như mình đã giải thích về cách làm các bài DP trong bài viết
[Kỹ thuật Memoization giải quyết bài toán Quy hoạch động.](https://phucnt.netlify.app/posts/2021/06/05/memo-to-solve-dp-vn.html)

Thì hôm nay mình sẽ cho mọi người một số bài toán phổ biến và cách giải nhé :laughing:.

## Tổng quát
Khác với bài trước, thay vì dùng **global array** thì lần này các bài giải mẫu của mình
sẽ sử dụng **unordered_map** nhé. Mình cảm thấy unordered_map hay hơn và vận dụng
được vào nhiều bài toán hơn :wink:.

**Chú ý**
```cpp
//Để sử dụng unordered_map cần khai báo thư viện
#include <unordered_map>
//Mình sẽ thay từ long long bằng ll cho nhanh
#define ll long long
```

Các bài ở đây, sẽ chỉ gồm *câu hỏi, ví dụ và đáp án mẫu* thôi nha. Bạn nào cần giải thích
thì có thể liên hệ mình.

### Bài toán 1: Fibonacci
**Yêu cầu:**
```cpp
Thực hiện hàm fib(n) trả về số fibonacci thứ n.
Ví dụ n = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,...
=>fib(n)= 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,...
```

<details>
<summary>Sample Solution</summary>
<p>

```cpp
ll fibMemo(int n, unordered_map<int, ll> &memo)
{
    if (memo.count(n) == 1)
        return memo[n];
    if (n <= 2)
        return 1;
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}
ll fib(int n)
{
    unordered_map<int, ll> memo;
    return fibMemo(n, memo);
}
```

</p>
</details>  

### Bài toán 2: Travel the Grid
**Yêu cầu:**
```cpp
Bạn được cung cấp một lưới có kích thước m x n.
Bạn  phải di chuyển từ góc trên bên trái (Vị trí m:n) tới đích ở góc dưới bên phải (Vị trí 1:1)
Nhưng chỉ được di chuyển theo 2 cách:
  - Đi qua phải.
  - Đi xuống dưới.
Có tổng cộng bao nhiêu cách để di chuyển theo yêu cầu.
Thực thi hàm gridTraveler(int m, int m) trả về số cách.
```

<details>
<summary>Sample Solution</summary>
<p>

```cpp
ll gridTravelerMemo(int m, int n, unordered_map<string, ll> &memo)
{
    string mn = to_string(m) + "," + to_string(n);
    if (memo.count(mn) == 1)
        return memo[mn];
    if (m == 0 || n == 0)
        return 0;
    if (m == 1 && n == 1)
        return 1;
    memo[mn] = gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo);
    return memo[mn];
}
ll gridTraveler(int n, int m)
{
    unordered_map<string, ll> memo;
    return gridTravelerMemo(m, n, memo);
}
```

</p>
</details>  

### Bài toán 3: canSum & howSum & bestSum Problem
**Yêu cầu canSum:**
```cpp
Thực thi hàm canSum(int target, vector<int> arr). Kiểm tra xem có thể tạo thành target
bằng cách cộng các phần tử trong vector arr hay không.
Bạn có thể sử dụng 1 phần tử nhiều lần. (Input sẽ đảm bảo toàn số >=0).
Ví dụ: canSum(7, {2, 3}) => true // 7 = 2 + 2 + 3
canSum(7, {5, 3, 4, 7}) => true // 7 = 3 + 4 || = 7
canSum(7, {2, 4}) => false  // No way to generate 7 from vector elements.
```

<details>
<summary>Sample Solution</summary>
<p>

```cpp
bool canSumMemo(int target, vector<int> arr, unordered_map<int, bool> &memo)
{
    if (memo.count(target) == 1)
        return memo[target];
    if (target == 0)
        return true;
    if (target < 0)
        return false;
    for (int i = 0; i < arr.size(); i++)
    {
        int reminderTarget = target - arr[i];
        if (canSumMemo(reminderTarget, arr, memo))
        {
            memo[target] = true;
            return true;
        }
    }
    memo[target] = false;
    return false;
}
bool canSum(int target, vector<int> arr)
{
    unordered_map<int, bool> memo;
    return canSumMemo(target, arr, memo);
}
```

</p>
</details>  

**Yêu cầu howSum:**
```cpp
Với các cách thức giống như bài toán trên nhưng bài toán này bạn phải:
Thực thi hàm howSum(int target, vector<int> arr). Trả về 1 mảng/vector chứa các
phần tử từ arr mà có tổng bằng target.
Vói các input có nhiều cách chọn phần tử, bạn có thể trả về bất cứ cách nào trong đó.
Ví dụ: howSum(7, {2, 3}) => [3, 2, 2]
howSum(7, {5, 3, 4, 7}) => [4, 3] hoặc [7]
howSum(8, {2, 3, 5}) => [2, 2, 2, 2] hoặc [3,5]
howSum(300, {7, 14}) => []
```

<details>
<summary>Sample Solution</summary>
<p>

```cpp
vector<int> howSumMemo(int target, vector<int> arr, unordered_map<int, vector<int>> &memo)
{
    if (memo.count(target) == 1)
        return memo[target];
    if (target == 0)
        return {};
    if (target < 0)
        return {INT_MIN};
    for (int i = 0; i < arr.size(); i++)
    {
        int reminderTarget = target - arr[i];
        vector<int> remArr = howSumMemo(reminderTarget, arr, memo);
        if (remArr != (vector<int>{INT_MIN}))
        {
            remArr.push_back(arr[i]);
            memo[target] = remArr;
            return remArr;
        }
    }
    memo[target] = {INT_MIN};
    return {INT_MIN};
}
vector<int> howSum(int target, vector<int> arr)
{
    unordered_map<int, vector<int>> memo;
    return howSumMemo(target, arr, memo);
}
```

</p>
</details>  

**Yêu cầu bestSum:**
```cpp
Với các cách thức giống như bài toán trên nhưng bài toán này bạn phải:
Thực thi hàm bestSum(int target, vector<int> arr). Thay vì trả về bất cứ cách kết
hợp nào có thể tạo thành target, bạn phải trả về cách kết hợp ngắn nhất trong các cách.
Ví dụ: bestSum(7, {5, 3, 4, 7})) => [7] //Có 2 cách là [3,4] và [7] nhưng [7] ngắn hơn
bestSum(8, {1, 4, 5}) => [4, 4]
// Chọn giữa: [1,1,1,1,1,1,1,1]
// Hoặc [1,1,1,1,4]
// Hoặc [1,1,1,5]
// Hoặc [4,4] => [4,4] là tổ hợp ngắn nhất
```

<details>
<summary>Sample Solution</summary>
<p>

```cpp
vector<int> bestSumMemo(int target, vector<int> arr, unordered_map<int, vector<int>> &memo)
{
    if (memo.count(target) == 1)
        return memo[target];
    if (target == 0)
        return {};
    if (target < 0)
        return {INT_MIN};
    vector<int> bestArr = {INT_MIN};
    for (int i = 0; i < arr.size(); i++)
    {
        int remindTarget = target - arr[i];
        vector<int> remArr = bestSumMemo(remindTarget, arr, memo);
        if (remArr != (vector<int>{INT_MIN}))
        {
            remArr.push_back(arr[i]);
            if (bestArr == (vector<int>{INT_MIN}) || (remArr.size() < bestArr.size() && remArr.size() != 0))
            {
                bestArr = remArr;
            }
        }
    }
    memo[target] = bestArr;
    return bestArr;
}
vector<int> bestSum(int target, vector<int> arr)
{
    unordered_map<int, vector<int>> memo;
    return bestSumMemo(target, arr, memo);
}
```

</p>
</details>  

### Bài toán 4: canConstruct & countConstruct & allConstruct Problem
**Yêu cầu canConstruct:**
```cpp
Thực thi hàm canConstruct nhận vào 1 chuỗi target và 1 mảng các chuỗi. Kiểm tra xem có
thể tạo thành chuỗi target từ các phần tử của mảng hay không.
bool canConstruct(string target, vector<string> arr).
Ví dụ: canConstruct("abcdef", {"ab", "abc", "cd", "ef", "abcd"}) => true // ab + cd + ef || abcd + ef
canConstruct("skateboard", {"bo", "rd", "ate", "t", "ska", "sk", "boar"}) => false
```

<details>
<summary>Sample Solution</summary>
<p>

```cpp
bool canConstructMemo(string target, vector<string> arr, unordered_map<string, bool> &memo)
{
    if (memo.count(target) == 1)
    {
        return memo[target];
    }
    if (target == "")
        return true;
    for (int i = 0; i < arr.size(); i++)
    {
        if (target.find(arr[i]) == 0)
        {
            string tmp = target;
            string subString = target.replace(0, arr[i].size(), "");
            target = tmp;
            if (canConstructMemo(subString, arr, memo))
            {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}
bool canConstruct(string target, vector<string> arr)
{
    unordered_map<string, bool> memo;
    return canConstructMemo(target, arr, memo);
}
```

</p>
</details>  

**Yêu cầu countConstruct:**
```cpp
Thực thi hàm countConstruct nhận vào 1 chuỗi target và 1 mảng các chuỗi. Đếm số cách có
thể tạo thành chuỗi target từ các phần tử của mảng, nếu không có thì trả về 0.
int countConstruct(string target, vector<string> arr).
Ví dụ: countConstruct("purple", {"purp", "p", "ur", "le", "purpl"}) => 2
countConstruct("enterapotentpot", {"a", "p", "ent", "enter", "ot", "o", "t"}) => 4
countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", {"e", "ee", "eee", "eeee", "eeeee"}) => 0
```

<details>
<summary>Sample Solution</summary>
<p>

```cpp
int countConstructMemo(string target, vector<string> arr, unordered_map<string, int> &memo)
{
    if (memo.count(target) == 1)
        return memo[target];
    if (target == "")
        return 1;

    int res = 0;
    for (int i = 0; i < arr.size(); i++)
    {
        if (target.find(arr[i]) == 0)
        {
            string tmp = target;
            string subString = target.replace(0, arr[i].size(), "");
            target = tmp;
            int num = countConstructMemo(subString, arr, memo);
            res += num;
        }
    }
    memo[target] = res;
    return res;
}
int countConstruct(string target, vector<string> arr)
{
    unordered_map<string, int> memo;
    return countConstructMemo(target, arr, memo);
}
```

</p>
</details>  

**Yêu cầu allConstruct:**
```cpp
Thực thi hàm allConstruct nhận vào 1 chuỗi target và 1 mảng các chuỗi.
Trả về 1 vector 2 chiều gồm tất cả các cách có thể tạo thành chuỗi target từ các phần thử của arr.
vector<vector<string>> countConstruct(string target, vector<string> arr).

Ví dụ: allConstruct("purple", {"purp", "p", "ur", "le", "purpl"})
        // [
        //     [purp, le]
        //     [p, ur, p, le]
        // ]    
allConstruct("abcdef", {"ab", "abc", "cd", "def", "abcd"})
        // [
        //     [abc, def]
        // ]
allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", {"e", "ee", "eee", "eeee", "eeeee"})
        //     []
```

<details>
<summary>Sample Solution</summary>
<p>

```cpp
void printAns(vector<vector<string>> allCombination)
{
    cout << "[" << endl;
    for (int i = 0; i < allCombination.size(); ++i)
    {
        cout << "  [";

        for (int j = allCombination[i].size() - 1; j >= 0; --j)
        {
            if (j == 0)
            {
                cout << allCombination[i][j];
            }
            else
            {
                cout << allCombination[i][j] << ", ";
            }
        }
        cout << "]";
        cout << endl;
    }
    cout << "]";
    cout << endl
         << endl
         << endl;
}

vector<vector<string>> allConstructMemo(string target, vector<string> arr, unordered_map<string, vector<vector<string>>> &memo)
{
    if (memo.count(target) == 1)
        return memo[target];
    if (target == "")
        return {{}};

    vector<vector<string>> res;
    for (int i = 0; i < arr.size(); i++)
    {
        if (target.find(arr[i]) == 0)
        {
            string tmp = target;
            string subString = target.replace(0, arr[i].size(), "");
            target = tmp;
            vector<vector<string>> subConStruct = allConstructMemo(subString, arr, memo);
            for (int j = 0; j < subConStruct.size(); j++)
            {
                subConStruct[j].push_back(arr[i]);
                res.push_back(subConStruct[j]);
            }
        }
    }
    memo[target] = res;
    return res;
}
vector<vector<string>> allConstruct(string target, vector<string> arr)
{
    unordered_map<string, vector<vector<string>>> memo;
    return allConstructMemo(target, arr, memo);
}
```

</p>
</details>  


## Chốt lại
Mình nghĩ nhiêu đó là đủ để mọi người thực tập về cách sử dụng kỹ thuật **Memoization**
giúp tối ưu cách giải các bài toán **Quy hoạch động** rồi nhỉ :heart_eyes:

Hẹn gặp lại ở các bài viết tiếp theo về 1 kỹ thuật tương đương giúp giải quyết các bài
toán Dynamic Programming, đó là **Tabulation**!!!

Love you guys <3.
