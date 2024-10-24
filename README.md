# 2024 10 24 Intro to JavaScript

We start with the foundations when it comes to JS. Data types, variables, user-input and output, operators och if-statements.

<details open>
<summary>Table of content</summary>

[Data Types](#data-types-in-javascript)

- [String](#string)
- [Number](#number)
- [Boolean](#boolean)
- [Undefined](#undefined)
- [Null](#null)
- [Objects](#object)
- [Array](#array)
- [Functions](#functions)
- [Date](#date)

[Variables](#variables)

- [var](#var)
- [const](#const)
- [let](#let)

</details>

## Data Types in JavaScript

| Data Type   | Description                                                          |
| ----------- | -------------------------------------------------------------------- |
| `String`    | Represents text: `"hello"`, `'world'`.                               |
| `Number`    | Represents both integers and floating-point numbers: `42`, `3.14`.   |
| `Boolean`   | Represents logical values: `true` or `false`.                        |
| `Undefined` | A variable that has been declared but not yet assigned a value.      |
| `Null`      | Represents the intentional absence of any object value.              |
| `Object`    | Represents a collection of key-value pairs. More about it later.     |
| `Array`     | A list of values, objects or other arrrays: `[1, 2, 3]`.             |
| `Function`  | A block of code designed to perform a specific task: `function() {}` |
| `Date`      | Represents dates and times: `new Date()`.                            |

### String

A string is just a collection of characters with in quotes. It can be both double quotes and single quotes. But there also exist a third way of writing strings.

```js
"Niklas"; // Valid string
"Niklas" // Valid string
`Niklas`; // Also valid string, but with backtics.
```

These above are all equal, but the backtics-version have some extra functionality.

For instance, backtics allows multiline strings. The other two don't.

```js
"My name
is Niklas" // This won't work in a js-file.

`My name
is Niklas.` // This however works just fine.
```

Another of added functionality with backtics is the ability to inject variables inside the string, if it is defined with backtics.

```js
const name = "Niklas";
const lastName = "Fähnrich";

`Hello, my name is ${name} ${lastName}!`;
```

This is also called a string literal.

If we want to do the same thing with regular quotation marks, we need to concatinate. _( add )_.

```js
const name = "Niklas";
const lastName = "Fähnrich";

"Hello, my name is " + name + lastName + ".";
```

[Back to top](#2024-10-24-intro-to-javascript)

---

### Number

Represents number, both integers and decimal values. Just remember that decimal values are written with a period and not a comma.

```js
35; // Valid number
45.3; // Also valid number
```

[Back to top](#2024-10-24-intro-to-javascript)

---

### Boolean

A boolean represents either true or false.

```js
const somethingIsTrue = true;
const somethingIsFalse = false;
```

[Back to top](#2024-10-24-intro-to-javascript)

---

### Undefined

[Back to top](#2024-10-24-intro-to-javascript)

---

### Null

[Back to top](#2024-10-24-intro-to-javascript)

---

### Object

[Back to top](#2024-10-24-intro-to-javascript)

---

### Array

[Back to top](#2024-10-24-intro-to-javascript)

---

### Functions

[Back to top](#2024-10-24-intro-to-javascript)

---

### Date

A Date is just a value that represents a date or time.

```js
const now = new Date();
```

This `new Date()` returns a date object that we can manipulate in many ways and use in our applications.

[Back to top](#2024-10-24-intro-to-javascript)

---

## Variables

Variables is a way of storing values in resuable packages so to speak.

| Feature        | `var`                           | `let`                                       | `const`                                             |
| -------------- | ------------------------------- | ------------------------------------------- | --------------------------------------------------- |
| Scope          | Function-scoped                 | Block-scoped                                | Block-scoped                                        |
| Hoisting       | Yes, initialized as `undefined` | Yes, but not initialized before declaration | Yes, but not initialized before declaration         |
| Re-declaration | Allowed                         | Not allowed                                 | Not allowed                                         |
| Reassignment   | Allowed                         | Allowed                                     | Not allowed (for primitive values)                  |
| Immutability   | No                              | No                                          | Yes (for the reference, but not for objects/arrays) |

### var

`var` is a key word that is used to create variables. And the key words is always paired with a variable name and a value, and the value can of course be of different data types.

```js
var firstName = "Niklas";
console.log(firstName);
```

`var` has some special characteristics, one of them is that it is re-declarable. That means that we can declare the same variable again with a new value.

```js
var firstName = "Niklas";
console.log(firstName); // Niklas

var firstName = "Henrik"; // Re-declaration, it's valid.
console.log(firstName); // Henrik
```

You can also re-assign the value on a `var`.

```js
var firstName = "Henrik";
console.log(firstName); // Henrik

firstName = "Erik"; // Re-assignment, it's valid.
console.log(firstName); // Erik
```

`var` also has a function scoop, what is that? If a `var` is declared inside a function, it only lives inside that function. But if `var` is declared on the top level of a JS file, it gets "global" scope, which means it's accesable inside the entire JS-file.

Because of this, DON'T use `var` at all! Use the newer ones `let` and `const` instead.

[Back to top](#2024-10-24-intro-to-javascript)

---

### const

`const` is also keyword for creating variables. It stands for 'constant' which means it is supposed to be constant. It means we shouldn't change this variable after it has been created.

```js
const age = 39;
console.log(age); // 39

age = 45; // Won't work, VSC will sometimes complain and browser will always complain.
```

We can not re-declare a `const`.

```js
const age = 39;
const age = 45; // Won't work, VSC will complain.
```

`const` has a block scoop, which means if it's created inside of a pair of brackets, it only lives in there. If it's cerated at the top level of a JS-file, it lives inside the entire file.

```js
const firstName = "Niklas";
const lastName = "Johnsson";

if (true) {
  const lastName = "Svensson"; // A totally different variable, it's another scope.
  console.log(firstName); // Niklas
  console.log(lastName);
}

console.log(firstName); // Exists.
console.log(lastName); //Doesn't exist in this scope.
```

[Back to top](#2024-10-24-intro-to-javascript)

---

### let

[Back to top](#2024-10-24-intro-to-javascript)

---

##
