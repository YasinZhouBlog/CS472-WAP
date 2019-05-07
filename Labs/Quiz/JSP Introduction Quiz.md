1. What is the main value of Java Server Pages?
The web application developed by JSP is a dynamic web page that can be used across platforms.
JSP pages are another way to write servlets without becoming a Java programming expert.

2. How are JSP pages related to servlets?
• When a browser asks for a JSP, the JSP engine first
checks to see whether it needs to compile the page. If the
page has never been compiled, or if the JSP has been
modified since it was last compiled, the JSP engine
compiles the page.
• The compilation process involves three steps:
• Parsing the JSP.
• Turning the JSP into a servlet.
• Compiling the servlet

3. How are JSP pages related to HTML?
The JSP engine compiles the servlet into an executable class and passes the original request to the servlet engine.
During execution, the servlet produces an HTML-formatted output and embeds it in an HTTP response for delivery to the web server.
The web server returns the HTTP response to your browser as a static HTML page.
Web browsers process dynamically generated HTML pages in an HTTP response as if they were processing static web pages.

4. Give an example of a JSP scriptlet and show how it will look in the JSP servlet .
```JSP
<html>
<head><title>Hello World</title></head>
<body>
Hello World!<br/>
<%
out.println("Your IP address is " + request.getRemoteAddr());
%>
</body>
</html>
```

5. Give an example of a JSP declaration and show how it will look in the JSP servlet.
```JSP
<%! int i = 0; %> 
<%! int a, b, c; %> 
<%! Circle a = new Circle(2.0); %> 
```

6. Give an example of a JSP comment and show how it will look in the JSP servlet.
```JSP
<%-- This part of the comment will not be displayed in the webpage --%>
```

7. Give an example of a JSP expression and show how it will look in the JSP servlet.
```JSP
<p>
    Today is: <%= (new java.util.Date()).toLocaleString()%>
</p>
```

8. Give an example of a JSP directive and show how it will look in the JSP servlet.
```JSP
<%@ page attribute="value" %>
```
9. Explain how an EL expression is evaluated.
```JSP
<%= ((Person) request.getAttribute(“person”)).getDog().getName() %>
<%-- EL simplifies JSP expression syntax --%>
${person.dog.name}
```
10. Explain how servlet attributes are involved in EL expressions.
• checks page scope for an attribute named "something",
if found use it.
• otherwise check request scope for an attribute named "something",
 if found use it.
• otherwise check session scope for an attribute named "something",
 if found use it
• otherwise check application scope for an attribute named "something",
 if found use it.
• otherwise ignore the expression.
11. Explain how servlets and JSPs use request dispatch to interact.
MVC cleanly separates business data and logic from the view, and the two are connected by way of a controller. Typical implementation introduces just one servlet which generically dispatches requests to JSP handling code. 
