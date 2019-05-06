1. Can post requests be bookmarked? What are the problems?
No, it can't be. A post request however is not idempotent. 
>The special thing here however is that a GET request is idempotent. In other words, it is guaranteed to give the same result everytime when you invoke it. That is quite simple as all request parameters are just available in the request URL. You can use it to preprocess data prior to display. In Java Servlet world, you normally use doGet() method for this which preloads some stuff based on the request parameters at end forwards the request to a JSP file for display.
>A POST request however is not idempotent. In other words, it is not guaranteed to give the same result everytime when you invoke it. All request parameters are included in the request body. It is not visible for the enduser and also not visible in the request URL. In other words, you cannot bookmark it. You can use it ro postprocess data after a form submit. In Java Servlet world, you normally use doPost() method for this which gathers the request parameters and stores it in some database and at end forwards or redirects the request to a JSP file for result/confirmation/display.

2. What is the purpose of request dispatching?
In the Servlet, the RequestDispatcher object can be used to forward the request to another Servlet or JSP page, or even an HTML page, to handle the response to the request.

3. What is the difference between redirect and request dispatch?
1, positioning and forwarding
The Redirect relocates to another resource to process the request, and the URL is relocated to allow the client to revisit another resource. The Dispatcher method is forwarded to another resource to process the request. The URL will not change. Hidden changes in the processing object.
2, the scope of the resource to process the request
The Redirect can relocate resources across web applications and servers to process requests. The Dispatcher method can only be forwarded inside the application.

4. What is an attribute ?
An attribute is an object that is used to share information in a web app. Attribute allows Servlets to share information among themselves. Attributes can be SET and GET from one of the following scopes : request, session, application.

5. What is the difference between attributes and parameters?
1.Different sources:
The parameter is provided by the user from the client (browser). If the GET method is provided from the URL, the POST method is provided from the request body.
The attribute is a server-side component (JSP or Servlet) set with requst.setAttribute().
2.Different operations:
The value of the parameter can only be read and cannot be modified. The reading can be read using request.getParameter();
The value of the attribute can be read or modified. The read can be done using request.setAttribute(), which can be set using request.getAttribute()
3.Different data types:
Parameter (parameter) Regardless of the value semantics of the foreground, it is treated as a String type when the server obtains it, and the parameter value of the client can only be a simple type value, not a complex type, such as an object.
The value of an attribute can be any of the Object types.

6. What are dangers of using attributes?
Not thread safe

7. What does it mean to say that http is stateless? Give an example of a stateful protocol.
HTTP is a stateless protocol, which means that after a web server responds to a request, there is no “memory” of the request or who sent it.

8. Give 5 different methods for maintaining state information (count each attribute scope as one method).
5 ways to maintain state
Container managed state (3 scopes)
	1. request scope: destroyed when servlet finishes processing request
	2. session scope: destroyed when user closes browser
	3. application scope destroyed when Container stopped.
	4. Cookies saved on browser,
	temporary (deleted when the browser closes)
	permanent
	5. Hidden fields on a form

9. How long does a session last?
--  Client side
• Browser discards all “temporary” cookies when it closes
• Every tab or window of browser will have access to all cookies
--  Server side
• How to get a session
session = request.getSession(); //creates new session if none exists
session.isNew(); //checks whether is a new session
request.getSession(false); //returns null if none exists
• How to get rid of the session
sessions can become a memory resource issue
container can’t tell when browser is finished with session
• 3 ways for container to remove sessions
session timeout in the DD 
session.setMaxInactiveInterval(20*60); //seconds
session.invalidate(); //immediate

10. What is a cookie, and how long does a cookie last?
Cookies are small files which are stored on a user's computer. 
• temporary cookie
browser removes when it closes 
this is default
session cookies are like this
• permanent cookie
a cookie that has a max age set

11. What is the purpose of URL rewriting?
1.Shorten the URL and hide the actual path to improve security.
2.Easy to remember and type by the user.
3.Easy to be included in search engines.

12. Why does the request attribute report ‘null’ for the maintaining state demo?
The life cycle of the request attribute is only in a request (including dispatching).The demo is two request
