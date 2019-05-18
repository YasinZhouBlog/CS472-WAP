jQuery Quiz II
December 2016
1. Which, if any, of the following 3 code fragments are equivalent? Explain why they are different, if
they are. Explain why they can have different parameters and be equivalent, if they are equivalent.
```
//code fragment 1
$("li").each(function(idx, e) {
$(e).css(“color”, “yellow”); });
//code fragment 2
$("li").each(function() {
$(this).css(“color”, “yellow”); });
//code fragment 3
$("li").each(function(idx) {
$(this).css(“color”, “yellow”); });
```
All three code fragment changes "li" color to yellow.
The code fragment 1 takes argument index and element. It is changing color of each element to yellow. We can carry out other operation based on index. 
Fragment 2 takes no argument and cannot change color based on element. Here, it is changing color based on jquery contructor i.e. $(this). It doesn't have index but can obtain position from the jquery constructer.
Fragement 3 takes index as argument. It also doesn't have element as argument and uses jquery constructer i.e. $(this). We can carry out other operation based on index.

2. Write a jQuery expression to find all divs on a page that include an unordered list in them, and make
their text color be blue.
```
<div>no ul here </div>
<div>
This does contain a ul.
<ul>
<li>the first item</li>
<li>the second item</li>
</ul>
</div>
<script>
<!—INSERT YOUR JQUERY CODE HERE - - >
</script>
</body>
```
`$("div:has(ul)").css({"color":"blue"});`
3. Write jQuery code to append the following div element (and all of its contents) dynamically to the body
element.
```
<div><h1>JQuery Core</h1></div>
HTML:
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JS Bin</title>
</head>
<body>
</body>
</html>
```
`$("body").append("<div><h1>JS Bin</h1></div>");`