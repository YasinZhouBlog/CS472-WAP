1. In jQuery terminology, what is the difference between the “jQuery function” and the “jQuery object”? 
The jQuery function refers to the global jQuery function/object or the $ function depending on the context
A jQuery object is the object returned by the jQuery function that often represents a group of elements

2. Write jQuery code to find all h1 elements that are children of a div element and make their background color red 
$("div h1").css("background-color","red");

3. Use a jQuery method to insert the text "YES!" at the end of the p element.
$("p").append("YES!");