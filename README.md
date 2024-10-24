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

[Back to top](#2024-10-24-intro-to-javascript)

---

### Number

[Back to top](#2024-10-24-intro-to-javascript)

---

### Boolean

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

| Feature        | `var`                                  | `let`                                       | `const`                                     |
|----------------|----------------------------------------|---------------------------------------------|---------------------------------------------|
| Scope          | Function-scoped                        | Block-scoped                                | Block-scoped                                |
| Hoisting       | Yes, initialized as `undefined`        | Yes, but not initialized before declaration | Yes, but not initialized before declaration |
| Re-declaration | Allowed                                | Not allowed                                 | Not allowed                                 |
| Reassignment   | Allowed                                | Allowed                                     | Not allowed (for primitive values)          |
| Immutability   | No                                     | No                                          | Yes (for the reference, but not for objects/arrays) |


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