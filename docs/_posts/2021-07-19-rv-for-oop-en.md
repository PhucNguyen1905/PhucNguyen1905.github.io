---
category: dsa
tags:
  - oop
date: 2021-07-19
title: Revision for Object-Oriented Programming
vssue: false
---

Solving some questions about OOP.

<!-- more -->
## Introduction
Hi guys!!! I've come back :wink:

Today, I will show you some questions and answers that I need to review before the final exam of
Advanced Programming subject :laughing:.

## General
These are questions about OOP,its features and also some practical exercises.


### No. 1
**Question: What are classes and objects? Explain.**

<details>
<summary>Sample Answer</summary>
<p>

**Object** is an encapsulation of data along with functions that act upon data. An object consists of:
- Name: the variable name we give it.
- Member data: data that describes the object.
- Member functions: Behaviour aspects of the object.

**Class** - a blueprint for object. Class is a user-defined type that describes what a certain type of object look like.
A class description consists of declaration an a definition.

A object is a single instance of class. We can create many objects from the same class type.

**Example:**
- A class is a blueprint that describes a house. And object is the house built from that blueprint.
- We can have class for *Dog* with some behaviour like eating, sleeping, biting,... And object created from class Dog can be
Husky, Chihuahua, Corgi and so on.

</p>
</details>  

### No. 2
**Question: Distinguish between the following terms.**

**a. Objects and classes**
<details>
<summary>Sample Answer </summary>
<p>

| Class      | Object |
| ----------- | ----------- |
| Class is blueprint or template from which objects are created      | Object is an instance of class       |
| Class is a logical entity   | Object is a physical entity        |
| Class is a group of similar objects  | Object is a real world entity such as pen, laptop, mobile, bed etc         |
| Class doesn't allocated memory when created   | 	Object allocates memory when it is created.       |
| Class is decleard one   | Object is created many times as requirement        |

Example to understand:
- Class: Human => Object: Man, Woman
- Class: Fruit => Object: Apple, Banana etc

</p>
</details>  

**b. Data abstraction and data encapsulation**
<details>
<summary>Sample Answer </summary>
<p>

**Abstraction** is the concept of OOP that shows only essential attributes and hides unnecessary information
(The process or method of gaining information).

**Encapsulation** is the process of wrapping data and functions, that operate on the data, into a single entity
(The process or method to contain information).

| Data Abstration      | Data Encapsulation |
| ----------- | ----------- |
| DA can be described as a technique of hinding internal details of a program and exposing functionality only| While DE is a technique of binding up data along with its methods as a single unit |
| Problems are solved at designed or interface level | While, problems are solved at implementation level |
| Performed by using interface and abstract class   | Performed by using access modifiers like private, protected and public        |
| Implementation complexities are hidden using abstract class  and interface  | While, data is hidden using method get() and set()          |

</p>
</details>  

**C. Inheritance and Polymorphism**
<details>
<summary>Sample Answer </summary>
<p>

| Inheritance    |Polymorphism |
| ----------- | ----------- |
| A new class (Derived class) inherits the features from the base class | While, Polymorphism is that which can be defined in multiple forms |
| It is basically applied to class | While, it is applied to functions or methods |
| Help to reuse and reduce code length in OOP | Allows the object to decide which form of the function to implement at compile-time (overloading) as well as run-time (overriding) |

 Example:
 - Inheritance: class underGra inherits from class Student
 - Polymorphism: class Shape has function draw(), which isn't implemented yet. Class Circle inherits from Shape and has function draw() to draw a circle, class Square will draw a Square.

</p>
</details>  

**d. Dynamic binding and message passing**
<details>
<summary>Sample Answer </summary>
<p>

| Dynamic binding    |Message passing |
| ----------- | ----------- |
| Is a method of linking procedure call to the revelant code that will be executed only at run time | While, MP is the method of exchanging messenge between objects in OOP |
| Allows execution of different codes using the same object at run time | Allows developing communication between objects. It involves three basic steps, they are: Creating classes, Creating objects , Establishing communication among objects |
| Dynamic binding occurs during run time | Message passing occurs between two process |
| Isn't supported by Object based Programming | Supported by Object based Programming |
| A function call associated with a polymorphic reference depends on the dynamic type of that reference | Communication with an object is feasible as long as it is alive |


