Javascript Scope Exercises
1. Determine what this Javascript code will print out (without running it):
```
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
    var x = 10;
    document.write(x);
    document.write(a);
    var f = function(a, b, c) {
        b = a;
        document.write(b);
        b = c;
        var x = 5;
    }
    f(a,b,c);
    document.write(b);
}
c(8,9,10);
document.write(b);
document.write(x);
```
1,8,8,9,10,1

2. What is the difference between a method and function?
A function is a piece of code that is called by name. It can pass some data (parameters) into it, then return some data (return value), or no return value.
All data passed to the function is explicitly passed.
A method is also a piece of code that is also called by name, but it is associated with an object. The methods and functions are roughly the same, but with two main differences:
The data in the method is implicitly passed;
The method can manipulate the data inside the class (remember, the object is the instantiation of the class - the class defines a data type, and the object is an instantiation of the data type)

3. What does 'this' refer to when used in a Java method?
The current class

4. What does 'this' refer to when used in a JavaScript method?
The current object

5. What does 'this' refer to when used in a JavaScript constructor function?
The newly created object

6. Assume object x is the prototype for object y in Javascript. Object x has a method f( ) containing keyword 'this'. When f is called by x.f( ), what does 'this' refer to?
x

7. What is a free variable in JavaScript?
A variable referred to by a function that is not one of its parameters or local variables.

8. Create an object that has properties with name = "fred" and major="music" and a property that is a function that takes 2 numbers and returns the smallest of the two, or the square of the two if they are equal.
```
var a = {
    name: "free",
    major: "music",
    smallest: function (a, b) {
        if (a < b) {
            return a;
        } else if (a > b) {
            return b;
        } else {
            return Math.sqrt(a);
        }
    }
}
```

9. Write Javascript code for creating three Employee objects using the "new" keyword and a constructor function. Employee objects have the following fields: name, salary, position.
```
function Employee(name, salary, position) {
    this.name = name;
    this.salary = salary;
    this.position = position;
}
var e1 = new Employee("name1", 1000, "position1");
var e2 = new Employee("name2", 1500, "position2");
var e3 = new Employee("name3", 1300, "position3");
```

10. Write a Javascript function that takes any number of input arguments and returns the product of the arguments.
```
function f() {
    let sum = 0;
    for (let i = 0; i < arguments.length; ++i) {
        sum += arguments[i];
    }
    return sum;
}
```

11. Write an arrow function that returns the maximum of its three input arguments.
```
var f1 = (a,b,c) => {
    return Math.max(a,b,c);
}
```
