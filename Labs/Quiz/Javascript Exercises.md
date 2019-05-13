Javascript Exercises
1. What is the difference between the following 2 statements?
```
setTimeout(booyah, 2000);
```
main is after 2s, call booyah function
```
setTimeout(booyah(), 2000);
```
   main is after 2s, call the value of return by booyah function 
   
2. What do the following 2 alerts display (answer without running the code)?
```
var myfunc = function(a, x) {
return a * x;
};
var x = myfunc(2, 3);
var y = myfunc;
alert(x);
alert(y(2,3));
```
Same

3. Write functions booyah1 and booyah2 so that in both cases below, an alert box comes up after 2 seconds that
says “BOOYAH!”
setTimeout(booyah1, 2000);
setTimeout(booyah2(), 2000);
```
function booyah1() {
alert(BOOYAH!);
}
function booyah2() {
return function () {
alert(BOOYAH!);
}
}
```
4. What is "Unobtrusive Javascript"? What is the practical application of Unobtrusive Javascript (and the reasons for using it)?
Unobtrusive Javascript -- separation of content (HTML) and behavior (Javascript)