</p>
</details>  


### No. 3
**Question:**

**a. What is access modifiers established for members and external users in object oriented language in general and c++ in particular?**
<details>
<summary>Sample Answer </summary>
<p>

**Access modifiers** are used to implement an important aspect of OOP - Data hiding. Access modifiers in a class are used to assign accesibility to the
class members. There are three types of access modifiers in C++:
- Public
- Private
- Protected

*Note:* The default access modifier is *private* if we don't specify any.

1. **Public**: All public members will be available to everyone and can be accessed from anywhere in the program by using direct member acces operator (.)
2. **Private**: The private members can only be accessed by member functions inside the class. They are not allowed to be accessed directly by any object or functions outside the class. Only the member functions or friend class (function) can accessed private data member of the class.
3. **Protected**: Protected access modifier is similar to private access modifier in the sense that it can’t be accessed outside of it’s class unless with the help of friend class, the difference is that the class members declared as Protected can be accessed by any subclass(derived class) of that class as well.


</p>
</details>  

**a. List the drawbacks of classes with all public data members.?**
<details>
<summary>Sample Answer </summary>
<p>

When acces modifier of all data members are *public*, we can face some serious problem:
- Violating one of the basic principles of OOP - Encapsulation of data.

Example: Consider class named BankAccount, if data *accountBalance* is public variable, the value of this variable may be changed by any user of the class. This won't happen if *accountBalance* is declared private.
- Other functions in program can change public data which may lead to many errors.
- Users may not know your codebase well and will end up changing the data members in unexpected ways causing all sorts of potential problems.

</p>
</details>  

### No. 4
**Question: What is meant by function overloading? Write a C++ program to illustrate the function polymorphism.**

<details>
<summary>Sample Answer</summary>
<p>

**Function overriding** is a feature of OOP where two or more functions can have the same name but different parameters list (It means the data type and sequence of the parameters). When a function name is overloaded with different jobs it is called Function Overloading.

**Program**:
1. Program 1:
```cpp
class Shape
{
public:
    void draw()
    {
        //Draw a shape
    }
};
class Square : public Shape
{
public:
    void draw()
    {
        cout << "You wrote a square!";
    }
};
class Circle : public Shape
{
public:
    void draw()
    {
        cout << "You wrote a circle!";
    }
};

//When you call  Square sq;
    sq.draw();
    cout << endl;
    Circle cr;
    cr.draw();
//Output
You wrote a square!
You wrote a circle!

```

2. Program 2:
```cpp
class Poly
{
public:
    void print(int x)
    {
        cout << "We have an integer: " << x;
    };
    void print(int x, int y)
    {
        cout << "We have two integers: " << x << " and " << y;
    };
    void print(double x)
    {
        cout << "We have a double: " << x;
    };
};
```


</p>
</details>  


### No. 5
**Question: Write a C++ program to find the area of circle, rectangle and triangle using function overloading. Assume function name is “AREA”.**

<details>
<summary>Sample Answer</summary>
<p>

```cpp
class Calc{
    public:
    double AREA(double r){
        //Area of Circle
        return 3.14 * r * r;
    }
    double AREA(double x, double y){
        //Area of Rectangle
        return x * y;
    }
    double AREA(double a, double b, double c){
        //Area of Triangle - Using Heron's Formula
        double p = (a + b + c) / 2;
        return sqrt(p * (p - a) * (p - b) * (p - c));
    }
};
```

</p>
</details>  

### No. 6
**Question: Write a C++ program to add two complex numbers by passing objects as arguments into the functions and returning object. Explain concept in short.**

<details>
<summary>Sample Answer</summary>
<p>

```cpp
class Complex
{
private:
    //z= a + bi;
    int a;
    int b;
public:
    Complex(int a=0, int b=0){
        this->a = a;
        this->b = b;
    }
    int getReal(){
        return this->a;
    }
    int getIma(){
        return this->b;
    }
    Complex Add(Complex z1, Complex z2){
        int real = z1.getReal() + z2.getReal();
        int ima = z1.getIma() + z2.getIma();
        return Complex(real, ima);
    }
};


Complex z1(5, 2);          // z1 = 5 + 2i
Complex z2(5, 8);          // z2 = 5 + 8i
Complex z = z.Add(z1, z2); // z= 10 + 10i

cout << z.getReal() << " + " << z.getIma() << "i";
```

