---
title: An awesome framework for Node.
author: Giovani Fouz Jiménez
description: Introduction to express...
img: node.jpg
date: December 1, 2022
---

### Wonderful ExpressJs!

### What is Node.Js ?

Node.js is a JavaScript run time environment which is used to create server-side applications and tools. Node.js is fast, portable, and written in JavaScript but it does not directly support common tasks such as handling requests, serving files, and handling HTTP methods such as GET and POST. This is where Node.js’s rich ecosystem comes to our aid.

### What is Express.Js ?

Express.js (Express) is a light web framework which sits on top of Node.js and it adds functionality like (middleware, routing, etc.) and simplicity to Node.js.

### A brief explanation!

When creating a Node.js web application, we write a single JavaScript application which listens to requests from the browser, based on the request, the function will send back some data or an HTML web page.

### Request and Response objects.

A request handler is a JavaScript function which takes a request and sends an appropriate response.
Node.js APIs can get complex and writing how to handle a single request can end up being over many lines of code. Express makes it easier to write Node.js web applications.

### Advantages of using Express with Node.js

Express lets you take away a lot of the complexities of Node.js while adding helpful functions to a Node.js HTTP server.
Instead of a large request handler function, Express allows us to handle requests by writing many small modular and maintainable functions.
Express is not opinionated, meaning Express does not enforce any “right way” of doing things. You can use any compatible middleware, and you can structure the app as you wish, making it flexible.
We can integrate with a template rendering engine (also called a view rendering engine in some articles) of our choice like Jade, Pug, EJS, etc.
A template engine enables you to use static template files and at runtime change the values of variables in those files.
You can set up “middleware” for request processing.

### What is a Middleware?

Middleware is a set of functions that sit between a raw request and the final intended route. Middleware functions have access to all the HTTP requests coming to the server. Middleware can handle tasks such as logging, sending static files, authorization, and session management, etc.

In Node.js, the request and response objects are passed to one function (request handler) that we write, in Express these objects are passed through a set of functions, called the middleware stack.

Express will start at the first function in the stack and execute in order down the stack.

Every function in the stack takes three arguments request, response and next. next is a function, that when called Express executes the next function in the stack. This is a subtle difference between middleware and a route handler which we saw above.

Let’s look at a basic static file server to understand middleware. Initialize a new npm project. Then create a directory named static and copy-paste any available static files into the folder (text, images, etc.).
