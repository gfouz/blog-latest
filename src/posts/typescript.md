---
title: String or undefined!
author: Giovani Fouz Jiménez
description: When this kind of error occurs...
img: typescript.png
date: octuber 27, 2022
---

## Argument of type 'string or undefined' is not assignable to parameter of type string 

![react wallpaper](/images/typescript.png)

The error "Argument of type string | undefined is not assignable to parameter of type string" occurs when a possibly undefined value is passed to a function that expects a string. To solve the error, use a type guard to verify the value is a string before passing it to the function.

Here is an example of how the error occurs

```ts
function getMessage(message: string) {
  return message;
}

// 👇️ const message: "Greetings" | undefined
const message = Math.random() > 0.5 ? 'Greetings' : undefined;

// ⛔️ Error: Argument of type 'string | undefined' is not
// assignable to parameter of type 'string'.
// Type 'undefined' is not assignable to type 'string'. ts(2345)
getMessage(message);


```

The function expects to be called with an argument of type string, but the passed in argument is possibly undefined.

TypeScript is telling us that the value we are passing to the function might be undefined, which is not compatible with the type of the function's parameter, which only expects a string.

One way to get around this is to use a non-null assertion.


```ts
function getMessage(message: string) {
  return message;
}

// 👇️ const message: "Greetings" | undefined
const message = Math.random() > 0.5 ? 'Greetings' : undefined;

getMessage(message!); // 👈️ non-null assertion

```

The exclamation mark is the [non-null assertion](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-) operator in TypeScript.
It removes undefined and null from a type without doing any explicit type checking.

When you use this approach, you basically tell TypeScript that this value will never be undefined or null.

This is very similar to a [type assertion](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) and should only be used when you're absolutely sure that the value is of the expected type.


```ts
function getMessage(message: string) {
  return message;
}

// 👇️ const message: "Greetings" | undefined
const message = Math.random() > 0.5 ? 'Greetings' : undefined;

getMessage(message as string); // 👈️ type assertion

```

Type assertions are used when we have information about the type of a value that TypeScript can't know about.
We effectively tell TypeScript that the message variable stores a string and not to worry about it.
An alternative and much better approach is to use a type guard.


```ts
function getMessage(message: string) {
  return message;
}

// 👇️ const message: "Greetings" | undefined
const maybeMessage = Math.random() > 0.5 ? 'Greetings' : undefined;

const message: string = maybeMessage !== undefined ? maybeMessage : '';

getMessage(message);

```
We used the ternary operator to check if the maybeMessage variable is not equal to undefined.

If it's not equal to undefined, it gets assigned to the message variable, otherwise we use an empty string as a fallback.

This way we can be sure that the message variable will always get assigned a string, even if the maybeMessage variable is undefined.
You could also use the nullish coalescing operator (??) to solve the error


```ts
function getMessage(message: string) {
  return message;
}

// 👇️ const message: "Greetings" | undefined
const maybeMessage = Math.random() > 0.5 ? 'Greetings' : undefined;

getMessage(maybeMessage ?? ''); // 👈️ nullish coalescing


```
The nullish coalescing operator (??) enables us to specify a fallback for when a value is undefined or null.
If the maybeMessage variable is undefined or null, we pass an empty string argument to the function.

You can also use the logical OR (||) operator in a similar way.


```ts
function getMessage(message: string) {
  return message;
}

// 👇️ const message: "Greetings" | undefined
const maybeMessage = Math.random() > 0.5 ? 'Greetings' : undefined;

getMessage(maybeMessage || '');


```

The logical OR (||) operator returns the value to the right if the value to the left is falsy.

This is different than the nullish coalescing operator (??), because nullish coalescing only checks for undefined and null.
The logical OR (||) operator would return the value to the right if the value to the left is any of the following: null, undefined, false, 0, "" (empty string), NaN (not a number).

The cause of the "Argument of type 'string | undefined' is not assignable to parameter of type string" error is that the type of the function's parameter and the type of the passed in argument are not compatible.

Depending on your use case, you could also solve the error by updating the type of the function's parameter and making the parameter and the passed in argument compatible types.

```ts
// 👇️ parameter is type string or undefined
function getMessage(message: string | undefined) {
  return message;
}

// 👇️ argument is also type string or undefined
const maybeMessage = Math.random() > 0.5 ? 'Greetings' : undefined;

getMessage(maybeMessage);

```

The function's parameter is now typed as string or undefined, so we are able to pass it an argument of type string or undefined because the two types are compatible.

The function's parameter is now typed as string or undefined, so we are able to pass it an argument of type string or undefined because the two types are compatible.

We used a union type in the example, but we could have also marked the parameter as optional.

```ts
function getMessage(message?: string) { // 👈️ optional
  return message;
}

// 👇️ argument is also type string or undefined
const maybeMessage = Math.random() > 0.5 ? 'Greetings' : undefined;

getMessage(maybeMessage);

```

The code snippet achieves the same result. When a parameter is marked as optional, it can either be of the specified type or have an undefined value.

Conclusion #
The error "Argument of type string | undefined is not assignable to parameter of type string" occurs when a possibly undefined value is passed to a function that expects a string. To solve the error, use a type guard to verify the value is a string before passing it to the function.