</p>
</details>  

### No. 7
**Question: Create a class to represent a bank account , include the following members:**
1. **Data members**:
- Name of the depositor
- Account number
2. **Member functions**:
- Deposit an amount
- Withdraw an amount
- Display name and balance

<details>
<summary>Sample Answer</summary>
<p>

```cpp
class bankAccount
{
private:
    string name;
    double balance;
public:
    bankAccount(string name ="", double balance =0){
        this->name = name;
        this->balance = balance;
    }
    void deposit(double amount){
        this->balance += amount;
    }
    void withdraw(double amount){
        this->balance -= amount;
    }
    void display(){
        cout << "Name: " << this->name << endl;
        cout << "Your balance: " << this->balance;
    }
};
```

</p>
</details>  

### No. 8
**Question: List the difference between**

**a. Call by value & call by reference**

<details>
<summary>Sample Answer</summary>
<p>

|Call by value   |Call by reference |
| ----------- | ----------- |
|When calling a function, we pass the value of variables to it| While, we pass address of variables (Location to variable) to the function |
|A copy of variable is passed | Whereas, in Call by reference the variable itself is passed |
| the changes made to the dummy variables in the called function have no effect on the values of actual variables in the calling function | Any changes with variable in the function called lead to the change to the actual variable |

**Example**:
```cpp
void increaseVal(int a){
    a++;
}
void increaseRefe(int &a){
    a++
}

int a = 10;
increaseVal(a); // a is still 10 after function called
increaseRefe(a); // a now is 11
```

</p>
</details>  


**b. Structure and Class**

<details>
<summary>Sample Answer</summary>
<p>

|Structure   |Class |
| ----------- | ----------- |
| The members are public by default | While with class, the members are private by default |
| For inheritance if you don’t specify anything then the struct will inherit publicly from its base class | while the class will do private inheritance |

</p>
</details>  


### No. 10
**Question: What is static data member and static member function? When do we declare member of class static?**


<details>
<summary>Sample Answer</summary>
<p>

**Static data members** are class members decleard with keyword *static*. They have some characterisitcs:
- A static member is shared by all objects of the class.
- It is initialized to zero when the first object of its class is created (if no other initialization is permitted).
- It is visible only within the class,but its lifetime is the entire program.

**Static member function** is class function decleard with keyword *static*, and can be called even when an object of the class is not initialized.
- A static member function can only access static data member, other static member functions and any other functions from outside the class.
- A regular function can access static variables but a static function cannot access regular variables
- Static member functions are not attached to a particular object, they can be called directly by using the class name and the scope resolution operator (::).

**We declear member of class static when**:
- We want to record date common to all objects of a class. For example, we can use a static data member to count the number of objects created.

</p>
</details>


### No. 12
**Question: What is friend function? What are merits and demerits of using friend functions?**


<details>
<summary>Sample Answer</summary>
<p>

**A friend function** of a class is defined outside the class's scope but it has the right to access all the private and protected members of the class.  Even though the prototypes for friend functions appear in the class definition, friends are not member functions.

**Example**:
```cpp
class getNum{
    private:
        int num;
    public:
    getNum(int num = 10){
        this->num = num;
    }
    friend void printNum(getNum a);
};

void printNum(getNum a){
    cout << "Num in class is: " << a.num;
}
```
**Merits of Friend function**:
- We can use a friend function to bridge two classes by operating objects of two different classes.
- Allows sharing private class data by a non-member function.
- It can be used to increase the versatility of overloading operator.
- Provides functions that need data which is not normally used by the class.

**Demerits of Friend function**:
- It violates the law of data hiding by allowing access to private members of the class from outside the class.
- Breach of data integrity.
- Conceptually messy.


</p>
</details>

### No. 14
**Question: Write a program for finding GCD of two positive integers using reference types as function parameter.**


<details>
<summary>Sample Answer</summary>
<p>

```cpp
int findGCD(int &x, int &y){
    while(x!=y){
        if(x>y)
            x = x - y;
        else
            y = y - x;
    }
    return x;
}
```

</p>
</details>

## Summary
That's all for the revision! I hope it will help you review about OOP :wink:.

See you in next topic :heart_eyes:.

Love you guys <3.
