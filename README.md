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
35 // Valid number
45.3 // Also valid number
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

[Back to top](#2024-10-24-intro-to-javascript)

---

### const

[Back to top](#2024-10-24-intro-to-javascript)

---

### let

[Back to top](#2024-10-24-intro-to-javascript)

---

##
